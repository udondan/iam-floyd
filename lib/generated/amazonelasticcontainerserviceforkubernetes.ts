import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service eks
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticcontainerserviceforkubernetes.html
 */
export class Eks extends PolicyStatement {
  public servicePrefix = 'eks';
  public actions: Actions = {
    "CreateCluster": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateCluster.html",
      "description": "Creates an Amazon EKS cluster.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateFargateProfile": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateFargateProfile.html",
      "description": "Creates an AWS Fargate profile.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateNodegroup": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateNodegroup.html",
      "description": "Creates an Amazon EKS Nodegroup.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteCluster": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteCluster.html",
      "description": "Deletes an Amazon EKS cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DeleteFargateProfile": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteFargateProfile.html",
      "description": "Deletes an AWS Fargate profile.",
      "accessLevel": "Write",
      "resourceTypes": {
        "fargateprofile": {
          "required": true
        }
      }
    },
    "DeleteNodegroup": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteNodegroup.html",
      "description": "Deletes an Amazon EKS Nodegroup.",
      "accessLevel": "Write",
      "resourceTypes": {
        "nodegroup": {
          "required": true
        }
      }
    },
    "DescribeCluster": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeCluster.html",
      "description": "Returns descriptive information about an Amazon EKS cluster.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DescribeFargateProfile": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeFargateProfile.html",
      "description": "Returns descriptive information about an AWS Fargate profile associated with a cluster.",
      "accessLevel": "Read",
      "resourceTypes": {
        "fargateprofile": {
          "required": true
        }
      }
    },
    "DescribeNodegroup": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeNodegroup.html",
      "description": "Returns descriptive information about an Amazon EKS nodegroup.",
      "accessLevel": "Read",
      "resourceTypes": {
        "nodegroup": {
          "required": true
        }
      }
    },
    "DescribeUpdate": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeUpdate.html",
      "description": "Describes a given update for a given Amazon EKS cluster/nodegroup (in the specified or default region).",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "nodegroup": {
          "required": false
        }
      }
    },
    "ListClusters": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_ListClusters.html",
      "description": "Lists the Amazon EKS clusters in your AWS account (in the specified or default region).",
      "accessLevel": "List"
    },
    "ListFargateProfiles": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_ListFargateProfiles.html",
      "description": "Lists the AWS Fargate profiles in your AWS account (in the specified or default region) associated with a given cluster.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ListNodegroups": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_ListNodegroups.html",
      "description": "Lists the Amazon EKS nodegroups in your AWS account (in the specified or default region) attached to given cluster.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_ListTagsForResource.html",
      "description": "List tags for the specified resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "fargateprofile": {
          "required": false
        },
        "nodegroup": {
          "required": false
        }
      }
    },
    "ListUpdates": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_ListUpdates.html",
      "description": "Lists the updates for a given Amazon EKS cluster/nodegroup (in the specified or default region).",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": true
        },
        "nodegroup": {
          "required": false
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_TagResource.html",
      "description": "Tags the specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "fargateprofile": {
          "required": false
        },
        "nodegroup": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_UntagResource.html",
      "description": "Untags the specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "fargateprofile": {
          "required": false
        },
        "nodegroup": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateClusterConfig": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterConfig.html",
      "description": "Update Amazon EKS cluster configurations (eg: API server endpoint access).",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "UpdateClusterVersion": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterVersion.html",
      "description": "Update the Kubernetes version of an Amazon EKS cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "UpdateNodegroupConfig": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateNodegroupConfig.html",
      "description": "Update Amazon EKS nodegroup configurations (eg: min/max/desired capacity or labels).",
      "accessLevel": "Write",
      "resourceTypes": {
        "nodegroup": {
          "required": true
        }
      }
    },
    "UpdateNodegroupVersion": {
      "url": "https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateNodegroupVersion.html",
      "description": "Update the Kubernetes version of an Amazon EKS nodegroup.",
      "accessLevel": "Write",
      "resourceTypes": {
        "nodegroup": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "cluster": {
      "name": "cluster",
      "url": "https://docs.aws.amazon.com/eks/latest/userguide/clusters.html",
      "arn": "arn:${Partition}:eks:${Region}:${Account}:cluster/${ClusterName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "nodegroup": {
      "name": "nodegroup",
      "url": "https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html",
      "arn": "arn:${Partition}:eks:${Region}:${Account}:nodegroup/${ClusterName}/${NodegroupName}/${UUID}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "fargateprofile": {
      "name": "fargateprofile",
      "url": "https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html",
      "arn": "arn:${Partition}:eks:${Region}:${Account}:fargateprofile/${ClusterName}/${FargateProfileName}/${UUID}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service eks
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticcontainerserviceforkubernetes.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Creates an Amazon EKS cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateCluster.html
   */
  public createCluster() {
    this.add('eks:CreateCluster');
    return this;
  }

  /**
   * Creates an AWS Fargate profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateFargateProfile.html
   */
  public createFargateProfile() {
    this.add('eks:CreateFargateProfile');
    return this;
  }

  /**
   * Creates an Amazon EKS Nodegroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateNodegroup.html
   */
  public createNodegroup() {
    this.add('eks:CreateNodegroup');
    return this;
  }

  /**
   * Deletes an Amazon EKS cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteCluster.html
   */
  public deleteCluster() {
    this.add('eks:DeleteCluster');
    return this;
  }

  /**
   * Deletes an AWS Fargate profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteFargateProfile.html
   */
  public deleteFargateProfile() {
    this.add('eks:DeleteFargateProfile');
    return this;
  }

  /**
   * Deletes an Amazon EKS Nodegroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteNodegroup.html
   */
  public deleteNodegroup() {
    this.add('eks:DeleteNodegroup');
    return this;
  }

  /**
   * Returns descriptive information about an Amazon EKS cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeCluster.html
   */
  public describeCluster() {
    this.add('eks:DescribeCluster');
    return this;
  }

  /**
   * Returns descriptive information about an AWS Fargate profile associated with a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeFargateProfile.html
   */
  public describeFargateProfile() {
    this.add('eks:DescribeFargateProfile');
    return this;
  }

  /**
   * Returns descriptive information about an Amazon EKS nodegroup.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeNodegroup.html
   */
  public describeNodegroup() {
    this.add('eks:DescribeNodegroup');
    return this;
  }

  /**
   * Describes a given update for a given Amazon EKS cluster/nodegroup (in the specified or default region).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeUpdate.html
   */
  public describeUpdate() {
    this.add('eks:DescribeUpdate');
    return this;
  }

  /**
   * Lists the Amazon EKS clusters in your AWS account (in the specified or default region).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListClusters.html
   */
  public listClusters() {
    this.add('eks:ListClusters');
    return this;
  }

  /**
   * Lists the AWS Fargate profiles in your AWS account (in the specified or default region) associated with a given cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListFargateProfiles.html
   */
  public listFargateProfiles() {
    this.add('eks:ListFargateProfiles');
    return this;
  }

  /**
   * Lists the Amazon EKS nodegroups in your AWS account (in the specified or default region) attached to given cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListNodegroups.html
   */
  public listNodegroups() {
    this.add('eks:ListNodegroups');
    return this;
  }

  /**
   * List tags for the specified resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('eks:ListTagsForResource');
    return this;
  }

  /**
   * Lists the updates for a given Amazon EKS cluster/nodegroup (in the specified or default region).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListUpdates.html
   */
  public listUpdates() {
    this.add('eks:ListUpdates');
    return this;
  }

  /**
   * Tags the specified resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('eks:TagResource');
    return this;
  }

  /**
   * Untags the specified resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('eks:UntagResource');
    return this;
  }

  /**
   * Update Amazon EKS cluster configurations (eg: API server endpoint access).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterConfig.html
   */
  public updateClusterConfig() {
    this.add('eks:UpdateClusterConfig');
    return this;
  }

  /**
   * Update the Kubernetes version of an Amazon EKS cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterVersion.html
   */
  public updateClusterVersion() {
    this.add('eks:UpdateClusterVersion');
    return this;
  }

  /**
   * Update Amazon EKS nodegroup configurations (eg: min/max/desired capacity or labels).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateNodegroupConfig.html
   */
  public updateNodegroupConfig() {
    this.add('eks:UpdateNodegroupConfig');
    return this;
  }

  /**
   * Update the Kubernetes version of an Amazon EKS nodegroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateNodegroupVersion.html
   */
  public updateNodegroupVersion() {
    this.add('eks:UpdateNodegroupVersion');
    return this;
  }

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/clusters.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onCluster(clusterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:eks:${Region}:${Account}:cluster/${ClusterName}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type nodegroup to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param nodegroupName - Identifier for the nodegroupName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onNodegroup(clusterName: string, nodegroupName: string, uUID: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:eks:${Region}:${Account}:nodegroup/${ClusterName}/${NodegroupName}/${UUID}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${NodegroupName}', nodegroupName);
    arn = arn.replace('${UUID}', uUID);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type fargateprofile to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param fargateProfileName - Identifier for the fargateProfileName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onFargateprofile(clusterName: string, fargateProfileName: string, uUID: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:eks:${Region}:${Account}:fargateprofile/${ClusterName}/${FargateProfileName}/${UUID}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${FargateProfileName}', fargateProfileName);
    arn = arn.replace('${UUID}', uUID);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
