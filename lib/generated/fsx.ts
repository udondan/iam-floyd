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
   * Grants permission to associate a File Gateway instance with an Amazon FSx for Windows File Server file system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/filegateway/latest/filefsxw/what-is-file-fsxw.html
   */
  public toAssociateFileGateway() {
    return this.to('AssociateFileGateway');
  }

  /**
   * Grants permission to associate DNS aliases with an Amazon FSx for Windows File Server file system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_AssociateFileSystemAliases.html
   */
  public toAssociateFileSystemAliases() {
    return this.to('AssociateFileSystemAliases');
  }

  /**
   * Grants permission to cancel a data repository task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CancelDataRepositoryTask.html
   */
  public toCancelDataRepositoryTask() {
    return this.to('CancelDataRepositoryTask');
  }

  /**
   * Grants permission to copy a backup
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - fsx:TagResource
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CopyBackup.html
   */
  public toCopyBackup() {
    return this.to('CopyBackup');
  }

  /**
   * Grants permission to create a new backup of an Amazon FSx file system
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
    return this.to('CreateBackup');
  }

  /**
   * Grants permission to create a new data respository task for an Amazon FSx for Lustre file system
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
    return this.to('CreateDataRepositoryTask');
  }

  /**
   * Grants permission to create a new, empty, Amazon FSx file system
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
    return this.to('CreateFileSystem');
  }

  /**
   * Grants permission to create a new Amazon FSx file system from an existing backup
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
    return this.to('CreateFileSystemFromBackup');
  }

  /**
   * Grants permission to delete a backup, deleting its contents. After deletion, the backup no longer exists, and its data is no longer available.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteBackup.html
   */
  public toDeleteBackup() {
    return this.to('DeleteBackup');
  }

  /**
   * Grants permission to delete a file system, deleting its contents and any existing automatic backups of the file system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteFileSystem.html
   */
  public toDeleteFileSystem() {
    return this.to('DeleteFileSystem');
  }

  /**
   * Grants permission to describe the File Gateway instances associated with an Amazon FSx for Windows File Server file system
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/filegateway/latest/filefsxw/what-is-file-fsxw.html
   */
  public toDescribeAssociatedFileGateways() {
    return this.to('DescribeAssociatedFileGateways');
  }

  /**
   * Grants permission to return the descriptions of all backups owned by your AWSaccount in the AWSRegion of the endpoint that you're calling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html
   */
  public toDescribeBackups() {
    return this.to('DescribeBackups');
  }

  /**
   * Grants permission to return the descriptions of all data repository task owned by your AWSaccount in the AWSRegion of the endpoint that you're calling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeDataRepositoryTasks.html
   */
  public toDescribeDataRepositoryTasks() {
    return this.to('DescribeDataRepositoryTasks');
  }

  /**
   * Grants permission to return the description of all DNS aliases owned by your Amazon FSx for Windows File Server file system
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystemAliases.html
   */
  public toDescribeFileSystemAliases() {
    return this.to('DescribeFileSystemAliases');
  }

  /**
   * Grants permission to return the descriptions of all file systems owned by your AWSaccount in the AWSRegion of the endpoint that you're calling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html
   */
  public toDescribeFileSystems() {
    return this.to('DescribeFileSystems');
  }

  /**
   * Grants permission to disassociate a File Gateway instance from an Amazon FSx for Windows File Server file system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/filegateway/latest/filefsxw/what-is-file-fsxw.html
   */
  public toDisassociateFileGateway() {
    return this.to('DisassociateFileGateway');
  }

  /**
   * Grants permission to disassociate file system aliases with an Amazon FSx for Windows File Server file system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DisassociateFileSystemAliases.html
   */
  public toDisassociateFileSystemAliases() {
    return this.to('DisassociateFileSystemAliases');
  }

  /**
   * Grants permission to list tags for an Amazon FSx resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to manage backup principal associations through AWS Backup
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CopyBackup.html
   */
  public toManageBackupPrincipalAssociations() {
    return this.to('ManageBackupPrincipalAssociations');
  }

  /**
   * Grants permission to tag an Amazon FSx resource
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
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from an Amazon FSx resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update file system configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateFileSystem.html
   */
  public toUpdateFileSystem() {
    return this.to('UpdateFileSystem');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateFileGateway",
      "AssociateFileSystemAliases",
      "CancelDataRepositoryTask",
      "CopyBackup",
      "DeleteBackup",
      "DeleteFileSystem",
      "DisassociateFileGateway",
      "DisassociateFileSystemAliases",
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
      "DescribeAssociatedFileGateways",
      "DescribeBackups",
      "DescribeDataRepositoryTasks",
      "DescribeFileSystemAliases",
      "DescribeFileSystems",
      "ListTagsForResource"
    ],
    "Permissions management": [
      "ManageBackupPrincipalAssociations"
    ]
  };

  /**
   * Adds a resource of type file-system to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-overview.html#access-control-resources
   *
   * @param fileSystemId - Identifier for the fileSystemId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFileSystem(fileSystemId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:fsx:${Region}:${Account}:file-system/${FileSystemId}';
    arn = arn.replace('${FileSystemId}', fileSystemId);
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
   * @param backupId - Identifier for the backupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBackup(backupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:fsx:${Region}:${Account}:backup/${BackupId}';
    arn = arn.replace('${BackupId}', backupId);
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
   * @param taskId - Identifier for the taskId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTask(taskId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:fsx:${Region}:${Account}:task/${TaskId}';
    arn = arn.replace('${TaskId}', taskId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by whether the backup is a destination backup for a CopyBackup operation
   *
   * https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-manage-access-intro.htmlAPI_CopyBackup.html
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifIsBackupCopyDestination(value?: boolean) {
    return this.if(`IsBackupCopyDestination`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by whether the backup is a source backup for a CopyBackup operation
   *
   * https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-manage-access-intro.htmlAPI_CopyBackup.html
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifIsBackupCopySource(value?: boolean) {
    return this.if(`IsBackupCopySource`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }
}
