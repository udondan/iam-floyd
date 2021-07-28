import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [s3-object-lambda](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3objectlambda.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class S3ObjectLambda extends PolicyStatement {
  public servicePrefix = 's3-object-lambda';

  /**
   * Statement provider for service [s3-object-lambda](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3objectlambda.html).
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html
   */
  public toAbortMultipartUpload() {
    return this.to('AbortMultipartUpload');
  }

  /**
   * Grants permission to remove the null version of an object and insert a delete marker, which becomes the current version of the object
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   * - .ifVersionid()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   * - .ifVersionid()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   */
  public toDeleteObjectVersionTagging() {
    return this.to('DeleteObjectVersionTagging');
  }

  /**
   * Grants permission to retrieve objects from Amazon S3
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   * - .ifVersionid()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   * - .ifVersionid()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
   */
  public toGetObjectVersionAcl() {
    return this.to('GetObjectVersionAcl');
  }

  /**
   * Grants permission to return the tag set for a specific version of the object
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   * - .ifVersionid()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html
   */
  public toGetObjectVersionTagging() {
    return this.to('GetObjectVersionTagging');
  }

  /**
   * Grants permission to list some or all of the objects in an Amazon S3 bucket (up to 1000)
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html
   */
  public toListBucketVersions() {
    return this.to('ListBucketVersions');
  }

  /**
   * Grants permission to list the parts that have been uploaded for a specific multipart upload
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html
   */
  public toListMultipartUploadParts() {
    return this.to('ListMultipartUploadParts');
  }

  /**
   * Grants permission to add an object to a bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html
   */
  public toPutObject() {
    return this.to('PutObject');
  }

  /**
   * Grants permission to set the access control list (ACL) permissions for new or existing objects in an S3 bucket.
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   * - .ifVersionid()
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
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   * - .ifVersionid()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   */
  public toPutObjectVersionTagging() {
    return this.to('PutObjectVersionTagging');
  }

  /**
   * Grants permission to restore an archived copy of an object back into Amazon S3
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html
   */
  public toRestoreObject() {
    return this.to('RestoreObject');
  }

  /**
   * Grants permission to provide data for GetObject requests send to S3 Object Lambda
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifSignatureAge()
   * - .ifTlsVersion()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_WriteGetObjectResponse.html
   */
  public toWriteGetObjectResponse() {
    return this.to('WriteGetObjectResponse');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AbortMultipartUpload",
      "DeleteObject",
      "DeleteObjectVersion",
      "PutObject",
      "PutObjectLegalHold",
      "PutObjectRetention",
      "RestoreObject",
      "WriteGetObjectResponse"
    ],
    "Tagging": [
      "DeleteObjectTagging",
      "DeleteObjectVersionTagging",
      "PutObjectTagging",
      "PutObjectVersionTagging"
    ],
    "Read": [
      "GetObject",
      "GetObjectAcl",
      "GetObjectLegalHold",
      "GetObjectRetention",
      "GetObjectTagging",
      "GetObjectVersion",
      "GetObjectVersionAcl",
      "GetObjectVersionTagging"
    ],
    "List": [
      "ListBucket",
      "ListBucketMultipartUploads",
      "ListBucketVersions",
      "ListMultipartUploadParts"
    ],
    "Permissions management": [
      "PutObjectAcl",
      "PutObjectVersionAcl"
    ]
  };

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
    var arn = 'arn:${Partition}:s3-object-lambda:${Region}:${Account}:accesspoint/${AccessPointName}';
    arn = arn.replace('${AccessPointName}', accessPointName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the TLS version used by the client
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
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
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectLegalHold()
   * - .toPutObjectRetention()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   * - .toRestoreObject()
   * - .toWriteGetObjectResponse()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifTlsVersion(value: number | number[], operator?: Operator | string) {
    return this.if(`TlsVersion`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by authentication method
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
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
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectLegalHold()
   * - .toPutObjectRetention()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   * - .toRestoreObject()
   * - .toWriteGetObjectResponse()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthType(value: string | string[], operator?: Operator | string) {
    return this.if(`authType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the age in milliseconds of the request signature
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html
   *
   * Applies to actions:
   * - .toAbortMultipartUpload()
   * - .toDeleteObject()
   * - .toDeleteObjectTagging()
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
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
   * - .toPutObject()
   * - .toPutObjectAcl()
   * - .toPutObjectLegalHold()
   * - .toPutObjectRetention()
   * - .toPutObjectTagging()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   * - .toRestoreObject()
   * - .toWriteGetObjectResponse()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifSignatureAge(value: number | number[], operator?: Operator | string) {
    return this.if(`signatureAge`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by a specific object version
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html/#getobjectversion-limit-access-to-specific-version-3
   *
   * Applies to actions:
   * - .toDeleteObjectVersion()
   * - .toDeleteObjectVersionTagging()
   * - .toGetObjectVersion()
   * - .toGetObjectVersionAcl()
   * - .toGetObjectVersionTagging()
   * - .toPutObjectVersionAcl()
   * - .toPutObjectVersionTagging()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVersionid(value: string | string[], operator?: Operator | string) {
    return this.if(`versionid`, value, operator || 'StringLike');
  }
}
