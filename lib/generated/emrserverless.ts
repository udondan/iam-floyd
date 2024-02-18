import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [emr-serverless](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemrserverless.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class EmrServerless extends PolicyStatement {
  public servicePrefix = 'emr-serverless';

  /**
   * Statement provider for service [emr-serverless](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemrserverless.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to execute interactive workloads on an application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/interactive-workloads.html
   */
  public toAccessInteractiveEndpoints() {
    return this.to('AccessInteractiveEndpoints');
  }

  /**
   * Grants permission to cancel a job run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_CancelJobRun.html
   */
  public toCancelJobRun() {
    return this.to('CancelJobRun');
  }

  /**
   * Grants permission to create an Application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to get application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_GetApplication.html
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Grants permission to get job run dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_GetDashboardForJobRun.html
   */
  public toGetDashboardForJobRun() {
    return this.to('GetDashboardForJobRun');
  }

  /**
   * Grants permission to get a job run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_GetJobRun.html
   */
  public toGetJobRun() {
    return this.to('GetJobRun');
  }

  /**
   * Grants permission to list applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list job runs associated with an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_ListJobRuns.html
   */
  public toListJobRuns() {
    return this.to('ListJobRuns');
  }

  /**
   * Grants permission to list tags for the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to Start an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartApplication.html
   */
  public toStartApplication() {
    return this.to('StartApplication');
  }

  /**
   * Grants permission to start a job run
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html
   */
  public toStartJobRun() {
    return this.to('StartJobRun');
  }

  /**
   * Grants permission to Stop an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StopApplication.html
   */
  public toStopApplication() {
    return this.to('StopApplication');
  }

  /**
   * Grants permission to tag the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_TagResource.html
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
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to Update an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AccessInteractiveEndpoints',
      'CancelJobRun',
      'CreateApplication',
      'DeleteApplication',
      'StartApplication',
      'StartJobRun',
      'StopApplication',
      'UpdateApplication'
    ],
    Read: [
      'GetApplication',
      'GetDashboardForJobRun',
      'GetJobRun',
      'ListTagsForResource'
    ],
    List: [
      'ListApplications',
      'ListJobRuns'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/emr-serverless.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:emr-serverless:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/applications/${ applicationId }`);
  }

  /**
   * Adds a resource of type jobRun to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/emr-serverless.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param jobRunId - Identifier for the jobRunId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJobRun(applicationId: string, jobRunId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:emr-serverless:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/applications/${ applicationId }/jobruns/${ jobRunId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toStartJobRun()
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
   * - application
   * - jobRun
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
   * - .toCreateApplication()
   * - .toStartJobRun()
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
