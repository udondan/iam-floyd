import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [mgn](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationmigrationservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mgn extends PolicyStatement {
  public servicePrefix = 'mgn';

  /**
   * Statement provider for service [mgn](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationmigrationservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to archive an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ArchiveApplication.html
   */
  public toArchiveApplication() {
    return this.to('ArchiveApplication');
  }

  /**
   * Grants permission to archive a wave
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ArchiveWave.html
   */
  public toArchiveWave() {
    return this.to('ArchiveWave');
  }

  /**
   * Grants permission to associate applications to a wave
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_AssociateApplications.html
   */
  public toAssociateApplications() {
    return this.to('AssociateApplications');
  }

  /**
   * Grants permission to associate source servers to an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_AssociateSourceServers.html
   */
  public toAssociateSourceServers() {
    return this.to('AssociateSourceServers');
  }

  /**
   * Grants permission to create volume snapshot group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toBatchCreateVolumeSnapshotGroupForMgn() {
    return this.to('BatchCreateVolumeSnapshotGroupForMgn');
  }

  /**
   * Grants permission to batch delete snapshot request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toBatchDeleteSnapshotRequestForMgn() {
    return this.to('BatchDeleteSnapshotRequestForMgn');
  }

  /**
   * Grants permission to change source server life cycle state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ChangeServerLifeCycleState.html
   */
  public toChangeServerLifeCycleState() {
    return this.to('ChangeServerLifeCycleState');
  }

  /**
   * Grants permission to create an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create connector
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_CreateConnector.html
   */
  public toCreateConnector() {
    return this.to('CreateConnector');
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
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_CreateLaunchConfigurationTemplate.html
   */
  public toCreateLaunchConfigurationTemplate() {
    return this.to('CreateLaunchConfigurationTemplate');
  }

  /**
   * Grants permission to create a network migration definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_CreateNetworkMigrationDefinition.html
   */
  public toCreateNetworkMigrationDefinition() {
    return this.to('CreateNetworkMigrationDefinition');
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
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_CreateReplicationConfigurationTemplate.html
   */
  public toCreateReplicationConfigurationTemplate() {
    return this.to('CreateReplicationConfigurationTemplate');
  }

  /**
   * Grants permission to create vcenter client
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toCreateVcenterClientForMgn() {
    return this.to('CreateVcenterClientForMgn');
  }

  /**
   * Grants permission to create a wave
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_CreateWave.html
   */
  public toCreateWave() {
    return this.to('CreateWave');
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteConnector.html
   */
  public toDeleteConnector() {
    return this.to('DeleteConnector');
  }

  /**
   * Grants permission to delete job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteJob.html
   */
  public toDeleteJob() {
    return this.to('DeleteJob');
  }

  /**
   * Grants permission to delete launch configuration template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteLaunchConfigurationTemplate.html
   */
  public toDeleteLaunchConfigurationTemplate() {
    return this.to('DeleteLaunchConfigurationTemplate');
  }

  /**
   * Grants permission to delete a network migration definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteNetworkMigrationDefinition.html
   */
  public toDeleteNetworkMigrationDefinition() {
    return this.to('DeleteNetworkMigrationDefinition');
  }

  /**
   * Grants permission to delete replication configuration template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteReplicationConfigurationTemplate.html
   */
  public toDeleteReplicationConfigurationTemplate() {
    return this.to('DeleteReplicationConfigurationTemplate');
  }

  /**
   * Grants permission to delete source server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteSourceServer.html
   */
  public toDeleteSourceServer() {
    return this.to('DeleteSourceServer');
  }

  /**
   * Grants permission to delete vcenter client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteVcenterClient.html
   */
  public toDeleteVcenterClient() {
    return this.to('DeleteVcenterClient');
  }

  /**
   * Grants permission to delete a wave
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteWave.html
   */
  public toDeleteWave() {
    return this.to('DeleteWave');
  }

  /**
   * Grants permission to describe job log items
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeJobLogItems.html
   */
  public toDescribeJobLogItems() {
    return this.to('DescribeJobLogItems');
  }

  /**
   * Grants permission to describe jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeJobs.html
   */
  public toDescribeJobs() {
    return this.to('DescribeJobs');
  }

  /**
   * Grants permission to describe launch configuration template
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeLaunchConfigurationTemplates.html
   */
  public toDescribeLaunchConfigurationTemplates() {
    return this.to('DescribeLaunchConfigurationTemplates');
  }

  /**
   * Grants permission to describe replication configuration template
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeReplicationConfigurationTemplates.html
   */
  public toDescribeReplicationConfigurationTemplates() {
    return this.to('DescribeReplicationConfigurationTemplates');
  }

  /**
   * Grants permission to describe replication server associations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toDescribeReplicationServerAssociationsForMgn() {
    return this.to('DescribeReplicationServerAssociationsForMgn');
  }

  /**
   * Grants permission to describe snapshots requests
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toDescribeSnapshotRequestsForMgn() {
    return this.to('DescribeSnapshotRequestsForMgn');
  }

  /**
   * Grants permission to describe source servers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeSourceServers.html
   */
  public toDescribeSourceServers() {
    return this.to('DescribeSourceServers');
  }

  /**
   * Grants permission to describe vcenter clients
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeVcenterClients.html
   */
  public toDescribeVcenterClients() {
    return this.to('DescribeVcenterClients');
  }

  /**
   * Grants permission to disassociate applications from a wave
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DisassociateApplications.html
   */
  public toDisassociateApplications() {
    return this.to('DisassociateApplications');
  }

  /**
   * Grants permission to disassociate source servers from an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DisassociateSourceServers.html
   */
  public toDisassociateSourceServers() {
    return this.to('DisassociateSourceServers');
  }

  /**
   * Grants permission to disconnect source server from service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_DisconnectFromService.html
   */
  public toDisconnectFromService() {
    return this.to('DisconnectFromService');
  }

  /**
   * Grants permission to finalize cutover
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_FinalizeCutover.html
   */
  public toFinalizeCutover() {
    return this.to('FinalizeCutover');
  }

  /**
   * Grants permission to get agent command
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toGetAgentCommandForMgn() {
    return this.to('GetAgentCommandForMgn');
  }

  /**
   * Grants permission to get agent confirmed resume info
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toGetAgentConfirmedResumeInfoForMgn() {
    return this.to('GetAgentConfirmedResumeInfoForMgn');
  }

  /**
   * Grants permission to get agent installation assets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toGetAgentInstallationAssetsForMgn() {
    return this.to('GetAgentInstallationAssetsForMgn');
  }

  /**
   * Grants permission to get agent replication info
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toGetAgentReplicationInfoForMgn() {
    return this.to('GetAgentReplicationInfoForMgn');
  }

  /**
   * Grants permission to get agent runtime configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toGetAgentRuntimeConfigurationForMgn() {
    return this.to('GetAgentRuntimeConfigurationForMgn');
  }

  /**
   * Grants permission to get agent snapshots credits
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toGetAgentSnapshotCreditsForMgn() {
    return this.to('GetAgentSnapshotCreditsForMgn');
  }

  /**
   * Grants permission to get channel commands
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toGetChannelCommandsForMgn() {
    return this.to('GetChannelCommandsForMgn');
  }

  /**
   * Grants permission to get launch configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_GetLaunchConfiguration.html
   */
  public toGetLaunchConfiguration() {
    return this.to('GetLaunchConfiguration');
  }

  /**
   * Grants permission to get a network migration definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_GetNetworkMigrationDefinition.html
   */
  public toGetNetworkMigrationDefinition() {
    return this.to('GetNetworkMigrationDefinition');
  }

  /**
   * Grants permission to get a network migration mapper segment construct
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_GetNetworkMigrationMapperSegmentConstruct.html
   */
  public toGetNetworkMigrationMapperSegmentConstruct() {
    return this.to('GetNetworkMigrationMapperSegmentConstruct');
  }

  /**
   * Grants permission to get replication configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_GetReplicationConfiguration.html
   */
  public toGetReplicationConfiguration() {
    return this.to('GetReplicationConfiguration');
  }

  /**
   * Grants permission to get vcenter client commands
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toGetVcenterClientCommandsForMgn() {
    return this.to('GetVcenterClientCommandsForMgn');
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
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_InitializeService.html
   */
  public toInitializeService() {
    return this.to('InitializeService');
  }

  /**
   * Grants permission to issue a client certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toIssueClientCertificateForMgn() {
    return this.to('IssueClientCertificateForMgn');
  }

  /**
   * Grants permission to list application summaries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list connectors
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListConnectors.html
   */
  public toListConnectors() {
    return this.to('ListConnectors');
  }

  /**
   * Grants permission to list the errors of an export task
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListExportErrors.html
   */
  public toListExportErrors() {
    return this.to('ListExportErrors');
  }

  /**
   * Grants permission to list export tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListExports.html
   */
  public toListExports() {
    return this.to('ListExports');
  }

  /**
   * Grants permission to list the errors of an import task
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListImportErrors.html
   */
  public toListImportErrors() {
    return this.to('ListImportErrors');
  }

  /**
   * Grants permission to list the import tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListImports.html
   */
  public toListImports() {
    return this.to('ListImports');
  }

  /**
   * Grants permission to list managed accounts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListManagedAccounts.html
   */
  public toListManagedAccounts() {
    return this.to('ListManagedAccounts');
  }

  /**
   * Grants permission to list network migration analyses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListNetworkMigrationAnalyses.html
   */
  public toListNetworkMigrationAnalyses() {
    return this.to('ListNetworkMigrationAnalyses');
  }

  /**
   * Grants permission to list network migration analysis results
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListNetworkMigrationAnalysisResults.html
   */
  public toListNetworkMigrationAnalysisResults() {
    return this.to('ListNetworkMigrationAnalysisResults');
  }

  /**
   * Grants permission to list network migration code generation segments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListNetworkMigrationCodeGenerationSegments.html
   */
  public toListNetworkMigrationCodeGenerationSegments() {
    return this.to('ListNetworkMigrationCodeGenerationSegments');
  }

  /**
   * Grants permission to list network migration code generations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListNetworkMigrationCodeGenerations.html
   */
  public toListNetworkMigrationCodeGenerations() {
    return this.to('ListNetworkMigrationCodeGenerations');
  }

  /**
   * Grants permission to list network migration definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListNetworkMigrationDefinitions.html
   */
  public toListNetworkMigrationDefinitions() {
    return this.to('ListNetworkMigrationDefinitions');
  }

  /**
   * Grants permission to list network migration deployed stacks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListNetworkMigrationDeployedStacks.html
   */
  public toListNetworkMigrationDeployedStacks() {
    return this.to('ListNetworkMigrationDeployedStacks');
  }

  /**
   * Grants permission to list network migration deployed stacks deletions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListNetworkMigrationDeployedStacksDeletions.html
   */
  public toListNetworkMigrationDeployedStacksDeletions() {
    return this.to('ListNetworkMigrationDeployedStacksDeletions');
  }

  /**
   * Grants permission to list network migration deployments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListNetworkMigrationDeployments.html
   */
  public toListNetworkMigrationDeployments() {
    return this.to('ListNetworkMigrationDeployments');
  }

  /**
   * Grants permission to list network migration executions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListNetworkMigrationExecutions.html
   */
  public toListNetworkMigrationExecutions() {
    return this.to('ListNetworkMigrationExecutions');
  }

  /**
   * Grants permission to list network migration mapper segment constructs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListNetworkMigrationMapperSegmentConstructs.html
   */
  public toListNetworkMigrationMapperSegmentConstructs() {
    return this.to('ListNetworkMigrationMapperSegmentConstructs');
  }

  /**
   * Grants permission to list network migration mapper segments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListNetworkMigrationMapperSegments.html
   */
  public toListNetworkMigrationMapperSegments() {
    return this.to('ListNetworkMigrationMapperSegments');
  }

  /**
   * Grants permission to list network migration mappings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListNetworkMigrationMappings.html
   */
  public toListNetworkMigrationMappings() {
    return this.to('ListNetworkMigrationMappings');
  }

  /**
   * Grants permission to list source server action documents
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListSourceServerActions.html
   */
  public toListSourceServerActions() {
    return this.to('ListSourceServerActions');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list launch configuration template action documents
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListTemplateActions.html
   */
  public toListTemplateActions() {
    return this.to('ListTemplateActions');
  }

  /**
   * Grants permission to list wave summaries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListWaves.html
   */
  public toListWaves() {
    return this.to('ListWaves');
  }

  /**
   * Grants permission to mark source server as archived
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_MarkAsArchived.html
   */
  public toMarkAsArchived() {
    return this.to('MarkAsArchived');
  }

  /**
   * Grants permission to notify agent authentication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toNotifyAgentAuthenticationForMgn() {
    return this.to('NotifyAgentAuthenticationForMgn');
  }

  /**
   * Grants permission to notify agent is connected
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toNotifyAgentConnectedForMgn() {
    return this.to('NotifyAgentConnectedForMgn');
  }

  /**
   * Grants permission to notify agent is disconnected
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toNotifyAgentDisconnectedForMgn() {
    return this.to('NotifyAgentDisconnectedForMgn');
  }

  /**
   * Grants permission to notify agent replication progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toNotifyAgentReplicationProgressForMgn() {
    return this.to('NotifyAgentReplicationProgressForMgn');
  }

  /**
   * Grants permission to notify vcenter client started
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toNotifyVcenterClientStartedForMgn() {
    return this.to('NotifyVcenterClientStartedForMgn');
  }

  /**
   * Grants permission to pause replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_PauseReplication.html
   */
  public toPauseReplication() {
    return this.to('PauseReplication');
  }

  /**
   * Grants permission to put source server action document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_PutSourceServerAction.html
   */
  public toPutSourceServerAction() {
    return this.to('PutSourceServerAction');
  }

  /**
   * Grants permission to put launch configuration template action document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_PutTemplateAction.html
   */
  public toPutTemplateAction() {
    return this.to('PutTemplateAction');
  }

  /**
   * Grants permission to register agent
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toRegisterAgentForMgn() {
    return this.to('RegisterAgentForMgn');
  }

  /**
   * Grants permission to remove source server action document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_RemoveSourceServerAction.html
   */
  public toRemoveSourceServerAction() {
    return this.to('RemoveSourceServerAction');
  }

  /**
   * Grants permission to remove launch configuration template action document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_RemoveTemplateAction.html
   */
  public toRemoveTemplateAction() {
    return this.to('RemoveTemplateAction');
  }

  /**
   * Grants permission to resume replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_ResumeReplication.html
   */
  public toResumeReplication() {
    return this.to('ResumeReplication');
  }

  /**
   * Grants permission to retry replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_RetryDataReplication.html
   */
  public toRetryDataReplication() {
    return this.to('RetryDataReplication');
  }

  /**
   * Grants permission to send agent logs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toSendAgentLogsForMgn() {
    return this.to('SendAgentLogsForMgn');
  }

  /**
   * Grants permission to send agent metrics
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toSendAgentMetricsForMgn() {
    return this.to('SendAgentMetricsForMgn');
  }

  /**
   * Grants permission to send channel command result
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toSendChannelCommandResultForMgn() {
    return this.to('SendChannelCommandResultForMgn');
  }

  /**
   * Grants permission to send client logs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toSendClientLogsForMgn() {
    return this.to('SendClientLogsForMgn');
  }

  /**
   * Grants permission to send client metrics
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toSendClientMetricsForMgn() {
    return this.to('SendClientMetricsForMgn');
  }

  /**
   * Grants permission to send vcenter client command result
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toSendVcenterClientCommandResultForMgn() {
    return this.to('SendVcenterClientCommandResultForMgn');
  }

  /**
   * Grants permission to send vcenter client logs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toSendVcenterClientLogsForMgn() {
    return this.to('SendVcenterClientLogsForMgn');
  }

  /**
   * Grants permission to send vcenter client metrics
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toSendVcenterClientMetricsForMgn() {
    return this.to('SendVcenterClientMetricsForMgn');
  }

  /**
   * Grants permission to start cutover
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:AttachVolume
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateLaunchTemplate
   * - ec2:CreateLaunchTemplateVersion
   * - ec2:CreateSecurityGroup
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
   * - ec2:ReportInstanceStatus
   * - ec2:RevokeSecurityGroupEgress
   * - ec2:RunInstances
   * - ec2:StartInstances
   * - ec2:StopInstances
   * - ec2:TerminateInstances
   * - iam:PassRole
   * - mgn:ListTagsForResource
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartCutover.html
   */
  public toStartCutover() {
    return this.to('StartCutover');
  }

  /**
   * Grants permission to start an export task
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeLaunchTemplateVersions
   * - mgn:DescribeSourceServers
   * - mgn:GetLaunchConfiguration
   * - mgn:ListApplications
   * - mgn:ListWaves
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartExport.html
   */
  public toStartExport() {
    return this.to('StartExport');
  }

  /**
   * Grants permission to create an import task
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateLaunchTemplateVersion
   * - ec2:DescribeLaunchTemplateVersions
   * - ec2:ModifyLaunchTemplate
   * - mgn:DescribeSourceServers
   * - mgn:GetLaunchConfiguration
   * - mgn:ListApplications
   * - mgn:ListWaves
   * - mgn:TagResource
   * - mgn:UpdateLaunchConfiguration
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartImport.html
   */
  public toStartImport() {
    return this.to('StartImport');
  }

  /**
   * Grants permission to start a network migration analysis
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - directconnect:DescribeConnections
   * - directconnect:DescribeDirectConnectGatewayAssociations
   * - directconnect:DescribeDirectConnectGatewayAttachments
   * - directconnect:DescribeDirectConnectGateways
   * - directconnect:DescribeVirtualGateways
   * - directconnect:DescribeVirtualInterfaces
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateNetworkInsightsPath
   * - ec2:CreateNetworkInterface
   * - ec2:CreateSecurityGroup
   * - ec2:CreateTags
   * - ec2:DeleteNetworkInsightsAnalysis
   * - ec2:DeleteNetworkInsightsPath
   * - ec2:DeleteNetworkInterface
   * - ec2:DeleteSecurityGroup
   * - ec2:DeleteTags
   * - ec2:DescribeAvailabilityZones
   * - ec2:DescribeCustomerGateways
   * - ec2:DescribeInstances
   * - ec2:DescribeInternetGateways
   * - ec2:DescribeManagedPrefixLists
   * - ec2:DescribeNatGateways
   * - ec2:DescribeNetworkAcls
   * - ec2:DescribeNetworkInsightsAnalyses
   * - ec2:DescribeNetworkInsightsPaths
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribePrefixLists
   * - ec2:DescribeRegions
   * - ec2:DescribeRouteTables
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeTransitGatewayAttachments
   * - ec2:DescribeTransitGatewayConnects
   * - ec2:DescribeTransitGatewayPeeringAttachments
   * - ec2:DescribeTransitGatewayRouteTables
   * - ec2:DescribeTransitGatewayVpcAttachments
   * - ec2:DescribeTransitGateways
   * - ec2:DescribeVpcEndpointServiceConfigurations
   * - ec2:DescribeVpcEndpoints
   * - ec2:DescribeVpcPeeringConnections
   * - ec2:DescribeVpcs
   * - ec2:DescribeVpnConnections
   * - ec2:DescribeVpnGateways
   * - ec2:GetManagedPrefixListEntries
   * - ec2:GetTransitGatewayRouteTablePropagations
   * - ec2:SearchTransitGatewayRoutes
   * - ec2:StartNetworkInsightsAnalysis
   * - elasticloadbalancing:DescribeListeners
   * - elasticloadbalancing:DescribeLoadBalancerAttributes
   * - elasticloadbalancing:DescribeLoadBalancers
   * - elasticloadbalancing:DescribeRules
   * - elasticloadbalancing:DescribeTags
   * - elasticloadbalancing:DescribeTargetGroupAttributes
   * - elasticloadbalancing:DescribeTargetGroups
   * - elasticloadbalancing:DescribeTargetHealth
   * - globalaccelerator:ListAccelerators
   * - globalaccelerator:ListCustomRoutingAccelerators
   * - globalaccelerator:ListCustomRoutingEndpointGroups
   * - globalaccelerator:ListCustomRoutingListeners
   * - globalaccelerator:ListCustomRoutingPortMappings
   * - globalaccelerator:ListEndpointGroups
   * - globalaccelerator:ListListeners
   * - network-firewall:DescribeFirewall
   * - network-firewall:DescribeFirewallPolicy
   * - network-firewall:DescribeResourcePolicy
   * - network-firewall:DescribeRuleGroup
   * - network-firewall:ListFirewallPolicies
   * - network-firewall:ListFirewalls
   * - network-firewall:ListRuleGroups
   * - tiros:CreateQuery
   * - tiros:ExtendQuery
   * - tiros:GetQueryAnswer
   * - tiros:GetQueryExplanation
   * - tiros:GetQueryExtensionAccounts
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartNetworkMigrationAnalysis.html
   */
  public toStartNetworkMigrationAnalysis() {
    return this.to('StartNetworkMigrationAnalysis');
  }

  /**
   * Grants permission to start network migration code generation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartNetworkMigrationCodeGeneration.html
   */
  public toStartNetworkMigrationCodeGeneration() {
    return this.to('StartNetworkMigrationCodeGeneration');
  }

  /**
   * Grants permission to start deletion of network migration deployed stacks
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:AcceptTransitGatewayVpcAttachment
   * - ec2:AssociateNatGatewayAddress
   * - ec2:AssociateRouteTable
   * - ec2:AssociateSubnetCidrBlock
   * - ec2:AssociateTransitGatewayRouteTable
   * - ec2:AssociateVpcCidrBlock
   * - ec2:AttachInternetGateway
   * - ec2:AttachVolume
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:DeleteInternetGateway
   * - ec2:DeleteLaunchTemplate
   * - ec2:DeleteLaunchTemplateVersions
   * - ec2:DeleteNatGateway
   * - ec2:DeleteNetworkAcl
   * - ec2:DeleteNetworkAclEntry
   * - ec2:DeleteNetworkInsightsAnalysis
   * - ec2:DeleteNetworkInsightsPath
   * - ec2:DeleteNetworkInterface
   * - ec2:DeleteRoute
   * - ec2:DeleteRouteTable
   * - ec2:DeleteSecurityGroup
   * - ec2:DeleteSnapshot
   * - ec2:DeleteSubnet
   * - ec2:DeleteTransitGateway
   * - ec2:DeleteTransitGatewayRoute
   * - ec2:DeleteTransitGatewayRouteTable
   * - ec2:DeleteTransitGatewayVpcAttachment
   * - ec2:DeleteVolume
   * - ec2:DeleteVpc
   * - ec2:DetachInternetGateway
   * - ec2:DetachVolume
   * - ec2:DisableTransitGatewayRouteTablePropagation
   * - ec2:DisassociateNatGatewayAddress
   * - ec2:DisassociateRouteTable
   * - ec2:DisassociateTransitGatewayRouteTable
   * - ec2:EnableTransitGatewayRouteTablePropagation
   * - ec2:ModifyInstanceAttribute
   * - ec2:ModifyLaunchTemplate
   * - ec2:ModifySubnetAttribute
   * - ec2:ModifyTransitGateway
   * - ec2:ModifyTransitGatewayVpcAttachment
   * - ec2:ModifyVolume
   * - ec2:ModifyVpcAttribute
   * - ec2:RejectTransitGatewayVpcAttachment
   * - ec2:ReleaseAddress
   * - ec2:ReplaceNetworkAclAssociation
   * - ec2:ReplaceNetworkAclEntry
   * - ec2:ReplaceRoute
   * - ec2:ReplaceTransitGatewayRoute
   * - ec2:RevokeSecurityGroupEgress
   * - ec2:RevokeSecurityGroupIngress
   * - ec2:SearchTransitGatewayRoutes
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartNetworkMigrationDeployedStacksDeletion.html
   */
  public toStartNetworkMigrationDeployedStacksDeletion() {
    return this.to('StartNetworkMigrationDeployedStacksDeletion');
  }

  /**
   * Grants permission to start a network migration deployment
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:AcceptTransitGatewayVpcAttachment
   * - ec2:AssociateNatGatewayAddress
   * - ec2:AssociateRouteTable
   * - ec2:AssociateSubnetCidrBlock
   * - ec2:AssociateTransitGatewayRouteTable
   * - ec2:AssociateVpcCidrBlock
   * - ec2:AttachInternetGateway
   * - ec2:AttachVolume
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateNatGateway
   * - ec2:CreateNetworkAcl
   * - ec2:CreateNetworkAclEntry
   * - ec2:CreateNetworkInsightsPath
   * - ec2:CreateNetworkInterface
   * - ec2:CreateRoute
   * - ec2:CreateRouteTable
   * - ec2:CreateSecurityGroup
   * - ec2:CreateSubnet
   * - ec2:CreateTags
   * - ec2:CreateTransitGatewayRoute
   * - ec2:CreateTransitGatewayRouteTable
   * - ec2:CreateTransitGatewayVpcAttachment
   * - ec2:DeleteInternetGateway
   * - ec2:DeleteLaunchTemplate
   * - ec2:DeleteLaunchTemplateVersions
   * - ec2:DeleteNatGateway
   * - ec2:DeleteNetworkAcl
   * - ec2:DeleteNetworkAclEntry
   * - ec2:DeleteNetworkInsightsAnalysis
   * - ec2:DeleteNetworkInsightsPath
   * - ec2:DeleteNetworkInterface
   * - ec2:DeleteRoute
   * - ec2:DeleteRouteTable
   * - ec2:DeleteSecurityGroup
   * - ec2:DeleteSnapshot
   * - ec2:DeleteSubnet
   * - ec2:DeleteTransitGateway
   * - ec2:DeleteTransitGatewayRoute
   * - ec2:DeleteTransitGatewayRouteTable
   * - ec2:DeleteTransitGatewayVpcAttachment
   * - ec2:DeleteVolume
   * - ec2:DeleteVpc
   * - ec2:DescribeAccountAttributes
   * - ec2:DescribeAddresses
   * - ec2:DescribeAvailabilityZones
   * - ec2:DescribeCustomerGateways
   * - ec2:DescribeEgressOnlyInternetGateways
   * - ec2:DescribeHosts
   * - ec2:DescribeImages
   * - ec2:DescribeInstanceAttribute
   * - ec2:DescribeInstanceStatus
   * - ec2:DescribeInstanceTypes
   * - ec2:DescribeInstances
   * - ec2:DescribeInternetGateways
   * - ec2:DescribeLaunchTemplateVersions
   * - ec2:DescribeLaunchTemplates
   * - ec2:DescribeManagedPrefixLists
   * - ec2:DescribeNatGateways
   * - ec2:DescribeNetworkAcls
   * - ec2:DescribeNetworkInsightsAnalyses
   * - ec2:DescribeNetworkInsightsPaths
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribePrefixLists
   * - ec2:DescribeRegions
   * - ec2:DescribeRouteTables
   * - ec2:DescribeSecurityGroupRules
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSnapshots
   * - ec2:DescribeSubnets
   * - ec2:DescribeTransitGatewayAttachments
   * - ec2:DescribeTransitGatewayConnects
   * - ec2:DescribeTransitGatewayPeeringAttachments
   * - ec2:DescribeTransitGatewayRouteTables
   * - ec2:DescribeTransitGatewayVpcAttachments
   * - ec2:DescribeTransitGateways
   * - ec2:DescribeVolumes
   * - ec2:DescribeVpcEndpointServiceConfigurations
   * - ec2:DescribeVpcEndpoints
   * - ec2:DescribeVpcPeeringConnections
   * - ec2:DescribeVpcs
   * - ec2:DescribeVpnConnections
   * - ec2:DescribeVpnGateways
   * - ec2:DetachInternetGateway
   * - ec2:DetachVolume
   * - ec2:DisableTransitGatewayRouteTablePropagation
   * - ec2:DisassociateNatGatewayAddress
   * - ec2:DisassociateRouteTable
   * - ec2:DisassociateTransitGatewayRouteTable
   * - ec2:EnableTransitGatewayRouteTablePropagation
   * - ec2:GetEbsDefaultKmsKeyId
   * - ec2:GetEbsEncryptionByDefault
   * - ec2:GetManagedPrefixListEntries
   * - ec2:GetTransitGatewayRouteTableAssociations
   * - ec2:GetTransitGatewayRouteTablePropagations
   * - ec2:ModifyInstanceAttribute
   * - ec2:ModifyLaunchTemplate
   * - ec2:ModifySubnetAttribute
   * - ec2:ModifyTransitGateway
   * - ec2:ModifyTransitGatewayVpcAttachment
   * - ec2:ModifyVolume
   * - ec2:ModifyVpcAttribute
   * - ec2:RejectTransitGatewayVpcAttachment
   * - ec2:ReleaseAddress
   * - ec2:ReplaceNetworkAclAssociation
   * - ec2:ReplaceNetworkAclEntry
   * - ec2:ReplaceRoute
   * - ec2:ReplaceTransitGatewayRoute
   * - ec2:RevokeSecurityGroupEgress
   * - ec2:RevokeSecurityGroupIngress
   * - ec2:SearchTransitGatewayRoutes
   * - ec2:StartNetworkInsightsAnalysis
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartNetworkMigrationDeployment.html
   */
  public toStartNetworkMigrationDeployment() {
    return this.to('StartNetworkMigrationDeployment');
  }

  /**
   * Grants permission to start a network migration mapping
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartNetworkMigrationMapping.html
   */
  public toStartNetworkMigrationMapping() {
    return this.to('StartNetworkMigrationMapping');
  }

  /**
   * Grants permission to start replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartReplication.html
   */
  public toStartReplication() {
    return this.to('StartReplication');
  }

  /**
   * Grants permission to start test
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:AttachVolume
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateLaunchTemplate
   * - ec2:CreateLaunchTemplateVersion
   * - ec2:CreateSecurityGroup
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
   * - ec2:ReportInstanceStatus
   * - ec2:RevokeSecurityGroupEgress
   * - ec2:RunInstances
   * - ec2:StartInstances
   * - ec2:StopInstances
   * - ec2:TerminateInstances
   * - iam:PassRole
   * - mgn:ListTagsForResource
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartTest.html
   */
  public toStartTest() {
    return this.to('StartTest');
  }

  /**
   * Grants permission to stop replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_StopReplication.html
   */
  public toStopReplication() {
    return this.to('StopReplication');
  }

  /**
   * Grants permission to assign a resource tag
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifCreateAction()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to terminate target instances
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:DeleteVolume
   * - ec2:DescribeInstances
   * - ec2:DescribeVolumes
   * - ec2:TerminateInstances
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_TerminateTargetInstances.html
   */
  public toTerminateTargetInstances() {
    return this.to('TerminateTargetInstances');
  }

  /**
   * Grants permission to unarchive an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UnarchiveApplication.html
   */
  public toUnarchiveApplication() {
    return this.to('UnarchiveApplication');
  }

  /**
   * Grants permission to unarchive a wave
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UnarchiveWave.html
   */
  public toUnarchiveWave() {
    return this.to('UnarchiveWave');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update agent backlog
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toUpdateAgentBacklogForMgn() {
    return this.to('UpdateAgentBacklogForMgn');
  }

  /**
   * Grants permission to update agent conversion info
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toUpdateAgentConversionInfoForMgn() {
    return this.to('UpdateAgentConversionInfoForMgn');
  }

  /**
   * Grants permission to update agent replication info
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toUpdateAgentReplicationInfoForMgn() {
    return this.to('UpdateAgentReplicationInfoForMgn');
  }

  /**
   * Grants permission to update agent replication process state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toUpdateAgentReplicationProcessStateForMgn() {
    return this.to('UpdateAgentReplicationProcessStateForMgn');
  }

  /**
   * Grants permission to update agent source properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toUpdateAgentSourcePropertiesForMgn() {
    return this.to('UpdateAgentSourcePropertiesForMgn');
  }

  /**
   * Grants permission to update an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Grants permission to update connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateConnector.html
   */
  public toUpdateConnector() {
    return this.to('UpdateConnector');
  }

  /**
   * Grants permission to update launch configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateLaunchConfiguration.html
   */
  public toUpdateLaunchConfiguration() {
    return this.to('UpdateLaunchConfiguration');
  }

  /**
   * Grants permission to update launch configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateLaunchConfigurationTemplate.html
   */
  public toUpdateLaunchConfigurationTemplate() {
    return this.to('UpdateLaunchConfigurationTemplate');
  }

  /**
   * Grants permission to update a network migration definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateNetworkMigrationDefinition.html
   */
  public toUpdateNetworkMigrationDefinition() {
    return this.to('UpdateNetworkMigrationDefinition');
  }

  /**
   * Grants permission to update a network migration mapper segment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateNetworkMigrationMapperSegment.html
   */
  public toUpdateNetworkMigrationMapperSegment() {
    return this.to('UpdateNetworkMigrationMapperSegment');
  }

  /**
   * Grants permission to update a network migration mapper segment construct
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateNetworkMigrationMapperSegmentConstruct.html
   */
  public toUpdateNetworkMigrationMapperSegmentConstruct() {
    return this.to('UpdateNetworkMigrationMapperSegmentConstruct');
  }

  /**
   * Grants permission to update replication configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateReplicationConfiguration.html
   */
  public toUpdateReplicationConfiguration() {
    return this.to('UpdateReplicationConfiguration');
  }

  /**
   * Grants permission to update replication configuration template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateReplicationConfigurationTemplate.html
   */
  public toUpdateReplicationConfigurationTemplate() {
    return this.to('UpdateReplicationConfigurationTemplate');
  }

  /**
   * Grants permission to update source server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateSourceServer.html
   */
  public toUpdateSourceServer() {
    return this.to('UpdateSourceServer');
  }

  /**
   * Grants permission to update source server replication type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateSourceServerReplicationType.html
   */
  public toUpdateSourceServerReplicationType() {
    return this.to('UpdateSourceServerReplicationType');
  }

  /**
   * Grants permission to update a wave
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateWave.html
   */
  public toUpdateWave() {
    return this.to('UpdateWave');
  }

  /**
   * Grants permission to verify client role
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  public toVerifyClientRoleForMgn() {
    return this.to('VerifyClientRoleForMgn');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ArchiveApplication',
      'ArchiveWave',
      'AssociateApplications',
      'AssociateSourceServers',
      'BatchCreateVolumeSnapshotGroupForMgn',
      'BatchDeleteSnapshotRequestForMgn',
      'ChangeServerLifeCycleState',
      'CreateApplication',
      'CreateConnector',
      'CreateLaunchConfigurationTemplate',
      'CreateNetworkMigrationDefinition',
      'CreateReplicationConfigurationTemplate',
      'CreateVcenterClientForMgn',
      'CreateWave',
      'DeleteApplication',
      'DeleteConnector',
      'DeleteJob',
      'DeleteLaunchConfigurationTemplate',
      'DeleteNetworkMigrationDefinition',
      'DeleteReplicationConfigurationTemplate',
      'DeleteSourceServer',
      'DeleteVcenterClient',
      'DeleteWave',
      'DisassociateApplications',
      'DisassociateSourceServers',
      'DisconnectFromService',
      'FinalizeCutover',
      'InitializeService',
      'IssueClientCertificateForMgn',
      'MarkAsArchived',
      'NotifyAgentAuthenticationForMgn',
      'NotifyAgentConnectedForMgn',
      'NotifyAgentDisconnectedForMgn',
      'NotifyAgentReplicationProgressForMgn',
      'NotifyVcenterClientStartedForMgn',
      'PauseReplication',
      'PutSourceServerAction',
      'PutTemplateAction',
      'RegisterAgentForMgn',
      'RemoveSourceServerAction',
      'RemoveTemplateAction',
      'ResumeReplication',
      'RetryDataReplication',
      'SendAgentLogsForMgn',
      'SendAgentMetricsForMgn',
      'SendChannelCommandResultForMgn',
      'SendClientLogsForMgn',
      'SendClientMetricsForMgn',
      'SendVcenterClientCommandResultForMgn',
      'SendVcenterClientLogsForMgn',
      'SendVcenterClientMetricsForMgn',
      'StartCutover',
      'StartExport',
      'StartImport',
      'StartNetworkMigrationAnalysis',
      'StartNetworkMigrationCodeGeneration',
      'StartNetworkMigrationDeployedStacksDeletion',
      'StartNetworkMigrationDeployment',
      'StartNetworkMigrationMapping',
      'StartReplication',
      'StartTest',
      'StopReplication',
      'TerminateTargetInstances',
      'UnarchiveApplication',
      'UnarchiveWave',
      'UpdateAgentBacklogForMgn',
      'UpdateAgentConversionInfoForMgn',
      'UpdateAgentReplicationInfoForMgn',
      'UpdateAgentReplicationProcessStateForMgn',
      'UpdateAgentSourcePropertiesForMgn',
      'UpdateApplication',
      'UpdateConnector',
      'UpdateLaunchConfiguration',
      'UpdateLaunchConfigurationTemplate',
      'UpdateNetworkMigrationDefinition',
      'UpdateNetworkMigrationMapperSegment',
      'UpdateNetworkMigrationMapperSegmentConstruct',
      'UpdateReplicationConfiguration',
      'UpdateReplicationConfigurationTemplate',
      'UpdateSourceServer',
      'UpdateSourceServerReplicationType',
      'UpdateWave'
    ],
    Read: [
      'DescribeJobLogItems',
      'DescribeReplicationServerAssociationsForMgn',
      'DescribeSnapshotRequestsForMgn',
      'GetAgentCommandForMgn',
      'GetAgentConfirmedResumeInfoForMgn',
      'GetAgentInstallationAssetsForMgn',
      'GetAgentReplicationInfoForMgn',
      'GetAgentRuntimeConfigurationForMgn',
      'GetAgentSnapshotCreditsForMgn',
      'GetChannelCommandsForMgn',
      'GetLaunchConfiguration',
      'GetNetworkMigrationDefinition',
      'GetNetworkMigrationMapperSegmentConstruct',
      'GetReplicationConfiguration',
      'GetVcenterClientCommandsForMgn',
      'ListConnectors',
      'ListTagsForResource',
      'VerifyClientRoleForMgn'
    ],
    List: [
      'DescribeJobs',
      'DescribeLaunchConfigurationTemplates',
      'DescribeReplicationConfigurationTemplates',
      'DescribeSourceServers',
      'DescribeVcenterClients',
      'ListApplications',
      'ListExportErrors',
      'ListExports',
      'ListImportErrors',
      'ListImports',
      'ListManagedAccounts',
      'ListNetworkMigrationAnalyses',
      'ListNetworkMigrationAnalysisResults',
      'ListNetworkMigrationCodeGenerationSegments',
      'ListNetworkMigrationCodeGenerations',
      'ListNetworkMigrationDefinitions',
      'ListNetworkMigrationDeployedStacks',
      'ListNetworkMigrationDeployedStacksDeletions',
      'ListNetworkMigrationDeployments',
      'ListNetworkMigrationExecutions',
      'ListNetworkMigrationMapperSegmentConstructs',
      'ListNetworkMigrationMapperSegments',
      'ListNetworkMigrationMappings',
      'ListSourceServerActions',
      'ListTemplateActions',
      'ListWaves'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type JobResource to the statement
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/launching-target-servers.html
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:job/${ jobID }`);
  }

  /**
   * Adds a resource of type ReplicationConfigurationTemplateResource to the statement
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/replication-settings-template.html
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:replication-configuration-template/${ replicationConfigurationTemplateID }`);
  }

  /**
   * Adds a resource of type LaunchConfigurationTemplateResource to the statement
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/post-launch-settings.html
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:launch-configuration-template/${ launchConfigurationTemplateID }`);
  }

  /**
   * Adds a resource of type VcenterClientResource to the statement
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/agentless-mgn.html
   *
   * @param vcenterClientID - Identifier for the vcenterClientID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVcenterClientResource(vcenterClientID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:vcenter-client/${ vcenterClientID }`);
  }

  /**
   * Adds a resource of type SourceServerResource to the statement
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/source-servers.html
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:source-server/${ sourceServerID }`);
  }

  /**
   * Adds a resource of type ApplicationResource to the statement
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/applications.html
   *
   * @param applicationID - Identifier for the applicationID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplicationResource(applicationID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationID }`);
  }

  /**
   * Adds a resource of type WaveResource to the statement
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/waves.html
   *
   * @param waveID - Identifier for the waveID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWaveResource(waveID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:wave/${ waveID }`);
  }

  /**
   * Adds a resource of type ImportResource to the statement
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/imports.html
   *
   * @param importID - Identifier for the importID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImportResource(importID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:import/${ importID }`);
  }

  /**
   * Adds a resource of type ExportResource to the statement
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/exports.html
   *
   * @param exportID - Identifier for the exportID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onExportResource(exportID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:export/${ exportID }`);
  }

  /**
   * Adds a resource of type ConnectorResource to the statement
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/connectors.html
   *
   * @param connectorID - Identifier for the connectorID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnectorResource(connectorID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:connector/${ connectorID }`);
  }

  /**
   * Adds a resource of type NetworkMigrationDefinitionResource to the statement
   *
   * https://docs.aws.amazon.com/mgn/latest/ug/network-migration-definition.html
   *
   * @param networkMigrationDefinitionID - Identifier for the networkMigrationDefinitionID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetworkMigrationDefinitionResource(networkMigrationDefinitionID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:network-migration-definition/${ networkMigrationDefinitionID }`);
  }

  /**
   * Filters access by presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toCreateConnector()
   * - .toCreateLaunchConfigurationTemplate()
   * - .toCreateReplicationConfigurationTemplate()
   * - .toCreateVcenterClientForMgn()
   * - .toCreateWave()
   * - .toRegisterAgentForMgn()
   * - .toStartCutover()
   * - .toStartTest()
   * - .toTagResource()
   * - .toTerminateTargetInstances()
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
   * - ReplicationConfigurationTemplateResource
   * - LaunchConfigurationTemplateResource
   * - VcenterClientResource
   * - SourceServerResource
   * - ApplicationResource
   * - WaveResource
   * - ImportResource
   * - ExportResource
   * - ConnectorResource
   * - NetworkMigrationDefinitionResource
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toCreateConnector()
   * - .toCreateLaunchConfigurationTemplate()
   * - .toCreateReplicationConfigurationTemplate()
   * - .toCreateVcenterClientForMgn()
   * - .toCreateWave()
   * - .toRegisterAgentForMgn()
   * - .toStartCutover()
   * - .toStartTest()
   * - .toTagResource()
   * - .toTerminateTargetInstances()
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
   * https://docs.aws.amazon.com/mgn/latest/ug/supported-iam-actions-tagging.html
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
}
