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
    this.to('deeplens:AssociateServiceRoleToAccount');
    return this;
  }

  /**
   * Retrieves a list of AWS DeepLens devices.
   *
   * Access Level: Read
   */
  public toBatchGetDevice() {
    this.to('deeplens:BatchGetDevice');
    return this;
  }

  /**
   * Retrieves a list of AWS DeepLens Models.
   *
   * Access Level: Read
   */
  public toBatchGetModel() {
    this.to('deeplens:BatchGetModel');
    return this;
  }

  /**
   * Retrieves a list of AWS DeepLens Projects.
   *
   * Access Level: Read
   */
  public toBatchGetProject() {
    this.to('deeplens:BatchGetProject');
    return this;
  }

  /**
   * Creates a certificate package that is used to successfully authenticate and Register an AWS DeepLens device.
   *
   * Access Level: Write
   */
  public toCreateDeviceCertificates() {
    this.to('deeplens:CreateDeviceCertificates');
    return this;
  }

  /**
   * Creates a new AWS DeepLens Model.
   *
   * Access Level: Write
   */
  public toCreateModel() {
    this.to('deeplens:CreateModel');
    return this;
  }

  /**
   * Creates a new AWS DeepLens Project.
   *
   * Access Level: Write
   */
  public toCreateProject() {
    this.to('deeplens:CreateProject');
    return this;
  }

  /**
   * Deletes an AWS DeepLens Model.
   *
   * Access Level: Write
   */
  public toDeleteModel() {
    this.to('deeplens:DeleteModel');
    return this;
  }

  /**
   * Deletes an AWS DeepLens Project.
   *
   * Access Level: Write
   */
  public toDeleteProject() {
    this.to('deeplens:DeleteProject');
    return this;
  }

  /**
   * Deploys an AWS DeepLens project to a registered AWS DeepLens device.
   *
   * Access Level: Write
   */
  public toDeployProject() {
    this.to('deeplens:DeployProject');
    return this;
  }

  /**
   * Begins a device de-registration workflow for a registered AWS DeepLens device.
   *
   * Access Level: Write
   */
  public toDeregisterDevice() {
    this.to('deeplens:DeregisterDevice');
    return this;
  }

  /**
   * Retrieves the account level resources associated with the user's account.
   *
   * Access Level: Read
   */
  public toGetAssociatedResources() {
    this.to('deeplens:GetAssociatedResources');
    return this;
  }

  /**
   * Retrieves the the deployment status of a particular AWS DeepLens device, along with any associated metadata.
   *
   * Access Level: Read
   */
  public toGetDeploymentStatus() {
    this.to('deeplens:GetDeploymentStatus');
    return this;
  }

  /**
   * Retrieves information about an AWS DeepLens device.
   *
   * Access Level: Read
   */
  public toGetDevice() {
    this.to('deeplens:GetDevice');
    return this;
  }

  /**
   * Retrieves an AWS DeepLens Model.
   *
   * Access Level: Read
   */
  public toGetModel() {
    this.to('deeplens:GetModel');
    return this;
  }

  /**
   * Retrieves an AWS DeepLens Project.
   *
   * Access Level: Read
   */
  public toGetProject() {
    this.to('deeplens:GetProject');
    return this;
  }

  /**
   * Creates a new AWS DeepLens project from a sample project template.
   *
   * Access Level: Write
   */
  public toImportProjectFromTemplate() {
    this.to('deeplens:ImportProjectFromTemplate');
    return this;
  }

  /**
   * Retrieves a list of AWS DeepLens Deployment identifiers.
   *
   * Access Level: List
   */
  public toListDeployments() {
    this.to('deeplens:ListDeployments');
    return this;
  }

  /**
   * Retrieves a list of AWS DeepLens device identifiers.
   *
   * Access Level: List
   */
  public toListDevices() {
    this.to('deeplens:ListDevices');
    return this;
  }

  /**
   * Retrieves a list of AWS DeepLens Model identifiers.
   *
   * Access Level: List
   */
  public toListModels() {
    this.to('deeplens:ListModels');
    return this;
  }

  /**
   * Retrieves a list of AWS DeepLens Project identifiers.
   *
   * Access Level: List
   */
  public toListProjects() {
    this.to('deeplens:ListProjects');
    return this;
  }

  /**
   * Begins a device registration workflow for an AWS DeepLens device.
   *
   * Access Level: Write
   */
  public toRegisterDevice() {
    this.to('deeplens:RegisterDevice');
    return this;
  }

  /**
   * Removes a deployed AWS DeepLens project from an AWS DeepLens device.
   *
   * Access Level: Write
   */
  public toRemoveProject() {
    this.to('deeplens:RemoveProject');
    return this;
  }

  /**
   * Updates an existing AWS DeepLens Project.
   *
   * Access Level: Write
   */
  public toUpdateProject() {
    this.to('deeplens:UpdateProject');
    return this;
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

export type DeeplensActionsPermissionsManagement = 'AssociateServiceRoleToAccount';
export type DeeplensActionsRead = 'BatchGetDevice' | 'BatchGetModel' | 'BatchGetProject' | 'GetAssociatedResources' | 'GetDeploymentStatus' | 'GetDevice' | 'GetModel' | 'GetProject';
export type DeeplensActionsWrite = 'CreateDeviceCertificates' | 'CreateModel' | 'CreateProject' | 'DeleteModel' | 'DeleteProject' | 'DeployProject' | 'DeregisterDevice' | 'ImportProjectFromTemplate' | 'RegisterDevice' | 'RemoveProject' | 'UpdateProject';
export type DeeplensActionsList = 'ListDeployments' | 'ListDevices' | 'ListModels' | 'ListProjects';
export type DeeplensActions = DeeplensActionsPermissionsManagement | DeeplensActionsRead | DeeplensActionsWrite | DeeplensActionsList;
