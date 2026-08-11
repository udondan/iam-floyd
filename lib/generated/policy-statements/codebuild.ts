import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to get information about one or more command executions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetCommandExecutions.html
   */
  public toBatchGetCommandExecutions() {
    return this.to('BatchGetCommandExecutions');
  }

  /**
   * Grants permission to return an array of the Fleet objects specified by the input parameter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetFleets.html
   */
  public toBatchGetFleets() {
    return this.to('BatchGetFleets');
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
   * Grants permission to get information about one or more sandboxes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetSandboxes.html
   */
  public toBatchGetSandboxes() {
    return this.to('BatchGetSandboxes');
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
   * Grants permission to create a compute fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifImageId()
   * - .ifComputeType()
   * - .ifVpcConfig()
   * - .ifVpcConfigVpcId()
   * - .ifVpcConfigSecurityGroupIds()
   * - .ifVpcConfigSubnets()
   * - .ifComputeConfiguration()
   * - .ifComputeConfigurationDisk()
   * - .ifComputeConfigurationInstanceType()
   * - .ifComputeConfigurationMachineType()
   * - .ifComputeConfigurationMemory()
   * - .ifComputeConfigurationVCpu()
   * - .ifEnvironmentType()
   * - .ifFleetServiceRole()
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateFleet.html
   */
  public toCreateFleet() {
    return this.to('CreateFleet');
  }

  /**
   * Grants permission to create a build project
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAutoRetryLimit()
   * - .ifConcurrentBuildLimit()
   * - .ifArtifacts()
   * - .ifArtifactsBucketOwnerAccess()
   * - .ifArtifactsEncryptionDisabled()
   * - .ifArtifactsLocation()
   * - .ifSecondaryArtifacts()
   * - .ifSecondaryArtifactsArtifactIdentifier()
   * - .ifSecondaryArtifactsBucketOwnerAccess()
   * - .ifSecondaryArtifactsEncryptionDisabled()
   * - .ifSecondaryArtifactsLocation()
   * - .ifSecondaryArtifacts()
   * - .ifSecondaryArtifacts()
   * - .ifSecondaryArtifacts()
   * - .ifSource()
   * - .ifSourceBuildStatusConfigTargetUrl()
   * - .ifSourceBuildStatusConfigContext()
   * - .ifSourceLocation()
   * - .ifSourceInsecureSsl()
   * - .ifSourceBuildspec()
   * - .ifSourceAuthResource()
   * - .ifSourceAuthType()
   * - .ifSecondarySources()
   * - .ifSecondarySourcesSourceIdentifier()
   * - .ifSecondarySourcesBuildStatusConfigTargetUrl()
   * - .ifSecondarySourcesBuildStatusConfigContext()
   * - .ifSecondarySourcesLocation()
   * - .ifSecondarySourcesAuthResource()
   * - .ifSecondarySourcesAuthType()
   * - .ifSecondarySourcesBuildspec()
   * - .ifSecondarySourcesInsecureSsl()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifLogsConfig()
   * - .ifLogsConfigS3Logs()
   * - .ifLogsConfigS3LogsBucketOwnerAccess()
   * - .ifLogsConfigS3LogsEncryptionDisabled()
   * - .ifLogsConfigS3LogsLocation()
   * - .ifLogsConfigS3LogsStatus()
   * - .ifFileSystemLocationsIdentifier()
   * - .ifFileSystemLocationsType()
   * - .ifFileSystemLocationsLocation()
   * - .ifFileSystemLocations()
   * - .ifFileSystemLocations()
   * - .ifBuildBatchConfig()
   * - .ifBuildBatchConfigServiceRole()
   * - .ifBuildBatchConfigRestrictionsComputeTypesAllowed()
   * - .ifBuildBatchConfigRestrictionsFleetsAllowed()
   * - .ifVpcConfig()
   * - .ifVpcConfigSubnets()
   * - .ifVpcConfigVpcId()
   * - .ifVpcConfigSecurityGroupIds()
   * - .ifEnvironment()
   * - .ifEnvironmentType()
   * - .ifEnvironmentFleetFleetArn()
   * - .ifEnvironmentComputeType()
   * - .ifEnvironmentImage()
   * - .ifEnvironmentImagePullCredentialsType()
   * - .ifEnvironmentPrivilegedMode()
   * - .ifEnvironmentCertificate()
   * - .ifEnvironmentComputeConfiguration()
   * - .ifEnvironmentComputeConfigurationDisk()
   * - .ifEnvironmentComputeConfigurationInstanceType()
   * - .ifEnvironmentComputeConfigurationMachineType()
   * - .ifEnvironmentComputeConfigurationMemory()
   * - .ifEnvironmentComputeConfigurationVCpu()
   * - .ifEnvironmentEnvironmentVariables()
   * - .ifEnvironmentEnvironmentVariablesName()
   * - .ifEnvironmentEnvironmentVariablesValue()
   * - .ifEnvironmentEnvironmentVariables()
   * - .ifEnvironmentRegistryCredential()
   * - .ifEnvironmentRegistryCredentialCredential()
   * - .ifEnvironmentRegistryCredentialCredentialProvider()
   * - .ifEncryptionKey()
   * - .ifCache()
   * - .ifCacheType()
   * - .ifCacheLocation()
   * - .ifCacheModes()
   * - .ifServiceRole()
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
   * - .ifExportConfigS3DestinationBucket()
   * - .ifExportConfigS3DestinationBucketOwner()
   * - .ifExportConfigS3DestinationEncryptionKey()
   * - .ifExportConfigS3DestinationEncryptionDisabled()
   * - .ifExportConfigS3DestinationPath()
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
   * Possible conditions:
   * - .ifBuildType()
   * - .ifManualCreation()
   * - .ifScopeConfigurationDomain()
   * - .ifScopeConfigurationName()
   * - .ifScopeConfigurationScope()
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
   * Grants permission to delete a compute fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteFleet.html
   */
  public toDeleteFleet() {
    return this.to('DeleteFleet');
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
   * Possible conditions:
   * - .ifAuthType()
   * - .ifServerType()
   * - .ifShouldOverwrite()
   * - .ifToken()
   * - .ifUsername()
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
   * Grants permission to get a list of command execution IDs for the specified sandbox, with each command execution ID representing a single command execution
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListCommandExecutionsForSandbox.html
   */
  public toListCommandExecutionsForSandbox() {
    return this.to('ListCommandExecutionsForSandbox');
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
   * Grants permission to get a list of compute fleet ARNs, with each compute fleet ARN representing a single fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListFleets.html
   */
  public toListFleets() {
    return this.to('ListFleets');
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
   * Grants permission to get a list of sandbox IDs, with each sandbox ID representing a single sandbox
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSandboxes.html
   */
  public toListSandboxes() {
    return this.to('ListSandboxes');
  }

  /**
   * Grants permission to get a list of sandbox IDs for the specified sandbox project, with each sandbox ID representing a single sandbox
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSandboxesForProject.html
   */
  public toListSandboxesForProject() {
    return this.to('ListSandboxesForProject');
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
   * Possible conditions:
   * - .ifAutoRetryLimit()
   * - .ifArtifacts()
   * - .ifArtifactsBucketOwnerAccess()
   * - .ifArtifactsEncryptionDisabled()
   * - .ifArtifactsLocation()
   * - .ifSecondaryArtifacts()
   * - .ifSecondaryArtifactsArtifactIdentifier()
   * - .ifSecondaryArtifactsBucketOwnerAccess()
   * - .ifSecondaryArtifactsEncryptionDisabled()
   * - .ifSecondaryArtifactsLocation()
   * - .ifSecondaryArtifacts()
   * - .ifSecondaryArtifacts()
   * - .ifSecondaryArtifacts()
   * - .ifSource()
   * - .ifSourceBuildStatusConfigTargetUrl()
   * - .ifSourceBuildStatusConfigContext()
   * - .ifSourceLocation()
   * - .ifSourceInsecureSsl()
   * - .ifSourceBuildspec()
   * - .ifSourceAuthResource()
   * - .ifSourceAuthType()
   * - .ifSecondarySources()
   * - .ifSecondarySourcesSourceIdentifier()
   * - .ifSecondarySourcesBuildStatusConfigTargetUrl()
   * - .ifSecondarySourcesBuildStatusConfigContext()
   * - .ifSecondarySourcesLocation()
   * - .ifSecondarySourcesAuthResource()
   * - .ifSecondarySourcesAuthType()
   * - .ifSecondarySourcesBuildspec()
   * - .ifSecondarySourcesInsecureSsl()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifLogsConfig()
   * - .ifLogsConfigS3Logs()
   * - .ifLogsConfigS3LogsBucketOwnerAccess()
   * - .ifLogsConfigS3LogsEncryptionDisabled()
   * - .ifLogsConfigS3LogsLocation()
   * - .ifLogsConfigS3LogsStatus()
   * - .ifEnvironment()
   * - .ifEnvironmentType()
   * - .ifEnvironmentFleetFleetArn()
   * - .ifEnvironmentComputeType()
   * - .ifEnvironmentImage()
   * - .ifEnvironmentImagePullCredentialsType()
   * - .ifEnvironmentPrivilegedMode()
   * - .ifEnvironmentCertificate()
   * - .ifEnvironmentEnvironmentVariables()
   * - .ifEnvironmentEnvironmentVariablesName()
   * - .ifEnvironmentEnvironmentVariablesValue()
   * - .ifEnvironmentEnvironmentVariables()
   * - .ifEnvironmentRegistryCredential()
   * - .ifEnvironmentRegistryCredentialCredential()
   * - .ifEnvironmentRegistryCredentialCredentialProvider()
   * - .ifEncryptionKey()
   * - .ifCache()
   * - .ifCacheType()
   * - .ifCacheLocation()
   * - .ifCacheModes()
   * - .ifServiceRole()
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
   * Possible conditions:
   * - .ifArtifacts()
   * - .ifArtifactsBucketOwnerAccess()
   * - .ifArtifactsEncryptionDisabled()
   * - .ifArtifactsLocation()
   * - .ifSecondaryArtifacts()
   * - .ifSecondaryArtifactsArtifactIdentifier()
   * - .ifSecondaryArtifactsBucketOwnerAccess()
   * - .ifSecondaryArtifactsEncryptionDisabled()
   * - .ifSecondaryArtifactsLocation()
   * - .ifSecondaryArtifacts()
   * - .ifSecondaryArtifacts()
   * - .ifSecondaryArtifacts()
   * - .ifSource()
   * - .ifSourceLocation()
   * - .ifSourceInsecureSsl()
   * - .ifSourceBuildspec()
   * - .ifSourceAuthResource()
   * - .ifSourceAuthType()
   * - .ifSecondarySources()
   * - .ifSecondarySourcesSourceIdentifier()
   * - .ifSecondarySourcesBuildStatusConfigTargetUrl()
   * - .ifSecondarySourcesBuildStatusConfigContext()
   * - .ifSecondarySourcesLocation()
   * - .ifSecondarySourcesAuthResource()
   * - .ifSecondarySourcesAuthType()
   * - .ifSecondarySourcesBuildspec()
   * - .ifSecondarySourcesInsecureSsl()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifLogsConfig()
   * - .ifLogsConfigS3Logs()
   * - .ifLogsConfigS3LogsBucketOwnerAccess()
   * - .ifLogsConfigS3LogsEncryptionDisabled()
   * - .ifLogsConfigS3LogsLocation()
   * - .ifLogsConfigS3LogsStatus()
   * - .ifBuildBatchConfig()
   * - .ifBuildBatchConfigServiceRole()
   * - .ifBuildBatchConfigRestrictionsComputeTypesAllowed()
   * - .ifBuildBatchConfigRestrictionsFleetsAllowed()
   * - .ifEnvironment()
   * - .ifEnvironmentType()
   * - .ifEnvironmentComputeType()
   * - .ifEnvironmentImage()
   * - .ifEnvironmentImagePullCredentialsType()
   * - .ifEnvironmentPrivilegedMode()
   * - .ifEnvironmentCertificate()
   * - .ifEnvironmentEnvironmentVariables()
   * - .ifEnvironmentEnvironmentVariablesName()
   * - .ifEnvironmentEnvironmentVariablesValue()
   * - .ifEnvironmentEnvironmentVariables()
   * - .ifEnvironmentRegistryCredential()
   * - .ifEnvironmentRegistryCredentialCredential()
   * - .ifEnvironmentRegistryCredentialCredentialProvider()
   * - .ifEncryptionKey()
   * - .ifCache()
   * - .ifCacheType()
   * - .ifCacheLocation()
   * - .ifCacheModes()
   * - .ifServiceRole()
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuildBatch.html
   */
  public toStartBuildBatch() {
    return this.to('StartBuildBatch');
  }

  /**
   * Grants permission to start running a command execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartCommandExecution.html
   */
  public toStartCommandExecution() {
    return this.to('StartCommandExecution');
  }

  /**
   * Grants permission to start running a sandbox
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartSandbox.html
   */
  public toStartSandbox() {
    return this.to('StartSandbox');
  }

  /**
   * Grants permission to establish a connection to the sandbox
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartSandboxConnection.html
   */
  public toStartSandboxConnection() {
    return this.to('StartSandboxConnection');
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
   * Grants permission to attempt to stop running a sandbox
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StopSandbox.html
   */
  public toStopSandbox() {
    return this.to('StopSandbox');
  }

  /**
   * Grants permission to change the settings of an existing compute fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifImageId()
   * - .ifComputeType()
   * - .ifVpcConfig()
   * - .ifVpcConfigVpcId()
   * - .ifVpcConfigSecurityGroupIds()
   * - .ifVpcConfigSubnets()
   * - .ifComputeConfiguration()
   * - .ifComputeConfigurationDisk()
   * - .ifComputeConfigurationInstanceType()
   * - .ifComputeConfigurationMachineType()
   * - .ifComputeConfigurationMemory()
   * - .ifComputeConfigurationVCpu()
   * - .ifEnvironmentType()
   * - .ifFleetServiceRole()
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateFleet.html
   */
  public toUpdateFleet() {
    return this.to('UpdateFleet');
  }

  /**
   * Grants permission to change the settings of an existing build project
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAutoRetryLimit()
   * - .ifConcurrentBuildLimit()
   * - .ifArtifacts()
   * - .ifArtifactsBucketOwnerAccess()
   * - .ifArtifactsEncryptionDisabled()
   * - .ifArtifactsLocation()
   * - .ifSecondaryArtifacts()
   * - .ifSecondaryArtifactsArtifactIdentifier()
   * - .ifSecondaryArtifactsBucketOwnerAccess()
   * - .ifSecondaryArtifactsEncryptionDisabled()
   * - .ifSecondaryArtifactsLocation()
   * - .ifSecondaryArtifacts()
   * - .ifSecondaryArtifacts()
   * - .ifSecondaryArtifacts()
   * - .ifSource()
   * - .ifSourceBuildStatusConfigTargetUrl()
   * - .ifSourceBuildStatusConfigContext()
   * - .ifSourceLocation()
   * - .ifSourceInsecureSsl()
   * - .ifSourceBuildspec()
   * - .ifSourceAuthResource()
   * - .ifSourceAuthType()
   * - .ifSecondarySources()
   * - .ifSecondarySourcesSourceIdentifier()
   * - .ifSecondarySourcesBuildStatusConfigTargetUrl()
   * - .ifSecondarySourcesBuildStatusConfigContext()
   * - .ifSecondarySourcesLocation()
   * - .ifSecondarySourcesAuthResource()
   * - .ifSecondarySourcesAuthType()
   * - .ifSecondarySourcesBuildspec()
   * - .ifSecondarySourcesInsecureSsl()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifSecondarySources()
   * - .ifLogsConfig()
   * - .ifLogsConfigS3Logs()
   * - .ifLogsConfigS3LogsBucketOwnerAccess()
   * - .ifLogsConfigS3LogsEncryptionDisabled()
   * - .ifLogsConfigS3LogsLocation()
   * - .ifLogsConfigS3LogsStatus()
   * - .ifFileSystemLocationsIdentifier()
   * - .ifFileSystemLocationsType()
   * - .ifFileSystemLocationsLocation()
   * - .ifFileSystemLocations()
   * - .ifFileSystemLocations()
   * - .ifBuildBatchConfig()
   * - .ifBuildBatchConfigServiceRole()
   * - .ifBuildBatchConfigRestrictionsComputeTypesAllowed()
   * - .ifBuildBatchConfigRestrictionsFleetsAllowed()
   * - .ifVpcConfig()
   * - .ifVpcConfigSubnets()
   * - .ifVpcConfigVpcId()
   * - .ifVpcConfigSecurityGroupIds()
   * - .ifEnvironment()
   * - .ifEnvironmentType()
   * - .ifEnvironmentFleetFleetArn()
   * - .ifEnvironmentComputeType()
   * - .ifEnvironmentImage()
   * - .ifEnvironmentImagePullCredentialsType()
   * - .ifEnvironmentPrivilegedMode()
   * - .ifEnvironmentCertificate()
   * - .ifEnvironmentComputeConfiguration()
   * - .ifEnvironmentComputeConfigurationDisk()
   * - .ifEnvironmentComputeConfigurationInstanceType()
   * - .ifEnvironmentComputeConfigurationMachineType()
   * - .ifEnvironmentComputeConfigurationMemory()
   * - .ifEnvironmentComputeConfigurationVCpu()
   * - .ifEnvironmentEnvironmentVariables()
   * - .ifEnvironmentEnvironmentVariablesName()
   * - .ifEnvironmentEnvironmentVariablesValue()
   * - .ifEnvironmentEnvironmentVariables()
   * - .ifEnvironmentRegistryCredential()
   * - .ifEnvironmentRegistryCredentialCredential()
   * - .ifEnvironmentRegistryCredentialCredentialProvider()
   * - .ifEncryptionKey()
   * - .ifCache()
   * - .ifCacheType()
   * - .ifCacheLocation()
   * - .ifCacheModes()
   * - .ifServiceRole()
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
   * - .ifProjectVisibility()
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
   * - .ifExportConfigS3DestinationBucket()
   * - .ifExportConfigS3DestinationBucketOwner()
   * - .ifExportConfigS3DestinationEncryptionKey()
   * - .ifExportConfigS3DestinationEncryptionDisabled()
   * - .ifExportConfigS3DestinationPath()
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
   * Possible conditions:
   * - .ifBuildType()
   * - .ifManualCreation()
   * - .ifScopeConfigurationDomain()
   * - .ifScopeConfigurationName()
   * - .ifScopeConfigurationScope()
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
      'CreateFleet',
      'CreateProject',
      'CreateReport',
      'CreateReportGroup',
      'CreateWebhook',
      'DeleteBuildBatch',
      'DeleteFleet',
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
      'StartCommandExecution',
      'StartSandbox',
      'StartSandboxConnection',
      'StopBuild',
      'StopBuildBatch',
      'StopSandbox',
      'UpdateFleet',
      'UpdateProject',
      'UpdateProjectVisibility',
      'UpdateReport',
      'UpdateReportGroup',
      'UpdateWebhook'
    ],
    Read: [
      'BatchGetBuildBatches',
      'BatchGetBuilds',
      'BatchGetCommandExecutions',
      'BatchGetFleets',
      'BatchGetProjects',
      'BatchGetReportGroups',
      'BatchGetReports',
      'BatchGetSandboxes',
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
      'ListCommandExecutionsForSandbox',
      'ListConnectedOAuthAccounts',
      'ListCuratedEnvironmentImages',
      'ListFleets',
      'ListProjects',
      'ListReportGroups',
      'ListReports',
      'ListReportsForReportGroup',
      'ListRepositories',
      'ListSandboxes',
      'ListSandboxesForProject',
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBuild(buildId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:codebuild:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:build/${ buildId }`);
  }

  /**
   * Adds a resource of type build-batch to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param buildBatchId - Identifier for the buildBatchId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBuildBatch(buildBatchId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:codebuild:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:build-batch/${ buildBatchId }`);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:codebuild:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:project/${ projectName }`);
  }

  /**
   * Adds a resource of type report-group to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param reportGroupName - Identifier for the reportGroupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReportGroup(reportGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:codebuild:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:report-group/${ reportGroupName }`);
  }

  /**
   * Adds a resource of type report to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param reportGroupName - Identifier for the reportGroupName.
   * @param reportId - Identifier for the reportId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onReport(reportGroupName: string, reportId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:codebuild:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:report/${ reportGroupName }:${ reportId }`);
  }

  /**
   * Adds a resource of type fleet to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param fleetName - Identifier for the fleetName.
   * @param fleetId - Identifier for the fleetId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onFleet(fleetName: string, fleetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:codebuild:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:fleet/${ fleetName }:${ fleetId }`);
  }

  /**
   * Adds a resource of type sandbox to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param sandboxId - Identifier for the sandboxId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSandbox(sandboxId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:codebuild:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:sandbox/${ sandboxId }`);
  }

  /**
   * Filters access by actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreateProject()
   * - .toCreateReportGroup()
   * - .toUpdateFleet()
   * - .toUpdateProject()
   * - .toUpdateProjectVisibility()
   * - .toUpdateReportGroup()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - project
   * - report-group
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreateProject()
   * - .toCreateReportGroup()
   * - .toUpdateFleet()
   * - .toUpdateProject()
   * - .toUpdateProjectVisibility()
   * - .toUpdateReportGroup()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifArtifacts(value?: boolean) {
    return this.if(`artifacts`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifArtifactsBucketOwnerAccess(value: string | string[], operator?: Operator | string) {
    return this.if(`artifacts.bucketOwnerAccess`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifArtifactsEncryptionDisabled(value?: boolean) {
    return this.if(`artifacts.encryptionDisabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifArtifactsLocation(value: string | string[], operator?: Operator | string) {
    return this.if(`artifacts.location`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toImportSourceCredentials()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthType(value: string | string[], operator?: Operator | string) {
    return this.if(`authType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifAutoRetryLimit(value: number | number[], operator?: Operator | string) {
    return this.if(`autoRetryLimit`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the ARN of the AWS CodeBuild build from which the request originated
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-permissions-reference.html
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifBuildArn(value: string | string[], operator?: Operator | string) {
    return this.if(`buildArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifBuildBatchConfig(value?: boolean) {
    return this.if(`buildBatchConfig`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifBuildBatchConfigRestrictionsComputeTypesAllowed(value: string | string[], operator?: Operator | string) {
    return this.if(`buildBatchConfig.restrictions.computeTypesAllowed`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifBuildBatchConfigRestrictionsFleetsAllowed(value: string | string[], operator?: Operator | string) {
    return this.if(`buildBatchConfig.restrictions.fleetsAllowed`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifBuildBatchConfigServiceRole(value: string | string[], operator?: Operator | string) {
    return this.if(`buildBatchConfig.serviceRole`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateWebhook()
   * - .toUpdateWebhook()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifBuildType(value: string | string[], operator?: Operator | string) {
    return this.if(`buildType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifCache(value?: boolean) {
    return this.if(`cache`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCacheLocation(value: string | string[], operator?: Operator | string) {
    return this.if(`cache.location`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCacheModes(value: string | string[], operator?: Operator | string) {
    return this.if(`cache.modes`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCacheType(value: string | string[], operator?: Operator | string) {
    return this.if(`cache.type`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toUpdateFleet()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifComputeConfiguration(value?: boolean) {
    return this.if(`computeConfiguration`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toUpdateFleet()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifComputeConfigurationDisk(value: number | number[], operator?: Operator | string) {
    return this.if(`computeConfiguration.disk`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toUpdateFleet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifComputeConfigurationInstanceType(value: string | string[], operator?: Operator | string) {
    return this.if(`computeConfiguration.instanceType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toUpdateFleet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifComputeConfigurationMachineType(value: string | string[], operator?: Operator | string) {
    return this.if(`computeConfiguration.machineType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toUpdateFleet()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifComputeConfigurationMemory(value: number | number[], operator?: Operator | string) {
    return this.if(`computeConfiguration.memory`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toUpdateFleet()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifComputeConfigurationVCpu(value: number | number[], operator?: Operator | string) {
    return this.if(`computeConfiguration.vCpu`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toUpdateFleet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifComputeType(value: string | string[], operator?: Operator | string) {
    return this.if(`computeType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifConcurrentBuildLimit(value: number | number[], operator?: Operator | string) {
    return this.if(`concurrentBuildLimit`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEncryptionKey(value: string | string[], operator?: Operator | string) {
    return this.if(`encryptionKey`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEnvironment(value?: boolean) {
    return this.if(`environment`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentCertificate(value: string | string[], operator?: Operator | string) {
    return this.if(`environment.certificate`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEnvironmentComputeConfiguration(value?: boolean) {
    return this.if(`environment.computeConfiguration`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifEnvironmentComputeConfigurationDisk(value: number | number[], operator?: Operator | string) {
    return this.if(`environment.computeConfiguration.disk`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentComputeConfigurationInstanceType(value: string | string[], operator?: Operator | string) {
    return this.if(`environment.computeConfiguration.instanceType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentComputeConfigurationMachineType(value: string | string[], operator?: Operator | string) {
    return this.if(`environment.computeConfiguration.machineType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifEnvironmentComputeConfigurationMemory(value: number | number[], operator?: Operator | string) {
    return this.if(`environment.computeConfiguration.memory`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifEnvironmentComputeConfigurationVCpu(value: number | number[], operator?: Operator | string) {
    return this.if(`environment.computeConfiguration.vCpu`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentComputeType(value: string | string[], operator?: Operator | string) {
    return this.if(`environment.computeType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEnvironmentEnvironmentVariables(value?: boolean) {
    return this.if(`environment.environmentVariables`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentEnvironmentVariablesName(value: string | string[], operator?: Operator | string) {
    return this.if(`environment.environmentVariables.name`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentEnvironmentVariablesValue(value: string | string[], operator?: Operator | string) {
    return this.if(`environment.environmentVariables.value`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param namevalue The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentEnvironmentVariablesNamevalue(namevalue: string, value: string | string[], operator?: Operator | string) {
    return this.if(`environment.environmentVariables/${ namevalue }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifEnvironmentFleetFleetArn(value: string | string[], operator?: Operator | string) {
    return this.if(`environment.fleet.fleetArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentImage(value: string | string[], operator?: Operator | string) {
    return this.if(`environment.image`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentImagePullCredentialsType(value: string | string[], operator?: Operator | string) {
    return this.if(`environment.imagePullCredentialsType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEnvironmentPrivilegedMode(value?: boolean) {
    return this.if(`environment.privilegedMode`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEnvironmentRegistryCredential(value?: boolean) {
    return this.if(`environment.registryCredential`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentRegistryCredentialCredential(value: string | string[], operator?: Operator | string) {
    return this.if(`environment.registryCredential.credential`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentRegistryCredentialCredentialProvider(value: string | string[], operator?: Operator | string) {
    return this.if(`environment.registryCredential.credentialProvider`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentType(value: string | string[], operator?: Operator | string) {
    return this.if(`environment.type`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toUpdateFleet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFleetEnvironmentType(value: string | string[], operator?: Operator | string) {
    return this.if(`environmentType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateReportGroup()
   * - .toUpdateReportGroup()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExportConfigS3DestinationBucket(value: string | string[], operator?: Operator | string) {
    return this.if(`exportConfig.s3Destination.bucket`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateReportGroup()
   * - .toUpdateReportGroup()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExportConfigS3DestinationBucketOwner(value: string | string[], operator?: Operator | string) {
    return this.if(`exportConfig.s3Destination.bucketOwner`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateReportGroup()
   * - .toUpdateReportGroup()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifExportConfigS3DestinationEncryptionDisabled(value?: boolean) {
    return this.if(`exportConfig.s3Destination.encryptionDisabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateReportGroup()
   * - .toUpdateReportGroup()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExportConfigS3DestinationEncryptionKey(value: string | string[], operator?: Operator | string) {
    return this.if(`exportConfig.s3Destination.encryptionKey`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateReportGroup()
   * - .toUpdateReportGroup()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExportConfigS3DestinationPath(value: string | string[], operator?: Operator | string) {
    return this.if(`exportConfig.s3Destination.path`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemLocationsIdentifier(value: string | string[], operator?: Operator | string) {
    return this.if(`fileSystemLocations.identifier`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemLocationsLocation(value: string | string[], operator?: Operator | string) {
    return this.if(`fileSystemLocations.location`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemLocationsType(value: string | string[], operator?: Operator | string) {
    return this.if(`fileSystemLocations.type`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toUpdateProject()
   *
   * @param identifierlocation The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemLocationsIdentifierlocation(identifierlocation: string, value: string | string[], operator?: Operator | string) {
    return this.if(`fileSystemLocations/${ identifierlocation }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toUpdateProject()
   *
   * @param identifiertype The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemLocationsIdentifiertype(identifiertype: string, value: string | string[], operator?: Operator | string) {
    return this.if(`fileSystemLocations/${ identifiertype }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toUpdateFleet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFleetServiceRole(value: string | string[], operator?: Operator | string) {
    return this.if(`fleetServiceRole`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toUpdateFleet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifImageId(value: string | string[], operator?: Operator | string) {
    return this.if(`imageId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifLogsConfig(value?: boolean) {
    return this.if(`logsConfig`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifLogsConfigS3Logs(value?: boolean) {
    return this.if(`logsConfig.s3Logs`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLogsConfigS3LogsBucketOwnerAccess(value: string | string[], operator?: Operator | string) {
    return this.if(`logsConfig.s3Logs.bucketOwnerAccess`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifLogsConfigS3LogsEncryptionDisabled(value?: boolean) {
    return this.if(`logsConfig.s3Logs.encryptionDisabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLogsConfigS3LogsLocation(value: string | string[], operator?: Operator | string) {
    return this.if(`logsConfig.s3Logs.location`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLogsConfigS3LogsStatus(value: string | string[], operator?: Operator | string) {
    return this.if(`logsConfig.s3Logs.status`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateWebhook()
   * - .toUpdateWebhook()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifManualCreation(value?: boolean) {
    return this.if(`manualCreation`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the ARN of the AWS CodeBuild project from which the request originated
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-permissions-reference.html
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifProjectArn(value: string | string[], operator?: Operator | string) {
    return this.if(`projectArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toUpdateProjectVisibility()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProjectVisibility(value: string | string[], operator?: Operator | string) {
    return this.if(`projectVisibility`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateWebhook()
   * - .toUpdateWebhook()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifScopeConfigurationDomain(value: string | string[], operator?: Operator | string) {
    return this.if(`scopeConfiguration.domain`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateWebhook()
   * - .toUpdateWebhook()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifScopeConfigurationName(value: string | string[], operator?: Operator | string) {
    return this.if(`scopeConfiguration.name`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateWebhook()
   * - .toUpdateWebhook()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifScopeConfigurationScope(value: string | string[], operator?: Operator | string) {
    return this.if(`scopeConfiguration.scope`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifSecondaryArtifacts(value?: boolean) {
    return this.if(`secondaryArtifacts`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondaryArtifactsArtifactIdentifier(value: string | string[], operator?: Operator | string) {
    return this.if(`secondaryArtifacts.artifactIdentifier`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondaryArtifactsBucketOwnerAccess(value: string | string[], operator?: Operator | string) {
    return this.if(`secondaryArtifacts.bucketOwnerAccess`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifSecondaryArtifactsEncryptionDisabled(value?: boolean) {
    return this.if(`secondaryArtifacts.encryptionDisabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondaryArtifactsLocation(value: string | string[], operator?: Operator | string) {
    return this.if(`secondaryArtifacts.location`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param artifactIdentifierbucketOwnerAccess The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondaryArtifactsArtifactIdentifierbucketOwnerAccess(artifactIdentifierbucketOwnerAccess: string, value: string | string[], operator?: Operator | string) {
    return this.if(`secondaryArtifacts/${ artifactIdentifierbucketOwnerAccess }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param artifactIdentifierencryptionDisabled The tag key to check
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifSecondaryArtifactsArtifactIdentifierencryptionDisabled(artifactIdentifierencryptionDisabled: string, value?: boolean) {
    return this.if(`secondaryArtifacts/${ artifactIdentifierencryptionDisabled }`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param artifactIdentifierlocation The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondaryArtifactsArtifactIdentifierlocation(artifactIdentifierlocation: string, value: string | string[], operator?: Operator | string) {
    return this.if(`secondaryArtifacts/${ artifactIdentifierlocation }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifSecondarySources(value?: boolean) {
    return this.if(`secondarySources`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondarySourcesAuthResource(value: string | string[], operator?: Operator | string) {
    return this.if(`secondarySources.auth.resource`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondarySourcesAuthType(value: string | string[], operator?: Operator | string) {
    return this.if(`secondarySources.auth.type`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondarySourcesBuildStatusConfigContext(value: string | string[], operator?: Operator | string) {
    return this.if(`secondarySources.buildStatusConfig.context`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondarySourcesBuildStatusConfigTargetUrl(value: string | string[], operator?: Operator | string) {
    return this.if(`secondarySources.buildStatusConfig.targetUrl`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifSecondarySourcesBuildspec(value?: boolean) {
    return this.if(`secondarySources.buildspec`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifSecondarySourcesInsecureSsl(value?: boolean) {
    return this.if(`secondarySources.insecureSsl`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondarySourcesLocation(value: string | string[], operator?: Operator | string) {
    return this.if(`secondarySources.location`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondarySourcesSourceIdentifier(value: string | string[], operator?: Operator | string) {
    return this.if(`secondarySources.sourceIdentifier`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param sourceIdentifierauthresource The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondarySourcesSourceIdentifierauthresource(sourceIdentifierauthresource: string, value: string | string[], operator?: Operator | string) {
    return this.if(`secondarySources/${ sourceIdentifierauthresource }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param sourceIdentifierauthtype The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondarySourcesSourceIdentifierauthtype(sourceIdentifierauthtype: string, value: string | string[], operator?: Operator | string) {
    return this.if(`secondarySources/${ sourceIdentifierauthtype }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param sourceIdentifierbuildStatusConfigcontext The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondarySourcesSourceIdentifierbuildStatusConfigcontext(sourceIdentifierbuildStatusConfigcontext: string, value: string | string[], operator?: Operator | string) {
    return this.if(`secondarySources/${ sourceIdentifierbuildStatusConfigcontext }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param sourceIdentifierbuildStatusConfigtargetUrl The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondarySourcesSourceIdentifierbuildStatusConfigtargetUrl(sourceIdentifierbuildStatusConfigtargetUrl: string, value: string | string[], operator?: Operator | string) {
    return this.if(`secondarySources/${ sourceIdentifierbuildStatusConfigtargetUrl }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param sourceIdentifierbuildspec The tag key to check
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifSecondarySourcesSourceIdentifierbuildspec(sourceIdentifierbuildspec: string, value?: boolean) {
    return this.if(`secondarySources/${ sourceIdentifierbuildspec }`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param sourceIdentifierinsecureSsl The tag key to check
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifSecondarySourcesSourceIdentifierinsecureSsl(sourceIdentifierinsecureSsl: string, value?: boolean) {
    return this.if(`secondarySources/${ sourceIdentifierinsecureSsl }`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param sourceIdentifierlocation The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecondarySourcesSourceIdentifierlocation(sourceIdentifierlocation: string, value: string | string[], operator?: Operator | string) {
    return this.if(`secondarySources/${ sourceIdentifierlocation }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toImportSourceCredentials()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifServerType(value: string | string[], operator?: Operator | string) {
    return this.if(`serverType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifServiceRole(value: string | string[], operator?: Operator | string) {
    return this.if(`serviceRole`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toImportSourceCredentials()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifShouldOverwrite(value?: boolean) {
    return this.if(`shouldOverwrite`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifSource(value?: boolean) {
    return this.if(`source`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSourceAuthResource(value: string | string[], operator?: Operator | string) {
    return this.if(`source.auth.resource`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSourceAuthType(value: string | string[], operator?: Operator | string) {
    return this.if(`source.auth.type`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSourceBuildStatusConfigContext(value: string | string[], operator?: Operator | string) {
    return this.if(`source.buildStatusConfig.context`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSourceBuildStatusConfigTargetUrl(value: string | string[], operator?: Operator | string) {
    return this.if(`source.buildStatusConfig.targetUrl`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifSourceBuildspec(value?: boolean) {
    return this.if(`source.buildspec`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifSourceInsecureSsl(value?: boolean) {
    return this.if(`source.insecureSsl`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toStartBuild()
   * - .toStartBuildBatch()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSourceLocation(value: string | string[], operator?: Operator | string) {
    return this.if(`source.location`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toImportSourceCredentials()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifToken(value: string | string[], operator?: Operator | string) {
    return this.if(`token`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toImportSourceCredentials()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUsername(value: string | string[], operator?: Operator | string) {
    return this.if(`username`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreateProject()
   * - .toUpdateFleet()
   * - .toUpdateProject()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifVpcConfig(value?: boolean) {
    return this.if(`vpcConfig`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreateProject()
   * - .toUpdateFleet()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcConfigSecurityGroupIds(value: string | string[], operator?: Operator | string) {
    return this.if(`vpcConfig.securityGroupIds`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreateProject()
   * - .toUpdateFleet()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcConfigSubnets(value: string | string[], operator?: Operator | string) {
    return this.if(`vpcConfig.subnets`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the API corresponding argument value
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreateProject()
   * - .toUpdateFleet()
   * - .toUpdateProject()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcConfigVpcId(value: string | string[], operator?: Operator | string) {
    return this.if(`vpcConfig.vpcId`, value, operator ?? 'StringLike');
  }
}
