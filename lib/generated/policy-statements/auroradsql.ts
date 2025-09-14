import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [dsql](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonauroradsql.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dsql extends PolicyStatement {
  public servicePrefix = 'dsql';

  /**
   * Statement provider for service [dsql](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonauroradsql.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add a peer cluster to a multi-Region cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - dsql:PutMultiRegionProperties
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_CreateCluster.html
   */
  public toAddPeerCluster() {
    return this.to('AddPeerCluster');
  }

  /**
   * Grants permission to create new clusters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifWitnessRegion()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_CreateCluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Grants permission to connect to the database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/userguide/accessing-sql-clients.html
   */
  public toDbConnect() {
    return this.to('DbConnect');
  }

  /**
   * Grants permission to connect to the database with admin role. Connecting with any other role requires DbConnect permission
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/userguide/accessing-sql-clients.html
   */
  public toDbConnectAdmin() {
    return this.to('DbConnectAdmin');
  }

  /**
   * Grants permission to delete a cluster and all of its data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_DeleteCluster.html
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * Grants permission to get the status of an Aurora DSQL cluster backup job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/userguide/backup-aurora-dsql.html
   */
  public toGetBackupJob() {
    return this.to('GetBackupJob');
  }

  /**
   * Grants permission to get information about a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_GetCluster.html
   */
  public toGetCluster() {
    return this.to('GetCluster');
  }

  /**
   * Grants permission to get the status of an Aurora DSQL cluster restore job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/userguide/backup-aurora-dsql.html
   */
  public toGetRestoreJob() {
    return this.to('GetRestoreJob');
  }

  /**
   * Grants permission to retrieve the VPC endpoint service name for a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_GetVpcEndpointServiceName.html
   */
  public toGetVpcEndpointServiceName() {
    return this.to('GetVpcEndpointServiceName');
  }

  /**
   * Grants permission to inject errors in targeted clusters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFisActionId()
   * - .ifFisTargetArns()
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html
   */
  public toInjectError() {
    return this.to('InjectError');
  }

  /**
   * Grants permission to retrieve a list of clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_ListClusters.html
   */
  public toListClusters() {
    return this.to('ListClusters');
  }

  /**
   * Grants permission to list all tags on an Aurora DSQL resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to update multi-Region properties of a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_CreateCluster.html
   */
  public toPutMultiRegionProperties() {
    return this.to('PutMultiRegionProperties');
  }

  /**
   * Grants permission to configure and update the witness Region of a multi-Region cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWitnessRegion()
   *
   * Dependent actions:
   * - dsql:PutMultiRegionProperties
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_CreateCluster.html
   */
  public toPutWitnessRegion() {
    return this.to('PutWitnessRegion');
  }

  /**
   * Grants permission to remove a peer cluster from a multi-Region cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - dsql:PutMultiRegionProperties
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_UpdateCluster.html
   */
  public toRemovePeerCluster() {
    return this.to('RemovePeerCluster');
  }

  /**
   * Grants permission to start a backup job for an Aurora DSQL cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/userguide/backup-aurora-dsql.html
   */
  public toStartBackupJob() {
    return this.to('StartBackupJob');
  }

  /**
   * Grants permission to start a restore job for an Aurora DSQL cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - dsql:CreateCluster
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/userguide/backup-aurora-dsql.html
   */
  public toStartRestoreJob() {
    return this.to('StartRestoreJob');
  }

  /**
   * Grants permission to stop a backup job for an Aurora DSQL cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/userguide/backup-aurora-dsql.html
   */
  public toStopBackupJob() {
    return this.to('StopBackupJob');
  }

  /**
   * Grants permission to stop a restore job for an Aurora DSQL Cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/userguide/backup-aurora-dsql.html
   */
  public toStopRestoreJob() {
    return this.to('StopRestoreJob');
  }

  /**
   * Grants permission to add tags to Aurora DSQL resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from Aurora DSQL resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify cluster attributes
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWitnessRegion()
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_UpdateCluster.html
   */
  public toUpdateCluster() {
    return this.to('UpdateCluster');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddPeerCluster',
      'CreateCluster',
      'DbConnect',
      'DbConnectAdmin',
      'DeleteCluster',
      'InjectError',
      'PutMultiRegionProperties',
      'PutWitnessRegion',
      'RemovePeerCluster',
      'StartBackupJob',
      'StartRestoreJob',
      'StopBackupJob',
      'StopRestoreJob',
      'UpdateCluster'
    ],
    Read: [
      'GetBackupJob',
      'GetCluster',
      'GetRestoreJob',
      'GetVpcEndpointServiceName',
      'ListTagsForResource'
    ],
    List: [
      'ListClusters'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Cluster to the statement
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/userguide/what-is-aurora-dsql.html
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dsql:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cluster/${ identifier }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateCluster()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - Cluster
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
   * - .toCreateCluster()
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
   * Filters access by the ID of an AWS FIS action
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html
   *
   * Applies to actions:
   * - .toInjectError()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFisActionId(value: string | string[], operator?: Operator | string) {
    return this.if(`FisActionId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ARN of an AWS FIS target
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html
   *
   * Applies to actions:
   * - .toInjectError()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifFisTargetArns(value: string | string[], operator?: Operator | string) {
    return this.if(`FisTargetArns`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the witness region of multi-Region clusters
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/userguide/using-iam-condition-keys.html#using-iam-condition-keys-create-mr-cluster-witness
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toPutWitnessRegion()
   * - .toUpdateCluster()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWitnessRegion(value: string | string[], operator?: Operator | string) {
    return this.if(`WitnessRegion`, value, operator ?? 'StringLike');
  }
}
