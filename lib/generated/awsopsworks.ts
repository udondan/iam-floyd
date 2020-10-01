import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [opsworks](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsopsworks.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Opsworks extends PolicyStatement {
  public servicePrefix = 'opsworks';
  protected actionList: Actions = {
    "AssignInstance": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssignInstance.html",
      "description": "Assign a registered instance to a layer",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "AssignVolume": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssignVolume.html",
      "description": "Assigns one of the stack's registered Amazon EBS volumes to a specified instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "AssociateElasticIp": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssociateElasticIp.html",
      "description": "Associates one of the stack's registered Elastic IP addresses with a specified instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "AttachElasticLoadBalancer": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AttachElasticLoadBalancer.html",
      "description": "Attaches an Elastic Load Balancing load balancer to a specified layer",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "CloneStack": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CloneStack.html",
      "description": "Creates a clone of a specified stack",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "CreateApp": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateApp.html",
      "description": "Creates an app for a specified stack",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "CreateDeployment": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateDeployment.html",
      "description": "Runs deployment or stack commands",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "CreateInstance": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateInstance.html",
      "description": "Creates an instance in a specified stack",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "CreateLayer": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateLayer.html",
      "description": "Creates a layer",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "CreateStack": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateStack.html",
      "description": "Creates a new stack",
      "accessLevel": "Write"
    },
    "CreateUserProfile": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateUserProfile.html",
      "description": "Creates a new user profile",
      "accessLevel": "Write"
    },
    "DeleteApp": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteApp.html",
      "description": "Deletes a specified app",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DeleteInstance": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteInstance.html",
      "description": "Deletes a specified instance, which terminates the associated Amazon EC2 instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DeleteLayer": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteLayer.html",
      "description": "Deletes a specified layer",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DeleteStack": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteStack.html",
      "description": "Deletes a specified stack",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DeleteUserProfile": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteUserProfile.html",
      "description": "Deletes a user profile",
      "accessLevel": "Write"
    },
    "DeregisterEcsCluster": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterEcsCluster.html",
      "description": "Deletes a user profile",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DeregisterElasticIp": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterElasticIp.html",
      "description": "Deregisters a specified Elastic IP address",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DeregisterInstance": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterInstance.html",
      "description": "Deregister a registered Amazon EC2 or on-premises instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DeregisterRdsDbInstance": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterRdsDbInstance.html",
      "description": "Deregisters an Amazon RDS instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DeregisterVolume": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterVolume.html",
      "description": "Deregisters an Amazon EBS volume",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeAgentVersions": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeAgentVersions.html",
      "description": "Describes the available AWS OpsWorks agent versions",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeApps": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeApps.html",
      "description": "Requests a description of a specified set of apps",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeCommands": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeCommands.html",
      "description": "Describes the results of specified commands",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeDeployments": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeDeployments.html",
      "description": "Requests a description of a specified set of deployments",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeEcsClusters": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeEcsClusters.html",
      "description": "Describes Amazon ECS clusters that are registered with a stack",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeElasticIps": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeElasticIps.html",
      "description": "Describes Elastic IP addresses",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeElasticLoadBalancers": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeElasticLoadBalancers.html",
      "description": "Describes a stack's Elastic Load Balancing instances",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeInstances": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeInstances.html",
      "description": "Requests a description of a set of instances",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeLayers": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeLayers.html",
      "description": "Requests a description of one or more layers in a specified stack",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeLoadBasedAutoScaling": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeLoadBasedAutoScaling.html",
      "description": "Describes load-based auto scaling configurations for specified layers",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeMyUserProfile": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeMyUserProfile.html",
      "description": "Describes a user's SSH information",
      "accessLevel": "List"
    },
    "DescribePermissions": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribePermissions.html",
      "description": "Describes the permissions for a specified stack",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeRaidArrays": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeRaidArrays.html",
      "description": "Describe an instance's RAID arrays",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeRdsDbInstances": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeRdsDbInstances.html",
      "description": "Describes Amazon RDS instances",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeServiceErrors": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeServiceErrors.html",
      "description": "Describes AWS OpsWorks service errors",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeStackProvisioningParameters": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStackProvisioningParameters.html",
      "description": "Requests a description of a stack's provisioning parameters",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeStackSummary": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStackSummary.html",
      "description": "Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as running_setup or online",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeStacks": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStacks.html",
      "description": "Requests a description of one or more stacks",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeTimeBasedAutoScaling": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeTimeBasedAutoScaling.html",
      "description": "Describes time-based auto scaling configurations for specified instances",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DescribeUserProfiles": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeUserProfiles.html",
      "description": "Describe specified users",
      "accessLevel": "List"
    },
    "DescribeVolumes": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeVolumes.html",
      "description": "Describes an instance's Amazon EBS volumes",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DetachElasticLoadBalancer": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DetachElasticLoadBalancer.html",
      "description": "Detaches a specified Elastic Load Balancing instance from its layer",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "DisassociateElasticIp": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DisassociateElasticIp.html",
      "description": "Disassociates an Elastic IP address from its instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "GetHostnameSuggestion": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_GetHostnameSuggestion.html",
      "description": "Gets a generated host name for the specified layer, based on the current host name theme",
      "accessLevel": "Read",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "GrantAccess": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RebootInstance.html",
      "description": "Grants RDP access to a Windows instance for a specified time period",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "ListTags": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_ListTags.html",
      "description": "Returns a list of tags that are applied to the specified stack or layer",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "RebootInstance": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RebootInstance.html",
      "description": "Reboots a specified instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "RegisterEcsCluster": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterEcsCluster.html",
      "description": "Registers a specified Amazon ECS cluster with a stack",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "RegisterElasticIp": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterElasticIp.html",
      "description": "Registers an Elastic IP address with a specified stack",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "RegisterInstance": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterInstance.html",
      "description": "Registers instances with a specified stack that were created outside of AWS OpsWorks",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "RegisterRdsDbInstance": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterRdsDbInstance.html",
      "description": "Registers an Amazon RDS instance with a stack",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "RegisterVolume": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterVolume.html",
      "description": "Registers an Amazon EBS volume with a specified stack",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "SetLoadBasedAutoScaling": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetLoadBasedAutoScaling.html",
      "description": "Specify the load-based auto scaling configuration for a specified layer",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "SetPermission": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetPermission.html",
      "description": "Specifies a user's permissions",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "SetTimeBasedAutoScaling": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetTimeBasedAutoScaling.html",
      "description": "Specify the time-based auto scaling configuration for a specified instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "StartInstance": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StartInstance.html",
      "description": "Starts a specified instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "StartStack": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StartStack.html",
      "description": "Starts a stack's instances",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "StopInstance": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StopInstance.html",
      "description": "Stops a specified instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "StopStack": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StopStack.html",
      "description": "Stops a specified stack",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_TagResource.html",
      "description": "Apply tags to a specified stack or layer",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "UnassignInstance": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UnassignInstance.html",
      "description": "Unassigns a registered instance from all of it's layers",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "UnassignVolume": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UnassignVolume.html",
      "description": "Unassigns an assigned Amazon EBS volume",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UntagResource.html",
      "description": "Removes tags from a specified stack or layer",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "UpdateApp": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateApp.html",
      "description": "Updates a specified app",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "UpdateElasticIp": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateElasticIp.html",
      "description": "Updates a registered Elastic IP address's name",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "UpdateInstance": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateInstance.html",
      "description": "Updates a specified instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "UpdateLayer": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateLayer.html",
      "description": "Updates a specified layer",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "UpdateMyUserProfile": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateMyUserProfile.html",
      "description": "Updates a user's SSH public key",
      "accessLevel": "Write"
    },
    "UpdateRdsDbInstance": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateRdsDbInstance.html",
      "description": "Updates an Amazon RDS instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "UpdateStack": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateStack.html",
      "description": "Updates a specified stack",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    },
    "UpdateUserProfile": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateUserProfile.html",
      "description": "Updates a specified user profile",
      "accessLevel": "Permissions management"
    },
    "UpdateVolume": {
      "url": "https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateVolume.html",
      "description": "Updates an Amazon EBS volume's name or mount point",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": false
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "stack": {
      "name": "stack",
      "url": "https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks.html",
      "arn": "arn:${Partition}:opsworks:${Region}:${Account}:stack/${StackId}/",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [opsworks](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsopsworks.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Assign a registered instance to a layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssignInstance.html
   */
  public toAssignInstance() {
    this.to('opsworks:AssignInstance');
    return this;
  }

  /**
   * Assigns one of the stack's registered Amazon EBS volumes to a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssignVolume.html
   */
  public toAssignVolume() {
    this.to('opsworks:AssignVolume');
    return this;
  }

  /**
   * Associates one of the stack's registered Elastic IP addresses with a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssociateElasticIp.html
   */
  public toAssociateElasticIp() {
    this.to('opsworks:AssociateElasticIp');
    return this;
  }

  /**
   * Attaches an Elastic Load Balancing load balancer to a specified layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AttachElasticLoadBalancer.html
   */
  public toAttachElasticLoadBalancer() {
    this.to('opsworks:AttachElasticLoadBalancer');
    return this;
  }

  /**
   * Creates a clone of a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CloneStack.html
   */
  public toCloneStack() {
    this.to('opsworks:CloneStack');
    return this;
  }

  /**
   * Creates an app for a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateApp.html
   */
  public toCreateApp() {
    this.to('opsworks:CreateApp');
    return this;
  }

  /**
   * Runs deployment or stack commands
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateDeployment.html
   */
  public toCreateDeployment() {
    this.to('opsworks:CreateDeployment');
    return this;
  }

  /**
   * Creates an instance in a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateInstance.html
   */
  public toCreateInstance() {
    this.to('opsworks:CreateInstance');
    return this;
  }

  /**
   * Creates a layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateLayer.html
   */
  public toCreateLayer() {
    this.to('opsworks:CreateLayer');
    return this;
  }

  /**
   * Creates a new stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateStack.html
   */
  public toCreateStack() {
    this.to('opsworks:CreateStack');
    return this;
  }

  /**
   * Creates a new user profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateUserProfile.html
   */
  public toCreateUserProfile() {
    this.to('opsworks:CreateUserProfile');
    return this;
  }

  /**
   * Deletes a specified app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteApp.html
   */
  public toDeleteApp() {
    this.to('opsworks:DeleteApp');
    return this;
  }

  /**
   * Deletes a specified instance, which terminates the associated Amazon EC2 instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteInstance.html
   */
  public toDeleteInstance() {
    this.to('opsworks:DeleteInstance');
    return this;
  }

  /**
   * Deletes a specified layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteLayer.html
   */
  public toDeleteLayer() {
    this.to('opsworks:DeleteLayer');
    return this;
  }

  /**
   * Deletes a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteStack.html
   */
  public toDeleteStack() {
    this.to('opsworks:DeleteStack');
    return this;
  }

  /**
   * Deletes a user profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteUserProfile.html
   */
  public toDeleteUserProfile() {
    this.to('opsworks:DeleteUserProfile');
    return this;
  }

  /**
   * Deletes a user profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterEcsCluster.html
   */
  public toDeregisterEcsCluster() {
    this.to('opsworks:DeregisterEcsCluster');
    return this;
  }

  /**
   * Deregisters a specified Elastic IP address
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterElasticIp.html
   */
  public toDeregisterElasticIp() {
    this.to('opsworks:DeregisterElasticIp');
    return this;
  }

  /**
   * Deregister a registered Amazon EC2 or on-premises instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterInstance.html
   */
  public toDeregisterInstance() {
    this.to('opsworks:DeregisterInstance');
    return this;
  }

  /**
   * Deregisters an Amazon RDS instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterRdsDbInstance.html
   */
  public toDeregisterRdsDbInstance() {
    this.to('opsworks:DeregisterRdsDbInstance');
    return this;
  }

  /**
   * Deregisters an Amazon EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterVolume.html
   */
  public toDeregisterVolume() {
    this.to('opsworks:DeregisterVolume');
    return this;
  }

  /**
   * Describes the available AWS OpsWorks agent versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeAgentVersions.html
   */
  public toDescribeAgentVersions() {
    this.to('opsworks:DescribeAgentVersions');
    return this;
  }

  /**
   * Requests a description of a specified set of apps
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeApps.html
   */
  public toDescribeApps() {
    this.to('opsworks:DescribeApps');
    return this;
  }

  /**
   * Describes the results of specified commands
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeCommands.html
   */
  public toDescribeCommands() {
    this.to('opsworks:DescribeCommands');
    return this;
  }

  /**
   * Requests a description of a specified set of deployments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeDeployments.html
   */
  public toDescribeDeployments() {
    this.to('opsworks:DescribeDeployments');
    return this;
  }

  /**
   * Describes Amazon ECS clusters that are registered with a stack
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeEcsClusters.html
   */
  public toDescribeEcsClusters() {
    this.to('opsworks:DescribeEcsClusters');
    return this;
  }

  /**
   * Describes Elastic IP addresses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeElasticIps.html
   */
  public toDescribeElasticIps() {
    this.to('opsworks:DescribeElasticIps');
    return this;
  }

  /**
   * Describes a stack's Elastic Load Balancing instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeElasticLoadBalancers.html
   */
  public toDescribeElasticLoadBalancers() {
    this.to('opsworks:DescribeElasticLoadBalancers');
    return this;
  }

  /**
   * Requests a description of a set of instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeInstances.html
   */
  public toDescribeInstances() {
    this.to('opsworks:DescribeInstances');
    return this;
  }

  /**
   * Requests a description of one or more layers in a specified stack
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeLayers.html
   */
  public toDescribeLayers() {
    this.to('opsworks:DescribeLayers');
    return this;
  }

  /**
   * Describes load-based auto scaling configurations for specified layers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeLoadBasedAutoScaling.html
   */
  public toDescribeLoadBasedAutoScaling() {
    this.to('opsworks:DescribeLoadBasedAutoScaling');
    return this;
  }

  /**
   * Describes a user's SSH information
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeMyUserProfile.html
   */
  public toDescribeMyUserProfile() {
    this.to('opsworks:DescribeMyUserProfile');
    return this;
  }

  /**
   * Describes the permissions for a specified stack
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribePermissions.html
   */
  public toDescribePermissions() {
    this.to('opsworks:DescribePermissions');
    return this;
  }

  /**
   * Describe an instance's RAID arrays
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeRaidArrays.html
   */
  public toDescribeRaidArrays() {
    this.to('opsworks:DescribeRaidArrays');
    return this;
  }

  /**
   * Describes Amazon RDS instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeRdsDbInstances.html
   */
  public toDescribeRdsDbInstances() {
    this.to('opsworks:DescribeRdsDbInstances');
    return this;
  }

  /**
   * Describes AWS OpsWorks service errors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeServiceErrors.html
   */
  public toDescribeServiceErrors() {
    this.to('opsworks:DescribeServiceErrors');
    return this;
  }

  /**
   * Requests a description of a stack's provisioning parameters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStackProvisioningParameters.html
   */
  public toDescribeStackProvisioningParameters() {
    this.to('opsworks:DescribeStackProvisioningParameters');
    return this;
  }

  /**
   * Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as running_setup or online
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStackSummary.html
   */
  public toDescribeStackSummary() {
    this.to('opsworks:DescribeStackSummary');
    return this;
  }

  /**
   * Requests a description of one or more stacks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStacks.html
   */
  public toDescribeStacks() {
    this.to('opsworks:DescribeStacks');
    return this;
  }

  /**
   * Describes time-based auto scaling configurations for specified instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeTimeBasedAutoScaling.html
   */
  public toDescribeTimeBasedAutoScaling() {
    this.to('opsworks:DescribeTimeBasedAutoScaling');
    return this;
  }

  /**
   * Describe specified users
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeUserProfiles.html
   */
  public toDescribeUserProfiles() {
    this.to('opsworks:DescribeUserProfiles');
    return this;
  }

  /**
   * Describes an instance's Amazon EBS volumes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeVolumes.html
   */
  public toDescribeVolumes() {
    this.to('opsworks:DescribeVolumes');
    return this;
  }

  /**
   * Detaches a specified Elastic Load Balancing instance from its layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DetachElasticLoadBalancer.html
   */
  public toDetachElasticLoadBalancer() {
    this.to('opsworks:DetachElasticLoadBalancer');
    return this;
  }

  /**
   * Disassociates an Elastic IP address from its instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DisassociateElasticIp.html
   */
  public toDisassociateElasticIp() {
    this.to('opsworks:DisassociateElasticIp');
    return this;
  }

  /**
   * Gets a generated host name for the specified layer, based on the current host name theme
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_GetHostnameSuggestion.html
   */
  public toGetHostnameSuggestion() {
    this.to('opsworks:GetHostnameSuggestion');
    return this;
  }

  /**
   * Grants RDP access to a Windows instance for a specified time period
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RebootInstance.html
   */
  public toGrantAccess() {
    this.to('opsworks:GrantAccess');
    return this;
  }

  /**
   * Returns a list of tags that are applied to the specified stack or layer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    this.to('opsworks:ListTags');
    return this;
  }

  /**
   * Reboots a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RebootInstance.html
   */
  public toRebootInstance() {
    this.to('opsworks:RebootInstance');
    return this;
  }

  /**
   * Registers a specified Amazon ECS cluster with a stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterEcsCluster.html
   */
  public toRegisterEcsCluster() {
    this.to('opsworks:RegisterEcsCluster');
    return this;
  }

  /**
   * Registers an Elastic IP address with a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterElasticIp.html
   */
  public toRegisterElasticIp() {
    this.to('opsworks:RegisterElasticIp');
    return this;
  }

  /**
   * Registers instances with a specified stack that were created outside of AWS OpsWorks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterInstance.html
   */
  public toRegisterInstance() {
    this.to('opsworks:RegisterInstance');
    return this;
  }

  /**
   * Registers an Amazon RDS instance with a stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterRdsDbInstance.html
   */
  public toRegisterRdsDbInstance() {
    this.to('opsworks:RegisterRdsDbInstance');
    return this;
  }

  /**
   * Registers an Amazon EBS volume with a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterVolume.html
   */
  public toRegisterVolume() {
    this.to('opsworks:RegisterVolume');
    return this;
  }

  /**
   * Specify the load-based auto scaling configuration for a specified layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetLoadBasedAutoScaling.html
   */
  public toSetLoadBasedAutoScaling() {
    this.to('opsworks:SetLoadBasedAutoScaling');
    return this;
  }

  /**
   * Specifies a user's permissions
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetPermission.html
   */
  public toSetPermission() {
    this.to('opsworks:SetPermission');
    return this;
  }

  /**
   * Specify the time-based auto scaling configuration for a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetTimeBasedAutoScaling.html
   */
  public toSetTimeBasedAutoScaling() {
    this.to('opsworks:SetTimeBasedAutoScaling');
    return this;
  }

  /**
   * Starts a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StartInstance.html
   */
  public toStartInstance() {
    this.to('opsworks:StartInstance');
    return this;
  }

  /**
   * Starts a stack's instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StartStack.html
   */
  public toStartStack() {
    this.to('opsworks:StartStack');
    return this;
  }

  /**
   * Stops a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StopInstance.html
   */
  public toStopInstance() {
    this.to('opsworks:StopInstance');
    return this;
  }

  /**
   * Stops a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StopStack.html
   */
  public toStopStack() {
    this.to('opsworks:StopStack');
    return this;
  }

  /**
   * Apply tags to a specified stack or layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('opsworks:TagResource');
    return this;
  }

  /**
   * Unassigns a registered instance from all of it's layers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UnassignInstance.html
   */
  public toUnassignInstance() {
    this.to('opsworks:UnassignInstance');
    return this;
  }

  /**
   * Unassigns an assigned Amazon EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UnassignVolume.html
   */
  public toUnassignVolume() {
    this.to('opsworks:UnassignVolume');
    return this;
  }

  /**
   * Removes tags from a specified stack or layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('opsworks:UntagResource');
    return this;
  }

  /**
   * Updates a specified app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateApp.html
   */
  public toUpdateApp() {
    this.to('opsworks:UpdateApp');
    return this;
  }

  /**
   * Updates a registered Elastic IP address's name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateElasticIp.html
   */
  public toUpdateElasticIp() {
    this.to('opsworks:UpdateElasticIp');
    return this;
  }

  /**
   * Updates a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateInstance.html
   */
  public toUpdateInstance() {
    this.to('opsworks:UpdateInstance');
    return this;
  }

  /**
   * Updates a specified layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateLayer.html
   */
  public toUpdateLayer() {
    this.to('opsworks:UpdateLayer');
    return this;
  }

  /**
   * Updates a user's SSH public key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateMyUserProfile.html
   */
  public toUpdateMyUserProfile() {
    this.to('opsworks:UpdateMyUserProfile');
    return this;
  }

  /**
   * Updates an Amazon RDS instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateRdsDbInstance.html
   */
  public toUpdateRdsDbInstance() {
    this.to('opsworks:UpdateRdsDbInstance');
    return this;
  }

  /**
   * Updates a specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateStack.html
   */
  public toUpdateStack() {
    this.to('opsworks:UpdateStack');
    return this;
  }

  /**
   * Updates a specified user profile
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateUserProfile.html
   */
  public toUpdateUserProfile() {
    this.to('opsworks:UpdateUserProfile');
    return this;
  }

  /**
   * Updates an Amazon EBS volume's name or mount point
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateVolume.html
   */
  public toUpdateVolume() {
    this.to('opsworks:UpdateVolume');
    return this;
  }

  /**
   * Adds a resource of type stack to the statement
   *
   * https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks.html
   *
   * @param stackId - Identifier for the stackId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onStack(stackId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:opsworks:${Region}:${Account}:stack/${StackId}/';
    arn = arn.replace('${StackId}', stackId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
