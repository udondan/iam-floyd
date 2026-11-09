import {
  ClassDeclaration,
  ConstructorDeclaration,
  Node,
  ParameterDeclaration,
  Scope,
  SyntaxKind,
  TypeNode,
} from 'ts-morph';

import { fail } from '../index';
import {
  Callable,
  CallableDeclaration,
  functionName,
  newCallable,
  OverloadRules,
} from '../shared';
import { className, Context } from './context';
import { javaLocalName, javaMethodName } from './names';
import { typeFromNode } from './type-node';
import { box, erasure } from './types';

export type {
  Callable,
  CallableDeclaration,
  Param,
  Signature,
} from '../shared';

/**
 * The nearest constructor of a class or its ancestors
 */
export function constructorOf(
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
 * The type node of a parameter, of the elements for rest parameters
 */
function paramTypeNode(param: ParameterDeclaration): TypeNode {
  const typeNode = param.getTypeNode();
  if (typeNode === undefined) {
    return fail(param, 'Parameters must have a type');
  }
  if (!param.isRestParameter()) {
    return typeNode;
  }
  if (!Node.isArrayTypeNode(typeNode)) {
    return fail(param, 'Rest parameters must have an array type');
  }
  return typeNode.getElementTypeNode();
}

/**
 * The Java types of a parameter. Public parameters accept every member of a union type, and any
 * number; the others have one type.
 */
function paramOptions(
  ctx: Context,
  param: ParameterDeclaration,
  isPublic: boolean,
): string[] {
  const typeNode = paramTypeNode(param);
  if (!isPublic) {
    const boxed = param.isOptional() || param.isRestParameter();
    return [typeFromNode(ctx, typeNode, boxed)];
  }
  const parts = Node.isUnionTypeNode(typeNode)
    ? typeNode.getTypeNodes()
    : [typeNode];
  const options = parts
    .filter((part) => part.getKind() != SyntaxKind.UndefinedKeyword)
    .map((part) => typeFromNode(ctx, part, param.isOptional(), true));
  return [...new Set(options)];
}

/**
 * The Java name of a callable, and whether it is public
 */
function nameOf(declaration: CallableDeclaration): {
  name: string;
  isPublic: boolean;
} {
  if (Node.isFunctionDeclaration(declaration)) {
    return { name: functionName(declaration), isPublic: false };
  }
  const name = Node.isConstructorDeclaration(declaration)
    ? className(declaration.getParentOrThrow() as ClassDeclaration)
    : javaMethodName(declaration.getName());
  return { name, isPublic: declaration.getScope() == Scope.Public };
}

function rules(ctx: Context): OverloadRules {
  return {
    language: 'Java',
    object: 'Object',
    optional: box,
    key: erasure,
    localName: javaLocalName,
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
