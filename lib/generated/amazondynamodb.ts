import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [dynamodb](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodb.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dynamodb extends PolicyStatement {
  public servicePrefix = 'dynamodb';
  protected actionList: Actions = {
    "BatchGetItem": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html",
      "description": "Returns the attributes of one or more items from one or more tables",
      "accessLevel": "Read",
      "resourceTypes": {
        "table": {
          "required": true
        }
      },
      "conditions": [
        "dynamodb:Attributes",
        "dynamodb:LeadingKeys",
        "dynamodb:ReturnConsumedCapacity",
        "dynamodb:Select"
      ]
    },
    "BatchWriteItem": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html",
      "description": "Puts or deletes multiple items in one or more tables",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      },
      "conditions": [
        "dynamodb:Attributes",
        "dynamodb:LeadingKeys",
        "dynamodb:ReturnConsumedCapacity"
      ]
    },
    "ConditionCheckItem": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ConditionCheckItem.html",
      "description": "The ConditionCheckItem operation checks the existence of a set of attributes for the item with the given primary key",
      "accessLevel": "Read",
      "resourceTypes": {
        "table": {
          "required": true
        }
      },
      "conditions": [
        "dynamodb:Attributes",
        "dynamodb:LeadingKeys",
        "dynamodb:ReturnConsumedCapacity",
        "dynamodb:ReturnValues"
      ]
    },
    "CreateBackup": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html",
      "description": "Creates a backup for an existing table",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "CreateGlobalTable": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html",
      "description": "Enables the user to create a global table from an existing table",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-table": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "CreateTable": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html",
      "description": "The CreateTable operation adds a new table to your account",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "CreateTableReplica": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/V2gt_IAM.html",
      "description": "Adds a new replica table",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "DeleteBackup": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html",
      "description": "Deletes an existing backup of a table",
      "accessLevel": "Write",
      "resourceTypes": {
        "backup": {
          "required": true
        }
      }
    },
    "DeleteItem": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html",
      "description": "Deletes a single item in a table by primary key",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      },
      "conditions": [
        "dynamodb:Attributes",
        "dynamodb:EnclosingOperation",
        "dynamodb:LeadingKeys",
        "dynamodb:ReturnConsumedCapacity",
        "dynamodb:ReturnValues"
      ]
    },
    "DeleteTable": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html",
      "description": "The DeleteTable operation deletes a table and all of its items",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "DeleteTableReplica": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/V2gt_IAM.html",
      "description": "Deletes a replica table and all of its items",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "DescribeBackup": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html",
      "description": "Describes an existing backup of a table",
      "accessLevel": "Read",
      "resourceTypes": {
        "backup": {
          "required": true
        }
      }
    },
    "DescribeContinuousBackups": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html",
      "description": "Checks the status of the backup restore settings on the specified table",
      "accessLevel": "Read",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "DescribeContributorInsights": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html",
      "description": "Describes the contributor insights status and related details for a given table or global secondary index",
      "accessLevel": "Read",
      "resourceTypes": {
        "table": {
          "required": true
        },
        "index": {
          "required": false
        }
      }
    },
    "DescribeGlobalTable": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html",
      "description": "Returns information about the specified global table",
      "accessLevel": "Read",
      "resourceTypes": {
        "global-table": {
          "required": true
        }
      }
    },
    "DescribeGlobalTableSettings": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html",
      "description": "Returns settings information about the specified global table",
      "accessLevel": "Read",
      "resourceTypes": {
        "global-table": {
          "required": true
        }
      }
    },
    "DescribeLimits": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html",
      "description": "Returns the current provisioned-capacity limits for your AWS account in a region, both for the region as a whole and for any one DynamoDB table that you create there",
      "accessLevel": "Read"
    },
    "DescribeReservedCapacity": {
      "url": "",
      "description": "Describes one or more of the Reserved Capacity purchased",
      "accessLevel": "Read"
    },
    "DescribeReservedCapacityOfferings": {
      "url": "",
      "description": "Describes Reserved Capacity offerings that are available for purchase",
      "accessLevel": "Read"
    },
    "DescribeStream": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeStream.html",
      "description": "Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "DescribeTable": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html",
      "description": "Returns information about the table",
      "accessLevel": "Read",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "DescribeTableReplicaAutoScaling": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html",
      "description": "Describes the auto scaling settings across all replicas of the global table",
      "accessLevel": "Read",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "DescribeTimeToLive": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html",
      "description": "Gives a description of the Time to Live (TTL) status on the specified table.",
      "accessLevel": "Read",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "GetItem": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html",
      "description": "The GetItem operation returns a set of attributes for the item with the given primary key",
      "accessLevel": "Read",
      "resourceTypes": {
        "table": {
          "required": true
        }
      },
      "conditions": [
        "dynamodb:Attributes",
        "dynamodb:EnclosingOperation",
        "dynamodb:LeadingKeys",
        "dynamodb:ReturnConsumedCapacity",
        "dynamodb:Select"
      ]
    },
    "GetRecords": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetRecords.html",
      "description": "Retrieves the stream records from a given shard",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "GetShardIterator": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetShardIterator.html",
      "description": "Returns a shard iterator",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "ListBackups": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html",
      "description": "List backups associated with the account and endpoint",
      "accessLevel": "List"
    },
    "ListContributorInsights": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html",
      "description": "Lists the ContributorInsightsSummary for all tables and global secondary indexes associated with the current account and endpoint",
      "accessLevel": "List"
    },
    "ListGlobalTables": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html",
      "description": "Lists all global tables that have a replica in the specified region",
      "accessLevel": "List"
    },
    "ListStreams": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListStreams.html",
      "description": "Returns an array of stream ARNs associated with the current account and endpoint",
      "accessLevel": "Read"
    },
    "ListTables": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html",
      "description": "Returns an array of table names associated with the current account and endpoint",
      "accessLevel": "List"
    },
    "ListTagsOfResource": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html",
      "description": "List all tags on an Amazon DynamoDB resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "PurchaseReservedCapacityOfferings": {
      "url": "",
      "description": "Purchases Reserved Capacity for use with your account",
      "accessLevel": "Write"
    },
    "PutItem": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html",
      "description": "Creates a new item, or replaces an old item with a new item",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      },
      "conditions": [
        "dynamodb:Attributes",
        "dynamodb:EnclosingOperation",
        "dynamodb:LeadingKeys",
        "dynamodb:ReturnConsumedCapacity",
        "dynamodb:ReturnValues"
      ]
    },
    "Query": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html",
      "description": "Uses the primary key of a table or a secondary index to directly access items from that table or index",
      "accessLevel": "Read",
      "resourceTypes": {
        "table": {
          "required": true
        },
        "index": {
          "required": false
        }
      },
      "conditions": [
        "dynamodb:Attributes",
        "dynamodb:LeadingKeys",
        "dynamodb:ReturnConsumedCapacity",
        "dynamodb:ReturnValues",
        "dynamodb:Select"
      ]
    },
    "RestoreTableFromBackup": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html",
      "description": "Creates a new table from an existing backup",
      "accessLevel": "Write",
      "resourceTypes": {
        "backup": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "RestoreTableToPointInTime": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html",
      "description": "Restores a table to a point in time",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "Scan": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html",
      "description": "Returns one or more items and item attributes by accessing every item in a table or a secondary index",
      "accessLevel": "Read",
      "resourceTypes": {
        "table": {
          "required": true
        },
        "index": {
          "required": false
        }
      },
      "conditions": [
        "dynamodb:Attributes",
        "dynamodb:ReturnConsumedCapacity",
        "dynamodb:ReturnValues",
        "dynamodb:Select"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html",
      "description": "Associate a set of tags with an Amazon DynamoDB resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html",
      "description": "Removes the association of tags from an Amazon DynamoDB resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "UpdateContinuousBackups": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html",
      "description": "Enables or disables continuous backups",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "UpdateContributorInsights": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html",
      "description": "Updates the status for contributor insights for a specific table or global secondary index",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        },
        "index": {
          "required": false
        }
      }
    },
    "UpdateGlobalTable": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html",
      "description": "Enables the user to add or remove replicas in the specified global table",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-table": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "UpdateGlobalTableSettings": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html",
      "description": "Enables the user to update settings of the specified global table",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-table": {
          "required": true
        },
        "table": {
          "required": true
        }
      }
    },
    "UpdateItem": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html",
      "description": "Edits an existing item's attributes, or adds a new item to the table if it does not already exist",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      },
      "conditions": [
        "dynamodb:Attributes",
        "dynamodb:EnclosingOperation",
        "dynamodb:LeadingKeys",
        "dynamodb:ReturnConsumedCapacity",
        "dynamodb:ReturnValues"
      ]
    },
    "UpdateTable": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html",
      "description": "Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "UpdateTableReplicaAutoScaling": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html",
      "description": "Updates auto scaling settings on your replica table",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    },
    "UpdateTimeToLive": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html",
      "description": "Enables or disables TTL for the specified table",
      "accessLevel": "Write",
      "resourceTypes": {
        "table": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "index": {
      "name": "index",
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.htmlHowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey",
      "arn": "arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}/index/${IndexName}",
      "conditionKeys": []
    },
    "stream": {
      "name": "stream",
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.htmlHowItWorks.CoreComponents.html#HowItWorks.CoreComponents.Streams",
      "arn": "arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}/stream/${StreamLabel}",
      "conditionKeys": []
    },
    "table": {
      "name": "table",
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.htmlHowItWorks.CoreComponents.html#HowItWorks.CoreComponents.TablesItemsAttributes",
      "arn": "arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}",
      "conditionKeys": []
    },
    "backup": {
      "name": "backup",
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_HowItWorks.html",
      "arn": "arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}/backup/${BackupName}",
      "conditionKeys": []
    },
    "global-table": {
      "name": "global-table",
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables_HowItWorks.html",
      "arn": "arn:${Partition}:dynamodb::${Account}:global-table/${GlobalTableName}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [dynamodb](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodb.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Returns the attributes of one or more items from one or more tables
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - dynamodb:Attributes
   * - dynamodb:LeadingKeys
   * - dynamodb:ReturnConsumedCapacity
   * - dynamodb:Select
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html
   */
  public batchGetItem() {
    this.add('dynamodb:BatchGetItem');
    return this;
  }

  /**
   * Puts or deletes multiple items in one or more tables
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - dynamodb:Attributes
   * - dynamodb:LeadingKeys
   * - dynamodb:ReturnConsumedCapacity
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
   */
  public batchWriteItem() {
    this.add('dynamodb:BatchWriteItem');
    return this;
  }

  /**
   * The ConditionCheckItem operation checks the existence of a set of attributes for the item with the given primary key
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - dynamodb:Attributes
   * - dynamodb:LeadingKeys
   * - dynamodb:ReturnConsumedCapacity
   * - dynamodb:ReturnValues
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ConditionCheckItem.html
   */
  public conditionCheckItem() {
    this.add('dynamodb:ConditionCheckItem');
    return this;
  }

  /**
   * Creates a backup for an existing table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html
   */
  public createBackup() {
    this.add('dynamodb:CreateBackup');
    return this;
  }

  /**
   * Enables the user to create a global table from an existing table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html
   */
  public createGlobalTable() {
    this.add('dynamodb:CreateGlobalTable');
    return this;
  }

  /**
   * The CreateTable operation adds a new table to your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html
   */
  public createTable() {
    this.add('dynamodb:CreateTable');
    return this;
  }

  /**
   * Adds a new replica table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/V2gt_IAM.html
   */
  public createTableReplica() {
    this.add('dynamodb:CreateTableReplica');
    return this;
  }

  /**
   * Deletes an existing backup of a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html
   */
  public deleteBackup() {
    this.add('dynamodb:DeleteBackup');
    return this;
  }

  /**
   * Deletes a single item in a table by primary key
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - dynamodb:Attributes
   * - dynamodb:EnclosingOperation
   * - dynamodb:LeadingKeys
   * - dynamodb:ReturnConsumedCapacity
   * - dynamodb:ReturnValues
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html
   */
  public deleteItem() {
    this.add('dynamodb:DeleteItem');
    return this;
  }

  /**
   * The DeleteTable operation deletes a table and all of its items
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html
   */
  public deleteTable() {
    this.add('dynamodb:DeleteTable');
    return this;
  }

  /**
   * Deletes a replica table and all of its items
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/V2gt_IAM.html
   */
  public deleteTableReplica() {
    this.add('dynamodb:DeleteTableReplica');
    return this;
  }

  /**
   * Describes an existing backup of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html
   */
  public describeBackup() {
    this.add('dynamodb:DescribeBackup');
    return this;
  }

  /**
   * Checks the status of the backup restore settings on the specified table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html
   */
  public describeContinuousBackups() {
    this.add('dynamodb:DescribeContinuousBackups');
    return this;
  }

  /**
   * Describes the contributor insights status and related details for a given table or global secondary index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html
   */
  public describeContributorInsights() {
    this.add('dynamodb:DescribeContributorInsights');
    return this;
  }

  /**
   * Returns information about the specified global table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html
   */
  public describeGlobalTable() {
    this.add('dynamodb:DescribeGlobalTable');
    return this;
  }

  /**
   * Returns settings information about the specified global table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html
   */
  public describeGlobalTableSettings() {
    this.add('dynamodb:DescribeGlobalTableSettings');
    return this;
  }

  /**
   * Returns the current provisioned-capacity limits for your AWS account in a region, both for the region as a whole and for any one DynamoDB table that you create there
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html
   */
  public describeLimits() {
    this.add('dynamodb:DescribeLimits');
    return this;
  }

  /**
   * Describes one or more of the Reserved Capacity purchased
   *
   * Access Level: Read
   */
  public describeReservedCapacity() {
    this.add('dynamodb:DescribeReservedCapacity');
    return this;
  }

  /**
   * Describes Reserved Capacity offerings that are available for purchase
   *
   * Access Level: Read
   */
  public describeReservedCapacityOfferings() {
    this.add('dynamodb:DescribeReservedCapacityOfferings');
    return this;
  }

  /**
   * Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeStream.html
   */
  public describeStream() {
    this.add('dynamodb:DescribeStream');
    return this;
  }

  /**
   * Returns information about the table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html
   */
  public describeTable() {
    this.add('dynamodb:DescribeTable');
    return this;
  }

  /**
   * Describes the auto scaling settings across all replicas of the global table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html
   */
  public describeTableReplicaAutoScaling() {
    this.add('dynamodb:DescribeTableReplicaAutoScaling');
    return this;
  }

  /**
   * Gives a description of the Time to Live (TTL) status on the specified table.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html
   */
  public describeTimeToLive() {
    this.add('dynamodb:DescribeTimeToLive');
    return this;
  }

  /**
   * The GetItem operation returns a set of attributes for the item with the given primary key
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - dynamodb:Attributes
   * - dynamodb:EnclosingOperation
   * - dynamodb:LeadingKeys
   * - dynamodb:ReturnConsumedCapacity
   * - dynamodb:Select
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html
   */
  public getItem() {
    this.add('dynamodb:GetItem');
    return this;
  }

  /**
   * Retrieves the stream records from a given shard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetRecords.html
   */
  public getRecords() {
    this.add('dynamodb:GetRecords');
    return this;
  }

  /**
   * Returns a shard iterator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetShardIterator.html
   */
  public getShardIterator() {
    this.add('dynamodb:GetShardIterator');
    return this;
  }

  /**
   * List backups associated with the account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html
   */
  public listBackups() {
    this.add('dynamodb:ListBackups');
    return this;
  }

  /**
   * Lists the ContributorInsightsSummary for all tables and global secondary indexes associated with the current account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html
   */
  public listContributorInsights() {
    this.add('dynamodb:ListContributorInsights');
    return this;
  }

  /**
   * Lists all global tables that have a replica in the specified region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html
   */
  public listGlobalTables() {
    this.add('dynamodb:ListGlobalTables');
    return this;
  }

  /**
   * Returns an array of stream ARNs associated with the current account and endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListStreams.html
   */
  public listStreams() {
    this.add('dynamodb:ListStreams');
    return this;
  }

  /**
   * Returns an array of table names associated with the current account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html
   */
  public listTables() {
    this.add('dynamodb:ListTables');
    return this;
  }

  /**
   * List all tags on an Amazon DynamoDB resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html
   */
  public listTagsOfResource() {
    this.add('dynamodb:ListTagsOfResource');
    return this;
  }

  /**
   * Purchases Reserved Capacity for use with your account
   *
   * Access Level: Write
   */
  public purchaseReservedCapacityOfferings() {
    this.add('dynamodb:PurchaseReservedCapacityOfferings');
    return this;
  }

  /**
   * Creates a new item, or replaces an old item with a new item
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - dynamodb:Attributes
   * - dynamodb:EnclosingOperation
   * - dynamodb:LeadingKeys
   * - dynamodb:ReturnConsumedCapacity
   * - dynamodb:ReturnValues
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html
   */
  public putItem() {
    this.add('dynamodb:PutItem');
    return this;
  }

  /**
   * Uses the primary key of a table or a secondary index to directly access items from that table or index
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - dynamodb:Attributes
   * - dynamodb:LeadingKeys
   * - dynamodb:ReturnConsumedCapacity
   * - dynamodb:ReturnValues
   * - dynamodb:Select
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html
   */
  public query() {
    this.add('dynamodb:Query');
    return this;
  }

  /**
   * Creates a new table from an existing backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html
   */
  public restoreTableFromBackup() {
    this.add('dynamodb:RestoreTableFromBackup');
    return this;
  }

  /**
   * Restores a table to a point in time
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html
   */
  public restoreTableToPointInTime() {
    this.add('dynamodb:RestoreTableToPointInTime');
    return this;
  }

  /**
   * Returns one or more items and item attributes by accessing every item in a table or a secondary index
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - dynamodb:Attributes
   * - dynamodb:ReturnConsumedCapacity
   * - dynamodb:ReturnValues
   * - dynamodb:Select
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html
   */
  public scan() {
    this.add('dynamodb:Scan');
    return this;
  }

  /**
   * Associate a set of tags with an Amazon DynamoDB resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('dynamodb:TagResource');
    return this;
  }

  /**
   * Removes the association of tags from an Amazon DynamoDB resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('dynamodb:UntagResource');
    return this;
  }

  /**
   * Enables or disables continuous backups
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html
   */
  public updateContinuousBackups() {
    this.add('dynamodb:UpdateContinuousBackups');
    return this;
  }

  /**
   * Updates the status for contributor insights for a specific table or global secondary index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html
   */
  public updateContributorInsights() {
    this.add('dynamodb:UpdateContributorInsights');
    return this;
  }

  /**
   * Enables the user to add or remove replicas in the specified global table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html
   */
  public updateGlobalTable() {
    this.add('dynamodb:UpdateGlobalTable');
    return this;
  }

  /**
   * Enables the user to update settings of the specified global table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html
   */
  public updateGlobalTableSettings() {
    this.add('dynamodb:UpdateGlobalTableSettings');
    return this;
  }

  /**
   * Edits an existing item's attributes, or adds a new item to the table if it does not already exist
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - dynamodb:Attributes
   * - dynamodb:EnclosingOperation
   * - dynamodb:LeadingKeys
   * - dynamodb:ReturnConsumedCapacity
   * - dynamodb:ReturnValues
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html
   */
  public updateItem() {
    this.add('dynamodb:UpdateItem');
    return this;
  }

  /**
   * Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html
   */
  public updateTable() {
    this.add('dynamodb:UpdateTable');
    return this;
  }

  /**
   * Updates auto scaling settings on your replica table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html
   */
  public updateTableReplicaAutoScaling() {
    this.add('dynamodb:UpdateTableReplicaAutoScaling');
    return this;
  }

  /**
   * Enables or disables TTL for the specified table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html
   */
  public updateTimeToLive() {
    this.add('dynamodb:UpdateTimeToLive');
    return this;
  }

  /**
   * Adds a resource of type index to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.htmlHowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey
   *
   * @param tableName - Identifier for the tableName.
   * @param indexName - Identifier for the indexName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIndex(tableName: string, indexName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}/index/${IndexName}';
    arn = arn.replace('${TableName}', tableName);
    arn = arn.replace('${IndexName}', indexName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type stream to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.htmlHowItWorks.CoreComponents.html#HowItWorks.CoreComponents.Streams
   *
   * @param tableName - Identifier for the tableName.
   * @param streamLabel - Identifier for the streamLabel.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onStream(tableName: string, streamLabel: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}/stream/${StreamLabel}';
    arn = arn.replace('${TableName}', tableName);
    arn = arn.replace('${StreamLabel}', streamLabel);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type table to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.htmlHowItWorks.CoreComponents.html#HowItWorks.CoreComponents.TablesItemsAttributes
   *
   * @param tableName - Identifier for the tableName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTable(tableName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}';
    arn = arn.replace('${TableName}', tableName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type backup to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_HowItWorks.html
   *
   * @param tableName - Identifier for the tableName.
   * @param backupName - Identifier for the backupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBackup(tableName: string, backupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}/backup/${BackupName}';
    arn = arn.replace('${TableName}', tableName);
    arn = arn.replace('${BackupName}', backupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type global-table to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables_HowItWorks.html
   *
   * @param globalTableName - Identifier for the globalTableName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGlobalTable(globalTableName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:dynamodb::${Account}:global-table/${GlobalTableName}';
    arn = arn.replace('${GlobalTableName}', globalTableName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filter based on the attribute (field or column) names of the table.
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAttributes(value: string | string[], operator?: string) {
    return this.if(`dynamodb:Attributes`, value, operator || 'StringLike');
  }

  /**
   * Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa.
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnclosingOperation(value: string | string[], operator?: string) {
    return this.if(`dynamodb:EnclosingOperation`, value, operator || 'StringLike');
  }

  /**
   * Filters based on the partition key of the table.
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLeadingKeys(value: string | string[], operator?: string) {
    return this.if(`dynamodb:LeadingKeys`, value, operator || 'StringLike');
  }

  /**
   * Filter based on the ReturnConsumedCapacity parameter of a request. Contains either "TOTAL" or "NONE".
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReturnConsumedCapacity(value: string | string[], operator?: string) {
    return this.if(`dynamodb:ReturnConsumedCapacity`, value, operator || 'StringLike');
  }

  /**
   * Filter based on the ReturnValues parameter of request. Contains one of the following: "ALL_OLD", "UPDATED_OLD","ALL_NEW","UPDATED_NEW", or "NONE".
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReturnValues(value: string | string[], operator?: string) {
    return this.if(`dynamodb:ReturnValues`, value, operator || 'StringLike');
  }

  /**
   * Filter based on the Select parameter of a Query or Scan request.
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSelect(value: string | string[], operator?: string) {
    return this.if(`dynamodb:Select`, value, operator || 'StringLike');
  }
}
