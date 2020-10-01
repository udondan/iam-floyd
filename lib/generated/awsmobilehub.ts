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
  protected resourceTypes: ResourceTypes = {
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
  public toCreateProject() {
    this.to('mobilehub:CreateProject');
    return this;
  }

  /**
   * Enable AWS Mobile Hub in the account by creating the required service role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toCreateServiceRole() {
    this.to('mobilehub:CreateServiceRole');
    return this;
  }

  /**
   * Delete the specified project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toDeleteProject() {
    this.to('mobilehub:DeleteProject');
    return this;
  }

  /**
   * Delete a saved snapshot of project configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toDeleteProjectSnapshot() {
    this.to('mobilehub:DeleteProjectSnapshot');
    return this;
  }

  /**
   * Deploy changes to the specified stage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toDeployToStage() {
    this.to('mobilehub:DeployToStage');
    return this;
  }

  /**
   * Describe the download bundle
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toDescribeBundle() {
    this.to('mobilehub:DescribeBundle');
    return this;
  }

  /**
   * Export the download bundle
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toExportBundle() {
    this.to('mobilehub:ExportBundle');
    return this;
  }

  /**
   * Export the project configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toExportProject() {
    this.to('mobilehub:ExportProject');
    return this;
  }

  /**
   * Generate project parameters required for code generation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toGenerateProjectParameters() {
    this.to('mobilehub:GenerateProjectParameters');
    return this;
  }

  /**
   * Get project configuration and resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toGetProject() {
    this.to('mobilehub:GetProject');
    return this;
  }

  /**
   * Fetch the previously exported project configuration snapshot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toGetProjectSnapshot() {
    this.to('mobilehub:GetProjectSnapshot');
    return this;
  }

  /**
   * Create a new project from the previously exported project configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toImportProject() {
    this.to('mobilehub:ImportProject');
    return this;
  }

  /**
   * Install a bundle in the project deployments S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toInstallBundle() {
    this.to('mobilehub:InstallBundle');
    return this;
  }

  /**
   * List the available SaaS (Software as a Service) connectors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListAvailableConnectors() {
    this.to('mobilehub:ListAvailableConnectors');
    return this;
  }

  /**
   * List available features
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListAvailableFeatures() {
    this.to('mobilehub:ListAvailableFeatures');
    return this;
  }

  /**
   * List available regions for projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListAvailableRegions() {
    this.to('mobilehub:ListAvailableRegions');
    return this;
  }

  /**
   * List the available download bundles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListBundles() {
    this.to('mobilehub:ListBundles');
    return this;
  }

  /**
   * List saved snapshots of project configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListProjectSnapshots() {
    this.to('mobilehub:ListProjectSnapshots');
    return this;
  }

  /**
   * List projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListProjects() {
    this.to('mobilehub:ListProjects');
    return this;
  }

  /**
   * Synchronize state of resources into project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toSynchronizeProject() {
    this.to('mobilehub:SynchronizeProject');
    return this;
  }

  /**
   * Update project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toUpdateProject() {
    this.to('mobilehub:UpdateProject');
    return this;
  }

  /**
   * Validate a mobile hub project.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toValidateProject() {
    this.to('mobilehub:ValidateProject');
    return this;
  }

  /**
   * Verify AWS Mobile Hub is enabled in the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toVerifyServiceRole() {
    this.to('mobilehub:VerifyServiceRole');
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
