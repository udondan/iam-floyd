import { CallExpression, Node, PropertyAccessExpression } from 'ts-morph';

import { fail, kindOf } from '../index';
import { lambda } from './calls';
import { Context } from './context';
import { isRestParameter } from './declared';
import { Expr, primary } from './expr';
import { expression, receiver } from './expressions';

/**
 * A call of a method of a built-in type of JavaScript
 */
interface Builtin {
  ctx: Context;
  method: string;
  args: Node[];
  /** The receiver, as an operand of a method call */
  receiver: string;
  /** The receiver, as an argument */
  value(): string;
  arg(index: number): string;
}

/**
 * The Java code of a method call, or undefined if the call is not supported
 */
type BuiltinOf = (call: Builtin) => string | undefined;

function oneArgument(fn: BuiltinOf): BuiltinOf {
  return (call) => (call.args.length == 1 ? fn(call) : undefined);
}

const sameMethod = oneArgument(
  (call) => `${call.receiver}.${call.method}(${call.arg(0)})`,
);

function push(call: Builtin): string | undefined {
  const [first] = call.args;
  if (call.args.length == 1 && Node.isSpreadElement(first)) {
    const spread = first.getExpression();
    const code = expression(call.ctx, spread).code;
    // a rest parameter is a Java array
    return isRestParameter(spread)
      ? `Collections.addAll(${call.receiver}, ${code})`
      : `${call.receiver}.addAll(${code})`;
  }
  return call.args.length == 1
    ? `${call.receiver}.add(${call.arg(0)})`
    : undefined;
}

/**
 * A method of the runtime with the receiver and a callback with the value and the index
 */
function withCallback(name: string): BuiltinOf {
  return (call) =>
    `Js.${name}(${call.value()}, ${lambda(call.ctx, call.args[0], 2)})`;
}

/**
 * `toLowerCase` and `toUpperCase`, independent of the locale like in JavaScript
 */
const changeCase: BuiltinOf = (call) =>
  `${call.receiver}.${call.method}(Locale.ROOT)`;

const anyMethods = new Map<string, BuiltinOf>([
  [
    'toString',
    (call) =>
      call.args.length == 0 ? `Js.toString(${call.value()})` : undefined,
  ],
]);

const stringMethods = new Map<string, BuiltinOf>([
  ['includes', (call) => `${call.receiver}.contains(${call.arg(0)})`],
  ['startsWith', sameMethod],
  ['endsWith', sameMethod],
  ['indexOf', sameMethod],
  ['lastIndexOf', sameMethod],
  [
    'substring',
    (call) =>
      `Js.substring(${[call.value(), ...call.args.map((_, index) => call.arg(index))].join(', ')})`,
  ],
  ['toLowerCase', changeCase],
  ['toUpperCase', changeCase],
]);

const arrayMethods = new Map<string, BuiltinOf>([
  ['push', push],
  ['indexOf', (call) => `${call.receiver}.indexOf(${call.arg(0)})`],
  ['includes', (call) => `${call.receiver}.contains(${call.arg(0)})`],
  ['filter', withCallback('filter')],
  ['map', withCallback('map')],
  [
    'sort',
    (call) => (call.args.length ? undefined : `Js.sort(${call.value()})`),
  ],
]);

const setMethods = new Map<string, BuiltinOf>([
  ['add', (call) => `${call.receiver}.add(${call.arg(0)})`],
  ['has', (call) => `${call.receiver}.contains(${call.arg(0)})`],
]);

const mapMethods = new Map<string, BuiltinOf>([
  ['get', (call) => `${call.receiver}.get(${call.arg(0)})`],
  ['set', (call) => `${call.receiver}.put(${call.arg(0)}, ${call.arg(1)})`],
  ['has', (call) => `${call.receiver}.containsKey(${call.arg(0)})`],
]);

const dateMethods = new Map<string, BuiltinOf>([
  ['toISOString', (call) => `Js.toISOString(${call.value()})`],
]);

const regexpMethods = new Map<string, BuiltinOf>([
  ['test', (call) => `${call.receiver}.matcher(${call.arg(0)}).find()`],
]);

const methods = new Map<string, Map<string, BuiltinOf>>([
  ['any', anyMethods],
  ['string', stringMethods],
  ['array', arrayMethods],
  ['set', setMethods],
  ['map', mapMethods],
  ['date', dateMethods],
  ['regexp', regexpMethods],
]);

export function builtinCall(
  ctx: Context,
  node: CallExpression,
  callee: PropertyAccessExpression,
): Expr {
  const object = callee.getExpression();
  const method = callee.getName();
  const args = node.getArguments();
  const call: Builtin = {
    ctx,
    method,
    args,
    // evaluated first, as the order of evaluation determines the names of dummy variables
    receiver: receiver(ctx, object),
    value: () => expression(ctx, object).code,
    arg: (index) => expression(ctx, args[index]).code,
  };
  const kind = kindOf(object.getType());
  const code = methods.get(kind)?.get(method)?.(call);
  if (code === undefined) {
    return fail(node, `Unsupported method ${method} of ${kind}`);
  }
  return primary(code);
}
