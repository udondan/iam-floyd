import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [kinesis](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisdatastreams.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kinesis extends PolicyStatement {
  public servicePrefix = 'kinesis';

  /**
   * Statement provider for service [kinesis](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisdatastreams.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add or update tags for the specified Amazon Kinesis stream. Each stream can have up to 50 tags
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_AddTagsToStream.html
   */
  public toAddTagsToStream() {
    return this.to('AddTagsToStream');
  }

  /**
   * Grants permission to create a Amazon Kinesis stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_CreateStream.html
   */
  public toCreateStream() {
    return this.to('CreateStream');
  }

  /**
   * Grants permission to decrease the stream's retention period, which is the length of time data records are accessible after they are added to the stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DecreaseStreamRetentionPeriod.html
   */
  public toDecreaseStreamRetentionPeriod() {
    return this.to('DecreaseStreamRetentionPeriod');
  }

  /**
   * Grants permission to delete a resource policy associated with a specified stream or consumer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a stream and all its shards and data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeleteStream.html
   */
  public toDeleteStream() {
    return this.to('DeleteStream');
  }

  /**
   * Grants permission to deregister a stream consumer with a Kinesis data stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeregisterStreamConsumer.html
   */
  public toDeregisterStreamConsumer() {
    return this.to('DeregisterStreamConsumer');
  }

  /**
   * Grants permission to describe the shard limits and usage for the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeLimits.html
   */
  public toDescribeLimits() {
    return this.to('DescribeLimits');
  }

  /**
   * Grants permission to describe the specified stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStream.html
   */
  public toDescribeStream() {
    return this.to('DescribeStream');
  }

  /**
   * Grants permission to get the description of a registered stream consumer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamConsumer.html
   */
  public toDescribeStreamConsumer() {
    return this.to('DescribeStreamConsumer');
  }

  /**
   * Grants permission to provide a summarized description of the specified Kinesis data stream without the shard list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamSummary.html
   */
  public toDescribeStreamSummary() {
    return this.to('DescribeStreamSummary');
  }

  /**
   * Grants permission to disables enhanced monitoring
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DisableEnhancedMonitoring.html
   */
  public toDisableEnhancedMonitoring() {
    return this.to('DisableEnhancedMonitoring');
  }

  /**
   * Grants permission to enable enhanced Kinesis data stream monitoring for shard-level metrics
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_EnableEnhancedMonitoring.html
   */
  public toEnableEnhancedMonitoring() {
    return this.to('EnableEnhancedMonitoring');
  }

  /**
   * Grants permission to get data records from a shard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html
   */
  public toGetRecords() {
    return this.to('GetRecords');
  }

  /**
   * Grants permission to get a resource policy associated with a specified stream or consumer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to get a shard iterator. A shard iterator expires five minutes after it is returned to the requester
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html
   */
  public toGetShardIterator() {
    return this.to('GetShardIterator');
  }

  /**
   * Grants permission to increase the stream's retention period, which is the length of time data records are accessible after they are added to the stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_IncreaseStreamRetentionPeriod.html
   */
  public toIncreaseStreamRetentionPeriod() {
    return this.to('IncreaseStreamRetentionPeriod');
  }

  /**
   * Grants permission to list the shards in a stream and provides information about each shard
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListShards.html
   */
  public toListShards() {
    return this.to('ListShards');
  }

  /**
   * Grants permission to list the stream consumers registered to receive data from a Kinesis stream using enhanced fan-out, and provides information about each consumer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreamConsumers.html
   */
  public toListStreamConsumers() {
    return this.to('ListStreamConsumers');
  }

  /**
   * Grants permission to list your streams
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreams.html
   */
  public toListStreams() {
    return this.to('ListStreams');
  }

  /**
   * Grants permission to list the tags for the specified Amazon Kinesis resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the tags for the specified Amazon Kinesis stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListTagsForStream.html
   */
  public toListTagsForStream() {
    return this.to('ListTagsForStream');
  }

  /**
   * Grants permission to merge two adjacent shards in a stream and combines them into a single shard to reduce the stream's capacity to ingest and transport data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_MergeShards.html
   */
  public toMergeShards() {
    return this.to('MergeShards');
  }

  /**
   * Grants permission to write a single data record from a producer into an Amazon Kinesis stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html
   */
  public toPutRecord() {
    return this.to('PutRecord');
  }

  /**
   * Grants permission to write multiple data records from a producer into an Amazon Kinesis stream in a single call (also referred to as a PutRecords request)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecords.html
   */
  public toPutRecords() {
    return this.to('PutRecords');
  }

  /**
   * Grants permission to attach a resource policy to a specified stream or consumer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to register a stream consumer with a Kinesis data stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_RegisterStreamConsumer.html
   */
  public toRegisterStreamConsumer() {
    return this.to('RegisterStreamConsumer');
  }

  /**
   * Grants permission to remove tags from the specified Kinesis data stream. Removed tags are deleted and cannot be recovered after this operation successfully completes
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_RemoveTagsFromStream.html
   */
  public toRemoveTagsFromStream() {
    return this.to('RemoveTagsFromStream');
  }

  /**
   * Grants permission to split a shard into two new shards in the Kinesis data stream, to increase the stream's capacity to ingest and transport data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SplitShard.html
   */
  public toSplitShard() {
    return this.to('SplitShard');
  }

  /**
   * Grants permission to enable or update server-side encryption using an AWS KMS key for a specified stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StartStreamEncryption.html
   */
  public toStartStreamEncryption() {
    return this.to('StartStreamEncryption');
  }

  /**
   * Grants permission to disable server-side encryption for a specified stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StopStreamEncryption.html
   */
  public toStopStreamEncryption() {
    return this.to('StopStreamEncryption');
  }

  /**
   * Grants permission to listen to a specific shard with enhanced fan-out
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SubscribeToShard.html
   */
  public toSubscribeToShard() {
    return this.to('SubscribeToShard');
  }

  /**
   * Grants permission to add or update tags for the specified Amazon Kinesis resource. Each resource can have up to 50 tags
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from the specified Kinesis data resource. Removed tags are deleted and cannot be recovered after this operation successfully completes
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the shard count of the specified stream to the specified number of shards
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_UpdateShardCount.html
   */
  public toUpdateShardCount() {
    return this.to('UpdateShardCount');
  }

  /**
   * Grants permission to update the capacity mode of the data stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_UpdateStreamMode.html
   */
  public toUpdateStreamMode() {
    return this.to('UpdateStreamMode');
  }

  protected accessLevelList: AccessLevelList = {
    Tagging: [
      'AddTagsToStream',
      'RemoveTagsFromStream',
      'TagResource',
      'UntagResource'
    ],
    Write: [
      'CreateStream',
      'DecreaseStreamRetentionPeriod',
      'DeleteResourcePolicy',
      'DeleteStream',
      'DeregisterStreamConsumer',
      'DisableEnhancedMonitoring',
      'EnableEnhancedMonitoring',
      'IncreaseStreamRetentionPeriod',
      'MergeShards',
      'PutRecord',
      'PutRecords',
      'PutResourcePolicy',
      'RegisterStreamConsumer',
      'SplitShard',
      'StartStreamEncryption',
      'StopStreamEncryption',
      'UpdateShardCount',
      'UpdateStreamMode'
    ],
    Read: [
      'DescribeLimits',
      'DescribeStream',
      'DescribeStreamConsumer',
      'DescribeStreamSummary',
      'GetRecords',
      'GetResourcePolicy',
      'GetShardIterator',
      'ListTagsForResource',
      'ListTagsForStream',
      'SubscribeToShard'
    ],
    List: [
      'ListShards',
      'ListStreamConsumers',
      'ListStreams'
    ]
  };

  /**
   * Adds a resource of type stream to the statement
   *
   * https://docs.aws.amazon.com/kinesis/latest/dev/amazon-kinesis-streams.html
   *
   * @param streamName - Identifier for the streamName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStream(streamName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kinesis:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:stream/${ streamName }`);
  }

  /**
   * Adds a resource of type consumer to the statement
   *
   * https://docs.aws.amazon.com/kinesis/latest/dev/amazon-kinesis-consumers.html
   *
   * @param streamType - Identifier for the streamType.
   * @param streamName - Identifier for the streamName.
   * @param consumerName - Identifier for the consumerName.
   * @param consumerCreationTimpstamp - Identifier for the consumerCreationTimpstamp.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConsumer(streamType: string, streamName: string, consumerName: string, consumerCreationTimpstamp: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kinesis:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:${ streamType }/${ streamName }/consumer/${ consumerName }:${ consumerCreationTimpstamp }`);
  }

  /**
   * Adds a resource of type kmsKey to the statement
   *
   * https://docs.aws.amazon.com/kinesis/latest/dev/concepts.html#kms_keys
   *
   * @param keyId - Identifier for the keyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onKmsKey(keyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:key/${ keyId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAddTagsToStream()
   * - .toCreateStream()
   * - .toRegisterStreamConsumer()
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
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAddTagsToStream()
   * - .toCreateStream()
   * - .toDecreaseStreamRetentionPeriod()
   * - .toDeleteResourcePolicy()
   * - .toDeleteStream()
   * - .toDeregisterStreamConsumer()
   * - .toDescribeStream()
   * - .toDescribeStreamConsumer()
   * - .toDescribeStreamSummary()
   * - .toGetRecords()
   * - .toGetResourcePolicy()
   * - .toGetShardIterator()
   * - .toIncreaseStreamRetentionPeriod()
   * - .toListShards()
   * - .toListStreamConsumers()
   * - .toListTagsForResource()
   * - .toListTagsForStream()
   * - .toMergeShards()
   * - .toPutRecord()
   * - .toPutRecords()
   * - .toPutResourcePolicy()
   * - .toRegisterStreamConsumer()
   * - .toRemoveTagsFromStream()
   * - .toSplitShard()
   * - .toStartStreamEncryption()
   * - .toStopStreamEncryption()
   * - .toSubscribeToShard()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - stream
   * - consumer
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAddTagsToStream()
   * - .toCreateStream()
   * - .toRegisterStreamConsumer()
   * - .toRemoveTagsFromStream()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
