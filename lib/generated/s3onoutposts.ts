import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
    this.to('s3-outposts:AbortMultipartUpload');
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
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html
   */
  public toCreateAccessPoint() {
    this.to('s3-outposts:CreateAccessPoint');
    return this;
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
    this.to('s3-outposts:CreateBucket');
    return this;
  }

  /**
   * Grants permission to create a new endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html
   */
  public toCreateEndpoint() {
    this.to('s3-outposts:CreateEndpoint');
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
    this.to('s3-outposts:DeleteAccessPoint');
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
    this.to('s3-outposts:DeleteAccessPointPolicy');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html
   */
  public toDeleteBucket() {
    this.to('s3-outposts:DeleteBucket');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html
   */
  public toDeleteBucketPolicy() {
    this.to('s3-outposts:DeleteBucketPolicy');
    return this;
  }

  /**
   * Grants permission to delete the endpoint named in the URI
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html
   */
  public toDeleteEndpoint() {
    this.to('s3-outposts:DeleteEndpoint');
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
    this.to('s3-outposts:DeleteObject');
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
    this.to('s3-outposts:DeleteObjectTagging');
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
    this.to('s3-outposts:GetAccessPoint');
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
    this.to('s3-outposts:GetAccessPointPolicy');
    return this;
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
    this.to('s3-outposts:GetBucket');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html
   */
  public toGetBucketPolicy() {
    this.to('s3-outposts:GetBucketPolicy');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html
   */
  public toGetBucketTagging() {
    this.to('s3-outposts:GetBucketTagging');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html
   */
  public toGetLifecycleConfiguration() {
    this.to('s3-outposts:GetLifecycleConfiguration');
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
    this.to('s3-outposts:GetObject');
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
    this.to('s3-outposts:GetObjectTagging');
    return this;
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
    this.to('s3-outposts:ListAccessPoints');
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
    this.to('s3-outposts:ListBucket');
    return this;
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
    this.to('s3-outposts:ListBucketMultipartUploads');
    return this;
  }

  /**
   * Grants permission to list endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html
   */
  public toListEndpoints() {
    this.to('s3-outposts:ListEndpoints');
    return this;
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
    this.to('s3-outposts:ListMultipartUploadParts');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListRegionalBuckets.html
   */
  public toListRegionalBuckets() {
    this.to('s3-outposts:ListRegionalBuckets');
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
    this.to('s3-outposts:PutAccessPointPolicy');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html
   */
  public toPutBucketPolicy() {
    this.to('s3-outposts:PutBucketPolicy');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html
   */
  public toPutBucketTagging() {
    this.to('s3-outposts:PutBucketTagging');
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
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html
   */
  public toPutLifecycleConfiguration() {
    this.to('s3-outposts:PutLifecycleConfiguration');
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
   * - .ifXAmzMetadataDirective()
   * - .ifXAmzServerSideEncryption()
   * - .ifXAmzStorageClass()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html
   */
  public toPutObject() {
    this.to('s3-outposts:PutObject');
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
   * - .ifXAmzStorageClass()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
   */
  public toPutObjectAcl() {
    this.to('s3-outposts:PutObjectAcl');
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
    this.to('s3-outposts:PutObjectTagging');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AbortMultipartUpload",
      "CreateAccessPoint",
      "CreateBucket",
      "CreateEndpoint",
      "DeleteAccessPoint",
      "DeleteBucket",
      "DeleteEndpoint",
      "DeleteObject",
      "PutLifecycleConfiguration",
      "PutObject"
    ],
    "Permissions management": [
      "DeleteAccessPointPolicy",
      "DeleteBucketPolicy",
      "PutAccessPointPolicy",
      "PutBucketPolicy",
      "PutObjectAcl"
    ],
    "Tagging": [
      "DeleteObjectTagging",
      "PutBucketTagging",
      "PutObjectTagging"
    ],
    "Read": [
      "GetAccessPoint",
      "GetAccessPointPolicy",
      "GetBucket",
      "GetBucketPolicy",
      "GetBucketTagging",
      "GetLifecycleConfiguration",
      "GetObject",
      "GetObjectTagging"
    ],
    "List": [
      "ListAccessPoints",
      "ListBucket",
      "ListBucketMultipartUploads",
      "ListEndpoints",
      "ListMultipartUploadParts",
      "ListRegionalBuckets"
    ]
  };

  /**
   * Adds a resource of type accesspoint to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html
   *
   * @param outpostId - Identifier for the outpostId.
   * @param accessPointName - Identifier for the accessPointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAccesspoint(outpostId: string, accessPointName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:s3-outposts:${Region}:${Account}:outpost/${OutpostId}/accesspoint/${AccessPointName}';
    arn = arn.replace('${OutpostId}', outpostId);
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
   * @param outpostId - Identifier for the outpostId.
   * @param bucketName - Identifier for the bucketName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBucket(outpostId: string, bucketName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:s3-outposts:${Region}:${Account}:outpost/${OutpostId}/bucket/${BucketName}';
    arn = arn.replace('${OutpostId}', outpostId);
    arn = arn.replace('${BucketName}', bucketName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type endpoint to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/outposts-endpoints.html
   *
   * @param outpostId - Identifier for the outpostId.
   * @param endpointId - Identifier for the endpointId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEndpoint(outpostId: string, endpointId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:s3-outposts:${Region}:${Account}:outpost/${OutpostId}/endpoint/${EndpointId}';
    arn = arn.replace('${OutpostId}', outpostId);
    arn = arn.replace('${EndpointId}', endpointId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type object to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html
   *
   * @param outpostId - Identifier for the outpostId.
   * @param bucketName - Identifier for the bucketName.
   * @param objectName - Identifier for the objectName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onObject(outpostId: string, bucketName: string, objectName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:s3-outposts:${Region}:${Account}:outpost/${OutpostId}/bucket/${BucketName}/object/${ObjectName}';
    arn = arn.replace('${OutpostId}', outpostId);
    arn = arn.replace('${BucketName}', bucketName);
    arn = arn.replace('${ObjectName}', objectName);
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
   * - .toCreateAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListMultipartUploadParts()
   * - .toPutAccessPointPolicy()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccessPointNetworkOrigin(value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:AccessPointNetworkOrigin`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the AWS Account ID that owns the access point
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toCreateAccessPoint()
   * - .toDeleteAccessPoint()
   * - .toDeleteAccessPointPolicy()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListMultipartUploadParts()
   * - .toPutAccessPointPolicy()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDataAccessPointAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:DataAccessPointAccount`, value, operator || 'StringLike');
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
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListMultipartUploadParts()
   * - .toPutAccessPointPolicy()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDataAccessPointArn(value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:DataAccessPointArn`, value, operator || 'StringLike');
  }

  /**
   * Filters access by requiring that an existing object tag has a specific tag key and value
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies
   *
   * Applies to actions:
   * - .toDeleteObjectTagging()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   *
   * @param key The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExistingObjectTag(key: string, value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:ExistingObjectTag/${ key }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by restricting the tag keys and values allowed on objects
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies
   *
   * Applies to actions:
   * - .toPutObject()
   * - .toPutObjectTagging()
   *
   * @param key The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestObjectTag(key: string, value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:RequestObjectTag/${ key }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by restricting the tag keys allowed on objects
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies
   *
   * Applies to actions:
   * - .toPutObject()
   * - .toPutObjectTagging()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestObjectTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:RequestObjectTagKeys`, value, operator || 'StringLike');
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
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetBucket()
   * - .toGetBucketPolicy()
   * - .toGetBucketTagging()
   * - .toGetLifecycleConfiguration()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toListAccessPoints()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListMultipartUploadParts()
   * - .toListRegionalBuckets()
   * - .toPutAccessPointPolicy()
   * - .toPutBucketPolicy()
   * - .toPutBucketTagging()
   * - .toPutLifecycleConfiguration()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthType(value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:authType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by requiring the delimiter parameter
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/walkthrough1.html
   *
   * Applies to actions:
   * - .toListBucket()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDelimiter(value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:delimiter`, value, operator || 'StringLike');
  }

  /**
   * Filters access by limiting the maximum number of keys returned in a ListBucket request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#example-numeric-condition-operators
   *
   * Applies to actions:
   * - .toListBucket()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifMaxKeys(value: number | number[], operator?: Operator | string) {
    return this.if(`s3-outposts:max-keys`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by key name prefix
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#condition-key-bucket-ops-2
   *
   * Applies to actions:
   * - .toListBucket()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPrefix(value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:prefix`, value, operator || 'StringLike');
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
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetBucket()
   * - .toGetBucketPolicy()
   * - .toGetBucketTagging()
   * - .toGetLifecycleConfiguration()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toListAccessPoints()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListMultipartUploadParts()
   * - .toListRegionalBuckets()
   * - .toPutAccessPointPolicy()
   * - .toPutBucketPolicy()
   * - .toPutBucketTagging()
   * - .toPutLifecycleConfiguration()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifSignatureAge(value: number | number[], operator?: Operator | string) {
    return this.if(`s3-outposts:signatureAge`, value, operator || 'NumericEquals');
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
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetBucket()
   * - .toGetBucketPolicy()
   * - .toGetBucketTagging()
   * - .toGetLifecycleConfiguration()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toListAccessPoints()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListMultipartUploadParts()
   * - .toListRegionalBuckets()
   * - .toPutAccessPointPolicy()
   * - .toPutBucketPolicy()
   * - .toPutBucketTagging()
   * - .toPutLifecycleConfiguration()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSignatureversion(value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:signatureversion`, value, operator || 'StringLike');
  }

  /**
   * Filters access by requiring the x-amz-acl header with a specific canned ACL in a request
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions
   *
   * Applies to actions:
   * - .toPutObject()
   * - .toPutObjectAcl()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzAcl(value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:x-amz-acl`, value, operator || 'StringLike');
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
   * - .toGetAccessPoint()
   * - .toGetAccessPointPolicy()
   * - .toGetBucket()
   * - .toGetBucketPolicy()
   * - .toGetBucketTagging()
   * - .toGetLifecycleConfiguration()
   * - .toGetObject()
   * - .toGetObjectTagging()
   * - .toListAccessPoints()
   * - .toListBucket()
   * - .toListBucketMultipartUploads()
   * - .toListMultipartUploadParts()
   * - .toListRegionalBuckets()
   * - .toPutAccessPointPolicy()
   * - .toPutBucketPolicy()
   * - .toPutBucketTagging()
   * - .toPutLifecycleConfiguration()
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectTagging()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzContentSha256(value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:x-amz-content-sha256`, value, operator || 'StringLike');
  }

  /**
   * Filters access by restricting the copy source to a specific bucket, prefix, or object
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#putobject-limit-copy-source-3
   *
   * Applies to actions:
   * - .toPutObject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzCopySource(value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:x-amz-copy-source`, value, operator || 'StringLike');
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
    return this.if(`s3-outposts:x-amz-metadata-directive`, value, operator || 'StringLike');
  }

  /**
   * Filters access by requiring server-side encryption
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html
   *
   * Applies to actions:
   * - .toPutObject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzServerSideEncryption(value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:x-amz-server-side-encryption`, value, operator || 'StringLike');
  }

  /**
   * Filters access by storage class
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-howtoset
   *
   * Applies to actions:
   * - .toPutObject()
   * - .toPutObjectAcl()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzStorageClass(value: string | string[], operator?: Operator | string) {
    return this.if(`s3-outposts:x-amz-storage-class`, value, operator || 'StringLike');
  }
}

export type S3OutpostsActionsWrite = 'AbortMultipartUpload' | 'CreateAccessPoint' | 'CreateBucket' | 'CreateEndpoint' | 'DeleteAccessPoint' | 'DeleteBucket' | 'DeleteEndpoint' | 'DeleteObject' | 'PutLifecycleConfiguration' | 'PutObject';
export type S3OutpostsActionsPermissionsManagement = 'DeleteAccessPointPolicy' | 'DeleteBucketPolicy' | 'PutAccessPointPolicy' | 'PutBucketPolicy' | 'PutObjectAcl';
export type S3OutpostsActionsTagging = 'DeleteObjectTagging' | 'PutBucketTagging' | 'PutObjectTagging';
export type S3OutpostsActionsRead = 'GetAccessPoint' | 'GetAccessPointPolicy' | 'GetBucket' | 'GetBucketPolicy' | 'GetBucketTagging' | 'GetLifecycleConfiguration' | 'GetObject' | 'GetObjectTagging';
export type S3OutpostsActionsList = 'ListAccessPoints' | 'ListBucket' | 'ListBucketMultipartUploads' | 'ListEndpoints' | 'ListMultipartUploadParts' | 'ListRegionalBuckets';
export type S3OutpostsActions = S3OutpostsActionsWrite | S3OutpostsActionsPermissionsManagement | S3OutpostsActionsTagging | S3OutpostsActionsRead | S3OutpostsActionsList;
