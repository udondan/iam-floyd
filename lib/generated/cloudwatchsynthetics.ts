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
   * Grants permission to delete a canary. Amazon Synthetics deletes all the resources except for the Lambda function and the CloudWatch Alarms if you created one
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html
   */
  public toDeleteCanary() {
    return this.to('DeleteCanary');
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
   * Grants permission to get a canary details
   *
   * Access Level: Read
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
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html
   */
  public toGetCanaryRuns() {
    return this.to('GetCanaryRuns');
  }

  /**
   * Grants permission to list all tags and values associated with a canary
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
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_StopCanary.html
   */
  public toStopCanary() {
    return this.to('StopCanary');
  }

  /**
   * Grants permission to add one or more tags to a canary
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
   * Grants permission to remove one or more tags from a canary
   *
   * Access Level: Tagging
   *
   * Possible conditions:
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
   * https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html
   */
  public toUpdateCanary() {
    return this.to('UpdateCanary');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateCanary',
      'DeleteCanary',
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
      'ListTagsForResource'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCanary(canaryName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:synthetics:${ region || '*' }:${ account || '*' }:canary:${ canaryName }`);
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
