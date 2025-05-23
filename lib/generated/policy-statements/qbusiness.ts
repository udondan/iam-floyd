import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [qbusiness](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqbusiness.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Qbusiness extends PolicyStatement {
  public servicePrefix = 'qbusiness';

  /**
   * Statement provider for service [qbusiness](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqbusiness.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add one or more users for licenses
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_AddUserLicenses.html
   */
  public toAddUserLicenses() {
    return this.to('AddUserLicenses');
  }

  /**
   * Grants permission to configure vended log delivery for Amazon Q Business application resource
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public toAllowVendedLogDeliveryForResource() {
    return this.to('AllowVendedLogDeliveryForResource');
  }

  /**
   * Grants permission to associate resource based policy statement to the application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - qbusiness:PutResourcePolicy
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_AssociatePermission.html
   */
  public toAssociatePermission() {
    return this.to('AssociatePermission');
  }

  /**
   * Grants permission to batch delete document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_BatchDeleteDocument.html
   */
  public toBatchDeleteDocument() {
    return this.to('BatchDeleteDocument');
  }

  /**
   * Grants permission to batch put document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_BatchPutDocument.html
   */
  public toBatchPutDocument() {
    return this.to('BatchPutDocument');
  }

  /**
   * Grants permission to cancel a subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CancelSubscription.html
   */
  public toCancelSubscription() {
    return this.to('CancelSubscription');
  }

  /**
   * Grants permission to chat using an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_Chat.html
   */
  public toChat() {
    return this.to('Chat');
  }

  /**
   * Grants permission to chat synchronously using an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ChatSync.html
   */
  public toChatSync() {
    return this.to('ChatSync');
  }

  /**
   * Grants permission to check if a user has access to a document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CheckDocumentAccess.html
   */
  public toCheckDocumentAccess() {
    return this.to('CheckDocumentAccess');
  }

  /**
   * Grants permission to create a unique URL for anonymous Amazon Q Business web experience
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CreateAnonymousWebExperienceUrl.html
   */
  public toCreateAnonymousWebExperienceUrl() {
    return this.to('CreateAnonymousWebExperienceUrl');
  }

  /**
   * Grants permission to create an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create DataAccessor to the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CreateDataAccessor.html
   */
  public toCreateDataAccessor() {
    return this.to('CreateDataAccessor');
  }

  /**
   * Grants permission to create a data source for a given application and index
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CreateDataSource.html
   */
  public toCreateDataSource() {
    return this.to('CreateDataSource');
  }

  /**
   * Grants permission to create an index for a given application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CreateIndex.html
   */
  public toCreateIndex() {
    return this.to('CreateIndex');
  }

  /**
   * Grants permission to create a new integration for a Q Business application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CreateIntegration.html
   */
  public toCreateIntegration() {
    return this.to('CreateIntegration');
  }

  /**
   * Grants permission to create a license
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CreateLicense.html
   */
  public toCreateLicense() {
    return this.to('CreateLicense');
  }

  /**
   * Grants permission to create a plugin for a given application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CreatePlugin.html
   */
  public toCreatePlugin() {
    return this.to('CreatePlugin');
  }

  /**
   * Grants permission to create a retriever for a given application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CreateRetriever.html
   */
  public toCreateRetriever() {
    return this.to('CreateRetriever');
  }

  /**
   * Grants permission to create a subscription
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifIdentitystoreUserId()
   * - .ifIdentitystoreGroupId()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CreateSubscription.html
   */
  public toCreateSubscription() {
    return this.to('CreateSubscription');
  }

  /**
   * Grants permission to create a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to create a web experience for a given application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_CreateWebExperience.html
   */
  public toCreateWebExperience() {
    return this.to('CreateWebExperience');
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete an attachment in the current chat context
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DeleteAttachment.html
   */
  public toDeleteAttachment() {
    return this.to('DeleteAttachment');
  }

  /**
   * Grants permission to delete chat controls configuration for an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DeleteChatControlsConfiguration.html
   */
  public toDeleteChatControlsConfiguration() {
    return this.to('DeleteChatControlsConfiguration');
  }

  /**
   * Grants permission to delete a conversation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DeleteConversation.html
   */
  public toDeleteConversation() {
    return this.to('DeleteConversation');
  }

  /**
   * Grants permission to delete DataAccessor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DeleteDataAccessor.html
   */
  public toDeleteDataAccessor() {
    return this.to('DeleteDataAccessor');
  }

  /**
   * Grants permission to delete a DataSource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DeleteDataSource.html
   */
  public toDeleteDataSource() {
    return this.to('DeleteDataSource');
  }

  /**
   * Grants permission to delete a group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Grants permission to delete an index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DeleteIndex.html
   */
  public toDeleteIndex() {
    return this.to('DeleteIndex');
  }

  /**
   * Grants permission to delete an integration for a Q Business application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DeleteIntegration.html
   */
  public toDeleteIntegration() {
    return this.to('DeleteIntegration');
  }

  /**
   * Grants permission to delete a plugin
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DeletePlugin.html
   */
  public toDeletePlugin() {
    return this.to('DeletePlugin');
  }

  /**
   * Grants permission to delete a retriever
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DeleteRetriever.html
   */
  public toDeleteRetriever() {
    return this.to('DeleteRetriever');
  }

  /**
   * Grants permission to delete a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to delete a web-experience
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DeleteWebExperience.html
   */
  public toDeleteWebExperience() {
    return this.to('DeleteWebExperience');
  }

  /**
   * Grants permission to disable the ACL crawl while creating the Amazon Q Business data source resource
   *
   * Access Level: Write
   */
  public toDisableAclOnDataSource() {
    return this.to('DisableAclOnDataSource');
  }

  /**
   * Grants permission to disassociate resource based policy statement to the application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - qbusiness:PutResourcePolicy
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DisassociatePermission.html
   */
  public toDisassociatePermission() {
    return this.to('DisassociatePermission');
  }

  /**
   * Grants permission to get an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_GetApplication.html
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Grants permission to get chat controls configuration for an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_GetChatControlsConfiguration.html
   */
  public toGetChatControlsConfiguration() {
    return this.to('GetChatControlsConfiguration');
  }

  /**
   * Grants permission to get DataAccessor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_GetDataAccessor.html
   */
  public toGetDataAccessor() {
    return this.to('GetDataAccessor');
  }

  /**
   * Grants permission to get a data source
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_GetDataSource.html
   */
  public toGetDataSource() {
    return this.to('GetDataSource');
  }

  /**
   * Grants permission to get a group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_GetGroup.html
   */
  public toGetGroup() {
    return this.to('GetGroup');
  }

  /**
   * Grants permission to get an index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_GetIndex.html
   */
  public toGetIndex() {
    return this.to('GetIndex');
  }

  /**
   * Grants permission to get an integration for a Q Business application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_GetIntegration.html
   */
  public toGetIntegration() {
    return this.to('GetIntegration');
  }

  /**
   * Grants permission to get a license
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_GetLicense.html
   */
  public toGetLicense() {
    return this.to('GetLicense');
  }

  /**
   * Grants permission to get the media associated to a system message
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_GetMedia.html
   */
  public toGetMedia() {
    return this.to('GetMedia');
  }

  /**
   * Grants permission to get a plugin
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_GetPlugin.html
   */
  public toGetPlugin() {
    return this.to('GetPlugin');
  }

  /**
   * Grants permission to get resource based policy of the application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_GetPolicy.html
   */
  public toGetPolicy() {
    return this.to('GetPolicy');
  }

  /**
   * Grants permission to get a retriever
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_GetRetriever.html
   */
  public toGetRetriever() {
    return this.to('GetRetriever');
  }

  /**
   * Grants permission to get a user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_GetUser.html
   */
  public toGetUser() {
    return this.to('GetUser');
  }

  /**
   * Grants permission to get a web-experience
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_GetWebExperience.html
   */
  public toGetWebExperience() {
    return this.to('GetWebExperience');
  }

  /**
   * Grants permission to list the applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list attachments in the current chat context
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListAttachments.html
   */
  public toListAttachments() {
    return this.to('ListAttachments');
  }

  /**
   * Grants permission to list all conversations for an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListConversations.html
   */
  public toListConversations() {
    return this.to('ListConversations');
  }

  /**
   * Grants permission to list DataAccessors for the application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListDataAccessors.html
   */
  public toListDataAccessors() {
    return this.to('ListDataAccessors');
  }

  /**
   * Grants permission to get Data Source sync job history
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListDataSourceSyncJobs.html
   */
  public toListDataSourceSyncJobs() {
    return this.to('ListDataSourceSyncJobs');
  }

  /**
   * Grants permission to list the data sources of an application and an index
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListDataSources.html
   */
  public toListDataSources() {
    return this.to('ListDataSources');
  }

  /**
   * Grants permission to list all documents
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListDocuments.html
   */
  public toListDocuments() {
    return this.to('ListDocuments');
  }

  /**
   * Grants permission to list groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListGroups.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Grants permission to list the indices of an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListIndices.html
   */
  public toListIndices() {
    return this.to('ListIndices');
  }

  /**
   * Grants permission to list all integrations for a Q Business application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListIntegrations.html
   */
  public toListIntegrations() {
    return this.to('ListIntegrations');
  }

  /**
   * Grants permission to list all messages
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListMessages.html
   */
  public toListMessages() {
    return this.to('ListMessages');
  }

  /**
   * Grants permission to list the plugins actions of a plugin within application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListPluginActions.html
   */
  public toListPluginActions() {
    return this.to('ListPluginActions');
  }

  /**
   * Grants permission to list all the actions for a plugin type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListPluginTypeActions.html
   */
  public toListPluginTypeActions() {
    return this.to('ListPluginTypeActions');
  }

  /**
   * Grants permission to list all the plugin type metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListPluginTypeMetadata.html
   */
  public toListPluginTypeMetadata() {
    return this.to('ListPluginTypeMetadata');
  }

  /**
   * Grants permission to list the plugins of an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListPlugins.html
   */
  public toListPlugins() {
    return this.to('ListPlugins');
  }

  /**
   * Grants permission to list the retrievers of an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListRetrievers.html
   */
  public toListRetrievers() {
    return this.to('ListRetrievers');
  }

  /**
   * Grants permission to list subscriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListSubscriptions.html
   */
  public toListSubscriptions() {
    return this.to('ListSubscriptions');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list licenses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListUserLicenses.html
   */
  public toListUserLicenses() {
    return this.to('ListUserLicenses');
  }

  /**
   * Grants permission to list the web experiences of an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListWebExperiences.html
   */
  public toListWebExperiences() {
    return this.to('ListWebExperiences');
  }

  /**
   * Grants permission to put feedback about a conversation message
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_PutFeedback.html
   */
  public toPutFeedback() {
    return this.to('PutFeedback');
  }

  /**
   * Grants permission to put a group of users
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_PutGroup.html
   */
  public toPutGroup() {
    return this.to('PutGroup');
  }

  /**
   * Grants permission to put resource based policy statement to the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_AssociatePermission.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to remove licenses for one or more users
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_RemoveUserLicenses.html
   */
  public toRemoveUserLicenses() {
    return this.to('RemoveUserLicenses');
  }

  /**
   * Grants permission to search relevant content from the Amazon Q Business Application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_SearchRelevantContent.html
   */
  public toSearchRelevantContent() {
    return this.to('SearchRelevantContent');
  }

  /**
   * Grants permission to start Data Source sync job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_StartDataSourceSyncJob.html
   */
  public toStartDataSourceSyncJob() {
    return this.to('StartDataSourceSyncJob');
  }

  /**
   * Grants permission to start deployment for an integration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_StartDeployment.html
   */
  public toStartDeployment() {
    return this.to('StartDeployment');
  }

  /**
   * Grants permission to stop Data Source sync job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_StopDataSourceSyncJob.html
   */
  public toStopDataSourceSyncJob() {
    return this.to('StopDataSourceSyncJob');
  }

  /**
   * Grants permission to tag a resource with given key value pairs
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the tag with the given key from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an Application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Grants permission to update chat controls configuration for an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateChatControlsConfiguration.html
   */
  public toUpdateChatControlsConfiguration() {
    return this.to('UpdateChatControlsConfiguration');
  }

  /**
   * Grants permission to update DataAccessor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateDataAccessor.html
   */
  public toUpdateDataAccessor() {
    return this.to('UpdateDataAccessor');
  }

  /**
   * Grants permission to update a DataSource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateDataSource.html
   */
  public toUpdateDataSource() {
    return this.to('UpdateDataSource');
  }

  /**
   * Grants permission to update an index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateIndex.html
   */
  public toUpdateIndex() {
    return this.to('UpdateIndex');
  }

  /**
   * Grants permission to update an integration for a Q Business application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateIntegration.html
   */
  public toUpdateIntegration() {
    return this.to('UpdateIntegration');
  }

  /**
   * Grants permission to update a plugin
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdatePlugin.html
   */
  public toUpdatePlugin() {
    return this.to('UpdatePlugin');
  }

  /**
   * Grants permission to update a Retriever
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateRetriever.html
   */
  public toUpdateRetriever() {
    return this.to('UpdateRetriever');
  }

  /**
   * Grants permission to update a subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateSubscription.html
   */
  public toUpdateSubscription() {
    return this.to('UpdateSubscription');
  }

  /**
   * Grants permission to update a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateUser.html
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  /**
   * Grants permission to update a WebExperience
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UpdateWebExperience.html
   */
  public toUpdateWebExperience() {
    return this.to('UpdateWebExperience');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddUserLicenses',
      'AssociatePermission',
      'BatchDeleteDocument',
      'BatchPutDocument',
      'CancelSubscription',
      'CreateAnonymousWebExperienceUrl',
      'CreateApplication',
      'CreateDataAccessor',
      'CreateDataSource',
      'CreateIndex',
      'CreateIntegration',
      'CreateLicense',
      'CreatePlugin',
      'CreateRetriever',
      'CreateSubscription',
      'CreateUser',
      'CreateWebExperience',
      'DeleteApplication',
      'DeleteAttachment',
      'DeleteChatControlsConfiguration',
      'DeleteConversation',
      'DeleteDataAccessor',
      'DeleteDataSource',
      'DeleteGroup',
      'DeleteIndex',
      'DeleteIntegration',
      'DeletePlugin',
      'DeleteRetriever',
      'DeleteUser',
      'DeleteWebExperience',
      'DisableAclOnDataSource',
      'DisassociatePermission',
      'PutFeedback',
      'PutGroup',
      'PutResourcePolicy',
      'RemoveUserLicenses',
      'StartDataSourceSyncJob',
      'StartDeployment',
      'StopDataSourceSyncJob',
      'UpdateApplication',
      'UpdateChatControlsConfiguration',
      'UpdateDataAccessor',
      'UpdateDataSource',
      'UpdateIndex',
      'UpdateIntegration',
      'UpdatePlugin',
      'UpdateRetriever',
      'UpdateSubscription',
      'UpdateUser',
      'UpdateWebExperience'
    ],
    'Permissions management': [
      'AllowVendedLogDeliveryForResource'
    ],
    Read: [
      'Chat',
      'ChatSync',
      'CheckDocumentAccess',
      'GetApplication',
      'GetDataAccessor',
      'GetDataSource',
      'GetGroup',
      'GetIndex',
      'GetIntegration',
      'GetLicense',
      'GetMedia',
      'GetPlugin',
      'GetPolicy',
      'GetRetriever',
      'GetUser',
      'GetWebExperience',
      'ListPluginActions',
      'ListPluginTypeActions',
      'ListPluginTypeMetadata',
      'ListTagsForResource',
      'SearchRelevantContent'
    ],
    List: [
      'GetChatControlsConfiguration',
      'ListApplications',
      'ListAttachments',
      'ListConversations',
      'ListDataAccessors',
      'ListDataSourceSyncJobs',
      'ListDataSources',
      'ListDocuments',
      'ListGroups',
      'ListIndices',
      'ListIntegrations',
      'ListMessages',
      'ListPlugins',
      'ListRetrievers',
      'ListSubscriptions',
      'ListUserLicenses',
      'ListWebExperiences'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/business-use-dg/create-application.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qbusiness:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }`);
  }

  /**
   * Adds a resource of type integration to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/business-use-dg/create-integration.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param integrationId - Identifier for the integrationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegration(applicationId: string, integrationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qbusiness:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }/integration/${ integrationId }`);
  }

  /**
   * Adds a resource of type retriever to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/business-use-dg/select-retriever.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param retrieverId - Identifier for the retrieverId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRetriever(applicationId: string, retrieverId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qbusiness:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }/retriever/${ retrieverId }`);
  }

  /**
   * Adds a resource of type index to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/business-use-dg/select-retriever.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param indexId - Identifier for the indexId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIndex(applicationId: string, indexId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qbusiness:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }/index/${ indexId }`);
  }

  /**
   * Adds a resource of type data-source to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/business-use-dg/connect-data.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param indexId - Identifier for the indexId.
   * @param dataSourceId - Identifier for the dataSourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataSource(applicationId: string, indexId: string, dataSourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qbusiness:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }/index/${ indexId }/data-source/${ dataSourceId }`);
  }

  /**
   * Adds a resource of type plugin to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/business-use-dg/plugins.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param pluginId - Identifier for the pluginId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPlugin(applicationId: string, pluginId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qbusiness:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }/plugin/${ pluginId }`);
  }

  /**
   * Adds a resource of type web-experience to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param webExperienceId - Identifier for the webExperienceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWebExperience(applicationId: string, webExperienceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qbusiness:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }/web-experience/${ webExperienceId }`);
  }

  /**
   * Adds a resource of type user-license to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/business-use-dg/provisioning.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param userLicenseId - Identifier for the userLicenseId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onUserLicense(applicationId: string, userLicenseId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qbusiness:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }/user-license/${ userLicenseId }`);
  }

  /**
   * Adds a resource of type subscription to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/business-use-dg/subscriptions.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param subscriptionId - Identifier for the subscriptionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSubscription(applicationId: string, subscriptionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qbusiness:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }/subscription/${ subscriptionId }`);
  }

  /**
   * Adds a resource of type data-accessor to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/business-use-dg/data-accessors.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param dataAccessorId - Identifier for the dataAccessorId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataAccessor(applicationId: string, dataAccessorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qbusiness:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }/data-accessor/${ dataAccessorId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toCreateDataSource()
   * - .toCreateIndex()
   * - .toCreateIntegration()
   * - .toCreatePlugin()
   * - .toCreateRetriever()
   * - .toCreateWebExperience()
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
   * - .toAllowVendedLogDeliveryForResource()
   *
   * Applies to resource types:
   * - application
   * - integration
   * - retriever
   * - index
   * - data-source
   * - plugin
   * - web-experience
   * - data-accessor
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
   * - .toCreateApplication()
   * - .toCreateDataSource()
   * - .toCreateIndex()
   * - .toCreateIntegration()
   * - .toCreatePlugin()
   * - .toCreateRetriever()
   * - .toCreateWebExperience()
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
   * Filters access by IAM Identity Center Group ID
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toCreateSubscription()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIdentitystoreGroupId(value: string | string[], operator?: Operator | string) {
    return this.if(`identitystore:GroupId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by IAM Identity Center User ID
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toCreateSubscription()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIdentitystoreUserId(value: string | string[], operator?: Operator | string) {
    return this.if(`identitystore:UserId`, value, operator ?? 'StringLike');
  }
}
