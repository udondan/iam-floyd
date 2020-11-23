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
    this.to('CancelIngestion');
    return this;
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
    this.to('CreateAccountCustomization');
    return this;
  }

  /**
   * CreateAdmin enables the user to provision Amazon QuickSight administrators, authors, and readers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateAdmin() {
    this.to('CreateAdmin');
    return this;
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
    this.to('CreateAnalysis');
    return this;
  }

  /**
   * Grants permission to create a custom permissions resource for restricting user access
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateCustomPermissions() {
    this.to('CreateCustomPermissions');
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
    this.to('CreateDashboard');
    return this;
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
    this.to('CreateDataSet');
    return this;
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
    this.to('CreateDataSource');
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
    this.to('CreateGroup');
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
    this.to('CreateGroupMembership');
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
    this.to('CreateIAMPolicyAssignment');
    return this;
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
    this.to('CreateIngestion');
    return this;
  }

  /**
   * Grants permission to create an QuickSight namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateNamespace.html
   */
  public toCreateNamespace() {
    this.to('CreateNamespace');
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
    this.to('CreateReader');
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
    this.to('CreateTemplate');
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
    this.to('CreateTemplateAlias');
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
    this.to('CreateTheme');
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
    this.to('CreateThemeAlias');
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
    this.to('CreateUser');
    return this;
  }

  /**
   * Grants permission to delete an account customization for QuickSight account or namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteAccountCustomization.html
   */
  public toDeleteAccountCustomization() {
    this.to('DeleteAccountCustomization');
    return this;
  }

  /**
   * Deletes an analysis
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteAnalysis.html
   */
  public toDeleteAnalysis() {
    this.to('DeleteAnalysis');
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
    this.to('DeleteDashboard');
    return this;
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
    this.to('DeleteDataSet');
    return this;
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
    this.to('DeleteDataSource');
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
    this.to('DeleteGroup');
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
    this.to('DeleteGroupMembership');
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
    this.to('DeleteIAMPolicyAssignment');
    return this;
  }

  /**
   * Grants permission to delete a QuickSight namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteNamespace.html
   */
  public toDeleteNamespace() {
    this.to('DeleteNamespace');
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
    this.to('DeleteTemplate');
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
    this.to('DeleteTemplateAlias');
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
    this.to('DeleteTheme');
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
    this.to('DeleteThemeAlias');
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
    this.to('DeleteUser');
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
    this.to('DeleteUserByPrincipalId');
    return this;
  }

  /**
   * Grants permission to describe an account customization for QuickSight account or namespace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAccountCustomization.html
   */
  public toDescribeAccountCustomization() {
    this.to('DescribeAccountCustomization');
    return this;
  }

  /**
   * Grants permission to describe the administrative account settings for QuickSight account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAccountSettings.html
   */
  public toDescribeAccountSettings() {
    this.to('DescribeAccountSettings');
    return this;
  }

  /**
   * Provides a summary for an analysis
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAnalysis.html
   */
  public toDescribeAnalysis() {
    this.to('DescribeAnalysis');
    return this;
  }

  /**
   * Describes read and write permissions for an analysis
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAnalysisPermissions.html
   */
  public toDescribeAnalysisPermissions() {
    this.to('DescribeAnalysisPermissions');
    return this;
  }

  /**
   * Grants permission to describe a custom permissions resource in a QuickSight account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toDescribeCustomPermissions() {
    this.to('DescribeCustomPermissions');
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
    this.to('DescribeDashboard');
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
    this.to('DescribeDashboardPermissions');
    return this;
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
    this.to('DescribeDataSet');
    return this;
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
    this.to('DescribeDataSetPermissions');
    return this;
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
    this.to('DescribeDataSource');
    return this;
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
    this.to('DescribeDataSourcePermissions');
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
    this.to('DescribeGroup');
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
    this.to('DescribeIAMPolicyAssignment');
    return this;
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
    this.to('DescribeIngestion');
    return this;
  }

  /**
   * Grants permission to describe a QuickSight namespace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeNamespace.html
   */
  public toDescribeNamespace() {
    this.to('DescribeNamespace');
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
    this.to('DescribeTemplate');
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
    this.to('DescribeTemplateAlias');
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
    this.to('DescribeTemplatePermissions');
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
    this.to('DescribeTheme');
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
    this.to('DescribeThemeAlias');
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
    this.to('DescribeThemePermissions');
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
    this.to('DescribeUser');
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
    this.to('GetAuthCode');
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
    this.to('GetDashboardEmbedUrl');
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
    this.to('GetGroupMapping');
    return this;
  }

  /**
   * Grants permission to get a URL to embed QuickSight console experience.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetSessionEmbedUrl.html
   */
  public toGetSessionEmbedUrl() {
    this.to('GetSessionEmbedUrl');
    return this;
  }

  /**
   * Lists analyses in an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListAnalyses.html
   */
  public toListAnalyses() {
    this.to('ListAnalyses');
    return this;
  }

  /**
   * Grants permission to list custom permissions resources in QuickSight account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toListCustomPermissions() {
    this.to('ListCustomPermissions');
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
    this.to('ListDashboardVersions');
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
    this.to('ListDashboards');
    return this;
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
    this.to('ListDataSets');
    return this;
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
    this.to('ListDataSources');
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
    this.to('ListGroupMemberships');
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
    this.to('ListGroups');
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
    this.to('ListIAMPolicyAssignments');
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
    this.to('ListIAMPolicyAssignmentsForUser');
    return this;
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
    this.to('ListIngestions');
    return this;
  }

  /**
   * Grants permission to lists all namespaces in a QuickSight account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListNamespaces.html
   */
  public toListNamespaces() {
    this.to('ListNamespaces');
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
    this.to('ListTagsForResource');
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
    this.to('ListTemplateAliases');
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
    this.to('ListTemplateVersions');
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
    this.to('ListTemplates');
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
    this.to('ListThemeAliases');
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
    this.to('ListThemeVersions');
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
    this.to('ListThemes');
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
    this.to('ListUserGroups');
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
    this.to('ListUsers');
    return this;
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
    this.to('PassDataSet');
    return this;
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
    this.to('PassDataSource');
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
    this.to('RegisterUser');
    return this;
  }

  /**
   * Restores a deleted analysis
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RestoreAnalysis.html
   */
  public toRestoreAnalysis() {
    this.to('RestoreAnalysis');
    return this;
  }

  /**
   * Searches for analyses that belong to the user specified in the filter
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchAnalyses.html
   */
  public toSearchAnalyses() {
    this.to('SearchAnalyses');
    return this;
  }

  /**
   * Searches for dashboards that belong to a user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchDashboards.html
   */
  public toSearchDashboards() {
    this.to('SearchDashboards');
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
    this.to('SearchDirectoryGroups');
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
    this.to('SetGroupMapping');
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
    this.to('Subscribe');
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
    this.to('TagResource');
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
    this.to('Unsubscribe');
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
    this.to('UntagResource');
    return this;
  }

  /**
   * Grants permission to update an account customization for QuickSight account or namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAccountCustomization.html
   */
  public toUpdateAccountCustomization() {
    this.to('UpdateAccountCustomization');
    return this;
  }

  /**
   * Grants permission to update the administrative account settings for QuickSight account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAccountSettings.html
   */
  public toUpdateAccountSettings() {
    this.to('UpdateAccountSettings');
    return this;
  }

  /**
   * Updates an analysis in an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAnalysis.html
   */
  public toUpdateAnalysis() {
    this.to('UpdateAnalysis');
    return this;
  }

  /**
   * Updates read and write permissions on an analysis
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAnalysisPermissions.html
   */
  public toUpdateAnalysisPermissions() {
    this.to('UpdateAnalysisPermissions');
    return this;
  }

  /**
   * Grants permission to update a custom permissions resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toUpdateCustomPermissions() {
    this.to('UpdateCustomPermissions');
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
    this.to('UpdateDashboard');
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
    this.to('UpdateDashboardPermissions');
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
    this.to('UpdateDashboardPublishedVersion');
    return this;
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
    this.to('UpdateDataSet');
    return this;
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
    this.to('UpdateDataSetPermissions');
    return this;
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
    this.to('UpdateDataSource');
    return this;
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
    this.to('UpdateDataSourcePermissions');
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
    this.to('UpdateGroup');
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
    this.to('UpdateIAMPolicyAssignment');
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
    this.to('UpdateTemplate');
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
    this.to('UpdateTemplateAlias');
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
    this.to('UpdateTemplatePermissions');
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
    this.to('UpdateTheme');
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
    this.to('UpdateThemeAlias');
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
    this.to('UpdateThemePermissions');
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
    this.to('UpdateUser');
    return this;
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
  public ifSessionName(value: string | string[], operator?: Operator | string) {
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
  public ifUserName(value: string | string[], operator?: Operator | string) {
    return this.if(`quicksight:UserName`, value, operator || 'StringLike');
  }
}
