import {
  CallExpression,
  Node,
  PropertyAccessExpression,
  SyntaxKind,
  VariableDeclarationList,
} from 'ts-morph';

import { Kind } from '../index';
import { CallableDeclaration } from './context';

/**
 * `this.<name>`
 */
export function isThisProperty(node: Node): node is PropertyAccessExpression {
  return (
    Node.isPropertyAccessExpression(node) &&
    node.getExpression().getKind() == SyntaxKind.ThisKeyword
  );
}

/**
 * A call of a function given by its text, e.g. `Object.keys(…)`
 */
export function isCallOf(node: Node, callee: string): node is CallExpression {
  return (
    Node.isCallExpression(node) && node.getExpression().getText() == callee
  );
}

export function isCallableDeclaration(
  node: Node | undefined,
): node is CallableDeclaration {
  return (
    Node.isMethodDeclaration(node) ||
    Node.isConstructorDeclaration(node) ||
    Node.isFunctionDeclaration(node)
  );
}

/**
 * `[]` or `{}`
 */
export function isEmptyLiteral(node: Node): boolean {
  if (Node.isArrayLiteralExpression(node)) {
    return node.getElements().length == 0;
  }
  return (
    Node.isObjectLiteralExpression(node) && node.getProperties().length == 0
  );
}

/**
 * `null` or `undefined`
 */
export function isNullish(node: Node): boolean {
  return (
    node.getKind() == SyntaxKind.NullKeyword || node.getText() == 'undefined'
  );
}

export function isRecordOrMap(kind: Kind): boolean {
  return kind == 'record' || kind == 'map';
}

/**
 * A declaration list with one variable, e.g. of a loop
 */
export function isSingleDeclaration(
  node: Node | undefined,
): node is VariableDeclarationList {
  return (
    Node.isVariableDeclarationList(node) && node.getDeclarations().length == 1
  );
}

/**
 * An expression without non-null assertions and parentheses
 */
export function unwrapped(node: Node): Node {
  let result = node;
  while (
    Node.isNonNullExpression(result) ||
    Node.isParenthesizedExpression(result)
  ) {
    result = result.getExpression();
  }
  return result;
}
