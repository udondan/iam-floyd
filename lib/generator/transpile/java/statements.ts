import {
  BreakStatement,
  ContinueStatement,
  IfStatement,
  Node,
  Statement,
  SyntaxKind,
  VariableDeclaration,
} from 'ts-morph';

import { fail } from '../index';
import { condition } from './conditions';
import { Context } from './context';
import { declaredType } from './declared';
import { Prec, wrap } from './expr';
import { expression } from './expressions';
import { expressionStatement, forOfStatement, forStatement } from './loops';
import { javaLocalName } from './names';

type StatementOf = (ctx: Context, node: Statement) => void;

/**
 * The statements of a block, or a single statement, one level deeper
 */
export function block(ctx: Context, node: Statement) {
  ctx.indented(() => statement(ctx, node));
}

function variableLine(ctx: Context, declaration: VariableDeclaration): string {
  if (!Node.isIdentifier(declaration.getNameNode())) {
    fail(declaration, 'Destructuring is not supported');
  }
  const initializer = declaration.getInitializer();
  const name = javaLocalName(declaration.getName());
  const type = declaredType(ctx, declaration);
  if (initializer === undefined) {
    return `${type} ${name};`;
  }
  if (type != 'Object' && initializer.getType().isAny()) {
    // a value of type any, assigned to a variable with a type
    return `@SuppressWarnings("unchecked") ${type} ${name} = (${type}) ${wrap(expression(ctx, initializer), Prec.unary)};`;
  }
  return `${type} ${name} = ${expression(ctx, initializer).code};`;
}

function variableStatement(ctx: Context, node: Statement) {
  for (const declaration of node
    .asKindOrThrow(SyntaxKind.VariableStatement)
    .getDeclarations()) {
    ctx.emit(variableLine(ctx, declaration));
  }
}

/**
 * An `if` with its chain of `else if` and `else`
 */
function ifStatement(ctx: Context, node: Statement) {
  let current: IfStatement | undefined = node.asKindOrThrow(
    SyntaxKind.IfStatement,
  );
  let header = 'if';
  while (current) {
    ctx.emit(`${header} (${condition(ctx, current.getExpression()).code}) {`);
    block(ctx, current.getThenStatement());
    const otherwise = current.getElseStatement();
    current = Node.isIfStatement(otherwise) ? otherwise : undefined;
    header = '} else if';
    if (otherwise && !current) {
      ctx.emit('} else {');
      block(ctx, otherwise);
    }
  }
  ctx.emit('}');
}

function whileStatement(ctx: Context, node: Statement) {
  const loop = node.asKindOrThrow(SyntaxKind.WhileStatement);
  ctx.emitBlock(`while (${condition(ctx, loop.getExpression()).code})`, () =>
    statement(ctx, loop.getStatement()),
  );
}

function returnStatement(ctx: Context, node: Statement) {
  const value = node.asKindOrThrow(SyntaxKind.ReturnStatement).getExpression();
  ctx.emit(value ? `return ${expression(ctx, value).code};` : 'return;');
}

function throwStatement(ctx: Context, node: Statement) {
  const thrown = node.asKindOrThrow(SyntaxKind.ThrowStatement).getExpression();
  if (
    !Node.isNewExpression(thrown) ||
    thrown.getExpression().getText() != 'Error' ||
    thrown.getArguments().length != 1
  ) {
    return fail(node, 'Only `throw new Error(message)` is supported');
  }
  ctx.emit(
    `throw new IllegalArgumentException(${expression(ctx, thrown.getArguments()[0]).code});`,
  );
}

/**
 * `break` or `continue`, without label
 */
function jump(keyword: string): StatementOf {
  return (ctx, node) => {
    if ((node as BreakStatement | ContinueStatement).getLabel()) {
      fail(node, 'Labels are not supported');
    }
    ctx.emit(`${keyword};`);
  };
}

const statements = new Map<SyntaxKind, StatementOf>([
  [
    SyntaxKind.Block,
    (ctx, node) => {
      for (const child of node
        .asKindOrThrow(SyntaxKind.Block)
        .getStatements()) {
        statement(ctx, child);
      }
    },
  ],
  [SyntaxKind.VariableStatement, variableStatement],
  [
    SyntaxKind.ExpressionStatement,
    (ctx, node) =>
      expressionStatement(
        ctx,
        node.asKindOrThrow(SyntaxKind.ExpressionStatement).getExpression(),
      ),
  ],
  [SyntaxKind.IfStatement, ifStatement],
  [
    SyntaxKind.ForOfStatement,
    (ctx, node) =>
      forOfStatement(ctx, node.asKindOrThrow(SyntaxKind.ForOfStatement)),
  ],
  [
    SyntaxKind.ForStatement,
    (ctx, node) =>
      forStatement(ctx, node.asKindOrThrow(SyntaxKind.ForStatement)),
  ],
  [SyntaxKind.WhileStatement, whileStatement],
  [SyntaxKind.ReturnStatement, returnStatement],
  [SyntaxKind.ThrowStatement, throwStatement],
  [SyntaxKind.BreakStatement, jump('break')],
  [SyntaxKind.ContinueStatement, jump('continue')],
]);

export function statement(ctx: Context, node: Statement) {
  const handler = statements.get(node.getKind());
  if (handler === undefined) {
    return fail(node, 'Unsupported statement');
  }
  handler(ctx, node);
}
