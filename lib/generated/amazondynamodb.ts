import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [dynamodb](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodb.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dynamodb extends PolicyStatement {
  public servicePrefix = 'dynamodb';

  /**
   * Statement provider for service [dynamodb](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodb.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Returns the attributes of one or more items from one or more tables
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAttributes()
   * - .ifLeadingKeys()
   * - .ifReturnConsumedCapacity()
   * - .ifSelect()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html
   */
  public toBatchGetItem() {
    this.to('dynamodb:BatchGetItem');
    return this;
  }

  /**
   * Puts or deletes multiple items in one or more tables
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAttributes()
   * - .ifLeadingKeys()
   * - .ifReturnConsumedCapacity()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
   */
  public toBatchWriteItem() {
    this.to('dynamodb:BatchWriteItem');
    return this;
  }

  /**
   * The ConditionCheckItem operation checks the existence of a set of attributes for the item with the given primary key
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAttributes()
   * - .ifLeadingKeys()
   * - .ifReturnConsumedCapacity()
   * - .ifReturnValues()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ConditionCheckItem.html
   */
  public toConditionCheckItem() {
    this.to('dynamodb:ConditionCheckItem');
    return this;
  }

  /**
   * Creates a backup for an existing table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html
   */
  public toCreateBackup() {
    this.to('dynamodb:CreateBackup');
    return this;
  }

  /**
   * Enables the user to create a global table from an existing table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html
   */
  public toCreateGlobalTable() {
    this.to('dynamodb:CreateGlobalTable');
    return this;
  }

  /**
   * The CreateTable operation adds a new table to your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html
   */
  public toCreateTable() {
    this.to('dynamodb:CreateTable');
    return this;
  }

  /**
   * Adds a new replica table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/V2gt_IAM.html
   */
  public toCreateTableReplica() {
    this.to('dynamodb:CreateTableReplica');
    return this;
  }

  /**
   * Deletes an existing backup of a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html
   */
  public toDeleteBackup() {
    this.to('dynamodb:DeleteBackup');
    return this;
  }

  /**
   * Deletes a single item in a table by primary key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAttributes()
   * - .ifEnclosingOperation()
   * - .ifLeadingKeys()
   * - .ifReturnConsumedCapacity()
   * - .ifReturnValues()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html
   */
  public toDeleteItem() {
    this.to('dynamodb:DeleteItem');
    return this;
  }

  /**
   * The DeleteTable operation deletes a table and all of its items
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html
   */
  public toDeleteTable() {
    this.to('dynamodb:DeleteTable');
    return this;
  }

  /**
   * Deletes a replica table and all of its items
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/V2gt_IAM.html
   */
  public toDeleteTableReplica() {
    this.to('dynamodb:DeleteTableReplica');
    return this;
  }

  /**
   * Describes an existing backup of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html
   */
  public toDescribeBackup() {
    this.to('dynamodb:DescribeBackup');
    return this;
  }

  /**
   * Checks the status of the backup restore settings on the specified table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html
   */
  public toDescribeContinuousBackups() {
    this.to('dynamodb:DescribeContinuousBackups');
    return this;
  }

  /**
   * Describes the contributor insights status and related details for a given table or global secondary index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html
   */
  public toDescribeContributorInsights() {
    this.to('dynamodb:DescribeContributorInsights');
    return this;
  }

  /**
   * Returns information about the specified global table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html
   */
  public toDescribeGlobalTable() {
    this.to('dynamodb:DescribeGlobalTable');
    return this;
  }

  /**
   * Returns settings information about the specified global table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html
   */
  public toDescribeGlobalTableSettings() {
    this.to('dynamodb:DescribeGlobalTableSettings');
    return this;
  }

  /**
   * Returns the current provisioned-capacity limits for your AWS account in a region, both for the region as a whole and for any one DynamoDB table that you create there
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html
   */
  public toDescribeLimits() {
    this.to('dynamodb:DescribeLimits');
    return this;
  }

  /**
   * Describes one or more of the Reserved Capacity purchased
   *
   * Access Level: Read
   */
  public toDescribeReservedCapacity() {
    this.to('dynamodb:DescribeReservedCapacity');
    return this;
  }

  /**
   * Describes Reserved Capacity offerings that are available for purchase
   *
   * Access Level: Read
   */
  public toDescribeReservedCapacityOfferings() {
    this.to('dynamodb:DescribeReservedCapacityOfferings');
    return this;
  }

  /**
   * Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeStream.html
   */
  public toDescribeStream() {
    this.to('dynamodb:DescribeStream');
    return this;
  }

  /**
   * Returns information about the table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html
   */
  public toDescribeTable() {
    this.to('dynamodb:DescribeTable');
    return this;
  }

  /**
   * Describes the auto scaling settings across all replicas of the global table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html
   */
  public toDescribeTableReplicaAutoScaling() {
    this.to('dynamodb:DescribeTableReplicaAutoScaling');
    return this;
  }

  /**
   * Gives a description of the Time to Live (TTL) status on the specified table.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html
   */
  public toDescribeTimeToLive() {
    this.to('dynamodb:DescribeTimeToLive');
    return this;
  }

  /**
   * The GetItem operation returns a set of attributes for the item with the given primary key
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAttributes()
   * - .ifEnclosingOperation()
   * - .ifLeadingKeys()
   * - .ifReturnConsumedCapacity()
   * - .ifSelect()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html
   */
  public toGetItem() {
    this.to('dynamodb:GetItem');
    return this;
  }

  /**
   * Retrieves the stream records from a given shard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetRecords.html
   */
  public toGetRecords() {
    this.to('dynamodb:GetRecords');
    return this;
  }

  /**
   * Returns a shard iterator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetShardIterator.html
   */
  public toGetShardIterator() {
    this.to('dynamodb:GetShardIterator');
    return this;
  }

  /**
   * List backups associated with the account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html
   */
  public toListBackups() {
    this.to('dynamodb:ListBackups');
    return this;
  }

  /**
   * Lists the ContributorInsightsSummary for all tables and global secondary indexes associated with the current account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html
   */
  public toListContributorInsights() {
    this.to('dynamodb:ListContributorInsights');
    return this;
  }

  /**
   * Lists all global tables that have a replica in the specified region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html
   */
  public toListGlobalTables() {
    this.to('dynamodb:ListGlobalTables');
    return this;
  }

  /**
   * Returns an array of stream ARNs associated with the current account and endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListStreams.html
   */
  public toListStreams() {
    this.to('dynamodb:ListStreams');
    return this;
  }

  /**
   * Returns an array of table names associated with the current account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html
   */
  public toListTables() {
    this.to('dynamodb:ListTables');
    return this;
  }

  /**
   * List all tags on an Amazon DynamoDB resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html
   */
  public toListTagsOfResource() {
    this.to('dynamodb:ListTagsOfResource');
    return this;
  }

  /**
   * Purchases Reserved Capacity for use with your account
   *
   * Access Level: Write
   */
  public toPurchaseReservedCapacityOfferings() {
    this.to('dynamodb:PurchaseReservedCapacityOfferings');
    return this;
  }

  /**
   * Creates a new item, or replaces an old item with a new item
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAttributes()
   * - .ifEnclosingOperation()
   * - .ifLeadingKeys()
   * - .ifReturnConsumedCapacity()
   * - .ifReturnValues()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html
   */
  public toPutItem() {
    this.to('dynamodb:PutItem');
    return this;
  }

  /**
   * Uses the primary key of a table or a secondary index to directly access items from that table or index
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAttributes()
   * - .ifLeadingKeys()
   * - .ifReturnConsumedCapacity()
   * - .ifReturnValues()
   * - .ifSelect()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html
   */
  public toQuery() {
    this.to('dynamodb:Query');
    return this;
  }

  /**
   * Creates a new table from an existing backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html
   */
  public toRestoreTableFromBackup() {
    this.to('dynamodb:RestoreTableFromBackup');
    return this;
  }

  /**
   * Restores a table to a point in time
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html
   */
  public toRestoreTableToPointInTime() {
    this.to('dynamodb:RestoreTableToPointInTime');
    return this;
  }

  /**
   * Returns one or more items and item attributes by accessing every item in a table or a secondary index
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAttributes()
   * - .ifReturnConsumedCapacity()
   * - .ifReturnValues()
   * - .ifSelect()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html
   */
  public toScan() {
    this.to('dynamodb:Scan');
    return this;
  }

  /**
   * Associate a set of tags with an Amazon DynamoDB resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('dynamodb:TagResource');
    return this;
  }

  /**
   * Removes the association of tags from an Amazon DynamoDB resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('dynamodb:UntagResource');
    return this;
  }

  /**
   * Enables or disables continuous backups
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html
   */
  public toUpdateContinuousBackups() {
    this.to('dynamodb:UpdateContinuousBackups');
    return this;
  }

  /**
   * Updates the status for contributor insights for a specific table or global secondary index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html
   */
  public toUpdateContributorInsights() {
    this.to('dynamodb:UpdateContributorInsights');
    return this;
  }

  /**
   * Enables the user to add or remove replicas in the specified global table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html
   */
  public toUpdateGlobalTable() {
    this.to('dynamodb:UpdateGlobalTable');
    return this;
  }

  /**
   * Enables the user to update settings of the specified global table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html
   */
  public toUpdateGlobalTableSettings() {
    this.to('dynamodb:UpdateGlobalTableSettings');
    return this;
  }

  /**
   * Edits an existing item's attributes, or adds a new item to the table if it does not already exist
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAttributes()
   * - .ifEnclosingOperation()
   * - .ifLeadingKeys()
   * - .ifReturnConsumedCapacity()
   * - .ifReturnValues()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html
   */
  public toUpdateItem() {
    this.to('dynamodb:UpdateItem');
    return this;
  }

  /**
   * Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html
   */
  public toUpdateTable() {
    this.to('dynamodb:UpdateTable');
    return this;
  }

  /**
   * Updates auto scaling settings on your replica table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html
   */
  public toUpdateTableReplicaAutoScaling() {
    this.to('dynamodb:UpdateTableReplicaAutoScaling');
    return this;
  }

  /**
   * Enables or disables TTL for the specified table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html
   */
  public toUpdateTimeToLive() {
    this.to('dynamodb:UpdateTimeToLive');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "BatchGetItem",
      "ConditionCheckItem",
      "DescribeBackup",
      "DescribeContinuousBackups",
      "DescribeContributorInsights",
      "DescribeGlobalTable",
      "DescribeGlobalTableSettings",
      "DescribeLimits",
      "DescribeReservedCapacity",
      "DescribeReservedCapacityOfferings",
      "DescribeStream",
      "DescribeTable",
      "DescribeTableReplicaAutoScaling",
      "DescribeTimeToLive",
      "GetItem",
      "GetRecords",
      "GetShardIterator",
      "ListStreams",
      "ListTagsOfResource",
      "Query",
      "Scan"
    ],
    "Write": [
      "BatchWriteItem",
      "CreateBackup",
      "CreateGlobalTable",
      "CreateTable",
      "CreateTableReplica",
      "DeleteBackup",
      "DeleteItem",
      "DeleteTable",
      "DeleteTableReplica",
      "PurchaseReservedCapacityOfferings",
      "PutItem",
      "RestoreTableFromBackup",
      "RestoreTableToPointInTime",
      "UpdateContinuousBackups",
      "UpdateContributorInsights",
      "UpdateGlobalTable",
      "UpdateGlobalTableSettings",
      "UpdateItem",
      "UpdateTable",
      "UpdateTableReplicaAutoScaling",
      "UpdateTimeToLive"
    ],
    "List": [
      "ListBackups",
      "ListContributorInsights",
      "ListGlobalTables",
      "ListTables"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type index to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.htmlHowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey
   *
   * @param tableName - Identifier for the tableName.
   * @param indexName - Identifier for the indexName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIndex(tableName: string, indexName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}/index/${IndexName}';
    arn = arn.replace('${TableName}', tableName);
    arn = arn.replace('${IndexName}', indexName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type stream to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.htmlHowItWorks.CoreComponents.html#HowItWorks.CoreComponents.Streams
   *
   * @param tableName - Identifier for the tableName.
   * @param streamLabel - Identifier for the streamLabel.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onStream(tableName: string, streamLabel: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}/stream/${StreamLabel}';
    arn = arn.replace('${TableName}', tableName);
    arn = arn.replace('${StreamLabel}', streamLabel);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type table to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.htmlHowItWorks.CoreComponents.html#HowItWorks.CoreComponents.TablesItemsAttributes
   *
   * @param tableName - Identifier for the tableName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTable(tableName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}';
    arn = arn.replace('${TableName}', tableName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type backup to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_HowItWorks.html
   *
   * @param tableName - Identifier for the tableName.
   * @param backupName - Identifier for the backupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBackup(tableName: string, backupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}/backup/${BackupName}';
    arn = arn.replace('${TableName}', tableName);
    arn = arn.replace('${BackupName}', backupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type global-table to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables_HowItWorks.html
   *
   * @param globalTableName - Identifier for the globalTableName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGlobalTable(globalTableName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:dynamodb::${Account}:global-table/${GlobalTableName}';
    arn = arn.replace('${GlobalTableName}', globalTableName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filter based on the attribute (field or column) names of the table.
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
   *
   * Applies to actions:
   * - .toBatchGetItem()
   * - .toBatchWriteItem()
   * - .toConditionCheckItem()
   * - .toDeleteItem()
   * - .toGetItem()
   * - .toPutItem()
   * - .toQuery()
   * - .toScan()
   * - .toUpdateItem()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAttributes(value: string | string[], operator?: Operator | string) {
    return this.if(`dynamodb:Attributes`, value, operator || 'StringLike');
  }

  /**
   * Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa.
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
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
    return this.if(`dynamodb:EnclosingOperation`, value, operator || 'StringLike');
  }

  /**
   * Filters based on the partition key of the table.
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
   *
   * Applies to actions:
   * - .toBatchGetItem()
   * - .toBatchWriteItem()
   * - .toConditionCheckItem()
   * - .toDeleteItem()
   * - .toGetItem()
   * - .toPutItem()
   * - .toQuery()
   * - .toUpdateItem()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLeadingKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`dynamodb:LeadingKeys`, value, operator || 'StringLike');
  }

  /**
   * Filter based on the ReturnConsumedCapacity parameter of a request. Contains either "TOTAL" or "NONE".
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
   *
   * Applies to actions:
   * - .toBatchGetItem()
   * - .toBatchWriteItem()
   * - .toConditionCheckItem()
   * - .toDeleteItem()
   * - .toGetItem()
   * - .toPutItem()
   * - .toQuery()
   * - .toScan()
   * - .toUpdateItem()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReturnConsumedCapacity(value: string | string[], operator?: Operator | string) {
    return this.if(`dynamodb:ReturnConsumedCapacity`, value, operator || 'StringLike');
  }

  /**
   * Filter based on the ReturnValues parameter of request. Contains one of the following: "ALL_OLD", "UPDATED_OLD","ALL_NEW","UPDATED_NEW", or "NONE".
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
   *
   * Applies to actions:
   * - .toConditionCheckItem()
   * - .toDeleteItem()
   * - .toPutItem()
   * - .toQuery()
   * - .toScan()
   * - .toUpdateItem()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReturnValues(value: string | string[], operator?: Operator | string) {
    return this.if(`dynamodb:ReturnValues`, value, operator || 'StringLike');
  }

  /**
   * Filter based on the Select parameter of a Query or Scan request.
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
   *
   * Applies to actions:
   * - .toBatchGetItem()
   * - .toGetItem()
   * - .toQuery()
   * - .toScan()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSelect(value: string | string[], operator?: Operator | string) {
    return this.if(`dynamodb:Select`, value, operator || 'StringLike');
  }
}
