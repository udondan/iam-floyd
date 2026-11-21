import { Node } from 'ts-morph';

import { fail } from '../index';
import type { MethodCall } from './calls';
import { comprehension } from './comprehension';
import { Expr, primary } from './context';
import { expression } from './expressions';

type Method = (call: MethodCall) => Expr;

function push(call: MethodCall): Expr {
  const [first] = call.args;
  if (call.args.length == 1 && Node.isSpreadElement(first)) {
    return primary(
      `${call.self()}.extend(${expression(call.ctx, first.getExpression()).code})`,
    );
  }
  if (call.args.length == 1) {
    return primary(`${call.self()}.append(${call.arg(0)})`);
  }
  return fail(call.node, 'push supports one argument');
}

function sort(call: MethodCall): Expr {
  if (call.args.length) {
    return fail(call.node, 'sort supports no compare function');
  }
  return primary(`_js.sort(${call.receiverCode()})`);
}

function substring(call: MethodCall): Expr {
  const self = call.self();
  const start = call.arg(0);
  const end = call.args.length > 1 ? call.arg(1) : '';
  return primary(`${self}[${start}:${end}]`);
}

/**
 * A method that becomes a method of the Python value, with the arguments
 */
function pythonMethod(name: string, arity: number): Method {
  return (call) => {
    const self = call.self();
    const args = Array.from({ length: arity }, (_, index) => call.arg(index));
    return primary(`${self}.${name}(${args.join(', ')})`);
  };
}

const contains: Method = (call) => call.contains();

/**
 * The supported methods of the built-in types, by the kind of the receiver and the name of the method
 */
export const methods = new Map<string, Method>([
  ['string.includes', contains],
  ['string.startsWith', pythonMethod('startswith', 1)],
  ['string.endsWith', pythonMethod('endswith', 1)],
  ['string.toLowerCase', pythonMethod('lower', 0)],
  ['string.toUpperCase', pythonMethod('upper', 0)],
  ['string.indexOf', pythonMethod('find', 1)],
  ['string.lastIndexOf', pythonMethod('rfind', 1)],
  ['string.substring', substring],
  ['array.includes', contains],
  [
    'array.indexOf',
    (call) => primary(`_js.index_of(${call.receiverCode()}, ${call.arg(0)})`),
  ],
  ['array.push', push],
  ['array.sort', sort],
  ['array.filter', (call) => comprehension(call, 'filter')],
  ['array.map', (call) => comprehension(call, 'map')],
  ['map.get', pythonMethod('get', 1)],
  ['map.has', contains],
  ['set.has', contains],
  [
    'date.toISOString',
    (call) => primary(`_js.to_iso_string(${call.receiverCode()})`),
  ],
  [
    'regexp.test',
    (call) => primary(`_js.test(${call.receiverCode()}, ${call.arg(0)})`),
  ],
]);
