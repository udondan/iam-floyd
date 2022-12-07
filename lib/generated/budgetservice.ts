import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create and define a response that you can configure to execute once your budget has exceeded a specific budget threshold
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
   * Grants permission to delete an action that is associated with a specific budget
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toDeleteBudgetAction() {
    return this.to('DeleteBudgetAction');
  }

  /**
   * Grants permission to retrieve the details of a specific budget action associated with a budget
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toDescribeBudgetAction() {
    return this.to('DescribeBudgetAction');
  }

  /**
   * Grants permission to retrieve a historical view of the budget actions statuses associated with a particular budget action. These status include statues such as 'Standby', 'Pending' and 'Executed'
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toDescribeBudgetActionHistories() {
    return this.to('DescribeBudgetActionHistories');
  }

  /**
   * Grants permission to retrieve the details of all of the budget actions associated with your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toDescribeBudgetActionsForAccount() {
    return this.to('DescribeBudgetActionsForAccount');
  }

  /**
   * Grants permission to retrieve the details of all of the budget actions associated with a budget
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toDescribeBudgetActionsForBudget() {
    return this.to('DescribeBudgetActionsForBudget');
  }

  /**
   * Grants permission to initiate a pending budget action as well as reverse a previously executed budget action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toExecuteBudgetAction() {
    return this.to('ExecuteBudgetAction');
  }

  /**
   * Grants permission to modify budgets and budget details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toModifyBudget() {
    return this.to('ModifyBudget');
  }

  /**
   * Grants permission to update the details of a specific budget action associated with a budget
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
   * Grants permission to view budgets and budget details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  public toViewBudget() {
    return this.to('ViewBudget');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateBudgetAction',
      'DeleteBudgetAction',
      'ExecuteBudgetAction',
      'ModifyBudget',
      'UpdateBudgetAction'
    ],
    Read: [
      'DescribeBudgetAction',
      'DescribeBudgetActionHistories',
      'DescribeBudgetActionsForAccount',
      'DescribeBudgetActionsForBudget',
      'ViewBudget'
    ]
  };

  /**
   * Adds a resource of type budget to the statement
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html
   *
   * @param budgetName - Identifier for the budgetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBudget(budgetName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || Budgets.defaultPartition }:budgets::${ account || '*' }:budget/${ budgetName }`);
  }

  /**
   * Adds a resource of type budgetAction to the statement
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html
   *
   * @param budgetName - Identifier for the budgetName.
   * @param actionId - Identifier for the actionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBudgetAction(budgetName: string, actionId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || Budgets.defaultPartition }:budgets::${ account || '*' }:budget/${ budgetName }/action/${ actionId }`);
  }
}
