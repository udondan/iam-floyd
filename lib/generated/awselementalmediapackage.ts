import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [mediapackage](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediapackage.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediapackage extends PolicyStatement {
  public servicePrefix = 'mediapackage';

  /**
   * Statement provider for service [mediapackage](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediapackage.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a channel in AWS Elemental MediaPackage.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/channels.html#channelspost
   */
  public toCreateChannel() {
    this.to('mediapackage:CreateChannel');
    return this;
  }

  /**
   * Grants permission to create an endpoint in AWS Elemental MediaPackage.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints.html#origin_endpointspost
   */
  public toCreateOriginEndpoint() {
    this.to('mediapackage:CreateOriginEndpoint');
    return this;
  }

  /**
   * Grants permission to delete a channel in AWS Elemental MediaPackage.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-iddelete
   */
  public toDeleteChannel() {
    this.to('mediapackage:DeleteChannel');
    return this;
  }

  /**
   * Grants permission to delete an endpoint in AWS Elemental MediaPackage.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-iddelete
   */
  public toDeleteOriginEndpoint() {
    this.to('mediapackage:DeleteOriginEndpoint');
    return this;
  }

  /**
   * Grants permission to view the details of a channel in AWS Elemental MediaPackage.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-idget
   */
  public toDescribeChannel() {
    this.to('mediapackage:DescribeChannel');
    return this;
  }

  /**
   * Grants permission to view the details of an endpoint in AWS Elemental MediaPackage.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-idget
   */
  public toDescribeOriginEndpoint() {
    this.to('mediapackage:DescribeOriginEndpoint');
    return this;
  }

  /**
   * Grants permission to view a list of channels in AWS Elemental MediaPackage.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/channels.html#channelsget
   */
  public toListChannels() {
    this.to('mediapackage:ListChannels');
    return this;
  }

  /**
   * Grants permission to view a list of endpoints in AWS Elemental MediaPackage.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints.html#origin_endpointsget
   */
  public toListOriginEndpoints() {
    this.to('mediapackage:ListOriginEndpoints');
    return this;
  }

  /**
   * Grants permission to list the tags assigned to a Channel or OriginEndpoint.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/tags-resource-arn.html#tags-resource-arnget
   */
  public toListTagsForResource() {
    this.to('mediapackage:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to rotate IngestEndpoint credentials for a Channel in AWS Elemental MediaPackage.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id-ingest_endpoints-ingest_endpoint_id-credentials.html#channels-id-ingest_endpoints-ingest_endpoint_id-credentialsput
   */
  public toRotateIngestEndpointCredentials() {
    this.to('mediapackage:RotateIngestEndpointCredentials');
    return this;
  }

  /**
   * Grants permission to assign tags to a Channel or OriginEndpoint.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/tags-resource-arn.html#tags-resource-arnpost
   */
  public toTagResource() {
    this.to('mediapackage:TagResource');
    return this;
  }

  /**
   * Grants permission to delete tags to a Channel or OriginEndpoint.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/tags-resource-arn.html#tags-resource-arndelete
   */
  public toUntagResource() {
    this.to('mediapackage:UntagResource');
    return this;
  }

  /**
   * Grants permission to make changes to a channel in AWS Elemental MediaPackage.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-idput
   */
  public toUpdateChannel() {
    this.to('mediapackage:UpdateChannel');
    return this;
  }

  /**
   * Grants permission to make changes to an endpoint in AWS Elemental MediaPackage.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-idput
   */
  public toUpdateOriginEndpoint() {
    this.to('mediapackage:UpdateOriginEndpoint');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateChannel",
      "CreateOriginEndpoint",
      "DeleteChannel",
      "DeleteOriginEndpoint",
      "RotateIngestEndpointCredentials",
      "TagResource",
      "UntagResource",
      "UpdateChannel",
      "UpdateOriginEndpoint"
    ],
    "Read": [
      "DescribeChannel",
      "DescribeOriginEndpoint",
      "ListChannels",
      "ListOriginEndpoints",
      "ListTagsForResource"
    ]
  };

  /**
   * Adds a resource of type channels to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/ug/channels.html
   *
   * @param channelIdentifier - Identifier for the channelIdentifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannels(channelIdentifier: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediapackage:${Region}:${Account}:channels/${ChannelIdentifier}';
    arn = arn.replace('${ChannelIdentifier}', channelIdentifier);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type origin_endpoints to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/ug/endpoints.html
   *
   * @param originEndpointIdentifier - Identifier for the originEndpointIdentifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOriginEndpoints(originEndpointIdentifier: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediapackage:${Region}:${Account}:origin_endpoints/${OriginEndpointIdentifier}';
    arn = arn.replace('${OriginEndpointIdentifier}', originEndpointIdentifier);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
