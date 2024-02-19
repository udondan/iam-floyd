import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [invoicing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsinvoicingservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Invoicing extends PolicyStatement {
  public servicePrefix = 'invoicing';

  /**
   * Statement provider for service [invoicing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsinvoicingservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get Invoice Email Delivery Preferences
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetInvoiceEmailDeliveryPreferences() {
    return this.to('GetInvoiceEmailDeliveryPreferences');
  }

  /**
   * Grants permission to get Invoice PDF
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetInvoicePDF() {
    return this.to('GetInvoicePDF');
  }

  /**
   * Grants permission to get Invoice summary information for your account or linked account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toListInvoiceSummaries() {
    return this.to('ListInvoiceSummaries');
  }

  /**
   * Grants permission to put Invoice Email Delivery Preferences
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toPutInvoiceEmailDeliveryPreferences() {
    return this.to('PutInvoiceEmailDeliveryPreferences');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetInvoiceEmailDeliveryPreferences',
      'GetInvoicePDF',
      'ListInvoiceSummaries'
    ],
    Write: [
      'PutInvoiceEmailDeliveryPreferences'
    ]
  };
}
