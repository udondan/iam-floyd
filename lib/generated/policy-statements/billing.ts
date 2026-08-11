import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [billing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_billing.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Billing extends PolicyStatement {
  public servicePrefix = 'billing';

  /**
   * Statement provider for service [billing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_billing.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate source views to a billing view
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_AssociateSourceViews.html
   */
  public toAssociateSourceViews() {
    return this.to('AssociateSourceViews');
  }

  /**
   * Grants permission to create a billing view
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_CreateBillingView.html
   */
  public toCreateBillingView() {
    return this.to('CreateBillingView');
  }

  /**
   * Grants permission to delete a billing view
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_DeleteBillingView.html
   */
  public toDeleteBillingView() {
    return this.to('DeleteBillingView');
  }

  /**
   * Grants permission to disassociate source views from a billing view
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_DisassociateSourceViews.html
   */
  public toDisassociateSourceViews() {
    return this.to('DisassociateSourceViews');
  }

  /**
   * Grants permission to view billing preferences such as reserved instance, savings plans and credits sharing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetBillingPreferences() {
    return this.to('GetBillingPreferences');
  }

  /**
   * Grants permission to get the metadata for a specified billing view
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_GetBillingView.html
   */
  public toGetBillingView() {
    return this.to('GetBillingView');
  }

  /**
   * Grants permission to view a credit allocation history
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetCreditAllocationHistory() {
    return this.to('GetCreditAllocationHistory');
  }

  /**
   * Grants permission to view credits that have been redeemed
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetCredits() {
    return this.to('GetCredits');
  }

  /**
   * Grants permission to view Enterprise Support charge summary data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetEnterpriseSupportChargeSummary() {
    return this.to('GetEnterpriseSupportChargeSummary');
  }

  /**
   * Grants permission to view Enterprise Support contract details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetEnterpriseSupportContractDetails() {
    return this.to('GetEnterpriseSupportContractDetails');
  }

  /**
   * Grants permission to get the resource policy specified billing view
   *
   * Access Level: Permissions management, Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to get a list of all your available billing views
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_ListBillingViews.html
   */
  public toListBillingViews() {
    return this.to('ListBillingViews');
  }

  /**
   * Grants permission to view Enterprise Support charges broken down by linked account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toListEnterpriseSupportLinkedAccountCharges() {
    return this.to('ListEnterpriseSupportLinkedAccountCharges');
  }

  /**
   * Grants permission to get the list of source views for a specified billing view
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_ListSourceViewsForBillingView.html
   */
  public toListSourceViewsForBillingView() {
    return this.to('ListSourceViewsForBillingView');
  }

  /**
   * Grants permission to get the list of tags for a specified billing view
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to redeem an AWS credit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toRedeemCredits() {
    return this.to('RedeemCredits');
  }

  /**
   * Grants permission to add tags to a specified billing view
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from a specified billing view
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update billing preferences such as reserved instance, savings plans and credits sharing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toUpdateBillingPreferences() {
    return this.to('UpdateBillingPreferences');
  }

  /**
   * Grants permission to update a billing view
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_UpdateBillingView.html
   */
  public toUpdateBillingView() {
    return this.to('UpdateBillingView');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateSourceViews',
      'CreateBillingView',
      'DeleteBillingView',
      'DisassociateSourceViews',
      'GetResourcePolicy',
      'RedeemCredits',
      'TagResource',
      'UntagResource',
      'UpdateBillingPreferences',
      'UpdateBillingView'
    ],
    Read: [
      'GetBillingPreferences',
      'GetBillingView',
      'GetCreditAllocationHistory',
      'GetCredits',
      'GetEnterpriseSupportChargeSummary',
      'GetEnterpriseSupportContractDetails',
      'ListBillingViews',
      'ListTagsForResource'
    ],
    'Permissions management': [
      'GetResourcePolicy'
    ],
    List: [
      'ListEnterpriseSupportLinkedAccountCharges',
      'ListSourceViewsForBillingView'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type billingview to the statement
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBillingview(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:billing::${ account ?? this.defaultAccount }:billingview/${ resourceId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateBillingView()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAssociateSourceViews()
   * - .toCreateBillingView()
   * - .toDeleteBillingView()
   * - .toDisassociateSourceViews()
   * - .toGetBillingView()
   * - .toGetResourcePolicy()
   * - .toListSourceViewsForBillingView()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateBillingView()
   *
   * Applies to resource types:
   * - billingview
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateBillingView()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
