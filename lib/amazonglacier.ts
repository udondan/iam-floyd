import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service glacier
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonglacier.html
 */
export class Glacier extends PolicyStatement {
  public servicePrefix = 'glacier';
  public actions: Actions = {
    "AbortMultipartUpload": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html",
      "description": "Aborts a multipart upload identified by the upload ID",
      "accessLevel": "Write",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "AbortVaultLock": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-AbortVaultLock.html",
      "description": "Aborts the vault locking process if the vault lock is not in the Locked state",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "AddTagsToVault": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-AddTagsToVault.html",
      "description": "Adds the specified tags to a vault",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "CompleteMultipartUpload": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html",
      "description": "Completes a multipart upload process",
      "accessLevel": "Write",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "CompleteVaultLock": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-CompleteVaultLock.html",
      "description": "Completes the vault locking process",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "CreateVault": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html",
      "description": "Creates a new vault with the specified name",
      "accessLevel": "Write",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "DeleteArchive": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html",
      "description": "Deletes an archive from a vault",
      "accessLevel": "Write",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      },
      "conditions": [
        "glacier:ArchiveAgeInDays"
      ]
    },
    "DeleteVault": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html",
      "description": "Deletes a vault",
      "accessLevel": "Write",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "DeleteVaultAccessPolicy": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-DeleteVaultAccessPolicy.html",
      "description": "Deletes the access policy associated with the specified vault",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "DeleteVaultNotifications": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-delete.html",
      "description": "Deletes the notification configuration set for a vault",
      "accessLevel": "Write",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "DescribeJob": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html",
      "description": "Returns information about a job you previously initiated",
      "accessLevel": "Read",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "DescribeVault": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get..html",
      "description": "Returns information about a vault",
      "accessLevel": "Read",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "GetDataRetrievalPolicy": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetDataRetrievalPolicy.html",
      "description": "Returns the current data retrieval policy for the account and region specified in the GET request",
      "accessLevel": "Read"
    },
    "GetJobOutput": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html",
      "description": "Downloads the output of the job you initiated",
      "accessLevel": "Read",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "GetVaultAccessPolicy": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetVaultAccessPolicy.html",
      "description": "Retrieves the access-policy subresource set on the vault",
      "accessLevel": "Read",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "GetVaultLock": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetVaultLock.html",
      "description": "Retrieves attributes from the lock-policy subresource set on the specified vault",
      "accessLevel": "Read",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "GetVaultNotifications": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html",
      "description": "Retrieves the notification-configuration subresource set on the vault",
      "accessLevel": "Read",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "InitiateJob": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html",
      "description": "Initiates a job of the specified type",
      "accessLevel": "Write",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      },
      "conditions": [
        "glacier:ArchiveAgeInDays"
      ]
    },
    "InitiateMultipartUpload": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html",
      "description": "Initiates a multipart upload",
      "accessLevel": "Write",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "InitiateVaultLock": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-InitiateVaultLock.html",
      "description": "Initiates the vault locking process",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "ListJobs": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html",
      "description": "Lists jobs for a vault that are in-progress and jobs that have recently finished",
      "accessLevel": "List",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "ListMultipartUploads": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html",
      "description": "Lists in-progress multipart uploads for the specified vault",
      "accessLevel": "List",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "ListParts": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html",
      "description": "Lists the parts of an archive that have been uploaded in a specific multipart upload",
      "accessLevel": "List",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "ListProvisionedCapacity": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-ListProvisionedCapacity.html",
      "description": "This operation lists the provisioned capacity for the specified AWS account.",
      "accessLevel": "List"
    },
    "ListTagsForVault": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-ListTagsForVault.html",
      "description": "Lists all the tags attached to a vault",
      "accessLevel": "List",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "ListVaults": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html",
      "description": "Lists all vaults",
      "accessLevel": "List"
    },
    "PurchaseProvisionedCapacity": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-PurchaseProvisionedCapacity.html",
      "description": "This operation purchases a provisioned capacity unit for an AWS account.",
      "accessLevel": "Write"
    },
    "RemoveTagsFromVault": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-RemoveTagsFromVault.html",
      "description": "Removes one or more tags from the set of tags attached to a vault",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "SetDataRetrievalPolicy": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetDataRetrievalPolicy.html",
      "description": "Sets and then enacts a data retrieval policy in the region specified in the PUT request",
      "accessLevel": "Permissions management"
    },
    "SetVaultAccessPolicy": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html",
      "description": "Configures an access policy for a vault and will overwrite an existing policy",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "SetVaultNotifications": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html",
      "description": "Configures vault notifications",
      "accessLevel": "Write",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "UploadArchive": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html",
      "description": "Adds an archive to a vault",
      "accessLevel": "Write",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    },
    "UploadMultipartPart": {
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html",
      "description": "Uploads a part of an archive",
      "accessLevel": "Write",
      "resourceTypes": {
        "vault": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "vault": {
      "name": "vault",
      "url": "https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-vaults.html",
      "arn": "arn:${Partition}:glacier:${Region}:${Account}:vaults/${VaultName}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service glacier
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonglacier.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Aborts a multipart upload identified by the upload ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html
   */
  public abortMultipartUpload() {
    this.add('glacier:AbortMultipartUpload');
    return this;
  }

  /**
   * Aborts the vault locking process if the vault lock is not in the Locked state
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-AbortVaultLock.html
   */
  public abortVaultLock() {
    this.add('glacier:AbortVaultLock');
    return this;
  }

  /**
   * Adds the specified tags to a vault
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-AddTagsToVault.html
   */
  public addTagsToVault() {
    this.add('glacier:AddTagsToVault');
    return this;
  }

  /**
   * Completes a multipart upload process
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html
   */
  public completeMultipartUpload() {
    this.add('glacier:CompleteMultipartUpload');
    return this;
  }

  /**
   * Completes the vault locking process
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-CompleteVaultLock.html
   */
  public completeVaultLock() {
    this.add('glacier:CompleteVaultLock');
    return this;
  }

  /**
   * Creates a new vault with the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html
   */
  public createVault() {
    this.add('glacier:CreateVault');
    return this;
  }

  /**
   * Deletes an archive from a vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html
   */
  public deleteArchive() {
    this.add('glacier:DeleteArchive');
    return this;
  }

  /**
   * Deletes a vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html
   */
  public deleteVault() {
    this.add('glacier:DeleteVault');
    return this;
  }

  /**
   * Deletes the access policy associated with the specified vault
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-DeleteVaultAccessPolicy.html
   */
  public deleteVaultAccessPolicy() {
    this.add('glacier:DeleteVaultAccessPolicy');
    return this;
  }

  /**
   * Deletes the notification configuration set for a vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-delete.html
   */
  public deleteVaultNotifications() {
    this.add('glacier:DeleteVaultNotifications');
    return this;
  }

  /**
   * Returns information about a job you previously initiated
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html
   */
  public describeJob() {
    this.add('glacier:DescribeJob');
    return this;
  }

  /**
   * Returns information about a vault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get..html
   */
  public describeVault() {
    this.add('glacier:DescribeVault');
    return this;
  }

  /**
   * Returns the current data retrieval policy for the account and region specified in the GET request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetDataRetrievalPolicy.html
   */
  public getDataRetrievalPolicy() {
    this.add('glacier:GetDataRetrievalPolicy');
    return this;
  }

  /**
   * Downloads the output of the job you initiated
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html
   */
  public getJobOutput() {
    this.add('glacier:GetJobOutput');
    return this;
  }

  /**
   * Retrieves the access-policy subresource set on the vault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetVaultAccessPolicy.html
   */
  public getVaultAccessPolicy() {
    this.add('glacier:GetVaultAccessPolicy');
    return this;
  }

  /**
   * Retrieves attributes from the lock-policy subresource set on the specified vault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetVaultLock.html
   */
  public getVaultLock() {
    this.add('glacier:GetVaultLock');
    return this;
  }

  /**
   * Retrieves the notification-configuration subresource set on the vault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html
   */
  public getVaultNotifications() {
    this.add('glacier:GetVaultNotifications');
    return this;
  }

  /**
   * Initiates a job of the specified type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html
   */
  public initiateJob() {
    this.add('glacier:InitiateJob');
    return this;
  }

  /**
   * Initiates a multipart upload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html
   */
  public initiateMultipartUpload() {
    this.add('glacier:InitiateMultipartUpload');
    return this;
  }

  /**
   * Initiates the vault locking process
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-InitiateVaultLock.html
   */
  public initiateVaultLock() {
    this.add('glacier:InitiateVaultLock');
    return this;
  }

  /**
   * Lists jobs for a vault that are in-progress and jobs that have recently finished
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html
   */
  public listJobs() {
    this.add('glacier:ListJobs');
    return this;
  }

  /**
   * Lists in-progress multipart uploads for the specified vault
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html
   */
  public listMultipartUploads() {
    this.add('glacier:ListMultipartUploads');
    return this;
  }

  /**
   * Lists the parts of an archive that have been uploaded in a specific multipart upload
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html
   */
  public listParts() {
    this.add('glacier:ListParts');
    return this;
  }

  /**
   * This operation lists the provisioned capacity for the specified AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-ListProvisionedCapacity.html
   */
  public listProvisionedCapacity() {
    this.add('glacier:ListProvisionedCapacity');
    return this;
  }

  /**
   * Lists all the tags attached to a vault
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-ListTagsForVault.html
   */
  public listTagsForVault() {
    this.add('glacier:ListTagsForVault');
    return this;
  }

  /**
   * Lists all vaults
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html
   */
  public listVaults() {
    this.add('glacier:ListVaults');
    return this;
  }

  /**
   * This operation purchases a provisioned capacity unit for an AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-PurchaseProvisionedCapacity.html
   */
  public purchaseProvisionedCapacity() {
    this.add('glacier:PurchaseProvisionedCapacity');
    return this;
  }

  /**
   * Removes one or more tags from the set of tags attached to a vault
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-RemoveTagsFromVault.html
   */
  public removeTagsFromVault() {
    this.add('glacier:RemoveTagsFromVault');
    return this;
  }

  /**
   * Sets and then enacts a data retrieval policy in the region specified in the PUT request
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetDataRetrievalPolicy.html
   */
  public setDataRetrievalPolicy() {
    this.add('glacier:SetDataRetrievalPolicy');
    return this;
  }

  /**
   * Configures an access policy for a vault and will overwrite an existing policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html
   */
  public setVaultAccessPolicy() {
    this.add('glacier:SetVaultAccessPolicy');
    return this;
  }

  /**
   * Configures vault notifications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html
   */
  public setVaultNotifications() {
    this.add('glacier:SetVaultNotifications');
    return this;
  }

  /**
   * Adds an archive to a vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html
   */
  public uploadArchive() {
    this.add('glacier:UploadArchive');
    return this;
  }

  /**
   * Uploads a part of an archive
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html
   */
  public uploadMultipartPart() {
    this.add('glacier:UploadMultipartPart');
    return this;
  }

  /**
   * Adds a resource of type vault to the statement
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-vaults.html
   *
   * @param vaultName - Identifier for the vaultName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onVault(vaultName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glacier:${Region}:${Account}:vaults/${VaultName}';
    arn = arn.replace('${VaultName}', vaultName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * How long an archive has been stored in the vault, in days.
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/access-control-overview.html#specifying-conditions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifArchiveAgeInDays(value: string | string[], operator?: string) {
    const props: any = {};
    props[`glacier:ArchiveAgeInDays`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * A customer-defined tag.
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/access-control-overview.html#specifying-conditions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifResourceTagExists(value: string | string[], operator?: string) {
    const props: any = {};
    props[`glacier:ResourceTag/`] = value;
    return this.if(operator || 'StringEquals', props);
  }
}
