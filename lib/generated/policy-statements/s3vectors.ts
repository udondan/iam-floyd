import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [s3vectors](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3vectors.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class S3vectors extends PolicyStatement {
  public servicePrefix = 's3vectors';

  /**
   * Statement provider for service [s3vectors](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3vectors.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new vector index within a specified vector bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_CreateIndex.html
   */
  public toCreateIndex() {
    return this.to('CreateIndex');
  }

  /**
   * Grants permission to create a new vector bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSseType()
   * - .ifKmsKeyArn()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_CreateVectorBucket.html
   */
  public toCreateVectorBucket() {
    return this.to('CreateVectorBucket');
  }

  /**
   * Grants permission to delete a specified vector index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_DeleteIndex.html
   */
  public toDeleteIndex() {
    return this.to('DeleteIndex');
  }

  /**
   * Grants permission to delete a specified vector bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_DeleteVectorBucket.html
   */
  public toDeleteVectorBucket() {
    return this.to('DeleteVectorBucket');
  }

  /**
   * Grants permission to delete the IAM resource policy from a specified vector bucket
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_DeleteVectorBucketPolicy.html
   */
  public toDeleteVectorBucketPolicy() {
    return this.to('DeleteVectorBucketPolicy');
  }

  /**
   * Grants permission to delete a batch of vectors from a specified vector index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_DeleteVectors.html
   */
  public toDeleteVectors() {
    return this.to('DeleteVectors');
  }

  /**
   * Grants permission to get the attributes of a specified vector index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_GetIndex.html
   */
  public toGetIndex() {
    return this.to('GetIndex');
  }

  /**
   * Grants permission to get the attributes of a specified vector bucket
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_GetVectorBucket.html
   */
  public toGetVectorBucket() {
    return this.to('GetVectorBucket');
  }

  /**
   * Grants permission to get the IAM resource policy for a specific vector bucket
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_GetVectorBucketPolicy.html
   */
  public toGetVectorBucketPolicy() {
    return this.to('GetVectorBucketPolicy');
  }

  /**
   * Grants permission to get a batch of vectors by their vector keys
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_GetVectors.html
   */
  public toGetVectors() {
    return this.to('GetVectors');
  }

  /**
   * Grants permission to get a paginated list of all indexes in a specified vector bucket
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_ListIndexes.html
   */
  public toListIndexes() {
    return this.to('ListIndexes');
  }

  /**
   * Grants permission to get a paginated list of all vector buckets in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_ListVectorBuckets.html
   */
  public toListVectorBuckets() {
    return this.to('ListVectorBuckets');
  }

  /**
   * Grants permission to get a paginated list of all vectors in a specified vector index
   *
   * Access Level: List
   *
   * Dependent actions:
   * - s3vectors:GetVectors
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_ListVectors.html
   */
  public toListVectors() {
    return this.to('ListVectors');
  }

  /**
   * Grants permission to add an IAM resource policy to a specified vector bucket
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_PutVectorBucketPolicy.html
   */
  public toPutVectorBucketPolicy() {
    return this.to('PutVectorBucketPolicy');
  }

  /**
   * Grants permission to add a batch of vectors to a specified vector index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_PutVectors.html
   */
  public toPutVectors() {
    return this.to('PutVectors');
  }

  /**
   * Grants permission to find approximate nearest neighbors within a specified search vector index for a given query vector
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - s3vectors:GetVectors
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_S3VectorBuckets_QueryVectors.html
   */
  public toQueryVectors() {
    return this.to('QueryVectors');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateIndex',
      'CreateVectorBucket',
      'DeleteIndex',
      'DeleteVectorBucket',
      'DeleteVectors',
      'PutVectors'
    ],
    'Permissions management': [
      'DeleteVectorBucketPolicy',
      'PutVectorBucketPolicy'
    ],
    Read: [
      'GetIndex',
      'GetVectorBucket',
      'GetVectorBucketPolicy',
      'GetVectors',
      'QueryVectors'
    ],
    List: [
      'ListIndexes',
      'ListVectorBuckets',
      'ListVectors'
    ]
  };

  /**
   * Adds a resource of type Index to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-access-management.html
   *
   * @param bucketName - Identifier for the bucketName.
   * @param indexName - Identifier for the indexName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onIndex(bucketName: string, indexName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:s3vectors:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:bucket/${ bucketName }/index/${ indexName }`);
  }

  /**
   * Adds a resource of type VectorBucket to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-access-management.html
   *
   * @param bucketName - Identifier for the bucketName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onVectorBucket(bucketName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:s3vectors:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:bucket/${ bucketName }`);
  }

  /**
   * Filters access by the AWS KMS key ARN for the key used to encrypt a vector bucket
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-access-management.html#s3-vectors-condition-keyss3-vectors-access-management.html
   *
   * Applies to actions:
   * - .toCreateVectorBucket()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifKmsKeyArn(value: string | string[], operator?: Operator | string) {
    return this.if(`kmsKeyArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by server-side encryption type
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-access-management.html#s3-vectors-condition-keyss3-vectors-access-management.html
   *
   * Applies to actions:
   * - .toCreateVectorBucket()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSseType(value: string | string[], operator?: Operator | string) {
    return this.if(`sseType`, value, operator ?? 'StringLike');
  }
}
