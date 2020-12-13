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
  constructor (sid?: string) {
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
    this.to('mobilehub:CreateProject');
    return this;
  }

  /**
   * Enable AWS Mobile Hub in the account by creating the required service role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toCreateServiceRole() {
    this.to('mobilehub:CreateServiceRole');
    return this;
  }

  /**
   * Delete the specified project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toDeleteProject() {
    this.to('mobilehub:DeleteProject');
    return this;
  }

  /**
   * Delete a saved snapshot of project configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toDeleteProjectSnapshot() {
    this.to('mobilehub:DeleteProjectSnapshot');
    return this;
  }

  /**
   * Deploy changes to the specified stage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toDeployToStage() {
    this.to('mobilehub:DeployToStage');
    return this;
  }

  /**
   * Describe the download bundle
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toDescribeBundle() {
    this.to('mobilehub:DescribeBundle');
    return this;
  }

  /**
   * Export the download bundle
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toExportBundle() {
    this.to('mobilehub:ExportBundle');
    return this;
  }

  /**
   * Export the project configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toExportProject() {
    this.to('mobilehub:ExportProject');
    return this;
  }

  /**
   * Generate project parameters required for code generation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toGenerateProjectParameters() {
    this.to('mobilehub:GenerateProjectParameters');
    return this;
  }

  /**
   * Get project configuration and resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toGetProject() {
    this.to('mobilehub:GetProject');
    return this;
  }

  /**
   * Fetch the previously exported project configuration snapshot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toGetProjectSnapshot() {
    this.to('mobilehub:GetProjectSnapshot');
    return this;
  }

  /**
   * Create a new project from the previously exported project configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toImportProject() {
    this.to('mobilehub:ImportProject');
    return this;
  }

  /**
   * Install a bundle in the project deployments S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toInstallBundle() {
    this.to('mobilehub:InstallBundle');
    return this;
  }

  /**
   * List the available SaaS (Software as a Service) connectors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListAvailableConnectors() {
    this.to('mobilehub:ListAvailableConnectors');
    return this;
  }

  /**
   * List available features
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListAvailableFeatures() {
    this.to('mobilehub:ListAvailableFeatures');
    return this;
  }

  /**
   * List available regions for projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListAvailableRegions() {
    this.to('mobilehub:ListAvailableRegions');
    return this;
  }

  /**
   * List the available download bundles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListBundles() {
    this.to('mobilehub:ListBundles');
    return this;
  }

  /**
   * List saved snapshots of project configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListProjectSnapshots() {
    this.to('mobilehub:ListProjectSnapshots');
    return this;
  }

  /**
   * List projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toListProjects() {
    this.to('mobilehub:ListProjects');
    return this;
  }

  /**
   * Synchronize state of resources into project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toSynchronizeProject() {
    this.to('mobilehub:SynchronizeProject');
    return this;
  }

  /**
   * Update project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toUpdateProject() {
    this.to('mobilehub:UpdateProject');
    return this;
  }

  /**
   * Validate a mobile hub project.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toValidateProject() {
    this.to('mobilehub:ValidateProject');
    return this;
  }

  /**
   * Verify AWS Mobile Hub is enabled in the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  public toVerifyServiceRole() {
    this.to('mobilehub:VerifyServiceRole');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateProject",
      "CreateServiceRole",
      "DeleteProject",
      "DeleteProjectSnapshot",
      "DeployToStage",
      "ImportProject",
      "InstallBundle",
      "SynchronizeProject",
      "UpdateProject"
    ],
    "Read": [
      "DescribeBundle",
      "ExportBundle",
      "ExportProject",
      "GenerateProjectParameters",
      "GetProject",
      "GetProjectSnapshot",
      "ValidateProject",
      "VerifyServiceRole"
    ],
    "List": [
      "ListAvailableConnectors",
      "ListAvailableFeatures",
      "ListAvailableRegions",
      "ListBundles",
      "ListProjectSnapshots",
      "ListProjects"
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
    var arn = 'arn:${Partition}:mobilehub:${Region}:${Account}:project/${ProjectId}';
    arn = arn.replace('${ProjectId}', projectId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
