import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service purchase-orders
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awspurchaseordersconsole.html
 */
export class PurchaseOrders extends PolicyStatement {
    public servicePrefix = 'purchase-orders';
    public actions : Actions = {
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

    /**
     * Modify purchase orders and details
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
     */
    public modifyPurchaseOrders () {
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
    public viewPurchaseOrders () {
        this.add('purchase-orders:ViewPurchaseOrders');
        return this;
    }
}
