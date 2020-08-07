import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [kinesisanalytics](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisanalytics.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kinesisanalytics extends PolicyStatement {
  public servicePrefix = 'kinesisanalytics';
  protected actionList: Actions = {
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
  protected resourceTypes: ResourceTypes = {
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
   * Statement provider for service [kinesisanalytics](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisanalytics.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds input to the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationInput.html
   */
  public toAddApplicationInput() {
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
  public toAddApplicationOutput() {
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
  public toAddApplicationReferenceDataSource() {
    this.add('kinesisanalytics:AddApplicationReferenceDataSource');
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
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html
   */
  public toCreateApplication() {
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
  public toDeleteApplication() {
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
  public toDeleteApplicationOutput() {
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
  public toDeleteApplicationReferenceDataSource() {
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
  public toDescribeApplication() {
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
  public toDiscoverInputSchema() {
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
  public toGetApplicationState() {
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
  public toListApplications() {
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
  public toListTagsForResource() {
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
  public toStartApplication() {
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
  public toStopApplication() {
    this.add('kinesisanalytics:StopApplication');
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
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_TagResource.html
   */
  public toTagResource() {
    this.add('kinesisanalytics:TagResource');
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
   * https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UntagResource.html
   */
  public toUntagResource() {
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
  public toUpdateApplication() {
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

  /**
   * Filters actions based on the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateApplication()
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
   * Filters actions based on tag-value assoicated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - application
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of mandatory tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateApplication()
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
