import { Expression, Node, SyntaxKind, TemplateExpression } from 'ts-morph';

import { fail, kindOf } from '../index';
import { call, newExpression } from './calls';
import { thisType } from './classes';
import { condition } from './conditions';
import { Context } from './context';
import { Expr, Prec, prefixed, primary, wrap } from './expr';
import { javaString } from './names';
import { binary } from './operators';
import { identifier, propertyAccess } from './properties';

type ExpressionOf = (ctx: Context, node: Node) => Expr;

const maxInt = 2147483647;

/**
 * The receiver of a method call or property: `this` stays `this`
 */
export function receiver(ctx: Context, node: Node): string {
  if (node.getKind() == SyntaxKind.ThisKeyword) {
    return 'this';
  }
  return wrap(expression(ctx, node), Prec.primary);
}

/**
 * A value in a string concatenation: strings as they are, other values converted like JavaScript
 */
export function stringPart(ctx: Context, node: Node, min: Prec): string {
  const expr = expression(ctx, node);
  return kindOf(node.getType()) == 'string'
    ? wrap(expr, min)
    : `Js.toString(${expr.code})`;
}

function template(ctx: Context, node: TemplateExpression): Expr {
  const parts: string[] = [];
  const add = (literal: string) => {
    if (literal.length) {
      parts.push(javaString(literal));
    }
  };
  add(node.getHead().getLiteralText());
  for (const span of node.getTemplateSpans()) {
    parts.push(stringPart(ctx, span.getExpression(), Prec.additive + 1));
    add(span.getLiteral().getLiteralText());
  }
  // never empty: a template has at least one span
  return {
    code: parts.join(' + '),
    prec: parts.length == 1 ? Prec.primary : Prec.additive,
  };
}

function numericLiteral(_ctx: Context, node: Node): Expr {
  const value = node.asKindOrThrow(SyntaxKind.NumericLiteral).getLiteralValue();
  if (!Number.isInteger(value) || Math.abs(value) > maxInt) {
    return fail(node, 'Only integers are supported');
  }
  return primary(`${value}`);
}

function stringLiteral(_ctx: Context, node: Node): Expr {
  const literal = node as Node & { getLiteralValue(): string };
  return primary(javaString(literal.getLiteralValue()));
}

function elementAccess(ctx: Context, node: Node): Expr {
  const access = node.asKindOrThrow(SyntaxKind.ElementAccessExpression);
  const object = access.getExpression();
  if (!['array', 'record', 'map'].includes(kindOf(object.getType()))) {
    return fail(node, 'Element access is supported on arrays and records');
  }
  return primary(
    `${receiver(ctx, object)}.get(${expression(ctx, access.getArgumentExpressionOrThrow()).code})`,
  );
}

const prefixOperators = new Map<
  SyntaxKind,
  (ctx: Context, operand: Expression) => Expr
>([
  [
    SyntaxKind.ExclamationToken,
    (ctx, operand) => prefixed('!', condition(ctx, operand)),
  ],
  [
    SyntaxKind.MinusToken,
    (ctx, operand) => prefixed('-', expression(ctx, operand)),
  ],
]);

function prefixUnary(ctx: Context, node: Node): Expr {
  const unary = node.asKindOrThrow(SyntaxKind.PrefixUnaryExpression);
  const operator = prefixOperators.get(unary.getOperatorToken());
  if (operator === undefined) {
    return fail(node, 'Unsupported operator');
  }
  return operator(ctx, unary.getOperand());
}

function conditional(ctx: Context, node: Node): Expr {
  const ternary = node.asKindOrThrow(SyntaxKind.ConditionalExpression);
  return {
    code: `${wrap(condition(ctx, ternary.getCondition()), Prec.or)} ? ${wrap(expression(ctx, ternary.getWhenTrue()), Prec.or)} : ${wrap(expression(ctx, ternary.getWhenFalse()), Prec.conditional)}`,
    prec: Prec.conditional,
  };
}

function arrayLiteral(ctx: Context, node: Node): Expr {
  const elements = node
    .asKindOrThrow(SyntaxKind.ArrayLiteralExpression)
    .getElements();
  if (elements.some((element) => Node.isSpreadElement(element))) {
    return fail(node, 'Spread elements are not supported');
  }
  if (elements.length == 0) {
    return primary('new ArrayList<>()');
  }
  const values = elements.map((element) => expression(ctx, element).code);
  return primary(`new ArrayList<>(Arrays.asList(${values.join(', ')}))`);
}

function objectLiteral(_ctx: Context, node: Node): Expr {
  if (
    node.asKindOrThrow(SyntaxKind.ObjectLiteralExpression).getProperties()
      .length
  ) {
    return fail(node, 'Only empty object literals are supported');
  }
  return primary('new LinkedHashMap<>()');
}

/**
 * The expression inside of a wrapper node, e.g. `(a)` or `a!`
 */
function inner(node: Node): Node {
  return (node as Node & { getExpression(): Node }).getExpression();
}

const expressions = new Map<SyntaxKind, ExpressionOf>([
  [
    SyntaxKind.ParenthesizedExpression,
    (ctx, node) => primary(`(${expression(ctx, inner(node)).code})`),
  ],
  [SyntaxKind.NonNullExpression, (ctx, node) => expression(ctx, inner(node))],
  [SyntaxKind.StringLiteral, stringLiteral],
  [SyntaxKind.NoSubstitutionTemplateLiteral, stringLiteral],
  [SyntaxKind.NumericLiteral, numericLiteral],
  [SyntaxKind.TrueKeyword, () => primary('true')],
  [SyntaxKind.FalseKeyword, () => primary('false')],
  [SyntaxKind.NullKeyword, () => primary('null')],
  [
    SyntaxKind.ThisKeyword,
    (ctx) => primary(thisType(ctx) == 'T' ? 'self()' : 'this'),
  ],
  [
    SyntaxKind.TemplateExpression,
    (ctx, node) => template(ctx, node as TemplateExpression),
  ],
  [SyntaxKind.Identifier, (ctx, node) => identifier(ctx, node)],
  [
    SyntaxKind.PropertyAccessExpression,
    (ctx, node) =>
      propertyAccess(
        ctx,
        node.asKindOrThrow(SyntaxKind.PropertyAccessExpression),
      ),
  ],
  [SyntaxKind.ElementAccessExpression, elementAccess],
  [
    SyntaxKind.CallExpression,
    (ctx, node) => call(ctx, node.asKindOrThrow(SyntaxKind.CallExpression)),
  ],
  [
    SyntaxKind.NewExpression,
    (ctx, node) =>
      newExpression(ctx, node.asKindOrThrow(SyntaxKind.NewExpression)),
  ],
  [
    SyntaxKind.BinaryExpression,
    (ctx, node) => binary(ctx, node.asKindOrThrow(SyntaxKind.BinaryExpression)),
  ],
  [SyntaxKind.PrefixUnaryExpression, prefixUnary],
  [SyntaxKind.ConditionalExpression, conditional],
  [
    SyntaxKind.TypeOfExpression,
    (ctx, node) => primary(`Js.typeof(${expression(ctx, inner(node)).code})`),
  ],
  [SyntaxKind.ArrayLiteralExpression, arrayLiteral],
  [SyntaxKind.ObjectLiteralExpression, objectLiteral],
]);

export function expression(ctx: Context, node: Node): Expr {
  const handler = expressions.get(node.getKind());
  if (handler === undefined) {
    return fail(node, 'Unsupported expression');
  }
  return handler(ctx, node);
}
