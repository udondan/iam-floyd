import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [aws-marketplace-catalog](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacecatalog.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplaceCatalog extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace-catalog](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacecatalog.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a running change set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_CancelChangeSet.html
   */
  public toCancelChangeSet() {
    return this.to('CancelChangeSet');
  }

  /**
   * Grants permission to complete an existing task and submit the content to the associated change
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/
   */
  public toCompleteTask() {
    return this.to('CompleteTask');
  }

  /**
   * Grants permission to delete the resource policy of an existing entity
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to return the details of an existing change set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DescribeChangeSet.html
   */
  public toDescribeChangeSet() {
    return this.to('DescribeChangeSet');
  }

  /**
   * Grants permission to return the details of an existing entity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DescribeEntity.html
   */
  public toDescribeEntity() {
    return this.to('DescribeEntity');
  }

  /**
   * Grants permission to return the details of an existing task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/
   */
  public toDescribeTask() {
    return this.to('DescribeTask');
  }

  /**
   * Grants permission to get the resource policy of an existing entity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to list existing change sets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_ListChangeSets.html
   */
  public toListChangeSets() {
    return this.to('ListChangeSets');
  }

  /**
   * Grants permission to list existing entities
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_ListEntities.html
   */
  public toListEntities() {
    return this.to('ListEntities');
  }

  /**
   * Grants permission to list tags on an existing entity or a change set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list existing tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/
   */
  public toListTasks() {
    return this.to('ListTasks');
  }

  /**
   * Grants permission to attach a resource policy to an existing entity
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to request a new change set (Note: resource-level permissions for this action and condition context keys for this action are only supported when used with Catalog API and are not supported when used with AWS Marketplace Management Portal)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalogChangeType()
   * - .ifIntent()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html
   */
  public toStartChangeSet() {
    return this.to('StartChangeSet');
  }

  /**
   * Grants permission to tag an existing entity or a change set
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag an existing entity or a change set
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the contents of an existing task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/
   */
  public toUpdateTask() {
    return this.to('UpdateTask');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelChangeSet',
      'CompleteTask',
      'StartChangeSet',
      'UpdateTask'
    ],
    'Permissions management': [
      'DeleteResourcePolicy',
      'PutResourcePolicy'
    ],
    Read: [
      'DescribeChangeSet',
      'DescribeEntity',
      'DescribeTask',
      'GetResourcePolicy',
      'ListTagsForResource'
    ],
    List: [
      'ListChangeSets',
      'ListEntities',
      'ListTasks'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Entity to the statement
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DescribeEntity.html#API_DescribeEntity_ResponseSyntax
   *
   * @param catalog - Identifier for the catalog.
   * @param entityType - Identifier for the entityType.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalogChangeType()
   */
  public onEntity(catalog: string, entityType: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || AwsMarketplaceCatalog.defaultPartition }:aws-marketplace:${ region || '*' }:${ account || '*' }:${ catalog }/${ entityType }/${ resourceId }`);
  }

  /**
   * Adds a resource of type ChangeSet to the statement
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_ResponseSyntax
   *
   * @param catalog - Identifier for the catalog.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalogChangeType()
   */
  public onChangeSet(catalog: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || AwsMarketplaceCatalog.defaultPartition }:aws-marketplace:${ region || '*' }:${ account || '*' }:${ catalog }/ChangeSet/${ resourceId }`);
  }

  /**
   * Filters access by the Intent parameter in the StartChangeSet request
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/api-access-control.html
   *
   * Applies to actions:
   * - .toStartChangeSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIntent(value: string | string[], operator?: Operator | string) {
    return this.if(`Intent`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toStartChangeSet()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - Entity
   * - ChangeSet
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toStartChangeSet()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the change type in the StartChangeSet request
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/api-access-control.html
   *
   * Applies to actions:
   * - .toStartChangeSet()
   *
   * Applies to resource types:
   * - Entity
   * - ChangeSet
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCatalogChangeType(value: string | string[], operator?: Operator | string) {
    return this.if(`catalog:ChangeType`, value, operator || 'StringLike');
  }
}
