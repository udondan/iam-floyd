import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [quicksight](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonquicksight.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Quicksight extends PolicyStatement {
  public servicePrefix = 'quicksight';

  /**
   * Statement provider for service [quicksight](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonquicksight.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a SPICE ingestions on a dataset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CancelIngestion.html
   */
  public toCancelIngestion() {
    return this.to('CancelIngestion');
  }

  /**
   * Grants permission to create an account customization for QuickSight account or namespace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateAccountCustomization.html
   */
  public toCreateAccountCustomization() {
    return this.to('CreateAccountCustomization');
  }

  /**
   * CreateAdmin enables the user to provision Amazon QuickSight administrators, authors, and readers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateAdmin() {
    return this.to('CreateAdmin');
  }

  /**
   * Creates an analysis from a template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateAnalysis.html
   */
  public toCreateAnalysis() {
    return this.to('CreateAnalysis');
  }

  /**
   * Grants permission to create a custom permissions resource for restricting user access
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateCustomPermissions() {
    return this.to('CreateCustomPermissions');
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
    return this.to('CreateDashboard');
  }

  /**
   * Grants permission to create a dataset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateDataSet.html
   */
  public toCreateDataSet() {
    return this.to('CreateDataSet');
  }

  /**
   * Grants permission to create a data source
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateDataSource.html
   */
  public toCreateDataSource() {
    return this.to('CreateDataSource');
  }

  /**
   * Create a QuickSight group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    return this.to('CreateGroup');
  }

  /**
   * Add a QuickSight user to a QuickSight group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateGroupMembership.html
   */
  public toCreateGroupMembership() {
    return this.to('CreateGroupMembership');
  }

  /**
   * Creates an assignment with one specified IAM Policy ARN that will be assigned to specified groups or users of QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateIAMPolicyAssignment.html
   */
  public toCreateIAMPolicyAssignment() {
    return this.to('CreateIAMPolicyAssignment');
  }

  /**
   * Grants permission to start a SPICE ingestion on a dataset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateIngestion.html
   */
  public toCreateIngestion() {
    return this.to('CreateIngestion');
  }

  /**
   * Grants permission to create an QuickSight namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateNamespace.html
   */
  public toCreateNamespace() {
    return this.to('CreateNamespace');
  }

  /**
   * CreateReader enables the user to provision Amazon QuickSight readers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateReader() {
    return this.to('CreateReader');
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
    return this.to('CreateTemplate');
  }

  /**
   * Creates a template alias for a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplateAlias.html
   */
  public toCreateTemplateAlias() {
    return this.to('CreateTemplateAlias');
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
    return this.to('CreateTheme');
  }

  /**
   * Creates a theme alias for a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateThemeAlias.html
   */
  public toCreateThemeAlias() {
    return this.to('CreateThemeAlias');
  }

  /**
   * CreateUser enables the user to provision Amazon QuickSight authors and readers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to delete an account customization for QuickSight account or namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteAccountCustomization.html
   */
  public toDeleteAccountCustomization() {
    return this.to('DeleteAccountCustomization');
  }

  /**
   * Deletes an analysis
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteAnalysis.html
   */
  public toDeleteAnalysis() {
    return this.to('DeleteAnalysis');
  }

  /**
   * Deletes a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteDashboard.html
   */
  public toDeleteDashboard() {
    return this.to('DeleteDashboard');
  }

  /**
   * Grants permission to delete a dataset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteDataSet.html
   */
  public toDeleteDataSet() {
    return this.to('DeleteDataSet');
  }

  /**
   * Grants permission to delete a data source
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteDataSource.html
   */
  public toDeleteDataSource() {
    return this.to('DeleteDataSource');
  }

  /**
   * Remove a user group from QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Remove a user from a group so that he/she is no longer a member of the group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteGroupMembership.html
   */
  public toDeleteGroupMembership() {
    return this.to('DeleteGroupMembership');
  }

  /**
   * Update an existing assignment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteIAMPolicyAssignment.html
   */
  public toDeleteIAMPolicyAssignment() {
    return this.to('DeleteIAMPolicyAssignment');
  }

  /**
   * Grants permission to delete a QuickSight namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteNamespace.html
   */
  public toDeleteNamespace() {
    return this.to('DeleteNamespace');
  }

  /**
   * Deletes a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTemplate.html
   */
  public toDeleteTemplate() {
    return this.to('DeleteTemplate');
  }

  /**
   * Deletes the item that the specified template alias points to
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTemplateAlias.html
   */
  public toDeleteTemplateAlias() {
    return this.to('DeleteTemplateAlias');
  }

  /**
   * Deletes a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTheme.html
   */
  public toDeleteTheme() {
    return this.to('DeleteTheme');
  }

  /**
   * Deletes the item that the specified theme alias points to
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteThemeAlias.html
   */
  public toDeleteThemeAlias() {
    return this.to('DeleteThemeAlias');
  }

  /**
   * Delete the QuickSight user that is associated with the identity of the IAM user/role making the call. The IAM user is not deleted as a result of this call.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Deletes a user identified by its principal ID.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteUserByPrincipalId.html
   */
  public toDeleteUserByPrincipalId() {
    return this.to('DeleteUserByPrincipalId');
  }

  /**
   * Grants permission to describe an account customization for QuickSight account or namespace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAccountCustomization.html
   */
  public toDescribeAccountCustomization() {
    return this.to('DescribeAccountCustomization');
  }

  /**
   * Grants permission to describe the administrative account settings for QuickSight account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAccountSettings.html
   */
  public toDescribeAccountSettings() {
    return this.to('DescribeAccountSettings');
  }

  /**
   * Provides a summary for an analysis
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAnalysis.html
   */
  public toDescribeAnalysis() {
    return this.to('DescribeAnalysis');
  }

  /**
   * Describes read and write permissions for an analysis
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAnalysisPermissions.html
   */
  public toDescribeAnalysisPermissions() {
    return this.to('DescribeAnalysisPermissions');
  }

  /**
   * Grants permission to describe a custom permissions resource in a QuickSight account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toDescribeCustomPermissions() {
    return this.to('DescribeCustomPermissions');
  }

  /**
   * Provides a summary for a dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboard.html
   */
  public toDescribeDashboard() {
    return this.to('DescribeDashboard');
  }

  /**
   * Describes read and write permissions for a dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardPermissions.html
   */
  public toDescribeDashboardPermissions() {
    return this.to('DescribeDashboardPermissions');
  }

  /**
   * Grants permission to describe a dataset
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDataSet.html
   */
  public toDescribeDataSet() {
    return this.to('DescribeDataSet');
  }

  /**
   * Grants permission to describe the resource policy of a dataset
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDataSetPermissions.html
   */
  public toDescribeDataSetPermissions() {
    return this.to('DescribeDataSetPermissions');
  }

  /**
   * Grants permission to describe a data source
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDataSource.html
   */
  public toDescribeDataSource() {
    return this.to('DescribeDataSource');
  }

  /**
   * Grants permission to describe the resource policy of a data source
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDataSourcePermissions.html
   */
  public toDescribeDataSourcePermissions() {
    return this.to('DescribeDataSourcePermissions');
  }

  /**
   * Return a QuickSight group’s description and ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeGroup.html
   */
  public toDescribeGroup() {
    return this.to('DescribeGroup');
  }

  /**
   * Describe an existing assignment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeIAMPolicyAssignment.html
   */
  public toDescribeIAMPolicyAssignment() {
    return this.to('DescribeIAMPolicyAssignment');
  }

  /**
   * Grants permission to describe a SPICE ingestion on a dataset
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeIngestion.html
   */
  public toDescribeIngestion() {
    return this.to('DescribeIngestion');
  }

  /**
   * Grants permission to describe a QuickSight namespace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeNamespace.html
   */
  public toDescribeNamespace() {
    return this.to('DescribeNamespace');
  }

  /**
   * Describes a template's metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplate.html
   */
  public toDescribeTemplate() {
    return this.to('DescribeTemplate');
  }

  /**
   * Describes the template alias for a template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplateAlias.html
   */
  public toDescribeTemplateAlias() {
    return this.to('DescribeTemplateAlias');
  }

  /**
   * Describes read and write permissions on a template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplatePermissions.html
   */
  public toDescribeTemplatePermissions() {
    return this.to('DescribeTemplatePermissions');
  }

  /**
   * Describes a theme's metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTheme.html
   */
  public toDescribeTheme() {
    return this.to('DescribeTheme');
  }

  /**
   * Describes the theme alias for a theme
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemeAlias.html
   */
  public toDescribeThemeAlias() {
    return this.to('DescribeThemeAlias');
  }

  /**
   * Describes read and write permissions on a theme
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemePermissions.html
   */
  public toDescribeThemePermissions() {
    return this.to('DescribeThemePermissions');
  }

  /**
   * Return information about a user, given the user name.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeUser.html
   */
  public toDescribeUser() {
    return this.to('DescribeUser');
  }

  /**
   * Return an auth code representing a QuickSight user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toGetAuthCode() {
    return this.to('GetAuthCode');
  }

  /**
   * Return a QuickSight dashboard embedding URL.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html
   */
  public toGetDashboardEmbedUrl() {
    return this.to('GetDashboardEmbedUrl');
  }

  /**
   * GetGroupMapping is used only in Amazon QuickSight Enterprise edition accounts. It enables the user to use Amazon QuickSight to identify and display the Microsoft Active Directory (Microsoft Active Directory) directory groups that are mapped to roles in Amazon QuickSight.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toGetGroupMapping() {
    return this.to('GetGroupMapping');
  }

  /**
   * Grants permission to get a URL to embed QuickSight console experience.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetSessionEmbedUrl.html
   */
  public toGetSessionEmbedUrl() {
    return this.to('GetSessionEmbedUrl');
  }

  /**
   * Lists analyses in an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListAnalyses.html
   */
  public toListAnalyses() {
    return this.to('ListAnalyses');
  }

  /**
   * Grants permission to list custom permissions resources in QuickSight account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toListCustomPermissions() {
    return this.to('ListCustomPermissions');
  }

  /**
   * Lists all the versions of the dashboards in the QuickSight subscription
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDashboardVersions.html
   */
  public toListDashboardVersions() {
    return this.to('ListDashboardVersions');
  }

  /**
   * Lists dashboards in an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDashboards.html
   */
  public toListDashboards() {
    return this.to('ListDashboards');
  }

  /**
   * Grants permission to list all datasets
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDataSets.html
   */
  public toListDataSets() {
    return this.to('ListDataSets');
  }

  /**
   * Grants permission to list all data sources
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDataSources.html
   */
  public toListDataSources() {
    return this.to('ListDataSources');
  }

  /**
   * Return a list of member users in a group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListGroupMemberships.html
   */
  public toListGroupMemberships() {
    return this.to('ListGroupMemberships');
  }

  /**
   * Get a list of all user groups in QuickSight.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * List all assignments in the current Amazon QuickSight account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIAMPolicyAssignments.html
   */
  public toListIAMPolicyAssignments() {
    return this.to('ListIAMPolicyAssignments');
  }

  /**
   * List all assignments assigned to a user and the groups it belongs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIAMPolicyAssignmentsForUser.html
   */
  public toListIAMPolicyAssignmentsForUser() {
    return this.to('ListIAMPolicyAssignmentsForUser');
  }

  /**
   * Grants permission to list all SPICE ingestions on a dataset
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIngestions.html
   */
  public toListIngestions() {
    return this.to('ListIngestions');
  }

  /**
   * Grants permission to lists all namespaces in a QuickSight account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListNamespaces.html
   */
  public toListNamespaces() {
    return this.to('ListNamespaces');
  }

  /**
   * List tags of a QuickSight resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Lists all the aliases of a template
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplateAliases.html
   */
  public toListTemplateAliases() {
    return this.to('ListTemplateAliases');
  }

  /**
   * Lists all the versions of the templates in the current Amazon QuickSight account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplateVersions.html
   */
  public toListTemplateVersions() {
    return this.to('ListTemplateVersions');
  }

  /**
   * Lists all the templates in the current Amazon QuickSight account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplates.html
   */
  public toListTemplates() {
    return this.to('ListTemplates');
  }

  /**
   * Lists all the aliases of a theme
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemeAliases.html
   */
  public toListThemeAliases() {
    return this.to('ListThemeAliases');
  }

  /**
   * Lists all the versions of a theme
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemeVersions.html
   */
  public toListThemeVersions() {
    return this.to('ListThemeVersions');
  }

  /**
   * Lists all the themes in the current Amazon QuickSight account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemes.html
   */
  public toListThemes() {
    return this.to('ListThemes');
  }

  /**
   * Return a list of groups that a given user is a member of.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListUserGroups.html
   */
  public toListUserGroups() {
    return this.to('ListUserGroups');
  }

  /**
   * Return a list of all of the QuickSight users belonging to this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to use a dataset for a template
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/qs-api-overview.html
   */
  public toPassDataSet() {
    return this.to('PassDataSet');
  }

  /**
   * Grants permission to use a data source for a data set
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/qs-api-overview.html
   */
  public toPassDataSource() {
    return this.to('PassDataSource');
  }

  /**
   * Create a QuickSight user, whose identity is associated with the IAM identity/role specified in the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RegisterUser.html
   */
  public toRegisterUser() {
    return this.to('RegisterUser');
  }

  /**
   * Restores a deleted analysis
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RestoreAnalysis.html
   */
  public toRestoreAnalysis() {
    return this.to('RestoreAnalysis');
  }

  /**
   * Searches for analyses that belong to the user specified in the filter
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchAnalyses.html
   */
  public toSearchAnalyses() {
    return this.to('SearchAnalyses');
  }

  /**
   * Searches for dashboards that belong to a user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchDashboards.html
   */
  public toSearchDashboards() {
    return this.to('SearchDashboards');
  }

  /**
   * SearchDirectoryGroups is used only in Amazon QuickSight Enterprise edition accounts. It enables the user to use Amazon QuickSight to display your Microsoft Active Directory directory groups so that you can choose which ones to map to roles in Amazon QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toSearchDirectoryGroups() {
    return this.to('SearchDirectoryGroups');
  }

  /**
   * SearchDirectoryGroups is used only in Amazon QuickSight Enterprise edition accounts. It enables the user to use Amazon QuickSight to display your Microsoft Active Directory directory groups so that you can choose which ones to map to roles in Amazon QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toSetGroupMapping() {
    return this.to('SetGroupMapping');
  }

  /**
   * Subscribe enables the user to subscribe to Amazon QuickSight. Enabling this action also allows the user to upgrade the subscription to Enterprise edition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toSubscribe() {
    return this.to('Subscribe');
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
    return this.to('TagResource');
  }

  /**
   * Unsubscribe enables the user to unsubscribe from Amazon QuickSight, which permanently deletes all users and their resources from Amazon QuickSight.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toUnsubscribe() {
    return this.to('Unsubscribe');
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
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an account customization for QuickSight account or namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAccountCustomization.html
   */
  public toUpdateAccountCustomization() {
    return this.to('UpdateAccountCustomization');
  }

  /**
   * Grants permission to update the administrative account settings for QuickSight account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAccountSettings.html
   */
  public toUpdateAccountSettings() {
    return this.to('UpdateAccountSettings');
  }

  /**
   * Updates an analysis in an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAnalysis.html
   */
  public toUpdateAnalysis() {
    return this.to('UpdateAnalysis');
  }

  /**
   * Updates read and write permissions on an analysis
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAnalysisPermissions.html
   */
  public toUpdateAnalysisPermissions() {
    return this.to('UpdateAnalysisPermissions');
  }

  /**
   * Grants permission to update a custom permissions resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toUpdateCustomPermissions() {
    return this.to('UpdateCustomPermissions');
  }

  /**
   * Updates a dashboard in an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboard.html
   */
  public toUpdateDashboard() {
    return this.to('UpdateDashboard');
  }

  /**
   * Updates read and write permissions on a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardPermissions.html
   */
  public toUpdateDashboardPermissions() {
    return this.to('UpdateDashboardPermissions');
  }

  /**
   * Updates the published version of a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardPublishedVersion.html
   */
  public toUpdateDashboardPublishedVersion() {
    return this.to('UpdateDashboardPublishedVersion');
  }

  /**
   * Grants permission to update a dataset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDataSet.html
   */
  public toUpdateDataSet() {
    return this.to('UpdateDataSet');
  }

  /**
   * Grants permission to update the resource policy of a dataset
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDataSetPermissions.html
   */
  public toUpdateDataSetPermissions() {
    return this.to('UpdateDataSetPermissions');
  }

  /**
   * Grants permission to update a data source
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDataSource.html
   */
  public toUpdateDataSource() {
    return this.to('UpdateDataSource');
  }

  /**
   * Grants permission to update the resource policy of a data source
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDataSourcePermissions.html
   */
  public toUpdateDataSourcePermissions() {
    return this.to('UpdateDataSourcePermissions');
  }

  /**
   * Change group description.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    return this.to('UpdateGroup');
  }

  /**
   * Update an existing assignment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateIAMPolicyAssignment.html
   */
  public toUpdateIAMPolicyAssignment() {
    return this.to('UpdateIAMPolicyAssignment');
  }

  /**
   * Updates a template from an existing Amazon QuickSight analysis or another template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplate.html
   */
  public toUpdateTemplate() {
    return this.to('UpdateTemplate');
  }

  /**
   * Updates the template alias of a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplateAlias.html
   */
  public toUpdateTemplateAlias() {
    return this.to('UpdateTemplateAlias');
  }

  /**
   * Updates the resource permissions for a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplatePermissions.html
   */
  public toUpdateTemplatePermissions() {
    return this.to('UpdateTemplatePermissions');
  }

  /**
   * Updates a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTheme.html
   */
  public toUpdateTheme() {
    return this.to('UpdateTheme');
  }

  /**
   * Updates the theme alias of a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemeAlias.html
   */
  public toUpdateThemeAlias() {
    return this.to('UpdateThemeAlias');
  }

  /**
   * Updates the resource permissions for a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemePermissions.html
   */
  public toUpdateThemePermissions() {
    return this.to('UpdateThemePermissions');
  }

  /**
   * Updates an Amazon QuickSight user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateUser.html
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelIngestion",
      "CreateAccountCustomization",
      "CreateAdmin",
      "CreateAnalysis",
      "CreateCustomPermissions",
      "CreateDashboard",
      "CreateDataSet",
      "CreateDataSource",
      "CreateGroup",
      "CreateGroupMembership",
      "CreateIAMPolicyAssignment",
      "CreateIngestion",
      "CreateNamespace",
      "CreateReader",
      "CreateTemplate",
      "CreateTemplateAlias",
      "CreateTheme",
      "CreateThemeAlias",
      "CreateUser",
      "DeleteAccountCustomization",
      "DeleteAnalysis",
      "DeleteDashboard",
      "DeleteDataSet",
      "DeleteDataSource",
      "DeleteGroup",
      "DeleteGroupMembership",
      "DeleteIAMPolicyAssignment",
      "DeleteNamespace",
      "DeleteTemplate",
      "DeleteTemplateAlias",
      "DeleteTheme",
      "DeleteThemeAlias",
      "DeleteUser",
      "DeleteUserByPrincipalId",
      "DescribeCustomPermissions",
      "ListCustomPermissions",
      "ListNamespaces",
      "RegisterUser",
      "RestoreAnalysis",
      "SearchDirectoryGroups",
      "SetGroupMapping",
      "Subscribe",
      "Unsubscribe",
      "UpdateAccountCustomization",
      "UpdateAccountSettings",
      "UpdateAnalysis",
      "UpdateAnalysisPermissions",
      "UpdateCustomPermissions",
      "UpdateDashboard",
      "UpdateDashboardPermissions",
      "UpdateDashboardPublishedVersion",
      "UpdateDataSet",
      "UpdateDataSource",
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
      "DescribeAccountCustomization",
      "DescribeAccountSettings",
      "DescribeAnalysis",
      "DescribeAnalysisPermissions",
      "DescribeDashboard",
      "DescribeDashboardPermissions",
      "DescribeDataSet",
      "DescribeDataSource",
      "DescribeGroup",
      "DescribeIAMPolicyAssignment",
      "DescribeIngestion",
      "DescribeNamespace",
      "DescribeTemplate",
      "DescribeTemplateAlias",
      "DescribeTemplatePermissions",
      "DescribeTheme",
      "DescribeThemeAlias",
      "DescribeThemePermissions",
      "DescribeUser",
      "GetAuthCode",
      "GetDashboardEmbedUrl",
      "GetGroupMapping",
      "GetSessionEmbedUrl",
      "ListIngestions",
      "PassDataSet",
      "PassDataSource"
    ],
    "Permissions management": [
      "DescribeDataSetPermissions",
      "DescribeDataSourcePermissions",
      "UpdateDataSetPermissions",
      "UpdateDataSourcePermissions"
    ],
    "List": [
      "ListAnalyses",
      "ListDashboardVersions",
      "ListDashboards",
      "ListDataSets",
      "ListDataSources",
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
      "ListUsers",
      "SearchAnalyses",
      "SearchDashboards"
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
   * Adds a resource of type analysis to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Analysis.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAnalysis(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight:${Region}:${Account}:analysis/${ResourceId}';
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
   * Adds a resource of type datasource to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DataSource.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatasource(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight:${Region}:${Account}:datasource/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dataset to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DataSet.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataset(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight:${Region}:${Account}:dataset/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ingestion to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Ingestion.html
   *
   * @param datasetId - Identifier for the datasetId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIngestion(datasetId: string, resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight:${Region}:${Account}:dataset/${DatasetId}/ingestion/${ResourceId}';
    arn = arn.replace('${DatasetId}', datasetId);
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
   * Adds a resource of type customization to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_AccountCustomization.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCustomization(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight::${Account}:customization/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type namespace to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Namespace.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onNamespace(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:quicksight::${Account}:namespace/${ResourceId}';
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
  public ifIamArn(value: string | string[], operator?: Operator | string) {
    return this.if(`IamArn`, value, operator || 'StringLike');
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
  public ifSessionName(value: string | string[], operator?: Operator | string) {
    return this.if(`SessionName`, value, operator || 'StringLike');
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
  public ifUserName(value: string | string[], operator?: Operator | string) {
    return this.if(`UserName`, value, operator || 'StringLike');
  }
}
