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
   * Grants permission to allow deletion of an FSx for ONTAP SnapLock Enterprise volume that contains WORM (write once, read many) files with active retention periods
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html#bypass-enterprise
   */
  public toBypassSnaplockEnterpriseRetention() {
    return this.to('BypassSnaplockEnterpriseRetention');
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
   * Grants permission to update an existing volume by using a snapshot from another Amazon FSx for OpenZFS file system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CopySnapshotAndUpdateVolume.html
   */
  public toCopySnapshotAndUpdateVolume() {
    return this.to('CopySnapshotAndUpdateVolume');
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
   * Grants permission to create a new, empty, Amazon file cache
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - ec2:GetSecurityGroupsForVpc
   * - fsx:CreateDataRepositoryAssociation
   * - fsx:TagResource
   * - logs:CreateLogGroup
   * - logs:CreateLogStream
   * - logs:PutLogEvents
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileCache.html
   */
  public toCreateFileCache() {
    return this.to('CreateFileCache');
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
   * - ec2:GetSecurityGroupsForVpc
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
   * - ec2:GetSecurityGroupsForVpc
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
   * Grants permission to delete a file cache, deleting its contents
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - fsx:DeleteDataRepositoryAssociation
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteFileCache.html
   */
  public toDeleteFileCache() {
    return this.to('DeleteFileCache');
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
   * Required to manage cross-account sharing of FSx volumes through AWS Resource Access Manager (RAM). PutResourcePolicy and GetResourcePolicy are also required
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/on-demand-replication.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
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
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifStorageVirtualMachineId()
   * - .ifParentVolumeId()
   *
   * Dependent actions:
   * - fsx:TagResource
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
   * Grants permission to return the descriptions of all file caches owned by your AWS account in the AWS Region of the endpoint that you're calling
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html
   */
  public toDescribeFileCaches() {
    return this.to('DescribeFileCaches');
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
   * Grants permission to return the descriptions of whether FSx route table updates from participant accounts are allowed in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeSharedVpcConfiguration.html
   */
  public toDescribeSharedVpcConfiguration() {
    return this.to('DescribeSharedVpcConfiguration');
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
   * Required to manage cross-account sharing of FSx volumes through AWS Resource Access Manager (RAM). PutResourcePolicy and DeleteResourcePolicy are also required
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/on-demand-replication.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
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
   * Required to manage cross-account sharing of FSx volumes through AWS Resource Access Manager (RAM). DeleteResourcePolicy and GetResourcePolicy are also required
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/on-demand-replication.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to release file system NFS V3 locks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_ReleaseFileSystemNfsV3Locks.html
   */
  public toReleaseFileSystemNfsV3Locks() {
    return this.to('ReleaseFileSystemNfsV3Locks');
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
   * Grants permission to start misconfigured state recovery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_StartMisconfiguredStateRecovery.html
   */
  public toStartMisconfiguredStateRecovery() {
    return this.to('StartMisconfiguredStateRecovery');
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
   * Grants permission to update file cache configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateFileCache.html
   */
  public toUpdateFileCache() {
    return this.to('UpdateFileCache');
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
   * Grants permission to enable or disable FSx route table updates from participant accounts in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateSharedVpcConfiguration.html
   */
  public toUpdateSharedVpcConfiguration() {
    return this.to('UpdateSharedVpcConfiguration');
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
      'CopySnapshotAndUpdateVolume',
      'CreateBackup',
      'CreateDataRepositoryAssociation',
      'CreateDataRepositoryTask',
      'CreateFileCache',
      'CreateFileSystem',
      'CreateFileSystemFromBackup',
      'CreateSnapshot',
      'CreateStorageVirtualMachine',
      'CreateVolume',
      'CreateVolumeFromBackup',
      'DeleteBackup',
      'DeleteDataRepositoryAssociation',
      'DeleteFileCache',
      'DeleteFileSystem',
      'DeleteSnapshot',
      'DeleteStorageVirtualMachine',
      'DeleteVolume',
      'DisassociateFileGateway',
      'DisassociateFileSystemAliases',
      'ReleaseFileSystemNfsV3Locks',
      'RestoreVolumeFromSnapshot',
      'StartMisconfiguredStateRecovery',
      'UpdateDataRepositoryAssociation',
      'UpdateFileCache',
      'UpdateFileSystem',
      'UpdateSharedVpcConfiguration',
      'UpdateSnapshot',
      'UpdateStorageVirtualMachine',
      'UpdateVolume'
    ],
    'Permissions management': [
      'BypassSnaplockEnterpriseRetention',
      'DeleteResourcePolicy',
      'GetResourcePolicy',
      'ManageBackupPrincipalAssociations',
      'PutResourcePolicy'
    ],
    Read: [
      'DescribeAssociatedFileGateways',
      'DescribeBackups',
      'DescribeDataRepositoryAssociations',
      'DescribeDataRepositoryTasks',
      'DescribeFileCaches',
      'DescribeFileSystemAliases',
      'DescribeFileSystems',
      'DescribeSharedVpcConfiguration',
      'DescribeSnapshots',
      'DescribeStorageVirtualMachines',
      'DescribeVolumes',
      'ListTagsForResource'
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFileSystem(fileSystemId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:fsx:${ region || this.defaultRegion }:${ account || this.defaultAccount }:file-system/${ fileSystemId }`);
  }

  /**
   * Adds a resource of type file-cache to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/FileCacheGuide/security-iam.html
   *
   * @param fileCacheId - Identifier for the fileCacheId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFileCache(fileCacheId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:fsx:${ region || this.defaultRegion }:${ account || this.defaultAccount }:file-cache/${ fileCacheId }`);
  }

  /**
   * Adds a resource of type backup to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-overview.html#access-control-resources
   *
   * @param backupId - Identifier for the backupId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBackup(backupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:fsx:${ region || this.defaultRegion }:${ account || this.defaultAccount }:backup/${ backupId }`);
  }

  /**
   * Adds a resource of type storage-virtual-machine to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/security-iam.html
   *
   * @param fileSystemId - Identifier for the fileSystemId.
   * @param storageVirtualMachineId - Identifier for the storageVirtualMachineId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStorageVirtualMachine(fileSystemId: string, storageVirtualMachineId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:fsx:${ region || this.defaultRegion }:${ account || this.defaultAccount }:storage-virtual-machine/${ fileSystemId }/${ storageVirtualMachineId }`);
  }

  /**
   * Adds a resource of type task to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/LustreGuide/access-control-overview.html#access-control-resources
   *
   * @param taskId - Identifier for the taskId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTask(taskId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:fsx:${ region || this.defaultRegion }:${ account || this.defaultAccount }:task/${ taskId }`);
  }

  /**
   * Adds a resource of type association to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/LustreGuide/access-control-overview.html#access-control-resources
   *
   * @param fileSystemIdOrFileCacheId - Identifier for the fileSystemIdOrFileCacheId.
   * @param dataRepositoryAssociationId - Identifier for the dataRepositoryAssociationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAssociation(fileSystemIdOrFileCacheId: string, dataRepositoryAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:fsx:${ region || this.defaultRegion }:${ account || this.defaultAccount }:association/${ fileSystemIdOrFileCacheId }/${ dataRepositoryAssociationId }`);
  }

  /**
   * Adds a resource of type volume to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/security-iam.html
   *
   * @param fileSystemId - Identifier for the fileSystemId.
   * @param volumeId - Identifier for the volumeId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVolume(fileSystemId: string, volumeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:fsx:${ region || this.defaultRegion }:${ account || this.defaultAccount }:volume/${ fileSystemId }/${ volumeId }`);
  }

  /**
   * Adds a resource of type snapshot to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/access-control-overview.html#access-control-resources
   *
   * @param volumeId - Identifier for the volumeId.
   * @param snapshotId - Identifier for the snapshotId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSnapshot(volumeId: string, snapshotId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:fsx:${ region || this.defaultRegion }:${ account || this.defaultAccount }:snapshot/${ volumeId }/${ snapshotId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCopyBackup()
   * - .toCreateBackup()
   * - .toCreateDataRepositoryAssociation()
   * - .toCreateDataRepositoryTask()
   * - .toCreateFileCache()
   * - .toCreateFileSystem()
   * - .toCreateFileSystemFromBackup()
   * - .toCreateSnapshot()
   * - .toCreateStorageVirtualMachine()
   * - .toCreateVolume()
   * - .toCreateVolumeFromBackup()
   * - .toDeleteFileCache()
   * - .toDeleteFileSystem()
   * - .toDeleteVolume()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - file-system
   * - file-cache
   * - backup
   * - storage-virtual-machine
   * - task
   * - association
   * - volume
   * - snapshot
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCopyBackup()
   * - .toCreateBackup()
   * - .toCreateDataRepositoryAssociation()
   * - .toCreateDataRepositoryTask()
   * - .toCreateFileCache()
   * - .toCreateFileSystem()
   * - .toCreateFileSystemFromBackup()
   * - .toCreateSnapshot()
   * - .toCreateStorageVirtualMachine()
   * - .toCreateVolume()
   * - .toCreateVolumeFromBackup()
   * - .toDeleteFileCache()
   * - .toDeleteFileSystem()
   * - .toDeleteVolume()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether the backup is a destination backup for a CopyBackup operation
   *
   * https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifIsBackupCopyDestination(value?: boolean) {
    return this.if(`IsBackupCopyDestination`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by whether the backup is a source backup for a CopyBackup operation
   *
   * https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifIsBackupCopySource(value?: boolean) {
    return this.if(`IsBackupCopySource`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by NFS data repositories which support authentication
   *
   * https://docs.aws.amazon.com/fsx/latest/FileCacheGuide/encryption-in-transit.html
   *
   * Applies to actions:
   * - .toCreateFileCache()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifNfsDataRepositoryAuthenticationEnabled(value?: boolean) {
    return this.if(`NfsDataRepositoryAuthenticationEnabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by NFS data repositories which support encryption-in-transit
   *
   * https://docs.aws.amazon.com/fsx/latest/FileCacheGuide/encryption-in-transit.html
   *
   * Applies to actions:
   * - .toCreateFileCache()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifNfsDataRepositoryEncryptionInTransitEnabled(value?: boolean) {
    return this.if(`NfsDataRepositoryEncryptionInTransitEnabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the containing parent volume for mutating volume operations
   *
   * https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/creating-volumes.html
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
   * https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/creating-volumes.html
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
