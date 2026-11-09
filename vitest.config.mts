import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/unit/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['lib/generator/**/*.ts', 'bin/*.ts'],
      reportsDirectory: 'coverage/unit',
      reporter: ['lcov', 'text-summary'],
    },
  },
});
