import {
  ArrowFunction,
  BindingElement,
  FunctionDeclaration,
  MethodDeclaration,
  Node,
  ParameterDeclaration,
  PropertyDeclaration,
  SyntaxKind,
  VariableDeclaration,
} from 'ts-morph';

import { fail, resolve } from '../index';
import { callable, CallableDeclaration } from './callable';
import { Context } from './context';
import { isNullish, isThisProperty, methodCall } from './nodes';
import { typeFromType } from './type-inferred';
import { typeFromNode } from './type-node';
import { box, commonType } from './types';

/**
 * A declaration with a Java type: a parameter, variable or property, or a variable of a loop over
 * entries
 */
export type Declaration =
  | ParameterDeclaration
  | VariableDeclaration
  | PropertyDeclaration
  | BindingElement;

/**
 * Whether an arrow function is the callback of `forEach`, which becomes a loop
 */
export function isForEachCallback(node: ArrowFunction): boolean {
  const forEach = methodCall(node.getParent(), 'forEach');
  return (
    forEach !== undefined &&
    Node.isExpressionStatement(forEach.call.getParent())
  );
}

function arrowParamType(
  ctx: Context,
  fn: ArrowFunction,
  declaration: ParameterDeclaration,
): string {
  if (isForEachCallback(fn)) {
    return typeFromType(ctx, declaration.getType(), false, declaration);
  }
  // the second parameter of the callbacks of filter and map is the index
  return fn.getParameters().indexOf(declaration) == 1
    ? 'Integer'
    : typeFromType(ctx, declaration.getType(), true, declaration);
}

function paramType(ctx: Context, declaration: ParameterDeclaration): string {
  const parent = declaration.getParentOrThrow();
  if (Node.isArrowFunction(parent)) {
    return arrowParamType(ctx, parent, declaration);
  }
  // the transpiled code refers only to the parameters of the functions, methods and
  // constructors it transpiles, and of arrow functions
  const callableParent = parent as CallableDeclaration;
  const index = callableParent.getParameters().indexOf(declaration);
  return callable(ctx, callableParent).impl[index].replace('...', '[]');
}

function variableType(
  ctx: Context,
  declaration: VariableDeclaration | PropertyDeclaration,
): string {
  const typeNode = declaration.getTypeNode();
  if (typeNode) {
    return typeFromNode(ctx, typeNode, false);
  }
  if (declaration.getInitializer() === undefined) {
    return fail(declaration, 'Variables need a type or an initializer');
  }
  return typeFromType(ctx, declaration.getType(), false, declaration);
}

function newDeclaredType(ctx: Context, declaration: Declaration): string {
  if (Node.isParameterDeclaration(declaration)) {
    return paramType(ctx, declaration);
  }
  if (Node.isBindingElement(declaration)) {
    return typeFromType(ctx, declaration.getType(), true, declaration);
  }
  return variableType(ctx, declaration);
}

/**
 * The Java type of a declaration: a parameter, variable or property
 */
export function declaredType(ctx: Context, declaration: Declaration): string {
  let type = ctx.declared.get(declaration);
  if (type === undefined) {
    type = newDeclaredType(ctx, declaration);
    ctx.declared.set(declaration, type);
  }
  return type;
}

function isVariable(node: Node): node is Declaration {
  return (
    Node.isParameterDeclaration(node) ||
    Node.isVariableDeclaration(node) ||
    Node.isBindingElement(node) ||
    (Node.isPropertyDeclaration(node) && !node.isStatic())
  );
}

/**
 * The declaration of a variable, parameter or property that an expression refers to
 */
export function declarationOf(node: Node): Declaration | undefined {
  if (!Node.isIdentifier(node) && !isThisProperty(node)) {
    return undefined;
  }
  const declaration = resolve(node)[0];
  return declaration && isVariable(declaration) ? declaration : undefined;
}

export function isRestParameter(node: Node): boolean {
  const variable = declarationOf(node);
  return Node.isParameterDeclaration(variable) && variable.isRestParameter();
}

/**
 * The type a variable of type `Object` is narrowed to at an expression, if it maps to another Java
 * type
 */
export function narrowedType(ctx: Context, node: Node): string | undefined {
  const type = typeFromType(ctx, node.getType(), true, node);
  if (type == 'Object') {
    return undefined;
  }
  return type.startsWith('List<') ? 'List<?>' : type;
}

function unwrapped(node: Node): Node {
  while (
    Node.isParenthesizedExpression(node) ||
    Node.isNonNullExpression(node)
  ) {
    node = node.getExpression();
  }
  return node;
}

/**
 * Whether the translation of an expression looks up a value, which is boxed
 */
function isLookup(node: Node): boolean {
  return (
    Node.isElementAccessExpression(node) ||
    methodCall(node, 'get') !== undefined
  );
}

/**
 * The static Java type of the translation of an expression
 */
export function exprType(ctx: Context, node: Node): string {
  node = unwrapped(node);
  if (isNullish(node)) {
    return 'null';
  }
  const declaration = declarationOf(node);
  if (declaration) {
    const declared = declaredType(ctx, declaration);
    return declared == 'Object'
      ? (narrowedType(ctx, node) ?? 'Object')
      : declared;
  }
  const type = typeFromType(ctx, node.getType(), false, node);
  return isLookup(node) ? box(type) : type;
}

/**
 * The Java type of the values a function returns, without those of nested arrow functions
 */
function returnedType(
  ctx: Context,
  declaration: MethodDeclaration | FunctionDeclaration,
): string {
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
  if (typeNode === undefined) {
    return typeFromType(ctx, declaration.getReturnType(), false, declaration);
  }
  if (typeNode.getKind() == SyntaxKind.AnyKeyword) {
    return returnedType(ctx, declaration);
  }
  return typeFromNode(ctx, typeNode, false);
}
