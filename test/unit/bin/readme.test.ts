import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { readme } from '../../../lib/generator/readme';

const mocks = vi.hoisted(() => ({
  loadAssemblyFromFile: vi.fn(),
  writeJsii: vi.fn(),
}));

vi.mock('@jsii/spec', () => ({
  loadAssemblyFromFile: mocks.loadAssemblyFromFile,
}));
vi.mock('../../../lib/generator/emit/jsii', () => ({
  writeJsii: mocks.writeJsii,
}));

class Exit extends Error {}

const usage =
  'Usage: readme.ts <language> <package> <file> | readme.ts --jsii <language>';
const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8')) as {
  version: string;
};
const markdown = fs.readFileSync('README.md', 'utf8');

let dir: string;

async function run(...args: string[]) {
  vi.spyOn(process, 'argv', 'get').mockReturnValue([
    'node',
    'readme.ts',
    ...args,
  ]);
  vi.resetModules();
  await import('../../../bin/readme');
}

describe('bin/readme', () => {
  beforeEach(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), 'readme-'));
    vi.spyOn(process, 'exit').mockImplementation((code) => {
      throw new Exit(`exit ${code}`);
    });
  });

  afterEach(() => {
    fs.rmSync(dir, { recursive: true });
    vi.restoreAllMocks();
    mocks.writeJsii.mockClear();
  });

  it('writes the README of a package to the file', async () => {
    const file = path.join(dir, 'README.md');
    await run('python', 'iam-floyd', file);
    expect(fs.readFileSync(file, 'utf8')).toBe(
      readme(markdown, 'python', 'iam-floyd', version),
    );
  });

  it('sets the readme of the jsii assembly', async () => {
    const assembly: Record<string, unknown> = { name: 'cdk-iam-floyd' };
    mocks.loadAssemblyFromFile.mockReturnValue(assembly);
    await run('--jsii', 'java');
    expect(mocks.loadAssemblyFromFile).toHaveBeenCalledWith('.jsii', false);
    expect(mocks.writeJsii).toHaveBeenCalledWith('.', {
      name: 'cdk-iam-floyd',
      readme: { markdown: readme(markdown, 'java', 'cdk-iam-floyd', version) },
    });
  });

  it.each([
    [[]],
    [['python', 'iam-floyd']],
    [['python', 'iam-floyd', 'a', 'b']],
    [['cobol', 'iam-floyd', 'file']],
    [['python', 'floyd', 'file']],
    [['--jsii']],
    [['--jsii', 'cobol']],
    [['--jsii', 'python', 'file']],
  ])('fails with the usage on %j', async (args) => {
    const error = vi.spyOn(console, 'error').mockReturnValue();
    await expect(run(...args)).rejects.toThrow('exit 1');
    expect(error).toHaveBeenCalledWith(usage);
    expect(mocks.writeJsii).not.toHaveBeenCalled();
  });
});
