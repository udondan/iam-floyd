import {
  ArrayLiteralExpression,
  ElementAccessExpression,
  Expression,
  Node,
  NumericLiteral,
  ObjectLiteralExpression,
  PrefixUnaryExpression,
  SyntaxKind,
} from 'ts-morph';

import { fail, kindOf } from '../index';
import { entryLookup, identifier, propertyAccess, template } from './access';
import { call, newExpression } from './calls';
import { thisType } from './classes';
import { condition, conditional } from './conditions';
import { byKind, Context } from './context';
import { converted, elements, typed } from './conversions';
import { normalized } from './declarations';
import { Expr, Prec, primary, value, wrap } from './expr';
import { typeFromType } from './inferred-types';
import { goString } from './names';
import { binary } from './operators';
import { isRecordOrMap } from './syntax';

const expressions = new Map<SyntaxKind, (ctx: Context, node: Node) => Expr>([
  byKind(SyntaxKind.ParenthesizedExpression, (ctx, node) => {
    const inner = expression(ctx, node.getExpression());
    return { ...inner, code: `(${inner.code})`, prec: Prec.primary };
  }),
  byKind(SyntaxKind.NonNullExpression, (ctx, node) =>
    expression(ctx, node.getExpression()),
  ),
  byKind(SyntaxKind.StringLiteral, (_ctx, node) =>
    primary(goString(node.getLiteralValue()), 'string'),
  ),
  byKind(SyntaxKind.NoSubstitutionTemplateLiteral, (_ctx, node) =>
    primary(goString(node.getLiteralValue()), 'string'),
  ),
  byKind(SyntaxKind.NumericLiteral, (_ctx, node) => numericLiteral(node)),
  byKind(SyntaxKind.TrueKeyword, () => primary('true', 'bool')),
  byKind(SyntaxKind.FalseKeyword, () => primary('false', 'bool')),
  byKind(SyntaxKind.NullKeyword, () => primary('nil', 'nil')),
  byKind(SyntaxKind.ThisKeyword, (ctx) => thisExpression(ctx)),
  byKind(SyntaxKind.TemplateExpression, (ctx, node) => template(ctx, node)),
  byKind(SyntaxKind.Identifier, (ctx, node) => identifier(ctx, node)),
  byKind(SyntaxKind.PropertyAccessExpression, (ctx, node) =>
    propertyAccess(ctx, node),
  ),
  byKind(SyntaxKind.ElementAccessExpression, (ctx, node) =>
    elementAccess(ctx, node),
  ),
  byKind(SyntaxKind.CallExpression, (ctx, node) => call(ctx, node)),
  byKind(SyntaxKind.NewExpression, (ctx, node) => newExpression(ctx, node)),
  byKind(SyntaxKind.BinaryExpression, (ctx, node) => binary(ctx, node)),
  byKind(SyntaxKind.PrefixUnaryExpression, (ctx, node) =>
    prefixUnary(ctx, node),
  ),
  byKind(SyntaxKind.ConditionalExpression, (ctx, node) =>
    conditional(ctx, node),
  ),
  byKind(SyntaxKind.TypeOfExpression, (ctx, node) =>
    primary(`js.TypeOf(${normalized(ctx, node.getExpression())})`, 'string'),
  ),
  byKind(SyntaxKind.ArrayLiteralExpression, (ctx, node) =>
    arrayLiteral(ctx, node),
  ),
  byKind(SyntaxKind.ObjectLiteralExpression, (ctx, node) =>
    objectLiteral(ctx, node),
  ),
]);

/**
 * A TypeScript expression as Go expression
 */
export function expression(ctx: Context, node: Node): Expr {
  const handler = expressions.get(node.getKind());
  if (handler === undefined) {
    return fail(node, 'Unsupported expression');
  }
  return handler(ctx, node);
}

function numericLiteral(node: NumericLiteral): Expr {
  const literal = node.getLiteralValue();
  if (!Number.isInteger(literal) || Math.abs(literal) > 2147483647) {
    return fail(node, 'Only integers are supported');
  }
  return primary(`${literal}`, 'int');
}

/**
 * `this`, which is the field `self` in classes with a type parameter
 */
function thisExpression(ctx: Context): Expr {
  const type = thisType(ctx);
  return type == 'T' ? primary('this.self', 'T') : primary('this', type);
}

function elementAccess(ctx: Context, node: ElementAccessExpression): Expr {
  const receiverNode = node.getExpression();
  const kind = kindOf(receiverNode.getType());
  const index = node.getArgumentExpressionOrThrow();
  const receiver = expression(ctx, receiverNode);
  if (kind == 'array') {
    const [list, element] = elements(receiver, receiverNode);
    return primary(
      `${wrap(list, Prec.primary)}[${converted(ctx, index, 'int').code}]`,
      element,
    );
  }
  if (isRecordOrMap(kind)) {
    const lookup = entryLookup(ctx, receiver, receiverNode, index);
    return primary(`${lookup.receiver}.Get(${lookup.key})`, lookup.valueType);
  }
  return fail(node, 'Element access is supported on arrays and records');
}

const prefixOperators = new Map<
  SyntaxKind,
  (ctx: Context, operand: Node) => Expr
>([
  [
    SyntaxKind.ExclamationToken,
    (ctx, operand) => ({
      code: `!${wrap(condition(ctx, operand), Prec.unary)}`,
      prec: Prec.unary,
      type: 'bool',
    }),
  ],
  [
    SyntaxKind.MinusToken,
    (ctx, operand) => {
      const negated = value(expression(ctx, operand));
      return {
        code: `-${wrap(negated, Prec.unary)}`,
        prec: Prec.unary,
        type: negated.type,
      };
    },
  ],
]);

function prefixUnary(ctx: Context, node: PrefixUnaryExpression): Expr {
  const handler = prefixOperators.get(node.getOperatorToken());
  if (handler === undefined) {
    return fail(node, 'Unsupported operator');
  }
  return handler(ctx, node.getOperand());
}

/**
 * The Go type of a literal: from the type it is assigned to, if any
 */
function contextualType(ctx: Context, node: Expression): string {
  return typeFromType(
    ctx,
    node.getContextualType() ?? node.getType(),
    false,
    node,
  );
}

function arrayLiteral(ctx: Context, node: ArrayLiteralExpression): Expr {
  const items = node.getElements();
  if (items.some((item) => Node.isSpreadElement(item))) {
    return fail(node, 'Spread elements are not supported');
  }
  const type = contextualType(ctx, node);
  if (!type.startsWith('[]')) {
    return fail(node, 'Unsupported array literal');
  }
  const element = type.slice(2);
  const values = items.map((item) => converted(ctx, item, element).code);
  return primary(`${type}{${values.join(', ')}}`, type);
}

function objectLiteral(ctx: Context, node: ObjectLiteralExpression): Expr {
  if (node.getProperties().length) {
    return fail(node, 'Only empty object literals are supported');
  }
  return typed(ctx, node, contextualType(ctx, node));
}
