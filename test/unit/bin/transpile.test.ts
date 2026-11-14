import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { SourceFile } from 'ts-morph';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { readme } from '../../../lib/generator/readme';

interface Options {
  packageOf?: (file: SourceFile) => string;
  namespaceOf?: (file: SourceFile) => string;
  header: string;
  rootPackage?: string;
  modulePath?: string;
}

const mocks = vi.hoisted(() => ({
  emitCSharpFromModels: vi.fn<(inherited: Set<string>) => void>(),
  emitGoFromModels: vi.fn(),
  emitJavaFromModels: vi.fn(),
  emitPythonFromModels: vi.fn(),
  python: vi.fn<(files: SourceFile[], header: string) => string>(),
  options: [] as { language: string; options: unknown }[],
  // set by the mocks, from the modules the script imports
  readFileSync: undefined as unknown as typeof import('fs').readFileSync,
  transpileError: undefined as unknown as new (message: string) => Error,
}));

vi.mock('fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('fs')>();
  mocks.readFileSync = actual.readFileSync;
  const mocked = {
    ...actual,
    readFileSync: vi.fn(actual.readFileSync),
    readdirSync: vi.fn(),
    writeFileSync: vi.fn(),
    mkdirSync: vi.fn(),
    unlinkSync: vi.fn(),
  };
  return { ...mocked, default: mocked };
});
vi.mock('child_process', () => ({ spawnSync: vi.fn() }));
vi.mock('../../../lib/generator/emit/csharp', () => ({
  emitCSharpFromModels: mocks.emitCSharpFromModels,
}));
vi.mock('../../../lib/generator/emit/go', () => ({
  emitGoFromModels: mocks.emitGoFromModels,
  goModulePath: 'example.com/iamfloyd',
}));
vi.mock('../../../lib/generator/emit/java', () => ({
  emitJavaFromModels: mocks.emitJavaFromModels,
}));
vi.mock('../../../lib/generator/emit/python', () => ({
  emitPythonFromModels: mocks.emitPythonFromModels,
}));

function file(name: string): SourceFile {
  return {
    getFilePath: () => `${process.cwd()}/${name}`,
  } as unknown as SourceFile;
}

const service = file('lib/generated/policy-statements/ec2.ts');

vi.mock('../../../lib/generator/transpile', async (importOriginal) => {
  const actual =
    await importOriginal<typeof import('../../../lib/generator/transpile')>();
  mocks.transpileError = actual.TranspileError;
  return {
    ...actual,
    coreSourceFiles: () => [
      file('lib/shared/index.ts'),
      file('lib/shared/all.ts'),
      service,
    ],
    collectionSourceFiles: () => [file('lib/collection/index.ts'), service],
    managedPoliciesSourceFiles: () => [
      file('lib/generated/aws-managed-policies/iam-floyd.ts'),
    ],
    servicePrincipalsSourceFiles: () => [
      file('lib/generated/aws-service-principals/index.ts'),
    ],
  };
});

/**
 * Writes each file into the directory of its package or namespace
 */
function transpiled(
  files: SourceFile[],
  packageOf: (file: SourceFile) => string,
  extension: string,
): Map<string, string> {
  return new Map(
    files.map((source) => {
      const name = path.basename(source.getFilePath(), '.ts');
      return [
        `${packageOf(source)}/${name}${extension}`,
        `${packageOf(source)} ${name}`,
      ];
    }),
  );
}

vi.mock('../../../lib/generator/transpile/python', () => ({
  PythonTranspiler: class {
    transpile(files: SourceFile[], header: string) {
      return mocks.python(files, header);
    }
  },
}));
vi.mock('../../../lib/generator/transpile/java', () => ({
  JavaTranspiler: class {
    constructor(private readonly options: Options) {
      mocks.options.push({ language: 'java', options });
    }
    transpile(files: SourceFile[]) {
      return transpiled(files, this.options.packageOf!, '.java');
    }
  },
}));
vi.mock('../../../lib/generator/transpile/csharp', () => ({
  CSharpTranspiler: class {
    publicMethods = new Map([
      ['PolicyStatementWithActions', new Set(['ToJSON', 'Allow'])],
      ['PolicyStatement', new Set(['Deny'])],
      ['Operator', new Set(['StringLike'])],
    ]);
    constructor(private readonly options: Options) {
      mocks.options.push({ language: 'csharp', options });
    }
    transpile(files: SourceFile[], namespace: string) {
      expect(namespace).toBe('IAM.Floyd');
      return transpiled(files, this.options.namespaceOf!, '.cs');
    }
  },
}));
vi.mock('../../../lib/generator/transpile/go', () => ({
  GoTranspiler: class {
    constructor(private readonly options: Options) {
      mocks.options.push({ language: 'go', options });
    }
    transpile(files: SourceFile[]) {
      return transpiled(files, this.options.packageOf!, '.go');
    }
  },
}));

class Exit extends Error {}

/**
 * The files of the previous run: generated ones start with a header that ends with "Do not edit."
 */
const previous: Record<string, Record<string, string | null>> = {
  'java/src/main/java': { com: null, 'Js.java': 'package com;' },
  'java/src/main/java/com': {
    'Ec2.java': '// Transpiled. Do not edit.\npackage com;',
    'notes.txt': 'Do not edit.',
  },
  'dotnet/src/IAM.Floyd': {
    'Shared.cs': '// Transpiled. Do not edit.',
    'Js.cs': 'namespace IAM.Floyd;',
  },
  'go/iamfloyd': {
    'shared.go': '// Code generated by bin/transpile.ts. DO NOT EDIT.',
    'helpers.go': 'package iamfloyd',
  },
};

async function run() {
  vi.resetModules();
  await import('../../../bin/transpile');
}

function written(): Record<string, string> {
  return Object.fromEntries(
    vi
      .mocked(fs.writeFileSync)
      .mock.calls.map(([target, content]) => [
        String(target),
        content as string,
      ]),
  );
}

function options(language: string): Options[] {
  return mocks.options
    .filter((entry) => entry.language === language)
    .map((entry) => entry.options as Options);
}

describe('bin/transpile', () => {
  beforeEach(() => {
    mocks.python.mockImplementation(
      (files, header) => `# ${header} ${files.length}`,
    );
    vi.mocked(fs.readdirSync).mockImplementation(((dir: string) =>
      Object.entries(previous[dir] ?? {}).map(([name, content]) => ({
        name,
        isDirectory: () => content === null,
      }))) as unknown as typeof fs.readdirSync);
    vi.mocked(fs.readFileSync).mockImplementation(((
      target: string,
      encoding: BufferEncoding,
    ) => {
      const content =
        previous[path.dirname(target)]?.[path.basename(target)] ?? undefined;
      return content ?? mocks.readFileSync(target, encoding);
    }) as typeof fs.readFileSync);
    vi.mocked(childProcess.spawnSync).mockReturnValue({
      status: 0,
    } as ReturnType<typeof childProcess.spawnSync>);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.clearAllMocks();
    mocks.options.length = 0;
  });

  it('writes the sources of the native packages', async () => {
    await run();

    const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8')) as {
      version: string;
    };
    const markdown = fs.readFileSync('README.md', 'utf8');
    const files = written();

    // Python
    expect(files['python/iam_floyd/_shared.py']).toBe(
      '# Transpiled from lib/shared/ by bin/transpile.ts. Do not edit. 3',
    );
    expect(files['python/iam_floyd/_collection.py']).toBe(
      '# Transpiled from lib/collection/ by bin/transpile.ts. Do not edit. 2',
    );
    expect(files['python/iam_floyd/_aws_managed_policies.py']).toBe(
      '# Transpiled from lib/generated/aws-managed-policies/iam-floyd.ts by bin/transpile.ts. Do not edit. 1',
    );
    expect(files['python/iam_floyd/_aws_service_principals.py']).toBe(
      '# Transpiled from lib/generated/aws-service-principals/index.ts by bin/transpile.ts. Do not edit. 1',
    );
    expect(mocks.emitPythonFromModels).toHaveBeenCalledOnce();
    expect(files['python/iam_floyd/_version.py']).toBe(
      `# Written by bin/transpile.ts from package.json. Do not edit.\n__version__ = '${version}'\n`,
    );

    // READMEs
    expect(files['python/README.md']).toBe(
      readme(markdown, 'python', 'iam-floyd', version),
    );
    expect(files['dotnet/README.md']).toBe(
      readme(markdown, 'dotnet', 'iam-floyd', version),
    );
    expect(files['go/iamfloyd/README.md']).toBe(
      readme(markdown, 'go', 'iam-floyd', version),
    );

    // the generated files of the previous run are removed, the hand-written ones are kept
    expect(vi.mocked(fs.unlinkSync).mock.calls).toEqual([
      ['java/src/main/java/com/Ec2.java'],
      ['dotnet/src/IAM.Floyd/Shared.cs'],
      ['go/iamfloyd/shared.go'],
    ]);

    // Java: the services are emitted from the model, all.ts goes to the package of the statements
    expect(files['java/src/main/java/com.udondan.iamFloyd/index.java']).toBe(
      'com.udondan.iamFloyd index',
    );
    expect(
      files['java/src/main/java/com.udondan.iamFloyd.statement/all.java'],
    ).toBe('com.udondan.iamFloyd.statement all');
    expect(Object.keys(files).some((name) => name.includes('ec2'))).toBe(false);
    expect(fs.mkdirSync).toHaveBeenCalledWith(
      'java/src/main/java/com.udondan.iamFloyd',
      { recursive: true },
    );
    expect(options('java').map((option) => option.header)).toEqual([
      'Transpiled from lib/shared/ by bin/transpile.ts. Do not edit.',
      'Transpiled from lib/collection/ by bin/transpile.ts. Do not edit.',
      'Transpiled from lib/generated/aws-managed-policies/iam-floyd.ts by bin/transpile.ts. Do not edit.',
      'Transpiled from lib/generated/aws-service-principals/index.ts by bin/transpile.ts. Do not edit.',
    ]);
    expect(options('java')[0].packageOf!(service)).toBe(
      'com.udondan.iamFloyd.statement',
    );
    expect(mocks.emitJavaFromModels).toHaveBeenCalledOnce();

    // C#: the services hide the public methods of the statement classes
    expect(files['dotnet/src/IAM.Floyd/IAM.Floyd/index.cs']).toBe(
      'IAM.Floyd index',
    );
    expect(files['dotnet/src/IAM.Floyd/IAM.Floyd.Statement/all.cs']).toBe(
      'IAM.Floyd.Statement all',
    );
    expect(options('csharp')[0].namespaceOf!(service)).toBe(
      'IAM.Floyd.Statement',
    );
    expect(mocks.emitCSharpFromModels).toHaveBeenCalledWith(
      new Set(['ToJSON', 'Allow', 'Deny']),
    );

    // Go: the collection has its own package
    expect(files['go/iamfloyd/iamfloyd/index.go']).toBe('iamfloyd index');
    expect(files['go/iamfloyd/statement/all.go']).toBe('statement all');
    expect(files['go/iamfloyd/collection/index.go']).toBe('collection index');
    expect(files['go/iamfloyd/iamfloyd/iam-floyd.go']).toBe(
      'iamfloyd iam-floyd',
    );
    expect(options('go')[0]).toMatchObject({
      rootPackage: 'iamfloyd',
      modulePath: 'example.com/iamfloyd',
      header:
        'Code generated by bin/transpile.ts from lib/shared/. DO NOT EDIT.',
    });
    expect(options('go')[0].packageOf!(service)).toBe('statement');
    expect(mocks.emitGoFromModels).toHaveBeenCalledOnce();
    expect(childProcess.spawnSync).toHaveBeenCalledWith(
      'gofmt',
      ['-w', 'go/iamfloyd'],
      { stdio: 'inherit' },
    );
  });

  it('warns if gofmt is not installed', async () => {
    vi.mocked(childProcess.spawnSync).mockReturnValue({
      error: new Error('spawnSync gofmt ENOENT'),
      status: null,
    } as unknown as ReturnType<typeof childProcess.spawnSync>);
    const warn = vi.spyOn(console, 'warn').mockReturnValue();
    await run();
    expect(warn).toHaveBeenCalledWith(
      'gofmt not found, the Go sources are not formatted',
    );
    expect(mocks.emitPythonFromModels).toHaveBeenCalledOnce();
  });

  it('fails if gofmt fails', async () => {
    vi.mocked(childProcess.spawnSync).mockReturnValue({
      status: 2,
    } as ReturnType<typeof childProcess.spawnSync>);
    await expect(run()).rejects.toThrow('gofmt failed');
    expect(mocks.emitPythonFromModels).not.toHaveBeenCalled();
  });

  it('exits with the message of a transpile error', async () => {
    mocks.python.mockImplementation(() => {
      throw new mocks.transpileError('lib/shared/index.ts:1: Unsupported: x');
    });
    const error = vi.spyOn(console, 'error').mockReturnValue();
    vi.spyOn(process, 'exit').mockImplementation((code) => {
      throw new Exit(`exit ${code}`);
    });
    await expect(run()).rejects.toThrow('exit 1');
    expect(error).toHaveBeenCalledWith('lib/shared/index.ts:1: Unsupported: x');
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });
});
