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
   * Grants permission to associate service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toAssociateService() {
    return this.to('AssociateService');
  }

  /**
   * Grants permission to create agentspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toCreateAgentSpace() {
    return this.to('CreateAgentSpace');
  }

  /**
   * Grants permission to create a new backlog task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toCreateBacklogTask() {
    return this.to('CreateBacklogTask');
  }

  /**
   * Grants permission to create a new knowledge item
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toCreateKnowledgeItem() {
    return this.to('CreateKnowledgeItem');
  }

  /**
   * Grants permission to generate secure one-time session for initiating off-console Application login
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toCreateOneTimeLoginSession() {
    return this.to('CreateOneTimeLoginSession');
  }

  /**
   * Grants permission to delete agentspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toDeleteAgentSpace() {
    return this.to('DeleteAgentSpace');
  }

  /**
   * Grants permission to delete a knowledge item
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toDeleteKnowledgeItem() {
    return this.to('DeleteKnowledgeItem');
  }

  /**
   * Grants permission to deregister a service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toDeregisterService() {
    return this.to('DeregisterService');
  }

  /**
   * Grants permission to describe a chat for a case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toDescribeSupportLevel() {
    return this.to('DescribeSupportLevel');
  }

  /**
   * Grants permission to disable the Operator App access to the given AgentSpace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toDisableOperatorApp() {
    return this.to('DisableOperatorApp');
  }

  /**
   * Grants permission to disassociate service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toDisassociateService() {
    return this.to('DisassociateService');
  }

  /**
   * Grants permission to discover topology information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toDiscoverTopology() {
    return this.to('DiscoverTopology');
  }

  /**
   * Grants permission to enable the Operator App to access the given AgentSpace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toEnableOperatorApp() {
    return this.to('EnableOperatorApp');
  }

  /**
   * Grants permission to end a chat for a case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toEndChatForCase() {
    return this.to('EndChatForCase');
  }

  /**
   * Grants permission to get account usage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toGetAccountUsage() {
    return this.to('GetAccountUsage');
  }

  /**
   * Grants permission to get agentspace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toGetAgentSpace() {
    return this.to('GetAgentSpace');
  }

  /**
   * Grants permission to get association
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toGetAssociation() {
    return this.to('GetAssociation');
  }

  /**
   * Grants permission to get a backlog task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toGetBacklogTask() {
    return this.to('GetBacklogTask');
  }

  /**
   * Grants permission to get a knowledge item
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toGetKnowledgeItem() {
    return this.to('GetKnowledgeItem');
  }

  /**
   * Grants permission to enable operator auth config for any enabled auth flow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toGetOperatorAppTeams() {
    return this.to('GetOperatorAppTeams');
  }

  /**
   * Grants permission to get a recommendation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toGetRecommendation() {
    return this.to('GetRecommendation');
  }

  /**
   * Grants permission to get services
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toGetService() {
    return this.to('GetService');
  }

  /**
   * Grants permission to handle OAuth callback from external service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toHandleServiceRegistrationCallback() {
    return this.to('HandleServiceRegistrationCallback');
  }

  /**
   * Grants permission to initiate a chat for a case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toInitiateChatForCase() {
    return this.to('InitiateChatForCase');
  }

  /**
   * Grants permission to initiate OAuth flow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toInitiateServiceRegistration() {
    return this.to('InitiateServiceRegistration');
  }

  /**
   * Grants permission to list agentspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toListAgentSpaces() {
    return this.to('ListAgentSpaces');
  }

  /**
   * Grants permission to list associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toListAssociations() {
    return this.to('ListAssociations');
  }

  /**
   * Grants permission to list backlog tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toListBacklogTasks() {
    return this.to('ListBacklogTasks');
  }

  /**
   * Grants permission to list executions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toListExecutions() {
    return this.to('ListExecutions');
  }

  /**
   * Grants permission to list goals
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toListGoals() {
    return this.to('ListGoals');
  }

  /**
   * Grants permission to list journal records
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toListJournalRecords() {
    return this.to('ListJournalRecords');
  }

  /**
   * Grants permission to list knowledge items
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toListKnowledgeItems() {
    return this.to('ListKnowledgeItems');
  }

  /**
   * Grants permission to list pending messages
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toListPendingMessages() {
    return this.to('ListPendingMessages');
  }

  /**
   * Grants permission to list recommendations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toListRecommendations() {
    return this.to('ListRecommendations');
  }

  /**
   * Grants permission to list services
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toListServices() {
    return this.to('ListServices');
  }

  /**
   * Grants permission to list webhooks for association
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toListWebhooks() {
    return this.to('ListWebhooks');
  }

  /**
   * Grants permission to register specific service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toRegisterService() {
    return this.to('RegisterService');
  }

  /**
   * Grants permission to look up a registered service accessible resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toSearchServiceAccessibleResource() {
    return this.to('SearchServiceAccessibleResource');
  }

  /**
   * Grants permission to invoke an agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toSendChatMessage() {
    return this.to('SendChatMessage');
  }

  /**
   * Grants permission to update agentspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toUpdateAgentSpace() {
    return this.to('UpdateAgentSpace');
  }

  /**
   * Grants permission to update association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toUpdateAssociation() {
    return this.to('UpdateAssociation');
  }

  /**
   * Grants permission to update a task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toUpdateBacklogTask() {
    return this.to('UpdateBacklogTask');
  }

  /**
   * Grants permission to update a knowledge item
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toUpdateKnowledgeItem() {
    return this.to('UpdateKnowledgeItem');
  }

  /**
   * Grants permission to update the list of teams that the Operator App is enabled for
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toUpdateOperatorAppTeams() {
    return this.to('UpdateOperatorAppTeams');
  }

  /**
   * Grants permission to update a recommendation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/what-is.html
   */
  public toUpdateRecommendation() {
    return this.to('UpdateRecommendation');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateService',
      'CreateAgentSpace',
      'CreateBacklogTask',
      'CreateKnowledgeItem',
      'CreateOneTimeLoginSession',
      'DeleteAgentSpace',
      'DeleteKnowledgeItem',
      'DeregisterService',
      'DescribeSupportLevel',
      'DisableOperatorApp',
      'DisassociateService',
      'DiscoverTopology',
      'EnableOperatorApp',
      'EndChatForCase',
      'InitiateChatForCase',
      'RegisterService',
      'SendChatMessage',
      'UpdateAgentSpace',
      'UpdateAssociation',
      'UpdateBacklogTask',
      'UpdateKnowledgeItem',
      'UpdateOperatorAppTeams',
      'UpdateRecommendation'
    ],
    Read: [
      'GetAccountUsage',
      'GetAgentSpace',
      'GetAssociation',
      'GetBacklogTask',
      'GetKnowledgeItem',
      'GetOperatorAppTeams',
      'GetRecommendation',
      'GetService',
      'HandleServiceRegistrationCallback',
      'InitiateServiceRegistration',
      'SearchServiceAccessibleResource'
    ],
    List: [
      'ListAgentSpaces',
      'ListAssociations',
      'ListBacklogTasks',
      'ListExecutions',
      'ListGoals',
      'ListJournalRecords',
      'ListKnowledgeItems',
      'ListPendingMessages',
      'ListRecommendations',
      'ListServices',
      'ListWebhooks'
    ]
  };

  /**
   * Adds a resource of type AgentSpaceResource to the statement
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/
   *
   * @param agentSpaceId - Identifier for the agentSpaceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAgentSpaceResourceAgentSpaceId()
   */
  public onAgentSpaceResource(agentSpaceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aidevops:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agentspace/${ agentSpaceId }`);
  }

  /**
   * Adds a resource of type AssociationResource to the statement
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/
   *
   * @param agentSpaceId - Identifier for the agentSpaceId.
   * @param associationId - Identifier for the associationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAssociationResourceAgentSpaceId()
   * - .ifAssociationResourceAssociationId()
   */
  public onAssociationResource(agentSpaceId: string, associationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aidevops:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agentspace/${ agentSpaceId }/associations/${ associationId }`);
  }

  /**
   * Adds a resource of type ServiceResource to the statement
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/
   *
   * @param serviceId - Identifier for the serviceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifServiceResourceServiceId()
   */
  public onServiceResource(serviceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aidevops:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:service/${ serviceId }`);
  }

  /**
   * Filters access by unique identifier for an AgentSpace
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/
   *
   * Applies to resource types:
   * - AgentSpaceResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentSpaceResourceAgentSpaceId(value: string | string[], operator?: Operator | string) {
    return this.if(`AgentSpaceResourceAgentSpaceId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by unique identifier for an AgentSpace
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/
   *
   * Applies to resource types:
   * - AssociationResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAssociationResourceAgentSpaceId(value: string | string[], operator?: Operator | string) {
    return this.if(`AssociationResourceAgentSpaceId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by unique identifier for a service association within an AgentSpace
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/
   *
   * Applies to resource types:
   * - AssociationResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAssociationResourceAssociationId(value: string | string[], operator?: Operator | string) {
    return this.if(`AssociationResourceAssociationId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by unique identifier for a registered service
   *
   * https://docs.aws.amazon.com/devopsagent/latest/userguide/
   *
   * Applies to resource types:
   * - ServiceResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifServiceResourceServiceId(value: string | string[], operator?: Operator | string) {
    return this.if(`ServiceResourceServiceId`, value, operator ?? 'StringLike');
  }
}
