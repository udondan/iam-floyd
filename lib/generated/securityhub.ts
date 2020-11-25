import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept Security Hub invitations to become a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AcceptInvitation.html
   */
  public toAcceptInvitation() {
    this.to('securityhub:AcceptInvitation');
    return this;
  }

  /**
   * Grants permission to disable standards in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchDisableStandards.html
   */
  public toBatchDisableStandards() {
    this.to('securityhub:BatchDisableStandards');
    return this;
  }

  /**
   * Grants permission to enable standards in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchEnableStandards.html
   */
  public toBatchEnableStandards() {
    this.to('securityhub:BatchEnableStandards');
    return this;
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
    this.to('securityhub:BatchImportFindings');
    return this;
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
    this.to('securityhub:BatchUpdateFindings');
    return this;
  }

  /**
   * Grants permission to create custom actions in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateActionTarget.html
   */
  public toCreateActionTarget() {
    this.to('securityhub:CreateActionTarget');
    return this;
  }

  /**
   * Grants permission to create insights in Security Hub. Insights are collections of related findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateInsight.html
   */
  public toCreateInsight() {
    this.to('securityhub:CreateInsight');
    return this;
  }

  /**
   * Grants permission to create member accounts in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateMembers.html
   */
  public toCreateMembers() {
    this.to('securityhub:CreateMembers');
    return this;
  }

  /**
   * Grants permission to decline Security Hub invitations to become a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeclineInvitations.html
   */
  public toDeclineInvitations() {
    this.to('securityhub:DeclineInvitations');
    return this;
  }

  /**
   * Grants permission to delete custom actions in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteActionTarget.html
   */
  public toDeleteActionTarget() {
    this.to('securityhub:DeleteActionTarget');
    return this;
  }

  /**
   * Grants permission to delete insights from Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteInsight.html
   */
  public toDeleteInsight() {
    this.to('securityhub:DeleteInsight');
    return this;
  }

  /**
   * Grants permission to delete Security Hub invitations to become a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteInvitations.html
   */
  public toDeleteInvitations() {
    this.to('securityhub:DeleteInvitations');
    return this;
  }

  /**
   * Grants permission to delete Security Hub member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteMembers.html
   */
  public toDeleteMembers() {
    this.to('securityhub:DeleteMembers');
    return this;
  }

  /**
   * Grants permission to retrieve a list of custom actions using the API
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeActionTargets.html
   */
  public toDescribeActionTargets() {
    this.to('securityhub:DescribeActionTargets');
    return this;
  }

  /**
   * Grants permission to retrieve information about the hub resource in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeHub.html
   */
  public toDescribeHub() {
    this.to('securityhub:DescribeHub');
    return this;
  }

  /**
   * Grants permission to describe the organization configuration for Security Hub
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeOrganizationConfiguration.html
   */
  public toDescribeOrganizationConfiguration() {
    this.to('securityhub:DescribeOrganizationConfiguration');
    return this;
  }

  /**
   * Grants permission to retrieve information about the available Security Hub product integrations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeProducts.html
   */
  public toDescribeProducts() {
    this.to('securityhub:DescribeProducts');
    return this;
  }

  /**
   * Grants permission to retrieve information about Security Hub standards
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html
   */
  public toDescribeStandards() {
    this.to('securityhub:DescribeStandards');
    return this;
  }

  /**
   * Grants permission to retrieve information about Security Hub standards controls
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandardsControls.html
   */
  public toDescribeStandardsControls() {
    this.to('securityhub:DescribeStandardsControls');
    return this;
  }

  /**
   * Grants permission to disable the findings importing for a Security Hub integrated product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableImportFindingsForProduct.html
   */
  public toDisableImportFindingsForProduct() {
    this.to('securityhub:DisableImportFindingsForProduct');
    return this;
  }

  /**
   * Grants permission to remove the Security Hub administrator account for your organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableOrganizationAdminAccount.html
   */
  public toDisableOrganizationAdminAccount() {
    this.to('securityhub:DisableOrganizationAdminAccount');
    return this;
  }

  /**
   * Grants permission to disable Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableSecurityHub.html
   */
  public toDisableSecurityHub() {
    this.to('securityhub:DisableSecurityHub');
    return this;
  }

  /**
   * Grants permission to a Security Hub member account to disassociate from the associated master account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateFromMasterAccount.html
   */
  public toDisassociateFromMasterAccount() {
    this.to('securityhub:DisassociateFromMasterAccount');
    return this;
  }

  /**
   * Grants permission to disassociate Security Hub member accounts from the associated master account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateMembers.html
   */
  public toDisassociateMembers() {
    this.to('securityhub:DisassociateMembers');
    return this;
  }

  /**
   * Grants permission to enable the findings importing for a Security Hub integrated product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableImportFindingsForProduct.html
   */
  public toEnableImportFindingsForProduct() {
    this.to('securityhub:EnableImportFindingsForProduct');
    return this;
  }

  /**
   * Grants permission to designate a Security Hub administrator account for your organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableOrganizationAdminAccount.html
   */
  public toEnableOrganizationAdminAccount() {
    this.to('securityhub:EnableOrganizationAdminAccount');
    return this;
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
    this.to('securityhub:EnableSecurityHub');
    return this;
  }

  /**
   * Grants permission to retrieve a list of the standards that are enabled in Security Hub
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetEnabledStandards.html
   */
  public toGetEnabledStandards() {
    this.to('securityhub:GetEnabledStandards');
    return this;
  }

  /**
   * Grants permission to retrieve a list of findings from Security Hub
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindings.html
   */
  public toGetFindings() {
    this.to('securityhub:GetFindings');
    return this;
  }

  /**
   * Grants permission to retrieve insight results from Security Hub
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsightResults.html
   */
  public toGetInsightResults() {
    this.to('securityhub:GetInsightResults');
    return this;
  }

  /**
   * Grants permission to retrieve Security Hub insights
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsights.html
   */
  public toGetInsights() {
    this.to('securityhub:GetInsights');
    return this;
  }

  /**
   * Grants permission to retrieve the count of Security Hub membership invitations sent to the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInvitationsCount.html
   */
  public toGetInvitationsCount() {
    this.to('securityhub:GetInvitationsCount');
    return this;
  }

  /**
   * Grants permission to retrieve details about the Security Hub master account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetMasterAccount.html
   */
  public toGetMasterAccount() {
    this.to('securityhub:GetMasterAccount');
    return this;
  }

  /**
   * Grants permission to retrieve the details of Security Hub member accounts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetMembers.html
   */
  public toGetMembers() {
    this.to('securityhub:GetMembers');
    return this;
  }

  /**
   * Grants permission to invite other AWS accounts to become Security Hub member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_InviteMembers.html
   */
  public toInviteMembers() {
    this.to('securityhub:InviteMembers');
    return this;
  }

  /**
   * Grants permission to retrieve the Security Hub integrated products that are currently enabled
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListEnabledProductsForImport.html
   */
  public toListEnabledProductsForImport() {
    this.to('securityhub:ListEnabledProductsForImport');
    return this;
  }

  /**
   * Grants permission to retrieve the Security Hub invitations sent to the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListInvitations.html
   */
  public toListInvitations() {
    this.to('securityhub:ListInvitations');
    return this;
  }

  /**
   * Grants permission to retrieve details about Security Hub member accounts associated with the master account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListMembers.html
   */
  public toListMembers() {
    this.to('securityhub:ListMembers');
    return this;
  }

  /**
   * Grants permission to list the Security Hub administrator accounts for your organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListOrganizationAdminAccounts.html
   */
  public toListOrganizationAdminAccounts() {
    this.to('securityhub:ListOrganizationAdminAccounts');
    return this;
  }

  /**
   * Grants permission to list of tags associated with a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('securityhub:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to add tags to a Security Hub resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('securityhub:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from a Security Hub resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('securityhub:UntagResource');
    return this;
  }

  /**
   * Grants permission to update custom actions in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateActionTarget.html
   */
  public toUpdateActionTarget() {
    this.to('securityhub:UpdateActionTarget');
    return this;
  }

  /**
   * Grants permission to update Security Hub findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindings.html
   */
  public toUpdateFindings() {
    this.to('securityhub:UpdateFindings');
    return this;
  }

  /**
   * Grants permission to update insights in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateInsight.html
   */
  public toUpdateInsight() {
    this.to('securityhub:UpdateInsight');
    return this;
  }

  /**
   * Grants permission to update the organization configuration for Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateOrganizationConfiguration.html
   */
  public toUpdateOrganizationConfiguration() {
    this.to('securityhub:UpdateOrganizationConfiguration');
    return this;
  }

  /**
   * Grants permission to update Security Hub configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateSecurityHubConfiguration.html
   */
  public toUpdateSecurityHubConfiguration() {
    this.to('securityhub:UpdateSecurityHubConfiguration');
    return this;
  }

  /**
   * Grants permission to update Security Hub standards controls
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateStandardsControl.html
   */
  public toUpdateStandardsControl() {
    this.to('securityhub:UpdateStandardsControl');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptInvitation",
      "BatchDisableStandards",
      "BatchEnableStandards",
      "BatchImportFindings",
      "BatchUpdateFindings",
      "CreateActionTarget",
      "CreateInsight",
      "CreateMembers",
      "DeclineInvitations",
      "DeleteActionTarget",
      "DeleteInsight",
      "DeleteInvitations",
      "DeleteMembers",
      "DisableImportFindingsForProduct",
      "DisableOrganizationAdminAccount",
      "DisableSecurityHub",
      "DisassociateFromMasterAccount",
      "DisassociateMembers",
      "EnableImportFindingsForProduct",
      "EnableOrganizationAdminAccount",
      "EnableSecurityHub",
      "InviteMembers",
      "TagResource",
      "UntagResource",
      "UpdateActionTarget",
      "UpdateFindings",
      "UpdateInsight",
      "UpdateOrganizationConfiguration",
      "UpdateSecurityHubConfiguration",
      "UpdateStandardsControl"
    ],
    "Read": [
      "DescribeActionTargets",
      "DescribeHub",
      "DescribeOrganizationConfiguration",
      "DescribeProducts",
      "DescribeStandards",
      "DescribeStandardsControls",
      "GetFindings",
      "GetInsightResults",
      "GetInvitationsCount",
      "GetMasterAccount",
      "GetMembers"
    ],
    "List": [
      "GetEnabledStandards",
      "GetInsights",
      "ListEnabledProductsForImport",
      "ListInvitations",
      "ListMembers",
      "ListOrganizationAdminAccounts",
      "ListTagsForResource"
    ]
  };

  /**
   * Adds a resource of type hub to the statement
   *
   * https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-access.html#resources
   *
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHub(account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:securityhub:${Region}:${Account}:hub/default';
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type product to the statement
   *
   * https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-access.html#resources
   *
   * @param company - Identifier for the company.
   * @param productId - Identifier for the productId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProduct(company: string, productId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:securityhub:${Region}:${Account}:product/${Company}/${ProductId}';
    arn = arn.replace('${Company}', company);
    arn = arn.replace('${ProductId}', productId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access based on the presence of specific fields and values in the request
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
    return this.if(`securityhub:ASFFSyntaxPath/${ aSFFSyntaxPath }`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the presence of AwsAccountId field in the requests
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
    return this.if(`securityhub:TargetAccount`, value, operator || 'StringLike');
  }
}
