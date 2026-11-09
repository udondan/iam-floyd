import {
  FunctionDeclaration,
  Node,
  SourceFile,
  Statement,
  VariableStatement,
} from 'ts-morph';

import { fail } from '../index';
import { classDeclaration } from './class-declaration';
import { className } from './classes';
import { enumDeclaration } from './constants';
import { Context } from './context';
import { moduleMember } from './functions';
import { goFileName, goString } from './names';

type ModuleMember = FunctionDeclaration | VariableStatement;

/**
 * Transpiles a source file into a Go file, unless it has only types
 */
export function sourceFile(ctx: Context, file: SourceFile) {
  ctx.startFile(file);
  const members: ModuleMember[] = [];
  for (const statement of file.getStatements()) {
    moduleStatement(ctx, statement, members);
  }
  // the functions and constants come after the types
  for (const member of members) {
    ctx.separate();
    moduleMember(ctx, member);
  }
  if (ctx.lines.length) {
    writeFile(ctx, file);
  }
}

function isTypeOnly(statement: Statement): boolean {
  return (
    Node.isImportDeclaration(statement) ||
    Node.isExportDeclaration(statement) ||
    Node.isInterfaceDeclaration(statement) ||
    Node.isTypeAliasDeclaration(statement)
  );
}

function moduleStatement(
  ctx: Context,
  statement: Statement,
  members: ModuleMember[],
) {
  if (isTypeOnly(statement)) {
    return;
  }
  if (Node.isEnumDeclaration(statement)) {
    ctx.separate();
    enumDeclaration(ctx, statement);
  } else if (Node.isClassDeclaration(statement)) {
    ctx.separate();
    classDeclaration(ctx, statement);
  } else if (
    Node.isFunctionDeclaration(statement) ||
    Node.isVariableStatement(statement)
  ) {
    members.push(statement);
  } else {
    fail(statement, 'Unsupported statement at module level');
  }
}

function writeFile(ctx: Context, file: SourceFile) {
  const classes = file.getClasses();
  const name = goFileName(
    classes.length ? className(classes[0]) : file.getBaseNameWithoutExtension(),
  );
  const dir = ctx.pkg == ctx.options.rootPackage ? '' : `${ctx.pkg}/`;
  const path = `${dir}${name}`;
  if (ctx.files.has(path)) {
    fail(file, `Go file ${path} is already written`);
  }
  const body = ctx.lines.join('\n');
  ctx.files.set(
    path,
    `${[
      `// ${ctx.options.header}`,
      '',
      `package ${ctx.pkg}`,
      '',
      ...importLines(imports(ctx, body)),
      body,
    ].join('\n')}\n`,
  );
}

const standardPackages = ['errors', 'regexp', 'strings', 'sync', 'time'];
const modulePackages = ['collection', 'iamfloyd', 'statement'];

/**
 * The packages the code uses, found without strings and comments
 */
function imports(ctx: Context, body: string): string[] {
  const code = body.replace(/"(?:[^"\\]|\\.)*"/g, '""').replace(/\/\/.*/g, '');
  const uses = (pkg: string) => new RegExp(`\\b${pkg}\\.`).test(code);
  const module = ctx.options.modulePath;
  const result = standardPackages.filter(uses);
  if (uses('js')) {
    result.push(`${module}/internal/js`);
  }
  for (const pkg of modulePackages.filter((p) => p != ctx.pkg && uses(p))) {
    result.push(pkg == ctx.options.rootPackage ? module : `${module}/${pkg}`);
  }
  return result;
}

function importLines(paths: string[]): string[] {
  if (paths.length == 0) {
    return [];
  }
  return ['import (', ...paths.map((path) => `\t${goString(path)}`), ')', ''];
}
