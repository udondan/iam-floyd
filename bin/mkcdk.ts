#!/usr/bin/env node
import { ts } from '@ts-morph/common';
import fs = require('fs');
import path = require('path');
import { Project, Scope, SourceFile } from 'ts-morph';

const lib = path.join(__dirname, '../lib');

async function run() {
  const project = new Project();

  const files = fs.readdirSync(`${lib}/generated`);

  const policyStatementFile = project.addSourceFileAtPath(
    `${lib}/shared/policy-statement.ts`
  );

  policyStatementFile.addImportDeclaration({
    namespaceImport: 'iam',
    moduleSpecifier: '@aws-cdk/aws-iam',
  });

  const policyStatementClass = policyStatementFile!.getClasses()[0];
  policyStatementClass.setExtends('iam.PolicyStatement');
  policyStatementClass.getConstructors()[0].remove();
  policyStatementClass.getMethod('toJSON')?.remove();

  const toStatementJson = policyStatementClass.addMethod({
    name: 'toStatementJson',
    scope: Scope.Public,
  });
  toStatementJson.setBodyText(
    [
      'if (!this.hasResources()) {',
      "  this.resources.push('*');",
      '}',
      '', // TODO: Principals
      'this.useNotActions && super.addNotActions(...this.actions);',
      'this.useNotActions || super.addActions(...this.actions);',
      'this.useNotResources && super.addNotResources(...this.resources);',
      'this.useNotResources || super.addResources(...this.resources);',
      'super.addConditions(this.conditions);',
      'return super.toStatementJson();',
    ].join('\n')
  );

  toStatementJson.addJsDoc({
    description: '\nUsed when JSON.stringify() is called',
  });
  formatCode(policyStatementFile);

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
