import {
  ArrowFunction,
  BinaryExpression,
  CallExpression,
  ClassDeclaration,
  ConstructorDeclaration,
  ElementAccessExpression,
  EnumDeclaration,
  Expression,
  ForStatement,
  FunctionDeclaration,
  ImportDeclaration,
  JSDocableNode,
  MethodDeclaration,
  Node,
  ParameterDeclaration,
  PropertyAccessExpression,
  PropertyDeclaration,
  Scope,
  SourceFile,
  Statement,
  SyntaxKind,
  Type,
  TypeNode,
  VariableDeclarationKind,
} from 'ts-morph';

import { fail, isServiceFile } from './index';

/**
 * The Python module of a service, from the name of its file
 */
export function pythonServiceModule(filename: string): string {
  return `_${filename.replace(/-/g, '_')}`;
}

/**
 * Python precedence levels, from loosest to tightest binding
 */
const enum Prec {
  conditional = 1,
  or,
  and,
  not,
  comparison,
  additive,
  multiplicative,
  unary,
  primary,
  atom,
}

interface Expr {
  code: string;
  prec: Prec;
  /**
   * The negation of a membership test, `a not in b`
   */
  negated?: string;
}

const keywords = new Set([
  'False',
  'None',
  'True',
  'and',
  'as',
  'assert',
  'async',
  'await',
  'break',
  'class',
  'continue',
  'def',
  'del',
  'elif',
  'else',
  'except',
  'finally',
  'for',
  'from',
  'global',
  'if',
  'import',
  'in',
  'is',
  'lambda',
  'nonlocal',
  'not',
  'or',
  'pass',
  'raise',
  'return',
  'try',
  'while',
  'with',
  'yield',
]);

/**
 * snake_case as jsii-pacmak names the Python members, e.g. `ifAwsPrincipalIsAWSService` to
 * `if_aws_principal_is_aws_service`
 */
export function snakeCase(name: string): string {
  return name
    .replace(/([\p{Ll}\d])(\p{Lu})/gu, '$1_$2')
    .replace(/(\p{Lu})(\p{Lu}\p{Ll}+)/gu, '$1_$2')
    .toLowerCase();
}

/**
 * Python name of a method, parameter or variable
 */
export function pythonName(name: string): string {
  const snake = snakeCase(name);
  return keywords.has(snake) ? `${snake}_` : snake;
}

/**
 * Python name of a static property, an enum member or a module constant
 */
export function pythonConstantName(name: string): string {
  return snakeCase(name).toUpperCase();
}

/**
 * The lines of a docstring with the given text
 */
export function docstring(text: string[]): string[] {
  // a quote must not start a triple quote, which would end the docstring
  const escaped = text.map((line) =>
    line
      .trimEnd()
      .replace(/\\/g, '\\\\')
      .replace(/"(?="")/g, '\\"'),
  );
  if (escaped.length == 1) {
    return [`"""${escaped[0].replace(/"$/, '\\"')}"""`];
  }
  return [`"""${escaped[0]}`, ...escaped.slice(1), '"""'];
}

/**
 * A Python string literal
 */
export function pyString(value: string): string {
  let out = '';
  for (const char of value) {
    const code = char.codePointAt(0)!;
    if (char == '\\' || char == "'") {
      out += `\\${char}`;
    } else if (char == '\n') {
      out += '\\n';
    } else if (char == '\r') {
      out += '\\r';
    } else if (char == '\t') {
      out += '\\t';
    } else if (code < 0x20 || code == 0x7f) {
      out += `\\x${code.toString(16).padStart(2, '0')}`;
    } else {
      out += char;
    }
  }
  return `'${out}'`;
}

function membership(element: string, container: string): Expr {
  return {
    code: `${element} in ${container}`,
    prec: Prec.comparison,
    negated: `${element} not in ${container}`,
  };
}

function wrap(expr: Expr, min: Prec): string {
  return expr.prec < min ? `(${expr.code})` : expr.code;
}

type Kind =
  | 'any'
  | 'string'
  | 'number'
  | 'boolean'
  | 'array'
  | 'map'
  | 'set'
  | 'record'
  | 'date'
  | 'regexp'
  | 'class'
  | 'undefined'
  | 'mixed';

/**
 * What a value is at runtime, which decides how operations on it are translated
 */
function kindOf(type: Type): Kind {
  if (type.isAny()) {
    return 'any';
  }
  if (type.isUndefined() || type.isNull()) {
    return 'undefined';
  }
  type = type.getNonNullableType();
  if (type.isUnion()) {
    const kinds = new Set(type.getUnionTypes().map((part) => kindOf(part)));
    return kinds.size == 1 ? [...kinds][0] : 'mixed';
  }
  if (
    type.isString() ||
    type.isStringLiteral() ||
    type.isTemplateLiteral() ||
    type.isEnum() ||
    type.isEnumLiteral()
  ) {
    return 'string';
  }
  if (type.isNumber() || type.isNumberLiteral()) {
    return 'number';
  }
  if (type.isBoolean() || type.isBooleanLiteral()) {
    return 'boolean';
  }
  if (type.isArray() || type.isTuple()) {
    return 'array';
  }
  const symbol = type.getSymbol();
  switch (symbol?.getName()) {
    case 'Map':
      return 'map';
    case 'Set':
      return 'set';
    case 'Date':
      return 'date';
    case 'RegExp':
      return 'regexp';
  }
  if (
    symbol
      ?.getDeclarations()
      .some((declaration) => Node.isClassDeclaration(declaration))
  ) {
    return 'class';
  }
  if (type.isObject() && !type.isInterface()) {
    return 'record';
  }
  return 'mixed';
}

export class PythonTranspiler {
  private lines: string[] = [];
  private depth = 0;
  private imports = new Set<string>();
  private names = new Map<string, string>();
  private serviceImports = new Map<string, Set<string>>();

  /**
   * Transpiles the source files into one Python module, in the given order
   */
  public transpile(files: SourceFile[], header: string): string {
    for (const file of files) {
      this.sourceFile(file);
    }
    const body = this.lines;

    const imports: string[] = ['from __future__ import annotations', ''];
    if (this.imports.has('datetime')) {
      imports.push('import datetime as _datetime');
    }
    if (this.imports.has('re')) {
      imports.push('import re as _re');
    }
    const code = body.join('\n');
    const usesSelf = this.imports.has('Self');
    const typing = usesSelf ? ['TYPE_CHECKING'] : [];
    if (this.imports.has('Any')) {
      typing.push('Any');
    }
    if (typing.length) {
      imports.push(`from typing import ${typing.join(', ')}`);
      imports.push('');
    }
    if (/\b_js\./.test(code)) {
      // the hand-written runtime with the JavaScript semantics that Python lacks
      imports.push('from . import _js');
    }
    // sorted like isort does
    for (const [module, names] of [...this.serviceImports].sort(([a], [b]) =>
      a < b ? -1 : 1,
    )) {
      imports.push(`from ${module} import ${[...names].sort().join(', ')}`);
    }
    if (usesSelf) {
      imports.push('');
      imports.push('if TYPE_CHECKING:');
      imports.push('    from typing_extensions import Self');
    }

    return `${[`# ${header}`, ...imports, ...body].join('\n').replace(/\n{4,}/g, '\n\n\n')}\n`;
  }

  private emit(line: string) {
    this.lines.push(line.length ? `${'    '.repeat(this.depth)}${line}` : '');
  }

  private indented(fn: () => void) {
    this.depth++;
    const before = this.lines.length;
    fn();
    if (this.lines.length == before) {
      this.emit('pass');
    }
    this.depth--;
  }

  /**
   * Registers a module level name and fails when two declarations map to the same Python name
   */
  private register(node: Node, name: string) {
    const location = `${node.getSourceFile().getBaseName()}:${node.getStartLineNumber()}`;
    const existing = this.names.get(name);
    if (existing !== undefined) {
      fail(node, `Python name ${name} is already used in ${existing}`);
    }
    this.names.set(name, location);
    return name;
  }

  /**
   * Imports of the generated service classes become imports of the emitted modules
   */
  private importDeclaration(declaration: ImportDeclaration) {
    const target = declaration.getModuleSpecifierSourceFile();
    if (target === undefined || !isServiceFile(target)) {
      return;
    }
    if (
      declaration.getDefaultImport() !== undefined ||
      declaration.getNamespaceImport() !== undefined
    ) {
      fail(declaration, 'Only named imports of services are supported');
    }
    const module = `.statement.${pythonServiceModule(target.getBaseNameWithoutExtension())}`;
    const names = this.serviceImports.get(module) ?? new Set<string>();
    for (const specifier of declaration.getNamedImports()) {
      if (specifier.getAliasNode() !== undefined) {
        fail(specifier, 'Aliased imports are not supported');
      }
      names.add(specifier.getName());
    }
    this.serviceImports.set(module, names);
  }

  private sourceFile(file: SourceFile) {
    for (const statement of file.getStatements()) {
      if (Node.isImportDeclaration(statement)) {
        this.importDeclaration(statement);
        continue;
      }
      if (
        Node.isExportDeclaration(statement) ||
        Node.isInterfaceDeclaration(statement) ||
        Node.isTypeAliasDeclaration(statement)
      ) {
        continue;
      }
      this.emit('');
      this.emit('');
      if (Node.isClassDeclaration(statement)) {
        this.classDeclaration(statement);
      } else if (Node.isEnumDeclaration(statement)) {
        this.enumDeclaration(statement);
      } else if (Node.isFunctionDeclaration(statement)) {
        this.functionDeclaration(statement);
      } else if (Node.isVariableStatement(statement)) {
        for (const declaration of statement.getDeclarations()) {
          const initializer = declaration.getInitializer();
          if (
            statement.getDeclarationKind() != VariableDeclarationKind.Const ||
            !initializer
          ) {
            fail(declaration, 'Module level variables must be constants');
          }
          const name = this.register(
            declaration,
            moduleConstantName(declaration.getName(), statement.isExported()),
          );
          this.emit(`${name} = ${this.expression(initializer).code}`);
          this.docstring(statement);
        }
      } else {
        fail(statement, 'Unsupported statement at module level');
      }
    }
  }

  private docstring(node: JSDocableNode & Node) {
    const docs = node.getJsDocs();
    if (docs.length == 0) {
      return;
    }
    const doc = docs[docs.length - 1];
    const text: string[] = [];
    const description = (doc.getDescription() ?? '').trim();
    if (description.length) {
      text.push(...description.split('\n'));
    }
    const tags: string[] = [];
    for (const tag of doc.getTags()) {
      const comment = (tag.getCommentText() ?? '').trim();
      if (Node.isJSDocParameterTag(tag)) {
        tags.push(`:param ${pythonName(tag.getName())}: ${comment}`);
      } else if (tag.getTagName() == 'returns') {
        tags.push(`:returns: ${comment}`);
      } else {
        tags.push(`@${tag.getTagName()} ${comment}`.trim());
      }
    }
    if (tags.length) {
      if (text.length) {
        text.push('');
      }
      text.push(...tags);
    }
    for (const line of docstring(text)) {
      this.emit(line);
    }
  }

  private enumDeclaration(declaration: EnumDeclaration) {
    const name = this.register(declaration, declaration.getName());
    this.emit(`class ${name}:`);
    this.indented(() => {
      this.docstring(declaration);
      for (const member of declaration.getMembers()) {
        const value = member.getValue();
        if (typeof value !== 'string') {
          fail(member, 'Enum members must be strings');
        }
        this.emit('');
        this.emit(
          `${pythonConstantName(member.getName())} = ${pyString(value)}`,
        );
        this.docstring(member);
      }
    });
  }

  private functionDeclaration(declaration: FunctionDeclaration) {
    const tsName = declaration.getName();
    if (tsName === undefined || declaration.getOverloads().length) {
      fail(declaration, 'Unsupported function');
    }
    const name = this.register(
      declaration,
      functionName(tsName, declaration.isExported()),
    );
    this.emit(
      `def ${name}(${this.parameters(declaration.getParameters()).join(', ')}) -> ${this.returnType(declaration)}:`,
    );
    this.indented(() => {
      this.docstring(declaration);
      this.statements(declaration.getStatements());
    });
  }

  private classDeclaration(declaration: ClassDeclaration) {
    const tsName = declaration.getName();
    if (
      tsName === undefined ||
      declaration.isAbstract() ||
      declaration.getTypeParameters().length ||
      declaration.getImplements().length ||
      declaration.getDecorators().length
    ) {
      fail(declaration, 'Unsupported class');
    }
    const name = this.register(declaration, tsName);
    const base = declaration.getBaseClass();
    this.emit(`class ${name}${base ? `(${base.getName()})` : ''}:`);
    this.checkMemberNames(declaration);

    this.indented(() => {
      this.docstring(declaration);
      const fields: PropertyDeclaration[] = [];
      for (const member of declaration.getMembers()) {
        if (Node.isPropertyDeclaration(member)) {
          if (member.isStatic()) {
            this.staticProperty(member);
          } else {
            fields.push(member);
          }
        } else if (
          !Node.isMethodDeclaration(member) &&
          !Node.isConstructorDeclaration(member)
        ) {
          fail(member, 'Unsupported class member');
        }
      }
      this.constructorDeclaration(declaration, fields);
      for (const method of declaration.getMethods()) {
        this.method(method);
      }
    });
  }

  /**
   * Fails when two members of the class hierarchy map to the same Python name
   */
  private checkMemberNames(declaration: ClassDeclaration) {
    const seen = new Map<string, string>();
    let current: ClassDeclaration | undefined = declaration;
    while (current !== undefined) {
      for (const member of current.getMembers()) {
        if (Node.isConstructorDeclaration(member)) {
          continue;
        }
        const tsName = (member as PropertyDeclaration).getName();
        const name = memberName(member as PropertyDeclaration);
        const existing = seen.get(name);
        if (existing !== undefined && existing != tsName) {
          fail(member, `Python name ${name} is already used by ${existing}`);
        }
        seen.set(name, tsName);
      }
      current = current.getBaseClass();
    }
  }

  private staticProperty(property: PropertyDeclaration) {
    const initializer = property.getInitializer();
    if (initializer === undefined) {
      fail(property, 'Static properties need an initializer');
    }
    this.emit('');
    this.emit(`${memberName(property)} = ${this.expression(initializer).code}`);
    this.docstring(property);
  }

  /**
   * Field initializers run after the call of the base constructor, like in TypeScript
   */
  private constructorDeclaration(
    declaration: ClassDeclaration,
    fields: PropertyDeclaration[],
  ) {
    const constructors = declaration.getConstructors();
    if (constructors.length > 1) {
      fail(constructors[1], 'Constructor overloads are not supported');
    }
    const ctor: ConstructorDeclaration | undefined = constructors[0];
    const base = declaration.getBaseClass();

    // without own constructor, the constructor of the base class is inherited
    let inherited: ConstructorDeclaration | undefined;
    for (
      let current = base;
      ctor === undefined && current !== undefined;
      current = current.getBaseClass()
    ) {
      inherited = current.getConstructors()[0];
      if (inherited !== undefined) {
        break;
      }
    }
    if (ctor === undefined && fields.length == 0) {
      return;
    }

    const parameters = (ctor ?? inherited)?.getParameters() ?? [];
    this.emit('');
    this.emit(
      `def __init__(${['self', ...this.parameters(parameters)].join(', ')}) -> None:`,
    );
    this.indented(() => {
      if (ctor !== undefined) {
        this.docstring(ctor);
      }
      let statements = ctor?.getStatements() ?? [];
      if (base !== undefined) {
        if (ctor === undefined) {
          const args = parameters.map((parameter) =>
            parameter.isRestParameter()
              ? `*${pythonName(parameter.getName())}`
              : pythonName(parameter.getName()),
          );
          this.emit(`super().__init__(${args.join(', ')})`);
        } else {
          const first = statements[0];
          const call =
            first !== undefined && Node.isExpressionStatement(first)
              ? first.getExpression()
              : undefined;
          if (
            call === undefined ||
            !Node.isCallExpression(call) ||
            call.getExpression().getKind() != SyntaxKind.SuperKeyword
          ) {
            fail(ctor, 'The constructor must start with the call of super()');
          }
          this.emit(`super().__init__(${this.arguments(call).join(', ')})`);
          statements = statements.slice(1);
        }
      }
      for (const field of fields) {
        const initializer = field.getInitializer();
        if (initializer === undefined) {
          fail(field, 'Fields need an initializer');
        }
        this.emit(
          `self.${memberName(field)}: ${this.typeHint(field.getTypeNode(), field.getType(), field)} = ${this.expression(initializer).code}`,
        );
      }
      this.statements(statements);
    });
  }

  private method(method: MethodDeclaration) {
    if (
      method.getOverloads().length ||
      method.isAbstract() ||
      method.isAsync() ||
      method.isGenerator() ||
      method.getTypeParameters().length ||
      method.getDecorators().length
    ) {
      fail(method, 'Unsupported method');
    }
    const parameters = this.parameters(method.getParameters());
    this.emit('');
    if (method.isStatic()) {
      this.emit('@staticmethod');
    } else {
      parameters.unshift('self');
    }
    const name = memberName(method);
    this.emit(
      `def ${name}(${parameters.join(', ')}) -> ${this.returnType(method)}:`,
    );
    this.indented(() => {
      this.docstring(method);
      this.statements(method.getStatements());
    });
    if (method.getName() == 'toString' && !method.isStatic()) {
      this.emit('');
      this.emit('def __str__(self) -> str:');
      this.indented(() => this.emit(`return self.${name}()`));
    }
  }

  private parameters(parameters: ParameterDeclaration[]): string[] {
    return parameters.map((parameter) => {
      if (!Node.isIdentifier(parameter.getNameNode())) {
        fail(parameter, 'Destructuring parameters are not supported');
      }
      const name = pythonName(parameter.getName());
      const typeNode = parameter.getTypeNode();
      if (parameter.isRestParameter()) {
        if (typeNode === undefined || !Node.isArrayTypeNode(typeNode)) {
          fail(parameter, 'Rest parameters need an array type');
        }
        return `*${name}: ${this.typeHint(typeNode.getElementTypeNode(), undefined, parameter)}`;
      }
      const hint = this.typeHint(typeNode, parameter.getType(), parameter);
      const initializer = parameter.getInitializer();
      if (initializer !== undefined) {
        // Python evaluates default values once, so only literals are safe
        if (!Node.isLiteralExpression(initializer)) {
          fail(initializer, 'Default values must be literals');
        }
        return `${name}: ${hint} = ${this.expression(initializer).code}`;
      }
      if (parameter.isOptional()) {
        return `${name}: ${hint} | None = None`;
      }
      return `${name}: ${hint}`;
    });
  }

  private returnType(node: MethodDeclaration | FunctionDeclaration): string {
    const typeNode = node.getReturnTypeNode();
    if (typeNode !== undefined) {
      return this.typeHint(typeNode, undefined, node);
    }
    return this.typeHintFromType(node.getReturnType(), node);
  }

  private typeHint(
    typeNode: TypeNode | undefined,
    type: Type | undefined,
    node: Node,
  ): string {
    if (typeNode !== undefined) {
      return this.typeHintFromNode(typeNode);
    }
    if (type === undefined) {
      fail(node, 'Missing type');
    }
    return this.typeHintFromType(type, node);
  }

  private typeHintFromNode(node: TypeNode): string {
    switch (node.getKind()) {
      case SyntaxKind.StringKeyword:
        return 'str';
      case SyntaxKind.NumberKeyword:
        return 'float';
      case SyntaxKind.BooleanKeyword:
        return 'bool';
      case SyntaxKind.AnyKeyword:
        this.imports.add('Any');
        return 'Any';
      case SyntaxKind.VoidKeyword:
      case SyntaxKind.UndefinedKeyword:
        return 'None';
      case SyntaxKind.ThisType:
        this.imports.add('Self');
        return 'Self';
    }
    if (Node.isArrayTypeNode(node)) {
      return `list[${this.typeHintFromNode(node.getElementTypeNode())}]`;
    }
    if (Node.isParenthesizedTypeNode(node)) {
      return this.typeHintFromNode(node.getTypeNode());
    }
    if (Node.isUnionTypeNode(node)) {
      const hints = node
        .getTypeNodes()
        .map((part) => this.typeHintFromNode(part));
      return [...new Set(hints)].join(' | ');
    }
    if (Node.isTypeReference(node)) {
      const name = node.getTypeName().getText();
      const args = node.getTypeArguments();
      switch (name) {
        case 'Record':
        case 'Map':
          return `dict[${this.typeHintFromNode(args[0])}, ${this.typeHintFromNode(args[1])}]`;
        case 'Partial':
          return this.typeHintFromNode(args[0]);
        case 'Set':
          return `dict[${this.typeHintFromNode(args[0])}, bool]`;
        case 'Array':
          return `list[${this.typeHintFromNode(args[0])}]`;
        case 'Date':
          this.imports.add('datetime');
          return '_datetime.datetime';
        case 'RegExp':
          this.imports.add('re');
          return '_re.Pattern[str]';
      }
      const declaration = node
        .getTypeName()
        .getSymbolOrThrow()
        .getAliasedSymbol()
        ?.getDeclarations()[0];
      const target =
        declaration ??
        node.getTypeName().getSymbolOrThrow().getDeclarations()[0];
      if (Node.isTypeAliasDeclaration(target)) {
        return this.typeHintFromNode(target.getTypeNodeOrThrow());
      }
      if (Node.isEnumDeclaration(target)) {
        return 'str';
      }
      if (Node.isClassDeclaration(target)) {
        return target.getNameOrThrow();
      }
    }
    return fail(node, 'Unsupported type');
  }

  private typeHintFromType(type: Type, node: Node): string {
    if (type.getText() == 'this') {
      this.imports.add('Self');
      return 'Self';
    }
    if (type.isVoid() || type.isUndefined()) {
      return 'None';
    }
    if (type.isUnion() && !type.isBoolean()) {
      const hints = type
        .getUnionTypes()
        .map((part) => this.typeHintFromType(part, node));
      return [...new Set(hints)].join(' | ');
    }
    switch (kindOf(type)) {
      case 'any':
        this.imports.add('Any');
        return 'Any';
      case 'string':
        return 'str';
      case 'number':
        return 'float';
      case 'boolean':
        return 'bool';
      case 'array':
        return `list[${this.typeHintFromType(type.getArrayElementTypeOrThrow(), node)}]`;
      case 'class':
        return type.getSymbolOrThrow().getName();
    }
    return fail(node, `Cannot derive a type hint from ${type.getText()}`);
  }

  private statements(statements: Statement[]) {
    for (const statement of statements) {
      this.statement(statement);
    }
  }

  private body(statement: Statement) {
    this.indented(() => {
      if (Node.isBlock(statement)) {
        this.statements(statement.getStatements());
      } else {
        this.statement(statement);
      }
    });
  }

  private statement(statement: Statement) {
    if (Node.isBlock(statement)) {
      this.statements(statement.getStatements());
    } else if (Node.isVariableStatement(statement)) {
      for (const declaration of statement.getDeclarations()) {
        if (!Node.isIdentifier(declaration.getNameNode())) {
          fail(declaration, 'Destructuring is not supported');
        }
        const initializer = declaration.getInitializer();
        this.emit(
          `${pythonName(declaration.getName())} = ${initializer ? this.expression(initializer).code : 'None'}`,
        );
      }
    } else if (Node.isExpressionStatement(statement)) {
      this.expressionStatement(statement.getExpression());
    } else if (Node.isIfStatement(statement)) {
      this.emit(`if ${this.condition(statement.getExpression())}:`);
      this.body(statement.getThenStatement());
      let otherwise = statement.getElseStatement();
      while (otherwise !== undefined) {
        if (Node.isIfStatement(otherwise)) {
          this.emit(`elif ${this.condition(otherwise.getExpression())}:`);
          this.body(otherwise.getThenStatement());
          otherwise = otherwise.getElseStatement();
        } else {
          this.emit('else:');
          this.body(otherwise);
          otherwise = undefined;
        }
      }
    } else if (Node.isForOfStatement(statement)) {
      if (statement.isAwaited()) {
        fail(statement, 'for await is not supported');
      }
      const initializer = statement.getInitializer();
      if (!Node.isVariableDeclarationList(initializer)) {
        fail(statement, 'for of needs a variable declaration');
      }
      const nameNode = initializer.getDeclarations()[0].getNameNode();
      let iterable = statement.getExpression();
      let target: string;
      if (Node.isIdentifier(nameNode)) {
        target = pythonName(nameNode.getText());
      } else if (Node.isArrayBindingPattern(nameNode)) {
        target = nameNode
          .getElements()
          .map((element) => {
            if (!Node.isBindingElement(element)) {
              fail(nameNode, 'Unsupported destructuring');
            }
            return pythonName(element.getName());
          })
          .join(', ');
      } else {
        return fail(nameNode, 'Unsupported destructuring');
      }
      let code: string;
      if (
        Node.isCallExpression(iterable) &&
        iterable.getExpression().getText() == 'Object.entries'
      ) {
        iterable = iterable.getArguments()[0] as Expression;
        code = `${wrap(this.expression(iterable), Prec.primary)}.items()`;
      } else if (kindOf(iterable.getType()) == 'map') {
        code = `${wrap(this.expression(iterable), Prec.primary)}.items()`;
      } else if (['array', 'set'].includes(kindOf(iterable.getType()))) {
        code = this.expression(iterable).code;
      } else {
        return fail(iterable, 'Unsupported iterable');
      }
      if (Node.isArrayBindingPattern(nameNode) && !code.endsWith('.items()')) {
        fail(nameNode, 'Destructuring is supported for entries only');
      }
      this.emit(`for ${target} in ${code}:`);
      this.body(statement.getStatement());
    } else if (Node.isForStatement(statement)) {
      this.forStatement(statement);
    } else if (Node.isWhileStatement(statement)) {
      this.emit(`while ${this.condition(statement.getExpression())}:`);
      this.body(statement.getStatement());
    } else if (Node.isReturnStatement(statement)) {
      const expression = statement.getExpression();
      this.emit(
        expression ? `return ${this.expression(expression).code}` : 'return',
      );
    } else if (Node.isThrowStatement(statement)) {
      const expression = statement.getExpression();
      if (
        !Node.isNewExpression(expression) ||
        expression.getExpression().getText() != 'Error' ||
        expression.getArguments().length != 1
      ) {
        fail(statement, 'Only `throw new Error(message)` is supported');
      }
      this.emit(
        `raise Exception(${this.expression(expression.getArguments()[0] as Expression).code})`,
      );
    } else if (Node.isBreakStatement(statement)) {
      if (statement.getLabel()) {
        fail(statement, 'Labels are not supported');
      }
      this.emit('break');
    } else if (Node.isContinueStatement(statement)) {
      if (statement.getLabel()) {
        fail(statement, 'Labels are not supported');
      }
      this.emit('continue');
    } else {
      fail(statement, 'Unsupported statement');
    }
  }

  /**
   * Supports only `for (let i = start; i < end; i++)`, which becomes `range()`
   */
  private forStatement(statement: ForStatement) {
    const initializer = statement.getInitializer();
    const condition = statement.getCondition();
    const incrementor = statement.getIncrementor();
    if (
      !Node.isVariableDeclarationList(initializer) ||
      initializer.getDeclarations().length != 1 ||
      condition === undefined ||
      incrementor === undefined
    ) {
      return fail(statement, 'Unsupported for loop');
    }
    const declaration = initializer.getDeclarations()[0];
    const name = declaration.getName();
    const start = declaration.getInitializer();
    if (
      start === undefined ||
      !Node.isBinaryExpression(condition) ||
      condition.getLeft().getText() != name ||
      !['<', '<='].includes(condition.getOperatorToken().getText()) ||
      !(
        (Node.isPostfixUnaryExpression(incrementor) ||
          Node.isPrefixUnaryExpression(incrementor)) &&
        incrementor.getOperatorToken() == SyntaxKind.PlusPlusToken &&
        incrementor.getOperand().getText() == name
      )
    ) {
      return fail(statement, 'Unsupported for loop');
    }
    // the loop variable must not be changed in the body
    for (const node of statement
      .getStatement()
      .getDescendantsOfKind(SyntaxKind.Identifier)) {
      const parent = node.getParent();
      if (
        node.getText() == name &&
        ((Node.isBinaryExpression(parent) &&
          parent.getLeft() == node &&
          parent.getOperatorToken().getKind() >= SyntaxKind.FirstAssignment &&
          parent.getOperatorToken().getKind() <= SyntaxKind.LastAssignment) ||
          Node.isPostfixUnaryExpression(parent) ||
          (Node.isPrefixUnaryExpression(parent) &&
            [SyntaxKind.PlusPlusToken, SyntaxKind.MinusMinusToken].includes(
              parent.getOperatorToken(),
            )))
      ) {
        fail(node, 'The loop variable must not be changed in the loop');
      }
    }
    const end = this.expression(condition.getRight());
    const stop =
      condition.getOperatorToken().getText() == '<'
        ? end.code
        : `${wrap(end, Prec.additive)} + 1`;
    const startCode = this.expression(start).code;
    const range =
      startCode == '0' ? `range(${stop})` : `range(${startCode}, ${stop})`;
    this.emit(`for ${pythonName(name)} in ${range}:`);
    this.body(statement.getStatement());
  }

  private expressionStatement(expression: Expression) {
    if (Node.isBinaryExpression(expression)) {
      const operator = expression.getOperatorToken().getText();
      if (['=', '+=', '-='].includes(operator)) {
        const left = expression.getLeft();
        if (
          operator == '+=' &&
          kindOf(left.getType()) != kindOf(expression.getRight().getType())
        ) {
          fail(expression, 'Both sides of += must have the same type');
        }
        this.emit(
          `${this.target(left)} ${operator} ${this.expression(expression.getRight()).code}`,
        );
        return;
      }
    }
    if (
      Node.isPostfixUnaryExpression(expression) ||
      Node.isPrefixUnaryExpression(expression)
    ) {
      const token = expression.getOperatorToken();
      if (token == SyntaxKind.PlusPlusToken) {
        this.emit(`${this.target(expression.getOperand())} += 1`);
        return;
      }
      if (token == SyntaxKind.MinusMinusToken) {
        this.emit(`${this.target(expression.getOperand())} -= 1`);
        return;
      }
    }
    if (Node.isCallExpression(expression)) {
      const callee = expression.getExpression();
      if (Node.isPropertyAccessExpression(callee)) {
        const receiver = callee.getExpression();
        const kind = kindOf(receiver.getType());
        const method = callee.getName();
        const args = expression.getArguments() as Expression[];
        if (kind == 'array' && method == 'forEach') {
          const callback = arrowFunction(args[0]);
          const parameters = callback.getParameters();
          if (parameters.length != 1) {
            fail(callback, 'forEach callbacks must have one parameter');
          }
          this.emit(
            `for ${pythonName(parameters[0].getName())} in ${this.expression(receiver).code}:`,
          );
          const body = callback.getBody();
          this.indented(() => {
            if (Node.isBlock(body)) {
              this.statements(body.getStatements());
            } else {
              this.expressionStatement(body as Expression);
            }
          });
          return;
        }
        if (kind == 'map' && method == 'set') {
          this.emit(
            `${wrap(this.expression(receiver), Prec.primary)}[${this.expression(args[0]).code}] = ${this.expression(args[1]).code}`,
          );
          return;
        }
        if (kind == 'set' && method == 'add') {
          this.emit(
            `${wrap(this.expression(receiver), Prec.primary)}[${this.expression(args[0]).code}] = True`,
          );
          return;
        }
      }
      this.emit(this.expression(expression).code);
      return;
    }
    fail(expression, 'Unsupported expression statement');
  }

  /**
   * The target of an assignment
   */
  private target(node: Expression): string {
    if (Node.isIdentifier(node)) {
      return this.identifier(node).code;
    }
    if (Node.isPropertyAccessExpression(node)) {
      return this.propertyAccess(node, true).code;
    }
    if (Node.isElementAccessExpression(node)) {
      return this.elementAccess(node, true).code;
    }
    return fail(node, 'Unsupported assignment target');
  }

  /**
   * An expression used as condition. Python and JavaScript disagree on the truthiness of empty arrays and objects,
   * so only primitive values are allowed.
   */
  private condition(node: Expression): string {
    this.checkTruthiness(node);
    return this.expression(node).code;
  }

  private checkTruthiness(node: Expression) {
    while (Node.isParenthesizedExpression(node)) {
      node = node.getExpression();
    }
    if (
      Node.isBinaryExpression(node) &&
      ['&&', '||'].includes(node.getOperatorToken().getText())
    ) {
      this.checkTruthiness(node.getLeft());
      this.checkTruthiness(node.getRight());
      return;
    }
    if (
      Node.isPrefixUnaryExpression(node) &&
      node.getOperatorToken() == SyntaxKind.ExclamationToken
    ) {
      this.checkTruthiness(node.getOperand());
      return;
    }
    const type = node.getType();
    const parts = type.isUnion() ? type.getUnionTypes() : [type];
    for (const part of parts) {
      if (
        !['string', 'number', 'boolean', 'undefined'].includes(kindOf(part))
      ) {
        fail(node, `The truthiness of ${part.getText()} differs in Python`);
      }
    }
  }

  private expression(node: Expression): Expr {
    switch (node.getKind()) {
      case SyntaxKind.TrueKeyword:
        return { code: 'True', prec: Prec.atom };
      case SyntaxKind.FalseKeyword:
        return { code: 'False', prec: Prec.atom };
      case SyntaxKind.NullKeyword:
        return { code: 'None', prec: Prec.atom };
      case SyntaxKind.ThisKeyword:
        return { code: 'self', prec: Prec.atom };
    }
    if (
      Node.isStringLiteral(node) ||
      Node.isNoSubstitutionTemplateLiteral(node)
    ) {
      return { code: pyString(node.getLiteralText()), prec: Prec.atom };
    }
    if (Node.isNumericLiteral(node)) {
      return { code: String(node.getLiteralValue()), prec: Prec.atom };
    }
    if (Node.isTemplateExpression(node)) {
      return this.template(node);
    }
    if (Node.isIdentifier(node)) {
      return this.identifier(node);
    }
    if (
      Node.isParenthesizedExpression(node) ||
      Node.isNonNullExpression(node) ||
      Node.isAsExpression(node) ||
      Node.isTypeAssertion(node)
    ) {
      return this.expression(node.getExpression());
    }
    if (Node.isPropertyAccessExpression(node)) {
      return this.propertyAccess(node, false);
    }
    if (Node.isElementAccessExpression(node)) {
      return this.elementAccess(node, false);
    }
    if (Node.isCallExpression(node)) {
      return this.call(node);
    }
    if (Node.isNewExpression(node)) {
      const name = node.getExpression().getText();
      const args = (node.getArguments() as Expression[]).map(
        (arg) => this.expression(arg).code,
      );
      if ((name == 'Set' || name == 'Map') && args.length == 0) {
        return { code: '{}', prec: Prec.atom };
      }
      if (name == 'RegExp') {
        return { code: `_js.reg_exp(${args.join(', ')})`, prec: Prec.primary };
      }
      const target = node.getExpression();
      if (
        Node.isIdentifier(target) &&
        resolve(target).some((declaration) =>
          Node.isClassDeclaration(declaration),
        )
      ) {
        return { code: `${name}(${args.join(', ')})`, prec: Prec.primary };
      }
      return fail(node, 'Unsupported constructor');
    }
    if (Node.isArrayLiteralExpression(node)) {
      const elements = node.getElements().map((element) => {
        if (Node.isSpreadElement(element)) {
          fail(element, 'Spread is not supported');
        }
        return this.expression(element).code;
      });
      return { code: `[${elements.join(', ')}]`, prec: Prec.atom };
    }
    if (Node.isObjectLiteralExpression(node)) {
      const properties = node.getProperties().map((property) => {
        if (!Node.isPropertyAssignment(property)) {
          return fail(property, 'Unsupported object literal');
        }
        const name = property.getNameNode();
        if (!Node.isIdentifier(name) && !Node.isStringLiteral(name)) {
          fail(property, 'Unsupported property name');
        }
        return `${pyString(Node.isStringLiteral(name) ? name.getLiteralText() : name.getText())}: ${this.expression(property.getInitializerOrThrow()).code}`;
      });
      return { code: `{${properties.join(', ')}}`, prec: Prec.atom };
    }
    if (Node.isConditionalExpression(node)) {
      this.checkTruthiness(node.getCondition());
      return {
        code: `${wrap(this.expression(node.getWhenTrue()), Prec.or)} if ${wrap(this.expression(node.getCondition()), Prec.or)} else ${wrap(this.expression(node.getWhenFalse()), Prec.conditional)}`,
        prec: Prec.conditional,
      };
    }
    if (Node.isPrefixUnaryExpression(node)) {
      const operand = node.getOperand();
      switch (node.getOperatorToken()) {
        case SyntaxKind.ExclamationToken: {
          this.checkTruthiness(operand);
          const value = this.expression(operand);
          if (value.negated !== undefined) {
            return { code: value.negated, prec: Prec.comparison };
          }
          return { code: `not ${wrap(value, Prec.not)}`, prec: Prec.not };
        }
        case SyntaxKind.MinusToken:
          return {
            code: `-${wrap(this.expression(operand), Prec.unary)}`,
            prec: Prec.unary,
          };
      }
      return fail(node, 'Unsupported unary operator');
    }
    if (Node.isTypeOfExpression(node)) {
      return {
        code: `_js.typeof(${this.expression(node.getExpression()).code})`,
        prec: Prec.primary,
      };
    }
    if (Node.isBinaryExpression(node)) {
      return this.binary(node);
    }
    if (Node.isArrowFunction(node)) {
      return fail(
        node,
        'Arrow functions are supported only in filter, map and forEach',
      );
    }
    return fail(node, 'Unsupported expression');
  }

  private template(node: Node): Expr {
    if (!Node.isTemplateExpression(node)) {
      return fail(node, 'Unsupported template');
    }
    const parts: string[] = [];
    const head = node.getHead().getLiteralText();
    if (head.length) {
      parts.push(pyString(head));
    }
    for (const span of node.getTemplateSpans()) {
      const expression = span.getExpression();
      const value = this.expression(expression);
      parts.push(
        kindOf(expression.getType()) == 'string'
          ? wrap(value, Prec.additive + 1)
          : `_js.to_string(${value.code})`,
      );
      const text = span.getLiteral().getLiteralText();
      if (text.length) {
        parts.push(pyString(text));
      }
    }
    if (parts.length == 1) {
      return { code: parts[0], prec: Prec.additive + 1 };
    }
    return { code: parts.join(' + '), prec: Prec.additive };
  }

  private identifier(node: Node): Expr {
    const text = node.getText();
    if (text == 'undefined') {
      return { code: 'None', prec: Prec.atom };
    }
    const declarations = resolve(node);
    const declaration = declarations[0];
    if (declaration === undefined) {
      return fail(node, 'Unknown identifier');
    }
    if (
      Node.isClassDeclaration(declaration) ||
      Node.isEnumDeclaration(declaration)
    ) {
      return { code: text, prec: Prec.atom };
    }
    if (Node.isFunctionDeclaration(declaration)) {
      return {
        code: functionName(
          declaration.getNameOrThrow(),
          declaration.isExported(),
        ),
        prec: Prec.atom,
      };
    }
    if (Node.isVariableDeclaration(declaration)) {
      const statement = declaration.getVariableStatement();
      if (statement !== undefined && Node.isSourceFile(statement.getParent())) {
        return {
          code: moduleConstantName(
            declaration.getName(),
            statement.isExported(),
          ),
          prec: Prec.atom,
        };
      }
      return { code: pythonName(text), prec: Prec.atom };
    }
    if (
      Node.isParameterDeclaration(declaration) ||
      Node.isBindingElement(declaration)
    ) {
      return { code: pythonName(text), prec: Prec.atom };
    }
    return fail(node, 'Unsupported identifier');
  }

  private propertyAccess(
    node: PropertyAccessExpression,
    isTarget: boolean,
  ): Expr {
    const receiver = node.getExpression();
    const name = node.getName();
    const kind = kindOf(receiver.getType());
    if (name == 'length' && (kind == 'string' || kind == 'array')) {
      if (isTarget) {
        fail(node, 'Cannot assign to length');
      }
      return {
        code: `len(${this.expression(receiver).code})`,
        prec: Prec.primary,
      };
    }
    const declaration = node.getNameNode().getSymbol()?.getDeclarations()[0];
    if (declaration !== undefined && Node.isEnumMember(declaration)) {
      return {
        code: `${this.expression(receiver).code}.${pythonConstantName(name)}`,
        prec: Prec.primary,
      };
    }
    if (
      declaration !== undefined &&
      (Node.isPropertyDeclaration(declaration) ||
        Node.isMethodDeclaration(declaration))
    ) {
      return {
        code: `${wrap(this.expression(receiver), Prec.primary)}.${memberName(declaration)}`,
        prec: Prec.primary,
      };
    }
    if (kind == 'any' || kind == 'record') {
      return {
        code: `${wrap(this.expression(receiver), Prec.primary)}[${pyString(name)}]`,
        prec: Prec.primary,
      };
    }
    return fail(node, 'Unsupported property access');
  }

  /**
   * Reading a missing key returns `undefined` in JavaScript, so reads use `.get()` unless the value is used as receiver,
   * where JavaScript would throw too
   */
  private elementAccess(
    node: ElementAccessExpression,
    isTarget: boolean,
  ): Expr {
    const receiver = node.getExpression();
    const argument = node.getArgumentExpressionOrThrow();
    const kind = kindOf(receiver.getType());
    const object = wrap(this.expression(receiver), Prec.primary);
    const key = this.expression(argument).code;
    if (kind == 'array') {
      if (kindOf(argument.getType()) != 'number') {
        fail(node, 'Arrays need a numeric index');
      }
      return { code: `${object}[${key}]`, prec: Prec.primary };
    }
    if (kind == 'record' || kind == 'any') {
      let child: Node = node;
      let parent = node.getParentOrThrow();
      while (
        Node.isNonNullExpression(parent) ||
        Node.isParenthesizedExpression(parent)
      ) {
        child = parent;
        parent = parent.getParentOrThrow();
      }
      const isReceiver =
        (Node.isPropertyAccessExpression(parent) ||
          Node.isElementAccessExpression(parent)) &&
        parent.getExpression() == child;
      if (isTarget || isReceiver || kind == 'any') {
        return { code: `${object}[${key}]`, prec: Prec.primary };
      }
      return { code: `${object}.get(${key})`, prec: Prec.primary };
    }
    return fail(node, 'Unsupported element access');
  }

  private arguments(node: CallExpression): string[] {
    return (node.getArguments() as Expression[]).map((arg) => {
      if (Node.isSpreadElement(arg)) {
        return `*${wrap(this.expression(arg.getExpression()), Prec.primary)}`;
      }
      return this.expression(arg).code;
    });
  }

  private call(node: CallExpression): Expr {
    const callee = node.getExpression();
    const args = node.getArguments() as Expression[];
    if (Node.isIdentifier(callee)) {
      return {
        code: `${this.identifier(callee).code}(${this.arguments(node).join(', ')})`,
        prec: Prec.primary,
      };
    }
    if (!Node.isPropertyAccessExpression(callee)) {
      return fail(node, 'Unsupported call');
    }
    const receiver = callee.getExpression();
    const method = callee.getName();
    const self = (): string => wrap(this.expression(receiver), Prec.primary);
    const arg = (index: number, min = Prec.conditional): string => {
      if (args[index] === undefined || Node.isSpreadElement(args[index])) {
        fail(node, 'Unsupported arguments');
      }
      return wrap(this.expression(args[index]), min);
    };
    const result = (code: string, prec = Prec.primary): Expr => ({
      code,
      prec,
    });

    switch (receiver.getText()) {
      case 'Object':
        if (method == 'keys') {
          return result(`list(${arg(0, Prec.primary)}.keys())`);
        }
        if (method == 'entries') {
          return result(`list(${arg(0, Prec.primary)}.items())`);
        }
        return fail(node, 'Unsupported Object method');
      case 'Array':
        if (method == 'isArray') {
          return result(`isinstance(${arg(0)}, list)`);
        }
        return fail(node, 'Unsupported Array method');
    }

    const kind = kindOf(receiver.getType());
    const declaration = callee.getNameNode().getSymbol()?.getDeclarations()[0];
    if (
      declaration !== undefined &&
      Node.isMethodDeclaration(declaration) &&
      kind == 'class'
    ) {
      return result(
        `${self()}.${memberName(declaration)}(${this.arguments(node).join(', ')})`,
      );
    }

    if (method == 'toString' && args.length == 0) {
      return result(`_js.to_string(${this.expression(receiver).code})`);
    }

    if (kind == 'string') {
      switch (method) {
        case 'includes':
          return membership(
            arg(0, Prec.comparison + 1),
            wrap(this.expression(receiver), Prec.comparison + 1),
          );
        case 'startsWith':
          return result(`${self()}.startswith(${arg(0)})`);
        case 'endsWith':
          return result(`${self()}.endswith(${arg(0)})`);
        case 'toLowerCase':
          return result(`${self()}.lower()`);
        case 'toUpperCase':
          return result(`${self()}.upper()`);
        case 'indexOf':
          return result(`${self()}.find(${arg(0)})`);
        case 'lastIndexOf':
          return result(`${self()}.rfind(${arg(0)})`);
        case 'substring':
          return result(
            `${self()}[${arg(0)}:${args.length > 1 ? arg(1) : ''}]`,
          );
      }
    }

    if (kind == 'array') {
      switch (method) {
        case 'includes':
          return membership(
            arg(0, Prec.comparison + 1),
            wrap(this.expression(receiver), Prec.comparison + 1),
          );
        case 'indexOf':
          return result(
            `_js.index_of(${this.expression(receiver).code}, ${arg(0)})`,
          );
        case 'push':
          if (args.length == 1 && Node.isSpreadElement(args[0])) {
            return result(
              `${self()}.extend(${this.expression(args[0].getExpression()).code})`,
            );
          }
          if (args.length == 1) {
            return result(`${self()}.append(${arg(0)})`);
          }
          return fail(node, 'push supports one argument');
        case 'sort':
          if (args.length) {
            return fail(node, 'sort supports no compare function');
          }
          return result(`_js.sort(${this.expression(receiver).code})`);
        case 'filter':
        case 'map':
          return this.comprehension(node, receiver, method);
      }
    }

    if (kind == 'map' || kind == 'set') {
      switch (method) {
        case 'get':
          if (kind == 'map') {
            return result(`${self()}.get(${arg(0)})`);
          }
          break;
        case 'has':
          return membership(
            arg(0, Prec.comparison + 1),
            wrap(this.expression(receiver), Prec.comparison + 1),
          );
      }
    }

    if (kind == 'date' && method == 'toISOString') {
      return result(`_js.to_iso_string(${this.expression(receiver).code})`);
    }

    if (kind == 'regexp' && method == 'test') {
      return result(`_js.test(${this.expression(receiver).code}, ${arg(0)})`);
    }

    return fail(node, `Unsupported method ${method} of ${kind}`);
  }

  /**
   * `filter()` and `map()` with an arrow function become list comprehensions
   */
  private comprehension(
    node: CallExpression,
    receiver: Expression,
    method: 'filter' | 'map',
  ): Expr {
    const args = node.getArguments();
    if (args.length != 1) {
      fail(node, `${method} supports one argument`);
    }
    const callback = arrowFunction(args[0]);
    const parameters = callback.getParameters().map((parameter) => {
      if (!Node.isIdentifier(parameter.getNameNode())) {
        fail(parameter, 'Destructuring is not supported');
      }
      return pythonName(parameter.getName());
    });
    let body = callback.getBody();
    if (Node.isBlock(body)) {
      const statements = body.getStatements();
      const only = statements[0];
      if (
        statements.length != 1 ||
        !Node.isReturnStatement(only) ||
        only.getExpression() === undefined
      ) {
        fail(body, 'Callbacks must consist of one return statement');
      }
      body = only.getExpressionOrThrow();
    }
    const value = body as Expression;
    const iterable = this.expression(receiver).code;
    let loop: string;
    switch (parameters.length) {
      case 0:
        loop = `for _ in ${iterable}`;
        break;
      case 1:
        loop = `for ${parameters[0]} in ${iterable}`;
        break;
      case 2:
        loop = `for ${parameters[1]}, ${parameters[0]} in enumerate(${iterable})`;
        break;
      default:
        return fail(callback, 'Callbacks support at most two parameters');
    }
    if (method == 'map') {
      return {
        code: `[${wrap(this.expression(value), Prec.conditional)} ${loop}]`,
        prec: Prec.atom,
      };
    }
    this.checkTruthiness(value);
    const element = parameters[0] ?? fail(callback, 'filter needs a parameter');
    return {
      code: `[${element} ${loop} if ${wrap(this.expression(value), Prec.or)}]`,
      prec: Prec.atom,
    };
  }

  private binary(node: BinaryExpression): Expr {
    const operator = node.getOperatorToken().getText();
    const left = node.getLeft();
    const right = node.getRight();
    const binary = (op: string, prec: Prec, leftMin: Prec, rightMin: Prec) => ({
      code: `${wrap(this.expression(left), leftMin)} ${op} ${wrap(this.expression(right), rightMin)}`,
      prec,
    });
    const isUndefined = (side: Expression) =>
      side.getKind() == SyntaxKind.NullKeyword || side.getText() == 'undefined';
    const typeofCheck = (side: Expression, other: Expression) =>
      Node.isTypeOfExpression(side) && Node.isStringLiteral(other);

    switch (operator) {
      case '&&':
        return binary('and', Prec.and, Prec.and, Prec.and + 1);
      case '||': {
        // `a or b and c` is correct, but parentheses make it readable
        const operand = (side: Expression) => {
          const value = this.expression(side);
          return value.prec == Prec.and
            ? `(${value.code})`
            : wrap(value, Prec.or);
        };
        return { code: `${operand(left)} or ${operand(right)}`, prec: Prec.or };
      }
      case '??': {
        // `record[key] ?? x` and `map.get(key) ?? x` become `get(key, x)`, which always evaluates x
        const lookup = (object: Expression, key: Expression) => {
          if (!isPure(right) && !Node.isArrayLiteralExpression(right)) {
            fail(right, 'The right side of ?? must be free of side effects');
          }
          return {
            code: `${wrap(this.expression(object), Prec.primary)}.get(${this.expression(key).code}, ${this.expression(right).code})`,
            prec: Prec.primary,
          };
        };
        if (
          Node.isElementAccessExpression(left) &&
          kindOf(left.getExpression().getType()) == 'record'
        ) {
          return lookup(
            left.getExpression(),
            left.getArgumentExpressionOrThrow(),
          );
        }
        if (Node.isCallExpression(left)) {
          const callee = left.getExpression();
          if (
            Node.isPropertyAccessExpression(callee) &&
            callee.getName() == 'get' &&
            kindOf(callee.getExpression().getType()) == 'map' &&
            left.getArguments().length == 1
          ) {
            return lookup(
              callee.getExpression(),
              left.getArguments()[0] as Expression,
            );
          }
        }
        if (!isPure(left)) {
          fail(left, 'The left side of ?? must be free of side effects');
        }
        const value = this.expression(left);
        return {
          code: `${wrap(value, Prec.or)} if ${wrap(value, Prec.comparison + 1)} is not None else ${wrap(this.expression(right), Prec.conditional)}`,
          prec: Prec.conditional,
        };
      }
      case '==':
      case '===':
      case '!=':
      case '!==': {
        const negate = operator.startsWith('!');
        if (typeofCheck(left, right) || typeofCheck(right, left)) {
          const [typeOf, literal] = Node.isTypeOfExpression(left)
            ? [left, right]
            : [right, left];
          const value = wrap(
            this.expression(
              (
                typeOf as Node as { getExpression(): Expression }
              ).getExpression(),
            ),
            Prec.comparison + 1,
          );
          const type = (literal as Node).getText().slice(1, -1);
          if (type == 'undefined') {
            return {
              code: `${value} ${negate ? 'is not' : 'is'} None`,
              prec: Prec.comparison,
            };
          }
          const check =
            type == 'string'
              ? `isinstance(${value}, str)`
              : type == 'boolean'
                ? `isinstance(${value}, bool)`
                : `_js.typeof(${value}) == ${pyString(type)}`;
          return negate
            ? { code: `not ${check}`, prec: Prec.not }
            : {
                code: check,
                prec:
                  type == 'string' || type == 'boolean'
                    ? Prec.primary
                    : Prec.comparison,
              };
        }
        if (isUndefined(right) || isUndefined(left)) {
          return binary(
            negate ? 'is not' : 'is',
            Prec.comparison,
            Prec.comparison + 1,
            Prec.comparison + 1,
          );
        }
        const kinds = new Set([
          kindOf(left.getType()),
          kindOf(right.getType()),
        ]);
        if (
          kinds.size != 1 ||
          !['string', 'number', 'boolean'].includes([...kinds][0])
        ) {
          fail(
            node,
            'Equality is supported for primitives of the same type only',
          );
        }
        return binary(
          negate ? '!=' : '==',
          Prec.comparison,
          Prec.comparison + 1,
          Prec.comparison + 1,
        );
      }
      case '<':
      case '<=':
      case '>':
      case '>=': {
        const kinds = new Set([
          kindOf(left.getType()),
          kindOf(right.getType()),
        ]);
        if (kinds.size != 1 || !['string', 'number'].includes([...kinds][0])) {
          fail(node, 'Comparisons are supported for strings or numbers only');
        }
        return binary(
          operator,
          Prec.comparison,
          Prec.comparison + 1,
          Prec.comparison + 1,
        );
      }
      case '+': {
        const kinds = new Set([
          kindOf(left.getType()),
          kindOf(right.getType()),
        ]);
        if (kinds.size != 1 || !['string', 'number'].includes([...kinds][0])) {
          fail(node, '+ is supported for two strings or two numbers only');
        }
        return binary('+', Prec.additive, Prec.additive, Prec.additive + 1);
      }
      case '-':
        return binary('-', Prec.additive, Prec.additive, Prec.additive + 1);
      case '*':
        return binary(
          '*',
          Prec.multiplicative,
          Prec.multiplicative,
          Prec.multiplicative + 1,
        );
      case 'in':
        if (kindOf(right.getType()) != 'record') {
          fail(node, 'in is supported for records only');
        }
        return membership(
          wrap(this.expression(left), Prec.comparison + 1),
          wrap(this.expression(right), Prec.comparison + 1),
        );
      case 'instanceof': {
        const type = right.getText();
        if (type == 'Date') {
          this.imports.add('datetime');
          return {
            code: `isinstance(${this.expression(left).code}, _datetime.datetime)`,
            prec: Prec.primary,
          };
        }
        if (
          Node.isIdentifier(right) &&
          resolve(right).some((d) => Node.isClassDeclaration(d))
        ) {
          return {
            code: `isinstance(${this.expression(left).code}, ${type})`,
            prec: Prec.primary,
          };
        }
        return fail(node, 'Unsupported instanceof');
      }
    }
    return fail(node, `Unsupported operator ${operator}`);
  }
}

function arrowFunction(node: Node): ArrowFunction {
  if (!Node.isArrowFunction(node)) {
    return fail(node, 'Callbacks must be arrow functions');
  }
  if (node.isAsync()) {
    fail(node, 'Async callbacks are not supported');
  }
  return node;
}

/**
 * Whether an expression can be evaluated twice
 */
function isPure(node: Node): boolean {
  if (
    Node.isIdentifier(node) ||
    Node.isStringLiteral(node) ||
    Node.isNumericLiteral(node) ||
    node.getKind() == SyntaxKind.ThisKeyword
  ) {
    return true;
  }
  if (
    Node.isPropertyAccessExpression(node) ||
    Node.isNonNullExpression(node) ||
    Node.isParenthesizedExpression(node)
  ) {
    return isPure(node.getExpression());
  }
  if (Node.isElementAccessExpression(node)) {
    return (
      isPure(node.getExpression()) &&
      isPure(node.getArgumentExpressionOrThrow())
    );
  }
  return false;
}

/**
 * The declarations of an identifier, following imports
 */
function resolve(node: Node): Node[] {
  const symbol = node.getSymbol();
  if (symbol === undefined) {
    return [];
  }
  return (symbol.getAliasedSymbol() ?? symbol).getDeclarations();
}

function memberName(member: PropertyDeclaration | MethodDeclaration): string {
  const name = member.getName();
  if (Node.isPropertyDeclaration(member) && member.isStatic()) {
    return pythonConstantName(name);
  }
  const scope = member.getScope();
  const python = pythonName(name);
  return scope == Scope.Public ? python : `_${python}`;
}

function functionName(name: string, exported: boolean): string {
  return exported ? pythonName(name) : `_${pythonName(name)}`;
}

function moduleConstantName(name: string, exported: boolean): string {
  return exported ? pythonConstantName(name) : `_${pythonConstantName(name)}`;
}
