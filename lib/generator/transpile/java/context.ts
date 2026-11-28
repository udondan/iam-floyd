import { ClassDeclaration, EnumDeclaration, Node, SourceFile } from 'ts-morph';

import { fail } from '../index';
import type { Callable } from './callable';

export interface JavaTranspilerOptions {
  /** The Java package of a source file, including the files of the services */
  packageOf(file: SourceFile): string;
  /** A comment at the start of each file */
  header: string;
}

const jdkImports: Record<string, string> = {
  ArrayList: 'java.util.ArrayList',
  Arrays: 'java.util.Arrays',
  Collections: 'java.util.Collections',
  Instant: 'java.time.Instant',
  LinkedHashMap: 'java.util.LinkedHashMap',
  LinkedHashSet: 'java.util.LinkedHashSet',
  List: 'java.util.List',
  Locale: 'java.util.Locale',
  Map: 'java.util.Map',
  Objects: 'java.util.Objects',
  Pattern: 'java.util.regex.Pattern',
  Set: 'java.util.Set',
};

/**
 * The imports of a Java file: the classes of the JDK found in the code, without strings and
 * comments, and the classes of other packages that the code referenced
 */
function importsOf(
  body: string,
  references: Map<string, string>,
  pkg: string,
): string[] {
  const code = body
    .replace(/"(?:[^"\\]|\\.)*"/g, '""')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*/g, '');
  const imports = new Set<string>();
  for (const [simpleName, qualified] of Object.entries(jdkImports)) {
    if (new RegExp(`\\b${simpleName}\\b`).test(code)) {
      imports.add(qualified);
    }
  }
  for (const [simpleName, referencePkg] of references) {
    if (referencePkg != pkg) {
      imports.add(`${referencePkg}.${simpleName}`);
    }
  }
  return [...imports].sort().map((qualified) => `import ${qualified};`);
}

/**
 * The state of the transpiler: the files written so far, the lines of the current file, and what
 * is known about the declarations
 */
export class Context {
  public readonly files = new Map<string, string>();
  /** The name of the Java class that is written */
  public javaClass = '';
  /** The TypeScript class that is transpiled */
  public classDecl?: ClassDeclaration;
  public readonly callables = new Map<Node, Callable>();
  /** The Java types of the declarations */
  public readonly declared = new Map<Node, string>();
  /** Whether a class has a type parameter for the type of `this` */
  public readonly generics = new Map<ClassDeclaration, boolean>();
  private lines: string[] = [];
  private depth = 0;
  private references = new Map<string, string>();
  private dummies = 0;

  constructor(public readonly options: JavaTranspilerOptions) {}

  public emit(line: string) {
    this.lines.push(line.length ? `${'  '.repeat(this.depth)}${line}` : '');
  }

  public emitLines(lines: string[]) {
    for (const line of lines) {
      this.emit(line);
    }
  }

  public indented(fn: () => void) {
    this.depth++;
    fn();
    this.depth--;
  }

  /**
   * A block: the header with `{`, the indented lines that `fn` emits, and `}`
   */
  public emitBlock(header: string, fn: () => void) {
    this.emit(`${header} {`);
    this.indented(fn);
    this.emit('}');
  }

  /**
   * A name that is not used by the TypeScript code, e.g. `_entry1`
   */
  public dummy(prefix: string): string {
    this.dummies++;
    return `_${prefix}${this.dummies}`;
  }

  /**
   * Writes one Java file with the class that `fn` emits
   */
  public writeFile(node: Node, pkg: string, name: string, fn: () => void) {
    const path = `${pkg.replace(/\./g, '/')}/${name}.java`;
    if (this.files.has(path)) {
      fail(node, `Java class ${pkg}.${name} is already declared`);
    }
    this.lines = [];
    this.depth = 0;
    this.references = new Map();
    this.javaClass = name;
    fn();
    const body = this.lines.join('\n');
    const imports = importsOf(body, this.references, pkg);
    this.files.set(
      path,
      `${[
        `// ${this.options.header}`,
        `package ${pkg};`,
        '',
        ...(imports.length ? [...imports, ''] : []),
        body,
      ].join('\n')}\n`,
    );
  }

  /**
   * Refers to a class by its simple name, which imports it if it is in another package
   */
  public reference(node: Node, name: string, pkg: string): string {
    const existing = this.references.get(name);
    if (existing !== undefined && existing != pkg) {
      fail(node, `Two classes named ${name} are referenced`);
    }
    this.references.set(name, pkg);
    return name;
  }

  public classReference(
    node: Node,
    declaration: ClassDeclaration | EnumDeclaration,
  ): string {
    const name = Node.isClassDeclaration(declaration)
      ? className(declaration)
      : declaration.getName();
    return this.reference(
      node,
      name,
      this.options.packageOf(declaration.getSourceFile()),
    );
  }
}

export function className(declaration: ClassDeclaration): string {
  const name = declaration.getName();
  if (name === undefined) {
    return fail(declaration, 'Classes must have a name');
  }
  return name;
}
