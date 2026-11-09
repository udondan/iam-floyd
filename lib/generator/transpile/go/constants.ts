import {
  EnumDeclaration,
  Node,
  PropertyDeclaration,
  Scope,
  VariableDeclaration,
  VariableStatement,
} from 'ts-morph';

import { fail } from '../index';
import { Context } from './context';
import { docs } from './docs';
import { expression } from './expressions';
import { camelCase, goConstantName, goString } from './names';

export function enumDeclaration(ctx: Context, declaration: EnumDeclaration) {
  const name = declaration.getName();
  docs(ctx, declaration);
  ctx.constants(() => {
    for (const member of declaration.getMembers()) {
      const value = member.getValue();
      if (typeof value !== 'string') {
        return fail(member, 'Enum members must be strings');
      }
      const constant = goConstantName(name, member.getName());
      ctx.declareName(member, constant);
      docs(ctx, member);
      ctx.emit(`${constant} = ${goString(value)}`);
    }
  });
}

/**
 * The static properties of a class, as constants
 */
export function staticProperties(
  ctx: Context,
  properties: PropertyDeclaration[],
  className: string,
) {
  ctx.constants(() => {
    for (const property of properties) {
      staticProperty(ctx, property, className);
    }
  });
}

function staticProperty(
  ctx: Context,
  property: PropertyDeclaration,
  className: string,
) {
  const initializer = property.getInitializer();
  if (!Node.isStringLiteral(initializer)) {
    return fail(property, 'Static properties must be strings');
  }
  const constant = goConstantName(className, property.getName());
  ctx.declareName(property, constant);
  if (property.getScope() == Scope.Public) {
    docs(ctx, property);
  }
  ctx.emit(`${constant} = ${goString(initializer.getLiteralValue())}`);
}

/**
 * A constant at module level: `const` for literals, `var` for other values
 */
export function moduleConstant(
  ctx: Context,
  statement: VariableStatement,
  declaration: VariableDeclaration,
) {
  const initializer = declaration.getInitializer();
  if (initializer === undefined) {
    return fail(declaration, 'Constants must be initialized');
  }
  const name = camelCase(declaration.getName());
  ctx.declareName(declaration, name);
  docs(ctx, statement);
  const value = expression(ctx, initializer);
  ctx.declared.set(declaration, value.type);
  const isConst =
    Node.isStringLiteral(initializer) || Node.isNumericLiteral(initializer);
  ctx.emit(`${isConst ? 'const' : 'var'} ${name} = ${value.code}`);
}
