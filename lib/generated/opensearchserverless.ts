import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps, Operator } from '../shared';

/**
 * Statement provider for service [aoss](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchserverless.html).
 *
 * @param options - Options for the statement
 */
export class Aoss extends PolicyStatement {
  public servicePrefix = 'aoss';

  /**
   * Statement provider for service [aoss](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchserverless.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
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
   * Grants permission to delete a data access policy
   *
   * Access Level: Write
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
    Read: [
      'BatchGetCollection',
      'BatchGetVpcEndpoint',
      'GetAccessPolicy',
      'GetAccountSettings',
      'GetPoliciesStats',
      'GetSecurityConfig',
      'GetSecurityPolicy'
    ],
    Write: [
      'CreateAccessPolicy',
      'CreateCollection',
      'CreateSecurityConfig',
      'CreateSecurityPolicy',
      'CreateVpcEndpoint',
      'DeleteAccessPolicy',
      'DeleteCollection',
      'DeleteSecurityConfig',
      'DeleteSecurityPolicy',
      'DeleteVpcEndpoint',
      'TagResource',
      'UntagResource',
      'UpdateAccessPolicy',
      'UpdateAccountSettings',
      'UpdateCollection',
      'UpdateSecurityConfig',
      'UpdateSecurityPolicy',
      'UpdateVpcEndpoint'
    ],
    List: [
      'ListAccessPolicies',
      'ListCollections',
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCollection(collectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:aoss:${ region || '*' }:${ account || '*' }:collection/${ collectionId }`);
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
    return this.if(`CollectionId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the collection name
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/security-iam-serverless.html#security_iam_serverless-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCollection(value: string | string[], operator?: Operator | string) {
    return this.if(`collection`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the index
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/security-iam-serverless.html#security_iam_serverless-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIndex(value: string | string[], operator?: Operator | string) {
    return this.if(`index`, value, operator || 'StringLike');
  }
}
