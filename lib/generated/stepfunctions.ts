import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateStateMachine.html
   */
  public toCreateStateMachine() {
    return this.to('CreateStateMachine');
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
   * Grants permission to describe a state machine
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachine.html
   */
  public toDescribeStateMachine() {
    return this.to('DescribeStateMachine');
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
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListExecutions.html
   */
  public toListExecutions() {
    return this.to('ListExecutions');
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
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
   * Grants permission to update a state machine
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_UpdateStateMachine.html
   */
  public toUpdateStateMachine() {
    return this.to('UpdateStateMachine');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateActivity',
      'CreateStateMachine',
      'DeleteActivity',
      'DeleteStateMachine',
      'GetActivityTask',
      'SendTaskFailure',
      'SendTaskHeartbeat',
      'SendTaskSuccess',
      'StartExecution',
      'StartSyncExecution',
      'StopExecution',
      'UpdateStateMachine'
    ],
    Read: [
      'DescribeActivity',
      'DescribeExecution',
      'DescribeStateMachine',
      'DescribeStateMachineForExecution',
      'GetExecutionHistory',
      'ListExecutions',
      'ListTagsForResource'
    ],
    List: [
      'ListActivities',
      'ListStateMachines'
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
   */
  public onExecution(stateMachineName: string, executionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || States.defaultPartition }:states:${ region || '*' }:${ account || '*' }:execution:${ stateMachineName }:${ executionId }`);
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
}
