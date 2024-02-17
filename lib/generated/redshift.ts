import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
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
   * Grants permission to add a partner integration to a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_AddPartner.html
   */
  public toAddPartner() {
    return this.to('AddPartner');
  }

  /**
   * Grants permission to associate a consumer to a datashare
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifConsumerArn()
   * - .ifAllowWrites()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_AssociateDataShareConsumer.html
   */
  public toAssociateDataShareConsumer() {
    return this.to('AssociateDataShareConsumer');
  }

  /**
   * Grants permission to add an inbound (ingress) rule to an Amazon Redshift security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeClusterSecurityGroupIngress.html
   */
  public toAuthorizeClusterSecurityGroupIngress() {
    return this.to('AuthorizeClusterSecurityGroupIngress');
  }

  /**
   * Grants permission to authorize the specified datashare consumer to consume a datashare
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifConsumerIdentifier()
   * - .ifAllowWrites()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeDataShare.html
   */
  public toAuthorizeDataShare() {
    return this.to('AuthorizeDataShare');
  }

  /**
   * Grants permission to authorize endpoint related activities for redshift-managed vpc endpoint
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeEndpointAccess.html
   */
  public toAuthorizeEndpointAccess() {
    return this.to('AuthorizeEndpointAccess');
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
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CopyClusterSnapshot.html
   */
  public toCopyClusterSnapshot() {
    return this.to('CopyClusterSnapshot');
  }

  /**
   * Grants permission to create an Amazon Redshift authentication profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateAuthenticationProfile.html
   */
  public toCreateAuthenticationProfile() {
    return this.to('CreateAuthenticationProfile');
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
   * Grants permission to create a custom domain name for a cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - acm:DescribeCertificate
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateCustomDomainAssociation.html
   */
  public toCreateCustomDomainAssociation() {
    return this.to('CreateCustomDomainAssociation');
  }

  /**
   * Grants permission to create a redshift-managed vpc endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateEndpointAccess.html
   */
  public toCreateEndpointAccess() {
    return this.to('CreateEndpointAccess');
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
   * Grants permission to create a redshift idc application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateRedshiftIdcApplication.html
   */
  public toCreateRedshiftIdcApplication() {
    return this.to('CreateRedshiftIdcApplication');
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
   * Grants permission to create a usage limit
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateUsageLimit.html
   */
  public toCreateUsageLimit() {
    return this.to('CreateUsageLimit');
  }

  /**
   * Grants permission to remove permission from the specified datashare consumer to consume a datashare
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifConsumerIdentifier()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeauthorizeDataShare.html
   */
  public toDeauthorizeDataShare() {
    return this.to('DeauthorizeDataShare');
  }

  /**
   * Grants permission to delete an Amazon Redshift authentication profile
   *
   * Access Level: Write
   */
  public toDeleteAuthenticationProfile() {
    return this.to('DeleteAuthenticationProfile');
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
   * Grants permission to delete a custom domain name for a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteCustomDomainAssociation.html
   */
  public toDeleteCustomDomainAssociation() {
    return this.to('DeleteCustomDomainAssociation');
  }

  /**
   * Grants permission to delete a redshift-managed vpc endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteEndpointAccess.html
   */
  public toDeleteEndpointAccess() {
    return this.to('DeleteEndpointAccess');
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
   * Grants permission to delete a partner integration from a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeletePartner.html
   */
  public toDeletePartner() {
    return this.to('DeletePartner');
  }

  /**
   * Grants permission to delete a redshift idc application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteRedshiftIdcApplication.html
   */
  public toDeleteRedshiftIdcApplication() {
    return this.to('DeleteRedshiftIdcApplication');
  }

  /**
   * Grants permission to delete the resource policy for a specified resource
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
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
   * Grants permission to delete a usage limit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteUsageLimit.html
   */
  public toDeleteUsageLimit() {
    return this.to('DeleteUsageLimit');
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
   * Grants permission to describe created Amazon Redshift authentication profiles
   *
   * Access Level: Read
   */
  public toDescribeAuthenticationProfiles() {
    return this.to('DescribeAuthenticationProfiles');
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
   * Grants permission to describe custom domain names for a cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeCustomDomainAssociations.html
   */
  public toDescribeCustomDomainAssociations() {
    return this.to('DescribeCustomDomainAssociations');
  }

  /**
   * Grants permission to describe datashares created and consumed by your clusters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDataShares.html
   */
  public toDescribeDataShares() {
    return this.to('DescribeDataShares');
  }

  /**
   * Grants permission to describe only datashares consumed by your clusters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDataSharesForConsumer.html
   */
  public toDescribeDataSharesForConsumer() {
    return this.to('DescribeDataSharesForConsumer');
  }

  /**
   * Grants permission to describe only datashares created by your clusters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDataSharesForProducer.html
   */
  public toDescribeDataSharesForProducer() {
    return this.to('DescribeDataSharesForProducer');
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
   * Grants permission to describe redshift-managed vpc endpoints
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEndpointAccess.html
   */
  public toDescribeEndpointAccess() {
    return this.to('DescribeEndpointAccess');
  }

  /**
   * Grants permission to authorize describe activity for redshift-managed vpc endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEndpointAuthorization.html
   */
  public toDescribeEndpointAuthorization() {
    return this.to('DescribeEndpointAuthorization');
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
   * Grants permission to list the inbound integrations
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInboundIntegrationArn()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeInboundIntegrations.html
   */
  public toDescribeInboundIntegrations() {
    return this.to('DescribeInboundIntegrations');
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
   * Grants permission to retrieve information about the partner integrations defined for a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribePartners.html
   */
  public toDescribePartners() {
    return this.to('DescribePartners');
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
   * Grants permission to describe redshift idc applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeRedshiftIdcApplications.html
   */
  public toDescribeRedshiftIdcApplications() {
    return this.to('DescribeRedshiftIdcApplications');
  }

  /**
   * Grants permission to describe exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodeExchangeStatus.html
   */
  public toDescribeReservedNodeExchangeStatus() {
    return this.to('DescribeReservedNodeExchangeStatus');
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
   * Grants permission to describe usage limits
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeUsageLimits.html
   */
  public toDescribeUsageLimits() {
    return this.to('DescribeUsageLimits');
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
   * Grants permission to disassociate a consumer from a datashare
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifConsumerArn()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisassociateDataShareConsumer.html
   */
  public toDisassociateDataShareConsumer() {
    return this.to('DisassociateDataShareConsumer');
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
   * Grants permission to failover the primary compute of an Multi-AZ cluster to another AZ
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_FailoverPrimaryCompute.html
   */
  public toFailoverPrimaryCompute() {
    return this.to('FailoverPrimaryCompute');
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
   * Grants permission to get enhanced temporary credentials to access an Amazon Redshift database by the specified AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDbName()
   * - .ifDurationSeconds()
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentialsWithIAM.html
   */
  public toGetClusterCredentialsWithIAM() {
    return this.to('GetClusterCredentialsWithIAM');
  }

  /**
   * Grants permission to get the configuration options for the reserved-node exchange
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetReservedNodeExchangeConfigurationOptions.html
   */
  public toGetReservedNodeExchangeConfigurationOptions() {
    return this.to('GetReservedNodeExchangeConfigurationOptions');
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
   * Grants permission to get the resource policy for a specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
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
   * Grants permission to list Advisor recommendations
   *
   * Access Level: List
   */
  public toListRecommendations() {
    return this.to('ListRecommendations');
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
   * Grants permission to modify the AQUA configuration of a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyAquaConfiguration.html
   */
  public toModifyAquaConfiguration() {
    return this.to('ModifyAquaConfiguration');
  }

  /**
   * Grants permission to modify an existing Amazon Redshift authentication profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyAuthenticationProfile.html
   */
  public toModifyAuthenticationProfile() {
    return this.to('ModifyAuthenticationProfile');
  }

  /**
   * Grants permission to modify the settings of a cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - acm:DescribeCertificate
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
   * Grants permission to modify a custom domain name for a cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - acm:DescribeCertificate
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyCustomDomainAssociation.html
   */
  public toModifyCustomDomainAssociation() {
    return this.to('ModifyCustomDomainAssociation');
  }

  /**
   * Grants permission to modify a redshift-managed vpc endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyEndpointAccess.html
   */
  public toModifyEndpointAccess() {
    return this.to('ModifyEndpointAccess');
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
   * Grants permission to modify a redshift idc application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyRedshiftIdcApplication.html
   */
  public toModifyRedshiftIdcApplication() {
    return this.to('ModifyRedshiftIdcApplication');
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
   * Grants permission to modify a usage limit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyUsageLimit.html
   */
  public toModifyUsageLimit() {
    return this.to('ModifyUsageLimit');
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
   * Grants permission to update the resource policy for a specified resource
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
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
   * Grants permission to decline a datashare shared from another account
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RejectDataShare.html
   */
  public toRejectDataShare() {
    return this.to('RejectDataShare');
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
   * Possible conditions:
   * - .ifAwsTagKeys()
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
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeClusterSecurityGroupIngress.html
   */
  public toRevokeClusterSecurityGroupIngress() {
    return this.to('RevokeClusterSecurityGroupIngress');
  }

  /**
   * Grants permission to revoke access for endpoint related activities for redshift-managed vpc endpoint
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeEndpointAccess.html
   */
  public toRevokeEndpointAccess() {
    return this.to('RevokeEndpointAccess');
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
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RotateEncryptionKey.html
   */
  public toRotateEncryptionKey() {
    return this.to('RotateEncryptionKey');
  }

  /**
   * Grants permission to update the status of a partner integration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/redshift/latest/APIReference/API_UpdatePartnerStatus.html
   */
  public toUpdatePartnerStatus() {
    return this.to('UpdatePartnerStatus');
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
    Write: [
      'AcceptReservedNodeExchange',
      'AddPartner',
      'AssociateDataShareConsumer',
      'AuthorizeClusterSecurityGroupIngress',
      'BatchDeleteClusterSnapshots',
      'BatchModifyClusterSnapshots',
      'CancelQuery',
      'CancelQuerySession',
      'CancelResize',
      'CopyClusterSnapshot',
      'CreateAuthenticationProfile',
      'CreateCluster',
      'CreateClusterParameterGroup',
      'CreateClusterSecurityGroup',
      'CreateClusterSnapshot',
      'CreateClusterSubnetGroup',
      'CreateCustomDomainAssociation',
      'CreateEndpointAccess',
      'CreateEventSubscription',
      'CreateHsmClientCertificate',
      'CreateHsmConfiguration',
      'CreateRedshiftIdcApplication',
      'CreateSavedQuery',
      'CreateScheduledAction',
      'CreateSnapshotSchedule',
      'CreateUsageLimit',
      'DeleteAuthenticationProfile',
      'DeleteCluster',
      'DeleteClusterParameterGroup',
      'DeleteClusterSecurityGroup',
      'DeleteClusterSnapshot',
      'DeleteClusterSubnetGroup',
      'DeleteCustomDomainAssociation',
      'DeleteEndpointAccess',
      'DeleteEventSubscription',
      'DeleteHsmClientCertificate',
      'DeleteHsmConfiguration',
      'DeletePartner',
      'DeleteRedshiftIdcApplication',
      'DeleteSavedQueries',
      'DeleteScheduledAction',
      'DeleteSnapshotCopyGrant',
      'DeleteSnapshotSchedule',
      'DeleteUsageLimit',
      'DisableLogging',
      'DisableSnapshotCopy',
      'DisassociateDataShareConsumer',
      'EnableLogging',
      'EnableSnapshotCopy',
      'ExecuteQuery',
      'FailoverPrimaryCompute',
      'GetClusterCredentials',
      'GetClusterCredentialsWithIAM',
      'ModifyAquaConfiguration',
      'ModifyAuthenticationProfile',
      'ModifyCluster',
      'ModifyClusterDbRevision',
      'ModifyClusterMaintenance',
      'ModifyClusterParameterGroup',
      'ModifyClusterSnapshot',
      'ModifyClusterSnapshotSchedule',
      'ModifyClusterSubnetGroup',
      'ModifyCustomDomainAssociation',
      'ModifyEndpointAccess',
      'ModifyEventSubscription',
      'ModifyRedshiftIdcApplication',
      'ModifySavedQuery',
      'ModifyScheduledAction',
      'ModifySnapshotCopyRetentionPeriod',
      'ModifySnapshotSchedule',
      'ModifyUsageLimit',
      'PauseCluster',
      'PurchaseReservedNodeOffering',
      'RebootCluster',
      'ResetClusterParameterGroup',
      'ResizeCluster',
      'RestoreFromClusterSnapshot',
      'RestoreTableFromClusterSnapshot',
      'ResumeCluster',
      'RevokeClusterSecurityGroupIngress',
      'RotateEncryptionKey',
      'UpdatePartnerStatus'
    ],
    'Permissions management': [
      'AuthorizeDataShare',
      'AuthorizeEndpointAccess',
      'AuthorizeSnapshotAccess',
      'CreateClusterUser',
      'CreateSnapshotCopyGrant',
      'DeauthorizeDataShare',
      'DeleteResourcePolicy',
      'JoinGroup',
      'ModifyClusterIamRoles',
      'PutResourcePolicy',
      'RejectDataShare',
      'RevokeEndpointAccess',
      'RevokeSnapshotAccess'
    ],
    Tagging: [
      'CreateTags',
      'DeleteTags'
    ],
    Read: [
      'DescribeAccountAttributes',
      'DescribeAuthenticationProfiles',
      'DescribeClusterParameterGroups',
      'DescribeClusterParameters',
      'DescribeClusterSecurityGroups',
      'DescribeClusterSnapshots',
      'DescribeClusterSubnetGroups',
      'DescribeClusterVersions',
      'DescribeDataShares',
      'DescribeDataSharesForConsumer',
      'DescribeDataSharesForProducer',
      'DescribeDefaultClusterParameters',
      'DescribeEndpointAccess',
      'DescribeEventCategories',
      'DescribeEventSubscriptions',
      'DescribeHsmClientCertificates',
      'DescribeHsmConfigurations',
      'DescribeLoggingStatus',
      'DescribeOrderableClusterOptions',
      'DescribePartners',
      'DescribeQuery',
      'DescribeReservedNodeExchangeStatus',
      'DescribeReservedNodeOfferings',
      'DescribeReservedNodes',
      'DescribeResize',
      'DescribeSavedQueries',
      'DescribeScheduledActions',
      'DescribeSnapshotCopyGrants',
      'DescribeSnapshotSchedules',
      'DescribeStorage',
      'DescribeTable',
      'DescribeTableRestoreStatus',
      'DescribeTags',
      'DescribeUsageLimits',
      'FetchResults',
      'GetReservedNodeExchangeConfigurationOptions',
      'GetReservedNodeExchangeOfferings',
      'GetResourcePolicy'
    ],
    List: [
      'DescribeClusterDbRevisions',
      'DescribeClusterTracks',
      'DescribeClusters',
      'DescribeCustomDomainAssociations',
      'DescribeEndpointAuthorization',
      'DescribeEvents',
      'DescribeInboundIntegrations',
      'DescribeNodeConfigurationOptions',
      'DescribeRedshiftIdcApplications',
      'ListDatabases',
      'ListRecommendations',
      'ListSavedQueries',
      'ListSchemas',
      'ListTables',
      'ViewQueriesFromConsole',
      'ViewQueriesInConsole'
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
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:cluster:${ clusterName }`);
  }

  /**
   * Adds a resource of type datashare to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/dg/datashare-overview.html
   *
   * @param producerClusterNamespace - Identifier for the producerClusterNamespace.
   * @param dataShareName - Identifier for the dataShareName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatashare(producerClusterNamespace: string, dataShareName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:datashare:${ producerClusterNamespace }/${ dataShareName }`);
  }

  /**
   * Adds a resource of type dbgroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_GROUP.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param dbGroup - Identifier for the dbGroup.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDbgroup(clusterName: string, dbGroup: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:dbgroup:${ clusterName }/${ dbGroup }`);
  }

  /**
   * Adds a resource of type dbname to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/dg/t_creating_database.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param dbName - Identifier for the dbName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDbname(clusterName: string, dbName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:dbname:${ clusterName }/${ dbName }`);
  }

  /**
   * Adds a resource of type dbuser to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/dg/r_Users.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param dbUser - Identifier for the dbUser.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDbuser(clusterName: string, dbUser: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:dbuser:${ clusterName }/${ dbUser }`);
  }

  /**
   * Adds a resource of type eventsubscription to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-events.html
   *
   * @param eventSubscriptionName - Identifier for the eventSubscriptionName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventsubscription(eventSubscriptionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:eventsubscription:${ eventSubscriptionName }`);
  }

  /**
   * Adds a resource of type hsmclientcertificate to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM
   *
   * @param hSMClientCertificateId - Identifier for the hSMClientCertificateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHsmclientcertificate(hSMClientCertificateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:hsmclientcertificate:${ hSMClientCertificateId }`);
  }

  /**
   * Adds a resource of type hsmconfiguration to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM
   *
   * @param hSMConfigurationId - Identifier for the hSMConfigurationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHsmconfiguration(hSMConfigurationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:hsmconfiguration:${ hSMConfigurationId }`);
  }

  /**
   * Adds a resource of type namespace to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/dg/concepts.html
   *
   * @param clusterNamespace - Identifier for the clusterNamespace.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNamespace(clusterNamespace: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:namespace:${ clusterNamespace }`);
  }

  /**
   * Adds a resource of type parametergroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html
   *
   * @param parameterGroupName - Identifier for the parameterGroupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onParametergroup(parameterGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:parametergroup:${ parameterGroupName }`);
  }

  /**
   * Adds a resource of type securitygroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html
   *
   * @param securityGroupName - Identifier for the securityGroupName.
   * @param owner - Identifier for the owner.
   * @param ec2SecurityGroupId - Identifier for the ec2SecurityGroupId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSecuritygroup(securityGroupName: string, owner: string, ec2SecurityGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:securitygroup:${ securityGroupName }/ec2securitygroup/${ owner }/${ ec2SecurityGroupId }`);
  }

  /**
   * Adds a resource of type securitygroupingress-cidr to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html
   *
   * @param securityGroupName - Identifier for the securityGroupName.
   * @param ipRange - Identifier for the ipRange.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSecuritygroupingressCidr(securityGroupName: string, ipRange: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:securitygroupingress:${ securityGroupName }/cidrip/${ ipRange }`);
  }

  /**
   * Adds a resource of type securitygroupingress-ec2securitygroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html
   *
   * @param securityGroupName - Identifier for the securityGroupName.
   * @param owner - Identifier for the owner.
   * @param ece2SecuritygroupId - Identifier for the ece2SecuritygroupId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSecuritygroupingressEc2securitygroup(securityGroupName: string, owner: string, ece2SecuritygroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:securitygroupingress:${ securityGroupName }/ec2securitygroup/${ owner }/${ ece2SecuritygroupId }`);
  }

  /**
   * Adds a resource of type snapshot to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param snapshotName - Identifier for the snapshotName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSnapshot(clusterName: string, snapshotName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:snapshot:${ clusterName }/${ snapshotName }`);
  }

  /**
   * Adds a resource of type snapshotcopygrant to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#configure-snapshot-copy-grant
   *
   * @param snapshotCopyGrantName - Identifier for the snapshotCopyGrantName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSnapshotcopygrant(snapshotCopyGrantName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:snapshotcopygrant:${ snapshotCopyGrantName }`);
  }

  /**
   * Adds a resource of type snapshotschedule to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html
   *
   * @param parameterGroupName - Identifier for the parameterGroupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSnapshotschedule(parameterGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:snapshotschedule:${ parameterGroupName }`);
  }

  /**
   * Adds a resource of type subnetgroup to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html
   *
   * @param subnetGroupName - Identifier for the subnetGroupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSubnetgroup(subnetGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:subnetgroup:${ subnetGroupName }`);
  }

  /**
   * Adds a resource of type usagelimit to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/managing-cluster-usage-limits.html
   *
   * @param usageLimitId - Identifier for the usageLimitId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUsagelimit(usageLimitId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:usagelimit:${ usageLimitId }`);
  }

  /**
   * Adds a resource of type redshiftidcapplication to the statement
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-idp-connect.html
   *
   * @param redshiftIdcApplicationId - Identifier for the redshiftIdcApplicationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onRedshiftidcapplication(redshiftIdcApplicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:redshift:${ region || this.defaultRegion }:${ account || this.defaultAccount }:redshiftidcapplication:${ redshiftIdcApplicationId }`);
  }

  /**
   * Filters access by actions based on the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toCopyClusterSnapshot()
   * - .toCreateCluster()
   * - .toCreateClusterParameterGroup()
   * - .toCreateClusterSecurityGroup()
   * - .toCreateClusterSnapshot()
   * - .toCreateClusterSubnetGroup()
   * - .toCreateEventSubscription()
   * - .toCreateHsmClientCertificate()
   * - .toCreateHsmConfiguration()
   * - .toCreateSnapshotCopyGrant()
   * - .toCreateSnapshotSchedule()
   * - .toCreateTags()
   * - .toCreateUsageLimit()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by actions based on tag-value associated with the resource
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to resource types:
   * - cluster
   * - datashare
   * - dbgroup
   * - dbname
   * - dbuser
   * - eventsubscription
   * - hsmclientcertificate
   * - hsmconfiguration
   * - namespace
   * - parametergroup
   * - securitygroup
   * - securitygroupingress-cidr
   * - securitygroupingress-ec2securitygroup
   * - snapshot
   * - snapshotcopygrant
   * - snapshotschedule
   * - subnetgroup
   * - usagelimit
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by actions based on the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toCopyClusterSnapshot()
   * - .toCreateCluster()
   * - .toCreateClusterParameterGroup()
   * - .toCreateClusterSecurityGroup()
   * - .toCreateClusterSnapshot()
   * - .toCreateClusterSubnetGroup()
   * - .toCreateEventSubscription()
   * - .toCreateHsmClientCertificate()
   * - .toCreateHsmConfiguration()
   * - .toCreateSnapshotCopyGrant()
   * - .toCreateSnapshotSchedule()
   * - .toCreateTags()
   * - .toCreateUsageLimit()
   * - .toDeleteTags()
   * - .toRestoreFromClusterSnapshot()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the allowWrites input parameter
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toAssociateDataShareConsumer()
   * - .toAuthorizeDataShare()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAllowWrites(value?: boolean) {
    return this.if(`AllowWrites`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the datashare consumer arn
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toAssociateDataShareConsumer()
   * - .toDisassociateDataShareConsumer()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifConsumerArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ConsumerArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the datashare consumer
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toAuthorizeDataShare()
   * - .toDeauthorizeDataShare()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifConsumerIdentifier(value: string | string[], operator?: Operator | string) {
    return this.if(`ConsumerIdentifier`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the database name
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toGetClusterCredentials()
   * - .toGetClusterCredentialsWithIAM()
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
   * - .toGetClusterCredentialsWithIAM()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDurationSeconds(value: string | string[], operator?: Operator | string) {
    return this.if(`DurationSeconds`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of an inbound zero-ETL Integration resource
   *
   * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions
   *
   * Applies to actions:
   * - .toDescribeInboundIntegrations()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInboundIntegrationArn(value: string | string[], operator?: Operator | string) {
    return this.if(`InboundIntegrationArn`, value, operator || 'StringLike');
  }
}
