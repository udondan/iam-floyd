import * as fs from 'fs';
import { afterEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  emitConverterIndex: vi.fn(),
  emitServicePrincipals: vi.fn(),
  emitTypeScriptFromModels:
    vi.fn<(options: { cdk: boolean }) => Promise<void>>(),
}));

vi.mock('fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('fs')>();
  const readFileSync = vi.fn(actual.readFileSync);
  return { ...actual, default: { ...actual, readFileSync }, readFileSync };
});
vi.mock('../../../lib/generator/emit/converter', () => ({
  emitConverterIndex: mocks.emitConverterIndex,
}));
vi.mock('../../../lib/generator/emit/typescript', () => ({
  emitTypeScriptFromModels: mocks.emitTypeScriptFromModels,
}));
vi.mock('../../../lib/generator/service-principals', () => ({
  emitServicePrincipals: mocks.emitServicePrincipals,
}));

async function run(args: string[], name: string) {
  vi.mocked(fs.readFileSync).mockReturnValueOnce(JSON.stringify({ name }));
  vi.spyOn(process, 'argv', 'get').mockReturnValue([
    'node',
    'emit.ts',
    ...args,
  ]);
  vi.resetModules();
  await import('../../../bin/emit');
}

describe('bin/emit', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    mocks.emitTypeScriptFromModels.mockReset();
  });

  it.each([
    [[], 'iam-floyd', false],
    [['--cdk'], 'iam-floyd', true],
    [[], 'cdk-iam-floyd', true],
  ])('emits with arguments %j in %s, cdk: %s', async (args, name, cdk) => {
    mocks.emitTypeScriptFromModels.mockResolvedValue();
    const log = vi.spyOn(console, 'log').mockReturnValue();
    await run(args, name);
    expect(fs.readFileSync).toHaveBeenCalledWith('package.json', 'utf8');
    expect(mocks.emitConverterIndex).toHaveBeenCalled();
    expect(mocks.emitServicePrincipals).toHaveBeenCalled();
    expect(mocks.emitTypeScriptFromModels).toHaveBeenCalledWith({ cdk });
    await vi.waitFor(() => expect(log).toHaveBeenCalledWith('ALL DONE'));
  });

  it('exits with 1 if the emit fails', async () => {
    const error = new Error('no model');
    mocks.emitTypeScriptFromModels.mockRejectedValue(error);
    const exit = vi.spyOn(process, 'exit').mockReturnValue(undefined as never);
    const log = vi.spyOn(console, 'error').mockReturnValue();
    await run([], 'iam-floyd');
    await vi.waitFor(() => expect(exit).toHaveBeenCalledWith(1));
    expect(log).toHaveBeenCalledWith(error);
  });
});
