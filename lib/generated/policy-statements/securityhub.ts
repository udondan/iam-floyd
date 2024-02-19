import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [securityhub](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecurityhub.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Securityhub extends PolicyStatement {
  public servicePrefix = 'securityhub';

  /**
   * Statement provider for service [securityhub](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecurityhub.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept Security Hub invitations to become a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AcceptAdministratorInvitation.html
   */
  public toAcceptAdministratorInvitation() {
    return this.to('AcceptAdministratorInvitation');
  }

  /**
   * Grants permission to accept Security Hub invitations to become a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AcceptInvitation.html
   */
  public toAcceptInvitation() {
    return this.to('AcceptInvitation');
  }

  /**
   * Grants permission to delete one or more automation rules in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules
   */
  public toBatchDeleteAutomationRules() {
    return this.to('BatchDeleteAutomationRules');
  }

  /**
   * Grants permission to disable standards in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchDisableStandards.html
   */
  public toBatchDisableStandards() {
    return this.to('BatchDisableStandards');
  }

  /**
   * Grants permission to enable standards in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchEnableStandards.html
   */
  public toBatchEnableStandards() {
    return this.to('BatchEnableStandards');
  }

  /**
   * Grants permission to retrieve a list of details for automation rules from Security Hub based on rule Amazon Resource Names (ARNs)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules
   */
  public toBatchGetAutomationRules() {
    return this.to('BatchGetAutomationRules');
  }

  /**
   * Grants permission to retrieve information about configuration policies associated with a specific list of member accounts and organizational units of the calling account's organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchGetConfigurationPolicyAssociations.html
   */
  public toBatchGetConfigurationPolicyAssociations() {
    return this.to('BatchGetConfigurationPolicyAssociations');
  }

  /**
   * Grants permission to get the enablement and compliance status of controls, the findings count for controls, and the overall security score for controls on the Security Hub console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/latest/userguide/iam-permissions-controls-standards.html
   */
  public toBatchGetControlEvaluations() {
    return this.to('BatchGetControlEvaluations');
  }

  /**
   * Grants permission to get details about specific security controls identified by ID or ARN
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - securityhub:DescribeStandardsControls
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchGetSecurityControls.html
   */
  public toBatchGetSecurityControls() {
    return this.to('BatchGetSecurityControls');
  }

  /**
   * Grants permission to get the enablement status of a batch of security controls in standards
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - securityhub:DescribeStandardsControls
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchGetStandardsControlAssociations.html
   */
  public toBatchGetStandardsControlAssociations() {
    return this.to('BatchGetStandardsControlAssociations');
  }

  /**
   * Grants permission to import findings into Security Hub from an integrated product
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTargetAccount()
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html
   */
  public toBatchImportFindings() {
    return this.to('BatchImportFindings');
  }

  /**
   * Grants permission to update one or more automation rules from Security Hub based on rule Amazon Resource Names (ARNs) and input parameters
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules
   */
  public toBatchUpdateAutomationRules() {
    return this.to('BatchUpdateAutomationRules');
  }

  /**
   * Grants permission to update customer-controlled fields for a selected set of Security Hub findings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifASFFSyntaxPath()
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html
   */
  public toBatchUpdateFindings() {
    return this.to('BatchUpdateFindings');
  }

  /**
   * Grants permission to update the enablement status of a batch of security controls in standards
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - securityhub:UpdateStandardsControl
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html
   */
  public toBatchUpdateStandardsControlAssociations() {
    return this.to('BatchUpdateStandardsControlAssociations');
  }

  /**
   * Grants permission to create custom actions in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateActionTarget.html
   */
  public toCreateActionTarget() {
    return this.to('CreateActionTarget');
  }

  /**
   * Grants permission to create an automation rule based on input parameters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules
   */
  public toCreateAutomationRule() {
    return this.to('CreateAutomationRule');
  }

  /**
   * Grants permission to create a configuration policy to manage organization member settings in Security Hub
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateConfigurationPolicy.html
   */
  public toCreateConfigurationPolicy() {
    return this.to('CreateConfigurationPolicy');
  }

  /**
   * Grants permission to create a finding aggregator, which contains the cross-Region finding aggregation configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindingAggregator.html
   */
  public toCreateFindingAggregator() {
    return this.to('CreateFindingAggregator');
  }

  /**
   * Grants permission to create insights in Security Hub. Insights are collections of related findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateInsight.html
   */
  public toCreateInsight() {
    return this.to('CreateInsight');
  }

  /**
   * Grants permission to create member accounts in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateMembers.html
   */
  public toCreateMembers() {
    return this.to('CreateMembers');
  }

  /**
   * Grants permission to decline Security Hub invitations to become a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeclineInvitations.html
   */
  public toDeclineInvitations() {
    return this.to('DeclineInvitations');
  }

  /**
   * Grants permission to delete custom actions in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteActionTarget.html
   */
  public toDeleteActionTarget() {
    return this.to('DeleteActionTarget');
  }

  /**
   * Grants permission to delete an existing configuration policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteConfigurationPolicy.html
   */
  public toDeleteConfigurationPolicy() {
    return this.to('DeleteConfigurationPolicy');
  }

  /**
   * Grants permission to delete a finding aggregator, which disables finding aggregation across Regions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteFindingAggregator.html
   */
  public toDeleteFindingAggregator() {
    return this.to('DeleteFindingAggregator');
  }

  /**
   * Grants permission to delete insights from Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteInsight.html
   */
  public toDeleteInsight() {
    return this.to('DeleteInsight');
  }

  /**
   * Grants permission to delete Security Hub invitations to become a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteInvitations.html
   */
  public toDeleteInvitations() {
    return this.to('DeleteInvitations');
  }

  /**
   * Grants permission to delete Security Hub member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteMembers.html
   */
  public toDeleteMembers() {
    return this.to('DeleteMembers');
  }

  /**
   * Grants permission to retrieve a list of custom actions using the API
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeActionTargets.html
   */
  public toDescribeActionTargets() {
    return this.to('DescribeActionTargets');
  }

  /**
   * Grants permission to retrieve information about the hub resource in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeHub.html
   */
  public toDescribeHub() {
    return this.to('DescribeHub');
  }

  /**
   * Grants permission to describe the organization configuration for Security Hub
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeOrganizationConfiguration.html
   */
  public toDescribeOrganizationConfiguration() {
    return this.to('DescribeOrganizationConfiguration');
  }

  /**
   * Grants permission to retrieve information about the available Security Hub product integrations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeProducts.html
   */
  public toDescribeProducts() {
    return this.to('DescribeProducts');
  }

  /**
   * Grants permission to retrieve information about Security Hub standards
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html
   */
  public toDescribeStandards() {
    return this.to('DescribeStandards');
  }

  /**
   * Grants permission to retrieve information about Security Hub standards controls
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandardsControls.html
   */
  public toDescribeStandardsControls() {
    return this.to('DescribeStandardsControls');
  }

  /**
   * Grants permission to disable the findings importing for a Security Hub integrated product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableImportFindingsForProduct.html
   */
  public toDisableImportFindingsForProduct() {
    return this.to('DisableImportFindingsForProduct');
  }

  /**
   * Grants permission to remove the Security Hub administrator account for your organization
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - organizations:DescribeOrganization
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableOrganizationAdminAccount.html
   */
  public toDisableOrganizationAdminAccount() {
    return this.to('DisableOrganizationAdminAccount');
  }

  /**
   * Grants permission to disable Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableSecurityHub.html
   */
  public toDisableSecurityHub() {
    return this.to('DisableSecurityHub');
  }

  /**
   * Grants permission to a Security Hub member account to disassociate from the associated administrator account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateFromAdministratorAccount.html
   */
  public toDisassociateFromAdministratorAccount() {
    return this.to('DisassociateFromAdministratorAccount');
  }

  /**
   * Grants permission to a Security Hub member account to disassociate from the associated master account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateFromMasterAccount.html
   */
  public toDisassociateFromMasterAccount() {
    return this.to('DisassociateFromMasterAccount');
  }

  /**
   * Grants permission to disassociate Security Hub member accounts from the associated administrator account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateMembers.html
   */
  public toDisassociateMembers() {
    return this.to('DisassociateMembers');
  }

  /**
   * Grants permission to enable the findings importing for a Security Hub integrated product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableImportFindingsForProduct.html
   */
  public toEnableImportFindingsForProduct() {
    return this.to('EnableImportFindingsForProduct');
  }

  /**
   * Grants permission to designate a Security Hub administrator account for your organization
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - organizations:DescribeOrganization
   * - organizations:EnableAWSServiceAccess
   * - organizations:RegisterDelegatedAdministrator
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableOrganizationAdminAccount.html
   */
  public toEnableOrganizationAdminAccount() {
    return this.to('EnableOrganizationAdminAccount');
  }

  /**
   * Grants permission to enable Security Hub
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableSecurityHub.html
   */
  public toEnableSecurityHub() {
    return this.to('EnableSecurityHub');
  }

  /**
   * Grants permission to retrieve insight results by providing a set of filters instead of an insight ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetAdhocInsightResults.html
   */
  public toGetAdhocInsightResults() {
    return this.to('GetAdhocInsightResults');
  }

  /**
   * Grants permission to retrieve details about the Security Hub administrator account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetAdministratorAccount.html
   */
  public toGetAdministratorAccount() {
    return this.to('GetAdministratorAccount');
  }

  /**
   * Grants permission to get a complete overview of one configuration policy created by the calling account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetConfigurationPolicy.html
   */
  public toGetConfigurationPolicy() {
    return this.to('GetConfigurationPolicy');
  }

  /**
   * Grants permission to retrieve information about a configuration policy associated with a member account or organizational unit of the calling account's organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetConfigurationPolicyAssociation.html
   */
  public toGetConfigurationPolicyAssociation() {
    return this.to('GetConfigurationPolicyAssociation');
  }

  /**
   * Grants permission to retrieve a security score and counts of finding and control statuses for a security standard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetControlFindingSummary.html
   */
  public toGetControlFindingSummary() {
    return this.to('GetControlFindingSummary');
  }

  /**
   * Grants permission to retrieve a list of the standards that are enabled in Security Hub
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetEnabledStandards.html
   */
  public toGetEnabledStandards() {
    return this.to('GetEnabledStandards');
  }

  /**
   * Grants permission to retrieve details for a finding aggregator, which configures finding aggregation across Regions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindingAggregator.html
   */
  public toGetFindingAggregator() {
    return this.to('GetFindingAggregator');
  }

  /**
   * Grants permission to retrieve a list of finding history from Security Hub
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindingHistory.html
   */
  public toGetFindingHistory() {
    return this.to('GetFindingHistory');
  }

  /**
   * Grants permission to retrieve a list of findings from Security Hub
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindings.html
   */
  public toGetFindings() {
    return this.to('GetFindings');
  }

  /**
   * Grants permission to retrieve the end date for an account's free trial of Security Hub
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFreeTrialEndDate.html
   */
  public toGetFreeTrialEndDate() {
    return this.to('GetFreeTrialEndDate');
  }

  /**
   * Grants permission to retrieve information about Security Hub usage during the free trial period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFreeTrialUsage.html
   */
  public toGetFreeTrialUsage() {
    return this.to('GetFreeTrialUsage');
  }

  /**
   * Grants permission to retrieve an insight finding trend from Security Hub in order to generate a graph
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsightFindingTrend.html
   */
  public toGetInsightFindingTrend() {
    return this.to('GetInsightFindingTrend');
  }

  /**
   * Grants permission to retrieve insight results from Security Hub
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsightResults.html
   */
  public toGetInsightResults() {
    return this.to('GetInsightResults');
  }

  /**
   * Grants permission to retrieve Security Hub insights
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsights.html
   */
  public toGetInsights() {
    return this.to('GetInsights');
  }

  /**
   * Grants permission to retrieve the count of Security Hub membership invitations sent to the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInvitationsCount.html
   */
  public toGetInvitationsCount() {
    return this.to('GetInvitationsCount');
  }

  /**
   * Grants permission to retrieve details about the Security Hub master account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetMasterAccount.html
   */
  public toGetMasterAccount() {
    return this.to('GetMasterAccount');
  }

  /**
   * Grants permission to retrieve the details of Security Hub member accounts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetMembers.html
   */
  public toGetMembers() {
    return this.to('GetMembers');
  }

  /**
   * Grants permission to get the definition details of a specific security control identified by ID
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - securityhub:DescribeStandardsControls
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetSecurityControlDefinition.html
   */
  public toGetSecurityControlDefinition() {
    return this.to('GetSecurityControlDefinition');
  }

  /**
   * Grants permission to retrieve information about Security Hub usage by accounts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetUsage.html
   */
  public toGetUsage() {
    return this.to('GetUsage');
  }

  /**
   * Grants permission to invite other AWS accounts to become Security Hub member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_InviteMembers.html
   */
  public toInviteMembers() {
    return this.to('InviteMembers');
  }

  /**
   * Grants permission to retrieve a list of automation rules and their metadata for the calling account from Security Hub
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules
   */
  public toListAutomationRules() {
    return this.to('ListAutomationRules');
  }

  /**
   * Grants permission to list the summaries of all configuration policies created by the calling account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListConfigurationPolicies.html
   */
  public toListConfigurationPolicies() {
    return this.to('ListConfigurationPolicies');
  }

  /**
   * Grants permission to retrieve information about all configuration policies associationed with all member accounts and organizational units of the calling account's organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListConfigurationPolicyAssociations.html
   */
  public toListConfigurationPolicyAssociations() {
    return this.to('ListConfigurationPolicyAssociations');
  }

  /**
   * Grants permission to retrieve a list of controls for a standard, including the control IDs, statuses and finding counts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListControlEvaluationSummaries.html
   */
  public toListControlEvaluationSummaries() {
    return this.to('ListControlEvaluationSummaries');
  }

  /**
   * Grants permission to retrieve the Security Hub integrated products that are currently enabled
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListEnabledProductsForImport.html
   */
  public toListEnabledProductsForImport() {
    return this.to('ListEnabledProductsForImport');
  }

  /**
   * Grants permission to retrieve a list of finding aggregators, which contain the cross-Region finding aggregation configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindingAggregator.html
   */
  public toListFindingAggregators() {
    return this.to('ListFindingAggregators');
  }

  /**
   * Grants permission to retrieve the Security Hub invitations sent to the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListInvitations.html
   */
  public toListInvitations() {
    return this.to('ListInvitations');
  }

  /**
   * Grants permission to retrieve details about Security Hub member accounts associated with the administrator account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListMembers.html
   */
  public toListMembers() {
    return this.to('ListMembers');
  }

  /**
   * Grants permission to list the Security Hub administrator accounts for your organization
   *
   * Access Level: List
   *
   * Dependent actions:
   * - organizations:DescribeOrganization
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListOrganizationAdminAccounts.html
   */
  public toListOrganizationAdminAccounts() {
    return this.to('ListOrganizationAdminAccounts');
  }

  /**
   * Grants permission to retrieve a list of security control definitions, which contain details for security controls in the current region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListSecurityControlDefinitions.html
   */
  public toListSecurityControlDefinitions() {
    return this.to('ListSecurityControlDefinitions');
  }

  /**
   * Grants permission to list the enablement status of a security control in standards
   *
   * Access Level: List
   *
   * Dependent actions:
   * - securityhub:DescribeStandardsControls
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListStandardsControlAssociations.html
   */
  public toListStandardsControlAssociations() {
    return this.to('ListStandardsControlAssociations');
  }

  /**
   * Grants permission to list of tags associated with a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to use a custom action to send Security Hub findings to Amazon EventBridge
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_SendFindingEvents.html
   */
  public toSendFindingEvents() {
    return this.to('SendFindingEvents');
  }

  /**
   * Grants permission to use a custom action to send Security Hub insights to Amazon EventBridge
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_SendInsightEvents.html
   */
  public toSendInsightEvents() {
    return this.to('SendInsightEvents');
  }

  /**
   * Grants permission to associate a configuration policy with a member account or organizational unit in the calling account's organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_StartConfigurationPolicyAssociation.html
   */
  public toStartConfigurationPolicyAssociation() {
    return this.to('StartConfigurationPolicyAssociation');
  }

  /**
   * Grants permission to remove a configuration policy association from a member account or organizational unit in the calling account's organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_StartConfigurationPolicyDisassociation.html
   */
  public toStartConfigurationPolicyDisassociation() {
    return this.to('StartConfigurationPolicyDisassociation');
  }

  /**
   * Grants permission to add tags to a Security Hub resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a Security Hub resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update custom actions in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateActionTarget.html
   */
  public toUpdateActionTarget() {
    return this.to('UpdateActionTarget');
  }

  /**
   * Grants permission to update an existing configuration policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateConfigurationPolicy.html
   */
  public toUpdateConfigurationPolicy() {
    return this.to('UpdateConfigurationPolicy');
  }

  /**
   * Grants permission to update a finding aggregator, which contains the cross-Region finding aggregation configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindingAggregator.html
   */
  public toUpdateFindingAggregator() {
    return this.to('UpdateFindingAggregator');
  }

  /**
   * Grants permission to update Security Hub findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindings.html
   */
  public toUpdateFindings() {
    return this.to('UpdateFindings');
  }

  /**
   * Grants permission to update insights in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateInsight.html
   */
  public toUpdateInsight() {
    return this.to('UpdateInsight');
  }

  /**
   * Grants permission to update the organization configuration for Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateOrganizationConfiguration.html
   */
  public toUpdateOrganizationConfiguration() {
    return this.to('UpdateOrganizationConfiguration');
  }

  /**
   * Grants permission to update properties of a specific security control identified by ID or ARN
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - securityhub:UpdateStandardsControl
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateSecurityControl.html
   */
  public toUpdateSecurityControl() {
    return this.to('UpdateSecurityControl');
  }

  /**
   * Grants permission to update Security Hub configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateSecurityHubConfiguration.html
   */
  public toUpdateSecurityHubConfiguration() {
    return this.to('UpdateSecurityHubConfiguration');
  }

  /**
   * Grants permission to update Security Hub standards controls
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateStandardsControl.html
   */
  public toUpdateStandardsControl() {
    return this.to('UpdateStandardsControl');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptAdministratorInvitation',
      'AcceptInvitation',
      'BatchDeleteAutomationRules',
      'BatchDisableStandards',
      'BatchEnableStandards',
      'BatchImportFindings',
      'BatchUpdateAutomationRules',
      'BatchUpdateFindings',
      'BatchUpdateStandardsControlAssociations',
      'CreateActionTarget',
      'CreateAutomationRule',
      'CreateConfigurationPolicy',
      'CreateFindingAggregator',
      'CreateInsight',
      'CreateMembers',
      'DeclineInvitations',
      'DeleteActionTarget',
      'DeleteConfigurationPolicy',
      'DeleteFindingAggregator',
      'DeleteInsight',
      'DeleteInvitations',
      'DeleteMembers',
      'DisableImportFindingsForProduct',
      'DisableOrganizationAdminAccount',
      'DisableSecurityHub',
      'DisassociateFromAdministratorAccount',
      'DisassociateFromMasterAccount',
      'DisassociateMembers',
      'EnableImportFindingsForProduct',
      'EnableOrganizationAdminAccount',
      'EnableSecurityHub',
      'InviteMembers',
      'StartConfigurationPolicyAssociation',
      'StartConfigurationPolicyDisassociation',
      'UpdateActionTarget',
      'UpdateConfigurationPolicy',
      'UpdateFindingAggregator',
      'UpdateFindings',
      'UpdateInsight',
      'UpdateOrganizationConfiguration',
      'UpdateSecurityControl',
      'UpdateSecurityHubConfiguration',
      'UpdateStandardsControl'
    ],
    Read: [
      'BatchGetAutomationRules',
      'BatchGetConfigurationPolicyAssociations',
      'BatchGetControlEvaluations',
      'BatchGetSecurityControls',
      'BatchGetStandardsControlAssociations',
      'DescribeActionTargets',
      'DescribeHub',
      'DescribeOrganizationConfiguration',
      'DescribeProducts',
      'DescribeStandards',
      'DescribeStandardsControls',
      'GetAdhocInsightResults',
      'GetAdministratorAccount',
      'GetConfigurationPolicy',
      'GetConfigurationPolicyAssociation',
      'GetControlFindingSummary',
      'GetFindingAggregator',
      'GetFindingHistory',
      'GetFindings',
      'GetFreeTrialEndDate',
      'GetFreeTrialUsage',
      'GetInsightFindingTrend',
      'GetInsightResults',
      'GetInvitationsCount',
      'GetMasterAccount',
      'GetMembers',
      'GetSecurityControlDefinition',
      'GetUsage',
      'ListControlEvaluationSummaries',
      'ListTagsForResource',
      'SendFindingEvents',
      'SendInsightEvents'
    ],
    List: [
      'GetEnabledStandards',
      'GetInsights',
      'ListAutomationRules',
      'ListConfigurationPolicies',
      'ListConfigurationPolicyAssociations',
      'ListEnabledProductsForImport',
      'ListFindingAggregators',
      'ListInvitations',
      'ListMembers',
      'ListOrganizationAdminAccounts',
      'ListSecurityControlDefinitions',
      'ListStandardsControlAssociations'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type hub to the statement
   *
   * https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-access.html#resources
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHub(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityhub:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:hub/default`);
  }

  /**
   * Adds a resource of type product to the statement
   *
   * https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-access.html#resources
   *
   * @param company - Identifier for the company.
   * @param productId - Identifier for the productId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProduct(company: string, productId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityhub:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:product/${ company }/${ productId }`);
  }

  /**
   * Adds a resource of type finding-aggregator to the statement
   *
   * https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-access.html#resources
   *
   * @param findingAggregatorId - Identifier for the findingAggregatorId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onFindingAggregator(findingAggregatorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityhub:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:finding-aggregator/${ findingAggregatorId }`);
  }

  /**
   * Adds a resource of type automation-rule to the statement
   *
   * https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules
   *
   * @param automationRuleId - Identifier for the automationRuleId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAutomationRule(automationRuleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityhub:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:automation-rule/${ automationRuleId }`);
  }

  /**
   * Adds a resource of type configuration-policy to the statement
   *
   * https://docs.aws.amazon.com/securityhub/latest/userguide/central-configuration-intro.html
   *
   * @param configurationPolicyId - Identifier for the configurationPolicyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConfigurationPolicy(configurationPolicyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityhub:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:configuration-policy/${ configurationPolicyId }`);
  }

  /**
   * Filters access by actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAutomationRule()
   * - .toCreateConfigurationPolicy()
   * - .toEnableSecurityHub()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - hub
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAutomationRule()
   * - .toCreateConfigurationPolicy()
   * - .toEnableSecurityHub()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the specified fields and values in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-asffsyntaxpath
   *
   * Applies to actions:
   * - .toBatchUpdateFindings()
   *
   * @param aSFFSyntaxPath The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifASFFSyntaxPath(aSFFSyntaxPath: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ASFFSyntaxPath/${ aSFFSyntaxPath }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the AwsAccountId field that is specified in the request
   *
   * https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-access.html#conditions
   *
   * Applies to actions:
   * - .toBatchImportFindings()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTargetAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`TargetAccount`, value, operator ?? 'StringLike');
  }
}
