import { afterEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  calls: [] as string[],
  getAwsServices: vi.fn<() => Promise<string[]>>(),
  createModules: vi.fn<(services: string[]) => Promise<void>>(),
  updateCdkRefs: vi.fn<() => void>(),
  emitTypeScriptFromModels: vi.fn<() => Promise<void>>(),
  emitConverterIndex: vi.fn<() => void>(),
}));

vi.mock('../../../lib/generator', () => ({
  getAwsServices: mocks.getAwsServices,
  createModules: mocks.createModules,
  emitTypeScriptFromModels: mocks.emitTypeScriptFromModels,
}));
vi.mock('../../../lib/generator/cdk-refs', () => ({
  updateCdkRefs: mocks.updateCdkRefs,
}));
vi.mock('../../../lib/generator/emit/converter', () => ({
  emitConverterIndex: mocks.emitConverterIndex,
}));

async function run() {
  vi.resetModules();
  await import('../../../bin/generate');
}

describe('bin/generate', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.resetAllMocks();
    mocks.calls.length = 0;
  });

  it('scrapes the services, updates the CDK references and emits the code', async () => {
    mocks.getAwsServices.mockImplementation(() => {
      mocks.calls.push('getAwsServices');
      return Promise.resolve(['ec2', 's3']);
    });
    mocks.createModules.mockImplementation((services) => {
      mocks.calls.push(`createModules ${services.join(',')}`);
      return Promise.resolve();
    });
    mocks.updateCdkRefs.mockImplementation(() => {
      mocks.calls.push('updateCdkRefs');
    });
    mocks.emitTypeScriptFromModels.mockImplementation(() => {
      mocks.calls.push('emitTypeScriptFromModels');
      return Promise.resolve();
    });
    mocks.emitConverterIndex.mockImplementation(() => {
      mocks.calls.push('emitConverterIndex');
    });
    const log = vi.spyOn(console, 'log').mockReturnValue();
    const exit = vi.spyOn(process, 'exit').mockReturnValue(undefined as never);

    await run();
    await vi.waitFor(() => expect(log).toHaveBeenCalledWith('ALL DONE'));
    expect(mocks.calls).toEqual([
      'getAwsServices',
      'createModules ec2,s3',
      'updateCdkRefs',
      'emitTypeScriptFromModels',
      'emitConverterIndex',
    ]);
    expect(mocks.emitTypeScriptFromModels).toHaveBeenCalledWith();
    expect(exit).not.toHaveBeenCalled();
  });

  it('exits with 1 on an error', async () => {
    const error = new Error('Unable to find services');
    mocks.getAwsServices.mockRejectedValue(error);
    const log = vi.spyOn(console, 'error').mockReturnValue();
    const exit = vi.spyOn(process, 'exit').mockReturnValue(undefined as never);

    await run();
    await vi.waitFor(() => expect(exit).toHaveBeenCalledWith(1));
    expect(log).toHaveBeenCalledWith(error);
    expect(mocks.createModules).not.toHaveBeenCalled();
  });
});
