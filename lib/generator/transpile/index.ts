import * as path from 'path';
import {
  ArrowFunction,
  Node,
  Project,
  SourceFile,
  SyntaxKind,
  Type,
} from 'ts-morph';

/**
 * The transpiler supports only the subset of TypeScript that the core in `lib/shared/` uses. Everything else fails
 * the build with the location of the unsupported construct, so the core cannot silently diverge between languages.
 */
export class TranspileError extends Error {}

export function fail(node: Node, message: string): never {
  const file = path.relative(process.cwd(), node.getSourceFile().getFilePath());
  const text = node.getText().split('\n')[0];
  throw new TranspileError(
    `${file}:${node.getStartLineNumber()}: ${message}: ${text}`,
  );
}

/**
 * The generated service classes, which the transpiled modules import from the emitted package
 */
export function isServiceFile(file: SourceFile): boolean {
  return path
    .relative(process.cwd(), file.getFilePath())
    .startsWith(
      `lib${path.sep}generated${path.sep}policy-statements${path.sep}`,
    );
}

/**
 * Loads the files reachable from the entry, dependencies first. Imports of the generated service
 * classes are not followed, all others must be part of the transpiled module.
 */
function sourceFiles(entryPath: string): SourceFile[] {
  const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
    skipAddingFilesFromTsConfig: true,
  });
  const entry = project.addSourceFileAtPath(entryPath);
  project.resolveSourceFileDependencies();
  const root = entry.getDirectoryPath();

  const ordered: SourceFile[] = [];
  const visiting = new Set<SourceFile>();
  const visit = (file: SourceFile) => {
    if (ordered.includes(file)) {
      return;
    }
    if (visiting.has(file)) {
      fail(file, 'Circular import');
    }
    visiting.add(file);
    for (const declaration of [
      ...file.getImportDeclarations(),
      ...file.getExportDeclarations(),
    ]) {
      const target = declaration.getModuleSpecifierSourceFile();
      if (target === undefined) {
        fail(declaration, 'Unresolved import');
      }
      if (isServiceFile(target)) {
        continue;
      }
      if (!target.getFilePath().startsWith(`${root}/`)) {
        fail(declaration, 'Imports are supported only from the same module');
      }
      visit(target);
    }
    ordered.push(file);
  };
  visit(entry);
  return ordered;
}

/**
 * Loads the standalone core: the files reachable from `lib/shared/index.ts`, dependencies first
 */
export function coreSourceFiles(): SourceFile[] {
  return sourceFiles('lib/shared/index.ts');
}

/**
 * Loads the collection: the files reachable from `lib/collection/index.ts`, dependencies first
 */
export function collectionSourceFiles(): SourceFile[] {
  return sourceFiles('lib/collection/index.ts');
}

/**
 * Loads the names of the AWS managed policies of the standalone package
 */
export function managedPoliciesSourceFiles(): SourceFile[] {
  return sourceFiles('lib/generated/aws-managed-policies/iam-floyd.ts');
}

/**
 * Loads the names of the AWS service principals
 */
export function servicePrincipalsSourceFiles(): SourceFile[] {
  return sourceFiles('lib/generated/aws-service-principals/index.ts');
}

export type Kind =
  | 'any'
  | 'string'
  | 'number'
  | 'boolean'
  | 'array'
  | 'map'
  | 'set'
  | 'record'
  | 'date'
  | 'regexp'
  | 'class'
  | 'undefined'
  | 'mixed';

/**
 * What a value is at runtime, which decides how operations on it are translated
 */
export function kindOf(type: Type): Kind {
  if (type.isAny()) {
    return 'any';
  }
  if (type.isUndefined() || type.isNull()) {
    return 'undefined';
  }
  type = type.getNonNullableType();
  if (type.isUnion()) {
    const kinds = new Set(type.getUnionTypes().map((part) => kindOf(part)));
    return kinds.size == 1 ? [...kinds][0] : 'mixed';
  }
  if (
    type.isString() ||
    type.isStringLiteral() ||
    type.isTemplateLiteral() ||
    type.isEnum() ||
    type.isEnumLiteral()
  ) {
    return 'string';
  }
  if (type.isNumber() || type.isNumberLiteral()) {
    return 'number';
  }
  if (type.isBoolean() || type.isBooleanLiteral()) {
    return 'boolean';
  }
  if (type.isArray() || type.isTuple()) {
    return 'array';
  }
  const symbol = type.getSymbol();
  switch (symbol?.getName()) {
    case 'Map':
      return 'map';
    case 'Set':
      return 'set';
    case 'Date':
      return 'date';
    case 'RegExp':
      return 'regexp';
  }
  if (
    symbol
      ?.getDeclarations()
      .some((declaration) => Node.isClassDeclaration(declaration))
  ) {
    return 'class';
  }
  if (type.isObject() && !type.isInterface()) {
    return 'record';
  }
  return 'mixed';
}

export function arrowFunction(node: Node): ArrowFunction {
  if (!Node.isArrowFunction(node)) {
    return fail(node, 'Callbacks must be arrow functions');
  }
  if (node.isAsync()) {
    fail(node, 'Async callbacks are not supported');
  }
  return node;
}

/**
 * Whether an expression can be evaluated twice
 */
export function isPure(node: Node): boolean {
  if (
    Node.isIdentifier(node) ||
    Node.isStringLiteral(node) ||
    Node.isNumericLiteral(node) ||
    node.getKind() == SyntaxKind.ThisKeyword
  ) {
    return true;
  }
  if (
    Node.isPropertyAccessExpression(node) ||
    Node.isNonNullExpression(node) ||
    Node.isParenthesizedExpression(node)
  ) {
    return isPure(node.getExpression());
  }
  if (Node.isElementAccessExpression(node)) {
    return (
      isPure(node.getExpression()) &&
      isPure(node.getArgumentExpressionOrThrow())
    );
  }
  return false;
}

/**
 * The declarations of an identifier, following imports
 */
export function resolve(node: Node): Node[] {
  const symbol = node.getSymbol();
  if (symbol === undefined) {
    return [];
  }
  return (symbol.getAliasedSymbol() ?? symbol).getDeclarations();
}
