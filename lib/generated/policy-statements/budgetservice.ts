import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to configure a response that executes once your budget exceeds a specific budget threshold. Creating a budget action with tags also requires the 'budgets:TagResource' permission
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudgetAction.html
   */
  public toCreateBudgetAction() {
    return this.to('CreateBudgetAction');
  }

  /**
   * Grants permission to delete an action that is associated with a specific budget
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DeleteBudgetAction.html
   */
  public toDeleteBudgetAction() {
    return this.to('DeleteBudgetAction');
  }

  /**
   * Grants permission to retrieve the details of a specific budget action associated with a budget
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgetAction.html
   */
  public toDescribeBudgetAction() {
    return this.to('DescribeBudgetAction');
  }

  /**
   * Grants permission to retrieve a historical view of the budget actions statuses associated with a particular budget action. These status include statues such as 'Standby', 'Pending' and 'Executed'
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgetActionHistories.html
   */
  public toDescribeBudgetActionHistories() {
    return this.to('DescribeBudgetActionHistories');
  }

  /**
   * Grants permission to retrieve the details of all of the budget actions associated with your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgetActionsForAccount.html
   */
  public toDescribeBudgetActionsForAccount() {
    return this.to('DescribeBudgetActionsForAccount');
  }

  /**
   * Grants permission to retrieve the details of all of the budget actions associated with a budget
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgetActionsForBudget.html
   */
  public toDescribeBudgetActionsForBudget() {
    return this.to('DescribeBudgetActionsForBudget');
  }

  /**
   * Grants permission to initiate a pending budget action as well as reverse a previously executed budget action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_ExecuteBudgetAction.html
   */
  public toExecuteBudgetAction() {
    return this.to('ExecuteBudgetAction');
  }

  /**
   * Grants permission to view resource tags for a budget or budget action
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create and modify budgets, and edit budget details. Creating a budget with tags also requires the 'budgets:TagResource' permission
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Operations_AWS_Budgets.html
   */
  public toModifyBudget() {
    return this.to('ModifyBudget');
  }

  /**
   * Grants permission to apply resource tags to a budget or budget action. Also needed to create a budget or budget action with tags
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove resource tags from a budget or budget action
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the details of a specific budget action associated with a budget
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudgetAction.html
   */
  public toUpdateBudgetAction() {
    return this.to('UpdateBudgetAction');
  }

  /**
   * Grants permission to view budgets and budget details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Operations_AWS_Budgets.html
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
      'ListTagsForResource',
      'ViewBudget'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type budget to the statement
   *
   * https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html
   *
   * @param budgetName - Identifier for the budgetName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   */
  public onBudget(budgetName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:budgets::${ account ?? this.defaultAccount }:budget/${ budgetName }`);
  }

  /**
   * Adds a resource of type budgetAction to the statement
   *
   * https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-controls.html
   *
   * @param budgetName - Identifier for the budgetName.
   * @param actionId - Identifier for the actionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   */
  public onBudgetAction(budgetName: string, actionId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:budgets::${ account ?? this.defaultAccount }:budget/${ budgetName }/action/${ actionId }`);
  }

  /**
   * Filters access based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateBudgetAction()
   * - .toTagResource()
   *
   * Applies to resource types:
   * - budget
   * - budgetAction
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateBudgetAction()
   *
   * Applies to resource types:
   * - budget
   * - budgetAction
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateBudgetAction()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - budget
   * - budgetAction
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
