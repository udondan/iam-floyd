import { afterEach, describe, expect, it, vi } from 'vitest';

const { cleanUp } = vi.hoisted(() => ({
  cleanUp: vi.fn<() => Promise<void>>(),
}));

vi.mock('../../../helper/typescript/typescript_test', () => ({ cleanUp }));

async function run() {
  vi.resetModules();
  await import('../../../bin/clean-test-resources');
}

describe('bin/clean-test-resources', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    cleanUp.mockReset();
  });

  it('cleans up the test resources', async () => {
    cleanUp.mockResolvedValue();
    const exit = vi.spyOn(process, 'exit').mockReturnValue(undefined as never);
    await run();
    expect(cleanUp).toHaveBeenCalledOnce();
    await new Promise((resolve) => setImmediate(resolve));
    expect(exit).not.toHaveBeenCalled();
  });

  it('exits with 1 on an error', async () => {
    const error = new Error('access denied');
    cleanUp.mockRejectedValue(error);
    const exit = vi.spyOn(process, 'exit').mockReturnValue(undefined as never);
    const log = vi.spyOn(console, 'error').mockReturnValue();
    await run();
    await vi.waitFor(() => expect(exit).toHaveBeenCalledWith(1));
    expect(log).toHaveBeenCalledWith(error);
  });
});
