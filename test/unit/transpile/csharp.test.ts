import * as path from 'path';
import { SourceFile } from 'ts-morph';
import { describe, expect, it } from 'vitest';

import {
  CSharpTranspiler,
  csharpString,
  xmlDoc,
} from '../../../lib/generator/transpile/csharp';
import {
  collectionSourceFiles,
  coreSourceFiles,
  isServiceFile,
  managedPoliciesSourceFiles,
  servicePrincipalsSourceFiles,
} from '../../../lib/generator/transpile/index';
import { snippetSourceFile, sourceFiles } from '../helpers';

const namespace = 'IAM.Floyd';

function namespaceOf(file: SourceFile): string {
  return isServiceFile(file) ||
    path.relative(process.cwd(), file.getFilePath()) ==
      path.join('lib', 'shared', 'all.ts')
    ? `${namespace}.Statement`
    : namespace;
}

function transpiler(): CSharpTranspiler {
  return new CSharpTranspiler({ namespaceOf, header: 'header' });
}

function transpileModule(files: SourceFile[]): {
  files: Map<string, string>;
  transpiler: CSharpTranspiler;
} {
  const t = transpiler();
  return {
    files: t.transpile(
      files.filter((file) => !isServiceFile(file)),
      namespace,
    ),
    transpiler: t,
  };
}

/**
 * Transpiles the files, and returns their content joined
 */
function transpileFiles(files: SourceFile[]): string {
  return [...transpiler().transpile(files, namespace).values()].join('\n');
}

/**
 * Transpiles `lib/shared/index.ts` with the code, and returns all files joined
 */
function transpile(code: string): string {
  return transpileFiles(snippetSourceFile(code));
}

/**
 * Transpiles the body of a function in `lib/shared/index.ts`
 */
function body(code: string, params = '', returns = 'void'): string {
  return transpile(`export function f(${params}): ${returns} {\n${code}\n}`);
}

function fails(code: string, message: string) {
  expect(() => transpile(code)).toThrow(`: ${message}: `);
}

function bodyFails(
  code: string,
  message: string,
  params = '',
  returns = 'void',
) {
  fails(`export function f(${params}): ${returns} {\n${code}\n}`, message);
}

describe('csharpString', () => {
  it('escapes quotes, backslashes, control characters and non-ASCII', () => {
    expect(csharpString('"\\\n\r\t\u0001é')).toBe(
      '"\\"\\\\\\n\\r\\t\\u0001\\u00e9"',
    );
  });
});

describe('xmlDoc', () => {
  it('converts code blocks and lists at the end', () => {
    expect(xmlDoc(['```', 'a < b', '```', '- item'])).toEqual([
      '/// <summary>',
      '/// <code>',
      '/// a &lt; b',
      '/// </code>',
      '/// <list type="bullet">',
      '/// <item><description>item</description></item>',
      '/// </list>',
      '/// </summary>',
    ]);
  });
});

describe('CSharpTranspiler', () => {
  describe('real modules', () => {
    it('transpiles the core', () => {
      const { files, transpiler } = transpileModule(coreSourceFiles());
      expect(files.get('Statement/All.cs')).toContain(
        'namespace IAM.Floyd.Statement;',
      );
      expect(files.get('PolicyStatement.cs')).toContain(
        'public class PolicyStatement',
      );
      expect(transpiler.publicMethods.get('PolicyStatement')).toBeDefined();
    });

    it('transpiles the collection', () => {
      const { files } = transpileModule(collectionSourceFiles());
      expect(files.size).toBeGreaterThan(0);
    });

    it('transpiles the managed policies', () => {
      const { files } = transpileModule(managedPoliciesSourceFiles());
      expect([...files.values()].join('\n')).toContain('AwsManagedPolicy');
    });

    it('transpiles the service principals', () => {
      const { files } = transpileModule(servicePrincipalsSourceFiles());
      expect([...files.values()].join('\n')).toContain('AwsServicePrincipal');
    });
  });

  describe('files', () => {
    it('fails on two classes with the same name', () => {
      expect(() =>
        transpileFiles(
          sourceFiles({
            'lib/shared/a.ts': 'export class A {}',
            'lib/shared/b.ts': 'export class A {}',
          }),
        ),
      ).toThrow('C# class IAM.Floyd.A is already declared');
    });

    it('fails on statements at module level', () => {
      fails('console.log(1);', 'Unsupported statement at module level');
    });

    it('fails on functions in files with more than one class', () => {
      fails(
        'export class A {}\nexport class B {}\nexport const x = 1;',
        'Functions and constants are supported only in files with at most one class',
      );
    });

    it('fails on references to functions in files with more than one class', () => {
      const files = sourceFiles({
        'lib/shared/a.ts':
          'export class A {}\nexport class B {}\nexport function f(): number { return 1; }',
        'lib/shared/b.ts':
          "import { f } from './a';\nexport function g(): number { return f(); }",
      });
      expect(() => transpileFiles([files[1]])).toThrow(
        'Functions and constants are supported only in files with at most one class',
      );
    });

    it('fails on classes without name', () => {
      fails('export default class {}', 'Classes must have a name');
    });

    it('names the holder class after the file, with a suffix if needed', () => {
      expect(
        transpile('export function index(): number { return 1; }'),
      ).toContain('internal static class IndexModule');
    });

    it('calls functions of other files by their class', () => {
      const files = sourceFiles({
        'lib/shared/a.ts':
          'export class A {}\nexport function f(): number { return 1; }',
        'lib/shared/b.ts':
          "import { f } from './a';\nexport function g(): number { return f(); }",
      });
      expect(transpileFiles(files)).toContain('return A.F();');
    });

    it('calls functions of the file of a base class directly', () => {
      const files = sourceFiles({
        'lib/shared/a.ts':
          'export class A {}\nexport function f(): number { return 1; }',
        'lib/shared/b.ts': `import { A, f } from './a';
export class B extends A {
  public g(): number {
    return f();
  }
}`,
      });
      expect(transpileFiles(files)).toContain('return F();');
    });

    it('declares constants in classes and holder classes', () => {
      const classFile = transpile(`export class A {}
export const a = 'a';
const b = 1;
export const c = [1];`);
      expect(classFile).toContain('public const string A = "a";');
      expect(classFile).toContain('protected const int B = 1;');
      expect(classFile).toContain(
        'public static readonly List<int> C = new List<int> { 1 };',
      );
      const holder = transpile(`export const a = 'a';
const b = 1;`);
      expect(holder).toContain('internal const string A = "a";');
      expect(holder).toContain('private const int B = 1;');
    });

    it('fails on module level variables', () => {
      fails('export let x = 1;', 'Module level variables must be constants');
    });

    it('fails on constants without value', () => {
      fails('export const x: number;', 'Constants must be initialized');
    });

    it('refers to module level constants of other files', () => {
      const files = sourceFiles({
        'lib/shared/a.ts': "export const X = 'x';",
        'lib/shared/b.ts':
          "import { X } from './a';\nexport function g(): string { return X; }",
      });
      expect(transpileFiles(files)).toContain('return A.X;');
    });
  });

  describe('docs', () => {
    it('converts the tags', () => {
      const result = transpile(`export class Foo {
  /**
   * @returns
   * @see "x" <y>
   * @deprecated use g
   */
  public f(): void {}
}`);
      expect(result).toContain('/// <returns></returns>');
      expect(result).toContain(
        '/// <seealso href="%22x%22 <y>">%22x%22 &lt;y&gt;</seealso>',
      );
      expect(result).toContain('/// <remarks>Deprecated: use g</remarks>');
    });

    it('fails on unsupported tags', () => {
      fails(
        'export class Foo {\n  /**\n   * @example x\n   */\n  public f(): void {}\n}',
        'Unsupported JSDoc tag',
      );
    });
  });

  describe('enums', () => {
    it('fails on members that are not strings', () => {
      fails('export enum E { A = 1 }', 'Enum members must be strings');
    });

    it('fails on members with the same C# name', () => {
      fails(
        "export enum E { aB = 'x', a_b = 'y' }",
        'C# name A_B is already used',
      );
    });

    it('refers to enums', () => {
      expect(
        transpile(`export enum E { A = 'a' }
export function f(): number {
  return Object.keys(E).length;
}`),
      ).toContain('return E.Count;');
    });
  });

  describe('classes', () => {
    it('fails on unsupported class declarations', () => {
      fails('export abstract class A {}', 'Unsupported class declaration');
    });

    it('declares generic classes with an interface', () => {
      const result = transpile(`export class A {
  public x(): this {
    return this;
  }
  public y(other: A): void {}
}
export class B extends A {
  public name(): string {
    return 'b';
  }
  public z(): this {
    return this;
  }
  public w(other: B): void {}
}
export class C extends B {
  public v(other: B): void {}
}`);
      expect(result).toContain('public class A<T> where T : A<T>');
      expect(result).toContain('public void Y(A<T> other)');
      expect(result).toContain('public class B<T> : A<T>, IB where T : B<T>');
      expect(result).toContain('public void V(IB other)');
    });

    it('declares the interface of classes without base', () => {
      expect(
        transpile(`export class A {
  public x(): this {
    return this;
  }
  public name(): string {
    return 'a';
  }
}
export class B extends A {}`),
      ).toContain('public class A<T> : IA where T : A<T>');
    });

    it('fails on references to generic classes without interface', () => {
      fails(
        `export class A {
  public x(): this {
    return this;
  }
}
export class B extends A {
  public z(other: A): void {}
}`,
        'Classes with subclasses cannot be referenced, except the last class with a type parameter, by its public methods without parameters',
      );
    });

    it('fails on instances of generic classes', () => {
      fails(
        `export class A {
  public x(): this {
    return this;
  }
}
export class B extends A {
  public f(): void {
    new A().x();
  }
}`,
        'Classes with subclasses cannot be instantiated',
      );
    });

    it('fails on constructor overloads', () => {
      fails(
        `export class A {
  constructor() {}
  constructor(a: string) {}
}`,
        'Constructor overloads are not supported',
      );
    });

    it('fails on properties and methods with the same C# name', () => {
      fails(
        `export class A {
  public a = 1;
  public A(): void {}
}`,
        'C# name A is already used',
      );
    });

    it('fails on methods with the same C# name', () => {
      fails(
        `export class A {
  public a(): void {}
  public A(): void {}
}`,
        'C# name A is already used',
      );
    });

    it('fails on static methods', () => {
      fails(
        'export class A {\n  public static a(): void {}\n}',
        'Static methods and overloads are not supported',
      );
    });

    it('fails on optional properties', () => {
      fails(
        'export class Foo {\n  public a?: string;\n}',
        'Optional properties are not supported',
      );
    });

    it('fails on static properties without value', () => {
      fails(
        'export class Foo {\n  public static a: string;\n}',
        'Static properties must be initialized',
      );
    });

    it('declares properties', () => {
      const result = transpile(`export class Foo {
  public static readonly a = 1;
  public b: string;
  public readonly c: string = 'c';
  private readonly d: number;
  protected e = 1;
}`);
      expect(result).toContain('public static readonly int A = 1;');
      expect(result).toContain('public string B { get; set; }');
      expect(result).toContain('public string C { get; } = "c";');
      expect(result).toContain('private readonly int d;');
      expect(result).toContain('protected int E = 1;');
    });

    it('inherits constructors', () => {
      const result = transpile(`export class A {
  constructor(a: string | number) {}
}
export class B extends A {}
export class C {}
export class D extends C {}`);
      expect(result).toContain('public B(string a)');
      expect(result).toContain('protected B(object a)');
      expect(result).toContain(': base((object)a)');
      expect(result).toContain('public class D : C');
    });

    it('fails on constructors without super()', () => {
      fails(
        `export class A {
  constructor() {}
}
export class B extends A {
  constructor() {
    console.log(1);
  }
}`,
        'Constructors must start with super()',
      );
      fails(
        `export class A {}
export class B extends A {
  constructor() {}
}`,
        'Constructors must start with super()',
      );
    });

    it('calls base() without constructor of the base class', () => {
      expect(
        transpile(`export class A {}
export class B extends A {
  constructor() {
    super();
  }
}`),
      ).toContain(': base()');
    });

    it('fails on toString() with parameters', () => {
      fails(
        `export class A {
  public toString(a: string): string {
    return a;
  }
}`,
        'toString() must not have parameters',
      );
    });

    it('fails on methods without body', () => {
      fails(
        'export declare class Foo {\n  constructor(a: string);\n}',
        'Functions must have a body',
      );
    });

    it('calls static properties', () => {
      const files = sourceFiles({
        'lib/shared/a.ts': "export class A {\n  public static x = 'x';\n}",
        'lib/shared/b.ts': `import { A } from './a';
export class B {
  public static y = 'y';
  public f(): string {
    return A.x + B.y;
  }
}`,
      });
      expect(transpileFiles(files)).toContain('return A.X + B.Y;');
    });

    it('instantiates classes', () => {
      const result = transpile(`export class A {}
export class B {
  constructor(a: string) {}
  public f(): void {
    const a = new A();
    const b = new B('b');
  }
}`);
      expect(result).toContain('new A();');
      expect(result).toContain('new B("b");');
    });

    it('fails on arguments to classes without constructor', () => {
      bodyFails('const a = new Foo();', 'Unsupported constructor');
      fails(
        'export class A {\n  public f(): void {\n    const a = new A(1);\n  }\n}',
        'Unsupported constructor',
      );
    });
  });

  describe('functions', () => {
    it('fails on parameters without type', () => {
      fails('export function f(a): void {}', 'Parameters must have a type');
    });

    it('fails on rest parameters without array type', () => {
      fails(
        'export function f(...a: Array<string>): void {}',
        'Rest parameters must have an array type',
      );
    });

    it('fails on generic and async functions', () => {
      fails(
        'export function f<T>(a: T): void {}',
        'Generic and async functions are not supported',
      );
      fails(
        'export async function f(): Promise<void> {}',
        'Generic and async functions are not supported',
      );
    });

    it('fails on function overloads', () => {
      fails(
        'export function f(a: string): void;\nexport function f(a: any): void {}',
        'Unsupported function',
      );
    });

    it('fails on default values', () => {
      fails(
        "export function f(a = 'a'): void {}",
        'Default values are not supported, use optional parameters',
      );
    });

    it('fails on destructured parameters', () => {
      fails(
        'export function f({ a }: { a: string }): void {}',
        'Destructured parameters are not supported',
      );
    });

    it('fails on optional and rest parameters', () => {
      fails(
        'export class A {\n  public f(a?: string, ...b: string[]): void {}\n}',
        'Optional and rest parameters are not supported together',
      );
    });

    it('fails on overloads with the same parameters', () => {
      fails(
        'export class A {\n  public f(a: any | string): void {}\n}',
        'Two C# overloads have the same parameters (object)',
      );
    });

    it('declares overloads of public methods', () => {
      const result = transpile(`export class A {
  public f(a: string | undefined | 'x', b?: number): void {}
  public g(a: string[], b?: any[]): void {}
}`);
      expect(result).toContain('public void F(string a)');
      expect(result).toContain('F(a, (double?)null);');
      expect(result).toContain(
        'public void G(IEnumerable<string> a, IEnumerable b)',
      );
    });

    it('infers the return type of any', () => {
      const result = transpile(`export class A {
  public f(a: boolean): any {
    if (a) {
      return 1;
    }
    return 'a';
  }
  public g(): any {
    return;
  }
}`);
      expect(result).toContain('public object F(bool a)');
      expect(result).toContain('public void G()');
    });

    it('declares functions in classes', () => {
      const result = transpile(`export class A {}
export function f(): void {}
function g(): void {}`);
      expect(result).toContain('public static void F()');
      expect(result).toContain('protected static void G()');
    });

    it('fails on this outside of classes', () => {
      expect(() => transpile('export function f(): this {}')).toThrow(
        'Not in a class',
      );
    });
  });

  describe('types', () => {
    it('translates type references', () => {
      const result = body(`const a: Array<string> = [];
const b: Set<string> = new Set();
const c: Map<string, number> = new Map<string, number>();
const d: (string | null) = null;
const e: string | number = 1;
const g: Date | undefined = undefined;`);
      expect(result).toContain('List<string> a = new List<string>();');
      expect(result).toContain('HashSet<string> b = new HashSet<string>();');
      expect(result).toContain(
        'Dictionary<string, int> c = new Dictionary<string, int>();',
      );
      expect(result).toContain('string d = null;');
      expect(result).toContain('object e = 1;');
      expect(result).toContain('DateTime? g = null;');
    });

    it('translates this types', () => {
      expect(
        transpile(
          'export class Foo {\n  public f(): this {\n    return this;\n  }\n}',
        ),
      ).toContain('public Foo F()');
    });

    it('fails on unresolved types', () => {
      bodyFails('const a: Foo = 1;', 'Unresolved type');
    });

    it('fails on unsupported types', () => {
      fails(
        `interface I {
  a: string;
}
export function f(a: I): void {}`,
        'Unsupported type',
      );
      bodyFails('const a = Symbol();', 'Unsupported type typeof a');
    });

    it('translates inferred types', () => {
      const result = transpile(`function g(): void {}
export function f(a?: boolean): void {
  const b = g();
  const c = a ? true : undefined;
  const d = {};
}`);
      expect(result).toContain('void b = G();');
      expect(result).toContain('bool? c = ');
      expect(result).toContain(
        'Dictionary<string, object> d = new Dictionary<string, object>();',
      );
    });

    it('fails on variables without type and value', () => {
      bodyFails('let a;', 'Variables need a type or an initializer');
    });
  });

  describe('statements', () => {
    it('translates statements', () => {
      const result = body(
        `{
  let b: number;
  b = 1;
}
if (a == 1) {
  return;
} else if (a == 2) {
  return;
} else {
  return;
}`,
        'a: number',
      );
      expect(result).toContain('int b;');
      expect(result).toContain('else if (a == 2)');
    });

    it('fails on destructuring', () => {
      bodyFails(
        'const [b] = a;',
        'Destructuring is not supported',
        'a: string[]',
      );
    });

    it('copies values of type any into dictionaries', () => {
      expect(body('const b: Record<string, any> = a;', 'a: any')).toContain(
        'Dictionary<string, object> b = Js.ToRecord(a);',
      );
    });

    it('fails on throwing anything but errors', () => {
      bodyFails(
        'throw a;',
        'Only `throw new Error(message)` is supported',
        'a: string',
      );
    });

    it('fails on labels', () => {
      bodyFails(
        'for (const b of a) {\n  break outer;\n}',
        'Labels are not supported',
        'a: string[]',
      );
    });

    it('fails on unsupported statements', () => {
      bodyFails('do {} while (false);', 'Unsupported statement');
    });

    it('fails on unsupported loop variables', () => {
      bodyFails(
        'let b: string;\nfor (b of a) {}',
        'Unsupported loop variable',
        'a: string[]',
      );
    });

    it('fails on destructuring of arrays', () => {
      bodyFails(
        'for (const [b, c] of a) {}',
        'Destructuring is supported only for entries of maps',
        'a: string[][]',
      );
    });

    it('fails on entries not destructured into key and value', () => {
      bodyFails(
        'for (const [b] of a) {}',
        'Entries must be destructured into key and value',
        'a: Map<string, string>',
      );
      bodyFails(
        'for (const [, b] of a) {}',
        'Entries must be destructured into key and value',
        'a: Map<string, string>',
      );
    });

    it('fails on loops over strings', () => {
      bodyFails(
        'for (const b of a) {}',
        'Loops are supported over arrays, sets and map entries',
        'a: string',
      );
    });

    it('fails on for loops without condition', () => {
      bodyFails('for (let i = 0; ; i++) {}', 'Unsupported for loop');
    });

    it('translates increments and decrements', () => {
      const result = body(`let i = 0;
++i;
i--;
--i;`);
      expect(result).toContain('i++;');
      expect(result).toContain('i--;');
    });

    it('fails on unsupported expression statements', () => {
      bodyFails('let i = 1;\ni *= 2;', 'Unsupported expression statement');
      bodyFails('let i = 1;\n-i;', 'Unsupported expression statement');
      bodyFails('let i = 1;\ni;', 'Unsupported expression statement');
    });

    it('fails on forEach on maps', () => {
      bodyFails(
        'a.forEach((b) => {});',
        'forEach is supported only on arrays and sets',
        'a: Map<string, string>',
      );
    });

    it('fails on forEach callbacks with two parameters', () => {
      bodyFails(
        'a.forEach((b, i) => {});',
        'forEach callbacks must have one parameter',
        'a: string[]',
      );
    });

    it('fails on forEach callbacks that return', () => {
      bodyFails(
        'a.forEach((b) => {\n  return;\n});',
        'forEach callbacks must not return',
        'a: string[]',
      );
    });

    it('fails on unsupported assignment targets', () => {
      fails(
        `export class Foo {
  public f(): void {
    this.g = this.g;
  }
  public g(): void {}
}`,
        'Unsupported assignment target',
      );
      fails(
        `export class Foo {
  public a = 1;
  public f(b: Foo): void {
    b.a = 2;
  }
}`,
        'Unsupported assignment target',
      );
    });

    it('fails on unsupported element assignments', () => {
      bodyFails(
        "a['b'] += 'c';",
        'Unsupported assignment',
        'a: Record<string, string>',
      );
      bodyFails("a[0] = 'c';", 'Unsupported assignment', 'a: Set<string>');
      bodyFails(
        "a.b += 'c';",
        'Unsupported assignment',
        'a: Record<string, string>',
      );
    });

    it('assigns to unknown variables', () => {
      expect(
        transpile(`export function f(): void {
  b = 'b';
}`),
      ).toContain('b = "b";');
    });
  });

  describe('expressions', () => {
    it('translates conditions', () => {
      const result = body(
        'if (a) {\n  return;\n}\nif (b) {\n  return;\n}',
        'a: number, b: string[]',
      );
      expect(result).toContain('if (a != 0)');
      expect(result).toContain('if (b != null)');
    });

    it('fails on conditions of unknown type', () => {
      bodyFails(
        'if (a) {\n  return;\n}',
        'Conditions must have a known type',
        'a: any',
      );
      bodyFails(
        'if (a) {\n  return;\n}',
        'Conditions must have a known type',
        'a: string | number',
      );
    });

    it('fails on numbers that are not integers', () => {
      bodyFails('const a = 1.5;', 'Only integers are supported');
      bodyFails('const a = 3000000000;', 'Only integers are supported');
    });

    it('translates element access on maps', () => {
      expect(body("const b = a['x'];", 'a: Map<string, string>')).toContain(
        'object b = a.GetValueOrDefault("x");',
      );
    });

    it('fails on element access on strings', () => {
      bodyFails(
        'const b = a[0];',
        'Element access is supported on arrays and records',
        'a: string',
      );
    });

    it('translates negation', () => {
      expect(body('const b = -a;', 'a: number')).toContain('int b = -a;');
    });

    it('fails on unsupported prefix operators', () => {
      bodyFails('const b = ~a;', 'Unsupported operator', 'a: number');
    });

    it('fails on spread elements', () => {
      bodyFails(
        'const b = [...a];',
        'Spread elements are not supported',
        'a: string[]',
      );
    });

    it('fails on array and object literals of unknown type', () => {
      bodyFails('const b: any = [];', 'Unsupported array literal');
      bodyFails('const b: any = {};', 'Unsupported object literal');
    });

    it('fails on object literals with properties', () => {
      bodyFails(
        'const b = { a: 1 };',
        'Only empty object literals are supported',
      );
    });

    it('translates object literals without contextual type', () => {
      expect(body('const b = [{}];')).toContain(
        'new Dictionary<string, object>()',
      );
    });

    it('fails on unsupported expressions', () => {
      bodyFails('const b = a as string;', 'Unsupported expression', 'a: any');
    });

    it('fails on unresolved identifiers', () => {
      bodyFails('return foo;', 'Unresolved identifier', '', 'string');
    });

    it('translates undefined to null', () => {
      expect(
        body(
          'const b: string | undefined = undefined;\nreturn b ?? undefined;',
          '',
          'string | undefined',
        ),
      ).toContain('return b ?? null;');
    });

    it('translates templates with one part', () => {
      expect(body('return `${a}`;', 'a: string', 'string')).toContain(
        'return a;',
      );
    });

    it('translates lengths', () => {
      expect(
        transpile(`export class Foo {
  private f(...a: string[]): number {
    return a.length;
  }
}`),
      ).toContain('return a.Length;');
    });

    it('fails on lengths of unknown type', () => {
      bodyFails('return a.length;', 'Unsupported length', 'a: any', 'number');
    });

    it('narrows properties of type object', () => {
      expect(
        transpile(`export class Foo {
  private v: string | number = 1;
  public f(): number {
    if (typeof this.v === 'string') {
      return this.v.length;
    }
    return 0;
  }
}`),
      ).toContain('return ((string)this.v).Length;');
    });

    it('translates properties of records', () => {
      expect(
        body('return a.b;', 'a: Record<string, string>', 'string'),
      ).toContain('return a.GetValueOrDefault("b");');
    });

    it('fails on unsupported properties', () => {
      bodyFails('return a.b;', 'Unsupported property', 'a: any', 'string');
    });

    it('fails on spread arguments', () => {
      fails(
        'function g(...a: string[]): void {}\nexport function f(a: string[]): void {\n  g(...a);\n}',
        'Spread arguments are not supported',
      );
    });

    it('fails on calls of services without matching overload', () => {
      const files = sourceFiles({
        'lib/generated/policy-statements/s3.ts':
          'export class S3 {\n  public f(a: string): void {}\n}',
        'lib/shared/index.ts': `import { S3 } from '../generated/policy-statements/s3';
export function g(s: S3): void {
  s.f(1);
}`,
      });
      expect(() => transpileFiles([files[1]])).toThrow(
        'No C# overload matches the arguments',
      );
    });

    it('calls the implementation if no overload matches', () => {
      const result = transpile(`export class Foo {
  public f(a: string | number, b: any[], c: string[]): void {}
  public g(): void {
    const a: any[] = [];
    const b: string[] = [];
    this.f('a', a, b);
  }
}`);
      expect(result).toContain('this.F("a", a, b);');
    });

    it('passes rest arguments', () => {
      expect(
        transpile(`export class Foo {
  private f(...a: string[]): void {}
  public g(): void {
    this.f('a', 'b');
  }
}`),
      ).toContain('this.F("a", "b");');
    });

    it('fails on unsupported callbacks', () => {
      bodyFails(
        'const b = a.map(({ length }) => length);',
        'Destructured parameters are not supported',
        'a: string[]',
      );
      bodyFails(
        'const b = a.map((x, i, all) => x);',
        'Too many parameters',
        'a: string[]',
      );
      bodyFails(
        'const b = a.filter((x) => {\n  return true;\n});',
        'Callbacks must return an expression',
        'a: string[]',
      );
    });

    it('calls base() without base class', () => {
      expect(
        transpile(
          'export class Foo {\n  constructor() {\n    super();\n  }\n}',
        ),
      ).toContain('base();');
    });

    it('fails on unsupported calls', () => {
      fails(
        'export const g = 1;\nexport function f(): void {\n  g();\n}',
        'Unsupported call',
      );
      fails(
        'function g(): void {}\nexport function f(): void {\n  (g)();\n}',
        'Unsupported call',
      );
    });

    it('translates methods', () => {
      const result = body(
        `const c = a.toString();
const d = b.toUpperCase();
e.has('x');
const g = new RegExp('a');
const h = new RegExp('a', 'i');`,
        'a: any, b: string, e: Map<string, string>',
      );
      expect(result).toContain('Js.ToString(a)');
      expect(result).toContain('b.ToUpperInvariant()');
      expect(result).toContain('e.ContainsKey("x");');
      expect(result).toContain('Js.RegExp("a", "")');
      expect(result).toContain('Js.RegExp("a", "i")');
    });

    it.each([
      ['a.foo();', 'a: any', 'Unsupported method foo of any'],
      [
        "a.startsWith('a', 1);",
        'a: string',
        'Unsupported method startsWith of string',
      ],
      ['a.trim();', 'a: string', 'Unsupported method trim of string'],
      ["a.push('a', 'b');", 'a: string[]', 'Unsupported method push of array'],
      [
        'a.sort((x, y) => 0);',
        'a: string[]',
        'Unsupported method sort of array',
      ],
      ['a.reverse();', 'a: string[]', 'Unsupported method reverse of array'],
      ["a.delete('a');", 'a: Set<string>', 'Unsupported method delete of set'],
      [
        "a.delete('a');",
        'a: Map<string, string>',
        'Unsupported method delete of map',
      ],
      ['a.getTime();', 'a: Date', 'Unsupported method getTime of date'],
      ["a.exec('a');", 'a: RegExp', 'Unsupported method exec of regexp'],
      ['a.toFixed();', 'a: number', 'Unsupported method toFixed of number'],
    ])('fails on %s', (code, params, message) => {
      bodyFails(code, message, params);
    });

    it('fails on Set constructors with arguments', () => {
      bodyFails('const a = new Set([1]);', 'Unsupported Set constructor');
    });

    it('translates boolean operators', () => {
      expect(body('const c = a && b;', 'a: boolean, b: boolean')).toContain(
        'bool c = a && b;',
      );
    });

    it('fails on boolean operators on other types', () => {
      bodyFails(
        'const c = a || b;',
        '|| is supported only for booleans',
        'a: string, b: string',
      );
    });

    it('translates typeof checks', () => {
      const result = body(
        `const b = typeof a === 'number';
const c = 'string' !== typeof a;
const d = typeof a == 'undefined';`,
        'a: any',
      );
      expect(result).toContain('bool b = Js.IsNumber(a);');
      expect(result).toContain('bool c = !(a is string);');
      expect(result).toContain('a == null');
    });

    it('fails on unsupported typeof checks', () => {
      bodyFails(
        "const b = typeof a === 'object';",
        'Unsupported typeof check',
        'a: any',
      );
    });

    it('translates comparisons with null', () => {
      expect(body('const b = null != a;', 'a?: string')).toContain(
        'bool b = a != null;',
      );
    });

    it('fails on equality of different types', () => {
      bodyFails(
        'const c = a == b;',
        'Equality is supported for strings, numbers and booleans',
        'a: string, b: string[]',
      );
    });

    it('fails on equality of unknown types', () => {
      bodyFails(
        "const c = (b ? 'a' : undefined) == 'a';",
        'Equality needs known types',
        'b: boolean',
      );
    });

    it('fails on comparisons of other types', () => {
      bodyFails(
        'const c = a < b;',
        'Comparisons are supported for strings and numbers',
        'a: string, b: number',
      );
    });

    it('translates string concatenation', () => {
      expect(body('const c = a + b;', 'a: number, b: string')).toContain(
        'string c = Js.ToString(a) + b;',
      );
    });

    it('fails on + of other types', () => {
      bodyFails(
        'const c = a + b;',
        '+ is supported for strings and numbers',
        'a: boolean, b: boolean',
      );
    });

    it('fails on - of other types', () => {
      bodyFails(
        'const c = a - b;',
        '- is supported for numbers',
        'a: string, b: string',
      );
    });

    it('fails on in for other types', () => {
      bodyFails(
        "const c = 'a' in b;",
        'in is supported for records',
        'b: string[]',
      );
    });

    it('translates instanceof', () => {
      const result = transpile(`export class Foo {
  public f(a: any): boolean {
    return a instanceof Foo;
  }
}`);
      expect(result).toContain('return a is Foo;');
    });

    it('fails on instanceof of unknown classes', () => {
      bodyFails(
        'const c = a instanceof Bar;',
        'Unsupported instanceof',
        'a: any',
      );
    });

    it('fails on unsupported operators', () => {
      bodyFails(
        'const c = a % b;',
        'Unsupported operator %',
        'a: number, b: number',
      );
    });

    it('translates conditional expressions of different types', () => {
      expect(body("return a ? 1 : 'a';", 'a: boolean', 'any')).toContain(
        'return a ? (object)1 : (object)"a";',
      );
    });

    it('casts values of type any', () => {
      expect(body('const b: string = a;', 'a: any')).toContain(
        'string b = (string)a;',
      );
    });

    it('fails on tuples', () => {
      bodyFails("const a = [1, 'a'] as const;", 'Unsupported array type');
      fails('export function f(a: [string]): void {}', 'Unsupported type');
    });

    it('translates optional booleans', () => {
      expect(body('const b = a;', 'a?: boolean')).toContain('bool? b = a;');
    });

    it('fails on anonymous functions', () => {
      fails('export default function (): void {}', 'Unsupported function');
    });

    it('converts see tags without text', () => {
      expect(
        transpile(
          'export class Foo {\n  /**\n   * @see\n   */\n  public f(): void {}\n}',
        ),
      ).toContain('/// <seealso href=""></seealso>');
    });

    it('passes lists to overloads with sequences', () => {
      const result = transpile(`export class Foo {
  public f(a: any[], b: string[]): void {}
  public g(): void {
    const a: any[] = [];
    const b: string[] = [];
    this.f(a, b);
  }
}`);
      expect(result).toContain('this.F(a, b);');
    });

    it('passes null to overloads', () => {
      const result = transpile(`export class Foo {
  public f(a: string): void {}
  public g(a: number): void {}
  public h(): void {
    this.f(null);
    this.g(null);
  }
}`);
      expect(result).toContain('this.F(null);');
      expect(result).toContain('this.G(null);');
    });

    it('passes rest parameters to overloads with sequences', () => {
      const result = transpile(`export class Foo {
  public f(b: any[]): void {}
  public h(...a: any[]): void {
    this.f(a);
  }
}`);
      expect(result).toContain('public void H(params object[] a)');
      expect(result).toContain('this.F(a);');
    });

    it('translates conditional expressions with the same type', () => {
      expect(
        transpile(`export class Foo {
  public f(c: boolean): any {
    return c ? 'a' : 'b';
  }
}`),
      ).toContain('public string F(bool c)');
    });

    it('does not narrow variables that are assigned', () => {
      const result = transpile(`export class Foo {
  private f(a: string | number): void {
    let b: string | number = 1;
    b = a;
    const c = a == null;
  }
}`);
      expect(result).toContain('object b = 1;');
      expect(result).toContain('b = a;');
      expect(result).toContain('bool c = a == null;');
    });

    it('translates || of booleans', () => {
      expect(body('const c = a || b;', 'a: boolean, b: boolean')).toContain(
        'bool c = a || b;',
      );
    });

    it('translates typeof checks for booleans', () => {
      expect(body("const b = typeof a === 'boolean';", 'a: any')).toContain(
        'bool b = a is bool;',
      );
    });
  });
});
