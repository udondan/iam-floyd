import {
  ClassDeclaration,
  FunctionDeclaration,
  MethodDeclaration,
  Node,
  ParameterDeclaration,
  Scope,
  SyntaxKind,
} from 'ts-morph';

import { fail } from '../index';
import {
  Callable,
  CallableDeclaration,
  functionName,
  newCallable,
  OverloadRules,
} from '../shared';
import { className } from './classes';
import { Context } from './context';
import { exprType } from './declared';
import { typeFromType } from './inferred-types';
import { csharpLocalName, csharpMethodName } from './names';
import { commonType, nonNullable, nullable } from './nullable';
import { typeFromNode } from './type-nodes';

export type { CallableDeclaration } from '../shared';

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
function nameOf(declaration: CallableDeclaration): {
  name: string;
  isPublic: boolean;
} {
  if (Node.isFunctionDeclaration(declaration)) {
    return {
      name: csharpMethodName(functionName(declaration)),
      isPublic: false,
    };
  }
  const name = Node.isConstructorDeclaration(declaration)
    ? className(declaration.getParentOrThrow() as ClassDeclaration)
    : csharpMethodName(declaration.getName());
  return { name, isPublic: declaration.getScope() == Scope.Public };
}

function rules(ctx: Context): OverloadRules {
  return {
    language: 'C#',
    object: 'object',
    optional: nullable,
    key: nonNullable,
    localName: csharpLocalName,
    nameOf,
    options: (param, isPublic) => paramOptions(ctx, param, isPublic),
  };
}

export function callable(
  ctx: Context,
  declaration: CallableDeclaration,
): Callable {
  let result = ctx.callables.get(declaration);
  if (result === undefined) {
    result = newCallable(rules(ctx), declaration);
    ctx.callables.set(declaration, result);
  }
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
