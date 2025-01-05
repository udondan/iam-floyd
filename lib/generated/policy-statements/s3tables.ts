import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [s3tables](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3tables.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class S3tables extends PolicyStatement {
  public servicePrefix = 's3tables';

  /**
   * Statement provider for service [s3tables](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3tables.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_CreateNamespace.html
   */
  public toCreateNamespace() {
    return this.to('CreateNamespace');
  }

  /**
   * Grants permission to create a table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNamespace()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_CreateTable.html
   */
  public toCreateTable() {
    return this.to('CreateTable');
  }

  /**
   * Grants permission to create a table bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_CreateTableBucket.html
   */
  public toCreateTableBucket() {
    return this.to('CreateTableBucket');
  }

  /**
   * Grants permission to delete a namespace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNamespace()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_DeleteNamespace.html
   */
  public toDeleteNamespace() {
    return this.to('DeleteNamespace');
  }

  /**
   * Grants permission to delete a table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifTableName()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_DeleteTable.html
   */
  public toDeleteTable() {
    return this.to('DeleteTable');
  }

  /**
   * Grants permission to delete a table bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_DeleteTableBucket.html
   */
  public toDeleteTableBucket() {
    return this.to('DeleteTableBucket');
  }

  /**
   * Grants permission to delete a policy on a table bucket
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_DeleteTableBucketPolicy.html
   */
  public toDeleteTableBucketPolicy() {
    return this.to('DeleteTableBucketPolicy');
  }

  /**
   * Grants permission to delete a policy on a table
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifTableName()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_DeleteTablePolicy.html
   */
  public toDeleteTablePolicy() {
    return this.to('DeleteTablePolicy');
  }

  /**
   * Grants permission to get a namespace
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifNamespace()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_GetNamespace.html
   */
  public toGetNamespace() {
    return this.to('GetNamespace');
  }

  /**
   * Grants permission to retrieve a table
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifTableName()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_GetTable.html
   */
  public toGetTable() {
    return this.to('GetTable');
  }

  /**
   * Grants permission to retrieve a table bucket
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_GetTableBucket.html
   */
  public toGetTableBucket() {
    return this.to('GetTableBucket');
  }

  /**
   * Grants permission to retrieve a maintenance configuration on a table bucket
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_GetTableBucketMaintenanceConfiguration.html
   */
  public toGetTableBucketMaintenanceConfiguration() {
    return this.to('GetTableBucketMaintenanceConfiguration');
  }

  /**
   * Grants permission to retrieve a policy on a table bucket
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_GetTableBucketPolicy.html
   */
  public toGetTableBucketPolicy() {
    return this.to('GetTableBucketPolicy');
  }

  /**
   * Grants permission to read metadata and data objects from a table storage endpoint using S3 APIs
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifTableName()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-setting-up.html#s3-tables-actions
   */
  public toGetTableData() {
    return this.to('GetTableData');
  }

  /**
   * Grants permission to retrieve a maintenance configuration on a table
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifTableName()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_GetTableMaintenanceConfiguration.html
   */
  public toGetTableMaintenanceConfiguration() {
    return this.to('GetTableMaintenanceConfiguration');
  }

  /**
   * Grants permission to retrieve the status of maintenance jobs on a table
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifTableName()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_GetTableMaintenanceJobStatus.html
   */
  public toGetTableMaintenanceJobStatus() {
    return this.to('GetTableMaintenanceJobStatus');
  }

  /**
   * Grants permission to retrieve the metadata location of a table
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifTableName()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_GetTableMetadataLocation.html
   */
  public toGetTableMetadataLocation() {
    return this.to('GetTableMetadataLocation');
  }

  /**
   * Grants permission to retrieve a policy on a table
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifTableName()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_GetTablePolicy.html
   */
  public toGetTablePolicy() {
    return this.to('GetTablePolicy');
  }

  /**
   * Grants permission to list namespaces
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_ListNamespaces.html
   */
  public toListNamespaces() {
    return this.to('ListNamespaces');
  }

  /**
   * Grants permission to list table buckets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_ListTableBuckets.html
   */
  public toListTableBuckets() {
    return this.to('ListTableBuckets');
  }

  /**
   * Grants permission to list tables
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifNamespace()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_ListTables.html
   */
  public toListTables() {
    return this.to('ListTables');
  }

  /**
   * Grants permission to put a maintenance configuration on a table bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_PutTableBucketMaintenanceConfiguration.html
   */
  public toPutTableBucketMaintenanceConfiguration() {
    return this.to('PutTableBucketMaintenanceConfiguration');
  }

  /**
   * Grants permission to create or overwrite a policy on a table bucket
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_PutTableBucketPolicy.html
   */
  public toPutTableBucketPolicy() {
    return this.to('PutTableBucketPolicy');
  }

  /**
   * Grants permission to write metadata and data objects to a table storage endpoint using S3 APIs
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifTableName()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-setting-up.html#s3-tables-actions
   */
  public toPutTableData() {
    return this.to('PutTableData');
  }

  /**
   * Grants permission to put a maintenance configuration on a table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifTableName()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_PutTableMaintenanceConfiguration.html
   */
  public toPutTableMaintenanceConfiguration() {
    return this.to('PutTableMaintenanceConfiguration');
  }

  /**
   * Grants permission to create or overwrite a policy on a table
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifTableName()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_PutTablePolicy.html
   */
  public toPutTablePolicy() {
    return this.to('PutTablePolicy');
  }

  /**
   * Grants permission to rename a table or move a table across namespaces
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNamespace()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_RenameTable.html
   */
  public toRenameTable() {
    return this.to('RenameTable');
  }

  /**
   * Grants permission to update the metadata location of a table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifTableName()
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3TableBuckets_UpdateTableMetadataLocation.html
   */
  public toUpdateTableMetadataLocation() {
    return this.to('UpdateTableMetadataLocation');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateNamespace',
      'CreateTable',
      'CreateTableBucket',
      'DeleteNamespace',
      'DeleteTable',
      'DeleteTableBucket',
      'PutTableBucketMaintenanceConfiguration',
      'PutTableData',
      'PutTableMaintenanceConfiguration',
      'RenameTable',
      'UpdateTableMetadataLocation'
    ],
    'Permissions management': [
      'DeleteTableBucketPolicy',
      'DeleteTablePolicy',
      'PutTableBucketPolicy',
      'PutTablePolicy'
    ],
    Read: [
      'GetNamespace',
      'GetTable',
      'GetTableBucket',
      'GetTableBucketMaintenanceConfiguration',
      'GetTableBucketPolicy',
      'GetTableData',
      'GetTableMaintenanceConfiguration',
      'GetTableMaintenanceJobStatus',
      'GetTableMetadataLocation',
      'GetTablePolicy'
    ],
    List: [
      'ListNamespaces',
      'ListTableBuckets',
      'ListTables'
    ]
  };

  /**
   * Adds a resource of type TableBucket to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-buckets.html
   *
   * @param tableBucketName - Identifier for the tableBucketName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTableBucket(tableBucketName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:s3tables:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:bucket/${ tableBucketName }`);
  }

  /**
   * Adds a resource of type Table to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-tables.html
   *
   * @param tableBucketName - Identifier for the tableBucketName.
   * @param tableID - Identifier for the tableID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifTableName()
   */
  public onTable(tableBucketName: string, tableID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:s3tables:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:bucket/${ tableBucketName }/table/${ tableID }`);
  }

  /**
   * Filters access by the namespaces created in the table bucket
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-setting-up.htmls3-tables-setting-up.html
   *
   * Applies to actions:
   * - .toCreateTable()
   * - .toDeleteNamespace()
   * - .toDeleteTable()
   * - .toDeleteTablePolicy()
   * - .toGetNamespace()
   * - .toGetTable()
   * - .toGetTableData()
   * - .toGetTableMaintenanceConfiguration()
   * - .toGetTableMaintenanceJobStatus()
   * - .toGetTableMetadataLocation()
   * - .toGetTablePolicy()
   * - .toListTables()
   * - .toPutTableData()
   * - .toPutTableMaintenanceConfiguration()
   * - .toPutTablePolicy()
   * - .toRenameTable()
   * - .toUpdateTableMetadataLocation()
   *
   * Applies to resource types:
   * - Table
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifNamespace(value: string | string[], operator?: Operator | string) {
    return this.if(`namespace`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the tables in the table bucket
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-setting-up.htmls3-tables-setting-up.html
   *
   * Applies to actions:
   * - .toDeleteTable()
   * - .toDeleteTablePolicy()
   * - .toGetTable()
   * - .toGetTableData()
   * - .toGetTableMaintenanceConfiguration()
   * - .toGetTableMaintenanceJobStatus()
   * - .toGetTableMetadataLocation()
   * - .toGetTablePolicy()
   * - .toPutTableData()
   * - .toPutTableMaintenanceConfiguration()
   * - .toPutTablePolicy()
   * - .toUpdateTableMetadataLocation()
   *
   * Applies to resource types:
   * - Table
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTableName(value: string | string[], operator?: Operator | string) {
    return this.if(`tableName`, value, operator ?? 'StringLike');
  }
}
