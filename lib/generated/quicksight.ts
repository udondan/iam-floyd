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
   * Grants permission to enable setting default access to AWS resources
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
   * Grants permission to subscribe to QuickSight
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEdition()
   * - .ifDirectoryType()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateAccountSubscription.html
   */
  public toCreateAccountSubscription() {
    return this.to('CreateAccountSubscription');
  }

  /**
   * Grants permission to provision Amazon QuickSight administrators, authors, and readers
   *
   * Access Level: Write
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
   * Dependent actions:
   * - iam:PassRole
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
   * Dependent actions:
   * - ds:CreateIdentityPoolDirectory
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
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateReader() {
    return this.to('CreateReader');
  }

  /**
   * Grants permission to create a refresh schedule for a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateRefreshSchedule.html
   */
  public toCreateRefreshSchedule() {
    return this.to('CreateRefreshSchedule');
  }

  /**
   * Grants permission to add a group member to a role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateRoleMembership.html
   */
  public toCreateRoleMembership() {
    return this.to('CreateRoleMembership');
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
   * Grants permission to create a topic
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - quicksight:PassDataSet
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTopic.html
   */
  public toCreateTopic() {
    return this.to('CreateTopic');
  }

  /**
   * Grants permission to create a refresh schedule for a topic
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTopicRefreshSchedule.html
   */
  public toCreateTopicRefreshSchedule() {
    return this.to('CreateTopicRefreshSchedule');
  }

  /**
   * Grants permission to provision Amazon QuickSight authors and readers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to create a vpc connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateVPCConnection.html
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
   * Grants permission to delete a QuickSight account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteAccountSubscription.html
   */
  public toDeleteAccountSubscription() {
    return this.to('DeleteAccountSubscription');
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
   * Grants permission to delete dataset refresh properties for a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteDataSetRefreshProperties.html
   */
  public toDeleteDataSetRefreshProperties() {
    return this.to('DeleteDataSetRefreshProperties');
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
   * Grants permission to remove AWS services for trusted identity propagation in QuickSight
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteIdentityPropagationConfig.html
   */
  public toDeleteIdentityPropagationConfig() {
    return this.to('DeleteIdentityPropagationConfig');
  }

  /**
   * Grants permission to delete a QuickSight namespace
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:DeleteDirectory
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteNamespace.html
   */
  public toDeleteNamespace() {
    return this.to('DeleteNamespace');
  }

  /**
   * Grants permission to delete a refresh schedule for a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteRefreshSchedule.html
   */
  public toDeleteRefreshSchedule() {
    return this.to('DeleteRefreshSchedule');
  }

  /**
   * Grants permission to remove the custom permission associated with a role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteRoleCustomPermission.html
   */
  public toDeleteRoleCustomPermission() {
    return this.to('DeleteRoleCustomPermission');
  }

  /**
   * Grants permission to remove a group member from a role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteRoleMembership.html
   */
  public toDeleteRoleMembership() {
    return this.to('DeleteRoleMembership');
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
   * Grants permission to delete a topic
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTopic.html
   */
  public toDeleteTopic() {
    return this.to('DeleteTopic');
  }

  /**
   * Grants permission to delete a refresh schedule for a topic
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTopicRefreshSchedule.html
   */
  public toDeleteTopicRefreshSchedule() {
    return this.to('DeleteTopicRefreshSchedule');
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
   * Grants permission to delete a vpc connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteVPCConnection.html
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
   * Grants permission to describe a QuickSight account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAccountSubscription.html
   */
  public toDescribeAccountSubscription() {
    return this.to('DescribeAccountSubscription');
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
   * Grants permission to describe an asset bundle export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAssetBundleExportJob.html
   */
  public toDescribeAssetBundleExportJob() {
    return this.to('DescribeAssetBundleExportJob');
  }

  /**
   * Grants permission to describe an asset bundle import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAssetBundleImportJob.html
   */
  public toDescribeAssetBundleImportJob() {
    return this.to('DescribeAssetBundleImportJob');
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
   * Grants permission to describe a dashboard snapshot job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardSnapshotJob.html
   */
  public toDescribeDashboardSnapshotJob() {
    return this.to('DescribeDashboardSnapshotJob');
  }

  /**
   * Grants permission to describe result of a dashboard snapshot job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardSnapshotJobResult.html
   */
  public toDescribeDashboardSnapshotJobResult() {
    return this.to('DescribeDashboardSnapshotJobResult');
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
   * Grants permission to describe refresh properties for a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDataSetRefreshProperties.html
   */
  public toDescribeDataSetRefreshProperties() {
    return this.to('DescribeDataSetRefreshProperties');
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
   * Grants permission to describe a QuickSight group member
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeGroupMembership.html
   */
  public toDescribeGroupMembership() {
    return this.to('DescribeGroupMembership');
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
   * Grants permission to describe a refresh schedule for a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeRefreshSchedule.html
   */
  public toDescribeRefreshSchedule() {
    return this.to('DescribeRefreshSchedule');
  }

  /**
   * Grants permission to describe the custom permission associated with a role
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeRoleCustomPermission.html
   */
  public toDescribeRoleCustomPermission() {
    return this.to('DescribeRoleCustomPermission');
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
   * Grants permission to describe a topic
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTopic.html
   */
  public toDescribeTopic() {
    return this.to('DescribeTopic');
  }

  /**
   * Grants permission to describe the resource policy of a topic
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTopicPermissions.html
   */
  public toDescribeTopicPermissions() {
    return this.to('DescribeTopicPermissions');
  }

  /**
   * Grants permission to describe the refresh status of a topic
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTopicRefresh.html
   */
  public toDescribeTopicRefresh() {
    return this.to('DescribeTopicRefresh');
  }

  /**
   * Grants permission to describe a refresh schedule for a topic
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTopicRefreshSchedule.html
   */
  public toDescribeTopicRefreshSchedule() {
    return this.to('DescribeTopicRefreshSchedule');
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
   * Grants permission to describe a vpc connection
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeVPCConnection.html
   */
  public toDescribeVPCConnection() {
    return this.to('DescribeVPCConnection');
  }

  /**
   * Grants permission to generate a URL used to embed a QuickSight Dashboard or Q Topic for a user not registered with QuickSight
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAllowedEmbeddingDomains()
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
   * Possible conditions:
   * - .ifAllowedEmbeddingDomains()
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
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
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
   * Grants permission to list all asset bundle export jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListAssetBundleExportJobs.html
   */
  public toListAssetBundleExportJobs() {
    return this.to('ListAssetBundleExportJobs');
  }

  /**
   * Grants permission to list all asset bundle import jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListAssetBundleImportJobs.html
   */
  public toListAssetBundleImportJobs() {
    return this.to('ListAssetBundleImportJobs');
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
   * Grants permission to list all registered customer managed keys
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/key-management.html
   */
  public toListCustomerManagedKeys() {
    return this.to('ListCustomerManagedKeys');
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
   * Grants permission to list AWS services enabled for trusted identity propagation in QuickSight
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIdentityPropagationConfigs.html
   */
  public toListIdentityPropagationConfigs() {
    return this.to('ListIdentityPropagationConfigs');
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
   * Grants permission to list a user's KMS keys
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/key-management.html
   */
  public toListKMSKeysForUser() {
    return this.to('ListKMSKeysForUser');
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
   * Grants permission to list all refresh schedules on a dataset
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListRefreshSchedules.html
   */
  public toListRefreshSchedules() {
    return this.to('ListRefreshSchedules');
  }

  /**
   * Grants permission to list the members of a role
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListRoleMemberships.html
   */
  public toListRoleMemberships() {
    return this.to('ListRoleMemberships');
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
   * Grants permission to list all refresh schedules on a topic
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTopicRefreshSchedules.html
   */
  public toListTopicRefreshSchedules() {
    return this.to('ListTopicRefreshSchedules');
  }

  /**
   * Grants permission to list all topics
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTopics.html
   */
  public toListTopics() {
    return this.to('ListTopics');
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
   * Grants permission to list all vpc connections
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListVPCConnections.html
   */
  public toListVPCConnections() {
    return this.to('ListVPCConnections');
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
   * Grants permission to put dataset refresh properties for a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_PutDataSetRefreshProperties.html
   */
  public toPutDataSetRefreshProperties() {
    return this.to('PutDataSetRefreshProperties');
  }

  /**
   * Grants permission to register a customer managed key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/key-management.html
   */
  public toRegisterCustomerManagedKey() {
    return this.to('RegisterCustomerManagedKey');
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
   * Grants permission to remove a customer managed key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/key-management.html
   */
  public toRemoveCustomerManagedKey() {
    return this.to('RemoveCustomerManagedKey');
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
   * Grants permission to manage scoping policies for permissions to AWS resources
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
   * Grants permission to search for a sub-set of QuickSight DatSets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchDataSets.html
   */
  public toSearchDataSets() {
    return this.to('SearchDataSets');
  }

  /**
   * Grants permission to search for a sub-set of QuickSight Data Sources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchDataSources.html
   */
  public toSearchDataSources() {
    return this.to('SearchDataSources');
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
   * Grants permission to search for a sub-set of QuickSight groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchGroups.html
   */
  public toSearchGroups() {
    return this.to('SearchGroups');
  }

  /**
   * Grants permission to search the QuickSight users belonging to this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  public toSearchUsers() {
    return this.to('SearchUsers');
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
   * Grants permission to start an asset bundle export job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_StartAssetBundleExportJob.html
   */
  public toStartAssetBundleExportJob() {
    return this.to('StartAssetBundleExportJob');
  }

  /**
   * Grants permission to start an asset bundle import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_StartAssetBundleImportJob.html
   */
  public toStartAssetBundleImportJob() {
    return this.to('StartAssetBundleImportJob');
  }

  /**
   * Grants permission to start a dashboard snapshot job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_StartDashboardSnapshotJob.html
   */
  public toStartDashboardSnapshotJob() {
    return this.to('StartDashboardSnapshotJob');
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
   * Grants permission to update a QuickSight Dashboard’s links
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardLinks.html
   */
  public toUpdateDashboardLinks() {
    return this.to('UpdateDashboardLinks');
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
   * Dependent actions:
   * - iam:PassRole
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
   * Grants permission to add and update AWS services for trusted identity propagation in QuickSight
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateIdentityPropagationConfig.html
   */
  public toUpdateIdentityPropagationConfig() {
    return this.to('UpdateIdentityPropagationConfig');
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
   * Grants permission to enable or disable public sharing on an account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdatePublicSharingSettings.html
   */
  public toUpdatePublicSharingSettings() {
    return this.to('UpdatePublicSharingSettings');
  }

  /**
   * Grants permission to update a refresh schedule for a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateRefreshSchedule.html
   */
  public toUpdateRefreshSchedule() {
    return this.to('UpdateRefreshSchedule');
  }

  /**
   * Grants permission to update resource-level permissions in QuickSight
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/security_iam_service-with-iam.html
   */
  public toUpdateResourcePermissions() {
    return this.to('UpdateResourcePermissions');
  }

  /**
   * Grants permission to update the custom permission associated with a role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateRoleCustomPermission.html
   */
  public toUpdateRoleCustomPermission() {
    return this.to('UpdateRoleCustomPermission');
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
   * Grants permission to update a topic
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - quicksight:PassDataSet
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTopic.html
   */
  public toUpdateTopic() {
    return this.to('UpdateTopic');
  }

  /**
   * Grants permission to update the resource policy of a topic
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTopicPermissions.html
   */
  public toUpdateTopicPermissions() {
    return this.to('UpdateTopicPermissions');
  }

  /**
   * Grants permission to update a refresh schedule for a topic
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTopicRefreshSchedule.html
   */
  public toUpdateTopicRefreshSchedule() {
    return this.to('UpdateTopicRefreshSchedule');
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

  /**
   * Grants permission to update a vpc connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateVPCConnection.html
   */
  public toUpdateVPCConnection() {
    return this.to('UpdateVPCConnection');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AccountConfigurations',
      'CancelIngestion',
      'CreateAccountCustomization',
      'CreateAccountSubscription',
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
      'CreateRefreshSchedule',
      'CreateRoleMembership',
      'CreateTemplate',
      'CreateTemplateAlias',
      'CreateTheme',
      'CreateThemeAlias',
      'CreateTopic',
      'CreateTopicRefreshSchedule',
      'CreateUser',
      'CreateVPCConnection',
      'DeleteAccountCustomization',
      'DeleteAccountSubscription',
      'DeleteAnalysis',
      'DeleteDashboard',
      'DeleteDataSet',
      'DeleteDataSetRefreshProperties',
      'DeleteDataSource',
      'DeleteEmailCustomizationTemplate',
      'DeleteFolder',
      'DeleteFolderMembership',
      'DeleteGroup',
      'DeleteGroupMembership',
      'DeleteIAMPolicyAssignment',
      'DeleteIdentityPropagationConfig',
      'DeleteNamespace',
      'DeleteRefreshSchedule',
      'DeleteRoleCustomPermission',
      'DeleteRoleMembership',
      'DeleteTemplate',
      'DeleteTemplateAlias',
      'DeleteTheme',
      'DeleteThemeAlias',
      'DeleteTopic',
      'DeleteTopicRefreshSchedule',
      'DeleteUser',
      'DeleteUserByPrincipalId',
      'DeleteVPCConnection',
      'DescribeCustomPermissions',
      'GenerateEmbedUrlForAnonymousUser',
      'GenerateEmbedUrlForRegisteredUser',
      'ListCustomPermissions',
      'PutDataSetRefreshProperties',
      'RegisterCustomerManagedKey',
      'RegisterUser',
      'RemoveCustomerManagedKey',
      'RestoreAnalysis',
      'ScopeDownPolicy',
      'SetGroupMapping',
      'StartAssetBundleExportJob',
      'StartAssetBundleImportJob',
      'StartDashboardSnapshotJob',
      'Subscribe',
      'Unsubscribe',
      'UpdateAccountCustomization',
      'UpdateAccountSettings',
      'UpdateAnalysis',
      'UpdateDashboard',
      'UpdateDashboardLinks',
      'UpdateDashboardPublishedVersion',
      'UpdateDataSet',
      'UpdateDataSource',
      'UpdateEmailCustomizationTemplate',
      'UpdateFolder',
      'UpdateGroup',
      'UpdateIAMPolicyAssignment',
      'UpdateIdentityPropagationConfig',
      'UpdateIpRestriction',
      'UpdatePublicSharingSettings',
      'UpdateRefreshSchedule',
      'UpdateResourcePermissions',
      'UpdateRoleCustomPermission',
      'UpdateTemplate',
      'UpdateTemplateAlias',
      'UpdateTheme',
      'UpdateThemeAlias',
      'UpdateTopic',
      'UpdateTopicRefreshSchedule',
      'UpdateUser',
      'UpdateVPCConnection'
    ],
    'Permissions management': [
      'CreateCustomPermissions',
      'DeleteCustomPermissions',
      'DescribeDataSetPermissions',
      'DescribeDataSourcePermissions',
      'DescribeTopicPermissions',
      'UpdateAnalysisPermissions',
      'UpdateCustomPermissions',
      'UpdateDashboardPermissions',
      'UpdateDataSetPermissions',
      'UpdateDataSourcePermissions',
      'UpdateFolderPermissions',
      'UpdateTemplatePermissions',
      'UpdateThemePermissions',
      'UpdateTopicPermissions'
    ],
    Read: [
      'DescribeAccountCustomization',
      'DescribeAccountSettings',
      'DescribeAccountSubscription',
      'DescribeAnalysis',
      'DescribeAnalysisPermissions',
      'DescribeAssetBundleExportJob',
      'DescribeAssetBundleImportJob',
      'DescribeDashboard',
      'DescribeDashboardPermissions',
      'DescribeDashboardSnapshotJob',
      'DescribeDashboardSnapshotJobResult',
      'DescribeDataSet',
      'DescribeDataSetRefreshProperties',
      'DescribeDataSource',
      'DescribeEmailCustomizationTemplate',
      'DescribeFolder',
      'DescribeFolderPermissions',
      'DescribeFolderResolvedPermissions',
      'DescribeGroup',
      'DescribeGroupMembership',
      'DescribeIAMPolicyAssignment',
      'DescribeIngestion',
      'DescribeIpRestriction',
      'DescribeNamespace',
      'DescribeRefreshSchedule',
      'DescribeRoleCustomPermission',
      'DescribeTemplate',
      'DescribeTemplateAlias',
      'DescribeTemplatePermissions',
      'DescribeTheme',
      'DescribeThemeAlias',
      'DescribeThemePermissions',
      'DescribeTopic',
      'DescribeTopicRefresh',
      'DescribeTopicRefreshSchedule',
      'DescribeUser',
      'DescribeVPCConnection',
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
      'ListAssetBundleExportJobs',
      'ListAssetBundleImportJobs',
      'ListCustomerManagedKeys',
      'ListDashboardVersions',
      'ListDashboards',
      'ListDataSets',
      'ListDataSources',
      'ListFolders',
      'ListGroupMemberships',
      'ListGroups',
      'ListIAMPolicyAssignments',
      'ListIAMPolicyAssignmentsForUser',
      'ListIdentityPropagationConfigs',
      'ListIngestions',
      'ListKMSKeysForUser',
      'ListNamespaces',
      'ListRefreshSchedules',
      'ListRoleMemberships',
      'ListTemplateAliases',
      'ListTemplateVersions',
      'ListTemplates',
      'ListThemeAliases',
      'ListThemeVersions',
      'ListThemes',
      'ListTopicRefreshSchedules',
      'ListTopics',
      'ListUserGroups',
      'ListUsers',
      'ListVPCConnections',
      'SearchAnalyses',
      'SearchDashboards',
      'SearchDataSets',
      'SearchDataSources',
      'SearchDirectoryGroups',
      'SearchGroups',
      'SearchUsers'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type account to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_AccountInfo.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAccount(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:account/${ resourceId }`);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_User.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onUser(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:user/${ resourceId }`);
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Group.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onGroup(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:group/${ resourceId }`);
  }

  /**
   * Adds a resource of type analysis to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Analysis.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAnalysis(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:analysis/${ resourceId }`);
  }

  /**
   * Adds a resource of type dashboard to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Dashboard.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDashboard(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:dashboard/${ resourceId }`);
  }

  /**
   * Adds a resource of type template to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Template.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTemplate(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:template/${ resourceId }`);
  }

  /**
   * Adds a resource of type vpcconnection to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_VPCConnection.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVpcconnection(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:vpcConnection/${ resourceId }`);
  }

  /**
   * Adds a resource of type assetBundleExportJob to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_AssetBundleExportJob.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAssetBundleExportJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:asset-bundle-export-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type assetBundleImportJob to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_AssetBundleImportJob.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAssetBundleImportJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:asset-bundle-import-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type datasource to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DataSource.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatasource(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:datasource/${ resourceId }`);
  }

  /**
   * Adds a resource of type dataset to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DataSet.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataset(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:dataset/${ resourceId }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIngestion(datasetId: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:dataset/${ datasetId }/ingestion/${ resourceId }`);
  }

  /**
   * Adds a resource of type refreshschedule to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RefreshSchedule.html
   *
   * @param datasetId - Identifier for the datasetId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onRefreshschedule(datasetId: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:dataset/${ datasetId }/refresh-schedule/${ resourceId }`);
  }

  /**
   * Adds a resource of type theme to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Theme.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTheme(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:theme/${ resourceId }`);
  }

  /**
   * Adds a resource of type assignment to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_IAMPolicyAssignment.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAssignment(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight::${ account || '*' }:assignment/${ resourceId }`);
  }

  /**
   * Adds a resource of type customization to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_AccountCustomization.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCustomization(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:customization/${ resourceId }`);
  }

  /**
   * Adds a resource of type namespace to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_NamespaceInfoV2.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onNamespace(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:namespace/${ resourceId }`);
  }

  /**
   * Adds a resource of type folder to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Folder.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFolder(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:folder/${ resourceId }`);
  }

  /**
   * Adds a resource of type emailCustomizationTemplate to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEmailCustomizationTemplate(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:email-customization-template/${ resourceId }`);
  }

  /**
   * Adds a resource of type topic to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_TopicDetails.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTopic(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:topic/${ resourceId }`);
  }

  /**
   * Adds a resource of type dashboardSnapshotJob to the statement
   *
   * https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DashboardSnapshotJob.html
   *
   * @param dashboardId - Identifier for the dashboardId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDashboardSnapshotJob(dashboardId: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Quicksight.defaultPartition }:quicksight:${ region || '*' }:${ account || '*' }:dashboard/${ dashboardId }/snapshot-job/${ resourceId }`);
  }

  /**
   * Filters access by tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCancelIngestion()
   * - .toCreateAccountCustomization()
   * - .toCreateAnalysis()
   * - .toCreateCustomPermissions()
   * - .toCreateDashboard()
   * - .toCreateDataSet()
   * - .toCreateDataSource()
   * - .toCreateFolder()
   * - .toCreateGroupMembership()
   * - .toCreateIngestion()
   * - .toCreateTemplate()
   * - .toCreateTemplateAlias()
   * - .toCreateTheme()
   * - .toCreateThemeAlias()
   * - .toCreateTopic()
   * - .toCreateVPCConnection()
   * - .toDeleteDataSet()
   * - .toDeleteDataSource()
   * - .toDeleteTopic()
   * - .toDeleteVPCConnection()
   * - .toDescribeDataSet()
   * - .toDescribeDataSetPermissions()
   * - .toDescribeDataSource()
   * - .toDescribeDataSourcePermissions()
   * - .toDescribeIngestion()
   * - .toDescribeTopic()
   * - .toDescribeTopicPermissions()
   * - .toDescribeTopicRefresh()
   * - .toDescribeVPCConnection()
   * - .toGenerateEmbedUrlForAnonymousUser()
   * - .toListDataSets()
   * - .toListDataSources()
   * - .toListIngestions()
   * - .toListTopics()
   * - .toListVPCConnections()
   * - .toPassDataSet()
   * - .toPassDataSource()
   * - .toTagResource()
   * - .toUpdateDataSet()
   * - .toUpdateDataSetPermissions()
   * - .toUpdateDataSource()
   * - .toUpdateDataSourcePermissions()
   * - .toUpdateTopic()
   * - .toUpdateTopicPermissions()
   * - .toUpdateVPCConnection()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - analysis
   * - dashboard
   * - template
   * - vpcconnection
   * - datasource
   * - dataset
   * - ingestion
   * - theme
   * - customization
   * - folder
   * - topic
   * - dashboardSnapshotJob
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by tag keys
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCancelIngestion()
   * - .toCreateAccountCustomization()
   * - .toCreateAnalysis()
   * - .toCreateCustomPermissions()
   * - .toCreateDashboard()
   * - .toCreateDataSet()
   * - .toCreateDataSource()
   * - .toCreateFolder()
   * - .toCreateGroupMembership()
   * - .toCreateIngestion()
   * - .toCreateTemplate()
   * - .toCreateTemplateAlias()
   * - .toCreateTheme()
   * - .toCreateThemeAlias()
   * - .toCreateTopic()
   * - .toCreateVPCConnection()
   * - .toDeleteDataSet()
   * - .toDeleteDataSource()
   * - .toDeleteTopic()
   * - .toDeleteVPCConnection()
   * - .toDescribeDataSet()
   * - .toDescribeDataSetPermissions()
   * - .toDescribeDataSource()
   * - .toDescribeDataSourcePermissions()
   * - .toDescribeIngestion()
   * - .toDescribeTopic()
   * - .toDescribeTopicPermissions()
   * - .toDescribeTopicRefresh()
   * - .toDescribeVPCConnection()
   * - .toGenerateEmbedUrlForAnonymousUser()
   * - .toListDataSets()
   * - .toListDataSources()
   * - .toListIngestions()
   * - .toListTopics()
   * - .toListVPCConnections()
   * - .toPassDataSet()
   * - .toPassDataSource()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateDataSet()
   * - .toUpdateDataSetPermissions()
   * - .toUpdateDataSource()
   * - .toUpdateDataSourcePermissions()
   * - .toUpdateTopic()
   * - .toUpdateTopicPermissions()
   * - .toUpdateVPCConnection()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the allowed embedding domains
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/embedded-dashboards-for-authenticated-users-step-1.html
   *
   * Applies to actions:
   * - .toGenerateEmbedUrlForAnonymousUser()
   * - .toGenerateEmbedUrlForRegisteredUser()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAllowedEmbeddingDomains(value: string | string[], operator?: Operator | string) {
    return this.if(`AllowedEmbeddingDomains`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the user management options
   *
   * https://docs.aws.amazon.com/quicksight/latest/user/security-scp.html
   *
   * Applies to actions:
   * - .toCreateAccountSubscription()
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
   * - .toCreateAccountSubscription()
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifIamArn(value: string | string[], operator?: Operator | string) {
    return this.if(`IamArn`, value, operator || 'ArnLike');
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
   * - .toDescribeGroupMembership()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUserName(value: string | string[], operator?: Operator | string) {
    return this.if(`UserName`, value, operator || 'StringLike');
  }
}
