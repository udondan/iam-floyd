import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [consolidatedbilling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconsolidatedbilling.html).
 *
 * @param options - Options for the statement
 */
export class Consolidatedbilling extends PolicyStatement {
  public servicePrefix = 'consolidatedbilling';

  /**
   * Statement provider for service [consolidatedbilling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconsolidatedbilling.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
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
