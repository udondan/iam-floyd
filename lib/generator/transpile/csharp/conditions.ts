import { BinaryExpression, Expression, Node } from 'ts-morph';

import { fail, Kind, kindOf } from '../index';
import { Context, Expr, Prec, primary, wrap } from './context';
import { exprType } from './declared';
import { expression } from './expressions';

function isLogical(node: Node): node is BinaryExpression {
  return (
    Node.isBinaryExpression(node) &&
    ['&&', '||'].includes(node.getOperatorToken().getText())
  );
}

function logical(ctx: Context, node: BinaryExpression): Expr {
  const operator = node.getOperatorToken().getText();
  const prec = operator == '&&' ? Prec.and : Prec.or;
  return {
    code: `${wrap(condition(ctx, node.getLeft()), prec)} ${operator} ${wrap(condition(ctx, node.getRight()), prec + 1)}`,
    prec,
  };
}

/**
 * A boolean, compared to `true` if it can be null
 */
function booleanCondition(ctx: Context, node: Expression): Expr {
  const expr = expression(ctx, node);
  return exprType(ctx, node) == 'bool?' && !Node.isBinaryExpression(node)
    ? { code: `${wrap(expr, Prec.relational)} == true`, prec: Prec.equality }
    : expr;
}

/**
 * The truthiness of strings and numbers
 */
const truthiness = new Map<Kind, (expr: Expr) => Expr>([
  [
    'string',
    (expr) => ({
      code: `!string.IsNullOrEmpty(${expr.code})`,
      prec: Prec.unary,
    }),
  ],
  [
    'number',
    (expr) => ({
      code: `${wrap(expr, Prec.relational)} != 0`,
      prec: Prec.equality,
    }),
  ],
]);

function truthy(ctx: Context, node: Expression, kind: Kind): Expr {
  const expr = expression(ctx, node);
  const check = truthiness.get(kind);
  if (check) {
    return check(expr);
  }
  if (kind == 'any' || kind == 'mixed') {
    return fail(node, 'Conditions must have a known type');
  }
  return {
    code: `${wrap(expr, Prec.relational)} != null`,
    prec: Prec.equality,
  };
}

/**
 * An expression in a boolean context, with the truthiness of JavaScript
 */
export function condition(ctx: Context, node: Expression): Expr {
  if (Node.isParenthesizedExpression(node)) {
    return primary(`(${condition(ctx, node.getExpression()).code})`);
  }
  if (isLogical(node)) {
    return logical(ctx, node);
  }
  const kind = kindOf(node.getType());
  if (kind == 'boolean') {
    return booleanCondition(ctx, node);
  }
  return truthy(ctx, node, kind);
}
