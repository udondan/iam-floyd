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
    this.to('amplify:CreateApp');
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
    this.to('amplify:CreateBackendEnvironment');
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
    this.to('amplify:CreateBranch');
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
    this.to('amplify:CreateDeployment');
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
    this.to('amplify:CreateDomainAssociation');
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
    this.to('amplify:CreateWebHook');
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
    this.to('amplify:DeleteApp');
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
    this.to('amplify:DeleteBackendEnvironment');
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
    this.to('amplify:DeleteBranch');
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
    this.to('amplify:DeleteDomainAssociation');
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
    this.to('amplify:DeleteJob');
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
    this.to('amplify:DeleteWebHook');
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
    this.to('amplify:GenerateAccessLogs');
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
    this.to('amplify:GetApp');
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
    this.to('amplify:GetArtifactUrl');
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
    this.to('amplify:GetBackendEnvironment');
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
    this.to('amplify:GetBranch');
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
    this.to('amplify:GetDomainAssociation');
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
    this.to('amplify:GetJob');
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
    this.to('amplify:GetWebHook');
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
    this.to('amplify:ListApps');
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
    this.to('amplify:ListArtifacts');
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
    this.to('amplify:ListBackendEnvironments');
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
    this.to('amplify:ListBranches');
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
    this.to('amplify:ListDomainAssociations');
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
    this.to('amplify:ListJobs');
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
    this.to('amplify:ListWebHooks');
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
    this.to('amplify:StartDeployment');
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
    this.to('amplify:StartJob');
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
    this.to('amplify:StopJob');
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
    this.to('amplify:TagResource');
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
    this.to('amplify:UntagResource');
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
    this.to('amplify:UpdateApp');
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
    this.to('amplify:UpdateBranch');
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
    this.to('amplify:UpdateDomainAssociation');
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
    this.to('amplify:UpdateWebHook');
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
}
