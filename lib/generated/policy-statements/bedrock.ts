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
   * Grants permission to invoke a prompt flow with user input
   *
   * Access Level: Read
   */
  public toInvokeFlow() {
    return this.to('InvokeFlow');
  }

  /**
   * Grants permission to invoke the specified Bedrock model to run inference using the input provided in the request body
   *
   * Access Level: Read
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

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AllowVendedLogDeliveryForResource'
    ],
    Read: [
      'ApplyGuardrail',
      'DetectGeneratedContent',
      'GetAgent',
      'GetAgentActionGroup',
      'GetAgentAlias',
      'GetAgentKnowledgeBase',
      'GetAgentMemory',
      'GetAgentVersion',
      'GetCustomModel',
      'GetDataSource',
      'GetEvaluationJob',
      'GetFlow',
      'GetFlowAlias',
      'GetFlowVersion',
      'GetFoundationModel',
      'GetFoundationModelAvailability',
      'GetGuardrail',
      'GetIngestionJob',
      'GetKnowledgeBase',
      'GetModelCustomizationJob',
      'GetModelEvaluationJob',
      'GetModelInvocationJob',
      'GetModelInvocationLoggingConfiguration',
      'GetPrompt',
      'GetProvisionedModelThroughput',
      'GetUseCaseForModelAccess',
      'InvokeAgent',
      'InvokeFlow',
      'InvokeModel',
      'InvokeModelWithResponseStream',
      'ListTagsForResource',
      'Retrieve'
    ],
    Write: [
      'AssociateAgentKnowledgeBase',
      'AssociateThirdPartyKnowledgeBase',
      'CreateAgent',
      'CreateAgentActionGroup',
      'CreateAgentAlias',
      'CreateDataSource',
      'CreateEvaluationJob',
      'CreateFlow',
      'CreateFlowAlias',
      'CreateFlowVersion',
      'CreateFoundationModelAgreement',
      'CreateGuardrail',
      'CreateGuardrailVersion',
      'CreateKnowledgeBase',
      'CreateModelCustomizationJob',
      'CreateModelEvaluationJob',
      'CreateModelInvocationJob',
      'CreatePrompt',
      'CreatePromptVersion',
      'CreateProvisionedModelThroughput',
      'DeleteAgent',
      'DeleteAgentActionGroup',
      'DeleteAgentAlias',
      'DeleteAgentMemory',
      'DeleteAgentVersion',
      'DeleteCustomModel',
      'DeleteDataSource',
      'DeleteFlow',
      'DeleteFlowAlias',
      'DeleteFlowVersion',
      'DeleteFoundationModelAgreement',
      'DeleteGuardrail',
      'DeleteKnowledgeBase',
      'DeleteModelInvocationLoggingConfiguration',
      'DeletePrompt',
      'DeleteProvisionedModelThroughput',
      'DisassociateAgentKnowledgeBase',
      'PrepareAgent',
      'PrepareFlow',
      'PutFoundationModelEntitlement',
      'PutModelInvocationLoggingConfiguration',
      'PutUseCaseForModelAccess',
      'RetrieveAndGenerate',
      'StartIngestionJob',
      'StopEvaluationJob',
      'StopModelCustomizationJob',
      'StopModelInvocationJob',
      'UpdateAgent',
      'UpdateAgentActionGroup',
      'UpdateAgentAlias',
      'UpdateAgentKnowledgeBase',
      'UpdateDataSource',
      'UpdateFlow',
      'UpdateFlowAlias',
      'UpdateGuardrail',
      'UpdateKnowledgeBase',
      'UpdatePrompt',
      'UpdateProvisionedModelThroughput'
    ],
    List: [
      'ListAgentActionGroups',
      'ListAgentAliases',
      'ListAgentKnowledgeBases',
      'ListAgentVersions',
      'ListAgents',
      'ListCustomModels',
      'ListDataSources',
      'ListEvaluationJobs',
      'ListFlowAliases',
      'ListFlowVersions',
      'ListFlows',
      'ListFoundationModelAgreementOffers',
      'ListFoundationModels',
      'ListGuardrails',
      'ListIngestionJobs',
      'ListKnowledgeBases',
      'ListModelCustomizationJobs',
      'ListModelEvaluationJobs',
      'ListModelInvocationJobs',
      'ListPrompts',
      'ListProvisionedModelThroughputs'
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
   * - .toCreateKnowledgeBase()
   * - .toCreateModelCustomizationJob()
   * - .toCreateModelEvaluationJob()
   * - .toCreateModelInvocationJob()
   * - .toCreatePrompt()
   * - .toCreatePromptVersion()
   * - .toCreateProvisionedModelThroughput()
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
   * - prompt
   * - prompt-version
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
   * - .toCreateKnowledgeBase()
   * - .toCreateModelCustomizationJob()
   * - .toCreateModelEvaluationJob()
   * - .toCreateModelInvocationJob()
   * - .toCreatePrompt()
   * - .toCreatePromptVersion()
   * - .toCreateProvisionedModelThroughput()
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
