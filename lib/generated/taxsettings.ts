import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
   * Grants permission to view tax exemptions data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetExemptions() {
    return this.to('GetExemptions');
  }

  /**
   * Grants permission to retrieve tax interview data
   *
   * Access Level: Read
   */
  public toGetTaxInterview() {
    return this.to('GetTaxInterview');
  }

  /**
   * Grants permission to view tax registrations data
   *
   * Access Level: Read
   */
  public toGetTaxRegistration() {
    return this.to('GetTaxRegistration');
  }

  /**
   * Grants permission to update tax interview data
   *
   * Access Level: Write
   */
  public toPutTaxInterview() {
    return this.to('PutTaxInterview');
  }

  /**
   * Grants permission to update tax registrations data
   *
   * Access Level: Write
   */
  public toPutTaxRegistration() {
    return this.to('PutTaxRegistration');
  }

  /**
   * Grants permission to update tax exemptions data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toUpdateExemptions() {
    return this.to('UpdateExemptions');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetExemptions',
      'GetTaxInterview',
      'GetTaxRegistration'
    ],
    Write: [
      'PutTaxInterview',
      'PutTaxRegistration',
      'UpdateExemptions'
    ]
  };
}
