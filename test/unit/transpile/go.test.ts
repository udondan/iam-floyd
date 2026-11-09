import * as path from 'path';
import { SourceFile } from 'ts-morph';
import { describe, expect, it } from 'vitest';

import {
  collectionSourceFiles,
  coreSourceFiles,
  isServiceFile,
  managedPoliciesSourceFiles,
  servicePrincipalsSourceFiles,
} from '../../../lib/generator/transpile';
import {
  goDoc,
  goFileName,
  goString,
  GoTranspiler,
} from '../../../lib/generator/transpile/go';
import { reusedSourceFiles, sourceFiles } from '../helpers';

const modulePath = 'udondan.github.io/iam-floyd/go/iamfloyd';

/**
 * The packages as bin/transpile.ts assigns them
 */
function packageOf(file: SourceFile): string {
  const relative = path.relative(process.cwd(), file.getFilePath());
  if (isServiceFile(file) || relative == path.join('lib', 'shared', 'all.ts')) {
    return 'statement';
  }
  return relative.startsWith(path.join('lib', 'collection'))
    ? 'collection'
    : 'iamfloyd';
}

function transpileFiles(files: SourceFile[]): Map<string, string> {
  return new GoTranspiler({
    packageOf,
    rootPackage: 'iamfloyd',
    modulePath,
    header: 'header',
  }).transpile(files.filter((file) => !isServiceFile(file)));
}

/**
 * The files in memory. The project is reused, except for subclasses: the language service, which
 * finds the subclasses, does not see the files of the previous snippet replaced.
 */
function snippet(files: Record<string, string>): SourceFile[] {
  return /\bextends\b/.test(Object.values(files).join('\n'))
    ? sourceFiles(files)
    : reusedSourceFiles(files);
}

/**
 * Transpiles the code of `lib/shared/index.ts` and returns all Go files joined
 */
function transpile(code: string): string {
  return [
    ...transpileFiles(snippet({ 'lib/shared/index.ts': code })).values(),
  ].join('\n');
}

function fails(code: string, message: string) {
  expect(() => transpile(code)).toThrow(message);
}

/** A generic class: it has a subclass and a method that returns `this` */
const generic = `export class A {
  public a(): this {
    return this;
  }
}
export class B extends A {}
`;

describe('GoTranspiler on the real modules', () => {
  it('transpiles the core', () => {
    const files = transpileFiles(coreSourceFiles());
    expect(files.get('policy_statement.go')).toContain('package iamfloyd');
  });

  it('transpiles the collection', () => {
    const files = transpileFiles(collectionSourceFiles());
    expect([...files.values()].join('\n')).toContain('package collection');
  });

  it('transpiles the managed policies', () => {
    const files = transpileFiles(managedPoliciesSourceFiles());
    expect([...files.values()].join('\n')).toContain('AwsManagedPolicy');
  });

  it('transpiles the service principals', () => {
    const files = transpileFiles(servicePrincipalsSourceFiles());
    expect([...files.values()].join('\n')).toContain('AwsServicePrincipal');
  });
});

describe('helpers', () => {
  it('names files without build constraints', () => {
    expect(goFileName('fooLinux')).toBe('foo_linux_.go');
    expect(goFileName('linux')).toBe('linux.go');
  });

  it('escapes strings', () => {
    expect(goString('"\\\n\r\té\u{1f600}\u0001')).toBe(
      '"\\"\\\\\\n\\r\\t\\u00e9\\U0001f600\\u0001"',
    );
    expect(() => goString('\ud800')).toThrow(
      'Lone surrogates are not supported',
    );
  });

  it('trims the lines of doc comments', () => {
    expect(goDoc(['', 'a', '', ''])).toEqual(['// a']);
  });
});

describe('module level', () => {
  it('fails on unsupported statements', () => {
    fails(`console.log('a');`, 'Unsupported statement at module level');
  });

  it('fails on names used twice', () => {
    fails(
      `export function foo(): void {}
export function Foo(): void {}`,
      'Go name foo is already used in package iamfloyd',
    );
  });

  it('fails on files written twice', () => {
    expect(() =>
      transpileFiles(
        snippet({
          'lib/shared/a.ts': 'export function f(): void {}',
          'lib/shared/b/a.ts': 'export function g(): void {}',
        }),
      ),
    ).toThrow('Go file a.go is already written');
  });

  it('fails on names not exported to another package', () => {
    expect(() =>
      transpileFiles(
        snippet({
          'lib/shared/a.ts': 'export function helper(): void {}',
          'lib/collection/b.ts': `import { helper } from '../shared/a';
export function g(): void {
  helper();
}`,
        }),
      ),
    ).toThrow('helper is not exported to package collection');
  });

  it('fails on variables', () => {
    fails('let x = 1;', 'Module level variables must be constants');
  });

  it('fails on constants without value', () => {
    fails('const x: string;', 'Constants must be initialized');
  });

  it('fails on constants used before they are declared', () => {
    fails(
      `function f(): string {
  return x;
}
const x = 'a';`,
      'Constants must be declared before they are used',
    );
  });

  it('declares constants and variables', () => {
    const out = transpile(`const a = 'x';
const b = ['x'];`);
    expect(out).toContain('const a = "x"');
    expect(out).toContain('var b = []string{"x"}');
  });

  it('fails on functions without a name', () => {
    fails('export default function (): void {}', 'Unsupported function');
  });

  it('fails on functions without a body', () => {
    fails('export declare function f(): void;', 'Unsupported function');
    fails(
      `declare class A {
  constructor();
}`,
      'Functions must have a body',
    );
  });

  it('fails on generic and async functions', () => {
    fails(
      'function f<T>(x: T): void {}',
      'Generic and async functions are not supported',
    );
    fails(
      'async function f(): Promise<void> {}',
      'Generic and async functions are not supported',
    );
  });
});

describe('docs', () => {
  it('writes the tags', () => {
    const out = transpile(`/**
 * Does it
 *
 * @param x
 * @param y the y
 * @see https://example.com/a
 * @deprecated
 */
export function f(x: string, y: string): void {}`);
    expect(out).toContain('// y: the y');
    expect(out).toContain('// See https://example.com/a');
    expect(out).toContain('// Deprecated:');
    expect(out).not.toContain('// x:');
  });

  it('fails on unsupported tags', () => {
    fails(
      `/**
 * @example f()
 */
export function f(): void {}`,
      'Unsupported JSDoc tag',
    );
  });
});

describe('enums and constants', () => {
  it('fails on enums with numbers', () => {
    fails('enum E { A = 1 }', 'Enum members must be strings');
  });

  it('fails on static properties that are not strings', () => {
    fails(
      `class A {
  static x = 1;
}`,
      'Static properties must be strings',
    );
  });

  it('does not document private static properties', () => {
    const out = transpile(`class A {
  /** hidden */
  private static x = 'a';
}`);
    expect(out).toContain('A_X = "a"');
    expect(out).not.toContain('hidden');
  });
});

describe('classes', () => {
  it('fails on unsupported class declarations', () => {
    fails(
      `abstract class A {
  m(): void {}
}`,
      'Unsupported class declaration',
    );
  });

  it('fails on classes without a name', () => {
    fails(
      `export default class {
  m(): void {}
}`,
      'Classes must have a name',
    );
  });

  it('fails on optional properties', () => {
    fails(
      `class A {
  x?: string;
}`,
      'Optional properties are not supported',
    );
  });

  it('fails on properties without type and initializer', () => {
    fails(
      `class A {
  x;
}`,
      'Properties need a type or an initializer',
    );
  });

  it('fails on constructor overloads', () => {
    fails(
      `class A {
  constructor() {}
  constructor(x: string) {}
}`,
      'Constructor overloads are not supported',
    );
  });

  it('fails on parameter properties', () => {
    fails(
      'class A {\n  constructor(private x: string) {}\n}',
      'Parameter properties are not supported',
    );
  });

  it('fails on members with the same Go name', () => {
    fails(
      `class A {
  private self = 1;
}`,
      'Go name self is already used',
    );
  });

  it('fails on static methods', () => {
    fails(
      `class A {
  static m(): void {}
}`,
      'Static methods and overloads are not supported',
    );
  });

  it('fails on constructors without super()', () => {
    fails(
      `class A {
  constructor() {}
}
class B extends A {
  constructor() {
    console.log('a');
  }
}`,
      'Constructors must start with super()',
    );
    fails(
      `class A {}
class B extends A {
  constructor() {}
}`,
      'Constructors must start with super()',
    );
  });

  it('passes the rest parameters to the base class', () => {
    expect(
      transpile(`class A {
  constructor(...xs: string[]) {}
}
class B extends A {}`),
    ).toContain('initA(&this.A, xs...)');
  });

  it('initializes the base class without constructor', () => {
    expect(
      transpile(`class A {
  m(): void {}
}
class B extends A {}`),
    ).toContain('initA(&this.A)');
  });

  it('sets self in the root generic class', () => {
    const out = transpile(generic);
    expect(out).toContain('func initA[T any](this *A[T], self T)');
    expect(out).toContain('this.self = self');
  });

  it('writes interface methods without result', () => {
    expect(
      transpile(`export class A {
  public a(): this {
    return this;
  }
  public reset(): void {}
}
export class B extends A {}
export function f(x: A): void {}`),
    ).toContain('Reset()\n');
  });

  it('references the generic class inside itself as T', () => {
    expect(
      transpile(`export class A {
  public a(x: A): this {
    return this;
  }
}
export class B extends A {}`),
    ).toContain('A(x T) T');
  });

  it('fails on references to generic classes without interface', () => {
    fails(
      `${generic}
function f(x: A): void {}`,
      'Classes with subclasses cannot be referenced',
    );
  });

  it('fails on instances of generic classes', () => {
    fails(
      `${generic}
function f(): void {
  const b = new A();
}`,
      'Classes with subclasses cannot be instantiated',
    );
  });

  it('types this explicitly', () => {
    expect(
      transpile(`class A {
  m(): this {
    return this;
  }
}`),
    ).toContain('func (this *A) M() *A');
  });

  it('fails on this outside of classes', () => {
    expect(() => transpile('function f(): this {}')).toThrow('Not in a class');
  });

  it('calls protected methods only in the same package', () => {
    expect(() =>
      transpileFiles(
        snippet({
          'lib/shared/a.ts': `export class A {
  protected m(): void {}
}`,
          'lib/collection/b.ts': `import { A } from '../shared/a';
export class B extends A {
  public n(): void {
    this.m();
  }
}`,
        }),
      ),
    ).toThrow('m is not exported to package collection');
  });

  it('fails on unsupported constructors', () => {
    fails(
      `function f(): void {
  const d = new Date();
}`,
      'Unsupported constructor',
    );
    fails(
      `class A {}
function f(): void {
  const a = new A('x');
}`,
      'Unsupported constructor',
    );
  });
});

describe('parameters', () => {
  it('fails on default values', () => {
    fails(
      `function f(x: string = 'a'): void {}`,
      'Default values are not supported',
    );
  });

  it('fails on destructured parameters', () => {
    fails(
      'function f({ a }: { a: string }): void {}',
      'Destructured parameters are not supported',
    );
  });

  it('fails on parameters without type', () => {
    fails('function f(x): void {}', 'Parameters must have a type');
  });

  it('fails on rest parameters without array type', () => {
    fails(
      'function f(...xs: Array<string>): void {}',
      'Rest parameters must have an array type',
    );
  });
});

describe('types', () => {
  it('translates type nodes', () => {
    const out = transpile(`type S = 'a' | 'b';
function f(
  a: 'a',
  b: (string),
  c: string | null,
  d: string | number,
  e: Array<string>,
  f: Set<string>,
  g: Map<string, number>,
  h: S,
  i: Date,
  j: RegExp,
  k: void[],
): void {}`);
    expect(out).toContain(
      'func f(a string, b string, c *string, d interface{}, e []string, f *js.Set[string], g *js.Map[string, int], h string, i time.Time, j *regexp.Regexp, k []void)',
    );
  });

  it('fails on unresolved types', () => {
    fails('function f(x: Foo): void {}', 'Unresolved type');
  });

  it('fails on unsupported types', () => {
    fails('function f(x: { a: string }): void {}', 'Unsupported type');
    fails(
      `interface I {}
function f(x: I): void {}`,
      'Unsupported type',
    );
  });

  it('infers types', () => {
    const out = transpile(`function v(): void {}
function a(x: any) {
  return x;
}
function b() {
  return [v()];
}
function c() {
  return null;
}
function d(x: boolean, y: boolean) {
  return y ? x : undefined;
}
function e(x: boolean) {
  return x ? 'a' : 1;
}
function g(x: Date) {
  return x;
}
function h(x: Record<string, number>) {
  return x;
}
function i() {
  return {};
}`);
    expect(out).toContain('func a(x interface{}) interface{}');
    expect(out).toContain('func b() []void');
    expect(out).toContain('func c() nil');
    expect(out).toContain('func d(x bool, y bool) *bool');
    expect(out).toContain('func e(x bool) interface{}');
    expect(out).toContain('func g(x time.Time) time.Time');
    expect(out).toContain('func h(x *js.Record[int]) *js.Record[int]');
    expect(out).toContain('func i() *js.Record[interface{}]');
  });

  it('infers the types of properties', () => {
    const out = transpile(`class A {
  r = new RegExp('a');
}`);
    expect(out).toContain('R *regexp.Regexp');
    expect(out).toContain('this.R = js.RegExp("a", "")');
  });

  it('infers records from their properties', () => {
    expect(() =>
      transpile(`class A {
  x = { a: 'b' };
}`),
    ).toThrow('Only empty object literals are supported');
  });

  it('fails on tuples', () => {
    fails(
      `class A {
  x = ['a'] as const;
}`,
      'Unsupported array type',
    );
  });

  it('fails on unsupported inferred types', () => {
    fails(
      `class A {
  x = Symbol();
}`,
      'Unsupported type',
    );
  });
});

describe('conversions', () => {
  it('converts nil', () => {
    expect(
      transpile(`function f(): string[] {
  return null;
}`),
    ).toContain('return nil');
    fails(
      `function f(): string {
  return null;
}`,
      'nil cannot be converted to string',
    );
  });

  it('converts interface{}', () => {
    const out = transpile(`function a(x: any): any[] {
  return x;
}
function b(x: any): number {
  return x;
}
function c(x: any): string {
  return x;
}`);
    expect(out).toContain('return js.ToList(x)');
    expect(out).toContain('return int(x.(float64))');
    expect(out).toContain('return x.(string)');
  });

  it('narrows interface{}', () => {
    const out = transpile(`function a(x: any): boolean {
  if (typeof x === 'boolean') {
    return x;
  }
  return false;
}
function b(x: any, n: number): boolean {
  if (typeof x === 'number') {
    return x == n && n == x && x < n && n < x;
  }
  return false;
}`);
    expect(out).toContain('return x.(bool)');
    expect(out).toContain('x.(float64) == float64(n)');
    expect(out).toContain('float64(n) == x.(float64)');
    expect(out).toContain('x.(float64) < float64(n)');
    expect(out).toContain('float64(n) < x.(float64)');
  });

  it('converts lists of pointers', () => {
    const out = transpile(`export class A {
  public m(xs: string[]): void {
    const ys: string[] = xs;
    for (const x of xs) {
      ys.push(x);
    }
  }
  public r(...xs: string[]): void {
    const ys: string[] = xs;
  }
  public n(): void {
    const ys: string[] = [];
    this.m(ys);
    this.r(...ys);
  }
}`);
    expect(out).toContain('var ys []string = js.Values(*xs)');
    expect(out).toContain('var ys []string = js.Values(xs)');
    expect(out).toContain('this.M(js.Ptr(js.Ptrs(ys)))');
    expect(out).toContain('this.R(js.Ptrs(ys)...)');
    expect(out).toContain('for _, x := range *xs {');
  });

  it('fails on unsupported conversions', () => {
    fails(
      `function f(): void {
  const x: number = 'a';
}`,
      'Cannot convert string to int',
    );
  });

  it('fails on iterating over unknown types', () => {
    fails(
      `function g(x: any): string[] | number[] {
  return x;
}
function f(): void {
  for (const y of g(1)) {
    console.log(y);
  }
}`,
      'Cannot iterate over interface{}',
    );
  });

  it('fails on entries of values that are not records', () => {
    fails(
      `function f(x: Set<string>[]): void {
  for (const [k, v] of Object.entries(x)) {
    console.log(k, v);
  }
}`,
      'Not a record or map: []*js.Set[string]',
    );
    fails(
      `function f(x: any): void {
  x.a = 1;
}`,
      'Not a record or map: interface{}',
    );
  });
});

describe('statements', () => {
  it('translates statements', () => {
    const out = transpile(`function f(n: number, b: boolean): void {
  {
    let x: string;
    let y = null;
  }
  if (n == 1) {
    n = 2;
  } else if (n == 2) {
    n = 3;
  } else if (b) {
    n = 4;
  }
  for (let i = 0; i < 3; i--) {
    continue;
  }
}`);
    expect(out).toContain('var x string');
    expect(out).toContain('var y interface{}');
    expect(out).toContain('} else if n == 2 {');
    expect(out).toContain('} else if b {');
    expect(out).toContain('for i := 0; i < 3; i-- {');
  });

  it('fails on destructuring', () => {
    fails(
      `function f(xs: string[]): void {
  const [a] = xs;
}`,
      'Destructuring is not supported',
    );
  });

  it('fails on variables without type and value', () => {
    fails(
      `function f(): void {
  let x;
}`,
      'Variables need a type or an initializer',
    );
  });

  it('fails on variables used before they are declared', () => {
    fails(
      `function f(): string {
  const a = b;
  const b = 'x';
  return a;
}`,
      'Declaration used before it is declared',
    );
  });

  it('fails on throwing other values', () => {
    fails(
      `function f(): void {
  throw 'a';
}`,
      'Only `throw new Error(message)` is supported',
    );
  });

  it('fails on labels', () => {
    fails(
      `function f(xs: string[]): void {
  for (const x of xs) {
    break outer;
  }
}`,
      'Labels are not supported',
    );
    fails(
      `function f(): void {
  try {
  } catch {}
}`,
      'Unsupported statement',
    );
  });

  it('fails on unsupported loop variables', () => {
    fails(
      `function f(xs: string[]): void {
  let x = '';
  for (x of xs) {
  }
}`,
      'Unsupported loop variable',
    );
  });

  it('fails on destructuring arrays in loops', () => {
    fails(
      `function f(xs: string[][]): void {
  for (const [a, b] of xs) {
  }
}`,
      'Destructuring is supported only for entries of maps',
    );
  });

  it('fails on entries not destructured into key and value', () => {
    fails(
      `function f(m: Map<string, string>): void {
  for (const [a, b, c] of m) {
  }
}`,
      'Entries must be destructured into key and value',
    );
  });

  it('loops over entries', () => {
    const out =
      transpile(`function f(m: Map<string, number>, r: Record<string, string>, xs: string[]): number {
  let n = 0;
  for (const [k, v] of m) {
    xs.push(k);
  }
  for (const [_, v] of Object.entries(r)) {
    n = n + 1;
  }
  return n;
}`);
    expect(out).toContain('k := entry1.Key');
    expect(out).toContain('for _, _ := range r.Values() {');
  });

  it('fails on loops over other values', () => {
    fails(
      `function f(): void {
  for (const c of 'abc') {
  }
}`,
      'Loops are supported over arrays, sets and map entries',
    );
  });

  it('fails on for loops without incrementor', () => {
    fails(
      `function f(): void {
  for (let i = 0; i < 3; ) {
  }
}`,
      'Unsupported for loop',
    );
  });

  it('fails on unsupported expression statements', () => {
    fails(
      `function f(n: number): void {
  n == 1;
}`,
      'Unsupported expression statement',
    );
    fails(
      `function f(b: boolean): void {
  !b;
}`,
      'Unsupported expression statement',
    );
  });

  it('fails on push with spread and other arguments', () => {
    fails(
      `function f(xs: string[], ys: string[]): void {
  xs.push(...ys, 'a');
}`,
      'Spread arguments must be the only argument of push',
    );
  });

  it('fails on push into lists of lists', () => {
    fails(
      `function f(xs: string[][]): void {
  xs[0].push('a');
}`,
      'Unsupported push',
    );
  });

  it('fails on unsupported forEach', () => {
    fails(
      `function f(m: Map<string, string>): void {
  m.forEach((v) => console.log(v));
}`,
      'forEach is supported only on arrays and sets',
    );
    fails(
      `function f(xs: string[]): void {
  xs.forEach((x, i) => console.log(x));
}`,
      'forEach callbacks must have one parameter',
    );
    fails(
      `function f(xs: string[]): void {
  xs.forEach((x) => {
    return;
  });
}`,
      'forEach callbacks must not return',
    );
  });

  it('iterates over sets with forEach', () => {
    expect(
      transpile(`function f(s: Set<string>, xs: string[]): void {
  s.forEach((x) => xs.push(x));
}`),
    ).toContain('for _, x := range s.Values() {');
  });
});

describe('assignments', () => {
  it('fails on unsupported targets', () => {
    fails(
      `function g(): void {}
function f(): void {
  g = 1;
}`,
      'Unsupported assignment target',
    );
    fails(
      `class A {
  m(): void {
    this.m = 1;
  }
}`,
      'Unsupported assignment target',
    );
    fails(
      `class A {
  x = 1;
}
function f(a: A): void {
  a.x = 2;
}`,
      'Unsupported assignment target',
    );
  });

  it('fails on unsupported assignments', () => {
    fails(
      `function f(r: Record<string, number>): void {
  r['a'] += 1;
}`,
      'Unsupported assignment',
    );
    fails(
      `function f(s: string): void {
  s[0] = 'a';
}`,
      'Unsupported assignment',
    );
    fails(
      `function f(r: Record<string, number>): void {
  r.a += 1;
}`,
      'Unsupported assignment',
    );
    fails(
      `function f(b: boolean): void {
  b += 1;
}`,
      '+= is supported for strings and numbers',
    );
  });

  it('creates empty maps and sets', () => {
    const out = transpile(`function f(): void {
  const m: Map<string, number> = {};
  const s: Set<string> = {};
}`);
    expect(out).toContain('m := js.NewMap[string, int]()');
    expect(out).toContain('s := js.NewSet[string]()');
  });
});

describe('conditions', () => {
  it('translates the truthiness', () => {
    const out =
      transpile(`function f(b?: boolean, s: string, n?: number, xs: string[]): void {
  if (b) {
  }
  if (s) {
  }
  if (n) {
  }
  if (xs) {
  }
}`);
    expect(out).toContain('if js.Or(b, false) {');
    expect(out).toContain('if s != "" {');
    expect(out).toContain('if js.Or(n, 0) != 0 {');
    expect(out).toContain('if xs != nil {');
  });

  it('fails on conditions of unknown types', () => {
    fails(
      `function f(x: any): void {
  if (x) {
  }
}`,
      'Conditions must have a known type',
    );
    fails(
      `function f(d: Date): void {
  if (d) {
  }
}`,
      'Unsupported condition of type time.Time',
    );
  });
});

describe('expressions', () => {
  it('fails on numbers that are not integers', () => {
    fails(
      `function f(): number {
  return 1.5;
}`,
      'Only integers are supported',
    );
  });

  it('fails on element access on strings', () => {
    fails(
      `function f(s: string): string {
  return s[0];
}`,
      'Element access is supported on arrays and records',
    );
  });

  it('translates unary operators', () => {
    expect(
      transpile(`function f(n: number): number {
  return -n;
}`),
    ).toContain('return -n');
    fails(
      `function f(n: number): number {
  return +n;
}`,
      'Unsupported operator',
    );
  });

  it('fails on spread elements', () => {
    fails(
      `function f(xs: string[]): string[] {
  return [...xs];
}`,
      'Spread elements are not supported',
    );
  });

  it('fails on array literals of other types', () => {
    fails(
      `function f(): void {
  const x: any = [1];
}`,
      'Unsupported array literal',
    );
    fails(
      `function f(): void {
  const x: any = [];
}`,
      'Unsupported array literal',
    );
  });

  it('translates object literals', () => {
    expect(
      transpile(`function f(): void {
  const r = {};
}`),
    ).toContain('r := js.NewRecord[interface{}]()');
    fails(
      `function f(): void {
  const r = { a: 1 };
}`,
      'Only empty object literals are supported',
    );
  });

  it('fails on unsupported expressions', () => {
    fails(
      `function f(): void {
  const g = () => 1;
}`,
      'Unsupported expression',
    );
  });

  it('checks the type of properties of type any', () => {
    expect(
      transpile(`class A {
  x: any = 1;
  m(): boolean {
    return typeof this.x === 'string' && 'number' === typeof this.x;
  }
}`),
    ).toContain(
      'js.TypeOf(this.X) == "string" && js.TypeOf(this.X) == "number"',
    );
  });

  it('translates conditional expressions with nil', () => {
    const out = transpile(`function f(b: boolean, xs: string[]): string[] {
  const a = b ? null : xs;
  return b ? xs : null;
}`);
    expect(out).toContain(
      'func() []string { if b { return nil }; return xs }()',
    );
    expect(out).toContain(
      'func() []string { if b { return xs }; return nil }()',
    );
  });

  it('fails on ?? for values', () => {
    fails(
      `function f(s: string): string {
  return s ?? 'a';
}`,
      '?? is not supported for string',
    );
  });

  it('translates undefined', () => {
    expect(
      transpile(`function f(): string[] {
  return undefined;
}`),
    ).toContain('return nil');
  });

  it('fails on unsupported identifiers', () => {
    fails(
      `function g(): void {}
function f(): void {
  const x = g;
}`,
      'Unsupported identifier',
    );
    fails(
      `function f(): boolean {
  return typeof foo === 'string';
}`,
      'Unresolved identifier',
    );
  });

  it('translates typeof, undefined and templates', () => {
    const out =
      transpile(`function f(a: string, b: string, x: any, s: string, xs: string[]): string {
  return \`x\${a + b}\` + typeof x + typeof s + (undefined === xs);
}`);
    expect(out).toContain('"x" + (a + b)');
    expect(out).toContain('js.TypeOf(x)');
    expect(out).toContain('js.TypeOf(js.Normalize(s))');
    expect(out).toContain('xs == nil');
  });

  it('translates templates with a single part', () => {
    expect(
      transpile(`function f(s: string): string {
  return \`\${s}\`;
}`),
    ).toContain('return s');
  });

  it('fails on unsupported properties', () => {
    fails(
      `function f(x: any): number {
  return x.length;
}`,
      'Unsupported length',
    );
    fails(
      `class A {
  m(): void {
    const x = this.m;
  }
}`,
      'Unsupported property',
    );
  });
});

describe('calls', () => {
  it('passes spread arguments to rest parameters', () => {
    expect(
      transpile(`function g(...a: string[]): void {}
function f(xs: string[]): void {
  g(...xs);
}`),
    ).toContain('g(xs...)');
  });

  it('fails on wrong arguments', () => {
    fails(
      `function g(a: string): void {}
function f(xs: string[]): void {
  g(...xs);
}`,
      'Spread arguments are supported only for rest parameters',
    );
    fails(
      `function g(a: string): void {}
function f(): void {
  g();
}`,
      'Missing argument',
    );
    fails(
      `function g(a: string): void {}
function f(): void {
  g('a', 'b');
}`,
      'Too many arguments',
    );
  });

  it('fails on unsupported callbacks', () => {
    fails(
      `function f(xs: string[][]): string[] {
  return xs.map(([a]) => a);
}`,
      'Destructured parameters are not supported',
    );
    fails(
      `function f(xs: string[]): string[] {
  return xs.map((a, b, c) => a);
}`,
      'Too many parameters',
    );
    fails(
      `function f(xs: string[]): string[] {
  return xs.map((a) => {
    return a;
  });
}`,
      'Callbacks must return an expression',
    );
  });

  it('fails on unsupported calls', () => {
    fails(
      `function f(x: any): void {
  x();
}`,
      'Unsupported call',
    );
    fails(
      `function g(): void {}
function f(): void {
  (g)();
}`,
      'Unsupported call',
    );
  });

  it('translates methods of the standard library', () => {
    const out =
      transpile(`function f(s: string, m: Map<string, number>): boolean {
  return s.toUpperCase() == '' && m.has('a');
}`);
    expect(out).toContain('strings.ToUpper(s) == ""');
    expect(out).toContain('m.Has("a")');
  });

  it('fails on unsupported methods', () => {
    const cases: [string, string, string][] = [
      ['x: any', 'x.foo()', 'Unsupported method foo of any'],
      [
        's: string',
        `s.indexOf('a', 1)`,
        'Unsupported method indexOf of string',
      ],
      ['s: string', 's.trim()', 'Unsupported method trim of string'],
      [
        'xs: string[]',
        'xs.sort((a, b) => 0)',
        'Unsupported method sort of array',
      ],
      ['xs: string[]', `xs.join(',')`, 'Unsupported method join of array'],
      ['s: Set<string>', `s.delete('a')`, 'Unsupported method delete of set'],
      [
        'm: Map<string, string>',
        `m.delete('a')`,
        'Unsupported method delete of map',
      ],
      ['d: Date', 'd.getTime()', 'Unsupported method getTime of date'],
      ['r: RegExp', `r.exec('a')`, 'Unsupported method exec of regexp'],
      ['n: number', 'n.toFixed(1)', 'Unsupported method toFixed of number'],
    ];
    for (const [param, call, message] of cases) {
      fails(
        `function f(${param}): void {
  const y = ${call};
}`,
        message,
      );
    }
  });

  it('constructs sets and regular expressions', () => {
    fails(
      `function f(): void {
  const s = new Set(['a']);
}`,
      'Unsupported Set constructor',
    );
    expect(
      transpile(`function f(): void {
  const r = new RegExp('a', 'i');
}`),
    ).toContain('js.RegExp("a", "i")');
  });
});

describe('operators', () => {
  it('fails on && for other values', () => {
    fails(
      `function f(s: string): string {
  return s && 'a';
}`,
      '&& is supported only for booleans',
    );
  });

  it('fails on comparisons of values that cannot be undefined', () => {
    fails(
      `function f(n: number): boolean {
  return n === undefined;
}`,
      'int cannot be undefined',
    );
  });

  it('fails on comparisons of different types', () => {
    fails(
      `function f(s: string, n: number): boolean {
  return s == n;
}`,
      'Equality is supported for strings, numbers and booleans',
    );
    fails(
      `function f(s: string, n: number): boolean {
  return s < n;
}`,
      'Comparisons are supported for strings and numbers',
    );
  });

  it('translates arithmetic', () => {
    const out = transpile(`function f(x: any, n: number, s: string): string {
  if (typeof x === 'number') {
    const a = n + x;
    const b = n - x;
  }
  return s + n;
}`);
    expect(out).toContain('a := float64(n) + x.(float64)');
    expect(out).toContain('b := float64(n) - x.(float64)');
    expect(out).toContain('return s + js.ToString(n)');
  });

  it('fails on unsupported arithmetic', () => {
    fails(
      `function f(a: boolean, b: boolean): void {
  const c = a + b;
}`,
      '+ is supported for strings and numbers',
    );
    fails(
      `function f(a: string, b: string): void {
  const c = a - b;
}`,
      '- is supported for numbers',
    );
    fails(
      `function f(a: number, b: number): void {
  const c = a % b;
}`,
      'Unsupported operator %',
    );
  });

  it('fails on in and instanceof for other values', () => {
    fails(
      `function f(xs: string[]): boolean {
  return 'a' in xs;
}`,
      'in is supported for records',
    );
    fails(
      `class A {}
function f(x: any): boolean {
  return x instanceof A;
}`,
      'instanceof is supported only for Date',
    );
  });

  it('normalizes values for instanceof', () => {
    expect(
      transpile(`function f(d: Date): boolean {
  return d instanceof Date;
}`),
    ).toContain('js.IsDate(js.Normalize(d))');
  });
});
