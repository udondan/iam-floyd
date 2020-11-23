import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Deletes one or more builds.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchDeleteBuilds.html
   */
  public toBatchDeleteBuilds() {
    this.to('BatchDeleteBuilds');
    return this;
  }

  /**
   * Gets information about one or more build batches.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetBuildBatches.html
   */
  public toBatchGetBuildBatches() {
    this.to('BatchGetBuildBatches');
    return this;
  }

  /**
   * Gets information about one or more builds.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetBuilds.html
   */
  public toBatchGetBuilds() {
    this.to('BatchGetBuilds');
    return this;
  }

  /**
   * Gets information about one or more build projects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetProjects.html
   */
  public toBatchGetProjects() {
    this.to('BatchGetProjects');
    return this;
  }

  /**
   * Returns an array of ReportGroup objects that are specified by the input reportGroupArns parameter.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetReportGroups.html
   */
  public toBatchGetReportGroups() {
    this.to('BatchGetReportGroups');
    return this;
  }

  /**
   * Returns an array of the Report objects specified by the input reportArns parameter.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetReports.html
   */
  public toBatchGetReports() {
    this.to('BatchGetReports');
    return this;
  }

  /**
   * Adds or updates information about a report.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toBatchPutCodeCoverages() {
    this.to('BatchPutCodeCoverages');
    return this;
  }

  /**
   * Adds or updates information about a report.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toBatchPutTestCases() {
    this.to('BatchPutTestCases');
    return this;
  }

  /**
   * Creates a build project.
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
    this.to('CreateProject');
    return this;
  }

  /**
   * Creates a report. A report is created when tests specified in the buildspec file for a report groups run during the build of a project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toCreateReport() {
    this.to('CreateReport');
    return this;
  }

  /**
   * Creates a report group.
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
    this.to('CreateReportGroup');
    return this;
  }

  /**
   * For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateWebhook.html
   */
  public toCreateWebhook() {
    this.to('CreateWebhook');
    return this;
  }

  /**
   * Deletes a build batch.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteBuildBatch.html
   */
  public toDeleteBuildBatch() {
    this.to('DeleteBuildBatch');
    return this;
  }

  /**
   * Deletes an OAuth token from a connected third-party OAuth provider. Only used in the AWS CodeBuild console.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toDeleteOAuthToken() {
    this.to('DeleteOAuthToken');
    return this;
  }

  /**
   * Deletes a build project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteProject.html
   */
  public toDeleteProject() {
    this.to('DeleteProject');
    return this;
  }

  /**
   * Deletes a report.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html
   */
  public toDeleteReport() {
    this.to('DeleteReport');
    return this;
  }

  /**
   * Deletes a report group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReportGroup.html
   */
  public toDeleteReportGroup() {
    this.to('DeleteReportGroup');
    return this;
  }

  /**
   * Deletes a resource policy for the associated project or report group.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    this.to('DeleteResourcePolicy');
    return this;
  }

  /**
   * Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteSourceCredentials.html
   */
  public toDeleteSourceCredentials() {
    this.to('DeleteSourceCredentials');
    return this;
  }

  /**
   * For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteWebhook.html
   */
  public toDeleteWebhook() {
    this.to('DeleteWebhook');
    return this;
  }

  /**
   * Returns an array of CodeCoverage objects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DescribeCodeCoverages.html
   */
  public toDescribeCodeCoverages() {
    this.to('DescribeCodeCoverages');
    return this;
  }

  /**
   * Returns an array of TestCase objects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DescribeTestCases.html
   */
  public toDescribeTestCases() {
    this.to('DescribeTestCases');
    return this;
  }

  /**
   * Returns a resource policy for the specified project or report group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    this.to('GetResourcePolicy');
    return this;
  }

  /**
   * Imports the source repository credentials for an AWS CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ImportSourceCredentials.html
   */
  public toImportSourceCredentials() {
    this.to('ImportSourceCredentials');
    return this;
  }

  /**
   * Resets the cache for a project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_InvalidateProjectCache.html
   */
  public toInvalidateProjectCache() {
    this.to('InvalidateProjectCache');
    return this;
  }

  /**
   * Gets a list of build batch IDs, with each build batch ID representing a single build batch.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildBatches.html
   */
  public toListBuildBatches() {
    this.to('ListBuildBatches');
    return this;
  }

  /**
   * Gets a list of build batch IDs for the specified build project, with each build batch ID representing a single build batch.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildBatchesForProject.html
   */
  public toListBuildBatchesForProject() {
    this.to('ListBuildBatchesForProject');
    return this;
  }

  /**
   * Gets a list of build IDs, with each build ID representing a single build.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuilds.html
   */
  public toListBuilds() {
    this.to('ListBuilds');
    return this;
  }

  /**
   * Gets a list of build IDs for the specified build project, with each build ID representing a single build.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildsForProject.html
   */
  public toListBuildsForProject() {
    this.to('ListBuildsForProject');
    return this;
  }

  /**
   * Lists connected third-party OAuth providers. Only used in the AWS CodeBuild console.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toListConnectedOAuthAccounts() {
    this.to('ListConnectedOAuthAccounts');
    return this;
  }

  /**
   * Gets information about Docker images that are managed by AWS CodeBuild.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListCuratedEnvironmentImages.html
   */
  public toListCuratedEnvironmentImages() {
    this.to('ListCuratedEnvironmentImages');
    return this;
  }

  /**
   * Gets a list of build project names, with each build project name representing a single build project.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListProjects.html
   */
  public toListProjects() {
    this.to('ListProjects');
    return this;
  }

  /**
   * Returns a list of report group ARNs. Each report group ARN represents one report group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportGroups.html
   */
  public toListReportGroups() {
    this.to('ListReportGroups');
    return this;
  }

  /**
   * Returns a list of report ARNs. Each report ARN representing one report.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReports.html
   */
  public toListReports() {
    this.to('ListReports');
    return this;
  }

  /**
   * Returns a list of report ARNs that belong to the specified report group. Each report ARN represents one report.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html
   */
  public toListReportsForReportGroup() {
    this.to('ListReportsForReportGroup');
    return this;
  }

  /**
   * Lists source code repositories from a connected third-party OAuth provider. Only used in the AWS CodeBuild console.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toListRepositories() {
    this.to('ListRepositories');
    return this;
  }

  /**
   * Returns a list of project ARNs that have been shared with the requester. Each project ARN represents one project.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSharedProjects.html
   */
  public toListSharedProjects() {
    this.to('ListSharedProjects');
    return this;
  }

  /**
   * Returns a list of report group ARNs that have been shared with the requester. Each report group ARN represents one report group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSharedReportGroups.html
   */
  public toListSharedReportGroups() {
    this.to('ListSharedReportGroups');
    return this;
  }

  /**
   * Returns a list of SourceCredentialsInfo objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSourceCredentials.html
   */
  public toListSourceCredentials() {
    this.to('ListSourceCredentials');
    return this;
  }

  /**
   * Saves an OAuth token from a connected third-party OAuth provider. Only used in the AWS CodeBuild console.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toPersistOAuthToken() {
    this.to('PersistOAuthToken');
    return this;
  }

  /**
   * Creates a resource policy for the associated project or report group.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    this.to('PutResourcePolicy');
    return this;
  }

  /**
   * Retries a build.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_RetryBuild.html
   */
  public toRetryBuild() {
    this.to('RetryBuild');
    return this;
  }

  /**
   * Retries a build batch.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_RetryBuildBatch.html
   */
  public toRetryBuildBatch() {
    this.to('RetryBuildBatch');
    return this;
  }

  /**
   * Starts running a build.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuild.html
   */
  public toStartBuild() {
    this.to('StartBuild');
    return this;
  }

  /**
   * Starts running a build batch.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuildBatch.html
   */
  public toStartBuildBatch() {
    this.to('StartBuildBatch');
    return this;
  }

  /**
   * Attempts to stop running a build.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StopBuild.html
   */
  public toStopBuild() {
    this.to('StopBuild');
    return this;
  }

  /**
   * Attempts to stop running a build batch.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StopBuildBatch.html
   */
  public toStopBuildBatch() {
    this.to('StopBuildBatch');
    return this;
  }

  /**
   * Changes the settings of an existing build project.
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
    this.to('UpdateProject');
    return this;
  }

  /**
   * Updates information about a report.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public toUpdateReport() {
    this.to('UpdateReport');
    return this;
  }

  /**
   * Changes the settings of an existing report group.
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
    this.to('UpdateReportGroup');
    return this;
  }

  /**
   * Updates the webhook associated with an AWS CodeBuild build project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateWebhook.html
   */
  public toUpdateWebhook() {
    this.to('UpdateWebhook');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BatchDeleteBuilds",
      "BatchPutCodeCoverages",
      "BatchPutTestCases",
      "CreateProject",
      "CreateReport",
      "CreateReportGroup",
      "CreateWebhook",
      "DeleteBuildBatch",
      "DeleteOAuthToken",
      "DeleteProject",
      "DeleteReport",
      "DeleteReportGroup",
      "DeleteSourceCredentials",
      "DeleteWebhook",
      "ImportSourceCredentials",
      "InvalidateProjectCache",
      "PersistOAuthToken",
      "RetryBuild",
      "RetryBuildBatch",
      "StartBuild",
      "StartBuildBatch",
      "StopBuild",
      "StopBuildBatch",
      "UpdateProject",
      "UpdateReport",
      "UpdateReportGroup",
      "UpdateWebhook"
    ],
    "Read": [
      "BatchGetBuildBatches",
      "BatchGetBuilds",
      "BatchGetProjects",
      "BatchGetReportGroups",
      "BatchGetReports",
      "DescribeCodeCoverages",
      "DescribeTestCases",
      "GetResourcePolicy"
    ],
    "Permissions management": [
      "DeleteResourcePolicy",
      "PutResourcePolicy"
    ],
    "List": [
      "ListBuildBatches",
      "ListBuildBatchesForProject",
      "ListBuilds",
      "ListBuildsForProject",
      "ListConnectedOAuthAccounts",
      "ListCuratedEnvironmentImages",
      "ListProjects",
      "ListReportGroups",
      "ListReports",
      "ListReportsForReportGroup",
      "ListRepositories",
      "ListSharedProjects",
      "ListSharedReportGroups",
      "ListSourceCredentials"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBuild(buildId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codebuild:${Region}:${Account}:build/${BuildId}';
    arn = arn.replace('${BuildId}', buildId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type build-batch to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param buildBatchId - Identifier for the buildBatchId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBuildBatch(buildBatchId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codebuild:${Region}:${Account}:build-batch/${BuildBatchId}';
    arn = arn.replace('${BuildBatchId}', buildBatchId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codebuild:${Region}:${Account}:project/${ProjectName}';
    arn = arn.replace('${ProjectName}', projectName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type report-group to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param reportGroupName - Identifier for the reportGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReportGroup(reportGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codebuild:${Region}:${Account}:report-group/${ReportGroupName}';
    arn = arn.replace('${ReportGroupName}', reportGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onReport(reportGroupName: string, reportId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codebuild:${Region}:${Account}:report/${ReportGroupName}:${ReportId}';
    arn = arn.replace('${ReportGroupName}', reportGroupName);
    arn = arn.replace('${ReportId}', reportId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
