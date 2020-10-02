import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [elasticfilesystem](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticfilesystem.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Elasticfilesystem extends PolicyStatement {
  public servicePrefix = 'elasticfilesystem';

  /**
   * Statement provider for service [elasticfilesystem](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticfilesystem.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Starts a backup job for an existing file system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-backup-solutions.html
   */
  public toBackup() {
    this.to('elasticfilesystem:Backup');
    return this;
  }

  /**
   * Permission for allowing read-access to a file system.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAccessPointArn()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html
   */
  public toClientMount() {
    this.to('elasticfilesystem:ClientMount');
    return this;
  }

  /**
   * Permission for allowing root-access to a file system.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccessPointArn()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html
   */
  public toClientRootAccess() {
    this.to('elasticfilesystem:ClientRootAccess');
    return this;
  }

  /**
   * Permission for allowing write-access to a file system.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccessPointArn()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html
   */
  public toClientWrite() {
    this.to('elasticfilesystem:ClientWrite');
    return this;
  }

  /**
   * Creates an access point for the specified file system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_CreateAccessPoint.html
   */
  public toCreateAccessPoint() {
    this.to('elasticfilesystem:CreateAccessPoint');
    return this;
  }

  /**
   * Creates a new, empty file system.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifEncrypted()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_CreateFileSystem.html
   */
  public toCreateFileSystem() {
    this.to('elasticfilesystem:CreateFileSystem');
    return this;
  }

  /**
   * Creates a mount target for a file system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_CreateMountTarget.html
   */
  public toCreateMountTarget() {
    this.to('elasticfilesystem:CreateMountTarget');
    return this;
  }

  /**
   * Creates or overwrites tags associated with a file system.
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
    this.to('elasticfilesystem:CreateTags');
    return this;
  }

  /**
   * Deletes the specified access point.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteAccessPoint.html
   */
  public toDeleteAccessPoint() {
    this.to('elasticfilesystem:DeleteAccessPoint');
    return this;
  }

  /**
   * Deletes a file system, permanently severing access to its contents.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteFileSystem.html
   */
  public toDeleteFileSystem() {
    this.to('elasticfilesystem:DeleteFileSystem');
    return this;
  }

  /**
   * Clears the resource-level policy for a given file system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteFileSystemPolicy.html
   */
  public toDeleteFileSystemPolicy() {
    this.to('elasticfilesystem:DeleteFileSystemPolicy');
    return this;
  }

  /**
   * Deletes the specified mount target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteMountTarget.html
   */
  public toDeleteMountTarget() {
    this.to('elasticfilesystem:DeleteMountTarget');
    return this;
  }

  /**
   * Deletes the specified tags from a file system.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteTags.html
   */
  public toDeleteTags() {
    this.to('elasticfilesystem:DeleteTags');
    return this;
  }

  /**
   * Returns the descriptions of Amazon EFS access points.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeAccessPoints.html
   */
  public toDescribeAccessPoints() {
    this.to('elasticfilesystem:DescribeAccessPoints');
    return this;
  }

  /**
   * Returns the current BackupPolicy object for the specified Amazon EFS file system.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeBackupPolicy.html
   */
  public toDescribeBackupPolicy() {
    this.to('elasticfilesystem:DescribeBackupPolicy');
    return this;
  }

  /**
   * Returns the current resource-level policy for a given file system.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeFileSystemPolicy.html
   */
  public toDescribeFileSystemPolicy() {
    this.to('elasticfilesystem:DescribeFileSystemPolicy');
    return this;
  }

  /**
   * Returns the description of a specific Amazon EFS file system if either the file system CreationToken or the FileSystemId is provided; otherwise, returns descriptions of all file systems owned by the caller's AWS account in the AWS region of the endpoint that you're calling.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeFileSystems.html
   */
  public toDescribeFileSystems() {
    this.to('elasticfilesystem:DescribeFileSystems');
    return this;
  }

  /**
   * Returns the current LifecycleConfiguration object for the specified Amazon EFS file system.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeLifecycleConfiguration.html
   */
  public toDescribeLifecycleConfiguration() {
    this.to('elasticfilesystem:DescribeLifecycleConfiguration');
    return this;
  }

  /**
   * Returns the security groups currently in effect for a mount target.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeMountTargetSecurityGroups.html
   */
  public toDescribeMountTargetSecurityGroups() {
    this.to('elasticfilesystem:DescribeMountTargetSecurityGroups');
    return this;
  }

  /**
   * Returns the descriptions of all the current mount targets, or a specific mount target, for a file system.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeMountTargets.html
   */
  public toDescribeMountTargets() {
    this.to('elasticfilesystem:DescribeMountTargets');
    return this;
  }

  /**
   * Returns the tags associated with a file system.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeTags.html
   */
  public toDescribeTags() {
    this.to('elasticfilesystem:DescribeTags');
    return this;
  }

  /**
   * Returns the tags associated with the specified Amazon EFS resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('elasticfilesystem:ListTagsForResource');
    return this;
  }

  /**
   * Modifies the set of security groups in effect for a mount target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_ModifyMountTargetSecurityGroups.html
   */
  public toModifyMountTargetSecurityGroups() {
    this.to('elasticfilesystem:ModifyMountTargetSecurityGroups');
    return this;
  }

  /**
   * Enables automatic backups with AWS Backup by creating a new BackupPolicy object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_PutBackupPolicy.html
   */
  public toPutBackupPolicy() {
    this.to('elasticfilesystem:PutBackupPolicy');
    return this;
  }

  /**
   * Apply a resource-level policy granting and/or restricting actions from given actors for the specified file system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_PutFileSystemPolicy.html
   */
  public toPutFileSystemPolicy() {
    this.to('elasticfilesystem:PutFileSystemPolicy');
    return this;
  }

  /**
   * Enables lifecycle management by creating a new LifecycleConfiguration object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_PutLifecycleConfiguration.html
   */
  public toPutLifecycleConfiguration() {
    this.to('elasticfilesystem:PutLifecycleConfiguration');
    return this;
  }

  /**
   * Starts a restore job for an existing file system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-backup-solutions.html
   */
  public toRestore() {
    this.to('elasticfilesystem:Restore');
    return this;
  }

  /**
   * Creates or overwrites tags associated with the specified Amazon EFS resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_TagResource.html
   */
  public toTagResource() {
    this.to('elasticfilesystem:TagResource');
    return this;
  }

  /**
   * Deletes the specified tags from a specified Amazon EFS resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('elasticfilesystem:UntagResource');
    return this;
  }

  /**
   * Updates the throughput mode or the amount of provisioned throughput of an existing file system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_UpdateFileSystem.html
   */
  public toUpdateFileSystem() {
    this.to('elasticfilesystem:UpdateFileSystem');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "Backup",
      "ClientRootAccess",
      "ClientWrite",
      "CreateAccessPoint",
      "CreateMountTarget",
      "DeleteAccessPoint",
      "DeleteFileSystem",
      "DeleteFileSystemPolicy",
      "DeleteMountTarget",
      "ModifyMountTargetSecurityGroups",
      "PutBackupPolicy",
      "PutFileSystemPolicy",
      "PutLifecycleConfiguration",
      "Restore",
      "UpdateFileSystem"
    ],
    "Read": [
      "ClientMount",
      "DescribeBackupPolicy",
      "DescribeFileSystemPolicy",
      "DescribeLifecycleConfiguration",
      "DescribeMountTargetSecurityGroups",
      "DescribeMountTargets",
      "DescribeTags",
      "ListTagsForResource"
    ],
    "Tagging": [
      "CreateFileSystem",
      "CreateTags",
      "DeleteTags",
      "TagResource",
      "UntagResource"
    ],
    "List": [
      "DescribeAccessPoints",
      "DescribeFileSystems"
    ]
  };

  /**
   * Adds a resource of type file-system to the statement
   *
   * https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-resources
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
    var arn = 'arn:${Partition}:elasticfilesystem:${Region}:${Account}:file-system/${FileSystemId}';
    arn = arn.replace('${FileSystemId}', fileSystemId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type access-point to the statement
   *
   * https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-resources
   *
   * @param accessPointId - Identifier for the accessPointId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccessPoint(accessPointId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticfilesystem:${Region}:${Account}:access-point/${AccessPointId}';
    arn = arn.replace('${AccessPointId}', accessPointId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The ARN of the access point used to mount the file system
   *
   * Applies to actions:
   * - .toClientMount()
   * - .toClientRootAccess()
   * - .toClientWrite()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccessPointArn(value: string | string[], operator?: Operator | string) {
    return this.if(`elasticfilesystem:AccessPointArn`, value, operator || 'StringLike');
  }

  /**
   * Control encryption behavior for new EFS file systems
   *
   * Applies to actions:
   * - .toCreateFileSystem()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEncrypted(value?: boolean) {
    return this.if(`elasticfilesystem:Encrypted`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }
}
