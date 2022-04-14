import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [cassandra](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkeyspacesforapachecassandra.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cassandra extends PolicyStatement {
  public servicePrefix = 'cassandra';

  /**
   * Statement provider for service [cassandra](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkeyspacesforapachecassandra.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to alter a keyspace or table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toAlter() {
    return this.to('Alter');
  }

  /**
   * Grants permission to create a keyspace or table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toCreate() {
    return this.to('Create');
  }

  /**
   * Grants permission to drop a keyspace or table
   *
   * Access Level: Write
   */
  public toDrop() {
    return this.to('Drop');
  }

  /**
   * Grants permission to INSERT, UPDATE or DELETE data in a table
   *
   * Access Level: Write
   */
  public toModify() {
    return this.to('Modify');
  }

  /**
   * Grants permission to restore table from a backup
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toRestore() {
    return this.to('Restore');
  }

  /**
   * Grants permission to SELECT data from a table
   *
   * Access Level: Read
   */
  public toSelect() {
    return this.to('Select');
  }

  /**
   * Grants permission to tag a keyspace or table
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a keyspace or table
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'Alter',
      'Create',
      'Drop',
      'Modify',
      'Restore'
    ],
    Read: [
      'Select'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type keyspace to the statement
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/what-is.html
   *
   * @param keyspaceName - Identifier for the keyspaceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onKeyspace(keyspaceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cassandra.defaultPartition }:cassandra:${ region || '*' }:${ account || '*' }:/keyspace/${ keyspaceName }`);
  }

  /**
   * Adds a resource of type table to the statement
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/what-is.html
   *
   * @param keyspaceName - Identifier for the keyspaceName.
   * @param tableName - Identifier for the tableName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTable(keyspaceName: string, tableName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cassandra.defaultPartition }:cassandra:${ region || '*' }:${ account || '*' }:/keyspace/${ keyspaceName }/table/${ tableName }`);
  }
}
