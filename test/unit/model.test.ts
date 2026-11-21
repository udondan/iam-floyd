import { describe, expect, it } from 'vitest';

import type { Module } from '../../lib/generator';
import type { Condition, Conditions } from '../../lib/generator/condition';
import { buildServiceModel } from '../../lib/generator/model';

const operatorUrl =
  'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html';

function condition(key: string, type: string, extra?: Partial<Condition>) {
  return {
    key,
    description: `Filters access by ${key}`,
    url: `https://example.com/${key}`,
    type,
    isGlobal: key.startsWith('aws:'),
    ...extra,
  };
}

function conditions(...list: Condition[]): Conditions {
  return Object.fromEntries(list.map((c) => [c.key, c]));
}

function module(extra: Partial<Module>): Module {
  return {
    filename: 'ec2',
    name: 'ec2',
    servicePrefix: 'ec2',
    url: 'https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2.html',
    actionList: {},
    resourceTypes: {},
    conditions: {},
    ...extra,
  };
}

describe('buildServiceModel', () => {
  it('builds the service', () => {
    expect(
      buildServiceModel(
        module({ filename: 'billing-portal', name: 'billing-portal' }),
      ),
    ).toEqual({
      schemaVersion: 1,
      filename: 'billing-portal',
      className: 'BillingPortal',
      name: 'billing-portal',
      servicePrefix: 'ec2',
      url: 'https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2.html',
      accessLevelList: {},
      actions: [],
      resources: [],
      conditions: [],
    });
  });

  it('builds the actions and the list of access levels', () => {
    const model = buildServiceModel(
      module({
        actionList: {
          RunInstances: {
            url: 'https://example.com/RunInstances',
            description: 'Grants permission to launch instances',
            accessLevel: 'Write',
            conditions: ['ec2:Region', 'aws:RequestTag/${TagKey}'],
            dependentActions: ['iam:PassRole'],
          },
          CreateTags: {
            url: '',
            description: 'Grants permission to add tags',
            accessLevel: 'Tagging, Write',
            conditions: undefined,
            dependentActions: undefined,
          },
          DescribeInstances: {
            url: '',
            description: 'Grants permission to describe instances',
            accessLevel: 'List',
          },
        },
        conditions: conditions(
          condition('ec2:Region', 'String'),
          condition('aws:RequestTag/${TagKey}', 'String'),
        ),
      }),
    );
    expect(model.accessLevelList).toEqual({
      Write: ['RunInstances', 'CreateTags'],
      Tagging: ['CreateTags'],
      List: ['DescribeInstances'],
    });
    expect(model.actions).toEqual([
      {
        name: 'RunInstances',
        methodName: 'toRunInstances',
        description: 'Grants permission to launch instances',
        accessLevel: 'Write',
        url: 'https://example.com/RunInstances',
        conditionMethods: ['ifRegion', 'ifAwsRequestTag'],
        dependentActions: ['iam:PassRole'],
      },
      {
        name: 'CreateTags',
        methodName: 'toCreateTags',
        description: 'Grants permission to add tags',
        accessLevel: 'Tagging, Write',
        url: '',
        conditionMethods: [],
        dependentActions: [],
      },
      {
        name: 'DescribeInstances',
        methodName: 'toDescribeInstances',
        description: 'Grants permission to describe instances',
        accessLevel: 'List',
        url: '',
      },
    ]);
  });

  it('builds the resources with their placeholders', () => {
    const model = buildServiceModel(
      module({
        resourceTypes: {
          'elastic-ip': {
            name: 'elastic-ip',
            url: 'https://example.com/elastic-ip',
            arn: 'arn:${Partition}:ec2:${Region}:${Account}:elastic-ip/${AllocationId}',
            conditionKeys: ['ec2:Region'],
          },
          image: {
            name: 'image',
            url: '',
            arn: 'arn:${Partition}:ec2:${Region}:${AccountId}:image/${Image_Id}',
            conditionKeys: [],
          },
        },
        conditions: conditions(condition('ec2:Region', 'String')),
      }),
    );
    expect(model.resources).toEqual([
      {
        name: 'elastic-ip',
        methodName: 'onElasticIp',
        url: 'https://example.com/elastic-ip',
        arn: 'arn:${Partition}:ec2:${Region}:${Account}:elastic-ip/${AllocationId}',
        placeholders: [
          {
            placeholder: 'AllocationId',
            name: 'allocationId',
            kind: 'required',
          },
          { placeholder: 'Account', name: 'account', kind: 'account' },
          { placeholder: 'Region', name: 'region', kind: 'region' },
          { placeholder: 'Partition', name: 'partition', kind: 'partition' },
        ],
        conditionMethods: ['ifRegion'],
      },
      {
        name: 'image',
        methodName: 'onImage',
        url: '',
        arn: 'arn:${Partition}:ec2:${Region}:${AccountId}:image/${Image_Id}',
        placeholders: [
          { placeholder: 'Image_Id', name: 'imageId', kind: 'required' },
          { placeholder: 'AccountId', name: 'accountId', kind: 'account' },
          { placeholder: 'Region', name: 'region', kind: 'region' },
          { placeholder: 'Partition', name: 'partition', kind: 'partition' },
        ],
        conditionMethods: [],
      },
    ]);
  });

  it('builds the conditions of every type', () => {
    const model = buildServiceModel(
      module({
        conditions: conditions(
          condition('aws:RequestTag/${TagKey}', 'String', {
            relatedActions: ['RunInstances', 'CreateTags', 'RunInstances'],
            relatedResourceTypes: ['instance', 'instance', 'image'],
          }),
          condition('aws:TagKeys', 'String'),
          condition('ec2:InstanceProfile', 'ARN'),
          condition('ec2:VolumeSize', 'Numeric'),
          condition('ec2:SnapshotTime', 'Date'),
          condition('ec2:SourceIp', 'IPAddress'),
          condition('ec2:Payload', 'Binary'),
          condition('ec2:Encrypted', 'Boolean'),
          condition('ec2:CreationDate', 'date', {
            typeOverride: ['Date'],
          }),
        ),
      }),
    );
    expect(model.conditions).toEqual([
      {
        key: 'aws:RequestTag/${TagKey}',
        methodName: 'ifAwsRequestTag',
        description: 'Filters access by aws:RequestTag/${TagKey}',
        url: 'https://example.com/aws:RequestTag/${TagKey}',
        relatedActionMethods: ['toRunInstances', 'toCreateTags'],
        relatedResourceTypes: ['instance', 'image'],
        keyLiteral: 'aws:RequestTag/',
        keyParam: 'tagKey',
        valueKind: 'string',
        valueTypes: ['string'],
        defaultOperator: 'StringLike',
        operatorUrl: `${operatorUrl}#Conditions_String`,
      },
      {
        key: 'aws:TagKeys',
        methodName: 'ifAwsTagKeys',
        description: 'Filters access by aws:TagKeys',
        url: 'https://example.com/aws:TagKeys',
        relatedActionMethods: [],
        relatedResourceTypes: [],
        keyLiteral: 'aws:TagKeys',
        valueKind: 'string',
        valueTypes: ['string'],
        defaultOperator: 'ForAnyValue:StringLike',
        operatorUrl: `${operatorUrl}#Conditions_String`,
      },
      expect.objectContaining({
        methodName: 'ifInstanceProfile',
        keyLiteral: 'InstanceProfile',
        valueKind: 'arn',
        valueTypes: ['string'],
        defaultOperator: 'ArnLike',
        operatorUrl: `${operatorUrl}#Conditions_ARN`,
      }),
      expect.objectContaining({
        valueKind: 'numeric',
        valueTypes: ['number'],
        defaultOperator: 'NumericEquals',
        operatorUrl: `${operatorUrl}#Conditions_Numeric`,
      }),
      expect.objectContaining({
        valueKind: 'date',
        valueTypes: ['Date', 'string'],
        defaultOperator: 'DateEquals',
        operatorUrl: `${operatorUrl}#Conditions_Date`,
      }),
      expect.objectContaining({
        valueKind: 'ipaddress',
        valueTypes: ['string'],
        defaultOperator: 'IpAddress',
        operatorUrl: `${operatorUrl}#Conditions_IPAddress`,
      }),
      expect.objectContaining({
        valueKind: 'binary',
        valueTypes: ['string'],
        defaultOperator: 'BinaryEquals',
        operatorUrl: `${operatorUrl}#Conditions_BinaryEquals`,
      }),
      {
        key: 'ec2:Encrypted',
        methodName: 'ifEncrypted',
        description: 'Filters access by ec2:Encrypted',
        url: 'https://example.com/ec2:Encrypted',
        relatedActionMethods: [],
        relatedResourceTypes: [],
        keyLiteral: 'Encrypted',
        valueKind: 'boolean',
        defaultOperator: 'Bool',
      },
      expect.objectContaining({
        methodName: 'ifCreationDate',
        valueKind: 'date',
        valueTypes: ['Date'],
      }),
    ]);
  });

  it('fails on an unknown type of condition', () => {
    expect(() =>
      buildServiceModel(
        module({
          conditions: conditions(condition('ec2:Tags/${TagKey}', 'Map')),
        }),
      ),
    ).toThrow('Unexpected condition type: map for Tags/${TagKey}');
  });

  it('names the special conditions of EC2', () => {
    const model = buildServiceModel(
      module({
        conditions: conditions(
          condition('ec2:ResourceTag/', 'String'),
          condition('ec2:Attribute', 'String'),
          condition('ec2:Attribute/${AttributeName}', 'String'),
        ),
      }),
    );
    expect(
      model.conditions.map(({ methodName, keyLiteral, keyParam }) => ({
        methodName,
        keyLiteral,
        keyParam,
      })),
    ).toEqual([
      {
        methodName: 'ifResourceTagExists',
        keyLiteral: 'ResourceTag/',
        keyParam: undefined,
      },
      {
        methodName: 'ifAttributeExists',
        keyLiteral: 'Attribute',
        keyParam: undefined,
      },
      // conflicts with `ec2:Attribute`, which has the same base name
      {
        methodName: 'ifAttributeAttributeName',
        keyLiteral: 'Attribute/',
        keyParam: 'attributeName',
      },
    ]);
  });

  it('appends the parameter only if it has a name', () => {
    const model = buildServiceModel(
      module({
        conditions: conditions(
          condition('ec2:Foo', 'String'),
          condition('ec2:Foo/<>', 'String'),
        ),
      }),
    );
    expect(model.conditions.map(({ methodName }) => methodName)).toEqual([
      'ifFoo',
      'ifFoo',
    ]);
  });

  it('takes the name of a condition from the fixes', () => {
    const model = buildServiceModel(
      module({
        filename: 'codebuild',
        name: 'codebuild',
        servicePrefix: 'codebuild',
        conditions: conditions(
          condition('codebuild:environmentType', 'String'),
        ),
      }),
    );
    expect(model.conditions[0].methodName).toBe('ifFleetEnvironmentType');
  });
});
