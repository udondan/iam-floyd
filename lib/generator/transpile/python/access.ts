import {
  ElementAccessExpression,
  Node,
  PropertyAccessExpression,
  VariableDeclaration,
} from 'ts-morph';

import { fail, kindOf, resolve } from '../index';
import { atom, Context, Expr, Prec, primary, wrap } from './context';
import { expression } from './expressions';
import {
  functionName,
  memberName,
  moduleConstantName,
  pythonConstantName,
  pythonName,
} from './names';
import { pyString } from './strings';

function variableName(declaration: VariableDeclaration, text: string): string {
  const statement = declaration.getVariableStatement();
  if (statement !== undefined && Node.isSourceFile(statement.getParent())) {
    return moduleConstantName(declaration.getName(), statement.isExported());
  }
  return pythonName(text);
}

/**
 * The Python name of an identifier with the declaration, if it is supported
 */
function declaredName(declaration: Node, text: string): string | undefined {
  if (
    Node.isClassDeclaration(declaration) ||
    Node.isEnumDeclaration(declaration)
  ) {
    return text;
  }
  if (Node.isFunctionDeclaration(declaration)) {
    return functionName(declaration.getNameOrThrow(), declaration.isExported());
  }
  if (Node.isVariableDeclaration(declaration)) {
    return variableName(declaration, text);
  }
  if (
    Node.isParameterDeclaration(declaration) ||
    Node.isBindingElement(declaration)
  ) {
    return pythonName(text);
  }
  return undefined;
}

export function identifier(node: Node): Expr {
  const text = node.getText();
  if (text == 'undefined') {
    return atom('None');
  }
  const declaration = resolve(node)[0];
  if (declaration === undefined) {
    return fail(node, 'Unknown identifier');
  }
  return atom(
    declaredName(declaration, text) ?? fail(node, 'Unsupported identifier'),
  );
}

export function propertyAccess(
  ctx: Context,
  node: PropertyAccessExpression,
  isTarget: boolean,
): Expr {
  const receiver = node.getExpression();
  const name = node.getName();
  const kind = kindOf(receiver.getType());
  if (name == 'length' && (kind == 'string' || kind == 'array')) {
    if (isTarget) {
      fail(node, 'Cannot assign to length');
    }
    return primary(`len(${expression(ctx, receiver).code})`);
  }
  const declaration = node.getNameNode().getSymbol()?.getDeclarations()[0];
  if (Node.isEnumMember(declaration)) {
    return primary(
      `${expression(ctx, receiver).code}.${pythonConstantName(name)}`,
    );
  }
  if (
    Node.isPropertyDeclaration(declaration) ||
    Node.isMethodDeclaration(declaration)
  ) {
    return primary(
      `${wrap(expression(ctx, receiver), Prec.primary)}.${memberName(declaration)}`,
    );
  }
  if (kind == 'any' || kind == 'record') {
    return primary(
      `${wrap(expression(ctx, receiver), Prec.primary)}[${pyString(name)}]`,
    );
  }
  return fail(node, 'Unsupported property access');
}

/**
 * Whether the value of the node is the receiver of a property or element access
 */
function isReceiver(node: Node): boolean {
  let child: Node = node;
  let parent = node.getParentOrThrow();
  while (
    Node.isNonNullExpression(parent) ||
    Node.isParenthesizedExpression(parent)
  ) {
    child = parent;
    parent = parent.getParentOrThrow();
  }
  return (
    (Node.isPropertyAccessExpression(parent) ||
      Node.isElementAccessExpression(parent)) &&
    parent.getExpression() == child
  );
}

/**
 * Reading a missing key returns `undefined` in JavaScript, so reads use `.get()` unless the value is used as receiver,
 * where JavaScript would throw too
 */
export function elementAccess(
  ctx: Context,
  node: ElementAccessExpression,
  isTarget: boolean,
): Expr {
  const receiver = node.getExpression();
  const argument = node.getArgumentExpressionOrThrow();
  const kind = kindOf(receiver.getType());
  const object = wrap(expression(ctx, receiver), Prec.primary);
  const key = expression(ctx, argument).code;
  if (kind == 'array') {
    if (kindOf(argument.getType()) != 'number') {
      fail(node, 'Arrays need a numeric index');
    }
    return primary(`${object}[${key}]`);
  }
  if (kind != 'record' && kind != 'any') {
    return fail(node, 'Unsupported element access');
  }
  if (isTarget || kind == 'any' || isReceiver(node)) {
    return primary(`${object}[${key}]`);
  }
  return primary(`${object}.get(${key})`);
}
