import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [billing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbilling_.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Billing extends PolicyStatement {
  public servicePrefix = 'billing';

  /**
   * Statement provider for service [billing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbilling_.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
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
   * Grants permission to get billing information for your proforma billing groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toListBillingViews() {
    return this.to('ListBillingViews');
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
    Read: [
      'GetBillingData',
      'GetBillingDetails',
      'GetBillingNotifications',
      'GetBillingPreferences',
      'GetContractInformation',
      'GetCredits',
      'GetIAMAccessPreference',
      'GetSellerOfRecord',
      'ListBillingViews'
    ],
    Write: [
      'PutContractInformation',
      'RedeemCredits',
      'UpdateBillingPreferences',
      'UpdateIAMAccessPreference'
    ]
  };
}
