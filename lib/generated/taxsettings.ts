import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [tax](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstaxsettings.html).
 *
 * @param options - Options for the statement
 */
export class Tax extends PolicyStatement {
  public servicePrefix = 'tax';

  /**
   * Statement provider for service [tax](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstaxsettings.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to batch update tax registrations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toBatchPutTaxRegistration() {
    return this.to('BatchPutTaxRegistration');
  }

  /**
   * Grants permission to delete tax registration data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toDeleteTaxRegistration() {
    return this.to('DeleteTaxRegistration');
  }

  /**
   * Grants permission to view tax exemptions data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toGetExemptions() {
    return this.to('GetExemptions');
  }

  /**
   * Grants permission to view tax inheritance status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toGetTaxInheritance() {
    return this.to('GetTaxInheritance');
  }

  /**
   * Grants permission to retrieve tax interview data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html
   */
  public toGetTaxInterview() {
    return this.to('GetTaxInterview');
  }

  /**
   * Grants permission to view tax registrations data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html
   */
  public toGetTaxRegistration() {
    return this.to('GetTaxRegistration');
  }

  /**
   * Grants permission to download tax registration documents
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toGetTaxRegistrationDocument() {
    return this.to('GetTaxRegistrationDocument');
  }

  /**
   * Grants permission to view tax registrations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toListTaxRegistrations() {
    return this.to('ListTaxRegistrations');
  }

  /**
   * Grants permission to set tax inheritance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toPutTaxInheritance() {
    return this.to('PutTaxInheritance');
  }

  /**
   * Grants permission to update tax interview data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html
   */
  public toPutTaxInterview() {
    return this.to('PutTaxInterview');
  }

  /**
   * Grants permission to update tax registrations data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html
   */
  public toPutTaxRegistration() {
    return this.to('PutTaxRegistration');
  }

  /**
   * Grants permission to update tax exemptions data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toUpdateExemptions() {
    return this.to('UpdateExemptions');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchPutTaxRegistration',
      'DeleteTaxRegistration',
      'PutTaxInheritance',
      'PutTaxInterview',
      'PutTaxRegistration',
      'UpdateExemptions'
    ],
    Read: [
      'GetExemptions',
      'GetTaxInheritance',
      'GetTaxInterview',
      'GetTaxRegistration',
      'GetTaxRegistrationDocument',
      'ListTaxRegistrations'
    ]
  };
}
