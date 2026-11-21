import { CallExpression, Node, PropertyAccessExpression } from 'ts-morph';

import { arrowFunction, fail, Kind, kindOf } from '../index';
import { receiverOf } from './access';
import { checkIdentifierParameter } from './callables';
import { condition } from './conditions';
import { Context } from './context';
import { assigned, converted, elements, entryTypes } from './conversions';
import { Expr, genericArgs, Prec, primary, value, wrap } from './expr';
import { expression } from './expressions';
import { goLocalName, pascalCase } from './names';

/**
 * A call of a method of a built-in type of JavaScript
 */
interface MethodCall {
  ctx: Context;
  node: CallExpression;
  receiverNode: Node;
  method: string;
  args: Node[];
}

/**
 * The methods of a built-in type, by the method; they get the receiver, which is evaluated before
 * the arguments
 */
type Methods<R> = Map<
  string,
  (call: MethodCall, receiver: R) => Expr | undefined
>;

export function builtinMethod(
  ctx: Context,
  node: CallExpression,
  callee: PropertyAccessExpression,
): Expr {
  const receiverNode = callee.getExpression();
  const method = callee.getName();
  const kind = kindOf(receiverNode.getType());
  const call = { ctx, node, receiverNode, method, args: node.getArguments() };
  return (
    kindMethods.get(kind)?.(call) ??
    fail(node, `Unsupported method ${method} of ${kind}`)
  );
}

/**
 * An argument converted to a Go type
 */
function arg(call: MethodCall, index: number, type: string): string {
  return converted(call.ctx, call.args[index], type).code;
}

function methodOf<R>(
  methods: Methods<R>,
  call: MethodCall,
  receiver: R,
): Expr | undefined {
  return methods.get(call.method)?.(call, receiver);
}

const stringMethods: Methods<string> = new Map([
  [
    'includes',
    (call, receiver) =>
      primary(
        `strings.Contains(${receiver}, ${arg(call, 0, 'string')})`,
        'bool',
      ),
  ],
  [
    'startsWith',
    (call, receiver) =>
      primary(
        `strings.HasPrefix(${receiver}, ${arg(call, 0, 'string')})`,
        'bool',
      ),
  ],
  [
    'endsWith',
    (call, receiver) =>
      primary(
        `strings.HasSuffix(${receiver}, ${arg(call, 0, 'string')})`,
        'bool',
      ),
  ],
  ['indexOf', indexOf],
  ['lastIndexOf', indexOf],
  [
    'substring',
    (call, receiver) => {
      const args = call.args.map((_, index) => arg(call, index, 'int'));
      return primary(
        `js.Substring(${[receiver, ...args].join(', ')})`,
        'string',
      );
    },
  ],
  [
    'toLowerCase',
    (_call, receiver) => primary(`strings.ToLower(${receiver})`, 'string'),
  ],
  [
    'toUpperCase',
    (_call, receiver) => primary(`strings.ToUpper(${receiver})`, 'string'),
  ],
]);

/**
 * `indexOf` or `lastIndexOf` of a string, without the position to start from
 */
function indexOf(call: MethodCall, receiver: string): Expr | undefined {
  if (call.args.length != 1) {
    return undefined;
  }
  return primary(
    `js.${pascalCase(call.method)}(${receiver}, ${arg(call, 0, 'string')})`,
    'int',
  );
}

type List = [Expr, string];

const arrayMethods: Methods<List> = new Map([
  [
    'indexOf',
    (call, [list, element]) =>
      primary(`js.IndexOfItem(${list.code}, ${arg(call, 0, element)})`, 'int'),
  ],
  [
    'includes',
    (call, [list, element]) =>
      primary(`js.Includes(${list.code}, ${arg(call, 0, element)})`, 'bool'),
  ],
  [
    'filter',
    (call, [list, element]) => {
      const fn = lambda(call.ctx, call.args[0], [element, 'int'], true);
      return primary(`js.Filter(${list.code}, ${fn.code})`, list.type);
    },
  ],
  [
    'map',
    (call, [list, element]) => {
      const fn = lambda(call.ctx, call.args[0], [element, 'int'], false);
      return primary(
        `js.MapItems(${list.code}, ${fn.code})`,
        `[]${fn.returns}`,
      );
    },
  ],
  ['sort', sort],
]);

/**
 * `sort()` of strings, without a function to compare
 */
function sort(call: MethodCall, [list, element]: List): Expr | undefined {
  if (call.args.length || element != 'string') {
    return undefined;
  }
  return primary(`js.Sort(${list.code})`, list.type);
}

/**
 * The receiver and the type arguments of a set or map
 */
interface Collection {
  receiver: string;
  types: string[];
}

const setMethods: Methods<Collection> = new Map([
  [
    'add',
    (call, set) =>
      primary(`${set.receiver}.Add(${arg(call, 0, set.types[0])})`, 'void'),
  ],
  [
    'has',
    (call, set) =>
      primary(`${set.receiver}.Has(${arg(call, 0, set.types[0])})`, 'bool'),
  ],
]);

const mapMethods: Methods<Collection> = new Map([
  [
    'get',
    (call, map) =>
      primary(
        `${map.receiver}.Get(${arg(call, 0, map.types[0])})`,
        map.types[1],
      ),
  ],
  [
    'set',
    (call, map) => {
      const key = arg(call, 0, map.types[0]);
      const entry = assigned(call.ctx, call.args[1], map.types[1]).code;
      return primary(`${map.receiver}.Set(${key}, ${entry})`, 'void');
    },
  ],
  [
    'has',
    (call, map) =>
      primary(`${map.receiver}.Has(${arg(call, 0, map.types[0])})`, 'bool'),
  ],
]);

const kindMethods = new Map<Kind, (call: MethodCall) => Expr | undefined>([
  [
    'any',
    (call) =>
      call.method == 'toString' && call.args.length == 0
        ? primary(
            `js.ToString(${expression(call.ctx, call.receiverNode).code})`,
            'string',
          )
        : undefined,
  ],
  [
    'string',
    (call) =>
      methodOf(
        stringMethods,
        call,
        value(expression(call.ctx, call.receiverNode)).code,
      ),
  ],
  [
    'array',
    (call) =>
      methodOf(
        arrayMethods,
        call,
        elements(expression(call.ctx, call.receiverNode), call.receiverNode),
      ),
  ],
  [
    'set',
    (call) => {
      const receiver = expression(call.ctx, call.receiverNode);
      const [, types] = genericArgs(receiver.type);
      return methodOf(setMethods, call, {
        receiver: wrap(receiver, Prec.primary),
        types,
      });
    },
  ],
  [
    'map',
    (call) => {
      const receiver = expression(call.ctx, call.receiverNode);
      const types = entryTypes(receiver.type, call.receiverNode);
      return methodOf(mapMethods, call, {
        receiver: wrap(receiver, Prec.primary),
        types,
      });
    },
  ],
  [
    'date',
    (call) =>
      call.method == 'toISOString'
        ? primary(
            `js.ToISOString(${converted(call.ctx, call.receiverNode, 'time.Time').code})`,
            'string',
          )
        : undefined,
  ],
  [
    'regexp',
    (call) =>
      call.method == 'test'
        ? primary(
            `${receiverOf(call.ctx, call.receiverNode)}.MatchString(${arg(call, 0, 'string')})`,
            'bool',
          )
        : undefined,
  ],
]);

/**
 * A callback as function literal, with the parameters typed and padded to the arity
 */
function lambda(
  ctx: Context,
  node: Node,
  types: string[],
  returnBool: boolean,
): Expr & { returns: string } {
  const fn = arrowFunction(node);
  const params = fn.getParameters().map((param, index) => {
    checkIdentifierParameter(param);
    ctx.declared.set(param, types[index]);
    return `${goLocalName(param.getName())} ${types[index]}`;
  });
  if (params.length > types.length) {
    fail(fn, 'Too many parameters');
  }
  while (params.length < types.length) {
    params.push(`_ ${types[params.length]}`);
  }
  const body = fn.getBody();
  if (Node.isBlock(body)) {
    return fail(fn, 'Callbacks must return an expression');
  }
  const result = returnBool ? condition(ctx, body) : expression(ctx, body);
  return {
    ...primary(
      `func(${params.join(', ')}) ${result.type} { return ${result.code} }`,
      'func',
    ),
    returns: result.type,
  };
}
