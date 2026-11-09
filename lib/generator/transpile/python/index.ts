import { SourceFile } from 'ts-morph';

import { Context } from './context';
import { moduleCode, sourceFile } from './module';

export {
  pythonConstantName,
  pythonName,
  pythonServiceModule,
  snakeCase,
} from './names';
export { docstring, pyString } from './strings';

export class PythonTranspiler {
  private readonly ctx = new Context();

  /**
   * Transpiles the source files into one Python module, in the given order
   */
  public transpile(files: SourceFile[], header: string): string {
    for (const file of files) {
      sourceFile(this.ctx, file);
    }
    return moduleCode(this.ctx, header);
  }
}
