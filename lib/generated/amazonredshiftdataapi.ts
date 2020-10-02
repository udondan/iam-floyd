import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [redshift-data](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonredshiftdataapi.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class RedshiftData extends PolicyStatement {
  public servicePrefix = 'redshift-data';

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
    this.to('redshift-data:CancelStatement');
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
    this.to('redshift-data:DescribeStatement');
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
    this.to('redshift-data:DescribeTable');
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
    this.to('redshift-data:ExecuteStatement');
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
    this.to('redshift-data:GetStatementResult');
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
    this.to('redshift-data:ListDatabases');
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
    this.to('redshift-data:ListSchemas');
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
    this.to('redshift-data:ListStatements');
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
    this.to('redshift-data:ListTables');
    return this;
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
