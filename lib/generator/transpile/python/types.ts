import {
  FunctionDeclaration,
  MethodDeclaration,
  Node,
  ParameterDeclaration,
  SyntaxKind,
  Type,
  TypeNode,
  TypeReferenceNode,
} from 'ts-morph';

import { fail, Kind, kindOf } from '../index';
import { Context, dispatch, Handler, on } from './context';
import { expression } from './expressions';
import { pythonName } from './names';

/**
 * The type hints of keywords; those of the module `typing` are imported
 */
const keywordHints = new Map<SyntaxKind, string>([
  [SyntaxKind.StringKeyword, 'str'],
  [SyntaxKind.NumberKeyword, 'float'],
  [SyntaxKind.BooleanKeyword, 'bool'],
  [SyntaxKind.AnyKeyword, 'Any'],
  [SyntaxKind.VoidKeyword, 'None'],
  [SyntaxKind.UndefinedKeyword, 'None'],
  [SyntaxKind.ThisType, 'Self'],
]);

const typingHints = new Set(['Any', 'Self']);

function unionHint(hints: string[]): string {
  return [...new Set(hints)].join(' | ');
}

function dictHint(ctx: Context, args: TypeNode[]): string {
  return `dict[${typeHintFromNode(ctx, args[0])}, ${typeHintFromNode(ctx, args[1])}]`;
}

/**
 * The type hints of the generic and built-in types, by their name
 */
const referenceHints = new Map<
  string,
  (ctx: Context, args: TypeNode[]) => string
>([
  ['Record', dictHint],
  ['Map', dictHint],
  ['Partial', (ctx, args) => typeHintFromNode(ctx, args[0])],
  ['Set', (ctx, args) => `dict[${typeHintFromNode(ctx, args[0])}, bool]`],
  ['Array', (ctx, args) => `list[${typeHintFromNode(ctx, args[0])}]`],
  [
    'Date',
    (ctx) => {
      ctx.imports.add('datetime');
      return '_datetime.datetime';
    },
  ],
  [
    'RegExp',
    (ctx) => {
      ctx.imports.add('re');
      return '_re.Pattern[str]';
    },
  ],
]);

/**
 * The type hint of a type alias, an enum or a class
 */
function declaredTypeHint(ctx: Context, node: TypeReferenceNode): string {
  const symbol = node.getTypeName().getSymbolOrThrow();
  const target =
    symbol.getAliasedSymbol()?.getDeclarations()[0] ??
    symbol.getDeclarations()[0];
  if (Node.isTypeAliasDeclaration(target)) {
    return typeHintFromNode(ctx, target.getTypeNodeOrThrow());
  }
  if (Node.isEnumDeclaration(target)) {
    return 'str';
  }
  if (Node.isClassDeclaration(target)) {
    return target.getNameOrThrow();
  }
  return fail(node, 'Unsupported type');
}

function typeReferenceHint(ctx: Context, node: TypeReferenceNode): string {
  const reference = referenceHints.get(node.getTypeName().getText());
  if (reference !== undefined) {
    return reference(ctx, node.getTypeArguments());
  }
  return declaredTypeHint(ctx, node);
}

const typeNodeHints = new Map<SyntaxKind, Handler<string>>([
  on(
    SyntaxKind.ArrayType,
    (ctx, node) => `list[${typeHintFromNode(ctx, node.getElementTypeNode())}]`,
  ),
  on(SyntaxKind.ParenthesizedType, (ctx, node) =>
    typeHintFromNode(ctx, node.getTypeNode()),
  ),
  on(SyntaxKind.UnionType, (ctx, node) =>
    unionHint(node.getTypeNodes().map((part) => typeHintFromNode(ctx, part))),
  ),
  on(SyntaxKind.TypeReference, typeReferenceHint),
]);

function typeHintFromNode(ctx: Context, node: TypeNode): string {
  const keyword = keywordHints.get(node.getKind());
  if (keyword === undefined) {
    return dispatch(typeNodeHints, ctx, node, 'Unsupported type');
  }
  if (typingHints.has(keyword)) {
    ctx.imports.add(keyword);
  }
  return keyword;
}

/**
 * The type hints of the kinds of values, for types without a type node
 */
const kindHints = new Map<
  Kind,
  (ctx: Context, type: Type, node: Node) => string
>([
  [
    'any',
    (ctx) => {
      ctx.imports.add('Any');
      return 'Any';
    },
  ],
  ['string', () => 'str'],
  ['number', () => 'float'],
  ['boolean', () => 'bool'],
  [
    'array',
    (ctx, type, node) =>
      `list[${typeHintFromType(ctx, type.getArrayElementTypeOrThrow(), node)}]`,
  ],
  ['class', (_, type) => type.getSymbolOrThrow().getName()],
]);

function typeHintFromType(ctx: Context, type: Type, node: Node): string {
  if (type.getText() == 'this') {
    ctx.imports.add('Self');
    return 'Self';
  }
  if (type.isVoid() || type.isUndefined()) {
    return 'None';
  }
  if (type.isUnion() && !type.isBoolean()) {
    return unionHint(
      type.getUnionTypes().map((part) => typeHintFromType(ctx, part, node)),
    );
  }
  const hint = kindHints.get(kindOf(type));
  return hint === undefined
    ? fail(node, `Cannot derive a type hint from ${type.getText()}`)
    : hint(ctx, type, node);
}

export function typeHint(
  ctx: Context,
  typeNode: TypeNode | undefined,
  type: Type,
  node: Node,
): string {
  if (typeNode !== undefined) {
    return typeHintFromNode(ctx, typeNode);
  }
  return typeHintFromType(ctx, type, node);
}

export function returnType(
  ctx: Context,
  node: MethodDeclaration | FunctionDeclaration,
): string {
  return typeHint(ctx, node.getReturnTypeNode(), node.getReturnType(), node);
}

function restParameter(
  ctx: Context,
  parameter: ParameterDeclaration,
  name: string,
): string {
  const typeNode = parameter.getTypeNode();
  if (typeNode === undefined || !Node.isArrayTypeNode(typeNode)) {
    return fail(parameter, 'Rest parameters need an array type');
  }
  return `*${name}: ${typeHintFromNode(ctx, typeNode.getElementTypeNode())}`;
}

function parameter(ctx: Context, parameter: ParameterDeclaration): string {
  if (!Node.isIdentifier(parameter.getNameNode())) {
    fail(parameter, 'Destructuring parameters are not supported');
  }
  const name = pythonName(parameter.getName());
  if (parameter.isRestParameter()) {
    return restParameter(ctx, parameter, name);
  }
  const hint = typeHint(
    ctx,
    parameter.getTypeNode(),
    parameter.getType(),
    parameter,
  );
  const initializer = parameter.getInitializer();
  if (initializer !== undefined) {
    // Python evaluates default values once, so only literals are safe
    if (!Node.isLiteralExpression(initializer)) {
      fail(initializer, 'Default values must be literals');
    }
    return `${name}: ${hint} = ${expression(ctx, initializer).code}`;
  }
  return parameter.isOptional()
    ? `${name}: ${hint} | None = None`
    : `${name}: ${hint}`;
}

export function parameters(
  ctx: Context,
  params: ParameterDeclaration[],
): string[] {
  return params.map((param) => parameter(ctx, param));
}
