import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as vm from 'vm';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { JsiiOptions } from '../../../lib/generator/emit/jsii';
import { ServiceModel } from '../../../lib/generator/model';

const { emitJsii } = vi.hoisted(() => ({
  emitJsii:
    vi.fn<
      (
        models: ServiceModel[],
        options: JsiiOptions,
      ) => { name: string; types: number; bytes: number }
    >(),
}));

vi.mock('../../../lib/generator/emit/jsii', async (importOriginal) => ({
  ...(await importOriginal<
    typeof import('../../../lib/generator/emit/jsii')
  >()),
  emitJsii,
}));

const repo = process.cwd();
const readmeSource = fs.readFileSync(path.join(repo, 'README.md'), 'utf8');

/**
 * A valid assembly with a class in the root, one in the Statement namespace and an enum
 */
function assembly(version: string): Record<string, unknown> {
  const type = (fqn: string, kind: 'class' | 'enum') => ({
    assembly: 'cdk-iam-floyd',
    fqn,
    kind,
    name: fqn.split('.').pop(),
    symbolId: `lib/index:${fqn.split('.').pop()}`,
    ...(kind == 'enum' ? { members: [{ name: 'A' }] } : {}),
  });
  return {
    schema: 'jsii/0.10.0',
    name: 'cdk-iam-floyd',
    version,
    description: 'Fixture',
    license: 'Apache-2.0',
    homepage: 'https://example.com',
    repository: { type: 'git', url: 'https://example.com/repo.git' },
    author: { name: 'Someone', roles: ['author'] },
    jsiiVersion: '5.9.0 (build iam-floyd)',
    fingerprint: '',
    types: {
      'cdk-iam-floyd.PolicyStatement': type(
        'cdk-iam-floyd.PolicyStatement',
        'class',
      ),
      'cdk-iam-floyd.Statement.S3': type('cdk-iam-floyd.Statement.S3', 'class'),
      'cdk-iam-floyd.AccessLevel': type('cdk-iam-floyd.AccessLevel', 'enum'),
    },
  };
}

let dir: string;

function writePackage(packageJson: object, indexJs = 'exports.x = 1;\n') {
  fs.writeFileSync('package.json', JSON.stringify(packageJson));
  fs.writeFileSync('README.md', readmeSource);
  fs.mkdirSync('lib/generated/model', { recursive: true });
  fs.writeFileSync('lib/index.js', indexJs);
  fs.writeFileSync(
    'lib/generated/model/s3.json',
    JSON.stringify({ className: 'S3' }),
  );
  fs.writeFileSync(
    'lib/generated/model/ec2.json',
    JSON.stringify({ className: 'Ec2' }),
  );
  fs.writeFileSync('lib/generated/model/notes.txt', 'not a model');
}

async function run() {
  vi.resetModules();
  await import('../../../bin/jsii');
}

describe('bin/jsii', () => {
  beforeEach(async () => {
    dir = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'jsii-bin-')));
    process.chdir(dir);
    vi.spyOn(console, 'log').mockReturnValue();
    const { writeJsii } = await vi.importActual<
      typeof import('../../../lib/generator/emit/jsii')
    >('../../../lib/generator/emit/jsii');
    emitJsii.mockImplementation((models, options) => {
      const bytes = writeJsii(options.outDir, assembly(options.version));
      return { name: 'cdk-iam-floyd', types: models.length, bytes };
    });
  });

  afterEach(() => {
    process.chdir(repo);
    fs.rmSync(dir, { recursive: true });
    vi.restoreAllMocks();
    emitJsii.mockReset();
  });

  it('sets the targets, writes the assembly and appends the RTTI', async () => {
    writePackage({ name: 'cdk-iam-floyd', version: '1.2.3', other: true });
    await run();

    const packageJson = JSON.parse(
      fs.readFileSync('package.json', 'utf8'),
    ) as Record<string, unknown>;
    expect(packageJson).toEqual({
      name: 'cdk-iam-floyd',
      version: '1.2.3',
      other: true,
      jsii: {
        outdir: 'dist',
        targets: {
          python: { distName: 'cdk-iam-floyd', module: 'cdk_iam_floyd' },
          dotnet: { namespace: 'CDK.IAM.Floyd', packageId: 'CDK.IAM.Floyd' },
          java: {
            package: 'com.udondan.iamFloyd.cdk',
            maven: { groupId: 'com.udondan', artifactId: 'cdk-iam-floyd' },
          },
          go: {
            moduleName: 'udondan.github.io/iam-floyd/go',
            packageName: 'cdkiamfloyd',
          },
        },
      },
    });
    expect(fs.readFileSync('package.json', 'utf8')).toMatch(/\n {2}"name"/);
    expect(fs.readFileSync('package.json', 'utf8')).toMatch(/}\n$/);

    // the models, sorted by file name, without other files
    expect(emitJsii).toHaveBeenCalledTimes(1);
    const [models, options] = emitJsii.mock.calls[0];
    expect(models.map((m) => m.className)).toEqual(['Ec2', 'S3']);
    expect(options).toMatchObject({
      variant: 'cdk',
      version: '1.2.3',
      outDir: '.',
    });
    // the README with the example in TypeScript, for cdk-iam-floyd
    expect(options.readme).toContain('cdk-iam-floyd');
    expect(options.readme).not.toContain('<!-- language: python -->');

    expect(console.log).toHaveBeenCalledWith(
      expect.stringMatching(
        /^Wrote \.jsii for cdk-iam-floyd@1\.2\.3: 2 types, \d+ bytes$/,
      ),
    );
    expect(console.log).toHaveBeenCalledWith(
      'Appended RTTI for 2 classes to lib/index.js',
    );

    // the appended code sets the RTTI on the exported classes
    const index = fs.readFileSync('lib/index.js', 'utf8');
    expect(index.startsWith('exports.x = 1;\n')).toBe(true);
    class PolicyStatement {}
    class S3 {}
    const exports = { PolicyStatement, Statement: { S3 } };
    vm.runInNewContext(index, { exports, Symbol, Object });
    const rtti = Symbol.for('jsii.rtti');
    expect((S3 as unknown as Record<symbol, unknown>)[rtti]).toEqual({
      fqn: 'cdk-iam-floyd.Statement.S3',
      version: '1.2.3',
    });
    expect(
      (PolicyStatement as unknown as Record<symbol, unknown>)[rtti],
    ).toEqual({ fqn: 'cdk-iam-floyd.PolicyStatement', version: '1.2.3' });
  });

  it('appends no RTTI for an assembly without types', async () => {
    const { writeJsii } = await vi.importActual<
      typeof import('../../../lib/generator/emit/jsii')
    >('../../../lib/generator/emit/jsii');
    emitJsii.mockImplementation((_models, options) => {
      const { types: _types, ...empty } = assembly(options.version);
      return { name: 'cdk-iam-floyd', types: 0, bytes: writeJsii('.', empty) };
    });
    writePackage({ name: 'cdk-iam-floyd', version: '1.2.3' });
    await run();
    expect(console.log).toHaveBeenCalledWith(
      'Appended RTTI for 0 classes to lib/index.js',
    );
    expect(fs.readFileSync('lib/index.js', 'utf8')).toContain(
      'for (const [path, fqn] of []) {',
    );
  });

  it('fails if lib/index.js has the RTTI already', async () => {
    writePackage(
      { name: 'cdk-iam-floyd', version: '1.2.3' },
      'const JSII_RTTI = 1;\n',
    );
    await expect(run()).rejects.toThrow(
      'lib/index.js already has RTTI, run `make build` first',
    );
    expect(fs.readFileSync('lib/index.js', 'utf8')).toBe(
      'const JSII_RTTI = 1;\n',
    );
  });

  it('fails in the standalone variant', async () => {
    writePackage({ name: 'iam-floyd', version: '1.2.3' });
    const error = vi.spyOn(console, 'error').mockReturnValue();
    vi.spyOn(process, 'exit').mockImplementation((code) => {
      throw new Error(`exit ${code}`);
    });
    await expect(run()).rejects.toThrow('exit 1');
    expect(error).toHaveBeenCalledWith('Run `make cdk` first');
    expect(emitJsii).not.toHaveBeenCalled();
    expect(
      JSON.parse(fs.readFileSync('package.json', 'utf8')) as object,
    ).not.toHaveProperty('jsii');
  });
});
