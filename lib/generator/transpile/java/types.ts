const boxes: Record<string, string> = {
  int: 'Integer',
  boolean: 'Boolean',
  double: 'Double',
};

export function box(type: string): string {
  return boxes[type] ?? type;
}

/**
 * The parameter types that accept values of other types than their own
 */
const widening = new Map<string, (from: string) => boolean>([
  ['Object', () => true],
  ['Number', (from) => ['int', 'Integer', 'double', 'Double'].includes(from)],
  ['List<?>', (from) => from.startsWith('List<')],
  [
    'List<? extends Number>',
    (from) => ['List<Integer>', 'List<Double>', 'List<Number>'].includes(from),
  ],
]);

/**
 * Whether a value of the Java type `from` can be passed for a parameter of the Java type `to`
 */
export function assignable(from: string, to: string): boolean {
  if (from == 'null' || box(from) == box(to)) {
    return true;
  }
  return widening.get(to)?.(from) ?? false;
}

/**
 * The type without its type arguments: from the first `<` to the last `>`
 */
export function withoutTypeArguments(type: string): string {
  const start = type.indexOf('<');
  const end = type.lastIndexOf('>');
  if (start < 0 || end < start) {
    return type;
  }
  return type.slice(0, start) + type.slice(end + 1);
}

/**
 * The type without type arguments, as the JVM sees it
 */
export function erasure(type: string): string {
  return withoutTypeArguments(type).replace('...', '[]');
}

/**
 * The one type of all values, or `Object` if they have different types
 */
export function commonType(types: string[]): string {
  const unique = new Set(types);
  return unique.size == 1 ? [...unique][0] : 'Object';
}
