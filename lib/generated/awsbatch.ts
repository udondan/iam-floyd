import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [batch](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Batch extends PolicyStatement {
  public servicePrefix = 'batch';

  /**
   * Statement provider for service [batch](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Cancels a job in an AWS Batch job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_CancelJob.html
   */
  public toCancelJob() {
    this.to('batch:CancelJob');
    return this;
  }

  /**
   * Creates an AWS Batch compute environment.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateComputeEnvironment.html
   */
  public toCreateComputeEnvironment() {
    this.to('batch:CreateComputeEnvironment');
    return this;
  }

  /**
   * Creates an AWS Batch job queue.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateJobQueue.html
   */
  public toCreateJobQueue() {
    this.to('batch:CreateJobQueue');
    return this;
  }

  /**
   * Deletes an AWS Batch compute environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteComputeEnvironment.html
   */
  public toDeleteComputeEnvironment() {
    this.to('batch:DeleteComputeEnvironment');
    return this;
  }

  /**
   * Deletes the specified job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteJobQueue.html
   */
  public toDeleteJobQueue() {
    this.to('batch:DeleteJobQueue');
    return this;
  }

  /**
   * Deregisters an AWS Batch job definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DeregisterJobDefinition.html
   */
  public toDeregisterJobDefinition() {
    this.to('batch:DeregisterJobDefinition');
    return this;
  }

  /**
   * Describes one or more of your compute environments.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeComputeEnvironments.html
   */
  public toDescribeComputeEnvironments() {
    this.to('batch:DescribeComputeEnvironments');
    return this;
  }

  /**
   * Describes a list of job definitions.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobDefinitions.html
   */
  public toDescribeJobDefinitions() {
    this.to('batch:DescribeJobDefinitions');
    return this;
  }

  /**
   * Describes one or more of your job queues.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobQueues.html
   */
  public toDescribeJobQueues() {
    this.to('batch:DescribeJobQueues');
    return this;
  }

  /**
   * Describes a list of AWS Batch jobs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobs.html
   */
  public toDescribeJobs() {
    this.to('batch:DescribeJobs');
    return this;
  }

  /**
   * Returns a list of task jobs for a specified job queue.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_ListJobs.html
   */
  public toListJobs() {
    this.to('batch:ListJobs');
    return this;
  }

  /**
   * List tags for the specified resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('batch:ListTagsForResource');
    return this;
  }

  /**
   * Registers an AWS Batch job definition.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUser()
   * - .ifPrivileged()
   * - .ifImage()
   * - .ifLogDriver()
   * - .ifAWSLogsGroup()
   * - .ifAWSLogsRegion()
   * - .ifAWSLogsStreamPrefix()
   * - .ifAWSLogsCreateGroup()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html
   */
  public toRegisterJobDefinition() {
    this.to('batch:RegisterJobDefinition');
    return this;
  }

  /**
   * Submits an AWS Batch job from a job definition.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html
   */
  public toSubmitJob() {
    this.to('batch:SubmitJob');
    return this;
  }

  /**
   * Tags the specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('batch:TagResource');
    return this;
  }

  /**
   * Terminates a job in an AWS Batch job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_TerminateJob.html
   */
  public toTerminateJob() {
    this.to('batch:TerminateJob');
    return this;
  }

  /**
   * Untags the specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('batch:UntagResource');
    return this;
  }

  /**
   * Updates an AWS Batch compute environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateComputeEnvironment.html
   */
  public toUpdateComputeEnvironment() {
    this.to('batch:UpdateComputeEnvironment');
    return this;
  }

  /**
   * Updates a job queue.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateJobQueue.html
   */
  public toUpdateJobQueue() {
    this.to('batch:UpdateJobQueue');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelJob",
      "CreateComputeEnvironment",
      "CreateJobQueue",
      "DeleteComputeEnvironment",
      "DeleteJobQueue",
      "DeregisterJobDefinition",
      "RegisterJobDefinition",
      "SubmitJob",
      "TerminateJob",
      "UpdateComputeEnvironment",
      "UpdateJobQueue"
    ],
    "Read": [
      "DescribeComputeEnvironments",
      "DescribeJobDefinitions",
      "DescribeJobQueues",
      "DescribeJobs"
    ],
    "List": [
      "ListJobs",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type compute-environment to the statement
   *
   * https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html
   *
   * @param computeEnvironmentName - Identifier for the computeEnvironmentName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComputeEnvironment(computeEnvironmentName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:batch:${Region}:${Account}:compute-environment/${ComputeEnvironmentName}';
    arn = arn.replace('${ComputeEnvironmentName}', computeEnvironmentName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type job-queue to the statement
   *
   * https://docs.aws.amazon.com/batch/latest/userguide/job_queues.html
   *
   * @param jobQueueName - Identifier for the jobQueueName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJobQueue(jobQueueName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:batch:${Region}:${Account}:job-queue/${JobQueueName}';
    arn = arn.replace('${JobQueueName}', jobQueueName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type job-definition to the statement
   *
   * https://docs.aws.amazon.com/batch/latest/userguide/job_definitions.html
   *
   * @param jobDefinitionName - Identifier for the jobDefinitionName.
   * @param revision - Identifier for the revision.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJobDefinition(jobDefinitionName: string, revision: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}';
    arn = arn.replace('${JobDefinitionName}', jobDefinitionName);
    arn = arn.replace('${Revision}', revision);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/batch/latest/userguide/jobs.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJob(jobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:batch:${Region}:${Account}:job/${JobId}';
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * When this parameter is true, the awslogs-group will be created for the logs.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAWSLogsCreateGroup(value?: boolean) {
    return this.if(`batch:AWSLogsCreateGroup`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * The awslogs group where the logs are located.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAWSLogsGroup(value: string | string[], operator?: Operator | string) {
    return this.if(`batch:AWSLogsGroup`, value, operator || 'StringLike');
  }

  /**
   * The region where the logs are sent to.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAWSLogsRegion(value: string | string[], operator?: Operator | string) {
    return this.if(`batch:AWSLogsRegion`, value, operator || 'StringLike');
  }

  /**
   * The awslogs log stream prefix.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAWSLogsStreamPrefix(value: string | string[], operator?: Operator | string) {
    return this.if(`batch:AWSLogsStreamPrefix`, value, operator || 'StringLike');
  }

  /**
   * The image used to start a container.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifImage(value: string | string[], operator?: Operator | string) {
    return this.if(`batch:Image`, value, operator || 'StringLike');
  }

  /**
   * The log driver used for the container.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLogDriver(value: string | string[], operator?: Operator | string) {
    return this.if(`batch:LogDriver`, value, operator || 'StringLike');
  }

  /**
   * When this parameter is true, the container is given elevated privileges on the host container instance (similar to the root user).
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifPrivileged(value?: boolean) {
    return this.if(`batch:Privileged`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * The user name or numeric uid to use inside the container.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUser(value: string | string[], operator?: Operator | string) {
    return this.if(`batch:User`, value, operator || 'StringLike');
  }
}
