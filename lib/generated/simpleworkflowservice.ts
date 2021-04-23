import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [swf](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpleworkflowservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Swf extends PolicyStatement {
  public servicePrefix = 'swf';

  /**
   * Statement provider for service [swf](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpleworkflowservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Description for CancelTimer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CancelTimer.html
   */
  public toCancelTimer() {
    return this.to('CancelTimer');
  }

  /**
   * Description for CancelWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CancelWorkflowExecution.html
   */
  public toCancelWorkflowExecution() {
    return this.to('CancelWorkflowExecution');
  }

  /**
   * Description for CompleteWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CompleteWorkflowExecution.html
   */
  public toCompleteWorkflowExecution() {
    return this.to('CompleteWorkflowExecution');
  }

  /**
   * Description for ContinueAsNewWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ContinueAsNewWorkflowExecution.html
   */
  public toContinueAsNewWorkflowExecution() {
    return this.to('ContinueAsNewWorkflowExecution');
  }

  /**
   * Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifTagFilterTag()
   * - .ifTypeFilterName()
   * - .ifTypeFilterVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountClosedWorkflowExecutions.html
   */
  public toCountClosedWorkflowExecutions() {
    return this.to('CountClosedWorkflowExecutions');
  }

  /**
   * Returns the number of open workflow executions within the given domain that meet the specified filtering criteria.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifTagFilterTag()
   * - .ifTypeFilterName()
   * - .ifTypeFilterVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountOpenWorkflowExecutions.html
   */
  public toCountOpenWorkflowExecutions() {
    return this.to('CountOpenWorkflowExecutions');
  }

  /**
   * Returns the estimated number of activity tasks in the specified task list.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifTaskListName()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountPendingActivityTasks.html
   */
  public toCountPendingActivityTasks() {
    return this.to('CountPendingActivityTasks');
  }

  /**
   * Returns the estimated number of decision tasks in the specified task list.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifTaskListName()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountPendingDecisionTasks.html
   */
  public toCountPendingDecisionTasks() {
    return this.to('CountPendingDecisionTasks');
  }

  /**
   * Deprecates the specified activity type.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifActivityTypeName()
   * - .ifActivityTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateActivityType.html
   */
  public toDeprecateActivityType() {
    return this.to('DeprecateActivityType');
  }

  /**
   * Deprecates the specified domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateDomain.html
   */
  public toDeprecateDomain() {
    return this.to('DeprecateDomain');
  }

  /**
   * Deprecates the specified workflow type.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWorkflowTypeName()
   * - .ifWorkflowTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateWorkflowType.html
   */
  public toDeprecateWorkflowType() {
    return this.to('DeprecateWorkflowType');
  }

  /**
   * Returns information about the specified activity type.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifActivityTypeName()
   * - .ifActivityTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeActivityType.html
   */
  public toDescribeActivityType() {
    return this.to('DescribeActivityType');
  }

  /**
   * Returns information about the specified domain, including description and status.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeDomain.html
   */
  public toDescribeDomain() {
    return this.to('DescribeDomain');
  }

  /**
   * Returns information about the specified workflow execution including its type and some statistics.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeWorkflowExecution.html
   */
  public toDescribeWorkflowExecution() {
    return this.to('DescribeWorkflowExecution');
  }

  /**
   * Returns information about the specified workflow type.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifWorkflowTypeName()
   * - .ifWorkflowTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeWorkflowType.html
   */
  public toDescribeWorkflowType() {
    return this.to('DescribeWorkflowType');
  }

  /**
   * Description for FailWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_FailWorkflowExecution.html
   */
  public toFailWorkflowExecution() {
    return this.to('FailWorkflowExecution');
  }

  /**
   * Returns the history of the specified workflow execution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_GetWorkflowExecutionHistory.html
   */
  public toGetWorkflowExecutionHistory() {
    return this.to('GetWorkflowExecutionHistory');
  }

  /**
   * Returns information about all activities registered in the specified domain that match the specified name and registration status.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListActivityTypes.html
   */
  public toListActivityTypes() {
    return this.to('ListActivityTypes');
  }

  /**
   * Returns a list of closed workflow executions in the specified domain that meet the filtering criteria.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifTagFilterTag()
   * - .ifTypeFilterName()
   * - .ifTypeFilterVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListClosedWorkflowExecutions.html
   */
  public toListClosedWorkflowExecutions() {
    return this.to('ListClosedWorkflowExecutions');
  }

  /**
   * Returns the list of domains registered in the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Returns a list of open workflow executions in the specified domain that meet the filtering criteria.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifTagFilterTag()
   * - .ifTypeFilterName()
   * - .ifTypeFilterVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListOpenWorkflowExecutions.html
   */
  public toListOpenWorkflowExecutions() {
    return this.to('ListOpenWorkflowExecutions');
  }

  /**
   * This action lists tags for an AWS SWF resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Returns information about workflow types in the specified domain.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListWorkflowTypes.html
   */
  public toListWorkflowTypes() {
    return this.to('ListWorkflowTypes');
  }

  /**
   * Used by workers to get an ActivityTask from the specified activity taskList.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTaskListName()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_PollForActivityTask.html
   */
  public toPollForActivityTask() {
    return this.to('PollForActivityTask');
  }

  /**
   * Used by deciders to get a DecisionTask from the specified decision taskList.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTaskListName()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_PollForDecisionTask.html
   */
  public toPollForDecisionTask() {
    return this.to('PollForDecisionTask');
  }

  /**
   * Used by activity workers to report to the service that the ActivityTask represented by the specified taskToken is still making progress.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RecordActivityTaskHeartbeat.html
   */
  public toRecordActivityTaskHeartbeat() {
    return this.to('RecordActivityTaskHeartbeat');
  }

  /**
   * Description for RecordMarker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RecordMarker.html
   */
  public toRecordMarker() {
    return this.to('RecordMarker');
  }

  /**
   * Registers a new activity type along with its configuration settings in the specified domain.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDefaultTaskListName()
   * - .ifName()
   * - .ifVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterActivityType.html
   */
  public toRegisterActivityType() {
    return this.to('RegisterActivityType');
  }

  /**
   * Registers a new domain.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterDomain.html
   */
  public toRegisterDomain() {
    return this.to('RegisterDomain');
  }

  /**
   * Registers a new workflow type and its configuration settings in the specified domain.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDefaultTaskListName()
   * - .ifName()
   * - .ifVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterWorkflowType.html
   */
  public toRegisterWorkflowType() {
    return this.to('RegisterWorkflowType');
  }

  /**
   * Description for RequestCancelActivityTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelActivityTask.html
   */
  public toRequestCancelActivityTask() {
    return this.to('RequestCancelActivityTask');
  }

  /**
   * Description for RequestCancelExternalWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelExternalWorkflowExecution.html
   */
  public toRequestCancelExternalWorkflowExecution() {
    return this.to('RequestCancelExternalWorkflowExecution');
  }

  /**
   * Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by the given domain, workflowId, and runId.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelWorkflowExecution.html
   */
  public toRequestCancelWorkflowExecution() {
    return this.to('RequestCancelWorkflowExecution');
  }

  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully canceled.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskCanceled.html
   */
  public toRespondActivityTaskCanceled() {
    return this.to('RespondActivityTaskCanceled');
  }

  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully with a result (if provided).
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifActivityTypeName()
   * - .ifActivityTypeVersion()
   * - .ifTagListMember0()
   * - .ifTagListMember1()
   * - .ifTagListMember2()
   * - .ifTagListMember3()
   * - .ifTagListMember4()
   * - .ifTaskListName()
   * - .ifWorkflowTypeName()
   * - .ifWorkflowTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskCompleted.html
   */
  public toRespondActivityTaskCompleted() {
    return this.to('RespondActivityTaskCompleted');
  }

  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason (if specified).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskFailed.html
   */
  public toRespondActivityTaskFailed() {
    return this.to('RespondActivityTaskFailed');
  }

  /**
   * Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully completed.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondDecisionTaskCompleted.html
   */
  public toRespondDecisionTaskCompleted() {
    return this.to('RespondDecisionTaskCompleted');
  }

  /**
   * Description for ScheduleActivityTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ScheduleActivityTask.html
   */
  public toScheduleActivityTask() {
    return this.to('ScheduleActivityTask');
  }

  /**
   * Description for SignalExternalWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_SignalExternalWorkflowExecution.html
   */
  public toSignalExternalWorkflowExecution() {
    return this.to('SignalExternalWorkflowExecution');
  }

  /**
   * Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_SignalWorkflowExecution.html
   */
  public toSignalWorkflowExecution() {
    return this.to('SignalWorkflowExecution');
  }

  /**
   * Description for StartChildWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_StartChildWorkflowExecution.html
   */
  public toStartChildWorkflowExecution() {
    return this.to('StartChildWorkflowExecution');
  }

  /**
   * Description for StartTimer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_StartTimer.html
   */
  public toStartTimer() {
    return this.to('StartTimer');
  }

  /**
   * Starts an execution of the workflow type in the specified domain using the provided workflowId and input data.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTagListMember0()
   * - .ifTagListMember1()
   * - .ifTagListMember2()
   * - .ifTagListMember3()
   * - .ifTagListMember4()
   * - .ifTaskListName()
   * - .ifWorkflowTypeName()
   * - .ifWorkflowTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_StartWorkflowExecution.html
   */
  public toStartWorkflowExecution() {
    return this.to('StartWorkflowExecution');
  }

  /**
   * This action tags an AWS SWF resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the given domain, runId, and workflowId.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_TerminateWorkflowExecution.html
   */
  public toTerminateWorkflowExecution() {
    return this.to('TerminateWorkflowExecution');
  }

  /**
   * Undeprecates a previously deprecated activity type.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifActivityTypeName()
   * - .ifActivityTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UndeprecateActivityType.html
   */
  public toUndeprecateActivityType() {
    return this.to('UndeprecateActivityType');
  }

  /**
   * Undeprecates a previously deprecated domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UndeprecateDomain.html
   */
  public toUndeprecateDomain() {
    return this.to('UndeprecateDomain');
  }

  /**
   * Undeprecates a previously deprecated workflow type.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWorkflowTypeName()
   * - .ifWorkflowTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UndeprecateWorkflowType.html
   */
  public toUndeprecateWorkflowType() {
    return this.to('UndeprecateWorkflowType');
  }

  /**
   * This action removes a tag from an AWS SWF resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelTimer",
      "CancelWorkflowExecution",
      "CompleteWorkflowExecution",
      "ContinueAsNewWorkflowExecution",
      "DeprecateActivityType",
      "DeprecateDomain",
      "DeprecateWorkflowType",
      "FailWorkflowExecution",
      "PollForActivityTask",
      "PollForDecisionTask",
      "RecordActivityTaskHeartbeat",
      "RecordMarker",
      "RegisterActivityType",
      "RegisterDomain",
      "RegisterWorkflowType",
      "RequestCancelActivityTask",
      "RequestCancelExternalWorkflowExecution",
      "RequestCancelWorkflowExecution",
      "RespondActivityTaskCanceled",
      "RespondActivityTaskCompleted",
      "RespondActivityTaskFailed",
      "RespondDecisionTaskCompleted",
      "ScheduleActivityTask",
      "SignalExternalWorkflowExecution",
      "SignalWorkflowExecution",
      "StartChildWorkflowExecution",
      "StartTimer",
      "StartWorkflowExecution",
      "TerminateWorkflowExecution",
      "UndeprecateActivityType",
      "UndeprecateDomain",
      "UndeprecateWorkflowType"
    ],
    "Read": [
      "CountClosedWorkflowExecutions",
      "CountOpenWorkflowExecutions",
      "CountPendingActivityTasks",
      "CountPendingDecisionTasks",
      "DescribeActivityType",
      "DescribeDomain",
      "DescribeWorkflowExecution",
      "DescribeWorkflowType",
      "GetWorkflowExecutionHistory"
    ],
    "List": [
      "ListActivityTypes",
      "ListClosedWorkflowExecutions",
      "ListDomains",
      "ListOpenWorkflowExecutions",
      "ListTagsForResource",
      "ListWorkflowTypes"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/swf/latest/developerguide/swf-dev-domains.html
   *
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomain(domainName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:swf::${Account}:/domain/${DomainName}';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Constrains the policy statement to only an activity type of the specified name.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toDeprecateActivityType()
   * - .toDescribeActivityType()
   * - .toRespondActivityTaskCompleted()
   * - .toUndeprecateActivityType()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifActivityTypeName(value: string | string[], operator?: Operator | string) {
    return this.if(`activityType.name`, value, operator || 'StringLike');
  }

  /**
   * Contstrains the policy statement to only an activity type of the specified version.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toDeprecateActivityType()
   * - .toDescribeActivityType()
   * - .toRespondActivityTaskCompleted()
   * - .toUndeprecateActivityType()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifActivityTypeVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`activityType.version`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that specify a matching defaultTaskList name.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRegisterActivityType()
   * - .toRegisterWorkflowType()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDefaultTaskListName(value: string | string[], operator?: Operator | string) {
    return this.if(`defaultTaskList.name`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only activities or workflows with the specified name.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRegisterActivityType()
   * - .toRegisterWorkflowType()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifName(value: string | string[], operator?: Operator | string) {
    return this.if(`name`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that specify a matching tagFilter.tag value.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toCountClosedWorkflowExecutions()
   * - .toCountOpenWorkflowExecutions()
   * - .toListClosedWorkflowExecutions()
   * - .toListOpenWorkflowExecutions()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTagFilterTag(value: string | string[], operator?: Operator | string) {
    return this.if(`tagFilter.tag`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that contain the specified tag.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTagListMember0(value: string | string[], operator?: Operator | string) {
    return this.if(`tagList.member.0`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that contain the specified tag.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTagListMember1(value: string | string[], operator?: Operator | string) {
    return this.if(`tagList.member.1`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that contain the specified tag.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTagListMember2(value: string | string[], operator?: Operator | string) {
    return this.if(`tagList.member.2`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that contain the specified tag.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTagListMember3(value: string | string[], operator?: Operator | string) {
    return this.if(`tagList.member.3`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that contain the specified tag.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTagListMember4(value: string | string[], operator?: Operator | string) {
    return this.if(`tagList.member.4`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that specify a tasklist with the specified name.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toCountPendingActivityTasks()
   * - .toCountPendingDecisionTasks()
   * - .toPollForActivityTask()
   * - .toPollForDecisionTask()
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTaskListName(value: string | string[], operator?: Operator | string) {
    return this.if(`taskList.name`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that specify a type filter with the specified name.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toCountClosedWorkflowExecutions()
   * - .toCountOpenWorkflowExecutions()
   * - .toListClosedWorkflowExecutions()
   * - .toListOpenWorkflowExecutions()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTypeFilterName(value: string | string[], operator?: Operator | string) {
    return this.if(`typeFilter.name`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that specify a type filter with the specified version.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toCountClosedWorkflowExecutions()
   * - .toCountOpenWorkflowExecutions()
   * - .toListClosedWorkflowExecutions()
   * - .toListOpenWorkflowExecutions()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTypeFilterVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`typeFilter.version`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only activities or workflows with the specified version.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toRegisterActivityType()
   * - .toRegisterWorkflowType()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`version`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that specify a workflow type of the specified name.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toDeprecateWorkflowType()
   * - .toDescribeWorkflowType()
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   * - .toUndeprecateWorkflowType()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWorkflowTypeName(value: string | string[], operator?: Operator | string) {
    return this.if(`workflowType.name`, value, operator || 'StringLike');
  }

  /**
   * Constrains the policy statement to only requests that specify a workflow type of the specified version.
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toDeprecateWorkflowType()
   * - .toDescribeWorkflowType()
   * - .toRespondActivityTaskCompleted()
   * - .toStartWorkflowExecution()
   * - .toUndeprecateWorkflowType()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWorkflowTypeVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`workflowType.version`, value, operator || 'StringLike');
  }
}
