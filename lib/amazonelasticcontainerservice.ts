import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service ecs
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticcontainerservice.html
 */
export class Ecs extends PolicyStatement {
  public servicePrefix = 'ecs';
  public actions : Actions = {
    "CreateCluster": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCluster.html",
      "description": "Creates a new Amazon ECS cluster.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateService": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html",
      "description": "Runs and maintains a desired number of tasks from a specified task definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "service": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster",
        "ecs:task-definition",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateTaskSet": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateTaskSet.html",
      "description": "Creates a new Amazon ECS task set.",
      "accessLevel": "Write",
      "conditions": [
        "ecs:cluster",
        "ecs:service",
        "ecs:task-definition"
      ]
    },
    "DeleteAccountSetting": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAccountSetting.html",
      "description": "Modifies the ARN and resource ID format of a resource for a specified IAM user, IAM role, or the root user for an account. You can specify whether the new ARN and resource ID format are disabled for new resources that are created.",
      "accessLevel": "Write"
    },
    "DeleteAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html",
      "description": "Deletes one or more custom attributes from an Amazon ECS resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "DeleteCluster": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCluster.html",
      "description": "Deletes the specified cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DeleteService": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteService.html",
      "description": "Deletes a specified service within a cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "service": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "DeleteTaskSet": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html",
      "description": "Deletes the specified task set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "task-set": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster",
        "ecs:service"
      ]
    },
    "DeregisterContainerInstance": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterContainerInstance.html",
      "description": "Deregisters an Amazon ECS container instance from the specified cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DeregisterTaskDefinition": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html",
      "description": "Deregisters the specified task definition by family and revision.",
      "accessLevel": "Write"
    },
    "DescribeClusters": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeClusters.html",
      "description": "Describes one or more of your clusters.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DescribeContainerInstances": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html",
      "description": "Describes Amazon ECS container instances.",
      "accessLevel": "Read",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "DescribeServices": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServices.html",
      "description": "Describes the specified services running in your cluster.",
      "accessLevel": "Read",
      "resourceTypes": {
        "service": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "DescribeTaskDefinition": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskDefinition.html",
      "description": "Describes a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family.",
      "accessLevel": "Read"
    },
    "DescribeTaskSets": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskSets.html",
      "description": "Describes Amazon ECS task sets.",
      "accessLevel": "Read",
      "resourceTypes": {
        "task-set": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster",
        "ecs:service"
      ]
    },
    "DescribeTasks": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html",
      "description": "Describes a specified task or tasks.",
      "accessLevel": "Read",
      "resourceTypes": {
        "task": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "DiscoverPollEndpoint": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DiscoverPollEndpoint.html",
      "description": "Returns an endpoint for the Amazon ECS agent to poll for updates.",
      "accessLevel": "Write"
    },
    "ListAccountSettings": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAccountSettings.html",
      "description": "Lists the account settings for an Amazon ECS resource for a specified principal.",
      "accessLevel": "List"
    },
    "ListAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAttributes.html",
      "description": "Lists the attributes for Amazon ECS resources within a specified target type and cluster.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ListClusters": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html",
      "description": "Returns a list of existing clusters.",
      "accessLevel": "List"
    },
    "ListContainerInstances": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListContainerInstances.html",
      "description": "Returns a list of container instances in a specified cluster.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ListServices": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html",
      "description": "Lists the services that are running in a specified cluster.",
      "accessLevel": "List",
      "conditions": [
        "ecs:cluster"
      ]
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTagsForResource.html",
      "description": "List tags for the specified resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "container-instance": {
          "required": false
        },
        "task": {
          "required": false
        },
        "task-definition": {
          "required": false
        }
      }
    },
    "ListTaskDefinitionFamilies": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html",
      "description": "Returns a list of task definition families that are registered to your account (which may include task definition families that no longer have any ACTIVE task definitions).",
      "accessLevel": "List"
    },
    "ListTaskDefinitions": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTaskDefinitions.html",
      "description": "Returns a list of task definitions that are registered to your account.",
      "accessLevel": "List"
    },
    "ListTasks": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html",
      "description": "Returns a list of tasks for a specified cluster.",
      "accessLevel": "List",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "Poll": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/instance_IAM_role.html",
      "description": "Grants permission to an agent to connect with the Amazon ECS service to report status and get commands.",
      "accessLevel": "Write",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "PutAccountSetting": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html",
      "description": "Modifies the ARN and resource ID format of a resource for a specified IAM user, IAM role, or the root user for an account. You can specify whether the new ARN and resource ID format are enabled for new resources that are created. Enabling this setting is required to use new Amazon ECS features such as resource tagging.",
      "accessLevel": "Write"
    },
    "PutAccountSettingDefault": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html",
      "description": "Modifies the ARN and resource ID format of a resource type for all IAM users on an account for which no individual account setting has been set. Enabling this setting is required to use new Amazon ECS features such as resource tagging.",
      "accessLevel": "Write"
    },
    "PutAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAttributes.html",
      "description": "Create or update an attribute on an Amazon ECS resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "RegisterContainerInstance": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterContainerInstance.html",
      "description": "Registers an EC2 instance into the specified cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "RegisterTaskDefinition": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterTaskDefinition.html",
      "description": "Registers a new task definition from the supplied family and containerDefinitions.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "RunTask": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html",
      "description": "Start a task using random placement and the default Amazon ECS scheduler.",
      "accessLevel": "Write",
      "resourceTypes": {
        "task-definition": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "StartTask": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StartTask.html",
      "description": "Starts a new task from the specified task definition on the specified container instance or instances.",
      "accessLevel": "Write",
      "resourceTypes": {
        "task-definition": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster",
        "ecs:container-instances",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "StartTelemetrySession": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-metrics.html#enable_cloudwatch",
      "description": "Grants permission to start a telemetry session.",
      "accessLevel": "Write",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "StopTask": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StopTask.html",
      "description": "Stops a running task.",
      "accessLevel": "Write",
      "resourceTypes": {
        "task": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "SubmitAttachmentStateChanges": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitAttachmentStateChanges.html",
      "description": "Sent to acknowledge that attachments changed states.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "SubmitContainerStateChange": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitContainerStateChange.html",
      "description": "Sent to acknowledge that a container changed states.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "SubmitTaskStateChange": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitTaskStateChange.html",
      "description": "Sent to acknowledge that a task changed states.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html",
      "description": "Tags the specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "container-instance": {
          "required": false
        },
        "service": {
          "required": false
        },
        "task": {
          "required": false
        },
        "task-definition": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UntagResource.html",
      "description": "Untags the specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "container-instance": {
          "required": false
        },
        "service": {
          "required": false
        },
        "task": {
          "required": false
        },
        "task-definition": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateContainerAgent": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerAgent.html",
      "description": "Updates the Amazon ECS container agent on a specified container instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "UpdateContainerInstancesState": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerInstancesState.html",
      "description": "Enables the user to modify the status of an Amazon ECS container instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "UpdateService": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html",
      "description": "Modifies the desired count, deployment configuration, or task definition used in a service.",
      "accessLevel": "Write",
      "resourceTypes": {
        "service": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster",
        "ecs:task-definition"
      ]
    },
    "UpdateServicePrimaryTaskSet": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateServicePrimaryTaskSet.html",
      "description": "Modifies the primary task set used in a service.",
      "accessLevel": "Write",
      "resourceTypes": {
        "service": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "UpdateTaskSet": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskSet.html",
      "description": "Updates the specified task set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "task-set": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster",
        "ecs:service"
      ]
    }
  };

  /**
   * Creates a new Amazon ECS cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCluster.html
   */
  public createCluster () {
    this.add('ecs:CreateCluster');
    return this;
  }

  /**
   * Runs and maintains a desired number of tasks from a specified task definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html
   */
  public createService () {
    this.add('ecs:CreateService');
    return this;
  }

  /**
   * Creates a new Amazon ECS task set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateTaskSet.html
   */
  public createTaskSet () {
    this.add('ecs:CreateTaskSet');
    return this;
  }

  /**
   * Modifies the ARN and resource ID format of a resource for a specified IAM user, IAM role, or the root user for an account. You can specify whether the new ARN and resource ID format are disabled for new resources that are created.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAccountSetting.html
   */
  public deleteAccountSetting () {
    this.add('ecs:DeleteAccountSetting');
    return this;
  }

  /**
   * Deletes one or more custom attributes from an Amazon ECS resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html
   */
  public deleteAttributes () {
    this.add('ecs:DeleteAttributes');
    return this;
  }

  /**
   * Deletes the specified cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCluster.html
   */
  public deleteCluster () {
    this.add('ecs:DeleteCluster');
    return this;
  }

  /**
   * Deletes a specified service within a cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteService.html
   */
  public deleteService () {
    this.add('ecs:DeleteService');
    return this;
  }

  /**
   * Deletes the specified task set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html
   */
  public deleteTaskSet () {
    this.add('ecs:DeleteTaskSet');
    return this;
  }

  /**
   * Deregisters an Amazon ECS container instance from the specified cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterContainerInstance.html
   */
  public deregisterContainerInstance () {
    this.add('ecs:DeregisterContainerInstance');
    return this;
  }

  /**
   * Deregisters the specified task definition by family and revision.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html
   */
  public deregisterTaskDefinition () {
    this.add('ecs:DeregisterTaskDefinition');
    return this;
  }

  /**
   * Describes one or more of your clusters.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeClusters.html
   */
  public describeClusters () {
    this.add('ecs:DescribeClusters');
    return this;
  }

  /**
   * Describes Amazon ECS container instances.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html
   */
  public describeContainerInstances () {
    this.add('ecs:DescribeContainerInstances');
    return this;
  }

  /**
   * Describes the specified services running in your cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServices.html
   */
  public describeServices () {
    this.add('ecs:DescribeServices');
    return this;
  }

  /**
   * Describes a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskDefinition.html
   */
  public describeTaskDefinition () {
    this.add('ecs:DescribeTaskDefinition');
    return this;
  }

  /**
   * Describes Amazon ECS task sets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskSets.html
   */
  public describeTaskSets () {
    this.add('ecs:DescribeTaskSets');
    return this;
  }

  /**
   * Describes a specified task or tasks.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html
   */
  public describeTasks () {
    this.add('ecs:DescribeTasks');
    return this;
  }

  /**
   * Returns an endpoint for the Amazon ECS agent to poll for updates.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DiscoverPollEndpoint.html
   */
  public discoverPollEndpoint () {
    this.add('ecs:DiscoverPollEndpoint');
    return this;
  }

  /**
   * Lists the account settings for an Amazon ECS resource for a specified principal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAccountSettings.html
   */
  public listAccountSettings () {
    this.add('ecs:ListAccountSettings');
    return this;
  }

  /**
   * Lists the attributes for Amazon ECS resources within a specified target type and cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAttributes.html
   */
  public listAttributes () {
    this.add('ecs:ListAttributes');
    return this;
  }

  /**
   * Returns a list of existing clusters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html
   */
  public listClusters () {
    this.add('ecs:ListClusters');
    return this;
  }

  /**
   * Returns a list of container instances in a specified cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListContainerInstances.html
   */
  public listContainerInstances () {
    this.add('ecs:ListContainerInstances');
    return this;
  }

  /**
   * Lists the services that are running in a specified cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html
   */
  public listServices () {
    this.add('ecs:ListServices');
    return this;
  }

  /**
   * List tags for the specified resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource () {
    this.add('ecs:ListTagsForResource');
    return this;
  }

  /**
   * Returns a list of task definition families that are registered to your account (which may include task definition families that no longer have any ACTIVE task definitions).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html
   */
  public listTaskDefinitionFamilies () {
    this.add('ecs:ListTaskDefinitionFamilies');
    return this;
  }

  /**
   * Returns a list of task definitions that are registered to your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTaskDefinitions.html
   */
  public listTaskDefinitions () {
    this.add('ecs:ListTaskDefinitions');
    return this;
  }

  /**
   * Returns a list of tasks for a specified cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html
   */
  public listTasks () {
    this.add('ecs:ListTasks');
    return this;
  }

  /**
   * Grants permission to an agent to connect with the Amazon ECS service to report status and get commands.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/instance_IAM_role.html
   */
  public poll () {
    this.add('ecs:Poll');
    return this;
  }

  /**
   * Modifies the ARN and resource ID format of a resource for a specified IAM user, IAM role, or the root user for an account. You can specify whether the new ARN and resource ID format are enabled for new resources that are created. Enabling this setting is required to use new Amazon ECS features such as resource tagging.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html
   */
  public putAccountSetting () {
    this.add('ecs:PutAccountSetting');
    return this;
  }

  /**
   * Modifies the ARN and resource ID format of a resource type for all IAM users on an account for which no individual account setting has been set. Enabling this setting is required to use new Amazon ECS features such as resource tagging.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html
   */
  public putAccountSettingDefault () {
    this.add('ecs:PutAccountSettingDefault');
    return this;
  }

  /**
   * Create or update an attribute on an Amazon ECS resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAttributes.html
   */
  public putAttributes () {
    this.add('ecs:PutAttributes');
    return this;
  }

  /**
   * Registers an EC2 instance into the specified cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterContainerInstance.html
   */
  public registerContainerInstance () {
    this.add('ecs:RegisterContainerInstance');
    return this;
  }

  /**
   * Registers a new task definition from the supplied family and containerDefinitions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterTaskDefinition.html
   */
  public registerTaskDefinition () {
    this.add('ecs:RegisterTaskDefinition');
    return this;
  }

  /**
   * Start a task using random placement and the default Amazon ECS scheduler.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html
   */
  public runTask () {
    this.add('ecs:RunTask');
    return this;
  }

  /**
   * Starts a new task from the specified task definition on the specified container instance or instances.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StartTask.html
   */
  public startTask () {
    this.add('ecs:StartTask');
    return this;
  }

  /**
   * Grants permission to start a telemetry session.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-metrics.html#enable_cloudwatch
   */
  public startTelemetrySession () {
    this.add('ecs:StartTelemetrySession');
    return this;
  }

  /**
   * Stops a running task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StopTask.html
   */
  public stopTask () {
    this.add('ecs:StopTask');
    return this;
  }

  /**
   * Sent to acknowledge that attachments changed states.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitAttachmentStateChanges.html
   */
  public submitAttachmentStateChanges () {
    this.add('ecs:SubmitAttachmentStateChanges');
    return this;
  }

  /**
   * Sent to acknowledge that a container changed states.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitContainerStateChange.html
   */
  public submitContainerStateChange () {
    this.add('ecs:SubmitContainerStateChange');
    return this;
  }

  /**
   * Sent to acknowledge that a task changed states.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitTaskStateChange.html
   */
  public submitTaskStateChange () {
    this.add('ecs:SubmitTaskStateChange');
    return this;
  }

  /**
   * Tags the specified resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html
   */
  public tagResource () {
    this.add('ecs:TagResource');
    return this;
  }

  /**
   * Untags the specified resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UntagResource.html
   */
  public untagResource () {
    this.add('ecs:UntagResource');
    return this;
  }

  /**
   * Updates the Amazon ECS container agent on a specified container instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerAgent.html
   */
  public updateContainerAgent () {
    this.add('ecs:UpdateContainerAgent');
    return this;
  }

  /**
   * Enables the user to modify the status of an Amazon ECS container instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerInstancesState.html
   */
  public updateContainerInstancesState () {
    this.add('ecs:UpdateContainerInstancesState');
    return this;
  }

  /**
   * Modifies the desired count, deployment configuration, or task definition used in a service.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html
   */
  public updateService () {
    this.add('ecs:UpdateService');
    return this;
  }

  /**
   * Modifies the primary task set used in a service.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateServicePrimaryTaskSet.html
   */
  public updateServicePrimaryTaskSet () {
    this.add('ecs:UpdateServicePrimaryTaskSet');
    return this;
  }

  /**
   * Updates the specified task set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskSet.html
   */
  public updateTaskSet () {
    this.add('ecs:UpdateTaskSet');
    return this;
  }
}
