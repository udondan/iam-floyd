import { SourceFile } from 'ts-morph';

import { Context, JavaTranspilerOptions } from './context';
import { sourceFile } from './files';

export type { JavaTranspilerOptions } from './context';
export { javadoc, javadocText } from './javadoc';
export {
  javaConstantName,
  javaLocalName,
  javaMethodName,
  javaString,
} from './names';
export { withoutTypeArguments } from './types';

/**
 * Transpiles TypeScript to Java. Each class and enum becomes a file of its own; module level
 * functions and constants go into the class of their file, or into a package-private holder class
 * named after the file.
 */
export class JavaTranspiler {
  private readonly ctx: Context;

  constructor(options: JavaTranspilerOptions) {
    this.ctx = new Context(options);
  }

  /**
   * Transpiles the source files. Returns the content of the Java files by their path, e.g.
   * `com/example/Foo.java`.
   */
  public transpile(files: SourceFile[]): Map<string, string> {
    for (const file of files) {
      sourceFile(this.ctx, file);
    }
    return this.ctx.files;
  }
}
