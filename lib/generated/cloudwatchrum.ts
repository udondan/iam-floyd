import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [rum](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudwatchrum.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Rum extends PolicyStatement {
  public servicePrefix = 'rum';

  /**
   * Statement provider for service [rum](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudwatchrum.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create appMonitor metadata
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:GetRole
   *
   * https://docs.aws.amazon.com/rum/latest/APIReference/API_CreateAppMonitor.html
   */
  public toCreateAppMonitor() {
    return this.to('CreateAppMonitor');
  }

  /**
   * Grants permission to delete appMonitor metadata
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rum/latest/APIReference/API_DeleteAppMonitor.html
   */
  public toDeleteAppMonitor() {
    return this.to('DeleteAppMonitor');
  }

  /**
   * Grants permission to get appMonitor metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rum/latest/APIReference/API_GetAppMonitor.html
   */
  public toGetAppMonitor() {
    return this.to('GetAppMonitor');
  }

  /**
   * Grants permission to get appMonitor data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rum/latest/APIReference/API_GetAppMonitorData.html
   */
  public toGetAppMonitorData() {
    return this.to('GetAppMonitorData');
  }

  /**
   * Grants permission to list appMonitors metadata
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/rum/latest/APIReference/API_ListAppMonitors.html
   */
  public toListAppMonitors() {
    return this.to('ListAppMonitors');
  }

  /**
   * Grants permission to list tags for resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rum/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to put RUM events for appmonitor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rum/latest/APIReference/API_PutRumEvents.html
   */
  public toPutRumEvents() {
    return this.to('PutRumEvents');
  }

  /**
   * Grants permission to tag resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rum/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rum/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update appmonitor metadata
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:GetRole
   *
   * https://docs.aws.amazon.com/rum/latest/APIReference/API_UpdateAppMonitor.html
   */
  public toUpdateAppMonitor() {
    return this.to('UpdateAppMonitor');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAppMonitor',
      'DeleteAppMonitor',
      'PutRumEvents',
      'UpdateAppMonitor'
    ],
    Read: [
      'GetAppMonitor',
      'GetAppMonitorData',
      'ListTagsForResource'
    ],
    List: [
      'ListAppMonitors'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type AppMonitorResource to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_AppMonitor.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAppMonitorResource(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:rum:${ region || '*' }:${ account || '*' }:appmonitor/${ name }`);
  }
}
