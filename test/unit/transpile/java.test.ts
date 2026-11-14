import * as path from 'path';

import { SourceFile } from 'ts-morph';
import { describe, expect, it } from 'vitest';

import {
  collectionSourceFiles,
  coreSourceFiles,
  isServiceFile,
  managedPoliciesSourceFiles,
  servicePrincipalsSourceFiles,
} from '../../../lib/generator/transpile/index';
import {
  JavaTranspiler,
  javadoc,
  javaString,
} from '../../../lib/generator/transpile/java';
import { snippetSourceFile, sourceFiles } from '../helpers';

const pkg = 'com.example';

function isStatementFile(file: SourceFile): boolean {
  return (
    isServiceFile(file) ||
    path.relative(process.cwd(), file.getFilePath()) ==
      path.join('lib', 'shared', 'all.ts')
  );
}

function transpiler(): JavaTranspiler {
  return new JavaTranspiler({
    packageOf: (file) => (isStatementFile(file) ? `${pkg}.statement` : pkg),
    header: 'header',
  });
}

function transpileFiles(files: SourceFile[]): Map<string, string> {
  return transpiler().transpile(files.filter((file) => !isServiceFile(file)));
}

/** Transpiles the code as `lib/shared/index.ts` and returns all files joined */
function transpile(code: string): string {
  return [...transpileFiles(snippetSourceFile(code)).values()].join('\n');
}

/** Transpiles the body of a function `f` with the given parameters and return type */
function body(params: string, code: string, returns = 'void'): string {
  return transpile(`export function f(${params}): ${returns} {\n${code}\n}`);
}

/** The error of transpiling the code, without file and line */
function error(code: string): string {
  try {
    transpile(code);
  } catch (e) {
    return (e as Error).message.replace(/^lib\/shared\/index\.ts:\d+: /, '');
  }
  throw new Error('No error');
}

function bodyError(params: string, code: string, returns = 'void'): string {
  return error(`export function f(${params}): ${returns} {\n${code}\n}`);
}

describe('JavaTranspiler on the real modules', () => {
  it('transpiles the core', () => {
    const files = transpileFiles(coreSourceFiles());
    expect([...files.keys()]).toContain('com/example/PolicyStatement.java');
    expect([...files.keys()]).toContain('com/example/statement/All.java');
    expect(files.get('com/example/Operator.java')).toContain('STRING_EQUALS');
  });

  it('transpiles the collection', () => {
    const files = transpileFiles(collectionSourceFiles());
    expect(files.size).toBeGreaterThan(0);
  });

  it('transpiles the managed policies', () => {
    const files = transpileFiles(managedPoliciesSourceFiles());
    expect([...files.keys()]).toContain('com/example/AwsManagedPolicy.java');
  });

  it('transpiles the service principals', () => {
    const files = transpileFiles(servicePrincipalsSourceFiles());
    expect(files.size).toBeGreaterThan(0);
  });
});

describe('javaString', () => {
  it('escapes quotes, backslashes, control and non-ASCII characters', () => {
    expect(javaString('a"b\\c\nd\re\tf\u0001gä')).toBe(
      '"a\\"b\\\\c\\nd\\re\\tf\\u0001g\\u00e4"',
    );
  });
});

describe('javadoc', () => {
  it('returns nothing without description and tags', () => {
    expect(javadoc([])).toEqual([]);
  });

  it('keeps code blocks and closes lists', () => {
    expect(javadoc(['```', 'a < b', '```', '- one'])).toEqual([
      '/**',
      ' * <pre>',
      ' * a &lt; b',
      ' * </pre>',
      ' *',
      ' * <ul>',
      ' * <li>one</li>',
      ' * </ul>',
      ' */',
    ]);
  });

  it('starts a list at the beginning without blank line', () => {
    expect(javadoc(['- one', 'text'])).toEqual([
      '/**',
      ' * <ul>',
      ' * <li>one</li>',
      ' * </ul>',
      ' * text',
      ' */',
    ]);
  });
});

describe('JavaTranspiler files and classes', () => {
  it('fails on two classes with the same name', () => {
    expect(() =>
      transpileFiles(
        sourceFiles({
          'lib/shared/a.ts': 'export class A {}',
          'lib/shared/b.ts': 'export class A {}',
        }),
      ),
    ).toThrow(
      'lib/shared/b.ts:1: Java class com.example.A is already declared',
    );
  });

  it('fails on unsupported statements at module level', () => {
    expect(error('console.log(1);')).toBe(
      'Unsupported statement at module level: console.log(1);',
    );
  });

  it('fails on functions in files with more than one class', () => {
    expect(
      error('export class A {}\nexport class B {}\nexport const x = 1;'),
    ).toBe(
      'Functions and constants are supported only in files with at most one class: export const x = 1;',
    );
  });

  it('fails on calls of functions of files with more than one class', () => {
    const files = sourceFiles({
      'lib/shared/a.ts':
        'export class A {}\nexport class B {}\nexport function g(): number { return 1; }',
      'lib/shared/index.ts':
        "import { g } from './a';\nexport function f(): number { return g(); }",
    });
    expect(() => transpileFiles([files[1]])).toThrow(
      'lib/shared/a.ts:3: Functions and constants are supported only in files with at most one class',
    );
  });

  it('fails on classes without name', () => {
    expect(error('export default class {}')).toBe(
      'Classes must have a name: export default class {}',
    );
  });

  it('fails on two referenced classes with the same name', () => {
    const files = sourceFiles({
      'lib/shared/all.ts': 'export class Foo {}',
      'lib/shared/foo.ts': 'export class Foo {}',
      'lib/shared/index.ts': `import { Foo } from './all';
import { Foo as Bar } from './foo';
export function f(a: Foo, b: Bar): void {}`,
    });
    expect(() => transpileFiles([files[2]])).toThrow(
      'Two classes named Foo are referenced',
    );
  });

  it('imports classes of other packages', () => {
    const files = sourceFiles({
      'lib/shared/all.ts': 'export class All {}',
      'lib/shared/index.ts': `import { All } from './all';
export function f(a: All): All { return a; }`,
    });
    expect(transpileFiles(files).get('com/example/Index.java')).toContain(
      'import com.example.statement.All;',
    );
  });

  it('fails on this outside of a class', () => {
    expect(() =>
      transpile('export function f(): this { return f(); }'),
    ).toThrow('Not in a class');
  });

  it('fails on unsupported class declarations', () => {
    expect(error('export abstract class A {}')).toBe(
      'Unsupported class declaration: export abstract class A {}',
    );
  });

  it('fails on constructor overloads', () => {
    expect(
      error(
        'export class A {\n  constructor() {}\n  constructor(a: string) {}\n}',
      ),
    ).toBe(
      'Constructor overloads are not supported: constructor(a: string) {}',
    );
  });

  it('fails on parameter properties', () => {
    expect(
      error('export class A {\n  constructor(public a: string) {}\n}'),
    ).toBe('Parameter properties are not supported: public a: string');
  });

  it('fails on two members with the same Java name', () => {
    expect(
      error('export class A {\n  if(): void {}\n  doIf(): void {}\n}'),
    ).toBe('Java name doIf is already used: doIf(): void {}');
  });

  it('fails on static methods', () => {
    expect(error('export class A {\n  static m(): void {}\n}')).toBe(
      'Static methods and overloads are not supported: static m(): void {}',
    );
  });

  it('fails on optional properties', () => {
    expect(error('export class A {\n  public a?: string;\n}')).toBe(
      'Optional properties are not supported: public a?: string;',
    );
  });

  it('fails on static properties without initializer', () => {
    expect(error('export class A {\n  public static a: string;\n}')).toBe(
      'Static properties must be initialized: public static a: string;',
    );
  });

  it('declares properties without initializer', () => {
    expect(
      transpile(
        'export class A {\n  public readonly a: string;\n  constructor() { this.a = "x"; }\n}',
      ),
    ).toContain('public final String a;');
  });

  it('declares the constants and functions of a class file', () => {
    const java = transpile(`export class A {}
export const X = 1;
const Y = 2;
export function f(): number { return X + Y; }
function g(): void {}`);
    expect(java).toContain('public static final int X = 1;');
    expect(java).toContain('protected static final int Y = 2;');
    expect(java).toContain('public static int f() {');
    expect(java).toContain('protected static void g() {');
  });

  it('declares the private constants of a holder class', () => {
    expect(transpile('const Y = 2;')).toContain(
      'private static final int Y = 2;',
    );
  });

  it('fails on module level variables', () => {
    expect(error('export let x = 1;')).toBe(
      'Module level variables must be constants: export let x = 1;',
    );
  });

  it('fails on constants without initializer', () => {
    expect(error('export declare const x: string;')).toBe(
      'Constants must be initialized: x: string',
    );
  });

  it('inherits no constructor from a base class without one', () => {
    const java = transpile('export class A {}\nexport class B extends A {}');
    expect(java).toContain('public class B extends A {\n}');
  });

  it('inherits constructors with union parameters', () => {
    const java = transpile(`export class A {
  constructor(x: string | number) {}
}
export class B extends A {}`);
    expect(java).toContain('protected B(Object x) {\n    super((Object) x);');
    expect(java).toContain('public B(String x) {\n    super(x);');
  });
});

describe('JavaTranspiler enums and docs', () => {
  it('fails on enum members that are not strings', () => {
    expect(error('export enum E {\n  A = 1,\n}')).toBe(
      'Enum members must be strings: A = 1',
    );
  });

  it('fails on enum members with the same Java name', () => {
    expect(error("export enum E {\n  fooBar = 'a',\n  FooBar = 'b',\n}")).toBe(
      "Java name FOO_BAR is already used: FooBar = 'b'",
    );
  });

  it('writes see and returns tags', () => {
    const java = transpile(`export class A {
  /**
   * @see https://example.com/?a="b"
   * @returns
   */
  m(): number {
    return 1;
  }
}`);
    expect(java).toContain(
      ' * @see <a href="https://example.com/?a=%22b%22">https://example.com/?a=%22b%22</a>',
    );
    expect(java).toContain(' * @return\n');
  });

  it('writes see tags without comment', () => {
    expect(transpile('/**\n * @see\n */\nexport class A {}')).toContain(
      ' * @see <a href=""></a>',
    );
  });

  it('fails on unsupported tags', () => {
    expect(error('/**\n * @example x\n */\nexport class A {}')).toBe(
      'Unsupported JSDoc tag: @example x',
    );
  });
});

describe('JavaTranspiler callables', () => {
  it('fails on parameters without type', () => {
    expect(error('export function f(a): void {}')).toBe(
      'Parameters must have a type: a',
    );
  });

  it('fails on rest parameters without array type', () => {
    expect(
      error('export class A {\n  m(...a: Array<string>): void {}\n}'),
    ).toBe('Rest parameters must have an array type: ...a: Array<string>');
  });

  it('declares one overload per Java type', () => {
    const java = transpile("export class A {\n  m(a: 'x' | 'y'): void {}\n}");
    expect(java).toContain('public void m(String a) {');
    expect(java).not.toContain('Object a');
  });

  it('skips undefined in public union parameters', () => {
    expect(
      transpile('export class A {\n  m(a: string | undefined): void {}\n}'),
    ).toContain('public void m(String a) {');
  });

  it('fails on generic functions', () => {
    expect(error('export function f<T>(a: T): void {}')).toBe(
      'Generic and async functions are not supported: export function f<T>(a: T): void {}',
    );
  });

  it('fails on function overloads', () => {
    expect(
      error(
        'export function f(a: string): void;\nexport function f(a: string): void {}',
      ),
    ).toBe('Unsupported function: export function f(a: string): void;');
  });

  it('fails on default values', () => {
    expect(error("export function f(a: string = 'x'): void {}")).toBe(
      "Default values are not supported, use optional parameters: a: string = 'x'",
    );
  });

  it('fails on destructured parameters', () => {
    expect(error('export function f([a]: string[]): void {}')).toBe(
      'Destructured parameters are not supported: [a]: string[]',
    );
  });

  it('fails on optional and rest parameters together', () => {
    expect(
      error('export function f(a?: string, ...b: string[]): void {}'),
    ).toBe(
      'Optional and rest parameters are not supported together: export function f(a?: string, ...b: string[]): void {}',
    );
  });

  it('fails on overloads with the same erasure', () => {
    expect(
      error('export class A {\n  m(a: string[] | number[]): void {}\n}'),
    ).toBe(
      'Two Java overloads have the same parameters (List): m(a: string[] | number[]): void {}',
    );
  });

  it('returns the type of the returned values for any', () => {
    expect(
      body('a: boolean', "if (a) {\n  return 1;\n}\nreturn 'x';", 'any'),
    ).toContain('static Object f(boolean a)');
    expect(body('', 'return;', 'any')).toContain('static void f()');
  });

  it('infers the return type', () => {
    expect(transpile('export function f() {}')).toContain('static void f()');
    expect(transpile('export function f() { return 1; }')).toContain(
      'static int f()',
    );
  });

  it('fails on constructors without super()', () => {
    expect(
      error(
        'export class A {}\nexport class B extends A {\n  constructor() {\n    const x = 1;\n  }\n}',
      ),
    ).toBe('Constructors must start with super(): constructor() {');
  });

  it('calls super() without base constructor', () => {
    expect(
      transpile(
        'export class A {}\nexport class B extends A {\n  constructor() {\n    super();\n  }\n}',
      ),
    ).toContain('super();');
  });
});

describe('JavaTranspiler types', () => {
  it('maps literal, array, set and map types', () => {
    const java = transpile(
      "export function f(a: 'x', b: Array<string>, c: Set<string>, d: Map<string, number>, e: string | null): void {}",
    );
    expect(java).toContain(
      'static void f(String a, List<String> b, Set<String> c, Map<String, Integer> d, String e)',
    );
  });

  it('fails on unresolved types', () => {
    expect(error('export function f(a: Foo): void {}')).toBe(
      'Unresolved type: Foo',
    );
  });

  it('fails on interfaces', () => {
    expect(error('interface I {}\nexport function f(a: I): void {}')).toBe(
      'Unsupported type: I',
    );
  });

  it('maps optional booleans', () => {
    expect(
      transpile(
        'function g(): boolean | undefined {\n  return undefined;\n}\nexport function f(): void {\n  const x = g();\n}',
      ),
    ).toContain('Boolean x = g();');
  });

  it('fails on unsupported types', () => {
    expect(error('export function f(a: [string, number]): void {}')).toBe(
      'Unsupported type: [string, number]',
    );
  });

  it('maps inferred void and optional booleans', () => {
    const java = body(
      'a: boolean',
      'const x = f(a);\nconst y = a ? true : undefined;',
    );
    expect(java).toContain('void x = f(a);');
    expect(java).toContain('Boolean y = ');
  });

  it('fails on tuples', () => {
    expect(
      bodyError('r: Record<string, string>', 'const e = Object.entries(r);'),
    ).toBe('Unsupported array type: e = Object.entries(r)');
  });

  it('maps records', () => {
    const java = body('r: Record<string, number>', 'const x = r;');
    expect(java).toContain('Map<String, Integer> x = r;');
  });

  it('maps object types', () => {
    expect(transpile('export class A {\n  private o = {};\n}')).toContain(
      'private Map<String, Object> o = new LinkedHashMap<>();',
    );
    expect(error('export class A {\n  private o = { a: 1 };\n}')).toBe(
      'Only empty object literals are supported: { a: 1 }',
    );
  });

  it('fails on unsupported inferred types', () => {
    expect(bodyError('', 'const x = null;')).toBe(
      'Unsupported type null: x = null',
    );
  });

  it('fails on variables without type and initializer', () => {
    expect(bodyError('', 'let x;')).toBe(
      'Variables need a type or an initializer: x',
    );
  });
});

describe('JavaTranspiler statements', () => {
  it('translates blocks, declarations without initializer and else if', () => {
    const java = body(
      'a: number',
      '{\n  let x: number;\n}\nif (a > 1) {\n  return;\n} else if (a > 0) {\n  return;\n} else {\n  return;\n}',
    );
    expect(java).toContain('int x;');
    expect(java).toContain('} else if (a > 0) {');
  });

  it('fails on destructuring', () => {
    expect(bodyError('a: string[]', 'const [x] = a;')).toBe(
      'Destructuring is not supported: [x] = a',
    );
  });

  it('fails on throw without Error', () => {
    expect(bodyError('', "throw 'x';")).toBe(
      "Only `throw new Error(message)` is supported: throw 'x';",
    );
  });

  it('fails on labels', () => {
    expect(
      bodyError('a: string[]', 'for (const x of a) {\n  break outer;\n}'),
    ).toBe('Labels are not supported: break outer;');
  });

  it('fails on unsupported statements', () => {
    expect(bodyError('', 'do {} while (true);')).toBe(
      'Unsupported statement: do {} while (true);',
    );
  });

  it('fails on loops without declaration', () => {
    expect(bodyError('a: string[]', 'let x: string;\nfor (x of a) {}')).toBe(
      'Unsupported loop variable: for (x of a) {}',
    );
  });

  it('fails on destructuring of other than map entries', () => {
    expect(bodyError('a: string[][]', 'for (const [x, y] of a) {}')).toBe(
      'Destructuring is supported only for entries of maps: for (const [x, y] of a) {}',
    );
  });

  it('fails on entries not destructured into key and value', () => {
    expect(bodyError('a: Map<string, string>', 'for (const [x] of a) {}')).toBe(
      'Entries must be destructured into key and value: for (const [x] of a) {}',
    );
  });

  it('loops over the values and entries of maps', () => {
    const java = body(
      'a: Map<string, string>',
      'for (const [_, v] of a) {}\nfor (const [k, v] of a) {}',
    );
    expect(java).toContain('for (String v : a.values()) {');
    expect(java).toContain(
      'for (Map.Entry<String, String> _entry1 : a.entrySet()) {',
    );
  });

  it('fails on loops over other than arrays and sets', () => {
    expect(bodyError('a: string', 'for (const c of a) {}')).toBe(
      'Loops are supported over arrays, sets and map entries: for (const c of a) {}',
    );
  });

  it('fails on unsupported for loops', () => {
    expect(bodyError('', 'for (;;) {}')).toBe(
      'Unsupported for loop: for (;;) {}',
    );
  });

  it('translates increments and decrements', () => {
    const java = body('', 'let i = 0;\n++i;\ni--;');
    expect(java).toContain('i++;');
    expect(java).toContain('i--;');
  });

  it('fails on unsupported expression statements', () => {
    expect(bodyError('', 'let i = 0;\ni *= 2;')).toBe(
      'Unsupported expression statement: i *= 2',
    );
    expect(bodyError('a: boolean', '!a;')).toBe(
      'Unsupported expression statement: !a',
    );
  });

  it('fails on forEach of maps', () => {
    expect(
      bodyError('a: Map<string, string>', 'a.forEach((v) => console.log(v));'),
    ).toBe(
      'forEach is supported only on arrays and sets: a.forEach((v) => console.log(v))',
    );
  });

  it('fails on forEach callbacks with two parameters', () => {
    expect(
      bodyError('a: string[], b: string[]', 'a.forEach((v, i) => b.push(v));'),
    ).toBe('forEach callbacks must have one parameter: (v, i) => b.push(v)');
  });

  it('fails on forEach callbacks that return', () => {
    expect(bodyError('a: string[]', 'a.forEach((v) => {\n  return;\n});')).toBe(
      'forEach callbacks must not return: (v) => {',
    );
  });

  it('translates forEach with an expression body', () => {
    expect(
      body('a: string[], b: string[]', 'a.forEach((v) => b.push(v));'),
    ).toContain('for (String v : a) {\n      b.add(v);\n    }');
  });

  it('fails on unsupported assignment targets', () => {
    expect(
      error(`export class A {
  public x = 1;
}
export function f(a: A): void {
  a.x = 2;
}`),
    ).toBe('Unsupported assignment target: a.x');
  });

  it('fails on unsupported assignments of elements', () => {
    expect(bodyError('a: number[]', 'a[0] += 1;')).toBe(
      'Unsupported assignment: a[0] += 1',
    );
    expect(bodyError('a: string', 'a[0] = "b";')).toBe(
      'Unsupported assignment: a[0] = "b"',
    );
  });

  it('fails on unsupported assignments of record properties', () => {
    expect(bodyError('a: Record<string, string>', 'a.b += "c";')).toBe(
      'Unsupported assignment: a.b += "c"',
    );
  });

  it('converts public numbers assigned to internal numbers', () => {
    expect(
      transpile(
        'export class A {\n  m(n: number): void {\n    let i = 0;\n    i = n;\n  }\n}',
      ),
    ).toContain('i = n.intValue();');
  });
});

describe('JavaTranspiler expressions', () => {
  it('translates conditions of numbers and objects', () => {
    const java = body(
      'a: number, b: Set<string>',
      'if (a) {\n  return;\n}\nif (b) {\n  return;\n}',
    );
    expect(java).toContain('if (a != 0) {');
    expect(java).toContain('if (b != null) {');
  });

  it('fails on conditions of unknown type', () => {
    expect(bodyError('a: any', 'if (a) {\n  return;\n}')).toBe(
      'Conditions must have a known type: a',
    );
  });

  it('fails on numbers that are not integers', () => {
    expect(bodyError('', 'const x = 1.5;')).toBe(
      'Only integers are supported: 1.5',
    );
  });

  it('translates null', () => {
    expect(body('', 'return null;', 'string | null')).toContain('return null;');
  });

  it('fails on element access of strings', () => {
    expect(bodyError('a: string', 'const x = a[0];')).toBe(
      'Element access is supported on arrays and records: a[0]',
    );
  });

  it('fails on unsupported prefix operators', () => {
    expect(bodyError('a: number', 'const x = ~a;')).toBe(
      'Unsupported operator: ~a',
    );
  });

  it('fails on spread elements', () => {
    expect(bodyError('a: string[]', 'const x = [...a];')).toBe(
      'Spread elements are not supported: [...a]',
    );
  });

  it('fails on unsupported expressions', () => {
    expect(bodyError('a: any', 'const x = a as string;')).toBe(
      'Unsupported expression: a as string',
    );
  });

  it('translates undefined', () => {
    expect(body('', 'return undefined;', 'string | undefined')).toContain(
      'return null;',
    );
  });

  it('fails on unresolved identifiers', () => {
    expect(bodyError('', 'const x: number = foo;')).toBe(
      'Unresolved identifier: foo',
    );
  });

  it('refers to constants of other files', () => {
    const files = sourceFiles({
      'lib/shared/a.ts': 'export const X = 1;',
      'lib/shared/index.ts':
        "import { X } from './a';\nexport function f(): number { return X; }",
    });
    expect(transpileFiles(files).get('com/example/Index.java')).toContain(
      'return A.X;',
    );
  });

  it('narrows variables and fields of type Object', () => {
    const java = transpile(`export class A {
  private v: string | number = 1;
  m(x: string | number): number {
    if (typeof x === 'string') {
      return x.length;
    }
    if (typeof this.v === 'string') {
      return this.v.length;
    }
    return 0;
  }
}`);
    expect(java).toContain('return ((String) x).length();');
    expect(java).toContain('return ((String) this.v).length();');
  });

  it('translates templates with a single part', () => {
    expect(body('a: string', 'return `${a}`;', 'string')).toContain(
      'return a;',
    );
  });

  it('translates the length of rest parameters', () => {
    expect(body('...a: string[]', 'return a.length;', 'number')).toContain(
      'return a.length;',
    );
  });

  it('fails on unsupported lengths', () => {
    expect(
      bodyError('a: Map<string, string>', 'const x: number = a.length;'),
    ).toBe('Unsupported length: a.length');
  });

  it('translates properties of records', () => {
    expect(
      body('a: Record<string, string>', 'return a.b;', 'string'),
    ).toContain('return a.get("b");');
  });

  it('fails on unsupported properties', () => {
    expect(bodyError('a: Map<string, string>', 'const x = a.size;')).toBe(
      'Unsupported property: a.size',
    );
  });

  it('fails on spread arguments', () => {
    expect(
      bodyError('a: string[]', 'g(...a);\nfunction g(...b: string[]): void {}'),
    ).toBe('Spread arguments are not supported: g(...a)');
  });

  it('passes rest arguments', () => {
    expect(
      transpile(
        "export function f(): void {\n  g('a', 'b');\n}\nfunction g(...b: string[]): void {}",
      ),
    ).toContain('g("a", "b");');
  });

  it('fails on destructured callback parameters', () => {
    expect(bodyError('a: string[][]', 'const x = a.map(([b]) => b);')).toBe(
      'Destructured parameters are not supported: [b]',
    );
  });

  it('fails on callbacks with too many parameters', () => {
    expect(bodyError('a: string[]', 'const x = a.map((b, c, d) => b);')).toBe(
      'Too many parameters: (b, c, d) => b',
    );
  });

  it('fails on callbacks with a block', () => {
    expect(
      bodyError('a: string[]', 'const x = a.map((b) => {\n  return b;\n});'),
    ).toBe('Callbacks must return an expression: (b) => {');
  });

  it('fails on calls of variables', () => {
    expect(bodyError('', 'const g = f;\ng();')).toBe('Unsupported call: g()');
    expect(bodyError('', '(f)();')).toBe('Unsupported call: (f)()');
  });

  it('translates methods of builtin types', () => {
    const java = body(
      'a: any, m: Map<string, string>, d: Date, r: RegExp, s: string',
      'const x = a.toString();\nconst y = m.has(s);\nconst z = d.toISOString();\nconst w = r.test(s);',
    );
    expect(java).toContain('Js.toString(a)');
    expect(java).toContain('m.containsKey(s)');
    expect(java).toContain('Js.toISOString(d)');
    expect(java).toContain('r.matcher(s).find()');
  });

  it('translates substring', () => {
    expect(body('s: string', 'const x = s.substring(1, 2);')).toContain(
      'String x = Js.substring(s, 1, 2);',
    );
  });

  it.each([
    [
      'a: any',
      'const x = a.toString(2);',
      'Unsupported method toString of any',
    ],
    [
      'a: string',
      'const x = JSON.stringify(a, null);',
      'Unsupported method stringify of mixed',
    ],
  ])('fails on unsupported calls of builtins (%s)', (params, code, message) => {
    expect(bodyError(params, code)).toMatch(new RegExp(`^${message}`));
  });

  it('adds all elements of arrays', () => {
    expect(body('a: string[], b: string[]', 'a.push(...b);')).toContain(
      'a.addAll(b);',
    );
  });

  it.each([
    ['a: any', 'a.foo();', 'Unsupported method foo of any: a.foo()'],
    [
      'a: string',
      "a.startsWith('a', 1);",
      "Unsupported method startsWith of string: a.startsWith('a', 1)",
    ],
    ['a: string', 'a.trim();', 'Unsupported method trim of string: a.trim()'],
    ['a: string[]', 'a.push();', 'Unsupported method push of array: a.push()'],
    [
      'a: string[]',
      'a.sort((x, y) => 0);',
      'Unsupported method sort of array: a.sort((x, y) => 0)',
    ],
    ['a: string[]', 'a.join();', 'Unsupported method join of array: a.join()'],
    [
      'a: Set<string>',
      "a.delete('a');",
      "Unsupported method delete of set: a.delete('a')",
    ],
    [
      'a: Map<string, string>',
      'a.clear();',
      'Unsupported method clear of map: a.clear()',
    ],
    [
      'a: Date',
      'a.getTime();',
      'Unsupported method getTime of date: a.getTime()',
    ],
    [
      'a: RegExp',
      "a.exec('a');",
      "Unsupported method exec of regexp: a.exec('a')",
    ],
    [
      'a: number',
      'a.toFixed();',
      'Unsupported method toFixed of number: a.toFixed()',
    ],
  ])('fails on unsupported methods (%s %s)', (params, code, message) => {
    expect(bodyError(params, code)).toBe(message);
  });

  it.each([
    ['const x = new Set([1]);', 'Unsupported Set constructor: new Set([1])'],
    ['const x = new Map([]);', 'Unsupported Map constructor: new Map([])'],
    [
      'g(new Error());\nfunction g(a: any): void {}',
      'Unsupported constructor: new Error()',
    ],
  ])('fails on unsupported constructors (%s)', (code, message) => {
    expect(bodyError('', code)).toBe(message);
  });

  it('translates regular expressions', () => {
    const java = body(
      '',
      "const x = new RegExp('a');\nconst y = new RegExp('a', 'g');",
    );
    expect(java).toContain('Js.regExp("a", "")');
    expect(java).toContain('Js.regExp("a", "g")');
  });

  it('fails on instances of classes with subclasses', () => {
    const files = sourceFiles({
      'lib/shared/a.ts': `export class A {
  m(): this {
    return this;
  }
}
export class B extends A {}`,
      'lib/shared/index.ts': `import { A } from './a';
export function f(): void {
  const a = new A();
}`,
    });
    expect(() => transpileFiles(files)).toThrow(
      'lib/shared/index.ts:3: Classes with subclasses cannot be instantiated: new A()',
    );
  });

  it('fails on arguments for classes without constructor', () => {
    expect(
      error(
        'export class A {}\nexport function f(): void {\n  const a = new A(1);\n}',
      ),
    ).toBe('Unsupported constructor: new A(1)');
  });

  it('translates && and || of booleans', () => {
    expect(
      body('a: boolean, b: boolean', 'const x = a && b;\nconst y = a || b;'),
    ).toContain('boolean x = a && b;');
  });

  it('fails on && of other than booleans', () => {
    expect(bodyError('a: string, b: string', 'const x = a && b;')).toBe(
      '&& is supported only for booleans: a && b',
    );
  });

  it('fails on ?? with an expression', () => {
    expect(bodyError('a: string[]', 'const x = a.indexOf("a") ?? 1;')).toBe(
      'The left side of ?? must be a variable: a.indexOf("a") ?? 1',
    );
  });

  it('translates typeof checks', () => {
    const java = body(
      'a: string | number',
      "const x = 'string' === typeof a;\nconst y = typeof a !== 'number';",
    );
    expect(java).toContain('a instanceof String');
    expect(java).toContain('!(a instanceof Number)');
  });

  it('fails on unsupported typeof checks', () => {
    expect(
      bodyError('a: string | number', "const x = typeof a === 'object';"),
    ).toBe("Unsupported typeof check: typeof a === 'object'");
  });

  it('compares strings', () => {
    const java = body(
      'a: string, b: string',
      "const x = 'a' === a;\nconst y = a !== 'b';\nconst z = a === b;",
    );
    expect(java).toContain('"a".equals(a)');
    expect(java).toContain('!"b".equals(a)');
    expect(java).toContain('Objects.equals(a, b)');
  });

  it('compares boxed numbers', () => {
    expect(
      transpile(
        'function g(a?: number, b?: number): boolean {\n  return a! === b!;\n}',
      ),
    ).toContain('return (int) a == b;');
  });

  it.each([
    [
      'a: string[], b: string[]',
      'const x = a === b;',
      'Equality is supported for strings, numbers and booleans: a === b',
    ],
    [
      'a: boolean, b: boolean',
      'const x = a < b;',
      'Comparisons are supported for strings and numbers: a < b',
    ],
    [
      'a: boolean, b: boolean',
      'const x = a + b;',
      '+ is supported for strings and numbers: a + b',
    ],
    [
      'a: string, b: string',
      'const x = a - b;',
      '- is supported for numbers: a - b',
    ],
    [
      'a: string[]',
      "const x = 'a' in a;",
      "in is supported for records: 'a' in a",
    ],
    [
      'a: any',
      'const x = a instanceof g;\nfunction g(): void {}',
      'Unsupported instanceof: a instanceof g',
    ],
    ['a: number', 'const x = a / 2;', 'Unsupported operator /: a / 2'],
  ])('fails on unsupported operators (%s %s)', (params, code, message) => {
    expect(bodyError(params, code)).toBe(message);
  });

  it('concatenates numbers and strings', () => {
    expect(body('a: number, b: string', 'return a + b;', 'string')).toContain(
      'return Js.toString(a) + b;',
    );
  });

  it('checks instances of classes', () => {
    expect(
      transpile(
        'export class A {}\nexport function f(a: any): boolean {\n  return a instanceof A;\n}',
      ),
    ).toContain('return a instanceof A;');
  });

  it('passes lists to public parameters of any and number arrays', () => {
    const java = transpile(`export class A {
  m(a: any[], b: number[]): void {}
  n(a: string[]): void {
    const b = [1];
    this.m(a, b);
  }
}`);
    expect(java).toContain('this.m(a, b);');
  });

  it('fails on calls of services without matching overload', () => {
    const files = sourceFiles({
      'lib/generated/policy-statements/ec2.ts': `export class Ec2 {
  public m(a: string | number): void {}
}`,
      'lib/shared/index.ts': `import { Ec2 } from '../generated/policy-statements/ec2';
export function f(a: any): void {
  new Ec2().m(a);
}`,
    });
    expect(() => transpileFiles(files)).toThrow(
      'lib/shared/index.ts:3: No Java overload matches the arguments: new Ec2().m(a)',
    );
  });

  it('calls super() in classes without base class', () => {
    expect(
      transpile('export class A {\n  constructor() {\n    super();\n  }\n}'),
    ).toContain('super();');
  });

  it('compares with undefined on the left', () => {
    const java = body(
      'a?: string',
      'const x = undefined === a;\nconst y = a != null;',
    );
    expect(java).toContain('boolean x = a == null;');
    expect(java).toContain('boolean y = a != null;');
  });

  it('compares boxed booleans', () => {
    expect(
      transpile(
        'function g(a?: boolean, b?: boolean): boolean {\n  return a! === b!;\n}',
      ),
    ).toContain('return (boolean) a == b;');
  });

  it('negates numbers', () => {
    expect(body('a: number', 'return -a;', 'number')).toContain('return -a;');
  });

  it('refers to enums and classes by their name', () => {
    expect(
      transpile(
        "export enum E {\n  A = 'a',\n}\nexport function f(): string[] {\n  return Object.keys(E);\n}",
      ),
    ).toContain('return new ArrayList<>(E.keySet());');
  });

  it('narrows variables on both sides of operators', () => {
    const java = transpile(`export class A {
  m(x: string | number): string {
    if (typeof x === 'string' && x === 'a') {
      return x + 'b' + ('c' + x);
    }
    return '';
  }
}`);
    expect(java).toContain('"a".equals(((String) x))');
    expect(java).toContain('return ((String) x) + "b" + ("c" + ((String) x));');
  });

  it('passes null and parenthesized arguments to overloads', () => {
    expect(
      transpile(`export class A {
  m(a?: string): void {}
  n(a: string): void {
    this.m(undefined);
    this.m((a));
  }
}`),
    ).toContain('this.m((a));');
  });
});
