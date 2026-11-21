import * as fs from 'fs';
import { SourceFile } from 'ts-morph';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  emitServicePrincipals,
  indexServicePrincipals,
  readPrincipals,
  servicePrincipalConstantName,
} from '../../lib/generator/service-principals';

interface Command {
  name: string;
  input: { RoleName: string; AssumeRolePolicyDocument?: string };
}

const mocks = vi.hoisted(() => {
  const files: Record<string, string> = {};
  return {
    config: [] as unknown[],
    send: vi.fn<(command: Command) => Promise<unknown>>(),
    requestWithRetry: vi.fn<(url: string) => Promise<string>>(),
    files,
  };
});

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
    CreateRoleCommand: command('CreateRole'),
    DeleteRoleCommand: command('DeleteRole'),
  };
});

vi.mock('../../lib/generator', () => ({
  requestWithRetry: mocks.requestWithRetry,
}));

vi.mock('fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('fs')>();
  const mocked = {
    ...actual,
    readFileSync: vi.fn((file: string) => {
      if (!(file in mocks.files)) {
        throw new Error(`ENOENT: ${file}`);
      }
      return mocks.files[file];
    }),
    readdirSync: vi.fn((dir: string) =>
      Object.keys(mocks.files)
        .filter((file) => file.startsWith(`${dir}/`))
        .map((file) => file.slice(dir.length + 1)),
    ),
    writeFileSync: vi.fn(),
  };
  return { ...mocked, default: mocked };
});

const dataFile = 'lib/generated/aws-service-principals/principals.json';
const policies = 'docs/source/_static/managed-policies';
const gistUrl =
  'https://gist.githubusercontent.com/shortjared/4c1e3fe52bdfa47522cfe5b41e5d6f22/raw';
const servicesUrl =
  'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html';
const docs = 'https://docs.aws.amazon.com/IAM/latest/UserGuide';

function error(name: string, message = name): Error {
  return Object.assign(new Error(message), { name });
}

/**
 * IAM: rejects the principals in `invalid`, naming the first one of the trust policy
 */
function iam(invalid: string[]): { trustPolicies: string[][] } {
  const trustPolicies: string[][] = [];
  mocks.send.mockImplementation((command) => {
    expect(command.input.RoleName).toBe('iam-floyd-service-principal-check');
    if (command.name === 'DeleteRole') {
      return Promise.resolve({});
    }
    const document = command.input.AssumeRolePolicyDocument!;
    expect(document.length).toBeLessThanOrEqual(2000);
    const services = (
      JSON.parse(document) as {
        Statement: { Principal: { Service: string[] } }[];
      }
    ).Statement[0].Principal.Service;
    trustPolicies.push(services);
    const rejected = services.find((service) => invalid.includes(service));
    if (rejected) {
      return Promise.reject(
        error(
          'MalformedPolicyDocumentException',
          `Invalid principal in policy: "SERVICE":"${rejected}"`,
        ),
      );
    }
    return Promise.resolve({});
  });
  return { trustPolicies };
}

function written(): Record<string, unknown> {
  const calls = vi.mocked(fs.writeFileSync).mock.calls;
  expect(calls.map(([file]) => file)).toEqual([dataFile]);
  return JSON.parse(calls[0][1] as string) as Record<string, unknown>;
}

describe('servicePrincipalConstantName', () => {
  it.each([
    ['lambda.amazonaws.com', 'LAMBDA'],
    ['access-grants.s3.amazonaws.com', 'ACCESS_GRANTS_S3'],
    ['ec2.amazonaws.com', 'EC2'],
    ['inspector2a.amazonaws.com', 'INSPECTOR2_A'],
  ])('%s is %s', (principal, name) => {
    expect(servicePrincipalConstantName(principal)).toBe(name);
  });
});

describe('service principals', () => {
  let saved: string[];

  beforeEach(() => {
    saved = [];
    vi.spyOn(SourceFile.prototype, 'saveSync').mockImplementation(function (
      this: SourceFile,
    ) {
      saved.push(this.getFullText());
    });
    vi.spyOn(console, 'log').mockReturnValue();
    vi.stubEnv('AWS_ACCESS_KEY_ID', '');
    for (const file of Object.keys(mocks.files)) {
      delete mocks.files[file];
    }
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
    vi.mocked(fs.writeFileSync).mockReset();
    mocks.send.mockReset();
    mocks.requestWithRetry.mockReset();
    mocks.config.length = 0;
  });

  describe('readPrincipals', () => {
    it('reads the list', () => {
      mocks.files[dataFile] = '{"s3.amazonaws.com": {}}';
      expect(readPrincipals()).toEqual({ 's3.amazonaws.com': {} });
    });
  });

  describe('emitServicePrincipals', () => {
    it('writes the class AwsServicePrincipal', () => {
      mocks.files[dataFile] = JSON.stringify({
        's3.amazonaws.com': {},
        'old.amazonaws.com': { deprecated: 'IAM rejects this.' },
      });
      emitServicePrincipals();
      expect(saved).toEqual([
        [
          '/**',
          ' * Provides the names of AWS service principals, e.g. for `forService(AwsServicePrincipal.LAMBDA)`.',
          ' *',
          ' * The list only grows. A service principal that IAM rejects is deprecated, not removed.',
          ' */',
          'export class AwsServicePrincipal {',
          '    /**',
          '     * The service principal `old.amazonaws.com`',
          '     * @deprecated IAM rejects this.',
          '     */',
          "    public static readonly OLD = 'old.amazonaws.com';",
          '    /** The service principal `s3.amazonaws.com` */',
          "    public static readonly S3 = 's3.amazonaws.com';",
          '}',
          '',
        ].join('\n'),
      ]);
    });

    it('fails on two principals with the same name', () => {
      mocks.files[dataFile] = JSON.stringify({
        'a-b.amazonaws.com': {},
        'a.b.amazonaws.com': {},
      });
      expect(() => emitServicePrincipals()).toThrow(
        'The service principals a-b.amazonaws.com and a.b.amazonaws.com have the same name A_B',
      );
    });

    it('fails on an invalid name', () => {
      mocks.files[dataFile] = JSON.stringify({ '1a.amazonaws.com': {} });
      expect(() => emitServicePrincipals()).toThrow(
        'Invalid name 1_A of service principal 1a.amazonaws.com',
      );
    });
  });

  describe('indexServicePrincipals', () => {
    function sources(gist: string, pages: Record<string, string>) {
      mocks.requestWithRetry.mockImplementation((url) => {
        if (url === gistUrl) {
          return Promise.resolve(gist);
        }
        if (url in pages) {
          return Promise.resolve(pages[url]);
        }
        return Promise.reject(new Error(`404 ${url}`));
      });
    }

    it('collects, checks and writes the service principals', async () => {
      mocks.files[dataFile] = JSON.stringify({
        'known.amazonaws.com': {},
        'gone.amazonaws.com': {},
        'kept.amazonaws.com': { deprecated: 'IAM rejects this.' },
        's3.ap-east-1.amazonaws.com': {},
      });
      mocks.files[`${policies}/index.json`] = '["bad.amazonaws.com"]';
      mocks.files[`${policies}/notes.txt`] = 'bad.amazonaws.com';
      mocks.files[`${policies}/Policy.json`] = JSON.stringify({
        Statement: [
          {
            Condition: {
              StringEquals: {
                'iam:PassedToService': [
                  'policy.amazonaws.com',
                  'invalid.amazonaws.com',
                ],
                'iam:AWSServiceName': 'single.amazonaws.com',
              },
            },
            Resource: 'arn:aws:iam::*:role/x',
            Version: 1,
            Sid: null,
          },
        ],
      });
      sources(
        'gist.amazonaws.com, sqs.eu-west-1.amazonaws.com, arn:aws:s3:::x.amazonaws.com x.amazonaws.com.cn',
        {
          [servicesUrl]: [
            '<table>',
            '<a href="list_slr.html#foo">Yes</a>',
            '<a href="https://other.example/service-linked-roles.html">Yes</a>',
            '<a href="./broken-role.html">Yes</a>',
            '<a href="other.html">Yes</a>',
            '<a href="slr.html">No</a>',
            '<a>Yes</a>',
            '</table>',
          ].join('\n'),
          [`${docs}/list_slr.html`]:
            '<div id="main-col-body">Trusts slr.amazonaws.com</div><p>outside.amazonaws.com</p>',
          'https://other.example/service-linked-roles.html':
            '<body>body.amazonaws.com</body>',
        },
      );
      const { trustPolicies } = iam([
        'gone.amazonaws.com',
        'invalid.amazonaws.com',
      ]);
      const warn = vi.spyOn(console, 'warn').mockReturnValue();

      await indexServicePrincipals();

      expect(warn).toHaveBeenCalledWith(
        `Skipping ${docs}/broken-role.html: Error: 404 ${docs}/broken-role.html`,
      );
      expect(mocks.config).toEqual([{ region: 'us-east-1' }]);
      // the regional principal is not checked, an invalid one is removed before the next try
      expect(trustPolicies).toEqual([
        [
          'body.amazonaws.com',
          'gist.amazonaws.com',
          'gone.amazonaws.com',
          'invalid.amazonaws.com',
          'kept.amazonaws.com',
          'known.amazonaws.com',
          'policy.amazonaws.com',
          'single.amazonaws.com',
          'slr.amazonaws.com',
        ],
        [
          'body.amazonaws.com',
          'gist.amazonaws.com',
          'invalid.amazonaws.com',
          'kept.amazonaws.com',
          'known.amazonaws.com',
          'policy.amazonaws.com',
          'single.amazonaws.com',
          'slr.amazonaws.com',
        ],
        [
          'body.amazonaws.com',
          'gist.amazonaws.com',
          'kept.amazonaws.com',
          'known.amazonaws.com',
          'policy.amazonaws.com',
          'single.amazonaws.com',
          'slr.amazonaws.com',
        ],
      ]);
      expect(written()).toEqual({
        'body.amazonaws.com': {},
        'gist.amazonaws.com': {},
        'gone.amazonaws.com': {
          deprecated: 'IAM rejects this service principal.',
        },
        'kept.amazonaws.com': {},
        'known.amazonaws.com': {},
        'policy.amazonaws.com': {},
        's3.ap-east-1.amazonaws.com': {},
        'single.amazonaws.com': {},
        'slr.amazonaws.com': {},
      });
      expect(console.log).toHaveBeenCalledWith(
        'Deprecating gone.amazonaws.com, which IAM rejects',
      );
      expect(console.log).toHaveBeenCalledWith('Adding gist.amazonaws.com');
      expect(console.log).not.toHaveBeenCalledWith(
        'Adding known.amazonaws.com',
      );
      // the class is written from the list
      expect(saved).toHaveLength(1);
    });

    it('checks the principals in batches that fit into a trust policy', async () => {
      const principals = Array.from(
        { length: 100 },
        (_, i) => `service${String(i).padStart(3, '0')}.amazonaws.com`,
      );
      mocks.files[dataFile] = '{}';
      sources(principals.join('\n'), { [servicesUrl]: '' });
      const { trustPolicies } = iam([]);
      vi.stubEnv('AWS_ACCESS_KEY_ID', 'id');
      vi.stubEnv('AWS_SECRET_ACCESS_KEY', 'secret');
      vi.stubEnv('AWS_SESSION_TOKEN', 'token');

      await indexServicePrincipals();

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
      expect(trustPolicies.length).toBeGreaterThan(1);
      expect(trustPolicies.flat()).toEqual(principals);
      expect(Object.keys(written())).toEqual(principals);
    });

    it('deletes a test role left over from an earlier run', async () => {
      mocks.files[dataFile] = '{"s3.amazonaws.com": {}}';
      sources('', { [servicesUrl]: '' });
      const { trustPolicies } = iam([]);
      mocks.send.mockImplementationOnce(() =>
        Promise.reject(error('EntityAlreadyExistsException')),
      );

      await indexServicePrincipals();

      expect(mocks.send.mock.calls.map(([command]) => command.name)).toEqual([
        'CreateRole',
        'DeleteRole',
        'CreateRole',
        'DeleteRole',
      ]);
      expect(trustPolicies).toEqual([['s3.amazonaws.com']]);
      expect(written()).toEqual({ 's3.amazonaws.com': {} });
    });

    it.each([
      [
        'an error of IAM',
        error('AccessDenied', 'not authorized to perform iam:CreateRole'),
        'not authorized to perform iam:CreateRole',
      ],
      [
        'a malformed policy without the principal',
        error('MalformedPolicyDocumentException', 'Syntax errors in policy'),
        'Syntax errors in policy',
      ],
    ])('fails on %s', async (_name, rejection, message) => {
      mocks.files[dataFile] = '{"s3.amazonaws.com": {}}';
      sources('', { [servicesUrl]: '' });
      mocks.send.mockRejectedValue(rejection);
      await expect(indexServicePrincipals()).rejects.toThrow(message);
      expect(fs.writeFileSync).not.toHaveBeenCalled();
    });

    it('fails on a thrown value that is not an error', async () => {
      mocks.files[dataFile] = '{"s3.amazonaws.com": {}}';
      sources('', { [servicesUrl]: '' });
      mocks.send.mockRejectedValue('throttled');
      await expect(indexServicePrincipals()).rejects.toBe('throttled');
    });
  });
});
