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
    this.to('dax:BatchGetItem');
    return this;
  }

  /**
   * The BatchWriteItem action operation puts or deletes multiple items in one or more tables.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
   */
  public toBatchWriteItem() {
    this.to('dax:BatchWriteItem');
    return this;
  }

  /**
   * The ConditionCheckItem operation checks the existence of a set of attributes for the item with the given primary key
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ConditionCheckItem.html
   */
  public toConditionCheckItem() {
    this.to('dax:ConditionCheckItem');
    return this;
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
    this.to('dax:CreateCluster');
    return this;
  }

  /**
   * The CreateParameterGroup action creates collection of parameters that you apply to all of the nodes in a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateParameterGroup.html
   */
  public toCreateParameterGroup() {
    this.to('dax:CreateParameterGroup');
    return this;
  }

  /**
   * The CreateSubnetGroup action creates a new subnet group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateSubnetGroup.html
   */
  public toCreateSubnetGroup() {
    this.to('dax:CreateSubnetGroup');
    return this;
  }

  /**
   * The DecreaseReplicationFactor action removes one or more nodes from a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DecreaseReplicationFactor.html
   */
  public toDecreaseReplicationFactor() {
    this.to('dax:DecreaseReplicationFactor');
    return this;
  }

  /**
   * The DeleteCluster action deletes a previously provisioned DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteCluster.html
   */
  public toDeleteCluster() {
    this.to('dax:DeleteCluster');
    return this;
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
    this.to('dax:DeleteItem');
    return this;
  }

  /**
   * The DeleteParameterGroup action deletes the specified parameter group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteParameterGroup.html
   */
  public toDeleteParameterGroup() {
    this.to('dax:DeleteParameterGroup');
    return this;
  }

  /**
   * The DeleteSubnetGroup action deletes a subnet group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteSubnetGroup.html
   */
  public toDeleteSubnetGroup() {
    this.to('dax:DeleteSubnetGroup');
    return this;
  }

  /**
   * The DescribeClusters action returns information about all provisioned DAX clusters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeClusters.html
   */
  public toDescribeClusters() {
    this.to('dax:DescribeClusters');
    return this;
  }

  /**
   * The DescribeDefaultParameters action returns the default system parameter information for DAX.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeDefaultParameters.html
   */
  public toDescribeDefaultParameters() {
    this.to('dax:DescribeDefaultParameters');
    return this;
  }

  /**
   * The DescribeEvents action returns events related to DAX clusters and parameter groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeEvents.html
   */
  public toDescribeEvents() {
    this.to('dax:DescribeEvents');
    return this;
  }

  /**
   * The DescribeParameterGroups action returns a list of parameter group descriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeParameterGroups.html
   */
  public toDescribeParameterGroups() {
    this.to('dax:DescribeParameterGroups');
    return this;
  }

  /**
   * The DescribeParameters action returns the detailed parameter list for a particular parameter group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeParameters.html
   */
  public toDescribeParameters() {
    this.to('dax:DescribeParameters');
    return this;
  }

  /**
   * The DescribeSubnetGroups action returns a list of subnet group descriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeSubnetGroups.html
   */
  public toDescribeSubnetGroups() {
    this.to('dax:DescribeSubnetGroups');
    return this;
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
    this.to('dax:GetItem');
    return this;
  }

  /**
   * The IncreaseReplicationFactor action adds one or more nodes to a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_IncreaseReplicationFactor.html
   */
  public toIncreaseReplicationFactor() {
    this.to('dax:IncreaseReplicationFactor');
    return this;
  }

  /**
   * The ListTags action returns a list all of the tags for a DAX cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_ListTags.html
   */
  public toListTags() {
    this.to('dax:ListTags');
    return this;
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
    this.to('dax:PutItem');
    return this;
  }

  /**
   * The Query action finds items based on primary key values. You can query any table or secondary index that has a composite primary key (a partition key and a sort key).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html
   */
  public toQuery() {
    this.to('dax:Query');
    return this;
  }

  /**
   * The RebootNode action reboots a single node of a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_RebootNode.html
   */
  public toRebootNode() {
    this.to('dax:RebootNode');
    return this;
  }

  /**
   * The Scan action returns one or more items and item attributes by accessing every item in a table or a secondary index.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html
   */
  public toScan() {
    this.to('dax:Scan');
    return this;
  }

  /**
   * The TagResource action associates a set of tags with a DAX resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_TagResource.html
   */
  public toTagResource() {
    this.to('dax:TagResource');
    return this;
  }

  /**
   * The UntagResource action removes the association of tags from a DAX resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UntagResource.html
   */
  public toUntagResource() {
    this.to('dax:UntagResource');
    return this;
  }

  /**
   * The UpdateCluster action modifies the settings for a DAX cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateCluster.html
   */
  public toUpdateCluster() {
    this.to('dax:UpdateCluster');
    return this;
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
    this.to('dax:UpdateItem');
    return this;
  }

  /**
   * The UpdateParameterGroup action modifies the parameters of a parameter group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateParameterGroup.html
   */
  public toUpdateParameterGroup() {
    this.to('dax:UpdateParameterGroup');
    return this;
  }

  /**
   * The UpdateSubnetGroup action modifies an existing subnet group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateSubnetGroup.html
   */
  public toUpdateSubnetGroup() {
    this.to('dax:UpdateSubnetGroup');
    return this;
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
    var arn = 'arn:${Partition}:dax:${Region}:${Account}:cache/${ClusterName}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    return this.if(`dax:EnclosingOperation`, value, operator || 'StringLike');
  }
}

export type DaxActionsRead = 'BatchGetItem' | 'ConditionCheckItem' | 'DescribeParameters' | 'GetItem' | 'ListTags' | 'Query' | 'Scan';
export type DaxActionsWrite = 'BatchWriteItem' | 'CreateCluster' | 'CreateParameterGroup' | 'CreateSubnetGroup' | 'DecreaseReplicationFactor' | 'DeleteCluster' | 'DeleteItem' | 'DeleteParameterGroup' | 'DeleteSubnetGroup' | 'IncreaseReplicationFactor' | 'PutItem' | 'RebootNode' | 'UpdateCluster' | 'UpdateItem' | 'UpdateParameterGroup' | 'UpdateSubnetGroup';
export type DaxActionsList = 'DescribeClusters' | 'DescribeDefaultParameters' | 'DescribeEvents' | 'DescribeParameterGroups' | 'DescribeSubnetGroups';
export type DaxActionsTagging = 'TagResource' | 'UntagResource';
export type DaxActions = DaxActionsRead | DaxActionsWrite | DaxActionsList | DaxActionsTagging;
