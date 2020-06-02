import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service workspaces
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspaces.html
 */
export class Workspaces extends PolicyStatement {
    public servicePrefix = 'workspaces';
    public actions : Actions = { "AssociateIpGroups": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateIpGroups.html", "description": "Associates the specified IP access control group with the specified directory.", "accessLevel": "Write" }, "AuthorizeIpRules": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_AuthorizeIpRules.html", "description": "Adds one or more rules to the specified IP access control group.", "accessLevel": "Write", "resourceTypes": { "workspaceipgroup": { "required": true } } }, "CreateIpGroup": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_CreateIpGroup.html", "description": "Creates an IP access control group.", "accessLevel": "Write" }, "CreateTags": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_CreateTags.html", "description": "Creates tags for a WorkSpace.", "accessLevel": "Tagging" }, "CreateWorkspaces": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaces.html", "description": "Creates one or more WorkSpaces.", "accessLevel": "Write", "resourceTypes": { "directoryid": { "required": true }, "workspacebundle": { "required": true } } }, "DeleteIpGroup": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteIpGroup.html", "description": "Deletes the specified IP access control group.", "accessLevel": "Write", "resourceTypes": { "workspaceipgroup": { "required": true } } }, "DeleteTags": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteTags.html", "description": "Deletes tags from a Workspace.", "accessLevel": "Write" }, "DeleteWorkspaceImage": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteWorkspaceImage.html", "description": "Deletes the specified workspace image.", "accessLevel": "Write" }, "DescribeAccount": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccount.html", "description": "Retrieves a list that describes the configuration of bring your own license (BYOL) for the specified account.", "accessLevel": "List" }, "DescribeAccountModifications": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccountModifications.html", "description": "Retrieves a list that describes modifications to the configuration of bring your own license (BYOL) for the specified account.", "accessLevel": "List" }, "DescribeClientProperties": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeClientProperties.html", "description": "Describe client properties about the specified resources.", "accessLevel": "List", "resourceTypes": { "directoryid": { "required": true } } }, "DescribeIpGroups": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeIpGroups.html", "description": "Retrieves information about the IP access control groups of your account in the region.", "accessLevel": "List", "resourceTypes": { "workspaceipgroup": { "required": true } } }, "DescribeTags": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeTags.html", "description": "Describes tags for a WorkSpace.", "accessLevel": "List" }, "DescribeWorkspaceBundles": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceBundles.html", "description": "Obtains information about the WorkSpace bundles that are available to your account in the specified region.", "accessLevel": "List", "resourceTypes": { "workspacebundle": { "required": true } } }, "DescribeWorkspaceDirectories": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html", "description": "Retrieves information about the AWS Directory Service directories in the region that are registered with Amazon WorkSpaces and are available to your account.", "accessLevel": "List" }, "DescribeWorkspaceImages": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html", "description": "Retrieves a list that describes one or more specified images.", "accessLevel": "List" }, "DescribeWorkspaces": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html", "description": "Obtains information about the specified WorkSpaces.", "accessLevel": "List" }, "DescribeWorkspacesConnectionStatus": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspacesConnectionStatus.html", "description": "Describes the connection status of a specified WorkSpace.", "accessLevel": "Read" }, "DisassociateIpGroups": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateIpGroups.html", "description": "Disassociates the specified IP access control group from the specified directory.", "accessLevel": "Write" }, "ImportWorkspaceImage": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_ImportWorkspaceImage.html", "description": "Import a licensed EC2 image to into Amazon WorkSpaces.", "accessLevel": "Write" }, "ListAvailableManagementCidrRanges": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_ListAvailableManagementCidrRanges.html", "description": "List available CIDR ranges for a CIDR range constraint.", "accessLevel": "List" }, "ModifyAccount": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyAccount.html", "description": "Modify the configuration of bring your own license (BYOL) for the specified account.", "accessLevel": "Write" }, "ModifyClientProperties": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyClientProperties.html", "description": "Modify the client properties of a specified resource.", "accessLevel": "Write", "resourceTypes": { "directoryid": { "required": true } } }, "ModifyWorkspaceProperties": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceProperties.html", "description": "Modifies the WorkSpace properties, including the running mode and AutoStop time.", "accessLevel": "Write", "resourceTypes": { "workspaceid": { "required": true } } }, "ModifyWorkspaceState": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceState.html", "description": "Modify the state of specified WorkSpaces.", "accessLevel": "Write", "resourceTypes": { "workspaceid": { "required": true } } }, "RebootWorkspaces": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_RebootWorkspaces.html", "description": "Reboots the specified WorkSpaces.", "accessLevel": "Write", "resourceTypes": { "workspaceid": { "required": true } } }, "RebuildWorkspaces": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_RebuildWorkspaces.html", "description": "Rebuilds the specified WorkSpaces.", "accessLevel": "Write", "resourceTypes": { "workspaceid": { "required": true } } }, "RevokeIpRules": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_RevokeIpRules.html", "description": "Removes one or more rules from the specified IP access control group.", "accessLevel": "Write", "resourceTypes": { "workspaceipgroup": { "required": true } } }, "StartWorkspaces": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_StartWorkspaces.html", "description": "Starts the specified WorkSpaces.", "accessLevel": "Write", "resourceTypes": { "workspaceid": { "required": true } } }, "StopWorkspaces": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_StopWorkspaces.html", "description": "Stops the specified WorkSpaces.", "accessLevel": "Write", "resourceTypes": { "workspaceid": { "required": true } } }, "TerminateWorkspaces": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_TerminateWorkspaces.html", "description": "Terminates the specified WorkSpaces.", "accessLevel": "Write", "resourceTypes": { "workspaceid": { "required": true } } }, "UpdateRulesOfIpGroup": { "url": "https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateRulesOfIpGroup.html", "description": "Replaces the current rules of the specified IP access control group with the specified rules.", "accessLevel": "Write", "resourceTypes": { "workspaceipgroup": { "required": true } } } };

    /**
     * Associates the specified IP access control group with the specified directory.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateIpGroups.html
     */
    public associateIpGroups () {
        this.add('workspaces:AssociateIpGroups');
        return this;
    }

    /**
     * Adds one or more rules to the specified IP access control group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_AuthorizeIpRules.html
     */
    public authorizeIpRules () {
        this.add('workspaces:AuthorizeIpRules');
        return this;
    }

    /**
     * Creates an IP access control group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateIpGroup.html
     */
    public createIpGroup () {
        this.add('workspaces:CreateIpGroup');
        return this;
    }

    /**
     * Creates tags for a WorkSpace.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateTags.html
     */
    public createTags () {
        this.add('workspaces:CreateTags');
        return this;
    }

    /**
     * Creates one or more WorkSpaces.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaces.html
     */
    public createWorkspaces () {
        this.add('workspaces:CreateWorkspaces');
        return this;
    }

    /**
     * Deletes the specified IP access control group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteIpGroup.html
     */
    public deleteIpGroup () {
        this.add('workspaces:DeleteIpGroup');
        return this;
    }

    /**
     * Deletes tags from a Workspace.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteTags.html
     */
    public deleteTags () {
        this.add('workspaces:DeleteTags');
        return this;
    }

    /**
     * Deletes the specified workspace image.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteWorkspaceImage.html
     */
    public deleteWorkspaceImage () {
        this.add('workspaces:DeleteWorkspaceImage');
        return this;
    }

    /**
     * Retrieves a list that describes the configuration of bring your own license (BYOL) for the specified account.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccount.html
     */
    public describeAccount () {
        this.add('workspaces:DescribeAccount');
        return this;
    }

    /**
     * Retrieves a list that describes modifications to the configuration of bring your own license (BYOL) for the specified account.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccountModifications.html
     */
    public describeAccountModifications () {
        this.add('workspaces:DescribeAccountModifications');
        return this;
    }

    /**
     * Describe client properties about the specified resources.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeClientProperties.html
     */
    public describeClientProperties () {
        this.add('workspaces:DescribeClientProperties');
        return this;
    }

    /**
     * Retrieves information about the IP access control groups of your account in the region.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeIpGroups.html
     */
    public describeIpGroups () {
        this.add('workspaces:DescribeIpGroups');
        return this;
    }

    /**
     * Describes tags for a WorkSpace.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeTags.html
     */
    public describeTags () {
        this.add('workspaces:DescribeTags');
        return this;
    }

    /**
     * Obtains information about the WorkSpace bundles that are available to your account in the specified region.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceBundles.html
     */
    public describeWorkspaceBundles () {
        this.add('workspaces:DescribeWorkspaceBundles');
        return this;
    }

    /**
     * Retrieves information about the AWS Directory Service directories in the region that are registered with Amazon WorkSpaces and are available to your account.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html
     */
    public describeWorkspaceDirectories () {
        this.add('workspaces:DescribeWorkspaceDirectories');
        return this;
    }

    /**
     * Retrieves a list that describes one or more specified images.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html
     */
    public describeWorkspaceImages () {
        this.add('workspaces:DescribeWorkspaceImages');
        return this;
    }

    /**
     * Obtains information about the specified WorkSpaces.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html
     */
    public describeWorkspaces () {
        this.add('workspaces:DescribeWorkspaces');
        return this;
    }

    /**
     * Describes the connection status of a specified WorkSpace.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspacesConnectionStatus.html
     */
    public describeWorkspacesConnectionStatus () {
        this.add('workspaces:DescribeWorkspacesConnectionStatus');
        return this;
    }

    /**
     * Disassociates the specified IP access control group from the specified directory.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateIpGroups.html
     */
    public disassociateIpGroups () {
        this.add('workspaces:DisassociateIpGroups');
        return this;
    }

    /**
     * Import a licensed EC2 image to into Amazon WorkSpaces.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_ImportWorkspaceImage.html
     */
    public importWorkspaceImage () {
        this.add('workspaces:ImportWorkspaceImage');
        return this;
    }

    /**
     * List available CIDR ranges for a CIDR range constraint.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_ListAvailableManagementCidrRanges.html
     */
    public listAvailableManagementCidrRanges () {
        this.add('workspaces:ListAvailableManagementCidrRanges');
        return this;
    }

    /**
     * Modify the configuration of bring your own license (BYOL) for the specified account.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyAccount.html
     */
    public modifyAccount () {
        this.add('workspaces:ModifyAccount');
        return this;
    }

    /**
     * Modify the client properties of a specified resource.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyClientProperties.html
     */
    public modifyClientProperties () {
        this.add('workspaces:ModifyClientProperties');
        return this;
    }

    /**
     * Modifies the WorkSpace properties, including the running mode and AutoStop time.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceProperties.html
     */
    public modifyWorkspaceProperties () {
        this.add('workspaces:ModifyWorkspaceProperties');
        return this;
    }

    /**
     * Modify the state of specified WorkSpaces.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceState.html
     */
    public modifyWorkspaceState () {
        this.add('workspaces:ModifyWorkspaceState');
        return this;
    }

    /**
     * Reboots the specified WorkSpaces.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_RebootWorkspaces.html
     */
    public rebootWorkspaces () {
        this.add('workspaces:RebootWorkspaces');
        return this;
    }

    /**
     * Rebuilds the specified WorkSpaces.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_RebuildWorkspaces.html
     */
    public rebuildWorkspaces () {
        this.add('workspaces:RebuildWorkspaces');
        return this;
    }

    /**
     * Removes one or more rules from the specified IP access control group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_RevokeIpRules.html
     */
    public revokeIpRules () {
        this.add('workspaces:RevokeIpRules');
        return this;
    }

    /**
     * Starts the specified WorkSpaces.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_StartWorkspaces.html
     */
    public startWorkspaces () {
        this.add('workspaces:StartWorkspaces');
        return this;
    }

    /**
     * Stops the specified WorkSpaces.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_StopWorkspaces.html
     */
    public stopWorkspaces () {
        this.add('workspaces:StopWorkspaces');
        return this;
    }

    /**
     * Terminates the specified WorkSpaces.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_TerminateWorkspaces.html
     */
    public terminateWorkspaces () {
        this.add('workspaces:TerminateWorkspaces');
        return this;
    }

    /**
     * Replaces the current rules of the specified IP access control group with the specified rules.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateRulesOfIpGroup.html
     */
    public updateRulesOfIpGroup () {
        this.add('workspaces:UpdateRulesOfIpGroup');
        return this;
    }
}
