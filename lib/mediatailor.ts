import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service mediatailor
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediatailor.html
 */
export class Mediatailor extends PolicyStatement {
  public servicePrefix = 'mediatailor';
  public actions : Actions = {
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

  /**
   * Deletes the playback configuration for the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration-name.html
   */
  public deletePlaybackConfiguration () {
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
  public getPlaybackConfiguration () {
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
  public listPlaybackConfigurations () {
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
  public listTagsForResource () {
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
  public putPlaybackConfiguration () {
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
  public tagResource () {
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
  public untagResource () {
    this.add('mediatailor:UntagResource');
    return this;
  }
}
