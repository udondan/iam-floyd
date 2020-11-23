import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [mediapackage](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackage.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediapackage extends PolicyStatement {
  public servicePrefix = 'mediapackage';

  /**
   * Statement provider for service [mediapackage](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackage.html).
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
    this.to('CreateChannel');
    return this;
  }

  /**
   * Grants permission to create a harvest job in AWS Elemental MediaPackage.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/harvest_jobs.html#harvest_jobspost
   */
  public toCreateHarvestJob() {
    this.to('CreateHarvestJob');
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
    this.to('CreateOriginEndpoint');
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
    this.to('DeleteChannel');
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
    this.to('DeleteOriginEndpoint');
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
    this.to('DescribeChannel');
    return this;
  }

  /**
   * Grants permission to view the details of a harvest job in AWS Elemental MediaPackage.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/harvest_jobs-id.html#harvest_jobs-idget
   */
  public toDescribeHarvestJob() {
    this.to('DescribeHarvestJob');
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
    this.to('DescribeOriginEndpoint');
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
    this.to('ListChannels');
    return this;
  }

  /**
   * Grants permission to view a list of harvest jobs in AWS Elemental MediaPackage.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/harvest_jobs.html#harvest_jobsget
   */
  public toListHarvestJobs() {
    this.to('ListHarvestJobs');
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
    this.to('ListOriginEndpoints');
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
    this.to('ListTagsForResource');
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
    this.to('RotateIngestEndpointCredentials');
    return this;
  }

  /**
   *
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage/latest/apireference/hj-create.html
   */
  public toTagResource() {
    this.to('TagResource');
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
    this.to('UntagResource');
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
    this.to('UpdateChannel');
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
    this.to('UpdateOriginEndpoint');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateChannel",
      "CreateHarvestJob",
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
      "DescribeHarvestJob",
      "DescribeOriginEndpoint",
      "ListChannels",
      "ListHarvestJobs",
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

  /**
   * Adds a resource of type harvest_jobs to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/ug/harvest-jobs.html
   *
   * @param harvestJobIdentifier - Identifier for the harvestJobIdentifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHarvestJobs(harvestJobIdentifier: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediapackage:${Region}:${Account}:harvest_jobs/${HarvestJobIdentifier}';
    arn = arn.replace('${HarvestJobIdentifier}', harvestJobIdentifier);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
