import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [dynamodb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dynamodb extends PolicyStatement {
  public servicePrefix = 'dynamodb';

  /**
   * Statement provider for service [dynamodb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html).
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
    return this.to('BatchGetItem');
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
    return this.to('BatchWriteItem');
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
    return this.to('ConditionCheckItem');
  }

  /**
   * Creates a backup for an existing table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html
   */
  public toCreateBackup() {
    return this.to('CreateBackup');
  }

  /**
   * Enables the user to create a global table from an existing table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html
   */
  public toCreateGlobalTable() {
    return this.to('CreateGlobalTable');
  }

  /**
   * The CreateTable operation adds a new table to your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html
   */
  public toCreateTable() {
    return this.to('CreateTable');
  }

  /**
   * Adds a new replica table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/V2gt_IAM.html
   */
  public toCreateTableReplica() {
    return this.to('CreateTableReplica');
  }

  /**
   * Deletes an existing backup of a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html
   */
  public toDeleteBackup() {
    return this.to('DeleteBackup');
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
    return this.to('DeleteItem');
  }

  /**
   * The DeleteTable operation deletes a table and all of its items
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html
   */
  public toDeleteTable() {
    return this.to('DeleteTable');
  }

  /**
   * Deletes a replica table and all of its items
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/V2gt_IAM.html
   */
  public toDeleteTableReplica() {
    return this.to('DeleteTableReplica');
  }

  /**
   * Describes an existing backup of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html
   */
  public toDescribeBackup() {
    return this.to('DescribeBackup');
  }

  /**
   * Checks the status of the backup restore settings on the specified table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html
   */
  public toDescribeContinuousBackups() {
    return this.to('DescribeContinuousBackups');
  }

  /**
   * Describes the contributor insights status and related details for a given table or global secondary index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html
   */
  public toDescribeContributorInsights() {
    return this.to('DescribeContributorInsights');
  }

  /**
   * Describes an existing Export of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeExport.html
   */
  public toDescribeExport() {
    return this.to('DescribeExport');
  }

  /**
   * Returns information about the specified global table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html
   */
  public toDescribeGlobalTable() {
    return this.to('DescribeGlobalTable');
  }

  /**
   * Returns settings information about the specified global table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html
   */
  public toDescribeGlobalTableSettings() {
    return this.to('DescribeGlobalTableSettings');
  }

  /**
   * Grants permission to describe the status of Kinesis streaming and related details for a given table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeKinesisStreamingDestination.html
   */
  public toDescribeKinesisStreamingDestination() {
    return this.to('DescribeKinesisStreamingDestination');
  }

  /**
   * Returns the current provisioned-capacity limits for your AWS account in a region, both for the region as a whole and for any one DynamoDB table that you create there
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html
   */
  public toDescribeLimits() {
    return this.to('DescribeLimits');
  }

  /**
   * Describes one or more of the Reserved Capacity purchased
   *
   * Access Level: Read
   */
  public toDescribeReservedCapacity() {
    return this.to('DescribeReservedCapacity');
  }

  /**
   * Describes Reserved Capacity offerings that are available for purchase
   *
   * Access Level: Read
   */
  public toDescribeReservedCapacityOfferings() {
    return this.to('DescribeReservedCapacityOfferings');
  }

  /**
   * Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeStream.html
   */
  public toDescribeStream() {
    return this.to('DescribeStream');
  }

  /**
   * Returns information about the table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html
   */
  public toDescribeTable() {
    return this.to('DescribeTable');
  }

  /**
   * Describes the auto scaling settings across all replicas of the global table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html
   */
  public toDescribeTableReplicaAutoScaling() {
    return this.to('DescribeTableReplicaAutoScaling');
  }

  /**
   * Gives a description of the Time to Live (TTL) status on the specified table.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html
   */
  public toDescribeTimeToLive() {
    return this.to('DescribeTimeToLive');
  }

  /**
   * Grants permission to stop replication from the DynamoDB table to the Kinesis data stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DisableKinesisStreamingDestination.html
   */
  public toDisableKinesisStreamingDestination() {
    return this.to('DisableKinesisStreamingDestination');
  }

  /**
   * Grants permission to start table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_EnableKinesisStreamingDestination.html
   */
  public toEnableKinesisStreamingDestination() {
    return this.to('EnableKinesisStreamingDestination');
  }

  /**
   * Initiates an Export of a DynamoDB table to S3
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExportTableToPointInTime.html
   */
  public toExportTableToPointInTime() {
    return this.to('ExportTableToPointInTime');
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
    return this.to('GetItem');
  }

  /**
   * Retrieves the stream records from a given shard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetRecords.html
   */
  public toGetRecords() {
    return this.to('GetRecords');
  }

  /**
   * Returns a shard iterator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetShardIterator.html
   */
  public toGetShardIterator() {
    return this.to('GetShardIterator');
  }

  /**
   * List backups associated with the account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html
   */
  public toListBackups() {
    return this.to('ListBackups');
  }

  /**
   * Lists the ContributorInsightsSummary for all tables and global secondary indexes associated with the current account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html
   */
  public toListContributorInsights() {
    return this.to('ListContributorInsights');
  }

  /**
   * List exports associated with the account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListExports.html
   */
  public toListExports() {
    return this.to('ListExports');
  }

  /**
   * Lists all global tables that have a replica in the specified region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html
   */
  public toListGlobalTables() {
    return this.to('ListGlobalTables');
  }

  /**
   * Returns an array of stream ARNs associated with the current account and endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListStreams.html
   */
  public toListStreams() {
    return this.to('ListStreams');
  }

  /**
   * Returns an array of table names associated with the current account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html
   */
  public toListTables() {
    return this.to('ListTables');
  }

  /**
   * List all tags on an Amazon DynamoDB resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html
   */
  public toListTagsOfResource() {
    return this.to('ListTagsOfResource');
  }

  /**
   * Grants permission to delete a single item in a table by primary key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAttributes()
   * - .ifEnclosingOperation()
   * - .ifLeadingKeys()
   * - .ifReturnValues()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html
   */
  public toPartiQLDelete() {
    return this.to('PartiQLDelete');
  }

  /**
   * Grants permission to create a new item, if an item with same primary key does not exist in the table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAttributes()
   * - .ifEnclosingOperation()
   * - .ifLeadingKeys()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html
   */
  public toPartiQLInsert() {
    return this.to('PartiQLInsert');
  }

  /**
   * Grants permission to read a set of attributes for items from a table or index
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAttributes()
   * - .ifEnclosingOperation()
   * - .ifFullTableScan()
   * - .ifLeadingKeys()
   * - .ifSelect()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html
   */
  public toPartiQLSelect() {
    return this.to('PartiQLSelect');
  }

  /**
   * Grants permission to edit an existing item's attributes
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAttributes()
   * - .ifEnclosingOperation()
   * - .ifLeadingKeys()
   * - .ifReturnValues()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html
   */
  public toPartiQLUpdate() {
    return this.to('PartiQLUpdate');
  }

  /**
   * Purchases Reserved Capacity for use with your account
   *
   * Access Level: Write
   */
  public toPurchaseReservedCapacityOfferings() {
    return this.to('PurchaseReservedCapacityOfferings');
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
    return this.to('PutItem');
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
    return this.to('Query');
  }

  /**
   * Creates a new table from an existing backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html
   */
  public toRestoreTableFromBackup() {
    return this.to('RestoreTableFromBackup');
  }

  /**
   * Restores a table to a point in time
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html
   */
  public toRestoreTableToPointInTime() {
    return this.to('RestoreTableToPointInTime');
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
    return this.to('Scan');
  }

  /**
   * Associate a set of tags with an Amazon DynamoDB resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Removes the association of tags from an Amazon DynamoDB resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Enables or disables continuous backups
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html
   */
  public toUpdateContinuousBackups() {
    return this.to('UpdateContinuousBackups');
  }

  /**
   * Updates the status for contributor insights for a specific table or global secondary index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html
   */
  public toUpdateContributorInsights() {
    return this.to('UpdateContributorInsights');
  }

  /**
   * Enables the user to add or remove replicas in the specified global table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html
   */
  public toUpdateGlobalTable() {
    return this.to('UpdateGlobalTable');
  }

  /**
   * Enables the user to update settings of the specified global table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html
   */
  public toUpdateGlobalTableSettings() {
    return this.to('UpdateGlobalTableSettings');
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
    return this.to('UpdateItem');
  }

  /**
   * Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html
   */
  public toUpdateTable() {
    return this.to('UpdateTable');
  }

  /**
   * Updates auto scaling settings on your replica table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html
   */
  public toUpdateTableReplicaAutoScaling() {
    return this.to('UpdateTableReplicaAutoScaling');
  }

  /**
   * Enables or disables TTL for the specified table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html
   */
  public toUpdateTimeToLive() {
    return this.to('UpdateTimeToLive');
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "BatchGetItem",
      "ConditionCheckItem",
      "DescribeBackup",
      "DescribeContinuousBackups",
      "DescribeContributorInsights",
      "DescribeExport",
      "DescribeGlobalTable",
      "DescribeGlobalTableSettings",
      "DescribeKinesisStreamingDestination",
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
      "PartiQLSelect",
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
      "DisableKinesisStreamingDestination",
      "EnableKinesisStreamingDestination",
      "ExportTableToPointInTime",
      "PartiQLDelete",
      "PartiQLInsert",
      "PartiQLUpdate",
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
      "ListExports",
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
    return this.on(`arn:${ partition || 'aws' }:dynamodb:${ region || '*' }:${ account || '*' }:table/${ tableName }/index/${ indexName }`);
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
    return this.on(`arn:${ partition || 'aws' }:dynamodb:${ region || '*' }:${ account || '*' }:table/${ tableName }/stream/${ streamLabel }`);
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
    return this.on(`arn:${ partition || 'aws' }:dynamodb:${ region || '*' }:${ account || '*' }:table/${ tableName }`);
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
    return this.on(`arn:${ partition || 'aws' }:dynamodb:${ region || '*' }:${ account || '*' }:table/${ tableName }/backup/${ backupName }`);
  }

  /**
   * Adds a resource of type export to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataExport.HowItWorks.html
   *
   * @param tableName - Identifier for the tableName.
   * @param exportName - Identifier for the exportName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onExport(tableName: string, exportName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:dynamodb:${ region || '*' }:${ account || '*' }:table/${ tableName }/export/${ exportName }`);
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
    return this.on(`arn:${ partition || 'aws' }:dynamodb::${ account || '*' }:global-table/${ globalTableName }`);
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
   * - .toPartiQLDelete()
   * - .toPartiQLInsert()
   * - .toPartiQLSelect()
   * - .toPartiQLUpdate()
   * - .toPutItem()
   * - .toQuery()
   * - .toScan()
   * - .toUpdateItem()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAttributes(value: string | string[], operator?: Operator | string) {
    return this.if(`Attributes`, value, operator || 'StringLike');
  }

  /**
   * Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa.
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
   *
   * Applies to actions:
   * - .toDeleteItem()
   * - .toGetItem()
   * - .toPartiQLDelete()
   * - .toPartiQLInsert()
   * - .toPartiQLSelect()
   * - .toPartiQLUpdate()
   * - .toPutItem()
   * - .toUpdateItem()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnclosingOperation(value: string | string[], operator?: Operator | string) {
    return this.if(`EnclosingOperation`, value, operator || 'StringLike');
  }

  /**
   * Used to block full table scan.
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-iam.html
   *
   * Applies to actions:
   * - .toPartiQLSelect()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifFullTableScan(value?: boolean) {
    return this.if(`FullTableScan`, (typeof value !== 'undefined' ? value : true), 'Bool');
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
   * - .toPartiQLDelete()
   * - .toPartiQLInsert()
   * - .toPartiQLSelect()
   * - .toPartiQLUpdate()
   * - .toPutItem()
   * - .toQuery()
   * - .toUpdateItem()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLeadingKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`LeadingKeys`, value, operator || 'StringLike');
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
    return this.if(`ReturnConsumedCapacity`, value, operator || 'StringLike');
  }

  /**
   * Filter based on the ReturnValues parameter of request. Contains one of the following: "ALL_OLD", "UPDATED_OLD","ALL_NEW","UPDATED_NEW", or "NONE".
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
   *
   * Applies to actions:
   * - .toConditionCheckItem()
   * - .toDeleteItem()
   * - .toPartiQLDelete()
   * - .toPartiQLUpdate()
   * - .toPutItem()
   * - .toQuery()
   * - .toScan()
   * - .toUpdateItem()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReturnValues(value: string | string[], operator?: Operator | string) {
    return this.if(`ReturnValues`, value, operator || 'StringLike');
  }

  /**
   * Filter based on the Select parameter of a Query or Scan request.
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys
   *
   * Applies to actions:
   * - .toBatchGetItem()
   * - .toGetItem()
   * - .toPartiQLSelect()
   * - .toQuery()
   * - .toScan()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSelect(value: string | string[], operator?: Operator | string) {
    return this.if(`Select`, value, operator || 'StringLike');
  }
}
