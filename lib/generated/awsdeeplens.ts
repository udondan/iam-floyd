import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service deeplens
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdeeplens.html
 */
export class Deeplens extends PolicyStatement {
  public servicePrefix = 'deeplens';
  public actions: Actions = {
    "AssociateServiceRoleToAccount": {
      "url": "",
      "description": "Associates the user's account with IAM roles controlling various permissions needed by AWS DeepLens for proper functionality.",
      "accessLevel": "Permissions management"
    },
    "BatchGetDevice": {
      "url": "",
      "description": "Retrieves a list of AWS DeepLens devices.",
      "accessLevel": "Read",
      "resourceTypes": {
        "device": {
          "required": true
        }
      }
    },
    "BatchGetModel": {
      "url": "",
      "description": "Retrieves a list of AWS DeepLens Models.",
      "accessLevel": "Read",
      "resourceTypes": {
        "model": {
          "required": true
        }
      }
    },
    "BatchGetProject": {
      "url": "",
      "description": "Retrieves a list of AWS DeepLens Projects.",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "CreateDeviceCertificates": {
      "url": "",
      "description": "Creates a certificate package that is used to successfully authenticate and Register an AWS DeepLens device.",
      "accessLevel": "Write"
    },
    "CreateModel": {
      "url": "",
      "description": "Creates a new AWS DeepLens Model.",
      "accessLevel": "Write"
    },
    "CreateProject": {
      "url": "",
      "description": "Creates a new AWS DeepLens Project.",
      "accessLevel": "Write"
    },
    "DeleteModel": {
      "url": "",
      "description": "Deletes an AWS DeepLens Model.",
      "accessLevel": "Write",
      "resourceTypes": {
        "model": {
          "required": true
        }
      }
    },
    "DeleteProject": {
      "url": "",
      "description": "Deletes an AWS DeepLens Project.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DeployProject": {
      "url": "",
      "description": "Deploys an AWS DeepLens project to a registered AWS DeepLens device.",
      "accessLevel": "Write",
      "resourceTypes": {
        "device": {
          "required": true
        },
        "project": {
          "required": true
        }
      }
    },
    "DeregisterDevice": {
      "url": "",
      "description": "Begins a device de-registration workflow for a registered AWS DeepLens device.",
      "accessLevel": "Write",
      "resourceTypes": {
        "device": {
          "required": true
        }
      }
    },
    "GetAssociatedResources": {
      "url": "",
      "description": "Retrieves the account level resources associated with the user's account.",
      "accessLevel": "Read"
    },
    "GetDeploymentStatus": {
      "url": "",
      "description": "Retrieves the the deployment status of a particular AWS DeepLens device, along with any associated metadata.",
      "accessLevel": "Read"
    },
    "GetDevice": {
      "url": "",
      "description": "Retrieves information about an AWS DeepLens device.",
      "accessLevel": "Read",
      "resourceTypes": {
        "device": {
          "required": true
        }
      }
    },
    "GetModel": {
      "url": "",
      "description": "Retrieves an AWS DeepLens Model.",
      "accessLevel": "Read",
      "resourceTypes": {
        "model": {
          "required": true
        }
      }
    },
    "GetProject": {
      "url": "",
      "description": "Retrieves an AWS DeepLens Project.",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ImportProjectFromTemplate": {
      "url": "",
      "description": "Creates a new AWS DeepLens project from a sample project template.",
      "accessLevel": "Write"
    },
    "ListDeployments": {
      "url": "",
      "description": "Retrieves a list of AWS DeepLens Deployment identifiers.",
      "accessLevel": "List"
    },
    "ListDevices": {
      "url": "",
      "description": "Retrieves a list of AWS DeepLens device identifiers.",
      "accessLevel": "List"
    },
    "ListModels": {
      "url": "",
      "description": "Retrieves a list of AWS DeepLens Model identifiers.",
      "accessLevel": "List"
    },
    "ListProjects": {
      "url": "",
      "description": "Retrieves a list of AWS DeepLens Project identifiers.",
      "accessLevel": "List"
    },
    "RegisterDevice": {
      "url": "",
      "description": "Begins a device registration workflow for an AWS DeepLens device.",
      "accessLevel": "Write"
    },
    "RemoveProject": {
      "url": "",
      "description": "Removes a deployed AWS DeepLens project from an AWS DeepLens device.",
      "accessLevel": "Write",
      "resourceTypes": {
        "device": {
          "required": true
        }
      }
    },
    "UpdateProject": {
      "url": "",
      "description": "Updates an existing AWS DeepLens Project.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "device": {
      "name": "device",
      "url": "",
      "arn": "arn:${Partition}:deeplens:${Region}:${Account}:device/${DeviceName}",
      "conditionKeys": []
    },
    "project": {
      "name": "project",
      "url": "",
      "arn": "arn:${Partition}:deeplens:${Region}:${Account}:project/${ProjectName}",
      "conditionKeys": []
    },
    "model": {
      "name": "model",
      "url": "",
      "arn": "arn:${Partition}:deeplens:${Region}:${Account}:model/${ModelName}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service deeplens
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdeeplens.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Associates the user's account with IAM roles controlling various permissions needed by AWS DeepLens for proper functionality.
   *
   * Access Level: Permissions management
   */
  public associateServiceRoleToAccount() {
    this.add('deeplens:AssociateServiceRoleToAccount');
    return this;
  }

  /**
   * Retrieves a list of AWS DeepLens devices.
   *
   * Access Level: Read
   */
  public batchGetDevice() {
    this.add('deeplens:BatchGetDevice');
    return this;
  }

  /**
   * Retrieves a list of AWS DeepLens Models.
   *
   * Access Level: Read
   */
  public batchGetModel() {
    this.add('deeplens:BatchGetModel');
    return this;
  }

  /**
   * Retrieves a list of AWS DeepLens Projects.
   *
   * Access Level: Read
   */
  public batchGetProject() {
    this.add('deeplens:BatchGetProject');
    return this;
  }

  /**
   * Creates a certificate package that is used to successfully authenticate and Register an AWS DeepLens device.
   *
   * Access Level: Write
   */
  public createDeviceCertificates() {
    this.add('deeplens:CreateDeviceCertificates');
    return this;
  }

  /**
   * Creates a new AWS DeepLens Model.
   *
   * Access Level: Write
   */
  public createModel() {
    this.add('deeplens:CreateModel');
    return this;
  }

  /**
   * Creates a new AWS DeepLens Project.
   *
   * Access Level: Write
   */
  public createProject() {
    this.add('deeplens:CreateProject');
    return this;
  }

  /**
   * Deletes an AWS DeepLens Model.
   *
   * Access Level: Write
   */
  public deleteModel() {
    this.add('deeplens:DeleteModel');
    return this;
  }

  /**
   * Deletes an AWS DeepLens Project.
   *
   * Access Level: Write
   */
  public deleteProject() {
    this.add('deeplens:DeleteProject');
    return this;
  }

  /**
   * Deploys an AWS DeepLens project to a registered AWS DeepLens device.
   *
   * Access Level: Write
   */
  public deployProject() {
    this.add('deeplens:DeployProject');
    return this;
  }

  /**
   * Begins a device de-registration workflow for a registered AWS DeepLens device.
   *
   * Access Level: Write
   */
  public deregisterDevice() {
    this.add('deeplens:DeregisterDevice');
    return this;
  }

  /**
   * Retrieves the account level resources associated with the user's account.
   *
   * Access Level: Read
   */
  public getAssociatedResources() {
    this.add('deeplens:GetAssociatedResources');
    return this;
  }

  /**
   * Retrieves the the deployment status of a particular AWS DeepLens device, along with any associated metadata.
   *
   * Access Level: Read
   */
  public getDeploymentStatus() {
    this.add('deeplens:GetDeploymentStatus');
    return this;
  }

  /**
   * Retrieves information about an AWS DeepLens device.
   *
   * Access Level: Read
   */
  public getDevice() {
    this.add('deeplens:GetDevice');
    return this;
  }

  /**
   * Retrieves an AWS DeepLens Model.
   *
   * Access Level: Read
   */
  public getModel() {
    this.add('deeplens:GetModel');
    return this;
  }

  /**
   * Retrieves an AWS DeepLens Project.
   *
   * Access Level: Read
   */
  public getProject() {
    this.add('deeplens:GetProject');
    return this;
  }

  /**
   * Creates a new AWS DeepLens project from a sample project template.
   *
   * Access Level: Write
   */
  public importProjectFromTemplate() {
    this.add('deeplens:ImportProjectFromTemplate');
    return this;
  }

  /**
   * Retrieves a list of AWS DeepLens Deployment identifiers.
   *
   * Access Level: List
   */
  public listDeployments() {
    this.add('deeplens:ListDeployments');
    return this;
  }

  /**
   * Retrieves a list of AWS DeepLens device identifiers.
   *
   * Access Level: List
   */
  public listDevices() {
    this.add('deeplens:ListDevices');
    return this;
  }

  /**
   * Retrieves a list of AWS DeepLens Model identifiers.
   *
   * Access Level: List
   */
  public listModels() {
    this.add('deeplens:ListModels');
    return this;
  }

  /**
   * Retrieves a list of AWS DeepLens Project identifiers.
   *
   * Access Level: List
   */
  public listProjects() {
    this.add('deeplens:ListProjects');
    return this;
  }

  /**
   * Begins a device registration workflow for an AWS DeepLens device.
   *
   * Access Level: Write
   */
  public registerDevice() {
    this.add('deeplens:RegisterDevice');
    return this;
  }

  /**
   * Removes a deployed AWS DeepLens project from an AWS DeepLens device.
   *
   * Access Level: Write
   */
  public removeProject() {
    this.add('deeplens:RemoveProject');
    return this;
  }

  /**
   * Updates an existing AWS DeepLens Project.
   *
   * Access Level: Write
   */
  public updateProject() {
    this.add('deeplens:UpdateProject');
    return this;
  }

  /**
   * Adds a resource of type device to the statement
   *
   * @param deviceName - Identifier for the deviceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDevice(deviceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deeplens:${Region}:${Account}:device/${DeviceName}';
    arn = arn.replace('${DeviceName}', deviceName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deeplens:${Region}:${Account}:project/${ProjectName}';
    arn = arn.replace('${ProjectName}', projectName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type model to the statement
   *
   * @param modelName - Identifier for the modelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onModel(modelName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deeplens:${Region}:${Account}:model/${ModelName}';
    arn = arn.replace('${ModelName}', modelName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
