import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [lookoutvision](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutforvision.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Lookoutvision extends PolicyStatement {
  public servicePrefix = 'lookoutvision';

  /**
   * Statement provider for service [lookoutvision](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutforvision.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associates a dataset manifest with a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_CreateDataset.html
   */
  public toCreateDataset() {
    this.to('lookoutvision:CreateDataset');
    return this;
  }

  /**
   * Grants permission to create a new anomaly detection model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_CreateModel.html
   */
  public toCreateModel() {
    this.to('lookoutvision:CreateModel');
    return this;
  }

  /**
   * Grants permission to create a new project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_CreateProject.html
   */
  public toCreateProject() {
    this.to('lookoutvision:CreateProject');
    return this;
  }

  /**
   * Grants permission to delete a dataset associated with a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DeleteDataset.html
   */
  public toDeleteDataset() {
    this.to('lookoutvision:DeleteDataset');
    return this;
  }

  /**
   * Grants permission to delete a model and all associated assets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DeleteModel.html
   */
  public toDeleteModel() {
    this.to('lookoutvision:DeleteModel');
    return this;
  }

  /**
   * Grants permission to permanently remove a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DeleteProject.html
   */
  public toDeleteProject() {
    this.to('lookoutvision:DeleteProject');
    return this;
  }

  /**
   * Grants permission to show detailed information about dataset manifest
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    this.to('lookoutvision:DescribeDataset');
    return this;
  }

  /**
   * Grants permission to show detailed information about a model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeModel.html
   */
  public toDescribeModel() {
    this.to('lookoutvision:DescribeModel');
    return this;
  }

  /**
   * Grants permission to show detailed information about a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeProject.html
   */
  public toDescribeProject() {
    this.to('lookoutvision:DescribeProject');
    return this;
  }

  /**
   * Grants permission to provides state information about a running anomaly detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/trial-detection.html
   */
  public toDescribeTrialDetection() {
    this.to('lookoutvision:DescribeTrialDetection');
    return this;
  }

  /**
   * Grants permission to invoke detection of anomalies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DetectAnomalies.html
   */
  public toDetectAnomalies() {
    this.to('lookoutvision:DetectAnomalies');
    return this;
  }

  /**
   * Grants permission to list the contents of dataset manifest
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListDatasetEntries.html
   */
  public toListDatasetEntries() {
    this.to('lookoutvision:ListDatasetEntries');
    return this;
  }

  /**
   * Grants permission to list all models associated with a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListModels.html
   */
  public toListModels() {
    this.to('lookoutvision:ListModels');
    return this;
  }

  /**
   * Grants permission to list all projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListProjects.html
   */
  public toListProjects() {
    this.to('lookoutvision:ListProjects');
    return this;
  }

  /**
   * Grants permission to list all anomaly detection jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/trial-detection.html
   */
  public toListTrialDetections() {
    this.to('lookoutvision:ListTrialDetections');
    return this;
  }

  /**
   * Grants permission to start anomaly detection model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_StartModel.html
   */
  public toStartModel() {
    this.to('lookoutvision:StartModel');
    return this;
  }

  /**
   * Grants permission to start bulk detection of anomalies for a set of images stored in an S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/trial-detection.html
   */
  public toStartTrialDetection() {
    this.to('lookoutvision:StartTrialDetection');
    return this;
  }

  /**
   * Grants permission to stop anomaly detection model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_StopModel.html
   */
  public toStopModel() {
    this.to('lookoutvision:StopModel');
    return this;
  }

  /**
   * Grants permission to update a training or test dataset manifest
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_UpdateDatasetEntries.html
   */
  public toUpdateDatasetEntries() {
    this.to('lookoutvision:UpdateDatasetEntries');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateDataset",
      "CreateModel",
      "CreateProject",
      "DeleteDataset",
      "DeleteModel",
      "DeleteProject",
      "StartModel",
      "StartTrialDetection",
      "StopModel",
      "UpdateDatasetEntries"
    ],
    "Read": [
      "DescribeDataset",
      "DescribeModel",
      "DescribeProject",
      "DescribeTrialDetection",
      "DetectAnomalies"
    ],
    "List": [
      "ListDatasetEntries",
      "ListModels",
      "ListProjects",
      "ListTrialDetections"
    ]
  };

  /**
   * Adds a resource of type model to the statement
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/model-create-project.html
   *
   * @param projectName - Identifier for the projectName.
   * @param modelVersion - Identifier for the modelVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onModel(projectName: string, modelVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lookoutvision:${Region}:${Account}:model/${ProjectName}/${ModelVersion}';
    arn = arn.replace('${ProjectName}', projectName);
    arn = arn.replace('${ModelVersion}', modelVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/model-create-project.html
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lookoutvision:${Region}:${Account}:project/${ProjectName}';
    arn = arn.replace('${ProjectName}', projectName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type LookoutvisionActionsWrite = 'CreateDataset' | 'CreateModel' | 'CreateProject' | 'DeleteDataset' | 'DeleteModel' | 'DeleteProject' | 'StartModel' | 'StartTrialDetection' | 'StopModel' | 'UpdateDatasetEntries';
export type LookoutvisionActionsRead = 'DescribeDataset' | 'DescribeModel' | 'DescribeProject' | 'DescribeTrialDetection' | 'DetectAnomalies';
export type LookoutvisionActionsList = 'ListDatasetEntries' | 'ListModels' | 'ListProjects' | 'ListTrialDetections';
export type LookoutvisionActions = LookoutvisionActionsWrite | LookoutvisionActionsRead | LookoutvisionActionsList;
