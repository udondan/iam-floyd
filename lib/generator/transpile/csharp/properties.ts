import {
  ClassDeclaration,
  EnumMember,
  Node,
  PropertyAccessExpression,
  PropertyDeclaration,
} from 'ts-morph';

import { fail, kindOf, resolve } from '../index';
import { className, classReference, fieldName } from './classes';
import { Context, Expr, Prec, primary, wrap } from './context';
import { declarationOf, declaredType, narrowed } from './declared';
import { expression, receiver } from './expressions';
import { isWritten } from './identifiers';
import { csharpConstantName, csharpString } from './names';

function enumMember(
  ctx: Context,
  node: PropertyAccessExpression,
  declaration: EnumMember,
): Expr {
  return primary(
    `${classReference(ctx, node, declaration.getParent())}.${csharpConstantName(node.getName())}`,
  );
}

function staticProperty(
  ctx: Context,
  node: PropertyAccessExpression,
  declaration: PropertyDeclaration,
): Expr {
  const cls = declaration.getParent() as ClassDeclaration;
  const name = className(cls);
  return primary(
    `${name == ctx.csharpClass ? name : classReference(ctx, node, cls)}.${csharpConstantName(node.getName())}`,
  );
}

function isRestParameter(node: Node): boolean {
  const variable = declarationOf(node);
  return Node.isParameterDeclaration(variable) && variable.isRestParameter();
}

function lengthOf(ctx: Context, node: PropertyAccessExpression): Expr {
  const target = node.getExpression();
  if (
    Node.isCallExpression(target) &&
    target.getExpression().getText() == 'Object.keys'
  ) {
    return primary(
      `${wrap(expression(ctx, target.getArguments()[0]), Prec.primary)}.Count`,
    );
  }
  const kind = kindOf(target.getType());
  if (kind == 'string') {
    return primary(`${receiver(ctx, target)}.Length`);
  }
  if (kind == 'array') {
    const length = isRestParameter(target) ? '.Length' : '.Count';
    return primary(`${receiver(ctx, target)}${length}`);
  }
  return fail(node, 'Unsupported length');
}

function field(
  ctx: Context,
  node: PropertyAccessExpression,
  declaration: PropertyDeclaration,
): Expr {
  const code = `${receiver(ctx, node.getExpression())}.${fieldName(declaration)}`;
  if (declaredType(ctx, declaration) == 'object' && !isWritten(node)) {
    return narrowed(ctx, code, node) ?? primary(code);
  }
  return primary(code);
}

function recordValue(ctx: Context, node: PropertyAccessExpression): Expr {
  const target = node.getExpression();
  if (kindOf(target.getType()) == 'record') {
    return primary(
      `${receiver(ctx, target)}.GetValueOrDefault(${csharpString(node.getName())})`,
    );
  }
  return fail(node, 'Unsupported property');
}

export function propertyAccess(
  ctx: Context,
  node: PropertyAccessExpression,
): Expr {
  const declaration = resolve(node.getNameNode())[0];
  if (Node.isEnumMember(declaration)) {
    return enumMember(ctx, node, declaration);
  }
  if (Node.isPropertyDeclaration(declaration) && declaration.isStatic()) {
    return staticProperty(ctx, node, declaration);
  }
  if (node.getName() == 'length') {
    return lengthOf(ctx, node);
  }
  if (Node.isPropertyDeclaration(declaration)) {
    return field(ctx, node, declaration);
  }
  return recordValue(ctx, node);
}
