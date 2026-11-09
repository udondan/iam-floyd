import { BinaryExpression, Node, SyntaxKind, TypeOfExpression } from 'ts-morph';

import { fail, kindOf } from '../index';
import { Context, Expr, Prec, wrap } from './context';
import { exprType } from './declared';
import { expression } from './expressions';

/**
 * The operands of `typeof x == 'type'`, in either order
 */
function typeofOperands(
  left: Node,
  right: Node,
): [TypeOfExpression, Node] | undefined {
  if (Node.isTypeOfExpression(left) && Node.isStringLiteral(right)) {
    return [left, right];
  }
  if (Node.isTypeOfExpression(right) && Node.isStringLiteral(left)) {
    return [right, left];
  }
  return undefined;
}

function nullCheck(ctx: Context, value: Node, negate: boolean): Expr {
  return {
    code: `${wrap(expression(ctx, value), Prec.relational)} ${negate ? '!=' : '=='} null`,
    prec: Prec.equality,
  };
}

const typeChecks = new Map<string, (ctx: Context, operand: Node) => Expr>([
  [
    'string',
    (ctx, operand) => ({
      code: `${wrap(expression(ctx, operand), Prec.relational)} is string`,
      prec: Prec.relational,
    }),
  ],
  [
    'boolean',
    (ctx, operand) => ({
      code: `${wrap(expression(ctx, operand), Prec.relational)} is bool`,
      prec: Prec.relational,
    }),
  ],
  [
    'number',
    (ctx, operand) => ({
      code: `Js.IsNumber(${expression(ctx, operand).code})`,
      prec: Prec.primary,
    }),
  ],
]);

function typeofCheck(
  ctx: Context,
  node: BinaryExpression,
  [typeOf, literal]: [TypeOfExpression, Node],
  negate: boolean,
): Expr {
  const operand = typeOf.getExpression();
  const type = literal.getText().slice(1, -1);
  if (type == 'undefined') {
    return nullCheck(ctx, operand, negate);
  }
  const typeCheck = typeChecks.get(type);
  if (typeCheck === undefined) {
    return fail(node, 'Unsupported typeof check');
  }
  const check = typeCheck(ctx, operand);
  return negate ? { code: `!(${check.code})`, prec: Prec.unary } : check;
}

function isUndefined(side: Node): boolean {
  return (
    side.getKind() == SyntaxKind.NullKeyword || side.getText() == 'undefined'
  );
}

const comparable = ['string', 'number', 'boolean'];

/**
 * Fails unless both sides are strings, numbers or booleans of a known C# type
 */
function checkComparable(
  ctx: Context,
  node: BinaryExpression,
  left: Node,
  right: Node,
) {
  const leftKind = kindOf(left.getType());
  if (!comparable.includes(leftKind) || leftKind != kindOf(right.getType())) {
    fail(node, 'Equality is supported for strings, numbers and booleans');
  }
  if (exprType(ctx, left) == 'object' || exprType(ctx, right) == 'object') {
    fail(node, 'Equality needs known types');
  }
}

/**
 * `==`, `===`, `!=` and `!==`
 */
export function equality(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): Expr {
  const left = node.getLeft();
  const right = node.getRight();
  const negate = operator.startsWith('!');
  const operands = typeofOperands(left, right);
  if (operands) {
    return typeofCheck(ctx, node, operands, negate);
  }
  if (isUndefined(left) || isUndefined(right)) {
    return nullCheck(ctx, isUndefined(left) ? right : left, negate);
  }
  checkComparable(ctx, node, left, right);
  return {
    code: `${wrap(expression(ctx, left), Prec.relational)} ${negate ? '!=' : '=='} ${wrap(expression(ctx, right), Prec.relational)}`,
    prec: Prec.equality,
  };
}
