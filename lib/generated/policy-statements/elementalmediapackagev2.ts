import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [mediapackagev2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackagev2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediapackagev2 extends PolicyStatement {
  public servicePrefix = 'mediapackagev2';

  /**
   * Statement provider for service [mediapackagev2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackagev2.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a harvest job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_CancelHarvestJob.html
   */
  public toCancelHarvestJob() {
    return this.to('CancelHarvestJob');
  }

  /**
   * Grants permission to create a channel in a channel group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_CreateChannel.html
   */
  public toCreateChannel() {
    return this.to('CreateChannel');
  }

  /**
   * Grants permission to create a channel group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_CreateChannelGroup.html
   */
  public toCreateChannelGroup() {
    return this.to('CreateChannelGroup');
  }

  /**
   * Grants permission to create a harvest job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_CreateHarvestJob.html
   */
  public toCreateHarvestJob() {
    return this.to('CreateHarvestJob');
  }

  /**
   * Grants permission to create an origin endpoint for a channel
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_CreateOriginEndpoint.html
   */
  public toCreateOriginEndpoint() {
    return this.to('CreateOriginEndpoint');
  }

  /**
   * Grants permission to delete a channel in a channel group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_DeleteChannel.html
   */
  public toDeleteChannel() {
    return this.to('DeleteChannel');
  }

  /**
   * Grants permission to delete a channel group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_DeleteChannelGroup.html
   */
  public toDeleteChannelGroup() {
    return this.to('DeleteChannelGroup');
  }

  /**
   * Grants permission to delete a resource policy from a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_DeleteChannelPolicy.html
   */
  public toDeleteChannelPolicy() {
    return this.to('DeleteChannelPolicy');
  }

  /**
   * Grants permission to delete an origin endpoint of a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_DeleteOriginEndpoint.html
   */
  public toDeleteOriginEndpoint() {
    return this.to('DeleteOriginEndpoint');
  }

  /**
   * Grants permission to delete a resource policy from an origin endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_DeleteOriginEndpointPolicy.html
   */
  public toDeleteOriginEndpointPolicy() {
    return this.to('DeleteOriginEndpointPolicy');
  }

  /**
   * Grants permission to retrieve details of a channel in a channel group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_GetChannel.html
   */
  public toGetChannel() {
    return this.to('GetChannel');
  }

  /**
   * Grants permission to retrieve details of a channel group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_GetChannelGroup.html
   */
  public toGetChannelGroup() {
    return this.to('GetChannelGroup');
  }

  /**
   * Grants permission to retrieve a resource policy for a channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_GetChannelPolicy.html
   */
  public toGetChannelPolicy() {
    return this.to('GetChannelPolicy');
  }

  /**
   * Grants permission to retrieve details of an harvest job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_GetHarvestJob.html
   */
  public toGetHarvestJob() {
    return this.to('GetHarvestJob');
  }

  /**
   * Grants permission to make GetHeadObject requests to MediaPackage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/userguide/dataplane-apis.html
   */
  public toGetHeadObject() {
    return this.to('GetHeadObject');
  }

  /**
   * Grants permission to make GetObject requests to MediaPackage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/userguide/dataplane-apis.html
   */
  public toGetObject() {
    return this.to('GetObject');
  }

  /**
   * Grants permission to retrieve details of an origin endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_GetOriginEndpoint.html
   */
  public toGetOriginEndpoint() {
    return this.to('GetOriginEndpoint');
  }

  /**
   * Grants permission to retrieve details of a resource policy for an origin endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_GetOriginEndpointPolicy.html
   */
  public toGetOriginEndpointPolicy() {
    return this.to('GetOriginEndpointPolicy');
  }

  /**
   * Grants permission to make HarvestObject requests to MediaPackage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/userguide/dataplane-apis.html
   */
  public toHarvestObject() {
    return this.to('HarvestObject');
  }

  /**
   * Grants permission to list all channel groups for an aws account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_ListChannelGroups.html
   */
  public toListChannelGroups() {
    return this.to('ListChannelGroups');
  }

  /**
   * Grants permission to list all channels in a channel group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_ListChannels.html
   */
  public toListChannels() {
    return this.to('ListChannels');
  }

  /**
   * Grants permission to list all harvest jobs in a channel group, channel, origin endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_ListHarvestJobs.html
   */
  public toListHarvestJobs() {
    return this.to('ListHarvestJobs');
  }

  /**
   * Grants permission to list all origin endpoints of a channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_ListOriginEndpoints.html
   */
  public toListOriginEndpoints() {
    return this.to('ListOriginEndpoints');
  }

  /**
   * Grants permission to list tags for the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to attach a resource policy for a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_PutChannelPolicy.html
   */
  public toPutChannelPolicy() {
    return this.to('PutChannelPolicy');
  }

  /**
   * Grants permission to make PutObject requests to MediaPackage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/userguide/dataplane-apis.html
   */
  public toPutObject() {
    return this.to('PutObject');
  }

  /**
   * Grants permission to attach a resource policy to an origin endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_PutOriginEndpointPolicy.html
   */
  public toPutOriginEndpointPolicy() {
    return this.to('PutOriginEndpointPolicy');
  }

  /**
   * Grants permission to reset a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_ResetChannelState.html
   */
  public toResetChannelState() {
    return this.to('ResetChannelState');
  }

  /**
   * Grants permission to reset an origin endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_ResetOriginEndpointState.html
   */
  public toResetOriginEndpointState() {
    return this.to('ResetOriginEndpointState');
  }

  /**
   * Grants permission to add specified tags to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the specified tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a channel in a channel group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_UpdateChannel.html
   */
  public toUpdateChannel() {
    return this.to('UpdateChannel');
  }

  /**
   * Grants permission to update a channel group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_UpdateChannelGroup.html
   */
  public toUpdateChannelGroup() {
    return this.to('UpdateChannelGroup');
  }

  /**
   * Grants permission to update an origin endpoint of a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage/latest/APIReference/API_UpdateOriginEndpoint.html
   */
  public toUpdateOriginEndpoint() {
    return this.to('UpdateOriginEndpoint');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelHarvestJob',
      'CreateChannel',
      'CreateChannelGroup',
      'CreateHarvestJob',
      'CreateOriginEndpoint',
      'DeleteChannel',
      'DeleteChannelGroup',
      'DeleteChannelPolicy',
      'DeleteOriginEndpoint',
      'DeleteOriginEndpointPolicy',
      'PutChannelPolicy',
      'PutObject',
      'PutOriginEndpointPolicy',
      'ResetChannelState',
      'ResetOriginEndpointState',
      'UpdateChannel',
      'UpdateChannelGroup',
      'UpdateOriginEndpoint'
    ],
    Read: [
      'GetChannel',
      'GetChannelGroup',
      'GetChannelPolicy',
      'GetHarvestJob',
      'GetHeadObject',
      'GetObject',
      'GetOriginEndpoint',
      'GetOriginEndpointPolicy',
      'HarvestObject',
      'ListTagsForResource'
    ],
    List: [
      'ListChannelGroups',
      'ListChannels',
      'ListHarvestJobs',
      'ListOriginEndpoints'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type ChannelGroup to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/userguide/channel-groups.html
   *
   * @param channelGroupName - Identifier for the channelGroupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannelGroup(channelGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mediapackagev2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:channelGroup/${ channelGroupName }`);
  }

  /**
   * Adds a resource of type ChannelPolicy to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/userguide/API_GetChannelPolicy.html
   *
   * @param channelGroupName - Identifier for the channelGroupName.
   * @param channelName - Identifier for the channelName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onChannelPolicy(channelGroupName: string, channelName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mediapackagev2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:channelGroup/${ channelGroupName }/channel/${ channelName }`);
  }

  /**
   * Adds a resource of type Channel to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/userguide/channels.html
   *
   * @param channelGroupName - Identifier for the channelGroupName.
   * @param channelName - Identifier for the channelName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(channelGroupName: string, channelName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mediapackagev2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:channelGroup/${ channelGroupName }/channel/${ channelName }`);
  }

  /**
   * Adds a resource of type OriginEndpointPolicy to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/userguide/API_GetOriginEndpointPolicy.html
   *
   * @param channelGroupName - Identifier for the channelGroupName.
   * @param channelName - Identifier for the channelName.
   * @param originEndpointName - Identifier for the originEndpointName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onOriginEndpointPolicy(channelGroupName: string, channelName: string, originEndpointName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mediapackagev2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:channelGroup/${ channelGroupName }/channel/${ channelName }/originEndpoint/${ originEndpointName }`);
  }

  /**
   * Adds a resource of type OriginEndpoint to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/userguide/endpoints.html
   *
   * @param channelGroupName - Identifier for the channelGroupName.
   * @param channelName - Identifier for the channelName.
   * @param originEndpointName - Identifier for the originEndpointName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOriginEndpoint(channelGroupName: string, channelName: string, originEndpointName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mediapackagev2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:channelGroup/${ channelGroupName }/channel/${ channelName }/originEndpoint/${ originEndpointName }`);
  }

  /**
   * Adds a resource of type HarvestJob to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/userguide/API_HarvestJobListConfiguration.html
   *
   * @param channelGroupName - Identifier for the channelGroupName.
   * @param channelName - Identifier for the channelName.
   * @param originEndpointName - Identifier for the originEndpointName.
   * @param harvestJobName - Identifier for the harvestJobName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHarvestJob(channelGroupName: string, channelName: string, originEndpointName: string, harvestJobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mediapackagev2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:channelGroup/${ channelGroupName }/channel/${ channelName }/originEndpoint/${ originEndpointName }/harvestJob/${ harvestJobName }`);
  }

  /**
   * Filters access by tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateChannel()
   * - .toCreateChannelGroup()
   * - .toCreateHarvestJob()
   * - .toCreateOriginEndpoint()
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
   * Filters access by tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - ChannelGroup
   * - Channel
   * - OriginEndpoint
   * - HarvestJob
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateChannel()
   * - .toCreateChannelGroup()
   * - .toCreateHarvestJob()
   * - .toCreateOriginEndpoint()
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
