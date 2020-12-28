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
    return this.to('CreateFavoriteQuery');
  }

  /**
   * Add a query to the history
   *
   * Access Level: Write
   */
  public toCreateQueryHistory() {
    return this.to('CreateQueryHistory');
  }

  /**
   * Delete saved queries
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteFavoriteQueries
   */
  public toDeleteFavoriteQueries() {
    return this.to('DeleteFavoriteQueries');
  }

  /**
   * Delete a historical query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteQueryHistory
   */
  public toDeleteQueryHistory() {
    return this.to('DeleteQueryHistory');
  }

  /**
   * List saved queries and associated metadata
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeFavoriteQueries
   */
  public toDescribeFavoriteQueries() {
    return this.to('DescribeFavoriteQueries');
  }

  /**
   * List history of queries that were run
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeQueryHistory
   */
  public toDescribeQueryHistory() {
    return this.to('DescribeQueryHistory');
  }

  /**
   * Retrieve favorite or history query string by id
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#GetQueryString
   */
  public toGetQueryString() {
    return this.to('GetQueryString');
  }

  /**
   * Update saved query and description
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateFavoriteQuery
   */
  public toUpdateFavoriteQuery() {
    return this.to('UpdateFavoriteQuery');
  }

  /**
   * Update the query history
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateQueryHistory
   */
  public toUpdateQueryHistory() {
    return this.to('UpdateQueryHistory');
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
