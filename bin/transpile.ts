#!/usr/bin/env node
/**
 * Writes the generated sources of the native packages: the core transpiled from lib/shared/, the
 * collection, the names of the AWS managed policies, the services emitted from the model and the
 * version of package.json
 */
import * as fs from 'fs';
import * as path from 'path';
import { SourceFile } from 'ts-morph';

import { emitJavaFromModels } from '../lib/generator/emit/java';
import { emitPythonFromModels } from '../lib/generator/emit/python';
import {
  collectionSourceFiles,
  coreSourceFiles,
  managedPoliciesSourceFiles,
  isServiceFile,
  TranspileError,
} from '../lib/generator/transpile';
import { JavaTranspiler } from '../lib/generator/transpile/java';
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

  writeJava();
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

/**
 * Writes the Java sources into java/src/main/java/, after removing the generated files of the
 * previous run, which start with a header that ends with "Do not edit."
 */
function writeJava() {
  const root = 'java/src/main/java';
  const pkg = 'com.udondan.iamFloyd';
  const removeGenerated = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        removeGenerated(file);
      } else if (
        entry.name.endsWith('.java') &&
        fs.readFileSync(file, 'utf8').split('\n')[0].endsWith('Do not edit.')
      ) {
        fs.unlinkSync(file);
      }
    }
  };
  removeGenerated(root);
  const packageOf = (file: SourceFile) =>
    isServiceFile(file) ||
    path.relative(process.cwd(), file.getFilePath()) ==
      path.join('lib', 'shared', 'all.ts')
      ? `${pkg}.statement`
      : pkg;
  const modules: [SourceFile[], string][] = [
    [coreSourceFiles(), 'lib/shared/'],
    [collectionSourceFiles(), 'lib/collection/'],
    [
      managedPoliciesSourceFiles(),
      'lib/generated/aws-managed-policies/iam-floyd.ts',
    ],
  ];
  for (const [files, dir] of modules) {
    const transpiled = new JavaTranspiler({
      packageOf,
      header: header(dir),
    }).transpile(files.filter((file) => !isServiceFile(file)));
    for (const [file, content] of transpiled) {
      const target = path.join(root, file);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, content);
    }
  }
  emitJavaFromModels();
}
