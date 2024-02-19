import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [consolidatedbilling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconsolidatedbilling.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Consolidatedbilling extends PolicyStatement {
  public servicePrefix = 'consolidatedbilling';

  /**
   * Statement provider for service [consolidatedbilling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconsolidatedbilling.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get account role (Payer, Linked, Regular)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toGetAccountBillingRole() {
    return this.to('GetAccountBillingRole');
  }

  /**
   * Grants permission to get list of member/linked accounts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toListLinkedAccounts() {
    return this.to('ListLinkedAccounts');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetAccountBillingRole'
    ],
    List: [
      'ListLinkedAccounts'
    ]
  };
}
