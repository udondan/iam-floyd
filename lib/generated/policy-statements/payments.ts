import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [payments](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspayments.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Payments extends PolicyStatement {
  public servicePrefix = 'payments';

  /**
   * Statement provider for service [payments](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspayments.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a payment instrument
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toCreatePaymentInstrument() {
    return this.to('CreatePaymentInstrument');
  }

  /**
   * Grants permission to delete a payment instrument
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toDeletePaymentInstrument() {
    return this.to('DeletePaymentInstrument');
  }

  /**
   * Grants permission to get information about a payment instrument
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toGetPaymentInstrument() {
    return this.to('GetPaymentInstrument');
  }

  /**
   * Grants permission to get payment status of invoices
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toGetPaymentStatus() {
    return this.to('GetPaymentStatus');
  }

  /**
   * Grants permission to get payment preferences (preferred payment currency, preferred payment method, etc.)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toListPaymentPreferences() {
    return this.to('ListPaymentPreferences');
  }

  /**
   * Grants permission to make a payment, authenticate a payment, verify a payment method, and generate a funding request document for Advance Pay
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toMakePayment() {
    return this.to('MakePayment');
  }

  /**
   * Grants permission to update payment preferences (preferred payment currency, preferred payment method, etc.)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toUpdatePaymentPreferences() {
    return this.to('UpdatePaymentPreferences');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreatePaymentInstrument',
      'DeletePaymentInstrument',
      'MakePayment',
      'UpdatePaymentPreferences'
    ],
    List: [
      'GetPaymentInstrument',
      'ListPaymentPreferences'
    ],
    Read: [
      'GetPaymentStatus'
    ]
  };
}
