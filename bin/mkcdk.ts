#!/usr/bin/env node
import fs = require('fs');
import path = require('path');
import { Project } from 'ts-morph';

import { formatCode } from '../lib/generator/format';

const lib = path.join(__dirname, '../lib');

interface Packages {
  [key: string]: string;
}

async function run() {
  swapFiles();
  preparePackageJson();

  const project = new Project();

  fixIndex(project);

  const files = fs.readdirSync(`${lib}/generated`);
  files.forEach(async (file) => {
    if (file == '.cache') return;
    if (file == 'index.ts') return;
    if (!file.endsWith('.ts')) return;
    if (file.endsWith('.d.ts')) return;

    file = `${lib}/generated/${file}`;
    console.log(`Processing ${file}`);

    fixModule(project, file);
  });

  fixModule(project, `${lib}/shared/all.ts`);

  await project.save();
  console.log('done');
}
try {
  run();
} catch (e) {
  throw e;
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
  } catch (e) {
    throw e;
  }
}

function fixModule(project: Project, file: string) {
  try {
    const sourceFile = project.addSourceFileAtPath(file);
    const classDeclaration = sourceFile!.getClasses()[0];
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
  } catch (e) {
    throw e;
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
  } catch (err) {
    exit(err);
  }
}

function renameFile(src: string, dest: string) {
  try {
    fs.renameSync(src, dest);
  } catch (err) {
    exit(err);
  }
}

function exit(err: Error) {
  console.error(err);
  process.exit(1);
}
