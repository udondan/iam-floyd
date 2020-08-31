import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [cloudhsm](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudhsm.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloudhsm extends PolicyStatement {
  public servicePrefix = 'cloudhsm';
  protected actionList: Actions = {
    "AddTagsToResource": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_AddTagsToResource.html",
      "description": "Adds or overwrites one or more tags for the specified AWS CloudHSM resource",
      "accessLevel": "Tagging"
    },
    "CopyBackupToRegion": {
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CopyBackupToRegion.html",
      "description": "Creates a copy of a backup in the specified region",
      "accessLevel": "Write",
      "resourceTypes": {
        "backup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateCluster": {
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateCluster.html",
      "description": "Creates a new AWS CloudHSM cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "backup": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateHapg": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_CreateHapg.html",
      "description": "Creates a high-availability partition group",
      "accessLevel": "Write"
    },
    "CreateHsm": {
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html",
      "description": "Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "CreateLunaClient": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_CreateLunaClient.html",
      "description": "Creates an HSM client",
      "accessLevel": "Write"
    },
    "DeleteBackup": {
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteBackup.html",
      "description": "Deletes the specified CloudHSM backup",
      "accessLevel": "Write",
      "resourceTypes": {
        "backup": {
          "required": true
        }
      }
    },
    "DeleteCluster": {
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteCluster.html",
      "description": "Deletes the specified AWS CloudHSM cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DeleteHapg": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DeleteHapg.html",
      "description": "Deletes a high-availability partition group",
      "accessLevel": "Write"
    },
    "DeleteHsm": {
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteHsm.html",
      "description": "Deletes the specified HSM",
      "accessLevel": "Write"
    },
    "DeleteLunaClient": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DeleteLunaClient.html",
      "description": "Deletes a client",
      "accessLevel": "Write"
    },
    "DescribeBackups": {
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeBackups.html",
      "description": "Gets information about backups of AWS CloudHSM clusters",
      "accessLevel": "Read"
    },
    "DescribeClusters": {
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html",
      "description": "Gets information about AWS CloudHSM clusters",
      "accessLevel": "Read"
    },
    "DescribeHapg": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeHapg.html",
      "description": "Retrieves information about a high-availability partition group",
      "accessLevel": "Read"
    },
    "DescribeHsm": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeHsm.html",
      "description": "Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number",
      "accessLevel": "Read"
    },
    "DescribeLunaClient": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeLunaClient.html",
      "description": "Retrieves information about an HSM client",
      "accessLevel": "Read"
    },
    "GetConfig": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_GetConfig.html",
      "description": "Gets the configuration files necessary to connect to all high availability partition groups the client is associated with",
      "accessLevel": "Read"
    },
    "InitializeCluster": {
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_InitializeCluster.html",
      "description": "Claims an AWS CloudHSM cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ListAvailableZones": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListAvailableZones.html",
      "description": "Lists the Availability Zones that have available AWS CloudHSM capacity",
      "accessLevel": "List"
    },
    "ListHapgs": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListHapgs.html",
      "description": "Lists the high-availability partition groups for the account",
      "accessLevel": "List"
    },
    "ListHsms": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListHsms.html",
      "description": "Retrieves the identifiers of all of the HSMs provisioned for the current customer",
      "accessLevel": "List"
    },
    "ListLunaClients": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListLunaClients.html",
      "description": "Lists all of the clients",
      "accessLevel": "List"
    },
    "ListTags": {
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_ListTags.html",
      "description": "Gets a list of tags for the specified AWS CloudHSM cluster",
      "accessLevel": "Read",
      "resourceTypes": {
        "backup": {
          "required": false
        },
        "cluster": {
          "required": false
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListTagsForResource.html",
      "description": "Returns a list of all tags for the specified AWS CloudHSM resource",
      "accessLevel": "Read"
    },
    "ModifyHapg": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyHapg.html",
      "description": "Modifies an existing high-availability partition group",
      "accessLevel": "Write"
    },
    "ModifyHsm": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyHsm.html",
      "description": "Modifies an HSM",
      "accessLevel": "Write"
    },
    "ModifyLunaClient": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyLunaClient.html",
      "description": "Modifies the certificate used by the client",
      "accessLevel": "Write"
    },
    "RemoveTagsFromResource": {
      "url": "https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_RemoveTagsFromResource.html",
      "description": "Removes one or more tags from the specified AWS CloudHSM resource",
      "accessLevel": "Tagging"
    },
    "RestoreBackup": {
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_RestoreBackup.html",
      "description": "Restores the specified CloudHSM backup",
      "accessLevel": "Write",
      "resourceTypes": {
        "backup": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_TagResource.html",
      "description": "Adds or overwrites one or more tags for the specified AWS CloudHSM cluster",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "backup": {
          "required": false
        },
        "cluster": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_UntagResource.html",
      "description": "Removes the specified tag or tags from the specified AWS CloudHSM cluster",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "backup": {
          "required": false
        },
        "cluster": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "backup": {
      "name": "backup",
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/userguide/backups.html",
      "arn": "arn:${Partition}:cloudhsm:${Region}:${Account}:backup/${CloudHsmBackupInstanceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "cluster": {
      "name": "cluster",
      "url": "https://docs.aws.amazon.com/cloudhsm/latest/userguide/clusters.html",
      "arn": "arn:${Partition}:cloudhsm:${Region}:${Account}:cluster/${CloudHsmClusterInstanceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [cloudhsm](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudhsm.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds or overwrites one or more tags for the specified AWS CloudHSM resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
    this.add('cloudhsm:AddTagsToResource');
    return this;
  }

  /**
   * Creates a copy of a backup in the specified region
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CopyBackupToRegion.html
   */
  public toCopyBackupToRegion() {
    this.add('cloudhsm:CopyBackupToRegion');
    return this;
  }

  /**
   * Creates a new AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateCluster.html
   */
  public toCreateCluster() {
    this.add('cloudhsm:CreateCluster');
    return this;
  }

  /**
   * Creates a high-availability partition group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_CreateHapg.html
   */
  public toCreateHapg() {
    this.add('cloudhsm:CreateHapg');
    return this;
  }

  /**
   * Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html
   */
  public toCreateHsm() {
    this.add('cloudhsm:CreateHsm');
    return this;
  }

  /**
   * Creates an HSM client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_CreateLunaClient.html
   */
  public toCreateLunaClient() {
    this.add('cloudhsm:CreateLunaClient');
    return this;
  }

  /**
   * Deletes the specified CloudHSM backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteBackup.html
   */
  public toDeleteBackup() {
    this.add('cloudhsm:DeleteBackup');
    return this;
  }

  /**
   * Deletes the specified AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteCluster.html
   */
  public toDeleteCluster() {
    this.add('cloudhsm:DeleteCluster');
    return this;
  }

  /**
   * Deletes a high-availability partition group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DeleteHapg.html
   */
  public toDeleteHapg() {
    this.add('cloudhsm:DeleteHapg');
    return this;
  }

  /**
   * Deletes the specified HSM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteHsm.html
   */
  public toDeleteHsm() {
    this.add('cloudhsm:DeleteHsm');
    return this;
  }

  /**
   * Deletes a client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DeleteLunaClient.html
   */
  public toDeleteLunaClient() {
    this.add('cloudhsm:DeleteLunaClient');
    return this;
  }

  /**
   * Gets information about backups of AWS CloudHSM clusters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeBackups.html
   */
  public toDescribeBackups() {
    this.add('cloudhsm:DescribeBackups');
    return this;
  }

  /**
   * Gets information about AWS CloudHSM clusters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html
   */
  public toDescribeClusters() {
    this.add('cloudhsm:DescribeClusters');
    return this;
  }

  /**
   * Retrieves information about a high-availability partition group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeHapg.html
   */
  public toDescribeHapg() {
    this.add('cloudhsm:DescribeHapg');
    return this;
  }

  /**
   * Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeHsm.html
   */
  public toDescribeHsm() {
    this.add('cloudhsm:DescribeHsm');
    return this;
  }

  /**
   * Retrieves information about an HSM client
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeLunaClient.html
   */
  public toDescribeLunaClient() {
    this.add('cloudhsm:DescribeLunaClient');
    return this;
  }

  /**
   * Gets the configuration files necessary to connect to all high availability partition groups the client is associated with
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_GetConfig.html
   */
  public toGetConfig() {
    this.add('cloudhsm:GetConfig');
    return this;
  }

  /**
   * Claims an AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_InitializeCluster.html
   */
  public toInitializeCluster() {
    this.add('cloudhsm:InitializeCluster');
    return this;
  }

  /**
   * Lists the Availability Zones that have available AWS CloudHSM capacity
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListAvailableZones.html
   */
  public toListAvailableZones() {
    this.add('cloudhsm:ListAvailableZones');
    return this;
  }

  /**
   * Lists the high-availability partition groups for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListHapgs.html
   */
  public toListHapgs() {
    this.add('cloudhsm:ListHapgs');
    return this;
  }

  /**
   * Retrieves the identifiers of all of the HSMs provisioned for the current customer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListHsms.html
   */
  public toListHsms() {
    this.add('cloudhsm:ListHsms');
    return this;
  }

  /**
   * Lists all of the clients
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListLunaClients.html
   */
  public toListLunaClients() {
    this.add('cloudhsm:ListLunaClients');
    return this;
  }

  /**
   * Gets a list of tags for the specified AWS CloudHSM cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    this.add('cloudhsm:ListTags');
    return this;
  }

  /**
   * Returns a list of all tags for the specified AWS CloudHSM resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('cloudhsm:ListTagsForResource');
    return this;
  }

  /**
   * Modifies an existing high-availability partition group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyHapg.html
   */
  public toModifyHapg() {
    this.add('cloudhsm:ModifyHapg');
    return this;
  }

  /**
   * Modifies an HSM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyHsm.html
   */
  public toModifyHsm() {
    this.add('cloudhsm:ModifyHsm');
    return this;
  }

  /**
   * Modifies the certificate used by the client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyLunaClient.html
   */
  public toModifyLunaClient() {
    this.add('cloudhsm:ModifyLunaClient');
    return this;
  }

  /**
   * Removes one or more tags from the specified AWS CloudHSM resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    this.add('cloudhsm:RemoveTagsFromResource');
    return this;
  }

  /**
   * Restores the specified CloudHSM backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_RestoreBackup.html
   */
  public toRestoreBackup() {
    this.add('cloudhsm:RestoreBackup');
    return this;
  }

  /**
   * Adds or overwrites one or more tags for the specified AWS CloudHSM cluster
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.add('cloudhsm:TagResource');
    return this;
  }

  /**
   * Removes the specified tag or tags from the specified AWS CloudHSM cluster
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('cloudhsm:UntagResource');
    return this;
  }

  /**
   * Adds a resource of type backup to the statement
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/userguide/backups.html
   *
   * @param cloudHsmBackupInstanceName - Identifier for the cloudHsmBackupInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBackup(cloudHsmBackupInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudhsm:${Region}:${Account}:backup/${CloudHsmBackupInstanceName}';
    arn = arn.replace('${CloudHsmBackupInstanceName}', cloudHsmBackupInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/userguide/clusters.html
   *
   * @param cloudHsmClusterInstanceName - Identifier for the cloudHsmClusterInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(cloudHsmClusterInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudhsm:${Region}:${Account}:cluster/${CloudHsmClusterInstanceName}';
    arn = arn.replace('${CloudHsmClusterInstanceName}', cloudHsmClusterInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCopyBackupToRegion()
   * - .toCreateCluster()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - backup
   * - cluster
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCopyBackupToRegion()
   * - .toCreateCluster()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
