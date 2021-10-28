import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [batch](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Batch extends PolicyStatement {
  public servicePrefix = 'batch';

  /**
   * Statement provider for service [batch](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a job in an AWS Batch job queue in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_CancelJob.html
   */
  public toCancelJob() {
    return this.to('CancelJob');
  }

  /**
   * Grants permission to create an AWS Batch compute environment in your account
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
    return this.to('CreateComputeEnvironment');
  }

  /**
   * Grants permission to create an AWS Batch job queue in your account
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
    return this.to('CreateJobQueue');
  }

  /**
   * Grants permission to delete an AWS Batch compute environment in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteComputeEnvironment.html
   */
  public toDeleteComputeEnvironment() {
    return this.to('DeleteComputeEnvironment');
  }

  /**
   * Grants permission to delete an AWS Batch job queue in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteJobQueue.html
   */
  public toDeleteJobQueue() {
    return this.to('DeleteJobQueue');
  }

  /**
   * Grants permission to deregister an AWS Batch job definition in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DeregisterJobDefinition.html
   */
  public toDeregisterJobDefinition() {
    return this.to('DeregisterJobDefinition');
  }

  /**
   * Grants permission to describe one or more AWS Batch compute environments in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeComputeEnvironments.html
   */
  public toDescribeComputeEnvironments() {
    return this.to('DescribeComputeEnvironments');
  }

  /**
   * Grants permission to describe one or more AWS Batch job definitions in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobDefinitions.html
   */
  public toDescribeJobDefinitions() {
    return this.to('DescribeJobDefinitions');
  }

  /**
   * Grants permission to describe one or more AWS Batch job queues in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobQueues.html
   */
  public toDescribeJobQueues() {
    return this.to('DescribeJobQueues');
  }

  /**
   * Grants permission to describe a list of AWS Batch jobs in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobs.html
   */
  public toDescribeJobs() {
    return this.to('DescribeJobs');
  }

  /**
   * Grants permission to list jobs for a specified AWS Batch job queue in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_ListJobs.html
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * Grants permission to list tags for an AWS Batch resource in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to register an AWS Batch job definition in your account
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
    return this.to('RegisterJobDefinition');
  }

  /**
   * Grants permission to submit an AWS Batch job from a job definition in your account
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
    return this.to('SubmitJob');
  }

  /**
   * Grants permission to tag an AWS Batch resource in your account
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
    return this.to('TagResource');
  }

  /**
   * Grants permission to terminate a job in an AWS Batch job queue in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_TerminateJob.html
   */
  public toTerminateJob() {
    return this.to('TerminateJob');
  }

  /**
   * Grants permission to untag an AWS Batch resource in your account
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an AWS Batch compute environment in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateComputeEnvironment.html
   */
  public toUpdateComputeEnvironment() {
    return this.to('UpdateComputeEnvironment');
  }

  /**
   * Grants permission to update an AWS Batch job queue in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateJobQueue.html
   */
  public toUpdateJobQueue() {
    return this.to('UpdateJobQueue');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelJob',
      'CreateComputeEnvironment',
      'CreateJobQueue',
      'DeleteComputeEnvironment',
      'DeleteJobQueue',
      'DeregisterJobDefinition',
      'RegisterJobDefinition',
      'SubmitJob',
      'TerminateJob',
      'UpdateComputeEnvironment',
      'UpdateJobQueue'
    ],
    Read: [
      'DescribeComputeEnvironments',
      'DescribeJobDefinitions',
      'DescribeJobQueues',
      'DescribeJobs',
      'ListTagsForResource'
    ],
    List: [
      'ListJobs'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
    return this.on(`arn:${ partition || 'aws' }:batch:${ region || '*' }:${ account || '*' }:compute-environment/${ computeEnvironmentName }`);
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
    return this.on(`arn:${ partition || 'aws' }:batch:${ region || '*' }:${ account || '*' }:job-queue/${ jobQueueName }`);
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
    return this.on(`arn:${ partition || 'aws' }:batch:${ region || '*' }:${ account || '*' }:job-definition/${ jobDefinitionName }:${ revision }`);
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
    return this.on(`arn:${ partition || 'aws' }:batch:${ region || '*' }:${ account || '*' }:job/${ jobId }`);
  }

  /**
   * Filters access based on the specified logging driver to determine whether awslogs group will be created for the logs
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAWSLogsCreateGroup(value?: boolean) {
    return this.if(`AWSLogsCreateGroup`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access based on the awslogs group where the logs are located
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
    return this.if(`AWSLogsGroup`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the region where the logs are sent to
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
    return this.if(`AWSLogsRegion`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the awslogs log stream prefix
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
    return this.if(`AWSLogsStreamPrefix`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the image used to start a container
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
    return this.if(`Image`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the log driver used for the container
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
    return this.if(`LogDriver`, value, operator || 'StringLike');
  }

  /**
   * Filter access based on the specified privileged parameter value that determines whether the container is given elevated privileges on the host container instance (similar to the root user)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html#awsbatch-policy-keys
   *
   * Applies to actions:
   * - .toRegisterJobDefinition()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifPrivileged(value?: boolean) {
    return this.if(`Privileged`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access based on the user name or numeric uid used inside the container
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
    return this.if(`User`, value, operator || 'StringLike');
  }
}
