import {
  ActionModel,
  ConditionModel,
  ResourceModel,
  ServiceModel,
} from '../../../lib/generator/model';

const stringOperators =
  'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String';

export const actions: Record<string, ActionModel> = {
  // with conditions, dependent actions and docs
  get: {
    name: 'GetThing',
    methodName: 'toGetThing',
    description: 'Grants permission to get a thing',
    accessLevel: 'Read',
    url: 'https://docs.aws.amazon.com/thing/latest/APIReference/API_GetThing.html',
    conditionMethods: ['ifAwsRequestTag'],
    dependentActions: ['iam:PassRole'],
  },
  // the docs only link to the start page
  list: {
    name: 'ListThings',
    methodName: 'toListThings',
    description: 'Grants permission to list things',
    accessLevel: 'List',
    url: 'https://docs.aws.amazon.com/',
  },
  // without docs
  delete: {
    name: 'DeleteThing',
    methodName: 'toDeleteThing',
    description: 'Grants permission to delete a thing',
    accessLevel: 'Write',
    url: '',
  },
};

export const resources: Record<string, ResourceModel> = {
  // required placeholder at the end, partition, region and account; a construct with an ARN
  thing: {
    name: 'thing',
    methodName: 'onThing',
    url: 'https://docs.aws.amazon.com/thing/latest/things.html',
    arn: 'arn:${Partition}:thing:${Region}:${Account}:thing/${ThingId}',
    placeholders: [
      { placeholder: 'ThingId', name: 'thingId', kind: 'required' },
      { placeholder: 'Partition', name: 'partition', kind: 'partition' },
      { placeholder: 'Region', name: 'region', kind: 'region' },
      { placeholder: 'Account', name: 'account', kind: 'account' },
    ],
    conditionMethods: ['ifAwsResourceTag'],
    cdkRef: {
      module: 'aws_thing',
      interface: 'IThingRef',
      property: 'thingRef',
      arn: 'thingArn',
    },
  },
  // the ARN starts with the placeholder, a placeholder without parameter stays in the ARN; a
  // construct with an identifier
  widget: {
    name: 'widget',
    methodName: 'onWidget',
    url: 'https://docs.aws.amazon.com/',
    arn: '${WidgetName}:widget/${Unknown}',
    placeholders: [
      { placeholder: 'WidgetName', name: 'widgetName', kind: 'required' },
    ],
    conditionMethods: [],
    cdkRef: {
      module: 'aws_thing',
      interface: 'IWidgetRef',
      property: 'widgetRef',
      id: 'widgetId',
    },
  },
  // only a placeholder without parameter
  gadget: {
    name: 'gadget',
    methodName: 'onGadget',
    url: '',
    arn: 'arn:aws:thing:::gadget/${Unknown}',
    placeholders: [],
    conditionMethods: [],
  },
};

export const conditions: Record<string, ConditionModel> = {
  requestTag: {
    key: 'aws:RequestTag/${TagKey}',
    methodName: 'ifAwsRequestTag',
    description: 'Filters access by the tags in the request',
    url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag',
    relatedActionMethods: ['toGetThing'],
    relatedResourceTypes: ['thing'],
    keyLiteral: 'aws:RequestTag/',
    keyParam: 'tagKey',
    valueKind: 'string',
    valueTypes: ['string'],
    defaultOperator: 'StringLike',
    operatorUrl: stringOperators,
  },
  // without docs, with a placeholder in the key
  branch: {
    key: 'agent.${Domain}.thing:Branch',
    methodName: 'ifAgentDomainBranch',
    description: '',
    url: '',
    relatedActionMethods: [],
    relatedResourceTypes: [],
    keyLiteral: 'agent.${Domain}.thing:Branch',
    valueKind: 'string',
    valueTypes: ['string'],
    defaultOperator: 'StringLike',
    operatorUrl: stringOperators,
  },
  enabled: {
    key: 'thing:Enabled',
    methodName: 'ifEnabled',
    description: 'Filters access by whether the thing is enabled',
    url: '',
    relatedActionMethods: [],
    relatedResourceTypes: [],
    keyLiteral: 'Enabled',
    valueKind: 'boolean',
    defaultOperator: 'Bool',
  },
  flag: {
    key: 'thing:Flag/${FlagKey}',
    methodName: 'ifFlag',
    description: '',
    url: '',
    relatedActionMethods: [],
    relatedResourceTypes: [],
    keyLiteral: 'Flag/',
    keyParam: 'flagKey',
    valueKind: 'boolean',
    defaultOperator: 'Bool',
  },
  createdAt: {
    key: 'thing:CreatedAt',
    methodName: 'ifCreatedAt',
    description: 'Filters access by the creation date',
    url: '',
    relatedActionMethods: [],
    relatedResourceTypes: [],
    keyLiteral: 'CreatedAt',
    valueKind: 'date',
    valueTypes: ['Date', 'string'],
    defaultOperator: 'DateEquals',
    operatorUrl:
      'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date',
  },
  count: {
    key: 'thing:Count',
    methodName: 'ifCount',
    description: 'Filters access by the count',
    url: '',
    relatedActionMethods: [],
    relatedResourceTypes: [],
    keyLiteral: 'Count',
    valueKind: 'numeric',
    valueTypes: ['number'],
    defaultOperator: 'NumericEquals',
    operatorUrl:
      'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric',
  },
};

/**
 * A service with every kind of action, resource and condition, or with the given parts
 */
export function serviceModel(parts: Partial<ServiceModel> = {}): ServiceModel {
  return {
    schemaVersion: 1,
    filename: 'thing',
    className: 'Thing',
    name: 'Amazon Thing',
    servicePrefix: 'thing',
    url: 'https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonthing.html',
    accessLevelList: {
      Read: ['GetThing'],
      List: ['ListThings'],
      Write: ['DeleteThing'],
    },
    actions: Object.values(actions),
    resources: Object.values(resources),
    conditions: Object.values(conditions),
    ...parts,
  };
}

/**
 * The model with a condition of an unknown type
 */
export function unknownValueType(): ServiceModel {
  return serviceModel({
    conditions: [{ ...conditions.count, valueTypes: ['bigint'] }],
  });
}

/**
 * The model with an action twice
 */
export function duplicateMethod(): ServiceModel {
  return serviceModel({ actions: [actions.get, actions.get] });
}

/**
 * The model with a resource whose placeholders have the same name
 */
export function duplicateParameters(): ServiceModel {
  return serviceModel({
    resources: [
      {
        ...resources.gadget,
        arn: 'arn:aws:thing:::gadget/${A}/${B}',
        placeholders: [
          { placeholder: 'A', name: 'id', kind: 'required' },
          { placeholder: 'B', name: 'id', kind: 'required' },
        ],
      },
    ],
  });
}
