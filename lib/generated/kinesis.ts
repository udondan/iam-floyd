import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [kinesis](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesis.html).
 *
 * @param options - Options for the statement
 */
export class Kinesis extends PolicyStatement {
  public servicePrefix = 'kinesis';

  /**
   * Statement provider for service [kinesis](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesis.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to add or update tags for the specified Amazon Kinesis stream. Each stream can have up to 10 tags
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
      'RemoveTagsFromStream'
    ],
    Write: [
      'CreateStream',
      'DecreaseStreamRetentionPeriod',
      'DeleteStream',
      'DeregisterStreamConsumer',
      'DisableEnhancedMonitoring',
      'EnableEnhancedMonitoring',
      'IncreaseStreamRetentionPeriod',
      'MergeShards',
      'PutRecord',
      'PutRecords',
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
      'GetShardIterator',
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onStream(streamName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:kinesis:${ region || '*' }:${ account || '*' }:stream/${ streamName }`);
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConsumer(streamType: string, streamName: string, consumerName: string, consumerCreationTimpstamp: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:kinesis:${ region || '*' }:${ account || '*' }:${ streamType }/${ streamName }/consumer/${ consumerName }:${ consumerCreationTimpstamp }`);
  }

  /**
   * Adds a resource of type kmsKey to the statement
   *
   * https://docs.aws.amazon.com/kinesis/latest/dev/concepts.html#kms_keys
   *
   * @param keyId - Identifier for the keyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onKmsKey(keyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:kms:${ region || '*' }:${ account || '*' }:key/${ keyId }`);
  }
}
