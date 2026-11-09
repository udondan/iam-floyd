import {
  BreakStatement,
  ContinueStatement,
  IfStatement,
  NewExpression,
  Node,
  ReturnStatement,
  SyntaxKind,
  ThrowStatement,
  TypeNode,
  VariableDeclaration,
} from 'ts-morph';

import { fail } from '../index';
import { condition } from './conditions';
import { byKind, Context } from './context';
import { assigned, convert, converted, typed } from './conversions';
import { expression } from './expressions';
import { typeFromType } from './inferred-types';
import { expressionStatement, forOfStatement, forStatement } from './loops';
import { goLocalName } from './names';
import { typeFromNode } from './types';

const statements = new Map<SyntaxKind, (ctx: Context, node: Node) => void>([
  byKind(SyntaxKind.Block, (ctx, node) => {
    for (const child of node.getStatements()) {
      statement(ctx, child);
    }
  }),
  byKind(SyntaxKind.VariableStatement, (ctx, node) => {
    for (const declaration of node.getDeclarations()) {
      variableDeclaration(ctx, declaration);
    }
  }),
  byKind(SyntaxKind.ExpressionStatement, (ctx, node) =>
    expressionStatement(ctx, node.getExpression()),
  ),
  byKind(SyntaxKind.IfStatement, (ctx, node) => ifStatement(ctx, node)),
  byKind(SyntaxKind.ForOfStatement, (ctx, node) => forOfStatement(ctx, node)),
  byKind(SyntaxKind.ForStatement, (ctx, node) => forStatement(ctx, node)),
  byKind(SyntaxKind.WhileStatement, (ctx, node) =>
    ctx.braces(`for ${condition(ctx, node.getExpression()).code}`, () =>
      statement(ctx, node.getStatement()),
    ),
  ),
  byKind(SyntaxKind.ReturnStatement, (ctx, node) => returnStatement(ctx, node)),
  byKind(SyntaxKind.ThrowStatement, (ctx, node) => throwStatement(ctx, node)),
  byKind(SyntaxKind.BreakStatement, (ctx, node) => jump(ctx, node, 'break')),
  byKind(SyntaxKind.ContinueStatement, (ctx, node) =>
    jump(ctx, node, 'continue'),
  ),
]);

export function statement(ctx: Context, node: Node) {
  const handler = statements.get(node.getKind());
  if (handler === undefined) {
    return fail(node, 'Unsupported statement');
  }
  handler(ctx, node);
}

/**
 * The body of an `if` or a loop, indented
 */
export function block(ctx: Context, node: Node) {
  ctx.indented(() => statement(ctx, node));
}

function variableDeclaration(ctx: Context, declaration: VariableDeclaration) {
  if (!Node.isIdentifier(declaration.getNameNode())) {
    fail(declaration, 'Destructuring is not supported');
  }
  const name = goLocalName(declaration.getName());
  const typeNode = declaration.getTypeNode();
  if (typeNode) {
    typedVariable(ctx, declaration, name, typeNode);
  } else {
    inferredVariable(ctx, declaration, name);
  }
}

function typedVariable(
  ctx: Context,
  declaration: VariableDeclaration,
  name: string,
  typeNode: TypeNode,
) {
  const type = typeFromNode(ctx, typeNode, false);
  ctx.declared.set(declaration, type);
  const initializer = declaration.getInitializer();
  if (initializer === undefined) {
    ctx.emit(`var ${name} ${type}`);
    return;
  }
  const value = typed(ctx, initializer, type);
  ctx.emit(
    value.type == type
      ? `${name} := ${value.code}`
      : `var ${name} ${type} = ${convert(value, type, initializer).code}`,
  );
}

/**
 * A variable without a type: it has the type of its initializer, or of TypeScript for `undefined`
 */
function inferredVariable(
  ctx: Context,
  declaration: VariableDeclaration,
  name: string,
) {
  const initializer = declaration.getInitializer();
  if (initializer === undefined) {
    return fail(declaration, 'Variables need a type or an initializer');
  }
  const value = expression(ctx, initializer);
  if (value.type == 'nil') {
    const type = typeFromType(ctx, declaration.getType(), false, declaration);
    ctx.declared.set(declaration, type);
    ctx.emit(`var ${name} ${type}`);
    return;
  }
  ctx.declared.set(declaration, value.type);
  ctx.emit(`${name} := ${value.code}`);
}

function ifStatement(ctx: Context, node: IfStatement) {
  ctx.emit(`if ${condition(ctx, node.getExpression()).code} {`);
  block(ctx, node.getThenStatement());
  let otherwise = node.getElseStatement();
  while (Node.isIfStatement(otherwise)) {
    ctx.emit(`} else if ${condition(ctx, otherwise.getExpression()).code} {`);
    block(ctx, otherwise.getThenStatement());
    otherwise = otherwise.getElseStatement();
  }
  if (otherwise) {
    ctx.emit('} else {');
    block(ctx, otherwise);
  }
  ctx.emit('}');
}

function returnStatement(ctx: Context, node: ReturnStatement) {
  const value = node.getExpression();
  if (value === undefined) {
    ctx.emit('return');
    return;
  }
  const type = ctx.returnTypes[ctx.returnTypes.length - 1];
  ctx.emit(`return ${assigned(ctx, value, type).code}`);
}

function throwStatement(ctx: Context, node: ThrowStatement) {
  const error = node.getExpression();
  if (!isErrorConstruction(error)) {
    return fail(node, 'Only `throw new Error(message)` is supported');
  }
  const message = error.getArguments()[0];
  ctx.emit(`panic(errors.New(${converted(ctx, message, 'string').code}))`);
}

/**
 * `new Error(message)`
 */
function isErrorConstruction(node: Node): node is NewExpression {
  return (
    Node.isNewExpression(node) &&
    node.getExpression().getText() == 'Error' &&
    node.getArguments().length == 1
  );
}

/**
 * `break` or `continue`
 */
function jump(
  ctx: Context,
  node: BreakStatement | ContinueStatement,
  keyword: string,
) {
  if (node.getLabel()) {
    fail(node, 'Labels are not supported');
  }
  ctx.emit(keyword);
}
