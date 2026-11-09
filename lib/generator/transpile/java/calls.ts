import {
  CallExpression,
  Expression,
  NewExpression,
  Node,
  SyntaxKind,
} from 'ts-morph';

import { fail, resolve } from '../index';
import { callback } from '../shared';
import { builtinCall } from './builtins';
import { callable, Callable, constructorOf, Signature } from './callable';
import { containerOf, isGeneric, memberOf } from './classes';
import { Context } from './context';
import { exprType } from './declared';
import { Expr, instanceOf, Prec, primary, wrap } from './expr';
import { expression, receiver } from './expressions';
import { javaLocalName } from './names';
import { firstOf } from './nodes';
import { assignable } from './types';

/**
 * Whether a Java overload accepts arguments of the given types
 */
function isApplicable(signature: Signature, types: string[]): boolean {
  const last = signature.length - 1;
  const varargs = last >= 0 && signature[last].endsWith('...');
  const arity = varargs
    ? types.length >= last
    : types.length == signature.length;
  return (
    arity &&
    types.every((type, index) =>
      assignable(
        type,
        varargs && index >= last
          ? signature[last].replace('...', '')
          : signature[index],
      ),
    )
  );
}

/**
 * The arguments for the implementation: rest arguments as they are, `Object` parameters with a
 * cast to select it over the overloads, and `null` for missing optional arguments
 */
function implArguments(
  ctx: Context,
  impl: Signature,
  args: Node[],
  codes: string[],
): string[] {
  return impl.flatMap((type, index) => {
    if (type.endsWith('...')) {
      return codes.slice(index);
    }
    if (index >= codes.length) {
      return [`(${type}) null`];
    }
    const cast = type == 'Object' && exprType(ctx, args[index]) != 'Object';
    return [cast ? `(Object) ${codes[index]}` : codes[index]];
  });
}

/**
 * The arguments of a call to a function, method or constructor: for a public overload if one
 * applies, else for the implementation
 */
function callArguments(
  ctx: Context,
  target: Callable,
  args: Node[],
  node: Node,
): string {
  if (args.some((arg) => Node.isSpreadElement(arg))) {
    return fail(node, 'Spread arguments are not supported');
  }
  const codes = args.map((arg) => expression(ctx, arg).code);
  if (target.overloads.length) {
    const types = args.map((arg) => exprType(ctx, arg));
    if (target.overloads.some((signature) => isApplicable(signature, types))) {
      return codes.join(', ');
    }
    if (!target.implCallable) {
      return fail(node, 'No Java overload matches the arguments');
    }
  }
  return implArguments(ctx, target.impl, args, codes).join(', ');
}

/**
 * A callback as a Java lambda with `arity` parameters
 */
export function lambda(ctx: Context, node: Node, arity: number): string {
  const { params, body } = callback(node, arity, javaLocalName, () =>
    ctx.dummy('arg'),
  );
  return `(${params.join(', ')}) -> ${expression(ctx, body).code}`;
}

function superCall(ctx: Context, node: CallExpression): Expr {
  const base = ctx.classDecl?.getBaseClass();
  const constructor = base ? constructorOf(base) : undefined;
  if (constructor === undefined) {
    return primary('super()');
  }
  const args = callArguments(
    ctx,
    callable(ctx, constructor),
    node.getArguments(),
    node,
  );
  return primary(`super(${args})`);
}

function functionCall(ctx: Context, node: CallExpression, callee: Node): Expr {
  const declaration = resolve(callee)[0];
  if (!Node.isFunctionDeclaration(declaration)) {
    return fail(node, 'Unsupported call');
  }
  const container = containerOf(ctx, declaration);
  const target = callable(ctx, declaration);
  const name = memberOf(ctx, node, container, target.name);
  return primary(
    `${name}(${callArguments(ctx, target, node.getArguments(), node)})`,
  );
}

type StaticCall = (ctx: Context, args: Node[]) => Expr | undefined;

/**
 * The static methods of JavaScript, by their text
 */
const staticCalls = new Map<string, StaticCall>([
  [
    'Object.keys',
    (ctx, args) =>
      primary(
        `new ArrayList<>(${wrap(expression(ctx, args[0]), Prec.primary)}.keySet())`,
      ),
  ],
  [
    'JSON.stringify',
    (ctx, args) =>
      args.length == 1
        ? primary(`Json.stringify(${expression(ctx, args[0]).code})`)
        : undefined,
  ],
  [
    'Array.isArray',
    (ctx, args) => instanceOf(expression(ctx, args[0]), 'List'),
  ],
]);

type MethodCallOf = (ctx: Context, node: CallExpression) => Expr | undefined;

const methodCalls: MethodCallOf[] = [
  (ctx, node) =>
    staticCalls.get(node.getExpression().getText())?.(ctx, node.getArguments()),
  (ctx, node) => {
    const callee = node
      .getExpression()
      .asKindOrThrow(SyntaxKind.PropertyAccessExpression);
    const declaration = resolve(callee.getNameNode())[0];
    if (!Node.isMethodDeclaration(declaration)) {
      return undefined;
    }
    const target = callable(ctx, declaration);
    return primary(
      `${receiver(ctx, callee.getExpression())}.${target.name}(${callArguments(ctx, target, node.getArguments(), node)})`,
    );
  },
  (ctx, node) =>
    builtinCall(
      ctx,
      node,
      node.getExpression().asKindOrThrow(SyntaxKind.PropertyAccessExpression),
    ),
];

export function call(ctx: Context, node: CallExpression): Expr {
  const callee = node.getExpression();
  if (callee.getKind() == SyntaxKind.SuperKeyword) {
    return superCall(ctx, node);
  }
  if (Node.isIdentifier(callee)) {
    return functionCall(ctx, node, callee);
  }
  if (!Node.isPropertyAccessExpression(callee)) {
    return fail(node, 'Unsupported call');
  }
  // the last rule always applies
  return firstOf(methodCalls, ctx, node)!;
}

/**
 * The collections of JavaScript, which have no arguments
 */
const collections = new Map([
  ['Set', 'LinkedHashSet'],
  ['Map', 'LinkedHashMap'],
]);

function builtinConstructor(
  ctx: Context,
  node: NewExpression,
  name: string,
  args: Expression[],
): Expr | undefined {
  const collection = collections.get(name);
  if (collection !== undefined) {
    if (args.length) {
      return fail(node, `Unsupported ${name} constructor`);
    }
    return primary(`new ${collection}<>()`);
  }
  if (name != 'RegExp') {
    return undefined;
  }
  const pattern = expression(ctx, args[0]).code;
  const flags = args.length > 1 ? expression(ctx, args[1]).code : '""';
  return primary(`Js.regExp(${pattern}, ${flags})`);
}

export function newExpression(ctx: Context, node: NewExpression): Expr {
  const callee = node.getExpression();
  const args = node.getArguments() as Expression[];
  const builtin = builtinConstructor(ctx, node, callee.getText(), args);
  if (builtin) {
    return builtin;
  }
  const declaration = resolve(callee)[0];
  if (!Node.isClassDeclaration(declaration)) {
    return fail(node, 'Unsupported constructor');
  }
  if (isGeneric(ctx, declaration)) {
    return fail(node, 'Classes with subclasses cannot be instantiated');
  }
  const name = ctx.classReference(node, declaration);
  const constructor = constructorOf(declaration);
  if (constructor === undefined) {
    return args.length
      ? fail(node, 'Unsupported constructor')
      : primary(`new ${name}()`);
  }
  return primary(
    `new ${name}(${callArguments(ctx, callable(ctx, constructor), args, node)})`,
  );
}
