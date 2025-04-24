import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ConvertRecoveryPointToSnapshot.html
   */
  public toConvertRecoveryPointToSnapshot() {
    return this.to('ConvertRecoveryPointToSnapshot');
  }

  /**
   * Grants permission to create a custom domain association in Amazon Redshift Serverless
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - acm:DescribeCertificate
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateCustomDomainAssociation.html
   */
  public toCreateCustomDomainAssociation() {
    return this.to('CreateCustomDomainAssociation');
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
   * Dependent actions:
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   * - kms:GenerateDataKey
   * - kms:RetireGrant
   * - secretsmanager:CreateSecret
   * - secretsmanager:DeleteSecret
   * - secretsmanager:DescribeSecret
   * - secretsmanager:GetRandomPassword
   * - secretsmanager:RotateSecret
   * - secretsmanager:TagResource
   * - secretsmanager:UpdateSecret
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateNamespace.html
   */
  public toCreateNamespace() {
    return this.to('CreateNamespace');
  }

  /**
   * Grants permission to purchase a capacity reservation according to a specific reservation offering, for a specified number of RPUs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateReservation.html
   */
  public toCreateReservation() {
    return this.to('CreateReservation');
  }

  /**
   * Grants permission to create a scheduled action for a specified Amazon Redshift Serverless namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateScheduledAction.html
   */
  public toCreateScheduledAction() {
    return this.to('CreateScheduledAction');
  }

  /**
   * Grants permission to create a snapshot of all databases in a namespace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateSnapshot.html
   */
  public toCreateSnapshot() {
    return this.to('CreateSnapshot');
  }

  /**
   * Grants permission to create a snapshot copy configuration for a specified Amazon Redshift Serverless namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateSnapshotCopyConfiguration.html
   */
  public toCreateSnapshotCopyConfiguration() {
    return this.to('CreateSnapshotCopyConfiguration');
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
   * Grants permission to delete a custom domain association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteCustomDomainAssociation.html
   */
  public toDeleteCustomDomainAssociation() {
    return this.to('DeleteCustomDomainAssociation');
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
   * Dependent actions:
   * - kms:DescribeKey
   * - kms:RetireGrant
   * - secretsmanager:DeleteSecret
   * - secretsmanager:DescribeSecret
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
   * Grants permission to delete a scheduled action from Amazon Redshift Serverless
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteScheduledAction.html
   */
  public toDeleteScheduledAction() {
    return this.to('DeleteScheduledAction');
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
   * Grants permission to delete a snapshot copy configuration for a Amazon Redshift Serverless namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_DeleteSnapshotCopyConfiguration.html
   */
  public toDeleteSnapshotCopyConfiguration() {
    return this.to('DeleteSnapshotCopyConfiguration');
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
   * Grants permission to see on the Amazon Redshift Serverless console the remaining number of free trial credits and their expiration date
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/redshift/free-trial/
   */
  public toDescribeOneTimeCredit() {
    return this.to('DescribeOneTimeCredit');
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
   * Grants permission to get information about a specific custom domain association
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetCustomDomainAssociation.html
   */
  public toGetCustomDomainAssociation() {
    return this.to('GetCustomDomainAssociation');
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
   * Grants permission to create a Amazon Redshift Managed Serverless workgroup with the specified configuration settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetManagedWorkgroup.html
   */
  public toGetManagedWorkgroup() {
    return this.to('GetManagedWorkgroup');
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
   * Grants permission to get a particular reservation object
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetReservation.html
   */
  public toGetReservation() {
    return this.to('GetReservation');
  }

  /**
   * Grants permission to get a particular reservation offering
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetReservationOffering.html
   */
  public toGetReservationOffering() {
    return this.to('GetReservationOffering');
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
   * Grants permission to get information about a specific scheduled action
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetScheduledAction.html
   */
  public toGetScheduledAction() {
    return this.to('GetScheduledAction');
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
   * Grants permission to get information about a track in Amazon Redshift Serverless
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_GetTrack.html
   */
  public toGetTrack() {
    return this.to('GetTrack');
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
   * Grants permission to list custom domain associations in Amazon Redshift Serverless
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListCustomDomainAssociations.html
   */
  public toListCustomDomainAssociations() {
    return this.to('ListCustomDomainAssociations');
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
   * Grants permission to list managed workgroups in Amazon Redshift Serverless
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListManagedWorkgroups.html
   */
  public toListManagedWorkgroups() {
    return this.to('ListManagedWorkgroups');
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
   * Grants permission to list all available capacity reservation offerings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListReservationOfferings.html
   */
  public toListReservationOfferings() {
    return this.to('ListReservationOfferings');
  }

  /**
   * Grants permission to list all reservations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListReservations.html
   */
  public toListReservations() {
    return this.to('ListReservations');
  }

  /**
   * Grants permission to list scheduled actions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListScheduledActions.html
   */
  public toListScheduledActions() {
    return this.to('ListScheduledActions');
  }

  /**
   * Grants permission to list SnapshotCopyConfiguration objects and relevant information
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListSnapshotCopyConfigurations.html
   */
  public toListSnapshotCopyConfigurations() {
    return this.to('ListSnapshotCopyConfigurations');
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
   * Grants permission to list tracks available in Amazon Redshift Serverless
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ListTracks.html
   */
  public toListTracks() {
    return this.to('ListTracks');
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
   * Dependent actions:
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   * - kms:GenerateDataKey
   * - kms:RetireGrant
   * - secretsmanager:CreateSecret
   * - secretsmanager:DeleteSecret
   * - secretsmanager:DescribeSecret
   * - secretsmanager:GetRandomPassword
   * - secretsmanager:RotateSecret
   * - secretsmanager:TagResource
   * - secretsmanager:UpdateSecret
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_RestoreFromSnapshot.html
   */
  public toRestoreFromSnapshot() {
    return this.to('RestoreFromSnapshot');
  }

  /**
   * Grants permission to restore a table from a recovery point
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_RestoreTableFromRecoveryPoint.html
   */
  public toRestoreTableFromRecoveryPoint() {
    return this.to('RestoreTableFromRecoveryPoint');
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
   * Grants permission to update a certificate associated with a custom domain
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - acm:DescribeCertificate
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateCustomDomainAssociation.html
   */
  public toUpdateCustomDomainAssociation() {
    return this.to('UpdateCustomDomainAssociation');
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
   * Dependent actions:
   * - kms:CreateGrant
   * - kms:Decrypt
   * - kms:DescribeKey
   * - kms:GenerateDataKey
   * - kms:RetireGrant
   * - secretsmanager:CreateSecret
   * - secretsmanager:DeleteSecret
   * - secretsmanager:DescribeSecret
   * - secretsmanager:GetRandomPassword
   * - secretsmanager:RotateSecret
   * - secretsmanager:TagResource
   * - secretsmanager:UpdateSecret
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateNamespace.html
   */
  public toUpdateNamespace() {
    return this.to('UpdateNamespace');
  }

  /**
   * Grants permission to update a scheduled action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateScheduledAction.html
   */
  public toUpdateScheduledAction() {
    return this.to('UpdateScheduledAction');
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
   * Grants permission to update a snapshot copy configuration for a Amazon Redshift Serverless namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_UpdateSnapshotCopyConfiguration.html
   */
  public toUpdateSnapshotCopyConfiguration() {
    return this.to('UpdateSnapshotCopyConfiguration');
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
      'CreateCustomDomainAssociation',
      'CreateEndpointAccess',
      'CreateNamespace',
      'CreateReservation',
      'CreateScheduledAction',
      'CreateSnapshot',
      'CreateSnapshotCopyConfiguration',
      'CreateUsageLimit',
      'CreateWorkgroup',
      'DeleteCustomDomainAssociation',
      'DeleteEndpointAccess',
      'DeleteNamespace',
      'DeleteResourcePolicy',
      'DeleteScheduledAction',
      'DeleteSnapshot',
      'DeleteSnapshotCopyConfiguration',
      'DeleteUsageLimit',
      'DeleteWorkgroup',
      'GetCredentials',
      'PutResourcePolicy',
      'RestoreFromRecoveryPoint',
      'RestoreFromSnapshot',
      'RestoreTableFromRecoveryPoint',
      'RestoreTableFromSnapshot',
      'UpdateCustomDomainAssociation',
      'UpdateEndpointAccess',
      'UpdateNamespace',
      'UpdateScheduledAction',
      'UpdateSnapshot',
      'UpdateSnapshotCopyConfiguration',
      'UpdateUsageLimit',
      'UpdateWorkgroup'
    ],
    Read: [
      'DescribeOneTimeCredit',
      'GetCustomDomainAssociation',
      'GetEndpointAccess',
      'GetManagedWorkgroup',
      'GetNamespace',
      'GetRecoveryPoint',
      'GetReservation',
      'GetReservationOffering',
      'GetResourcePolicy',
      'GetScheduledAction',
      'GetSnapshot',
      'GetTableRestoreStatus',
      'GetTrack',
      'GetUsageLimit',
      'GetWorkgroup'
    ],
    List: [
      'ListCustomDomainAssociations',
      'ListEndpointAccess',
      'ListManagedWorkgroups',
      'ListNamespaces',
      'ListRecoveryPoints',
      'ListReservationOfferings',
      'ListReservations',
      'ListScheduledActions',
      'ListSnapshotCopyConfigurations',
      'ListSnapshots',
      'ListTableRestoreStatus',
      'ListTagsForResource',
      'ListTracks',
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNamespace(namespaceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:redshift-serverless:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:namespace/${ namespaceId }`);
  }

  /**
   * Adds a resource of type snapshot to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html
   *
   * @param snapshotId - Identifier for the snapshotId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSnapshot(snapshotId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:redshift-serverless:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:snapshot/${ snapshotId }`);
  }

  /**
   * Adds a resource of type workgroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-workgroup-namespace.html
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
   * Adds a resource of type managed-workgroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-managed-workgroup-namespace.html
   *
   * @param managedWorkgroupName - Identifier for the managedWorkgroupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onManagedWorkgroup(managedWorkgroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:redshift-serverless:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:managed-workgroup/${ managedWorkgroupName }`);
  }

  /**
   * Adds a resource of type recoveryPoint to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html
   *
   * @param recoveryPointId - Identifier for the recoveryPointId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRecoveryPoint(recoveryPointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:redshift-serverless:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:recoverypoint/${ recoveryPointId }`);
  }

  /**
   * Adds a resource of type endpointAccess to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-connecting.html
   *
   * @param endpointAccessId - Identifier for the endpointAccessId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEndpointAccess(endpointAccessId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:redshift-serverless:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:managedvpcendpoint/${ endpointAccessId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toConvertRecoveryPointToSnapshot()
   * - .toCreateNamespace()
   * - .toCreateSnapshot()
   * - .toCreateWorkgroup()
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
   * Applies to actions:
   * - .toListTagsForResource()
   * - .toTagResource()
   *
   * Applies to resource types:
   * - namespace
   * - snapshot
   * - workgroup
   * - recoveryPoint
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toConvertRecoveryPointToSnapshot()
   * - .toCreateNamespace()
   * - .toCreateSnapshot()
   * - .toCreateWorkgroup()
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
   * Filters access by the endpoint access identifier
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEndpointAccessId(value: string | string[], operator?: Operator | string) {
    return this.if(`endpointAccessId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the managed workgroup identifier
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifManagedWorkgroupName(value: string | string[], operator?: Operator | string) {
    return this.if(`managedWorkgroupName`, value, operator ?? 'StringLike');
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
    return this.if(`namespaceId`, value, operator ?? 'StringLike');
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
    return this.if(`recoveryPointId`, value, operator ?? 'StringLike');
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
    return this.if(`snapshotId`, value, operator ?? 'StringLike');
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
    return this.if(`tableRestoreRequestId`, value, operator ?? 'StringLike');
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
    return this.if(`workgroupId`, value, operator ?? 'StringLike');
  }
}
