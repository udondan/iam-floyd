import { KindToNodeMappings, Node, SyntaxKind } from 'ts-morph';

import { fail, resolve } from '../index';

/**
 * Python precedence levels, from loosest to tightest binding
 */
export enum Prec {
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

export interface Expr {
  code: string;
  prec: Prec;
  /**
   * The negation of a membership test, `a not in b`
   */
  negated?: string;
}

export function wrap(expr: Expr, min: Prec): string {
  return expr.prec < min ? `(${expr.code})` : expr.code;
}

export function atom(code: string): Expr {
  return { code, prec: Prec.atom };
}

export function primary(code: string): Expr {
  return { code, prec: Prec.primary };
}

export function membership(element: string, container: string): Expr {
  return {
    code: `${element} in ${container}`,
    prec: Prec.comparison,
    negated: `${element} not in ${container}`,
  };
}

/**
 * Whether the node names a class of the transpiled module
 */
export function isClassReference(node: Node): boolean {
  return (
    Node.isIdentifier(node) &&
    resolve(node).some((declaration) => Node.isClassDeclaration(declaration))
  );
}

/**
 * The state of the transpilation of one Python module: its lines and the names it imports and declares
 */
export class Context {
  public readonly lines: string[] = [];
  public readonly imports = new Set<string>();
  public readonly serviceImports = new Map<string, Set<string>>();
  private depth = 0;
  private readonly names = new Map<string, string>();

  public emit(line: string) {
    this.lines.push(line.length ? `${'    '.repeat(this.depth)}${line}` : '');
  }

  public indented(fn: () => void) {
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
  public register(node: Node, name: string) {
    const location = `${node.getSourceFile().getBaseName()}:${node.getStartLineNumber()}`;
    const existing = this.names.get(name);
    if (existing !== undefined) {
      fail(node, `Python name ${name} is already used in ${existing}`);
    }
    this.names.set(name, location);
    return name;
  }
}

export type Handler<R> = (ctx: Context, node: Node) => R;

/**
 * An entry of a table of handlers by the kind of the node, which gets the node as that kind
 */
export function on<K extends SyntaxKind, R>(
  kind: K,
  fn: (ctx: Context, node: KindToNodeMappings[K]) => R,
): [SyntaxKind, Handler<R>] {
  return [kind, (ctx, node) => fn(ctx, node.asKindOrThrow(kind))];
}

/**
 * Calls the handler of the kind of the node, or fails with the message if there is none
 */
export function dispatch<R>(
  handlers: ReadonlyMap<SyntaxKind, Handler<R>>,
  ctx: Context,
  node: Node,
  message: string,
): R {
  const handle = handlers.get(node.getKind());
  return handle === undefined ? fail(node, message) : handle(ctx, node);
}
