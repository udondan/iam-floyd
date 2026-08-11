import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [timestream-influxdb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_timestream-influxdb.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class TimestreamInfluxdb extends PolicyStatement {
  public servicePrefix = 'timestream-influxdb';

  /**
   * Statement provider for service [timestream-influxdb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_timestream-influxdb.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a Timestream InfluxDB Backup for a DbInstance or DbCluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_CreateDbBackup.html
   */
  public toCreateDbBackup() {
    return this.to('CreateDbBackup');
  }

  /**
   * Grants permission to create a new Timestream InfluxDB Cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_CreateDbCluster.html
   */
  public toCreateDbCluster() {
    return this.to('CreateDbCluster');
  }

  /**
   * Grants permission to create a new Timestream InfluxDB instance
   *
   * Access Level: Write
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
   * Grants permission to delete a Timestream InfluxDB backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_DeleteDbBackup.html
   */
  public toDeleteDbBackup() {
    return this.to('DeleteDbBackup');
  }

  /**
   * Grants permission to delete a Timestream InfluxDB Cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_DeleteDbCluster.html
   */
  public toDeleteDbCluster() {
    return this.to('DeleteDbCluster');
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
   * Grants permission to get information about a Timestream InfluxDB Backup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_GetDbBackup.html
   */
  public toGetDbBackup() {
    return this.to('GetDbBackup');
  }

  /**
   * Grants permission to get information about a Timestream InfluxDB Cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_GetDbCluster.html
   */
  public toGetDbCluster() {
    return this.to('GetDbCluster');
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
   * Grants permission to list information about all Timestream InfluxDB backups in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_ListDbBackups.html
   */
  public toListDbBackups() {
    return this.to('ListDbBackups');
  }

  /**
   * Grants permission to list information about all Timestream InfluxDB clusters in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_ListDbClusters.html
   */
  public toListDbClusters() {
    return this.to('ListDbClusters');
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
   * Grants permission to list information about all Timestream InfluxDB Instances belonging to a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_ListDbInstancesForCluster.html
   */
  public toListDbInstancesForCluster() {
    return this.to('ListDbInstancesForCluster');
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
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to reboot a Timestream InfluxDB Cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_RebootDbCluster.html
   */
  public toRebootDbCluster() {
    return this.to('RebootDbCluster');
  }

  /**
   * Grants permission to reboot a Timestream InfluxDB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_RebootDbInstance.html
   */
  public toRebootDbInstance() {
    return this.to('RebootDbInstance');
  }

  /**
   * Grants permission to restore from a Timestream InfluxDB backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_RestoreFromDbBackup.html
   */
  public toRestoreFromDbBackup() {
    return this.to('RestoreFromDbBackup');
  }

  /**
   * Grants permission to tag a Timestream InfluxDB resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a Timestream InfluxDB resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a Timestream InfluxDB Cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_UpdateDbCluster.html
   */
  public toUpdateDbCluster() {
    return this.to('UpdateDbCluster');
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
      'CreateDbBackup',
      'CreateDbCluster',
      'CreateDbInstance',
      'CreateDbParameterGroup',
      'DeleteDbBackup',
      'DeleteDbCluster',
      'DeleteDbInstance',
      'RebootDbCluster',
      'RebootDbInstance',
      'RestoreFromDbBackup',
      'TagResource',
      'UntagResource',
      'UpdateDbCluster',
      'UpdateDbInstance'
    ],
    Read: [
      'GetDbBackup',
      'GetDbCluster',
      'GetDbInstance',
      'GetDbParameterGroup',
      'ListDbInstancesForCluster',
      'ListTagsForResource'
    ],
    List: [
      'ListDbBackups',
      'ListDbClusters',
      'ListDbInstances',
      'ListDbParameterGroups'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type db-backup to the statement
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_DbBackupSummary.html
   *
   * @param dbBackupId - Identifier for the dbBackupId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDbBackup(dbBackupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:timestream-influxdb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:db-backup/${ dbBackupId }`);
  }

  /**
   * Adds a resource of type db-cluster to the statement
   *
   * https://docs.aws.amazon.com/ts-influxdb/latest/ts-influxdb-api/API_DbClusterSummary.html
   *
   * @param dbClusterId - Identifier for the dbClusterId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDbCluster(dbClusterId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:timestream-influxdb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:db-cluster/${ dbClusterId }`);
  }

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
   * - .toCreateDbBackup()
   * - .toCreateDbCluster()
   * - .toCreateDbInstance()
   * - .toCreateDbParameterGroup()
   * - .toRestoreFromDbBackup()
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
   * - .toCreateDbBackup()
   * - .toCreateDbCluster()
   * - .toCreateDbInstance()
   * - .toDeleteDbBackup()
   * - .toDeleteDbCluster()
   * - .toDeleteDbInstance()
   * - .toGetDbBackup()
   * - .toGetDbCluster()
   * - .toGetDbInstance()
   * - .toGetDbParameterGroup()
   * - .toListDbInstancesForCluster()
   * - .toListTagsForResource()
   * - .toRebootDbCluster()
   * - .toRebootDbInstance()
   * - .toRestoreFromDbBackup()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateDbCluster()
   * - .toUpdateDbInstance()
   *
   * Applies to resource types:
   * - db-backup
   * - db-cluster
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
   * - .toCreateDbBackup()
   * - .toCreateDbCluster()
   * - .toCreateDbInstance()
   * - .toCreateDbParameterGroup()
   * - .toRestoreFromDbBackup()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the restore mode specified in the request
   *
   * https://docs.aws.amazon.com/timestream/latest/developerguide/security-iam.html
   *
   * Applies to actions:
   * - .toRestoreFromDbBackup()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRestoreMode(value: string | string[], operator?: Operator | string) {
    return this.if(`RestoreMode`, value, operator ?? 'StringLike');
  }
}
