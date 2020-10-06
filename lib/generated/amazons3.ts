import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [s3](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class S3 extends PolicyStatement {
  public servicePrefix = 's3';

  /**
   * Statement provider for service [s3](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html
   */
  public toAbortMultipartUpload() {
    this.to('s3:AbortMultipartUpload');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
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
    this.to('s3:BypassGovernanceRetention');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzAcl()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html
   */
  public toCreateAccessPoint() {
    this.to('s3:CreateAccessPoint');
    return this;
  }

  /**
   * Grants permission to create a new bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifLocationconstraint()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzAcl()
   * - .ifXAmzContentSha256()
   * - .ifXAmzGrantFullControl()
   * - .ifXAmzGrantRead()
   * - .ifXAmzGrantReadAcp()
   * - .ifXAmzGrantWrite()
   * - .ifXAmzGrantWriteAcp()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html
   */
  public toCreateBucket() {
    this.to('s3:CreateBucket');
    return this;
  }

  /**
   * Grants permission to create a new Amazon S3 Batch Operations job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
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
    this.to('s3:CreateJob');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html
   */
  public toDeleteAccessPoint() {
    this.to('s3:DeleteAccessPoint');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html
   */
  public toDeleteAccessPointPolicy() {
    this.to('s3:DeleteAccessPointPolicy');
    return this;
  }

  /**
   * Grants permission to delete the bucket named in the URI
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html
   */
  public toDeleteBucket() {
    this.to('s3:DeleteBucket');
    return this;
  }

  /**
   * Grants permission to delete the policy on a specified bucket
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html
   */
  public toDeleteBucketPolicy() {
    this.to('s3:DeleteBucketPolicy');
    return this;
  }

  /**
   * Grants permission to remove the website configuration for a bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html
   */
  public toDeleteBucketWebsite() {
    this.to('s3:DeleteBucketWebsite');
    return this;
  }

  /**
   * Grants permission to remove tags from an existing Amazon S3 Batch Operations job
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   * - .ifExistingJobPriority()
   * - .ifExistingJobOperation()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html
   */
  public toDeleteJobTagging() {
    this.to('s3:DeleteJobTagging');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
   */
  public toDeleteObject() {
    this.to('s3:DeleteObject');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   */
  public toDeleteObjectTagging() {
    this.to('s3:DeleteObjectTagging');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
   */
  public toDeleteObjectVersion() {
    this.to('s3:DeleteObjectVersion');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   */
  public toDeleteObjectVersionTagging() {
    this.to('s3:DeleteObjectVersionTagging');
    return this;
  }

  /**
   * Grants permission to retrieve the configuration parameters and status for a batch operations job
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html
   */
  public toDescribeJob() {
    this.to('s3:DescribeJob');
    return this;
  }

  /**
   * Grants permission to uses the accelerate subresource to return the Transfer Acceleration state of a bucket, which is either Enabled or Suspended
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html
   */
  public toGetAccelerateConfiguration() {
    this.to('s3:GetAccelerateConfiguration');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html
   */
  public toGetAccessPoint() {
    this.to('s3:GetAccessPoint');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html
   */
  public toGetAccessPointPolicy() {
    this.to('s3:GetAccessPointPolicy');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyStatus.html
   */
  public toGetAccessPointPolicyStatus() {
    this.to('s3:GetAccessPointPolicyStatus');
    return this;
  }

  /**
   * Grants permission to retrieve the PublicAccessBlock configuration for an AWS account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html
   */
  public toGetAccountPublicAccessBlock() {
    this.to('s3:GetAccountPublicAccessBlock');
    return this;
  }

  /**
   * Grants permission to get an analytics configuration from an Amazon S3 bucket, identified by the analytics configuration ID
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html
   */
  public toGetAnalyticsConfiguration() {
    this.to('s3:GetAnalyticsConfiguration');
    return this;
  }

  /**
   * Grants permission to use the acl subresource to return the access control list (ACL) of an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html
   */
  public toGetBucketAcl() {
    this.to('s3:GetBucketAcl');
    return this;
  }

  /**
   * Grants permission to return the CORS configuration information set for an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html
   */
  public toGetBucketCORS() {
    this.to('s3:GetBucketCORS');
    return this;
  }

  /**
   * Grants permission to return the Region that an Amazon S3 bucket resides in
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html
   */
  public toGetBucketLocation() {
    this.to('s3:GetBucketLocation');
    return this;
  }

  /**
   * Grants permission to return the logging status of an Amazon S3 bucket and the permissions users have to view or modify that status
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html
   */
  public toGetBucketLogging() {
    this.to('s3:GetBucketLogging');
    return this;
  }

  /**
   * Grants permission to get the notification configuration of an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotification.html
   */
  public toGetBucketNotification() {
    this.to('s3:GetBucketNotification');
    return this;
  }

  /**
   * Grants permission to get the Object Lock configuration of an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html
   */
  public toGetBucketObjectLockConfiguration() {
    this.to('s3:GetBucketObjectLockConfiguration');
    return this;
  }

  /**
   * Grants permission to return the policy of the specified bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html
   */
  public toGetBucketPolicy() {
    this.to('s3:GetBucketPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve the policy status for a specific Amazon S3 bucket, which indicates whether the bucket is public
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html
   */
  public toGetBucketPolicyStatus() {
    this.to('s3:GetBucketPolicyStatus');
    return this;
  }

  /**
   * Grants permission to retrieve the PublicAccessBlock configuration for an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html
   */
  public toGetBucketPublicAccessBlock() {
    this.to('s3:GetBucketPublicAccessBlock');
    return this;
  }

  /**
   * Grants permission to return the request payment configuration for an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html
   */
  public toGetBucketRequestPayment() {
    this.to('s3:GetBucketRequestPayment');
    return this;
  }

  /**
   * Grants permission to return the tag set associated with an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html
   */
  public toGetBucketTagging() {
    this.to('s3:GetBucketTagging');
    return this;
  }

  /**
   * Grants permission to return the versioning state of an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html
   */
  public toGetBucketVersioning() {
    this.to('s3:GetBucketVersioning');
    return this;
  }

  /**
   * Grants permission to return the website configuration for an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html
   */
  public toGetBucketWebsite() {
    this.to('s3:GetBucketWebsite');
    return this;
  }

  /**
   * Grants permission to return the default encryption configuration an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html
   */
  public toGetEncryptionConfiguration() {
    this.to('s3:GetEncryptionConfiguration');
    return this;
  }

  /**
   * Grants permission to return an inventory configuration from an Amazon S3 bucket, identified by the inventory configuration ID
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html
   */
  public toGetInventoryConfiguration() {
    this.to('s3:GetInventoryConfiguration');
    return this;
  }

  /**
   * Grants permission to return the tag set of an existing Amazon S3 Batch Operations job
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html
   */
  public toGetJobTagging() {
    this.to('s3:GetJobTagging');
    return this;
  }

  /**
   * Grants permission to return the lifecycle configuration information set on an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html
   */
  public toGetLifecycleConfiguration() {
    this.to('s3:GetLifecycleConfiguration');
    return this;
  }

  /**
   * Grants permission to get a metrics configuration from an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html
   */
  public toGetMetricsConfiguration() {
    this.to('s3:GetMetricsConfiguration');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
   */
  public toGetObject() {
    this.to('s3:GetObject');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
   */
  public toGetObjectAcl() {
    this.to('s3:GetObjectAcl');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html
   */
  public toGetObjectLegalHold() {
    this.to('s3:GetObjectLegalHold');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html
   */
  public toGetObjectRetention() {
    this.to('s3:GetObjectRetention');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html
   */
  public toGetObjectTagging() {
    this.to('s3:GetObjectTagging');
    return this;
  }

  /**
   * Grants permission to return torrent files from an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html
   */
  public toGetObjectTorrent() {
    this.to('s3:GetObjectTorrent');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
   */
  public toGetObjectVersion() {
    this.to('s3:GetObjectVersion');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
   */
  public toGetObjectVersionAcl() {
    this.to('s3:GetObjectVersionAcl');
    return this;
  }

  /**
   * Grants permission to replicate both unencrypted objects and objects encrypted with SSE-S3 or SSE-KMS
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   */
  public toGetObjectVersionForReplication() {
    this.to('s3:GetObjectVersionForReplication');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   */
  public toGetObjectVersionTagging() {
    this.to('s3:GetObjectVersionTagging');
    return this;
  }

  /**
   * Grants permission to get Torrent files about a different version using the versionId subresource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html
   */
  public toGetObjectVersionTorrent() {
    this.to('s3:GetObjectVersionTorrent');
    return this;
  }

  /**
   * Grants permission to get the replication configuration information set on an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html
   */
  public toGetReplicationConfiguration() {
    this.to('s3:GetReplicationConfiguration');
    return this;
  }

  /**
   * Grants permission to list access points
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html
   */
  public toListAccessPoints() {
    this.to('s3:ListAccessPoints');
    return this;
  }

  /**
   * Grants permission to list all buckets owned by the authenticated sender of the request
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html
   */
  public toListAllMyBuckets() {
    this.to('s3:ListAllMyBuckets');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html
   */
  public toListBucket() {
    this.to('s3:ListBucket');
    return this;
  }

  /**
   * Grants permission to list in-progress multipart uploads
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html
   */
  public toListBucketMultipartUploads() {
    this.to('s3:ListBucketMultipartUploads');
    return this;
  }

  /**
   * Grants permission to list metadata about all the versions of objects in an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifDelimiter()
   * - .ifMaxKeys()
   * - .ifPrefix()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html
   */
  public toListBucketVersions() {
    this.to('s3:ListBucketVersions');
    return this;
  }

  /**
   * Grants permission to list current jobs and jobs that have ended recently
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html
   */
  public toListJobs() {
    this.to('s3:ListJobs');
    return this;
  }

  /**
   * Grants permission to list the parts that have been uploaded for a specific multipart upload
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html
   */
  public toListMultipartUploadParts() {
    this.to('s3:ListMultipartUploadParts');
    return this;
  }

  /**
   * Grants permission to change replica ownership
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html#repl-ownership-add-role-permission
   */
  public toObjectOwnerOverrideToBucketOwner() {
    this.to('s3:ObjectOwnerOverrideToBucketOwner');
    return this;
  }

  /**
   * Grants permission to use the accelerate subresource to set the Transfer Acceleration state of an existing S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html
   */
  public toPutAccelerateConfiguration() {
    this.to('s3:PutAccelerateConfiguration');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html
   */
  public toPutAccessPointPolicy() {
    this.to('s3:PutAccessPointPolicy');
    return this;
  }

  /**
   * Grants permission to create or modify the PublicAccessBlock configuration for an AWS account
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html
   */
  public toPutAccountPublicAccessBlock() {
    this.to('s3:PutAccountPublicAccessBlock');
    return this;
  }

  /**
   * Grants permission to set an analytics configuration for the bucket, specified by the analytics configuration ID
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html
   */
  public toPutAnalyticsConfiguration() {
    this.to('s3:PutAnalyticsConfiguration');
    return this;
  }

  /**
   * Grants permission to set the permissions on an existing bucket using access control lists (ACLs)
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
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
    this.to('s3:PutBucketAcl');
    return this;
  }

  /**
   * Grants permission to set the CORS configuration for an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html
   */
  public toPutBucketCORS() {
    this.to('s3:PutBucketCORS');
    return this;
  }

  /**
   * Grants permission to set the logging parameters for an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLogging.html
   */
  public toPutBucketLogging() {
    this.to('s3:PutBucketLogging');
    return this;
  }

  /**
   * Grants permission to receive notifications when certain events happen in an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotification.html
   */
  public toPutBucketNotification() {
    this.to('s3:PutBucketNotification');
    return this;
  }

  /**
   * Grants permission to put Object Lock configuration on a specific bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLockConfiguration.html
   */
  public toPutBucketObjectLockConfiguration() {
    this.to('s3:PutBucketObjectLockConfiguration');
    return this;
  }

  /**
   * Grants permission to add or replace a bucket policy on a bucket
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html
   */
  public toPutBucketPolicy() {
    this.to('s3:PutBucketPolicy');
    return this;
  }

  /**
   * Grants permission to create or modify the PublicAccessBlock configuration for a specific Amazon S3 bucket
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html
   */
  public toPutBucketPublicAccessBlock() {
    this.to('s3:PutBucketPublicAccessBlock');
    return this;
  }

  /**
   * Grants permission to set the request payment configuration of a bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketRequestPayment.html
   */
  public toPutBucketRequestPayment() {
    this.to('s3:PutBucketRequestPayment');
    return this;
  }

  /**
   * Grants permission to add a set of tags to an existing Amazon S3 bucket
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html
   */
  public toPutBucketTagging() {
    this.to('s3:PutBucketTagging');
    return this;
  }

  /**
   * Grants permission to set the versioning state of an existing Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html
   */
  public toPutBucketVersioning() {
    this.to('s3:PutBucketVersioning');
    return this;
  }

  /**
   * Grants permission to set the configuration of the website that is specified in the website subresource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html
   */
  public toPutBucketWebsite() {
    this.to('s3:PutBucketWebsite');
    return this;
  }

  /**
   * Grants permission to set the encryption configuration for an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html
   */
  public toPutEncryptionConfiguration() {
    this.to('s3:PutEncryptionConfiguration');
    return this;
  }

  /**
   * Grants permission to add an inventory configuration to the bucket, identified by the inventory ID
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html
   */
  public toPutInventoryConfiguration() {
    this.to('s3:PutInventoryConfiguration');
    return this;
  }

  /**
   * Grants permission to replace tags on an existing Amazon S3 Batch Operations job
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   * - .ifExistingJobPriority()
   * - .ifExistingJobOperation()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html
   */
  public toPutJobTagging() {
    this.to('s3:PutJobTagging');
    return this;
  }

  /**
   * Grants permission to create a new lifecycle configuration for the bucket or replace an existing lifecycle configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html
   */
  public toPutLifecycleConfiguration() {
    this.to('s3:PutLifecycleConfiguration');
    return this;
  }

  /**
   * Grants permission to set or update a metrics configuration for the CloudWatch request metrics from an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html
   */
  public toPutMetricsConfiguration() {
    this.to('s3:PutMetricsConfiguration');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
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
    this.to('s3:PutObject');
    return this;
  }

  /**
   * Grants permission to set the access control list (ACL) permissions for an object that already exists in a bucket
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifDataAccessPointAccount()
   * - .ifDataAccessPointArn()
   * - .ifAccessPointNetworkOrigin()
   * - .ifExistingObjectTag()
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
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
    this.to('s3:PutObjectAcl');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   * - .ifObjectLockLegalHold()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLegalHold.html
   */
  public toPutObjectLegalHold() {
    this.to('s3:PutObjectLegalHold');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   * - .ifObjectLockMode()
   * - .ifObjectLockRetainUntilDate()
   * - .ifObjectLockRemainingRetentionDays()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html
   */
  public toPutObjectRetention() {
    this.to('s3:PutObjectRetention');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   */
  public toPutObjectTagging() {
    this.to('s3:PutObjectTagging');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
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
    this.to('s3:PutObjectVersionAcl');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   */
  public toPutObjectVersionTagging() {
    this.to('s3:PutObjectVersionTagging');
    return this;
  }

  /**
   * Grants permission to create a new replication configuration or replace an existing one
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html
   */
  public toPutReplicationConfiguration() {
    this.to('s3:PutReplicationConfiguration');
    return this;
  }

  /**
   * Grants permission to replicate delete markers to the destination bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html
   */
  public toReplicateDelete() {
    this.to('s3:ReplicateDelete');
    return this;
  }

  /**
   * Grants permission to replicate objects and object tags to the destination bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   * - .ifXAmzServerSideEncryption()
   * - .ifXAmzServerSideEncryptionAwsKmsKeyId()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html
   */
  public toReplicateObject() {
    this.to('s3:ReplicateObject');
    return this;
  }

  /**
   * Grants permission to replicate object tags to the destination bucket
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html
   */
  public toReplicateTags() {
    this.to('s3:ReplicateTags');
    return this;
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html
   */
  public toRestoreObject() {
    this.to('s3:RestoreObject');
    return this;
  }

  /**
   * Grants permission to update the priority of an existing job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   * - .ifRequestJobPriority()
   * - .ifExistingJobPriority()
   * - .ifExistingJobOperation()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html
   */
  public toUpdateJobPriority() {
    this.to('s3:UpdateJobPriority');
    return this;
  }

  /**
   * Grants permission to update the status for the specified job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   * - .ifExistingJobPriority()
   * - .ifExistingJobOperation()
   * - .ifJobSuspendedCause()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html
   */
  public toUpdateJobStatus() {
    this.to('s3:UpdateJobStatus');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AbortMultipartUpload",
      "CreateAccessPoint",
      "CreateBucket",
      "CreateJob",
      "DeleteAccessPoint",
      "DeleteBucket",
      "DeleteBucketWebsite",
      "DeleteObject",
      "DeleteObjectVersion",
      "PutAccelerateConfiguration",
      "PutAnalyticsConfiguration",
      "PutBucketCORS",
      "PutBucketLogging",
      "PutBucketNotification",
      "PutBucketObjectLockConfiguration",
      "PutBucketRequestPayment",
      "PutBucketVersioning",
      "PutBucketWebsite",
      "PutEncryptionConfiguration",
      "PutInventoryConfiguration",
      "PutLifecycleConfiguration",
      "PutMetricsConfiguration",
      "PutObject",
      "PutObjectLegalHold",
      "PutObjectRetention",
      "PutReplicationConfiguration",
      "ReplicateDelete",
      "ReplicateObject",
      "RestoreObject",
      "UpdateJobPriority",
      "UpdateJobStatus"
    ],
    "Permissions management": [
      "BypassGovernanceRetention",
      "DeleteAccessPointPolicy",
      "DeleteBucketPolicy",
      "ObjectOwnerOverrideToBucketOwner",
      "PutAccessPointPolicy",
      "PutAccountPublicAccessBlock",
      "PutBucketAcl",
      "PutBucketPolicy",
      "PutBucketPublicAccessBlock",
      "PutObjectAcl",
      "PutObjectVersionAcl"
    ],
    "Tagging": [
      "DeleteJobTagging",
      "DeleteObjectTagging",
      "DeleteObjectVersionTagging",
      "PutBucketTagging",
      "PutJobTagging",
      "PutObjectTagging",
      "PutObjectVersionTagging",
      "ReplicateTags"
    ],
    "Read": [
      "DescribeJob",
      "GetAccelerateConfiguration",
      "GetAccessPoint",
      "GetAccessPointPolicy",
      "GetAccessPointPolicyStatus",
      "GetAccountPublicAccessBlock",
      "GetAnalyticsConfiguration",
      "GetBucketAcl",
      "GetBucketCORS",
      "GetBucketLocation",
      "GetBucketLogging",
      "GetBucketNotification",
      "GetBucketObjectLockConfiguration",
      "GetBucketPolicy",
      "GetBucketPolicyStatus",
      "GetBucketPublicAccessBlock",
      "GetBucketRequestPayment",
      "GetBucketTagging",
      "GetBucketVersioning",
      "GetBucketWebsite",
      "GetEncryptionConfiguration",
      "GetInventoryConfiguration",
      "GetJobTagging",
      "GetLifecycleConfiguration",
      "GetMetricsConfiguration",
      "GetObject",
      "GetObjectAcl",
      "GetObjectLegalHold",
      "GetObjectRetention",
      "GetObjectTagging",
      "GetObjectTorrent",
      "GetObjectVersion",
      "GetObjectVersionAcl",
      "GetObjectVersionForReplication",
      "GetObjectVersionTagging",
      "GetObjectVersionTorrent",
      "GetReplicationConfiguration",
      "ListAccessPoints",
      "ListBucketMultipartUploads",
      "ListBucketVersions",
      "ListJobs",
      "ListMultipartUploadParts"
    ],
    "List": [
      "ListAllMyBuckets",
      "ListBucket"
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
    var arn = 'arn:${Partition}:s3:${Region}:${Account}:accesspoint/${AccessPointName}';
    arn = arn.replace('${AccessPointName}', accessPointName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:s3:::${BucketName}';
    arn = arn.replace('${BucketName}', bucketName);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:s3:::${BucketName}/${ObjectName}';
    arn = arn.replace('${BucketName}', bucketName);
    arn = arn.replace('${ObjectName}', objectName);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:s3:${Region}:${Account}:job/${JobId}';
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyStatus()
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
   * - .toPutAccessPointPolicy()
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
    return this.if(`s3:AccessPointNetworkOrigin`, value, operator || 'StringLike');
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
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyStatus()
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
   * - .toPutAccessPointPolicy()
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
    return this.if(`s3:DataAccessPointAccount`, value, operator || 'StringLike');
  }

  /**
   * Filters access by an access point Amazon Resource Name (ARN)
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toBypassGovernanceRetention()
   * - .toCreateAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyStatus()
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
   * - .toPutAccessPointPolicy()
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
    return this.if(`s3:DataAccessPointArn`, value, operator || 'StringLike');
  }

  /**
   * Filters access to updating the job priority by operation
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
    return this.if(`s3:ExistingJobOperation`, value, operator || 'StringLike');
  }

  /**
   * Filters access to cancelling existing jobs by priority range
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
    return this.if(`s3:ExistingJobPriority`, value, operator || 'NumericEquals');
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
    return this.if(`s3:ExistingObjectTag/${ key }`, value, operator || 'StringLike');
  }

  /**
   * Filters access to cancelling suspended jobs by a specific job suspended cause (for example, AWAITING_CONFIRMATION)
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
    return this.if(`s3:JobSuspendedCause`, value, operator || 'StringLike');
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
    return this.if(`s3:LocationConstraint`, value, operator || 'StringLike');
  }

  /**
   * Filters access to creating jobs by operation
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
    return this.if(`s3:RequestJobOperation`, value, operator || 'StringLike');
  }

  /**
   * Filters access to creating new jobs by priority range
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
    return this.if(`s3:RequestJobPriority`, value, operator || 'NumericEquals');
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
    return this.if(`s3:RequestObjectTag/${ key }`, value, operator || 'StringLike');
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
    return this.if(`s3:RequestObjectTagKeys`, value, operator || 'StringLike');
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
    return this.if(`s3:VersionId`, value, operator || 'StringLike');
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
   * - .toCreateBucket()
   * - .toCreateJob()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toDeleteBucketWebsite()
   * - .toDeleteJobTagging()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toDescribeJob()
   * - .toGetAccelerateConfiguration()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyStatus()
   * - .toGetAccountPublicAccessBlock()
   * - .toGetAnalyticsConfiguration()
   * - .toGetBucketAcl()
   * - .toGetBucketCORS()
   * - .toGetBucketLogging()
   * - .toGetBucketNotification()
   * - .toGetBucketObjectLockConfiguration()
   * - .toGetBucketPolicy()
   * - .toGetBucketPolicyStatus()
   * - .toGetBucketPublicAccessBlock()
   * - .toGetBucketRequestPayment()
   * - .toGetBucketTagging()
   * - .toGetBucketVersioning()
   * - .toGetBucketWebsite()
   * - .toGetEncryptionConfiguration()
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
   * - .toListAccessPoints()
   * - .toListAllMyBuckets()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListJobs()
   * - .toListMultipartUploadParts()
   * - .toObjectOwnerOverrideToBucketOwner()
   * - .toPutAccelerateConfiguration()
   * - .toPutAccessPointPolicy()
   * - .toPutAccountPublicAccessBlock()
   * - .toPutAnalyticsConfiguration()
   * - .toPutBucketAcl()
   * - .toPutBucketCORS()
   * - .toPutBucketLogging()
   * - .toPutBucketNotification()
   * - .toPutBucketObjectLockConfiguration()
   * - .toPutBucketPolicy()
   * - .toPutBucketPublicAccessBlock()
   * - .toPutBucketRequestPayment()
   * - .toPutBucketTagging()
   * - .toPutBucketVersioning()
   * - .toPutBucketWebsite()
   * - .toPutEncryptionConfiguration()
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
    return this.if(`s3:authType`, value, operator || 'StringLike');
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
    return this.if(`s3:delimiter`, value, operator || 'StringLike');
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
    return this.if(`s3:locationconstraint`, value, operator || 'StringLike');
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
    return this.if(`s3:max-keys`, value, operator || 'NumericEquals');
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
    return this.if(`s3:object-lock-legal-hold`, value, operator || 'StringLike');
  }

  /**
   * Filters access by object retention mode (COMPLIANCE or GOVERNANCE)
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
    return this.if(`s3:object-lock-mode`, value, operator || 'StringLike');
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
    return this.if(`s3:object-lock-remaining-retention-days`, value, operator || 'StringLike');
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
    return this.if(`s3:object-lock-retain-until-date`, value, operator || 'StringLike');
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
    return this.if(`s3:prefix`, value, operator || 'StringLike');
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
   * - .toCreateBucket()
   * - .toCreateJob()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toDeleteBucketWebsite()
   * - .toDeleteJobTagging()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toDescribeJob()
   * - .toGetAccelerateConfiguration()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyStatus()
   * - .toGetAccountPublicAccessBlock()
   * - .toGetAnalyticsConfiguration()
   * - .toGetBucketAcl()
   * - .toGetBucketCORS()
   * - .toGetBucketLogging()
   * - .toGetBucketNotification()
   * - .toGetBucketObjectLockConfiguration()
   * - .toGetBucketPolicy()
   * - .toGetBucketPolicyStatus()
   * - .toGetBucketPublicAccessBlock()
   * - .toGetBucketRequestPayment()
   * - .toGetBucketTagging()
   * - .toGetBucketVersioning()
   * - .toGetBucketWebsite()
   * - .toGetEncryptionConfiguration()
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
   * - .toListAccessPoints()
   * - .toListAllMyBuckets()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListJobs()
   * - .toListMultipartUploadParts()
   * - .toObjectOwnerOverrideToBucketOwner()
   * - .toPutAccelerateConfiguration()
   * - .toPutAccessPointPolicy()
   * - .toPutAccountPublicAccessBlock()
   * - .toPutAnalyticsConfiguration()
   * - .toPutBucketAcl()
   * - .toPutBucketCORS()
   * - .toPutBucketLogging()
   * - .toPutBucketNotification()
   * - .toPutBucketObjectLockConfiguration()
   * - .toPutBucketPolicy()
   * - .toPutBucketPublicAccessBlock()
   * - .toPutBucketRequestPayment()
   * - .toPutBucketTagging()
   * - .toPutBucketVersioning()
   * - .toPutBucketWebsite()
   * - .toPutEncryptionConfiguration()
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
    return this.if(`s3:signatureAge`, value, operator || 'NumericEquals');
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
   * - .toCreateBucket()
   * - .toCreateJob()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toDeleteBucketWebsite()
   * - .toDeleteJobTagging()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toDescribeJob()
   * - .toGetAccelerateConfiguration()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyStatus()
   * - .toGetAccountPublicAccessBlock()
   * - .toGetAnalyticsConfiguration()
   * - .toGetBucketAcl()
   * - .toGetBucketCORS()
   * - .toGetBucketLogging()
   * - .toGetBucketNotification()
   * - .toGetBucketObjectLockConfiguration()
   * - .toGetBucketPolicy()
   * - .toGetBucketPolicyStatus()
   * - .toGetBucketPublicAccessBlock()
   * - .toGetBucketRequestPayment()
   * - .toGetBucketTagging()
   * - .toGetBucketVersioning()
   * - .toGetBucketWebsite()
   * - .toGetEncryptionConfiguration()
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
   * - .toListAccessPoints()
   * - .toListAllMyBuckets()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListJobs()
   * - .toListMultipartUploadParts()
   * - .toObjectOwnerOverrideToBucketOwner()
   * - .toPutAccelerateConfiguration()
   * - .toPutAccessPointPolicy()
   * - .toPutAccountPublicAccessBlock()
   * - .toPutAnalyticsConfiguration()
   * - .toPutBucketAcl()
   * - .toPutBucketCORS()
   * - .toPutBucketLogging()
   * - .toPutBucketNotification()
   * - .toPutBucketObjectLockConfiguration()
   * - .toPutBucketPolicy()
   * - .toPutBucketPublicAccessBlock()
   * - .toPutBucketRequestPayment()
   * - .toPutBucketTagging()
   * - .toPutBucketVersioning()
   * - .toPutBucketWebsite()
   * - .toPutEncryptionConfiguration()
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
    return this.if(`s3:signatureversion`, value, operator || 'StringLike');
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
    return this.if(`s3:versionid`, value, operator || 'StringLike');
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
    return this.if(`s3:x-amz-acl`, value, operator || 'StringLike');
  }

  /**
   * Filters access to unsigned content in your bucket
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toBypassGovernanceRetention()
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
   * - .toCreateJob()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toDeleteBucketWebsite()
   * - .toDeleteJobTagging()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toDescribeJob()
   * - .toGetAccelerateConfiguration()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetAccessPointPolicyStatus()
   * - .toGetAccountPublicAccessBlock()
   * - .toGetAnalyticsConfiguration()
   * - .toGetBucketAcl()
   * - .toGetBucketCORS()
   * - .toGetBucketLogging()
   * - .toGetBucketNotification()
   * - .toGetBucketPolicy()
   * - .toGetBucketPolicyStatus()
   * - .toGetBucketPublicAccessBlock()
   * - .toGetBucketRequestPayment()
   * - .toGetBucketTagging()
   * - .toGetBucketVersioning()
   * - .toGetBucketWebsite()
   * - .toGetEncryptionConfiguration()
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
   * - .toListAccessPoints()
   * - .toListAllMyBuckets()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListJobs()
   * - .toListMultipartUploadParts()
   * - .toObjectOwnerOverrideToBucketOwner()
   * - .toPutAccelerateConfiguration()
   * - .toPutAccessPointPolicy()
   * - .toPutAccountPublicAccessBlock()
   * - .toPutAnalyticsConfiguration()
   * - .toPutBucketAcl()
   * - .toPutBucketCORS()
   * - .toPutBucketLogging()
   * - .toPutBucketNotification()
   * - .toPutBucketPolicy()
   * - .toPutBucketPublicAccessBlock()
   * - .toPutBucketRequestPayment()
   * - .toPutBucketTagging()
   * - .toPutBucketVersioning()
   * - .toPutBucketWebsite()
   * - .toPutEncryptionConfiguration()
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
    return this.if(`s3:x-amz-content-sha256`, value, operator || 'StringLike');
  }

  /**
   * Filters access to requests with a specific bucket, prefix, or object as the copy source
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
    return this.if(`s3:x-amz-copy-source`, value, operator || 'StringLike');
  }

  /**
   * Filters access to requests with the x-amz-grant-full-control (full control) header
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
    return this.if(`s3:x-amz-grant-full-control`, value, operator || 'StringLike');
  }

  /**
   * Filters access to requests with the x-amz-grant-read (read access) header
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
    return this.if(`s3:x-amz-grant-read`, value, operator || 'StringLike');
  }

  /**
   * Filters access to requests with the x-amz-grant-read-acp (read permissions for the ACL) header
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
    return this.if(`s3:x-amz-grant-read-acp`, value, operator || 'StringLike');
  }

  /**
   * Filters access to requests with the x-amz-grant-write (write access) header
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
    return this.if(`s3:x-amz-grant-write`, value, operator || 'StringLike');
  }

  /**
   * Filters access to requests with the x-amz-grant-write-acp (write permissions for the ACL) header
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
    return this.if(`s3:x-amz-grant-write-acp`, value, operator || 'StringLike');
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
    return this.if(`s3:x-amz-metadata-directive`, value, operator || 'StringLike');
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
    return this.if(`s3:x-amz-server-side-encryption`, value, operator || 'StringLike');
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
    return this.if(`s3:x-amz-server-side-encryption-aws-kms-key-id`, value, operator || 'StringLike');
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
    return this.if(`s3:x-amz-storage-class`, value, operator || 'StringLike');
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
    return this.if(`s3:x-amz-website-redirect-location`, value, operator || 'StringLike');
  }
}
