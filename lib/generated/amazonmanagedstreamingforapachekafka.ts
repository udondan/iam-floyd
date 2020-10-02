import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [kafka](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmanagedstreamingforapachekafka.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kafka extends PolicyStatement {
  public servicePrefix = 'kafka';

  /**
   * Statement provider for service [kafka](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmanagedstreamingforapachekafka.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate one or more Scram Secrets with an Amazon MSK cluster.
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
    this.to('kafka:BatchAssociateScramSecret');
    return this;
  }

  /**
   * Grants permission to disassociate one or more Scram Secrets from an Amazon MSK cluster.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:RetireGrant
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-scram-secrets.html#BatchDisassociateScramSecret
   */
  public toBatchDisassociateScramSecret() {
    this.to('kafka:BatchDisassociateScramSecret');
    return this;
  }

  /**
   * Grants permission to create a cluster
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
    this.to('kafka:CreateCluster');
    return this;
  }

  /**
   * Grants permission to create a configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations.html#CreateConfiguration
   */
  public toCreateConfiguration() {
    this.to('kafka:CreateConfiguration');
    return this;
  }

  /**
   * Grants permission to delete a cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html#DeleteCluster
   */
  public toDeleteCluster() {
    this.to('kafka:DeleteCluster');
    return this;
  }

  /**
   * Grants permission to delete the specified MSK configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#DeleteConfiguration
   */
  public toDeleteConfiguration() {
    this.to('kafka:DeleteConfiguration');
    return this;
  }

  /**
   * Grants permission to describe a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html#DescribeCluster
   */
  public toDescribeCluster() {
    this.to('kafka:DescribeCluster');
    return this;
  }

  /**
   * Returns a description of the cluster operation specified by the ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/operations-clusteroperationarn.html#DescribeClusterOperation
   */
  public toDescribeClusterOperation() {
    this.to('kafka:DescribeClusterOperation');
    return this;
  }

  /**
   * Grants permission to describe a configuration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations-configurationarn.html#DescribeConfiguration
   */
  public toDescribeConfiguration() {
    this.to('kafka:DescribeConfiguration');
    return this;
  }

  /**
   * Grants permission to describe a configuration revision.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations-configurationarn-revision.html#DescribeConfigurationRevision
   */
  public toDescribeConfigurationRevision() {
    this.to('kafka:DescribeConfigurationRevision');
    return this;
  }

  /**
   * Grants permission to get connection details for the broker nodes in a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-bootstrap-brokers.html#GetBootstrapBrokers
   */
  public toGetBootstrapBrokers() {
    this.to('kafka:GetBootstrapBrokers');
    return this;
  }

  /**
   * Returns a list of the Apache Kafka versions to which you can update this cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/compatible-kafka-versions.html#GetCompatibleKafkaVersions
   */
  public toGetCompatibleKafkaVersions() {
    this.to('kafka:GetCompatibleKafkaVersions');
    return this;
  }

  /**
   * Returns a list of all the operations that have been performed on the specified MSK cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-operations.html#ListClusterOperations
   */
  public toListClusterOperations() {
    this.to('kafka:ListClusterOperations');
    return this;
  }

  /**
   * Grants permission to return a list of all clusters in the current account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#ListClusters
   */
  public toListClusters() {
    this.to('kafka:ListClusters');
    return this;
  }

  /**
   * Grants permission to return a list of all configurations in the current account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations.html#CreateConfiguration
   */
  public toListConfigurations() {
    this.to('kafka:ListConfigurations');
    return this;
  }

  /**
   * Grants permission to return a list of nodes in a cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes.html#ListNodes
   */
  public toListNodes() {
    this.to('kafka:ListNodes');
    return this;
  }

  /**
   * Grants permission to return a list of the Scram Secrets associated with an Amazon MSK cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-scram-secrets.html#ListScramSecrets
   */
  public toListScramSecrets() {
    this.to('kafka:ListScramSecrets');
    return this;
  }

  /**
   * Grants permission to list tags of a MSK resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#ListTagsForResource
   */
  public toListTagsForResource() {
    this.to('kafka:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to tag a MSK resource.
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
    this.to('kafka:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from a MSK resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#UntagResource
   */
  public toUntagResource() {
    this.to('kafka:UntagResource');
    return this;
  }

  /**
   * Updates the number of broker nodes of the cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes-count.html#UpdateBrokerCount
   */
  public toUpdateBrokerCount() {
    this.to('kafka:UpdateBrokerCount');
    return this;
  }

  /**
   * Updates the storage size of the broker nodes of the cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes-storage.html#UpdateBrokerStorage
   */
  public toUpdateBrokerStorage() {
    this.to('kafka:UpdateBrokerStorage');
    return this;
  }

  /**
   * Update Kafka configuration running on a cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-configuration.html#UpdateClusterConfiguration
   */
  public toUpdateClusterConfiguration() {
    this.to('kafka:UpdateClusterConfiguration');
    return this;
  }

  /**
   * Updates the cluster to the specified Apache Kafka version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-version.html#UpdateClusterKafkaVersion
   */
  public toUpdateClusterKafkaVersion() {
    this.to('kafka:UpdateClusterKafkaVersion');
    return this;
  }

  /**
   * Grants permission to create a new revision of the configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#updateconfiguration
   */
  public toUpdateConfiguration() {
    this.to('kafka:UpdateConfiguration');
    return this;
  }

  /**
   * Updates the monitoring settings for the cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-monitoring.html#UpdateMonitoring
   */
  public toUpdateMonitoring() {
    this.to('kafka:UpdateMonitoring');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BatchAssociateScramSecret",
      "BatchDisassociateScramSecret",
      "CreateCluster",
      "CreateConfiguration",
      "DeleteCluster",
      "DeleteConfiguration",
      "UpdateBrokerCount",
      "UpdateBrokerStorage",
      "UpdateClusterConfiguration",
      "UpdateClusterKafkaVersion",
      "UpdateConfiguration",
      "UpdateMonitoring"
    ],
    "Read": [
      "DescribeCluster",
      "DescribeClusterOperation",
      "DescribeConfiguration",
      "DescribeConfigurationRevision",
      "GetBootstrapBrokers"
    ],
    "List": [
      "GetCompatibleKafkaVersions",
      "ListClusterOperations",
      "ListClusters",
      "ListConfigurations",
      "ListNodes",
      "ListScramSecrets",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * @param clusterName - Identifier for the clusterName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(clusterName: string, uUID: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kafka:${Region}:${Account}:cluster/${ClusterName}/${UUID}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${UUID}', uUID);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
