import {
  ConstructorDeclaration,
  FunctionDeclaration,
  MethodDeclaration,
  Node,
  ParameterDeclaration,
  PropertyDeclaration,
  SyntaxKind,
  VariableDeclaration,
} from 'ts-morph';

import { fail, resolve } from '../index';
import { callable } from './callables';
import { Context, Declaration, Expr, Prec } from './context';
import { typeFromType } from './inferred-types';
import { commonType } from './nullable';
import { typeFromNode } from './type-nodes';

function parameterType(ctx: Context, declaration: ParameterDeclaration) {
  const parent = declaration.getParentOrThrow();
  if (Node.isArrowFunction(parent)) {
    const index = parent.getParameters().indexOf(declaration);
    // the second parameter of the callbacks of filter and map is the index; forEach callbacks
    // have one parameter
    return index == 1
      ? 'int'
      : typeFromType(ctx, declaration.getType(), false, declaration);
  }
  // the parameters of functions, methods and constructors, as the transpiled code has no other
  // functions
  const fn = parent as
    MethodDeclaration | ConstructorDeclaration | FunctionDeclaration;
  const index = fn.getParameters().indexOf(declaration);
  return callable(ctx, fn).impl[index].replace('...', '[]');
}

function variableType(
  ctx: Context,
  declaration: VariableDeclaration | PropertyDeclaration,
): string {
  const typeNode = declaration.getTypeNode();
  if (typeNode) {
    return typeFromNode(ctx, typeNode, false);
  }
  if (declaration.getInitializer()) {
    return typeFromType(ctx, declaration.getType(), false, declaration);
  }
  return fail(declaration, 'Variables need a type or an initializer');
}

function declarationType(ctx: Context, declaration: Declaration): string {
  if (Node.isParameterDeclaration(declaration)) {
    return parameterType(ctx, declaration);
  }
  if (
    Node.isVariableDeclaration(declaration) ||
    Node.isPropertyDeclaration(declaration)
  ) {
    return variableType(ctx, declaration);
  }
  // a binding element of the entries of a map
  return typeFromType(ctx, declaration.getType(), false, declaration);
}

/**
 * The C# type of a declaration: a parameter, variable or property
 */
export function declaredType(ctx: Context, declaration: Declaration): string {
  const existing = ctx.declared.get(declaration);
  if (existing !== undefined) {
    return existing;
  }
  const type = declarationType(ctx, declaration);
  ctx.declared.set(declaration, type);
  return type;
}

/**
 * Whether an expression can refer to a variable, parameter or property
 */
function refersToVariable(node: Node): boolean {
  return (
    Node.isIdentifier(node) ||
    (Node.isPropertyAccessExpression(node) &&
      node.getExpression().getKind() == SyntaxKind.ThisKeyword)
  );
}

function isVariable(declaration: Node | undefined): declaration is Declaration {
  return (
    Node.isParameterDeclaration(declaration) ||
    Node.isVariableDeclaration(declaration) ||
    Node.isBindingElement(declaration) ||
    (Node.isPropertyDeclaration(declaration) && !declaration.isStatic())
  );
}

/**
 * The declaration of a variable, parameter or property that an expression refers to
 */
export function declarationOf(node: Node): Declaration | undefined {
  if (!refersToVariable(node)) {
    return undefined;
  }
  const declaration = resolve(node)[0];
  return isVariable(declaration) ? declaration : undefined;
}

/**
 * The type a variable of type `object` is narrowed to at an expression, if it maps to another C#
 * type. Lists are converted with `Js.ToList`, so they are `List<object>`.
 */
export function narrowedType(ctx: Context, node: Node): string | undefined {
  const type = typeFromType(ctx, node.getType(), false, node);
  if (type == 'object') {
    return undefined;
  }
  return type.startsWith('List<') ? 'List<object>' : type;
}

/**
 * An expression of type `object` narrowed to the type of the TypeScript expression
 */
export function narrowed(
  ctx: Context,
  code: string,
  node: Node,
): Expr | undefined {
  const type = narrowedType(ctx, node);
  if (type === undefined) {
    return undefined;
  }
  if (type == 'List<object>') {
    return { code: `Js.ToList(${code})`, prec: Prec.primary };
  }
  return { code: `((${type})${code})`, prec: Prec.primary };
}

/**
 * The expression inside parentheses and non-null assertions
 */
function unwrap(node: Node): Node {
  while (
    Node.isParenthesizedExpression(node) ||
    Node.isNonNullExpression(node)
  ) {
    node = node.getExpression();
  }
  return node;
}

function isNullish(node: Node): boolean {
  return (
    node.getKind() == SyntaxKind.NullKeyword ||
    (Node.isIdentifier(node) && node.getText() == 'undefined')
  );
}

function variableExprType(
  ctx: Context,
  node: Node,
  declaration: Declaration,
): string {
  const declared = declaredType(ctx, declaration);
  if (declared == 'object') {
    return narrowedType(ctx, node) ?? 'object';
  }
  return declared;
}

/**
 * The static C# type of the translation of an expression
 */
export function exprType(ctx: Context, expr: Node): string {
  const node = unwrap(expr);
  if (isNullish(node)) {
    return 'null';
  }
  const declaration = declarationOf(node);
  if (declaration) {
    return variableExprType(ctx, node, declaration);
  }
  if (Node.isConditionalExpression(node)) {
    return commonType([
      exprType(ctx, node.getWhenTrue()),
      exprType(ctx, node.getWhenFalse()),
    ]);
  }
  return typeFromType(ctx, node.getType(), false, node);
}
