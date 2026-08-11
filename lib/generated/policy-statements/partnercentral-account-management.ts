import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [partnercentral-account-management](https://docs.aws.amazon.com/service-authorization/latest/reference/list_partnercentral-account-management.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class PartnercentralAccountManagement extends PolicyStatement {
  public servicePrefix = 'partnercentral-account-management';

  /**
   * Statement provider for service [partnercentral-account-management](https://docs.aws.amazon.com/service-authorization/latest/reference/list_partnercentral-account-management.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate Partner user to IAM role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/partner-central/latest/getting-started/controlling-access-in-apc-account-management.html
   */
  public toAssociatePartnerUser() {
    return this.to('AssociatePartnerUser');
  }

  /**
   * Grants permission to disassociate Partner user to IAM role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/partner-central/latest/getting-started/controlling-access-in-apc-account-management.html
   */
  public toDisassociatePartnerUser() {
    return this.to('DisassociatePartnerUser');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociatePartnerUser',
      'DisassociatePartnerUser'
    ]
  };

  /**
   * Filters access by the Legacy Partner Central role
   *
   * https://docs.aws.amazon.com/partner-central/latest/getting-started/controlling-access-in-apc-account-management.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLegacyPartnerCentralRole(value: string | string[], operator?: Operator | string) {
    return this.if(`LegacyPartnerCentralRole`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by Marketing Central role
   *
   * https://docs.aws.amazon.com/partner-central/latest/getting-started/controlling-access-in-apc-account-management.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMarketingCentralRole(value: string | string[], operator?: Operator | string) {
    return this.if(`MarketingCentralRole`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by ProServe Tools role
   *
   * https://docs.aws.amazon.com/partner-central/latest/getting-started/controlling-access-in-apc-account-management.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProServeRole(value: string | string[], operator?: Operator | string) {
    return this.if(`ProServeRole`, value, operator ?? 'StringLike');
  }
}
