import { createHash } from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import {
  ClassDeclaration,
  EnumDeclaration,
  JSDoc,
  MethodDeclaration,
  Node,
  ParameterDeclaration,
  Project,
  PropertyDeclaration,
  Scope,
  SourceFile,
  Type,
} from 'ts-morph';
import { gunzipSync, gzipSync } from 'zlib';

import { ServiceModel } from '../model';
import { PackageJson } from '../package-json';

/**
 * Subset of the jsii assembly spec (`@jsii/spec`, schema `jsii/0.10.0`) we emit
 */
interface Docs {
  summary?: string;
  remarks?: string;
  returns?: string;
  default?: string;
  deprecated?: string;
  see?: string;
  example?: string;
  stability?: string;
}

type TypeReference =
  | { fqn: string }
  | { primitive: 'string' | 'number' | 'boolean' | 'date' | 'json' | 'any' }
  | { collection: { kind: 'array' | 'map'; elementtype: TypeReference } }
  | { union: { types: TypeReference[] } };

interface Parameter {
  name: string;
  type: TypeReference;
  optional?: boolean;
  variadic?: boolean;
  docs?: Docs;
}

interface Method {
  name: string;
  docs?: Docs;
  parameters?: Parameter[];
  returns?: { type: TypeReference; optional?: boolean };
  static?: boolean;
  variadic?: boolean;
  overrides?: string;
}

interface Property {
  name: string;
  type: TypeReference;
  docs?: Docs;
  static?: boolean;
  immutable?: boolean;
  optional?: boolean;
}

interface Initializer {
  docs?: Docs;
  parameters?: Parameter[];
  variadic?: boolean;
}

interface ClassType {
  kind: 'class';
  fqn: string;
  assembly: string;
  symbolId: string;
  namespace?: string;
  name: string;
  docs?: Docs;
  base?: string;
  initializer?: Initializer;
  methods?: Method[];
  properties?: Property[];
}

interface EnumType {
  kind: 'enum';
  fqn: string;
  assembly: string;
  symbolId: string;
  name: string;
  docs?: Docs;
  members: { name: string; docs?: Docs }[];
}

type JsiiType = ClassType | EnumType;

interface DependencyConfiguration {
  targets?: Record<string, unknown>;
  submodules?: Record<string, { targets?: Record<string, unknown> }>;
}

export type Variant = 'standalone' | 'cdk';

export interface JsiiOptions {
  variant: Variant;
  version: string;
  /**
   * Where to write `.jsii` and `.jsii.gz`
   */
  outDir: string;
}

const statementNamespace = 'Statement';

const cdkBase = 'aws-cdk-lib.aws_iam.PolicyStatement';
const cdkPropsParameter: Parameter = {
  name: 'props',
  optional: true,
  type: { fqn: 'aws-cdk-lib.aws_iam.PolicyStatementProps' },
};

const warnings = new Set<string>();

function warn(message: string) {
  if (!warnings.has(message)) {
    warnings.add(message);
    console.warn(`[jsii] ${message}`);
  }
}

/**
 * Splits a doc comment the way jsii does: the first sentence becomes the summary, the rest
 * the remarks.
 */
function splitDocs(text: string | undefined): Docs {
  const docs: Docs = {};
  if (!text) return docs;
  const trimmed = text.trim();
  if (!trimmed.length) return docs;
  const match = /^([\s\S]*?[.?!])(\s+)([\s\S]*)$/.exec(trimmed);
  const firstParagraph = trimmed.split(/\n\s*\n/)[0];
  if (match && match[1].length <= firstParagraph.length) {
    docs.summary = match[1].replace(/\s+/g, ' ');
    if (match[3].trim().length) docs.remarks = match[3].trim();
  } else {
    docs.summary = firstParagraph.replace(/\s+/g, ' ');
    const rest = trimmed.slice(firstParagraph.length).trim();
    if (rest.length) docs.remarks = rest;
  }
  return docs;
}

function withStability(docs: Docs): Docs {
  return { ...docs, stability: 'stable' };
}

const primitive = (
  name: 'string' | 'number' | 'boolean' | 'date' | 'json' | 'any',
): TypeReference => ({ primitive: name });

const arrayOf = (elementtype: TypeReference): TypeReference => ({
  collection: { kind: 'array', elementtype },
});

const unionOf = (types: TypeReference[]): TypeReference =>
  types.length == 1 ? types[0] : { union: { types } };

const uniqueTypes = (types: TypeReference[]): TypeReference[] => [
  ...new Map(types.map((t) => [JSON.stringify(t), t])).values(),
];

/**
 * Value types used in the model are TypeScript type names
 */
function modelValueType(name: string): TypeReference {
  switch (name) {
    case 'string':
      return primitive('string');
    case 'number':
      return primitive('number');
    case 'Date':
      // Dates are passed as ISO 8601 strings. jsii-pacmak's Go target misses the `time` import
      // for dates in unions, which breaks every Go library that subclasses a statement provider.
      return primitive('string');
    case 'boolean':
      return primitive('boolean');
    default:
      throw new Error(`Unknown model value type: ${name}`);
  }
}

/**
 * Builds the jsii types of the generated service classes from their JSON model
 */
function serviceType(
  assembly: string,
  model: ServiceModel,
  variant: Variant,
  shared: SharedMembers,
  baseMethods: Map<string, Method>,
): ClassType {
  const fqn = `${assembly}.${statementNamespace}.${model.className}`;
  const self: TypeReference = { fqn };
  const operatorType: TypeReference = unionOf([
    { fqn: `${assembly}.Operator` },
    primitive('string'),
  ]);

  const description = `Statement provider for service [${model.name}](${model.url}).`;

  const methods: Method[] = [];

  for (const action of model.actions) {
    let remarks = `Access Level: ${action.accessLevel}`;
    if (action.conditionMethods) {
      remarks += `\n\nPossible conditions:\n${action.conditionMethods.map((c) => `- .${c}()`).join('\n')}`;
    }
    if (action.dependentActions) {
      remarks += `\n\nDependent actions:\n${action.dependentActions.map((a) => `- ${a}`).join('\n')}`;
    }
    if (action.url.length && action.url != 'https://docs.aws.amazon.com/') {
      remarks += `\n\n${action.url}`;
    }
    methods.push({
      name: action.methodName,
      docs: withStability({ ...splitDocs(action.description), remarks }),
      returns: { type: self },
    });
  }

  for (const resource of model.resources) {
    const required: Parameter[] = [];
    const optional: Parameter[] = [];
    for (const { name, kind } of resource.placeholders) {
      let doc: string;
      if (kind == 'partition') {
        doc = `Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to \`aws\`, unless using the CDK, where the default is the current Stack's partition.`;
      } else if (kind == 'region') {
        doc = `Region of the resource; defaults to \`*\`, unless using the CDK, where the default is the current Stack's region.`;
      } else if (kind == 'account') {
        doc = `Account of the resource; defaults to \`*\`, unless using the CDK, where the default is the current Stack's account.`;
      } else {
        doc = `Identifier for the ${name}.`;
      }
      const parameter: Parameter = {
        name,
        type: primitive('string'),
        docs: { summary: doc },
      };
      if (kind == 'required') {
        required.push(parameter);
      } else {
        optional.push({ ...parameter, optional: true });
      }
    }

    let remarks = '';
    if (resource.url.length && resource.url != 'https://docs.aws.amazon.com/') {
      remarks += resource.url;
    }
    if (resource.conditionMethods.length) {
      remarks += `\n\nPossible conditions:\n${resource.conditionMethods.map((c) => `- .${c}()`).join('\n')}`;
    }
    methods.push({
      name: resource.methodName,
      docs: withStability({
        summary: `Adds a resource of type ${resource.name} to the statement.`,
        ...(remarks.trim().length ? { remarks: remarks.trim() } : {}),
      }),
      parameters: [...required, ...optional],
      returns: { type: self },
    });
  }

  for (const condition of model.conditions) {
    const docs = splitDocs(condition.description);
    let remarks = docs.remarks ?? '';
    if (condition.url.length) remarks += `\n\n${condition.url}`;
    if (condition.relatedActionMethods.length) {
      remarks += `\n\nApplies to actions:\n${condition.relatedActionMethods.map((a) => `- .${a}()`).join('\n')}`;
    }
    if (condition.relatedResourceTypes.length) {
      remarks += `\n\nApplies to resource types:\n${condition.relatedResourceTypes.map((r) => `- ${r}`).join('\n')}`;
    }

    const parameters: Parameter[] = [];
    if (typeof condition.keyParam !== 'undefined') {
      parameters.push({
        name: condition.keyParam,
        type: primitive('string'),
        docs: { summary: 'The tag key to check.' },
      });
    }
    if (condition.valueKind == 'boolean') {
      parameters.push({
        name: 'value',
        type: primitive('boolean'),
        optional: true,
        docs: { summary: '`true` or `false`.', default: 'true' },
      });
    } else {
      const single = uniqueTypes(condition.valueTypes!.map(modelValueType));
      parameters.push({
        name: 'value',
        type: unionOf([...single, arrayOf(unionOf(single))]),
        docs: { summary: 'The value(s) to check.' },
      });
      parameters.push({
        name: 'operator',
        type: operatorType,
        optional: true,
        docs: {
          summary: `Works with [${condition.valueKind} operators](${condition.operatorUrl}).`,
          default: condition.defaultOperator,
        },
      });
    }

    const conditionDocs = withStability({
      summary: docs.summary ?? `Filters access by ${condition.key}.`,
      ...(remarks.trim().length ? { remarks: remarks.trim() } : {}),
    });
    const inherited = shared.base
      ? baseMethods.get(condition.methodName)
      : undefined;
    if (inherited) {
      // Global conditions like `ifAwsRequestTag`, documented per service
      methods.push({
        ...redeclare(inherited, shared.base, self),
        docs: conditionDocs,
      });
      continue;
    }
    methods.push({
      name: condition.methodName,
      docs: conditionDocs,
      parameters,
      returns: { type: self },
    });
  }

  // Declare the fluent methods of the base class on the service class, returning the service class.
  // They are removed from the base class (see `withoutFluentMethods`): Go has no covariant returns
  // and renders every method with the signature of its topmost declaration, also in the Go code of
  // other jsii libraries subclassing a service class. Only if the service class declares a method
  // first does `Allow()` return `S3` in Go.
  const declared = new Set(methods.map((m) => m.name));
  for (const method of baseMethods.values()) {
    if (declared.has(method.name) || !isFluent(method, shared.base)) continue;
    methods.push(redeclare(method, shared.base, self));
  }

  return {
    kind: 'class',
    fqn,
    assembly,
    symbolId: `lib/generated/policy-statements/${model.filename}:${model.className}`,
    namespace: statementNamespace,
    name: model.className,
    docs: withStability({ summary: description }),
    ...(shared.base ? { base: shared.base } : {}),
    initializer: {
      docs: withStability({ summary: description }),
      parameters: [
        variant == 'cdk'
          ? cdkPropsParameter
          : {
              name: 'sid',
              optional: true,
              type: primitive('string'),
              docs: {
                summary:
                  '[SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement.',
              },
            },
      ],
    },
    properties: shared.properties,
    methods: sortMembers([...shared.methods(self), ...methods]),
  };
}

/**
 * Whether a method of the base class is part of the fluent interface (returns `this`)
 */
function isFluent(method: Method, base: string | undefined): boolean {
  const type = method.returns?.type;
  return (
    !method.static && !!base && !!type && 'fqn' in type && type.fqn == base
  );
}

/**
 * A method of the base class, declared on the service class. Fluent methods return the service
 * class and are no override, as the base class doesn't declare them.
 */
function redeclare(
  method: Method,
  base: string | undefined,
  self: TypeReference,
): Method {
  if (!isFluent(method, base)) return { ...method, overrides: base };
  return { ...method, returns: { ...method.returns, type: self } };
}

/**
 * The base class without its fluent methods, which are declared on each service class instead
 */
function withoutFluentMethods(
  type: JsiiType,
  base: string | undefined,
): JsiiType {
  if (type.kind != 'class') return type;
  return { ...type, methods: type.methods?.filter((m) => !isFluent(m, base)) };
}

function sortMembers<T extends { name: string }>(members: T[]): T[] {
  return [...members].sort((a, b) => a.name.localeCompare(b.name));
}

interface SharedMembers {
  base: string | undefined;
  properties: Property[];
  methods: (self: TypeReference) => Method[];
}

/**
 * Reads the hand-written classes in `lib/shared` and friends via the TypeScript type checker
 */
class SharedExtractor {
  private readonly project: Project;
  private readonly root: SourceFile;
  /**
   * Declarations exported from the package, mapped to their jsii FQN
   */
  private readonly exported = new Map<Node, string>();
  private readonly generatedDir: string;

  constructor(
    private readonly assembly: string,
    private readonly variant: Variant,
  ) {
    this.project = new Project({
      tsConfigFilePath: 'tsconfig.json',
      skipAddingFilesFromTsConfig: true,
    });
    this.generatedDir = path.resolve('lib/generated/policy-statements');
    if (variant == 'cdk') this.applyCdkSwap();
    this.root = this.project.addSourceFileAtPath('lib/index.ts');
    this.project.resolveSourceFileDependencies();
  }

  /**
   * In-memory equivalent of `bin/mkcdk.ts` for the files we inspect
   */
  private applyCdkSwap() {
    const dir = 'lib/shared/policy-statement';
    for (const swapDir of [dir, 'lib/shared/policy']) {
      for (const file of fs.readdirSync(swapDir)) {
        if (!file.endsWith('.CDK.ts')) continue;
        const target = path.join(swapDir, file.replace('.CDK.ts', '.ts'));
        this.project.createSourceFile(
          target,
          fs.readFileSync(path.join(swapDir, file), 'utf8'),
          { overwrite: true },
        );
      }
    }
    const principals = this.project.addSourceFileAtPath(
      `${dir}/8-principals.ts`,
    );
    principals.getImportDeclarations().forEach((importDeclaration) => {
      const named = importDeclaration.getNamedImports()[0];
      if (named?.getName() === 'PolicyStatementWithArnDefaults') {
        importDeclaration.setModuleSpecifier('./7-arn-defaults-CDK');
        named.setName('PolicyStatementWithArnDefaultsForCdk');
      }
    });
    principals
      .getClassOrThrow('PolicyStatementWithPrincipal')
      .setExtends('PolicyStatementWithArnDefaultsForCdk');

    this.project
      .addSourceFileAtPath('lib/generated/aws-managed-policies/index.ts')
      .getExportDeclarationOrThrow('./iam-floyd')
      .setModuleSpecifier('./cdk-iam-floyd');
  }

  /**
   * Collects the exported classes and enums of the package, except the generated services
   */
  collectTypes(): JsiiType[] {
    const types: JsiiType[] = [];
    const classes: [ClassDeclaration, string, string | undefined][] = [];

    const visit = (file: SourceFile, namespace: string | undefined) => {
      for (const [name, declarations] of file.getExportedDeclarations()) {
        for (const declaration of declarations) {
          if (Node.isSourceFile(declaration)) {
            // export * as Statement from './statements'
            visit(declaration, name);
            continue;
          }
          const fqn = namespace
            ? `${this.assembly}.${namespace}.${name}`
            : `${this.assembly}.${name}`;
          if (Node.isClassDeclaration(declaration)) {
            this.exported.set(declaration, fqn);
            if (!this.isGeneratedService(declaration)) {
              classes.push([declaration, fqn, namespace]);
            }
          } else if (Node.isEnumDeclaration(declaration)) {
            this.exported.set(declaration, fqn);
            types.push({
              kind: 'enum',
              fqn,
              assembly: this.assembly,
              symbolId: this.symbolId(declaration),
              name,
              docs: withStability(splitDocs(this.jsDocText(declaration))),
              members: declaration.getMembers().map((member) => ({
                name: member
                  .getName()
                  .replace(/([a-z])([A-Z])/g, '$1_$2')
                  .toUpperCase(),
                docs: splitDocs(this.jsDocText(member)),
              })),
            });
          }
          // Type aliases and interfaces only used for typing are not part of the jsii API
        }
      }
    };
    visit(this.root, undefined);

    for (const [declaration, fqn, namespace] of classes) {
      types.push(this.classType(declaration, fqn, namespace));
    }
    return types;
  }

  /**
   * The identifier jsii uses to map a TypeScript declaration of a dependency to its jsii type:
   * `<source file relative to the package, without extension>:<name>`
   */
  private symbolId(declaration: ClassDeclaration | EnumDeclaration): string {
    const file = path
      .relative(process.cwd(), declaration.getSourceFile().getFilePath())
      .replace(/\.ts$/, '');
    const name = declaration.getName();
    if (!name) throw new Error(`Anonymous declaration in ${file}`);
    return `${file}:${name}`;
  }

  private isGeneratedService(declaration: ClassDeclaration): boolean {
    return (
      path.dirname(declaration.getSourceFile().getFilePath()) ==
      this.generatedDir
    );
  }

  /**
   * What the generated services inherit from `PolicyStatement`. If it is exported, the services
   * simply extend it; otherwise its members are hoisted into every service.
   */
  policyStatementMembers(): SharedMembers {
    const policyStatement = this.project
      .getSourceFileOrThrow('lib/shared/policy-statement/10-final.ts')
      .getClassOrThrow('PolicyStatement');
    const exported = this.exported.get(policyStatement);
    if (exported) {
      return { base: exported, properties: [], methods: () => [] };
    }
    const { methods, properties, base } = this.collectMembers(policyStatement);
    return {
      base,
      properties: properties.map((p) => this.property(p)),
      methods: (self) => methods.map((m) => this.method(m, self)),
    };
  }

  private classType(
    declaration: ClassDeclaration,
    fqn: string,
    namespace: string | undefined,
  ): ClassType {
    const self: TypeReference = { fqn };
    const { methods, properties, base, constructorSource } =
      this.collectMembers(declaration);
    const initializer = this.initializer(constructorSource);

    // jsii does not allow a static and an instance member with the same name, since that can't
    // be represented in e.g. Python. Keep the instance methods, e.g. `new Operator().stringEquals()`
    const methodNames = new Set(
      methods.filter((m) => !m.isStatic()).map((m) => m.getName()),
    );
    const clashing = properties.filter(
      (p) => p.isStatic() && methodNames.has(p.getName()),
    );
    if (clashing.length) {
      warn(
        `${fqn}: omitting ${clashing.length} static properties that clash with instance methods`,
      );
    }
    const kept = properties.filter((p) => !clashing.includes(p));

    return {
      kind: 'class',
      fqn,
      assembly: this.assembly,
      symbolId: this.symbolId(declaration),
      ...(namespace ? { namespace } : {}),
      name: declaration.getNameOrThrow(),
      docs: withStability(splitDocs(this.jsDocText(declaration))),
      ...(base ? { base } : {}),
      ...(initializer ? { initializer } : {}),
      properties: sortMembers(kept.map((p) => this.property(p))),
      methods: sortMembers(methods.map((m) => this.method(m, self))),
    };
  }

  /**
   * Walks up the inheritance chain and hoists the public members of every base class that is
   * not exported from the package (jsii calls this type erasure), until an exported or
   * external base class is reached.
   */
  private collectMembers(declaration: ClassDeclaration) {
    const methods = new Map<string, MethodDeclaration>();
    const properties = new Map<string, PropertyDeclaration>();
    let constructorSource: ClassDeclaration | undefined;
    let base: string | undefined;

    let current: ClassDeclaration | undefined = declaration;
    while (current) {
      if (!constructorSource && current.getConstructors().length) {
        constructorSource = current;
      }
      for (const method of current.getMethods()) {
        if (!this.isPublic(method)) continue;
        if (!methods.has(method.getName()))
          methods.set(method.getName(), method);
      }
      for (const property of current.getProperties()) {
        if (!this.isPublic(property)) continue;
        if (!properties.has(property.getName())) {
          properties.set(property.getName(), property);
        }
      }

      const parent: ClassDeclaration | undefined = current.getBaseClass();
      if (!parent) {
        const heritage = current.getExtends();
        if (heritage) base = this.externalFqn(heritage.getType());
        break;
      }
      if (this.isExternal(parent)) {
        base = this.externalFqn(parent.getType());
        break;
      }
      if (this.exported.has(parent)) {
        base = this.exported.get(parent);
        break;
      }
      current = parent;
    }

    // a class without constructor inherits the one of its external base, e.g. CDK's props
    if (!constructorSource && this.variant == 'cdk' && base == cdkBase) {
      return {
        methods: [...methods.values()],
        properties: [...properties.values()],
        base,
        constructorSource: 'cdk' as const,
      };
    }

    return {
      methods: [...methods.values()],
      properties: [...properties.values()],
      base,
      constructorSource,
    };
  }

  private isPublic(node: MethodDeclaration | PropertyDeclaration): boolean {
    if (node.getScope() != Scope.Public) return false;
    return !node.getName().startsWith('#');
  }

  private isExternal(declaration: Node): boolean {
    return declaration.getSourceFile().isInNodeModules();
  }

  private initializer(
    source: ClassDeclaration | 'cdk' | undefined,
  ): Initializer | undefined {
    if (source === 'cdk') return { parameters: [cdkPropsParameter] };
    if (!source) return {};
    const constructor = source.getConstructors()[0];
    if (
      this.variant == 'cdk' &&
      source.getSourceFile().getFilePath().endsWith('/lib/shared/all.ts')
    ) {
      // bin/mkcdk.ts replaces the `sid` of `All` with CDK props, like for the services
      return {
        docs: withStability(this.docs(constructor.getJsDocs())),
        parameters: [cdkPropsParameter],
      };
    }
    if (constructor.getScope() && constructor.getScope() != Scope.Public) {
      return undefined;
    }
    const docs = this.docs(constructor.getJsDocs());
    const parameters = constructor
      .getParameters()
      .map((p) => this.parameter(p, constructor.getJsDocs(), undefined));
    return {
      ...(Object.keys(docs).length ? { docs: withStability(docs) } : {}),
      ...(parameters.length ? { parameters } : {}),
      ...(parameters.some((p) => p.variadic) ? { variadic: true } : {}),
    };
  }

  private method(method: MethodDeclaration, self: TypeReference): Method {
    const jsDocs = method.getJsDocs();
    const parameters = method
      .getParameters()
      .map((p) => this.parameter(p, jsDocs, self));
    const returnType = method.getReturnType();
    const docs = this.docs(jsDocs);
    const result: Method = {
      name: method.getName(),
      docs: withStability(docs),
    };
    if (parameters.length) result.parameters = parameters;
    if (parameters.some((p) => p.variadic)) result.variadic = true;
    if (!returnType.isVoid()) {
      result.returns = {
        type: this.typeReference(returnType, self, method),
        ...(this.isOptional(returnType) ? { optional: true } : {}),
      };
    }
    if (method.isStatic()) result.static = true;
    return result;
  }

  private property(property: PropertyDeclaration): Property {
    const type = property.getType();
    const result: Property = {
      name: property.getName(),
      type: this.typeReference(type, undefined, property),
      docs: withStability(this.docs(property.getJsDocs())),
    };
    if (property.isStatic()) result.static = true;
    if (property.isReadonly()) result.immutable = true;
    if (property.hasQuestionToken()) result.optional = true;
    return result;
  }

  private parameter(
    parameter: ParameterDeclaration,
    jsDocs: JSDoc[],
    self: TypeReference | undefined,
  ): Parameter {
    const name = parameter.getName();
    let type = parameter.getType();
    const variadic = parameter.isRestParameter();
    if (variadic) type = type.getArrayElementTypeOrThrow();
    const result: Parameter = {
      name,
      type: this.typeReference(type, self, parameter),
    };
    if (variadic) {
      result.variadic = true;
    } else if (parameter.isOptional() || parameter.hasInitializer()) {
      result.optional = true;
    }
    const doc = this.paramDoc(jsDocs, name);
    if (doc) result.docs = { summary: doc };
    return result;
  }

  private isOptional(type: Type): boolean {
    return type.isUnion() && type.getUnionTypes().some((t) => t.isUndefined());
  }

  private typeReference(
    type: Type,
    self: TypeReference | undefined,
    context: Node,
  ): TypeReference {
    if (type.getText() === 'this' || type.isTypeParameter()) {
      if (self) return self;
      warn(
        `'this' without context at ${context.getSourceFile().getBaseName()}`,
      );
      return primitive('any');
    }
    if (type.isAny() || type.isUnknown()) return primitive('any');
    if (type.isBoolean() || type.isBooleanLiteral())
      return primitive('boolean');
    if (type.isString() || type.isStringLiteral() || type.isTemplateLiteral()) {
      return primitive('string');
    }
    if (type.isNumber() || type.isNumberLiteral()) return primitive('number');
    if (type.isArray()) {
      return arrayOf(
        this.typeReference(type.getArrayElementTypeOrThrow(), self, context),
      );
    }
    if (type.isUnion()) {
      const members = type
        .getUnionTypes()
        .filter((t) => !t.isUndefined() && !t.isNull());
      // `boolean` is `true | false` in the checker
      if (members.every((t) => t.isBooleanLiteral()))
        return primitive('boolean');
      if (members.length == 1)
        return this.typeReference(members[0], self, context);
      // enum types are unions of their members
      const enumDeclaration = type.getSymbol()?.getDeclarations()[0];
      if (enumDeclaration && Node.isEnumDeclaration(enumDeclaration)) {
        return this.namedReference(enumDeclaration, type, context);
      }
      // with undefined, e.g. of an optional parameter, the union has the members of the enum
      const memberEnums = new Set(
        members.map((t) =>
          t.isEnumLiteral()
            ? t.getSymbol()?.getDeclarations()[0]?.getParent()
            : undefined,
        ),
      );
      if (memberEnums.size == 1) {
        const [memberEnum] = memberEnums;
        if (memberEnum && Node.isEnumDeclaration(memberEnum)) {
          return this.namedReference(memberEnum, type, context);
        }
      }
      const refs: TypeReference[] = [];
      for (const member of members) {
        const ref = this.typeReference(member, self, context);
        if (!refs.some((r) => JSON.stringify(r) == JSON.stringify(ref))) {
          refs.push(ref);
        }
      }
      return unionOf(refs);
    }
    const symbol = type.getSymbol() ?? type.getAliasSymbol();
    // see modelValueType() on why dates are strings
    if (symbol?.getName() === 'Date') return primitive('string');
    const declaration = symbol?.getDeclarations()[0];
    if (
      declaration &&
      (Node.isClassDeclaration(declaration) ||
        Node.isEnumDeclaration(declaration) ||
        Node.isInterfaceDeclaration(declaration))
    ) {
      return this.namedReference(declaration, type, context);
    }
    warn(
      `Unsupported type '${type.getText()}' in ${context.getSourceFile().getBaseName()}, using any`,
    );
    return primitive('any');
  }

  /**
   * Types of the root namespace must not reference statement providers: they extend the root
   * `PolicyStatement`, and Go does not allow the resulting import cycle between the packages.
   * These references are widened to `PolicyStatement`.
   */
  private withoutImportCycle(fqn: string, context: Node): string {
    const submodule = `${this.assembly}.${statementNamespace}.`;
    if (!fqn.startsWith(submodule)) return fqn;
    const owner = Node.isClassDeclaration(context)
      ? context
      : context.getFirstAncestor(Node.isClassDeclaration);
    const ownerFqn = owner ? this.exported.get(owner) : undefined;
    if (!ownerFqn || ownerFqn.startsWith(submodule)) return fqn;
    return `${this.assembly}.PolicyStatement`;
  }

  private namedReference(
    declaration: Node,
    type: Type,
    context: Node,
  ): TypeReference {
    const fqn = this.exported.get(declaration);
    if (fqn) return { fqn: this.withoutImportCycle(fqn, context) };
    if (this.isExternal(declaration)) return { fqn: this.externalFqn(type) };
    if (Node.isEnumDeclaration(declaration)) {
      // not exported, so users can only pass the literal values
      warn(
        `Enum ${declaration.getName()} used in ${context.getSourceFile().getBaseName()} is not exported, using string`,
      );
      return primitive('string');
    }
    warn(
      `Type ${type.getText()} used in ${context.getSourceFile().getBaseName()} is not exported, using any`,
    );
    return primitive('any');
  }

  /**
   * Maps a type declared in aws-cdk-lib/constructs to its jsii FQN, e.g.
   * `node_modules/aws-cdk-lib/aws-iam/lib/policy-statement.d.ts` → `aws-cdk-lib.aws_iam.PolicyStatement`
   */
  private externalFqn(type: Type): string {
    const symbol = type.getSymbol() ?? type.getAliasSymbol();
    const declaration = symbol?.getDeclarations()[0];
    if (!symbol || !declaration) {
      throw new Error(`Cannot resolve external type ${type.getText()}`);
    }
    const file = declaration.getSourceFile().getFilePath();
    const match = /node_modules\/(@[^/]+\/[^/]+|[^/]+)\/(.*)$/.exec(file);
    if (!match) throw new Error(`Not an external type: ${file}`);
    const [, pkg, rest] = match;
    const name = symbol.getName();
    if (pkg == 'aws-cdk-lib') {
      const submodule = rest.split('/')[0];
      if (submodule != 'core' && submodule != 'lib') {
        return `${pkg}.${submodule.replace(/-/g, '_')}.${name}`;
      }
    }
    return `${pkg}.${name}`;
  }

  private jsDocText(node: Node): string | undefined {
    if (!Node.isJSDocable(node)) return undefined;
    const jsDocs = node.getJsDocs();
    if (!jsDocs.length) return undefined;
    return jsDocs[jsDocs.length - 1].getDescription();
  }

  private docs(jsDocs: JSDoc[]): Docs {
    if (!jsDocs.length) return {};
    const jsDoc = jsDocs[jsDocs.length - 1];
    const docs = splitDocs(jsDoc.getDescription());
    for (const tag of jsDoc.getTags()) {
      const text = (tag.getCommentText() ?? '').trim();
      switch (tag.getTagName()) {
        case 'returns':
        case 'return':
          docs.returns = text;
          break;
        case 'default':
          docs.default = text;
          break;
        case 'deprecated':
          docs.deprecated = text;
          break;
        case 'see':
          docs.see = text;
          break;
        case 'example':
          docs.example = text;
          break;
      }
    }
    return docs;
  }

  private paramDoc(jsDocs: JSDoc[], name: string): string | undefined {
    for (const jsDoc of jsDocs) {
      for (const tag of jsDoc.getTags()) {
        if (Node.isJSDocParameterTag(tag) && tag.getName() == name) {
          return (tag.getCommentText() ?? '').replace(/^\s*-\s*/, '').trim();
        }
      }
    }
    return undefined;
  }
}

/**
 * Loads a jsii assembly from an installed package, following `.jsii.gz` redirects
 */
interface InstalledAssembly {
  name: string;
  targets?: Record<string, unknown>;
  submodules?: Record<string, { targets?: Record<string, unknown> }>;
  dependencies?: Record<string, string>;
}

function loadInstalledAssembly(pkg: string): InstalledAssembly {
  const dir = path.dirname(require.resolve(`${pkg}/package.json`));
  const file = path.join(dir, '.jsii');
  const content = JSON.parse(fs.readFileSync(file, 'utf8')) as
    | InstalledAssembly
    | { schema: 'jsii/file-redirect'; filename: string; compression?: string };
  if ('schema' in content && content.schema == 'jsii/file-redirect') {
    const buffer = fs.readFileSync(path.join(dir, content.filename));
    return JSON.parse(
      (content.compression == 'gzip' ? gunzipSync(buffer) : buffer).toString(
        'utf8',
      ),
    ) as InstalledAssembly;
  }
  return content as InstalledAssembly;
}

/**
 * Collects the targets of all jsii dependencies, transitively, like jsii does
 */
function dependencyClosure(
  dependencies: string[],
): Record<string, DependencyConfiguration> {
  const closure: Record<string, DependencyConfiguration> = {};
  const queue = [...dependencies];
  while (queue.length) {
    const pkg = queue.shift()!;
    if (closure[pkg]) continue;
    const assembly = loadInstalledAssembly(pkg);
    const submodules: Record<string, { targets?: Record<string, unknown> }> =
      {};
    for (const [fqn, submodule] of Object.entries(assembly.submodules ?? {})) {
      if (submodule.targets) submodules[fqn] = { targets: submodule.targets };
    }
    closure[pkg] = {
      ...(assembly.targets ? { targets: assembly.targets } : {}),
      ...(Object.keys(submodules).length ? { submodules } : {}),
    };
    queue.push(...Object.keys(assembly.dependencies ?? {}));
  }
  return closure;
}

/**
 * Renders a jsii assembly (`.jsii`) describing the package, so it can be listed and documented
 * on Construct Hub without being compiled by jsii.
 */
export function emitJsii(models: ServiceModel[], options: JsiiOptions) {
  const { variant, version, outDir } = options;
  const packageJson = JSON.parse(
    fs.readFileSync('package.json', 'utf8'),
  ) as PackageJson;

  const name = variant == 'cdk' ? 'cdk-iam-floyd' : 'iam-floyd';
  const description =
    variant == 'cdk'
      ? `${packageJson.description} for AWS CDK`
      : packageJson.description;
  const keywords: string[] = [...packageJson.keywords];
  if (variant == 'cdk') keywords.push('cdk', 'aws-cdk');
  const dependencies: Record<string, string> =
    variant == 'cdk' ? { 'aws-cdk-lib': '^2.0.0', constructs: '^10.0.0' } : {};

  const pythonModule = name.replace(/-/g, '_');

  const extractor = new SharedExtractor(name, variant);
  const types: Record<string, JsiiType> = {};
  for (const type of extractor.collectTypes()) types[type.fqn] = type;

  const shared = extractor.policyStatementMembers();
  const baseType = shared.base ? types[shared.base] : undefined;
  const baseMethods = new Map(
    (baseType?.kind == 'class' ? (baseType.methods ?? []) : []).map((m) => [
      m.name,
      m,
    ]),
  );
  // Hand-written subclasses of the base class, like `Statement.All`, need its fluent methods
  // declared like the services do
  for (const type of Object.values(types)) {
    if (type.kind != 'class' || !shared.base || type.base != shared.base) {
      continue;
    }
    const declared = new Set((type.methods ?? []).map((m) => m.name));
    const fluent = [...baseMethods.values()]
      .filter((m) => !declared.has(m.name) && isFluent(m, shared.base))
      .map((m) => redeclare(m, shared.base, { fqn: type.fqn }));
    type.methods = sortMembers([...(type.methods ?? []), ...fluent]);
  }
  for (const model of models) {
    const type = serviceType(name, model, variant, shared, baseMethods);
    if (types[type.fqn]) throw new Error(`Duplicate type ${type.fqn}`);
    types[type.fqn] = type;
  }
  if (baseType)
    types[baseType.fqn] = withoutFluentMethods(baseType, shared.base);

  const sortedTypes: Record<string, JsiiType> = {};
  for (const fqn of Object.keys(types).sort()) sortedTypes[fqn] = types[fqn];

  const assembly: Record<string, unknown> = {
    schema: 'jsii/0.10.0',
    name,
    version,
    description,
    license: packageJson.license,
    homepage: packageJson.homepage,
    repository: {
      type: 'git',
      url: `${packageJson.repository?.url ?? packageJson.homepage}`.replace(
        /^git\+/,
        '',
      ),
    },
    author: {
      name: packageJson.author.name,
      roles: ['author'],
      ...(packageJson.author.url ? { url: packageJson.author.url } : {}),
    },
    keywords,
    docs: { stability: 'stable' },
    readme: { markdown: fs.readFileSync('README.md', 'utf8') },
    jsiiVersion: '5.9.0 (build iam-floyd)',
    targets: {
      js: { npm: name },
      // package.json can configure the targets like for jsii, e.g. to build bindings with jsii-pacmak
      ...(packageJson.jsii?.targets ?? {
        python: { distName: name, module: pythonModule },
      }),
    },
    submodules: {
      [`${name}.${statementNamespace}`]: {
        targets: {
          // docgen renders `from <module> import <last segment>` + `Statement.S3()`
          python: { module: `${pythonModule}.${statementNamespace}` },
        },
      },
    },
    ...(Object.keys(dependencies).length
      ? {
          dependencies,
          dependencyClosure: dependencyClosure(Object.keys(dependencies)),
        }
      : {}),
    types: sortedTypes,
  };

  // jsii fingerprints the assembly without the fingerprint itself
  assembly.fingerprint = createHash('sha256')
    .update(JSON.stringify(assembly))
    .digest('base64');

  const json = JSON.stringify(assembly);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, '.jsii.gz'), gzipSync(json, { level: 9 }));
  fs.writeFileSync(
    path.join(outDir, '.jsii'),
    `${JSON.stringify({ schema: 'jsii/file-redirect', compression: 'gzip', filename: '.jsii.gz' }, null, 2)}\n`,
  );

  return {
    name,
    types: Object.keys(sortedTypes).length,
    bytes: Buffer.byteLength(json),
    warnings: [...warnings],
  };
}
