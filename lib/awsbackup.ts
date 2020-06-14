import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service backup
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbackup.html
 */
export class Backup extends PolicyStatement {
  public servicePrefix = 'backup';
  public actions : Actions = {
    "CopyIntoBackupVault": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CopyIntoBackupVault.html",
      "description": "Copy into a backup vault",
      "accessLevel": "Write"
    },
    "CreateBackupPlan": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupPlan.html",
      "description": "Creates a new backup plan",
      "accessLevel": "Write",
      "resourceTypes": {
        "backupPlan": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateBackupSelection": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupSelection.html",
      "description": "Creates a new resource assignment in a backup plan.",
      "accessLevel": "Write",
      "resourceTypes": {
        "backupPlan": {
          "required": true
        }
      }
    },
    "CreateBackupVault": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupVault.html",
      "description": "Creates a new backup vault.",
      "accessLevel": "Write",
      "resourceTypes": {
        "backupVault": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteBackupPlan": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupPlan.html",
      "description": "Deletes a backup plan.",
      "accessLevel": "Write",
      "resourceTypes": {
        "backupPlan": {
          "required": true
        }
      }
    },
    "DeleteBackupSelection": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupSelection.html",
      "description": "Deletes a resource assignment from a backup plan.",
      "accessLevel": "Write",
      "resourceTypes": {
        "backupPlan": {
          "required": true
        }
      }
    },
    "DeleteBackupVault": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVault.html",
      "description": "Deletes a backup vault.",
      "accessLevel": "Write",
      "resourceTypes": {
        "backupVault": {
          "required": true
        }
      }
    },
    "DeleteBackupVaultAccessPolicy": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultAccessPolicy.html",
      "description": "Deletes backup vault access policy.",
      "accessLevel": "Write",
      "resourceTypes": {
        "backupVault": {
          "required": true
        }
      }
    },
    "DeleteBackupVaultNotifications": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultNotifications.html",
      "description": "Remove notifications from backup vault.",
      "accessLevel": "Write",
      "resourceTypes": {
        "backupVault": {
          "required": true
        }
      }
    },
    "DeleteRecoveryPoint": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteRecoveryPoint.html",
      "description": "Deletes a recovery point from a backup vault.",
      "accessLevel": "Write",
      "resourceTypes": {
        "recoveryPoint": {
          "required": true
        }
      }
    },
    "DescribeBackupJob": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeBackupJob.html",
      "description": "Describes a backup job",
      "accessLevel": "Read"
    },
    "DescribeBackupVault": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeBackupVault.html",
      "description": "Creates a new backup vault with the specified name.",
      "accessLevel": "Read",
      "resourceTypes": {
        "backupVault": {
          "required": true
        }
      }
    },
    "DescribeCopyJob": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeCopyJob.html",
      "description": "Describes a copy job",
      "accessLevel": "Read",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DescribeProtectedResource": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeProtectedResource.html",
      "description": "Describes a protected resource.",
      "accessLevel": "Read"
    },
    "DescribeRecoveryPoint": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRecoveryPoint.html",
      "description": "Describes a recovery point.",
      "accessLevel": "Read",
      "resourceTypes": {
        "recoveryPoint": {
          "required": true
        }
      }
    },
    "DescribeRestoreJob": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRestoreJob.html",
      "description": "Describes a restore job.",
      "accessLevel": "Read"
    },
    "ExportBackupPlanTemplate": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ExportBackupPlanTemplate.html",
      "description": "Exports a backup plan as a JSON.",
      "accessLevel": "Read"
    },
    "GetBackupPlan": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlan.html",
      "description": "Gets a backup plan.",
      "accessLevel": "Read",
      "resourceTypes": {
        "backupPlan": {
          "required": true
        }
      }
    },
    "GetBackupPlanFromJSON": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlanFromJSON.html",
      "description": "Transforms a JSON to a backup plan.",
      "accessLevel": "Read"
    },
    "GetBackupPlanFromTemplate": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlanFromTemplate.html",
      "description": "Transforms a template to a backup plan.",
      "accessLevel": "Read"
    },
    "GetBackupSelection": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupSelection.html",
      "description": "Gets a backup plan resource assignment.",
      "accessLevel": "Read",
      "resourceTypes": {
        "backupPlan": {
          "required": true
        }
      }
    },
    "GetBackupVaultAccessPolicy": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupVaultAccessPolicy.html",
      "description": "Gets backup vault access policy.",
      "accessLevel": "Read",
      "resourceTypes": {
        "backupVault": {
          "required": true
        }
      }
    },
    "GetBackupVaultNotifications": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupVaultNotifications.html",
      "description": "Gets backup vault notifications.",
      "accessLevel": "Read",
      "resourceTypes": {
        "backupVault": {
          "required": true
        }
      }
    },
    "GetRecoveryPointRestoreMetadata": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRecoveryPointRestoreMetadata.html",
      "description": "Gets recovery point restore metadata.",
      "accessLevel": "Read",
      "resourceTypes": {
        "recoveryPoint": {
          "required": true
        }
      }
    },
    "GetSupportedResourceTypes": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetSupportedResourceTypes.html",
      "description": "Gets supported resource types.",
      "accessLevel": "Read"
    },
    "ListBackupJobs": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupJobs.html",
      "description": "Lists backup jobs.",
      "accessLevel": "List"
    },
    "ListBackupPlanTemplates": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlanTemplates.html",
      "description": "Lists backup plan templates provided by AWS Backup.",
      "accessLevel": "List"
    },
    "ListBackupPlanVersions": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlanVersions.html",
      "description": "Lists backup plan versions.",
      "accessLevel": "List",
      "resourceTypes": {
        "backupPlan": {
          "required": true
        }
      }
    },
    "ListBackupPlans": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlans.html",
      "description": "Lists backup plans.",
      "accessLevel": "List"
    },
    "ListBackupSelections": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupSelections.html",
      "description": "Lists resource assignments for a specific backup plan.",
      "accessLevel": "List",
      "resourceTypes": {
        "backupPlan": {
          "required": true
        }
      }
    },
    "ListBackupVaults": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupVaults.html",
      "description": "Lists backup vaults.",
      "accessLevel": "List"
    },
    "ListCopyJobs": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListCopyJobs.html",
      "description": "List copy jobs",
      "accessLevel": "List"
    },
    "ListProtectedResources": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListProtectedResources.html",
      "description": "Lists protected resources by AWS Backup.",
      "accessLevel": "List"
    },
    "ListRecoveryPointsByBackupVault": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByBackupVault.html",
      "description": "Lists recovery points inside a backup vault.",
      "accessLevel": "List",
      "resourceTypes": {
        "backupVault": {
          "required": true
        }
      }
    },
    "ListRecoveryPointsByResource": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByResource.html",
      "description": "Lists recovery points for a resource.",
      "accessLevel": "List"
    },
    "ListRestoreJobs": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreJobs.html",
      "description": "Lists restore jobs.",
      "accessLevel": "List"
    },
    "ListTags": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListTags.html",
      "description": "Lists tags for a resource.",
      "accessLevel": "List"
    },
    "PutBackupVaultAccessPolicy": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultAccessPolicy.html",
      "description": "Adds an access policy to the backup vault.",
      "accessLevel": "Write",
      "resourceTypes": {
        "backupVault": {
          "required": true
        }
      }
    },
    "PutBackupVaultNotifications": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultNotifications.html",
      "description": "Adds an SNS topic to the backup vault.",
      "accessLevel": "Write",
      "resourceTypes": {
        "backupVault": {
          "required": true
        }
      }
    },
    "StartBackupJob": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartBackupJob.html",
      "description": "Starts a new backup job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "backupVault": {
          "required": true
        }
      }
    },
    "StartCopyJob": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartCopyJob.html",
      "description": "Copy a backup from a source region to a destination region.",
      "accessLevel": "Write",
      "resourceTypes": {
        "recoveryPoint": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "StartRestoreJob": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartRestoreJob.html",
      "description": "Starts a new restore job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "recoveryPoint": {
          "required": true
        }
      }
    },
    "StopBackupJob": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StopBackupJob.html",
      "description": "Stops a backup job.",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_TagResource.html",
      "description": "Tags a resource.",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UntagResource.html",
      "description": "Untags a resource.",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateBackupPlan": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateBackupPlan.html",
      "description": "Updates a backup plan.",
      "accessLevel": "Write",
      "resourceTypes": {
        "backupPlan": {
          "required": true
        }
      }
    },
    "UpdateRecoveryPointLifecycle": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRecoveryPointLifecycle.html",
      "description": "Updates the lifecycle of the recovery point.",
      "accessLevel": "Write",
      "resourceTypes": {
        "recoveryPoint": {
          "required": true
        }
      }
    }
  };
  public resourceTypes : ResourceTypes = {
    "backupVault": {
      "name": "backupVault",
      "arn": "arn:${Partition}:backup:${Region}:${Account}:backup-vault:${BackupVaultName}",
      "conditionKeys": []
    },
    "backupPlan": {
      "name": "backupPlan",
      "arn": "arn:${Partition}:backup:${Region}:${Account}:backup-plan:${BackupPlanId}",
      "conditionKeys": []
    },
    "recoveryPoint": {
      "name": "recoveryPoint",
      "arn": "arn:${Partition}:${Vendor}:${Region}:${Account}:${ResourceType}:${RecoveryPointId}",
      "conditionKeys": []
    }
  };

  /**
   * Copy into a backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CopyIntoBackupVault.html
   */
  public copyIntoBackupVault () {
    this.add('backup:CopyIntoBackupVault');
    return this;
  }

  /**
   * Creates a new backup plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupPlan.html
   */
  public createBackupPlan () {
    this.add('backup:CreateBackupPlan');
    return this;
  }

  /**
   * Creates a new resource assignment in a backup plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupSelection.html
   */
  public createBackupSelection () {
    this.add('backup:CreateBackupSelection');
    return this;
  }

  /**
   * Creates a new backup vault.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupVault.html
   */
  public createBackupVault () {
    this.add('backup:CreateBackupVault');
    return this;
  }

  /**
   * Deletes a backup plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupPlan.html
   */
  public deleteBackupPlan () {
    this.add('backup:DeleteBackupPlan');
    return this;
  }

  /**
   * Deletes a resource assignment from a backup plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupSelection.html
   */
  public deleteBackupSelection () {
    this.add('backup:DeleteBackupSelection');
    return this;
  }

  /**
   * Deletes a backup vault.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVault.html
   */
  public deleteBackupVault () {
    this.add('backup:DeleteBackupVault');
    return this;
  }

  /**
   * Deletes backup vault access policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultAccessPolicy.html
   */
  public deleteBackupVaultAccessPolicy () {
    this.add('backup:DeleteBackupVaultAccessPolicy');
    return this;
  }

  /**
   * Remove notifications from backup vault.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultNotifications.html
   */
  public deleteBackupVaultNotifications () {
    this.add('backup:DeleteBackupVaultNotifications');
    return this;
  }

  /**
   * Deletes a recovery point from a backup vault.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteRecoveryPoint.html
   */
  public deleteRecoveryPoint () {
    this.add('backup:DeleteRecoveryPoint');
    return this;
  }

  /**
   * Describes a backup job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeBackupJob.html
   */
  public describeBackupJob () {
    this.add('backup:DescribeBackupJob');
    return this;
  }

  /**
   * Creates a new backup vault with the specified name.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeBackupVault.html
   */
  public describeBackupVault () {
    this.add('backup:DescribeBackupVault');
    return this;
  }

  /**
   * Describes a copy job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeCopyJob.html
   */
  public describeCopyJob () {
    this.add('backup:DescribeCopyJob');
    return this;
  }

  /**
   * Describes a protected resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeProtectedResource.html
   */
  public describeProtectedResource () {
    this.add('backup:DescribeProtectedResource');
    return this;
  }

  /**
   * Describes a recovery point.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRecoveryPoint.html
   */
  public describeRecoveryPoint () {
    this.add('backup:DescribeRecoveryPoint');
    return this;
  }

  /**
   * Describes a restore job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRestoreJob.html
   */
  public describeRestoreJob () {
    this.add('backup:DescribeRestoreJob');
    return this;
  }

  /**
   * Exports a backup plan as a JSON.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ExportBackupPlanTemplate.html
   */
  public exportBackupPlanTemplate () {
    this.add('backup:ExportBackupPlanTemplate');
    return this;
  }

  /**
   * Gets a backup plan.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlan.html
   */
  public getBackupPlan () {
    this.add('backup:GetBackupPlan');
    return this;
  }

  /**
   * Transforms a JSON to a backup plan.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlanFromJSON.html
   */
  public getBackupPlanFromJSON () {
    this.add('backup:GetBackupPlanFromJSON');
    return this;
  }

  /**
   * Transforms a template to a backup plan.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlanFromTemplate.html
   */
  public getBackupPlanFromTemplate () {
    this.add('backup:GetBackupPlanFromTemplate');
    return this;
  }

  /**
   * Gets a backup plan resource assignment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupSelection.html
   */
  public getBackupSelection () {
    this.add('backup:GetBackupSelection');
    return this;
  }

  /**
   * Gets backup vault access policy.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupVaultAccessPolicy.html
   */
  public getBackupVaultAccessPolicy () {
    this.add('backup:GetBackupVaultAccessPolicy');
    return this;
  }

  /**
   * Gets backup vault notifications.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupVaultNotifications.html
   */
  public getBackupVaultNotifications () {
    this.add('backup:GetBackupVaultNotifications');
    return this;
  }

  /**
   * Gets recovery point restore metadata.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRecoveryPointRestoreMetadata.html
   */
  public getRecoveryPointRestoreMetadata () {
    this.add('backup:GetRecoveryPointRestoreMetadata');
    return this;
  }

  /**
   * Gets supported resource types.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetSupportedResourceTypes.html
   */
  public getSupportedResourceTypes () {
    this.add('backup:GetSupportedResourceTypes');
    return this;
  }

  /**
   * Lists backup jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupJobs.html
   */
  public listBackupJobs () {
    this.add('backup:ListBackupJobs');
    return this;
  }

  /**
   * Lists backup plan templates provided by AWS Backup.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlanTemplates.html
   */
  public listBackupPlanTemplates () {
    this.add('backup:ListBackupPlanTemplates');
    return this;
  }

  /**
   * Lists backup plan versions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlanVersions.html
   */
  public listBackupPlanVersions () {
    this.add('backup:ListBackupPlanVersions');
    return this;
  }

  /**
   * Lists backup plans.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlans.html
   */
  public listBackupPlans () {
    this.add('backup:ListBackupPlans');
    return this;
  }

  /**
   * Lists resource assignments for a specific backup plan.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupSelections.html
   */
  public listBackupSelections () {
    this.add('backup:ListBackupSelections');
    return this;
  }

  /**
   * Lists backup vaults.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupVaults.html
   */
  public listBackupVaults () {
    this.add('backup:ListBackupVaults');
    return this;
  }

  /**
   * List copy jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListCopyJobs.html
   */
  public listCopyJobs () {
    this.add('backup:ListCopyJobs');
    return this;
  }

  /**
   * Lists protected resources by AWS Backup.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListProtectedResources.html
   */
  public listProtectedResources () {
    this.add('backup:ListProtectedResources');
    return this;
  }

  /**
   * Lists recovery points inside a backup vault.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByBackupVault.html
   */
  public listRecoveryPointsByBackupVault () {
    this.add('backup:ListRecoveryPointsByBackupVault');
    return this;
  }

  /**
   * Lists recovery points for a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByResource.html
   */
  public listRecoveryPointsByResource () {
    this.add('backup:ListRecoveryPointsByResource');
    return this;
  }

  /**
   * Lists restore jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreJobs.html
   */
  public listRestoreJobs () {
    this.add('backup:ListRestoreJobs');
    return this;
  }

  /**
   * Lists tags for a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListTags.html
   */
  public listTags () {
    this.add('backup:ListTags');
    return this;
  }

  /**
   * Adds an access policy to the backup vault.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultAccessPolicy.html
   */
  public putBackupVaultAccessPolicy () {
    this.add('backup:PutBackupVaultAccessPolicy');
    return this;
  }

  /**
   * Adds an SNS topic to the backup vault.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultNotifications.html
   */
  public putBackupVaultNotifications () {
    this.add('backup:PutBackupVaultNotifications');
    return this;
  }

  /**
   * Starts a new backup job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartBackupJob.html
   */
  public startBackupJob () {
    this.add('backup:StartBackupJob');
    return this;
  }

  /**
   * Copy a backup from a source region to a destination region.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartCopyJob.html
   */
  public startCopyJob () {
    this.add('backup:StartCopyJob');
    return this;
  }

  /**
   * Starts a new restore job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartRestoreJob.html
   */
  public startRestoreJob () {
    this.add('backup:StartRestoreJob');
    return this;
  }

  /**
   * Stops a backup job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StopBackupJob.html
   */
  public stopBackupJob () {
    this.add('backup:StopBackupJob');
    return this;
  }

  /**
   * Tags a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_TagResource.html
   */
  public tagResource () {
    this.add('backup:TagResource');
    return this;
  }

  /**
   * Untags a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UntagResource.html
   */
  public untagResource () {
    this.add('backup:UntagResource');
    return this;
  }

  /**
   * Updates a backup plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateBackupPlan.html
   */
  public updateBackupPlan () {
    this.add('backup:UpdateBackupPlan');
    return this;
  }

  /**
   * Updates the lifecycle of the recovery point.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRecoveryPointLifecycle.html
   */
  public updateRecoveryPointLifecycle () {
    this.add('backup:UpdateRecoveryPointLifecycle');
    return this;
  }
}
