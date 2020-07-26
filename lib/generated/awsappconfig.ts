import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [appconfig](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappconfig.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Appconfig extends PolicyStatement {
  public servicePrefix = 'appconfig';
  protected actionList: Actions = {
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
    "CreateHostedConfigurationVersion": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateHostedConfigurationVersion.html",
      "description": "Grants permission to create a hosted configuration version",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "configurationprofile": {
          "required": true
        },
        "hostedconfigurationversion": {
          "required": true
        }
      }
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
    "DeleteHostedConfigurationVersion": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteHostedConfigurationVersion.html",
      "description": "Grants permission to delete a hosted configuration version",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "configurationprofile": {
          "required": true
        },
        "hostedconfigurationversion": {
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
    "GetHostedConfigurationVersion": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetHostedConfigurationVersion.html",
      "description": "Grants permission to view details about a hosted configuration version",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "configurationprofile": {
          "required": true
        },
        "hostedconfigurationversion": {
          "required": true
        }
      }
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
    "ListHostedConfigurationVersions": {
      "url": "https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListHostedConfigurationVersions.html",
      "description": "Grants permission to list the hosted configuration versions for a configuration profile",
      "accessLevel": "List",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "configurationprofile": {
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
  protected resourceTypes: ResourceTypes = {
    "application": {
      "name": "application",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-application.html",
      "arn": "arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "environment": {
      "name": "environment",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-environment.html",
      "arn": "arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}/environment/${EnvironmentId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "configurationprofile": {
      "name": "configurationprofile",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-configuration-and-profile.html",
      "arn": "arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}/configurationprofile/${ConfigurationProfileId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "deploymentstrategy": {
      "name": "deploymentstrategy",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-deployment-strategy.html",
      "arn": "arn:${Partition}:appconfig:${Region}:${Account}:deploymentstrategy/${DeploymentStrategyId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "deployment": {
      "name": "deployment",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-deploying.html",
      "arn": "arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}/environment/${EnvironmentId}/deployment/${DeploymentNumber}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "hostedconfigurationversion": {
      "name": "hostedconfigurationversion",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-configuration-and-profile.html",
      "arn": "arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}/configurationprofile/${ConfigurationProfileId}/hostedconfigurationversion/${VersionNumber}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [appconfig](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappconfig.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an application
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateApplication.html
   */
  public createApplication() {
    this.add('appconfig:CreateApplication');
    return this;
  }

  /**
   * Grants permission to create a configuration profile
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateConfigurationProfile.html
   */
  public createConfigurationProfile() {
    this.add('appconfig:CreateConfigurationProfile');
    return this;
  }

  /**
   * Grants permission to create a deployment strategy
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateDeploymentStrategy.html
   */
  public createDeploymentStrategy() {
    this.add('appconfig:CreateDeploymentStrategy');
    return this;
  }

  /**
   * Grants permission to create an environment
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateEnvironment.html
   */
  public createEnvironment() {
    this.add('appconfig:CreateEnvironment');
    return this;
  }

  /**
   * Grants permission to create a hosted configuration version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateHostedConfigurationVersion.html
   */
  public createHostedConfigurationVersion() {
    this.add('appconfig:CreateHostedConfigurationVersion');
    return this;
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteApplication.html
   */
  public deleteApplication() {
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
  public deleteConfigurationProfile() {
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
  public deleteDeploymentStrategy() {
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
  public deleteEnvironment() {
    this.add('appconfig:DeleteEnvironment');
    return this;
  }

  /**
   * Grants permission to delete a hosted configuration version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteHostedConfigurationVersion.html
   */
  public deleteHostedConfigurationVersion() {
    this.add('appconfig:DeleteHostedConfigurationVersion');
    return this;
  }

  /**
   * Grants permission to view details about an application
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetApplication.html
   */
  public getApplication() {
    this.add('appconfig:GetApplication');
    return this;
  }

  /**
   * Grants permission to view details about a configuration
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetConfiguration.html
   */
  public getConfiguration() {
    this.add('appconfig:GetConfiguration');
    return this;
  }

  /**
   * Grants permission to view details about a configuration profile
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetConfigurationProfile.html
   */
  public getConfigurationProfile() {
    this.add('appconfig:GetConfigurationProfile');
    return this;
  }

  /**
   * Grants permission to view details about a deployment
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetDeployment.html
   */
  public getDeployment() {
    this.add('appconfig:GetDeployment');
    return this;
  }

  /**
   * Grants permission to view details about a deployment strategy
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetDeploymentStrategy.html
   */
  public getDeploymentStrategy() {
    this.add('appconfig:GetDeploymentStrategy');
    return this;
  }

  /**
   * Grants permission to view details about an environment
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetEnvironment.html
   */
  public getEnvironment() {
    this.add('appconfig:GetEnvironment');
    return this;
  }

  /**
   * Grants permission to view details about a hosted configuration version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetHostedConfigurationVersion.html
   */
  public getHostedConfigurationVersion() {
    this.add('appconfig:GetHostedConfigurationVersion');
    return this;
  }

  /**
   * Grants permission to list the applications in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListApplications.html
   */
  public listApplications() {
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
  public listConfigurationProfiles() {
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
  public listDeploymentStrategies() {
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
  public listDeployments() {
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
  public listEnvironments() {
    this.add('appconfig:ListEnvironments');
    return this;
  }

  /**
   * Grants permission to list the hosted configuration versions for a configuration profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListHostedConfigurationVersions.html
   */
  public listHostedConfigurationVersions() {
    this.add('appconfig:ListHostedConfigurationVersions');
    return this;
  }

  /**
   * Grants permission to view a list of resource tags for a specified resource
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
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
  public startDeployment() {
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
  public stopDeployment() {
    this.add('appconfig:StopDeployment');
    return this;
  }

  /**
   * Grants permission to tag an appconfig resource.
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:TagKeys
   * - aws:RequestTag/${TagKey}
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('appconfig:TagResource');
    return this;
  }

  /**
   * Grants permission to untag an appconfig resource.
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('appconfig:UntagResource');
    return this;
  }

  /**
   * Grants permission to modify an application
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateApplication.html
   */
  public updateApplication() {
    this.add('appconfig:UpdateApplication');
    return this;
  }

  /**
   * Grants permission to modify a configuration profile
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateConfigurationProfile.html
   */
  public updateConfigurationProfile() {
    this.add('appconfig:UpdateConfigurationProfile');
    return this;
  }

  /**
   * Grants permission to modify a deployment strategy
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateDeploymentStrategy.html
   */
  public updateDeploymentStrategy() {
    this.add('appconfig:UpdateDeploymentStrategy');
    return this;
  }

  /**
   * Grants permission to modify an environment
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateEnvironment.html
   */
  public updateEnvironment() {
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
  public validateConfiguration() {
    this.add('appconfig:ValidateConfiguration');
    return this;
  }

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-application.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}';
    arn = arn.replace('${ApplicationId}', applicationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-environment.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param environmentId - Identifier for the environmentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onEnvironment(applicationId: string, environmentId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}/environment/${EnvironmentId}';
    arn = arn.replace('${ApplicationId}', applicationId);
    arn = arn.replace('${EnvironmentId}', environmentId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type configurationprofile to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-configuration-and-profile.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param configurationProfileId - Identifier for the configurationProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onConfigurationprofile(applicationId: string, configurationProfileId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}/configurationprofile/${ConfigurationProfileId}';
    arn = arn.replace('${ApplicationId}', applicationId);
    arn = arn.replace('${ConfigurationProfileId}', configurationProfileId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deploymentstrategy to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-deployment-strategy.html
   *
   * @param deploymentStrategyId - Identifier for the deploymentStrategyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onDeploymentstrategy(deploymentStrategyId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appconfig:${Region}:${Account}:deploymentstrategy/${DeploymentStrategyId}';
    arn = arn.replace('${DeploymentStrategyId}', deploymentStrategyId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deployment to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-deploying.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param environmentId - Identifier for the environmentId.
   * @param deploymentNumber - Identifier for the deploymentNumber.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onDeployment(applicationId: string, environmentId: string, deploymentNumber: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}/environment/${EnvironmentId}/deployment/${DeploymentNumber}';
    arn = arn.replace('${ApplicationId}', applicationId);
    arn = arn.replace('${EnvironmentId}', environmentId);
    arn = arn.replace('${DeploymentNumber}', deploymentNumber);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type hostedconfigurationversion to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-configuration-and-profile.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param configurationProfileId - Identifier for the configurationProfileId.
   * @param versionNumber - Identifier for the versionNumber.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHostedconfigurationversion(applicationId: string, configurationProfileId: string, versionNumber: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appconfig:${Region}:${Account}:application/${ApplicationId}/configurationprofile/${ConfigurationProfileId}/hostedconfigurationversion/${VersionNumber}';
    arn = arn.replace('${ApplicationId}', applicationId);
    arn = arn.replace('${ConfigurationProfileId}', configurationProfileId);
    arn = arn.replace('${VersionNumber}', versionNumber);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
