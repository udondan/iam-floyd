import {
  KindToNodeMappings,
  Node,
  SyntaxKind,
  TypeNode,
  TypeReferenceNode,
  UnionTypeNode,
} from 'ts-morph';

import { fail, resolve } from '../index';
import { classReference, thisType } from './classes';
import { Context } from './context';
import { optionalType, pointerScalars, scalarType, unionOf } from './expr';
import { typeFromType } from './inferred-types';

type TypeHandler = (ctx: Context, node: Node, optional: boolean) => string;

/**
 * A handler for the type nodes of a syntax kind
 */
function typeKind<K extends SyntaxKind>(
  kind: K,
  handler: (
    ctx: Context,
    node: KindToNodeMappings[K],
    optional: boolean,
  ) => string,
): [SyntaxKind, TypeHandler] {
  return [
    kind,
    (ctx, node, optional) => handler(ctx, node.asKindOrThrow(kind), optional),
  ];
}

const typeNodes = new Map<SyntaxKind, TypeHandler>([
  [SyntaxKind.StringKeyword, scalarType('string')],
  [SyntaxKind.NumberKeyword, scalarType('int')],
  [SyntaxKind.BooleanKeyword, scalarType('bool')],
  [SyntaxKind.AnyKeyword, () => 'interface{}'],
  [SyntaxKind.VoidKeyword, () => 'void'],
  [SyntaxKind.ThisType, (ctx) => thisType(ctx)],
  typeKind(SyntaxKind.LiteralType, (ctx, node, optional) =>
    typeFromType(ctx, node.getType(), optional, node),
  ),
  typeKind(SyntaxKind.ParenthesizedType, (ctx, node, optional) =>
    typeFromNode(ctx, node.getTypeNode(), optional),
  ),
  typeKind(
    SyntaxKind.ArrayType,
    (ctx, node) => `[]${typeFromNode(ctx, node.getElementTypeNode(), false)}`,
  ),
  typeKind(SyntaxKind.UnionType, (ctx, node, optional) =>
    unionTypeNode(ctx, node, optional),
  ),
  typeKind(SyntaxKind.TypeReference, (ctx, node, optional) =>
    typeReference(ctx, node, optional),
  ),
]);

/**
 * The Go type of a type node. Numbers are `int`.
 */
export function typeFromNode(
  ctx: Context,
  node: TypeNode,
  optional: boolean,
): string {
  const handler = typeNodes.get(node.getKind());
  if (handler === undefined) {
    return fail(node, 'Unsupported type');
  }
  return handler(ctx, node, optional);
}

function unionTypeNode(
  ctx: Context,
  node: UnionTypeNode,
  optional: boolean,
): string {
  const parts = node.getTypeNodes().filter((part) => !isNullishType(part));
  const isOptional = optional || parts.length < node.getTypeNodes().length;
  return unionOf(parts.map((part) => typeFromNode(ctx, part, isOptional)));
}

function isNullishType(node: TypeNode): boolean {
  return (
    node.getKind() == SyntaxKind.UndefinedKeyword ||
    (Node.isLiteralTypeNode(node) && node.getText() == 'null')
  );
}

type BuiltinType = (
  ctx: Context,
  args: TypeNode[],
  optional: boolean,
) => string;

const builtinTypes = new Map<string, BuiltinType>([
  ['Record', (ctx, args) => `*js.Record[${typeFromNode(ctx, args[1], false)}]`],
  ['Partial', (ctx, args, optional) => typeFromNode(ctx, args[0], optional)],
  ['Array', (ctx, args) => `[]${typeFromNode(ctx, args[0], false)}`],
  ['Set', (ctx, args) => `*js.Set[${typeFromNode(ctx, args[0], false)}]`],
  [
    'Map',
    (ctx, args) =>
      `*js.Map[${typeFromNode(ctx, args[0], false)}, ${typeFromNode(ctx, args[1], false)}]`,
  ],
  ['Date', scalarType('time.Time')],
  ['RegExp', () => '*regexp.Regexp'],
]);

function typeReference(
  ctx: Context,
  node: TypeReferenceNode,
  optional: boolean,
): string {
  const builtin = builtinTypes.get(node.getTypeName().getText());
  if (builtin) {
    return builtin(ctx, node.getTypeArguments(), optional);
  }
  const declaration = resolve(node.getTypeName())[0];
  if (declaration === undefined) {
    return fail(node, 'Unresolved type');
  }
  return referencedType(ctx, node, declaration, optional);
}

/**
 * The Go type of a type alias, an enum or a class
 */
function referencedType(
  ctx: Context,
  node: TypeReferenceNode,
  declaration: Node,
  optional: boolean,
): string {
  if (Node.isTypeAliasDeclaration(declaration)) {
    return typeFromNode(ctx, declaration.getTypeNodeOrThrow(), optional);
  }
  if (Node.isEnumDeclaration(declaration)) {
    return optionalType('string', optional);
  }
  if (Node.isClassDeclaration(declaration)) {
    return classReference(ctx, node, declaration);
  }
  return fail(node, 'Unsupported type');
}

/**
 * The Go type of a public parameter: pointers like in jsii, and `interface{}` for unions of more
 * than one type
 */
export function publicType(ctx: Context, node: TypeNode): string {
  const parts = (
    Node.isUnionTypeNode(node) ? node.getTypeNodes() : [node]
  ).filter((part) => part.getKind() != SyntaxKind.UndefinedKeyword);
  return unionOf(parts.map((part) => publicPart(ctx, part)));
}

function publicPart(ctx: Context, node: TypeNode): string {
  if (Node.isParenthesizedTypeNode(node)) {
    return publicType(ctx, node.getTypeNode());
  }
  if (Node.isArrayTypeNode(node)) {
    const element = publicType(ctx, node.getElementTypeNode());
    return pointerScalars.includes(element) ? `*[]${element}` : 'interface{}';
  }
  const type = typeFromNode(ctx, node, false);
  return type == 'int' ? '*float64' : optionalType(type, true);
}
