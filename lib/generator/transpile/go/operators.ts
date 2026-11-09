import { BinaryExpression, Node } from 'ts-morph';

import { fail, kindOf } from '../index';
import { entryLookup } from './access';
import { coalesce, condition } from './conditions';
import { Context } from './context';
import { assigned } from './conversions';
import { normalized } from './declarations';
import { equality } from './equality';
import {
  compare,
  Expr,
  operand,
  Prec,
  primary,
  stringOperand,
  wrap,
} from './expr';
import { expression } from './expressions';
import { isNumeric, Operands, operands, promote, toFloats } from './operands';
import { isRecordOrMap } from './syntax';

type Operator = (
  ctx: Context,
  node: BinaryExpression,
  operator: string,
) => Expr;

const logicalOperator: Operator = (ctx, node, operator) => {
  if (kindOf(node.getType()) != 'boolean') {
    return fail(node, `${operator} is supported only for booleans`);
  }
  return condition(ctx, node);
};

const arithmetic =
  (prec: Prec): Operator =>
  (ctx, node, operator) =>
    arithmeticOperator(ctx, node, operator, prec);

const operators = new Map<string, Operator>([
  ['&&', logicalOperator],
  ['||', logicalOperator],
  ['??', (ctx, node) => nullishCoalescing(ctx, node)],
  ['==', (ctx, node, operator) => equality(ctx, node, operator)],
  ['===', (ctx, node, operator) => equality(ctx, node, operator)],
  ['!=', (ctx, node, operator) => equality(ctx, node, operator)],
  ['!==', (ctx, node, operator) => equality(ctx, node, operator)],
  ['<', comparison],
  ['>', comparison],
  ['<=', comparison],
  ['>=', comparison],
  ['+', plus],
  ['-', arithmetic(Prec.add)],
  ['*', arithmetic(Prec.mul)],
  ['in', inOperator],
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

/**
 * The receiver and the key of `record[key]` or `map.get(key)`
 */
function entryOf(node: Node): [Node, Node] | undefined {
  if (Node.isElementAccessExpression(node)) {
    const receiver = node.getExpression();
    return isRecordOrMap(kindOf(receiver.getType()))
      ? [receiver, node.getArgumentExpressionOrThrow()]
      : undefined;
  }
  if (!Node.isCallExpression(node)) {
    return undefined;
  }
  const callee = node.getExpression();
  if (
    !Node.isPropertyAccessExpression(callee) ||
    callee.getName() != 'get' ||
    kindOf(callee.getExpression().getType()) != 'map'
  ) {
    return undefined;
  }
  return [callee.getExpression(), node.getArguments()[0]];
}

/**
 * `??`: the entry of a record or map with a fallback, or a value with a fallback
 */
function nullishCoalescing(ctx: Context, node: BinaryExpression): Expr {
  const left = node.getLeft();
  const right = node.getRight();
  const entry = entryOf(left);
  if (entry === undefined) {
    return coalesce(ctx, left, right);
  }
  const [receiverNode, keyNode] = entry;
  const lookup = entryLookup(
    ctx,
    expression(ctx, receiverNode),
    receiverNode,
    keyNode,
  );
  const fallback = assigned(ctx, right, lookup.valueType).code;
  return primary(
    `${lookup.receiver}.GetOr(${lookup.key}, ${fallback})`,
    lookup.valueType,
  );
}

function comparison(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): Expr {
  const values = operands(ctx, node);
  if (values.every((side) => side.type == 'string')) {
    const [a, b] = values;
    return compare(`js.Compare(${a.code}, ${b.code}) ${operator} 0`);
  }
  const [a, b] = promote(values, node);
  if (a.type != b.type || !isNumeric(a.type)) {
    return fail(node, 'Comparisons are supported for strings and numbers');
  }
  return compare(`${operand(a)} ${operator} ${operand(b)}`);
}

/**
 * `+` of numbers, or the concatenation of strings
 */
function plus(ctx: Context, node: BinaryExpression): Expr {
  const values = operands(ctx, node);
  if (values.every((side) => isNumeric(side.type))) {
    return arithmeticResult(unified(values, node), '+', Prec.add);
  }
  if (values.every((side) => side.type != 'string')) {
    return fail(node, '+ is supported for strings and numbers');
  }
  const [a, b] = values;
  return {
    code: `${stringOperand(a, Prec.add)} + ${stringOperand(b, Prec.add + 1)}`,
    prec: Prec.add,
    type: 'string',
  };
}

function arithmeticOperator(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
  prec: Prec,
): Expr {
  const values = unified(operands(ctx, node), node);
  if (!isNumeric(values[0].type)) {
    return fail(node, `${operator} is supported for numbers`);
  }
  return arithmeticResult(values, operator, prec);
}

/**
 * Both sides with the same type: different types are both converted to float64
 */
function unified(values: Operands, node: BinaryExpression): Operands {
  return values[0].type == values[1].type ? values : toFloats(values, node);
}

function arithmeticResult(
  [a, b]: Operands,
  operator: string,
  prec: Prec,
): Expr {
  return {
    code: `${wrap(a, prec)} ${operator} ${wrap(b, prec + 1)}`,
    prec,
    type: a.type,
  };
}

/**
 * `key in record`
 */
function inOperator(ctx: Context, node: BinaryExpression): Expr {
  const right = node.getRight();
  if (!isRecordOrMap(kindOf(right.getType()))) {
    return fail(node, 'in is supported for records');
  }
  const lookup = entryLookup(
    ctx,
    expression(ctx, right),
    right,
    node.getLeft(),
  );
  return primary(`${lookup.receiver}.Has(${lookup.key})`, 'bool');
}

/**
 * `value instanceof Date`
 */
function instanceOf(ctx: Context, node: BinaryExpression): Expr {
  if (node.getRight().getText() != 'Date') {
    return fail(node, 'instanceof is supported only for Date');
  }
  return primary(`js.IsDate(${normalized(ctx, node.getLeft())})`, 'bool');
}
