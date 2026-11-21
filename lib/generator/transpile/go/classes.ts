import {
  ClassDeclaration,
  ConstructorDeclaration,
  MethodDeclaration,
  Node,
  PropertyDeclaration,
  Scope,
  Type,
} from 'ts-morph';

import { fail, isServiceFile } from '../index';
import { Context } from './context';
import { camelCase, goMethodName, pascalCase } from './names';

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
function ancestors(declaration: ClassDeclaration): ClassDeclaration[] {
  const result: ClassDeclaration[] = [];
  for (
    let cls: ClassDeclaration | undefined = declaration;
    cls;
    cls = cls.getBaseClass()
  ) {
    result.push(cls);
  }
  return result;
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

function returnsThis(declaration: ClassDeclaration): boolean {
  return ancestors(declaration).some((cls) =>
    cls
      .getMethods()
      .some((method) => method.getReturnType().getText() == 'this'),
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

function isInterfaceMethod(method: MethodDeclaration): boolean {
  return (
    method.getScope() == Scope.Public &&
    !method.isStatic() &&
    method.getParameters().length == 0 &&
    method.getReturnType().getText() != 'this'
  );
}

/**
 * Whether a class has only static properties, which become constants
 */
export function isConstantsOnly(declaration: ClassDeclaration): boolean {
  return (
    declaration.getMethods().length == 0 &&
    declaration.getConstructors().length == 0 &&
    declaration.getBaseClass() === undefined &&
    declaration.getProperties().every((property) => property.isStatic())
  );
}

/**
 * The Go type of a class: a pointer to its struct
 */
export function classReference(
  ctx: Context,
  node: Node,
  declaration: ClassDeclaration,
): string {
  if (!isGeneric(ctx, declaration)) {
    return `*${ctx.qualify(node, declaration, className(declaration))}`;
  }
  if (declaration === ctx.classDecl) {
    return 'T';
  }
  if (interfaceMethods(ctx, declaration).length == 0) {
    return fail(
      node,
      'Classes with subclasses cannot be referenced, except the last class with a type parameter, by its public methods without parameters',
    );
  }
  return ctx.qualify(node, declaration, `I${className(declaration)}`);
}

/**
 * The declaration of the class of a type
 */
export function classOfType(type: Type): ClassDeclaration {
  return type
    .getSymbolOrThrow()
    .getDeclarations()
    .find((declaration) => Node.isClassDeclaration(declaration))!;
}

/**
 * The Go type of `this` in the current class
 */
export function thisType(ctx: Context): string {
  if (ctx.classDecl === undefined) {
    throw new Error('Not in a class');
  }
  return isGeneric(ctx, ctx.classDecl) ? 'T' : `*${className(ctx.classDecl)}`;
}

/**
 * The name of the function that initializes the struct of a class with subclasses, exported if a
 * subclass is in another package
 */
export function initName(ctx: Context, declaration: ClassDeclaration): string {
  const pkg = ctx.packageOf(declaration);
  const exported = declaration
    .getDerivedClasses()
    .some((derived) => ctx.packageOf(derived) != pkg);
  return `${exported ? 'Init' : 'init'}${className(declaration)}`;
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
 * Whether a member is private or protected
 */
export function isHidden(member: MethodDeclaration | PropertyDeclaration) {
  return [Scope.Private, Scope.Protected].includes(member.getScope());
}

/**
 * The Go name of a field: public and protected fields are exported, so the services in other
 * packages can set them
 */
export function fieldName(property: PropertyDeclaration): string {
  if (property.getScope() == Scope.Private) {
    return camelCase(property.getName());
  }
  return pascalCase(property.getName());
}

/**
 * The Go name of a method: public methods are exported
 */
export function methodName(method: MethodDeclaration): string {
  if (isHidden(method)) {
    return camelCase(method.getName());
  }
  return goMethodName(method.getName());
}
