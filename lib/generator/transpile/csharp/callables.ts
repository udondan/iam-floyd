import {
  ClassDeclaration,
  ConstructorDeclaration,
  FunctionDeclaration,
  MethodDeclaration,
  Node,
  ParameterDeclaration,
  Scope,
  SyntaxKind,
} from 'ts-morph';

import { fail, isServiceFile } from '../index';
import { className } from './classes';
import { Callable, Context, Param, Signature } from './context';
import { exprType } from './declared';
import { typeFromType } from './inferred-types';
import { csharpLocalName, csharpMethodName } from './names';
import { commonType, nonNullable, nullable } from './nullable';
import { typeFromNode } from './type-nodes';

export type CallableDeclaration =
  MethodDeclaration | ConstructorDeclaration | FunctionDeclaration;

/**
 * The C# types of a parameter. Public parameters accept every member of a union type, and any
 * number; the others have one type.
 */
export function paramOptions(
  ctx: Context,
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
    return [typeFromNode(ctx, typeNode, false)];
  }
  const parts = Node.isUnionTypeNode(typeNode)
    ? typeNode.getTypeNodes()
    : [typeNode];
  const options: string[] = [];
  for (const part of parts) {
    if (part.getKind() == SyntaxKind.UndefinedKeyword) {
      continue;
    }
    const option = typeFromNode(ctx, part, false, true);
    if (!options.includes(option)) {
      options.push(option);
    }
  }
  return options;
}

/**
 * The C# name of a function, method or constructor, and whether it is public
 */
function callableName(declaration: CallableDeclaration): {
  name: string;
  isPublic: boolean;
} {
  if (Node.isConstructorDeclaration(declaration)) {
    return {
      name: className(declaration.getParentOrThrow() as ClassDeclaration),
      isPublic: declaration.getScope() == Scope.Public,
    };
  }
  if (Node.isMethodDeclaration(declaration)) {
    return {
      name: csharpMethodName(declaration.getName()),
      isPublic: declaration.getScope() == Scope.Public,
    };
  }
  const functionName = declaration.getName();
  if (functionName === undefined || declaration.getOverloads().length) {
    return fail(declaration, 'Unsupported function');
  }
  return { name: csharpMethodName(functionName), isPublic: false };
}

function paramOf(
  ctx: Context,
  param: ParameterDeclaration,
  isPublic: boolean,
): Param {
  if (param.hasInitializer()) {
    fail(param, 'Default values are not supported, use optional parameters');
  }
  if (!Node.isIdentifier(param.getNameNode())) {
    fail(param, 'Destructured parameters are not supported');
  }
  return {
    name: csharpLocalName(param.getName()),
    options: paramOptions(ctx, param, isPublic),
    optional: param.isOptional() && !param.isRestParameter(),
    rest: param.isRestParameter(),
  };
}

/**
 * The C# type of a parameter with one of its options
 */
function paramType(param: Param, option: string): string {
  if (param.rest) {
    return `${option}...`;
  }
  return param.optional ? nullable(option) : option;
}

/**
 * All signatures with one of the options of each parameter
 */
function combinations(params: Param[]): Signature[] {
  let signatures: Signature[] = [[]];
  for (const param of params) {
    signatures = signatures.flatMap((signature) =>
      param.options.map((option) => [...signature, paramType(param, option)]),
    );
  }
  return signatures;
}

/**
 * The overloads: for each number of optional parameters, the combinations of their options
 */
function overloadSignatures(params: Param[]): Signature[] {
  const firstOptional = params.findIndex((param) => param.optional);
  const overloads: Signature[] = [];
  for (
    let arity = firstOptional < 0 ? params.length : firstOptional;
    arity <= params.length;
    arity++
  ) {
    overloads.push(...combinations(params.slice(0, arity)));
  }
  return overloads;
}

function checkOverloads(declaration: Node, signatures: Signature[]) {
  const keys = new Set<string>();
  for (const signature of signatures) {
    const key = signature.map(nonNullable).join(',');
    if (keys.has(key)) {
      fail(declaration, `Two C# overloads have the same parameters (${key})`);
    }
    keys.add(key);
  }
}

function publicCallable(
  declaration: CallableDeclaration,
  name: string,
  params: Param[],
): Callable {
  const overloads = overloadSignatures(params);
  const collapsed = params.some((param) => param.options.length > 1);
  const impl = collapsed
    ? params.map((param) =>
        param.options.length > 1
          ? 'object'
          : paramType(param, param.options[0]),
      )
    : overloads[overloads.length - 1];
  checkOverloads(declaration, collapsed ? [...overloads, impl] : overloads);
  return {
    name,
    params,
    overloads,
    impl,
    implIsOverload: !collapsed,
    implCallable: !isServiceFile(declaration.getSourceFile()),
  };
}

export function callable(
  ctx: Context,
  declaration: CallableDeclaration,
): Callable {
  const existing = ctx.callables.get(declaration);
  if (existing !== undefined) {
    return existing;
  }
  if (
    declaration.getTypeParameters().length ||
    (!Node.isConstructorDeclaration(declaration) && declaration.isAsync())
  ) {
    fail(declaration, 'Generic and async functions are not supported');
  }
  const { name, isPublic } = callableName(declaration);
  const params = declaration
    .getParameters()
    .map((param) => paramOf(ctx, param, isPublic));
  if (
    params.some((param) => param.rest) &&
    params.some((param) => param.optional)
  ) {
    fail(
      declaration,
      'Optional and rest parameters are not supported together',
    );
  }
  const result: Callable = isPublic
    ? publicCallable(declaration, name, params)
    : {
        name,
        params,
        overloads: [],
        impl: params.map((param) => paramType(param, param.options[0])),
        implIsOverload: false,
        implCallable: true,
      };
  ctx.callables.set(declaration, result);
  return result;
}

/**
 * The C# type of the values a function returns
 */
function returnedType(ctx: Context, declaration: Node): string {
  return commonType(
    declaration
      .getDescendantsOfKind(SyntaxKind.ReturnStatement)
      .filter(
        (statement) =>
          statement.getFirstAncestorByKind(SyntaxKind.ArrowFunction) ===
          undefined,
      )
      .map((statement) => {
        const expression = statement.getExpression();
        return expression ? exprType(ctx, expression) : 'void';
      }),
  );
}

export function returnType(
  ctx: Context,
  declaration: MethodDeclaration | FunctionDeclaration,
): string {
  const typeNode = declaration.getReturnTypeNode();
  if (typeNode?.getKind() == SyntaxKind.AnyKeyword) {
    return returnedType(ctx, declaration);
  }
  if (typeNode) {
    return typeFromNode(ctx, typeNode, false);
  }
  const type = declaration.getReturnType();
  if (type.isVoid()) {
    return 'void';
  }
  return typeFromType(ctx, type, false, declaration);
}
