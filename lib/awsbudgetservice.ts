import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service budgets
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbudgetservice.html
 */
export class Budgets extends PolicyStatement {
  public servicePrefix = 'budgets';
  public actions: Actions = {
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
  public resourceTypes: ResourceTypes = {
    "budget": {
      "name": "budget",
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html",
      "arn": "arn:${Partition}:budgets:${Region}:${Account}:budget/${BudgetName}",
      "conditionKeys": []
    }
  };

  /**
   * Modify budgets and budget details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public modifyBudget() {
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
  public viewBudget() {
    this.add('budgets:ViewBudget');
    return this;
  }

  /**
   * Adds a resource of type budget to the statement
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html
   *
   * @param budgetName - Identifier for the budgetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBudget(budgetName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:budgets:${Region}:${Account}:budget/${BudgetName}';
    arn = arn.replace('${BudgetName}', budgetName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
