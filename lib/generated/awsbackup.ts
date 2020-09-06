import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [backup](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbackup.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Backup extends PolicyStatement {
  public servicePrefix = 'backup';
  protected actionList: Actions = {
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
      "dependentActions": [
        "iam:PassRole"
      ],
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
    "DescribeRegionSettings": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRegionSettings.html",
      "description": "Describes region settings",
      "accessLevel": "Read"
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
      "accessLevel": "List",
      "resourceTypes": {
        "backupPlan": {
          "required": false
        },
        "backupVault": {
          "required": false
        },
        "recoveryPoint": {
          "required": false
        }
      }
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
      "dependentActions": [
        "iam:PassRole"
      ],
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
      "dependentActions": [
        "iam:PassRole"
      ],
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
      "dependentActions": [
        "iam:PassRole"
      ],
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
      "resourceTypes": {
        "backupPlan": {
          "required": false
        },
        "backupVault": {
          "required": false
        },
        "recoveryPoint": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UntagResource.html",
      "description": "Untags a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "backupPlan": {
          "required": false
        },
        "backupVault": {
          "required": false
        },
        "recoveryPoint": {
          "required": false
        }
      },
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
    },
    "UpdateRegionSettings": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRegionSettings.html",
      "description": "Describes region settings",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "backupVault": {
      "name": "backupVault",
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/vaults.html",
      "arn": "arn:${Partition}:backup:${Region}:${Account}:backup-vault:${BackupVaultName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "backupPlan": {
      "name": "backupPlan",
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/about-backup-plans.html",
      "arn": "arn:${Partition}:backup:${Region}:${Account}:backup-plan:${BackupPlanId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "recoveryPoint": {
      "name": "recoveryPoint",
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/recovery-points.html",
      "arn": "arn:${Partition}:backup:${Region}:${Account}:recovery-point:${RecoveryPointId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [backup](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbackup.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Copy into a backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CopyIntoBackupVault.html
   */
  public toCopyIntoBackupVault() {
    this.add('backup:CopyIntoBackupVault');
    return this;
  }

  /**
   * Creates a new backup plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupPlan.html
   */
  public toCreateBackupPlan() {
    this.add('backup:CreateBackupPlan');
    return this;
  }

  /**
   * Creates a new resource assignment in a backup plan.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupSelection.html
   */
  public toCreateBackupSelection() {
    this.add('backup:CreateBackupSelection');
    return this;
  }

  /**
   * Creates a new backup vault.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupVault.html
   */
  public toCreateBackupVault() {
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
  public toDeleteBackupPlan() {
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
  public toDeleteBackupSelection() {
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
  public toDeleteBackupVault() {
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
  public toDeleteBackupVaultAccessPolicy() {
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
  public toDeleteBackupVaultNotifications() {
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
  public toDeleteRecoveryPoint() {
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
  public toDescribeBackupJob() {
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
  public toDescribeBackupVault() {
    this.add('backup:DescribeBackupVault');
    return this;
  }

  /**
   * Describes a copy job
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeCopyJob.html
   */
  public toDescribeCopyJob() {
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
  public toDescribeProtectedResource() {
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
  public toDescribeRecoveryPoint() {
    this.add('backup:DescribeRecoveryPoint');
    return this;
  }

  /**
   * Describes region settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRegionSettings.html
   */
  public toDescribeRegionSettings() {
    this.add('backup:DescribeRegionSettings');
    return this;
  }

  /**
   * Describes a restore job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRestoreJob.html
   */
  public toDescribeRestoreJob() {
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
  public toExportBackupPlanTemplate() {
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
  public toGetBackupPlan() {
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
  public toGetBackupPlanFromJSON() {
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
  public toGetBackupPlanFromTemplate() {
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
  public toGetBackupSelection() {
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
  public toGetBackupVaultAccessPolicy() {
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
  public toGetBackupVaultNotifications() {
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
  public toGetRecoveryPointRestoreMetadata() {
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
  public toGetSupportedResourceTypes() {
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
  public toListBackupJobs() {
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
  public toListBackupPlanTemplates() {
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
  public toListBackupPlanVersions() {
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
  public toListBackupPlans() {
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
  public toListBackupSelections() {
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
  public toListBackupVaults() {
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
  public toListCopyJobs() {
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
  public toListProtectedResources() {
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
  public toListRecoveryPointsByBackupVault() {
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
  public toListRecoveryPointsByResource() {
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
  public toListRestoreJobs() {
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
  public toListTags() {
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
  public toPutBackupVaultAccessPolicy() {
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
  public toPutBackupVaultNotifications() {
    this.add('backup:PutBackupVaultNotifications');
    return this;
  }

  /**
   * Starts a new backup job.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartBackupJob.html
   */
  public toStartBackupJob() {
    this.add('backup:StartBackupJob');
    return this;
  }

  /**
   * Copy a backup from a source region to a destination region.
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
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartCopyJob.html
   */
  public toStartCopyJob() {
    this.add('backup:StartCopyJob');
    return this;
  }

  /**
   * Starts a new restore job.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartRestoreJob.html
   */
  public toStartRestoreJob() {
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
  public toStopBackupJob() {
    this.add('backup:StopBackupJob');
    return this;
  }

  /**
   * Tags a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_TagResource.html
   */
  public toTagResource() {
    this.add('backup:TagResource');
    return this;
  }

  /**
   * Untags a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UntagResource.html
   */
  public toUntagResource() {
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
  public toUpdateBackupPlan() {
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
  public toUpdateRecoveryPointLifecycle() {
    this.add('backup:UpdateRecoveryPointLifecycle');
    return this;
  }

  /**
   * Describes region settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRegionSettings.html
   */
  public toUpdateRegionSettings() {
    this.add('backup:UpdateRegionSettings');
    return this;
  }

  /**
   * Adds a resource of type backupVault to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/vaults.html
   *
   * @param backupVaultName - Identifier for the backupVaultName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBackupVault(backupVaultName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:backup:${Region}:${Account}:backup-vault:${BackupVaultName}';
    arn = arn.replace('${BackupVaultName}', backupVaultName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type backupPlan to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/about-backup-plans.html
   *
   * @param backupPlanId - Identifier for the backupPlanId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBackupPlan(backupPlanId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:backup:${Region}:${Account}:backup-plan:${BackupPlanId}';
    arn = arn.replace('${BackupPlanId}', backupPlanId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type recoveryPoint to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/recovery-points.html
   *
   * @param recoveryPointId - Identifier for the recoveryPointId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRecoveryPoint(recoveryPointId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:backup:${Region}:${Account}:recovery-point:${RecoveryPointId}';
    arn = arn.replace('${RecoveryPointId}', recoveryPointId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
