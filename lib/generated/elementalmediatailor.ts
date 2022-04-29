import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [mediatailor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediatailor.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediatailor extends PolicyStatement {
  public servicePrefix = 'mediatailor';

  /**
   * Statement provider for service [mediatailor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediatailor.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to configure logs for a playback configuration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/configurelogs-playbackconfiguration.html
   */
  public toConfigureLogsForPlaybackConfiguration() {
    return this.to('ConfigureLogsForPlaybackConfiguration');
  }

  /**
   * Grants permission to create a new channel
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname.html
   */
  public toCreateChannel() {
    return this.to('CreateChannel');
  }

  /**
   * Grants permission to create a new live source on the source location with the specified source location name
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesource-livesourcename.html
   */
  public toCreateLiveSource() {
    return this.to('CreateLiveSource');
  }

  /**
   * Grants permission to create a prefetch schedule for the playback configuration with the specified playback configuration name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/prefetchschedule-playbackconfigurationname-name.html
   */
  public toCreatePrefetchSchedule() {
    return this.to('CreatePrefetchSchedule');
  }

  /**
   * Grants permission to create a new program on the channel with the specified channel name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-program-programname.html
   */
  public toCreateProgram() {
    return this.to('CreateProgram');
  }

  /**
   * Grants permission to create a new source location
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname.html
   */
  public toCreateSourceLocation() {
    return this.to('CreateSourceLocation');
  }

  /**
   * Grants permission to create a new VOD source on the source location with the specified source location name
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsource-vodsourcename.html
   */
  public toCreateVodSource() {
    return this.to('CreateVodSource');
  }

  /**
   * Grants permission to delete the channel with the specified channel name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname.html
   */
  public toDeleteChannel() {
    return this.to('DeleteChannel');
  }

  /**
   * Grants permission to delete the IAM policy on the channel with the specified channel name
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-policy.html
   */
  public toDeleteChannelPolicy() {
    return this.to('DeleteChannelPolicy');
  }

  /**
   * Grants permission to delete the live source with the specified live source name on the source location with the specified source location name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesource-livesourcename.html
   */
  public toDeleteLiveSource() {
    return this.to('DeleteLiveSource');
  }

  /**
   * Grants permission to delete the specified playback configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration-name.html
   */
  public toDeletePlaybackConfiguration() {
    return this.to('DeletePlaybackConfiguration');
  }

  /**
   * Grants permission to delete a prefetch schedule for a playback configuration with the specified prefetch schedule name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/prefetchschedule-playbackconfigurationname-name.html
   */
  public toDeletePrefetchSchedule() {
    return this.to('DeletePrefetchSchedule');
  }

  /**
   * Grants permission to delete the program with the specified program name on the channel with the specified channel name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-program-programname.html
   */
  public toDeleteProgram() {
    return this.to('DeleteProgram');
  }

  /**
   * Grants permission to delete the source location with the specified source location name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname.html
   */
  public toDeleteSourceLocation() {
    return this.to('DeleteSourceLocation');
  }

  /**
   * Grants permission to delete the VOD source with the specified VOD source name on the source location with the specified source location name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsource-vodsourcename.html
   */
  public toDeleteVodSource() {
    return this.to('DeleteVodSource');
  }

  /**
   * Grants permission to retrieve the channel with the specified channel name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname.html
   */
  public toDescribeChannel() {
    return this.to('DescribeChannel');
  }

  /**
   * Grants permission to retrieve the live source with the specified live source name on the source location with the specified source location name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesource-livesourcename.html
   */
  public toDescribeLiveSource() {
    return this.to('DescribeLiveSource');
  }

  /**
   * Grants permission to retrieve the program with the specified program name on the channel with the specified channel name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-program-programname.html
   */
  public toDescribeProgram() {
    return this.to('DescribeProgram');
  }

  /**
   * Grants permission to retrieve the source location with the specified source location name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname.html
   */
  public toDescribeSourceLocation() {
    return this.to('DescribeSourceLocation');
  }

  /**
   * Grants permission to retrieve the VOD source with the specified VOD source name on the source location with the specified source location name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsource-vodsourcename.html
   */
  public toDescribeVodSource() {
    return this.to('DescribeVodSource');
  }

  /**
   * Grants permission to read the IAM policy on the channel with the specified channel name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-policy.html
   */
  public toGetChannelPolicy() {
    return this.to('GetChannelPolicy');
  }

  /**
   * Grants permission to retrieve the schedule of programs on the channel with the specified channel name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-schedule.html
   */
  public toGetChannelSchedule() {
    return this.to('GetChannelSchedule');
  }

  /**
   * Grants permission to retrieve the configuration for the specified name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration-name.html
   */
  public toGetPlaybackConfiguration() {
    return this.to('GetPlaybackConfiguration');
  }

  /**
   * Grants permission to retrieve prefetch schedule for a playback configuration with the specified prefetch schedule name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/prefetchschedule-playbackconfigurationname-name.html
   */
  public toGetPrefetchSchedule() {
    return this.to('GetPrefetchSchedule');
  }

  /**
   * Grants permission to retrieve the list of alerts on a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/alerts.html
   */
  public toListAlerts() {
    return this.to('ListAlerts');
  }

  /**
   * Grants permission to retrieve the list of existing channels
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channels.html
   */
  public toListChannels() {
    return this.to('ListChannels');
  }

  /**
   * Grants permission to retrieve the list of existing live sources on the source location with the specified source location name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesources.html
   */
  public toListLiveSources() {
    return this.to('ListLiveSources');
  }

  /**
   * Grants permission to retrieve the list of available configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfigurations.html
   */
  public toListPlaybackConfigurations() {
    return this.to('ListPlaybackConfigurations');
  }

  /**
   * Grants permission to retrieve the list of prefetch schedules for a playback configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/prefetchschedule-playbackconfigurationname.html
   */
  public toListPrefetchSchedules() {
    return this.to('ListPrefetchSchedules');
  }

  /**
   * Grants permission to retrieve the list of existing source locations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocations.html
   */
  public toListSourceLocations() {
    return this.to('ListSourceLocations');
  }

  /**
   * Grants permission to list the tags assigned to the specified playback configuration resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve the list of existing VOD sources on the source location with the specified source location name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsources.html
   */
  public toListVodSources() {
    return this.to('ListVodSources');
  }

  /**
   * Grants permission to set the IAM policy on the channel with the specified channel name
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-policy.html
   */
  public toPutChannelPolicy() {
    return this.to('PutChannelPolicy');
  }

  /**
   * Grants permission to add a new configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration.html
   */
  public toPutPlaybackConfiguration() {
    return this.to('PutPlaybackConfiguration');
  }

  /**
   * Grants permission to start the channel with the specified channel name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-start.html
   */
  public toStartChannel() {
    return this.to('StartChannel');
  }

  /**
   * Grants permission to stop the channel with the specified channel name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-stop.html
   */
  public toStopChannel() {
    return this.to('StopChannel');
  }

  /**
   * Grants permission to add tags to the specified playback configuration resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from the specified playback configuration resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the channel with the specified channel name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname.html
   */
  public toUpdateChannel() {
    return this.to('UpdateChannel');
  }

  /**
   * Grants permission to update the live source with the specified live source name on the source location with the specified source location name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesource-livesourcename.html
   */
  public toUpdateLiveSource() {
    return this.to('UpdateLiveSource');
  }

  /**
   * Grants permission to update the source location with the specified source location name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname.html
   */
  public toUpdateSourceLocation() {
    return this.to('UpdateSourceLocation');
  }

  /**
   * Grants permission to update the VOD source with the specified VOD source name on the source location with the specified source location name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsource-vodsourcename.html
   */
  public toUpdateVodSource() {
    return this.to('UpdateVodSource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ConfigureLogsForPlaybackConfiguration',
      'CreateChannel',
      'CreateLiveSource',
      'CreatePrefetchSchedule',
      'CreateProgram',
      'CreateSourceLocation',
      'CreateVodSource',
      'DeleteChannel',
      'DeleteLiveSource',
      'DeletePlaybackConfiguration',
      'DeletePrefetchSchedule',
      'DeleteProgram',
      'DeleteSourceLocation',
      'DeleteVodSource',
      'PutPlaybackConfiguration',
      'StartChannel',
      'StopChannel',
      'UpdateChannel',
      'UpdateLiveSource',
      'UpdateSourceLocation',
      'UpdateVodSource'
    ],
    'Permissions management': [
      'DeleteChannelPolicy',
      'PutChannelPolicy'
    ],
    Read: [
      'DescribeChannel',
      'DescribeLiveSource',
      'DescribeProgram',
      'DescribeSourceLocation',
      'DescribeVodSource',
      'GetChannelPolicy',
      'GetChannelSchedule',
      'GetPlaybackConfiguration',
      'GetPrefetchSchedule',
      'ListAlerts',
      'ListChannels',
      'ListLiveSources',
      'ListSourceLocations',
      'ListTagsForResource',
      'ListVodSources'
    ],
    List: [
      'ListPlaybackConfigurations',
      'ListPrefetchSchedules'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type playbackConfiguration to the statement
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPlaybackConfiguration(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Mediatailor.defaultPartition }:mediatailor:${ region || '*' }:${ account || '*' }:playbackConfiguration/${ resourceId }`);
  }

  /**
   * Adds a resource of type prefetchSchedule to the statement
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/prefetchschedule-playbackconfigurationname-name.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPrefetchSchedule(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Mediatailor.defaultPartition }:mediatailor:${ region || '*' }:${ account || '*' }:prefetchSchedule/${ resourceId }`);
  }

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Mediatailor.defaultPartition }:mediatailor:${ region || '*' }:${ account || '*' }:channel/${ resourceId }`);
  }

  /**
   * Adds a resource of type program to the statement
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-program-programname.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProgram(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Mediatailor.defaultPartition }:mediatailor:${ region || '*' }:${ account || '*' }:program/${ resourceId }`);
  }

  /**
   * Adds a resource of type sourceLocation to the statement
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSourceLocation(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Mediatailor.defaultPartition }:mediatailor:${ region || '*' }:${ account || '*' }:sourceLocation/${ resourceId }`);
  }

  /**
   * Adds a resource of type vodSource to the statement
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsource-vodsourcename.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVodSource(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Mediatailor.defaultPartition }:mediatailor:${ region || '*' }:${ account || '*' }:vodSource/${ resourceId }`);
  }

  /**
   * Adds a resource of type liveSource to the statement
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesource-livesourcename.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLiveSource(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Mediatailor.defaultPartition }:mediatailor:${ region || '*' }:${ account || '*' }:liveSource/${ resourceId }`);
  }
}
