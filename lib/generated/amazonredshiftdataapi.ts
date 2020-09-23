import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [redshift-data](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonredshiftdataapi.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class RedshiftData extends PolicyStatement {
  public servicePrefix = 'redshift-data';
  protected actionList: Actions = {
    "CancelStatement": {
      "url": "https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_CancelStatement.html",
      "description": "Grants permission to cancel a running query",
      "accessLevel": "Write"
    },
    "DescribeStatement": {
      "url": "https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_DescribeStatement.html",
      "description": "Grants permission to retrieve detailed information about a statement execution",
      "accessLevel": "Read"
    },
    "DescribeTable": {
      "url": "https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_DescribeTable.html",
      "description": "Grants permission to retrieve metadata about a particular table",
      "accessLevel": "Read"
    },
    "ExecuteStatement": {
      "url": "https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ExecuteStatement.html",
      "description": "Grants permission to execute a query",
      "accessLevel": "Write"
    },
    "GetStatementResult": {
      "url": "https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_GetStatementResult.html",
      "description": "Grants permission to fetch the result of a query",
      "accessLevel": "Read"
    },
    "ListDatabases": {
      "url": "https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListDatabases.html",
      "description": "Grants permission to list databases for a given cluster",
      "accessLevel": "List"
    },
    "ListSchemas": {
      "url": "https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListSchemas.html",
      "description": "Grants permission to list schemas for a given cluster",
      "accessLevel": "List"
    },
    "ListStatements": {
      "url": "https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListStatements.html",
      "description": "Grants permission to list queries for a given principal",
      "accessLevel": "List"
    },
    "ListTables": {
      "url": "https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListTables.html",
      "description": "Grants permission to list tables for a given cluster",
      "accessLevel": "List"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [redshift-data](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonredshiftdataapi.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a running query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_CancelStatement.html
   */
  public toCancelStatement() {
    this.add('redshift-data:CancelStatement');
    return this;
  }

  /**
   * Grants permission to retrieve detailed information about a statement execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_DescribeStatement.html
   */
  public toDescribeStatement() {
    this.add('redshift-data:DescribeStatement');
    return this;
  }

  /**
   * Grants permission to retrieve metadata about a particular table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_DescribeTable.html
   */
  public toDescribeTable() {
    this.add('redshift-data:DescribeTable');
    return this;
  }

  /**
   * Grants permission to execute a query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ExecuteStatement.html
   */
  public toExecuteStatement() {
    this.add('redshift-data:ExecuteStatement');
    return this;
  }

  /**
   * Grants permission to fetch the result of a query
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_GetStatementResult.html
   */
  public toGetStatementResult() {
    this.add('redshift-data:GetStatementResult');
    return this;
  }

  /**
   * Grants permission to list databases for a given cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListDatabases.html
   */
  public toListDatabases() {
    this.add('redshift-data:ListDatabases');
    return this;
  }

  /**
   * Grants permission to list schemas for a given cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListSchemas.html
   */
  public toListSchemas() {
    this.add('redshift-data:ListSchemas');
    return this;
  }

  /**
   * Grants permission to list queries for a given principal
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListStatements.html
   */
  public toListStatements() {
    this.add('redshift-data:ListStatements');
    return this;
  }

  /**
   * Grants permission to list tables for a given cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListTables.html
   */
  public toListTables() {
    this.add('redshift-data:ListTables');
    return this;
  }
}
