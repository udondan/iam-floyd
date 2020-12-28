import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [deeplens](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Deeplens extends PolicyStatement {
  public servicePrefix = 'deeplens';

  /**
   * Statement provider for service [deeplens](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associates the user's account with IAM roles controlling various permissions needed by AWS DeepLens for proper functionality.
   *
   * Access Level: Permissions management
   */
  public toAssociateServiceRoleToAccount() {
    return this.to('AssociateServiceRoleToAccount');
  }

  /**
   * Retrieves a list of AWS DeepLens devices.
   *
   * Access Level: Read
   */
  public toBatchGetDevice() {
    return this.to('BatchGetDevice');
  }

  /**
   * Retrieves a list of AWS DeepLens Models.
   *
   * Access Level: Read
   */
  public toBatchGetModel() {
    return this.to('BatchGetModel');
  }

  /**
   * Retrieves a list of AWS DeepLens Projects.
   *
   * Access Level: Read
   */
  public toBatchGetProject() {
    return this.to('BatchGetProject');
  }

  /**
   * Creates a certificate package that is used to successfully authenticate and Register an AWS DeepLens device.
   *
   * Access Level: Write
   */
  public toCreateDeviceCertificates() {
    return this.to('CreateDeviceCertificates');
  }

  /**
   * Creates a new AWS DeepLens Model.
   *
   * Access Level: Write
   */
  public toCreateModel() {
    return this.to('CreateModel');
  }

  /**
   * Creates a new AWS DeepLens Project.
   *
   * Access Level: Write
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Deletes an AWS DeepLens Model.
   *
   * Access Level: Write
   */
  public toDeleteModel() {
    return this.to('DeleteModel');
  }

  /**
   * Deletes an AWS DeepLens Project.
   *
   * Access Level: Write
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Deploys an AWS DeepLens project to a registered AWS DeepLens device.
   *
   * Access Level: Write
   */
  public toDeployProject() {
    return this.to('DeployProject');
  }

  /**
   * Begins a device de-registration workflow for a registered AWS DeepLens device.
   *
   * Access Level: Write
   */
  public toDeregisterDevice() {
    return this.to('DeregisterDevice');
  }

  /**
   * Retrieves the account level resources associated with the user's account.
   *
   * Access Level: Read
   */
  public toGetAssociatedResources() {
    return this.to('GetAssociatedResources');
  }

  /**
   * Retrieves the the deployment status of a particular AWS DeepLens device, along with any associated metadata.
   *
   * Access Level: Read
   */
  public toGetDeploymentStatus() {
    return this.to('GetDeploymentStatus');
  }

  /**
   * Retrieves information about an AWS DeepLens device.
   *
   * Access Level: Read
   */
  public toGetDevice() {
    return this.to('GetDevice');
  }

  /**
   * Retrieves an AWS DeepLens Model.
   *
   * Access Level: Read
   */
  public toGetModel() {
    return this.to('GetModel');
  }

  /**
   * Retrieves an AWS DeepLens Project.
   *
   * Access Level: Read
   */
  public toGetProject() {
    return this.to('GetProject');
  }

  /**
   * Creates a new AWS DeepLens project from a sample project template.
   *
   * Access Level: Write
   */
  public toImportProjectFromTemplate() {
    return this.to('ImportProjectFromTemplate');
  }

  /**
   * Retrieves a list of AWS DeepLens Deployment identifiers.
   *
   * Access Level: List
   */
  public toListDeployments() {
    return this.to('ListDeployments');
  }

  /**
   * Retrieves a list of AWS DeepLens device identifiers.
   *
   * Access Level: List
   */
  public toListDevices() {
    return this.to('ListDevices');
  }

  /**
   * Retrieves a list of AWS DeepLens Model identifiers.
   *
   * Access Level: List
   */
  public toListModels() {
    return this.to('ListModels');
  }

  /**
   * Retrieves a list of AWS DeepLens Project identifiers.
   *
   * Access Level: List
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Begins a device registration workflow for an AWS DeepLens device.
   *
   * Access Level: Write
   */
  public toRegisterDevice() {
    return this.to('RegisterDevice');
  }

  /**
   * Removes a deployed AWS DeepLens project from an AWS DeepLens device.
   *
   * Access Level: Write
   */
  public toRemoveProject() {
    return this.to('RemoveProject');
  }

  /**
   * Updates an existing AWS DeepLens Project.
   *
   * Access Level: Write
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  protected accessLevelList: AccessLevelList = {
    "Permissions management": [
      "AssociateServiceRoleToAccount"
    ],
    "Read": [
      "BatchGetDevice",
      "BatchGetModel",
      "BatchGetProject",
      "GetAssociatedResources",
      "GetDeploymentStatus",
      "GetDevice",
      "GetModel",
      "GetProject"
    ],
    "Write": [
      "CreateDeviceCertificates",
      "CreateModel",
      "CreateProject",
      "DeleteModel",
      "DeleteProject",
      "DeployProject",
      "DeregisterDevice",
      "ImportProjectFromTemplate",
      "RegisterDevice",
      "RemoveProject",
      "UpdateProject"
    ],
    "List": [
      "ListDeployments",
      "ListDevices",
      "ListModels",
      "ListProjects"
    ]
  };

  /**
   * Adds a resource of type device to the statement
   *
   * @param deviceName - Identifier for the deviceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDevice(deviceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deeplens:${Region}:${Account}:device/${DeviceName}';
    arn = arn.replace('${DeviceName}', deviceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deeplens:${Region}:${Account}:project/${ProjectName}';
    arn = arn.replace('${ProjectName}', projectName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type model to the statement
   *
   * @param modelName - Identifier for the modelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onModel(modelName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deeplens:${Region}:${Account}:model/${ModelName}';
    arn = arn.replace('${ModelName}', modelName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
