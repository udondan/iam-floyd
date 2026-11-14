import {
  ClassDeclaration,
  Expression,
  Node,
  PropertyDeclaration,
  Scope,
  VariableDeclaration,
  VariableDeclarationKind,
  VariableStatement,
} from 'ts-morph';

import { fail, ownConstructor } from '../index';
import {
  callableDeclaration,
  inheritedConstructors,
} from './callable-declaration';
import {
  Container,
  containerOf,
  hasGenericBase,
  isGeneric,
  memberVisibility,
} from './classes';
import { className, Context } from './context';
import { declaredType } from './declared';
import { docs } from './docs';
import { expression } from './expressions';
import type { ModuleMember } from './files';
import { javadoc } from './javadoc';
import { javaConstantName, javaLocalName, javaMethodName } from './names';

/**
 * A constant: a static property or a module level constant
 */
function constant(
  ctx: Context,
  modifiers: string,
  declaration: PropertyDeclaration | VariableDeclaration,
  initializer: Expression,
): string {
  return `${modifiers}static final ${declaredType(ctx, declaration)} ${javaConstantName(declaration.getName())} = ${expression(ctx, initializer).code};`;
}

function moduleConstants(
  ctx: Context,
  member: VariableStatement,
  container: Container,
) {
  if (member.getDeclarationKind() != VariableDeclarationKind.Const) {
    fail(member, 'Module level variables must be constants');
  }
  const visibility = memberVisibility(container, member.isExported());
  for (const declaration of member.getDeclarations()) {
    const initializer = declaration.getInitializer();
    if (initializer === undefined) {
      return fail(declaration, 'Constants must be initialized');
    }
    ctx.emit('');
    docs(ctx, member);
    ctx.emit(constant(ctx, visibility, declaration, initializer));
  }
}

export function moduleMembers(
  ctx: Context,
  members: ModuleMember[],
  container: Container,
) {
  for (const member of members) {
    if (Node.isFunctionDeclaration(member)) {
      callableDeclaration(ctx, member);
    } else {
      moduleConstants(ctx, member, container);
    }
  }
}

function property(ctx: Context, property: PropertyDeclaration) {
  const initializer = property.getInitializer();
  const scope = property.getScope();
  if (property.hasQuestionToken()) {
    fail(property, 'Optional properties are not supported');
  }
  docs(ctx, property, undefined, scope == Scope.Public);
  if (property.isStatic()) {
    if (initializer === undefined) {
      return fail(property, 'Static properties must be initialized');
    }
    ctx.emit(constant(ctx, `${scope} `, property, initializer));
    return;
  }
  const modifiers = `${scope}${property.isReadonly() ? ' final' : ''}`;
  const name = javaLocalName(property.getName());
  const type = declaredType(ctx, property);
  const value = initializer ? ` = ${expression(ctx, initializer).code}` : '';
  ctx.emit(`${modifiers} ${type} ${name}${value};`);
}

/**
 * Fails when two members map to the same Java name
 */
function checkMemberNames(declaration: ClassDeclaration) {
  const names = new Set<string>();
  const check = (node: Node, name: string, kind: string) => {
    const key = `${kind} ${name}`;
    if (names.has(key)) {
      fail(node, `Java name ${name} is already used`);
    }
    names.add(key);
  };
  for (const property of declaration.getProperties()) {
    const name = property.getName();
    check(
      property,
      property.isStatic() ? javaConstantName(name) : javaLocalName(name),
      'field',
    );
  }
  for (const method of declaration.getMethods()) {
    if (method.isStatic() || method.getOverloads().length) {
      fail(method, 'Static methods and overloads are not supported');
    }
    check(method, javaMethodName(method.getName()), 'method');
  }
}

function checkClass(declaration: ClassDeclaration) {
  const unsupported = [
    declaration.isAbstract(),
    declaration.getTypeParameters().length > 0,
    declaration.getImplements().length > 0,
    declaration.getDecorators().length > 0,
  ];
  if (unsupported.includes(true)) {
    fail(declaration, 'Unsupported class declaration');
  }
}

/**
 * The declaration of a class up to `{`. A class with a type parameter for the type of `this` passes
 * it on to its base class.
 */
function classHeader(ctx: Context, declaration: ClassDeclaration): string {
  const name = className(declaration);
  const generic = isGeneric(ctx, declaration);
  const base = declaration.getBaseClass();
  const parameter = generic ? `<T extends ${name}<T>>` : '';
  if (base === undefined) {
    return `public class ${name}${parameter}`;
  }
  const reference = ctx.classReference(declaration, base);
  const argument = isGeneric(ctx, base) ? `<${generic ? 'T' : name}>` : '';
  return `public class ${name}${parameter} extends ${reference}${argument}`;
}

/**
 * The method that returns `this` as the type parameter, in the first generic class of a hierarchy
 */
function selfMethod(ctx: Context) {
  ctx.emit('');
  ctx.emitLines(javadoc(['The statement itself, typed as the subclass']));
  ctx.emit('@SuppressWarnings("unchecked")');
  ctx.emitBlock('protected T self()', () => ctx.emit('return (T) this;'));
}

function constructors(ctx: Context, declaration: ClassDeclaration) {
  const constructor = ownConstructor(declaration);
  const base = declaration.getBaseClass();
  if (constructor) {
    callableDeclaration(ctx, constructor);
  } else if (base) {
    inheritedConstructors(ctx, base);
  }
}

function classBody(
  ctx: Context,
  declaration: ClassDeclaration,
  members: ModuleMember[],
) {
  checkMemberNames(declaration);
  for (const member of declaration.getProperties()) {
    ctx.emit('');
    property(ctx, member);
  }
  constructors(ctx, declaration);
  for (const method of declaration.getMethods()) {
    callableDeclaration(ctx, method);
  }
  if (isGeneric(ctx, declaration) && !hasGenericBase(ctx, declaration)) {
    selfMethod(ctx);
  }
  if (members.length) {
    moduleMembers(ctx, members, containerOf(ctx, members[0]));
  }
}

export function classDeclaration(
  ctx: Context,
  declaration: ClassDeclaration,
  members: ModuleMember[],
) {
  checkClass(declaration);
  ctx.classDecl = declaration;
  const header = classHeader(ctx, declaration);
  docs(ctx, declaration);
  ctx.emitBlock(header, () => classBody(ctx, declaration, members));
  ctx.classDecl = undefined;
}
