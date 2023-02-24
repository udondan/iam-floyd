import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [internetmonitor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchinternetmonitor.html).
 *
 * @param options - Options for the statement
 */
export class Internetmonitor extends PolicyStatement {
  public servicePrefix = 'internetmonitor';

  /**
   * Statement provider for service [internetmonitor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchinternetmonitor.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Creates a monitor
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toCreateMonitor() {
    return this.to('CreateMonitor');
  }

  /**
   * Deletes a monitor
   *
   * Access Level: Write
   */
  public toDeleteMonitor() {
    return this.to('DeleteMonitor');
  }

  /**
   * Gets information about a health event for a specified monitor
   *
   * Access Level: Read
   */
  public toGetHealthEvent() {
    return this.to('GetHealthEvent');
  }

  /**
   * Gets information about a monitor
   *
   * Access Level: Read
   */
  public toGetMonitor() {
    return this.to('GetMonitor');
  }

  /**
   * Lists all health events for a monitor
   *
   * Access Level: List
   */
  public toListHealthEvents() {
    return this.to('ListHealthEvents');
  }

  /**
   * Lists all monitors in an account and their statuses
   *
   * Access Level: List
   */
  public toListMonitors() {
    return this.to('ListMonitors');
  }

  /**
   * Lists the tags for a resource
   *
   * Access Level: Read
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Adds a tag to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Removes a tag from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Updates a monitor
   *
   * Access Level: Write
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
   * Adds a resource of type HealthEvents to the statement
   *
   * @param monitorName - Identifier for the monitorName.
   * @param eventId - Identifier for the eventId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onHealthEvents(monitorName: string, eventId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:internetmonitor:${ region || '*' }:${ account || '*' }:Monitor/${ monitorName }/HealthEvents/${ eventId }`);
  }

  /**
   * Adds a resource of type Monitor to the statement
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
    return this.on(`arn:${ partition || this.defaultPartition }:internetmonitor:${ region || '*' }:${ account || '*' }:Monitors/${ monitorName }`);
  }
}
