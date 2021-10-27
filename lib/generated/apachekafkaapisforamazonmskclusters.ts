import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [kafka-cluster](https://docs.aws.amazon.com/service-authorization/latest/reference/list_apachekafkaapisforamazonmskclusters.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class KafkaCluster extends PolicyStatement {
  public servicePrefix = 'kafka-cluster';

  /**
   * Statement provider for service [kafka-cluster](https://docs.aws.amazon.com/service-authorization/latest/reference/list_apachekafkaapisforamazonmskclusters.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to alter various aspects of the cluster, equivalent to Apache Kafka's ALTER CLUSTER ACL
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   * - kafka-cluster:DescribeCluster
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toAlterCluster() {
    return this.to('AlterCluster');
  }

  /**
   * Grants permission to alter the dynamic configuration of a cluster, equivalent to Apache Kafka's ALTER_CONFIGS CLUSTER ACL
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   * - kafka-cluster:DescribeClusterDynamicConfiguration
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toAlterClusterDynamicConfiguration() {
    return this.to('AlterClusterDynamicConfiguration');
  }

  /**
   * Grants permission to join groups on a cluster, equivalent to Apache Kafka's READ GROUP ACL
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   * - kafka-cluster:DescribeGroup
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toAlterGroup() {
    return this.to('AlterGroup');
  }

  /**
   * Grants permission to alter topics on a cluster, equivalent to Apache Kafka's ALTER TOPIC ACL
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   * - kafka-cluster:DescribeTopic
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toAlterTopic() {
    return this.to('AlterTopic');
  }

  /**
   * Grants permission to alter the dynamic configuration of topics on a cluster, equivalent to Apache Kafka's ALTER_CONFIGS TOPIC ACL
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   * - kafka-cluster:DescribeTopicDynamicConfiguration
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toAlterTopicDynamicConfiguration() {
    return this.to('AlterTopicDynamicConfiguration');
  }

  /**
   * Grants permission to alter transactional IDs on a cluster, equivalent to Apache Kafka's WRITE TRANSACTIONAL_ID ACL
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   * - kafka-cluster:DescribeTransactionalId
   * - kafka-cluster:WriteData
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toAlterTransactionalId() {
    return this.to('AlterTransactionalId');
  }

  /**
   * Grants permission to connect and authenticate to the cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toConnect() {
    return this.to('Connect');
  }

  /**
   * Grants permission to create topics on a cluster, equivalent to Apache Kafka's CREATE CLUSTER/TOPIC ACL
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toCreateTopic() {
    return this.to('CreateTopic');
  }

  /**
   * Grants permission to delete groups on a cluster, equivalent to Apache Kafka's DELETE GROUP ACL
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   * - kafka-cluster:DescribeGroup
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Grants permission to delete topics on a cluster, equivalent to Apache Kafka's DELETE TOPIC ACL
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   * - kafka-cluster:DescribeTopic
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toDeleteTopic() {
    return this.to('DeleteTopic');
  }

  /**
   * Grants permission to describe various aspects of the cluster, equivalent to Apache Kafka's DESCRIBE CLUSTER ACL
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toDescribeCluster() {
    return this.to('DescribeCluster');
  }

  /**
   * Grants permission to describe the dynamic configuration of a cluster, equivalent to Apache Kafka's DESCRIBE_CONFIGS CLUSTER ACL
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toDescribeClusterDynamicConfiguration() {
    return this.to('DescribeClusterDynamicConfiguration');
  }

  /**
   * Grants permission to describe groups on a cluster, equivalent to Apache Kafka's DESCRIBE GROUP ACL
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toDescribeGroup() {
    return this.to('DescribeGroup');
  }

  /**
   * Grants permission to describe topics on a cluster, equivalent to Apache Kafka's DESCRIBE TOPIC ACL
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toDescribeTopic() {
    return this.to('DescribeTopic');
  }

  /**
   * Grants permission to describe the dynamic configuration of topics on a cluster, equivalent to Apache Kafka's DESCRIBE_CONFIGS TOPIC ACL
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toDescribeTopicDynamicConfiguration() {
    return this.to('DescribeTopicDynamicConfiguration');
  }

  /**
   * Grants permission to describe transactional IDs on a cluster, equivalent to Apache Kafka's DESCRIBE TRANSACTIONAL_ID ACL
   *
   * Access Level: List
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toDescribeTransactionalId() {
    return this.to('DescribeTransactionalId');
  }

  /**
   * Grants permission to read data from topics on a cluster, equivalent to Apache Kafka's READ TOPIC ACL
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kafka-cluster:AlterGroup
   * - kafka-cluster:Connect
   * - kafka-cluster:DescribeTopic
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toReadData() {
    return this.to('ReadData');
  }

  /**
   * Grants permission to write data to topics on a cluster, equivalent to Apache Kafka's WRITE TOPIC ACL
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   * - kafka-cluster:DescribeTopic
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toWriteData() {
    return this.to('WriteData');
  }

  /**
   * Grants permission to write data idempotently on a cluster, equivalent to Apache Kafka's IDEMPOTENT_WRITE CLUSTER ACL
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kafka-cluster:Connect
   * - kafka-cluster:WriteData
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   */
  public toWriteDataIdempotently() {
    return this.to('WriteDataIdempotently');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AlterCluster",
      "AlterClusterDynamicConfiguration",
      "AlterGroup",
      "AlterTopic",
      "AlterTopicDynamicConfiguration",
      "AlterTransactionalId",
      "Connect",
      "CreateTopic",
      "DeleteGroup",
      "DeleteTopic",
      "WriteData",
      "WriteDataIdempotently"
    ],
    "List": [
      "DescribeCluster",
      "DescribeClusterDynamicConfiguration",
      "DescribeGroup",
      "DescribeTopic",
      "DescribeTopicDynamicConfiguration",
      "DescribeTransactionalId"
    ],
    "Read": [
      "ReadData"
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/resources.htmlclusters
   *
   * @param clusterName - Identifier for the clusterName.
   * @param clusterUuid - Identifier for the clusterUuid.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(clusterName: string, clusterUuid: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:kafka:${ region || '*' }:${ account || '*' }:cluster/${ clusterName }/${ clusterUuid }`);
  }

  /**
   * Adds a resource of type topic to the statement
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/resources.htmltopics
   *
   * @param clusterName - Identifier for the clusterName.
   * @param clusterUuid - Identifier for the clusterUuid.
   * @param topicName - Identifier for the topicName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTopic(clusterName: string, clusterUuid: string, topicName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:kafka:${ region || '*' }:${ account || '*' }:topic/${ clusterName }/${ clusterUuid }/${ topicName }`);
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/resources.htmlgroups
   *
   * @param clusterName - Identifier for the clusterName.
   * @param clusterUuid - Identifier for the clusterUuid.
   * @param groupName - Identifier for the groupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGroup(clusterName: string, clusterUuid: string, groupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:kafka:${ region || '*' }:${ account || '*' }:group/${ clusterName }/${ clusterUuid }/${ groupName }`);
  }

  /**
   * Adds a resource of type transactional-id to the statement
   *
   * https://docs.aws.amazon.com/msk/latest/developerguide/resources.htmltransactional_ids
   *
   * @param clusterName - Identifier for the clusterName.
   * @param clusterUuid - Identifier for the clusterUuid.
   * @param transactionalId - Identifier for the transactionalId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTransactionalId(clusterName: string, clusterUuid: string, transactionalId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:kafka:${ region || '*' }:${ account || '*' }:transactional-id/${ clusterName }/${ clusterUuid }/${ transactionalId }`);
  }
}
