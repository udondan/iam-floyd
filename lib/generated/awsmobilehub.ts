import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [mobilehub](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmobilehub.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mobilehub extends PolicyStatement {
  public servicePrefix = 'mobilehub';
  protected actionList: Actions = {
    "CreateProject": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Create a project",
      "accessLevel": "Write"
    },
    "CreateServiceRole": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Enable AWS Mobile Hub in the account by creating the required service role",
      "accessLevel": "Write"
    },
    "DeleteProject": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Delete the specified project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DeleteProjectSnapshot": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Delete a saved snapshot of project configuration",
      "accessLevel": "Write"
    },
    "DeployToStage": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Deploy changes to the specified stage",
      "accessLevel": "Write"
    },
    "DescribeBundle": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Describe the download bundle",
      "accessLevel": "Read"
    },
    "ExportBundle": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Export the download bundle",
      "accessLevel": "Read"
    },
    "ExportProject": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Export the project configuration",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "GenerateProjectParameters": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Generate project parameters required for code generation",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "GetProject": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Get project configuration and resources",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "GetProjectSnapshot": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Fetch the previously exported project configuration snapshot",
      "accessLevel": "Read"
    },
    "ImportProject": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Create a new project from the previously exported project configuration",
      "accessLevel": "Write"
    },
    "InstallBundle": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Install a bundle in the project deployments S3 bucket",
      "accessLevel": "Write"
    },
    "ListAvailableConnectors": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "List the available SaaS (Software as a Service) connectors",
      "accessLevel": "List"
    },
    "ListAvailableFeatures": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "List available features",
      "accessLevel": "List"
    },
    "ListAvailableRegions": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "List available regions for projects",
      "accessLevel": "List"
    },
    "ListBundles": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "List the available download bundles",
      "accessLevel": "List"
    },
    "ListProjectSnapshots": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "List saved snapshots of project configuration",
      "accessLevel": "List"
    },
    "ListProjects": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "List projects",
      "accessLevel": "List"
    },
    "SynchronizeProject": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Synchronize state of resources into project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "UpdateProject": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Update project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ValidateProject": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Validate a mobile hub project.",
      "accessLevel": "Read"
    },
    "VerifyServiceRole": {
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html",
      "description": "Verify AWS Mobile Hub is enabled in the account",
      "accessLevel": "Read"
    }
  };
  public resourceTypes: ResourceTypes = {
    "project": {
      "name": "project",
      "url": "https://docs.aws.amazon.com/mobile-hub/latest/developerguide/reference-mobile-hub-iam-managed-policies.html",
      "arn": "arn:${Partition}:mobilehub:${Region}:${Account}:project/${ProjectId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [mobilehub](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmobilehub.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Create a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public createProject() {
    this.add('mobilehub:CreateProject');
    return this;
  }

  /**
   * Enable AWS Mobile Hub in the account by creating the required service role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public createServiceRole() {
    this.add('mobilehub:CreateServiceRole');
    return this;
  }

  /**
   * Delete the specified project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public deleteProject() {
    this.add('mobilehub:DeleteProject');
    return this;
  }

  /**
   * Delete a saved snapshot of project configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public deleteProjectSnapshot() {
    this.add('mobilehub:DeleteProjectSnapshot');
    return this;
  }

  /**
   * Deploy changes to the specified stage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public deployToStage() {
    this.add('mobilehub:DeployToStage');
    return this;
  }

  /**
   * Describe the download bundle
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public describeBundle() {
    this.add('mobilehub:DescribeBundle');
    return this;
  }

  /**
   * Export the download bundle
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public exportBundle() {
    this.add('mobilehub:ExportBundle');
    return this;
  }

  /**
   * Export the project configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public exportProject() {
    this.add('mobilehub:ExportProject');
    return this;
  }

  /**
   * Generate project parameters required for code generation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public generateProjectParameters() {
    this.add('mobilehub:GenerateProjectParameters');
    return this;
  }

  /**
   * Get project configuration and resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public getProject() {
    this.add('mobilehub:GetProject');
    return this;
  }

  /**
   * Fetch the previously exported project configuration snapshot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public getProjectSnapshot() {
    this.add('mobilehub:GetProjectSnapshot');
    return this;
  }

  /**
   * Create a new project from the previously exported project configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public importProject() {
    this.add('mobilehub:ImportProject');
    return this;
  }

  /**
   * Install a bundle in the project deployments S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public installBundle() {
    this.add('mobilehub:InstallBundle');
    return this;
  }

  /**
   * List the available SaaS (Software as a Service) connectors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public listAvailableConnectors() {
    this.add('mobilehub:ListAvailableConnectors');
    return this;
  }

  /**
   * List available features
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public listAvailableFeatures() {
    this.add('mobilehub:ListAvailableFeatures');
    return this;
  }

  /**
   * List available regions for projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public listAvailableRegions() {
    this.add('mobilehub:ListAvailableRegions');
    return this;
  }

  /**
   * List the available download bundles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public listBundles() {
    this.add('mobilehub:ListBundles');
    return this;
  }

  /**
   * List saved snapshots of project configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public listProjectSnapshots() {
    this.add('mobilehub:ListProjectSnapshots');
    return this;
  }

  /**
   * List projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public listProjects() {
    this.add('mobilehub:ListProjects');
    return this;
  }

  /**
   * Synchronize state of resources into project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public synchronizeProject() {
    this.add('mobilehub:SynchronizeProject');
    return this;
  }

  /**
   * Update project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public updateProject() {
    this.add('mobilehub:UpdateProject');
    return this;
  }

  /**
   * Validate a mobile hub project.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public validateProject() {
    this.add('mobilehub:ValidateProject');
    return this;
  }

  /**
   * Verify AWS Mobile Hub is enabled in the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public verifyServiceRole() {
    this.add('mobilehub:VerifyServiceRole');
    return this;
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/reference-mobile-hub-iam-managed-policies.html
   *
   * @param projectId - Identifier for the projectId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProject(projectId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mobilehub:${Region}:${Account}:project/${ProjectId}';
    arn = arn.replace('${ProjectId}', projectId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
