import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [airflow-serverless](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmwaaserverless.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AirflowServerless extends PolicyStatement {
  public servicePrefix = 'airflow-serverless';

  /**
   * Statement provider for service [airflow-serverless](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmwaaserverless.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new workflow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_CreateWorkflow.html
   */
  public toCreateWorkflow() {
    return this.to('CreateWorkflow');
  }

  /**
   * Grants permission to delete a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_DeleteWorkflow.html
   */
  public toDeleteWorkflow() {
    return this.to('DeleteWorkflow');
  }

  /**
   * Grants permission to retrieve the task details for a workflow run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_GetTaskInstance.html
   */
  public toGetTaskInstance() {
    return this.to('GetTaskInstance');
  }

  /**
   * Grants permission to retrieve details about a workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_GetWorkflow.html
   */
  public toGetWorkflow() {
    return this.to('GetWorkflow');
  }

  /**
   * Grants permission to retrieve details about a workflow run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_GetWorkflowRun.html
   */
  public toGetWorkflowRun() {
    return this.to('GetWorkflowRun');
  }

  /**
   * Grants permission to list the tags for the specified resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the tasks for a workflow run
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_ListTaskInstances.html
   */
  public toListTaskInstances() {
    return this.to('ListTaskInstances');
  }

  /**
   * Grants permission to list the workflow runs of a workflow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_ListWorkflowRuns.html
   */
  public toListWorkflowRuns() {
    return this.to('ListWorkflowRuns');
  }

  /**
   * Grants permission to list the workflow versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_ListWorkflowVersions.html
   */
  public toListWorkflowVersions() {
    return this.to('ListWorkflowVersions');
  }

  /**
   * Grants permission to list the workflows
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_ListWorkflows.html
   */
  public toListWorkflows() {
    return this.to('ListWorkflows');
  }

  /**
   * Grants permission to start an on-demand workflow run for the workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_StartWorkflowRun.html
   */
  public toStartWorkflowRun() {
    return this.to('StartWorkflowRun');
  }

  /**
   * Grants permission to stop a workflow run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_StopWorkflowRun.html
   */
  public toStopWorkflowRun() {
    return this.to('StopWorkflowRun');
  }

  /**
   * Grants permission to tag the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mwaa-serverless/latest/APIReference/API_UpdateWorkflow.html
   */
  public toUpdateWorkflow() {
    return this.to('UpdateWorkflow');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateWorkflow',
      'DeleteWorkflow',
      'StartWorkflowRun',
      'StopWorkflowRun',
      'UpdateWorkflow'
    ],
    Read: [
      'GetTaskInstance',
      'GetWorkflow',
      'GetWorkflowRun',
      'ListTagsForResource'
    ],
    List: [
      'ListTaskInstances',
      'ListWorkflowRuns',
      'ListWorkflowVersions',
      'ListWorkflows'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Workflow to the statement
   *
   * https://docs.aws.amazon.com/mwaa/latest/mwaa-serverless-userguide/workflows.html
   *
   * @param workflowId - Identifier for the workflowId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkflow(workflowId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:airflow-serverless:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workflow/${ workflowId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateWorkflow()
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
   * Filters access by tag key-value pairs that are attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - Workflow
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateWorkflow()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
