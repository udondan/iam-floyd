import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service dms
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdatabasemigrationservice.html
 */
export class Dms extends PolicyStatement {
  public servicePrefix = 'dms';
  public actions : Actions = {
    "AddTagsToResource": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_AddTagsToResource.html",
      "description": "Adds metadata tags to a DMS resource, including replication instance, endpoint, security group, and migration task",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Certificate": {
          "required": false
        },
        "Endpoint": {
          "required": false
        },
        "EventSubscription": {
          "required": false
        },
        "ReplicationInstance": {
          "required": false
        },
        "ReplicationSubnetGroup": {
          "required": false
        },
        "ReplicationTask": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "dms:req-tag/${TagKey}"
      ]
    },
    "ApplyPendingMaintenanceAction": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_ApplyPendingMaintenanceAction.html",
      "description": "Applies a pending maintenance action to a resource (for example, to a replication instance).",
      "accessLevel": "Write",
      "resourceTypes": {
        "ReplicationInstance": {
          "required": true
        }
      }
    },
    "CreateEndpoint": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateEndpoint.html",
      "description": "Creates an endpoint using the provided settings",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "dms:req-tag/${TagKey}"
      ]
    },
    "CreateEventSubscription": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateEventSubscription.html",
      "description": "Creates an AWS DMS event notification subscription.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "dms:req-tag/${TagKey}"
      ]
    },
    "CreateReplicationInstance": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html",
      "description": "Creates the replication instance using the specified parameters",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "dms:req-tag/${TagKey}"
      ]
    },
    "CreateReplicationSubnetGroup": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationSubnetGroup.html",
      "description": "Creates a replication subnet group given a list of the subnet IDs in a VPC",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "dms:req-tag/${TagKey}"
      ]
    },
    "CreateReplicationTask": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html",
      "description": "Creates a replication task using the specified parameters",
      "accessLevel": "Write",
      "resourceTypes": {
        "Endpoint": {
          "required": true
        },
        "ReplicationInstance": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "dms:req-tag/${TagKey}"
      ]
    },
    "DeleteCertificate": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteCertificate.html",
      "description": "Deletes the specified certificate",
      "accessLevel": "Write",
      "resourceTypes": {
        "Certificate": {
          "required": true
        }
      }
    },
    "DeleteEndpoint": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteEndpoint.html",
      "description": "Deletes the specified endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "Endpoint": {
          "required": true
        }
      }
    },
    "DeleteEventSubscription": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteEventSubscription.html",
      "description": "Deletes an AWS DMS event subscription.",
      "accessLevel": "Write",
      "resourceTypes": {
        "EventSubscription": {
          "required": true
        }
      }
    },
    "DeleteReplicationInstance": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationInstance.html",
      "description": "Deletes the specified replication instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "ReplicationInstance": {
          "required": true
        }
      }
    },
    "DeleteReplicationSubnetGroup": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationSubnetGroup.html",
      "description": "Deletes a subnet group",
      "accessLevel": "Write",
      "resourceTypes": {
        "ReplicationSubnetGroup": {
          "required": true
        }
      }
    },
    "DeleteReplicationTask": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTask.html",
      "description": "Deletes the specified replication task",
      "accessLevel": "Write",
      "resourceTypes": {
        "ReplicationTask": {
          "required": true
        }
      }
    },
    "DescribeAccountAttributes": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeAccountAttributes.html",
      "description": "Lists all of the AWS DMS attributes for a customer account",
      "accessLevel": "Read"
    },
    "DescribeCertificates": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeCertificates.html",
      "description": "Provides a description of the certificate.",
      "accessLevel": "Read"
    },
    "DescribeConnections": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeConnections.html",
      "description": "Describes the status of the connections that have been made between the replication instance and an endpoint",
      "accessLevel": "Read"
    },
    "DescribeEndpointTypes": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpointTypes.html",
      "description": "Returns information about the type of endpoints available",
      "accessLevel": "Read"
    },
    "DescribeEndpoints": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpoints.html",
      "description": "Returns information about the endpoints for your account in the current region",
      "accessLevel": "Read"
    },
    "DescribeEventCategories": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEventCategories.html",
      "description": "Lists categories for all event source types, or, if specified, for a specified source type.",
      "accessLevel": "Read"
    },
    "DescribeEventSubscriptions": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEventSubscriptions.html",
      "description": "Lists all the event subscriptions for a customer account.",
      "accessLevel": "Read"
    },
    "DescribeEvents": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEvents.html",
      "description": "Lists events for a given source identifier and source type.",
      "accessLevel": "Read"
    },
    "DescribeOrderableReplicationInstances": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeOrderableReplicationInstances.html",
      "description": "Returns information about the replication instance types that can be created in the specified region",
      "accessLevel": "Read"
    },
    "DescribeRefreshSchemasStatus": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeRefreshSchemasStatus.html",
      "description": "Returns the status of the RefreshSchemas operation",
      "accessLevel": "Read",
      "resourceTypes": {
        "Endpoint": {
          "required": true
        }
      }
    },
    "DescribeReplicationInstanceTaskLogs": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationInstanceTaskLogs.html",
      "description": "Returns information about the task logs for the specified task.",
      "accessLevel": "Read",
      "resourceTypes": {
        "ReplicationInstance": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DescribeReplicationInstances": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationInstances.html",
      "description": "Returns information about replication instances for your account in the current region",
      "accessLevel": "Read"
    },
    "DescribeReplicationSubnetGroups": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationSubnetGroups.html",
      "description": "Returns information about the replication subnet groups",
      "accessLevel": "Read"
    },
    "DescribeReplicationTaskAssessmentResults": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTaskAssessmentResults.html",
      "description": "Returns the task assessment results from Amazon S3. This action always returns the latest results.",
      "accessLevel": "Read",
      "resourceTypes": {
        "ReplicationTask": {
          "required": false
        }
      }
    },
    "DescribeReplicationTasks": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTasks.html",
      "description": "Returns information about replication tasks for your account in the current region",
      "accessLevel": "Read"
    },
    "DescribeSchemas": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeSchemas.html",
      "description": "Returns information about the schema for the specified endpoint",
      "accessLevel": "Read",
      "resourceTypes": {
        "Endpoint": {
          "required": true
        }
      }
    },
    "DescribeTableStatistics": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeTableStatistics.html",
      "description": "Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted",
      "accessLevel": "Read",
      "resourceTypes": {
        "ReplicationTask": {
          "required": true
        }
      }
    },
    "ImportCertificate": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_ImportCertificate.html",
      "description": "Uploads the specified certificate.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_ListTagsForResource.html",
      "description": "Lists all tags for an AWS DMS resource",
      "accessLevel": "List",
      "resourceTypes": {
        "Certificate": {
          "required": false
        },
        "Endpoint": {
          "required": false
        },
        "EventSubscription": {
          "required": false
        },
        "ReplicationInstance": {
          "required": false
        },
        "ReplicationSubnetGroup": {
          "required": false
        },
        "ReplicationTask": {
          "required": false
        }
      }
    },
    "ModifyEndpoint": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyEndpoint.html",
      "description": "Modifies the specified endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "Endpoint": {
          "required": true
        },
        "Certificate": {
          "required": false
        }
      }
    },
    "ModifyEventSubscription": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyEventSubscription.html",
      "description": "Modifies an existing AWS DMS event notification subscription.",
      "accessLevel": "Write"
    },
    "ModifyReplicationInstance": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationInstance.html",
      "description": "Modifies the replication instance to apply new settings",
      "accessLevel": "Write",
      "resourceTypes": {
        "ReplicationInstance": {
          "required": true
        }
      }
    },
    "ModifyReplicationSubnetGroup": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationSubnetGroup.html",
      "description": "Modifies the settings for the specified replication subnet group",
      "accessLevel": "Write"
    },
    "ModifyReplicationTask": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html",
      "description": "Modifies the specified replication task.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ReplicationTask": {
          "required": true
        }
      }
    },
    "RebootReplicationInstance": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_RebootReplicationInstance.html",
      "description": "Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ReplicationInstance": {
          "required": true
        }
      }
    },
    "RefreshSchemas": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_RefreshSchemas.html",
      "description": "Populates the schema for the specified endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "Endpoint": {
          "required": true
        },
        "ReplicationInstance": {
          "required": true
        }
      }
    },
    "ReloadTables": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_ReloadTables.html",
      "description": "Reloads the target database table with the source data.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ReplicationTask": {
          "required": true
        }
      }
    },
    "RemoveTagsFromResource": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_RemoveTagsFromResource.html",
      "description": "Removes metadata tags from a DMS resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Certificate": {
          "required": false
        },
        "Endpoint": {
          "required": false
        },
        "EventSubscription": {
          "required": false
        },
        "ReplicationInstance": {
          "required": false
        },
        "ReplicationSubnetGroup": {
          "required": false
        },
        "ReplicationTask": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "StartReplicationTask": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html",
      "description": "Starts the replication task",
      "accessLevel": "Write",
      "resourceTypes": {
        "ReplicationTask": {
          "required": true
        }
      }
    },
    "StartReplicationTaskAssessment": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessment.html",
      "description": "Starts the replication task assessment for unsupported data types in the source database.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ReplicationTask": {
          "required": true
        }
      }
    },
    "StopReplicationTask": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_StopReplicationTask.html",
      "description": "Stops the replication task",
      "accessLevel": "Write",
      "resourceTypes": {
        "ReplicationTask": {
          "required": true
        }
      }
    },
    "TestConnection": {
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_TestConnection.html",
      "description": "Tests the connection between the replication instance and the endpoint",
      "accessLevel": "Read",
      "resourceTypes": {
        "Endpoint": {
          "required": true
        },
        "ReplicationInstance": {
          "required": true
        }
      }
    }
  };

  /**
   * Adds metadata tags to a DMS resource, including replication instance, endpoint, security group, and migration task
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_AddTagsToResource.html
   */
  public addTagsToResource () {
    this.add('dms:AddTagsToResource');
    return this;
  }

  /**
   * Applies a pending maintenance action to a resource (for example, to a replication instance).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ApplyPendingMaintenanceAction.html
   */
  public applyPendingMaintenanceAction () {
    this.add('dms:ApplyPendingMaintenanceAction');
    return this;
  }

  /**
   * Creates an endpoint using the provided settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateEndpoint.html
   */
  public createEndpoint () {
    this.add('dms:CreateEndpoint');
    return this;
  }

  /**
   * Creates an AWS DMS event notification subscription.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateEventSubscription.html
   */
  public createEventSubscription () {
    this.add('dms:CreateEventSubscription');
    return this;
  }

  /**
   * Creates the replication instance using the specified parameters
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html
   */
  public createReplicationInstance () {
    this.add('dms:CreateReplicationInstance');
    return this;
  }

  /**
   * Creates a replication subnet group given a list of the subnet IDs in a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationSubnetGroup.html
   */
  public createReplicationSubnetGroup () {
    this.add('dms:CreateReplicationSubnetGroup');
    return this;
  }

  /**
   * Creates a replication task using the specified parameters
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html
   */
  public createReplicationTask () {
    this.add('dms:CreateReplicationTask');
    return this;
  }

  /**
   * Deletes the specified certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteCertificate.html
   */
  public deleteCertificate () {
    this.add('dms:DeleteCertificate');
    return this;
  }

  /**
   * Deletes the specified endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteEndpoint.html
   */
  public deleteEndpoint () {
    this.add('dms:DeleteEndpoint');
    return this;
  }

  /**
   * Deletes an AWS DMS event subscription.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteEventSubscription.html
   */
  public deleteEventSubscription () {
    this.add('dms:DeleteEventSubscription');
    return this;
  }

  /**
   * Deletes the specified replication instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationInstance.html
   */
  public deleteReplicationInstance () {
    this.add('dms:DeleteReplicationInstance');
    return this;
  }

  /**
   * Deletes a subnet group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationSubnetGroup.html
   */
  public deleteReplicationSubnetGroup () {
    this.add('dms:DeleteReplicationSubnetGroup');
    return this;
  }

  /**
   * Deletes the specified replication task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTask.html
   */
  public deleteReplicationTask () {
    this.add('dms:DeleteReplicationTask');
    return this;
  }

  /**
   * Lists all of the AWS DMS attributes for a customer account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeAccountAttributes.html
   */
  public describeAccountAttributes () {
    this.add('dms:DescribeAccountAttributes');
    return this;
  }

  /**
   * Provides a description of the certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeCertificates.html
   */
  public describeCertificates () {
    this.add('dms:DescribeCertificates');
    return this;
  }

  /**
   * Describes the status of the connections that have been made between the replication instance and an endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeConnections.html
   */
  public describeConnections () {
    this.add('dms:DescribeConnections');
    return this;
  }

  /**
   * Returns information about the type of endpoints available
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpointTypes.html
   */
  public describeEndpointTypes () {
    this.add('dms:DescribeEndpointTypes');
    return this;
  }

  /**
   * Returns information about the endpoints for your account in the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpoints.html
   */
  public describeEndpoints () {
    this.add('dms:DescribeEndpoints');
    return this;
  }

  /**
   * Lists categories for all event source types, or, if specified, for a specified source type.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEventCategories.html
   */
  public describeEventCategories () {
    this.add('dms:DescribeEventCategories');
    return this;
  }

  /**
   * Lists all the event subscriptions for a customer account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEventSubscriptions.html
   */
  public describeEventSubscriptions () {
    this.add('dms:DescribeEventSubscriptions');
    return this;
  }

  /**
   * Lists events for a given source identifier and source type.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEvents.html
   */
  public describeEvents () {
    this.add('dms:DescribeEvents');
    return this;
  }

  /**
   * Returns information about the replication instance types that can be created in the specified region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeOrderableReplicationInstances.html
   */
  public describeOrderableReplicationInstances () {
    this.add('dms:DescribeOrderableReplicationInstances');
    return this;
  }

  /**
   * Returns the status of the RefreshSchemas operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeRefreshSchemasStatus.html
   */
  public describeRefreshSchemasStatus () {
    this.add('dms:DescribeRefreshSchemasStatus');
    return this;
  }

  /**
   * Returns information about the task logs for the specified task.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationInstanceTaskLogs.html
   */
  public describeReplicationInstanceTaskLogs () {
    this.add('dms:DescribeReplicationInstanceTaskLogs');
    return this;
  }

  /**
   * Returns information about replication instances for your account in the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationInstances.html
   */
  public describeReplicationInstances () {
    this.add('dms:DescribeReplicationInstances');
    return this;
  }

  /**
   * Returns information about the replication subnet groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationSubnetGroups.html
   */
  public describeReplicationSubnetGroups () {
    this.add('dms:DescribeReplicationSubnetGroups');
    return this;
  }

  /**
   * Returns the task assessment results from Amazon S3. This action always returns the latest results.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTaskAssessmentResults.html
   */
  public describeReplicationTaskAssessmentResults () {
    this.add('dms:DescribeReplicationTaskAssessmentResults');
    return this;
  }

  /**
   * Returns information about replication tasks for your account in the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTasks.html
   */
  public describeReplicationTasks () {
    this.add('dms:DescribeReplicationTasks');
    return this;
  }

  /**
   * Returns information about the schema for the specified endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeSchemas.html
   */
  public describeSchemas () {
    this.add('dms:DescribeSchemas');
    return this;
  }

  /**
   * Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeTableStatistics.html
   */
  public describeTableStatistics () {
    this.add('dms:DescribeTableStatistics');
    return this;
  }

  /**
   * Uploads the specified certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ImportCertificate.html
   */
  public importCertificate () {
    this.add('dms:ImportCertificate');
    return this;
  }

  /**
   * Lists all tags for an AWS DMS resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource () {
    this.add('dms:ListTagsForResource');
    return this;
  }

  /**
   * Modifies the specified endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyEndpoint.html
   */
  public modifyEndpoint () {
    this.add('dms:ModifyEndpoint');
    return this;
  }

  /**
   * Modifies an existing AWS DMS event notification subscription.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyEventSubscription.html
   */
  public modifyEventSubscription () {
    this.add('dms:ModifyEventSubscription');
    return this;
  }

  /**
   * Modifies the replication instance to apply new settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationInstance.html
   */
  public modifyReplicationInstance () {
    this.add('dms:ModifyReplicationInstance');
    return this;
  }

  /**
   * Modifies the settings for the specified replication subnet group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationSubnetGroup.html
   */
  public modifyReplicationSubnetGroup () {
    this.add('dms:ModifyReplicationSubnetGroup');
    return this;
  }

  /**
   * Modifies the specified replication task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html
   */
  public modifyReplicationTask () {
    this.add('dms:ModifyReplicationTask');
    return this;
  }

  /**
   * Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_RebootReplicationInstance.html
   */
  public rebootReplicationInstance () {
    this.add('dms:RebootReplicationInstance');
    return this;
  }

  /**
   * Populates the schema for the specified endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_RefreshSchemas.html
   */
  public refreshSchemas () {
    this.add('dms:RefreshSchemas');
    return this;
  }

  /**
   * Reloads the target database table with the source data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReloadTables.html
   */
  public reloadTables () {
    this.add('dms:ReloadTables');
    return this;
  }

  /**
   * Removes metadata tags from a DMS resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_RemoveTagsFromResource.html
   */
  public removeTagsFromResource () {
    this.add('dms:RemoveTagsFromResource');
    return this;
  }

  /**
   * Starts the replication task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html
   */
  public startReplicationTask () {
    this.add('dms:StartReplicationTask');
    return this;
  }

  /**
   * Starts the replication task assessment for unsupported data types in the source database.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessment.html
   */
  public startReplicationTaskAssessment () {
    this.add('dms:StartReplicationTaskAssessment');
    return this;
  }

  /**
   * Stops the replication task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StopReplicationTask.html
   */
  public stopReplicationTask () {
    this.add('dms:StopReplicationTask');
    return this;
  }

  /**
   * Tests the connection between the replication instance and the endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_TestConnection.html
   */
  public testConnection () {
    this.add('dms:TestConnection');
    return this;
  }
}
