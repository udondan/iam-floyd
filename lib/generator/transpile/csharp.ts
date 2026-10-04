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

import { arrowFunction, fail, isServiceFile, kindOf, resolve } from './index';
import { snakeCase } from './python';

/**
 * Operator precedence of C#, from loosest to tightest
 */
const enum Prec {
  conditional = 2,
  coalesce = 3,
  or = 4,
  and = 5,
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
  'as',
  'base',
  'bool',
  'break',
  'byte',
  'case',
  'catch',
  'char',
  'checked',
  'class',
  'const',
  'continue',
  'decimal',
  'default',
  'delegate',
  'do',
  'double',
  'else',
  'enum',
  'event',
  'explicit',
  'extern',
  'false',
  'finally',
  'fixed',
  'float',
  'for',
  'foreach',
  'goto',
  'if',
  'implicit',
  'in',
  'int',
  'interface',
  'internal',
  'is',
  'lock',
  'long',
  'namespace',
  'new',
  'null',
  'object',
  'operator',
  'out',
  'override',
  'params',
  'private',
  'protected',
  'public',
  'readonly',
  'ref',
  'return',
  'sbyte',
  'sealed',
  'short',
  'sizeof',
  'stackalloc',
  'static',
  'string',
  'struct',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'uint',
  'ulong',
  'unchecked',
  'unsafe',
  'ushort',
  'using',
  'virtual',
  'void',
  'volatile',
  'while',
]);

function pascalCase(name: string): string {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

/**
 * The C# name of a method, a public or protected field and a module level function: PascalCase, as
 * in jsii, e.g. `if` → `If`, `toJSON` → `ToJSON`
 */
export function csharpMethodName(name: string): string {
  return pascalCase(name);
}

/**
 * The C# name of a variable, parameter or private field: reserved words get the prefix `@`
 */
export function csharpLocalName(name: string): string {
  return reserved.has(name) ? `@${name}` : name;
}

/**
 * The C# name of a constant, an enum member or a static property, e.g. `stringLike` → `STRING_LIKE`
 */
export function csharpConstantName(name: string): string {
  return snakeCase(name).toUpperCase();
}

/**
 * A C# string literal. Everything outside of printable ASCII is escaped, so the sources do not depend
 * on the encoding.
 */
export function csharpString(value: string): string {
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

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Text for an XML documentation comment: escaped, with the Markdown of the JSDoc (code, bold, links
 * and URLs) as XML
 */
export function xmlDocText(text: string): string {
  return escapeXml(text)
    .replace(/`([^`]+)`/g, '<c>$1</c>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(
      /\[([^\]]+)\]\(([^)\s]+)\)/g,
      (_, label: string, url: string) =>
        `<see href="${url.replace(/"/g, '%22')}">${label}</see>`,
    )
    .replace(
      /^(https?:\/\/\S+)$/,
      (_, url: string) =>
        `<see href="${url.replace(/"/g, '%22')}">${url}</see>`,
    );
}

/**
 * The lines of an XML documentation comment. The description is the summary, where blank lines
 * start a new paragraph; the tags are added as they are.
 */
export function xmlDoc(description: string[], tags: string[] = []): string[] {
  const body: string[] = [];
  let paragraph: string[] = [];
  let code = false;
  let list = false;
  const flush = () => {
    if (paragraph.length) {
      if (body.length) {
        body.push(`<para>${paragraph.join('\n')}</para>`);
      } else {
        body.push(paragraph.join('\n'));
      }
      paragraph = [];
    }
  };
  for (const line of description.map((line) => line.trimEnd())) {
    if (line.trim().startsWith('```')) {
      flush();
      body.push(code ? '</code>' : '<code>');
      code = !code;
      continue;
    }
    if (code) {
      body.push(escapeXml(line));
      continue;
    }
    const item = /^\s*[-*] (.*)$/.exec(line);
    if (list && !item) {
      body.push('</list>');
      list = false;
    }
    if (item) {
      if (!list) {
        flush();
        body.push('<list type="bullet">');
        list = true;
      }
      body.push(
        `<item><description>${xmlDocText(item[1])}</description></item>`,
      );
      continue;
    }
    if (line.trim().length == 0) {
      flush();
      continue;
    }
    paragraph.push(xmlDocText(line.trim()));
  }
  flush();
  if (list) {
    body.push('</list>');
  }
  const lines: string[] = [];
  if (body.length) {
    lines.push('<summary>', ...body.join('\n').split('\n'), '</summary>');
  }
  lines.push(...tags.flatMap((tag) => tag.split('\n')));
  return lines.map((line) => `/// ${line}`.trimEnd());
}

/**
 * A `<param>` tag of an XML documentation comment
 */
export function xmlParam(name: string, text: string): string {
  return `<param name="${name.replace(/^@/, '')}">${text}</param>`;
}

const valueTypes = ['int', 'double', 'bool', 'DateTime'];

function nullable(type: string): string {
  return valueTypes.includes(type) ? `${type}?` : type;
}

function nonNullable(type: string): string {
  return type.endsWith('?') ? type.slice(0, -1) : type;
}

/**
 * Whether a value of the C# type `from` can be passed for a parameter of the C# type `to`
 */
function assignable(from: string, to: string): boolean {
  if (
    from == to ||
    to == 'object' ||
    nonNullable(from) == nonNullable(to) ||
    (from == 'null' && !valueTypes.includes(to))
  ) {
    return true;
  }
  if (nonNullable(to) == 'double') {
    return ['int', 'int?', 'double'].includes(from);
  }
  if (to == 'IEnumerable') {
    return /^(List|IEnumerable)</.test(from) || from.endsWith('[]');
  }
  const element = /^IEnumerable<(.*)>$/.exec(to);
  if (element) {
    return [`List<${element[1]}>`, `${element[1]}[]`].includes(from);
  }
  return false;
}

interface Param {
  /** The C# name */
  name: string;
  /** The C# types the parameter accepts */
  options: string[];
  optional: boolean;
  rest: boolean;
}

/**
 * A C# signature: the types of the leading parameters. The type of a rest parameter ends with `...`.
 */
type Signature = string[];

/**
 * How a TypeScript function, method or constructor is declared in C#.
 *
 * Public methods and constructors become overloads: one per combination of the types of union
 * parameters and per number of optional parameters. If a parameter has more than one type, the
 * body is in a protected method with `object` for those parameters, which all overloads call;
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
  namespace: string;
  /** Whether the file has a class of its own, as opposed to a holder class */
  isClass: boolean;
  declaration?: ClassDeclaration;
}

export interface CSharpTranspilerOptions {
  /** The C# namespace of a source file, including the files of the services */
  namespaceOf(file: SourceFile): string;
  /** A comment at the start of each file */
  header: string;
}

/**
 * Transpiles TypeScript to C#. Each class and enum becomes a file of its own; module level
 * functions and constants go into the class of their file, or into an internal holder class named
 * after the file.
 */
export class CSharpTranspiler {
  private files = new Map<string, string>();
  private lines: string[] = [];
  private depth = 0;
  private namespaces = new Set<string>();
  private csharpClass = '';
  private classDecl?: ClassDeclaration;
  private dummies = 0;
  private callables = new Map<Node, Callable>();
  private declared = new Map<Node, string>();
  private generics = new Map<ClassDeclaration, boolean>();

  /** The public methods of the classes, by the C# name of the class */
  public readonly publicMethods = new Map<string, Set<string>>();

  constructor(private readonly options: CSharpTranspilerOptions) {}

  /**
   * Transpiles the source files. Returns the content of the C# files by their path relative to the
   * root namespace, e.g. `Statement/All.cs`.
   */
  public transpile(
    files: SourceFile[],
    rootNamespace: string,
  ): Map<string, string> {
    for (const file of files) {
      this.sourceFile(file, rootNamespace);
    }
    return this.files;
  }

  private emit(line: string) {
    this.lines.push(line.length ? `${'    '.repeat(this.depth)}${line}` : '');
  }

  private indented(fn: () => void) {
    this.depth++;
    fn();
    this.depth--;
  }

  /**
   * A block in braces on lines of their own
   */
  private braces(header: string, fn: () => void) {
    this.emit(header);
    this.emit('{');
    this.indented(fn);
    this.emit('}');
  }

  private emitLines(lines: string[]) {
    for (const line of lines) {
      this.emit(line);
    }
  }

  /**
   * Writes one C# file with the class that `fn` emits
   */
  private writeFile(
    node: Node,
    namespace: string,
    rootNamespace: string,
    name: string,
    fn: () => void,
  ) {
    const dir = namespace
      .slice(rootNamespace.length)
      .split('.')
      .filter((part) => part.length);
    const path = [...dir, `${name}.cs`].join('/');
    if (this.files.has(path)) {
      fail(node, `C# class ${namespace}.${name} is already declared`);
    }
    this.lines = [];
    this.depth = 0;
    this.namespaces = new Set();
    this.csharpClass = name;
    fn();
    const body = this.lines.join('\n');

    // the usings: the namespaces of .NET found in the code, without strings and comments, and the
    // namespaces of the classes that the code referenced
    const code = body
      .replace(/"(?:[^"\\]|\\.)*"/g, '""')
      .replace(/\/\/.*/g, '');
    const usings = new Set<string>();
    if (
      /\b(ArgumentException|DateTime|DateTimeKind|Func|StringComparison)\b/.test(
        code,
      )
    ) {
      usings.add('System');
    }
    if (/\bIEnumerable\b(?!<)/.test(code)) {
      usings.add('System.Collections');
    }
    if (/\b(List|Dictionary|HashSet|IEnumerable)</.test(code)) {
      usings.add('System.Collections.Generic');
    }
    if (/\bRegex\b/.test(code)) {
      usings.add('System.Text.RegularExpressions');
    }
    for (const referenced of this.namespaces) {
      if (referenced != namespace) {
        usings.add(referenced);
      }
    }
    const usingLines = [...usings].sort().map((using) => `using ${using};`);
    this.files.set(
      path,
      `${[
        `// ${this.options.header}`,
        ...usingLines,
        '',
        `namespace ${namespace};`,
        '',
        body,
      ].join('\n')}\n`,
    );
  }

  private sourceFile(file: SourceFile, rootNamespace: string) {
    const namespace = this.options.namespaceOf(file);
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
        this.writeFile(
          statement,
          namespace,
          rootNamespace,
          statement.getName(),
          () => this.enumDeclaration(statement),
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
      this.writeFile(
        declaration,
        namespace,
        rootNamespace,
        this.className(declaration),
        () => this.classDeclaration(declaration, members),
      );
    }
    if (classes.length == 0 && members.length) {
      const container = this.containerOf(members[0]);
      this.writeFile(
        members[0],
        namespace,
        rootNamespace,
        container.name,
        () => {
          this.braces(`internal static class ${container.name}`, () =>
            this.moduleMembers(members, container),
          );
        },
      );
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
   * The class of a module level function or constant. Holder classes are named after the file, with
   * the suffix `Module` if a member has the same name.
   */
  private containerOf(node: Node): Container {
    const file = node.getSourceFile();
    const classes = file.getClasses();
    const namespace = this.options.namespaceOf(file);
    if (classes.length == 1) {
      return {
        name: this.className(classes[0]),
        namespace,
        isClass: true,
        declaration: classes[0],
      };
    }
    if (classes.length > 1) {
      return fail(
        node,
        'Functions and constants are supported only in files with at most one class',
      );
    }
    let name = file
      .getBaseNameWithoutExtension()
      .split(/[^a-zA-Z0-9]+/)
      .map((part) => pascalCase(part))
      .join('');
    const memberNames = file
      .getFunctions()
      .map((fn) => csharpMethodName(fn.getName() ?? ''));
    if (memberNames.includes(name)) {
      name += 'Module';
    }
    return { name, namespace, isClass: false };
  }

  /**
   * The C# names of the members of the current class and its ancestors
   */
  private memberNames(): Set<string> {
    const names = new Set<string>();
    for (
      let cls: ClassDeclaration | undefined = this.classDecl;
      cls;
      cls = cls.getBaseClass()
    ) {
      for (const property of cls.getProperties()) {
        names.add(this.fieldName(property));
      }
      for (const method of cls.getMethods()) {
        names.add(csharpMethodName(method.getName()));
      }
    }
    return names;
  }

  /**
   * Refers to a class by its simple name, which adds a using for its namespace. The name is qualified
   * if a member of the current class has the same name.
   */
  private reference(name: string, namespace: string): string {
    if (this.memberNames().has(name)) {
      return `global::${namespace}.${name}`;
    }
    this.namespaces.add(namespace);
    return name;
  }

  private classReference(
    node: Node,
    declaration: ClassDeclaration | EnumDeclaration,
  ): string {
    if (Node.isClassDeclaration(declaration) && this.isGeneric(declaration)) {
      if (declaration === this.classDecl) {
        return `${this.className(declaration)}<T>`;
      }
      return fail(node, 'Classes with subclasses cannot be referenced');
    }
    const name = Node.isClassDeclaration(declaration)
      ? this.className(declaration)
      : declaration.getName();
    return this.reference(
      name,
      this.options.namespaceOf(declaration.getSourceFile()),
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
   * The C# type of `this` in the current class
   */
  private thisType(): string {
    if (this.classDecl === undefined) {
      throw new Error('Not in a class');
    }
    return this.isGeneric(this.classDecl) ? 'T' : this.csharpClass;
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
      const comment = xmlDocText((tag.getCommentText() ?? '').trim());
      if (Node.isJSDocParameterTag(tag)) {
        const name = csharpLocalName(tag.getName());
        if (params === undefined || params.includes(name)) {
          tags.push(xmlParam(name, comment));
        }
      } else if (tag.getTagName() == 'returns') {
        tags.push(`<returns>${comment}</returns>`);
      } else if (tag.getTagName() == 'see') {
        const url = (tag.getCommentText() ?? '').trim().replace(/"/g, '%22');
        tags.push(`<seealso href="${url}">${escapeXml(url)}</seealso>`);
      } else {
        fail(tag, 'Unsupported JSDoc tag');
      }
    }
    this.emitLines(
      xmlDoc(description.length ? description.split('\n') : [], tags),
    );
  }

  private enumDeclaration(declaration: EnumDeclaration) {
    const name = declaration.getName();
    this.docs(declaration);
    this.braces(`public static class ${name}`, () => {
      const names = new Set<string>();
      let first = true;
      for (const member of declaration.getMembers()) {
        const value = member.getValue();
        if (typeof value !== 'string') {
          fail(member, 'Enum members must be strings');
        }
        const constant = csharpConstantName(member.getName());
        if (names.has(constant)) {
          fail(member, `C# name ${constant} is already used`);
        }
        names.add(constant);
        if (!first) {
          this.emit('');
        }
        first = false;
        this.docs(member);
        this.emit(`public const string ${constant} = ${csharpString(value)};`);
      }
    });
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
      header += '<T>';
    }
    if (base) {
      const baseName = this.reference(
        this.className(base),
        this.options.namespaceOf(base.getSourceFile()),
      );
      header += ` : ${baseName}`;
      if (this.isGeneric(base)) {
        header += `<${generic ? 'T' : name}>`;
      }
    }
    if (generic) {
      header += ` where T : ${name}<T>`;
    }
    const methods = new Set<string>();
    for (const method of declaration.getMethods()) {
      if (method.getScope() == Scope.Public) {
        methods.add(csharpMethodName(method.getName()));
      }
    }
    this.publicMethods.set(name, methods);
    this.docs(declaration);
    this.braces(header, () => {
      this.checkMemberNames(declaration);
      let first = true;
      const separate = () => {
        if (!first) {
          this.emit('');
        }
        first = false;
      };
      for (const property of declaration.getProperties()) {
        separate();
        this.property(property);
      }
      const constructors = declaration.getConstructors();
      if (constructors.length > 1) {
        fail(constructors[1], 'Constructor overloads are not supported');
      }
      if (constructors.length) {
        this.callableDeclaration(constructors[0], separate);
      } else if (base) {
        this.inheritedConstructors(base, separate);
      }
      for (const method of declaration.getMethods()) {
        this.callableDeclaration(method, separate);
      }
      if (generic && !(base && this.isGeneric(base))) {
        separate();
        this.emitLines(xmlDoc(['The statement itself, typed as the subclass']));
        this.braces('protected T Self()', () => this.emit('return (T)this;'));
      }
      if (members.length) {
        this.moduleMembers(members, this.containerOf(members[0]), separate);
      }
    });
    this.classDecl = undefined;
  }

  /**
   * Fails when two members map to the same C# name, or a member has the name of its class
   */
  private checkMemberNames(declaration: ClassDeclaration) {
    const names = new Set<string>([this.className(declaration)]);
    const check = (node: Node, name: string) => {
      if (names.has(name)) {
        fail(node, `C# name ${name} is already used`);
      }
      names.add(name);
    };
    for (const property of declaration.getProperties()) {
      check(property, this.fieldName(property));
    }
    const methods = new Set<string>();
    for (const method of declaration.getMethods()) {
      if (method.isStatic() || method.getOverloads().length) {
        fail(method, 'Static methods and overloads are not supported');
      }
      const name = csharpMethodName(method.getName());
      if (methods.has(name)) {
        fail(method, `C# name ${name} is already used`);
      }
      methods.add(name);
    }
    for (const name of methods) {
      check(declaration, name);
    }
  }

  /**
   * The C# name of a property: constants in upper case, public and protected properties in
   * PascalCase, private ones in camelCase
   */
  private fieldName(property: PropertyDeclaration): string {
    if (property.isStatic()) {
      return csharpConstantName(property.getName());
    }
    if (property.getScope() == Scope.Private) {
      return csharpLocalName(property.getName());
    }
    return pascalCase(property.getName());
  }

  private property(property: PropertyDeclaration) {
    const initializer = property.getInitializer();
    const scope = property.getScope();
    if (property.hasQuestionToken()) {
      fail(property, 'Optional properties are not supported');
    }
    this.docs(property, undefined, scope == Scope.Public);
    const type = this.declaredType(property);
    const name = this.fieldName(property);
    if (property.isStatic()) {
      if (initializer === undefined) {
        return fail(property, 'Static properties must be initialized');
      }
      const isConst = Node.isStringLiteral(initializer) && type == 'string';
      this.emit(
        `${scope} ${isConst ? 'const' : 'static readonly'} ${type} ${name} = ${this.expression(initializer).code};`,
      );
      return;
    }
    const value = initializer ? ` = ${this.expression(initializer).code};` : '';
    if (scope == Scope.Public) {
      this.emit(
        `public ${type} ${name} { get;${property.isReadonly() ? '' : ' set;'} }${value}`,
      );
      return;
    }
    const modifiers = `${scope}${property.isReadonly() ? ' readonly' : ''}`;
    this.emit(`${modifiers} ${type} ${name}${value || ';'}`);
  }

  private moduleMembers(
    members: (FunctionDeclaration | VariableStatement)[],
    container: Container,
    separate?: () => void,
  ) {
    let first = true;
    const next =
      separate ??
      (() => {
        if (!first) {
          this.emit('');
        }
        first = false;
      });
    for (const member of members) {
      if (Node.isFunctionDeclaration(member)) {
        this.callableDeclaration(member, next);
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
            ? 'public'
            : 'protected'
          : member.isExported()
            ? 'internal'
            : 'private';
        const type = this.declaredType(declaration);
        const isConst =
          (Node.isStringLiteral(initializer) && type == 'string') ||
          (Node.isNumericLiteral(initializer) && type == 'int');
        next();
        this.docs(member);
        this.emit(
          `${visibility} ${isConst ? 'const' : 'static readonly'} ${type} ${csharpConstantName(declaration.getName())} = ${this.expression(initializer).code};`,
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

  private paramList(callable: Callable, signature: Signature): string {
    return signature
      .map((type, index) => {
        const name = callable.params[index].name;
        return type.endsWith('...')
          ? `params ${type.replace('...', '[]')} ${name}`
          : `${type} ${name}`;
      })
      .join(', ');
  }

  /**
   * Classes without constructor get those of their base class
   */
  private inheritedConstructors(base: ClassDeclaration, separate: () => void) {
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
      const args = signature.map((type, index) => {
        const name = callable.params[index].name;
        return isImpl && type == 'object' ? `(object)${name}` : name;
      });
      separate();
      if (!isImpl) {
        this.docs(
          constructor,
          callable.params.slice(0, signature.length).map((param) => param.name),
        );
      }
      this.emit(
        `${isImpl ? 'protected' : 'public'} ${this.csharpClass}(${this.paramList(callable, signature)})`,
      );
      this.indented(() => this.emit(`: base(${args.join(', ')})`));
      this.emit('{');
      this.emit('}');
    }
  }

  /**
   * The C# types of a parameter. Public parameters accept every member of a union type, and any
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
      return [this.typeFromNode(typeNode, false)];
    }
    const parts = Node.isUnionTypeNode(typeNode)
      ? typeNode.getTypeNodes()
      : [typeNode];
    const options: string[] = [];
    for (const part of parts) {
      if (part.getKind() == SyntaxKind.UndefinedKeyword) {
        continue;
      }
      const option = this.typeFromNode(part, false, true);
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
      name = csharpMethodName(declaration.getName());
      isPublic = declaration.getScope() == Scope.Public;
    } else {
      const functionName = declaration.getName();
      if (functionName === undefined || declaration.getOverloads().length) {
        return fail(declaration, 'Unsupported function');
      }
      name = csharpMethodName(functionName);
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
        name: csharpLocalName(param.getName()),
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
      param.rest ? `${option}...` : param.optional ? nullable(option) : option;

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
              ? 'object'
              : typeOf(param, param.options[0]),
          )
        : overloads[overloads.length - 1];
      const keys = new Set<string>();
      for (const signature of collapsed ? [...overloads, impl] : overloads) {
        const key = signature.map(nonNullable).join(',');
        if (keys.has(key)) {
          fail(
            declaration,
            `Two C# overloads have the same parameters (${key})`,
          );
        }
        keys.add(key);
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
      return types.size == 1 ? [...types][0] : 'object';
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
    separate: () => void,
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
          ? 'internal static'
          : 'private static';
      returnType = ` ${this.returnType(declaration)}`;
    } else {
      modifiers = declaration.getScope() ?? 'public';
      if (Node.isMethodDeclaration(declaration)) {
        returnType = ` ${this.returnType(declaration)}`;
        if (callable.name == 'ToString') {
          if (callable.params.length || returnType != ' string') {
            fail(declaration, 'toString() must not have parameters');
          }
          modifiers += ' override';
        }
      }
    }
    const name = isConstructor ? this.csharpClass : callable.name;
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
          return `(${type.replace('...', '[]')})null`;
        }
        return type == 'object' && signature[index] != 'object'
          ? `(object)${param.name}`
          : param.name;
      });
      separate();
      this.docs(declaration, paramNames(signature));
      if (isConstructor) {
        this.emit(
          `${modifiers} ${name}(${this.paramList(callable, signature)})`,
        );
        this.indented(() => this.emit(`: this(${args.join(', ')})`));
        this.emit('{');
        this.emit('}');
      } else {
        this.braces(
          `${modifiers}${returnType} ${name}(${this.paramList(callable, signature)})`,
          () =>
            this.emit(
              `${returnType == ' void' ? '' : 'return '}${name}(${args.join(', ')});`,
            ),
        );
      }
    }

    // the implementation
    const implModifiers =
      callable.overloads.length && !callable.implIsOverload
        ? 'protected'
        : modifiers;
    separate();
    this.docs(
      declaration,
      paramNames(callable.impl),
      implModifiers.startsWith('public'),
    );
    const body = declaration.getBody();
    if (!body || !Node.isBlock(body)) {
      return fail(declaration, 'Functions must have a body');
    }
    let statements = body.getStatements();
    this.emit(
      `${implModifiers}${returnType} ${name}(${this.paramList(callable, callable.impl)})`,
    );
    if (isConstructor && this.classDecl?.getBaseClass()) {
      const first = statements.length ? statements[0] : undefined;
      const call =
        first && Node.isExpressionStatement(first)
          ? first.getExpression()
          : undefined;
      if (
        !Node.isCallExpression(call) ||
        call.getExpression().getKind() != SyntaxKind.SuperKeyword
      ) {
        return fail(declaration, 'Constructors must start with super()');
      }
      this.indented(() => this.emit(`: ${this.expression(call).code}`));
      statements = statements.slice(1);
    }
    this.emit('{');
    this.indented(() => {
      for (const statement of statements) {
        this.statement(statement);
      }
    });
    this.emit('}');
  }

  /**
   * The C# type of a type node. Public parameters take any number and any sequence; all other
   * numbers are `int`.
   */
  private typeFromNode(
    node: TypeNode,
    optional: boolean,
    isPublic = false,
  ): string {
    const result = (type: string) => (optional ? nullable(type) : type);
    switch (node.getKind()) {
      case SyntaxKind.StringKeyword:
        return 'string';
      case SyntaxKind.NumberKeyword:
        return result(isPublic ? 'double' : 'int');
      case SyntaxKind.BooleanKeyword:
        return result('bool');
      case SyntaxKind.AnyKeyword:
        return 'object';
      case SyntaxKind.VoidKeyword:
        return 'void';
      case SyntaxKind.ThisType:
        return this.thisType();
    }
    if (Node.isLiteralTypeNode(node)) {
      return this.typeFromType(node.getType(), optional, node);
    }
    if (Node.isParenthesizedTypeNode(node)) {
      return this.typeFromNode(node.getTypeNode(), optional, isPublic);
    }
    if (Node.isArrayTypeNode(node)) {
      const element = this.typeFromNode(
        node.getElementTypeNode(),
        false,
        isPublic,
      );
      if (isPublic) {
        return element == 'object' ? 'IEnumerable' : `IEnumerable<${element}>`;
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
      const isOptional = parts.length < node.getTypeNodes().length;
      const types = new Set(
        parts.map((part) =>
          this.typeFromNode(part, optional || isOptional, isPublic),
        ),
      );
      return types.size == 1 ? [...types][0] : 'object';
    }
    if (Node.isTypeReference(node)) {
      const name = node.getTypeName().getText();
      const args = node.getTypeArguments();
      switch (name) {
        case 'Record':
          return `Dictionary<string, ${this.typeFromNode(args[1], false)}>`;
        case 'Partial':
          return this.typeFromNode(args[0], optional, isPublic);
        case 'Array':
          return `List<${this.typeFromNode(args[0], false)}>`;
        case 'Set':
          return `HashSet<${this.typeFromNode(args[0], false)}>`;
        case 'Map':
          return `Dictionary<${this.typeFromNode(args[0], false)}, ${this.typeFromNode(args[1], false)}>`;
        case 'Date':
          return result('DateTime');
        case 'RegExp':
          return 'Regex';
      }
      const declaration = resolve(node.getTypeName())[0];
      if (declaration === undefined) {
        return fail(node, 'Unresolved type');
      }
      if (Node.isTypeAliasDeclaration(declaration)) {
        return this.typeFromNode(
          declaration.getTypeNodeOrThrow(),
          optional,
          isPublic,
        );
      }
      if (Node.isEnumDeclaration(declaration)) {
        return 'string';
      }
      if (Node.isClassDeclaration(declaration)) {
        return this.classReference(node, declaration);
      }
    }
    return fail(node, 'Unsupported type');
  }

  /**
   * The C# type of an inferred type
   */
  private typeFromType(type: Type, optional: boolean, node: Node): string {
    const result = (csharpType: string) =>
      optional ? nullable(csharpType) : csharpType;
    if (type.getText() == 'this') {
      return this.thisType();
    }
    if (type.isAny() || type.isUnknown()) {
      return 'object';
    }
    if (type.isVoid()) {
      return 'void';
    }
    if (type.isBoolean() || type.isBooleanLiteral()) {
      return result('bool');
    }
    if (type.isUnion()) {
      const parts = type.getUnionTypes();
      const nonNull = parts.filter(
        (part) => !part.isUndefined() && !part.isNull(),
      );
      const isOptional = nonNull.length < parts.length;
      const nonNullType = type.getNonNullableType();
      if (nonNullType.isBoolean()) {
        return optional || isOptional ? 'bool?' : 'bool';
      }
      const types = new Set(
        nonNull.map((part) =>
          this.typeFromType(part, optional || isOptional, node),
        ),
      );
      return types.size == 1 ? [...types][0] : 'object';
    }
    const kind = kindOf(type);
    switch (kind) {
      case 'string':
        return 'string';
      case 'number':
        return result('int');
      case 'array': {
        const element = type.getArrayElementType();
        if (element === undefined) {
          return fail(node, 'Unsupported array type');
        }
        return `List<${this.typeFromType(element, false, node)}>`;
      }
      case 'set':
        return `HashSet<${this.typeFromType(type.getTypeArguments()[0], false, node)}>`;
      case 'map': {
        const [key, value] = type.getTypeArguments();
        return `Dictionary<${this.typeFromType(key, false, node)}, ${this.typeFromType(value, false, node)}>`;
      }
      case 'date':
        return result('DateTime');
      case 'regexp':
        return 'Regex';
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
          return `Dictionary<string, ${this.typeFromType(index, false, node)}>`;
        }
        const properties = type.getProperties();
        if (properties.length) {
          return `Dictionary<string, ${this.typeFromType(properties[0].getTypeAtLocation(node), false, node)}>`;
        }
        return 'Dictionary<string, object>';
      }
    }
    return fail(node, `Unsupported type ${type.getText()}`);
  }

  /**
   * The C# type of a declaration: a parameter, variable or property
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
        type =
          index == 1 && !this.isForEachCallback(parent)
            ? 'int'
            : this.typeFromType(declaration.getType(), false, declaration);
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
      type = this.typeFromType(declaration.getType(), false, declaration);
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
   * The type a variable of type `object` is narrowed to at an expression, if it maps to another C#
   * type. Lists are converted with `Js.ToList`, so they are `List<object>`.
   */
  private narrowedType(node: Node): string | undefined {
    const type = this.typeFromType(node.getType(), false, node);
    if (type == 'object') {
      return undefined;
    }
    return type.startsWith('List<') ? 'List<object>' : type;
  }

  /**
   * An expression of type `object` narrowed to the type of the TypeScript expression
   */
  private narrowed(code: string, node: Node): Expr | undefined {
    const narrowed = this.narrowedType(node);
    if (narrowed === undefined) {
      return undefined;
    }
    if (narrowed == 'List<object>') {
      return { code: `Js.ToList(${code})`, prec: Prec.primary };
    }
    return { code: `((${narrowed})${code})`, prec: Prec.primary };
  }

  /**
   * The static C# type of the translation of an expression
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
      if (declared == 'object') {
        return this.narrowedType(node) ?? 'object';
      }
      return declared;
    }
    if (Node.isConditionalExpression(node)) {
      const whenTrue = this.exprType(node.getWhenTrue());
      const whenFalse = this.exprType(node.getWhenFalse());
      return whenTrue == whenFalse ? whenTrue : 'object';
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
    this.emit('{');
    this.indented(() => {
      if (Node.isBlock(node)) {
        for (const statement of node.getStatements()) {
          this.statement(statement);
        }
      } else {
        this.statement(node);
      }
    });
    this.emit('}');
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
        const name = csharpLocalName(declaration.getName());
        const type = this.declaredType(declaration);
        this.emit(
          initializer
            ? `${type} ${name} = ${this.typed(initializer, type).code};`
            : `${type} ${name};`,
        );
      }
    } else if (Node.isExpressionStatement(node)) {
      this.expressionStatement(node.getExpression());
    } else if (Node.isIfStatement(node)) {
      this.emit(`if (${this.condition(node.getExpression()).code})`);
      this.block(node.getThenStatement());
      let otherwise = node.getElseStatement();
      while (otherwise) {
        if (Node.isIfStatement(otherwise)) {
          this.emit(
            `else if (${this.condition(otherwise.getExpression()).code})`,
          );
          this.block(otherwise.getThenStatement());
          otherwise = otherwise.getElseStatement();
        } else {
          this.emit('else');
          this.block(otherwise);
          otherwise = undefined;
        }
      }
    } else if (Node.isForOfStatement(node)) {
      this.forOfStatement(node);
    } else if (Node.isForStatement(node)) {
      this.forStatement(node);
    } else if (Node.isWhileStatement(node)) {
      this.emit(`while (${this.condition(node.getExpression()).code})`);
      this.block(node.getStatement());
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
        `throw new ArgumentException(${this.expression(expression.getArguments()[0]).code});`,
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
      const valueName = csharpLocalName(value.getName());
      const valueType = this.declaredType(value);
      if (key.getName() == '_') {
        this.emit(`foreach (${valueType} ${valueName} in ${source}.Values)`);
      } else {
        const keyType = this.declaredType(key);
        this.emit(
          `foreach ((${keyType} ${csharpLocalName(key.getName())}, ${valueType} ${valueName}) in ${source})`,
        );
      }
      this.block(node.getStatement());
      return;
    }
    if (!['array', 'set'].includes(kindOf(iterable.getType()))) {
      fail(node, 'Loops are supported over arrays, sets and map entries');
    }
    const type = this.typeFromType(declaration.getType(), false, declaration);
    this.declared.set(declaration, type);
    this.emit(
      `foreach (${type} ${csharpLocalName(declaration.getName())} in ${this.expression(iterable).code})`,
    );
    this.block(node.getStatement());
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
    const init = `${this.declaredType(declaration)} ${csharpLocalName(declaration.getName())} = ${this.expression(value).code}`;
    this.emit(
      `for (${init}; ${this.condition(condition).code}; ${this.simpleStatement(incrementor)})`,
    );
    this.block(node.getStatement());
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
          `foreach (${this.declaredType(param)} ${csharpLocalName(param.getName())} in ${this.expression(callee.getExpression()).code})`,
        );
        const body = fn.getBody();
        if (Node.isBlock(body)) {
          this.block(body);
        } else {
          this.emit('{');
          this.indented(() =>
            this.emit(`${this.simpleStatement(body as Expression)};`),
          );
          this.emit('}');
        }
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
      return csharpLocalName(node.getText());
    }
    if (
      Node.isPropertyAccessExpression(node) &&
      node.getExpression().getKind() == SyntaxKind.ThisKeyword
    ) {
      const declaration = resolve(node.getNameNode())[0];
      if (!declaration || !Node.isPropertyDeclaration(declaration)) {
        return fail(node, 'Unsupported assignment target');
      }
      return `this.${this.fieldName(declaration)}`;
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
      const kind = kindOf(left.getExpression().getType());
      if (!['array', 'record', 'map'].includes(kind)) {
        return fail(node, 'Unsupported assignment');
      }
      const receiver = wrap(
        this.expression(left.getExpression()),
        Prec.primary,
      );
      const key = this.expression(left.getArgumentExpressionOrThrow()).code;
      return `${receiver}[${key}] = ${this.typed(right, this.exprType(left)).code}`;
    }
    if (
      Node.isPropertyAccessExpression(left) &&
      ['record', 'any'].includes(kindOf(left.getExpression().getType()))
    ) {
      if (operator != '=') {
        fail(node, 'Unsupported assignment');
      }
      return `${wrap(this.expression(left.getExpression()), Prec.primary)}[${csharpString(left.getName())}] = ${this.expression(right).code}`;
    }
    const target = this.target(left);
    const declaration = this.declarationOf(left);
    const type = declaration ? this.declaredType(declaration) : 'object';
    return `${target} ${operator} ${this.typed(right, type).code}`;
  }

  /**
   * An expression that is assigned to a variable of the C# type `type`. Empty arrays and objects get
   * that type, and so does `null`.
   */
  private typed(node: Node, type: string): Expr {
    if (
      (Node.isArrayLiteralExpression(node) && node.getElements().length == 0) ||
      (Node.isObjectLiteralExpression(node) && node.getProperties().length == 0)
    ) {
      if (/^(List|Dictionary|HashSet)</.test(type)) {
        return { code: `new ${type}()`, prec: Prec.primary };
      }
    }
    return this.expression(node);
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
      return this.exprType(node) == 'bool?' && !Node.isBinaryExpression(node)
        ? {
            code: `${wrap(expr, Prec.relational)} == true`,
            prec: Prec.equality,
          }
        : expr;
    }
    const expr = this.expression(node);
    if (kind == 'string') {
      return {
        code: `!string.IsNullOrEmpty(${expr.code})`,
        prec: Prec.unary,
      };
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
      return { code: csharpString(node.getLiteralValue()), prec: Prec.primary };
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
          code: this.thisType() == 'T' ? 'Self()' : 'this',
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
      const key = this.expression(node.getArgumentExpressionOrThrow()).code;
      if (kind == 'array') {
        return {
          code: `${this.receiver(receiver)}[${key}]`,
          prec: Prec.primary,
        };
      }
      if (kind == 'record' || kind == 'map') {
        return {
          code: `${this.receiver(receiver)}.GetValueOrDefault(${key})`,
          prec: Prec.primary,
        };
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
      // C# needs a common type of both branches
      const whenTrue = node.getWhenTrue();
      const whenFalse = node.getWhenFalse();
      const same = this.exprType(whenTrue) == this.exprType(whenFalse);
      const branch = (branchNode: Node, min: Prec) =>
        same
          ? wrap(this.expression(branchNode), min)
          : `(object)${wrap(this.expression(branchNode), Prec.unary)}`;
      return {
        code: `${wrap(this.condition(node.getCondition()), Prec.coalesce)} ? ${branch(whenTrue, Prec.coalesce)} : ${branch(whenFalse, Prec.conditional)}`,
        prec: Prec.conditional,
      };
    }
    if (Node.isTypeOfExpression(node)) {
      return {
        code: `Js.Typeof(${this.expression(node.getExpression()).code})`,
        prec: Prec.primary,
      };
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
      if (!type.startsWith('List<')) {
        return fail(node, 'Unsupported array literal');
      }
      if (elements.length == 0) {
        return { code: `new ${type}()`, prec: Prec.primary };
      }
      return {
        code: `new ${type} { ${elements.map((element) => this.expression(element).code).join(', ')} }`,
        prec: Prec.primary,
      };
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
      if (!type.startsWith('Dictionary<')) {
        return fail(node, 'Unsupported object literal');
      }
      return { code: `new ${type}()`, prec: Prec.primary };
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
      const constant = csharpConstantName(name);
      return {
        code:
          container.name == this.csharpClass
            ? constant
            : `${this.containerReference(node, container)}.${constant}`,
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
    const local = csharpLocalName(name);
    const variable = this.declarationOf(node);
    if (
      variable &&
      this.declaredType(variable) == 'object' &&
      !this.isWritten(node)
    ) {
      const narrowed = this.narrowed(local, node);
      if (narrowed) {
        return narrowed;
      }
    }
    return { code: local, prec: Prec.primary };
  }

  private containerReference(node: Node, container: Container): string {
    if (container.declaration) {
      return this.classReference(node, container.declaration);
    }
    return this.reference(container.name, container.namespace);
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
      parts.push(csharpString(head));
    }
    for (const span of node.getTemplateSpans()) {
      const expression = span.getExpression();
      const expr = this.expression(expression);
      parts.push(
        kindOf(expression.getType()) == 'string'
          ? wrap(expr, Prec.additive + 1)
          : `Js.ToString(${expr.code})`,
      );
      const literal = span.getLiteral().getLiteralText();
      if (literal.length) {
        parts.push(csharpString(literal));
      }
    }
    if (parts.length == 0) {
      return { code: '""', prec: Prec.primary };
    }
    // all parts are strings, so + concatenates
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
        code: `${this.classReference(node, enumDeclaration)}.${csharpConstantName(name)}`,
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
        code: `${className == this.csharpClass ? className : this.classReference(node, cls)}.${csharpConstantName(name)}`,
        prec: Prec.primary,
      };
    }
    if (name == 'length') {
      if (
        Node.isCallExpression(receiver) &&
        receiver.getExpression().getText() == 'Object.keys'
      ) {
        return {
          code: `${wrap(this.expression(receiver.getArguments()[0]), Prec.primary)}.Count`,
          prec: Prec.primary,
        };
      }
      const kind = kindOf(receiver.getType());
      if (kind == 'string') {
        return {
          code: `${this.receiver(receiver)}.Length`,
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
          code: `${this.receiver(receiver)}${isRest ? '.Length' : '.Count'}`,
          prec: Prec.primary,
        };
      }
      return fail(node, 'Unsupported length');
    }
    if (declaration && Node.isPropertyDeclaration(declaration)) {
      const field = `${this.receiver(receiver)}.${this.fieldName(declaration)}`;
      if (this.declaredType(declaration) == 'object' && !this.isWritten(node)) {
        const narrowed = this.narrowed(field, node);
        if (narrowed) {
          return narrowed;
        }
      }
      return { code: field, prec: Prec.primary };
    }
    const kind = kindOf(receiver.getType());
    if (kind == 'record') {
      return {
        code: `${this.receiver(receiver)}.GetValueOrDefault(${csharpString(name)})`,
        prec: Prec.primary,
      };
    }
    return fail(node, 'Unsupported property');
  }

  /**
   * The arguments of a call to a function, method or constructor. If no public overload matches,
   * the implementation is called.
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
        return fail(node, 'No C# overload matches the arguments');
      }
    }
    const result: string[] = [];
    callable.impl.forEach((type, index) => {
      if (type.endsWith('...')) {
        result.push(...codes.slice(index));
      } else if (index < codes.length) {
        result.push(
          type == 'object' && this.exprType(args[index]) != 'object'
            ? `(object)${wrap(this.expression(args[index]), Prec.unary)}`
            : codes[index],
        );
      } else {
        result.push(`(${type})null`);
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
      return csharpLocalName(param.getName());
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
    return `(${params.join(', ')}) => ${this.expression(body).code}`;
  }

  private call(node: CallExpression): Expr {
    const callee = node.getExpression();
    const args = node.getArguments();
    const primary = (code: string): Expr => ({ code, prec: Prec.primary });

    if (callee.getKind() == SyntaxKind.SuperKeyword) {
      const base = this.classDecl?.getBaseClass();
      const constructor = base ? this.constructorOf(base) : undefined;
      if (constructor === undefined) {
        return primary('base()');
      }
      return primary(
        `base(${this.callArguments(this.callable(constructor), args, node)})`,
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
        container.name == this.csharpClass ||
        (container.declaration !== undefined &&
          this.inherits(container.declaration))
          ? callable.name
          : `${this.containerReference(node, container)}.${callable.name}`;
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
        `new List<string>(${wrap(this.expression(args[0]), Prec.primary)}.Keys)`,
      );
    }
    if (text == 'Array.isArray') {
      return primary(`Js.IsArray(${this.expression(args[0]).code})`);
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
          return primary(`Js.ToString(${this.expression(receiverNode).code})`);
        }
        return unsupported();
      case 'string':
        switch (method) {
          case 'includes':
            return primary(`${receiver}.Contains(${arg(0)})`);
          case 'startsWith':
          case 'endsWith':
          case 'indexOf':
          case 'lastIndexOf':
            if (args.length != 1) {
              return unsupported();
            }
            return primary(
              `${receiver}.${pascalCase(method)}(${arg(0)}, StringComparison.Ordinal)`,
            );
          case 'substring':
            return primary(
              `Js.Substring(${[this.expression(receiverNode).code, ...args.map((_, index) => arg(index))].join(', ')})`,
            );
          case 'toLowerCase':
            return primary(`${receiver}.ToLowerInvariant()`);
          case 'toUpperCase':
            return primary(`${receiver}.ToUpperInvariant()`);
        }
        return unsupported();
      case 'array':
        switch (method) {
          case 'push': {
            if (args.length == 1 && Node.isSpreadElement(args[0])) {
              return primary(
                `${receiver}.AddRange(${this.expression(args[0].getExpression()).code})`,
              );
            }
            if (args.length != 1) {
              return unsupported();
            }
            return primary(`${receiver}.Add(${arg(0)})`);
          }
          case 'indexOf':
            return primary(`${receiver}.IndexOf(${arg(0)})`);
          case 'includes':
            return primary(`${receiver}.Contains(${arg(0)})`);
          case 'filter':
            return primary(
              `Js.Filter(${this.expression(receiverNode).code}, ${this.lambda(args[0], 2)})`,
            );
          case 'map':
            return primary(
              `Js.Map(${this.expression(receiverNode).code}, ${this.lambda(args[0], 2)})`,
            );
          case 'sort':
            if (args.length) {
              return unsupported();
            }
            return primary(`Js.Sort(${this.expression(receiverNode).code})`);
        }
        return unsupported();
      case 'set':
        switch (method) {
          case 'add':
            return primary(`${receiver}.Add(${arg(0)})`);
          case 'has':
            return primary(`${receiver}.Contains(${arg(0)})`);
        }
        return unsupported();
      case 'map':
        switch (method) {
          case 'get':
            return primary(`${receiver}.GetValueOrDefault(${arg(0)})`);
          case 'set':
            return primary(`${receiver}[${arg(0)}] = ${arg(1)}`);
          case 'has':
            return primary(`${receiver}.ContainsKey(${arg(0)})`);
        }
        return unsupported();
      case 'date':
        if (method == 'toISOString') {
          return primary(
            `Js.ToISOString(${this.expression(receiverNode).code})`,
          );
        }
        return unsupported();
      case 'regexp':
        if (method == 'test') {
          return primary(`${receiver}.IsMatch(${arg(0)})`);
        }
        return unsupported();
    }
    return unsupported();
  }

  /**
   * Whether the current class is or extends a class
   */
  private inherits(declaration: ClassDeclaration): boolean {
    for (
      let cls: ClassDeclaration | undefined = this.classDecl;
      cls;
      cls = cls.getBaseClass()
    ) {
      if (cls === declaration) {
        return true;
      }
    }
    return false;
  }

  private newExpression(node: NewExpression): Expr {
    const callee = node.getExpression();
    const args = node.getArguments();
    const primary = (code: string): Expr => ({ code, prec: Prec.primary });
    switch (callee.getText()) {
      case 'Set':
      case 'Map': {
        if (args.length) {
          return fail(node, `Unsupported ${callee.getText()} constructor`);
        }
        const type = this.typeFromType(node.getType(), false, node);
        return primary(`new ${type}()`);
      }
      case 'RegExp':
        return primary(
          `Js.RegExp(${this.expression(args[0]).code}, ${args.length > 1 ? this.expression(args[1]).code : '""'})`,
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
        const leftType = this.exprType(left);
        const fallback = this.typed(right, nonNullable(leftType));
        if (
          Node.isElementAccessExpression(left) &&
          ['record', 'map'].includes(kindOf(left.getExpression().getType()))
        ) {
          return {
            code: `${this.receiver(left.getExpression())}.GetValueOrDefault(${this.expression(left.getArgumentExpressionOrThrow()).code}, ${fallback.code})`,
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
            code: `${this.receiver(receiver)}.GetValueOrDefault(${this.expression(left.getArguments()[0]).code}, ${fallback.code})`,
            prec: Prec.primary,
          };
        }
        return {
          code: `${wrap(this.expression(left), Prec.coalesce + 1)} ?? ${wrap(fallback, Prec.coalesce)}`,
          prec: Prec.coalesce,
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
          let check: Expr;
          switch (type) {
            case 'string':
            case 'boolean':
              check = {
                code: `${wrap(this.expression(operand), Prec.relational)} is ${type == 'string' ? 'string' : 'bool'}`,
                prec: Prec.relational,
              };
              break;
            case 'number':
              check = {
                code: `Js.IsNumber(${this.expression(operand).code})`,
                prec: Prec.primary,
              };
              break;
            default:
              return fail(node, 'Unsupported typeof check');
          }
          return negate
            ? { code: `!(${check.code})`, prec: Prec.unary }
            : check;
        }
        if (isUndefined(left) || isUndefined(right)) {
          const value = isUndefined(left) ? right : left;
          return {
            code: `${wrap(this.expression(value), Prec.relational)} ${negate ? '!=' : '=='} null`,
            prec: Prec.equality,
          };
        }
        if (
          !(leftKind == 'string' && rightKind == 'string') &&
          !(leftKind == 'number' && rightKind == 'number') &&
          !(leftKind == 'boolean' && rightKind == 'boolean')
        ) {
          return fail(
            node,
            'Equality is supported for strings, numbers and booleans',
          );
        }
        if (
          this.exprType(left) == 'object' ||
          this.exprType(right) == 'object'
        ) {
          return fail(node, 'Equality needs known types');
        }
        return {
          code: `${wrap(this.expression(left), Prec.relational)} ${negate ? '!=' : '=='} ${wrap(this.expression(right), Prec.relational)}`,
          prec: Prec.equality,
        };
      }
      case '<':
      case '>':
      case '<=':
      case '>=': {
        if (leftKind == 'string' && rightKind == 'string') {
          return {
            code: `string.CompareOrdinal(${this.expression(left).code}, ${this.expression(right).code}) ${operator} 0`,
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
            : `Js.ToString(${this.expression(side).code})`;
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
          code: `${this.receiver(right)}.ContainsKey(${this.expression(left).code})`,
          prec: Prec.primary,
        };
      }
      case 'instanceof': {
        let cls: string;
        if (right.getText() == 'Date') {
          cls = 'DateTime';
        } else {
          const declaration = resolve(right)[0];
          if (!declaration || !Node.isClassDeclaration(declaration)) {
            return fail(node, 'Unsupported instanceof');
          }
          cls = this.classReference(node, declaration);
        }
        return {
          code: `${wrap(this.expression(left), Prec.relational)} is ${cls}`,
          prec: Prec.relational,
        };
      }
    }
    return fail(node, `Unsupported operator ${operator}`);
  }
}
