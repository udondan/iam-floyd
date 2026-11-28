import { CallExpression, Expression, Node, SyntaxKind } from 'ts-morph';

import { arrowFunction, fail, kindOf } from '../index';
import { elementAccess, identifier, propertyAccess } from './access';
import { Context, Prec, wrap } from './context';
import { expression } from './expressions';
import { pythonName } from './names';
import { statements } from './statements';

/**
 * The target of an assignment
 */
function target(ctx: Context, node: Expression): string {
  if (Node.isIdentifier(node)) {
    return identifier(node).code;
  }
  if (Node.isPropertyAccessExpression(node)) {
    return propertyAccess(ctx, node, true).code;
  }
  if (Node.isElementAccessExpression(node)) {
    return elementAccess(ctx, node, true).code;
  }
  return fail(node, 'Unsupported assignment target');
}

function assignment(ctx: Context, node: Expression): string | undefined {
  if (!Node.isBinaryExpression(node)) {
    return undefined;
  }
  const operator = node.getOperatorToken().getText();
  if (!['=', '+=', '-='].includes(operator)) {
    return undefined;
  }
  const left = node.getLeft();
  if (
    operator == '+=' &&
    kindOf(left.getType()) != kindOf(node.getRight().getType())
  ) {
    fail(node, 'Both sides of += must have the same type');
  }
  return `${target(ctx, left)} ${operator} ${expression(ctx, node.getRight()).code}`;
}

const incrementOperators = new Map([
  [SyntaxKind.PlusPlusToken, '+='],
  [SyntaxKind.MinusMinusToken, '-='],
]);

function increment(ctx: Context, node: Expression): string | undefined {
  if (
    !Node.isPostfixUnaryExpression(node) &&
    !Node.isPrefixUnaryExpression(node)
  ) {
    return undefined;
  }
  const operator = incrementOperators.get(node.getOperatorToken());
  return operator === undefined
    ? undefined
    : `${target(ctx, node.getOperand())} ${operator} 1`;
}

function forEach(ctx: Context, receiver: Expression, args: Expression[]) {
  const callback = arrowFunction(args[0]);
  const parameters = callback.getParameters();
  if (parameters.length != 1) {
    fail(callback, 'forEach callbacks must have one parameter');
  }
  ctx.emit(
    `for ${pythonName(parameters[0].getName())} in ${expression(ctx, receiver).code}:`,
  );
  const body = callback.getBody();
  ctx.indented(() => {
    if (Node.isBlock(body)) {
      statements(ctx, body.getStatements());
    } else {
      expressionStatement(ctx, body as Expression);
    }
  });
}

/**
 * Calls of methods that become statements, by the kind of the receiver and the name of the method
 */
const callStatements = new Map<
  string,
  (ctx: Context, receiver: Expression, args: Expression[]) => void
>([
  ['array.forEach', forEach],
  [
    'map.set',
    (ctx, receiver, args) =>
      ctx.emit(
        `${wrap(expression(ctx, receiver), Prec.primary)}[${expression(ctx, args[0]).code}] = ${expression(ctx, args[1]).code}`,
      ),
  ],
  [
    'set.add',
    (ctx, receiver, args) =>
      ctx.emit(
        `${wrap(expression(ctx, receiver), Prec.primary)}[${expression(ctx, args[0]).code}] = True`,
      ),
  ],
]);

function callStatement(ctx: Context, call: CallExpression) {
  const callee = call.getExpression();
  if (Node.isPropertyAccessExpression(callee)) {
    const receiver = callee.getExpression();
    const special = callStatements.get(
      `${kindOf(receiver.getType())}.${callee.getName()}`,
    );
    if (special !== undefined) {
      special(ctx, receiver, call.getArguments() as Expression[]);
      return;
    }
  }
  ctx.emit(expression(ctx, call).code);
}

export function expressionStatement(ctx: Context, node: Expression) {
  const line = assignment(ctx, node) ?? increment(ctx, node);
  if (line !== undefined) {
    ctx.emit(line);
    return;
  }
  if (!Node.isCallExpression(node)) {
    return fail(node, 'Unsupported expression statement');
  }
  callStatement(ctx, node);
}
