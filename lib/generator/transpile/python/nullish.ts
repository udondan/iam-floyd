import { Expression, Node } from 'ts-morph';

import { fail, isPure, kindOf } from '../index';
import { Context, Expr, Prec, primary, wrap } from './context';
import { expression } from './expressions';
import { BinaryParts } from './operators';

/**
 * The object and key of `record[key]` and `map.get(key)`
 */
function lookupOperands(
  left: Expression,
): [Expression, Expression] | undefined {
  if (
    Node.isElementAccessExpression(left) &&
    kindOf(left.getExpression().getType()) == 'record'
  ) {
    return [left.getExpression(), left.getArgumentExpressionOrThrow()];
  }
  if (!Node.isCallExpression(left)) {
    return undefined;
  }
  const callee = left.getExpression();
  const args = left.getArguments();
  if (
    Node.isPropertyAccessExpression(callee) &&
    callee.getName() == 'get' &&
    kindOf(callee.getExpression().getType()) == 'map' &&
    args.length == 1
  ) {
    return [callee.getExpression(), args[0] as Expression];
  }
  return undefined;
}

/**
 * `record[key] ?? x` and `map.get(key) ?? x` become `get(key, x)`, which always evaluates x
 */
function lookup(
  ctx: Context,
  [object, key]: [Expression, Expression],
  right: Expression,
): Expr {
  if (!isPure(right) && !Node.isArrayLiteralExpression(right)) {
    fail(right, 'The right side of ?? must be free of side effects');
  }
  return primary(
    `${wrap(expression(ctx, object), Prec.primary)}.get(${expression(ctx, key).code}, ${expression(ctx, right).code})`,
  );
}

export function nullish(ctx: Context, { left, right }: BinaryParts): Expr {
  const operands = lookupOperands(left);
  if (operands !== undefined) {
    return lookup(ctx, operands, right);
  }
  if (!isPure(left)) {
    fail(left, 'The left side of ?? must be free of side effects');
  }
  const value = expression(ctx, left);
  return {
    code: `${wrap(value, Prec.or)} if ${wrap(value, Prec.comparison + 1)} is not None else ${wrap(expression(ctx, right), Prec.conditional)}`,
    prec: Prec.conditional,
  };
}
