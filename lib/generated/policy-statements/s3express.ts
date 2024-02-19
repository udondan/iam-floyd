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
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html
   */
  public toCreateBucket() {
    return this.to('CreateBucket');
  }

  /**
   * Grants permission to Create Session token which is used for object APIs such as PutObject, GetObject, ect
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAuthType()
   * - .ifResourceAccount()
   * - .ifSessionMode()
   * - .ifSignatureAge()
   * - .ifSignatureversion()
   * - .ifTlsVersion()
   * - .ifXAmzContentSha256()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html
   */
  public toCreateSession() {
    return this.to('CreateSession');
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

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateBucket',
      'DeleteBucket'
    ],
    Read: [
      'CreateSession',
      'GetBucketPolicy'
    ],
    'Permissions management': [
      'DeleteBucketPolicy',
      'PutBucketPolicy'
    ],
    List: [
      'ListAllMyDirectoryBuckets'
    ]
  };

  /**
   * Adds a resource of type bucket to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-zonal-buckets.html
   *
   * @param bucketName - Identifier for the bucketName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBucket(bucketName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:s3express:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:bucket/${ bucketName }`);
  }

  /**
   * Filters access by a specific Availability Zone ID
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-express-zonal-policy-keys.html#example-location-name
   *
   * Applies to actions:
   * - .toCreateBucket()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLocationName(value: string | string[], operator?: Operator | string) {
    return this.if(`LocationName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the resource owner AWS account ID
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-express-zonal-policy-keys.html#example-object-resource-account
   *
   * Applies to actions:
   * - .toCreateBucket()
   * - .toCreateSession()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toGetBucketPolicy()
   * - .toListAllMyDirectoryBuckets()
   * - .toPutBucketPolicy()
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
   * - .toCreateBucket()
   * - .toCreateSession()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toGetBucketPolicy()
   * - .toListAllMyDirectoryBuckets()
   * - .toPutBucketPolicy()
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
   * - .toCreateBucket()
   * - .toCreateSession()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toGetBucketPolicy()
   * - .toListAllMyDirectoryBuckets()
   * - .toPutBucketPolicy()
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
   * - .toCreateBucket()
   * - .toCreateSession()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toGetBucketPolicy()
   * - .toListAllMyDirectoryBuckets()
   * - .toPutBucketPolicy()
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
   * - .toCreateBucket()
   * - .toCreateSession()
   * - .toDeleteBucket()
   * - .toDeleteBucketPolicy()
   * - .toGetBucketPolicy()
   * - .toListAllMyDirectoryBuckets()
   * - .toPutBucketPolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifXAmzContentSha256(value: string | string[], operator?: Operator | string) {
    return this.if(`x-amz-content-sha256`, value, operator ?? 'StringLike');
  }
}
