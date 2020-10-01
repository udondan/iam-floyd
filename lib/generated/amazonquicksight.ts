import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [quicksight](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonquicksight.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Quicksight extends PolicyStatement {
  public servicePrefix = 'quicksight';

  /**
   * Statement provider for service [quicksight](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonquicksight.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * CreateAdmin enables the user to provision Amazon QuickSight administrators, authors, and readers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateAdmin() {
    this.to('quicksight:CreateAdmin');
    return this;
  }

  /**
   * Creates a dashboard from a template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateDashboard.html
   */
  public toCreateDashboard() {
    this.to('quicksight:CreateDashboard');
    return this;
  }

  /**
   * Create a QuickSight group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    this.to('quicksight:CreateGroup');
    return this;
  }

  /**
   * Add a QuickSight user to a QuickSight group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateGroupMembership.html
   */
  public toCreateGroupMembership() {
    this.to('quicksight:CreateGroupMembership');
    return this;
  }

  /**
   * Creates an assignment with one specified IAM Policy ARN that will be assigned to specified groups or users of QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateIAMPolicyAssignment.html
   */
  public toCreateIAMPolicyAssignment() {
    this.to('quicksight:CreateIAMPolicyAssignment');
    return this;
  }

  /**
   * CreateReader enables the user to provision Amazon QuickSight readers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateReader() {
    this.to('quicksight:CreateReader');
    return this;
  }

  /**
   * Creates a template from an existing QuickSight analysis or template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplate.html
   */
  public toCreateTemplate() {
    this.to('quicksight:CreateTemplate');
    return this;
  }

  /**
   * Creates a template alias for a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplateAlias.html
   */
  public toCreateTemplateAlias() {
    this.to('quicksight:CreateTemplateAlias');
    return this;
  }

  /**
   * Creates a QuickSight theme
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTheme.html
   */
  public toCreateTheme() {
    this.to('quicksight:CreateTheme');
    return this;
  }

  /**
   * Creates a theme alias for a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateThemeAlias.html
   */
  public toCreateThemeAlias() {
    this.to('quicksight:CreateThemeAlias');
    return this;
  }

  /**
   * CreateUser enables the user to provision Amazon QuickSight authors and readers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateUser() {
    this.to('quicksight:CreateUser');
    return this;
  }

  /**
   * Deletes a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteDashboard.html
   */
  public toDeleteDashboard() {
    this.to('quicksight:DeleteDashboard');
    return this;
  }

  /**
   * Remove a user group from QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    this.to('quicksight:DeleteGroup');
    return this;
  }

  /**
   * Remove a user from a group so that he/she is no longer a member of the group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteGroupMembership.html
   */
  public toDeleteGroupMembership() {
    this.to('quicksight:DeleteGroupMembership');
    return this;
  }

  /**
   * Update an existing assignment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteIAMPolicyAssignment.html
   */
  public toDeleteIAMPolicyAssignment() {
    this.to('quicksight:DeleteIAMPolicyAssignment');
    return this;
  }

  /**
   * Deletes a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTemplate.html
   */
  public toDeleteTemplate() {
    this.to('quicksight:DeleteTemplate');
    return this;
  }

  /**
   * Deletes the item that the specified template alias points to
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTemplateAlias.html
   */
  public toDeleteTemplateAlias() {
    this.to('quicksight:DeleteTemplateAlias');
    return this;
  }

  /**
   * Deletes a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTheme.html
   */
  public toDeleteTheme() {
    this.to('quicksight:DeleteTheme');
    return this;
  }

  /**
   * Deletes the item that the specified theme alias points to
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteThemeAlias.html
   */
  public toDeleteThemeAlias() {
    this.to('quicksight:DeleteThemeAlias');
    return this;
  }

  /**
   * Delete the QuickSight user that is associated with the identity of the IAM user/role making the call. The IAM user is not deleted as a result of this call.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    this.to('quicksight:DeleteUser');
    return this;
  }

  /**
   * Deletes a user identified by its principal ID.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteUserByPrincipalId.html
   */
  public toDeleteUserByPrincipalId() {
    this.to('quicksight:DeleteUserByPrincipalId');
    return this;
  }

  /**
   * Provides a summary for a dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboard.html
   */
  public toDescribeDashboard() {
    this.to('quicksight:DescribeDashboard');
    return this;
  }

  /**
   * Describes read and write permissions for a dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardPermissions.html
   */
  public toDescribeDashboardPermissions() {
    this.to('quicksight:DescribeDashboardPermissions');
    return this;
  }

  /**
   * Return a QuickSight group’s description and ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeGroup.html
   */
  public toDescribeGroup() {
    this.to('quicksight:DescribeGroup');
    return this;
  }

  /**
   * Describe an existing assignment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeIAMPolicyAssignment.html
   */
  public toDescribeIAMPolicyAssignment() {
    this.to('quicksight:DescribeIAMPolicyAssignment');
    return this;
  }

  /**
   * Describes a template's metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplate.html
   */
  public toDescribeTemplate() {
    this.to('quicksight:DescribeTemplate');
    return this;
  }

  /**
   * Describes the template alias for a template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplateAlias.html
   */
  public toDescribeTemplateAlias() {
    this.to('quicksight:DescribeTemplateAlias');
    return this;
  }

  /**
   * Describes read and write permissions on a template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplatePermissions.html
   */
  public toDescribeTemplatePermissions() {
    this.to('quicksight:DescribeTemplatePermissions');
    return this;
  }

  /**
   * Describes a theme's metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTheme.html
   */
  public toDescribeTheme() {
    this.to('quicksight:DescribeTheme');
    return this;
  }

  /**
   * Describes the theme alias for a theme
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemeAlias.html
   */
  public toDescribeThemeAlias() {
    this.to('quicksight:DescribeThemeAlias');
    return this;
  }

  /**
   * Describes read and write permissions on a theme
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemePermissions.html
   */
  public toDescribeThemePermissions() {
    this.to('quicksight:DescribeThemePermissions');
    return this;
  }

  /**
   * Return information about a user, given the user name.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeUser.html
   */
  public toDescribeUser() {
    this.to('quicksight:DescribeUser');
    return this;
  }

  /**
   * Return an auth code representing a QuickSight user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toGetAuthCode() {
    this.to('quicksight:GetAuthCode');
    return this;
  }

  /**
   * Return a QuickSight dashboard embedding URL.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html
   */
  public toGetDashboardEmbedUrl() {
    this.to('quicksight:GetDashboardEmbedUrl');
    return this;
  }

  /**
   * GetGroupMapping is used only in Amazon QuickSight Enterprise edition accounts. It enables the user to use Amazon QuickSight to identify and display the Microsoft Active Directory (Microsoft Active Directory) directory groups that are mapped to roles in Amazon QuickSight.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toGetGroupMapping() {
    this.to('quicksight:GetGroupMapping');
    return this;
  }

  /**
   * Lists all the versions of the dashboards in the QuickSight subscription
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDashboardVersions.html
   */
  public toListDashboardVersions() {
    this.to('quicksight:ListDashboardVersions');
    return this;
  }

  /**
   * Lists dashboards in an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDashboards.html
   */
  public toListDashboards() {
    this.to('quicksight:ListDashboards');
    return this;
  }

  /**
   * Return a list of member users in a group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListGroupMemberships.html
   */
  public toListGroupMemberships() {
    this.to('quicksight:ListGroupMemberships');
    return this;
  }

  /**
   * Get a list of all user groups in QuickSight.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    this.to('quicksight:ListGroups');
    return this;
  }

  /**
   * List all assignments in the current Amazon QuickSight account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIAMPolicyAssignments.html
   */
  public toListIAMPolicyAssignments() {
    this.to('quicksight:ListIAMPolicyAssignments');
    return this;
  }

  /**
   * List all assignments assigned to a user and the groups it belongs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIAMPolicyAssignmentsForUser.html
   */
  public toListIAMPolicyAssignmentsForUser() {
    this.to('quicksight:ListIAMPolicyAssignmentsForUser');
    return this;
  }

  /**
   * List tags of a QuickSight resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('quicksight:ListTagsForResource');
    return this;
  }

  /**
   * Lists all the aliases of a template
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplateAliases.html
   */
  public toListTemplateAliases() {
    this.to('quicksight:ListTemplateAliases');
    return this;
  }

  /**
   * Lists all the versions of the templates in the current Amazon QuickSight account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplateVersions.html
   */
  public toListTemplateVersions() {
    this.to('quicksight:ListTemplateVersions');
    return this;
  }

  /**
   * Lists all the templates in the current Amazon QuickSight account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplates.html
   */
  public toListTemplates() {
    this.to('quicksight:ListTemplates');
    return this;
  }

  /**
   * Lists all the aliases of a theme
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemeAliases.html
   */
  public toListThemeAliases() {
    this.to('quicksight:ListThemeAliases');
    return this;
  }

  /**
   * Lists all the versions of a theme
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemeVersions.html
   */
  public toListThemeVersions() {
    this.to('quicksight:ListThemeVersions');
    return this;
  }

  /**
   * Lists all the themes in the current Amazon QuickSight account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemes.html
   */
  public toListThemes() {
    this.to('quicksight:ListThemes');
    return this;
  }

  /**
   * Return a list of groups that a given user is a member of.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListUserGroups.html
   */
  public toListUserGroups() {
    this.to('quicksight:ListUserGroups');
    return this;
  }

  /**
   * Return a list of all of the QuickSight users belonging to this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    this.to('quicksight:ListUsers');
    return this;
  }

  /**
   * Create a QuickSight user, whose identity is associated with the IAM identity/role specified in the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RegisterUser.html
   */
  public toRegisterUser() {
    this.to('quicksight:RegisterUser');
    return this;
  }

  /**
   * SearchDirectoryGroups is used only in Amazon QuickSight Enterprise edition accounts. It enables the user to use Amazon QuickSight to display your Microsoft Active Directory directory groups so that you can choose which ones to map to roles in Amazon QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toSearchDirectoryGroups() {
    this.to('quicksight:SearchDirectoryGroups');
    return this;
  }

  /**
   * SearchDirectoryGroups is used only in Amazon QuickSight Enterprise edition accounts. It enables the user to use Amazon QuickSight to display your Microsoft Active Directory directory groups so that you can choose which ones to map to roles in Amazon QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toSetGroupMapping() {
    this.to('quicksight:SetGroupMapping');
    return this;
  }

  /**
   * Subscribe enables the user to subscribe to Amazon QuickSight. Enabling this action also allows the user to upgrade the subscription to Enterprise edition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toSubscribe() {
    this.to('quicksight:Subscribe');
    return this;
  }

  /**
   * Add tags to a QuickSight resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('quicksight:TagResource');
    return this;
  }

  /**
   * Unsubscribe enables the user to unsubscribe from Amazon QuickSight, which permanently deletes all users and their resources from Amazon QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toUnsubscribe() {
    this.to('quicksight:Unsubscribe');
    return this;
  }

  /**
   * Remove tags from a QuickSight resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('quicksight:UntagResource');
    return this;
  }

  /**
   * Updates a dashboard in an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboard.html
   */
  public toUpdateDashboard() {
    this.to('quicksight:UpdateDashboard');
    return this;
  }

  /**
   * Updates read and write permissions on a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardPermissions.html
   */
  public toUpdateDashboardPermissions() {
    this.to('quicksight:UpdateDashboardPermissions');
    return this;
  }

  /**
   * Updates the published version of a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardPublishedVersion.html
   */
  public toUpdateDashboardPublishedVersion() {
    this.to('quicksight:UpdateDashboardPublishedVersion');
    return this;
  }

  /**
   * Change group description.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    this.to('quicksight:UpdateGroup');
    return this;
  }

  /**
   * Update an existing assignment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateIAMPolicyAssignment.html
   */
  public toUpdateIAMPolicyAssignment() {
    this.to('quicksight:UpdateIAMPolicyAssignment');
    return this;
  }

  /**
   * Updates a template from an existing Amazon QuickSight analysis or another template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplate.html
   */
  public toUpdateTemplate() {
    this.to('quicksight:UpdateTemplate');
    return this;
  }

  /**
   * Updates the template alias of a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplateAlias.html
   */
  public toUpdateTemplateAlias() {
    this.to('quicksight:UpdateTemplateAlias');
    return this;
  }

  /**
   * Updates the resource permissions for a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplatePermissions.html
   */
  public toUpdateTemplatePermissions() {
    this.to('quicksight:UpdateTemplatePermissions');
    return this;
  }

  /**
   * Updates a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTheme.html
   */
  public toUpdateTheme() {
    this.to('quicksight:UpdateTheme');
    return this;
  }

  /**
   * Updates the theme alias of a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemeAlias.html
   */
  public toUpdateThemeAlias() {
    this.to('quicksight:UpdateThemeAlias');
    return this;
  }

  /**
   * Updates the resource permissions for a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemePermissions.html
   */
  public toUpdateThemePermissions() {
    this.to('quicksight:UpdateThemePermissions');
    return this;
  }

  /**
   * Updates an Amazon QuickSight user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateUser.html
   */
  public toUpdateUser() {
    this.to('quicksight:UpdateUser');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateAdmin",
      "CreateDashboard",
      "CreateGroup",
      "CreateGroupMembership",
      "CreateIAMPolicyAssignment",
      "CreateReader",
      "CreateTemplate",
      "CreateTemplateAlias",
      "CreateTheme",
      "CreateThemeAlias",
      "CreateUser",
      "DeleteDashboard",
      "DeleteGroup",
      "DeleteGroupMembership",
      "DeleteIAMPolicyAssignment",
      "DeleteTemplate",
      "DeleteTemplateAlias",
      "DeleteTheme",
      "DeleteThemeAlias",
      "DeleteUser",
      "DeleteUserByPrincipalId",
      "RegisterUser",
      "SearchDirectoryGroups",
      "SetGroupMapping",
      "Subscribe",
      "Unsubscribe",
      "UpdateDashboard",
      "UpdateDashboardPermissions",
      "UpdateDashboardPublishedVersion",
      "UpdateGroup",
      "UpdateIAMPolicyAssignment",
      "UpdateTemplate",
      "UpdateTemplateAlias",
      "UpdateTemplatePermissions",
      "UpdateTheme",
      "UpdateThemeAlias",
      "UpdateThemePermissions",
      "UpdateUser"
    ],
    "Read": [
      "DescribeDashboard",
      "DescribeDashboardPermissions",
      "DescribeGroup",
      "DescribeIAMPolicyAssignment",
      "DescribeTemplate",
      "DescribeTemplateAlias",
      "DescribeTemplatePermissions",
      "DescribeTheme",
      "DescribeThemeAlias",
      "DescribeThemePermissions",
      "DescribeUser",
      "GetAuthCode",
      "GetDashboardEmbedUrl",
      "GetGroupMapping"
    ],
    "List": [
      "ListDashboardVersions",
      "ListDashboards",
      "ListGroupMemberships",
      "ListGroups",
      "ListIAMPolicyAssignments",
      "ListIAMPolicyAssignmentsForUser",
      "ListTagsForResource",
      "ListTemplateAliases",
      "ListTemplateVersions",
      "ListTemplates",
      "ListThemeAliases",
      "ListThemeVersions",
      "ListThemes",
      "ListUserGroups",
      "ListUsers"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_User.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onUser(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight:${Region}:${Account}:user/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Group.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGroup(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight:${Region}:${Account}:group/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dashboard to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Dashboard.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDashboard(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight:${Region}:${Account}:dashboard/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type template to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Template.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTemplate(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight:${Region}:${Account}:template/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type theme to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Theme.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTheme(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight:${Region}:${Account}:theme/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type assignment to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_IAMPolicyAssignment.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAssignment(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight::${Account}:assignment/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * IAM user ARN or role ARN.
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   *
   * Applies to actions:
   * - .toRegisterUser()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIamArn(value: string | string[], operator?: string) {
    return this.if(`quicksight:IamArn`, value, operator || 'StringLike');
  }

  /**
   * The session name.
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   *
   * Applies to actions:
   * - .toRegisterUser()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSessionName(value: string | string[], operator?: string) {
    return this.if(`quicksight:SessionName`, value, operator || 'StringLike');
  }

  /**
   * The user name.
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   *
   * Applies to actions:
   * - .toCreateGroupMembership()
   * - .toDeleteGroupMembership()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUserName(value: string | string[], operator?: string) {
    return this.if(`quicksight:UserName`, value, operator || 'StringLike');
  }
}
