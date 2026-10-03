#!/usr/bin/env node
/**
 * Pack command of jsii-pacmak (`--pack-command`), run in a copy of the package. Writes the npm
 * tarball that is embedded in the Python, Java, .NET and Go packages, without what only matters
 * for TypeScript users and Construct Hub:
 *
 * - the docs in the jsii assembly; the jsii runtime only needs the types
 * - the TypeScript declarations
 *
 * The languages get their docs from the full assembly, which jsii-pacmak reads from the package
 * itself. The npm package is published with both.
 */
import { execFileSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { loadAssemblyFromFile, writeAssembly } from '@jsii/spec';

const assembly = loadAssemblyFromFile('.jsii', false);
stripDocs(assembly);
writeAssembly('.', assembly, { compress: true });

removeDeclarations('.');

const output = execFileSync('npm', ['pack', '--silent'], { encoding: 'utf8' });
// jsii-pacmak takes the tarball name from the last line
console.log(output.trim().split('\n').pop());

function stripDocs(value: unknown) {
  if (Array.isArray(value)) {
    value.forEach(stripDocs);
  } else if (value !== null && typeof value === 'object') {
    const object = value as Record<string, unknown>;
    delete object.docs;
    delete object.readme;
    Object.values(object).forEach(stripDocs);
  }
}

function removeDeclarations(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules') {
      removeDeclarations(file);
    } else if (entry.isFile() && entry.name.endsWith('.d.ts')) {
      fs.rmSync(file);
    }
  }
}
