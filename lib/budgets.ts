import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service budgets
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbudgetservice.html
 */
export class Budgets extends PolicyStatement {
    public servicePrefix = 'budgets';
    public actions : Actions = {
        "ModifyBudget": {
            "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions",
            "description": "Modify budgets and budget details",
            "accessLevel": "Write",
            "resourceTypes": {
                "budget": {
                    "required": true
                }
            }
        },
        "ViewBudget": {
            "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions",
            "description": "View budgets and budget details",
            "accessLevel": "Read",
            "resourceTypes": {
                "budget": {
                    "required": true
                }
            }
        }
    };

    /**
     * Modify budgets and budget details
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
     */
    public modifyBudget () {
        this.add('budgets:ModifyBudget');
        return this;
    }

    /**
     * View budgets and budget details
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
     */
    public viewBudget () {
        this.add('budgets:ViewBudget');
        return this;
    }
}
