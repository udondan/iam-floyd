import { snakeCase } from '../python';

const reserved = new Set([
  'abstract',
  'assert',
  'boolean',
  'break',
  'byte',
  'case',
  'catch',
  'char',
  'class',
  'const',
  'continue',
  'default',
  'do',
  'double',
  'else',
  'enum',
  'extends',
  'false',
  'final',
  'finally',
  'float',
  'for',
  'goto',
  'if',
  'implements',
  'import',
  'instanceof',
  'int',
  'interface',
  'long',
  'native',
  'new',
  'null',
  'package',
  'private',
  'protected',
  'public',
  'record',
  'return',
  'short',
  'static',
  'strictfp',
  'super',
  'switch',
  'synchronized',
  'this',
  'throw',
  'throws',
  'transient',
  'true',
  'try',
  'var',
  'void',
  'volatile',
  'while',
  'yield',
]);

/**
 * The Java name of a method: reserved words get the prefix `do`, e.g. `if` → `doIf`
 */
export function javaMethodName(name: string): string {
  return reserved.has(name)
    ? `do${name.charAt(0).toUpperCase()}${name.slice(1)}`
    : name;
}

/**
 * The Java name of a variable or field: reserved words get a trailing underscore
 */
export function javaLocalName(name: string): string {
  return reserved.has(name) ? `${name}_` : name;
}

/**
 * The Java name of a constant, an enum member or a static property, e.g. `stringLike` → `STRING_LIKE`
 */
export function javaConstantName(name: string): string {
  return snakeCase(name).toUpperCase();
}

const escapes = new Map([
  ['"', '\\"'],
  ['\\', '\\\\'],
  ['\n', '\\n'],
  ['\r', '\\r'],
  ['\t', '\\t'],
]);

function escapeChar(char: string): string {
  const code = char.charCodeAt(0);
  if (code < 0x20 || code > 0x7e) {
    return `\\u${code.toString(16).padStart(4, '0')}`;
  }
  return char;
}

/**
 * A Java string literal. Everything outside of printable ASCII is escaped, so the sources do not
 * depend on the encoding.
 */
export function javaString(value: string): string {
  let result = '"';
  for (let i = 0; i < value.length; i++) {
    const char = value.charAt(i);
    result += escapes.get(char) ?? escapeChar(char);
  }
  return `${result}"`;
}
