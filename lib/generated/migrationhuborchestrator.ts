import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [migrationhub-orchestrator](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhuborchestrator.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class MigrationhubOrchestrator extends PolicyStatement {
  public servicePrefix = 'migrationhub-orchestrator';

  /**
   * Statement provider for service [migrationhub-orchestrator](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhuborchestrator.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a workflow based on the selected template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_CreateWorkflow.html
   */
  public toCreateWorkflow() {
    return this.to('CreateWorkflow');
  }

  /**
   * Grants permission to create a step under a workflow and a specific step group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_CreateWorkflowStep.html
   */
  public toCreateWorkflowStep() {
    return this.to('CreateWorkflowStep');
  }

  /**
   * Grants permission to to create a custom step group for a given workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_CreateWorkflowStepGroup.html
   */
  public toCreateWorkflowStepGroup() {
    return this.to('CreateWorkflowStepGroup');
  }

  /**
   * Grants permission to a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_DeleteWorkflow.html
   */
  public toDeleteWorkflow() {
    return this.to('DeleteWorkflow');
  }

  /**
   * Grants permission to delete a step from a specific step group under a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_DeleteWorkflowStep.html
   */
  public toDeleteWorkflowStep() {
    return this.to('DeleteWorkflowStep');
  }

  /**
   * Grants permission to delete a step group associated with a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_DeleteWorkflowStepGroup.html
   */
  public toDeleteWorkflowStepGroup() {
    return this.to('DeleteWorkflowStepGroup');
  }

  /**
   * Grants permission to the plugin to receive information from the service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetMessage.html
   */
  public toGetMessage() {
    return this.to('GetMessage');
  }

  /**
   * Grants permission to get retrieve metadata for a Template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetTemplate.html
   */
  public toGetTemplate() {
    return this.to('GetTemplate');
  }

  /**
   * Grants permission to retrieve details of a step associated with a template and a step group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetTemplateStep.html
   */
  public toGetTemplateStep() {
    return this.to('GetTemplateStep');
  }

  /**
   * Grants permission to retrieve metadata of a step group under a template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetTemplateStepGroup.html
   */
  public toGetTemplateStepGroup() {
    return this.to('GetTemplateStepGroup');
  }

  /**
   * Grants permission to retrieve metadata asscociated with a workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetWorkflow.html
   */
  public toGetWorkflow() {
    return this.to('GetWorkflow');
  }

  /**
   * Grants permission to get details of step associated with a workflow and a step group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetWorkflowStep.html
   */
  public toGetWorkflowStep() {
    return this.to('GetWorkflowStep');
  }

  /**
   * Grants permission to get details of a step group associated with a workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetWorkflowStepGroup.html
   */
  public toGetWorkflowStepGroup() {
    return this.to('GetWorkflowStepGroup');
  }

  /**
   * Grants permission to get a list all registered Plugins
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListPlugins.html
   */
  public toListPlugins() {
    return this.to('ListPlugins');
  }

  /**
   * Grants permission to lists step groups of a template
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListTemplateStepGroups.html
   */
  public toListTemplateStepGroups() {
    return this.to('ListTemplateStepGroups');
  }

  /**
   * Grants permission to get a list of steps in a step group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListServers.html
   */
  public toListTemplateSteps() {
    return this.to('ListTemplateSteps');
  }

  /**
   * Grants permission to get a list of all Templates available to customer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListTemplates.html
   */
  public toListTemplates() {
    return this.to('ListTemplates');
  }

  /**
   * Grants permission to get list of step groups associated with a workflow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListWorkflowStepGroups.html
   */
  public toListWorkflowStepGroups() {
    return this.to('ListWorkflowStepGroups');
  }

  /**
   * Grants permission to get a list of steps within step group associated with a workflow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListAntiPatterns.html
   */
  public toListWorkflowSteps() {
    return this.to('ListWorkflowSteps');
  }

  /**
   * Grants permission to list all workflows
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListWorkflows.html
   */
  public toListWorkflows() {
    return this.to('ListWorkflows');
  }

  /**
   * Grants permission to register the plugin to receive an ID and to start receiving messages from the service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_RegisterPlugin.html
   */
  public toRegisterPlugin() {
    return this.to('RegisterPlugin');
  }

  /**
   * Grants permission to retry a failed step within a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_RetryWorkflowStep.html
   */
  public toRetryWorkflowStep() {
    return this.to('RetryWorkflowStep');
  }

  /**
   * Grants permission to the plugin to send information to the service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_SendMessage.html
   */
  public toSendMessage() {
    return this.to('SendMessage');
  }

  /**
   * Grants permission to start a workflow or resume a stopped workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_StartWorkflow.html
   */
  public toStartWorkflow() {
    return this.to('StartWorkflow');
  }

  /**
   * Grants permission to stop a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_StopWorkflow.html
   */
  public toStopWorkflow() {
    return this.to('StopWorkflow');
  }

  /**
   * Grants permission to update the metadata associated with the workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_UpdateWorkflow.html
   */
  public toUpdateWorkflow() {
    return this.to('UpdateWorkflow');
  }

  /**
   * Grants permission to update metadata and status of a custom step within a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_UpdateWorkflowStep.html
   */
  public toUpdateWorkflowStep() {
    return this.to('UpdateWorkflowStep');
  }

  /**
   * Grants permission to update metadata associated with a step group in a given workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_UpdateWorkflowStepGroup.html
   */
  public toUpdateWorkflowStepGroup() {
    return this.to('UpdateWorkflowStepGroup');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateWorkflow',
      'CreateWorkflowStep',
      'CreateWorkflowStepGroup',
      'DeleteWorkflow',
      'DeleteWorkflowStep',
      'DeleteWorkflowStepGroup',
      'RegisterPlugin',
      'RetryWorkflowStep',
      'SendMessage',
      'StartWorkflow',
      'StopWorkflow',
      'UpdateWorkflow',
      'UpdateWorkflowStep',
      'UpdateWorkflowStepGroup'
    ],
    Read: [
      'GetMessage',
      'GetTemplate',
      'GetTemplateStep',
      'GetTemplateStepGroup',
      'GetWorkflow',
      'GetWorkflowStep',
      'GetWorkflowStepGroup'
    ],
    List: [
      'ListPlugins',
      'ListTemplateStepGroups',
      'ListTemplateSteps',
      'ListTemplates',
      'ListWorkflowStepGroups',
      'ListWorkflowSteps',
      'ListWorkflows'
    ]
  };

  /**
   * Adds a resource of type workflow to the statement
   *
   * https://docs.aws.amazon.com/migrationhub-orchestrator/latest/userguide/workflow.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkflow(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || MigrationhubOrchestrator.defaultPartition }:migrationhub-orchestrator:${ region || '*' }:${ account || '*' }:workflow/${ resourceId }`);
  }
}
