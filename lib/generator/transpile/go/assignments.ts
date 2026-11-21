import {
  BinaryExpression,
  CallExpression,
  ElementAccessExpression,
  Node,
  PropertyAccessExpression,
  SyntaxKind,
} from 'ts-morph';

import { fail, kindOf, resolve } from '../index';
import { entryLookup, receiverOf } from './access';
import { Context, firstOf } from './context';
import {
  assigned,
  convert,
  converted,
  elements,
  entryTypes,
} from './conversions';
import { declarationOf, field, local } from './declarations';
import { Expr, Prec, value, wrap } from './expr';
import { expression } from './expressions';
import { goString } from './names';
import { isRecordOrMap, isThisProperty, unwrapped } from './syntax';

const simpleStatements: ((ctx: Context, node: Node) => string | undefined)[] = [
  assignmentStatement,
  increment,
  callStatement,
];

/**
 * An assignment, increment or call
 */
export function simpleStatement(ctx: Context, node: Node): string {
  return (
    firstOf(simpleStatements, ctx, node) ??
    fail(node, 'Unsupported expression statement')
  );
}

const assignmentOperators = ['=', '+=', '-='];

function assignmentStatement(ctx: Context, node: Node): string | undefined {
  if (!Node.isBinaryExpression(node)) {
    return undefined;
  }
  const operator = node.getOperatorToken().getText();
  return assignmentOperators.includes(operator)
    ? assignment(ctx, node, operator)
    : undefined;
}

const increments = new Map([
  [SyntaxKind.PlusPlusToken, '++'],
  [SyntaxKind.MinusMinusToken, '--'],
]);

function increment(ctx: Context, node: Node): string | undefined {
  if (
    !Node.isPostfixUnaryExpression(node) &&
    !Node.isPrefixUnaryExpression(node)
  ) {
    return undefined;
  }
  const operator = increments.get(node.getOperatorToken());
  return operator && `${target(ctx, node.getOperand()).code}${operator}`;
}

function callStatement(ctx: Context, node: Node): string | undefined {
  if (!Node.isCallExpression(node)) {
    return undefined;
  }
  const callee = node.getExpression();
  if (
    Node.isPropertyAccessExpression(callee) &&
    callee.getName() == 'push' &&
    kindOf(callee.getExpression().getType()) == 'array'
  ) {
    return push(ctx, node, callee);
  }
  return expression(ctx, node).code;
}

/**
 * `list.push(…)`: append to the variable, the field or the value in the record
 */
function push(
  ctx: Context,
  node: CallExpression,
  callee: PropertyAccessExpression,
): string {
  const receiver = unwrapped(callee.getExpression());
  const list = expression(ctx, receiver);
  const [, element] = elements(list, receiver);
  const args = node
    .getArguments()
    .map((arg) => pushArgument(ctx, arg, list.type, element));
  if (
    args.length > 1 &&
    node.getArguments().some((arg) => Node.isSpreadElement(arg))
  ) {
    return fail(node, 'Spread arguments must be the only argument of push');
  }
  const appended = `append(${[list.code, ...args].join(', ')})`;
  if (Node.isElementAccessExpression(receiver)) {
    return recordPush(ctx, node, receiver, appended);
  }
  return `${target(ctx, receiver).code} = ${appended}`;
}

function pushArgument(
  ctx: Context,
  arg: Node,
  listType: string,
  element: string,
): string {
  if (Node.isSpreadElement(arg)) {
    return `${converted(ctx, arg.getExpression(), listType).code}...`;
  }
  return converted(ctx, arg, element).code;
}

/**
 * `record[key].push(…)`: sets the appended list in the record
 */
function recordPush(
  ctx: Context,
  node: CallExpression,
  receiver: ElementAccessExpression,
  appended: string,
): string {
  const record = receiver.getExpression();
  if (!isRecordOrMap(kindOf(record.getType()))) {
    return fail(node, 'Unsupported push');
  }
  const key = converted(
    ctx,
    receiver.getArgumentExpressionOrThrow(),
    'string',
  ).code;
  return `${receiverOf(ctx, record)}.Set(${key}, ${appended})`;
}

/**
 * A variable or field that is assigned to
 */
function target(ctx: Context, node: Node): Expr {
  if (Node.isIdentifier(node)) {
    const declaration = declarationOf(node);
    return declaration
      ? local(ctx, node, declaration)
      : unsupportedTarget(node);
  }
  if (isThisProperty(node)) {
    const declaration = resolve(node.getNameNode())[0];
    return Node.isPropertyDeclaration(declaration)
      ? field(ctx, declaration)
      : unsupportedTarget(node);
  }
  return unsupportedTarget(node);
}

function unsupportedTarget(node: Node): never {
  return fail(node, 'Unsupported assignment target');
}

function assignment(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): string {
  const left = node.getLeft();
  if (Node.isElementAccessExpression(left)) {
    return elementAssignment(ctx, node, left, operator);
  }
  if (
    Node.isPropertyAccessExpression(left) &&
    ['record', 'any'].includes(kindOf(left.getExpression().getType()))
  ) {
    return propertyAssignment(ctx, node, left, operator);
  }
  return variableAssignment(ctx, node, operator);
}

/**
 * Only `=` is supported for elements and properties of records
 */
function checkPlainAssignment(node: BinaryExpression, operator: string) {
  if (operator != '=') {
    fail(node, 'Unsupported assignment');
  }
}

/**
 * `list[index] = value` or `record[key] = value`
 */
function elementAssignment(
  ctx: Context,
  node: BinaryExpression,
  left: ElementAccessExpression,
  operator: string,
): string {
  checkPlainAssignment(node, operator);
  const right = node.getRight();
  const receiverNode = left.getExpression();
  const kind = kindOf(receiverNode.getType());
  const receiver = expression(ctx, receiverNode);
  const index = left.getArgumentExpressionOrThrow();
  if (kind == 'array') {
    const [, element] = elements(receiver, receiverNode);
    return `${wrap(receiver, Prec.primary)}[${converted(ctx, index, 'int').code}] = ${assigned(ctx, right, element).code}`;
  }
  if (isRecordOrMap(kind)) {
    const lookup = entryLookup(ctx, receiver, receiverNode, index);
    return `${lookup.receiver}.Set(${lookup.key}, ${assigned(ctx, right, lookup.valueType).code})`;
  }
  return fail(node, 'Unsupported assignment');
}

/**
 * `record.key = value`
 */
function propertyAssignment(
  ctx: Context,
  node: BinaryExpression,
  left: PropertyAccessExpression,
  operator: string,
): string {
  checkPlainAssignment(node, operator);
  const right = node.getRight();
  const receiverNode = left.getExpression();
  const receiver = expression(ctx, receiverNode);
  const [, valueType] = entryTypes(receiver.type, receiverNode);
  return `${wrap(receiver, Prec.primary)}.Set(${goString(left.getName())}, ${assigned(ctx, right, valueType).code})`;
}

function variableAssignment(
  ctx: Context,
  node: BinaryExpression,
  operator: string,
): string {
  const right = node.getRight();
  const variable = target(ctx, node.getLeft());
  if (operator == '=') {
    return `${variable.code} = ${assigned(ctx, right, variable.type).code}`;
  }
  const change = value(expression(ctx, right));
  if (!['string', 'int'].includes(variable.type)) {
    return fail(node, `${operator} is supported for strings and numbers`);
  }
  return `${variable.code} ${operator} ${convert(change, variable.type, right).code}`;
}
