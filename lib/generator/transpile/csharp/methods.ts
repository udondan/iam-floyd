import { CallExpression, Node } from 'ts-morph';

import { fail, Kind } from '../index';
import { callback } from '../shared';
import { Context, Expr, primary } from './context';
import { expression } from './expressions';
import { csharpLocalName, pascalCase } from './names';

/**
 * A call of a method of a built-in type
 */
export interface MethodCall {
  ctx: Context;
  node: CallExpression;
  receiverNode: Node;
  /** The receiver, translated before the arguments */
  receiver: string;
  args: Node[];
  method: string;
  kind: Kind;
}

type BuiltIn = (call: MethodCall) => string;

function unsupported(call: MethodCall): never {
  return fail(call.node, `Unsupported method ${call.method} of ${call.kind}`);
}

function arg(call: MethodCall, index: number): string {
  return expression(call.ctx, call.args[index]).code;
}

/**
 * The receiver as argument of a function of the runtime
 */
function target(call: MethodCall): string {
  return expression(call.ctx, call.receiverNode).code;
}

/**
 * A callback, with `arity` parameters in C#
 */
function lambda(ctx: Context, node: Node, arity: number): string {
  const { params, body } = callback(node, arity, csharpLocalName, () =>
    ctx.dummy('arg'),
  );
  return `(${params.join(', ')}) => ${expression(ctx, body).code}`;
}

function ordinal(call: MethodCall): string {
  if (call.args.length != 1) {
    return unsupported(call);
  }
  return `${call.receiver}.${pascalCase(call.method)}(${arg(call, 0)}, StringComparison.Ordinal)`;
}

function contains(call: MethodCall): string {
  return `${call.receiver}.Contains(${arg(call, 0)})`;
}

function add(call: MethodCall): string {
  return `${call.receiver}.Add(${arg(call, 0)})`;
}

const stringMethods = new Map<string, BuiltIn>([
  ['includes', contains],
  ['startsWith', ordinal],
  ['endsWith', ordinal],
  ['indexOf', ordinal],
  ['lastIndexOf', ordinal],
  [
    'substring',
    (call) =>
      `Js.Substring(${[target(call), ...call.args.map((_, index) => arg(call, index))].join(', ')})`,
  ],
  ['toLowerCase', (call) => `${call.receiver}.ToLowerInvariant()`],
  ['toUpperCase', (call) => `${call.receiver}.ToUpperInvariant()`],
]);

function push(call: MethodCall): string {
  const [first] = call.args;
  if (call.args.length == 1 && Node.isSpreadElement(first)) {
    return `${call.receiver}.AddRange(${expression(call.ctx, first.getExpression()).code})`;
  }
  if (call.args.length != 1) {
    return unsupported(call);
  }
  return add(call);
}

function sort(call: MethodCall): string {
  if (call.args.length) {
    return unsupported(call);
  }
  return `Js.Sort(${target(call)})`;
}

const arrayMethods = new Map<string, BuiltIn>([
  ['push', push],
  ['indexOf', (call) => `${call.receiver}.IndexOf(${arg(call, 0)})`],
  ['includes', contains],
  [
    'filter',
    (call) =>
      `Js.Filter(${target(call)}, ${lambda(call.ctx, call.args[0], 2)})`,
  ],
  [
    'map',
    (call) => `Js.Map(${target(call)}, ${lambda(call.ctx, call.args[0], 2)})`,
  ],
  ['sort', sort],
]);

const setMethods = new Map<string, BuiltIn>([
  ['add', add],
  ['has', contains],
]);

const mapMethods = new Map<string, BuiltIn>([
  ['get', (call) => `${call.receiver}.GetValueOrDefault(${arg(call, 0)})`],
  ['set', (call) => `${call.receiver}[${arg(call, 0)}] = ${arg(call, 1)}`],
  ['has', (call) => `${call.receiver}.ContainsKey(${arg(call, 0)})`],
]);

function toString(call: MethodCall): string {
  if (call.args.length != 0) {
    return unsupported(call);
  }
  return `Js.ToString(${target(call)})`;
}

const methods = new Map<Kind, Map<string, BuiltIn>>([
  ['any', new Map<string, BuiltIn>([['toString', toString]])],
  ['string', stringMethods],
  ['array', arrayMethods],
  ['set', setMethods],
  ['map', mapMethods],
  [
    'date',
    new Map<string, BuiltIn>([
      ['toISOString', (call) => `Js.ToISOString(${target(call)})`],
    ]),
  ],
  [
    'regexp',
    new Map<string, BuiltIn>([
      ['test', (call) => `${call.receiver}.IsMatch(${arg(call, 0)})`],
    ]),
  ],
]);

/**
 * A call of a method of a string, array, set, map, date or regular expression
 */
export function builtInMethod(call: MethodCall): Expr {
  const builtIn = methods.get(call.kind)?.get(call.method);
  if (builtIn === undefined) {
    return unsupported(call);
  }
  return primary(builtIn(call));
}
