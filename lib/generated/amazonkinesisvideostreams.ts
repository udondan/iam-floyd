import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [kinesisvideo](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisvideostreams.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kinesisvideo extends PolicyStatement {
  public servicePrefix = 'kinesisvideo';

  /**
   * Statement provider for service [kinesisvideo](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisvideostreams.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
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
    this.to('kinesisvideo:ConnectAsMaster');
    return this;
  }

  /**
   * Grants permission to connect as a viewer to the signaling channel specified by the endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ConnectAsViewer.html
   */
  public toConnectAsViewer() {
    this.to('kinesisvideo:ConnectAsViewer');
    return this;
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
    this.to('kinesisvideo:CreateSignalingChannel');
    return this;
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
    this.to('kinesisvideo:CreateStream');
    return this;
  }

  /**
   * Grants permission to delete an existing signaling channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteSignalingChannel.html
   */
  public toDeleteSignalingChannel() {
    this.to('kinesisvideo:DeleteSignalingChannel');
    return this;
  }

  /**
   * Grants permission to delete an existing Kinesis video stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteStream.html
   */
  public toDeleteStream() {
    this.to('kinesisvideo:DeleteStream');
    return this;
  }

  /**
   * Grants permission to describe the specified signaling channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeSignalingChannel.html
   */
  public toDescribeSignalingChannel() {
    this.to('kinesisvideo:DescribeSignalingChannel');
    return this;
  }

  /**
   * Grants permission to describe the specified Kinesis video stream
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html
   */
  public toDescribeStream() {
    this.to('kinesisvideo:DescribeStream');
    return this;
  }

  /**
   * Grants permission to get a media clip from a video stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetClip.html
   */
  public toGetClip() {
    this.to('kinesisvideo:GetClip');
    return this;
  }

  /**
   * Grants permission to create a URL for MPEG-DASH video streaming
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDASHStreamingSessionURL.html
   */
  public toGetDASHStreamingSessionURL() {
    this.to('kinesisvideo:GetDASHStreamingSessionURL');
    return this;
  }

  /**
   * Grants permission to get an endpoint for a specified stream for either reading or writing media data to Kinesis Video Streams
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html
   */
  public toGetDataEndpoint() {
    this.to('kinesisvideo:GetDataEndpoint');
    return this;
  }

  /**
   * Grants permission to create a URL for HLS video streaming
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetHLSStreamingSessionURL.html
   */
  public toGetHLSStreamingSessionURL() {
    this.to('kinesisvideo:GetHLSStreamingSessionURL');
    return this;
  }

  /**
   * Grants permission to get the ICE server configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetIceServerConfig.html
   */
  public toGetIceServerConfig() {
    this.to('kinesisvideo:GetIceServerConfig');
    return this;
  }

  /**
   * Grants permission to return media content of a Kinesis video stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetMedia.html
   */
  public toGetMedia() {
    this.to('kinesisvideo:GetMedia');
    return this;
  }

  /**
   * Grants permission to read and return media data only from persisted storage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetMediaForFragmentList.html
   */
  public toGetMediaForFragmentList() {
    this.to('kinesisvideo:GetMediaForFragmentList');
    return this;
  }

  /**
   * Grants permission to get endpoints for a specified combination of protocol and role for a signaling channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetSignalingChannelEndpoint.html
   */
  public toGetSignalingChannelEndpoint() {
    this.to('kinesisvideo:GetSignalingChannelEndpoint');
    return this;
  }

  /**
   * Grants permission to list the fragments from archival storage based on the pagination token or selector type with range specified
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListFragments.html
   */
  public toListFragments() {
    this.to('kinesisvideo:ListFragments');
    return this;
  }

  /**
   * Grants permission to list your signaling channels
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListSignalingChannels.html
   */
  public toListSignalingChannels() {
    this.to('kinesisvideo:ListSignalingChannels');
    return this;
  }

  /**
   * Grants permission to list your Kinesis video streams
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListStreams.html
   */
  public toListStreams() {
    this.to('kinesisvideo:ListStreams');
    return this;
  }

  /**
   * Grants permission to fetch the tags associated with your resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('kinesisvideo:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to fetch the tags associated with Kinesis video stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListTagsForStream.html
   */
  public toListTagsForStream() {
    this.to('kinesisvideo:ListTagsForStream');
    return this;
  }

  /**
   * Grants permission to send media data to a Kinesis video stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_PutMedia.html
   */
  public toPutMedia() {
    this.to('kinesisvideo:PutMedia');
    return this;
  }

  /**
   * Grants permission to send the Alexa SDP offer to the master
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_SendAlexaOfferToMaster.html
   */
  public toSendAlexaOfferToMaster() {
    this.to('kinesisvideo:SendAlexaOfferToMaster');
    return this;
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
    this.to('kinesisvideo:TagResource');
    return this;
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
    this.to('kinesisvideo:TagStream');
    return this;
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
    this.to('kinesisvideo:UntagResource');
    return this;
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
    this.to('kinesisvideo:UntagStream');
    return this;
  }

  /**
   * Grants permission to update the data retention period of your Kinesis video stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateDataRetention.html
   */
  public toUpdateDataRetention() {
    this.to('kinesisvideo:UpdateDataRetention');
    return this;
  }

  /**
   * Grants permission to update an existing signaling channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateSignalingChannel.html
   */
  public toUpdateSignalingChannel() {
    this.to('kinesisvideo:UpdateSignalingChannel');
    return this;
  }

  /**
   * Grants permission to update an existing Kinesis video stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateStream.html
   */
  public toUpdateStream() {
    this.to('kinesisvideo:UpdateStream');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "ConnectAsMaster",
      "ConnectAsViewer",
      "CreateSignalingChannel",
      "CreateStream",
      "DeleteSignalingChannel",
      "DeleteStream",
      "PutMedia",
      "SendAlexaOfferToMaster",
      "UpdateDataRetention",
      "UpdateSignalingChannel",
      "UpdateStream"
    ],
    "List": [
      "DescribeSignalingChannel",
      "DescribeStream",
      "ListFragments",
      "ListSignalingChannels",
      "ListStreams"
    ],
    "Read": [
      "GetClip",
      "GetDASHStreamingSessionURL",
      "GetDataEndpoint",
      "GetHLSStreamingSessionURL",
      "GetIceServerConfig",
      "GetMedia",
      "GetMediaForFragmentList",
      "GetSignalingChannelEndpoint",
      "ListTagsForResource",
      "ListTagsForStream"
    ],
    "Tagging": [
      "TagResource",
      "TagStream",
      "UntagResource",
      "UntagStream"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStream(streamName: string, creationTime: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kinesisvideo:${Region}:${Account}:stream/${StreamName}/${CreationTime}';
    arn = arn.replace('${StreamName}', streamName);
    arn = arn.replace('${CreationTime}', creationTime);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/kinesisvideostreams-webrtc-dg/latest/devguide/kvswebrtc-how-it-works.html
   *
   * @param channelName - Identifier for the channelName.
   * @param creationTime - Identifier for the creationTime.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(channelName: string, creationTime: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kinesisvideo:${Region}:${Account}:channel/${ChannelName}/${CreationTime}';
    arn = arn.replace('${ChannelName}', channelName);
    arn = arn.replace('${CreationTime}', creationTime);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
