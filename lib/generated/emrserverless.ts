import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [emr-serverless](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemrserverless.html).
 *
 * @param options - Options for the statement
 */
export class EmrServerless extends PolicyStatement {
  public servicePrefix = 'emr-serverless';

  /**
   * Statement provider for service [emr-serverless](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemrserverless.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:emr-serverless:${ region || '*' }:${ account || '*' }:/applications/${ applicationId }`);
  }

  /**
   * Adds a resource of type jobRun to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/emr-serverless.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param jobRunId - Identifier for the jobRunId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJobRun(applicationId: string, jobRunId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:emr-serverless:${ region || '*' }:${ account || '*' }:/applications/${ applicationId }/jobruns/${ jobRunId }`);
  }
}
