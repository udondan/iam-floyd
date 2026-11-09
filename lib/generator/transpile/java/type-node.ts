import { Node, SyntaxKind, TypeNode, TypeReferenceNode } from 'ts-morph';

import { fail, resolve } from '../index';
import { classType, thisType } from './classes';
import { Context } from './context';
import { firstOf } from './nodes';
import { typeFromType } from './type-inferred';
import { commonType } from './types';

type TypeRule = (
  ctx: Context,
  node: TypeNode,
  boxed: boolean,
  isPublic: boolean,
) => string | undefined;

const keywordTypes = new Map<SyntaxKind, TypeRule>([
  [SyntaxKind.StringKeyword, () => 'String'],
  [
    SyntaxKind.NumberKeyword,
    (_ctx, _node, boxed, isPublic) => {
      if (isPublic) {
        return 'Number';
      }
      return boxed ? 'Integer' : 'int';
    },
  ],
  [
    SyntaxKind.BooleanKeyword,
    (_ctx, _node, boxed) => (boxed ? 'Boolean' : 'boolean'),
  ],
  [SyntaxKind.AnyKeyword, () => 'Object'],
  [SyntaxKind.VoidKeyword, () => 'void'],
  [SyntaxKind.ThisType, (ctx) => thisType(ctx)],
]);

/**
 * The Java types of the type references to built-in types, with their type arguments
 */
const builtinTypes = new Map<
  string,
  (ctx: Context, args: TypeNode[], boxed: boolean, isPublic: boolean) => string
>([
  ['Record', (ctx, args) => `Map<String, ${typeFromNode(ctx, args[1], true)}>`],
  [
    'Partial',
    (ctx, args, boxed, isPublic) => typeFromNode(ctx, args[0], boxed, isPublic),
  ],
  ['Array', (ctx, args) => `List<${typeFromNode(ctx, args[0], true)}>`],
  ['Set', (ctx, args) => `Set<${typeFromNode(ctx, args[0], true)}>`],
  [
    'Map',
    (ctx, args) =>
      `Map<${typeFromNode(ctx, args[0], true)}, ${typeFromNode(ctx, args[1], true)}>`,
  ],
  ['Date', () => 'Instant'],
  ['RegExp', () => 'Pattern'],
]);

/**
 * The types of public array parameters that accept lists of any element type
 */
const publicLists = new Map([
  ['Number', 'List<? extends Number>'],
  ['Object', 'List<?>'],
]);

const keywordType: TypeRule = (ctx, node, boxed, isPublic) =>
  keywordTypes.get(node.getKind())?.(ctx, node, boxed, isPublic);

const literalType: TypeRule = (ctx, node, boxed) =>
  Node.isLiteralTypeNode(node)
    ? typeFromType(ctx, node.getType(), boxed, node)
    : undefined;

const parenthesizedType: TypeRule = (ctx, node, boxed, isPublic) =>
  Node.isParenthesizedTypeNode(node)
    ? typeFromNode(ctx, node.getTypeNode(), boxed, isPublic)
    : undefined;

const arrayType: TypeRule = (ctx, node, _boxed, isPublic) => {
  if (!Node.isArrayTypeNode(node)) {
    return undefined;
  }
  const element = typeFromNode(ctx, node.getElementTypeNode(), true, isPublic);
  return (
    (isPublic ? publicLists.get(element) : undefined) ?? `List<${element}>`
  );
};

function isNullType(node: TypeNode): boolean {
  return (
    node.getKind() == SyntaxKind.UndefinedKeyword ||
    (Node.isLiteralTypeNode(node) && node.getText() == 'null')
  );
}

const unionType: TypeRule = (ctx, node, boxed, isPublic) => {
  if (!Node.isUnionTypeNode(node)) {
    return undefined;
  }
  const parts = node.getTypeNodes().filter((part) => !isNullType(part));
  const optional = parts.length < node.getTypeNodes().length;
  return commonType(
    parts.map((part) => typeFromNode(ctx, part, boxed || optional, isPublic)),
  );
};

/**
 * The Java type of a reference to a type alias, enum or class
 */
function declaredType(
  ctx: Context,
  node: TypeReferenceNode,
  boxed: boolean,
  isPublic: boolean,
): string | undefined {
  const declaration = resolve(node.getTypeName())[0];
  if (declaration === undefined) {
    return fail(node, 'Unresolved type');
  }
  if (Node.isTypeAliasDeclaration(declaration)) {
    return typeFromNode(ctx, declaration.getTypeNodeOrThrow(), boxed, isPublic);
  }
  if (Node.isClassDeclaration(declaration)) {
    return classType(ctx, node, declaration);
  }
  return Node.isEnumDeclaration(declaration) ? 'String' : undefined;
}

const referenceType: TypeRule = (ctx, node, boxed, isPublic) => {
  if (!Node.isTypeReference(node)) {
    return undefined;
  }
  const builtin = builtinTypes.get(node.getTypeName().getText());
  return builtin
    ? builtin(ctx, node.getTypeArguments(), boxed, isPublic)
    : declaredType(ctx, node, boxed, isPublic);
};

const typeRules = [
  keywordType,
  literalType,
  parenthesizedType,
  arrayType,
  unionType,
  referenceType,
];

/**
 * The Java type of a type node. Public parameters take any number and arrays of any element type;
 * all other numbers are `int`.
 */
export function typeFromNode(
  ctx: Context,
  node: TypeNode,
  boxed: boolean,
  isPublic = false,
): string {
  return (
    firstOf(typeRules, ctx, node, boxed, isPublic) ??
    fail(node, 'Unsupported type')
  );
}
