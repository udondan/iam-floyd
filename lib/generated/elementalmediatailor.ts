import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Deletes the playback configuration for the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration-name.html
   */
  public toDeletePlaybackConfiguration() {
    return this.to('DeletePlaybackConfiguration');
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
   * Returns a list of the tags assigned to the specified playback configuration resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
   * Adds tags to the specified playback configuration resource.
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
   * Removes tags from the specified playback configuration resource.
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

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "DeletePlaybackConfiguration",
      "PutPlaybackConfiguration"
    ],
    "Read": [
      "GetPlaybackConfiguration",
      "ListTagsForResource"
    ],
    "List": [
      "ListPlaybackConfigurations"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPlaybackConfiguration(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediatailor:${Region}:${Account}:playbackConfiguration/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
