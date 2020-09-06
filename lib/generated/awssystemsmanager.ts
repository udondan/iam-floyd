import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [ssm](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssystemsmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ssm extends PolicyStatement {
  public servicePrefix = 'ssm';
  protected actionList: Actions = {
    "AddTagsToResource": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AddTagsToResource.html",
      "description": "Grants permission to add or overwrite one or more tags for a specified AWS resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "document": {
          "required": false
        },
        "maintenancewindow": {
          "required": false
        },
        "managed-instance": {
          "required": false
        },
        "parameter": {
          "required": false
        },
        "patchbaseline": {
          "required": false
        }
      }
    },
    "CancelCommand": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CancelCommand.html",
      "description": "Grants permission to cancel a specified Run Command command",
      "accessLevel": "Write"
    },
    "CancelMaintenanceWindowExecution": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CancelMaintenanceWindowExecution.html",
      "description": "Grants permission to cancel an in-progress maintenance window execution",
      "accessLevel": "Write"
    },
    "CreateActivation": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateActivation.html",
      "description": "Grants permission to create an activation that is used to register on-premises servers and virtual machines (VMs) with Systems Manager",
      "accessLevel": "Write"
    },
    "CreateAssociation": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociation.html",
      "description": "Grants permission to associate a specified Systems Manager document with specified instances or other targets",
      "accessLevel": "Write",
      "resourceTypes": {
        "document": {
          "required": true
        },
        "instance": {
          "required": false
        },
        "managed-instance": {
          "required": false
        }
      }
    },
    "CreateAssociationBatch": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociationBatch.html",
      "description": "Grants permission to combine entries for multiple CreateAssociation operations in a single command",
      "accessLevel": "Write",
      "resourceTypes": {
        "document": {
          "required": true
        },
        "instance": {
          "required": false
        },
        "managed-instance": {
          "required": false
        }
      }
    },
    "CreateDocument": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateDocument.html",
      "description": "Grants permission to create a Systems Manager SSM document",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "document": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateMaintenanceWindow": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateMaintenanceWindow.html",
      "description": "Grants permission to create a maintenance window",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateOpsItem": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateOpsItem.html",
      "description": "Grants permission to create an OpsItem in OpsCenter",
      "accessLevel": "Write"
    },
    "CreatePatchBaseline": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreatePatchBaseline.html",
      "description": "Grants permission to create a patch baseline",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateResourceDataSync": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateResourceDataSync.html",
      "description": "Grants permission to create a resource data sync configuration, which regularly collects inventory data from managed instances and updates the data in an Amazon S3 bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "resourcedatasync": {
          "required": true
        }
      },
      "conditions": [
        "ssm:SyncType"
      ]
    },
    "DeleteActivation": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteActivation.html",
      "description": "Grants permission to delete a specified activation for managed instances",
      "accessLevel": "Write"
    },
    "DeleteAssociation": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteAssociation.html",
      "description": "Grants permission to disassociate a specified SSM document from a specified instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "association": {
          "required": false
        },
        "document": {
          "required": false
        },
        "instance": {
          "required": false
        },
        "managed-instance": {
          "required": false
        }
      }
    },
    "DeleteDocument": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteDocument.html",
      "description": "Grants permission to delete a specified SSM document and its instance associations",
      "accessLevel": "Write",
      "resourceTypes": {
        "document": {
          "required": true
        }
      }
    },
    "DeleteInventory": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteInventory.html",
      "description": "Grants permission to delete a specified custom inventory type, or the data associated with a custom inventory type",
      "accessLevel": "Write"
    },
    "DeleteMaintenanceWindow": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteMaintenanceWindow.html",
      "description": "Grants permission to delete a specified maintenance window",
      "accessLevel": "Write",
      "resourceTypes": {
        "maintenancewindow": {
          "required": true
        }
      }
    },
    "DeleteParameter": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameter.html",
      "description": "Grants permission to delete a specified SSM parameter",
      "accessLevel": "Write",
      "resourceTypes": {
        "parameter": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}"
      ]
    },
    "DeleteParameters": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameters.html",
      "description": "Grants permission to delete multiple specified SSM parameters",
      "accessLevel": "Write",
      "resourceTypes": {
        "parameter": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}"
      ]
    },
    "DeletePatchBaseline": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeletePatchBaseline.html",
      "description": "Grants permission to delete a specified patch baseline",
      "accessLevel": "Write",
      "resourceTypes": {
        "patchbaseline": {
          "required": true
        }
      }
    },
    "DeleteResourceDataSync": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteResourceDataSync.html",
      "description": "Grants permission to delete a specified resource data sync",
      "accessLevel": "Write",
      "resourceTypes": {
        "resourcedatasync": {
          "required": true
        }
      },
      "conditions": [
        "ssm:SyncType"
      ]
    },
    "DeregisterManagedInstance": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterManagedInstance.html",
      "description": "Grants permission to deregister a specified on-premises server or virtual machine (VM) from Systems Manager",
      "accessLevel": "Write",
      "resourceTypes": {
        "managed-instance": {
          "required": true
        }
      }
    },
    "DeregisterPatchBaselineForPatchGroup": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterPatchBaselineForPatchGroup.html",
      "description": "Grants permission to deregister a specified patch baseline from being the default patch baseline for a specified patch group",
      "accessLevel": "Write",
      "resourceTypes": {
        "patchbaseline": {
          "required": true
        }
      }
    },
    "DeregisterTargetFromMaintenanceWindow": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterTargetFromMaintenanceWindow.html",
      "description": "Grants permission to deregister a specified target from a maintenance window",
      "accessLevel": "Write",
      "resourceTypes": {
        "maintenancewindow": {
          "required": true
        }
      }
    },
    "DeregisterTaskFromMaintenanceWindow": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterTaskFromMaintenanceWindow.html",
      "description": "Grants permission to deregister a specified task from a maintenance window",
      "accessLevel": "Write",
      "resourceTypes": {
        "maintenancewindow": {
          "required": true
        }
      }
    },
    "DescribeActivations": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeActivations.html",
      "description": "Grants permission to view details about a specified managed instance activation, such as when it was created and the number of instances registered using the activation",
      "accessLevel": "Read"
    },
    "DescribeAssociation": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociation.html",
      "description": "Grants permission to view details about the specified association for a specified instance or target",
      "accessLevel": "Read",
      "resourceTypes": {
        "association": {
          "required": false
        },
        "document": {
          "required": false
        },
        "instance": {
          "required": false
        },
        "managed-instance": {
          "required": false
        }
      }
    },
    "DescribeAssociationExecutionTargets": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociationExecutionTargets.html",
      "description": "Grants permission to view information about a specified association execution",
      "accessLevel": "Read"
    },
    "DescribeAssociationExecutions": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociationExecutions.html",
      "description": "Grants permission to view all executions for a specified association",
      "accessLevel": "Read"
    },
    "DescribeAutomationExecutions": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAutomationExecutions.html",
      "description": "Grants permission to view details about all active and terminated Automation executions",
      "accessLevel": "Read"
    },
    "DescribeAutomationStepExecutions": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAutomationStepExecutions.html",
      "description": "Grants permission to view information about all active and terminated step executions in an Automation workflow",
      "accessLevel": "Read"
    },
    "DescribeAvailablePatches": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAvailablePatches.html",
      "description": "Grants permission to view all patches eligible to include in a patch baseline",
      "accessLevel": "Read"
    },
    "DescribeDocument": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeDocument.html",
      "description": "Grants permission to view details about a specified SSM document",
      "accessLevel": "Read",
      "resourceTypes": {
        "document": {
          "required": true
        }
      }
    },
    "DescribeDocumentParameters": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html",
      "description": "Grants permission to display information about SSM document parameters in the Systems Manager console (internal Systems Manager action)",
      "accessLevel": "Read",
      "resourceTypes": {
        "document": {
          "required": true
        }
      }
    },
    "DescribeDocumentPermission": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeDocumentPermission.html",
      "description": "Grants permission to view the permissions for a specified SSM document",
      "accessLevel": "Read",
      "resourceTypes": {
        "document": {
          "required": true
        }
      }
    },
    "DescribeEffectiveInstanceAssociations": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeEffectiveInstanceAssociations.html",
      "description": "Grants permission to view all current associations for a specified instance",
      "accessLevel": "Read",
      "resourceTypes": {
        "instance": {
          "required": false
        },
        "managed-instance": {
          "required": false
        }
      }
    },
    "DescribeEffectivePatchesForPatchBaseline": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeEffectivePatchesForPatchBaseline.html",
      "description": "Grants permission to view details about the patches currently associated with the specified patch baseline (Windows only)",
      "accessLevel": "Read",
      "resourceTypes": {
        "patchbaseline": {
          "required": true
        }
      }
    },
    "DescribeInstanceAssociationsStatus": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstanceAssociationsStatus.html",
      "description": "Grants permission to view the status of the associations for a specified instance",
      "accessLevel": "Read",
      "resourceTypes": {
        "instance": {
          "required": false
        },
        "managed-instance": {
          "required": false
        }
      }
    },
    "DescribeInstanceInformation": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstanceInformation.html",
      "description": "Grants permission to view details about a specified instance",
      "accessLevel": "Read"
    },
    "DescribeInstancePatchStates": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatchStates.html",
      "description": "Grants permission to view status details about patches on a specified instance",
      "accessLevel": "Read"
    },
    "DescribeInstancePatchStatesForPatchGroup": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatchStatesForPatchGroup.html",
      "description": "Grants permission to describe the high-level patch state for the instances in the specified patch group",
      "accessLevel": "Read"
    },
    "DescribeInstancePatches": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatches.html",
      "description": "Grants permission to view general details about the patches on a specified instance",
      "accessLevel": "Read"
    },
    "DescribeInstanceProperties": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html",
      "description": "Grants permission to user's Amazon EC2 console to render managed instances' nodes",
      "accessLevel": "Read"
    },
    "DescribeInventoryDeletions": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInventoryDeletions.html",
      "description": "Grants permission to view details about a specified inventory deletion",
      "accessLevel": "Read"
    },
    "DescribeMaintenanceWindowExecutionTaskInvocations": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutionTaskInvocations.html",
      "description": "Grants permission to view details of a specified task execution for a maintenance window",
      "accessLevel": "List"
    },
    "DescribeMaintenanceWindowExecutionTasks": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutionTasks.html",
      "description": "Grants permission to view details about the tasks that ran during a specified maintenance window execution",
      "accessLevel": "List"
    },
    "DescribeMaintenanceWindowExecutions": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutions.html",
      "description": "Grants permission to view the executions of a specified maintenance window",
      "accessLevel": "List",
      "resourceTypes": {
        "maintenancewindow": {
          "required": true
        }
      }
    },
    "DescribeMaintenanceWindowSchedule": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowSchedule.html",
      "description": "Grants permission to view details about upcoming executions of a specified maintenance window",
      "accessLevel": "List"
    },
    "DescribeMaintenanceWindowTargets": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowTargets.html",
      "description": "Grants permission to view a list of the targets associated with a specified maintenance window",
      "accessLevel": "List",
      "resourceTypes": {
        "maintenancewindow": {
          "required": true
        }
      }
    },
    "DescribeMaintenanceWindowTasks": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowTasks.html",
      "description": "Grants permission to view a list of the tasks associated with a specified maintenance window",
      "accessLevel": "List",
      "resourceTypes": {
        "maintenancewindow": {
          "required": true
        }
      }
    },
    "DescribeMaintenanceWindows": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindows.html",
      "description": "Grants permission to view information about all or specified maintenance windows",
      "accessLevel": "List"
    },
    "DescribeMaintenanceWindowsForTarget": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowsForTarget.html",
      "description": "Grants permission to view information about the maintenance window targets and tasks associated with a specified instance",
      "accessLevel": "List"
    },
    "DescribeOpsItems": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeOpsItems.html",
      "description": "Grants permission to view details about specified OpsItems",
      "accessLevel": "Read"
    },
    "DescribeParameters": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeParameters.html",
      "description": "Grants permission to view details about a specified SSM parameter",
      "accessLevel": "List"
    },
    "DescribePatchBaselines": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchBaselines.html",
      "description": "Grants permission to view information about patch baselines that meet the specified criteria",
      "accessLevel": "List"
    },
    "DescribePatchGroupState": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchGroupState.html",
      "description": "Grants permission to view aggregated status details for patches for a specified patch group",
      "accessLevel": "Read"
    },
    "DescribePatchGroups": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchGroups.html",
      "description": "Grants permission to view information about the patch baseline for a specified patch group",
      "accessLevel": "List"
    },
    "DescribePatchProperties": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchProperties.html",
      "description": "Grants permission to view details of available patches for a specified operating system and patch property",
      "accessLevel": "List"
    },
    "DescribeSessions": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeSessions.html",
      "description": "Grants permission to view a list of recent Session Manager sessions that meet the specified search criteria",
      "accessLevel": "List"
    },
    "GetAutomationExecution": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AutomationExecution.html",
      "description": "Grants permission to view details of a specified Automation execution",
      "accessLevel": "Read"
    },
    "GetCommandInvocation": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetCommandInvocation.html",
      "description": "Grants permission to view details about the command execution of a specified invocation or plugin",
      "accessLevel": "Read"
    },
    "GetConnectionStatus": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetConnectionStatus.html",
      "description": "Grants permission to view the Session Manager connection status for a specified managed instance",
      "accessLevel": "Read"
    },
    "GetDefaultPatchBaseline": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDefaultPatchBaseline.html",
      "description": "Grants permission to view the current default patch baseline for a specified operating system type",
      "accessLevel": "Read",
      "resourceTypes": {
        "patchbaseline": {
          "required": true
        }
      }
    },
    "GetDeployablePatchSnapshotForInstance": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDeployablePatchSnapshotForInstance.html",
      "description": "Grants permission to retrieve the current patch baseline snapshot for a specified instance",
      "accessLevel": "Read"
    },
    "GetDocument": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDocument.html",
      "description": "Grants permission to view the contents of a specified SSM document",
      "accessLevel": "Read",
      "resourceTypes": {
        "document": {
          "required": true
        }
      }
    },
    "GetInventory": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetInventory.html",
      "description": "Grants permission to view instance inventory details per the specified criteria",
      "accessLevel": "Read"
    },
    "GetInventorySchema": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetInventorySchema.html",
      "description": "Grants permission to view a list of inventory types or attribute names for a specified inventory item type",
      "accessLevel": "Read"
    },
    "GetMaintenanceWindow": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindow.html",
      "description": "Grants permission to view details about a specified maintenance window",
      "accessLevel": "Read",
      "resourceTypes": {
        "maintenancewindow": {
          "required": true
        }
      }
    },
    "GetMaintenanceWindowExecution": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecution.html",
      "description": "Grants permission to view details about a specified maintenance window execution",
      "accessLevel": "Read"
    },
    "GetMaintenanceWindowExecutionTask": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecutionTask.html",
      "description": "Grants permission to view details about a specified maintenance window execution task",
      "accessLevel": "Read"
    },
    "GetMaintenanceWindowExecutionTaskInvocation": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecutionTaskInvocation.html",
      "description": "Grants permission to view details about a specific maintenance window task running on a specific target",
      "accessLevel": "Read"
    },
    "GetMaintenanceWindowTask": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowTask.html",
      "description": "Grants permission to view details about tasks registered with a specified maintenance window",
      "accessLevel": "Read",
      "resourceTypes": {
        "maintenancewindow": {
          "required": true
        }
      }
    },
    "GetManifest": {
      "url": "",
      "description": "Used by Systems Manager and SSM Agent to determine package installation requirements for an instance (internal Systems Manager call)",
      "accessLevel": "Read"
    },
    "GetOpsItem": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsItem.html",
      "description": "Grants permission to view information about a specified OpsItem",
      "accessLevel": "Read"
    },
    "GetOpsSummary": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsSummary.html",
      "description": "Grants permission to view summary information about OpsItems based on specified filters and aggregators",
      "accessLevel": "Read",
      "resourceTypes": {
        "resourcedatasync": {
          "required": true
        }
      }
    },
    "GetParameter": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameter.html",
      "description": "Grants permission to view information about a specified parameter",
      "accessLevel": "Read",
      "resourceTypes": {
        "parameter": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}"
      ]
    },
    "GetParameterHistory": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameterHistory.html",
      "description": "Grants permission to view details and changes for a specified parameter",
      "accessLevel": "Read",
      "resourceTypes": {
        "parameter": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}"
      ]
    },
    "GetParameters": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameters.html",
      "description": "Grants permission to view information about multiple specified parameters",
      "accessLevel": "Read",
      "resourceTypes": {
        "parameter": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}"
      ]
    },
    "GetParametersByPath": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParametersByPath.html",
      "description": "Grants permission to view information about parameters in a specified hierarchy",
      "accessLevel": "Read",
      "resourceTypes": {
        "parameter": {
          "required": true
        }
      }
    },
    "GetPatchBaseline": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetPatchBaseline.html",
      "description": "Grants permission to view information about a specified patch baseline",
      "accessLevel": "Read",
      "resourceTypes": {
        "patchbaseline": {
          "required": true
        }
      }
    },
    "GetPatchBaselineForPatchGroup": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetPatchBaselineForPatchGroup.html",
      "description": "Grants permission to view the ID of the current patch baseline for a specified patch group",
      "accessLevel": "Read",
      "resourceTypes": {
        "patchbaseline": {
          "required": true
        }
      }
    },
    "GetServiceSetting": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetServiceSetting.html",
      "description": "Grants permission to view the account-level setting for an AWS service",
      "accessLevel": "Read",
      "resourceTypes": {
        "servicesetting": {
          "required": true
        }
      }
    },
    "LabelParameterVersion": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_LabelParameterVersion.html",
      "description": "Grants permission to apply an identifying label to a specified version of a parameter",
      "accessLevel": "Write",
      "resourceTypes": {
        "parameter": {
          "required": true
        }
      }
    },
    "ListAssociationVersions": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListAssociationVersions.html",
      "description": "Grants permission to list versions of the specified association",
      "accessLevel": "List"
    },
    "ListAssociations": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListAssociations.html",
      "description": "Grants permission to list the associations for a specified SSM document or managed instance",
      "accessLevel": "List"
    },
    "ListCommandInvocations": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommandInvocations.html",
      "description": "Grants permission to list information about command invocations sent to a specified instance",
      "accessLevel": "Read"
    },
    "ListCommands": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommands.html",
      "description": "Grants permission to list the commands sent to a specified instance",
      "accessLevel": "Read"
    },
    "ListComplianceItems": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListComplianceItems.html",
      "description": "Grants permission to list compliance status for specified resource types on a specified resource",
      "accessLevel": "List"
    },
    "ListComplianceSummaries": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListComplianceSummaries.html",
      "description": "Grants permission to list a summary count of compliant and noncompliant resources for a specified compliance type",
      "accessLevel": "List"
    },
    "ListDocumentVersions": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocumentVersions.html",
      "description": "Grants permission to list all versions of a specified document",
      "accessLevel": "List",
      "resourceTypes": {
        "document": {
          "required": true
        }
      }
    },
    "ListDocuments": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocuments.html",
      "description": "Grants permission to view information about a specified SSM document",
      "accessLevel": "List"
    },
    "ListInstanceAssociations": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html",
      "description": "Used by SSM Agent to check for new State Manager associations (internal Systems Manager call)",
      "accessLevel": "List",
      "resourceTypes": {
        "instance": {
          "required": false
        },
        "managed-instance": {
          "required": false
        }
      }
    },
    "ListInventoryEntries": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListInventoryEntries.html",
      "description": "Grants permission to view a list of specified inventory types for a specified instance",
      "accessLevel": "List"
    },
    "ListResourceComplianceSummaries": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListResourceComplianceSummaries.html",
      "description": "Grants permission to list resource-level summary count",
      "accessLevel": "List"
    },
    "ListResourceDataSync": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListResourceDataSync.html",
      "description": "Grants permission to list information about resource data sync configurations in an account",
      "accessLevel": "List",
      "conditions": [
        "ssm:SyncType"
      ]
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to view a list of resource tags for a specified resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "document": {
          "required": false
        },
        "maintenancewindow": {
          "required": false
        },
        "managed-instance": {
          "required": false
        },
        "parameter": {
          "required": false
        },
        "patchbaseline": {
          "required": false
        }
      }
    },
    "ModifyDocumentPermission": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ModifyDocumentPermission.html",
      "description": "Grants permission to share a custom SSM document publicly or privately with specified AWS accounts",
      "accessLevel": "Write",
      "resourceTypes": {
        "document": {
          "required": true
        }
      }
    },
    "PutComplianceItems": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutComplianceItems.html",
      "description": "Grants permission to register a compliance type and other compliance details on a specified resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": false
        },
        "managed-instance": {
          "required": false
        }
      }
    },
    "PutConfigurePackageResult": {
      "url": "",
      "description": "Used by SSM Agent to generate a report of the results of specific agent requests (internal Systems Manager call)",
      "accessLevel": "Read"
    },
    "PutInventory": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutInventory.html",
      "description": "Grants permission to add or update inventory items on multiple specified managed instances",
      "accessLevel": "Write"
    },
    "PutParameter": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutParameter.html",
      "description": "Grants permission to create an SSM parameter",
      "accessLevel": "Write",
      "resourceTypes": {
        "parameter": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "RegisterDefaultPatchBaseline": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterDefaultPatchBaseline.html",
      "description": "Grants permission to specify the default patch baseline for an operating system type",
      "accessLevel": "Write",
      "resourceTypes": {
        "patchbaseline": {
          "required": true
        }
      }
    },
    "RegisterPatchBaselineForPatchGroup": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterPatchBaselineForPatchGroup.html",
      "description": "Grants permission to specify the default patch baseline for a specified patch group",
      "accessLevel": "Write",
      "resourceTypes": {
        "patchbaseline": {
          "required": true
        }
      }
    },
    "RegisterTargetWithMaintenanceWindow": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTargetWithMaintenanceWindow.html",
      "description": "Grants permission to register a target with a specified maintenance window",
      "accessLevel": "Write",
      "resourceTypes": {
        "maintenancewindow": {
          "required": true
        }
      }
    },
    "RegisterTaskWithMaintenanceWindow": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTaskWithMaintenanceWindow.html",
      "description": "Grants permission to register a task with a specified maintenance window",
      "accessLevel": "Write",
      "resourceTypes": {
        "maintenancewindow": {
          "required": true
        }
      }
    },
    "RemoveTagsFromResource": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RemoveTagsFromResource.html",
      "description": "Grants permission to remove a specified tag key from a specified resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "document": {
          "required": false
        },
        "maintenancewindow": {
          "required": false
        },
        "managed-instance": {
          "required": false
        },
        "parameter": {
          "required": false
        },
        "patchbaseline": {
          "required": false
        }
      }
    },
    "ResetServiceSetting": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ResetServiceSetting.html",
      "description": "Grants permission to reset the service setting for an AWS account to the default value",
      "accessLevel": "Write",
      "resourceTypes": {
        "servicesetting": {
          "required": true
        }
      }
    },
    "ResumeSession": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ResumeSession.html",
      "description": "Grants permission to reconnect a Session Manager session to a managed instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "session": {
          "required": true
        }
      }
    },
    "SendAutomationSignal": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendAutomationSignal.html",
      "description": "Grants permission to send a signal to change the current behavior or status of a specified Automation execution",
      "accessLevel": "Write"
    },
    "SendCommand": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendCommand.html",
      "description": "Grants permission to run commands on one or more specified managed instances",
      "accessLevel": "Write",
      "resourceTypes": {
        "document": {
          "required": true
        },
        "instance": {
          "required": false
        },
        "managed-instance": {
          "required": false
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "ssm:resourceTag/tag-key"
      ]
    },
    "StartAssociationsOnce": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartAssociationsOnce.html",
      "description": "Grants permission to run a specified association manually",
      "accessLevel": "Write",
      "resourceTypes": {
        "association": {
          "required": true
        }
      }
    },
    "StartAutomationExecution": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartAutomationExecution.html",
      "description": "Grants permission to initiate the execution of an Automation document",
      "accessLevel": "Write",
      "resourceTypes": {
        "automation-definition": {
          "required": true
        }
      }
    },
    "StartSession": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartSession.html",
      "description": "Grants permission to initiate a connection to a specified target for a Session Manager session",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true
        },
        "document": {
          "required": false
        }
      },
      "conditions": [
        "ssm:SessionDocumentAccessCheck"
      ]
    },
    "StopAutomationExecution": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StopAutomationExecution.html",
      "description": "Grants permission to stop a specified Automation execution that is already in progress",
      "accessLevel": "Write"
    },
    "TerminateSession": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_TerminateSession.html",
      "description": "Grants permission to permanently end a Session Manager connection to an instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "session": {
          "required": true
        }
      }
    },
    "UpdateAssociation": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociation.html",
      "description": "Grants permission to update an association and immediately run the association on the specified targets",
      "accessLevel": "Write",
      "resourceTypes": {
        "association": {
          "required": true
        },
        "document": {
          "required": false
        },
        "instance": {
          "required": false
        },
        "managed-instance": {
          "required": false
        }
      }
    },
    "UpdateAssociationStatus": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociationStatus.html",
      "description": "Grants permission to update the status of the SSM document associated with a specified instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "document": {
          "required": true
        },
        "instance": {
          "required": false
        },
        "managed-instance": {
          "required": false
        }
      }
    },
    "UpdateDocument": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocument.html",
      "description": "Grants permission to update one or more values for an SSM document",
      "accessLevel": "Write",
      "resourceTypes": {
        "document": {
          "required": true
        }
      }
    },
    "UpdateDocumentDefaultVersion": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocumentDefaultVersion.html",
      "description": "Grants permission to change the default version of an SSM document",
      "accessLevel": "Write",
      "resourceTypes": {
        "document": {
          "required": true
        }
      }
    },
    "UpdateInstanceAssociationStatus": {
      "url": "",
      "description": "Used by SSM Agent to update the status of the association that it is currently running (internal Systems Manager call)",
      "accessLevel": "Write",
      "resourceTypes": {
        "association": {
          "required": true
        },
        "instance": {
          "required": false
        },
        "managed-instance": {
          "required": false
        }
      }
    },
    "UpdateInstanceInformation": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html",
      "description": "Used by SSM Agent to send a heartbeat signal to the Systems Manager service in the cloud",
      "accessLevel": "Write"
    },
    "UpdateMaintenanceWindow": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindow.html",
      "description": "Grants permission to update a specified maintenance window",
      "accessLevel": "Write",
      "resourceTypes": {
        "maintenancewindow": {
          "required": true
        }
      }
    },
    "UpdateMaintenanceWindowTarget": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindowTarget.html",
      "description": "Grants permission to update a specified maintenance window target",
      "accessLevel": "Write",
      "resourceTypes": {
        "maintenancewindow": {
          "required": true
        }
      }
    },
    "UpdateMaintenanceWindowTask": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindowTask.html",
      "description": "Grants permission to update a specified maintenance window task",
      "accessLevel": "Write",
      "resourceTypes": {
        "maintenancewindow": {
          "required": true
        }
      }
    },
    "UpdateManagedInstanceRole": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateManagedInstanceRole.html",
      "description": "Grants permission to assign or change the IAM role assigned to a specified managed instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "managed-instance": {
          "required": true
        }
      }
    },
    "UpdateOpsItem": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateOpsItem.html",
      "description": "Grants permission to edit or change an OpsItem",
      "accessLevel": "Write"
    },
    "UpdatePatchBaseline": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdatePatchBaseline.html",
      "description": "Grants permission to update a specified patch baseline",
      "accessLevel": "Write",
      "resourceTypes": {
        "patchbaseline": {
          "required": true
        }
      }
    },
    "UpdateResourceDataSync": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateResourceDataSync.html",
      "description": "Grants permission to update a resource data sync",
      "accessLevel": "Write",
      "resourceTypes": {
        "resourcedatasync": {
          "required": true
        }
      },
      "conditions": [
        "ssm:SyncType"
      ]
    },
    "UpdateServiceSetting": {
      "url": "https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateServiceSetting.html",
      "description": "Grants permission to update the service setting for an AWS account",
      "accessLevel": "Write",
      "resourceTypes": {
        "servicesetting": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "association": {
      "name": "association",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-associations.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:association/${AssociationId}",
      "conditionKeys": []
    },
    "automation-execution": {
      "name": "automation-execution",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-working.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:automation-execution/${AutomationExecutionId}",
      "conditionKeys": []
    },
    "automation-definition": {
      "name": "automation-definition",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-documents.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:automation-definition/${AutomationDefinitionName}:${VersionId}",
      "conditionKeys": []
    },
    "document": {
      "name": "document",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:document/${DocumentName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ssm:resourceTag/tag-key"
      ]
    },
    "instance": {
      "name": "instance",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/iam-policy-structure.html#EC2_ARN_Format",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:instance/${InstanceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ssm:resourceTag/tag-key"
      ]
    },
    "maintenancewindow": {
      "name": "maintenancewindow",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-maintenance.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:maintenancewindow/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ssm:resourceTag/tag-key"
      ]
    },
    "managed-instance": {
      "name": "managed-instance",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:managed-instance/${ManagedInstanceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ssm:resourceTag/tag-key"
      ]
    },
    "managed-instance-inventory": {
      "name": "managed-instance-inventory",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-configuring.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:managed-instance-inventory/${InstanceId}",
      "conditionKeys": []
    },
    "opsitem": {
      "name": "opsitem",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:opsitem/${ResourceId}",
      "conditionKeys": []
    },
    "parameter": {
      "name": "parameter",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:parameter/${FullyQualifiedParameterName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ssm:resourceTag/tag-key"
      ]
    },
    "patchbaseline": {
      "name": "patchbaseline",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:patchbaseline/${PatchBaselineIdResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ssm:resourceTag/tag-key"
      ]
    },
    "session": {
      "name": "session",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:session/${SessionId}",
      "conditionKeys": []
    },
    "resourcedatasync": {
      "name": "resourcedatasync",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:resource-data-sync/${SyncName}",
      "conditionKeys": []
    },
    "servicesetting": {
      "name": "servicesetting",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/API_ServiceSetting.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:servicesetting/${ResourceId}",
      "conditionKeys": []
    },
    "windowtarget": {
      "name": "windowtarget",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-assign-targets.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:windowtarget/${WindowTargetId}",
      "conditionKeys": []
    },
    "windowtask": {
      "name": "windowtask",
      "url": "https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-assign-tasks.html",
      "arn": "arn:${Partition}:ssm:${Region}:${Account}:windowtask/${WindowTaskId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [ssm](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssystemsmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add or overwrite one or more tags for a specified AWS resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
    this.add('ssm:AddTagsToResource');
    return this;
  }

  /**
   * Grants permission to cancel a specified Run Command command
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CancelCommand.html
   */
  public toCancelCommand() {
    this.add('ssm:CancelCommand');
    return this;
  }

  /**
   * Grants permission to cancel an in-progress maintenance window execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CancelMaintenanceWindowExecution.html
   */
  public toCancelMaintenanceWindowExecution() {
    this.add('ssm:CancelMaintenanceWindowExecution');
    return this;
  }

  /**
   * Grants permission to create an activation that is used to register on-premises servers and virtual machines (VMs) with Systems Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateActivation.html
   */
  public toCreateActivation() {
    this.add('ssm:CreateActivation');
    return this;
  }

  /**
   * Grants permission to associate a specified Systems Manager document with specified instances or other targets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociation.html
   */
  public toCreateAssociation() {
    this.add('ssm:CreateAssociation');
    return this;
  }

  /**
   * Grants permission to combine entries for multiple CreateAssociation operations in a single command
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociationBatch.html
   */
  public toCreateAssociationBatch() {
    this.add('ssm:CreateAssociationBatch');
    return this;
  }

  /**
   * Grants permission to create a Systems Manager SSM document
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateDocument.html
   */
  public toCreateDocument() {
    this.add('ssm:CreateDocument');
    return this;
  }

  /**
   * Grants permission to create a maintenance window
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateMaintenanceWindow.html
   */
  public toCreateMaintenanceWindow() {
    this.add('ssm:CreateMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to create an OpsItem in OpsCenter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateOpsItem.html
   */
  public toCreateOpsItem() {
    this.add('ssm:CreateOpsItem');
    return this;
  }

  /**
   * Grants permission to create a patch baseline
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreatePatchBaseline.html
   */
  public toCreatePatchBaseline() {
    this.add('ssm:CreatePatchBaseline');
    return this;
  }

  /**
   * Grants permission to create a resource data sync configuration, which regularly collects inventory data from managed instances and updates the data in an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSyncType()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateResourceDataSync.html
   */
  public toCreateResourceDataSync() {
    this.add('ssm:CreateResourceDataSync');
    return this;
  }

  /**
   * Grants permission to delete a specified activation for managed instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteActivation.html
   */
  public toDeleteActivation() {
    this.add('ssm:DeleteActivation');
    return this;
  }

  /**
   * Grants permission to disassociate a specified SSM document from a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteAssociation.html
   */
  public toDeleteAssociation() {
    this.add('ssm:DeleteAssociation');
    return this;
  }

  /**
   * Grants permission to delete a specified SSM document and its instance associations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteDocument.html
   */
  public toDeleteDocument() {
    this.add('ssm:DeleteDocument');
    return this;
  }

  /**
   * Grants permission to delete a specified custom inventory type, or the data associated with a custom inventory type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteInventory.html
   */
  public toDeleteInventory() {
    this.add('ssm:DeleteInventory');
    return this;
  }

  /**
   * Grants permission to delete a specified maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteMaintenanceWindow.html
   */
  public toDeleteMaintenanceWindow() {
    this.add('ssm:DeleteMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to delete a specified SSM parameter
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameter.html
   */
  public toDeleteParameter() {
    this.add('ssm:DeleteParameter');
    return this;
  }

  /**
   * Grants permission to delete multiple specified SSM parameters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameters.html
   */
  public toDeleteParameters() {
    this.add('ssm:DeleteParameters');
    return this;
  }

  /**
   * Grants permission to delete a specified patch baseline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeletePatchBaseline.html
   */
  public toDeletePatchBaseline() {
    this.add('ssm:DeletePatchBaseline');
    return this;
  }

  /**
   * Grants permission to delete a specified resource data sync
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSyncType()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteResourceDataSync.html
   */
  public toDeleteResourceDataSync() {
    this.add('ssm:DeleteResourceDataSync');
    return this;
  }

  /**
   * Grants permission to deregister a specified on-premises server or virtual machine (VM) from Systems Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterManagedInstance.html
   */
  public toDeregisterManagedInstance() {
    this.add('ssm:DeregisterManagedInstance');
    return this;
  }

  /**
   * Grants permission to deregister a specified patch baseline from being the default patch baseline for a specified patch group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterPatchBaselineForPatchGroup.html
   */
  public toDeregisterPatchBaselineForPatchGroup() {
    this.add('ssm:DeregisterPatchBaselineForPatchGroup');
    return this;
  }

  /**
   * Grants permission to deregister a specified target from a maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterTargetFromMaintenanceWindow.html
   */
  public toDeregisterTargetFromMaintenanceWindow() {
    this.add('ssm:DeregisterTargetFromMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to deregister a specified task from a maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterTaskFromMaintenanceWindow.html
   */
  public toDeregisterTaskFromMaintenanceWindow() {
    this.add('ssm:DeregisterTaskFromMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to view details about a specified managed instance activation, such as when it was created and the number of instances registered using the activation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeActivations.html
   */
  public toDescribeActivations() {
    this.add('ssm:DescribeActivations');
    return this;
  }

  /**
   * Grants permission to view details about the specified association for a specified instance or target
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociation.html
   */
  public toDescribeAssociation() {
    this.add('ssm:DescribeAssociation');
    return this;
  }

  /**
   * Grants permission to view information about a specified association execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociationExecutionTargets.html
   */
  public toDescribeAssociationExecutionTargets() {
    this.add('ssm:DescribeAssociationExecutionTargets');
    return this;
  }

  /**
   * Grants permission to view all executions for a specified association
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociationExecutions.html
   */
  public toDescribeAssociationExecutions() {
    this.add('ssm:DescribeAssociationExecutions');
    return this;
  }

  /**
   * Grants permission to view details about all active and terminated Automation executions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAutomationExecutions.html
   */
  public toDescribeAutomationExecutions() {
    this.add('ssm:DescribeAutomationExecutions');
    return this;
  }

  /**
   * Grants permission to view information about all active and terminated step executions in an Automation workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAutomationStepExecutions.html
   */
  public toDescribeAutomationStepExecutions() {
    this.add('ssm:DescribeAutomationStepExecutions');
    return this;
  }

  /**
   * Grants permission to view all patches eligible to include in a patch baseline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAvailablePatches.html
   */
  public toDescribeAvailablePatches() {
    this.add('ssm:DescribeAvailablePatches');
    return this;
  }

  /**
   * Grants permission to view details about a specified SSM document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeDocument.html
   */
  public toDescribeDocument() {
    this.add('ssm:DescribeDocument');
    return this;
  }

  /**
   * Grants permission to display information about SSM document parameters in the Systems Manager console (internal Systems Manager action)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toDescribeDocumentParameters() {
    this.add('ssm:DescribeDocumentParameters');
    return this;
  }

  /**
   * Grants permission to view the permissions for a specified SSM document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeDocumentPermission.html
   */
  public toDescribeDocumentPermission() {
    this.add('ssm:DescribeDocumentPermission');
    return this;
  }

  /**
   * Grants permission to view all current associations for a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeEffectiveInstanceAssociations.html
   */
  public toDescribeEffectiveInstanceAssociations() {
    this.add('ssm:DescribeEffectiveInstanceAssociations');
    return this;
  }

  /**
   * Grants permission to view details about the patches currently associated with the specified patch baseline (Windows only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeEffectivePatchesForPatchBaseline.html
   */
  public toDescribeEffectivePatchesForPatchBaseline() {
    this.add('ssm:DescribeEffectivePatchesForPatchBaseline');
    return this;
  }

  /**
   * Grants permission to view the status of the associations for a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstanceAssociationsStatus.html
   */
  public toDescribeInstanceAssociationsStatus() {
    this.add('ssm:DescribeInstanceAssociationsStatus');
    return this;
  }

  /**
   * Grants permission to view details about a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstanceInformation.html
   */
  public toDescribeInstanceInformation() {
    this.add('ssm:DescribeInstanceInformation');
    return this;
  }

  /**
   * Grants permission to view status details about patches on a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatchStates.html
   */
  public toDescribeInstancePatchStates() {
    this.add('ssm:DescribeInstancePatchStates');
    return this;
  }

  /**
   * Grants permission to describe the high-level patch state for the instances in the specified patch group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatchStatesForPatchGroup.html
   */
  public toDescribeInstancePatchStatesForPatchGroup() {
    this.add('ssm:DescribeInstancePatchStatesForPatchGroup');
    return this;
  }

  /**
   * Grants permission to view general details about the patches on a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatches.html
   */
  public toDescribeInstancePatches() {
    this.add('ssm:DescribeInstancePatches');
    return this;
  }

  /**
   * Grants permission to user's Amazon EC2 console to render managed instances' nodes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toDescribeInstanceProperties() {
    this.add('ssm:DescribeInstanceProperties');
    return this;
  }

  /**
   * Grants permission to view details about a specified inventory deletion
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInventoryDeletions.html
   */
  public toDescribeInventoryDeletions() {
    this.add('ssm:DescribeInventoryDeletions');
    return this;
  }

  /**
   * Grants permission to view details of a specified task execution for a maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutionTaskInvocations.html
   */
  public toDescribeMaintenanceWindowExecutionTaskInvocations() {
    this.add('ssm:DescribeMaintenanceWindowExecutionTaskInvocations');
    return this;
  }

  /**
   * Grants permission to view details about the tasks that ran during a specified maintenance window execution
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutionTasks.html
   */
  public toDescribeMaintenanceWindowExecutionTasks() {
    this.add('ssm:DescribeMaintenanceWindowExecutionTasks');
    return this;
  }

  /**
   * Grants permission to view the executions of a specified maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutions.html
   */
  public toDescribeMaintenanceWindowExecutions() {
    this.add('ssm:DescribeMaintenanceWindowExecutions');
    return this;
  }

  /**
   * Grants permission to view details about upcoming executions of a specified maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowSchedule.html
   */
  public toDescribeMaintenanceWindowSchedule() {
    this.add('ssm:DescribeMaintenanceWindowSchedule');
    return this;
  }

  /**
   * Grants permission to view a list of the targets associated with a specified maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowTargets.html
   */
  public toDescribeMaintenanceWindowTargets() {
    this.add('ssm:DescribeMaintenanceWindowTargets');
    return this;
  }

  /**
   * Grants permission to view a list of the tasks associated with a specified maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowTasks.html
   */
  public toDescribeMaintenanceWindowTasks() {
    this.add('ssm:DescribeMaintenanceWindowTasks');
    return this;
  }

  /**
   * Grants permission to view information about all or specified maintenance windows
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindows.html
   */
  public toDescribeMaintenanceWindows() {
    this.add('ssm:DescribeMaintenanceWindows');
    return this;
  }

  /**
   * Grants permission to view information about the maintenance window targets and tasks associated with a specified instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowsForTarget.html
   */
  public toDescribeMaintenanceWindowsForTarget() {
    this.add('ssm:DescribeMaintenanceWindowsForTarget');
    return this;
  }

  /**
   * Grants permission to view details about specified OpsItems
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeOpsItems.html
   */
  public toDescribeOpsItems() {
    this.add('ssm:DescribeOpsItems');
    return this;
  }

  /**
   * Grants permission to view details about a specified SSM parameter
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeParameters.html
   */
  public toDescribeParameters() {
    this.add('ssm:DescribeParameters');
    return this;
  }

  /**
   * Grants permission to view information about patch baselines that meet the specified criteria
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchBaselines.html
   */
  public toDescribePatchBaselines() {
    this.add('ssm:DescribePatchBaselines');
    return this;
  }

  /**
   * Grants permission to view aggregated status details for patches for a specified patch group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchGroupState.html
   */
  public toDescribePatchGroupState() {
    this.add('ssm:DescribePatchGroupState');
    return this;
  }

  /**
   * Grants permission to view information about the patch baseline for a specified patch group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchGroups.html
   */
  public toDescribePatchGroups() {
    this.add('ssm:DescribePatchGroups');
    return this;
  }

  /**
   * Grants permission to view details of available patches for a specified operating system and patch property
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchProperties.html
   */
  public toDescribePatchProperties() {
    this.add('ssm:DescribePatchProperties');
    return this;
  }

  /**
   * Grants permission to view a list of recent Session Manager sessions that meet the specified search criteria
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeSessions.html
   */
  public toDescribeSessions() {
    this.add('ssm:DescribeSessions');
    return this;
  }

  /**
   * Grants permission to view details of a specified Automation execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AutomationExecution.html
   */
  public toGetAutomationExecution() {
    this.add('ssm:GetAutomationExecution');
    return this;
  }

  /**
   * Grants permission to view details about the command execution of a specified invocation or plugin
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetCommandInvocation.html
   */
  public toGetCommandInvocation() {
    this.add('ssm:GetCommandInvocation');
    return this;
  }

  /**
   * Grants permission to view the Session Manager connection status for a specified managed instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetConnectionStatus.html
   */
  public toGetConnectionStatus() {
    this.add('ssm:GetConnectionStatus');
    return this;
  }

  /**
   * Grants permission to view the current default patch baseline for a specified operating system type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDefaultPatchBaseline.html
   */
  public toGetDefaultPatchBaseline() {
    this.add('ssm:GetDefaultPatchBaseline');
    return this;
  }

  /**
   * Grants permission to retrieve the current patch baseline snapshot for a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDeployablePatchSnapshotForInstance.html
   */
  public toGetDeployablePatchSnapshotForInstance() {
    this.add('ssm:GetDeployablePatchSnapshotForInstance');
    return this;
  }

  /**
   * Grants permission to view the contents of a specified SSM document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDocument.html
   */
  public toGetDocument() {
    this.add('ssm:GetDocument');
    return this;
  }

  /**
   * Grants permission to view instance inventory details per the specified criteria
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetInventory.html
   */
  public toGetInventory() {
    this.add('ssm:GetInventory');
    return this;
  }

  /**
   * Grants permission to view a list of inventory types or attribute names for a specified inventory item type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetInventorySchema.html
   */
  public toGetInventorySchema() {
    this.add('ssm:GetInventorySchema');
    return this;
  }

  /**
   * Grants permission to view details about a specified maintenance window
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindow.html
   */
  public toGetMaintenanceWindow() {
    this.add('ssm:GetMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to view details about a specified maintenance window execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecution.html
   */
  public toGetMaintenanceWindowExecution() {
    this.add('ssm:GetMaintenanceWindowExecution');
    return this;
  }

  /**
   * Grants permission to view details about a specified maintenance window execution task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecutionTask.html
   */
  public toGetMaintenanceWindowExecutionTask() {
    this.add('ssm:GetMaintenanceWindowExecutionTask');
    return this;
  }

  /**
   * Grants permission to view details about a specific maintenance window task running on a specific target
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecutionTaskInvocation.html
   */
  public toGetMaintenanceWindowExecutionTaskInvocation() {
    this.add('ssm:GetMaintenanceWindowExecutionTaskInvocation');
    return this;
  }

  /**
   * Grants permission to view details about tasks registered with a specified maintenance window
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowTask.html
   */
  public toGetMaintenanceWindowTask() {
    this.add('ssm:GetMaintenanceWindowTask');
    return this;
  }

  /**
   * Used by Systems Manager and SSM Agent to determine package installation requirements for an instance (internal Systems Manager call)
   *
   * Access Level: Read
   */
  public toGetManifest() {
    this.add('ssm:GetManifest');
    return this;
  }

  /**
   * Grants permission to view information about a specified OpsItem
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsItem.html
   */
  public toGetOpsItem() {
    this.add('ssm:GetOpsItem');
    return this;
  }

  /**
   * Grants permission to view summary information about OpsItems based on specified filters and aggregators
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsSummary.html
   */
  public toGetOpsSummary() {
    this.add('ssm:GetOpsSummary');
    return this;
  }

  /**
   * Grants permission to view information about a specified parameter
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameter.html
   */
  public toGetParameter() {
    this.add('ssm:GetParameter');
    return this;
  }

  /**
   * Grants permission to view details and changes for a specified parameter
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameterHistory.html
   */
  public toGetParameterHistory() {
    this.add('ssm:GetParameterHistory');
    return this;
  }

  /**
   * Grants permission to view information about multiple specified parameters
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameters.html
   */
  public toGetParameters() {
    this.add('ssm:GetParameters');
    return this;
  }

  /**
   * Grants permission to view information about parameters in a specified hierarchy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParametersByPath.html
   */
  public toGetParametersByPath() {
    this.add('ssm:GetParametersByPath');
    return this;
  }

  /**
   * Grants permission to view information about a specified patch baseline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetPatchBaseline.html
   */
  public toGetPatchBaseline() {
    this.add('ssm:GetPatchBaseline');
    return this;
  }

  /**
   * Grants permission to view the ID of the current patch baseline for a specified patch group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetPatchBaselineForPatchGroup.html
   */
  public toGetPatchBaselineForPatchGroup() {
    this.add('ssm:GetPatchBaselineForPatchGroup');
    return this;
  }

  /**
   * Grants permission to view the account-level setting for an AWS service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetServiceSetting.html
   */
  public toGetServiceSetting() {
    this.add('ssm:GetServiceSetting');
    return this;
  }

  /**
   * Grants permission to apply an identifying label to a specified version of a parameter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_LabelParameterVersion.html
   */
  public toLabelParameterVersion() {
    this.add('ssm:LabelParameterVersion');
    return this;
  }

  /**
   * Grants permission to list versions of the specified association
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListAssociationVersions.html
   */
  public toListAssociationVersions() {
    this.add('ssm:ListAssociationVersions');
    return this;
  }

  /**
   * Grants permission to list the associations for a specified SSM document or managed instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListAssociations.html
   */
  public toListAssociations() {
    this.add('ssm:ListAssociations');
    return this;
  }

  /**
   * Grants permission to list information about command invocations sent to a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommandInvocations.html
   */
  public toListCommandInvocations() {
    this.add('ssm:ListCommandInvocations');
    return this;
  }

  /**
   * Grants permission to list the commands sent to a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommands.html
   */
  public toListCommands() {
    this.add('ssm:ListCommands');
    return this;
  }

  /**
   * Grants permission to list compliance status for specified resource types on a specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListComplianceItems.html
   */
  public toListComplianceItems() {
    this.add('ssm:ListComplianceItems');
    return this;
  }

  /**
   * Grants permission to list a summary count of compliant and noncompliant resources for a specified compliance type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListComplianceSummaries.html
   */
  public toListComplianceSummaries() {
    this.add('ssm:ListComplianceSummaries');
    return this;
  }

  /**
   * Grants permission to list all versions of a specified document
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocumentVersions.html
   */
  public toListDocumentVersions() {
    this.add('ssm:ListDocumentVersions');
    return this;
  }

  /**
   * Grants permission to view information about a specified SSM document
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocuments.html
   */
  public toListDocuments() {
    this.add('ssm:ListDocuments');
    return this;
  }

  /**
   * Used by SSM Agent to check for new State Manager associations (internal Systems Manager call)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toListInstanceAssociations() {
    this.add('ssm:ListInstanceAssociations');
    return this;
  }

  /**
   * Grants permission to view a list of specified inventory types for a specified instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListInventoryEntries.html
   */
  public toListInventoryEntries() {
    this.add('ssm:ListInventoryEntries');
    return this;
  }

  /**
   * Grants permission to list resource-level summary count
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListResourceComplianceSummaries.html
   */
  public toListResourceComplianceSummaries() {
    this.add('ssm:ListResourceComplianceSummaries');
    return this;
  }

  /**
   * Grants permission to list information about resource data sync configurations in an account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifSyncType()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListResourceDataSync.html
   */
  public toListResourceDataSync() {
    this.add('ssm:ListResourceDataSync');
    return this;
  }

  /**
   * Grants permission to view a list of resource tags for a specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('ssm:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to share a custom SSM document publicly or privately with specified AWS accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ModifyDocumentPermission.html
   */
  public toModifyDocumentPermission() {
    this.add('ssm:ModifyDocumentPermission');
    return this;
  }

  /**
   * Grants permission to register a compliance type and other compliance details on a specified resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutComplianceItems.html
   */
  public toPutComplianceItems() {
    this.add('ssm:PutComplianceItems');
    return this;
  }

  /**
   * Used by SSM Agent to generate a report of the results of specific agent requests (internal Systems Manager call)
   *
   * Access Level: Read
   */
  public toPutConfigurePackageResult() {
    this.add('ssm:PutConfigurePackageResult');
    return this;
  }

  /**
   * Grants permission to add or update inventory items on multiple specified managed instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutInventory.html
   */
  public toPutInventory() {
    this.add('ssm:PutInventory');
    return this;
  }

  /**
   * Grants permission to create an SSM parameter
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutParameter.html
   */
  public toPutParameter() {
    this.add('ssm:PutParameter');
    return this;
  }

  /**
   * Grants permission to specify the default patch baseline for an operating system type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterDefaultPatchBaseline.html
   */
  public toRegisterDefaultPatchBaseline() {
    this.add('ssm:RegisterDefaultPatchBaseline');
    return this;
  }

  /**
   * Grants permission to specify the default patch baseline for a specified patch group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterPatchBaselineForPatchGroup.html
   */
  public toRegisterPatchBaselineForPatchGroup() {
    this.add('ssm:RegisterPatchBaselineForPatchGroup');
    return this;
  }

  /**
   * Grants permission to register a target with a specified maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTargetWithMaintenanceWindow.html
   */
  public toRegisterTargetWithMaintenanceWindow() {
    this.add('ssm:RegisterTargetWithMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to register a task with a specified maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTaskWithMaintenanceWindow.html
   */
  public toRegisterTaskWithMaintenanceWindow() {
    this.add('ssm:RegisterTaskWithMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to remove a specified tag key from a specified resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    this.add('ssm:RemoveTagsFromResource');
    return this;
  }

  /**
   * Grants permission to reset the service setting for an AWS account to the default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ResetServiceSetting.html
   */
  public toResetServiceSetting() {
    this.add('ssm:ResetServiceSetting');
    return this;
  }

  /**
   * Grants permission to reconnect a Session Manager session to a managed instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ResumeSession.html
   */
  public toResumeSession() {
    this.add('ssm:ResumeSession');
    return this;
  }

  /**
   * Grants permission to send a signal to change the current behavior or status of a specified Automation execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendAutomationSignal.html
   */
  public toSendAutomationSignal() {
    this.add('ssm:SendAutomationSignal');
    return this;
  }

  /**
   * Grants permission to run commands on one or more specified managed instances
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendCommand.html
   */
  public toSendCommand() {
    this.add('ssm:SendCommand');
    return this;
  }

  /**
   * Grants permission to run a specified association manually
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartAssociationsOnce.html
   */
  public toStartAssociationsOnce() {
    this.add('ssm:StartAssociationsOnce');
    return this;
  }

  /**
   * Grants permission to initiate the execution of an Automation document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartAutomationExecution.html
   */
  public toStartAutomationExecution() {
    this.add('ssm:StartAutomationExecution');
    return this;
  }

  /**
   * Grants permission to initiate a connection to a specified target for a Session Manager session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSessionDocumentAccessCheck()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartSession.html
   */
  public toStartSession() {
    this.add('ssm:StartSession');
    return this;
  }

  /**
   * Grants permission to stop a specified Automation execution that is already in progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StopAutomationExecution.html
   */
  public toStopAutomationExecution() {
    this.add('ssm:StopAutomationExecution');
    return this;
  }

  /**
   * Grants permission to permanently end a Session Manager connection to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_TerminateSession.html
   */
  public toTerminateSession() {
    this.add('ssm:TerminateSession');
    return this;
  }

  /**
   * Grants permission to update an association and immediately run the association on the specified targets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociation.html
   */
  public toUpdateAssociation() {
    this.add('ssm:UpdateAssociation');
    return this;
  }

  /**
   * Grants permission to update the status of the SSM document associated with a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociationStatus.html
   */
  public toUpdateAssociationStatus() {
    this.add('ssm:UpdateAssociationStatus');
    return this;
  }

  /**
   * Grants permission to update one or more values for an SSM document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocument.html
   */
  public toUpdateDocument() {
    this.add('ssm:UpdateDocument');
    return this;
  }

  /**
   * Grants permission to change the default version of an SSM document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocumentDefaultVersion.html
   */
  public toUpdateDocumentDefaultVersion() {
    this.add('ssm:UpdateDocumentDefaultVersion');
    return this;
  }

  /**
   * Used by SSM Agent to update the status of the association that it is currently running (internal Systems Manager call)
   *
   * Access Level: Write
   */
  public toUpdateInstanceAssociationStatus() {
    this.add('ssm:UpdateInstanceAssociationStatus');
    return this;
  }

  /**
   * Used by SSM Agent to send a heartbeat signal to the Systems Manager service in the cloud
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toUpdateInstanceInformation() {
    this.add('ssm:UpdateInstanceInformation');
    return this;
  }

  /**
   * Grants permission to update a specified maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindow.html
   */
  public toUpdateMaintenanceWindow() {
    this.add('ssm:UpdateMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to update a specified maintenance window target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindowTarget.html
   */
  public toUpdateMaintenanceWindowTarget() {
    this.add('ssm:UpdateMaintenanceWindowTarget');
    return this;
  }

  /**
   * Grants permission to update a specified maintenance window task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindowTask.html
   */
  public toUpdateMaintenanceWindowTask() {
    this.add('ssm:UpdateMaintenanceWindowTask');
    return this;
  }

  /**
   * Grants permission to assign or change the IAM role assigned to a specified managed instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateManagedInstanceRole.html
   */
  public toUpdateManagedInstanceRole() {
    this.add('ssm:UpdateManagedInstanceRole');
    return this;
  }

  /**
   * Grants permission to edit or change an OpsItem
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateOpsItem.html
   */
  public toUpdateOpsItem() {
    this.add('ssm:UpdateOpsItem');
    return this;
  }

  /**
   * Grants permission to update a specified patch baseline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdatePatchBaseline.html
   */
  public toUpdatePatchBaseline() {
    this.add('ssm:UpdatePatchBaseline');
    return this;
  }

  /**
   * Grants permission to update a resource data sync
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSyncType()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateResourceDataSync.html
   */
  public toUpdateResourceDataSync() {
    this.add('ssm:UpdateResourceDataSync');
    return this;
  }

  /**
   * Grants permission to update the service setting for an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateServiceSetting.html
   */
  public toUpdateServiceSetting() {
    this.add('ssm:UpdateServiceSetting');
    return this;
  }

  /**
   * Adds a resource of type association to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-associations.html
   *
   * @param associationId - Identifier for the associationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAssociation(associationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:association/${AssociationId}';
    arn = arn.replace('${AssociationId}', associationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type automation-execution to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-working.html
   *
   * @param automationExecutionId - Identifier for the automationExecutionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAutomationExecution(automationExecutionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:automation-execution/${AutomationExecutionId}';
    arn = arn.replace('${AutomationExecutionId}', automationExecutionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type automation-definition to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-documents.html
   *
   * @param automationDefinitionName - Identifier for the automationDefinitionName.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAutomationDefinition(automationDefinitionName: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:automation-definition/${AutomationDefinitionName}:${VersionId}';
    arn = arn.replace('${AutomationDefinitionName}', automationDefinitionName);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type document to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html
   *
   * @param documentName - Identifier for the documentName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onDocument(documentName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:document/${DocumentName}';
    arn = arn.replace('${DocumentName}', documentName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type instance to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:instance/${InstanceId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type maintenancewindow to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-maintenance.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onMaintenancewindow(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:maintenancewindow/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type managed-instance to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html
   *
   * @param managedInstanceName - Identifier for the managedInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onManagedInstance(managedInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:managed-instance/${ManagedInstanceName}';
    arn = arn.replace('${ManagedInstanceName}', managedInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type managed-instance-inventory to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-configuring.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onManagedInstanceInventory(instanceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:managed-instance-inventory/${InstanceId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type opsitem to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOpsitem(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:opsitem/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type parameter to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html
   *
   * @param fullyQualifiedParameterName - Identifier for the fullyQualifiedParameterName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onParameter(fullyQualifiedParameterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:parameter/${FullyQualifiedParameterName}';
    arn = arn.replace('${FullyQualifiedParameterName}', fullyQualifiedParameterName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type patchbaseline to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html
   *
   * @param patchBaselineIdResourceId - Identifier for the patchBaselineIdResourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onPatchbaseline(patchBaselineIdResourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:patchbaseline/${PatchBaselineIdResourceId}';
    arn = arn.replace('${PatchBaselineIdResourceId}', patchBaselineIdResourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type session to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html
   *
   * @param sessionId - Identifier for the sessionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSession(sessionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:session/${SessionId}';
    arn = arn.replace('${SessionId}', sessionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type resourcedatasync to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html
   *
   * @param syncName - Identifier for the syncName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onResourcedatasync(syncName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:resource-data-sync/${SyncName}';
    arn = arn.replace('${SyncName}', syncName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type servicesetting to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/API_ServiceSetting.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onServicesetting(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:servicesetting/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type windowtarget to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-assign-targets.html
   *
   * @param windowTargetId - Identifier for the windowTargetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onWindowtarget(windowTargetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:windowtarget/${WindowTargetId}';
    arn = arn.replace('${WindowTargetId}', windowTargetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type windowtask to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-assign-tasks.html
   *
   * @param windowTaskId - Identifier for the windowTaskId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onWindowtask(windowTaskId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:windowtask/${WindowTaskId}';
    arn = arn.replace('${WindowTaskId}', windowTaskId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by controlling whether the values for specified resources can be overwritten.
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOverwrite(value: string | string[], operator?: string) {
    return this.if(`ssm:Overwrite`, value, operator || 'StringLike');
  }

  /**
   * Filters access for resources created in a hierarchical structure.
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRecursive(value: string | string[], operator?: string) {
    return this.if(`ssm:Recursive`, value, operator || 'StringLike');
  }

  /**
   * Filters access by verifying that a user has permission to access either the default Session Manager configuration document or the custom configuration document specified in a request.
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-sessiondocumentaccesscheck.html
   *
   * Applies to actions:
   * - .toStartSession()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifSessionDocumentAccessCheck(value?: boolean) {
    return this.if(`ssm:SessionDocumentAccessCheck`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by verifying that a user also has access to the ResourceDataSync SyncType specified in the request
   *
   * Applies to actions:
   * - .toCreateResourceDataSync()
   * - .toDeleteResourceDataSync()
   * - .toListResourceDataSync()
   * - .toUpdateResourceDataSync()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSyncType(value: string | string[], operator?: string) {
    return this.if(`ssm:SyncType`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on a tag key-value pair assigned to the Systems Manager resource
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
   *
   * Applies to actions:
   * - .toSendCommand()
   *
   * Applies to resource types:
   * - document
   * - instance
   * - maintenancewindow
   * - managed-instance
   * - parameter
   * - patchbaseline
   *
   * @param tagkey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagkey: string, value: string | string[], operator?: string) {
    return this.if(`ssm:resourceTag/${ tagkey }`, value, operator || 'StringLike');
  }
}
