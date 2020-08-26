import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [kafka](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmanagedstreamingforapachekafka.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kafka extends PolicyStatement {
  public servicePrefix = 'kafka';
  protected actionList: Actions = {
    "CreateCluster": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#CreateCluster",
      "description": "Grants permission to create a cluster.",
      "accessLevel": "Write",
      "dependentActions": [
        "ec2:DescribeSecurityGroups",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs",
        "iam:AttachRolePolicy",
        "iam:CreateServiceLinkedRole",
        "iam:PutRolePolicy",
        "kms:CreateGrant",
        "kms:DescribeKey"
      ],
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateConfiguration": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/configurations.html#CreateConfiguration",
      "description": "Grants permission to create a configuration.",
      "accessLevel": "Write"
    },
    "DeleteCluster": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html#DeleteCluster",
      "description": "Grants permission to delete a cluster.",
      "accessLevel": "Write"
    },
    "DeleteConfiguration": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#DeleteConfiguration",
      "description": "Grants permission to delete the specified MSK configuration.",
      "accessLevel": "Write"
    },
    "DescribeCluster": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html#DescribeCluster",
      "description": "Grants permission to describe a cluster.",
      "accessLevel": "Read"
    },
    "DescribeClusterOperation": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/operations-clusteroperationarn.html#DescribeClusterOperation",
      "description": "Returns a description of the cluster operation specified by the ARN.",
      "accessLevel": "Read"
    },
    "DescribeConfiguration": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/configurations-configurationarn.html#DescribeConfiguration",
      "description": "Grants permission to describe a configuration.",
      "accessLevel": "Read"
    },
    "DescribeConfigurationRevision": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/configurations-configurationarn-revision.html#DescribeConfigurationRevision",
      "description": "Grants permission to describe a configuration revision.",
      "accessLevel": "Read"
    },
    "GetBootstrapBrokers": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-bootstrap-brokers.html#GetBootstrapBrokers",
      "description": "Grants permission to get connection details for the broker nodes in a cluster.",
      "accessLevel": "Read"
    },
    "GetCompatibleKafkaVersions": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/compatible-kafka-versions.html#GetCompatibleKafkaVersions",
      "description": "Returns a list of the Apache Kafka versions to which you can update this cluster.",
      "accessLevel": "List"
    },
    "ListClusterOperations": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-operations.html#ListClusterOperations",
      "description": "Returns a list of all the operations that have been performed on the specified MSK cluster.",
      "accessLevel": "Read"
    },
    "ListClusters": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#ListClusters",
      "description": "Grants permission to return a list of all clusters in the current account.",
      "accessLevel": "List"
    },
    "ListConfigurations": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/configurations.html#CreateConfiguration",
      "description": "Grants permission to return a list of all configurations in the current account.",
      "accessLevel": "List"
    },
    "ListNodes": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes.html#ListNodes",
      "description": "Grants permission to return a list of nodes in a cluster.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#ListTagsForResource",
      "description": "Grants permission to list tags of a MSK resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": false
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#TagResource",
      "description": "Grants permission to tag a MSK resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#UntagResource",
      "description": "Grants permission to remove tags from a MSK resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateBrokerCount": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes-count.html#UpdateBrokerCount",
      "description": "Updates the number of broker nodes of the cluster.",
      "accessLevel": "Write"
    },
    "UpdateBrokerStorage": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes-storage.html#UpdateBrokerStorage",
      "description": "Updates the storage size of the broker nodes of the cluster",
      "accessLevel": "Write"
    },
    "UpdateClusterConfiguration": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-configuration.html#UpdateClusterConfiguration",
      "description": "Update Kafka configuration running on a cluster.",
      "accessLevel": "Write"
    },
    "UpdateClusterKafkaVersion": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-version.html#UpdateClusterKafkaVersion",
      "description": "Updates the cluster to the specified Apache Kafka version.",
      "accessLevel": "Write"
    },
    "UpdateConfiguration": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#updateconfiguration",
      "description": "Grants permission to create a new revision of the configuration.",
      "accessLevel": "Write"
    },
    "UpdateMonitoring": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-monitoring.html#UpdateMonitoring",
      "description": "Updates the monitoring settings for the cluster.",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "cluster": {
      "name": "cluster",
      "url": "",
      "arn": "arn:${Partition}:kafka:${Region}:${Account}:cluster/${ClusterName}/${UUID}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [kafka](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmanagedstreamingforapachekafka.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a cluster.
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
    this.add('kafka:CreateCluster');
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
    this.add('kafka:CreateConfiguration');
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
    this.add('kafka:DeleteCluster');
    return this;
  }

  /**
   * Grants permission to delete the specified MSK configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#DeleteConfiguration
   */
  public deleteConfiguration() {
    this.add('kafka:DeleteConfiguration');
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
    this.add('kafka:DescribeCluster');
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
    this.add('kafka:DescribeClusterOperation');
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
    this.add('kafka:DescribeConfiguration');
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
    this.add('kafka:DescribeConfigurationRevision');
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
    this.add('kafka:GetBootstrapBrokers');
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
    this.add('kafka:GetCompatibleKafkaVersions');
    return this;
  }

  /**
   * Returns a list of all the operations that have been performed on the specified MSK cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-operations.html#ListClusterOperations
   */
  public toListClusterOperations() {
    this.add('kafka:ListClusterOperations');
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
    this.add('kafka:ListClusters');
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
    this.add('kafka:ListConfigurations');
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
    this.add('kafka:ListNodes');
    return this;
  }

  /**
   * Grants permission to list tags of a MSK resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#ListTagsForResource
   */
  public toListTagsForResource() {
    this.add('kafka:ListTagsForResource');
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
    this.add('kafka:TagResource');
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
    this.add('kafka:UntagResource');
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
    this.add('kafka:UpdateBrokerCount');
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
    this.add('kafka:UpdateBrokerStorage');
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
    this.add('kafka:UpdateClusterConfiguration');
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
    this.add('kafka:UpdateClusterKafkaVersion');
    return this;
  }

  /**
   * Grants permission to create a new revision of the configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#updateconfiguration
   */
  public updateConfiguration() {
    this.add('kafka:UpdateConfiguration');
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
    this.add('kafka:UpdateMonitoring');
    return this;
  }

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

  /**
   * Filter requests based on the allowed set of values for each of the tags
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filter actions based on tag-value associated with a MSK resource.
   *
   * Applies to resource types:
   * - cluster
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filter requests based on the presence of mandatory tag keys in the request
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
