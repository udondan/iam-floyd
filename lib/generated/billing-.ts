import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [billing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbilling_.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Billing extends PolicyStatement {
  public servicePrefix = 'billing';

  /**
   * Statement provider for service [billing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbilling_.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get billing information for your proforma billing groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toListBillingViews() {
    return this.to('ListBillingViews');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'ListBillingViews'
    ]
  };
}
