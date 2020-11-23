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
    this.to('CancelTimer');
    return this;
  }

  /**
   * Description for CancelWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CancelWorkflowExecution.html
   */
  public toCancelWorkflowExecution() {
    this.to('CancelWorkflowExecution');
    return this;
  }

  /**
   * Description for CompleteWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CompleteWorkflowExecution.html
   */
  public toCompleteWorkflowExecution() {
    this.to('CompleteWorkflowExecution');
    return this;
  }

  /**
   * Description for ContinueAsNewWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ContinueAsNewWorkflowExecution.html
   */
  public toContinueAsNewWorkflowExecution() {
    this.to('ContinueAsNewWorkflowExecution');
    return this;
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
    this.to('CountClosedWorkflowExecutions');
    return this;
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
    this.to('CountOpenWorkflowExecutions');
    return this;
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
    this.to('CountPendingActivityTasks');
    return this;
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
    this.to('CountPendingDecisionTasks');
    return this;
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
    this.to('DeprecateActivityType');
    return this;
  }

  /**
   * Deprecates the specified domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateDomain.html
   */
  public toDeprecateDomain() {
    this.to('DeprecateDomain');
    return this;
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
    this.to('DeprecateWorkflowType');
    return this;
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
    this.to('DescribeActivityType');
    return this;
  }

  /**
   * Returns information about the specified domain, including description and status.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeDomain.html
   */
  public toDescribeDomain() {
    this.to('DescribeDomain');
    return this;
  }

  /**
   * Returns information about the specified workflow execution including its type and some statistics.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeWorkflowExecution.html
   */
  public toDescribeWorkflowExecution() {
    this.to('DescribeWorkflowExecution');
    return this;
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
    this.to('DescribeWorkflowType');
    return this;
  }

  /**
   * Description for FailWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_FailWorkflowExecution.html
   */
  public toFailWorkflowExecution() {
    this.to('FailWorkflowExecution');
    return this;
  }

  /**
   * Returns the history of the specified workflow execution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_GetWorkflowExecutionHistory.html
   */
  public toGetWorkflowExecutionHistory() {
    this.to('GetWorkflowExecutionHistory');
    return this;
  }

  /**
   * Returns information about all activities registered in the specified domain that match the specified name and registration status.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListActivityTypes.html
   */
  public toListActivityTypes() {
    this.to('ListActivityTypes');
    return this;
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
    this.to('ListClosedWorkflowExecutions');
    return this;
  }

  /**
   * Returns the list of domains registered in the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListDomains.html
   */
  public toListDomains() {
    this.to('ListDomains');
    return this;
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
    this.to('ListOpenWorkflowExecutions');
    return this;
  }

  /**
   * This action lists tags for an AWS SWF resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Returns information about workflow types in the specified domain.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListWorkflowTypes.html
   */
  public toListWorkflowTypes() {
    this.to('ListWorkflowTypes');
    return this;
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
    this.to('PollForActivityTask');
    return this;
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
    this.to('PollForDecisionTask');
    return this;
  }

  /**
   * Used by activity workers to report to the service that the ActivityTask represented by the specified taskToken is still making progress.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RecordActivityTaskHeartbeat.html
   */
  public toRecordActivityTaskHeartbeat() {
    this.to('RecordActivityTaskHeartbeat');
    return this;
  }

  /**
   * Description for RecordMarker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RecordMarker.html
   */
  public toRecordMarker() {
    this.to('RecordMarker');
    return this;
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
    this.to('RegisterActivityType');
    return this;
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
    this.to('RegisterDomain');
    return this;
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
    this.to('RegisterWorkflowType');
    return this;
  }

  /**
   * Description for RequestCancelActivityTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelActivityTask.html
   */
  public toRequestCancelActivityTask() {
    this.to('RequestCancelActivityTask');
    return this;
  }

  /**
   * Description for RequestCancelExternalWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelExternalWorkflowExecution.html
   */
  public toRequestCancelExternalWorkflowExecution() {
    this.to('RequestCancelExternalWorkflowExecution');
    return this;
  }

  /**
   * Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by the given domain, workflowId, and runId.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelWorkflowExecution.html
   */
  public toRequestCancelWorkflowExecution() {
    this.to('RequestCancelWorkflowExecution');
    return this;
  }

  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully canceled.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskCanceled.html
   */
  public toRespondActivityTaskCanceled() {
    this.to('RespondActivityTaskCanceled');
    return this;
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
    this.to('RespondActivityTaskCompleted');
    return this;
  }

  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason (if specified).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskFailed.html
   */
  public toRespondActivityTaskFailed() {
    this.to('RespondActivityTaskFailed');
    return this;
  }

  /**
   * Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully completed.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondDecisionTaskCompleted.html
   */
  public toRespondDecisionTaskCompleted() {
    this.to('RespondDecisionTaskCompleted');
    return this;
  }

  /**
   * Description for ScheduleActivityTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ScheduleActivityTask.html
   */
  public toScheduleActivityTask() {
    this.to('ScheduleActivityTask');
    return this;
  }

  /**
   * Description for SignalExternalWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_SignalExternalWorkflowExecution.html
   */
  public toSignalExternalWorkflowExecution() {
    this.to('SignalExternalWorkflowExecution');
    return this;
  }

  /**
   * Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_SignalWorkflowExecution.html
   */
  public toSignalWorkflowExecution() {
    this.to('SignalWorkflowExecution');
    return this;
  }

  /**
   * Description for StartChildWorkflowExecution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_StartChildWorkflowExecution.html
   */
  public toStartChildWorkflowExecution() {
    this.to('StartChildWorkflowExecution');
    return this;
  }

  /**
   * Description for StartTimer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_StartTimer.html
   */
  public toStartTimer() {
    this.to('StartTimer');
    return this;
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
    this.to('StartWorkflowExecution');
    return this;
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
    this.to('TagResource');
    return this;
  }

  /**
   * Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the given domain, runId, and workflowId.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_TerminateWorkflowExecution.html
   */
  public toTerminateWorkflowExecution() {
    this.to('TerminateWorkflowExecution');
    return this;
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
    this.to('UntagResource');
    return this;
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
      "TerminateWorkflowExecution"
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
    var arn = 'arn:${Partition}:swf::${Account}:domain/${DomainName}';
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
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifActivityTypeName(value: string | string[], operator?: Operator | string) {
    return this.if(`swf:activityType.name`, value, operator || 'StringLike');
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
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifActivityTypeVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`swf:activityType.version`, value, operator || 'StringLike');
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
    return this.if(`swf:defaultTaskList.name`, value, operator || 'StringLike');
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
    return this.if(`swf:name`, value, operator || 'StringLike');
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
    return this.if(`swf:tagFilter.tag`, value, operator || 'StringLike');
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
    return this.if(`swf:tagList.member.0`, value, operator || 'StringLike');
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
    return this.if(`swf:tagList.member.1`, value, operator || 'StringLike');
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
    return this.if(`swf:tagList.member.2`, value, operator || 'StringLike');
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
    return this.if(`swf:tagList.member.3`, value, operator || 'StringLike');
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
    return this.if(`swf:tagList.member.4`, value, operator || 'StringLike');
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
    return this.if(`swf:taskList.name`, value, operator || 'StringLike');
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
    return this.if(`swf:typeFilter.name`, value, operator || 'StringLike');
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
    return this.if(`swf:typeFilter.version`, value, operator || 'StringLike');
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
    return this.if(`swf:version`, value, operator || 'StringLike');
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
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWorkflowTypeName(value: string | string[], operator?: Operator | string) {
    return this.if(`swf:workflowType.name`, value, operator || 'StringLike');
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
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWorkflowTypeVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`swf:workflowType.version`, value, operator || 'StringLike');
  }
}
