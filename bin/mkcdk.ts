#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';
import { Project } from 'ts-morph';

import { emitTypeScriptFromModels } from '../lib/generator/emit/typescript';
import { formatCode } from '../lib/generator/format';
import { PackageJson } from '../lib/generator/package-json';

const lib = path.join(__dirname, '../lib');

async function run() {
  const args = process.argv.slice(2);

  const doFileSwap = !args.length || args.includes('--swap');
  const doPackageJson = !args.length || args.includes('--package-json');
  const doFixPolicyStatement =
    !args.length || args.includes('--fix-policy-statement');
  const doFixModule = !args.length || args.includes('--fix-module');
  const doFixManagedPolicy =
    !args.length || args.includes('--fix-managed-policy');

  if (doFileSwap) swapFiles();
  if (doPackageJson) preparePackageJson();

  const project = new Project();

  if (doFixPolicyStatement) fixPolicyStatement(project);
  if (doFixManagedPolicy) fixManagedPolicy(project);

  if (doFixModule) {
    fixModule(project, `${lib}/shared/all.ts`);
  }

  await project.save();

  if (doFixModule) {
    console.log('Emitting CDK variant of the statement providers');
    await emitTypeScriptFromModels({ cdk: true });
  }
  console.log('done');
}

void run();

function fixPolicyStatement(project: Project) {
  // loop over files in ../lib/shared/policy-statement:
  for (const fileName of fs.readdirSync(`${lib}/shared/policy-statement`)) {
    if (fileName.endsWith('.ts') && !fileName.endsWith('.d.ts')) {
      const file = path.join(
        __dirname,
        '../lib/shared/policy-statement',
        fileName,
      );

      const sourceFile = project.addSourceFileAtPath(file);
      if (fileName === '8-principals.ts') {
        sourceFile.getImportDeclarations().forEach((importDeclaration) => {
          if (
            importDeclaration.getNamedImports()[0].getName() ===
            'PolicyStatementWithArnDefaults'
          ) {
            importDeclaration.setModuleSpecifier('./7-arn-defaults-CDK');
            importDeclaration
              .getNamedImports()[0]
              .setName('PolicyStatementWithArnDefaultsForCdk');
          }
        });

        const policyStatementWithPrincipal = sourceFile.getClass(
          'PolicyStatementWithPrincipal',
        );
        policyStatementWithPrincipal?.setExtends(
          'PolicyStatementWithArnDefaultsForCdk',
        );
      }

      sourceFile.getClasses().forEach((classDeclaration) => {
        console.log(`CHECKING CLASS NAME: ${classDeclaration.getName()}`);
        if (classDeclaration.getMethod('freeze')) {
          console.log('Importing aws_iam'); // otherwise TS2742
          sourceFile.addImportDeclaration({
            namedImports: ['aws_iam as _iam'],
            moduleSpecifier: 'aws-cdk-lib',
          });
        }
      });

      formatCode(sourceFile);
    }
  }
}

function fixModule(project: Project, file: string) {
  const sourceFile = project.addSourceFileAtPath(file);
  const classDeclaration = sourceFile.getClasses()[0];
  sourceFile.addImportDeclaration({
    namedImports: ['aws_iam as iam'],
    moduleSpecifier: 'aws-cdk-lib',
  });
  const oldConstructor = classDeclaration.getConstructors()[0];
  const desc = oldConstructor.getJsDocs()[0].getDescription();

  oldConstructor.remove();
  const constructor = classDeclaration.addConstructor({});
  constructor.addParameter({
    name: 'props',
    type: 'iam.PolicyStatementProps',
    hasQuestionToken: true,
  });
  constructor.setBodyText('super(props);');
  constructor.addJsDoc({
    description: desc,
  });
  formatCode(sourceFile);
}

function fixManagedPolicy(project: Project) {
  const managedPolicies = project.addSourceFileAtPath(
    'lib/generated/aws-managed-policies/index.ts',
  );

  managedPolicies
    .getExportDeclarationOrThrow('./iam-floyd')
    .setModuleSpecifier('./cdk-iam-floyd');
}

function preparePackageJson() {
  const file = path.join(__dirname, '../package.json');
  const jsonData = JSON.parse(fs.readFileSync(file, 'utf8')) as PackageJson;

  jsonData.name = 'cdk-iam-floyd';
  jsonData.description += ' for AWS CDK';
  jsonData.keywords.push('cdk', 'aws-cdk');

  jsonData.devDependencies = {
    ...jsonData.devDependencies,
    'aws-cdk-lib': '^2.0.0',
    constructs: '^10.0.0',
  };
  jsonData.peerDependencies = {
    'aws-cdk-lib': '^2.0.0',
    constructs: '^10.0.0',
  };

  fs.writeFileSync(file, JSON.stringify(jsonData, null, 2));
}

function swapFiles() {
  for (const dir of [
    `${lib}/shared/policy-statement`,
    `${lib}/shared/policy`,
  ]) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      if (!file.endsWith('.CDK.ts')) return;
      const parts = file.split('.');
      parts.splice(1, 1);
      swapFile(`${dir}/${file}`, `${dir}/${parts.join('.')}`);
    });
  }
}

function swapFile(src: string, dest: string) {
  console.log(`Going to replace ${dest} with ${src}`);
  deleteFile(dest);
  renameFile(src, dest);
}

function deleteFile(path: string) {
  try {
    fs.unlinkSync(path);
  } catch (err) {
    exit(err as Error);
  }
}

function renameFile(src: string, dest: string) {
  try {
    fs.renameSync(src, dest);
  } catch (err) {
    exit(err as Error);
  }
}

function exit(err: Error) {
  console.error(err);
  process.exit(1);
}
