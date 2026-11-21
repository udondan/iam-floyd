import {
  BinaryExpression,
  ElementAccessExpression,
  Expression,
  Node,
  SyntaxKind,
} from 'ts-morph';

import { fail, kindOf } from '../index';
import { Context } from './context';
import { declarationOf, declaredType, exprType } from './declared';
import { Prec, wrap } from './expr';
import { expression } from './expressions';
import { javaLocalName, javaString } from './names';
import { firstOf, isThisProperty } from './nodes';

const assignmentOperators = ['=', '+=', '-='];

const steps = new Map<SyntaxKind, string>([
  [SyntaxKind.PlusPlusToken, '++'],
  [SyntaxKind.MinusMinusToken, '--'],
]);

/**
 * A variable or field that is assigned to
 */
function target(node: Node): string {
  if (Node.isIdentifier(node)) {
    return javaLocalName(node.getText());
  }
  if (isThisProperty(node)) {
    return `this.${javaLocalName(node.getName())}`;
  }
  return fail(node, 'Unsupported assignment target');
}

function checkPlain(node: BinaryExpression, operator: string) {
  if (operator != '=') {
    fail(node, 'Unsupported assignment');
  }
}

/**
 * The method that sets an element, by the kind of the receiver
 */
const setters = new Map([
  ['array', 'set'],
  ['record', 'put'],
  ['map', 'put'],
]);

function elementAssignment(
  ctx: Context,
  node: BinaryExpression,
  left: ElementAccessExpression,
): string {
  const receiver = wrap(expression(ctx, left.getExpression()), Prec.primary);
  const key = expression(ctx, left.getArgumentExpressionOrThrow()).code;
  const setter = setters.get(kindOf(left.getExpression().getType()));
  if (setter === undefined) {
    return fail(node, 'Unsupported assignment');
  }
  return `${receiver}.${setter}(${key}, ${expression(ctx, node.getRight()).code})`;
}

/**
 * Whether a number of a public parameter is assigned to an internal number
 */
function isNarrowing(ctx: Context, left: Node, right: Node): boolean {
  const declaration = declarationOf(left);
  return (
    declaration !== undefined &&
    declaredType(ctx, declaration) == 'int' &&
    ['double', 'Number'].includes(exprType(ctx, right))
  );
}

function assignment(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): string {
  const left = node.getLeft();
  const right = node.getRight();
  if (Node.isElementAccessExpression(left)) {
    checkPlain(node, operator);
    return elementAssignment(ctx, node, left);
  }
  if (
    Node.isPropertyAccessExpression(left) &&
    ['record', 'any'].includes(kindOf(left.getExpression().getType()))
  ) {
    checkPlain(node, operator);
    return `${wrap(expression(ctx, left.getExpression()), Prec.primary)}.put(${javaString(left.getName())}, ${expression(ctx, right).code})`;
  }
  const narrowing = isNarrowing(ctx, left, right);
  const name = target(left);
  const value = narrowing
    ? `${wrap(expression(ctx, right), Prec.primary)}.intValue()`
    : expression(ctx, right).code;
  return `${name} ${operator} ${value}`;
}

type SimpleStatement = (ctx: Context, node: Expression) => string | undefined;

const simpleStatements: SimpleStatement[] = [
  (ctx, node) => {
    if (!Node.isBinaryExpression(node)) {
      return undefined;
    }
    const operator = node.getOperatorToken().getText();
    return assignmentOperators.includes(operator)
      ? assignment(ctx, node, operator)
      : undefined;
  },
  (_ctx, node) => {
    if (
      !Node.isPostfixUnaryExpression(node) &&
      !Node.isPrefixUnaryExpression(node)
    ) {
      return undefined;
    }
    const step = steps.get(node.getOperatorToken());
    return step && `${target(node.getOperand())}${step}`;
  },
  (ctx, node) =>
    Node.isCallExpression(node) ? expression(ctx, node).code : undefined,
];

/**
 * An assignment, increment or call, without semicolon
 */
export function simpleStatement(ctx: Context, node: Expression): string {
  return (
    firstOf(simpleStatements, ctx, node) ??
    fail(node, 'Unsupported expression statement')
  );
}
