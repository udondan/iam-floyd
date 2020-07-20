import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [mgh](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmigrationhub.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mgh extends PolicyStatement {
  public servicePrefix = 'mgh';
  protected actionList: Actions = {
    "AssociateCreatedArtifact": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateCreatedArtifact.html",
      "description": "Associate a given AWS artifact to a MigrationTask",
      "accessLevel": "Write",
      "resourceTypes": {
        "migrationTask": {
          "required": true
        }
      }
    },
    "AssociateDiscoveredResource": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateDiscoveredResource.html",
      "description": "Associate a given ADS resource to a MigrationTask",
      "accessLevel": "Write",
      "resourceTypes": {
        "migrationTask": {
          "required": true
        }
      }
    },
    "CreateHomeRegionControl": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateHomeRegionControl.html",
      "description": "Create a Migration Hub Home Region Control",
      "accessLevel": "Write"
    },
    "CreateProgressUpdateStream": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateProgressUpdateStream.html",
      "description": "Create a ProgressUpdateStream",
      "accessLevel": "Write",
      "resourceTypes": {
        "progressUpdateStream": {
          "required": true
        }
      }
    },
    "DeleteProgressUpdateStream": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_DeleteProgressUpdateStream.html",
      "description": "Delete a ProgressUpdateStream",
      "accessLevel": "Write",
      "resourceTypes": {
        "progressUpdateStream": {
          "required": true
        }
      }
    },
    "DescribeApplicationState": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeApplicationState.html",
      "description": "Get an Application Discovery Service Application's state",
      "accessLevel": "Read"
    },
    "DescribeHomeRegionControls": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeHomeRegionControls.html",
      "description": "List Home Region Controls",
      "accessLevel": "List"
    },
    "DescribeMigrationTask": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeMigrationTask.html",
      "description": "Describe a MigrationTask",
      "accessLevel": "Read",
      "resourceTypes": {
        "migrationTask": {
          "required": true
        }
      }
    },
    "DisassociateCreatedArtifact": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateCreatedArtifact.html",
      "description": "Disassociate a given AWS artifact from a MigrationTask",
      "accessLevel": "Write",
      "resourceTypes": {
        "migrationTask": {
          "required": true
        }
      }
    },
    "DisassociateDiscoveredResource": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateDiscoveredResource.html",
      "description": "Disassociate a given ADS resource from a MigrationTask",
      "accessLevel": "Write",
      "resourceTypes": {
        "migrationTask": {
          "required": true
        }
      }
    },
    "GetHomeRegion": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_GetHomeRegion.html",
      "description": "Get the Migration Hub Home Region",
      "accessLevel": "Read"
    },
    "ImportMigrationTask": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_ImportMigrationTask.html",
      "description": "Import a MigrationTask",
      "accessLevel": "Write",
      "resourceTypes": {
        "migrationTask": {
          "required": true
        }
      }
    },
    "ListCreatedArtifacts": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListCreatedArtifacts.html",
      "description": "List associated created artifacts for a MigrationTask",
      "accessLevel": "List",
      "resourceTypes": {
        "migrationTask": {
          "required": true
        }
      }
    },
    "ListDiscoveredResources": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListDiscoveredResources.html",
      "description": "List associated ADS resources from MigrationTask",
      "accessLevel": "List",
      "resourceTypes": {
        "migrationTask": {
          "required": true
        }
      }
    },
    "ListMigrationTasks": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListMigrationTasks.html",
      "description": "List MigrationTasks",
      "accessLevel": "List"
    },
    "ListProgressUpdateStreams": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListProgressUpdateStreams.html",
      "description": "List ProgressUpdateStreams",
      "accessLevel": "List"
    },
    "NotifyApplicationState": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyApplicationState.html",
      "description": "Update an Application Discovery Service Application's state",
      "accessLevel": "Write"
    },
    "NotifyMigrationTaskState": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyMigrationTaskState.html",
      "description": "Notify latest MigrationTask state",
      "accessLevel": "Write",
      "resourceTypes": {
        "migrationTask": {
          "required": true
        }
      }
    },
    "PutResourceAttributes": {
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html",
      "description": "Put ResourceAttributes",
      "accessLevel": "Write",
      "resourceTypes": {
        "migrationTask": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "progressUpdateStream": {
      "name": "progressUpdateStream",
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_ProgressUpdateStreamSummary.html",
      "arn": "arn:${Partition}:mgh:${Region}:${Account}:progressUpdateStream/${Stream}",
      "conditionKeys": []
    },
    "migrationTask": {
      "name": "migrationTask",
      "url": "https://docs.aws.amazon.com/migrationhub/latest/ug/API_MigrationTask.html",
      "arn": "arn:${Partition}:mgh:${Region}:${Account}:progressUpdateStream/${Stream}/migrationTask/${Task}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [mgh](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmigrationhub.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associate a given AWS artifact to a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateCreatedArtifact.html
   */
  public associateCreatedArtifact() {
    this.add('mgh:AssociateCreatedArtifact');
    return this;
  }

  /**
   * Associate a given ADS resource to a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateDiscoveredResource.html
   */
  public associateDiscoveredResource() {
    this.add('mgh:AssociateDiscoveredResource');
    return this;
  }

  /**
   * Create a Migration Hub Home Region Control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateHomeRegionControl.html
   */
  public createHomeRegionControl() {
    this.add('mgh:CreateHomeRegionControl');
    return this;
  }

  /**
   * Create a ProgressUpdateStream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateProgressUpdateStream.html
   */
  public createProgressUpdateStream() {
    this.add('mgh:CreateProgressUpdateStream');
    return this;
  }

  /**
   * Delete a ProgressUpdateStream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DeleteProgressUpdateStream.html
   */
  public deleteProgressUpdateStream() {
    this.add('mgh:DeleteProgressUpdateStream');
    return this;
  }

  /**
   * Get an Application Discovery Service Application's state
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeApplicationState.html
   */
  public describeApplicationState() {
    this.add('mgh:DescribeApplicationState');
    return this;
  }

  /**
   * List Home Region Controls
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeHomeRegionControls.html
   */
  public describeHomeRegionControls() {
    this.add('mgh:DescribeHomeRegionControls');
    return this;
  }

  /**
   * Describe a MigrationTask
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeMigrationTask.html
   */
  public describeMigrationTask() {
    this.add('mgh:DescribeMigrationTask');
    return this;
  }

  /**
   * Disassociate a given AWS artifact from a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateCreatedArtifact.html
   */
  public disassociateCreatedArtifact() {
    this.add('mgh:DisassociateCreatedArtifact');
    return this;
  }

  /**
   * Disassociate a given ADS resource from a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateDiscoveredResource.html
   */
  public disassociateDiscoveredResource() {
    this.add('mgh:DisassociateDiscoveredResource');
    return this;
  }

  /**
   * Get the Migration Hub Home Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_GetHomeRegion.html
   */
  public getHomeRegion() {
    this.add('mgh:GetHomeRegion');
    return this;
  }

  /**
   * Import a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ImportMigrationTask.html
   */
  public importMigrationTask() {
    this.add('mgh:ImportMigrationTask');
    return this;
  }

  /**
   * List associated created artifacts for a MigrationTask
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListCreatedArtifacts.html
   */
  public listCreatedArtifacts() {
    this.add('mgh:ListCreatedArtifacts');
    return this;
  }

  /**
   * List associated ADS resources from MigrationTask
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListDiscoveredResources.html
   */
  public listDiscoveredResources() {
    this.add('mgh:ListDiscoveredResources');
    return this;
  }

  /**
   * List MigrationTasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListMigrationTasks.html
   */
  public listMigrationTasks() {
    this.add('mgh:ListMigrationTasks');
    return this;
  }

  /**
   * List ProgressUpdateStreams
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListProgressUpdateStreams.html
   */
  public listProgressUpdateStreams() {
    this.add('mgh:ListProgressUpdateStreams');
    return this;
  }

  /**
   * Update an Application Discovery Service Application's state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyApplicationState.html
   */
  public notifyApplicationState() {
    this.add('mgh:NotifyApplicationState');
    return this;
  }

  /**
   * Notify latest MigrationTask state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyMigrationTaskState.html
   */
  public notifyMigrationTaskState() {
    this.add('mgh:NotifyMigrationTaskState');
    return this;
  }

  /**
   * Put ResourceAttributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html
   */
  public putResourceAttributes() {
    this.add('mgh:PutResourceAttributes');
    return this;
  }

  /**
   * Adds a resource of type progressUpdateStream to the statement
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ProgressUpdateStreamSummary.html
   *
   * @param stream - Identifier for the stream.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProgressUpdateStream(stream: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mgh:${Region}:${Account}:progressUpdateStream/${Stream}';
    arn = arn.replace('${Stream}', stream);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type migrationTask to the statement
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_MigrationTask.html
   *
   * @param stream - Identifier for the stream.
   * @param task - Identifier for the task.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onMigrationTask(stream: string, task: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mgh:${Region}:${Account}:progressUpdateStream/${Stream}/migrationTask/${Task}';
    arn = arn.replace('${Stream}', stream);
    arn = arn.replace('${Task}', task);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
