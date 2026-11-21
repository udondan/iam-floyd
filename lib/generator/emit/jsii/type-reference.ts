import { Node, Type } from 'ts-morph';

import { warn } from './docs';
import {
  arrayOf,
  primitive,
  PrimitiveName,
  statementNamespace,
  TypeReference,
  unionOf,
  uniqueTypes,
} from './types';

/**
 * Whether a declaration is in a dependency
 */
export function isExternal(declaration: Node): boolean {
  return declaration.getSourceFile().isInNodeModules();
}

/**
 * Maps a type declared in aws-cdk-lib/constructs to its jsii FQN, e.g.
 * `node_modules/aws-cdk-lib/aws-iam/lib/policy-statement.d.ts` → `aws-cdk-lib.aws_iam.PolicyStatement`
 */
export function externalFqn(type: Type): string {
  const symbol = type.getSymbol() ?? type.getAliasSymbol();
  const declaration = symbol?.getDeclarations()[0];
  if (!symbol || !declaration) {
    throw new Error(`Cannot resolve external type ${type.getText()}`);
  }
  const file = declaration.getSourceFile().getFilePath();
  const match = /node_modules\/(@[^/]+\/[^/]+|[^/]+)\/(.*)$/.exec(file);
  if (!match) throw new Error(`Not an external type: ${file}`);
  const [, pkg, rest] = match;
  const submodule = rest.split('/')[0];
  if (pkg == 'aws-cdk-lib' && submodule != 'core' && submodule != 'lib') {
    return `${pkg}.${submodule.replace(/-/g, '_')}.${symbol.getName()}`;
  }
  return `${pkg}.${symbol.getName()}`;
}

/**
 * The primitive types, by a check of the type
 */
const primitiveChecks: [(type: Type) => boolean, PrimitiveName][] = [
  [(type) => type.isAny() || type.isUnknown(), 'any'],
  [(type) => type.isBoolean() || type.isBooleanLiteral(), 'boolean'],
  [
    (type) =>
      type.isString() || type.isStringLiteral() || type.isTemplateLiteral(),
    'string',
  ],
  [(type) => type.isNumber() || type.isNumberLiteral(), 'number'],
];

function primitiveReference(type: Type): TypeReference | undefined {
  const match = primitiveChecks.find(([check]) => check(type));
  return match && primitive(match[1]);
}

const isNamedDeclaration = (node: Node) =>
  Node.isClassDeclaration(node) ||
  Node.isEnumDeclaration(node) ||
  Node.isInterfaceDeclaration(node);

/**
 * Maps TypeScript types to jsii type references
 */
export class TypeResolver {
  /**
   * @param exported the declarations exported from the package, mapped to their jsii FQN
   */
  constructor(
    private readonly assembly: string,
    private readonly exported: Map<Node, string>,
  ) {}

  typeReference(
    type: Type,
    self: TypeReference | undefined,
    context: Node,
  ): TypeReference {
    return (
      this.selfReference(type, self, context) ??
      primitiveReference(type) ??
      this.arrayReference(type, self, context) ??
      this.unionReference(type, self, context) ??
      this.declaredReference(type, context)
    );
  }

  /**
   * `this` and type parameters are the class itself
   */
  private selfReference(
    type: Type,
    self: TypeReference | undefined,
    context: Node,
  ): TypeReference | undefined {
    if (type.getText() !== 'this' && !type.isTypeParameter()) {
      return undefined;
    }
    if (self) return self;
    warn(`'this' without context at ${context.getSourceFile().getBaseName()}`);
    return primitive('any');
  }

  private arrayReference(
    type: Type,
    self: TypeReference | undefined,
    context: Node,
  ): TypeReference | undefined {
    return type.isArray()
      ? arrayOf(
          this.typeReference(type.getArrayElementTypeOrThrow(), self, context),
        )
      : undefined;
  }

  private unionReference(
    type: Type,
    self: TypeReference | undefined,
    context: Node,
  ): TypeReference | undefined {
    if (!type.isUnion()) return undefined;
    const members = type
      .getUnionTypes()
      .filter((t) => !t.isUndefined() && !t.isNull());
    return (
      this.singleTypeOfUnion(type, members, self, context) ??
      unionOf(
        uniqueTypes(
          members.map((member) => this.typeReference(member, self, context)),
        ),
      )
    );
  }

  /**
   * The union types that are a single type: `boolean`, which is `true | false` in the checker,
   * optional types and enums
   */
  private singleTypeOfUnion(
    type: Type,
    members: Type[],
    self: TypeReference | undefined,
    context: Node,
  ): TypeReference | undefined {
    if (members.every((t) => t.isBooleanLiteral())) return primitive('boolean');
    if (members.length == 1) {
      return this.typeReference(members[0], self, context);
    }
    // enum types are unions of their members
    const enumDeclaration = type.getSymbol()?.getDeclarations()[0];
    return enumDeclaration && Node.isEnumDeclaration(enumDeclaration)
      ? this.namedReference(enumDeclaration, type, context)
      : undefined;
  }

  private declaredReference(type: Type, context: Node): TypeReference {
    const symbol = type.getSymbol() ?? type.getAliasSymbol();
    if (symbol?.getName() === 'Date') return primitive('date');
    const declaration = symbol?.getDeclarations()[0];
    if (declaration && isNamedDeclaration(declaration)) {
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
    // the context is a member or parameter of a class
    const ownerFqn = this.exported.get(
      context.getFirstAncestorOrThrow(Node.isClassDeclaration),
    );
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
    if (isExternal(declaration)) return { fqn: externalFqn(type) };
    const file = context.getSourceFile().getBaseName();
    if (Node.isEnumDeclaration(declaration)) {
      // not exported, so users can only pass the literal values
      warn(
        `Enum ${declaration.getName()} used in ${file} is not exported, using string`,
      );
      return primitive('string');
    }
    warn(`Type ${type.getText()} used in ${file} is not exported, using any`);
    return primitive('any');
  }
}
