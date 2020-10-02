import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [ssm](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssystemsmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ssm extends PolicyStatement {
  public servicePrefix = 'ssm';

  /**
   * Statement provider for service [ssm](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssystemsmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add or overwrite one or more tags for a specified AWS resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
    this.to('ssm:AddTagsToResource');
    return this;
  }

  /**
   * Grants permission to cancel a specified Run Command command
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CancelCommand.html
   */
  public toCancelCommand() {
    this.to('ssm:CancelCommand');
    return this;
  }

  /**
   * Grants permission to cancel an in-progress maintenance window execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CancelMaintenanceWindowExecution.html
   */
  public toCancelMaintenanceWindowExecution() {
    this.to('ssm:CancelMaintenanceWindowExecution');
    return this;
  }

  /**
   * Grants permission to create an activation that is used to register on-premises servers and virtual machines (VMs) with Systems Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateActivation.html
   */
  public toCreateActivation() {
    this.to('ssm:CreateActivation');
    return this;
  }

  /**
   * Grants permission to associate a specified Systems Manager document with specified instances or other targets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociation.html
   */
  public toCreateAssociation() {
    this.to('ssm:CreateAssociation');
    return this;
  }

  /**
   * Grants permission to combine entries for multiple CreateAssociation operations in a single command
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociationBatch.html
   */
  public toCreateAssociationBatch() {
    this.to('ssm:CreateAssociationBatch');
    return this;
  }

  /**
   * Grants permission to create a Systems Manager SSM document
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateDocument.html
   */
  public toCreateDocument() {
    this.to('ssm:CreateDocument');
    return this;
  }

  /**
   * Grants permission to create a maintenance window
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateMaintenanceWindow.html
   */
  public toCreateMaintenanceWindow() {
    this.to('ssm:CreateMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to create an OpsItem in OpsCenter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateOpsItem.html
   */
  public toCreateOpsItem() {
    this.to('ssm:CreateOpsItem');
    return this;
  }

  /**
   * Grants permission to create a patch baseline
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreatePatchBaseline.html
   */
  public toCreatePatchBaseline() {
    this.to('ssm:CreatePatchBaseline');
    return this;
  }

  /**
   * Grants permission to create a resource data sync configuration, which regularly collects inventory data from managed instances and updates the data in an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSyncType()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateResourceDataSync.html
   */
  public toCreateResourceDataSync() {
    this.to('ssm:CreateResourceDataSync');
    return this;
  }

  /**
   * Grants permission to delete a specified activation for managed instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteActivation.html
   */
  public toDeleteActivation() {
    this.to('ssm:DeleteActivation');
    return this;
  }

  /**
   * Grants permission to disassociate a specified SSM document from a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteAssociation.html
   */
  public toDeleteAssociation() {
    this.to('ssm:DeleteAssociation');
    return this;
  }

  /**
   * Grants permission to delete a specified SSM document and its instance associations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteDocument.html
   */
  public toDeleteDocument() {
    this.to('ssm:DeleteDocument');
    return this;
  }

  /**
   * Grants permission to delete a specified custom inventory type, or the data associated with a custom inventory type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteInventory.html
   */
  public toDeleteInventory() {
    this.to('ssm:DeleteInventory');
    return this;
  }

  /**
   * Grants permission to delete a specified maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteMaintenanceWindow.html
   */
  public toDeleteMaintenanceWindow() {
    this.to('ssm:DeleteMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to delete a specified SSM parameter
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameter.html
   */
  public toDeleteParameter() {
    this.to('ssm:DeleteParameter');
    return this;
  }

  /**
   * Grants permission to delete multiple specified SSM parameters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameters.html
   */
  public toDeleteParameters() {
    this.to('ssm:DeleteParameters');
    return this;
  }

  /**
   * Grants permission to delete a specified patch baseline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeletePatchBaseline.html
   */
  public toDeletePatchBaseline() {
    this.to('ssm:DeletePatchBaseline');
    return this;
  }

  /**
   * Grants permission to delete a specified resource data sync
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSyncType()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteResourceDataSync.html
   */
  public toDeleteResourceDataSync() {
    this.to('ssm:DeleteResourceDataSync');
    return this;
  }

  /**
   * Grants permission to deregister a specified on-premises server or virtual machine (VM) from Systems Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterManagedInstance.html
   */
  public toDeregisterManagedInstance() {
    this.to('ssm:DeregisterManagedInstance');
    return this;
  }

  /**
   * Grants permission to deregister a specified patch baseline from being the default patch baseline for a specified patch group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterPatchBaselineForPatchGroup.html
   */
  public toDeregisterPatchBaselineForPatchGroup() {
    this.to('ssm:DeregisterPatchBaselineForPatchGroup');
    return this;
  }

  /**
   * Grants permission to deregister a specified target from a maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterTargetFromMaintenanceWindow.html
   */
  public toDeregisterTargetFromMaintenanceWindow() {
    this.to('ssm:DeregisterTargetFromMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to deregister a specified task from a maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterTaskFromMaintenanceWindow.html
   */
  public toDeregisterTaskFromMaintenanceWindow() {
    this.to('ssm:DeregisterTaskFromMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to view details about a specified managed instance activation, such as when it was created and the number of instances registered using the activation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeActivations.html
   */
  public toDescribeActivations() {
    this.to('ssm:DescribeActivations');
    return this;
  }

  /**
   * Grants permission to view details about the specified association for a specified instance or target
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociation.html
   */
  public toDescribeAssociation() {
    this.to('ssm:DescribeAssociation');
    return this;
  }

  /**
   * Grants permission to view information about a specified association execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociationExecutionTargets.html
   */
  public toDescribeAssociationExecutionTargets() {
    this.to('ssm:DescribeAssociationExecutionTargets');
    return this;
  }

  /**
   * Grants permission to view all executions for a specified association
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociationExecutions.html
   */
  public toDescribeAssociationExecutions() {
    this.to('ssm:DescribeAssociationExecutions');
    return this;
  }

  /**
   * Grants permission to view details about all active and terminated Automation executions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAutomationExecutions.html
   */
  public toDescribeAutomationExecutions() {
    this.to('ssm:DescribeAutomationExecutions');
    return this;
  }

  /**
   * Grants permission to view information about all active and terminated step executions in an Automation workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAutomationStepExecutions.html
   */
  public toDescribeAutomationStepExecutions() {
    this.to('ssm:DescribeAutomationStepExecutions');
    return this;
  }

  /**
   * Grants permission to view all patches eligible to include in a patch baseline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAvailablePatches.html
   */
  public toDescribeAvailablePatches() {
    this.to('ssm:DescribeAvailablePatches');
    return this;
  }

  /**
   * Grants permission to view details about a specified SSM document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeDocument.html
   */
  public toDescribeDocument() {
    this.to('ssm:DescribeDocument');
    return this;
  }

  /**
   * Grants permission to display information about SSM document parameters in the Systems Manager console (internal Systems Manager action)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toDescribeDocumentParameters() {
    this.to('ssm:DescribeDocumentParameters');
    return this;
  }

  /**
   * Grants permission to view the permissions for a specified SSM document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeDocumentPermission.html
   */
  public toDescribeDocumentPermission() {
    this.to('ssm:DescribeDocumentPermission');
    return this;
  }

  /**
   * Grants permission to view all current associations for a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeEffectiveInstanceAssociations.html
   */
  public toDescribeEffectiveInstanceAssociations() {
    this.to('ssm:DescribeEffectiveInstanceAssociations');
    return this;
  }

  /**
   * Grants permission to view details about the patches currently associated with the specified patch baseline (Windows only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeEffectivePatchesForPatchBaseline.html
   */
  public toDescribeEffectivePatchesForPatchBaseline() {
    this.to('ssm:DescribeEffectivePatchesForPatchBaseline');
    return this;
  }

  /**
   * Grants permission to view the status of the associations for a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstanceAssociationsStatus.html
   */
  public toDescribeInstanceAssociationsStatus() {
    this.to('ssm:DescribeInstanceAssociationsStatus');
    return this;
  }

  /**
   * Grants permission to view details about a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstanceInformation.html
   */
  public toDescribeInstanceInformation() {
    this.to('ssm:DescribeInstanceInformation');
    return this;
  }

  /**
   * Grants permission to view status details about patches on a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatchStates.html
   */
  public toDescribeInstancePatchStates() {
    this.to('ssm:DescribeInstancePatchStates');
    return this;
  }

  /**
   * Grants permission to describe the high-level patch state for the instances in the specified patch group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatchStatesForPatchGroup.html
   */
  public toDescribeInstancePatchStatesForPatchGroup() {
    this.to('ssm:DescribeInstancePatchStatesForPatchGroup');
    return this;
  }

  /**
   * Grants permission to view general details about the patches on a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatches.html
   */
  public toDescribeInstancePatches() {
    this.to('ssm:DescribeInstancePatches');
    return this;
  }

  /**
   * Grants permission to user's Amazon EC2 console to render managed instances' nodes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toDescribeInstanceProperties() {
    this.to('ssm:DescribeInstanceProperties');
    return this;
  }

  /**
   * Grants permission to view details about a specified inventory deletion
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInventoryDeletions.html
   */
  public toDescribeInventoryDeletions() {
    this.to('ssm:DescribeInventoryDeletions');
    return this;
  }

  /**
   * Grants permission to view details of a specified task execution for a maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutionTaskInvocations.html
   */
  public toDescribeMaintenanceWindowExecutionTaskInvocations() {
    this.to('ssm:DescribeMaintenanceWindowExecutionTaskInvocations');
    return this;
  }

  /**
   * Grants permission to view details about the tasks that ran during a specified maintenance window execution
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutionTasks.html
   */
  public toDescribeMaintenanceWindowExecutionTasks() {
    this.to('ssm:DescribeMaintenanceWindowExecutionTasks');
    return this;
  }

  /**
   * Grants permission to view the executions of a specified maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutions.html
   */
  public toDescribeMaintenanceWindowExecutions() {
    this.to('ssm:DescribeMaintenanceWindowExecutions');
    return this;
  }

  /**
   * Grants permission to view details about upcoming executions of a specified maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowSchedule.html
   */
  public toDescribeMaintenanceWindowSchedule() {
    this.to('ssm:DescribeMaintenanceWindowSchedule');
    return this;
  }

  /**
   * Grants permission to view a list of the targets associated with a specified maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowTargets.html
   */
  public toDescribeMaintenanceWindowTargets() {
    this.to('ssm:DescribeMaintenanceWindowTargets');
    return this;
  }

  /**
   * Grants permission to view a list of the tasks associated with a specified maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowTasks.html
   */
  public toDescribeMaintenanceWindowTasks() {
    this.to('ssm:DescribeMaintenanceWindowTasks');
    return this;
  }

  /**
   * Grants permission to view information about all or specified maintenance windows
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindows.html
   */
  public toDescribeMaintenanceWindows() {
    this.to('ssm:DescribeMaintenanceWindows');
    return this;
  }

  /**
   * Grants permission to view information about the maintenance window targets and tasks associated with a specified instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowsForTarget.html
   */
  public toDescribeMaintenanceWindowsForTarget() {
    this.to('ssm:DescribeMaintenanceWindowsForTarget');
    return this;
  }

  /**
   * Grants permission to view details about specified OpsItems
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeOpsItems.html
   */
  public toDescribeOpsItems() {
    this.to('ssm:DescribeOpsItems');
    return this;
  }

  /**
   * Grants permission to view details about a specified SSM parameter
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeParameters.html
   */
  public toDescribeParameters() {
    this.to('ssm:DescribeParameters');
    return this;
  }

  /**
   * Grants permission to view information about patch baselines that meet the specified criteria
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchBaselines.html
   */
  public toDescribePatchBaselines() {
    this.to('ssm:DescribePatchBaselines');
    return this;
  }

  /**
   * Grants permission to view aggregated status details for patches for a specified patch group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchGroupState.html
   */
  public toDescribePatchGroupState() {
    this.to('ssm:DescribePatchGroupState');
    return this;
  }

  /**
   * Grants permission to view information about the patch baseline for a specified patch group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchGroups.html
   */
  public toDescribePatchGroups() {
    this.to('ssm:DescribePatchGroups');
    return this;
  }

  /**
   * Grants permission to view details of available patches for a specified operating system and patch property
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchProperties.html
   */
  public toDescribePatchProperties() {
    this.to('ssm:DescribePatchProperties');
    return this;
  }

  /**
   * Grants permission to view a list of recent Session Manager sessions that meet the specified search criteria
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeSessions.html
   */
  public toDescribeSessions() {
    this.to('ssm:DescribeSessions');
    return this;
  }

  /**
   * Grants permission to view details of a specified Automation execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AutomationExecution.html
   */
  public toGetAutomationExecution() {
    this.to('ssm:GetAutomationExecution');
    return this;
  }

  /**
   * Grants permission to view the calendar state for a change calendar or a list of change calendars
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetCalendarState.html
   */
  public toGetCalendarState() {
    this.to('ssm:GetCalendarState');
    return this;
  }

  /**
   * Grants permission to view details about the command execution of a specified invocation or plugin
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetCommandInvocation.html
   */
  public toGetCommandInvocation() {
    this.to('ssm:GetCommandInvocation');
    return this;
  }

  /**
   * Grants permission to view the Session Manager connection status for a specified managed instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetConnectionStatus.html
   */
  public toGetConnectionStatus() {
    this.to('ssm:GetConnectionStatus');
    return this;
  }

  /**
   * Grants permission to view the current default patch baseline for a specified operating system type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDefaultPatchBaseline.html
   */
  public toGetDefaultPatchBaseline() {
    this.to('ssm:GetDefaultPatchBaseline');
    return this;
  }

  /**
   * Grants permission to retrieve the current patch baseline snapshot for a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDeployablePatchSnapshotForInstance.html
   */
  public toGetDeployablePatchSnapshotForInstance() {
    this.to('ssm:GetDeployablePatchSnapshotForInstance');
    return this;
  }

  /**
   * Grants permission to view the contents of a specified SSM document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDocument.html
   */
  public toGetDocument() {
    this.to('ssm:GetDocument');
    return this;
  }

  /**
   * Grants permission to view instance inventory details per the specified criteria
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetInventory.html
   */
  public toGetInventory() {
    this.to('ssm:GetInventory');
    return this;
  }

  /**
   * Grants permission to view a list of inventory types or attribute names for a specified inventory item type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetInventorySchema.html
   */
  public toGetInventorySchema() {
    this.to('ssm:GetInventorySchema');
    return this;
  }

  /**
   * Grants permission to view details about a specified maintenance window
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindow.html
   */
  public toGetMaintenanceWindow() {
    this.to('ssm:GetMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to view details about a specified maintenance window execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecution.html
   */
  public toGetMaintenanceWindowExecution() {
    this.to('ssm:GetMaintenanceWindowExecution');
    return this;
  }

  /**
   * Grants permission to view details about a specified maintenance window execution task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecutionTask.html
   */
  public toGetMaintenanceWindowExecutionTask() {
    this.to('ssm:GetMaintenanceWindowExecutionTask');
    return this;
  }

  /**
   * Grants permission to view details about a specific maintenance window task running on a specific target
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecutionTaskInvocation.html
   */
  public toGetMaintenanceWindowExecutionTaskInvocation() {
    this.to('ssm:GetMaintenanceWindowExecutionTaskInvocation');
    return this;
  }

  /**
   * Grants permission to view details about tasks registered with a specified maintenance window
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowTask.html
   */
  public toGetMaintenanceWindowTask() {
    this.to('ssm:GetMaintenanceWindowTask');
    return this;
  }

  /**
   * Used by Systems Manager and SSM Agent to determine package installation requirements for an instance (internal Systems Manager call)
   *
   * Access Level: Read
   */
  public toGetManifest() {
    this.to('ssm:GetManifest');
    return this;
  }

  /**
   * Grants permission to view information about a specified OpsItem
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsItem.html
   */
  public toGetOpsItem() {
    this.to('ssm:GetOpsItem');
    return this;
  }

  /**
   * Grants permission to view summary information about OpsItems based on specified filters and aggregators
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsSummary.html
   */
  public toGetOpsSummary() {
    this.to('ssm:GetOpsSummary');
    return this;
  }

  /**
   * Grants permission to view information about a specified parameter
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameter.html
   */
  public toGetParameter() {
    this.to('ssm:GetParameter');
    return this;
  }

  /**
   * Grants permission to view details and changes for a specified parameter
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameterHistory.html
   */
  public toGetParameterHistory() {
    this.to('ssm:GetParameterHistory');
    return this;
  }

  /**
   * Grants permission to view information about multiple specified parameters
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameters.html
   */
  public toGetParameters() {
    this.to('ssm:GetParameters');
    return this;
  }

  /**
   * Grants permission to view information about parameters in a specified hierarchy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParametersByPath.html
   */
  public toGetParametersByPath() {
    this.to('ssm:GetParametersByPath');
    return this;
  }

  /**
   * Grants permission to view information about a specified patch baseline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetPatchBaseline.html
   */
  public toGetPatchBaseline() {
    this.to('ssm:GetPatchBaseline');
    return this;
  }

  /**
   * Grants permission to view the ID of the current patch baseline for a specified patch group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetPatchBaselineForPatchGroup.html
   */
  public toGetPatchBaselineForPatchGroup() {
    this.to('ssm:GetPatchBaselineForPatchGroup');
    return this;
  }

  /**
   * Grants permission to view the account-level setting for an AWS service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetServiceSetting.html
   */
  public toGetServiceSetting() {
    this.to('ssm:GetServiceSetting');
    return this;
  }

  /**
   * Grants permission to apply an identifying label to a specified version of a parameter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_LabelParameterVersion.html
   */
  public toLabelParameterVersion() {
    this.to('ssm:LabelParameterVersion');
    return this;
  }

  /**
   * Grants permission to list versions of the specified association
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListAssociationVersions.html
   */
  public toListAssociationVersions() {
    this.to('ssm:ListAssociationVersions');
    return this;
  }

  /**
   * Grants permission to list the associations for a specified SSM document or managed instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListAssociations.html
   */
  public toListAssociations() {
    this.to('ssm:ListAssociations');
    return this;
  }

  /**
   * Grants permission to list information about command invocations sent to a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommandInvocations.html
   */
  public toListCommandInvocations() {
    this.to('ssm:ListCommandInvocations');
    return this;
  }

  /**
   * Grants permission to list the commands sent to a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommands.html
   */
  public toListCommands() {
    this.to('ssm:ListCommands');
    return this;
  }

  /**
   * Grants permission to list compliance status for specified resource types on a specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListComplianceItems.html
   */
  public toListComplianceItems() {
    this.to('ssm:ListComplianceItems');
    return this;
  }

  /**
   * Grants permission to list a summary count of compliant and noncompliant resources for a specified compliance type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListComplianceSummaries.html
   */
  public toListComplianceSummaries() {
    this.to('ssm:ListComplianceSummaries');
    return this;
  }

  /**
   * Grants permission to list all versions of a specified document
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocumentVersions.html
   */
  public toListDocumentVersions() {
    this.to('ssm:ListDocumentVersions');
    return this;
  }

  /**
   * Grants permission to view information about a specified SSM document
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocuments.html
   */
  public toListDocuments() {
    this.to('ssm:ListDocuments');
    return this;
  }

  /**
   * Used by SSM Agent to check for new State Manager associations (internal Systems Manager call)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toListInstanceAssociations() {
    this.to('ssm:ListInstanceAssociations');
    return this;
  }

  /**
   * Grants permission to view a list of specified inventory types for a specified instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListInventoryEntries.html
   */
  public toListInventoryEntries() {
    this.to('ssm:ListInventoryEntries');
    return this;
  }

  /**
   * Grants permission to list resource-level summary count
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListResourceComplianceSummaries.html
   */
  public toListResourceComplianceSummaries() {
    this.to('ssm:ListResourceComplianceSummaries');
    return this;
  }

  /**
   * Grants permission to list information about resource data sync configurations in an account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifSyncType()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListResourceDataSync.html
   */
  public toListResourceDataSync() {
    this.to('ssm:ListResourceDataSync');
    return this;
  }

  /**
   * Grants permission to view a list of resource tags for a specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ssm:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to share a custom SSM document publicly or privately with specified AWS accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ModifyDocumentPermission.html
   */
  public toModifyDocumentPermission() {
    this.to('ssm:ModifyDocumentPermission');
    return this;
  }

  /**
   * Grants permission to register a compliance type and other compliance details on a specified resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutComplianceItems.html
   */
  public toPutComplianceItems() {
    this.to('ssm:PutComplianceItems');
    return this;
  }

  /**
   * Used by SSM Agent to generate a report of the results of specific agent requests (internal Systems Manager call)
   *
   * Access Level: Read
   */
  public toPutConfigurePackageResult() {
    this.to('ssm:PutConfigurePackageResult');
    return this;
  }

  /**
   * Grants permission to add or update inventory items on multiple specified managed instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutInventory.html
   */
  public toPutInventory() {
    this.to('ssm:PutInventory');
    return this;
  }

  /**
   * Grants permission to create an SSM parameter
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutParameter.html
   */
  public toPutParameter() {
    this.to('ssm:PutParameter');
    return this;
  }

  /**
   * Grants permission to specify the default patch baseline for an operating system type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterDefaultPatchBaseline.html
   */
  public toRegisterDefaultPatchBaseline() {
    this.to('ssm:RegisterDefaultPatchBaseline');
    return this;
  }

  /**
   * Grants permission to specify the default patch baseline for a specified patch group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterPatchBaselineForPatchGroup.html
   */
  public toRegisterPatchBaselineForPatchGroup() {
    this.to('ssm:RegisterPatchBaselineForPatchGroup');
    return this;
  }

  /**
   * Grants permission to register a target with a specified maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTargetWithMaintenanceWindow.html
   */
  public toRegisterTargetWithMaintenanceWindow() {
    this.to('ssm:RegisterTargetWithMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to register a task with a specified maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTaskWithMaintenanceWindow.html
   */
  public toRegisterTaskWithMaintenanceWindow() {
    this.to('ssm:RegisterTaskWithMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to remove a specified tag key from a specified resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    this.to('ssm:RemoveTagsFromResource');
    return this;
  }

  /**
   * Grants permission to reset the service setting for an AWS account to the default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ResetServiceSetting.html
   */
  public toResetServiceSetting() {
    this.to('ssm:ResetServiceSetting');
    return this;
  }

  /**
   * Grants permission to reconnect a Session Manager session to a managed instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ResumeSession.html
   */
  public toResumeSession() {
    this.to('ssm:ResumeSession');
    return this;
  }

  /**
   * Grants permission to send a signal to change the current behavior or status of a specified Automation execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendAutomationSignal.html
   */
  public toSendAutomationSignal() {
    this.to('ssm:SendAutomationSignal');
    return this;
  }

  /**
   * Grants permission to run commands on one or more specified managed instances
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendCommand.html
   */
  public toSendCommand() {
    this.to('ssm:SendCommand');
    return this;
  }

  /**
   * Grants permission to run a specified association manually
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartAssociationsOnce.html
   */
  public toStartAssociationsOnce() {
    this.to('ssm:StartAssociationsOnce');
    return this;
  }

  /**
   * Grants permission to initiate the execution of an Automation document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartAutomationExecution.html
   */
  public toStartAutomationExecution() {
    this.to('ssm:StartAutomationExecution');
    return this;
  }

  /**
   * Grants permission to initiate a connection to a specified target for a Session Manager session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSessionDocumentAccessCheck()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartSession.html
   */
  public toStartSession() {
    this.to('ssm:StartSession');
    return this;
  }

  /**
   * Grants permission to stop a specified Automation execution that is already in progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StopAutomationExecution.html
   */
  public toStopAutomationExecution() {
    this.to('ssm:StopAutomationExecution');
    return this;
  }

  /**
   * Grants permission to permanently end a Session Manager connection to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_TerminateSession.html
   */
  public toTerminateSession() {
    this.to('ssm:TerminateSession');
    return this;
  }

  /**
   * Grants permission to update an association and immediately run the association on the specified targets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociation.html
   */
  public toUpdateAssociation() {
    this.to('ssm:UpdateAssociation');
    return this;
  }

  /**
   * Grants permission to update the status of the SSM document associated with a specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociationStatus.html
   */
  public toUpdateAssociationStatus() {
    this.to('ssm:UpdateAssociationStatus');
    return this;
  }

  /**
   * Grants permission to update one or more values for an SSM document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocument.html
   */
  public toUpdateDocument() {
    this.to('ssm:UpdateDocument');
    return this;
  }

  /**
   * Grants permission to change the default version of an SSM document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocumentDefaultVersion.html
   */
  public toUpdateDocumentDefaultVersion() {
    this.to('ssm:UpdateDocumentDefaultVersion');
    return this;
  }

  /**
   * Used by SSM Agent to update the status of the association that it is currently running (internal Systems Manager call)
   *
   * Access Level: Write
   */
  public toUpdateInstanceAssociationStatus() {
    this.to('ssm:UpdateInstanceAssociationStatus');
    return this;
  }

  /**
   * Used by SSM Agent to send a heartbeat signal to the Systems Manager service in the cloud
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toUpdateInstanceInformation() {
    this.to('ssm:UpdateInstanceInformation');
    return this;
  }

  /**
   * Grants permission to update a specified maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindow.html
   */
  public toUpdateMaintenanceWindow() {
    this.to('ssm:UpdateMaintenanceWindow');
    return this;
  }

  /**
   * Grants permission to update a specified maintenance window target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindowTarget.html
   */
  public toUpdateMaintenanceWindowTarget() {
    this.to('ssm:UpdateMaintenanceWindowTarget');
    return this;
  }

  /**
   * Grants permission to update a specified maintenance window task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindowTask.html
   */
  public toUpdateMaintenanceWindowTask() {
    this.to('ssm:UpdateMaintenanceWindowTask');
    return this;
  }

  /**
   * Grants permission to assign or change the IAM role assigned to a specified managed instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateManagedInstanceRole.html
   */
  public toUpdateManagedInstanceRole() {
    this.to('ssm:UpdateManagedInstanceRole');
    return this;
  }

  /**
   * Grants permission to edit or change an OpsItem
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateOpsItem.html
   */
  public toUpdateOpsItem() {
    this.to('ssm:UpdateOpsItem');
    return this;
  }

  /**
   * Grants permission to update a specified patch baseline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdatePatchBaseline.html
   */
  public toUpdatePatchBaseline() {
    this.to('ssm:UpdatePatchBaseline');
    return this;
  }

  /**
   * Grants permission to update a resource data sync
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSyncType()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateResourceDataSync.html
   */
  public toUpdateResourceDataSync() {
    this.to('ssm:UpdateResourceDataSync');
    return this;
  }

  /**
   * Grants permission to update the service setting for an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateServiceSetting.html
   */
  public toUpdateServiceSetting() {
    this.to('ssm:UpdateServiceSetting');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Tagging": [
      "AddTagsToResource",
      "RemoveTagsFromResource"
    ],
    "Write": [
      "CancelCommand",
      "CancelMaintenanceWindowExecution",
      "CreateActivation",
      "CreateAssociation",
      "CreateAssociationBatch",
      "CreateDocument",
      "CreateMaintenanceWindow",
      "CreateOpsItem",
      "CreatePatchBaseline",
      "CreateResourceDataSync",
      "DeleteActivation",
      "DeleteAssociation",
      "DeleteDocument",
      "DeleteInventory",
      "DeleteMaintenanceWindow",
      "DeleteParameter",
      "DeleteParameters",
      "DeletePatchBaseline",
      "DeleteResourceDataSync",
      "DeregisterManagedInstance",
      "DeregisterPatchBaselineForPatchGroup",
      "DeregisterTargetFromMaintenanceWindow",
      "DeregisterTaskFromMaintenanceWindow",
      "LabelParameterVersion",
      "ModifyDocumentPermission",
      "PutComplianceItems",
      "PutInventory",
      "PutParameter",
      "RegisterDefaultPatchBaseline",
      "RegisterPatchBaselineForPatchGroup",
      "RegisterTargetWithMaintenanceWindow",
      "RegisterTaskWithMaintenanceWindow",
      "ResetServiceSetting",
      "ResumeSession",
      "SendAutomationSignal",
      "SendCommand",
      "StartAssociationsOnce",
      "StartAutomationExecution",
      "StartSession",
      "StopAutomationExecution",
      "TerminateSession",
      "UpdateAssociation",
      "UpdateAssociationStatus",
      "UpdateDocument",
      "UpdateDocumentDefaultVersion",
      "UpdateInstanceAssociationStatus",
      "UpdateInstanceInformation",
      "UpdateMaintenanceWindow",
      "UpdateMaintenanceWindowTarget",
      "UpdateMaintenanceWindowTask",
      "UpdateManagedInstanceRole",
      "UpdateOpsItem",
      "UpdatePatchBaseline",
      "UpdateResourceDataSync",
      "UpdateServiceSetting"
    ],
    "Read": [
      "DescribeActivations",
      "DescribeAssociation",
      "DescribeAssociationExecutionTargets",
      "DescribeAssociationExecutions",
      "DescribeAutomationExecutions",
      "DescribeAutomationStepExecutions",
      "DescribeAvailablePatches",
      "DescribeDocument",
      "DescribeDocumentParameters",
      "DescribeDocumentPermission",
      "DescribeEffectiveInstanceAssociations",
      "DescribeEffectivePatchesForPatchBaseline",
      "DescribeInstanceAssociationsStatus",
      "DescribeInstanceInformation",
      "DescribeInstancePatchStates",
      "DescribeInstancePatchStatesForPatchGroup",
      "DescribeInstancePatches",
      "DescribeInstanceProperties",
      "DescribeInventoryDeletions",
      "DescribeOpsItems",
      "DescribePatchGroupState",
      "GetAutomationExecution",
      "GetCalendarState",
      "GetCommandInvocation",
      "GetConnectionStatus",
      "GetDefaultPatchBaseline",
      "GetDeployablePatchSnapshotForInstance",
      "GetDocument",
      "GetInventory",
      "GetInventorySchema",
      "GetMaintenanceWindow",
      "GetMaintenanceWindowExecution",
      "GetMaintenanceWindowExecutionTask",
      "GetMaintenanceWindowExecutionTaskInvocation",
      "GetMaintenanceWindowTask",
      "GetManifest",
      "GetOpsItem",
      "GetOpsSummary",
      "GetParameter",
      "GetParameterHistory",
      "GetParameters",
      "GetParametersByPath",
      "GetPatchBaseline",
      "GetPatchBaselineForPatchGroup",
      "GetServiceSetting",
      "ListCommandInvocations",
      "ListCommands",
      "ListTagsForResource",
      "PutConfigurePackageResult"
    ],
    "List": [
      "DescribeMaintenanceWindowExecutionTaskInvocations",
      "DescribeMaintenanceWindowExecutionTasks",
      "DescribeMaintenanceWindowExecutions",
      "DescribeMaintenanceWindowSchedule",
      "DescribeMaintenanceWindowTargets",
      "DescribeMaintenanceWindowTasks",
      "DescribeMaintenanceWindows",
      "DescribeMaintenanceWindowsForTarget",
      "DescribeParameters",
      "DescribePatchBaselines",
      "DescribePatchGroups",
      "DescribePatchProperties",
      "DescribeSessions",
      "ListAssociationVersions",
      "ListAssociations",
      "ListComplianceItems",
      "ListComplianceSummaries",
      "ListDocumentVersions",
      "ListDocuments",
      "ListInstanceAssociations",
      "ListInventoryEntries",
      "ListResourceComplianceSummaries",
      "ListResourceDataSync"
    ]
  };

  /**
   * Adds a resource of type association to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-associations.html
   *
   * @param associationId - Identifier for the associationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAssociation(associationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:association/${AssociationId}';
    arn = arn.replace('${AssociationId}', associationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type automation-execution to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-working.html
   *
   * @param automationExecutionId - Identifier for the automationExecutionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAutomationExecution(automationExecutionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:automation-execution/${AutomationExecutionId}';
    arn = arn.replace('${AutomationExecutionId}', automationExecutionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type automation-definition to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-documents.html
   *
   * @param automationDefinitionName - Identifier for the automationDefinitionName.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAutomationDefinition(automationDefinitionName: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:automation-definition/${AutomationDefinitionName}:${VersionId}';
    arn = arn.replace('${AutomationDefinitionName}', automationDefinitionName);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type document to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html
   *
   * @param documentName - Identifier for the documentName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onDocument(documentName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:document/${DocumentName}';
    arn = arn.replace('${DocumentName}', documentName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type instance to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:instance/${InstanceId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type maintenancewindow to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-maintenance.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onMaintenancewindow(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:maintenancewindow/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type managed-instance to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html
   *
   * @param managedInstanceName - Identifier for the managedInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onManagedInstance(managedInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:managed-instance/${ManagedInstanceName}';
    arn = arn.replace('${ManagedInstanceName}', managedInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type managed-instance-inventory to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-configuring.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onManagedInstanceInventory(instanceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:managed-instance-inventory/${InstanceId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type opsitem to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOpsitem(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:opsitem/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type parameter to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html
   *
   * @param fullyQualifiedParameterName - Identifier for the fullyQualifiedParameterName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onParameter(fullyQualifiedParameterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:parameter/${FullyQualifiedParameterName}';
    arn = arn.replace('${FullyQualifiedParameterName}', fullyQualifiedParameterName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type patchbaseline to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html
   *
   * @param patchBaselineIdResourceId - Identifier for the patchBaselineIdResourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onPatchbaseline(patchBaselineIdResourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:patchbaseline/${PatchBaselineIdResourceId}';
    arn = arn.replace('${PatchBaselineIdResourceId}', patchBaselineIdResourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type session to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html
   *
   * @param sessionId - Identifier for the sessionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSession(sessionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:session/${SessionId}';
    arn = arn.replace('${SessionId}', sessionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type resourcedatasync to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html
   *
   * @param syncName - Identifier for the syncName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onResourcedatasync(syncName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:resource-data-sync/${SyncName}';
    arn = arn.replace('${SyncName}', syncName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type servicesetting to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/API_ServiceSetting.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onServicesetting(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:servicesetting/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type windowtarget to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-assign-targets.html
   *
   * @param windowTargetId - Identifier for the windowTargetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onWindowtarget(windowTargetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:windowtarget/${WindowTargetId}';
    arn = arn.replace('${WindowTargetId}', windowTargetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type windowtask to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-assign-tasks.html
   *
   * @param windowTaskId - Identifier for the windowTaskId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onWindowtask(windowTaskId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm:${Region}:${Account}:windowtask/${WindowTaskId}';
    arn = arn.replace('${WindowTaskId}', windowTaskId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by controlling whether the values for specified resources can be overwritten.
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOverwrite(value: string | string[], operator?: Operator | string) {
    return this.if(`ssm:Overwrite`, value, operator || 'StringLike');
  }

  /**
   * Filters access for resources created in a hierarchical structure.
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRecursive(value: string | string[], operator?: Operator | string) {
    return this.if(`ssm:Recursive`, value, operator || 'StringLike');
  }

  /**
   * Filters access by verifying that a user has permission to access either the default Session Manager configuration document or the custom configuration document specified in a request.
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-sessiondocumentaccesscheck.html
   *
   * Applies to actions:
   * - .toStartSession()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifSessionDocumentAccessCheck(value?: boolean) {
    return this.if(`ssm:SessionDocumentAccessCheck`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by verifying that a user also has access to the ResourceDataSync SyncType specified in the request
   *
   * Applies to actions:
   * - .toCreateResourceDataSync()
   * - .toDeleteResourceDataSync()
   * - .toListResourceDataSync()
   * - .toUpdateResourceDataSync()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSyncType(value: string | string[], operator?: Operator | string) {
    return this.if(`ssm:SyncType`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on a tag key-value pair assigned to the Systems Manager resource
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
   *
   * Applies to actions:
   * - .toSendCommand()
   *
   * Applies to resource types:
   * - document
   * - instance
   * - maintenancewindow
   * - managed-instance
   * - parameter
   * - patchbaseline
   *
   * @param tagkey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagkey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ssm:resourceTag/${ tagkey }`, value, operator || 'StringLike');
  }
}
