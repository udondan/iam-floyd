import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [networkflowmonitor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_networkflowmonitor.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Networkflowmonitor extends PolicyStatement {
  public servicePrefix = 'networkflowmonitor';

  /**
   * Statement provider for service [networkflowmonitor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_networkflowmonitor.html).
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
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_CreateMonitor.html
   */
  public toCreateMonitor() {
    return this.to('CreateMonitor');
  }

  /**
   * Grants permission to create a scope
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_CreateScope.html
   */
  public toCreateScope() {
    return this.to('CreateScope');
  }

  /**
   * Grants permission to delete a monitor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_DeleteMonitor.html
   */
  public toDeleteMonitor() {
    return this.to('DeleteMonitor');
  }

  /**
   * Grants permission to delete a scope
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_DeleteScope.html
   */
  public toDeleteScope() {
    return this.to('DeleteScope');
  }

  /**
   * Grants permission to get information about a monitor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_GetMonitor.html
   */
  public toGetMonitor() {
    return this.to('GetMonitor');
  }

  /**
   * Grants permission to get the results of a query that retrieves top contributors data for a monitor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_GetQueryResultsMonitorTopContributors.html
   */
  public toGetQueryResultsMonitorTopContributors() {
    return this.to('GetQueryResultsMonitorTopContributors');
  }

  /**
   * Grants permission to get the results of a query that retrieves top contributors for workload insights
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_GetQueryResultsWorkloadInsightsTopContributors.html
   */
  public toGetQueryResultsWorkloadInsightsTopContributors() {
    return this.to('GetQueryResultsWorkloadInsightsTopContributors');
  }

  /**
   * Grants permission to get the results of a query that retrieves top contributors data points for workload insights
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_GetQueryResultsWorkloadInsightsTopContributorsData.html
   */
  public toGetQueryResultsWorkloadInsightsTopContributorsData() {
    return this.to('GetQueryResultsWorkloadInsightsTopContributorsData');
  }

  /**
   * Grants permission to get the status of a query that retrieves top contributors data for a monitor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_GetQueryStatusMonitorTopContributors.html
   */
  public toGetQueryStatusMonitorTopContributors() {
    return this.to('GetQueryStatusMonitorTopContributors');
  }

  /**
   * Grants permission to get the status of a query that retrieves top contributors for workload insights
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_GetQueryStatusWorkloadInsightsTopContributors.html
   */
  public toGetQueryStatusWorkloadInsightsTopContributors() {
    return this.to('GetQueryStatusWorkloadInsightsTopContributors');
  }

  /**
   * Grants permission to get the status of a query that retrieves top contributors data points for workload insights
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_GetQueryStatusWorkloadInsightsTopContributorsData.html
   */
  public toGetQueryStatusWorkloadInsightsTopContributorsData() {
    return this.to('GetQueryStatusWorkloadInsightsTopContributorsData');
  }

  /**
   * Grants permission to get information about a scope
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_GetScope.html
   */
  public toGetScope() {
    return this.to('GetScope');
  }

  /**
   * Grants permission to list all monitors in an account and their statuses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_ListMonitors.html
   */
  public toListMonitors() {
    return this.to('ListMonitors');
  }

  /**
   * Grants permission to get all scopes for an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_ListScopes.html
   */
  public toListScopes() {
    return this.to('ListScopes');
  }

  /**
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to publish a report
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_Publish.html
   */
  public toPublish() {
    return this.to('Publish');
  }

  /**
   * Grants permission to start a query for retrieving top contributors data for a monitor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_StartQueryMonitorTopContributors.html
   */
  public toStartQueryMonitorTopContributors() {
    return this.to('StartQueryMonitorTopContributors');
  }

  /**
   * Grants permission to start a query for retrieving top contributors data for workload insights
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_StartQueryWorkloadInsightsTopContributors.html
   */
  public toStartQueryWorkloadInsightsTopContributors() {
    return this.to('StartQueryWorkloadInsightsTopContributors');
  }

  /**
   * Grants permission to start a query for retrieving top contributors data points for workload insights
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_StartQueryWorkloadInsightsTopContributorsData.html
   */
  public toStartQueryWorkloadInsightsTopContributorsData() {
    return this.to('StartQueryWorkloadInsightsTopContributorsData');
  }

  /**
   * Grants permission to stop a query for retrieving top contributors data for a monitor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_StopQueryMonitorTopContributors.html
   */
  public toStopQueryMonitorTopContributors() {
    return this.to('StopQueryMonitorTopContributors');
  }

  /**
   * Grants permission to stop a query for retrieving top contributors for workload insights
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_StopQueryWorkloadInsightsTopContributors.html
   */
  public toStopQueryWorkloadInsightsTopContributors() {
    return this.to('StopQueryWorkloadInsightsTopContributors');
  }

  /**
   * Grants permission to stop a query for retrieving top contributors data points for workload insights
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_StopQueryWorkloadInsightsTopContributorsData.html
   */
  public toStopQueryWorkloadInsightsTopContributorsData() {
    return this.to('StopQueryWorkloadInsightsTopContributorsData');
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
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_TagResource.html
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
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a monitor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_UpdateMonitor.html
   */
  public toUpdateMonitor() {
    return this.to('UpdateMonitor');
  }

  /**
   * Grants permission to update a scope
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_UpdateScope.html
   */
  public toUpdateScope() {
    return this.to('UpdateScope');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateMonitor',
      'CreateScope',
      'DeleteMonitor',
      'DeleteScope',
      'Publish',
      'StartQueryMonitorTopContributors',
      'StartQueryWorkloadInsightsTopContributors',
      'StartQueryWorkloadInsightsTopContributorsData',
      'StopQueryMonitorTopContributors',
      'StopQueryWorkloadInsightsTopContributors',
      'StopQueryWorkloadInsightsTopContributorsData',
      'UpdateMonitor',
      'UpdateScope'
    ],
    Read: [
      'GetMonitor',
      'GetQueryResultsMonitorTopContributors',
      'GetQueryResultsWorkloadInsightsTopContributors',
      'GetQueryResultsWorkloadInsightsTopContributorsData',
      'GetQueryStatusMonitorTopContributors',
      'GetQueryStatusWorkloadInsightsTopContributors',
      'GetQueryStatusWorkloadInsightsTopContributorsData',
      'GetScope',
      'ListTagsForResource'
    ],
    List: [
      'ListMonitors',
      'ListScopes'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type monitor to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-NetworkFlowMonitor-configure-monitors.html
   *
   * @param monitorName - Identifier for the monitorName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMonitor(monitorName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:networkflowmonitor:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:monitor/${ monitorName }`);
  }

  /**
   * Adds a resource of type scope to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-NetworkFlowMonitor-organizations.html
   *
   * @param scopeId - Identifier for the scopeId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onScope(scopeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:networkflowmonitor:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:scope/${ scopeId }`);
  }

  /**
   * Filters access by the tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateMonitor()
   * - .toCreateScope()
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
   * Filters access by the tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - monitor
   * - scope
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateMonitor()
   * - .toCreateScope()
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
