import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [customer-verification](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscustomerverificationservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CustomerVerification extends PolicyStatement {
  public servicePrefix = 'customer-verification';

  /**
   * Statement provider for service [customer-verification](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscustomerverificationservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create customer verification data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toCreateCustomerVerificationDetails() {
    return this.to('CreateCustomerVerificationDetails');
  }

  /**
   * Grants permission to get customer verification data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetCustomerVerificationDetails() {
    return this.to('GetCustomerVerificationDetails');
  }

  /**
   * Grants permission to get customer verification eligibility
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetCustomerVerificationEligibility() {
    return this.to('GetCustomerVerificationEligibility');
  }

  /**
   * Grants permission to update customer verification data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toUpdateCustomerVerificationDetails() {
    return this.to('UpdateCustomerVerificationDetails');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateCustomerVerificationDetails',
      'UpdateCustomerVerificationDetails'
    ],
    Read: [
      'GetCustomerVerificationDetails',
      'GetCustomerVerificationEligibility'
    ]
  };
}
