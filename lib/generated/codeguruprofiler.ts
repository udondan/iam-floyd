import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [codeguru-profiler](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodeguruprofiler.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CodeguruProfiler extends PolicyStatement {
  public servicePrefix = 'codeguru-profiler';

  /**
   * Statement provider for service [codeguru-profiler](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodeguruprofiler.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add up to 2 topic ARNs of existing AWS SNS topics to publish notifications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AddNotificationChannels.html
   */
  public toAddNotificationChannels() {
    return this.to('AddNotificationChannels');
  }

  /**
   * Grants permission to get the frame metric data for a Profiling Group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_BatchGetFrameMetricData.html
   */
  public toBatchGetFrameMetricData() {
    return this.to('BatchGetFrameMetricData');
  }

  /**
   * Grants permission to register with the orchestration service and retrieve profiling configuration information, used by agents
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html
   */
  public toConfigureAgent() {
    return this.to('ConfigureAgent');
  }

  /**
   * Grants permission to create a profiling group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_CreateProfilingGroup.html
   */
  public toCreateProfilingGroup() {
    return this.to('CreateProfilingGroup');
  }

  /**
   * Grants permission to delete a profiling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DeleteProfilingGroup.html
   */
  public toDeleteProfilingGroup() {
    return this.to('DeleteProfilingGroup');
  }

  /**
   * Grants permission to describe a profiling group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DescribeProfilingGroup.html
   */
  public toDescribeProfilingGroup() {
    return this.to('DescribeProfilingGroup');
  }

  /**
   * Grants permission to get a summary of recent recommendations for each profiling group in the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetFindingsReportAccountSummary.html
   */
  public toGetFindingsReportAccountSummary() {
    return this.to('GetFindingsReportAccountSummary');
  }

  /**
   * Grants permission to get the notification configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetNotificationConfiguration.html
   */
  public toGetNotificationConfiguration() {
    return this.to('GetNotificationConfiguration');
  }

  /**
   * Grants permission to get the resource policy associated with the specified Profiling Group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetPolicy.html
   */
  public toGetPolicy() {
    return this.to('GetPolicy');
  }

  /**
   * Grants permission to get aggregated profiles for a specific profiling group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html
   */
  public toGetProfile() {
    return this.to('GetProfile');
  }

  /**
   * Grants permission to get recommendations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetRecommendations.html
   */
  public toGetRecommendations() {
    return this.to('GetRecommendations');
  }

  /**
   * Grants permission to list the available recommendations reports for a specific profiling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListFindingsReports.html
   */
  public toListFindingsReports() {
    return this.to('ListFindingsReports');
  }

  /**
   * Grants permission to list the start times of the available aggregated profiles for a specific profiling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html
   */
  public toListProfileTimes() {
    return this.to('ListProfileTimes');
  }

  /**
   * Grants permission to list profiling groups in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfilingGroups.html
   */
  public toListProfilingGroups() {
    return this.to('ListProfilingGroups');
  }

  /**
   * Grants permission to list tags for a Profiling Group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to submit a profile collected by an agent belonging to a specific profiling group for aggregation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html
   */
  public toPostAgentProfile() {
    return this.to('PostAgentProfile');
  }

  /**
   * Grants permission to update the list of principals allowed for an action group in the resource policy associated with the specified Profiling Group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PutPermission.html
   */
  public toPutPermission() {
    return this.to('PutPermission');
  }

  /**
   * Grants permission to delete an already configured SNStopic arn from the notification configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_RemoveNotificationChannel.html
   */
  public toRemoveNotificationChannel() {
    return this.to('RemoveNotificationChannel');
  }

  /**
   * Grants permission to remove the permission of specified Action Group from the resource policy associated with the specified Profiling Group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_RemovePermission.html
   */
  public toRemovePermission() {
    return this.to('RemovePermission');
  }

  /**
   * Grants permission to submit user feedback for useful or non useful anomaly
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_SubmitFeedback.html
   */
  public toSubmitFeedback() {
    return this.to('SubmitFeedback');
  }

  /**
   * Grants permission to add or overwrite tags to a Profiling Group
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a Profiling Group
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a specific profiling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_UpdateProfilingGroup.html
   */
  public toUpdateProfilingGroup() {
    return this.to('UpdateProfilingGroup');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddNotificationChannels',
      'ConfigureAgent',
      'CreateProfilingGroup',
      'DeleteProfilingGroup',
      'PostAgentProfile',
      'RemoveNotificationChannel',
      'SubmitFeedback',
      'UpdateProfilingGroup'
    ],
    List: [
      'BatchGetFrameMetricData',
      'ListFindingsReports',
      'ListProfileTimes',
      'ListProfilingGroups',
      'ListTagsForResource'
    ],
    Read: [
      'DescribeProfilingGroup',
      'GetFindingsReportAccountSummary',
      'GetNotificationConfiguration',
      'GetPolicy',
      'GetProfile',
      'GetRecommendations'
    ],
    'Permissions management': [
      'PutPermission',
      'RemovePermission'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type ProfilingGroup to the statement
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-ug/working-with-profiling-groups.html
   *
   * @param profilingGroupName - Identifier for the profilingGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProfilingGroup(profilingGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || CodeguruProfiler.defaultPartition }:codeguru-profiler:${ region || '*' }:${ account || '*' }:profilingGroup/${ profilingGroupName }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateProfilingGroup()
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
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - ProfilingGroup
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateProfilingGroup()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
