import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [dax](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodbacceleratordax.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dax extends PolicyStatement {
  public servicePrefix = 'dax';

  /**
   * Statement provider for service [dax](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodbacceleratordax.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * The BatchGetItem action returns the attributes of one or more items from one or more tables.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html
   */
  public toBatchGetItem() {
    return this.to('BatchGetItem');
  }

  /**
   * The BatchWriteItem action operation puts or deletes multiple items in one or more tables.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
   */
  public toBatchWriteItem() {
    return this.to('BatchWriteItem');
  }

  /**
   * The ConditionCheckItem operation checks the existence of a set of attributes for the item with the given primary key
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ConditionCheckItem.html
   */
  public toConditionCheckItem() {
    return this.to('ConditionCheckItem');
  }

  /**
   * The CreateCluster action creates a DAX cluster.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - dax:CreateParameterGroup
   * - dax:CreateSubnetGroup
   * - ec2:CreateNetworkInterface
   * - ec2:DeleteNetworkInterface
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - iam:GetRole
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateCluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * The CreateParameterGroup action creates collection of parameters that you apply to all of the nodes in a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateParameterGroup.html
   */
  public toCreateParameterGroup() {
    return this.to('CreateParameterGroup');
  }

  /**
   * The CreateSubnetGroup action creates a new subnet group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateSubnetGroup.html
   */
  public toCreateSubnetGroup() {
    return this.to('CreateSubnetGroup');
  }

  /**
   * The DecreaseReplicationFactor action removes one or more nodes from a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DecreaseReplicationFactor.html
   */
  public toDecreaseReplicationFactor() {
    return this.to('DecreaseReplicationFactor');
  }

  /**
   * The DeleteCluster action deletes a previously provisioned DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteCluster.html
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * The DeleteItem action deletes a single item in a table by primary key.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEnclosingOperation()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html
   */
  public toDeleteItem() {
    return this.to('DeleteItem');
  }

  /**
   * The DeleteParameterGroup action deletes the specified parameter group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteParameterGroup.html
   */
  public toDeleteParameterGroup() {
    return this.to('DeleteParameterGroup');
  }

  /**
   * The DeleteSubnetGroup action deletes a subnet group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteSubnetGroup.html
   */
  public toDeleteSubnetGroup() {
    return this.to('DeleteSubnetGroup');
  }

  /**
   * The DescribeClusters action returns information about all provisioned DAX clusters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeClusters.html
   */
  public toDescribeClusters() {
    return this.to('DescribeClusters');
  }

  /**
   * The DescribeDefaultParameters action returns the default system parameter information for DAX.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeDefaultParameters.html
   */
  public toDescribeDefaultParameters() {
    return this.to('DescribeDefaultParameters');
  }

  /**
   * The DescribeEvents action returns events related to DAX clusters and parameter groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeEvents.html
   */
  public toDescribeEvents() {
    return this.to('DescribeEvents');
  }

  /**
   * The DescribeParameterGroups action returns a list of parameter group descriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeParameterGroups.html
   */
  public toDescribeParameterGroups() {
    return this.to('DescribeParameterGroups');
  }

  /**
   * The DescribeParameters action returns the detailed parameter list for a particular parameter group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeParameters.html
   */
  public toDescribeParameters() {
    return this.to('DescribeParameters');
  }

  /**
   * The DescribeSubnetGroups action returns a list of subnet group descriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeSubnetGroups.html
   */
  public toDescribeSubnetGroups() {
    return this.to('DescribeSubnetGroups');
  }

  /**
   * The GetItem action returns a set of attributes for the item with the given primary key.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifEnclosingOperation()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html
   */
  public toGetItem() {
    return this.to('GetItem');
  }

  /**
   * The IncreaseReplicationFactor action adds one or more nodes to a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_IncreaseReplicationFactor.html
   */
  public toIncreaseReplicationFactor() {
    return this.to('IncreaseReplicationFactor');
  }

  /**
   * The ListTags action returns a list all of the tags for a DAX cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * The PutItem action creates a new item, or replaces an old item with a new item.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEnclosingOperation()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html
   */
  public toPutItem() {
    return this.to('PutItem');
  }

  /**
   * The Query action finds items based on primary key values. You can query any table or secondary index that has a composite primary key (a partition key and a sort key).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html
   */
  public toQuery() {
    return this.to('Query');
  }

  /**
   * The RebootNode action reboots a single node of a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_RebootNode.html
   */
  public toRebootNode() {
    return this.to('RebootNode');
  }

  /**
   * The Scan action returns one or more items and item attributes by accessing every item in a table or a secondary index.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html
   */
  public toScan() {
    return this.to('Scan');
  }

  /**
   * The TagResource action associates a set of tags with a DAX resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * The UntagResource action removes the association of tags from a DAX resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * The UpdateCluster action modifies the settings for a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateCluster.html
   */
  public toUpdateCluster() {
    return this.to('UpdateCluster');
  }

  /**
   * The UpdateItem action edits an existing item's attributes, or adds a new item to the table if it does not already exist.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEnclosingOperation()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html
   */
  public toUpdateItem() {
    return this.to('UpdateItem');
  }

  /**
   * The UpdateParameterGroup action modifies the parameters of a parameter group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateParameterGroup.html
   */
  public toUpdateParameterGroup() {
    return this.to('UpdateParameterGroup');
  }

  /**
   * The UpdateSubnetGroup action modifies an existing subnet group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateSubnetGroup.html
   */
  public toUpdateSubnetGroup() {
    return this.to('UpdateSubnetGroup');
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "BatchGetItem",
      "ConditionCheckItem",
      "DescribeParameters",
      "GetItem",
      "ListTags",
      "Query",
      "Scan"
    ],
    "Write": [
      "BatchWriteItem",
      "CreateCluster",
      "CreateParameterGroup",
      "CreateSubnetGroup",
      "DecreaseReplicationFactor",
      "DeleteCluster",
      "DeleteItem",
      "DeleteParameterGroup",
      "DeleteSubnetGroup",
      "IncreaseReplicationFactor",
      "PutItem",
      "RebootNode",
      "UpdateCluster",
      "UpdateItem",
      "UpdateParameterGroup",
      "UpdateSubnetGroup"
    ],
    "List": [
      "DescribeClusters",
      "DescribeDefaultParameters",
      "DescribeEvents",
      "DescribeParameterGroups",
      "DescribeSubnetGroups"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.access-control.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onApplication(clusterName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:dax:${ region || '*' }:${ account || '*' }:cache/${ clusterName }`);
  }

  /**
   * Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa.
   *
   * Applies to actions:
   * - .toDeleteItem()
   * - .toGetItem()
   * - .toPutItem()
   * - .toUpdateItem()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnclosingOperation(value: string | string[], operator?: Operator | string) {
    return this.if(`EnclosingOperation`, value, operator || 'StringLike');
  }
}
