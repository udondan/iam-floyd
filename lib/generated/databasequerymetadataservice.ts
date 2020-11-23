import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [dbqms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_databasequerymetadataservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dbqms extends PolicyStatement {
  public servicePrefix = 'dbqms';

  /**
   * Statement provider for service [dbqms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_databasequerymetadataservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a new favorite query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#CreateFavoriteQuery
   */
  public toCreateFavoriteQuery() {
    this.to('CreateFavoriteQuery');
    return this;
  }

  /**
   * Add a query to the history
   *
   * Access Level: Write
   */
  public toCreateQueryHistory() {
    this.to('CreateQueryHistory');
    return this;
  }

  /**
   * Delete saved queries
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteFavoriteQueries
   */
  public toDeleteFavoriteQueries() {
    this.to('DeleteFavoriteQueries');
    return this;
  }

  /**
   * Delete a historical query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteQueryHistory
   */
  public toDeleteQueryHistory() {
    this.to('DeleteQueryHistory');
    return this;
  }

  /**
   * List saved queries and associated metadata
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeFavoriteQueries
   */
  public toDescribeFavoriteQueries() {
    this.to('DescribeFavoriteQueries');
    return this;
  }

  /**
   * List history of queries that were run
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeQueryHistory
   */
  public toDescribeQueryHistory() {
    this.to('DescribeQueryHistory');
    return this;
  }

  /**
   * Retrieve favorite or history query string by id
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#GetQueryString
   */
  public toGetQueryString() {
    this.to('GetQueryString');
    return this;
  }

  /**
   * Update saved query and description
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateFavoriteQuery
   */
  public toUpdateFavoriteQuery() {
    this.to('UpdateFavoriteQuery');
    return this;
  }

  /**
   * Update the query history
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateQueryHistory
   */
  public toUpdateQueryHistory() {
    this.to('UpdateQueryHistory');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateFavoriteQuery",
      "CreateQueryHistory",
      "DeleteFavoriteQueries",
      "DeleteQueryHistory",
      "UpdateFavoriteQuery",
      "UpdateQueryHistory"
    ],
    "List": [
      "DescribeFavoriteQueries",
      "DescribeQueryHistory"
    ],
    "Read": [
      "GetQueryString"
    ]
  };
}
