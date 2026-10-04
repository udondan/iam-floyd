import {
  ArrowFunction,
  BinaryExpression,
  BindingElement,
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

import { arrowFunction, fail, isServiceFile, kindOf, resolve } from './index';
import { snakeCase } from './python';

/**
 * Operator precedence of Go, from loosest to tightest
 */
const enum Prec {
  or = 1,
  and = 2,
  compare = 3,
  add = 4,
  mul = 5,
  unary = 6,
  primary = 7,
}

/**
 * A Go expression with its static Go type. The type `nil` is the untyped nil.
 */
interface Expr {
  code: string;
  prec: Prec;
  type: string;
}

function wrap(expr: Expr, min: Prec): string {
  return expr.prec < min ? `(${expr.code})` : expr.code;
}

function primary(code: string, type: string): Expr {
  return { code, prec: Prec.primary, type };
}

const keywords = new Set([
  'break',
  'case',
  'chan',
  'const',
  'continue',
  'default',
  'defer',
  'else',
  'fallthrough',
  'for',
  'func',
  'go',
  'goto',
  'if',
  'import',
  'interface',
  'map',
  'package',
  'range',
  'return',
  'select',
  'struct',
  'switch',
  'type',
  'var',
  // predeclared identifiers
  'any',
  'append',
  'bool',
  'byte',
  'cap',
  'clear',
  'close',
  'comparable',
  'complex',
  'copy',
  'delete',
  'error',
  'false',
  'float64',
  'imag',
  'int',
  'iota',
  'len',
  'make',
  'max',
  'min',
  'new',
  'nil',
  'panic',
  'print',
  'println',
  'real',
  'recover',
  'rune',
  'string',
  'true',
  'uint',
  // the packages that the generated code imports
  'collection',
  'errors',
  'iamfloyd',
  'js',
  'regexp',
  'statement',
  'strings',
  'sync',
  'time',
  // the receiver and the field with the statement typed as the subclass
  'this',
  'self',
]);

/**
 * The suffixes of file names that Go treats as build constraints
 */
const constrainedSuffixes = new Set([
  'test',
  'aix',
  'android',
  'darwin',
  'dragonfly',
  'freebsd',
  'hurd',
  'illumos',
  'ios',
  'js',
  'linux',
  'nacl',
  'netbsd',
  'openbsd',
  'plan9',
  'solaris',
  'wasip1',
  'windows',
  'zos',
  '386',
  'amd64',
  'amd64p32',
  'arm',
  'armbe',
  'arm64',
  'arm64be',
  'loong64',
  'mips',
  'mipsle',
  'mips64',
  'mips64le',
  'mips64p32',
  'mips64p32le',
  'ppc',
  'ppc64',
  'ppc64le',
  'riscv',
  'riscv64',
  's390',
  's390x',
  'sparc',
  'sparc64',
  'wasm',
]);

/**
 * The name of a Go file in snake_case, which must not end with a build constraint
 */
export function goFileName(name: string): string {
  const file = snakeCase(name).replace(/[^a-z0-9]+/g, '_');
  const parts = file.split('_');
  if (parts.length > 1 && constrainedSuffixes.has(parts[parts.length - 1])) {
    return `${file}_.go`;
  }
  return `${file}.go`;
}

function pascalCase(name: string): string {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

function camelCase(name: string): string {
  return `${name.charAt(0).toLowerCase()}${name.slice(1)}`;
}

/**
 * The Go name of a public method, as in jsii, e.g. `if` → `If`, `toJSON` → `ToJSON`
 */
export function goMethodName(name: string): string {
  return pascalCase(name);
}

/**
 * The Go name of a variable or parameter: keywords, predeclared identifiers and the names of the
 * imported packages get the suffix `_`
 */
export function goLocalName(name: string): string {
  return keywords.has(name) ? `${name}_` : name;
}

/**
 * The Go name of a constant, an enum member or a static property, e.g. `Operator.stringLike` →
 * `Operator_STRING_LIKE`
 */
export function goConstantName(type: string, name: string): string {
  return `${type}_${snakeCase(name).toUpperCase()}`;
}

/**
 * A Go string literal. Everything outside of printable ASCII is escaped, so the sources do not depend
 * on the encoding.
 */
export function goString(value: string): string {
  let result = '"';
  for (const char of value) {
    const code = char.codePointAt(0)!;
    if (char == '"' || char == '\\') {
      result += `\\${char}`;
    } else if (char == '\n') {
      result += '\\n';
    } else if (char == '\r') {
      result += '\\r';
    } else if (char == '\t') {
      result += '\\t';
    } else if (code >= 0xd800 && code <= 0xdfff) {
      throw new Error(`Lone surrogates are not supported: ${value}`);
    } else if (code > 0xffff) {
      result += `\\U${code.toString(16).padStart(8, '0')}`;
    } else if (code < 0x20 || code > 0x7e) {
      result += `\\u${code.toString(16).padStart(4, '0')}`;
    } else {
      result += char;
    }
  }
  return `${result}"`;
}

/**
 * The lines of a Go doc comment, from the Markdown of a JSDoc
 */
export function goDoc(lines: string[]): string[] {
  const result = lines.map((line) => line.trimEnd());
  while (result.length && result[0].trim().length == 0) {
    result.shift();
  }
  while (result.length && result[result.length - 1].trim().length == 0) {
    result.pop();
  }
  const out: string[] = [];
  let code = false;
  for (const line of result) {
    if (line.trim().startsWith('```')) {
      code = !code;
      continue;
    }
    if (code) {
      out.push(`//\t${line}`.trimEnd());
    } else {
      out.push(`// ${line.trim()}`.trimEnd());
    }
  }
  return out;
}

const pointerScalars = ['*string', '*float64', '*int', '*bool', '*time.Time'];
const scalars = ['string', 'float64', 'int', 'bool', 'time.Time'];

/**
 * Splits the type arguments of a Go type, e.g. `*js.Map[string, []int]` → `*js.Map`, `string`,
 * `[]int`
 */
function genericArgs(type: string): [string, string[]] {
  const start = type.indexOf('[', type.startsWith('[]') ? 2 : 0);
  if (start < 0 || !type.endsWith(']') || type.startsWith('[]')) {
    return [type, []];
  }
  const args: string[] = [];
  let depth = 0;
  let current = '';
  for (const char of type.slice(start + 1, -1)) {
    if (char == '[' || char == '{') {
      depth++;
    } else if (char == ']' || char == '}') {
      depth--;
    }
    if (char == ',' && depth == 0) {
      args.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  args.push(current.trim());
  return [type.slice(0, start), args];
}

function isNilable(type: string): boolean {
  return (
    type == 'nil' ||
    type == 'interface{}' ||
    type.startsWith('*') ||
    type.startsWith('[]')
  );
}

interface Param {
  /** The Go name */
  name: string;
  /** The Go type; of the elements for rest parameters */
  type: string;
  rest: boolean;
  /** Whether the value is normalized with `js.Normalize` at the start of the function */
  normalize: boolean;
}

interface Callable {
  name: string;
  params: Param[];
  /** Whether the declaration is public: its parameters take pointers like in jsii */
  isPublic: boolean;
}

export interface GoTranspilerOptions {
  /** The name of the Go package of a source file, including the files of the services */
  packageOf(file: SourceFile): string;
  /** The name of the root package, which has the path of the module */
  rootPackage: string;
  /** The path of the Go module */
  modulePath: string;
  /** The first line of each file, without `// ` */
  header: string;
}

/**
 * Transpiles TypeScript to Go. Each source file becomes a Go file. Classes become structs, which
 * embed the struct of their base class. Classes with a type parameter for the type of `this` hold
 * the statement typed as the subclass in the field `self`, and are initialized by an init
 * function. Enums and static properties become constants named `<Type>_<NAME>`.
 */
export class GoTranspiler {
  private files = new Map<string, string>();
  private lines: string[] = [];
  private depth = 0;
  private pkg = '';
  private classDecl?: ClassDeclaration;
  private callables = new Map<Node, Callable>();
  private declared = new Map<Node, string>();
  private generics = new Map<ClassDeclaration, boolean>();
  private returnTypes: string[] = [];
  private dummies = 0;

  /** The names at package level, by package */
  private packageNames = new Map<string, Map<string, Node>>();

  constructor(private readonly options: GoTranspilerOptions) {}

  /**
   * Transpiles the source files. Returns the content of the Go files by their path relative to the
   * module, e.g. `statement/all.go`.
   */
  public transpile(files: SourceFile[]): Map<string, string> {
    for (const file of files) {
      this.sourceFile(file);
    }
    return this.files;
  }

  private emit(line: string) {
    this.lines.push(line.length ? `${'\t'.repeat(this.depth)}${line}` : '');
  }

  private emitLines(lines: string[]) {
    for (const line of lines) {
      this.emit(line);
    }
  }

  private indented(fn: () => void) {
    this.depth++;
    fn();
    this.depth--;
  }

  private braces(header: string, fn: () => void) {
    this.emit(`${header} {`);
    this.indented(fn);
    this.emit('}');
  }

  private packageOf(node: Node): string {
    return this.options.packageOf(node.getSourceFile());
  }

  /**
   * Qualifies a name at package level of another package
   */
  private qualify(node: Node, declaration: Node, name: string): string {
    const pkg = this.packageOf(declaration);
    if (pkg == this.pkg) {
      return name;
    }
    if (!/^[A-Z]/.test(name)) {
      return fail(node, `${name} is not exported to package ${this.pkg}`);
    }
    return `${pkg}.${name}`;
  }

  private declareName(node: Node, name: string) {
    let names = this.packageNames.get(this.pkg);
    if (names === undefined) {
      names = new Map();
      this.packageNames.set(this.pkg, names);
    }
    if (names.has(name)) {
      fail(node, `Go name ${name} is already used in package ${this.pkg}`);
    }
    names.set(name, node);
  }

  private sourceFile(file: SourceFile) {
    this.pkg = this.options.packageOf(file);
    this.lines = [];
    this.depth = 0;
    this.declared = new Map();
    this.callables = new Map();
    const classes = file.getClasses();
    const members: (FunctionDeclaration | VariableStatement)[] = [];
    const separate = () => {
      if (this.lines.length) {
        this.emit('');
      }
    };
    for (const statement of file.getStatements()) {
      if (
        Node.isImportDeclaration(statement) ||
        Node.isExportDeclaration(statement) ||
        Node.isInterfaceDeclaration(statement) ||
        Node.isTypeAliasDeclaration(statement)
      ) {
        continue;
      }
      if (Node.isEnumDeclaration(statement)) {
        separate();
        this.enumDeclaration(statement);
      } else if (Node.isClassDeclaration(statement)) {
        separate();
        this.classDeclaration(statement);
      } else if (
        Node.isFunctionDeclaration(statement) ||
        Node.isVariableStatement(statement)
      ) {
        members.push(statement);
      } else {
        fail(statement, 'Unsupported statement at module level');
      }
    }
    for (const member of members) {
      separate();
      this.moduleMember(member);
    }
    if (this.lines.length == 0) {
      return;
    }
    const name = goFileName(
      classes.length
        ? this.className(classes[0])
        : file.getBaseNameWithoutExtension(),
    );
    const dir = this.pkg == this.options.rootPackage ? '' : `${this.pkg}/`;
    const path = `${dir}${name}`;
    if (this.files.has(path)) {
      fail(file, `Go file ${path} is already written`);
    }
    const body = this.lines.join('\n');

    // the imports: the packages found in the code, without strings and comments
    const code = body
      .replace(/"(?:[^"\\]|\\.)*"/g, '""')
      .replace(/\/\/.*/g, '');
    const imports: string[] = [];
    for (const std of ['errors', 'regexp', 'strings', 'sync', 'time']) {
      if (new RegExp(`\\b${std}\\.`).test(code)) {
        imports.push(std);
      }
    }
    const module = this.options.modulePath;
    if (/\bjs\./.test(code)) {
      imports.push(`${module}/internal/js`);
    }
    for (const pkg of ['collection', 'iamfloyd', 'statement']) {
      if (pkg != this.pkg && new RegExp(`\\b${pkg}\\.`).test(code)) {
        imports.push(
          pkg == this.options.rootPackage ? module : `${module}/${pkg}`,
        );
      }
    }
    const importLines =
      imports.length == 0
        ? []
        : [
            'import (',
            ...imports.map((path) => `\t${goString(path)}`),
            ')',
            '',
          ];
    this.files.set(
      path,
      `${[
        `// ${this.options.header}`,
        '',
        `package ${this.pkg}`,
        '',
        ...importLines,
        body,
      ].join('\n')}\n`,
    );
  }

  private className(declaration: ClassDeclaration): string {
    const name = declaration.getName();
    if (name === undefined) {
      return fail(declaration, 'Classes must have a name');
    }
    return name;
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
   * Whether a class has only static properties, which become constants
   */
  private isConstantsOnly(declaration: ClassDeclaration): boolean {
    return (
      declaration.getMethods().length == 0 &&
      declaration.getConstructors().length == 0 &&
      declaration.getBaseClass() === undefined &&
      declaration.getProperties().every((property) => property.isStatic())
    );
  }

  /**
   * The Go type of a class: a pointer to its struct
   */
  private classReference(node: Node, declaration: ClassDeclaration): string {
    if (this.isGeneric(declaration)) {
      if (declaration === this.classDecl) {
        return 'T';
      }
      return fail(node, 'Classes with subclasses cannot be referenced');
    }
    return `*${this.qualify(node, declaration, this.className(declaration))}`;
  }

  /**
   * The Go type of `this` in the current class
   */
  private thisType(): string {
    if (this.classDecl === undefined) {
      throw new Error('Not in a class');
    }
    return this.isGeneric(this.classDecl)
      ? 'T'
      : `*${this.className(this.classDecl)}`;
  }

  /**
   * The name of the function that initializes the struct of a class with subclasses, exported if a
   * subclass is in another package
   */
  private initName(declaration: ClassDeclaration): string {
    const pkg = this.options.packageOf(declaration.getSourceFile());
    const exported = declaration
      .getDerivedClasses()
      .some(
        (derived) => this.options.packageOf(derived.getSourceFile()) != pkg,
      );
    return `${exported ? 'Init' : 'init'}${this.className(declaration)}`;
  }

  private docs(node: JSDocableNode & Node) {
    const docs = node.getJsDocs();
    if (docs.length == 0) {
      return;
    }
    const doc = docs[docs.length - 1];
    const lines = (doc.getDescription() ?? '').trim().split('\n');
    for (const tag of doc.getTags()) {
      const comment = (tag.getCommentText() ?? '').trim();
      if (Node.isJSDocParameterTag(tag)) {
        if (comment.length) {
          lines.push(
            '',
            ...`${goLocalName(tag.getName())}: ${comment}`.split('\n'),
          );
        }
      } else if (tag.getTagName() == 'returns') {
        lines.push('', ...`Returns ${comment}`.split('\n'));
      } else if (tag.getTagName() == 'see') {
        lines.push('', ...`See ${comment}`.split('\n'));
      } else {
        fail(tag, 'Unsupported JSDoc tag');
      }
    }
    this.emitLines(goDoc(lines));
  }

  private enumDeclaration(declaration: EnumDeclaration) {
    const name = declaration.getName();
    this.docs(declaration);
    this.constants(() => {
      for (const member of declaration.getMembers()) {
        const value = member.getValue();
        if (typeof value !== 'string') {
          fail(member, 'Enum members must be strings');
        }
        const constant = goConstantName(name, member.getName());
        this.declareName(member, constant);
        this.docs(member);
        this.emit(`${constant} = ${goString(value)}`);
      }
    });
  }

  /**
   * A block of constants, e.g. `const (` … `)`
   */
  private constants(fn: () => void) {
    this.emit('const (');
    this.indented(fn);
    this.emit(')');
  }

  private classDeclaration(declaration: ClassDeclaration) {
    if (
      declaration.isAbstract() ||
      declaration.getTypeParameters().length ||
      declaration.getImplements().length ||
      declaration.getDecorators().length
    ) {
      fail(declaration, 'Unsupported class declaration');
    }
    const name = this.className(declaration);
    const statics = declaration
      .getProperties()
      .filter((property) => property.isStatic());
    if (this.isConstantsOnly(declaration)) {
      this.docs(declaration);
      this.constants(() => {
        for (const property of statics) {
          this.staticProperty(property, name);
        }
      });
      return;
    }

    this.classDecl = declaration;
    const generic = this.isGeneric(declaration);
    const base = declaration.getBaseClass();
    const baseGeneric = base !== undefined && this.isGeneric(base);
    const typeParams = generic ? '[T any]' : '';
    const self = generic ? `${name}[T]` : name;
    this.declareName(declaration, name);
    this.checkMemberNames(declaration);

    // the struct
    this.docs(declaration);
    this.braces(`type ${name}${typeParams} struct`, () => {
      if (base) {
        const baseName = this.qualify(declaration, base, this.className(base));
        this.emit(
          baseGeneric ? `${baseName}[${generic ? 'T' : `*${name}`}]` : baseName,
        );
      }
      if (generic && !baseGeneric) {
        this.emit('// the statement, typed as the subclass');
        this.emit('self T');
      }
      for (const property of declaration.getProperties()) {
        if (property.isStatic()) {
          continue;
        }
        if (property.hasQuestionToken()) {
          fail(property, 'Optional properties are not supported');
        }
        if (property.getScope() == Scope.Public) {
          this.docs(property);
        }
        this.emit(`${this.fieldName(property)} ${this.declaredType(property)}`);
      }
    });

    if (statics.length) {
      this.emit('');
      this.constants(() => {
        for (const property of statics) {
          this.staticProperty(property, name);
        }
      });
    }

    // the constructor
    const constructors = declaration.getConstructors();
    if (constructors.length > 1) {
      fail(constructors[1], 'Constructor overloads are not supported');
    }
    const constructor = this.constructorOf(declaration);
    const callable = constructor ? this.callable(constructor) : undefined;
    const params = callable ? this.paramList(callable) : '';
    const hasDerived = declaration.getDerivedClasses().length > 0;
    if (hasDerived) {
      const initName = this.initName(declaration);
      this.declareName(declaration, initName);
      this.emit('');
      this.emit(
        `// ${initName} initializes the fields of ${name}, for the structs that embed it`,
      );
      const selfParam = generic ? ', self T' : '';
      this.braces(
        `func ${initName}${typeParams}(this *${self}${selfParam}${params ? `, ${params}` : ''})`,
        () => this.constructorBody(declaration, generic ? 'self' : 'this'),
      );
    }
    if (!generic) {
      const newName = `New${name}`;
      this.declareName(declaration, newName);
      this.emit('');
      if (constructor) {
        this.docs(constructor);
      }
      this.braces(`func ${newName}(${params}) *${name}`, () => {
        this.emit(`this := &${name}{}`);
        if (hasDerived) {
          const args = (callable?.params ?? []).map((param) =>
            param.rest ? `${param.name}...` : param.name,
          );
          this.emit(
            `${this.initName(declaration)}(${['this', ...args].join(', ')})`,
          );
        } else {
          this.constructorBody(declaration, 'this');
        }
        this.emit('return this');
      });
    }

    // the methods
    for (const method of declaration.getMethods()) {
      this.emit('');
      this.methodDeclaration(method, self);
    }
    const toJSON = declaration
      .getMethods()
      .find(
        (method) =>
          method.getName() == 'toJSON' && method.getScope() == Scope.Public,
      );
    if (toJSON) {
      this.emit('');
      this.emit(
        '// MarshalJSON writes the JSON of ToJSON(), for encoding/json',
      );
      this.braces(`func (this *${self}) MarshalJSON() ([]byte, error)`, () =>
        this.emit('return []byte(js.Stringify(this.ToJSON())), nil'),
      );
    }
    this.classDecl = undefined;
  }

  /**
   * Fails when two members of a class map to the same Go name
   */
  private checkMemberNames(declaration: ClassDeclaration) {
    const names = new Set<string>(['self', 'MarshalJSON']);
    const base = declaration.getBaseClass();
    if (base) {
      names.add(this.className(base));
    }
    const check = (node: Node, name: string) => {
      if (names.has(name)) {
        fail(node, `Go name ${name} is already used`);
      }
      names.add(name);
    };
    for (const property of declaration.getProperties()) {
      if (!property.isStatic()) {
        check(property, this.fieldName(property));
      }
    }
    for (const method of declaration.getMethods()) {
      if (method.isStatic() || method.getOverloads().length) {
        fail(method, 'Static methods and overloads are not supported');
      }
      check(method, this.methodName(method));
    }
  }

  /**
   * The Go name of a field: public and protected fields are exported, so the services in other
   * packages can set them
   */
  private fieldName(property: PropertyDeclaration): string {
    if (property.getScope() == Scope.Private) {
      return camelCase(property.getName());
    }
    return pascalCase(property.getName());
  }

  /**
   * The Go name of a method: public methods are exported
   */
  private methodName(method: MethodDeclaration): string {
    if (method.getScope() == Scope.Public || method.getScope() === undefined) {
      return goMethodName(method.getName());
    }
    return camelCase(method.getName());
  }

  private staticProperty(property: PropertyDeclaration, className: string) {
    const initializer = property.getInitializer();
    if (initializer === undefined || !Node.isStringLiteral(initializer)) {
      return fail(property, 'Static properties must be strings');
    }
    const constant = goConstantName(className, property.getName());
    this.declareName(property, constant);
    if (property.getScope() == Scope.Public) {
      this.docs(property);
    }
    this.emit(`${constant} = ${goString(initializer.getLiteralValue())}`);
  }

  private moduleMember(member: FunctionDeclaration | VariableStatement) {
    if (Node.isFunctionDeclaration(member)) {
      const callable = this.callable(member);
      this.declareName(member, callable.name);
      this.docs(member);
      this.functionBody(
        member,
        `func ${callable.name}(${this.paramList(callable)})`,
        this.returnType(member),
      );
      return;
    }
    if (member.getDeclarationKind() != VariableDeclarationKind.Const) {
      fail(member, 'Module level variables must be constants');
    }
    for (const declaration of member.getDeclarations()) {
      const initializer = declaration.getInitializer();
      if (initializer === undefined) {
        return fail(declaration, 'Constants must be initialized');
      }
      const name = camelCase(declaration.getName());
      this.declareName(declaration, name);
      this.docs(member);
      const value = this.expression(initializer);
      this.declared.set(declaration, value.type);
      const isConst =
        Node.isStringLiteral(initializer) || Node.isNumericLiteral(initializer);
      this.emit(`${isConst ? 'const' : 'var'} ${name} = ${value.code}`);
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
   * The body of the constructor: the initialization of the base class, the field initializers and
   * the statements of the constructor
   */
  private constructorBody(declaration: ClassDeclaration, self: string) {
    const base = declaration.getBaseClass();
    const own = declaration.getConstructors()[0];
    let statements = own ? this.bodyOf(own).getStatements() : [];
    if (own) {
      this.returnTypes.push('void');
      this.normalizeParams(this.callable(own));
    }
    if (base) {
      let args: string[];
      if (own) {
        const first = statements.length ? statements[0] : undefined;
        const call =
          first && Node.isExpressionStatement(first)
            ? first.getExpression()
            : undefined;
        if (
          !Node.isCallExpression(call) ||
          call.getExpression().getKind() != SyntaxKind.SuperKeyword
        ) {
          return fail(own, 'Constructors must start with super()');
        }
        const baseConstructor = this.constructorOf(base);
        args = baseConstructor
          ? this.callArguments(
              this.callable(baseConstructor),
              call.getArguments(),
              call,
            )
          : [];
        statements = statements.slice(1);
      } else {
        const baseConstructor = this.constructorOf(base);
        args = baseConstructor
          ? this.callable(baseConstructor).params.map((param) =>
              param.rest ? `${param.name}...` : param.name,
            )
          : [];
      }
      const baseName = this.className(base);
      const field = `&this.${baseName}`;
      if (base.getDerivedClasses().length == 0) {
        fail(base, 'Unsupported base class');
      }
      const init = this.qualify(declaration, base, this.initName(base));
      const baseGeneric = this.isGeneric(base);
      this.emit(
        `${init}(${[field, ...(baseGeneric ? [self] : []), ...args].join(', ')})`,
      );
      if (this.isGeneric(declaration) && !baseGeneric) {
        this.emit('this.self = self');
      }
    } else if (this.isGeneric(declaration)) {
      this.emit('this.self = self');
    }
    for (const property of declaration.getProperties()) {
      const initializer = property.getInitializer();
      if (property.isStatic() || initializer === undefined) {
        continue;
      }
      const type = this.declaredType(property);
      this.emit(
        `this.${this.fieldName(property)} = ${this.convert(this.typed(initializer, type), type, initializer).code}`,
      );
    }
    for (const statement of statements) {
      this.statement(statement);
    }
    if (own) {
      this.returnTypes.pop();
    }
  }

  private bodyOf(
    declaration:
      MethodDeclaration | ConstructorDeclaration | FunctionDeclaration,
  ) {
    const body = declaration.getBody();
    if (!body || !Node.isBlock(body)) {
      return fail(declaration, 'Functions must have a body');
    }
    return body;
  }

  /**
   * Normalizes the parameters of type `interface{}`, so they hold the values of JavaScript
   */
  private normalizeParams(callable: Callable) {
    for (const param of callable.params) {
      if (param.normalize) {
        this.emit(`${param.name} = js.Normalize(${param.name})`);
      }
    }
  }

  private methodDeclaration(method: MethodDeclaration, self: string) {
    const callable = this.callable(method);
    const returnType = this.returnType(method);
    if (
      method.getScope() != Scope.Private &&
      method.getScope() != Scope.Protected
    ) {
      this.docs(method);
    }
    this.functionBody(
      method,
      `func (this *${self}) ${callable.name}(${this.paramList(callable)})`,
      returnType,
    );
  }

  private functionBody(
    declaration: MethodDeclaration | FunctionDeclaration,
    header: string,
    returnType: string,
  ) {
    const callable = this.callable(declaration);
    const body = this.bodyOf(declaration);
    this.returnTypes.push(returnType);
    this.braces(
      `${header}${returnType == 'void' ? '' : ` ${returnType}`}`,
      () => {
        this.normalizeParams(callable);
        for (const statement of body.getStatements()) {
          this.statement(statement);
        }
      },
    );
    this.returnTypes.pop();
  }

  private paramList(callable: Callable): string {
    return callable.params
      .map((param) =>
        param.rest
          ? `${param.name} ...${param.type}`
          : `${param.name} ${param.type}`,
      )
      .join(', ');
  }

  /**
   * The Go type of a public parameter: pointers like in jsii, and `interface{}` for unions of more
   * than one type
   */
  private publicType(node: TypeNode): string {
    const parts = (
      Node.isUnionTypeNode(node) ? node.getTypeNodes() : [node]
    ).filter((part) => part.getKind() != SyntaxKind.UndefinedKeyword);
    const types = new Set(parts.map((part) => this.publicPart(part)));
    return types.size == 1 ? [...types][0] : 'interface{}';
  }

  private publicPart(node: TypeNode): string {
    if (Node.isParenthesizedTypeNode(node)) {
      return this.publicType(node.getTypeNode());
    }
    if (Node.isArrayTypeNode(node)) {
      const element = this.publicType(node.getElementTypeNode());
      return pointerScalars.includes(element) ? `*[]${element}` : 'interface{}';
    }
    const type = this.typeFromNode(node, false);
    if (type == 'int') {
      return '*float64';
    }
    if (scalars.includes(type)) {
      return `*${type}`;
    }
    return type;
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
      name = `New${this.className(declaration.getParentOrThrow() as ClassDeclaration)}`;
      isPublic = declaration.getScope() == Scope.Public;
    } else if (Node.isMethodDeclaration(declaration)) {
      name = this.methodName(declaration);
      isPublic = declaration.getScope() == Scope.Public;
    } else {
      const functionName = declaration.getName();
      if (functionName === undefined || declaration.getOverloads().length) {
        return fail(declaration, 'Unsupported function');
      }
      name = camelCase(functionName);
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
      let typeNode = param.getTypeNode();
      if (typeNode === undefined) {
        return fail(param, 'Parameters must have a type');
      }
      const rest = param.isRestParameter();
      if (rest) {
        if (!Node.isArrayTypeNode(typeNode)) {
          return fail(param, 'Rest parameters must have an array type');
        }
        typeNode = typeNode.getElementTypeNode();
      }
      const type = isPublic
        ? this.publicType(typeNode)
        : this.typeFromNode(typeNode, param.isOptional() && !rest);
      params.push({
        name: goLocalName(param.getName()),
        type,
        rest,
        normalize: isPublic && type == 'interface{}' && !rest,
      });
    }
    const callable = { name, params, isPublic };
    this.callables.set(declaration, callable);
    return callable;
  }

  private returnType(
    declaration: MethodDeclaration | FunctionDeclaration,
  ): string {
    const typeNode = declaration.getReturnTypeNode();
    if (typeNode) {
      return this.typeFromNode(typeNode, false);
    }
    const type = declaration.getReturnType();
    if (type.isVoid()) {
      return 'void';
    }
    return this.typeFromType(type, false, declaration);
  }

  private optional(type: string, optional: boolean): string {
    return optional && scalars.includes(type) ? `*${type}` : type;
  }

  /**
   * The Go type of a type node. Numbers are `int`.
   */
  private typeFromNode(node: TypeNode, optional: boolean): string {
    switch (node.getKind()) {
      case SyntaxKind.StringKeyword:
        return this.optional('string', optional);
      case SyntaxKind.NumberKeyword:
        return this.optional('int', optional);
      case SyntaxKind.BooleanKeyword:
        return this.optional('bool', optional);
      case SyntaxKind.AnyKeyword:
        return 'interface{}';
      case SyntaxKind.VoidKeyword:
        return 'void';
      case SyntaxKind.ThisType:
        return this.thisType();
    }
    if (Node.isLiteralTypeNode(node)) {
      return this.typeFromType(node.getType(), optional, node);
    }
    if (Node.isParenthesizedTypeNode(node)) {
      return this.typeFromNode(node.getTypeNode(), optional);
    }
    if (Node.isArrayTypeNode(node)) {
      return `[]${this.typeFromNode(node.getElementTypeNode(), false)}`;
    }
    if (Node.isUnionTypeNode(node)) {
      const parts = node
        .getTypeNodes()
        .filter(
          (part) =>
            part.getKind() != SyntaxKind.UndefinedKeyword &&
            !(Node.isLiteralTypeNode(part) && part.getText() == 'null'),
        );
      const isOptional = parts.length < node.getTypeNodes().length;
      const types = new Set(
        parts.map((part) => this.typeFromNode(part, optional || isOptional)),
      );
      return types.size == 1 ? [...types][0] : 'interface{}';
    }
    if (Node.isTypeReference(node)) {
      const name = node.getTypeName().getText();
      const args = node.getTypeArguments();
      switch (name) {
        case 'Record':
          return `*js.Record[${this.typeFromNode(args[1], false)}]`;
        case 'Partial':
          return this.typeFromNode(args[0], optional);
        case 'Array':
          return `[]${this.typeFromNode(args[0], false)}`;
        case 'Set':
          return `*js.Set[${this.typeFromNode(args[0], false)}]`;
        case 'Map':
          return `*js.Map[${this.typeFromNode(args[0], false)}, ${this.typeFromNode(args[1], false)}]`;
        case 'Date':
          return this.optional('time.Time', optional);
        case 'RegExp':
          return '*regexp.Regexp';
      }
      const declaration = resolve(node.getTypeName())[0];
      if (declaration === undefined) {
        return fail(node, 'Unresolved type');
      }
      if (Node.isTypeAliasDeclaration(declaration)) {
        return this.typeFromNode(declaration.getTypeNodeOrThrow(), optional);
      }
      if (Node.isEnumDeclaration(declaration)) {
        return this.optional('string', optional);
      }
      if (Node.isClassDeclaration(declaration)) {
        return this.classReference(node, declaration);
      }
    }
    return fail(node, 'Unsupported type');
  }

  /**
   * The Go type of an inferred type
   */
  private typeFromType(type: Type, optional: boolean, node: Node): string {
    if (type.getText() == 'this') {
      return this.thisType();
    }
    if (type.isAny() || type.isUnknown()) {
      return 'interface{}';
    }
    if (type.isVoid()) {
      return 'void';
    }
    if (type.isUndefined() || type.isNull()) {
      return 'nil';
    }
    if (type.isBoolean() || type.isBooleanLiteral()) {
      return this.optional('bool', optional);
    }
    if (type.isUnion()) {
      const parts = type.getUnionTypes();
      const nonNull = parts.filter(
        (part) => !part.isUndefined() && !part.isNull(),
      );
      const isOptional = optional || nonNull.length < parts.length;
      if (type.getNonNullableType().isBoolean()) {
        return this.optional('bool', isOptional);
      }
      const types = new Set(
        nonNull.map((part) => this.typeFromType(part, isOptional, node)),
      );
      return types.size == 1 ? [...types][0] : 'interface{}';
    }
    switch (kindOf(type)) {
      case 'string':
        return this.optional('string', optional);
      case 'number':
        return this.optional('int', optional);
      case 'array': {
        const element = type.getArrayElementType();
        if (element === undefined) {
          return fail(node, 'Unsupported array type');
        }
        return `[]${this.typeFromType(element, false, node)}`;
      }
      case 'set':
        return `*js.Set[${this.typeFromType(type.getTypeArguments()[0], false, node)}]`;
      case 'map': {
        const [key, value] = type.getTypeArguments();
        return `*js.Map[${this.typeFromType(key, false, node)}, ${this.typeFromType(value, false, node)}]`;
      }
      case 'date':
        return this.optional('time.Time', optional);
      case 'regexp':
        return '*regexp.Regexp';
      case 'class': {
        const declaration = type
          .getSymbolOrThrow()
          .getDeclarations()
          .find((d) => Node.isClassDeclaration(d))!;
        return this.classReference(node, declaration);
      }
      case 'record': {
        const index = type.getStringIndexType();
        if (index) {
          return `*js.Record[${this.typeFromType(index, false, node)}]`;
        }
        const properties = type.getProperties();
        if (properties.length) {
          return `*js.Record[${this.typeFromType(properties[0].getTypeAtLocation(node), false, node)}]`;
        }
        return '*js.Record[interface{}]';
      }
    }
    return fail(node, `Unsupported type ${type.getText()}`);
  }

  /**
   * The Go type of a declaration: a parameter, variable or property
   */
  private declaredType(declaration: Node): string {
    const existing = this.declared.get(declaration);
    if (existing !== undefined) {
      return existing;
    }
    let type: string;
    if (Node.isParameterDeclaration(declaration)) {
      const parent = declaration.getParentOrThrow();
      if (
        Node.isMethodDeclaration(parent) ||
        Node.isConstructorDeclaration(parent) ||
        Node.isFunctionDeclaration(parent)
      ) {
        const param =
          this.callable(parent).params[
            parent.getParameters().indexOf(declaration)
          ];
        type = param.rest ? `[]${param.type}` : param.type;
      } else {
        return fail(declaration, 'Unsupported parameter');
      }
    } else if (Node.isPropertyDeclaration(declaration)) {
      const typeNode = declaration.getTypeNode();
      const initializer = declaration.getInitializer();
      if (typeNode) {
        type = this.typeFromNode(typeNode, false);
      } else if (initializer) {
        type = this.typeFromType(declaration.getType(), false, declaration);
      } else {
        return fail(declaration, 'Properties need a type or an initializer');
      }
    } else {
      return fail(declaration, 'Declaration used before it is declared');
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
   * A value of type `interface{}` narrowed to the type of the TypeScript expression
   */
  private narrowed(expr: Expr, node: Node): Expr {
    if (expr.type != 'interface{}' || this.isWritten(node)) {
      return expr;
    }
    const type = node.getType();
    const code = wrap(expr, Prec.primary);
    switch (kindOf(type)) {
      case 'string':
        return primary(`${code}.(string)`, 'string');
      case 'boolean':
        return primary(`${code}.(bool)`, 'bool');
      case 'number':
        return primary(`${code}.(float64)`, 'float64');
      case 'date':
        return primary(`${code}.(time.Time)`, 'time.Time');
      case 'array':
        return primary(`js.ToList(${expr.code})`, '[]interface{}');
      case 'class': {
        const declaration = type
          .getNonNullableType()
          .getSymbolOrThrow()
          .getDeclarations()
          .find((d) => Node.isClassDeclaration(d))!;
        const cls = this.classReference(node, declaration);
        return primary(`${code}.(${cls})`, cls);
      }
    }
    return expr;
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

  /**
   * The value of a pointer to a scalar
   */
  private value(expr: Expr): Expr {
    if (pointerScalars.includes(expr.type)) {
      return {
        code: `*${wrap(expr, Prec.unary)}`,
        prec: Prec.unary,
        type: expr.type.slice(1),
      };
    }
    return expr;
  }

  /**
   * Converts an expression to a Go type
   */
  private convert(expr: Expr, to: string, node: Node): Expr {
    const from = expr.type;
    if (from == to || (to == 'interface{}' && from != 'void')) {
      return expr;
    }
    if (from == 'nil') {
      if (isNilable(to)) {
        return primary('nil', to);
      }
      return fail(node, `nil cannot be converted to ${to}`);
    }
    if (to == `*${from}` && scalars.includes(from)) {
      return primary(`js.Ptr(${expr.code})`, to);
    }
    if (from == `*${to}` && scalars.includes(to)) {
      return this.value(expr);
    }
    if (from == 'interface{}') {
      if (to == '[]interface{}') {
        return primary(`js.ToList(${expr.code})`, to);
      }
      if (to == 'int') {
        return primary(`int(${wrap(expr, Prec.primary)}.(float64))`, to);
      }
      return primary(`${wrap(expr, Prec.primary)}.(${to})`, to);
    }
    if (from == 'int' && to == 'float64') {
      return primary(`float64(${expr.code})`, to);
    }
    if (from == 'int' && to == '*float64') {
      return primary(`js.Ptr(float64(${expr.code}))`, to);
    }
    if (from == 'float64' && to == 'int') {
      return primary(`int(${expr.code})`, to);
    }
    if (from.startsWith('[]') && to == `*[]*${from.slice(2)}`) {
      return primary(`js.Ptr(js.Ptrs(${expr.code}))`, to);
    }
    if (from.startsWith('*[]*') && to == `[]${from.slice(4)}`) {
      return primary(`js.Values(*${wrap(expr, Prec.unary)})`, to);
    }
    if (from.startsWith('[]*') && to == `[]${from.slice(3)}`) {
      return primary(`js.Values(${expr.code})`, to);
    }
    if (from.startsWith('[]') && to == `[]*${from.slice(2)}`) {
      return primary(`js.Ptrs(${expr.code})`, to);
    }
    return fail(node, `Cannot convert ${from} to ${to}`);
  }

  /**
   * The type of the elements of a list, and the expression to range over
   */
  private elements(expr: Expr, node: Node): [Expr, string] {
    if (expr.type.startsWith('[]')) {
      return [expr, expr.type.slice(2)];
    }
    if (expr.type.startsWith('*[]')) {
      return [
        {
          code: `*${wrap(expr, Prec.unary)}`,
          prec: Prec.unary,
          type: expr.type.slice(1),
        },
        expr.type.slice(3),
      ];
    }
    const [base, args] = genericArgs(expr.type);
    if (base == '*js.Set') {
      return [
        primary(`${wrap(expr, Prec.primary)}.Values()`, `[]${args[0]}`),
        args[0],
      ];
    }
    return fail(node, `Cannot iterate over ${expr.type}`);
  }

  /**
   * The key and value types of a record or map
   */
  private entryTypes(type: string, node: Node): [string, string] {
    const [base, args] = genericArgs(type);
    if (base == '*js.Record') {
      return ['string', args[0]];
    }
    if (base == '*js.Map') {
      return [args[0], args[1]];
    }
    return fail(node, `Not a record or map: ${type}`);
  }

  private dummy(prefix: string): string {
    this.dummies++;
    return `${prefix}${this.dummies}`;
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
        const name = goLocalName(declaration.getName());
        const typeNode = declaration.getTypeNode();
        const initializer = declaration.getInitializer();
        if (typeNode) {
          const type = this.typeFromNode(typeNode, false);
          this.declared.set(declaration, type);
          if (initializer) {
            const value = this.typed(initializer, type);
            this.emit(
              value.type == type
                ? `${name} := ${value.code}`
                : `var ${name} ${type} = ${this.convert(value, type, initializer).code}`,
            );
          } else {
            this.emit(`var ${name} ${type}`);
          }
        } else if (initializer) {
          const value = this.expression(initializer);
          if (value.type == 'nil') {
            const type = this.typeFromType(
              declaration.getType(),
              false,
              declaration,
            );
            this.declared.set(declaration, type);
            this.emit(`var ${name} ${type}`);
          } else {
            this.declared.set(declaration, value.type);
            this.emit(`${name} := ${value.code}`);
          }
        } else {
          fail(declaration, 'Variables need a type or an initializer');
        }
      }
    } else if (Node.isExpressionStatement(node)) {
      this.expressionStatement(node.getExpression());
    } else if (Node.isIfStatement(node)) {
      this.emit(`if ${this.condition(node.getExpression()).code} {`);
      this.block(node.getThenStatement());
      let otherwise = node.getElseStatement();
      while (otherwise) {
        if (Node.isIfStatement(otherwise)) {
          this.emit(
            `} else if ${this.condition(otherwise.getExpression()).code} {`,
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
      this.emit(`for ${this.condition(node.getExpression()).code} {`);
      this.block(node.getStatement());
      this.emit('}');
    } else if (Node.isReturnStatement(node)) {
      const expression = node.getExpression();
      const returnType = this.returnTypes[this.returnTypes.length - 1];
      if (expression === undefined) {
        this.emit('return');
      } else {
        this.emit(
          `return ${this.convert(this.typed(expression, returnType), returnType, expression).code}`,
        );
      }
    } else if (Node.isThrowStatement(node)) {
      const expression = node.getExpression();
      if (
        !Node.isNewExpression(expression) ||
        expression.getExpression().getText() != 'Error' ||
        expression.getArguments().length != 1
      ) {
        return fail(node, 'Only `throw new Error(message)` is supported');
      }
      const message = expression.getArguments()[0];
      this.emit(
        `panic(errors.New(${this.convert(this.expression(message), 'string', message).code}))`,
      );
    } else if (Node.isBreakStatement(node) || Node.isContinueStatement(node)) {
      if (node.getLabel()) {
        fail(node, 'Labels are not supported');
      }
      this.emit(Node.isBreakStatement(node) ? 'break' : 'continue');
    } else {
      fail(node, 'Unsupported statement');
    }
  }

  /**
   * Whether a variable is referenced in a node
   */
  private isUsed(declaration: Node, node: Node): boolean {
    return node
      .getDescendantsOfKind(SyntaxKind.Identifier)
      .some(
        (identifier) =>
          identifier.getText() == (declaration as BindingElement).getName() &&
          resolve(identifier)[0] === declaration,
      );
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
    const body = node.getStatement();
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
      const [key, value] = elements;
      const source = this.expression(iterable);
      const [keyType, valueType] = this.entryTypes(source.type, iterable);
      this.declared.set(key, keyType);
      this.declared.set(value, valueType);
      const keyUsed = key.getName() != '_' && this.isUsed(key, body);
      const valueUsed = this.isUsed(value, body);
      const receiver = wrap(source, Prec.primary);
      if (!keyUsed) {
        this.emit(
          `for _, ${valueUsed ? goLocalName(value.getName()) : '_'} := range ${receiver}.Values() {`,
        );
        this.block(body);
        this.emit('}');
        return;
      }
      const entry = this.dummy('entry');
      this.emit(`for _, ${entry} := range ${receiver}.Entries() {`);
      this.indented(() => {
        this.emit(`${goLocalName(key.getName())} := ${entry}.Key`);
        if (valueUsed) {
          this.emit(`${goLocalName(value.getName())} := ${entry}.Value`);
        }
      });
      this.block(body);
      this.emit('}');
      return;
    }
    if (!['array', 'set'].includes(kindOf(iterable.getType()))) {
      fail(node, 'Loops are supported over arrays, sets and map entries');
    }
    const [source, element] = this.elements(
      this.expression(iterable),
      iterable,
    );
    this.declared.set(declaration, element);
    this.emit(
      `for _, ${goLocalName(declaration.getName())} := range ${source.code} {`,
    );
    this.block(body);
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
    const value = this.expression(declaration.getInitializerOrThrow());
    this.declared.set(declaration, value.type);
    const init = `${goLocalName(declaration.getName())} := ${value.code}`;
    this.emit(
      `for ${init}; ${this.condition(condition).code}; ${this.simpleStatement(incrementor)} {`,
    );
    this.block(node.getStatement());
    this.emit('}');
  }

  /**
   * An assignment, increment or call
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
        return `${this.target(node.getOperand()).code}${operator == SyntaxKind.PlusPlusToken ? '++' : '--'}`;
      }
    }
    if (Node.isCallExpression(node)) {
      const callee = node.getExpression();
      if (
        Node.isPropertyAccessExpression(callee) &&
        callee.getName() == 'push' &&
        kindOf(callee.getExpression().getType()) == 'array'
      ) {
        return this.push(node, callee);
      }
      return this.expression(node).code;
    }
    return fail(node, 'Unsupported expression statement');
  }

  /**
   * `list.push(…)`: append to the variable, the field or the value in the record
   */
  private push(node: CallExpression, callee: PropertyAccessExpression): string {
    let receiver: Node = callee.getExpression();
    while (
      Node.isNonNullExpression(receiver) ||
      Node.isParenthesizedExpression(receiver)
    ) {
      receiver = receiver.getExpression();
    }
    const list = this.expression(receiver);
    const [, element] = this.elements(list, receiver);
    const args = node.getArguments().map((arg) => {
      if (Node.isSpreadElement(arg)) {
        const spread = arg.getExpression();
        return `${this.convert(this.expression(spread), list.type, spread).code}...`;
      }
      return this.convert(this.expression(arg), element, arg).code;
    });
    if (
      args.length > 1 &&
      node.getArguments().some((arg) => Node.isSpreadElement(arg))
    ) {
      return fail(node, 'Spread arguments must be the only argument of push');
    }
    const appended = `append(${[list.code, ...args].join(', ')})`;
    if (Node.isElementAccessExpression(receiver)) {
      const record = receiver.getExpression();
      if (!['record', 'map'].includes(kindOf(record.getType()))) {
        return fail(node, 'Unsupported push');
      }
      const key = this.recordKey(receiver.getArgumentExpressionOrThrow());
      return `${this.receiver(record)}.Set(${key}, ${appended})`;
    }
    return `${this.target(receiver).code} = ${appended}`;
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
        const receiver = callee.getExpression();
        const [source, element] = this.elements(
          this.expression(receiver),
          receiver,
        );
        this.declared.set(param, element);
        this.emit(
          `for _, ${goLocalName(param.getName())} := range ${source.code} {`,
        );
        const body = fn.getBody();
        if (Node.isBlock(body)) {
          this.block(body);
        } else {
          this.indented(() =>
            this.emit(this.simpleStatement(body as Expression)),
          );
        }
        this.emit('}');
        return;
      }
    }
    this.emit(this.simpleStatement(node));
  }

  /**
   * A variable or field that is assigned to
   */
  private target(node: Node): Expr {
    if (Node.isIdentifier(node)) {
      const declaration = this.declarationOf(node);
      if (declaration === undefined) {
        return fail(node, 'Unsupported assignment target');
      }
      return primary(
        goLocalName(node.getText()),
        this.declaredType(declaration),
      );
    }
    if (
      Node.isPropertyAccessExpression(node) &&
      node.getExpression().getKind() == SyntaxKind.ThisKeyword
    ) {
      const declaration = resolve(node.getNameNode())[0];
      if (!declaration || !Node.isPropertyDeclaration(declaration)) {
        return fail(node, 'Unsupported assignment target');
      }
      return primary(
        `this.${this.fieldName(declaration)}`,
        this.declaredType(declaration),
      );
    }
    return fail(node, 'Unsupported assignment target');
  }

  /**
   * The key of a record: a string
   */
  private recordKey(node: Node): string {
    return this.convert(this.expression(node), 'string', node).code;
  }

  private assignment(node: BinaryExpression, operator: string): string {
    const left = node.getLeft();
    const right = node.getRight();
    if (Node.isElementAccessExpression(left)) {
      if (operator != '=') {
        fail(node, 'Unsupported assignment');
      }
      const receiverNode = left.getExpression();
      const kind = kindOf(receiverNode.getType());
      const receiver = this.expression(receiverNode);
      const index = left.getArgumentExpressionOrThrow();
      if (kind == 'array') {
        const [, element] = this.elements(receiver, receiverNode);
        return `${wrap(receiver, Prec.primary)}[${this.convert(this.expression(index), 'int', index).code}] = ${this.convert(this.typed(right, element), element, right).code}`;
      }
      if (kind == 'record' || kind == 'map') {
        const [keyType, valueType] = this.entryTypes(
          receiver.type,
          receiverNode,
        );
        const key = this.convert(this.expression(index), keyType, index).code;
        return `${wrap(receiver, Prec.primary)}.Set(${key}, ${this.convert(this.typed(right, valueType), valueType, right).code})`;
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
      const receiverNode = left.getExpression();
      const receiver = this.expression(receiverNode);
      const [, valueType] = this.entryTypes(receiver.type, receiverNode);
      return `${wrap(receiver, Prec.primary)}.Set(${goString(left.getName())}, ${this.convert(this.typed(right, valueType), valueType, right).code})`;
    }
    const target = this.target(left);
    if (operator != '=') {
      const value = this.value(this.expression(right));
      if (!['string', 'int'].includes(target.type)) {
        return fail(node, `${operator} is supported for strings and numbers`);
      }
      return `${target.code} ${operator} ${this.convert(value, target.type, right).code}`;
    }
    return `${target.code} = ${this.convert(this.typed(right, target.type), target.type, right).code}`;
  }

  /**
   * An expression that is assigned to a variable of the Go type `type`. Empty arrays and objects get
   * that type.
   */
  private typed(node: Node, type: string): Expr {
    if (
      (Node.isArrayLiteralExpression(node) && node.getElements().length == 0) ||
      (Node.isObjectLiteralExpression(node) && node.getProperties().length == 0)
    ) {
      if (type.startsWith('[]')) {
        return primary(`${type}{}`, type);
      }
      const [base, args] = genericArgs(type);
      if (base == '*js.Record' || base == '*js.Map' || base == '*js.Set') {
        return primary(
          `${base.slice(1).replace('js.', 'js.New')}[${args.join(', ')}]()`,
          type,
        );
      }
    }
    return this.expression(node);
  }

  /**
   * An expression in a boolean context, with the truthiness of JavaScript
   */
  private condition(node: Expression): Expr {
    if (Node.isParenthesizedExpression(node)) {
      return primary(`(${this.condition(node.getExpression()).code})`, 'bool');
    }
    if (Node.isBinaryExpression(node)) {
      const operator = node.getOperatorToken().getText();
      if (operator == '&&' || operator == '||') {
        const prec = operator == '&&' ? Prec.and : Prec.or;
        return {
          code: `${wrap(this.condition(node.getLeft()), prec)} ${operator} ${wrap(this.condition(node.getRight()), prec + 1)}`,
          prec,
          type: 'bool',
        };
      }
    }
    const expr = this.expression(node);
    const compare = (code: string): Expr => ({
      code,
      prec: Prec.compare,
      type: 'bool',
    });
    switch (expr.type) {
      case 'bool':
        return expr;
      case '*bool':
        return primary(`js.Or(${expr.code}, false)`, 'bool');
      case 'string':
        return compare(`${wrap(expr, Prec.compare + 1)} != ""`);
      case '*string':
        return compare(`js.Or(${expr.code}, "") != ""`);
      case 'int':
      case 'float64':
        return compare(`${wrap(expr, Prec.compare + 1)} != 0`);
      case '*int':
      case '*float64':
        return compare(`js.Or(${expr.code}, 0) != 0`);
      case 'interface{}':
        return fail(node, 'Conditions must have a known type');
    }
    if (isNilable(expr.type)) {
      return compare(`${wrap(expr, Prec.compare + 1)} != nil`);
    }
    return fail(node, `Unsupported condition of type ${expr.type}`);
  }

  private expression(node: Node): Expr {
    if (Node.isParenthesizedExpression(node)) {
      const inner = this.expression(node.getExpression());
      return { ...inner, code: `(${inner.code})`, prec: Prec.primary };
    }
    if (Node.isNonNullExpression(node)) {
      return this.expression(node.getExpression());
    }
    if (
      Node.isStringLiteral(node) ||
      Node.isNoSubstitutionTemplateLiteral(node)
    ) {
      return primary(goString(node.getLiteralValue()), 'string');
    }
    if (Node.isNumericLiteral(node)) {
      const value = node.getLiteralValue();
      if (!Number.isInteger(value) || Math.abs(value) > 2147483647) {
        return fail(node, 'Only integers are supported');
      }
      return primary(`${value}`, 'int');
    }
    switch (node.getKind()) {
      case SyntaxKind.TrueKeyword:
        return primary('true', 'bool');
      case SyntaxKind.FalseKeyword:
        return primary('false', 'bool');
      case SyntaxKind.NullKeyword:
        return primary('nil', 'nil');
      case SyntaxKind.ThisKeyword:
        return this.thisType() == 'T'
          ? primary('this.self', 'T')
          : primary('this', this.thisType());
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
      const receiverNode = node.getExpression();
      const kind = kindOf(receiverNode.getType());
      const index = node.getArgumentExpressionOrThrow();
      const receiver = this.expression(receiverNode);
      if (kind == 'array') {
        const [list, element] = this.elements(receiver, receiverNode);
        return primary(
          `${wrap(list, Prec.primary)}[${this.convert(this.expression(index), 'int', index).code}]`,
          element,
        );
      }
      if (kind == 'record' || kind == 'map') {
        const [keyType, valueType] = this.entryTypes(
          receiver.type,
          receiverNode,
        );
        return primary(
          `${wrap(receiver, Prec.primary)}.Get(${this.convert(this.expression(index), keyType, index).code})`,
          valueType,
        );
      }
      return fail(node, 'Element access is supported on arrays and records');
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
            type: 'bool',
          };
        case SyntaxKind.MinusToken: {
          const value = this.value(this.expression(operand));
          return {
            code: `-${wrap(value, Prec.unary)}`,
            prec: Prec.unary,
            type: value.type,
          };
        }
      }
      return fail(node, 'Unsupported operator');
    }
    if (Node.isConditionalExpression(node)) {
      return this.conditional(
        node.getCondition(),
        node.getWhenTrue(),
        node.getWhenFalse(),
      );
    }
    if (Node.isTypeOfExpression(node)) {
      return primary(`js.TypeOf(${this.typeOfOperand(node)})`, 'string');
    }
    if (Node.isArrayLiteralExpression(node)) {
      const elements = node.getElements();
      if (elements.some((element) => Node.isSpreadElement(element))) {
        return fail(node, 'Spread elements are not supported');
      }
      const type = this.typeFromType(
        node.getContextualType() ?? node.getType(),
        false,
        node,
      );
      if (!type.startsWith('[]')) {
        return fail(node, 'Unsupported array literal');
      }
      const element = type.slice(2);
      return primary(
        `${type}{${elements.map((item) => this.convert(this.expression(item), element, item).code).join(', ')}}`,
        type,
      );
    }
    if (Node.isObjectLiteralExpression(node)) {
      if (node.getProperties().length) {
        return fail(node, 'Only empty object literals are supported');
      }
      const type = this.typeFromType(
        node.getContextualType() ?? node.getType(),
        false,
        node,
      );
      return this.typed(node, type);
    }
    return fail(node, 'Unsupported expression');
  }

  /**
   * The operand of typeof: not narrowed, and normalized unless it is `interface{}`
   */
  private typeOfOperand(node: TypeOfExpression): string {
    const operand = node.getExpression();
    const expr = this.raw(operand);
    return expr.type == 'interface{}'
      ? expr.code
      : `js.Normalize(${expr.code})`;
  }

  /**
   * An expression without narrowing of `interface{}`
   */
  private raw(node: Node): Expr {
    const declaration = this.declarationOf(node);
    if (declaration && Node.isIdentifier(node)) {
      return primary(
        goLocalName(node.getText()),
        this.declaredType(declaration),
      );
    }
    if (declaration && Node.isPropertyDeclaration(declaration)) {
      return primary(
        `this.${this.fieldName(declaration)}`,
        this.declaredType(declaration),
      );
    }
    return this.expression(node);
  }

  /**
   * A conditional expression: a function literal that is called, as Go has no conditional operator
   */
  private conditional(
    condition: Expression,
    whenTrue: Expression,
    whenFalse: Expression,
  ): Expr {
    // `typeof x !== 'undefined' ? x : fallback`
    if (
      Node.isBinaryExpression(condition) &&
      ['!==', '!='].includes(condition.getOperatorToken().getText()) &&
      Node.isTypeOfExpression(condition.getLeft()) &&
      condition.getRight().getText().slice(1, -1) == 'undefined' &&
      (condition.getLeft() as TypeOfExpression).getExpression().getText() ==
        whenTrue.getText()
    ) {
      return this.coalesce(whenTrue, whenFalse);
    }
    const cond = this.condition(condition);
    const a = this.expression(whenTrue);
    const b = this.expression(whenFalse);
    let type: string;
    if (a.type == b.type) {
      type = a.type;
    } else if (a.type == 'nil' && isNilable(b.type)) {
      type = b.type;
    } else if (b.type == 'nil' && isNilable(a.type)) {
      type = a.type;
    } else {
      type = 'interface{}';
    }
    return primary(
      `func() ${type} { if ${cond.code} { return ${this.convert(a, type, whenTrue).code} }; return ${this.convert(b, type, whenFalse).code} }()`,
      type,
    );
  }

  /**
   * `value ?? fallback`
   */
  private coalesce(left: Node, right: Node): Expr {
    const value = this.raw(left);
    if (value.type == 'interface{}') {
      return primary(
        `js.Coalesce(${value.code}, ${this.expression(right).code})`,
        'interface{}',
      );
    }
    if (pointerScalars.includes(value.type)) {
      const type = value.type.slice(1);
      return primary(
        `js.Or(${value.code}, ${this.convert(this.expression(right), type, right).code})`,
        type,
      );
    }
    return fail(left, `?? is not supported for ${value.type}`);
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

  private receiverType(node: Node): string {
    if (node.getKind() == SyntaxKind.ThisKeyword) {
      return this.thisType();
    }
    return this.expression(node).type;
  }

  private identifier(node: Node): Expr {
    const name = node.getText();
    if (name == 'undefined') {
      return primary('nil', 'nil');
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
      const type = this.declared.get(declaration);
      if (type === undefined) {
        return fail(node, 'Constants must be declared before they are used');
      }
      return primary(this.qualify(node, declaration, camelCase(name)), type);
    }
    const variable = this.declarationOf(node);
    if (variable === undefined) {
      return fail(node, 'Unsupported identifier');
    }
    return this.narrowed(
      primary(goLocalName(name), this.declaredType(variable)),
      node,
    );
  }

  private template(node: TemplateExpression): Expr {
    const parts: string[] = [];
    const head = node.getHead().getLiteralText();
    if (head.length) {
      parts.push(goString(head));
    }
    for (const span of node.getTemplateSpans()) {
      const expression = span.getExpression();
      const expr = this.value(this.expression(expression));
      parts.push(
        expr.type == 'string'
          ? wrap(expr, Prec.add + 1)
          : `js.ToString(${expr.code})`,
      );
      const literal = span.getLiteral().getLiteralText();
      if (literal.length) {
        parts.push(goString(literal));
      }
    }
    if (parts.length == 0) {
      return primary('""', 'string');
    }
    return {
      code: parts.join(' + '),
      prec: parts.length == 1 ? Prec.primary : Prec.add,
      type: 'string',
    };
  }

  private propertyAccess(node: PropertyAccessExpression): Expr {
    const receiverNode = node.getExpression();
    const name = node.getName();
    const declaration = resolve(node.getNameNode())[0];
    if (declaration && Node.isEnumMember(declaration)) {
      const enumDeclaration = declaration.getParent();
      return primary(
        this.qualify(
          node,
          enumDeclaration,
          goConstantName(enumDeclaration.getName(), name),
        ),
        'string',
      );
    }
    if (
      declaration &&
      Node.isPropertyDeclaration(declaration) &&
      declaration.isStatic()
    ) {
      const cls = declaration.getParent() as ClassDeclaration;
      return primary(
        this.qualify(node, cls, goConstantName(this.className(cls), name)),
        'string',
      );
    }
    if (name == 'length') {
      if (
        Node.isCallExpression(receiverNode) &&
        receiverNode.getExpression().getText() == 'Object.keys'
      ) {
        return primary(
          `${wrap(this.expression(receiverNode.getArguments()[0]), Prec.primary)}.Len()`,
          'int',
        );
      }
      const receiver = this.value(this.expression(receiverNode));
      if (receiver.type == 'string') {
        return primary(`js.Length(${receiver.code})`, 'int');
      }
      if (receiver.type.startsWith('[]') || receiver.type.startsWith('*[]')) {
        const [list] = this.elements(receiver, receiverNode);
        return primary(`len(${list.code})`, 'int');
      }
      return fail(node, 'Unsupported length');
    }
    if (declaration && Node.isPropertyDeclaration(declaration)) {
      return this.narrowed(
        primary(
          `${this.receiver(receiverNode)}.${this.fieldName(declaration)}`,
          this.declaredType(declaration),
        ),
        node,
      );
    }
    if (kindOf(receiverNode.getType()) == 'record') {
      const receiver = this.expression(receiverNode);
      const [, valueType] = this.entryTypes(receiver.type, receiverNode);
      return primary(
        `${wrap(receiver, Prec.primary)}.Get(${goString(name)})`,
        valueType,
      );
    }
    return fail(node, 'Unsupported property');
  }

  /**
   * The arguments of a call to a function, method or constructor; missing optional arguments are
   * `nil`
   */
  private callArguments(
    callable: Callable,
    args: Node[],
    node: Node,
  ): string[] {
    const result: string[] = [];
    callable.params.forEach((param, index) => {
      if (param.rest) {
        for (const arg of args.slice(index)) {
          if (Node.isSpreadElement(arg)) {
            const spread = arg.getExpression();
            result.push(
              `${this.convert(this.expression(spread), `[]${param.type}`, spread).code}...`,
            );
          } else {
            result.push(
              this.convert(this.expression(arg), param.type, arg).code,
            );
          }
        }
      } else if (index < args.length) {
        const arg = args[index];
        if (Node.isSpreadElement(arg)) {
          fail(arg, 'Spread arguments are supported only for rest parameters');
        }
        result.push(this.convert(this.expression(arg), param.type, arg).code);
      } else if (isNilable(param.type)) {
        result.push('nil');
      } else {
        fail(node, 'Missing argument');
      }
    });
    if (
      args.length > callable.params.length &&
      !callable.params.some((param) => param.rest)
    ) {
      fail(node, 'Too many arguments');
    }
    return result;
  }

  /**
   * A callback as function literal, with the parameters typed and padded to the arity
   */
  private lambda(
    node: Node,
    types: string[],
    returnBool: boolean,
  ): Expr & { returns: string } {
    const fn: ArrowFunction = arrowFunction(node);
    const params = fn
      .getParameters()
      .map((param: ParameterDeclaration, index) => {
        if (!Node.isIdentifier(param.getNameNode())) {
          fail(param, 'Destructured parameters are not supported');
        }
        this.declared.set(param, types[index]);
        return `${goLocalName(param.getName())} ${types[index]}`;
      });
    if (params.length > types.length) {
      fail(fn, 'Too many parameters');
    }
    while (params.length < types.length) {
      params.push(`_ ${types[params.length]}`);
    }
    const body = fn.getBody();
    if (Node.isBlock(body)) {
      return fail(fn, 'Callbacks must return an expression');
    }
    const result = returnBool
      ? this.condition(body as Expression)
      : this.expression(body);
    return {
      ...primary(
        `func(${params.join(', ')}) ${result.type} { return ${result.code} }`,
        `func`,
      ),
      returns: result.type,
    };
  }

  private call(node: CallExpression): Expr {
    const callee = node.getExpression();
    const args = node.getArguments();

    if (Node.isIdentifier(callee)) {
      const declaration = resolve(callee)[0];
      if (!declaration || !Node.isFunctionDeclaration(declaration)) {
        return fail(node, 'Unsupported call');
      }
      const callable = this.callable(declaration);
      const name = this.qualify(node, declaration, callable.name);
      return primary(
        `${name}(${this.callArguments(callable, args, node).join(', ')})`,
        this.returnType(declaration),
      );
    }

    if (!Node.isPropertyAccessExpression(callee)) {
      return fail(node, 'Unsupported call');
    }
    const receiverNode = callee.getExpression();
    const method = callee.getName();
    const text = callee.getText();
    if (text == 'Object.keys') {
      return primary(
        `${wrap(this.expression(args[0]), Prec.primary)}.Keys()`,
        '[]string',
      );
    }
    if (text == 'Array.isArray') {
      return primary(`js.IsArray(${this.raw(args[0]).code})`, 'bool');
    }

    const declaration = resolve(callee.getNameNode())[0];
    if (declaration && Node.isMethodDeclaration(declaration)) {
      const callable = this.callable(declaration);
      if (
        declaration.getScope() == Scope.Private ||
        declaration.getScope() == Scope.Protected
      ) {
        if (this.packageOf(declaration) != this.pkg) {
          fail(node, `${callable.name} is not exported to package ${this.pkg}`);
        }
      }
      const returnsThis =
        declaration.getReturnType().getText() == 'this' ||
        declaration.getReturnTypeNode()?.getKind() == SyntaxKind.ThisType;
      const type = returnsThis
        ? this.receiverType(receiverNode)
        : this.returnType(declaration);
      return primary(
        `${this.receiver(receiverNode)}.${callable.name}(${this.callArguments(callable, args, node).join(', ')})`,
        type,
      );
    }

    const arg = (index: number, type: string) =>
      this.convert(this.expression(args[index]), type, args[index]).code;
    const kind = kindOf(receiverNode.getType());
    const unsupported = () =>
      fail(node, `Unsupported method ${method} of ${kind}`);
    switch (kind) {
      case 'any':
        if (method == 'toString' && args.length == 0) {
          return primary(
            `js.ToString(${this.expression(receiverNode).code})`,
            'string',
          );
        }
        return unsupported();
      case 'string': {
        const value = this.value(this.expression(receiverNode)).code;
        switch (method) {
          case 'includes':
            return primary(
              `strings.Contains(${value}, ${arg(0, 'string')})`,
              'bool',
            );
          case 'startsWith':
            return primary(
              `strings.HasPrefix(${value}, ${arg(0, 'string')})`,
              'bool',
            );
          case 'endsWith':
            return primary(
              `strings.HasSuffix(${value}, ${arg(0, 'string')})`,
              'bool',
            );
          case 'indexOf':
          case 'lastIndexOf':
            if (args.length != 1) {
              return unsupported();
            }
            return primary(
              `js.${pascalCase(method)}(${value}, ${arg(0, 'string')})`,
              'int',
            );
          case 'substring':
            return primary(
              `js.Substring(${[value, ...args.map((_, index) => arg(index, 'int'))].join(', ')})`,
              'string',
            );
          case 'toLowerCase':
            return primary(`strings.ToLower(${value})`, 'string');
          case 'toUpperCase':
            return primary(`strings.ToUpper(${value})`, 'string');
        }
        return unsupported();
      }
      case 'array': {
        const receiver = this.expression(receiverNode);
        const [list, element] = this.elements(receiver, receiverNode);
        switch (method) {
          case 'indexOf':
            return primary(
              `js.IndexOfItem(${list.code}, ${arg(0, element)})`,
              'int',
            );
          case 'includes':
            return primary(
              `js.Includes(${list.code}, ${arg(0, element)})`,
              'bool',
            );
          case 'filter':
            return primary(
              `js.Filter(${list.code}, ${this.lambda(args[0], [element, 'int'], true).code})`,
              list.type,
            );
          case 'map': {
            const fn = this.lambda(args[0], [element, 'int'], false);
            return primary(
              `js.MapItems(${list.code}, ${fn.code})`,
              `[]${fn.returns}`,
            );
          }
          case 'sort':
            if (args.length || element != 'string') {
              return unsupported();
            }
            return primary(`js.Sort(${list.code})`, list.type);
        }
        return unsupported();
      }
      case 'set': {
        const receiver = this.expression(receiverNode);
        const [, setArgs] = genericArgs(receiver.type);
        switch (method) {
          case 'add':
            return primary(
              `${wrap(receiver, Prec.primary)}.Add(${arg(0, setArgs[0])})`,
              'void',
            );
          case 'has':
            return primary(
              `${wrap(receiver, Prec.primary)}.Has(${arg(0, setArgs[0])})`,
              'bool',
            );
        }
        return unsupported();
      }
      case 'map': {
        const receiver = this.expression(receiverNode);
        const [keyType, valueType] = this.entryTypes(
          receiver.type,
          receiverNode,
        );
        switch (method) {
          case 'get':
            return primary(
              `${wrap(receiver, Prec.primary)}.Get(${arg(0, keyType)})`,
              valueType,
            );
          case 'set':
            return primary(
              `${wrap(receiver, Prec.primary)}.Set(${arg(0, keyType)}, ${this.convert(this.typed(args[1], valueType), valueType, args[1]).code})`,
              'void',
            );
          case 'has':
            return primary(
              `${wrap(receiver, Prec.primary)}.Has(${arg(0, keyType)})`,
              'bool',
            );
        }
        return unsupported();
      }
      case 'date':
        if (method == 'toISOString') {
          return primary(
            `js.ToISOString(${this.convert(this.expression(receiverNode), 'time.Time', receiverNode).code})`,
            'string',
          );
        }
        return unsupported();
      case 'regexp':
        if (method == 'test') {
          return primary(
            `${this.receiver(receiverNode)}.MatchString(${arg(0, 'string')})`,
            'bool',
          );
        }
        return unsupported();
    }
    return unsupported();
  }

  private newExpression(node: NewExpression): Expr {
    const callee = node.getExpression();
    const args = node.getArguments();
    switch (callee.getText()) {
      case 'Set':
      case 'Map': {
        if (args.length) {
          return fail(node, `Unsupported ${callee.getText()} constructor`);
        }
        const type = this.typeFromType(node.getType(), false, node);
        const [base, typeArgs] = genericArgs(type);
        return primary(
          `${base.slice(1).replace('js.', 'js.New')}[${typeArgs.join(', ')}]()`,
          type,
        );
      }
      case 'RegExp':
        return primary(
          `js.RegExp(${this.convert(this.expression(args[0]), 'string', args[0]).code}, ${args.length > 1 ? this.convert(this.expression(args[1]), 'string', args[1]).code : '""'})`,
          '*regexp.Regexp',
        );
    }
    const declaration = resolve(callee)[0];
    if (!declaration || !Node.isClassDeclaration(declaration)) {
      return fail(node, 'Unsupported constructor');
    }
    if (this.isGeneric(declaration)) {
      return fail(node, 'Classes with subclasses cannot be instantiated');
    }
    const type = this.classReference(node, declaration);
    const name = this.qualify(
      node,
      declaration,
      `New${this.className(declaration)}`,
    );
    const constructor = this.constructorOf(declaration);
    if (constructor === undefined) {
      if (args.length) {
        return fail(node, 'Unsupported constructor');
      }
      return primary(`${name}()`, type);
    }
    return primary(
      `${name}(${this.callArguments(this.callable(constructor), args, node).join(', ')})`,
      type,
    );
  }

  private binary(node: BinaryExpression): Expr {
    const left = node.getLeft();
    const right = node.getRight();
    const operator = node.getOperatorToken().getText();
    const isUndefined = (side: Node) =>
      side.getKind() == SyntaxKind.NullKeyword || side.getText() == 'undefined';
    const typeofCheck = (side: Node, other: Node) =>
      Node.isTypeOfExpression(side) && Node.isStringLiteral(other);
    const compare = (code: string): Expr => ({
      code,
      prec: Prec.compare,
      type: 'bool',
    });

    switch (operator) {
      case '&&':
      case '||': {
        if (kindOf(node.getType()) != 'boolean') {
          return fail(node, `${operator} is supported only for booleans`);
        }
        return this.condition(node);
      }
      case '??': {
        if (
          Node.isElementAccessExpression(left) &&
          ['record', 'map'].includes(kindOf(left.getExpression().getType()))
        ) {
          const receiverNode = left.getExpression();
          const receiver = this.expression(receiverNode);
          const [keyType, valueType] = this.entryTypes(
            receiver.type,
            receiverNode,
          );
          const index = left.getArgumentExpressionOrThrow();
          return primary(
            `${wrap(receiver, Prec.primary)}.GetOr(${this.convert(this.expression(index), keyType, index).code}, ${this.convert(this.typed(right, valueType), valueType, right).code})`,
            valueType,
          );
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
          const receiverNode = (
            left.getExpression() as PropertyAccessExpression
          ).getExpression();
          const receiver = this.expression(receiverNode);
          const [keyType, valueType] = this.entryTypes(
            receiver.type,
            receiverNode,
          );
          const key = left.getArguments()[0];
          return primary(
            `${wrap(receiver, Prec.primary)}.GetOr(${this.convert(this.expression(key), keyType, key).code}, ${this.convert(this.typed(right, valueType), valueType, right).code})`,
            valueType,
          );
        }
        return this.coalesce(left, right);
      }
      case '==':
      case '===':
      case '!=':
      case '!==': {
        const op = operator.startsWith('!') ? '!=' : '==';
        if (typeofCheck(left, right) || typeofCheck(right, left)) {
          const [typeOf, literal] = Node.isTypeOfExpression(left)
            ? [left, right]
            : [right, left];
          const type = literal.getText().slice(1, -1);
          if (type == 'undefined') {
            const operand = this.raw(
              (typeOf as TypeOfExpression).getExpression(),
            );
            return compare(`${wrap(operand, Prec.compare + 1)} ${op} nil`);
          }
          return compare(
            `js.TypeOf(${this.typeOfOperand(typeOf as TypeOfExpression)}) ${op} ${goString(type)}`,
          );
        }
        if (isUndefined(left) || isUndefined(right)) {
          const value = this.raw(isUndefined(left) ? right : left);
          if (!isNilable(value.type)) {
            return fail(node, `${value.type} cannot be undefined`);
          }
          return compare(`${wrap(value, Prec.compare + 1)} ${op} nil`);
        }
        let a = this.value(this.expression(left));
        let b = this.value(this.expression(right));
        if (a.type == 'int' && b.type == 'float64') {
          a = this.convert(a, 'float64', left);
        } else if (a.type == 'float64' && b.type == 'int') {
          b = this.convert(b, 'float64', right);
        }
        if (
          a.type != b.type ||
          !['string', 'int', 'float64', 'bool'].includes(a.type)
        ) {
          return fail(
            node,
            'Equality is supported for strings, numbers and booleans',
          );
        }
        return compare(
          `${wrap(a, Prec.compare + 1)} ${op} ${wrap(b, Prec.compare + 1)}`,
        );
      }
      case '<':
      case '>':
      case '<=':
      case '>=': {
        let a = this.value(this.expression(left));
        let b = this.value(this.expression(right));
        if (a.type == 'string' && b.type == 'string') {
          return compare(`js.Compare(${a.code}, ${b.code}) ${operator} 0`);
        }
        if (a.type == 'int' && b.type == 'float64') {
          a = this.convert(a, 'float64', left);
        } else if (a.type == 'float64' && b.type == 'int') {
          b = this.convert(b, 'float64', right);
        }
        if (a.type != b.type || !['int', 'float64'].includes(a.type)) {
          return fail(
            node,
            'Comparisons are supported for strings and numbers',
          );
        }
        return compare(
          `${wrap(a, Prec.compare + 1)} ${operator} ${wrap(b, Prec.compare + 1)}`,
        );
      }
      case '+': {
        let a = this.value(this.expression(left));
        let b = this.value(this.expression(right));
        if (
          ['int', 'float64'].includes(a.type) &&
          ['int', 'float64'].includes(b.type)
        ) {
          if (a.type != b.type) {
            a = this.convert(a, 'float64', left);
            b = this.convert(b, 'float64', right);
          }
          return {
            code: `${wrap(a, Prec.add)} + ${wrap(b, Prec.add + 1)}`,
            prec: Prec.add,
            type: a.type,
          };
        }
        if (a.type != 'string' && b.type != 'string') {
          return fail(node, '+ is supported for strings and numbers');
        }
        const operand = (expr: Expr, min: Prec) =>
          expr.type == 'string' ? wrap(expr, min) : `js.ToString(${expr.code})`;
        return {
          code: `${operand(a, Prec.add)} + ${operand(b, Prec.add + 1)}`,
          prec: Prec.add,
          type: 'string',
        };
      }
      case '-':
      case '*': {
        let a = this.value(this.expression(left));
        let b = this.value(this.expression(right));
        if (a.type != b.type) {
          a = this.convert(a, 'float64', left);
          b = this.convert(b, 'float64', right);
        }
        if (!['int', 'float64'].includes(a.type)) {
          return fail(node, `${operator} is supported for numbers`);
        }
        const prec = operator == '-' ? Prec.add : Prec.mul;
        return {
          code: `${wrap(a, prec)} ${operator} ${wrap(b, prec + 1)}`,
          prec,
          type: a.type,
        };
      }
      case 'in': {
        if (!['record', 'map'].includes(kindOf(right.getType()))) {
          return fail(node, 'in is supported for records');
        }
        const receiver = this.expression(right);
        const [keyType] = this.entryTypes(receiver.type, right);
        return primary(
          `${wrap(receiver, Prec.primary)}.Has(${this.convert(this.expression(left), keyType, left).code})`,
          'bool',
        );
      }
      case 'instanceof': {
        if (right.getText() != 'Date') {
          return fail(node, 'instanceof is supported only for Date');
        }
        const value = this.raw(left);
        return primary(
          `js.IsDate(${value.type == 'interface{}' ? value.code : `js.Normalize(${value.code})`})`,
          'bool',
        );
      }
    }
    return fail(node, `Unsupported operator ${operator}`);
  }
}
