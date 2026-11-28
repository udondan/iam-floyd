import { ClassDeclaration, Node, PropertyAccessExpression } from 'ts-morph';

import { fail, kindOf, resolve } from '../index';
import { containerOf, memberOf } from './classes';
import { className, Context } from './context';
import {
  Declaration,
  declarationOf,
  declaredType,
  isRestParameter,
  narrowedType,
} from './declared';
import { Expr, Prec, primary, wrap } from './expr';
import { expression, receiver } from './expressions';
import { javaConstantName, javaLocalName, javaString } from './names';
import { firstOf, isCallOf } from './nodes';

const comparisons = ['==', '===', '!=', '!==', '<=', '>='];

/**
 * Whether a node is the target of an assignment
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
 * A variable or field of type `Object`, cast to the type TypeScript narrowed it to where it is read
 */
function narrowed(
  ctx: Context,
  node: Node,
  declaration: Declaration,
  code: string,
): Expr {
  if (declaredType(ctx, declaration) == 'Object' && !isWritten(node)) {
    const type = narrowedType(ctx, node);
    if (type) {
      return primary(`((${type}) ${code})`);
    }
  }
  return primary(code);
}

function isModuleConstant(declaration: Node): boolean {
  return (
    Node.isVariableDeclaration(declaration) &&
    Node.isSourceFile(declaration.getVariableStatement()?.getParent())
  );
}

export function identifier(ctx: Context, node: Node): Expr {
  const name = node.getText();
  if (name == 'undefined') {
    return primary('null');
  }
  const declaration = resolve(node)[0];
  if (declaration === undefined) {
    return fail(node, 'Unresolved identifier');
  }
  if (isModuleConstant(declaration)) {
    const container = containerOf(ctx, declaration);
    return primary(memberOf(ctx, node, container, javaConstantName(name)));
  }
  if (
    Node.isClassDeclaration(declaration) ||
    Node.isEnumDeclaration(declaration)
  ) {
    return primary(ctx.classReference(node, declaration));
  }
  const local = javaLocalName(name);
  const variable = declarationOf(node);
  return variable ? narrowed(ctx, node, variable, local) : primary(local);
}

type PropertyOf = (
  ctx: Context,
  node: PropertyAccessExpression,
  declaration: Node | undefined,
) => Expr | undefined;

function enumMember(
  ctx: Context,
  node: PropertyAccessExpression,
  declaration: Node | undefined,
): Expr | undefined {
  if (!Node.isEnumMember(declaration)) {
    return undefined;
  }
  return primary(
    `${ctx.classReference(node, declaration.getParent())}.${javaConstantName(node.getName())}`,
  );
}

function staticProperty(
  ctx: Context,
  node: PropertyAccessExpression,
  declaration: Node | undefined,
): Expr | undefined {
  if (!Node.isPropertyDeclaration(declaration) || !declaration.isStatic()) {
    return undefined;
  }
  const cls = declaration.getParent() as ClassDeclaration;
  const name = className(cls);
  const qualifier =
    name == ctx.javaClass ? name : ctx.classReference(node, cls);
  return primary(`${qualifier}.${javaConstantName(node.getName())}`);
}

type LengthOf = (ctx: Context, object: Node) => string;

/**
 * The length by the kind of the value: arrays are lists, except rest parameters
 */
const lengths = new Map<string, LengthOf>([
  ['string', (ctx, object) => `${receiver(ctx, object)}.length()`],
  [
    'array',
    (ctx, object) =>
      `${receiver(ctx, object)}${isRestParameter(object) ? '.length' : '.size()'}`,
  ],
]);

function length(
  ctx: Context,
  node: PropertyAccessExpression,
): Expr | undefined {
  if (node.getName() != 'length') {
    return undefined;
  }
  const object = node.getExpression();
  if (isCallOf(object, 'Object.keys')) {
    return primary(
      `${wrap(expression(ctx, object.getArguments()[0]), Prec.primary)}.size()`,
    );
  }
  const lengthOf = lengths.get(kindOf(object.getType()));
  if (lengthOf === undefined) {
    return fail(node, 'Unsupported length');
  }
  return primary(lengthOf(ctx, object));
}

function field(
  ctx: Context,
  node: PropertyAccessExpression,
  declaration: Node | undefined,
): Expr | undefined {
  if (!Node.isPropertyDeclaration(declaration)) {
    return undefined;
  }
  const code = `${receiver(ctx, node.getExpression())}.${javaLocalName(node.getName())}`;
  return narrowed(ctx, node, declaration, code);
}

function recordValue(
  ctx: Context,
  node: PropertyAccessExpression,
): Expr | undefined {
  const object = node.getExpression();
  if (kindOf(object.getType()) != 'record') {
    return undefined;
  }
  return primary(`${receiver(ctx, object)}.get(${javaString(node.getName())})`);
}

const properties: PropertyOf[] = [
  enumMember,
  staticProperty,
  (ctx, node) => length(ctx, node),
  field,
  (ctx, node) => recordValue(ctx, node),
];

export function propertyAccess(
  ctx: Context,
  node: PropertyAccessExpression,
): Expr {
  const declaration = resolve(node.getNameNode())[0];
  return (
    firstOf(properties, ctx, node, declaration) ??
    fail(node, 'Unsupported property')
  );
}
