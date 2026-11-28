import { afterEach, describe, expect, it, vi } from 'vitest';

const { indexServicePrincipals } = vi.hoisted(() => ({
  indexServicePrincipals: vi.fn<() => Promise<void>>(),
}));

vi.mock('../../../lib/generator', () => ({ indexServicePrincipals }));

async function run() {
  vi.resetModules();
  await import('../../../bin/index-service-principals');
}

describe('bin/index-service-principals', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    indexServicePrincipals.mockReset();
  });

  it('indexes the service principals', async () => {
    indexServicePrincipals.mockResolvedValue();
    const log = vi.spyOn(console, 'log').mockReturnValue();
    await run();
    await vi.waitFor(() => expect(log).toHaveBeenCalledWith('ALL DONE'));
    expect(indexServicePrincipals).toHaveBeenCalledOnce();
  });

  it('exits with 1 on an error', async () => {
    const error = new Error('throttled');
    indexServicePrincipals.mockRejectedValue(error);
    const exit = vi.spyOn(process, 'exit').mockReturnValue(undefined as never);
    const log = vi.spyOn(console, 'error').mockReturnValue();
    await run();
    await vi.waitFor(() => expect(exit).toHaveBeenCalledWith(1));
    expect(log).toHaveBeenCalledWith(error);
  });
});
