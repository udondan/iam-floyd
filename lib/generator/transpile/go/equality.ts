import { BinaryExpression, Node, TypeOfExpression } from 'ts-morph';

import { fail } from '../index';
import { Context, firstOf } from './context';
import { normalized, raw } from './declarations';
import { compare, Expr, isNilable, operand } from './expr';
import { goString } from './names';
import { operands, promote } from './operands';
import { isNullish } from './syntax';

type Equality = (
  ctx: Context,
  node: BinaryExpression,
  op: string,
) => Expr | undefined;

const nilEqualities: Equality[] = [typeofEquality, undefinedEquality];

/**
 * `==`, `===`, `!=` or `!==`, which are the same in Go
 */
export function equality(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): Expr {
  const op = operator.startsWith('!') ? '!=' : '==';
  return firstOf(nilEqualities, ctx, node, op) ?? valueEquality(ctx, node, op);
}

/**
 * The `typeof` expression and the string literal it is compared to
 */
function typeofPair(
  node: BinaryExpression,
): [TypeOfExpression, Node] | undefined {
  const left = node.getLeft();
  const right = node.getRight();
  if (Node.isTypeOfExpression(left) && Node.isStringLiteral(right)) {
    return [left, right];
  }
  if (Node.isTypeOfExpression(right) && Node.isStringLiteral(left)) {
    return [right, left];
  }
  return undefined;
}

/**
 * `typeof x == 'string'`
 */
function typeofEquality(
  ctx: Context,
  node: BinaryExpression,
  op: string,
): Expr | undefined {
  const pair = typeofPair(node);
  if (pair === undefined) {
    return undefined;
  }
  const [typeOf, literal] = pair;
  const type = literal.getText().slice(1, -1);
  if (type == 'undefined') {
    return compare(`${operand(raw(ctx, typeOf.getExpression()))} ${op} nil`);
  }
  return compare(
    `js.TypeOf(${normalized(ctx, typeOf.getExpression())}) ${op} ${goString(type)}`,
  );
}

/**
 * `x == undefined` or `x == null`
 */
function undefinedEquality(
  ctx: Context,
  node: BinaryExpression,
  op: string,
): Expr | undefined {
  const left = node.getLeft();
  const right = node.getRight();
  if (!isNullish(left) && !isNullish(right)) {
    return undefined;
  }
  const value = raw(ctx, isNullish(left) ? right : left);
  if (!isNilable(value.type)) {
    return fail(node, `${value.type} cannot be undefined`);
  }
  return compare(`${operand(value)} ${op} nil`);
}

function valueEquality(ctx: Context, node: BinaryExpression, op: string): Expr {
  const [a, b] = promote(operands(ctx, node), node);
  if (
    a.type != b.type ||
    !['string', 'int', 'float64', 'bool'].includes(a.type)
  ) {
    return fail(
      node,
      'Equality is supported for strings, numbers and booleans',
    );
  }
  return compare(`${operand(a)} ${op} ${operand(b)}`);
}
