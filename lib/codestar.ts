import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service codestar
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestar.html
 */
export class Codestar extends PolicyStatement {
    public servicePrefix = 'codestar';
    public actions : Actions = { "AssociateTeamMember": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_AssociateTeamMember.html", "description": "Adds a user to the team for an AWS CodeStar project.", "accessLevel": "Permissions management", "resourceTypes": { "project": { "required": true } } }, "CreateProject": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateProject.html", "description": "Creates a project with minimal structure, customer policies, and no resources.", "accessLevel": "Permissions management", "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "CreateUserProfile": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateUserProfile.html", "description": "Creates a profile for a user that includes user preferences, display name, and email.", "accessLevel": "Write", "resourceTypes": { "user": { "required": true } } }, "DeleteExtendedAccess": { "url": "", "description": "Grants access to extended delete APIs.", "accessLevel": "Write", "resourceTypes": { "project": { "required": true } } }, "DeleteProject": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteProject.html", "description": "Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.", "accessLevel": "Permissions management", "resourceTypes": { "project": { "required": true } } }, "DeleteUserProfile": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteUserProfile.html", "description": "Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.", "accessLevel": "Write", "resourceTypes": { "user": { "required": true } } }, "DescribeProject": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeProject.html", "description": "Describes a project and its resources.", "accessLevel": "Read", "resourceTypes": { "project": { "required": true } } }, "DescribeUserProfile": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeUserProfile.html", "description": "Describes a user in AWS CodeStar and the user attributes across all projects.", "accessLevel": "Read" }, "DisassociateTeamMember": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_DisassociateTeamMember.html", "description": "Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources.", "accessLevel": "Permissions management", "resourceTypes": { "project": { "required": true } } }, "GetExtendedAccess": { "url": "", "description": "Grants access to extended read APIs.", "accessLevel": "Read", "resourceTypes": { "project": { "required": true } } }, "ListProjects": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListProjects.html", "description": "Lists all projects in CodeStar associated with your AWS account.", "accessLevel": "List" }, "ListResources": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListResources.html", "description": "Lists all resources associated with a project in CodeStar.", "accessLevel": "List", "resourceTypes": { "project": { "required": true } } }, "ListTagsForProject": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTagsForProject.html", "description": "Lists the tags associated with a project in CodeStar.", "accessLevel": "List", "resourceTypes": { "project": { "required": true } } }, "ListTeamMembers": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTeamMembers.html", "description": "Lists all team members associated with a project.", "accessLevel": "List", "resourceTypes": { "project": { "required": true } } }, "ListUserProfiles": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListUserProfiles.html", "description": "Lists user profiles in AWS CodeStar.", "accessLevel": "List" }, "PutExtendedAccess": { "url": "", "description": "Grants access to extended write APIs.", "accessLevel": "Write", "resourceTypes": { "project": { "required": true } } }, "TagProject": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_TagProject.html", "description": "Adds tags to a project in CodeStar.", "accessLevel": "Tagging", "resourceTypes": { "project": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "UntagProject": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_UntagProject.html", "description": "Removes tags from a project in CodeStar.", "accessLevel": "Tagging", "resourceTypes": { "project": { "required": true } }, "conditions": ["aws:TagKeys"] }, "UpdateProject": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateProject.html", "description": "Updates a project in CodeStar.", "accessLevel": "Write", "resourceTypes": { "project": { "required": true } } }, "UpdateTeamMember": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateTeamMember.html", "description": "Updates team member attributes within a CodeStar project.", "accessLevel": "Permissions management", "resourceTypes": { "project": { "required": true } } }, "UpdateUserProfile": { "url": "https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateUserProfile.html", "description": "Updates a profile for a user that includes user preferences, display name, and email.", "accessLevel": "Write", "resourceTypes": { "user": { "required": true } } } };

    /**
     * Adds a user to the team for an AWS CodeStar project.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_AssociateTeamMember.html
     */
    public associateTeamMember () {
        this.add('codestar:AssociateTeamMember');
        return this;
    }

    /**
     * Creates a project with minimal structure, customer policies, and no resources.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateProject.html
     */
    public createProject () {
        this.add('codestar:CreateProject');
        return this;
    }

    /**
     * Creates a profile for a user that includes user preferences, display name, and email.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateUserProfile.html
     */
    public createUserProfile () {
        this.add('codestar:CreateUserProfile');
        return this;
    }

    /**
     * Grants access to extended delete APIs.
     *
     * Access Level: Write
     *
     *
     */
    public deleteExtendedAccess () {
        this.add('codestar:DeleteExtendedAccess');
        return this;
    }

    /**
     * Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteProject.html
     */
    public deleteProject () {
        this.add('codestar:DeleteProject');
        return this;
    }

    /**
     * Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteUserProfile.html
     */
    public deleteUserProfile () {
        this.add('codestar:DeleteUserProfile');
        return this;
    }

    /**
     * Describes a project and its resources.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeProject.html
     */
    public describeProject () {
        this.add('codestar:DescribeProject');
        return this;
    }

    /**
     * Describes a user in AWS CodeStar and the user attributes across all projects.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeUserProfile.html
     */
    public describeUserProfile () {
        this.add('codestar:DescribeUserProfile');
        return this;
    }

    /**
     * Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_DisassociateTeamMember.html
     */
    public disassociateTeamMember () {
        this.add('codestar:DisassociateTeamMember');
        return this;
    }

    /**
     * Grants access to extended read APIs.
     *
     * Access Level: Read
     *
     *
     */
    public getExtendedAccess () {
        this.add('codestar:GetExtendedAccess');
        return this;
    }

    /**
     * Lists all projects in CodeStar associated with your AWS account.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListProjects.html
     */
    public listProjects () {
        this.add('codestar:ListProjects');
        return this;
    }

    /**
     * Lists all resources associated with a project in CodeStar.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListResources.html
     */
    public listResources () {
        this.add('codestar:ListResources');
        return this;
    }

    /**
     * Lists the tags associated with a project in CodeStar.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTagsForProject.html
     */
    public listTagsForProject () {
        this.add('codestar:ListTagsForProject');
        return this;
    }

    /**
     * Lists all team members associated with a project.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTeamMembers.html
     */
    public listTeamMembers () {
        this.add('codestar:ListTeamMembers');
        return this;
    }

    /**
     * Lists user profiles in AWS CodeStar.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListUserProfiles.html
     */
    public listUserProfiles () {
        this.add('codestar:ListUserProfiles');
        return this;
    }

    /**
     * Grants access to extended write APIs.
     *
     * Access Level: Write
     *
     *
     */
    public putExtendedAccess () {
        this.add('codestar:PutExtendedAccess');
        return this;
    }

    /**
     * Adds tags to a project in CodeStar.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_TagProject.html
     */
    public tagProject () {
        this.add('codestar:TagProject');
        return this;
    }

    /**
     * Removes tags from a project in CodeStar.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UntagProject.html
     */
    public untagProject () {
        this.add('codestar:UntagProject');
        return this;
    }

    /**
     * Updates a project in CodeStar.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateProject.html
     */
    public updateProject () {
        this.add('codestar:UpdateProject');
        return this;
    }

    /**
     * Updates team member attributes within a CodeStar project.
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateTeamMember.html
     */
    public updateTeamMember () {
        this.add('codestar:UpdateTeamMember');
        return this;
    }

    /**
     * Updates a profile for a user that includes user preferences, display name, and email.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateUserProfile.html
     */
    public updateUserProfile () {
        this.add('codestar:UpdateUserProfile');
        return this;
    }
}
