import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [aws-portal](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbilling.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsPortal extends PolicyStatement {
  public servicePrefix = 'aws-portal';

  /**
   * Statement provider for service [aws-portal](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbilling.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Allow or deny IAM users permission to modify Account Settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toModifyAccount() {
    return this.to('ModifyAccount');
  }

  /**
   * Allow or deny IAM users permission to modify billing settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toModifyBilling() {
    return this.to('ModifyBilling');
  }

  /**
   * Allow or deny IAM users permission to modify payment methods
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toModifyPaymentMethods() {
    return this.to('ModifyPaymentMethods');
  }

  /**
   * Allow or deny IAM users permission to view account settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toViewAccount() {
    return this.to('ViewAccount');
  }

  /**
   * Allow or deny IAM users permission to view billing pages in the console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toViewBilling() {
    return this.to('ViewBilling');
  }

  /**
   * Allow or deny IAM users permission to view payment methods
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toViewPaymentMethods() {
    return this.to('ViewPaymentMethods');
  }

  /**
   * Allow or deny IAM users permission to view AWS usage reports
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toViewUsage() {
    return this.to('ViewUsage');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ModifyAccount',
      'ModifyBilling',
      'ModifyPaymentMethods'
    ],
    Read: [
      'ViewAccount',
      'ViewBilling',
      'ViewPaymentMethods',
      'ViewUsage'
    ]
  };
}
