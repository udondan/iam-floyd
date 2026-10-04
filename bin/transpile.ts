#!/usr/bin/env node
import * as fs from 'fs';

import { coreSourceFiles, TranspileError } from '../lib/generator/transpile';
import { PythonTranspiler } from '../lib/generator/transpile/python';

const header = 'Transpiled from lib/shared/ by bin/transpile.ts. Do not edit.';

try {
  const files = coreSourceFiles();
  fs.writeFileSync(
    'python/iam_floyd/_shared.py',
    new PythonTranspiler().transpile(files, header),
  );
} catch (err) {
  if (err instanceof TranspileError) {
    console.error(err.message);
    process.exit(1);
  }
  throw err;
}
