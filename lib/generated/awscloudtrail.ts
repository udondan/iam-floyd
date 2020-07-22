import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [cloudtrail](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudtrail.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloudtrail extends PolicyStatement {
  public servicePrefix = 'cloudtrail';
  protected actionList: Actions = {
    "AddTags": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AddTags.html",
      "description": "Grants permission to add one or more tags to a trail, up to a limit of 10",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "trail": {
          "required": true
        }
      }
    },
    "CreateTrail": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateTrail.html",
      "description": "Grants permission to create a trail that specifies the settings for delivery of log data to an Amazon S3 bucket",
      "accessLevel": "Write",
      "dependentActions": [
        "s3:PutObject"
      ],
      "resourceTypes": {
        "trail": {
          "required": true
        }
      }
    },
    "DeleteTrail": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteTrail.html",
      "description": "Grants permission to delete a trail",
      "accessLevel": "Write",
      "resourceTypes": {
        "trail": {
          "required": true
        }
      }
    },
    "DescribeTrails": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DescribeTrails.html",
      "description": "Grants permission to list settings for the trails associated with the current region for your account",
      "accessLevel": "Read"
    },
    "GetEventSelectors": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetEventSelectors.html",
      "description": "Grants permission to list settings for event selectors configured for a trail",
      "accessLevel": "Read",
      "resourceTypes": {
        "trail": {
          "required": true
        }
      }
    },
    "GetInsightSelectors": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetInsightSelectors.html",
      "description": "Grants permission to list CloudTrail Insights selectors that are configured for a trail",
      "accessLevel": "Read",
      "resourceTypes": {
        "trail": {
          "required": true
        }
      }
    },
    "GetTrail": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrail.html",
      "description": "Grants permission to list settings for the trail",
      "accessLevel": "Read"
    },
    "GetTrailStatus": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrailStatus.html",
      "description": "Grants permission to retrieve a JSON-formatted list of information about the specified trail",
      "accessLevel": "Read",
      "resourceTypes": {
        "trail": {
          "required": true
        }
      }
    },
    "ListPublicKeys": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListPublicKeys.html",
      "description": "Grants permission to list the public keys whose private keys were used to sign trail digest files within a specified time range",
      "accessLevel": "Read"
    },
    "ListTags": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTags.html",
      "description": "Grants permission to list the tags for trails in the current region",
      "accessLevel": "Read",
      "resourceTypes": {
        "trail": {
          "required": true
        }
      }
    },
    "ListTrails": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTrails.html",
      "description": "Grants permission to list trails associated with the current region for your account",
      "accessLevel": "List"
    },
    "LookupEvents": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html",
      "description": "Grants permission to look up API activity events captured by CloudTrail that create, update, or delete resources in your account",
      "accessLevel": "Read"
    },
    "PutEventSelectors": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutEventSelectors.html",
      "description": "Grants permission to create and update event selectors for a trail",
      "accessLevel": "Write",
      "resourceTypes": {
        "trail": {
          "required": true
        }
      }
    },
    "PutInsightSelectors": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutInsightSelectors.html",
      "description": "Grants permission to create and update CloudTrail Insights selectors for a trail",
      "accessLevel": "Write",
      "resourceTypes": {
        "trail": {
          "required": true
        }
      }
    },
    "RemoveTags": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RemoveTags.html",
      "description": "Grants permission to remove tags from a trail",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "trail": {
          "required": true
        }
      }
    },
    "StartLogging": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartLogging.html",
      "description": "Grants permission to start the recording of AWS API calls and log file delivery for a trail",
      "accessLevel": "Write",
      "resourceTypes": {
        "trail": {
          "required": true
        }
      }
    },
    "StopLogging": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopLogging.html",
      "description": "Grants permission to stop the recording of AWS API calls and log file delivery for a trail",
      "accessLevel": "Write",
      "resourceTypes": {
        "trail": {
          "required": true
        }
      }
    },
    "UpdateTrail": {
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateTrail.html",
      "description": "Grants permission to update the settings that specify delivery of log files",
      "accessLevel": "Write",
      "resourceTypes": {
        "trail": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "trail": {
      "name": "trail",
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html",
      "arn": "arn:${Partition}:cloudtrail:${Region}:${Account}:trail/${TrailName}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [cloudtrail](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudtrail.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add one or more tags to a trail, up to a limit of 10
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AddTags.html
   */
  public addTags() {
    this.add('cloudtrail:AddTags');
    return this;
  }

  /**
   * Grants permission to create a trail that specifies the settings for delivery of log data to an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Dependent Actions:
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateTrail.html
   */
  public createTrail() {
    this.add('cloudtrail:CreateTrail');
    return this;
  }

  /**
   * Grants permission to delete a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteTrail.html
   */
  public deleteTrail() {
    this.add('cloudtrail:DeleteTrail');
    return this;
  }

  /**
   * Grants permission to list settings for the trails associated with the current region for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DescribeTrails.html
   */
  public describeTrails() {
    this.add('cloudtrail:DescribeTrails');
    return this;
  }

  /**
   * Grants permission to list settings for event selectors configured for a trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetEventSelectors.html
   */
  public getEventSelectors() {
    this.add('cloudtrail:GetEventSelectors');
    return this;
  }

  /**
   * Grants permission to list CloudTrail Insights selectors that are configured for a trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetInsightSelectors.html
   */
  public getInsightSelectors() {
    this.add('cloudtrail:GetInsightSelectors');
    return this;
  }

  /**
   * Grants permission to list settings for the trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrail.html
   */
  public getTrail() {
    this.add('cloudtrail:GetTrail');
    return this;
  }

  /**
   * Grants permission to retrieve a JSON-formatted list of information about the specified trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrailStatus.html
   */
  public getTrailStatus() {
    this.add('cloudtrail:GetTrailStatus');
    return this;
  }

  /**
   * Grants permission to list the public keys whose private keys were used to sign trail digest files within a specified time range
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListPublicKeys.html
   */
  public listPublicKeys() {
    this.add('cloudtrail:ListPublicKeys');
    return this;
  }

  /**
   * Grants permission to list the tags for trails in the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTags.html
   */
  public listTags() {
    this.add('cloudtrail:ListTags');
    return this;
  }

  /**
   * Grants permission to list trails associated with the current region for your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTrails.html
   */
  public listTrails() {
    this.add('cloudtrail:ListTrails');
    return this;
  }

  /**
   * Grants permission to look up API activity events captured by CloudTrail that create, update, or delete resources in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html
   */
  public lookupEvents() {
    this.add('cloudtrail:LookupEvents');
    return this;
  }

  /**
   * Grants permission to create and update event selectors for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutEventSelectors.html
   */
  public putEventSelectors() {
    this.add('cloudtrail:PutEventSelectors');
    return this;
  }

  /**
   * Grants permission to create and update CloudTrail Insights selectors for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutInsightSelectors.html
   */
  public putInsightSelectors() {
    this.add('cloudtrail:PutInsightSelectors');
    return this;
  }

  /**
   * Grants permission to remove tags from a trail
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RemoveTags.html
   */
  public removeTags() {
    this.add('cloudtrail:RemoveTags');
    return this;
  }

  /**
   * Grants permission to start the recording of AWS API calls and log file delivery for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartLogging.html
   */
  public startLogging() {
    this.add('cloudtrail:StartLogging');
    return this;
  }

  /**
   * Grants permission to stop the recording of AWS API calls and log file delivery for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopLogging.html
   */
  public stopLogging() {
    this.add('cloudtrail:StopLogging');
    return this;
  }

  /**
   * Grants permission to update the settings that specify delivery of log files
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateTrail.html
   */
  public updateTrail() {
    this.add('cloudtrail:UpdateTrail');
    return this;
  }

  /**
   * Adds a resource of type trail to the statement
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html
   *
   * @param trailName - Identifier for the trailName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTrail(trailName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudtrail:${Region}:${Account}:trail/${TrailName}';
    arn = arn.replace('${TrailName}', trailName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
