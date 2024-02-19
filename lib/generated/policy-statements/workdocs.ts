import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [workdocs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkdocs.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Workdocs extends PolicyStatement {
  public servicePrefix = 'workdocs';

  /**
   * Statement provider for service [workdocs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkdocs.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to abort the upload of the specified document version that was previously initiated by InitiateDocumentVersionUpload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_AbortDocumentVersionUpload.html
   */
  public toAbortDocumentVersionUpload() {
    return this.to('AbortDocumentVersionUpload');
  }

  /**
   * Grants permission to activate the specified user. Only active users can access Amazon WorkDocs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_ActivateUser.html
   */
  public toActivateUser() {
    return this.to('ActivateUser');
  }

  /**
   * Grants permission to add principals that are allowed to call notification subscription APIs for a given WorkDocs site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-notifications.html
   */
  public toAddNotificationPermissions() {
    return this.to('AddNotificationPermissions');
  }

  /**
   * Grants permission to create a set of permissions for the specified folder or document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_AddResourcePermissions.html
   */
  public toAddResourcePermissions() {
    return this.to('AddResourcePermissions');
  }

  /**
   * Grants permission to add a user to a group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/manage_set_admin.html
   */
  public toAddUserToGroup() {
    return this.to('AddUserToGroup');
  }

  /**
   * Grants permission to check an alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/cloud_quick_start.html
   */
  public toCheckAlias() {
    return this.to('CheckAlias');
  }

  /**
   * Grants permission to add a new comment to the specified document version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateComment.html
   */
  public toCreateComment() {
    return this.to('CreateComment');
  }

  /**
   * Grants permission to add one or more custom properties to the specified resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateCustomMetadata.html
   */
  public toCreateCustomMetadata() {
    return this.to('CreateCustomMetadata');
  }

  /**
   * Grants permission to create a folder with the specified name and parent folder
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateFolder.html
   */
  public toCreateFolder() {
    return this.to('CreateFolder');
  }

  /**
   * Grants permission to create an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  public toCreateInstance() {
    return this.to('CreateInstance');
  }

  /**
   * Grants permission to add labels to the given resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateLabels.html
   */
  public toCreateLabels() {
    return this.to('CreateLabels');
  }

  /**
   * Grants permission to configure WorkDocs to use Amazon SNS notifications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateNotificationSubscription.html
   */
  public toCreateNotificationSubscription() {
    return this.to('CreateNotificationSubscription');
  }

  /**
   * Grants permission to create a user in a Simple AD or Microsoft AD directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to deactivate the specified user, which revokes the user's access to Amazon WorkDocs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeactivateUser.html
   */
  public toDeactivateUser() {
    return this.to('DeactivateUser');
  }

  /**
   * Grants permission to delete the specified comment from the document version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteComment.html
   */
  public toDeleteComment() {
    return this.to('DeleteComment');
  }

  /**
   * Grants permission to delete custom metadata from the specified resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteCustomMetadata.html
   */
  public toDeleteCustomMetadata() {
    return this.to('DeleteCustomMetadata');
  }

  /**
   * Grants permission to permanently delete the specified document and its associated metadata
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteDocument.html
   */
  public toDeleteDocument() {
    return this.to('DeleteDocument');
  }

  /**
   * Grants permission to delete versions of a specified document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteDocumentVersion.html
   */
  public toDeleteDocumentVersion() {
    return this.to('DeleteDocumentVersion');
  }

  /**
   * Grants permission to permanently delete the specified folder and its contents
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteFolder.html
   */
  public toDeleteFolder() {
    return this.to('DeleteFolder');
  }

  /**
   * Grants permission to delete the contents of the specified folder
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteFolderContents.html
   */
  public toDeleteFolderContents() {
    return this.to('DeleteFolderContents');
  }

  /**
   * Grants permission to delete an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html#delete_site
   */
  public toDeleteInstance() {
    return this.to('DeleteInstance');
  }

  /**
   * Grants permission to delete one or more labels from a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteLabels.html
   */
  public toDeleteLabels() {
    return this.to('DeleteLabels');
  }

  /**
   * Grants permission to delete principals that are allowed to call notification subscription APIs for a given WorkDocs site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-notifications.html
   */
  public toDeleteNotificationPermissions() {
    return this.to('DeleteNotificationPermissions');
  }

  /**
   * Grants permission to delete the specified subscription from the specified organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteNotificationSubscription.html
   */
  public toDeleteNotificationSubscription() {
    return this.to('DeleteNotificationSubscription');
  }

  /**
   * Grants permission to delete the specified user from a Simple AD or Microsoft AD directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to deregister a directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html#delete_site
   */
  public toDeregisterDirectory() {
    return this.to('DeregisterDirectory');
  }

  /**
   * Grants permission to fetch user activities in a specified time period
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeActivities.html
   */
  public toDescribeActivities() {
    return this.to('DescribeActivities');
  }

  /**
   * Grants permission to describe available directories
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  public toDescribeAvailableDirectories() {
    return this.to('DescribeAvailableDirectories');
  }

  /**
   * Grants permission to list all the comments for the specified document version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeComments.html
   */
  public toDescribeComments() {
    return this.to('DescribeComments');
  }

  /**
   * Grants permission to retrieve the document versions for the specified document
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeDocumentVersions.html
   */
  public toDescribeDocumentVersions() {
    return this.to('DescribeDocumentVersions');
  }

  /**
   * Grants permission to describe the contents of the specified folder, including its documents and sub-folders
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeFolderContents.html
   */
  public toDescribeFolderContents() {
    return this.to('DescribeFolderContents');
  }

  /**
   * Grants permission to describe the user groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeGroups.html
   */
  public toDescribeGroups() {
    return this.to('DescribeGroups');
  }

  /**
   * Grants permission to describe instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  public toDescribeInstances() {
    return this.to('DescribeInstances');
  }

  /**
   * Grants permission to describe principals that are allowed to call notification subscription APIs for a given WorkDocs site
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-notifications.html
   */
  public toDescribeNotificationPermissions() {
    return this.to('DescribeNotificationPermissions');
  }

  /**
   * Grants permission to list the specified notification subscriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeNotificationSubscriptions.html
   */
  public toDescribeNotificationSubscriptions() {
    return this.to('DescribeNotificationSubscriptions');
  }

  /**
   * Grants permission to view a description of a specified resource's permissions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeResourcePermissions.html
   */
  public toDescribeResourcePermissions() {
    return this.to('DescribeResourcePermissions');
  }

  /**
   * Grants permission to describe the root folders
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeRootFolders.html
   */
  public toDescribeRootFolders() {
    return this.to('DescribeRootFolders');
  }

  /**
   * Grants permission to view a description of the specified users. You can describe all users or filter the results (for example, by status or organization)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeUsers.html
   */
  public toDescribeUsers() {
    return this.to('DescribeUsers');
  }

  /**
   * Grants permission to download a specified document version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentVersion.html
   */
  public toDownloadDocumentVersion() {
    return this.to('DownloadDocumentVersion');
  }

  /**
   * Grants permission to retrieve the details of the current user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetCurrentUser.html
   */
  public toGetCurrentUser() {
    return this.to('GetCurrentUser');
  }

  /**
   * Grants permission to retrieve the specified document object
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocument.html
   */
  public toGetDocument() {
    return this.to('GetDocument');
  }

  /**
   * Grants permission to retrieve the path information (the hierarchy from the root folder) for the requested document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentPath.html
   */
  public toGetDocumentPath() {
    return this.to('GetDocumentPath');
  }

  /**
   * Grants permission to retrieve version metadata for the specified document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentVersion.html
   */
  public toGetDocumentVersion() {
    return this.to('GetDocumentVersion');
  }

  /**
   * Grants permission to retrieve the metadata of the specified folder
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetFolder.html
   */
  public toGetFolder() {
    return this.to('GetFolder');
  }

  /**
   * Grants permission to retrieve the path information (the hierarchy from the root folder) for the specified folder
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetFolderPath.html
   */
  public toGetFolderPath() {
    return this.to('GetFolderPath');
  }

  /**
   * Grants permission to retrieve details for the specified group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_Operations.html
   */
  public toGetGroup() {
    return this.to('GetGroup');
  }

  /**
   * Grants permission to get a collection of resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetResources.html
   */
  public toGetResources() {
    return this.to('GetResources');
  }

  /**
   * Grants permission to create a new document object and version object
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_InitiateDocumentVersionUpload.html
   */
  public toInitiateDocumentVersionUpload() {
    return this.to('InitiateDocumentVersionUpload');
  }

  /**
   * Grants permission to register a directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/existing-dir-setup.html
   */
  public toRegisterDirectory() {
    return this.to('RegisterDirectory');
  }

  /**
   * Grants permission to remove all the permissions from the specified resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RemoveAllResourcePermissions.html
   */
  public toRemoveAllResourcePermissions() {
    return this.to('RemoveAllResourcePermissions');
  }

  /**
   * Grants permission to remove the permission for the specified principal from the specified resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RemoveResourcePermission.html
   */
  public toRemoveResourcePermission() {
    return this.to('RemoveResourcePermission');
  }

  /**
   * Grants permission to restore versions of a specified document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RestoreDocumentVersions.html
   */
  public toRestoreDocumentVersions() {
    return this.to('RestoreDocumentVersions');
  }

  /**
   * Grants permission to search metadata and the content of resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_SearchResources.html
   */
  public toSearchResources() {
    return this.to('SearchResources');
  }

  /**
   * Grants permission to update the specified attributes of the specified document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateDocument.html
   */
  public toUpdateDocument() {
    return this.to('UpdateDocument');
  }

  /**
   * Grants permission to change the status of the document version to ACTIVE
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateDocumentVersion.html
   */
  public toUpdateDocumentVersion() {
    return this.to('UpdateDocumentVersion');
  }

  /**
   * Grants permission to update the specified attributes of the specified folder
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateFolder.html
   */
  public toUpdateFolder() {
    return this.to('UpdateFolder');
  }

  /**
   * Grants permission to update an instance alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  public toUpdateInstanceAlias() {
    return this.to('UpdateInstanceAlias');
  }

  /**
   * Grants permission to update the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateUser.html
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  /**
   * Grants permission to update the administrative settings for a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/migration.html
   */
  public toUpdateUserAdministrativeSettings() {
    return this.to('UpdateUserAdministrativeSettings');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AbortDocumentVersionUpload',
      'ActivateUser',
      'AddNotificationPermissions',
      'AddResourcePermissions',
      'AddUserToGroup',
      'CreateComment',
      'CreateCustomMetadata',
      'CreateFolder',
      'CreateInstance',
      'CreateLabels',
      'CreateNotificationSubscription',
      'CreateUser',
      'DeactivateUser',
      'DeleteComment',
      'DeleteCustomMetadata',
      'DeleteDocument',
      'DeleteDocumentVersion',
      'DeleteFolder',
      'DeleteFolderContents',
      'DeleteInstance',
      'DeleteLabels',
      'DeleteNotificationPermissions',
      'DeleteNotificationSubscription',
      'DeleteUser',
      'DeregisterDirectory',
      'InitiateDocumentVersionUpload',
      'RegisterDirectory',
      'RemoveAllResourcePermissions',
      'RemoveResourcePermission',
      'RestoreDocumentVersions',
      'UpdateDocument',
      'UpdateDocumentVersion',
      'UpdateFolder',
      'UpdateInstanceAlias',
      'UpdateUser',
      'UpdateUserAdministrativeSettings'
    ],
    Read: [
      'CheckAlias',
      'DownloadDocumentVersion',
      'GetCurrentUser',
      'GetDocument',
      'GetDocumentPath',
      'GetDocumentVersion',
      'GetFolder',
      'GetFolderPath',
      'GetGroup',
      'GetResources'
    ],
    List: [
      'DescribeActivities',
      'DescribeAvailableDirectories',
      'DescribeComments',
      'DescribeDocumentVersions',
      'DescribeFolderContents',
      'DescribeGroups',
      'DescribeInstances',
      'DescribeNotificationPermissions',
      'DescribeNotificationSubscriptions',
      'DescribeResourcePermissions',
      'DescribeRootFolders',
      'DescribeUsers',
      'SearchResources'
    ]
  };
}
