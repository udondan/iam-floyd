import {
  CallExpression,
  ClassDeclaration,
  Identifier,
  MethodDeclaration,
  NewExpression,
  Node,
  PropertyAccessExpression,
  SyntaxKind,
} from 'ts-morph';

import { fail, resolve } from '../index';
import { receiverOf, receiverTypeOf } from './access';
import { callable, callArguments, returnType } from './callables';
import {
  classReference,
  className,
  constructorOf,
  isGeneric,
  isHidden,
} from './classes';
import { Context } from './context';
import { converted } from './conversions';
import { raw } from './declarations';
import { Expr, newCollection, Prec, primary, wrap } from './expr';
import { expression } from './expressions';
import { typeFromType } from './inferred-types';
import { builtinMethod } from './methods';

export function call(ctx: Context, node: CallExpression): Expr {
  const callee = node.getExpression();
  if (Node.isIdentifier(callee)) {
    return functionCall(ctx, node, callee);
  }
  if (!Node.isPropertyAccessExpression(callee)) {
    return fail(node, 'Unsupported call');
  }
  return globalCall(ctx, node, callee) ?? memberCall(ctx, node, callee);
}

function functionCall(
  ctx: Context,
  node: CallExpression,
  callee: Identifier,
): Expr {
  const declaration = resolve(callee)[0];
  if (!Node.isFunctionDeclaration(declaration)) {
    return fail(node, 'Unsupported call');
  }
  const signature = callable(ctx, declaration);
  const name = ctx.qualify(node, declaration, signature.name);
  const args = callArguments(ctx, signature, node.getArguments(), node);
  return primary(`${name}(${args.join(', ')})`, returnType(ctx, declaration));
}

/**
 * The functions of JavaScript, by their name
 */
const globalCalls = new Map<
  string,
  (ctx: Context, args: Node[]) => Expr | undefined
>([
  [
    'Object.keys',
    (ctx, args) =>
      primary(
        `${wrap(expression(ctx, args[0]), Prec.primary)}.Keys()`,
        '[]string',
      ),
  ],
  [
    'JSON.stringify',
    (ctx, args) =>
      args.length == 1
        ? primary(`js.Stringify(${raw(ctx, args[0]).code})`, 'string')
        : undefined,
  ],
  [
    'Array.isArray',
    (ctx, args) => primary(`js.IsArray(${raw(ctx, args[0]).code})`, 'bool'),
  ],
]);

function globalCall(
  ctx: Context,
  node: CallExpression,
  callee: PropertyAccessExpression,
): Expr | undefined {
  return globalCalls.get(callee.getText())?.(ctx, node.getArguments());
}

function memberCall(
  ctx: Context,
  node: CallExpression,
  callee: PropertyAccessExpression,
): Expr {
  const declaration = resolve(callee.getNameNode())[0];
  if (Node.isMethodDeclaration(declaration)) {
    return methodCall(ctx, node, callee, declaration);
  }
  return builtinMethod(ctx, node, callee);
}

function methodCall(
  ctx: Context,
  node: CallExpression,
  callee: PropertyAccessExpression,
  declaration: MethodDeclaration,
): Expr {
  const signature = callable(ctx, declaration);
  if (isHidden(declaration) && ctx.packageOf(declaration) != ctx.pkg) {
    fail(node, `${signature.name} is not exported to package ${ctx.pkg}`);
  }
  const receiverNode = callee.getExpression();
  const type = isFluent(declaration)
    ? receiverTypeOf(ctx, receiverNode)
    : returnType(ctx, declaration);
  const receiver = receiverOf(ctx, receiverNode);
  const args = callArguments(ctx, signature, node.getArguments(), node);
  return primary(`${receiver}.${signature.name}(${args.join(', ')})`, type);
}

/**
 * Whether a method returns `this`, so the call has the type of the receiver
 */
function isFluent(method: MethodDeclaration): boolean {
  return (
    method.getReturnType().getText() == 'this' ||
    method.getReturnTypeNode()?.getKind() == SyntaxKind.ThisType
  );
}

const builtinConstructors = new Map<
  string,
  (ctx: Context, node: NewExpression, args: Node[]) => Expr
>([
  ['Set', collectionConstructor],
  ['Map', collectionConstructor],
  [
    'RegExp',
    (ctx, _node, args) => {
      const pattern = converted(ctx, args[0], 'string').code;
      const flags =
        args.length > 1 ? converted(ctx, args[1], 'string').code : '""';
      return primary(`js.RegExp(${pattern}, ${flags})`, '*regexp.Regexp');
    },
  ],
]);

function collectionConstructor(
  ctx: Context,
  node: NewExpression,
  args: Node[],
): Expr {
  if (args.length) {
    return fail(
      node,
      `Unsupported ${node.getExpression().getText()} constructor`,
    );
  }
  const type = typeFromType(ctx, node.getType(), false, node);
  return primary(newCollection(type), type);
}

export function newExpression(ctx: Context, node: NewExpression): Expr {
  const callee = node.getExpression();
  const args = node.getArguments();
  const builtin = builtinConstructors.get(callee.getText());
  if (builtin) {
    return builtin(ctx, node, args);
  }
  const declaration = resolve(callee)[0];
  if (!Node.isClassDeclaration(declaration)) {
    return fail(node, 'Unsupported constructor');
  }
  if (isGeneric(ctx, declaration)) {
    return fail(node, 'Classes with subclasses cannot be instantiated');
  }
  return construction(ctx, node, declaration, args);
}

function construction(
  ctx: Context,
  node: NewExpression,
  declaration: ClassDeclaration,
  args: Node[],
): Expr {
  const type = classReference(ctx, node, declaration);
  const name = ctx.qualify(node, declaration, `New${className(declaration)}`);
  const constructor = constructorOf(declaration);
  if (constructor) {
    const values = callArguments(ctx, callable(ctx, constructor), args, node);
    return primary(`${name}(${values.join(', ')})`, type);
  }
  if (args.length) {
    return fail(node, 'Unsupported constructor');
  }
  return primary(`${name}()`, type);
}
