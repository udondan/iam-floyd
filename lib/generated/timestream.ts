import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [timestream](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontimestream.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Timestream extends PolicyStatement {
  public servicePrefix = 'timestream';

  /**
   * Statement provider for service [timestream](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontimestream.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel queries in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_CancelQuery.html
   */
  public toCancelQuery() {
    return this.to('CancelQuery');
  }

  /**
   * Grants permission to create a database in your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_CreateDatabase.html
   */
  public toCreateDatabase() {
    return this.to('CreateDatabase');
  }

  /**
   * Grants permission to create a scheduled query in your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_CreateScheduledQuery.html
   */
  public toCreateScheduledQuery() {
    return this.to('CreateScheduledQuery');
  }

  /**
   * Grants permission to create a table in your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_CreateTable.html
   */
  public toCreateTable() {
    return this.to('CreateTable');
  }

  /**
   * Grants permission to delete a database in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_DeleteDatabase.html
   */
  public toDeleteDatabase() {
    return this.to('DeleteDatabase');
  }

  /**
   * Grants permission to delete a scheduled query in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_DeleteScheduledQuery.html
   */
  public toDeleteScheduledQuery() {
    return this.to('DeleteScheduledQuery');
  }

  /**
   * Grants permission to delete a table in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_DeleteTable.html
   */
  public toDeleteTable() {
    return this.to('DeleteTable');
  }

  /**
   * Grants permission to describe a database in your account
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeDatabase.html
   */
  public toDescribeDatabase() {
    return this.to('DescribeDatabase');
  }

  /**
   * Grants permission to describe timestream endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeEndpoints.html
   */
  public toDescribeEndpoints() {
    return this.to('DescribeEndpoints');
  }

  /**
   * Grants permission to describe a scheduled query in your account
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeScheduledQuery.html
   */
  public toDescribeScheduledQuery() {
    return this.to('DescribeScheduledQuery');
  }

  /**
   * Grants permission to describe a table in your account
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeTable.html
   */
  public toDescribeTable() {
    return this.to('DescribeTable');
  }

  /**
   * Grants permission to execute a scheduled query in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_ExecuteScheduledQuery.html
   */
  public toExecuteScheduledQuery() {
    return this.to('ExecuteScheduledQuery');
  }

  /**
   * Grants permission to list databases in your account
   *
   * Access Level: List
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListDatabases.html
   */
  public toListDatabases() {
    return this.to('ListDatabases');
  }

  /**
   * Grants permission to list measures of a table in your account
   *
   * Access Level: List
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_Query.html
   */
  public toListMeasures() {
    return this.to('ListMeasures');
  }

  /**
   * Grants permission to list scheduled queries in your account
   *
   * Access Level: List
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListScheduledQueries.html
   */
  public toListScheduledQueries() {
    return this.to('ListScheduledQueries');
  }

  /**
   * Grants permission to list tables in your account
   *
   * Access Level: List
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListTables.html
   */
  public toListTables() {
    return this.to('ListTables');
  }

  /**
   * Grants permission to list tags of a resource in your account
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to issue prepare queries
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   * - timestream:Select
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_PrepareQuery.html
   */
  public toPrepareQuery() {
    return this.to('PrepareQuery');
  }

  /**
   * Grants permission to issue 'select from table' queries
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_Query.html
   */
  public toSelect() {
    return this.to('Select');
  }

  /**
   * Grants permission to issue 'select 1' queries
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_Query.html
   */
  public toSelectValues() {
    return this.to('SelectValues');
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a database in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_UpdateDatabase.html
   */
  public toUpdateDatabase() {
    return this.to('UpdateDatabase');
  }

  /**
   * Grants permission to update a scheduled query in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_UpdateScheduledQuery.html
   */
  public toUpdateScheduledQuery() {
    return this.to('UpdateScheduledQuery');
  }

  /**
   * Grants permission to update a table in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_UpdateTable.html
   */
  public toUpdateTable() {
    return this.to('UpdateTable');
  }

  /**
   * Grants permission to ingest data to a table in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - timestream:DescribeEndpoints
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_WriteRecords.html
   */
  public toWriteRecords() {
    return this.to('WriteRecords');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelQuery',
      'CreateDatabase',
      'CreateScheduledQuery',
      'CreateTable',
      'DeleteDatabase',
      'DeleteScheduledQuery',
      'DeleteTable',
      'ExecuteScheduledQuery',
      'UpdateDatabase',
      'UpdateScheduledQuery',
      'UpdateTable',
      'WriteRecords'
    ],
    Read: [
      'DescribeDatabase',
      'DescribeScheduledQuery',
      'DescribeTable',
      'ListTagsForResource',
      'PrepareQuery',
      'Select',
      'SelectValues'
    ],
    List: [
      'DescribeEndpoints',
      'ListDatabases',
      'ListMeasures',
      'ListScheduledQueries',
      'ListTables'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type database to the statement
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_Database.html
   *
   * @param databaseName - Identifier for the databaseName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatabase(databaseName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Timestream.defaultPartition }:timestream:${ region || '*' }:${ account || '*' }:database/${ databaseName }`);
  }

  /**
   * Adds a resource of type table to the statement
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_Table.html
   *
   * @param databaseName - Identifier for the databaseName.
   * @param tableName - Identifier for the tableName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTable(databaseName: string, tableName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Timestream.defaultPartition }:timestream:${ region || '*' }:${ account || '*' }:database/${ databaseName }/table/${ tableName }`);
  }

  /**
   * Adds a resource of type scheduled-query to the statement
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/API_ScheduledQuery.html
   *
   * @param scheduledQueryName - Identifier for the scheduledQueryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onScheduledQuery(scheduledQueryName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Timestream.defaultPartition }:timestream:${ region || '*' }:${ account || '*' }:scheduled-query/${ scheduledQueryName }`);
  }
}
