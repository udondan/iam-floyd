import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [datapipeline](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatapipeline.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Datapipeline extends PolicyStatement {
  public servicePrefix = 'datapipeline';

  /**
   * Statement provider for service [datapipeline](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatapipeline.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to validate the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   * - .ifWorkerGroup()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ActivatePipeline.html
   */
  public toActivatePipeline() {
    return this.to('ActivatePipeline');
  }

  /**
   * Grants permission to add or modify tags for the specified pipeline
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_AddTags.html
   */
  public toAddTags() {
    return this.to('AddTags');
  }

  /**
   * Grants permission to create a new, empty pipeline
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifTag()
   *
   * Dependent actions:
   * - datapipeline:AddTags
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_CreatePipeline.html
   */
  public toCreatePipeline() {
    return this.to('CreatePipeline');
  }

  /**
   * Grants permission to Deactivate the specified running pipeline
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   * - .ifWorkerGroup()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DeactivatePipeline.html
   */
  public toDeactivatePipeline() {
    return this.to('DeactivatePipeline');
  }

  /**
   * Grants permission to delete a pipeline, its pipeline definition, and its run history
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DeletePipeline.html
   */
  public toDeletePipeline() {
    return this.to('DeletePipeline');
  }

  /**
   * Grants permission to get the object definitions for a set of objects associated with the pipeline
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DescribeObjects.html
   */
  public toDescribeObjects() {
    return this.to('DescribeObjects');
  }

  /**
   * Grants permission to retrieves metadata about one or more pipelines
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DescribePipelines.html
   */
  public toDescribePipelines() {
    return this.to('DescribePipelines');
  }

  /**
   * Grants permission to task runners to call EvaluateExpression, to evaluate a string in the context of the specified object
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_EvaluateExpression.html
   */
  public toEvaluateExpression() {
    return this.to('EvaluateExpression');
  }

  /**
   * Grants permission to call GetAccountLimits
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_GetAccountLimits.html
   */
  public toGetAccountLimits() {
    return this.to('GetAccountLimits');
  }

  /**
   * Grants permission to gets the definition of the specified pipeline
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   * - .ifWorkerGroup()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_GetPipelineDefinition.html
   */
  public toGetPipelineDefinition() {
    return this.to('GetPipelineDefinition');
  }

  /**
   * Grants permission to list the pipeline identifiers for all active pipelines that you have permission to access
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ListPipelines.html
   */
  public toListPipelines() {
    return this.to('ListPipelines');
  }

  /**
   * Grants permission to task runners to call PollForTask, to receive a task to perform from AWS Data Pipeline
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWorkerGroup()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PollForTask.html
   */
  public toPollForTask() {
    return this.to('PollForTask');
  }

  /**
   * Grants permission to call PutAccountLimits
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PutAccountLimits.html
   */
  public toPutAccountLimits() {
    return this.to('PutAccountLimits');
  }

  /**
   * Grants permission to add tasks, schedules, and preconditions to the specified pipeline
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   * - .ifWorkerGroup()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PutPipelineDefinition.html
   */
  public toPutPipelineDefinition() {
    return this.to('PutPipelineDefinition');
  }

  /**
   * Grants permission to query the specified pipeline for the names of objects that match the specified set of conditions
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_QueryObjects.html
   */
  public toQueryObjects() {
    return this.to('QueryObjects');
  }

  /**
   * Grants permission to remove existing tags from the specified pipeline
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_RemoveTags.html
   */
  public toRemoveTags() {
    return this.to('RemoveTags');
  }

  /**
   * Grants permission to task runners to call ReportTaskProgress, when they are assigned a task to acknowledge that it has the task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ReportTaskProgress.html
   */
  public toReportTaskProgress() {
    return this.to('ReportTaskProgress');
  }

  /**
   * Grants permission to task runners to call ReportTaskRunnerHeartbeat every 15 minutes to indicate that they are operational
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ReportTaskRunnerHeartbeat.html
   */
  public toReportTaskRunnerHeartbeat() {
    return this.to('ReportTaskRunnerHeartbeat');
  }

  /**
   * Grants permission to requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_SetStatus.html
   */
  public toSetStatus() {
    return this.to('SetStatus');
  }

  /**
   * Grants permission to task runners to call SetTaskStatus to notify AWS Data Pipeline that a task is completed and provide information about the final status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_SetTaskStatus.html
   */
  public toSetTaskStatus() {
    return this.to('SetTaskStatus');
  }

  /**
   * Grants permission to validate the specified pipeline definition to ensure that it is well formed and can be run without error
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   * - .ifWorkerGroup()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ValidatePipelineDefinition.html
   */
  public toValidatePipelineDefinition() {
    return this.to('ValidatePipelineDefinition');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ActivatePipeline',
      'CreatePipeline',
      'DeactivatePipeline',
      'DeletePipeline',
      'PollForTask',
      'PutAccountLimits',
      'PutPipelineDefinition',
      'ReportTaskProgress',
      'ReportTaskRunnerHeartbeat',
      'SetStatus',
      'SetTaskStatus'
    ],
    Tagging: [
      'AddTags',
      'RemoveTags'
    ],
    Read: [
      'DescribeObjects',
      'DescribePipelines',
      'EvaluateExpression',
      'GetPipelineDefinition',
      'QueryObjects',
      'ValidatePipelineDefinition'
    ],
    List: [
      'GetAccountLimits',
      'ListPipelines'
    ]
  };

  /**
   * Adds a resource of type pipeline to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatapipeline.html
   *
   * @param pipelineId - Identifier for the pipelineId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPipeline(pipelineId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:datapipeline:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:pipeline/${ pipelineId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toCreatePipeline()
   * - .toRemoveTags()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - pipeline
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
   * - .toAddTags()
   * - .toCreatePipeline()
   * - .toRemoveTags()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the IAM user that created the pipeline
   *
   * https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3
   *
   * Applies to actions:
   * - .toActivatePipeline()
   * - .toAddTags()
   * - .toDeactivatePipeline()
   * - .toDeletePipeline()
   * - .toDescribeObjects()
   * - .toDescribePipelines()
   * - .toEvaluateExpression()
   * - .toGetPipelineDefinition()
   * - .toPutPipelineDefinition()
   * - .toQueryObjects()
   * - .toRemoveTags()
   * - .toSetStatus()
   * - .toValidatePipelineDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPipelineCreator(value: string | string[], operator?: Operator | string) {
    return this.if(`PipelineCreator`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by customer-specified key/value pair that can be attached to a resource
   *
   * https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags
   *
   * Applies to actions:
   * - .toActivatePipeline()
   * - .toAddTags()
   * - .toCreatePipeline()
   * - .toDeactivatePipeline()
   * - .toDeletePipeline()
   * - .toDescribeObjects()
   * - .toDescribePipelines()
   * - .toEvaluateExpression()
   * - .toGetPipelineDefinition()
   * - .toPutPipelineDefinition()
   * - .toQueryObjects()
   * - .toRemoveTags()
   * - .toSetStatus()
   * - .toValidatePipelineDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTag(value: string | string[], operator?: Operator | string) {
    return this.if(`Tag`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of a worker group for which a Task Runner retrieves work
   *
   * https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-workergroup
   *
   * Applies to actions:
   * - .toActivatePipeline()
   * - .toDeactivatePipeline()
   * - .toGetPipelineDefinition()
   * - .toPollForTask()
   * - .toPutPipelineDefinition()
   * - .toValidatePipelineDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWorkerGroup(value: string | string[], operator?: Operator | string) {
    return this.if(`workerGroup`, value, operator ?? 'StringLike');
  }
}
