import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service dax
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodbacceleratordax.html
 */
export class Dax extends PolicyStatement {
  public servicePrefix = 'dax';
  public actions: Actions = {
    "BatchGetItem": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html",
      "description": "The BatchGetItem action returns the attributes of one or more items from one or more tables.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "BatchWriteItem": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html",
      "description": "The BatchWriteItem action operation puts or deletes multiple items in one or more tables.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "ConditionCheckItem": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ConditionCheckItem.html",
      "description": "The ConditionCheckItem operation checks the existence of a set of attributes for the item with the given primary key",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "CreateCluster": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateCluster.html",
      "description": "The CreateCluster action creates a DAX cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "CreateParameterGroup": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateParameterGroup.html",
      "description": "The CreateParameterGroup action creates collection of parameters that you apply to all of the nodes in a DAX cluster.",
      "accessLevel": "Write"
    },
    "CreateSubnetGroup": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateSubnetGroup.html",
      "description": "The CreateSubnetGroup action creates a new subnet group.",
      "accessLevel": "Write"
    },
    "DecreaseReplicationFactor": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DecreaseReplicationFactor.html",
      "description": "The DecreaseReplicationFactor action removes one or more nodes from a DAX cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DeleteCluster": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteCluster.html",
      "description": "The DeleteCluster action deletes a previously provisioned DAX cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "DeleteItem": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html",
      "description": "The DeleteItem action deletes a single item in a table by primary key.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      },
      "conditions": [
        "dax:EnclosingOperation"
      ]
    },
    "DeleteParameterGroup": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteParameterGroup.html",
      "description": "The DeleteParameterGroup action deletes the specified parameter group.",
      "accessLevel": "Write"
    },
    "DeleteSubnetGroup": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteSubnetGroup.html",
      "description": "The DeleteSubnetGroup action deletes a subnet group.",
      "accessLevel": "Write"
    },
    "DescribeClusters": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeClusters.html",
      "description": "The DescribeClusters action returns information about all provisioned DAX clusters.",
      "accessLevel": "List",
      "resourceTypes": {
        "application": {
          "required": false
        }
      }
    },
    "DescribeDefaultParameters": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeDefaultParameters.html",
      "description": "The DescribeDefaultParameters action returns the default system parameter information for DAX.",
      "accessLevel": "List"
    },
    "DescribeEvents": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeEvents.html",
      "description": "The DescribeEvents action returns events related to DAX clusters and parameter groups.",
      "accessLevel": "List"
    },
    "DescribeParameterGroups": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeParameterGroups.html",
      "description": "The DescribeParameterGroups action returns a list of parameter group descriptions.",
      "accessLevel": "List"
    },
    "DescribeParameters": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeParameters.html",
      "description": "The DescribeParameters action returns the detailed parameter list for a particular parameter group.",
      "accessLevel": "Read"
    },
    "DescribeSubnetGroups": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeSubnetGroups.html",
      "description": "The DescribeSubnetGroups action returns a list of subnet group descriptions.",
      "accessLevel": "List"
    },
    "GetItem": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html",
      "description": "The GetItem action returns a set of attributes for the item with the given primary key.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      },
      "conditions": [
        "dax:EnclosingOperation"
      ]
    },
    "IncreaseReplicationFactor": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_IncreaseReplicationFactor.html",
      "description": "The IncreaseReplicationFactor action adds one or more nodes to a DAX cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "ListTags": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_ListTags.html",
      "description": "The ListTags action returns a list all of the tags for a DAX cluster.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "PutItem": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html",
      "description": "The PutItem action creates a new item, or replaces an old item with a new item.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      },
      "conditions": [
        "dax:EnclosingOperation"
      ]
    },
    "Query": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html",
      "description": "The Query action finds items based on primary key values. You can query any table or secondary index that has a composite primary key (a partition key and a sort key).",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "RebootNode": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_RebootNode.html",
      "description": "The RebootNode action reboots a single node of a DAX cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "Scan": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html",
      "description": "The Scan action returns one or more items and item attributes by accessing every item in a table or a secondary index.",
      "accessLevel": "Read",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_TagResource.html",
      "description": "The TagResource action associates a set of tags with a DAX resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UntagResource.html",
      "description": "The UntagResource action removes the association of tags from a DAX resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "UpdateCluster": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateCluster.html",
      "description": "The UpdateCluster action modifies the settings for a DAX cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      }
    },
    "UpdateItem": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html",
      "description": "The UpdateItem action edits an existing item's attributes, or adds a new item to the table if it does not already exist.",
      "accessLevel": "Write",
      "resourceTypes": {
        "application": {
          "required": true
        }
      },
      "conditions": [
        "dax:EnclosingOperation"
      ]
    },
    "UpdateParameterGroup": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateParameterGroup.html",
      "description": "The UpdateParameterGroup action modifies the parameters of a parameter group.",
      "accessLevel": "Write"
    },
    "UpdateSubnetGroup": {
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateSubnetGroup.html",
      "description": "The UpdateSubnetGroup action modifies an existing subnet group.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {
    "application": {
      "name": "application",
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.access-control.html",
      "arn": "arn:${Partition}:dax:${Region}:${Account}:cache/${ClusterName}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service dax
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodbacceleratordax.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * The BatchGetItem action returns the attributes of one or more items from one or more tables.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html
   */
  public batchGetItem() {
    this.add('dax:BatchGetItem');
    return this;
  }

  /**
   * The BatchWriteItem action operation puts or deletes multiple items in one or more tables.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
   */
  public batchWriteItem() {
    this.add('dax:BatchWriteItem');
    return this;
  }

  /**
   * The ConditionCheckItem operation checks the existence of a set of attributes for the item with the given primary key
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ConditionCheckItem.html
   */
  public conditionCheckItem() {
    this.add('dax:ConditionCheckItem');
    return this;
  }

  /**
   * The CreateCluster action creates a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateCluster.html
   */
  public createCluster() {
    this.add('dax:CreateCluster');
    return this;
  }

  /**
   * The CreateParameterGroup action creates collection of parameters that you apply to all of the nodes in a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateParameterGroup.html
   */
  public createParameterGroup() {
    this.add('dax:CreateParameterGroup');
    return this;
  }

  /**
   * The CreateSubnetGroup action creates a new subnet group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateSubnetGroup.html
   */
  public createSubnetGroup() {
    this.add('dax:CreateSubnetGroup');
    return this;
  }

  /**
   * The DecreaseReplicationFactor action removes one or more nodes from a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DecreaseReplicationFactor.html
   */
  public decreaseReplicationFactor() {
    this.add('dax:DecreaseReplicationFactor');
    return this;
  }

  /**
   * The DeleteCluster action deletes a previously provisioned DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteCluster.html
   */
  public deleteCluster() {
    this.add('dax:DeleteCluster');
    return this;
  }

  /**
   * The DeleteItem action deletes a single item in a table by primary key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html
   */
  public deleteItem() {
    this.add('dax:DeleteItem');
    return this;
  }

  /**
   * The DeleteParameterGroup action deletes the specified parameter group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteParameterGroup.html
   */
  public deleteParameterGroup() {
    this.add('dax:DeleteParameterGroup');
    return this;
  }

  /**
   * The DeleteSubnetGroup action deletes a subnet group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteSubnetGroup.html
   */
  public deleteSubnetGroup() {
    this.add('dax:DeleteSubnetGroup');
    return this;
  }

  /**
   * The DescribeClusters action returns information about all provisioned DAX clusters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeClusters.html
   */
  public describeClusters() {
    this.add('dax:DescribeClusters');
    return this;
  }

  /**
   * The DescribeDefaultParameters action returns the default system parameter information for DAX.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeDefaultParameters.html
   */
  public describeDefaultParameters() {
    this.add('dax:DescribeDefaultParameters');
    return this;
  }

  /**
   * The DescribeEvents action returns events related to DAX clusters and parameter groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeEvents.html
   */
  public describeEvents() {
    this.add('dax:DescribeEvents');
    return this;
  }

  /**
   * The DescribeParameterGroups action returns a list of parameter group descriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeParameterGroups.html
   */
  public describeParameterGroups() {
    this.add('dax:DescribeParameterGroups');
    return this;
  }

  /**
   * The DescribeParameters action returns the detailed parameter list for a particular parameter group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeParameters.html
   */
  public describeParameters() {
    this.add('dax:DescribeParameters');
    return this;
  }

  /**
   * The DescribeSubnetGroups action returns a list of subnet group descriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeSubnetGroups.html
   */
  public describeSubnetGroups() {
    this.add('dax:DescribeSubnetGroups');
    return this;
  }

  /**
   * The GetItem action returns a set of attributes for the item with the given primary key.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html
   */
  public getItem() {
    this.add('dax:GetItem');
    return this;
  }

  /**
   * The IncreaseReplicationFactor action adds one or more nodes to a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_IncreaseReplicationFactor.html
   */
  public increaseReplicationFactor() {
    this.add('dax:IncreaseReplicationFactor');
    return this;
  }

  /**
   * The ListTags action returns a list all of the tags for a DAX cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_ListTags.html
   */
  public listTags() {
    this.add('dax:ListTags');
    return this;
  }

  /**
   * The PutItem action creates a new item, or replaces an old item with a new item.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html
   */
  public putItem() {
    this.add('dax:PutItem');
    return this;
  }

  /**
   * The Query action finds items based on primary key values. You can query any table or secondary index that has a composite primary key (a partition key and a sort key).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html
   */
  public query() {
    this.add('dax:Query');
    return this;
  }

  /**
   * The RebootNode action reboots a single node of a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_RebootNode.html
   */
  public rebootNode() {
    this.add('dax:RebootNode');
    return this;
  }

  /**
   * The Scan action returns one or more items and item attributes by accessing every item in a table or a secondary index.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html
   */
  public scan() {
    this.add('dax:Scan');
    return this;
  }

  /**
   * The TagResource action associates a set of tags with a DAX resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_TagResource.html
   */
  public tagResource() {
    this.add('dax:TagResource');
    return this;
  }

  /**
   * The UntagResource action removes the association of tags from a DAX resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UntagResource.html
   */
  public untagResource() {
    this.add('dax:UntagResource');
    return this;
  }

  /**
   * The UpdateCluster action modifies the settings for a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateCluster.html
   */
  public updateCluster() {
    this.add('dax:UpdateCluster');
    return this;
  }

  /**
   * The UpdateItem action edits an existing item's attributes, or adds a new item to the table if it does not already exist.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html
   */
  public updateItem() {
    this.add('dax:UpdateItem');
    return this;
  }

  /**
   * The UpdateParameterGroup action modifies the parameters of a parameter group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateParameterGroup.html
   */
  public updateParameterGroup() {
    this.add('dax:UpdateParameterGroup');
    return this;
  }

  /**
   * The UpdateSubnetGroup action modifies an existing subnet group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateSubnetGroup.html
   */
  public updateSubnetGroup() {
    this.add('dax:UpdateSubnetGroup');
    return this;
  }

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.access-control.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onApplication(clusterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dax:${Region}:${Account}:cache/${ClusterName}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEnclosingOperation(value: string | string[], operator?: string) {
    return this.if(`dax:EnclosingOperation`, value, operator || 'StringEquals');
  }
}
