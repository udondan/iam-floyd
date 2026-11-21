import {
  ClassDeclaration,
  Identifier,
  Node,
  PropertyAccessExpression,
  SyntaxKind,
  TemplateExpression,
  VariableDeclaration,
} from 'ts-morph';

import { fail, kindOf, resolve } from '../index';
import { className, fieldName, thisType } from './classes';
import { Context, firstOf } from './context';
import { converted, elements, entryTypes } from './conversions';
import { declarationOf, declaredType, local, narrowed } from './declarations';
import { Expr, Prec, primary, stringOperand, value, wrap } from './expr';
import { expression } from './expressions';
import { camelCase, goConstantName, goString } from './names';
import { isCallOf } from './syntax';

export function identifier(ctx: Context, node: Identifier): Expr {
  const name = node.getText();
  if (name == 'undefined') {
    return primary('nil', 'nil');
  }
  const declaration = resolve(node)[0];
  if (declaration === undefined) {
    return fail(node, 'Unresolved identifier');
  }
  if (isModuleConstant(declaration)) {
    return moduleConstant(ctx, node, declaration);
  }
  const variable = declarationOf(node);
  if (variable === undefined) {
    return fail(node, 'Unsupported identifier');
  }
  return narrowed(ctx, local(ctx, node, variable), node);
}

function isModuleConstant(node: Node): node is VariableDeclaration {
  return (
    Node.isVariableDeclaration(node) &&
    Node.isSourceFile(node.getVariableStatement()?.getParent())
  );
}

function moduleConstant(
  ctx: Context,
  node: Identifier,
  declaration: VariableDeclaration,
): Expr {
  const type = ctx.declared.get(declaration);
  if (type === undefined) {
    return fail(node, 'Constants must be declared before they are used');
  }
  return primary(
    ctx.qualify(node, declaration, camelCase(node.getText())),
    type,
  );
}

export function template(ctx: Context, node: TemplateExpression): Expr {
  const parts = literalPart(node.getHead().getLiteralText());
  for (const span of node.getTemplateSpans()) {
    const expr = value(expression(ctx, span.getExpression()));
    parts.push(stringOperand(expr, Prec.add + 1));
    parts.push(...literalPart(span.getLiteral().getLiteralText()));
  }
  return {
    code: parts.join(' + '),
    prec: parts.length == 1 ? Prec.primary : Prec.add,
    type: 'string',
  };
}

/**
 * A literal part of a template, if it is not empty
 */
function literalPart(text: string): string[] {
  return text.length ? [goString(text)] : [];
}

type PropertyHandler = (
  ctx: Context,
  node: PropertyAccessExpression,
  declaration: Node | undefined,
) => Expr | undefined;

const properties: PropertyHandler[] = [
  enumMember,
  staticConstant,
  length,
  fieldAccess,
  recordProperty,
];

export function propertyAccess(
  ctx: Context,
  node: PropertyAccessExpression,
): Expr {
  const declaration = resolve(node.getNameNode())[0];
  return (
    firstOf(properties, ctx, node, declaration) ??
    fail(node, 'Unsupported property')
  );
}

function enumMember(
  ctx: Context,
  node: PropertyAccessExpression,
  declaration: Node | undefined,
): Expr | undefined {
  if (!Node.isEnumMember(declaration)) {
    return undefined;
  }
  const enumDeclaration = declaration.getParent();
  return primary(
    ctx.qualify(
      node,
      enumDeclaration,
      goConstantName(enumDeclaration.getName(), node.getName()),
    ),
    'string',
  );
}

function staticConstant(
  ctx: Context,
  node: PropertyAccessExpression,
  declaration: Node | undefined,
): Expr | undefined {
  if (!Node.isPropertyDeclaration(declaration) || !declaration.isStatic()) {
    return undefined;
  }
  const cls = declaration.getParent() as ClassDeclaration;
  return primary(
    ctx.qualify(node, cls, goConstantName(className(cls), node.getName())),
    'string',
  );
}

/**
 * `length` of a string, an array or the keys of a record
 */
function length(
  ctx: Context,
  node: PropertyAccessExpression,
): Expr | undefined {
  if (node.getName() != 'length') {
    return undefined;
  }
  const receiverNode = node.getExpression();
  if (isCallOf(receiverNode, 'Object.keys')) {
    const record = expression(ctx, receiverNode.getArguments()[0]);
    return primary(`${wrap(record, Prec.primary)}.Len()`, 'int');
  }
  const receiver = value(expression(ctx, receiverNode));
  if (receiver.type == 'string') {
    return primary(`js.Length(${receiver.code})`, 'int');
  }
  if (receiver.type.startsWith('[]') || receiver.type.startsWith('*[]')) {
    const [list] = elements(receiver, receiverNode);
    return primary(`len(${list.code})`, 'int');
  }
  return fail(node, 'Unsupported length');
}

function fieldAccess(
  ctx: Context,
  node: PropertyAccessExpression,
  declaration: Node | undefined,
): Expr | undefined {
  if (!Node.isPropertyDeclaration(declaration)) {
    return undefined;
  }
  const code = `${receiverOf(ctx, node.getExpression())}.${fieldName(declaration)}`;
  return narrowed(ctx, primary(code, declaredType(ctx, declaration)), node);
}

/**
 * `record.key`
 */
function recordProperty(
  ctx: Context,
  node: PropertyAccessExpression,
): Expr | undefined {
  const receiverNode = node.getExpression();
  if (kindOf(receiverNode.getType()) != 'record') {
    return undefined;
  }
  const receiver = expression(ctx, receiverNode);
  const [, valueType] = entryTypes(receiver.type, receiverNode);
  return primary(
    `${wrap(receiver, Prec.primary)}.Get(${goString(node.getName())})`,
    valueType,
  );
}

/**
 * The receiver of a method call or property: `this` stays `this`
 */
export function receiverOf(ctx: Context, node: Node): string {
  if (node.getKind() == SyntaxKind.ThisKeyword) {
    return 'this';
  }
  return wrap(expression(ctx, node), Prec.primary);
}

export function receiverTypeOf(ctx: Context, node: Node): string {
  if (node.getKind() == SyntaxKind.ThisKeyword) {
    return thisType(ctx);
  }
  return expression(ctx, node).type;
}

/**
 * The receiver, the key and the type of the values of an access to a record or map
 */
export interface EntryLookup {
  receiver: string;
  key: string;
  valueType: string;
}

export function entryLookup(
  ctx: Context,
  receiver: Expr,
  receiverNode: Node,
  keyNode: Node,
): EntryLookup {
  const [keyType, valueType] = entryTypes(receiver.type, receiverNode);
  return {
    receiver: wrap(receiver, Prec.primary),
    key: converted(ctx, keyNode, keyType).code,
    valueType,
  };
}
