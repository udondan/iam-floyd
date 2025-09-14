import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [pcs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsparallelcomputingservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Pcs extends PolicyStatement {
  public servicePrefix = 'pcs';

  /**
   * Statement provider for service [pcs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsparallelcomputingservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to configure vended log delivery for AWS PCS cluster logs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pcs/latest/userguide/monitoring_scheduler-logs.html
   */
  public toAllowVendedLogDeliveryForResource() {
    return this.to('AllowVendedLogDeliveryForResource');
  }

  /**
   * Grants permission to create clusters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:CreateNetworkInterfacePermission
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - ec2:GetSecurityGroupsForVpc
   * - iam:CreateServiceLinkedRole
   * - secretsmanager:CreateSecret
   * - secretsmanager:TagResource
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_CreateCluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Grants permission to create compute node groups
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:CreateFleet
   * - ec2:CreateLaunchTemplate
   * - ec2:CreateLaunchTemplateVersion
   * - ec2:CreateTags
   * - ec2:DescribeImages
   * - ec2:DescribeInstanceStatus
   * - ec2:DescribeInstanceTypes
   * - ec2:DescribeInstances
   * - ec2:DescribeLaunchTemplateVersions
   * - ec2:DescribeLaunchTemplates
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - ec2:RunInstances
   * - iam:GetInstanceProfile
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_CreateComputeNodeGroup.html
   */
  public toCreateComputeNodeGroup() {
    return this.to('CreateComputeNodeGroup');
  }

  /**
   * Grants permission to create queues
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_CreateQueue.html
   */
  public toCreateQueue() {
    return this.to('CreateQueue');
  }

  /**
   * Grants permission to delete clusters
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DeleteNetworkInterface
   * - secretsmanager:DeleteSecret
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_DeleteCluster.html
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * Grants permission to delete compute node groups
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DeleteLaunchTemplate
   * - ec2:TerminateInstances
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_DeleteComputeNodeGroup.html
   */
  public toDeleteComputeNodeGroup() {
    return this.to('DeleteComputeNodeGroup');
  }

  /**
   * Grants permission to delete queues
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_DeleteQueue.html
   */
  public toDeleteQueue() {
    return this.to('DeleteQueue');
  }

  /**
   * Grants permission to get cluster properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_GetCluster.html
   */
  public toGetCluster() {
    return this.to('GetCluster');
  }

  /**
   * Grants permission to get compute node group properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_GetComputeNodeGroup.html
   */
  public toGetComputeNodeGroup() {
    return this.to('GetComputeNodeGroup');
  }

  /**
   * Grants permission to get queue properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_GetQueue.html
   */
  public toGetQueue() {
    return this.to('GetQueue');
  }

  /**
   * Grants permission to list clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_ListClusters.html
   */
  public toListClusters() {
    return this.to('ListClusters');
  }

  /**
   * Grants permission to list compute node groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_ListComputeNodeGroups.html
   */
  public toListComputeNodeGroups() {
    return this.to('ListComputeNodeGroups');
  }

  /**
   * Grants permission to list queues
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_ListQueues.html
   */
  public toListQueues() {
    return this.to('ListQueues');
  }

  /**
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to register a compute instance in a compute node group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - secretsmanager:GetSecretValue
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_RegisterComputeNodeGroupInstance.html
   */
  public toRegisterComputeNodeGroupInstance() {
    return this.to('RegisterComputeNodeGroupInstance');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update compute node group properties
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateFleet
   * - ec2:CreateLaunchTemplate
   * - ec2:CreateLaunchTemplateVersion
   * - ec2:CreateTags
   * - ec2:DescribeImages
   * - ec2:DescribeInstanceStatus
   * - ec2:DescribeInstanceTypes
   * - ec2:DescribeInstances
   * - ec2:DescribeLaunchTemplateVersions
   * - ec2:DescribeLaunchTemplates
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - ec2:RunInstances
   * - iam:GetInstanceProfile
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_UpdateComputeNodeGroup.html
   */
  public toUpdateComputeNodeGroup() {
    return this.to('UpdateComputeNodeGroup');
  }

  /**
   * Grants permission to update queue properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_UpdateQueue.html
   */
  public toUpdateQueue() {
    return this.to('UpdateQueue');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AllowVendedLogDeliveryForResource',
      'CreateCluster',
      'CreateComputeNodeGroup',
      'CreateQueue',
      'DeleteCluster',
      'DeleteComputeNodeGroup',
      'DeleteQueue',
      'RegisterComputeNodeGroupInstance',
      'UpdateComputeNodeGroup',
      'UpdateQueue'
    ],
    Read: [
      'GetCluster',
      'GetComputeNodeGroup',
      'GetQueue',
      'ListTagsForResource'
    ],
    List: [
      'ListClusters',
      'ListComputeNodeGroups',
      'ListQueues'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_Cluster.html
   *
   * @param clusterIdentifier - Identifier for the clusterIdentifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(clusterIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:pcs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cluster/${ clusterIdentifier }`);
  }

  /**
   * Adds a resource of type computenodegroup to the statement
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_ComputeNodeGroup.html
   *
   * @param clusterIdentifier - Identifier for the clusterIdentifier.
   * @param computeNodeGroupIdentifier - Identifier for the computeNodeGroupIdentifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComputenodegroup(clusterIdentifier: string, computeNodeGroupIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:pcs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cluster/${ clusterIdentifier }/computenodegroup/${ computeNodeGroupIdentifier }`);
  }

  /**
   * Adds a resource of type queue to the statement
   *
   * https://docs.aws.amazon.com/pcs/latest/APIReference/API_Queue.html
   *
   * @param clusterIdentifier - Identifier for the clusterIdentifier.
   * @param queueIdentifier - Identifier for the queueIdentifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQueue(clusterIdentifier: string, queueIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:pcs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cluster/${ clusterIdentifier }/queue/${ queueIdentifier }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toCreateComputeNodeGroup()
   * - .toCreateQueue()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toCreateComputeNodeGroup()
   * - .toCreateQueue()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - cluster
   * - computenodegroup
   * - queue
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toCreateComputeNodeGroup()
   * - .toCreateQueue()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
