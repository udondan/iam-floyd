import { describe, expect, it, vi } from 'vitest';

const { updateCdkRefs } = vi.hoisted(() => ({ updateCdkRefs: vi.fn() }));

vi.mock('../../../lib/generator/cdk-refs', () => ({ updateCdkRefs }));

describe('bin/cdk-refs', () => {
  it('updates the CDK references', async () => {
    await import('../../../bin/cdk-refs');
    expect(updateCdkRefs).toHaveBeenCalledOnce();
  });
});
