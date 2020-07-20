import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [fsx](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfsx.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Fsx extends PolicyStatement {
  public servicePrefix = 'fsx';
  protected actionList: Actions = {
    "CancelDataRepositoryTask": {
      "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_CancelDataRepositoryTask.html",
      "description": "This action cancels a data repository task",
      "accessLevel": "Write",
      "resourceTypes": {
        "task": {
          "required": true
        }
      }
    },
    "CreateBackup": {
      "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateBackup.html",
      "description": "This action creates a new backup.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "backup": {
          "required": true
        },
        "file-system": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDataRepositoryTask": {
      "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateDataRepositoryTask.html",
      "description": "This action creates a new task.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "file-system": {
          "required": true
        },
        "task": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateFileSystem": {
      "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystem.html",
      "description": "This action creates a new, empty, Amazon FSx file system",
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
    "CreateFileSystemFromBackup": {
      "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystemFromBackup.html",
      "description": "This action creates a new Amazon FSx file system from an existing backup.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "backup": {
          "required": true
        },
        "file-system": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteBackup": {
      "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteBackup.html",
      "description": "This action deletes a backup, deleting its contents. After deletion, the backup no longer exists, and its data is gone.",
      "accessLevel": "Write",
      "resourceTypes": {
        "backup": {
          "required": true
        }
      }
    },
    "DeleteFileSystem": {
      "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteFileSystem.html",
      "description": "This action deletes a file system, deleting its contents.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    },
    "DescribeBackups": {
      "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html",
      "description": "This action returns the description of specific Amazon FSx backups, if one or more BackupIds are provided for that backup. Otherwise, it returns all backups owned by your AWS account in the AWS Region of the endpoint that you're calling.",
      "accessLevel": "Read"
    },
    "DescribeDataRepositoryTasks": {
      "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeDataRepositoryTasks.html",
      "description": "This action returns the description of specific Amazon FSx data repository task, if one or more TaskIds are provided for that data repository task. Otherwise, it returns all data repository task owned by your AWS account in the AWS Region of the endpoint that you're calling.",
      "accessLevel": "Read"
    },
    "DescribeFileSystems": {
      "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html",
      "description": "This action returns the description of specific Amazon FSx file systems, if a FileSystemIds value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your AWS account in the AWS Region of the endpoint that you're calling.",
      "accessLevel": "Read"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_ListTagsForResource.html",
      "description": "This action lists tags for an Amazon FSx resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "backup": {
          "required": false
        },
        "file-system": {
          "required": false
        },
        "task": {
          "required": false
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_TagResource.html",
      "description": "This action tags an Amazon FSx resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "backup": {
          "required": false
        },
        "file-system": {
          "required": false
        },
        "task": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_UntagResource.html",
      "description": "This action removes a tag from an Amazon FSx resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "backup": {
          "required": false
        },
        "file-system": {
          "required": false
        },
        "task": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateFileSystem": {
      "url": "https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateFileSystem.html",
      "description": "This action updates file system configuration.",
      "accessLevel": "Write",
      "resourceTypes": {
        "file-system": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "file-system": {
      "name": "file-system",
      "url": "https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-overview.html#access-control-resources",
      "arn": "arn:${Partition}:fsx:${Region}:${Account}:file-system/${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "backup": {
      "name": "backup",
      "url": "https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-overview.html#access-control-resources",
      "arn": "arn:${Partition}:fsx:${Region}:${Account}:backup/${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "task": {
      "name": "task",
      "url": "https://docs.aws.amazon.com/fsx/latest/LustreGuide/access-control-overview.html#access-control-resources",
      "arn": "arn:${Partition}:fsx:${Region}:${Account}:task/${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [fsx](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfsx.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * This action cancels a data repository task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CancelDataRepositoryTask.html
   */
  public cancelDataRepositoryTask() {
    this.add('fsx:CancelDataRepositoryTask');
    return this;
  }

  /**
   * This action creates a new backup.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateBackup.html
   */
  public createBackup() {
    this.add('fsx:CreateBackup');
    return this;
  }

  /**
   * This action creates a new task.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateDataRepositoryTask.html
   */
  public createDataRepositoryTask() {
    this.add('fsx:CreateDataRepositoryTask');
    return this;
  }

  /**
   * This action creates a new, empty, Amazon FSx file system
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystem.html
   */
  public createFileSystem() {
    this.add('fsx:CreateFileSystem');
    return this;
  }

  /**
   * This action creates a new Amazon FSx file system from an existing backup.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystemFromBackup.html
   */
  public createFileSystemFromBackup() {
    this.add('fsx:CreateFileSystemFromBackup');
    return this;
  }

  /**
   * This action deletes a backup, deleting its contents. After deletion, the backup no longer exists, and its data is gone.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteBackup.html
   */
  public deleteBackup() {
    this.add('fsx:DeleteBackup');
    return this;
  }

  /**
   * This action deletes a file system, deleting its contents.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteFileSystem.html
   */
  public deleteFileSystem() {
    this.add('fsx:DeleteFileSystem');
    return this;
  }

  /**
   * This action returns the description of specific Amazon FSx backups, if one or more BackupIds are provided for that backup. Otherwise, it returns all backups owned by your AWS account in the AWS Region of the endpoint that you're calling.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html
   */
  public describeBackups() {
    this.add('fsx:DescribeBackups');
    return this;
  }

  /**
   * This action returns the description of specific Amazon FSx data repository task, if one or more TaskIds are provided for that data repository task. Otherwise, it returns all data repository task owned by your AWS account in the AWS Region of the endpoint that you're calling.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeDataRepositoryTasks.html
   */
  public describeDataRepositoryTasks() {
    this.add('fsx:DescribeDataRepositoryTasks');
    return this;
  }

  /**
   * This action returns the description of specific Amazon FSx file systems, if a FileSystemIds value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your AWS account in the AWS Region of the endpoint that you're calling.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html
   */
  public describeFileSystems() {
    this.add('fsx:DescribeFileSystems');
    return this;
  }

  /**
   * This action lists tags for an Amazon FSx resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('fsx:ListTagsForResource');
    return this;
  }

  /**
   * This action tags an Amazon FSx resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('fsx:TagResource');
    return this;
  }

  /**
   * This action removes a tag from an Amazon FSx resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('fsx:UntagResource');
    return this;
  }

  /**
   * This action updates file system configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateFileSystem.html
   */
  public updateFileSystem() {
    this.add('fsx:UpdateFileSystem');
    return this;
  }

  /**
   * Adds a resource of type file-system to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onFileSystem(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:fsx:${Region}:${Account}:file-system/${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type backup to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onBackup(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:fsx:${Region}:${Account}:backup/${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type task to the statement
   *
   * https://docs.aws.amazon.com/fsx/latest/LustreGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onTask(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:fsx:${Region}:${Account}:task/${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
