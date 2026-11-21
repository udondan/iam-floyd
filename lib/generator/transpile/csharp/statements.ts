import {
  BreakStatement,
  ContinueStatement,
  Expression,
  IfStatement,
  Node,
  ReturnStatement,
  Statement,
  ThrowStatement,
  VariableDeclaration,
  VariableStatement,
  WhileStatement,
} from 'ts-morph';

import { fail } from '../index';
import { typed } from './assignments';
import { condition } from './conditions';
import { Context, Prec, wrap } from './context';
import { declaredType } from './declared';
import { expression } from './expressions';
import { Handler, handlerOf, when } from './handlers';
import { expressionStatement, forOfStatement, forStatement } from './loops';
import { csharpLocalName } from './names';

/**
 * A statement in braces
 */
export function block(ctx: Context, node: Statement) {
  ctx.emit('{');
  ctx.indented(() =>
    statementList(ctx, Node.isBlock(node) ? node.getStatements() : [node]),
  );
  ctx.emit('}');
}

function statementList(ctx: Context, nodes: Statement[]) {
  for (const node of nodes) {
    statement(ctx, node);
  }
}

/**
 * A variable initialized with a value of type any. Dictionaries are copied, as their values can
 * have another type.
 */
function fromAny(
  ctx: Context,
  type: string,
  name: string,
  initializer: Expression,
) {
  const value = expression(ctx, initializer);
  ctx.emit(
    type == 'Dictionary<string, object>'
      ? `${type} ${name} = Js.ToRecord(${value.code});`
      : `${type} ${name} = (${type})${wrap(value, Prec.unary)};`,
  );
}

function variable(ctx: Context, declaration: VariableDeclaration) {
  if (!Node.isIdentifier(declaration.getNameNode())) {
    fail(declaration, 'Destructuring is not supported');
  }
  const initializer = declaration.getInitializer();
  const name = csharpLocalName(declaration.getName());
  const type = declaredType(ctx, declaration);
  if (initializer === undefined) {
    ctx.emit(`${type} ${name};`);
  } else if (type != 'object' && initializer.getType().isAny()) {
    fromAny(ctx, type, name, initializer);
  } else {
    ctx.emit(`${type} ${name} = ${typed(ctx, initializer, type).code};`);
  }
}

function variableStatement(ctx: Context, node: VariableStatement) {
  for (const declaration of node.getDeclarations()) {
    variable(ctx, declaration);
  }
}

function ifStatement(ctx: Context, node: IfStatement) {
  ctx.emit(`if (${condition(ctx, node.getExpression()).code})`);
  block(ctx, node.getThenStatement());
  let otherwise = node.getElseStatement();
  while (Node.isIfStatement(otherwise)) {
    ctx.emit(`else if (${condition(ctx, otherwise.getExpression()).code})`);
    block(ctx, otherwise.getThenStatement());
    otherwise = otherwise.getElseStatement();
  }
  if (otherwise) {
    ctx.emit('else');
    block(ctx, otherwise);
  }
}

function whileStatement(ctx: Context, node: WhileStatement) {
  ctx.emit(`while (${condition(ctx, node.getExpression()).code})`);
  block(ctx, node.getStatement());
}

function returnStatement(ctx: Context, node: ReturnStatement) {
  const value = node.getExpression();
  ctx.emit(value ? `return ${expression(ctx, value).code};` : 'return;');
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
    `throw new ArgumentException(${expression(ctx, value.getArguments()[0]).code});`,
  );
}

function jump(ctx: Context, node: BreakStatement | ContinueStatement) {
  if (node.getLabel()) {
    fail(node, 'Labels are not supported');
  }
  ctx.emit(Node.isBreakStatement(node) ? 'break;' : 'continue;');
}

const statements: Handler<[], void>[] = [
  when(Node.isBlock, (ctx, node) => statementList(ctx, node.getStatements())),
  when(Node.isVariableStatement, variableStatement),
  when(Node.isExpressionStatement, (ctx, node) =>
    expressionStatement(ctx, node.getExpression()),
  ),
  when(Node.isIfStatement, ifStatement),
  when(Node.isForOfStatement, (ctx, node) => forOfStatement(ctx, node)),
  when(Node.isForStatement, (ctx, node) => forStatement(ctx, node)),
  when(Node.isWhileStatement, whileStatement),
  when(Node.isReturnStatement, returnStatement),
  when(Node.isThrowStatement, throwStatement),
  when(Node.isBreakStatement, jump),
  when(Node.isContinueStatement, jump),
];

export function statement(ctx: Context, node: Statement) {
  const handler = handlerOf(statements, node);
  if (handler === undefined) {
    return fail(node, 'Unsupported statement');
  }
  handler.handle(ctx, node);
}
