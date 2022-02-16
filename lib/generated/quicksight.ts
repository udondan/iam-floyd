import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * To enable setting default access to AWS resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/accessing-data-sources.html
   */
  public toAccountConfigurations() {
    return this.to('AccountConfigurations');
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
   * Grants permission to provision Amazon QuickSight administrators, authors, and readers
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateAdmin() {
    return this.to('CreateAdmin');
  }

  /**
   * Grants permission to create an analysis from a template
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
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateCustomPermissions() {
    return this.to('CreateCustomPermissions');
  }

  /**
   * Grants permission to create a QuickSight Dashboard
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
   * Dependent actions:
   * - quicksight:PassDataSource
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
   * Grants permission to create a QuickSight email customization template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html
   */
  public toCreateEmailCustomizationTemplate() {
    return this.to('CreateEmailCustomizationTemplate');
  }

  /**
   * Grants permission to create a QuickSight folder
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateFolder.html
   */
  public toCreateFolder() {
    return this.to('CreateFolder');
  }

  /**
   * Grants permission to add a QuickSight Dashboard, Analysis or Dataset to a QuickSight Folder
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateFolderMembership.html
   */
  public toCreateFolderMembership() {
    return this.to('CreateFolderMembership');
  }

  /**
   * Grants permission to create a QuickSight group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    return this.to('CreateGroup');
  }

  /**
   * Grants permission to add a QuickSight user to a QuickSight group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateGroupMembership.html
   */
  public toCreateGroupMembership() {
    return this.to('CreateGroupMembership');
  }

  /**
   * Grants permission to create an assignment with one specified IAM Policy ARN that will be assigned to specified groups or users of QuickSight
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
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateNamespace.html
   */
  public toCreateNamespace() {
    return this.to('CreateNamespace');
  }

  /**
   * Grants permission to provision Amazon QuickSight readers
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateReader() {
    return this.to('CreateReader');
  }

  /**
   * Grants permission to create a template
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
   * Grants permission to create a template alias
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplateAlias.html
   */
  public toCreateTemplateAlias() {
    return this.to('CreateTemplateAlias');
  }

  /**
   * Grants permission to create a theme
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
   * Grants permission to create an alias for a theme version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateThemeAlias.html
   */
  public toCreateThemeAlias() {
    return this.to('CreateThemeAlias');
  }

  /**
   * Grants permission to provision Amazon QuickSight authors and readers
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to create a VPC connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/vpc-creating-a-connection-in-quicksight.html
   */
  public toCreateVPCConnection() {
    return this.to('CreateVPCConnection');
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
   * Grants permission to delete an analysis
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteAnalysis.html
   */
  public toDeleteAnalysis() {
    return this.to('DeleteAnalysis');
  }

  /**
   * Grants permission to delete a custom permissions resource
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toDeleteCustomPermissions() {
    return this.to('DeleteCustomPermissions');
  }

  /**
   * Grants permission to delete a QuickSight Dashboard
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
   * Grants permission to delete a QuickSight email customization template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html
   */
  public toDeleteEmailCustomizationTemplate() {
    return this.to('DeleteEmailCustomizationTemplate');
  }

  /**
   * Grants permission to delete a QuickSight Folder
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteFolder.html
   */
  public toDeleteFolder() {
    return this.to('DeleteFolder');
  }

  /**
   * Grants permission to remove a QuickSight Dashboard, Analysis or Dataset from a QuickSight Folder
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteFolderMembership.html
   */
  public toDeleteFolderMembership() {
    return this.to('DeleteFolderMembership');
  }

  /**
   * Grants permission to remove a user group from QuickSight
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Grants permission to remove a user from a group so that he/she is no longer a member of the group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteGroupMembership.html
   */
  public toDeleteGroupMembership() {
    return this.to('DeleteGroupMembership');
  }

  /**
   * Grants permission to update an existing assignment
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
   * Grants permission to delete a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTemplate.html
   */
  public toDeleteTemplate() {
    return this.to('DeleteTemplate');
  }

  /**
   * Grants permission to delete a template alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTemplateAlias.html
   */
  public toDeleteTemplateAlias() {
    return this.to('DeleteTemplateAlias');
  }

  /**
   * Grants permission to delete a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTheme.html
   */
  public toDeleteTheme() {
    return this.to('DeleteTheme');
  }

  /**
   * Grants permission to delete the alias of a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteThemeAlias.html
   */
  public toDeleteThemeAlias() {
    return this.to('DeleteThemeAlias');
  }

  /**
   * Grants permission to delete a QuickSight user, given the user name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to deletes a user identified by its principal ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteUserByPrincipalId.html
   */
  public toDeleteUserByPrincipalId() {
    return this.to('DeleteUserByPrincipalId');
  }

  /**
   * Grants permission to delete a VPC connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/vpc-creating-a-connection-in-quicksight.html
   */
  public toDeleteVPCConnection() {
    return this.to('DeleteVPCConnection');
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
   * Grants permission to describe an analysis
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAnalysis.html
   */
  public toDescribeAnalysis() {
    return this.to('DescribeAnalysis');
  }

  /**
   * Grants permission to describe permissions for an analysis
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
   * Grants permission to describe a QuickSight Dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboard.html
   */
  public toDescribeDashboard() {
    return this.to('DescribeDashboard');
  }

  /**
   * Grants permission to describe permissions for a QuickSight Dashboard
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
   * Grants permission to describe a QuickSight email customization template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html
   */
  public toDescribeEmailCustomizationTemplate() {
    return this.to('DescribeEmailCustomizationTemplate');
  }

  /**
   * Grants permission to describe a QuickSight Folder
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeFolder.html
   */
  public toDescribeFolder() {
    return this.to('DescribeFolder');
  }

  /**
   * Grants permission to describe permissions for a QuickSight Folder
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeFolderPermissions.html
   */
  public toDescribeFolderPermissions() {
    return this.to('DescribeFolderPermissions');
  }

  /**
   * Grants permission to describe resolved permissions for a QuickSight Folder
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeFolderResolvedPermissions.html
   */
  public toDescribeFolderResolvedPermissions() {
    return this.to('DescribeFolderResolvedPermissions');
  }

  /**
   * Grants permission to describe a QuickSight group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeGroup.html
   */
  public toDescribeGroup() {
    return this.to('DescribeGroup');
  }

  /**
   * Grants permission to describe an existing assignment
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
   * Grants permission to describe the IP restrictions for QuickSight account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeIpRestriction.html
   */
  public toDescribeIpRestriction() {
    return this.to('DescribeIpRestriction');
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
   * Grants permission to describe a template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplate.html
   */
  public toDescribeTemplate() {
    return this.to('DescribeTemplate');
  }

  /**
   * Grants permission to describe a template alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplateAlias.html
   */
  public toDescribeTemplateAlias() {
    return this.to('DescribeTemplateAlias');
  }

  /**
   * Grants permission to describe permissions for a template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplatePermissions.html
   */
  public toDescribeTemplatePermissions() {
    return this.to('DescribeTemplatePermissions');
  }

  /**
   * Grants permission to describe a theme
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTheme.html
   */
  public toDescribeTheme() {
    return this.to('DescribeTheme');
  }

  /**
   * Grants permission to describe a theme alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemeAlias.html
   */
  public toDescribeThemeAlias() {
    return this.to('DescribeThemeAlias');
  }

  /**
   * Grants permission to describe permissions for a theme
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemePermissions.html
   */
  public toDescribeThemePermissions() {
    return this.to('DescribeThemePermissions');
  }

  /**
   * Grants permission to describe a QuickSight user given the user name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeUser.html
   */
  public toDescribeUser() {
    return this.to('DescribeUser');
  }

  /**
   * Grants permission to generate a URL used to embed a QuickSight Dashboard for a user not registered with QuickSight
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForAnonymousUser.html
   */
  public toGenerateEmbedUrlForAnonymousUser() {
    return this.to('GenerateEmbedUrlForAnonymousUser');
  }

  /**
   * Grants permission to generate a URL used to embed a QuickSight Dashboard for a user registered with QuickSight
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForRegisteredUser.html
   */
  public toGenerateEmbedUrlForRegisteredUser() {
    return this.to('GenerateEmbedUrlForRegisteredUser');
  }

  /**
   * Grants permission to get a URL used to embed a QuickSight Dashboard for a user not registered with QuickSight
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html
   */
  public toGetAnonymousUserEmbedUrl() {
    return this.to('GetAnonymousUserEmbedUrl');
  }

  /**
   * Grants permission to get an auth code representing a QuickSight user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toGetAuthCode() {
    return this.to('GetAuthCode');
  }

  /**
   * Grants permission to get a URL used to embed a QuickSight Dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html
   */
  public toGetDashboardEmbedUrl() {
    return this.to('GetDashboardEmbedUrl');
  }

  /**
   * Grants permission to use Amazon QuickSight, in Enterprise edition, to identify and display the Microsoft Active Directory (Microsoft Active Directory) directory groups that are mapped to roles in Amazon QuickSight
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toGetGroupMapping() {
    return this.to('GetGroupMapping');
  }

  /**
   * Grants permission to get a URL to embed QuickSight console experience
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetSessionEmbedUrl.html
   */
  public toGetSessionEmbedUrl() {
    return this.to('GetSessionEmbedUrl');
  }

  /**
   * Grants permission to list all analyses in an account
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
   * Grants permission to list all versions of a QuickSight Dashboard
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDashboardVersions.html
   */
  public toListDashboardVersions() {
    return this.to('ListDashboardVersions');
  }

  /**
   * Grants permission to list all Dashboards in a QuickSight Account
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
   * Grants permission to list all members in a folder
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListFolderMembers.html
   */
  public toListFolderMembers() {
    return this.to('ListFolderMembers');
  }

  /**
   * Grants permission to list all Folders in a QuickSight Account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListFolders.html
   */
  public toListFolders() {
    return this.to('ListFolders');
  }

  /**
   * Grants permission to list member users in a group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListGroupMemberships.html
   */
  public toListGroupMemberships() {
    return this.to('ListGroupMemberships');
  }

  /**
   * Grants permission to list all user groups in QuickSight
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Grants permission to list all assignments in the current Amazon QuickSight account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIAMPolicyAssignments.html
   */
  public toListIAMPolicyAssignments() {
    return this.to('ListIAMPolicyAssignments');
  }

  /**
   * Grants permission to list all assignments assigned to a user and the groups it belongs
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
   * Access Level: List
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
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListNamespaces.html
   */
  public toListNamespaces() {
    return this.to('ListNamespaces');
  }

  /**
   * Grants permission to list tags of a QuickSight resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all aliases for a template
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplateAliases.html
   */
  public toListTemplateAliases() {
    return this.to('ListTemplateAliases');
  }

  /**
   * Grants permission to list all versions of a template
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplateVersions.html
   */
  public toListTemplateVersions() {
    return this.to('ListTemplateVersions');
  }

  /**
   * Grants permission to list all templates in a QuickSight account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplates.html
   */
  public toListTemplates() {
    return this.to('ListTemplates');
  }

  /**
   * Grants permission to list all aliases of a theme
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemeAliases.html
   */
  public toListThemeAliases() {
    return this.to('ListThemeAliases');
  }

  /**
   * Grants permission to list all versions of a theme
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemeVersions.html
   */
  public toListThemeVersions() {
    return this.to('ListThemeVersions');
  }

  /**
   * Grants permission to list all themes in an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemes.html
   */
  public toListThemes() {
    return this.to('ListThemes');
  }

  /**
   * Grants permission to list groups that a given user is a member of
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListUserGroups.html
   */
  public toListUserGroups() {
    return this.to('ListUserGroups');
  }

  /**
   * Grants permission to list all of the QuickSight users belonging to this account
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
   * Grants permission to create a QuickSight user, whose identity is associated with the IAM identity/role specified in the request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RegisterUser.html
   */
  public toRegisterUser() {
    return this.to('RegisterUser');
  }

  /**
   * Grants permission to restore a deleted analysis
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RestoreAnalysis.html
   */
  public toRestoreAnalysis() {
    return this.to('RestoreAnalysis');
  }

  /**
   * Scoping policies for permissions to AWS resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/accessing-data-sources.html
   */
  public toScopeDownPolicy() {
    return this.to('ScopeDownPolicy');
  }

  /**
   * Grants permission to search for a sub-set of analyses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchAnalyses.html
   */
  public toSearchAnalyses() {
    return this.to('SearchAnalyses');
  }

  /**
   * Grants permission to search for a sub-set of QuickSight Dashboards
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchDashboards.html
   */
  public toSearchDashboards() {
    return this.to('SearchDashboards');
  }

  /**
   * Grants permission to use Amazon QuickSight, in Enterprise edition, to display your Microsoft Active Directory directory groups so that you can choose which ones to map to roles in Amazon QuickSight
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toSearchDirectoryGroups() {
    return this.to('SearchDirectoryGroups');
  }

  /**
   * Grants permission to search for a sub-set of QuickSight Folders
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchFolders.html
   */
  public toSearchFolders() {
    return this.to('SearchFolders');
  }

  /**
   * Grants permission to use Amazon QuickSight, in Enterprise edition, to display your Microsoft Active Directory directory groups so that you can choose which ones to map to roles in Amazon QuickSight
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toSetGroupMapping() {
    return this.to('SetGroupMapping');
  }

  /**
   * Grants permission to subscribe to Amazon QuickSight, and also to allow the user to upgrade the subscription to Enterprise edition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEdition()
   * - .ifDirectoryType()
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toSubscribe() {
    return this.to('Subscribe');
  }

  /**
   * Grants permission to add tags to a QuickSight resource
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
   * Grants permission to unsubscribe from Amazon QuickSight, which permanently deletes all users and their resources from Amazon QuickSight
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toUnsubscribe() {
    return this.to('Unsubscribe');
  }

  /**
   * Grants permission to remove tags from a QuickSight resource
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
   * Grants permission to update an analysis
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAnalysis.html
   */
  public toUpdateAnalysis() {
    return this.to('UpdateAnalysis');
  }

  /**
   * Grants permission to update permissions for an analysis
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAnalysisPermissions.html
   */
  public toUpdateAnalysisPermissions() {
    return this.to('UpdateAnalysisPermissions');
  }

  /**
   * Grants permission to update a custom permissions resource
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toUpdateCustomPermissions() {
    return this.to('UpdateCustomPermissions');
  }

  /**
   * Grants permission to update a QuickSight Dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboard.html
   */
  public toUpdateDashboard() {
    return this.to('UpdateDashboard');
  }

  /**
   * Grants permission to update permissions for a QuickSight Dashboard
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardPermissions.html
   */
  public toUpdateDashboardPermissions() {
    return this.to('UpdateDashboardPermissions');
  }

  /**
   * Grants permission to update a QuickSight Dashboard’s Published Version
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
   * Dependent actions:
   * - quicksight:PassDataSource
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
   * Grants permission to update a QuickSight email customization template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html
   */
  public toUpdateEmailCustomizationTemplate() {
    return this.to('UpdateEmailCustomizationTemplate');
  }

  /**
   * Grants permission to update a QuickSight Folder
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateFolder.html
   */
  public toUpdateFolder() {
    return this.to('UpdateFolder');
  }

  /**
   * Grants permission to update permissions for a QuickSight Folder
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateFolderPermissions.html
   */
  public toUpdateFolderPermissions() {
    return this.to('UpdateFolderPermissions');
  }

  /**
   * Grants permission to change group description
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    return this.to('UpdateGroup');
  }

  /**
   * Grants permission to update an existing assignment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateIAMPolicyAssignment.html
   */
  public toUpdateIAMPolicyAssignment() {
    return this.to('UpdateIAMPolicyAssignment');
  }

  /**
   * Grants permission to update the IP restrictions for QuickSight account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateIpRestriction.html
   */
  public toUpdateIpRestriction() {
    return this.to('UpdateIpRestriction');
  }

  /**
   * Grants permission to update a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplate.html
   */
  public toUpdateTemplate() {
    return this.to('UpdateTemplate');
  }

  /**
   * Grants permission to update a template alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplateAlias.html
   */
  public toUpdateTemplateAlias() {
    return this.to('UpdateTemplateAlias');
  }

  /**
   * Grants permission to update permissions for a template
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplatePermissions.html
   */
  public toUpdateTemplatePermissions() {
    return this.to('UpdateTemplatePermissions');
  }

  /**
   * Grants permission to update a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTheme.html
   */
  public toUpdateTheme() {
    return this.to('UpdateTheme');
  }

  /**
   * Grants permission to update the alias of a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemeAlias.html
   */
  public toUpdateThemeAlias() {
    return this.to('UpdateThemeAlias');
  }

  /**
   * Grants permission to update permissions for a theme
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemePermissions.html
   */
  public toUpdateThemePermissions() {
    return this.to('UpdateThemePermissions');
  }

  /**
   * Grants permission to update an Amazon QuickSight user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateUser.html
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AccountConfigurations',
      'CancelIngestion',
      'CreateAccountCustomization',
      'CreateAdmin',
      'CreateAnalysis',
      'CreateDashboard',
      'CreateDataSet',
      'CreateDataSource',
      'CreateEmailCustomizationTemplate',
      'CreateFolder',
      'CreateFolderMembership',
      'CreateGroup',
      'CreateGroupMembership',
      'CreateIAMPolicyAssignment',
      'CreateIngestion',
      'CreateNamespace',
      'CreateReader',
      'CreateTemplate',
      'CreateTemplateAlias',
      'CreateTheme',
      'CreateThemeAlias',
      'CreateUser',
      'CreateVPCConnection',
      'DeleteAccountCustomization',
      'DeleteAnalysis',
      'DeleteDashboard',
      'DeleteDataSet',
      'DeleteDataSource',
      'DeleteEmailCustomizationTemplate',
      'DeleteFolder',
      'DeleteFolderMembership',
      'DeleteGroup',
      'DeleteGroupMembership',
      'DeleteIAMPolicyAssignment',
      'DeleteNamespace',
      'DeleteTemplate',
      'DeleteTemplateAlias',
      'DeleteTheme',
      'DeleteThemeAlias',
      'DeleteUser',
      'DeleteUserByPrincipalId',
      'DeleteVPCConnection',
      'DescribeCustomPermissions',
      'GenerateEmbedUrlForAnonymousUser',
      'GenerateEmbedUrlForRegisteredUser',
      'ListCustomPermissions',
      'RegisterUser',
      'RestoreAnalysis',
      'ScopeDownPolicy',
      'SetGroupMapping',
      'Subscribe',
      'Unsubscribe',
      'UpdateAccountCustomization',
      'UpdateAccountSettings',
      'UpdateAnalysis',
      'UpdateDashboard',
      'UpdateDashboardPublishedVersion',
      'UpdateDataSet',
      'UpdateDataSource',
      'UpdateEmailCustomizationTemplate',
      'UpdateFolder',
      'UpdateGroup',
      'UpdateIAMPolicyAssignment',
      'UpdateIpRestriction',
      'UpdateTemplate',
      'UpdateTemplateAlias',
      'UpdateTheme',
      'UpdateThemeAlias',
      'UpdateUser'
    ],
    'Permissions management': [
      'CreateCustomPermissions',
      'DeleteCustomPermissions',
      'DescribeDataSetPermissions',
      'DescribeDataSourcePermissions',
      'UpdateAnalysisPermissions',
      'UpdateCustomPermissions',
      'UpdateDashboardPermissions',
      'UpdateDataSetPermissions',
      'UpdateDataSourcePermissions',
      'UpdateFolderPermissions',
      'UpdateTemplatePermissions',
      'UpdateThemePermissions'
    ],
    Read: [
      'DescribeAccountCustomization',
      'DescribeAccountSettings',
      'DescribeAnalysis',
      'DescribeAnalysisPermissions',
      'DescribeDashboard',
      'DescribeDashboardPermissions',
      'DescribeDataSet',
      'DescribeDataSource',
      'DescribeEmailCustomizationTemplate',
      'DescribeFolder',
      'DescribeFolderPermissions',
      'DescribeFolderResolvedPermissions',
      'DescribeGroup',
      'DescribeIAMPolicyAssignment',
      'DescribeIngestion',
      'DescribeIpRestriction',
      'DescribeNamespace',
      'DescribeTemplate',
      'DescribeTemplateAlias',
      'DescribeTemplatePermissions',
      'DescribeTheme',
      'DescribeThemeAlias',
      'DescribeThemePermissions',
      'DescribeUser',
      'GetAnonymousUserEmbedUrl',
      'GetAuthCode',
      'GetDashboardEmbedUrl',
      'GetGroupMapping',
      'GetSessionEmbedUrl',
      'ListFolderMembers',
      'ListTagsForResource',
      'PassDataSet',
      'PassDataSource',
      'SearchFolders'
    ],
    List: [
      'ListAnalyses',
      'ListDashboardVersions',
      'ListDashboards',
      'ListDataSets',
      'ListDataSources',
      'ListFolders',
      'ListGroupMemberships',
      'ListGroups',
      'ListIAMPolicyAssignments',
      'ListIAMPolicyAssignmentsForUser',
      'ListIngestions',
      'ListNamespaces',
      'ListTemplateAliases',
      'ListTemplateVersions',
      'ListTemplates',
      'ListThemeAliases',
      'ListThemeVersions',
      'ListThemes',
      'ListUserGroups',
      'ListUsers',
      'SearchAnalyses',
      'SearchDashboards',
      'SearchDirectoryGroups'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
    return this.on(`arn:${ partition || 'aws' }:quicksight:${ region || '*' }:${ account || '*' }:user/${ resourceId }`);
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
    return this.on(`arn:${ partition || 'aws' }:quicksight:${ region || '*' }:${ account || '*' }:group/${ resourceId }`);
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
    return this.on(`arn:${ partition || 'aws' }:quicksight:${ region || '*' }:${ account || '*' }:analysis/${ resourceId }`);
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
    return this.on(`arn:${ partition || 'aws' }:quicksight:${ region || '*' }:${ account || '*' }:dashboard/${ resourceId }`);
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
    return this.on(`arn:${ partition || 'aws' }:quicksight:${ region || '*' }:${ account || '*' }:template/${ resourceId }`);
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
    return this.on(`arn:${ partition || 'aws' }:quicksight:${ region || '*' }:${ account || '*' }:datasource/${ resourceId }`);
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
    return this.on(`arn:${ partition || 'aws' }:quicksight:${ region || '*' }:${ account || '*' }:dataset/${ resourceId }`);
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
    return this.on(`arn:${ partition || 'aws' }:quicksight:${ region || '*' }:${ account || '*' }:dataset/${ datasetId }/ingestion/${ resourceId }`);
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
    return this.on(`arn:${ partition || 'aws' }:quicksight:${ region || '*' }:${ account || '*' }:theme/${ resourceId }`);
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
    return this.on(`arn:${ partition || 'aws' }:quicksight::${ account || '*' }:assignment/${ resourceId }`);
  }

  /**
   * Adds a resource of type customization to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_AccountCustomization.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCustomization(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:quicksight:${ region || '*' }:${ account || '*' }:customization/${ resourceId }`);
  }

  /**
   * Adds a resource of type namespace to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Namespace.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onNamespace(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:quicksight:${ region || '*' }:${ account || '*' }:namespace/${ resourceId }`);
  }

  /**
   * Adds a resource of type folder to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Folder.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFolder(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:quicksight:${ region || '*' }:${ account || '*' }:folder/${ resourceId }`);
  }

  /**
   * Adds a resource of type emailCustomizationTemplate to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEmailCustomizationTemplate(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:quicksight:${ region || '*' }:${ account || '*' }:email-customization-template/${ resourceId }`);
  }

  /**
   * Filters access by the user management options
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/security-scp.html
   *
   * Applies to actions:
   * - .toSubscribe()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDirectoryType(value: string | string[], operator?: Operator | string) {
    return this.if(`DirectoryType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the edition of QuickSight
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/security-scp.html
   *
   * Applies to actions:
   * - .toSubscribe()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEdition(value: string | string[], operator?: Operator | string) {
    return this.if(`Edition`, value, operator || 'StringLike');
  }

  /**
   * Filters access by IAM user or role ARN
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
   * Filters access by session name
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
   * Filters access by user name
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
