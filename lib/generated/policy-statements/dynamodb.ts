import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to return the attributes of one or more items from one or more tables
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
   * Grants permission to put or delete multiple items in one or more tables
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
   * Grants permission to the ConditionCheckItem operation checks the existence of a set of attributes for the item with the given primary key
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAttributes()
   * - .ifLeadingKeys()
   * - .ifReturnConsumedCapacity()
   * - .ifReturnValues()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ConditionCheck.html
   */
  public toConditionCheckItem() {
    return this.to('ConditionCheckItem');
  }

  /**
   * Grants permission to create a backup for an existing table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html
   */
  public toCreateBackup() {
    return this.to('CreateBackup');
  }

  /**
   * Grants permission to create a global table from an existing table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html
   */
  public toCreateGlobalTable() {
    return this.to('CreateGlobalTable');
  }

  /**
   * Grants permission to the CreateTable operation adds a new table to your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html
   */
  public toCreateTable() {
    return this.to('CreateTable');
  }

  /**
   * Grants permission to add a new replica table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2gt_IAM.html
   */
  public toCreateTableReplica() {
    return this.to('CreateTableReplica');
  }

  /**
   * Grants permission to delete an existing backup of a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html
   */
  public toDeleteBackup() {
    return this.to('DeleteBackup');
  }

  /**
   * Grants permission to deletes a single item in a table by primary key
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
   * Grants permission to delete the resource-based policy attached to the resource
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to the DeleteTable operation which deletes a table and all of its items
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html
   */
  public toDeleteTable() {
    return this.to('DeleteTable');
  }

  /**
   * Grants permission to delete a replica table and all of its items
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2gt_IAM.html
   */
  public toDeleteTableReplica() {
    return this.to('DeleteTableReplica');
  }

  /**
   * Grants permission to describe an existing backup of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html
   */
  public toDescribeBackup() {
    return this.to('DescribeBackup');
  }

  /**
   * Grants permission to check the status of the backup restore settings on the specified table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html
   */
  public toDescribeContinuousBackups() {
    return this.to('DescribeContinuousBackups');
  }

  /**
   * Grants permission to describe the contributor insights status and related details for a given table or global secondary index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html
   */
  public toDescribeContributorInsights() {
    return this.to('DescribeContributorInsights');
  }

  /**
   * Grants permission to return the regional endpoint information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeEndpoints.html
   */
  public toDescribeEndpoints() {
    return this.to('DescribeEndpoints');
  }

  /**
   * Grants permission to describe an existing Export of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeExport.html
   */
  public toDescribeExport() {
    return this.to('DescribeExport');
  }

  /**
   * Grants permission to return information about the specified global table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html
   */
  public toDescribeGlobalTable() {
    return this.to('DescribeGlobalTable');
  }

  /**
   * Grants permission to return settings information about the specified global table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html
   */
  public toDescribeGlobalTableSettings() {
    return this.to('DescribeGlobalTableSettings');
  }

  /**
   * Grants permission to describe an existing import
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeImport.html
   */
  public toDescribeImport() {
    return this.to('DescribeImport');
  }

  /**
   * Grants permission to grant permission to describe the status of Kinesis streaming and related details for a given table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeKinesisStreamingDestination.html
   */
  public toDescribeKinesisStreamingDestination() {
    return this.to('DescribeKinesisStreamingDestination');
  }

  /**
   * Grants permission to return the current provisioned-capacity limits for your AWS account in a region, both for the region as a whole and for any one DynamoDB table that you create there
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html
   */
  public toDescribeLimits() {
    return this.to('DescribeLimits');
  }

  /**
   * Grants permission to describe one or more of the Reserved Capacity purchased
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/iam-policy-prevent-purchase-reserved-capacity.html
   */
  public toDescribeReservedCapacity() {
    return this.to('DescribeReservedCapacity');
  }

  /**
   * Grants permission to describe Reserved Capacity offerings that are available for purchase
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/iam-policy-prevent-purchase-reserved-capacity.html
   */
  public toDescribeReservedCapacityOfferings() {
    return this.to('DescribeReservedCapacityOfferings');
  }

  /**
   * Grants permission to return information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_DescribeStream.html
   */
  public toDescribeStream() {
    return this.to('DescribeStream');
  }

  /**
   * Grants permission to return information about the table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html
   */
  public toDescribeTable() {
    return this.to('DescribeTable');
  }

  /**
   * Grants permission to describe the auto scaling settings across all replicas of the global table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html
   */
  public toDescribeTableReplicaAutoScaling() {
    return this.to('DescribeTableReplicaAutoScaling');
  }

  /**
   * Grants permission to give a description of the Time to Live (TTL) status on the specified table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html
   */
  public toDescribeTimeToLive() {
    return this.to('DescribeTimeToLive');
  }

  /**
   * Grants permission to grant permission to stop replication from the DynamoDB table to the Kinesis data stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DisableKinesisStreamingDestination.html
   */
  public toDisableKinesisStreamingDestination() {
    return this.to('DisableKinesisStreamingDestination');
  }

  /**
   * Grants permission to grant permission to start table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_EnableKinesisStreamingDestination.html
   */
  public toEnableKinesisStreamingDestination() {
    return this.to('EnableKinesisStreamingDestination');
  }

  /**
   * Grants permission to initiate an Export of a DynamoDB table to S3
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExportTableToPointInTime.html
   */
  public toExportTableToPointInTime() {
    return this.to('ExportTableToPointInTime');
  }

  /**
   * Grants permission to view the status of Attribute Based Access Control for the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/abac-enable-ddb.html
   */
  public toGetAbacStatus() {
    return this.to('GetAbacStatus');
  }

  /**
   * Grants permission to the GetItem operation that returns a set of attributes for the item with the given primary key
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
   * Grants permission to retrieve the stream records from a given shard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetRecords.html
   */
  public toGetRecords() {
    return this.to('GetRecords');
  }

  /**
   * Grants permission to view a resource-based policy for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to return a shard iterator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetShardIterator.html
   */
  public toGetShardIterator() {
    return this.to('GetShardIterator');
  }

  /**
   * Grants permission to initiate an import from S3 to a DynamoDB table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ImportTable.html
   */
  public toImportTable() {
    return this.to('ImportTable');
  }

  /**
   * Grants permission to list backups associated with the account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html
   */
  public toListBackups() {
    return this.to('ListBackups');
  }

  /**
   * Grants permission to list the ContributorInsightsSummary for all tables and global secondary indexes associated with the current account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html
   */
  public toListContributorInsights() {
    return this.to('ListContributorInsights');
  }

  /**
   * Grants permission to list exports associated with the account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListExports.html
   */
  public toListExports() {
    return this.to('ListExports');
  }

  /**
   * Grants permission to list all global tables that have a replica in the specified region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html
   */
  public toListGlobalTables() {
    return this.to('ListGlobalTables');
  }

  /**
   * Grants permission to list imports associated with the account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListImports.html
   */
  public toListImports() {
    return this.to('ListImports');
  }

  /**
   * Grants permission to return an array of stream ARNs associated with the current account and endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_ListStreams.html
   */
  public toListStreams() {
    return this.to('ListStreams');
  }

  /**
   * Grants permission to return an array of table names associated with the current account and endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html
   */
  public toListTables() {
    return this.to('ListTables');
  }

  /**
   * Grants permission to list all tags on an Amazon DynamoDB resource
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
   * Grants permission to purchases reserved capacity for use with your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/iam-policy-prevent-purchase-reserved-capacity.html
   */
  public toPurchaseReservedCapacityOfferings() {
    return this.to('PurchaseReservedCapacityOfferings');
  }

  /**
   * Grants permission to create a new item, or replace an old item with a new item
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
   * Grants permission to attach a resource-based policy to the resource
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to use the primary key of a table or a secondary index to directly access items from that table or index
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
   * Grants permission to create a new table from recovery point on AWS Backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/UsageNotesAWS.html
   */
  public toRestoreTableFromAwsBackup() {
    return this.to('RestoreTableFromAwsBackup');
  }

  /**
   * Grants permission to create a new table from an existing backup
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - dynamodb:BatchWriteItem
   * - dynamodb:DeleteItem
   * - dynamodb:GetItem
   * - dynamodb:PutItem
   * - dynamodb:Query
   * - dynamodb:Scan
   * - dynamodb:UpdateItem
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html
   */
  public toRestoreTableFromBackup() {
    return this.to('RestoreTableFromBackup');
  }

  /**
   * Grants permission to restore a table to a point in time
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - dynamodb:BatchWriteItem
   * - dynamodb:DeleteItem
   * - dynamodb:GetItem
   * - dynamodb:PutItem
   * - dynamodb:Query
   * - dynamodb:Scan
   * - dynamodb:UpdateItem
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html
   */
  public toRestoreTableToPointInTime() {
    return this.to('RestoreTableToPointInTime');
  }

  /**
   * Grants permission to return one or more items and item attributes by accessing every item in a table or a secondary index
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
   * Grants permission to create a backup on AWS Backup with advanced features enabled
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/UsageNotesAWS.html
   */
  public toStartAwsBackupJob() {
    return this.to('StartAwsBackupJob');
  }

  /**
   * Grants permission to associate a set of tags with an Amazon DynamoDB resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the association of tags from an Amazon DynamoDB resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the status of Attribute Based Access Control for the account
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/abac-enable-ddb.html
   */
  public toUpdateAbacStatus() {
    return this.to('UpdateAbacStatus');
  }

  /**
   * Grants permission to enable or disable continuous backups
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html
   */
  public toUpdateContinuousBackups() {
    return this.to('UpdateContinuousBackups');
  }

  /**
   * Grants permission to update the status for contributor insights for a specific table or global secondary index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html
   */
  public toUpdateContributorInsights() {
    return this.to('UpdateContributorInsights');
  }

  /**
   * Grants permission to add or remove replicas in the specified global table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html
   */
  public toUpdateGlobalTable() {
    return this.to('UpdateGlobalTable');
  }

  /**
   * Grants permission to update settings of the specified global table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html
   */
  public toUpdateGlobalTableSettings() {
    return this.to('UpdateGlobalTableSettings');
  }

  /**
   * Grants permission to update version of the specified global table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html
   */
  public toUpdateGlobalTableVersion() {
    return this.to('UpdateGlobalTableVersion');
  }

  /**
   * Grants permission to edit an existing item's attributes, or adds a new item to the table if it does not already exist
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
   * Grants permission to update data replication configurations for the specified Kinesis data stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateKinesisStreamingDestination.html
   */
  public toUpdateKinesisStreamingDestination() {
    return this.to('UpdateKinesisStreamingDestination');
  }

  /**
   * Grants permission to modify the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html
   */
  public toUpdateTable() {
    return this.to('UpdateTable');
  }

  /**
   * Grants permission to update auto scaling settings on your replica table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html
   */
  public toUpdateTableReplicaAutoScaling() {
    return this.to('UpdateTableReplicaAutoScaling');
  }

  /**
   * Grants permission to enable or disable TTL for the specified table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html
   */
  public toUpdateTimeToLive() {
    return this.to('UpdateTimeToLive');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchGetItem',
      'ConditionCheckItem',
      'DescribeBackup',
      'DescribeContinuousBackups',
      'DescribeContributorInsights',
      'DescribeEndpoints',
      'DescribeExport',
      'DescribeGlobalTable',
      'DescribeGlobalTableSettings',
      'DescribeImport',
      'DescribeKinesisStreamingDestination',
      'DescribeLimits',
      'DescribeReservedCapacity',
      'DescribeReservedCapacityOfferings',
      'DescribeStream',
      'DescribeTable',
      'DescribeTableReplicaAutoScaling',
      'DescribeTimeToLive',
      'GetAbacStatus',
      'GetItem',
      'GetRecords',
      'GetResourcePolicy',
      'GetShardIterator',
      'ListStreams',
      'ListTagsOfResource',
      'PartiQLSelect',
      'Query',
      'Scan'
    ],
    Write: [
      'BatchWriteItem',
      'CreateBackup',
      'CreateGlobalTable',
      'CreateTable',
      'CreateTableReplica',
      'DeleteBackup',
      'DeleteItem',
      'DeleteTable',
      'DeleteTableReplica',
      'DisableKinesisStreamingDestination',
      'EnableKinesisStreamingDestination',
      'ExportTableToPointInTime',
      'ImportTable',
      'PartiQLDelete',
      'PartiQLInsert',
      'PartiQLUpdate',
      'PurchaseReservedCapacityOfferings',
      'PutItem',
      'RestoreTableFromAwsBackup',
      'RestoreTableFromBackup',
      'RestoreTableToPointInTime',
      'StartAwsBackupJob',
      'UpdateContinuousBackups',
      'UpdateContributorInsights',
      'UpdateGlobalTable',
      'UpdateGlobalTableSettings',
      'UpdateGlobalTableVersion',
      'UpdateItem',
      'UpdateKinesisStreamingDestination',
      'UpdateTable',
      'UpdateTableReplicaAutoScaling',
      'UpdateTimeToLive'
    ],
    'Permissions management': [
      'DeleteResourcePolicy',
      'PutResourcePolicy',
      'UpdateAbacStatus'
    ],
    List: [
      'ListBackups',
      'ListContributorInsights',
      'ListExports',
      'ListGlobalTables',
      'ListImports',
      'ListTables'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type index to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey
   *
   * @param tableName - Identifier for the tableName.
   * @param indexName - Identifier for the indexName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIndex(tableName: string, indexName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dynamodb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:table/${ tableName }/index/${ indexName }`);
  }

  /**
   * Adds a resource of type stream to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.Streams
   *
   * @param tableName - Identifier for the tableName.
   * @param streamLabel - Identifier for the streamLabel.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onStream(tableName: string, streamLabel: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dynamodb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:table/${ tableName }/stream/${ streamLabel }`);
  }

  /**
   * Adds a resource of type table to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.TablesItemsAttributes
   *
   * @param tableName - Identifier for the tableName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTable(tableName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dynamodb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:table/${ tableName }`);
  }

  /**
   * Adds a resource of type backup to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_HowItWorks.html
   *
   * @param tableName - Identifier for the tableName.
   * @param backupName - Identifier for the backupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBackup(tableName: string, backupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dynamodb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:table/${ tableName }/backup/${ backupName }`);
  }

  /**
   * Adds a resource of type export to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.HowItWorks.html
   *
   * @param tableName - Identifier for the tableName.
   * @param exportName - Identifier for the exportName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onExport(tableName: string, exportName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dynamodb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:table/${ tableName }/export/${ exportName }`);
  }

  /**
   * Adds a resource of type global-table to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables_HowItWorks.html
   *
   * @param globalTableName - Identifier for the globalTableName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onGlobalTable(globalTableName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dynamodb::${ account ?? this.defaultAccount }:global-table/${ globalTableName }`);
  }

  /**
   * Adds a resource of type import to the statement
   *
   * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataImport.HowItWorks.html
   *
   * @param tableName - Identifier for the tableName.
   * @param importName - Identifier for the importName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onImport(tableName: string, importName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dynamodb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:table/${ tableName }/import/${ importName }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateTable()
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
   * Applies to resource types:
   * - index
   * - table
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
   * - .toCreateTable()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by attribute (field or column) names of the table
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
    return this.if(`Attributes`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by blocking Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa
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
    return this.if(`EnclosingOperation`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by blocking full table scan
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
   * Filters access by the partition key of the table
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
    return this.if(`LeadingKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ReturnConsumedCapacity parameter of a request. Contains either "TOTAL" or "NONE"
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
    return this.if(`ReturnConsumedCapacity`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ReturnValues parameter of request. Contains one of the following: "ALL_OLD", "UPDATED_OLD","ALL_NEW","UPDATED_NEW", or "NONE"
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
    return this.if(`ReturnValues`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Select parameter of a Query or Scan request
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
    return this.if(`Select`, value, operator ?? 'StringLike');
  }
}
