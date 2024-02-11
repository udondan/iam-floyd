import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toAlter() {
    return this.to('Alter');
  }

  /**
   * Grants permission to alter a multiregion keyspace or table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toAlterMultiRegionResource() {
    return this.to('AlterMultiRegionResource');
  }

  /**
   * Grants permission to create a keyspace or table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toCreate() {
    return this.to('Create');
  }

  /**
   * Grants permission to create a multiregion keyspace or table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toCreateMultiRegionResource() {
    return this.to('CreateMultiRegionResource');
  }

  /**
   * Grants permission to drop a keyspace or table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toDrop() {
    return this.to('Drop');
  }

  /**
   * Grants permission to drop a multiregion keyspace or table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toDropMultiRegionResource() {
    return this.to('DropMultiRegionResource');
  }

  /**
   * Grants permission to INSERT, UPDATE or DELETE data in a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toModify() {
    return this.to('Modify');
  }

  /**
   * Grants permission to INSERT, UPDATE or DELETE data in a multiregion table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toModifyMultiRegionResource() {
    return this.to('ModifyMultiRegionResource');
  }

  /**
   * Grants permission to restore table from a backup
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toRestore() {
    return this.to('Restore');
  }

  /**
   * Grants permission to restore multiregion table from a backup
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toRestoreMultiRegionTable() {
    return this.to('RestoreMultiRegionTable');
  }

  /**
   * Grants permission to SELECT data from a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toSelect() {
    return this.to('Select');
  }

  /**
   * Grants permission to SELECT data from a multiregion table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toSelectMultiRegionResource() {
    return this.to('SelectMultiRegionResource');
  }

  /**
   * Grants permission to tag a multiregion keyspace or table
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toTagMultiRegionResource() {
    return this.to('TagMultiRegionResource');
  }

  /**
   * Grants permission to tag a keyspace or table
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a multiregion keyspace or table
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toUnTagMultiRegionResource() {
    return this.to('UnTagMultiRegionResource');
  }

  /**
   * Grants permission to untag a keyspace or table
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to UPDATE the partitioner in a system table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/
   */
  public toUpdatePartitioner() {
    return this.to('UpdatePartitioner');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'Alter',
      'AlterMultiRegionResource',
      'Create',
      'CreateMultiRegionResource',
      'Drop',
      'DropMultiRegionResource',
      'Modify',
      'ModifyMultiRegionResource',
      'Restore',
      'RestoreMultiRegionTable',
      'UpdatePartitioner'
    ],
    Read: [
      'Select',
      'SelectMultiRegionResource'
    ],
    Tagging: [
      'TagMultiRegionResource',
      'TagResource',
      'UnTagMultiRegionResource',
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

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAlter()
   * - .toAlterMultiRegionResource()
   * - .toCreate()
   * - .toCreateMultiRegionResource()
   * - .toRestore()
   * - .toRestoreMultiRegionTable()
   * - .toTagMultiRegionResource()
   * - .toTagResource()
   * - .toUnTagMultiRegionResource()
   * - .toUntagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - keyspace
   * - table
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAlter()
   * - .toAlterMultiRegionResource()
   * - .toCreate()
   * - .toCreateMultiRegionResource()
   * - .toRestore()
   * - .toRestoreMultiRegionTable()
   * - .toTagMultiRegionResource()
   * - .toTagResource()
   * - .toUnTagMultiRegionResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
