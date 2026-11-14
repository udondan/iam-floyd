import {
  ArrayBindingPattern,
  CallExpression,
  Expression,
  ForOfStatement,
  ForStatement,
  Node,
  SyntaxKind,
  VariableDeclaration,
} from 'ts-morph';

import { arrowFunction, fail, kindOf } from '../index';
import { simpleStatement } from './assignments';
import { condition } from './conditions';
import { Context, Prec, wrap } from './context';
import { declaredType } from './declared';
import { expression } from './expressions';
import { typeFromType } from './inferred-types';
import { csharpLocalName } from './names';
import { block } from './statements';

/**
 * The map or record whose entries a loop iterates
 */
function entriesSource(node: ForOfStatement): Expression {
  const iterable = node.getExpression();
  if (
    Node.isCallExpression(iterable) &&
    iterable.getExpression().getText() == 'Object.entries'
  ) {
    return iterable.getArguments()[0] as Expression;
  }
  if (kindOf(iterable.getType()) != 'map') {
    return fail(node, 'Destructuring is supported only for entries of maps');
  }
  return iterable;
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
  const elements = pattern.getElements();
  const [key, value] = elements;
  if (
    elements.length != 2 ||
    !Node.isBindingElement(key) ||
    !Node.isBindingElement(value)
  ) {
    return fail(node, 'Entries must be destructured into key and value');
  }
  const source = wrap(expression(ctx, iterable), Prec.primary);
  const valueName = csharpLocalName(value.getName());
  const valueType = declaredType(ctx, value);
  if (key.getName() == '_') {
    ctx.emit(`foreach (${valueType} ${valueName} in ${source}.Values)`);
    return;
  }
  const keyType = declaredType(ctx, key);
  ctx.emit(
    `foreach ((${keyType} ${csharpLocalName(key.getName())}, ${valueType} ${valueName}) in ${source})`,
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
  const type = typeFromType(ctx, declaration.getType(), false, declaration);
  ctx.declared.set(declaration, type);
  ctx.emit(
    `foreach (${type} ${csharpLocalName(declaration.getName())} in ${expression(ctx, iterable).code})`,
  );
}

export function forOfStatement(ctx: Context, node: ForOfStatement) {
  const initializer = node.getInitializer();
  if (
    !Node.isVariableDeclarationList(initializer) ||
    initializer.getDeclarations().length != 1
  ) {
    return fail(node, 'Unsupported loop variable');
  }
  const declaration = initializer.getDeclarations()[0];
  const nameNode = declaration.getNameNode();
  if (Node.isArrayBindingPattern(nameNode)) {
    entriesLoop(ctx, node, nameNode);
  } else {
    valuesLoop(ctx, node, declaration);
  }
  block(ctx, node.getStatement());
}

export function forStatement(ctx: Context, node: ForStatement) {
  const initializer = node.getInitializer();
  const test = node.getCondition();
  const incrementor = node.getIncrementor();
  if (
    !Node.isVariableDeclarationList(initializer) ||
    initializer.getDeclarations().length != 1 ||
    test === undefined ||
    incrementor === undefined
  ) {
    return fail(node, 'Unsupported for loop');
  }
  const declaration = initializer.getDeclarations()[0];
  const value = declaration.getInitializerOrThrow();
  const init = `${declaredType(ctx, declaration)} ${csharpLocalName(declaration.getName())} = ${expression(ctx, value).code}`;
  ctx.emit(
    `for (${init}; ${condition(ctx, test).code}; ${simpleStatement(ctx, incrementor)})`,
  );
  block(ctx, node.getStatement());
}

function isForEach(node: Expression): node is CallExpression {
  if (!Node.isCallExpression(node)) {
    return false;
  }
  const callee = node.getExpression();
  return (
    Node.isPropertyAccessExpression(callee) && callee.getName() == 'forEach'
  );
}

/**
 * A call of forEach, which becomes a loop
 */
function forEach(ctx: Context, node: CallExpression) {
  const receiver = node
    .getExpressionIfKindOrThrow(SyntaxKind.PropertyAccessExpression)
    .getExpression();
  const kind = kindOf(receiver.getType());
  if (kind != 'array' && kind != 'set') {
    fail(node, 'forEach is supported only on arrays and sets');
  }
  const fn = arrowFunction(node.getArguments()[0]);
  const params = fn.getParameters();
  if (params.length != 1) {
    fail(fn, 'forEach callbacks must have one parameter');
  }
  if (fn.getDescendantsOfKind(SyntaxKind.ReturnStatement).length) {
    fail(fn, 'forEach callbacks must not return');
  }
  const param = params[0];
  ctx.emit(
    `foreach (${declaredType(ctx, param)} ${csharpLocalName(param.getName())} in ${expression(ctx, receiver).code})`,
  );
  const body = fn.getBody();
  if (Node.isBlock(body)) {
    block(ctx, body);
    return;
  }
  ctx.emit('{');
  ctx.indented(() => ctx.emit(`${simpleStatement(ctx, body as Expression)};`));
  ctx.emit('}');
}

export function expressionStatement(ctx: Context, node: Expression) {
  if (isForEach(node)) {
    forEach(ctx, node);
    return;
  }
  ctx.emit(`${simpleStatement(ctx, node)};`);
}
