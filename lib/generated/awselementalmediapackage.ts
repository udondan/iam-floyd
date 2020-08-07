import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [mediapackage](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediapackage.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediapackage extends PolicyStatement {
  public servicePrefix = 'mediapackage';
  protected actionList: Actions = {
    "CreateChannel": {
      "url": "https://docs.aws.amazon.com/mediapackage/latest/apireference/channels.html#channelspost",
      "description": "Grants permission to create a channel in AWS Elemental MediaPackage.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateOriginEndpoint": {
      "url": "https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints.html#origin_endpointspost",
      "description": "Grants permission to create an endpoint in AWS Elemental MediaPackage.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteChannel": {
      "url": "https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-iddelete",
      "description": "Grants permission to delete a channel in AWS Elemental MediaPackage.",
      "accessLevel": "Write",
      "resourceTypes": {
        "channels": {
          "required": true
        }
      }
    },
    "DeleteOriginEndpoint": {
      "url": "https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-iddelete",
      "description": "Grants permission to delete an endpoint in AWS Elemental MediaPackage.",
      "accessLevel": "Write",
      "resourceTypes": {
        "origin_endpoints": {
          "required": true
        }
      }
    },
    "DescribeChannel": {
      "url": "https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-idget",
      "description": "Grants permission to view the details of a channel in AWS Elemental MediaPackage.",
      "accessLevel": "Read",
      "resourceTypes": {
        "channels": {
          "required": true
        }
      }
    },
    "DescribeOriginEndpoint": {
      "url": "https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-idget",
      "description": "Grants permission to view the details of an endpoint in AWS Elemental MediaPackage.",
      "accessLevel": "Read",
      "resourceTypes": {
        "origin_endpoints": {
          "required": true
        }
      }
    },
    "ListChannels": {
      "url": "https://docs.aws.amazon.com/mediapackage/latest/apireference/channels.html#channelsget",
      "description": "Grants permission to view a list of channels in AWS Elemental MediaPackage.",
      "accessLevel": "Read"
    },
    "ListOriginEndpoints": {
      "url": "https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints.html#origin_endpointsget",
      "description": "Grants permission to view a list of endpoints in AWS Elemental MediaPackage.",
      "accessLevel": "Read"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/mediapackage/latest/apireference/tags-resource-arn.html#tags-resource-arnget",
      "description": "Grants permission to list the tags assigned to a Channel or OriginEndpoint.",
      "accessLevel": "Read",
      "resourceTypes": {
        "channels": {
          "required": false
        },
        "origin_endpoints": {
          "required": false
        }
      }
    },
    "RotateIngestEndpointCredentials": {
      "url": "https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id-ingest_endpoints-ingest_endpoint_id-credentials.html#channels-id-ingest_endpoints-ingest_endpoint_id-credentialsput",
      "description": "Grants permission to rotate IngestEndpoint credentials for a Channel in AWS Elemental MediaPackage.",
      "accessLevel": "Write",
      "resourceTypes": {
        "channels": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/mediapackage/latest/apireference/tags-resource-arn.html#tags-resource-arnpost",
      "description": "Grants permission to assign tags to a Channel or OriginEndpoint.",
      "accessLevel": "Write",
      "resourceTypes": {
        "channels": {
          "required": false
        },
        "origin_endpoints": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/mediapackage/latest/apireference/tags-resource-arn.html#tags-resource-arndelete",
      "description": "Grants permission to delete tags to a Channel or OriginEndpoint.",
      "accessLevel": "Write",
      "resourceTypes": {
        "channels": {
          "required": false
        },
        "origin_endpoints": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateChannel": {
      "url": "https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-idput",
      "description": "Grants permission to make changes to a channel in AWS Elemental MediaPackage.",
      "accessLevel": "Write",
      "resourceTypes": {
        "channels": {
          "required": true
        }
      }
    },
    "UpdateOriginEndpoint": {
      "url": "https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-idput",
      "description": "Grants permission to make changes to an endpoint in AWS Elemental MediaPackage.",
      "accessLevel": "Write",
      "resourceTypes": {
        "origin_endpoints": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "channels": {
      "name": "channels",
      "url": "https://docs.aws.amazon.com/mediapackage/latest/ug/channels.html",
      "arn": "arn:${Partition}:mediapackage:${Region}:${Account}:channels/${ChannelIdentifier}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "origin_endpoints": {
      "name": "origin_endpoints",
      "url": "https://docs.aws.amazon.com/mediapackage/latest/ug/endpoints.html",
      "arn": "arn:${Partition}:mediapackage:${Region}:${Account}:origin_endpoints/${OriginEndpointIdentifier}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

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
    this.add('mediapackage:CreateChannel');
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
    this.add('mediapackage:CreateOriginEndpoint');
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
    this.add('mediapackage:DeleteChannel');
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
    this.add('mediapackage:DeleteOriginEndpoint');
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
    this.add('mediapackage:DescribeChannel');
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
    this.add('mediapackage:DescribeOriginEndpoint');
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
    this.add('mediapackage:ListChannels');
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
    this.add('mediapackage:ListOriginEndpoints');
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
    this.add('mediapackage:ListTagsForResource');
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
    this.add('mediapackage:RotateIngestEndpointCredentials');
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
    this.add('mediapackage:TagResource');
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
    this.add('mediapackage:UntagResource');
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
    this.add('mediapackage:UpdateChannel');
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
    this.add('mediapackage:UpdateOriginEndpoint');
    return this;
  }

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
   * Applies to actions:
   * - .toCreateChannel()
   * - .toCreateOriginEndpoint()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Applies to resource types:
   * - channels
   * - origin_endpoints
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Applies to actions:
   * - .toCreateChannel()
   * - .toCreateOriginEndpoint()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
