import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [wisdom](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectwisdom.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Wisdom extends PolicyStatement {
  public servicePrefix = 'wisdom';

  /**
   * Statement provider for service [wisdom](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectwisdom.html).
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
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListKnowledgeBases.html
   */
  public toListKnowledgeBases() {
    return this.to('ListKnowledgeBases');
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
   * Grants permission to add the specified tags to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
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

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAssistant',
      'CreateAssistantAssociation',
      'CreateContent',
      'CreateKnowledgeBase',
      'CreateSession',
      'DeleteAssistant',
      'DeleteAssistantAssociation',
      'DeleteContent',
      'DeleteKnowledgeBase',
      'NotifyRecommendationsReceived',
      'RemoveKnowledgeBaseTemplateUri',
      'StartContentUpload',
      'UpdateContent',
      'UpdateKnowledgeBaseTemplateUri'
    ],
    Read: [
      'GetAssistant',
      'GetAssistantAssociation',
      'GetContent',
      'GetContentSummary',
      'GetKnowledgeBase',
      'GetRecommendations',
      'GetSession',
      'ListTagsForResource',
      'QueryAssistant',
      'SearchContent',
      'SearchSessions'
    ],
    List: [
      'ListAssistantAssociations',
      'ListAssistants',
      'ListContents',
      'ListKnowledgeBases'
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAssistant(assistantId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Wisdom.defaultPartition }:wisdom:${ region || '*' }:${ account || '*' }:assistant/${ assistantId }`);
  }

  /**
   * Adds a resource of type AssistantAssociation to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_AssistantAssociationData.html
   *
   * @param assistantId - Identifier for the assistantId.
   * @param assistantAssociationId - Identifier for the assistantAssociationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAssistantAssociation(assistantId: string, assistantAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Wisdom.defaultPartition }:wisdom:${ region || '*' }:${ account || '*' }:association/${ assistantId }/${ assistantAssociationId }`);
  }

  /**
   * Adds a resource of type Content to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ContentData.html
   *
   * @param knowledgeBaseId - Identifier for the knowledgeBaseId.
   * @param contentId - Identifier for the contentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContent(knowledgeBaseId: string, contentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Wisdom.defaultPartition }:wisdom:${ region || '*' }:${ account || '*' }:content/${ knowledgeBaseId }/${ contentId }`);
  }

  /**
   * Adds a resource of type KnowledgeBase to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_KnowledgeBaseData.html
   *
   * @param knowledgeBaseId - Identifier for the knowledgeBaseId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onKnowledgeBase(knowledgeBaseId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Wisdom.defaultPartition }:wisdom:${ region || '*' }:${ account || '*' }:knowledge-base/${ knowledgeBaseId }`);
  }

  /**
   * Adds a resource of type Session to the statement
   *
   * https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SessionData.html
   *
   * @param assistantId - Identifier for the assistantId.
   * @param sessionId - Identifier for the sessionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSession(assistantId: string, sessionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Wisdom.defaultPartition }:wisdom:${ region || '*' }:${ account || '*' }:session/${ assistantId }/${ sessionId }`);
  }
}
