import { Node, Type } from 'ts-morph';

import { fail, kindOf } from '../index';
import { classType, thisType } from './classes';
import { Context } from './context';
import { commonType } from './types';

type TypeOf = (ctx: Context, type: Type, boxed: boolean, node: Node) => string;

function booleanType(boxed: boolean): string {
  return boxed ? 'Boolean' : 'boolean';
}

function unionType(ctx: Context, type: Type, boxed: boolean, node: Node) {
  if (type.getNonNullableType().isBoolean()) {
    // optional, as the type itself is not boolean
    return 'Boolean';
  }
  const parts = type.getUnionTypes();
  const nonNull = parts.filter((part) => !part.isUndefined() && !part.isNull());
  const optional = nonNull.length < parts.length;
  return commonType(
    nonNull.map((part) => typeFromType(ctx, part, boxed || optional, node)),
  );
}

/**
 * The types that are recognized before their kind, in this order
 */
const specialTypes: [(type: Type) => boolean, TypeOf][] = [
  [(type) => type.getText() == 'this', (ctx) => thisType(ctx)],
  [(type) => type.isAny() || type.isUnknown(), () => 'Object'],
  [(type) => type.isVoid(), () => 'void'],
  [
    (type) => type.isBoolean() || type.isBooleanLiteral(),
    (_ctx, _type, boxed) => booleanType(boxed),
  ],
  [(type) => type.isUnion(), unionType],
];

function arrayType(ctx: Context, type: Type, _boxed: boolean, node: Node) {
  const element = type.getArrayElementType();
  if (element === undefined) {
    return fail(node, 'Unsupported array type');
  }
  return `List<${typeFromType(ctx, element, true, node)}>`;
}

function mapType(ctx: Context, type: Type, _boxed: boolean, node: Node) {
  const [key, value] = type.getTypeArguments();
  return `Map<${typeFromType(ctx, key, true, node)}, ${typeFromType(ctx, value, true, node)}>`;
}

function recordType(ctx: Context, type: Type, _boxed: boolean, node: Node) {
  const index = type.getStringIndexType();
  const properties = type.getProperties();
  const value =
    index ??
    (properties.length ? properties[0].getTypeAtLocation(node) : undefined);
  if (value === undefined) {
    return 'Map<String, Object>';
  }
  return `Map<String, ${typeFromType(ctx, value, true, node)}>`;
}

function classOfType(ctx: Context, type: Type, _boxed: boolean, node: Node) {
  const declaration = type
    .getSymbolOrThrow()
    .getDeclarations()
    .find((d) => Node.isClassDeclaration(d))!;
  return classType(ctx, node, declaration);
}

const kindTypes = new Map<string, TypeOf>([
  ['string', () => 'String'],
  ['number', (_ctx, _type, boxed) => (boxed ? 'Integer' : 'int')],
  ['array', arrayType],
  [
    'set',
    (ctx, type, _boxed, node) =>
      `Set<${typeFromType(ctx, type.getTypeArguments()[0], true, node)}>`,
  ],
  ['map', mapType],
  ['date', () => 'Instant'],
  ['regexp', () => 'Pattern'],
  ['class', classOfType],
  ['record', recordType],
]);

/**
 * The Java type of an inferred type
 */
export function typeFromType(
  ctx: Context,
  type: Type,
  boxed: boolean,
  node: Node,
): string {
  const special = specialTypes.find(([matches]) => matches(type));
  const typeOf = special ? special[1] : kindTypes.get(kindOf(type));
  if (typeOf === undefined) {
    return fail(node, `Unsupported type ${type.getText()}`);
  }
  return typeOf(ctx, type, boxed, node);
}
