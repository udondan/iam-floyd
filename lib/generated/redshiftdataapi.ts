import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to execute multiple queries under a single connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_BatchExecuteStatement.html
   */
  public toBatchExecuteStatement() {
    return this.to('BatchExecuteStatement');
  }

  /**
   * Grants permission to cancel a running query
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStatementOwnerIamUserid()
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
   * Possible conditions:
   * - .ifStatementOwnerIamUserid()
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
   * Possible conditions:
   * - .ifStatementOwnerIamUserid()
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_GetStatementResult.html
   */
  public toGetStatementResult() {
    return this.to('GetStatementResult');
  }

  /**
   * Grants permission to list databases for a given cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListDatabases.html
   */
  public toListDatabases() {
    return this.to('ListDatabases');
  }

  /**
   * Grants permission to list schemas for a given cluster
   *
   * Access Level: Read
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
   * Possible conditions:
   * - .ifStatementOwnerIamUserid()
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
    Write: [
      'BatchExecuteStatement',
      'CancelStatement',
      'ExecuteStatement'
    ],
    Read: [
      'DescribeStatement',
      'DescribeTable',
      'GetStatementResult',
      'ListDatabases',
      'ListSchemas'
    ],
    List: [
      'ListStatements',
      'ListTables'
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(clusterName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:redshift:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cluster:${ clusterName }`);
  }

  /**
   * Adds a resource of type workgroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-serverless.html
   *
   * @param workgroupId - Identifier for the workgroupId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkgroup(workgroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:redshift-serverless:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workgroup/${ workgroupId }`);
  }

  /**
   * Filters access by tag-value associated with the resource
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to resource types:
   * - cluster
   * - workgroup
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by statement owner iam userid
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toCancelStatement()
   * - .toDescribeStatement()
   * - .toGetStatementResult()
   * - .toListStatements()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifStatementOwnerIamUserid(value: string | string[], operator?: Operator | string) {
    return this.if(`statement-owner-iam-userid`, value, operator ?? 'StringLike');
  }
}
