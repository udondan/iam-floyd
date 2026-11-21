import { Identifier, Node, VariableDeclaration } from 'ts-morph';

import { fail, resolve } from '../index';
import { classReference, containerOf, containerReference } from './classes';
import { Context, Expr, primary } from './context';
import { declarationOf, declaredType, narrowed } from './declared';
import { csharpConstantName, csharpLocalName } from './names';

const comparisons = ['==', '===', '!=', '!==', '<=', '>='];

/**
 * Whether a variable or property is assigned to
 */
export function isWritten(node: Node): boolean {
  const parent = node.getParent();
  return (
    Node.isBinaryExpression(parent) &&
    parent.getLeft() === node &&
    parent.getOperatorToken().getText().endsWith('=') &&
    !comparisons.includes(parent.getOperatorToken().getText())
  );
}

function isModuleConstant(
  declaration: Node,
): declaration is VariableDeclaration {
  return (
    Node.isVariableDeclaration(declaration) &&
    Node.isSourceFile(declaration.getVariableStatement()?.getParent())
  );
}

function moduleConstant(
  ctx: Context,
  node: Identifier,
  declaration: VariableDeclaration,
): Expr {
  const container = containerOf(ctx, declaration);
  const constant = csharpConstantName(node.getText());
  return primary(
    container.name == ctx.csharpClass
      ? constant
      : `${containerReference(ctx, node, container)}.${constant}`,
  );
}

/**
 * A local variable or parameter. Those of type `object` are narrowed to the type of the
 * TypeScript expression, unless they are assigned to.
 */
function local(ctx: Context, node: Identifier): Expr {
  const name = csharpLocalName(node.getText());
  const variable = declarationOf(node);
  if (variable && declaredType(ctx, variable) == 'object' && !isWritten(node)) {
    return narrowed(ctx, name, node) ?? primary(name);
  }
  return primary(name);
}

function declared(ctx: Context, node: Identifier, declaration: Node): Expr {
  if (isModuleConstant(declaration)) {
    return moduleConstant(ctx, node, declaration);
  }
  if (
    Node.isClassDeclaration(declaration) ||
    Node.isEnumDeclaration(declaration)
  ) {
    return primary(classReference(ctx, node, declaration));
  }
  return local(ctx, node);
}

export function identifier(ctx: Context, node: Identifier): Expr {
  if (node.getText() == 'undefined') {
    return primary('null');
  }
  const declaration = resolve(node)[0];
  if (declaration === undefined) {
    return fail(node, 'Unresolved identifier');
  }
  return declared(ctx, node, declaration);
}
