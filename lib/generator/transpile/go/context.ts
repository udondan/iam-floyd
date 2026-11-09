import {
  ClassDeclaration,
  ConstructorDeclaration,
  FunctionDeclaration,
  KindToNodeMappings,
  MethodDeclaration,
  Node,
  SourceFile,
  SyntaxKind,
} from 'ts-morph';

import { fail } from '../index';

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

export interface Param {
  /** The Go name */
  name: string;
  /** The Go type; of the elements for rest parameters */
  type: string;
  rest: boolean;
  /** Whether the value is normalized with `js.Normalize` at the start of the function */
  normalize: boolean;
}

export interface Callable {
  name: string;
  params: Param[];
  /** Whether the declaration is public: its parameters take pointers like in jsii */
  isPublic: boolean;
}

export type CallableDeclaration =
  MethodDeclaration | ConstructorDeclaration | FunctionDeclaration;

/**
 * The state of the transpiler: the Go files written so far, and the lines and declarations of the
 * current file
 */
export class Context {
  public readonly files = new Map<string, string>();
  public lines: string[] = [];
  public pkg = '';
  public classDecl?: ClassDeclaration;
  public callables = new Map<Node, Callable>();
  public declared = new Map<Node, string>();
  public readonly generics = new Map<ClassDeclaration, boolean>();
  public readonly returnTypes: string[] = [];
  private depth = 0;
  private dummies = 0;

  /** The names at package level, by package */
  private readonly packageNames = new Map<string, Map<string, Node>>();

  constructor(public readonly options: GoTranspilerOptions) {}

  /**
   * Starts a new Go file for a source file
   */
  public startFile(file: SourceFile) {
    this.pkg = this.options.packageOf(file);
    this.lines = [];
    this.depth = 0;
    this.declared = new Map();
    this.callables = new Map();
  }

  public emit(line: string) {
    this.lines.push(line.length ? `${'\t'.repeat(this.depth)}${line}` : '');
  }

  public emitLines(lines: string[]) {
    for (const line of lines) {
      this.emit(line);
    }
  }

  /**
   * An empty line between two declarations
   */
  public separate() {
    if (this.lines.length) {
      this.emit('');
    }
  }

  public indented(fn: () => void) {
    this.depth++;
    fn();
    this.depth--;
  }

  public braces(header: string, fn: () => void) {
    this.emit(`${header} {`);
    this.indented(fn);
    this.emit('}');
  }

  /**
   * A block of constants, e.g. `const (` … `)`
   */
  public constants(fn: () => void) {
    this.emit('const (');
    this.indented(fn);
    this.emit(')');
  }

  public packageOf(node: Node): string {
    return this.options.packageOf(node.getSourceFile());
  }

  /**
   * Qualifies a name at package level of another package
   */
  public qualify(node: Node, declaration: Node, name: string): string {
    const pkg = this.packageOf(declaration);
    if (pkg == this.pkg) {
      return name;
    }
    if (!/^[A-Z]/.test(name)) {
      return fail(node, `${name} is not exported to package ${this.pkg}`);
    }
    return `${pkg}.${name}`;
  }

  public declareName(node: Node, name: string) {
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

  public dummy(prefix: string): string {
    this.dummies++;
    return `${prefix}${this.dummies}`;
  }
}

/**
 * A handler for the nodes of a syntax kind, for a map of handlers by kind
 */
export function byKind<K extends SyntaxKind, R>(
  kind: K,
  handler: (ctx: Context, node: KindToNodeMappings[K]) => R,
): [SyntaxKind, (ctx: Context, node: Node) => R] {
  return [kind, (ctx, node) => handler(ctx, node.asKindOrThrow(kind))];
}

/**
 * The first result of the handlers that is not `undefined`
 */
export function firstOf<A extends unknown[], R>(
  handlers: ((...args: A) => R | undefined)[],
  ...args: A
): R | undefined {
  for (const handler of handlers) {
    const result = handler(...args);
    if (result !== undefined) {
      return result;
    }
  }
  return undefined;
}
