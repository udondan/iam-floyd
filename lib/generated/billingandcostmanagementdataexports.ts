import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [bcm-data-exports](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingandcostmanagementdataexports.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class BcmDataExports extends PolicyStatement {
  public servicePrefix = 'bcm-data-exports';

  /**
   * Statement provider for service [bcm-data-exports](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingandcostmanagementdataexports.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an export
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateExport.html
   */
  public toCreateExport() {
    return this.to('CreateExport');
  }

  /**
   * Grants permission to delete an export
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteExport.html
   */
  public toDeleteExport() {
    return this.to('DeleteExport');
  }

  /**
   * Grants permission to get the execution of an export
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetExecution.html
   */
  public toGetExecution() {
    return this.to('GetExecution');
  }

  /**
   * Grants permission to get an export
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetExport.html
   */
  public toGetExport() {
    return this.to('GetExport');
  }

  /**
   * Grants permission to get the details of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetTable.html
   */
  public toGetTable() {
    return this.to('GetTable');
  }

  /**
   * Grants permission to list all executions of an export
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListExecutions.html
   */
  public toListExecutions() {
    return this.to('ListExecutions');
  }

  /**
   * Grants permission to list all exports
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListExports.html
   */
  public toListExports() {
    return this.to('ListExports');
  }

  /**
   * Grants permission to list all available tables
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListTables.html
   */
  public toListTables() {
    return this.to('ListTables');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an export
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateExport.html
   */
  public toUpdateExport() {
    return this.to('UpdateExport');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateExport',
      'DeleteExport',
      'UpdateExport'
    ],
    Read: [
      'GetExecution',
      'GetExport',
      'GetTable',
      'ListTagsForResource'
    ],
    List: [
      'ListExecutions',
      'ListExports',
      'ListTables'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type export to the statement
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Export.html
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onExport(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bcm-data-exports:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:export/${ identifier }`);
  }

  /**
   * Adds a resource of type table to the statement
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Table.html
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTable(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bcm-data-exports:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:table/${ identifier }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateExport()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toDeleteExport()
   * - .toGetExecution()
   * - .toGetExport()
   * - .toListExecutions()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateExport()
   *
   * Applies to resource types:
   * - export
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateExport()
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
