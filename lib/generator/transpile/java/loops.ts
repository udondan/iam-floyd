import {
  ArrayBindingPattern,
  BindingElement,
  CallExpression,
  Expression,
  ForOfStatement,
  ForStatement,
  Node,
  PropertyAccessExpression,
  SyntaxKind,
} from 'ts-morph';

import { arrowFunction, fail, kindOf } from '../index';
import { simpleStatement } from './assignments';
import { condition } from './conditions';
import { Context } from './context';
import { declaredType } from './declared';
import { Prec, wrap } from './expr';
import { expression } from './expressions';
import { javaLocalName } from './names';
import { isCallOf, methodCall } from './nodes';
import { statement } from './statements';
import { typeFromType } from './type-inferred';

/**
 * Whether values of a node can be iterated over by a Java for-each loop
 */
function isIterable(node: Node): boolean {
  return ['array', 'set'].includes(kindOf(node.getType()));
}

/**
 * The map or record of a loop over its entries
 */
function entriesOf(node: ForOfStatement): Expression {
  const iterable = node.getExpression();
  if (isCallOf(iterable, 'Object.entries')) {
    return iterable.getArguments()[0] as Expression;
  }
  if (kindOf(iterable.getType()) != 'map') {
    return fail(node, 'Destructuring is supported only for entries of maps');
  }
  return iterable;
}

function keyAndValue(
  node: ForOfStatement,
  pattern: ArrayBindingPattern,
): [BindingElement, BindingElement] {
  const elements = pattern.getElements();
  const [key, value] = elements;
  if (
    elements.length != 2 ||
    !Node.isBindingElement(key) ||
    !Node.isBindingElement(value)
  ) {
    return fail(node, 'Entries must be destructured into key and value');
  }
  return [key, value];
}

/**
 * A loop over the entries of a map or record, or over its values if the key is `_`
 */
function entriesLoop(
  ctx: Context,
  node: ForOfStatement,
  pattern: ArrayBindingPattern,
) {
  const iterable = entriesOf(node);
  const [key, value] = keyAndValue(node, pattern);
  const source = wrap(expression(ctx, iterable), Prec.primary);
  const valueName = javaLocalName(value.getName());
  const valueType = declaredType(ctx, value);
  const body = () => statement(ctx, node.getStatement());
  if (key.getName() == '_') {
    ctx.emitBlock(`for (${valueType} ${valueName} : ${source}.values())`, body);
    return;
  }
  const keyType = declaredType(ctx, key);
  const entry = ctx.dummy('entry');
  ctx.emitBlock(
    `for (Map.Entry<${keyType}, ${valueType}> ${entry} : ${source}.entrySet())`,
    () => {
      ctx.emit(
        `${keyType} ${javaLocalName(key.getName())} = ${entry}.getKey();`,
      );
      ctx.emit(`${valueType} ${valueName} = ${entry}.getValue();`);
      body();
    },
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
    return;
  }
  const iterable = node.getExpression();
  if (!isIterable(iterable)) {
    fail(node, 'Loops are supported over arrays, sets and map entries');
  }
  const type = typeFromType(ctx, declaration.getType(), false, declaration);
  ctx.declared.set(declaration, type);
  ctx.emitBlock(
    `for (${type} ${javaLocalName(declaration.getName())} : ${expression(ctx, iterable).code})`,
    () => statement(ctx, node.getStatement()),
  );
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
  const init = `${declaredType(ctx, declaration)} ${javaLocalName(declaration.getName())} = ${expression(ctx, value).code}`;
  ctx.emitBlock(
    `for (${init}; ${condition(ctx, test).code}; ${simpleStatement(ctx, incrementor)})`,
    () => statement(ctx, node.getStatement()),
  );
}

/**
 * `forEach` with a callback, as a for-each loop
 */
function forEachLoop(
  ctx: Context,
  call: CallExpression,
  callee: PropertyAccessExpression,
) {
  if (!isIterable(callee.getExpression())) {
    fail(call, 'forEach is supported only on arrays and sets');
  }
  const fn = arrowFunction(call.getArguments()[0]);
  const params = fn.getParameters();
  if (params.length != 1) {
    fail(fn, 'forEach callbacks must have one parameter');
  }
  if (fn.getDescendantsOfKind(SyntaxKind.ReturnStatement).length) {
    fail(fn, 'forEach callbacks must not return');
  }
  const param = params[0];
  const body = fn.getBody();
  ctx.emitBlock(
    `for (${declaredType(ctx, param)} ${javaLocalName(param.getName())} : ${expression(ctx, callee.getExpression()).code})`,
    () => {
      if (Node.isBlock(body)) {
        statement(ctx, body);
      } else {
        ctx.emit(`${simpleStatement(ctx, body as Expression)};`);
      }
    },
  );
}

export function expressionStatement(ctx: Context, node: Expression) {
  const forEach = methodCall(node, 'forEach');
  if (forEach) {
    forEachLoop(ctx, forEach.call, forEach.callee);
    return;
  }
  ctx.emit(`${simpleStatement(ctx, node)};`);
}
