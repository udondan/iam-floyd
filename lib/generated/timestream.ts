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
    this.to('CancelQuery');
    return this;
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
    this.to('CreateDatabase');
    return this;
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
    this.to('CreateTable');
    return this;
  }

  /**
   * Grants permissions to delete a database in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_DeleteDatabase.html
   */
  public toDeleteDatabase() {
    this.to('DeleteDatabase');
    return this;
  }

  /**
   * Grants permissions to delete a table in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_DeleteTable.html
   */
  public toDeleteTable() {
    this.to('DeleteTable');
    return this;
  }

  /**
   * Grants permissions to describe a database in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_DescribeDatabase.html
   */
  public toDescribeDatabase() {
    this.to('DescribeDatabase');
    return this;
  }

  /**
   * Grants permissions to describe timestream endpoints.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_DescribeEndpoints.html
   */
  public toDescribeEndpoints() {
    this.to('DescribeEndpoints');
    return this;
  }

  /**
   * Grants Permissions to describe a table in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_DescribeTable.html
   */
  public toDescribeTable() {
    this.to('DescribeTable');
    return this;
  }

  /**
   * Grants Permission to list databases in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_ListDatabases.html
   */
  public toListDatabases() {
    this.to('ListDatabases');
    return this;
  }

  /**
   * Grants Permissions to list measures of a table in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_ListMeasures.html
   */
  public toListMeasures() {
    this.to('ListMeasures');
    return this;
  }

  /**
   * Grants Permission to list tables in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_ListTables.html
   */
  public toListTables() {
    this.to('ListTables');
    return this;
  }

  /**
   * Grants permissions to list tags of a resource in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Grants Permission to issue 'select from table' queries
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_Query.html
   */
  public toSelect() {
    this.to('Select');
    return this;
  }

  /**
   * Grants Permissions to issue 'select 1' queries
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_Query.html
   */
  public toSelectValues() {
    this.to('SelectValues');
    return this;
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
    this.to('TagResource');
    return this;
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
    this.to('UntagResource');
    return this;
  }

  /**
   * Grants permissions to update a database in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_UpdateDatabase.html
   */
  public toUpdateDatabase() {
    this.to('UpdateDatabase');
    return this;
  }

  /**
   * Grants permissions to update a table in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_UpdateTable.html
   */
  public toUpdateTable() {
    this.to('UpdateTable');
    return this;
  }

  /**
   * Grants permissions to ingest data to a table in your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Timestream/latest/APIReference/API_WriteRecords.html
   */
  public toWriteRecords() {
    this.to('WriteRecords');
    return this;
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
