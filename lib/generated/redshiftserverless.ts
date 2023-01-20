import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [redshift-serverless](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshiftserverless.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class RedshiftServerless extends PolicyStatement {
  public servicePrefix = 'redshift-serverless';

  /**
   * Statement provider for service [redshift-serverless](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshiftserverless.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to convert a recovery point to a snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ConvertRecoveryPointToSnapshot.html
   */
  public toConvertRecoveryPointToSnapshot() {
    return this.to('ConvertRecoveryPointToSnapshot');
  }

  /**
   * Grants permission to create an Amazon Redshift Serverless managed VPC endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateEndpointAccess.html
   */
  public toCreateEndpointAccess() {
    return this.to('CreateEndpointAccess');
  }

  /**
   * Grants permission to create an Amazon Redshift Serverless namespace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateNamespace.html
   */
  public toCreateNamespace() {
    return this.to('CreateNamespace');
  }

  /**
   * Grants permission to create a snapshot of all databases in a namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateSnapshot.html
   */
  public toCreateSnapshot() {
    return this.to('CreateSnapshot');
  }

  /**
   * Grants permission to create a usage limit for a specified Amazon Redshift Serverless usage type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateUsageLimit.html
   */
  public toCreateUsageLimit() {
    return this.to('CreateUsageLimit');
  }

  /**
   * Grants permission to create a workgroup in Amazon Redshift Serverless
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateWorkgroup.html
   */
  public toCreateWorkgroup() {
    return this.to('CreateWorkgroup');
  }

  /**
   * Grants permission to delete an Amazon Redshift Serverless managed VPC endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteEndpointAccess.html
   */
  public toDeleteEndpointAccess() {
    return this.to('DeleteEndpointAccess');
  }

  /**
   * Grants permission to delete a namespace from Amazon Redshift Serverless
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteNamespace.html
   */
  public toDeleteNamespace() {
    return this.to('DeleteNamespace');
  }

  /**
   * Grants permission to delete the specified resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a snapshot from Amazon Redshift Serverless
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteSnapshot.html
   */
  public toDeleteSnapshot() {
    return this.to('DeleteSnapshot');
  }

  /**
   * Grants permission to delete a usage limit from Amazon Redshift Serverless
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteUsageLimit.html
   */
  public toDeleteUsageLimit() {
    return this.to('DeleteUsageLimit');
  }

  /**
   * Grants permission to delete a workgroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteWorkgroup.html
   */
  public toDeleteWorkgroup() {
    return this.to('DeleteWorkgroup');
  }

  /**
   * Grants permission to get a database user name and temporary password with temporary authorization to log on to Amazon Redshift Serverless
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetCredentials.html
   */
  public toGetCredentials() {
    return this.to('GetCredentials');
  }

  /**
   * Grants permission to create an Amazon Redshift Serverless managed VPC endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetEndpointAccess.html
   */
  public toGetEndpointAccess() {
    return this.to('GetEndpointAccess');
  }

  /**
   * Grants permission to get information about a namespace in Amazon Redshift Serverless
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetNamespace.html
   */
  public toGetNamespace() {
    return this.to('GetNamespace');
  }

  /**
   * Grants permission to get information about a recovery point
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetRecoveryPoint.html
   */
  public toGetRecoveryPoint() {
    return this.to('GetRecoveryPoint');
  }

  /**
   * Grants permission to get a resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to get information about a specific snapshot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetSnapshot.html
   */
  public toGetSnapshot() {
    return this.to('GetSnapshot');
  }

  /**
   * Grants permission to get table restore status about a specific snapshot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetTableRestoreStatus.html
   */
  public toGetTableRestoreStatus() {
    return this.to('GetTableRestoreStatus');
  }

  /**
   * Grants permission to get information about a usage limit in Amazon Redshift Serverless
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetUsageLimit.html
   */
  public toGetUsageLimit() {
    return this.to('GetUsageLimit');
  }

  /**
   * Grants permission to get information about a specific workgroup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetWorkgroup.html
   */
  public toGetWorkgroup() {
    return this.to('GetWorkgroup');
  }

  /**
   * Grants permission to list EndpointAccess objects and relevant information
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListEndpointAccess.html
   */
  public toListEndpointAccess() {
    return this.to('ListEndpointAccess');
  }

  /**
   * Grants permission to list namespaces in Amazon Redshift Serverless
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListNamespaces.html
   */
  public toListNamespaces() {
    return this.to('ListNamespaces');
  }

  /**
   * Grants permission to list an array of recovery points
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListRecoveryPoints.html
   */
  public toListRecoveryPoints() {
    return this.to('ListRecoveryPoints');
  }

  /**
   * Grants permission to list snapshots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListSnapshots.html
   */
  public toListSnapshots() {
    return this.to('ListSnapshots');
  }

  /**
   * Grants permission to list table restore status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListTableRestoreStatus.html
   */
  public toListTableRestoreStatus() {
    return this.to('ListTableRestoreStatus');
  }

  /**
   * Grants permission to list the tags assigned to a resource
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all usage limits within Amazon Redshift Serverless
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListUsageLimits.html
   */
  public toListUsageLimits() {
    return this.to('ListUsageLimits');
  }

  /**
   * Grants permission to list workgroups in Amazon Redshift Serverless
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListWorkgroups.html
   */
  public toListWorkgroups() {
    return this.to('ListWorkgroups');
  }

  /**
   * Grants permission to create or update a resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to restore the data from a recovery point
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_RestoreFromRecoveryPoint.html
   */
  public toRestoreFromRecoveryPoint() {
    return this.to('RestoreFromRecoveryPoint');
  }

  /**
   * Grants permission to restore a namespace from a snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_RestoreFromSnapshot.html
   */
  public toRestoreFromSnapshot() {
    return this.to('RestoreFromSnapshot');
  }

  /**
   * Grants permission to restore a table from a snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_RestoreTableFromSnapshot.html
   */
  public toRestoreTableFromSnapshot() {
    return this.to('RestoreTableFromSnapshot');
  }

  /**
   * Grants permission to assign one or more tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag or set of tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an Amazon Redshift Serverless managed VPC endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateEndpointAccess.html
   */
  public toUpdateEndpointAccess() {
    return this.to('UpdateEndpointAccess');
  }

  /**
   * Grants permission to update a namespace with the specified configuration settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateNamespace.html
   */
  public toUpdateNamespace() {
    return this.to('UpdateNamespace');
  }

  /**
   * Grants permission to update a snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateSnapshot.html
   */
  public toUpdateSnapshot() {
    return this.to('UpdateSnapshot');
  }

  /**
   * Grants permission to update a usage limit in Amazon Redshift Serverless
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateUsageLimit.html
   */
  public toUpdateUsageLimit() {
    return this.to('UpdateUsageLimit');
  }

  /**
   * Grants permission to update an Amazon Redshift Serverless workgroup with the specified configuration settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateWorkgroup.html
   */
  public toUpdateWorkgroup() {
    return this.to('UpdateWorkgroup');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ConvertRecoveryPointToSnapshot',
      'CreateEndpointAccess',
      'CreateNamespace',
      'CreateSnapshot',
      'CreateUsageLimit',
      'CreateWorkgroup',
      'DeleteEndpointAccess',
      'DeleteNamespace',
      'DeleteResourcePolicy',
      'DeleteSnapshot',
      'DeleteUsageLimit',
      'DeleteWorkgroup',
      'GetCredentials',
      'PutResourcePolicy',
      'RestoreFromRecoveryPoint',
      'RestoreFromSnapshot',
      'RestoreTableFromSnapshot',
      'UpdateEndpointAccess',
      'UpdateNamespace',
      'UpdateSnapshot',
      'UpdateUsageLimit',
      'UpdateWorkgroup'
    ],
    Read: [
      'GetEndpointAccess',
      'GetNamespace',
      'GetRecoveryPoint',
      'GetResourcePolicy',
      'GetSnapshot',
      'GetTableRestoreStatus',
      'GetUsageLimit',
      'GetWorkgroup'
    ],
    List: [
      'ListEndpointAccess',
      'ListNamespaces',
      'ListRecoveryPoints',
      'ListSnapshots',
      'ListTableRestoreStatus',
      'ListTagsForResource',
      'ListUsageLimits',
      'ListWorkgroups'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type namespace to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-workgroup-namespace.html
   *
   * @param namespaceId - Identifier for the namespaceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNamespace(namespaceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || RedshiftServerless.defaultPartition }:redshift-serverless:${ region || '*' }:${ account || '*' }:namespace/${ namespaceId }`);
  }

  /**
   * Adds a resource of type snapshot to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html
   *
   * @param snapshotId - Identifier for the snapshotId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSnapshot(snapshotId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || RedshiftServerless.defaultPartition }:redshift-serverless:${ region || '*' }:${ account || '*' }:snapshot/${ snapshotId }`);
  }

  /**
   * Adds a resource of type workgroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-workgroup-namespace.html
   *
   * @param workgroupId - Identifier for the workgroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkgroup(workgroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || RedshiftServerless.defaultPartition }:redshift-serverless:${ region || '*' }:${ account || '*' }:workgroup/${ workgroupId }`);
  }

  /**
   * Adds a resource of type recoveryPoint to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html
   *
   * @param recoveryPointId - Identifier for the recoveryPointId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onRecoveryPoint(recoveryPointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || RedshiftServerless.defaultPartition }:redshift-serverless:${ region || '*' }:${ account || '*' }:recovery-point/${ recoveryPointId }`);
  }

  /**
   * Adds a resource of type endpointAccess to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-connecting.html
   *
   * @param endpointAccessId - Identifier for the endpointAccessId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEndpointAccess(endpointAccessId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || RedshiftServerless.defaultPartition }:redshift-serverless:${ region || '*' }:${ account || '*' }:managedvpcendpoint/${ endpointAccessId }`);
  }

  /**
   * Filters access by the endpoint access identifier
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEndpointAccessId(value: string | string[], operator?: Operator | string) {
    return this.if(`endpointAccessId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the namespace identifier
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifNamespaceId(value: string | string[], operator?: Operator | string) {
    return this.if(`namespaceId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the recovery point identifier
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRecoveryPointId(value: string | string[], operator?: Operator | string) {
    return this.if(`recoveryPointId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the snapshot identifier
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSnapshotId(value: string | string[], operator?: Operator | string) {
    return this.if(`snapshotId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the table restore request identifier
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTableRestoreRequestId(value: string | string[], operator?: Operator | string) {
    return this.if(`tableRestoreRequestId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the workgroup identifier
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWorkgroupId(value: string | string[], operator?: Operator | string) {
    return this.if(`workgroupId`, value, operator || 'StringLike');
  }
}
