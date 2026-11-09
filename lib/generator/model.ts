import { Operator } from '../shared';
import { AccessLevelList } from '../shared/access-level';
import { Condition } from './condition';
import { fixes } from './fixes';
import type { Module } from './index';
import {
  camelCase,
  createConditionName,
  getArnPlaceholders,
  lowerFirst,
  upperFirst,
} from './naming';

/**
 * Language-neutral description of the API of one generated service class.
 *
 * All naming decisions (method names, parameter names, conflict resolution) are made while
 * building this model, so every emitter (TypeScript, Python, jsii assembly) renders the exact
 * same API. Names are stored in their TypeScript (camelCase) form; emitters map them to the
 * conventions of their target language.
 */
export interface ServiceModel {
  schemaVersion: 1;
  filename: string;
  className: string;
  name: string;
  servicePrefix: string;
  url: string;
  accessLevelList: AccessLevelList;
  actions: ActionModel[];
  resources: ResourceModel[];
  conditions: ConditionModel[];
}

export interface ActionModel {
  name: string;
  methodName: string;
  description: string;
  accessLevel: string;
  url: string;
  /**
   * Condition methods mentioned in the docs of this action
   */
  conditionMethods?: string[];
  dependentActions?: string[];
}

export type ArnPlaceholderKind =
  'required' | 'partition' | 'region' | 'account';

export interface ArnPlaceholder {
  /**
   * Name of the placeholder in the ARN, e.g. `BucketName` for `${BucketName}`
   */
  placeholder: string;
  /**
   * Name of the method parameter, e.g. `bucketName`
   */
  name: string;
  kind: ArnPlaceholderKind;
}

export interface ResourceModel {
  name: string;
  methodName: string;
  url: string;
  arn: string;
  /**
   * Placeholders in the order they are documented. Required parameters come first in the
   * method signature, followed by the optional partition/region/account parameters.
   */
  placeholders: ArnPlaceholder[];
  conditionMethods: string[];
  /**
   * Reference interface of `aws-cdk-lib/interfaces`, which the `on*()` method of the CDK variant
   * accepts in place of the required placeholder. Set by `lib/generator/cdk-refs.ts`.
   */
  cdkRef?: CdkRef;
}

export interface CdkRef {
  /** Module of `aws-cdk-lib/interfaces`, e.g. `aws_lambda` */
  module: string;
  /** Reference interface, e.g. `IFunctionRef` */
  interface: string;
  /** Property of the interface with the reference, e.g. `functionRef` */
  property: string;
  /** Field of the reference with the ARN, e.g. `functionArn` */
  arn?: string;
  /**
   * Field of the reference with the identifier, e.g. `distributionId`, which replaces the required
   * placeholder in the ARN. Only set if the reference has no ARN.
   */
  id?: string;
}

export type ConditionValueKind =
  'string' | 'arn' | 'numeric' | 'date' | 'ipaddress' | 'binary' | 'boolean';

export interface ConditionModel {
  /**
   * The full condition key as documented, e.g. `aws:RequestTag/${TagKey}`
   */
  key: string;
  methodName: string;
  description: string;
  url: string;
  relatedActionMethods: string[];
  relatedResourceTypes: string[];
  /**
   * The literal part of the key passed to `if()`. The service prefix is omitted when it
   * equals the prefix of the service class.
   */
  keyLiteral: string;
  /**
   * Name of the method parameter that is appended to `keyLiteral`, e.g. `tagKey`
   */
  keyParam?: string;
  valueKind: ConditionValueKind;
  /**
   * TypeScript types accepted for a single value, e.g. `['Date', 'string']`. Not set for
   * boolean conditions.
   */
  valueTypes?: string[];
  /**
   * Operator used if the user does not pass one
   */
  defaultOperator: string;
  /**
   * Documentation of the operator family. Not set for boolean conditions.
   */
  operatorUrl?: string;
}

const conditionTypeDefaults: Record<
  string,
  {
    url: string;
    default: Operator | string;
    type: string[];
  }
> = {
  string: {
    url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String',
    default: Operator.stringLike,
    type: ['string'],
  },
  arn: {
    url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN',
    default: Operator.arnLike,
    type: ['string'],
  },
  numeric: {
    url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric',
    default: Operator.numericEquals,
    type: ['number'],
  },
  date: {
    url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date',
    default: Operator.dateEquals,
    type: ['Date', 'string'],
  },
  ipaddress: {
    url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_IPAddress',
    default: Operator.ipAddress,
    type: ['string'],
  },
  binary: {
    url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_BinaryEquals',
    default: Operator.binaryEquals,
    type: ['string'],
  },
};

/**
 * Default operators of the multivalued global condition keys in the service
 * docs, which need a set operator. Same as the methods in
 * `lib/shared/policy-statement/2-conditions.ts`.
 */
const multivaluedDefaults: Record<string, string> = {
  'aws:TagKeys': new Operator().forAnyValue().stringLike().toString(),
};

function unique<T>(list: T[]): T[] {
  return list.filter((elem, pos) => list.indexOf(elem) == pos);
}

/**
 * The actions of a module, and the actions per access level
 */
function buildActions(module: Module): {
  actions: ActionModel[];
  accessLevelList: AccessLevelList;
} {
  const conditions = module.conditions!;
  const accessLevelList: AccessLevelList = {};
  const actions: ActionModel[] = [];

  for (const [name, action] of Object.entries(module.actionList!)) {
    // the docs sometimes report multiple access levels for a single action (e.g. "Tagging, Write")
    for (const accessLevel of action.accessLevel
      .split(',')
      .map((level) => level.trim()) as (keyof AccessLevelList)[]) {
      (accessLevelList[accessLevel] ??= []).push(name);
    }

    const actionModel: ActionModel = {
      name,
      methodName: `to${upperFirst(name)}`,
      description: action.description,
      accessLevel: action.accessLevel,
      url: action.url,
    };
    if ('conditions' in action) {
      actionModel.conditionMethods = (action.conditions ?? []).map(
        (condition) =>
          createConditionName(conditions[condition].key, module.servicePrefix!),
      );
    }
    if ('dependentActions' in action) {
      actionModel.dependentActions = action.dependentActions ?? [];
    }
    actions.push(actionModel);
  }
  return { actions, accessLevelList };
}

/**
 * The placeholders of an ARN with a default value, the others are required
 */
const placeholderKinds: Record<string, ArnPlaceholderKind | undefined> = {
  Partition: 'partition',
  Region: 'region',
  Account: 'account',
  AccountId: 'account',
};

function buildResources(module: Module): ResourceModel[] {
  return Object.entries(module.resourceTypes!).map(([name, resourceType]) => ({
    name: resourceType.name,
    methodName: `on${camelCase(name)}`,
    url: resourceType.url,
    arn: resourceType.arn,
    placeholders: getArnPlaceholders(resourceType.arn).map(
      (placeholder): ArnPlaceholder => ({
        placeholder,
        name: lowerFirst(camelCase(placeholder)),
        kind: placeholderKinds[placeholder] ?? 'required',
      }),
    ),
    conditionMethods: resourceType.conditionKeys.map((key) =>
      createConditionName(module.conditions![key].key, module.servicePrefix!),
    ),
  }));
}

/**
 * A condition key, split into the service prefix and the name (`parts`), and the name into the
 * parts before and after the slash of a parameterized key (e.g. `ResourceTag` and `${TagKey}`)
 */
interface ConditionKey {
  key: string;
  parts: string[];
  name: string[];
}

function splitConditionKey(key: string): ConditionKey {
  const parts = key.split(':');
  return { key, parts, name: parts[1].split(/\/(?=\$\{|<|\$|$)/) };
}

/**
 * Whether the method name of a condition gets the suffix `Exists`
 */
function isExistsCondition(name: string[]): boolean {
  // special case for ec2:ResourceTag/ - not sure this is correct, the description makes zero sense...
  const emptyParameter = name.length > 1 && !name[1].length;
  // special case for ec2:Attribute
  const attribute = name.length == 1 && name[0] == 'Attribute';
  return emptyParameter || attribute;
}

/**
 * The method name of a condition from the fixes, or else from its key
 */
function baseConditionMethodName(
  module: Module,
  { key, parts, name }: ConditionKey,
): string {
  const customMethodName =
    fixes[module.filename]?.conditions?.[parts[parts.length - 1]]?.methodName;
  if (typeof customMethodName !== 'undefined') {
    return customMethodName;
  }
  const methodName = createConditionName(key, module.servicePrefix!);
  return isExistsCondition(name) ? `${methodName}Exists` : methodName;
}

/**
 * The method name of a condition. A parameterized condition that conflicts with others gets the
 * parameter appended.
 */
function conditionMethodName(
  module: Module,
  conditionKey: ConditionKey,
  conditionBaseNames: Map<string, string[]>,
): string {
  const methodName = baseConditionMethodName(module, conditionKey);
  const { name } = conditionKey;
  const conflictingKeys = conditionBaseNames.get(methodName) ?? [];
  if (conflictingKeys.length <= 1 || name.length <= 1 || !name[1].length) {
    return methodName;
  }
  const paramPart = name[1]
    .replace(/^\$\{([^}]+)\}(.*)/, '$1$2')
    .replace(/[^a-zA-Z0-9]/g, '');
  return paramPart.length
    ? methodName + upperFirst(camelCase(paramPart))
    : methodName;
}

/**
 * The literal part of the key passed to `if()`, and the name of the parameter appended to it
 */
function conditionKeyLiteral(
  servicePrefix: string,
  { parts, name }: ConditionKey,
): Pick<ConditionModel, 'keyLiteral' | 'keyParam'> {
  const prefix = parts[0] == servicePrefix ? '' : `${parts[0]}:`;
  if (name.length == 1) {
    return { keyLiteral: `${prefix}${name[0]}` };
  }
  // it is a parameterized condition
  const keyLiteral = `${prefix}${name[0]}/`;
  return name[1].length
    ? { keyLiteral, keyParam: lowerFirst(name[1].replace(/[^a-zA-Z0-9]/g, '')) }
    : { keyLiteral };
}

/**
 * The value types and the operators of a condition, by its type
 */
function conditionValue(
  condition: Condition,
  type: string,
  name: string[],
): Pick<ConditionModel, 'valueTypes' | 'defaultOperator' | 'operatorUrl'> {
  if (type in conditionTypeDefaults) {
    return {
      valueTypes: condition.typeOverride ?? [
        ...conditionTypeDefaults[type].type,
      ],
      defaultOperator:
        condition.key in multivaluedDefaults
          ? multivaluedDefaults[condition.key]
          : conditionTypeDefaults[type].default.toString(),
      operatorUrl: conditionTypeDefaults[type].url,
    };
  }
  if (type != 'boolean') {
    throw new Error(`Unexpected condition type: ${type} for ${name.join('/')}`);
  }
  return { defaultOperator: 'Bool' };
}

function buildConditions(module: Module): ConditionModel[] {
  const servicePrefix = module.servicePrefix!;
  const conditions = Object.values(module.conditions!);

  // Build a map of base condition names to detect conflicts
  const conditionBaseNames = new Map<string, string[]>();
  for (const condition of conditions) {
    const baseName = createConditionName(condition.key, servicePrefix);
    if (!conditionBaseNames.has(baseName)) {
      conditionBaseNames.set(baseName, []);
    }
    conditionBaseNames.get(baseName)!.push(condition.key);
  }

  return conditions.map((condition) => {
    const conditionKey = splitConditionKey(condition.key);
    const type = condition.type.toLowerCase();
    const { keyLiteral, keyParam } = conditionKeyLiteral(
      servicePrefix,
      conditionKey,
    );
    const conditionModel: ConditionModel = {
      key: condition.key,
      methodName: conditionMethodName(module, conditionKey, conditionBaseNames),
      description: condition.description,
      url: condition.url,
      relatedActionMethods: unique(condition.relatedActions ?? []).map(
        (relatedAction) => `to${camelCase(relatedAction)}`,
      ),
      relatedResourceTypes: unique(condition.relatedResourceTypes ?? []),
      keyLiteral,
      valueKind: type as ConditionValueKind,
      defaultOperator: 'Bool',
    };
    if (typeof keyParam !== 'undefined') {
      conditionModel.keyParam = keyParam;
    }
    // the properties of the value after `keyParam`, as in the committed models
    return Object.assign(
      conditionModel,
      conditionValue(condition, type, conditionKey.name),
    );
  });
}

/**
 * Builds the language-neutral model from a scraped (and fixed) module.
 *
 * `module.name` must already contain the final service name (after `fixes.name` / `-v2`).
 */
export function buildServiceModel(module: Module): ServiceModel {
  const { actions, accessLevelList } = buildActions(module);
  return {
    schemaVersion: 1,
    filename: module.filename,
    className: camelCase(module.name!),
    name: module.name!,
    servicePrefix: module.servicePrefix!,
    url: module.url!,
    accessLevelList,
    actions,
    resources: buildResources(module),
    conditions: buildConditions(module),
  };
}
