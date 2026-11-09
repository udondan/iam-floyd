import {
  ClassDeclaration,
  FunctionDeclaration,
  MethodDeclaration,
  Node,
  ParameterDeclaration,
  Scope,
} from 'ts-morph';

import { fail } from '../index';
import { className, methodName } from './classes';
import { Callable, CallableDeclaration, Context, Param } from './context';
import { converted } from './conversions';
import { isNilable } from './expr';
import { typeFromType } from './inferred-types';
import { camelCase, goLocalName } from './names';
import { publicType, typeFromNode } from './types';

/**
 * The Go name and parameters of a function, method or constructor
 */
export function callable(
  ctx: Context,
  declaration: CallableDeclaration,
): Callable {
  const existing = ctx.callables.get(declaration);
  if (existing !== undefined) {
    return existing;
  }
  if (isGenericOrAsync(declaration)) {
    fail(declaration, 'Generic and async functions are not supported');
  }
  const [name, isPublic] = callableName(declaration);
  const params = declaration
    .getParameters()
    .map((param) => parameter(ctx, param, isPublic));
  const result = { name, params, isPublic };
  ctx.callables.set(declaration, result);
  return result;
}

function isGenericOrAsync(declaration: CallableDeclaration): boolean {
  return (
    declaration.getTypeParameters().length > 0 ||
    (!Node.isConstructorDeclaration(declaration) && declaration.isAsync())
  );
}

/**
 * The Go name of a callable, and whether it is public
 */
function callableName(declaration: CallableDeclaration): [string, boolean] {
  if (Node.isConstructorDeclaration(declaration)) {
    return [
      `New${className(declaration.getParentOrThrow() as ClassDeclaration)}`,
      declaration.getScope() == Scope.Public,
    ];
  }
  if (Node.isMethodDeclaration(declaration)) {
    return [methodName(declaration), declaration.getScope() == Scope.Public];
  }
  const name = declaration.getName();
  if (name === undefined || declaration.getOverloads().length) {
    return fail(declaration, 'Unsupported function');
  }
  return [camelCase(name), false];
}

function parameter(
  ctx: Context,
  param: ParameterDeclaration,
  isPublic: boolean,
): Param {
  if (param.hasInitializer()) {
    fail(param, 'Default values are not supported, use optional parameters');
  }
  checkIdentifierParameter(param);
  const typeNode = param.getTypeNode();
  if (typeNode === undefined) {
    return fail(param, 'Parameters must have a type');
  }
  const rest = param.isRestParameter();
  const elementType = rest ? restElementType(param) : typeNode;
  const type = isPublic
    ? publicType(ctx, elementType)
    : typeFromNode(ctx, elementType, param.isOptional() && !rest);
  return {
    name: goLocalName(param.getName()),
    type,
    rest,
    normalize: isPublic && type == 'interface{}' && !rest,
  };
}

function restElementType(param: ParameterDeclaration) {
  const typeNode = param.getTypeNode();
  if (!Node.isArrayTypeNode(typeNode)) {
    return fail(param, 'Rest parameters must have an array type');
  }
  return typeNode.getElementTypeNode();
}

export function checkIdentifierParameter(param: ParameterDeclaration) {
  if (!Node.isIdentifier(param.getNameNode())) {
    fail(param, 'Destructured parameters are not supported');
  }
}

export function returnType(
  ctx: Context,
  declaration: MethodDeclaration | FunctionDeclaration,
): string {
  const typeNode = declaration.getReturnTypeNode();
  if (typeNode) {
    return typeFromNode(ctx, typeNode, false);
  }
  const type = declaration.getReturnType();
  if (type.isVoid()) {
    return 'void';
  }
  return typeFromType(ctx, type, false, declaration);
}

/**
 * The return type after the parameters of a Go function: none for `void`
 */
export function returnSuffix(type: string): string {
  return type == 'void' ? '' : ` ${type}`;
}

export function paramList(callable: Callable): string {
  return callable.params
    .map((param) =>
      param.rest
        ? `${param.name} ...${param.type}`
        : `${param.name} ${param.type}`,
    )
    .join(', ');
}

/**
 * The parameters passed on to another function with the same parameters
 */
export function forwardArguments(callable: Callable | undefined): string[] {
  return (callable?.params ?? []).map((param) =>
    param.rest ? `${param.name}...` : param.name,
  );
}

/**
 * Normalizes the parameters of type `interface{}`, so they hold the values of JavaScript
 */
export function normalizeParams(ctx: Context, callable: Callable) {
  for (const param of callable.params) {
    if (param.normalize) {
      ctx.emit(`${param.name} = js.Normalize(${param.name})`);
    }
  }
}

export function bodyOf(declaration: CallableDeclaration) {
  const body = declaration.getBody();
  if (!Node.isBlock(body)) {
    return fail(declaration, 'Functions must have a body');
  }
  return body;
}

/**
 * The arguments of a call to a function, method or constructor; missing optional arguments are
 * `nil`
 */
export function callArguments(
  ctx: Context,
  callable: Callable,
  args: Node[],
  node: Node,
): string[] {
  const result = callable.params.flatMap((param, index) =>
    paramArguments(ctx, param, args, index, node),
  );
  if (
    args.length > callable.params.length &&
    !callable.params.some((param) => param.rest)
  ) {
    fail(node, 'Too many arguments');
  }
  return result;
}

function paramArguments(
  ctx: Context,
  param: Param,
  args: Node[],
  index: number,
  node: Node,
): string[] {
  if (param.rest) {
    return args.slice(index).map((arg) => restArgument(ctx, param, arg));
  }
  if (index < args.length) {
    return [argument(ctx, param, args[index])];
  }
  if (isNilable(param.type)) {
    return ['nil'];
  }
  return fail(node, 'Missing argument');
}

function argument(ctx: Context, param: Param, arg: Node): string {
  if (Node.isSpreadElement(arg)) {
    fail(arg, 'Spread arguments are supported only for rest parameters');
  }
  return converted(ctx, arg, param.type).code;
}

function restArgument(ctx: Context, param: Param, arg: Node): string {
  if (Node.isSpreadElement(arg)) {
    return `${converted(ctx, arg.getExpression(), `[]${param.type}`).code}...`;
  }
  return converted(ctx, arg, param.type).code;
}
