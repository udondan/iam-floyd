import { Node } from 'ts-morph';

import { Context } from './context';

/**
 * Translates the nodes of one kind. Handlers in lists replace long chains of type checks.
 */
export interface Handler<A extends unknown[], R> {
  is: (node: Node) => boolean;
  handle: (ctx: Context, node: Node, ...args: A) => R;
}

export function when<T extends Node, A extends unknown[], R>(
  is: (node: Node) => node is T,
  handle: (ctx: Context, node: T, ...args: A) => R,
): Handler<A, R> {
  return {
    is,
    handle: (ctx, node, ...args) => handle(ctx, node as T, ...args),
  };
}

/**
 * The handler of the first type that matches the node
 */
export function handlerOf<A extends unknown[], R>(
  handlers: Handler<A, R>[],
  node: Node,
): Handler<A, R> | undefined {
  return handlers.find((handler) => handler.is(node));
}
