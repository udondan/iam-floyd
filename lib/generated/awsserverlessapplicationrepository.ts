import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [serverlessrepo](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsserverlessapplicationrepository.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Serverlessrepo extends PolicyStatement {
  public servicePrefix = 'serverlessrepo';
  protected actionList: Actions = {
    "CreateApplication": {
      "url": "",
      "description": "Creates an application, optionally including an AWS SAM file to create the first application version in the same call.",
      "accessLevel": "Write"
    },
    "CreateApplicationVersion": {
      "url": "",
      "description": "Creates an application version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "applications": {
          "required": true
        }
      }
    },
    "CreateCloudFormationChangeSet": {
      "url": "",
      "description": "Creates an AWS CloudFormation ChangeSet for the given application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "applications": {
          "required": true
        }
      },
      "conditions": [
        "serverlessrepo:applicationType"
      ]
    },
    "CreateCloudFormationTemplate": {
      "url": "",
      "description": "Creates an AWS CloudFormation template",
      "accessLevel": "Write",
      "resourceTypes": {
        "applications": {
          "required": true
        }
      },
      "conditions": [
        "serverlessrepo:applicationType"
      ]
    },
    "DeleteApplication": {
      "url": "",
      "description": "Deletes the specified application",
      "accessLevel": "Write",
      "resourceTypes": {
        "applications": {
          "required": true
        }
      }
    },
    "GetApplication": {
      "url": "",
      "description": "Gets the specified application.",
      "accessLevel": "Read",
      "resourceTypes": {
        "applications": {
          "required": true
        }
      },
      "conditions": [
        "serverlessrepo:applicationType"
      ]
    },
    "GetApplicationPolicy": {
      "url": "",
      "description": "Gets the policy for the specified application.",
      "accessLevel": "Read",
      "resourceTypes": {
        "applications": {
          "required": true
        }
      }
    },
    "GetCloudFormationTemplate": {
      "url": "",
      "description": "Gets the specified AWS CloudFormation template",
      "accessLevel": "Read",
      "resourceTypes": {
        "applications": {
          "required": true
        }
      }
    },
    "ListApplicationDependencies": {
      "url": "",
      "description": "Retrieves the list of applications nested in the containing application",
      "accessLevel": "List",
      "resourceTypes": {
        "applications": {
          "required": true
        }
      },
      "conditions": [
        "serverlessrepo:applicationType"
      ]
    },
    "ListApplicationVersions": {
      "url": "",
      "description": "Lists versions for the specified application owned by the requester.",
      "accessLevel": "List",
      "resourceTypes": {
        "applications": {
          "required": true
        }
      },
      "conditions": [
        "serverlessrepo:applicationType"
      ]
    },
    "ListApplications": {
      "url": "",
      "description": "Lists applications owned by the requester.",
      "accessLevel": "List"
    },
    "PutApplicationPolicy": {
      "url": "",
      "description": "Puts the policy for the specified application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "applications": {
          "required": true
        }
      }
    },
    "SearchApplications": {
      "url": "",
      "description": "Gets all applications authorized for this user",
      "accessLevel": "Read",
      "conditions": [
        "serverlessrepo:applicationType"
      ]
    },
    "UnshareApplication": {
      "url": "",
      "description": "Unshares the specified application",
      "accessLevel": "Write",
      "resourceTypes": {
        "applications": {
          "required": true
        }
      }
    },
    "UpdateApplication": {
      "url": "",
      "description": "Updates meta-data of the application",
      "accessLevel": "Write",
      "resourceTypes": {
        "applications": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "applications": {
      "name": "applications",
      "url": "",
      "arn": "arn:${Partition}:serverlessrepo:${Region}:${Account}:applications/${ResourceId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [serverlessrepo](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsserverlessapplicationrepository.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates an application, optionally including an AWS SAM file to create the first application version in the same call.
   *
   * Access Level: Write
   */
  public createApplication() {
    this.add('serverlessrepo:CreateApplication');
    return this;
  }

  /**
   * Creates an application version.
   *
   * Access Level: Write
   */
  public createApplicationVersion() {
    this.add('serverlessrepo:CreateApplicationVersion');
    return this;
  }

  /**
   * Creates an AWS CloudFormation ChangeSet for the given application.
   *
   * Access Level: Write
   */
  public createCloudFormationChangeSet() {
    this.add('serverlessrepo:CreateCloudFormationChangeSet');
    return this;
  }

  /**
   * Creates an AWS CloudFormation template
   *
   * Access Level: Write
   */
  public createCloudFormationTemplate() {
    this.add('serverlessrepo:CreateCloudFormationTemplate');
    return this;
  }

  /**
   * Deletes the specified application
   *
   * Access Level: Write
   */
  public deleteApplication() {
    this.add('serverlessrepo:DeleteApplication');
    return this;
  }

  /**
   * Gets the specified application.
   *
   * Access Level: Read
   */
  public getApplication() {
    this.add('serverlessrepo:GetApplication');
    return this;
  }

  /**
   * Gets the policy for the specified application.
   *
   * Access Level: Read
   */
  public getApplicationPolicy() {
    this.add('serverlessrepo:GetApplicationPolicy');
    return this;
  }

  /**
   * Gets the specified AWS CloudFormation template
   *
   * Access Level: Read
   */
  public getCloudFormationTemplate() {
    this.add('serverlessrepo:GetCloudFormationTemplate');
    return this;
  }

  /**
   * Retrieves the list of applications nested in the containing application
   *
   * Access Level: List
   */
  public listApplicationDependencies() {
    this.add('serverlessrepo:ListApplicationDependencies');
    return this;
  }

  /**
   * Lists versions for the specified application owned by the requester.
   *
   * Access Level: List
   */
  public listApplicationVersions() {
    this.add('serverlessrepo:ListApplicationVersions');
    return this;
  }

  /**
   * Lists applications owned by the requester.
   *
   * Access Level: List
   */
  public listApplications() {
    this.add('serverlessrepo:ListApplications');
    return this;
  }

  /**
   * Puts the policy for the specified application.
   *
   * Access Level: Write
   */
  public putApplicationPolicy() {
    this.add('serverlessrepo:PutApplicationPolicy');
    return this;
  }

  /**
   * Gets all applications authorized for this user
   *
   * Access Level: Read
   */
  public searchApplications() {
    this.add('serverlessrepo:SearchApplications');
    return this;
  }

  /**
   * Unshares the specified application
   *
   * Access Level: Write
   */
  public unshareApplication() {
    this.add('serverlessrepo:UnshareApplication');
    return this;
  }

  /**
   * Updates meta-data of the application
   *
   * Access Level: Write
   */
  public updateApplication() {
    this.add('serverlessrepo:UpdateApplication');
    return this;
  }

  /**
   * Adds a resource of type applications to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onApplications(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:serverlessrepo:${Region}:${Account}:applications/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Application type
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifApplicationType(value: string | string[], operator?: string) {
    return this.if(`serverlessrepo:applicationType`, value, operator || 'StringLike');
  }
}
