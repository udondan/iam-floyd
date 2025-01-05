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
   * Associate resource based policy statement to the application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - qbusiness:PutResourcePolicy
   */
  public toAssociatePermission() {
    return this.to('AssociatePermission');
  }

  /**
   * Grants permission to batch delete document
   *
   * Access Level: Write
   */
  public toBatchDeleteDocument() {
    return this.to('BatchDeleteDocument');
  }

  /**
   * Grants permission to batch put document
   *
   * Access Level: Write
   */
  public toBatchPutDocument() {
    return this.to('BatchPutDocument');
  }

  /**
   * Grants permission to cancel a subscription
   *
   * Access Level: Write
   */
  public toCancelSubscription() {
    return this.to('CancelSubscription');
  }

  /**
   * Grants permission to chat using an application
   *
   * Access Level: Read
   */
  public toChat() {
    return this.to('Chat');
  }

  /**
   * Grants permission to chat synchronously using an application
   *
   * Access Level: Read
   */
  public toChatSync() {
    return this.to('ChatSync');
  }

  /**
   * Grants permission to create an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Create DataAccessor to the application
   *
   * Access Level: Write
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
   */
  public toCreateIntegration() {
    return this.to('CreateIntegration');
  }

  /**
   * Grants permission to create a license
   *
   * Access Level: Write
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
   */
  public toCreateSubscription() {
    return this.to('CreateSubscription');
  }

  /**
   * Grants permission to create a user
   *
   * Access Level: Write
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
   */
  public toCreateWebExperience() {
    return this.to('CreateWebExperience');
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete chat controls configuration for an application
   *
   * Access Level: Write
   */
  public toDeleteChatControlsConfiguration() {
    return this.to('DeleteChatControlsConfiguration');
  }

  /**
   * Grants permission to delete a conversation
   *
   * Access Level: Write
   */
  public toDeleteConversation() {
    return this.to('DeleteConversation');
  }

  /**
   * Delete DataAccessor
   *
   * Access Level: Write
   */
  public toDeleteDataAccessor() {
    return this.to('DeleteDataAccessor');
  }

  /**
   * Grants permission to delete a DataSource
   *
   * Access Level: Write
   */
  public toDeleteDataSource() {
    return this.to('DeleteDataSource');
  }

  /**
   * Grants permission to delete a group
   *
   * Access Level: Write
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Grants permission to delete an index
   *
   * Access Level: Write
   */
  public toDeleteIndex() {
    return this.to('DeleteIndex');
  }

  /**
   * Grants permission to delete an integration for a Q Business application
   *
   * Access Level: Write
   */
  public toDeleteIntegration() {
    return this.to('DeleteIntegration');
  }

  /**
   * Grants permission to delete a plugin
   *
   * Access Level: Write
   */
  public toDeletePlugin() {
    return this.to('DeletePlugin');
  }

  /**
   * Grants permission to delete a retriever
   *
   * Access Level: Write
   */
  public toDeleteRetriever() {
    return this.to('DeleteRetriever');
  }

  /**
   * Grants permission to delete a user
   *
   * Access Level: Write
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to delete a web-experience
   *
   * Access Level: Write
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
   * Disassociate resource based policy statement to the application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - qbusiness:PutResourcePolicy
   */
  public toDisassociatePermission() {
    return this.to('DisassociatePermission');
  }

  /**
   * Grants permission to get an application
   *
   * Access Level: Read
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Grants permission to get chat controls configuration for an application
   *
   * Access Level: List
   */
  public toGetChatControlsConfiguration() {
    return this.to('GetChatControlsConfiguration');
  }

  /**
   * Get DataAccessor
   *
   * Access Level: Read
   */
  public toGetDataAccessor() {
    return this.to('GetDataAccessor');
  }

  /**
   * Grants permission to get a data source
   *
   * Access Level: Read
   */
  public toGetDataSource() {
    return this.to('GetDataSource');
  }

  /**
   * Grants permission to get a group
   *
   * Access Level: Read
   */
  public toGetGroup() {
    return this.to('GetGroup');
  }

  /**
   * Grants permission to get an index
   *
   * Access Level: Read
   */
  public toGetIndex() {
    return this.to('GetIndex');
  }

  /**
   * Grants permission to get an integration for a Q Business application
   *
   * Access Level: Read
   */
  public toGetIntegration() {
    return this.to('GetIntegration');
  }

  /**
   * Grants permission to get a license
   *
   * Access Level: Read
   */
  public toGetLicense() {
    return this.to('GetLicense');
  }

  /**
   * Grants permission to get the media associated to a system message
   *
   * Access Level: Read
   */
  public toGetMedia() {
    return this.to('GetMedia');
  }

  /**
   * Grants permission to get a plugin
   *
   * Access Level: Read
   */
  public toGetPlugin() {
    return this.to('GetPlugin');
  }

  /**
   * Get resource based policy of the application
   *
   * Access Level: Read
   */
  public toGetPolicy() {
    return this.to('GetPolicy');
  }

  /**
   * Grants permission to get a retriever
   *
   * Access Level: Read
   */
  public toGetRetriever() {
    return this.to('GetRetriever');
  }

  /**
   * Grants permission to get a user
   *
   * Access Level: Read
   */
  public toGetUser() {
    return this.to('GetUser');
  }

  /**
   * Grants permission to get a web-experience
   *
   * Access Level: Read
   */
  public toGetWebExperience() {
    return this.to('GetWebExperience');
  }

  /**
   * Grants permission to list the applications
   *
   * Access Level: List
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list attachments in the current chat context
   *
   * Access Level: List
   */
  public toListAttachments() {
    return this.to('ListAttachments');
  }

  /**
   * Grants permission to list all conversations for an application
   *
   * Access Level: List
   */
  public toListConversations() {
    return this.to('ListConversations');
  }

  /**
   * List DataAccessor for the application
   *
   * Access Level: List
   */
  public toListDataAccessors() {
    return this.to('ListDataAccessors');
  }

  /**
   * Grants permission to get Data Source sync job history
   *
   * Access Level: List
   */
  public toListDataSourceSyncJobs() {
    return this.to('ListDataSourceSyncJobs');
  }

  /**
   * Grants permission to list the data sources of an application and an index
   *
   * Access Level: List
   */
  public toListDataSources() {
    return this.to('ListDataSources');
  }

  /**
   * Grants permission to list all documents
   *
   * Access Level: List
   */
  public toListDocuments() {
    return this.to('ListDocuments');
  }

  /**
   * Grants permission to list groups
   *
   * Access Level: List
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Grants permission to list the indices of an application
   *
   * Access Level: List
   */
  public toListIndices() {
    return this.to('ListIndices');
  }

  /**
   * Grants permission to list all integrations for a Q Business application
   *
   * Access Level: List
   */
  public toListIntegrations() {
    return this.to('ListIntegrations');
  }

  /**
   * Grants permission to list all messages
   *
   * Access Level: List
   */
  public toListMessages() {
    return this.to('ListMessages');
  }

  /**
   * Grants permission to list the plugins actions of a plugin within application
   *
   * Access Level: Read
   */
  public toListPluginActions() {
    return this.to('ListPluginActions');
  }

  /**
   * Grants permission to list all the actions for a plugin type
   *
   * Access Level: Read
   */
  public toListPluginTypeActions() {
    return this.to('ListPluginTypeActions');
  }

  /**
   * Grants permission to list all the plugin type metadata
   *
   * Access Level: Read
   */
  public toListPluginTypeMetadata() {
    return this.to('ListPluginTypeMetadata');
  }

  /**
   * Grants permission to list the plugins of an application
   *
   * Access Level: List
   */
  public toListPlugins() {
    return this.to('ListPlugins');
  }

  /**
   * Grants permission to list the retrievers of an application
   *
   * Access Level: List
   */
  public toListRetrievers() {
    return this.to('ListRetrievers');
  }

  /**
   * Grants permission to list subscriptions
   *
   * Access Level: List
   */
  public toListSubscriptions() {
    return this.to('ListSubscriptions');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list licenses
   *
   * Access Level: List
   */
  public toListUserLicenses() {
    return this.to('ListUserLicenses');
  }

  /**
   * Grants permission to list the web experiences of an application
   *
   * Access Level: List
   */
  public toListWebExperiences() {
    return this.to('ListWebExperiences');
  }

  /**
   * Grants permission to put feedback about a conversation message
   *
   * Access Level: Write
   */
  public toPutFeedback() {
    return this.to('PutFeedback');
  }

  /**
   * Grants permission to put a group of users
   *
   * Access Level: Write
   */
  public toPutGroup() {
    return this.to('PutGroup');
  }

  /**
   * Put resource based policy statement to the application
   *
   * Access Level: Write
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to remove licenses for one or more users
   *
   * Access Level: Write
   */
  public toRemoveUserLicenses() {
    return this.to('RemoveUserLicenses');
  }

  /**
   * Search relevant content from the Amazon Q Business Application
   *
   * Access Level: Read
   */
  public toSearchRelevantContent() {
    return this.to('SearchRelevantContent');
  }

  /**
   * Grants permission to start Data Source sync job
   *
   * Access Level: Write
   */
  public toStartDataSourceSyncJob() {
    return this.to('StartDataSourceSyncJob');
  }

  /**
   * Grants permission to start deployment for an integration
   *
   * Access Level: Write
   */
  public toStartDeployment() {
    return this.to('StartDeployment');
  }

  /**
   * Grants permission to stop Data Source sync job
   *
   * Access Level: Write
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
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an Application
   *
   * Access Level: Write
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Grants permission to update chat controls configuration for an application
   *
   * Access Level: Write
   */
  public toUpdateChatControlsConfiguration() {
    return this.to('UpdateChatControlsConfiguration');
  }

  /**
   * Update DataAccessor
   *
   * Access Level: Write
   */
  public toUpdateDataAccessor() {
    return this.to('UpdateDataAccessor');
  }

  /**
   * Grants permission to update a DataSource
   *
   * Access Level: Write
   */
  public toUpdateDataSource() {
    return this.to('UpdateDataSource');
  }

  /**
   * Grants permission to update an index
   *
   * Access Level: Write
   */
  public toUpdateIndex() {
    return this.to('UpdateIndex');
  }

  /**
   * Grants permission to update an integration for a Q Business application
   *
   * Access Level: Write
   */
  public toUpdateIntegration() {
    return this.to('UpdateIntegration');
  }

  /**
   * Grants permission to update a plugin
   *
   * Access Level: Write
   */
  public toUpdatePlugin() {
    return this.to('UpdatePlugin');
  }

  /**
   * Grants permission to update a Retriever
   *
   * Access Level: Write
   */
  public toUpdateRetriever() {
    return this.to('UpdateRetriever');
  }

  /**
   * Grants permission to update a subscription
   *
   * Access Level: Write
   */
  public toUpdateSubscription() {
    return this.to('UpdateSubscription');
  }

  /**
   * Grants permission to update a user
   *
   * Access Level: Write
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  /**
   * Grants permission to update a WebExperience
   *
   * Access Level: Write
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
