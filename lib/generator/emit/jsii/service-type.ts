import {
  ActionModel,
  ArnPlaceholder,
  CdkRef,
  ConditionModel,
  ResourceModel,
  ServiceModel,
} from '../../model';
import { placeholderDefaultDocs } from '../shared';
import { optionalRemarks, splitDocs, withStability } from './docs';
import {
  arrayOf,
  cdkPropsParameter,
  ClassType,
  fluentMethods,
  Method,
  Parameter,
  primitive,
  redeclare,
  SharedMembers,
  sortMembers,
  statementNamespace,
  TypeReference,
  unionOf,
  uniqueTypes,
  Variant,
} from './types';

/**
 * What the service classes have in common
 */
export interface ServiceContext {
  assembly: string;
  variant: Variant;
  shared: SharedMembers;
  /**
   * The methods of the base class, by name
   */
  baseMethods: Map<string, Method>;
}

/**
 * Value types used in the model are TypeScript type names
 */
const modelValueTypes: Record<string, TypeReference | undefined> = {
  string: primitive('string'),
  number: primitive('number'),
  Date: primitive('date'),
  boolean: primitive('boolean'),
};

function modelValueType(name: string): TypeReference {
  const type = modelValueTypes[name];
  if (!type) throw new Error(`Unknown model value type: ${name}`);
  return type;
}

const docsUrl = (url: string) =>
  url.length && url != 'https://docs.aws.amazon.com/' ? url : '';

/**
 * A list with a title in the remarks, e.g. of the possible conditions
 */
function remarksList(title: string, items: string[] | undefined): string {
  return items ? `\n\n${title}:\n${items.map((i) => `- ${i}`).join('\n')}` : '';
}

const methodReference = (name: string) => `.${name}()`;

function actionMethod(action: ActionModel, self: TypeReference): Method {
  const url = docsUrl(action.url);
  const remarks = `Access Level: ${action.accessLevel}${remarksList(
    'Possible conditions',
    action.conditionMethods?.map(methodReference),
  )}${remarksList('Dependent actions', action.dependentActions)}${url && `\n\n${url}`}`;
  return {
    name: action.methodName,
    docs: withStability({ ...splitDocs(action.description), remarks }),
    returns: { type: self },
  };
}

/**
 * The docs of a placeholder of an ARN
 */
function placeholderDoc(
  { name, kind }: ArnPlaceholder,
  cdkRef: CdkRef | undefined,
): string {
  if (kind != 'required') return placeholderDefaultDocs[kind];
  if (cdkRef?.arn) {
    return `Identifier for the ${name}, or a construct that implements \`${cdkRef.interface}\`, whose ARN is used. Then the partition, region and account are ignored.`;
  }
  if (cdkRef?.id) {
    return `Identifier for the ${name}, or a construct that implements \`${cdkRef.interface}\`.`;
  }
  return `Identifier for the ${name}.`;
}

/**
 * The parameter of a placeholder. In the CDK variant, the required placeholder can also be a
 * construct.
 */
function placeholderParameter(
  placeholder: ArnPlaceholder,
  cdkRef: CdkRef | undefined,
): Parameter {
  const docs = { summary: placeholderDoc(placeholder, cdkRef) };
  if (placeholder.kind != 'required') {
    return {
      name: placeholder.name,
      type: primitive('string'),
      docs,
      optional: true,
    };
  }
  return {
    name: placeholder.name,
    type: cdkRef
      ? unionOf([
          primitive('string'),
          {
            fqn: `aws-cdk-lib.interfaces.${cdkRef.module}.${cdkRef.interface}`,
          },
        ])
      : primitive('string'),
    docs,
  };
}

function resourceMethod(
  resource: ResourceModel,
  cdkRef: CdkRef | undefined,
  self: TypeReference,
): Method {
  const parameters = resource.placeholders.map((placeholder) =>
    placeholderParameter(placeholder, cdkRef),
  );
  const remarks = `${docsUrl(resource.url)}${remarksList(
    'Possible conditions',
    resource.conditionMethods.length
      ? resource.conditionMethods.map(methodReference)
      : undefined,
  )}`;
  return {
    name: resource.methodName,
    docs: withStability({
      summary: `Adds a resource of type ${resource.name} to the statement.`,
      ...optionalRemarks(remarks),
    }),
    // the required parameters first
    parameters: [
      ...parameters.filter((p) => !p.optional),
      ...parameters.filter((p) => p.optional),
    ],
    returns: { type: self },
  };
}

/**
 * The parameters of the value of a condition
 */
function conditionValueParameters(
  condition: ConditionModel,
  assembly: string,
): Parameter[] {
  if (condition.valueKind == 'boolean') {
    return [
      {
        name: 'value',
        type: primitive('boolean'),
        optional: true,
        docs: { summary: '`true` or `false`.', default: 'true' },
      },
    ];
  }
  const single = uniqueTypes(condition.valueTypes!.map(modelValueType));
  return [
    {
      name: 'value',
      type: unionOf([...single, arrayOf(unionOf(single))]),
      docs: { summary: 'The value(s) to check.' },
    },
    {
      name: 'operator',
      type: unionOf([{ fqn: `${assembly}.Operator` }, primitive('string')]),
      optional: true,
      docs: {
        summary: `Works with [${condition.valueKind} operators](${condition.operatorUrl}).`,
        default: condition.defaultOperator,
      },
    },
  ];
}

function conditionMethod(
  condition: ConditionModel,
  context: ServiceContext,
  self: TypeReference,
): Method {
  const docs = splitDocs(condition.description);
  const remarks = `${docs.remarks ?? ''}${condition.url.length ? `\n\n${condition.url}` : ''}${remarksList(
    'Applies to actions',
    condition.relatedActionMethods.length
      ? condition.relatedActionMethods.map(methodReference)
      : undefined,
  )}${remarksList(
    'Applies to resource types',
    condition.relatedResourceTypes.length
      ? condition.relatedResourceTypes
      : undefined,
  )}`;
  const conditionDocs = withStability({
    summary: docs.summary ?? `Filters access by ${condition.key}.`,
    ...optionalRemarks(remarks),
  });

  const inherited = context.baseMethods.get(condition.methodName);
  if (inherited) {
    // Global conditions like `ifAwsRequestTag`, documented per service
    return {
      ...redeclare(inherited, context.shared.base, self),
      docs: conditionDocs,
    };
  }
  const keyParameters: Parameter[] =
    typeof condition.keyParam !== 'undefined'
      ? [
          {
            name: condition.keyParam,
            type: primitive('string'),
            docs: { summary: 'The tag key to check.' },
          },
        ]
      : [];
  return {
    name: condition.methodName,
    docs: conditionDocs,
    parameters: [
      ...keyParameters,
      ...conditionValueParameters(condition, context.assembly),
    ],
    returns: { type: self },
  };
}

function serviceInitializer(variant: Variant, description: string) {
  return {
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
  };
}

/**
 * Builds the jsii types of the generated service classes from their JSON model
 */
export function serviceType(
  model: ServiceModel,
  context: ServiceContext,
): ClassType {
  const { assembly, variant, shared, baseMethods } = context;
  const fqn = `${assembly}.${statementNamespace}.${model.className}`;
  const self: TypeReference = { fqn };
  const description = `Statement provider for service [${model.name}](${model.url}).`;

  const methods: Method[] = [
    ...model.actions.map((action) => actionMethod(action, self)),
    // the CDK variant takes a construct in place of the required placeholder
    ...model.resources.map((resource) =>
      resourceMethod(
        resource,
        variant == 'cdk' ? resource.cdkRef : undefined,
        self,
      ),
    ),
    ...model.conditions.map((condition) =>
      conditionMethod(condition, context, self),
    ),
  ];

  // Declare the fluent methods of the base class on the service class, returning the service class.
  // They are removed from the base class (see `withoutFluentMethods`): Go has no covariant returns
  // and renders every method with the signature of its topmost declaration, also in the Go code of
  // other jsii libraries subclassing a service class. Only if the service class declares a method
  // first does `Allow()` return `S3` in Go.
  methods.push(...fluentMethods(methods, baseMethods, shared.base, self));

  return {
    kind: 'class',
    fqn,
    assembly,
    symbolId: `lib/generated/policy-statements/${model.filename}:${model.className}`,
    namespace: statementNamespace,
    name: model.className,
    docs: withStability({ summary: description }),
    ...(shared.base ? { base: shared.base } : {}),
    initializer: serviceInitializer(variant, description),
    properties: shared.properties,
    methods: sortMembers([...shared.methods(self), ...methods]),
  };
}
