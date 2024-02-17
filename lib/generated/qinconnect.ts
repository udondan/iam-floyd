import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
   * Grants permission to update information or content of the quick response
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateQuickResponse.html
   */
  public toUpdateQuickResponse() {
    return this.to('UpdateQuickResponse');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAssistant',
      'CreateAssistantAssociation',
      'CreateContent',
      'CreateKnowledgeBase',
      'CreateQuickResponse',
      'CreateSession',
      'DeleteAssistant',
      'DeleteAssistantAssociation',
      'DeleteContent',
      'DeleteImportJob',
      'DeleteKnowledgeBase',
      'DeleteQuickResponse',
      'NotifyRecommendationsReceived',
      'PutFeedback',
      'RemoveKnowledgeBaseTemplateUri',
      'StartContentUpload',
      'StartImportJob',
      'UpdateContent',
      'UpdateKnowledgeBaseTemplateUri',
      'UpdateQuickResponse'
    ],
    Read: [
      'GetAssistant',
      'GetAssistantAssociation',
      'GetContent',
      'GetContentSummary',
      'GetImportJob',
      'GetKnowledgeBase',
      'GetQuickResponse',
      'GetRecommendations',
      'GetSession',
      'ListTagsForResource',
      'QueryAssistant',
      'SearchContent',
      'SearchQuickResponses',
      'SearchSessions'
    ],
    List: [
      'ListAssistantAssociations',
      'ListAssistants',
      'ListContents',
      'ListImportJobs',
      'ListKnowledgeBases',
      'ListQuickResponses'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

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
    return this.on(`arn:${ partition || this.defaultPartition }:wisdom:${ region || this.defaultRegion }:${ account || this.defaultAccount }:assistant/${ assistantId }`);
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
    return this.on(`arn:${ partition || this.defaultPartition }:wisdom:${ region || this.defaultRegion }:${ account || this.defaultAccount }:association/${ assistantId }/${ assistantAssociationId }`);
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
    return this.on(`arn:${ partition || this.defaultPartition }:wisdom:${ region || this.defaultRegion }:${ account || this.defaultAccount }:content/${ knowledgeBaseId }/${ contentId }`);
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
    return this.on(`arn:${ partition || this.defaultPartition }:wisdom:${ region || this.defaultRegion }:${ account || this.defaultAccount }:knowledge-base/${ knowledgeBaseId }`);
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
    return this.on(`arn:${ partition || this.defaultPartition }:wisdom:${ region || this.defaultRegion }:${ account || this.defaultAccount }:session/${ assistantId }/${ sessionId }`);
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
    return this.on(`arn:${ partition || this.defaultPartition }:wisdom:${ region || this.defaultRegion }:${ account || this.defaultAccount }:quick-response/${ knowledgeBaseId }/${ quickResponseId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAssistant()
   * - .toCreateAssistantAssociation()
   * - .toCreateContent()
   * - .toCreateKnowledgeBase()
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
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
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
   * - Assistant
   * - AssistantAssociation
   * - Content
   * - KnowledgeBase
   * - Session
   * - QuickResponse
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAssistant()
   * - .toCreateAssistantAssociation()
   * - .toCreateContent()
   * - .toCreateKnowledgeBase()
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
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the connect routing profile arn that is passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonconnectwisdom.html#amazonconnectwisdom-policy-keys
   *
   * Applies to actions:
   * - .toSearchQuickResponses()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifSearchFilterRoutingProfileArn(value: string | string[], operator?: Operator | string) {
    return this.if(`SearchFilter/RoutingProfileArn`, value, operator || 'ArnLike');
  }
}
