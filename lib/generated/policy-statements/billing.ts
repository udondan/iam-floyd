import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [billing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbilling.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Billing extends PolicyStatement {
  public servicePrefix = 'billing';

  /**
   * Statement provider for service [billing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbilling.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a billing view
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_DeleteBillingView.html
   */
  public toDeleteBillingView() {
    return this.to('DeleteBillingView');
  }

  /**
   * Grants permission to delete a billing view resource policy
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to perform queries on billing information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetBillingData() {
    return this.to('GetBillingData');
  }

  /**
   * Grants permission to view detailed line item billing information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetBillingDetails() {
    return this.to('GetBillingDetails');
  }

  /**
   * Grants permission to view notifications sent by AWS related to your accounts billing information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetBillingNotifications() {
    return this.to('GetBillingNotifications');
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_GetBillingView.html
   */
  public toGetBillingView() {
    return this.to('GetBillingView');
  }

  /**
   * Grants permission to view the account's contract information including the contract number, end-user organization names, PO numbers and if the account is used to service public-sector customers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetContractInformation() {
    return this.to('GetContractInformation');
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
   * Grants permission to retrieve the state of the Allow IAM Access billing preference
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetIAMAccessPreference() {
    return this.to('GetIAMAccessPreference');
  }

  /**
   * Grants permission to get the resource policy specified billing view
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to retrieve the account's default Seller of Record
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetSellerOfRecord() {
    return this.to('GetSellerOfRecord');
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
   * Grants permission to get the list of source views for a specified billing view
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to set the account's contract information end-user organization names and if the account is used to service public-sector customers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toPutContractInformation() {
    return this.to('PutContractInformation');
  }

  /**
   * Grants permission to put a billing view resource policy
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
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
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from a specified billing view
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_UpdateBillingView.html
   */
  public toUpdateBillingView() {
    return this.to('UpdateBillingView');
  }

  /**
   * Grants permission to update the Allow IAM Access billing preference
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toUpdateIAMAccessPreference() {
    return this.to('UpdateIAMAccessPreference');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateBillingView',
      'DeleteBillingView',
      'PutContractInformation',
      'RedeemCredits',
      'UpdateBillingPreferences',
      'UpdateBillingView',
      'UpdateIAMAccessPreference'
    ],
    'Permissions management': [
      'DeleteResourcePolicy',
      'GetResourcePolicy',
      'PutResourcePolicy'
    ],
    Read: [
      'GetBillingData',
      'GetBillingDetails',
      'GetBillingNotifications',
      'GetBillingPreferences',
      'GetBillingView',
      'GetContractInformation',
      'GetCredits',
      'GetIAMAccessPreference',
      'GetSellerOfRecord',
      'ListBillingViews',
      'ListTagsForResource'
    ],
    List: [
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
   * - .toDeleteBillingView()
   * - .toDeleteResourcePolicy()
   * - .toGetBillingView()
   * - .toGetResourcePolicy()
   * - .toListSourceViewsForBillingView()
   * - .toListTagsForResource()
   * - .toPutResourcePolicy()
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
