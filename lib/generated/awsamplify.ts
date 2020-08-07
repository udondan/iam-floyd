import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [amplify](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsamplify.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Amplify extends PolicyStatement {
  public servicePrefix = 'amplify';
  protected actionList: Actions = {
    "CreateApp": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Creates a new Amplify App.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateBackendEnvironment": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Creates a new backend environment for an Amplify App.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "CreateBranch": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Creates a new Branch for an Amplify App.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDeployment": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Create a deployment for manual deploy apps. (Apps are not connected to repository)",
      "accessLevel": "Write",
      "resourceTypes": {
        "branches": {
          "required": true
        }
      }
    },
    "CreateDomainAssociation": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Create a new DomainAssociation on an App",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateWebHook": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Create a new webhook on an App.",
      "accessLevel": "Write",
      "resourceTypes": {
        "branches": {
          "required": true
        }
      }
    },
    "DeleteApp": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Delete an existing Amplify App by appId.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteBackendEnvironment": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Deletes a branch for an Amplify App.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "DeleteBranch": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Deletes a branch for an Amplify App.",
      "accessLevel": "Write",
      "resourceTypes": {
        "branches": {
          "required": true
        }
      }
    },
    "DeleteDomainAssociation": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Deletes a DomainAssociation.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domains": {
          "required": true
        }
      }
    },
    "DeleteJob": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Delete a job, for an Amplify branch, part of Amplify App.",
      "accessLevel": "Write",
      "resourceTypes": {
        "jobs": {
          "required": true
        }
      }
    },
    "DeleteWebHook": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Delete a webhook by id.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GenerateAccessLogs": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Generate website access logs for a specific time range via a pre-signed URL.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetApp": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Retrieves an existing Amplify App by appId.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetArtifactUrl": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Retrieves artifact info that corresponds to a artifactId.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetBackendEnvironment": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Retrieves a backend environment for an Amplify App.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "GetBranch": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Retrieves a branch for an Amplify App.",
      "accessLevel": "Read",
      "resourceTypes": {
        "branches": {
          "required": true
        }
      }
    },
    "GetDomainAssociation": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Retrieves domain info that corresponds to an appId and domainName.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domains": {
          "required": true
        }
      }
    },
    "GetJob": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Get a job for a branch, part of an Amplify App.",
      "accessLevel": "Read",
      "resourceTypes": {
        "jobs": {
          "required": true
        }
      }
    },
    "GetWebHook": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Retrieves webhook info that corresponds to a webhookId.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "ListApps": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Lists existing Amplify Apps.",
      "accessLevel": "List"
    },
    "ListArtifacts": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "List artifacts with an app, a branch, a job and an artifact type.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "ListBackendEnvironments": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Lists backend environments for an Amplify App.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "ListBranches": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Lists branches for an Amplify App.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "ListDomainAssociations": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "List domains with an app",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "ListJobs": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "List Jobs for a branch, part of an Amplify App.",
      "accessLevel": "List",
      "resourceTypes": {
        "branches": {
          "required": true
        }
      }
    },
    "ListWebHooks": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "List webhooks on an App.",
      "accessLevel": "List",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "StartDeployment": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Start a deployment for manual deploy apps. (Apps are not connected to repository)",
      "accessLevel": "Write",
      "resourceTypes": {
        "branches": {
          "required": true
        }
      }
    },
    "StartJob": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Starts a new job for a branch, part of an Amplify App.",
      "accessLevel": "Write",
      "resourceTypes": {
        "jobs": {
          "required": true
        }
      }
    },
    "StopJob": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Stop a job that is in progress, for an Amplify branch, part of Amplify App.",
      "accessLevel": "Write",
      "resourceTypes": {
        "jobs": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "This action tags an AWS Amplify Console resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "apps": {
          "required": false
        },
        "branches": {
          "required": false
        },
        "jobs": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "This action removes a tag from an AWS Amplify Console resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "apps": {
          "required": false
        },
        "branches": {
          "required": false
        },
        "jobs": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateApp": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Updates an existing Amplify App.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    },
    "UpdateBranch": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Updates a branch for an Amplify App.",
      "accessLevel": "Write",
      "resourceTypes": {
        "branches": {
          "required": true
        }
      }
    },
    "UpdateDomainAssociation": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Update a DomainAssociation on an App.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domains": {
          "required": true
        }
      }
    },
    "UpdateWebHook": {
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "description": "Update a webhook.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apps": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "apps": {
      "name": "apps",
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "arn": "arn:${Partition}:amplify:${Region}:${Account}:apps/${AppId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "branches": {
      "name": "branches",
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "arn": "arn:${Partition}:amplify:${Region}:${Account}:apps/${AppId}/branches/${BranchName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "jobs": {
      "name": "jobs",
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "arn": "arn:${Partition}:amplify:${Region}:${Account}:apps/${AppId}/branches/${BranchName}/jobs/${JobId}",
      "conditionKeys": []
    },
    "domains": {
      "name": "domains",
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
      "arn": "arn:${Partition}:amplify:${Region}:${Account}:apps/${AppId}/domains/${DomainName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [amplify](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsamplify.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a new Amplify App.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateApp() {
    this.add('amplify:CreateApp');
    return this;
  }

  /**
   * Creates a new backend environment for an Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateBackendEnvironment() {
    this.add('amplify:CreateBackendEnvironment');
    return this;
  }

  /**
   * Creates a new Branch for an Amplify App.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateBranch() {
    this.add('amplify:CreateBranch');
    return this;
  }

  /**
   * Create a deployment for manual deploy apps. (Apps are not connected to repository)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateDeployment() {
    this.add('amplify:CreateDeployment');
    return this;
  }

  /**
   * Create a new DomainAssociation on an App
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateDomainAssociation() {
    this.add('amplify:CreateDomainAssociation');
    return this;
  }

  /**
   * Create a new webhook on an App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateWebHook() {
    this.add('amplify:CreateWebHook');
    return this;
  }

  /**
   * Delete an existing Amplify App by appId.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteApp() {
    this.add('amplify:DeleteApp');
    return this;
  }

  /**
   * Deletes a branch for an Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteBackendEnvironment() {
    this.add('amplify:DeleteBackendEnvironment');
    return this;
  }

  /**
   * Deletes a branch for an Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteBranch() {
    this.add('amplify:DeleteBranch');
    return this;
  }

  /**
   * Deletes a DomainAssociation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteDomainAssociation() {
    this.add('amplify:DeleteDomainAssociation');
    return this;
  }

  /**
   * Delete a job, for an Amplify branch, part of Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteJob() {
    this.add('amplify:DeleteJob');
    return this;
  }

  /**
   * Delete a webhook by id.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteWebHook() {
    this.add('amplify:DeleteWebHook');
    return this;
  }

  /**
   * Generate website access logs for a specific time range via a pre-signed URL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGenerateAccessLogs() {
    this.add('amplify:GenerateAccessLogs');
    return this;
  }

  /**
   * Retrieves an existing Amplify App by appId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetApp() {
    this.add('amplify:GetApp');
    return this;
  }

  /**
   * Retrieves artifact info that corresponds to a artifactId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetArtifactUrl() {
    this.add('amplify:GetArtifactUrl');
    return this;
  }

  /**
   * Retrieves a backend environment for an Amplify App.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetBackendEnvironment() {
    this.add('amplify:GetBackendEnvironment');
    return this;
  }

  /**
   * Retrieves a branch for an Amplify App.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetBranch() {
    this.add('amplify:GetBranch');
    return this;
  }

  /**
   * Retrieves domain info that corresponds to an appId and domainName.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetDomainAssociation() {
    this.add('amplify:GetDomainAssociation');
    return this;
  }

  /**
   * Get a job for a branch, part of an Amplify App.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetJob() {
    this.add('amplify:GetJob');
    return this;
  }

  /**
   * Retrieves webhook info that corresponds to a webhookId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetWebHook() {
    this.add('amplify:GetWebHook');
    return this;
  }

  /**
   * Lists existing Amplify Apps.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListApps() {
    this.add('amplify:ListApps');
    return this;
  }

  /**
   * List artifacts with an app, a branch, a job and an artifact type.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListArtifacts() {
    this.add('amplify:ListArtifacts');
    return this;
  }

  /**
   * Lists backend environments for an Amplify App.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListBackendEnvironments() {
    this.add('amplify:ListBackendEnvironments');
    return this;
  }

  /**
   * Lists branches for an Amplify App.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListBranches() {
    this.add('amplify:ListBranches');
    return this;
  }

  /**
   * List domains with an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListDomainAssociations() {
    this.add('amplify:ListDomainAssociations');
    return this;
  }

  /**
   * List Jobs for a branch, part of an Amplify App.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListJobs() {
    this.add('amplify:ListJobs');
    return this;
  }

  /**
   * List webhooks on an App.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListWebHooks() {
    this.add('amplify:ListWebHooks');
    return this;
  }

  /**
   * Start a deployment for manual deploy apps. (Apps are not connected to repository)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toStartDeployment() {
    this.add('amplify:StartDeployment');
    return this;
  }

  /**
   * Starts a new job for a branch, part of an Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toStartJob() {
    this.add('amplify:StartJob');
    return this;
  }

  /**
   * Stop a job that is in progress, for an Amplify branch, part of Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toStopJob() {
    this.add('amplify:StopJob');
    return this;
  }

  /**
   * This action tags an AWS Amplify Console resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toTagResource() {
    this.add('amplify:TagResource');
    return this;
  }

  /**
   * This action removes a tag from an AWS Amplify Console resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUntagResource() {
    this.add('amplify:UntagResource');
    return this;
  }

  /**
   * Updates an existing Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUpdateApp() {
    this.add('amplify:UpdateApp');
    return this;
  }

  /**
   * Updates a branch for an Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUpdateBranch() {
    this.add('amplify:UpdateBranch');
    return this;
  }

  /**
   * Update a DomainAssociation on an App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUpdateDomainAssociation() {
    this.add('amplify:UpdateDomainAssociation');
    return this;
  }

  /**
   * Update a webhook.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUpdateWebHook() {
    this.add('amplify:UpdateWebHook');
    return this;
  }

  /**
   * Adds a resource of type apps to the statement
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApps(appId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplify:${Region}:${Account}:apps/${AppId}';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type branches to the statement
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   *
   * @param appId - Identifier for the appId.
   * @param branchName - Identifier for the branchName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBranches(appId: string, branchName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplify:${Region}:${Account}:apps/${AppId}/branches/${BranchName}';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${BranchName}', branchName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type jobs to the statement
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   *
   * @param appId - Identifier for the appId.
   * @param branchName - Identifier for the branchName.
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onJobs(appId: string, branchName: string, jobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplify:${Region}:${Account}:apps/${AppId}/branches/${BranchName}/jobs/${JobId}';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${BranchName}', branchName);
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type domains to the statement
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   *
   * @param appId - Identifier for the appId.
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomains(appId: string, domainName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplify:${Region}:${Account}:apps/${AppId}/domains/${DomainName}';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Applies to actions:
   * - .toCreateApp()
   * - .toCreateBranch()
   * - .toCreateDomainAssociation()
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
   * - apps
   * - branches
   * - domains
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
   * - .toCreateApp()
   * - .toCreateBranch()
   * - .toCreateDomainAssociation()
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
