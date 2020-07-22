import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [purchase-orders](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awspurchaseordersconsole.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class PurchaseOrders extends PolicyStatement {
  public servicePrefix = 'purchase-orders';
  protected actionList: Actions = {
    "ModifyPurchaseOrders": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions",
      "description": "Modify purchase orders and details",
      "accessLevel": "Write"
    },
    "ViewPurchaseOrders": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions",
      "description": "View purchase orders and details",
      "accessLevel": "Read"
    }
  };
  protected resourceTypes: ResourceTypes = {};

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
  public modifyPurchaseOrders() {
    this.add('purchase-orders:ModifyPurchaseOrders');
    return this;
  }

  /**
   * View purchase orders and details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public viewPurchaseOrders() {
    this.add('purchase-orders:ViewPurchaseOrders');
    return this;
  }
}
