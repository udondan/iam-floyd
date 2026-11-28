import {
  ClassDeclaration,
  JSDoc,
  MethodDeclaration,
  ParameterDeclaration,
  PropertyDeclaration,
  Scope,
  Type,
} from 'ts-morph';

import { jsDocs, paramDoc, withStability } from './docs';
import { TypeResolver } from './type-reference';
import {
  cdkPropsParameter,
  Initializer,
  Method,
  Parameter,
  Property,
  TypeReference,
  Variant,
} from './types';

/**
 * Builds the jsii members of the hand-written classes
 */
export class MemberBuilder {
  constructor(
    private readonly resolver: TypeResolver,
    private readonly variant: Variant,
  ) {}

  /**
   * The constructor. `source` is the class that declares it, `cdk` if it is the one of the
   * external CDK base class.
   */
  initializer(
    source: ClassDeclaration | 'cdk' | undefined,
  ): Initializer | undefined {
    if (source === 'cdk') return { parameters: [cdkPropsParameter] };
    if (!source) return {};
    const constructor = source.getConstructors()[0];
    if (this.isCdkAll(source)) {
      // bin/mkcdk.ts replaces the `sid` of `All` with CDK props, like for the services
      return {
        docs: withStability(jsDocs(constructor.getJsDocs())),
        parameters: [cdkPropsParameter],
      };
    }
    if (constructor.getScope() && constructor.getScope() != Scope.Public) {
      return undefined;
    }
    const docs = jsDocs(constructor.getJsDocs());
    const parameters = constructor
      .getParameters()
      .map((p) => this.parameter(p, constructor.getJsDocs(), undefined));
    return {
      ...(Object.keys(docs).length ? { docs: withStability(docs) } : {}),
      ...(parameters.length ? { parameters } : {}),
      ...(parameters.some((p) => p.variadic) ? { variadic: true } : {}),
    };
  }

  private isCdkAll(source: ClassDeclaration): boolean {
    return (
      this.variant == 'cdk' &&
      source.getSourceFile().getFilePath().endsWith('/lib/shared/all.ts')
    );
  }

  method(method: MethodDeclaration, self: TypeReference): Method {
    const comments = method.getJsDocs();
    const parameters = method
      .getParameters()
      .map((p) => this.parameter(p, comments, self));
    const returnType = method.getReturnType();
    const result: Method = {
      name: method.getName(),
      docs: withStability(jsDocs(comments)),
    };
    if (parameters.length) result.parameters = parameters;
    if (parameters.some((p) => p.variadic)) result.variadic = true;
    if (!returnType.isVoid()) {
      result.returns = {
        type: this.resolver.typeReference(returnType, self, method),
        ...(isOptional(returnType) ? { optional: true } : {}),
      };
    }
    if (method.isStatic()) result.static = true;
    return result;
  }

  property(property: PropertyDeclaration): Property {
    const result: Property = {
      name: property.getName(),
      type: this.resolver.typeReference(
        property.getType(),
        undefined,
        property,
      ),
      docs: withStability(jsDocs(property.getJsDocs())),
    };
    if (property.isStatic()) result.static = true;
    if (property.isReadonly()) result.immutable = true;
    // like the jsii compiler: constants keep their name, e.g. `AwsServicePrincipal.LAMBDA`
    if (result.static && result.immutable && property.hasInitializer()) {
      result.const = true;
    }
    if (property.hasQuestionToken()) result.optional = true;
    return result;
  }

  private parameter(
    parameter: ParameterDeclaration,
    comments: JSDoc[],
    self: TypeReference | undefined,
  ): Parameter {
    const name = parameter.getName();
    const variadic = parameter.isRestParameter();
    const type = variadic
      ? parameter.getType().getArrayElementTypeOrThrow()
      : parameter.getType();
    const result: Parameter = {
      name,
      type: this.resolver.typeReference(type, self, parameter),
    };
    if (variadic) {
      result.variadic = true;
    } else if (parameter.isOptional() || parameter.hasInitializer()) {
      result.optional = true;
    }
    const doc = paramDoc(comments, name);
    if (doc) result.docs = { summary: doc };
    return result;
  }
}

function isOptional(type: Type): boolean {
  return type.isUnion() && type.getUnionTypes().some((t) => t.isUndefined());
}
