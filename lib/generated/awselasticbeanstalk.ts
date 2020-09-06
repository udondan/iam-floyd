import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [elasticbeanstalk](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselasticbeanstalk.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Elasticbeanstalk extends PolicyStatement {
  public servicePrefix = 'elasticbeanstalk';
  protected actionList: Actions = {
    "AbortEnvironmentUpdate": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_AbortEnvironmentUpdate.html",
      "description": "Grants permission to cancel in-progress environment configuration update or application version deployment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "AddTags": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateTagsForResource.html",
      "description": "Grants permission to add tags to an Elastic Beanstalk resource and to update tag values.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "application": {
          "required": false
        },
        "applicationversion": {
          "required": false
        },
        "configurationtemplate": {
          "required": false
        },
        "environment": {
          "required": false
        },
        "platform": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "ApplyEnvironmentManagedAction": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ApplyEnvironmentManagedAction.html",
      "description": "Grants permission to apply a scheduled managed action immediately.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "AssociateEnvironmentOperationsRole": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_AssociateEnvironmentOperationsRole.html",
      "description": "Grants permission to associate an operations role with an environment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true
        }
      }
    },
    "CheckDNSAvailability": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CheckDNSAvailability.html",
      "description": "Grants permission to check CNAME availability.",
      "accessLevel": "Read"
    },
    "ComposeEnvironments": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ComposeEnvironments.html",
      "description": "Grants permission to create or update a group of environments, each running a separate component of a single application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "applicationversion": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "CreateApplication": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateApplication.html",
      "description": "Grants permission to create a new application.",
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
    "CreateApplicationVersion": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateApplicationVersion.html",
      "description": "Grants permission to create an application version for an application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        },
        "applicationversion": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateConfigurationTemplate": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateConfigurationTemplate.html",
      "description": "Grants permission to create a configuration template.",
      "accessLevel": "Write",
      "resourceTypes": {
        "configurationtemplate": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      },
      "conditions": [
        "elasticbeanstalk:FromApplication",
        "elasticbeanstalk:FromApplicationVersion",
        "elasticbeanstalk:FromConfigurationTemplate",
        "elasticbeanstalk:FromEnvironment",
        "elasticbeanstalk:FromSolutionStack",
        "elasticbeanstalk:FromPlatform",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateEnvironment": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateEnvironment.html",
      "description": "Grants permission to launch an environment for an application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      },
      "conditions": [
        "elasticbeanstalk:FromApplicationVersion",
        "elasticbeanstalk:FromConfigurationTemplate",
        "elasticbeanstalk:FromSolutionStack",
        "elasticbeanstalk:FromPlatform",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreatePlatformVersion": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreatePlatformVersion.html",
      "description": "Grants permission to create a new version of a custom platform.",
      "accessLevel": "Write",
      "resourceTypes": {
        "platform": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateStorageLocation": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateStorageLocation.html",
      "description": "Grants permission to create the Amazon S3 storage location for the account.",
      "accessLevel": "Write"
    },
    "DeleteApplication": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteApplication.html",
      "description": "Grants permission to delete an application along with all associated versions and configurations.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DeleteApplicationVersion": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteApplicationVersion.html",
      "description": "Grants permission to delete an application version from an application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "applicationversion": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "DeleteConfigurationTemplate": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteConfigurationTemplate.html",
      "description": "Grants permission to delete a configuration template.",
      "accessLevel": "Write",
      "resourceTypes": {
        "configurationtemplate": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "DeleteEnvironmentConfiguration": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteEnvironmentConfiguration.html",
      "description": "Grants permission to delete the draft configuration associated with the running environment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "DeletePlatformVersion": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeletePlatformVersion.html",
      "description": "Grants permission to delete a version of a custom platform.",
      "accessLevel": "Write",
      "resourceTypes": {
        "platform": {
          "required": true
        }
      }
    },
    "DescribeAccountAttributes": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeAccountAttributes.html",
      "description": "Grants permission to retrieve a list of account attributes, including resource quotas.",
      "accessLevel": "Read"
    },
    "DescribeApplicationVersions": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeApplicationVersions.html",
      "description": "Grants permission to retrieve a list of application versions stored in an AWS Elastic Beanstalk storage bucket.",
      "accessLevel": "List",
      "resourceTypes": {
        "applicationversion": {
          "required": false,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "DescribeApplications": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeApplications.html",
      "description": "Grants permission to retrieve the descriptions of existing applications.",
      "accessLevel": "List",
      "resourceTypes": {
        "application": {
          "required": false
        }
      }
    },
    "DescribeConfigurationOptions": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeConfigurationOptions.html",
      "description": "Grants permission to retrieve descriptions of environment configuration options.",
      "accessLevel": "Read",
      "resourceTypes": {
        "configurationtemplate": {
          "required": false,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        },
        "environment": {
          "required": false,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        },
        "solutionstack": {
          "required": false
        }
      }
    },
    "DescribeConfigurationSettings": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeConfigurationSettings.html",
      "description": "Grants permission to retrieve a description of the settings for a configuration set.",
      "accessLevel": "Read",
      "resourceTypes": {
        "configurationtemplate": {
          "required": false,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        },
        "environment": {
          "required": false,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "DescribeEnvironmentHealth": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentHealth.html",
      "description": "Grants permission to retrieve information about the overall health of an environment.",
      "accessLevel": "Read",
      "resourceTypes": {
        "environment": {
          "required": false
        }
      }
    },
    "DescribeEnvironmentManagedActionHistory": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentManagedActionHistory.html",
      "description": "Grants permission to retrieve a list of an environment's completed and failed managed actions.",
      "accessLevel": "Read",
      "resourceTypes": {
        "environment": {
          "required": false,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "DescribeEnvironmentManagedActions": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentManagedActions.html",
      "description": "Grants permission to retrieve a list of an environment's upcoming and in-progress managed actions.",
      "accessLevel": "Read",
      "resourceTypes": {
        "environment": {
          "required": false,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "DescribeEnvironmentResources": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentResources.html",
      "description": "Grants permission to retrieve a list of AWS resources for an environment.",
      "accessLevel": "Read",
      "resourceTypes": {
        "environment": {
          "required": false,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "DescribeEnvironments": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironments.html",
      "description": "Grants permission to retrieve descriptions for existing environments.",
      "accessLevel": "List",
      "resourceTypes": {
        "environment": {
          "required": false,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "DescribeEvents": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEvents.html",
      "description": "Grants permission to retrieve a list of event descriptions matching a set of criteria.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": false
        },
        "applicationversion": {
          "required": false,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        },
        "configurationtemplate": {
          "required": false,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        },
        "environment": {
          "required": false,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "DescribeInstancesHealth": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeInstancesHealth.html",
      "description": "Grants permission to retrieve more detailed information about the health of environment instances.",
      "accessLevel": "Read",
      "resourceTypes": {
        "environment": {
          "required": false
        }
      }
    },
    "DescribePlatformVersion": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribePlatformVersion.html",
      "description": "Grants permission to retrieve a description of a platform version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "platform": {
          "required": false
        }
      }
    },
    "DisassociateEnvironmentOperationsRole": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DisassociateEnvironmentOperationsRole.html",
      "description": "Grants permission to disassociate an operations role with an environment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true
        }
      }
    },
    "ListAvailableSolutionStacks": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListAvailableSolutionStacks.html",
      "description": "Grants permission to retrieve a list of the available solution stack names.",
      "accessLevel": "List",
      "resourceTypes": {
        "solutionstack": {
          "required": false
        }
      }
    },
    "ListPlatformBranches": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListPlatformBranches.html",
      "description": "Grants permission to retrieve a list of the available platform branches.",
      "accessLevel": "List"
    },
    "ListPlatformVersions": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListPlatformVersions.html",
      "description": "Grants permission to retrieve a list of the available platforms.",
      "accessLevel": "List",
      "resourceTypes": {
        "platform": {
          "required": false
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListTagsForResource.html",
      "description": "Grants permission to retrieve a list of tags of an Elastic Beanstalk resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": false
        },
        "applicationversion": {
          "required": false
        },
        "configurationtemplate": {
          "required": false
        },
        "environment": {
          "required": false
        },
        "platform": {
          "required": false
        }
      }
    },
    "RebuildEnvironment": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RebuildEnvironment.html",
      "description": "Grants permission to delete and recreate all of the AWS resources for an environment and to force a restart.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "RemoveTags": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateTagsForResource.html",
      "description": "Grants permission to remove tags from an Elastic Beanstalk resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "application": {
          "required": false
        },
        "applicationversion": {
          "required": false
        },
        "configurationtemplate": {
          "required": false
        },
        "environment": {
          "required": false
        },
        "platform": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "RequestEnvironmentInfo": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RequestEnvironmentInfo.html",
      "description": "Grants permission to initiate a request to compile information of the deployed environment.",
      "accessLevel": "Read",
      "resourceTypes": {
        "environment": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "RestartAppServer": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RestartAppServer.html",
      "description": "Grants permission to request an environment to restart the application container server running on each Amazon EC2 instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "RetrieveEnvironmentInfo": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RetrieveEnvironmentInfo.html",
      "description": "Grants permission to retrieve the compiled information from a RequestEnvironmentInfo request.",
      "accessLevel": "Read",
      "resourceTypes": {
        "environment": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "SwapEnvironmentCNAMEs": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_SwapEnvironmentCNAMEs.html",
      "description": "Grants permission to swap the CNAMEs of two environments.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      },
      "conditions": [
        "elasticbeanstalk:FromEnvironment"
      ]
    },
    "TerminateEnvironment": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_TerminateEnvironment.html",
      "description": "Grants permission to terminate an environment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "UpdateApplication": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplication.html",
      "description": "Grants permission to update an application with specified properties.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "UpdateApplicationResourceLifecycle": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplicationResourceLifecycle.html",
      "description": "Grants permission to update the application version lifecycle policy associated with the application.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "UpdateApplicationVersion": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplicationVersion.html",
      "description": "Grants permission to update an application version with specified properties.",
      "accessLevel": "Write",
      "resourceTypes": {
        "applicationversion": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    },
    "UpdateConfigurationTemplate": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateConfigurationTemplate.html",
      "description": "Grants permission to update a configuration template with specified properties or configuration option values.",
      "accessLevel": "Write",
      "resourceTypes": {
        "configurationtemplate": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      },
      "conditions": [
        "elasticbeanstalk:FromApplication",
        "elasticbeanstalk:FromApplicationVersion",
        "elasticbeanstalk:FromConfigurationTemplate",
        "elasticbeanstalk:FromEnvironment",
        "elasticbeanstalk:FromSolutionStack",
        "elasticbeanstalk:FromPlatform"
      ]
    },
    "UpdateEnvironment": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateEnvironment.html",
      "description": "Grants permission to update an environment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      },
      "conditions": [
        "elasticbeanstalk:FromApplicationVersion",
        "elasticbeanstalk:FromConfigurationTemplate",
        "elasticbeanstalk:FromSolutionStack",
        "elasticbeanstalk:FromPlatform"
      ]
    },
    "ValidateConfigurationSettings": {
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ValidateConfigurationSettings.html",
      "description": "Grants permission to check the validity of a set of configuration settings for a configuration template or an environment.",
      "accessLevel": "Read",
      "resourceTypes": {
        "configurationtemplate": {
          "required": false,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        },
        "environment": {
          "required": false,
          "conditions": [
            "elasticbeanstalk:InApplication"
          ]
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "application": {
      "name": "application",
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html",
      "arn": "arn:${Partition}:elasticbeanstalk:${Region}:${Account}:application/${ApplicationName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "applicationversion": {
      "name": "applicationversion",
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html",
      "arn": "arn:${Partition}:elasticbeanstalk:${Region}:${Account}:applicationversion/${ApplicationName}/${VersionLabel}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "elasticbeanstalk:InApplication"
      ]
    },
    "configurationtemplate": {
      "name": "configurationtemplate",
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html",
      "arn": "arn:${Partition}:elasticbeanstalk:${Region}:${Account}:configurationtemplate/${ApplicationName}/${TemplateName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "elasticbeanstalk:InApplication"
      ]
    },
    "environment": {
      "name": "environment",
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html",
      "arn": "arn:${Partition}:elasticbeanstalk:${Region}:${Account}:environment/${ApplicationName}/${EnvironmentName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "elasticbeanstalk:InApplication"
      ]
    },
    "solutionstack": {
      "name": "solutionstack",
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html",
      "arn": "arn:${Partition}:elasticbeanstalk:${Region}::solutionstack/${SolutionStackName}",
      "conditionKeys": []
    },
    "platform": {
      "name": "platform",
      "url": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html",
      "arn": "arn:${Partition}:elasticbeanstalk:${Region}::platform/${PlatformNameWithVersion}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [elasticbeanstalk](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselasticbeanstalk.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel in-progress environment configuration update or application version deployment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_AbortEnvironmentUpdate.html
   */
  public toAbortEnvironmentUpdate() {
    this.add('elasticbeanstalk:AbortEnvironmentUpdate');
    return this;
  }

  /**
   * Grants permission to add tags to an Elastic Beanstalk resource and to update tag values.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateTagsForResource.html
   */
  public toAddTags() {
    this.add('elasticbeanstalk:AddTags');
    return this;
  }

  /**
   * Grants permission to apply a scheduled managed action immediately.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ApplyEnvironmentManagedAction.html
   */
  public toApplyEnvironmentManagedAction() {
    this.add('elasticbeanstalk:ApplyEnvironmentManagedAction');
    return this;
  }

  /**
   * Grants permission to associate an operations role with an environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_AssociateEnvironmentOperationsRole.html
   */
  public toAssociateEnvironmentOperationsRole() {
    this.add('elasticbeanstalk:AssociateEnvironmentOperationsRole');
    return this;
  }

  /**
   * Grants permission to check CNAME availability.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CheckDNSAvailability.html
   */
  public toCheckDNSAvailability() {
    this.add('elasticbeanstalk:CheckDNSAvailability');
    return this;
  }

  /**
   * Grants permission to create or update a group of environments, each running a separate component of a single application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ComposeEnvironments.html
   */
  public toComposeEnvironments() {
    this.add('elasticbeanstalk:ComposeEnvironments');
    return this;
  }

  /**
   * Grants permission to create a new application.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateApplication.html
   */
  public toCreateApplication() {
    this.add('elasticbeanstalk:CreateApplication');
    return this;
  }

  /**
   * Grants permission to create an application version for an application.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateApplicationVersion.html
   */
  public toCreateApplicationVersion() {
    this.add('elasticbeanstalk:CreateApplicationVersion');
    return this;
  }

  /**
   * Grants permission to create a configuration template.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFromApplication()
   * - .ifFromApplicationVersion()
   * - .ifFromConfigurationTemplate()
   * - .ifFromEnvironment()
   * - .ifFromSolutionStack()
   * - .ifFromPlatform()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateConfigurationTemplate.html
   */
  public toCreateConfigurationTemplate() {
    this.add('elasticbeanstalk:CreateConfigurationTemplate');
    return this;
  }

  /**
   * Grants permission to launch an environment for an application.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFromApplicationVersion()
   * - .ifFromConfigurationTemplate()
   * - .ifFromSolutionStack()
   * - .ifFromPlatform()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateEnvironment.html
   */
  public toCreateEnvironment() {
    this.add('elasticbeanstalk:CreateEnvironment');
    return this;
  }

  /**
   * Grants permission to create a new version of a custom platform.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreatePlatformVersion.html
   */
  public toCreatePlatformVersion() {
    this.add('elasticbeanstalk:CreatePlatformVersion');
    return this;
  }

  /**
   * Grants permission to create the Amazon S3 storage location for the account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateStorageLocation.html
   */
  public toCreateStorageLocation() {
    this.add('elasticbeanstalk:CreateStorageLocation');
    return this;
  }

  /**
   * Grants permission to delete an application along with all associated versions and configurations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    this.add('elasticbeanstalk:DeleteApplication');
    return this;
  }

  /**
   * Grants permission to delete an application version from an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteApplicationVersion.html
   */
  public toDeleteApplicationVersion() {
    this.add('elasticbeanstalk:DeleteApplicationVersion');
    return this;
  }

  /**
   * Grants permission to delete a configuration template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteConfigurationTemplate.html
   */
  public toDeleteConfigurationTemplate() {
    this.add('elasticbeanstalk:DeleteConfigurationTemplate');
    return this;
  }

  /**
   * Grants permission to delete the draft configuration associated with the running environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteEnvironmentConfiguration.html
   */
  public toDeleteEnvironmentConfiguration() {
    this.add('elasticbeanstalk:DeleteEnvironmentConfiguration');
    return this;
  }

  /**
   * Grants permission to delete a version of a custom platform.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeletePlatformVersion.html
   */
  public toDeletePlatformVersion() {
    this.add('elasticbeanstalk:DeletePlatformVersion');
    return this;
  }

  /**
   * Grants permission to retrieve a list of account attributes, including resource quotas.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    this.add('elasticbeanstalk:DescribeAccountAttributes');
    return this;
  }

  /**
   * Grants permission to retrieve a list of application versions stored in an AWS Elastic Beanstalk storage bucket.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeApplicationVersions.html
   */
  public toDescribeApplicationVersions() {
    this.add('elasticbeanstalk:DescribeApplicationVersions');
    return this;
  }

  /**
   * Grants permission to retrieve the descriptions of existing applications.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeApplications.html
   */
  public toDescribeApplications() {
    this.add('elasticbeanstalk:DescribeApplications');
    return this;
  }

  /**
   * Grants permission to retrieve descriptions of environment configuration options.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeConfigurationOptions.html
   */
  public toDescribeConfigurationOptions() {
    this.add('elasticbeanstalk:DescribeConfigurationOptions');
    return this;
  }

  /**
   * Grants permission to retrieve a description of the settings for a configuration set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeConfigurationSettings.html
   */
  public toDescribeConfigurationSettings() {
    this.add('elasticbeanstalk:DescribeConfigurationSettings');
    return this;
  }

  /**
   * Grants permission to retrieve information about the overall health of an environment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentHealth.html
   */
  public toDescribeEnvironmentHealth() {
    this.add('elasticbeanstalk:DescribeEnvironmentHealth');
    return this;
  }

  /**
   * Grants permission to retrieve a list of an environment's completed and failed managed actions.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentManagedActionHistory.html
   */
  public toDescribeEnvironmentManagedActionHistory() {
    this.add('elasticbeanstalk:DescribeEnvironmentManagedActionHistory');
    return this;
  }

  /**
   * Grants permission to retrieve a list of an environment's upcoming and in-progress managed actions.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentManagedActions.html
   */
  public toDescribeEnvironmentManagedActions() {
    this.add('elasticbeanstalk:DescribeEnvironmentManagedActions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of AWS resources for an environment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentResources.html
   */
  public toDescribeEnvironmentResources() {
    this.add('elasticbeanstalk:DescribeEnvironmentResources');
    return this;
  }

  /**
   * Grants permission to retrieve descriptions for existing environments.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironments.html
   */
  public toDescribeEnvironments() {
    this.add('elasticbeanstalk:DescribeEnvironments');
    return this;
  }

  /**
   * Grants permission to retrieve a list of event descriptions matching a set of criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    this.add('elasticbeanstalk:DescribeEvents');
    return this;
  }

  /**
   * Grants permission to retrieve more detailed information about the health of environment instances.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeInstancesHealth.html
   */
  public toDescribeInstancesHealth() {
    this.add('elasticbeanstalk:DescribeInstancesHealth');
    return this;
  }

  /**
   * Grants permission to retrieve a description of a platform version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribePlatformVersion.html
   */
  public toDescribePlatformVersion() {
    this.add('elasticbeanstalk:DescribePlatformVersion');
    return this;
  }

  /**
   * Grants permission to disassociate an operations role with an environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DisassociateEnvironmentOperationsRole.html
   */
  public toDisassociateEnvironmentOperationsRole() {
    this.add('elasticbeanstalk:DisassociateEnvironmentOperationsRole');
    return this;
  }

  /**
   * Grants permission to retrieve a list of the available solution stack names.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListAvailableSolutionStacks.html
   */
  public toListAvailableSolutionStacks() {
    this.add('elasticbeanstalk:ListAvailableSolutionStacks');
    return this;
  }

  /**
   * Grants permission to retrieve a list of the available platform branches.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListPlatformBranches.html
   */
  public toListPlatformBranches() {
    this.add('elasticbeanstalk:ListPlatformBranches');
    return this;
  }

  /**
   * Grants permission to retrieve a list of the available platforms.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListPlatformVersions.html
   */
  public toListPlatformVersions() {
    this.add('elasticbeanstalk:ListPlatformVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of tags of an Elastic Beanstalk resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('elasticbeanstalk:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to delete and recreate all of the AWS resources for an environment and to force a restart.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RebuildEnvironment.html
   */
  public toRebuildEnvironment() {
    this.add('elasticbeanstalk:RebuildEnvironment');
    return this;
  }

  /**
   * Grants permission to remove tags from an Elastic Beanstalk resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateTagsForResource.html
   */
  public toRemoveTags() {
    this.add('elasticbeanstalk:RemoveTags');
    return this;
  }

  /**
   * Grants permission to initiate a request to compile information of the deployed environment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RequestEnvironmentInfo.html
   */
  public toRequestEnvironmentInfo() {
    this.add('elasticbeanstalk:RequestEnvironmentInfo');
    return this;
  }

  /**
   * Grants permission to request an environment to restart the application container server running on each Amazon EC2 instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RestartAppServer.html
   */
  public toRestartAppServer() {
    this.add('elasticbeanstalk:RestartAppServer');
    return this;
  }

  /**
   * Grants permission to retrieve the compiled information from a RequestEnvironmentInfo request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RetrieveEnvironmentInfo.html
   */
  public toRetrieveEnvironmentInfo() {
    this.add('elasticbeanstalk:RetrieveEnvironmentInfo');
    return this;
  }

  /**
   * Grants permission to swap the CNAMEs of two environments.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFromEnvironment()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_SwapEnvironmentCNAMEs.html
   */
  public toSwapEnvironmentCNAMEs() {
    this.add('elasticbeanstalk:SwapEnvironmentCNAMEs');
    return this;
  }

  /**
   * Grants permission to terminate an environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_TerminateEnvironment.html
   */
  public toTerminateEnvironment() {
    this.add('elasticbeanstalk:TerminateEnvironment');
    return this;
  }

  /**
   * Grants permission to update an application with specified properties.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    this.add('elasticbeanstalk:UpdateApplication');
    return this;
  }

  /**
   * Grants permission to update the application version lifecycle policy associated with the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplicationResourceLifecycle.html
   */
  public toUpdateApplicationResourceLifecycle() {
    this.add('elasticbeanstalk:UpdateApplicationResourceLifecycle');
    return this;
  }

  /**
   * Grants permission to update an application version with specified properties.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplicationVersion.html
   */
  public toUpdateApplicationVersion() {
    this.add('elasticbeanstalk:UpdateApplicationVersion');
    return this;
  }

  /**
   * Grants permission to update a configuration template with specified properties or configuration option values.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFromApplication()
   * - .ifFromApplicationVersion()
   * - .ifFromConfigurationTemplate()
   * - .ifFromEnvironment()
   * - .ifFromSolutionStack()
   * - .ifFromPlatform()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateConfigurationTemplate.html
   */
  public toUpdateConfigurationTemplate() {
    this.add('elasticbeanstalk:UpdateConfigurationTemplate');
    return this;
  }

  /**
   * Grants permission to update an environment.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFromApplicationVersion()
   * - .ifFromConfigurationTemplate()
   * - .ifFromSolutionStack()
   * - .ifFromPlatform()
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateEnvironment.html
   */
  public toUpdateEnvironment() {
    this.add('elasticbeanstalk:UpdateEnvironment');
    return this;
  }

  /**
   * Grants permission to check the validity of a set of configuration settings for a configuration template or an environment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ValidateConfigurationSettings.html
   */
  public toValidateConfigurationSettings() {
    this.add('elasticbeanstalk:ValidateConfigurationSettings');
    return this;
  }

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
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
    var arn = 'arn:${Partition}:elasticbeanstalk:${Region}:${Account}:application/${ApplicationName}';
    arn = arn.replace('${ApplicationName}', applicationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type applicationversion to the statement
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param versionLabel - Identifier for the versionLabel.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInApplication()
   */
  public onApplicationversion(applicationName: string, versionLabel: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticbeanstalk:${Region}:${Account}:applicationversion/${ApplicationName}/${VersionLabel}';
    arn = arn.replace('${ApplicationName}', applicationName);
    arn = arn.replace('${VersionLabel}', versionLabel);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type configurationtemplate to the statement
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param templateName - Identifier for the templateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInApplication()
   */
  public onConfigurationtemplate(applicationName: string, templateName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticbeanstalk:${Region}:${Account}:configurationtemplate/${ApplicationName}/${TemplateName}';
    arn = arn.replace('${ApplicationName}', applicationName);
    arn = arn.replace('${TemplateName}', templateName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param environmentName - Identifier for the environmentName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInApplication()
   */
  public onEnvironment(applicationName: string, environmentName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticbeanstalk:${Region}:${Account}:environment/${ApplicationName}/${EnvironmentName}';
    arn = arn.replace('${ApplicationName}', applicationName);
    arn = arn.replace('${EnvironmentName}', environmentName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type solutionstack to the statement
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   *
   * @param solutionStackName - Identifier for the solutionStackName.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSolutionstack(solutionStackName: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticbeanstalk:${Region}::solutionstack/${SolutionStackName}';
    arn = arn.replace('${SolutionStackName}', solutionStackName);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type platform to the statement
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   *
   * @param platformNameWithVersion - Identifier for the platformNameWithVersion.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPlatform(platformNameWithVersion: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticbeanstalk:${Region}::platform/${PlatformNameWithVersion}';
    arn = arn.replace('${PlatformNameWithVersion}', platformNameWithVersion);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by an application as a dependency or a constraint on an input parameter.
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toCreateConfigurationTemplate()
   * - .toUpdateConfigurationTemplate()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifFromApplication(value: string | string[], operator?: string) {
    return this.if(`elasticbeanstalk:FromApplication`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by an application version as a dependency or a constraint on an input parameter.
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toCreateConfigurationTemplate()
   * - .toCreateEnvironment()
   * - .toUpdateConfigurationTemplate()
   * - .toUpdateEnvironment()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifFromApplicationVersion(value: string | string[], operator?: string) {
    return this.if(`elasticbeanstalk:FromApplicationVersion`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by a configuration template as a dependency or a constraint on an input parameter.
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toCreateConfigurationTemplate()
   * - .toCreateEnvironment()
   * - .toUpdateConfigurationTemplate()
   * - .toUpdateEnvironment()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifFromConfigurationTemplate(value: string | string[], operator?: string) {
    return this.if(`elasticbeanstalk:FromConfigurationTemplate`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by an environment as a dependency or a constraint on an input parameter.
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toCreateConfigurationTemplate()
   * - .toSwapEnvironmentCNAMEs()
   * - .toUpdateConfigurationTemplate()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifFromEnvironment(value: string | string[], operator?: string) {
    return this.if(`elasticbeanstalk:FromEnvironment`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by a platform as a dependency or a constraint on an input parameter.
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toCreateConfigurationTemplate()
   * - .toCreateEnvironment()
   * - .toUpdateConfigurationTemplate()
   * - .toUpdateEnvironment()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifFromPlatform(value: string | string[], operator?: string) {
    return this.if(`elasticbeanstalk:FromPlatform`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by a solution stack as a dependency or a constraint on an input parameter.
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toCreateConfigurationTemplate()
   * - .toCreateEnvironment()
   * - .toUpdateConfigurationTemplate()
   * - .toUpdateEnvironment()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifFromSolutionStack(value: string | string[], operator?: string) {
    return this.if(`elasticbeanstalk:FromSolutionStack`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by the application that contains the resource that the action operates on.
   *
   * https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions
   *
   * Applies to actions:
   * - .toAbortEnvironmentUpdate()
   * - .toApplyEnvironmentManagedAction()
   * - .toComposeEnvironments()
   * - .toCreateApplicationVersion()
   * - .toCreateConfigurationTemplate()
   * - .toCreateEnvironment()
   * - .toDeleteApplicationVersion()
   * - .toDeleteConfigurationTemplate()
   * - .toDeleteEnvironmentConfiguration()
   * - .toDescribeApplicationVersions()
   * - .toDescribeConfigurationOptions()
   * - .toDescribeConfigurationSettings()
   * - .toDescribeEnvironmentManagedActionHistory()
   * - .toDescribeEnvironmentManagedActions()
   * - .toDescribeEnvironmentResources()
   * - .toDescribeEnvironments()
   * - .toDescribeEvents()
   * - .toRebuildEnvironment()
   * - .toRequestEnvironmentInfo()
   * - .toRestartAppServer()
   * - .toRetrieveEnvironmentInfo()
   * - .toSwapEnvironmentCNAMEs()
   * - .toTerminateEnvironment()
   * - .toUpdateApplicationVersion()
   * - .toUpdateConfigurationTemplate()
   * - .toUpdateEnvironment()
   * - .toValidateConfigurationSettings()
   *
   * Applies to resource types:
   * - applicationversion
   * - configurationtemplate
   * - environment
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifInApplication(value: string | string[], operator?: string) {
    return this.if(`elasticbeanstalk:InApplication`, value, operator || 'ArnEquals');
  }
}
