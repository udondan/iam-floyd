import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [codepipeline](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodepipeline.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codepipeline extends PolicyStatement {
  public servicePrefix = 'codepipeline';

  /**
   * Statement provider for service [codepipeline](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodepipeline.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to view information about a specified job and whether that job has been received by the job worker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_AcknowledgeJob.html
   */
  public toAcknowledgeJob() {
    return this.to('AcknowledgeJob');
  }

  /**
   * Grants permission to confirm that a job worker has received the specified job (partner actions only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_AcknowledgeThirdPartyJob.html
   */
  public toAcknowledgeThirdPartyJob() {
    return this.to('AcknowledgeThirdPartyJob');
  }

  /**
   * Grants permission to create a custom action that you can use in the pipelines associated with your AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_CreateCustomActionType.html
   */
  public toCreateCustomActionType() {
    return this.to('CreateCustomActionType');
  }

  /**
   * Grants permission to create a uniquely named pipeline
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_CreatePipeline.html
   */
  public toCreatePipeline() {
    return this.to('CreatePipeline');
  }

  /**
   * Grants permission to delete a custom action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeleteCustomActionType.html
   */
  public toDeleteCustomActionType() {
    return this.to('DeleteCustomActionType');
  }

  /**
   * Grants permission to delete a specified pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeletePipeline.html
   */
  public toDeletePipeline() {
    return this.to('DeletePipeline');
  }

  /**
   * Grants permission to delete a specified webhook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeleteWebhook.html
   */
  public toDeleteWebhook() {
    return this.to('DeleteWebhook');
  }

  /**
   * Grants permission to remove the registration of a webhook with the third party specified in its configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeregisterWebhookWithThirdParty.html
   */
  public toDeregisterWebhookWithThirdParty() {
    return this.to('DeregisterWebhookWithThirdParty');
  }

  /**
   * Grants permission to prevent revisions from transitioning to the next stage in a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DisableStageTransition.html
   */
  public toDisableStageTransition() {
    return this.to('DisableStageTransition');
  }

  /**
   * Grants permission to allow revisions to transition to the next stage in a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_EnableStageTransition.html
   */
  public toEnableStageTransition() {
    return this.to('EnableStageTransition');
  }

  /**
   * Grants permission to view information about an action type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetActionType.html
   */
  public toGetActionType() {
    return this.to('GetActionType');
  }

  /**
   * Grants permission to view information about a job (custom actions only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetJobDetails.html
   */
  public toGetJobDetails() {
    return this.to('GetJobDetails');
  }

  /**
   * Grants permission to retrieve information about a pipeline structure
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipeline.html
   */
  public toGetPipeline() {
    return this.to('GetPipeline');
  }

  /**
   * Grants permission to view information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipelineExecution.html
   */
  public toGetPipelineExecution() {
    return this.to('GetPipelineExecution');
  }

  /**
   * Grants permission to view information about the current state of the stages and actions of a pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipelineState.html
   */
  public toGetPipelineState() {
    return this.to('GetPipelineState');
  }

  /**
   * Grants permission to view the details of a job for a third-party action (partner actions only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetThirdPartyJobDetails.html
   */
  public toGetThirdPartyJobDetails() {
    return this.to('GetThirdPartyJobDetails');
  }

  /**
   * Grants permission to list the action executions that have occurred in a pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListActionExecutions.html
   */
  public toListActionExecutions() {
    return this.to('ListActionExecutions');
  }

  /**
   * Grants permission to list a summary of all the action types available for pipelines in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListActionTypes.html
   */
  public toListActionTypes() {
    return this.to('ListActionTypes');
  }

  /**
   * Grants permission to list a summary of the most recent executions for a pipeline
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListPipelineExecutions.html
   */
  public toListPipelineExecutions() {
    return this.to('ListPipelineExecutions');
  }

  /**
   * Grants permission to list a summary of all the pipelines associated with your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListPipelines.html
   */
  public toListPipelines() {
    return this.to('ListPipelines');
  }

  /**
   * Grants permission to list tags for a CodePipeline resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all of the webhooks associated with your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListWebhooks.html
   */
  public toListWebhooks() {
    return this.to('ListWebhooks');
  }

  /**
   * Grants permission to view information about any jobs for CodePipeline to act on
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PollForJobs.html
   */
  public toPollForJobs() {
    return this.to('PollForJobs');
  }

  /**
   * Grants permission to determine whether there are any third-party jobs for a job worker to act on (partner actions only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PollForThirdPartyJobs.html
   */
  public toPollForThirdPartyJobs() {
    return this.to('PollForThirdPartyJobs');
  }

  /**
   * Grants permission to edit actions in a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutActionRevision.html
   */
  public toPutActionRevision() {
    return this.to('PutActionRevision');
  }

  /**
   * Grants permission to provide a response (Approved or Rejected) to a manual approval request in CodePipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutApprovalResult.html
   */
  public toPutApprovalResult() {
    return this.to('PutApprovalResult');
  }

  /**
   * Grants permission to represent the failure of a job as returned to the pipeline by a job worker (custom actions only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutJobFailureResult.html
   */
  public toPutJobFailureResult() {
    return this.to('PutJobFailureResult');
  }

  /**
   * Grants permission to represent the success of a job as returned to the pipeline by a job worker (custom actions only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutJobSuccessResult.html
   */
  public toPutJobSuccessResult() {
    return this.to('PutJobSuccessResult');
  }

  /**
   * Grants permission to represent the failure of a third-party job as returned to the pipeline by a job worker (partner actions only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutThirdPartyJobFailureResult.html
   */
  public toPutThirdPartyJobFailureResult() {
    return this.to('PutThirdPartyJobFailureResult');
  }

  /**
   * Grants permission to represent the success of a third-party job as returned to the pipeline by a job worker (partner actions only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutThirdPartyJobSuccessResult.html
   */
  public toPutThirdPartyJobSuccessResult() {
    return this.to('PutThirdPartyJobSuccessResult');
  }

  /**
   * Grants permission to create or update a webhook
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutWebhook.html
   */
  public toPutWebhook() {
    return this.to('PutWebhook');
  }

  /**
   * Grants permission to register a webhook with the third party specified in its configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_RegisterWebhookWithThirdParty.html
   */
  public toRegisterWebhookWithThirdParty() {
    return this.to('RegisterWebhookWithThirdParty');
  }

  /**
   * Grants permission to resume the pipeline execution by retrying the last failed actions in a stage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_RetryStageExecution.html
   */
  public toRetryStageExecution() {
    return this.to('RetryStageExecution');
  }

  /**
   * Grants permission to run the most recent revision through the pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_StartPipelineExecution.html
   */
  public toStartPipelineExecution() {
    return this.to('StartPipelineExecution');
  }

  /**
   * Grants permission to stop an in-progress pipeline execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_StopPipelineExecution.html
   */
  public toStopPipelineExecution() {
    return this.to('StopPipelineExecution');
  }

  /**
   * Grants permission to tag a CodePipeline resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from a CodePipeline resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an action type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UpdateActionType.html
   */
  public toUpdateActionType() {
    return this.to('UpdateActionType');
  }

  /**
   * Grants permission to update a pipeline with changes to the structure of the pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UpdatePipeline.html
   */
  public toUpdatePipeline() {
    return this.to('UpdatePipeline');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcknowledgeJob",
      "AcknowledgeThirdPartyJob",
      "CreateCustomActionType",
      "CreatePipeline",
      "DeleteCustomActionType",
      "DeletePipeline",
      "DeleteWebhook",
      "DeregisterWebhookWithThirdParty",
      "DisableStageTransition",
      "EnableStageTransition",
      "PollForJobs",
      "PollForThirdPartyJobs",
      "PutActionRevision",
      "PutApprovalResult",
      "PutJobFailureResult",
      "PutJobSuccessResult",
      "PutThirdPartyJobFailureResult",
      "PutThirdPartyJobSuccessResult",
      "PutWebhook",
      "RegisterWebhookWithThirdParty",
      "RetryStageExecution",
      "StartPipelineExecution",
      "StopPipelineExecution",
      "UpdateActionType",
      "UpdatePipeline"
    ],
    "Read": [
      "GetActionType",
      "GetJobDetails",
      "GetPipeline",
      "GetPipelineExecution",
      "GetPipelineState",
      "GetThirdPartyJobDetails",
      "ListActionExecutions",
      "ListActionTypes",
      "ListTagsForResource"
    ],
    "List": [
      "ListPipelineExecutions",
      "ListPipelines",
      "ListWebhooks"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type action to the statement
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   *
   * @param pipelineName - Identifier for the pipelineName.
   * @param stageName - Identifier for the stageName.
   * @param actionName - Identifier for the actionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAction(pipelineName: string, stageName: string, actionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:codepipeline:${ region || '*' }:${ account || '*' }:${ pipelineName }/${ stageName }/${ actionName }`);
  }

  /**
   * Adds a resource of type actiontype to the statement
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   *
   * @param owner - Identifier for the owner.
   * @param category - Identifier for the category.
   * @param provider - Identifier for the provider.
   * @param version - Identifier for the version.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onActiontype(owner: string, category: string, provider: string, version: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:codepipeline:${ region || '*' }:${ account || '*' }:actiontype:${ owner }/${ category }/${ provider }/${ version }`);
  }

  /**
   * Adds a resource of type pipeline to the statement
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   *
   * @param pipelineName - Identifier for the pipelineName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPipeline(pipelineName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:codepipeline:${ region || '*' }:${ account || '*' }:${ pipelineName }`);
  }

  /**
   * Adds a resource of type stage to the statement
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   *
   * @param pipelineName - Identifier for the pipelineName.
   * @param stageName - Identifier for the stageName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStage(pipelineName: string, stageName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:codepipeline:${ region || '*' }:${ account || '*' }:${ pipelineName }/${ stageName }`);
  }

  /**
   * Adds a resource of type webhook to the statement
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   *
   * @param webhookName - Identifier for the webhookName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWebhook(webhookName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:codepipeline:${ region || '*' }:${ account || '*' }:webhook:${ webhookName }`);
  }
}
