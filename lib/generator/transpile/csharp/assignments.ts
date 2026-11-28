import {
  BinaryExpression,
  ElementAccessExpression,
  Expression,
  Node,
  PropertyAccessExpression,
  SyntaxKind,
} from 'ts-morph';

import { fail, kindOf, resolve } from '../index';
import { fieldName } from './classes';
import { Context, Expr, Prec, primary, wrap } from './context';
import { declarationOf, declaredType, exprType } from './declared';
import { expression } from './expressions';
import { csharpLocalName, csharpString } from './names';

const assignmentOperators = ['=', '+=', '-='];

const incrementOperators = new Map([
  [SyntaxKind.PlusPlusToken, '++'],
  [SyntaxKind.MinusMinusToken, '--'],
]);

/**
 * An assignment, increment or call, without semicolon
 */
export function simpleStatement(ctx: Context, node: Expression): string {
  if (
    Node.isBinaryExpression(node) &&
    assignmentOperators.includes(node.getOperatorToken().getText())
  ) {
    return assignment(ctx, node, node.getOperatorToken().getText());
  }
  if (
    Node.isPostfixUnaryExpression(node) ||
    Node.isPrefixUnaryExpression(node)
  ) {
    const operator = incrementOperators.get(node.getOperatorToken());
    if (operator) {
      return `${target(node.getOperand())}${operator}`;
    }
  }
  if (Node.isCallExpression(node)) {
    return expression(ctx, node).code;
  }
  return fail(node, 'Unsupported expression statement');
}

/**
 * A variable or field that is assigned to
 */
function target(node: Node): string {
  if (Node.isIdentifier(node)) {
    return csharpLocalName(node.getText());
  }
  if (
    Node.isPropertyAccessExpression(node) &&
    node.getExpression().getKind() == SyntaxKind.ThisKeyword
  ) {
    const declaration = resolve(node.getNameNode())[0];
    if (!declaration || !Node.isPropertyDeclaration(declaration)) {
      return fail(node, 'Unsupported assignment target');
    }
    return `this.${fieldName(declaration)}`;
  }
  return fail(node, 'Unsupported assignment target');
}

function elementAssignment(
  ctx: Context,
  node: BinaryExpression,
  left: ElementAccessExpression,
  operator: string,
): string {
  if (operator != '=') {
    fail(node, 'Unsupported assignment');
  }
  const kind = kindOf(left.getExpression().getType());
  if (!['array', 'record', 'map'].includes(kind)) {
    return fail(node, 'Unsupported assignment');
  }
  const receiver = wrap(expression(ctx, left.getExpression()), Prec.primary);
  const key = expression(ctx, left.getArgumentExpressionOrThrow()).code;
  return `${receiver}[${key}] = ${typed(ctx, node.getRight(), exprType(ctx, left)).code}`;
}

function recordAssignment(
  ctx: Context,
  node: BinaryExpression,
  left: PropertyAccessExpression,
  operator: string,
): string {
  if (operator != '=') {
    fail(node, 'Unsupported assignment');
  }
  return `${wrap(expression(ctx, left.getExpression()), Prec.primary)}[${csharpString(left.getName())}] = ${expression(ctx, node.getRight()).code}`;
}

function variableAssignment(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): string {
  const left = node.getLeft();
  const right = node.getRight();
  const assigned = target(left);
  const declaration = declarationOf(left);
  const type = declaration ? declaredType(ctx, declaration) : 'object';
  if (type == 'int' && ['double', 'double?'].includes(exprType(ctx, right))) {
    // a number of a public parameter, assigned to an internal number
    return `${assigned} ${operator} (int)${wrap(expression(ctx, right), Prec.unary)}`;
  }
  return `${assigned} ${operator} ${typed(ctx, right, type).code}`;
}

function isRecordProperty(node: Node): node is PropertyAccessExpression {
  return (
    Node.isPropertyAccessExpression(node) &&
    ['record', 'any'].includes(kindOf(node.getExpression().getType()))
  );
}

export function assignment(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): string {
  const left = node.getLeft();
  if (Node.isElementAccessExpression(left)) {
    return elementAssignment(ctx, node, left, operator);
  }
  if (isRecordProperty(left)) {
    return recordAssignment(ctx, node, left, operator);
  }
  return variableAssignment(ctx, node, operator);
}

function isEmptyLiteral(node: Node): boolean {
  return (
    (Node.isArrayLiteralExpression(node) && node.getElements().length == 0) ||
    (Node.isObjectLiteralExpression(node) && node.getProperties().length == 0)
  );
}

/**
 * An expression that is assigned to a variable of the C# type `type`. Empty arrays and objects get
 * that type, and so does `null`.
 */
export function typed(ctx: Context, node: Node, type: string): Expr {
  if (isEmptyLiteral(node) && /^(List|Dictionary|HashSet)</.test(type)) {
    return primary(`new ${type}()`);
  }
  return expression(ctx, node);
}
