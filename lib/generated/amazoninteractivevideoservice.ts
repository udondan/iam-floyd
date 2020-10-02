import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [ivs](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoninteractivevideoservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ivs extends PolicyStatement {
  public servicePrefix = 'ivs';

  /**
   * Statement provider for service [ivs](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoninteractivevideoservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get multiple channels simultaneously by channel ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_BatchGetChannel.html
   */
  public toBatchGetChannel() {
    this.to('ivs:BatchGetChannel');
    return this;
  }

  /**
   * Grants permission to get multiple stream keys simultaneously by stream key ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_BatchGetStreamKey.html
   */
  public toBatchGetStreamKey() {
    this.to('ivs:BatchGetStreamKey');
    return this;
  }

  /**
   * Grants permission to create a new channel and an associated stream key.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_CreateChannel.html
   */
  public toCreateChannel() {
    this.to('ivs:CreateChannel');
    return this;
  }

  /**
   * Grants permission to create a stream key.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_CreateStreamKey.html
   */
  public toCreateStreamKey() {
    this.to('ivs:CreateStreamKey');
    return this;
  }

  /**
   * Grants permission to delete a channel and channel's stream keys.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_DeleteChannel.html
   */
  public toDeleteChannel() {
    this.to('ivs:DeleteChannel');
    return this;
  }

  /**
   * Grants permission to delete the playback key pair for a specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_DeletePlaybackKeyPair.html
   */
  public toDeletePlaybackKeyPair() {
    this.to('ivs:DeletePlaybackKeyPair');
    return this;
  }

  /**
   * Grants permission to delete the stream key for a specified ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_DeleteStreamKey.html
   */
  public toDeleteStreamKey() {
    this.to('ivs:DeleteStreamKey');
    return this;
  }

  /**
   * Grants permission to get the channel configuration for a specified channel ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetChannel.html
   */
  public toGetChannel() {
    this.to('ivs:GetChannel');
    return this;
  }

  /**
   * Grants permission to get the playback keypair information for a specified ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetPlaybackKeyPair.html
   */
  public toGetPlaybackKeyPair() {
    this.to('ivs:GetPlaybackKeyPair');
    return this;
  }

  /**
   * Grants permission to get information about the active (live) stream on a specified channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetStream.html
   */
  public toGetStream() {
    this.to('ivs:GetStream');
    return this;
  }

  /**
   * Grants permission to get stream-key information for a specified ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetStreamKey.html
   */
  public toGetStreamKey() {
    this.to('ivs:GetStreamKey');
    return this;
  }

  /**
   * Grants permission to import the public key.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_ImportPlaybackKeyPair.html
   */
  public toImportPlaybackKeyPair() {
    this.to('ivs:ImportPlaybackKeyPair');
    return this;
  }

  /**
   * Grants permission to get summary information about channels
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListChannels.html
   */
  public toListChannels() {
    this.to('ivs:ListChannels');
    return this;
  }

  /**
   * Grants permission to get summary information about playback key pairs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListPlaybackKeyPairs.html
   */
  public toListPlaybackKeyPairs() {
    this.to('ivs:ListPlaybackKeyPairs');
    return this;
  }

  /**
   * Grants permission to get summary information about stream keys
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListStreamKeys.html
   */
  public toListStreamKeys() {
    this.to('ivs:ListStreamKeys');
    return this;
  }

  /**
   * Grants permission to get summary information about live streams
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListStreams.html
   */
  public toListStreams() {
    this.to('ivs:ListStreams');
    return this;
  }

  /**
   * Grants permission to get information about the tags for a specified ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ivs:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to insert metadata into an RTMP stream for a specified channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_PutMetadata.html
   */
  public toPutMetadata() {
    this.to('ivs:PutMetadata');
    return this;
  }

  /**
   * Grants permission to disconnect a streamer on a specified channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_StopStream.html
   */
  public toStopStream() {
    this.to('ivs:StopStream');
    return this;
  }

  /**
   * Grants permission to add or update tags for a resource with a specified ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('ivs:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags for a resource with a specified ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('ivs:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a channel's configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_UpdateChannel.html
   */
  public toUpdateChannel() {
    this.to('ivs:UpdateChannel');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "BatchGetChannel",
      "BatchGetStreamKey",
      "GetChannel",
      "GetPlaybackKeyPair",
      "GetStream",
      "GetStreamKey"
    ],
    "Write": [
      "CreateChannel",
      "CreateStreamKey",
      "DeleteChannel",
      "DeletePlaybackKeyPair",
      "DeleteStreamKey",
      "ImportPlaybackKeyPair",
      "PutMetadata",
      "StopStream",
      "UpdateChannel"
    ],
    "List": [
      "ListChannels",
      "ListPlaybackKeyPairs",
      "ListStreamKeys",
      "ListStreams"
    ],
    "Tagging": [
      "ListTagsForResource",
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type Channel to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_Channel.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:ivs::${Account}:channel/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Stream-Key to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_StreamKey.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStreamKey(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:ivs::${Account}:stream-key/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Playback-Key-Pair to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_PlaybackKeyPair.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPlaybackKeyPair(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:ivs::${Account}:playback-key/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
