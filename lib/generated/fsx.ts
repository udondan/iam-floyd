import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
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
   * Grants permission to create a new backup of an Amazon FSx file system or an Amazon FSx volume
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
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateBackup.html
   */
  public toCreateBackup() {
    return this.to('CreateBackup');
  }

  /**
   * Grants permission to create a new data respository association for an Amazon FSx for Lustre file system
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
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateDataRepositoryAssociation.html
   */
  public toCreateDataRepositoryAssociation() {
    return this.to('CreateDataRepositoryAssociation');
  }

  /**
   * Grants permission to create a new data respository task for an Amazon FSx for Lustre file system
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
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateDataRepositoryTask.html
   */
  public toCreateDataRepositoryTask() {
    return this.to('CreateDataRepositoryTask');
  }

  /**
   * Grants permission to create a new, empty, Amazon FSx file system
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
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystem.html
   */
  public toCreateFileSystem() {
    return this.to('CreateFileSystem');
  }

  /**
   * Grants permission to create a new Amazon FSx file system from an existing backup
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
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystemFromBackup.html
   */
  public toCreateFileSystemFromBackup() {
    return this.to('CreateFileSystemFromBackup');
  }

  /**
   * Grants permission to create a new snapshot on a volume
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
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateSnapshot.html
   */
  public toCreateSnapshot() {
    return this.to('CreateSnapshot');
  }

  /**
   * Grants permission to create a new storage virtual machine in an Amazon FSx for Ontap file system
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
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateStorageVirtualMachine.html
   */
  public toCreateStorageVirtualMachine() {
    return this.to('CreateStorageVirtualMachine');
  }

  /**
   * Grants permission to create a new volume
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifStorageVirtualMachineId()
   * - .ifParentVolumeId()
   *
   * Dependent actions:
   * - fsx:TagResource
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateVolume.html
   */
  public toCreateVolume() {
    return this.to('CreateVolume');
  }

  /**
   * Grants permission to create a new volume from backup
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifStorageVirtualMachineId()
   *
   * Dependent actions:
   * - fsx:TagResource
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateVolumeFromBackup.html
   */
  public toCreateVolumeFromBackup() {
    return this.to('CreateVolumeFromBackup');
  }

  /**
   * Grants permission to delete a backup, deleting its contents. After deletion, the backup no longer exists, and its data is no longer available
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteBackup.html
   */
  public toDeleteBackup() {
    return this.to('DeleteBackup');
  }

  /**
   * Grants permission to delete a data repository association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteDataRepositoryAssociation.html
   */
  public toDeleteDataRepositoryAssociation() {
    return this.to('DeleteDataRepositoryAssociation');
  }

  /**
   * Grants permission to delete a file system, deleting its contents and any existing automatic backups of the file system
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - fsx:CreateBackup
   * - fsx:TagResource
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteFileSystem.html
   */
  public toDeleteFileSystem() {
    return this.to('DeleteFileSystem');
  }

  /**
   * Grants permission to delete a snapshot on a volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteSnapshot.html
   */
  public toDeleteSnapshot() {
    return this.to('DeleteSnapshot');
  }

  /**
   * Grants permission to delete a storage virtual machine, deleting its contents
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteStorageVirtualMachine.html
   */
  public toDeleteStorageVirtualMachine() {
    return this.to('DeleteStorageVirtualMachine');
  }

  /**
   * Grants permission to delete a volume, deleting its contents and any existing automatic backups of the volume
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifStorageVirtualMachineId()
   * - .ifParentVolumeId()
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteVolume.html
   */
  public toDeleteVolume() {
    return this.to('DeleteVolume');
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
   * Grants permission to return the descriptions of all backups owned by your AWS account in the AWS Region of the endpoint that you're calling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html
   */
  public toDescribeBackups() {
    return this.to('DescribeBackups');
  }

  /**
   * Grants permission to return the descriptions of all data repository associations owned by your AWS account in the AWS Region of the endpoint that you're calling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeDataRepositoryAssociations.html
   */
  public toDescribeDataRepositoryAssociations() {
    return this.to('DescribeDataRepositoryAssociations');
  }

  /**
   * Grants permission to return the descriptions of all data repository tasks owned by your AWS account in the AWS Region of the endpoint that you're calling
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
   * Grants permission to return the descriptions of all file systems owned by your AWS account in the AWS Region of the endpoint that you're calling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html
   */
  public toDescribeFileSystems() {
    return this.to('DescribeFileSystems');
  }

  /**
   * Grants permission to return the descriptions of all snapshots owned by your AWS account in the AWS Region of the endpoint you're calling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeSnapshots.html
   */
  public toDescribeSnapshots() {
    return this.to('DescribeSnapshots');
  }

  /**
   * Grants permission to return the descriptions of all storage virtual machines owned by your AWS account in the AWS Region of the endpoint that you're calling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeStorageVirtualMachines.html
   */
  public toDescribeStorageVirtualMachines() {
    return this.to('DescribeStorageVirtualMachines');
  }

  /**
   * Grants permission to return the descriptions of all volumes owned by your AWS account in the AWS Region of the endpoint that you're calling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeVolumes.html
   */
  public toDescribeVolumes() {
    return this.to('DescribeVolumes');
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
   * Grants permission to restore volume state from a snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_RestoreVolumeFromSnapshot.html
   */
  public toRestoreVolumeFromSnapshot() {
    return this.to('RestoreVolumeFromSnapshot');
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
   * Grants permission to update data repository association configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateDataRepositoryAssociation.html
   */
  public toUpdateDataRepositoryAssociation() {
    return this.to('UpdateDataRepositoryAssociation');
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

  /**
   * Grants permission to update snapshot configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateSnapshot.html
   */
  public toUpdateSnapshot() {
    return this.to('UpdateSnapshot');
  }

  /**
   * Grants permission to update storage virtual machine configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateStorageVirtualMachine.html
   */
  public toUpdateStorageVirtualMachine() {
    return this.to('UpdateStorageVirtualMachine');
  }

  /**
   * Grants permission to update volume configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStorageVirtualMachineId()
   * - .ifParentVolumeId()
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateVolume.html
   */
  public toUpdateVolume() {
    return this.to('UpdateVolume');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateFileGateway',
      'AssociateFileSystemAliases',
      'CancelDataRepositoryTask',
      'CopyBackup',
      'CreateBackup',
      'CreateDataRepositoryAssociation',
      'CreateDataRepositoryTask',
      'CreateFileSystem',
      'CreateFileSystemFromBackup',
      'CreateSnapshot',
      'CreateStorageVirtualMachine',
      'CreateVolume',
      'CreateVolumeFromBackup',
      'DeleteBackup',
      'DeleteDataRepositoryAssociation',
      'DeleteFileSystem',
      'DeleteSnapshot',
      'DeleteStorageVirtualMachine',
      'DeleteVolume',
      'DisassociateFileGateway',
      'DisassociateFileSystemAliases',
      'RestoreVolumeFromSnapshot',
      'UpdateDataRepositoryAssociation',
      'UpdateFileSystem',
      'UpdateSnapshot',
      'UpdateStorageVirtualMachine',
      'UpdateVolume'
    ],
    Read: [
      'DescribeAssociatedFileGateways',
      'DescribeBackups',
      'DescribeDataRepositoryAssociations',
      'DescribeDataRepositoryTasks',
      'DescribeFileSystemAliases',
      'DescribeFileSystems',
      'DescribeSnapshots',
      'DescribeStorageVirtualMachines',
      'DescribeVolumes',
      'ListTagsForResource'
    ],
    'Permissions management': [
      'ManageBackupPrincipalAssociations'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
    return this.on(`arn:${ partition || 'aws' }:fsx:${ region || '*' }:${ account || '*' }:file-system/${ fileSystemId }`);
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
    return this.on(`arn:${ partition || 'aws' }:fsx:${ region || '*' }:${ account || '*' }:backup/${ backupId }`);
  }

  /**
   * Adds a resource of type storage-virtual-machine to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/security-iam.html
   *
   * @param fileSystemId - Identifier for the fileSystemId.
   * @param storageVirtualMachineId - Identifier for the storageVirtualMachineId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStorageVirtualMachine(fileSystemId: string, storageVirtualMachineId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:fsx:${ region || '*' }:${ account || '*' }:storage-virtual-machine/${ fileSystemId }/${ storageVirtualMachineId }`);
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
    return this.on(`arn:${ partition || 'aws' }:fsx:${ region || '*' }:${ account || '*' }:task/${ taskId }`);
  }

  /**
   * Adds a resource of type association to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/LustreGuide/access-control-overview.html#access-control-resources
   *
   * @param dataRepositoryAssociationId - Identifier for the dataRepositoryAssociationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAssociation(dataRepositoryAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:fsx:${ region || '*' }:${ account || '*' }:association/${ dataRepositoryAssociationId }`);
  }

  /**
   * Adds a resource of type volume to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/security-iam.html
   *
   * @param fileSystemId - Identifier for the fileSystemId.
   * @param volumeId - Identifier for the volumeId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVolume(fileSystemId: string, volumeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:fsx:${ region || '*' }:${ account || '*' }:volume/${ fileSystemId }/${ volumeId }`);
  }

  /**
   * Adds a resource of type snapshot to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/OpenFsGuide/access-control-overview.html#access-control-resources
   *
   * @param volumeId - Identifier for the volumeId.
   * @param snapshotId - Identifier for the snapshotId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSnapshot(volumeId: string, snapshotId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:fsx:${ region || '*' }:${ account || '*' }:snapshot/${ volumeId }/${ snapshotId }`);
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

  /**
   * Filters access by the containing parent volume for mutating volume operations
   *
   * https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-manage-access-intro.htmlAPI_CreateVolume.html
   *
   * Applies to actions:
   * - .toCreateVolume()
   * - .toDeleteVolume()
   * - .toUpdateVolume()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifParentVolumeId(value: string | string[], operator?: Operator | string) {
    return this.if(`ParentVolumeId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the containing storage virtual machine for a volume for mutating volume operations
   *
   * https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-manage-access-intro.htmlAPI_CreateVolume.html
   *
   * Applies to actions:
   * - .toCreateVolume()
   * - .toCreateVolumeFromBackup()
   * - .toDeleteVolume()
   * - .toUpdateVolume()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifStorageVirtualMachineId(value: string | string[], operator?: Operator | string) {
    return this.if(`StorageVirtualMachineId`, value, operator || 'StringLike');
  }
}
