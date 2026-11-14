import { BinaryExpression, Expression, Node } from 'ts-morph';

import { fail, kindOf } from '../index';
import { Context } from './context';
import { exprType } from './declared';
import { equals, Expr, infix, Prec, primary } from './expr';
import { expression } from './expressions';

const logicalPrecs = new Map([
  ['&&', Prec.and],
  ['||', Prec.or],
]);

/**
 * `&&` or `||`, with the truthiness of JavaScript on both sides
 */
export function logical(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): Expr | undefined {
  const prec = logicalPrecs.get(operator);
  return (
    prec &&
    infix(
      condition(ctx, node.getLeft()),
      operator,
      condition(ctx, node.getRight()),
      prec,
    )
  );
}

type Truthiness = (ctx: Context, node: Expression, expr: Expr) => Expr;

function unknownTruthiness(_ctx: Context, node: Expression): Expr {
  return fail(node, 'Conditions must have a known type');
}

/**
 * The truthiness of the values of a kind, other than boolean
 */
const truthiness = new Map<string, Truthiness>([
  ['string', (_ctx, _node, expr) => primary(`Js.truthy(${expr.code})`)],
  ['number', (_ctx, _node, expr) => equals(expr, '!=', '0')],
  ['any', unknownTruthiness],
  ['mixed', unknownTruthiness],
]);

function booleanCondition(ctx: Context, node: Expression): Expr {
  const expr = expression(ctx, node);
  return exprType(ctx, node) == 'Boolean' && !Node.isBinaryExpression(node)
    ? primary(`Boolean.TRUE.equals(${expr.code})`)
    : expr;
}

/**
 * An expression in a boolean context, with the truthiness of JavaScript
 */
export function condition(ctx: Context, node: Expression): Expr {
  if (Node.isParenthesizedExpression(node)) {
    return primary(`(${condition(ctx, node.getExpression()).code})`);
  }
  const combined =
    Node.isBinaryExpression(node) &&
    logical(ctx, node, node.getOperatorToken().getText());
  if (combined) {
    return combined;
  }
  const kind = kindOf(node.getType());
  if (kind == 'boolean') {
    return booleanCondition(ctx, node);
  }
  const expr = expression(ctx, node);
  const truthy = truthiness.get(kind);
  return truthy ? truthy(ctx, node, expr) : equals(expr, '!=', 'null');
}
