import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [kinesis](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesis.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kinesis extends PolicyStatement {
  public servicePrefix = 'kinesis';

  /**
   * Statement provider for service [kinesis](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesis.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds or updates tags for the specified Amazon Kinesis stream. Each stream can have up to 10 tags.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_AddTagsToStream.html
   */
  public toAddTagsToStream() {
    return this.to('AddTagsToStream');
  }

  /**
   * Creates a Amazon Kinesis stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_CreateStream.html
   */
  public toCreateStream() {
    return this.to('CreateStream');
  }

  /**
   * Decreases the stream's retention period, which is the length of time data records are accessible after they are added to the stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DecreaseStreamRetentionPeriod.html
   */
  public toDecreaseStreamRetentionPeriod() {
    return this.to('DecreaseStreamRetentionPeriod');
  }

  /**
   * Deletes a stream and all its shards and data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeleteStream.html
   */
  public toDeleteStream() {
    return this.to('DeleteStream');
  }

  /**
   * Deregisters a stream consumer with a Kinesis data stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeregisterStreamConsumer.html
   */
  public toDeregisterStreamConsumer() {
    return this.to('DeregisterStreamConsumer');
  }

  /**
   * Describes the shard limits and usage for the account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeLimits.html
   */
  public toDescribeLimits() {
    return this.to('DescribeLimits');
  }

  /**
   * Describes the specified stream.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStream.html
   */
  public toDescribeStream() {
    return this.to('DescribeStream');
  }

  /**
   * Gets the description of a registered stream consumer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamConsumer.html
   */
  public toDescribeStreamConsumer() {
    return this.to('DescribeStreamConsumer');
  }

  /**
   * Provides a summarized description of the specified Kinesis data stream without the shard list.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamSummary.html
   */
  public toDescribeStreamSummary() {
    return this.to('DescribeStreamSummary');
  }

  /**
   * Disables enhanced monitoring.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DisableEnhancedMonitoring.html
   */
  public toDisableEnhancedMonitoring() {
    return this.to('DisableEnhancedMonitoring');
  }

  /**
   * API_EnableEnhancedMonitoring.html
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_EnableEnhancedMonitoring.html
   */
  public toEnableEnhancedMonitoring() {
    return this.to('EnableEnhancedMonitoring');
  }

  /**
   * Gets data records from a shard.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html
   */
  public toGetRecords() {
    return this.to('GetRecords');
  }

  /**
   * Gets a shard iterator. A shard iterator expires five minutes after it is returned to the requester.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html
   */
  public toGetShardIterator() {
    return this.to('GetShardIterator');
  }

  /**
   * Increases the stream's retention period, which is the length of time data records are accessible after they are added to the stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_IncreaseStreamRetentionPeriod.html
   */
  public toIncreaseStreamRetentionPeriod() {
    return this.to('IncreaseStreamRetentionPeriod');
  }

  /**
   * Lists the shards in a stream and provides information about each shard.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListShards.html
   */
  public toListShards() {
    return this.to('ListShards');
  }

  /**
   * Lists the stream consumers registered to receive data from a Kinesis stream using enhanced fan-out, and provides information about each consumer.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreamConsumers.html
   */
  public toListStreamConsumers() {
    return this.to('ListStreamConsumers');
  }

  /**
   * Lists your streams.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreams.html
   */
  public toListStreams() {
    return this.to('ListStreams');
  }

  /**
   * Lists the tags for the specified Amazon Kinesis stream.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListTagsForStream.html
   */
  public toListTagsForStream() {
    return this.to('ListTagsForStream');
  }

  /**
   * Merges two adjacent shards in a stream and combines them into a single shard to reduce the stream's capacity to ingest and transport data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_MergeShards.html
   */
  public toMergeShards() {
    return this.to('MergeShards');
  }

  /**
   * Writes a single data record from a producer into an Amazon Kinesis stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html
   */
  public toPutRecord() {
    return this.to('PutRecord');
  }

  /**
   * Writes multiple data records from a producer into an Amazon Kinesis stream in a single call (also referred to as a PutRecords request).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecords.html
   */
  public toPutRecords() {
    return this.to('PutRecords');
  }

  /**
   * Registers a stream consumer with a Kinesis data stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_RegisterStreamConsumer.html
   */
  public toRegisterStreamConsumer() {
    return this.to('RegisterStreamConsumer');
  }

  /**
   * Description for SplitShard
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_RemoveTagsFromStream.html
   */
  public toRemoveTagsFromStream() {
    return this.to('RemoveTagsFromStream');
  }

  /**
   * Description for SplitShard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SplitShard.html
   */
  public toSplitShard() {
    return this.to('SplitShard');
  }

  /**
   * Grants permission to enable or update server-side encryption using an AWS KMS key for a specified stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StartStreamEncryption.html
   */
  public toStartStreamEncryption() {
    return this.to('StartStreamEncryption');
  }

  /**
   * Grants permission to disable server-side encryption for a specified stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StopStreamEncryption.html
   */
  public toStopStreamEncryption() {
    return this.to('StopStreamEncryption');
  }

  /**
   * Listening to a specific shard with enhanced fan-out.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SubscribeToShard.html
   */
  public toSubscribeToShard() {
    return this.to('SubscribeToShard');
  }

  /**
   * Updates the shard count of the specified stream to the specified number of shards.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_UpdateShardCount.html
   */
  public toUpdateShardCount() {
    return this.to('UpdateShardCount');
  }

  protected accessLevelList: AccessLevelList = {
    "Tagging": [
      "AddTagsToStream",
      "RemoveTagsFromStream"
    ],
    "Write": [
      "CreateStream",
      "DecreaseStreamRetentionPeriod",
      "DeleteStream",
      "DeregisterStreamConsumer",
      "DisableEnhancedMonitoring",
      "EnableEnhancedMonitoring",
      "IncreaseStreamRetentionPeriod",
      "MergeShards",
      "PutRecord",
      "PutRecords",
      "RegisterStreamConsumer",
      "SplitShard",
      "StartStreamEncryption",
      "StopStreamEncryption",
      "UpdateShardCount"
    ],
    "Read": [
      "DescribeLimits",
      "DescribeStream",
      "DescribeStreamConsumer",
      "DescribeStreamSummary",
      "GetRecords",
      "GetShardIterator",
      "ListTagsForStream",
      "SubscribeToShard"
    ],
    "List": [
      "ListShards",
      "ListStreamConsumers",
      "ListStreams"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onStream(streamName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:kinesis:${ region || '*' }:${ account || '*' }:stream/${ streamName }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConsumer(streamType: string, streamName: string, consumerName: string, consumerCreationTimpstamp: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:kinesis:${ region || '*' }:${ account || '*' }:${ streamType }/${ streamName }/consumer/${ consumerName }:${ consumerCreationTimpstamp }`);
  }

  /**
   * Adds a resource of type kmsKey to the statement
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys
   *
   * @param keyId - Identifier for the keyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onKmsKey(keyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:kms:${ region || '*' }:${ account || '*' }:key/${ keyId }`);
  }
}
