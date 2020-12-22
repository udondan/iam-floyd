import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [rds-data](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrdsdataapi.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class RdsData extends PolicyStatement {
  public servicePrefix = 'rds-data';

  /**
   * Statement provider for service [rds-data](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrdsdataapi.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to run a batch SQL statement over an array of data
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BatchExecuteStatement.html
   */
  public toBatchExecuteStatement() {
    this.to('rds-data:BatchExecuteStatement');
    return this;
  }

  /**
   * Grants permission to start a SQL transaction
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BeginTransaction.html
   */
  public toBeginTransaction() {
    this.to('rds-data:BeginTransaction');
    return this;
  }

  /**
   * Grants permission to end a SQL transaction started with the BeginTransaction operation and commits the changes
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - rds-data:BeginTransaction
   *
   * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_CommitTransaction.html
   */
  public toCommitTransaction() {
    this.to('rds-data:CommitTransaction');
    return this;
  }

  /**
   * Grants permission to run one or more SQL statements. This operation is deprecated. Use the BatchExecuteStatement or ExecuteStatement operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteSql.html
   */
  public toExecuteSql() {
    this.to('rds-data:ExecuteSql');
    return this;
  }

  /**
   * Grants permission to run a SQL statement against a database
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteStatement.html
   */
  public toExecuteStatement() {
    this.to('rds-data:ExecuteStatement');
    return this;
  }

  /**
   * Grants permission to perform a rollback of a transaction. Rolling back a transaction cancels its changes
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - rds-data:BeginTransaction
   *
   * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_RollbackTransaction.html
   */
  public toRollbackTransaction() {
    this.to('rds-data:RollbackTransaction');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BatchExecuteStatement",
      "BeginTransaction",
      "CommitTransaction",
      "ExecuteSql",
      "ExecuteStatement",
      "RollbackTransaction"
    ]
  };
}
