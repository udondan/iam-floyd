import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service workdocs
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkdocs.html
 */
export class Workdocs extends PolicyStatement {
    public servicePrefix = 'workdocs';
    public actions : Actions = {
        "AbortDocumentVersionUpload": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_AbortDocumentVersionUpload.html",
            "description": "Grants permission to abort the upload of the specified document version that was previously initiated by InitiateDocumentVersionUpload.",
            "accessLevel": "Write"
        },
        "ActivateUser": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_ActivateUser.html",
            "description": "Grants permission to activate the specified user. Only active users can access Amazon WorkDocs.",
            "accessLevel": "Write"
        },
        "AddResourcePermissions": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_AddResourcePermissions.html",
            "description": "Grants permission to create a set of permissions for the specified folder or document.",
            "accessLevel": "Write"
        },
        "AddUserToGroup": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/adminguide/manage_set_admin.html",
            "description": "Grants permission to add a user to a group.",
            "accessLevel": "Write"
        },
        "CheckAlias": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/adminguide/cloud_quick_start.html",
            "description": "Grants permission to check an alias.",
            "accessLevel": "Read"
        },
        "CreateComment": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateComment.html",
            "description": "Grants permission to add a new comment to the specified document version.",
            "accessLevel": "Write"
        },
        "CreateCustomMetadata": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateCustomMetadata.html",
            "description": "Grants permission to add one or more custom properties to the specified resource.",
            "accessLevel": "Write"
        },
        "CreateFolder": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateFolder.html",
            "description": "Grants permission to create a folder with the specified name and parent folder.",
            "accessLevel": "Write"
        },
        "CreateInstance": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html",
            "description": "Grants permission to create an instance.",
            "accessLevel": "Write"
        },
        "CreateLabels": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateLabels.html",
            "description": "Grants permission to add labels to the given resource.",
            "accessLevel": "Write"
        },
        "CreateNotificationSubscription": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateNotificationSubscription.html",
            "description": "Grants permission to configure WorkDocs to use Amazon SNS notifications.",
            "accessLevel": "Write"
        },
        "CreateUser": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateUser.html",
            "description": "Grants permission to create a user in a Simple AD or Microsoft AD directory.",
            "accessLevel": "Write"
        },
        "DeactivateUser": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeactivateUser.html",
            "description": "Grants permission to deactivate the specified user, which revokes the user's access to Amazon WorkDocs.",
            "accessLevel": "Write"
        },
        "DeleteComment": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteComment.html",
            "description": "Grants permission to delete the specified comment from the document version.",
            "accessLevel": "Write"
        },
        "DeleteCustomMetadata": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteCustomMetadata.html",
            "description": "Grants permission to delete custom metadata from the specified resource.",
            "accessLevel": "Write"
        },
        "DeleteDocument": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteDocument.html",
            "description": "Grants permission to permanently delete the specified document and its associated metadata.",
            "accessLevel": "Write"
        },
        "DeleteFolder": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteFolder.html",
            "description": "Grants permission to permanently delete the specified folder and its contents.",
            "accessLevel": "Write"
        },
        "DeleteFolderContents": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteFolderContents.html",
            "description": "Grants permission to delete the contents of the specified folder.",
            "accessLevel": "Write"
        },
        "DeleteInstance": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html#delete_site",
            "description": "Grants permission to delete an instance.",
            "accessLevel": "Write"
        },
        "DeleteLabels": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteLabels.html",
            "description": "Grants permission to delete one or more labels from a resource.",
            "accessLevel": "Write"
        },
        "DeleteNotificationSubscription": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteNotificationSubscription.html",
            "description": "Grants permission to delete the specified subscription from the specified organization.",
            "accessLevel": "Write"
        },
        "DeleteUser": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteUser.html",
            "description": "Grants permission to delete the specified user from a Simple AD or Microsoft AD directory.",
            "accessLevel": "Write"
        },
        "DeregisterDirectory": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html#delete_site",
            "description": "Grants permission to deregister a directory.",
            "accessLevel": "Write"
        },
        "DescribeActivities": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeActivities.html",
            "description": "Grants permission to fetch user activities in a specified time period.",
            "accessLevel": "List"
        },
        "DescribeAvailableDirectories": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html",
            "description": "Grants permission to describe available directories.",
            "accessLevel": "List"
        },
        "DescribeComments": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeComments.html",
            "description": "Grants permission to list all the comments for the specified document version.",
            "accessLevel": "List"
        },
        "DescribeDocumentVersions": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeDocumentVersions.html",
            "description": "Grants permission to retrieve the document versions for the specified document.",
            "accessLevel": "List"
        },
        "DescribeFolderContents": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeFolderContents.html",
            "description": "Grants permission to describe the contents of the specified folder, including its documents and sub-folders.",
            "accessLevel": "List"
        },
        "DescribeGroups": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeGroups.html",
            "description": "Grants permission to describe the user groups.",
            "accessLevel": "List"
        },
        "DescribeInstances": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html",
            "description": "Grants permission to describe instances.",
            "accessLevel": "List"
        },
        "DescribeNotificationSubscriptions": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeNotificationSubscriptions.html",
            "description": "Grants permission to list the specified notification subscriptions.",
            "accessLevel": "List"
        },
        "DescribeResourcePermissions": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeResourcePermissions.html",
            "description": "Grants permission to view a description of a specified resource's permissions.",
            "accessLevel": "List"
        },
        "DescribeRootFolders": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeRootFolders.html",
            "description": "Grants permission to describe the root folders.",
            "accessLevel": "List"
        },
        "DescribeUsers": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeUsers.html",
            "description": "Grants permission to view a description of the specified users. You can describe all users or filter the results (for example, by status or organization).",
            "accessLevel": "List"
        },
        "DownloadDocumentVersion": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentVersion.html",
            "description": "Grants permission to download a specified document version.",
            "accessLevel": "Read"
        },
        "GetCurrentUser": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetCurrentUser.html",
            "description": "Grants permission to retrieve the details of the current user.",
            "accessLevel": "Read"
        },
        "GetDocument": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocument.html",
            "description": "Grants permission to retrieve the specified document object.",
            "accessLevel": "Read"
        },
        "GetDocumentPath": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentPath.html",
            "description": "Grants permission to retrieve the path information (the hierarchy from the root folder) for the requested document.",
            "accessLevel": "Read"
        },
        "GetDocumentVersion": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentVersion.html",
            "description": "Grants permission to retrieve version metadata for the specified document.",
            "accessLevel": "Read"
        },
        "GetFolder": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetFolder.html",
            "description": "Grants permission to retrieve the metadata of the specified folder.",
            "accessLevel": "Read"
        },
        "GetFolderPath": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetFolderPath.html",
            "description": "Grants permission to retrieve the path information (the hierarchy from the root folder) for the specified folder.",
            "accessLevel": "Read"
        },
        "GetResources": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetResources.html",
            "description": "Grants permission to get a collection of resources.",
            "accessLevel": "Read"
        },
        "InitiateDocumentVersionUpload": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_InitiateDocumentVersionUpload.html",
            "description": "Grants permission to create a new document object and version object.",
            "accessLevel": "Write"
        },
        "RegisterDirectory": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/adminguide/existing-dir-setup.html",
            "description": "Grants permission to register a directory.",
            "accessLevel": "Write"
        },
        "RemoveAllResourcePermissions": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RemoveAllResourcePermissions.html",
            "description": "Grants permission to remove all the permissions from the specified resource.",
            "accessLevel": "Write"
        },
        "RemoveResourcePermission": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RemoveResourcePermission.html",
            "description": "Grants permission to remove the permission for the specified principal from the specified resource.",
            "accessLevel": "Write"
        },
        "UpdateDocument": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateDocument.html",
            "description": "Grants permission to update the specified attributes of the specified document.",
            "accessLevel": "Write"
        },
        "UpdateDocumentVersion": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateDocumentVersion.html",
            "description": "Grants permission to change the status of the document version to ACTIVE.",
            "accessLevel": "Write"
        },
        "UpdateFolder": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateFolder.html",
            "description": "Grants permission to update the specified attributes of the specified folder.",
            "accessLevel": "Write"
        },
        "UpdateInstanceAlias": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html",
            "description": "Grants permission to update an instance alias.",
            "accessLevel": "Write"
        },
        "UpdateUser": {
            "url": "https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateUser.html",
            "description": "Grants permission to update the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site.",
            "accessLevel": "Write"
        }
    };

    /**
     * Grants permission to abort the upload of the specified document version that was previously initiated by InitiateDocumentVersionUpload.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_AbortDocumentVersionUpload.html
     */
    public abortDocumentVersionUpload () {
        this.add('workdocs:AbortDocumentVersionUpload');
        return this;
    }

    /**
     * Grants permission to activate the specified user. Only active users can access Amazon WorkDocs.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_ActivateUser.html
     */
    public activateUser () {
        this.add('workdocs:ActivateUser');
        return this;
    }

    /**
     * Grants permission to create a set of permissions for the specified folder or document.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_AddResourcePermissions.html
     */
    public addResourcePermissions () {
        this.add('workdocs:AddResourcePermissions');
        return this;
    }

    /**
     * Grants permission to add a user to a group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/adminguide/manage_set_admin.html
     */
    public addUserToGroup () {
        this.add('workdocs:AddUserToGroup');
        return this;
    }

    /**
     * Grants permission to check an alias.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/workdocs/latest/adminguide/cloud_quick_start.html
     */
    public checkAlias () {
        this.add('workdocs:CheckAlias');
        return this;
    }

    /**
     * Grants permission to add a new comment to the specified document version.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateComment.html
     */
    public createComment () {
        this.add('workdocs:CreateComment');
        return this;
    }

    /**
     * Grants permission to add one or more custom properties to the specified resource.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateCustomMetadata.html
     */
    public createCustomMetadata () {
        this.add('workdocs:CreateCustomMetadata');
        return this;
    }

    /**
     * Grants permission to create a folder with the specified name and parent folder.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateFolder.html
     */
    public createFolder () {
        this.add('workdocs:CreateFolder');
        return this;
    }

    /**
     * Grants permission to create an instance.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
     */
    public createInstance () {
        this.add('workdocs:CreateInstance');
        return this;
    }

    /**
     * Grants permission to add labels to the given resource.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateLabels.html
     */
    public createLabels () {
        this.add('workdocs:CreateLabels');
        return this;
    }

    /**
     * Grants permission to configure WorkDocs to use Amazon SNS notifications.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateNotificationSubscription.html
     */
    public createNotificationSubscription () {
        this.add('workdocs:CreateNotificationSubscription');
        return this;
    }

    /**
     * Grants permission to create a user in a Simple AD or Microsoft AD directory.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateUser.html
     */
    public createUser () {
        this.add('workdocs:CreateUser');
        return this;
    }

    /**
     * Grants permission to deactivate the specified user, which revokes the user's access to Amazon WorkDocs.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeactivateUser.html
     */
    public deactivateUser () {
        this.add('workdocs:DeactivateUser');
        return this;
    }

    /**
     * Grants permission to delete the specified comment from the document version.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteComment.html
     */
    public deleteComment () {
        this.add('workdocs:DeleteComment');
        return this;
    }

    /**
     * Grants permission to delete custom metadata from the specified resource.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteCustomMetadata.html
     */
    public deleteCustomMetadata () {
        this.add('workdocs:DeleteCustomMetadata');
        return this;
    }

    /**
     * Grants permission to permanently delete the specified document and its associated metadata.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteDocument.html
     */
    public deleteDocument () {
        this.add('workdocs:DeleteDocument');
        return this;
    }

    /**
     * Grants permission to permanently delete the specified folder and its contents.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteFolder.html
     */
    public deleteFolder () {
        this.add('workdocs:DeleteFolder');
        return this;
    }

    /**
     * Grants permission to delete the contents of the specified folder.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteFolderContents.html
     */
    public deleteFolderContents () {
        this.add('workdocs:DeleteFolderContents');
        return this;
    }

    /**
     * Grants permission to delete an instance.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html#delete_site
     */
    public deleteInstance () {
        this.add('workdocs:DeleteInstance');
        return this;
    }

    /**
     * Grants permission to delete one or more labels from a resource.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteLabels.html
     */
    public deleteLabels () {
        this.add('workdocs:DeleteLabels');
        return this;
    }

    /**
     * Grants permission to delete the specified subscription from the specified organization.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteNotificationSubscription.html
     */
    public deleteNotificationSubscription () {
        this.add('workdocs:DeleteNotificationSubscription');
        return this;
    }

    /**
     * Grants permission to delete the specified user from a Simple AD or Microsoft AD directory.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteUser.html
     */
    public deleteUser () {
        this.add('workdocs:DeleteUser');
        return this;
    }

    /**
     * Grants permission to deregister a directory.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html#delete_site
     */
    public deregisterDirectory () {
        this.add('workdocs:DeregisterDirectory');
        return this;
    }

    /**
     * Grants permission to fetch user activities in a specified time period.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeActivities.html
     */
    public describeActivities () {
        this.add('workdocs:DescribeActivities');
        return this;
    }

    /**
     * Grants permission to describe available directories.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
     */
    public describeAvailableDirectories () {
        this.add('workdocs:DescribeAvailableDirectories');
        return this;
    }

    /**
     * Grants permission to list all the comments for the specified document version.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeComments.html
     */
    public describeComments () {
        this.add('workdocs:DescribeComments');
        return this;
    }

    /**
     * Grants permission to retrieve the document versions for the specified document.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeDocumentVersions.html
     */
    public describeDocumentVersions () {
        this.add('workdocs:DescribeDocumentVersions');
        return this;
    }

    /**
     * Grants permission to describe the contents of the specified folder, including its documents and sub-folders.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeFolderContents.html
     */
    public describeFolderContents () {
        this.add('workdocs:DescribeFolderContents');
        return this;
    }

    /**
     * Grants permission to describe the user groups.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeGroups.html
     */
    public describeGroups () {
        this.add('workdocs:DescribeGroups');
        return this;
    }

    /**
     * Grants permission to describe instances.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
     */
    public describeInstances () {
        this.add('workdocs:DescribeInstances');
        return this;
    }

    /**
     * Grants permission to list the specified notification subscriptions.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeNotificationSubscriptions.html
     */
    public describeNotificationSubscriptions () {
        this.add('workdocs:DescribeNotificationSubscriptions');
        return this;
    }

    /**
     * Grants permission to view a description of a specified resource's permissions.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeResourcePermissions.html
     */
    public describeResourcePermissions () {
        this.add('workdocs:DescribeResourcePermissions');
        return this;
    }

    /**
     * Grants permission to describe the root folders.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeRootFolders.html
     */
    public describeRootFolders () {
        this.add('workdocs:DescribeRootFolders');
        return this;
    }

    /**
     * Grants permission to view a description of the specified users. You can describe all users or filter the results (for example, by status or organization).
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeUsers.html
     */
    public describeUsers () {
        this.add('workdocs:DescribeUsers');
        return this;
    }

    /**
     * Grants permission to download a specified document version.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentVersion.html
     */
    public downloadDocumentVersion () {
        this.add('workdocs:DownloadDocumentVersion');
        return this;
    }

    /**
     * Grants permission to retrieve the details of the current user.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetCurrentUser.html
     */
    public getCurrentUser () {
        this.add('workdocs:GetCurrentUser');
        return this;
    }

    /**
     * Grants permission to retrieve the specified document object.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocument.html
     */
    public getDocument () {
        this.add('workdocs:GetDocument');
        return this;
    }

    /**
     * Grants permission to retrieve the path information (the hierarchy from the root folder) for the requested document.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentPath.html
     */
    public getDocumentPath () {
        this.add('workdocs:GetDocumentPath');
        return this;
    }

    /**
     * Grants permission to retrieve version metadata for the specified document.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentVersion.html
     */
    public getDocumentVersion () {
        this.add('workdocs:GetDocumentVersion');
        return this;
    }

    /**
     * Grants permission to retrieve the metadata of the specified folder.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetFolder.html
     */
    public getFolder () {
        this.add('workdocs:GetFolder');
        return this;
    }

    /**
     * Grants permission to retrieve the path information (the hierarchy from the root folder) for the specified folder.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetFolderPath.html
     */
    public getFolderPath () {
        this.add('workdocs:GetFolderPath');
        return this;
    }

    /**
     * Grants permission to get a collection of resources.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetResources.html
     */
    public getResources () {
        this.add('workdocs:GetResources');
        return this;
    }

    /**
     * Grants permission to create a new document object and version object.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_InitiateDocumentVersionUpload.html
     */
    public initiateDocumentVersionUpload () {
        this.add('workdocs:InitiateDocumentVersionUpload');
        return this;
    }

    /**
     * Grants permission to register a directory.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/adminguide/existing-dir-setup.html
     */
    public registerDirectory () {
        this.add('workdocs:RegisterDirectory');
        return this;
    }

    /**
     * Grants permission to remove all the permissions from the specified resource.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RemoveAllResourcePermissions.html
     */
    public removeAllResourcePermissions () {
        this.add('workdocs:RemoveAllResourcePermissions');
        return this;
    }

    /**
     * Grants permission to remove the permission for the specified principal from the specified resource.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RemoveResourcePermission.html
     */
    public removeResourcePermission () {
        this.add('workdocs:RemoveResourcePermission');
        return this;
    }

    /**
     * Grants permission to update the specified attributes of the specified document.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateDocument.html
     */
    public updateDocument () {
        this.add('workdocs:UpdateDocument');
        return this;
    }

    /**
     * Grants permission to change the status of the document version to ACTIVE.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateDocumentVersion.html
     */
    public updateDocumentVersion () {
        this.add('workdocs:UpdateDocumentVersion');
        return this;
    }

    /**
     * Grants permission to update the specified attributes of the specified folder.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateFolder.html
     */
    public updateFolder () {
        this.add('workdocs:UpdateFolder');
        return this;
    }

    /**
     * Grants permission to update an instance alias.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
     */
    public updateInstanceAlias () {
        this.add('workdocs:UpdateInstanceAlias');
        return this;
    }

    /**
     * Grants permission to update the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateUser.html
     */
    public updateUser () {
        this.add('workdocs:UpdateUser');
        return this;
    }
}
