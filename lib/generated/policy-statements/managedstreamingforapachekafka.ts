import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [kafka](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedstreamingforapachekafka.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kafka extends PolicyStatement {
  public servicePrefix = 'kafka';

  /**
   * Statement provider for service [kafka](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedstreamingforapachekafka.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate one or more Scram Secrets with an Amazon MSK cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:CreateGrant
   * - kms:RetireGrant
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-scram-secrets.html#BatchAssociateScramSecret
   */
  public toBatchAssociateScramSecret() {
    return this.to('BatchAssociateScramSecret');
  }

  /**
   * Grants permission to disassociate one or more Scram Secrets from an Amazon MSK cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:RetireGrant
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-scram-secrets.html#BatchDisassociateScramSecret
   */
  public toBatchDisassociateScramSecret() {
    return this.to('BatchDisassociateScramSecret');
  }

  /**
   * Grants permission to create an MSK cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - kms:CreateGrant
   * - kms:DescribeKey
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#CreateCluster
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Grants permission to create an MSK cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:CreateTags
   * - ec2:CreateVpcEndpoint
   * - ec2:DeleteVpcEndpoints
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcAttribute
   * - ec2:DescribeVpcEndpoints
   * - ec2:DescribeVpcs
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - kms:CreateGrant
   * - kms:DescribeKey
   *
   * https://docs.aws.amazon.com/MSK/2.0/APIReference/v2-clusters.html#CreateClusterV2
   */
  public toCreateClusterV2() {
    return this.to('CreateClusterV2');
  }

  /**
   * Grants permission to create an MSK configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations.html#CreateConfiguration
   */
  public toCreateConfiguration() {
    return this.to('CreateConfiguration');
  }

  /**
   * Grants permission to create a MSK replicator
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PassRole
   * - iam:PutRolePolicy
   * - kafka:DescribeClusterV2
   * - kafka:GetBootstrapBrokers
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/v1-replicators.html#CreateReplicator
   */
  public toCreateReplicator() {
    return this.to('CreateReplicator');
  }

  /**
   * Grants permission to create a MSK VPC connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:CreateTags
   * - ec2:CreateVpcEndpoint
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcAttribute
   * - ec2:DescribeVpcEndpoints
   * - ec2:DescribeVpcs
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/vpc-connection.html#CreateVpcConnection
   */
  public toCreateVpcConnection() {
    return this.to('CreateVpcConnection');
  }

  /**
   * Grants permission to delete an MSK cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DeleteVpcEndpoints
   * - ec2:DescribeVpcAttribute
   * - ec2:DescribeVpcEndpoints
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html#DeleteCluster
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * Grants permission to delete a cluster resource-based policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-policy.html#DeleteClusterPolicy
   */
  public toDeleteClusterPolicy() {
    return this.to('DeleteClusterPolicy');
  }

  /**
   * Grants permission to delete the specified MSK configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#DeleteConfiguration
   */
  public toDeleteConfiguration() {
    return this.to('DeleteConfiguration');
  }

  /**
   * Grants permission to delete a MSK replicator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/v1-replicators.html#DeleteReplicator
   */
  public toDeleteReplicator() {
    return this.to('DeleteReplicator');
  }

  /**
   * Grants permission to delete a MSK VPC connection
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DeleteVpcEndpoints
   * - ec2:DescribeVpcEndpoints
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/vpc-connection-arn.html#DeleteVpcConnection
   */
  public toDeleteVpcConnection() {
    return this.to('DeleteVpcConnection');
  }

  /**
   * Grants permission to describe an MSK cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html#DescribeCluster
   */
  public toDescribeCluster() {
    return this.to('DescribeCluster');
  }

  /**
   * Grants permission to describe the cluster operation that is specified by the given ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/operations-clusteroperationarn.html#DescribeClusterOperation
   */
  public toDescribeClusterOperation() {
    return this.to('DescribeClusterOperation');
  }

  /**
   * Grants permission to describe the cluster operation that is specified by the given ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/MSK/2.0/APIReference/v2-operations-clusteroperationarn.html#DescribeClusterOperationV2
   */
  public toDescribeClusterOperationV2() {
    return this.to('DescribeClusterOperationV2');
  }

  /**
   * Grants permission to describe an MSK cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/MSK/2.0/APIReference/v2-clusters-clusterarn.html#DescribeClusterV2
   */
  public toDescribeClusterV2() {
    return this.to('DescribeClusterV2');
  }

  /**
   * Grants permission to describe an MSK configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#DescribeConfiguration
   */
  public toDescribeConfiguration() {
    return this.to('DescribeConfiguration');
  }

  /**
   * Grants permission to describe an MSK configuration revision
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn-revisions-revision.html#DescribeConfigurationRevision
   */
  public toDescribeConfigurationRevision() {
    return this.to('DescribeConfigurationRevision');
  }

  /**
   * Grants permission to describe a MSK replicator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/v1-replicators.html#DescribeReplicator
   */
  public toDescribeReplicator() {
    return this.to('DescribeReplicator');
  }

  /**
   * Grants permission to describe a MSK VPC connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/vpc-connection-arn.html#DescribeVpcConnection
   */
  public toDescribeVpcConnection() {
    return this.to('DescribeVpcConnection');
  }

  /**
   * Grants permission to get connection details for the brokers in an MSK cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-bootstrap-brokers.html#GetBootstrapBrokers
   */
  public toGetBootstrapBrokers() {
    return this.to('GetBootstrapBrokers');
  }

  /**
   * Grants permission to describe a cluster resource-based policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-policy.html#GetClusterPolicy
   */
  public toGetClusterPolicy() {
    return this.to('GetClusterPolicy');
  }

  /**
   * Grants permission to get a list of the Apache Kafka versions to which you can update an MSK cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/compatible-kafka-versions.html#GetCompatibleKafkaVersions
   */
  public toGetCompatibleKafkaVersions() {
    return this.to('GetCompatibleKafkaVersions');
  }

  /**
   * Grants permission to list all MSK VPC connections created for a cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-client-vpc-connections.html#ListClientVpcConnections
   */
  public toListClientVpcConnections() {
    return this.to('ListClientVpcConnections');
  }

  /**
   * Grants permission to return a list of all the operations that have been performed on the specified MSK cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-operations.html#ListClusterOperations
   */
  public toListClusterOperations() {
    return this.to('ListClusterOperations');
  }

  /**
   * Grants permission to return a list of all the operations that have been performed on the specified MSK cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/MSK/2.0/APIReference/v2-clusters-clusterarn-operations.html#ListClusterOperationsV2
   */
  public toListClusterOperationsV2() {
    return this.to('ListClusterOperationsV2');
  }

  /**
   * Grants permission to list all MSK clusters in this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#ListClusters
   */
  public toListClusters() {
    return this.to('ListClusters');
  }

  /**
   * Grants permission to list all MSK clusters in this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/MSK/2.0/APIReference/v2-clusters.html#ListClustersV2
   */
  public toListClustersV2() {
    return this.to('ListClustersV2');
  }

  /**
   * Grants permission to list all revisions for an MSK configuration in this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn-revisions.html#ListConfigurationRevisions
   */
  public toListConfigurationRevisions() {
    return this.to('ListConfigurationRevisions');
  }

  /**
   * Grants permission to list all MSK configurations in this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations.html#ListConfigurations
   */
  public toListConfigurations() {
    return this.to('ListConfigurations');
  }

  /**
   * Grants permission to list all Apache Kafka versions supported by Amazon MSK
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/kafka-versions.html#ListKafkaVersions
   */
  public toListKafkaVersions() {
    return this.to('ListKafkaVersions');
  }

  /**
   * Grants permission to list brokers in an MSK cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes.html#ListNodes
   */
  public toListNodes() {
    return this.to('ListNodes');
  }

  /**
   * Grants permission to list all MSK replicators in this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/v1-replicators.html#ListReplicators
   */
  public toListReplicators() {
    return this.to('ListReplicators');
  }

  /**
   * Grants permission to list the Scram Secrets associated with an Amazon MSK cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-scram-secrets.html#ListScramSecrets
   */
  public toListScramSecrets() {
    return this.to('ListScramSecrets');
  }

  /**
   * Grants permission to list tags of an MSK resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#ListTagsForResource
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all MSK VPC connections that this account uses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/vpc-connections.html#ListVpcConnections
   */
  public toListVpcConnections() {
    return this.to('ListVpcConnections');
  }

  /**
   * Grants permission to create or update the resource-based policy for a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-policy.html#PutClusterPolicy
   */
  public toPutClusterPolicy() {
    return this.to('PutClusterPolicy');
  }

  /**
   * Grants permission to reboot broker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-reboot-broker.html#RebootBroker
   */
  public toRebootBroker() {
    return this.to('RebootBroker');
  }

  /**
   * Grants permission to reject a MSK VPC connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-client-vpc-connection.html#RejectClientVpcConnection
   */
  public toRejectClientVpcConnection() {
    return this.to('RejectClientVpcConnection');
  }

  /**
   * Grants permission to tag an MSK resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#TagResource
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from an MSK resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#UntagResource
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the number of brokers of the MSK cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes-count.html#UpdateBrokerCount
   */
  public toUpdateBrokerCount() {
    return this.to('UpdateBrokerCount');
  }

  /**
   * Grants permission to update the storage size of the brokers of the MSK cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes-storage.html#UpdateBrokerStorage
   */
  public toUpdateBrokerStorage() {
    return this.to('UpdateBrokerStorage');
  }

  /**
   * Grants permission to update the broker type of an Amazon MSK cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes-type.html#UpdateBrokerType
   */
  public toUpdateBrokerType() {
    return this.to('UpdateBrokerType');
  }

  /**
   * Grants permission to update the configuration of the MSK cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-configuration.html#UpdateClusterConfiguration
   */
  public toUpdateClusterConfiguration() {
    return this.to('UpdateClusterConfiguration');
  }

  /**
   * Grants permission to update the MSK cluster to the specified Apache Kafka version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-version.html#UpdateClusterKafkaVersion
   */
  public toUpdateClusterKafkaVersion() {
    return this.to('UpdateClusterKafkaVersion');
  }

  /**
   * Grants permission to create a new revision of the MSK configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#UpdateConfiguration
   */
  public toUpdateConfiguration() {
    return this.to('UpdateConfiguration');
  }

  /**
   * Grants permission to update the connectivity settings for the MSK cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPublicAccessEnabled()
   *
   * Dependent actions:
   * - ec2:DescribeRouteTables
   * - ec2:DescribeSubnets
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-connectivity.html#UpdateConnectivity
   */
  public toUpdateConnectivity() {
    return this.to('UpdateConnectivity');
  }

  /**
   * Grants permission to update the monitoring settings for the MSK cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-monitoring.html#UpdateMonitoring
   */
  public toUpdateMonitoring() {
    return this.to('UpdateMonitoring');
  }

  /**
   * Grants permission to update the replication info of the MSK replicator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/v1-replicators.html#UpdateReplicationInfo
   */
  public toUpdateReplicationInfo() {
    return this.to('UpdateReplicationInfo');
  }

  /**
   * Grants permission to update the security settings for the MSK cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:RetireGrant
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-security.html#UpdateSecurity
   */
  public toUpdateSecurity() {
    return this.to('UpdateSecurity');
  }

  /**
   * Grants permission to update the EBS storage (size or provisioned throughput) associated with MSK brokers or set cluster storage mode to TIERED
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-storage.html#UpdateStorage
   */
  public toUpdateStorage() {
    return this.to('UpdateStorage');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchAssociateScramSecret',
      'BatchDisassociateScramSecret',
      'CreateCluster',
      'CreateClusterV2',
      'CreateConfiguration',
      'CreateReplicator',
      'CreateVpcConnection',
      'DeleteCluster',
      'DeleteClusterPolicy',
      'DeleteConfiguration',
      'DeleteReplicator',
      'DeleteVpcConnection',
      'PutClusterPolicy',
      'RebootBroker',
      'RejectClientVpcConnection',
      'UpdateBrokerCount',
      'UpdateBrokerStorage',
      'UpdateBrokerType',
      'UpdateClusterConfiguration',
      'UpdateClusterKafkaVersion',
      'UpdateConfiguration',
      'UpdateConnectivity',
      'UpdateMonitoring',
      'UpdateReplicationInfo',
      'UpdateSecurity',
      'UpdateStorage'
    ],
    Read: [
      'DescribeCluster',
      'DescribeClusterOperation',
      'DescribeClusterOperationV2',
      'DescribeClusterV2',
      'DescribeConfiguration',
      'DescribeConfigurationRevision',
      'DescribeReplicator',
      'DescribeVpcConnection',
      'GetBootstrapBrokers',
      'GetClusterPolicy',
      'ListTagsForResource'
    ],
    List: [
      'GetCompatibleKafkaVersions',
      'ListClientVpcConnections',
      'ListClusterOperations',
      'ListClusterOperationsV2',
      'ListClusters',
      'ListClustersV2',
      'ListConfigurationRevisions',
      'ListConfigurations',
      'ListKafkaVersions',
      'ListNodes',
      'ListReplicators',
      'ListScramSecrets',
      'ListVpcConnections'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param uuid - Identifier for the uuid.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(clusterName: string, uuid: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kafka:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cluster/${ clusterName }/${ uuid }`);
  }

  /**
   * Adds a resource of type configuration to the statement
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html
   *
   * @param configurationName - Identifier for the configurationName.
   * @param uuid - Identifier for the uuid.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConfiguration(configurationName: string, uuid: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kafka:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:configuration/${ configurationName }/${ uuid }`);
  }

  /**
   * Adds a resource of type vpc-connection to the statement
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/vpc-connections-arn.html
   *
   * @param vpcOwnerAccount - Identifier for the vpcOwnerAccount.
   * @param clusterOwnerAccount - Identifier for the clusterOwnerAccount.
   * @param clusterName - Identifier for the clusterName.
   * @param uuid - Identifier for the uuid.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVpcConnection(vpcOwnerAccount: string, clusterOwnerAccount: string, clusterName: string, uuid: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kafka:${ region ?? this.defaultRegion }:${ vpcOwnerAccount }:vpc-connection/${ clusterOwnerAccount }/${ clusterName }/${ uuid }`);
  }

  /**
   * Adds a resource of type replicator to the statement
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/v1-replicators.html
   *
   * @param replicatorName - Identifier for the replicatorName.
   * @param uuid - Identifier for the uuid.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReplicator(replicatorName: string, uuid: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kafka:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:replicator/${ replicatorName }/${ uuid }`);
  }

  /**
   * Adds a resource of type topic to the statement
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#msk-iam-resources
   *
   * @param clusterName - Identifier for the clusterName.
   * @param clusterUuid - Identifier for the clusterUuid.
   * @param topicName - Identifier for the topicName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTopic(clusterName: string, clusterUuid: string, topicName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kafka:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:topic/${ clusterName }/${ clusterUuid }/${ topicName }`);
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#msk-iam-resources
   *
   * @param clusterName - Identifier for the clusterName.
   * @param clusterUuid - Identifier for the clusterUuid.
   * @param groupName - Identifier for the groupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onGroup(clusterName: string, clusterUuid: string, groupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kafka:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:group/${ clusterName }/${ clusterUuid }/${ groupName }`);
  }

  /**
   * Adds a resource of type transactional-id to the statement
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#msk-iam-resources
   *
   * @param clusterName - Identifier for the clusterName.
   * @param clusterUuid - Identifier for the clusterUuid.
   * @param transactionalId - Identifier for the transactionalId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTransactionalId(clusterName: string, clusterUuid: string, transactionalId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kafka:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:transactional-id/${ clusterName }/${ clusterUuid }/${ transactionalId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toCreateClusterV2()
   * - .toCreateReplicator()
   * - .toCreateVpcConnection()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - cluster
   * - vpc-connection
   * - replicator
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toCreateClusterV2()
   * - .toCreateReplicator()
   * - .toCreateVpcConnection()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of public access enabled in the request
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_apachekafkaapisforamazonmskclusters.html#apachekafkaapisforamazonmskclusters-policy-keys
   *
   * Applies to actions:
   * - .toUpdateConnectivity()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifPublicAccessEnabled(value?: boolean) {
    return this.if(`publicAccessEnabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }
}
