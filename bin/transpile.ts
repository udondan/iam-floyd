#!/usr/bin/env node
/**
 * Writes the generated sources of the native packages: the core transpiled from lib/shared/ and
 * the services emitted from the model
 */
import * as fs from 'fs';

import { emitPythonFromModels } from '../lib/generator/emit/python';
import {
  collectionSourceFiles,
  coreSourceFiles,
  TranspileError,
} from '../lib/generator/transpile';
import { PythonTranspiler } from '../lib/generator/transpile/python';

const header = (dir: string) =>
  `Transpiled from ${dir} by bin/transpile.ts. Do not edit.`;

try {
  fs.writeFileSync(
    'python/iam_floyd/_shared.py',
    new PythonTranspiler().transpile(coreSourceFiles(), header('lib/shared/')),
  );
  fs.writeFileSync(
    'python/iam_floyd/_collection.py',
    new PythonTranspiler().transpile(
      collectionSourceFiles(),
      header('lib/collection/'),
    ),
  );
} catch (err) {
  if (err instanceof TranspileError) {
    console.error(err.message);
    process.exit(1);
  }
  throw err;
}
emitPythonFromModels();
