import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [aco-automation](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscomputeoptimizerautomation.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AcoAutomation extends PolicyStatement {
  public servicePrefix = 'aco-automation';

  /**
   * Statement provider for service [aco-automation](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscomputeoptimizerautomation.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate member accounts with the management account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_AssociateAccounts.html
   */
  public toAssociateAccounts() {
    return this.to('AssociateAccounts');
  }

  /**
   * Grants permission to create automation rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_CreateAutomationRule.html
   */
  public toCreateAutomationRule() {
    return this.to('CreateAutomationRule');
  }

  /**
   * Grants permission to delete automation rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_DeleteAutomationRule.html
   */
  public toDeleteAutomationRule() {
    return this.to('DeleteAutomationRule');
  }

  /**
   * Grants permission to disassociate member accounts from the management account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_DisassociateAccounts.html
   */
  public toDisassociateAccounts() {
    return this.to('DisassociateAccounts');
  }

  /**
   * Grants permission to get automation event details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_GetAutomationEvent.html
   */
  public toGetAutomationEvent() {
    return this.to('GetAutomationEvent');
  }

  /**
   * Grants permission to get automation rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_GetAutomationRule.html
   */
  public toGetAutomationRule() {
    return this.to('GetAutomationRule');
  }

  /**
   * Grants permission to get enrollment configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_GetEnrollmentConfiguration.html
   */
  public toGetEnrollmentConfiguration() {
    return this.to('GetEnrollmentConfiguration');
  }

  /**
   * Grants permission to list the accounts in your organization that are enrolled in Compute Optimizer and whether they have enabled the Automation feature
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_ListAccounts.html
   */
  public toListAccounts() {
    return this.to('ListAccounts');
  }

  /**
   * Grants permission to list automation event steps
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_ListAutomationEventSteps.html
   */
  public toListAutomationEventSteps() {
    return this.to('ListAutomationEventSteps');
  }

  /**
   * Grants permission to list automation event summaries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_ListAutomationEventSummaries.html
   */
  public toListAutomationEventSummaries() {
    return this.to('ListAutomationEventSummaries');
  }

  /**
   * Grants permission to list automation events
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_ListAutomationEvents.html
   */
  public toListAutomationEvents() {
    return this.to('ListAutomationEvents');
  }

  /**
   * Grants permission to list automation rule preview results
   *
   * Access Level: List
   *
   * Dependent actions:
   * - ec2:DescribeVolumes
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_ListAutomationRulePreview.html
   */
  public toListAutomationRulePreview() {
    return this.to('ListAutomationRulePreview');
  }

  /**
   * Grants permission to list automation rule preview summaries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_ListAutomationRulePreviewSummaries.html
   */
  public toListAutomationRulePreviewSummaries() {
    return this.to('ListAutomationRulePreviewSummaries');
  }

  /**
   * Grants permission to list automation rules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_ListAutomationRules.html
   */
  public toListAutomationRules() {
    return this.to('ListAutomationRules');
  }

  /**
   * Grants permission to list recommended action summaries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_ListRecommendedActionSummaries.html
   */
  public toListRecommendedActionSummaries() {
    return this.to('ListRecommendedActionSummaries');
  }

  /**
   * Grants permission to list recommended actions
   *
   * Access Level: List
   *
   * Dependent actions:
   * - ec2:DescribeVolumes
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_ListRecommendedActions.html
   */
  public toListRecommendedActions() {
    return this.to('ListRecommendedActions');
  }

  /**
   * Grants permission to list tags for automation rule
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to initiate a rollback for an automation event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_RollbackAutomationEvent.html
   */
  public toRollbackAutomationEvent() {
    return this.to('RollbackAutomationEvent');
  }

  /**
   * Grants permission to initiate an on-demand automation for a recommended action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_StartAutomationEvent.html
   */
  public toStartAutomationEvent() {
    return this.to('StartAutomationEvent');
  }

  /**
   * Grants permission to add tags to automation rule
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from automation rule
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update automation rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_UpdateAutomationRule.html
   */
  public toUpdateAutomationRule() {
    return this.to('UpdateAutomationRule');
  }

  /**
   * Grants permission to update enrollment configuration for the Compute Optimizer automation feature
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_automation_UpdateEnrollmentConfiguration.html
   */
  public toUpdateEnrollmentConfiguration() {
    return this.to('UpdateEnrollmentConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateAccounts',
      'CreateAutomationRule',
      'DeleteAutomationRule',
      'DisassociateAccounts',
      'RollbackAutomationEvent',
      'StartAutomationEvent',
      'UpdateAutomationRule',
      'UpdateEnrollmentConfiguration'
    ],
    Read: [
      'GetAutomationEvent',
      'GetAutomationRule',
      'GetEnrollmentConfiguration'
    ],
    List: [
      'ListAccounts',
      'ListAutomationEventSteps',
      'ListAutomationEventSummaries',
      'ListAutomationEvents',
      'ListAutomationRulePreview',
      'ListAutomationRulePreviewSummaries',
      'ListAutomationRules',
      'ListRecommendedActionSummaries',
      'ListRecommendedActions',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type AutomationRule to the statement
   *
   * https://docs.aws.amazon.com/compute-optimizer/latest/ug/automation-rules.html
   *
   * @param ruleId - Identifier for the ruleId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAutomationRule(ruleId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:compute-optimizer::${ account ?? this.defaultAccount }:automation-rule/${ ruleId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * Applies to actions:
   * - .toCreateAutomationRule()
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
   * Filters access by the tags associated with the resource
   *
   * Applies to actions:
   * - .toDeleteAutomationRule()
   * - .toGetAutomationRule()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateAutomationRule()
   *
   * Applies to resource types:
   * - AutomationRule
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * Applies to actions:
   * - .toCreateAutomationRule()
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
