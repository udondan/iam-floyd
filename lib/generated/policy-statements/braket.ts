import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to accept the Amazon Braket user agreement
   *
   * Access Level: Write
   */
  public toAcceptUserAgreement() {
    return this.to('AcceptUserAgreement');
  }

  /**
   * Grants permission to check if an Amazon Braket feature is enabled for an account. Customers need this permission to use all features available in the console
   *
   * Access Level: Read
   */
  public toAccessBraketFeature() {
    return this.to('AccessBraketFeature');
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
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_GetJob.html
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
   * Grants permission to check if the Amazon Braket service linked role has been created
   *
   * Access Level: Read
   */
  public toGetServiceLinkedRoleStatus() {
    return this.to('GetServiceLinkedRoleStatus');
  }

  /**
   * Grants permission to check if the account has accepted the Amazon Braket user agreement
   *
   * Access Level: Read
   */
  public toGetUserAgreementStatus() {
    return this.to('GetUserAgreementStatus');
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
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchJobs.html
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
   * Grants permission to add one or more tags to a quantum task or a hybrid job
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
      'AcceptUserAgreement',
      'CancelJob',
      'CancelQuantumTask',
      'CreateJob',
      'CreateQuantumTask'
    ],
    Read: [
      'AccessBraketFeature',
      'GetDevice',
      'GetJob',
      'GetQuantumTask',
      'GetServiceLinkedRoleStatus',
      'GetUserAgreementStatus',
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQuantumTask(randomId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:braket:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:quantum-task/${ randomId }`);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/braket/latest/developerguide/braket-manage-access.html#resources
   *
   * @param jobName - Identifier for the jobName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJob(jobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:braket:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:job/${ jobName }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateJob()
   * - .toCreateQuantumTask()
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
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - quantum-task
   * - job
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
   * - .toCreateJob()
   * - .toCreateQuantumTask()
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
