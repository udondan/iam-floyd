/**
 * Subset of the jsii assembly spec (`@jsii/spec`, schema `jsii/0.10.0`) we emit
 */
export interface Docs {
  summary?: string;
  remarks?: string;
  returns?: string;
  default?: string;
  deprecated?: string;
  see?: string;
  example?: string;
  stability?: string;
}

export type PrimitiveName =
  'string' | 'number' | 'boolean' | 'date' | 'json' | 'any';

export type TypeReference =
  | { fqn: string }
  | { primitive: PrimitiveName }
  | { collection: { kind: 'array' | 'map'; elementtype: TypeReference } }
  | { union: { types: TypeReference[] } };

export interface Parameter {
  name: string;
  type: TypeReference;
  optional?: boolean;
  variadic?: boolean;
  docs?: Docs;
}

export interface Method {
  name: string;
  docs?: Docs;
  parameters?: Parameter[];
  returns?: { type: TypeReference; optional?: boolean };
  static?: boolean;
  variadic?: boolean;
  overrides?: string;
}

export interface Property {
  name: string;
  type: TypeReference;
  docs?: Docs;
  static?: boolean;
  immutable?: boolean;
  const?: boolean;
  optional?: boolean;
}

export interface Initializer {
  docs?: Docs;
  parameters?: Parameter[];
  variadic?: boolean;
}

export interface ClassType {
  kind: 'class';
  fqn: string;
  assembly: string;
  symbolId: string;
  namespace?: string;
  name: string;
  docs?: Docs;
  base?: string;
  initializer?: Initializer;
  methods: Method[];
  properties?: Property[];
}

export interface EnumType {
  kind: 'enum';
  fqn: string;
  assembly: string;
  symbolId: string;
  name: string;
  docs?: Docs;
  members: { name: string; docs?: Docs }[];
}

export type JsiiType = ClassType | EnumType;

export type Variant = 'standalone' | 'cdk';

/**
 * What the generated services inherit from `PolicyStatement`
 */
export interface SharedMembers {
  base: string | undefined;
  properties: Property[];
  methods: (self: TypeReference) => Method[];
}

export const statementNamespace = 'Statement';

export const cdkBase = 'aws-cdk-lib.aws_iam.PolicyStatement';
export const cdkPropsParameter: Parameter = {
  name: 'props',
  optional: true,
  type: { fqn: 'aws-cdk-lib.aws_iam.PolicyStatementProps' },
};

export const primitive = (name: PrimitiveName): TypeReference => ({
  primitive: name,
});

export const arrayOf = (elementtype: TypeReference): TypeReference => ({
  collection: { kind: 'array', elementtype },
});

export const unionOf = (types: TypeReference[]): TypeReference =>
  types.length == 1 ? types[0] : { union: { types } };

export const uniqueTypes = (types: TypeReference[]): TypeReference[] => [
  ...new Map(types.map((t) => [JSON.stringify(t), t])).values(),
];

export function sortMembers<T extends { name: string }>(members: T[]): T[] {
  return [...members].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Whether a method of the base class is part of the fluent interface (returns `this`)
 */
export function isFluent(method: Method, base: string | undefined): boolean {
  const type = method.returns?.type;
  if (method.static || !base || !type) {
    return false;
  }
  return 'fqn' in type && type.fqn == base;
}

/**
 * A method of the base class, declared on the service class. Fluent methods return the service
 * class and are no override, as the base class doesn't declare them.
 */
export function redeclare(
  method: Method,
  base: string | undefined,
  self: TypeReference,
): Method {
  if (!isFluent(method, base)) return { ...method, overrides: base };
  return { ...method, returns: { ...method.returns, type: self } };
}

/**
 * The fluent methods of the base class a class doesn't declare itself, declared on the class
 */
export function fluentMethods(
  declared: Method[],
  baseMethods: Map<string, Method>,
  base: string | undefined,
  self: TypeReference,
): Method[] {
  const names = new Set(declared.map((m) => m.name));
  return [...baseMethods.values()]
    .filter((m) => !names.has(m.name) && isFluent(m, base))
    .map((m) => redeclare(m, base, self));
}

/**
 * The base class without its fluent methods, which are declared on each service class instead
 */
export function withoutFluentMethods(
  type: ClassType,
  base: string | undefined,
): ClassType {
  return { ...type, methods: type.methods.filter((m) => !isFluent(m, base)) };
}
