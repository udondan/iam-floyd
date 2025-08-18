import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [arc-region-switch](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonarcregionswitch.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ArcRegionSwitch extends PolicyStatement {
  public servicePrefix = 'arc-region-switch';

  /**
   * Statement provider for service [arc-region-switch](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonarcregionswitch.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to approve a plan execution step
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_ApprovePlanExecutionStep.html
   */
  public toApprovePlanExecutionStep() {
    return this.to('ApprovePlanExecutionStep');
  }

  /**
   * Grants permission to cancel a plan execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_CancelPlanExecution.html
   */
  public toCancelPlanExecution() {
    return this.to('CancelPlanExecution');
  }

  /**
   * Grants permission to create a plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_CreatePlan.html
   */
  public toCreatePlan() {
    return this.to('CreatePlan');
  }

  /**
   * Grants permission to delete a plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_DeletePlan.html
   */
  public toDeletePlan() {
    return this.to('DeletePlan');
  }

  /**
   * Grants permission to delete the RAM access control policy for a plan
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/r53recovery/latest/dg/arc-region-switch.region-switch-different-accounts.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to get information about plans in all AWS Regions using a control plane
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_GetPlan.html
   */
  public toGetPlan() {
    return this.to('GetPlan');
  }

  /**
   * Grants permission to get a plan's evaluation status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_GetPlanEvaluationStatus.html
   */
  public toGetPlanEvaluationStatus() {
    return this.to('GetPlanEvaluationStatus');
  }

  /**
   * Grants permission to get plan execution details and setup information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_GetPlanExecution.html
   */
  public toGetPlanExecution() {
    return this.to('GetPlanExecution');
  }

  /**
   * Grants permission to get information about a plan in a specific AWS Region using the Region switch Regional data plane
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_GetPlanInRegion.html
   */
  public toGetPlanInRegion() {
    return this.to('GetPlanInRegion');
  }

  /**
   * Grants permission to get the resource policy of a plan
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/r53recovery/latest/dg/arc-region-switch.region-switch-different-accounts.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to list plan execution events
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_ListPlanExecutionEvents.html
   */
  public toListPlanExecutionEvents() {
    return this.to('ListPlanExecutionEvents');
  }

  /**
   * Grants permission to list plan executions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_ListPlanExecutions.html
   */
  public toListPlanExecutions() {
    return this.to('ListPlanExecutions');
  }

  /**
   * Grants permission to list plans in all AWS Regions using a control plane
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_ListPlans.html
   */
  public toListPlans() {
    return this.to('ListPlans');
  }

  /**
   * Grants permission to list plans in a specific AWS Region using the Region switch Regional data plane
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_ListPlansInRegion.html
   */
  public toListPlansInRegion() {
    return this.to('ListPlansInRegion');
  }

  /**
   * Grants permission to list Route 53 health checks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_ListRoute53HealthChecks.html
   */
  public toListRoute53HealthChecks() {
    return this.to('ListRoute53HealthChecks');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to define the RAM access control policy for a plan
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/r53recovery/latest/dg/arc-region-switch.region-switch-different-accounts.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to start a plan execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_StartPlanExecution.html
   */
  public toStartPlanExecution() {
    return this.to('StartPlanExecution');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_UpdatePlan.html
   */
  public toUpdatePlan() {
    return this.to('UpdatePlan');
  }

  /**
   * Grants permission to update a plan execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_UpdatePlanExecution.html
   */
  public toUpdatePlanExecution() {
    return this.to('UpdatePlanExecution');
  }

  /**
   * Grants permission to update a plan execution step
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/arc-region-switch/latest/api/API_UpdatePlanExecutionStep.html
   */
  public toUpdatePlanExecutionStep() {
    return this.to('UpdatePlanExecutionStep');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ApprovePlanExecutionStep',
      'CancelPlanExecution',
      'CreatePlan',
      'DeletePlan',
      'StartPlanExecution',
      'UpdatePlan',
      'UpdatePlanExecution',
      'UpdatePlanExecutionStep'
    ],
    'Permissions management': [
      'DeleteResourcePolicy',
      'GetResourcePolicy',
      'PutResourcePolicy'
    ],
    Read: [
      'GetPlan',
      'GetPlanEvaluationStatus',
      'GetPlanExecution',
      'GetPlanInRegion',
      'ListTagsForResource'
    ],
    List: [
      'ListPlanExecutionEvents',
      'ListPlanExecutions',
      'ListPlans',
      'ListPlansInRegion',
      'ListRoute53HealthChecks'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type plan to the statement
   *
   * https://docs.aws.amazon.com/r53recovery/latest/dg/plan.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPlan(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:arc-region-switch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:plan/${ resourceId }`);
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreatePlan()
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
   * Filters access by a tag's key and value in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - plan
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreatePlan()
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
