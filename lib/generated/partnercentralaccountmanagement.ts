import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [partnercentral-account-management](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspartnercentralaccountmanagement.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class PartnercentralAccountManagement extends PolicyStatement {
  public servicePrefix = 'partnercentral-account-management';

  /**
   * Statement provider for service [partnercentral-account-management](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspartnercentralaccountmanagement.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate Partner account to AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/partner-central/latest/getting-started/controlling-access-in-apc-account-management.html
   */
  public toAssociatePartnerAccount() {
    return this.to('AssociatePartnerAccount');
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
      'AssociatePartnerAccount',
      'AssociatePartnerUser',
      'DisassociatePartnerUser'
    ]
  };
}
