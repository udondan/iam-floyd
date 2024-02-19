import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [kinesisvideo](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisvideostreams.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kinesisvideo extends PolicyStatement {
  public servicePrefix = 'kinesisvideo';

  /**
   * Statement provider for service [kinesisvideo](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisvideostreams.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to connect as a master to the signaling channel specified by the endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ConnectAsMaster.html
   */
  public toConnectAsMaster() {
    return this.to('ConnectAsMaster');
  }

  /**
   * Grants permission to connect as a viewer to the signaling channel specified by the endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ConnectAsViewer.html
   */
  public toConnectAsViewer() {
    return this.to('ConnectAsViewer');
  }

  /**
   * Grants permission to create a signaling channel
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_CreateSignalingChannel.html
   */
  public toCreateSignalingChannel() {
    return this.to('CreateSignalingChannel');
  }

  /**
   * Grants permission to create a Kinesis video stream
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_CreateStream.html
   */
  public toCreateStream() {
    return this.to('CreateStream');
  }

  /**
   * Grants permission to delete the edge configuration of your Kinesis Video Stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteEdgeConfiguration.html
   */
  public toDeleteEdgeConfiguration() {
    return this.to('DeleteEdgeConfiguration');
  }

  /**
   * Grants permission to delete an existing signaling channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteSignalingChannel.html
   */
  public toDeleteSignalingChannel() {
    return this.to('DeleteSignalingChannel');
  }

  /**
   * Grants permission to delete an existing Kinesis video stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteStream.html
   */
  public toDeleteStream() {
    return this.to('DeleteStream');
  }

  /**
   * Grants permission to describe the edge configuration of your Kinesis Video Stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeEdgeConfiguration.html
   */
  public toDescribeEdgeConfiguration() {
    return this.to('DescribeEdgeConfiguration');
  }

  /**
   * Grants permission to describe the image generation configuration of your Kinesis video stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeImageGenerationConfiguration.html
   */
  public toDescribeImageGenerationConfiguration() {
    return this.to('DescribeImageGenerationConfiguration');
  }

  /**
   * Grants permission to describe the resource mapped to the Kinesis video stream
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeMappedResourceConfiguration.html
   */
  public toDescribeMappedResourceConfiguration() {
    return this.to('DescribeMappedResourceConfiguration');
  }

  /**
   * Grants permission to describe the media storage configuration of a signaling channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeMediaStorageConfiguration.html
   */
  public toDescribeMediaStorageConfiguration() {
    return this.to('DescribeMediaStorageConfiguration');
  }

  /**
   * Grants permission to describe the notification configuration of your Kinesis video stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeNotificationConfiguration.html
   */
  public toDescribeNotificationConfiguration() {
    return this.to('DescribeNotificationConfiguration');
  }

  /**
   * Grants permission to describe the specified signaling channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeSignalingChannel.html
   */
  public toDescribeSignalingChannel() {
    return this.to('DescribeSignalingChannel');
  }

  /**
   * Grants permission to describe the specified Kinesis video stream
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html
   */
  public toDescribeStream() {
    return this.to('DescribeStream');
  }

  /**
   * Grants permission to get a media clip from a video stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetClip.html
   */
  public toGetClip() {
    return this.to('GetClip');
  }

  /**
   * Grants permission to create a URL for MPEG-DASH video streaming
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetDASHStreamingSessionURL.html
   */
  public toGetDASHStreamingSessionURL() {
    return this.to('GetDASHStreamingSessionURL');
  }

  /**
   * Grants permission to get an endpoint for a specified stream for either reading or writing media data to Kinesis Video Streams
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html
   */
  public toGetDataEndpoint() {
    return this.to('GetDataEndpoint');
  }

  /**
   * Grants permission to create a URL for HLS video streaming
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetHLSStreamingSessionURL.html
   */
  public toGetHLSStreamingSessionURL() {
    return this.to('GetHLSStreamingSessionURL');
  }

  /**
   * Grants permission to get the ICE server configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_AWSAcuitySignalingService_GetIceServerConfig.html
   */
  public toGetIceServerConfig() {
    return this.to('GetIceServerConfig');
  }

  /**
   * Grants permission to get generated images from your Kinesis video stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetImages.html
   */
  public toGetImages() {
    return this.to('GetImages');
  }

  /**
   * Grants permission to return media content of a Kinesis video stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_GetMedia.html
   */
  public toGetMedia() {
    return this.to('GetMedia');
  }

  /**
   * Grants permission to read and return media data only from persisted storage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetMediaForFragmentList.html
   */
  public toGetMediaForFragmentList() {
    return this.to('GetMediaForFragmentList');
  }

  /**
   * Grants permission to get endpoints for a specified combination of protocol and role for a signaling channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetSignalingChannelEndpoint.html
   */
  public toGetSignalingChannelEndpoint() {
    return this.to('GetSignalingChannelEndpoint');
  }

  /**
   * Grants permission to join a storage session for a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_AWSAcuityRoutingServiceLambda_JoinStorageSession.html
   */
  public toJoinStorageSession() {
    return this.to('JoinStorageSession');
  }

  /**
   * Grants permission to list an edge agent configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListEdgeAgentConfigurations.html
   */
  public toListEdgeAgentConfigurations() {
    return this.to('ListEdgeAgentConfigurations');
  }

  /**
   * Grants permission to list the fragments from archival storage based on the pagination token or selector type with range specified
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_ListFragments.html
   */
  public toListFragments() {
    return this.to('ListFragments');
  }

  /**
   * Grants permission to list your signaling channels
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListSignalingChannels.html
   */
  public toListSignalingChannels() {
    return this.to('ListSignalingChannels');
  }

  /**
   * Grants permission to list your Kinesis video streams
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListStreams.html
   */
  public toListStreams() {
    return this.to('ListStreams');
  }

  /**
   * Grants permission to fetch the tags associated with your resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to fetch the tags associated with Kinesis video stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListTagsForStream.html
   */
  public toListTagsForStream() {
    return this.to('ListTagsForStream');
  }

  /**
   * Grants permission to send media data to a Kinesis video stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_PutMedia.html
   */
  public toPutMedia() {
    return this.to('PutMedia');
  }

  /**
   * Grants permission to send the Alexa SDP offer to the master
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_AWSAcuitySignalingService_SendAlexaOfferToMaster.html
   */
  public toSendAlexaOfferToMaster() {
    return this.to('SendAlexaOfferToMaster');
  }

  /**
   * Grants permission to start edge configuration update of your Kinesis Video Stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_StartEdgeConfigurationUpdate.html
   */
  public toStartEdgeConfigurationUpdate() {
    return this.to('StartEdgeConfigurationUpdate');
  }

  /**
   * Grants permission to attach set of tags to your resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to attach set of tags to your Kinesis video streams
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_TagStream.html
   */
  public toTagStream() {
    return this.to('TagStream');
  }

  /**
   * Grants permission to remove one or more tags from your resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to remove one or more tags from your Kinesis video streams
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UntagStream.html
   */
  public toUntagStream() {
    return this.to('UntagStream');
  }

  /**
   * Grants permission to update the data retention period of your Kinesis video stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateDataRetention.html
   */
  public toUpdateDataRetention() {
    return this.to('UpdateDataRetention');
  }

  /**
   * Grants permission to update the image generation configuration of your Kinesis video stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateImageGenerationConfiguration.html
   */
  public toUpdateImageGenerationConfiguration() {
    return this.to('UpdateImageGenerationConfiguration');
  }

  /**
   * Grants permission to create or update an mapping between a signaling channel and stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateMediaStorageConfiguration.html
   */
  public toUpdateMediaStorageConfiguration() {
    return this.to('UpdateMediaStorageConfiguration');
  }

  /**
   * Grants permission to update the notification configuration of your Kinesis video stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateNotificationConfiguration.html
   */
  public toUpdateNotificationConfiguration() {
    return this.to('UpdateNotificationConfiguration');
  }

  /**
   * Grants permission to update an existing signaling channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateSignalingChannel.html
   */
  public toUpdateSignalingChannel() {
    return this.to('UpdateSignalingChannel');
  }

  /**
   * Grants permission to update an existing Kinesis video stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateStream.html
   */
  public toUpdateStream() {
    return this.to('UpdateStream');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ConnectAsMaster',
      'ConnectAsViewer',
      'CreateSignalingChannel',
      'CreateStream',
      'DeleteEdgeConfiguration',
      'DeleteSignalingChannel',
      'DeleteStream',
      'JoinStorageSession',
      'PutMedia',
      'SendAlexaOfferToMaster',
      'StartEdgeConfigurationUpdate',
      'UpdateDataRetention',
      'UpdateImageGenerationConfiguration',
      'UpdateMediaStorageConfiguration',
      'UpdateNotificationConfiguration',
      'UpdateSignalingChannel',
      'UpdateStream'
    ],
    Read: [
      'DescribeEdgeConfiguration',
      'DescribeImageGenerationConfiguration',
      'DescribeMediaStorageConfiguration',
      'DescribeNotificationConfiguration',
      'GetClip',
      'GetDASHStreamingSessionURL',
      'GetDataEndpoint',
      'GetHLSStreamingSessionURL',
      'GetIceServerConfig',
      'GetImages',
      'GetMedia',
      'GetMediaForFragmentList',
      'GetSignalingChannelEndpoint',
      'ListTagsForResource',
      'ListTagsForStream'
    ],
    List: [
      'DescribeMappedResourceConfiguration',
      'DescribeSignalingChannel',
      'DescribeStream',
      'ListEdgeAgentConfigurations',
      'ListFragments',
      'ListSignalingChannels',
      'ListStreams'
    ],
    Tagging: [
      'TagResource',
      'TagStream',
      'UntagResource',
      'UntagStream'
    ]
  };

  /**
   * Adds a resource of type stream to the statement
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html
   *
   * @param streamName - Identifier for the streamName.
   * @param creationTime - Identifier for the creationTime.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStream(streamName: string, creationTime: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kinesisvideo:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:stream/${ streamName }/${ creationTime }`);
  }

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/kinesisvideostreams-webrtc-dg/latest/devguide/kvswebrtc-how-it-works.html
   *
   * @param channelName - Identifier for the channelName.
   * @param creationTime - Identifier for the creationTime.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(channelName: string, creationTime: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kinesisvideo:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:channel/${ channelName }/${ creationTime }`);
  }

  /**
   * Filters requests based on the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateSignalingChannel()
   * - .toCreateStream()
   * - .toTagResource()
   * - .toTagStream()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on tag-value assoicated with the stream
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - stream
   * - channel
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters requests based on the presence of mandatory tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateSignalingChannel()
   * - .toCreateStream()
   * - .toTagResource()
   * - .toTagStream()
   * - .toUntagResource()
   * - .toUntagStream()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
