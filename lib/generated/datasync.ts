import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [datasync](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_datasync.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Datasync extends PolicyStatement {
  public servicePrefix = 'datasync';

  /**
   * Statement provider for service [datasync](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_datasync.html).
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
    this.to('datasync:CancelTaskExecution');
    return this;
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
    this.to('datasync:CreateAgent');
    return this;
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
    this.to('datasync:CreateLocationEfs');
    return this;
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
    this.to('datasync:CreateLocationFsxWindows');
    return this;
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
    this.to('datasync:CreateLocationNfs');
    return this;
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
    this.to('datasync:CreateLocationObjectStorage');
    return this;
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
    this.to('datasync:CreateLocationS3');
    return this;
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
    this.to('datasync:CreateLocationSmb');
    return this;
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
    this.to('datasync:CreateTask');
    return this;
  }

  /**
   * Deletes an agent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteAgent.html
   */
  public toDeleteAgent() {
    this.to('datasync:DeleteAgent');
    return this;
  }

  /**
   * Deletes the configuration of a location used by AWS DataSync.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteLocation.html
   */
  public toDeleteLocation() {
    this.to('datasync:DeleteLocation');
    return this;
  }

  /**
   * Deletes a sync task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteTask.html
   */
  public toDeleteTask() {
    this.to('datasync:DeleteTask');
    return this;
  }

  /**
   * Returns metadata such as name, network interfaces, and the status (that is, whether the agent is running or not) about a sync agent.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html
   */
  public toDescribeAgent() {
    this.to('datasync:DescribeAgent');
    return this;
  }

  /**
   * Returns metadata, such as the path information about an Amazon EFS sync location.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationEfs.html
   */
  public toDescribeLocationEfs() {
    this.to('datasync:DescribeLocationEfs');
    return this;
  }

  /**
   * Returns metadata, such as the path information about an Amazon FSx Windows sync location.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationFsxWindows.html
   */
  public toDescribeLocationFsxWindows() {
    this.to('datasync:DescribeLocationFsxWindows');
    return this;
  }

  /**
   * Returns metadata, such as the path information, about a NFS sync location.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationNfs.html
   */
  public toDescribeLocationNfs() {
    this.to('datasync:DescribeLocationNfs');
    return this;
  }

  /**
   * Returns metadata about a self-managed object storage server location.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationObjectStorage.html
   */
  public toDescribeLocationObjectStorage() {
    this.to('datasync:DescribeLocationObjectStorage');
    return this;
  }

  /**
   * Returns metadata, such as bucket name, about an Amazon S3 bucket sync location.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationS3.html
   */
  public toDescribeLocationS3() {
    this.to('datasync:DescribeLocationS3');
    return this;
  }

  /**
   * Returns metadata, such as the path information, about an SMB sync location.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationSmb.html
   */
  public toDescribeLocationSmb() {
    this.to('datasync:DescribeLocationSmb');
    return this;
  }

  /**
   * Returns metadata about a sync task.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeTask.html
   */
  public toDescribeTask() {
    this.to('datasync:DescribeTask');
    return this;
  }

  /**
   * Returns detailed metadata about a sync task that is being executed.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeTaskExecution.html
   */
  public toDescribeTaskExecution() {
    this.to('datasync:DescribeTaskExecution');
    return this;
  }

  /**
   * Returns a list of agents owned by an AWS account in a region specified in the request.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html
   */
  public toListAgents() {
    this.to('datasync:ListAgents');
    return this;
  }

  /**
   * Returns a lists of source and destination sync locations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html
   */
  public toListLocations() {
    this.to('datasync:ListLocations');
    return this;
  }

  /**
   * This operation lists the tags that have been added to the specified resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('datasync:ListTagsForResource');
    return this;
  }

  /**
   * Returns a list of executed sync tasks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html
   */
  public toListTaskExecutions() {
    this.to('datasync:ListTaskExecutions');
    return this;
  }

  /**
   * Returns a list of all the sync tasks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html
   */
  public toListTasks() {
    this.to('datasync:ListTasks');
    return this;
  }

  /**
   * Starts a specific invocation of a sync task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html
   */
  public toStartTaskExecution() {
    this.to('datasync:StartTaskExecution');
    return this;
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
    this.to('datasync:TagResource');
    return this;
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
    this.to('datasync:UntagResource');
    return this;
  }

  /**
   * Updates the name of an agent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateAgent.html
   */
  public toUpdateAgent() {
    this.to('datasync:UpdateAgent');
    return this;
  }

  /**
   * Updates the metadata associated with a sync task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateTask.html
   */
  public toUpdateTask() {
    this.to('datasync:UpdateTask');
    return this;
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
