import * as fs from 'fs';
import * as path from 'path';
import {
  ClassDeclaration,
  EnumDeclaration,
  MethodDeclaration,
  Node,
  Project,
  PropertyDeclaration,
  Scope,
  SourceFile,
} from 'ts-morph';

import { jsDocText, splitDocs, warn, withStability } from './docs';
import { MemberBuilder } from './members';
import { externalFqn, isExternal, TypeResolver } from './type-reference';
import {
  cdkBase,
  ClassType,
  EnumType,
  JsiiType,
  SharedMembers,
  sortMembers,
  TypeReference,
  Variant,
} from './types';

/**
 * An exported class with its jsii FQN and namespace
 */
type ExportedClass = [ClassDeclaration, string, string | undefined];

/**
 * The public members of a class and its base classes that are not exported
 */
interface Members {
  methods: MethodDeclaration[];
  properties: PropertyDeclaration[];
  base: string | undefined;
  constructorSource: ClassDeclaration | 'cdk' | undefined;
}

/**
 * The identifier jsii uses to map a TypeScript declaration of a dependency to its jsii type:
 * `<source file relative to the package, without extension>:<name>`
 */
function symbolId(declaration: ClassDeclaration | EnumDeclaration): string {
  const file = path
    .relative(process.cwd(), declaration.getSourceFile().getFilePath())
    .replace(/\.ts$/, '');
  const name = declaration.getName();
  if (!name) throw new Error(`Anonymous declaration in ${file}`);
  return `${file}:${name}`;
}

function isPublic(node: MethodDeclaration | PropertyDeclaration): boolean {
  return node.getScope() == Scope.Public && !node.getName().startsWith('#');
}

/**
 * Adds the public members, unless a subclass declares them
 */
function addPublic<T extends MethodDeclaration | PropertyDeclaration>(
  members: Map<string, T>,
  declarations: T[],
) {
  for (const declaration of declarations) {
    if (isPublic(declaration) && !members.has(declaration.getName())) {
      members.set(declaration.getName(), declaration);
    }
  }
}

/**
 * The transpilers don't support parameter properties either
 */
function assertNoParameterProperties(declaration: ClassDeclaration) {
  for (const constructor of declaration.getConstructors()) {
    if (constructor.getParameters().some((p) => p.isParameterProperty())) {
      throw new Error(
        `Parameter properties are not supported: ${declaration.getName()}`,
      );
    }
  }
}

/**
 * Reads the hand-written classes in `lib/shared` and friends via the TypeScript type checker
 */
export class SharedExtractor {
  private readonly project: Project;
  private readonly root: SourceFile;
  /**
   * Declarations exported from the package, mapped to their jsii FQN
   */
  private readonly exported = new Map<Node, string>();
  private readonly generatedDir: string;
  private readonly members: MemberBuilder;

  constructor(
    private readonly assembly: string,
    private readonly variant: Variant,
  ) {
    this.project = new Project({
      tsConfigFilePath: 'tsconfig.json',
      skipAddingFilesFromTsConfig: true,
    });
    this.generatedDir = path.resolve('lib/generated/policy-statements');
    this.members = new MemberBuilder(
      new TypeResolver(assembly, this.exported),
      variant,
    );
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
      for (const file of fs
        .readdirSync(swapDir)
        .filter((name) => name.endsWith('.CDK.ts'))) {
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
    const enums: JsiiType[] = [];
    const classes: ExportedClass[] = [];
    this.visit(this.root, undefined, enums, classes);
    return [
      ...enums,
      ...classes.map(([declaration, fqn, namespace]) =>
        this.classType(declaration, fqn, namespace),
      ),
    ];
  }

  private visit(
    file: SourceFile,
    namespace: string | undefined,
    enums: JsiiType[],
    classes: ExportedClass[],
  ) {
    for (const [name, declarations] of file.getExportedDeclarations()) {
      for (const declaration of declarations) {
        this.visitDeclaration(declaration, name, namespace, enums, classes);
      }
    }
  }

  private visitDeclaration(
    declaration: Node,
    name: string,
    namespace: string | undefined,
    enums: JsiiType[],
    classes: ExportedClass[],
  ) {
    if (Node.isSourceFile(declaration)) {
      // export * as Statement from './statements'
      this.visit(declaration, name, enums, classes);
      return;
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
      enums.push(this.enumType(declaration, fqn, name));
    }
    // Type aliases and interfaces only used for typing are not part of the jsii API
  }

  private enumType(
    declaration: EnumDeclaration,
    fqn: string,
    name: string,
  ): EnumType {
    return {
      kind: 'enum',
      fqn,
      assembly: this.assembly,
      symbolId: symbolId(declaration),
      name,
      docs: withStability(splitDocs(jsDocText(declaration))),
      members: declaration.getMembers().map((member) => ({
        name: member
          .getName()
          .replace(/([a-z])([A-Z])/g, '$1_$2')
          .toUpperCase(),
        docs: splitDocs(jsDocText(member)),
      })),
    };
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
      properties: properties.map((p) => this.members.property(p)),
      methods: (self) => methods.map((m) => this.members.method(m, self)),
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
    const initializer = this.members.initializer(constructorSource);
    const kept = withoutStaticClashes(fqn, methods, properties);

    return {
      kind: 'class',
      fqn,
      assembly: this.assembly,
      symbolId: symbolId(declaration),
      ...(namespace ? { namespace } : {}),
      name: declaration.getNameOrThrow(),
      docs: withStability(splitDocs(jsDocText(declaration))),
      ...(base ? { base } : {}),
      ...(initializer ? { initializer } : {}),
      properties: sortMembers(kept.map((p) => this.members.property(p))),
      methods: sortMembers(methods.map((m) => this.members.method(m, self))),
    };
  }

  /**
   * Walks up the inheritance chain and hoists the public members of every base class that is
   * not exported from the package (jsii calls this type erasure), until an exported or
   * external base class is reached.
   */
  private collectMembers(declaration: ClassDeclaration): Members {
    const methods = new Map<string, MethodDeclaration>();
    const properties = new Map<string, PropertyDeclaration>();
    let constructorSource: ClassDeclaration | undefined;
    let base: string | undefined;

    let current: ClassDeclaration | undefined = declaration;
    while (current) {
      if (!constructorSource && current.getConstructors().length) {
        constructorSource = current;
      }
      assertNoParameterProperties(current);
      addPublic(methods, current.getMethods());
      addPublic(properties, current.getProperties());
      ({ parent: current, base } = this.parentOrBase(current));
    }

    return {
      methods: [...methods.values()],
      properties: [...properties.values()],
      base,
      constructorSource: this.inheritsCdkConstructor(constructorSource, base)
        ? 'cdk'
        : constructorSource,
    };
  }

  /**
   * The base class whose members are hoisted, or the FQN of the base class, if it is exported or
   * external
   */
  private parentOrBase(declaration: ClassDeclaration): {
    parent?: ClassDeclaration;
    base?: string;
  } {
    const parent = declaration.getBaseClass();
    if (!parent) {
      const heritage = declaration.getExtends();
      return { base: heritage && externalFqn(heritage.getType()) };
    }
    if (isExternal(parent)) return { base: externalFqn(parent.getType()) };
    return this.exported.has(parent)
      ? { base: this.exported.get(parent) }
      : { parent };
  }

  /**
   * A class without constructor inherits the one of its external base, e.g. CDK's props
   */
  private inheritsCdkConstructor(
    constructorSource: ClassDeclaration | undefined,
    base: string | undefined,
  ): boolean {
    return !constructorSource && this.variant == 'cdk' && base == cdkBase;
  }
}

/**
 * jsii does not allow a static and an instance member with the same name, since that can't be
 * represented in e.g. Python. Keeps the instance methods, e.g. `new Operator().stringEquals()`
 */
function withoutStaticClashes(
  fqn: string,
  methods: MethodDeclaration[],
  properties: PropertyDeclaration[],
): PropertyDeclaration[] {
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
  return properties.filter((p) => !clashing.includes(p));
}
