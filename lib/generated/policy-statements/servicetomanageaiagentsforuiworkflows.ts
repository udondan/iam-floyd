import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [nova-act](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservicetomanageaiagentsforuiworkflows.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class NovaAct extends PolicyStatement {
  public servicePrefix = 'nova-act';

  /**
   * Statement provider for service [nova-act](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservicetomanageaiagentsforuiworkflows.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new AI task (act) within a session that can interact with tools and perform specific actions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_CreateAct.html
   */
  public toCreateAct() {
    return this.to('CreateAct');
  }

  /**
   * Grants permission to create a new session context within a workflow run to manage conversation state and acts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_CreateSession.html
   */
  public toCreateSession() {
    return this.to('CreateSession');
  }

  /**
   * Grants permission to create a new workflow definition template that can be used to execute multiple workflow runs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_CreateWorkflowDefinition.html
   */
  public toCreateWorkflowDefinition() {
    return this.to('CreateWorkflowDefinition');
  }

  /**
   * Grants permission to create a new execution instance of a workflow definition with specified parameters
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_CreateWorkflowRun.html
   */
  public toCreateWorkflowRun() {
    return this.to('CreateWorkflowRun');
  }

  /**
   * Grants permission to delete a workflow definition and all associated resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_DeleteWorkflowDefinition.html
   */
  public toDeleteWorkflowDefinition() {
    return this.to('DeleteWorkflowDefinition');
  }

  /**
   * Grants permission to terminate and clean up a workflow run, stopping all associated acts and sessions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_DeleteWorkflowRun.html
   */
  public toDeleteWorkflowRun() {
    return this.to('DeleteWorkflowRun');
  }

  /**
   * Grants permission to retrieve details and configuration of a specific workflow definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_GetWorkflowDefinition.html
   */
  public toGetWorkflowDefinition() {
    return this.to('GetWorkflowDefinition');
  }

  /**
   * Grants permission to retrieve the current state, configuration, and execution details of a workflow run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_GetWorkflowRun.html
   */
  public toGetWorkflowRun() {
    return this.to('GetWorkflowRun');
  }

  /**
   * Grants permission to execute the next step of an act, processing tool call results and returning new tool calls if needed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_InvokeActStep.html
   */
  public toInvokeActStep() {
    return this.to('InvokeActStep');
  }

  /**
   * Grants permission to list all acts within a specific session with their current status and execution details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_ListActs.html
   */
  public toListActs() {
    return this.to('ListActs');
  }

  /**
   * Grants permission to list all available AI models that can be used for workflow execution, including their status and compatibility information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_ListModels.html
   */
  public toListModels() {
    return this.to('ListModels');
  }

  /**
   * Grants permission to list all sessions within a specific workflow run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_ListSessions.html
   */
  public toListSessions() {
    return this.to('ListSessions');
  }

  /**
   * Grants permission to list all workflow definitions in your account with optional filtering and pagination
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_ListWorkflowDefinitions.html
   */
  public toListWorkflowDefinitions() {
    return this.to('ListWorkflowDefinitions');
  }

  /**
   * Grants permission to list all workflow runs for a specific workflow definition with optional filtering and pagination
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_ListWorkflowRuns.html
   */
  public toListWorkflowRuns() {
    return this.to('ListWorkflowRuns');
  }

  /**
   * Grants permission to update an existing act's configuration, status, or error information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_UpdateAct.html
   */
  public toUpdateAct() {
    return this.to('UpdateAct');
  }

  /**
   * Grants permission to update the configuration or state of an active workflow run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nova-act/latest/APIReference/API_UpdateWorkflowRun.html
   */
  public toUpdateWorkflowRun() {
    return this.to('UpdateWorkflowRun');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAct',
      'CreateSession',
      'CreateWorkflowDefinition',
      'CreateWorkflowRun',
      'DeleteWorkflowDefinition',
      'DeleteWorkflowRun',
      'InvokeActStep',
      'UpdateAct',
      'UpdateWorkflowRun'
    ],
    Read: [
      'GetWorkflowDefinition',
      'GetWorkflowRun',
      'ListActs',
      'ListModels',
      'ListSessions'
    ],
    List: [
      'ListWorkflowDefinitions',
      'ListWorkflowRuns'
    ]
  };

  /**
   * Adds a resource of type workflow-definition to the statement
   *
   * https://docs.aws.amazon.com/nova-act/latest/userguide/workflow-definition.html
   *
   * @param workflowDefinitionName - Identifier for the workflowDefinitionName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onWorkflowDefinition(workflowDefinitionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:nova-act:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workflow-definition/${ workflowDefinitionName }`);
  }

  /**
   * Adds a resource of type workflow-run to the statement
   *
   * https://docs.aws.amazon.com/nova-act/latest/userguide/workflow-run.html
   *
   * @param workflowDefinitionName - Identifier for the workflowDefinitionName.
   * @param workflowRunId - Identifier for the workflowRunId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onWorkflowRun(workflowDefinitionName: string, workflowRunId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:nova-act:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workflow-definition/${ workflowDefinitionName }/workflow-run/${ workflowRunId }`);
  }
}
