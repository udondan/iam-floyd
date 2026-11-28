import {
  CallExpression,
  Identifier,
  Node,
  PropertyAccessExpression,
} from 'ts-morph';

import { fail, kindOf, resolve } from '../index';
import { callArguments } from './arguments';
import { callable } from './callables';
import {
  constructorOf,
  containerOf,
  containerReference,
  inherits,
} from './classes';
import { Context, Expr, Prec, primary, wrap } from './context';
import { expression, receiver } from './expressions';
import { builtInMethod } from './methods';

function superCall(ctx: Context, node: CallExpression): Expr {
  const base = ctx.classDecl?.getBaseClass();
  const constructor = base ? constructorOf(base) : undefined;
  if (constructor === undefined) {
    return primary('base()');
  }
  return primary(
    `base(${callArguments(ctx, callable(ctx, constructor), node.getArguments(), node)})`,
  );
}

/**
 * A call of a module level function
 */
function functionCall(
  ctx: Context,
  node: CallExpression,
  callee: Identifier,
): Expr {
  const declaration = resolve(callee)[0];
  if (!Node.isFunctionDeclaration(declaration)) {
    return fail(node, 'Unsupported call');
  }
  const container = containerOf(ctx, declaration);
  const fn = callable(ctx, declaration);
  const local =
    container.name == ctx.csharpClass ||
    (container.declaration !== undefined &&
      inherits(ctx, container.declaration));
  const name = local
    ? fn.name
    : `${containerReference(ctx, node, container)}.${fn.name}`;
  return primary(
    `${name}(${callArguments(ctx, fn, node.getArguments(), node)})`,
  );
}

const globalCalls = new Map<
  string,
  (ctx: Context, args: Node[]) => string | undefined
>([
  [
    'Object.keys',
    (ctx, args) =>
      `new List<string>(${wrap(expression(ctx, args[0]), Prec.primary)}.Keys)`,
  ],
  [
    'JSON.stringify',
    (ctx, args) =>
      args.length == 1
        ? `Json.Stringify(${expression(ctx, args[0]).code})`
        : undefined,
  ],
  [
    'Array.isArray',
    (ctx, args) => `Js.IsArray(${expression(ctx, args[0]).code})`,
  ],
]);

/**
 * A call of a method of a class or a built-in type
 */
function methodCall(
  ctx: Context,
  node: CallExpression,
  callee: PropertyAccessExpression,
): Expr {
  const receiverNode = callee.getExpression();
  const args = node.getArguments();
  const global = globalCalls.get(callee.getText())?.(ctx, args);
  if (global !== undefined) {
    return primary(global);
  }
  const declaration = resolve(callee.getNameNode())[0];
  if (Node.isMethodDeclaration(declaration)) {
    const method = callable(ctx, declaration);
    return primary(
      `${receiver(ctx, receiverNode)}.${method.name}(${callArguments(ctx, method, args, node)})`,
    );
  }
  return builtInMethod({
    ctx,
    node,
    receiverNode,
    receiver: receiver(ctx, receiverNode),
    args,
    method: callee.getName(),
    kind: kindOf(receiverNode.getType()),
  });
}

export function call(ctx: Context, node: CallExpression): Expr {
  const callee = node.getExpression();
  if (Node.isSuperExpression(callee)) {
    return superCall(ctx, node);
  }
  if (Node.isIdentifier(callee)) {
    return functionCall(ctx, node, callee);
  }
  if (!Node.isPropertyAccessExpression(callee)) {
    return fail(node, 'Unsupported call');
  }
  return methodCall(ctx, node, callee);
}
