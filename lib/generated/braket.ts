import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [braket](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbraket.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Braket extends PolicyStatement {
  public servicePrefix = 'braket';

  /**
   * Statement provider for service [braket](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbraket.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_CancelJob.html
   */
  public toCancelJob() {
    return this.to('CancelJob');
  }

  /**
   * Grants permission to cancel a quantum task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_CancelQuantumTask.html
   */
  public toCancelQuantumTask() {
    return this.to('CancelQuantumTask');
  }

  /**
   * Grants permission to create a job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_CreateJob.html
   */
  public toCreateJob() {
    return this.to('CreateJob');
  }

  /**
   * Grants permission to create a quantum task
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_CreateQuantumTask.html
   */
  public toCreateQuantumTask() {
    return this.to('CreateQuantumTask');
  }

  /**
   * Grants permission to retrieve information about the devices available in Amazon Braket
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_GetDevice.html
   */
  public toGetDevice() {
    return this.to('GetDevice');
  }

  /**
   * Grants permission to retrieve jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_Job.html
   */
  public toGetJob() {
    return this.to('GetJob');
  }

  /**
   * Grants permission to retrieve quantum tasks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_GetQuantumTask.html
   */
  public toGetQuantumTask() {
    return this.to('GetQuantumTask');
  }

  /**
   * Grants permission to listing the tags that have been applied to the quantum task resource or the job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to search for devices available in Amazon Braket
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchDevices.html
   */
  public toSearchDevices() {
    return this.to('SearchDevices');
  }

  /**
   * Grants permission to search for jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchJob.html
   */
  public toSearchJobs() {
    return this.to('SearchJobs');
  }

  /**
   * Grants permission to search for quantum tasks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchQuantumTasks.html
   */
  public toSearchQuantumTasks() {
    return this.to('SearchQuantumTasks');
  }

  /**
   * Grants permission to add one or more tags to a quantum task
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags from a quantum task resource or a job. A tag consists of a key-value pair
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelJob',
      'CancelQuantumTask',
      'CreateJob',
      'CreateQuantumTask'
    ],
    Read: [
      'GetDevice',
      'GetJob',
      'GetQuantumTask',
      'ListTagsForResource',
      'SearchDevices',
      'SearchJobs',
      'SearchQuantumTasks'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type quantum-task to the statement
   *
   * https://docs.aws.amazon.com/braket/latest/developerguide/braket-manage-access.html#resources
   *
   * @param randomId - Identifier for the randomId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQuantumTask(randomId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:braket:${ region || '*' }:${ account || '*' }:quantum-task/${ randomId }`);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/braket/latest/developerguide/braket-manage-access.html#resources
   *
   * @param jobName - Identifier for the jobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJob(jobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:braket:${ region || '*' }:${ account || '*' }:job/${ jobName }`);
  }
}
