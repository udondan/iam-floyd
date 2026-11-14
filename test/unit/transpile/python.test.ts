import { describe, expect, it } from 'vitest';

import {
  collectionSourceFiles,
  coreSourceFiles,
  managedPoliciesSourceFiles,
  servicePrincipalsSourceFiles,
  TranspileError,
} from '../../../lib/generator/transpile/index';
import {
  docstring,
  pyString,
  pythonConstantName,
  pythonName,
  pythonServiceModule,
  PythonTranspiler,
  snakeCase,
} from '../../../lib/generator/transpile/python';
import { reusedSourceFiles } from '../helpers';

function transpile(code: string): string {
  return new PythonTranspiler().transpile(
    reusedSourceFiles({ 'lib/shared/index.ts': code }),
    'header',
  );
}

/**
 * The body of the module, without the header and the imports
 */
function body(code: string): string {
  return transpile(code).split('\n\n\n').slice(1).join('\n\n\n');
}

function escape(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Asserts that the code fails with the message, at a line of `lib/shared/index.ts`
 */
function fails(code: string, message: string, text?: string): void {
  let error: unknown;
  try {
    transpile(code);
  } catch (err) {
    error = err;
  }
  expect(error).toBeInstanceOf(TranspileError);
  expect((error as Error).message).toMatch(
    new RegExp(
      `^lib/shared/index\\.ts:\\d+: ${escape(message)}: ${text === undefined ? '' : `${escape(text)}$`}`,
    ),
  );
}

describe('PythonTranspiler on the real modules', () => {
  it('transpiles the core', () => {
    const code = new PythonTranspiler().transpile(
      coreSourceFiles(),
      'Transpiled from lib/shared/',
    );
    expect(code.startsWith('# Transpiled from lib/shared/\n')).toBe(true);
    expect(code).toContain('from __future__ import annotations');
    expect(code).toContain('class PolicyStatement(');
    expect(code).toContain('from . import _js');
    expect(code).toContain(
      'if TYPE_CHECKING:\n    from typing_extensions import Self',
    );
    expect(code).toContain('def __str__(self) -> str:');
    expect(code).not.toMatch(/\n{4}/);
    expect(code.endsWith('\n')).toBe(true);
  });

  it('transpiles the collection', () => {
    const code = new PythonTranspiler().transpile(
      collectionSourceFiles(),
      'collection',
    );
    expect(code).toContain('class Collection');
    expect(code).toMatch(/^from \.statement\._\w+ import /m);
  });

  it('transpiles the names of the managed policies', () => {
    const code = new PythonTranspiler().transpile(
      managedPoliciesSourceFiles(),
      'managed policies',
    );
    expect(code).toContain('class AwsManagedPolicy');
    expect(code).toContain("ADMINISTRATOR_ACCESS = 'AdministratorAccess'");
  });

  it('transpiles the service principals', () => {
    const code = new PythonTranspiler().transpile(
      servicePrincipalsSourceFiles(),
      'service principals',
    );
    expect(code).toContain('class AwsServicePrincipal');
    expect(code).toContain("LAMBDA_ = 'lambda.amazonaws.com'");
  });
});

describe('names and literals', () => {
  it('names the modules of services', () => {
    expect(pythonServiceModule('ses-pinpoint')).toBe('_ses_pinpoint');
  });

  it('converts to snake_case like jsii-pacmak', () => {
    expect(snakeCase('ifAwsPrincipalIsAWSService')).toBe(
      'if_aws_principal_is_aws_service',
    );
    expect(pythonName('in')).toBe('in_');
    expect(pythonName('fooBar')).toBe('foo_bar');
    expect(pythonConstantName('lambda')).toBe('LAMBDA_');
  });

  it('writes docstrings', () => {
    expect(docstring(['say "hi"'])).toEqual(['"""say "hi\\""""']);
    expect(docstring(['a\\b """', 'second  '])).toEqual([
      '"""a\\\\b \\"""',
      'second',
      '"""',
    ]);
  });

  it('escapes string literals', () => {
    expect(pyString("a\\b'c\nd\re\tf\x01g\x7fh")).toBe(
      "'a\\\\b\\'c\\nd\\re\\tf\\x01g\\x7fh'",
    );
  });
});

describe('module level', () => {
  const services = {
    'lib/generated/policy-statements/s3.ts': 'export class S3 {}',
    'lib/generated/policy-statements/ec2.ts':
      'export class Ec2 {}\nexport class Ec2Other {}',
    'lib/generated/policy-statements/ses-pinpoint.ts':
      'export class SesPinpoint {}',
  };
  const withServices = (code: string) =>
    new PythonTranspiler().transpile(
      reusedSourceFiles({ ...services, 'lib/shared/index.ts': code }).slice(-1),
      'header',
    );

  it('imports the services, sorted', () => {
    expect(
      withServices(`import { S3 } from '../generated/policy-statements/s3';
import { SesPinpoint } from '../generated/policy-statements/ses-pinpoint';
import { Ec2Other, Ec2 } from '../generated/policy-statements/ec2';
import { A } from './other';
export const B = 1;`),
    ).toBe(`# header
from __future__ import annotations

from .statement._ec2 import Ec2, Ec2Other
from .statement._s3 import S3
from .statement._ses_pinpoint import SesPinpoint


B = 1
`);
  });

  it('fails on other imports of services', () => {
    expect(() =>
      withServices(
        `import { Ec2 as E } from '../generated/policy-statements/ec2';`,
      ),
    ).toThrow('Aliased imports are not supported: Ec2 as E');
    expect(() =>
      withServices(`import * as E from '../generated/policy-statements/ec2';`),
    ).toThrow('Only named imports of services are supported');
    expect(() =>
      withServices(`import E from '../generated/policy-statements/ec2';`),
    ).toThrow('Only named imports of services are supported');
  });

  it('skips interfaces, type aliases and exports', () => {
    expect(
      body(`export interface I { a: string }
export type T = string;
export {};`),
    ).toBe('');
  });

  it('writes constants', () => {
    expect(body(`export const fooBar = 1;\nconst bar = 'x';`)).toBe(
      "FOO_BAR = 1\n\n\n_BAR = 'x'\n",
    );
  });

  it('fails on module level variables', () => {
    fails('export let a = 1;', 'Module level variables must be constants');
    fails(
      'export const a: string;',
      'Module level variables must be constants',
    );
  });

  it('fails on other statements at module level', () => {
    fails('console.log(1);', 'Unsupported statement at module level');
  });

  it('fails on two declarations with the same Python name', () => {
    fails(
      'export function fooBar(): void {}\nexport function foo_bar(): void {}',
      'Python name foo_bar is already used in index.ts:1',
    );
  });

  it('writes docstrings with tags', () => {
    expect(
      body(`/**
 * Does it.
 *
 * @param fooBar the value
 * @returns nothing
 * @deprecated
 * @see https://example.com/a
 * @example other
 */
export function f(fooBar: string): void {}
/** @internal */
export function g(): void {}`),
    ).toBe(`def f(foo_bar: str) -> None:
    """Does it.

    :param foo_bar: the value
    :returns: nothing
    @deprecated
    @see https://example.com/a
    @example other
    """


def g() -> None:
    """@internal"""
`);
  });

  it('writes enums', () => {
    expect(
      body(`/** The enum */
export enum E {
  /** member */
  fooBar = 'a',
  in = 'b',
}`),
    ).toBe(`class E:
    """The enum"""

    FOO_BAR = 'a'
    """member"""

    IN_ = 'b'
`);
    fails('export enum E { A = 1 }', 'Enum members must be strings', 'A = 1');
  });

  it('fails on unsupported functions', () => {
    fails(
      'export function f(a: string): void;\nexport function f(a: string): void {}',
      'Unsupported function',
    );
    fails('export default function (): void {}', 'Unsupported function');
  });
});

describe('classes', () => {
  it('fails on unsupported classes', () => {
    fails('export default class {}', 'Unsupported class');
    fails('export abstract class A {}', 'Unsupported class');
    fails('export class A<T> {}', 'Unsupported class');
    fails(
      'interface I {}\nexport class A implements I {}',
      'Unsupported class',
    );
    fails(
      'function d(x: any): any { return x; }\n@d\nexport class A {}',
      'Unsupported class',
    );
  });

  it('fails on unsupported members', () => {
    fails(
      "export class A { get x(): string { return 'a'; } }",
      'Unsupported class member',
    );
    fails(
      'export class A { fooBar(): void {}\nfoo_bar(): void {} }',
      'Python name foo_bar is already used by fooBar',
    );
    fails(
      'export class A { static x: string; }',
      'Static properties need an initializer',
    );
    fails(
      'export class A { constructor() {}\nconstructor() {} }',
      'Constructor overloads are not supported',
    );
    fails(
      'export class A { constructor(public x: string) {} }',
      'Parameter properties are not supported',
    );
    fails(
      "export class A { private x: string;\nconstructor() { this.x = 'a'; } }",
      'Fields need an initializer',
    );
  });

  it('writes static properties and methods', () => {
    expect(
      body(`export class A {
  /** the value */
  public static fooBar = 'a';
  public static make(): A {
    return new A();
  }
  protected other(): void {}
}`),
    ).toBe(`class A:

    FOO_BAR = 'a'
    """the value"""

    @staticmethod
    def make() -> A:
        return A()

    def _other(self) -> None:
        pass
`);
  });

  it('inherits the constructor with rest parameters', () => {
    expect(
      body(`export class A {
  constructor(...items: string[]) {}
}
export class B extends A {}
export class C extends B {
  private x = 1;
}`),
    ).toBe(`class A:

    def __init__(self, *items: str) -> None:
        pass


class B(A):
    pass


class C(B):

    def __init__(self, *items: str) -> None:
        super().__init__(*items)
        self._x: float = 1
`);
  });

  it('inherits a constructor without parameters', () => {
    expect(
      body(`export class A {}
export class B extends A {
  private x = 'a';
}`),
    ).toContain(`    def __init__(self) -> None:
        super().__init__()
        self._x: str = 'a'`);
  });

  it('needs the call of super() first', () => {
    const message = 'The constructor must start with the call of super()';
    const base = 'export class A {}\n';
    fails(`${base}export class B extends A { constructor() {} }`, message);
    fails(
      `${base}export class B extends A { constructor() { const x = 1; super(); } }`,
      message,
    );
    fails(
      `${base}export class B extends A { constructor() { 1; super(); } }`,
      message,
    );
    fails(
      `${base}function g(): void {}\nexport class B extends A { constructor() { g(); super(); } }`,
      message,
    );
  });

  it('fails on unsupported methods', () => {
    const unsupported = (method: string) =>
      fails(
        `function d(t: any, k: any): void {}\nexport class A { ${method} }`,
        'Unsupported method',
      );
    unsupported('m(a: string): void;\nm(a: string): void {}');
    unsupported('abstract m(): void;');
    unsupported('async m(): Promise<void> {}');
    unsupported('*m(): Generator<number> {}');
    unsupported('m<T>(): void {}');
    unsupported('@d m(): void {}');
  });
});

describe('parameters and types', () => {
  it('writes parameters', () => {
    expect(
      body(
        "export function f(a: string, b = 1, c = 'x', d?: boolean, ...e: string[]): void {}",
      ),
    ).toBe(
      "def f(a: str, b: float = 1, c: str = 'x', d: bool | None = None, *e: str) -> None:\n    pass\n",
    );
  });

  it('fails on unsupported parameters', () => {
    fails(
      'export function f({ a }: { a: string }): void {}',
      'Destructuring parameters are not supported',
    );
    fails(
      'export function f(...a: Array<string>): void {}',
      'Rest parameters need an array type',
    );
    fails(
      'export function f(...a): void {}',
      'Rest parameters need an array type',
    );
    fails(
      'const x = 1;\nexport function f(a = x): void {}',
      'Default values must be literals',
      'x',
    );
  });

  it('writes type hints from type nodes', () => {
    expect(
      body(`type Alias = string;
enum E { A = 'a' }
export class A {
  m(
    a: any,
    b: undefined,
    c: (string | number)[],
    d: Record<string, boolean>,
    e: Map<string, number>,
    f: Partial<Record<string, string>>,
    g: Set<string>,
    h: Array<string>,
    i: Date,
    j: RegExp,
    k: Alias,
    l: E,
    m: A,
    n: string | string,
  ): this {
    return this;
  }
}`)
        .split('\n')
        .find((line) => line.startsWith('    def m(')),
    ).toBe(
      '    def m(self, a: Any, b: None, c: list[str | float], d: dict[str, bool], e: dict[str, float], f: dict[str, str], g: dict[str, bool], h: list[str], i: _datetime.datetime, j: _re.Pattern[str], k: str, l: str, m: A, n: str) -> Self:',
    );
  });

  it('imports what the type hints need', () => {
    expect(
      transpile(
        'export class A { m(a: any, b: Date, c: RegExp): this { return this; } }',
      ),
    ).toBe(`# header
from __future__ import annotations

import datetime as _datetime
import re as _re
from typing import TYPE_CHECKING, Any


if TYPE_CHECKING:
    from typing_extensions import Self


class A:

    def m(self, a: Any, b: _datetime.datetime, c: _re.Pattern[str]) -> Self:
        return self
`);
  });

  it('fails on unsupported type nodes', () => {
    fails(
      'export function f(a: { b: string }): void {}',
      'Unsupported type',
      '{ b: string }',
    );
    fails(
      'interface I { b: string }\nexport function f(a: I): void {}',
      'Unsupported type',
      'I',
    );
  });

  it('derives type hints from types', () => {
    expect(
      transpile(`export class B {}
export class A {
  private a = [1];
  private b = new B();
  private c = 1 as any;
  private d = this.e();
  private e(): string | undefined {
    return undefined;
  }
  private g() {
    return true;
  }
  private h() {
    return this;
  }
}`),
    ).toContain(`        self._a: list[float] = [1]
        self._b: B = B()
        self._c: Any = 1
        self._d: None | str = self._e()

    def _e(self) -> str | None:
        return None

    def _g(self) -> bool:
        return True

    def _h(self) -> Self:
        return self
`);
  });

  it('fails when a type hint cannot be derived', () => {
    fails(
      'export class A { private a = new Map<string, string>(); }',
      'Cannot derive a type hint from Map<string, string>',
    );
  });
});

const parameters = [
  'n: number',
  's: string',
  'b: boolean',
  'xs: string[]',
  'ys: string[][]',
  'r: Record<string, string>',
  'm: Map<string, string>',
  'st: Set<string>',
  'd: Date',
  're: RegExp',
  'a: any',
  'u?: string',
].join(', ');

const declarations = `export class A {
  public x = 1;
  public get(k: string): string {
    return k;
  }
}
interface I {
  a: string;
}
function g(...args: string[]): string {
  return '';
}
`;

/**
 * The transpiled statements in a function with parameters of all kinds, without the def line
 */
function statements(code: string): string {
  const out = body(
    `${declarations}export function f(${parameters}): void {\n${code}\n}`,
  );
  return out.slice(out.indexOf('\n', out.indexOf('def f(')) + 1);
}

function statementsFail(code: string, message: string, text?: string): void {
  fails(
    `${declarations}export function f(${parameters}): void {\n${code}\n}`,
    message,
    text,
  );
}

/**
 * The transpiled expression, returned by a function with parameters of all kinds
 */
function expression(code: string): string {
  return statements(`return ${code};`)
    .trim()
    .replace(/^return /, '');
}

function expressionFails(code: string, message: string, text?: string): void {
  statementsFail(`return ${code};`, message, text);
}

describe('statements', () => {
  it('writes blocks, variables and if statements', () => {
    expect(
      statements(`{
  let x;
  x = 1;
}
if (n > 0) {
  n = 1;
} else if (n < 0) {
  n = -1;
} else n = 0;`),
    ).toBe(`    x = None
    x = 1
    if n > 0:
        n = 1
    elif n < 0:
        n = -1
    else:
        n = 0
`);
    statementsFail('const { length } = s;', 'Destructuring is not supported');
  });

  it('writes for of loops', () => {
    expect(
      statements(`for (const [k, v] of Object.entries(r)) {}
for (const [k, v] of m) {}
for (const x of xs) n++;
for (const x of st) {}`),
    ).toBe(`    for k, v in r.items():
        pass
    for k, v in m.items():
        pass
    for x in xs:
        n += 1
    for x in st:
        pass
`);
  });

  it('fails on unsupported for of loops', () => {
    statementsFail(
      'for await (const x of xs) {}',
      'for await is not supported',
    );
    statementsFail('for (s of xs) {}', 'for of needs a variable declaration');
    statementsFail(
      'for (const [, v] of Object.entries(r)) {}',
      'Unsupported destructuring',
      '[, v]',
    );
    statementsFail(
      'for (const { length } of xs) {}',
      'Unsupported destructuring',
      '{ length }',
    );
    statementsFail("for (const c of 'abc') {}", 'Unsupported iterable');
    statementsFail(
      'for (const [x, y] of ys) {}',
      'Destructuring is supported for entries only',
    );
  });

  it('writes throw, while, break and continue', () => {
    expect(
      statements(`while (n < 3) {
  n--;
  if (n == 1) continue;
  break;
}
throw new Error('failed');`),
    ).toBe(`    while n < 3:
        n -= 1
        if n == 1:
            continue
        break
    raise Exception('failed')
`);
  });

  it('fails on unsupported statements', () => {
    const message = 'Only `throw new Error(message)` is supported';
    statementsFail("throw 'x';", message);
    statementsFail("throw new TypeError('x');", message);
    statementsFail('throw new Error();', message);
    statementsFail('while (b) { break x; }', 'Labels are not supported');
    statementsFail('while (b) { continue x; }', 'Labels are not supported');
    statementsFail('switch (n) {}', 'Unsupported statement');
  });

  it('writes for loops with range()', () => {
    expect(
      statements(`for (let i = 0; i < n; i++) {
  n = i;
  n = -i;
  if (i < 2) {}
}
for (let i = 1; i <= n - 1; ++i) {}`),
    ).toBe(`    for i in range(n):
        n = i
        n = -i
        if i < 2:
            pass
    for i in range(1, n - 1 + 1):
        pass
`);
  });

  it('fails on unsupported for loops', () => {
    for (const loop of [
      'for (;;) {}',
      'for (n = 0; n < 1; n++) {}',
      'for (let i = 0, j = 0; i < 1; i++) {}',
      'for (let i = 0; ; i++) {}',
      'for (let i = 0; i < 1; ) {}',
      'for (let i; i < 1; i++) {}',
      'for (let i = 0; b; i++) {}',
      'for (let i = 0; n < 1; i++) {}',
      'for (let i = 0; i > 1; i++) {}',
      'for (let i = 0; i < 1; i += 1) {}',
      'for (let i = 0; i < 1; i--) {}',
      'for (let i = 0; i < 1; n++) {}',
    ]) {
      statementsFail(loop, 'Unsupported for loop', loop);
    }
    for (const change of ['i = 2;', 'i += 1;', 'i++;', '--i;']) {
      statementsFail(
        `for (let i = 0; i < 1; i++) { ${change} }`,
        'The loop variable must not be changed in the loop',
        'i',
      );
    }
  });

  it('writes expression statements', () => {
    expect(
      statements(`n += 1;
n -= 1;
s += 'a';
xs.forEach((x) => g(x));
xs.forEach((x) => {
  g(x);
});
m.set('a', 'b');
st.add('a');
r['a'] = 'b';
new A().x = 2;
g(...xs);`),
    ).toBe(`    n += 1
    n -= 1
    s += 'a'
    for x in xs:
        _g(x)
    for x in xs:
        _g(x)
    m['a'] = 'b'
    st['a'] = True
    r['a'] = 'b'
    A().x = 2
    _g(*xs)
`);
  });

  it('fails on unsupported expression statements', () => {
    statementsFail('s += 1;', 'Both sides of += must have the same type');
    statementsFail('b && g();', 'Unsupported expression statement');
    statementsFail('-n;', 'Unsupported expression statement');
    statementsFail('n;', 'Unsupported expression statement');
    statementsFail(
      'xs.forEach((x, i) => g(x));',
      'forEach callbacks must have one parameter',
    );
    statementsFail('[n] = [1];', 'Unsupported assignment target');
    statementsFail('xs.length = 0;', 'Cannot assign to length');
  });

  it('allows only primitive values as conditions', () => {
    expect(statements('if (!n || (s && b)) {}')).toBe(
      '    if not n or (s and b):\n        pass\n',
    );
    statementsFail(
      'if (xs) {}',
      'The truthiness of string[] differs in Python',
      'xs',
    );
  });
});

describe('expressions', () => {
  it('writes literals', () => {
    expect(expression('null')).toBe('None');
    expect(expression('undefined')).toBe('None');
    expect(expression('true')).toBe('True');
    expect(expression('false')).toBe('False');
    expect(expression('1.5')).toBe('1.5');
    expect(expression('`a`')).toBe("'a'");
    expect(expression("[1, 'a']")).toBe("[1, 'a']");
    expect(expression("{ a: 1, 'b-c': 2 }")).toBe("{'a': 1, 'b-c': 2}");
  });

  it('writes templates', () => {
    expect(expression('`${s}`')).toBe('s');
    expect(expression('`a${n}b${s}${s + s}`')).toBe(
      "'a' + _js.to_string(n) + 'b' + s + (s + s)",
    );
  });

  it('fails on unsupported literals', () => {
    expressionFails('[...xs]', 'Spread is not supported', '...xs');
    expressionFails('{ n }', 'Unsupported object literal', 'n');
    expressionFails('{ [s]: 1 }', 'Unsupported property name', '[s]: 1');
  });

  it('writes constructors', () => {
    expect(expression('new Set<string>()')).toBe('{}');
    expect(expression('new Map<string, string>()')).toBe('{}');
    expect(expression("new RegExp('a', 'i')")).toBe("_js.reg_exp('a', 'i')");
    expect(expression('new A()')).toBe('A()');
    expressionFails('new Date()', 'Unsupported constructor');
    expressionFails('new Set<string>(xs)', 'Unsupported constructor');
  });

  it('writes operators', () => {
    expect(expression("n > 0 ? 'a' : 'b'")).toBe("'a' if n > 0 else 'b'");
    expect(expression('!b')).toBe('not b');
    expect(expression('!(n > 1)')).toBe('not n > 1');
    expect(expression('-n')).toBe('-n');
    expect(expression('-(n - 1)')).toBe('-(n - 1)');
    expect(expression('typeof a')).toBe('_js.typeof(a)');
    expect(expression('(n + 1) * 2 - n')).toBe('(n + 1) * 2 - n');
    expect(expression('n - (n - 1)')).toBe('n - (n - 1)');
    expect(expression("s + 'a'")).toBe("s + 'a'");
    expect(expression('b || (b && b)')).toBe('b or (b and b)');
    expect(expression('(b || b) && b')).toBe('(b or b) and b');
    expect(expression("s < 'a'")).toBe("s < 'a'");
    expect(expression("'a' in r")).toBe("'a' in r");
    expect(expression("!('a' in r)")).toBe("'a' not in r");
    expect(expression('a instanceof Date')).toBe(
      'isinstance(a, _datetime.datetime)',
    );
    expect(expression('a instanceof A')).toBe('isinstance(a, A)');
    expect(expression('a as string')).toBe('a');
    expect(expression('<string>a')).toBe('a');
  });

  it('fails on unsupported operators', () => {
    expressionFails('+n', 'Unsupported unary operator');
    expressionFails(
      '() => 1',
      'Arrow functions are supported only in filter, map and forEach',
    );
    expressionFails('void 0', 'Unsupported expression');
    expressionFails(
      'b < b',
      'Comparisons are supported for strings or numbers only',
    );
    expressionFails(
      's < n',
      'Comparisons are supported for strings or numbers only',
    );
    expressionFails(
      's + n',
      '+ is supported for two strings or two numbers only',
    );
    expressionFails(
      'b + b',
      '+ is supported for two strings or two numbers only',
    );
    expressionFails("'a' in xs", 'in is supported for records only');
    expressionFails('a instanceof Array', 'Unsupported instanceof');
    expressionFails('a instanceof (A)', 'Unsupported instanceof');
    expressionFails('n % 2', 'Unsupported operator %');
  });

  it('writes equality', () => {
    expect(expression("typeof u === 'undefined'")).toBe('u is None');
    expect(expression("typeof u != 'undefined'")).toBe('u is not None');
    expect(expression("'string' == typeof u")).toBe('isinstance(u, str)');
    expect(expression("typeof u !== 'boolean'")).toBe(
      'not isinstance(u, bool)',
    );
    expect(expression("typeof u == 'number' && b")).toBe(
      "_js.typeof(u) == 'number' and b",
    );
    expect(expression("!(typeof u == 'string')")).toBe(
      'not isinstance(u, str)',
    );
    expect(expression('u === undefined')).toBe('u is None');
    expect(expression('null != u')).toBe('None is not u');
    expect(expression("s == 'a'")).toBe("s == 'a'");
    expect(expression('n !== 1')).toBe('n != 1');
    const message =
      'Equality is supported for primitives of the same type only';
    expressionFails('xs == xs', message);
    expressionFails('n == s', message);
  });

  it('writes ??', () => {
    expect(expression("r['a'] ?? 'b'")).toBe("r.get('a', 'b')");
    expect(expression("r['a'] ?? s")).toBe("r.get('a', s)");
    expect(expression("m.get('a') ?? s")).toBe("m.get('a', s)");
    expect(expression("u ?? 'x'")).toBe("u if u is not None else 'x'");
    expect(expression('(r[s] ?? []).length')).toBe('len(r.get(s, []))');
    expect(expression("u! ?? 'x'")).toBe("u if u is not None else 'x'");
    expect(expression("xs[0] ?? 'x'")).toBe(
      "xs[0] if xs[0] is not None else 'x'",
    );
    expressionFails(
      "r['a'] ?? g()",
      'The right side of ?? must be free of side effects',
      'g()',
    );
    const left = 'The left side of ?? must be free of side effects';
    expressionFails("g() ?? 'x'", left);
    expressionFails("xs.indexOf('a') ?? 1", left);
    expressionFails("new A().get('a') ?? 'x'", left);
    expressionFails("m.get() ?? 'x'", left);
    expressionFails("xs[n + 1] ?? 'x'", left);
  });

  it('writes identifiers', () => {
    expect(
      body(`export const C = 1;
const d = 2;
function h(): number {
  return C + d;
}
export function f(): number {
  const local = h();
  return local;
}`),
    ).toBe(`C = 1


_D = 2


def _h() -> float:
    return C + _D


def f() -> float:
    local = _h()
    return local
`);
    expressionFails('foo', 'Unknown identifier', 'foo');
  });

  it('fails on unsupported identifiers', () => {
    expect(() =>
      new PythonTranspiler().transpile(
        reusedSourceFiles({
          'lib/shared/other.ts': 'export const x = 1;',
          'lib/shared/index.ts':
            "import * as other from './other';\nexport const y = other;",
        }).slice(-1),
        'header',
      ),
    ).toThrow('lib/shared/index.ts:2: Unsupported identifier: other');
  });

  it('writes property access', () => {
    expect(expression('s.length')).toBe('len(s)');
    expect(expression('xs.length')).toBe('len(xs)');
    expect(expression('new A().x')).toBe('A().x');
    expect(expression('r.a')).toBe("r['a']");
    expect(expression('a.b')).toBe("a['b']");
    expect(
      body(`enum E { fooBar = 'a' }
export const C = E.fooBar;`),
    ).toBe(`class E:

    FOO_BAR = 'a'


C = E.FOO_BAR
`);
    expressionFails("({ a: 'x' } as I).a", 'Unsupported property access');
    expressionFails('m.size', 'Unsupported property access');
  });

  it('writes element access', () => {
    expect(expression('xs[0]')).toBe('xs[0]');
    expect(expression("r['a']")).toBe("r.get('a')");
    expect(expression("r['a']!.length")).toBe("len(r['a'])");
    expect(expression("(r['a'])!.length")).toBe("len(r['a'])");
    expect(expression("a['b']")).toBe("a['b']");
    expect(expression("r[r['a']]")).toBe("r.get(r.get('a'))");
    expressionFails("xs['a']", 'Arrays need a numeric index');
    expressionFails('s[0]', 'Unsupported element access');
  });

  it('writes calls of functions and methods', () => {
    expect(expression("new A().get('a')")).toBe("A().get('a')");
    expect(expression('n.toString()')).toBe('_js.to_string(n)');
    expect(expression('Object.keys(r)')).toBe('list(r.keys())');
    expect(expression('Object.entries(r)')).toBe('list(r.items())');
    expect(expression('Array.isArray(a)')).toBe('isinstance(a, list)');
    expect(expression('JSON.stringify(a)')).toBe('_js.stringify(a)');
    expect(expression('d.toISOString()')).toBe('_js.to_iso_string(d)');
    expect(expression('re.test(s)')).toBe('_js.test(re, s)');
    expressionFails('(g)()', 'Unsupported call');
    expressionFails('Object.values(r)', 'Unsupported Object method');
    expressionFails('Array.from(xs)', 'Unsupported Array method');
    expressionFails("JSON.parse('1')", 'Unsupported JSON method');
    expressionFails('JSON.stringify(a, null, 2)', 'Unsupported JSON method');
    expressionFails('re.exec(s)', 'Unsupported method exec of regexp');
    expressionFails('d.getTime()', 'Unsupported method getTime of date');
  });

  it('writes methods of strings', () => {
    expect(expression("s.includes('a')")).toBe("'a' in s");
    expect(expression("!s.includes('a')")).toBe("'a' not in s");
    expect(expression("s.startsWith('a')")).toBe("s.startswith('a')");
    expect(expression("s.endsWith('a')")).toBe("s.endswith('a')");
    expect(expression('s.toLowerCase()')).toBe('s.lower()');
    expect(expression('s.toUpperCase()')).toBe('s.upper()');
    expect(expression("s.indexOf('a')")).toBe("s.find('a')");
    expect(expression("s.lastIndexOf('a')")).toBe("s.rfind('a')");
    expect(expression('s.substring(1)')).toBe('s[1:]');
    expect(expression('s.substring(1, n)')).toBe('s[1:n]');
    expressionFails('s.trim()', 'Unsupported method trim of string');
    expressionFails('s.startsWith()', 'Unsupported arguments');
    expressionFails('s.startsWith(...xs)', 'Unsupported arguments');
  });

  it('writes methods of arrays, maps and sets', () => {
    expect(expression("xs.includes('a')")).toBe("'a' in xs");
    expect(expression("xs.indexOf('a')")).toBe("_js.index_of(xs, 'a')");
    expect(expression("xs.push('a')")).toBe("xs.append('a')");
    expect(expression('xs.push(...xs)')).toBe('xs.extend(xs)');
    expect(expression('xs.sort()')).toBe('_js.sort(xs)');
    expect(expression("m.get('a')")).toBe("m.get('a')");
    expect(expression("m.has('a')")).toBe("'a' in m");
    expect(expression("st.has('a')")).toBe("'a' in st");
    expressionFails("xs.push('a', 'b')", 'push supports one argument');
    expressionFails(
      'xs.sort((x, y) => 0)',
      'sort supports no compare function',
    );
    expressionFails("xs.join(',')", 'Unsupported method join of array');
    expressionFails("st.get('a')", 'Unsupported method get of set');
    expressionFails('st.clear()', 'Unsupported method clear of set');
  });

  it('writes filter and map as list comprehensions', () => {
    expect(expression("xs.map((x) => x + 'a')")).toBe("[x + 'a' for x in xs]");
    expect(expression('xs.map((x, i) => i)')).toBe(
      '[i for i, x in enumerate(xs)]',
    );
    expect(expression('xs.map(() => 1)')).toBe('[1 for _ in xs]');
    expect(expression('xs.map((x) => (b ? x : s))')).toBe(
      '[x if b else s for x in xs]',
    );
    expect(expression('xs.filter((x) => { return x.length > 0; })')).toBe(
      '[x for x in xs if len(x) > 0]',
    );
    expect(expression('xs.filter((x) => b || b)')).toBe(
      '[x for x in xs if b or b]',
    );
    expressionFails(
      'xs.map((x, y, z) => x)',
      'Callbacks support at most two parameters',
    );
    const one = 'Callbacks must consist of one return statement';
    expressionFails('xs.map((x) => { g(); return x; })', one);
    expressionFails('xs.map((x) => { return; })', one);
    expressionFails('xs.map((x) => { g(); })', one);
    expressionFails('xs.filter(() => true)', 'filter needs a parameter');
    expressionFails('xs.map((x) => x, 1)', 'map supports one argument');
    expressionFails('xs.filter()', 'filter supports one argument');
    expressionFails(
      'xs.map(({ length }) => length)',
      'Destructuring is not supported',
    );
    expressionFails(
      'xs.map(function (x) { return x; })',
      'Callbacks must be arrow functions',
    );
    expressionFails(
      'xs.map(async (x) => x)',
      'Async callbacks are not supported',
    );
    expressionFails(
      'xs.filter((x) => xs)',
      'The truthiness of string[] differs in Python',
    );
  });
});
