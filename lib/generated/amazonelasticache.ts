import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [elasticache](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticache.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Elasticache extends PolicyStatement {
  public servicePrefix = 'elasticache';

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
    this.to('elasticache:AddTagsToResource');
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
    this.to('elasticache:AuthorizeCacheSecurityGroupIngress');
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
    this.to('elasticache:BatchApplyUpdateAction');
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
    this.to('elasticache:BatchStopUpdateAction');
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
    this.to('elasticache:CompleteMigration');
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
    this.to('elasticache:CopySnapshot');
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
    this.to('elasticache:CreateCacheCluster');
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
    this.to('elasticache:CreateCacheParameterGroup');
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
    this.to('elasticache:CreateCacheSecurityGroup');
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
    this.to('elasticache:CreateCacheSubnetGroup');
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
    this.to('elasticache:CreateGlobalReplicationGroup');
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
    this.to('elasticache:CreateReplicationGroup');
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
    this.to('elasticache:CreateSnapshot');
    return this;
  }

  /**
   * The CreateUser action creates a new user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    this.to('elasticache:CreateUser');
    return this;
  }

  /**
   * The CreateUserGroup action creates a new user group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateUserGroup.html
   */
  public toCreateUserGroup() {
    this.to('elasticache:CreateUserGroup');
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
    this.to('elasticache:DecreaseNodeGroupsInGlobalReplicationGroup');
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
    this.to('elasticache:DecreaseReplicaCount');
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
    this.to('elasticache:DeleteCacheCluster');
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
    this.to('elasticache:DeleteCacheParameterGroup');
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
    this.to('elasticache:DeleteCacheSecurityGroup');
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
    this.to('elasticache:DeleteCacheSubnetGroup');
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
    this.to('elasticache:DeleteGlobalReplicationGroup');
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
    this.to('elasticache:DeleteReplicationGroup');
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
    this.to('elasticache:DeleteSnapshot');
    return this;
  }

  /**
   * The DeleteUser action deletes an existing user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    this.to('elasticache:DeleteUser');
    return this;
  }

  /**
   * The DeleteUserGroup action deletes an existing user group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteUserGroup.html
   */
  public toDeleteUserGroup() {
    this.to('elasticache:DeleteUserGroup');
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
    this.to('elasticache:DescribeCacheClusters');
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
    this.to('elasticache:DescribeCacheEngineVersions');
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
    this.to('elasticache:DescribeCacheParameterGroups');
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
    this.to('elasticache:DescribeCacheParameters');
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
    this.to('elasticache:DescribeCacheSecurityGroups');
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
    this.to('elasticache:DescribeCacheSubnetGroups');
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
    this.to('elasticache:DescribeEngineDefaultParameters');
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
    this.to('elasticache:DescribeEvents');
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
    this.to('elasticache:DescribeGlobalReplicationGroups');
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
    this.to('elasticache:DescribeReplicationGroups');
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
    this.to('elasticache:DescribeReservedCacheNodes');
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
    this.to('elasticache:DescribeReservedCacheNodesOfferings');
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
    this.to('elasticache:DescribeServiceUpdates');
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
    this.to('elasticache:DescribeSnapshots');
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
    this.to('elasticache:DescribeUpdateActions');
    return this;
  }

  /**
   * The DescribeUserGroups action returns information about all user groups for this account, or a particular user group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUserGroups.html
   */
  public toDescribeUserGroups() {
    this.to('elasticache:DescribeUserGroups');
    return this;
  }

  /**
   * The DescribeUsers action returns information about all users for this account, or a particular user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUsers.html
   */
  public toDescribeUsers() {
    this.to('elasticache:DescribeUsers');
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
    this.to('elasticache:DisassociateGlobalReplicationGroup');
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
    this.to('elasticache:FailoverGlobalReplicationGroup');
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
    this.to('elasticache:IncreaseNodeGroupsInGlobalReplicationGroup');
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
    this.to('elasticache:IncreaseReplicaCount');
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
    this.to('elasticache:ListAllowedNodeTypeModifications');
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
    this.to('elasticache:ListTagsForResource');
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
    this.to('elasticache:ModifyCacheCluster');
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
    this.to('elasticache:ModifyCacheParameterGroup');
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
    this.to('elasticache:ModifyCacheSubnetGroup');
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
    this.to('elasticache:ModifyGlobalReplicationGroup');
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
    this.to('elasticache:ModifyReplicationGroup');
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
    this.to('elasticache:ModifyReplicationGroupShardConfiguration');
    return this;
  }

  /**
   * The ModifyUser action modifies an existing user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyUser.html
   */
  public toModifyUser() {
    this.to('elasticache:ModifyUser');
    return this;
  }

  /**
   * The ModifyUserGroup action modifies an existing user group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyUserGroup.html
   */
  public toModifyUserGroup() {
    this.to('elasticache:ModifyUserGroup');
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
    this.to('elasticache:PurchaseReservedCacheNodesOffering');
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
    this.to('elasticache:RebalanceSlotsInGlobalReplicationGroup');
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
    this.to('elasticache:RebootCacheCluster');
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
    this.to('elasticache:RemoveTagsFromResource');
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
    this.to('elasticache:ResetCacheParameterGroup');
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
    this.to('elasticache:RevokeCacheSecurityGroupIngress');
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
    this.to('elasticache:StartMigration');
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
    this.to('elasticache:TestFailover');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Tagging": [
      "AddTagsToResource",
      "RemoveTagsFromResource"
    ],
    "Write": [
      "AuthorizeCacheSecurityGroupIngress",
      "BatchApplyUpdateAction",
      "BatchStopUpdateAction",
      "CompleteMigration",
      "CopySnapshot",
      "CreateCacheCluster",
      "CreateCacheParameterGroup",
      "CreateCacheSecurityGroup",
      "CreateCacheSubnetGroup",
      "CreateGlobalReplicationGroup",
      "CreateReplicationGroup",
      "CreateSnapshot",
      "CreateUser",
      "CreateUserGroup",
      "DecreaseNodeGroupsInGlobalReplicationGroup",
      "DecreaseReplicaCount",
      "DeleteCacheCluster",
      "DeleteCacheParameterGroup",
      "DeleteCacheSecurityGroup",
      "DeleteCacheSubnetGroup",
      "DeleteGlobalReplicationGroup",
      "DeleteReplicationGroup",
      "DeleteSnapshot",
      "DeleteUser",
      "DeleteUserGroup",
      "DisassociateGlobalReplicationGroup",
      "FailoverGlobalReplicationGroup",
      "IncreaseNodeGroupsInGlobalReplicationGroup",
      "IncreaseReplicaCount",
      "ModifyCacheCluster",
      "ModifyCacheParameterGroup",
      "ModifyCacheSubnetGroup",
      "ModifyGlobalReplicationGroup",
      "ModifyReplicationGroup",
      "ModifyReplicationGroupShardConfiguration",
      "ModifyUser",
      "ModifyUserGroup",
      "PurchaseReservedCacheNodesOffering",
      "RebalanceSlotsInGlobalReplicationGroup",
      "RebootCacheCluster",
      "ResetCacheParameterGroup",
      "RevokeCacheSecurityGroupIngress",
      "StartMigration",
      "TestFailover"
    ],
    "List": [
      "DescribeCacheClusters",
      "DescribeCacheEngineVersions",
      "DescribeCacheParameterGroups",
      "DescribeCacheParameters",
      "DescribeCacheSecurityGroups",
      "DescribeCacheSubnetGroups",
      "DescribeEngineDefaultParameters",
      "DescribeEvents",
      "DescribeGlobalReplicationGroups",
      "DescribeReplicationGroups",
      "DescribeReservedCacheNodes",
      "DescribeReservedCacheNodesOfferings",
      "DescribeServiceUpdates",
      "DescribeSnapshots",
      "DescribeUpdateActions",
      "DescribeUserGroups",
      "DescribeUsers",
      "ListAllowedNodeTypeModifications"
    ],
    "Read": [
      "ListTagsForResource"
    ]
  };

  /**
   * Adds a resource of type parametergroup to the statement
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html
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
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html
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
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html
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
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Replication.html
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
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html
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
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html
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
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups.html
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
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html
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

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html
   *
   * @param userId - Identifier for the userId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onUser(userId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticache:${Region}:${Account}:user:${UserId}';
    arn = arn.replace('${UserId}', userId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type usergroup to the statement
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html
   *
   * @param userGroupId - Identifier for the userGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onUsergroup(userGroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticache:${Region}:${Account}:usergroup:${UserGroupId}';
    arn = arn.replace('${UserGroupId}', userGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
