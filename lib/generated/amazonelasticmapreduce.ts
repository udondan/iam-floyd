import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service elasticmapreduce
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticmapreduce.html
 */
export class Elasticmapreduce extends PolicyStatement {
  public servicePrefix = 'elasticmapreduce';
  public actions: Actions = {
    "AddInstanceFleet": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_AddInstanceFleet.html",
      "description": "Grants permission to add an instance fleet to a running cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "AddInstanceGroups": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_AddInstanceGroups.html",
      "description": "Grants permission to add instance groups to a running cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "AddJobFlowSteps": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_AddJobFlowSteps.html",
      "description": "Grants permission to add new steps to a running cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "AddTags": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_AddTags.html",
      "description": "Grants permission to add tags to an Amazon EMR resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "editor": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "elasticmapreduce:RequestTag/${TagKey}"
      ]
    },
    "CancelSteps": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_CancelSteps.html",
      "description": "Grants permission to cancel a pending step or steps in a running cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "CreateEditor": {
      "url": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-create.html",
      "description": "Grants permission to create an EMR notebook.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "elasticmapreduce:RequestTag/${TagKey}"
      ]
    },
    "CreateSecurityConfiguration": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_CreateSecurityConfiguration.html",
      "description": "Grants permission to create a security configuration.",
      "accessLevel": "Write"
    },
    "DeleteEditor": {
      "url": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-deleting",
      "description": "Grants permission to delete an EMR notebook.",
      "accessLevel": "Write",
      "resourceTypes": {
        "editor": {
          "required": true
        }
      }
    },
    "DeleteSecurityConfiguration": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_DeleteSecurityConfiguration.html",
      "description": "Grants permission to delete a security configuration.",
      "accessLevel": "Write"
    },
    "DescribeCluster": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeCluster.html",
      "description": "Grants permission to get details about a cluster, including status, hardware and software configuration, VPC settings, and so on.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DescribeEditor": {
      "url": "",
      "description": "Grants permission to view information about a notebook, including status, user, role, tags, location, and more.",
      "accessLevel": "Read",
      "resourceTypes": {
        "editor": {
          "required": true
        }
      }
    },
    "DescribeJobFlows": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeJobFlows.html",
      "description": "This API is deprecated and will eventually be removed. We recommend you use ListClusters, DescribeCluster, ListSteps, ListInstanceGroups and ListBootstrapActions instead.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DescribeSecurityConfiguration": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeSecurityConfiguration.html",
      "description": "Grants permission to get details of a security configuration.",
      "accessLevel": "Read"
    },
    "DescribeStep": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeStep.html",
      "description": "Grants permission to get details about a cluster step.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "GetBlockPublicAccessConfiguration": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_GetBlockPublicAccessConfiguration.html",
      "description": "Grants permission to retrieve the EMR block public access configuration for the AWS account in the Region.",
      "accessLevel": "Read"
    },
    "ListBootstrapActions": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_ListBootstrapActions.html",
      "description": "Grants permission to get details about the bootstrap actions associated with a cluster.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ListClusters": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_ListClusters.html",
      "description": "Grants permission to get the status of accessible clusters.",
      "accessLevel": "List"
    },
    "ListEditors": {
      "url": "",
      "description": "Grants permission to list summary information for accessible EMR notebooks.",
      "accessLevel": "List"
    },
    "ListInstanceFleets": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstanceFleets.html",
      "description": "Grants permission to get details of instance fleets in a cluster.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ListInstanceGroups": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstanceGroups.html",
      "description": "Grants permission to get details of instance groups in a cluster.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ListInstances": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstances.html",
      "description": "Grants permission to get details about the Amazon EC2 instances in a cluster.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ListSecurityConfigurations": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_ListSecurityConfigurations.html",
      "description": "Grants permission to list available security configurations in this account by name, along with creation dates and times.",
      "accessLevel": "List"
    },
    "ListSteps": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_ListSteps.html",
      "description": "Grants permission to list steps associated with a cluster.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ModifyCluster": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyCluster.html",
      "description": "Grants permission to change cluster settings such as number of steps that can be executed concurrently for a cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ModifyInstanceFleet": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyInstanceFleet.html",
      "description": "Grants permission to change the target On-Demand and target Spot capacities for a instance fleet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ModifyInstanceGroups": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyInstanceGroups.html",
      "description": "Grants permission to change the number and configuration of EC2 instances for an instance group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "OpenEditorInConsole": {
      "url": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor",
      "description": "Grants permission to launch the Jupyter notebook editor for an EMR notebook from within the console.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "editor": {
          "required": true
        }
      }
    },
    "PutAutoScalingPolicy": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_PutAutoScalingPolicy.html",
      "description": "Grants permission to create or update an automatic scaling policy for a core instance group or task instance group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "PutBlockPublicAccessConfiguration": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_PutBlockPublicAccessConfiguration.html",
      "description": "Grants permission to create or update the EMR block public access configuration for the AWS account in the Region.",
      "accessLevel": "Permissions management"
    },
    "RemoveAutoScalingPolicy": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveAutoScalingPolicy.html",
      "description": "Grants permission to remove an automatic scaling policy from an instance group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "RemoveTags": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveTags.html",
      "description": "Grants permission to remove tags from an Amazon EMR resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "editor": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "RunJobFlow": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_RunJobFlow.html",
      "description": "Grants permission to create and launch a cluster (job flow).",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "elasticmapreduce:RequestTag/${TagKey}"
      ]
    },
    "SetTerminationProtection": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_SetTerminationProtection.html",
      "description": "Grants permission to add and remove termination protection for a cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "StartEditor": {
      "url": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html",
      "description": "Grants permission to start an EMR notebook.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "editor": {
          "required": true
        }
      }
    },
    "StopEditor": {
      "url": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html",
      "description": "Grants permission to shut down an EMR notebook.",
      "accessLevel": "Write",
      "resourceTypes": {
        "editor": {
          "required": true
        }
      }
    },
    "TerminateJobFlows": {
      "url": "https://docs.aws.amazon.com/emr/latest/APIReference/API_TerminateJobFlows.html",
      "description": "Grants permission to terminate a cluster (job flow).",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ViewEventsFromAllClustersInConsole": {
      "url": "",
      "description": "Grants permission to use the EMR management console to view events from all clusters.",
      "accessLevel": "List"
    }
  };
  public resourceTypes: ResourceTypes = {
    "cluster": {
      "name": "cluster",
      "url": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-overview.html",
      "arn": "arn:${Partition}:elasticmapreduce:${Region}:${Account}:cluster/${ClusterId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "elasticmapreduce:ResourceTag/${TagKey}"
      ]
    },
    "editor": {
      "name": "editor",
      "url": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html",
      "arn": "arn:${Partition}:elasticmapreduce:${Region}:${Account}:editor/${EditorId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "elasticmapreduce:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service elasticmapreduce
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticmapreduce.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to add an instance fleet to a running cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_AddInstanceFleet.html
   */
  public addInstanceFleet() {
    this.add('elasticmapreduce:AddInstanceFleet');
    return this;
  }

  /**
   * Grants permission to add instance groups to a running cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_AddInstanceGroups.html
   */
  public addInstanceGroups() {
    this.add('elasticmapreduce:AddInstanceGroups');
    return this;
  }

  /**
   * Grants permission to add new steps to a running cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_AddJobFlowSteps.html
   */
  public addJobFlowSteps() {
    this.add('elasticmapreduce:AddJobFlowSteps');
    return this;
  }

  /**
   * Grants permission to add tags to an Amazon EMR resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_AddTags.html
   */
  public addTags() {
    this.add('elasticmapreduce:AddTags');
    return this;
  }

  /**
   * Grants permission to cancel a pending step or steps in a running cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_CancelSteps.html
   */
  public cancelSteps() {
    this.add('elasticmapreduce:CancelSteps');
    return this;
  }

  /**
   * Grants permission to create an EMR notebook.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-create.html
   */
  public createEditor() {
    this.add('elasticmapreduce:CreateEditor');
    return this;
  }

  /**
   * Grants permission to create a security configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_CreateSecurityConfiguration.html
   */
  public createSecurityConfiguration() {
    this.add('elasticmapreduce:CreateSecurityConfiguration');
    return this;
  }

  /**
   * Grants permission to delete an EMR notebook.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-deleting
   */
  public deleteEditor() {
    this.add('elasticmapreduce:DeleteEditor');
    return this;
  }

  /**
   * Grants permission to delete a security configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DeleteSecurityConfiguration.html
   */
  public deleteSecurityConfiguration() {
    this.add('elasticmapreduce:DeleteSecurityConfiguration');
    return this;
  }

  /**
   * Grants permission to get details about a cluster, including status, hardware and software configuration, VPC settings, and so on.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeCluster.html
   */
  public describeCluster() {
    this.add('elasticmapreduce:DescribeCluster');
    return this;
  }

  /**
   * Grants permission to view information about a notebook, including status, user, role, tags, location, and more.
   *
   * Access Level: Read
   */
  public describeEditor() {
    this.add('elasticmapreduce:DescribeEditor');
    return this;
  }

  /**
   * This API is deprecated and will eventually be removed. We recommend you use ListClusters, DescribeCluster, ListSteps, ListInstanceGroups and ListBootstrapActions instead.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeJobFlows.html
   */
  public describeJobFlows() {
    this.add('elasticmapreduce:DescribeJobFlows');
    return this;
  }

  /**
   * Grants permission to get details of a security configuration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeSecurityConfiguration.html
   */
  public describeSecurityConfiguration() {
    this.add('elasticmapreduce:DescribeSecurityConfiguration');
    return this;
  }

  /**
   * Grants permission to get details about a cluster step.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeStep.html
   */
  public describeStep() {
    this.add('elasticmapreduce:DescribeStep');
    return this;
  }

  /**
   * Grants permission to retrieve the EMR block public access configuration for the AWS account in the Region.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_GetBlockPublicAccessConfiguration.html
   */
  public getBlockPublicAccessConfiguration() {
    this.add('elasticmapreduce:GetBlockPublicAccessConfiguration');
    return this;
  }

  /**
   * Grants permission to get details about the bootstrap actions associated with a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListBootstrapActions.html
   */
  public listBootstrapActions() {
    this.add('elasticmapreduce:ListBootstrapActions');
    return this;
  }

  /**
   * Grants permission to get the status of accessible clusters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListClusters.html
   */
  public listClusters() {
    this.add('elasticmapreduce:ListClusters');
    return this;
  }

  /**
   * Grants permission to list summary information for accessible EMR notebooks.
   *
   * Access Level: List
   */
  public listEditors() {
    this.add('elasticmapreduce:ListEditors');
    return this;
  }

  /**
   * Grants permission to get details of instance fleets in a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstanceFleets.html
   */
  public listInstanceFleets() {
    this.add('elasticmapreduce:ListInstanceFleets');
    return this;
  }

  /**
   * Grants permission to get details of instance groups in a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstanceGroups.html
   */
  public listInstanceGroups() {
    this.add('elasticmapreduce:ListInstanceGroups');
    return this;
  }

  /**
   * Grants permission to get details about the Amazon EC2 instances in a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstances.html
   */
  public listInstances() {
    this.add('elasticmapreduce:ListInstances');
    return this;
  }

  /**
   * Grants permission to list available security configurations in this account by name, along with creation dates and times.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListSecurityConfigurations.html
   */
  public listSecurityConfigurations() {
    this.add('elasticmapreduce:ListSecurityConfigurations');
    return this;
  }

  /**
   * Grants permission to list steps associated with a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListSteps.html
   */
  public listSteps() {
    this.add('elasticmapreduce:ListSteps');
    return this;
  }

  /**
   * Grants permission to change cluster settings such as number of steps that can be executed concurrently for a cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyCluster.html
   */
  public modifyCluster() {
    this.add('elasticmapreduce:ModifyCluster');
    return this;
  }

  /**
   * Grants permission to change the target On-Demand and target Spot capacities for a instance fleet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyInstanceFleet.html
   */
  public modifyInstanceFleet() {
    this.add('elasticmapreduce:ModifyInstanceFleet');
    return this;
  }

  /**
   * Grants permission to change the number and configuration of EC2 instances for an instance group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyInstanceGroups.html
   */
  public modifyInstanceGroups() {
    this.add('elasticmapreduce:ModifyInstanceGroups');
    return this;
  }

  /**
   * Grants permission to launch the Jupyter notebook editor for an EMR notebook from within the console.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  public openEditorInConsole() {
    this.add('elasticmapreduce:OpenEditorInConsole');
    return this;
  }

  /**
   * Grants permission to create or update an automatic scaling policy for a core instance group or task instance group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_PutAutoScalingPolicy.html
   */
  public putAutoScalingPolicy() {
    this.add('elasticmapreduce:PutAutoScalingPolicy');
    return this;
  }

  /**
   * Grants permission to create or update the EMR block public access configuration for the AWS account in the Region.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_PutBlockPublicAccessConfiguration.html
   */
  public putBlockPublicAccessConfiguration() {
    this.add('elasticmapreduce:PutBlockPublicAccessConfiguration');
    return this;
  }

  /**
   * Grants permission to remove an automatic scaling policy from an instance group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveAutoScalingPolicy.html
   */
  public removeAutoScalingPolicy() {
    this.add('elasticmapreduce:RemoveAutoScalingPolicy');
    return this;
  }

  /**
   * Grants permission to remove tags from an Amazon EMR resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveTags.html
   */
  public removeTags() {
    this.add('elasticmapreduce:RemoveTags');
    return this;
  }

  /**
   * Grants permission to create and launch a cluster (job flow).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_RunJobFlow.html
   */
  public runJobFlow() {
    this.add('elasticmapreduce:RunJobFlow');
    return this;
  }

  /**
   * Grants permission to add and remove termination protection for a cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_SetTerminationProtection.html
   */
  public setTerminationProtection() {
    this.add('elasticmapreduce:SetTerminationProtection');
    return this;
  }

  /**
   * Grants permission to start an EMR notebook.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   */
  public startEditor() {
    this.add('elasticmapreduce:StartEditor');
    return this;
  }

  /**
   * Grants permission to shut down an EMR notebook.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html
   */
  public stopEditor() {
    this.add('elasticmapreduce:StopEditor');
    return this;
  }

  /**
   * Grants permission to terminate a cluster (job flow).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_TerminateJobFlows.html
   */
  public terminateJobFlows() {
    this.add('elasticmapreduce:TerminateJobFlows');
    return this;
  }

  /**
   * Grants permission to use the EMR management console to view events from all clusters.
   *
   * Access Level: List
   */
  public viewEventsFromAllClustersInConsole() {
    this.add('elasticmapreduce:ViewEventsFromAllClustersInConsole');
    return this;
  }

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-overview.html
   *
   * @param clusterId - Identifier for the clusterId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   *  - elasticmapreduce:ResourceTag/${TagKey}
   */
  public onCluster(clusterId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticmapreduce:${Region}:${Account}:cluster/${ClusterId}';
    arn = arn.replace('${ClusterId}', clusterId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type editor to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html
   *
   * @param editorId - Identifier for the editorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   *  - elasticmapreduce:ResourceTag/${TagKey}
   */
  public onEditor(editorId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticmapreduce:${Region}:${Account}:editor/${EditorId}';
    arn = arn.replace('${EditorId}', editorId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on whether the tag and value pair is provided with the action
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`elasticmapreduce:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tag and value pair associated with an Amazon EMR resource
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`elasticmapreduce:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
