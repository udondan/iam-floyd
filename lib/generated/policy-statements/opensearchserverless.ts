import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [aoss](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchserverless.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Aoss extends PolicyStatement {
  public servicePrefix = 'aoss';

  /**
   * Statement provider for service [aoss](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchserverless.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grant permission to all the supported Opensearch APIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_APIAccessAll.html
   */
  public toAPIAccessAll() {
    return this.to('APIAccessAll');
  }

  /**
   * Grants permission to get attributes for one or more collections
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_BatchGetCollection.html
   */
  public toBatchGetCollection() {
    return this.to('BatchGetCollection');
  }

  /**
   * Grants permission to get the information about a lifecycle policy applied to one or more AOSS resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_BatchGetEffectiveLifecyclePolicy.html
   */
  public toBatchGetEffectiveLifecyclePolicy() {
    return this.to('BatchGetEffectiveLifecyclePolicy');
  }

  /**
   * Grants permission to get information about one or more lifecycle policies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_BatchGetLifecyclePolicy.html
   */
  public toBatchGetLifecyclePolicy() {
    return this.to('BatchGetLifecyclePolicy');
  }

  /**
   * Grants permission to get attributes for one or more VPC endpoints
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_BatchGetVpcEndpoint.html
   */
  public toBatchGetVpcEndpoint() {
    return this.to('BatchGetVpcEndpoint');
  }

  /**
   * Grants permission to create a data access policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCollection()
   * - .ifIndex()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_CreateAccessPolicy.html
   */
  public toCreateAccessPolicy() {
    return this.to('CreateAccessPolicy');
  }

  /**
   * Grants permission to create a serverless collection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_CreateCollection.html
   */
  public toCreateCollection() {
    return this.to('CreateCollection');
  }

  /**
   * Grants permission to create a lifecycle policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCollection()
   * - .ifIndex()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_CreateLifecyclePolicy.html
   */
  public toCreateLifecyclePolicy() {
    return this.to('CreateLifecyclePolicy');
  }

  /**
   * Grants permission to create a serverless security configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_CreateSecurityConfig.html
   */
  public toCreateSecurityConfig() {
    return this.to('CreateSecurityConfig');
  }

  /**
   * Grants permission to create a network or encryption policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCollection()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_CreateSecurityPolicy.html
   */
  public toCreateSecurityPolicy() {
    return this.to('CreateSecurityPolicy');
  }

  /**
   * Grants permission to create an OpenSearch-Serverless-managed interface VPC endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_CreateVpcEndpoint.html
   */
  public toCreateVpcEndpoint() {
    return this.to('CreateVpcEndpoint');
  }

  /**
   * Grants permission to Opensearch Serverless Dashboards
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_DashboardsAccessAll.html
   */
  public toDashboardsAccessAll() {
    return this.to('DashboardsAccessAll');
  }

  /**
   * Grants permission to delete a data access policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCollection()
   * - .ifIndex()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_DeleteAccessPolicy.html
   */
  public toDeleteAccessPolicy() {
    return this.to('DeleteAccessPolicy');
  }

  /**
   * Grants permission to delete a serverless collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_DeleteCollection.html
   */
  public toDeleteCollection() {
    return this.to('DeleteCollection');
  }

  /**
   * Grants permission to delete a lifecycle policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCollection()
   * - .ifIndex()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_DeleteLifecyclePolicy.html
   */
  public toDeleteLifecyclePolicy() {
    return this.to('DeleteLifecyclePolicy');
  }

  /**
   * Grants permission to delete a security configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_DeleteSecurityConfig.html
   */
  public toDeleteSecurityConfig() {
    return this.to('DeleteSecurityConfig');
  }

  /**
   * Grants permission to delete a security policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCollection()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_DeleteSecurityPolicy.html
   */
  public toDeleteSecurityPolicy() {
    return this.to('DeleteSecurityPolicy');
  }

  /**
   * Grants permission to delete an OpenSearch Serverless-managed interface VPC endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_DeleteVpcEndpoint.html
   */
  public toDeleteVpcEndpoint() {
    return this.to('DeleteVpcEndpoint');
  }

  /**
   * Grants permission to get information about a data access policy
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCollection()
   * - .ifIndex()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_GetAccessPolicy.html
   */
  public toGetAccessPolicy() {
    return this.to('GetAccessPolicy');
  }

  /**
   * Grants permission to get account settings, including capacity settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_GetAccountSettings.html
   */
  public toGetAccountSettings() {
    return this.to('GetAccountSettings');
  }

  /**
   * Grants permission to get statistis about the security policies in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_GetPoliciesStats.html
   */
  public toGetPoliciesStats() {
    return this.to('GetPoliciesStats');
  }

  /**
   * Grants permission to get information about a serverless security configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_GetSecurityConfig.html
   */
  public toGetSecurityConfig() {
    return this.to('GetSecurityConfig');
  }

  /**
   * Grants permission to get information about a security policy
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCollection()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_GetSecurityPolicy.html
   */
  public toGetSecurityPolicy() {
    return this.to('GetSecurityPolicy');
  }

  /**
   * Grants permission to list data access policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListAccessPolicies.html
   */
  public toListAccessPolicies() {
    return this.to('ListAccessPolicies');
  }

  /**
   * Grants permission to list collections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListCollections.html
   */
  public toListCollections() {
    return this.to('ListCollections');
  }

  /**
   * Grants permission to list lifecycle policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListLifecyclePolicies.html
   */
  public toListLifecyclePolicies() {
    return this.to('ListLifecyclePolicies');
  }

  /**
   * Grants permission to list security configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListSecurityConfigs.html
   */
  public toListSecurityConfigs() {
    return this.to('ListSecurityConfigs');
  }

  /**
   * Grants permission to list security policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListSecurityPolicies.html
   */
  public toListSecurityPolicies() {
    return this.to('ListSecurityPolicies');
  }

  /**
   * Grants permission to list tags for a collection
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list OpenSearch Serverless-managed VPC endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_ListVpcEndpoints.html
   */
  public toListVpcEndpoints() {
    return this.to('ListVpcEndpoints');
  }

  /**
   * Grants permission to tag a serverless collection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a collection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a data access policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCollection()
   * - .ifIndex()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UpdateAccessPolicy.html
   */
  public toUpdateAccessPolicy() {
    return this.to('UpdateAccessPolicy');
  }

  /**
   * Grants permission to update account settings, including capacity settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UpdateAccountSettings.html
   */
  public toUpdateAccountSettings() {
    return this.to('UpdateAccountSettings');
  }

  /**
   * Grants permission to update a collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UpdateCollection.html
   */
  public toUpdateCollection() {
    return this.to('UpdateCollection');
  }

  /**
   * Grants permission to update a lifecycle policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCollection()
   * - .ifIndex()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UpdateLifecyclePolicy.html
   */
  public toUpdateLifecyclePolicy() {
    return this.to('UpdateLifecyclePolicy');
  }

  /**
   * Grants permission to update a security configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UpdateSecurityConfig.html
   */
  public toUpdateSecurityConfig() {
    return this.to('UpdateSecurityConfig');
  }

  /**
   * Grants permission to update a security policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCollection()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UpdateSecurityPolicy.html
   */
  public toUpdateSecurityPolicy() {
    return this.to('UpdateSecurityPolicy');
  }

  /**
   * Grants permission to update an OpenSearch Serverless-managed VPC endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/ServerlessAPIReference/API_UpdateVpcEndpoint.html
   */
  public toUpdateVpcEndpoint() {
    return this.to('UpdateVpcEndpoint');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'APIAccessAll',
      'CreateAccessPolicy',
      'CreateCollection',
      'CreateLifecyclePolicy',
      'CreateSecurityConfig',
      'CreateSecurityPolicy',
      'CreateVpcEndpoint',
      'DashboardsAccessAll',
      'DeleteAccessPolicy',
      'DeleteCollection',
      'DeleteLifecyclePolicy',
      'DeleteSecurityConfig',
      'DeleteSecurityPolicy',
      'DeleteVpcEndpoint',
      'TagResource',
      'UntagResource',
      'UpdateAccessPolicy',
      'UpdateAccountSettings',
      'UpdateCollection',
      'UpdateLifecyclePolicy',
      'UpdateSecurityConfig',
      'UpdateSecurityPolicy',
      'UpdateVpcEndpoint'
    ],
    Read: [
      'BatchGetCollection',
      'BatchGetEffectiveLifecyclePolicy',
      'BatchGetLifecyclePolicy',
      'BatchGetVpcEndpoint',
      'GetAccessPolicy',
      'GetAccountSettings',
      'GetPoliciesStats',
      'GetSecurityConfig',
      'GetSecurityPolicy'
    ],
    List: [
      'ListAccessPolicies',
      'ListCollections',
      'ListLifecyclePolicies',
      'ListSecurityConfigs',
      'ListSecurityPolicies',
      'ListTagsForResource',
      'ListVpcEndpoints'
    ]
  };

  /**
   * Adds a resource of type Collection to the statement
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-overview.html
   *
   * @param collectionId - Identifier for the collectionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCollection(collectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aoss:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:collection/${ collectionId }`);
  }

  /**
   * Adds a resource of type Dashboards to the statement
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-overview.html
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDashboards(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aoss:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:dashboards/default`);
  }

  /**
   * Filters access by the identifier of the collection
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/security-iam-serverless.html#security_iam_serverless-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCollectionId(value: string | string[], operator?: Operator | string) {
    return this.if(`CollectionId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the collection name
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/security-iam-serverless.html#security_iam_serverless-conditionkeys
   *
   * Applies to actions:
   * - .toCreateAccessPolicy()
   * - .toCreateLifecyclePolicy()
   * - .toCreateSecurityPolicy()
   * - .toDeleteAccessPolicy()
   * - .toDeleteLifecyclePolicy()
   * - .toDeleteSecurityPolicy()
   * - .toGetAccessPolicy()
   * - .toGetSecurityPolicy()
   * - .toUpdateAccessPolicy()
   * - .toUpdateLifecyclePolicy()
   * - .toUpdateSecurityPolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCollection(value: string | string[], operator?: Operator | string) {
    return this.if(`collection`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the index
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/security-iam-serverless.html#security_iam_serverless-conditionkeys
   *
   * Applies to actions:
   * - .toCreateAccessPolicy()
   * - .toCreateLifecyclePolicy()
   * - .toDeleteAccessPolicy()
   * - .toDeleteLifecyclePolicy()
   * - .toGetAccessPolicy()
   * - .toUpdateAccessPolicy()
   * - .toUpdateLifecyclePolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIndex(value: string | string[], operator?: Operator | string) {
    return this.if(`index`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tags that are passed in the request
   *
   * Applies to actions:
   * - .toCreateCollection()
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
   * Filters access based on the tags associated with the resource
   *
   * Applies to resource types:
   * - Collection
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tag keys that are passed in the request
   *
   * Applies to actions:
   * - .toCreateCollection()
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
