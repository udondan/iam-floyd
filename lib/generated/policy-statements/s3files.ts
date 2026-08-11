import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [s3files](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3files.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class S3files extends PolicyStatement {
  public servicePrefix = 's3files';

  /**
   * Statement provider for service [s3files](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3files.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to allow an NFS client read-access to a file system
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAccessPointArn()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/s3files-client-authorization.html
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
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/s3files-client-authorization.html
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
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/s3files-client-authorization.html
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_CreateAccessPoint.html
   */
  public toCreateAccessPoint() {
    return this.to('CreateAccessPoint');
  }

  /**
   * Grants permission to create a new file system
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_CreateFileSystem.html
   */
  public toCreateFileSystem() {
    return this.to('CreateFileSystem');
  }

  /**
   * Grants permission to create a mount target for a file system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_CreateMountTarget.html
   */
  public toCreateMountTarget() {
    return this.to('CreateMountTarget');
  }

  /**
   * Grants permission to delete a specified access point
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_DeleteAccessPoint.html
   */
  public toDeleteAccessPoint() {
    return this.to('DeleteAccessPoint');
  }

  /**
   * Grants permission to delete a specified file system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_DeleteFileSystem.html
   */
  public toDeleteFileSystem() {
    return this.to('DeleteFileSystem');
  }

  /**
   * Grants permission to delete the IAM resource policy for a specified file system
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_DeleteFileSystemPolicy.html
   */
  public toDeleteFileSystemPolicy() {
    return this.to('DeleteFileSystemPolicy');
  }

  /**
   * Grants permission to delete a specified mount target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_DeleteMountTarget.html
   */
  public toDeleteMountTarget() {
    return this.to('DeleteMountTarget');
  }

  /**
   * Grants permission to get resource information for a specified access point
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_GetAccessPoint.html
   */
  public toGetAccessPoint() {
    return this.to('GetAccessPoint');
  }

  /**
   * Grants permission to get resource information for a specified file system
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_GetFileSystem.html
   */
  public toGetFileSystem() {
    return this.to('GetFileSystem');
  }

  /**
   * Grants permission to get the IAM resource policy for a specified file system
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_GetFileSystemPolicy.html
   */
  public toGetFileSystemPolicy() {
    return this.to('GetFileSystemPolicy');
  }

  /**
   * Grants permission to get resource information for a specified mount target
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_GetMountTarget.html
   */
  public toGetMountTarget() {
    return this.to('GetMountTarget');
  }

  /**
   * Grants permission to get a synchronization configuration for a specified file system
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_GetSynchronizationConfiguration.html
   */
  public toGetSynchronizationConfiguration() {
    return this.to('GetSynchronizationConfiguration');
  }

  /**
   * Grants permission to get a paginated list of all access points in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_ListAccessPoints.html
   */
  public toListAccessPoints() {
    return this.to('ListAccessPoints');
  }

  /**
   * Grants permission to get a paginated list of all file systems in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_ListFileSystems.html
   */
  public toListFileSystems() {
    return this.to('ListFileSystems');
  }

  /**
   * Grants permission to get a paginated list of all mount targets in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_ListMountTargets.html
   */
  public toListMountTargets() {
    return this.to('ListMountTargets');
  }

  /**
   * Grants permission to list tags for a specified S3 Files resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add an IAM resource policy to a specified file system
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_PutFileSystemPolicy.html
   */
  public toPutFileSystemPolicy() {
    return this.to('PutFileSystemPolicy');
  }

  /**
   * Grants permission to add a synchronization configuration to a specified file system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_PutSynchronizationConfiguration.html
   */
  public toPutSynchronizationConfiguration() {
    return this.to('PutSynchronizationConfiguration');
  }

  /**
   * Grants permission to tag a specified S3 Files resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCreateAction()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a specified S3 Files resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update resource information for a specified mount target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3Files_UpdateMountTarget.html
   */
  public toUpdateMountTarget() {
    return this.to('UpdateMountTarget');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'ClientMount',
      'GetAccessPoint',
      'GetFileSystem',
      'GetFileSystemPolicy',
      'GetMountTarget',
      'GetSynchronizationConfiguration',
      'ListTagsForResource'
    ],
    Write: [
      'ClientRootAccess',
      'ClientWrite',
      'CreateAccessPoint',
      'CreateFileSystem',
      'CreateMountTarget',
      'DeleteAccessPoint',
      'DeleteFileSystem',
      'DeleteMountTarget',
      'PutSynchronizationConfiguration',
      'UpdateMountTarget'
    ],
    'Permissions management': [
      'DeleteFileSystemPolicy',
      'PutFileSystemPolicy'
    ],
    List: [
      'ListAccessPoints',
      'ListFileSystems',
      'ListMountTargets'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type file-system to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/creating-using-create-fs.html
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:s3files:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:file-system/${ fileSystemId }`);
  }

  /**
   * Adds a resource of type access-point to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/s3files-access-points.html
   *
   * @param fileSystemId - Identifier for the fileSystemId.
   * @param accessPointId - Identifier for the accessPointId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccessPoint(fileSystemId: string, accessPointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:s3files:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:file-system/${ fileSystemId }/access-point/${ accessPointId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toCreateFileSystem()
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
   * Filters access by the tags associated with the resource
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
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toCreateFileSystem()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ARN of the access point used to mount the file system
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/s3files-access-points.html
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
    return this.if(`AccessPointArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the name of a resource-creating API action
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/using-tags-s3files.html
   *
   * Applies to actions:
   * - .toTagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCreateAction(value: string | string[], operator?: Operator | string) {
    return this.if(`CreateAction`, value, operator ?? 'StringLike');
  }
}
