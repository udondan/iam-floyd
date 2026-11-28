import { describe, expect, it } from 'vitest';

import { formatCode } from '../../lib/generator/format';
import { sourceFile } from './helpers';

describe('formatCode', () => {
  it('formats the code with 2 spaces, semicolons and a trailing newline', () => {
    const [file] = sourceFile(
      'export class Foo{\n    public bar(a:string,b:number){if(a){return b+1}\n    return {a,b}  }\n}',
    );
    formatCode(file);
    expect(file.getFullText()).toBe(
      [
        'export class Foo {',
        '  public bar(a: string, b: number) {',
        '    if (a) { return b + 1; }',
        '    return { a, b };',
        '  }',
        '}',
        '',
      ].join('\n'),
    );
  });

  it('formats functions and empty braces', () => {
    const [file] = sourceFile(
      'const f = function(x: number) {return x}\nconst o = { }\n',
    );
    formatCode(file);
    expect(file.getFullText()).toBe(
      'const f = function (x: number) { return x; };\nconst o = {};\n',
    );
  });
});
