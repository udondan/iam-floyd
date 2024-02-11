import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [states](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsstepfunctions.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class States extends PolicyStatement {
  public servicePrefix = 'states';

  /**
   * Statement provider for service [states](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsstepfunctions.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an activity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateActivity.html
   */
  public toCreateActivity() {
    return this.to('CreateActivity');
  }

  /**
   * Grants permission to create a state machine
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - states:PublishStateMachineVersion
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateStateMachine.html
   */
  public toCreateStateMachine() {
    return this.to('CreateStateMachine');
  }

  /**
   * Grants permission to create a state machine alias
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStateMachineQualifier()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateStateMachineAlias.html
   */
  public toCreateStateMachineAlias() {
    return this.to('CreateStateMachineAlias');
  }

  /**
   * Grants permission to delete an activity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteActivity.html
   */
  public toDeleteActivity() {
    return this.to('DeleteActivity');
  }

  /**
   * Grants permission to delete a state machine
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteStateMachine.html
   */
  public toDeleteStateMachine() {
    return this.to('DeleteStateMachine');
  }

  /**
   * Grants permission to delete a state machine alias
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStateMachineQualifier()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteStateMachineAlias.html
   */
  public toDeleteStateMachineAlias() {
    return this.to('DeleteStateMachineAlias');
  }

  /**
   * Grants permission to delete a state machine version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStateMachineQualifier()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteStateMachineVersion.html
   */
  public toDeleteStateMachineVersion() {
    return this.to('DeleteStateMachineVersion');
  }

  /**
   * Grants permission to describe an activity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeActivity.html
   */
  public toDescribeActivity() {
    return this.to('DescribeActivity');
  }

  /**
   * Grants permission to describe an execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeExecution.html
   */
  public toDescribeExecution() {
    return this.to('DescribeExecution');
  }

  /**
   * Grants permission to describe a map run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeMapRun.html
   */
  public toDescribeMapRun() {
    return this.to('DescribeMapRun');
  }

  /**
   * Grants permission to describe a state machine
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifStateMachineQualifier()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachine.html
   */
  public toDescribeStateMachine() {
    return this.to('DescribeStateMachine');
  }

  /**
   * Grants permission to describe a state machine alias
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifStateMachineQualifier()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachineAlias.html
   */
  public toDescribeStateMachineAlias() {
    return this.to('DescribeStateMachineAlias');
  }

  /**
   * Grants permission to describe the state machine for an execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachineForExecution.html
   */
  public toDescribeStateMachineForExecution() {
    return this.to('DescribeStateMachineForExecution');
  }

  /**
   * Grants permission to be used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetActivityTask.html
   */
  public toGetActivityTask() {
    return this.to('GetActivityTask');
  }

  /**
   * Grants permission to return the history of the specified execution as a list of events
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetExecutionHistory.html
   */
  public toGetExecutionHistory() {
    return this.to('GetExecutionHistory');
  }

  /**
   * Grants permission to invoke the HTTP Task state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/connect-third-party-apis.html
   */
  public toInvokeHTTPEndpoint() {
    return this.to('InvokeHTTPEndpoint');
  }

  /**
   * Grants permission to list the existing activities
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListActivities.html
   */
  public toListActivities() {
    return this.to('ListActivities');
  }

  /**
   * Grants permission to list the executions of a state machine
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifStateMachineQualifier()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListExecutions.html
   */
  public toListExecutions() {
    return this.to('ListExecutions');
  }

  /**
   * Grants permission to list the map runs of an execution
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListMapRuns.html
   */
  public toListMapRuns() {
    return this.to('ListMapRuns');
  }

  /**
   * Grants permission to list the aliases of a state machine
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifStateMachineQualifier()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListStateMachineAliases.html
   */
  public toListStateMachineAliases() {
    return this.to('ListStateMachineAliases');
  }

  /**
   * Grants permission to list the versions of a state machine
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListStateMachineVersions.html
   */
  public toListStateMachineVersions() {
    return this.to('ListStateMachineVersions');
  }

  /**
   * Grants permission to lists the existing state machines
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListStateMachines.html
   */
  public toListStateMachines() {
    return this.to('ListStateMachines');
  }

  /**
   * Grants permission to list tags for an AWS Step Functions resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to publish a state machine version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_PublishStateMachineVersion.html
   */
  public toPublishStateMachineVersion() {
    return this.to('PublishStateMachineVersion');
  }

  /**
   * Grants permission to redrive an execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_RedriveExecution.html
   */
  public toRedriveExecution() {
    return this.to('RedriveExecution');
  }

  /**
   * Grants permission to reveal sensitive data from an execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/test-state-isolation.html
   */
  public toRevealSecrets() {
    return this.to('RevealSecrets');
  }

  /**
   * Grants permission to report that the task identified by the taskToken failed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskFailure.html
   */
  public toSendTaskFailure() {
    return this.to('SendTaskFailure');
  }

  /**
   * Grants permission to report to the service that the task represented by the specified taskToken is still making progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskHeartbeat.html
   */
  public toSendTaskHeartbeat() {
    return this.to('SendTaskHeartbeat');
  }

  /**
   * Grants permission to report that the task identified by the taskToken completed successfully
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskSuccess.html
   */
  public toSendTaskSuccess() {
    return this.to('SendTaskSuccess');
  }

  /**
   * Grants permission to start a state machine execution
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStateMachineQualifier()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html
   */
  public toStartExecution() {
    return this.to('StartExecution');
  }

  /**
   * Grants permission to start a Synchronous Express state machine execution
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStateMachineQualifier()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartSyncExecution.html
   */
  public toStartSyncExecution() {
    return this.to('StartSyncExecution');
  }

  /**
   * Grants permission to stop an execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_StopExecution.html
   */
  public toStopExecution() {
    return this.to('StopExecution');
  }

  /**
   * Grants permission to tag an AWS Step Functions resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to test a state machine definition
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - states:RevealSecrets
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_TestState.html
   */
  public toTestState() {
    return this.to('TestState');
  }

  /**
   * Grants permission to remove a tag from an AWS Step Functions resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a map run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_UpdateMapRun.html
   */
  public toUpdateMapRun() {
    return this.to('UpdateMapRun');
  }

  /**
   * Grants permission to update a state machine
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - states:PublishStateMachineVersion
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_UpdateStateMachine.html
   */
  public toUpdateStateMachine() {
    return this.to('UpdateStateMachine');
  }

  /**
   * Grants permission to update a state machine alias
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStateMachineQualifier()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_UpdateStateMachineAlias.html
   */
  public toUpdateStateMachineAlias() {
    return this.to('UpdateStateMachineAlias');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateActivity',
      'CreateStateMachine',
      'CreateStateMachineAlias',
      'DeleteActivity',
      'DeleteStateMachine',
      'DeleteStateMachineAlias',
      'DeleteStateMachineVersion',
      'GetActivityTask',
      'InvokeHTTPEndpoint',
      'PublishStateMachineVersion',
      'RedriveExecution',
      'SendTaskFailure',
      'SendTaskHeartbeat',
      'SendTaskSuccess',
      'StartExecution',
      'StartSyncExecution',
      'StopExecution',
      'TestState',
      'UpdateMapRun',
      'UpdateStateMachine',
      'UpdateStateMachineAlias'
    ],
    Read: [
      'DescribeActivity',
      'DescribeExecution',
      'DescribeMapRun',
      'DescribeStateMachine',
      'DescribeStateMachineAlias',
      'DescribeStateMachineForExecution',
      'GetExecutionHistory',
      'RevealSecrets'
    ],
    List: [
      'ListActivities',
      'ListExecutions',
      'ListMapRuns',
      'ListStateMachineAliases',
      'ListStateMachineVersions',
      'ListStateMachines',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type activity to the statement
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-activities.html
   *
   * @param activityName - Identifier for the activityName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onActivity(activityName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || States.defaultPartition }:states:${ region || '*' }:${ account || '*' }:activity:${ activityName }`);
  }

  /**
   * Adds a resource of type execution to the statement
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-executions.html
   *
   * @param stateMachineName - Identifier for the stateMachineName.
   * @param executionId - Identifier for the executionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onExecution(stateMachineName: string, executionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || States.defaultPartition }:states:${ region || '*' }:${ account || '*' }:execution:${ stateMachineName }:${ executionId }`);
  }

  /**
   * Adds a resource of type express to the statement
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-executions.html
   *
   * @param stateMachineName - Identifier for the stateMachineName.
   * @param executionId - Identifier for the executionId.
   * @param expressId - Identifier for the expressId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onExpress(stateMachineName: string, executionId: string, expressId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || States.defaultPartition }:states:${ region || '*' }:${ account || '*' }:express:${ stateMachineName }:${ executionId }:${ expressId }`);
  }

  /**
   * Adds a resource of type statemachine to the statement
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html
   *
   * @param stateMachineName - Identifier for the stateMachineName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStatemachine(stateMachineName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || States.defaultPartition }:states:${ region || '*' }:${ account || '*' }:stateMachine:${ stateMachineName }`);
  }

  /**
   * Adds a resource of type statemachineversion to the statement
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-cd-aliasing-versioning.html
   *
   * @param stateMachineName - Identifier for the stateMachineName.
   * @param stateMachineVersionId - Identifier for the stateMachineVersionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onStatemachineversion(stateMachineName: string, stateMachineVersionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || States.defaultPartition }:states:${ region || '*' }:${ account || '*' }:stateMachine:${ stateMachineName }:${ stateMachineVersionId }`);
  }

  /**
   * Adds a resource of type statemachinealias to the statement
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-cd-aliasing-versioning.html
   *
   * @param stateMachineName - Identifier for the stateMachineName.
   * @param stateMachineAliasName - Identifier for the stateMachineAliasName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onStatemachinealias(stateMachineName: string, stateMachineAliasName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || States.defaultPartition }:states:${ region || '*' }:${ account || '*' }:stateMachine:${ stateMachineName }:${ stateMachineAliasName }`);
  }

  /**
   * Adds a resource of type maprun to the statement
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html
   *
   * @param stateMachineName - Identifier for the stateMachineName.
   * @param mapRunLabel - Identifier for the mapRunLabel.
   * @param mapRunId - Identifier for the mapRunId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onMaprun(stateMachineName: string, mapRunLabel: string, mapRunId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || States.defaultPartition }:states:${ region || '*' }:${ account || '*' }:mapRun:${ stateMachineName }/${ mapRunLabel }:${ mapRunId }`);
  }

  /**
   * Adds a resource of type labelled execution to the statement
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html
   *
   * @param stateMachineName - Identifier for the stateMachineName.
   * @param mapRunLabel - Identifier for the mapRunLabel.
   * @param executionId - Identifier for the executionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onLabelledExecution(stateMachineName: string, mapRunLabel: string, executionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || States.defaultPartition }:states:${ region || '*' }:${ account || '*' }:execution:${ stateMachineName }/${ mapRunLabel }:${ executionId }`);
  }

  /**
   * Adds a resource of type labelled express to the statement
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html
   *
   * @param stateMachineName - Identifier for the stateMachineName.
   * @param mapRunLabel - Identifier for the mapRunLabel.
   * @param executionId - Identifier for the executionId.
   * @param expressId - Identifier for the expressId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onLabelledExpress(stateMachineName: string, mapRunLabel: string, executionId: string, expressId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || States.defaultPartition }:states:${ region || '*' }:${ account || '*' }:express:${ stateMachineName }/${ mapRunLabel }:${ executionId }:${ expressId }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateActivity()
   * - .toCreateStateMachine()
   * - .toTagResource()
   * - .toUpdateStateMachine()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - activity
   * - execution
   * - statemachine
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateActivity()
   * - .toCreateStateMachine()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateStateMachine()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the endpoint that the HTTP Task state allows in the request
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/connect-third-party-apis.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifHTTPEndpoint(value: string | string[], operator?: Operator | string) {
    return this.if(`HTTPEndpoint`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the method that the HTTP Task state allows in the request
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/connect-third-party-apis.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifHTTPMethod(value: string | string[], operator?: Operator | string) {
    return this.if(`HTTPMethod`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the qualifier of a state machine ARN
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/auth-version-alias.html
   *
   * Applies to actions:
   * - .toCreateStateMachineAlias()
   * - .toDeleteStateMachineAlias()
   * - .toDeleteStateMachineVersion()
   * - .toDescribeStateMachine()
   * - .toDescribeStateMachineAlias()
   * - .toListExecutions()
   * - .toListStateMachineAliases()
   * - .toStartExecution()
   * - .toStartSyncExecution()
   * - .toUpdateStateMachineAlias()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifStateMachineQualifier(value: string | string[], operator?: Operator | string) {
    return this.if(`StateMachineQualifier`, value, operator || 'StringLike');
  }
}
