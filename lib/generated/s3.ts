import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [s3](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class S3 extends PolicyStatement {
  public servicePrefix = 's3';

  /**
   * Statement provider for service [s3](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to abort a multipart upload
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointArn()
   * - .ifDataAccessPointAccount()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html
   */
  public toAbortMultipartUpload() {
    return this.to('AbortMultipartUpload');
  }

  /**
   * Grants permission to allow circumvention of governance-mode object retention settings
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifRequestObjectTag()
   * - .ifRequestObjectTagKeys()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzAcl()
   * - .ifXAmzContentSha256()
   * - .ifXAmzCopySource()
   * - .ifXAmzGrantFullControl()
   * - .ifXAmzGrantRead()
   * - .ifXAmzGrantReadAcp()
   * - .ifXAmzGrantWrite()
   * - .ifXAmzGrantWriteAcp()
   * - .ifXAmzMetadataDirective()
   * - .ifXAmzServerSideEncryption()
   * - .ifXAmzServerSideEncryptionAwsKmsKeyId()
   * - .ifXAmzStorageClass()
   * - .ifXAmzWebsiteRedirectLocation()
   * - .ifObjectLockMode()
   * - .ifObjectLockRetainUntilDate()
   * - .ifObjectLockRemainingRetentionDays()
   * - .ifObjectLockLegalHold()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-managing.html#object-lock-managing-bypass
   */
  public toBypassGovernanceRetention() {
    return this.to('BypassGovernanceRetention');
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
   * - .ifLocationconstraint()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzAcl()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html
   */
  public toCreateAccessPoint() {
    return this.to('CreateAccessPoint');
  }

  /**
   * Grants permission to create an object lambda enabled accesspoint
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html
   */
  public toCreateAccessPointForObjectLambda() {
    return this.to('CreateAccessPointForObjectLambda');
  }

  /**
   * Grants permission to create a new bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifLocationconstraint()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzAcl()
   * - .ifXAmzContentSha256()
   * - .ifXAmzGrantFullControl()
   * - .ifXAmzGrantRead()
   * - .ifXAmzGrantReadAcp()
   * - .ifXAmzGrantWrite()
   * - .ifXAmzGrantWriteAcp()
   * - .ifXAmzObjectOwnership()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html
   */
  public toCreateBucket() {
    return this.to('CreateBucket');
  }

  /**
   * Grants permission to create a new Amazon S3 Batch Operations job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifRequestJobPriority()
   * - .ifRequestJobOperation()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html
   */
  public toCreateJob() {
    return this.to('CreateJob');
  }

  /**
   * Grants permission to create a new multi region access point
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAwsRequestedRegion()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html
   */
  public toCreateMultiRegionAccessPoint() {
    return this.to('CreateMultiRegionAccessPoint');
  }

  /**
   * Grants permission to delete the access point named in the URI
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointArn()
   * - .ifDataAccessPointAccount()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
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
   * Grants permission to delete the object lambda enabled access point named in the URI
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointArn()
   * - .ifDataAccessPointAccount()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html
   */
  public toDeleteAccessPointForObjectLambda() {
    return this.to('DeleteAccessPointForObjectLambda');
  }

  /**
   * Grants permission to delete the policy on a specified access point
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifDataAccessPointArn()
   * - .ifDataAccessPointAccount()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
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
   * Grants permission to delete the policy on a specified object lambda enabled access point
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifDataAccessPointArn()
   * - .ifDataAccessPointAccount()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicyForObjectLambda.html
   */
  public toDeleteAccessPointPolicyForObjectLambda() {
    return this.to('DeleteAccessPointPolicyForObjectLambda');
  }

  /**
   * Grants permission to delete the bucket named in the URI
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
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
   * - .ifSignatureAge()
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
   * Grants permission to remove the website configuration for a bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html
   */
  public toDeleteBucketWebsite() {
    return this.to('DeleteBucketWebsite');
  }

  /**
   * Grants permission to remove tags from an existing Amazon S3 Batch Operations job
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifExistingJobPriority()
   * - .ifExistingJobOperation()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html
   */
  public toDeleteJobTagging() {
    return this.to('DeleteJobTagging');
  }

  /**
   * Grants permission to delete the multi region access point named in the URI
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAwsRequestedRegion()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html
   */
  public toDeleteMultiRegionAccessPoint() {
    return this.to('DeleteMultiRegionAccessPoint');
  }

  /**
   * Grants permission to remove the null version of an object and insert a delete marker, which becomes the current version of the object
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
   */
  public toDeleteObject() {
    return this.to('DeleteObject');
  }

  /**
   * Grants permission to use the tagging subresource to remove the entire tag set from the specified object
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifExistingObjectTag()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   */
  public toDeleteObjectTagging() {
    return this.to('DeleteObjectTagging');
  }

  /**
   * Grants permission to remove a specific version of an object
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
   */
  public toDeleteObjectVersion() {
    return this.to('DeleteObjectVersion');
  }

  /**
   * Grants permission to remove the entire tag set for a specific version of the object
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifExistingObjectTag()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   */
  public toDeleteObjectVersionTagging() {
    return this.to('DeleteObjectVersionTagging');
  }

  /**
   * Grants permission to delete an existing Amazon S3 Storage Lens configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteStorageLensConfiguration.html
   */
  public toDeleteStorageLensConfiguration() {
    return this.to('DeleteStorageLensConfiguration');
  }

  /**
   * Grants permission to remove tags from an existing Amazon S3 Storage Lens configuration
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteStorageLensConfigurationTagging.html
   */
  public toDeleteStorageLensConfigurationTagging() {
    return this.to('DeleteStorageLensConfigurationTagging');
  }

  /**
   * Grants permission to retrieve the configuration parameters and status for a batch operations job
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html
   */
  public toDescribeJob() {
    return this.to('DescribeJob');
  }

  /**
   * Grants permission to retrieve the configurations for a multi region access point
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestedRegion()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html
   */
  public toDescribeMultiRegionAccessPointOperation() {
    return this.to('DescribeMultiRegionAccessPointOperation');
  }

  /**
   * Grants permission to uses the accelerate subresource to return the Transfer Acceleration state of a bucket, which is either Enabled or Suspended
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html
   */
  public toGetAccelerateConfiguration() {
    return this.to('GetAccelerateConfiguration');
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
   * - .ifSignatureAge()
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
   * Grants permission to retrieve the configuration of the object lambda enabled access point
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointArn()
   * - .ifDataAccessPointAccount()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointConfigurationForObjectLambda.html
   */
  public toGetAccessPointConfigurationForObjectLambda() {
    return this.to('GetAccessPointConfigurationForObjectLambda');
  }

  /**
   * Grants permission to create an object lambda enabled accesspoint
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html
   */
  public toGetAccessPointForObjectLambda() {
    return this.to('GetAccessPointForObjectLambda');
  }

  /**
   * Grants permission to returns the access point policy associated with the specified access point
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
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
   * Grants permission to returns the access point policy associated with the specified object lambda enabled access point
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html
   */
  public toGetAccessPointPolicyForObjectLambda() {
    return this.to('GetAccessPointPolicyForObjectLambda');
  }

  /**
   * Grants permission to return the policy status for a specific access point policy
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyStatus.html
   */
  public toGetAccessPointPolicyStatus() {
    return this.to('GetAccessPointPolicyStatus');
  }

  /**
   * Grants permission to return the policy status for a specific object lambda access point policy
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyStatusForObjectLambda.html
   */
  public toGetAccessPointPolicyStatusForObjectLambda() {
    return this.to('GetAccessPointPolicyStatusForObjectLambda');
  }

  /**
   * Grants permission to retrieve the PublicAccessBlock configuration for an AWS account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html
   */
  public toGetAccountPublicAccessBlock() {
    return this.to('GetAccountPublicAccessBlock');
  }

  /**
   * Grants permission to get an analytics configuration from an Amazon S3 bucket, identified by the analytics configuration ID
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html
   */
  public toGetAnalyticsConfiguration() {
    return this.to('GetAnalyticsConfiguration');
  }

  /**
   * Grants permission to use the acl subresource to return the access control list (ACL) of an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html
   */
  public toGetBucketAcl() {
    return this.to('GetBucketAcl');
  }

  /**
   * Grants permission to return the CORS configuration information set for an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html
   */
  public toGetBucketCORS() {
    return this.to('GetBucketCORS');
  }

  /**
   * Grants permission to return the Region that an Amazon S3 bucket resides in
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html
   */
  public toGetBucketLocation() {
    return this.to('GetBucketLocation');
  }

  /**
   * Grants permission to return the logging status of an Amazon S3 bucket and the permissions users have to view or modify that status
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html
   */
  public toGetBucketLogging() {
    return this.to('GetBucketLogging');
  }

  /**
   * Grants permission to get the notification configuration of an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotification.html
   */
  public toGetBucketNotification() {
    return this.to('GetBucketNotification');
  }

  /**
   * Grants permission to get the Object Lock configuration of an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifSignatureversion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html
   */
  public toGetBucketObjectLockConfiguration() {
    return this.to('GetBucketObjectLockConfiguration');
  }

  /**
   * Grants permission to retrieve ownership controls on a bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketOwnershipControls.html
   */
  public toGetBucketOwnershipControls() {
    return this.to('GetBucketOwnershipControls');
  }

  /**
   * Grants permission to return the policy of the specified bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
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
   * Grants permission to retrieve the policy status for a specific Amazon S3 bucket, which indicates whether the bucket is public
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html
   */
  public toGetBucketPolicyStatus() {
    return this.to('GetBucketPolicyStatus');
  }

  /**
   * Grants permission to retrieve the PublicAccessBlock configuration for an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html
   */
  public toGetBucketPublicAccessBlock() {
    return this.to('GetBucketPublicAccessBlock');
  }

  /**
   * Grants permission to return the request payment configuration for an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html
   */
  public toGetBucketRequestPayment() {
    return this.to('GetBucketRequestPayment');
  }

  /**
   * Grants permission to return the tag set associated with an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html
   */
  public toGetBucketTagging() {
    return this.to('GetBucketTagging');
  }

  /**
   * Grants permission to return the versioning state of an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html
   */
  public toGetBucketVersioning() {
    return this.to('GetBucketVersioning');
  }

  /**
   * Grants permission to return the website configuration for an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html
   */
  public toGetBucketWebsite() {
    return this.to('GetBucketWebsite');
  }

  /**
   * Grants permission to return the default encryption configuration an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
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
   * Grants permission to get an or list all Amazon S3 Intelligent Tiering configuration in a S3 Bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html
   */
  public toGetIntelligentTieringConfiguration() {
    return this.to('GetIntelligentTieringConfiguration');
  }

  /**
   * Grants permission to return an inventory configuration from an Amazon S3 bucket, identified by the inventory configuration ID
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html
   */
  public toGetInventoryConfiguration() {
    return this.to('GetInventoryConfiguration');
  }

  /**
   * Grants permission to return the tag set of an existing Amazon S3 Batch Operations job
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html
   */
  public toGetJobTagging() {
    return this.to('GetJobTagging');
  }

  /**
   * Grants permission to return the lifecycle configuration information set on an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
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
   * Grants permission to get a metrics configuration from an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html
   */
  public toGetMetricsConfiguration() {
    return this.to('GetMetricsConfiguration');
  }

  /**
   * Grants permission to return configuration information about the specified multi region access point
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAwsRequestedRegion()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html
   */
  public toGetMultiRegionAccessPoint() {
    return this.to('GetMultiRegionAccessPoint');
  }

  /**
   * Grants permission to returns the access point policy associated with the specified multi region access point
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAwsRequestedRegion()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicy.html
   */
  public toGetMultiRegionAccessPointPolicy() {
    return this.to('GetMultiRegionAccessPointPolicy');
  }

  /**
   * Grants permission to return the policy status for a specific multi region access point policy
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAwsRequestedRegion()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicyStatus.html
   */
  public toGetMultiRegionAccessPointPolicyStatus() {
    return this.to('GetMultiRegionAccessPointPolicyStatus');
  }

  /**
   * Grants permission to retrieve objects from Amazon S3
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifExistingObjectTag()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
   */
  public toGetObject() {
    return this.to('GetObject');
  }

  /**
   * Grants permission to return the access control list (ACL) of an object
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifExistingObjectTag()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
   */
  public toGetObjectAcl() {
    return this.to('GetObjectAcl');
  }

  /**
   * Grants permission to get an object's current Legal Hold status
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html
   */
  public toGetObjectLegalHold() {
    return this.to('GetObjectLegalHold');
  }

  /**
   * Grants permission to retrieve the retention settings for an object
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html
   */
  public toGetObjectRetention() {
    return this.to('GetObjectRetention');
  }

  /**
   * Grants permission to return the tag set of an object
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifExistingObjectTag()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html
   */
  public toGetObjectTagging() {
    return this.to('GetObjectTagging');
  }

  /**
   * Grants permission to return torrent files from an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html
   */
  public toGetObjectTorrent() {
    return this.to('GetObjectTorrent');
  }

  /**
   * Grants permission to retrieve a specific version of an object
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifExistingObjectTag()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
   */
  public toGetObjectVersion() {
    return this.to('GetObjectVersion');
  }

  /**
   * Grants permission to return the access control list (ACL) of a specific object version
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifExistingObjectTag()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
   */
  public toGetObjectVersionAcl() {
    return this.to('GetObjectVersionAcl');
  }

  /**
   * Grants permission to replicate both unencrypted objects and objects encrypted with SSE-S3 or SSE-KMS
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-config-for-kms-objects.html
   */
  public toGetObjectVersionForReplication() {
    return this.to('GetObjectVersionForReplication');
  }

  /**
   * Grants permission to return the tag set for a specific version of the object
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifExistingObjectTag()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html
   */
  public toGetObjectVersionTagging() {
    return this.to('GetObjectVersionTagging');
  }

  /**
   * Grants permission to get Torrent files about a different version using the versionId subresource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html
   */
  public toGetObjectVersionTorrent() {
    return this.to('GetObjectVersionTorrent');
  }

  /**
   * Grants permission to get the replication configuration information set on an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html
   */
  public toGetReplicationConfiguration() {
    return this.to('GetReplicationConfiguration');
  }

  /**
   * Grants permission to get an Amazon S3 Storage Lens configuration
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetStorageLensConfiguration.html
   */
  public toGetStorageLensConfiguration() {
    return this.to('GetStorageLensConfiguration');
  }

  /**
   * Grants permission to get the tag set of an existing Amazon S3 Storage Lens configuration
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetStorageLensConfigurationTagging.html
   */
  public toGetStorageLensConfigurationTagging() {
    return this.to('GetStorageLensConfigurationTagging');
  }

  /**
   * Grants permission to get an Amazon S3 Storage Lens dashboard
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_dashboard.html
   */
  public toGetStorageLensDashboard() {
    return this.to('GetStorageLensDashboard');
  }

  /**
   * Grants permission to list access points
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html
   */
  public toListAccessPoints() {
    return this.to('ListAccessPoints');
  }

  /**
   * Grants permission to list object lambda enabled accesspoints
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html
   */
  public toListAccessPointsForObjectLambda() {
    return this.to('ListAccessPointsForObjectLambda');
  }

  /**
   * Grants permission to list all buckets owned by the authenticated sender of the request
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html
   */
  public toListAllMyBuckets() {
    return this.to('ListAllMyBuckets');
  }

  /**
   * Grants permission to list some or all of the objects in an Amazon S3 bucket (up to 1000)
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifDelimiter()
   * - .ifMaxKeys()
   * - .ifPrefix()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html
   */
  public toListBucket() {
    return this.to('ListBucket');
  }

  /**
   * Grants permission to list in-progress multipart uploads
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html
   */
  public toListBucketMultipartUploads() {
    return this.to('ListBucketMultipartUploads');
  }

  /**
   * Grants permission to list metadata about all the versions of objects in an Amazon S3 bucket
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifDelimiter()
   * - .ifMaxKeys()
   * - .ifPrefix()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html
   */
  public toListBucketVersions() {
    return this.to('ListBucketVersions');
  }

  /**
   * Grants permission to list current jobs and jobs that have ended recently
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * Grants permission to list multi region access points
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestedRegion()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html
   */
  public toListMultiRegionAccessPoints() {
    return this.to('ListMultiRegionAccessPoints');
  }

  /**
   * Grants permission to list the parts that have been uploaded for a specific multipart upload
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html
   */
  public toListMultipartUploadParts() {
    return this.to('ListMultipartUploadParts');
  }

  /**
   * Grants permission to list Amazon S3 Storage Lens configurations
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListStorageLensConfigurations.html
   */
  public toListStorageLensConfigurations() {
    return this.to('ListStorageLensConfigurations');
  }

  /**
   * Grants permission to change replica ownership
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html#repl-ownership-add-role-permission
   */
  public toObjectOwnerOverrideToBucketOwner() {
    return this.to('ObjectOwnerOverrideToBucketOwner');
  }

  /**
   * Grants permission to use the accelerate subresource to set the Transfer Acceleration state of an existing S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html
   */
  public toPutAccelerateConfiguration() {
    return this.to('PutAccelerateConfiguration');
  }

  /**
   * Grants permission to set the configuration of the object lambda enabled access point
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointArn()
   * - .ifDataAccessPointAccount()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointConfigurationForObjectLambda.html
   */
  public toPutAccessPointConfigurationForObjectLambda() {
    return this.to('PutAccessPointConfigurationForObjectLambda');
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
   * - .ifSignatureAge()
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
   * Grants permission to associate an access policy with a specified object lambda enabled access point
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicyForObjectLambda.html
   */
  public toPutAccessPointPolicyForObjectLambda() {
    return this.to('PutAccessPointPolicyForObjectLambda');
  }

  /**
   * Grants permission to create or modify the PublicAccessBlock configuration for an AWS account
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html
   */
  public toPutAccountPublicAccessBlock() {
    return this.to('PutAccountPublicAccessBlock');
  }

  /**
   * Grants permission to set an analytics configuration for the bucket, specified by the analytics configuration ID
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html
   */
  public toPutAnalyticsConfiguration() {
    return this.to('PutAnalyticsConfiguration');
  }

  /**
   * Grants permission to set the permissions on an existing bucket using access control lists (ACLs)
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzAcl()
   * - .ifXAmzContentSha256()
   * - .ifXAmzGrantFullControl()
   * - .ifXAmzGrantRead()
   * - .ifXAmzGrantReadAcp()
   * - .ifXAmzGrantWrite()
   * - .ifXAmzGrantWriteAcp()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html
   */
  public toPutBucketAcl() {
    return this.to('PutBucketAcl');
  }

  /**
   * Grants permission to set the CORS configuration for an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html
   */
  public toPutBucketCORS() {
    return this.to('PutBucketCORS');
  }

  /**
   * Grants permission to set the logging parameters for an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLogging.html
   */
  public toPutBucketLogging() {
    return this.to('PutBucketLogging');
  }

  /**
   * Grants permission to receive notifications when certain events happen in an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotification.html
   */
  public toPutBucketNotification() {
    return this.to('PutBucketNotification');
  }

  /**
   * Grants permission to put Object Lock configuration on a specific bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   * - .ifSignatureversion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLockConfiguration.html
   */
  public toPutBucketObjectLockConfiguration() {
    return this.to('PutBucketObjectLockConfiguration');
  }

  /**
   * Grants permission to add, replace or delete ownership controls on a bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketOwnershipControls.html
   */
  public toPutBucketOwnershipControls() {
    return this.to('PutBucketOwnershipControls');
  }

  /**
   * Grants permission to add or replace a bucket policy on a bucket
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
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
   * Grants permission to create or modify the PublicAccessBlock configuration for a specific Amazon S3 bucket
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html
   */
  public toPutBucketPublicAccessBlock() {
    return this.to('PutBucketPublicAccessBlock');
  }

  /**
   * Grants permission to set the request payment configuration of a bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketRequestPayment.html
   */
  public toPutBucketRequestPayment() {
    return this.to('PutBucketRequestPayment');
  }

  /**
   * Grants permission to add a set of tags to an existing Amazon S3 bucket
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html
   */
  public toPutBucketTagging() {
    return this.to('PutBucketTagging');
  }

  /**
   * Grants permission to set the versioning state of an existing Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html
   */
  public toPutBucketVersioning() {
    return this.to('PutBucketVersioning');
  }

  /**
   * Grants permission to set the configuration of the website that is specified in the website subresource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html
   */
  public toPutBucketWebsite() {
    return this.to('PutBucketWebsite');
  }

  /**
   * Grants permission to set the encryption configuration for an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
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
   * Grants permission to create new or update or delete an existing Amazon S3 Intelligent Tiering configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketIntelligentTieringConfiguration.html
   */
  public toPutIntelligentTieringConfiguration() {
    return this.to('PutIntelligentTieringConfiguration');
  }

  /**
   * Grants permission to add an inventory configuration to the bucket, identified by the inventory ID
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html
   */
  public toPutInventoryConfiguration() {
    return this.to('PutInventoryConfiguration');
  }

  /**
   * Grants permission to replace tags on an existing Amazon S3 Batch Operations job
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifExistingJobPriority()
   * - .ifExistingJobOperation()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html
   */
  public toPutJobTagging() {
    return this.to('PutJobTagging');
  }

  /**
   * Grants permission to create a new lifecycle configuration for the bucket or replace an existing lifecycle configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
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
   * Grants permission to set or update a metrics configuration for the CloudWatch request metrics from an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html
   */
  public toPutMetricsConfiguration() {
    return this.to('PutMetricsConfiguration');
  }

  /**
   * Grants permission to associate an access policy with a specified multi region access point
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAwsRequestedRegion()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureversion()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPointPolicy.html
   */
  public toPutMultiRegionAccessPointPolicy() {
    return this.to('PutMultiRegionAccessPointPolicy');
  }

  /**
   * Grants permission to add an object to a bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifRequestObjectTag()
   * - .ifRequestObjectTagKeys()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzAcl()
   * - .ifXAmzContentSha256()
   * - .ifXAmzCopySource()
   * - .ifXAmzGrantFullControl()
   * - .ifXAmzGrantRead()
   * - .ifXAmzGrantReadAcp()
   * - .ifXAmzGrantWrite()
   * - .ifXAmzGrantWriteAcp()
   * - .ifXAmzMetadataDirective()
   * - .ifXAmzServerSideEncryption()
   * - .ifXAmzServerSideEncryptionAwsKmsKeyId()
   * - .ifXAmzStorageClass()
   * - .ifXAmzWebsiteRedirectLocation()
   * - .ifObjectLockMode()
   * - .ifObjectLockRetainUntilDate()
   * - .ifObjectLockRemainingRetentionDays()
   * - .ifObjectLockLegalHold()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html
   */
  public toPutObject() {
    return this.to('PutObject');
  }

  /**
   * Grants permission to set the access control list (ACL) permissions for new or existing objects in an S3 bucket
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifExistingObjectTag()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzAcl()
   * - .ifXAmzContentSha256()
   * - .ifXAmzGrantFullControl()
   * - .ifXAmzGrantRead()
   * - .ifXAmzGrantReadAcp()
   * - .ifXAmzGrantWrite()
   * - .ifXAmzGrantWriteAcp()
   * - .ifXAmzStorageClass()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
   */
  public toPutObjectAcl() {
    return this.to('PutObjectAcl');
  }

  /**
   * Grants permission to apply a Legal Hold configuration to the specified object
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifObjectLockLegalHold()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLegalHold.html
   */
  public toPutObjectLegalHold() {
    return this.to('PutObjectLegalHold');
  }

  /**
   * Grants permission to place an Object Retention configuration on an object
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifObjectLockMode()
   * - .ifObjectLockRetainUntilDate()
   * - .ifObjectLockRemainingRetentionDays()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html
   */
  public toPutObjectRetention() {
    return this.to('PutObjectRetention');
  }

  /**
   * Grants permission to set the supplied tag-set to an object that already exists in a bucket
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifExistingObjectTag()
   * - .ifRequestObjectTag()
   * - .ifRequestObjectTagKeys()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   */
  public toPutObjectTagging() {
    return this.to('PutObjectTagging');
  }

  /**
   * Grants permission to use the acl subresource to set the access control list (ACL) permissions for an object that already exists in a bucket
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifExistingObjectTag()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifVersionid()
   * - .ifXAmzAcl()
   * - .ifXAmzContentSha256()
   * - .ifXAmzGrantFullControl()
   * - .ifXAmzGrantRead()
   * - .ifXAmzGrantReadAcp()
   * - .ifXAmzGrantWrite()
   * - .ifXAmzGrantWriteAcp()
   * - .ifXAmzStorageClass()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
   */
  public toPutObjectVersionAcl() {
    return this.to('PutObjectVersionAcl');
  }

  /**
   * Grants permission to set the supplied tag-set for a specific version of an object
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifExistingObjectTag()
   * - .ifRequestObjectTag()
   * - .ifRequestObjectTagKeys()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   */
  public toPutObjectVersionTagging() {
    return this.to('PutObjectVersionTagging');
  }

  /**
   * Grants permission to create a new replication configuration or replace an existing one
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html
   */
  public toPutReplicationConfiguration() {
    return this.to('PutReplicationConfiguration');
  }

  /**
   * Grants permission to create or update an Amazon S3 Storage Lens configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutStorageLensConfiguration.html
   */
  public toPutStorageLensConfiguration() {
    return this.to('PutStorageLensConfiguration');
  }

  /**
   * Grants permission to put or replace tags on an existing Amazon S3 Storage Lens configuration
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutStorageLensConfigurationTagging.html
   */
  public toPutStorageLensConfigurationTagging() {
    return this.to('PutStorageLensConfigurationTagging');
  }

  /**
   * Grants permission to replicate delete markers to the destination bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html
   */
  public toReplicateDelete() {
    return this.to('ReplicateDelete');
  }

  /**
   * Grants permission to replicate objects and object tags to the destination bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifXAmzServerSideEncryption()
   * - .ifXAmzServerSideEncryptionAwsKmsKeyId()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html
   */
  public toReplicateObject() {
    return this.to('ReplicateObject');
  }

  /**
   * Grants permission to replicate object tags to the destination bucket
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html
   */
  public toReplicateTags() {
    return this.to('ReplicateTags');
  }

  /**
   * Grants permission to restore an archived copy of an object back into Amazon S3
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html
   */
  public toRestoreObject() {
    return this.to('RestoreObject');
  }

  /**
   * Grants permission to update the priority of an existing job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifRequestJobPriority()
   * - .ifExistingJobPriority()
   * - .ifExistingJobOperation()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html
   */
  public toUpdateJobPriority() {
    return this.to('UpdateJobPriority');
  }

  /**
   * Grants permission to update the status for the specified job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   * - .ifExistingJobPriority()
   * - .ifExistingJobOperation()
   * - .ifJobSuspendedCause()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html
   */
  public toUpdateJobStatus() {
    return this.to('UpdateJobStatus');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AbortMultipartUpload',
      'CreateAccessPoint',
      'CreateAccessPointForObjectLambda',
      'CreateBucket',
      'CreateJob',
      'CreateMultiRegionAccessPoint',
      'DeleteAccessPoint',
      'DeleteAccessPointForObjectLambda',
      'DeleteBucket',
      'DeleteBucketWebsite',
      'DeleteMultiRegionAccessPoint',
      'DeleteObject',
      'DeleteObjectVersion',
      'DeleteStorageLensConfiguration',
      'PutAccelerateConfiguration',
      'PutAccessPointConfigurationForObjectLambda',
      'PutAnalyticsConfiguration',
      'PutBucketCORS',
      'PutBucketLogging',
      'PutBucketNotification',
      'PutBucketObjectLockConfiguration',
      'PutBucketOwnershipControls',
      'PutBucketRequestPayment',
      'PutBucketVersioning',
      'PutBucketWebsite',
      'PutEncryptionConfiguration',
      'PutIntelligentTieringConfiguration',
      'PutInventoryConfiguration',
      'PutLifecycleConfiguration',
      'PutMetricsConfiguration',
      'PutObject',
      'PutObjectLegalHold',
      'PutObjectRetention',
      'PutReplicationConfiguration',
      'PutStorageLensConfiguration',
      'ReplicateDelete',
      'ReplicateObject',
      'RestoreObject',
      'UpdateJobPriority',
      'UpdateJobStatus'
    ],
    'Permissions management': [
      'BypassGovernanceRetention',
      'DeleteAccessPointPolicy',
      'DeleteAccessPointPolicyForObjectLambda',
      'DeleteBucketPolicy',
      'ObjectOwnerOverrideToBucketOwner',
      'PutAccessPointPolicy',
      'PutAccessPointPolicyForObjectLambda',
      'PutAccountPublicAccessBlock',
      'PutBucketAcl',
      'PutBucketPolicy',
      'PutBucketPublicAccessBlock',
      'PutMultiRegionAccessPointPolicy',
      'PutObjectAcl',
      'PutObjectVersionAcl'
    ],
    Tagging: [
      'DeleteJobTagging',
      'DeleteObjectTagging',
      'DeleteObjectVersionTagging',
      'DeleteStorageLensConfigurationTagging',
      'PutBucketTagging',
      'PutJobTagging',
      'PutObjectTagging',
      'PutObjectVersionTagging',
      'PutStorageLensConfigurationTagging',
      'ReplicateTags'
    ],
    Read: [
      'DescribeJob',
      'DescribeMultiRegionAccessPointOperation',
      'GetAccelerateConfiguration',
      'GetAccessPoint',
      'GetAccessPointConfigurationForObjectLambda',
      'GetAccessPointForObjectLambda',
      'GetAccessPointPolicy',
      'GetAccessPointPolicyForObjectLambda',
      'GetAccessPointPolicyStatus',
      'GetAccessPointPolicyStatusForObjectLambda',
      'GetAccountPublicAccessBlock',
      'GetAnalyticsConfiguration',
      'GetBucketAcl',
      'GetBucketCORS',
      'GetBucketLocation',
      'GetBucketLogging',
      'GetBucketNotification',
      'GetBucketObjectLockConfiguration',
      'GetBucketOwnershipControls',
      'GetBucketPolicy',
      'GetBucketPolicyStatus',
      'GetBucketPublicAccessBlock',
      'GetBucketRequestPayment',
      'GetBucketTagging',
      'GetBucketVersioning',
      'GetBucketWebsite',
      'GetEncryptionConfiguration',
      'GetIntelligentTieringConfiguration',
      'GetInventoryConfiguration',
      'GetJobTagging',
      'GetLifecycleConfiguration',
      'GetMetricsConfiguration',
      'GetMultiRegionAccessPoint',
      'GetMultiRegionAccessPointPolicy',
      'GetMultiRegionAccessPointPolicyStatus',
      'GetObject',
      'GetObjectAcl',
      'GetObjectLegalHold',
      'GetObjectRetention',
      'GetObjectTagging',
      'GetObjectTorrent',
      'GetObjectVersion',
      'GetObjectVersionAcl',
      'GetObjectVersionForReplication',
      'GetObjectVersionTagging',
      'GetObjectVersionTorrent',
      'GetReplicationConfiguration',
      'GetStorageLensConfiguration',
      'GetStorageLensConfigurationTagging',
      'GetStorageLensDashboard'
    ],
    List: [
      'ListAccessPoints',
      'ListAccessPointsForObjectLambda',
      'ListAllMyBuckets',
      'ListBucket',
      'ListBucketMultipartUploads',
      'ListBucketVersions',
      'ListJobs',
      'ListMultiRegionAccessPoints',
      'ListMultipartUploadParts',
      'ListStorageLensConfigurations'
    ]
  };

  /**
   * Adds a resource of type accesspoint to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html
   *
   * @param accessPointName - Identifier for the accessPointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAccesspoint(accessPointName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:s3:${ region || '*' }:${ account || '*' }:accesspoint/${ accessPointName }`);
  }

  /**
   * Adds a resource of type bucket to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html
   *
   * @param bucketName - Identifier for the bucketName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBucket(bucketName: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:s3:::${ bucketName }`);
  }

  /**
   * Adds a resource of type object to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html
   *
   * @param bucketName - Identifier for the bucketName.
   * @param objectName - Identifier for the objectName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onObject(bucketName: string, objectName: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:s3:::${ bucketName }/${ objectName }`);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onJob(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:s3:${ region || '*' }:${ account || '*' }:job/${ jobId }`);
  }

  /**
   * Adds a resource of type storagelensconfiguration to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html
   *
   * @param configId - Identifier for the configId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStoragelensconfiguration(configId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:s3:${ region || '*' }:${ account || '*' }:storage-lens/${ configId }`);
  }

  /**
   * Adds a resource of type objectlambdaaccesspoint to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/transforming-objects.html
   *
   * @param accessPointName - Identifier for the accessPointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onObjectlambdaaccesspoint(accessPointName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:s3-object-lambda:${ region || '*' }:${ account || '*' }:accesspoint/${ accessPointName }`);
  }

  /**
   * Adds a resource of type multiregionaccesspoint to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/MultiRegionAccessPointRequests.html
   *
   * @param accessPointAlias - Identifier for the accessPointAlias.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onMultiregionaccesspoint(accessPointAlias: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:s3::${ account || '*' }:accesspoint/${ accessPointAlias }`);
  }

  /**
   * Adds a resource of type multiregionaccesspointrequestarn to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/MultiRegionAccessPointRequests.html
   *
   * @param operation - Identifier for the operation.
   * @param token - Identifier for the token.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onMultiregionaccesspointrequestarn(operation: string, token: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:s3:us-west-2:${ account || '*' }:async-request/mrap/${ operation }/${ token }`);
  }

  /**
   * Filters access by the network origin (Internet or VPC)
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toBypassGovernanceRetention()
   * - .toCreateAccessPoint()
   * - .toCreateAccessPointForObjectLambda()
   * - .toCreateMultiRegionAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointForObjectLambda()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointPolicyForObjectLambda()
   * - .toDeleteMultiRegionAccessPoint()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointConfigurationForObjectLambda()
   * - .toGetAccessPointForObjectLambda()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyForObjectLambda()
   * - .toGetAccessPointPolicyStatus()
   * - .toGetAccessPointPolicyStatusForObjectLambda()
   * - .toGetMultiRegionAccessPoint()
   * - .toGetMultiRegionAccessPointPolicy()
   * - .toGetMultiRegionAccessPointPolicyStatus()
   * - .toGetObject()
   * - .toGetObjectAcl()
   * - .toGetObjectLegalHold()
   * - .toGetObjectRetention()
   * - .toGetObjectTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionAcl()
   * - .toGetObjectVersionTagging()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListMultipartUploadParts()
   * - .toPutAccessPointConfigurationForObjectLambda()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointPolicyForObjectLambda()
   * - .toPutMultiRegionAccessPointPolicy()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectLegalHold()
   * - .toPutObjectRetention()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   * - .toRestoreObject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccessPointNetworkOrigin(value: string | string[], operator?: Operator | string) {
    return this.if(`AccessPointNetworkOrigin`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the AWS Account ID that owns the access point
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toBypassGovernanceRetention()
   * - .toCreateAccessPoint()
   * - .toCreateAccessPointForObjectLambda()
   * - .toCreateMultiRegionAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointForObjectLambda()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointPolicyForObjectLambda()
   * - .toDeleteMultiRegionAccessPoint()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointConfigurationForObjectLambda()
   * - .toGetAccessPointForObjectLambda()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyForObjectLambda()
   * - .toGetAccessPointPolicyStatus()
   * - .toGetAccessPointPolicyStatusForObjectLambda()
   * - .toGetMultiRegionAccessPoint()
   * - .toGetMultiRegionAccessPointPolicy()
   * - .toGetMultiRegionAccessPointPolicyStatus()
   * - .toGetObject()
   * - .toGetObjectAcl()
   * - .toGetObjectLegalHold()
   * - .toGetObjectRetention()
   * - .toGetObjectTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionAcl()
   * - .toGetObjectVersionTagging()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListMultipartUploadParts()
   * - .toPutAccessPointConfigurationForObjectLambda()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointPolicyForObjectLambda()
   * - .toPutMultiRegionAccessPointPolicy()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectLegalHold()
   * - .toPutObjectRetention()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   * - .toRestoreObject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDataAccessPointAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`DataAccessPointAccount`, value, operator || 'StringLike');
  }

  /**
   * Filters access by an access point Amazon Resource Name (ARN)
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toBypassGovernanceRetention()
   * - .toCreateAccessPoint()
   * - .toCreateAccessPointForObjectLambda()
   * - .toCreateMultiRegionAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointForObjectLambda()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointPolicyForObjectLambda()
   * - .toDeleteMultiRegionAccessPoint()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointConfigurationForObjectLambda()
   * - .toGetAccessPointForObjectLambda()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyForObjectLambda()
   * - .toGetAccessPointPolicyStatus()
   * - .toGetAccessPointPolicyStatusForObjectLambda()
   * - .toGetMultiRegionAccessPoint()
   * - .toGetMultiRegionAccessPointPolicy()
   * - .toGetMultiRegionAccessPointPolicyStatus()
   * - .toGetObject()
   * - .toGetObjectAcl()
   * - .toGetObjectLegalHold()
   * - .toGetObjectRetention()
   * - .toGetObjectTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionAcl()
   * - .toGetObjectVersionTagging()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListMultipartUploadParts()
   * - .toPutAccessPointConfigurationForObjectLambda()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointPolicyForObjectLambda()
   * - .toPutMultiRegionAccessPointPolicy()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectLegalHold()
   * - .toPutObjectRetention()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   * - .toRestoreObject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDataAccessPointArn(value: string | string[], operator?: Operator | string) {
    return this.if(`DataAccessPointArn`, value, operator || 'StringLike');
  }

  /**
   * Filters access by operation to updating the job priority
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-job-tags-examples.html
   *
   * Applies to actions:
   * - .toDeleteJobTagging()
   * - .toPutJobTagging()
   * - .toUpdateJobPriority()
   * - .toUpdateJobStatus()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExistingJobOperation(value: string | string[], operator?: Operator | string) {
    return this.if(`ExistingJobOperation`, value, operator || 'StringLike');
  }

  /**
   * Filters access by priority range to cancelling existing jobs
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-job-tags-examples.html
   *
   * Applies to actions:
   * - .toDeleteJobTagging()
   * - .toPutJobTagging()
   * - .toUpdateJobPriority()
   * - .toUpdateJobStatus()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifExistingJobPriority(value: number | number[], operator?: Operator | string) {
    return this.if(`ExistingJobPriority`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by existing object tag key and value
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies
   *
   * Applies to actions:
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersionTagging()
   * - .toGetObject()
   * - .toGetObjectAcl()
   * - .toGetObjectTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionAcl()
   * - .toGetObjectVersionTagging()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   *
   * @param key The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExistingObjectTag(key: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ExistingObjectTag/${ key }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a specific job suspended cause (for example, AWAITING_CONFIRMATION) to cancelling suspended jobs
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-job-tags-examples.html
   *
   * Applies to actions:
   * - .toUpdateJobStatus()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifJobSuspendedCause(value: string | string[], operator?: Operator | string) {
    return this.if(`JobSuspendedCause`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a specific Region
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#condition-key-bucket-ops-1
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLocationConstraint(value: string | string[], operator?: Operator | string) {
    return this.if(`LocationConstraint`, value, operator || 'StringLike');
  }

  /**
   * Filters access by operation to creating jobs
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-job-tags-examples.html
   *
   * Applies to actions:
   * - .toCreateJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestJobOperation(value: string | string[], operator?: Operator | string) {
    return this.if(`RequestJobOperation`, value, operator || 'StringLike');
  }

  /**
   * Filters access by priority range to creating new jobs
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-job-tags-examples.html
   *
   * Applies to actions:
   * - .toCreateJob()
   * - .toUpdateJobPriority()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifRequestJobPriority(value: number | number[], operator?: Operator | string) {
    return this.if(`RequestJobPriority`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the tag keys and values to be added to objects
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toPutObject()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionTagging()
   *
   * @param key The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestObjectTag(key: string, value: string | string[], operator?: Operator | string) {
    return this.if(`RequestObjectTag/${ key }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys to be added to objects
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toPutObject()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionTagging()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestObjectTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`RequestObjectTagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the resource owner AWS account ID
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#example-object-resource-account
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toBypassGovernanceRetention()
   * - .toCreateAccessPoint()
   * - .toCreateAccessPointForObjectLambda()
   * - .toCreateBucket()
   * - .toCreateJob()
   * - .toCreateMultiRegionAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointForObjectLambda()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointPolicyForObjectLambda()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toDeleteBucketWebsite()
   * - .toDeleteJobTagging()
   * - .toDeleteMultiRegionAccessPoint()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toDeleteStorageLensConfiguration()
   * - .toDeleteStorageLensConfigurationTagging()
   * - .toDescribeJob()
   * - .toDescribeMultiRegionAccessPointOperation()
   * - .toGetAccelerateConfiguration()
   * - .toGetAccessPoint()
   * - .toGetAccessPointConfigurationForObjectLambda()
   * - .toGetAccessPointForObjectLambda()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyForObjectLambda()
   * - .toGetAccessPointPolicyStatus()
   * - .toGetAccessPointPolicyStatusForObjectLambda()
   * - .toGetAccountPublicAccessBlock()
   * - .toGetAnalyticsConfiguration()
   * - .toGetBucketAcl()
   * - .toGetBucketCORS()
   * - .toGetBucketLogging()
   * - .toGetBucketNotification()
   * - .toGetBucketObjectLockConfiguration()
   * - .toGetBucketOwnershipControls()
   * - .toGetBucketPolicy()
   * - .toGetBucketPolicyStatus()
   * - .toGetBucketPublicAccessBlock()
   * - .toGetBucketRequestPayment()
   * - .toGetBucketTagging()
   * - .toGetBucketVersioning()
   * - .toGetBucketWebsite()
   * - .toGetEncryptionConfiguration()
   * - .toGetIntelligentTieringConfiguration()
   * - .toGetInventoryConfiguration()
   * - .toGetJobTagging()
   * - .toGetLifecycleConfiguration()
   * - .toGetMetricsConfiguration()
   * - .toGetMultiRegionAccessPoint()
   * - .toGetMultiRegionAccessPointPolicy()
   * - .toGetMultiRegionAccessPointPolicyStatus()
   * - .toGetObject()
   * - .toGetObjectAcl()
   * - .toGetObjectLegalHold()
   * - .toGetObjectRetention()
   * - .toGetObjectTagging()
   * - .toGetObjectTorrent()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionAcl()
   * - .toGetObjectVersionForReplication()
   * - .toGetObjectVersionTagging()
   * - .toGetObjectVersionTorrent()
   * - .toGetReplicationConfiguration()
   * - .toGetStorageLensConfiguration()
   * - .toGetStorageLensConfigurationTagging()
   * - .toGetStorageLensDashboard()
   * - .toListAccessPoints()
   * - .toListAccessPointsForObjectLambda()
   * - .toListAllMyBuckets()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListJobs()
   * - .toListMultiRegionAccessPoints()
   * - .toListMultipartUploadParts()
   * - .toListStorageLensConfigurations()
   * - .toObjectOwnerOverrideToBucketOwner()
   * - .toPutAccelerateConfiguration()
   * - .toPutAccessPointConfigurationForObjectLambda()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointPolicyForObjectLambda()
   * - .toPutAccountPublicAccessBlock()
   * - .toPutAnalyticsConfiguration()
   * - .toPutBucketAcl()
   * - .toPutBucketCORS()
   * - .toPutBucketLogging()
   * - .toPutBucketNotification()
   * - .toPutBucketObjectLockConfiguration()
   * - .toPutBucketOwnershipControls()
   * - .toPutBucketPolicy()
   * - .toPutBucketPublicAccessBlock()
   * - .toPutBucketRequestPayment()
   * - .toPutBucketTagging()
   * - .toPutBucketVersioning()
   * - .toPutBucketWebsite()
   * - .toPutEncryptionConfiguration()
   * - .toPutIntelligentTieringConfiguration()
   * - .toPutInventoryConfiguration()
   * - .toPutJobTagging()
   * - .toPutLifecycleConfiguration()
   * - .toPutMetricsConfiguration()
   * - .toPutMultiRegionAccessPointPolicy()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectLegalHold()
   * - .toPutObjectRetention()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   * - .toPutReplicationConfiguration()
   * - .toPutStorageLensConfiguration()
   * - .toPutStorageLensConfigurationTagging()
   * - .toReplicateDelete()
   * - .toReplicateObject()
   * - .toReplicateTags()
   * - .toRestoreObject()
   * - .toUpdateJobPriority()
   * - .toUpdateJobStatus()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceAccount`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the TLS version used by the client
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toBypassGovernanceRetention()
   * - .toCreateAccessPoint()
   * - .toCreateAccessPointForObjectLambda()
   * - .toCreateBucket()
   * - .toCreateJob()
   * - .toCreateMultiRegionAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointForObjectLambda()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointPolicyForObjectLambda()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toDeleteBucketWebsite()
   * - .toDeleteJobTagging()
   * - .toDeleteMultiRegionAccessPoint()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toDeleteStorageLensConfiguration()
   * - .toDeleteStorageLensConfigurationTagging()
   * - .toDescribeJob()
   * - .toDescribeMultiRegionAccessPointOperation()
   * - .toGetAccelerateConfiguration()
   * - .toGetAccessPoint()
   * - .toGetAccessPointConfigurationForObjectLambda()
   * - .toGetAccessPointForObjectLambda()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyForObjectLambda()
   * - .toGetAccessPointPolicyStatus()
   * - .toGetAccessPointPolicyStatusForObjectLambda()
   * - .toGetAccountPublicAccessBlock()
   * - .toGetAnalyticsConfiguration()
   * - .toGetBucketAcl()
   * - .toGetBucketCORS()
   * - .toGetBucketLogging()
   * - .toGetBucketNotification()
   * - .toGetBucketObjectLockConfiguration()
   * - .toGetBucketOwnershipControls()
   * - .toGetBucketPolicy()
   * - .toGetBucketPolicyStatus()
   * - .toGetBucketPublicAccessBlock()
   * - .toGetBucketRequestPayment()
   * - .toGetBucketTagging()
   * - .toGetBucketVersioning()
   * - .toGetBucketWebsite()
   * - .toGetEncryptionConfiguration()
   * - .toGetIntelligentTieringConfiguration()
   * - .toGetInventoryConfiguration()
   * - .toGetJobTagging()
   * - .toGetLifecycleConfiguration()
   * - .toGetMetricsConfiguration()
   * - .toGetMultiRegionAccessPoint()
   * - .toGetMultiRegionAccessPointPolicy()
   * - .toGetMultiRegionAccessPointPolicyStatus()
   * - .toGetObject()
   * - .toGetObjectAcl()
   * - .toGetObjectLegalHold()
   * - .toGetObjectRetention()
   * - .toGetObjectTagging()
   * - .toGetObjectTorrent()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionAcl()
   * - .toGetObjectVersionForReplication()
   * - .toGetObjectVersionTagging()
   * - .toGetObjectVersionTorrent()
   * - .toGetReplicationConfiguration()
   * - .toGetStorageLensConfiguration()
   * - .toGetStorageLensConfigurationTagging()
   * - .toGetStorageLensDashboard()
   * - .toListAccessPoints()
   * - .toListAccessPointsForObjectLambda()
   * - .toListAllMyBuckets()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListJobs()
   * - .toListMultiRegionAccessPoints()
   * - .toListMultipartUploadParts()
   * - .toListStorageLensConfigurations()
   * - .toObjectOwnerOverrideToBucketOwner()
   * - .toPutAccelerateConfiguration()
   * - .toPutAccessPointConfigurationForObjectLambda()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointPolicyForObjectLambda()
   * - .toPutAccountPublicAccessBlock()
   * - .toPutAnalyticsConfiguration()
   * - .toPutBucketAcl()
   * - .toPutBucketCORS()
   * - .toPutBucketLogging()
   * - .toPutBucketNotification()
   * - .toPutBucketObjectLockConfiguration()
   * - .toPutBucketOwnershipControls()
   * - .toPutBucketPolicy()
   * - .toPutBucketPublicAccessBlock()
   * - .toPutBucketRequestPayment()
   * - .toPutBucketTagging()
   * - .toPutBucketVersioning()
   * - .toPutBucketWebsite()
   * - .toPutEncryptionConfiguration()
   * - .toPutIntelligentTieringConfiguration()
   * - .toPutInventoryConfiguration()
   * - .toPutJobTagging()
   * - .toPutLifecycleConfiguration()
   * - .toPutMetricsConfiguration()
   * - .toPutMultiRegionAccessPointPolicy()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectLegalHold()
   * - .toPutObjectRetention()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   * - .toPutReplicationConfiguration()
   * - .toPutStorageLensConfiguration()
   * - .toPutStorageLensConfigurationTagging()
   * - .toReplicateDelete()
   * - .toReplicateObject()
   * - .toReplicateTags()
   * - .toRestoreObject()
   * - .toUpdateJobPriority()
   * - .toUpdateJobStatus()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifTlsVersion(value: number | number[], operator?: Operator | string) {
    return this.if(`TlsVersion`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by a specific object version
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVersionId(value: string | string[], operator?: Operator | string) {
    return this.if(`VersionId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by authentication method
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toBypassGovernanceRetention()
   * - .toCreateAccessPoint()
   * - .toCreateAccessPointForObjectLambda()
   * - .toCreateBucket()
   * - .toCreateJob()
   * - .toCreateMultiRegionAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointForObjectLambda()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointPolicyForObjectLambda()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toDeleteBucketWebsite()
   * - .toDeleteJobTagging()
   * - .toDeleteMultiRegionAccessPoint()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toDeleteStorageLensConfiguration()
   * - .toDeleteStorageLensConfigurationTagging()
   * - .toDescribeJob()
   * - .toDescribeMultiRegionAccessPointOperation()
   * - .toGetAccelerateConfiguration()
   * - .toGetAccessPoint()
   * - .toGetAccessPointConfigurationForObjectLambda()
   * - .toGetAccessPointForObjectLambda()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyForObjectLambda()
   * - .toGetAccessPointPolicyStatus()
   * - .toGetAccessPointPolicyStatusForObjectLambda()
   * - .toGetAccountPublicAccessBlock()
   * - .toGetAnalyticsConfiguration()
   * - .toGetBucketAcl()
   * - .toGetBucketCORS()
   * - .toGetBucketLogging()
   * - .toGetBucketNotification()
   * - .toGetBucketObjectLockConfiguration()
   * - .toGetBucketOwnershipControls()
   * - .toGetBucketPolicy()
   * - .toGetBucketPolicyStatus()
   * - .toGetBucketPublicAccessBlock()
   * - .toGetBucketRequestPayment()
   * - .toGetBucketTagging()
   * - .toGetBucketVersioning()
   * - .toGetBucketWebsite()
   * - .toGetEncryptionConfiguration()
   * - .toGetIntelligentTieringConfiguration()
   * - .toGetInventoryConfiguration()
   * - .toGetJobTagging()
   * - .toGetLifecycleConfiguration()
   * - .toGetMetricsConfiguration()
   * - .toGetMultiRegionAccessPoint()
   * - .toGetMultiRegionAccessPointPolicy()
   * - .toGetMultiRegionAccessPointPolicyStatus()
   * - .toGetObject()
   * - .toGetObjectAcl()
   * - .toGetObjectLegalHold()
   * - .toGetObjectRetention()
   * - .toGetObjectTagging()
   * - .toGetObjectTorrent()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionAcl()
   * - .toGetObjectVersionForReplication()
   * - .toGetObjectVersionTagging()
   * - .toGetObjectVersionTorrent()
   * - .toGetReplicationConfiguration()
   * - .toGetStorageLensConfiguration()
   * - .toGetStorageLensConfigurationTagging()
   * - .toGetStorageLensDashboard()
   * - .toListAccessPoints()
   * - .toListAccessPointsForObjectLambda()
   * - .toListAllMyBuckets()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListJobs()
   * - .toListMultiRegionAccessPoints()
   * - .toListMultipartUploadParts()
   * - .toListStorageLensConfigurations()
   * - .toObjectOwnerOverrideToBucketOwner()
   * - .toPutAccelerateConfiguration()
   * - .toPutAccessPointConfigurationForObjectLambda()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointPolicyForObjectLambda()
   * - .toPutAccountPublicAccessBlock()
   * - .toPutAnalyticsConfiguration()
   * - .toPutBucketAcl()
   * - .toPutBucketCORS()
   * - .toPutBucketLogging()
   * - .toPutBucketNotification()
   * - .toPutBucketObjectLockConfiguration()
   * - .toPutBucketOwnershipControls()
   * - .toPutBucketPolicy()
   * - .toPutBucketPublicAccessBlock()
   * - .toPutBucketRequestPayment()
   * - .toPutBucketTagging()
   * - .toPutBucketVersioning()
   * - .toPutBucketWebsite()
   * - .toPutEncryptionConfiguration()
   * - .toPutIntelligentTieringConfiguration()
   * - .toPutInventoryConfiguration()
   * - .toPutJobTagging()
   * - .toPutLifecycleConfiguration()
   * - .toPutMetricsConfiguration()
   * - .toPutMultiRegionAccessPointPolicy()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectLegalHold()
   * - .toPutObjectRetention()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   * - .toPutReplicationConfiguration()
   * - .toPutStorageLensConfiguration()
   * - .toPutStorageLensConfigurationTagging()
   * - .toReplicateDelete()
   * - .toReplicateObject()
   * - .toReplicateTags()
   * - .toRestoreObject()
   * - .toUpdateJobPriority()
   * - .toUpdateJobStatus()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthType(value: string | string[], operator?: Operator | string) {
    return this.if(`authType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by delimiter parameter
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/walkthrough1.html
   *
   * Applies to actions:
   * - .toListBucket()
   * - .toListBucketVersions()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDelimiter(value: string | string[], operator?: Operator | string) {
    return this.if(`delimiter`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a specific Region
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#condition-key-bucket-ops-1
   *
   * Applies to actions:
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLocationconstraint(value: string | string[], operator?: Operator | string) {
    return this.if(`locationconstraint`, value, operator || 'StringLike');
  }

  /**
   * Filters access by maximum number of keys returned in a ListBucket request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#example-numeric-condition-operators
   *
   * Applies to actions:
   * - .toListBucket()
   * - .toListBucketVersions()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifMaxKeys(value: number | number[], operator?: Operator | string) {
    return this.if(`max-keys`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by object legal hold status
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-legal-holds
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toPutObject()
   * - .toPutObjectLegalHold()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifObjectLockLegalHold(value: string | string[], operator?: Operator | string) {
    return this.if(`object-lock-legal-hold`, value, operator || 'StringLike');
  }

  /**
   * Filters access by object retention mode (COMPLIANCE or GOVERNANCE)
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toPutObject()
   * - .toPutObjectRetention()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifObjectLockMode(value: string | string[], operator?: Operator | string) {
    return this.if(`object-lock-mode`, value, operator || 'StringLike');
  }

  /**
   * Filters access by remaining object retention days
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-managing.html#object-lock-managing-retention-limits
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toPutObject()
   * - .toPutObjectRetention()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifObjectLockRemainingRetentionDays(value: string | string[], operator?: Operator | string) {
    return this.if(`object-lock-remaining-retention-days`, value, operator || 'StringLike');
  }

  /**
   * Filters access by object retain-until date
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-periods
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toPutObject()
   * - .toPutObjectRetention()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifObjectLockRetainUntilDate(value: string | string[], operator?: Operator | string) {
    return this.if(`object-lock-retain-until-date`, value, operator || 'StringLike');
  }

  /**
   * Filters access by key name prefix
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#condition-key-bucket-ops-2
   *
   * Applies to actions:
   * - .toListBucket()
   * - .toListBucketVersions()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPrefix(value: string | string[], operator?: Operator | string) {
    return this.if(`prefix`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the age in milliseconds of the request signature
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toBypassGovernanceRetention()
   * - .toCreateAccessPoint()
   * - .toCreateAccessPointForObjectLambda()
   * - .toCreateBucket()
   * - .toCreateJob()
   * - .toCreateMultiRegionAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointForObjectLambda()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointPolicyForObjectLambda()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toDeleteBucketWebsite()
   * - .toDeleteJobTagging()
   * - .toDeleteMultiRegionAccessPoint()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toDeleteStorageLensConfiguration()
   * - .toDeleteStorageLensConfigurationTagging()
   * - .toDescribeJob()
   * - .toDescribeMultiRegionAccessPointOperation()
   * - .toGetAccelerateConfiguration()
   * - .toGetAccessPoint()
   * - .toGetAccessPointConfigurationForObjectLambda()
   * - .toGetAccessPointForObjectLambda()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyForObjectLambda()
   * - .toGetAccessPointPolicyStatus()
   * - .toGetAccessPointPolicyStatusForObjectLambda()
   * - .toGetAccountPublicAccessBlock()
   * - .toGetAnalyticsConfiguration()
   * - .toGetBucketAcl()
   * - .toGetBucketCORS()
   * - .toGetBucketLogging()
   * - .toGetBucketNotification()
   * - .toGetBucketObjectLockConfiguration()
   * - .toGetBucketOwnershipControls()
   * - .toGetBucketPolicy()
   * - .toGetBucketPolicyStatus()
   * - .toGetBucketPublicAccessBlock()
   * - .toGetBucketRequestPayment()
   * - .toGetBucketTagging()
   * - .toGetBucketVersioning()
   * - .toGetBucketWebsite()
   * - .toGetEncryptionConfiguration()
   * - .toGetIntelligentTieringConfiguration()
   * - .toGetInventoryConfiguration()
   * - .toGetJobTagging()
   * - .toGetLifecycleConfiguration()
   * - .toGetMetricsConfiguration()
   * - .toGetMultiRegionAccessPoint()
   * - .toGetMultiRegionAccessPointPolicy()
   * - .toGetMultiRegionAccessPointPolicyStatus()
   * - .toGetObject()
   * - .toGetObjectAcl()
   * - .toGetObjectLegalHold()
   * - .toGetObjectRetention()
   * - .toGetObjectTagging()
   * - .toGetObjectTorrent()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionAcl()
   * - .toGetObjectVersionForReplication()
   * - .toGetObjectVersionTagging()
   * - .toGetObjectVersionTorrent()
   * - .toGetReplicationConfiguration()
   * - .toGetStorageLensConfiguration()
   * - .toGetStorageLensConfigurationTagging()
   * - .toGetStorageLensDashboard()
   * - .toListAccessPoints()
   * - .toListAccessPointsForObjectLambda()
   * - .toListAllMyBuckets()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListJobs()
   * - .toListMultiRegionAccessPoints()
   * - .toListMultipartUploadParts()
   * - .toListStorageLensConfigurations()
   * - .toObjectOwnerOverrideToBucketOwner()
   * - .toPutAccelerateConfiguration()
   * - .toPutAccessPointConfigurationForObjectLambda()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointPolicyForObjectLambda()
   * - .toPutAccountPublicAccessBlock()
   * - .toPutAnalyticsConfiguration()
   * - .toPutBucketAcl()
   * - .toPutBucketCORS()
   * - .toPutBucketLogging()
   * - .toPutBucketNotification()
   * - .toPutBucketObjectLockConfiguration()
   * - .toPutBucketOwnershipControls()
   * - .toPutBucketPolicy()
   * - .toPutBucketPublicAccessBlock()
   * - .toPutBucketRequestPayment()
   * - .toPutBucketTagging()
   * - .toPutBucketVersioning()
   * - .toPutBucketWebsite()
   * - .toPutEncryptionConfiguration()
   * - .toPutIntelligentTieringConfiguration()
   * - .toPutInventoryConfiguration()
   * - .toPutJobTagging()
   * - .toPutLifecycleConfiguration()
   * - .toPutMetricsConfiguration()
   * - .toPutMultiRegionAccessPointPolicy()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectLegalHold()
   * - .toPutObjectRetention()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   * - .toPutReplicationConfiguration()
   * - .toPutStorageLensConfiguration()
   * - .toPutStorageLensConfigurationTagging()
   * - .toReplicateDelete()
   * - .toReplicateObject()
   * - .toReplicateTags()
   * - .toRestoreObject()
   * - .toUpdateJobPriority()
   * - .toUpdateJobStatus()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifSignatureAge(value: number | number[], operator?: Operator | string) {
    return this.if(`signatureAge`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the version of AWS Signature used on the request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toBypassGovernanceRetention()
   * - .toCreateAccessPoint()
   * - .toCreateAccessPointForObjectLambda()
   * - .toCreateBucket()
   * - .toCreateJob()
   * - .toCreateMultiRegionAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointForObjectLambda()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointPolicyForObjectLambda()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toDeleteBucketWebsite()
   * - .toDeleteJobTagging()
   * - .toDeleteMultiRegionAccessPoint()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toDeleteStorageLensConfiguration()
   * - .toDeleteStorageLensConfigurationTagging()
   * - .toDescribeJob()
   * - .toDescribeMultiRegionAccessPointOperation()
   * - .toGetAccelerateConfiguration()
   * - .toGetAccessPoint()
   * - .toGetAccessPointConfigurationForObjectLambda()
   * - .toGetAccessPointForObjectLambda()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyForObjectLambda()
   * - .toGetAccessPointPolicyStatus()
   * - .toGetAccessPointPolicyStatusForObjectLambda()
   * - .toGetAccountPublicAccessBlock()
   * - .toGetAnalyticsConfiguration()
   * - .toGetBucketAcl()
   * - .toGetBucketCORS()
   * - .toGetBucketLogging()
   * - .toGetBucketNotification()
   * - .toGetBucketObjectLockConfiguration()
   * - .toGetBucketOwnershipControls()
   * - .toGetBucketPolicy()
   * - .toGetBucketPolicyStatus()
   * - .toGetBucketPublicAccessBlock()
   * - .toGetBucketRequestPayment()
   * - .toGetBucketTagging()
   * - .toGetBucketVersioning()
   * - .toGetBucketWebsite()
   * - .toGetEncryptionConfiguration()
   * - .toGetIntelligentTieringConfiguration()
   * - .toGetInventoryConfiguration()
   * - .toGetJobTagging()
   * - .toGetLifecycleConfiguration()
   * - .toGetMetricsConfiguration()
   * - .toGetMultiRegionAccessPoint()
   * - .toGetMultiRegionAccessPointPolicy()
   * - .toGetMultiRegionAccessPointPolicyStatus()
   * - .toGetObject()
   * - .toGetObjectAcl()
   * - .toGetObjectLegalHold()
   * - .toGetObjectRetention()
   * - .toGetObjectTagging()
   * - .toGetObjectTorrent()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionAcl()
   * - .toGetObjectVersionForReplication()
   * - .toGetObjectVersionTagging()
   * - .toGetObjectVersionTorrent()
   * - .toGetReplicationConfiguration()
   * - .toGetStorageLensConfiguration()
   * - .toGetStorageLensConfigurationTagging()
   * - .toGetStorageLensDashboard()
   * - .toListAccessPoints()
   * - .toListAccessPointsForObjectLambda()
   * - .toListAllMyBuckets()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListJobs()
   * - .toListMultiRegionAccessPoints()
   * - .toListMultipartUploadParts()
   * - .toListStorageLensConfigurations()
   * - .toObjectOwnerOverrideToBucketOwner()
   * - .toPutAccelerateConfiguration()
   * - .toPutAccessPointConfigurationForObjectLambda()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointPolicyForObjectLambda()
   * - .toPutAccountPublicAccessBlock()
   * - .toPutAnalyticsConfiguration()
   * - .toPutBucketAcl()
   * - .toPutBucketCORS()
   * - .toPutBucketLogging()
   * - .toPutBucketNotification()
   * - .toPutBucketObjectLockConfiguration()
   * - .toPutBucketOwnershipControls()
   * - .toPutBucketPolicy()
   * - .toPutBucketPublicAccessBlock()
   * - .toPutBucketRequestPayment()
   * - .toPutBucketTagging()
   * - .toPutBucketVersioning()
   * - .toPutBucketWebsite()
   * - .toPutEncryptionConfiguration()
   * - .toPutIntelligentTieringConfiguration()
   * - .toPutInventoryConfiguration()
   * - .toPutJobTagging()
   * - .toPutLifecycleConfiguration()
   * - .toPutMetricsConfiguration()
   * - .toPutMultiRegionAccessPointPolicy()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectLegalHold()
   * - .toPutObjectRetention()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   * - .toPutReplicationConfiguration()
   * - .toPutStorageLensConfiguration()
   * - .toPutStorageLensConfigurationTagging()
   * - .toReplicateDelete()
   * - .toReplicateObject()
   * - .toReplicateTags()
   * - .toRestoreObject()
   * - .toUpdateJobPriority()
   * - .toUpdateJobStatus()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSignatureversion(value: string | string[], operator?: Operator | string) {
    return this.if(`signatureversion`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a specific object version
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3
   *
   * Applies to actions:
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionAcl()
   * - .toGetObjectVersionTagging()
   * - .toGetObjectVersionTorrent()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVersionid(value: string | string[], operator?: Operator | string) {
    return this.if(`versionid`, value, operator || 'StringLike');
  }

  /**
   * Filters access by canned ACL in the request's x-amz-acl header
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
   * - .toPutBucketAcl()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectVersionAcl()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzAcl(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-acl`, value, operator || 'StringLike');
  }

  /**
   * Filters access by unsigned content in your bucket
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toBypassGovernanceRetention()
   * - .toCreateAccessPoint()
   * - .toCreateAccessPointForObjectLambda()
   * - .toCreateBucket()
   * - .toCreateJob()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointForObjectLambda()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteAccessPointPolicyForObjectLambda()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toDeleteBucketWebsite()
   * - .toDeleteJobTagging()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toDeleteStorageLensConfiguration()
   * - .toDeleteStorageLensConfigurationTagging()
   * - .toDescribeJob()
   * - .toGetAccelerateConfiguration()
   * - .toGetAccessPoint()
   * - .toGetAccessPointConfigurationForObjectLambda()
   * - .toGetAccessPointForObjectLambda()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyForObjectLambda()
   * - .toGetAccessPointPolicyStatus()
   * - .toGetAccessPointPolicyStatusForObjectLambda()
   * - .toGetAccountPublicAccessBlock()
   * - .toGetAnalyticsConfiguration()
   * - .toGetBucketAcl()
   * - .toGetBucketCORS()
   * - .toGetBucketLogging()
   * - .toGetBucketNotification()
   * - .toGetBucketOwnershipControls()
   * - .toGetBucketPolicy()
   * - .toGetBucketPolicyStatus()
   * - .toGetBucketPublicAccessBlock()
   * - .toGetBucketRequestPayment()
   * - .toGetBucketTagging()
   * - .toGetBucketVersioning()
   * - .toGetBucketWebsite()
   * - .toGetEncryptionConfiguration()
   * - .toGetIntelligentTieringConfiguration()
   * - .toGetInventoryConfiguration()
   * - .toGetJobTagging()
   * - .toGetLifecycleConfiguration()
   * - .toGetMetricsConfiguration()
   * - .toGetObject()
   * - .toGetObjectAcl()
   * - .toGetObjectLegalHold()
   * - .toGetObjectRetention()
   * - .toGetObjectTagging()
   * - .toGetObjectTorrent()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionAcl()
   * - .toGetObjectVersionForReplication()
   * - .toGetObjectVersionTagging()
   * - .toGetObjectVersionTorrent()
   * - .toGetReplicationConfiguration()
   * - .toGetStorageLensConfiguration()
   * - .toGetStorageLensConfigurationTagging()
   * - .toGetStorageLensDashboard()
   * - .toListAccessPoints()
   * - .toListAccessPointsForObjectLambda()
   * - .toListAllMyBuckets()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListJobs()
   * - .toListMultipartUploadParts()
   * - .toListStorageLensConfigurations()
   * - .toObjectOwnerOverrideToBucketOwner()
   * - .toPutAccelerateConfiguration()
   * - .toPutAccessPointConfigurationForObjectLambda()
   * - .toPutAccessPointPolicy()
   * - .toPutAccessPointPolicyForObjectLambda()
   * - .toPutAccountPublicAccessBlock()
   * - .toPutAnalyticsConfiguration()
   * - .toPutBucketAcl()
   * - .toPutBucketCORS()
   * - .toPutBucketLogging()
   * - .toPutBucketNotification()
   * - .toPutBucketOwnershipControls()
   * - .toPutBucketPolicy()
   * - .toPutBucketPublicAccessBlock()
   * - .toPutBucketRequestPayment()
   * - .toPutBucketTagging()
   * - .toPutBucketVersioning()
   * - .toPutBucketWebsite()
   * - .toPutEncryptionConfiguration()
   * - .toPutIntelligentTieringConfiguration()
   * - .toPutInventoryConfiguration()
   * - .toPutJobTagging()
   * - .toPutLifecycleConfiguration()
   * - .toPutMetricsConfiguration()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectLegalHold()
   * - .toPutObjectRetention()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   * - .toPutReplicationConfiguration()
   * - .toPutStorageLensConfiguration()
   * - .toPutStorageLensConfigurationTagging()
   * - .toReplicateDelete()
   * - .toReplicateObject()
   * - .toReplicateTags()
   * - .toRestoreObject()
   * - .toUpdateJobPriority()
   * - .toUpdateJobStatus()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzContentSha256(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-content-sha256`, value, operator || 'StringLike');
  }

  /**
   * Filters access by copy source bucket, prefix, or object in the copy object requests
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#putobject-limit-copy-source-3
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toPutObject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzCopySource(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-copy-source`, value, operator || 'StringLike');
  }

  /**
   * Filters access by x-amz-grant-full-control (full control) header
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toCreateBucket()
   * - .toPutBucketAcl()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectVersionAcl()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzGrantFullControl(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-grant-full-control`, value, operator || 'StringLike');
  }

  /**
   * Filters access by x-amz-grant-read (read access) header
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toCreateBucket()
   * - .toPutBucketAcl()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectVersionAcl()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzGrantRead(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-grant-read`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the x-amz-grant-read-acp (read permissions for the ACL) header
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toCreateBucket()
   * - .toPutBucketAcl()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectVersionAcl()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzGrantReadAcp(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-grant-read-acp`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the x-amz-grant-write (write access) header
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toCreateBucket()
   * - .toPutBucketAcl()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectVersionAcl()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzGrantWrite(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-grant-write`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the x-amz-grant-write-acp (write permissions for the ACL) header
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toCreateBucket()
   * - .toPutBucketAcl()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectVersionAcl()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzGrantWriteAcp(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-grant-write-acp`, value, operator || 'StringLike');
  }

  /**
   * Filters access by object metadata behavior (COPY or REPLACE) when objects are copied
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toPutObject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzMetadataDirective(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-metadata-directive`, value, operator || 'StringLike');
  }

  /**
   * Filters access by Object Ownership
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/ensure-object-ownership.html#object-ownership-requiring-bucket-owner-enforced
   *
   * Applies to actions:
   * - .toCreateBucket()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzObjectOwnership(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-object-ownership`, value, operator || 'StringLike');
  }

  /**
   * Filters access by server-side encryption
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toPutObject()
   * - .toReplicateObject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzServerSideEncryption(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-server-side-encryption`, value, operator || 'StringLike');
  }

  /**
   * Filters access by AWS KMS customer managed CMK for server-side encryption
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html#require-sse-kms
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toPutObject()
   * - .toReplicateObject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzServerSideEncryptionAwsKmsKeyId(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-server-side-encryption-aws-kms-key-id`, value, operator || 'StringLike');
  }

  /**
   * Filters access by storage class
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-howtoset
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectVersionAcl()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzStorageClass(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-storage-class`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a specific website redirect location for buckets that are configured as static websites
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html#page-redirect-using-rest-api
   *
   * Applies to actions:
   * - .toBypassGovernanceRetention()
   * - .toPutObject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzWebsiteRedirectLocation(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-website-redirect-location`, value, operator || 'StringLike');
  }
}
