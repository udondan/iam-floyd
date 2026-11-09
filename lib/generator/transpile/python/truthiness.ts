import { Expression, Node, SyntaxKind } from 'ts-morph';

import { fail, kindOf } from '../index';
import { Context } from './context';
import { expression } from './expressions';

/**
 * The operands whose truthiness decides that of the node: those of `&&`, `||` and `!`
 */
function logicalOperands(node: Expression): Expression[] | undefined {
  if (
    Node.isBinaryExpression(node) &&
    ['&&', '||'].includes(node.getOperatorToken().getText())
  ) {
    return [node.getLeft(), node.getRight()];
  }
  if (
    Node.isPrefixUnaryExpression(node) &&
    node.getOperatorToken() == SyntaxKind.ExclamationToken
  ) {
    return [node.getOperand()];
  }
  return undefined;
}

/**
 * Python and JavaScript disagree on the truthiness of empty arrays and objects, so only primitive
 * values are allowed as conditions
 */
export function checkTruthiness(node: Expression) {
  while (Node.isParenthesizedExpression(node)) {
    node = node.getExpression();
  }
  const operands = logicalOperands(node);
  if (operands !== undefined) {
    for (const operand of operands) {
      checkTruthiness(operand);
    }
    return;
  }
  const type = node.getType();
  const parts = type.isUnion() ? type.getUnionTypes() : [type];
  for (const part of parts) {
    if (!['string', 'number', 'boolean', 'undefined'].includes(kindOf(part))) {
      fail(node, `The truthiness of ${part.getText()} differs in Python`);
    }
  }
}

/**
 * An expression used as condition
 */
export function condition(ctx: Context, node: Expression): string {
  checkTruthiness(node);
  return expression(ctx, node).code;
}
