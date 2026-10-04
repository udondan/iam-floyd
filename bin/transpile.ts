#!/usr/bin/env node
/**
 * Writes the generated sources of the native packages: the core transpiled from lib/shared/, the
 * collection, the names of the AWS managed policies, the services emitted from the model and the
 * version of package.json
 */
import * as fs from 'fs';

import { emitPythonFromModels } from '../lib/generator/emit/python';
import {
  collectionSourceFiles,
  coreSourceFiles,
  managedPoliciesSourceFiles,
  TranspileError,
} from '../lib/generator/transpile';
import { PythonTranspiler } from '../lib/generator/transpile/python';

const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8')) as {
  version: string;
};
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
  fs.writeFileSync(
    'python/iam_floyd/_aws_managed_policies.py',
    new PythonTranspiler().transpile(
      managedPoliciesSourceFiles(),
      header('lib/generated/aws-managed-policies/iam-floyd.ts'),
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
fs.writeFileSync(
  'python/iam_floyd/_version.py',
  `# Written by bin/transpile.ts from package.json. Do not edit.\n__version__ = '${version}'\n`,
);
