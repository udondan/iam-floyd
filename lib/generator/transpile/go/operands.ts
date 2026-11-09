import { BinaryExpression } from 'ts-morph';

import { Context } from './context';
import { convert } from './conversions';
import { Expr, value } from './expr';
import { expression } from './expressions';

export type Operands = [Expr, Expr];

/**
 * The values of both sides of a binary expression, left first
 */
export function operands(ctx: Context, node: BinaryExpression): Operands {
  const a = value(expression(ctx, node.getLeft()));
  const b = value(expression(ctx, node.getRight()));
  return [a, b];
}

/**
 * Converts an integer to float64 if the other side is a float64
 */
export function promote([a, b]: Operands, node: BinaryExpression): Operands {
  if (a.type == 'int' && b.type == 'float64') {
    return [convert(a, 'float64', node.getLeft()), b];
  }
  if (a.type == 'float64' && b.type == 'int') {
    return [a, convert(b, 'float64', node.getRight())];
  }
  return [a, b];
}

/**
 * Converts both sides to float64
 */
export function toFloats([a, b]: Operands, node: BinaryExpression): Operands {
  return [
    convert(a, 'float64', node.getLeft()),
    convert(b, 'float64', node.getRight()),
  ];
}

export function isNumeric(type: string): boolean {
  return ['int', 'float64'].includes(type);
}
