import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [tax](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstaxsettings.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Tax extends PolicyStatement {
  public servicePrefix = 'tax';

  /**
   * Statement provider for service [tax](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstaxsettings.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to batch delete tax registration data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toBatchDeleteTaxRegistration() {
    return this.to('BatchDeleteTaxRegistration');
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
   * Grants permission to delete supplemental tax registration data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html
   */
  public toDeleteSupplementalTaxRegistration() {
    return this.to('DeleteSupplementalTaxRegistration');
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
   * Grants permission to view/download tax documents/forms
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toGetTaxInfoReportingDocument() {
    return this.to('GetTaxInfoReportingDocument');
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
   * Grants permission to view supplemental tax registrations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html
   */
  public toListSupplementalTaxRegistrations() {
    return this.to('ListSupplementalTaxRegistrations');
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
   * Grants permission to update supplemental tax registrations data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html
   */
  public toPutSupplementalTaxRegistration() {
    return this.to('PutSupplementalTaxRegistration');
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
      'BatchDeleteTaxRegistration',
      'BatchPutTaxRegistration',
      'DeleteSupplementalTaxRegistration',
      'DeleteTaxRegistration',
      'PutSupplementalTaxRegistration',
      'PutTaxInheritance',
      'PutTaxInterview',
      'PutTaxRegistration',
      'UpdateExemptions'
    ],
    Read: [
      'GetExemptions',
      'GetTaxInfoReportingDocument',
      'GetTaxInheritance',
      'GetTaxInterview',
      'GetTaxRegistration',
      'GetTaxRegistrationDocument',
      'ListSupplementalTaxRegistrations',
      'ListTaxRegistrations'
    ]
  };
}
