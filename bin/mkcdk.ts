#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';
import { Project } from 'ts-morph';

import { formatCode } from '../lib/generator/format';

const lib = path.join(__dirname, '../lib');

type Packages = Record<string, string>;

async function run() {
  const args = process.argv.slice(2);

  const doFileSwap = !args.length || args.includes('--swap');
  const doPackageJson = !args.length || args.includes('--package-json');
  const doFixPolicyStatement =
    !args.length || args.includes('--fix-policy-statement');
  const doFixModule = !args.length || args.includes('--fix-module');

  if (doFileSwap) swapFiles();
  if (doPackageJson) preparePackageJson();

  const project = new Project();

  if (doFixPolicyStatement) fixPolicyStatement(project);

  if (doFixModule) {
    const files = fs.readdirSync(`${lib}/generated`);
    files.forEach(async (file) => {
      if (file == '.cache') return;
      if (file == 'index.ts') return;
      if (file == 'aws-managed-policies.ts') return;
      if (!file.endsWith('.ts')) return;
      if (file.endsWith('.d.ts')) return;

      file = `${lib}/generated/${file}`;
      console.log(`Processing ${file}`);

      fixModule(project, file);
    });

    fixModule(project, `${lib}/shared/all.ts`);
  }

  await project.save();
  console.log('done');
}
try {
  run();
} catch (error: any) {
  throw error;
}

function fixPolicyStatement(project: Project) {
  try {
    // loop over files in ../lib/shared/policy-statement:
    for (const fileName of fs.readdirSync(`${lib}/shared/policy-statement`)) {
      if (fileName.endsWith('.ts') && !fileName.endsWith('.d.ts')) {
        const file = path.join(
          __dirname,
          '../lib/shared/policy-statement',
          fileName,
        );

        const sourceFile = project.addSourceFileAtPath(file);

        if (fileName === 'index.ts') {
          sourceFile.addExportDeclaration({
            namedExports: ['PolicyStatementWithCDKPrincipal'],
            moduleSpecifier: './9-principals-CDK',
          });

          sourceFile.getExportDeclarations().forEach((exportDeclaration) => {
            exportDeclaration.getNamedExports().forEach((exportItem) => {
              if (exportItem.getName() == 'Effect') {
                console.log('Removing Effect export...');
                exportItem.remove();
              }
            });
          });
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
  } catch (error: any) {
    throw error;
  }
}

function fixModule(project: Project, file: string) {
  try {
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
  } catch (error: any) {
    throw error;
  }
}

function preparePackageJson() {
  const file = path.join(__dirname, '../package.json');
  const jsonData = require(file);

  jsonData.name = 'cdk-iam-floyd';
  jsonData.description += ' for AWS CDK';
  (jsonData.keywords as string[]).push('cdk', 'aws-cdk');

  (jsonData.devDependencies as Packages)['aws-cdk-lib'] = '^2.0.0';
  (jsonData.devDependencies as Packages).constructs = '^10.0.0';
  jsonData.peerDependencies = {
    'aws-cdk-lib': '^2.0.0',
    constructs: '^10.0.0',
  };

  fs.writeFileSync(file, JSON.stringify(jsonData, null, 2));
}

function swapFiles() {
  const dir = `${lib}/shared/policy-statement`;
  const files = fs.readdirSync(dir);
  files.forEach(async (file) => {
    if (!file.endsWith('.CDK.ts')) return;
    const parts = file.split('.');
    parts.splice(1, 1);
    swapFile(`${dir}/${file}`, `${dir}/${parts.join('.')}`);
  });
}

function swapFile(src: string, dest: string) {
  console.log(`Going to replace ${dest} with ${src}`);
  deleteFile(dest);
  renameFile(src, dest);
}

function deleteFile(path: string) {
  try {
    fs.unlinkSync(path);
  } catch (err: any) {
    exit(err);
  }
}

function renameFile(src: string, dest: string) {
  try {
    fs.renameSync(src, dest);
  } catch (err: any) {
    exit(err);
  }
}

function exit(err: Error) {
  console.error(err);
  process.exit(1);
}
