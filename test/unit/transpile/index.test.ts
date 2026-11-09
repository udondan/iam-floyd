import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { Node, SourceFile, SyntaxKind } from 'ts-morph';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import {
  arrowFunction,
  collectionSourceFiles,
  coreSourceFiles,
  fail,
  isPure,
  isServiceFile,
  kindOf,
  managedPoliciesSourceFiles,
  resolve,
  servicePrincipalsSourceFiles,
  TranspileError,
} from '../../../lib/generator/transpile/index';
import { reusedSourceFiles } from '../helpers';

/**
 * The initializers of the variables of `lib/shared/index.ts` with the given code, by name
 */
function initializers(code: string): Record<string, Node> {
  const [file] = reusedSourceFiles({ 'lib/shared/index.ts': code });
  return Object.fromEntries(
    file.getVariableDeclarations().flatMap((declaration) => {
      const initializer = declaration.getInitializer();
      return initializer ? [[declaration.getName(), initializer]] : [];
    }),
  );
}

describe('loading the modules', () => {
  const cwd = process.cwd();
  let dir: string;

  const write = (files: Record<string, string>) => {
    fs.rmSync(path.join(dir, 'lib'), { recursive: true, force: true });
    for (const [file, text] of Object.entries(files)) {
      fs.mkdirSync(path.dirname(path.join(dir, file)), { recursive: true });
      fs.writeFileSync(path.join(dir, file), text);
    }
  };
  const names = (files: SourceFile[]) =>
    files.map((file) => path.relative(dir, file.getFilePath()));

  beforeAll(() => {
    dir = fs.mkdtempSync(
      path.join(fs.realpathSync(os.tmpdir()), 'iam-floyd-transpile-'),
    );
    fs.writeFileSync(
      path.join(dir, 'tsconfig.json'),
      JSON.stringify({ compilerOptions: { strict: true } }),
    );
    process.chdir(dir);
  });

  afterAll(() => {
    process.chdir(cwd);
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it('orders the files of the core by their imports, without the services', () => {
    write({
      'lib/shared/index.ts': `import { A } from './a';
import { S3 } from '../generated/policy-statements/s3';
export * from './c';
export const x = [A, S3];`,
      'lib/shared/a.ts': `import { B } from './b';\nexport class A extends B {}`,
      'lib/shared/b.ts': 'export class B {}',
      'lib/shared/c.ts': `import { B } from './b';\nexport const c = B;`,
      'lib/generated/policy-statements/s3.ts': 'export class S3 {}',
    });
    expect(names(coreSourceFiles())).toEqual([
      'lib/shared/b.ts',
      'lib/shared/a.ts',
      'lib/shared/c.ts',
      'lib/shared/index.ts',
    ]);
  });

  it('loads the other modules from their entries', () => {
    write({
      'lib/collection/index.ts': 'export const a = 1;',
      'lib/generated/aws-managed-policies/iam-floyd.ts': 'export const b = 1;',
      'lib/generated/aws-service-principals/index.ts': 'export const c = 1;',
    });
    expect(names(collectionSourceFiles())).toEqual(['lib/collection/index.ts']);
    expect(names(managedPoliciesSourceFiles())).toEqual([
      'lib/generated/aws-managed-policies/iam-floyd.ts',
    ]);
    expect(names(servicePrincipalsSourceFiles())).toEqual([
      'lib/generated/aws-service-principals/index.ts',
    ]);
  });

  it('fails on circular imports', () => {
    write({
      'lib/shared/index.ts': `import { a } from './a';\nexport const b = 1;`,
      'lib/shared/a.ts': `import { b } from './index';\nexport const a = b;`,
    });
    expect(() => coreSourceFiles()).toThrow(
      new TranspileError(
        "lib/shared/index.ts:1: Circular import: import { a } from './a';",
      ),
    );
  });

  it('fails on unresolved imports', () => {
    write({ 'lib/shared/index.ts': `import { a } from './missing';` });
    expect(() => coreSourceFiles()).toThrow(
      "lib/shared/index.ts:1: Unresolved import: import { a } from './missing';",
    );
  });

  it('fails on imports from other modules', () => {
    write({
      'lib/shared/index.ts': `export { a } from '../collection/index';`,
      'lib/collection/index.ts': 'export const a = 1;',
    });
    expect(() => coreSourceFiles()).toThrow(
      "lib/shared/index.ts:1: Imports are supported only from the same module: export { a } from '../collection/index';",
    );
  });
});

describe('helpers', () => {
  it('fails with the location and the first line of the node', () => {
    const { a } = initializers('\nconst a = [\n  1,\n];');
    expect(() => fail(a, 'Broken')).toThrow(
      new TranspileError('lib/shared/index.ts:2: Broken: ['),
    );
  });

  it('recognizes the files of the services', () => {
    const [service, shared] = reusedSourceFiles({
      'lib/generated/policy-statements/s3.ts': 'export class S3 {}',
      'lib/shared/index.ts': 'export {};',
    });
    expect(isServiceFile(service)).toBe(true);
    expect(isServiceFile(shared)).toBe(false);
  });

  it('tells the kind of a type', () => {
    const values = initializers(`enum E { A = 'a' }
class C {}
interface I { a: string }
declare const any: any;
declare const optional: string | undefined;
declare const mixed: string | number;
declare const template: \`a\${string}\`;
declare const tuple: [string, number];
declare const i: I;
declare const fn: () => void;
const kinds = {
  any: any,
  undefined: undefined,
  null: null,
  optional: optional,
  mixed: mixed,
  string: 'a',
  template: template,
  enum: E.A,
  enumType: E.A as E,
  number: 1,
  boolean: true as boolean,
  booleanLiteral: true,
  array: [1],
  tuple: tuple,
  map: new Map<string, string>(),
  set: new Set<string>(),
  date: new Date(),
  regexp: /a/,
  class: new C(),
  record: { a: 1 },
  fn: fn,
  interface: i,
};`);
    const kinds = values.kinds.asKindOrThrow(
      SyntaxKind.ObjectLiteralExpression,
    );
    const result = Object.fromEntries(
      kinds
        .getProperties()
        .map((property) => [
          property.asKindOrThrow(SyntaxKind.PropertyAssignment).getName(),
          kindOf(
            property
              .asKindOrThrow(SyntaxKind.PropertyAssignment)
              .getInitializerOrThrow()
              .getType(),
          ),
        ]),
    );
    expect(result).toEqual({
      any: 'any',
      undefined: 'undefined',
      null: 'undefined',
      optional: 'string',
      mixed: 'mixed',
      string: 'string',
      template: 'string',
      enum: 'string',
      enumType: 'string',
      number: 'number',
      boolean: 'boolean',
      booleanLiteral: 'boolean',
      array: 'array',
      tuple: 'array',
      map: 'map',
      set: 'set',
      date: 'date',
      regexp: 'regexp',
      class: 'class',
      record: 'record',
      fn: 'record',
      interface: 'mixed',
    });
  });

  it('accepts only synchronous arrow functions as callbacks', () => {
    const { arrow, fn, async } = initializers(`const arrow = (x: number) => x;
const fn = function (x: number) { return x; };
const async = async (x: number) => x;`);
    expect(arrowFunction(arrow)).toBe(arrow);
    expect(() => arrowFunction(fn)).toThrow(
      'lib/shared/index.ts:2: Callbacks must be arrow functions: function (x: number) { return x; }',
    );
    expect(() => arrowFunction(async)).toThrow(
      'lib/shared/index.ts:3: Async callbacks are not supported: async (x: number) => x',
    );
  });

  it('tells whether an expression is pure', () => {
    const [file] = reusedSourceFiles({
      'lib/shared/index.ts': 'class C { x = this; }',
    });
    const self = file
      .getClassOrThrow('C')
      .getPropertyOrThrow('x')
      .getInitializerOrThrow();
    expect(isPure(self)).toBe(true);

    const values = initializers(`declare const a: Record<string, string>;
declare const b: string;
declare function f(): string;
const identifier = a;
const string = 'a';
const number = 1;
const property = a.b;
const nonNull = a!;
const parenthesized = (a);
const element = a[b];
const impureElement = a[f()];
const impureReceiver = f()[0];
const call = f();
const template = \`\${b}\`;`);
    expect(
      Object.fromEntries(
        Object.entries(values).map(([name, node]) => [name, isPure(node)]),
      ),
    ).toEqual({
      identifier: true,
      string: true,
      number: true,
      property: true,
      nonNull: true,
      parenthesized: true,
      element: true,
      impureElement: false,
      impureReceiver: false,
      call: false,
      template: false,
    });
  });

  it('resolves identifiers through imports', () => {
    const [, file] = reusedSourceFiles({
      'lib/shared/a.ts': 'export class A {}',
      'lib/shared/index.ts': `import { A } from './a';\nconst x = A;\nconst y = 1;`,
    });
    const x = file.getVariableDeclarationOrThrow('x').getInitializerOrThrow();
    const declarations = resolve(x);
    expect(declarations).toHaveLength(1);
    expect(Node.isClassDeclaration(declarations[0])).toBe(true);
    expect(declarations[0].getSourceFile().getBaseName()).toBe('a.ts');

    const local = file.getVariableDeclarationOrThrow('x').getNameNode();
    expect(resolve(local)).toEqual([file.getVariableDeclarationOrThrow('x')]);

    const literal = file
      .getVariableDeclarationOrThrow('y')
      .getInitializerOrThrow();
    expect(resolve(literal)).toEqual([]);
  });
});
