import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service kafka
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmanagedstreamingforkafka.html
 */
export class Kafka extends PolicyStatement {
  public servicePrefix = 'kafka';
  public actions: Actions = {
    "CreateCluster": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#CreateCluster",
      "description": "Grants permission to create a cluster.",
      "accessLevel": "Write",
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
    "UpdateMonitoring": {
      "url": "https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-monitoring.html#UpdateMonitoring",
      "description": "Updates the monitoring settings for the cluster.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {
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
   * Action provider for service kafka
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmanagedstreamingforkafka.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to create a cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#CreateCluster
   */
  public createCluster() {
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
  public createConfiguration() {
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
  public deleteCluster() {
    this.add('kafka:DeleteCluster');
    return this;
  }

  /**
   * Grants permission to describe a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html#DescribeCluster
   */
  public describeCluster() {
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
  public describeClusterOperation() {
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
  public describeConfiguration() {
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
  public describeConfigurationRevision() {
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
  public getBootstrapBrokers() {
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
  public getCompatibleKafkaVersions() {
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
  public listClusterOperations() {
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
  public listClusters() {
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
  public listConfigurations() {
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
  public listNodes() {
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
  public listTagsForResource() {
    this.add('kafka:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to tag a MSK resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#TagResource
   */
  public tagResource() {
    this.add('kafka:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from a MSK resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#UntagResource
   */
  public untagResource() {
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
  public updateBrokerCount() {
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
  public updateBrokerStorage() {
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
  public updateClusterConfiguration() {
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
  public updateClusterKafkaVersion() {
    this.add('kafka:UpdateClusterKafkaVersion');
    return this;
  }

  /**
   * Updates the monitoring settings for the cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-monitoring.html#UpdateMonitoring
   */
  public updateMonitoring() {
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
