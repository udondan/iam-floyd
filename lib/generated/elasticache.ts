import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps, Operator } from '../shared';

/**
 * Statement provider for service [elasticache](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticache.html).
 *
 * @param options - Options for the statement
 */
export class Elasticache extends PolicyStatement {
  public servicePrefix = 'elasticache';

  /**
   * Statement provider for service [elasticache](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticache.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to add tags to an ElastiCache resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
    return this.to('AddTagsToResource');
  }

  /**
   * Grants permission to authorize an EC2 security group on a ElastiCache security group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupIngress
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AuthorizeCacheSecurityGroupIngress.html
   */
  public toAuthorizeCacheSecurityGroupIngress() {
    return this.to('AuthorizeCacheSecurityGroupIngress');
  }

  /**
   * Grants permission to apply ElastiCache service updates to sets of clusters and replication groups
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
    return this.to('BatchApplyUpdateAction');
  }

  /**
   * Grants permission to stop ElastiCache service updates from being executed on a set of clusters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_BatchStopUpdateAction.html
   */
  public toBatchStopUpdateAction() {
    return this.to('BatchStopUpdateAction');
  }

  /**
   * Grants permission to complete an online migration of data from hosted Redis on Amazon EC2 to ElastiCache
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CompleteMigration.html
   */
  public toCompleteMigration() {
    return this.to('CompleteMigration');
  }

  /**
   * Allows an IAM user or role to connect as a specified ElastiCache user to a node in a replication group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth-iam.html
   */
  public toConnect() {
    return this.to('Connect');
  }

  /**
   * Grants permission to make a copy of an existing snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifKmsKeyId()
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
    return this.to('CopySnapshot');
  }

  /**
   * Grants permission to create a cache cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
    return this.to('CreateCacheCluster');
  }

  /**
   * Grants permission to create a parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCacheParameterGroupName()
   *
   * Dependent actions:
   * - elasticache:AddTagsToResource
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheParameterGroup.html
   */
  public toCreateCacheParameterGroup() {
    return this.to('CreateCacheParameterGroup');
  }

  /**
   * Grants permission to create a cache security group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - elasticache:AddTagsToResource
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSecurityGroup.html
   */
  public toCreateCacheSecurityGroup() {
    return this.to('CreateCacheSecurityGroup');
  }

  /**
   * Grants permission to create a cache subnet group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - elasticache:AddTagsToResource
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html
   */
  public toCreateCacheSubnetGroup() {
    return this.to('CreateCacheSubnetGroup');
  }

  /**
   * Grants permission to create a global replication group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateGlobalReplicationGroup.html
   */
  public toCreateGlobalReplicationGroup() {
    return this.to('CreateGlobalReplicationGroup');
  }

  /**
   * Grants permission to create a replication group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
    return this.to('CreateReplicationGroup');
  }

  /**
   * Grants permission to create a copy of an entire Redis cluster at a specific moment in time
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
    return this.to('CreateSnapshot');
  }

  /**
   * Grants permission to create a user for Redis. Users are supported from Redis 6.0 onwards
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifUserAuthenticationMode()
   *
   * Dependent actions:
   * - elasticache:AddTagsToResource
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to create a user group for Redis. Groups are supported from Redis 6.0 onwards
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - elasticache:AddTagsToResource
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateUserGroup.html
   */
  public toCreateUserGroup() {
    return this.to('CreateUserGroup');
  }

  /**
   * Grants permission to decrease the number of node groups in global replication groups
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNumNodeGroups()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DecreaseNodeGroupsInGlobalReplicationGroup.html
   */
  public toDecreaseNodeGroupsInGlobalReplicationGroup() {
    return this.to('DecreaseNodeGroupsInGlobalReplicationGroup');
  }

  /**
   * Grants permission to decrease the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifReplicasPerNodeGroup()
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
    return this.to('DecreaseReplicaCount');
  }

  /**
   * Grants permission to delete a previously provisioned cluster
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
    return this.to('DeleteCacheCluster');
  }

  /**
   * Grants permission to delete the specified cache parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCacheParameterGroupName()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheParameterGroup.html
   */
  public toDeleteCacheParameterGroup() {
    return this.to('DeleteCacheParameterGroup');
  }

  /**
   * Grants permission to delete a cache security group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheSecurityGroup.html
   */
  public toDeleteCacheSecurityGroup() {
    return this.to('DeleteCacheSecurityGroup');
  }

  /**
   * Grants permission to delete a cache subnet group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
    return this.to('DeleteCacheSubnetGroup');
  }

  /**
   * Grants permission to delete an existing global replication group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteGlobalReplicationGroup.html
   */
  public toDeleteGlobalReplicationGroup() {
    return this.to('DeleteGlobalReplicationGroup');
  }

  /**
   * Grants permission to delete an existing replication group
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
    return this.to('DeleteReplicationGroup');
  }

  /**
   * Grants permission to delete an existing snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteSnapshot.html
   */
  public toDeleteSnapshot() {
    return this.to('DeleteSnapshot');
  }

  /**
   * Grants permission to delete an existing user and thus remove it from all user groups and replication groups where it was assigned
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to delete an existing user group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteUserGroup.html
   */
  public toDeleteUserGroup() {
    return this.to('DeleteUserGroup');
  }

  /**
   * Grants permission to list information about provisioned cache clusters
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheClusters.html
   */
  public toDescribeCacheClusters() {
    return this.to('DescribeCacheClusters');
  }

  /**
   * Grants permission to list available cache engines and their versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheEngineVersions.html
   */
  public toDescribeCacheEngineVersions() {
    return this.to('DescribeCacheEngineVersions');
  }

  /**
   * Grants permission to list cache parameter group descriptions
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameterGroups.html
   */
  public toDescribeCacheParameterGroups() {
    return this.to('DescribeCacheParameterGroups');
  }

  /**
   * Grants permission to retrieve the detailed parameter list for a particular cache parameter group
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameters.html
   */
  public toDescribeCacheParameters() {
    return this.to('DescribeCacheParameters');
  }

  /**
   * Grants permission to list cache security group descriptions
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSecurityGroups.html
   */
  public toDescribeCacheSecurityGroups() {
    return this.to('DescribeCacheSecurityGroups');
  }

  /**
   * Grants permission to list cache subnet group descriptions
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSubnetGroups.html
   */
  public toDescribeCacheSubnetGroups() {
    return this.to('DescribeCacheSubnetGroups');
  }

  /**
   * Grants permission to retrieve the default engine and system parameter information for the specified cache engine
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEngineDefaultParameters.html
   */
  public toDescribeEngineDefaultParameters() {
    return this.to('DescribeEngineDefaultParameters');
  }

  /**
   * Grants permission to list events related to clusters, cache security groups, and cache parameter groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    return this.to('DescribeEvents');
  }

  /**
   * Grants permission to list information about global replication groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeGlobalReplicationGroups.html
   */
  public toDescribeGlobalReplicationGroups() {
    return this.to('DescribeGlobalReplicationGroups');
  }

  /**
   * Grants permission to list information about provisioned replication groups
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReplicationGroups.html
   */
  public toDescribeReplicationGroups() {
    return this.to('DescribeReplicationGroups');
  }

  /**
   * Grants permission to list information about purchased reserved cache nodes
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodes.html
   */
  public toDescribeReservedCacheNodes() {
    return this.to('DescribeReservedCacheNodes');
  }

  /**
   * Grants permission to list available reserved cache node offerings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodesOfferings.html
   */
  public toDescribeReservedCacheNodesOfferings() {
    return this.to('DescribeReservedCacheNodesOfferings');
  }

  /**
   * Grants permission to list details of the service updates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeServiceUpdates.html
   */
  public toDescribeServiceUpdates() {
    return this.to('DescribeServiceUpdates');
  }

  /**
   * Grants permission to list information about cluster or replication group snapshots
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeSnapshots.html
   */
  public toDescribeSnapshots() {
    return this.to('DescribeSnapshots');
  }

  /**
   * Grants permission to list details of the update actions for a set of clusters or replication groups
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUpdateActions.html
   */
  public toDescribeUpdateActions() {
    return this.to('DescribeUpdateActions');
  }

  /**
   * Grants permission to list information about Redis user groups
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUserGroups.html
   */
  public toDescribeUserGroups() {
    return this.to('DescribeUserGroups');
  }

  /**
   * Grants permission to list information about Redis users
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUsers.html
   */
  public toDescribeUsers() {
    return this.to('DescribeUsers');
  }

  /**
   * Grants permission to remove a secondary replication group from the global replication group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DisassociateGlobalReplicationGroup.html
   */
  public toDisassociateGlobalReplicationGroup() {
    return this.to('DisassociateGlobalReplicationGroup');
  }

  /**
   * Grants permission to failover the primary region to a selected secondary region of a global replication group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_FailoverGlobalReplicationGroup.html
   */
  public toFailoverGlobalReplicationGroup() {
    return this.to('FailoverGlobalReplicationGroup');
  }

  /**
   * Grants permission to increase the number of node groups in a global replication group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNumNodeGroups()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_IncreaseNodeGroupsInGlobalReplicationGroup.html
   */
  public toIncreaseNodeGroupsInGlobalReplicationGroup() {
    return this.to('IncreaseNodeGroupsInGlobalReplicationGroup');
  }

  /**
   * Grants permission to increase the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifReplicasPerNodeGroup()
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
    return this.to('IncreaseReplicaCount');
  }

  /**
   * Grants permission to list available node type that can be used to scale a particular Redis cluster or replication group
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ListAllowedNodeTypeModifications.html
   */
  public toListAllowedNodeTypeModifications() {
    return this.to('ListAllowedNodeTypeModifications');
  }

  /**
   * Grants permission to list tags for an ElastiCache resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to modify settings for a cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheCluster.html
   */
  public toModifyCacheCluster() {
    return this.to('ModifyCacheCluster');
  }

  /**
   * Grants permission to modify parameters of a cache parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCacheParameterGroupName()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html
   */
  public toModifyCacheParameterGroup() {
    return this.to('ModifyCacheParameterGroup');
  }

  /**
   * Grants permission to modify an existing cache subnet group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheSubnetGroup.html
   */
  public toModifyCacheSubnetGroup() {
    return this.to('ModifyCacheSubnetGroup');
  }

  /**
   * Grants permission to modify settings for a global replication group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCacheNodeType()
   * - .ifEngineVersion()
   * - .ifAutomaticFailoverEnabled()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyGlobalReplicationGroup.html
   */
  public toModifyGlobalReplicationGroup() {
    return this.to('ModifyGlobalReplicationGroup');
  }

  /**
   * Grants permission to modify the settings for a replication group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
    return this.to('ModifyReplicationGroup');
  }

  /**
   * Grants permission to add shards, remove shards, or rebalance the keyspaces among existing shards of a replication group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifNumNodeGroups()
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
    return this.to('ModifyReplicationGroupShardConfiguration');
  }

  /**
   * Grants permission to change Redis user password(s) and/or access string
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifUserAuthenticationMode()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyUser.html
   */
  public toModifyUser() {
    return this.to('ModifyUser');
  }

  /**
   * Grants permission to change list of users that belong to the user group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyUserGroup.html
   */
  public toModifyUserGroup() {
    return this.to('ModifyUserGroup');
  }

  /**
   * Grants permission to purchase a reserved cache node offering
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - elasticache:AddTagsToResource
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_PurchaseReservedCacheNodesOffering.html
   */
  public toPurchaseReservedCacheNodesOffering() {
    return this.to('PurchaseReservedCacheNodesOffering');
  }

  /**
   * Grants permission to perform a key space rebalance operation to redistribute slots and ensure uniform key distribution across existing shards in a global replication group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RebalanceSlotsInGlobalReplicationGroup.html
   */
  public toRebalanceSlotsInGlobalReplicationGroup() {
    return this.to('RebalanceSlotsInGlobalReplicationGroup');
  }

  /**
   * Grants permission to reboot some, or all, of the cache nodes within a provisioned cache cluster or replication group (cluster mode disabled)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RebootCacheCluster.html
   */
  public toRebootCacheCluster() {
    return this.to('RebootCacheCluster');
  }

  /**
   * Grants permission to remove tags from a ElastiCache resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    return this.to('RemoveTagsFromResource');
  }

  /**
   * Grants permission to modify parameters of a cache parameter group back to their default values
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCacheParameterGroupName()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ResetCacheParameterGroup.html
   */
  public toResetCacheParameterGroup() {
    return this.to('ResetCacheParameterGroup');
  }

  /**
   * Grants permission to remove an EC2 security group ingress from a ElastiCache security group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RevokeCacheSecurityGroupIngress.html
   */
  public toRevokeCacheSecurityGroupIngress() {
    return this.to('RevokeCacheSecurityGroupIngress');
  }

  /**
   * Grants permission to start a migration of data from hosted Redis on Amazon EC2 to ElastiCache for Redis
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_StartMigration.html
   */
  public toStartMigration() {
    return this.to('StartMigration');
  }

  /**
   * Grants permission to test automatic failover on a specified node group in a replication group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
    return this.to('TestFailover');
  }

  protected accessLevelList: AccessLevelList = {
    Tagging: [
      'AddTagsToResource',
      'RemoveTagsFromResource'
    ],
    Write: [
      'AuthorizeCacheSecurityGroupIngress',
      'BatchApplyUpdateAction',
      'BatchStopUpdateAction',
      'CompleteMigration',
      'Connect',
      'CopySnapshot',
      'CreateCacheCluster',
      'CreateCacheParameterGroup',
      'CreateCacheSecurityGroup',
      'CreateCacheSubnetGroup',
      'CreateGlobalReplicationGroup',
      'CreateReplicationGroup',
      'CreateSnapshot',
      'CreateUser',
      'CreateUserGroup',
      'DecreaseNodeGroupsInGlobalReplicationGroup',
      'DecreaseReplicaCount',
      'DeleteCacheCluster',
      'DeleteCacheParameterGroup',
      'DeleteCacheSecurityGroup',
      'DeleteCacheSubnetGroup',
      'DeleteGlobalReplicationGroup',
      'DeleteReplicationGroup',
      'DeleteSnapshot',
      'DeleteUser',
      'DeleteUserGroup',
      'DisassociateGlobalReplicationGroup',
      'FailoverGlobalReplicationGroup',
      'IncreaseNodeGroupsInGlobalReplicationGroup',
      'IncreaseReplicaCount',
      'ModifyCacheCluster',
      'ModifyCacheParameterGroup',
      'ModifyCacheSubnetGroup',
      'ModifyGlobalReplicationGroup',
      'ModifyReplicationGroup',
      'ModifyReplicationGroupShardConfiguration',
      'ModifyUser',
      'ModifyUserGroup',
      'PurchaseReservedCacheNodesOffering',
      'RebalanceSlotsInGlobalReplicationGroup',
      'RebootCacheCluster',
      'ResetCacheParameterGroup',
      'RevokeCacheSecurityGroupIngress',
      'StartMigration',
      'TestFailover'
    ],
    List: [
      'DescribeCacheClusters',
      'DescribeCacheEngineVersions',
      'DescribeCacheParameterGroups',
      'DescribeCacheParameters',
      'DescribeCacheSecurityGroups',
      'DescribeCacheSubnetGroups',
      'DescribeEngineDefaultParameters',
      'DescribeEvents',
      'DescribeGlobalReplicationGroups',
      'DescribeReplicationGroups',
      'DescribeReservedCacheNodes',
      'DescribeReservedCacheNodesOfferings',
      'DescribeServiceUpdates',
      'DescribeSnapshots',
      'DescribeUpdateActions',
      'DescribeUserGroups',
      'DescribeUsers',
      'ListAllowedNodeTypeModifications'
    ],
    Read: [
      'ListTagsForResource'
    ]
  };

  /**
   * Adds a resource of type parametergroup to the statement
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html#WhatIs.Components.ParameterGroups
   *
   * @param cacheParameterGroupName - Identifier for the cacheParameterGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifCacheParameterGroupName()
   */
  public onParametergroup(cacheParameterGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticache:${ region || '*' }:${ account || '*' }:parametergroup:${ cacheParameterGroupName }`);
  }

  /**
   * Adds a resource of type securitygroup to the statement
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html#WhatIs.Components.SecurityGroups
   *
   * @param cacheSecurityGroupName - Identifier for the cacheSecurityGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   */
  public onSecuritygroup(cacheSecurityGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticache:${ region || '*' }:${ account || '*' }:securitygroup:${ cacheSecurityGroupName }`);
  }

  /**
   * Adds a resource of type subnetgroup to the statement
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html#WhatIs.Components.SubnetGroups
   *
   * @param cacheSubnetGroupName - Identifier for the cacheSubnetGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   */
  public onSubnetgroup(cacheSubnetGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticache:${ region || '*' }:${ account || '*' }:subnetgroup:${ cacheSubnetGroupName }`);
  }

  /**
   * Adds a resource of type replicationgroup to the statement
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html#WhatIs.Components.ReplicationGroups
   *
   * @param replicationGroupId - Identifier for the replicationGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAtRestEncryptionEnabled()
   * - .ifAuthTokenEnabled()
   * - .ifAutomaticFailoverEnabled()
   * - .ifCacheNodeType()
   * - .ifCacheParameterGroupName()
   * - .ifClusterModeEnabled()
   * - .ifEngineType()
   * - .ifEngineVersion()
   * - .ifKmsKeyId()
   * - .ifMultiAZEnabled()
   * - .ifNumNodeGroups()
   * - .ifReplicasPerNodeGroup()
   * - .ifSnapshotRetentionLimit()
   * - .ifTransitEncryptionEnabled()
   */
  public onReplicationgroup(replicationGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticache:${ region || '*' }:${ account || '*' }:replicationgroup:${ replicationGroupId }`);
  }

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html#WhatIs.Components.Clusters
   *
   * @param cacheClusterId - Identifier for the cacheClusterId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAuthTokenEnabled()
   * - .ifCacheNodeType()
   * - .ifCacheParameterGroupName()
   * - .ifEngineType()
   * - .ifEngineVersion()
   * - .ifMultiAZEnabled()
   * - .ifSnapshotRetentionLimit()
   */
  public onCluster(cacheClusterId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticache:${ region || '*' }:${ account || '*' }:cluster:${ cacheClusterId }`);
  }

  /**
   * Adds a resource of type reserved-instance to the statement
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html
   *
   * @param reservedCacheNodeId - Identifier for the reservedCacheNodeId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   */
  public onReservedInstance(reservedCacheNodeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticache:${ region || '*' }:${ account || '*' }:reserved-instance:${ reservedCacheNodeId }`);
  }

  /**
   * Adds a resource of type snapshot to the statement
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html#WhatIs.Components.Snapshots
   *
   * @param snapshotName - Identifier for the snapshotName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifKmsKeyId()
   */
  public onSnapshot(snapshotName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticache:${ region || '*' }:${ account || '*' }:snapshot:${ snapshotName }`);
  }

  /**
   * Adds a resource of type globalreplicationgroup to the statement
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html
   *
   * @param globalReplicationGroupId - Identifier for the globalReplicationGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAtRestEncryptionEnabled()
   * - .ifAuthTokenEnabled()
   * - .ifAutomaticFailoverEnabled()
   * - .ifCacheNodeType()
   * - .ifCacheParameterGroupName()
   * - .ifClusterModeEnabled()
   * - .ifEngineType()
   * - .ifEngineVersion()
   * - .ifKmsKeyId()
   * - .ifMultiAZEnabled()
   * - .ifNumNodeGroups()
   * - .ifReplicasPerNodeGroup()
   * - .ifSnapshotRetentionLimit()
   * - .ifTransitEncryptionEnabled()
   */
  public onGlobalreplicationgroup(globalReplicationGroupId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticache::${ account || '*' }:globalreplicationgroup:${ globalReplicationGroupId }`);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html
   *
   * @param userId - Identifier for the userId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifUserAuthenticationMode()
   */
  public onUser(userId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticache:${ region || '*' }:${ account || '*' }:user:${ userId }`);
  }

  /**
   * Adds a resource of type usergroup to the statement
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html
   *
   * @param userGroupId - Identifier for the userGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   */
  public onUsergroup(userGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticache:${ region || '*' }:${ account || '*' }:usergroup:${ userGroupId }`);
  }

  /**
   * Filters access by the AtRestEncryptionEnabled parameter present in the request or default false value if parameter is not present
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCreateReplicationGroup()
   *
   * Applies to resource types:
   * - replicationgroup
   * - globalreplicationgroup
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAtRestEncryptionEnabled(value?: boolean) {
    return this.if(`AtRestEncryptionEnabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the presence of non empty AuthToken parameter in the request
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCreateCacheCluster()
   * - .toCreateReplicationGroup()
   * - .toModifyCacheCluster()
   * - .toModifyReplicationGroup()
   *
   * Applies to resource types:
   * - replicationgroup
   * - cluster
   * - globalreplicationgroup
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAuthTokenEnabled(value?: boolean) {
    return this.if(`AuthTokenEnabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the AutomaticFailoverEnabled parameter in the request
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCreateReplicationGroup()
   * - .toModifyGlobalReplicationGroup()
   * - .toModifyReplicationGroup()
   *
   * Applies to resource types:
   * - replicationgroup
   * - globalreplicationgroup
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAutomaticFailoverEnabled(value?: boolean) {
    return this.if(`AutomaticFailoverEnabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the cacheNodeType parameter present in the request. This key can be used to restrict which cache node types can be used on cluster creation or scaling operations
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCreateCacheCluster()
   * - .toCreateReplicationGroup()
   * - .toModifyCacheCluster()
   * - .toModifyGlobalReplicationGroup()
   * - .toModifyReplicationGroup()
   *
   * Applies to resource types:
   * - replicationgroup
   * - cluster
   * - globalreplicationgroup
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCacheNodeType(value: string | string[], operator?: Operator | string) {
    return this.if(`CacheNodeType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the CacheParameterGroupName parameter in the request
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCreateCacheCluster()
   * - .toCreateCacheParameterGroup()
   * - .toCreateReplicationGroup()
   * - .toDeleteCacheParameterGroup()
   * - .toModifyCacheCluster()
   * - .toModifyCacheParameterGroup()
   * - .toModifyReplicationGroup()
   * - .toResetCacheParameterGroup()
   *
   * Applies to resource types:
   * - parametergroup
   * - replicationgroup
   * - cluster
   * - globalreplicationgroup
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCacheParameterGroupName(value: string | string[], operator?: Operator | string) {
    return this.if(`CacheParameterGroupName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the cluster mode parameter present in the request. Default value for single node group (shard) creations is false
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCreateReplicationGroup()
   *
   * Applies to resource types:
   * - replicationgroup
   * - globalreplicationgroup
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifClusterModeEnabled(value?: boolean) {
    return this.if(`ClusterModeEnabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the engine type present in creation requests. For replication group creations, default engine 'redis' is used as key if parameter is not present
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCreateCacheCluster()
   * - .toCreateReplicationGroup()
   *
   * Applies to resource types:
   * - replicationgroup
   * - cluster
   * - globalreplicationgroup
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEngineType(value: string | string[], operator?: Operator | string) {
    return this.if(`EngineType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the engineVersion parameter present in creation or cluster modification requests
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCreateCacheCluster()
   * - .toCreateReplicationGroup()
   * - .toModifyCacheCluster()
   * - .toModifyGlobalReplicationGroup()
   * - .toModifyReplicationGroup()
   *
   * Applies to resource types:
   * - replicationgroup
   * - cluster
   * - globalreplicationgroup
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEngineVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`EngineVersion`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the KmsKeyId parameter in the request
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCopySnapshot()
   * - .toCreateReplicationGroup()
   * - .toCreateSnapshot()
   *
   * Applies to resource types:
   * - replicationgroup
   * - snapshot
   * - globalreplicationgroup
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKmsKeyId(value: string | string[], operator?: Operator | string) {
    return this.if(`KmsKeyId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the AZMode parameter, MultiAZEnabled parameter or the number of availability zones that the cluster or replication group can be placed in
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCreateCacheCluster()
   * - .toCreateReplicationGroup()
   * - .toModifyCacheCluster()
   * - .toModifyReplicationGroup()
   *
   * Applies to resource types:
   * - replicationgroup
   * - cluster
   * - globalreplicationgroup
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifMultiAZEnabled(value?: boolean) {
    return this.if(`MultiAZEnabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the NumNodeGroups or NodeGroupCount parameter specified in the request. This key can be used to restrict the number of node groups (shards) clusters can have after creation or scaling operations
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCreateReplicationGroup()
   * - .toDecreaseNodeGroupsInGlobalReplicationGroup()
   * - .toIncreaseNodeGroupsInGlobalReplicationGroup()
   * - .toModifyReplicationGroupShardConfiguration()
   *
   * Applies to resource types:
   * - replicationgroup
   * - globalreplicationgroup
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifNumNodeGroups(value: number | number[], operator?: Operator | string) {
    return this.if(`NumNodeGroups`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the number of replicas per node group (shards) specified in creations or scaling requests
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCreateReplicationGroup()
   * - .toDecreaseReplicaCount()
   * - .toIncreaseReplicaCount()
   *
   * Applies to resource types:
   * - replicationgroup
   * - globalreplicationgroup
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifReplicasPerNodeGroup(value: number | number[], operator?: Operator | string) {
    return this.if(`ReplicasPerNodeGroup`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the SnapshotRetentionLimit parameter in the request
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCreateCacheCluster()
   * - .toCreateReplicationGroup()
   * - .toModifyCacheCluster()
   * - .toModifyReplicationGroup()
   *
   * Applies to resource types:
   * - replicationgroup
   * - cluster
   * - globalreplicationgroup
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifSnapshotRetentionLimit(value: number | number[], operator?: Operator | string) {
    return this.if(`SnapshotRetentionLimit`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the TransitEncryptionEnabled parameter present in the request. For replication group creations, default value 'false' is used as key if parameter is not present
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCreateReplicationGroup()
   * - .toModifyReplicationGroup()
   *
   * Applies to resource types:
   * - replicationgroup
   * - globalreplicationgroup
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifTransitEncryptionEnabled(value?: boolean) {
    return this.if(`TransitEncryptionEnabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the UserAuthenticationMode parameter in the request
   *
   * https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions
   *
   * Applies to actions:
   * - .toCreateUser()
   * - .toModifyUser()
   *
   * Applies to resource types:
   * - user
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUserAuthenticationMode(value: string | string[], operator?: Operator | string) {
    return this.if(`UserAuthenticationMode`, value, operator || 'StringLike');
  }
}
