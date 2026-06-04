import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [aidevops](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdevopsagentservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Aidevops extends PolicyStatement {
  public servicePrefix = 'aidevops';

  /**
   * Statement provider for service [aidevops](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdevopsagentservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to authorize vended logs
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/configuring-capabilities-for-aws-devops-agent-vended-logs-and-metrics.html
   */
  public toAllowVendedLogDeliveryForResource() {
    return this.to('AllowVendedLogDeliveryForResource');
  }

  /**
   * Grants permission to associate service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_AssociateService.html
   */
  public toAssociateService() {
    return this.to('AssociateService');
  }

  /**
   * Grants permission to create agentspace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_CreateAgentSpace.html
   */
  public toCreateAgentSpace() {
    return this.to('CreateAgentSpace');
  }

  /**
   * Grants permission to create an asset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_CreateAsset.html
   */
  public toCreateAsset() {
    return this.to('CreateAsset');
  }

  /**
   * Grants permission to create an asset file
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_CreateAssetFile.html
   */
  public toCreateAssetFile() {
    return this.to('CreateAssetFile');
  }

  /**
   * Grants permission to create a new backlog task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_CreateBacklogTask.html
   */
  public toCreateBacklogTask() {
    return this.to('CreateBacklogTask');
  }

  /**
   * Grants permission to create a chat
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_CreateChat.html
   */
  public toCreateChat() {
    return this.to('CreateChat');
  }

  /**
   * Grants permission to create a new knowledge item
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_CreateKnowledgeItem.html
   */
  public toCreateKnowledgeItem() {
    return this.to('CreateKnowledgeItem');
  }

  /**
   * Grants permission to generate secure one-time session for initiating off-console Application login
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/what-is.html
   */
  public toCreateOneTimeLoginSession() {
    return this.to('CreateOneTimeLoginSession');
  }

  /**
   * Grants permission to create a private connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_CreatePrivateConnection.html
   */
  public toCreatePrivateConnection() {
    return this.to('CreatePrivateConnection');
  }

  /**
   * Grants permission to delete agentspace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_DeleteAgentSpace.html
   */
  public toDeleteAgentSpace() {
    return this.to('DeleteAgentSpace');
  }

  /**
   * Grants permission to delete an asset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_DeleteAsset.html
   */
  public toDeleteAsset() {
    return this.to('DeleteAsset');
  }

  /**
   * Grants permission to delete an asset file
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_DeleteAssetFile.html
   */
  public toDeleteAssetFile() {
    return this.to('DeleteAssetFile');
  }

  /**
   * Grants permission to delete a knowledge item
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/what-is.html
   */
  public toDeleteKnowledgeItem() {
    return this.to('DeleteKnowledgeItem');
  }

  /**
   * Grants permission to delete a private connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_DeletePrivateConnection.html
   */
  public toDeletePrivateConnection() {
    return this.to('DeletePrivateConnection');
  }

  /**
   * Grants permission to deregister a service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_DeregisterService.html
   */
  public toDeregisterService() {
    return this.to('DeregisterService');
  }

  /**
   * Grants permission to describe a private connection
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_DescribePrivateConnection.html
   */
  public toDescribePrivateConnection() {
    return this.to('DescribePrivateConnection');
  }

  /**
   * Grants permission to describe support services
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/what-is.html
   */
  public toDescribeServices() {
    return this.to('DescribeServices');
  }

  /**
   * Grants permission to describe customer support level
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/what-is.html
   */
  public toDescribeSupportLevel() {
    return this.to('DescribeSupportLevel');
  }

  /**
   * Grants permission to disable the Operator App access to the given AgentSpace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_DisableOperatorApp.html
   */
  public toDisableOperatorApp() {
    return this.to('DisableOperatorApp');
  }

  /**
   * Grants permission to disassociate service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_DisassociateService.html
   */
  public toDisassociateService() {
    return this.to('DisassociateService');
  }

  /**
   * Grants permission to discover topology information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/what-is.html
   */
  public toDiscoverTopology() {
    return this.to('DiscoverTopology');
  }

  /**
   * Grants permission to enable the Operator App to access the given AgentSpace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_EnableOperatorApp.html
   */
  public toEnableOperatorApp() {
    return this.to('EnableOperatorApp');
  }

  /**
   * Grants permission to end a chat for a case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/what-is.html
   */
  public toEndChatForCase() {
    return this.to('EndChatForCase');
  }

  /**
   * Grants permission to retrieve account usage information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_GetAccountUsage.html
   */
  public toGetAccountUsage() {
    return this.to('GetAccountUsage');
  }

  /**
   * Grants permission to get agentspace
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_GetAgentSpace.html
   */
  public toGetAgentSpace() {
    return this.to('GetAgentSpace');
  }

  /**
   * Grants permission to get an asset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_GetAsset.html
   */
  public toGetAsset() {
    return this.to('GetAsset');
  }

  /**
   * Grants permission to get asset content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_GetAssetContent.html
   */
  public toGetAssetContent() {
    return this.to('GetAssetContent');
  }

  /**
   * Grants permission to get an asset file
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_GetAssetFile.html
   */
  public toGetAssetFile() {
    return this.to('GetAssetFile');
  }

  /**
   * Grants permission to get association
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_GetAssociation.html
   */
  public toGetAssociation() {
    return this.to('GetAssociation');
  }

  /**
   * Grants permission to get a backlog task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_GetBacklogTask.html
   */
  public toGetBacklogTask() {
    return this.to('GetBacklogTask');
  }

  /**
   * Grants permission to get a knowledge item
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/what-is.html
   */
  public toGetKnowledgeItem() {
    return this.to('GetKnowledgeItem');
  }

  /**
   * Grants permission to get operator auth config for any enabled auth flow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_GetOperatorApp.html
   */
  public toGetOperatorApp() {
    return this.to('GetOperatorApp');
  }

  /**
   * Grants permission to get a recommendation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_GetRecommendation.html
   */
  public toGetRecommendation() {
    return this.to('GetRecommendation');
  }

  /**
   * Grants permission to get services
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_GetService.html
   */
  public toGetService() {
    return this.to('GetService');
  }

  /**
   * Grants permission to initiate a chat for a case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/what-is.html
   */
  public toInitiateChatForCase() {
    return this.to('InitiateChatForCase');
  }

  /**
   * Grants permission to list agentspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListAgentSpaces.html
   */
  public toListAgentSpaces() {
    return this.to('ListAgentSpaces');
  }

  /**
   * Grants permission to list asset files
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListAssetFiles.html
   */
  public toListAssetFiles() {
    return this.to('ListAssetFiles');
  }

  /**
   * Grants permission to list asset types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListAssetTypes.html
   */
  public toListAssetTypes() {
    return this.to('ListAssetTypes');
  }

  /**
   * Grants permission to list asset versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListAssetVersions.html
   */
  public toListAssetVersions() {
    return this.to('ListAssetVersions');
  }

  /**
   * Grants permission to list assets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListAssets.html
   */
  public toListAssets() {
    return this.to('ListAssets');
  }

  /**
   * Grants permission to list associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListAssociations.html
   */
  public toListAssociations() {
    return this.to('ListAssociations');
  }

  /**
   * Grants permission to list backlog tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListBacklogTasks.html
   */
  public toListBacklogTasks() {
    return this.to('ListBacklogTasks');
  }

  /**
   * Grants permission to list chats
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListChats.html
   */
  public toListChats() {
    return this.to('ListChats');
  }

  /**
   * Grants permission to list executions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListExecutions.html
   */
  public toListExecutions() {
    return this.to('ListExecutions');
  }

  /**
   * Grants permission to list goals
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListGoals.html
   */
  public toListGoals() {
    return this.to('ListGoals');
  }

  /**
   * Grants permission to list journal records
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListJournalRecords.html
   */
  public toListJournalRecords() {
    return this.to('ListJournalRecords');
  }

  /**
   * Grants permission to list knowledge item versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/what-is.html
   */
  public toListKnowledgeItemVersions() {
    return this.to('ListKnowledgeItemVersions');
  }

  /**
   * Grants permission to list knowledge items
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/what-is.html
   */
  public toListKnowledgeItems() {
    return this.to('ListKnowledgeItems');
  }

  /**
   * Grants permission to list pending messages
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListPendingMessages.html
   */
  public toListPendingMessages() {
    return this.to('ListPendingMessages');
  }

  /**
   * Grants permission to list private connections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListPrivateConnections.html
   */
  public toListPrivateConnections() {
    return this.to('ListPrivateConnections');
  }

  /**
   * Grants permission to list recommendations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListRecommendations.html
   */
  public toListRecommendations() {
    return this.to('ListRecommendations');
  }

  /**
   * Grants permission to list services
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListServices.html
   */
  public toListServices() {
    return this.to('ListServices');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list webhooks for association
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ListWebhooks.html
   */
  public toListWebhooks() {
    return this.to('ListWebhooks');
  }

  /**
   * Grants permission to register specific service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_RegisterService.html
   */
  public toRegisterService() {
    return this.to('RegisterService');
  }

  /**
   * Grants permission to look up a registered service accessible resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/what-is.html
   */
  public toSearchServiceAccessibleResource() {
    return this.to('SearchServiceAccessibleResource');
  }

  /**
   * Grants permission to send chat messages
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_SendMessage.html
   */
  public toSendMessage() {
    return this.to('SendMessage');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update agentspace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_UpdateAgentSpace.html
   */
  public toUpdateAgentSpace() {
    return this.to('UpdateAgentSpace');
  }

  /**
   * Grants permission to update an asset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_UpdateAsset.html
   */
  public toUpdateAsset() {
    return this.to('UpdateAsset');
  }

  /**
   * Grants permission to update an asset file
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_UpdateAssetFile.html
   */
  public toUpdateAssetFile() {
    return this.to('UpdateAssetFile');
  }

  /**
   * Grants permission to update association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_UpdateAssociation.html
   */
  public toUpdateAssociation() {
    return this.to('UpdateAssociation');
  }

  /**
   * Grants permission to update a task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_UpdateBacklogTask.html
   */
  public toUpdateBacklogTask() {
    return this.to('UpdateBacklogTask');
  }

  /**
   * Grants permission to update a goal
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_UpdateGoal.html
   */
  public toUpdateGoal() {
    return this.to('UpdateGoal');
  }

  /**
   * Grants permission to update a knowledge item
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/what-is.html
   */
  public toUpdateKnowledgeItem() {
    return this.to('UpdateKnowledgeItem');
  }

  /**
   * Grants permission to update the external Identity Provider configuration for the Operator App
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_UpdateOperatorAppIdpConfig.html
   */
  public toUpdateOperatorAppIdpConfig() {
    return this.to('UpdateOperatorAppIdpConfig');
  }

  /**
   * Grants permission to update a private connection certificate
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_UpdatePrivateConnectionCertificate.html
   */
  public toUpdatePrivateConnectionCertificate() {
    return this.to('UpdatePrivateConnectionCertificate');
  }

  /**
   * Grants permission to update a recommendation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_UpdateRecommendation.html
   */
  public toUpdateRecommendation() {
    return this.to('UpdateRecommendation');
  }

  /**
   * Grants permission to validate aws association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/APIReference/API_ValidateAwsAssociations.html
   */
  public toValidateAwsAssociations() {
    return this.to('ValidateAwsAssociations');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AllowVendedLogDeliveryForResource'
    ],
    Write: [
      'AssociateService',
      'CreateAgentSpace',
      'CreateAsset',
      'CreateAssetFile',
      'CreateBacklogTask',
      'CreateChat',
      'CreateKnowledgeItem',
      'CreateOneTimeLoginSession',
      'CreatePrivateConnection',
      'DeleteAgentSpace',
      'DeleteAsset',
      'DeleteAssetFile',
      'DeleteKnowledgeItem',
      'DeletePrivateConnection',
      'DeregisterService',
      'DescribeSupportLevel',
      'DisableOperatorApp',
      'DisassociateService',
      'DiscoverTopology',
      'EnableOperatorApp',
      'EndChatForCase',
      'InitiateChatForCase',
      'RegisterService',
      'SendMessage',
      'UpdateAgentSpace',
      'UpdateAsset',
      'UpdateAssetFile',
      'UpdateAssociation',
      'UpdateBacklogTask',
      'UpdateGoal',
      'UpdateKnowledgeItem',
      'UpdateOperatorAppIdpConfig',
      'UpdatePrivateConnectionCertificate',
      'UpdateRecommendation',
      'ValidateAwsAssociations'
    ],
    Read: [
      'DescribePrivateConnection',
      'DescribeServices',
      'GetAccountUsage',
      'GetAgentSpace',
      'GetAsset',
      'GetAssetContent',
      'GetAssetFile',
      'GetAssociation',
      'GetBacklogTask',
      'GetKnowledgeItem',
      'GetOperatorApp',
      'GetRecommendation',
      'GetService',
      'ListTagsForResource',
      'SearchServiceAccessibleResource'
    ],
    List: [
      'ListAgentSpaces',
      'ListAssetFiles',
      'ListAssetTypes',
      'ListAssetVersions',
      'ListAssets',
      'ListAssociations',
      'ListBacklogTasks',
      'ListChats',
      'ListExecutions',
      'ListGoals',
      'ListJournalRecords',
      'ListKnowledgeItemVersions',
      'ListKnowledgeItems',
      'ListPendingMessages',
      'ListPrivateConnections',
      'ListRecommendations',
      'ListServices',
      'ListWebhooks'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type agentspace to the statement
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/
   *
   * @param agentSpaceId - Identifier for the agentSpaceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAgentspace(agentSpaceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aidevops:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agentspace/${ agentSpaceId }`);
  }

  /**
   * Adds a resource of type associations to the statement
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/
   *
   * @param agentSpaceId - Identifier for the agentSpaceId.
   * @param associationId - Identifier for the associationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAssociations(agentSpaceId: string, associationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aidevops:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agentspace/${ agentSpaceId }/association/${ associationId }`);
  }

  /**
   * Adds a resource of type private-connection to the statement
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPrivateConnection(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aidevops:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:private-connection/${ name }`);
  }

  /**
   * Adds a resource of type service to the statement
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/
   *
   * @param serviceId - Identifier for the serviceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onService(serviceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aidevops:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:service/${ serviceId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAgentSpace()
   * - .toCreatePrivateConnection()
   * - .toListTagsForResource()
   * - .toRegisterService()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateAgentSpace()
   * - .toCreatePrivateConnection()
   * - .toDeleteAgentSpace()
   * - .toDeletePrivateConnection()
   * - .toDeregisterService()
   * - .toDescribePrivateConnection()
   * - .toGetAgentSpace()
   * - .toGetService()
   * - .toListTagsForResource()
   * - .toRegisterService()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateAgentSpace()
   * - .toUpdatePrivateConnectionCertificate()
   *
   * Applies to resource types:
   * - agentspace
   * - private-connection
   * - service
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAgentSpace()
   * - .toCreatePrivateConnection()
   * - .toListTagsForResource()
   * - .toRegisterService()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
