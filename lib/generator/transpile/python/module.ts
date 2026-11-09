import {
  ImportDeclaration,
  Node,
  SourceFile,
  Statement,
  SyntaxKind,
  VariableDeclarationKind,
  VariableStatement,
} from 'ts-morph';

import { fail, isServiceFile } from '../index';
import {
  classDeclaration,
  enumDeclaration,
  functionDeclaration,
} from './declarations';
import { Context, dispatch, Handler, on } from './context';
import { emitDocstring } from './docs';
import { expression } from './expressions';
import { moduleConstantName, pythonServiceModule } from './names';

/**
 * The imports of the runtime libraries, by the name that the code registers in the context
 */
const libraryImports: [string, string][] = [
  ['datetime', 'import datetime as _datetime'],
  ['re', 'import re as _re'],
];

/**
 * The whole Python module: the header, the imports that the code needs and the code
 */
export function moduleCode(ctx: Context, header: string): string {
  const body = ctx.lines;
  const imports = moduleImports(ctx, body.join('\n'));
  return `${[`# ${header}`, ...imports, ...body].join('\n').replace(/\n{4,}/g, '\n\n\n')}\n`;
}

function moduleImports(ctx: Context, code: string): string[] {
  const imports: string[] = ['from __future__ import annotations', ''];
  for (const [name, line] of libraryImports) {
    if (ctx.imports.has(name)) {
      imports.push(line);
    }
  }
  const usesSelf = ctx.imports.has('Self');
  imports.push(...typingImports(ctx, usesSelf));
  if (/\b_js\./.test(code)) {
    // the hand-written runtime with the JavaScript semantics that Python lacks
    imports.push('from . import _js');
  }
  imports.push(...serviceImports(ctx));
  if (usesSelf) {
    imports.push(
      '',
      'if TYPE_CHECKING:',
      '    from typing_extensions import Self',
    );
  }
  return imports;
}

function typingImports(ctx: Context, usesSelf: boolean): string[] {
  const typing = usesSelf ? ['TYPE_CHECKING'] : [];
  if (ctx.imports.has('Any')) {
    typing.push('Any');
  }
  return typing.length ? [`from typing import ${typing.join(', ')}`, ''] : [];
}

/**
 * The imports of the service classes, sorted like isort does
 */
function serviceImports(ctx: Context): string[] {
  return [...ctx.serviceImports]
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(
      ([module, names]) =>
        `from ${module} import ${[...names].sort().join(', ')}`,
    );
}

/**
 * Imports of the generated service classes become imports of the emitted modules
 */
function importDeclaration(ctx: Context, declaration: ImportDeclaration) {
  const target = declaration.getModuleSpecifierSourceFile();
  if (target === undefined || !isServiceFile(target)) {
    return;
  }
  if (
    declaration.getDefaultImport() !== undefined ||
    declaration.getNamespaceImport() !== undefined
  ) {
    fail(declaration, 'Only named imports of services are supported');
  }
  const module = `.statement.${pythonServiceModule(target.getBaseNameWithoutExtension())}`;
  const names = ctx.serviceImports.get(module) ?? new Set<string>();
  for (const specifier of declaration.getNamedImports()) {
    if (specifier.getAliasNode() !== undefined) {
      fail(specifier, 'Aliased imports are not supported');
    }
    names.add(specifier.getName());
  }
  ctx.serviceImports.set(module, names);
}

function moduleConstants(ctx: Context, statement: VariableStatement) {
  for (const declaration of statement.getDeclarations()) {
    const initializer = declaration.getInitializer();
    if (
      statement.getDeclarationKind() != VariableDeclarationKind.Const ||
      !initializer
    ) {
      fail(declaration, 'Module level variables must be constants');
    }
    const name = ctx.register(
      declaration,
      moduleConstantName(declaration.getName(), statement.isExported()),
    );
    ctx.emit(`${name} = ${expression(ctx, initializer).code}`);
    emitDocstring(ctx, statement);
  }
}

/**
 * The declarations of types only, which have no code in Python
 */
const typeDeclarations = new Set([
  SyntaxKind.ExportDeclaration,
  SyntaxKind.InterfaceDeclaration,
  SyntaxKind.TypeAliasDeclaration,
]);

const declarations = new Map<SyntaxKind, Handler<void>>([
  on(SyntaxKind.ClassDeclaration, (ctx, node) => classDeclaration(ctx, node)),
  on(SyntaxKind.EnumDeclaration, (ctx, node) => enumDeclaration(ctx, node)),
  on(SyntaxKind.FunctionDeclaration, (ctx, node) =>
    functionDeclaration(ctx, node),
  ),
  on(SyntaxKind.VariableStatement, moduleConstants),
]);

function moduleStatement(ctx: Context, statement: Statement) {
  if (Node.isImportDeclaration(statement)) {
    importDeclaration(ctx, statement);
    return;
  }
  if (typeDeclarations.has(statement.getKind())) {
    return;
  }
  ctx.emit('');
  ctx.emit('');
  dispatch(
    declarations,
    ctx,
    statement,
    'Unsupported statement at module level',
  );
}

export function sourceFile(ctx: Context, file: SourceFile) {
  for (const statement of file.getStatements()) {
    moduleStatement(ctx, statement);
  }
}
