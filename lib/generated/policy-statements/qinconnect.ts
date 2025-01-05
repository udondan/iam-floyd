import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [wisdom](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqinconnect.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Wisdom extends PolicyStatement {
  public servicePrefix = 'wisdom';

  /**
   * Statement provider for service [wisdom](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqinconnect.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to activate a message template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ActivateMessageTemplate.html
   */
  public toActivateMessageTemplate() {
    return this.to('ActivateMessageTemplate');
  }

  /**
   * Grants permission to configure vended log delivery for an assistant
   *
   * Access Level: Permissions management
   */
  public toAllowVendedLogDeliveryForResource() {
    return this.to('AllowVendedLogDeliveryForResource');
  }

  /**
   * Grants permission to create an ai agent
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateAIAgent.html
   */
  public toCreateAIAgent() {
    return this.to('CreateAIAgent');
  }

  /**
   * Grants permission to create an ai agent version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateAIAgentVersion.html
   */
  public toCreateAIAgentVersion() {
    return this.to('CreateAIAgentVersion');
  }

  /**
   * Grants permission to create an ai guardrail
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateAIGuardrail.html
   */
  public toCreateAIGuardrail() {
    return this.to('CreateAIGuardrail');
  }

  /**
   * Grants permission to create an ai guardrail version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateAIGuardrailVersion.html
   */
  public toCreateAIGuardrailVersion() {
    return this.to('CreateAIGuardrailVersion');
  }

  /**
   * Grants permission to create an ai prompt
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateAIPrompt.html
   */
  public toCreateAIPrompt() {
    return this.to('CreateAIPrompt');
  }

  /**
   * Grants permission to create an ai prompt version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateAIPromptVersion.html
   */
  public toCreateAIPromptVersion() {
    return this.to('CreateAIPromptVersion');
  }

  /**
   * Grants permission to create an assistant
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateAssistant.html
   */
  public toCreateAssistant() {
    return this.to('CreateAssistant');
  }

  /**
   * Grants permission to create an association between an assistant and another resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateAssistantAssociation.html
   */
  public toCreateAssistantAssociation() {
    return this.to('CreateAssistantAssociation');
  }

  /**
   * Grants permission to create content
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html
   */
  public toCreateContent() {
    return this.to('CreateContent');
  }

  /**
   * Grants permission to create a content association
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContentAssociation.html
   */
  public toCreateContentAssociation() {
    return this.to('CreateContentAssociation');
  }

  /**
   * Grants permission to create a knowledge base
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateKnowledgeBase.html
   */
  public toCreateKnowledgeBase() {
    return this.to('CreateKnowledgeBase');
  }

  /**
   * Grants permission to create a message template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateMessageTemplate.html
   */
  public toCreateMessageTemplate() {
    return this.to('CreateMessageTemplate');
  }

  /**
   * Grants permission to create an attachment to a message template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateMessageTemplateAttachment.html
   */
  public toCreateMessageTemplateAttachment() {
    return this.to('CreateMessageTemplateAttachment');
  }

  /**
   * Grants permission to create a version of a message template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateMessageTemplateVersion.html
   */
  public toCreateMessageTemplateVersion() {
    return this.to('CreateMessageTemplateVersion');
  }

  /**
   * Grants permission to create quick response
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateQuickResponse.html
   */
  public toCreateQuickResponse() {
    return this.to('CreateQuickResponse');
  }

  /**
   * Grants permission to create a session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateSession.html
   */
  public toCreateSession() {
    return this.to('CreateSession');
  }

  /**
   * Grants permission to deactivate a message template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeactivateMessageTemplate.html
   */
  public toDeactivateMessageTemplate() {
    return this.to('DeactivateMessageTemplate');
  }

  /**
   * Grants permission to delete an ai agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteAIAgent.html
   */
  public toDeleteAIAgent() {
    return this.to('DeleteAIAgent');
  }

  /**
   * Grants permission to delete an ai agent version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteAIAgentVersion.html
   */
  public toDeleteAIAgentVersion() {
    return this.to('DeleteAIAgentVersion');
  }

  /**
   * Grants permission to delete an ai guardrail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteAIGuardrail.html
   */
  public toDeleteAIGuardrail() {
    return this.to('DeleteAIGuardrail');
  }

  /**
   * Grants permission to delete an ai guardrail version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteAIGuardrailVersion.html
   */
  public toDeleteAIGuardrailVersion() {
    return this.to('DeleteAIGuardrailVersion');
  }

  /**
   * Grants permission to delete an ai prompt
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteAIPrompt.html
   */
  public toDeleteAIPrompt() {
    return this.to('DeleteAIPrompt');
  }

  /**
   * Grants permission to delete an ai prompt version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteAIPromptVersion.html
   */
  public toDeleteAIPromptVersion() {
    return this.to('DeleteAIPromptVersion');
  }

  /**
   * Grants permission to delete an assistant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteAssistant.html
   */
  public toDeleteAssistant() {
    return this.to('DeleteAssistant');
  }

  /**
   * Grants permission to delete an assistant association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteAssistantAssociation.html
   */
  public toDeleteAssistantAssociation() {
    return this.to('DeleteAssistantAssociation');
  }

  /**
   * Grants permission to delete content
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteContent.html
   */
  public toDeleteContent() {
    return this.to('DeleteContent');
  }

  /**
   * Grants permission to delete a content association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteContentAssociation.html
   */
  public toDeleteContentAssociation() {
    return this.to('DeleteContentAssociation');
  }

  /**
   * Grants permission to delete a import job of a knowledge base
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteImportJob.html
   */
  public toDeleteImportJob() {
    return this.to('DeleteImportJob');
  }

  /**
   * Grants permission to delete a knowledge base
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html
   */
  public toDeleteKnowledgeBase() {
    return this.to('DeleteKnowledgeBase');
  }

  /**
   * Grants permission to delete a message template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteMessageTemplate.html
   */
  public toDeleteMessageTemplate() {
    return this.to('DeleteMessageTemplate');
  }

  /**
   * Grants permission to delete an attachment from a message template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteMessageTemplateAttachment.html
   */
  public toDeleteMessageTemplateAttachment() {
    return this.to('DeleteMessageTemplateAttachment');
  }

  /**
   * Grants permission to delete quick response
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteQuickResponse.html
   */
  public toDeleteQuickResponse() {
    return this.to('DeleteQuickResponse');
  }

  /**
   * Grants permission to retrieve information about an ai agent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetAIAgent.html
   */
  public toGetAIAgent() {
    return this.to('GetAIAgent');
  }

  /**
   * Grants permission to retrieve information about an ai guardrail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetAIGuardrail.html
   */
  public toGetAIGuardrail() {
    return this.to('GetAIGuardrail');
  }

  /**
   * Grants permission to retrieve information about an ai prompt
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetAIPrompt.html
   */
  public toGetAIPrompt() {
    return this.to('GetAIPrompt');
  }

  /**
   * Grants permission to retrieve information about an assistant
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetAssistant.html
   */
  public toGetAssistant() {
    return this.to('GetAssistant');
  }

  /**
   * Grants permission to retrieve information about an assistant association
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetAssistantAssociation.html
   */
  public toGetAssistantAssociation() {
    return this.to('GetAssistantAssociation');
  }

  /**
   * Grants permission to retrieve content, including a pre-signed URL to download the content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetContent.html
   */
  public toGetContent() {
    return this.to('GetContent');
  }

  /**
   * Grants permission to retrieve information about a content association
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetContentAssociation.html
   */
  public toGetContentAssociation() {
    return this.to('GetContentAssociation');
  }

  /**
   * Grants permission to retrieve summary information about the content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetContentSummary.html
   */
  public toGetContentSummary() {
    return this.to('GetContentSummary');
  }

  /**
   * Grants permission to retrieve information about the import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetImportJob.html
   */
  public toGetImportJob() {
    return this.to('GetImportJob');
  }

  /**
   * Grants permission to retrieve information about the knowledge base
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetKnowledgeBase.html
   */
  public toGetKnowledgeBase() {
    return this.to('GetKnowledgeBase');
  }

  /**
   * Grants permission to retrieve a message template
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifMessageTemplateRoutingProfileArn()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetMessageTemplate.html
   */
  public toGetMessageTemplate() {
    return this.to('GetMessageTemplate');
  }

  /**
   * Grants permission to retrieve for next message in a session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetNextMessage.html
   */
  public toGetNextMessage() {
    return this.to('GetNextMessage');
  }

  /**
   * Grants permission to retrieve content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetQuickResponse.html
   */
  public toGetQuickResponse() {
    return this.to('GetQuickResponse');
  }

  /**
   * Grants permission to retrieve recommendations for the specified session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html
   */
  public toGetRecommendations() {
    return this.to('GetRecommendations');
  }

  /**
   * Grants permission to retrieve information for a specified session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetSession.html
   */
  public toGetSession() {
    return this.to('GetSession');
  }

  /**
   * Grants permission to list information about ai agent versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListAIAgentVersions.html
   */
  public toListAIAgentVersions() {
    return this.to('ListAIAgentVersions');
  }

  /**
   * Grants permission to list information about ai agents
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListAIAgents.html
   */
  public toListAIAgents() {
    return this.to('ListAIAgents');
  }

  /**
   * Grants permission to list information about ai guardrail versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListAIGuardrailVersions.html
   */
  public toListAIGuardrailVersions() {
    return this.to('ListAIGuardrailVersions');
  }

  /**
   * Grants permission to list information about ai guardrails
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListAIGuardrails.html
   */
  public toListAIGuardrails() {
    return this.to('ListAIGuardrails');
  }

  /**
   * Grants permission to list information about ai prompt versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListAIPromptVersions.html
   */
  public toListAIPromptVersions() {
    return this.to('ListAIPromptVersions');
  }

  /**
   * Grants permission to list information about ai prompts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListAIPrompts.html
   */
  public toListAIPrompts() {
    return this.to('ListAIPrompts');
  }

  /**
   * Grants permission to list information about assistant associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListAssistantAssociations.html
   */
  public toListAssistantAssociations() {
    return this.to('ListAssistantAssociations');
  }

  /**
   * Grants permission to list information about assistants
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListAssistants.html
   */
  public toListAssistants() {
    return this.to('ListAssistants');
  }

  /**
   * Grants permission to list information about content associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListContentAssociations.html
   */
  public toListContentAssociations() {
    return this.to('ListContentAssociations');
  }

  /**
   * Grants permission to list the content with a knowledge base
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListContents.html
   */
  public toListContents() {
    return this.to('ListContents');
  }

  /**
   * Grants permission to list information about knowledge bases
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListImportJobs.html
   */
  public toListImportJobs() {
    return this.to('ListImportJobs');
  }

  /**
   * Grants permission to list information about knowledge bases
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListKnowledgeBases.html
   */
  public toListKnowledgeBases() {
    return this.to('ListKnowledgeBases');
  }

  /**
   * Grants permission to list message template versions for the specified message template
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListMessageTemplateVersions.html
   */
  public toListMessageTemplateVersions() {
    return this.to('ListMessageTemplateVersions');
  }

  /**
   * Grants permission to list the message templates for a knowledge base
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListMessageTemplates.html
   */
  public toListMessageTemplates() {
    return this.to('ListMessageTemplates');
  }

  /**
   * Grants permission to list messages in a session
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListMessages.html
   */
  public toListMessages() {
    return this.to('ListMessages');
  }

  /**
   * Grants permission to list the quick response with a knowledge base
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListQuickResponses.html
   */
  public toListQuickResponses() {
    return this.to('ListQuickResponses');
  }

  /**
   * Grants permission to list the tags for the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to remove the specified recommendations from the specified assistant's queue of newly available recommendations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html
   */
  public toNotifyRecommendationsReceived() {
    return this.to('NotifyRecommendationsReceived');
  }

  /**
   * Grants permission to submit feedback
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_PutFeedback.html
   */
  public toPutFeedback() {
    return this.to('PutFeedback');
  }

  /**
   * Grants permission to perform a manual search against the specified assistant
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html
   */
  public toQueryAssistant() {
    return this.to('QueryAssistant');
  }

  /**
   * Grants permission to remove an ai agent from an assistant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_RemoveAssistantAIAgent.html
   */
  public toRemoveAssistantAIAgent() {
    return this.to('RemoveAssistantAIAgent');
  }

  /**
   * Grants permission to remove a URI template from a knowledge base
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_RemoveKnowledgeBaseTemplateUri.html
   */
  public toRemoveKnowledgeBaseTemplateUri() {
    return this.to('RemoveKnowledgeBaseTemplateUri');
  }

  /**
   * Grants permission to render a message template
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifMessageTemplateRoutingProfileArn()
   *
   * Dependent actions:
   * - wisdom:GetMessageTemplate
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_RenderMessageTemplate.html
   */
  public toRenderMessageTemplate() {
    return this.to('RenderMessageTemplate');
  }

  /**
   * Grants permission to search for content referencing a specified knowledge base. Can be used to get a specific content resource by its name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchContent.html
   */
  public toSearchContent() {
    return this.to('SearchContent');
  }

  /**
   * Grants permission to search for message templates referencing a specified knowledge base
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifSearchFilterRoutingProfileArn()
   * - .ifSearchFilterQualifier()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchMessageTemplates.html
   */
  public toSearchMessageTemplates() {
    return this.to('SearchMessageTemplates');
  }

  /**
   * Grants permission to search for quick response referencing a specified knowledge base
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifSearchFilterRoutingProfileArn()
   *
   * Dependent actions:
   * - wisdom:GetQuickResponse
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchQuickResponses.html
   */
  public toSearchQuickResponses() {
    return this.to('SearchQuickResponses');
  }

  /**
   * Grants permission to search for sessions referencing a specified assistant. Can be used to et a specific session resource by its name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchSessions.html
   */
  public toSearchSessions() {
    return this.to('SearchSessions');
  }

  /**
   * Grants permission to send a message
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SendMessage.html
   */
  public toSendMessage() {
    return this.to('SendMessage');
  }

  /**
   * Grants permission to get a URL to upload content to a knowledge base
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html
   */
  public toStartContentUpload() {
    return this.to('StartContentUpload');
  }

  /**
   * Grants permission to create multiple quick responses
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartImportJob.html
   */
  public toStartImportJob() {
    return this.to('StartImportJob');
  }

  /**
   * Grants permission to add the specified tags to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the specified tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update information about an ai agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateAIAgent.html
   */
  public toUpdateAIAgent() {
    return this.to('UpdateAIAgent');
  }

  /**
   * Grants permission to update information about an ai guardrail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateAIGuardrail.html
   */
  public toUpdateAIGuardrail() {
    return this.to('UpdateAIGuardrail');
  }

  /**
   * Grants permission to update information about an ai prompt
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateAIPrompt.html
   */
  public toUpdateAIPrompt() {
    return this.to('UpdateAIPrompt');
  }

  /**
   * Grants permission to update assistant information about an ai agent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateAssistantAIAgent.html
   */
  public toUpdateAssistantAIAgent() {
    return this.to('UpdateAssistantAIAgent');
  }

  /**
   * Grants permission to update information about the content
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html
   */
  public toUpdateContent() {
    return this.to('UpdateContent');
  }

  /**
   * Grants permission to update the template URI of a knowledge base
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateKnowledgeBaseTemplateUri.html
   */
  public toUpdateKnowledgeBaseTemplateUri() {
    return this.to('UpdateKnowledgeBaseTemplateUri');
  }

  /**
   * Grants permission to update content of the message template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateMessageTemplate.html
   */
  public toUpdateMessageTemplate() {
    return this.to('UpdateMessageTemplate');
  }

  /**
   * Grants permission to update metadata of the message template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateMessageTemplateMetadata.html
   */
  public toUpdateMessageTemplateMetadata() {
    return this.to('UpdateMessageTemplateMetadata');
  }

  /**
   * Grants permission to update information or content of the quick response
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateQuickResponse.html
   */
  public toUpdateQuickResponse() {
    return this.to('UpdateQuickResponse');
  }

  /**
   * Grants permission to update a session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateSession.html
   */
  public toUpdateSession() {
    return this.to('UpdateSession');
  }

  /**
   * Grants permission to update data stored in a session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateSessionData.html
   */
  public toUpdateSessionData() {
    return this.to('UpdateSessionData');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ActivateMessageTemplate',
      'CreateAIAgent',
      'CreateAIAgentVersion',
      'CreateAIGuardrail',
      'CreateAIGuardrailVersion',
      'CreateAIPrompt',
      'CreateAIPromptVersion',
      'CreateAssistant',
      'CreateAssistantAssociation',
      'CreateContent',
      'CreateContentAssociation',
      'CreateKnowledgeBase',
      'CreateMessageTemplate',
      'CreateMessageTemplateAttachment',
      'CreateMessageTemplateVersion',
      'CreateQuickResponse',
      'CreateSession',
      'DeactivateMessageTemplate',
      'DeleteAIAgent',
      'DeleteAIAgentVersion',
      'DeleteAIGuardrail',
      'DeleteAIGuardrailVersion',
      'DeleteAIPrompt',
      'DeleteAIPromptVersion',
      'DeleteAssistant',
      'DeleteAssistantAssociation',
      'DeleteContent',
      'DeleteContentAssociation',
      'DeleteImportJob',
      'DeleteKnowledgeBase',
      'DeleteMessageTemplate',
      'DeleteMessageTemplateAttachment',
      'DeleteQuickResponse',
      'NotifyRecommendationsReceived',
      'PutFeedback',
      'RemoveAssistantAIAgent',
      'RemoveKnowledgeBaseTemplateUri',
      'SendMessage',
      'StartContentUpload',
      'StartImportJob',
      'UpdateAIAgent',
      'UpdateAIGuardrail',
      'UpdateAIPrompt',
      'UpdateAssistantAIAgent',
      'UpdateContent',
      'UpdateKnowledgeBaseTemplateUri',
      'UpdateMessageTemplate',
      'UpdateMessageTemplateMetadata',
      'UpdateQuickResponse',
      'UpdateSession',
      'UpdateSessionData'
    ],
    'Permissions management': [
      'AllowVendedLogDeliveryForResource'
    ],
    Read: [
      'GetAIAgent',
      'GetAIGuardrail',
      'GetAIPrompt',
      'GetAssistant',
      'GetAssistantAssociation',
      'GetContent',
      'GetContentAssociation',
      'GetContentSummary',
      'GetImportJob',
      'GetKnowledgeBase',
      'GetMessageTemplate',
      'GetNextMessage',
      'GetQuickResponse',
      'GetRecommendations',
      'GetSession',
      'ListTagsForResource',
      'QueryAssistant',
      'RenderMessageTemplate',
      'SearchContent',
      'SearchMessageTemplates',
      'SearchQuickResponses',
      'SearchSessions'
    ],
    List: [
      'ListAIAgentVersions',
      'ListAIAgents',
      'ListAIGuardrailVersions',
      'ListAIGuardrails',
      'ListAIPromptVersions',
      'ListAIPrompts',
      'ListAssistantAssociations',
      'ListAssistants',
      'ListContentAssociations',
      'ListContents',
      'ListImportJobs',
      'ListKnowledgeBases',
      'ListMessageTemplateVersions',
      'ListMessageTemplates',
      'ListMessages',
      'ListQuickResponses'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type AIAgent to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_AIAgentData.html
   *
   * @param assistantId - Identifier for the assistantId.
   * @param aIAgentId - Identifier for the aIAgentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAIAgent(assistantId: string, aIAgentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wisdom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ai-agent/${ assistantId }/${ aIAgentId }`);
  }

  /**
   * Adds a resource of type AIPrompt to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_AIPromptData.html
   *
   * @param assistantId - Identifier for the assistantId.
   * @param aIPromptId - Identifier for the aIPromptId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAIPrompt(assistantId: string, aIPromptId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wisdom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ai-prompt/${ assistantId }/${ aIPromptId }`);
  }

  /**
   * Adds a resource of type AIGuardrail to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_AIGuardrailData.html
   *
   * @param assistantId - Identifier for the assistantId.
   * @param aIGuardrailId - Identifier for the aIGuardrailId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAIGuardrail(assistantId: string, aIGuardrailId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wisdom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ai-guardrail/${ assistantId }/${ aIGuardrailId }`);
  }

  /**
   * Adds a resource of type Assistant to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_AssistantData.html
   *
   * @param assistantId - Identifier for the assistantId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAssistant(assistantId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wisdom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:assistant/${ assistantId }`);
  }

  /**
   * Adds a resource of type AssistantAssociation to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_AssistantAssociationData.html
   *
   * @param assistantId - Identifier for the assistantId.
   * @param assistantAssociationId - Identifier for the assistantAssociationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAssistantAssociation(assistantId: string, assistantAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wisdom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:association/${ assistantId }/${ assistantAssociationId }`);
  }

  /**
   * Adds a resource of type Content to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ContentData.html
   *
   * @param knowledgeBaseId - Identifier for the knowledgeBaseId.
   * @param contentId - Identifier for the contentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContent(knowledgeBaseId: string, contentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wisdom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:content/${ knowledgeBaseId }/${ contentId }`);
  }

  /**
   * Adds a resource of type ContentAssociation to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ContentAssociationData.html
   *
   * @param knowledgeBaseId - Identifier for the knowledgeBaseId.
   * @param contentId - Identifier for the contentId.
   * @param contentAssociationId - Identifier for the contentAssociationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContentAssociation(knowledgeBaseId: string, contentId: string, contentAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wisdom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:content-association/${ knowledgeBaseId }/${ contentId }/${ contentAssociationId }`);
  }

  /**
   * Adds a resource of type KnowledgeBase to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_KnowledgeBaseData.html
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:wisdom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:knowledge-base/${ knowledgeBaseId }`);
  }

  /**
   * Adds a resource of type MessageTemplate to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_MessageTemplateData.html
   *
   * @param knowledgeBaseId - Identifier for the knowledgeBaseId.
   * @param messageTemplateId - Identifier for the messageTemplateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifMessageTemplateRoutingProfileArn()
   */
  public onMessageTemplate(knowledgeBaseId: string, messageTemplateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wisdom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:message-template/${ knowledgeBaseId }/${ messageTemplateId }`);
  }

  /**
   * Adds a resource of type Session to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SessionData.html
   *
   * @param assistantId - Identifier for the assistantId.
   * @param sessionId - Identifier for the sessionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSession(assistantId: string, sessionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wisdom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:session/${ assistantId }/${ sessionId }`);
  }

  /**
   * Adds a resource of type QuickResponse to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QuickResponseData.html
   *
   * @param knowledgeBaseId - Identifier for the knowledgeBaseId.
   * @param quickResponseId - Identifier for the quickResponseId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQuickResponse(knowledgeBaseId: string, quickResponseId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wisdom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:quick-response/${ knowledgeBaseId }/${ quickResponseId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAIAgent()
   * - .toCreateAIAgentVersion()
   * - .toCreateAIGuardrail()
   * - .toCreateAIGuardrailVersion()
   * - .toCreateAIPrompt()
   * - .toCreateAIPromptVersion()
   * - .toCreateAssistant()
   * - .toCreateAssistantAssociation()
   * - .toCreateContent()
   * - .toCreateContentAssociation()
   * - .toCreateKnowledgeBase()
   * - .toCreateMessageTemplate()
   * - .toCreateQuickResponse()
   * - .toCreateSession()
   * - .toStartImportJob()
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
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - AIAgent
   * - AIPrompt
   * - AIGuardrail
   * - Assistant
   * - AssistantAssociation
   * - Content
   * - ContentAssociation
   * - KnowledgeBase
   * - MessageTemplate
   * - Session
   * - QuickResponse
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
   * - .toCreateAIAgent()
   * - .toCreateAIAgentVersion()
   * - .toCreateAIGuardrail()
   * - .toCreateAIGuardrailVersion()
   * - .toCreateAIPrompt()
   * - .toCreateAIPromptVersion()
   * - .toCreateAssistant()
   * - .toCreateAssistantAssociation()
   * - .toCreateContent()
   * - .toCreateContentAssociation()
   * - .toCreateKnowledgeBase()
   * - .toCreateMessageTemplate()
   * - .toCreateQuickResponse()
   * - .toCreateSession()
   * - .toStartImportJob()
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
   * Filters access by the connect routing profile arns associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonconnectwisdom.html#amazonconnectwisdom-policy-keys
   *
   * Applies to actions:
   * - .toGetMessageTemplate()
   * - .toRenderMessageTemplate()
   *
   * Applies to resource types:
   * - MessageTemplate
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifMessageTemplateRoutingProfileArn(value: string | string[], operator?: Operator | string) {
    return this.if(`MessageTemplate/RoutingProfileArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the qualifiers that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonconnectwisdom.html#amazonconnectwisdom-policy-keys
   *
   * Applies to actions:
   * - .toSearchMessageTemplates()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSearchFilterQualifier(value: string | string[], operator?: Operator | string) {
    return this.if(`SearchFilter/Qualifier`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the connect routing profile arn that is passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonconnectwisdom.html#amazonconnectwisdom-policy-keys
   *
   * Applies to actions:
   * - .toSearchMessageTemplates()
   * - .toSearchQuickResponses()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifSearchFilterRoutingProfileArn(value: string | string[], operator?: Operator | string) {
    return this.if(`SearchFilter/RoutingProfileArn`, value, operator ?? 'ArnLike');
  }
}
