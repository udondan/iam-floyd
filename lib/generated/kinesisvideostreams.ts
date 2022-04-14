import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetClip.html
   */
  public toGetClip() {
    return this.to('GetClip');
  }

  /**
   * Grants permission to create a URL for MPEG-DASH video streaming
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDASHStreamingSessionURL.html
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
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetHLSStreamingSessionURL.html
   */
  public toGetHLSStreamingSessionURL() {
    return this.to('GetHLSStreamingSessionURL');
  }

  /**
   * Grants permission to get the ICE server configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetIceServerConfig.html
   */
  public toGetIceServerConfig() {
    return this.to('GetIceServerConfig');
  }

  /**
   * Grants permission to return media content of a Kinesis video stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetMedia.html
   */
  public toGetMedia() {
    return this.to('GetMedia');
  }

  /**
   * Grants permission to read and return media data only from persisted storage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetMediaForFragmentList.html
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
   * Grants permission to list the fragments from archival storage based on the pagination token or selector type with range specified
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListFragments.html
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
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_PutMedia.html
   */
  public toPutMedia() {
    return this.to('PutMedia');
  }

  /**
   * Grants permission to send the Alexa SDP offer to the master
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_SendAlexaOfferToMaster.html
   */
  public toSendAlexaOfferToMaster() {
    return this.to('SendAlexaOfferToMaster');
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
      'DeleteSignalingChannel',
      'DeleteStream',
      'PutMedia',
      'SendAlexaOfferToMaster',
      'UpdateDataRetention',
      'UpdateSignalingChannel',
      'UpdateStream'
    ],
    List: [
      'DescribeSignalingChannel',
      'DescribeStream',
      'ListFragments',
      'ListSignalingChannels',
      'ListStreams'
    ],
    Read: [
      'GetClip',
      'GetDASHStreamingSessionURL',
      'GetDataEndpoint',
      'GetHLSStreamingSessionURL',
      'GetIceServerConfig',
      'GetMedia',
      'GetMediaForFragmentList',
      'GetSignalingChannelEndpoint',
      'ListTagsForResource',
      'ListTagsForStream'
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStream(streamName: string, creationTime: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Kinesisvideo.defaultPartition }:kinesisvideo:${ region || '*' }:${ account || '*' }:stream/${ streamName }/${ creationTime }`);
  }

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/kinesisvideostreams-webrtc-dg/latest/devguide/kvswebrtc-how-it-works.html
   *
   * @param channelName - Identifier for the channelName.
   * @param creationTime - Identifier for the creationTime.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(channelName: string, creationTime: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Kinesisvideo.defaultPartition }:kinesisvideo:${ region || '*' }:${ account || '*' }:channel/${ channelName }/${ creationTime }`);
  }
}
