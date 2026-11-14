/**
 * Operator precedence of Go, from loosest to tightest
 */
export enum Prec {
  or = 1,
  and = 2,
  compare = 3,
  add = 4,
  mul = 5,
  unary = 6,
  primary = 7,
}

/**
 * A Go expression with its static Go type. The type `nil` is the untyped nil.
 */
export interface Expr {
  code: string;
  prec: Prec;
  type: string;
}

export function wrap(expr: Expr, min: Prec): string {
  return expr.prec < min ? `(${expr.code})` : expr.code;
}

export function primary(code: string, type: string): Expr {
  return { code, prec: Prec.primary, type };
}

/**
 * A comparison, which is a boolean
 */
export function compare(code: string): Expr {
  return { code, prec: Prec.compare, type: 'bool' };
}

/**
 * An operand of a comparison
 */
export function operand(expr: Expr): string {
  return wrap(expr, Prec.compare + 1);
}

export const pointerScalars = [
  '*string',
  '*float64',
  '*int',
  '*bool',
  '*time.Time',
];
export const scalars = ['string', 'float64', 'int', 'bool', 'time.Time'];

/**
 * The type, or a pointer to it if it is optional and a scalar
 */
export function optionalType(type: string, optional: boolean): string {
  return optional && scalars.includes(type) ? `*${type}` : type;
}

/**
 * A handler for the maps of types that always gives a scalar, a pointer if optional
 */
export function scalarType(type: string) {
  return (_ctx: unknown, _source: unknown, optional: boolean) =>
    optionalType(type, optional);
}

/**
 * The value that a pointer points to
 */
export function dereference(expr: Expr): Expr {
  return {
    code: `*${wrap(expr, Prec.unary)}`,
    prec: Prec.unary,
    type: expr.type.slice(1),
  };
}

/**
 * The value of a pointer to a scalar
 */
export function value(expr: Expr): Expr {
  return pointerScalars.includes(expr.type) ? dereference(expr) : expr;
}

/**
 * Splits the type arguments of a Go type, e.g. `*js.Map[string, []int]` → `*js.Map`, `string`,
 * `[]int`
 */
export function genericArgs(type: string): [string, string[]] {
  const start = type.indexOf('[');
  if (start < 0 || !type.endsWith(']') || type.startsWith('[]')) {
    return [type, []];
  }
  return [type.slice(0, start), splitArgs(type.slice(start + 1, -1))];
}

/**
 * Splits a list of types at the commas outside of brackets and braces
 */
function splitArgs(text: string): string[] {
  const args: string[] = [];
  let depth = 0;
  let current = '';
  for (const char of text) {
    depth += bracketDepth(char);
    if (char == ',' && depth == 0) {
      args.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  args.push(current.trim());
  return args;
}

function bracketDepth(char: string): number {
  if ('[{'.includes(char)) {
    return 1;
  }
  return ']}'.includes(char) ? -1 : 0;
}

/**
 * The code that creates an empty record, map or set of a Go type, e.g. `js.NewSet[string]()`
 */
export function newCollection(type: string): string {
  const [base, args] = genericArgs(type);
  return `${base.slice(1).replace('js.', 'js.New')}[${args.join(', ')}]()`;
}

export function isNilable(type: string): boolean {
  return (
    ['nil', 'interface{}'].includes(type) ||
    type.startsWith('*') ||
    type.startsWith('[]')
  );
}

/**
 * The Go type of a union: `interface{}` for more than one type
 */
export function unionOf(types: string[]): string {
  const unique = new Set(types);
  return unique.size == 1 ? [...unique][0] : 'interface{}';
}

/**
 * An operand of a string concatenation: other types are converted like in JavaScript
 */
export function stringOperand(expr: Expr, min: Prec): string {
  return expr.type == 'string' ? wrap(expr, min) : `js.ToString(${expr.code})`;
}
