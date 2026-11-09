import { Node, ParameterDeclaration, PropertyDeclaration } from 'ts-morph';

import { fail, Kind, kindOf, resolve } from '../index';
import { callable } from './callables';
import { classOfType, classReference, fieldName } from './classes';
import { Context } from './context';
import { Expr, Prec, primary, wrap } from './expr';
import { expression } from './expressions';
import { typeFromType } from './inferred-types';
import { goLocalName } from './names';
import { isCallableDeclaration, isThisProperty } from './syntax';
import { typeFromNode } from './types';

/**
 * The Go type of a declaration: a parameter, variable or property
 */
export function declaredType(ctx: Context, declaration: Node): string {
  let type = ctx.declared.get(declaration);
  if (type === undefined) {
    type = typeOfDeclaration(ctx, declaration);
    ctx.declared.set(declaration, type);
  }
  return type;
}

function typeOfDeclaration(ctx: Context, declaration: Node): string {
  if (Node.isParameterDeclaration(declaration)) {
    return parameterType(ctx, declaration);
  }
  if (Node.isPropertyDeclaration(declaration)) {
    return propertyType(ctx, declaration);
  }
  return fail(declaration, 'Declaration used before it is declared');
}

/**
 * The type of a parameter of a function; the parameters of callbacks are declared before their
 * body is transpiled
 */
function parameterType(
  ctx: Context,
  declaration: ParameterDeclaration,
): string {
  const parent = declaration.getParentIfOrThrow(isCallableDeclaration);
  const param = callable(ctx, parent).params[
    parent.getParameters().indexOf(declaration)
  ];
  return param.rest ? `[]${param.type}` : param.type;
}

function propertyType(ctx: Context, declaration: PropertyDeclaration): string {
  const typeNode = declaration.getTypeNode();
  if (typeNode) {
    return typeFromNode(ctx, typeNode, false);
  }
  if (declaration.getInitializer()) {
    return typeFromType(ctx, declaration.getType(), false, declaration);
  }
  return fail(declaration, 'Properties need a type or an initializer');
}

const variableDeclarations: ((node: Node | undefined) => boolean)[] = [
  (node) => Node.isParameterDeclaration(node),
  (node) => Node.isVariableDeclaration(node),
  (node) => Node.isBindingElement(node),
  (node) => Node.isPropertyDeclaration(node) && !node.isStatic(),
];

/**
 * The declaration of a variable, parameter or property that an expression refers to
 */
export function declarationOf(node: Node): Node | undefined {
  if (!Node.isIdentifier(node) && !isThisProperty(node)) {
    return undefined;
  }
  const declaration = resolve(node)[0];
  return variableDeclarations.some((is) => is(declaration))
    ? declaration
    : undefined;
}

/**
 * A variable or parameter, by the identifier that refers to it
 */
export function local(ctx: Context, node: Node, declaration: Node): Expr {
  return primary(goLocalName(node.getText()), declaredType(ctx, declaration));
}

/**
 * A field of `this`
 */
export function field(ctx: Context, declaration: PropertyDeclaration): Expr {
  return primary(
    `this.${fieldName(declaration)}`,
    declaredType(ctx, declaration),
  );
}

/**
 * The type assertions of values of `interface{}`, by the kind of the TypeScript type
 */
const assertions = new Map<Kind, string>([
  ['string', 'string'],
  ['boolean', 'bool'],
  ['number', 'float64'],
  ['date', 'time.Time'],
]);

/**
 * A value of type `interface{}` narrowed to the type of the TypeScript expression
 */
export function narrowed(ctx: Context, expr: Expr, node: Node): Expr {
  if (expr.type != 'interface{}' || isWritten(node)) {
    return expr;
  }
  const type = node.getType();
  const kind = kindOf(type);
  const asserted =
    kind == 'class'
      ? classReference(ctx, node, classOfType(type.getNonNullableType()))
      : assertions.get(kind);
  if (asserted) {
    return primary(`${wrap(expr, Prec.primary)}.(${asserted})`, asserted);
  }
  if (kind == 'array') {
    return primary(`js.ToList(${expr.code})`, '[]interface{}');
  }
  return expr;
}

const comparisons = ['==', '===', '!=', '!==', '<=', '>='];

/**
 * Whether an expression is the left side of an assignment
 */
function isWritten(node: Node): boolean {
  const parent = node.getParent();
  if (!Node.isBinaryExpression(parent) || parent.getLeft() !== node) {
    return false;
  }
  const operator = parent.getOperatorToken().getText();
  return operator.endsWith('=') && !comparisons.includes(operator);
}

/**
 * An expression without narrowing of `interface{}`
 */
export function raw(ctx: Context, node: Node): Expr {
  const declaration = declarationOf(node);
  if (declaration && Node.isIdentifier(node)) {
    return local(ctx, node, declaration);
  }
  if (Node.isPropertyDeclaration(declaration)) {
    return field(ctx, declaration);
  }
  return expression(ctx, node);
}

/**
 * An expression as `interface{}` with the values of JavaScript: not narrowed, and normalized unless
 * it is `interface{}`
 */
export function normalized(ctx: Context, node: Node): string {
  const expr = raw(ctx, node);
  return expr.type == 'interface{}' ? expr.code : `js.Normalize(${expr.code})`;
}
