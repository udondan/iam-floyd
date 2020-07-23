#!/usr/bin/env node
import { ts } from '@ts-morph/common';
import fs = require('fs');
import path = require('path');
import { Project, SourceFile } from 'ts-morph';

const lib = path.join(__dirname, '../lib');

async function run() {
  swapFiles();
  preparePackageJson();

  const project = new Project();
  const files = fs.readdirSync(`${lib}/generated`);
  files.forEach(async (file) => {
    if (file == '.cache') return;
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

function formatCode(file: SourceFile) {
  file.formatText({
    ensureNewLineAtEndOfFile: true,
    insertSpaceAfterCommaDelimiter: true,
    insertSpaceAfterSemicolonInForStatements: true,
    insertSpaceBeforeAndAfterBinaryOperators: true,
    insertSpaceAfterConstructor: true,
    insertSpaceAfterKeywordsInControlFlowStatements: true,
    insertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
    insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
    insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
    insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
    insertSpaceAfterOpeningAndBeforeClosingEmptyBraces: false,
    insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: true,
    insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: true,
    insertSpaceAfterTypeAssertion: true,
    insertSpaceBeforeFunctionParenthesis: false,
    placeOpenBraceOnNewLineForFunctions: false,
    placeOpenBraceOnNewLineForControlBlocks: false,
    insertSpaceBeforeTypeAnnotation: false,
    indentMultiLineObjectLiteralBeginningOnBlankLine: true,
    semicolons: ts.SemicolonPreference.Insert,
    indentSize: 2,
    trimTrailingWhitespace: true,
  });
}

function fixModule(project: Project, file: string) {
  try {
    const sourceFile = project.addSourceFileAtPath(file);
    const classDeclaration = sourceFile!.getClasses()[0];

    sourceFile.addImportDeclaration({
      namedImports: ['PolicyStatementProps'],
      moduleSpecifier: '@aws-cdk/aws-iam',
    });
    const oldConstructoor = classDeclaration.getConstructors()[0];
    const desc = oldConstructoor.getJsDocs()[0].getDescription();

    oldConstructoor.remove();
    const constructor = classDeclaration.addConstructor({});
    constructor.addParameter({
      name: 'props',
      type: 'PolicyStatementProps',
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

  jsonData.jsii.targets = {
    python: {
      distName: 'cdk-iam-floyd',
      module: 'cdk_iam_floyd',
    },
    dotnet: {
      namespace: 'CDK.IAM.Floyd',
      packageId: 'CDK.IAM.Floyd',
    },
    java: {
      package: 'com.udondan.iamFloyd.cdk',
      maven: {
        groupId: 'com.udondan',
        artifactId: 'cdk-iam-floyd',
      },
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
