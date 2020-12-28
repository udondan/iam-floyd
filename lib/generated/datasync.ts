import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [datasync](https://docs.aws.amazon.com/service-authorization/latest/reference/list_datasync.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Datasync extends PolicyStatement {
  public servicePrefix = 'datasync';

  /**
   * Statement provider for service [datasync](https://docs.aws.amazon.com/service-authorization/latest/reference/list_datasync.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Cancels execution of a sync task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CancelTaskExecution.html
   */
  public toCancelTaskExecution() {
    return this.to('CancelTaskExecution');
  }

  /**
   * Activates an agent that you have deployed on your host.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html
   */
  public toCreateAgent() {
    return this.to('CreateAgent');
  }

  /**
   * Creates an endpoint for an Amazon EFS file system.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationEfs.html
   */
  public toCreateLocationEfs() {
    return this.to('CreateLocationEfs');
  }

  /**
   * Creates an endpoint for an Amazon FSx Windows File Server file system.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxWindows.html
   */
  public toCreateLocationFsxWindows() {
    return this.to('CreateLocationFsxWindows');
  }

  /**
   * Creates an endpoint for a NFS file system.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationNfs.html
   */
  public toCreateLocationNfs() {
    return this.to('CreateLocationNfs');
  }

  /**
   * Creates an endpoint for a self-managed object storage bucket.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationObjectStorage.html
   */
  public toCreateLocationObjectStorage() {
    return this.to('CreateLocationObjectStorage');
  }

  /**
   * Creates an endpoint for an Amazon S3 bucket.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationS3.html
   */
  public toCreateLocationS3() {
    return this.to('CreateLocationS3');
  }

  /**
   * Creates an endpoint for an SMB file system.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationSmb.html
   */
  public toCreateLocationSmb() {
    return this.to('CreateLocationSmb');
  }

  /**
   * Creates a sync task.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateTask.html
   */
  public toCreateTask() {
    return this.to('CreateTask');
  }

  /**
   * Deletes an agent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteAgent.html
   */
  public toDeleteAgent() {
    return this.to('DeleteAgent');
  }

  /**
   * Deletes the configuration of a location used by AWS DataSync.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteLocation.html
   */
  public toDeleteLocation() {
    return this.to('DeleteLocation');
  }

  /**
   * Deletes a sync task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteTask.html
   */
  public toDeleteTask() {
    return this.to('DeleteTask');
  }

  /**
   * Returns metadata such as name, network interfaces, and the status (that is, whether the agent is running or not) about a sync agent.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html
   */
  public toDescribeAgent() {
    return this.to('DescribeAgent');
  }

  /**
   * Returns metadata, such as the path information about an Amazon EFS sync location.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationEfs.html
   */
  public toDescribeLocationEfs() {
    return this.to('DescribeLocationEfs');
  }

  /**
   * Returns metadata, such as the path information about an Amazon FSx Windows sync location.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationFsxWindows.html
   */
  public toDescribeLocationFsxWindows() {
    return this.to('DescribeLocationFsxWindows');
  }

  /**
   * Returns metadata, such as the path information, about a NFS sync location.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationNfs.html
   */
  public toDescribeLocationNfs() {
    return this.to('DescribeLocationNfs');
  }

  /**
   * Returns metadata about a self-managed object storage server location.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationObjectStorage.html
   */
  public toDescribeLocationObjectStorage() {
    return this.to('DescribeLocationObjectStorage');
  }

  /**
   * Returns metadata, such as bucket name, about an Amazon S3 bucket sync location.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationS3.html
   */
  public toDescribeLocationS3() {
    return this.to('DescribeLocationS3');
  }

  /**
   * Returns metadata, such as the path information, about an SMB sync location.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationSmb.html
   */
  public toDescribeLocationSmb() {
    return this.to('DescribeLocationSmb');
  }

  /**
   * Returns metadata about a sync task.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeTask.html
   */
  public toDescribeTask() {
    return this.to('DescribeTask');
  }

  /**
   * Returns detailed metadata about a sync task that is being executed.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeTaskExecution.html
   */
  public toDescribeTaskExecution() {
    return this.to('DescribeTaskExecution');
  }

  /**
   * Returns a list of agents owned by an AWS account in a region specified in the request.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html
   */
  public toListAgents() {
    return this.to('ListAgents');
  }

  /**
   * Returns a lists of source and destination sync locations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html
   */
  public toListLocations() {
    return this.to('ListLocations');
  }

  /**
   * This operation lists the tags that have been added to the specified resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Returns a list of executed sync tasks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html
   */
  public toListTaskExecutions() {
    return this.to('ListTaskExecutions');
  }

  /**
   * Returns a list of all the sync tasks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html
   */
  public toListTasks() {
    return this.to('ListTasks');
  }

  /**
   * Starts a specific invocation of a sync task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html
   */
  public toStartTaskExecution() {
    return this.to('StartTaskExecution');
  }

  /**
   * Applies a key-value pair to an AWS resource.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * This operation removes one or more tags from the specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Updates the name of an agent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateAgent.html
   */
  public toUpdateAgent() {
    return this.to('UpdateAgent');
  }

  /**
   * Updates the metadata associated with a sync task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateTask.html
   */
  public toUpdateTask() {
    return this.to('UpdateTask');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelTaskExecution",
      "CreateAgent",
      "CreateLocationEfs",
      "CreateLocationFsxWindows",
      "CreateLocationNfs",
      "CreateLocationObjectStorage",
      "CreateLocationS3",
      "CreateLocationSmb",
      "CreateTask",
      "DeleteAgent",
      "DeleteLocation",
      "DeleteTask",
      "StartTaskExecution",
      "TagResource",
      "UpdateAgent",
      "UpdateTask"
    ],
    "Read": [
      "DescribeAgent",
      "DescribeLocationEfs",
      "DescribeLocationFsxWindows",
      "DescribeLocationNfs",
      "DescribeLocationObjectStorage",
      "DescribeLocationS3",
      "DescribeLocationSmb",
      "DescribeTask",
      "DescribeTaskExecution",
      "ListTagsForResource"
    ],
    "List": [
      "ListAgents",
      "ListLocations",
      "ListTaskExecutions",
      "ListTasks"
    ],
    "Tagging": [
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type agent to the statement
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/agent.html
   *
   * @param agentId - Identifier for the agentId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAgent(agentId: string, accountId?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:datasync:${Region}:${AccountId}:agent/${AgentId}';
    arn = arn.replace('${AgentId}', agentId);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type location to the statement
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/location.html
   *
   * @param locationId - Identifier for the locationId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLocation(locationId: string, accountId?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:datasync:${Region}:${AccountId}:location/${LocationId}';
    arn = arn.replace('${LocationId}', locationId);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type task to the statement
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/task.html
   *
   * @param taskId - Identifier for the taskId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTask(taskId: string, accountId?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:datasync:${Region}:${AccountId}:task/${TaskId}';
    arn = arn.replace('${TaskId}', taskId);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type taskexecution to the statement
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/taskexecution.html
   *
   * @param taskId - Identifier for the taskId.
   * @param executionId - Identifier for the executionId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTaskexecution(taskId: string, executionId: string, accountId?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:datasync:${Region}:${AccountId}:task/${TaskId}/execution/${ExecutionId}';
    arn = arn.replace('${TaskId}', taskId);
    arn = arn.replace('${ExecutionId}', executionId);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
