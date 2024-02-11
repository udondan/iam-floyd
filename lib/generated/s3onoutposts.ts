import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [s3-outposts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class S3Outposts extends PolicyStatement {
  public servicePrefix = 's3-outposts';

  /**
   * Statement provider for service [s3-outposts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html).
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html
   */
  public toAbortMultipartUpload() {
    return this.to('AbortMultipartUpload');
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html
   */
  public toCreateBucket() {
    return this.to('CreateBucket');
  }

  /**
   * Grants permission to create a new endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html
   */
  public toCreateEndpoint() {
    return this.to('CreateEndpoint');
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
    return this.to('DeleteAccessPoint');
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
    return this.to('DeleteAccessPointPolicy');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html
   */
  public toDeleteBucketPolicy() {
    return this.to('DeleteBucketPolicy');
  }

  /**
   * Grants permission to delete the endpoint named in the URI
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html
   */
  public toDeleteEndpoint() {
    return this.to('DeleteEndpoint');
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   */
  public toDeleteObjectVersionTagging() {
    return this.to('DeleteObjectVersionTagging');
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
    return this.to('GetAccessPoint');
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
    return this.to('GetAccessPointPolicy');
  }

  /**
   * Grants permission to return the bucket configuration associated with an Amazon S3 bucket
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html
   */
  public toGetBucket() {
    return this.to('GetBucket');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html
   */
  public toGetBucketPolicy() {
    return this.to('GetBucketPolicy');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html
   */
  public toGetBucketVersioning() {
    return this.to('GetBucketVersioning');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html
   */
  public toGetLifecycleConfiguration() {
    return this.to('GetLifecycleConfiguration');
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
    return this.to('GetObject');
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
    return this.to('GetObjectTagging');
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
    return this.to('GetObjectVersion');
  }

  /**
   * Grants permission to replicate both unencrypted objects and objects encrypted with SSE-KMS
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifVersionid()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
   */
  public toGetObjectVersionTagging() {
    return this.to('GetObjectVersionTagging');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html
   */
  public toGetReplicationConfiguration() {
    return this.to('GetReplicationConfiguration');
  }

  /**
   * Grants permission to list access points
   *
   * Access Level: List
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
    return this.to('ListAccessPoints');
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html
   */
  public toListBucketVersions() {
    return this.to('ListBucketVersions');
  }

  /**
   * Grants permission to list endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html
   */
  public toListEndpoints() {
    return this.to('ListEndpoints');
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html
   */
  public toListMultipartUploadParts() {
    return this.to('ListMultipartUploadParts');
  }

  /**
   * Grants permission to list outposts with S3 capacity
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListOutpostsWithS3.html
   */
  public toListOutpostsWithS3() {
    return this.to('ListOutpostsWithS3');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListRegionalBuckets.html
   */
  public toListRegionalBuckets() {
    return this.to('ListRegionalBuckets');
  }

  /**
   * Grants permission to list shared endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListSharedEndpoints.html
   */
  public toListSharedEndpoints() {
    return this.to('ListSharedEndpoints');
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
    return this.to('PutAccessPointPolicy');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html
   */
  public toPutBucketPolicy() {
    return this.to('PutBucketPolicy');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html
   */
  public toPutBucketVersioning() {
    return this.to('PutBucketVersioning');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html
   */
  public toPutLifecycleConfiguration() {
    return this.to('PutLifecycleConfiguration');
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
   * - .ifXAmzMetadataDirective()
   * - .ifXAmzServerSideEncryption()
   * - .ifXAmzStorageClass()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html
   */
  public toPutObject() {
    return this.to('PutObject');
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
   * - .ifXAmzStorageClass()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
   */
  public toPutObjectAcl() {
    return this.to('PutObjectAcl');
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
    return this.to('PutObjectTagging');
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
    return this.to('PutObjectVersionTagging');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html
   */
  public toPutReplicationConfiguration() {
    return this.to('PutReplicationConfiguration');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   * - .ifXAmzServerSideEncryption()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   */
  public toReplicateTags() {
    return this.to('ReplicateTags');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AbortMultipartUpload',
      'CreateAccessPoint',
      'CreateBucket',
      'CreateEndpoint',
      'DeleteAccessPoint',
      'DeleteBucket',
      'DeleteEndpoint',
      'DeleteObject',
      'DeleteObjectVersion',
      'PutBucketVersioning',
      'PutLifecycleConfiguration',
      'PutObject',
      'PutReplicationConfiguration',
      'ReplicateDelete',
      'ReplicateObject'
    ],
    'Permissions management': [
      'DeleteAccessPointPolicy',
      'DeleteBucketPolicy',
      'PutAccessPointPolicy',
      'PutBucketPolicy',
      'PutObjectAcl'
    ],
    Tagging: [
      'DeleteObjectTagging',
      'DeleteObjectVersionTagging',
      'PutBucketTagging',
      'PutObjectTagging',
      'PutObjectVersionTagging',
      'ReplicateTags'
    ],
    Read: [
      'GetAccessPoint',
      'GetAccessPointPolicy',
      'GetBucket',
      'GetBucketPolicy',
      'GetBucketTagging',
      'GetBucketVersioning',
      'GetLifecycleConfiguration',
      'GetObject',
      'GetObjectTagging',
      'GetObjectVersion',
      'GetObjectVersionForReplication',
      'GetObjectVersionTagging',
      'GetReplicationConfiguration'
    ],
    List: [
      'ListAccessPoints',
      'ListBucket',
      'ListBucketMultipartUploads',
      'ListBucketVersions',
      'ListEndpoints',
      'ListMultipartUploadParts',
      'ListOutpostsWithS3',
      'ListRegionalBuckets',
      'ListSharedEndpoints'
    ]
  };

  /**
   * Adds a resource of type accesspoint to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html
   *
   * @param outpostId - Identifier for the outpostId.
   * @param accessPointName - Identifier for the accessPointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAccesspoint(outpostId: string, accessPointName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || S3Outposts.defaultPartition }:s3-outposts:${ region || '*' }:${ account || '*' }:outpost/${ outpostId }/accesspoint/${ accessPointName }`);
  }

  /**
   * Adds a resource of type bucket to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingBucket.html
   *
   * @param outpostId - Identifier for the outpostId.
   * @param bucketName - Identifier for the bucketName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBucket(outpostId: string, bucketName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || S3Outposts.defaultPartition }:s3-outposts:${ region || '*' }:${ account || '*' }:outpost/${ outpostId }/bucket/${ bucketName }`);
  }

  /**
   * Adds a resource of type endpoint to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/outposts-endpoints.html
   *
   * @param outpostId - Identifier for the outpostId.
   * @param endpointId - Identifier for the endpointId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEndpoint(outpostId: string, endpointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || S3Outposts.defaultPartition }:s3-outposts:${ region || '*' }:${ account || '*' }:outpost/${ outpostId }/endpoint/${ endpointId }`);
  }

  /**
   * Adds a resource of type object to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingObjects.html
   *
   * @param outpostId - Identifier for the outpostId.
   * @param bucketName - Identifier for the bucketName.
   * @param objectName - Identifier for the objectName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onObject(outpostId: string, bucketName: string, objectName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || S3Outposts.defaultPartition }:s3-outposts:${ region || '*' }:${ account || '*' }:outpost/${ outpostId }/bucket/${ bucketName }/object/${ objectName }`);
  }

  /**
   * Filters access by the network origin (Internet or VPC)
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toCreateAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionTagging()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListMultipartUploadParts()
   * - .toPutAccessPointPolicy()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionTagging()
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
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toCreateAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionTagging()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListMultipartUploadParts()
   * - .toPutAccessPointPolicy()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionTagging()
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
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toCreateAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionTagging()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListMultipartUploadParts()
   * - .toPutAccessPointPolicy()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionTagging()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifDataAccessPointArn(value: string | string[], operator?: Operator | string) {
    return this.if(`DataAccessPointArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by requiring that an existing object tag has a specific tag key and value
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies
   *
   * Applies to actions:
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersionTagging()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionTagging()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
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
   * Filters access by restricting the tag keys and values allowed on objects
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies
   *
   * Applies to actions:
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
   * Filters access by restricting the tag keys allowed on objects
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies
   *
   * Applies to actions:
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
   * Filters access by restricting incoming requests to a specific authentication method
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetBucket()
   * - .toGetBucketPolicy()
   * - .toGetBucketTagging()
   * - .toGetBucketVersioning()
   * - .toGetLifecycleConfiguration()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionForReplication()
   * - .toGetObjectVersionTagging()
   * - .toGetReplicationConfiguration()
   * - .toListAccessPoints()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListMultipartUploadParts()
   * - .toListRegionalBuckets()
   * - .toPutAccessPointPolicy()
   * - .toPutBucketPolicy()
   * - .toPutBucketTagging()
   * - .toPutBucketVersioning()
   * - .toPutLifecycleConfiguration()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionTagging()
   * - .toPutReplicationConfiguration()
   * - .toReplicateDelete()
   * - .toReplicateObject()
   * - .toReplicateTags()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthType(value: string | string[], operator?: Operator | string) {
    return this.if(`authType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by requiring the delimiter parameter
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/walkthrough1.html
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
   * Filters access by limiting the maximum number of keys returned in a ListBucket request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-numeric-condition-operators
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
   * Filters access by key name prefix
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#condition-key-bucket-ops-2
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
   * Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetBucket()
   * - .toGetBucketPolicy()
   * - .toGetBucketTagging()
   * - .toGetBucketVersioning()
   * - .toGetLifecycleConfiguration()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionForReplication()
   * - .toGetObjectVersionTagging()
   * - .toGetReplicationConfiguration()
   * - .toListAccessPoints()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListMultipartUploadParts()
   * - .toListRegionalBuckets()
   * - .toPutAccessPointPolicy()
   * - .toPutBucketPolicy()
   * - .toPutBucketTagging()
   * - .toPutBucketVersioning()
   * - .toPutLifecycleConfiguration()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionTagging()
   * - .toPutReplicationConfiguration()
   * - .toReplicateDelete()
   * - .toReplicateObject()
   * - .toReplicateTags()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifSignatureAge(value: number | number[], operator?: Operator | string) {
    return this.if(`signatureAge`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by identifying the version of AWS Signature that is supported for authenticated requests
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetBucket()
   * - .toGetBucketPolicy()
   * - .toGetBucketTagging()
   * - .toGetBucketVersioning()
   * - .toGetLifecycleConfiguration()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionForReplication()
   * - .toGetObjectVersionTagging()
   * - .toGetReplicationConfiguration()
   * - .toListAccessPoints()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListMultipartUploadParts()
   * - .toListRegionalBuckets()
   * - .toPutAccessPointPolicy()
   * - .toPutBucketPolicy()
   * - .toPutBucketTagging()
   * - .toPutBucketVersioning()
   * - .toPutLifecycleConfiguration()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionTagging()
   * - .toPutReplicationConfiguration()
   * - .toReplicateDelete()
   * - .toReplicateObject()
   * - .toReplicateTags()
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
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3
   *
   * Applies to actions:
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionTagging()
   * - .toPutObjectVersionTagging()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVersionid(value: string | string[], operator?: Operator | string) {
    return this.if(`versionid`, value, operator || 'StringLike');
  }

  /**
   * Filters access by requiring the x-amz-acl header with a specific canned ACL in a request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions
   *
   * Applies to actions:
   * - .toPutObject()
   * - .toPutObjectAcl()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzAcl(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-acl`, value, operator || 'StringLike');
  }

  /**
   * Filters access by disallowing unsigned content in your bucket
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toCreateAccessPoint()
   * - .toCreateBucket()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetBucket()
   * - .toGetBucketPolicy()
   * - .toGetBucketTagging()
   * - .toGetBucketVersioning()
   * - .toGetLifecycleConfiguration()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionForReplication()
   * - .toGetObjectVersionTagging()
   * - .toGetReplicationConfiguration()
   * - .toListAccessPoints()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListBucketVersions()
   * - .toListMultipartUploadParts()
   * - .toListRegionalBuckets()
   * - .toPutAccessPointPolicy()
   * - .toPutBucketPolicy()
   * - .toPutBucketTagging()
   * - .toPutBucketVersioning()
   * - .toPutLifecycleConfiguration()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionTagging()
   * - .toPutReplicationConfiguration()
   * - .toReplicateDelete()
   * - .toReplicateObject()
   * - .toReplicateTags()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzContentSha256(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-content-sha256`, value, operator || 'StringLike');
  }

  /**
   * Filters access by restricting the copy source to a specific bucket, prefix, or object
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#putobject-limit-copy-source-3
   *
   * Applies to actions:
   * - .toPutObject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzCopySource(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-copy-source`, value, operator || 'StringLike');
  }

  /**
   * Filters access by enabling enforcement of object metadata behavior (COPY or REPLACE) when objects are copied
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html
   *
   * Applies to actions:
   * - .toPutObject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzMetadataDirective(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-metadata-directive`, value, operator || 'StringLike');
  }

  /**
   * Filters access by requiring server-side encryption
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html
   *
   * Applies to actions:
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
   * Filters access by storage class
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-howtoset
   *
   * Applies to actions:
   * - .toPutObject()
   * - .toPutObjectAcl()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzStorageClass(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-storage-class`, value, operator || 'StringLike');
  }
}
