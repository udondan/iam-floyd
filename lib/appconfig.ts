import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service appconfig
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappconfig.html
 */
export class Appconfig extends PolicyStatement {
  public servicePrefix = 'appconfig';
  public actions : Actions = {
    "CreateApplication": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateApplication.html",
      "description": "Grants permission to create an application",
      "accessLevel": "Write",
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
    "CreateConfigurationProfile": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateConfigurationProfile.html",
      "description": "Grants permission to create a configuration profile",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "configurationprofile": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDeploymentStrategy": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateDeploymentStrategy.html",
      "description": "Grants permission to create a deployment strategy",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentstrategy": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateEnvironment": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateEnvironment.html",
      "description": "Grants permission to create an environment",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "environment": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteApplication": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteApplication.html",
      "description": "Grants permission to delete an application",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DeleteConfigurationProfile": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteConfigurationProfile.html",
      "description": "Grants permission to delete a configuration profile",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "configurationprofile": {
          "required": true
        }
      }
    },
    "DeleteDeploymentStrategy": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteDeploymentStrategy.html",
      "description": "Grants permission to delete a deployment strategy",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentstrategy": {
          "required": true
        }
      }
    },
    "DeleteEnvironment": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteEnvironment.html",
      "description": "Grants permission to delete an environment",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "environment": {
          "required": true
        }
      }
    },
    "GetApplication": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetApplication.html",
      "description": "Grants permission to view details about an application",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetConfiguration": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetConfiguration.html",
      "description": "Grants permission to view details about a configuration",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "configurationprofile": {
          "required": true
        },
        "environment": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetConfigurationProfile": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetConfigurationProfile.html",
      "description": "Grants permission to view details about a configuration profile",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "configurationprofile": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetDeployment": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetDeployment.html",
      "description": "Grants permission to view details about a deployment",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "deployment": {
          "required": true
        },
        "environment": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetDeploymentStrategy": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetDeploymentStrategy.html",
      "description": "Grants permission to view details about a deployment strategy",
      "accessLevel": "Read",
      "resourceTypes": {
        "deploymentstrategy": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetEnvironment": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetEnvironment.html",
      "description": "Grants permission to view details about an environment",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "environment": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ListApplications": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListApplications.html",
      "description": "Grants permission to list the applications in your account",
      "accessLevel": "List"
    },
    "ListConfigurationProfiles": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListConfigurationProfiles.html",
      "description": "Grants permission to list the configuration profiles for an application",
      "accessLevel": "List",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "ListDeploymentStrategies": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListDeploymentStrategies.html",
      "description": "Grants permission to list the deployment strategies for your account",
      "accessLevel": "List"
    },
    "ListDeployments": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListDeployments.html",
      "description": "Grants permission to list the deployments for an environment",
      "accessLevel": "List",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "environment": {
          "required": true
        }
      }
    },
    "ListEnvironments": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListEnvironments.html",
      "description": "Grants permission to list the environments for an application",
      "accessLevel": "List",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to view a list of resource tags for a specified resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": false
        },
        "configurationprofile": {
          "required": false
        },
        "deployment": {
          "required": false
        },
        "deploymentstrategy": {
          "required": false
        },
        "environment": {
          "required": false
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "StartDeployment": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StartDeployment.html",
      "description": "Grants permission to initiate a deployment",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "configurationprofile": {
          "required": true
        },
        "deployment": {
          "required": true
        },
        "deploymentstrategy": {
          "required": true
        },
        "environment": {
          "required": true
        }
      }
    },
    "StopDeployment": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StopDeployment.html",
      "description": "Grants permission to stop a deployment",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "deployment": {
          "required": true
        },
        "environment": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_TagResource.html",
      "description": "Grants permission to tag an appconfig resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "application": {
          "required": false
        },
        "configurationprofile": {
          "required": false
        },
        "deployment": {
          "required": false
        },
        "deploymentstrategy": {
          "required": false
        },
        "environment": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UntagResource.html",
      "description": "Grants permission to untag an appconfig resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "application": {
          "required": false
        },
        "configurationprofile": {
          "required": false
        },
        "deployment": {
          "required": false
        },
        "deploymentstrategy": {
          "required": false
        },
        "environment": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateApplication": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateApplication.html",
      "description": "Grants permission to modify an application",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateConfigurationProfile": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateConfigurationProfile.html",
      "description": "Grants permission to modify a configuration profile",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "configurationprofile": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateDeploymentStrategy": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateDeploymentStrategy.html",
      "description": "Grants permission to modify a deployment strategy",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentstrategy": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateEnvironment": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateEnvironment.html",
      "description": "Grants permission to modify an environment",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "environment": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ValidateConfiguration": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ValidateConfiguration.html",
      "description": "Grants permission to validate a configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "configurationprofile": {
          "required": true
        }
      }
    }
  };

  /**
   * Grants permission to create an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateApplication.html
   */
  public createApplication () {
    this.add('appconfig:CreateApplication');
    return this;
  }

  /**
   * Grants permission to create a configuration profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateConfigurationProfile.html
   */
  public createConfigurationProfile () {
    this.add('appconfig:CreateConfigurationProfile');
    return this;
  }

  /**
   * Grants permission to create a deployment strategy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateDeploymentStrategy.html
   */
  public createDeploymentStrategy () {
    this.add('appconfig:CreateDeploymentStrategy');
    return this;
  }

  /**
   * Grants permission to create an environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateEnvironment.html
   */
  public createEnvironment () {
    this.add('appconfig:CreateEnvironment');
    return this;
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteApplication.html
   */
  public deleteApplication () {
    this.add('appconfig:DeleteApplication');
    return this;
  }

  /**
   * Grants permission to delete a configuration profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteConfigurationProfile.html
   */
  public deleteConfigurationProfile () {
    this.add('appconfig:DeleteConfigurationProfile');
    return this;
  }

  /**
   * Grants permission to delete a deployment strategy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteDeploymentStrategy.html
   */
  public deleteDeploymentStrategy () {
    this.add('appconfig:DeleteDeploymentStrategy');
    return this;
  }

  /**
   * Grants permission to delete an environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteEnvironment.html
   */
  public deleteEnvironment () {
    this.add('appconfig:DeleteEnvironment');
    return this;
  }

  /**
   * Grants permission to view details about an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetApplication.html
   */
  public getApplication () {
    this.add('appconfig:GetApplication');
    return this;
  }

  /**
   * Grants permission to view details about a configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetConfiguration.html
   */
  public getConfiguration () {
    this.add('appconfig:GetConfiguration');
    return this;
  }

  /**
   * Grants permission to view details about a configuration profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetConfigurationProfile.html
   */
  public getConfigurationProfile () {
    this.add('appconfig:GetConfigurationProfile');
    return this;
  }

  /**
   * Grants permission to view details about a deployment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetDeployment.html
   */
  public getDeployment () {
    this.add('appconfig:GetDeployment');
    return this;
  }

  /**
   * Grants permission to view details about a deployment strategy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetDeploymentStrategy.html
   */
  public getDeploymentStrategy () {
    this.add('appconfig:GetDeploymentStrategy');
    return this;
  }

  /**
   * Grants permission to view details about an environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetEnvironment.html
   */
  public getEnvironment () {
    this.add('appconfig:GetEnvironment');
    return this;
  }

  /**
   * Grants permission to list the applications in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListApplications.html
   */
  public listApplications () {
    this.add('appconfig:ListApplications');
    return this;
  }

  /**
   * Grants permission to list the configuration profiles for an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListConfigurationProfiles.html
   */
  public listConfigurationProfiles () {
    this.add('appconfig:ListConfigurationProfiles');
    return this;
  }

  /**
   * Grants permission to list the deployment strategies for your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListDeploymentStrategies.html
   */
  public listDeploymentStrategies () {
    this.add('appconfig:ListDeploymentStrategies');
    return this;
  }

  /**
   * Grants permission to list the deployments for an environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListDeployments.html
   */
  public listDeployments () {
    this.add('appconfig:ListDeployments');
    return this;
  }

  /**
   * Grants permission to list the environments for an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListEnvironments.html
   */
  public listEnvironments () {
    this.add('appconfig:ListEnvironments');
    return this;
  }

  /**
   * Grants permission to view a list of resource tags for a specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource () {
    this.add('appconfig:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to initiate a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StartDeployment.html
   */
  public startDeployment () {
    this.add('appconfig:StartDeployment');
    return this;
  }

  /**
   * Grants permission to stop a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StopDeployment.html
   */
  public stopDeployment () {
    this.add('appconfig:StopDeployment');
    return this;
  }

  /**
   * Grants permission to tag an appconfig resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_TagResource.html
   */
  public tagResource () {
    this.add('appconfig:TagResource');
    return this;
  }

  /**
   * Grants permission to untag an appconfig resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UntagResource.html
   */
  public untagResource () {
    this.add('appconfig:UntagResource');
    return this;
  }

  /**
   * Grants permission to modify an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateApplication.html
   */
  public updateApplication () {
    this.add('appconfig:UpdateApplication');
    return this;
  }

  /**
   * Grants permission to modify a configuration profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateConfigurationProfile.html
   */
  public updateConfigurationProfile () {
    this.add('appconfig:UpdateConfigurationProfile');
    return this;
  }

  /**
   * Grants permission to modify a deployment strategy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateDeploymentStrategy.html
   */
  public updateDeploymentStrategy () {
    this.add('appconfig:UpdateDeploymentStrategy');
    return this;
  }

  /**
   * Grants permission to modify an environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateEnvironment.html
   */
  public updateEnvironment () {
    this.add('appconfig:UpdateEnvironment');
    return this;
  }

  /**
   * Grants permission to validate a configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ValidateConfiguration.html
   */
  public validateConfiguration () {
    this.add('appconfig:ValidateConfiguration');
    return this;
  }
}
