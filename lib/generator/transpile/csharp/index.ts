import { SourceFile } from 'ts-morph';

import { Context, CSharpTranspilerOptions } from './context';
import { sourceFile } from './files';

export type { CSharpTranspilerOptions } from './context';
export {
  csharpConstantName,
  csharpLocalName,
  csharpMethodName,
  csharpString,
} from './names';
export { xmlDoc, xmlDocText, xmlParam } from './xml';

/**
 * Transpiles TypeScript to C#. The work is done by the functions of the modules of this directory,
 * which share the state in a `Context`.
 */
export class CSharpTranspiler {
  private readonly context: Context;

  /** The public methods of the classes, by the C# name of the class */
  public readonly publicMethods: Map<string, Set<string>>;

  constructor(options: CSharpTranspilerOptions) {
    this.context = new Context(options);
    this.publicMethods = this.context.publicMethods;
  }

  /**
   * Transpiles the source files. Returns the content of the C# files by their path relative to the
   * root namespace, e.g. `Statement/All.cs`.
   */
  public transpile(
    files: SourceFile[],
    rootNamespace: string,
  ): Map<string, string> {
    for (const file of files) {
      sourceFile(this.context, file, rootNamespace);
    }
    return this.context.files;
  }
}
