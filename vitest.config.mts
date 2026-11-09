import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/unit/**/*.test.ts'],
    // the transpiler tests create TypeScript projects, which is slow with coverage on small runners
    testTimeout: 30000,
    coverage: {
      provider: 'v8',
      include: ['lib/generator/**/*.ts', 'bin/*.ts'],
      reportsDirectory: 'coverage/unit',
      reporter: ['lcov', 'text-summary'],
    },
  },
});
