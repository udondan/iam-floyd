import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [elasticmapreduce](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticmapreduce.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Elasticmapreduce extends PolicyStatement {
  public servicePrefix = 'elasticmapreduce';

  /**
   * Statement provider for service [elasticmapreduce](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticmapreduce.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add an instance fleet to a running cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_AddInstanceFleet.html
   */
  public toAddInstanceFleet() {
    return this.to('AddInstanceFleet');
  }

  /**
   * Grants permission to add instance groups to a running cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_AddInstanceGroups.html
   */
  public toAddInstanceGroups() {
    return this.to('AddInstanceGroups');
  }

  /**
   * Grants permission to add new steps to a running cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_AddJobFlowSteps.html
   */
  public toAddJobFlowSteps() {
    return this.to('AddJobFlowSteps');
  }

  /**
   * Grants permission to add tags to an Amazon EMR resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRequestTag()
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_AddTags.html
   */
  public toAddTags() {
    return this.to('AddTags');
  }

  /**
   * Grants permission to attach an EMR notebook to a compute engine
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   */
  public toAttachEditor() {
    return this.to('AttachEditor');
  }

  /**
   * Grants permission to cancel a pending step or steps in a running cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_CancelSteps.html
   */
  public toCancelSteps() {
    return this.to('CancelSteps');
  }

  /**
   * Grants permission to create an EMR notebook
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRequestTag()
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-create.html
   */
  public toCreateEditor() {
    return this.to('CreateEditor');
  }

  /**
   * Grants permission to create a persistent application history server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-debug.html
   */
  public toCreatePersistentAppUI() {
    return this.to('CreatePersistentAppUI');
  }

  /**
   * Grants permission to create an EMR notebook repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  public toCreateRepository() {
    return this.to('CreateRepository');
  }

  /**
   * Grants permission to create a security configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_CreateSecurityConfiguration.html
   */
  public toCreateSecurityConfiguration() {
    return this.to('CreateSecurityConfiguration');
  }

  /**
   * Grants permission to create an EMR Studio
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRequestTag()
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   */
  public toCreateStudio() {
    return this.to('CreateStudio');
  }

  /**
   * Grants permission to launch an EMR Studio using IAM authentication mode
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   */
  public toCreateStudioPresignedUrl() {
    return this.to('CreateStudioPresignedUrl');
  }

  /**
   * Grants permission to create an EMR Studio session mapping
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   */
  public toCreateStudioSessionMapping() {
    return this.to('CreateStudioSessionMapping');
  }

  /**
   * Grants permission to delete an EMR notebook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-deleting
   */
  public toDeleteEditor() {
    return this.to('DeleteEditor');
  }

  /**
   * Grants permission to delete an EMR notebook repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  public toDeleteRepository() {
    return this.to('DeleteRepository');
  }

  /**
   * Grants permission to delete a security configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DeleteSecurityConfiguration.html
   */
  public toDeleteSecurityConfiguration() {
    return this.to('DeleteSecurityConfiguration');
  }

  /**
   * Grants permission to delete an EMR Studio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   */
  public toDeleteStudio() {
    return this.to('DeleteStudio');
  }

  /**
   * Grants permission to delete an EMR Studio session mapping
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   */
  public toDeleteStudioSessionMapping() {
    return this.to('DeleteStudioSessionMapping');
  }

  /**
   * Grants permission to block an identity from opening a collaborative workspace
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   */
  public toDeleteWorkspaceAccess() {
    return this.to('DeleteWorkspaceAccess');
  }

  /**
   * Grants permission to get details about a cluster, including status, hardware and software configuration, VPC settings, and so on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeCluster.html
   */
  public toDescribeCluster() {
    return this.to('DescribeCluster');
  }

  /**
   * Grants permission to view information about a notebook, including status, user, role, tags, location, and more
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   */
  public toDescribeEditor() {
    return this.to('DescribeEditor');
  }

  /**
   * Grants permission to describe details of clusters (job flows). This API is deprecated and will eventually be removed. We recommend you use ListClusters, DescribeCluster, ListSteps, ListInstanceGroups and ListBootstrapActions instead
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeJobFlows.html
   */
  public toDescribeJobFlows() {
    return this.to('DescribeJobFlows');
  }

  /**
   * Grants permission to view information about a notebook execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-headless.html
   */
  public toDescribeNotebookExecution() {
    return this.to('DescribeNotebookExecution');
  }

  /**
   * Grants permission to describe a persistent application history server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-debug.html
   */
  public toDescribePersistentAppUI() {
    return this.to('DescribePersistentAppUI');
  }

  /**
   * Grants permission to view information about an EMR release, such as which applications are supported
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeReleaseLabel.html
   */
  public toDescribeReleaseLabel() {
    return this.to('DescribeReleaseLabel');
  }

  /**
   * Grants permission to describe an EMR notebook repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  public toDescribeRepository() {
    return this.to('DescribeRepository');
  }

  /**
   * Grants permission to get details of a security configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeSecurityConfiguration.html
   */
  public toDescribeSecurityConfiguration() {
    return this.to('DescribeSecurityConfiguration');
  }

  /**
   * Grants permission to get details about a cluster step
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeStep.html
   */
  public toDescribeStep() {
    return this.to('DescribeStep');
  }

  /**
   * Grants permission to view information about an EMR Studio
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   */
  public toDescribeStudio() {
    return this.to('DescribeStudio');
  }

  /**
   * Grants permission to detach an EMR notebook from a compute engine
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   */
  public toDetachEditor() {
    return this.to('DetachEditor');
  }

  /**
   * Grants permission to retrieve the auto-termination policy associated with a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_GetAutoTerminationPolicy.html
   */
  public toGetAutoTerminationPolicy() {
    return this.to('GetAutoTerminationPolicy');
  }

  /**
   * Grants permission to retrieve the EMR block public access configuration for the AWS account in the Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_GetBlockPublicAccessConfiguration.html
   */
  public toGetBlockPublicAccessConfiguration() {
    return this.to('GetBlockPublicAccessConfiguration');
  }

  /**
   * Grants permission to retrieve the managed scaling policy associated with a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_GetManagedScalingPolicy.html
   */
  public toGetManagedScalingPolicy() {
    return this.to('GetManagedScalingPolicy');
  }

  /**
   * Grants permission to get a presigned URL for an application history server running on the cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-debug.html
   */
  public toGetOnClusterAppUIPresignedURL() {
    return this.to('GetOnClusterAppUIPresignedURL');
  }

  /**
   * Grants permission to get a presigned URL for a persistent application history server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-debug.html
   */
  public toGetPersistentAppUIPresignedURL() {
    return this.to('GetPersistentAppUIPresignedURL');
  }

  /**
   * Grants permission to view information about an EMR Studio session mapping
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   */
  public toGetStudioSessionMapping() {
    return this.to('GetStudioSessionMapping');
  }

  /**
   * Grants permission to link an EMR notebook repository to EMR notebooks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  public toLinkRepository() {
    return this.to('LinkRepository');
  }

  /**
   * Grants permission to get details about the bootstrap actions associated with a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListBootstrapActions.html
   */
  public toListBootstrapActions() {
    return this.to('ListBootstrapActions');
  }

  /**
   * Grants permission to get the status of accessible clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListClusters.html
   */
  public toListClusters() {
    return this.to('ListClusters');
  }

  /**
   * Grants permission to list summary information for accessible EMR notebooks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   */
  public toListEditors() {
    return this.to('ListEditors');
  }

  /**
   * Grants permission to get details of instance fleets in a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstanceFleets.html
   */
  public toListInstanceFleets() {
    return this.to('ListInstanceFleets');
  }

  /**
   * Grants permission to get details of instance groups in a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstanceGroups.html
   */
  public toListInstanceGroups() {
    return this.to('ListInstanceGroups');
  }

  /**
   * Grants permission to get details about the Amazon EC2 instances in a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstances.html
   */
  public toListInstances() {
    return this.to('ListInstances');
  }

  /**
   * Grants permission to list summary information for notebook executions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-headless.html
   */
  public toListNotebookExecutions() {
    return this.to('ListNotebookExecutions');
  }

  /**
   * Grants permission to list and filter the available EMR releases in the current region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListReleaseLabels.html
   */
  public toListReleaseLabels() {
    return this.to('ListReleaseLabels');
  }

  /**
   * Grants permission to list existing EMR notebook repositories
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  public toListRepositories() {
    return this.to('ListRepositories');
  }

  /**
   * Grants permission to list available security configurations in this account by name, along with creation dates and times
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListSecurityConfigurations.html
   */
  public toListSecurityConfigurations() {
    return this.to('ListSecurityConfigurations');
  }

  /**
   * Grants permission to list steps associated with a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListSteps.html
   */
  public toListSteps() {
    return this.to('ListSteps');
  }

  /**
   * Grants permission to list summary information about EMR Studio session mappings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   */
  public toListStudioSessionMappings() {
    return this.to('ListStudioSessionMappings');
  }

  /**
   * Grants permission to list summary information about EMR Studios
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   */
  public toListStudios() {
    return this.to('ListStudios');
  }

  /**
   * Grants permission to list identities that are granted access to a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   */
  public toListWorkspaceAccessIdentities() {
    return this.to('ListWorkspaceAccessIdentities');
  }

  /**
   * Grants permission to change cluster settings such as number of steps that can be executed concurrently for a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyCluster.html
   */
  public toModifyCluster() {
    return this.to('ModifyCluster');
  }

  /**
   * Grants permission to change the target On-Demand and target Spot capacities for a instance fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyInstanceFleet.html
   */
  public toModifyInstanceFleet() {
    return this.to('ModifyInstanceFleet');
  }

  /**
   * Grants permission to change the number and configuration of EC2 instances for an instance group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyInstanceGroups.html
   */
  public toModifyInstanceGroups() {
    return this.to('ModifyInstanceGroups');
  }

  /**
   * Grants permission to launch the Jupyter notebook editor for an EMR notebook from within the console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  public toOpenEditorInConsole() {
    return this.to('OpenEditorInConsole');
  }

  /**
   * Grants permission to create or update an automatic scaling policy for a core instance group or task instance group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_PutAutoScalingPolicy.html
   */
  public toPutAutoScalingPolicy() {
    return this.to('PutAutoScalingPolicy');
  }

  /**
   * Grants permission to create or update the auto-termination policy associated with a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_PutAutoTerminationPolicy.html
   */
  public toPutAutoTerminationPolicy() {
    return this.to('PutAutoTerminationPolicy');
  }

  /**
   * Grants permission to create or update the EMR block public access configuration for the AWS account in the Region
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_PutBlockPublicAccessConfiguration.html
   */
  public toPutBlockPublicAccessConfiguration() {
    return this.to('PutBlockPublicAccessConfiguration');
  }

  /**
   * Grants permission to create or update the managed scaling policy associated with a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_PutManagedScalingPolicy.html
   */
  public toPutManagedScalingPolicy() {
    return this.to('PutManagedScalingPolicy');
  }

  /**
   * Grants permission to allow an identity to open a collaborative workspace
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   */
  public toPutWorkspaceAccess() {
    return this.to('PutWorkspaceAccess');
  }

  /**
   * Grants permission to remove an automatic scaling policy from an instance group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveAutoScalingPolicy.html
   */
  public toRemoveAutoScalingPolicy() {
    return this.to('RemoveAutoScalingPolicy');
  }

  /**
   * Grants permission to remove the auto-termination policy associated with a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveAutoTerminationPolicy.html
   */
  public toRemoveAutoTerminationPolicy() {
    return this.to('RemoveAutoTerminationPolicy');
  }

  /**
   * Grants permission to remove the managed scaling policy associated with a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveManagedScalingPolicy.html
   */
  public toRemoveManagedScalingPolicy() {
    return this.to('RemoveManagedScalingPolicy');
  }

  /**
   * Grants permission to remove tags from an Amazon EMR resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveTags.html
   */
  public toRemoveTags() {
    return this.to('RemoveTags');
  }

  /**
   * Grants permission to create and launch a cluster (job flow)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRequestTag()
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_RunJobFlow.html
   */
  public toRunJobFlow() {
    return this.to('RunJobFlow');
  }

  /**
   * Grants permission to add and remove termination protection for a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_SetTerminationProtection.html
   */
  public toSetTerminationProtection() {
    return this.to('SetTerminationProtection');
  }

  /**
   * Grants permission to start an EMR notebook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   */
  public toStartEditor() {
    return this.to('StartEditor');
  }

  /**
   * Grants permission to start an EMR notebook execution
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRequestTag()
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-headless.html
   */
  public toStartNotebookExecution() {
    return this.to('StartNotebookExecution');
  }

  /**
   * Grants permission to shut down an EMR notebook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html
   */
  public toStopEditor() {
    return this.to('StopEditor');
  }

  /**
   * Grants permission to stop notebook execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-headless.html
   */
  public toStopNotebookExecution() {
    return this.to('StopNotebookExecution');
  }

  /**
   * Grants permission to terminate a cluster (job flow)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_TerminateJobFlows.html
   */
  public toTerminateJobFlows() {
    return this.to('TerminateJobFlows');
  }

  /**
   * Grants permission to unlink an EMR notebook repository from EMR notebooks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  public toUnlinkRepository() {
    return this.to('UnlinkRepository');
  }

  /**
   * Grants permission to update an EMR notebook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   */
  public toUpdateEditor() {
    return this.to('UpdateEditor');
  }

  /**
   * Grants permission to update an EMR notebook repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  public toUpdateRepository() {
    return this.to('UpdateRepository');
  }

  /**
   * Grants permission to update information about an EMR Studio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   */
  public toUpdateStudio() {
    return this.to('UpdateStudio');
  }

  /**
   * Grants permission to update an EMR Studio session mapping
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   */
  public toUpdateStudioSessionMapping() {
    return this.to('UpdateStudioSessionMapping');
  }

  /**
   * Grants permission to use the EMR console to view events from all clusters
   *
   * Access Level: List
   */
  public toViewEventsFromAllClustersInConsole() {
    return this.to('ViewEventsFromAllClustersInConsole');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddInstanceFleet',
      'AddInstanceGroups',
      'AddJobFlowSteps',
      'AttachEditor',
      'CancelSteps',
      'CreateEditor',
      'CreatePersistentAppUI',
      'CreateRepository',
      'CreateSecurityConfiguration',
      'CreateStudio',
      'CreateStudioPresignedUrl',
      'CreateStudioSessionMapping',
      'DeleteEditor',
      'DeleteRepository',
      'DeleteSecurityConfiguration',
      'DeleteStudio',
      'DeleteStudioSessionMapping',
      'DetachEditor',
      'GetOnClusterAppUIPresignedURL',
      'GetPersistentAppUIPresignedURL',
      'LinkRepository',
      'ModifyCluster',
      'ModifyInstanceFleet',
      'ModifyInstanceGroups',
      'OpenEditorInConsole',
      'PutAutoScalingPolicy',
      'PutAutoTerminationPolicy',
      'PutManagedScalingPolicy',
      'RemoveAutoScalingPolicy',
      'RemoveAutoTerminationPolicy',
      'RemoveManagedScalingPolicy',
      'RunJobFlow',
      'SetTerminationProtection',
      'StartEditor',
      'StartNotebookExecution',
      'StopEditor',
      'StopNotebookExecution',
      'TerminateJobFlows',
      'UnlinkRepository',
      'UpdateEditor',
      'UpdateRepository',
      'UpdateStudio',
      'UpdateStudioSessionMapping'
    ],
    Tagging: [
      'AddTags',
      'RemoveTags'
    ],
    'Permissions management': [
      'DeleteWorkspaceAccess',
      'PutBlockPublicAccessConfiguration',
      'PutWorkspaceAccess'
    ],
    Read: [
      'DescribeCluster',
      'DescribeEditor',
      'DescribeJobFlows',
      'DescribeNotebookExecution',
      'DescribePersistentAppUI',
      'DescribeReleaseLabel',
      'DescribeRepository',
      'DescribeSecurityConfiguration',
      'DescribeStep',
      'DescribeStudio',
      'GetAutoTerminationPolicy',
      'GetBlockPublicAccessConfiguration',
      'GetManagedScalingPolicy',
      'GetStudioSessionMapping',
      'ListBootstrapActions',
      'ListInstanceFleets',
      'ListInstanceGroups',
      'ListInstances',
      'ListSteps'
    ],
    List: [
      'ListClusters',
      'ListEditors',
      'ListNotebookExecutions',
      'ListReleaseLabels',
      'ListRepositories',
      'ListSecurityConfigurations',
      'ListStudioSessionMappings',
      'ListStudios',
      'ListWorkspaceAccessIdentities',
      'ViewEventsFromAllClustersInConsole'
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-overview.html
   *
   * @param clusterId - Identifier for the clusterId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onCluster(clusterId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:elasticmapreduce:${ region || '*' }:${ account || '*' }:cluster/${ clusterId }`);
  }

  /**
   * Adds a resource of type editor to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html
   *
   * @param editorId - Identifier for the editorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onEditor(editorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:elasticmapreduce:${ region || '*' }:${ account || '*' }:editor/${ editorId }`);
  }

  /**
   * Adds a resource of type notebook-execution to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-headless.html
   *
   * @param notebookExecutionId - Identifier for the notebookExecutionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onNotebookExecution(notebookExecutionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:elasticmapreduce:${ region || '*' }:${ account || '*' }:notebook-execution/${ notebookExecutionId }`);
  }

  /**
   * Adds a resource of type studio to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   *
   * @param studioId - Identifier for the studioId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onStudio(studioId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:elasticmapreduce:${ region || '*' }:${ account || '*' }:studio/${ studioId }`);
  }

  /**
   * Filters access by whether the tag and value pair is provided with the action
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toCreateEditor()
   * - .toCreateStudio()
   * - .toRunJobFlow()
   * - .toStartNotebookExecution()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag and value pair associated with an Amazon EMR resource
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access
   *
   * Applies to resource types:
   * - cluster
   * - editor
   * - notebook-execution
   * - studio
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
