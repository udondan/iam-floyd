import {
  ArrayTypeNode,
  LiteralTypeNode,
  Node,
  ParenthesizedTypeNode,
  SyntaxKind,
  TypeNode,
  TypeReferenceNode,
  UnionTypeNode,
} from 'ts-morph';

import { fail, resolve } from '../index';
import { classReference, thisType } from './classes';
import { Context } from './context';
import { Handler, handlerOf, when } from './handlers';
import { typeFromType } from './inferred-types';
import { commonType, optionalType } from './nullable';

type TypeOf = (ctx: Context, optional: boolean, isPublic: boolean) => string;

const keywordTypes = new Map<SyntaxKind, TypeOf>([
  [SyntaxKind.StringKeyword, () => 'string'],
  [
    SyntaxKind.NumberKeyword,
    (_ctx, optional, isPublic) =>
      optionalType(isPublic ? 'double' : 'int', optional),
  ],
  [
    SyntaxKind.BooleanKeyword,
    (_ctx, optional) => optionalType('bool', optional),
  ],
  [SyntaxKind.AnyKeyword, () => 'object'],
  [SyntaxKind.VoidKeyword, () => 'void'],
  [SyntaxKind.ThisType, (ctx) => thisType(ctx)],
]);

type GenericTypeOf = (
  ctx: Context,
  args: TypeNode[],
  optional: boolean,
  isPublic: boolean,
) => string;

/**
 * The generic types of TypeScript, by their name
 */
const genericTypes = new Map<string, GenericTypeOf>([
  [
    'Record',
    (ctx, args) => `Dictionary<string, ${typeFromNode(ctx, args[1], false)}>`,
  ],
  [
    'Partial',
    (ctx, args, optional, isPublic) =>
      typeFromNode(ctx, args[0], optional, isPublic),
  ],
  ['Array', (ctx, args) => `List<${typeFromNode(ctx, args[0], false)}>`],
  ['Set', (ctx, args) => `HashSet<${typeFromNode(ctx, args[0], false)}>`],
  [
    'Map',
    (ctx, args) =>
      `Dictionary<${typeFromNode(ctx, args[0], false)}, ${typeFromNode(ctx, args[1], false)}>`,
  ],
  ['Date', (_ctx, _args, optional) => optionalType('DateTime', optional)],
  ['RegExp', () => 'Regex'],
]);

function arrayType(
  ctx: Context,
  node: ArrayTypeNode,
  _optional: boolean,
  isPublic: boolean,
): string {
  const element = typeFromNode(ctx, node.getElementTypeNode(), false, isPublic);
  if (!isPublic) {
    return `List<${element}>`;
  }
  return element == 'object' ? 'IEnumerable' : `IEnumerable<${element}>`;
}

function isNullishType(node: TypeNode): boolean {
  return (
    node.getKind() == SyntaxKind.UndefinedKeyword ||
    (Node.isLiteralTypeNode(node) && node.getText() == 'null')
  );
}

function unionType(
  ctx: Context,
  node: UnionTypeNode,
  optional: boolean,
  isPublic: boolean,
): string {
  const all = node.getTypeNodes();
  const parts = all.filter((part) => !isNullishType(part));
  const isOptional = optional || parts.length < all.length;
  return commonType(
    parts.map((part) => typeFromNode(ctx, part, isOptional, isPublic)),
  );
}

/**
 * The C# type of an enum or a class
 */
function namedType(ctx: Context, node: Node, declaration: Node): string {
  if (Node.isEnumDeclaration(declaration)) {
    return 'string';
  }
  if (Node.isClassDeclaration(declaration)) {
    return classReference(ctx, node, declaration);
  }
  return fail(node, 'Unsupported type');
}

function typeReference(
  ctx: Context,
  node: TypeReferenceNode,
  optional: boolean,
  isPublic: boolean,
): string {
  const generic = genericTypes.get(node.getTypeName().getText());
  if (generic) {
    return generic(ctx, node.getTypeArguments(), optional, isPublic);
  }
  const declaration = resolve(node.getTypeName())[0];
  if (declaration === undefined) {
    return fail(node, 'Unresolved type');
  }
  if (Node.isTypeAliasDeclaration(declaration)) {
    return typeFromNode(
      ctx,
      declaration.getTypeNodeOrThrow(),
      optional,
      isPublic,
    );
  }
  return namedType(ctx, node, declaration);
}

const typeNodes: Handler<[boolean, boolean], string>[] = [
  when(
    (node): node is LiteralTypeNode => Node.isLiteralTypeNode(node),
    (ctx, node, optional) => typeFromType(ctx, node.getType(), optional, node),
  ),
  when(
    (node): node is ParenthesizedTypeNode => Node.isParenthesizedTypeNode(node),
    (ctx, node, optional, isPublic) =>
      typeFromNode(ctx, node.getTypeNode(), optional, isPublic),
  ),
  when((node): node is ArrayTypeNode => Node.isArrayTypeNode(node), arrayType),
  when((node): node is UnionTypeNode => Node.isUnionTypeNode(node), unionType),
  when(
    (node): node is TypeReferenceNode => Node.isTypeReference(node),
    typeReference,
  ),
];

/**
 * The C# type of a type node. Public parameters take any number and any sequence; all other
 * numbers are `int`.
 */
export function typeFromNode(
  ctx: Context,
  node: TypeNode,
  optional: boolean,
  isPublic = false,
): string {
  const keyword = keywordTypes.get(node.getKind());
  if (keyword) {
    return keyword(ctx, optional, isPublic);
  }
  const handler = handlerOf(typeNodes, node);
  if (handler === undefined) {
    return fail(node, 'Unsupported type');
  }
  return handler.handle(ctx, node, optional, isPublic);
}
