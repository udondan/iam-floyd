import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to abort the upload of the specified document version that was previously initiated by InitiateDocumentVersionUpload.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_AbortDocumentVersionUpload.html
   */
  public toAbortDocumentVersionUpload() {
    this.to('AbortDocumentVersionUpload');
    return this;
  }

  /**
   * Grants permission to activate the specified user. Only active users can access Amazon WorkDocs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_ActivateUser.html
   */
  public toActivateUser() {
    this.to('ActivateUser');
    return this;
  }

  /**
   * Grants permission to create a set of permissions for the specified folder or document.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_AddResourcePermissions.html
   */
  public toAddResourcePermissions() {
    this.to('AddResourcePermissions');
    return this;
  }

  /**
   * Grants permission to add a user to a group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/manage_set_admin.html
   */
  public toAddUserToGroup() {
    this.to('AddUserToGroup');
    return this;
  }

  /**
   * Grants permission to check an alias.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/cloud_quick_start.html
   */
  public toCheckAlias() {
    this.to('CheckAlias');
    return this;
  }

  /**
   * Grants permission to add a new comment to the specified document version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateComment.html
   */
  public toCreateComment() {
    this.to('CreateComment');
    return this;
  }

  /**
   * Grants permission to add one or more custom properties to the specified resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateCustomMetadata.html
   */
  public toCreateCustomMetadata() {
    this.to('CreateCustomMetadata');
    return this;
  }

  /**
   * Grants permission to create a folder with the specified name and parent folder.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateFolder.html
   */
  public toCreateFolder() {
    this.to('CreateFolder');
    return this;
  }

  /**
   * Grants permission to create an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  public toCreateInstance() {
    this.to('CreateInstance');
    return this;
  }

  /**
   * Grants permission to add labels to the given resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateLabels.html
   */
  public toCreateLabels() {
    this.to('CreateLabels');
    return this;
  }

  /**
   * Grants permission to configure WorkDocs to use Amazon SNS notifications.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateNotificationSubscription.html
   */
  public toCreateNotificationSubscription() {
    this.to('CreateNotificationSubscription');
    return this;
  }

  /**
   * Grants permission to create a user in a Simple AD or Microsoft AD directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    this.to('CreateUser');
    return this;
  }

  /**
   * Grants permission to deactivate the specified user, which revokes the user's access to Amazon WorkDocs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeactivateUser.html
   */
  public toDeactivateUser() {
    this.to('DeactivateUser');
    return this;
  }

  /**
   * Grants permission to delete the specified comment from the document version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteComment.html
   */
  public toDeleteComment() {
    this.to('DeleteComment');
    return this;
  }

  /**
   * Grants permission to delete custom metadata from the specified resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteCustomMetadata.html
   */
  public toDeleteCustomMetadata() {
    this.to('DeleteCustomMetadata');
    return this;
  }

  /**
   * Grants permission to permanently delete the specified document and its associated metadata.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteDocument.html
   */
  public toDeleteDocument() {
    this.to('DeleteDocument');
    return this;
  }

  /**
   * Grants permission to permanently delete the specified folder and its contents.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteFolder.html
   */
  public toDeleteFolder() {
    this.to('DeleteFolder');
    return this;
  }

  /**
   * Grants permission to delete the contents of the specified folder.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteFolderContents.html
   */
  public toDeleteFolderContents() {
    this.to('DeleteFolderContents');
    return this;
  }

  /**
   * Grants permission to delete an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html#delete_site
   */
  public toDeleteInstance() {
    this.to('DeleteInstance');
    return this;
  }

  /**
   * Grants permission to delete one or more labels from a resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteLabels.html
   */
  public toDeleteLabels() {
    this.to('DeleteLabels');
    return this;
  }

  /**
   * Grants permission to delete the specified subscription from the specified organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteNotificationSubscription.html
   */
  public toDeleteNotificationSubscription() {
    this.to('DeleteNotificationSubscription');
    return this;
  }

  /**
   * Grants permission to delete the specified user from a Simple AD or Microsoft AD directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    this.to('DeleteUser');
    return this;
  }

  /**
   * Grants permission to deregister a directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html#delete_site
   */
  public toDeregisterDirectory() {
    this.to('DeregisterDirectory');
    return this;
  }

  /**
   * Grants permission to fetch user activities in a specified time period.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeActivities.html
   */
  public toDescribeActivities() {
    this.to('DescribeActivities');
    return this;
  }

  /**
   * Grants permission to describe available directories.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  public toDescribeAvailableDirectories() {
    this.to('DescribeAvailableDirectories');
    return this;
  }

  /**
   * Grants permission to list all the comments for the specified document version.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeComments.html
   */
  public toDescribeComments() {
    this.to('DescribeComments');
    return this;
  }

  /**
   * Grants permission to retrieve the document versions for the specified document.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeDocumentVersions.html
   */
  public toDescribeDocumentVersions() {
    this.to('DescribeDocumentVersions');
    return this;
  }

  /**
   * Grants permission to describe the contents of the specified folder, including its documents and sub-folders.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeFolderContents.html
   */
  public toDescribeFolderContents() {
    this.to('DescribeFolderContents');
    return this;
  }

  /**
   * Grants permission to describe the user groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeGroups.html
   */
  public toDescribeGroups() {
    this.to('DescribeGroups');
    return this;
  }

  /**
   * Grants permission to describe instances.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  public toDescribeInstances() {
    this.to('DescribeInstances');
    return this;
  }

  /**
   * Grants permission to list the specified notification subscriptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeNotificationSubscriptions.html
   */
  public toDescribeNotificationSubscriptions() {
    this.to('DescribeNotificationSubscriptions');
    return this;
  }

  /**
   * Grants permission to view a description of a specified resource's permissions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeResourcePermissions.html
   */
  public toDescribeResourcePermissions() {
    this.to('DescribeResourcePermissions');
    return this;
  }

  /**
   * Grants permission to describe the root folders.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeRootFolders.html
   */
  public toDescribeRootFolders() {
    this.to('DescribeRootFolders');
    return this;
  }

  /**
   * Grants permission to view a description of the specified users. You can describe all users or filter the results (for example, by status or organization).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeUsers.html
   */
  public toDescribeUsers() {
    this.to('DescribeUsers');
    return this;
  }

  /**
   * Grants permission to download a specified document version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentVersion.html
   */
  public toDownloadDocumentVersion() {
    this.to('DownloadDocumentVersion');
    return this;
  }

  /**
   * Grants permission to retrieve the details of the current user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetCurrentUser.html
   */
  public toGetCurrentUser() {
    this.to('GetCurrentUser');
    return this;
  }

  /**
   * Grants permission to retrieve the specified document object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocument.html
   */
  public toGetDocument() {
    this.to('GetDocument');
    return this;
  }

  /**
   * Grants permission to retrieve the path information (the hierarchy from the root folder) for the requested document.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentPath.html
   */
  public toGetDocumentPath() {
    this.to('GetDocumentPath');
    return this;
  }

  /**
   * Grants permission to retrieve version metadata for the specified document.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentVersion.html
   */
  public toGetDocumentVersion() {
    this.to('GetDocumentVersion');
    return this;
  }

  /**
   * Grants permission to retrieve the metadata of the specified folder.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetFolder.html
   */
  public toGetFolder() {
    this.to('GetFolder');
    return this;
  }

  /**
   * Grants permission to retrieve the path information (the hierarchy from the root folder) for the specified folder.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetFolderPath.html
   */
  public toGetFolderPath() {
    this.to('GetFolderPath');
    return this;
  }

  /**
   * Grants permission to get a collection of resources.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetResources.html
   */
  public toGetResources() {
    this.to('GetResources');
    return this;
  }

  /**
   * Grants permission to create a new document object and version object.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_InitiateDocumentVersionUpload.html
   */
  public toInitiateDocumentVersionUpload() {
    this.to('InitiateDocumentVersionUpload');
    return this;
  }

  /**
   * Grants permission to register a directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/existing-dir-setup.html
   */
  public toRegisterDirectory() {
    this.to('RegisterDirectory');
    return this;
  }

  /**
   * Grants permission to remove all the permissions from the specified resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RemoveAllResourcePermissions.html
   */
  public toRemoveAllResourcePermissions() {
    this.to('RemoveAllResourcePermissions');
    return this;
  }

  /**
   * Grants permission to remove the permission for the specified principal from the specified resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RemoveResourcePermission.html
   */
  public toRemoveResourcePermission() {
    this.to('RemoveResourcePermission');
    return this;
  }

  /**
   * Grants permission to update the specified attributes of the specified document.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateDocument.html
   */
  public toUpdateDocument() {
    this.to('UpdateDocument');
    return this;
  }

  /**
   * Grants permission to change the status of the document version to ACTIVE.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateDocumentVersion.html
   */
  public toUpdateDocumentVersion() {
    this.to('UpdateDocumentVersion');
    return this;
  }

  /**
   * Grants permission to update the specified attributes of the specified folder.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateFolder.html
   */
  public toUpdateFolder() {
    this.to('UpdateFolder');
    return this;
  }

  /**
   * Grants permission to update an instance alias.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  public toUpdateInstanceAlias() {
    this.to('UpdateInstanceAlias');
    return this;
  }

  /**
   * Grants permission to update the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateUser.html
   */
  public toUpdateUser() {
    this.to('UpdateUser');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AbortDocumentVersionUpload",
      "ActivateUser",
      "AddResourcePermissions",
      "AddUserToGroup",
      "CreateComment",
      "CreateCustomMetadata",
      "CreateFolder",
      "CreateInstance",
      "CreateLabels",
      "CreateNotificationSubscription",
      "CreateUser",
      "DeactivateUser",
      "DeleteComment",
      "DeleteCustomMetadata",
      "DeleteDocument",
      "DeleteFolder",
      "DeleteFolderContents",
      "DeleteInstance",
      "DeleteLabels",
      "DeleteNotificationSubscription",
      "DeleteUser",
      "DeregisterDirectory",
      "InitiateDocumentVersionUpload",
      "RegisterDirectory",
      "RemoveAllResourcePermissions",
      "RemoveResourcePermission",
      "UpdateDocument",
      "UpdateDocumentVersion",
      "UpdateFolder",
      "UpdateInstanceAlias",
      "UpdateUser"
    ],
    "Read": [
      "CheckAlias",
      "DownloadDocumentVersion",
      "GetCurrentUser",
      "GetDocument",
      "GetDocumentPath",
      "GetDocumentVersion",
      "GetFolder",
      "GetFolderPath",
      "GetResources"
    ],
    "List": [
      "DescribeActivities",
      "DescribeAvailableDirectories",
      "DescribeComments",
      "DescribeDocumentVersions",
      "DescribeFolderContents",
      "DescribeGroups",
      "DescribeInstances",
      "DescribeNotificationSubscriptions",
      "DescribeResourcePermissions",
      "DescribeRootFolders",
      "DescribeUsers"
    ]
  };
}
