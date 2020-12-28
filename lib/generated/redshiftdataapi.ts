import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [redshift-data](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshiftdataapi.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class RedshiftData extends PolicyStatement {
  public servicePrefix = 'redshift-data';

  /**
   * Statement provider for service [redshift-data](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshiftdataapi.html).
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
    return this.to('CancelStatement');
  }

  /**
   * Grants permission to retrieve detailed information about a statement execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_DescribeStatement.html
   */
  public toDescribeStatement() {
    return this.to('DescribeStatement');
  }

  /**
   * Grants permission to retrieve metadata about a particular table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_DescribeTable.html
   */
  public toDescribeTable() {
    return this.to('DescribeTable');
  }

  /**
   * Grants permission to execute a query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ExecuteStatement.html
   */
  public toExecuteStatement() {
    return this.to('ExecuteStatement');
  }

  /**
   * Grants permission to fetch the result of a query
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_GetStatementResult.html
   */
  public toGetStatementResult() {
    return this.to('GetStatementResult');
  }

  /**
   * Grants permission to list databases for a given cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListDatabases.html
   */
  public toListDatabases() {
    return this.to('ListDatabases');
  }

  /**
   * Grants permission to list schemas for a given cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListSchemas.html
   */
  public toListSchemas() {
    return this.to('ListSchemas');
  }

  /**
   * Grants permission to list queries for a given principal
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListStatements.html
   */
  public toListStatements() {
    return this.to('ListStatements');
  }

  /**
   * Grants permission to list tables for a given cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListTables.html
   */
  public toListTables() {
    return this.to('ListTables');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelStatement",
      "ExecuteStatement"
    ],
    "Read": [
      "DescribeStatement",
      "DescribeTable",
      "GetStatementResult"
    ],
    "List": [
      "ListDatabases",
      "ListSchemas",
      "ListStatements",
      "ListTables"
    ]
  };
}
