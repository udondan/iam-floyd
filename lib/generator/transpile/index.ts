import * as path from 'path';
import { Node, Project, SourceFile } from 'ts-morph';

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
