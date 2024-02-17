import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [elasticfilesystem](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticfilesystem.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Elasticfilesystem extends PolicyStatement {
  public servicePrefix = 'elasticfilesystem';

  /**
   * Statement provider for service [elasticfilesystem](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticfilesystem.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to start a backup job for an existing file system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-backup-solutions.html
   */
  public toBackup() {
    return this.to('Backup');
  }

  /**
   * Grants permission to allow an NFS client read-access to a file system
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAccessPointArn()
   * - .ifAccessedViaMountTarget()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html
   */
  public toClientMount() {
    return this.to('ClientMount');
  }

  /**
   * Grants permission to allow an NFS client root-access to a file system
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccessPointArn()
   * - .ifAccessedViaMountTarget()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html
   */
  public toClientRootAccess() {
    return this.to('ClientRootAccess');
  }

  /**
   * Grants permission to allow an NFS client write-access to a file system
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccessPointArn()
   * - .ifAccessedViaMountTarget()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html
   */
  public toClientWrite() {
    return this.to('ClientWrite');
  }

  /**
   * Grants permission to create an access point for the specified file system
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_CreateAccessPoint.html
   */
  public toCreateAccessPoint() {
    return this.to('CreateAccessPoint');
  }

  /**
   * Grants permission to create a new, empty file system
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifEncrypted()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_CreateFileSystem.html
   */
  public toCreateFileSystem() {
    return this.to('CreateFileSystem');
  }

  /**
   * Grants permission to create a mount target for a file system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_CreateMountTarget.html
   */
  public toCreateMountTarget() {
    return this.to('CreateMountTarget');
  }

  /**
   * Grants permission to create a new replication configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_CreateReplicationConfiguration.html
   */
  public toCreateReplicationConfiguration() {
    return this.to('CreateReplicationConfiguration');
  }

  /**
   * Grants permission to create or overwrite tags associated with a file system; deprecated, see TagResource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_CreateTags.html
   */
  public toCreateTags() {
    return this.to('CreateTags');
  }

  /**
   * Grants permission to delete the specified access point
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteAccessPoint.html
   */
  public toDeleteAccessPoint() {
    return this.to('DeleteAccessPoint');
  }

  /**
   * Grants permission to delete a file system, permanently severing access to its contents
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteFileSystem.html
   */
  public toDeleteFileSystem() {
    return this.to('DeleteFileSystem');
  }

  /**
   * Grants permission to delete the resource-level policy for a file system
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteFileSystemPolicy.html
   */
  public toDeleteFileSystemPolicy() {
    return this.to('DeleteFileSystemPolicy');
  }

  /**
   * Grants permission to delete the specified mount target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteMountTarget.html
   */
  public toDeleteMountTarget() {
    return this.to('DeleteMountTarget');
  }

  /**
   * Grants permission to delete a replication configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteReplicationConfiguration.html
   */
  public toDeleteReplicationConfiguration() {
    return this.to('DeleteReplicationConfiguration');
  }

  /**
   * Grants permission to delete the specified tags from a file system; deprecated, see UntagResource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteTags.html
   */
  public toDeleteTags() {
    return this.to('DeleteTags');
  }

  /**
   * Grants permission to view the descriptions of Amazon EFS access points
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeAccessPoints.html
   */
  public toDescribeAccessPoints() {
    return this.to('DescribeAccessPoints');
  }

  /**
   * Grants permission to view the account preferences in effect for an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeAccountPreferences.html
   */
  public toDescribeAccountPreferences() {
    return this.to('DescribeAccountPreferences');
  }

  /**
   * Grants permission to view the BackupPolicy object for an Amazon EFS file system
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeBackupPolicy.html
   */
  public toDescribeBackupPolicy() {
    return this.to('DescribeBackupPolicy');
  }

  /**
   * Grants permission to view the resource-level policy for an Amazon EFS file system
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeFileSystemPolicy.html
   */
  public toDescribeFileSystemPolicy() {
    return this.to('DescribeFileSystemPolicy');
  }

  /**
   * Grants permission to view the description of an Amazon EFS file system specified by file system CreationToken or FileSystemId; or to view the description of all file systems owned by the caller's AWS account in the AWS region of the endpoint that is being called
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeFileSystems.html
   */
  public toDescribeFileSystems() {
    return this.to('DescribeFileSystems');
  }

  /**
   * Grants permission to view the LifecycleConfiguration object for an Amazon EFS file system
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeLifecycleConfiguration.html
   */
  public toDescribeLifecycleConfiguration() {
    return this.to('DescribeLifecycleConfiguration');
  }

  /**
   * Grants permission to view the security groups in effect for a mount target
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeMountTargetSecurityGroups.html
   */
  public toDescribeMountTargetSecurityGroups() {
    return this.to('DescribeMountTargetSecurityGroups');
  }

  /**
   * Grants permission to view the descriptions of all mount targets, or a specific mount target, for a file system
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeMountTargets.html
   */
  public toDescribeMountTargets() {
    return this.to('DescribeMountTargets');
  }

  /**
   * Grants permission to view the description of an Amazon EFS replication configuration specified by FileSystemId; or to view the description of all replication configurations owned by the caller's AWS account in the AWS region of the endpoint that is being called
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeReplicationConfigurations.html
   */
  public toDescribeReplicationConfigurations() {
    return this.to('DescribeReplicationConfigurations');
  }

  /**
   * Grants permission to view the tags associated with a file system
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeTags.html
   */
  public toDescribeTags() {
    return this.to('DescribeTags');
  }

  /**
   * Grants permission to view the tags associated with the specified Amazon EFS resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to modify the set of security groups in effect for a mount target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_ModifyMountTargetSecurityGroups.html
   */
  public toModifyMountTargetSecurityGroups() {
    return this.to('ModifyMountTargetSecurityGroups');
  }

  /**
   * Grants permission to set the account preferences of an account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_PutAccountPreferences.html
   */
  public toPutAccountPreferences() {
    return this.to('PutAccountPreferences');
  }

  /**
   * Grants permission to enable or disable automatic backups with AWS Backup by creating a new BackupPolicy object
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_PutBackupPolicy.html
   */
  public toPutBackupPolicy() {
    return this.to('PutBackupPolicy');
  }

  /**
   * Grants permission to apply a resource-level policy that defines the actions allowed or denied from given actors for the specified file system
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_PutFileSystemPolicy.html
   */
  public toPutFileSystemPolicy() {
    return this.to('PutFileSystemPolicy');
  }

  /**
   * Grants permission to enable lifecycle management by creating a new LifecycleConfiguration object
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_PutLifecycleConfiguration.html
   */
  public toPutLifecycleConfiguration() {
    return this.to('PutLifecycleConfiguration');
  }

  /**
   * Grants permission to start a restore job for a backup of a file system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-backup-solutions.html
   */
  public toRestore() {
    return this.to('Restore');
  }

  /**
   * Grants permission to create or overwrite tags associated with the specified Amazon EFS resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCreateAction()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to delete the specified tags from an Amazon EFS resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the throughput mode or the amount of provisioned throughput of an existing file system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_UpdateFileSystem.html
   */
  public toUpdateFileSystem() {
    return this.to('UpdateFileSystem');
  }

  /**
   * Grants permission to update the file system protection of an existing file system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_UpdateFileSystemProtection.html
   */
  public toUpdateFileSystemProtection() {
    return this.to('UpdateFileSystemProtection');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'Backup',
      'ClientRootAccess',
      'ClientWrite',
      'CreateAccessPoint',
      'CreateFileSystem',
      'CreateMountTarget',
      'CreateReplicationConfiguration',
      'DeleteAccessPoint',
      'DeleteFileSystem',
      'DeleteMountTarget',
      'DeleteReplicationConfiguration',
      'ModifyMountTargetSecurityGroups',
      'PutAccountPreferences',
      'PutBackupPolicy',
      'PutLifecycleConfiguration',
      'Restore',
      'UpdateFileSystem',
      'UpdateFileSystemProtection'
    ],
    Read: [
      'ClientMount',
      'DescribeBackupPolicy',
      'DescribeFileSystemPolicy',
      'DescribeLifecycleConfiguration',
      'DescribeMountTargetSecurityGroups',
      'DescribeMountTargets',
      'DescribeTags',
      'ListTagsForResource'
    ],
    Tagging: [
      'CreateTags',
      'DeleteTags',
      'TagResource',
      'UntagResource'
    ],
    'Permissions management': [
      'DeleteFileSystemPolicy',
      'PutFileSystemPolicy'
    ],
    List: [
      'DescribeAccessPoints',
      'DescribeAccountPreferences',
      'DescribeFileSystems',
      'DescribeReplicationConfigurations'
    ]
  };

  /**
   * Adds a resource of type file-system to the statement
   *
   * https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-resources
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
    return this.on(`arn:${ partition || this.defaultPartition }:elasticfilesystem:${ region || this.defaultRegion }:${ account || this.defaultAccount }:file-system/${ fileSystemId }`);
  }

  /**
   * Adds a resource of type access-point to the statement
   *
   * https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-resources
   *
   * @param accessPointId - Identifier for the accessPointId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccessPoint(accessPointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticfilesystem:${ region || this.defaultRegion }:${ account || this.defaultAccount }:access-point/${ accessPointId }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toCreateFileSystem()
   * - .toCreateTags()
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
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - file-system
   * - access-point
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toCreateFileSystem()
   * - .toCreateTags()
   * - .toDeleteTags()
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
   * Filters access by the ARN of the access point used to mount the file system
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html
   *
   * Applies to actions:
   * - .toClientMount()
   * - .toClientRootAccess()
   * - .toClientWrite()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifAccessPointArn(value: string | string[], operator?: Operator | string) {
    return this.if(`AccessPointArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by whether the file system is accessed via mount targets
   *
   * https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html
   *
   * Applies to actions:
   * - .toClientMount()
   * - .toClientRootAccess()
   * - .toClientWrite()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAccessedViaMountTarget(value?: boolean) {
    return this.if(`AccessedViaMountTarget`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the name of a resource-creating API action
   *
   * https://docs.aws.amazon.com/efs/latest/ug/using-tags-efs.html
   *
   * Applies to actions:
   * - .toTagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCreateAction(value: string | string[], operator?: Operator | string) {
    return this.if(`CreateAction`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether users can create only encrypted or unencrypted file systems
   *
   * https://docs.aws.amazon.com/efs/latest/ug/encryption.html
   *
   * Applies to actions:
   * - .toCreateFileSystem()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEncrypted(value?: boolean) {
    return this.if(`Encrypted`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }
}
