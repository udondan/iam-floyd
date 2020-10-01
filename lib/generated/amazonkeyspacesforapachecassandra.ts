import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [cassandra](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkeyspacesforapachecassandra.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cassandra extends PolicyStatement {
  public servicePrefix = 'cassandra';

  /**
   * Statement provider for service [cassandra](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkeyspacesforapachecassandra.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
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
    this.to('cassandra:Alter');
    return this;
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
    this.to('cassandra:Create');
    return this;
  }

  /**
   * Grants permission to drop a keyspace or table
   *
   * Access Level: Write
   */
  public toDrop() {
    this.to('cassandra:Drop');
    return this;
  }

  /**
   * Grants permission to INSERT, UPDATE or DELETE data in a table
   *
   * Access Level: Write
   */
  public toModify() {
    this.to('cassandra:Modify');
    return this;
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
    this.to('cassandra:Restore');
    return this;
  }

  /**
   * Grants permission to SELECT data from a table
   *
   * Access Level: Read
   */
  public toSelect() {
    this.to('cassandra:Select');
    return this;
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
    this.to('cassandra:TagResource');
    return this;
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
    this.to('cassandra:UntagResource');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "Alter",
      "Create",
      "Drop",
      "Modify",
      "Restore"
    ],
    "Read": [
      "Select"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onKeyspace(keyspaceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cassandra:${Region}:${Account}:/keyspace/${KeyspaceName}';
    arn = arn.replace('${KeyspaceName}', keyspaceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTable(keyspaceName: string, tableName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cassandra:${Region}:${Account}:/keyspace/${KeyspaceName}/table/${TableName}';
    arn = arn.replace('${KeyspaceName}', keyspaceName);
    arn = arn.replace('${TableName}', tableName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
