import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [budgets](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbudgetservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Budgets extends PolicyStatement {
  public servicePrefix = 'budgets';

  /**
   * Statement provider for service [budgets](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbudgetservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to create and define a response that you can configure to execute once your budget has exceeded a specific budget threshold.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toCreateBudgetAction() {
    return this.to('CreateBudgetAction');
  }

  /**
   * Grants permissions to delete an action that is associated with a specific budget.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toDeleteBudgetAction() {
    return this.to('DeleteBudgetAction');
  }

  /**
   * Grants permissions to retrieve the details of specific budget action associated with a budget.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toDescribeBudgetAction() {
    return this.to('DescribeBudgetAction');
  }

  /**
   * Grants permissions to retrieve a historical view of the budget actions statuses associated with a particular budget action. These status include statues such as 'Standby', 'Pending' and 'Executed'.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toDescribeBudgetActionHistories() {
    return this.to('DescribeBudgetActionHistories');
  }

  /**
   * Grants permissions to retrieve the details of all of the budget actions associated with your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toDescribeBudgetActionsForAccount() {
    return this.to('DescribeBudgetActionsForAccount');
  }

  /**
   * Grants permissions to retrieve the details of all of the budget actions associated with a budget.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toDescribeBudgetActionsForBudget() {
    return this.to('DescribeBudgetActionsForBudget');
  }

  /**
   * Grants permissions to initiate a pending budget action as well as reverse a previously executed budget action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toExecuteBudgetAction() {
    return this.to('ExecuteBudgetAction');
  }

  /**
   * Grants permissions to modify budgets and budget details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toModifyBudget() {
    return this.to('ModifyBudget');
  }

  /**
   * Grants permissions to update the details of a specific budget action associated with a budget.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toUpdateBudgetAction() {
    return this.to('UpdateBudgetAction');
  }

  /**
   * Grants permissions to view budgets and budget details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toViewBudget() {
    return this.to('ViewBudget');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateBudgetAction",
      "DeleteBudgetAction",
      "ExecuteBudgetAction",
      "ModifyBudget",
      "UpdateBudgetAction"
    ],
    "Read": [
      "DescribeBudgetAction",
      "DescribeBudgetActionHistories",
      "DescribeBudgetActionsForAccount",
      "DescribeBudgetActionsForBudget",
      "ViewBudget"
    ]
  };

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

  /**
   * Adds a resource of type budgetAction to the statement
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html
   *
   * @param budgetName - Identifier for the budgetName.
   * @param actionId - Identifier for the actionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBudgetAction(budgetName: string, actionId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:budgets::${Account}:budget/${BudgetName}/action/${ActionId}';
    arn = arn.replace('${BudgetName}', budgetName);
    arn = arn.replace('${ActionId}', actionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
