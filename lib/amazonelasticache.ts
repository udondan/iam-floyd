import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service elasticache
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticache.html
 */
export class Elasticache extends PolicyStatement {
  public servicePrefix = 'elasticache';
  public actions: Actions = {
    "AddTagsToResource": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AddTagsToResource.html",
      "description": "The AddTagsToResource action adds up to 10 cost allocation tags to the named resource.",
      "accessLevel": "Tagging"
    },
    "AuthorizeCacheSecurityGroupIngress": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AuthorizeCacheSecurityGroupIngress.html",
      "description": "The AuthorizeCacheSecurityGroupIngress action allows network ingress to a cache security group.",
      "accessLevel": "Write"
    },
    "CopySnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CopySnapshot.html",
      "description": "The CopySnapshot action makes a copy of an existing snapshot.",
      "accessLevel": "Write"
    },
    "CreateCacheCluster": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheCluster.html",
      "description": "The CreateCacheCluster action creates a cache cluster.",
      "accessLevel": "Write"
    },
    "CreateCacheParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheParameterGroup.html",
      "description": "The CreateCacheParameterGroup action creates a new cache parameter group.",
      "accessLevel": "Write"
    },
    "CreateCacheSecurityGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSecurityGroup.html",
      "description": "The CreateCacheSecurityGroup action creates a new cache security group.",
      "accessLevel": "Write"
    },
    "CreateCacheSubnetGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html",
      "description": "The CreateCacheSubnetGroup action creates a new cache subnet group.",
      "accessLevel": "Write"
    },
    "CreateReplicationGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateReplicationGroup.html",
      "description": "The CreateReplicationGroup action creates a replication group.",
      "accessLevel": "Write"
    },
    "CreateSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateSnapshot.html",
      "description": "The CreateSnapshot action creates a copy of an entire cache cluster at a specific moment in time.",
      "accessLevel": "Write"
    },
    "DecreaseReplicaCount": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DecreaseReplicaCount.html",
      "description": "The DecreaseReplicaCount action decreases the number of replicas in a Redis replication group.",
      "accessLevel": "Write"
    },
    "DeleteCacheCluster": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheCluster.html",
      "description": "The DeleteCacheCluster action deletes a previously provisioned cache cluster.",
      "accessLevel": "Write"
    },
    "DeleteCacheParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheParameterGroup.html",
      "description": "The DeleteCacheParameterGroup action deletes the specified cache parameter group.",
      "accessLevel": "Write"
    },
    "DeleteCacheSecurityGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheSecurityGroup.html",
      "description": "The DeleteCacheSecurityGroup action deletes a cache security group.",
      "accessLevel": "Write"
    },
    "DeleteCacheSubnetGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheSubnetGroup.html",
      "description": "The DeleteCacheSubnetGroup action deletes a cache subnet group.",
      "accessLevel": "Write"
    },
    "DeleteReplicationGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteReplicationGroup.html",
      "description": "The DeleteReplicationGroup action deletes an existing replication group.",
      "accessLevel": "Write"
    },
    "DeleteSnapshot": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteSnapshot.html",
      "description": "The DeleteSnapshot action deletes an existing snapshot.",
      "accessLevel": "Write"
    },
    "DescribeCacheClusters": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheClusters.html",
      "description": "The DescribeCacheClusters action returns information about all provisioned cache clusters if no cache cluster identifier is specified, or about a specific cache cluster if a cache cluster identifier is supplied.",
      "accessLevel": "List"
    },
    "DescribeCacheEngineVersions": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheEngineVersions.html",
      "description": "The DescribeCacheEngineVersions action returns a list of the available cache engines and their versions.",
      "accessLevel": "List"
    },
    "DescribeCacheParameterGroups": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameterGroups.html",
      "description": "The DescribeCacheParameterGroups action returns a list of cache parameter group descriptions.",
      "accessLevel": "List"
    },
    "DescribeCacheParameters": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameters.html",
      "description": "The DescribeCacheParameters action returns the detailed parameter list for a particular cache parameter group.",
      "accessLevel": "List"
    },
    "DescribeCacheSecurityGroups": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSecurityGroups.html",
      "description": "The DescribeCacheSecurityGroups action returns a list of cache security group descriptions.",
      "accessLevel": "List"
    },
    "DescribeCacheSubnetGroups": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSubnetGroups.html",
      "description": "The DescribeCacheSubnetGroups action returns a list of cache subnet group descriptions.",
      "accessLevel": "List"
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
    "DescribeReplicationGroups": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReplicationGroups.html",
      "description": "The DescribeReplicationGroups action returns information about a particular replication group.",
      "accessLevel": "List"
    },
    "DescribeReservedCacheNodes": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodes.html",
      "description": "The DescribeReservedCacheNodes action returns information about reserved cache nodes for this account, or about a specified reserved cache node.",
      "accessLevel": "List"
    },
    "DescribeReservedCacheNodesOfferings": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodesOfferings.html",
      "description": "The DescribeReservedCacheNodesOfferings action lists available reserved cache node offerings.",
      "accessLevel": "List"
    },
    "DescribeSnapshots": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeSnapshots.html",
      "description": "The DescribeSnapshots action returns information about cache cluster snapshots.",
      "accessLevel": "List"
    },
    "IncreaseReplicaCount": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_IncreaseReplicaCount.html",
      "description": "The IncreaseReplicaCount action increases the number of replicas in a Redis replication group.",
      "accessLevel": "Write"
    },
    "ListAllowedNodeTypeModifications": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ListAllowedNodeTypeModifications.html",
      "description": "List Allowed Node Type Modifications",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ListTagsForResource.html",
      "description": "The ListTagsForResource action lists all cost allocation tags currently on the named resource.",
      "accessLevel": "Read"
    },
    "ModifyCacheCluster": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheCluster.html",
      "description": "The ModifyCacheCluster action modifies the settings for a cache cluster.",
      "accessLevel": "Write"
    },
    "ModifyCacheParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html",
      "description": "The ModifyCacheParameterGroup action modifies the parameters of a cache parameter group.",
      "accessLevel": "Write"
    },
    "ModifyCacheSubnetGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheSubnetGroup.html",
      "description": "The ModifyCacheSubnetGroup action modifies an existing cache subnet group.",
      "accessLevel": "Write"
    },
    "ModifyReplicationGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroup.html",
      "description": "The ModifyReplicationGroup action modifies the settings for a replication group.",
      "accessLevel": "Write"
    },
    "ModifyReplicationGroupShardConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html",
      "description": "The ModifyReplicationGroupShardConfiguration action allows you to add shards, remove shards, or rebalance the keyspaces among exisiting shards.",
      "accessLevel": "Write"
    },
    "PurchaseReservedCacheNodesOffering": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_PurchaseReservedCacheNodesOffering.html",
      "description": "The PurchaseReservedCacheNodesOffering action allows you to purchase a reserved cache node offering.",
      "accessLevel": "Write"
    },
    "RebootCacheCluster": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RebootCacheCluster.html",
      "description": "The RebootCacheCluster action reboots some, or all, of the cache nodes within a provisioned cache cluster.",
      "accessLevel": "Write"
    },
    "RemoveTagsFromResource": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RemoveTagsFromResource.html",
      "description": "The RemoveTagsFromResource action removes the tags identified by the TagKeys list from the named resource.",
      "accessLevel": "Tagging"
    },
    "ResetCacheParameterGroup": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ResetCacheParameterGroup.html",
      "description": "The ResetCacheParameterGroup action modifies the parameters of a cache parameter group to the engine or system default value.",
      "accessLevel": "Write"
    },
    "RevokeCacheSecurityGroupIngress": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RevokeCacheSecurityGroupIngress.html",
      "description": "The RevokeCacheSecurityGroupIngress action revokes ingress from a cache security group.",
      "accessLevel": "Write"
    },
    "TestFailover": {
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_TestFailover.html",
      "description": "The TestFailover action allows you to test automatic failover on a specified node group in a replication group",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * The AddTagsToResource action adds up to 10 cost allocation tags to the named resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AddTagsToResource.html
   */
  public addTagsToResource() {
    this.add('elasticache:AddTagsToResource');
    return this;
  }

  /**
   * The AuthorizeCacheSecurityGroupIngress action allows network ingress to a cache security group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AuthorizeCacheSecurityGroupIngress.html
   */
  public authorizeCacheSecurityGroupIngress() {
    this.add('elasticache:AuthorizeCacheSecurityGroupIngress');
    return this;
  }

  /**
   * The CopySnapshot action makes a copy of an existing snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CopySnapshot.html
   */
  public copySnapshot() {
    this.add('elasticache:CopySnapshot');
    return this;
  }

  /**
   * The CreateCacheCluster action creates a cache cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheCluster.html
   */
  public createCacheCluster() {
    this.add('elasticache:CreateCacheCluster');
    return this;
  }

  /**
   * The CreateCacheParameterGroup action creates a new cache parameter group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheParameterGroup.html
   */
  public createCacheParameterGroup() {
    this.add('elasticache:CreateCacheParameterGroup');
    return this;
  }

  /**
   * The CreateCacheSecurityGroup action creates a new cache security group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSecurityGroup.html
   */
  public createCacheSecurityGroup() {
    this.add('elasticache:CreateCacheSecurityGroup');
    return this;
  }

  /**
   * The CreateCacheSubnetGroup action creates a new cache subnet group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html
   */
  public createCacheSubnetGroup() {
    this.add('elasticache:CreateCacheSubnetGroup');
    return this;
  }

  /**
   * The CreateReplicationGroup action creates a replication group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateReplicationGroup.html
   */
  public createReplicationGroup() {
    this.add('elasticache:CreateReplicationGroup');
    return this;
  }

  /**
   * The CreateSnapshot action creates a copy of an entire cache cluster at a specific moment in time.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateSnapshot.html
   */
  public createSnapshot() {
    this.add('elasticache:CreateSnapshot');
    return this;
  }

  /**
   * The DecreaseReplicaCount action decreases the number of replicas in a Redis replication group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DecreaseReplicaCount.html
   */
  public decreaseReplicaCount() {
    this.add('elasticache:DecreaseReplicaCount');
    return this;
  }

  /**
   * The DeleteCacheCluster action deletes a previously provisioned cache cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheCluster.html
   */
  public deleteCacheCluster() {
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
  public deleteCacheParameterGroup() {
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
  public deleteCacheSecurityGroup() {
    this.add('elasticache:DeleteCacheSecurityGroup');
    return this;
  }

  /**
   * The DeleteCacheSubnetGroup action deletes a cache subnet group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheSubnetGroup.html
   */
  public deleteCacheSubnetGroup() {
    this.add('elasticache:DeleteCacheSubnetGroup');
    return this;
  }

  /**
   * The DeleteReplicationGroup action deletes an existing replication group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteReplicationGroup.html
   */
  public deleteReplicationGroup() {
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
  public deleteSnapshot() {
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
  public describeCacheClusters() {
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
  public describeCacheEngineVersions() {
    this.add('elasticache:DescribeCacheEngineVersions');
    return this;
  }

  /**
   * The DescribeCacheParameterGroups action returns a list of cache parameter group descriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameterGroups.html
   */
  public describeCacheParameterGroups() {
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
  public describeCacheParameters() {
    this.add('elasticache:DescribeCacheParameters');
    return this;
  }

  /**
   * The DescribeCacheSecurityGroups action returns a list of cache security group descriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSecurityGroups.html
   */
  public describeCacheSecurityGroups() {
    this.add('elasticache:DescribeCacheSecurityGroups');
    return this;
  }

  /**
   * The DescribeCacheSubnetGroups action returns a list of cache subnet group descriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSubnetGroups.html
   */
  public describeCacheSubnetGroups() {
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
  public describeEngineDefaultParameters() {
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
  public describeEvents() {
    this.add('elasticache:DescribeEvents');
    return this;
  }

  /**
   * The DescribeReplicationGroups action returns information about a particular replication group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReplicationGroups.html
   */
  public describeReplicationGroups() {
    this.add('elasticache:DescribeReplicationGroups');
    return this;
  }

  /**
   * The DescribeReservedCacheNodes action returns information about reserved cache nodes for this account, or about a specified reserved cache node.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodes.html
   */
  public describeReservedCacheNodes() {
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
  public describeReservedCacheNodesOfferings() {
    this.add('elasticache:DescribeReservedCacheNodesOfferings');
    return this;
  }

  /**
   * The DescribeSnapshots action returns information about cache cluster snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeSnapshots.html
   */
  public describeSnapshots() {
    this.add('elasticache:DescribeSnapshots');
    return this;
  }

  /**
   * The IncreaseReplicaCount action increases the number of replicas in a Redis replication group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_IncreaseReplicaCount.html
   */
  public increaseReplicaCount() {
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
  public listAllowedNodeTypeModifications() {
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
  public listTagsForResource() {
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
  public modifyCacheCluster() {
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
  public modifyCacheParameterGroup() {
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
  public modifyCacheSubnetGroup() {
    this.add('elasticache:ModifyCacheSubnetGroup');
    return this;
  }

  /**
   * The ModifyReplicationGroup action modifies the settings for a replication group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroup.html
   */
  public modifyReplicationGroup() {
    this.add('elasticache:ModifyReplicationGroup');
    return this;
  }

  /**
   * The ModifyReplicationGroupShardConfiguration action allows you to add shards, remove shards, or rebalance the keyspaces among exisiting shards.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html
   */
  public modifyReplicationGroupShardConfiguration() {
    this.add('elasticache:ModifyReplicationGroupShardConfiguration');
    return this;
  }

  /**
   * The PurchaseReservedCacheNodesOffering action allows you to purchase a reserved cache node offering.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_PurchaseReservedCacheNodesOffering.html
   */
  public purchaseReservedCacheNodesOffering() {
    this.add('elasticache:PurchaseReservedCacheNodesOffering');
    return this;
  }

  /**
   * The RebootCacheCluster action reboots some, or all, of the cache nodes within a provisioned cache cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RebootCacheCluster.html
   */
  public rebootCacheCluster() {
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
  public removeTagsFromResource() {
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
  public resetCacheParameterGroup() {
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
  public revokeCacheSecurityGroupIngress() {
    this.add('elasticache:RevokeCacheSecurityGroupIngress');
    return this;
  }

  /**
   * The TestFailover action allows you to test automatic failover on a specified node group in a replication group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_TestFailover.html
   */
  public testFailover() {
    this.add('elasticache:TestFailover');
    return this;
  }
}
