import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [ivs](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoninteractivevideoservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ivs extends PolicyStatement {
  public servicePrefix = 'ivs';
  protected actionList: Actions = {
    "BatchGetChannel": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_BatchGetChannel.html",
      "description": "Grants permission to get multiple channels simultaneously by channel ARN.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Channel": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "BatchGetStreamKey": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_BatchGetStreamKey.html",
      "description": "Grants permission to get multiple stream keys simultaneously by stream key ARN.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Stream-Key": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CreateChannel": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_CreateChannel.html",
      "description": "Grants permission to create a new channel and an associated stream key.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Channel": {
          "required": true
        },
        "Stream-Key": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CreateStreamKey": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_CreateStreamKey.html",
      "description": "Grants permission to create a stream key.",
      "accessLevel": "Write",
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DeleteChannel": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_DeleteChannel.html",
      "description": "Grants permission to delete a channel and channel's stream keys.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Channel": {
          "required": true
        },
        "Stream-Key": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "DeleteStreamKey": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_DeleteStreamKey.html",
      "description": "Grants permission to delete the stream key for a specified ARN",
      "accessLevel": "Write",
      "resourceTypes": {
        "Stream-Key": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetChannel": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetChannel.html",
      "description": "Grants permission to get the channel configuration for a specified channel ARN",
      "accessLevel": "Read",
      "resourceTypes": {
        "Channel": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetStream": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetStream.html",
      "description": "Grants permission to get information about the active (live) stream on a specified channel",
      "accessLevel": "Read",
      "resourceTypes": {
        "Channel": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetStreamKey": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetStreamKey.html",
      "description": "Grants permission to get stream-key information for a specified ARN",
      "accessLevel": "Read",
      "resourceTypes": {
        "Stream-Key": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ListChannels": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListChannels.html",
      "description": "Grants permission to get summary information about channels",
      "accessLevel": "List",
      "resourceTypes": {
        "Channel": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ListStreamKeys": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListStreamKeys.html",
      "description": "Grants permission to get summary information about stream keys",
      "accessLevel": "List",
      "resourceTypes": {
        "Channel": {
          "required": true
        },
        "Stream-Key": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ListStreams": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListStreams.html",
      "description": "Grants permission to get summary information about live streams",
      "accessLevel": "List",
      "resourceTypes": {
        "Channel": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to get information about the tags for a specified ARN",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Channel": {
          "required": false
        },
        "Stream-Key": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "PutMetadata": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_PutMetadata.html",
      "description": "Grants permission to insert metadata into an RTMP stream for a specified channel",
      "accessLevel": "Write",
      "resourceTypes": {
        "Channel": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "StopStream": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_StopStream.html",
      "description": "Grants permission to disconnect a streamer on a specified channel",
      "accessLevel": "Write",
      "resourceTypes": {
        "Channel": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to add or update tags for a resource with a specified ARN",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Channel": {
          "required": false
        },
        "Stream-Key": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to remove tags for a resource with a specified ARN",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Channel": {
          "required": false
        },
        "Stream-Key": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateChannel": {
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_UpdateChannel.html",
      "description": "Grants permission to update a channel's configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "Channel": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "Channel": {
      "name": "Channel",
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_Channel.html",
      "arn": "arn:${Partition}:ivs::${Account}:channel/${ResourceId}",
      "conditionKeys": []
    },
    "Stream-Key": {
      "name": "Stream-Key",
      "url": "https://docs.aws.amazon.com/ivs/latest/APIReference/API_StreamKey.html",
      "arn": "arn:${Partition}:ivs::${Account}:stream-key/${ResourceId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [ivs](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoninteractivevideoservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get multiple channels simultaneously by channel ARN.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_BatchGetChannel.html
   */
  public batchGetChannel() {
    this.add('ivs:BatchGetChannel');
    return this;
  }

  /**
   * Grants permission to get multiple stream keys simultaneously by stream key ARN.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_BatchGetStreamKey.html
   */
  public batchGetStreamKey() {
    this.add('ivs:BatchGetStreamKey');
    return this;
  }

  /**
   * Grants permission to create a new channel and an associated stream key.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_CreateChannel.html
   */
  public createChannel() {
    this.add('ivs:CreateChannel');
    return this;
  }

  /**
   * Grants permission to create a stream key.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_CreateStreamKey.html
   */
  public createStreamKey() {
    this.add('ivs:CreateStreamKey');
    return this;
  }

  /**
   * Grants permission to delete a channel and channel's stream keys.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_DeleteChannel.html
   */
  public deleteChannel() {
    this.add('ivs:DeleteChannel');
    return this;
  }

  /**
   * Grants permission to delete the stream key for a specified ARN
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_DeleteStreamKey.html
   */
  public deleteStreamKey() {
    this.add('ivs:DeleteStreamKey');
    return this;
  }

  /**
   * Grants permission to get the channel configuration for a specified channel ARN
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetChannel.html
   */
  public getChannel() {
    this.add('ivs:GetChannel');
    return this;
  }

  /**
   * Grants permission to get information about the active (live) stream on a specified channel
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetStream.html
   */
  public getStream() {
    this.add('ivs:GetStream');
    return this;
  }

  /**
   * Grants permission to get stream-key information for a specified ARN
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetStreamKey.html
   */
  public getStreamKey() {
    this.add('ivs:GetStreamKey');
    return this;
  }

  /**
   * Grants permission to get summary information about channels
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListChannels.html
   */
  public listChannels() {
    this.add('ivs:ListChannels');
    return this;
  }

  /**
   * Grants permission to get summary information about stream keys
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListStreamKeys.html
   */
  public listStreamKeys() {
    this.add('ivs:ListStreamKeys');
    return this;
  }

  /**
   * Grants permission to get summary information about live streams
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListStreams.html
   */
  public listStreams() {
    this.add('ivs:ListStreams');
    return this;
  }

  /**
   * Grants permission to get information about the tags for a specified ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('ivs:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to insert metadata into an RTMP stream for a specified channel
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_PutMetadata.html
   */
  public putMetadata() {
    this.add('ivs:PutMetadata');
    return this;
  }

  /**
   * Grants permission to disconnect a streamer on a specified channel
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_StopStream.html
   */
  public stopStream() {
    this.add('ivs:StopStream');
    return this;
  }

  /**
   * Grants permission to add or update tags for a resource with a specified ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('ivs:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags for a resource with a specified ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('ivs:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a channel's configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_UpdateChannel.html
   */
  public updateChannel() {
    this.add('ivs:UpdateChannel');
    return this;
  }

  /**
   * Adds a resource of type Channel to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_Channel.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onChannel(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:ivs::${Account}:channel/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Stream-Key to the statement
   *
   * https://docs.aws.amazon.com/ivs/latest/APIReference/API_StreamKey.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onStreamKey(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:ivs::${Account}:stream-key/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the tags associated with the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .batchGetChannel()
   * - .batchGetStreamKey()
   * - .createChannel()
   * - .createStreamKey()
   * - .deleteChannel()
   * - .deleteStreamKey()
   * - .getChannel()
   * - .getStream()
   * - .getStreamKey()
   * - .listChannels()
   * - .listStreamKeys()
   * - .listStreams()
   * - .listTagsForResource()
   * - .putMetadata()
   * - .stopStream()
   * - .tagResource()
   * - .untagResource()
   * - .updateChannel()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .batchGetChannel()
   * - .batchGetStreamKey()
   * - .createChannel()
   * - .createStreamKey()
   * - .deleteChannel()
   * - .deleteStreamKey()
   * - .getChannel()
   * - .getStream()
   * - .getStreamKey()
   * - .listChannels()
   * - .listStreamKeys()
   * - .listStreams()
   * - .listTagsForResource()
   * - .putMetadata()
   * - .stopStream()
   * - .tagResource()
   * - .untagResource()
   * - .updateChannel()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .batchGetChannel()
   * - .batchGetStreamKey()
   * - .createChannel()
   * - .createStreamKey()
   * - .deleteChannel()
   * - .deleteStreamKey()
   * - .getChannel()
   * - .getStream()
   * - .getStreamKey()
   * - .listChannels()
   * - .listStreamKeys()
   * - .listStreams()
   * - .listTagsForResource()
   * - .putMetadata()
   * - .stopStream()
   * - .tagResource()
   * - .untagResource()
   * - .updateChannel()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
