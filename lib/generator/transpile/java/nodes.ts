import {
  CallExpression,
  Node,
  PropertyAccessExpression,
  SyntaxKind,
} from 'ts-morph';

import { kindOf } from '../index';

/**
 * The result of the first rule that applies, i.e. returns something
 */
export function firstOf<A extends unknown[], R>(
  rules: ((...args: A) => R | undefined)[],
  ...args: A
): R | undefined {
  for (const rule of rules) {
    const result = rule(...args);
    if (result !== undefined) {
      return result;
    }
  }
  return undefined;
}

export interface MethodCall {
  call: CallExpression;
  callee: PropertyAccessExpression;
}

/**
 * The call of the method `name` on some receiver, e.g. `a.get(b)`
 */
export function methodCall(
  node: Node | undefined,
  name: string,
): MethodCall | undefined {
  if (!Node.isCallExpression(node)) {
    return undefined;
  }
  const callee = node.getExpression();
  return Node.isPropertyAccessExpression(callee) && callee.getName() == name
    ? { call: node, callee }
    : undefined;
}

/**
 * Whether a node calls the function with the given text, e.g. `Object.keys`
 */
export function isCallOf(node: Node, text: string): node is CallExpression {
  return Node.isCallExpression(node) && node.getExpression().getText() == text;
}

/**
 * Whether a node is a property of `this`, e.g. `this.a`
 */
export function isThisProperty(node: Node): node is PropertyAccessExpression {
  return (
    Node.isPropertyAccessExpression(node) &&
    node.getExpression().getKind() == SyntaxKind.ThisKeyword
  );
}

export function isNullish(node: Node): boolean {
  return (
    node.getKind() == SyntaxKind.NullKeyword || node.getText() == 'undefined'
  );
}

/**
 * Whether the value of a node is a record or a map
 */
export function isKeyed(node: Node): boolean {
  return ['record', 'map'].includes(kindOf(node.getType()));
}

/**
 * The kind of both operands if they have the same kind, else an empty string
 */
export function commonKind(left: Node, right: Node): string {
  const kind = kindOf(left.getType());
  return kind == kindOf(right.getType()) ? kind : '';
}
