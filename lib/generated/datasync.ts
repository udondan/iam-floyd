import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [datasync](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatasync.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Datasync extends PolicyStatement {
  public servicePrefix = 'datasync';

  /**
   * Statement provider for service [datasync](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatasync.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel execution of a sync task
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CancelTaskExecution.html
   */
  public toCancelTaskExecution() {
    return this.to('CancelTaskExecution');
  }

  /**
   * Grants permission to activate an agent that you have deployed on your host
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
   * Grants permission to create an endpoint for an Amazon EFS file system
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
   * Grants permission to create an endpoint for an Amazon Fsx Lustre
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxLustre.html
   */
  public toCreateLocationFsxLustre() {
    return this.to('CreateLocationFsxLustre');
  }

  /**
   * Grants permission to create an endpoint for Amazon FSx for ONTAP
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxOntap.html
   */
  public toCreateLocationFsxOntap() {
    return this.to('CreateLocationFsxOntap');
  }

  /**
   * Grants permission to create an endpoint for Amazon FSx for OpenZFS
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxOpenZfs.html
   */
  public toCreateLocationFsxOpenZfs() {
    return this.to('CreateLocationFsxOpenZfs');
  }

  /**
   * Grants permission to create an endpoint for an Amazon FSx Windows File Server file system
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
   * Grants permission to create an endpoint for an Amazon Hdfs
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationHdfs.html
   */
  public toCreateLocationHdfs() {
    return this.to('CreateLocationHdfs');
  }

  /**
   * Grants permission to create an endpoint for a NFS file system
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
   * Grants permission to create an endpoint for a self-managed object storage bucket
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
   * Grants permission to create an endpoint for an Amazon S3 bucket
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
   * Grants permission to create an endpoint for an SMB file system
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
   * Grants permission to create a sync task
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
   * Grants permission to delete an agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteAgent.html
   */
  public toDeleteAgent() {
    return this.to('DeleteAgent');
  }

  /**
   * Grants permission to delete a location used by AWS DataSync
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteLocation.html
   */
  public toDeleteLocation() {
    return this.to('DeleteLocation');
  }

  /**
   * Grants permission to delete a sync task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteTask.html
   */
  public toDeleteTask() {
    return this.to('DeleteTask');
  }

  /**
   * Grants permission to view metadata such as name, network interfaces, and the status (that is, whether the agent is running or not) about a sync agent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html
   */
  public toDescribeAgent() {
    return this.to('DescribeAgent');
  }

  /**
   * Grants permission to view metadata, such as the path information about an Amazon EFS sync location
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationEfs.html
   */
  public toDescribeLocationEfs() {
    return this.to('DescribeLocationEfs');
  }

  /**
   * Grants permission to view metadata, such as the path information about an Amazon FSx Lustre sync location
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationFsxLustre.html
   */
  public toDescribeLocationFsxLustre() {
    return this.to('DescribeLocationFsxLustre');
  }

  /**
   * Grants permission to view metadata, such as the path information about an Amazon FSx for ONTAP sync location
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationFsxOntap.html
   */
  public toDescribeLocationFsxOntap() {
    return this.to('DescribeLocationFsxOntap');
  }

  /**
   * Grants permission to view metadata, such as the path information about an Amazon FSx OpenZFS sync location
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationFsxOpenZfs.html
   */
  public toDescribeLocationFsxOpenZfs() {
    return this.to('DescribeLocationFsxOpenZfs');
  }

  /**
   * Grants permission to view metadata, such as the path information about an Amazon FSx Windows sync location
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationFsxWindows.html
   */
  public toDescribeLocationFsxWindows() {
    return this.to('DescribeLocationFsxWindows');
  }

  /**
   * Grants permission to view metadata, such as the path information about an Amazon HDFS sync location
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationHdfs.html
   */
  public toDescribeLocationHdfs() {
    return this.to('DescribeLocationHdfs');
  }

  /**
   * Grants permission to view metadata, such as the path information, about a NFS sync location
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationNfs.html
   */
  public toDescribeLocationNfs() {
    return this.to('DescribeLocationNfs');
  }

  /**
   * Grants permission to view metadata about a self-managed object storage server location
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationObjectStorage.html
   */
  public toDescribeLocationObjectStorage() {
    return this.to('DescribeLocationObjectStorage');
  }

  /**
   * Grants permission to view metadata, such as bucket name, about an Amazon S3 bucket sync location
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationS3.html
   */
  public toDescribeLocationS3() {
    return this.to('DescribeLocationS3');
  }

  /**
   * Grants permission to view metadata, such as the path information, about an SMB sync location
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationSmb.html
   */
  public toDescribeLocationSmb() {
    return this.to('DescribeLocationSmb');
  }

  /**
   * Grants permission to view metadata about a sync task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeTask.html
   */
  public toDescribeTask() {
    return this.to('DescribeTask');
  }

  /**
   * Grants permission to view metadata about a sync task that is being executed
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeTaskExecution.html
   */
  public toDescribeTaskExecution() {
    return this.to('DescribeTaskExecution');
  }

  /**
   * Grants permission to list agents owned by an AWS account in a region specified in the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html
   */
  public toListAgents() {
    return this.to('ListAgents');
  }

  /**
   * Grants permission to list source and destination sync locations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html
   */
  public toListLocations() {
    return this.to('ListLocations');
  }

  /**
   * Grants permission to list tags that have been added to the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list executed sync tasks
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html
   */
  public toListTaskExecutions() {
    return this.to('ListTaskExecutions');
  }

  /**
   * Grants permission to list of all the sync tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html
   */
  public toListTasks() {
    return this.to('ListTasks');
  }

  /**
   * Grants permission to start a specific invocation of a sync task
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html
   */
  public toStartTaskExecution() {
    return this.to('StartTaskExecution');
  }

  /**
   * Grants permission to apply a key-value pair to an AWS resource
   *
   * Access Level: Tagging
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
   * Grants permission to remove one or more tags from the specified resource
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
   * Grants permission to update the name of an agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateAgent.html
   */
  public toUpdateAgent() {
    return this.to('UpdateAgent');
  }

  /**
   * Grants permission to update an HDFS sync Location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationHdfs.html
   */
  public toUpdateLocationHdfs() {
    return this.to('UpdateLocationHdfs');
  }

  /**
   * Grants permission to update an NFS sync Location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationNfs.html
   */
  public toUpdateLocationNfs() {
    return this.to('UpdateLocationNfs');
  }

  /**
   * Grants permission to update a self-managed object storage server location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationObjectStorage.html
   */
  public toUpdateLocationObjectStorage() {
    return this.to('UpdateLocationObjectStorage');
  }

  /**
   * Grants permission to update a SMB sync location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationSmb.html
   */
  public toUpdateLocationSmb() {
    return this.to('UpdateLocationSmb');
  }

  /**
   * Grants permission to update metadata associated with a sync task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateTask.html
   */
  public toUpdateTask() {
    return this.to('UpdateTask');
  }

  /**
   * Grants permission to update execution of a sync task
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateTaskExecution.html
   */
  public toUpdateTaskExecution() {
    return this.to('UpdateTaskExecution');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelTaskExecution',
      'CreateAgent',
      'CreateLocationEfs',
      'CreateLocationFsxLustre',
      'CreateLocationFsxOntap',
      'CreateLocationFsxOpenZfs',
      'CreateLocationFsxWindows',
      'CreateLocationHdfs',
      'CreateLocationNfs',
      'CreateLocationObjectStorage',
      'CreateLocationS3',
      'CreateLocationSmb',
      'CreateTask',
      'DeleteAgent',
      'DeleteLocation',
      'DeleteTask',
      'StartTaskExecution',
      'UpdateAgent',
      'UpdateLocationHdfs',
      'UpdateLocationNfs',
      'UpdateLocationObjectStorage',
      'UpdateLocationSmb',
      'UpdateTask',
      'UpdateTaskExecution'
    ],
    Read: [
      'DescribeAgent',
      'DescribeLocationEfs',
      'DescribeLocationFsxLustre',
      'DescribeLocationFsxOntap',
      'DescribeLocationFsxOpenZfs',
      'DescribeLocationFsxWindows',
      'DescribeLocationHdfs',
      'DescribeLocationNfs',
      'DescribeLocationObjectStorage',
      'DescribeLocationS3',
      'DescribeLocationSmb',
      'DescribeTask',
      'DescribeTaskExecution',
      'ListTagsForResource'
    ],
    List: [
      'ListAgents',
      'ListLocations',
      'ListTaskExecutions',
      'ListTasks'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type agent to the statement
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/working-with-agents.html
   *
   * @param agentId - Identifier for the agentId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAgent(agentId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Datasync.defaultPartition }:datasync:${ region || '*' }:${ accountId || '*' }:agent/${ agentId }`);
  }

  /**
   * Adds a resource of type location to the statement
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/working-with-locations.html
   *
   * @param locationId - Identifier for the locationId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLocation(locationId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Datasync.defaultPartition }:datasync:${ region || '*' }:${ accountId || '*' }:location/${ locationId }`);
  }

  /**
   * Adds a resource of type task to the statement
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/working-with-tasks.html
   *
   * @param taskId - Identifier for the taskId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTask(taskId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Datasync.defaultPartition }:datasync:${ region || '*' }:${ accountId || '*' }:task/${ taskId }`);
  }

  /**
   * Adds a resource of type taskexecution to the statement
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html
   *
   * @param taskId - Identifier for the taskId.
   * @param executionId - Identifier for the executionId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTaskexecution(taskId: string, executionId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Datasync.defaultPartition }:datasync:${ region || '*' }:${ accountId || '*' }:task/${ taskId }/execution/${ executionId }`);
  }
}
