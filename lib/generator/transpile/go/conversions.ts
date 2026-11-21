import { Node } from 'ts-morph';

import { fail } from '../index';
import { Context, firstOf } from './context';
import {
  dereference,
  Expr,
  genericArgs,
  isNilable,
  newCollection,
  Prec,
  primary,
  scalars,
  value,
  wrap,
} from './expr';
import { expression } from './expressions';
import { isEmptyLiteral } from './syntax';

type Conversion = (expr: Expr, to: string, node: Node) => Expr | undefined;

/**
 * The conversions of a value of `interface{}`, by the target type; others are type assertions
 */
const assertions = new Map<string, (expr: Expr) => string>([
  ['[]interface{}', (expr) => `js.ToList(${expr.code})`],
  ['*js.Record[interface{}]', (expr) => `js.ToRecord(${expr.code})`],
  ['int', (expr) => `int(${wrap(expr, Prec.primary)}.(float64))`],
]);

const numericConversions = new Map<string, Conversion>([
  ['int float64', (expr, to) => primary(`float64(${expr.code})`, to)],
  ['int *float64', (expr, to) => primary(`js.Ptr(float64(${expr.code}))`, to)],
  ['float64 int', (expr, to) => primary(`int(${expr.code})`, to)],
  ['*float64 int', (expr, to, node) => convert(value(expr), to, node)],
]);

/**
 * The conversions between slices of values and of pointers: the prefix of the source type, the
 * target type by the rest of the source type, and the code
 */
const sliceConversions: [
  string,
  (rest: string) => string,
  (expr: Expr) => string,
][] = [
  ['[]', (rest) => `*[]*${rest}`, (expr) => `js.Ptr(js.Ptrs(${expr.code}))`],
  [
    '*[]*',
    (rest) => `[]${rest}`,
    (expr) => `js.Values(*${wrap(expr, Prec.unary)})`,
  ],
  ['[]*', (rest) => `[]${rest}`, (expr) => `js.Values(${expr.code})`],
  ['[]', (rest) => `[]*${rest}`, (expr) => `js.Ptrs(${expr.code})`],
];

const conversions: Conversion[] = [
  (expr, to) => (isUnchanged(expr.type, to) ? expr : undefined),
  (expr, to, node) => (expr.type == 'nil' ? nilOf(to, node) : undefined),
  (expr, to) =>
    to == `*${expr.type}` && scalars.includes(expr.type)
      ? primary(`js.Ptr(${expr.code})`, to)
      : undefined,
  (expr, to) =>
    expr.type == `*${to}` && scalars.includes(to) ? value(expr) : undefined,
  (expr, to) => (expr.type == 'interface{}' ? assertion(expr, to) : undefined),
  (expr, to, node) =>
    numericConversions.get(`${expr.type} ${to}`)?.(expr, to, node),
  (expr, to) => sliceConversion(expr, to),
];

/**
 * Converts an expression to a Go type
 */
export function convert(expr: Expr, to: string, node: Node): Expr {
  return (
    firstOf(conversions, expr, to, node) ??
    fail(node, `Cannot convert ${expr.type} to ${to}`)
  );
}

function isUnchanged(from: string, to: string): boolean {
  return from == to || (to == 'interface{}' && from != 'void');
}

function nilOf(to: string, node: Node): Expr {
  if (!isNilable(to)) {
    return fail(node, `nil cannot be converted to ${to}`);
  }
  return primary('nil', to);
}

function assertion(expr: Expr, to: string): Expr {
  const code = assertions.get(to);
  return primary(code ? code(expr) : `${wrap(expr, Prec.primary)}.(${to})`, to);
}

function sliceConversion(expr: Expr, to: string): Expr | undefined {
  const match = sliceConversions.find(
    ([prefix, target]) =>
      expr.type.startsWith(prefix) &&
      to == target(expr.type.slice(prefix.length)),
  );
  return match && primary(match[2](expr), to);
}

/**
 * The expression to range over, and the type of its elements
 */
export function elements(expr: Expr, node: Node): [Expr, string] {
  if (expr.type.startsWith('[]')) {
    return [expr, expr.type.slice(2)];
  }
  if (expr.type.startsWith('*[]')) {
    return [dereference(expr), expr.type.slice(3)];
  }
  const [base, args] = genericArgs(expr.type);
  if (base == '*js.Set') {
    return [
      primary(`${wrap(expr, Prec.primary)}.Values()`, `[]${args[0]}`),
      args[0],
    ];
  }
  return fail(node, `Cannot iterate over ${expr.type}`);
}

/**
 * The key and value types of a record or map
 */
export function entryTypes(type: string, node: Node): [string, string] {
  const [base, args] = genericArgs(type);
  if (base == '*js.Record') {
    return ['string', args[0]];
  }
  if (base == '*js.Map') {
    return [args[0], args[1]];
  }
  return fail(node, `Not a record or map: ${type}`);
}

/**
 * An expression that is assigned to a variable of the Go type `type`. Empty arrays and objects get
 * that type.
 */
export function typed(ctx: Context, node: Node, type: string): Expr {
  const empty = isEmptyLiteral(node) ? emptyValue(type) : undefined;
  return empty ?? expression(ctx, node);
}

function emptyValue(type: string): Expr | undefined {
  if (type.startsWith('[]')) {
    return primary(`${type}{}`, type);
  }
  const [base] = genericArgs(type);
  if (['*js.Record', '*js.Map', '*js.Set'].includes(base)) {
    return primary(newCollection(type), type);
  }
  return undefined;
}

/**
 * An expression converted to a Go type
 */
export function converted(ctx: Context, node: Node, type: string): Expr {
  return convert(expression(ctx, node), type, node);
}

/**
 * An expression assigned to a variable of a Go type: typed and converted
 */
export function assigned(ctx: Context, node: Node, type: string): Expr {
  return convert(typed(ctx, node, type), type, node);
}
