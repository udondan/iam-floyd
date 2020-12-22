import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
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
    this.to('kafka:BatchAssociateScramSecret');
    return this;
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
    this.to('kafka:BatchDisassociateScramSecret');
    return this;
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
    this.to('kafka:CreateCluster');
    return this;
  }

  /**
   * Grants permission to create an MSK configuration
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
   * Grants permission to delete an MSK cluster
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
   * Grants permission to delete the specified MSK configuration
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
   * Grants permission to describe an MSK cluster
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
   * Grants permission to describe the cluster operation that is specified by the given ARN
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
   * Grants permission to describe an MSK configuration
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
   * Grants permission to describe an MSK configuration revision
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
   * Grants permission to get connection details for the brokers in an MSK cluster
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
   * Grants permission to get a list of the Apache Kafka versions to which you can update an MSK cluster
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
   * Returns a list of all the operations that have been performed on the specified MSK cluster
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
   * Grants permission to list all MSK clusters in this account
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
   * Grants permission to list all revisions for an MSK configuration in this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn-revisions.html#ListConfigurationRevisions
   */
  public toListConfigurationRevisions() {
    this.to('kafka:ListConfigurationRevisions');
    return this;
  }

  /**
   * Grants permission to list all MSK configurations in this account
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
   * Grants permission to list all Apache Kafka versions supported by Amazon MSK
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/kafka-versions.html#ListKafkaVersions
   */
  public toListKafkaVersions() {
    this.to('kafka:ListKafkaVersions');
    return this;
  }

  /**
   * Grants permission to list brokers in an MSK cluster
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
   * Grants permission to list the Scram Secrets associated with an Amazon MSK cluster
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
   * Grants permission to list tags of an MSK resource
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
   * Grants permission to reboot broker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-reboot-broker.html#RebootBroker
   */
  public toRebootBroker() {
    this.to('kafka:RebootBroker');
    return this;
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
    this.to('kafka:TagResource');
    return this;
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
    this.to('kafka:UntagResource');
    return this;
  }

  /**
   * Updates the number of brokers of the MSK cluster
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
   * Updates the storage size of the brokers of the MSK cluster
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
   * Grants permission to update the configuration of the MSK cluster
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
   * Grants permission to update the MSK cluster to the specified Apache Kafka version
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
   * Grants permission to create a new revision of the MSK configuration
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
   * Grants permission to update the monitoring settings for the MSK cluster
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
      "RebootBroker",
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
      "ListConfigurationRevisions",
      "ListConfigurations",
      "ListKafkaVersions",
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
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html
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
