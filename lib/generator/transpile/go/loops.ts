import {
  ArrayBindingPattern,
  ArrowFunction,
  BindingElement,
  CallExpression,
  ForOfStatement,
  ForStatement,
  Node,
  PropertyAccessExpression,
  SyntaxKind,
  VariableDeclaration,
} from 'ts-morph';

import { arrowFunction, fail, kindOf, resolve } from '../index';
import { simpleStatement } from './assignments';
import { condition } from './conditions';
import { Context } from './context';
import { elements, entryTypes } from './conversions';
import { Prec, wrap } from './expr';
import { expression } from './expressions';
import { goLocalName } from './names';
import { statement } from './statements';
import { isCallOf, isSingleDeclaration } from './syntax';

export function forOfStatement(ctx: Context, node: ForOfStatement) {
  const initializer = node.getInitializer();
  if (!isSingleDeclaration(initializer)) {
    return fail(node, 'Unsupported loop variable');
  }
  const declaration = initializer.getDeclarations()[0];
  const nameNode = declaration.getNameNode();
  if (Node.isArrayBindingPattern(nameNode)) {
    entriesLoop(ctx, node, nameNode);
  } else {
    valuesLoop(ctx, node, declaration);
  }
}

/**
 * A loop over the entries of a map or record, destructured into key and value
 */
function entriesLoop(
  ctx: Context,
  node: ForOfStatement,
  pattern: ArrayBindingPattern,
) {
  const iterable = entriesSource(node);
  const [key, value] = entryBindings(node, pattern);
  const body = node.getStatement();
  const source = expression(ctx, iterable);
  const [keyType, valueType] = entryTypes(source.type, iterable);
  ctx.declared.set(key, keyType);
  ctx.declared.set(value, valueType);
  const keyUsed = key.getName() != '_' && isUsed(key, body);
  const valueUsed = isUsed(value, body);
  const receiver = wrap(source, Prec.primary);
  if (!keyUsed) {
    const name = valueUsed ? goLocalName(value.getName()) : '_';
    ctx.braces(`for _, ${name} := range ${receiver}.Values()`, () =>
      statement(ctx, body),
    );
    return;
  }
  const entry = ctx.dummy('entry');
  ctx.braces(`for _, ${entry} := range ${receiver}.Entries()`, () => {
    ctx.emit(`${goLocalName(key.getName())} := ${entry}.Key`);
    if (valueUsed) {
      ctx.emit(`${goLocalName(value.getName())} := ${entry}.Value`);
    }
    statement(ctx, body);
  });
}

/**
 * The map or record of a loop over entries: the argument of `Object.entries` or a map
 */
function entriesSource(node: ForOfStatement): Node {
  const iterable = node.getExpression();
  if (isCallOf(iterable, 'Object.entries')) {
    return iterable.getArguments()[0];
  }
  if (kindOf(iterable.getType()) != 'map') {
    return fail(node, 'Destructuring is supported only for entries of maps');
  }
  return iterable;
}

function entryBindings(
  node: ForOfStatement,
  pattern: ArrayBindingPattern,
): BindingElement[] {
  const bindings = pattern.getElements();
  if (
    bindings.length != 2 ||
    !bindings.every((element) => Node.isBindingElement(element))
  ) {
    return fail(node, 'Entries must be destructured into key and value');
  }
  return bindings.filter((element) => Node.isBindingElement(element));
}

/**
 * Whether a variable is referenced in a node
 */
function isUsed(declaration: BindingElement, node: Node): boolean {
  return node
    .getDescendantsOfKind(SyntaxKind.Identifier)
    .some(
      (identifier) =>
        identifier.getText() == declaration.getName() &&
        resolve(identifier)[0] === declaration,
    );
}

/**
 * A loop over the values of an array or set
 */
function valuesLoop(
  ctx: Context,
  node: ForOfStatement,
  declaration: VariableDeclaration,
) {
  const iterable = node.getExpression();
  if (!['array', 'set'].includes(kindOf(iterable.getType()))) {
    fail(node, 'Loops are supported over arrays, sets and map entries');
  }
  const [source, element] = elements(expression(ctx, iterable), iterable);
  ctx.declared.set(declaration, element);
  ctx.braces(
    `for _, ${goLocalName(declaration.getName())} := range ${source.code}`,
    () => statement(ctx, node.getStatement()),
  );
}

export function forStatement(ctx: Context, node: ForStatement) {
  const initializer = node.getInitializer();
  const test = node.getCondition();
  const incrementor = node.getIncrementor();
  if (
    !isSingleDeclaration(initializer) ||
    test === undefined ||
    incrementor === undefined
  ) {
    return fail(node, 'Unsupported for loop');
  }
  const declaration = initializer.getDeclarations()[0];
  const value = expression(ctx, declaration.getInitializerOrThrow());
  ctx.declared.set(declaration, value.type);
  const init = `${goLocalName(declaration.getName())} := ${value.code}`;
  ctx.braces(
    `for ${init}; ${condition(ctx, test).code}; ${simpleStatement(ctx, incrementor)}`,
    () => statement(ctx, node.getStatement()),
  );
}

/**
 * An expression as statement: `forEach` becomes a loop
 */
export function expressionStatement(ctx: Context, node: Node) {
  const callee = forEachCallee(node);
  if (Node.isCallExpression(node) && callee) {
    forEach(ctx, node, callee);
    return;
  }
  ctx.emit(simpleStatement(ctx, node));
}

function forEachCallee(node: Node): PropertyAccessExpression | undefined {
  const callee = Node.isCallExpression(node) ? node.getExpression() : undefined;
  return Node.isPropertyAccessExpression(callee) &&
    callee.getName() == 'forEach'
    ? callee
    : undefined;
}

function forEach(
  ctx: Context,
  node: CallExpression,
  callee: PropertyAccessExpression,
) {
  const receiver = callee.getExpression();
  if (!['array', 'set'].includes(kindOf(receiver.getType()))) {
    fail(node, 'forEach is supported only on arrays and sets');
  }
  const fn = arrowFunction(node.getArguments()[0]);
  checkCallback(fn);
  const param = fn.getParameters()[0];
  const [source, element] = elements(expression(ctx, receiver), receiver);
  ctx.declared.set(param, element);
  ctx.braces(
    `for _, ${goLocalName(param.getName())} := range ${source.code}`,
    () => callbackBody(ctx, fn.getBody()),
  );
}

function checkCallback(fn: ArrowFunction) {
  if (fn.getParameters().length != 1) {
    fail(fn, 'forEach callbacks must have one parameter');
  }
  if (fn.getDescendantsOfKind(SyntaxKind.ReturnStatement).length) {
    fail(fn, 'forEach callbacks must not return');
  }
}

function callbackBody(ctx: Context, body: Node) {
  if (Node.isBlock(body)) {
    statement(ctx, body);
  } else {
    ctx.emit(simpleStatement(ctx, body));
  }
}
