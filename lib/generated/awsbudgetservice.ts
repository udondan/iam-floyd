import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [budgets](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbudgetservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Budgets extends PolicyStatement {
  public servicePrefix = 'budgets';
  protected actionList: Actions = {
    "ModifyBudget": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions",
      "description": "Grants permissions to modify budgets and budget details",
      "accessLevel": "Write",
      "resourceTypes": {
        "budget": {
          "required": true
        }
      }
    },
    "ViewBudget": {
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions",
      "description": "Grants permissions to view budgets and budget details",
      "accessLevel": "Read",
      "resourceTypes": {
        "budget": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "budget": {
      "name": "budget",
      "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html",
      "arn": "arn:${Partition}:budgets::${Account}:budget/${BudgetName}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [budgets](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbudgetservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to modify budgets and budget details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toModifyBudget() {
    this.add('budgets:ModifyBudget');
    return this;
  }

  /**
   * Grants permissions to view budgets and budget details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toViewBudget() {
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBudget(budgetName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:budgets::${Account}:budget/${BudgetName}';
    arn = arn.replace('${BudgetName}', budgetName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
