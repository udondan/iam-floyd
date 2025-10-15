import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [bedrock-agentcore](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrockagentcore.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class BedrockAgentcore extends PolicyStatement {
  public servicePrefix = 'bedrock-agentcore';

  /**
   * Statement provider for service [bedrock-agentcore](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbedrockagentcore.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to configure vended telemetry for a resource
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/
   */
  public toAllowVendedLogDeliveryForResource() {
    return this.to('AllowVendedLogDeliveryForResource');
  }

  /**
   * Grants permission to create one or more memory records
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNamespace()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_BatchCreateMemoryRecords.html
   */
  public toBatchCreateMemoryRecords() {
    return this.to('BatchCreateMemoryRecords');
  }

  /**
   * Grants permission to delete one or more memory records
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_BatchDeleteMemoryRecords.html
   */
  public toBatchDeleteMemoryRecords() {
    return this.to('BatchDeleteMemoryRecords');
  }

  /**
   * Grants permission to update one or more memory records
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNamespace()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_BatchUpdateMemoryRecords.html
   */
  public toBatchUpdateMemoryRecords() {
    return this.to('BatchUpdateMemoryRecords');
  }

  /**
   * Grants permission to retrieve access token with OAuth2 for 3LO flow to access external resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInboundJwtClaimIss()
   * - .ifInboundJwtClaimSub()
   * - .ifInboundJwtClaimAud()
   * - .ifInboundJwtClaimScope()
   * - .ifInboundJwtClaimClientId()
   * - .ifUserid()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_CompleteResourceTokenAuth.html
   */
  public toCompleteResourceTokenAuth() {
    return this.to('CompleteResourceTokenAuth');
  }

  /**
   * Grants permission to connect to a browser automation stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_ConnectBrowserAutomationStream.html
   */
  public toConnectBrowserAutomationStream() {
    return this.to('ConnectBrowserAutomationStream');
  }

  /**
   * Grants permission to connect to a browser live view stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_ConnectBrowserLiveViewStream.html
   */
  public toConnectBrowserLiveViewStream() {
    return this.to('ConnectBrowserLiveViewStream');
  }

  /**
   * Grants permission to create a new agent runtime
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
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_CreateAgentRuntime.html
   */
  public toCreateAgentRuntime() {
    return this.to('CreateAgentRuntime');
  }

  /**
   * Grants permission to create a new agent runtime endpoint
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_CreateAgentRuntimeEndpoint.html
   */
  public toCreateAgentRuntimeEndpoint() {
    return this.to('CreateAgentRuntimeEndpoint');
  }

  /**
   * Grants permission to create a new API Key Credential Provider
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_CreateApiKeyCredentialProvider.html
   */
  public toCreateApiKeyCredentialProvider() {
    return this.to('CreateApiKeyCredentialProvider');
  }

  /**
   * Grants permission to create a new custom browser
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_CreateBrowser.html
   */
  public toCreateBrowser() {
    return this.to('CreateBrowser');
  }

  /**
   * Grants permission to create a new custom code interpreter
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_CreateCodeInterpreter.html
   */
  public toCreateCodeInterpreter() {
    return this.to('CreateCodeInterpreter');
  }

  /**
   * Grants permission to create an Event
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSessionId()
   * - .ifActorId()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_CreateEvent.html
   */
  public toCreateEvent() {
    return this.to('CreateEvent');
  }

  /**
   * Grants permission to create a new gateway
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
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_CreateGateway.html
   */
  public toCreateGateway() {
    return this.to('CreateGateway');
  }

  /**
   * Grants permission to create a new target in an existing gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_CreateGatewayTarget.html
   */
  public toCreateGatewayTarget() {
    return this.to('CreateGatewayTarget');
  }

  /**
   * Grants permission to create a Memory resource
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
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_CreateMemory.html
   */
  public toCreateMemory() {
    return this.to('CreateMemory');
  }

  /**
   * Grants permission to create a new Credential Provider to access external resources with OAuth2 protocol
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_CreateOauth2CredentialProvider.html
   */
  public toCreateOauth2CredentialProvider() {
    return this.to('CreateOauth2CredentialProvider');
  }

  /**
   * Grants permission to create a new Workload Identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_CreateWorkloadIdentity.html
   */
  public toCreateWorkloadIdentity() {
    return this.to('CreateWorkloadIdentity');
  }

  /**
   * Grants permission to delete an agent runtime
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_DeleteAgentRuntime.html
   */
  public toDeleteAgentRuntime() {
    return this.to('DeleteAgentRuntime');
  }

  /**
   * Grants permission to delete an agent runtime endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_DeleteAgentRuntimeEndpoint.html
   */
  public toDeleteAgentRuntimeEndpoint() {
    return this.to('DeleteAgentRuntimeEndpoint');
  }

  /**
   * Grants permission to delete a registered API Key Credential Provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_DeleteApiKeyCredentialProvider.html
   */
  public toDeleteApiKeyCredentialProvider() {
    return this.to('DeleteApiKeyCredentialProvider');
  }

  /**
   * Grants permission to delete a custom browser
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_DeleteBrowser.html
   */
  public toDeleteBrowser() {
    return this.to('DeleteBrowser');
  }

  /**
   * Grants permission to delete a custom code interpreter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_DeleteCodeInterpreter.html
   */
  public toDeleteCodeInterpreter() {
    return this.to('DeleteCodeInterpreter');
  }

  /**
   * Grants permission to delete an Event
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSessionId()
   * - .ifActorId()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_DeleteEvent.html
   */
  public toDeleteEvent() {
    return this.to('DeleteEvent');
  }

  /**
   * Grants permission to delete an existing gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_DeleteGateway.html
   */
  public toDeleteGateway() {
    return this.to('DeleteGateway');
  }

  /**
   * Grants permission to delete an existing gateway target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_DeleteGatewayTarget.html
   */
  public toDeleteGatewayTarget() {
    return this.to('DeleteGatewayTarget');
  }

  /**
   * Grants permission to delete a Memory resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_DeleteMemory.html
   */
  public toDeleteMemory() {
    return this.to('DeleteMemory');
  }

  /**
   * Grants permission to delete a Memory Record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_DeleteMemoryRecord.html
   */
  public toDeleteMemoryRecord() {
    return this.to('DeleteMemoryRecord');
  }

  /**
   * Grants permission to delete a registered OAuth2 Credential Provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_DeleteOauth2CredentialProvider.html
   */
  public toDeleteOauth2CredentialProvider() {
    return this.to('DeleteOauth2CredentialProvider');
  }

  /**
   * Grants permission to delete a registered Workload Identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_DeleteWorkloadIdentity.html
   */
  public toDeleteWorkloadIdentity() {
    return this.to('DeleteWorkloadIdentity');
  }

  /**
   * Grants permission to retrieve an agent card for A2A
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_GetAgentCard.html
   */
  public toGetAgentCard() {
    return this.to('GetAgentCard');
  }

  /**
   * Grants permission to get details of an agent runtime
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_GetAgentRuntime.html
   */
  public toGetAgentRuntime() {
    return this.to('GetAgentRuntime');
  }

  /**
   * Grants permission to get details of an agent runtime endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_GetAgentRuntimeEndpoint.html
   */
  public toGetAgentRuntimeEndpoint() {
    return this.to('GetAgentRuntimeEndpoint');
  }

  /**
   * Grants permission to fetch a registered API Key Credential Provider by its name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_GetApiKeyCredentialProvider.html
   */
  public toGetApiKeyCredentialProvider() {
    return this.to('GetApiKeyCredentialProvider');
  }

  /**
   * Grants permission to get details of a browser
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_GetBrowser.html
   */
  public toGetBrowser() {
    return this.to('GetBrowser');
  }

  /**
   * Grants permission to get details of a browser session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_GetBrowserSession.html
   */
  public toGetBrowserSession() {
    return this.to('GetBrowserSession');
  }

  /**
   * Grants permission to get details of a code interpreter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_GetCodeInterpreter.html
   */
  public toGetCodeInterpreter() {
    return this.to('GetCodeInterpreter');
  }

  /**
   * Grants permission to get details of a code interpreter session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_GetCodeInterpreterSession.html
   */
  public toGetCodeInterpreterSession() {
    return this.to('GetCodeInterpreterSession');
  }

  /**
   * Grants permission to fetch an Event
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifSessionId()
   * - .ifActorId()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_GetEvent.html
   */
  public toGetEvent() {
    return this.to('GetEvent');
  }

  /**
   * Grants permission to retrieve an existing gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_GetGateway.html
   */
  public toGetGateway() {
    return this.to('GetGateway');
  }

  /**
   * Grants permission to retrieve an existing gateway target
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_GetGatewayTarget.html
   */
  public toGetGatewayTarget() {
    return this.to('GetGatewayTarget');
  }

  /**
   * Grants permission to fetch details for a Memory resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_GetMemory.html
   */
  public toGetMemory() {
    return this.to('GetMemory');
  }

  /**
   * Grants permission to fetch a Memory Record
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_GetMemoryRecord.html
   */
  public toGetMemoryRecord() {
    return this.to('GetMemoryRecord');
  }

  /**
   * Grants permission to fetch a registered OAuth2 Credential Provider by its name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_GetOauth2CredentialProvider.html
   */
  public toGetOauth2CredentialProvider() {
    return this.to('GetOauth2CredentialProvider');
  }

  /**
   * Grants permission to retrieve an API Key associated with an Api Key Credential Provider
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_GetResourceApiKey.html
   */
  public toGetResourceApiKey() {
    return this.to('GetResourceApiKey');
  }

  /**
   * Grants permission to retrieve access token with OAuth2 2LO or 3LO flow to access external resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_GetResourceOauth2Token.html
   */
  public toGetResourceOauth2Token() {
    return this.to('GetResourceOauth2Token');
  }

  /**
   * Grants permission to fetch the current configuration of the TokenVault, including encryption settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_GetTokenVault.html
   */
  public toGetTokenVault() {
    return this.to('GetTokenVault');
  }

  /**
   * Grants permission to retrieve an Workload access token for agentic workloads not acting on behalf of a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_GetWorkloadAccessToken.html
   */
  public toGetWorkloadAccessToken() {
    return this.to('GetWorkloadAccessToken');
  }

  /**
   * Grants permission to retrieve an Workload access token for agentic workloads acting on behalf of user with JWT token
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInboundJwtClaimIss()
   * - .ifInboundJwtClaimSub()
   * - .ifInboundJwtClaimAud()
   * - .ifInboundJwtClaimScope()
   * - .ifInboundJwtClaimClientId()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_GetWorkloadAccessTokenForJWT.html
   */
  public toGetWorkloadAccessTokenForJWT() {
    return this.to('GetWorkloadAccessTokenForJWT');
  }

  /**
   * Grants permission to retrieve an Workload access token for agentic workloads acting on behalf of user with User Id
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserid()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_GetWorkloadAccessTokenForUserId.html
   */
  public toGetWorkloadAccessTokenForUserId() {
    return this.to('GetWorkloadAccessTokenForUserId');
  }

  /**
   * Grants permission to fetch details for a specific Workload identity, including its name and allowed OAuth2 return URLs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_GetWorkloadIdentity.html
   */
  public toGetWorkloadIdentity() {
    return this.to('GetWorkloadIdentity');
  }

  /**
   * Grants permission to invoke an agent runtime endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_InvokeAgentRuntime.html
   */
  public toInvokeAgentRuntime() {
    return this.to('InvokeAgentRuntime');
  }

  /**
   * Grants permission to invoke an agent runtime endpoint with X-Amzn-Bedrock-AgentCore-Runtime-User-Id header
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_InvokeAgentRuntime.html
   */
  public toInvokeAgentRuntimeForUser() {
    return this.to('InvokeAgentRuntimeForUser');
  }

  /**
   * Grants permission to invoke a code interpreter session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_InvokeCodeInterpreter.html
   */
  public toInvokeCodeInterpreter() {
    return this.to('InvokeCodeInterpreter');
  }

  /**
   * Grants permission to invoke a gateway
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/welcome.html
   */
  public toInvokeGateway() {
    return this.to('InvokeGateway');
  }

  /**
   * Grants permission to list Actors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_ListActors.html
   */
  public toListActors() {
    return this.to('ListActors');
  }

  /**
   * Grants permission to list agent runtime endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListAgentRuntimeEndpoints.html
   */
  public toListAgentRuntimeEndpoints() {
    return this.to('ListAgentRuntimeEndpoints');
  }

  /**
   * Grants permission to list agent runtime versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListAgentRuntimeVersions.html
   */
  public toListAgentRuntimeVersions() {
    return this.to('ListAgentRuntimeVersions');
  }

  /**
   * Grants permission to list agent runtimes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListAgentRuntimes.html
   */
  public toListAgentRuntimes() {
    return this.to('ListAgentRuntimes');
  }

  /**
   * Grants permission to list all API Key Credential Providers in the Token Vault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListApiKeyCredentialProviders.html
   */
  public toListApiKeyCredentialProviders() {
    return this.to('ListApiKeyCredentialProviders');
  }

  /**
   * Grants permission to list browser sessions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_ListBrowserSessions.html
   */
  public toListBrowserSessions() {
    return this.to('ListBrowserSessions');
  }

  /**
   * Grants permission to list browsers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListBrowsers.html
   */
  public toListBrowsers() {
    return this.to('ListBrowsers');
  }

  /**
   * Grants permission to list code interpreter sessions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_ListCodeInterpreterSessions.html
   */
  public toListCodeInterpreterSessions() {
    return this.to('ListCodeInterpreterSessions');
  }

  /**
   * Grants permission to list code interpreters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListCodeInterpreters.html
   */
  public toListCodeInterpreters() {
    return this.to('ListCodeInterpreters');
  }

  /**
   * Grants permission to list events
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifSessionId()
   * - .ifActorId()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_ListEvents.html
   */
  public toListEvents() {
    return this.to('ListEvents');
  }

  /**
   * Grants permission to list existing gateway targets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListGatewayTargets.html
   */
  public toListGatewayTargets() {
    return this.to('ListGatewayTargets');
  }

  /**
   * Grants permission to list existing gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListGateways.html
   */
  public toListGateways() {
    return this.to('ListGateways');
  }

  /**
   * Grants permission to list memory resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListMemories.html
   */
  public toListMemories() {
    return this.to('ListMemories');
  }

  /**
   * Grants permission to list memory records
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifStrategyId()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_ListMemoryRecords.html
   */
  public toListMemoryRecords() {
    return this.to('ListMemoryRecords');
  }

  /**
   * Grants permission to list all OAuth2 Credential Providers in the Token Vault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListOauth2CredentialProviders.html
   */
  public toListOauth2CredentialProviders() {
    return this.to('ListOauth2CredentialProviders');
  }

  /**
   * Grants permission to list sessions
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifActorId()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_ListSessions.html
   */
  public toListSessions() {
    return this.to('ListSessions');
  }

  /**
   * Grants permission to list tags for a Bedrock-AgentCore resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all Workload Identities in the caller's AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListWorkloadIdentities.html
   */
  public toListWorkloadIdentities() {
    return this.to('ListWorkloadIdentities');
  }

  /**
   * Grants permission to retrieve memory records through sematic query
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifNamespace()
   * - .ifStrategyId()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_RetrieveMemoryRecords.html
   */
  public toRetrieveMemoryRecords() {
    return this.to('RetrieveMemoryRecords');
  }

  /**
   * Grants permission to associate a Customer Managed Key (CMK) or a Service Managed Key with a specific TokenVault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_SetTokenVaultCMK.html
   */
  public toSetTokenVaultCMK() {
    return this.to('SetTokenVaultCMK');
  }

  /**
   * Grants permission to starts a new browser session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_StartBrowserSession.html
   */
  public toStartBrowserSession() {
    return this.to('StartBrowserSession');
  }

  /**
   * Grants permission to start a new code interpreter session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_StartCodeInterpreterSession.html
   */
  public toStartCodeInterpreterSession() {
    return this.to('StartCodeInterpreterSession');
  }

  /**
   * Grants permission to stop a browser session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_StopBrowserSession.html
   */
  public toStopBrowserSession() {
    return this.to('StopBrowserSession');
  }

  /**
   * Grants permission to stop a code interpreter session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_StopCodeInterpreterSession.html
   */
  public toStopCodeInterpreterSession() {
    return this.to('StopCodeInterpreterSession');
  }

  /**
   * Grants permission to stop a runtime session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_StopRuntimeSession.html
   */
  public toStopRuntimeSession() {
    return this.to('StopRuntimeSession');
  }

  /**
   * Grants permission to enable search on gateways
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/welcome.html
   */
  public toSynchronizeGatewayTargets() {
    return this.to('SynchronizeGatewayTargets');
  }

  /**
   * Grants permission to Tag a Bedrock-AgentCore resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to Untag a Bedrock-AgentCore resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an agent runtime
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_UpdateAgentRuntime.html
   */
  public toUpdateAgentRuntime() {
    return this.to('UpdateAgentRuntime');
  }

  /**
   * Grants permission to update an agent runtime endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_UpdateAgentRuntimeEndpoint.html
   */
  public toUpdateAgentRuntimeEndpoint() {
    return this.to('UpdateAgentRuntimeEndpoint');
  }

  /**
   * Grants permission to update an existing API Key Credential Provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_UpdateApiKeyCredentialProvider.html
   */
  public toUpdateApiKeyCredentialProvider() {
    return this.to('UpdateApiKeyCredentialProvider');
  }

  /**
   * Grants permission to update the status of browser session stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_UpdateBrowserStream.html
   */
  public toUpdateBrowserStream() {
    return this.to('UpdateBrowserStream');
  }

  /**
   * Grants permission to update an existing gateway
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_UpdateGateway.html
   */
  public toUpdateGateway() {
    return this.to('UpdateGateway');
  }

  /**
   * Grants permission to update an existing gateway target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_UpdateGatewayTarget.html
   */
  public toUpdateGatewayTarget() {
    return this.to('UpdateGatewayTarget');
  }

  /**
   * Grants permission to update a Memory resource
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_UpdateMemory.html
   */
  public toUpdateMemory() {
    return this.to('UpdateMemory');
  }

  /**
   * Grants permission to update an existing OAuth2 Credential Provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_UpdateOauth2CredentialProvider.html
   */
  public toUpdateOauth2CredentialProvider() {
    return this.to('UpdateOauth2CredentialProvider');
  }

  /**
   * Grants permission to update the metadata of an existing Workload Identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_UpdateWorkloadIdentity.html
   */
  public toUpdateWorkloadIdentity() {
    return this.to('UpdateWorkloadIdentity');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AllowVendedLogDeliveryForResource',
      'InvokeGateway',
      'SynchronizeGatewayTargets'
    ],
    Write: [
      'BatchCreateMemoryRecords',
      'BatchDeleteMemoryRecords',
      'BatchUpdateMemoryRecords',
      'CreateAgentRuntime',
      'CreateAgentRuntimeEndpoint',
      'CreateApiKeyCredentialProvider',
      'CreateBrowser',
      'CreateCodeInterpreter',
      'CreateEvent',
      'CreateGateway',
      'CreateGatewayTarget',
      'CreateMemory',
      'CreateOauth2CredentialProvider',
      'CreateWorkloadIdentity',
      'DeleteAgentRuntime',
      'DeleteAgentRuntimeEndpoint',
      'DeleteApiKeyCredentialProvider',
      'DeleteBrowser',
      'DeleteCodeInterpreter',
      'DeleteEvent',
      'DeleteGateway',
      'DeleteGatewayTarget',
      'DeleteMemory',
      'DeleteMemoryRecord',
      'DeleteOauth2CredentialProvider',
      'DeleteWorkloadIdentity',
      'GetWorkloadAccessToken',
      'GetWorkloadAccessTokenForJWT',
      'GetWorkloadAccessTokenForUserId',
      'InvokeAgentRuntime',
      'InvokeAgentRuntimeForUser',
      'InvokeCodeInterpreter',
      'StartBrowserSession',
      'StartCodeInterpreterSession',
      'StopBrowserSession',
      'StopCodeInterpreterSession',
      'StopRuntimeSession',
      'UpdateAgentRuntime',
      'UpdateAgentRuntimeEndpoint',
      'UpdateApiKeyCredentialProvider',
      'UpdateBrowserStream',
      'UpdateGateway',
      'UpdateGatewayTarget',
      'UpdateMemory',
      'UpdateOauth2CredentialProvider',
      'UpdateWorkloadIdentity'
    ],
    Read: [
      'CompleteResourceTokenAuth',
      'ConnectBrowserAutomationStream',
      'ConnectBrowserLiveViewStream',
      'GetAgentCard',
      'GetAgentRuntime',
      'GetAgentRuntimeEndpoint',
      'GetApiKeyCredentialProvider',
      'GetBrowser',
      'GetBrowserSession',
      'GetCodeInterpreter',
      'GetCodeInterpreterSession',
      'GetEvent',
      'GetGateway',
      'GetGatewayTarget',
      'GetMemory',
      'GetMemoryRecord',
      'GetOauth2CredentialProvider',
      'GetResourceApiKey',
      'GetResourceOauth2Token',
      'GetTokenVault',
      'GetWorkloadIdentity',
      'ListApiKeyCredentialProviders',
      'ListOauth2CredentialProviders',
      'ListWorkloadIdentities',
      'SetTokenVaultCMK'
    ],
    List: [
      'ListActors',
      'ListAgentRuntimeEndpoints',
      'ListAgentRuntimeVersions',
      'ListAgentRuntimes',
      'ListBrowserSessions',
      'ListBrowsers',
      'ListCodeInterpreterSessions',
      'ListCodeInterpreters',
      'ListEvents',
      'ListGatewayTargets',
      'ListGateways',
      'ListMemories',
      'ListMemoryRecords',
      'ListSessions',
      'ListTagsForResource',
      'RetrieveMemoryRecords'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type memory to the statement
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/memory.html
   *
   * @param memoryId - Identifier for the memoryId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMemory(memoryId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-agentcore:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:memory/${ memoryId }`);
  }

  /**
   * Adds a resource of type gateway to the statement
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/gateway.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGateway(gatewayId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-agentcore:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:gateway/${ gatewayId }`);
  }

  /**
   * Adds a resource of type workload-identity to the statement
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/workloadIdentity.html
   *
   * @param directoryId - Identifier for the directoryId.
   * @param workloadIdentityName - Identifier for the workloadIdentityName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkloadIdentity(directoryId: string, workloadIdentityName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-agentcore:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workload-identity-directory/${ directoryId }/workload-identity/${ workloadIdentityName }`);
  }

  /**
   * Adds a resource of type oauth2credentialprovider to the statement
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/oauth2credentialprovider.html
   *
   * @param tokenVaultId - Identifier for the tokenVaultId.
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOauth2credentialprovider(tokenVaultId: string, name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-agentcore:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:token-vault/${ tokenVaultId }/oauth2credentialprovider/${ name }`);
  }

  /**
   * Adds a resource of type apikeycredentialprovider to the statement
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/apikeycredentialprovider.html
   *
   * @param tokenVaultId - Identifier for the tokenVaultId.
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApikeycredentialprovider(tokenVaultId: string, name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-agentcore:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:token-vault/${ tokenVaultId }/apikeycredentialprovider/${ name }`);
  }

  /**
   * Adds a resource of type runtime to the statement
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/runtime.html
   *
   * @param runtimeId - Identifier for the runtimeId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRuntime(runtimeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-agentcore:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:runtime/${ runtimeId }`);
  }

  /**
   * Adds a resource of type runtime-endpoint to the statement
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/runtimeEndpoint.html
   *
   * @param runtimeId - Identifier for the runtimeId.
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRuntimeEndpoint(runtimeId: string, name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-agentcore:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:runtime/${ runtimeId }/runtime-endpoint/${ name }`);
  }

  /**
   * Adds a resource of type code-interpreter-custom to the statement
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/codeInterpreter.html
   *
   * @param codeInterpreterId - Identifier for the codeInterpreterId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCodeInterpreterCustom(codeInterpreterId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-agentcore:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:code-interpreter-custom/${ codeInterpreterId }`);
  }

  /**
   * Adds a resource of type code-interpreter to the statement
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/codeInterpreter.html
   *
   * @param codeInterpreterId - Identifier for the codeInterpreterId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCodeInterpreter(codeInterpreterId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-agentcore:${ region ?? this.defaultRegion }:aws:code-interpreter/${ codeInterpreterId }`);
  }

  /**
   * Adds a resource of type browser-custom to the statement
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/browser.html
   *
   * @param browserId - Identifier for the browserId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBrowserCustom(browserId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-agentcore:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:browser-custom/${ browserId }`);
  }

  /**
   * Adds a resource of type browser to the statement
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/browser.html
   *
   * @param browserId - Identifier for the browserId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBrowser(browserId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-agentcore:${ region ?? this.defaultRegion }:aws:browser/${ browserId }`);
  }

  /**
   * Adds a resource of type workload-identity-directory to the statement
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/workloadIdentityDirectory.html
   *
   * @param directoryId - Identifier for the directoryId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkloadIdentityDirectory(directoryId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-agentcore:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workload-identity-directory/${ directoryId }`);
  }

  /**
   * Adds a resource of type token-vault to the statement
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/tokenVault.html
   *
   * @param tokenVaultId - Identifier for the tokenVaultId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTokenVault(tokenVaultId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-agentcore:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:token-vault/${ tokenVaultId }`);
  }

  /**
   * Filters access by creating requests based on the allowed set of values for each of the mandatory tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toCreateAgentRuntime()
   * - .toCreateAgentRuntimeEndpoint()
   * - .toCreateApiKeyCredentialProvider()
   * - .toCreateBrowser()
   * - .toCreateCodeInterpreter()
   * - .toCreateGateway()
   * - .toCreateMemory()
   * - .toCreateOauth2CredentialProvider()
   * - .toCreateWorkloadIdentity()
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
   * - memory
   * - gateway
   * - workload-identity
   * - oauth2credentialprovider
   * - apikeycredentialprovider
   * - runtime
   * - runtime-endpoint
   * - code-interpreter-custom
   * - browser-custom
   * - workload-identity-directory
   * - token-vault
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
   * - .toCreateAgentRuntime()
   * - .toCreateAgentRuntimeEndpoint()
   * - .toCreateApiKeyCredentialProvider()
   * - .toCreateBrowser()
   * - .toCreateCodeInterpreter()
   * - .toCreateGateway()
   * - .toCreateMemory()
   * - .toCreateOauth2CredentialProvider()
   * - .toCreateWorkloadIdentity()
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
   * Filters access by the authorizerType attribute on a Gateway
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/#condition-keys-gatewayAuthorizerType
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGatewayAuthorizerType(value: string | string[], operator?: Operator | string) {
    return this.if(`GatewayAuthorizerType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the audience claim (aud) in the JWT passed in the request
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/#condition-keys-aud
   *
   * Applies to actions:
   * - .toCompleteResourceTokenAuth()
   * - .toGetWorkloadAccessTokenForJWT()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInboundJwtClaimAud(value: string | string[], operator?: Operator | string) {
    return this.if(`InboundJwtClaim/aud`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the client_id claim in the JWT passed in the request
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/#condition-keys-client_id
   *
   * Applies to actions:
   * - .toCompleteResourceTokenAuth()
   * - .toGetWorkloadAccessTokenForJWT()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInboundJwtClaimClientId(value: string | string[], operator?: Operator | string) {
    return this.if(`InboundJwtClaim/client_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the issuer (iss) claim present in the JWT passed in the request
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/#condition-keys-iss
   *
   * Applies to actions:
   * - .toCompleteResourceTokenAuth()
   * - .toGetWorkloadAccessTokenForJWT()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInboundJwtClaimIss(value: string | string[], operator?: Operator | string) {
    return this.if(`InboundJwtClaim/iss`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the scope claim in the JWT passed in the request
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/#condition-keys-scope
   *
   * Applies to actions:
   * - .toCompleteResourceTokenAuth()
   * - .toGetWorkloadAccessTokenForJWT()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInboundJwtClaimScope(value: string | string[], operator?: Operator | string) {
    return this.if(`InboundJwtClaim/scope`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the subject claim (sub) in the JWT passed in the request
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/#condition-keys-sub
   *
   * Applies to actions:
   * - .toCompleteResourceTokenAuth()
   * - .toGetWorkloadAccessTokenForJWT()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInboundJwtClaimSub(value: string | string[], operator?: Operator | string) {
    return this.if(`InboundJwtClaim/sub`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by Actor Id
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/#condition-keys-actorId
   *
   * Applies to actions:
   * - .toCreateEvent()
   * - .toDeleteEvent()
   * - .toGetEvent()
   * - .toListEvents()
   * - .toListSessions()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifActorId(value: string | string[], operator?: Operator | string) {
    return this.if(`actorId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by namespace
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/#condition-keys-namespace
   *
   * Applies to actions:
   * - .toBatchCreateMemoryRecords()
   * - .toBatchUpdateMemoryRecords()
   * - .toListMemoryRecords()
   * - .toRetrieveMemoryRecords()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifNamespace(value: string | string[], operator?: Operator | string) {
    return this.if(`namespace`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by Session Id
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/#condition-keys-sessionId
   *
   * Applies to actions:
   * - .toCreateEvent()
   * - .toDeleteEvent()
   * - .toGetEvent()
   * - .toListEvents()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSessionId(value: string | string[], operator?: Operator | string) {
    return this.if(`sessionId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by Memory Strategy Id
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/#condition-keys-strategyId
   *
   * Applies to actions:
   * - .toListMemoryRecords()
   * - .toRetrieveMemoryRecords()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifStrategyId(value: string | string[], operator?: Operator | string) {
    return this.if(`strategyId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the static user ID value passed in the request
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/#condition-keys-userid
   *
   * Applies to actions:
   * - .toCompleteResourceTokenAuth()
   * - .toGetWorkloadAccessTokenForUserId()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUserid(value: string | string[], operator?: Operator | string) {
    return this.if(`userid`, value, operator ?? 'StringLike');
  }
}
