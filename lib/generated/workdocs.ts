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
    this.to('workdocs:AbortDocumentVersionUpload');
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
    this.to('workdocs:ActivateUser');
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
    this.to('workdocs:AddResourcePermissions');
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
    this.to('workdocs:AddUserToGroup');
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
    this.to('workdocs:CheckAlias');
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
    this.to('workdocs:CreateComment');
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
    this.to('workdocs:CreateCustomMetadata');
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
    this.to('workdocs:CreateFolder');
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
    this.to('workdocs:CreateInstance');
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
    this.to('workdocs:CreateLabels');
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
    this.to('workdocs:CreateNotificationSubscription');
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
    this.to('workdocs:CreateUser');
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
    this.to('workdocs:DeactivateUser');
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
    this.to('workdocs:DeleteComment');
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
    this.to('workdocs:DeleteCustomMetadata');
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
    this.to('workdocs:DeleteDocument');
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
    this.to('workdocs:DeleteFolder');
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
    this.to('workdocs:DeleteFolderContents');
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
    this.to('workdocs:DeleteInstance');
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
    this.to('workdocs:DeleteLabels');
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
    this.to('workdocs:DeleteNotificationSubscription');
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
    this.to('workdocs:DeleteUser');
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
    this.to('workdocs:DeregisterDirectory');
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
    this.to('workdocs:DescribeActivities');
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
    this.to('workdocs:DescribeAvailableDirectories');
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
    this.to('workdocs:DescribeComments');
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
    this.to('workdocs:DescribeDocumentVersions');
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
    this.to('workdocs:DescribeFolderContents');
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
    this.to('workdocs:DescribeGroups');
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
    this.to('workdocs:DescribeInstances');
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
    this.to('workdocs:DescribeNotificationSubscriptions');
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
    this.to('workdocs:DescribeResourcePermissions');
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
    this.to('workdocs:DescribeRootFolders');
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
    this.to('workdocs:DescribeUsers');
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
    this.to('workdocs:DownloadDocumentVersion');
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
    this.to('workdocs:GetCurrentUser');
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
    this.to('workdocs:GetDocument');
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
    this.to('workdocs:GetDocumentPath');
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
    this.to('workdocs:GetDocumentVersion');
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
    this.to('workdocs:GetFolder');
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
    this.to('workdocs:GetFolderPath');
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
    this.to('workdocs:GetResources');
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
    this.to('workdocs:InitiateDocumentVersionUpload');
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
    this.to('workdocs:RegisterDirectory');
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
    this.to('workdocs:RemoveAllResourcePermissions');
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
    this.to('workdocs:RemoveResourcePermission');
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
    this.to('workdocs:UpdateDocument');
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
    this.to('workdocs:UpdateDocumentVersion');
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
    this.to('workdocs:UpdateFolder');
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
    this.to('workdocs:UpdateInstanceAlias');
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
    this.to('workdocs:UpdateUser');
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
