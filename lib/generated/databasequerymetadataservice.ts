import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [dbqms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_databasequerymetadataservice.html).
 *
 * @param options - Options for the statement
 */
export class Dbqms extends PolicyStatement {
  public servicePrefix = 'dbqms';

  /**
   * Statement provider for service [dbqms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_databasequerymetadataservice.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to create a new favorite query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#CreateFavoriteQuery
   */
  public toCreateFavoriteQuery() {
    return this.to('CreateFavoriteQuery');
  }

  /**
   * Grants permission to add a query to the history
   *
   * Access Level: Write
   */
  public toCreateQueryHistory() {
    return this.to('CreateQueryHistory');
  }

  /**
   * Grants permission to create a new query tab
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#CreateTab
   */
  public toCreateTab() {
    return this.to('CreateTab');
  }

  /**
   * Grants permission to delete saved queries
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteFavoriteQueries
   */
  public toDeleteFavoriteQueries() {
    return this.to('DeleteFavoriteQueries');
  }

  /**
   * Grants permission to delete a historical query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteQueryHistory
   */
  public toDeleteQueryHistory() {
    return this.to('DeleteQueryHistory');
  }

  /**
   * Grants permission to delete query tab
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteTab
   */
  public toDeleteTab() {
    return this.to('DeleteTab');
  }

  /**
   * Grants permission to list saved queries and associated metadata
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeFavoriteQueries
   */
  public toDescribeFavoriteQueries() {
    return this.to('DescribeFavoriteQueries');
  }

  /**
   * Grants permission to list history of queries that were run
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeQueryHistory
   */
  public toDescribeQueryHistory() {
    return this.to('DescribeQueryHistory');
  }

  /**
   * Grants permission to list query tabs and associated metadata
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeTabs
   */
  public toDescribeTabs() {
    return this.to('DescribeTabs');
  }

  /**
   * Grants permission to retrieve favorite or history query string by id
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#GetQueryString
   */
  public toGetQueryString() {
    return this.to('GetQueryString');
  }

  /**
   * Grants permission to update saved query and description
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateFavoriteQuery
   */
  public toUpdateFavoriteQuery() {
    return this.to('UpdateFavoriteQuery');
  }

  /**
   * Grants permission to update the query history
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateQueryHistory
   */
  public toUpdateQueryHistory() {
    return this.to('UpdateQueryHistory');
  }

  /**
   * Grants permission to update query tab
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateTab
   */
  public toUpdateTab() {
    return this.to('UpdateTab');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateFavoriteQuery',
      'CreateQueryHistory',
      'CreateTab',
      'DeleteFavoriteQueries',
      'DeleteQueryHistory',
      'DeleteTab',
      'UpdateFavoriteQuery',
      'UpdateQueryHistory',
      'UpdateTab'
    ],
    List: [
      'DescribeFavoriteQueries',
      'DescribeQueryHistory',
      'DescribeTabs'
    ],
    Read: [
      'GetQueryString'
    ]
  };
}
