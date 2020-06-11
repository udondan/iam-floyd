import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service dbqms
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_databasequerymetadataservice.html
 */
export class Dbqms extends PolicyStatement {
  public servicePrefix = 'dbqms';
  public actions : Actions = {
    "CreateFavoriteQuery": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#CreateFavoriteQuery",
      "description": "Creates a new favorite query",
      "accessLevel": "Write"
    },
    "CreateQueryHistory": {
      "url": "",
      "description": "Add a query to the history",
      "accessLevel": "Write"
    },
    "DeleteFavoriteQueries": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteFavoriteQueries",
      "description": "Delete saved queries",
      "accessLevel": "Write"
    },
    "DeleteQueryHistory": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteQueryHistory",
      "description": "Delete a historical query",
      "accessLevel": "Write"
    },
    "DescribeFavoriteQueries": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeFavoriteQueries",
      "description": "List saved queries and associated metadata",
      "accessLevel": "List"
    },
    "DescribeQueryHistory": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeQueryHistory",
      "description": "List history of queries that were run",
      "accessLevel": "List"
    },
    "GetQueryString": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#GetQueryString",
      "description": "Retrieve favorite or history query string by id",
      "accessLevel": "Read"
    },
    "UpdateFavoriteQuery": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateFavoriteQuery",
      "description": "Update saved query and description",
      "accessLevel": "Write"
    },
    "UpdateQueryHistory": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateQueryHistory",
      "description": "Update the query history",
      "accessLevel": "Write"
    }
  };

  /**
   * Creates a new favorite query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#CreateFavoriteQuery
   */
  public createFavoriteQuery () {
    this.add('dbqms:CreateFavoriteQuery');
    return this;
  }

  /**
   * Add a query to the history
   *
   * Access Level: Write
   *
   *
   */
  public createQueryHistory () {
    this.add('dbqms:CreateQueryHistory');
    return this;
  }

  /**
   * Delete saved queries
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteFavoriteQueries
   */
  public deleteFavoriteQueries () {
    this.add('dbqms:DeleteFavoriteQueries');
    return this;
  }

  /**
   * Delete a historical query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteQueryHistory
   */
  public deleteQueryHistory () {
    this.add('dbqms:DeleteQueryHistory');
    return this;
  }

  /**
   * List saved queries and associated metadata
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeFavoriteQueries
   */
  public describeFavoriteQueries () {
    this.add('dbqms:DescribeFavoriteQueries');
    return this;
  }

  /**
   * List history of queries that were run
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeQueryHistory
   */
  public describeQueryHistory () {
    this.add('dbqms:DescribeQueryHistory');
    return this;
  }

  /**
   * Retrieve favorite or history query string by id
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#GetQueryString
   */
  public getQueryString () {
    this.add('dbqms:GetQueryString');
    return this;
  }

  /**
   * Update saved query and description
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateFavoriteQuery
   */
  public updateFavoriteQuery () {
    this.add('dbqms:UpdateFavoriteQuery');
    return this;
  }

  /**
   * Update the query history
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateQueryHistory
   */
  public updateQueryHistory () {
    this.add('dbqms:UpdateQueryHistory');
    return this;
  }
}
