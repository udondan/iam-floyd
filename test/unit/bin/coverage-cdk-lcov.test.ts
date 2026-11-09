import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const { execFileSync } = vi.hoisted(() => ({
  execFileSync: vi.fn<(command: string, args: string[]) => string>(),
}));

vi.mock('child_process', () => ({ execFileSync }));

class Exit extends Error {}

let dir: string;

async function run(...args: string[]) {
  vi.spyOn(process, 'argv', 'get').mockReturnValue([
    'node',
    'coverage-cdk-lcov.ts',
    ...args,
  ]);
  vi.resetModules();
  await import('../../../bin/coverage-cdk-lcov');
}

describe('bin/coverage-cdk-lcov', () => {
  beforeEach(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), 'lcov-'));
    vi.spyOn(process, 'exit').mockImplementation((code) => {
      throw new Exit(`exit ${code}`);
    });
  });

  afterEach(() => {
    fs.rmSync(dir, { recursive: true });
    vi.restoreAllMocks();
    execFileSync.mockReset();
  });

  it('fails without a file', async () => {
    const error = vi.spyOn(console, 'error').mockReturnValue();
    await expect(run()).rejects.toThrow('exit 1');
    expect(error).toHaveBeenCalledWith(
      'Usage: ts-node bin/coverage-cdk-lcov.ts <lcov.info>',
    );
    expect(execFileSync).not.toHaveBeenCalled();
  });

  it('maps the coverage to the committed files', async () => {
    // a file of the CDK variant, swapped over the committed one
    const swapped = path.join(dir, 'swapped.ts');
    fs.writeFileSync(swapped, 'a\n  b\nx\nc\n');
    // a file changed by the CDK variant, mapped to its committed version in HEAD
    const changed = 'lib/shared/policy-statement/1-base.ts';
    const changedLines = fs.readFileSync(changed, 'utf8').split('\n').length;
    execFileSync.mockImplementation((command, args) => {
      expect(command).toBe('git');
      if (args[0] === 'ls-files') {
        return [`${dir}/swapped.CDK.ts`, changed, ''].join('\n');
      }
      expect(args[0]).toBe('show');
      if (args[1] === `HEAD:${dir}/swapped.CDK.ts`) {
        return 'a\ny\nb\nc\n';
      }
      expect(args[1]).toBe(`HEAD:${changed}`);
      return fs.readFileSync(changed, 'utf8');
    });

    const lcov = path.join(dir, 'lcov.info');
    fs.writeFileSync(
      lcov,
      [
        'TN:',
        `SF:${swapped}`,
        'FN:1,first',
        'FN:3,unmapped',
        'FN:4,second',
        'FNDA:2,first',
        'FNDA:5,unmapped',
        'FNDA:0,second',
        'FNF:3',
        'FNH:2',
        'DA:1,2',
        'DA:2,0',
        'DA:3,7',
        'DA:4,1',
        'LF:4',
        'LH:3',
        'BRDA:2,0,0,1',
        'BRDA:2,0,1,0',
        'BRDA:3,1,0,4',
        'BRDA:4,2,0,-',
        'BRF:4',
        'BRH:2',
        'end_of_record',
        'TN:',
        'SF:lib/not-committed.ts',
        'DA:1,1',
        'end_of_record',
        'TN:',
        `SF:${process.cwd()}/${changed}`,
        `DA:${changedLines - 1},3`,
        'end_of_record',
        'TN:',
        'end_of_record',
        '',
      ].join('\n'),
    );

    await run(lcov);

    expect(execFileSync).toHaveBeenCalledWith('git', ['ls-files'], {
      encoding: 'utf8',
    });
    expect(fs.readFileSync(lcov, 'utf8')).toBe(
      [
        'TN:',
        `SF:${dir}/swapped.CDK.ts`,
        'FN:1,first',
        'FN:4,second',
        'FNDA:2,first',
        'FNDA:0,second',
        'DA:1,2',
        'DA:3,0',
        'DA:4,1',
        'BRDA:3,0,0,1',
        'BRDA:3,0,1,0',
        'BRDA:4,2,0,-',
        'FNF:2',
        'FNH:1',
        'LF:3',
        'LH:2',
        'BRF:3',
        'BRH:1',
        'end_of_record',
        'TN:',
        `SF:${changed}`,
        `DA:${changedLines - 1},3`,
        'FNF:0',
        'FNH:0',
        'LF:1',
        'LH:1',
        'BRF:0',
        'BRH:0',
        'end_of_record',
        '',
      ].join('\n'),
    );
  });
});
