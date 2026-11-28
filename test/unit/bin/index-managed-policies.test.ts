import { afterEach, describe, expect, it, vi } from 'vitest';

const { indexManagedPolicies } = vi.hoisted(() => ({
  indexManagedPolicies: vi.fn<() => Promise<void>>(),
}));

vi.mock('../../../lib/generator', () => ({ indexManagedPolicies }));

async function run() {
  vi.resetModules();
  await import('../../../bin/index-managed-policies');
}

describe('bin/index-managed-policies', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    indexManagedPolicies.mockReset();
  });

  it('indexes the managed policies', async () => {
    indexManagedPolicies.mockResolvedValue();
    const log = vi.spyOn(console, 'log').mockReturnValue();
    await run();
    await vi.waitFor(() => expect(log).toHaveBeenCalledWith('ALL DONE'));
    expect(indexManagedPolicies).toHaveBeenCalledOnce();
  });

  it('exits with 1 on an error', async () => {
    const error = new Error('throttled');
    indexManagedPolicies.mockRejectedValue(error);
    const exit = vi.spyOn(process, 'exit').mockReturnValue(undefined as never);
    const log = vi.spyOn(console, 'error').mockReturnValue();
    await run();
    await vi.waitFor(() => expect(exit).toHaveBeenCalledWith(1));
    expect(log).toHaveBeenCalledWith(error);
  });
});
