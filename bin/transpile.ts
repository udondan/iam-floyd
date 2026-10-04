#!/usr/bin/env node
/**
 * Writes the generated sources of the native packages: the core transpiled from lib/shared/, the
 * collection, the names of the AWS managed policies, the services emitted from the model and the
 * version of package.json
 */
import * as fs from 'fs';
import * as path from 'path';
import { SourceFile } from 'ts-morph';

import { emitCSharpFromModels } from '../lib/generator/emit/csharp';
import { emitJavaFromModels } from '../lib/generator/emit/java';
import { emitPythonFromModels } from '../lib/generator/emit/python';
import {
  collectionSourceFiles,
  coreSourceFiles,
  managedPoliciesSourceFiles,
  isServiceFile,
  TranspileError,
} from '../lib/generator/transpile';
import { CSharpTranspiler } from '../lib/generator/transpile/csharp';
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
  writeCSharp();
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
 * Removes the files with the extension that start with a header that ends with "Do not edit."
 */
function removeGenerated(dir: string, extension: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      removeGenerated(file, extension);
    } else if (
      entry.name.endsWith(extension) &&
      fs.readFileSync(file, 'utf8').split('\n')[0].endsWith('Do not edit.')
    ) {
      fs.unlinkSync(file);
    }
  }
}

/**
 * Whether a file goes into the namespace or package of the statements: the services and `All`
 */
function isStatementFile(file: SourceFile): boolean {
  return (
    isServiceFile(file) ||
    path.relative(process.cwd(), file.getFilePath()) ==
      path.join('lib', 'shared', 'all.ts')
  );
}

/**
 * The modules to transpile, with the directory or file they come from
 */
function modules(): [SourceFile[], string][] {
  return [
    [coreSourceFiles(), 'lib/shared/'],
    [collectionSourceFiles(), 'lib/collection/'],
    [
      managedPoliciesSourceFiles(),
      'lib/generated/aws-managed-policies/iam-floyd.ts',
    ],
  ];
}

/**
 * Writes the Java sources into java/src/main/java/, after removing the generated files of the
 * previous run, which start with a header that ends with "Do not edit."
 */
function writeJava() {
  const root = 'java/src/main/java';
  const pkg = 'com.udondan.iamFloyd';
  removeGenerated(root, '.java');
  const packageOf = (file: SourceFile) =>
    isStatementFile(file) ? `${pkg}.statement` : pkg;
  for (const [files, dir] of modules()) {
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

/**
 * Writes the C# sources into dotnet/src/IAM.Floyd/, after removing the generated files of the
 * previous run
 */
function writeCSharp() {
  const root = 'dotnet/src/IAM.Floyd';
  const namespace = 'IAM.Floyd';
  removeGenerated(root, '.cs');
  const namespaceOf = (file: SourceFile) =>
    isStatementFile(file) ? `${namespace}.Statement` : namespace;
  // the public methods of the classes of the statement, which the services hide if they have the
  // same name
  const inherited = new Set<string>();
  for (const [files, dir] of modules()) {
    const transpiler = new CSharpTranspiler({
      namespaceOf,
      header: header(dir),
    });
    const transpiled = transpiler.transpile(
      files.filter((file) => !isServiceFile(file)),
      namespace,
    );
    for (const [file, content] of transpiled) {
      const target = path.join(root, file);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, content);
    }
    for (const [name, methods] of transpiler.publicMethods) {
      if (name.startsWith('PolicyStatement')) {
        methods.forEach((method) => inherited.add(method));
      }
    }
  }
  emitCSharpFromModels(inherited);
}
