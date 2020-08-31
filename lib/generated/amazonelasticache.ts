import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [elasticache](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticache.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Elasticache extends PolicyStatement {
  public servicePrefix = 'elasticache';
  protected actionList: Actions = {
    "AddTagsToResource": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AddTagsToResource.html",
      "description": "The AddTagsToResource action adds up to 10 cost allocation tags to the named resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "snapshot": {
          "required": false
        }
      }
    },
    "AuthorizeCacheSecurityGroupIngress": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AuthorizeCacheSecurityGroupIngress.html",
      "description": "The AuthorizeCacheSecurityGroupIngress action allows network ingress to a cache security group.",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:AuthorizeSecurityGroupIngress"
      ],
      "resourceTypes": {
        "securitygroup": {
          "required": true
        }
      }
    },
    "BatchApplyUpdateAction": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_BatchApplyUpdateAction.html",
      "description": "Apply the service update.",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:CreateNetworkInterface",
        "ec2:DeleteNetworkInterface",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs",
        "s3:GetObject"
      ],
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "replicationgroup": {
          "required": false
        }
      }
    },
    "BatchStopUpdateAction": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_BatchStopUpdateAction.html",
      "description": "Stop the service update.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "replicationgroup": {
          "required": false
        }
      }
    },
    "CompleteMigration": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CompleteMigration.html",
      "description": "Stop the service update.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "replicationgroup": {
          "required": false
        }
      }
    },
    "CopySnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CopySnapshot.html",
      "description": "The CopySnapshot action makes a copy of an existing snapshot.",
      "accessLevel": "Write",
      "dependentActions": [
        "elasticache:AddTagsToResource",
        "s3:DeleteObject",
        "s3:GetBucketAcl",
        "s3:PutObject"
      ],
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "CreateCacheCluster": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheCluster.html",
      "description": "The CreateCacheCluster action creates a cache cluster.",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:CreateNetworkInterface",
        "ec2:DeleteNetworkInterface",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs",
        "elasticache:AddTagsToResource",
        "s3:GetObject"
      ],
      "resourceTypes": {
        "parametergroup": {
          "required": true
        },
        "cluster": {
          "required": false
        },
        "replicationgroup": {
          "required": false
        },
        "securitygroup": {
          "required": false
        },
        "snapshot": {
          "required": false
        },
        "subnetgroup": {
          "required": false
        }
      }
    },
    "CreateCacheParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheParameterGroup.html",
      "description": "The CreateCacheParameterGroup action creates a new cache parameter group.",
      "accessLevel": "Write",
      "dependentActions": [
        "elasticache:AddTagsToResource"
      ],
      "resourceTypes": {
        "parametergroup": {
          "required": true
        }
      }
    },
    "CreateCacheSecurityGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSecurityGroup.html",
      "description": "The CreateCacheSecurityGroup action creates a new cache security group.",
      "accessLevel": "Write",
      "dependentActions": [
        "elasticache:AddTagsToResource"
      ],
      "resourceTypes": {
        "securitygroup": {
          "required": true
        }
      }
    },
    "CreateCacheSubnetGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html",
      "description": "The CreateCacheSubnetGroup action creates a new cache subnet group.",
      "accessLevel": "Write",
      "dependentActions": [
        "elasticache:AddTagsToResource"
      ],
      "resourceTypes": {
        "subnetgroup": {
          "required": true
        }
      }
    },
    "CreateGlobalReplicationGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateGlobalReplicationGroup.html",
      "description": "The CreateGlobalReplicationGroup action creates a global datastore.",
      "accessLevel": "Write",
      "resourceTypes": {
        "globalreplicationgroup": {
          "required": true
        },
        "replicationgroup": {
          "required": true
        }
      }
    },
    "CreateReplicationGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateReplicationGroup.html",
      "description": "The CreateReplicationGroup action creates a replication group.",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:CreateNetworkInterface",
        "ec2:DeleteNetworkInterface",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs",
        "elasticache:AddTagsToResource",
        "s3:GetObject"
      ],
      "resourceTypes": {
        "parametergroup": {
          "required": true
        },
        "cluster": {
          "required": false
        },
        "globalreplicationgroup": {
          "required": false
        },
        "replicationgroup": {
          "required": false
        },
        "securitygroup": {
          "required": false
        },
        "snapshot": {
          "required": false
        },
        "subnetgroup": {
          "required": false
        }
      }
    },
    "CreateSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateSnapshot.html",
      "description": "The CreateSnapshot action creates a copy of an entire cache cluster at a specific moment in time.",
      "accessLevel": "Write",
      "dependentActions": [
        "elasticache:AddTagsToResource",
        "s3:DeleteObject",
        "s3:GetBucketAcl",
        "s3:PutObject"
      ],
      "resourceTypes": {
        "snapshot": {
          "required": true
        },
        "cluster": {
          "required": false
        },
        "replicationgroup": {
          "required": false
        }
      }
    },
    "DecreaseNodeGroupsInGlobalReplicationGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DecreaseNodeGroupsInGlobalReplicationGroup.html",
      "description": "The DecreaseNodeGroupsInGlobalReplicationGroup action dec a global datastore.",
      "accessLevel": "Write",
      "resourceTypes": {
        "globalreplicationgroup": {
          "required": true
        }
      }
    },
    "DecreaseReplicaCount": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DecreaseReplicaCount.html",
      "description": "The DecreaseReplicaCount action decreases the number of replicas in a Redis replication group.",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:CreateNetworkInterface",
        "ec2:DeleteNetworkInterface",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs"
      ],
      "resourceTypes": {
        "replicationgroup": {
          "required": true
        }
      }
    },
    "DeleteCacheCluster": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheCluster.html",
      "description": "The DeleteCacheCluster action deletes a previously provisioned cache cluster.",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:CreateNetworkInterface",
        "ec2:DeleteNetworkInterface",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs"
      ],
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "snapshot": {
          "required": false
        }
      }
    },
    "DeleteCacheParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheParameterGroup.html",
      "description": "The DeleteCacheParameterGroup action deletes the specified cache parameter group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "parametergroup": {
          "required": true
        }
      }
    },
    "DeleteCacheSecurityGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheSecurityGroup.html",
      "description": "The DeleteCacheSecurityGroup action deletes a cache security group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "securitygroup": {
          "required": true
        }
      }
    },
    "DeleteCacheSubnetGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheSubnetGroup.html",
      "description": "The DeleteCacheSubnetGroup action deletes a cache subnet group.",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:CreateNetworkInterface",
        "ec2:DeleteNetworkInterface",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs"
      ],
      "resourceTypes": {
        "subnetgroup": {
          "required": true
        }
      }
    },
    "DeleteGlobalReplicationGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteGlobalReplicationGroup.html",
      "description": "The DeleteGlobalReplicationGroup action deletes a global datastore.",
      "accessLevel": "Write",
      "resourceTypes": {
        "globalreplicationgroup": {
          "required": true
        }
      }
    },
    "DeleteReplicationGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteReplicationGroup.html",
      "description": "The DeleteReplicationGroup action deletes an existing replication group.",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:CreateNetworkInterface",
        "ec2:DeleteNetworkInterface",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs"
      ],
      "resourceTypes": {
        "replicationgroup": {
          "required": true
        },
        "snapshot": {
          "required": false
        }
      }
    },
    "DeleteSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteSnapshot.html",
      "description": "The DeleteSnapshot action deletes an existing snapshot.",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "DescribeCacheClusters": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheClusters.html",
      "description": "The DescribeCacheClusters action returns information about all provisioned cache clusters if no cache cluster identifier is specified, or about a specific cache cluster if a cache cluster identifier is supplied.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DescribeCacheEngineVersions": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheEngineVersions.html",
      "description": "The DescribeCacheEngineVersions action returns a list of the available cache engines and their versions.",
      "accessLevel": "List"
    },
    "DescribeCacheParameterGroups": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameterGroups.html",
      "description": "The DescribeCacheParameterGroups action returns information about parameter groups for this account, or a particular parameter group.",
      "accessLevel": "List",
      "resourceTypes": {
        "parametergroup": {
          "required": true
        }
      }
    },
    "DescribeCacheParameters": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameters.html",
      "description": "The DescribeCacheParameters action returns the detailed parameter list for a particular cache parameter group.",
      "accessLevel": "List",
      "resourceTypes": {
        "parametergroup": {
          "required": true
        }
      }
    },
    "DescribeCacheSecurityGroups": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSecurityGroups.html",
      "description": "The DescribeCacheSecurityGroups action returns a list of cache security group descriptions, or the description of the specified security group.",
      "accessLevel": "List",
      "resourceTypes": {
        "securitygroup": {
          "required": true
        }
      }
    },
    "DescribeCacheSubnetGroups": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSubnetGroups.html",
      "description": "The DescribeCacheSubnetGroups action returns a list of cache subnet group descriptions, or the description of the specified subnet group.",
      "accessLevel": "List",
      "resourceTypes": {
        "subnetgroup": {
          "required": true
        }
      }
    },
    "DescribeEngineDefaultParameters": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEngineDefaultParameters.html",
      "description": "The DescribeEngineDefaultParameters action returns the default engine and system parameter information for the specified cache engine.",
      "accessLevel": "List"
    },
    "DescribeEvents": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html",
      "description": "The DescribeEvents action returns events related to cache clusters, cache security groups, and cache parameter groups.",
      "accessLevel": "List"
    },
    "DescribeGlobalReplicationGroups": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeGlobalReplicationGroups.html",
      "description": "The DescribeGlobalReplicationGroups action returns information about global datastores for this account, or a particular global datastore.",
      "accessLevel": "List",
      "resourceTypes": {
        "globalreplicationgroup": {
          "required": true
        }
      }
    },
    "DescribeReplicationGroups": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReplicationGroups.html",
      "description": "The DescribeReplicationGroups action returns information about replication groups for this account, or a particular replication group.",
      "accessLevel": "List",
      "resourceTypes": {
        "replicationgroup": {
          "required": true
        }
      }
    },
    "DescribeReservedCacheNodes": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodes.html",
      "description": "The DescribeReservedCacheNodes action returns information about reserved cache nodes for this account, or a particular reserved cache node.",
      "accessLevel": "List",
      "resourceTypes": {
        "reserved-instance": {
          "required": true
        }
      }
    },
    "DescribeReservedCacheNodesOfferings": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodesOfferings.html",
      "description": "The DescribeReservedCacheNodesOfferings action lists available reserved cache node offerings.",
      "accessLevel": "List"
    },
    "DescribeServiceUpdates": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeServiceUpdates.html",
      "description": "Returns details of the service updates",
      "accessLevel": "List"
    },
    "DescribeSnapshots": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeSnapshots.html",
      "description": "The DescribeSnapshots action returns information about cache cluster snapshots.",
      "accessLevel": "List",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "DescribeUpdateActions": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUpdateActions.html",
      "description": "Returns details of the update actions.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "replicationgroup": {
          "required": false
        }
      }
    },
    "DisassociateGlobalReplicationGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DisassociateGlobalReplicationGroup.html",
      "description": "The DisassociateGlobalReplicationGroup action removes a secondary Replication Group from the Global Datastore.",
      "accessLevel": "Write",
      "resourceTypes": {
        "globalreplicationgroup": {
          "required": true
        }
      }
    },
    "FailoverGlobalReplicationGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_FailoverGlobalReplicationGroup.html",
      "description": "The FailoverGlobalReplicationGroup action removes a secondary Replication Group from the Global Datastore.",
      "accessLevel": "Write",
      "resourceTypes": {
        "globalreplicationgroup": {
          "required": true
        }
      }
    },
    "IncreaseNodeGroupsInGlobalReplicationGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_IncreaseNodeGroupsInGlobalReplicationGroup.html",
      "description": "The IncreaseNodeGroupsInGlobalReplicationGroup action increases the number of node groups in the Global Datastore.",
      "accessLevel": "Write",
      "resourceTypes": {
        "globalreplicationgroup": {
          "required": true
        }
      }
    },
    "IncreaseReplicaCount": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_IncreaseReplicaCount.html",
      "description": "The IncreaseReplicaCount action increases the number of replicas in a Redis replication group.",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:CreateNetworkInterface",
        "ec2:DeleteNetworkInterface",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs"
      ],
      "resourceTypes": {
        "replicationgroup": {
          "required": true
        }
      }
    },
    "ListAllowedNodeTypeModifications": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ListAllowedNodeTypeModifications.html",
      "description": "List Allowed Node Type Modifications",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "replicationgroup": {
          "required": false
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ListTagsForResource.html",
      "description": "The ListTagsForResource action lists all cost allocation tags currently on the named resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "snapshot": {
          "required": false
        }
      }
    },
    "ModifyCacheCluster": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheCluster.html",
      "description": "The ModifyCacheCluster action modifies the settings for a cache cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "parametergroup": {
          "required": false
        },
        "securitygroup": {
          "required": false
        }
      }
    },
    "ModifyCacheParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html",
      "description": "The ModifyCacheParameterGroup action modifies the parameters of a cache parameter group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "parametergroup": {
          "required": true
        }
      }
    },
    "ModifyCacheSubnetGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheSubnetGroup.html",
      "description": "The ModifyCacheSubnetGroup action modifies an existing cache subnet group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "subnetgroup": {
          "required": true
        }
      }
    },
    "ModifyGlobalReplicationGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyGlobalReplicationGroup.html",
      "description": "The ModifyGlobalReplicationGroup action modifies the settings for a Global Datastore.",
      "accessLevel": "Write",
      "resourceTypes": {
        "globalreplicationgroup": {
          "required": true
        }
      }
    },
    "ModifyReplicationGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroup.html",
      "description": "The ModifyReplicationGroup action modifies the settings for a replication group.",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:CreateNetworkInterface",
        "ec2:DeleteNetworkInterface",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs"
      ],
      "resourceTypes": {
        "replicationgroup": {
          "required": true
        },
        "parametergroup": {
          "required": false
        },
        "securitygroup": {
          "required": false
        }
      }
    },
    "ModifyReplicationGroupShardConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html",
      "description": "The ModifyReplicationGroupShardConfiguration action allows you to add shards, remove shards, or rebalance the keyspaces among exisiting shards.",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:CreateNetworkInterface",
        "ec2:DeleteNetworkInterface",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs"
      ],
      "resourceTypes": {
        "replicationgroup": {
          "required": true
        }
      }
    },
    "PurchaseReservedCacheNodesOffering": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_PurchaseReservedCacheNodesOffering.html",
      "description": "The PurchaseReservedCacheNodesOffering action allows you to purchase a reserved cache node offering.",
      "accessLevel": "Write",
      "dependentActions": [
        "elasticache:AddTagsToResource"
      ],
      "resourceTypes": {
        "reserved-instance": {
          "required": true
        }
      }
    },
    "RebalanceSlotsInGlobalReplicationGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RebalanceSlotsInGlobalReplicationGroup.html",
      "description": "The RebalanceSlotsInGlobalReplicationGroup action redistributes slots to ensure uniform distribution across existing shards in the cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "globalreplicationgroup": {
          "required": true
        }
      }
    },
    "RebootCacheCluster": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RebootCacheCluster.html",
      "description": "The RebootCacheCluster action reboots some, or all, of the cache nodes within a provisioned cache cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "RemoveTagsFromResource": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RemoveTagsFromResource.html",
      "description": "The RemoveTagsFromResource action removes the tags identified by the TagKeys list from the named resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "snapshot": {
          "required": false
        }
      }
    },
    "ResetCacheParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ResetCacheParameterGroup.html",
      "description": "The ResetCacheParameterGroup action modifies the parameters of a cache parameter group to the engine or system default value.",
      "accessLevel": "Write",
      "resourceTypes": {
        "parametergroup": {
          "required": true
        }
      }
    },
    "RevokeCacheSecurityGroupIngress": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RevokeCacheSecurityGroupIngress.html",
      "description": "The RevokeCacheSecurityGroupIngress action revokes ingress from a cache security group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "securitygroup": {
          "required": true
        }
      }
    },
    "StartMigration": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_StartMigration.html",
      "description": "Start the migration of data.",
      "accessLevel": "Write",
      "resourceTypes": {
        "replicationgroup": {
          "required": true
        }
      }
    },
    "TestFailover": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_TestFailover.html",
      "description": "The TestFailover action allows you to test automatic failover on a specified node group in a replication group",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:CreateNetworkInterface",
        "ec2:DeleteNetworkInterface",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs"
      ],
      "resourceTypes": {
        "replicationgroup": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "parametergroup": {
      "name": "parametergroup",
      "url": "",
      "arn": "arn:${Partition}:elasticache:${Region}:${Account}:parametergroup:${CacheParameterGroupName}",
      "conditionKeys": []
    },
    "securitygroup": {
      "name": "securitygroup",
      "url": "",
      "arn": "arn:${Partition}:elasticache:${Region}:${Account}:securitygroup:${CacheSecurityGroupName}",
      "conditionKeys": []
    },
    "subnetgroup": {
      "name": "subnetgroup",
      "url": "",
      "arn": "arn:${Partition}:elasticache:${Region}:${Account}:subnetgroup:${CacheSubnetGroupName}",
      "conditionKeys": []
    },
    "replicationgroup": {
      "name": "replicationgroup",
      "url": "",
      "arn": "arn:${Partition}:elasticache:${Region}:${Account}:replicationgroup:${ReplicationGroupId}",
      "conditionKeys": []
    },
    "cluster": {
      "name": "cluster",
      "url": "",
      "arn": "arn:${Partition}:elasticache:${Region}:${Account}:cluster:${CacheClusterId}",
      "conditionKeys": []
    },
    "reserved-instance": {
      "name": "reserved-instance",
      "url": "",
      "arn": "arn:${Partition}:elasticache:${Region}:${Account}:reserved-instance:${ReservedCacheNodeId}",
      "conditionKeys": []
    },
    "snapshot": {
      "name": "snapshot",
      "url": "",
      "arn": "arn:${Partition}:elasticache:${Region}:${Account}:snapshot:${SnapshotName}",
      "conditionKeys": []
    },
    "globalreplicationgroup": {
      "name": "globalreplicationgroup",
      "url": "",
      "arn": "arn:${Partition}:elasticache::${Account}:globalreplicationgroup:${GlobalReplicationGroupId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [elasticache](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticache.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * The AddTagsToResource action adds up to 10 cost allocation tags to the named resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
    this.add('elasticache:AddTagsToResource');
    return this;
  }

  /**
   * The AuthorizeCacheSecurityGroupIngress action allows network ingress to a cache security group.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupIngress
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AuthorizeCacheSecurityGroupIngress.html
   */
  public toAuthorizeCacheSecurityGroupIngress() {
    this.add('elasticache:AuthorizeCacheSecurityGroupIngress');
    return this;
  }

  /**
   * Apply the service update.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DeleteNetworkInterface
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_BatchApplyUpdateAction.html
   */
  public toBatchApplyUpdateAction() {
    this.add('elasticache:BatchApplyUpdateAction');
    return this;
  }

  /**
   * Stop the service update.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_BatchStopUpdateAction.html
   */
  public toBatchStopUpdateAction() {
    this.add('elasticache:BatchStopUpdateAction');
    return this;
  }

  /**
   * Stop the service update.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CompleteMigration.html
   */
  public toCompleteMigration() {
    this.add('elasticache:CompleteMigration');
    return this;
  }

  /**
   * The CopySnapshot action makes a copy of an existing snapshot.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - elasticache:AddTagsToResource
   * - s3:DeleteObject
   * - s3:GetBucketAcl
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CopySnapshot.html
   */
  public toCopySnapshot() {
    this.add('elasticache:CopySnapshot');
    return this;
  }

  /**
   * The CreateCacheCluster action creates a cache cluster.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DeleteNetworkInterface
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - elasticache:AddTagsToResource
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheCluster.html
   */
  public toCreateCacheCluster() {
    this.add('elasticache:CreateCacheCluster');
    return this;
  }

  /**
   * The CreateCacheParameterGroup action creates a new cache parameter group.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - elasticache:AddTagsToResource
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheParameterGroup.html
   */
  public toCreateCacheParameterGroup() {
    this.add('elasticache:CreateCacheParameterGroup');
    return this;
  }

  /**
   * The CreateCacheSecurityGroup action creates a new cache security group.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - elasticache:AddTagsToResource
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSecurityGroup.html
   */
  public toCreateCacheSecurityGroup() {
    this.add('elasticache:CreateCacheSecurityGroup');
    return this;
  }

  /**
   * The CreateCacheSubnetGroup action creates a new cache subnet group.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - elasticache:AddTagsToResource
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html
   */
  public toCreateCacheSubnetGroup() {
    this.add('elasticache:CreateCacheSubnetGroup');
    return this;
  }

  /**
   * The CreateGlobalReplicationGroup action creates a global datastore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateGlobalReplicationGroup.html
   */
  public toCreateGlobalReplicationGroup() {
    this.add('elasticache:CreateGlobalReplicationGroup');
    return this;
  }

  /**
   * The CreateReplicationGroup action creates a replication group.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DeleteNetworkInterface
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - elasticache:AddTagsToResource
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateReplicationGroup.html
   */
  public toCreateReplicationGroup() {
    this.add('elasticache:CreateReplicationGroup');
    return this;
  }

  /**
   * The CreateSnapshot action creates a copy of an entire cache cluster at a specific moment in time.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - elasticache:AddTagsToResource
   * - s3:DeleteObject
   * - s3:GetBucketAcl
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateSnapshot.html
   */
  public toCreateSnapshot() {
    this.add('elasticache:CreateSnapshot');
    return this;
  }

  /**
   * The DecreaseNodeGroupsInGlobalReplicationGroup action dec a global datastore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DecreaseNodeGroupsInGlobalReplicationGroup.html
   */
  public toDecreaseNodeGroupsInGlobalReplicationGroup() {
    this.add('elasticache:DecreaseNodeGroupsInGlobalReplicationGroup');
    return this;
  }

  /**
   * The DecreaseReplicaCount action decreases the number of replicas in a Redis replication group.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DeleteNetworkInterface
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DecreaseReplicaCount.html
   */
  public toDecreaseReplicaCount() {
    this.add('elasticache:DecreaseReplicaCount');
    return this;
  }

  /**
   * The DeleteCacheCluster action deletes a previously provisioned cache cluster.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DeleteNetworkInterface
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheCluster.html
   */
  public toDeleteCacheCluster() {
    this.add('elasticache:DeleteCacheCluster');
    return this;
  }

  /**
   * The DeleteCacheParameterGroup action deletes the specified cache parameter group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheParameterGroup.html
   */
  public toDeleteCacheParameterGroup() {
    this.add('elasticache:DeleteCacheParameterGroup');
    return this;
  }

  /**
   * The DeleteCacheSecurityGroup action deletes a cache security group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheSecurityGroup.html
   */
  public toDeleteCacheSecurityGroup() {
    this.add('elasticache:DeleteCacheSecurityGroup');
    return this;
  }

  /**
   * The DeleteCacheSubnetGroup action deletes a cache subnet group.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DeleteNetworkInterface
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheSubnetGroup.html
   */
  public toDeleteCacheSubnetGroup() {
    this.add('elasticache:DeleteCacheSubnetGroup');
    return this;
  }

  /**
   * The DeleteGlobalReplicationGroup action deletes a global datastore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteGlobalReplicationGroup.html
   */
  public toDeleteGlobalReplicationGroup() {
    this.add('elasticache:DeleteGlobalReplicationGroup');
    return this;
  }

  /**
   * The DeleteReplicationGroup action deletes an existing replication group.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DeleteNetworkInterface
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteReplicationGroup.html
   */
  public toDeleteReplicationGroup() {
    this.add('elasticache:DeleteReplicationGroup');
    return this;
  }

  /**
   * The DeleteSnapshot action deletes an existing snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteSnapshot.html
   */
  public toDeleteSnapshot() {
    this.add('elasticache:DeleteSnapshot');
    return this;
  }

  /**
   * The DescribeCacheClusters action returns information about all provisioned cache clusters if no cache cluster identifier is specified, or about a specific cache cluster if a cache cluster identifier is supplied.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheClusters.html
   */
  public toDescribeCacheClusters() {
    this.add('elasticache:DescribeCacheClusters');
    return this;
  }

  /**
   * The DescribeCacheEngineVersions action returns a list of the available cache engines and their versions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheEngineVersions.html
   */
  public toDescribeCacheEngineVersions() {
    this.add('elasticache:DescribeCacheEngineVersions');
    return this;
  }

  /**
   * The DescribeCacheParameterGroups action returns information about parameter groups for this account, or a particular parameter group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameterGroups.html
   */
  public toDescribeCacheParameterGroups() {
    this.add('elasticache:DescribeCacheParameterGroups');
    return this;
  }

  /**
   * The DescribeCacheParameters action returns the detailed parameter list for a particular cache parameter group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameters.html
   */
  public toDescribeCacheParameters() {
    this.add('elasticache:DescribeCacheParameters');
    return this;
  }

  /**
   * The DescribeCacheSecurityGroups action returns a list of cache security group descriptions, or the description of the specified security group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSecurityGroups.html
   */
  public toDescribeCacheSecurityGroups() {
    this.add('elasticache:DescribeCacheSecurityGroups');
    return this;
  }

  /**
   * The DescribeCacheSubnetGroups action returns a list of cache subnet group descriptions, or the description of the specified subnet group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSubnetGroups.html
   */
  public toDescribeCacheSubnetGroups() {
    this.add('elasticache:DescribeCacheSubnetGroups');
    return this;
  }

  /**
   * The DescribeEngineDefaultParameters action returns the default engine and system parameter information for the specified cache engine.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEngineDefaultParameters.html
   */
  public toDescribeEngineDefaultParameters() {
    this.add('elasticache:DescribeEngineDefaultParameters');
    return this;
  }

  /**
   * The DescribeEvents action returns events related to cache clusters, cache security groups, and cache parameter groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    this.add('elasticache:DescribeEvents');
    return this;
  }

  /**
   * The DescribeGlobalReplicationGroups action returns information about global datastores for this account, or a particular global datastore.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeGlobalReplicationGroups.html
   */
  public toDescribeGlobalReplicationGroups() {
    this.add('elasticache:DescribeGlobalReplicationGroups');
    return this;
  }

  /**
   * The DescribeReplicationGroups action returns information about replication groups for this account, or a particular replication group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReplicationGroups.html
   */
  public toDescribeReplicationGroups() {
    this.add('elasticache:DescribeReplicationGroups');
    return this;
  }

  /**
   * The DescribeReservedCacheNodes action returns information about reserved cache nodes for this account, or a particular reserved cache node.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodes.html
   */
  public toDescribeReservedCacheNodes() {
    this.add('elasticache:DescribeReservedCacheNodes');
    return this;
  }

  /**
   * The DescribeReservedCacheNodesOfferings action lists available reserved cache node offerings.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodesOfferings.html
   */
  public toDescribeReservedCacheNodesOfferings() {
    this.add('elasticache:DescribeReservedCacheNodesOfferings');
    return this;
  }

  /**
   * Returns details of the service updates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeServiceUpdates.html
   */
  public toDescribeServiceUpdates() {
    this.add('elasticache:DescribeServiceUpdates');
    return this;
  }

  /**
   * The DescribeSnapshots action returns information about cache cluster snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeSnapshots.html
   */
  public toDescribeSnapshots() {
    this.add('elasticache:DescribeSnapshots');
    return this;
  }

  /**
   * Returns details of the update actions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUpdateActions.html
   */
  public toDescribeUpdateActions() {
    this.add('elasticache:DescribeUpdateActions');
    return this;
  }

  /**
   * The DisassociateGlobalReplicationGroup action removes a secondary Replication Group from the Global Datastore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DisassociateGlobalReplicationGroup.html
   */
  public toDisassociateGlobalReplicationGroup() {
    this.add('elasticache:DisassociateGlobalReplicationGroup');
    return this;
  }

  /**
   * The FailoverGlobalReplicationGroup action removes a secondary Replication Group from the Global Datastore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_FailoverGlobalReplicationGroup.html
   */
  public toFailoverGlobalReplicationGroup() {
    this.add('elasticache:FailoverGlobalReplicationGroup');
    return this;
  }

  /**
   * The IncreaseNodeGroupsInGlobalReplicationGroup action increases the number of node groups in the Global Datastore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_IncreaseNodeGroupsInGlobalReplicationGroup.html
   */
  public toIncreaseNodeGroupsInGlobalReplicationGroup() {
    this.add('elasticache:IncreaseNodeGroupsInGlobalReplicationGroup');
    return this;
  }

  /**
   * The IncreaseReplicaCount action increases the number of replicas in a Redis replication group.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DeleteNetworkInterface
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_IncreaseReplicaCount.html
   */
  public toIncreaseReplicaCount() {
    this.add('elasticache:IncreaseReplicaCount');
    return this;
  }

  /**
   * List Allowed Node Type Modifications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ListAllowedNodeTypeModifications.html
   */
  public toListAllowedNodeTypeModifications() {
    this.add('elasticache:ListAllowedNodeTypeModifications');
    return this;
  }

  /**
   * The ListTagsForResource action lists all cost allocation tags currently on the named resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('elasticache:ListTagsForResource');
    return this;
  }

  /**
   * The ModifyCacheCluster action modifies the settings for a cache cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheCluster.html
   */
  public toModifyCacheCluster() {
    this.add('elasticache:ModifyCacheCluster');
    return this;
  }

  /**
   * The ModifyCacheParameterGroup action modifies the parameters of a cache parameter group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html
   */
  public toModifyCacheParameterGroup() {
    this.add('elasticache:ModifyCacheParameterGroup');
    return this;
  }

  /**
   * The ModifyCacheSubnetGroup action modifies an existing cache subnet group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheSubnetGroup.html
   */
  public toModifyCacheSubnetGroup() {
    this.add('elasticache:ModifyCacheSubnetGroup');
    return this;
  }

  /**
   * The ModifyGlobalReplicationGroup action modifies the settings for a Global Datastore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyGlobalReplicationGroup.html
   */
  public toModifyGlobalReplicationGroup() {
    this.add('elasticache:ModifyGlobalReplicationGroup');
    return this;
  }

  /**
   * The ModifyReplicationGroup action modifies the settings for a replication group.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DeleteNetworkInterface
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroup.html
   */
  public toModifyReplicationGroup() {
    this.add('elasticache:ModifyReplicationGroup');
    return this;
  }

  /**
   * The ModifyReplicationGroupShardConfiguration action allows you to add shards, remove shards, or rebalance the keyspaces among exisiting shards.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DeleteNetworkInterface
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html
   */
  public toModifyReplicationGroupShardConfiguration() {
    this.add('elasticache:ModifyReplicationGroupShardConfiguration');
    return this;
  }

  /**
   * The PurchaseReservedCacheNodesOffering action allows you to purchase a reserved cache node offering.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - elasticache:AddTagsToResource
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_PurchaseReservedCacheNodesOffering.html
   */
  public toPurchaseReservedCacheNodesOffering() {
    this.add('elasticache:PurchaseReservedCacheNodesOffering');
    return this;
  }

  /**
   * The RebalanceSlotsInGlobalReplicationGroup action redistributes slots to ensure uniform distribution across existing shards in the cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RebalanceSlotsInGlobalReplicationGroup.html
   */
  public toRebalanceSlotsInGlobalReplicationGroup() {
    this.add('elasticache:RebalanceSlotsInGlobalReplicationGroup');
    return this;
  }

  /**
   * The RebootCacheCluster action reboots some, or all, of the cache nodes within a provisioned cache cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RebootCacheCluster.html
   */
  public toRebootCacheCluster() {
    this.add('elasticache:RebootCacheCluster');
    return this;
  }

  /**
   * The RemoveTagsFromResource action removes the tags identified by the TagKeys list from the named resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    this.add('elasticache:RemoveTagsFromResource');
    return this;
  }

  /**
   * The ResetCacheParameterGroup action modifies the parameters of a cache parameter group to the engine or system default value.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ResetCacheParameterGroup.html
   */
  public toResetCacheParameterGroup() {
    this.add('elasticache:ResetCacheParameterGroup');
    return this;
  }

  /**
   * The RevokeCacheSecurityGroupIngress action revokes ingress from a cache security group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RevokeCacheSecurityGroupIngress.html
   */
  public toRevokeCacheSecurityGroupIngress() {
    this.add('elasticache:RevokeCacheSecurityGroupIngress');
    return this;
  }

  /**
   * Start the migration of data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_StartMigration.html
   */
  public toStartMigration() {
    this.add('elasticache:StartMigration');
    return this;
  }

  /**
   * The TestFailover action allows you to test automatic failover on a specified node group in a replication group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DeleteNetworkInterface
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_TestFailover.html
   */
  public toTestFailover() {
    this.add('elasticache:TestFailover');
    return this;
  }

  /**
   * Adds a resource of type parametergroup to the statement
   *
   * @param cacheParameterGroupName - Identifier for the cacheParameterGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onParametergroup(cacheParameterGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticache:${Region}:${Account}:parametergroup:${CacheParameterGroupName}';
    arn = arn.replace('${CacheParameterGroupName}', cacheParameterGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type securitygroup to the statement
   *
   * @param cacheSecurityGroupName - Identifier for the cacheSecurityGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSecuritygroup(cacheSecurityGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticache:${Region}:${Account}:securitygroup:${CacheSecurityGroupName}';
    arn = arn.replace('${CacheSecurityGroupName}', cacheSecurityGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type subnetgroup to the statement
   *
   * @param cacheSubnetGroupName - Identifier for the cacheSubnetGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSubnetgroup(cacheSubnetGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticache:${Region}:${Account}:subnetgroup:${CacheSubnetGroupName}';
    arn = arn.replace('${CacheSubnetGroupName}', cacheSubnetGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type replicationgroup to the statement
   *
   * @param replicationGroupId - Identifier for the replicationGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onReplicationgroup(replicationGroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticache:${Region}:${Account}:replicationgroup:${ReplicationGroupId}';
    arn = arn.replace('${ReplicationGroupId}', replicationGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cluster to the statement
   *
   * @param cacheClusterId - Identifier for the cacheClusterId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCluster(cacheClusterId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticache:${Region}:${Account}:cluster:${CacheClusterId}';
    arn = arn.replace('${CacheClusterId}', cacheClusterId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type reserved-instance to the statement
   *
   * @param reservedCacheNodeId - Identifier for the reservedCacheNodeId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onReservedInstance(reservedCacheNodeId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticache:${Region}:${Account}:reserved-instance:${ReservedCacheNodeId}';
    arn = arn.replace('${ReservedCacheNodeId}', reservedCacheNodeId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type snapshot to the statement
   *
   * @param snapshotName - Identifier for the snapshotName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSnapshot(snapshotName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticache:${Region}:${Account}:snapshot:${SnapshotName}';
    arn = arn.replace('${SnapshotName}', snapshotName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type globalreplicationgroup to the statement
   *
   * @param globalReplicationGroupId - Identifier for the globalReplicationGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGlobalreplicationgroup(globalReplicationGroupId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticache::${Account}:globalreplicationgroup:${GlobalReplicationGroupId}';
    arn = arn.replace('${GlobalReplicationGroupId}', globalReplicationGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
