import 'colors';

import * as fs from 'fs';
import * as glob from 'glob';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  addCdkRefs,
  cdkMinVersion,
  cdkVersionFile,
  updateCdkRefs,
} from '../../lib/generator/cdk-refs';
import { CdkRef, ServiceModel } from '../../lib/generator/model';

const mocks = vi.hoisted(() => {
  // files that replace those on disk, `null` for a missing file
  const files: Record<string, string | null> = {};
  return { files };
});

vi.mock('fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('fs')>();
  const mocked = {
    ...actual,
    readFileSync: vi.fn((file: string, encoding: BufferEncoding) => {
      const content = mocks.files[file];
      if (content === null) {
        throw new Error(`ENOENT: ${file}`);
      }
      return content ?? actual.readFileSync(file, encoding);
    }),
    existsSync: vi.fn((file: string) =>
      file in mocks.files
        ? mocks.files[file] !== null
        : actual.existsSync(file),
    ),
    writeFileSync: vi.fn(),
  };
  return { ...mocked, default: mocked };
});

vi.mock('glob', () => ({ sync: vi.fn() }));

vi.mock('../../lib/generator/fixes', async (importOriginal) => {
  const actual =
    await importOriginal<typeof import('../../lib/generator/fixes')>();
  return {
    ...actual,
    fixes: {
      ...actual.fixes,
      fixok: {
        cdkModule: 'aws_foo',
        resourceTypes: {
          off: { cdkRef: false },
          byid: { cdkRef: { interface: 'IWidgetRef', id: 'widgetId' } },
          byarn: { cdkRef: { interface: 'IWidgetRef', arn: 'widgetArn' } },
          other: { cdkRef: { module: 'aws_bar_baz', interface: 'IThingRef' } },
        },
      },
      fixmulti: {
        resourceTypes: { two: { cdkRef: { interface: 'IWidgetRef' } } },
      },
      fixnomodule: {
        resourceTypes: { x: { cdkRef: { interface: 'IWidgetRef' } } },
      },
      fixnoref: {
        resourceTypes: { x: { cdkRef: { interface: 'IMissingRef' } } },
      },
      fixbadid: {
        resourceTypes: {
          x: { cdkRef: { interface: 'IWidgetRef', id: 'nope' } },
        },
      },
      fixbadarn: {
        resourceTypes: {
          x: { cdkRef: { interface: 'IWidgetRef', arn: 'nope' } },
        },
      },
      fixmissingmodule: { cdkModule: 'aws_missing' },
    },
  };
});

const interfacesDir = 'node_modules/aws-cdk-lib/interfaces';

/**
 * Reference interfaces like those of aws-cdk-lib/interfaces
 */
const interfaces: Record<string, string> = {
  [`${interfacesDir}/index.generated.d.ts`]: [
    "export * as aws_foo from './generated/aws-foo-interfaces.generated';",
    "export * as aws_bar_baz from './generated/aws-bar-baz-interfaces.generated';",
  ].join('\n'),
  [`${interfacesDir}/generated/aws-foo-interfaces.generated.d.ts`]: `
export interface IWidgetRef extends constructs.IConstruct, IEnvironmentAware {
    /**
     * A reference to a Widget resource.
     */
    readonly widgetRef: WidgetReference;
}
export interface WidgetReference {
    /**
     * The ID of the Widget resource.
     */
    readonly widgetId: string;
    readonly widgetArn: string;
    readonly count: number;
}
export interface IGadgetRef extends constructs.IConstruct {
    readonly gadgetRef: GadgetReference;
}
export interface GadgetReference {
    readonly gadgetName: string;
    readonly region?: string;
}
export interface IDualRef extends constructs.IConstruct {
    readonly dualRef: DualReference;
}
export interface DualReference {
    readonly sourceArn: string;
    readonly targetArn: string;
}
export interface IOrphanRef extends constructs.IConstruct {
    readonly orphanRef: MissingReference;
}
`,
  [`${interfacesDir}/generated/aws-bar-baz-interfaces.generated.d.ts`]: `
export interface IThingRef extends constructs.IConstruct {
    readonly thingRef: ThingReference;
}
export interface ThingReference {
    readonly thingId: string;
    readonly resourceArn: string;
}
`,
};

interface Reference {
  interface: string;
  property: string;
  fields: string[];
}

function references(
  modules: Record<string, Reference[]>,
): Map<string, Map<string, Reference>> {
  return new Map(
    Object.entries(modules).map(([module, refs]) => [
      module,
      new Map(refs.map((ref) => [ref.interface, ref])),
    ]),
  );
}

const modules = references({
  aws_foo: [
    {
      interface: 'IWidgetRef',
      property: 'widgetRef',
      fields: ['widgetId', 'widgetArn'],
    },
    {
      interface: 'IGadgetRef',
      property: 'gadgetRef',
      fields: ['gadgetName', 'region'],
    },
    {
      interface: 'IDualRef',
      property: 'dualRef',
      fields: ['sourceArn', 'targetArn'],
    },
    { interface: 'IOrphanRef', property: 'orphanRef', fields: [] },
  ],
  aws_bar_baz: [
    {
      interface: 'IThingRef',
      property: 'thingRef',
      fields: ['thingId', 'resourceArn'],
    },
  ],
});

/**
 * A resource type with the required placeholders, e.g. `Widget` for `onWidget(widget)`
 */
function resource(
  name: string,
  required: string[],
  cdkRef?: CdkRef,
): ServiceModel['resources'][number] {
  return {
    name,
    methodName: `on${name[0].toUpperCase()}${name.slice(1)}`,
    url: '',
    arn: '',
    placeholders: [
      { placeholder: 'Partition', name: 'partition', kind: 'partition' },
      ...required.map((placeholder) => ({
        placeholder,
        name: placeholder,
        kind: 'required' as const,
      })),
      { placeholder: 'Region', name: 'region', kind: 'region' },
    ],
    conditionMethods: [],
    ...(cdkRef ? { cdkRef } : {}),
  };
}

function model(
  slug: string,
  servicePrefix: string,
  resources: ServiceModel['resources'],
): ServiceModel {
  return {
    schemaVersion: 1,
    filename: slug,
    className: slug,
    name: slug,
    servicePrefix,
    url: `https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazon${slug}.html`,
    accessLevelList: {},
    actions: [],
    resources,
    conditions: [],
  };
}

function refs(service: ServiceModel): Record<string, CdkRef | undefined> {
  return Object.fromEntries(
    service.resources.map((type) => [type.name, type.cdkRef]),
  );
}

const widget: CdkRef = {
  module: 'aws_foo',
  interface: 'IWidgetRef',
  property: 'widgetRef',
  arn: 'widgetArn',
};

describe('addCdkRefs', () => {
  it('matches the resource types with the reference interfaces', () => {
    const service = model('foo', 'foo', [
      resource('widget', ['WidgetId'], { ...widget, arn: 'old' }),
      resource('gadget', ['GadgetName']),
      resource('dual', ['DualName']),
      resource('orphan', ['OrphanName']),
      resource('unknown', ['UnknownName']),
      resource('pair', ['WidgetId', 'Other']),
    ]);
    const unmatched: string[] = [];
    addCdkRefs(service, modules, unmatched);
    expect(refs(service)).toEqual({
      widget,
      gadget: {
        module: 'aws_foo',
        interface: 'IGadgetRef',
        property: 'gadgetRef',
        id: 'gadgetName',
      },
      dual: undefined,
      orphan: undefined,
      unknown: undefined,
      pair: undefined,
    });
    expect(unmatched).toEqual([
      'foo:dual (aws_foo.IDualRef: sourceArn, targetArn)',
      'foo:orphan (aws_foo.IOrphanRef: )',
    ]);
  });

  it('finds the module without the prefix aws_ and special characters', () => {
    const service = model('barbaz', 'bar-baz', [resource('thing', ['Id'])]);
    addCdkRefs(service, modules);
    expect(refs(service)).toEqual({
      thing: {
        module: 'aws_bar_baz',
        interface: 'IThingRef',
        property: 'thingRef',
        arn: 'resourceArn',
      },
    });
  });

  it('skips services without a module', () => {
    const service = model('nomod', 'nomod', [
      resource('widget', ['WidgetId'], widget),
    ]);
    addCdkRefs(service, modules);
    expect(refs(service)).toEqual({ widget: undefined });
  });

  it('skips a module of the fixes that aws-cdk-lib does not have', () => {
    const service = model('fixmissingmodule', 'foo', [
      resource('widget', ['WidgetId']),
    ]);
    addCdkRefs(service, modules);
    expect(refs(service)).toEqual({ widget: undefined });
  });

  it('applies the fixes', () => {
    const service = model('fixok', 'fx', [
      resource('off', ['Id'], widget),
      resource('byid', ['Id']),
      resource('byarn', ['Id']),
      resource('other', ['Id']),
      resource('widget', ['WidgetId']),
    ]);
    addCdkRefs(service, modules);
    expect(refs(service)).toEqual({
      off: undefined,
      byid: { ...widget, arn: undefined, id: 'widgetId' },
      byarn: widget,
      other: {
        module: 'aws_bar_baz',
        interface: 'IThingRef',
        property: 'thingRef',
        arn: 'resourceArn',
      },
      widget,
    });
    expect(refs(service).byid).not.toHaveProperty('arn');
  });

  it.each([
    [
      'fixmulti',
      'foo',
      resource('two', ['A', 'B']),
      'foo:two has 2 required placeholders, a CDK reference replaces only one',
    ],
    [
      'fixnomodule',
      'nomod',
      resource('x', ['Id']),
      'CDK reference undefined.IWidgetRef of nomod:x not found in aws-cdk-lib',
    ],
    [
      'fixnoref',
      'foo',
      resource('x', ['Id']),
      'CDK reference aws_foo.IMissingRef of foo:x not found in aws-cdk-lib',
    ],
    [
      'fixbadid',
      'foo',
      resource('x', ['Id']),
      'CDK reference aws_foo.IWidgetRef of foo:x has no field with the ARN or Id',
    ],
    [
      'fixbadarn',
      'foo',
      resource('x', ['Id']),
      'CDK reference aws_foo.IWidgetRef of foo:x has no field with the ARN or Id',
    ],
  ])('fails on the fix of %s', (slug, prefix, type, message) => {
    expect(() => addCdkRefs(model(slug, prefix, [type]), modules)).toThrow(
      message,
    );
  });
});

describe('cdkMinVersion', () => {
  afterEach(() => {
    delete mocks.files[cdkVersionFile];
  });

  it('reads the minimum versions', () => {
    mocks.files[cdkVersionFile] = JSON.stringify({
      'aws-cdk-lib': '2.200.0',
      constructs: '10.4.0',
      interfaces: [],
    });
    expect(cdkMinVersion()).toBe('2.200.0');
    expect(cdkMinVersion('aws-cdk-lib')).toBe('2.200.0');
    expect(cdkMinVersion('constructs')).toBe('10.4.0');
  });
});

describe('updateCdkRefs', () => {
  const installed = JSON.parse(
    fs.readFileSync('node_modules/aws-cdk-lib/package.json', 'utf8'),
  ) as { version: string; peerDependencies: { constructs: string } };
  const constructs = installed.peerDependencies.constructs.replace(/^\^/, '');

  function written(): Record<string, unknown> {
    return Object.fromEntries(
      vi
        .mocked(fs.writeFileSync)
        .mock.calls.map(([file, content]) => [
          String(file),
          JSON.parse(content as string) as unknown,
        ]),
    );
  }

  function models(...services: ServiceModel[]) {
    vi.mocked(glob.sync).mockReturnValue(
      services.map((service) => `virtual/${service.filename}.json`),
    );
    for (const service of services) {
      mocks.files[`virtual/${service.filename}.json`] = JSON.stringify(service);
    }
  }

  beforeEach(() => {
    vi.spyOn(console, 'log').mockReturnValue();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.mocked(fs.writeFileSync).mockReset();
    vi.mocked(glob.sync).mockReset();
    for (const file of Object.keys(mocks.files)) {
      delete mocks.files[file];
    }
  });

  it('sets the references from the installed aws-cdk-lib', () => {
    vi.mocked(glob.sync).mockReturnValue(['lib/generated/model/lambda.json']);
    updateCdkRefs();

    expect(glob.sync).toHaveBeenCalledWith('lib/generated/model/*.json');
    const files = written();
    const lambda = files['lib/generated/model/lambda.json'] as ServiceModel;
    expect(
      lambda.resources.find((type) => type.name === 'function')?.cdkRef,
    ).toEqual({
      module: 'aws_lambda',
      interface: 'IFunctionRef',
      property: 'functionRef',
      arn: 'functionArn',
    });
    const previous = JSON.parse(
      fs.readFileSync(cdkVersionFile, 'utf8'),
    ) as Record<string, unknown>;
    // the model uses no new interfaces, the minimum versions are kept
    expect(files[cdkVersionFile]).toMatchObject({
      'aws-cdk-lib': previous['aws-cdk-lib'],
      constructs: previous.constructs,
    });
    expect(
      (files[cdkVersionFile] as { interfaces: string[] }).interfaces,
    ).toContain('aws_lambda.IFunctionRef');
    expect(console.log).toHaveBeenLastCalledWith(
      expect.stringContaining('CDK references: '),
    );
  });

  describe('with the reference interfaces of a fixture', () => {
    beforeEach(() => {
      Object.assign(mocks.files, interfaces);
    });

    it('reads the reference interfaces', () => {
      models(
        model('foo', 'foo', [
          resource('widget', ['WidgetId']),
          resource('gadget', ['GadgetName']),
          resource('orphan', ['OrphanName']),
          resource('dual', ['DualName']),
        ]),
        model('barbaz', 'bar-baz', [resource('thing', ['Id'])]),
      );
      mocks.files[cdkVersionFile] = null;

      updateCdkRefs();

      const files = written();
      expect(refs(files['virtual/foo.json'] as ServiceModel)).toEqual({
        widget,
        gadget: {
          module: 'aws_foo',
          interface: 'IGadgetRef',
          property: 'gadgetRef',
          id: 'gadgetName',
        },
        orphan: undefined,
        dual: undefined,
      });
      expect(refs(files['virtual/barbaz.json'] as ServiceModel)).toEqual({
        thing: {
          module: 'aws_bar_baz',
          interface: 'IThingRef',
          property: 'thingRef',
          arn: 'resourceArn',
        },
      });
      // without a previous file, the minimum is the installed version
      expect(files[cdkVersionFile]).toEqual({
        'aws-cdk-lib': installed.version,
        constructs,
        interfaces: [
          'aws_bar_baz.IThingRef',
          'aws_foo.IGadgetRef',
          'aws_foo.IWidgetRef',
        ],
      });
      expect(console.log).toHaveBeenCalledWith(
        'Reference interfaces with neither an ARN nor the identifier of the ARN, which fixes.ts can set:\nfoo:dual (aws_foo.IDualRef: sourceArn, targetArn)\nfoo:orphan (aws_foo.IOrphanRef: )'
          .grey,
      );
      expect(console.log).toHaveBeenLastCalledWith(
        `CDK references: 3 resource types, 3 interfaces, aws-cdk-lib >= ${installed.version}`
          .green,
      );
    });

    it.each([
      [
        'keeps the minimum versions without changes',
        {
          'aws-cdk-lib': '2.1.0',
          constructs: '10.0.0',
          interfaces: ['aws_foo.IWidgetRef', 'aws_foo.IGadgetRef'],
        },
        widget,
        { 'aws-cdk-lib': '2.1.0', constructs: '10.0.0' },
      ],
      [
        'raises the minimum versions for a new interface',
        {
          'aws-cdk-lib': '2.1.0',
          constructs: '10.0.0',
          interfaces: ['aws_foo.IGadgetRef'],
        },
        widget,
        { 'aws-cdk-lib': installed.version, constructs },
      ],
      [
        'raises the minimum versions for a changed reference',
        {
          'aws-cdk-lib': '2.1.0',
          constructs: '10.0.0',
          interfaces: ['aws_foo.IWidgetRef', 'aws_foo.IGadgetRef'],
        },
        { ...widget, arn: 'widgetName' },
        { 'aws-cdk-lib': installed.version, constructs },
      ],
      [
        'raises the minimum versions without the one of constructs',
        {
          'aws-cdk-lib': '2.1.0',
          interfaces: ['aws_foo.IWidgetRef', 'aws_foo.IGadgetRef'],
        },
        widget,
        { 'aws-cdk-lib': installed.version, constructs },
      ],
    ])('%s', (_name, previous, before, expected) => {
      models(
        model('foo', 'foo', [
          resource('widget', ['WidgetId'], before),
          resource('gadget', ['GadgetName']),
        ]),
      );
      mocks.files[cdkVersionFile] = JSON.stringify(previous);

      updateCdkRefs();

      expect(written()[cdkVersionFile]).toEqual({
        ...expected,
        interfaces: ['aws_foo.IGadgetRef', 'aws_foo.IWidgetRef'],
      });
      expect(console.log).toHaveBeenCalledOnce();
    });
  });
});
