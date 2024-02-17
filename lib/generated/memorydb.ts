import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [memorydb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmemorydb.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Memorydb extends PolicyStatement {
  public servicePrefix = 'memorydb';

  /**
   * Statement provider for service [memorydb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmemorydb.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to apply service updates
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
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_BatchUpdateCluster.html
   */
  public toBatchUpdateCluster() {
    return this.to('BatchUpdateCluster');
  }

  /**
   * Allows an IAM user or role to connect as a specified MemoryDB user to a node in a cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/devguide/auth-iam.html
   */
  public toConnect() {
    return this.to('Connect');
  }

  /**
   * Grants permissions to make a copy of an existing snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - memorydb:TagResource
   * - s3:DeleteObject
   * - s3:GetBucketAcl
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CopySnapshot.html
   */
  public toCopySnapshot() {
    return this.to('CopySnapshot');
  }

  /**
   * Grants permissions to create a new access control list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - memorydb:TagResource
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateAcl.html
   */
  public toCreateAcl() {
    return this.to('CreateAcl');
  }

  /**
   * Grants permissions to create a cluster
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
   * - ec2:DeleteNetworkInterface
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - memorydb:TagResource
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateCluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Grants permissions to create a new parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - memorydb:TagResource
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateParameterGroup.html
   */
  public toCreateParameterGroup() {
    return this.to('CreateParameterGroup');
  }

  /**
   * Grants permissions to create a backup of a cluster at the current point in time
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - memorydb:TagResource
   * - s3:DeleteObject
   * - s3:GetBucketAcl
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateSnapshot.html
   */
  public toCreateSnapshot() {
    return this.to('CreateSnapshot');
  }

  /**
   * Grants permissions to create a new subnet group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - memorydb:TagResource
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateSubnetGroup.html
   */
  public toCreateSubnetGroup() {
    return this.to('CreateSubnetGroup');
  }

  /**
   * Grants permissions to create a new user
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - memorydb:TagResource
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permissions to delete an access control list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteAcl.html
   */
  public toDeleteAcl() {
    return this.to('DeleteAcl');
  }

  /**
   * Grants permissions to delete a previously provisioned cluster
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
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteCluster.html
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * Grants permissions to delete a parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteParameterGroup.html
   */
  public toDeleteParameterGroup() {
    return this.to('DeleteParameterGroup');
  }

  /**
   * Grants permissions to delete a snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteSnapshot.html
   */
  public toDeleteSnapshot() {
    return this.to('DeleteSnapshot');
  }

  /**
   * Grants permissions to delete a subnet group
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
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteSubnetGroup.html
   */
  public toDeleteSubnetGroup() {
    return this.to('DeleteSubnetGroup');
  }

  /**
   * Grants permissions to delete a user
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permissions to retrieve information about access control lists
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeAcls.html
   */
  public toDescribeAcls() {
    return this.to('DescribeAcls');
  }

  /**
   * Grants permissions to retrieve information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster identifier is supplied
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeClusters.html
   */
  public toDescribeClusters() {
    return this.to('DescribeClusters');
  }

  /**
   * Grants permissions to list of the available engines and their versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeEngineVersions.html
   */
  public toDescribeEngineVersions() {
    return this.to('DescribeEngineVersions');
  }

  /**
   * Grants permissions to retrieve events related to clusters, subnet groups, and parameter groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    return this.to('DescribeEvents');
  }

  /**
   * Grants permissions to retrieve information about parameter groups
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeParameterGroups.html
   */
  public toDescribeParameterGroups() {
    return this.to('DescribeParameterGroups');
  }

  /**
   * Grants permissions to retrieve a detailed parameter list for a particular parameter group
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeParameters.html
   */
  public toDescribeParameters() {
    return this.to('DescribeParameters');
  }

  /**
   * Grants permissions to retrieve reserved nodes
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeReservedNodes.html
   */
  public toDescribeReservedNodes() {
    return this.to('DescribeReservedNodes');
  }

  /**
   * Grants permissions to retrieve reserved nodes offerings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeReservedNodesOfferings.html
   */
  public toDescribeReservedNodesOfferings() {
    return this.to('DescribeReservedNodesOfferings');
  }

  /**
   * Grants permissions to retrieve details of the service updates
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeServiceUpdates.html
   */
  public toDescribeServiceUpdates() {
    return this.to('DescribeServiceUpdates');
  }

  /**
   * Grants permissions to retrieve information about cluster snapshots
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeSnapshots.html
   */
  public toDescribeSnapshots() {
    return this.to('DescribeSnapshots');
  }

  /**
   * Grants permissions to retrieve a list of subnet group
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeSubnetGroups.html
   */
  public toDescribeSubnetGroups() {
    return this.to('DescribeSubnetGroups');
  }

  /**
   * Grants permissions to retrieve information about users
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeUsers.html
   */
  public toDescribeUsers() {
    return this.to('DescribeUsers');
  }

  /**
   * Grants permissions to test automatic failover on a specified shard in a cluster
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
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_FailoverShard.html
   */
  public toFailoverShard() {
    return this.to('FailoverShard');
  }

  /**
   * Grants permissions to list available node type updates
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_ListAllowedNodeTypeUpdates.html
   */
  public toListAllowedNodeTypeUpdates() {
    return this.to('ListAllowedNodeTypeUpdates');
  }

  /**
   * Grants permissions to list cost allocation tags
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Grants permissions to purchase a new reserved node
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - memorydb:TagResource
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_PurchaseReservedNodesOffering.html
   */
  public toPurchaseReservedNodesOffering() {
    return this.to('PurchaseReservedNodesOffering');
  }

  /**
   * Grants permissions to modify the parameters of a parameter group to the engine or system default value
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_ResetParameterGroup.html
   */
  public toResetParameterGroup() {
    return this.to('ResetParameterGroup');
  }

  /**
   * Grants permissions to add up to 10 cost allocation tags to the named resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permissions to remove the tags identified by the TagKeys list from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permissions to update an access control list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateAcl.html
   */
  public toUpdateAcl() {
    return this.to('UpdateAcl');
  }

  /**
   * Grants permissions to update the settings for a cluster
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
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateCluster.html
   */
  public toUpdateCluster() {
    return this.to('UpdateCluster');
  }

  /**
   * Grants permissions to update parameters in a parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateParameterGroup.html
   */
  public toUpdateParameterGroup() {
    return this.to('UpdateParameterGroup');
  }

  /**
   * Grants permissions to update a subnet group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateSubnetGroup.html
   */
  public toUpdateSubnetGroup() {
    return this.to('UpdateSubnetGroup');
  }

  /**
   * Grants permissions to update a user
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateUser.html
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchUpdateCluster',
      'Connect',
      'CopySnapshot',
      'CreateAcl',
      'CreateCluster',
      'CreateParameterGroup',
      'CreateSnapshot',
      'CreateSubnetGroup',
      'CreateUser',
      'DeleteAcl',
      'DeleteCluster',
      'DeleteParameterGroup',
      'DeleteSnapshot',
      'DeleteSubnetGroup',
      'DeleteUser',
      'FailoverShard',
      'PurchaseReservedNodesOffering',
      'ResetParameterGroup',
      'UpdateAcl',
      'UpdateCluster',
      'UpdateParameterGroup',
      'UpdateSubnetGroup',
      'UpdateUser'
    ],
    Read: [
      'DescribeAcls',
      'DescribeClusters',
      'DescribeEngineVersions',
      'DescribeEvents',
      'DescribeParameterGroups',
      'DescribeParameters',
      'DescribeReservedNodes',
      'DescribeReservedNodesOfferings',
      'DescribeServiceUpdates',
      'DescribeSnapshots',
      'DescribeSubnetGroups',
      'DescribeUsers',
      'ListAllowedNodeTypeUpdates',
      'ListTags'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type parametergroup to the statement
   *
   * https://docs.aws.amazon.com/memorydb/latest/devguide/WhatIs.Components.html
   *
   * @param parameterGroupName - Identifier for the parameterGroupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onParametergroup(parameterGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:memorydb:${ region || this.defaultRegion }:${ account || this.defaultAccount }:parametergroup/${ parameterGroupName }`);
  }

  /**
   * Adds a resource of type subnetgroup to the statement
   *
   * https://docs.aws.amazon.com/memorydb/latest/devguide/WhatIs.Components.html
   *
   * @param subnetGroupName - Identifier for the subnetGroupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSubnetgroup(subnetGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:memorydb:${ region || this.defaultRegion }:${ account || this.defaultAccount }:subnetgroup/${ subnetGroupName }`);
  }

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/memorydb/latest/devguide/WhatIs.Components.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(clusterName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:memorydb:${ region || this.defaultRegion }:${ account || this.defaultAccount }:cluster/${ clusterName }`);
  }

  /**
   * Adds a resource of type snapshot to the statement
   *
   * https://docs.aws.amazon.com/memorydb/latest/devguide/WhatIs.Components.html
   *
   * @param snapshotName - Identifier for the snapshotName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSnapshot(snapshotName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:memorydb:${ region || this.defaultRegion }:${ account || this.defaultAccount }:snapshot/${ snapshotName }`);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/memorydb/latest/devguide/WhatIs.Components.html
   *
   * @param userName - Identifier for the userName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUser(userName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:memorydb:${ region || this.defaultRegion }:${ account || this.defaultAccount }:user/${ userName }`);
  }

  /**
   * Adds a resource of type acl to the statement
   *
   * https://docs.aws.amazon.com/memorydb/latest/devguide/WhatIs.Components.html
   *
   * @param aclName - Identifier for the aclName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAcl(aclName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:memorydb:${ region || this.defaultRegion }:${ account || this.defaultAccount }:acl/${ aclName }`);
  }

  /**
   * Adds a resource of type reservednode to the statement
   *
   * https://docs.aws.amazon.com/memorydb/latest/devguide/WhatIs.Components.html
   *
   * @param reservationID - Identifier for the reservationID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReservednode(reservationID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:memorydb:${ region || this.defaultRegion }:${ account || this.defaultAccount }:reservednode/${ reservationID }`);
  }

  /**
   * Filters actions based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCopySnapshot()
   * - .toCreateAcl()
   * - .toCreateCluster()
   * - .toCreateParameterGroup()
   * - .toCreateSnapshot()
   * - .toCreateSubnetGroup()
   * - .toCreateUser()
   * - .toPurchaseReservedNodesOffering()
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
   * Filters actions based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toBatchUpdateCluster()
   * - .toConnect()
   * - .toCopySnapshot()
   * - .toCreateAcl()
   * - .toCreateCluster()
   * - .toCreateSnapshot()
   * - .toDeleteAcl()
   * - .toDeleteCluster()
   * - .toDeleteParameterGroup()
   * - .toDeleteSnapshot()
   * - .toDeleteSubnetGroup()
   * - .toDeleteUser()
   * - .toDescribeAcls()
   * - .toDescribeClusters()
   * - .toDescribeParameterGroups()
   * - .toDescribeParameters()
   * - .toDescribeReservedNodes()
   * - .toDescribeSnapshots()
   * - .toDescribeSubnetGroups()
   * - .toDescribeUsers()
   * - .toFailoverShard()
   * - .toListAllowedNodeTypeUpdates()
   * - .toListTags()
   * - .toPurchaseReservedNodesOffering()
   * - .toResetParameterGroup()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateAcl()
   * - .toUpdateCluster()
   * - .toUpdateParameterGroup()
   * - .toUpdateSubnetGroup()
   * - .toUpdateUser()
   *
   * Applies to resource types:
   * - parametergroup
   * - subnetgroup
   * - cluster
   * - snapshot
   * - user
   * - acl
   * - reservednode
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCopySnapshot()
   * - .toCreateAcl()
   * - .toCreateCluster()
   * - .toCreateParameterGroup()
   * - .toCreateSnapshot()
   * - .toCreateSubnetGroup()
   * - .toCreateUser()
   * - .toPurchaseReservedNodesOffering()
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
