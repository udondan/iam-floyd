import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [codebuild](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodebuild.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codebuild extends PolicyStatement {
  public servicePrefix = 'codebuild';

  /**
   * Statement provider for service [codebuild](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodebuild.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to delete one or more builds
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchDeleteBuilds.html
   */
  public toBatchDeleteBuilds() {
    return this.to('BatchDeleteBuilds');
  }

  /**
   * Grants permission to get information about one or more build batches
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetBuildBatches.html
   */
  public toBatchGetBuildBatches() {
    return this.to('BatchGetBuildBatches');
  }

  /**
   * Grants permission to get information about one or more builds
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetBuilds.html
   */
  public toBatchGetBuilds() {
    return this.to('BatchGetBuilds');
  }

  /**
   * Grants permission to get information about one or more build projects
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetProjects.html
   */
  public toBatchGetProjects() {
    return this.to('BatchGetProjects');
  }

  /**
   * Grants permission to return an array of ReportGroup objects that are specified by the input reportGroupArns parameter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetReportGroups.html
   */
  public toBatchGetReportGroups() {
    return this.to('BatchGetReportGroups');
  }

  /**
   * Grants permission to return an array of the Report objects specified by the input reportArns parameter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetReports.html
   */
  public toBatchGetReports() {
    return this.to('BatchGetReports');
  }

  /**
   * Grants permission to add or update information about a report
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toBatchPutCodeCoverages() {
    return this.to('BatchPutCodeCoverages');
  }

  /**
   * Grants permission to add or update information about a report
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toBatchPutTestCases() {
    return this.to('BatchPutTestCases');
  }

  /**
   * Grants permission to create a build project
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateProject.html
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to create a report. A report is created when tests specified in the buildspec file for a report groups run during the build of a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toCreateReport() {
    return this.to('CreateReport');
  }

  /**
   * Grants permission to create a report group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateReportGroup.html
   */
  public toCreateReportGroup() {
    return this.to('CreateReportGroup');
  }

  /**
   * Grants permission to create webhook. For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a code change is pushed to the repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateWebhook.html
   */
  public toCreateWebhook() {
    return this.to('CreateWebhook');
  }

  /**
   * Grants permission to delete a build batch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteBuildBatch.html
   */
  public toDeleteBuildBatch() {
    return this.to('DeleteBuildBatch');
  }

  /**
   * Grants permission to delete an OAuth token from a connected third-party OAuth provider. Only used in the AWS CodeBuild console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toDeleteOAuthToken() {
    return this.to('DeleteOAuthToken');
  }

  /**
   * Grants permission to delete a build project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to delete a report
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html
   */
  public toDeleteReport() {
    return this.to('DeleteReport');
  }

  /**
   * Grants permission to delete a report group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReportGroup.html
   */
  public toDeleteReportGroup() {
    return this.to('DeleteReportGroup');
  }

  /**
   * Grants permission to delete a resource policy for the associated project or report group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a set of GitHub, GitHub Enterprise, or Bitbucket source credentials
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteSourceCredentials.html
   */
  public toDeleteSourceCredentials() {
    return this.to('DeleteSourceCredentials');
  }

  /**
   * Grants permission to delete webhook. For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code change is pushed to the repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteWebhook.html
   */
  public toDeleteWebhook() {
    return this.to('DeleteWebhook');
  }

  /**
   * Grants permission to return an array of CodeCoverage objects
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DescribeCodeCoverages.html
   */
  public toDescribeCodeCoverages() {
    return this.to('DescribeCodeCoverages');
  }

  /**
   * Grants permission to return an array of TestCase objects
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DescribeTestCases.html
   */
  public toDescribeTestCases() {
    return this.to('DescribeTestCases');
  }

  /**
   * Grants permission to analyze and accumulate test report values for the test reports in the specified report group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_GetReportGroupTrend.html
   */
  public toGetReportGroupTrend() {
    return this.to('GetReportGroupTrend');
  }

  /**
   * Grants permission to return a resource policy for the specified project or report group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to import the source repository credentials for an AWS CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ImportSourceCredentials.html
   */
  public toImportSourceCredentials() {
    return this.to('ImportSourceCredentials');
  }

  /**
   * Grants permission to reset the cache for a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_InvalidateProjectCache.html
   */
  public toInvalidateProjectCache() {
    return this.to('InvalidateProjectCache');
  }

  /**
   * Grants permission to get a list of build batch IDs, with each build batch ID representing a single build batch
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildBatches.html
   */
  public toListBuildBatches() {
    return this.to('ListBuildBatches');
  }

  /**
   * Grants permission to get a list of build batch IDs for the specified build project, with each build batch ID representing a single build batch
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildBatchesForProject.html
   */
  public toListBuildBatchesForProject() {
    return this.to('ListBuildBatchesForProject');
  }

  /**
   * Grants permission to get a list of build IDs, with each build ID representing a single build
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuilds.html
   */
  public toListBuilds() {
    return this.to('ListBuilds');
  }

  /**
   * Grants permission to get a list of build IDs for the specified build project, with each build ID representing a single build
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildsForProject.html
   */
  public toListBuildsForProject() {
    return this.to('ListBuildsForProject');
  }

  /**
   * Grants permission to list connected third-party OAuth providers. Only used in the AWS CodeBuild console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toListConnectedOAuthAccounts() {
    return this.to('ListConnectedOAuthAccounts');
  }

  /**
   * Grants permission to get information about Docker images that are managed by AWS CodeBuild
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListCuratedEnvironmentImages.html
   */
  public toListCuratedEnvironmentImages() {
    return this.to('ListCuratedEnvironmentImages');
  }

  /**
   * Grants permission to get a list of build project names, with each build project name representing a single build project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListProjects.html
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grants permission to return a list of report group ARNs. Each report group ARN represents one report group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportGroups.html
   */
  public toListReportGroups() {
    return this.to('ListReportGroups');
  }

  /**
   * Grants permission to return a list of report ARNs. Each report ARN representing one report
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReports.html
   */
  public toListReports() {
    return this.to('ListReports');
  }

  /**
   * Grants permission to return a list of report ARNs that belong to the specified report group. Each report ARN represents one report
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html
   */
  public toListReportsForReportGroup() {
    return this.to('ListReportsForReportGroup');
  }

  /**
   * Grants permission to list source code repositories from a connected third-party OAuth provider. Only used in the AWS CodeBuild console
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toListRepositories() {
    return this.to('ListRepositories');
  }

  /**
   * Grants permission to return a list of project ARNs that have been shared with the requester. Each project ARN represents one project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSharedProjects.html
   */
  public toListSharedProjects() {
    return this.to('ListSharedProjects');
  }

  /**
   * Grants permission to return a list of report group ARNs that have been shared with the requester. Each report group ARN represents one report group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSharedReportGroups.html
   */
  public toListSharedReportGroups() {
    return this.to('ListSharedReportGroups');
  }

  /**
   * Grants permission to return a list of SourceCredentialsInfo objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSourceCredentials.html
   */
  public toListSourceCredentials() {
    return this.to('ListSourceCredentials');
  }

  /**
   * Grants permission to save an OAuth token from a connected third-party OAuth provider. Only used in the AWS CodeBuild console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toPersistOAuthToken() {
    return this.to('PersistOAuthToken');
  }

  /**
   * Grants permission to create a resource policy for the associated project or report group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to retry a build
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_RetryBuild.html
   */
  public toRetryBuild() {
    return this.to('RetryBuild');
  }

  /**
   * Grants permission to retry a build batch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_RetryBuildBatch.html
   */
  public toRetryBuildBatch() {
    return this.to('RetryBuildBatch');
  }

  /**
   * Grants permission to start running a build
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuild.html
   */
  public toStartBuild() {
    return this.to('StartBuild');
  }

  /**
   * Grants permission to start running a build batch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuildBatch.html
   */
  public toStartBuildBatch() {
    return this.to('StartBuildBatch');
  }

  /**
   * Grants permission to attempt to stop running a build
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StopBuild.html
   */
  public toStopBuild() {
    return this.to('StopBuild');
  }

  /**
   * Grants permission to attempt to stop running a build batch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StopBuildBatch.html
   */
  public toStopBuildBatch() {
    return this.to('StopBuildBatch');
  }

  /**
   * Grants permission to change the settings of an existing build project
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateProject.html
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  /**
   * Grants permission to change the public visibility of a project and its builds
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateProjectVisibility.html
   */
  public toUpdateProjectVisibility() {
    return this.to('UpdateProjectVisibility');
  }

  /**
   * Grants permission to update information about a report
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toUpdateReport() {
    return this.to('UpdateReport');
  }

  /**
   * Grants permission to change the settings of an existing report group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateReportGroup.html
   */
  public toUpdateReportGroup() {
    return this.to('UpdateReportGroup');
  }

  /**
   * Grants permission to update the webhook associated with an AWS CodeBuild build project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateWebhook.html
   */
  public toUpdateWebhook() {
    return this.to('UpdateWebhook');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchDeleteBuilds',
      'BatchPutCodeCoverages',
      'BatchPutTestCases',
      'CreateProject',
      'CreateReport',
      'CreateReportGroup',
      'CreateWebhook',
      'DeleteBuildBatch',
      'DeleteOAuthToken',
      'DeleteProject',
      'DeleteReport',
      'DeleteReportGroup',
      'DeleteSourceCredentials',
      'DeleteWebhook',
      'ImportSourceCredentials',
      'InvalidateProjectCache',
      'PersistOAuthToken',
      'RetryBuild',
      'RetryBuildBatch',
      'StartBuild',
      'StartBuildBatch',
      'StopBuild',
      'StopBuildBatch',
      'UpdateProject',
      'UpdateProjectVisibility',
      'UpdateReport',
      'UpdateReportGroup',
      'UpdateWebhook'
    ],
    Read: [
      'BatchGetBuildBatches',
      'BatchGetBuilds',
      'BatchGetProjects',
      'BatchGetReportGroups',
      'BatchGetReports',
      'DescribeCodeCoverages',
      'DescribeTestCases',
      'GetReportGroupTrend',
      'GetResourcePolicy'
    ],
    'Permissions management': [
      'DeleteResourcePolicy',
      'PutResourcePolicy'
    ],
    List: [
      'ListBuildBatches',
      'ListBuildBatchesForProject',
      'ListBuilds',
      'ListBuildsForProject',
      'ListConnectedOAuthAccounts',
      'ListCuratedEnvironmentImages',
      'ListProjects',
      'ListReportGroups',
      'ListReports',
      'ListReportsForReportGroup',
      'ListRepositories',
      'ListSharedProjects',
      'ListSharedReportGroups',
      'ListSourceCredentials'
    ]
  };

  /**
   * Adds a resource of type build to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param buildId - Identifier for the buildId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBuild(buildId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Codebuild.defaultPartition }:codebuild:${ region || '*' }:${ account || '*' }:build/${ buildId }`);
  }

  /**
   * Adds a resource of type build-batch to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param buildBatchId - Identifier for the buildBatchId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBuildBatch(buildBatchId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Codebuild.defaultPartition }:codebuild:${ region || '*' }:${ account || '*' }:build-batch/${ buildBatchId }`);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Codebuild.defaultPartition }:codebuild:${ region || '*' }:${ account || '*' }:project/${ projectName }`);
  }

  /**
   * Adds a resource of type report-group to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param reportGroupName - Identifier for the reportGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReportGroup(reportGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Codebuild.defaultPartition }:codebuild:${ region || '*' }:${ account || '*' }:report-group/${ reportGroupName }`);
  }

  /**
   * Adds a resource of type report to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param reportGroupName - Identifier for the reportGroupName.
   * @param reportId - Identifier for the reportId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onReport(reportGroupName: string, reportId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Codebuild.defaultPartition }:codebuild:${ region || '*' }:${ account || '*' }:report/${ reportGroupName }:${ reportId }`);
  }
}
