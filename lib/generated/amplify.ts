import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [amplify](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplify.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Amplify extends PolicyStatement {
  public servicePrefix = 'amplify';

  /**
   * Statement provider for service [amplify](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplify.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a new Amplify App.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateApp() {
    return this.to('CreateApp');
  }

  /**
   * Creates a new backend environment for an Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateBackendEnvironment() {
    return this.to('CreateBackendEnvironment');
  }

  /**
   * Creates a new Branch for an Amplify App.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateBranch() {
    return this.to('CreateBranch');
  }

  /**
   * Create a deployment for manual deploy apps. (Apps are not connected to repository)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateDeployment() {
    return this.to('CreateDeployment');
  }

  /**
   * Create a new DomainAssociation on an App
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateDomainAssociation() {
    return this.to('CreateDomainAssociation');
  }

  /**
   * Create a new webhook on an App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateWebHook() {
    return this.to('CreateWebHook');
  }

  /**
   * Delete an existing Amplify App by appId.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteApp() {
    return this.to('DeleteApp');
  }

  /**
   * Deletes a branch for an Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteBackendEnvironment() {
    return this.to('DeleteBackendEnvironment');
  }

  /**
   * Deletes a branch for an Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteBranch() {
    return this.to('DeleteBranch');
  }

  /**
   * Deletes a DomainAssociation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteDomainAssociation() {
    return this.to('DeleteDomainAssociation');
  }

  /**
   * Delete a job, for an Amplify branch, part of Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteJob() {
    return this.to('DeleteJob');
  }

  /**
   * Delete a webhook by id.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteWebHook() {
    return this.to('DeleteWebHook');
  }

  /**
   * Generate website access logs for a specific time range via a pre-signed URL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGenerateAccessLogs() {
    return this.to('GenerateAccessLogs');
  }

  /**
   * Retrieves an existing Amplify App by appId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetApp() {
    return this.to('GetApp');
  }

  /**
   * Retrieves artifact info that corresponds to a artifactId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetArtifactUrl() {
    return this.to('GetArtifactUrl');
  }

  /**
   * Retrieves a backend environment for an Amplify App.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetBackendEnvironment() {
    return this.to('GetBackendEnvironment');
  }

  /**
   * Retrieves a branch for an Amplify App.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetBranch() {
    return this.to('GetBranch');
  }

  /**
   * Retrieves domain info that corresponds to an appId and domainName.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetDomainAssociation() {
    return this.to('GetDomainAssociation');
  }

  /**
   * Get a job for a branch, part of an Amplify App.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetJob() {
    return this.to('GetJob');
  }

  /**
   * Retrieves webhook info that corresponds to a webhookId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetWebHook() {
    return this.to('GetWebHook');
  }

  /**
   * Lists existing Amplify Apps.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListApps() {
    return this.to('ListApps');
  }

  /**
   * List artifacts with an app, a branch, a job and an artifact type.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListArtifacts() {
    return this.to('ListArtifacts');
  }

  /**
   * Lists backend environments for an Amplify App.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListBackendEnvironments() {
    return this.to('ListBackendEnvironments');
  }

  /**
   * Lists branches for an Amplify App.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListBranches() {
    return this.to('ListBranches');
  }

  /**
   * List domains with an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListDomainAssociations() {
    return this.to('ListDomainAssociations');
  }

  /**
   * List Jobs for a branch, part of an Amplify App.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * List webhooks on an App.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListWebHooks() {
    return this.to('ListWebHooks');
  }

  /**
   * Start a deployment for manual deploy apps. (Apps are not connected to repository)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toStartDeployment() {
    return this.to('StartDeployment');
  }

  /**
   * Starts a new job for a branch, part of an Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toStartJob() {
    return this.to('StartJob');
  }

  /**
   * Stop a job that is in progress, for an Amplify branch, part of Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toStopJob() {
    return this.to('StopJob');
  }

  /**
   * This action tags an AWS Amplify Console resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * This action removes a tag from an AWS Amplify Console resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Updates an existing Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUpdateApp() {
    return this.to('UpdateApp');
  }

  /**
   * Updates a branch for an Amplify App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUpdateBranch() {
    return this.to('UpdateBranch');
  }

  /**
   * Update a DomainAssociation on an App.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUpdateDomainAssociation() {
    return this.to('UpdateDomainAssociation');
  }

  /**
   * Update a webhook.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUpdateWebHook() {
    return this.to('UpdateWebHook');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateApp",
      "CreateBackendEnvironment",
      "CreateBranch",
      "CreateDeployment",
      "CreateDomainAssociation",
      "CreateWebHook",
      "DeleteApp",
      "DeleteBackendEnvironment",
      "DeleteBranch",
      "DeleteDomainAssociation",
      "DeleteJob",
      "DeleteWebHook",
      "GenerateAccessLogs",
      "StartDeployment",
      "StartJob",
      "StopJob",
      "UpdateApp",
      "UpdateBranch",
      "UpdateDomainAssociation",
      "UpdateWebHook"
    ],
    "Read": [
      "GetApp",
      "GetArtifactUrl",
      "GetBackendEnvironment",
      "GetBranch",
      "GetDomainAssociation",
      "GetJob",
      "GetWebHook"
    ],
    "List": [
      "ListApps",
      "ListArtifacts",
      "ListBackendEnvironments",
      "ListBranches",
      "ListDomainAssociations",
      "ListJobs",
      "ListWebHooks"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type apps to the statement
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApps(appId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplify:${Region}:${Account}:apps/${AppId}';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type branches to the statement
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   *
   * @param appId - Identifier for the appId.
   * @param branchName - Identifier for the branchName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBranches(appId: string, branchName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplify:${Region}:${Account}:apps/${AppId}/branches/${BranchName}';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${BranchName}', branchName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type jobs to the statement
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   *
   * @param appId - Identifier for the appId.
   * @param branchName - Identifier for the branchName.
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onJobs(appId: string, branchName: string, jobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplify:${Region}:${Account}:apps/${AppId}/branches/${BranchName}/jobs/${JobId}';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${BranchName}', branchName);
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type domains to the statement
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   *
   * @param appId - Identifier for the appId.
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomains(appId: string, domainName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplify:${Region}:${Account}:apps/${AppId}/domains/${DomainName}';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
