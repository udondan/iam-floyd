import {
  ClassDeclaration,
  Expression,
  FunctionDeclaration,
  Node,
  PropertyDeclaration,
  Scope,
  VariableDeclarationKind,
  VariableStatement,
} from 'ts-morph';

import { fail } from '../index';
import { className, fieldName, memberVisibility } from './classes';
import { Container, Context } from './context';
import { declaredType } from './declared';
import { docs } from './docs';
import { expression } from './expressions';
import { callableDeclaration } from './functions';
import { csharpConstantName, csharpMethodName } from './names';

/**
 * The C# names of the methods of a class. Fails on static methods, overloads and methods with the
 * same C# name.
 */
function methodNames(declaration: ClassDeclaration): Set<string> {
  const methods = new Set<string>();
  for (const method of declaration.getMethods()) {
    if (method.isStatic() || method.getOverloads().length) {
      fail(method, 'Static methods and overloads are not supported');
    }
    const name = csharpMethodName(method.getName());
    if (methods.has(name)) {
      fail(method, `C# name ${name} is already used`);
    }
    methods.add(name);
  }
  return methods;
}

/**
 * Fails when two members map to the same C# name, or a member has the name of its class
 */
export function checkMemberNames(declaration: ClassDeclaration) {
  const names = new Set<string>([className(declaration)]);
  const check = (node: Node, name: string) => {
    if (names.has(name)) {
      fail(node, `C# name ${name} is already used`);
    }
    names.add(name);
  };
  for (const prop of declaration.getProperties()) {
    check(prop, fieldName(prop));
  }
  for (const name of methodNames(declaration)) {
    check(declaration, name);
  }
}

function staticProperty(
  ctx: Context,
  prop: PropertyDeclaration,
  type: string,
  name: string,
) {
  const initializer = prop.getInitializer();
  if (initializer === undefined) {
    return fail(prop, 'Static properties must be initialized');
  }
  const isConst = Node.isStringLiteral(initializer) && type == 'string';
  ctx.emit(
    `${prop.getScope()} ${isConst ? 'const' : 'static readonly'} ${type} ${name} = ${expression(ctx, initializer).code};`,
  );
}

function instanceProperty(
  ctx: Context,
  prop: PropertyDeclaration,
  type: string,
  name: string,
) {
  const initializer = prop.getInitializer();
  const value = initializer ? ` = ${expression(ctx, initializer).code};` : '';
  if (prop.getScope() == Scope.Public) {
    ctx.emit(
      `public ${type} ${name} { get;${prop.isReadonly() ? '' : ' set;'} }${value}`,
    );
    return;
  }
  const modifiers = `${prop.getScope()}${prop.isReadonly() ? ' readonly' : ''}`;
  ctx.emit(`${modifiers} ${type} ${name}${value || ';'}`);
}

export function property(ctx: Context, prop: PropertyDeclaration) {
  if (prop.hasQuestionToken()) {
    fail(prop, 'Optional properties are not supported');
  }
  docs(ctx, prop, undefined, prop.getScope() == Scope.Public);
  const type = declaredType(ctx, prop);
  const name = fieldName(prop);
  if (prop.isStatic()) {
    staticProperty(ctx, prop, type, name);
  } else {
    instanceProperty(ctx, prop, type, name);
  }
}

/**
 * Whether a constant can be a C# `const`
 */
function isConstant(initializer: Expression, type: string): boolean {
  return (
    (Node.isStringLiteral(initializer) && type == 'string') ||
    (Node.isNumericLiteral(initializer) && type == 'int')
  );
}

function moduleConstants(
  ctx: Context,
  member: VariableStatement,
  container: Container,
  separate: () => void,
) {
  if (member.getDeclarationKind() != VariableDeclarationKind.Const) {
    fail(member, 'Module level variables must be constants');
  }
  for (const declaration of member.getDeclarations()) {
    const initializer = declaration.getInitializer();
    if (initializer === undefined) {
      return fail(declaration, 'Constants must be initialized');
    }
    const visibility = memberVisibility(container, member.isExported());
    const type = declaredType(ctx, declaration);
    const modifier = isConstant(initializer, type)
      ? 'const'
      : 'static readonly';
    separate();
    docs(ctx, member);
    ctx.emit(
      `${visibility} ${modifier} ${type} ${csharpConstantName(declaration.getName())} = ${expression(ctx, initializer).code};`,
    );
  }
}

export function moduleMembers(
  ctx: Context,
  members: (FunctionDeclaration | VariableStatement)[],
  container: Container,
  separate = ctx.separator(),
) {
  for (const member of members) {
    if (Node.isFunctionDeclaration(member)) {
      callableDeclaration(ctx, member, separate);
    } else {
      moduleConstants(ctx, member, container, separate);
    }
  }
}
