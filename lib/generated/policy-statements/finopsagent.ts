import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [finops-agent](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfinopsagent.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class FinopsAgent extends PolicyStatement {
  public servicePrefix = 'finops-agent';

  /**
   * Statement provider for service [finops-agent](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfinopsagent.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a pending approval request from the agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toAcceptAgentRequest() {
    return this.to('AcceptAgentRequest');
  }

  /**
   * Grants permission to cancel a task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toCancelTask() {
    return this.to('CancelTask');
  }

  /**
   * Grants permission to cancel an in-progress conversation turn
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toCancelTurn() {
    return this.to('CancelTurn');
  }

  /**
   * Grants permission to create a new FinOps Agent workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toCreateAgentSpace() {
    return this.to('CreateAgentSpace');
  }

  /**
   * Grants permission to create a reusable automation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toCreateAutomation() {
    return this.to('CreateAutomation');
  }

  /**
   * Grants permission to create a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toCreateConnection() {
    return this.to('CreateConnection');
  }

  /**
   * Grants permission to create a new conversation with the FinOps Agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toCreateConversation() {
    return this.to('CreateConversation');
  }

  /**
   * Grants permission to create a document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toCreateDocument() {
    return this.to('CreateDocument');
  }

  /**
   * Grants permission to create a third-party integration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toCreateIntegration() {
    return this.to('CreateIntegration');
  }

  /**
   * Grants permission to create a one-time login session for the FinOps Agent web application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toCreateOneTimeLoginSession() {
    return this.to('CreateOneTimeLoginSession');
  }

  /**
   * Grants permission to create a task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toCreateTask() {
    return this.to('CreateTask');
  }

  /**
   * Grants permission to create a new turn in a conversation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toCreateTurn() {
    return this.to('CreateTurn');
  }

  /**
   * Grants permission to delete a FinOps Agent workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toDeleteAgentSpace() {
    return this.to('DeleteAgentSpace');
  }

  /**
   * Grants permission to delete an artifact and its content
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toDeleteArtifact() {
    return this.to('DeleteArtifact');
  }

  /**
   * Grants permission to delete an automation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toDeleteAutomation() {
    return this.to('DeleteAutomation');
  }

  /**
   * Grants permission to delete a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to delete a document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toDeleteDocument() {
    return this.to('DeleteDocument');
  }

  /**
   * Grants permission to delete a third-party integration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toDeleteIntegration() {
    return this.to('DeleteIntegration');
  }

  /**
   * Grants permission to view details of a pending approval request from the agent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toGetAgentRequest() {
    return this.to('GetAgentRequest');
  }

  /**
   * Grants permission to view details of a FinOps Agent workspace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toGetAgentSpace() {
    return this.to('GetAgentSpace');
  }

  /**
   * Grants permission to download artifact content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toGetArtifactContent() {
    return this.to('GetArtifactContent');
  }

  /**
   * Grants permission to view artifact metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toGetArtifactMetadata() {
    return this.to('GetArtifactMetadata');
  }

  /**
   * Grants permission to view details of an automation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toGetAutomation() {
    return this.to('GetAutomation');
  }

  /**
   * Grants permission to view details of a connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toGetConnection() {
    return this.to('GetConnection');
  }

  /**
   * Grants permission to download document content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toGetDocumentContent() {
    return this.to('GetDocumentContent');
  }

  /**
   * Grants permission to view document metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toGetDocumentMetadata() {
    return this.to('GetDocumentMetadata');
  }

  /**
   * Grants permission to view details of a third-party integration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toGetIntegration() {
    return this.to('GetIntegration');
  }

  /**
   * Grants permission to view details of a task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toGetTask() {
    return this.to('GetTask');
  }

  /**
   * Grants permission to view details of a conversation turn
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toGetTurn() {
    return this.to('GetTurn');
  }

  /**
   * Grants permission to list all FinOps Agent workspaces in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toListAgentSpaces() {
    return this.to('ListAgentSpaces');
  }

  /**
   * Grants permission to list artifacts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toListArtifacts() {
    return this.to('ListArtifacts');
  }

  /**
   * Grants permission to list automations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toListAutomations() {
    return this.to('ListAutomations');
  }

  /**
   * Grants permission to list connections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toListConnections() {
    return this.to('ListConnections');
  }

  /**
   * Grants permission to list conversations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toListConversations() {
    return this.to('ListConversations');
  }

  /**
   * Grants permission to list documents
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toListDocuments() {
    return this.to('ListDocuments');
  }

  /**
   * Grants permission to list third-party integrations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toListIntegrations() {
    return this.to('ListIntegrations');
  }

  /**
   * Grants permission to list records for real-time agent activity display
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toListRecords() {
    return this.to('ListRecords');
  }

  /**
   * Grants permission to list tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toListTasks() {
    return this.to('ListTasks');
  }

  /**
   * Grants permission to list turns in a conversation
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toListTurns() {
    return this.to('ListTurns');
  }

  /**
   * Grants permission to reject a pending approval request from the agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toRejectAgentRequest() {
    return this.to('RejectAgentRequest');
  }

  /**
   * Grants permission to restore an archived document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toRestoreDocument() {
    return this.to('RestoreDocument');
  }

  /**
   * Grants permission to submit feedback on agent responses
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toSendFeedback() {
    return this.to('SendFeedback');
  }

  /**
   * Grants permission to update a FinOps Agent workspace configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toUpdateAgentSpace() {
    return this.to('UpdateAgentSpace');
  }

  /**
   * Grants permission to update an automation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toUpdateAutomation() {
    return this.to('UpdateAutomation');
  }

  /**
   * Grants permission to update a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toUpdateConnection() {
    return this.to('UpdateConnection');
  }

  /**
   * Grants permission to update a document's content and metadata
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finops-agent/
   */
  public toUpdateDocument() {
    return this.to('UpdateDocument');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptAgentRequest',
      'CancelTask',
      'CancelTurn',
      'CreateAgentSpace',
      'CreateAutomation',
      'CreateConnection',
      'CreateConversation',
      'CreateDocument',
      'CreateIntegration',
      'CreateOneTimeLoginSession',
      'CreateTask',
      'CreateTurn',
      'DeleteAgentSpace',
      'DeleteArtifact',
      'DeleteAutomation',
      'DeleteConnection',
      'DeleteDocument',
      'DeleteIntegration',
      'RejectAgentRequest',
      'RestoreDocument',
      'SendFeedback',
      'UpdateAgentSpace',
      'UpdateAutomation',
      'UpdateConnection',
      'UpdateDocument'
    ],
    Read: [
      'GetAgentRequest',
      'GetAgentSpace',
      'GetArtifactContent',
      'GetArtifactMetadata',
      'GetAutomation',
      'GetConnection',
      'GetDocumentContent',
      'GetDocumentMetadata',
      'GetIntegration',
      'GetTask',
      'GetTurn'
    ],
    List: [
      'ListAgentSpaces',
      'ListArtifacts',
      'ListAutomations',
      'ListConnections',
      'ListConversations',
      'ListDocuments',
      'ListIntegrations',
      'ListRecords',
      'ListTasks',
      'ListTurns'
    ]
  };
}
