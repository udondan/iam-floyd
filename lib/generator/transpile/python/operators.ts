import { BinaryExpression, Expression } from 'ts-morph';

import { fail, Kind, kindOf } from '../index';
import { Context, Expr, Prec, wrap } from './context';
import { expression } from './expressions';

/**
 * A binary expression with its parts
 */
export interface BinaryParts {
  node: BinaryExpression;
  operator: string;
  left: Expression;
  right: Expression;
}

/**
 * A left-associative operator with the precedence: only the right operand needs parentheses at the same level,
 * except for comparisons, which Python chains, so both operands need them
 */
export function binaryOp(
  ctx: Context,
  { left, right }: BinaryParts,
  op: string,
  prec: Prec,
): Expr {
  const leftMin = prec == Prec.comparison ? prec + 1 : prec;
  return {
    code: `${wrap(expression(ctx, left), leftMin)} ${op} ${wrap(expression(ctx, right), prec + 1)}`,
    prec,
  };
}

export function compare(ctx: Context, parts: BinaryParts, op: string): Expr {
  return binaryOp(ctx, parts, op, Prec.comparison);
}

/**
 * Fails unless both operands have the same kind, one of the allowed
 */
export function sameKind(
  { node, left, right }: BinaryParts,
  allowed: Kind[],
  message: string,
) {
  const kinds = new Set([kindOf(left.getType()), kindOf(right.getType())]);
  if (kinds.size != 1 || !allowed.includes([...kinds][0])) {
    fail(node, message);
  }
}
