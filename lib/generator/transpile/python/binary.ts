import { BinaryExpression, Expression } from 'ts-morph';

import { fail, kindOf } from '../index';
import {
  Context,
  Expr,
  isClassReference,
  membership,
  Prec,
  primary,
  wrap,
} from './context';
import { equality } from './equality';
import { expression } from './expressions';
import { nullish } from './nullish';
import { BinaryParts, binaryOp, compare, sameKind } from './operators';

type Operator = (ctx: Context, parts: BinaryParts) => Expr;

/**
 * `a or b and c` is correct, but parentheses make it readable
 */
function or(ctx: Context, { left, right }: BinaryParts): Expr {
  const operand = (side: Expression) => {
    const value = expression(ctx, side);
    return value.prec == Prec.and ? `(${value.code})` : wrap(value, Prec.or);
  };
  return { code: `${operand(left)} or ${operand(right)}`, prec: Prec.or };
}

function comparison(ctx: Context, parts: BinaryParts): Expr {
  sameKind(
    parts,
    ['string', 'number'],
    'Comparisons are supported for strings or numbers only',
  );
  return compare(ctx, parts, parts.operator);
}

function additive(ctx: Context, parts: BinaryParts): Expr {
  return binaryOp(ctx, parts, parts.operator, Prec.additive);
}

function plus(ctx: Context, parts: BinaryParts): Expr {
  sameKind(
    parts,
    ['string', 'number'],
    '+ is supported for two strings or two numbers only',
  );
  return additive(ctx, parts);
}

function membershipOperator(ctx: Context, parts: BinaryParts): Expr {
  if (kindOf(parts.right.getType()) != 'record') {
    fail(parts.node, 'in is supported for records only');
  }
  return membership(
    wrap(expression(ctx, parts.left), Prec.comparison + 1),
    wrap(expression(ctx, parts.right), Prec.comparison + 1),
  );
}

function instanceOf(ctx: Context, { node, left, right }: BinaryParts): Expr {
  const type = right.getText();
  if (type == 'Date') {
    ctx.imports.add('datetime');
    return primary(
      `isinstance(${expression(ctx, left).code}, _datetime.datetime)`,
    );
  }
  if (isClassReference(right)) {
    return primary(`isinstance(${expression(ctx, left).code}, ${type})`);
  }
  return fail(node, 'Unsupported instanceof');
}

const operators = new Map<string, Operator>([
  ['&&', (ctx, parts) => binaryOp(ctx, parts, 'and', Prec.and)],
  ['||', or],
  ['??', (ctx, parts) => nullish(ctx, parts)],
  ['==', (ctx, parts) => equality(ctx, parts)],
  ['===', (ctx, parts) => equality(ctx, parts)],
  ['!=', (ctx, parts) => equality(ctx, parts)],
  ['!==', (ctx, parts) => equality(ctx, parts)],
  ['<', comparison],
  ['<=', comparison],
  ['>', comparison],
  ['>=', comparison],
  ['+', plus],
  ['-', additive],
  ['*', (ctx, parts) => binaryOp(ctx, parts, '*', Prec.multiplicative)],
  ['in', membershipOperator],
  ['instanceof', instanceOf],
]);

export function binary(ctx: Context, node: BinaryExpression): Expr {
  const operator = node.getOperatorToken().getText();
  const handle = operators.get(operator);
  if (handle === undefined) {
    return fail(node, `Unsupported operator ${operator}`);
  }
  return handle(ctx, {
    node,
    operator,
    left: node.getLeft(),
    right: node.getRight(),
  });
}
