import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [bedrock](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Bedrock extends PolicyStatement {
  public servicePrefix = 'bedrock';

  /**
   * Statement provider for service [bedrock](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to configure vended log delivery for a knowledge base
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toAllowVendedLogDeliveryForResource() {
    return this.to('AllowVendedLogDeliveryForResource');
  }

  /**
   * Grants permission to apply a guardrail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toApplyGuardrail() {
    return this.to('ApplyGuardrail');
  }

  /**
   * Grants permission to associate another existing agent as a collaborator to an existing agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_AssociateAgentCollaborator.html
   */
  public toAssociateAgentCollaborator() {
    return this.to('AssociateAgentCollaborator');
  }

  /**
   * Grants permission to associate a knowledge base with an agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_AssociateAgentKnowledgeBase.html
   */
  public toAssociateAgentKnowledgeBase() {
    return this.to('AssociateAgentKnowledgeBase');
  }

  /**
   * Grants permission to use 3rd party platform to store knowledge data
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifThirdPartyKnowledgeBaseCredentialsSecretArn()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toAssociateThirdPartyKnowledgeBase() {
    return this.to('AssociateThirdPartyKnowledgeBase');
  }

  /**
   * Grants permission to batch delete list of bedrock evaluation jobs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_BatchDeleteEvaluationJob.html
   */
  public toBatchDeleteEvaluationJob() {
    return this.to('BatchDeleteEvaluationJob');
  }

  /**
   * Grants permission to create a new agent and a test agent alias pointing to the DRAFT agent version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgent.html
   */
  public toCreateAgent() {
    return this.to('CreateAgent');
  }

  /**
   * Grants permission to create a new action group in an existing agent
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html
   */
  public toCreateAgentActionGroup() {
    return this.to('CreateAgentActionGroup');
  }

  /**
   * Grants permission to create a new alias for an agent
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentAlias.html
   */
  public toCreateAgentAlias() {
    return this.to('CreateAgentAlias');
  }

  /**
   * Grants permission to create a blueprint for custom output from data automation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_data-automation_CreateBlueprint.html
   */
  public toCreateBlueprint() {
    return this.to('CreateBlueprint');
  }

  /**
   * Grants permission to create a new version for an existing blueprint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_data-automation_CreateBlueprintVersion.html
   */
  public toCreateBlueprintVersion() {
    return this.to('CreateBlueprintVersion');
  }

  /**
   * Grants permission to create a data automation project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_data-automation_CreateDataAutomationProject.html
   */
  public toCreateDataAutomationProject() {
    return this.to('CreateDataAutomationProject');
  }

  /**
   * Grants permission to create a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateDataSource.html
   */
  public toCreateDataSource() {
    return this.to('CreateDataSource');
  }

  /**
   * Grants permission to create a job for evaluation foundation models or custom models
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateEvaluationJob.html
   */
  public toCreateEvaluationJob() {
    return this.to('CreateEvaluationJob');
  }

  /**
   * Grants permission to create a prompt flow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateFlow.html
   */
  public toCreateFlow() {
    return this.to('CreateFlow');
  }

  /**
   * Grants permission to create an alias of a prompt flow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateFlowAlias.html
   */
  public toCreateFlowAlias() {
    return this.to('CreateFlowAlias');
  }

  /**
   * Grants permission to create an immutable version of a prompt flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateFlowVersion.html
   */
  public toCreateFlowVersion() {
    return this.to('CreateFlowVersion');
  }

  /**
   * Grants permission to create a new foundation model agreement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  public toCreateFoundationModelAgreement() {
    return this.to('CreateFoundationModelAgreement');
  }

  /**
   * Grants permission to create a new guardrail
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toCreateGuardrail() {
    return this.to('CreateGuardrail');
  }

  /**
   * Grants permission to create a new guardrail version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toCreateGuardrailVersion() {
    return this.to('CreateGuardrailVersion');
  }

  /**
   * Grants permission to create inference profiles
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateInferenceProfile.html
   */
  public toCreateInferenceProfile() {
    return this.to('CreateInferenceProfile');
  }

  /**
   * Grants permission to create a new invocation in an existing session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_CreateInvocation.html
   */
  public toCreateInvocation() {
    return this.to('CreateInvocation');
  }

  /**
   * Grants permission to create a knowledge base
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateKnowledgeBase.html
   */
  public toCreateKnowledgeBase() {
    return this.to('CreateKnowledgeBase');
  }

  /**
   * Grants permission to create a marketplace model endpoint
   *
   * Access Level: Write
   */
  public toCreateMarketplaceModelEndpoint() {
    return this.to('CreateMarketplaceModelEndpoint');
  }

  /**
   * Grants permission to create a job for copying a custom model across region or across account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelCopyJob.html
   */
  public toCreateModelCopyJob() {
    return this.to('CreateModelCopyJob');
  }

  /**
   * Grants permission to create a job for customizing the model with your custom training data
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelCustomizationJob.html
   */
  public toCreateModelCustomizationJob() {
    return this.to('CreateModelCustomizationJob');
  }

  /**
   * Grants permission to create a job for evaluation foundation models or custom models
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelEvaluationJob.html
   */
  public toCreateModelEvaluationJob() {
    return this.to('CreateModelEvaluationJob');
  }

  /**
   * Grants permission to create a job for importing model into Bedrock
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelImportJob.html
   */
  public toCreateModelImportJob() {
    return this.to('CreateModelImportJob');
  }

  /**
   * Grants permission to create a new model invocation job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelInvocationJob.html
   */
  public toCreateModelInvocationJob() {
    return this.to('CreateModelInvocationJob');
  }

  /**
   * Grants permission to create a prompt
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreatePrompt.html
   */
  public toCreatePrompt() {
    return this.to('CreatePrompt');
  }

  /**
   * Grants permission to create a version of a prompt
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreatePromptVersion.html
   */
  public toCreatePromptVersion() {
    return this.to('CreatePromptVersion');
  }

  /**
   * Grants permission to create a new provisioned model throughput
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateProvisionedModelThroughput.html
   */
  public toCreateProvisionedModelThroughput() {
    return this.to('CreateProvisionedModelThroughput');
  }

  /**
   * Grants permission to create a new session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_CreateSession.html
   */
  public toCreateSession() {
    return this.to('CreateSession');
  }

  /**
   * Grants permission to delete an Agent that you created earlier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteAgent.html
   */
  public toDeleteAgent() {
    return this.to('DeleteAgent');
  }

  /**
   * Grants permission to delete an actionGroup that you created earlier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteAgentActionGroup.html
   */
  public toDeleteAgentActionGroup() {
    return this.to('DeleteAgentActionGroup');
  }

  /**
   * Grants permission to delete an AgentAlias that you created earlier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteAgentAlias.html
   */
  public toDeleteAgentAlias() {
    return this.to('DeleteAgentAlias');
  }

  /**
   * Grants permission to delete existing memory for an alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_DeleteAgentMemory.html
   */
  public toDeleteAgentMemory() {
    return this.to('DeleteAgentMemory');
  }

  /**
   * Grants permission to delete an Agent Version that you created earlier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteAgentVersion.html
   */
  public toDeleteAgentVersion() {
    return this.to('DeleteAgentVersion');
  }

  /**
   * Grants permission to delete a blueprint for data automation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_data-automation_DeleteBlueprint.html
   */
  public toDeleteBlueprint() {
    return this.to('DeleteBlueprint');
  }

  /**
   * Grants permission to delete a custom model that you created earlier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteCustomModel.html
   */
  public toDeleteCustomModel() {
    return this.to('DeleteCustomModel');
  }

  /**
   * Grants permission to delete a data automation project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_data-automation_DeleteDataAutomationProject.html
   */
  public toDeleteDataAutomationProject() {
    return this.to('DeleteDataAutomationProject');
  }

  /**
   * Grants permission to delete a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteDataSource.html
   */
  public toDeleteDataSource() {
    return this.to('DeleteDataSource');
  }

  /**
   * Grants permission to delete a prompt flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteFlow.html
   */
  public toDeleteFlow() {
    return this.to('DeleteFlow');
  }

  /**
   * Grants permission to delete an alias of a prompt flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteFlowAlias.html
   */
  public toDeleteFlowAlias() {
    return this.to('DeleteFlowAlias');
  }

  /**
   * Grants permission to delete a version of a prompt flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteFlowVersion.html
   */
  public toDeleteFlowVersion() {
    return this.to('DeleteFlowVersion');
  }

  /**
   * Grants permission to delete a foundation model agreement that you created earlier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  public toDeleteFoundationModelAgreement() {
    return this.to('DeleteFoundationModelAgreement');
  }

  /**
   * Grants permission to delete a guardrail or its version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toDeleteGuardrail() {
    return this.to('DeleteGuardrail');
  }

  /**
   * Grants permission to delete previously created Bedrock imported model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteImportedModel.html
   */
  public toDeleteImportedModel() {
    return this.to('DeleteImportedModel');
  }

  /**
   * Grants permission to delete inference profiles
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteInferenceProfile.html
   */
  public toDeleteInferenceProfile() {
    return this.to('DeleteInferenceProfile');
  }

  /**
   * Grants permission to delete a knowledge base
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteKnowledgeBase.html
   */
  public toDeleteKnowledgeBase() {
    return this.to('DeleteKnowledgeBase');
  }

  /**
   * Grants permission to delete documents from a knowledge base
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeleteKnowledgeBaseDocuments.html
   */
  public toDeleteKnowledgeBaseDocuments() {
    return this.to('DeleteKnowledgeBaseDocuments');
  }

  /**
   * Grants permission to unsubscribe from a bedrock marketplace enabled AWS marketplace model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  public toDeleteMarketplaceModelAgreement() {
    return this.to('DeleteMarketplaceModelAgreement');
  }

  /**
   * Grants permission to delete a marketplace model endpoint
   *
   * Access Level: Write
   */
  public toDeleteMarketplaceModelEndpoint() {
    return this.to('DeleteMarketplaceModelEndpoint');
  }

  /**
   * Grants permission to delete an existing Invocation logging configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteModelInvocationLoggingConfiguration.html
   */
  public toDeleteModelInvocationLoggingConfiguration() {
    return this.to('DeleteModelInvocationLoggingConfiguration');
  }

  /**
   * Grants permission to delete a prompt or its version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DeletePrompt.html
   */
  public toDeletePrompt() {
    return this.to('DeletePrompt');
  }

  /**
   * Grants permission to delete a provisioned model throughput that you created earlier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteProvisionedModelThroughput.html
   */
  public toDeleteProvisionedModelThroughput() {
    return this.to('DeleteProvisionedModelThroughput');
  }

  /**
   * Deletes a previously created Bedrock resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a Session that you created earlier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_DeleteSession.html
   */
  public toDeleteSession() {
    return this.to('DeleteSession');
  }

  /**
   * Grants permission to deregister a marketplace model endpoint to make it unusable in Bedrock Marketplace
   *
   * Access Level: Write
   */
  public toDeregisterMarketplaceModelEndpoint() {
    return this.to('DeregisterMarketplaceModelEndpoint');
  }

  /**
   * Grants permission to detect if the provided content is generated using Amazon Bedrock
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toDetectGeneratedContent() {
    return this.to('DetectGeneratedContent');
  }

  /**
   * Grants permission to diassociate a collaborator that you associated earlier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DisassociateAgentCollaborator.html
   */
  public toDisassociateAgentCollaborator() {
    return this.to('DisassociateAgentCollaborator');
  }

  /**
   * Grants permission to disassociate a knowledge base from the agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DisassociateAgentKnowledgeBase.html
   */
  public toDisassociateAgentKnowledgeBase() {
    return this.to('DisassociateAgentKnowledgeBase');
  }

  /**
   * Grants permission to end a Session that you created earlier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_EndSession.html
   */
  public toEndSession() {
    return this.to('EndSession');
  }

  /**
   * Grants permission to generate queries associated with user input
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toGenerateQuery() {
    return this.to('GenerateQuery');
  }

  /**
   * Grants permission to retrieve an existing agent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgent.html
   */
  public toGetAgent() {
    return this.to('GetAgent');
  }

  /**
   * Grants permission to retrieve an existing action group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html
   */
  public toGetAgentActionGroup() {
    return this.to('GetAgentActionGroup');
  }

  /**
   * Grants permission to retrieve an existing alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentAlias.html
   */
  public toGetAgentAlias() {
    return this.to('GetAgentAlias');
  }

  /**
   * Grants permission to retrieve an existing collaborator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentCollaborator.html
   */
  public toGetAgentCollaborator() {
    return this.to('GetAgentCollaborator');
  }

  /**
   * Grants permission to describe a knowledge base associated with an agent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentKnowledgeBase.html
   */
  public toGetAgentKnowledgeBase() {
    return this.to('GetAgentKnowledgeBase');
  }

  /**
   * Grants permission to retrieve existing memory for an alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_GetAgentMemory.html
   */
  public toGetAgentMemory() {
    return this.to('GetAgentMemory');
  }

  /**
   * Grants permission to retrieve an existing version of an agent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentVersion.html
   */
  public toGetAgentVersion() {
    return this.to('GetAgentVersion');
  }

  /**
   * Grants permission to get the properties associated with an asynchronous invocation that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetAsyncInvoke.html
   */
  public toGetAsyncInvoke() {
    return this.to('GetAsyncInvoke');
  }

  /**
   * Grants permission to retrieve an existing blueprint for data automation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_data-automation_GetBlueprint.html
   */
  public toGetBlueprint() {
    return this.to('GetBlueprint');
  }

  /**
   * Grants permission to retrieve blueprint recommendation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toGetBlueprintRecommendation() {
    return this.to('GetBlueprintRecommendation');
  }

  /**
   * Grants permission to get the properties associated with a Bedrock custom model that you have created
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetCustomModel.html
   */
  public toGetCustomModel() {
    return this.to('GetCustomModel');
  }

  /**
   * Grants permission to retrieve an existing data automation project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_data-automation_GetDataAutomationProject.html
   */
  public toGetDataAutomationProject() {
    return this.to('GetDataAutomationProject');
  }

  /**
   * Grants permission to retrieve the status of a data automation invocation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_data-automation-runtime_GetDataAutomationStatus.html
   */
  public toGetDataAutomationStatus() {
    return this.to('GetDataAutomationStatus');
  }

  /**
   * Grants permission to retrieve an existing data source
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetDataSource.html
   */
  public toGetDataSource() {
    return this.to('GetDataSource');
  }

  /**
   * Grants permission to get the properties associated with a evaluation job. Use this operation to get the status of a evaluation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetEvaluationJob.html
   */
  public toGetEvaluationJob() {
    return this.to('GetEvaluationJob');
  }

  /**
   * Grants permission to retrieve an existing prompt flow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlow.html
   */
  public toGetFlow() {
    return this.to('GetFlow');
  }

  /**
   * Grants permission to retrieve an existing alias of a prompt flow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlowAlias.html
   */
  public toGetFlowAlias() {
    return this.to('GetFlowAlias');
  }

  /**
   * Grants permission to retrieve an existing version of a prompt flow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlowVersion.html
   */
  public toGetFlowVersion() {
    return this.to('GetFlowVersion');
  }

  /**
   * Grants permission to get the properties associated with a Bedrock foundation model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetFoundationModel.html
   */
  public toGetFoundationModel() {
    return this.to('GetFoundationModel');
  }

  /**
   * Grants permission to get the availability of a foundation model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  public toGetFoundationModelAvailability() {
    return this.to('GetFoundationModelAvailability');
  }

  /**
   * Grants permission to retrieve a guardrail or its version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toGetGuardrail() {
    return this.to('GetGuardrail');
  }

  /**
   * Grants permission to get the properties associated with Bedrock imported model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetImportedModel.html
   */
  public toGetImportedModel() {
    return this.to('GetImportedModel');
  }

  /**
   * Grants permission to get the properties associated with an inference profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetInferenceProfile.html
   */
  public toGetInferenceProfile() {
    return this.to('GetInferenceProfile');
  }

  /**
   * Grants permission to retrieve an existing ingestion job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetIngestionJob.html
   */
  public toGetIngestionJob() {
    return this.to('GetIngestionJob');
  }

  /**
   * Grants permission to get an invocation step from a session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_GetInvocationStep.html
   */
  public toGetInvocationStep() {
    return this.to('GetInvocationStep');
  }

  /**
   * Grants permission to retrieve an existing knowledge base
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetKnowledgeBase.html
   */
  public toGetKnowledgeBase() {
    return this.to('GetKnowledgeBase');
  }

  /**
   * Grants permission to get details for documents in a knowledge base
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetKnowledgeBaseDocuments.html
   */
  public toGetKnowledgeBaseDocuments() {
    return this.to('GetKnowledgeBaseDocuments');
  }

  /**
   * Grants permission to get the properties of a marketplace model endpoint
   *
   * Access Level: Read
   */
  public toGetMarketplaceModelEndpoint() {
    return this.to('GetMarketplaceModelEndpoint');
  }

  /**
   * Grants permission to get the properties associated with a model-copy job. Use this operation to get the status of a model-copy job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetModelCopyJob.html
   */
  public toGetModelCopyJob() {
    return this.to('GetModelCopyJob');
  }

  /**
   * Grants permission to get the properties associated with a model-customization job. Use this operation to get the status of a model-customization job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetModelCustomizationJob.html
   */
  public toGetModelCustomizationJob() {
    return this.to('GetModelCustomizationJob');
  }

  /**
   * Grants permission to get the properties associated with a model-evaluation job. Use this operation to get the status of a model-evaluation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetModelEvaluationJob.html
   */
  public toGetModelEvaluationJob() {
    return this.to('GetModelEvaluationJob');
  }

  /**
   * Grants permission to get the properties associated with a model import job and is used to get the status of a model import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetModelImportJob.html
   */
  public toGetModelImportJob() {
    return this.to('GetModelImportJob');
  }

  /**
   * Grants permission to retrieve a model invocation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetModelInvocationJob.html
   */
  public toGetModelInvocationJob() {
    return this.to('GetModelInvocationJob');
  }

  /**
   * Grants permission to retrieve an existing Invocation logging configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetModelInvocationLoggingConfiguration.html
   */
  public toGetModelInvocationLoggingConfiguration() {
    return this.to('GetModelInvocationLoggingConfiguration');
  }

  /**
   * Grants permission to retrieve an existing prompt or its version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetPrompt.html
   */
  public toGetPrompt() {
    return this.to('GetPrompt');
  }

  /**
   * Grants permission to get the properties associated with a prompt router
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetPromptRouter.html
   */
  public toGetPromptRouter() {
    return this.to('GetPromptRouter');
  }

  /**
   * Grants permission to retrieve a provisioned model throughput
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetProvisionedModelThroughput.html
   */
  public toGetProvisionedModelThroughput() {
    return this.to('GetProvisionedModelThroughput');
  }

  /**
   * Gets the resource policy document for a Bedrock resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetResourePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to retrieve an existing session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_GetSession.html
   */
  public toGetSession() {
    return this.to('GetSession');
  }

  /**
   * Grants permission to retrieve a use case for model access
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  public toGetUseCaseForModelAccess() {
    return this.to('GetUseCaseForModelAccess');
  }

  /**
   * Grants permission to directly ingest documents into a knowledge base
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_IngestKnowledgeBaseDocuments.html
   */
  public toIngestKnowledgeBaseDocuments() {
    return this.to('IngestKnowledgeBaseDocuments');
  }

  /**
   * Grants permission to send user input (text-only) to the alias of an agent for Bedrock
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html
   */
  public toInvokeAgent() {
    return this.to('InvokeAgent');
  }

  /**
   * Grants permission to invoke blueprint recommendations asynchronously
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toInvokeBlueprintRecommendationAsync() {
    return this.to('InvokeBlueprintRecommendationAsync');
  }

  /**
   * Grants permission to use the conversational builder which aids in building supported bedrock resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/userguide/agents-create-cb.html
   */
  public toInvokeBuilder() {
    return this.to('InvokeBuilder');
  }

  /**
   * Grants permission to invoke a Bedrock data automation job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_data-automation-runtime_InvokeDataAutomationAsync.html
   */
  public toInvokeDataAutomationAsync() {
    return this.to('InvokeDataAutomationAsync');
  }

  /**
   * Grants permission to invoke a prompt flow with user input
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeFlow.html
   */
  public toInvokeFlow() {
    return this.to('InvokeFlow');
  }

  /**
   * Grants permission to send user input (text-only) to the inline agent for Bedrock
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeInlineAgent.html
   */
  public toInvokeInlineAgent() {
    return this.to('InvokeInlineAgent');
  }

  /**
   * Grants permission to invoke the specified Bedrock model to run inference using the input provided in the request body
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInferenceProfileArn()
   * - .ifPromptRouterArn()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifGuardrailIdentifier()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html
   */
  public toInvokeModel() {
    return this.to('InvokeModel');
  }

  /**
   * Grants permission to invoke the specified Bedrock model to run inference using the input provided in the request body with streaming response
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInferenceProfileArn()
   * - .ifPromptRouterArn()
   * - .ifGuardrailIdentifier()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModelWithResponseStream.html
   */
  public toInvokeModelWithResponseStream() {
    return this.to('InvokeModelWithResponseStream');
  }

  /**
   * Grants permission to list action groups in an agent
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgentActionGroups.html
   */
  public toListAgentActionGroups() {
    return this.to('ListAgentActionGroups');
  }

  /**
   * Grants permission to list aliases for an agent
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgentAliases.html
   */
  public toListAgentAliases() {
    return this.to('ListAgentAliases');
  }

  /**
   * Grants permission to list collaborators for an agent
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgentCollaborators.html
   */
  public toListAgentCollaborators() {
    return this.to('ListAgentCollaborators');
  }

  /**
   * Grants permission to list knowledge bases associated with an agent
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgentKnowledgeBases.html
   */
  public toListAgentKnowledgeBases() {
    return this.to('ListAgentKnowledgeBases');
  }

  /**
   * Grants permission to list existing versions of an agent
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgentVersions.html
   */
  public toListAgentVersions() {
    return this.to('ListAgentVersions');
  }

  /**
   * Grants permission to list existing agents
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListAgents.html
   */
  public toListAgents() {
    return this.to('ListAgents');
  }

  /**
   * Grants permission to get a list of asynchronous invocations that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListAsyncInvokes.html
   */
  public toListAsyncInvokes() {
    return this.to('ListAsyncInvokes');
  }

  /**
   * Grants permission to list existing blueprints for data automation
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_data-automation_ListBlueprints.html
   */
  public toListBlueprints() {
    return this.to('ListBlueprints');
  }

  /**
   * Grants permission to get a list of Bedrock custom models that you have created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListCustomModels.html
   */
  public toListCustomModels() {
    return this.to('ListCustomModels');
  }

  /**
   * Grants permission to list existing data automation projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_data-automation_ListDataAutomationProjects.html
   */
  public toListDataAutomationProjects() {
    return this.to('ListDataAutomationProjects');
  }

  /**
   * Grants permission to list existing data sources in an knowledge base
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListDataSources.html
   */
  public toListDataSources() {
    return this.to('ListDataSources');
  }

  /**
   * Grants permission to get the list of evaluation jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListEvaluationJobs.html
   */
  public toListEvaluationJobs() {
    return this.to('ListEvaluationJobs');
  }

  /**
   * Grants permission to list existing aliases of a prompt flow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListFlowAliases.html
   */
  public toListFlowAliases() {
    return this.to('ListFlowAliases');
  }

  /**
   * Grants permission to list existing versions of a prompt flow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListFlowVersions.html
   */
  public toListFlowVersions() {
    return this.to('ListFlowVersions');
  }

  /**
   * Grants permission to list existing prompt flows
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListFlows.html
   */
  public toListFlows() {
    return this.to('ListFlows');
  }

  /**
   * Grants permission to get a list of foundation model agreement offers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  public toListFoundationModelAgreementOffers() {
    return this.to('ListFoundationModelAgreementOffers');
  }

  /**
   * Grants permission to list Bedrock foundation models that you can use
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListFoundationModels.html
   */
  public toListFoundationModels() {
    return this.to('ListFoundationModels');
  }

  /**
   * Grants permission to list guardrails or its versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toListGuardrails() {
    return this.to('ListGuardrails');
  }

  /**
   * Grants permission to get list of Bedrock imported models
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListImportedModels.html
   */
  public toListImportedModels() {
    return this.to('ListImportedModels');
  }

  /**
   * Grants permission to list inference profiles that you can use
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListInferenceProfiles.html
   */
  public toListInferenceProfiles() {
    return this.to('ListInferenceProfiles');
  }

  /**
   * Grants permission to list ingestion jobs in a data source
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListIngestionJobs.html
   */
  public toListIngestionJobs() {
    return this.to('ListIngestionJobs');
  }

  /**
   * Grants permission to get list of invocation step from a session
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_ListInvocationSteps.html
   */
  public toListInvocationSteps() {
    return this.to('ListInvocationSteps');
  }

  /**
   * Grants permission to list invocations in a session
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_ListInvocations.html
   */
  public toListInvocations() {
    return this.to('ListInvocations');
  }

  /**
   * Grants permission to list documents in a knowledge base
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListKnowledgeBaseDocuments.html
   */
  public toListKnowledgeBaseDocuments() {
    return this.to('ListKnowledgeBaseDocuments');
  }

  /**
   * Grants permission to list existing knowledge bases
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListKnowledgeBases.html
   */
  public toListKnowledgeBases() {
    return this.to('ListKnowledgeBases');
  }

  /**
   * Grants permission to list marketplace model endpoints that you can use
   *
   * Access Level: Read
   */
  public toListMarketplaceModelEndpoints() {
    return this.to('ListMarketplaceModelEndpoints');
  }

  /**
   * Grants permission to get the list of model copy jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListModelCopyJobs.html
   */
  public toListModelCopyJobs() {
    return this.to('ListModelCopyJobs');
  }

  /**
   * Grants permission to get the list of model customization jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListModelCustomizationJobs.html
   */
  public toListModelCustomizationJobs() {
    return this.to('ListModelCustomizationJobs');
  }

  /**
   * Grants permission to get the list of model evaluation jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListModelEvaluationJobs.html
   */
  public toListModelEvaluationJobs() {
    return this.to('ListModelEvaluationJobs');
  }

  /**
   * Grants permission to get list of model import jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListModelImportJobs.html
   */
  public toListModelImportJobs() {
    return this.to('ListModelImportJobs');
  }

  /**
   * Grants permission to list model invocation jobs that you created earlier
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListModelInvocationJobs.html
   */
  public toListModelInvocationJobs() {
    return this.to('ListModelInvocationJobs');
  }

  /**
   * Grants permission to list prompt routers that you can use
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListPromptRouters.html
   */
  public toListPromptRouters() {
    return this.to('ListPromptRouters');
  }

  /**
   * Grants permission to list existing prompts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListPrompts.html
   */
  public toListPrompts() {
    return this.to('ListPrompts');
  }

  /**
   * Grants permission to list provisioned model throughputs that you created earlier
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListProvisionedModelThroughputs.html
   */
  public toListProvisionedModelThroughputs() {
    return this.to('ListProvisionedModelThroughputs');
  }

  /**
   * Grants permission to list existing sessions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_ListSessions.html
   */
  public toListSessions() {
    return this.to('ListSessions');
  }

  /**
   * Grants permission to list tags for a Bedrock resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to optimize a prompt with user input
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_OptimizePrompt.html
   */
  public toOptimizePrompt() {
    return this.to('OptimizePrompt');
  }

  /**
   * Grants permission to prepare an existing agent to receive runtime requests
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PrepareAgent.html
   */
  public toPrepareAgent() {
    return this.to('PrepareAgent');
  }

  /**
   * Grants permission to apply the latest changes made to a prompt flow, so that they are reflected at runtime
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PrepareFlow.html
   */
  public toPrepareFlow() {
    return this.to('PrepareFlow');
  }

  /**
   * Grants permission to put entitlement to access a foundation model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  public toPutFoundationModelEntitlement() {
    return this.to('PutFoundationModelEntitlement');
  }

  /**
   * Grants permission to put an invocation step into an invocation in session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_PutInvocationStep.html
   */
  public toPutInvocationStep() {
    return this.to('PutInvocationStep');
  }

  /**
   * Grants permission to create an existing Invocation logging configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_PutModelInvocationLoggingConfiguration.html
   */
  public toPutModelInvocationLoggingConfiguration() {
    return this.to('PutModelInvocationLoggingConfiguration');
  }

  /**
   * Adds a resource policy for a Bedrock resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to put a use case for model access
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html
   */
  public toPutUseCaseForModelAccess() {
    return this.to('PutUseCaseForModelAccess');
  }

  /**
   * Grants permission to register a sagemaker endpoint as a marketplace model endpoint
   *
   * Access Level: Write
   */
  public toRegisterMarketplaceModelEndpoint() {
    return this.to('RegisterMarketplaceModelEndpoint');
  }

  /**
   * Grants permission to render an existing prompt or its version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toRenderPrompt() {
    return this.to('RenderPrompt');
  }

  /**
   * Grants permission to rank documents based on user input
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toRerank() {
    return this.to('Rerank');
  }

  /**
   * Grants permission to retrieve ingested data from a knowledge base
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toRetrieve() {
    return this.to('Retrieve');
  }

  /**
   * Grants permission to send user input to perform retrieval and generation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toRetrieveAndGenerate() {
    return this.to('RetrieveAndGenerate');
  }

  /**
   * Grants permission to start an ingestion job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_StartIngestionJob.html
   */
  public toStartIngestionJob() {
    return this.to('StartIngestionJob');
  }

  /**
   * Grants permission to stop a evaluation job while in progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_StopEvaluationJob.html
   */
  public toStopEvaluationJob() {
    return this.to('StopEvaluationJob');
  }

  /**
   * Grants permission to stop an ingestion job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_StopIngestionJob.html
   */
  public toStopIngestionJob() {
    return this.to('StopIngestionJob');
  }

  /**
   * Grants permission to stop a Bedrock model customization job while in progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_StopModelCustomizationJob.html
   */
  public toStopModelCustomizationJob() {
    return this.to('StopModelCustomizationJob');
  }

  /**
   * Grants permission to stop a model invocation job that you started earlier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_StopModelInvocationJob.html
   */
  public toStopModelInvocationJob() {
    return this.to('StopModelInvocationJob');
  }

  /**
   * Grants permission to Tag a Bedrock resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to Untag a Bedrock resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgent.html
   */
  public toUpdateAgent() {
    return this.to('UpdateAgent');
  }

  /**
   * Grants permission to update an existing action group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html
   */
  public toUpdateAgentActionGroup() {
    return this.to('UpdateAgentActionGroup');
  }

  /**
   * Grants permission to update an existing alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentAlias.html
   */
  public toUpdateAgentAlias() {
    return this.to('UpdateAgentAlias');
  }

  /**
   * Grants permission to update an existing collaborator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentCollaborator.html
   */
  public toUpdateAgentCollaborator() {
    return this.to('UpdateAgentCollaborator');
  }

  /**
   * Grants permission to update a knowledge base associated with an agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentKnowledgeBase.html
   */
  public toUpdateAgentKnowledgeBase() {
    return this.to('UpdateAgentKnowledgeBase');
  }

  /**
   * Grants permission to update a blueprint for data automation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_data-automation_UpdateBlueprint.html
   */
  public toUpdateBlueprint() {
    return this.to('UpdateBlueprint');
  }

  /**
   * Grants permission to update a data automation project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_data-automation_UpdateDataAutomationProject.html
   */
  public toUpdateDataAutomationProject() {
    return this.to('UpdateDataAutomationProject');
  }

  /**
   * Grants permission to update a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateDataSource.html
   */
  public toUpdateDataSource() {
    return this.to('UpdateDataSource');
  }

  /**
   * Grants permission to update a prompt flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateFlow.html
   */
  public toUpdateFlow() {
    return this.to('UpdateFlow');
  }

  /**
   * Grants permission to update the configuration of an alias of a prompt flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateFlowAlias.html
   */
  public toUpdateFlowAlias() {
    return this.to('UpdateFlowAlias');
  }

  /**
   * Grants permission to update a guardrail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   */
  public toUpdateGuardrail() {
    return this.to('UpdateGuardrail');
  }

  /**
   * Grants permission to update a knowledge base
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateKnowledgeBase.html
   */
  public toUpdateKnowledgeBase() {
    return this.to('UpdateKnowledgeBase');
  }

  /**
   * Grants permission to update a marketplace model endpoint
   *
   * Access Level: Write
   */
  public toUpdateMarketplaceModelEndpoint() {
    return this.to('UpdateMarketplaceModelEndpoint');
  }

  /**
   * Grants permission to update a prompt
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdatePrompt.html
   */
  public toUpdatePrompt() {
    return this.to('UpdatePrompt');
  }

  /**
   * Grants permission to update a provisioned model throughput that you created earlier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_UpdateProvisionedModelThroughput.html
   */
  public toUpdateProvisionedModelThroughput() {
    return this.to('UpdateProvisionedModelThroughput');
  }

  /**
   * Grants permission to update an existing session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_UpdateSession.html
   */
  public toUpdateSession() {
    return this.to('UpdateSession');
  }

  /**
   * Grants permission to validate prompt flow definitions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ValidateFlowDefinition.html
   */
  public toValidateFlowDefinition() {
    return this.to('ValidateFlowDefinition');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AllowVendedLogDeliveryForResource'
    ],
    Read: [
      'ApplyGuardrail',
      'DetectGeneratedContent',
      'GenerateQuery',
      'GetAgent',
      'GetAgentActionGroup',
      'GetAgentAlias',
      'GetAgentCollaborator',
      'GetAgentKnowledgeBase',
      'GetAgentMemory',
      'GetAgentVersion',
      'GetAsyncInvoke',
      'GetBlueprint',
      'GetBlueprintRecommendation',
      'GetCustomModel',
      'GetDataAutomationProject',
      'GetDataAutomationStatus',
      'GetDataSource',
      'GetEvaluationJob',
      'GetFlow',
      'GetFlowAlias',
      'GetFlowVersion',
      'GetFoundationModel',
      'GetFoundationModelAvailability',
      'GetGuardrail',
      'GetImportedModel',
      'GetInferenceProfile',
      'GetIngestionJob',
      'GetInvocationStep',
      'GetKnowledgeBase',
      'GetKnowledgeBaseDocuments',
      'GetMarketplaceModelEndpoint',
      'GetModelCopyJob',
      'GetModelCustomizationJob',
      'GetModelEvaluationJob',
      'GetModelImportJob',
      'GetModelInvocationJob',
      'GetModelInvocationLoggingConfiguration',
      'GetPrompt',
      'GetPromptRouter',
      'GetProvisionedModelThroughput',
      'GetResourcePolicy',
      'GetSession',
      'GetUseCaseForModelAccess',
      'InvokeAgent',
      'InvokeFlow',
      'InvokeInlineAgent',
      'InvokeModel',
      'InvokeModelWithResponseStream',
      'ListMarketplaceModelEndpoints',
      'ListTagsForResource',
      'OptimizePrompt',
      'RenderPrompt',
      'Retrieve',
      'ValidateFlowDefinition'
    ],
    Write: [
      'AssociateAgentCollaborator',
      'AssociateAgentKnowledgeBase',
      'AssociateThirdPartyKnowledgeBase',
      'BatchDeleteEvaluationJob',
      'CreateAgent',
      'CreateAgentActionGroup',
      'CreateAgentAlias',
      'CreateBlueprint',
      'CreateBlueprintVersion',
      'CreateDataAutomationProject',
      'CreateDataSource',
      'CreateEvaluationJob',
      'CreateFlow',
      'CreateFlowAlias',
      'CreateFlowVersion',
      'CreateFoundationModelAgreement',
      'CreateGuardrail',
      'CreateGuardrailVersion',
      'CreateInferenceProfile',
      'CreateInvocation',
      'CreateKnowledgeBase',
      'CreateMarketplaceModelEndpoint',
      'CreateModelCopyJob',
      'CreateModelCustomizationJob',
      'CreateModelEvaluationJob',
      'CreateModelImportJob',
      'CreateModelInvocationJob',
      'CreatePrompt',
      'CreatePromptVersion',
      'CreateProvisionedModelThroughput',
      'CreateSession',
      'DeleteAgent',
      'DeleteAgentActionGroup',
      'DeleteAgentAlias',
      'DeleteAgentMemory',
      'DeleteAgentVersion',
      'DeleteBlueprint',
      'DeleteCustomModel',
      'DeleteDataAutomationProject',
      'DeleteDataSource',
      'DeleteFlow',
      'DeleteFlowAlias',
      'DeleteFlowVersion',
      'DeleteFoundationModelAgreement',
      'DeleteGuardrail',
      'DeleteImportedModel',
      'DeleteInferenceProfile',
      'DeleteKnowledgeBase',
      'DeleteKnowledgeBaseDocuments',
      'DeleteMarketplaceModelAgreement',
      'DeleteMarketplaceModelEndpoint',
      'DeleteModelInvocationLoggingConfiguration',
      'DeletePrompt',
      'DeleteProvisionedModelThroughput',
      'DeleteResourcePolicy',
      'DeleteSession',
      'DeregisterMarketplaceModelEndpoint',
      'DisassociateAgentCollaborator',
      'DisassociateAgentKnowledgeBase',
      'EndSession',
      'IngestKnowledgeBaseDocuments',
      'InvokeBlueprintRecommendationAsync',
      'InvokeBuilder',
      'InvokeDataAutomationAsync',
      'PrepareAgent',
      'PrepareFlow',
      'PutFoundationModelEntitlement',
      'PutInvocationStep',
      'PutModelInvocationLoggingConfiguration',
      'PutResourcePolicy',
      'PutUseCaseForModelAccess',
      'RegisterMarketplaceModelEndpoint',
      'Rerank',
      'RetrieveAndGenerate',
      'StartIngestionJob',
      'StopEvaluationJob',
      'StopIngestionJob',
      'StopModelCustomizationJob',
      'StopModelInvocationJob',
      'UpdateAgent',
      'UpdateAgentActionGroup',
      'UpdateAgentAlias',
      'UpdateAgentCollaborator',
      'UpdateAgentKnowledgeBase',
      'UpdateBlueprint',
      'UpdateDataAutomationProject',
      'UpdateDataSource',
      'UpdateFlow',
      'UpdateFlowAlias',
      'UpdateGuardrail',
      'UpdateKnowledgeBase',
      'UpdateMarketplaceModelEndpoint',
      'UpdatePrompt',
      'UpdateProvisionedModelThroughput',
      'UpdateSession'
    ],
    List: [
      'ListAgentActionGroups',
      'ListAgentAliases',
      'ListAgentCollaborators',
      'ListAgentKnowledgeBases',
      'ListAgentVersions',
      'ListAgents',
      'ListAsyncInvokes',
      'ListBlueprints',
      'ListCustomModels',
      'ListDataAutomationProjects',
      'ListDataSources',
      'ListEvaluationJobs',
      'ListFlowAliases',
      'ListFlowVersions',
      'ListFlows',
      'ListFoundationModelAgreementOffers',
      'ListFoundationModels',
      'ListGuardrails',
      'ListImportedModels',
      'ListInferenceProfiles',
      'ListIngestionJobs',
      'ListInvocationSteps',
      'ListInvocations',
      'ListKnowledgeBaseDocuments',
      'ListKnowledgeBases',
      'ListModelCopyJobs',
      'ListModelCustomizationJobs',
      'ListModelEvaluationJobs',
      'ListModelImportJobs',
      'ListModelInvocationJobs',
      'ListPromptRouters',
      'ListPrompts',
      'ListProvisionedModelThroughputs',
      'ListSessions'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type foundation-model to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onFoundationModel(resourceId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }::foundation-model/${ resourceId }`);
  }

  /**
   * Adds a resource of type async-invoke to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAsyncInvoke(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:async-invoke/${ resourceId }`);
  }

  /**
   * Adds a resource of type inference-profile to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onInferenceProfile(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:inference-profile/${ resourceId }`);
  }

  /**
   * Adds a resource of type default-prompt-router to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDefaultPromptRouter(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:default-prompt-router/${ resourceId }`);
  }

  /**
   * Adds a resource of type application-inference-profile to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplicationInferenceProfile(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application-inference-profile/${ resourceId }`);
  }

  /**
   * Adds a resource of type custom-model to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCustomModel(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:custom-model/${ resourceId }`);
  }

  /**
   * Adds a resource of type provisioned-model to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProvisionedModel(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:provisioned-model/${ resourceId }`);
  }

  /**
   * Adds a resource of type model-customization-job to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModelCustomizationJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:model-customization-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type agent to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param agentId - Identifier for the agentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAgent(agentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agent/${ agentId }`);
  }

  /**
   * Adds a resource of type agent-alias to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param agentId - Identifier for the agentId.
   * @param agentAliasId - Identifier for the agentAliasId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAgentAlias(agentId: string, agentAliasId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agent-alias/${ agentId }/${ agentAliasId }`);
  }

  /**
   * Adds a resource of type knowledge-base to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param knowledgeBaseId - Identifier for the knowledgeBaseId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onKnowledgeBase(knowledgeBaseId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:knowledge-base/${ knowledgeBaseId }`);
  }

  /**
   * Adds a resource of type model-evaluation-job to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModelEvaluationJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:model-evaluation-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type evaluation-job to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEvaluationJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:evaluation-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type model-invocation-job to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param jobIdentifier - Identifier for the jobIdentifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModelInvocationJob(jobIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:model-invocation-job/${ jobIdentifier }`);
  }

  /**
   * Adds a resource of type guardrail to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param guardrailId - Identifier for the guardrailId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGuardrail(guardrailId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:guardrail/${ guardrailId }`);
  }

  /**
   * Adds a resource of type flow to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_FlowSummary.html
   *
   * @param flowId - Identifier for the flowId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFlow(flowId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:flow/${ flowId }`);
  }

  /**
   * Adds a resource of type flow-alias to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_FlowAliasSummary.html
   *
   * @param flowId - Identifier for the flowId.
   * @param flowAliasId - Identifier for the flowAliasId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFlowAlias(flowId: string, flowAliasId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:flow/${ flowId }/alias/${ flowAliasId }`);
  }

  /**
   * Adds a resource of type model-copy-job to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModelCopyJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:model-copy-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type prompt to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptSummary.html
   *
   * @param promptId - Identifier for the promptId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPrompt(promptId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:prompt/${ promptId }`);
  }

  /**
   * Adds a resource of type prompt-version to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptSummary.html
   *
   * @param promptId - Identifier for the promptId.
   * @param promptVersion - Identifier for the promptVersion.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPromptVersion(promptId: string, promptVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:prompt/${ promptId }:${ promptVersion }`);
  }

  /**
   * Adds a resource of type model-import-job to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModelImportJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:model-import-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type imported-model to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImportedModel(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:imported-model/${ resourceId }`);
  }

  /**
   * Adds a resource of type bedrock-marketplace-model-endpoint to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBedrockMarketplaceModelEndpoint(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:marketplace/model-endpoint/all-access`);
  }

  /**
   * Adds a resource of type data-automation-project to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param projectId - Identifier for the projectId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDataAutomationProject(projectId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:data-automation-project/${ projectId }`);
  }

  /**
   * Adds a resource of type blueprint to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param blueprintId - Identifier for the blueprintId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBlueprint(blueprintId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:blueprint/${ blueprintId }`);
  }

  /**
   * Adds a resource of type data-automation-invocation-job to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDataAutomationInvocationJob(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:data-automation-invocation/${ jobId }`);
  }

  /**
   * Adds a resource of type data-automation-profile to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param profileId - Identifier for the profileId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDataAutomationProfile(profileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:data-automation-profile/${ profileId }`);
  }

  /**
   * Adds a resource of type session to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html
   *
   * @param sessionId - Identifier for the sessionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSession(sessionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:session/${ sessionId }`);
  }

  /**
   * Filters access by creating requests based on the allowed set of values for each of the mandatory tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toCreateAgent()
   * - .toCreateAgentActionGroup()
   * - .toCreateAgentAlias()
   * - .toCreateEvaluationJob()
   * - .toCreateFlow()
   * - .toCreateFlowAlias()
   * - .toCreateGuardrail()
   * - .toCreateInferenceProfile()
   * - .toCreateKnowledgeBase()
   * - .toCreateModelCopyJob()
   * - .toCreateModelCustomizationJob()
   * - .toCreateModelEvaluationJob()
   * - .toCreateModelImportJob()
   * - .toCreateModelInvocationJob()
   * - .toCreatePrompt()
   * - .toCreatePromptVersion()
   * - .toCreateProvisionedModelThroughput()
   * - .toCreateSession()
   * - .toInvokeModel()
   * - .toPutResourcePolicy()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by having actions based on the tag value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to resource types:
   * - async-invoke
   * - application-inference-profile
   * - custom-model
   * - provisioned-model
   * - model-customization-job
   * - agent
   * - agent-alias
   * - knowledge-base
   * - model-evaluation-job
   * - evaluation-job
   * - model-invocation-job
   * - guardrail
   * - flow
   * - flow-alias
   * - model-copy-job
   * - prompt
   * - prompt-version
   * - model-import-job
   * - imported-model
   * - session
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by creating requests based on the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toCreateAgent()
   * - .toCreateAgentActionGroup()
   * - .toCreateAgentAlias()
   * - .toCreateEvaluationJob()
   * - .toCreateFlow()
   * - .toCreateFlowAlias()
   * - .toCreateGuardrail()
   * - .toCreateInferenceProfile()
   * - .toCreateKnowledgeBase()
   * - .toCreateModelCopyJob()
   * - .toCreateModelCustomizationJob()
   * - .toCreateModelEvaluationJob()
   * - .toCreateModelImportJob()
   * - .toCreateModelInvocationJob()
   * - .toCreatePrompt()
   * - .toCreatePromptVersion()
   * - .toCreateProvisionedModelThroughput()
   * - .toCreateSession()
   * - .toInvokeModel()
   * - .toPutResourcePolicy()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the GuardrailIdentifier containing the GuardrailArn or the GuardrailArn:NumericVersion
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrock.html#amazonbedrock-policy-keys
   *
   * Applies to actions:
   * - .toInvokeModel()
   * - .toInvokeModelWithResponseStream()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifGuardrailIdentifier(value: string | string[], operator?: Operator | string) {
    return this.if(`GuardrailIdentifier`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the specified inference profile
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toInvokeModel()
   * - .toInvokeModelWithResponseStream()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifInferenceProfileArn(value: string | string[], operator?: Operator | string) {
    return this.if(`InferenceProfileArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the specified prompt router
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toInvokeModel()
   * - .toInvokeModelWithResponseStream()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifPromptRouterArn(value: string | string[], operator?: Operator | string) {
    return this.if(`PromptRouterArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the secretArn containing the credentials of the third party platform
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toAssociateThirdPartyKnowledgeBase()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifThirdPartyKnowledgeBaseCredentialsSecretArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ThirdPartyKnowledgeBaseCredentialsSecretArn`, value, operator ?? 'ArnLike');
  }
}
