import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [purchase-orders](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awspurchaseordersconsole.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class PurchaseOrders extends PolicyStatement {
  public servicePrefix = 'purchase-orders';

  /**
   * Statement provider for service [purchase-orders](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awspurchaseordersconsole.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
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
    this.to('purchase-orders:ModifyPurchaseOrders');
    return this;
  }

  /**
   * View purchase orders and details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toViewPurchaseOrders() {
    this.to('purchase-orders:ViewPurchaseOrders');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "ModifyPurchaseOrders"
    ],
    "Read": [
      "ViewPurchaseOrders"
    ]
  };
}
