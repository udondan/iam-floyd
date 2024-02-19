import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [drs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticdisasterrecovery.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Drs extends PolicyStatement {
  public servicePrefix = 'drs';

  /**
   * Statement provider for service [drs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticdisasterrecovery.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get associate failback client to recovery instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toAssociateFailbackClientToRecoveryInstanceForDrs() {
    return this.to('AssociateFailbackClientToRecoveryInstanceForDrs');
  }

  /**
   * Grants permission to associate CloudFormation stack with source network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - cloudformation:DescribeStackResource
   * - cloudformation:DescribeStacks
   * - drs:GetLaunchConfiguration
   * - ec2:CreateLaunchTemplateVersion
   * - ec2:DescribeLaunchTemplateVersions
   * - ec2:DescribeLaunchTemplates
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - ec2:ModifyLaunchTemplate
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_AssociateSourceNetworkStack.html
   */
  public toAssociateSourceNetworkStack() {
    return this.to('AssociateSourceNetworkStack');
  }

  /**
   * Grants permission to batch create volume snapshot group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toBatchCreateVolumeSnapshotGroupForDrs() {
    return this.to('BatchCreateVolumeSnapshotGroupForDrs');
  }

  /**
   * Grants permission to batch delete snapshot request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toBatchDeleteSnapshotRequestForDrs() {
    return this.to('BatchDeleteSnapshotRequestForDrs');
  }

  /**
   * Grants permission to create converted snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toCreateConvertedSnapshotForDrs() {
    return this.to('CreateConvertedSnapshotForDrs');
  }

  /**
   * Grants permission to extend a source server
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - drs:DescribeSourceServers
   * - drs:GetReplicationConfiguration
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_CreateExtendedSourceServer.html
   */
  public toCreateExtendedSourceServer() {
    return this.to('CreateExtendedSourceServer');
  }

  /**
   * Grants permission to create launch configuration template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_CreateLaunchConfigurationTemplate.html
   */
  public toCreateLaunchConfigurationTemplate() {
    return this.to('CreateLaunchConfigurationTemplate');
  }

  /**
   * Grants permission to create recovery instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toCreateRecoveryInstanceForDrs() {
    return this.to('CreateRecoveryInstanceForDrs');
  }

  /**
   * Grants permission to create replication configuration template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:CreateSecurityGroup
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:GetEbsDefaultKmsKeyId
   * - ec2:GetEbsEncryptionByDefault
   * - kms:CreateGrant
   * - kms:DescribeKey
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_CreateReplicationConfigurationTemplate.html
   */
  public toCreateReplicationConfigurationTemplate() {
    return this.to('CreateReplicationConfigurationTemplate');
  }

  /**
   * Grants permission to create a source network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:DescribeInstances
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_CreateSourceNetwork.html
   */
  public toCreateSourceNetwork() {
    return this.to('CreateSourceNetwork');
  }

  /**
   * Grants permission to create a source server
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toCreateSourceServerForDrs() {
    return this.to('CreateSourceServerForDrs');
  }

  /**
   * Grants permission to delete a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteJob.html
   */
  public toDeleteJob() {
    return this.to('DeleteJob');
  }

  /**
   * Grants permission to delete a launch action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteLaunchAction.html
   */
  public toDeleteLaunchAction() {
    return this.to('DeleteLaunchAction');
  }

  /**
   * Grants permission to delete launch configuration template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteLaunchConfigurationTemplate.html
   */
  public toDeleteLaunchConfigurationTemplate() {
    return this.to('DeleteLaunchConfigurationTemplate');
  }

  /**
   * Grants permission to delete recovery instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteRecoveryInstance.html
   */
  public toDeleteRecoveryInstance() {
    return this.to('DeleteRecoveryInstance');
  }

  /**
   * Grants permission to delete replication configuration template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteReplicationConfigurationTemplate.html
   */
  public toDeleteReplicationConfigurationTemplate() {
    return this.to('DeleteReplicationConfigurationTemplate');
  }

  /**
   * Grants permission to delete source network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteSourceNetwork.html
   */
  public toDeleteSourceNetwork() {
    return this.to('DeleteSourceNetwork');
  }

  /**
   * Grants permission to delete source server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteSourceServer.html
   */
  public toDeleteSourceServer() {
    return this.to('DeleteSourceServer');
  }

  /**
   * Grants permission to describe job log items
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeJobLogItems.html
   */
  public toDescribeJobLogItems() {
    return this.to('DescribeJobLogItems');
  }

  /**
   * Grants permission to describe jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeJobs.html
   */
  public toDescribeJobs() {
    return this.to('DescribeJobs');
  }

  /**
   * Grants permission to describe launch configuration template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeLaunchConfigurationTemplates.html
   */
  public toDescribeLaunchConfigurationTemplates() {
    return this.to('DescribeLaunchConfigurationTemplates');
  }

  /**
   * Grants permission to describe recovery instances
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - drs:DescribeSourceServers
   * - ec2:DescribeInstances
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeRecoveryInstances.html
   */
  public toDescribeRecoveryInstances() {
    return this.to('DescribeRecoveryInstances');
  }

  /**
   * Grants permission to describe recovery snapshots
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeRecoverySnapshots.html
   */
  public toDescribeRecoverySnapshots() {
    return this.to('DescribeRecoverySnapshots');
  }

  /**
   * Grants permission to describe replication configuration template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeReplicationConfigurationTemplates.html
   */
  public toDescribeReplicationConfigurationTemplates() {
    return this.to('DescribeReplicationConfigurationTemplates');
  }

  /**
   * Grants permission to describe replication server associations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toDescribeReplicationServerAssociationsForDrs() {
    return this.to('DescribeReplicationServerAssociationsForDrs');
  }

  /**
   * Grants permission to describe snapshot requests
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toDescribeSnapshotRequestsForDrs() {
    return this.to('DescribeSnapshotRequestsForDrs');
  }

  /**
   * Grants permission to describe source networks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeSourceNetworks.html
   */
  public toDescribeSourceNetworks() {
    return this.to('DescribeSourceNetworks');
  }

  /**
   * Grants permission to describe source servers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeSourceServers.html
   */
  public toDescribeSourceServers() {
    return this.to('DescribeSourceServers');
  }

  /**
   * Grants permission to disconnect recovery instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DisconnectRecoveryInstance.html
   */
  public toDisconnectRecoveryInstance() {
    return this.to('DisconnectRecoveryInstance');
  }

  /**
   * Grants permission to disconnect source server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_DisconnectSourceServer.html
   */
  public toDisconnectSourceServer() {
    return this.to('DisconnectSourceServer');
  }

  /**
   * Grants permission to export CloudFormation template which contains source network resources
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - s3:GetBucketLocation
   * - s3:GetObject
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_ExportSourceNetworkCfnTemplate.html
   */
  public toExportSourceNetworkCfnTemplate() {
    return this.to('ExportSourceNetworkCfnTemplate');
  }

  /**
   * Grants permission to get agent command
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toGetAgentCommandForDrs() {
    return this.to('GetAgentCommandForDrs');
  }

  /**
   * Grants permission to get agent confirmed resume info
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toGetAgentConfirmedResumeInfoForDrs() {
    return this.to('GetAgentConfirmedResumeInfoForDrs');
  }

  /**
   * Grants permission to get agent installation assets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toGetAgentInstallationAssetsForDrs() {
    return this.to('GetAgentInstallationAssetsForDrs');
  }

  /**
   * Grants permission to get agent replication info
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toGetAgentReplicationInfoForDrs() {
    return this.to('GetAgentReplicationInfoForDrs');
  }

  /**
   * Grants permission to get agent runtime configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toGetAgentRuntimeConfigurationForDrs() {
    return this.to('GetAgentRuntimeConfigurationForDrs');
  }

  /**
   * Grants permission to get agent snapshot credits
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toGetAgentSnapshotCreditsForDrs() {
    return this.to('GetAgentSnapshotCreditsForDrs');
  }

  /**
   * Grants permission to get channel commands
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toGetChannelCommandsForDrs() {
    return this.to('GetChannelCommandsForDrs');
  }

  /**
   * Grants permission to get failback command
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toGetFailbackCommandForDrs() {
    return this.to('GetFailbackCommandForDrs');
  }

  /**
   * Grants permission to get failback launch requested
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toGetFailbackLaunchRequestedForDrs() {
    return this.to('GetFailbackLaunchRequestedForDrs');
  }

  /**
   * Grants permission to get failback replication configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_GetFailbackReplicationConfiguration.html
   */
  public toGetFailbackReplicationConfiguration() {
    return this.to('GetFailbackReplicationConfiguration');
  }

  /**
   * Grants permission to get launch configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_GetLaunchConfiguration.html
   */
  public toGetLaunchConfiguration() {
    return this.to('GetLaunchConfiguration');
  }

  /**
   * Grants permission to get replication configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_GetReplicationConfiguration.html
   */
  public toGetReplicationConfiguration() {
    return this.to('GetReplicationConfiguration');
  }

  /**
   * Grants permission to get suggested failback client device mapping
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toGetSuggestedFailbackClientDeviceMappingForDrs() {
    return this.to('GetSuggestedFailbackClientDeviceMappingForDrs');
  }

  /**
   * Grants permission to initialize service
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:AddRoleToInstanceProfile
   * - iam:CreateInstanceProfile
   * - iam:CreateServiceLinkedRole
   * - iam:GetInstanceProfile
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_InitializeService.html
   */
  public toInitializeService() {
    return this.to('InitializeService');
  }

  /**
   * Grants permission to issue an agent certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toIssueAgentCertificateForDrs() {
    return this.to('IssueAgentCertificateForDrs');
  }

  /**
   * Grants permission to list extensible source servers
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - drs:DescribeSourceServers
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_ListExtensibleSourceServers.html
   */
  public toListExtensibleSourceServers() {
    return this.to('ListExtensibleSourceServers');
  }

  /**
   * Grants permission to list launch actions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_ListLaunchActions.html
   */
  public toListLaunchActions() {
    return this.to('ListLaunchActions');
  }

  /**
   * Grants permission to list staging accounts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_ListStagingAccounts.html
   */
  public toListStagingAccounts() {
    return this.to('ListStagingAccounts');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to notify agent authentication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toNotifyAgentAuthenticationForDrs() {
    return this.to('NotifyAgentAuthenticationForDrs');
  }

  /**
   * Grants permission to notify agent is connected
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toNotifyAgentConnectedForDrs() {
    return this.to('NotifyAgentConnectedForDrs');
  }

  /**
   * Grants permission to notify agent is disconnected
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toNotifyAgentDisconnectedForDrs() {
    return this.to('NotifyAgentDisconnectedForDrs');
  }

  /**
   * Grants permission to notify agent replication progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toNotifyAgentReplicationProgressForDrs() {
    return this.to('NotifyAgentReplicationProgressForDrs');
  }

  /**
   * Grants permission to notify consistency attained
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toNotifyConsistencyAttainedForDrs() {
    return this.to('NotifyConsistencyAttainedForDrs');
  }

  /**
   * Grants permission to notify replication server authentication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toNotifyReplicationServerAuthenticationForDrs() {
    return this.to('NotifyReplicationServerAuthenticationForDrs');
  }

  /**
   * Grants permission to notify replicator volume events
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toNotifyVolumeEventForDrs() {
    return this.to('NotifyVolumeEventForDrs');
  }

  /**
   * Grants permission to put a launch action
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ssm:DescribeDocument
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_PutLaunchAction.html
   */
  public toPutLaunchAction() {
    return this.to('PutLaunchAction');
  }

  /**
   * Grants permission to retry data replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_RetryDataReplication.html
   */
  public toRetryDataReplication() {
    return this.to('RetryDataReplication');
  }

  /**
   * Grants permission to reverse replication
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - drs:DescribeReplicationConfigurationTemplates
   * - drs:DescribeSourceServers
   * - ec2:DescribeInstances
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_ReverseReplication.html
   */
  public toReverseReplication() {
    return this.to('ReverseReplication');
  }

  /**
   * Grants permission to send agent logs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toSendAgentLogsForDrs() {
    return this.to('SendAgentLogsForDrs');
  }

  /**
   * Grants permission to send agent metrics
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toSendAgentMetricsForDrs() {
    return this.to('SendAgentMetricsForDrs');
  }

  /**
   * Grants permission to send channel command result
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toSendChannelCommandResultForDrs() {
    return this.to('SendChannelCommandResultForDrs');
  }

  /**
   * Grants permission to send client logs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toSendClientLogsForDrs() {
    return this.to('SendClientLogsForDrs');
  }

  /**
   * Grants permission to send client metrics
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toSendClientMetricsForDrs() {
    return this.to('SendClientMetricsForDrs');
  }

  /**
   * Grants permission to send volume throughput statistics
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toSendVolumeStatsForDrs() {
    return this.to('SendVolumeStatsForDrs');
  }

  /**
   * Grants permission to start failback launch
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StartFailbackLaunch.html
   */
  public toStartFailbackLaunch() {
    return this.to('StartFailbackLaunch');
  }

  /**
   * Grants permission to start recovery
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - drs:CreateRecoveryInstanceForDrs
   * - drs:ListTagsForResource
   * - ec2:AttachVolume
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateLaunchTemplate
   * - ec2:CreateLaunchTemplateVersion
   * - ec2:CreateSnapshot
   * - ec2:CreateTags
   * - ec2:CreateVolume
   * - ec2:DeleteLaunchTemplateVersions
   * - ec2:DeleteSnapshot
   * - ec2:DeleteVolume
   * - ec2:DescribeAccountAttributes
   * - ec2:DescribeAvailabilityZones
   * - ec2:DescribeImages
   * - ec2:DescribeInstanceAttribute
   * - ec2:DescribeInstanceStatus
   * - ec2:DescribeInstanceTypes
   * - ec2:DescribeInstances
   * - ec2:DescribeLaunchTemplateVersions
   * - ec2:DescribeLaunchTemplates
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSnapshots
   * - ec2:DescribeSubnets
   * - ec2:DescribeVolumes
   * - ec2:DetachVolume
   * - ec2:ModifyInstanceAttribute
   * - ec2:ModifyLaunchTemplate
   * - ec2:RevokeSecurityGroupEgress
   * - ec2:RunInstances
   * - ec2:StartInstances
   * - ec2:StopInstances
   * - ec2:TerminateInstances
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StartRecovery.html
   */
  public toStartRecovery() {
    return this.to('StartRecovery');
  }

  /**
   * Grants permission to start replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StartReplication.html
   */
  public toStartReplication() {
    return this.to('StartReplication');
  }

  /**
   * Grants permission to start network recovery
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - cloudformation:CreateStack
   * - cloudformation:DescribeStackResource
   * - cloudformation:DescribeStacks
   * - cloudformation:UpdateStack
   * - drs:GetLaunchConfiguration
   * - ec2:CreateLaunchTemplateVersion
   * - ec2:DescribeLaunchTemplateVersions
   * - ec2:DescribeLaunchTemplates
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - ec2:ModifyLaunchTemplate
   * - s3:GetObject
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StartSourceNetworkRecovery.html
   */
  public toStartSourceNetworkRecovery() {
    return this.to('StartSourceNetworkRecovery');
  }

  /**
   * Grants permission to start network replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StartSourceNetworkReplication.html
   */
  public toStartSourceNetworkReplication() {
    return this.to('StartSourceNetworkReplication');
  }

  /**
   * Grants permission to stop failback
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StopFailback.html
   */
  public toStopFailback() {
    return this.to('StopFailback');
  }

  /**
   * Grants permission to stop replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StopReplication.html
   */
  public toStopReplication() {
    return this.to('StopReplication');
  }

  /**
   * Grants permission to stop network replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_StopSourceNetworkReplication.html
   */
  public toStopSourceNetworkReplication() {
    return this.to('StopSourceNetworkReplication');
  }

  /**
   * Grants permission to assign a resource tag
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCreateAction()
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to terminate recovery instances
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - drs:DescribeSourceServers
   * - ec2:DeleteVolume
   * - ec2:DescribeInstances
   * - ec2:DescribeVolumes
   * - ec2:TerminateInstances
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_TerminateRecoveryInstances.html
   */
  public toTerminateRecoveryInstances() {
    return this.to('TerminateRecoveryInstances');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update agent backlog
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toUpdateAgentBacklogForDrs() {
    return this.to('UpdateAgentBacklogForDrs');
  }

  /**
   * Grants permission to update agent conversion info
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toUpdateAgentConversionInfoForDrs() {
    return this.to('UpdateAgentConversionInfoForDrs');
  }

  /**
   * Grants permission to update agent replication info
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toUpdateAgentReplicationInfoForDrs() {
    return this.to('UpdateAgentReplicationInfoForDrs');
  }

  /**
   * Grants permission to update agent replication process state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toUpdateAgentReplicationProcessStateForDrs() {
    return this.to('UpdateAgentReplicationProcessStateForDrs');
  }

  /**
   * Grants permission to update agent source properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toUpdateAgentSourcePropertiesForDrs() {
    return this.to('UpdateAgentSourcePropertiesForDrs');
  }

  /**
   * Grants permission to update failback client device mapping
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toUpdateFailbackClientDeviceMappingForDrs() {
    return this.to('UpdateFailbackClientDeviceMappingForDrs');
  }

  /**
   * Grants permission to update failback client last seen
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toUpdateFailbackClientLastSeenForDrs() {
    return this.to('UpdateFailbackClientLastSeenForDrs');
  }

  /**
   * Grants permission to update failback replication configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateFailbackReplicationConfiguration.html
   */
  public toUpdateFailbackReplicationConfiguration() {
    return this.to('UpdateFailbackReplicationConfiguration');
  }

  /**
   * Grants permission to update launch configuration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeInstances
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateLaunchConfiguration.html
   */
  public toUpdateLaunchConfiguration() {
    return this.to('UpdateLaunchConfiguration');
  }

  /**
   * Grants permission to update launch configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateLaunchConfigurationTemplate.html
   */
  public toUpdateLaunchConfigurationTemplate() {
    return this.to('UpdateLaunchConfigurationTemplate');
  }

  /**
   * Grants permission to update a replication certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  public toUpdateReplicationCertificateForDrs() {
    return this.to('UpdateReplicationCertificateForDrs');
  }

  /**
   * Grants permission to update replication configuration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateSecurityGroup
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:GetEbsDefaultKmsKeyId
   * - ec2:GetEbsEncryptionByDefault
   * - kms:CreateGrant
   * - kms:DescribeKey
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateReplicationConfiguration.html
   */
  public toUpdateReplicationConfiguration() {
    return this.to('UpdateReplicationConfiguration');
  }

  /**
   * Grants permission to update replication configuration template
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateSecurityGroup
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:GetEbsDefaultKmsKeyId
   * - ec2:GetEbsEncryptionByDefault
   * - kms:CreateGrant
   * - kms:DescribeKey
   *
   * https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateReplicationConfigurationTemplate.html
   */
  public toUpdateReplicationConfigurationTemplate() {
    return this.to('UpdateReplicationConfigurationTemplate');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateFailbackClientToRecoveryInstanceForDrs',
      'AssociateSourceNetworkStack',
      'BatchCreateVolumeSnapshotGroupForDrs',
      'BatchDeleteSnapshotRequestForDrs',
      'CreateConvertedSnapshotForDrs',
      'CreateExtendedSourceServer',
      'CreateLaunchConfigurationTemplate',
      'CreateRecoveryInstanceForDrs',
      'CreateReplicationConfigurationTemplate',
      'CreateSourceNetwork',
      'CreateSourceServerForDrs',
      'DeleteJob',
      'DeleteLaunchAction',
      'DeleteLaunchConfigurationTemplate',
      'DeleteRecoveryInstance',
      'DeleteReplicationConfigurationTemplate',
      'DeleteSourceNetwork',
      'DeleteSourceServer',
      'DisconnectRecoveryInstance',
      'DisconnectSourceServer',
      'ExportSourceNetworkCfnTemplate',
      'InitializeService',
      'IssueAgentCertificateForDrs',
      'NotifyAgentAuthenticationForDrs',
      'NotifyAgentConnectedForDrs',
      'NotifyAgentDisconnectedForDrs',
      'NotifyAgentReplicationProgressForDrs',
      'NotifyConsistencyAttainedForDrs',
      'NotifyReplicationServerAuthenticationForDrs',
      'NotifyVolumeEventForDrs',
      'PutLaunchAction',
      'RetryDataReplication',
      'ReverseReplication',
      'SendAgentLogsForDrs',
      'SendAgentMetricsForDrs',
      'SendChannelCommandResultForDrs',
      'SendClientLogsForDrs',
      'SendClientMetricsForDrs',
      'SendVolumeStatsForDrs',
      'StartFailbackLaunch',
      'StartRecovery',
      'StartReplication',
      'StartSourceNetworkRecovery',
      'StartSourceNetworkReplication',
      'StopFailback',
      'StopReplication',
      'StopSourceNetworkReplication',
      'TerminateRecoveryInstances',
      'UpdateAgentBacklogForDrs',
      'UpdateAgentConversionInfoForDrs',
      'UpdateAgentReplicationInfoForDrs',
      'UpdateAgentReplicationProcessStateForDrs',
      'UpdateAgentSourcePropertiesForDrs',
      'UpdateFailbackClientDeviceMappingForDrs',
      'UpdateFailbackClientLastSeenForDrs',
      'UpdateFailbackReplicationConfiguration',
      'UpdateLaunchConfiguration',
      'UpdateLaunchConfigurationTemplate',
      'UpdateReplicationCertificateForDrs',
      'UpdateReplicationConfiguration',
      'UpdateReplicationConfigurationTemplate'
    ],
    Read: [
      'DescribeJobLogItems',
      'DescribeJobs',
      'DescribeLaunchConfigurationTemplates',
      'DescribeRecoveryInstances',
      'DescribeRecoverySnapshots',
      'DescribeReplicationConfigurationTemplates',
      'DescribeReplicationServerAssociationsForDrs',
      'DescribeSnapshotRequestsForDrs',
      'DescribeSourceNetworks',
      'DescribeSourceServers',
      'GetAgentCommandForDrs',
      'GetAgentConfirmedResumeInfoForDrs',
      'GetAgentInstallationAssetsForDrs',
      'GetAgentReplicationInfoForDrs',
      'GetAgentRuntimeConfigurationForDrs',
      'GetAgentSnapshotCreditsForDrs',
      'GetChannelCommandsForDrs',
      'GetFailbackCommandForDrs',
      'GetFailbackLaunchRequestedForDrs',
      'GetFailbackReplicationConfiguration',
      'GetLaunchConfiguration',
      'GetReplicationConfiguration',
      'GetSuggestedFailbackClientDeviceMappingForDrs',
      'ListExtensibleSourceServers',
      'ListLaunchActions',
      'ListStagingAccounts',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type JobResource to the statement
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/failback-overview.html
   *
   * @param jobID - Identifier for the jobID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJobResource(jobID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:drs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:job/${ jobID }`);
  }

  /**
   * Adds a resource of type RecoveryInstanceResource to the statement
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/recovery-instances.html
   *
   * @param recoveryInstanceID - Identifier for the recoveryInstanceID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifEC2InstanceARN()
   */
  public onRecoveryInstanceResource(recoveryInstanceID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:drs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:recovery-instance/${ recoveryInstanceID }`);
  }

  /**
   * Adds a resource of type ReplicationConfigurationTemplateResource to the statement
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/replication-settings-template.html
   *
   * @param replicationConfigurationTemplateID - Identifier for the replicationConfigurationTemplateID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReplicationConfigurationTemplateResource(replicationConfigurationTemplateID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:drs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:replication-configuration-template/${ replicationConfigurationTemplateID }`);
  }

  /**
   * Adds a resource of type LaunchConfigurationTemplateResource to the statement
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/default-drs-launch-settings.html
   *
   * @param launchConfigurationTemplateID - Identifier for the launchConfigurationTemplateID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLaunchConfigurationTemplateResource(launchConfigurationTemplateID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:drs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:launch-configuration-template/${ launchConfigurationTemplateID }`);
  }

  /**
   * Adds a resource of type SourceServerResource to the statement
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/source-servers.html
   *
   * @param sourceServerID - Identifier for the sourceServerID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSourceServerResource(sourceServerID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:drs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:source-server/${ sourceServerID }`);
  }

  /**
   * Adds a resource of type SourceNetworkResource to the statement
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/source-networks.html
   *
   * @param sourceNetworkID - Identifier for the sourceNetworkID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSourceNetworkResource(sourceNetworkID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:drs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:source-network/${ sourceNetworkID }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAssociateSourceNetworkStack()
   * - .toCreateConvertedSnapshotForDrs()
   * - .toCreateExtendedSourceServer()
   * - .toCreateLaunchConfigurationTemplate()
   * - .toCreateRecoveryInstanceForDrs()
   * - .toCreateReplicationConfigurationTemplate()
   * - .toCreateSourceNetwork()
   * - .toCreateSourceServerForDrs()
   * - .toExportSourceNetworkCfnTemplate()
   * - .toReverseReplication()
   * - .toStartFailbackLaunch()
   * - .toStartRecovery()
   * - .toStartSourceNetworkRecovery()
   * - .toTagResource()
   * - .toTerminateRecoveryInstances()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - JobResource
   * - RecoveryInstanceResource
   * - ReplicationConfigurationTemplateResource
   * - LaunchConfigurationTemplateResource
   * - SourceServerResource
   * - SourceNetworkResource
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAssociateSourceNetworkStack()
   * - .toCreateConvertedSnapshotForDrs()
   * - .toCreateExtendedSourceServer()
   * - .toCreateLaunchConfigurationTemplate()
   * - .toCreateRecoveryInstanceForDrs()
   * - .toCreateReplicationConfigurationTemplate()
   * - .toCreateSourceNetwork()
   * - .toCreateSourceServerForDrs()
   * - .toExportSourceNetworkCfnTemplate()
   * - .toReverseReplication()
   * - .toStartFailbackLaunch()
   * - .toStartRecovery()
   * - .toStartSourceNetworkRecovery()
   * - .toTagResource()
   * - .toTerminateRecoveryInstances()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of a resource-creating API action
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/supported-iam-actions-tagging.html
   *
   * Applies to actions:
   * - .toTagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCreateAction(value: string | string[], operator?: Operator | string) {
    return this.if(`CreateAction`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the EC2 instance the request originated from
   *
   * https://docs.aws.amazon.com/drs/latest/userguide/security_iam_authentication.html
   *
   * Applies to resource types:
   * - RecoveryInstanceResource
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifEC2InstanceARN(value: string | string[], operator?: Operator | string) {
    return this.if(`EC2InstanceARN`, value, operator ?? 'ArnLike');
  }
}
