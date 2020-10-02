import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [datapipeline](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_datapipeline.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Datapipeline extends PolicyStatement {
  public servicePrefix = 'datapipeline';

  /**
   * Statement provider for service [datapipeline](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_datapipeline.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails.
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
    this.to('datapipeline:ActivatePipeline');
    return this;
  }

  /**
   * Adds or modifies tags for the specified pipeline.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_AddTags.html
   */
  public toAddTags() {
    this.to('datapipeline:AddTags');
    return this;
  }

  /**
   * Creates a new, empty pipeline.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTag()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_CreatePipeline.html
   */
  public toCreatePipeline() {
    this.to('datapipeline:CreatePipeline');
    return this;
  }

  /**
   * Deactivates the specified running pipeline.
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
    this.to('datapipeline:DeactivatePipeline');
    return this;
  }

  /**
   * Deletes a pipeline, its pipeline definition, and its run history.
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
    this.to('datapipeline:DeletePipeline');
    return this;
  }

  /**
   * Gets the object definitions for a set of objects associated with the pipeline.
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
    this.to('datapipeline:DescribeObjects');
    return this;
  }

  /**
   * Retrieves metadata about one or more pipelines.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DescribePipelines.html
   */
  public toDescribePipelines() {
    this.to('datapipeline:DescribePipelines');
    return this;
  }

  /**
   * Task runners call EvaluateExpression to evaluate a string in the context of the specified object.
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
    this.to('datapipeline:EvaluateExpression');
    return this;
  }

  /**
   * Description for GetAccountLimits
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_GetAccountLimits.html
   */
  public toGetAccountLimits() {
    this.to('datapipeline:GetAccountLimits');
    return this;
  }

  /**
   * Gets the definition of the specified pipeline.
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
    this.to('datapipeline:GetPipelineDefinition');
    return this;
  }

  /**
   * Lists the pipeline identifiers for all active pipelines that you have permission to access.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ListPipelines.html
   */
  public toListPipelines() {
    this.to('datapipeline:ListPipelines');
    return this;
  }

  /**
   * Task runners call PollForTask to receive a task to perform from AWS Data Pipeline.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWorkerGroup()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PollForTask.html
   */
  public toPollForTask() {
    this.to('datapipeline:PollForTask');
    return this;
  }

  /**
   * Description for PutAccountLimits
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PutAccountLimits.html
   */
  public toPutAccountLimits() {
    this.to('datapipeline:PutAccountLimits');
    return this;
  }

  /**
   * Adds tasks, schedules, and preconditions to the specified pipeline.
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
    this.to('datapipeline:PutPipelineDefinition');
    return this;
  }

  /**
   * Queries the specified pipeline for the names of objects that match the specified set of conditions.
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
    this.to('datapipeline:QueryObjects');
    return this;
  }

  /**
   * Removes existing tags from the specified pipeline.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifPipelineCreator()
   * - .ifTag()
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_RemoveTags.html
   */
  public toRemoveTags() {
    this.to('datapipeline:RemoveTags');
    return this;
  }

  /**
   * Task runners call ReportTaskProgress when assigned a task to acknowledge that it has the task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ReportTaskProgress.html
   */
  public toReportTaskProgress() {
    this.to('datapipeline:ReportTaskProgress');
    return this;
  }

  /**
   * Task runners call ReportTaskRunnerHeartbeat every 15 minutes to indicate that they are operational.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ReportTaskRunnerHeartbeat.html
   */
  public toReportTaskRunnerHeartbeat() {
    this.to('datapipeline:ReportTaskRunnerHeartbeat');
    return this;
  }

  /**
   * Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline.
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
    this.to('datapipeline:SetStatus');
    return this;
  }

  /**
   * Task runners call SetTaskStatus to notify AWS Data Pipeline that a task is completed and provide information about the final status.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_SetTaskStatus.html
   */
  public toSetTaskStatus() {
    this.to('datapipeline:SetTaskStatus');
    return this;
  }

  /**
   * Validates the specified pipeline definition to ensure that it is well formed and can be run without error.
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
    this.to('datapipeline:ValidatePipelineDefinition');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "ActivatePipeline",
      "CreatePipeline",
      "DeactivatePipeline",
      "DeletePipeline",
      "PollForTask",
      "PutAccountLimits",
      "PutPipelineDefinition",
      "ReportTaskProgress",
      "ReportTaskRunnerHeartbeat",
      "SetStatus",
      "SetTaskStatus"
    ],
    "Tagging": [
      "AddTags",
      "RemoveTags"
    ],
    "Read": [
      "DescribeObjects",
      "EvaluateExpression",
      "GetPipelineDefinition",
      "QueryObjects",
      "ValidatePipelineDefinition"
    ],
    "List": [
      "DescribePipelines",
      "GetAccountLimits",
      "ListPipelines"
    ]
  };

  /**
   * The IAM user that created the pipeline.
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifPipelineCreator(value: string | string[], operator?: Operator | string) {
    return this.if(`datapipeline:PipelineCreator`, value, operator || 'ArnLike');
  }

  /**
   * A customer-specified key/value pair that can be attached to a resource.
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifTag(value: string | string[], operator?: Operator | string) {
    return this.if(`datapipeline:Tag`, value, operator || 'ArnLike');
  }

  /**
   * The name of a worker group for which a Task Runner retrieves work.
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifWorkerGroup(value: string | string[], operator?: Operator | string) {
    return this.if(`datapipeline:workerGroup`, value, operator || 'ArnLike');
  }
}
