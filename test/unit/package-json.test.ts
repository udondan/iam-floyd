import * as fs from 'fs';
import { describe, expect, it } from 'vitest';

import { PackageJson } from '../../lib/generator/package-json';

describe('PackageJson', () => {
  it('describes the fields of package.json the build scripts use', () => {
    const packageJson = JSON.parse(
      fs.readFileSync('package.json', 'utf8'),
    ) as PackageJson;
    expect(packageJson.name).toMatch(/^(cdk-)?iam-floyd$/);
    expect(packageJson.version).toMatch(/^\d+\.\d+\.\d+/);
    expect(typeof packageJson.description).toBe('string');
    expect(Array.isArray(packageJson.keywords)).toBe(true);
    expect(typeof packageJson.license).toBe('string');
    expect(typeof packageJson.homepage).toBe('string');
    expect(typeof packageJson.author.name).toBe('string');
    expect(typeof packageJson.devDependencies).toBe('object');
  });
});
