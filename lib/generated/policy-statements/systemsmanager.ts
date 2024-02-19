import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [ssm](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ssm extends PolicyStatement {
  public servicePrefix = 'ssm';

  /**
   * Statement provider for service [ssm](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add or overwrite one or more tags for a specified AWS resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
    return this.to('AddTagsToResource');
  }

  /**
   * Grants permission to associate RelatedItem to an OpsItem
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AssociateOpsItemRelatedItem.html
   */
  public toAssociateOpsItemRelatedItem() {
    return this.to('AssociateOpsItemRelatedItem');
  }

  /**
   * Grants permission to cancel a specified Run Command command
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CancelCommand.html
   */
  public toCancelCommand() {
    return this.to('CancelCommand');
  }

  /**
   * Grants permission to cancel an in-progress maintenance window execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CancelMaintenanceWindowExecution.html
   */
  public toCancelMaintenanceWindowExecution() {
    return this.to('CancelMaintenanceWindowExecution');
  }

  /**
   * Grants permission to create an activation that is used to register on-premises servers and virtual machines (VMs) with Systems Manager
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateActivation.html
   */
  public toCreateActivation() {
    return this.to('CreateActivation');
  }

  /**
   * Grants permission to associate a specified Systems Manager document with specified instances or other targets
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociation.html
   */
  public toCreateAssociation() {
    return this.to('CreateAssociation');
  }

  /**
   * Grants permission to combine entries for multiple CreateAssociation operations in a single command
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociationBatch.html
   */
  public toCreateAssociationBatch() {
    return this.to('CreateAssociationBatch');
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
    return this.to('CreateDocument');
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
    return this.to('CreateMaintenanceWindow');
  }

  /**
   * Grants permission to create an OpsItem in OpsCenter
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateOpsItem.html
   */
  public toCreateOpsItem() {
    return this.to('CreateOpsItem');
  }

  /**
   * Grants permission to create an OpsMetadata object for an AWS resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateOpsMetadata.html
   */
  public toCreateOpsMetadata() {
    return this.to('CreateOpsMetadata');
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
    return this.to('CreatePatchBaseline');
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
    return this.to('CreateResourceDataSync');
  }

  /**
   * Grants permission to delete a specified activation for managed instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteActivation.html
   */
  public toDeleteActivation() {
    return this.to('DeleteActivation');
  }

  /**
   * Grants permission to disassociate a specified SSM document from a specified instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteAssociation.html
   */
  public toDeleteAssociation() {
    return this.to('DeleteAssociation');
  }

  /**
   * Grants permission to delete a specified SSM document and its instance associations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteDocument.html
   */
  public toDeleteDocument() {
    return this.to('DeleteDocument');
  }

  /**
   * Grants permission to delete a specified custom inventory type, or the data associated with a custom inventory type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteInventory.html
   */
  public toDeleteInventory() {
    return this.to('DeleteInventory');
  }

  /**
   * Grants permission to delete a specified maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteMaintenanceWindow.html
   */
  public toDeleteMaintenanceWindow() {
    return this.to('DeleteMaintenanceWindow');
  }

  /**
   * Grants permission to delete an OpsItem
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteOpsItem.html
   */
  public toDeleteOpsItem() {
    return this.to('DeleteOpsItem');
  }

  /**
   * Grants permission to delete an OpsMetadata object
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteOpsMetadata.html
   */
  public toDeleteOpsMetadata() {
    return this.to('DeleteOpsMetadata');
  }

  /**
   * Grants permission to delete a specified SSM parameter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameter.html
   */
  public toDeleteParameter() {
    return this.to('DeleteParameter');
  }

  /**
   * Grants permission to delete multiple specified SSM parameters
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameters.html
   */
  public toDeleteParameters() {
    return this.to('DeleteParameters');
  }

  /**
   * Grants permission to delete a specified patch baseline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeletePatchBaseline.html
   */
  public toDeletePatchBaseline() {
    return this.to('DeletePatchBaseline');
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
    return this.to('DeleteResourceDataSync');
  }

  /**
   * Grants permission to delete a Systems Manager resource policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to deregister a specified on-premises server or virtual machine (VM) from Systems Manager
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterManagedInstance.html
   */
  public toDeregisterManagedInstance() {
    return this.to('DeregisterManagedInstance');
  }

  /**
   * Grants permission to deregister a specified patch baseline from being the default patch baseline for a specified patch group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterPatchBaselineForPatchGroup.html
   */
  public toDeregisterPatchBaselineForPatchGroup() {
    return this.to('DeregisterPatchBaselineForPatchGroup');
  }

  /**
   * Grants permission to deregister a specified target from a maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterTargetFromMaintenanceWindow.html
   */
  public toDeregisterTargetFromMaintenanceWindow() {
    return this.to('DeregisterTargetFromMaintenanceWindow');
  }

  /**
   * Grants permission to deregister a specified task from a maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterTaskFromMaintenanceWindow.html
   */
  public toDeregisterTaskFromMaintenanceWindow() {
    return this.to('DeregisterTaskFromMaintenanceWindow');
  }

  /**
   * Grants permission to view details about a specified managed instance activation, such as when it was created and the number of instances registered using the activation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeActivations.html
   */
  public toDescribeActivations() {
    return this.to('DescribeActivations');
  }

  /**
   * Grants permission to view details about the specified association for a specified instance or target
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociation.html
   */
  public toDescribeAssociation() {
    return this.to('DescribeAssociation');
  }

  /**
   * Grants permission to view information about a specified association execution
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociationExecutionTargets.html
   */
  public toDescribeAssociationExecutionTargets() {
    return this.to('DescribeAssociationExecutionTargets');
  }

  /**
   * Grants permission to view all executions for a specified association
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociationExecutions.html
   */
  public toDescribeAssociationExecutions() {
    return this.to('DescribeAssociationExecutions');
  }

  /**
   * Grants permission to view details about all active and terminated Automation executions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAutomationExecutions.html
   */
  public toDescribeAutomationExecutions() {
    return this.to('DescribeAutomationExecutions');
  }

  /**
   * Grants permission to view information about all active and terminated step executions in an Automation workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAutomationStepExecutions.html
   */
  public toDescribeAutomationStepExecutions() {
    return this.to('DescribeAutomationStepExecutions');
  }

  /**
   * Grants permission to view all patches eligible to include in a patch baseline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAvailablePatches.html
   */
  public toDescribeAvailablePatches() {
    return this.to('DescribeAvailablePatches');
  }

  /**
   * Grants permission to view details about a specified SSM document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeDocument.html
   */
  public toDescribeDocument() {
    return this.to('DescribeDocument');
  }

  /**
   * Grants permission to display information about SSM document parameters in the Systems Manager console (internal Systems Manager action)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toDescribeDocumentParameters() {
    return this.to('DescribeDocumentParameters');
  }

  /**
   * Grants permission to view the permissions for a specified SSM document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeDocumentPermission.html
   */
  public toDescribeDocumentPermission() {
    return this.to('DescribeDocumentPermission');
  }

  /**
   * Grants permission to view all current associations for a specified instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeEffectiveInstanceAssociations.html
   */
  public toDescribeEffectiveInstanceAssociations() {
    return this.to('DescribeEffectiveInstanceAssociations');
  }

  /**
   * Grants permission to view details about the patches currently associated with the specified patch baseline (Windows only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeEffectivePatchesForPatchBaseline.html
   */
  public toDescribeEffectivePatchesForPatchBaseline() {
    return this.to('DescribeEffectivePatchesForPatchBaseline');
  }

  /**
   * Grants permission to view the status of the associations for a specified instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstanceAssociationsStatus.html
   */
  public toDescribeInstanceAssociationsStatus() {
    return this.to('DescribeInstanceAssociationsStatus');
  }

  /**
   * Grants permission to view details about a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstanceInformation.html
   */
  public toDescribeInstanceInformation() {
    return this.to('DescribeInstanceInformation');
  }

  /**
   * Grants permission to view status details about patches on a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatchStates.html
   */
  public toDescribeInstancePatchStates() {
    return this.to('DescribeInstancePatchStates');
  }

  /**
   * Grants permission to describe the high-level patch state for the instances in the specified patch group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatchStatesForPatchGroup.html
   */
  public toDescribeInstancePatchStatesForPatchGroup() {
    return this.to('DescribeInstancePatchStatesForPatchGroup');
  }

  /**
   * Grants permission to view general details about the patches on a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatches.html
   */
  public toDescribeInstancePatches() {
    return this.to('DescribeInstancePatches');
  }

  /**
   * Grants permission to user's Amazon EC2 console to render managed instances' nodes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toDescribeInstanceProperties() {
    return this.to('DescribeInstanceProperties');
  }

  /**
   * Grants permission to view details about a specified inventory deletion
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInventoryDeletions.html
   */
  public toDescribeInventoryDeletions() {
    return this.to('DescribeInventoryDeletions');
  }

  /**
   * Grants permission to view details of a specified task execution for a maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutionTaskInvocations.html
   */
  public toDescribeMaintenanceWindowExecutionTaskInvocations() {
    return this.to('DescribeMaintenanceWindowExecutionTaskInvocations');
  }

  /**
   * Grants permission to view details about the tasks that ran during a specified maintenance window execution
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutionTasks.html
   */
  public toDescribeMaintenanceWindowExecutionTasks() {
    return this.to('DescribeMaintenanceWindowExecutionTasks');
  }

  /**
   * Grants permission to view the executions of a specified maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutions.html
   */
  public toDescribeMaintenanceWindowExecutions() {
    return this.to('DescribeMaintenanceWindowExecutions');
  }

  /**
   * Grants permission to view details about upcoming executions of a specified maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowSchedule.html
   */
  public toDescribeMaintenanceWindowSchedule() {
    return this.to('DescribeMaintenanceWindowSchedule');
  }

  /**
   * Grants permission to view a list of the targets associated with a specified maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowTargets.html
   */
  public toDescribeMaintenanceWindowTargets() {
    return this.to('DescribeMaintenanceWindowTargets');
  }

  /**
   * Grants permission to view a list of the tasks associated with a specified maintenance window
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowTasks.html
   */
  public toDescribeMaintenanceWindowTasks() {
    return this.to('DescribeMaintenanceWindowTasks');
  }

  /**
   * Grants permission to view information about all or specified maintenance windows
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindows.html
   */
  public toDescribeMaintenanceWindows() {
    return this.to('DescribeMaintenanceWindows');
  }

  /**
   * Grants permission to view information about the maintenance window targets and tasks associated with a specified instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowsForTarget.html
   */
  public toDescribeMaintenanceWindowsForTarget() {
    return this.to('DescribeMaintenanceWindowsForTarget');
  }

  /**
   * Grants permission to view details about specified OpsItems
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeOpsItems.html
   */
  public toDescribeOpsItems() {
    return this.to('DescribeOpsItems');
  }

  /**
   * Grants permission to view details about a specified SSM parameter
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeParameters.html
   */
  public toDescribeParameters() {
    return this.to('DescribeParameters');
  }

  /**
   * Grants permission to view information about patch baselines that meet the specified criteria
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchBaselines.html
   */
  public toDescribePatchBaselines() {
    return this.to('DescribePatchBaselines');
  }

  /**
   * Grants permission to view aggregated status details for patches for a specified patch group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchGroupState.html
   */
  public toDescribePatchGroupState() {
    return this.to('DescribePatchGroupState');
  }

  /**
   * Grants permission to view information about the patch baseline for a specified patch group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchGroups.html
   */
  public toDescribePatchGroups() {
    return this.to('DescribePatchGroups');
  }

  /**
   * Grants permission to view details of available patches for a specified operating system and patch property
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchProperties.html
   */
  public toDescribePatchProperties() {
    return this.to('DescribePatchProperties');
  }

  /**
   * Grants permission to view a list of recent Session Manager sessions that meet the specified search criteria
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeSessions.html
   */
  public toDescribeSessions() {
    return this.to('DescribeSessions');
  }

  /**
   * Grants permission to disassociate RelatedItem from an OpsItem
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DisassociateOpsItemRelatedItem.html
   */
  public toDisassociateOpsItemRelatedItem() {
    return this.to('DisassociateOpsItemRelatedItem');
  }

  /**
   * Grants permission to view details of a specified Automation execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AutomationExecution.html
   */
  public toGetAutomationExecution() {
    return this.to('GetAutomationExecution');
  }

  /**
   * Grants permission to view details of a specific calendar
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar-prereqs.html
   */
  public toGetCalendar() {
    return this.to('GetCalendar');
  }

  /**
   * Grants permission to view the calendar state for a change calendar or a list of change calendars
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetCalendarState.html
   */
  public toGetCalendarState() {
    return this.to('GetCalendarState');
  }

  /**
   * Grants permission to view details about the command execution of a specified invocation or plugin
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetCommandInvocation.html
   */
  public toGetCommandInvocation() {
    return this.to('GetCommandInvocation');
  }

  /**
   * Grants permission to view the Session Manager connection status for a specified managed instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetConnectionStatus.html
   */
  public toGetConnectionStatus() {
    return this.to('GetConnectionStatus');
  }

  /**
   * Grants permission to view the current default patch baseline for a specified operating system type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDefaultPatchBaseline.html
   */
  public toGetDefaultPatchBaseline() {
    return this.to('GetDefaultPatchBaseline');
  }

  /**
   * Grants permission to retrieve the current patch baseline snapshot for a specified instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDeployablePatchSnapshotForInstance.html
   */
  public toGetDeployablePatchSnapshotForInstance() {
    return this.to('GetDeployablePatchSnapshotForInstance');
  }

  /**
   * Grants permission to view the contents of a specified SSM document
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDocumentCategories()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDocument.html
   */
  public toGetDocument() {
    return this.to('GetDocument');
  }

  /**
   * Grants permission to view instance inventory details per the specified criteria
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetInventory.html
   */
  public toGetInventory() {
    return this.to('GetInventory');
  }

  /**
   * Grants permission to view a list of inventory types or attribute names for a specified inventory item type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetInventorySchema.html
   */
  public toGetInventorySchema() {
    return this.to('GetInventorySchema');
  }

  /**
   * Grants permission to view details about a specified maintenance window
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindow.html
   */
  public toGetMaintenanceWindow() {
    return this.to('GetMaintenanceWindow');
  }

  /**
   * Grants permission to view details about a specified maintenance window execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecution.html
   */
  public toGetMaintenanceWindowExecution() {
    return this.to('GetMaintenanceWindowExecution');
  }

  /**
   * Grants permission to view details about a specified maintenance window execution task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecutionTask.html
   */
  public toGetMaintenanceWindowExecutionTask() {
    return this.to('GetMaintenanceWindowExecutionTask');
  }

  /**
   * Grants permission to view details about a specific maintenance window task running on a specific target
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecutionTaskInvocation.html
   */
  public toGetMaintenanceWindowExecutionTaskInvocation() {
    return this.to('GetMaintenanceWindowExecutionTaskInvocation');
  }

  /**
   * Grants permission to view details about tasks registered with a specified maintenance window
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowTask.html
   */
  public toGetMaintenanceWindowTask() {
    return this.to('GetMaintenanceWindowTask');
  }

  /**
   * Grants permission to Systems Manager and SSM Agent to determine package installation requirements for an instance (internal Systems Manager call)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toGetManifest() {
    return this.to('GetManifest');
  }

  /**
   * Grants permission to view information about a specified OpsItem
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsItem.html
   */
  public toGetOpsItem() {
    return this.to('GetOpsItem');
  }

  /**
   * Grants permission to retrieve an OpsMetadata object
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsMetadata.html
   */
  public toGetOpsMetadata() {
    return this.to('GetOpsMetadata');
  }

  /**
   * Grants permission to view summary information about OpsItems based on specified filters and aggregators
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsSummary.html
   */
  public toGetOpsSummary() {
    return this.to('GetOpsSummary');
  }

  /**
   * Grants permission to view information about a specified parameter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameter.html
   */
  public toGetParameter() {
    return this.to('GetParameter');
  }

  /**
   * Grants permission to view details and changes for a specified parameter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameterHistory.html
   */
  public toGetParameterHistory() {
    return this.to('GetParameterHistory');
  }

  /**
   * Grants permission to view information about multiple specified parameters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameters.html
   */
  public toGetParameters() {
    return this.to('GetParameters');
  }

  /**
   * Grants permission to view information about parameters in a specified hierarchy
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifRecursive()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParametersByPath.html
   */
  public toGetParametersByPath() {
    return this.to('GetParametersByPath');
  }

  /**
   * Grants permission to view information about a specified patch baseline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetPatchBaseline.html
   */
  public toGetPatchBaseline() {
    return this.to('GetPatchBaseline');
  }

  /**
   * Grants permission to view the ID of the current patch baseline for a specified patch group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetPatchBaselineForPatchGroup.html
   */
  public toGetPatchBaselineForPatchGroup() {
    return this.to('GetPatchBaselineForPatchGroup');
  }

  /**
   * Grants permission to retrieve lists of Systems Manager resource policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetResourcePolicies.html
   */
  public toGetResourcePolicies() {
    return this.to('GetResourcePolicies');
  }

  /**
   * Grants permission to view the account-level setting for an AWS service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetServiceSetting.html
   */
  public toGetServiceSetting() {
    return this.to('GetServiceSetting');
  }

  /**
   * Grants permission to apply an identifying label to a specified version of a parameter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_LabelParameterVersion.html
   */
  public toLabelParameterVersion() {
    return this.to('LabelParameterVersion');
  }

  /**
   * Grants permission to list versions of the specified association
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListAssociationVersions.html
   */
  public toListAssociationVersions() {
    return this.to('ListAssociationVersions');
  }

  /**
   * Grants permission to list the associations for a specified SSM document or managed instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListAssociations.html
   */
  public toListAssociations() {
    return this.to('ListAssociations');
  }

  /**
   * Grants permission to list information about command invocations sent to a specified instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommandInvocations.html
   */
  public toListCommandInvocations() {
    return this.to('ListCommandInvocations');
  }

  /**
   * Grants permission to list the commands sent to a specified instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommands.html
   */
  public toListCommands() {
    return this.to('ListCommands');
  }

  /**
   * Grants permission to list compliance status for specified resource types on a specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListComplianceItems.html
   */
  public toListComplianceItems() {
    return this.to('ListComplianceItems');
  }

  /**
   * Grants permission to list a summary count of compliant and noncompliant resources for a specified compliance type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListComplianceSummaries.html
   */
  public toListComplianceSummaries() {
    return this.to('ListComplianceSummaries');
  }

  /**
   * Grants permission to view metadata history about a specified SSM document
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocumentMetadataHistory.html
   */
  public toListDocumentMetadataHistory() {
    return this.to('ListDocumentMetadataHistory');
  }

  /**
   * Grants permission to list all versions of a specified document
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocumentVersions.html
   */
  public toListDocumentVersions() {
    return this.to('ListDocumentVersions');
  }

  /**
   * Grants permission to view information about a specified SSM document
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocuments.html
   */
  public toListDocuments() {
    return this.to('ListDocuments');
  }

  /**
   * Grants permission to SSM Agent to check for new State Manager associations (internal Systems Manager call)
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toListInstanceAssociations() {
    return this.to('ListInstanceAssociations');
  }

  /**
   * Grants permission to view a list of specified inventory types for a specified instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListInventoryEntries.html
   */
  public toListInventoryEntries() {
    return this.to('ListInventoryEntries');
  }

  /**
   * Grants permission to view details about OpsItemEvents
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListOpsItemEvents.html
   */
  public toListOpsItemEvents() {
    return this.to('ListOpsItemEvents');
  }

  /**
   * Grants permission to view details about OpsItem RelatedItems
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListOpsItemRelatedItems.html
   */
  public toListOpsItemRelatedItems() {
    return this.to('ListOpsItemRelatedItems');
  }

  /**
   * Grants permission to view a list of OpsMetadata objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListOpsMetadata.html
   */
  public toListOpsMetadata() {
    return this.to('ListOpsMetadata');
  }

  /**
   * Grants permission to list resource-level summary count
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListResourceComplianceSummaries.html
   */
  public toListResourceComplianceSummaries() {
    return this.to('ListResourceComplianceSummaries');
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
    return this.to('ListResourceDataSync');
  }

  /**
   * Grants permission to view a list of resource tags for a specified resource
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to share a custom SSM document publicly or privately with specified AWS accounts
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ModifyDocumentPermission.html
   */
  public toModifyDocumentPermission() {
    return this.to('ModifyDocumentPermission');
  }

  /**
   * Grants permission to create/edit a specific calendar
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar-prereqs.html
   */
  public toPutCalendar() {
    return this.to('PutCalendar');
  }

  /**
   * Grants permission to register a compliance type and other compliance details on a specified resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSourceInstanceARN()
   * - .ifEc2SourceInstanceARN()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutComplianceItems.html
   */
  public toPutComplianceItems() {
    return this.to('PutComplianceItems');
  }

  /**
   * Grants permission to SSM Agent to generate a report of the results of specific agent requests (internal Systems Manager call)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toPutConfigurePackageResult() {
    return this.to('PutConfigurePackageResult');
  }

  /**
   * Grants permission to add or update inventory items on multiple specified managed instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutInventory.html
   */
  public toPutInventory() {
    return this.to('PutInventory');
  }

  /**
   * Grants permission to create an SSM parameter
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifOverwrite()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutParameter.html
   */
  public toPutParameter() {
    return this.to('PutParameter');
  }

  /**
   * Grants permission to create or update a Systems Manager resource policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to specify the default patch baseline for an operating system type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterDefaultPatchBaseline.html
   */
  public toRegisterDefaultPatchBaseline() {
    return this.to('RegisterDefaultPatchBaseline');
  }

  /**
   * Grants permission to register a Systems Manager Agent
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toRegisterManagedInstance() {
    return this.to('RegisterManagedInstance');
  }

  /**
   * Grants permission to specify the default patch baseline for a specified patch group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterPatchBaselineForPatchGroup.html
   */
  public toRegisterPatchBaselineForPatchGroup() {
    return this.to('RegisterPatchBaselineForPatchGroup');
  }

  /**
   * Grants permission to register a target with a specified maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTargetWithMaintenanceWindow.html
   */
  public toRegisterTargetWithMaintenanceWindow() {
    return this.to('RegisterTargetWithMaintenanceWindow');
  }

  /**
   * Grants permission to register a task with a specified maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTaskWithMaintenanceWindow.html
   */
  public toRegisterTaskWithMaintenanceWindow() {
    return this.to('RegisterTaskWithMaintenanceWindow');
  }

  /**
   * Grants permission to remove a specified tag key from a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    return this.to('RemoveTagsFromResource');
  }

  /**
   * Grants permission to reset the service setting for an AWS account to the default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ResetServiceSetting.html
   */
  public toResetServiceSetting() {
    return this.to('ResetServiceSetting');
  }

  /**
   * Grants permission to reconnect a Session Manager session to a managed instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifResourceTagAws()
   * - .ifResourceTagAws()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ResumeSession.html
   */
  public toResumeSession() {
    return this.to('ResumeSession');
  }

  /**
   * Grants permission to send a signal to change the current behavior or status of a specified Automation execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendAutomationSignal.html
   */
  public toSendAutomationSignal() {
    return this.to('SendAutomationSignal');
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
    return this.to('SendCommand');
  }

  /**
   * Grants permission to run a specified association manually
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartAssociationsOnce.html
   */
  public toStartAssociationsOnce() {
    return this.to('StartAssociationsOnce');
  }

  /**
   * Grants permission to initiate the execution of an Automation document
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartAutomationExecution.html
   */
  public toStartAutomationExecution() {
    return this.to('StartAutomationExecution');
  }

  /**
   * Grants permission to initiate the execution of an Automation Change Template document
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAutoApprove()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartChangeRequestExecution.html
   */
  public toStartChangeRequestExecution() {
    return this.to('StartChangeRequestExecution');
  }

  /**
   * Grants permission to initiate a connection to a specified target for a Session Manager session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSessionDocumentAccessCheck()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartSession.html
   */
  public toStartSession() {
    return this.to('StartSession');
  }

  /**
   * Grants permission to stop a specified Automation execution that is already in progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StopAutomationExecution.html
   */
  public toStopAutomationExecution() {
    return this.to('StopAutomationExecution');
  }

  /**
   * Grants permission to permanently end a Session Manager connection to an instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifResourceTagAws()
   * - .ifResourceTagAws()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_TerminateSession.html
   */
  public toTerminateSession() {
    return this.to('TerminateSession');
  }

  /**
   * Grants permission to remove an identifying label from a specified version of a parameter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UnlabelParameterVersion.html
   */
  public toUnlabelParameterVersion() {
    return this.to('UnlabelParameterVersion');
  }

  /**
   * Grants permission to update an association and immediately run the association on the specified targets
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociation.html
   */
  public toUpdateAssociation() {
    return this.to('UpdateAssociation');
  }

  /**
   * Grants permission to update the status of the SSM document associated with a specified instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSourceInstanceARN()
   * - .ifEc2SourceInstanceARN()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociationStatus.html
   */
  public toUpdateAssociationStatus() {
    return this.to('UpdateAssociationStatus');
  }

  /**
   * Grants permission to update one or more values for an SSM document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocument.html
   */
  public toUpdateDocument() {
    return this.to('UpdateDocument');
  }

  /**
   * Grants permission to change the default version of an SSM document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocumentDefaultVersion.html
   */
  public toUpdateDocumentDefaultVersion() {
    return this.to('UpdateDocumentDefaultVersion');
  }

  /**
   * Grants permission to update the metadata of an SSM document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocumentMetadata.html
   */
  public toUpdateDocumentMetadata() {
    return this.to('UpdateDocumentMetadata');
  }

  /**
   * Grants permission to SSM Agent to update the status of the association that it is currently running (internal Systems Manager call)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSourceInstanceARN()
   * - .ifEc2SourceInstanceARN()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toUpdateInstanceAssociationStatus() {
    return this.to('UpdateInstanceAssociationStatus');
  }

  /**
   * Grants permission to SSM Agent to send a heartbeat signal to the Systems Manager service in the cloud
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSourceInstanceARN()
   * - .ifEc2SourceInstanceARN()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  public toUpdateInstanceInformation() {
    return this.to('UpdateInstanceInformation');
  }

  /**
   * Grants permission to update a specified maintenance window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindow.html
   */
  public toUpdateMaintenanceWindow() {
    return this.to('UpdateMaintenanceWindow');
  }

  /**
   * Grants permission to update a specified maintenance window target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindowTarget.html
   */
  public toUpdateMaintenanceWindowTarget() {
    return this.to('UpdateMaintenanceWindowTarget');
  }

  /**
   * Grants permission to update a specified maintenance window task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindowTask.html
   */
  public toUpdateMaintenanceWindowTask() {
    return this.to('UpdateMaintenanceWindowTask');
  }

  /**
   * Grants permission to assign or change the IAM role assigned to a specified managed instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateManagedInstanceRole.html
   */
  public toUpdateManagedInstanceRole() {
    return this.to('UpdateManagedInstanceRole');
  }

  /**
   * Grants permission to edit or change an OpsItem
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateOpsItem.html
   */
  public toUpdateOpsItem() {
    return this.to('UpdateOpsItem');
  }

  /**
   * Grants permission to update an OpsMetadata object
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateOpsMetadata.html
   */
  public toUpdateOpsMetadata() {
    return this.to('UpdateOpsMetadata');
  }

  /**
   * Grants permission to update a specified patch baseline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdatePatchBaseline.html
   */
  public toUpdatePatchBaseline() {
    return this.to('UpdatePatchBaseline');
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
    return this.to('UpdateResourceDataSync');
  }

  /**
   * Grants permission to update the service setting for an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateServiceSetting.html
   */
  public toUpdateServiceSetting() {
    return this.to('UpdateServiceSetting');
  }

  protected accessLevelList: AccessLevelList = {
    Tagging: [
      'AddTagsToResource',
      'RemoveTagsFromResource'
    ],
    Write: [
      'AssociateOpsItemRelatedItem',
      'CancelCommand',
      'CancelMaintenanceWindowExecution',
      'CreateActivation',
      'CreateAssociation',
      'CreateAssociationBatch',
      'CreateDocument',
      'CreateMaintenanceWindow',
      'CreateOpsItem',
      'CreateOpsMetadata',
      'CreatePatchBaseline',
      'CreateResourceDataSync',
      'DeleteActivation',
      'DeleteAssociation',
      'DeleteDocument',
      'DeleteInventory',
      'DeleteMaintenanceWindow',
      'DeleteOpsItem',
      'DeleteOpsMetadata',
      'DeleteParameter',
      'DeleteParameters',
      'DeletePatchBaseline',
      'DeleteResourceDataSync',
      'DeregisterManagedInstance',
      'DeregisterPatchBaselineForPatchGroup',
      'DeregisterTargetFromMaintenanceWindow',
      'DeregisterTaskFromMaintenanceWindow',
      'DisassociateOpsItemRelatedItem',
      'LabelParameterVersion',
      'PutCalendar',
      'PutComplianceItems',
      'PutInventory',
      'PutParameter',
      'RegisterDefaultPatchBaseline',
      'RegisterManagedInstance',
      'RegisterPatchBaselineForPatchGroup',
      'RegisterTargetWithMaintenanceWindow',
      'RegisterTaskWithMaintenanceWindow',
      'ResetServiceSetting',
      'ResumeSession',
      'SendAutomationSignal',
      'SendCommand',
      'StartAssociationsOnce',
      'StartAutomationExecution',
      'StartChangeRequestExecution',
      'StartSession',
      'StopAutomationExecution',
      'TerminateSession',
      'UnlabelParameterVersion',
      'UpdateAssociation',
      'UpdateAssociationStatus',
      'UpdateDocument',
      'UpdateDocumentDefaultVersion',
      'UpdateDocumentMetadata',
      'UpdateInstanceAssociationStatus',
      'UpdateInstanceInformation',
      'UpdateMaintenanceWindow',
      'UpdateMaintenanceWindowTarget',
      'UpdateMaintenanceWindowTask',
      'UpdateManagedInstanceRole',
      'UpdateOpsItem',
      'UpdateOpsMetadata',
      'UpdatePatchBaseline',
      'UpdateResourceDataSync',
      'UpdateServiceSetting'
    ],
    'Permissions management': [
      'DeleteResourcePolicy',
      'ModifyDocumentPermission',
      'PutResourcePolicy'
    ],
    Read: [
      'DescribeActivations',
      'DescribeAssociation',
      'DescribeAssociationExecutionTargets',
      'DescribeAssociationExecutions',
      'DescribeAutomationExecutions',
      'DescribeAutomationStepExecutions',
      'DescribeAvailablePatches',
      'DescribeDocument',
      'DescribeDocumentParameters',
      'DescribeDocumentPermission',
      'DescribeEffectiveInstanceAssociations',
      'DescribeEffectivePatchesForPatchBaseline',
      'DescribeInstanceAssociationsStatus',
      'DescribeInstanceInformation',
      'DescribeInstancePatchStates',
      'DescribeInstancePatchStatesForPatchGroup',
      'DescribeInstancePatches',
      'DescribeInstanceProperties',
      'DescribeInventoryDeletions',
      'DescribeOpsItems',
      'GetAutomationExecution',
      'GetCalendar',
      'GetCalendarState',
      'GetCommandInvocation',
      'GetConnectionStatus',
      'GetDefaultPatchBaseline',
      'GetDeployablePatchSnapshotForInstance',
      'GetDocument',
      'GetInventory',
      'GetInventorySchema',
      'GetMaintenanceWindow',
      'GetMaintenanceWindowExecution',
      'GetMaintenanceWindowExecutionTask',
      'GetMaintenanceWindowExecutionTaskInvocation',
      'GetMaintenanceWindowTask',
      'GetManifest',
      'GetOpsItem',
      'GetOpsMetadata',
      'GetOpsSummary',
      'GetParameter',
      'GetParameterHistory',
      'GetParameters',
      'GetParametersByPath',
      'GetPatchBaseline',
      'GetPatchBaselineForPatchGroup',
      'GetServiceSetting',
      'PutConfigurePackageResult'
    ],
    List: [
      'DescribeMaintenanceWindowExecutionTaskInvocations',
      'DescribeMaintenanceWindowExecutionTasks',
      'DescribeMaintenanceWindowExecutions',
      'DescribeMaintenanceWindowSchedule',
      'DescribeMaintenanceWindowTargets',
      'DescribeMaintenanceWindowTasks',
      'DescribeMaintenanceWindows',
      'DescribeMaintenanceWindowsForTarget',
      'DescribeParameters',
      'DescribePatchBaselines',
      'DescribePatchGroupState',
      'DescribePatchGroups',
      'DescribePatchProperties',
      'DescribeSessions',
      'GetResourcePolicies',
      'ListAssociationVersions',
      'ListAssociations',
      'ListCommandInvocations',
      'ListCommands',
      'ListComplianceItems',
      'ListComplianceSummaries',
      'ListDocumentMetadataHistory',
      'ListDocumentVersions',
      'ListDocuments',
      'ListInstanceAssociations',
      'ListInventoryEntries',
      'ListOpsItemEvents',
      'ListOpsItemRelatedItems',
      'ListOpsMetadata',
      'ListResourceComplianceSummaries',
      'ListResourceDataSync',
      'ListTagsForResource'
    ]
  };

  /**
   * Adds a resource of type association to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html
   *
   * @param associationId - Identifier for the associationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAssociation(associationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:association/${ associationId }`);
  }

  /**
   * Adds a resource of type automation-execution to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/running-automations.html
   *
   * @param automationExecutionId - Identifier for the automationExecutionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onAutomationExecution(automationExecutionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:automation-execution/${ automationExecutionId }`);
  }

  /**
   * Adds a resource of type automation-definition to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-documents.html
   *
   * @param automationDefinitionName - Identifier for the automationDefinitionName.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAutomationDefinition(automationDefinitionName: string, versionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:automation-definition/${ automationDefinitionName }:${ versionId }`);
  }

  /**
   * Adds a resource of type bucket to the statement
   *
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html
   *
   * @param bucketName - Identifier for the bucketName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBucket(bucketName: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:s3:::${ bucketName }`);
  }

  /**
   * Adds a resource of type document to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/documents.html
   *
   * @param documentName - Identifier for the documentName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifDocumentCategories()
   * - .ifResourceTag()
   */
  public onDocument(documentName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:document/${ documentName }`);
  }

  /**
   * Adds a resource of type instance to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ec2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }`);
  }

  /**
   * Adds a resource of type maintenancewindow to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-maintenance.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onMaintenancewindow(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:maintenancewindow/${ resourceId }`);
  }

  /**
   * Adds a resource of type managed-instance to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onManagedInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:managed-instance/${ instanceId }`);
  }

  /**
   * Adds a resource of type managed-instance-inventory to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-configuring.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onManagedInstanceInventory(instanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:managed-instance-inventory/${ instanceId }`);
  }

  /**
   * Adds a resource of type opsitem to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOpsitem(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:opsitem/${ resourceId }`);
  }

  /**
   * Adds a resource of type opsmetadata to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/application-manager.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onOpsmetadata(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:opsmetadata/${ resourceId }`);
  }

  /**
   * Adds a resource of type parameter to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html
   *
   * @param parameterNameWithoutLeadingSlash - Identifier for the parameterNameWithoutLeadingSlash.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onParameter(parameterNameWithoutLeadingSlash: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:parameter/${ parameterNameWithoutLeadingSlash }`);
  }

  /**
   * Adds a resource of type patchbaseline to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager.html
   *
   * @param patchBaselineIdResourceId - Identifier for the patchBaselineIdResourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onPatchbaseline(patchBaselineIdResourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:patchbaseline/${ patchBaselineIdResourceId }`);
  }

  /**
   * Adds a resource of type resourcearn to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems.html
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onResourcearn(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:opsitemgroup/default`);
  }

  /**
   * Adds a resource of type session to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html
   *
   * @param sessionId - Identifier for the sessionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifResourceTagAws()
   * - .ifResourceTagAws()
   */
  public onSession(sessionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:session/${ sessionId }`);
  }

  /**
   * Adds a resource of type resourcedatasync to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html
   *
   * @param syncName - Identifier for the syncName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onResourcedatasync(syncName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:resource-data-sync/${ syncName }`);
  }

  /**
   * Adds a resource of type servicesetting to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onServicesetting(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:servicesetting/${ resourceId }`);
  }

  /**
   * Adds a resource of type windowtarget to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-assign-targets.html
   *
   * @param windowTargetId - Identifier for the windowTargetId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onWindowtarget(windowTargetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:windowtarget/${ windowTargetId }`);
  }

  /**
   * Adds a resource of type windowtask to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-assign-tasks.html
   *
   * @param windowTaskId - Identifier for the windowTaskId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onWindowtask(windowTaskId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:windowtask/${ windowTaskId }`);
  }

  /**
   * Adds a resource of type task to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html
   *
   * @param taskId - Identifier for the taskId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTask(taskId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ecs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:task/${ taskId }`);
  }

  /**
   * Filters access by 'Create' requests based on the allowed set of values for a specified tags
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
   *
   * Applies to actions:
   * - .toAddTagsToResource()
   * - .toCreateActivation()
   * - .toCreateAssociation()
   * - .toCreateAssociationBatch()
   * - .toCreateDocument()
   * - .toCreateMaintenanceWindow()
   * - .toCreateOpsItem()
   * - .toCreateOpsMetadata()
   * - .toCreatePatchBaseline()
   * - .toPutParameter()
   * - .toRegisterManagedInstance()
   * - .toStartAutomationExecution()
   * - .toStartChangeRequestExecution()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by based on a tag key-value pair assigned to the AWS resource
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
   *
   * Applies to actions:
   * - .toAddTagsToResource()
   * - .toCreateAssociation()
   * - .toCreateAssociationBatch()
   * - .toDeleteAssociation()
   * - .toDescribeAssociation()
   * - .toDescribeAssociationExecutionTargets()
   * - .toDescribeAssociationExecutions()
   * - .toDescribeEffectiveInstanceAssociations()
   * - .toDescribeInstanceAssociationsStatus()
   * - .toGetConnectionStatus()
   * - .toListAssociationVersions()
   * - .toListInstanceAssociations()
   * - .toListTagsForResource()
   * - .toRemoveTagsFromResource()
   * - .toSendCommand()
   * - .toStartAssociationsOnce()
   * - .toStartSession()
   * - .toUpdateAssociation()
   * - .toUpdateAssociationStatus()
   * - .toUpdateInstanceAssociationStatus()
   *
   * Applies to resource types:
   * - association
   * - automation-execution
   * - document
   * - instance
   * - maintenancewindow
   * - managed-instance
   * - opsitem
   * - opsmetadata
   * - parameter
   * - patchbaseline
   * - windowtarget
   * - windowtask
   * - task
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by 'Create' requests based on whether mandatory tags are included in the request
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
   *
   * Applies to actions:
   * - .toAddTagsToResource()
   * - .toCreateActivation()
   * - .toCreateAssociation()
   * - .toCreateAssociationBatch()
   * - .toCreateDocument()
   * - .toCreateMaintenanceWindow()
   * - .toCreateOpsItem()
   * - .toCreateOpsMetadata()
   * - .toCreatePatchBaseline()
   * - .toPutParameter()
   * - .toRegisterManagedInstance()
   * - .toRemoveTagsFromResource()
   * - .toStartAutomationExecution()
   * - .toStartChangeRequestExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ARN of the instance from which the request originated
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toPutComplianceItems()
   * - .toUpdateAssociationStatus()
   * - .toUpdateInstanceAssociationStatus()
   * - .toUpdateInstanceInformation()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifEc2SourceInstanceARN(value: string | string[], operator?: Operator | string) {
    return this.if(`ec2:SourceInstanceARN`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by verifying that a user has permission to start Change Manager workflows without a review step (with the exception of change freeze events)
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/change-manager-auto-approval-access.html
   *
   * Applies to actions:
   * - .toStartChangeRequestExecution()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAutoApprove(value?: boolean) {
    return this.if(`AutoApprove`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by verifying that a user has permission to access a document belonging to a specific category enum
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
   *
   * Applies to actions:
   * - .toGetDocument()
   *
   * Applies to resource types:
   * - document
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDocumentCategories(value: string | string[], operator?: Operator | string) {
    return this.if(`DocumentCategories`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by controling whether Systems Manager parameters can be overwritten
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
   *
   * Applies to actions:
   * - .toPutParameter()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOverwrite(value: string | string[], operator?: Operator | string) {
    return this.if(`Overwrite`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by Systems Manager parameters created in a hierarchical structure
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
   *
   * Applies to actions:
   * - .toGetParametersByPath()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRecursive(value: string | string[], operator?: Operator | string) {
    return this.if(`Recursive`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by verifying that a user has permission to access either the default Session Manager configuration document or the custom configuration document specified in a request
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-sessiondocumentaccesscheck.html
   *
   * Applies to actions:
   * - .toStartSession()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifSessionDocumentAccessCheck(value?: boolean) {
    return this.if(`SessionDocumentAccessCheck`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by verifying the Amazon Resource Name (ARN) of the AWS Systems Manager's managed instance from which the request is made. This key is not present when the request comes from the managed instance authenticated with an IAM role associated with EC2 instance profile
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html#awssystemsmanager-policy-keys
   *
   * Applies to actions:
   * - .toPutComplianceItems()
   * - .toUpdateAssociationStatus()
   * - .toUpdateInstanceAssociationStatus()
   * - .toUpdateInstanceInformation()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifSourceInstanceARN(value: string | string[], operator?: Operator | string) {
    return this.if(`SourceInstanceARN`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by verifying that a user also has access to the ResourceDataSync SyncType specified in the request
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
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
    return this.if(`SyncType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by based on a tag key-value pair assigned to the Systems Manager resource
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
   *
   * Applies to actions:
   * - .toDeregisterManagedInstance()
   * - .toGetConnectionStatus()
   * - .toSendCommand()
   * - .toStartSession()
   * - .toUpdateManagedInstanceRole()
   *
   * Applies to resource types:
   * - automation-execution
   * - document
   * - instance
   * - maintenancewindow
   * - managed-instance
   * - opsmetadata
   * - parameter
   * - patchbaseline
   * - windowtarget
   * - windowtask
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`resourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by based on a tag key-value pair assigned to the Systems Manager session resource
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions
   *
   * Applies to actions:
   * - .toResumeSession()
   * - .toTerminateSession()
   *
   * Applies to resource types:
   * - session
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTagAws(value: string | string[], operator?: Operator | string) {
    return this.if(`resourceTag/aws`, value, operator ?? 'StringLike');
  }
}
