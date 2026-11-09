import {
  ArrayLiteralExpression,
  ConditionalExpression,
  Expression,
  NewExpression,
  Node,
  ObjectLiteralElementLike,
  ObjectLiteralExpression,
  PrefixUnaryExpression,
  SyntaxKind,
  TemplateExpression,
} from 'ts-morph';

import { fail, kindOf } from '../index';
import { elementAccess, identifier, propertyAccess } from './access';
import { binary } from './binary';
import { call } from './calls';
import {
  atom,
  Context,
  dispatch,
  Expr,
  Handler,
  isClassReference,
  on,
  Prec,
  primary,
  wrap,
} from './context';
import { pyString } from './strings';
import { checkTruthiness } from './truthiness';

function template(ctx: Context, node: TemplateExpression): Expr {
  const parts: string[] = [];
  const head = node.getHead().getLiteralText();
  if (head.length) {
    parts.push(pyString(head));
  }
  for (const span of node.getTemplateSpans()) {
    const value = span.getExpression();
    const code = expression(ctx, value);
    parts.push(
      kindOf(value.getType()) == 'string'
        ? wrap(code, Prec.additive + 1)
        : `_js.to_string(${code.code})`,
    );
    const text = span.getLiteral().getLiteralText();
    if (text.length) {
      parts.push(pyString(text));
    }
  }
  if (parts.length == 1) {
    return { code: parts[0], prec: Prec.additive + 1 };
  }
  return { code: parts.join(' + '), prec: Prec.additive };
}

function newExpression(ctx: Context, node: NewExpression): Expr {
  const constructor = node.getExpression();
  const name = constructor.getText();
  const args = (node.getArguments() as Expression[]).map(
    (arg) => expression(ctx, arg).code,
  );
  if ((name == 'Set' || name == 'Map') && args.length == 0) {
    return atom('{}');
  }
  if (name == 'RegExp') {
    return primary(`_js.reg_exp(${args.join(', ')})`);
  }
  if (isClassReference(constructor)) {
    return primary(`${name}(${args.join(', ')})`);
  }
  return fail(node, 'Unsupported constructor');
}

function arrayLiteral(ctx: Context, node: ArrayLiteralExpression): Expr {
  const elements = node.getElements().map((element) => {
    if (Node.isSpreadElement(element)) {
      fail(element, 'Spread is not supported');
    }
    return expression(ctx, element).code;
  });
  return atom(`[${elements.join(', ')}]`);
}

function objectProperty(
  ctx: Context,
  property: ObjectLiteralElementLike,
): string {
  if (!Node.isPropertyAssignment(property)) {
    return fail(property, 'Unsupported object literal');
  }
  const name = property.getNameNode();
  if (!Node.isIdentifier(name) && !Node.isStringLiteral(name)) {
    fail(property, 'Unsupported property name');
  }
  const key = Node.isStringLiteral(name)
    ? name.getLiteralText()
    : name.getText();
  return `${pyString(key)}: ${expression(ctx, property.getInitializerOrThrow()).code}`;
}

function objectLiteral(ctx: Context, node: ObjectLiteralExpression): Expr {
  const properties = node
    .getProperties()
    .map((property) => objectProperty(ctx, property));
  return atom(`{${properties.join(', ')}}`);
}

function conditional(ctx: Context, node: ConditionalExpression): Expr {
  checkTruthiness(node.getCondition());
  return {
    code: `${wrap(expression(ctx, node.getWhenTrue()), Prec.or)} if ${wrap(expression(ctx, node.getCondition()), Prec.or)} else ${wrap(expression(ctx, node.getWhenFalse()), Prec.conditional)}`,
    prec: Prec.conditional,
  };
}

function not(ctx: Context, operand: Expression): Expr {
  checkTruthiness(operand);
  const value = expression(ctx, operand);
  if (value.negated !== undefined) {
    return { code: value.negated, prec: Prec.comparison };
  }
  return { code: `not ${wrap(value, Prec.not)}`, prec: Prec.not };
}

function prefixUnary(ctx: Context, node: PrefixUnaryExpression): Expr {
  const operand = node.getOperand();
  switch (node.getOperatorToken()) {
    case SyntaxKind.ExclamationToken:
      return not(ctx, operand);
    case SyntaxKind.MinusToken:
      return {
        code: `-${wrap(expression(ctx, operand), Prec.unary)}`,
        prec: Prec.unary,
      };
  }
  return fail(node, 'Unsupported unary operator');
}

function inner(ctx: Context, node: { getExpression(): Expression }): Expr {
  return expression(ctx, node.getExpression());
}

const keywords = new Map<SyntaxKind, string>([
  [SyntaxKind.TrueKeyword, 'True'],
  [SyntaxKind.FalseKeyword, 'False'],
  [SyntaxKind.NullKeyword, 'None'],
  [SyntaxKind.ThisKeyword, 'self'],
]);

const handlers = new Map<SyntaxKind, Handler<Expr>>([
  on(SyntaxKind.StringLiteral, (_, node) =>
    atom(pyString(node.getLiteralText())),
  ),
  on(SyntaxKind.NoSubstitutionTemplateLiteral, (_, node) =>
    atom(pyString(node.getLiteralText())),
  ),
  on(SyntaxKind.NumericLiteral, (_, node) =>
    atom(String(node.getLiteralValue())),
  ),
  on(SyntaxKind.TemplateExpression, template),
  on(SyntaxKind.Identifier, (_, node) => identifier(node)),
  on(SyntaxKind.ParenthesizedExpression, inner),
  on(SyntaxKind.NonNullExpression, inner),
  on(SyntaxKind.AsExpression, inner),
  on(SyntaxKind.TypeAssertionExpression, inner),
  on(SyntaxKind.PropertyAccessExpression, (ctx, node) =>
    propertyAccess(ctx, node, false),
  ),
  on(SyntaxKind.ElementAccessExpression, (ctx, node) =>
    elementAccess(ctx, node, false),
  ),
  on(SyntaxKind.CallExpression, (ctx, node) => call(ctx, node)),
  on(SyntaxKind.NewExpression, newExpression),
  on(SyntaxKind.ArrayLiteralExpression, arrayLiteral),
  on(SyntaxKind.ObjectLiteralExpression, objectLiteral),
  on(SyntaxKind.ConditionalExpression, conditional),
  on(SyntaxKind.PrefixUnaryExpression, prefixUnary),
  on(SyntaxKind.TypeOfExpression, (ctx, node) =>
    primary(`_js.typeof(${expression(ctx, node.getExpression()).code})`),
  ),
  on(SyntaxKind.BinaryExpression, (ctx, node) => binary(ctx, node)),
  on(SyntaxKind.ArrowFunction, (_, node) =>
    fail(node, 'Arrow functions are supported only in filter, map and forEach'),
  ),
]);

export function expression(ctx: Context, node: Expression): Expr {
  const keyword = keywords.get(node.getKind());
  if (keyword !== undefined) {
    return atom(keyword);
  }
  return dispatch(handlers, ctx, node, 'Unsupported expression');
}
