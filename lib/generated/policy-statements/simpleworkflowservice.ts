import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a previously started timer and record a TimerCanceled event in the history
   *
   * Access Level: Write
   */
  public toCancelTimer() {
    return this.to('CancelTimer');
  }

  /**
   * Grants permission to close the workflow execution and record a WorkflowExecutionCanceled event in the history
   *
   * Access Level: Write
   */
  public toCancelWorkflowExecution() {
    return this.to('CancelWorkflowExecution');
  }

  /**
   * Grants permission to close the workflow execution and record a WorkflowExecutionCompleted event in the history
   *
   * Access Level: Write
   */
  public toCompleteWorkflowExecution() {
    return this.to('CompleteWorkflowExecution');
  }

  /**
   * Grants permission to close the workflow execution and start a new workflow execution of the same type using the same workflow ID and a unique run Id
   *
   * Access Level: Write
   */
  public toContinueAsNewWorkflowExecution() {
    return this.to('ContinueAsNewWorkflowExecution');
  }

  /**
   * Grants permission to return the number of closed workflow executions within the given domain that meet the specified filtering criteria
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
   * Grants permission to return the number of open workflow executions within the given domain that meet the specified filtering criteria
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
   * Grants permission to return the estimated number of activity tasks in the specified task list
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
   * Grants permission to return the estimated number of decision tasks in the specified task list
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
   * Grants permission to delete the specified activity type
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifActivityTypeName()
   * - .ifActivityTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeleteActivityType.html
   */
  public toDeleteActivityType() {
    return this.to('DeleteActivityType');
  }

  /**
   * Grants permission to delete the specified workflow type
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWorkflowTypeName()
   * - .ifWorkflowTypeVersion()
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeleteWorkflowType.html
   */
  public toDeleteWorkflowType() {
    return this.to('DeleteWorkflowType');
  }

  /**
   * Grants permission to deprecate the specified activity type
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
   * Grants permission to deprecate the specified domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateDomain.html
   */
  public toDeprecateDomain() {
    return this.to('DeprecateDomain');
  }

  /**
   * Grants permission to deprecate the specified workflow type
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
   * Grants permission to return information about the specified activity type
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
   * Grants permission to return information about the specified domain, including its description and status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeDomain.html
   */
  public toDescribeDomain() {
    return this.to('DescribeDomain');
  }

  /**
   * Grants permission to return information about the specified workflow execution including its type and some statistics
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeWorkflowExecution.html
   */
  public toDescribeWorkflowExecution() {
    return this.to('DescribeWorkflowExecution');
  }

  /**
   * Grants permission to return information about the specified workflow type
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
   * Grants permission to close the workflow execution and record a WorkflowExecutionFailed event in the history
   *
   * Access Level: Write
   */
  public toFailWorkflowExecution() {
    return this.to('FailWorkflowExecution');
  }

  /**
   * Grants permission to return the history of the specified workflow execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_GetWorkflowExecutionHistory.html
   */
  public toGetWorkflowExecutionHistory() {
    return this.to('GetWorkflowExecutionHistory');
  }

  /**
   * Grants permission to return information about all activities registered in the specified domain that match the specified name and registration status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListActivityTypes.html
   */
  public toListActivityTypes() {
    return this.to('ListActivityTypes');
  }

  /**
   * Grants permission to return a list of closed workflow executions in the specified domain that meet the filtering criteria
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
   * Grants permission to return the list of domains registered in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to return a list of open workflow executions in the specified domain that meet the filtering criteria
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
   * Grants permission to list tags for an AWS SWF resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to return information about workflow types in the specified domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListWorkflowTypes.html
   */
  public toListWorkflowTypes() {
    return this.to('ListWorkflowTypes');
  }

  /**
   * Grants permission to workers to get an ActivityTask from the specified activity taskList
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
   * Grants permission to deciders to get a DecisionTask from the specified decision taskList
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
   * Grants permission to workers to report to the service that the ActivityTask represented by the specified taskToken is still making progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RecordActivityTaskHeartbeat.html
   */
  public toRecordActivityTaskHeartbeat() {
    return this.to('RecordActivityTaskHeartbeat');
  }

  /**
   * Grants permission to record a MarkerRecorded event in the history
   *
   * Access Level: Write
   */
  public toRecordMarker() {
    return this.to('RecordMarker');
  }

  /**
   * Grants permission to register a new activity type along with its configuration settings in the specified domain
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
   * Grants permission to register a new domain
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
   * Grants permission to register a new workflow type and its configuration settings in the specified domain
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
   * Grants permission to attempt to cancel a previously scheduled activity task
   *
   * Access Level: Write
   */
  public toRequestCancelActivityTask() {
    return this.to('RequestCancelActivityTask');
  }

  /**
   * Grants permission to request that a request be made to cancel the specified external workflow execution
   *
   * Access Level: Write
   */
  public toRequestCancelExternalWorkflowExecution() {
    return this.to('RequestCancelExternalWorkflowExecution');
  }

  /**
   * Grants permission to record a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by the given domain, workflowId, and runId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelWorkflowExecution.html
   */
  public toRequestCancelWorkflowExecution() {
    return this.to('RequestCancelWorkflowExecution');
  }

  /**
   * Grants permission to workers to tell the service that the ActivityTask identified by the taskToken was successfully canceled
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskCanceled.html
   */
  public toRespondActivityTaskCanceled() {
    return this.to('RespondActivityTaskCanceled');
  }

  /**
   * Grants permission to workers to tell the service that the ActivityTask identified by the taskToken completed successfully with a result (if provided)
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
   * Grants permission to workers to tell the service that the ActivityTask identified by the taskToken has failed with reason (if specified)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskFailed.html
   */
  public toRespondActivityTaskFailed() {
    return this.to('RespondActivityTaskFailed');
  }

  /**
   * Grants permission to deciders to tell the service that the DecisionTask identified by the taskToken has successfully completed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondDecisionTaskCompleted.html
   */
  public toRespondDecisionTaskCompleted() {
    return this.to('RespondDecisionTaskCompleted');
  }

  /**
   * Grants permission to schedule an activity task
   *
   * Access Level: Write
   */
  public toScheduleActivityTask() {
    return this.to('ScheduleActivityTask');
  }

  /**
   * Grants permission to request a signal to be delivered to the specified external workflow execution and records
   *
   * Access Level: Write
   */
  public toSignalExternalWorkflowExecution() {
    return this.to('SignalExternalWorkflowExecution');
  }

  /**
   * Grants permission to record a WorkflowExecutionSignaled event in the workflow execution history and create a decision task for the workflow execution identified by the given domain, workflowId and runId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_SignalWorkflowExecution.html
   */
  public toSignalWorkflowExecution() {
    return this.to('SignalWorkflowExecution');
  }

  /**
   * Grants permission to request that a child workflow execution be started
   *
   * Access Level: Write
   */
  public toStartChildWorkflowExecution() {
    return this.to('StartChildWorkflowExecution');
  }

  /**
   * Grants permission to start a timer for a workflow execution
   *
   * Access Level: Write
   */
  public toStartTimer() {
    return this.to('StartTimer');
  }

  /**
   * Grants permission to start an execution of the workflow type in the specified domain using the provided workflowId and input data
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
   * Grants permission to tag an AWS SWF resource
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
   * Grants permission to record a WorkflowExecutionTerminated event and force closure of the workflow execution identified by the given domain, runId, and workflowId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_TerminateWorkflowExecution.html
   */
  public toTerminateWorkflowExecution() {
    return this.to('TerminateWorkflowExecution');
  }

  /**
   * Grants permission to undeprecate a previously deprecated activity type
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
   * Grants permission to undeprecate a previously deprecated domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UndeprecateDomain.html
   */
  public toUndeprecateDomain() {
    return this.to('UndeprecateDomain');
  }

  /**
   * Grants permission to undeprecate a previously deprecated workflow type
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
   * Grants permission to remove a tag from an AWS SWF resource
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
    Write: [
      'CancelTimer',
      'CancelWorkflowExecution',
      'CompleteWorkflowExecution',
      'ContinueAsNewWorkflowExecution',
      'DeleteActivityType',
      'DeleteWorkflowType',
      'DeprecateActivityType',
      'DeprecateDomain',
      'DeprecateWorkflowType',
      'FailWorkflowExecution',
      'PollForActivityTask',
      'PollForDecisionTask',
      'RecordActivityTaskHeartbeat',
      'RecordMarker',
      'RegisterActivityType',
      'RegisterDomain',
      'RegisterWorkflowType',
      'RequestCancelActivityTask',
      'RequestCancelExternalWorkflowExecution',
      'RequestCancelWorkflowExecution',
      'RespondActivityTaskCanceled',
      'RespondActivityTaskCompleted',
      'RespondActivityTaskFailed',
      'RespondDecisionTaskCompleted',
      'ScheduleActivityTask',
      'SignalExternalWorkflowExecution',
      'SignalWorkflowExecution',
      'StartChildWorkflowExecution',
      'StartTimer',
      'StartWorkflowExecution',
      'TerminateWorkflowExecution',
      'UndeprecateActivityType',
      'UndeprecateDomain',
      'UndeprecateWorkflowType'
    ],
    Read: [
      'CountClosedWorkflowExecutions',
      'CountOpenWorkflowExecutions',
      'CountPendingActivityTasks',
      'CountPendingDecisionTasks',
      'DescribeActivityType',
      'DescribeDomain',
      'DescribeWorkflowExecution',
      'DescribeWorkflowType',
      'GetWorkflowExecutionHistory'
    ],
    List: [
      'ListActivityTypes',
      'ListClosedWorkflowExecutions',
      'ListDomains',
      'ListOpenWorkflowExecutions',
      'ListTagsForResource',
      'ListWorkflowTypes'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-domains.html
   *
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomain(domainName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:swf::${ account ?? this.defaultAccount }:/domain/${ domainName }`);
  }

  /**
   * Filters access by tag of the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toRegisterDomain()
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
   * Filters access by tag of the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - domain
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag of the key
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toRegisterDomain()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the activity type
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toDeleteActivityType()
   * - .toDeprecateActivityType()
   * - .toDescribeActivityType()
   * - .toRespondActivityTaskCompleted()
   * - .toUndeprecateActivityType()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifActivityTypeName(value: string | string[], operator?: Operator | string) {
    return this.if(`activityType.name`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the version of the activity type
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toDeleteActivityType()
   * - .toDeprecateActivityType()
   * - .toDescribeActivityType()
   * - .toRespondActivityTaskCompleted()
   * - .toUndeprecateActivityType()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifActivityTypeVersion(value: string | string[], operator?: Operator | string) {
    return this.if(`activityType.version`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the default task list
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
    return this.if(`defaultTaskList.name`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of activities or workflows
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
    return this.if(`name`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the value of tagFilter.tag
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
    return this.if(`tagFilter.tag`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the specified tag
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
    return this.if(`tagList.member.0`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the specified tag
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
    return this.if(`tagList.member.1`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the specified tag
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
    return this.if(`tagList.member.2`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the specified tag
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
    return this.if(`tagList.member.3`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the specified tag
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
    return this.if(`tagList.member.4`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the tasklist
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
    return this.if(`taskList.name`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the type filter
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
    return this.if(`typeFilter.name`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the version of the type filter
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
    return this.if(`typeFilter.version`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the version of activities or workflows
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
    return this.if(`version`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the workflow type
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toDeleteWorkflowType()
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
    return this.if(`workflowType.name`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the version of the workflow type
   *
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api
   *
   * Applies to actions:
   * - .toDeleteWorkflowType()
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
    return this.if(`workflowType.version`, value, operator ?? 'StringLike');
  }
}
