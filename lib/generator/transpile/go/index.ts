import { SourceFile } from 'ts-morph';

import { Context, GoTranspilerOptions } from './context';
import { sourceFile } from './source-file';

export { goDoc } from './docs';
export {
  goConstantName,
  goFileName,
  goLocalName,
  goMethodName,
  goString,
} from './names';
export type { GoTranspilerOptions };

/**
 * Transpiles TypeScript to Go. Each source file becomes a Go file. Classes become structs, which
 * embed the struct of their base class. Classes with a type parameter for the type of `this` hold
 * the statement typed as the subclass in the field `self`, and are initialized by an init
 * function. Enums and static properties become constants named `<Type>_<NAME>`.
 */
export class GoTranspiler {
  private readonly ctx: Context;

  constructor(options: GoTranspilerOptions) {
    this.ctx = new Context(options);
  }

  /**
   * Transpiles the source files. Returns the content of the Go files by their path relative to the
   * module, e.g. `statement/all.go`.
   */
  public transpile(files: SourceFile[]): Map<string, string> {
    for (const file of files) {
      sourceFile(this.ctx, file);
    }
    return this.ctx.files;
  }
}
