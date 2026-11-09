import { Node, Type } from 'ts-morph';

import { fail, type Kind, kindOf } from '../index';
import { classOfType, classReference, thisType } from './classes';
import { Context, firstOf } from './context';
import { optionalType, scalarType, unionOf } from './expr';

type InferredType = (
  ctx: Context,
  type: Type,
  optional: boolean,
  node: Node,
) => string | undefined;

/**
 * The types that are recognized before their kind, in this order
 */
const specialTypes: InferredType[] = [
  (ctx, type) => (type.getText() == 'this' ? thisType(ctx) : undefined),
  (_, type) => (type.isAny() || type.isUnknown() ? 'interface{}' : undefined),
  (_, type) => (type.isVoid() ? 'void' : undefined),
  (_, type) => (type.isUndefined() || type.isNull() ? 'nil' : undefined),
  (_, type, optional) =>
    type.isBoolean() || type.isBooleanLiteral()
      ? optionalType('bool', optional)
      : undefined,
  (ctx, type, optional, node) =>
    type.isUnion() ? unionType(ctx, type, optional, node) : undefined,
];

type KindType = (
  ctx: Context,
  type: Type,
  optional: boolean,
  node: Node,
) => string;

const kindTypes = new Map<Kind, KindType>([
  ['string', scalarType('string')],
  ['number', scalarType('int')],
  ['array', (ctx, type, _, node) => arrayType(ctx, type, node)],
  [
    'set',
    (ctx, type, _, node) =>
      `*js.Set[${typeFromType(ctx, type.getTypeArguments()[0], false, node)}]`,
  ],
  [
    'map',
    (ctx, type, _, node) => {
      const [key, value] = type.getTypeArguments();
      return `*js.Map[${typeFromType(ctx, key, false, node)}, ${typeFromType(ctx, value, false, node)}]`;
    },
  ],
  ['date', scalarType('time.Time')],
  ['regexp', () => '*regexp.Regexp'],
  [
    'class',
    (ctx, type, _, node) => classReference(ctx, node, classOfType(type)),
  ],
  ['record', (ctx, type, _, node) => recordType(ctx, type, node)],
]);

/**
 * The Go type of an inferred type
 */
export function typeFromType(
  ctx: Context,
  type: Type,
  optional: boolean,
  node: Node,
): string {
  const special = firstOf(specialTypes, ctx, type, optional, node);
  if (special !== undefined) {
    return special;
  }
  const handler = kindTypes.get(kindOf(type));
  if (handler === undefined) {
    return fail(node, `Unsupported type ${type.getText()}`);
  }
  return handler(ctx, type, optional, node);
}

function unionType(
  ctx: Context,
  type: Type,
  optional: boolean,
  node: Node,
): string {
  const parts = type.getUnionTypes();
  const nonNull = parts.filter((part) => !part.isUndefined() && !part.isNull());
  const isOptional = optional || nonNull.length < parts.length;
  if (type.getNonNullableType().isBoolean()) {
    return optionalType('bool', isOptional);
  }
  return unionOf(
    nonNull.map((part) => typeFromType(ctx, part, isOptional, node)),
  );
}

function arrayType(ctx: Context, type: Type, node: Node): string {
  const element = type.getArrayElementType();
  if (element === undefined) {
    return fail(node, 'Unsupported array type');
  }
  return `[]${typeFromType(ctx, element, false, node)}`;
}

function recordType(ctx: Context, type: Type, node: Node): string {
  const index = type.getStringIndexType();
  if (index) {
    return `*js.Record[${typeFromType(ctx, index, false, node)}]`;
  }
  const properties = type.getProperties();
  if (properties.length) {
    return `*js.Record[${typeFromType(ctx, properties[0].getTypeAtLocation(node), false, node)}]`;
  }
  return '*js.Record[interface{}]';
}
