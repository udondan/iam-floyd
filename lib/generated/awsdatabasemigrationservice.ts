import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [dms](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdatabasemigrationservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dms extends PolicyStatement {
  public servicePrefix = 'dms';
  protected actionList: Actions = {
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
  protected resourceTypes: ResourceTypes = {
    "ReplicationInstance": {
      "name": "ReplicationInstance",
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html",
      "arn": "arn:${Partition}:dms:${Region}:${Account}:rep:${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "dms:rep-tag/${TagKey}"
      ]
    },
    "ReplicationTask": {
      "name": "ReplicationTask",
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationTask.html",
      "arn": "arn:${Partition}:dms:${Region}:${Account}:task:${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "dms:task-tag/${TagKey}"
      ]
    },
    "Endpoint": {
      "name": "Endpoint",
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_Endpoint.html",
      "arn": "arn:${Partition}:dms:${Region}:${Account}:endpoint:${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "dms:endpoint-tag/${TagKey}"
      ]
    },
    "Certificate": {
      "name": "Certificate",
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_Certificate.html",
      "arn": "arn:${Partition}:dms:${Region}:${Account}:cert:${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "dms:cert-tag/${TagKey}"
      ]
    },
    "EventSubscription": {
      "name": "EventSubscription",
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_EventSubscription.html",
      "arn": "arn:${Partition}:dms:${Region}:${Account}:es:${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "dms:es-tag/${TagKey}"
      ]
    },
    "ReplicationSubnetGroup": {
      "name": "ReplicationSubnetGroup",
      "url": "https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationSubnetGroup.html",
      "arn": "arn:${Partition}:dms:${Region}:${Account}:subgrp:${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "dms:subgrp-tag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [dms](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdatabasemigrationservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds metadata tags to a DMS resource, including replication instance, endpoint, security group, and migration task
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
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
  public toApplyPendingMaintenanceAction() {
    this.add('dms:ApplyPendingMaintenanceAction');
    return this;
  }

  /**
   * Creates an endpoint using the provided settings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateEndpoint.html
   */
  public toCreateEndpoint() {
    this.add('dms:CreateEndpoint');
    return this;
  }

  /**
   * Creates an AWS DMS event notification subscription.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateEventSubscription.html
   */
  public toCreateEventSubscription() {
    this.add('dms:CreateEventSubscription');
    return this;
  }

  /**
   * Creates the replication instance using the specified parameters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html
   */
  public toCreateReplicationInstance() {
    this.add('dms:CreateReplicationInstance');
    return this;
  }

  /**
   * Creates a replication subnet group given a list of the subnet IDs in a VPC
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationSubnetGroup.html
   */
  public toCreateReplicationSubnetGroup() {
    this.add('dms:CreateReplicationSubnetGroup');
    return this;
  }

  /**
   * Creates a replication task using the specified parameters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html
   */
  public toCreateReplicationTask() {
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
  public toDeleteCertificate() {
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
  public toDeleteEndpoint() {
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
  public toDeleteEventSubscription() {
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
  public toDeleteReplicationInstance() {
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
  public toDeleteReplicationSubnetGroup() {
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
  public toDeleteReplicationTask() {
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
  public toDescribeAccountAttributes() {
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
  public toDescribeCertificates() {
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
  public toDescribeConnections() {
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
  public toDescribeEndpointTypes() {
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
  public toDescribeEndpoints() {
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
  public toDescribeEventCategories() {
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
  public toDescribeEventSubscriptions() {
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
  public toDescribeEvents() {
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
  public toDescribeOrderableReplicationInstances() {
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
  public toDescribeRefreshSchemasStatus() {
    this.add('dms:DescribeRefreshSchemasStatus');
    return this;
  }

  /**
   * Returns information about the task logs for the specified task.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationInstanceTaskLogs.html
   */
  public toDescribeReplicationInstanceTaskLogs() {
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
  public toDescribeReplicationInstances() {
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
  public toDescribeReplicationSubnetGroups() {
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
  public toDescribeReplicationTaskAssessmentResults() {
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
  public toDescribeReplicationTasks() {
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
  public toDescribeSchemas() {
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
  public toDescribeTableStatistics() {
    this.add('dms:DescribeTableStatistics');
    return this;
  }

  /**
   * Uploads the specified certificate.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ImportCertificate.html
   */
  public toImportCertificate() {
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
  public toListTagsForResource() {
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
  public toModifyEndpoint() {
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
  public toModifyEventSubscription() {
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
  public toModifyReplicationInstance() {
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
  public toModifyReplicationSubnetGroup() {
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
  public toModifyReplicationTask() {
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
  public toRebootReplicationInstance() {
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
  public toRefreshSchemas() {
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
  public toReloadTables() {
    this.add('dms:ReloadTables');
    return this;
  }

  /**
   * Removes metadata tags from a DMS resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
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
  public toStartReplicationTask() {
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
  public toStartReplicationTaskAssessment() {
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
  public toStopReplicationTask() {
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
  public toTestConnection() {
    this.add('dms:TestConnection');
    return this;
  }

  /**
   * Adds a resource of type ReplicationInstance to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifRepTag()
   */
  public onReplicationInstance(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dms:${Region}:${Account}:rep:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ReplicationTask to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationTask.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifTaskTag()
   */
  public onReplicationTask(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dms:${Region}:${Account}:task:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Endpoint to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_Endpoint.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifEndpointTag()
   */
  public onEndpoint(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dms:${Region}:${Account}:endpoint:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Certificate to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_Certificate.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCertTag()
   */
  public onCertificate(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dms:${Region}:${Account}:cert:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type EventSubscription to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_EventSubscription.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifEsTag()
   */
  public onEventSubscription(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dms:${Region}:${Account}:es:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ReplicationSubnetGroup to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationSubnetGroup.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifSubgrpTag()
   */
  public onReplicationSubnetGroup(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dms:${Region}:${Account}:subgrp:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the presence of tag keys in the request for Certificate
   *
   * Applies to resource types:
   * - Certificate
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCertTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`dms:cert-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request for Endpoint
   *
   * Applies to resource types:
   * - Endpoint
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEndpointTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`dms:endpoint-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request for EventSubscription
   *
   * Applies to resource types:
   * - EventSubscription
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEsTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`dms:es-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request for ReplicationInstance
   *
   * Applies to resource types:
   * - ReplicationInstance
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRepTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`dms:rep-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * Applies to actions:
   * - .toAddTagsToResource()
   * - .toCreateEndpoint()
   * - .toCreateEventSubscription()
   * - .toCreateReplicationInstance()
   * - .toCreateReplicationSubnetGroup()
   * - .toCreateReplicationTask()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReqTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`dms:req-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request for ReplicationSubnetGroup
   *
   * Applies to resource types:
   * - ReplicationSubnetGroup
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubgrpTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`dms:subgrp-tag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request for ReplicationTask
   *
   * Applies to resource types:
   * - ReplicationTask
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTaskTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`dms:task-tag/${ tagKey }`, value, operator || 'StringLike');
  }
}
