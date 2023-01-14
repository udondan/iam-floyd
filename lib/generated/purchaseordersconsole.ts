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
   * Allow or deny IAM users permission to add a new purchase order
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toAddPurchaseOrder() {
    return this.to('AddPurchaseOrder');
  }

  /**
   * Allow or deny IAM users permission to delete a purchase order
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toDeletePurchaseOrder() {
    return this.to('DeletePurchaseOrder');
  }

  /**
   * Allow or deny IAM users permission to get a purchase order
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetPurchaseOrder() {
    return this.to('GetPurchaseOrder');
  }

  /**
   * Allow or deny IAM users permission to list purchase order invoices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toListPurchaseOrderInvoices() {
    return this.to('ListPurchaseOrderInvoices');
  }

  /**
   * Allow or deny IAM users permission to get all available purchase orders
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toListPurchaseOrders() {
    return this.to('ListPurchaseOrders');
  }

  /**
   * Grants permission to modify purchase orders and details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toModifyPurchaseOrders() {
    return this.to('ModifyPurchaseOrders');
  }

  /**
   * Allow or deny IAM users permission to update an existing purchase order
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toUpdatePurchaseOrder() {
    return this.to('UpdatePurchaseOrder');
  }

  /**
   * Allow or deny IAM users permission to set purchase order status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toUpdatePurchaseOrderStatus() {
    return this.to('UpdatePurchaseOrderStatus');
  }

  /**
   * Grants permission to view purchase orders and details
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
      'AddPurchaseOrder',
      'DeletePurchaseOrder',
      'ModifyPurchaseOrders',
      'UpdatePurchaseOrder',
      'UpdatePurchaseOrderStatus'
    ],
    Read: [
      'GetPurchaseOrder',
      'ViewPurchaseOrders'
    ],
    List: [
      'ListPurchaseOrderInvoices',
      'ListPurchaseOrders'
    ]
  };
}
