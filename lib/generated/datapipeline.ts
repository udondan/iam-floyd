import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [datapipeline](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_datapipeline.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Datapipeline extends PolicyStatement {
  public servicePrefix = 'datapipeline';
  protected actionList: Actions = {
    "ActivatePipeline": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ActivatePipeline.html",
      "description": "Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails.",
      "accessLevel": "Write",
      "conditions": [
        "datapipeline:PipelineCreator",
        "datapipeline:Tag",
        "datapipeline:workerGroup"
      ]
    },
    "AddTags": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_AddTags.html",
      "description": "Adds or modifies tags for the specified pipeline.",
      "accessLevel": "Tagging",
      "conditions": [
        "datapipeline:PipelineCreator",
        "datapipeline:Tag"
      ]
    },
    "CreatePipeline": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_CreatePipeline.html",
      "description": "Creates a new, empty pipeline.",
      "accessLevel": "Write",
      "conditions": [
        "datapipeline:Tag"
      ]
    },
    "DeactivatePipeline": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DeactivatePipeline.html",
      "description": "Deactivates the specified running pipeline.",
      "accessLevel": "Write",
      "conditions": [
        "datapipeline:PipelineCreator",
        "datapipeline:Tag",
        "datapipeline:workerGroup"
      ]
    },
    "DeletePipeline": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DeletePipeline.html",
      "description": "Deletes a pipeline, its pipeline definition, and its run history.",
      "accessLevel": "Write",
      "conditions": [
        "datapipeline:PipelineCreator",
        "datapipeline:Tag"
      ]
    },
    "DescribeObjects": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DescribeObjects.html",
      "description": "Gets the object definitions for a set of objects associated with the pipeline.",
      "accessLevel": "Read",
      "conditions": [
        "datapipeline:PipelineCreator",
        "datapipeline:Tag"
      ]
    },
    "DescribePipelines": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DescribePipelines.html",
      "description": "Retrieves metadata about one or more pipelines.",
      "accessLevel": "List",
      "conditions": [
        "datapipeline:PipelineCreator",
        "datapipeline:Tag"
      ]
    },
    "EvaluateExpression": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_EvaluateExpression.html",
      "description": "Task runners call EvaluateExpression to evaluate a string in the context of the specified object.",
      "accessLevel": "Read",
      "conditions": [
        "datapipeline:PipelineCreator",
        "datapipeline:Tag"
      ]
    },
    "GetAccountLimits": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_GetAccountLimits.html",
      "description": "Description for GetAccountLimits",
      "accessLevel": "List"
    },
    "GetPipelineDefinition": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_GetPipelineDefinition.html",
      "description": "Gets the definition of the specified pipeline.",
      "accessLevel": "Read",
      "conditions": [
        "datapipeline:PipelineCreator",
        "datapipeline:Tag",
        "datapipeline:workerGroup"
      ]
    },
    "ListPipelines": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ListPipelines.html",
      "description": "Lists the pipeline identifiers for all active pipelines that you have permission to access.",
      "accessLevel": "List"
    },
    "PollForTask": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PollForTask.html",
      "description": "Task runners call PollForTask to receive a task to perform from AWS Data Pipeline.",
      "accessLevel": "Write",
      "conditions": [
        "datapipeline:workerGroup"
      ]
    },
    "PutAccountLimits": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PutAccountLimits.html",
      "description": "Description for PutAccountLimits",
      "accessLevel": "Write"
    },
    "PutPipelineDefinition": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PutPipelineDefinition.html",
      "description": "Adds tasks, schedules, and preconditions to the specified pipeline.",
      "accessLevel": "Write",
      "conditions": [
        "datapipeline:PipelineCreator",
        "datapipeline:Tag",
        "datapipeline:workerGroup"
      ]
    },
    "QueryObjects": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_QueryObjects.html",
      "description": "Queries the specified pipeline for the names of objects that match the specified set of conditions.",
      "accessLevel": "Read",
      "conditions": [
        "datapipeline:PipelineCreator",
        "datapipeline:Tag"
      ]
    },
    "RemoveTags": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_RemoveTags.html",
      "description": "Removes existing tags from the specified pipeline.",
      "accessLevel": "Tagging",
      "conditions": [
        "datapipeline:PipelineCreator",
        "datapipeline:Tag"
      ]
    },
    "ReportTaskProgress": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ReportTaskProgress.html",
      "description": "Task runners call ReportTaskProgress when assigned a task to acknowledge that it has the task.",
      "accessLevel": "Write"
    },
    "ReportTaskRunnerHeartbeat": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ReportTaskRunnerHeartbeat.html",
      "description": "Task runners call ReportTaskRunnerHeartbeat every 15 minutes to indicate that they are operational.",
      "accessLevel": "Write"
    },
    "SetStatus": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_SetStatus.html",
      "description": "Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline.",
      "accessLevel": "Write",
      "conditions": [
        "datapipeline:PipelineCreator",
        "datapipeline:Tag"
      ]
    },
    "SetTaskStatus": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_SetTaskStatus.html",
      "description": "Task runners call SetTaskStatus to notify AWS Data Pipeline that a task is completed and provide information about the final status.",
      "accessLevel": "Write"
    },
    "ValidatePipelineDefinition": {
      "url": "https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ValidatePipelineDefinition.html",
      "description": "Validates the specified pipeline definition to ensure that it is well formed and can be run without error.",
      "accessLevel": "Read",
      "conditions": [
        "datapipeline:PipelineCreator",
        "datapipeline:Tag",
        "datapipeline:workerGroup"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {};

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
    this.add('datapipeline:ActivatePipeline');
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
    this.add('datapipeline:AddTags');
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
    this.add('datapipeline:CreatePipeline');
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
    this.add('datapipeline:DeactivatePipeline');
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
    this.add('datapipeline:DeletePipeline');
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
    this.add('datapipeline:DescribeObjects');
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
    this.add('datapipeline:DescribePipelines');
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
    this.add('datapipeline:EvaluateExpression');
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
    this.add('datapipeline:GetAccountLimits');
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
    this.add('datapipeline:GetPipelineDefinition');
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
    this.add('datapipeline:ListPipelines');
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
    this.add('datapipeline:PollForTask');
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
    this.add('datapipeline:PutAccountLimits');
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
    this.add('datapipeline:PutPipelineDefinition');
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
    this.add('datapipeline:QueryObjects');
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
    this.add('datapipeline:RemoveTags');
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
    this.add('datapipeline:ReportTaskProgress');
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
    this.add('datapipeline:ReportTaskRunnerHeartbeat');
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
    this.add('datapipeline:SetStatus');
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
    this.add('datapipeline:SetTaskStatus');
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
    this.add('datapipeline:ValidatePipelineDefinition');
    return this;
  }

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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifPipelineCreator(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`datapipeline:PipelineCreator`, value, operator || 'ArnEquals');
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifTag(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`datapipeline:Tag`, value, operator || 'ArnEquals');
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifWorkerGroup(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`datapipeline:workerGroup`, value, operator || 'ArnEquals');
  }
}
