import * as fs from 'fs';
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

import { cdkMinVersion } from '../../../lib/generator/cdk-refs';

const mocks = vi.hoisted(() => ({
  /**
   * Contents of source files the Project reads in place of the file in the repository
   */
  overrides: new Map<string, string>(),
  /**
   * The source files the Project would have saved, by path
   */
  saved: new Map<string, string>(),
  extraEntries: [] as string[],
  unlinkSync: vi.fn<(file: string) => void>(),
  renameSync: vi.fn<(src: string, dest: string) => void>(),
  writeFileSync: vi.fn<(file: string, data: string) => void>(),
  emitTypeScriptFromModels: vi.fn<(options: object) => Promise<void>>(),
  emitServicePrincipals: vi.fn<() => void>(),
}));

// mkcdk swaps and rewrites files in the repository: nothing is written for real
vi.mock('fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('fs')>();
  const readdirSync = ((dir: string) => [
    ...actual.readdirSync(dir),
    ...mocks.extraEntries,
  ]) as typeof fs.readdirSync;
  const overridden = {
    readdirSync,
    unlinkSync: mocks.unlinkSync,
    renameSync: mocks.renameSync,
    writeFileSync: mocks.writeFileSync,
  };
  return {
    ...actual,
    ...overridden,
    default: { ...actual, ...overridden },
  };
});

vi.mock('ts-morph', async (importOriginal) => {
  const actual = await importOriginal<typeof import('ts-morph')>();
  class Project extends actual.Project {
    addSourceFileAtPath(file: string) {
      const content = mocks.overrides.get(path.resolve(file));
      if (content === undefined) return super.addSourceFileAtPath(file);
      return this.createSourceFile(file, content, { overwrite: true });
    }
    save() {
      for (const file of this.getSourceFiles()) {
        mocks.saved.set(file.getFilePath(), file.getFullText());
      }
      return Promise.resolve();
    }
  }
  return { ...actual, Project };
});

vi.mock('../../../lib/generator/emit/typescript', () => ({
  emitTypeScriptFromModels: mocks.emitTypeScriptFromModels,
}));

vi.mock('../../../lib/generator/service-principals', () => ({
  emitServicePrincipals: mocks.emitServicePrincipals,
}));

const repo = process.cwd();
const lib = path.join(repo, 'lib');
const statementDir = path.join(lib, 'shared/policy-statement');
const argv = process.argv;

let log: MockInstance<typeof console.log>;

async function run(...args: string[]) {
  process.argv = ['node', 'bin/mkcdk.ts', ...args];
  vi.resetModules();
  await import('../../../bin/mkcdk');
  await vi.waitFor(() => expect(log).toHaveBeenCalledWith('done'));
}

const saved = (file: string) => {
  const text = mocks.saved.get(path.join(lib, file));
  if (text === undefined) throw new Error(`${file} not saved`);
  return text;
};

/**
 * The swapped files as they would be after `swapFiles`, which the mocked fs doesn't do
 */
function simulateSwap() {
  for (const file of fs.readdirSync(statementDir)) {
    if (!file.endsWith('.CDK.ts')) continue;
    mocks.overrides.set(
      path.join(statementDir, file.replace('.CDK.ts', '.ts')),
      fs.readFileSync(path.join(statementDir, file), 'utf8'),
    );
  }
}

describe('bin/mkcdk', () => {
  beforeEach(() => {
    log = vi.spyOn(console, 'log').mockReturnValue();
    mocks.emitTypeScriptFromModels.mockResolvedValue();
  });

  afterEach(() => {
    process.argv = argv;
    vi.restoreAllMocks();
    mocks.overrides.clear();
    mocks.saved.clear();
    mocks.extraEntries = [];
    mocks.unlinkSync.mockReset();
    mocks.renameSync.mockReset();
    mocks.writeFileSync.mockReset();
    mocks.emitTypeScriptFromModels.mockReset();
    mocks.emitServicePrincipals.mockReset();
  });

  it('transforms the package into the CDK variant', async () => {
    simulateSwap();
    // declarations of a build are not transformed
    mocks.extraEntries = ['built.d.ts'];
    await run();

    // the *.CDK.ts files replace the standalone files
    const swapped = [
      ...fs
        .readdirSync(statementDir)
        .filter((f) => f.endsWith('.CDK.ts'))
        .map((f) => path.join(statementDir, f)),
      path.join(lib, 'shared/policy/1-base.CDK.ts'),
    ];
    expect(mocks.renameSync.mock.calls).toEqual(
      swapped.map((src) => [src, src.replace('.CDK.ts', '.ts')]),
    );
    expect(mocks.unlinkSync.mock.calls).toEqual(
      swapped.map((src) => [src.replace('.CDK.ts', '.ts')]),
    );
    expect(log).toHaveBeenCalledWith(
      `Going to replace ${statementDir}/10-final.ts with ${statementDir}/10-final.CDK.ts`,
    );

    // package.json of cdk-iam-floyd
    expect(mocks.writeFileSync).toHaveBeenCalledTimes(1);
    const [file, data] = mocks.writeFileSync.mock.calls[0];
    expect(file).toBe(path.join(repo, 'package.json'));
    const original = JSON.parse(
      fs.readFileSync('package.json', 'utf8'),
    ) as Record<string, unknown> & {
      description: string;
      keywords: string[];
      devDependencies: Record<string, string>;
    };
    expect(JSON.parse(data)).toEqual({
      ...original,
      name: 'cdk-iam-floyd',
      description: `${original.description} for AWS CDK`,
      keywords: [...original.keywords, 'cdk', 'aws-cdk'],
      devDependencies: { ...original.devDependencies, constructs: '^10.0.0' },
      peerDependencies: {
        'aws-cdk-lib': `^${cdkMinVersion()}`,
        constructs: `^${cdkMinVersion('constructs')}`,
      },
    });

    // 8-principals extends the CDK defaults
    const principals = saved('shared/policy-statement/8-principals.ts');
    expect(principals).toContain(
      "import { PolicyStatementWithArnDefaultsForCdk } from './7-arn-defaults-CDK';",
    );
    expect(principals).toContain(
      'class PolicyStatementWithPrincipal extends PolicyStatementWithArnDefaultsForCdk',
    );
    // classes with freeze() import aws_iam
    expect(saved('shared/policy-statement/10-final.ts')).toContain(
      'import { aws_iam as _iam } from "aws-cdk-lib";',
    );
    expect(saved('shared/policy-statement/2-conditions.ts')).not.toContain(
      'aws-cdk-lib',
    );
    expect(log).toHaveBeenCalledWith('Importing aws_iam');
    expect(log).toHaveBeenCalledWith(
      'CHECKING CLASS NAME: PolicyStatementWithPrincipal',
    );
    expect([...mocks.saved.keys()].some((f) => f.endsWith('built.d.ts'))).toBe(
      false,
    );

    // All takes the props of the CDK statement
    const all = saved('shared/all.ts');
    expect(all).toContain('import { aws_iam as iam } from "aws-cdk-lib";');
    // the description of the constructor is kept, without the @param of the sid
    expect(all).toContain(`  /**
   * Action provider for all services.
   *
   * Use this provider to globally allow/deny actions, based on global conditions.
   *
   */
  constructor(props?: iam.PolicyStatementProps) {
    super(props);
  }`);
    expect(all).not.toContain('sid?: string');

    expect(saved('generated/aws-managed-policies/index.ts')).toContain(
      "export { AwsManagedPolicy } from './cdk-iam-floyd';",
    );

    expect(mocks.emitTypeScriptFromModels).toHaveBeenCalledWith({ cdk: true });
    expect(mocks.emitServicePrincipals).toHaveBeenCalledTimes(1);
    expect(log).toHaveBeenCalledWith(
      'Emitting CDK variant of the statement providers',
    );
  });

  it('runs only the given steps', async () => {
    await run('--swap');
    expect(mocks.renameSync).toHaveBeenCalled();
    expect(mocks.writeFileSync).not.toHaveBeenCalled();
    expect(mocks.saved.size).toBe(0);
    expect(mocks.emitTypeScriptFromModels).not.toHaveBeenCalled();
    expect(mocks.emitServicePrincipals).not.toHaveBeenCalled();
  });

  it('runs all steps that are given', async () => {
    await run(
      '--swap',
      '--package-json',
      '--fix-policy-statement',
      '--fix-module',
      '--fix-managed-policy',
    );
    expect(mocks.renameSync).toHaveBeenCalled();
    expect(mocks.writeFileSync).toHaveBeenCalledTimes(1);
    expect(saved('shared/all.ts')).toContain('iam.PolicyStatementProps');
    expect(saved('generated/aws-managed-policies/index.ts')).toContain(
      './cdk-iam-floyd',
    );
    expect(mocks.emitTypeScriptFromModels).toHaveBeenCalledWith({ cdk: true });
  });

  it('leaves other imports and a missing class of 8-principals alone', async () => {
    mocks.overrides.set(
      path.join(statementDir, '8-principals.ts'),
      `import { Other } from './other';
export class Something extends Other {}
`,
    );
    await run('--fix-policy-statement');
    expect(saved('shared/policy-statement/8-principals.ts')).toBe(
      `import { Other } from './other';
export class Something extends Other {}
`,
    );
  });

  it('exits if a file cannot be swapped', async () => {
    const error = vi.spyOn(console, 'error').mockReturnValue();
    const exit = vi
      .spyOn(process, 'exit')
      .mockImplementation(() => undefined as never);
    mocks.unlinkSync.mockImplementation(() => {
      throw new Error('cannot delete');
    });
    mocks.renameSync.mockImplementation(() => {
      throw new Error('cannot rename');
    });
    await run('--swap');
    expect(error).toHaveBeenCalledWith(new Error('cannot delete'));
    expect(error).toHaveBeenCalledWith(new Error('cannot rename'));
    expect(exit).toHaveBeenCalledWith(1);
  });
});
