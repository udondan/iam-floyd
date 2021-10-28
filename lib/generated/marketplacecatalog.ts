import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
   * Cancels a running change set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_CancelChangeSet.html
   */
  public toCancelChangeSet() {
    return this.to('CancelChangeSet');
  }

  /**
   * Complete an existing task and submit the content to the associated change.
   *
   * Access Level: Write
   */
  public toCompleteTask() {
    return this.to('CompleteTask');
  }

  /**
   * Returns the details of an existing change set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_DescribeChangeSet.html
   */
  public toDescribeChangeSet() {
    return this.to('DescribeChangeSet');
  }

  /**
   * Returns the details of an existing entity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_DescribeEntity.html
   */
  public toDescribeEntity() {
    return this.to('DescribeEntity');
  }

  /**
   * Returns the details of an existing task.
   *
   * Access Level: Read
   */
  public toDescribeTask() {
    return this.to('DescribeTask');
  }

  /**
   * Lists existing change sets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_ListChangeSets.html
   */
  public toListChangeSets() {
    return this.to('ListChangeSets');
  }

  /**
   * Lists existing entities.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_ListEntities.html
   */
  public toListEntities() {
    return this.to('ListEntities');
  }

  /**
   * Lists existing tasks.
   *
   * Access Level: List
   */
  public toListTasks() {
    return this.to('ListTasks');
  }

  /**
   * Requests a new change set.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalogChangeType()
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_StartChangeSet.html
   */
  public toStartChangeSet() {
    return this.to('StartChangeSet');
  }

  /**
   * Update the content of an existing task.
   *
   * Access Level: Write
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
    Read: [
      'DescribeChangeSet',
      'DescribeEntity',
      'DescribeTask',
      'ListChangeSets',
      'ListEntities'
    ],
    List: [
      'ListTasks'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEntity(catalog: string, entityType: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:aws-marketplace:${ region || '*' }:${ account || '*' }:${ catalog }/${ entityType }/${ resourceId }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onChangeSet(catalog: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:aws-marketplace:${ region || '*' }:${ account || '*' }:${ catalog }/ChangeSet/${ resourceId }`);
  }

  /**
   * Enables you to verify change type in the StartChangeSet request.
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/api-access-control.html
   *
   * Applies to actions:
   * - .toStartChangeSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCatalogChangeType(value: string | string[], operator?: Operator | string) {
    return this.if(`catalog:ChangeType`, value, operator || 'StringLike');
  }
}
