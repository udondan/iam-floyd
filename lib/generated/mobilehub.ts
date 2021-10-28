import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [mobilehub](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmobilehub.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mobilehub extends PolicyStatement {
  public servicePrefix = 'mobilehub';

  /**
   * Statement provider for service [mobilehub](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmobilehub.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Create a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Enable AWS Mobile Hub in the account by creating the required service role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toCreateServiceRole() {
    return this.to('CreateServiceRole');
  }

  /**
   * Delete the specified project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Delete a saved snapshot of project configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toDeleteProjectSnapshot() {
    return this.to('DeleteProjectSnapshot');
  }

  /**
   * Deploy changes to the specified stage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toDeployToStage() {
    return this.to('DeployToStage');
  }

  /**
   * Describe the download bundle
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toDescribeBundle() {
    return this.to('DescribeBundle');
  }

  /**
   * Export the download bundle
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toExportBundle() {
    return this.to('ExportBundle');
  }

  /**
   * Export the project configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toExportProject() {
    return this.to('ExportProject');
  }

  /**
   * Generate project parameters required for code generation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toGenerateProjectParameters() {
    return this.to('GenerateProjectParameters');
  }

  /**
   * Get project configuration and resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toGetProject() {
    return this.to('GetProject');
  }

  /**
   * Fetch the previously exported project configuration snapshot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toGetProjectSnapshot() {
    return this.to('GetProjectSnapshot');
  }

  /**
   * Create a new project from the previously exported project configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toImportProject() {
    return this.to('ImportProject');
  }

  /**
   * Install a bundle in the project deployments S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toInstallBundle() {
    return this.to('InstallBundle');
  }

  /**
   * List the available SaaS (Software as a Service) connectors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListAvailableConnectors() {
    return this.to('ListAvailableConnectors');
  }

  /**
   * List available features
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListAvailableFeatures() {
    return this.to('ListAvailableFeatures');
  }

  /**
   * List available regions for projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListAvailableRegions() {
    return this.to('ListAvailableRegions');
  }

  /**
   * List the available download bundles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListBundles() {
    return this.to('ListBundles');
  }

  /**
   * List saved snapshots of project configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListProjectSnapshots() {
    return this.to('ListProjectSnapshots');
  }

  /**
   * List projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Synchronize state of resources into project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toSynchronizeProject() {
    return this.to('SynchronizeProject');
  }

  /**
   * Update project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  /**
   * Validate a mobile hub project.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toValidateProject() {
    return this.to('ValidateProject');
  }

  /**
   * Verify AWS Mobile Hub is enabled in the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toVerifyServiceRole() {
    return this.to('VerifyServiceRole');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateProject',
      'CreateServiceRole',
      'DeleteProject',
      'DeleteProjectSnapshot',
      'DeployToStage',
      'ImportProject',
      'InstallBundle',
      'SynchronizeProject',
      'UpdateProject'
    ],
    Read: [
      'DescribeBundle',
      'ExportBundle',
      'ExportProject',
      'GenerateProjectParameters',
      'GetProject',
      'GetProjectSnapshot',
      'ValidateProject',
      'VerifyServiceRole'
    ],
    List: [
      'ListAvailableConnectors',
      'ListAvailableFeatures',
      'ListAvailableRegions',
      'ListBundles',
      'ListProjectSnapshots',
      'ListProjects'
    ]
  };

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/reference-mobile-hub-iam-managed-policies.html
   *
   * @param projectId - Identifier for the projectId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProject(projectId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mobilehub:${ region || '*' }:${ account || '*' }:project/${ projectId }`);
  }
}
