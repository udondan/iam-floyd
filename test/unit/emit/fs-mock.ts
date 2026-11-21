import type * as fs from 'fs';

/**
 * Virtual files, which `readFileSync` returns in place of the real ones
 */
export const virtualFiles = new Map<string, string>();

/**
 * Virtual directories, which `readdirSync` returns in place of the real ones
 */
export const virtualDirs = new Map<string, string[]>();

/**
 * The files written with `writeFileSync`, which writes nothing
 */
export const written = new Map<string, string>();

/**
 * The calls of `mkdirSync`, `rmSync` and `unlinkSync`, which change nothing
 */
export const changes: string[] = [];

export function reset(): void {
  virtualFiles.clear();
  virtualDirs.clear();
  written.clear();
  changes.length = 0;
}

/**
 * The module `fs`, which reads the virtual files and directories (else the real ones) and writes
 * nothing. Use it with `vi.mock('fs', async (importOriginal) => (await import('./fs-mock')).mockFs(await importOriginal()))`.
 */
export function mockFs(actual: typeof fs) {
  const readdirSync = ((path: fs.PathLike, ...rest: unknown[]) =>
    virtualDirs.get(String(path)) ??
    (actual.readdirSync as (...args: unknown[]) => unknown)(
      path,
      ...rest,
    )) as typeof fs.readdirSync;
  const readFileSync = ((path: fs.PathOrFileDescriptor, ...rest: unknown[]) =>
    virtualFiles.get(String(path)) ??
    (actual.readFileSync as (...args: unknown[]) => unknown)(
      path,
      ...rest,
    )) as typeof fs.readFileSync;
  const mocked = {
    ...actual,
    readdirSync,
    readFileSync,
    writeFileSync: (path: fs.PathOrFileDescriptor, data: unknown) => {
      written.set(String(path), String(data));
    },
    mkdirSync: (path: fs.PathLike) => {
      changes.push(`mkdir ${String(path)}`);
      return undefined;
    },
    rmSync: (path: fs.PathLike) => {
      changes.push(`rm ${String(path)}`);
    },
    unlinkSync: (path: fs.PathLike) => {
      changes.push(`unlink ${String(path)}`);
    },
  };
  return { ...mocked, default: mocked };
}
