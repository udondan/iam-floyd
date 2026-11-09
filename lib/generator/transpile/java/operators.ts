import { BinaryExpression, Node } from 'ts-morph';

import { fail, isPure, kindOf, resolve } from '../index';
import { logical } from './conditions';
import { Context } from './context';
import { equality } from './equality';
import { Expr, infix, instanceOf, Prec, primary, wrap } from './expr';
import { expression, receiver, stringPart } from './expressions';
import { commonKind, isKeyed, methodCall } from './nodes';

type BinaryOf = (
  ctx: Context,
  node: BinaryExpression,
  operator: string,
) => Expr;

function logicalOperator(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): Expr {
  if (kindOf(node.getType()) != 'boolean') {
    return fail(node, `${operator} is supported only for booleans`);
  }
  return logical(ctx, node, operator)!;
}

/**
 * The lookup of a key in a map or record, with a default value
 */
function getOrDefault(
  ctx: Context,
  object: Node,
  key: Node,
  fallback: Expr,
): Expr {
  return primary(
    `${receiver(ctx, object)}.getOrDefault(${expression(ctx, key).code}, ${fallback.code})`,
  );
}

/**
 * `??` on a lookup in a map or record, as `getOrDefault`
 */
function lookupWithDefault(
  ctx: Context,
  left: Node,
  fallback: Expr,
): Expr | undefined {
  if (Node.isElementAccessExpression(left) && isKeyed(left.getExpression())) {
    return getOrDefault(
      ctx,
      left.getExpression(),
      left.getArgumentExpressionOrThrow(),
      fallback,
    );
  }
  const get = methodCall(left, 'get');
  const object = get?.callee.getExpression();
  if (get && object && kindOf(object.getType()) == 'map') {
    return getOrDefault(ctx, object, get.call.getArguments()[0], fallback);
  }
  return undefined;
}

function nullishCoalescing(ctx: Context, node: BinaryExpression): Expr {
  const left = node.getLeft();
  const fallback = expression(ctx, node.getRight());
  const lookup = lookupWithDefault(ctx, left, fallback);
  if (lookup) {
    return lookup;
  }
  if (!isPure(left)) {
    return fail(node, 'The left side of ?? must be a variable');
  }
  const value = expression(ctx, left);
  return {
    code: `${wrap(value, Prec.equality + 1)} != null ? ${wrap(value, Prec.or)} : ${wrap(fallback, Prec.conditional)}`,
    prec: Prec.conditional,
  };
}

function comparison(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): Expr {
  const left = node.getLeft();
  const right = node.getRight();
  const kind = commonKind(left, right);
  if (kind == 'string') {
    return {
      code: `${wrap(expression(ctx, left), Prec.primary)}.compareTo(${expression(ctx, right).code}) ${operator} 0`,
      prec: Prec.relational,
    };
  }
  if (kind != 'number') {
    return fail(node, 'Comparisons are supported for strings and numbers');
  }
  return infix(
    expression(ctx, left),
    operator,
    expression(ctx, right),
    Prec.relational,
  );
}

/**
 * `+` on numbers, or the concatenation of strings with values of any type
 */
function plus(ctx: Context, node: BinaryExpression): Expr {
  const left = node.getLeft();
  const right = node.getRight();
  if (commonKind(left, right) == 'number') {
    return infix(
      expression(ctx, left),
      '+',
      expression(ctx, right),
      Prec.additive,
    );
  }
  if (![left, right].some((side) => kindOf(side.getType()) == 'string')) {
    return fail(node, '+ is supported for strings and numbers');
  }
  return {
    code: `${stringPart(ctx, left, Prec.additive)} + ${stringPart(ctx, right, Prec.additive + 1)}`,
    prec: Prec.additive,
  };
}

const arithmeticPrecs = new Map([
  ['-', Prec.additive],
  ['*', Prec.multiplicative],
]);

function arithmetic(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): Expr {
  const left = node.getLeft();
  const right = node.getRight();
  if (commonKind(left, right) != 'number') {
    return fail(node, `${operator} is supported for numbers`);
  }
  return infix(
    expression(ctx, left),
    operator,
    expression(ctx, right),
    arithmeticPrecs.get(operator)!,
  );
}

function hasKey(ctx: Context, node: BinaryExpression): Expr {
  const right = node.getRight();
  if (!isKeyed(right)) {
    return fail(node, 'in is supported for records');
  }
  return primary(
    `${receiver(ctx, right)}.containsKey(${expression(ctx, node.getLeft()).code})`,
  );
}

/**
 * The Java class of the right side of `instanceof`
 */
function instanceClass(ctx: Context, node: BinaryExpression): string {
  const right = node.getRight();
  if (right.getText() == 'Date') {
    return 'Instant';
  }
  const declaration = resolve(right)[0];
  if (!Node.isClassDeclaration(declaration)) {
    return fail(node, 'Unsupported instanceof');
  }
  return ctx.classReference(node, declaration);
}

function isInstance(ctx: Context, node: BinaryExpression): Expr {
  const cls = instanceClass(ctx, node);
  return instanceOf(expression(ctx, node.getLeft()), cls);
}

const equalityOperator: BinaryOf = (ctx, node, operator) =>
  equality(ctx, node, operator);

const binaryOperators = new Map<string, BinaryOf>([
  ['&&', logicalOperator],
  ['||', logicalOperator],
  ['??', nullishCoalescing],
  ['==', equalityOperator],
  ['===', equalityOperator],
  ['!=', equalityOperator],
  ['!==', equalityOperator],
  ['<', comparison],
  ['>', comparison],
  ['<=', comparison],
  ['>=', comparison],
  ['+', plus],
  ['-', arithmetic],
  ['*', arithmetic],
  ['in', hasKey],
  ['instanceof', isInstance],
]);

export function binary(ctx: Context, node: BinaryExpression): Expr {
  const operator = node.getOperatorToken().getText();
  const handler = binaryOperators.get(operator);
  if (handler === undefined) {
    return fail(node, `Unsupported operator ${operator}`);
  }
  return handler(ctx, node, operator);
}
