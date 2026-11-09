import { Project, SourceFile } from 'ts-morph';

/**
 * Creates the files in memory, as they would be in the repository (e.g. `lib/shared/index.ts`),
 * and returns them in the given order, which the transpilers expect to be dependencies first
 */
export function sourceFiles(files: Record<string, string>): SourceFile[] {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: { strict: true, target: 7 /* ES2020 */ },
  });
  const created = Object.entries(files).map(([path, text]) =>
    project.createSourceFile(`${process.cwd()}/${path}`, text),
  );
  project.resolveSourceFileDependencies();
  return created;
}

/**
 * A single file `lib/shared/index.ts` with the given code
 */
export function sourceFile(code: string): SourceFile[] {
  return sourceFiles({ 'lib/shared/index.ts': code });
}

let reusedProject: Project | undefined;

/**
 * Like `sourceFiles`, but in one project that is reused across calls (the files of the previous call
 * are removed), which saves loading the default library for each snippet. The language service
 * does not see the replaced files: `getDerivedClasses()` finds no subclasses, use `sourceFiles`
 * for snippets with subclasses.
 */
export function reusedSourceFiles(files: Record<string, string>): SourceFile[] {
  reusedProject ??= new Project({
    useInMemoryFileSystem: true,
    compilerOptions: { strict: true, target: 7 /* ES2020 */ },
  });
  const project = reusedProject;
  for (const file of project.getSourceFiles()) {
    project.removeSourceFile(file);
  }
  const created = Object.entries(files).map(([path, text]) =>
    project.createSourceFile(`${process.cwd()}/${path}`, text),
  );
  project.resolveSourceFileDependencies();
  return created;
}
