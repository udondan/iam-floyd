import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [s3express](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3express.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class S3express extends PolicyStatement {
  public servicePrefix = 's3express';

  /**
   * Statement provider for service [s3express](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3express.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new access point
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifLocationName()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html
   */
  public toCreateAccessPoint() {
    return this.to('CreateAccessPoint');
  }

  /**
   * Grants permission to create a new bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifLocationName()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html
   */
  public toCreateBucket() {
    return this.to('CreateBucket');
  }

  /**
   * Grants permission to Create Session token which is used for object APIs such as PutObject, GetObject, etc
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSessionMode()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifXAmzServerSideEncryption()
   * - .ifXAmzServerSideEncryptionAwsKmsKeyId()
   * - .ifAllAccessRestrictedToLocalZoneGroup()
   * - .ifPermissions()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html
   */
  public toCreateSession() {
    return this.to('CreateSession');
  }

  /**
   * Grants permission to delete the access point named in the URI
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html
   */
  public toDeleteAccessPoint() {
    return this.to('DeleteAccessPoint');
  }

  /**
   * Grants permission to delete the policy on a specified access point
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html
   */
  public toDeleteAccessPointPolicy() {
    return this.to('DeleteAccessPointPolicy');
  }

  /**
   * Grants permission to delete the scope configuration on a specified access point
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointScope.html
   */
  public toDeleteAccessPointScope() {
    return this.to('DeleteAccessPointScope');
  }

  /**
   * Grants permission to delete the bucket named in the URI
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html
   */
  public toDeleteBucket() {
    return this.to('DeleteBucket');
  }

  /**
   * Grants permission to delete the policy on a specified bucket
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html
   */
  public toDeleteBucketPolicy() {
    return this.to('DeleteBucketPolicy');
  }

  /**
   * Grants permission to return configuration information about the specified access point
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html
   */
  public toGetAccessPoint() {
    return this.to('GetAccessPoint');
  }

  /**
   * Grants permission to return the access point policy associated with the specified access point
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html
   */
  public toGetAccessPointPolicy() {
    return this.to('GetAccessPointPolicy');
  }

  /**
   * Grants permission to return the scope configuration associated with the specified access point
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointScope.html
   */
  public toGetAccessPointScope() {
    return this.to('GetAccessPointScope');
  }

  /**
   * Grants permission to return the policy of the specified bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html
   */
  public toGetBucketPolicy() {
    return this.to('GetBucketPolicy');
  }

  /**
   * Grants permission to return the default encryption configuration for a directory bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html
   */
  public toGetEncryptionConfiguration() {
    return this.to('GetEncryptionConfiguration');
  }

  /**
   * Grants permission to return the lifecycle configuration information set on a directory bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html
   */
  public toGetLifecycleConfiguration() {
    return this.to('GetLifecycleConfiguration');
  }

  /**
   * Grants permission to list access points
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForDirectoryBuckets.html
   */
  public toListAccessPointsForDirectoryBuckets() {
    return this.to('ListAccessPointsForDirectoryBuckets');
  }

  /**
   * Grants permission to list all directory buckets owned by the authenticated sender of the request
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListDirectoryBuckets.html
   */
  public toListAllMyDirectoryBuckets() {
    return this.to('ListAllMyDirectoryBuckets');
  }

  /**
   * Grants permission to lists all of the tags for a specified resource
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to associate an access policy with a specified access point
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html
   */
  public toPutAccessPointPolicy() {
    return this.to('PutAccessPointPolicy');
  }

  /**
   * Grants permission to associate an access point with a specified access point scope configuration
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointScope.html
   */
  public toPutAccessPointScope() {
    return this.to('PutAccessPointScope');
  }

  /**
   * Grants permission to add or replace a bucket policy on a bucket
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html
   */
  public toPutBucketPolicy() {
    return this.to('PutBucketPolicy');
  }

  /**
   * Grants permission to set the encryption configuration for a directory bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html
   */
  public toPutEncryptionConfiguration() {
    return this.to('PutEncryptionConfiguration');
  }

  /**
   * Grants permission to create a new lifecycle configuration for the directory bucket or replace an existing lifecycle configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html
   */
  public toPutLifecycleConfiguration() {
    return this.to('PutLifecycleConfiguration');
  }

  /**
   * Grants permission to create a new user-defined tag or update an existing tag
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the specified user-defined tags from an S3 resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAccessPoint',
      'CreateBucket',
      'CreateSession',
      'DeleteAccessPoint',
      'DeleteBucket',
      'PutEncryptionConfiguration',
      'PutLifecycleConfiguration'
    ],
    'Permissions management': [
      'DeleteAccessPointPolicy',
      'DeleteAccessPointScope',
      'DeleteBucketPolicy',
      'PutAccessPointPolicy',
      'PutAccessPointScope',
      'PutBucketPolicy'
    ],
    Read: [
      'GetAccessPoint',
      'GetAccessPointPolicy',
      'GetAccessPointScope',
      'GetBucketPolicy',
      'GetEncryptionConfiguration',
      'GetLifecycleConfiguration'
    ],
    List: [
      'ListAccessPointsForDirectoryBuckets',
      'ListAllMyDirectoryBuckets',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type bucket to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam.html
   *
   * @param bucketName - Identifier for the bucketName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifBucketTag()
   */
  public onBucket(bucketName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:s3express:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:bucket/${ bucketName }`);
  }

  /**
   * Adds a resource of type accesspoint to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html
   *
   * @param accessPointName - Identifier for the accessPointName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAccessPointTag()
   */
  public onAccesspoint(accessPointName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:s3express:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:accesspoint/${ accessPointName }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-tagging.html#example-user-policy-request-tag
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
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
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-tagging.html#example-user-policy-resource-tag
   *
   * Applies to resource types:
   * - bucket
   * - accesspoint
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
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-tagging.html#example-user-policy-tag-keys
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
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
   * Filters access by the network origin (Internet or VPC)
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointScope()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointScope()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointScope()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccessPointNetworkOrigin(value: string | string[], operator?: Operator | string) {
    return this.if(`AccessPointNetworkOrigin`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the access point
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-db-tagging.html#example-access-points-db-policy-bucket-tag
   *
   * Applies to resource types:
   * - accesspoint
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccessPointTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`AccessPointTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by AWS Local Zone network border group(s) provided in this condition key
   *
   * Applies to actions:
   * - .toCreateSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAllAccessRestrictedToLocalZoneGroup(value: string | string[], operator?: Operator | string) {
    return this.if(`AllAccessRestrictedToLocalZoneGroup`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the bucket
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-tagging.html#example-policy-bucket-tag
   *
   * Applies to resource types:
   * - bucket
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifBucketTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`BucketTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the AWS Account ID that owns the access point
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointScope()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointScope()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointScope()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDataAccessPointAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`DataAccessPointAccount`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by an access point Amazon Resource Name (ARN)
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointScope()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointScope()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointScope()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifDataAccessPointArn(value: string | string[], operator?: Operator | string) {
    return this.if(`DataAccessPointArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by a specific Availability Zone or Local Zone ID
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-express-zonal-policy-keys.html#example-location-name
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLocationName(value: string | string[], operator?: Operator | string) {
    return this.if(`LocationName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the permission requested by Access Point Scope configuration, such as GetObject, PutObject
   *
   * Applies to actions:
   * - .toCreateSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPermissions(value: string | string[], operator?: Operator | string) {
    return this.if(`Permissions`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the resource owner AWS account ID
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-express-zonal-policy-keys.html#example-object-resource-account
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
   * - .toCreateSession()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointScope()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointScope()
   * - .toGetBucketPolicy()
   * - .toGetEncryptionConfiguration()
   * - .toGetLifecycleConfiguration()
   * - .toListAccessPointsForDirectoryBuckets()
   * - .toListAllMyDirectoryBuckets()
   * - .toListTagsForResource()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointScope()
   * - .toPutBucketPolicy()
   * - .toPutEncryptionConfiguration()
   * - .toPutLifecycleConfiguration()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceAccount`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the permission requested by CreateSession API, such as ReadOnly and ReadWrite
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-express-zonal-policy-keys.html#example-session-mode
   *
   * Applies to actions:
   * - .toCreateSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSessionMode(value: string | string[], operator?: Operator | string) {
    return this.if(`SessionMode`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the TLS version used by the client
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
   * - .toCreateSession()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointScope()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointScope()
   * - .toGetBucketPolicy()
   * - .toGetEncryptionConfiguration()
   * - .toGetLifecycleConfiguration()
   * - .toListAccessPointsForDirectoryBuckets()
   * - .toListAllMyDirectoryBuckets()
   * - .toListTagsForResource()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointScope()
   * - .toPutBucketPolicy()
   * - .toPutEncryptionConfiguration()
   * - .toPutLifecycleConfiguration()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifTlsVersion(value: number | number[], operator?: Operator | string) {
    return this.if(`TlsVersion`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by authentication method
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
   * - .toCreateSession()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointScope()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointScope()
   * - .toGetBucketPolicy()
   * - .toGetEncryptionConfiguration()
   * - .toGetLifecycleConfiguration()
   * - .toListAccessPointsForDirectoryBuckets()
   * - .toListAllMyDirectoryBuckets()
   * - .toListTagsForResource()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointScope()
   * - .toPutBucketPolicy()
   * - .toPutEncryptionConfiguration()
   * - .toPutLifecycleConfiguration()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthType(value: string | string[], operator?: Operator | string) {
    return this.if(`authType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the age in milliseconds of the request signature
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toCreateSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifSignatureAge(value: number | number[], operator?: Operator | string) {
    return this.if(`signatureAge`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the AWS Signature Version used on the request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
   * - .toCreateSession()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointScope()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointScope()
   * - .toGetBucketPolicy()
   * - .toGetEncryptionConfiguration()
   * - .toGetLifecycleConfiguration()
   * - .toListAccessPointsForDirectoryBuckets()
   * - .toListAllMyDirectoryBuckets()
   * - .toListTagsForResource()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointScope()
   * - .toPutBucketPolicy()
   * - .toPutEncryptionConfiguration()
   * - .toPutLifecycleConfiguration()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSignatureversion(value: string | string[], operator?: Operator | string) {
    return this.if(`signatureversion`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by unsigned content in your bucket
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
   * - .toCreateSession()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointScope()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointScope()
   * - .toGetBucketPolicy()
   * - .toGetEncryptionConfiguration()
   * - .toGetLifecycleConfiguration()
   * - .toListAccessPointsForDirectoryBuckets()
   * - .toListAllMyDirectoryBuckets()
   * - .toListTagsForResource()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointScope()
   * - .toPutBucketPolicy()
   * - .toPutEncryptionConfiguration()
   * - .toPutLifecycleConfiguration()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzContentSha256(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-content-sha256`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by server-side encryption
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-data-protection.html
   *
   * Applies to actions:
   * - .toCreateSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzServerSideEncryption(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-server-side-encryption`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by AWS KMS customer managed key for server-side encryption
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-UsingKMSEncryption.html#s3-express-require-sse-kms
   *
   * Applies to actions:
   * - .toCreateSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifXAmzServerSideEncryptionAwsKmsKeyId(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-server-side-encryption-aws-kms-key-id`, value, operator ?? 'ArnLike');
  }
}
