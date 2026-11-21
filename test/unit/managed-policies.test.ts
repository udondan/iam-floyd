import * as fs from 'fs';
import { SourceFile } from 'ts-morph';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

interface Command {
  name: string;
  input: Record<string, unknown>;
}

const mocks = vi.hoisted(() => ({
  config: [] as unknown[],
  send: vi.fn<(command: Command) => Promise<unknown>>(),
}));

vi.mock('@aws-sdk/client-iam', () => {
  const command = (name: string) =>
    class {
      name = name;
      constructor(public input: Record<string, unknown>) {}
    };
  return {
    IAMClient: class {
      constructor(config: unknown) {
        mocks.config.push(config);
      }
      send = mocks.send;
    },
    ListPoliciesCommand: command('ListPolicies'),
    GetPolicyCommand: command('GetPolicy'),
    GetPolicyVersionCommand: command('GetPolicyVersion'),
  };
});

vi.mock('fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('fs')>();
  const mocked = { ...actual, writeFileSync: vi.fn() };
  return { ...mocked, default: mocked };
});

const policies: Record<
  string,
  { name?: string; version?: string; description: string; document?: string }
> = {
  'arn:aws:iam::aws:policy/ReadOnlyAccess': {
    name: 'ReadOnlyAccess',
    version: 'v3',
    description: 'Read only',
    document: encodeURIComponent(
      '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":"*:Get*","Resource":"*"}]}',
    ),
  },
  'arn:aws:iam::aws:policy/aws-service-role/AWS-Role_Policy': {
    name: 'AWS-Role_Policy',
    version: 'v1',
    description: 'For a service role',
    document: encodeURIComponent('{"Statement":[]}'),
  },
  'arn:aws:iam::aws:policy/NoVersion': {
    name: 'NoVersion',
    description: 'skipped',
  },
  'arn:aws:iam::aws:policy/NoName': { description: 'skipped' },
};

function respond(missingDocument?: string) {
  mocks.send.mockImplementation((command) => {
    const arn = command.input.PolicyArn as string;
    switch (command.name) {
      case 'ListPolicies': {
        expect(command.input).toMatchObject({ Scope: 'AWS', MaxItems: 100 });
        const page = (command.input.Marker as string | undefined) ?? 'first';
        const list = Object.entries(policies).map(([key, policy]) => ({
          Arn: key,
          PolicyName: policy.name,
          DefaultVersionId: policy.version,
        }));
        return Promise.resolve(
          {
            first: { Policies: list.slice(2), IsTruncated: true, Marker: 'm1' },
            m1: { IsTruncated: true, Marker: 'm2' },
            m2: { Policies: list.slice(0, 2), IsTruncated: false },
          }[page],
        );
      }
      case 'GetPolicy':
        return Promise.resolve({
          Policy: { Description: policies[arn].description },
        });
      case 'GetPolicyVersion':
        expect(command.input.VersionId).toBe(policies[arn].version);
        return Promise.resolve({
          PolicyVersion:
            arn === missingDocument ? {} : { Document: policies[arn].document },
        });
    }
    throw new Error(`unexpected ${command.name}`);
  });
}

async function load() {
  vi.resetModules();
  return import('../../lib/generator/managed-policies');
}

describe('indexManagedPolicies', () => {
  let saved: Record<string, string>;

  beforeEach(() => {
    saved = {};
    vi.spyOn(SourceFile.prototype, 'saveSync').mockImplementation(function (
      this: SourceFile,
    ) {
      saved[this.getBaseName()] = this.getFullText();
    });
    vi.spyOn(console, 'log').mockReturnValue();
    vi.stubEnv('AWS_ACCESS_KEY_ID', '');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
    vi.mocked(fs.writeFileSync).mockReset();
    mocks.send.mockReset();
    mocks.config.length = 0;
  });

  it('writes the managed policies, their documents and the index', async () => {
    respond();
    const { indexManagedPolicies } = await load();
    await indexManagedPolicies();

    expect(mocks.config).toEqual([{ region: 'us-east-1' }]);
    const writes = vi
      .mocked(fs.writeFileSync)
      .mock.calls.map(([file, content]) => [
        String(file).replace(/^.*\/docs\//, 'docs/'),
        content,
      ]);
    expect(writes).toEqual([
      [
        'docs/source/_static/managed-policies/AWS-Role_Policy.json',
        '{\n  "Statement": []\n}',
      ],
      [
        'docs/source/_static/managed-policies/ReadOnlyAccess.json',
        JSON.stringify(
          {
            Version: '2012-10-17',
            Statement: [{ Effect: 'Allow', Action: '*:Get*', Resource: '*' }],
          },
          null,
          2,
        ),
      ],
      [
        'docs/source/_static/managed-policies/index.json',
        '["AWS-Role_Policy","ReadOnlyAccess"]',
      ],
    ]);

    expect(saved['iam-floyd.ts']).toBe(
      [
        '/** Provides names of all AWS managed policies. */',
        'export class AwsManagedPolicy {',
        '    /** For a service role */',
        "    public static AWSRolePolicy = 'aws-service-role/AWS-Role_Policy';",
        '    /** Read only */',
        "    public static ReadOnlyAccess = 'ReadOnlyAccess';",
        '}',
        '',
        "type ExcludePrototype<T>  = Exclude<keyof T, 'prototype'>;",
        'export type AwsManagedPolicyName = ExcludePrototype<typeof AwsManagedPolicy>;',
        '',
      ].join('\n'),
    );
    const cdk = saved['cdk-iam-floyd.ts'];
    expect(cdk).toContain(
      "import { aws_iam } from 'aws-cdk-lib';\nimport { AwsManagedPolicy as AwsManagedPolicyStatic } from './iam-floyd';",
    );
    expect(cdk).toContain(
      'export class AwsManagedPolicy extends AwsManagedPolicyStatic {',
    );
    expect(cdk).toContain(
      [
        '    /** Read only */',
        '    public ReadOnlyAccess(): aws_iam.IManagedPolicy {',
        '        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ReadOnlyAccess);',
        '    }',
      ].join('\n'),
    );
    expect(cdk).toContain('public AWSRolePolicy(): aws_iam.IManagedPolicy');
    expect(cdk).toContain('Provides all AWS managed policies.');
  });

  it('uses the credentials of the environment', async () => {
    vi.stubEnv('AWS_ACCESS_KEY_ID', 'id');
    vi.stubEnv('AWS_SECRET_ACCESS_KEY', 'secret');
    vi.stubEnv('AWS_SESSION_TOKEN', 'token');
    await load();
    expect(mocks.config).toEqual([
      {
        region: 'us-east-1',
        credentials: {
          accessKeyId: 'id',
          secretAccessKey: 'secret',
          sessionToken: 'token',
        },
      },
    ]);
  });

  it('logs errors of writing the documents', async () => {
    respond();
    const error = new Error('EACCES');
    vi.mocked(fs.writeFileSync).mockImplementation(() => {
      throw error;
    });
    const log = vi.spyOn(console, 'error').mockReturnValue();
    const { indexManagedPolicies } = await load();
    await indexManagedPolicies();
    expect(log).toHaveBeenCalledTimes(3);
    expect(log).toHaveBeenCalledWith(error);
    expect(Object.keys(saved)).toEqual(['iam-floyd.ts', 'cdk-iam-floyd.ts']);
  });

  it('fails without a policy document', async () => {
    respond('arn:aws:iam::aws:policy/ReadOnlyAccess');
    const { indexManagedPolicies } = await load();
    await expect(indexManagedPolicies()).rejects.toThrow(
      'Could not find policy document for arn:aws:iam::aws:policy/ReadOnlyAccess',
    );
    expect(saved).toEqual({});
  });
});
