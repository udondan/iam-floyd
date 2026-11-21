import { describe, expect, it } from 'vitest';

import {
  camelCase,
  createConditionName,
  getArnPlaceholders,
  lowerFirst,
  upperFirst,
} from '../../lib/generator/naming';

describe('upperFirst / lowerFirst', () => {
  it('changes the case of the first letter only', () => {
    expect(upperFirst('fooBar')).toBe('FooBar');
    expect(lowerFirst('FooBar')).toBe('fooBar');
    expect(upperFirst('')).toBe('');
  });
});

describe('camelCase', () => {
  it('joins the parts at separators', () => {
    expect(camelCase('elastic-ip')).toBe('ElasticIp');
    expect(camelCase('aws-marketplace_catalog.v2 x/${Foo}')).toBe(
      'AwsMarketplaceCatalogV2XFoo',
    );
  });
});

describe('getArnPlaceholders', () => {
  it('moves the leading partition, region and account to the end', () => {
    expect([
      ...getArnPlaceholders(
        'arn:${Partition}:s3:${Region}:${Account}:job/${JobId}',
      ),
    ]).toEqual(['JobId', 'Account', 'Region', 'Partition']);
    expect([
      ...getArnPlaceholders(
        'arn:${Partition}:iam::${AccountId}:role/${Role_Name}',
      ),
    ]).toEqual(['Role_Name', 'AccountId', 'Partition']);
  });

  it('keeps placeholders after the first other placeholder in place', () => {
    expect([...getArnPlaceholders('arn:aws:foo:${Name}:${Region}')]).toEqual([
      'Name',
      'Region',
    ]);
  });

  it('returns only the partition, region and account if there are no others', () => {
    expect([
      ...getArnPlaceholders(
        'arn:${Partition}:securityhub:${Region}:${Account}:hub/default',
      ),
    ]).toEqual(['Account', 'Region', 'Partition']);
  });

  it('returns null without placeholders', () => {
    expect(getArnPlaceholders('arn:aws:s3:::bucket')).toBeNull();
  });
});

describe('createConditionName', () => {
  it('omits the prefix of the service', () => {
    expect(createConditionName('ec2:Region', 'ec2')).toBe('ifRegion');
  });

  it('includes the prefix of global conditions and other services', () => {
    expect(createConditionName('aws:SourceVpc', 'ec2')).toBe('ifAwsSourceVpc');
    expect(createConditionName('s3:x-amz-acl', 'ec2')).toBe('ifS3XAmzAcl');
  });

  it.each([
    ['accounts.google.com:aud', 'ifGoogleAud'],
    ['cognito-identity.amazonaws.com:amr', 'ifCognitoAmr'],
    ['www.amazon.com:user_id', 'ifAmazonUserId'],
    ['graph.facebook.com:id', 'ifFacebookId'],
  ])('names the identity provider of %s', (key, name) => {
    expect(createConditionName(key, 'sts')).toBe(name);
  });

  it('omits a trailing placeholder', () => {
    expect(createConditionName('aws:RequestTag/${TagKey}', 'ec2')).toBe(
      'ifAwsRequestTag',
    );
    expect(createConditionName('ec2:ResourceTag/<key>', 'ec2')).toBe(
      'ifResourceTag',
    );
  });

  it('keeps a placeholder which is not last', () => {
    expect(
      createConditionName(
        'token.actions.githubusercontent.com/enterprises/${EnterpriseName}:actor',
        'sts',
      ),
    ).toBe('ifTokenActionsGithubusercontentComEnterprisesEnterpriseNameActor');
  });
});
