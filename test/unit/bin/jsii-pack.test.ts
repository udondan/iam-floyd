import { loadAssemblyFromFile } from '@jsii/spec';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { writeJsii } from '../../../lib/generator/emit/jsii';

const { execFileSync } = vi.hoisted(() => ({
  execFileSync:
    vi.fn<(file: string, args: string[], options: object) => string>(),
}));

vi.mock('child_process', async (importOriginal) => {
  const actual = await importOriginal<typeof import('child_process')>();
  return { ...actual, default: { ...actual, execFileSync }, execFileSync };
});

const repo = process.cwd();
let dir: string;

const assembly = {
  schema: 'jsii/0.10.0',
  name: 'cdk-iam-floyd',
  version: '1.2.3',
  description: 'Fixture',
  license: 'Apache-2.0',
  homepage: 'https://example.com',
  repository: { type: 'git', url: 'https://example.com/repo.git' },
  author: { name: 'Someone', roles: ['author'] },
  jsiiVersion: '5.9.0 (build iam-floyd)',
  fingerprint: '',
  docs: { stability: 'stable' },
  readme: { markdown: '# readme' },
  metadata: { nothing: null, count: 1 },
  types: {
    'cdk-iam-floyd.S3': {
      assembly: 'cdk-iam-floyd',
      fqn: 'cdk-iam-floyd.S3',
      kind: 'class',
      name: 'S3',
      symbolId: 'lib/s3:S3',
      docs: { summary: 'S3.' },
      methods: [
        {
          name: 'toGetObject',
          docs: { summary: 'Get.' },
          parameters: [
            {
              name: 'key',
              type: { primitive: 'string' },
              docs: { summary: 'Key.' },
            },
          ],
        },
      ],
    },
  },
};

function write(file: string, content = '') {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

describe('bin/jsii-pack', () => {
  beforeEach(() => {
    dir = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'jsii-pack-')));
    process.chdir(dir);
    vi.spyOn(console, 'log').mockReturnValue();
  });

  afterEach(() => {
    process.chdir(repo);
    fs.rmSync(dir, { recursive: true });
    vi.restoreAllMocks();
    execFileSync.mockReset();
  });

  it('strips the docs and declarations and packs the package', async () => {
    writeJsii('.', structuredClone(assembly));
    write('lib/index.js', 'exports.x = 1;');
    write('lib/index.d.ts', 'export declare const x = 1;');
    write('lib/shared/deep/all.d.ts', 'export {};');
    write('node_modules/dep/index.d.ts', 'export {};');
    write('README.md', '# readme');
    execFileSync.mockReturnValue('npm notice\ncdk-iam-floyd-1.2.3.tgz\n');

    await import('../../../bin/jsii-pack');

    expect(execFileSync).toHaveBeenCalledWith('npm', ['pack', '--silent'], {
      encoding: 'utf8',
    });
    // jsii-pacmak reads the name of the tarball from the last line
    expect(console.log).toHaveBeenCalledWith('cdk-iam-floyd-1.2.3.tgz');

    expect(fs.existsSync('lib/index.js')).toBe(true);
    expect(fs.existsSync('README.md')).toBe(true);
    expect(fs.existsSync('lib/index.d.ts')).toBe(false);
    expect(fs.existsSync('lib/shared/deep/all.d.ts')).toBe(false);
    expect(fs.existsSync('node_modules/dep/index.d.ts')).toBe(true);

    const stripped = loadAssemblyFromFile('.jsii', false) as unknown as Record<
      string,
      unknown
    >;
    expect(stripped.docs).toBeUndefined();
    expect(stripped.readme).toBeUndefined();
    expect(stripped.metadata).toEqual({ nothing: null, count: 1 });
    expect(stripped.types).toEqual({
      'cdk-iam-floyd.S3': {
        assembly: 'cdk-iam-floyd',
        fqn: 'cdk-iam-floyd.S3',
        kind: 'class',
        name: 'S3',
        symbolId: 'lib/s3:S3',
        methods: [
          {
            name: 'toGetObject',
            parameters: [{ name: 'key', type: { primitive: 'string' } }],
          },
        ],
      },
    });
    // compressed, with a redirect
    expect(fs.existsSync('.jsii.gz')).toBe(true);
    expect(
      (JSON.parse(fs.readFileSync('.jsii', 'utf8')) as { schema: string })
        .schema,
    ).toBe('jsii/file-redirect');
  });
});
