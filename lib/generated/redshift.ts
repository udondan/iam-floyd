import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [redshift](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshift.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Redshift extends PolicyStatement {
  public servicePrefix = 'redshift';

  /**
   * Statement provider for service [redshift](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshift.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to exchange a DC1 reserved node for a DC2 reserved node with no changes to the configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_AcceptReservedNodeExchange.html
   */
  public toAcceptReservedNodeExchange() {
    return this.to('AcceptReservedNodeExchange');
  }

  /**
   * Grants permission to add an inbound (ingress) rule to an Amazon Redshift security group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeClusterSecurityGroupIngress.html
   */
  public toAuthorizeClusterSecurityGroupIngress() {
    return this.to('AuthorizeClusterSecurityGroupIngress');
  }

  /**
   * Grants permission to the specified AWS account to restore a snapshot
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeSnapshotAccess.html
   */
  public toAuthorizeSnapshotAccess() {
    return this.to('AuthorizeSnapshotAccess');
  }

  /**
   * Grants permission to delete snapshots in a batch of size upto 100
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_BatchDeleteClusterSnapshots.html
   */
  public toBatchDeleteClusterSnapshots() {
    return this.to('BatchDeleteClusterSnapshots');
  }

  /**
   * Grants permission to modify settings for a list of snapshots
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_BatchModifyClusterSnapshots.html
   */
  public toBatchModifyClusterSnapshots() {
    return this.to('BatchModifyClusterSnapshots');
  }

  /**
   * Grants permission to cancel a query through the Amazon Redshift console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toCancelQuery() {
    return this.to('CancelQuery');
  }

  /**
   * Grants permission to see queries in the Amazon Redshift console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toCancelQuerySession() {
    return this.to('CancelQuerySession');
  }

  /**
   * Grants permission to cancel a resize operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CancelResize.html
   */
  public toCancelResize() {
    return this.to('CancelResize');
  }

  /**
   * Grants permission to copy a cluster snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CopyClusterSnapshot.html
   */
  public toCopyClusterSnapshot() {
    return this.to('CopyClusterSnapshot');
  }

  /**
   * Grants permission to create a cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateCluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Grants permission to create an Amazon Redshift parameter group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterParameterGroup.html
   */
  public toCreateClusterParameterGroup() {
    return this.to('CreateClusterParameterGroup');
  }

  /**
   * Grants permission to create an Amazon Redshift security group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSecurityGroup.html
   */
  public toCreateClusterSecurityGroup() {
    return this.to('CreateClusterSecurityGroup');
  }

  /**
   * Grants permission to create a manual snapshot of the specified cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSnapshot.html
   */
  public toCreateClusterSnapshot() {
    return this.to('CreateClusterSnapshot');
  }

  /**
   * Grants permission to create an Amazon Redshift subnet group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSubnetGroup.html
   */
  public toCreateClusterSubnetGroup() {
    return this.to('CreateClusterSubnetGroup');
  }

  /**
   * Grants permission to automatically create the specified Amazon Redshift user if it does not exist
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifDbUser()
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/generating-iam-credentials-role-permissions.html
   */
  public toCreateClusterUser() {
    return this.to('CreateClusterUser');
  }

  /**
   * Grants permission to create an Amazon Redshift event notification subscription
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateEventSubscription.html
   */
  public toCreateEventSubscription() {
    return this.to('CreateEventSubscription');
  }

  /**
   * Grants permission to create an HSM client certificate that a cluster uses to connect to an HSM
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateHsmClientCertificate.html
   */
  public toCreateHsmClientCertificate() {
    return this.to('CreateHsmClientCertificate');
  }

  /**
   * Grants permission to create an HSM configuration that contains information required by a cluster to store and use database encryption keys in a hardware security module (HSM)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateHsmConfiguration.html
   */
  public toCreateHsmConfiguration() {
    return this.to('CreateHsmConfiguration');
  }

  /**
   * Grants permission to create saved SQL queries through the Amazon Redshift console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toCreateSavedQuery() {
    return this.to('CreateSavedQuery');
  }

  /**
   * Grants permission to create an Amazon Redshift scheduled action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateScheduledAction.html
   */
  public toCreateScheduledAction() {
    return this.to('CreateScheduledAction');
  }

  /**
   * Grants permission to create a snapshot copy grant and encrypt copied snapshots in a destination AWS Region
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateSnapshotCopyGrant.html
   */
  public toCreateSnapshotCopyGrant() {
    return this.to('CreateSnapshotCopyGrant');
  }

  /**
   * Grants permission to create a snapshot schedule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateSnapshotSchedule.html
   */
  public toCreateSnapshotSchedule() {
    return this.to('CreateSnapshotSchedule');
  }

  /**
   * Grants permission to add one or more tags to a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateTags.html
   */
  public toCreateTags() {
    return this.to('CreateTags');
  }

  /**
   * Grants permission to delete a previously provisioned cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteCluster.html
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * Grants permission to delete an Amazon Redshift parameter group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterParameterGroup.html
   */
  public toDeleteClusterParameterGroup() {
    return this.to('DeleteClusterParameterGroup');
  }

  /**
   * Grants permission to delete an Amazon Redshift security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSecurityGroup.html
   */
  public toDeleteClusterSecurityGroup() {
    return this.to('DeleteClusterSecurityGroup');
  }

  /**
   * Grants permission to delete a manual snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSnapshot.html
   */
  public toDeleteClusterSnapshot() {
    return this.to('DeleteClusterSnapshot');
  }

  /**
   * Grants permission to delete a cluster subnet group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSubnetGroup.html
   */
  public toDeleteClusterSubnetGroup() {
    return this.to('DeleteClusterSubnetGroup');
  }

  /**
   * Grants permission to delete an Amazon Redshift event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteEventSubscription.html
   */
  public toDeleteEventSubscription() {
    return this.to('DeleteEventSubscription');
  }

  /**
   * Grants permission to delete an HSM client certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteHsmClientCertificate.html
   */
  public toDeleteHsmClientCertificate() {
    return this.to('DeleteHsmClientCertificate');
  }

  /**
   * Grants permission to delete an Amazon Redshift HSM configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteHsmConfiguration.html
   */
  public toDeleteHsmConfiguration() {
    return this.to('DeleteHsmConfiguration');
  }

  /**
   * Grants permission to delete saved SQL queries through the Amazon Redshift console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toDeleteSavedQueries() {
    return this.to('DeleteSavedQueries');
  }

  /**
   * Grants permission to delete an Amazon Redshift scheduled action
   *
   * Access Level: Write
   */
  public toDeleteScheduledAction() {
    return this.to('DeleteScheduledAction');
  }

  /**
   * Grants permission to delete a snapshot copy grant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteSnapshotCopyGrant.html
   */
  public toDeleteSnapshotCopyGrant() {
    return this.to('DeleteSnapshotCopyGrant');
  }

  /**
   * Grants permission to delete a snapshot schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteSnapshotSchedule.html
   */
  public toDeleteSnapshotSchedule() {
    return this.to('DeleteSnapshotSchedule');
  }

  /**
   * Grants permission to delete a tag or tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteTags.html
   */
  public toDeleteTags() {
    return this.to('DeleteTags');
  }

  /**
   * Grants permission to describe attributes attached to the specified AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    return this.to('DescribeAccountAttributes');
  }

  /**
   * Grants permission to describe database revisions for a cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterDbRevisions.html
   */
  public toDescribeClusterDbRevisions() {
    return this.to('DescribeClusterDbRevisions');
  }

  /**
   * Grants permission to describe Amazon Redshift parameter groups, including parameter groups you created and the default parameter group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameterGroups.html
   */
  public toDescribeClusterParameterGroups() {
    return this.to('DescribeClusterParameterGroups');
  }

  /**
   * Grants permission to describe parameters contained within an Amazon Redshift parameter group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameters.html
   */
  public toDescribeClusterParameters() {
    return this.to('DescribeClusterParameters');
  }

  /**
   * Grants permission to describe Amazon Redshift security groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSecurityGroups.html
   */
  public toDescribeClusterSecurityGroups() {
    return this.to('DescribeClusterSecurityGroups');
  }

  /**
   * Grants permission to describe one or more snapshot objects, which contain metadata about your cluster snapshots
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSnapshots.html
   */
  public toDescribeClusterSnapshots() {
    return this.to('DescribeClusterSnapshots');
  }

  /**
   * Grants permission to describe one or more cluster subnet group objects, which contain metadata about your cluster subnet groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSubnetGroups.html
   */
  public toDescribeClusterSubnetGroups() {
    return this.to('DescribeClusterSubnetGroups');
  }

  /**
   * Grants permission to describe available maintenance tracks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterTracks.html
   */
  public toDescribeClusterTracks() {
    return this.to('DescribeClusterTracks');
  }

  /**
   * Grants permission to describe available Amazon Redshift cluster versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterVersions.html
   */
  public toDescribeClusterVersions() {
    return this.to('DescribeClusterVersions');
  }

  /**
   * Grants permission to describe properties of provisioned clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusters.html
   */
  public toDescribeClusters() {
    return this.to('DescribeClusters');
  }

  /**
   * Grants permission to describe parameter settings for a parameter group family
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDefaultClusterParameters.html
   */
  public toDescribeDefaultClusterParameters() {
    return this.to('DescribeDefaultClusterParameters');
  }

  /**
   * Grants permission to describe event categories for all event source types, or for a specified source type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEventCategories.html
   */
  public toDescribeEventCategories() {
    return this.to('DescribeEventCategories');
  }

  /**
   * Grants permission to describe Amazon Redshift event notification subscriptions for the specified AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEventSubscriptions.html
   */
  public toDescribeEventSubscriptions() {
    return this.to('DescribeEventSubscriptions');
  }

  /**
   * Grants permission to describe events related to clusters, security groups, snapshots, and parameter groups for the past 14 days
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    return this.to('DescribeEvents');
  }

  /**
   * Grants permission to describe HSM client certificates
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeHsmClientCertificates.html
   */
  public toDescribeHsmClientCertificates() {
    return this.to('DescribeHsmClientCertificates');
  }

  /**
   * Grants permission to describe Amazon Redshift HSM configurations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeHsmConfigurations.html
   */
  public toDescribeHsmConfigurations() {
    return this.to('DescribeHsmConfigurations');
  }

  /**
   * Grants permission to describe whether information, such as queries and connection attempts, is being logged for a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeLoggingStatus.html
   */
  public toDescribeLoggingStatus() {
    return this.to('DescribeLoggingStatus');
  }

  /**
   * Grants permission to describe properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeNodeConfigurationOptions.html
   */
  public toDescribeNodeConfigurationOptions() {
    return this.to('DescribeNodeConfigurationOptions');
  }

  /**
   * Grants permission to describe orderable cluster options
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeOrderableClusterOptions.html
   */
  public toDescribeOrderableClusterOptions() {
    return this.to('DescribeOrderableClusterOptions');
  }

  /**
   * Grants permission to describe a query through the Amazon Redshift console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toDescribeQuery() {
    return this.to('DescribeQuery');
  }

  /**
   * Grants permission to describe available reserved node offerings by Amazon Redshift
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodeOfferings.html
   */
  public toDescribeReservedNodeOfferings() {
    return this.to('DescribeReservedNodeOfferings');
  }

  /**
   * Grants permission to describe the reserved nodes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodes.html
   */
  public toDescribeReservedNodes() {
    return this.to('DescribeReservedNodes');
  }

  /**
   * Grants permission to describe the last resize operation for a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeResize.html
   */
  public toDescribeResize() {
    return this.to('DescribeResize');
  }

  /**
   * Grants permission to describe saved queries through the Amazon Redshift console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toDescribeSavedQueries() {
    return this.to('DescribeSavedQueries');
  }

  /**
   * Grants permission to describe created Amazon Redshift scheduled actions
   *
   * Access Level: Read
   */
  public toDescribeScheduledActions() {
    return this.to('DescribeScheduledActions');
  }

  /**
   * Grants permission to describe snapshot copy grants owned by the specified AWS account in the destination AWS Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeSnapshotCopyGrants.html
   */
  public toDescribeSnapshotCopyGrants() {
    return this.to('DescribeSnapshotCopyGrants');
  }

  /**
   * Grants permission to describe snapshot schedules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeSnapshotSchedules.html
   */
  public toDescribeSnapshotSchedules() {
    return this.to('DescribeSnapshotSchedules');
  }

  /**
   * Grants permission to describe account level backups storage size and provisional storage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeStorage.html
   */
  public toDescribeStorage() {
    return this.to('DescribeStorage');
  }

  /**
   * Grants permission to describe a table through the Amazon Redshift console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toDescribeTable() {
    return this.to('DescribeTable');
  }

  /**
   * Grants permission to describe status of one or more table restore requests made using the RestoreTableFromClusterSnapshot API action
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeTableRestoreStatus.html
   */
  public toDescribeTableRestoreStatus() {
    return this.to('DescribeTableRestoreStatus');
  }

  /**
   * Grants permission to describe tags
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    return this.to('DescribeTags');
  }

  /**
   * Grants permission to disable logging information, such as queries and connection attempts, for a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisableLogging.html
   */
  public toDisableLogging() {
    return this.to('DisableLogging');
  }

  /**
   * Grants permission to disable the automatic copy of snapshots for a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisableSnapshotCopy.html
   */
  public toDisableSnapshotCopy() {
    return this.to('DisableSnapshotCopy');
  }

  /**
   * Grants permission to enable logging information, such as queries and connection attempts, for a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_EnableLogging.html
   */
  public toEnableLogging() {
    return this.to('EnableLogging');
  }

  /**
   * Grants permission to enable the automatic copy of snapshots for a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_EnableSnapshotCopy.html
   */
  public toEnableSnapshotCopy() {
    return this.to('EnableSnapshotCopy');
  }

  /**
   * Grants permission to execute a query through the Amazon Redshift console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toExecuteQuery() {
    return this.to('ExecuteQuery');
  }

  /**
   * Grants permission to fetch query results through the Amazon Redshift console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toFetchResults() {
    return this.to('FetchResults');
  }

  /**
   * Grants permission to get temporary credentials to access an Amazon Redshift database by the specified AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDbName()
   * - .ifDbUser()
   * - .ifDurationSeconds()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html
   */
  public toGetClusterCredentials() {
    return this.to('GetClusterCredentials');
  }

  /**
   * Grants permission to get an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetReservedNodeExchangeOfferings.html
   */
  public toGetReservedNodeExchangeOfferings() {
    return this.to('GetReservedNodeExchangeOfferings');
  }

  /**
   * Grants permission to join the specified Amazon Redshift group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html
   */
  public toJoinGroup() {
    return this.to('JoinGroup');
  }

  /**
   * Grants permission to list databases through the Amazon Redshift console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListDatabases() {
    return this.to('ListDatabases');
  }

  /**
   * Grants permission to list saved queries through the Amazon Redshift console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListSavedQueries() {
    return this.to('ListSavedQueries');
  }

  /**
   * Grants permission to list schemas through the Amazon Redshift console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListSchemas() {
    return this.to('ListSchemas');
  }

  /**
   * Grants permission to list tables through the Amazon Redshift console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toListTables() {
    return this.to('ListTables');
  }

  /**
   * Grants permission to modify the settings of a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyCluster.html
   */
  public toModifyCluster() {
    return this.to('ModifyCluster');
  }

  /**
   * Grants permission to modify the database revision of a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterDbRevision.html
   */
  public toModifyClusterDbRevision() {
    return this.to('ModifyClusterDbRevision');
  }

  /**
   * Grants permission to modify the list of AWS Identity and Access Management (IAM) roles that can be used by a cluster to access other AWS services
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterIamRoles.html
   */
  public toModifyClusterIamRoles() {
    return this.to('ModifyClusterIamRoles');
  }

  /**
   * Grants permission to modify the maintenance settings of a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterMaintenance.html
   */
  public toModifyClusterMaintenance() {
    return this.to('ModifyClusterMaintenance');
  }

  /**
   * Grants permission to modify the parameters of a parameter group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterParameterGroup.html
   */
  public toModifyClusterParameterGroup() {
    return this.to('ModifyClusterParameterGroup');
  }

  /**
   * Grants permission to modify the settings of a snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSnapshot.html
   */
  public toModifyClusterSnapshot() {
    return this.to('ModifyClusterSnapshot');
  }

  /**
   * Grants permission to modify a snapshot schedule for a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSnapshotSchedule.html
   */
  public toModifyClusterSnapshotSchedule() {
    return this.to('ModifyClusterSnapshotSchedule');
  }

  /**
   * Grants permission to modify a cluster subnet group to include the specified list of VPC subnets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSubnetGroup.html
   */
  public toModifyClusterSubnetGroup() {
    return this.to('ModifyClusterSubnetGroup');
  }

  /**
   * Grants permission to modify an existing Amazon Redshift event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyEventSubscription.html
   */
  public toModifyEventSubscription() {
    return this.to('ModifyEventSubscription');
  }

  /**
   * Grants permission to modify an existing saved query through the Amazon Redshift console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toModifySavedQuery() {
    return this.to('ModifySavedQuery');
  }

  /**
   * Grants permission to modify an existing Amazon Redshift scheduled action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyScheduledAction.html
   */
  public toModifyScheduledAction() {
    return this.to('ModifyScheduledAction');
  }

  /**
   * Grants permission to modify the number of days to retain snapshots in the destination AWS Region after they are copied from the source AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifySnapshotCopyRetentionPeriod.html
   */
  public toModifySnapshotCopyRetentionPeriod() {
    return this.to('ModifySnapshotCopyRetentionPeriod');
  }

  /**
   * Grants permission to modify a snapshot schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifySnapshotSchedule.html
   */
  public toModifySnapshotSchedule() {
    return this.to('ModifySnapshotSchedule');
  }

  /**
   * Grants permission to pause a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_PauseCluster.html
   */
  public toPauseCluster() {
    return this.to('PauseCluster');
  }

  /**
   * Grants permission to purchase a reserved node
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_PurchaseReservedNodeOffering.html
   */
  public toPurchaseReservedNodeOffering() {
    return this.to('PurchaseReservedNodeOffering');
  }

  /**
   * Grants permission to reboot a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RebootCluster.html
   */
  public toRebootCluster() {
    return this.to('RebootCluster');
  }

  /**
   * Grants permission to set one or more parameters of a parameter group to their default values and set the source values of the parameters to "engine-default"
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResetClusterParameterGroup.html
   */
  public toResetClusterParameterGroup() {
    return this.to('ResetClusterParameterGroup');
  }

  /**
   * Grants permission to change the size of a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResizeCluster.html
   */
  public toResizeCluster() {
    return this.to('ResizeCluster');
  }

  /**
   * Grants permission to create a cluster from a snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreFromClusterSnapshot.html
   */
  public toRestoreFromClusterSnapshot() {
    return this.to('RestoreFromClusterSnapshot');
  }

  /**
   * Grants permission to create a table from a table in an Amazon Redshift cluster snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreTableFromClusterSnapshot.html
   */
  public toRestoreTableFromClusterSnapshot() {
    return this.to('RestoreTableFromClusterSnapshot');
  }

  /**
   * Grants permission to resume a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResumeCluster.html
   */
  public toResumeCluster() {
    return this.to('ResumeCluster');
  }

  /**
   * Grants permission to revoke an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeClusterSecurityGroupIngress.html
   */
  public toRevokeClusterSecurityGroupIngress() {
    return this.to('RevokeClusterSecurityGroupIngress');
  }

  /**
   * Grants permission to revoke access from the specified AWS account to restore a snapshot
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeSnapshotAccess.html
   */
  public toRevokeSnapshotAccess() {
    return this.to('RevokeSnapshotAccess');
  }

  /**
   * Grants permission to rotate an encryption key for a cluster
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RotateEncryptionKey.html
   */
  public toRotateEncryptionKey() {
    return this.to('RotateEncryptionKey');
  }

  /**
   * Grants permission to view query results through the Amazon Redshift console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toViewQueriesFromConsole() {
    return this.to('ViewQueriesFromConsole');
  }

  /**
   * Grants permission to terminate running queries and loads through the Amazon Redshift console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  public toViewQueriesInConsole() {
    return this.to('ViewQueriesInConsole');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptReservedNodeExchange",
      "BatchDeleteClusterSnapshots",
      "BatchModifyClusterSnapshots",
      "CancelQuery",
      "CancelQuerySession",
      "CancelResize",
      "CopyClusterSnapshot",
      "CreateCluster",
      "CreateClusterParameterGroup",
      "CreateClusterSecurityGroup",
      "CreateClusterSnapshot",
      "CreateClusterSubnetGroup",
      "CreateEventSubscription",
      "CreateHsmClientCertificate",
      "CreateHsmConfiguration",
      "CreateSavedQuery",
      "CreateScheduledAction",
      "CreateSnapshotSchedule",
      "DeleteCluster",
      "DeleteClusterParameterGroup",
      "DeleteClusterSecurityGroup",
      "DeleteClusterSnapshot",
      "DeleteClusterSubnetGroup",
      "DeleteEventSubscription",
      "DeleteHsmClientCertificate",
      "DeleteHsmConfiguration",
      "DeleteSavedQueries",
      "DeleteScheduledAction",
      "DeleteSnapshotCopyGrant",
      "DeleteSnapshotSchedule",
      "DisableLogging",
      "DisableSnapshotCopy",
      "EnableLogging",
      "EnableSnapshotCopy",
      "ExecuteQuery",
      "GetClusterCredentials",
      "ModifyCluster",
      "ModifyClusterDbRevision",
      "ModifyClusterMaintenance",
      "ModifyClusterParameterGroup",
      "ModifyClusterSnapshot",
      "ModifyClusterSnapshotSchedule",
      "ModifyClusterSubnetGroup",
      "ModifyEventSubscription",
      "ModifySavedQuery",
      "ModifyScheduledAction",
      "ModifySnapshotCopyRetentionPeriod",
      "ModifySnapshotSchedule",
      "PauseCluster",
      "PurchaseReservedNodeOffering",
      "RebootCluster",
      "ResetClusterParameterGroup",
      "ResizeCluster",
      "RestoreFromClusterSnapshot",
      "RestoreTableFromClusterSnapshot",
      "ResumeCluster"
    ],
    "Permissions management": [
      "AuthorizeClusterSecurityGroupIngress",
      "AuthorizeSnapshotAccess",
      "CreateClusterUser",
      "CreateSnapshotCopyGrant",
      "JoinGroup",
      "ModifyClusterIamRoles",
      "RevokeClusterSecurityGroupIngress",
      "RevokeSnapshotAccess",
      "RotateEncryptionKey"
    ],
    "Tagging": [
      "CreateTags",
      "DeleteTags"
    ],
    "Read": [
      "DescribeAccountAttributes",
      "DescribeClusterParameterGroups",
      "DescribeClusterParameters",
      "DescribeClusterSecurityGroups",
      "DescribeClusterSnapshots",
      "DescribeClusterSubnetGroups",
      "DescribeClusterVersions",
      "DescribeDefaultClusterParameters",
      "DescribeEventCategories",
      "DescribeEventSubscriptions",
      "DescribeHsmClientCertificates",
      "DescribeHsmConfigurations",
      "DescribeLoggingStatus",
      "DescribeOrderableClusterOptions",
      "DescribeQuery",
      "DescribeReservedNodeOfferings",
      "DescribeReservedNodes",
      "DescribeResize",
      "DescribeSavedQueries",
      "DescribeScheduledActions",
      "DescribeSnapshotCopyGrants",
      "DescribeSnapshotSchedules",
      "DescribeStorage",
      "DescribeTable",
      "DescribeTableRestoreStatus",
      "DescribeTags",
      "FetchResults",
      "GetReservedNodeExchangeOfferings"
    ],
    "List": [
      "DescribeClusterDbRevisions",
      "DescribeClusterTracks",
      "DescribeClusters",
      "DescribeEvents",
      "DescribeNodeConfigurationOptions",
      "ListDatabases",
      "ListSavedQueries",
      "ListSchemas",
      "ListTables",
      "ViewQueriesFromConsole",
      "ViewQueriesInConsole"
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(clusterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:cluster:${ClusterName}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dbgroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_GROUP.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param dbGroup - Identifier for the dbGroup.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDbgroup(clusterName: string, dbGroup: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:dbgroup:${ClusterName}/${DbGroup}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${DbGroup}', dbGroup);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dbname to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/dg/t_creating_database.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param dbName - Identifier for the dbName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDbname(clusterName: string, dbName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:dbname:${ClusterName}/${DbName}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${DbName}', dbName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dbuser to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/dg/r_Users.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param dbUser - Identifier for the dbUser.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDbuser(clusterName: string, dbUser: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:dbuser:${ClusterName}/${DbUser}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${DbUser}', dbUser);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type eventsubscription to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-events.html
   *
   * @param eventSubscriptionName - Identifier for the eventSubscriptionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventsubscription(eventSubscriptionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:eventsubscription:${EventSubscriptionName}';
    arn = arn.replace('${EventSubscriptionName}', eventSubscriptionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type hsmclientcertificate to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM
   *
   * @param hSMClientCertificateId - Identifier for the hSMClientCertificateId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHsmclientcertificate(hSMClientCertificateId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:hsmclientcertificate:${HSMClientCertificateId}';
    arn = arn.replace('${HSMClientCertificateId}', hSMClientCertificateId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type hsmconfiguration to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM
   *
   * @param hSMConfigurationId - Identifier for the hSMConfigurationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHsmconfiguration(hSMConfigurationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:hsmconfiguration:${HSMConfigurationId}';
    arn = arn.replace('${HSMConfigurationId}', hSMConfigurationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type parametergroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html
   *
   * @param parameterGroupName - Identifier for the parameterGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onParametergroup(parameterGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:parametergroup:${ParameterGroupName}';
    arn = arn.replace('${ParameterGroupName}', parameterGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type securitygroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html
   *
   * @param securityGroupName - Identifier for the securityGroupName.
   * @param owner - Identifier for the owner.
   * @param ec2SecurityGroupId - Identifier for the ec2SecurityGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSecuritygroup(securityGroupName: string, owner: string, ec2SecurityGroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:securitygroup:${SecurityGroupName}/ec2securitygroup/${Owner}/${Ec2SecurityGroupId}';
    arn = arn.replace('${SecurityGroupName}', securityGroupName);
    arn = arn.replace('${Owner}', owner);
    arn = arn.replace('${Ec2SecurityGroupId}', ec2SecurityGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type securitygroupingress-cidr to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html
   *
   * @param securityGroupName - Identifier for the securityGroupName.
   * @param ipRange - Identifier for the ipRange.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSecuritygroupingressCidr(securityGroupName: string, ipRange: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:securitygroupingress:${SecurityGroupName}/cidrip/${IpRange}';
    arn = arn.replace('${SecurityGroupName}', securityGroupName);
    arn = arn.replace('${IpRange}', ipRange);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type securitygroupingress-ec2securitygroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html
   *
   * @param securityGroupName - Identifier for the securityGroupName.
   * @param owner - Identifier for the owner.
   * @param ece2SecuritygroupId - Identifier for the ece2SecuritygroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSecuritygroupingressEc2securitygroup(securityGroupName: string, owner: string, ece2SecuritygroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:securitygroupingress:${SecurityGroupName}/ec2securitygroup/${Owner}/${Ece2SecuritygroupId}';
    arn = arn.replace('${SecurityGroupName}', securityGroupName);
    arn = arn.replace('${Owner}', owner);
    arn = arn.replace('${Ece2SecuritygroupId}', ece2SecuritygroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type snapshot to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param snapshotName - Identifier for the snapshotName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSnapshot(clusterName: string, snapshotName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:snapshot:${ClusterName}/${SnapshotName}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${SnapshotName}', snapshotName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type snapshotcopygrant to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#configure-snapshot-copy-grant
   *
   * @param snapshotCopyGrantName - Identifier for the snapshotCopyGrantName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSnapshotcopygrant(snapshotCopyGrantName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:snapshotcopygrant:${SnapshotCopyGrantName}';
    arn = arn.replace('${SnapshotCopyGrantName}', snapshotCopyGrantName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type snapshotschedule to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html
   *
   * @param parameterGroupName - Identifier for the parameterGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSnapshotschedule(parameterGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:snapshotschedule:${ParameterGroupName}';
    arn = arn.replace('${ParameterGroupName}', parameterGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type subnetgroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html
   *
   * @param subnetGroupName - Identifier for the subnetGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSubnetgroup(subnetGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:redshift:${Region}:${Account}:subnetgroup:${SubnetGroupName}';
    arn = arn.replace('${SubnetGroupName}', subnetGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the database name
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toGetClusterCredentials()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDbName(value: string | string[], operator?: Operator | string) {
    return this.if(`DbName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the database user name
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toCreateClusterUser()
   * - .toGetClusterCredentials()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDbUser(value: string | string[], operator?: Operator | string) {
    return this.if(`DbUser`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the number of seconds until a temporary credential set expires
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toGetClusterCredentials()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDurationSeconds(value: string | string[], operator?: Operator | string) {
    return this.if(`DurationSeconds`, value, operator || 'StringLike');
  }
}
