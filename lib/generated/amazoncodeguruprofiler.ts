import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [codeguru-profiler](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodeguruprofiler.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CodeguruProfiler extends PolicyStatement {
  public servicePrefix = 'codeguru-profiler';

  /**
   * Statement provider for service [codeguru-profiler](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodeguruprofiler.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
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
    this.to('codeguru-profiler:AddNotificationChannels');
    return this;
  }

  /**
   * Grants permission to get the frame metric data for a Profiling Group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_BatchGetFrameMetricData.html
   */
  public toBatchGetFrameMetricData() {
    this.to('codeguru-profiler:BatchGetFrameMetricData');
    return this;
  }

  /**
   * Grants permission for an agent to register with the orchestration service and retrieve profiling configuration information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html
   */
  public toConfigureAgent() {
    this.to('codeguru-profiler:ConfigureAgent');
    return this;
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
    this.to('codeguru-profiler:CreateProfilingGroup');
    return this;
  }

  /**
   * Grants permission to delete a profiling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DeleteProfilingGroup.html
   */
  public toDeleteProfilingGroup() {
    this.to('codeguru-profiler:DeleteProfilingGroup');
    return this;
  }

  /**
   * Grants permission to describe a profiling group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DescribeProfilingGroup.html
   */
  public toDescribeProfilingGroup() {
    this.to('codeguru-profiler:DescribeProfilingGroup');
    return this;
  }

  /**
   * Grants permission to get a summary of recent recommendations for each profiling group in the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetFindingsReportAccountSummary.html
   */
  public toGetFindingsReportAccountSummary() {
    this.to('codeguru-profiler:GetFindingsReportAccountSummary');
    return this;
  }

  /**
   * Grants permission to get the notification configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetNotificationConfiguration.html
   */
  public toGetNotificationConfiguration() {
    this.to('codeguru-profiler:GetNotificationConfiguration');
    return this;
  }

  /**
   * Grants permission to get the resource policy associated with the specified Profiling Group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetPolicy.html
   */
  public toGetPolicy() {
    this.to('codeguru-profiler:GetPolicy');
    return this;
  }

  /**
   * Grants permission to get aggregated profiles for a specific profiling group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html
   */
  public toGetProfile() {
    this.to('codeguru-profiler:GetProfile');
    return this;
  }

  /**
   * Grants permission to get recommendations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetRecommendations.html
   */
  public toGetRecommendations() {
    this.to('codeguru-profiler:GetRecommendations');
    return this;
  }

  /**
   * Grants permission to list the available recommendations reports for a specific profiling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListFindingsReports.html
   */
  public toListFindingsReports() {
    this.to('codeguru-profiler:ListFindingsReports');
    return this;
  }

  /**
   * Grants permission to list the start times of the available aggregated profiles for a specific profiling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html
   */
  public toListProfileTimes() {
    this.to('codeguru-profiler:ListProfileTimes');
    return this;
  }

  /**
   * Grants permission to list profiling groups in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfilingGroups.html
   */
  public toListProfilingGroups() {
    this.to('codeguru-profiler:ListProfilingGroups');
    return this;
  }

  /**
   * Grants permission to list tags for a Profiling Group
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('codeguru-profiler:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to submit a profile collected by an agent belonging to a specific profiling group for aggregation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html
   */
  public toPostAgentProfile() {
    this.to('codeguru-profiler:PostAgentProfile');
    return this;
  }

  /**
   * Grants permission to update the list of principals allowed for an action group in the resource policy associated with the specified Profiling Group.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PutPermission.html
   */
  public toPutPermission() {
    this.to('codeguru-profiler:PutPermission');
    return this;
  }

  /**
   * Grants permission to delete an already configured SNStopic arn from the notification configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_RemoveNotificationChannel.html
   */
  public toRemoveNotificationChannel() {
    this.to('codeguru-profiler:RemoveNotificationChannel');
    return this;
  }

  /**
   * Grants permission to remove the permission of specified Action Group from the resource policy associated with the specified Profiling Group.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_RemovePermission.html
   */
  public toRemovePermission() {
    this.to('codeguru-profiler:RemovePermission');
    return this;
  }

  /**
   * Grants permission to submit user feedback for useful or non useful anomaly
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_SubmitFeedback.html
   */
  public toSubmitFeedback() {
    this.to('codeguru-profiler:SubmitFeedback');
    return this;
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
    this.to('codeguru-profiler:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from a Profiling Group
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('codeguru-profiler:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a specific profiling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_UpdateProfilingGroup.html
   */
  public toUpdateProfilingGroup() {
    this.to('codeguru-profiler:UpdateProfilingGroup');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddNotificationChannels",
      "ConfigureAgent",
      "CreateProfilingGroup",
      "DeleteProfilingGroup",
      "PostAgentProfile",
      "RemoveNotificationChannel",
      "SubmitFeedback",
      "UpdateProfilingGroup"
    ],
    "List": [
      "BatchGetFrameMetricData",
      "ListFindingsReports",
      "ListProfileTimes",
      "ListProfilingGroups"
    ],
    "Read": [
      "DescribeProfilingGroup",
      "GetFindingsReportAccountSummary",
      "GetNotificationConfiguration",
      "GetPolicy",
      "GetProfile",
      "GetRecommendations"
    ],
    "Tagging": [
      "ListTagsForResource",
      "TagResource",
      "UntagResource"
    ],
    "Permissions management": [
      "PutPermission",
      "RemovePermission"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProfilingGroup(profilingGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codeguru-profiler:${Region}:${Account}:profilingGroup/${ProfilingGroupName}';
    arn = arn.replace('${ProfilingGroupName}', profilingGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
