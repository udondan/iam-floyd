import {
  BindingElement,
  ClassDeclaration,
  Node,
  ParameterDeclaration,
  PropertyDeclaration,
  SourceFile,
  VariableDeclaration,
} from 'ts-morph';

import type { Callable } from '../shared';

/**
 * Operator precedence of C#, from loosest to tightest
 */
export enum Prec {
  conditional = 2,
  coalesce = 3,
  or = 4,
  and = 5,
  equality = 8,
  relational = 9,
  additive = 11,
  multiplicative = 12,
  unary = 13,
  primary = 15,
}

/**
 * A declaration of a variable, parameter or property
 */
export type Declaration =
  | ParameterDeclaration
  | VariableDeclaration
  | PropertyDeclaration
  | BindingElement;

export interface Expr {
  code: string;
  prec: Prec;
}

export function wrap(expr: Expr, min: Prec): string {
  return expr.prec < min ? `(${expr.code})` : expr.code;
}

export function primary(code: string): Expr {
  return { code, prec: Prec.primary };
}

export type { Callable, Param, Signature } from '../shared';

/**
 * Where a module level function or constant ends up: in the class of its file, or in a holder class
 */
export interface Container {
  name: string;
  namespace: string;
  /** Whether the file has a class of its own, as opposed to a holder class */
  isClass: boolean;
  declaration?: ClassDeclaration;
}

export interface CSharpTranspilerOptions {
  /** The C# namespace of a source file, including the files of the services */
  namespaceOf(file: SourceFile): string;
  /** A comment at the start of each file */
  header: string;
}

/**
 * The state of the transpiler, shared by the functions of its modules: the written files, the lines
 * of the current file, and what is known about the declarations
 */
export class Context {
  public readonly files = new Map<string, string>();
  public lines: string[] = [];
  public depth = 0;
  /** The namespaces of the classes the current file references */
  public namespaces = new Set<string>();
  /** The name of the C# class of the current file */
  public csharpClass = '';
  public classDecl?: ClassDeclaration;
  public readonly callables = new Map<Node, Callable>();
  public readonly declared = new Map<Node, string>();
  public readonly generics = new Map<ClassDeclaration, boolean>();
  /** The public methods of the classes, by the C# name of the class */
  public readonly publicMethods = new Map<string, Set<string>>();
  private dummies = 0;

  constructor(public readonly options: CSharpTranspilerOptions) {}

  /**
   * Starts a new file with the class `name`
   */
  public startFile(name: string) {
    this.lines = [];
    this.depth = 0;
    this.namespaces = new Set();
    this.csharpClass = name;
  }

  public emit(line: string) {
    this.lines.push(line.length ? `${'    '.repeat(this.depth)}${line}` : '');
  }

  public indented(fn: () => void) {
    this.depth++;
    fn();
    this.depth--;
  }

  /**
   * A block in braces on lines of their own
   */
  public braces(header: string, fn: () => void) {
    this.emit(header);
    this.emit('{');
    this.indented(fn);
    this.emit('}');
  }

  public emitLines(lines: string[]) {
    for (const line of lines) {
      this.emit(line);
    }
  }

  /**
   * A function that emits an empty line before all but the first member
   */
  public separator(): () => void {
    let first = true;
    return () => {
      if (!first) {
        this.emit('');
      }
      first = false;
    };
  }

  public dummy(prefix: string): string {
    this.dummies++;
    return `_${prefix}${this.dummies}`;
  }
}
