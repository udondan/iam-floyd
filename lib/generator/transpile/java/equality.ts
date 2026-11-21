import { BinaryExpression, Node, TypeOfExpression } from 'ts-morph';

import { fail } from '../index';
import { Context } from './context';
import { exprType } from './declared';
import {
  Expr,
  instanceOf,
  nullCheck,
  Prec,
  prefixed,
  primary,
  wrap,
} from './expr';
import { expression } from './expressions';
import { commonKind, firstOf, isNullish } from './nodes';

/**
 * The classes of the values `typeof` checks for
 */
const typeofClasses = new Map([
  ['string', 'String'],
  ['number', 'Number'],
  ['boolean', 'Boolean'],
]);

const boxedTypes = ['Integer', 'Boolean', 'Double', 'Number'];

/**
 * The primitive types that boxed values are compared as, by kind
 */
const primitives = new Map([
  ['number', 'int'],
  ['boolean', 'boolean'],
]);

type EqualityOf = (
  ctx: Context,
  node: BinaryExpression,
  negate: boolean,
) => Expr | undefined;

function isTypeofCheck(side: Node, other: Node): side is TypeOfExpression {
  return Node.isTypeOfExpression(side) && Node.isStringLiteral(other);
}

/**
 * The `typeof` expression and the string literal of a check, in either order
 */
function typeofPair(
  left: Node,
  right: Node,
): [TypeOfExpression, Node] | undefined {
  if (isTypeofCheck(left, right)) {
    return [left, right];
  }
  return isTypeofCheck(right, left) ? [right, left] : undefined;
}

/**
 * `typeof x == "string"` and the like, in either order
 */
function typeofCheck(
  ctx: Context,
  node: BinaryExpression,
  negate: boolean,
): Expr | undefined {
  const pair = typeofPair(node.getLeft(), node.getRight());
  if (pair === undefined) {
    return undefined;
  }
  const [typeOf, literal] = pair;
  const operand = typeOf.getExpression();
  const type = literal.getText().slice(1, -1);
  if (type == 'undefined') {
    return nullCheck(expression(ctx, operand), negate);
  }
  const cls = typeofClasses.get(type);
  if (cls === undefined) {
    return fail(node, 'Unsupported typeof check');
  }
  const check = instanceOf(expression(ctx, operand), cls);
  return negate ? prefixed('!', check) : check;
}

function nullishCheck(
  ctx: Context,
  node: BinaryExpression,
  negate: boolean,
): Expr | undefined {
  const left = node.getLeft();
  const right = node.getRight();
  if (!isNullish(left) && !isNullish(right)) {
    return undefined;
  }
  return nullCheck(expression(ctx, isNullish(left) ? right : left), negate);
}

/**
 * The comparison of strings: with `equals` on a literal, else with `Objects.equals`
 */
function stringEquality(ctx: Context, left: Node, right: Node): string {
  if (Node.isStringLiteral(left)) {
    return `${expression(ctx, left).code}.equals(${expression(ctx, right).code})`;
  }
  if (Node.isStringLiteral(right)) {
    return `${expression(ctx, right).code}.equals(${expression(ctx, left).code})`;
  }
  return `Objects.equals(${expression(ctx, left).code}, ${expression(ctx, right).code})`;
}

function stringCheck(
  ctx: Context,
  node: BinaryExpression,
  negate: boolean,
): Expr | undefined {
  const left = node.getLeft();
  const right = node.getRight();
  if (commonKind(left, right) != 'string') {
    return undefined;
  }
  const check = primary(stringEquality(ctx, left, right));
  return negate ? prefixed('!', check) : check;
}

/**
 * Numbers and booleans with `==`: if both are boxed, the left one is unboxed, as `==` would compare
 * the references
 */
function primitiveCheck(
  ctx: Context,
  node: BinaryExpression,
  negate: boolean,
): Expr {
  const left = node.getLeft();
  const right = node.getRight();
  const primitive = primitives.get(commonKind(left, right));
  if (primitive === undefined) {
    return fail(
      node,
      'Equality is supported for strings, numbers and booleans',
    );
  }
  let leftCode = wrap(expression(ctx, left), Prec.relational);
  if (
    boxedTypes.includes(exprType(ctx, left)) &&
    boxedTypes.includes(exprType(ctx, right))
  ) {
    leftCode = `(${primitive}) ${wrap(expression(ctx, left), Prec.unary)}`;
  }
  return {
    code: `${leftCode} ${negate ? '!=' : '=='} ${wrap(expression(ctx, right), Prec.relational)}`,
    prec: Prec.equality,
  };
}

const equalities: EqualityOf[] = [
  typeofCheck,
  nullishCheck,
  stringCheck,
  primitiveCheck,
];

/**
 * `==`, `===`, `!=` and `!==`
 */
export function equality(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): Expr {
  // the last rule always applies
  return firstOf(equalities, ctx, node, operator.startsWith('!'))!;
}
