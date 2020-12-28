import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [timestream](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstimestream.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Timestream extends PolicyStatement {
  public servicePrefix = 'timestream';

  /**
   * Statement provider for service [timestream](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstimestream.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants Permission to cancel queries in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_CancelQuery.html
   */
  public toCancelQuery() {
    return this.to('CancelQuery');
  }

  /**
   * Grants permissions to create a database in your account.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_CreateDatabase.html
   */
  public toCreateDatabase() {
    return this.to('CreateDatabase');
  }

  /**
   * Grants permissions to create a table in your account.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_CreateTable.html
   */
  public toCreateTable() {
    return this.to('CreateTable');
  }

  /**
   * Grants permissions to delete a database in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_DeleteDatabase.html
   */
  public toDeleteDatabase() {
    return this.to('DeleteDatabase');
  }

  /**
   * Grants permissions to delete a table in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_DeleteTable.html
   */
  public toDeleteTable() {
    return this.to('DeleteTable');
  }

  /**
   * Grants permissions to describe a database in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_DescribeDatabase.html
   */
  public toDescribeDatabase() {
    return this.to('DescribeDatabase');
  }

  /**
   * Grants permissions to describe timestream endpoints.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_DescribeEndpoints.html
   */
  public toDescribeEndpoints() {
    return this.to('DescribeEndpoints');
  }

  /**
   * Grants Permissions to describe a table in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_DescribeTable.html
   */
  public toDescribeTable() {
    return this.to('DescribeTable');
  }

  /**
   * Grants Permission to list databases in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_ListDatabases.html
   */
  public toListDatabases() {
    return this.to('ListDatabases');
  }

  /**
   * Grants Permissions to list measures of a table in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_ListMeasures.html
   */
  public toListMeasures() {
    return this.to('ListMeasures');
  }

  /**
   * Grants Permission to list tables in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_ListTables.html
   */
  public toListTables() {
    return this.to('ListTables');
  }

  /**
   * Grants permissions to list tags of a resource in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants Permission to issue 'select from table' queries
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_Query.html
   */
  public toSelect() {
    return this.to('Select');
  }

  /**
   * Grants Permissions to issue 'select 1' queries
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_Query.html
   */
  public toSelectValues() {
    return this.to('SelectValues');
  }

  /**
   * Grants permissions to add tags to a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permissions to remove a tag from a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permissions to update a database in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_UpdateDatabase.html
   */
  public toUpdateDatabase() {
    return this.to('UpdateDatabase');
  }

  /**
   * Grants permissions to update a table in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_UpdateTable.html
   */
  public toUpdateTable() {
    return this.to('UpdateTable');
  }

  /**
   * Grants permissions to ingest data to a table in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_WriteRecords.html
   */
  public toWriteRecords() {
    return this.to('WriteRecords');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelQuery",
      "CreateDatabase",
      "CreateTable",
      "DeleteDatabase",
      "DeleteTable",
      "UpdateDatabase",
      "UpdateTable",
      "WriteRecords"
    ],
    "Read": [
      "DescribeDatabase",
      "DescribeTable",
      "Select",
      "SelectValues"
    ],
    "List": [
      "DescribeEndpoints",
      "ListDatabases",
      "ListMeasures",
      "ListTables",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type database to the statement
   *
   * https://docs.aws.amazon.com/Timestream/latest/UserGuide/database-example-policies.html
   *
   * @param databaseName - Identifier for the databaseName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatabase(databaseName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:timestream:${Region}:${Account}:database/${DatabaseName}';
    arn = arn.replace('${DatabaseName}', databaseName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type table to the statement
   *
   * https://docs.aws.amazon.com/Timestream/latest/UserGuide/table-example-policies.html
   *
   * @param databaseName - Identifier for the databaseName.
   * @param tableName - Identifier for the tableName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTable(databaseName: string, tableName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:timestream:${Region}:${Account}:database/${DatabaseName}/table/${TableName}';
    arn = arn.replace('${DatabaseName}', databaseName);
    arn = arn.replace('${TableName}', tableName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
