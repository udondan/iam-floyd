import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service kinesisanalytics
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisanalytics.html
 */
export class Kinesisanalytics extends PolicyStatement {
  public servicePrefix = 'kinesisanalytics';
  public actions: Actions = {
    "AddApplicationInput": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationInput.html",
      "description": "Adds input to the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "AddApplicationOutput": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationOutput.html",
      "description": "Adds output to the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "AddApplicationReferenceDataSource": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html",
      "description": "Adds reference data source to the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "CreateApplication": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html",
      "description": "Creates an application.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteApplication": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplication.html",
      "description": "Deletes the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DeleteApplicationOutput": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplicationOutput.html",
      "description": "Deletes the specified output of the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DeleteApplicationReferenceDataSource": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplicationReferenceDataSource.html",
      "description": "Deletes the specified reference data source of the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DescribeApplication": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html",
      "description": "Describes the specified application.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DiscoverInputSchema": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DiscoverInputSchema.html",
      "description": "Discovers the input schema for the application.",
      "accessLevel": "Read"
    },
    "GetApplicationState": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/api-permissions-reference.html#api-permissions-reference-gas",
      "description": "Grant permission to Kinesis Data Analytics console to display stream results for Kinesis Data Analytics SQL runtime applications.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "ListApplications": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html",
      "description": "List applications for the account",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListTagsForResource.html",
      "description": "Fetch the tags associated with the application.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "StartApplication": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StartsApplication.html",
      "description": "Starts the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "StopApplication": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html",
      "description": "Stops the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_TagResource.html",
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
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UntagResource.html",
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
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html",
      "description": "Updates the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "application": {
      "name": "application",
      "url": "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html",
      "arn": "arn:${Partition}:kinesisanalytics:${Region}:${Account}:application/${ApplicationName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service kinesisanalytics
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisanalytics.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Adds input to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationInput.html
   */
  public addApplicationInput() {
    this.add('kinesisanalytics:AddApplicationInput');
    return this;
  }

  /**
   * Adds output to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationOutput.html
   */
  public addApplicationOutput() {
    this.add('kinesisanalytics:AddApplicationOutput');
    return this;
  }

  /**
   * Adds reference data source to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html
   */
  public addApplicationReferenceDataSource() {
    this.add('kinesisanalytics:AddApplicationReferenceDataSource');
    return this;
  }

  /**
   * Creates an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html
   */
  public createApplication() {
    this.add('kinesisanalytics:CreateApplication');
    return this;
  }

  /**
   * Deletes the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplication.html
   */
  public deleteApplication() {
    this.add('kinesisanalytics:DeleteApplication');
    return this;
  }

  /**
   * Deletes the specified output of the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplicationOutput.html
   */
  public deleteApplicationOutput() {
    this.add('kinesisanalytics:DeleteApplicationOutput');
    return this;
  }

  /**
   * Deletes the specified reference data source of the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplicationReferenceDataSource.html
   */
  public deleteApplicationReferenceDataSource() {
    this.add('kinesisanalytics:DeleteApplicationReferenceDataSource');
    return this;
  }

  /**
   * Describes the specified application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html
   */
  public describeApplication() {
    this.add('kinesisanalytics:DescribeApplication');
    return this;
  }

  /**
   * Discovers the input schema for the application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DiscoverInputSchema.html
   */
  public discoverInputSchema() {
    this.add('kinesisanalytics:DiscoverInputSchema');
    return this;
  }

  /**
   * Grant permission to Kinesis Data Analytics console to display stream results for Kinesis Data Analytics SQL runtime applications.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/api-permissions-reference.html#api-permissions-reference-gas
   */
  public getApplicationState() {
    this.add('kinesisanalytics:GetApplicationState');
    return this;
  }

  /**
   * List applications for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html
   */
  public listApplications() {
    this.add('kinesisanalytics:ListApplications');
    return this;
  }

  /**
   * Fetch the tags associated with the application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('kinesisanalytics:ListTagsForResource');
    return this;
  }

  /**
   * Starts the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StartsApplication.html
   */
  public startApplication() {
    this.add('kinesisanalytics:StartApplication');
    return this;
  }

  /**
   * Stops the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html
   */
  public stopApplication() {
    this.add('kinesisanalytics:StopApplication');
    return this;
  }

  /**
   * Add tags to the application.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_TagResource.html
   */
  public tagResource() {
    this.add('kinesisanalytics:TagResource');
    return this;
  }

  /**
   * Remove the specified tags from the application.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UntagResource.html
   */
  public untagResource() {
    this.add('kinesisanalytics:UntagResource');
    return this;
  }

  /**
   * Updates the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html
   */
  public updateApplication() {
    this.add('kinesisanalytics:UpdateApplication');
    return this;
  }

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
