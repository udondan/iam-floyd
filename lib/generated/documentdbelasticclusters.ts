import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [docdb-elastic](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondocumentdbelasticclusters.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class DocdbElastic extends PolicyStatement {
  public servicePrefix = 'docdb-elastic';

  /**
   * Statement provider for service [docdb-elastic](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondocumentdbelasticclusters.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new Amazon DocDB-Elastic cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:CreateVpcEndpoint
   * - ec2:DeleteVpcEndpoints
   * - ec2:DescribeAvailabilityZones
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcAttribute
   * - ec2:DescribeVpcEndpoints
   * - ec2:DescribeVpcs
   * - ec2:ModifyVpcEndpoint
   * - iam:CreateServiceLinkedRole
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   * - kms:GenerateDataKey
   * - secretsmanager:DescribeSecret
   * - secretsmanager:GetResourcePolicy
   * - secretsmanager:GetSecretValue
   * - secretsmanager:ListSecretVersionIds
   * - secretsmanager:ListSecrets
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/API_elastic_CreateCluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Grants permission to create a new Amazon DocDB-Elastic cluster snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - ec2:CreateVpcEndpoint
   * - ec2:DeleteVpcEndpoints
   * - ec2:DescribeAvailabilityZones
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcAttribute
   * - ec2:DescribeVpcEndpoints
   * - ec2:DescribeVpcs
   * - ec2:ModifyVpcEndpoint
   * - iam:CreateServiceLinkedRole
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   * - kms:GenerateDataKey
   * - secretsmanager:DescribeSecret
   * - secretsmanager:GetResourcePolicy
   * - secretsmanager:GetSecretValue
   * - secretsmanager:ListSecretVersionIds
   * - secretsmanager:ListSecrets
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/API_elastic_CreateClusterSnapshot.html
   */
  public toCreateClusterSnapshot() {
    return this.to('CreateClusterSnapshot');
  }

  /**
   * Grants permission to delete a cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - ec2:DeleteVpcEndpoints
   * - ec2:DescribeAvailabilityZones
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcAttribute
   * - ec2:DescribeVpcEndpoints
   * - ec2:DescribeVpcs
   * - ec2:ModifyVpcEndpoint
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/API_elastic_DeleteCluster.html
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * Grants permission to delete a cluster snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - ec2:DeleteVpcEndpoints
   * - ec2:DescribeAvailabilityZones
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcAttribute
   * - ec2:DescribeVpcEndpoints
   * - ec2:DescribeVpcs
   * - ec2:ModifyVpcEndpoint
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/API_elastic_DeleteClusterSnapshot.html
   */
  public toDeleteClusterSnapshot() {
    return this.to('DeleteClusterSnapshot');
  }

  /**
   * Grants permission to view details about a cluster
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/API_elastic_GetCluster.html
   */
  public toGetCluster() {
    return this.to('GetCluster');
  }

  /**
   * Grants permission to view details about a cluster snapshot
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/API_elastic_GetClusterSnapshot.html
   */
  public toGetClusterSnapshot() {
    return this.to('GetClusterSnapshot');
  }

  /**
   * Grants permission to list the cluster snapshots in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/API_elastic_ListClusterSnapshots.html
   */
  public toListClusterSnapshots() {
    return this.to('ListClusterSnapshots');
  }

  /**
   * Grants permission to list the clusters in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/API_elastic_ListClusters.html
   */
  public toListClusters() {
    return this.to('ListClusters');
  }

  /**
   * Grants permission to lists tag for an DocumentDB Elastic resource
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/API_elastic_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to restore cluster from a Amazon DocDB-Elastic cluster snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - ec2:CreateVpcEndpoint
   * - ec2:DeleteVpcEndpoints
   * - ec2:DescribeAvailabilityZones
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcAttribute
   * - ec2:DescribeVpcEndpoints
   * - ec2:DescribeVpcs
   * - ec2:ModifyVpcEndpoint
   * - iam:CreateServiceLinkedRole
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   * - kms:GenerateDataKey
   * - secretsmanager:DescribeSecret
   * - secretsmanager:GetResourcePolicy
   * - secretsmanager:GetSecretValue
   * - secretsmanager:ListSecretVersionIds
   * - secretsmanager:ListSecrets
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/API_elastic_RestoreClusterFromSnapshot.html
   */
  public toRestoreClusterFromSnapshot() {
    return this.to('RestoreClusterFromSnapshot');
  }

  /**
   * Grants permission to tag an DocumentDB Elastic resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/API_elastic_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a DocumentDB Elastic resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/API_elastic_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify a cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - ec2:CreateVpcEndpoint
   * - ec2:DeleteVpcEndpoints
   * - ec2:DescribeAvailabilityZones
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcAttribute
   * - ec2:DescribeVpcEndpoints
   * - ec2:DescribeVpcs
   * - ec2:ModifyVpcEndpoint
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   * - kms:GenerateDataKey
   * - secretsmanager:DescribeSecret
   * - secretsmanager:GetResourcePolicy
   * - secretsmanager:GetSecretValue
   * - secretsmanager:ListSecretVersionIds
   * - secretsmanager:ListSecrets
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/API_elastic_UpdateCluster.html
   */
  public toUpdateCluster() {
    return this.to('UpdateCluster');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateCluster',
      'CreateClusterSnapshot',
      'DeleteCluster',
      'DeleteClusterSnapshot',
      'RestoreClusterFromSnapshot',
      'UpdateCluster'
    ],
    Read: [
      'GetCluster',
      'GetClusterSnapshot'
    ],
    List: [
      'ListClusterSnapshots',
      'ListClusters',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/elastic-managing.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || DocdbElastic.defaultPartition }:docdb-elastic:${ region || '*' }:${ account || '*' }:cluster/${ resourceId }`);
  }

  /**
   * Adds a resource of type cluster-snapshot to the statement
   *
   * https://docs.aws.amazon.com/documentdb/latest/developerguide/elastic-managing.html#elastic-manage-snapshots
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onClusterSnapshot(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || DocdbElastic.defaultPartition }:docdb-elastic:${ region || '*' }:${ account || '*' }:cluster-snapshot/${ resourceId }`);
  }

  /**
   * Filters access by the set of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toCreateClusterSnapshot()
   * - .toRestoreClusterFromSnapshot()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the set of tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateClusterSnapshot()
   * - .toDeleteCluster()
   * - .toDeleteClusterSnapshot()
   * - .toGetCluster()
   * - .toGetClusterSnapshot()
   * - .toListTagsForResource()
   * - .toRestoreClusterFromSnapshot()
   * - .toTagResource()
   * - .toUpdateCluster()
   *
   * Applies to resource types:
   * - cluster
   * - cluster-snapshot
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the set of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toCreateClusterSnapshot()
   * - .toRestoreClusterFromSnapshot()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
