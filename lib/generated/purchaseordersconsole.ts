import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [purchase-orders](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspurchaseordersconsole.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class PurchaseOrders extends PolicyStatement {
  public servicePrefix = 'purchase-orders';

  /**
   * Statement provider for service [purchase-orders](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspurchaseordersconsole.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Modify purchase orders and details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toModifyPurchaseOrders() {
    return this.to('ModifyPurchaseOrders');
  }

  /**
   * View purchase orders and details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toViewPurchaseOrders() {
    return this.to('ViewPurchaseOrders');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ModifyPurchaseOrders'
    ],
    Read: [
      'ViewPurchaseOrders'
    ]
  };
}
