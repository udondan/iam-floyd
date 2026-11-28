import {
  ClassDeclaration,
  EnumDeclaration,
  FunctionDeclaration,
  MethodDeclaration,
  Node,
  PropertyDeclaration,
} from 'ts-morph';

import { fail } from '../index';
import { constructorDeclaration } from './constructors';
import { Context } from './context';
import { emitDocstring } from './docs';
import { expression } from './expressions';
import { functionName, memberName, pythonConstantName } from './names';
import { statements } from './statements';
import { pyString } from './strings';
import { parameters, returnType } from './types';

/**
 * The class and its base classes, from the class itself up
 */
export function hierarchy(declaration: ClassDeclaration): ClassDeclaration[] {
  const classes: ClassDeclaration[] = [];
  for (
    let current: ClassDeclaration | undefined = declaration;
    current !== undefined;
    current = current.getBaseClass()
  ) {
    classes.push(current);
  }
  return classes;
}

export function enumDeclaration(ctx: Context, declaration: EnumDeclaration) {
  const name = ctx.register(declaration, declaration.getName());
  ctx.emit(`class ${name}:`);
  ctx.indented(() => {
    emitDocstring(ctx, declaration);
    for (const member of declaration.getMembers()) {
      const value = member.getValue();
      if (typeof value !== 'string') {
        fail(member, 'Enum members must be strings');
      }
      ctx.emit('');
      ctx.emit(`${pythonConstantName(member.getName())} = ${pyString(value)}`);
      emitDocstring(ctx, member);
    }
  });
}

export function functionDeclaration(
  ctx: Context,
  declaration: FunctionDeclaration,
) {
  const tsName = declaration.getName();
  if (tsName === undefined || declaration.getOverloads().length) {
    fail(declaration, 'Unsupported function');
  }
  const name = ctx.register(
    declaration,
    functionName(tsName, declaration.isExported()),
  );
  ctx.emit(
    `def ${name}(${parameters(ctx, declaration.getParameters()).join(', ')}) -> ${returnType(ctx, declaration)}:`,
  );
  ctx.indented(() => {
    emitDocstring(ctx, declaration);
    statements(ctx, declaration.getStatements());
  });
}

function isSupportedClass(declaration: ClassDeclaration): boolean {
  return ![
    declaration.getName() === undefined,
    declaration.isAbstract(),
    declaration.getTypeParameters().length,
    declaration.getImplements().length,
    declaration.getDecorators().length,
  ].some(Boolean);
}

export function classDeclaration(ctx: Context, declaration: ClassDeclaration) {
  if (!isSupportedClass(declaration)) {
    fail(declaration, 'Unsupported class');
  }
  const name = ctx.register(declaration, declaration.getNameOrThrow());
  const base = declaration.getBaseClass();
  ctx.emit(`class ${name}${base ? `(${base.getName()})` : ''}:`);
  checkMemberNames(declaration);

  ctx.indented(() => {
    emitDocstring(ctx, declaration);
    const fields = classMembers(ctx, declaration);
    constructorDeclaration(ctx, declaration, fields);
    for (const method of declaration.getMethods()) {
      methodDeclaration(ctx, method);
    }
  });
}

/**
 * Emits the static properties and returns the fields, which the constructor initializes
 */
function classMembers(
  ctx: Context,
  declaration: ClassDeclaration,
): PropertyDeclaration[] {
  const fields: PropertyDeclaration[] = [];
  for (const member of declaration.getMembers()) {
    if (!Node.isPropertyDeclaration(member)) {
      if (
        !Node.isMethodDeclaration(member) &&
        !Node.isConstructorDeclaration(member)
      ) {
        fail(member, 'Unsupported class member');
      }
    } else if (member.isStatic()) {
      staticProperty(ctx, member);
    } else {
      fields.push(member);
    }
  }
  return fields;
}

/**
 * Fails when two members of the class hierarchy map to the same Python name
 */
function checkMemberNames(declaration: ClassDeclaration) {
  const seen = new Map<string, string>();
  for (const member of hierarchy(declaration).flatMap((current) =>
    current.getMembers(),
  )) {
    if (Node.isConstructorDeclaration(member)) {
      continue;
    }
    const tsName = (member as PropertyDeclaration).getName();
    const name = memberName(member as PropertyDeclaration);
    const existing = seen.get(name);
    if (existing !== undefined && existing != tsName) {
      fail(member, `Python name ${name} is already used by ${existing}`);
    }
    seen.set(name, tsName);
  }
}

function staticProperty(ctx: Context, property: PropertyDeclaration) {
  const initializer = property.getInitializer();
  if (initializer === undefined) {
    fail(property, 'Static properties need an initializer');
  }
  ctx.emit('');
  ctx.emit(`${memberName(property)} = ${expression(ctx, initializer).code}`);
  emitDocstring(ctx, property);
}

function isSupportedMethod(method: MethodDeclaration): boolean {
  return ![
    method.getOverloads().length,
    method.isAbstract(),
    method.isAsync(),
    method.isGenerator(),
    method.getTypeParameters().length,
    method.getDecorators().length,
  ].some(Boolean);
}

function methodDeclaration(ctx: Context, method: MethodDeclaration) {
  if (!isSupportedMethod(method)) {
    fail(method, 'Unsupported method');
  }
  const params = parameters(ctx, method.getParameters());
  ctx.emit('');
  if (method.isStatic()) {
    ctx.emit('@staticmethod');
  } else {
    params.unshift('self');
  }
  const name = memberName(method);
  ctx.emit(`def ${name}(${params.join(', ')}) -> ${returnType(ctx, method)}:`);
  ctx.indented(() => {
    emitDocstring(ctx, method);
    statements(ctx, method.getStatements());
  });
  if (method.getName() == 'toString' && !method.isStatic()) {
    ctx.emit('');
    ctx.emit('def __str__(self) -> str:');
    ctx.indented(() => ctx.emit(`return self.${name}()`));
  }
}
