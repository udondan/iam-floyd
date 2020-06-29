import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service codedeploy
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodedeploy.html
 */
export class Codedeploy extends PolicyStatement {
  public servicePrefix = 'codedeploy';
  public actions: Actions = {
    "AddTagsToOnPremisesInstances": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_AddTagsToOnPremisesInstances.html",
      "description": "Add tags to one or more on-premises instances.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "BatchGetApplicationRevisions": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetApplicationRevisions.html",
      "description": "Gets information about one or more application revisions.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "BatchGetApplications": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetApplications.html",
      "description": "Get information about multiple applications associated with the IAM user.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "BatchGetDeploymentGroups": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentGroups.html",
      "description": "Get information about one or more deployment groups.",
      "accessLevel": "Read",
      "resourceTypes": {
        "deploymentgroup": {
          "required": true
        }
      }
    },
    "BatchGetDeploymentInstances": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentInstances.html",
      "description": "Gets information about one or more instance that are part of a deployment group.",
      "accessLevel": "Read",
      "resourceTypes": {
        "deploymentgroup": {
          "required": true
        }
      }
    },
    "BatchGetDeploymentTargets": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentTargets.html",
      "description": "Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated BatchGetDeploymentInstances. The maximum number of targets that can be returned is 25.",
      "accessLevel": "Read"
    },
    "BatchGetDeployments": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeployments.html",
      "description": "Get information about multiple deployments associated with the IAM user.",
      "accessLevel": "Read",
      "resourceTypes": {
        "deploymentgroup": {
          "required": true
        }
      }
    },
    "BatchGetOnPremisesInstances": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetOnPremisesInstances.html",
      "description": "Get information about one or more on-premises instances.",
      "accessLevel": "Read",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "ContinueDeployment": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ContinueDeployment.html",
      "description": "Starts the process of rerouting traffic from instances in the original environment to instances in thereplacement environment without waiting for a specified wait time to elapse.",
      "accessLevel": "Write"
    },
    "CreateApplication": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateApplication.html",
      "description": "Create an application associated with the IAM user.",
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
    "CreateCloudFormationDeployment": {
      "url": "",
      "description": "Create CloudFormation deployment to cooperate ochestration for a CloudFormation stack update.",
      "accessLevel": "Write"
    },
    "CreateDeployment": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html",
      "description": "Create a deployment for an application associated with the IAM user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentgroup": {
          "required": true
        }
      }
    },
    "CreateDeploymentConfig": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentConfig.html",
      "description": "Create a custom deployment configuration associated with the IAM user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentconfig": {
          "required": true
        }
      }
    },
    "CreateDeploymentGroup": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentGroup.html",
      "description": "Create a deployment group for an application associated with the IAM user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentgroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteApplication": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteApplication.html",
      "description": "Delete an application associated with the IAM user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DeleteDeploymentConfig": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteDeploymentConfig.html",
      "description": "Delete a custom deployment configuration associated with the IAM user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentconfig": {
          "required": true
        }
      }
    },
    "DeleteDeploymentGroup": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteDeploymentGroup.html",
      "description": "Delete a deployment group for an application associated with the IAM user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentgroup": {
          "required": true
        }
      }
    },
    "DeleteGitHubAccountToken": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteGitHubAccountToken.html",
      "description": "Deletes a GitHub account connection.",
      "accessLevel": "Write"
    },
    "DeleteResourcesByExternalId": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteResourcesByExternalId.html",
      "description": "Delete resources associated with the given external Id.",
      "accessLevel": "Write"
    },
    "DeregisterOnPremisesInstance": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeregisterOnPremisesInstance.html",
      "description": "Deregister an on-premises instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "GetApplication": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetApplication.html",
      "description": "Get information about a single application associated with the IAM user.",
      "accessLevel": "List",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "GetApplicationRevision": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetApplicationRevision.html",
      "description": "Get information about a single application revision for an application associated with the IAM user.",
      "accessLevel": "List",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "GetDeployment": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeployment.html",
      "description": "Get information about a single deployment to a deployment group for an application associated with the IAM user.",
      "accessLevel": "List",
      "resourceTypes": {
        "deploymentgroup": {
          "required": true
        }
      }
    },
    "GetDeploymentConfig": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentConfig.html",
      "description": "Get information about a single deployment configuration associated with the IAM user.",
      "accessLevel": "List",
      "resourceTypes": {
        "deploymentconfig": {
          "required": true
        }
      }
    },
    "GetDeploymentGroup": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentGroup.html",
      "description": "Get information about a single deployment group for an application associated with the IAM user.",
      "accessLevel": "List",
      "resourceTypes": {
        "deploymentgroup": {
          "required": true
        }
      }
    },
    "GetDeploymentInstance": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentInstance.html",
      "description": "Get information about a single instance in a deployment associated with the IAM user.",
      "accessLevel": "List",
      "resourceTypes": {
        "deploymentgroup": {
          "required": true
        }
      }
    },
    "GetDeploymentTarget": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentTarget.html",
      "description": "Returns information about a deployment target.",
      "accessLevel": "Read"
    },
    "GetOnPremisesInstance": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetOnPremisesInstance.html",
      "description": "Get information about a single on-premises instance.",
      "accessLevel": "List",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "ListApplicationRevisions": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListApplicationRevisions.html",
      "description": "Get information about all application revisions for an application associated with the IAM user.",
      "accessLevel": "List",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "ListApplications": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListApplications.html",
      "description": "Get information about all applications associated with the IAM user.",
      "accessLevel": "List"
    },
    "ListDeploymentConfigs": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentConfigs.html",
      "description": "Get information about all deployment configurations associated with the IAM user.",
      "accessLevel": "List"
    },
    "ListDeploymentGroups": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentGroups.html",
      "description": "Get information about all deployment groups for an application associated with the IAM user.",
      "accessLevel": "List",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "ListDeploymentInstances": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentInstances.html",
      "description": "Get information about all instances in a deployment associated with the IAM user.",
      "accessLevel": "List",
      "resourceTypes": {
        "deploymentgroup": {
          "required": true
        }
      }
    },
    "ListDeploymentTargets": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentTargets.html",
      "description": "Returns an array of target IDs that are associated a deployment.",
      "accessLevel": "List"
    },
    "ListDeployments": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeployments.html",
      "description": "Get information about all deployments to a deployment group associated with the IAM user, or to get all deployments associated with the IAM user.",
      "accessLevel": "List",
      "resourceTypes": {
        "deploymentgroup": {
          "required": true
        }
      }
    },
    "ListGitHubAccountTokenNames": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ ListGitHubAccountTokenNames.html",
      "description": "Lists the names of stored connections to GitHub accounts.",
      "accessLevel": "List"
    },
    "ListOnPremisesInstances": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListOnPremisesInstances.html",
      "description": "Get a list of one or more on-premises instance names.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ ListTagsForResource.html",
      "description": "Returns a list of tags for the resource identified by a specified ARN. Tags are used to organize and categorize your CodeDeploy resources.",
      "accessLevel": "List",
      "resourceTypes": {
        "application": {
          "required": false
        },
        "deploymentgroup": {
          "required": false
        }
      }
    },
    "PutLifecycleEventHookExecutionStatus": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_PutLifecycleEventHookExecutionStatus.html",
      "description": "Notify a lifecycle event hook execution status for associated deployment with the IAM user.",
      "accessLevel": "Write"
    },
    "RegisterApplicationRevision": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RegisterApplicationRevision.html",
      "description": "Register information about an application revision for an application associated with the IAM user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "RegisterOnPremisesInstance": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RegisterOnPremisesInstance.html",
      "description": "Register an on-premises instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "RemoveTagsFromOnPremisesInstances": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RemoveTagsFromOnPremisesInstances.html",
      "description": "Remove tags from one or more on-premises instances.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "SkipWaitTimeForInstanceTermination": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ SkipWaitTimeForInstanceTermination.html",
      "description": "In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.",
      "accessLevel": "Write"
    },
    "StopDeployment": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_StopDeployment.html",
      "description": "Description for StopDeployment",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_TagResource.html",
      "description": "Associates the list of tags in the input Tags parameter with the resource identified by the ResourceArn input parameter.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "application": {
          "required": false
        },
        "deploymentgroup": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UntagResource.html",
      "description": "Disassociates a resource from a list of tags. The resource is identified by the ResourceArn input parameter. The tags are identfied by the list of keys in the TagKeys input parameter.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "application": {
          "required": false
        },
        "deploymentgroup": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateApplication": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UpdateApplication.html",
      "description": "Description for UpdateApplication",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "UpdateDeploymentGroup": {
      "url": "https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UpdateDeploymentGroup.html",
      "description": "Change information about a single deployment group for an application associated with the IAM user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deploymentgroup": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "application": {
      "name": "application",
      "url": "https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html",
      "arn": "arn:${Partition}:codedeploy:${Region}:${Account}:application:${ApplicationName}",
      "conditionKeys": []
    },
    "deploymentconfig": {
      "name": "deploymentconfig",
      "url": "https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html",
      "arn": "arn:${Partition}:codedeploy:${Region}:${Account}:deploymentconfig:${DeploymentConfigurationName}",
      "conditionKeys": []
    },
    "deploymentgroup": {
      "name": "deploymentgroup",
      "url": "https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html",
      "arn": "arn:${Partition}:codedeploy:${Region}:${Account}:deploymentgroup:${ApplicationName}/${DeploymentGroupName}",
      "conditionKeys": []
    },
    "instance": {
      "name": "instance",
      "url": "https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html",
      "arn": "arn:${Partition}:codedeploy:${Region}:${Account}:instance:${InstanceName}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service codedeploy
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodedeploy.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Add tags to one or more on-premises instances.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_AddTagsToOnPremisesInstances.html
   */
  public addTagsToOnPremisesInstances() {
    this.add('codedeploy:AddTagsToOnPremisesInstances');
    return this;
  }

  /**
   * Gets information about one or more application revisions.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetApplicationRevisions.html
   */
  public batchGetApplicationRevisions() {
    this.add('codedeploy:BatchGetApplicationRevisions');
    return this;
  }

  /**
   * Get information about multiple applications associated with the IAM user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetApplications.html
   */
  public batchGetApplications() {
    this.add('codedeploy:BatchGetApplications');
    return this;
  }

  /**
   * Get information about one or more deployment groups.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentGroups.html
   */
  public batchGetDeploymentGroups() {
    this.add('codedeploy:BatchGetDeploymentGroups');
    return this;
  }

  /**
   * Gets information about one or more instance that are part of a deployment group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentInstances.html
   */
  public batchGetDeploymentInstances() {
    this.add('codedeploy:BatchGetDeploymentInstances');
    return this;
  }

  /**
   * Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated BatchGetDeploymentInstances. The maximum number of targets that can be returned is 25.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentTargets.html
   */
  public batchGetDeploymentTargets() {
    this.add('codedeploy:BatchGetDeploymentTargets');
    return this;
  }

  /**
   * Get information about multiple deployments associated with the IAM user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeployments.html
   */
  public batchGetDeployments() {
    this.add('codedeploy:BatchGetDeployments');
    return this;
  }

  /**
   * Get information about one or more on-premises instances.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetOnPremisesInstances.html
   */
  public batchGetOnPremisesInstances() {
    this.add('codedeploy:BatchGetOnPremisesInstances');
    return this;
  }

  /**
   * Starts the process of rerouting traffic from instances in the original environment to instances in thereplacement environment without waiting for a specified wait time to elapse.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ContinueDeployment.html
   */
  public continueDeployment() {
    this.add('codedeploy:ContinueDeployment');
    return this;
  }

  /**
   * Create an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateApplication.html
   */
  public createApplication() {
    this.add('codedeploy:CreateApplication');
    return this;
  }

  /**
   * Create CloudFormation deployment to cooperate ochestration for a CloudFormation stack update.
   *
   * Access Level: Write
   */
  public createCloudFormationDeployment() {
    this.add('codedeploy:CreateCloudFormationDeployment');
    return this;
  }

  /**
   * Create a deployment for an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html
   */
  public createDeployment() {
    this.add('codedeploy:CreateDeployment');
    return this;
  }

  /**
   * Create a custom deployment configuration associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentConfig.html
   */
  public createDeploymentConfig() {
    this.add('codedeploy:CreateDeploymentConfig');
    return this;
  }

  /**
   * Create a deployment group for an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentGroup.html
   */
  public createDeploymentGroup() {
    this.add('codedeploy:CreateDeploymentGroup');
    return this;
  }

  /**
   * Delete an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteApplication.html
   */
  public deleteApplication() {
    this.add('codedeploy:DeleteApplication');
    return this;
  }

  /**
   * Delete a custom deployment configuration associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteDeploymentConfig.html
   */
  public deleteDeploymentConfig() {
    this.add('codedeploy:DeleteDeploymentConfig');
    return this;
  }

  /**
   * Delete a deployment group for an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteDeploymentGroup.html
   */
  public deleteDeploymentGroup() {
    this.add('codedeploy:DeleteDeploymentGroup');
    return this;
  }

  /**
   * Deletes a GitHub account connection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteGitHubAccountToken.html
   */
  public deleteGitHubAccountToken() {
    this.add('codedeploy:DeleteGitHubAccountToken');
    return this;
  }

  /**
   * Delete resources associated with the given external Id.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteResourcesByExternalId.html
   */
  public deleteResourcesByExternalId() {
    this.add('codedeploy:DeleteResourcesByExternalId');
    return this;
  }

  /**
   * Deregister an on-premises instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeregisterOnPremisesInstance.html
   */
  public deregisterOnPremisesInstance() {
    this.add('codedeploy:DeregisterOnPremisesInstance');
    return this;
  }

  /**
   * Get information about a single application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetApplication.html
   */
  public getApplication() {
    this.add('codedeploy:GetApplication');
    return this;
  }

  /**
   * Get information about a single application revision for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetApplicationRevision.html
   */
  public getApplicationRevision() {
    this.add('codedeploy:GetApplicationRevision');
    return this;
  }

  /**
   * Get information about a single deployment to a deployment group for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeployment.html
   */
  public getDeployment() {
    this.add('codedeploy:GetDeployment');
    return this;
  }

  /**
   * Get information about a single deployment configuration associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentConfig.html
   */
  public getDeploymentConfig() {
    this.add('codedeploy:GetDeploymentConfig');
    return this;
  }

  /**
   * Get information about a single deployment group for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentGroup.html
   */
  public getDeploymentGroup() {
    this.add('codedeploy:GetDeploymentGroup');
    return this;
  }

  /**
   * Get information about a single instance in a deployment associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentInstance.html
   */
  public getDeploymentInstance() {
    this.add('codedeploy:GetDeploymentInstance');
    return this;
  }

  /**
   * Returns information about a deployment target.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentTarget.html
   */
  public getDeploymentTarget() {
    this.add('codedeploy:GetDeploymentTarget');
    return this;
  }

  /**
   * Get information about a single on-premises instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetOnPremisesInstance.html
   */
  public getOnPremisesInstance() {
    this.add('codedeploy:GetOnPremisesInstance');
    return this;
  }

  /**
   * Get information about all application revisions for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListApplicationRevisions.html
   */
  public listApplicationRevisions() {
    this.add('codedeploy:ListApplicationRevisions');
    return this;
  }

  /**
   * Get information about all applications associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListApplications.html
   */
  public listApplications() {
    this.add('codedeploy:ListApplications');
    return this;
  }

  /**
   * Get information about all deployment configurations associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentConfigs.html
   */
  public listDeploymentConfigs() {
    this.add('codedeploy:ListDeploymentConfigs');
    return this;
  }

  /**
   * Get information about all deployment groups for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentGroups.html
   */
  public listDeploymentGroups() {
    this.add('codedeploy:ListDeploymentGroups');
    return this;
  }

  /**
   * Get information about all instances in a deployment associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentInstances.html
   */
  public listDeploymentInstances() {
    this.add('codedeploy:ListDeploymentInstances');
    return this;
  }

  /**
   * Returns an array of target IDs that are associated a deployment.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentTargets.html
   */
  public listDeploymentTargets() {
    this.add('codedeploy:ListDeploymentTargets');
    return this;
  }

  /**
   * Get information about all deployments to a deployment group associated with the IAM user, or to get all deployments associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeployments.html
   */
  public listDeployments() {
    this.add('codedeploy:ListDeployments');
    return this;
  }

  /**
   * Lists the names of stored connections to GitHub accounts.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ ListGitHubAccountTokenNames.html
   */
  public listGitHubAccountTokenNames() {
    this.add('codedeploy:ListGitHubAccountTokenNames');
    return this;
  }

  /**
   * Get a list of one or more on-premises instance names.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListOnPremisesInstances.html
   */
  public listOnPremisesInstances() {
    this.add('codedeploy:ListOnPremisesInstances');
    return this;
  }

  /**
   * Returns a list of tags for the resource identified by a specified ARN. Tags are used to organize and categorize your CodeDeploy resources.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('codedeploy:ListTagsForResource');
    return this;
  }

  /**
   * Notify a lifecycle event hook execution status for associated deployment with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_PutLifecycleEventHookExecutionStatus.html
   */
  public putLifecycleEventHookExecutionStatus() {
    this.add('codedeploy:PutLifecycleEventHookExecutionStatus');
    return this;
  }

  /**
   * Register information about an application revision for an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RegisterApplicationRevision.html
   */
  public registerApplicationRevision() {
    this.add('codedeploy:RegisterApplicationRevision');
    return this;
  }

  /**
   * Register an on-premises instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RegisterOnPremisesInstance.html
   */
  public registerOnPremisesInstance() {
    this.add('codedeploy:RegisterOnPremisesInstance');
    return this;
  }

  /**
   * Remove tags from one or more on-premises instances.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RemoveTagsFromOnPremisesInstances.html
   */
  public removeTagsFromOnPremisesInstances() {
    this.add('codedeploy:RemoveTagsFromOnPremisesInstances');
    return this;
  }

  /**
   * In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ SkipWaitTimeForInstanceTermination.html
   */
  public skipWaitTimeForInstanceTermination() {
    this.add('codedeploy:SkipWaitTimeForInstanceTermination');
    return this;
  }

  /**
   * Description for StopDeployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_StopDeployment.html
   */
  public stopDeployment() {
    this.add('codedeploy:StopDeployment');
    return this;
  }

  /**
   * Associates the list of tags in the input Tags parameter with the resource identified by the ResourceArn input parameter.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('codedeploy:TagResource');
    return this;
  }

  /**
   * Disassociates a resource from a list of tags. The resource is identified by the ResourceArn input parameter. The tags are identfied by the list of keys in the TagKeys input parameter.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('codedeploy:UntagResource');
    return this;
  }

  /**
   * Description for UpdateApplication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UpdateApplication.html
   */
  public updateApplication() {
    this.add('codedeploy:UpdateApplication');
    return this;
  }

  /**
   * Change information about a single deployment group for an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UpdateDeploymentGroup.html
   */
  public updateDeploymentGroup() {
    this.add('codedeploy:UpdateDeploymentGroup');
    return this;
  }

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onApplication(applicationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codedeploy:${Region}:${Account}:application:${ApplicationName}';
    arn = arn.replace('${ApplicationName}', applicationName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deploymentconfig to the statement
   *
   * https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html
   *
   * @param deploymentConfigurationName - Identifier for the deploymentConfigurationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDeploymentconfig(deploymentConfigurationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codedeploy:${Region}:${Account}:deploymentconfig:${DeploymentConfigurationName}';
    arn = arn.replace('${DeploymentConfigurationName}', deploymentConfigurationName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deploymentgroup to the statement
   *
   * https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param deploymentGroupName - Identifier for the deploymentGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDeploymentgroup(applicationName: string, deploymentGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codedeploy:${Region}:${Account}:deploymentgroup:${ApplicationName}/${DeploymentGroupName}';
    arn = arn.replace('${ApplicationName}', applicationName);
    arn = arn.replace('${DeploymentGroupName}', deploymentGroupName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type instance to the statement
   *
   * https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html
   *
   * @param instanceName - Identifier for the instanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onInstance(instanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codedeploy:${Region}:${Account}:instance:${InstanceName}';
    arn = arn.replace('${InstanceName}', instanceName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
