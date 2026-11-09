import {
  BinaryExpression,
  CallExpression,
  Node,
  PropertyAccessExpression,
} from 'ts-morph';

import { fail, kindOf, resolve } from '../index';
import { typed } from './assignments';
import { classReference } from './classes';
import { condition } from './conditions';
import { Context, Expr, Prec, wrap } from './context';
import { exprType } from './declared';
import { equality } from './equality';
import { expression, receiver } from './expressions';
import { nonNullable } from './nullable';

type Operator = (
  ctx: Context,
  node: BinaryExpression,
  operator: string,
) => Expr;

function logical(ctx: Context, node: BinaryExpression, operator: string): Expr {
  if (kindOf(node.getType()) != 'boolean') {
    return fail(node, `${operator} is supported only for booleans`);
  }
  const prec = operator == '&&' ? Prec.and : Prec.or;
  return {
    code: `${wrap(condition(ctx, node.getLeft()), prec)} ${operator} ${wrap(condition(ctx, node.getRight()), prec + 1)}`,
    prec,
  };
}

/**
 * The record or map and the key of a lookup, `record[key]` or `map.get(key)`
 */
function lookup(left: Node): [Node, Node] | undefined {
  if (
    Node.isElementAccessExpression(left) &&
    ['record', 'map'].includes(kindOf(left.getExpression().getType()))
  ) {
    return [left.getExpression(), left.getArgumentExpressionOrThrow()];
  }
  if (isMapGet(left)) {
    const callee = left.getExpression() as PropertyAccessExpression;
    return [callee.getExpression(), left.getArguments()[0]];
  }
  return undefined;
}

function isMapGet(node: Node): node is CallExpression {
  if (!Node.isCallExpression(node)) {
    return false;
  }
  const callee = node.getExpression();
  return (
    Node.isPropertyAccessExpression(callee) &&
    callee.getName() == 'get' &&
    kindOf(callee.getExpression().getType()) == 'map'
  );
}

function coalesce(ctx: Context, node: BinaryExpression): Expr {
  const left = node.getLeft();
  const leftType = exprType(ctx, left);
  const fallback = typed(ctx, node.getRight(), nonNullable(leftType));
  const lookedUp = lookup(left);
  if (lookedUp) {
    const [target, key] = lookedUp;
    return {
      code: `${receiver(ctx, target)}.GetValueOrDefault(${expression(ctx, key).code}, ${fallback.code})`,
      prec: Prec.primary,
    };
  }
  return {
    code: `${wrap(expression(ctx, left), Prec.coalesce + 1)} ?? ${wrap(fallback, Prec.coalesce)}`,
    prec: Prec.coalesce,
  };
}

function bothOf(node: BinaryExpression, kind: string): boolean {
  return (
    kindOf(node.getLeft().getType()) == kind &&
    kindOf(node.getRight().getType()) == kind
  );
}

function comparison(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): Expr {
  const left = node.getLeft();
  const right = node.getRight();
  if (bothOf(node, 'string')) {
    return {
      code: `string.CompareOrdinal(${expression(ctx, left).code}, ${expression(ctx, right).code}) ${operator} 0`,
      prec: Prec.relational,
    };
  }
  if (!bothOf(node, 'number')) {
    return fail(node, 'Comparisons are supported for strings and numbers');
  }
  return {
    code: `${wrap(expression(ctx, left), Prec.relational)} ${operator} ${wrap(expression(ctx, right), Prec.relational + 1)}`,
    prec: Prec.relational,
  };
}

function arithmetic(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): Expr {
  if (!bothOf(node, 'number')) {
    return fail(node, `${operator} is supported for numbers`);
  }
  const prec = operator == '*' ? Prec.multiplicative : Prec.additive;
  return {
    code: `${wrap(expression(ctx, node.getLeft()), prec)} ${operator} ${wrap(expression(ctx, node.getRight()), prec + 1)}`,
    prec,
  };
}

/**
 * A side of a string concatenation
 */
function concatenated(ctx: Context, side: Node, min: Prec): string {
  return kindOf(side.getType()) == 'string'
    ? wrap(expression(ctx, side), min)
    : `Js.ToString(${expression(ctx, side).code})`;
}

function plus(ctx: Context, node: BinaryExpression, operator: string): Expr {
  if (bothOf(node, 'number')) {
    return arithmetic(ctx, node, operator);
  }
  const left = node.getLeft();
  const right = node.getRight();
  if (
    kindOf(left.getType()) != 'string' &&
    kindOf(right.getType()) != 'string'
  ) {
    return fail(node, '+ is supported for strings and numbers');
  }
  return {
    code: `${concatenated(ctx, left, Prec.additive)} + ${concatenated(ctx, right, Prec.additive + 1)}`,
    prec: Prec.additive,
  };
}

function inRecord(ctx: Context, node: BinaryExpression): Expr {
  const right = node.getRight();
  if (!['record', 'map'].includes(kindOf(right.getType()))) {
    return fail(node, 'in is supported for records');
  }
  return {
    code: `${receiver(ctx, right)}.ContainsKey(${expression(ctx, node.getLeft()).code})`,
    prec: Prec.primary,
  };
}

function instanceClass(ctx: Context, node: BinaryExpression): string {
  const right = node.getRight();
  if (right.getText() == 'Date') {
    return 'DateTime';
  }
  const declaration = resolve(right)[0];
  if (!Node.isClassDeclaration(declaration)) {
    return fail(node, 'Unsupported instanceof');
  }
  return classReference(ctx, node, declaration);
}

function instanceOf(ctx: Context, node: BinaryExpression): Expr {
  const cls = instanceClass(ctx, node);
  return {
    code: `${wrap(expression(ctx, node.getLeft()), Prec.relational)} is ${cls}`,
    prec: Prec.relational,
  };
}

const operators = new Map<string, Operator>([
  ['&&', logical],
  ['||', logical],
  ['??', coalesce],
  ['==', equality],
  ['===', equality],
  ['!=', equality],
  ['!==', equality],
  ['<', comparison],
  ['>', comparison],
  ['<=', comparison],
  ['>=', comparison],
  ['+', plus],
  ['-', arithmetic],
  ['*', arithmetic],
  ['in', inRecord],
  ['instanceof', instanceOf],
]);

export function binary(ctx: Context, node: BinaryExpression): Expr {
  const operator = node.getOperatorToken().getText();
  const handler = operators.get(operator);
  if (handler === undefined) {
    return fail(node, `Unsupported operator ${operator}`);
  }
  return handler(ctx, node, operator);
}
