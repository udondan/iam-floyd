import { ConditionalExpression, Node } from 'ts-morph';

import { fail } from '../index';
import { convert, converted } from './conversions';
import { Context } from './context';
import { raw } from './declarations';
import {
  compare,
  Expr,
  isNilable,
  operand,
  pointerScalars,
  Prec,
  primary,
  wrap,
} from './expr';
import { expression } from './expressions';

const isZero = (expr: Expr) => compare(`${operand(expr)} != 0`);
const isZeroPointer = (expr: Expr) => compare(`js.Or(${expr.code}, 0) != 0`);

/**
 * The truthiness of JavaScript, by the Go type
 */
const truthiness = new Map<string, (expr: Expr) => Expr>([
  ['bool', (expr) => expr],
  ['*bool', (expr) => primary(`js.Or(${expr.code}, false)`, 'bool')],
  ['string', (expr) => compare(`${operand(expr)} != ""`)],
  ['*string', (expr) => compare(`js.Or(${expr.code}, "") != ""`)],
  ['int', isZero],
  ['float64', isZero],
  ['*int', isZeroPointer],
  ['*float64', isZeroPointer],
]);

const logicalPrecs = new Map([
  ['&&', Prec.and],
  ['||', Prec.or],
]);

/**
 * An expression in a boolean context, with the truthiness of JavaScript
 */
export function condition(ctx: Context, node: Node): Expr {
  if (Node.isParenthesizedExpression(node)) {
    return primary(`(${condition(ctx, node.getExpression()).code})`, 'bool');
  }
  return logical(ctx, node) ?? truthy(node, expression(ctx, node));
}

/**
 * `a && b` or `a || b`
 */
function logical(ctx: Context, node: Node): Expr | undefined {
  if (!Node.isBinaryExpression(node)) {
    return undefined;
  }
  const operator = node.getOperatorToken().getText();
  const prec = logicalPrecs.get(operator);
  if (prec === undefined) {
    return undefined;
  }
  return {
    code: `${wrap(condition(ctx, node.getLeft()), prec)} ${operator} ${wrap(condition(ctx, node.getRight()), prec + 1)}`,
    prec,
    type: 'bool',
  };
}

function truthy(node: Node, expr: Expr): Expr {
  const test = truthiness.get(expr.type);
  if (test) {
    return test(expr);
  }
  if (expr.type == 'interface{}') {
    return fail(node, 'Conditions must have a known type');
  }
  if (isNilable(expr.type)) {
    return compare(`${operand(expr)} != nil`);
  }
  return fail(node, `Unsupported condition of type ${expr.type}`);
}

/**
 * A conditional expression: a function literal that is called, as Go has no conditional operator
 */
export function conditional(ctx: Context, node: ConditionalExpression): Expr {
  const test = node.getCondition();
  const whenTrue = node.getWhenTrue();
  const whenFalse = node.getWhenFalse();
  if (isDefinedCheck(test, whenTrue)) {
    return coalesce(ctx, whenTrue, whenFalse);
  }
  const cond = condition(ctx, test);
  const a = expression(ctx, whenTrue);
  const b = expression(ctx, whenFalse);
  const type = commonType(a.type, b.type);
  return primary(
    `func() ${type} { if ${cond.code} { return ${convert(a, type, whenTrue).code} }; return ${convert(b, type, whenFalse).code} }()`,
    type,
  );
}

/**
 * `typeof x !== 'undefined'`, for the conditional `typeof x !== 'undefined' ? x : fallback`
 */
function isDefinedCheck(test: Node, value: Node): boolean {
  if (
    !Node.isBinaryExpression(test) ||
    !['!==', '!='].includes(test.getOperatorToken().getText())
  ) {
    return false;
  }
  const left = test.getLeft();
  if (!Node.isTypeOfExpression(left)) {
    return false;
  }
  return (
    test.getRight().getText().slice(1, -1) == 'undefined' &&
    left.getExpression().getText() == value.getText()
  );
}

function commonType(a: string, b: string): string {
  if (a == b) {
    return a;
  }
  if (a == 'nil' && isNilable(b)) {
    return b;
  }
  if (b == 'nil' && isNilable(a)) {
    return a;
  }
  return 'interface{}';
}

/**
 * `value ?? fallback`
 */
export function coalesce(ctx: Context, left: Node, right: Node): Expr {
  const value = raw(ctx, left);
  if (value.type == 'interface{}') {
    return primary(
      `js.Coalesce(${value.code}, ${expression(ctx, right).code})`,
      'interface{}',
    );
  }
  if (pointerScalars.includes(value.type)) {
    const type = value.type.slice(1);
    return primary(
      `js.Or(${value.code}, ${converted(ctx, right, type).code})`,
      type,
    );
  }
  return fail(left, `?? is not supported for ${value.type}`);
}
