import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [mediatailor](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediatailor.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediatailor extends PolicyStatement {
  public servicePrefix = 'mediatailor';
  protected actionList: Actions = {
    "DeletePlaybackConfiguration": {
      "url": "https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration-name.html",
      "description": "Deletes the playback configuration for the specified name",
      "accessLevel": "Write",
      "resourceTypes": {
        "playbackConfiguration": {
          "required": true
        }
      }
    },
    "GetPlaybackConfiguration": {
      "url": "https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration-name.html",
      "description": "Grants permission to retrieve the configuration for the specified name",
      "accessLevel": "Read",
      "resourceTypes": {
        "playbackConfiguration": {
          "required": true
        }
      }
    },
    "ListPlaybackConfigurations": {
      "url": "https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfigurations.html",
      "description": "Grants permission to retrieve the list of available configurations",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html",
      "description": "Returns a list of the tags assigned to the specified playback configuration resource.",
      "accessLevel": "Read"
    },
    "PutPlaybackConfiguration": {
      "url": "https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration.html",
      "description": "Grants permission to add a new configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "playbackConfiguration": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html",
      "description": "Adds tags to the specified playback configuration resource.",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html",
      "description": "Removes tags from the specified playback configuration resource.",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    }
  };
  public resourceTypes: ResourceTypes = {
    "playbackConfiguration": {
      "name": "playbackConfiguration",
      "url": "https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration.html",
      "arn": "arn:${Partition}:mediatailor:${Region}:${Account}:playbackConfiguration/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [mediatailor](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediatailor.html).
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
  public deletePlaybackConfiguration() {
    this.add('mediatailor:DeletePlaybackConfiguration');
    return this;
  }

  /**
   * Grants permission to retrieve the configuration for the specified name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration-name.html
   */
  public getPlaybackConfiguration() {
    this.add('mediatailor:GetPlaybackConfiguration');
    return this;
  }

  /**
   * Grants permission to retrieve the list of available configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfigurations.html
   */
  public listPlaybackConfigurations() {
    this.add('mediatailor:ListPlaybackConfigurations');
    return this;
  }

  /**
   * Returns a list of the tags assigned to the specified playback configuration resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html
   */
  public listTagsForResource() {
    this.add('mediatailor:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to add a new configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration.html
   */
  public putPlaybackConfiguration() {
    this.add('mediatailor:PutPlaybackConfiguration');
    return this;
  }

  /**
   * Adds tags to the specified playback configuration resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html
   */
  public tagResource() {
    this.add('mediatailor:TagResource');
    return this;
  }

  /**
   * Removes tags from the specified playback configuration resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html
   */
  public untagResource() {
    this.add('mediatailor:UntagResource');
    return this;
  }

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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
