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
   * Grants permission to create a dataset manifest
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_CreateDataset.html
   */
  public toCreateDataset() {
    return this.to('CreateDataset');
  }

  /**
   * Grants permission to create a new anomaly detection model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_CreateModel.html
   */
  public toCreateModel() {
    return this.to('CreateModel');
  }

  /**
   * Grants permission to create a new project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_CreateProject.html
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to delete a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DeleteDataset.html
   */
  public toDeleteDataset() {
    return this.to('DeleteDataset');
  }

  /**
   * Grants permission to delete a model and all associated assets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DeleteModel.html
   */
  public toDeleteModel() {
    return this.to('DeleteModel');
  }

  /**
   * Grants permission to permanently remove a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to show detailed information about dataset manifest
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    return this.to('DescribeDataset');
  }

  /**
   * Grants permission to show detailed information about a model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeModel.html
   */
  public toDescribeModel() {
    return this.to('DescribeModel');
  }

  /**
   * Grants permission to show detailed information about a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeProject.html
   */
  public toDescribeProject() {
    return this.to('DescribeProject');
  }

  /**
   * Grants permission to provides state information about a running anomaly detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/trial-detection.html
   */
  public toDescribeTrialDetection() {
    return this.to('DescribeTrialDetection');
  }

  /**
   * Grants permission to invoke detection of anomalies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DetectAnomalies.html
   */
  public toDetectAnomalies() {
    return this.to('DetectAnomalies');
  }

  /**
   * Grants permission to list the contents of dataset manifest
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListDatasetEntries.html
   */
  public toListDatasetEntries() {
    return this.to('ListDatasetEntries');
  }

  /**
   * Grants permission to list all models associated with a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListModels.html
   */
  public toListModels() {
    return this.to('ListModels');
  }

  /**
   * Grants permission to list all projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListProjects.html
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grant permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all anomaly detection jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/trial-detection.html
   */
  public toListTrialDetections() {
    return this.to('ListTrialDetections');
  }

  /**
   * Grants permission to start anomaly detection model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_StartModel.html
   */
  public toStartModel() {
    return this.to('StartModel');
  }

  /**
   * Grants permission to start bulk detection of anomalies for a set of images stored in an S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/trial-detection.html
   */
  public toStartTrialDetection() {
    return this.to('StartTrialDetection');
  }

  /**
   * Grants permission to stop anomaly detection model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_StopModel.html
   */
  public toStopModel() {
    return this.to('StopModel');
  }

  /**
   * Grant permission to tag a resource with given key value pairs
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grant permission to remove the tag with the given key from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a training or test dataset manifest
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_UpdateDatasetEntries.html
   */
  public toUpdateDatasetEntries() {
    return this.to('UpdateDatasetEntries');
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
      "DetectAnomalies",
      "ListDatasetEntries",
      "ListTagsForResource"
    ],
    "List": [
      "ListModels",
      "ListProjects",
      "ListTrialDetections"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
