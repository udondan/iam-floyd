import {
  ArrowFunction,
  BinaryExpression,
  CallExpression,
  ClassDeclaration,
  ConstructorDeclaration,
  EnumDeclaration,
  Expression,
  ForOfStatement,
  ForStatement,
  FunctionDeclaration,
  JSDocableNode,
  MethodDeclaration,
  NewExpression,
  Node,
  ParameterDeclaration,
  PropertyAccessExpression,
  PropertyDeclaration,
  Scope,
  SourceFile,
  Statement,
  SyntaxKind,
  TemplateExpression,
  Type,
  TypeNode,
  TypeOfExpression,
  VariableDeclarationKind,
  VariableStatement,
} from 'ts-morph';

import {
  arrowFunction,
  fail,
  isPure,
  isServiceFile,
  kindOf,
  resolve,
} from './index';
import { snakeCase } from './python';

/**
 * Operator precedence of Java, from loosest to tightest
 */
const enum Prec {
  conditional = 2,
  or = 3,
  and = 4,
  equality = 8,
  relational = 9,
  additive = 11,
  multiplicative = 12,
  unary = 13,
  primary = 15,
}

interface Expr {
  code: string;
  prec: Prec;
}

function wrap(expr: Expr, min: Prec): string {
  return expr.prec < min ? `(${expr.code})` : expr.code;
}

const reserved = new Set([
  'abstract',
  'assert',
  'boolean',
  'break',
  'byte',
  'case',
  'catch',
  'char',
  'class',
  'const',
  'continue',
  'default',
  'do',
  'double',
  'else',
  'enum',
  'extends',
  'false',
  'final',
  'finally',
  'float',
  'for',
  'goto',
  'if',
  'implements',
  'import',
  'instanceof',
  'int',
  'interface',
  'long',
  'native',
  'new',
  'null',
  'package',
  'private',
  'protected',
  'public',
  'record',
  'return',
  'short',
  'static',
  'strictfp',
  'super',
  'switch',
  'synchronized',
  'this',
  'throw',
  'throws',
  'transient',
  'true',
  'try',
  'var',
  'void',
  'volatile',
  'while',
  'yield',
]);

/**
 * The Java name of a method: reserved words get the prefix `do`, e.g. `if` → `doIf`
 */
export function javaMethodName(name: string): string {
  return reserved.has(name)
    ? `do${name.charAt(0).toUpperCase()}${name.slice(1)}`
    : name;
}

/**
 * The Java name of a variable or field: reserved words get a trailing underscore
 */
export function javaLocalName(name: string): string {
  return reserved.has(name) ? `${name}_` : name;
}

/**
 * The Java name of a constant, an enum member or a static property, e.g. `stringLike` → `STRING_LIKE`
 */
export function javaConstantName(name: string): string {
  return snakeCase(name).toUpperCase();
}

/**
 * A Java string literal. Everything outside of printable ASCII is escaped, so the sources do not
 * depend on the encoding.
 */
export function javaString(value: string): string {
  let result = '"';
  for (let i = 0; i < value.length; i++) {
    const char = value.charAt(i);
    const code = value.charCodeAt(i);
    if (char == '"' || char == '\\') {
      result += `\\${char}`;
    } else if (char == '\n') {
      result += '\\n';
    } else if (char == '\r') {
      result += '\\r';
    } else if (char == '\t') {
      result += '\\t';
    } else if (code < 0x20 || code > 0x7e) {
      result += `\\u${code.toString(16).padStart(4, '0')}`;
    } else {
      result += char;
    }
  }
  return `${result}"`;
}

/**
 * Text for a Javadoc comment: HTML special characters are escaped, and so are `@` (tags), `*\/` (end of
 * the comment) and backslashes (javac reads `\u` as Unicode escape even in comments)
 */
function escapeJavadoc(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/@/g, '&#64;')
    .replace(/\*\//g, '*&#47;')
    .replace(/\\/g, '&#92;');
}

/**
 * Text for a Javadoc comment: escaped, with the Markdown of the JSDoc (code, bold, links and URLs)
 * as HTML
 */
export function javadocText(text: string): string {
  return escapeJavadoc(text)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^(https?:\/\/\S+)$/, '<a href="$1">$1</a>');
}

/**
 * The lines of a Javadoc comment. The description is escaped, blank lines start a new paragraph; the
 * tags are added as they are.
 */
export function javadoc(description: string[], tags: string[] = []): string[] {
  const body: string[] = [];
  let paragraph = false;
  let code = false;
  let list = false;
  for (const line of description.map((line) => line.trimEnd())) {
    if (line.trim().startsWith('```')) {
      body.push(code ? '</pre>' : '<pre>');
      code = !code;
      paragraph = false;
      continue;
    }
    if (code) {
      body.push(escapeJavadoc(line));
      continue;
    }
    const item = /^\s*[-*] (.*)$/.exec(line);
    if (list && !item) {
      body.push('</ul>');
      list = false;
    }
    if (item) {
      if (!list) {
        body.push(...(body.length ? [''] : []), '<ul>');
        list = true;
        paragraph = false;
      }
      body.push(`<li>${javadocText(item[1])}</li>`);
      continue;
    }
    if (line.trim().length == 0) {
      paragraph = body.length > 0;
      continue;
    }
    if (paragraph) {
      body.push('', `<p>${javadocText(line.trim())}`);
      paragraph = false;
    } else {
      body.push(javadocText(line));
    }
  }
  if (list) {
    body.push('</ul>');
  }
  if (tags.length) {
    if (body.length) {
      body.push('');
    }
    body.push(...tags);
  }
  if (body.length == 0) {
    return [];
  }
  return [
    '/**',
    ...body.map((line) => (line.length ? ` * ${line}` : ' *')),
    ' */',
  ];
}

const jdkImports: Record<string, string> = {
  ArrayList: 'java.util.ArrayList',
  Arrays: 'java.util.Arrays',
  Collections: 'java.util.Collections',
  Instant: 'java.time.Instant',
  LinkedHashMap: 'java.util.LinkedHashMap',
  LinkedHashSet: 'java.util.LinkedHashSet',
  List: 'java.util.List',
  Locale: 'java.util.Locale',
  Map: 'java.util.Map',
  Objects: 'java.util.Objects',
  Pattern: 'java.util.regex.Pattern',
  Set: 'java.util.Set',
};

const boxes: Record<string, string> = {
  int: 'Integer',
  boolean: 'Boolean',
  double: 'Double',
};

function box(type: string): string {
  return boxes[type] ?? type;
}

/**
 * Whether a value of the Java type `from` can be passed for a parameter of the Java type `to`
 */
function assignable(from: string, to: string): boolean {
  if (from == to || to == 'Object' || from == 'null' || box(from) == box(to)) {
    return true;
  }
  if (to == 'Number') {
    return ['int', 'Integer', 'double', 'Double'].includes(from);
  }
  if (to == 'List<?>') {
    return from.startsWith('List<');
  }
  if (to == 'List<? extends Number>') {
    return ['List<Integer>', 'List<Double>', 'List<Number>'].includes(from);
  }
  return false;
}

/**
 * The type without type arguments, as the JVM sees it
 */
function erasure(type: string): string {
  return type.replace(/<.*>/, '').replace('...', '[]');
}

interface Param {
  /** The Java name */
  name: string;
  /** The Java types the parameter accepts */
  options: string[];
  optional: boolean;
  rest: boolean;
}

/**
 * A Java signature: the types of the leading parameters
 */
type Signature = string[];

/**
 * How a TypeScript function, method or constructor is declared in Java.
 *
 * Public methods and constructors become overloads: one per combination of the types of union
 * parameters and per number of optional parameters. If a parameter has more than one type, the
 * body is in a protected method with `Object` for those parameters, which all overloads call;
 * otherwise the body is in the overload with all parameters. Everything else is declared once,
 * with all parameters, and callers pass `null` for missing optional arguments.
 */
interface Callable {
  name: string;
  params: Param[];
  overloads: Signature[];
  impl: Signature;
  /** Whether the body is in one of the public overloads */
  implIsOverload: boolean;
  /** Whether the body can be called directly by the transpiled code */
  implCallable: boolean;
}

/**
 * Where a module level function or constant ends up: in the class of its file, or in a holder class
 */
interface Container {
  name: string;
  pkg: string;
  /** Whether the file has a class of its own, as opposed to a holder class */
  isClass: boolean;
}

export interface JavaTranspilerOptions {
  /** The Java package of a source file, including the files of the services */
  packageOf(file: SourceFile): string;
  /** A comment at the start of each file */
  header: string;
}

/**
 * Transpiles TypeScript to Java. Each class and enum becomes a file of its own; module level
 * functions and constants go into the class of their file, or into a package-private holder class
 * named after the file.
 */
export class JavaTranspiler {
  private files = new Map<string, string>();
  private lines: string[] = [];
  private depth = 0;
  private references = new Map<string, string>();
  private javaClass = '';
  private classDecl?: ClassDeclaration;
  private dummies = 0;
  private callables = new Map<Node, Callable>();
  private declared = new Map<Node, string>();
  private generics = new Map<ClassDeclaration, boolean>();

  constructor(private readonly options: JavaTranspilerOptions) {}

  /**
   * Transpiles the source files. Returns the content of the Java files by their path, e.g.
   * `com/example/Foo.java`.
   */
  public transpile(files: SourceFile[]): Map<string, string> {
    for (const file of files) {
      this.sourceFile(file);
    }
    return this.files;
  }

  private emit(line: string) {
    this.lines.push(line.length ? `${'  '.repeat(this.depth)}${line}` : '');
  }

  private indented(fn: () => void) {
    this.depth++;
    fn();
    this.depth--;
  }

  private emitLines(lines: string[]) {
    for (const line of lines) {
      this.emit(line);
    }
  }

  /**
   * Writes one Java file with the class that `fn` emits
   */
  private writeFile(node: Node, pkg: string, name: string, fn: () => void) {
    const path = `${pkg.replace(/\./g, '/')}/${name}.java`;
    if (this.files.has(path)) {
      fail(node, `Java class ${pkg}.${name} is already declared`);
    }
    this.lines = [];
    this.depth = 0;
    this.references = new Map();
    this.javaClass = name;
    fn();
    const body = this.lines.join('\n');

    // the imports: the classes of the JDK found in the code, without strings and comments, and the
    // classes of other packages that the code referenced
    const code = body
      .replace(/"(?:[^"\\]|\\.)*"/g, '""')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*/g, '');
    const imports = new Set<string>();
    for (const [simpleName, qualified] of Object.entries(jdkImports)) {
      if (new RegExp(`\\b${simpleName}\\b`).test(code)) {
        imports.add(qualified);
      }
    }
    for (const [simpleName, referencePkg] of this.references) {
      if (referencePkg != pkg) {
        imports.add(`${referencePkg}.${simpleName}`);
      }
    }
    const importLines = [...imports]
      .sort()
      .map((qualified) => `import ${qualified};`);
    this.files.set(
      path,
      `${[
        `// ${this.options.header}`,
        `package ${pkg};`,
        '',
        ...(importLines.length ? [...importLines, ''] : []),
        body,
      ].join('\n')}\n`,
    );
  }

  private sourceFile(file: SourceFile) {
    const pkg = this.options.packageOf(file);
    const classes = file.getClasses();
    const members: (FunctionDeclaration | VariableStatement)[] = [];
    for (const statement of file.getStatements()) {
      if (
        Node.isImportDeclaration(statement) ||
        Node.isExportDeclaration(statement) ||
        Node.isInterfaceDeclaration(statement) ||
        Node.isTypeAliasDeclaration(statement) ||
        Node.isClassDeclaration(statement)
      ) {
        continue;
      }
      if (Node.isEnumDeclaration(statement)) {
        this.writeFile(statement, pkg, statement.getName(), () =>
          this.enumDeclaration(statement),
        );
      } else if (
        Node.isFunctionDeclaration(statement) ||
        Node.isVariableStatement(statement)
      ) {
        members.push(statement);
      } else {
        fail(statement, 'Unsupported statement at module level');
      }
    }
    if (classes.length > 1 && members.length) {
      fail(
        members[0],
        'Functions and constants are supported only in files with at most one class',
      );
    }
    for (const declaration of classes) {
      this.writeFile(declaration, pkg, this.className(declaration), () =>
        this.classDeclaration(declaration, members),
      );
    }
    if (classes.length == 0 && members.length) {
      const container = this.containerOf(members[0]);
      this.writeFile(members[0], pkg, container.name, () => {
        this.emit(`final class ${container.name} {`);
        this.indented(() => {
          this.emit(`private ${container.name}() {}`);
          this.moduleMembers(members, container);
        });
        this.emit('}');
      });
    }
  }

  private className(declaration: ClassDeclaration): string {
    const name = declaration.getName();
    if (name === undefined) {
      return fail(declaration, 'Classes must have a name');
    }
    return name;
  }

  /**
   * The class of a module level function or constant
   */
  private containerOf(node: Node): Container {
    const file = node.getSourceFile();
    const classes = file.getClasses();
    const pkg = this.options.packageOf(file);
    if (classes.length == 1) {
      return { name: this.className(classes[0]), pkg, isClass: true };
    }
    if (classes.length > 1) {
      return fail(
        node,
        'Functions and constants are supported only in files with at most one class',
      );
    }
    const name = file
      .getBaseNameWithoutExtension()
      .split(/[^a-zA-Z0-9]+/)
      .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
      .join('');
    return { name, pkg, isClass: false };
  }

  /**
   * Refers to a class by its simple name, which imports it if it is in another package
   */
  private reference(node: Node, name: string, pkg: string): string {
    const existing = this.references.get(name);
    if (existing !== undefined && existing != pkg) {
      fail(node, `Two classes named ${name} are referenced`);
    }
    this.references.set(name, pkg);
    return name;
  }

  private classReference(
    node: Node,
    declaration: ClassDeclaration | EnumDeclaration,
  ): string {
    const name = Node.isClassDeclaration(declaration)
      ? this.className(declaration)
      : declaration.getName();
    return this.reference(
      node,
      name,
      this.options.packageOf(declaration.getSourceFile()),
    );
  }

  /**
   * Whether a class has a type parameter for the type of `this`: classes that are extended, and
   * have methods that return `this`
   */
  private isGeneric(declaration: ClassDeclaration): boolean {
    let generic = this.generics.get(declaration);
    if (generic === undefined) {
      generic =
        !isServiceFile(declaration.getSourceFile()) &&
        declaration.getDerivedClasses().length > 0 &&
        this.returnsThis(declaration);
      this.generics.set(declaration, generic);
    }
    return generic;
  }

  private returnsThis(declaration: ClassDeclaration): boolean {
    for (
      let cls: ClassDeclaration | undefined = declaration;
      cls;
      cls = cls.getBaseClass()
    ) {
      if (
        cls
          .getMethods()
          .some((method) => method.getReturnType().getText() == 'this')
      ) {
        return true;
      }
    }
    return false;
  }

  /**
   * The Java type of `this` in the current class
   */
  private thisType(): string {
    if (this.classDecl === undefined) {
      throw new Error('Not in a class');
    }
    return this.isGeneric(this.classDecl) ? 'T' : this.javaClass;
  }

  private docs(node: JSDocableNode & Node, params?: string[], isPublic = true) {
    if (!isPublic) {
      return;
    }
    const docs = node.getJsDocs();
    if (docs.length == 0) {
      return;
    }
    const doc = docs[docs.length - 1];
    const description = (doc.getDescription() ?? '').trim();
    const tags: string[] = [];
    for (const tag of doc.getTags()) {
      const comment = javadocText((tag.getCommentText() ?? '').trim());
      if (Node.isJSDocParameterTag(tag)) {
        const name = javaLocalName(tag.getName());
        if (params === undefined || params.includes(name)) {
          tags.push(`@param ${name} ${comment}`.trim());
        }
      } else if (tag.getTagName() == 'returns') {
        tags.push(`@return ${comment}`.trim());
      } else if (tag.getTagName() == 'see') {
        const url = (tag.getCommentText() ?? '').trim().replace(/"/g, '%22');
        tags.push(`@see <a href="${url}">${javadocText(url)}</a>`);
      } else {
        fail(tag, 'Unsupported JSDoc tag');
      }
    }
    this.emitLines(
      javadoc(description.length ? description.split('\n') : [], tags),
    );
  }

  private enumDeclaration(declaration: EnumDeclaration) {
    const name = declaration.getName();
    this.docs(declaration);
    this.emit(`public final class ${name} {`);
    this.indented(() => {
      this.emit(`private ${name}() {}`);
      const names = new Set<string>();
      for (const member of declaration.getMembers()) {
        const value = member.getValue();
        if (typeof value !== 'string') {
          fail(member, 'Enum members must be strings');
        }
        const constant = javaConstantName(member.getName());
        if (names.has(constant)) {
          fail(member, `Java name ${constant} is already used`);
        }
        names.add(constant);
        this.emit('');
        this.docs(member);
        this.emit(
          `public static final String ${constant} = ${javaString(value)};`,
        );
      }
    });
    this.emit('}');
  }

  private classDeclaration(
    declaration: ClassDeclaration,
    members: (FunctionDeclaration | VariableStatement)[],
  ) {
    if (
      declaration.isAbstract() ||
      declaration.getTypeParameters().length ||
      declaration.getImplements().length ||
      declaration.getDecorators().length
    ) {
      fail(declaration, 'Unsupported class declaration');
    }
    this.classDecl = declaration;
    const name = this.className(declaration);
    const generic = this.isGeneric(declaration);
    const base = declaration.getBaseClass();
    let header = `public class ${name}`;
    if (generic) {
      header += `<T extends ${name}<T>>`;
    }
    if (base) {
      header += ` extends ${this.classReference(declaration, base)}`;
      if (this.isGeneric(base)) {
        header += `<${generic ? 'T' : name}>`;
      }
    }
    this.docs(declaration);
    this.emit(`${header} {`);
    this.indented(() => {
      this.checkMemberNames(declaration);
      for (const property of declaration.getProperties()) {
        this.emit('');
        this.property(property);
      }
      const constructors = declaration.getConstructors();
      if (constructors.length > 1) {
        fail(constructors[1], 'Constructor overloads are not supported');
      }
      if (constructors.length) {
        this.callableDeclaration(constructors[0]);
      } else if (base) {
        this.inheritedConstructors(base);
      }
      for (const method of declaration.getMethods()) {
        this.callableDeclaration(method);
      }
      if (generic && !(base && this.isGeneric(base))) {
        this.emit('');
        this.emitLines(
          javadoc(['The statement itself, typed as the subclass']),
        );
        this.emit('@SuppressWarnings("unchecked")');
        this.emit('protected T self() {');
        this.indented(() => this.emit('return (T) this;'));
        this.emit('}');
      }
      if (members.length) {
        this.moduleMembers(members, this.containerOf(members[0]));
      }
    });
    this.emit('}');
    this.classDecl = undefined;
  }

  /**
   * Fails when two members map to the same Java name
   */
  private checkMemberNames(declaration: ClassDeclaration) {
    const names = new Map<string, string>();
    const check = (node: Node, name: string, kind: string) => {
      const key = `${kind} ${name}`;
      if (names.has(key)) {
        fail(node, `Java name ${name} is already used`);
      }
      names.set(key, name);
    };
    for (const property of declaration.getProperties()) {
      check(
        property,
        property.isStatic()
          ? javaConstantName(property.getName())
          : javaLocalName(property.getName()),
        'field',
      );
    }
    for (const method of declaration.getMethods()) {
      if (method.isStatic() || method.getOverloads().length) {
        fail(method, 'Static methods and overloads are not supported');
      }
      check(method, javaMethodName(method.getName()), 'method');
    }
  }

  private property(property: PropertyDeclaration) {
    const initializer = property.getInitializer();
    const scope = property.getScope();
    if (property.hasQuestionToken()) {
      fail(property, 'Optional properties are not supported');
    }
    this.docs(property, undefined, scope == Scope.Public);
    if (property.isStatic()) {
      if (initializer === undefined) {
        return fail(property, 'Static properties must be initialized');
      }
      this.emit(
        `${scope} static final ${this.declaredType(property)} ${javaConstantName(property.getName())} = ${this.expression(initializer).code};`,
      );
      return;
    }
    const modifiers = `${scope}${property.isReadonly() ? ' final' : ''}`;
    const name = javaLocalName(property.getName());
    this.emit(
      `${modifiers} ${this.declaredType(property)} ${name}${initializer ? ` = ${this.expression(initializer).code}` : ''};`,
    );
  }

  private moduleMembers(
    members: (FunctionDeclaration | VariableStatement)[],
    container: Container,
  ) {
    for (const member of members) {
      if (Node.isFunctionDeclaration(member)) {
        this.callableDeclaration(member);
        continue;
      }
      if (member.getDeclarationKind() != VariableDeclarationKind.Const) {
        fail(member, 'Module level variables must be constants');
      }
      for (const declaration of member.getDeclarations()) {
        const initializer = declaration.getInitializer();
        if (initializer === undefined) {
          return fail(declaration, 'Constants must be initialized');
        }
        const visibility = container.isClass
          ? member.isExported()
            ? 'public '
            : 'protected '
          : member.isExported()
            ? ''
            : 'private ';
        this.emit('');
        this.docs(member);
        this.emit(
          `${visibility}static final ${this.declaredType(declaration)} ${javaConstantName(declaration.getName())} = ${this.expression(initializer).code};`,
        );
      }
    }
  }

  /**
   * The nearest constructor of a class or its ancestors
   */
  private constructorOf(
    declaration: ClassDeclaration,
  ): ConstructorDeclaration | undefined {
    for (
      let cls: ClassDeclaration | undefined = declaration;
      cls;
      cls = cls.getBaseClass()
    ) {
      const constructors = cls.getConstructors();
      if (constructors.length) {
        return constructors[0];
      }
    }
    return undefined;
  }

  /**
   * Classes without constructor get those of their base class
   */
  private inheritedConstructors(base: ClassDeclaration) {
    const constructor = this.constructorOf(base);
    if (constructor === undefined) {
      return;
    }
    const callable = this.callable(constructor);
    const signatures = callable.implIsOverload
      ? callable.overloads
      : [...callable.overloads, callable.impl];
    for (const signature of signatures) {
      const isImpl = !callable.implIsOverload && signature === callable.impl;
      const params = signature.map(
        (type, index) => `${type} ${callable.params[index].name}`,
      );
      const args = signature.map((type, index) => {
        const name = callable.params[index].name;
        return isImpl && type == 'Object' ? `(Object) ${name}` : name;
      });
      this.emit('');
      if (!isImpl) {
        this.docs(
          constructor,
          callable.params.slice(0, signature.length).map((param) => param.name),
        );
      }
      this.emit(
        `${isImpl ? 'protected' : 'public'} ${this.javaClass}(${params.join(', ')}) {`,
      );
      this.indented(() => this.emit(`super(${args.join(', ')});`));
      this.emit('}');
    }
  }

  /**
   * The Java types of a parameter. Public parameters accept every member of a union type, and any
   * number; the others have one type.
   */
  private paramOptions(
    param: ParameterDeclaration,
    isPublic: boolean,
  ): string[] {
    let typeNode = param.getTypeNode();
    if (typeNode === undefined) {
      return fail(param, 'Parameters must have a type');
    }
    if (param.isRestParameter()) {
      if (!Node.isArrayTypeNode(typeNode)) {
        return fail(param, 'Rest parameters must have an array type');
      }
      typeNode = typeNode.getElementTypeNode();
    }
    if (!isPublic) {
      return [
        this.typeFromNode(
          typeNode,
          param.isOptional() || param.isRestParameter(),
        ),
      ];
    }
    const parts = Node.isUnionTypeNode(typeNode)
      ? typeNode.getTypeNodes()
      : [typeNode];
    const options: string[] = [];
    for (const part of parts) {
      if (part.getKind() == SyntaxKind.UndefinedKeyword) {
        continue;
      }
      const option = this.typeFromNode(part, param.isOptional(), true);
      if (!options.includes(option)) {
        options.push(option);
      }
    }
    return options;
  }

  private callable(
    declaration:
      MethodDeclaration | ConstructorDeclaration | FunctionDeclaration,
  ): Callable {
    const existing = this.callables.get(declaration);
    if (existing !== undefined) {
      return existing;
    }
    if (
      declaration.getTypeParameters().length ||
      (!Node.isConstructorDeclaration(declaration) && declaration.isAsync())
    ) {
      fail(declaration, 'Generic and async functions are not supported');
    }
    let name: string;
    let isPublic = false;
    if (Node.isConstructorDeclaration(declaration)) {
      name = this.className(declaration.getParentOrThrow() as ClassDeclaration);
      isPublic = declaration.getScope() == Scope.Public;
    } else if (Node.isMethodDeclaration(declaration)) {
      name = javaMethodName(declaration.getName());
      isPublic = declaration.getScope() == Scope.Public;
    } else {
      const functionName = declaration.getName();
      if (functionName === undefined || declaration.getOverloads().length) {
        return fail(declaration, 'Unsupported function');
      }
      name = functionName;
    }

    const params: Param[] = [];
    for (const param of declaration.getParameters()) {
      if (param.hasInitializer()) {
        fail(
          param,
          'Default values are not supported, use optional parameters',
        );
      }
      if (!Node.isIdentifier(param.getNameNode())) {
        fail(param, 'Destructured parameters are not supported');
      }
      params.push({
        name: javaLocalName(param.getName()),
        options: this.paramOptions(param, isPublic),
        optional: param.isOptional() && !param.isRestParameter(),
        rest: param.isRestParameter(),
      });
    }
    if (
      params.some((param) => param.rest) &&
      params.some((param) => param.optional)
    ) {
      fail(
        declaration,
        'Optional and rest parameters are not supported together',
      );
    }
    const typeOf = (param: Param, option: string) =>
      param.rest ? `${option}...` : param.optional ? box(option) : option;

    let callable: Callable;
    if (!isPublic) {
      callable = {
        name,
        params,
        overloads: [],
        impl: params.map((param) => typeOf(param, param.options[0])),
        implIsOverload: false,
        implCallable: true,
      };
    } else {
      const firstOptional = params.findIndex((param) => param.optional);
      const overloads: Signature[] = [];
      for (
        let arity = firstOptional < 0 ? params.length : firstOptional;
        arity <= params.length;
        arity++
      ) {
        let signatures: Signature[] = [[]];
        for (const param of params.slice(0, arity)) {
          signatures = signatures.flatMap((signature) =>
            param.options.map((option) => [
              ...signature,
              typeOf(param, option),
            ]),
          );
        }
        overloads.push(...signatures);
      }
      const collapsed = params.some((param) => param.options.length > 1);
      const impl = collapsed
        ? params.map((param) =>
            param.options.length > 1
              ? 'Object'
              : typeOf(param, param.options[0]),
          )
        : overloads[overloads.length - 1];
      const erasures = new Set<string>();
      for (const signature of collapsed ? [...overloads, impl] : overloads) {
        const key = signature.map(erasure).join(',');
        if (erasures.has(key)) {
          fail(
            declaration,
            `Two Java overloads have the same parameters (${key})`,
          );
        }
        erasures.add(key);
      }
      callable = {
        name,
        params,
        overloads,
        impl,
        implIsOverload: !collapsed,
        implCallable: !isServiceFile(declaration.getSourceFile()),
      };
    }
    this.callables.set(declaration, callable);
    return callable;
  }

  private returnType(
    declaration: MethodDeclaration | FunctionDeclaration,
  ): string {
    const typeNode = declaration.getReturnTypeNode();
    if (typeNode?.getKind() == SyntaxKind.AnyKeyword) {
      // the type of the returned values
      const types = new Set(
        declaration
          .getDescendantsOfKind(SyntaxKind.ReturnStatement)
          .filter(
            (statement) =>
              statement.getFirstAncestorByKind(SyntaxKind.ArrowFunction) ===
              undefined,
          )
          .map((statement) => {
            const expression = statement.getExpression();
            return expression ? this.exprType(expression) : 'void';
          }),
      );
      return types.size == 1 ? [...types][0] : 'Object';
    }
    if (typeNode) {
      return this.typeFromNode(typeNode, false);
    }
    const type = declaration.getReturnType();
    if (type.isVoid()) {
      return 'void';
    }
    return this.typeFromType(type, false, declaration);
  }

  private callableDeclaration(
    declaration:
      MethodDeclaration | ConstructorDeclaration | FunctionDeclaration,
  ) {
    const callable = this.callable(declaration);
    const isConstructor = Node.isConstructorDeclaration(declaration);
    let modifiers: string;
    let returnType = '';
    if (Node.isFunctionDeclaration(declaration)) {
      const container = this.containerOf(declaration);
      modifiers = container.isClass
        ? declaration.isExported()
          ? 'public static'
          : 'protected static'
        : declaration.isExported()
          ? 'static'
          : 'private static';
      returnType = ` ${this.returnType(declaration)}`;
    } else {
      modifiers = declaration.getScope() ?? 'public';
      if (Node.isMethodDeclaration(declaration)) {
        returnType = ` ${this.returnType(declaration)}`;
      }
    }
    const name = isConstructor ? this.javaClass : callable.name;
    const paramList = (signature: Signature) =>
      signature
        .map((type, index) => `${type} ${callable.params[index].name}`)
        .join(', ');
    const paramNames = (signature: Signature) =>
      callable.params.slice(0, signature.length).map((param) => param.name);

    // the overloads, which call the implementation
    for (const signature of callable.overloads) {
      if (callable.implIsOverload && signature === callable.impl) {
        continue;
      }
      const args = callable.impl.map((type, index) => {
        const param = callable.params[index];
        if (index >= signature.length) {
          return `(${type}) null`;
        }
        return type == 'Object' && signature[index] != 'Object'
          ? `(Object) ${param.name}`
          : param.name;
      });
      this.emit('');
      this.docs(declaration, paramNames(signature));
      this.emit(`${modifiers}${returnType} ${name}(${paramList(signature)}) {`);
      this.indented(() => {
        if (isConstructor) {
          this.emit(`this(${args.join(', ')});`);
        } else {
          this.emit(
            `${returnType == ' void' ? '' : 'return '}${name}(${args.join(', ')});`,
          );
        }
      });
      this.emit('}');
    }

    // the implementation
    const implModifiers =
      callable.overloads.length && !callable.implIsOverload
        ? 'protected'
        : modifiers;
    this.emit('');
    this.docs(
      declaration,
      paramNames(callable.impl),
      implModifiers.startsWith('public'),
    );
    this.emit(
      `${implModifiers}${returnType} ${name}(${paramList(callable.impl)}) {`,
    );
    this.indented(() => {
      const body = declaration.getBody();
      if (!body || !Node.isBlock(body)) {
        return fail(declaration, 'Functions must have a body');
      }
      const statements = body.getStatements();
      if (isConstructor) {
        const first = statements[0];
        const base = this.classDecl?.getBaseClass();
        if (
          base &&
          !(
            first &&
            Node.isExpressionStatement(first) &&
            Node.isCallExpression(first.getExpression()) &&
            first.getExpression().getFirstChild()?.getKind() ==
              SyntaxKind.SuperKeyword
          )
        ) {
          fail(declaration, 'Constructors must start with super()');
        }
      }
      for (const statement of statements) {
        this.statement(statement);
      }
    });
    this.emit('}');
  }

  /**
   * The Java type of a type node. Public parameters take any number and arrays of any element type;
   * all other numbers are `int`.
   */
  private typeFromNode(
    node: TypeNode,
    boxed: boolean,
    isPublic = false,
  ): string {
    const number = isPublic ? 'Number' : boxed ? 'Integer' : 'int';
    switch (node.getKind()) {
      case SyntaxKind.StringKeyword:
        return 'String';
      case SyntaxKind.NumberKeyword:
        return number;
      case SyntaxKind.BooleanKeyword:
        return boxed ? 'Boolean' : 'boolean';
      case SyntaxKind.AnyKeyword:
        return 'Object';
      case SyntaxKind.VoidKeyword:
        return 'void';
      case SyntaxKind.ThisType:
        return this.thisType();
    }
    if (Node.isLiteralTypeNode(node)) {
      return this.typeFromType(node.getType(), boxed, node);
    }
    if (Node.isParenthesizedTypeNode(node)) {
      return this.typeFromNode(node.getTypeNode(), boxed, isPublic);
    }
    if (Node.isArrayTypeNode(node)) {
      const element = this.typeFromNode(
        node.getElementTypeNode(),
        true,
        isPublic,
      );
      if (isPublic && element == 'Number') {
        return 'List<? extends Number>';
      }
      if (element == 'Object' && isPublic) {
        return 'List<?>';
      }
      return `List<${element}>`;
    }
    if (Node.isUnionTypeNode(node)) {
      const parts = node
        .getTypeNodes()
        .filter(
          (part) =>
            part.getKind() != SyntaxKind.UndefinedKeyword &&
            !(Node.isLiteralTypeNode(part) && part.getText() == 'null'),
        );
      const optional = parts.length < node.getTypeNodes().length;
      const types = new Set(
        parts.map((part) =>
          this.typeFromNode(part, boxed || optional, isPublic),
        ),
      );
      return types.size == 1 ? [...types][0] : 'Object';
    }
    if (Node.isTypeReference(node)) {
      const name = node.getTypeName().getText();
      const args = node.getTypeArguments();
      switch (name) {
        case 'Record':
          return `Map<String, ${this.typeFromNode(args[1], true)}>`;
        case 'Partial':
          return this.typeFromNode(args[0], boxed, isPublic);
        case 'Array':
          return `List<${this.typeFromNode(args[0], true)}>`;
        case 'Set':
          return `Set<${this.typeFromNode(args[0], true)}>`;
        case 'Map':
          return `Map<${this.typeFromNode(args[0], true)}, ${this.typeFromNode(args[1], true)}>`;
        case 'Date':
          return 'Instant';
        case 'RegExp':
          return 'Pattern';
      }
      const declaration = resolve(node.getTypeName())[0];
      if (declaration === undefined) {
        return fail(node, 'Unresolved type');
      }
      if (Node.isTypeAliasDeclaration(declaration)) {
        return this.typeFromNode(
          declaration.getTypeNodeOrThrow(),
          boxed,
          isPublic,
        );
      }
      if (Node.isEnumDeclaration(declaration)) {
        return 'String';
      }
      if (Node.isClassDeclaration(declaration)) {
        const reference = this.classReference(node, declaration);
        return this.isGeneric(declaration) ? `${reference}<?>` : reference;
      }
    }
    return fail(node, 'Unsupported type');
  }

  /**
   * The Java type of an inferred type
   */
  private typeFromType(type: Type, boxed: boolean, node: Node): string {
    const number = boxed ? 'Integer' : 'int';
    if (type.getText() == 'this') {
      return this.thisType();
    }
    if (type.isAny() || type.isUnknown()) {
      return 'Object';
    }
    if (type.isVoid()) {
      return 'void';
    }
    if (type.isBoolean() || type.isBooleanLiteral()) {
      return boxed ? 'Boolean' : 'boolean';
    }
    if (type.isUnion()) {
      const parts = type.getUnionTypes();
      const nonNull = parts.filter(
        (part) => !part.isUndefined() && !part.isNull(),
      );
      const optional = nonNull.length < parts.length;
      const nonNullType = type.getNonNullableType();
      if (nonNullType.isBoolean()) {
        return boxed || optional ? 'Boolean' : 'boolean';
      }
      const types = new Set(
        nonNull.map((part) => this.typeFromType(part, boxed || optional, node)),
      );
      return types.size == 1 ? [...types][0] : 'Object';
    }
    const kind = kindOf(type);
    switch (kind) {
      case 'string':
        return 'String';
      case 'number':
        return number;
      case 'array': {
        const element = type.getArrayElementType();
        if (element === undefined) {
          return fail(node, 'Unsupported array type');
        }
        return `List<${this.typeFromType(element, true, node)}>`;
      }
      case 'set':
        return `Set<${this.typeFromType(type.getTypeArguments()[0], true, node)}>`;
      case 'map': {
        const [key, value] = type.getTypeArguments();
        return `Map<${this.typeFromType(key, true, node)}, ${this.typeFromType(value, true, node)}>`;
      }
      case 'date':
        return 'Instant';
      case 'regexp':
        return 'Pattern';
      case 'class': {
        const declaration = type
          .getSymbolOrThrow()
          .getDeclarations()
          .find((d) => Node.isClassDeclaration(d))!;
        const reference = this.classReference(node, declaration);
        return this.isGeneric(declaration) ? `${reference}<?>` : reference;
      }
      case 'record': {
        const index = type.getStringIndexType();
        if (index) {
          return `Map<String, ${this.typeFromType(index, true, node)}>`;
        }
        const properties = type.getProperties();
        if (properties.length) {
          return `Map<String, ${this.typeFromType(properties[0].getTypeAtLocation(node), true, node)}>`;
        }
        return 'Map<String, Object>';
      }
    }
    return fail(node, `Unsupported type ${type.getText()}`);
  }

  /**
   * The Java type of a declaration: a parameter, variable or property
   */
  private declaredType(declaration: Node): string {
    const existing = this.declared.get(declaration);
    if (existing !== undefined) {
      return existing;
    }
    let type: string;
    if (Node.isParameterDeclaration(declaration)) {
      const parent = declaration.getParentOrThrow();
      if (Node.isArrowFunction(parent)) {
        const index = parent.getParameters().indexOf(declaration);
        if (this.isForEachCallback(parent)) {
          type = this.typeFromType(declaration.getType(), false, declaration);
        } else {
          type =
            index == 1
              ? 'Integer'
              : this.typeFromType(declaration.getType(), true, declaration);
        }
      } else if (
        Node.isMethodDeclaration(parent) ||
        Node.isConstructorDeclaration(parent) ||
        Node.isFunctionDeclaration(parent)
      ) {
        const callable = this.callable(parent);
        const index = parent.getParameters().indexOf(declaration);
        type = callable.impl[index].replace('...', '[]');
      } else {
        return fail(declaration, 'Unsupported parameter');
      }
    } else if (
      Node.isVariableDeclaration(declaration) ||
      Node.isPropertyDeclaration(declaration)
    ) {
      const typeNode = declaration.getTypeNode();
      const initializer = declaration.getInitializer();
      if (typeNode) {
        type = this.typeFromNode(typeNode, false);
      } else if (initializer) {
        type = this.typeFromType(declaration.getType(), false, declaration);
      } else {
        return fail(declaration, 'Variables need a type or an initializer');
      }
    } else if (Node.isBindingElement(declaration)) {
      type = this.typeFromType(declaration.getType(), true, declaration);
    } else {
      return fail(declaration, 'Unsupported declaration');
    }
    this.declared.set(declaration, type);
    return type;
  }

  /**
   * The declaration of a variable, parameter or property that an expression refers to
   */
  private declarationOf(node: Node): Node | undefined {
    if (
      Node.isIdentifier(node) ||
      (Node.isPropertyAccessExpression(node) &&
        node.getExpression().getKind() == SyntaxKind.ThisKeyword)
    ) {
      const declaration = resolve(node)[0];
      if (
        declaration &&
        (Node.isParameterDeclaration(declaration) ||
          Node.isVariableDeclaration(declaration) ||
          Node.isBindingElement(declaration) ||
          (Node.isPropertyDeclaration(declaration) && !declaration.isStatic()))
      ) {
        return declaration;
      }
    }
    return undefined;
  }

  /**
   * The type a variable of type `Object` is narrowed to at an expression, if it maps to another Java
   * type
   */
  private narrowedType(node: Node): string | undefined {
    const type = this.typeFromType(node.getType(), true, node);
    if (type == 'Object') {
      return undefined;
    }
    return type.startsWith('List<') ? 'List<?>' : type;
  }

  /**
   * The static Java type of the translation of an expression
   */
  private exprType(node: Node): string {
    while (
      Node.isParenthesizedExpression(node) ||
      Node.isNonNullExpression(node)
    ) {
      node = node.getExpression();
    }
    if (
      node.getKind() == SyntaxKind.NullKeyword ||
      (Node.isIdentifier(node) && node.getText() == 'undefined')
    ) {
      return 'null';
    }
    const declaration = this.declarationOf(node);
    if (declaration) {
      const declared = this.declaredType(declaration);
      if (declared == 'Object') {
        return this.narrowedType(node) ?? 'Object';
      }
      return declared;
    }
    if (
      Node.isElementAccessExpression(node) ||
      (Node.isCallExpression(node) &&
        Node.isPropertyAccessExpression(node.getExpression()) &&
        (node.getExpression() as PropertyAccessExpression).getName() == 'get')
    ) {
      return box(this.typeFromType(node.getType(), false, node));
    }
    return this.typeFromType(node.getType(), false, node);
  }

  private isForEachCallback(node: ArrowFunction): boolean {
    const parent = node.getParent();
    return (
      Node.isCallExpression(parent) &&
      Node.isPropertyAccessExpression(parent.getExpression()) &&
      (parent.getExpression() as PropertyAccessExpression).getName() ==
        'forEach' &&
      Node.isExpressionStatement(parent.getParent())
    );
  }

  private dummy(prefix: string): string {
    this.dummies++;
    return `_${prefix}${this.dummies}`;
  }

  private block(node: Statement) {
    this.indented(() => {
      if (Node.isBlock(node)) {
        for (const statement of node.getStatements()) {
          this.statement(statement);
        }
      } else {
        this.statement(node);
      }
    });
  }

  private statement(node: Statement) {
    if (Node.isBlock(node)) {
      for (const statement of node.getStatements()) {
        this.statement(statement);
      }
    } else if (Node.isVariableStatement(node)) {
      for (const declaration of node.getDeclarations()) {
        if (!Node.isIdentifier(declaration.getNameNode())) {
          fail(declaration, 'Destructuring is not supported');
        }
        const initializer = declaration.getInitializer();
        const name = javaLocalName(declaration.getName());
        const type = this.declaredType(declaration);
        if (initializer === undefined) {
          this.emit(`${type} ${name};`);
        } else if (type != 'Object' && initializer.getType().isAny()) {
          // a value of type any, assigned to a variable with a type
          this.emit(
            `@SuppressWarnings("unchecked") ${type} ${name} = (${type}) ${wrap(this.expression(initializer), Prec.unary)};`,
          );
        } else {
          this.emit(`${type} ${name} = ${this.expression(initializer).code};`);
        }
      }
    } else if (Node.isExpressionStatement(node)) {
      this.expressionStatement(node.getExpression());
    } else if (Node.isIfStatement(node)) {
      this.emit(`if (${this.condition(node.getExpression()).code}) {`);
      this.block(node.getThenStatement());
      let otherwise = node.getElseStatement();
      while (otherwise) {
        if (Node.isIfStatement(otherwise)) {
          this.emit(
            `} else if (${this.condition(otherwise.getExpression()).code}) {`,
          );
          this.block(otherwise.getThenStatement());
          otherwise = otherwise.getElseStatement();
        } else {
          this.emit('} else {');
          this.block(otherwise);
          otherwise = undefined;
        }
      }
      this.emit('}');
    } else if (Node.isForOfStatement(node)) {
      this.forOfStatement(node);
    } else if (Node.isForStatement(node)) {
      this.forStatement(node);
    } else if (Node.isWhileStatement(node)) {
      this.emit(`while (${this.condition(node.getExpression()).code}) {`);
      this.block(node.getStatement());
      this.emit('}');
    } else if (Node.isReturnStatement(node)) {
      const expression = node.getExpression();
      this.emit(
        expression ? `return ${this.expression(expression).code};` : 'return;',
      );
    } else if (Node.isThrowStatement(node)) {
      const expression = node.getExpression();
      if (
        !Node.isNewExpression(expression) ||
        expression.getExpression().getText() != 'Error' ||
        expression.getArguments().length != 1
      ) {
        return fail(node, 'Only `throw new Error(message)` is supported');
      }
      this.emit(
        `throw new IllegalArgumentException(${this.expression(expression.getArguments()[0]).code});`,
      );
    } else if (Node.isBreakStatement(node) || Node.isContinueStatement(node)) {
      if (node.getLabel()) {
        fail(node, 'Labels are not supported');
      }
      this.emit(Node.isBreakStatement(node) ? 'break;' : 'continue;');
    } else {
      fail(node, 'Unsupported statement');
    }
  }

  private forOfStatement(node: ForOfStatement) {
    const initializer = node.getInitializer();
    if (
      !Node.isVariableDeclarationList(initializer) ||
      initializer.getDeclarations().length != 1
    ) {
      return fail(node, 'Unsupported loop variable');
    }
    const declaration = initializer.getDeclarations()[0];
    const nameNode = declaration.getNameNode();
    let iterable = node.getExpression();
    if (Node.isArrayBindingPattern(nameNode)) {
      // entries of a map or record
      if (
        Node.isCallExpression(iterable) &&
        iterable.getExpression().getText() == 'Object.entries'
      ) {
        iterable = iterable.getArguments()[0] as Expression;
      } else if (kindOf(iterable.getType()) != 'map') {
        return fail(
          node,
          'Destructuring is supported only for entries of maps',
        );
      }
      const elements = nameNode.getElements();
      if (
        elements.length != 2 ||
        !elements.every((element) => Node.isBindingElement(element))
      ) {
        return fail(node, 'Entries must be destructured into key and value');
      }
      const [key, value] = elements.map((element) => element as Node);
      if (!Node.isBindingElement(key) || !Node.isBindingElement(value)) {
        return fail(node, 'Unsupported loop variable');
      }
      const source = wrap(this.expression(iterable), Prec.primary);
      const valueName = javaLocalName(value.getName());
      const valueType = this.declaredType(value);
      if (key.getName() == '_') {
        this.emit(`for (${valueType} ${valueName} : ${source}.values()) {`);
        this.block(node.getStatement());
        this.emit('}');
        return;
      }
      const keyType = this.declaredType(key);
      const entry = this.dummy('entry');
      this.emit(
        `for (Map.Entry<${keyType}, ${valueType}> ${entry} : ${source}.entrySet()) {`,
      );
      this.indented(() => {
        this.emit(
          `${keyType} ${javaLocalName(key.getName())} = ${entry}.getKey();`,
        );
        this.emit(`${valueType} ${valueName} = ${entry}.getValue();`);
      });
      this.block(node.getStatement());
      this.emit('}');
      return;
    }
    if (!['array', 'set'].includes(kindOf(iterable.getType()))) {
      fail(node, 'Loops are supported over arrays, sets and map entries');
    }
    const type = this.typeFromType(declaration.getType(), false, declaration);
    this.declared.set(declaration, type);
    this.emit(
      `for (${type} ${javaLocalName(declaration.getName())} : ${this.expression(iterable).code}) {`,
    );
    this.block(node.getStatement());
    this.emit('}');
  }

  private forStatement(node: ForStatement) {
    const initializer = node.getInitializer();
    const condition = node.getCondition();
    const incrementor = node.getIncrementor();
    if (
      !Node.isVariableDeclarationList(initializer) ||
      initializer.getDeclarations().length != 1 ||
      condition === undefined ||
      incrementor === undefined
    ) {
      return fail(node, 'Unsupported for loop');
    }
    const declaration = initializer.getDeclarations()[0];
    const value = declaration.getInitializerOrThrow();
    const init = `${this.declaredType(declaration)} ${javaLocalName(declaration.getName())} = ${this.expression(value).code}`;
    this.emit(
      `for (${init}; ${this.condition(condition).code}; ${this.simpleStatement(incrementor)}) {`,
    );
    this.block(node.getStatement());
    this.emit('}');
  }

  /**
   * An assignment, increment or call, without semicolon
   */
  private simpleStatement(node: Expression): string {
    if (Node.isBinaryExpression(node)) {
      const operator = node.getOperatorToken().getText();
      if (['=', '+=', '-='].includes(operator)) {
        return this.assignment(node, operator);
      }
    }
    if (
      Node.isPostfixUnaryExpression(node) ||
      Node.isPrefixUnaryExpression(node)
    ) {
      const operator = node.getOperatorToken();
      if (
        operator == SyntaxKind.PlusPlusToken ||
        operator == SyntaxKind.MinusMinusToken
      ) {
        return `${this.target(node.getOperand())}${operator == SyntaxKind.PlusPlusToken ? '++' : '--'}`;
      }
    }
    if (Node.isCallExpression(node)) {
      return this.expression(node).code;
    }
    return fail(node, 'Unsupported expression statement');
  }

  private expressionStatement(node: Expression) {
    if (Node.isCallExpression(node)) {
      const callee = node.getExpression();
      if (
        Node.isPropertyAccessExpression(callee) &&
        callee.getName() == 'forEach'
      ) {
        const kind = kindOf(callee.getExpression().getType());
        if (kind != 'array' && kind != 'set') {
          fail(node, 'forEach is supported only on arrays and sets');
        }
        const fn = arrowFunction(node.getArguments()[0]);
        const params = fn.getParameters();
        if (params.length != 1) {
          fail(fn, 'forEach callbacks must have one parameter');
        }
        if (fn.getDescendantsOfKind(SyntaxKind.ReturnStatement).length) {
          fail(fn, 'forEach callbacks must not return');
        }
        const param = params[0];
        this.emit(
          `for (${this.declaredType(param)} ${javaLocalName(param.getName())} : ${this.expression(callee.getExpression()).code}) {`,
        );
        const body = fn.getBody();
        if (Node.isBlock(body)) {
          this.block(body);
        } else {
          this.indented(() =>
            this.emit(`${this.simpleStatement(body as Expression)};`),
          );
        }
        this.emit('}');
        return;
      }
    }
    this.emit(`${this.simpleStatement(node)};`);
  }

  /**
   * A variable or field that is assigned to
   */
  private target(node: Node): string {
    if (Node.isIdentifier(node)) {
      return javaLocalName(node.getText());
    }
    if (
      Node.isPropertyAccessExpression(node) &&
      node.getExpression().getKind() == SyntaxKind.ThisKeyword
    ) {
      return `this.${javaLocalName(node.getName())}`;
    }
    return fail(node, 'Unsupported assignment target');
  }

  private assignment(node: BinaryExpression, operator: string): string {
    const left = node.getLeft();
    const right = node.getRight();
    if (Node.isElementAccessExpression(left)) {
      if (operator != '=') {
        fail(node, 'Unsupported assignment');
      }
      const receiver = wrap(
        this.expression(left.getExpression()),
        Prec.primary,
      );
      const key = this.expression(left.getArgumentExpressionOrThrow()).code;
      const kind = kindOf(left.getExpression().getType());
      if (kind == 'array') {
        return `${receiver}.set(${key}, ${this.expression(right).code})`;
      }
      if (kind == 'record' || kind == 'map') {
        return `${receiver}.put(${key}, ${this.expression(right).code})`;
      }
      return fail(node, 'Unsupported assignment');
    }
    if (
      Node.isPropertyAccessExpression(left) &&
      ['record', 'any'].includes(kindOf(left.getExpression().getType()))
    ) {
      if (operator != '=') {
        fail(node, 'Unsupported assignment');
      }
      return `${wrap(this.expression(left.getExpression()), Prec.primary)}.put(${javaString(left.getName())}, ${this.expression(right).code})`;
    }
    const declaration = this.declarationOf(left);
    if (
      declaration &&
      this.declaredType(declaration) == 'int' &&
      ['double', 'Number'].includes(this.exprType(right))
    ) {
      // a number of a public parameter, assigned to an internal number
      return `${this.target(left)} ${operator} ${wrap(this.expression(right), Prec.primary)}.intValue()`;
    }
    return `${this.target(left)} ${operator} ${this.expression(right).code}`;
  }

  /**
   * An expression in a boolean context, with the truthiness of JavaScript
   */
  private condition(node: Expression): Expr {
    if (Node.isParenthesizedExpression(node)) {
      return {
        code: `(${this.condition(node.getExpression()).code})`,
        prec: Prec.primary,
      };
    }
    if (Node.isBinaryExpression(node)) {
      const operator = node.getOperatorToken().getText();
      if (operator == '&&' || operator == '||') {
        const prec = operator == '&&' ? Prec.and : Prec.or;
        return {
          code: `${wrap(this.condition(node.getLeft()), prec)} ${operator} ${wrap(this.condition(node.getRight()), prec + 1)}`,
          prec,
        };
      }
    }
    const type = node.getType();
    const kind = kindOf(type);
    if (kind == 'boolean') {
      const expr = this.expression(node);
      return this.exprType(node) == 'Boolean' && !Node.isBinaryExpression(node)
        ? { code: `Boolean.TRUE.equals(${expr.code})`, prec: Prec.primary }
        : expr;
    }
    const expr = this.expression(node);
    if (kind == 'string') {
      return { code: `Js.truthy(${expr.code})`, prec: Prec.primary };
    }
    if (kind == 'number') {
      return {
        code: `${wrap(expr, Prec.relational)} != 0`,
        prec: Prec.equality,
      };
    }
    if (kind == 'any' || kind == 'mixed') {
      return fail(node, 'Conditions must have a known type');
    }
    return {
      code: `${wrap(expr, Prec.relational)} != null`,
      prec: Prec.equality,
    };
  }

  private expression(node: Node): Expr {
    if (Node.isParenthesizedExpression(node)) {
      const inner = this.expression(node.getExpression());
      return { code: `(${inner.code})`, prec: Prec.primary };
    }
    if (Node.isNonNullExpression(node)) {
      return this.expression(node.getExpression());
    }
    if (
      Node.isStringLiteral(node) ||
      Node.isNoSubstitutionTemplateLiteral(node)
    ) {
      return { code: javaString(node.getLiteralValue()), prec: Prec.primary };
    }
    if (Node.isNumericLiteral(node)) {
      const value = node.getLiteralValue();
      if (!Number.isInteger(value) || Math.abs(value) > 2147483647) {
        return fail(node, 'Only integers are supported');
      }
      return { code: `${value}`, prec: Prec.primary };
    }
    switch (node.getKind()) {
      case SyntaxKind.TrueKeyword:
        return { code: 'true', prec: Prec.primary };
      case SyntaxKind.FalseKeyword:
        return { code: 'false', prec: Prec.primary };
      case SyntaxKind.NullKeyword:
        return { code: 'null', prec: Prec.primary };
      case SyntaxKind.ThisKeyword:
        return {
          code: this.thisType() == 'T' ? 'self()' : 'this',
          prec: Prec.primary,
        };
    }
    if (Node.isTemplateExpression(node)) {
      return this.template(node);
    }
    if (Node.isIdentifier(node)) {
      return this.identifier(node);
    }
    if (Node.isPropertyAccessExpression(node)) {
      return this.propertyAccess(node);
    }
    if (Node.isElementAccessExpression(node)) {
      const receiver = node.getExpression();
      const kind = kindOf(receiver.getType());
      if (!['array', 'record', 'map'].includes(kind)) {
        return fail(node, 'Element access is supported on arrays and records');
      }
      return {
        code: `${this.receiver(receiver)}.get(${this.expression(node.getArgumentExpressionOrThrow()).code})`,
        prec: Prec.primary,
      };
    }
    if (Node.isCallExpression(node)) {
      return this.call(node);
    }
    if (Node.isNewExpression(node)) {
      return this.newExpression(node);
    }
    if (Node.isBinaryExpression(node)) {
      return this.binary(node);
    }
    if (Node.isPrefixUnaryExpression(node)) {
      const operand = node.getOperand();
      switch (node.getOperatorToken()) {
        case SyntaxKind.ExclamationToken:
          return {
            code: `!${wrap(this.condition(operand), Prec.unary)}`,
            prec: Prec.unary,
          };
        case SyntaxKind.MinusToken:
          return {
            code: `-${wrap(this.expression(operand), Prec.unary)}`,
            prec: Prec.unary,
          };
      }
      return fail(node, 'Unsupported operator');
    }
    if (Node.isConditionalExpression(node)) {
      return {
        code: `${wrap(this.condition(node.getCondition()), Prec.or)} ? ${wrap(this.expression(node.getWhenTrue()), Prec.or)} : ${wrap(this.expression(node.getWhenFalse()), Prec.conditional)}`,
        prec: Prec.conditional,
      };
    }
    if (Node.isTypeOfExpression(node)) {
      return {
        code: `Js.typeof(${this.expression(node.getExpression()).code})`,
        prec: Prec.primary,
      };
    }
    if (Node.isArrayLiteralExpression(node)) {
      const elements = node.getElements();
      if (elements.some((element) => Node.isSpreadElement(element))) {
        return fail(node, 'Spread elements are not supported');
      }
      if (elements.length == 0) {
        return { code: 'new ArrayList<>()', prec: Prec.primary };
      }
      return {
        code: `new ArrayList<>(Arrays.asList(${elements.map((element) => this.expression(element).code).join(', ')}))`,
        prec: Prec.primary,
      };
    }
    if (Node.isObjectLiteralExpression(node)) {
      if (node.getProperties().length) {
        return fail(node, 'Only empty object literals are supported');
      }
      return { code: 'new LinkedHashMap<>()', prec: Prec.primary };
    }
    return fail(node, 'Unsupported expression');
  }

  /**
   * The receiver of a method call or property: `this` stays `this`
   */
  private receiver(node: Node): string {
    if (node.getKind() == SyntaxKind.ThisKeyword) {
      return 'this';
    }
    return wrap(this.expression(node), Prec.primary);
  }

  private identifier(node: Node): Expr {
    const name = node.getText();
    if (name == 'undefined') {
      return { code: 'null', prec: Prec.primary };
    }
    const declaration = resolve(node)[0];
    if (declaration === undefined) {
      return fail(node, 'Unresolved identifier');
    }
    if (
      Node.isVariableDeclaration(declaration) &&
      Node.isSourceFile(declaration.getVariableStatement()?.getParent())
    ) {
      // a module level constant
      const container = this.containerOf(declaration);
      const constant = javaConstantName(name);
      return {
        code:
          container.name == this.javaClass
            ? constant
            : `${this.reference(node, container.name, container.pkg)}.${constant}`,
        prec: Prec.primary,
      };
    }
    if (
      Node.isClassDeclaration(declaration) ||
      Node.isEnumDeclaration(declaration)
    ) {
      return {
        code: this.classReference(node, declaration),
        prec: Prec.primary,
      };
    }
    const local = javaLocalName(name);
    const variable = this.declarationOf(node);
    if (
      variable &&
      this.declaredType(variable) == 'Object' &&
      !this.isWritten(node)
    ) {
      const narrowed = this.narrowedType(node);
      if (narrowed) {
        return { code: `((${narrowed}) ${local})`, prec: Prec.primary };
      }
    }
    return { code: local, prec: Prec.primary };
  }

  private isWritten(node: Node): boolean {
    const parent = node.getParent();
    return (
      Node.isBinaryExpression(parent) &&
      parent.getLeft() === node &&
      parent.getOperatorToken().getText().endsWith('=') &&
      !['==', '===', '!=', '!==', '<=', '>='].includes(
        parent.getOperatorToken().getText(),
      )
    );
  }

  private template(node: TemplateExpression): Expr {
    const parts: string[] = [];
    const head = node.getHead().getLiteralText();
    if (head.length) {
      parts.push(javaString(head));
    }
    for (const span of node.getTemplateSpans()) {
      const expression = span.getExpression();
      const expr = this.expression(expression);
      parts.push(
        kindOf(expression.getType()) == 'string'
          ? wrap(expr, Prec.additive + 1)
          : `Js.toString(${expr.code})`,
      );
      const literal = span.getLiteral().getLiteralText();
      if (literal.length) {
        parts.push(javaString(literal));
      }
    }
    if (parts.length == 0) {
      return { code: '""', prec: Prec.primary };
    }
    return {
      code: parts.join(' + '),
      prec: parts.length == 1 ? Prec.primary : Prec.additive,
    };
  }

  private propertyAccess(node: PropertyAccessExpression): Expr {
    const receiver = node.getExpression();
    const name = node.getName();
    const declaration = resolve(node.getNameNode())[0];
    if (declaration && Node.isEnumMember(declaration)) {
      const enumDeclaration = declaration.getParent();
      return {
        code: `${this.classReference(node, enumDeclaration)}.${javaConstantName(name)}`,
        prec: Prec.primary,
      };
    }
    if (
      declaration &&
      Node.isPropertyDeclaration(declaration) &&
      declaration.isStatic()
    ) {
      const cls = declaration.getParent() as ClassDeclaration;
      const className = this.className(cls);
      return {
        code: `${className == this.javaClass ? className : this.classReference(node, cls)}.${javaConstantName(name)}`,
        prec: Prec.primary,
      };
    }
    if (name == 'length') {
      if (
        Node.isCallExpression(receiver) &&
        receiver.getExpression().getText() == 'Object.keys'
      ) {
        return {
          code: `${wrap(this.expression(receiver.getArguments()[0]), Prec.primary)}.size()`,
          prec: Prec.primary,
        };
      }
      const kind = kindOf(receiver.getType());
      if (kind == 'string') {
        return {
          code: `${this.receiver(receiver)}.length()`,
          prec: Prec.primary,
        };
      }
      if (kind == 'array') {
        const variable = this.declarationOf(receiver);
        const isRest =
          variable &&
          Node.isParameterDeclaration(variable) &&
          variable.isRestParameter();
        return {
          code: `${this.receiver(receiver)}${isRest ? '.length' : '.size()'}`,
          prec: Prec.primary,
        };
      }
      return fail(node, 'Unsupported length');
    }
    if (declaration && Node.isPropertyDeclaration(declaration)) {
      const field = `${this.receiver(receiver)}.${javaLocalName(name)}`;
      if (this.declaredType(declaration) == 'Object' && !this.isWritten(node)) {
        const narrowed = this.narrowedType(node);
        if (narrowed) {
          return { code: `((${narrowed}) ${field})`, prec: Prec.primary };
        }
      }
      return { code: field, prec: Prec.primary };
    }
    const kind = kindOf(receiver.getType());
    if (kind == 'record') {
      return {
        code: `${this.receiver(receiver)}.get(${javaString(name)})`,
        prec: Prec.primary,
      };
    }
    return fail(node, 'Unsupported property');
  }

  /**
   * The arguments of a call to a function, method or constructor, and whether the implementation is
   * called instead of a public overload
   */
  private callArguments(callable: Callable, args: Node[], node: Node): string {
    if (args.some((arg) => Node.isSpreadElement(arg))) {
      return fail(node, 'Spread arguments are not supported');
    }
    const codes = args.map((arg) => this.expression(arg).code);
    if (callable.overloads.length) {
      const types = args.map((arg) => this.exprType(arg));
      const applicable = callable.overloads.some((signature) => {
        const varargs =
          signature.length > 0 &&
          signature[signature.length - 1].endsWith('...');
        if (
          varargs
            ? types.length < signature.length - 1
            : types.length != signature.length
        ) {
          return false;
        }
        return types.every((type, index) => {
          const param =
            varargs && index >= signature.length - 1
              ? signature[signature.length - 1].replace('...', '')
              : signature[index];
          return assignable(type, param);
        });
      });
      if (applicable) {
        return codes.join(', ');
      }
      if (!callable.implCallable) {
        return fail(node, 'No Java overload matches the arguments');
      }
    }
    const result: string[] = [];
    callable.impl.forEach((type, index) => {
      if (type.endsWith('...')) {
        result.push(...codes.slice(index));
      } else if (index < codes.length) {
        result.push(
          type == 'Object' && this.exprType(args[index]) != 'Object'
            ? `(Object) ${codes[index]}`
            : codes[index],
        );
      } else {
        result.push(`(${type}) null`);
      }
    });
    return result.join(', ');
  }

  private lambda(node: Node, arity: number): string {
    const fn = arrowFunction(node);
    const params = fn.getParameters().map((param) => {
      if (!Node.isIdentifier(param.getNameNode())) {
        fail(param, 'Destructured parameters are not supported');
      }
      return javaLocalName(param.getName());
    });
    if (params.length > arity) {
      fail(fn, 'Too many parameters');
    }
    while (params.length < arity) {
      params.push(this.dummy('arg'));
    }
    const body = fn.getBody();
    if (Node.isBlock(body)) {
      return fail(fn, 'Callbacks must return an expression');
    }
    return `(${params.join(', ')}) -> ${this.expression(body).code}`;
  }

  private call(node: CallExpression): Expr {
    const callee = node.getExpression();
    const args = node.getArguments();
    const primary = (code: string): Expr => ({ code, prec: Prec.primary });

    if (callee.getKind() == SyntaxKind.SuperKeyword) {
      const base = this.classDecl?.getBaseClass();
      const constructor = base ? this.constructorOf(base) : undefined;
      if (constructor === undefined) {
        return primary('super()');
      }
      return primary(
        `super(${this.callArguments(this.callable(constructor), args, node)})`,
      );
    }

    if (Node.isIdentifier(callee)) {
      const declaration = resolve(callee)[0];
      if (!declaration || !Node.isFunctionDeclaration(declaration)) {
        return fail(node, 'Unsupported call');
      }
      const container = this.containerOf(declaration);
      const callable = this.callable(declaration);
      const name =
        container.name == this.javaClass
          ? callable.name
          : `${this.reference(node, container.name, container.pkg)}.${callable.name}`;
      return primary(`${name}(${this.callArguments(callable, args, node)})`);
    }

    if (!Node.isPropertyAccessExpression(callee)) {
      return fail(node, 'Unsupported call');
    }
    const receiverNode = callee.getExpression();
    const method = callee.getName();
    const text = callee.getText();
    if (text == 'Object.keys') {
      return primary(
        `new ArrayList<>(${wrap(this.expression(args[0]), Prec.primary)}.keySet())`,
      );
    }
    if (text == 'JSON.stringify' && args.length == 1) {
      return primary(`Json.stringify(${this.expression(args[0]).code})`);
    }
    if (text == 'Array.isArray') {
      return {
        code: `${wrap(this.expression(args[0]), Prec.relational)} instanceof List`,
        prec: Prec.relational,
      };
    }

    const declaration = resolve(callee.getNameNode())[0];
    if (declaration && Node.isMethodDeclaration(declaration)) {
      const callable = this.callable(declaration);
      return primary(
        `${this.receiver(receiverNode)}.${callable.name}(${this.callArguments(callable, args, node)})`,
      );
    }

    const receiver = this.receiver(receiverNode);
    const arg = (index: number) => this.expression(args[index]).code;
    const kind = kindOf(receiverNode.getType());
    const unsupported = () =>
      fail(node, `Unsupported method ${method} of ${kind}`);
    switch (kind) {
      case 'any':
        if (method == 'toString' && args.length == 0) {
          return primary(`Js.toString(${this.expression(receiverNode).code})`);
        }
        return unsupported();
      case 'string':
        switch (method) {
          case 'includes':
            return primary(`${receiver}.contains(${arg(0)})`);
          case 'startsWith':
          case 'endsWith':
          case 'indexOf':
          case 'lastIndexOf':
            if (args.length != 1) {
              return unsupported();
            }
            return primary(`${receiver}.${method}(${arg(0)})`);
          case 'substring':
            return primary(
              `Js.substring(${[this.expression(receiverNode).code, ...args.map((_, index) => arg(index))].join(', ')})`,
            );
          case 'toLowerCase':
          case 'toUpperCase':
            return primary(`${receiver}.${method}(Locale.ROOT)`);
        }
        return unsupported();
      case 'array':
        switch (method) {
          case 'push': {
            if (args.length == 1 && Node.isSpreadElement(args[0])) {
              const spread = args[0].getExpression();
              const variable = this.declarationOf(spread);
              if (
                variable &&
                Node.isParameterDeclaration(variable) &&
                variable.isRestParameter()
              ) {
                return primary(
                  `Collections.addAll(${receiver}, ${this.expression(spread).code})`,
                );
              }
              return primary(
                `${receiver}.addAll(${this.expression(spread).code})`,
              );
            }
            if (args.length != 1) {
              return unsupported();
            }
            return primary(`${receiver}.add(${arg(0)})`);
          }
          case 'indexOf':
            return primary(`${receiver}.indexOf(${arg(0)})`);
          case 'includes':
            return primary(`${receiver}.contains(${arg(0)})`);
          case 'filter':
            return primary(
              `Js.filter(${this.expression(receiverNode).code}, ${this.lambda(args[0], 2)})`,
            );
          case 'map':
            return primary(
              `Js.map(${this.expression(receiverNode).code}, ${this.lambda(args[0], 2)})`,
            );
          case 'sort':
            if (args.length) {
              return unsupported();
            }
            return primary(`Js.sort(${this.expression(receiverNode).code})`);
        }
        return unsupported();
      case 'set':
        switch (method) {
          case 'add':
            return primary(`${receiver}.add(${arg(0)})`);
          case 'has':
            return primary(`${receiver}.contains(${arg(0)})`);
        }
        return unsupported();
      case 'map':
        switch (method) {
          case 'get':
            return primary(`${receiver}.get(${arg(0)})`);
          case 'set':
            return primary(`${receiver}.put(${arg(0)}, ${arg(1)})`);
          case 'has':
            return primary(`${receiver}.containsKey(${arg(0)})`);
        }
        return unsupported();
      case 'date':
        if (method == 'toISOString') {
          return primary(
            `Js.toISOString(${this.expression(receiverNode).code})`,
          );
        }
        return unsupported();
      case 'regexp':
        if (method == 'test') {
          return primary(`${receiver}.matcher(${arg(0)}).find()`);
        }
        return unsupported();
    }
    return unsupported();
  }

  private newExpression(node: NewExpression): Expr {
    const callee = node.getExpression();
    const args = node.getArguments();
    const primary = (code: string): Expr => ({ code, prec: Prec.primary });
    switch (callee.getText()) {
      case 'Set':
        if (args.length) {
          return fail(node, 'Unsupported Set constructor');
        }
        return primary('new LinkedHashSet<>()');
      case 'Map':
        if (args.length) {
          return fail(node, 'Unsupported Map constructor');
        }
        return primary('new LinkedHashMap<>()');
      case 'RegExp':
        return primary(
          `Js.regExp(${this.expression(args[0]).code}, ${args.length > 1 ? this.expression(args[1]).code : '""'})`,
        );
    }
    const declaration = resolve(callee)[0];
    if (!declaration || !Node.isClassDeclaration(declaration)) {
      return fail(node, 'Unsupported constructor');
    }
    if (this.isGeneric(declaration)) {
      return fail(node, 'Classes with subclasses cannot be instantiated');
    }
    const name = this.classReference(node, declaration);
    const constructor = this.constructorOf(declaration);
    if (constructor === undefined) {
      if (args.length) {
        return fail(node, 'Unsupported constructor');
      }
      return primary(`new ${name}()`);
    }
    return primary(
      `new ${name}(${this.callArguments(this.callable(constructor), args, node)})`,
    );
  }

  private binary(node: BinaryExpression): Expr {
    const left = node.getLeft();
    const right = node.getRight();
    const operator = node.getOperatorToken().getText();
    const leftKind = kindOf(left.getType());
    const rightKind = kindOf(right.getType());
    const isUndefined = (side: Node) =>
      side.getKind() == SyntaxKind.NullKeyword || side.getText() == 'undefined';
    const typeofCheck = (side: Node, other: Node) =>
      Node.isTypeOfExpression(side) && Node.isStringLiteral(other);

    switch (operator) {
      case '&&':
      case '||': {
        if (kindOf(node.getType()) != 'boolean') {
          return fail(node, `${operator} is supported only for booleans`);
        }
        const prec = operator == '&&' ? Prec.and : Prec.or;
        return {
          code: `${wrap(this.condition(left), prec)} ${operator} ${wrap(this.condition(right), prec + 1)}`,
          prec,
        };
      }
      case '??': {
        const fallback = this.expression(right);
        if (
          Node.isElementAccessExpression(left) &&
          ['record', 'map'].includes(kindOf(left.getExpression().getType()))
        ) {
          return {
            code: `${this.receiver(left.getExpression())}.getOrDefault(${this.expression(left.getArgumentExpressionOrThrow()).code}, ${fallback.code})`,
            prec: Prec.primary,
          };
        }
        if (
          Node.isCallExpression(left) &&
          Node.isPropertyAccessExpression(left.getExpression()) &&
          (left.getExpression() as PropertyAccessExpression).getName() ==
            'get' &&
          kindOf(
            (left.getExpression() as PropertyAccessExpression)
              .getExpression()
              .getType(),
          ) == 'map'
        ) {
          const receiver = (
            left.getExpression() as PropertyAccessExpression
          ).getExpression();
          return {
            code: `${this.receiver(receiver)}.getOrDefault(${this.expression(left.getArguments()[0]).code}, ${fallback.code})`,
            prec: Prec.primary,
          };
        }
        if (!isPure(left)) {
          return fail(node, 'The left side of ?? must be a variable');
        }
        const value = this.expression(left);
        return {
          code: `${wrap(value, Prec.equality + 1)} != null ? ${wrap(value, Prec.or)} : ${wrap(fallback, Prec.conditional)}`,
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
          const operand = (typeOf as TypeOfExpression).getExpression();
          const type = literal.getText().slice(1, -1);
          if (type == 'undefined') {
            return {
              code: `${wrap(this.expression(operand), Prec.relational)} ${negate ? '!=' : '=='} null`,
              prec: Prec.equality,
            };
          }
          const classes: Record<string, string> = {
            string: 'String',
            number: 'Number',
            boolean: 'Boolean',
          };
          const cls = classes[type];
          if (cls === undefined) {
            return fail(node, 'Unsupported typeof check');
          }
          const check = `${wrap(this.expression(operand), Prec.relational)} instanceof ${cls}`;
          return negate
            ? { code: `!(${check})`, prec: Prec.unary }
            : { code: check, prec: Prec.relational };
        }
        if (isUndefined(left) || isUndefined(right)) {
          const value = isUndefined(left) ? right : left;
          return {
            code: `${wrap(this.expression(value), Prec.relational)} ${negate ? '!=' : '=='} null`,
            prec: Prec.equality,
          };
        }
        if (leftKind == 'string' && rightKind == 'string') {
          let code: string;
          if (Node.isStringLiteral(left)) {
            code = `${this.expression(left).code}.equals(${this.expression(right).code})`;
          } else if (Node.isStringLiteral(right)) {
            code = `${this.expression(right).code}.equals(${this.expression(left).code})`;
          } else {
            code = `Objects.equals(${this.expression(left).code}, ${this.expression(right).code})`;
          }
          return negate
            ? { code: `!${code}`, prec: Prec.unary }
            : { code, prec: Prec.primary };
        }
        if (
          !(leftKind == 'number' && rightKind == 'number') &&
          !(leftKind == 'boolean' && rightKind == 'boolean')
        ) {
          return fail(
            node,
            'Equality is supported for strings, numbers and booleans',
          );
        }
        let leftCode = wrap(this.expression(left), Prec.relational);
        const boxed = ['Integer', 'Boolean', 'Double', 'Number'];
        if (
          boxed.includes(this.exprType(left)) &&
          boxed.includes(this.exprType(right))
        ) {
          leftCode = `(${leftKind == 'number' ? 'int' : 'boolean'}) ${wrap(this.expression(left), Prec.unary)}`;
        }
        return {
          code: `${leftCode} ${negate ? '!=' : '=='} ${wrap(this.expression(right), Prec.relational)}`,
          prec: Prec.equality,
        };
      }
      case '<':
      case '>':
      case '<=':
      case '>=': {
        if (leftKind == 'string' && rightKind == 'string') {
          return {
            code: `${wrap(this.expression(left), Prec.primary)}.compareTo(${this.expression(right).code}) ${operator} 0`,
            prec: Prec.relational,
          };
        }
        if (leftKind != 'number' || rightKind != 'number') {
          return fail(
            node,
            'Comparisons are supported for strings and numbers',
          );
        }
        return {
          code: `${wrap(this.expression(left), Prec.relational)} ${operator} ${wrap(this.expression(right), Prec.relational + 1)}`,
          prec: Prec.relational,
        };
      }
      case '+': {
        if (leftKind == 'number' && rightKind == 'number') {
          return {
            code: `${wrap(this.expression(left), Prec.additive)} + ${wrap(this.expression(right), Prec.additive + 1)}`,
            prec: Prec.additive,
          };
        }
        if (leftKind != 'string' && rightKind != 'string') {
          return fail(node, '+ is supported for strings and numbers');
        }
        const operand = (side: Node, min: Prec) =>
          kindOf(side.getType()) == 'string'
            ? wrap(this.expression(side), min)
            : `Js.toString(${this.expression(side).code})`;
        return {
          code: `${operand(left, Prec.additive)} + ${operand(right, Prec.additive + 1)}`,
          prec: Prec.additive,
        };
      }
      case '-':
      case '*': {
        if (leftKind != 'number' || rightKind != 'number') {
          return fail(node, `${operator} is supported for numbers`);
        }
        const prec = operator == '-' ? Prec.additive : Prec.multiplicative;
        return {
          code: `${wrap(this.expression(left), prec)} ${operator} ${wrap(this.expression(right), prec + 1)}`,
          prec,
        };
      }
      case 'in': {
        if (!['record', 'map'].includes(rightKind)) {
          return fail(node, 'in is supported for records');
        }
        return {
          code: `${this.receiver(right)}.containsKey(${this.expression(left).code})`,
          prec: Prec.primary,
        };
      }
      case 'instanceof': {
        let cls: string;
        if (right.getText() == 'Date') {
          cls = 'Instant';
        } else {
          const declaration = resolve(right)[0];
          if (!declaration || !Node.isClassDeclaration(declaration)) {
            return fail(node, 'Unsupported instanceof');
          }
          cls = this.classReference(node, declaration);
        }
        return {
          code: `${wrap(this.expression(left), Prec.relational)} instanceof ${cls}`,
          prec: Prec.relational,
        };
      }
    }
    return fail(node, `Unsupported operator ${operator}`);
  }
}
