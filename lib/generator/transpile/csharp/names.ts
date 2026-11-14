import { snakeCase } from '../python';

const reserved = new Set([
  'abstract',
  'as',
  'base',
  'bool',
  'break',
  'byte',
  'case',
  'catch',
  'char',
  'checked',
  'class',
  'const',
  'continue',
  'decimal',
  'default',
  'delegate',
  'do',
  'double',
  'else',
  'enum',
  'event',
  'explicit',
  'extern',
  'false',
  'finally',
  'fixed',
  'float',
  'for',
  'foreach',
  'goto',
  'if',
  'implicit',
  'in',
  'int',
  'interface',
  'internal',
  'is',
  'lock',
  'long',
  'namespace',
  'new',
  'null',
  'object',
  'operator',
  'out',
  'override',
  'params',
  'private',
  'protected',
  'public',
  'readonly',
  'ref',
  'return',
  'sbyte',
  'sealed',
  'short',
  'sizeof',
  'stackalloc',
  'static',
  'string',
  'struct',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'uint',
  'ulong',
  'unchecked',
  'unsafe',
  'ushort',
  'using',
  'virtual',
  'void',
  'volatile',
  'while',
]);

export function pascalCase(name: string): string {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

/**
 * The C# name of a method, a public or protected field and a module level function: PascalCase, as
 * in jsii, e.g. `if` → `If`, `toJSON` → `ToJSON`
 */
export function csharpMethodName(name: string): string {
  return pascalCase(name);
}

/**
 * The C# name of a variable, parameter or private field: reserved words get the prefix `@`
 */
export function csharpLocalName(name: string): string {
  return reserved.has(name) ? `@${name}` : name;
}

/**
 * The C# name of a constant, an enum member or a static property, e.g. `stringLike` → `STRING_LIKE`
 */
export function csharpConstantName(name: string): string {
  return snakeCase(name).toUpperCase();
}

/**
 * A C# string literal. Everything outside of printable ASCII is escaped, so the sources do not depend
 * on the encoding.
 */
export function csharpString(value: string): string {
  let result = '"';
  for (let i = 0; i < value.length; i++) {
    const char = value.charAt(i);
    const code = value.charCodeAt(i);
    if (char == '"' || char == '\\') {
      result += `\\${char}`;
    } else if (char == '\n') {
      result += '\\n';
    } else if (char == '\r') {
      result += '\\r';
    } else if (char == '\t') {
      result += '\\t';
    } else if (code < 0x20 || code > 0x7e) {
      result += `\\u${code.toString(16).padStart(4, '0')}`;
    } else {
      result += char;
    }
  }
  return `${result}"`;
}
