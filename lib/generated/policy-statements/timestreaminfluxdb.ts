import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [timestream-influxdb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontimestreaminfluxdb.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class TimestreamInfluxdb extends PolicyStatement {
  public servicePrefix = 'timestream-influxdb';

  /**
   * Statement provider for service [timestream-influxdb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontimestreaminfluxdb.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new Timestream InfluxDB instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_CreateDbInstance.html
   */
  public toCreateDbInstance() {
    return this.to('CreateDbInstance');
  }

  /**
   * Grants permission to create a new Timestream InfluxDB parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_CreateDbParameterGroup.html
   */
  public toCreateDbParameterGroup() {
    return this.to('CreateDbParameterGroup');
  }

  /**
   * Grants permission to delete a Timestream InfluxDB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_DeleteDbInstance.html
   */
  public toDeleteDbInstance() {
    return this.to('DeleteDbInstance');
  }

  /**
   * Grants permission to get information about a Timestream InfluxDB instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_GetDbInstance.html
   */
  public toGetDbInstance() {
    return this.to('GetDbInstance');
  }

  /**
   * Grants permission to get information about a Timestream InfluxDB parameter group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_GetDbParameterGroup.html
   */
  public toGetDbParameterGroup() {
    return this.to('GetDbParameterGroup');
  }

  /**
   * Grants permission to list information about all Timestream InfluxDB instances in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_ListDbInstances.html
   */
  public toListDbInstances() {
    return this.to('ListDbInstances');
  }

  /**
   * Grants permission to list information about all Timestream InfluxDB parameter groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_ListDbParameterGroups.html
   */
  public toListDbParameterGroups() {
    return this.to('ListDbParameterGroups');
  }

  /**
   * Grants permission to list tags for a Timestream InfluxDB resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to tag a Timestream InfluxDB resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a Timestream InfluxDB resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a Timestream InfluxDB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_UpdateDbInstance.html
   */
  public toUpdateDbInstance() {
    return this.to('UpdateDbInstance');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateDbInstance',
      'CreateDbParameterGroup',
      'DeleteDbInstance',
      'UpdateDbInstance'
    ],
    Read: [
      'GetDbInstance',
      'GetDbParameterGroup',
      'ListTagsForResource'
    ],
    List: [
      'ListDbInstances',
      'ListDbParameterGroups'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type db-instance to the statement
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_DbInstanceSummary.html
   *
   * @param dbInstanceIdentifier - Identifier for the dbInstanceIdentifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDbInstance(dbInstanceIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:timestream-influxdb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:db-instance/${ dbInstanceIdentifier }`);
  }

  /**
   * Adds a resource of type db-parameter-group to the statement
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_DbParameterGroupSummary.html
   *
   * @param dbParameterGroupIdentifier - Identifier for the dbParameterGroupIdentifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDbParameterGroup(dbParameterGroupIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:timestream-influxdb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:db-parameter-group/${ dbParameterGroupIdentifier }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateDbInstance()
   * - .toCreateDbParameterGroup()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - db-instance
   * - db-parameter-group
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateDbInstance()
   * - .toCreateDbParameterGroup()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
