import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  MockInstance,
  vi,
} from 'vitest';

import {
  createModule,
  createModules,
  getAwsServices,
  getContent,
  Module,
  modelDir,
  requestWithRetry,
} from '../../lib/generator';
import type { ServiceModel } from '../../lib/generator/model';

/**
 * The model directory `lib/generated/model` is redirected into a temporary directory, so the tests
 * never write into the repository
 */
const state = vi.hoisted(() => ({ root: '' }));

vi.mock('fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('fs')>();
  const model = 'lib/generated/model';
  const map = (p: fs.PathLike): fs.PathLike =>
    state.root && typeof p === 'string' && p.startsWith(model)
      ? `${state.root}${p.slice(model.length)}`
      : p;
  const mocked = {
    existsSync: (p: fs.PathLike) => actual.existsSync(map(p)),
    mkdirSync: (p: fs.PathLike, options?: fs.MakeDirectoryOptions) =>
      actual.mkdirSync(map(p), options),
    renameSync: (from: fs.PathLike, to: fs.PathLike) => {
      actual.renameSync(map(from), map(to));
    },
    writeFileSync: (p: fs.PathLike, data: string) => {
      actual.writeFileSync(map(p), data);
    },
  };
  return { ...actual, ...mocked, default: { ...actual, ...mocked } };
});

vi.mock('glob', async (importOriginal) => {
  const actual = await importOriginal<typeof import('glob')>();
  const model = 'lib/generated/model';
  const sync = (pattern: string): string[] =>
    actual
      .sync(`${state.root}${pattern.slice(model.length)}`)
      .map((file) => `${model}${file.slice(state.root.length)}`);
  return { ...actual, sync };
});

const servicesUrl =
  'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html';
const referenceUrl =
  'https://docs.aws.amazon.com/service-authorization/latest/reference';

const fixtures = path.join(__dirname, 'fixtures', 'generator');
const servicesPage = fs.readFileSync(
  path.join(fixtures, 'services.html'),
  'utf8',
);
const secretsManagerPage = fs.readFileSync(
  path.join(fixtures, 'list_secretsmanager.html'),
  'utf8',
);

/**
 * A page of a service with only a single action, without tables of resource types and condition keys
 */
function minimalPage(prefix: string, action = 'DoSomething'): string {
  return `<html><body><p>(service prefix: <code class="code">${prefix}</code>)</p>
<div class="table-container"><table>
<tr><th>Actions</th></tr>
<tr><td><a href="https://example.com/${action}">${action}</a></td><td>Grants permission to do something</td><td></td><td></td><td>Write</td></tr>
</table></div></body></html>`;
}

/**
 * Stubs `fetch` and serves the pages by their filename. Unknown pages are 404.
 */
function serve(
  pages: Record<string, string>,
  lastModified?: Date,
): ReturnType<typeof vi.fn<typeof fetch>> {
  const mock = vi.fn<typeof fetch>((input, init) => {
    const url = input as string;
    const body = pages[url.split('/').pop()!];
    if (typeof body === 'undefined') {
      return Promise.resolve(new Response('Not found', { status: 404 }));
    }
    const headers = new Headers();
    if (lastModified) {
      headers.set('last-modified', lastModified.toUTCString());
    }
    return Promise.resolve(
      new Response(init?.method === 'HEAD' ? null : body, { headers }),
    );
  });
  vi.stubGlobal('fetch', mock);
  return mock;
}

function modelFile(name: string): string {
  return path.join(state.root, `${name}.json`);
}

function cacheFile(name: string): string {
  return path.join(state.root, '.cache', `${name}.json`);
}

function readModel(name: string): ServiceModel {
  return JSON.parse(fs.readFileSync(modelFile(name), 'utf8')) as ServiceModel;
}

const hoursAgo = (hours: number) => new Date(Date.now() - hours * 3600 * 1000);

let log: MockInstance<typeof console.log>;
let warn: MockInstance<typeof console.warn>;
let error: MockInstance<typeof console.error>;
let write: MockInstance<typeof process.stdout.write>;

beforeEach(() => {
  state.root = fs.mkdtempSync(path.join(os.tmpdir(), 'iam-floyd-scraper-'));
  log = vi.spyOn(console, 'log').mockReturnValue();
  warn = vi.spyOn(console, 'warn').mockReturnValue();
  error = vi.spyOn(console, 'error').mockReturnValue();
  write = vi.spyOn(process.stdout, 'write').mockReturnValue(true);
});

afterEach(() => {
  fs.rmSync(state.root, { recursive: true, force: true });
  state.root = '';
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.useRealTimers();
});

describe('getAwsServices', () => {
  it('returns the unique, sorted services without the ignored ones', async () => {
    const fetch = serve({
      'reference_policies_actions-resources-contextkeys.html': servicesPage,
    });
    expect(await getAwsServices()).toEqual([
      'aws-external-anthropic',
      'cloudcontrol',
      's3',
      'secretsmanager',
    ]);
    expect(fetch).toHaveBeenCalledWith(servicesUrl, {
      method: 'GET',
      headers: {
        'User-Agent': expect.stringContaining('Mozilla/5.0') as string,
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });
  });

  it('returns only the service of the environment variable SERVICE', async () => {
    serve({
      'reference_policies_actions-resources-contextkeys.html': servicesPage,
    });
    vi.stubEnv('SERVICE', 'ec2');
    expect(await getAwsServices()).toEqual(['ec2']);
  });

  it('fails if the page lists no services', async () => {
    serve({
      'reference_policies_actions-resources-contextkeys.html':
        '<html><body>Moved</body></html>',
    });
    await expect(getAwsServices()).rejects.toThrow(
      `Unable to find services on ${servicesUrl}`,
    );
  });
});

describe('getContent', () => {
  it('parses conditions, actions and resource types of the page', async () => {
    const fetch = serve({ 'list_secretsmanager.html': secretsManagerPage });
    const module = await getContent('secretsmanager');

    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch.mock.calls[0][0]).toBe(
      `${referenceUrl}/list_secretsmanager.html`,
    );
    expect(module.filename).toBe('secretsmanager');
    expect(module.name).toBe('secretsmanager');
    expect(module.servicePrefix).toBe('secretsmanager');
    expect(module.url).toBe(`${referenceUrl}/list_secretsmanager.html`);
    expect(module.fixes?.conditions?.['RequestTag/tag-key']).toEqual({
      key: 'RequestTag/${TagKey}',
    });

    expect(module.actionList).toEqual({
      BatchGetSecretValue: {
        url: 'https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_BatchGetSecretValue.html',
        description:
          'Grants permission to retrieve and decrypt a list of secrets',
        accessLevel: 'Read',
      },
      CancelRotateSecret: {
        url: 'https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CancelRotateSecret.html',
        description:
          'Grants permission to cancel an in-progress secret rotation',
        accessLevel: 'Write',
        resourceTypes: {
          Secret: {
            required: true,
            conditions: [
              'aws:RequestTag/${TagKey}',
              'secretsmanager:ResourceTag/${TagKey}',
              'secretsmanager:SecretId',
            ],
          },
        },
      },
      PutResourcePolicy: {
        url: 'https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_PutResourcePolicy.html',
        description:
          'Grants permission to attach a resource policy to a secret',
        accessLevel: 'Permissions management, Write',
        resourceTypes: {
          Secret: {
            required: true,
            conditions: ['aws:RequestTag/${TagKey}', 'secretsmanager:SecretId'],
          },
        },
        conditions: ['secretsmanager:BlockPublicPolicy'],
      },
      GetRandomPassword: {
        url: '',
        description:
          'Grants permission to generate a random string for use in password creation',
        accessLevel: 'Read',
      },
      ListSecrets: {
        url: '',
        description:
          'Grants permission to list the available secrets, filtered by Name',
        accessLevel: 'List',
        conditions: ['secretsmanager:Name'],
      },
      ValidateResourcePolicy: {
        url: 'https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ValidateResourcePolicy.html',
        description: 'Grants permission to validate a resource policy',
        accessLevel: 'Permissions management',
        resourceTypes: {
          Secret: { required: false },
          ResourcePolicy: {
            required: false,
            conditions: ['secretsmanager:BlockPublicPolicy'],
          },
        },
      },
    });

    expect(module.resourceTypes).toEqual({
      Secret: {
        name: 'Secret',
        url: 'https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html#awssecretsmanager-resources-for-iam-policies',
        arn: 'arn:${Partition}:secretsmanager:${Region}:${Account}:secret:${SecretId}',
        conditionKeys: [
          'aws:RequestTag/${TagKey}',
          'secretsmanager:ResourceTag/${TagKey}',
        ],
      },
    });

    expect(module.conditions).toEqual({
      'aws:RequestTag/${TagKey}': {
        key: 'aws:RequestTag/${TagKey}',
        description:
          'Filters access by a key that is present in the request the user makes to the Secrets Manager service',
        type: 'String',
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag',
        isGlobal: true,
        relatedActions: ['CancelRotateSecret', 'PutResourcePolicy'],
        relatedResourceTypes: ['Secret', ''],
      },
      'secretsmanager:BlockPublicPolicy': {
        key: 'secretsmanager:BlockPublicPolicy',
        description:
          'Filters access by whether the resource policy blocks broad AWS account access',
        type: 'boolean',
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html',
        isGlobal: false,
        relatedActions: ['PutResourcePolicy', 'ValidateResourcePolicy'],
      },
      'secretsmanager:Name': {
        key: 'secretsmanager:Name',
        description:
          'Filters access by the friendly name of the secret that is created',
        type: 'String',
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html',
        isGlobal: false,
        relatedActions: ['ListSecrets'],
      },
      'secretsmanager:ResourceTag/${TagKey}': {
        key: 'secretsmanager:ResourceTag/${TagKey}',
        description: 'Filters access by a tag key and value pair',
        type: 'String',
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html',
        isGlobal: false,
        relatedActions: ['CancelRotateSecret'],
        relatedResourceTypes: ['Secret'],
      },
      'secretsmanager:SecretId': {
        key: 'secretsmanager:SecretId',
        description: 'Filters access by the secret ARN in the request',
        type: 'ARN',
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html',
        isGlobal: false,
        relatedActions: ['CancelRotateSecret', 'PutResourcePolicy'],
      },
    });
  });

  it('reports undocumented condition keys, invalid URLs and unexpected rows', async () => {
    serve({ 'list_secretsmanager.html': secretsManagerPage });
    await getContent('secretsmanager');

    expect(log).toHaveBeenCalledWith(
      expect.stringContaining(
        '[Skipping referenced condition, since it is not documented: secretsmanager:NotDocumented]',
      ),
    );
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('Removed invalid URL API_GetRandomPassword.html'),
    );
    const skipped = warn.mock.calls
      .map(([message]) => String(message))
      .filter((message) => message.includes('skipping row'));
    // neither the scenario nor the empty row
    expect(skipped).toEqual([
      expect.stringContaining(
        'skipping row due to unexpected number of fields: Unexpectedrowhere',
      ),
    ]);
    expect(error).not.toHaveBeenCalled();
    expect(write).toHaveBeenCalledWith(
      expect.stringContaining('secretsmanager: '),
    );
  });

  it('reports a page without service prefix', async () => {
    serve({ 'list_unknown.html': '<html><body>No prefix</body></html>' });
    const module = await getContent('unknown');
    expect(error).toHaveBeenCalledWith(
      expect.stringContaining(
        `PREFIX NOT FOUND FOR unknown / ${referenceUrl}/list_unknown.html`,
      ),
    );
    expect(module).toMatchObject({
      name: '',
      servicePrefix: '',
      actionList: {},
      resourceTypes: {},
      conditions: {},
    });
    expect(module.fixes).toBeUndefined();
  });

  it('names the file after the fixes and without amazon/aws prefix', async () => {
    serve({
      'list_aws-external-anthropic.html': minimalPage('aws-external-anthropic'),
      'list_amazonfoo.bar.html': minimalPage('foo'),
    });
    const anthropic = await getContent('aws-external-anthropic');
    expect(anthropic.filename).toBe('anthropic');
    expect(anthropic.fixes).toEqual({ name: 'anthropic' });
    // only the first invalid character is replaced
    expect((await getContent('amazonfoo.bar')).filename).toBe('foo-bar');
  });

  it('fetches a cached service which was modified within 25 hours', async () => {
    fs.mkdirSync(path.join(state.root, '.cache'));
    fs.writeFileSync(cacheFile('secretsmanager'), '{}');
    const fetch = serve(
      { 'list_secretsmanager.html': secretsManagerPage },
      hoursAgo(24),
    );
    const module = await getContent('secretsmanager');
    expect(fetch.mock.calls.map(([, init]) => init?.method)).toEqual([
      'HEAD',
      'GET',
    ]);
    expect(module.name).toBe('secretsmanager');
  });

  it('fetches a cached service if the page has no last-modified header', async () => {
    fs.mkdirSync(path.join(state.root, '.cache'));
    fs.writeFileSync(cacheFile('secretsmanager'), '{}');
    const fetch = serve({ 'list_secretsmanager.html': secretsManagerPage });
    expect((await getContent('secretsmanager')).name).toBe('secretsmanager');
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it('skips a cached service which was not modified within 25 hours', async () => {
    fs.mkdirSync(path.join(state.root, '.cache'));
    fs.writeFileSync(cacheFile('secretsmanager'), '{}');
    const lastModified = hoursAgo(26);
    const fetch = serve(
      { 'list_secretsmanager.html': secretsManagerPage },
      lastModified,
    );
    const module = await getContent('secretsmanager');
    expect(fetch).toHaveBeenCalledOnce();
    expect(module).toEqual({ filename: 'secretsmanager' });
    expect(log).toHaveBeenCalledWith(
      expect.stringContaining(
        `Skipping, last modified on ${new Date(lastModified.toUTCString()).toString()}`,
      ),
    );
  });

  it('ignores the cache with the environment variable NOCACHE', async () => {
    vi.stubEnv('NOCACHE', '1');
    vi.resetModules();
    const generator = await import('../../lib/generator');
    fs.mkdirSync(path.join(state.root, '.cache'));
    fs.writeFileSync(cacheFile('secretsmanager'), '{}');
    const fetch = serve(
      { 'list_secretsmanager.html': secretsManagerPage },
      new Date('2000-01-01T00:00:00Z'),
    );
    expect((await generator.getContent('secretsmanager')).name).toBe(
      'secretsmanager',
    );
    expect(fetch).toHaveBeenCalledTimes(2);
  });
});

describe('createModule', () => {
  function module(filename: string, name: string, fixes?: Module['fixes']) {
    const result: Module = {
      filename,
      name,
      servicePrefix: 'foo',
      url: `${referenceUrl}/list_foo.html`,
      actionList: {},
      resourceTypes: {},
      conditions: {},
    };
    if (fixes) {
      result.fixes = fixes;
    }
    return result;
  }

  it('writes the model of the service', () => {
    createModule(module('foo', 'foo'));
    expect(fs.readFileSync(modelFile('foo'), 'utf8')).toBe(
      `${JSON.stringify(
        {
          schemaVersion: 1,
          filename: 'foo',
          className: 'Foo',
          name: 'foo',
          servicePrefix: 'foo',
          url: `${referenceUrl}/list_foo.html`,
          accessLevelList: {},
          actions: [],
          resources: [],
          conditions: [],
        },
        null,
        2,
      )}\n`,
    );
    expect(log).toHaveBeenCalledWith(expect.stringContaining('Done'));
  });

  it('names the service after the fixes', () => {
    createModule(
      module('billing-portal', 'aws-portal', { name: 'billing-portal' }),
    );
    expect(readModel('billing-portal')).toMatchObject({
      name: 'billing-portal',
      className: 'BillingPortal',
    });
  });

  it('appends -v2 to the name of a v2 service', () => {
    createModule(module('foov2', 'foo'));
    expect(readModel('foov2').name).toBe('foo-v2');
    createModule(module('barv2', 'barV2'));
    expect(readModel('barv2').name).toBe('barV2');
  });

  it('restores a skipped service from the cache', () => {
    fs.mkdirSync(path.join(state.root, '.cache'));
    fs.writeFileSync(cacheFile('foo'), '{"cached":true}');
    createModule({ filename: 'foo' });
    expect(fs.readFileSync(modelFile('foo'), 'utf8')).toBe('{"cached":true}');
    expect(fs.existsSync(cacheFile('foo'))).toBe(false);
  });

  it('restores nothing if the skipped service is not in the cache', () => {
    createModule({ filename: 'foo' });
    expect(fs.existsSync(modelFile('foo'))).toBe(false);
  });
});

describe('createModules', () => {
  it('moves the models into the cache and writes the models of the services', async () => {
    expect(modelDir).toBe('lib/generated/model');
    fs.writeFileSync(modelFile('secretsmanager'), '{"old":true}');
    fs.writeFileSync(modelFile('foo'), '{"old":true}');
    serve(
      {
        'list_secretsmanager.html': secretsManagerPage,
        'list_foo.html': minimalPage('foo'),
      },
      hoursAgo(1),
    );
    await createModules(['secretsmanager']);

    expect(fs.readFileSync(cacheFile('foo'), 'utf8')).toBe('{"old":true}');
    expect(fs.existsSync(modelFile('foo'))).toBe(false);
    const model = readModel('secretsmanager');
    expect(model.className).toBe('Secretsmanager');
    expect(model.actions.map((action) => action.methodName)).toEqual([
      'toBatchGetSecretValue',
      'toCancelRotateSecret',
      'toPutResourcePolicy',
      'toGetRandomPassword',
      'toListSecrets',
      'toValidateResourcePolicy',
    ]);
    expect(model.resources.map((resource) => resource.methodName)).toEqual([
      'onSecret',
    ]);

    // a second run with the cache directory in place: unchanged services are restored from it
    serve({ 'list_secretsmanager.html': secretsManagerPage }, hoursAgo(48));
    await createModules(['secretsmanager']);
    expect(readModel('secretsmanager').className).toBe('Secretsmanager');
    expect(fs.readdirSync(path.join(state.root, '.cache')).sort()).toEqual([
      'foo.json',
    ]);
  });
});

describe('requestWithRetry', () => {
  it('returns the body of the page', async () => {
    serve({ 'page.html': 'content' });
    expect(await requestWithRetry('https://example.com/page.html')).toBe(
      'content',
    );
  });

  it('retries a failed request with backoff', async () => {
    vi.useFakeTimers();
    const fetch = vi
      .fn<typeof globalThis.fetch>()
      .mockResolvedValueOnce(new Response('', { status: 503 }))
      .mockRejectedValueOnce(new Error('socket hang up'))
      .mockResolvedValueOnce(new Response('content'));
    vi.stubGlobal('fetch', fetch);
    const result = requestWithRetry('https://example.com/page.html');
    await vi.runAllTimersAsync();
    expect(await result).toBe('content');
    expect(fetch).toHaveBeenCalledTimes(3);
    expect(log.mock.calls).toEqual([
      [
        'Failed to fetch https://example.com/page.html - Request to https://example.com/page.html failed with status 503 - Retry in 300',
      ],
      [
        'Failed to fetch https://example.com/page.html - socket hang up - Retry in 600',
      ],
    ]);
  });

  it('gives up after three retries', async () => {
    vi.useFakeTimers();
    const fetch = vi
      .fn<typeof globalThis.fetch>()
      // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
      .mockImplementation(() => Promise.reject('ECONNRESET'));
    vi.stubGlobal('fetch', fetch);
    const result = requestWithRetry('https://example.com/page.html');
    const assertion = expect(result).rejects.toThrow(new Error('ECONNRESET'));
    await vi.runAllTimersAsync();
    await assertion;
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(log.mock.calls.map(([message]) => String(message))).toEqual([
      'Failed to fetch https://example.com/page.html - ECONNRESET - Retry in 300',
      'Failed to fetch https://example.com/page.html - ECONNRESET - Retry in 600',
      'Failed to fetch https://example.com/page.html - ECONNRESET - Retry in 1200',
      'Failed to fetch https://example.com/page.html - ECONNRESET - Giving up',
    ]);
  });
});
