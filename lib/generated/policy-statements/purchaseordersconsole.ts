import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
   * Grants permission to add a new purchase order
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toAddPurchaseOrder() {
    return this.to('AddPurchaseOrder');
  }

  /**
   * Grants permission to delete a purchase order
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toDeletePurchaseOrder() {
    return this.to('DeletePurchaseOrder');
  }

  /**
   * Grants permission to view whether existing or fine-grained IAM actions are being used to control authorization to Billing, Cost Management, and Account consoles
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetConsoleActionSetEnforced() {
    return this.to('GetConsoleActionSetEnforced');
  }

  /**
   * Grants permission to get a purchase order
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toGetPurchaseOrder() {
    return this.to('GetPurchaseOrder');
  }

  /**
   * Grants permission to list purchase order invoices
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toListPurchaseOrderInvoices() {
    return this.to('ListPurchaseOrderInvoices');
  }

  /**
   * Grants permission to list all purchase orders for an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toListPurchaseOrders() {
    return this.to('ListPurchaseOrders');
  }

  /**
   * Grants permission to list tags for a purchase order
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to modify purchase orders and details
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toModifyPurchaseOrders() {
    return this.to('ModifyPurchaseOrders');
  }

  /**
   * Grants permission to tag purchase orders with given key value pairs
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a purchase order
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to change whether existing or fine-grained IAM actions will be used to control authorization to Billing, Cost Management, and Account consoles
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toUpdateConsoleActionSetEnforced() {
    return this.to('UpdateConsoleActionSetEnforced');
  }

  /**
   * Grants permission to update an existing purchase order
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toUpdatePurchaseOrder() {
    return this.to('UpdatePurchaseOrder');
  }

  /**
   * Grants permission to set purchase order status
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
      'UpdateConsoleActionSetEnforced',
      'UpdatePurchaseOrder',
      'UpdatePurchaseOrderStatus'
    ],
    Read: [
      'GetConsoleActionSetEnforced',
      'GetPurchaseOrder',
      'ListTagsForResource',
      'ViewPurchaseOrders'
    ],
    List: [
      'ListPurchaseOrderInvoices',
      'ListPurchaseOrders'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type purchase-order to the statement
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPurchaseOrder(resourceName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:purchase-orders::${ account ?? this.defaultAccount }:purchase-order/${ resourceName }`);
  }

  /**
   * Filters access by a tag's key and value in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAddPurchaseOrder()
   * - .toModifyPurchaseOrders()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the set of tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toDeletePurchaseOrder()
   * - .toGetPurchaseOrder()
   * - .toListPurchaseOrderInvoices()
   * - .toListTagsForResource()
   * - .toModifyPurchaseOrders()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdatePurchaseOrder()
   * - .toUpdatePurchaseOrderStatus()
   * - .toViewPurchaseOrders()
   *
   * Applies to resource types:
   * - purchase-order
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAddPurchaseOrder()
   * - .toModifyPurchaseOrders()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
