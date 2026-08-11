import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
  constructor(sid?: string) {
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
   * Grants permission to show detailed information about a model packaging job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeModelPackagingJob.html
   */
  public toDescribeModelPackagingJob() {
    return this.to('DescribeModelPackagingJob');
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
   * Access Level: Write
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
   * Grants permission to list all model packaging jobs associated with a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListModelPackagingJobs.html
   */
  public toListModelPackagingJobs() {
    return this.to('ListModelPackagingJobs');
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
   * Grants permission to list tags for a resource
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
   * Grants permission to start a model packaging job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_StartModelPackagingJob.html
   */
  public toStartModelPackagingJob() {
    return this.to('StartModelPackagingJob');
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
   * Grants permission to tag a resource with given key value pairs
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
   * Grants permission to remove the tag with the given key from a resource
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
    Write: [
      'CreateDataset',
      'CreateModel',
      'CreateProject',
      'DeleteDataset',
      'DeleteModel',
      'DeleteProject',
      'DetectAnomalies',
      'StartModel',
      'StartModelPackagingJob',
      'StartTrialDetection',
      'StopModel',
      'UpdateDatasetEntries'
    ],
    Read: [
      'DescribeDataset',
      'DescribeModel',
      'DescribeModelPackagingJob',
      'DescribeProject',
      'DescribeTrialDetection',
      'ListDatasetEntries',
      'ListTagsForResource'
    ],
    List: [
      'ListModelPackagingJobs',
      'ListModels',
      'ListProjects',
      'ListTrialDetections'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type model to the statement
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/model-create-project.html
   *
   * @param projectName - Identifier for the projectName.
   * @param modelVersion - Identifier for the modelVersion.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModel(projectName: string, modelVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lookoutvision:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:model/${ projectName }/${ modelVersion }`);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/model-create-project.html
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lookoutvision:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:project/${ projectName }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateModel()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - model
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateModel()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
