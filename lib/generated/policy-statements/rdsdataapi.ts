import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to run a batch SQL statement over an array of data
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BatchExecuteStatement.html
   */
  public toBatchExecuteStatement() {
    return this.to('BatchExecuteStatement');
  }

  /**
   * Grants permission to start a SQL transaction
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BeginTransaction.html
   */
  public toBeginTransaction() {
    return this.to('BeginTransaction');
  }

  /**
   * Grants permission to end a SQL transaction started with the BeginTransaction operation and commits the changes
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - rds-data:BeginTransaction
   *
   * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_CommitTransaction.html
   */
  public toCommitTransaction() {
    return this.to('CommitTransaction');
  }

  /**
   * Grants permission to run one or more SQL statements. This operation is deprecated. Use the BatchExecuteStatement or ExecuteStatement operation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteSql.html
   */
  public toExecuteSql() {
    return this.to('ExecuteSql');
  }

  /**
   * Grants permission to run a SQL statement against a database
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteStatement.html
   */
  public toExecuteStatement() {
    return this.to('ExecuteStatement');
  }

  /**
   * Grants permission to perform a rollback of a transaction. Rolling back a transaction cancels its changes
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - rds-data:BeginTransaction
   *
   * https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_RollbackTransaction.html
   */
  public toRollbackTransaction() {
    return this.to('RollbackTransaction');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchExecuteStatement',
      'BeginTransaction',
      'CommitTransaction',
      'ExecuteSql',
      'ExecuteStatement',
      'RollbackTransaction'
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html
   *
   * @param dbClusterInstanceName - Identifier for the dbClusterInstanceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   */
  public onCluster(dbClusterInstanceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:rds:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cluster:${ dbClusterInstanceName }`);
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toBatchExecuteStatement()
   * - .toBeginTransaction()
   * - .toCommitTransaction()
   * - .toExecuteSql()
   * - .toExecuteStatement()
   * - .toRollbackTransaction()
   *
   * Applies to resource types:
   * - cluster
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toBatchExecuteStatement()
   * - .toBeginTransaction()
   * - .toCommitTransaction()
   * - .toExecuteSql()
   * - .toExecuteStatement()
   * - .toRollbackTransaction()
   *
   * Applies to resource types:
   * - cluster
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
