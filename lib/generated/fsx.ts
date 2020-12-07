import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [fsx](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfsx.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Fsx extends PolicyStatement {
  public servicePrefix = 'fsx';

  /**
   * Statement provider for service [fsx](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfsx.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * This action cancels a data repository task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CancelDataRepositoryTask.html
   */
  public toCancelDataRepositoryTask() {
    this.to('fsx:CancelDataRepositoryTask');
    return this;
  }

  /**
   * This action creates a new backup.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateBackup.html
   */
  public toCreateBackup() {
    this.to('fsx:CreateBackup');
    return this;
  }

  /**
   * This action creates a new task.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateDataRepositoryTask.html
   */
  public toCreateDataRepositoryTask() {
    this.to('fsx:CreateDataRepositoryTask');
    return this;
  }

  /**
   * This action creates a new, empty, Amazon FSx file system
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystem.html
   */
  public toCreateFileSystem() {
    this.to('fsx:CreateFileSystem');
    return this;
  }

  /**
   * This action creates a new Amazon FSx file system from an existing backup.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystemFromBackup.html
   */
  public toCreateFileSystemFromBackup() {
    this.to('fsx:CreateFileSystemFromBackup');
    return this;
  }

  /**
   * This action deletes a backup, deleting its contents. After deletion, the backup no longer exists, and its data is gone.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteBackup.html
   */
  public toDeleteBackup() {
    this.to('fsx:DeleteBackup');
    return this;
  }

  /**
   * This action deletes a file system, deleting its contents.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteFileSystem.html
   */
  public toDeleteFileSystem() {
    this.to('fsx:DeleteFileSystem');
    return this;
  }

  /**
   * This action returns the description of specific Amazon FSx backups, if one or more BackupIds are provided for that backup. Otherwise, it returns all backups owned by your AWS account in the AWS Region of the endpoint that you're calling.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html
   */
  public toDescribeBackups() {
    this.to('fsx:DescribeBackups');
    return this;
  }

  /**
   * This action returns the description of specific Amazon FSx data repository task, if one or more TaskIds are provided for that data repository task. Otherwise, it returns all data repository task owned by your AWS account in the AWS Region of the endpoint that you're calling.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeDataRepositoryTasks.html
   */
  public toDescribeDataRepositoryTasks() {
    this.to('fsx:DescribeDataRepositoryTasks');
    return this;
  }

  /**
   * This action returns the description of specific Amazon FSx file systems, if a FileSystemIds value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your AWS account in the AWS Region of the endpoint that you're calling.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html
   */
  public toDescribeFileSystems() {
    this.to('fsx:DescribeFileSystems');
    return this;
  }

  /**
   * This action lists tags for an Amazon FSx resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('fsx:ListTagsForResource');
    return this;
  }

  /**
   * This action tags an Amazon FSx resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('fsx:TagResource');
    return this;
  }

  /**
   * This action removes a tag from an Amazon FSx resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('fsx:UntagResource');
    return this;
  }

  /**
   * This action updates file system configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateFileSystem.html
   */
  public toUpdateFileSystem() {
    this.to('fsx:UpdateFileSystem');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelDataRepositoryTask",
      "DeleteBackup",
      "DeleteFileSystem",
      "UpdateFileSystem"
    ],
    "Tagging": [
      "CreateBackup",
      "CreateDataRepositoryTask",
      "CreateFileSystem",
      "CreateFileSystemFromBackup",
      "TagResource",
      "UntagResource"
    ],
    "Read": [
      "DescribeBackups",
      "DescribeDataRepositoryTasks",
      "DescribeFileSystems",
      "ListTagsForResource"
    ]
  };

  /**
   * Adds a resource of type file-system to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFileSystem(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:fsx:${Region}:${Account}:file-system/${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type backup to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBackup(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:fsx:${Region}:${Account}:backup/${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type task to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/LustreGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTask(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:fsx:${Region}:${Account}:task/${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type FsxActionsWrite = 'CancelDataRepositoryTask' | 'DeleteBackup' | 'DeleteFileSystem' | 'UpdateFileSystem';
export type FsxActionsTagging = 'CreateBackup' | 'CreateDataRepositoryTask' | 'CreateFileSystem' | 'CreateFileSystemFromBackup' | 'TagResource' | 'UntagResource';
export type FsxActionsRead = 'DescribeBackups' | 'DescribeDataRepositoryTasks' | 'DescribeFileSystems' | 'ListTagsForResource';
export type FsxActions = FsxActionsWrite | FsxActionsTagging | FsxActionsRead;
