import { Operator } from '../shared';
import { AccessLevelList } from '../shared/access-level';
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

function unique<T>(list: T[]): T[] {
  return list.filter((elem, pos) => list.indexOf(elem) == pos);
}

/**
 * Builds the language-neutral model from a scraped (and fixed) module.
 *
 * `module.name` must already contain the final service name (after `fixes.name` / `-v2`).
 */
export function buildServiceModel(module: Module): ServiceModel {
  const servicePrefix = module.servicePrefix!;
  const conditions = module.conditions!;

  const accessLevelList: AccessLevelList = {};
  const actions: ActionModel[] = [];

  for (const [name, action] of Object.entries(module.actionList!)) {
    // the docs sometimes report multiple access levels for a single action (e.g. "Tagging, Write")
    for (const accessLevel of action.accessLevel
      .split(',')
      .map((level) => level.trim())) {
      if (!(accessLevel in accessLevelList)) {
        accessLevelList[accessLevel as keyof AccessLevelList] = [];
      }
      accessLevelList[accessLevel as keyof AccessLevelList]!.push(name);
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
          createConditionName(conditions[condition].key, servicePrefix),
      );
    }
    if ('dependentActions' in action) {
      actionModel.dependentActions = action.dependentActions ?? [];
    }
    actions.push(actionModel);
  }

  const resources: ResourceModel[] = [];
  for (const [name, resourceType] of Object.entries(module.resourceTypes!)) {
    const placeholders: ArnPlaceholder[] = getArnPlaceholders(
      resourceType.arn,
    ).map((placeholder) => {
      let kind: ArnPlaceholderKind = 'required';
      if (placeholder == 'Partition') {
        kind = 'partition';
      } else if (placeholder == 'Region') {
        kind = 'region';
      } else if (/^Account(Id)?$/.test(placeholder)) {
        kind = 'account';
      }
      return {
        placeholder,
        name: lowerFirst(camelCase(placeholder)),
        kind,
      };
    });

    resources.push({
      name: resourceType.name,
      methodName: `on${camelCase(name)}`,
      url: resourceType.url,
      arn: resourceType.arn,
      placeholders,
      conditionMethods: resourceType.conditionKeys.map((key) =>
        createConditionName(conditions[key].key, servicePrefix),
      ),
    });
  }

  // Build a map of base condition names to detect conflicts
  const conditionBaseNames = new Map<string, string[]>();
  for (const condition of Object.values(conditions)) {
    const baseName = createConditionName(condition.key, servicePrefix);
    if (!conditionBaseNames.has(baseName)) {
      conditionBaseNames.set(baseName, []);
    }
    conditionBaseNames.get(baseName)!.push(condition.key);
  }

  const conditionModels: ConditionModel[] = [];
  for (const condition of Object.values(conditions)) {
    const key = condition.key;
    const parts = key.split(':');
    const name = parts[1].split(/\/(?=\$\{|<|\$|$)/);

    let methodName = createConditionName(key, servicePrefix);

    // Check for custom method name in fixes
    const keyWithoutPrefix = parts[parts.length - 1];
    const customMethodName =
      fixes[module.filename]?.conditions?.[keyWithoutPrefix]?.methodName;
    if (typeof customMethodName !== 'undefined') {
      methodName = customMethodName;
    } else {
      if (name.length > 1 && !name[1].length) {
        // special case for ec2:ResourceTag/ - not sure this is correct, the description makes zero sense...
        methodName += 'Exists';
      } else if (name.length == 1 && name[0] == 'Attribute') {
        // special case for ec2:Attribute
        methodName += 'Exists';
      }
    }

    // Handle parameterized conditions that conflict with non-parameterized ones
    const conflictingKeys = conditionBaseNames.get(methodName) ?? [];
    if (conflictingKeys.length > 1 && name.length > 1 && name[1].length) {
      // This is a parameterized condition that conflicts with others
      const paramPart = name[1]
        .replace(/^\$\{([^}]+)\}(.*)/, '$1$2')
        .replace(/[^a-zA-Z0-9]/g, '');
      if (paramPart.length) {
        methodName += upperFirst(camelCase(paramPart));
      }
    }

    let keyLiteral = '';
    if (parts[0] != servicePrefix) {
      keyLiteral += `${parts[0]}:`;
    }
    keyLiteral += name[0];

    let keyParam: string | undefined;
    if (name.length > 1) {
      // it is a parameterized condition
      keyLiteral += '/';
      if (name[1].length) {
        keyParam = lowerFirst(name[1].replace(/[^a-zA-Z0-9]/g, ''));
      }
    }

    const type = condition.type.toLowerCase();
    const conditionModel: ConditionModel = {
      key,
      methodName,
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

    if (type in conditionTypeDefaults) {
      conditionModel.valueTypes = condition.typeOverride ?? [
        ...conditionTypeDefaults[type].type,
      ];
      conditionModel.defaultOperator =
        conditionTypeDefaults[type].default.toString();
      conditionModel.operatorUrl = conditionTypeDefaults[type].url;
    } else if (type != 'boolean') {
      throw new Error(
        `Unexpected condition type: ${type} for ${name.join('/')}`,
      );
    }

    conditionModels.push(conditionModel);
  }

  return {
    schemaVersion: 1,
    filename: module.filename,
    className: camelCase(module.name!),
    name: module.name!,
    servicePrefix,
    url: module.url!,
    accessLevelList,
    actions,
    resources,
    conditions: conditionModels,
  };
}
