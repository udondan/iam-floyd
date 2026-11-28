import {
  ArrayLiteralExpression,
  ConditionalExpression,
  ElementAccessExpression,
  Expression,
  Node,
  NumericLiteral,
  ObjectLiteralExpression,
  PrefixUnaryExpression,
  SyntaxKind,
  TemplateExpression,
} from 'ts-morph';

import { fail, kindOf } from '../index';
import { binary } from './binary';
import { call } from './calls';
import { thisType } from './classes';
import { condition } from './conditions';
import { Context, Expr, Prec, primary, wrap } from './context';
import { exprType } from './declared';
import { Handler, handlerOf, when } from './handlers';
import { identifier } from './identifiers';
import { typeFromType } from './inferred-types';
import { newExpression } from './instances';
import { csharpString } from './names';
import { propertyAccess } from './properties';

/**
 * The receiver of a method call or property: `this` stays `this`
 */
export function receiver(ctx: Context, node: Node): string {
  if (node.getKind() == SyntaxKind.ThisKeyword) {
    return 'this';
  }
  return wrap(expression(ctx, node), Prec.primary);
}

function numericLiteral(_ctx: Context, node: NumericLiteral): Expr {
  const value = node.getLiteralValue();
  if (!Number.isInteger(value) || Math.abs(value) > 2147483647) {
    return fail(node, 'Only integers are supported');
  }
  return primary(`${value}`);
}

function template(ctx: Context, node: TemplateExpression): Expr {
  const parts: string[] = [];
  const head = node.getHead().getLiteralText();
  if (head.length) {
    parts.push(csharpString(head));
  }
  for (const span of node.getTemplateSpans()) {
    const value = span.getExpression();
    const expr = expression(ctx, value);
    parts.push(
      kindOf(value.getType()) == 'string'
        ? wrap(expr, Prec.additive + 1)
        : `Js.ToString(${expr.code})`,
    );
    const literal = span.getLiteral().getLiteralText();
    if (literal.length) {
      parts.push(csharpString(literal));
    }
  }
  // a template has at least one span, so there is at least one part. All parts are strings, so +
  // concatenates
  return {
    code: parts.join(' + '),
    prec: parts.length == 1 ? Prec.primary : Prec.additive,
  };
}

function elementAccess(ctx: Context, node: ElementAccessExpression): Expr {
  const target = node.getExpression();
  const kind = kindOf(target.getType());
  const key = expression(ctx, node.getArgumentExpressionOrThrow()).code;
  if (kind == 'array') {
    return primary(`${receiver(ctx, target)}[${key}]`);
  }
  if (kind == 'record' || kind == 'map') {
    return primary(`${receiver(ctx, target)}.GetValueOrDefault(${key})`);
  }
  return fail(node, 'Element access is supported on arrays and records');
}

function prefixUnary(ctx: Context, node: PrefixUnaryExpression): Expr {
  const operand = node.getOperand();
  const operator = node.getOperatorToken();
  if (operator == SyntaxKind.ExclamationToken) {
    return {
      code: `!${wrap(condition(ctx, operand), Prec.unary)}`,
      prec: Prec.unary,
    };
  }
  if (operator == SyntaxKind.MinusToken) {
    return {
      code: `-${wrap(expression(ctx, operand), Prec.unary)}`,
      prec: Prec.unary,
    };
  }
  return fail(node, 'Unsupported operator');
}

function conditional(ctx: Context, node: ConditionalExpression): Expr {
  // C# needs a common type of both branches
  const whenTrue = node.getWhenTrue();
  const whenFalse = node.getWhenFalse();
  const same = exprType(ctx, whenTrue) == exprType(ctx, whenFalse);
  const branch = (branchNode: Node, min: Prec) =>
    same
      ? wrap(expression(ctx, branchNode), min)
      : `(object)${wrap(expression(ctx, branchNode), Prec.unary)}`;
  return {
    code: `${wrap(condition(ctx, node.getCondition()), Prec.coalesce)} ? ${branch(whenTrue, Prec.coalesce)} : ${branch(whenFalse, Prec.conditional)}`,
    prec: Prec.conditional,
  };
}

/**
 * The C# type of an array or object literal
 */
function literalType(ctx: Context, node: Expression): string {
  return typeFromType(
    ctx,
    node.getContextualType() ?? node.getType(),
    false,
    node,
  );
}

function arrayLiteral(ctx: Context, node: ArrayLiteralExpression): Expr {
  const elements = node.getElements();
  if (elements.some((element) => Node.isSpreadElement(element))) {
    return fail(node, 'Spread elements are not supported');
  }
  const type = literalType(ctx, node);
  if (!type.startsWith('List<')) {
    return fail(node, 'Unsupported array literal');
  }
  if (elements.length == 0) {
    return primary(`new ${type}()`);
  }
  return primary(
    `new ${type} { ${elements.map((element) => expression(ctx, element).code).join(', ')} }`,
  );
}

function objectLiteral(ctx: Context, node: ObjectLiteralExpression): Expr {
  if (node.getProperties().length) {
    return fail(node, 'Only empty object literals are supported');
  }
  const type = literalType(ctx, node);
  if (!type.startsWith('Dictionary<')) {
    return fail(node, 'Unsupported object literal');
  }
  return primary(`new ${type}()`);
}

const keywords = new Map<SyntaxKind, (ctx: Context) => string>([
  [SyntaxKind.TrueKeyword, () => 'true'],
  [SyntaxKind.FalseKeyword, () => 'false'],
  [SyntaxKind.NullKeyword, () => 'null'],
  [SyntaxKind.ThisKeyword, (ctx) => (thisType(ctx) == 'T' ? 'Self()' : 'this')],
]);

const expressions: Handler<[], Expr>[] = [
  when(Node.isParenthesizedExpression, (ctx, node) =>
    primary(`(${expression(ctx, node.getExpression()).code})`),
  ),
  when(Node.isNonNullExpression, (ctx, node) =>
    expression(ctx, node.getExpression()),
  ),
  when(Node.isStringLiteral, (_ctx, node) =>
    primary(csharpString(node.getLiteralValue())),
  ),
  when(Node.isNoSubstitutionTemplateLiteral, (_ctx, node) =>
    primary(csharpString(node.getLiteralValue())),
  ),
  when(Node.isNumericLiteral, numericLiteral),
  when(Node.isTemplateExpression, template),
  when(Node.isIdentifier, (ctx, node) => identifier(ctx, node)),
  when(Node.isPropertyAccessExpression, (ctx, node) =>
    propertyAccess(ctx, node),
  ),
  when(Node.isElementAccessExpression, elementAccess),
  when(Node.isCallExpression, (ctx, node) => call(ctx, node)),
  when(Node.isNewExpression, (ctx, node) => newExpression(ctx, node)),
  when(Node.isBinaryExpression, (ctx, node) => binary(ctx, node)),
  when(Node.isPrefixUnaryExpression, prefixUnary),
  when(Node.isConditionalExpression, conditional),
  when(Node.isTypeOfExpression, (ctx, node) =>
    primary(`Js.Typeof(${expression(ctx, node.getExpression()).code})`),
  ),
  when(Node.isArrayLiteralExpression, arrayLiteral),
  when(Node.isObjectLiteralExpression, objectLiteral),
];

export function expression(ctx: Context, node: Node): Expr {
  const keyword = keywords.get(node.getKind());
  if (keyword) {
    return primary(keyword(ctx));
  }
  const handler = handlerOf(expressions, node);
  if (handler === undefined) {
    return fail(node, 'Unsupported expression');
  }
  return handler.handle(ctx, node);
}
