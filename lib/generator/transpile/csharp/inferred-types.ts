import { Node, Type } from 'ts-morph';

import { fail, Kind, kindOf } from '../index';
import { classReference, thisType } from './classes';
import { Context } from './context';
import { commonType, optionalType } from './nullable';

/**
 * The C# types of `this`, `any`, `void` and booleans, if the type is one of them
 */
function simpleType(
  ctx: Context,
  type: Type,
  optional: boolean,
): string | undefined {
  if (type.getText() == 'this') {
    return thisType(ctx);
  }
  if (type.isAny() || type.isUnknown()) {
    return 'object';
  }
  if (type.isVoid()) {
    return 'void';
  }
  if (type.isBoolean() || type.isBooleanLiteral()) {
    return optionalType('bool', optional);
  }
  return undefined;
}

function unionType(
  ctx: Context,
  type: Type,
  optional: boolean,
  node: Node,
): string {
  const parts = type.getUnionTypes();
  const nonNull = parts.filter((part) => !part.isUndefined() && !part.isNull());
  if (type.getNonNullableType().isBoolean()) {
    // boolean itself is a simple type, so the union has undefined or null
    return 'bool?';
  }
  const isOptional = optional || nonNull.length < parts.length;
  return commonType(
    nonNull.map((part) => typeFromType(ctx, part, isOptional, node)),
  );
}

type TypeOf = (
  ctx: Context,
  type: Type,
  optional: boolean,
  node: Node,
) => string;

function arrayType(ctx: Context, type: Type, _optional: boolean, node: Node) {
  const element = type.getArrayElementType();
  if (element === undefined) {
    return fail(node, 'Unsupported array type');
  }
  return `List<${typeFromType(ctx, element, false, node)}>`;
}

function mapType(ctx: Context, type: Type, _optional: boolean, node: Node) {
  const [key, value] = type.getTypeArguments();
  return `Dictionary<${typeFromType(ctx, key, false, node)}, ${typeFromType(ctx, value, false, node)}>`;
}

function classType(ctx: Context, type: Type, _optional: boolean, node: Node) {
  const declaration = type
    .getSymbolOrThrow()
    .getDeclarations()
    .find((d) => Node.isClassDeclaration(d))!;
  return classReference(ctx, node, declaration);
}

function recordType(ctx: Context, type: Type, _optional: boolean, node: Node) {
  const index = type.getStringIndexType();
  if (index) {
    return `Dictionary<string, ${typeFromType(ctx, index, false, node)}>`;
  }
  const properties = type.getProperties();
  if (properties.length) {
    return `Dictionary<string, ${typeFromType(ctx, properties[0].getTypeAtLocation(node), false, node)}>`;
  }
  return 'Dictionary<string, object>';
}

/**
 * The C# types by the kind of the value
 */
const kindTypes = new Map<Kind, TypeOf>([
  ['string', () => 'string'],
  ['number', (_ctx, _type, optional) => optionalType('int', optional)],
  ['array', arrayType],
  [
    'set',
    (ctx, type, _optional, node) =>
      `HashSet<${typeFromType(ctx, type.getTypeArguments()[0], false, node)}>`,
  ],
  ['map', mapType],
  ['date', (_ctx, _type, optional) => optionalType('DateTime', optional)],
  ['regexp', () => 'Regex'],
  ['class', classType],
  ['record', recordType],
]);

/**
 * The C# type of an inferred type
 */
export function typeFromType(
  ctx: Context,
  type: Type,
  optional: boolean,
  node: Node,
): string {
  const simple = simpleType(ctx, type, optional);
  if (simple !== undefined) {
    return simple;
  }
  if (type.isUnion()) {
    return unionType(ctx, type, optional, node);
  }
  const typeOf = kindTypes.get(kindOf(type));
  if (typeOf === undefined) {
    return fail(node, `Unsupported type ${type.getText()}`);
  }
  return typeOf(ctx, type, optional, node);
}
