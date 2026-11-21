import {
  BreakStatement,
  ContinueStatement,
  Expression,
  IfStatement,
  Node,
  ReturnStatement,
  Statement,
  SyntaxKind,
  ThrowStatement,
  VariableStatement,
  WhileStatement,
} from 'ts-morph';

import { fail } from '../index';
import { expressionStatement } from './assignments';
import { Context, dispatch, Handler, on } from './context';
import { expression } from './expressions';
import { forOfStatement, forStatement } from './loops';
import { pythonName } from './names';
import { condition } from './truthiness';

export function statements(ctx: Context, list: Statement[]) {
  for (const item of list) {
    statement(ctx, item);
  }
}

/**
 * The indented body of a compound statement
 */
export function body(ctx: Context, node: Statement) {
  ctx.indented(() => {
    if (Node.isBlock(node)) {
      statements(ctx, node.getStatements());
    } else {
      statement(ctx, node);
    }
  });
}

function variableStatement(ctx: Context, node: VariableStatement) {
  for (const declaration of node.getDeclarations()) {
    if (!Node.isIdentifier(declaration.getNameNode())) {
      fail(declaration, 'Destructuring is not supported');
    }
    const initializer = declaration.getInitializer();
    ctx.emit(
      `${pythonName(declaration.getName())} = ${initializer ? expression(ctx, initializer).code : 'None'}`,
    );
  }
}

function ifStatement(ctx: Context, node: IfStatement) {
  ctx.emit(`if ${condition(ctx, node.getExpression())}:`);
  body(ctx, node.getThenStatement());
  let otherwise = node.getElseStatement();
  while (otherwise !== undefined && Node.isIfStatement(otherwise)) {
    ctx.emit(`elif ${condition(ctx, otherwise.getExpression())}:`);
    body(ctx, otherwise.getThenStatement());
    otherwise = otherwise.getElseStatement();
  }
  if (otherwise !== undefined) {
    ctx.emit('else:');
    body(ctx, otherwise);
  }
}

function whileStatement(ctx: Context, node: WhileStatement) {
  ctx.emit(`while ${condition(ctx, node.getExpression())}:`);
  body(ctx, node.getStatement());
}

function returnStatement(ctx: Context, node: ReturnStatement) {
  const value = node.getExpression();
  ctx.emit(value ? `return ${expression(ctx, value).code}` : 'return');
}

function throwStatement(ctx: Context, node: ThrowStatement) {
  const value = node.getExpression();
  if (
    !Node.isNewExpression(value) ||
    value.getExpression().getText() != 'Error' ||
    value.getArguments().length != 1
  ) {
    return fail(node, 'Only `throw new Error(message)` is supported');
  }
  ctx.emit(
    `raise Exception(${expression(ctx, value.getArguments()[0] as Expression).code})`,
  );
}

function jumpStatement(
  ctx: Context,
  node: BreakStatement | ContinueStatement,
  keyword: string,
) {
  if (node.getLabel()) {
    fail(node, 'Labels are not supported');
  }
  ctx.emit(keyword);
}

const handlers = new Map<SyntaxKind, Handler<void>>([
  on(SyntaxKind.Block, (ctx, node) => statements(ctx, node.getStatements())),
  on(SyntaxKind.VariableStatement, variableStatement),
  on(SyntaxKind.ExpressionStatement, (ctx, node) =>
    expressionStatement(ctx, node.getExpression()),
  ),
  on(SyntaxKind.IfStatement, ifStatement),
  on(SyntaxKind.ForOfStatement, (ctx, node) => forOfStatement(ctx, node)),
  on(SyntaxKind.ForStatement, (ctx, node) => forStatement(ctx, node)),
  on(SyntaxKind.WhileStatement, whileStatement),
  on(SyntaxKind.ReturnStatement, returnStatement),
  on(SyntaxKind.ThrowStatement, throwStatement),
  on(SyntaxKind.BreakStatement, (ctx, node) =>
    jumpStatement(ctx, node, 'break'),
  ),
  on(SyntaxKind.ContinueStatement, (ctx, node) =>
    jumpStatement(ctx, node, 'continue'),
  ),
]);

export function statement(ctx: Context, node: Statement) {
  dispatch(handlers, ctx, node, 'Unsupported statement');
}
