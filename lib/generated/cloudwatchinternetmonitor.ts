import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [internetmonitor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchinternetmonitor.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Internetmonitor extends PolicyStatement {
  public servicePrefix = 'internetmonitor';

  /**
   * Statement provider for service [internetmonitor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchinternetmonitor.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a monitor
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/internet-monitor/latest/api/API_CreateMonitor.html
   */
  public toCreateMonitor() {
    return this.to('CreateMonitor');
  }

  /**
   * Grants permission to delete a monitor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/internet-monitor/latest/api/API_DeleteMonitor.html
   */
  public toDeleteMonitor() {
    return this.to('DeleteMonitor');
  }

  /**
   * Grants permission to get information about a health event for a specified monitor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/internet-monitor/latest/api/API_GetHealthEvent.html
   */
  public toGetHealthEvent() {
    return this.to('GetHealthEvent');
  }

  /**
   * Grants permission to get information about a monitor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/internet-monitor/latest/api/API_GetMonitor.html
   */
  public toGetMonitor() {
    return this.to('GetMonitor');
  }

  /**
   * Grants permission to list all health events for a monitor
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/internet-monitor/latest/api/API_ListHealthEvents.html
   */
  public toListHealthEvents() {
    return this.to('ListHealthEvents');
  }

  /**
   * Grants permission to list all monitors in an account and their statuses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/internet-monitor/latest/api/API_ListMonitors.html
   */
  public toListMonitors() {
    return this.to('ListMonitors');
  }

  /**
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/internet-monitor/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/internet-monitor/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/internet-monitor/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a monitor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/internet-monitor/latest/api/API_UpdateMonitor.html
   */
  public toUpdateMonitor() {
    return this.to('UpdateMonitor');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateMonitor',
      'DeleteMonitor',
      'UpdateMonitor'
    ],
    Read: [
      'GetHealthEvent',
      'GetMonitor',
      'ListTagsForResource'
    ],
    List: [
      'ListHealthEvents',
      'ListMonitors'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type HealthEvent to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-components.html
   *
   * @param monitorName - Identifier for the monitorName.
   * @param eventId - Identifier for the eventId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onHealthEvent(monitorName: string, eventId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Internetmonitor.defaultPartition }:internetmonitor:${ region || '*' }:${ account || '*' }:monitor/${ monitorName }/health-event/${ eventId }`);
  }

  /**
   * Adds a resource of type Monitor to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-components.html
   *
   * @param monitorName - Identifier for the monitorName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMonitor(monitorName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Internetmonitor.defaultPartition }:internetmonitor:${ region || '*' }:${ account || '*' }:monitor/${ monitorName }`);
  }
}
