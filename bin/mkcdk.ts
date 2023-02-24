#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';
import { Project } from 'ts-morph';

import { formatCode } from '../lib/generator/format';

const lib = path.join(__dirname, '../lib');

interface Packages {
  [key: string]: string;
}

async function run() {
  const args = process.argv.slice(2);

  const doFileSwap = !args.length || args.includes('--swap');
  const doPackageJson = !args.length || args.includes('--package-json');
  const doFixIndex = !args.length || args.includes('--fix-index');

  if (doFileSwap) swapFiles();
  if (doPackageJson) preparePackageJson();

  const project = new Project();

  if (doFixIndex) fixIndex(project);

  await project.save();
  console.log('done');
}
try {
  run();
} catch (error: any) {
  throw error;
}

function fixIndex(project: Project) {
  try {
    const file = path.join(
      __dirname,
      '../lib/shared/policy-statement/index.ts'
    );
    const sourceFile = project.addSourceFileAtPath(file);

    sourceFile.addExportDeclaration({
      namedExports: ['PolicyStatementWithCDKPrincipal'],
      moduleSpecifier: './7-principals-CDK',
    });

    sourceFile.getExportDeclarations().forEach((exportDeclaration) => {
      exportDeclaration.getNamedExports().forEach((exportItem) => {
        if (exportItem.getName() == 'Effect') {
          console.log('Removing Effect export...');
          exportItem.remove();
        }
      });
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
  (jsonData.devDependencies as Packages)['constructs'] = '^10.0.0';
  jsonData.peerDependencies = {
    'aws-cdk-lib': '^2.0.0',
    constructs: '^10.0.0',
  };

  var excludes = jsonData.jsii.excludeTypescript as string[];
  jsonData.jsii.excludeTypescript = excludes.filter(function (el) {
    return el.indexOf('CDK') < 0;
  });

  jsonData.jsii.targets = {
    python: {
      distName: 'cdk-iam-floyd',
      module: 'cdk_iam_floyd',
    },
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
