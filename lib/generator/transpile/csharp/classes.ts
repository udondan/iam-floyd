import {
  ClassDeclaration,
  ConstructorDeclaration,
  EnumDeclaration,
  MethodDeclaration,
  Node,
  PropertyDeclaration,
  Scope,
  SourceFile,
} from 'ts-morph';

import { fail, isServiceFile } from '../index';
import { Container, Context } from './context';
import {
  csharpConstantName,
  csharpLocalName,
  csharpMethodName,
  pascalCase,
} from './names';

export function className(declaration: ClassDeclaration): string {
  const name = declaration.getName();
  if (name === undefined) {
    return fail(declaration, 'Classes must have a name');
  }
  return name;
}

/**
 * A class and its ancestors
 */
export function ancestors(
  declaration: ClassDeclaration | undefined,
): ClassDeclaration[] {
  const result: ClassDeclaration[] = [];
  for (let cls = declaration; cls; cls = cls.getBaseClass()) {
    result.push(cls);
  }
  return result;
}

/**
 * The C# name of a property: constants in upper case, public and protected properties in
 * PascalCase, private ones in camelCase
 */
export function fieldName(property: PropertyDeclaration): string {
  if (property.isStatic()) {
    return csharpConstantName(property.getName());
  }
  if (property.getScope() == Scope.Private) {
    return csharpLocalName(property.getName());
  }
  return pascalCase(property.getName());
}

/**
 * The name of the holder class of a file: the name of the file, with the suffix `Module` if a member
 * has the same name
 */
function holderName(file: SourceFile): string {
  const name = file
    .getBaseNameWithoutExtension()
    .split(/[^a-zA-Z0-9]+/)
    .map((part) => pascalCase(part))
    .join('');
  const memberNames = file
    .getFunctions()
    .map((fn) => csharpMethodName(fn.getName() ?? ''));
  return memberNames.includes(name) ? `${name}Module` : name;
}

/**
 * The class of a module level function or constant: the class of its file, or a holder class
 */
export function containerOf(ctx: Context, node: Node): Container {
  const file = node.getSourceFile();
  const classes = file.getClasses();
  const namespace = ctx.options.namespaceOf(file);
  if (classes.length == 1) {
    return {
      name: className(classes[0]),
      namespace,
      isClass: true,
      declaration: classes[0],
    };
  }
  if (classes.length > 1) {
    return fail(
      node,
      'Functions and constants are supported only in files with at most one class',
    );
  }
  return { name: holderName(file), namespace, isClass: false };
}

/**
 * The C# names of the members of the current class and its ancestors
 */
function memberNames(ctx: Context): Set<string> {
  const names = new Set<string>();
  for (const cls of ancestors(ctx.classDecl)) {
    for (const property of cls.getProperties()) {
      names.add(fieldName(property));
    }
    for (const method of cls.getMethods()) {
      names.add(csharpMethodName(method.getName()));
    }
  }
  return names;
}

/**
 * Refers to a class by its simple name, which adds a using for its namespace. The name is qualified
 * if a member of the current class has the same name.
 */
export function reference(
  ctx: Context,
  name: string,
  namespace: string,
): string {
  if (memberNames(ctx).has(name)) {
    return `global::${namespace}.${name}`;
  }
  ctx.namespaces.add(namespace);
  return name;
}

function returnsThis(declaration: ClassDeclaration): boolean {
  return ancestors(declaration).some((cls) =>
    cls
      .getMethods()
      .some((method) => method.getReturnType().getText() == 'this'),
  );
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

function isInterfaceMethod(method: MethodDeclaration): boolean {
  return (
    method.getScope() == Scope.Public &&
    !method.isStatic() &&
    method.getParameters().length == 0 &&
    method.getReturnType().getText() != 'this'
  );
}

/**
 * The methods of the interface of the last class with a type parameter in the chain, by which it
 * can be referenced: its public methods without parameters that do not return `this`
 */
export function interfaceMethods(
  ctx: Context,
  declaration: ClassDeclaration,
): MethodDeclaration[] {
  if (
    !isGeneric(ctx, declaration) ||
    declaration.getDerivedClasses().some((derived) => isGeneric(ctx, derived))
  ) {
    return [];
  }
  return declaration.getMethods().filter(isInterfaceMethod);
}

function genericClassReference(
  ctx: Context,
  node: Node,
  declaration: ClassDeclaration,
): string {
  if (declaration === ctx.classDecl) {
    return `${className(declaration)}<T>`;
  }
  if (interfaceMethods(ctx, declaration).length) {
    return reference(
      ctx,
      `I${className(declaration)}`,
      ctx.options.namespaceOf(declaration.getSourceFile()),
    );
  }
  return fail(
    node,
    'Classes with subclasses cannot be referenced, except the last class with a type parameter, by its public methods without parameters',
  );
}

export function classReference(
  ctx: Context,
  node: Node,
  declaration: ClassDeclaration | EnumDeclaration,
): string {
  if (Node.isClassDeclaration(declaration) && isGeneric(ctx, declaration)) {
    return genericClassReference(ctx, node, declaration);
  }
  const name = Node.isClassDeclaration(declaration)
    ? className(declaration)
    : declaration.getName();
  return reference(
    ctx,
    name,
    ctx.options.namespaceOf(declaration.getSourceFile()),
  );
}

export function containerReference(
  ctx: Context,
  node: Node,
  container: Container,
): string {
  if (container.declaration) {
    return classReference(ctx, node, container.declaration);
  }
  return reference(ctx, container.name, container.namespace);
}

/**
 * The C# type of `this` in the current class
 */
export function thisType(ctx: Context): string {
  if (ctx.classDecl === undefined) {
    throw new Error('Not in a class');
  }
  return isGeneric(ctx, ctx.classDecl) ? 'T' : ctx.csharpClass;
}

/**
 * The visibility of a module level function or constant: exported ones are public in the class of
 * their file and internal in a holder class
 */
export function memberVisibility(
  container: Container,
  exported: boolean,
): string {
  if (container.isClass) {
    return exported ? 'public' : 'protected';
  }
  return exported ? 'internal' : 'private';
}

/**
 * The nearest constructor of a class or its ancestors
 */
export function constructorOf(
  declaration: ClassDeclaration,
): ConstructorDeclaration | undefined {
  return ancestors(declaration)
    .find((cls) => cls.getConstructors().length)
    ?.getConstructors()[0];
}

/**
 * Whether the current class is or extends a class
 */
export function inherits(ctx: Context, declaration: ClassDeclaration): boolean {
  return ancestors(ctx.classDecl).includes(declaration);
}
