import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [elasticfilesystem](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticfilesystem.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Elasticfilesystem extends PolicyStatement {
  public servicePrefix = 'elasticfilesystem';
  protected actionList: Actions = {
    "Backup": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/efs-backup-solutions.html",
      "description": "Starts a backup job for an existing file system.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "ClientMount": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html",
      "description": "Permission for allowing read-access to a file system.",
      "accessLevel": "Read",
      "conditions": [
        "elasticfilesystem:AccessPointArn"
      ]
    },
    "ClientRootAccess": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html",
      "description": "Permission for allowing root-access to a file system.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      },
      "conditions": [
        "elasticfilesystem:AccessPointArn"
      ]
    },
    "ClientWrite": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html",
      "description": "Permission for allowing write-access to a file system.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      },
      "conditions": [
        "elasticfilesystem:AccessPointArn"
      ]
    },
    "CreateAccessPoint": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_CreateAccessPoint.html",
      "description": "Creates an access point for the specified file system.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "CreateFileSystem": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_CreateFileSystem.html",
      "description": "Creates a new, empty file system.",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "elasticfilesystem:Encrypted"
      ]
    },
    "CreateMountTarget": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_CreateMountTarget.html",
      "description": "Creates a mount target for a file system.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "CreateTags": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_CreateTags.html",
      "description": "Creates or overwrites tags associated with a file system.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteAccessPoint": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_DeleteAccessPoint.html",
      "description": "Deletes the specified access point.",
      "accessLevel": "Write",
      "resourceTypes": {
        "access-point": {
          "required": true
        }
      }
    },
    "DeleteFileSystem": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_DeleteFileSystem.html",
      "description": "Deletes a file system, permanently severing access to its contents.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "DeleteFileSystemPolicy": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_DeleteFileSystemPolicy.html",
      "description": "Clears the resource-level policy for a given file system.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "DeleteMountTarget": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_DeleteMountTarget.html",
      "description": "Deletes the specified mount target.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "DeleteTags": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_DeleteTags.html",
      "description": "Deletes the specified tags from a file system.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "DescribeAccessPoints": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_DescribeAccessPoints.html",
      "description": "Returns the descriptions of Amazon EFS access points.",
      "accessLevel": "List",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "DescribeBackupPolicy": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_DescribeBackupPolicy.html",
      "description": "Returns the current BackupPolicy object for the specified Amazon EFS file system.",
      "accessLevel": "Read",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "DescribeFileSystemPolicy": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_DescribeFileSystemPolicy.html",
      "description": "Returns the current resource-level policy for a given file system.",
      "accessLevel": "Read",
      "resourceTypes": {
        "file-system": {
          "required": false
        }
      }
    },
    "DescribeFileSystems": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_DescribeFileSystems.html",
      "description": "Returns the description of a specific Amazon EFS file system if either the file system CreationToken or the FileSystemId is provided; otherwise, returns descriptions of all file systems owned by the caller's AWS account in the AWS region of the endpoint that you're calling.",
      "accessLevel": "List",
      "resourceTypes": {
        "file-system": {
          "required": false
        }
      }
    },
    "DescribeLifecycleConfiguration": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_DescribeLifecycleConfiguration.html",
      "description": "Returns the current LifecycleConfiguration object for the specified Amazon EFS file system.",
      "accessLevel": "Read",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "DescribeMountTargetSecurityGroups": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_DescribeMountTargetSecurityGroups.html",
      "description": "Returns the security groups currently in effect for a mount target.",
      "accessLevel": "Read",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "DescribeMountTargets": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_DescribeMountTargets.html",
      "description": "Returns the descriptions of all the current mount targets, or a specific mount target, for a file system.",
      "accessLevel": "Read",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "DescribeTags": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_DescribeTags.html",
      "description": "Returns the tags associated with a file system.",
      "accessLevel": "Read",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_ListTagsForResource.html",
      "description": "Returns the tags associated with the specified Amazon EFS resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "ModifyMountTargetSecurityGroups": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_ModifyMountTargetSecurityGroups.html",
      "description": "Modifies the set of security groups in effect for a mount target.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "PutBackupPolicy": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_PutBackupPolicy.html",
      "description": "Enables automatic backups with AWS Backup by creating a new BackupPolicy object.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "PutFileSystemPolicy": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_PutFileSystemPolicy.html",
      "description": "Apply a resource-level policy granting and/or restricting actions from given actors for the specified file system.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "PutLifecycleConfiguration": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_PutLifecycleConfiguration.html",
      "description": "Enables lifecycle management by creating a new LifecycleConfiguration object.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "Restore": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/efs-backup-solutions.html",
      "description": "Starts a restore job for an existing file system.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_TagResource.html",
      "description": "Creates or overwrites tags associated with the specified Amazon EFS resource.",
      "accessLevel": "Tagging"
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_UntagResource.html",
      "description": "Deletes the specified tags from a specified Amazon EFS resource.",
      "accessLevel": "Tagging"
    },
    "UpdateFileSystem": {
      "url": "https://docs.aws.amazon.com/efs/latest/ug/API_UpdateFileSystem.html",
      "description": "Updates the throughput mode or the amount of provisioned throughput of an existing file system.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "file-system": {
      "name": "file-system",
      "url": "https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-resources",
      "arn": "arn:${Partition}:elasticfilesystem:${Region}:${Account}:file-system/${FileSystemId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "access-point": {
      "name": "access-point",
      "url": "https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-resources",
      "arn": "arn:${Partition}:elasticfilesystem:${Region}:${Account}:access-point/${AccessPointId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [elasticfilesystem](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticfilesystem.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Starts a backup job for an existing file system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-backup-solutions.html
   */
  public toBackup() {
    this.add('elasticfilesystem:Backup');
    return this;
  }

  /**
   * Permission for allowing read-access to a file system.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAccessPointArn()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html
   */
  public toClientMount() {
    this.add('elasticfilesystem:ClientMount');
    return this;
  }

  /**
   * Permission for allowing root-access to a file system.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccessPointArn()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html
   */
  public toClientRootAccess() {
    this.add('elasticfilesystem:ClientRootAccess');
    return this;
  }

  /**
   * Permission for allowing write-access to a file system.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccessPointArn()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html
   */
  public toClientWrite() {
    this.add('elasticfilesystem:ClientWrite');
    return this;
  }

  /**
   * Creates an access point for the specified file system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_CreateAccessPoint.html
   */
  public toCreateAccessPoint() {
    this.add('elasticfilesystem:CreateAccessPoint');
    return this;
  }

  /**
   * Creates a new, empty file system.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifEncrypted()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_CreateFileSystem.html
   */
  public toCreateFileSystem() {
    this.add('elasticfilesystem:CreateFileSystem');
    return this;
  }

  /**
   * Creates a mount target for a file system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_CreateMountTarget.html
   */
  public toCreateMountTarget() {
    this.add('elasticfilesystem:CreateMountTarget');
    return this;
  }

  /**
   * Creates or overwrites tags associated with a file system.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_CreateTags.html
   */
  public toCreateTags() {
    this.add('elasticfilesystem:CreateTags');
    return this;
  }

  /**
   * Deletes the specified access point.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteAccessPoint.html
   */
  public toDeleteAccessPoint() {
    this.add('elasticfilesystem:DeleteAccessPoint');
    return this;
  }

  /**
   * Deletes a file system, permanently severing access to its contents.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteFileSystem.html
   */
  public toDeleteFileSystem() {
    this.add('elasticfilesystem:DeleteFileSystem');
    return this;
  }

  /**
   * Clears the resource-level policy for a given file system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteFileSystemPolicy.html
   */
  public toDeleteFileSystemPolicy() {
    this.add('elasticfilesystem:DeleteFileSystemPolicy');
    return this;
  }

  /**
   * Deletes the specified mount target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteMountTarget.html
   */
  public toDeleteMountTarget() {
    this.add('elasticfilesystem:DeleteMountTarget');
    return this;
  }

  /**
   * Deletes the specified tags from a file system.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DeleteTags.html
   */
  public toDeleteTags() {
    this.add('elasticfilesystem:DeleteTags');
    return this;
  }

  /**
   * Returns the descriptions of Amazon EFS access points.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeAccessPoints.html
   */
  public toDescribeAccessPoints() {
    this.add('elasticfilesystem:DescribeAccessPoints');
    return this;
  }

  /**
   * Returns the current BackupPolicy object for the specified Amazon EFS file system.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeBackupPolicy.html
   */
  public toDescribeBackupPolicy() {
    this.add('elasticfilesystem:DescribeBackupPolicy');
    return this;
  }

  /**
   * Returns the current resource-level policy for a given file system.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeFileSystemPolicy.html
   */
  public toDescribeFileSystemPolicy() {
    this.add('elasticfilesystem:DescribeFileSystemPolicy');
    return this;
  }

  /**
   * Returns the description of a specific Amazon EFS file system if either the file system CreationToken or the FileSystemId is provided; otherwise, returns descriptions of all file systems owned by the caller's AWS account in the AWS region of the endpoint that you're calling.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeFileSystems.html
   */
  public toDescribeFileSystems() {
    this.add('elasticfilesystem:DescribeFileSystems');
    return this;
  }

  /**
   * Returns the current LifecycleConfiguration object for the specified Amazon EFS file system.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeLifecycleConfiguration.html
   */
  public toDescribeLifecycleConfiguration() {
    this.add('elasticfilesystem:DescribeLifecycleConfiguration');
    return this;
  }

  /**
   * Returns the security groups currently in effect for a mount target.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeMountTargetSecurityGroups.html
   */
  public toDescribeMountTargetSecurityGroups() {
    this.add('elasticfilesystem:DescribeMountTargetSecurityGroups');
    return this;
  }

  /**
   * Returns the descriptions of all the current mount targets, or a specific mount target, for a file system.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeMountTargets.html
   */
  public toDescribeMountTargets() {
    this.add('elasticfilesystem:DescribeMountTargets');
    return this;
  }

  /**
   * Returns the tags associated with a file system.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_DescribeTags.html
   */
  public toDescribeTags() {
    this.add('elasticfilesystem:DescribeTags');
    return this;
  }

  /**
   * Returns the tags associated with the specified Amazon EFS resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('elasticfilesystem:ListTagsForResource');
    return this;
  }

  /**
   * Modifies the set of security groups in effect for a mount target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_ModifyMountTargetSecurityGroups.html
   */
  public toModifyMountTargetSecurityGroups() {
    this.add('elasticfilesystem:ModifyMountTargetSecurityGroups');
    return this;
  }

  /**
   * Enables automatic backups with AWS Backup by creating a new BackupPolicy object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_PutBackupPolicy.html
   */
  public toPutBackupPolicy() {
    this.add('elasticfilesystem:PutBackupPolicy');
    return this;
  }

  /**
   * Apply a resource-level policy granting and/or restricting actions from given actors for the specified file system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_PutFileSystemPolicy.html
   */
  public toPutFileSystemPolicy() {
    this.add('elasticfilesystem:PutFileSystemPolicy');
    return this;
  }

  /**
   * Enables lifecycle management by creating a new LifecycleConfiguration object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_PutLifecycleConfiguration.html
   */
  public toPutLifecycleConfiguration() {
    this.add('elasticfilesystem:PutLifecycleConfiguration');
    return this;
  }

  /**
   * Starts a restore job for an existing file system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/efs-backup-solutions.html
   */
  public toRestore() {
    this.add('elasticfilesystem:Restore');
    return this;
  }

  /**
   * Creates or overwrites tags associated with the specified Amazon EFS resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_TagResource.html
   */
  public toTagResource() {
    this.add('elasticfilesystem:TagResource');
    return this;
  }

  /**
   * Deletes the specified tags from a specified Amazon EFS resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('elasticfilesystem:UntagResource');
    return this;
  }

  /**
   * Updates the throughput mode or the amount of provisioned throughput of an existing file system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/efs/latest/ug/API_UpdateFileSystem.html
   */
  public toUpdateFileSystem() {
    this.add('elasticfilesystem:UpdateFileSystem');
    return this;
  }

  /**
   * Adds a resource of type file-system to the statement
   *
   * https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-resources
   *
   * @param fileSystemId - Identifier for the fileSystemId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFileSystem(fileSystemId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticfilesystem:${Region}:${Account}:file-system/${FileSystemId}';
    arn = arn.replace('${FileSystemId}', fileSystemId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type access-point to the statement
   *
   * https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-resources
   *
   * @param accessPointId - Identifier for the accessPointId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccessPoint(accessPointId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticfilesystem:${Region}:${Account}:access-point/${AccessPointId}';
    arn = arn.replace('${AccessPointId}', accessPointId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The ARN of the access point used to mount the file system
   *
   * Applies to actions:
   * - .toClientMount()
   * - .toClientRootAccess()
   * - .toClientWrite()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccessPointArn(value: string | string[], operator?: string) {
    return this.if(`elasticfilesystem:AccessPointArn`, value, operator || 'StringLike');
  }

  /**
   * Control encryption behavior for new EFS file systems
   *
   * Applies to actions:
   * - .toCreateFileSystem()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEncrypted(value?: boolean) {
    return this.if(`elasticfilesystem:Encrypted`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }
}
