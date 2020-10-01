import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [kinesisanalytics-v2](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisanalyticsv2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class KinesisanalyticsV2 extends PolicyStatement {
  public servicePrefix = 'kinesisanalytics-v2';
  protected actionList: Actions = {
    "AddApplicationCloudWatchLoggingOption": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationCloudWatchLoggingOption.html",
      "description": "Adds cloudwatch logging option to the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "AddApplicationInput": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationInput.html",
      "description": "Adds input to the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "AddApplicationInputProcessingConfiguration": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationInputProcessingConfiguration.html",
      "description": "Adds input processing configuration to the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "AddApplicationOutput": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationOutput.html",
      "description": "Adds output to the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "AddApplicationReferenceDataSource": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationReferenceDataSource.html",
      "description": "Adds reference data source to the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "AddApplicationVpcConfiguration": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationVpcConfiguration.html",
      "description": "Adds VPC configuration to the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "CreateApplication": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplication.html",
      "description": "Creates an application.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateApplicationSnapshot": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplicationSnapshot.html",
      "description": "Creates a snapshot for an application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DeleteApplication": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplication.html",
      "description": "Deletes the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DeleteApplicationCloudWatchLoggingOption": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationCloudWatchLoggingOption.html",
      "description": "Deletes the specified cloudwatch logging option of the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DeleteApplicationInputProcessingConfiguration": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationInputProcessingConfiguration.html",
      "description": "Deletes the specified input processing configuration of the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DeleteApplicationOutput": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationOutput.html",
      "description": "Deletes the specified output of the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DeleteApplicationReferenceDataSource": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationReferenceDataSource.html",
      "description": "Deletes the specified reference data source of the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DeleteApplicationSnapshot": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationSnapshot.html",
      "description": "Deletes a snapshot for an application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DeleteApplicationVpcConfiguration": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationVpcConfiguration.html",
      "description": "Deletes the specified VPC configuration of the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DescribeApplication": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplication.html",
      "description": "Describes the specified application.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DescribeApplicationSnapshot": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplicationSnapshot.html",
      "description": "Describes an application snapshot.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DiscoverInputSchema": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DiscoverInputSchema.html",
      "description": "Discovers the input schema for the application.",
      "accessLevel": "Read"
    },
    "ListApplicationSnapshots": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplicationSnapshots.html",
      "description": "Lists the snapshots for an application.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "ListApplications": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplications.html",
      "description": "List applications for the account",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListTagsForResource.html",
      "description": "Fetch the tags associated with the application.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "StartApplication": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_StartsApplication.html",
      "description": "Starts the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "StopApplication": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_StopApplication.html",
      "description": "Stops the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_TagResource.html",
      "description": "Add tags to the application.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "application": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UntagResource.html",
      "description": "Remove the specified tags from the application.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "application": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateApplication": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UpdateApplication.html",
      "description": "Updates the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "application": {
      "name": "application",
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/how-it-works.html",
      "arn": "arn:${Partition}:kinesisanalytics:${Region}:${Account}:application/${ApplicationName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [kinesisanalytics-v2](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisanalyticsv2.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds cloudwatch logging option to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationCloudWatchLoggingOption.html
   */
  public toAddApplicationCloudWatchLoggingOption() {
    this.to('kinesisanalytics-v2:AddApplicationCloudWatchLoggingOption');
    return this;
  }

  /**
   * Adds input to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationInput.html
   */
  public toAddApplicationInput() {
    this.to('kinesisanalytics-v2:AddApplicationInput');
    return this;
  }

  /**
   * Adds input processing configuration to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationInputProcessingConfiguration.html
   */
  public toAddApplicationInputProcessingConfiguration() {
    this.to('kinesisanalytics-v2:AddApplicationInputProcessingConfiguration');
    return this;
  }

  /**
   * Adds output to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationOutput.html
   */
  public toAddApplicationOutput() {
    this.to('kinesisanalytics-v2:AddApplicationOutput');
    return this;
  }

  /**
   * Adds reference data source to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationReferenceDataSource.html
   */
  public toAddApplicationReferenceDataSource() {
    this.to('kinesisanalytics-v2:AddApplicationReferenceDataSource');
    return this;
  }

  /**
   * Adds VPC configuration to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationVpcConfiguration.html
   */
  public toAddApplicationVpcConfiguration() {
    this.to('kinesisanalytics-v2:AddApplicationVpcConfiguration');
    return this;
  }

  /**
   * Creates an application.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplication.html
   */
  public toCreateApplication() {
    this.to('kinesisanalytics-v2:CreateApplication');
    return this;
  }

  /**
   * Creates a snapshot for an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplicationSnapshot.html
   */
  public toCreateApplicationSnapshot() {
    this.to('kinesisanalytics-v2:CreateApplicationSnapshot');
    return this;
  }

  /**
   * Deletes the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    this.to('kinesisanalytics-v2:DeleteApplication');
    return this;
  }

  /**
   * Deletes the specified cloudwatch logging option of the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationCloudWatchLoggingOption.html
   */
  public toDeleteApplicationCloudWatchLoggingOption() {
    this.to('kinesisanalytics-v2:DeleteApplicationCloudWatchLoggingOption');
    return this;
  }

  /**
   * Deletes the specified input processing configuration of the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationInputProcessingConfiguration.html
   */
  public toDeleteApplicationInputProcessingConfiguration() {
    this.to('kinesisanalytics-v2:DeleteApplicationInputProcessingConfiguration');
    return this;
  }

  /**
   * Deletes the specified output of the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationOutput.html
   */
  public toDeleteApplicationOutput() {
    this.to('kinesisanalytics-v2:DeleteApplicationOutput');
    return this;
  }

  /**
   * Deletes the specified reference data source of the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationReferenceDataSource.html
   */
  public toDeleteApplicationReferenceDataSource() {
    this.to('kinesisanalytics-v2:DeleteApplicationReferenceDataSource');
    return this;
  }

  /**
   * Deletes a snapshot for an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationSnapshot.html
   */
  public toDeleteApplicationSnapshot() {
    this.to('kinesisanalytics-v2:DeleteApplicationSnapshot');
    return this;
  }

  /**
   * Deletes the specified VPC configuration of the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationVpcConfiguration.html
   */
  public toDeleteApplicationVpcConfiguration() {
    this.to('kinesisanalytics-v2:DeleteApplicationVpcConfiguration');
    return this;
  }

  /**
   * Describes the specified application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplication.html
   */
  public toDescribeApplication() {
    this.to('kinesisanalytics-v2:DescribeApplication');
    return this;
  }

  /**
   * Describes an application snapshot.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplicationSnapshot.html
   */
  public toDescribeApplicationSnapshot() {
    this.to('kinesisanalytics-v2:DescribeApplicationSnapshot');
    return this;
  }

  /**
   * Discovers the input schema for the application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DiscoverInputSchema.html
   */
  public toDiscoverInputSchema() {
    this.to('kinesisanalytics-v2:DiscoverInputSchema');
    return this;
  }

  /**
   * Lists the snapshots for an application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplicationSnapshots.html
   */
  public toListApplicationSnapshots() {
    this.to('kinesisanalytics-v2:ListApplicationSnapshots');
    return this;
  }

  /**
   * List applications for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplications.html
   */
  public toListApplications() {
    this.to('kinesisanalytics-v2:ListApplications');
    return this;
  }

  /**
   * Fetch the tags associated with the application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('kinesisanalytics-v2:ListTagsForResource');
    return this;
  }

  /**
   * Starts the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_StartsApplication.html
   */
  public toStartApplication() {
    this.to('kinesisanalytics-v2:StartApplication');
    return this;
  }

  /**
   * Stops the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_StopApplication.html
   */
  public toStopApplication() {
    this.to('kinesisanalytics-v2:StopApplication');
    return this;
  }

  /**
   * Add tags to the application.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_TagResource.html
   */
  public toTagResource() {
    this.to('kinesisanalytics-v2:TagResource');
    return this;
  }

  /**
   * Remove the specified tags from the application.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('kinesisanalytics-v2:UntagResource');
    return this;
  }

  /**
   * Updates the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    this.to('kinesisanalytics-v2:UpdateApplication');
    return this;
  }

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/how-it-works.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kinesisanalytics:${Region}:${Account}:application/${ApplicationName}';
    arn = arn.replace('${ApplicationName}', applicationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
