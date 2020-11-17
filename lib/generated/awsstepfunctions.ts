import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates an activity. Activities must poll Step Functions using the GetActivityTask and respond using SendTask* API calls.
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
    this.to('states:CreateActivity');
    return this;
  }

  /**
   * Creates a state machine.
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
    this.to('states:CreateStateMachine');
    return this;
  }

  /**
   * Deletes an activity.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteActivity.html
   */
  public toDeleteActivity() {
    this.to('states:DeleteActivity');
    return this;
  }

  /**
   * Deletes a state machine.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteStateMachine.html
   */
  public toDeleteStateMachine() {
    this.to('states:DeleteStateMachine');
    return this;
  }

  /**
   * Describes an activity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeActivity.html
   */
  public toDescribeActivity() {
    this.to('states:DescribeActivity');
    return this;
  }

  /**
   * Describes an execution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeExecution.html
   */
  public toDescribeExecution() {
    this.to('states:DescribeExecution');
    return this;
  }

  /**
   * Describes a state machine.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachine.html
   */
  public toDescribeStateMachine() {
    this.to('states:DescribeStateMachine');
    return this;
  }

  /**
   * Describes state machine for an execution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachineForExecution.html
   */
  public toDescribeStateMachineForExecution() {
    this.to('states:DescribeStateMachineForExecution');
    return this;
  }

  /**
   * Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetActivityTask.html
   */
  public toGetActivityTask() {
    this.to('states:GetActivityTask');
    return this;
  }

  /**
   * Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the timeStamp of the events.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetExecutionHistory.html
   */
  public toGetExecutionHistory() {
    this.to('states:GetExecutionHistory');
    return this;
  }

  /**
   * Lists the existing activities. The results may be split into multiple pages.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListActivities.html
   */
  public toListActivities() {
    this.to('states:ListActivities');
    return this;
  }

  /**
   * Lists the executions of a state machine that meet the filtering criteria. The results may be split into multiple pages.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListExecutions.html
   */
  public toListExecutions() {
    this.to('states:ListExecutions');
    return this;
  }

  /**
   * Lists the existing state machines. The results may be split into multiple pages.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListStateMachines.html
   */
  public toListStateMachines() {
    this.to('states:ListStateMachines');
    return this;
  }

  /**
   * This action lists tags for an AWS Step Functions resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('states:ListTagsForResource');
    return this;
  }

  /**
   * Used by workers to report that the task identified by the taskToken failed.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskFailure.html
   */
  public toSendTaskFailure() {
    this.to('states:SendTaskFailure');
    return this;
  }

  /**
   * Used by workers to report to the service that the task represented by the specified taskToken is still making progress.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskHeartbeat.html
   */
  public toSendTaskHeartbeat() {
    this.to('states:SendTaskHeartbeat');
    return this;
  }

  /**
   * Used by workers to report that the task identified by the taskToken completed successfully.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskSuccess.html
   */
  public toSendTaskSuccess() {
    this.to('states:SendTaskSuccess');
    return this;
  }

  /**
   * Starts a state machine execution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html
   */
  public toStartExecution() {
    this.to('states:StartExecution');
    return this;
  }

  /**
   * Stops an execution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_StopExecution.html
   */
  public toStopExecution() {
    this.to('states:StopExecution');
    return this;
  }

  /**
   * This action tags an AWS Step Functions resource.
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
    this.to('states:TagResource');
    return this;
  }

  /**
   * This action removes a tag from an AWS Step Functions resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('states:UntagResource');
    return this;
  }

  /**
   * Updates a state machine.
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
    this.to('states:UpdateStateMachine');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateActivity",
      "CreateStateMachine",
      "DeleteActivity",
      "DeleteStateMachine",
      "GetActivityTask",
      "SendTaskFailure",
      "SendTaskHeartbeat",
      "SendTaskSuccess",
      "StartExecution",
      "StopExecution",
      "UpdateStateMachine"
    ],
    "Read": [
      "DescribeActivity",
      "DescribeExecution",
      "DescribeStateMachine",
      "DescribeStateMachineForExecution",
      "GetExecutionHistory",
      "ListExecutions",
      "ListTagsForResource"
    ],
    "List": [
      "ListActivities",
      "ListStateMachines"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onActivity(activityName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:states:${Region}:${Account}:activity:${ActivityName}';
    arn = arn.replace('${ActivityName}', activityName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onExecution(stateMachineName: string, executionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:states:${Region}:${Account}:execution:${StateMachineName}:${ExecutionId}';
    arn = arn.replace('${StateMachineName}', stateMachineName);
    arn = arn.replace('${ExecutionId}', executionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type statemachine to the statement
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html
   *
   * @param stateMachineName - Identifier for the stateMachineName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStatemachine(stateMachineName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:states:${Region}:${Account}:stateMachine:${StateMachineName}';
    arn = arn.replace('${StateMachineName}', stateMachineName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
