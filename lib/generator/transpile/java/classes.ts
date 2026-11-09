import { ClassDeclaration, Node } from 'ts-morph';

import { fail, isServiceFile } from '../index';
import { className, Context } from './context';

/**
 * Where a module level function or constant ends up: in the class of its file, or in a holder class
 */
export interface Container {
  name: string;
  pkg: string;
  /** Whether the file has a class of its own, as opposed to a holder class */
  isClass: boolean;
}

export const oneClassPerFile =
  'Functions and constants are supported only in files with at most one class';

/**
 * The class of a module level function or constant
 */
export function containerOf(ctx: Context, node: Node): Container {
  const file = node.getSourceFile();
  const classes = file.getClasses();
  const pkg = ctx.options.packageOf(file);
  if (classes.length > 1) {
    return fail(node, oneClassPerFile);
  }
  if (classes.length == 1) {
    return { name: className(classes[0]), pkg, isClass: true };
  }
  const name = file
    .getBaseNameWithoutExtension()
    .split(/[^a-zA-Z0-9]+/)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('');
  return { name, pkg, isClass: false };
}

/**
 * A module level function or constant, qualified with its class unless it is in the current one
 */
export function memberOf(
  ctx: Context,
  node: Node,
  container: Container,
  member: string,
): string {
  if (container.name == ctx.javaClass) {
    return member;
  }
  return `${ctx.reference(node, container.name, container.pkg)}.${member}`;
}

/**
 * The visibility of a module level function or constant, with a trailing space if any: public or
 * protected in the class of the file, package-private or private in a holder class
 */
export function memberVisibility(
  container: Container,
  exported: boolean,
): string {
  const [visible, hidden] = container.isClass
    ? ['public ', 'protected ']
    : ['', 'private '];
  return exported ? visible : hidden;
}

function returnsThis(declaration: ClassDeclaration): boolean {
  for (
    let cls: ClassDeclaration | undefined = declaration;
    cls;
    cls = cls.getBaseClass()
  ) {
    if (
      cls
        .getMethods()
        .some((method) => method.getReturnType().getText() == 'this')
    ) {
      return true;
    }
  }
  return false;
}

/**
 * Whether a class has a type parameter for the type of `this`: classes that are extended, and
 * have methods that return `this`
 */
export function isGeneric(
  ctx: Context,
  declaration: ClassDeclaration,
): boolean {
  let generic = ctx.generics.get(declaration);
  if (generic === undefined) {
    generic =
      !isServiceFile(declaration.getSourceFile()) &&
      declaration.getDerivedClasses().length > 0 &&
      returnsThis(declaration);
    ctx.generics.set(declaration, generic);
  }
  return generic;
}

/**
 * Whether the base class of a class has a type parameter for the type of `this`
 */
export function hasGenericBase(
  ctx: Context,
  declaration: ClassDeclaration,
): boolean {
  const base = declaration.getBaseClass();
  return base !== undefined && isGeneric(ctx, base);
}

/**
 * The Java type of a class, with a wildcard for the type of `this`
 */
export function classType(
  ctx: Context,
  node: Node,
  declaration: ClassDeclaration,
): string {
  const reference = ctx.classReference(node, declaration);
  return isGeneric(ctx, declaration) ? `${reference}<?>` : reference;
}

/**
 * The Java type of `this` in the current class
 */
export function thisType(ctx: Context): string {
  if (ctx.classDecl === undefined) {
    throw new Error('Not in a class');
  }
  return isGeneric(ctx, ctx.classDecl) ? 'T' : ctx.javaClass;
}
