import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service opsworks
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsopsworks.html
 */
export class Opsworks extends PolicyStatement {
    public servicePrefix = 'opsworks';
    public actions : Actions = {
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

    /**
     * Assign a registered instance to a layer
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssignInstance.html
     */
    public assignInstance () {
        this.add('opsworks:AssignInstance');
        return this;
    }

    /**
     * Assigns one of the stack's registered Amazon EBS volumes to a specified instance
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssignVolume.html
     */
    public assignVolume () {
        this.add('opsworks:AssignVolume');
        return this;
    }

    /**
     * Associates one of the stack's registered Elastic IP addresses with a specified instance
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssociateElasticIp.html
     */
    public associateElasticIp () {
        this.add('opsworks:AssociateElasticIp');
        return this;
    }

    /**
     * Attaches an Elastic Load Balancing load balancer to a specified layer
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AttachElasticLoadBalancer.html
     */
    public attachElasticLoadBalancer () {
        this.add('opsworks:AttachElasticLoadBalancer');
        return this;
    }

    /**
     * Creates a clone of a specified stack
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CloneStack.html
     */
    public cloneStack () {
        this.add('opsworks:CloneStack');
        return this;
    }

    /**
     * Creates an app for a specified stack
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateApp.html
     */
    public createApp () {
        this.add('opsworks:CreateApp');
        return this;
    }

    /**
     * Runs deployment or stack commands
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateDeployment.html
     */
    public createDeployment () {
        this.add('opsworks:CreateDeployment');
        return this;
    }

    /**
     * Creates an instance in a specified stack
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateInstance.html
     */
    public createInstance () {
        this.add('opsworks:CreateInstance');
        return this;
    }

    /**
     * Creates a layer
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateLayer.html
     */
    public createLayer () {
        this.add('opsworks:CreateLayer');
        return this;
    }

    /**
     * Creates a new stack
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateStack.html
     */
    public createStack () {
        this.add('opsworks:CreateStack');
        return this;
    }

    /**
     * Creates a new user profile
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateUserProfile.html
     */
    public createUserProfile () {
        this.add('opsworks:CreateUserProfile');
        return this;
    }

    /**
     * Deletes a specified app
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteApp.html
     */
    public deleteApp () {
        this.add('opsworks:DeleteApp');
        return this;
    }

    /**
     * Deletes a specified instance, which terminates the associated Amazon EC2 instance
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteInstance.html
     */
    public deleteInstance () {
        this.add('opsworks:DeleteInstance');
        return this;
    }

    /**
     * Deletes a specified layer
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteLayer.html
     */
    public deleteLayer () {
        this.add('opsworks:DeleteLayer');
        return this;
    }

    /**
     * Deletes a specified stack
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteStack.html
     */
    public deleteStack () {
        this.add('opsworks:DeleteStack');
        return this;
    }

    /**
     * Deletes a user profile
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteUserProfile.html
     */
    public deleteUserProfile () {
        this.add('opsworks:DeleteUserProfile');
        return this;
    }

    /**
     * Deletes a user profile
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterEcsCluster.html
     */
    public deregisterEcsCluster () {
        this.add('opsworks:DeregisterEcsCluster');
        return this;
    }

    /**
     * Deregisters a specified Elastic IP address
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterElasticIp.html
     */
    public deregisterElasticIp () {
        this.add('opsworks:DeregisterElasticIp');
        return this;
    }

    /**
     * Deregister a registered Amazon EC2 or on-premises instance
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterInstance.html
     */
    public deregisterInstance () {
        this.add('opsworks:DeregisterInstance');
        return this;
    }

    /**
     * Deregisters an Amazon RDS instance
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterRdsDbInstance.html
     */
    public deregisterRdsDbInstance () {
        this.add('opsworks:DeregisterRdsDbInstance');
        return this;
    }

    /**
     * Deregisters an Amazon EBS volume
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterVolume.html
     */
    public deregisterVolume () {
        this.add('opsworks:DeregisterVolume');
        return this;
    }

    /**
     * Describes the available AWS OpsWorks agent versions
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeAgentVersions.html
     */
    public describeAgentVersions () {
        this.add('opsworks:DescribeAgentVersions');
        return this;
    }

    /**
     * Requests a description of a specified set of apps
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeApps.html
     */
    public describeApps () {
        this.add('opsworks:DescribeApps');
        return this;
    }

    /**
     * Describes the results of specified commands
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeCommands.html
     */
    public describeCommands () {
        this.add('opsworks:DescribeCommands');
        return this;
    }

    /**
     * Requests a description of a specified set of deployments
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeDeployments.html
     */
    public describeDeployments () {
        this.add('opsworks:DescribeDeployments');
        return this;
    }

    /**
     * Describes Amazon ECS clusters that are registered with a stack
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeEcsClusters.html
     */
    public describeEcsClusters () {
        this.add('opsworks:DescribeEcsClusters');
        return this;
    }

    /**
     * Describes Elastic IP addresses
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeElasticIps.html
     */
    public describeElasticIps () {
        this.add('opsworks:DescribeElasticIps');
        return this;
    }

    /**
     * Describes a stack's Elastic Load Balancing instances
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeElasticLoadBalancers.html
     */
    public describeElasticLoadBalancers () {
        this.add('opsworks:DescribeElasticLoadBalancers');
        return this;
    }

    /**
     * Requests a description of a set of instances
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeInstances.html
     */
    public describeInstances () {
        this.add('opsworks:DescribeInstances');
        return this;
    }

    /**
     * Requests a description of one or more layers in a specified stack
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeLayers.html
     */
    public describeLayers () {
        this.add('opsworks:DescribeLayers');
        return this;
    }

    /**
     * Describes load-based auto scaling configurations for specified layers
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeLoadBasedAutoScaling.html
     */
    public describeLoadBasedAutoScaling () {
        this.add('opsworks:DescribeLoadBasedAutoScaling');
        return this;
    }

    /**
     * Describes a user's SSH information
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeMyUserProfile.html
     */
    public describeMyUserProfile () {
        this.add('opsworks:DescribeMyUserProfile');
        return this;
    }

    /**
     * Describes the permissions for a specified stack
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribePermissions.html
     */
    public describePermissions () {
        this.add('opsworks:DescribePermissions');
        return this;
    }

    /**
     * Describe an instance's RAID arrays
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeRaidArrays.html
     */
    public describeRaidArrays () {
        this.add('opsworks:DescribeRaidArrays');
        return this;
    }

    /**
     * Describes Amazon RDS instances
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeRdsDbInstances.html
     */
    public describeRdsDbInstances () {
        this.add('opsworks:DescribeRdsDbInstances');
        return this;
    }

    /**
     * Describes AWS OpsWorks service errors
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeServiceErrors.html
     */
    public describeServiceErrors () {
        this.add('opsworks:DescribeServiceErrors');
        return this;
    }

    /**
     * Requests a description of a stack's provisioning parameters
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStackProvisioningParameters.html
     */
    public describeStackProvisioningParameters () {
        this.add('opsworks:DescribeStackProvisioningParameters');
        return this;
    }

    /**
     * Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as running_setup or online
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStackSummary.html
     */
    public describeStackSummary () {
        this.add('opsworks:DescribeStackSummary');
        return this;
    }

    /**
     * Requests a description of one or more stacks
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStacks.html
     */
    public describeStacks () {
        this.add('opsworks:DescribeStacks');
        return this;
    }

    /**
     * Describes time-based auto scaling configurations for specified instances
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeTimeBasedAutoScaling.html
     */
    public describeTimeBasedAutoScaling () {
        this.add('opsworks:DescribeTimeBasedAutoScaling');
        return this;
    }

    /**
     * Describe specified users
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeUserProfiles.html
     */
    public describeUserProfiles () {
        this.add('opsworks:DescribeUserProfiles');
        return this;
    }

    /**
     * Describes an instance's Amazon EBS volumes
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeVolumes.html
     */
    public describeVolumes () {
        this.add('opsworks:DescribeVolumes');
        return this;
    }

    /**
     * Detaches a specified Elastic Load Balancing instance from its layer
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DetachElasticLoadBalancer.html
     */
    public detachElasticLoadBalancer () {
        this.add('opsworks:DetachElasticLoadBalancer');
        return this;
    }

    /**
     * Disassociates an Elastic IP address from its instance
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DisassociateElasticIp.html
     */
    public disassociateElasticIp () {
        this.add('opsworks:DisassociateElasticIp');
        return this;
    }

    /**
     * Gets a generated host name for the specified layer, based on the current host name theme
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_GetHostnameSuggestion.html
     */
    public getHostnameSuggestion () {
        this.add('opsworks:GetHostnameSuggestion');
        return this;
    }

    /**
     * Grants RDP access to a Windows instance for a specified time period
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RebootInstance.html
     */
    public grantAccess () {
        this.add('opsworks:GrantAccess');
        return this;
    }

    /**
     * Returns a list of tags that are applied to the specified stack or layer
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_ListTags.html
     */
    public listTags () {
        this.add('opsworks:ListTags');
        return this;
    }

    /**
     * Reboots a specified instance
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RebootInstance.html
     */
    public rebootInstance () {
        this.add('opsworks:RebootInstance');
        return this;
    }

    /**
     * Registers a specified Amazon ECS cluster with a stack
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterEcsCluster.html
     */
    public registerEcsCluster () {
        this.add('opsworks:RegisterEcsCluster');
        return this;
    }

    /**
     * Registers an Elastic IP address with a specified stack
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterElasticIp.html
     */
    public registerElasticIp () {
        this.add('opsworks:RegisterElasticIp');
        return this;
    }

    /**
     * Registers instances with a specified stack that were created outside of AWS OpsWorks
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterInstance.html
     */
    public registerInstance () {
        this.add('opsworks:RegisterInstance');
        return this;
    }

    /**
     * Registers an Amazon RDS instance with a stack
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterRdsDbInstance.html
     */
    public registerRdsDbInstance () {
        this.add('opsworks:RegisterRdsDbInstance');
        return this;
    }

    /**
     * Registers an Amazon EBS volume with a specified stack
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterVolume.html
     */
    public registerVolume () {
        this.add('opsworks:RegisterVolume');
        return this;
    }

    /**
     * Specify the load-based auto scaling configuration for a specified layer
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetLoadBasedAutoScaling.html
     */
    public setLoadBasedAutoScaling () {
        this.add('opsworks:SetLoadBasedAutoScaling');
        return this;
    }

    /**
     * Specifies a user's permissions
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetPermission.html
     */
    public setPermission () {
        this.add('opsworks:SetPermission');
        return this;
    }

    /**
     * Specify the time-based auto scaling configuration for a specified instance
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetTimeBasedAutoScaling.html
     */
    public setTimeBasedAutoScaling () {
        this.add('opsworks:SetTimeBasedAutoScaling');
        return this;
    }

    /**
     * Starts a specified instance
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StartInstance.html
     */
    public startInstance () {
        this.add('opsworks:StartInstance');
        return this;
    }

    /**
     * Starts a stack's instances
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StartStack.html
     */
    public startStack () {
        this.add('opsworks:StartStack');
        return this;
    }

    /**
     * Stops a specified instance
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StopInstance.html
     */
    public stopInstance () {
        this.add('opsworks:StopInstance');
        return this;
    }

    /**
     * Stops a specified stack
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StopStack.html
     */
    public stopStack () {
        this.add('opsworks:StopStack');
        return this;
    }

    /**
     * Apply tags to a specified stack or layer
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_TagResource.html
     */
    public tagResource () {
        this.add('opsworks:TagResource');
        return this;
    }

    /**
     * Unassigns a registered instance from all of it's layers
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UnassignInstance.html
     */
    public unassignInstance () {
        this.add('opsworks:UnassignInstance');
        return this;
    }

    /**
     * Unassigns an assigned Amazon EBS volume
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UnassignVolume.html
     */
    public unassignVolume () {
        this.add('opsworks:UnassignVolume');
        return this;
    }

    /**
     * Removes tags from a specified stack or layer
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UntagResource.html
     */
    public untagResource () {
        this.add('opsworks:UntagResource');
        return this;
    }

    /**
     * Updates a specified app
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateApp.html
     */
    public updateApp () {
        this.add('opsworks:UpdateApp');
        return this;
    }

    /**
     * Updates a registered Elastic IP address's name
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateElasticIp.html
     */
    public updateElasticIp () {
        this.add('opsworks:UpdateElasticIp');
        return this;
    }

    /**
     * Updates a specified instance
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateInstance.html
     */
    public updateInstance () {
        this.add('opsworks:UpdateInstance');
        return this;
    }

    /**
     * Updates a specified layer
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateLayer.html
     */
    public updateLayer () {
        this.add('opsworks:UpdateLayer');
        return this;
    }

    /**
     * Updates a user's SSH public key
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateMyUserProfile.html
     */
    public updateMyUserProfile () {
        this.add('opsworks:UpdateMyUserProfile');
        return this;
    }

    /**
     * Updates an Amazon RDS instance
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateRdsDbInstance.html
     */
    public updateRdsDbInstance () {
        this.add('opsworks:UpdateRdsDbInstance');
        return this;
    }

    /**
     * Updates a specified stack
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateStack.html
     */
    public updateStack () {
        this.add('opsworks:UpdateStack');
        return this;
    }

    /**
     * Updates a specified user profile
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateUserProfile.html
     */
    public updateUserProfile () {
        this.add('opsworks:UpdateUserProfile');
        return this;
    }

    /**
     * Updates an Amazon EBS volume's name or mount point
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateVolume.html
     */
    public updateVolume () {
        this.add('opsworks:UpdateVolume');
        return this;
    }
}
