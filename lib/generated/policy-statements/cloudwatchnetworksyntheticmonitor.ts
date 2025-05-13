import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [networkmonitor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchnetworksyntheticmonitor.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Networkmonitor extends PolicyStatement {
  public servicePrefix = 'networkmonitor';

  /**
   * Statement provider for service [networkmonitor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchnetworksyntheticmonitor.html).
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
   * https://docs.aws.amazon.com/networkmonitor/latest/APIReference/API_CreateMonitor.html
   */
  public toCreateMonitor() {
    return this.to('CreateMonitor');
  }

  /**
   * Grants permission to create a probe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmonitor/latest/APIReference/API_CreateProbe.html
   */
  public toCreateProbe() {
    return this.to('CreateProbe');
  }

  /**
   * Grants permission to delete a monitor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmonitor/latest/APIReference/API_DeleteMonitor.html
   */
  public toDeleteMonitor() {
    return this.to('DeleteMonitor');
  }

  /**
   * Grants permission to delete a probe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmonitor/latest/APIReference/API_DeleteProbe.html
   */
  public toDeleteProbe() {
    return this.to('DeleteProbe');
  }

  /**
   * Grants permission to get information about a monitor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmonitor/latest/APIReference/API_GetMonitor.html
   */
  public toGetMonitor() {
    return this.to('GetMonitor');
  }

  /**
   * Grants permission to get information about a probe
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmonitor/latest/APIReference/API_GetProbe.html
   */
  public toGetProbe() {
    return this.to('GetProbe');
  }

  /**
   * Grants permission to list all monitors in an account and their statuses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmonitor/latest/APIReference/API_ListMonitors.html
   */
  public toListMonitors() {
    return this.to('ListMonitors');
  }

  /**
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmonitor/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/networkmonitor/latest/APIReference/API_TagResource.html
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
   * https://docs.aws.amazon.com/networkmonitor/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a monitor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmonitor/latest/APIReference/API_UpdateMonitor.html
   */
  public toUpdateMonitor() {
    return this.to('UpdateMonitor');
  }

  /**
   * Grants permission to update a probe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmonitor/latest/APIReference/API_UpdateProbe.html
   */
  public toUpdateProbe() {
    return this.to('UpdateProbe');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateMonitor',
      'CreateProbe',
      'DeleteMonitor',
      'DeleteProbe',
      'UpdateMonitor',
      'UpdateProbe'
    ],
    Read: [
      'GetMonitor',
      'GetProbe',
      'ListTagsForResource'
    ],
    List: [
      'ListMonitors'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type monitor to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/nw-monitor-working-with.html
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:networkmonitor:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:monitor/${ monitorName }`);
  }

  /**
   * Adds a resource of type probe to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/nw-monitor-working-with.html
   *
   * @param probeId - Identifier for the probeId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProbe(probeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:networkmonitor:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:probe/${ probeId }`);
  }

  /**
   * Filters access by the tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
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
   * - probe
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
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
