import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [synthetics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchsynthetics.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Synthetics extends PolicyStatement {
  public servicePrefix = 'synthetics';

  /**
   * Statement provider for service [synthetics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchsynthetics.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a resource with a group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_AssociateResource.html
   */
  public toAssociateResource() {
    return this.to('AssociateResource');
  }

  /**
   * Grants permission to create a canary
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CreateCanary.html
   */
  public toCreateCanary() {
    return this.to('CreateCanary');
  }

  /**
   * Grants permission to create a group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    return this.to('CreateGroup');
  }

  /**
   * Grants permission to delete a canary. Amazon Synthetics deletes all the resources except for the Lambda function and the CloudWatch Alarms if you created one
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html
   */
  public toDeleteCanary() {
    return this.to('DeleteCanary');
  }

  /**
   * Grants permission to delete a group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Grants permission to list information of all canaries
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifNames()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html
   */
  public toDescribeCanaries() {
    return this.to('DescribeCanaries');
  }

  /**
   * Grants permission to list information about the last test run associated with all canaries
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifNames()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanariesLastRun.html
   */
  public toDescribeCanariesLastRun() {
    return this.to('DescribeCanariesLastRun');
  }

  /**
   * Grants permission to list information about Synthetics canary runtime versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeRuntimeVersions.html
   */
  public toDescribeRuntimeVersions() {
    return this.to('DescribeRuntimeVersions');
  }

  /**
   * Grants permission to disassociate a resource from a group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DisassociateResource.html
   */
  public toDisassociateResource() {
    return this.to('DisassociateResource');
  }

  /**
   * Grants permission to view the details of a canary
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html
   */
  public toGetCanary() {
    return this.to('GetCanary');
  }

  /**
   * Grants permission to list information about all the test runs associated with a canary
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html
   */
  public toGetCanaryRuns() {
    return this.to('GetCanaryRuns');
  }

  /**
   * Grants permission to view the details of a group
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetGroup.html
   */
  public toGetGroup() {
    return this.to('GetGroup');
  }

  /**
   * Grants permission to list information about the associated groups of a canary
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListAssociatedGroups.html
   */
  public toListAssociatedGroups() {
    return this.to('ListAssociatedGroups');
  }

  /**
   * Grants permission to list information about canaries in a group
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListGroupResources.html
   */
  public toListGroupResources() {
    return this.to('ListGroupResources');
  }

  /**
   * Grants permission to list information of all groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Grants permission to list all tags and values associated with a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start a canary, so that Amazon CloudWatch Synthetics starts monitoring a website
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_StartCanary.html
   */
  public toStartCanary() {
    return this.to('StartCanary');
  }

  /**
   * Grants permission to stop a canary
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_StopCanary.html
   */
  public toStopCanary() {
    return this.to('StopCanary');
  }

  /**
   * Grants permission to add one or more tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a canary
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html
   */
  public toUpdateCanary() {
    return this.to('UpdateCanary');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateResource',
      'CreateCanary',
      'CreateGroup',
      'DeleteCanary',
      'DeleteGroup',
      'DisassociateResource',
      'StartCanary',
      'StopCanary',
      'UpdateCanary'
    ],
    Read: [
      'DescribeCanaries',
      'DescribeCanariesLastRun',
      'DescribeRuntimeVersions',
      'GetCanary',
      'GetCanaryRuns',
      'GetGroup',
      'ListTagsForResource'
    ],
    List: [
      'ListAssociatedGroups',
      'ListGroupResources',
      'ListGroups'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type canary to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html
   *
   * @param canaryName - Identifier for the canaryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCanary(canaryName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Synthetics.defaultPartition }:synthetics:${ region || '*' }:${ account || '*' }:canary:${ canaryName }`);
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Groups.html
   *
   * @param groupId - Identifier for the groupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGroup(groupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Synthetics.defaultPartition }:synthetics:${ region || '*' }:${ account || '*' }:group:${ groupId }`);
  }

  /**
   * Filters access based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateCanary()
   * - .toCreateGroup()
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
   * Filters access based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAssociateResource()
   * - .toDeleteCanary()
   * - .toDeleteGroup()
   * - .toDisassociateResource()
   * - .toGetCanary()
   * - .toGetCanaryRuns()
   * - .toGetGroup()
   * - .toListAssociatedGroups()
   * - .toListGroupResources()
   * - .toStartCanary()
   * - .toStopCanary()
   * - .toUntagResource()
   * - .toUpdateCanary()
   *
   * Applies to resource types:
   * - canary
   * - group
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAssociateResource()
   * - .toCreateCanary()
   * - .toCreateGroup()
   * - .toDeleteCanary()
   * - .toDeleteGroup()
   * - .toDisassociateResource()
   * - .toGetCanary()
   * - .toGetCanaryRuns()
   * - .toGetGroup()
   * - .toListAssociatedGroups()
   * - .toListGroupResources()
   * - .toStartCanary()
   * - .toStopCanary()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateCanary()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the name of the canary
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html
   *
   * Applies to actions:
   * - .toDescribeCanaries()
   * - .toDescribeCanariesLastRun()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifNames(value: string | string[], operator?: Operator | string) {
    return this.if(`Names`, value, operator || 'StringLike');
  }
}
