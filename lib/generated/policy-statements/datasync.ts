import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to create a storage system
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_AddStorageSystem.html
   */
  public toAddStorageSystem() {
    return this.to('AddStorageSystem');
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
   * Grants permission to create an endpoint for a Microsoft Azure Blob Storage container
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationAzureBlob.html
   */
  public toCreateLocationAzureBlob() {
    return this.to('CreateLocationAzureBlob');
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
   * Grants permission to describe metadata about a discovery job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeDiscoveryJob.html
   */
  public toDescribeDiscoveryJob() {
    return this.to('DescribeDiscoveryJob');
  }

  /**
   * Grants permission to view metadata, such as the path information about an Azure Blob Storage sync location
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationAzureBlob.html
   */
  public toDescribeLocationAzureBlob() {
    return this.to('DescribeLocationAzureBlob');
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
   * Grants permission to view metadata about a storage system
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystem.html
   */
  public toDescribeStorageSystem() {
    return this.to('DescribeStorageSystem');
  }

  /**
   * Grants permission to describe resource metrics collected by a discovery job
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystemResourceMetrics.html
   */
  public toDescribeStorageSystemResourceMetrics() {
    return this.to('DescribeStorageSystemResourceMetrics');
  }

  /**
   * Grants permission to describe resources identified by a discovery job
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystemResources.html
   */
  public toDescribeStorageSystemResources() {
    return this.to('DescribeStorageSystemResources');
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
   * Grants permission to generate recommendations for a resource identified by a discovery job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_GenerateRecommendations.html
   */
  public toGenerateRecommendations() {
    return this.to('GenerateRecommendations');
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
   * Grants permission to list discovery jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListDiscoveryJobs.html
   */
  public toListDiscoveryJobs() {
    return this.to('ListDiscoveryJobs');
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
   * Grants permission to list storage systems
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_ListStorageSystems.html
   */
  public toListStorageSystems() {
    return this.to('ListStorageSystems');
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
   * Grants permission to delete a storage system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_RemoveStorageSystem.html
   */
  public toRemoveStorageSystem() {
    return this.to('RemoveStorageSystem');
  }

  /**
   * Grants permission to start a discovery job for a storage system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_StartDiscoveryJob.html
   */
  public toStartDiscoveryJob() {
    return this.to('StartDiscoveryJob');
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
   * Grants permission to stop a discovery job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_StopDiscoveryJob.html
   */
  public toStopDiscoveryJob() {
    return this.to('StopDiscoveryJob');
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
   * Grants permission to update a discovery job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateDiscoveryJob.html
   */
  public toUpdateDiscoveryJob() {
    return this.to('UpdateDiscoveryJob');
  }

  /**
   * Grants permission to update an Azure Blob Storage sync location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationAzureBlob.html
   */
  public toUpdateLocationAzureBlob() {
    return this.to('UpdateLocationAzureBlob');
  }

  /**
   * Grants permission to update an EFS sync Location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationEfs.html
   */
  public toUpdateLocationEfs() {
    return this.to('UpdateLocationEfs');
  }

  /**
   * Grants permission to update an FSx Lustre sync Location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationFsxLustre.html
   */
  public toUpdateLocationFsxLustre() {
    return this.to('UpdateLocationFsxLustre');
  }

  /**
   * Grants permission to update an FSx ONTAP sync Location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationFsxOntap.html
   */
  public toUpdateLocationFsxOntap() {
    return this.to('UpdateLocationFsxOntap');
  }

  /**
   * Grants permission to update an FSx OpenZFS sync Location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationFsxOpenZfs.html
   */
  public toUpdateLocationFsxOpenZfs() {
    return this.to('UpdateLocationFsxOpenZfs');
  }

  /**
   * Grants permission to update an FSx Windows sync Location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationFsxWindows.html
   */
  public toUpdateLocationFsxWindows() {
    return this.to('UpdateLocationFsxWindows');
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
   * Grants permission to update an S3 sync Location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationS3.html
   */
  public toUpdateLocationS3() {
    return this.to('UpdateLocationS3');
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
   * Grants permission to update a storage system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateStorageSystem.html
   */
  public toUpdateStorageSystem() {
    return this.to('UpdateStorageSystem');
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
      'AddStorageSystem',
      'CancelTaskExecution',
      'CreateAgent',
      'CreateLocationAzureBlob',
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
      'GenerateRecommendations',
      'RemoveStorageSystem',
      'StartDiscoveryJob',
      'StartTaskExecution',
      'StopDiscoveryJob',
      'UpdateAgent',
      'UpdateDiscoveryJob',
      'UpdateLocationAzureBlob',
      'UpdateLocationEfs',
      'UpdateLocationFsxLustre',
      'UpdateLocationFsxOntap',
      'UpdateLocationFsxOpenZfs',
      'UpdateLocationFsxWindows',
      'UpdateLocationHdfs',
      'UpdateLocationNfs',
      'UpdateLocationObjectStorage',
      'UpdateLocationS3',
      'UpdateLocationSmb',
      'UpdateStorageSystem',
      'UpdateTask',
      'UpdateTaskExecution'
    ],
    Read: [
      'DescribeAgent',
      'DescribeDiscoveryJob',
      'DescribeLocationAzureBlob',
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
      'DescribeStorageSystem',
      'DescribeTask',
      'DescribeTaskExecution',
      'ListTagsForResource'
    ],
    List: [
      'DescribeStorageSystemResourceMetrics',
      'DescribeStorageSystemResources',
      'ListAgents',
      'ListDiscoveryJobs',
      'ListLocations',
      'ListStorageSystems',
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
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAgent(agentId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:datasync:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:agent/${ agentId }`);
  }

  /**
   * Adds a resource of type location to the statement
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/working-with-locations.html
   *
   * @param locationId - Identifier for the locationId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLocation(locationId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:datasync:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:location/${ locationId }`);
  }

  /**
   * Adds a resource of type task to the statement
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/working-with-tasks.html
   *
   * @param taskId - Identifier for the taskId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTask(taskId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:datasync:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:task/${ taskId }`);
  }

  /**
   * Adds a resource of type taskexecution to the statement
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html
   *
   * @param taskId - Identifier for the taskId.
   * @param executionId - Identifier for the executionId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTaskexecution(taskId: string, executionId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:datasync:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:task/${ taskId }/execution/${ executionId }`);
  }

  /**
   * Adds a resource of type storagesystem to the statement
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/discovery-configure-storage.html
   *
   * @param storageSystemId - Identifier for the storageSystemId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStoragesystem(storageSystemId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:datasync:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:system/${ storageSystemId }`);
  }

  /**
   * Adds a resource of type discoveryjob to the statement
   *
   * https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-create.html
   *
   * @param storageSystemId - Identifier for the storageSystemId.
   * @param discoveryJobId - Identifier for the discoveryJobId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDiscoveryjob(storageSystemId: string, discoveryJobId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:datasync:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:system/${ storageSystemId }/job/${ discoveryJobId }`);
  }

  /**
   * Filters access by the tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAddStorageSystem()
   * - .toCreateAgent()
   * - .toCreateLocationAzureBlob()
   * - .toCreateLocationEfs()
   * - .toCreateLocationFsxLustre()
   * - .toCreateLocationFsxOntap()
   * - .toCreateLocationFsxOpenZfs()
   * - .toCreateLocationFsxWindows()
   * - .toCreateLocationHdfs()
   * - .toCreateLocationNfs()
   * - .toCreateLocationObjectStorage()
   * - .toCreateLocationS3()
   * - .toCreateLocationSmb()
   * - .toCreateTask()
   * - .toStartTaskExecution()
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
   * Filters access by the tag key-value pairs associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAddStorageSystem()
   * - .toCancelTaskExecution()
   * - .toDescribeTaskExecution()
   * - .toListTaskExecutions()
   * - .toStartTaskExecution()
   * - .toUpdateTaskExecution()
   *
   * Applies to resource types:
   * - agent
   * - location
   * - task
   * - taskexecution
   * - storagesystem
   * - discoveryjob
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
   * - .toAddStorageSystem()
   * - .toCreateAgent()
   * - .toCreateLocationAzureBlob()
   * - .toCreateLocationEfs()
   * - .toCreateLocationFsxLustre()
   * - .toCreateLocationFsxOntap()
   * - .toCreateLocationFsxOpenZfs()
   * - .toCreateLocationFsxWindows()
   * - .toCreateLocationHdfs()
   * - .toCreateLocationNfs()
   * - .toCreateLocationObjectStorage()
   * - .toCreateLocationS3()
   * - .toCreateLocationSmb()
   * - .toCreateTask()
   * - .toStartTaskExecution()
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
