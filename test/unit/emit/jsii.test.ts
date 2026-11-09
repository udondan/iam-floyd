import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { gunzipSync } from 'zlib';

import { emitJsii, JsiiOptions } from '../../../lib/generator/emit/jsii';
import { ServiceModel } from '../../../lib/generator/model';

/**
 * Contents returned by `fs.readFileSync` in place of a file, by the end of its path
 */
const fakeFiles = new Map<string, string>();

vi.mock('fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('fs')>();
  const readFileSync = ((file: fs.PathOrFileDescriptor, options?: unknown) => {
    for (const [suffix, content] of fakeFiles) {
      if (typeof file == 'string' && file.endsWith(suffix)) {
        return options ? content : Buffer.from(content);
      }
    }
    return (actual.readFileSync as (f: unknown, o?: unknown) => unknown)(
      file,
      options,
    );
  }) as typeof fs.readFileSync;
  return { ...actual, default: { ...actual, readFileSync }, readFileSync };
});

const repo = process.cwd();

const tempDirs: string[] = [];

afterEach(() => {
  process.chdir(repo);
  fakeFiles.clear();
  // removes the symlink to node_modules, not what it links to
  for (const dir of tempDirs.splice(0)) fs.rmSync(dir, { recursive: true });
});

interface Type {
  kind: string;
  fqn: string;
  base?: string;
  symbolId: string;
  namespace?: string;
  docs?: Record<string, string>;
  initializer?: {
    docs?: Record<string, string>;
    parameters?: Record<string, unknown>[];
    variadic?: boolean;
  };
  methods?: {
    name: string;
    docs?: Record<string, string>;
    parameters?: Record<string, unknown>[];
    returns?: Record<string, unknown>;
    overrides?: string;
    static?: boolean;
    variadic?: boolean;
  }[];
  properties?: Record<string, unknown>[];
  members?: { name: string; docs: Record<string, string> }[];
}

interface Assembly {
  name: string;
  description: string;
  keywords: string[];
  repository: { url: string };
  author: Record<string, unknown>;
  targets: Record<string, unknown>;
  dependencies?: Record<string, string>;
  dependencyClosure?: Record<string, Record<string, unknown>>;
  readme: { markdown: string };
  fingerprint: string;
  types: Record<string, Type>;
}

function tempDir(): string {
  const dir = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'jsii-')));
  tempDirs.push(dir);
  return dir;
}

/**
 * Emits the assembly into a temp dir and reads it back
 */
function emit(
  models: ServiceModel[],
  variant: JsiiOptions['variant'],
  readme = '# readme',
) {
  const outDir = tempDir();
  const result = emitJsii(models, {
    variant,
    version: '1.2.3',
    outDir,
    readme,
  });
  const redirect = JSON.parse(
    fs.readFileSync(path.join(outDir, '.jsii'), 'utf8'),
  ) as Record<string, string>;
  expect(redirect).toEqual({
    schema: 'jsii/file-redirect',
    compression: 'gzip',
    filename: '.jsii.gz',
  });
  const assembly = JSON.parse(
    gunzipSync(fs.readFileSync(path.join(outDir, '.jsii.gz'))).toString(),
  ) as Assembly;
  return { result, assembly };
}

const realModel = (name: string) =>
  JSON.parse(
    fs.readFileSync(`lib/generated/model/${name}.json`, 'utf8'),
  ) as ServiceModel;

const method = (type: Type, name: string) => {
  const found = type.methods?.find((m) => m.name == name);
  if (!found) throw new Error(`No method ${name} in ${type.fqn}`);
  return found;
};

const property = (type: Type, name: string) => {
  const found = type.properties?.find((p) => p.name == name);
  if (!found) throw new Error(`No property ${name} in ${type.fqn}`);
  return found;
};

/**
 * A service model with one action, one resource and one condition, each overridable
 */
function craftedModel(overrides: {
  className?: string;
  action?: Partial<ServiceModel['actions'][number]>;
  resource?: Partial<ServiceModel['resources'][number]>;
  conditions?: Partial<ServiceModel['conditions'][number]>[];
}): ServiceModel {
  return {
    schemaVersion: 1,
    filename: 'crafted',
    className: overrides.className ?? 'Crafted',
    name: 'Crafted Service',
    servicePrefix: 'crafted',
    url: 'https://example.com/crafted',
    accessLevelList: {},
    actions: [
      {
        name: 'Do',
        methodName: 'toDo',
        description: 'Grants permission to do',
        accessLevel: 'Write',
        url: '',
        ...overrides.action,
      },
    ],
    resources: [
      {
        name: 'thing',
        methodName: 'onThing',
        url: 'https://docs.aws.amazon.com/',
        arn: 'arn:${Partition}:crafted:${Region}:${Account}:thing/${ThingId}',
        placeholders: [
          { placeholder: 'ThingId', name: 'thingId', kind: 'required' },
          { placeholder: 'Account', name: 'account', kind: 'account' },
        ],
        conditionMethods: [],
        ...overrides.resource,
      },
    ],
    conditions: (overrides.conditions ?? []).map((condition) => ({
      key: 'crafted:Key',
      methodName: 'ifKey',
      description: '',
      url: '',
      relatedActionMethods: [],
      relatedResourceTypes: [],
      keyLiteral: 'crafted:Key',
      valueKind: 'string',
      defaultOperator: 'StringLike',
      valueTypes: ['string'],
      operatorUrl: 'https://example.com/operators',
      ...condition,
    })),
  };
}

const tsconfig = JSON.stringify({
  compilerOptions: {
    strict: true,
    target: 'ES2020',
    module: 'CommonJS',
    lib: ['es2020'],
    experimentalDecorators: true,
    skipLibCheck: true,
  },
});

/**
 * Creates a package in a temp dir with the given files, the node_modules of the repository, and
 * changes into it
 */
function fixture(files: Record<string, string>, packageJson?: object) {
  const dir = tempDir();
  fs.symlinkSync(
    path.join(repo, 'node_modules'),
    path.join(dir, 'node_modules'),
  );
  const all: Record<string, string> = {
    'tsconfig.json': tsconfig,
    'package.json': JSON.stringify(
      packageJson ?? {
        name: 'iam-floyd',
        version: '1.2.3',
        description: 'Fixture',
        keywords: ['iam'],
        license: 'Apache-2.0',
        homepage: 'https://example.com',
        author: { name: 'Someone' },
      },
    ),
    'lib/generated/cdk-refs.json': JSON.stringify({
      'aws-cdk-lib': '2.100.0',
      constructs: '10.0.5',
    }),
    ...files,
  };
  for (const [file, content] of Object.entries(all)) {
    fs.mkdirSync(path.dirname(path.join(dir, file)), { recursive: true });
    fs.writeFileSync(path.join(dir, file), content);
  }
  process.chdir(dir);
  return dir;
}

describe('emitJsii with the real package', () => {
  it('writes the standalone assembly', () => {
    const { result, assembly } = emit(
      [realModel('s3'), realModel('ec2')],
      'standalone',
      '# IAM Floyd',
    );
    expect(result.name).toBe('iam-floyd');
    expect(result.types).toBe(Object.keys(assembly.types).length);
    expect(result.bytes).toBeGreaterThan(100000);
    expect(assembly.name).toBe('iam-floyd');
    expect(assembly.readme.markdown).toBe('# IAM Floyd');
    expect(assembly.dependencies).toBeUndefined();
    expect(assembly.fingerprint).toMatch(/^[A-Za-z0-9+/]+=*$/);
    expect(assembly.repository.url).toBe(
      'https://github.com/udondan/iam-floyd.git',
    );

    const s3 = assembly.types['iam-floyd.Statement.S3'];
    expect(s3.base).toBe('iam-floyd.PolicyStatement');
    expect(s3.namespace).toBe('Statement');
    expect(s3.symbolId).toBe('lib/generated/policy-statements/s3:S3');
    expect(s3.initializer?.parameters?.[0]).toMatchObject({ name: 'sid' });
    // fluent methods of the base class return the service class
    expect(method(s3, 'allow').returns).toEqual({
      type: { fqn: 'iam-floyd.Statement.S3' },
    });
    expect(method(s3, 'toGetObject').docs?.remarks).toContain(
      'Access Level: Read',
    );
    expect(method(s3, 'onBucket').parameters?.[0]).toEqual({
      name: 'bucketName',
      type: { primitive: 'string' },
      docs: { summary: 'Identifier for the bucketName.' },
    });
    // the base class has no fluent methods anymore
    const base = assembly.types['iam-floyd.PolicyStatement'];
    expect(base.methods?.some((m) => m.name == 'allow')).toBe(false);
    // Statement.All gets the fluent methods too
    expect(
      method(assembly.types['iam-floyd.Statement.All'], 'allow').returns,
    ).toEqual({ type: { fqn: 'iam-floyd.Statement.All' } });
  }, 60000);

  it('writes the CDK assembly', () => {
    const { assembly } = emit([realModel('lambda')], 'cdk');
    expect(assembly.name).toBe('cdk-iam-floyd');
    expect(assembly.description).toMatch(/ for AWS CDK$/);
    expect(assembly.keywords).toEqual(
      expect.arrayContaining(['cdk', 'aws-cdk']),
    );
    expect(Object.keys(assembly.dependencies ?? {})).toEqual([
      'aws-cdk-lib',
      'constructs',
    ]);
    expect(assembly.dependencyClosure?.['aws-cdk-lib']).toHaveProperty(
      'targets',
    );
    expect(assembly.dependencyClosure?.constructs).toHaveProperty('targets');

    const lambda = assembly.types['cdk-iam-floyd.Statement.Lambda'];
    expect(lambda.initializer?.parameters).toEqual([
      {
        name: 'props',
        optional: true,
        type: { fqn: 'aws-cdk-lib.aws_iam.PolicyStatementProps' },
      },
    ]);
    const onFunction = method(lambda, 'onFunction');
    expect(onFunction.parameters?.[0]).toEqual({
      name: 'functionName',
      type: {
        union: {
          types: [
            { primitive: 'string' },
            { fqn: 'aws-cdk-lib.interfaces.aws_lambda.IFunctionRef' },
          ],
        },
      },
      docs: {
        summary:
          'Identifier for the functionName, or a construct that implements `IFunctionRef`, whose ARN is used. Then the partition, region and account are ignored.',
      },
    });
    const all = assembly.types['cdk-iam-floyd.Statement.All'];
    expect(all.initializer?.parameters?.[0]).toMatchObject({ name: 'props' });
  }, 60000);
});

const standaloneFixture = {
  'lib/index.ts': `export { PolicyStatement } from './shared/policy-statement/10-final';
export { Kind, Sample, Types, Child, Plain } from './shared/sample';
import * as Statement from './statements';
export { Statement };
`,
  'lib/statements.ts': `export { All } from './shared/all';
export * from './generated/policy-statements/svc';
`,
  'lib/generated/policy-statements/svc.ts': `import { PolicyStatement } from '../../shared/policy-statement/10-final';
export class Svc extends PolicyStatement {}
`,
  'lib/shared/all.ts': `import { Svc } from '../generated/policy-statements/svc';
import { PolicyStatement } from './policy-statement/10-final';
/** All actions. */
export class All extends PolicyStatement {
  /** Creates it. */
  constructor(sid?: string) {
    super(sid);
  }
  public allow(): this {
    return this;
  }
  public svc(): Svc {
    return new Svc();
  }
}
`,
  'lib/shared/policy-statement/10-final.ts': `import { Svc } from '../../generated/policy-statements/svc';
class Base {
  public provider(): Svc {
    return new Svc();
  }
  /**
   * Allows it. More text.
   *
   * @returns the statement
   */
  public allow(): this {
    return this;
  }
  public deny(): this {
    return this;
  }
  public ifFoo(): string {
    return '';
  }
  public shared(): number {
    return 1;
  }
  public label?: string;
  #secret = 1;
  private hidden(): void {}
  protected guarded = 2;
}

/** The statement. */
export class PolicyStatement extends Base {
  constructor(public sid?: string) {
    super();
  }
  public shared(): number {
    return 2;
  }
  public label?: string;
  public static create(): PolicyStatement {
    return new PolicyStatement();
  }
  public toJSON(): string | undefined {
    return undefined;
  }
}
`,
  'lib/shared/sample.ts': `import { IConstruct } from 'constructs';
import { Resource } from 'aws-cdk-lib';
import { Svc } from '../generated/policy-statements/svc';

/** Kinds of things. */
export enum Kind {
  FirstKind = 'a',
  /** The second. More. */
  Second = 'b',
}
enum Hidden {
  A,
  B,
}
class HiddenClass {}
type Pair = { a: string } & { b: string };

export class Sample {
  private constructor() {}
}

/**
 * Many types.
 *
 * Second paragraph.
 */
export class Types<T> {
  /**
   * Creates it.
   *
   * @param name - the name
   * @param rest
   */
  constructor(name: string, ...rest: number[]) {}
  public generic?: T;
  public big?: bigint;
  public bigToo?: bigint;
  public pair?: Pair;
  public kind: Kind = Kind.FirstKind;
  public hidden: Hidden = Hidden.A;
  public hiddenClass?: HiddenClass;
  public static readonly CONST = 'x';
  public static mutable = 1;
  public static readonly unset: string;
  public static clash = 1;
  public date?: Date;
  public construct?: IConstruct;
  public resource?: Resource;
  public list: string[] = [];
  public literal: 'a' | 'b' = 'a';
  public mixed: string | number = 1;
  public flag = true;
  public whatever: unknown;
  public anything: any;
  public svc?: Svc;
  public readonly fixed = 1;

  /**
   * Does things.
   *
   * @deprecated
   * @see the other docs
   * @example method('x')
   * @default nothing
   * @return maybe a string
   * @internal
   */
  public method(x?: string, y = 1): string | undefined {
    return x ?? String(y);
  }
  public clash(): void {}
  public spread(...values: string[]): void {}
  public statement(): Svc {
    return new Svc();
  }
  public static make(): Types<string> {
    return new Types('x');
  }
}

export class Child extends Error {}

/** No constructor. */
export class Plain {}
`,
};

describe('emitJsii with a standalone fixture', () => {
  it('maps the types of the hand-written classes', () => {
    fixture(standaloneFixture);
    const consoleWarn = vi.spyOn(console, 'warn').mockReturnValue();
    const { result, assembly } = emit(
      [
        craftedModel({
          action: {
            url: 'https://docs.aws.amazon.com/',
            dependentActions: ['s3:GetObject'],
          },
          conditions: [
            // inherited, but not fluent
            { methodName: 'ifFoo', description: 'Filters by foo. More.' },
            { methodName: 'ifBar', valueTypes: ['boolean', 'string'] },
          ],
        }),
      ],
      'standalone',
    );
    expect(assembly.repository.url).toBe('https://example.com');
    expect(assembly.author).toEqual({ name: 'Someone', roles: ['author'] });
    expect(assembly.targets).toEqual({
      js: { npm: 'iam-floyd' },
      python: { distName: 'iam-floyd', module: 'iam_floyd' },
    });

    expect(result.warnings).toEqual(
      expect.arrayContaining([
        "'this' without context at sample.ts",
        "Unsupported type 'bigint' in sample.ts, using any",
        expect.stringMatching(
          /^Unsupported type '.*Pair.*' in sample.ts, using any$/,
        ),
        'Enum Hidden used in sample.ts is not exported, using string',
        'Type HiddenClass used in sample.ts is not exported, using any',
        'iam-floyd.Types: omitting 1 static properties that clash with instance methods',
      ]),
    );

    // each warning is printed once, also for two properties
    expect(
      consoleWarn.mock.calls.filter(
        ([message]) =>
          message == "[jsii] Unsupported type 'bigint' in sample.ts, using any",
      ),
    ).toHaveLength(1);
    consoleWarn.mockRestore();

    const kind = assembly.types['iam-floyd.Kind'];
    expect(kind).toMatchObject({
      kind: 'enum',
      symbolId: 'lib/shared/sample:Kind',
      docs: { summary: 'Kinds of things.', stability: 'stable' },
      members: [
        { name: 'FIRST_KIND', docs: {} },
        { name: 'SECOND', docs: { summary: 'The second.', remarks: 'More.' } },
      ],
    });

    // private constructor
    expect(assembly.types['iam-floyd.Sample'].initializer).toBeUndefined();
    // no constructor at all
    expect(assembly.types['iam-floyd.Plain'].initializer).toEqual({});
    // a base declared in the TypeScript lib
    expect(assembly.types['iam-floyd.Child'].base).toBe('typescript.Error');

    const types = assembly.types['iam-floyd.Types'];
    expect(types.docs).toEqual({
      summary: 'Many types.',
      remarks: 'Second paragraph.',
      stability: 'stable',
    });
    expect(types.initializer).toEqual({
      docs: { summary: 'Creates it.', stability: 'stable' },
      parameters: [
        {
          name: 'name',
          type: { primitive: 'string' },
          docs: { summary: 'the name' },
        },
        {
          name: 'rest',
          type: { primitive: 'number' },
          variadic: true,
        },
      ],
      variadic: true,
    });
    const typeOf = (name: string) => property(types, name).type;
    expect(typeOf('generic')).toEqual({ primitive: 'any' });
    expect(typeOf('big')).toEqual({ primitive: 'any' });
    expect(typeOf('pair')).toEqual({ primitive: 'any' });
    expect(typeOf('kind')).toEqual({ fqn: 'iam-floyd.Kind' });
    expect(typeOf('hidden')).toEqual({ primitive: 'string' });
    expect(typeOf('hiddenClass')).toEqual({ primitive: 'any' });
    expect(typeOf('date')).toEqual({ primitive: 'date' });
    expect(typeOf('construct')).toEqual({ fqn: 'constructs.IConstruct' });
    expect(typeOf('resource')).toEqual({ fqn: 'aws-cdk-lib.Resource' });
    expect(typeOf('list')).toEqual({
      collection: { kind: 'array', elementtype: { primitive: 'string' } },
    });
    expect(typeOf('literal')).toEqual({ primitive: 'string' });
    expect(typeOf('mixed')).toEqual({
      union: { types: [{ primitive: 'string' }, { primitive: 'number' }] },
    });
    expect(typeOf('flag')).toEqual({ primitive: 'boolean' });
    expect(typeOf('whatever')).toEqual({ primitive: 'any' });
    expect(typeOf('anything')).toEqual({ primitive: 'any' });
    // a statement provider referenced from the root namespace is widened
    expect(typeOf('svc')).toEqual({ fqn: 'iam-floyd.PolicyStatement' });
    expect(property(types, 'generic').optional).toBe(true);
    expect(property(types, 'CONST')).toMatchObject({
      static: true,
      immutable: true,
      const: true,
    });
    expect(property(types, 'mutable')).toMatchObject({ static: true });
    expect(property(types, 'mutable').immutable).toBeUndefined();
    expect(property(types, 'unset').const).toBeUndefined();
    expect(property(types, 'fixed')).toMatchObject({ immutable: true });
    expect(types.properties?.some((p) => p.name == 'clash')).toBe(false);

    expect(method(types, 'method')).toEqual({
      name: 'method',
      docs: {
        summary: 'Does things.',
        deprecated: '',
        see: 'other docs',
        example: "method('x')",
        default: 'nothing',
        returns: 'maybe a string',
        stability: 'stable',
      },
      parameters: [
        { name: 'x', type: { primitive: 'string' }, optional: true },
        { name: 'y', type: { primitive: 'number' }, optional: true },
      ],
      returns: { type: { primitive: 'string' }, optional: true },
    });
    expect(method(types, 'clash').returns).toBeUndefined();
    expect(method(types, 'spread').variadic).toBe(true);
    expect(method(types, 'statement').returns).toEqual({
      type: { fqn: 'iam-floyd.PolicyStatement' },
    });
    expect(method(types, 'make')).toMatchObject({
      static: true,
      returns: { type: { fqn: 'iam-floyd.Types' } },
    });

    // members of the non-exported base class are hoisted, the subclass wins
    const statement = assembly.types['iam-floyd.PolicyStatement'];
    expect(statement.base).toBeUndefined();
    expect(statement.methods?.map((m) => m.name)).toEqual([
      'create',
      'ifFoo',
      'provider',
      'shared',
      'toJSON',
    ]);
    // only the root namespace must not reference statement providers
    expect(method(statement, 'provider').returns).toEqual({
      type: { fqn: 'iam-floyd.Statement.Svc' },
    });
    // parameter properties like `sid` are not collected
    expect(statement.properties?.map((p) => p.name)).toEqual(['label']);

    const all = assembly.types['iam-floyd.Statement.All'];
    expect(all.symbolId).toBe('lib/shared/all:All');
    expect(method(all, 'svc').returns).toEqual({
      type: { fqn: 'iam-floyd.Statement.Svc' },
    });
    expect(method(all, 'deny').returns).toEqual({
      type: { fqn: 'iam-floyd.Statement.All' },
    });

    const crafted = assembly.types['iam-floyd.Statement.Crafted'];
    expect(method(crafted, 'toDo').docs).toEqual({
      summary: 'Grants permission to do',
      remarks: 'Access Level: Write\n\nDependent actions:\n- s3:GetObject',
      stability: 'stable',
    });
    expect(method(crafted, 'onThing').docs).toEqual({
      summary: 'Adds a resource of type thing to the statement.',
      stability: 'stable',
    });
    expect(method(crafted, 'onThing').parameters?.[1]).toEqual({
      name: 'account',
      type: { primitive: 'string' },
      optional: true,
      docs: {
        summary:
          "Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.",
      },
    });
    expect(method(crafted, 'ifFoo')).toEqual({
      name: 'ifFoo',
      docs: {
        summary: 'Filters by foo.',
        remarks: 'More.',
        stability: 'stable',
      },
      returns: { type: { primitive: 'string' } },
      overrides: 'iam-floyd.PolicyStatement',
    });
    expect(method(crafted, 'ifBar')).toEqual({
      name: 'ifBar',
      docs: { summary: 'Filters access by crafted:Key.', stability: 'stable' },
      parameters: [
        {
          name: 'value',
          type: {
            union: {
              types: [
                { primitive: 'boolean' },
                { primitive: 'string' },
                {
                  collection: {
                    kind: 'array',
                    elementtype: {
                      union: {
                        types: [
                          { primitive: 'boolean' },
                          { primitive: 'string' },
                        ],
                      },
                    },
                  },
                },
              ],
            },
          },
          docs: { summary: 'The value(s) to check.' },
        },
        {
          name: 'operator',
          type: {
            union: {
              types: [{ fqn: 'iam-floyd.Operator' }, { primitive: 'string' }],
            },
          },
          optional: true,
          docs: {
            summary:
              'Works with [string operators](https://example.com/operators).',
            default: 'StringLike',
          },
        },
      ],
      returns: { type: { fqn: 'iam-floyd.Statement.Crafted' } },
    });
  }, 60000);

  it('fails on anonymous classes', () => {
    fixture({
      'lib/index.ts': `export { default } from './shared/anonymous';\n`,
      'lib/shared/anonymous.ts': `export default class {}\n`,
      'lib/shared/policy-statement/10-final.ts': `export class PolicyStatement {}\n`,
    });
    expect(() => emit([], 'standalone')).toThrow(
      'Anonymous declaration in lib/shared/anonymous',
    );
  });

  it('fails on a base it cannot resolve', () => {
    fixture({
      'lib/index.ts': `export { Broken } from './shared/broken';\n`,
      'lib/shared/broken.ts': `declare function make(): any;\nexport class Broken extends make() {}\n`,
      'lib/shared/policy-statement/10-final.ts': `export class PolicyStatement {}\n`,
    });
    expect(() => emit([], 'standalone')).toThrow(
      'Cannot resolve external type any',
    );
  });

  it('fails on a base that is not external', () => {
    fixture({
      'lib/index.ts': `export { Local } from './shared/local';\n`,
      'lib/shared/local.ts': `interface Base {}\ndeclare const Base: { new (): Base };\nexport class Local extends Base {}\n`,
      'lib/shared/policy-statement/10-final.ts': `export class PolicyStatement {}\n`,
    });
    expect(() => emit([], 'standalone')).toThrow(
      /^Not an external type: .*\/lib\/shared\/local\.ts$/,
    );
  });
});

const minimalFixture = {
  'lib/index.ts': `export * from './shared/operators';
import * as Statement from './generated/policy-statements/svc';
export { Statement };
`,
  'lib/generated/policy-statements/svc.ts': `import { PolicyStatement } from '../../shared/policy-statement/10-final';
export class Svc extends PolicyStatement {}
`,
  'lib/shared/operators.ts': `export class Operator {}\n`,
  'lib/shared/policy-statement/10-final.ts': `export class PolicyStatement {
  public sid?: string;
  public allow(): this {
    return this;
  }
}
`,
};

describe('emitJsii with a non-exported PolicyStatement', () => {
  it('hoists its members into the services', () => {
    fixture(minimalFixture, {
      name: 'iam-floyd',
      version: '1.2.3',
      description: 'Fixture',
      keywords: [],
      license: 'Apache-2.0',
      homepage: 'https://example.com',
      repository: { url: 'git+https://example.com/repo.git' },
      author: { name: 'Someone', url: 'https://example.com/someone' },
      jsii: { targets: { go: { packageName: 'x' } } },
    });
    const { assembly } = emit(
      [
        craftedModel({
          action: { url: 'https://example.com/do' },
          resource: { url: '', conditionMethods: ['ifKey'] },
          conditions: [
            {
              description: '   ',
              url: 'https://example.com/key',
              relatedActionMethods: ['toDo'],
              relatedResourceTypes: ['thing'],
            },
            {
              methodName: 'ifFlag',
              valueKind: 'boolean',
              valueTypes: undefined,
            },
            {
              methodName: 'ifTag',
              keyParam: 'tagKey',
              valueTypes: ['number', 'Date', 'number'],
            },
          ],
        }),
      ],
      'standalone',
    );
    expect(assembly.repository.url).toBe('https://example.com/repo.git');
    expect(assembly.author).toEqual({
      name: 'Someone',
      roles: ['author'],
      url: 'https://example.com/someone',
    });
    expect(assembly.targets).toEqual({
      js: { npm: 'iam-floyd' },
      go: { packageName: 'x' },
    });
    expect(Object.keys(assembly.types)).toEqual([
      'iam-floyd.Operator',
      'iam-floyd.Statement.Crafted',
    ]);

    const crafted = assembly.types['iam-floyd.Statement.Crafted'];
    expect(crafted.base).toBeUndefined();
    expect(crafted.properties).toEqual([
      {
        name: 'sid',
        type: { primitive: 'string' },
        docs: { stability: 'stable' },
        optional: true,
      },
    ]);
    expect(method(crafted, 'allow').returns).toEqual({
      type: { fqn: 'iam-floyd.Statement.Crafted' },
    });
    expect(method(crafted, 'toDo').docs?.remarks).toBe(
      'Access Level: Write\n\nhttps://example.com/do',
    );
    expect(method(crafted, 'onThing').docs?.remarks).toBe(
      'Possible conditions:\n- .ifKey()',
    );
    expect(method(crafted, 'ifKey').docs).toEqual({
      summary: 'Filters access by crafted:Key.',
      remarks:
        'https://example.com/key\n\nApplies to actions:\n- .toDo()\n\nApplies to resource types:\n- thing',
      stability: 'stable',
    });
    expect(method(crafted, 'ifFlag').parameters).toEqual([
      {
        name: 'value',
        type: { primitive: 'boolean' },
        optional: true,
        docs: { summary: '`true` or `false`.', default: 'true' },
      },
    ]);
    const tag = method(crafted, 'ifTag').parameters ?? [];
    expect(tag[0]).toEqual({
      name: 'tagKey',
      type: { primitive: 'string' },
      docs: { summary: 'The tag key to check.' },
    });
    expect(tag[1].type).toEqual({
      union: {
        types: [
          { primitive: 'number' },
          { primitive: 'date' },
          {
            collection: {
              kind: 'array',
              elementtype: {
                union: {
                  types: [{ primitive: 'number' }, { primitive: 'date' }],
                },
              },
            },
          },
        ],
      },
    });
  });

  it('fails on unknown value types', () => {
    fixture(minimalFixture);
    expect(() =>
      emit(
        [craftedModel({ conditions: [{ valueTypes: ['Buffer'] }] })],
        'standalone',
      ),
    ).toThrow('Unknown model value type: Buffer');
  });

  it('fails on duplicate service classes', () => {
    fixture(minimalFixture);
    expect(() =>
      emit([craftedModel({}), craftedModel({})], 'standalone'),
    ).toThrow('Duplicate type iam-floyd.Statement.Crafted');
  });
});

const cdkFixture = {
  'lib/index.ts': `export * from './generated/aws-managed-policies';
export { Props, Res } from './shared/cdk-thing';
import * as Statement from './generated/policy-statements/svc';
export { Statement };
`,
  'lib/generated/policy-statements/svc.ts': `import { PolicyStatement } from '../../shared/policy-statement/10-final';
export class Svc extends PolicyStatement {}
`,
  'lib/shared/cdk-thing.ts': `import { aws_iam, Resource } from 'aws-cdk-lib';
export class Props extends aws_iam.PolicyStatement {}
export class Res extends Resource {
  constructor() {
    super(undefined as never, 'id');
  }
}
`,
  'lib/shared/policy/index.ts': `export {};\n`,
  'lib/shared/policy/1-base.ts': `export class PolicyBase {}\n`,
  'lib/shared/policy/1-base.CDK.ts': `export class PolicyBase {}\n`,
  'lib/shared/policy-statement/1-base.ts': `export class PolicyStatementBase {
  public standalone(): this {
    return this;
  }
}
`,
  'lib/shared/policy-statement/1-base.CDK.ts': `import { aws_iam } from 'aws-cdk-lib';
export class PolicyStatementBase extends aws_iam.PolicyStatement {
  public cdkOnly(): this {
    return this;
  }
}
`,
  'lib/shared/policy-statement/6-arn-defaults.ts': `import { PolicyStatementBase } from './1-base';
export class PolicyStatementWithArnDefaults extends PolicyStatementBase {}
`,
  'lib/shared/policy-statement/7-arn-defaults-CDK.ts': `import { PolicyStatementWithArnDefaults } from './6-arn-defaults';
export class PolicyStatementWithArnDefaultsForCdk extends PolicyStatementWithArnDefaults {
  public withDefaults(): this {
    return this;
  }
}
`,
  'lib/shared/policy-statement/8-principals.ts': `import * as path from 'path';
import { PolicyStatementWithArnDefaults } from './6-arn-defaults';
export class PolicyStatementWithPrincipal extends PolicyStatementWithArnDefaults {
  public forPath(): string {
    return path.sep;
  }
}
`,
  'lib/shared/policy-statement/10-final.ts': `import { PolicyStatementWithPrincipal } from './8-principals';
export class PolicyStatement extends PolicyStatementWithPrincipal {}
`,
  'lib/generated/aws-managed-policies/index.ts': `export * from './iam-floyd';\n`,
  'lib/generated/aws-managed-policies/iam-floyd.ts': `export class StandaloneManaged {}\n`,
  'lib/generated/aws-managed-policies/cdk-iam-floyd.ts': `export class CdkManaged {}\n`,
};

describe('emitJsii with a CDK fixture', () => {
  it('swaps the CDK files and extends the CDK statement', () => {
    fixture(cdkFixture);
    // an uncompressed redirect, and an assembly without targets
    fakeFiles.set(
      '/constructs/.jsii',
      JSON.stringify({ schema: 'jsii/file-redirect', filename: '.jsii.plain' }),
    );
    fakeFiles.set(
      '/constructs/.jsii.plain',
      JSON.stringify({
        name: 'constructs',
        submodules: { 'constructs.sub': {} },
      }),
    );
    const { assembly } = emit(
      [
        craftedModel({
          resource: {
            cdkRef: {
              module: 'aws_crafted',
              interface: 'IThingRef',
              property: 'thingRef',
              id: 'thingId',
            },
          },
        }),
      ],
      'cdk',
    );
    expect(assembly.dependencies).toEqual({
      'aws-cdk-lib': '^2.100.0',
      constructs: '^10.0.5',
    });
    expect(assembly.dependencyClosure?.constructs).toEqual({});

    expect(Object.keys(assembly.types)).toEqual([
      'cdk-iam-floyd.CdkManaged',
      'cdk-iam-floyd.Props',
      'cdk-iam-floyd.Res',
      'cdk-iam-floyd.Statement.Crafted',
    ]);
    expect(assembly.types['cdk-iam-floyd.Props']).toMatchObject({
      base: 'aws-cdk-lib.aws_iam.PolicyStatement',
      initializer: {
        parameters: [
          {
            name: 'props',
            optional: true,
            type: { fqn: 'aws-cdk-lib.aws_iam.PolicyStatementProps' },
          },
        ],
      },
    });
    expect(assembly.types['cdk-iam-floyd.Res'].base).toBe(
      'aws-cdk-lib.Resource',
    );

    const crafted = assembly.types['cdk-iam-floyd.Statement.Crafted'];
    expect(crafted.base).toBe('aws-cdk-lib.aws_iam.PolicyStatement');
    // the CDK files replace the standalone ones, 8-principals extends the CDK defaults
    expect(crafted.methods?.map((m) => m.name)).toEqual([
      'cdkOnly',
      'forPath',
      'onThing',
      'toDo',
      'withDefaults',
    ]);
    expect(method(crafted, 'cdkOnly').returns).toEqual({
      type: { fqn: 'cdk-iam-floyd.Statement.Crafted' },
    });
    expect(method(crafted, 'onThing').parameters?.[0]).toEqual({
      name: 'thingId',
      type: {
        union: {
          types: [
            { primitive: 'string' },
            { fqn: 'aws-cdk-lib.interfaces.aws_crafted.IThingRef' },
          ],
        },
      },
      docs: {
        summary:
          'Identifier for the thingId, or a construct that implements `IThingRef`.',
      },
    });
  }, 60000);
});
