import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [cognito-identity](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitoidentity.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CognitoIdentity extends PolicyStatement {
  public servicePrefix = 'cognito-identity';

  /**
   * Statement provider for service [cognito-identity](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitoidentity.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new identity pool
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_CreateIdentityPool.html
   */
  public toCreateIdentityPool() {
    return this.to('CreateIdentityPool');
  }

  /**
   * Grants permission to delete identities from an identity pool. You can specify a list of 1-60 identities that you want to delete
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DeleteIdentities.html
   */
  public toDeleteIdentities() {
    return this.to('DeleteIdentities');
  }

  /**
   * Grants permission to delete a user pool. Once a pool is deleted, users will not be able to authenticate with the pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DeleteIdentityPool.html
   */
  public toDeleteIdentityPool() {
    return this.to('DeleteIdentityPool');
  }

  /**
   * Grants permission to return metadata related to the given identity, including when the identity was created and any associated linked logins
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DescribeIdentity.html
   */
  public toDescribeIdentity() {
    return this.to('DescribeIdentity');
  }

  /**
   * Grants permission to get details about a particular identity pool, including the pool name, ID description, creation date, and current number of users
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DescribeIdentityPool.html
   */
  public toDescribeIdentityPool() {
    return this.to('DescribeIdentityPool');
  }

  /**
   * Grants permission to return credentials for the provided identity ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html
   */
  public toGetCredentialsForIdentity() {
    return this.to('GetCredentialsForIdentity');
  }

  /**
   * Grants permission to generate (or retrieve) a Cognito ID. Supplying multiple logins will create an implicit linked account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetId.html
   */
  public toGetId() {
    return this.to('GetId');
  }

  /**
   * Grants permission to get analytics data about the total current identity count for all identity pool identity provider (IdPs)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetIdentityPoolAnalytics.html
   */
  public toGetIdentityPoolAnalytics() {
    return this.to('GetIdentityPoolAnalytics');
  }

  /**
   * Grants permission to get analytics data about the number of new identities and total identities for all identity pool identity providers (IdPs)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetIdentityPoolDailyAnalytics.html
   */
  public toGetIdentityPoolDailyAnalytics() {
    return this.to('GetIdentityPoolDailyAnalytics');
  }

  /**
   * Grants permission to get the roles for an identity pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetIdentityPoolRoles.html
   */
  public toGetIdentityPoolRoles() {
    return this.to('GetIdentityPoolRoles');
  }

  /**
   * Grants permission to get analytics data about the number of new identities and total identities for one identity pool identity provider (IdPs)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetIdentityProviderDailyAnalytics.html
   */
  public toGetIdentityProviderDailyAnalytics() {
    return this.to('GetIdentityProviderDailyAnalytics');
  }

  /**
   * Grants permission to get an OpenID token, using a known Cognito ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetOpenIdToken.html
   */
  public toGetOpenIdToken() {
    return this.to('GetOpenIdToken');
  }

  /**
   * Grants permission to register (or retrieve) a Cognito IdentityId and an OpenID Connect token for a user authenticated by your backend authentication process
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetOpenIdTokenForDeveloperIdentity.html
   */
  public toGetOpenIdTokenForDeveloperIdentity() {
    return this.to('GetOpenIdTokenForDeveloperIdentity');
  }

  /**
   * Grants permission to get the principal tags for an identity pool and provider
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetPrincipalTagAttributeMap.html
   */
  public toGetPrincipalTagAttributeMap() {
    return this.to('GetPrincipalTagAttributeMap');
  }

  /**
   * Grants permission to list the identities in an identity pool
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListIdentities.html
   */
  public toListIdentities() {
    return this.to('ListIdentities');
  }

  /**
   * Grants permission to list all of the Cognito identity pools registered for your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListIdentityPools.html
   */
  public toListIdentityPools() {
    return this.to('ListIdentityPools');
  }

  /**
   * Grants permission to list the tags that are assigned to an Amazon Cognito identity pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve the IdentityId associated with a DeveloperUserIdentifier or the list of DeveloperUserIdentifiers associated with an IdentityId for an existing identity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_LookupDeveloperIdentity.html
   */
  public toLookupDeveloperIdentity() {
    return this.to('LookupDeveloperIdentity');
  }

  /**
   * Grants permission to merge two users having different IdentityIds, existing in the same identity pool, and identified by the same developer provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_MergeDeveloperIdentities.html
   */
  public toMergeDeveloperIdentities() {
    return this.to('MergeDeveloperIdentities');
  }

  /**
   * Grants permission to set the roles for an identity pool. These roles are used when making calls to GetCredentialsForIdentity action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_SetIdentityPoolRoles.html
   */
  public toSetIdentityPoolRoles() {
    return this.to('SetIdentityPoolRoles');
  }

  /**
   * Grants permission to set the principal tags for an identity pool and provider. These tags are used when making calls to GetOpenIdToken action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_SetPrincipalTagAttributeMap.html
   */
  public toSetPrincipalTagAttributeMap() {
    return this.to('SetPrincipalTagAttributeMap');
  }

  /**
   * Grants permission to assign a set of tags to an Amazon Cognito identity pool
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to unlink a DeveloperUserIdentifier from an existing identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UnlinkDeveloperIdentity.html
   */
  public toUnlinkDeveloperIdentity() {
    return this.to('UnlinkDeveloperIdentity');
  }

  /**
   * Grants permission to unlink a federated identity from an existing account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UnlinkIdentity.html
   */
  public toUnlinkIdentity() {
    return this.to('UnlinkIdentity');
  }

  /**
   * Grants permission to remove the specified tags from an Amazon Cognito identity pool
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an identity pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UpdateIdentityPool.html
   */
  public toUpdateIdentityPool() {
    return this.to('UpdateIdentityPool');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateIdentityPool',
      'DeleteIdentities',
      'DeleteIdentityPool',
      'GetId',
      'MergeDeveloperIdentities',
      'SetIdentityPoolRoles',
      'SetPrincipalTagAttributeMap',
      'UnlinkDeveloperIdentity',
      'UnlinkIdentity',
      'UpdateIdentityPool'
    ],
    Read: [
      'DescribeIdentity',
      'DescribeIdentityPool',
      'GetCredentialsForIdentity',
      'GetIdentityPoolAnalytics',
      'GetIdentityPoolDailyAnalytics',
      'GetIdentityPoolRoles',
      'GetIdentityProviderDailyAnalytics',
      'GetOpenIdToken',
      'GetOpenIdTokenForDeveloperIdentity',
      'GetPrincipalTagAttributeMap',
      'ListTagsForResource',
      'LookupDeveloperIdentity'
    ],
    List: [
      'ListIdentities',
      'ListIdentityPools'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type identitypool to the statement
   *
   * https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html
   *
   * @param identityPoolId - Identifier for the identityPoolId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIdentitypool(identityPoolId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cognito-identity:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:identitypool/${ identityPoolId }`);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateIdentityPool()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - identitypool
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a key that is present in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateIdentityPool()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
