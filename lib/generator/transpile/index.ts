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
 * Loads the standalone core: the files reachable from `lib/shared/index.ts`, dependencies first
 */
export function coreSourceFiles(): SourceFile[] {
  const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
    skipAddingFilesFromTsConfig: true,
  });
  const entry = project.addSourceFileAtPath('lib/shared/index.ts');
  project.resolveSourceFileDependencies();

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
        fail(declaration, 'Imports are supported only from the core');
      }
      visit(target);
    }
    ordered.push(file);
  };
  visit(entry);
  return ordered;
}
