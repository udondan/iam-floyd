import { snakeCase } from '../python';

const keywords = new Set([
  'break',
  'case',
  'chan',
  'const',
  'continue',
  'default',
  'defer',
  'else',
  'fallthrough',
  'for',
  'func',
  'go',
  'goto',
  'if',
  'import',
  'interface',
  'map',
  'package',
  'range',
  'return',
  'select',
  'struct',
  'switch',
  'type',
  'var',
  // predeclared identifiers
  'any',
  'append',
  'bool',
  'byte',
  'cap',
  'clear',
  'close',
  'comparable',
  'complex',
  'copy',
  'delete',
  'error',
  'false',
  'float64',
  'imag',
  'int',
  'iota',
  'len',
  'make',
  'max',
  'min',
  'new',
  'nil',
  'panic',
  'print',
  'println',
  'real',
  'recover',
  'rune',
  'string',
  'true',
  'uint',
  // the packages that the generated code imports
  'collection',
  'errors',
  'iamfloyd',
  'js',
  'regexp',
  'statement',
  'strings',
  'sync',
  'time',
  // the receiver and the field with the statement typed as the subclass
  'this',
  'self',
]);

/**
 * The suffixes of file names that Go treats as build constraints
 */
const constrainedSuffixes = new Set([
  'test',
  'aix',
  'android',
  'darwin',
  'dragonfly',
  'freebsd',
  'hurd',
  'illumos',
  'ios',
  'js',
  'linux',
  'nacl',
  'netbsd',
  'openbsd',
  'plan9',
  'solaris',
  'wasip1',
  'windows',
  'zos',
  '386',
  'amd64',
  'amd64p32',
  'arm',
  'armbe',
  'arm64',
  'arm64be',
  'loong64',
  'mips',
  'mipsle',
  'mips64',
  'mips64le',
  'mips64p32',
  'mips64p32le',
  'ppc',
  'ppc64',
  'ppc64le',
  'riscv',
  'riscv64',
  's390',
  's390x',
  'sparc',
  'sparc64',
  'wasm',
]);

/**
 * The name of a Go file in snake_case, which must not end with a build constraint
 */
export function goFileName(name: string): string {
  const file = snakeCase(name).replace(/[^a-z0-9]+/g, '_');
  const parts = file.split('_');
  if (parts.length > 1 && constrainedSuffixes.has(parts[parts.length - 1])) {
    return `${file}_.go`;
  }
  return `${file}.go`;
}

export function pascalCase(name: string): string {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

export function camelCase(name: string): string {
  return `${name.charAt(0).toLowerCase()}${name.slice(1)}`;
}

/**
 * The Go name of a public method, as in jsii, e.g. `if` → `If`, `toJSON` → `ToJSON`
 */
export function goMethodName(name: string): string {
  return pascalCase(name);
}

/**
 * The Go name of a variable or parameter: keywords, predeclared identifiers and the names of the
 * imported packages get the suffix `_`
 */
export function goLocalName(name: string): string {
  return keywords.has(name) ? `${name}_` : name;
}

/**
 * The Go name of a constant, an enum member or a static property, e.g. `Operator.stringLike` →
 * `Operator_STRING_LIKE`
 */
export function goConstantName(type: string, name: string): string {
  return `${type}_${snakeCase(name).toUpperCase()}`;
}

const escapes = new Map([
  ['"', '\\"'],
  ['\\', '\\\\'],
  ['\n', '\\n'],
  ['\r', '\\r'],
  ['\t', '\\t'],
]);

/**
 * A Go string literal. Everything outside of printable ASCII is escaped, so the sources do not depend
 * on the encoding.
 */
export function goString(value: string): string {
  return `"${[...value].map((char) => escape(char, value)).join('')}"`;
}

function escape(char: string, value: string): string {
  const escaped = escapes.get(char);
  if (escaped !== undefined) {
    return escaped;
  }
  const code = char.codePointAt(0)!;
  if (code >= 0xd800 && code <= 0xdfff) {
    throw new Error(`Lone surrogates are not supported: ${value}`);
  }
  if (code > 0xffff) {
    return `\\U${code.toString(16).padStart(8, '0')}`;
  }
  if (code < 0x20 || code > 0x7e) {
    return `\\u${code.toString(16).padStart(4, '0')}`;
  }
  return char;
}
