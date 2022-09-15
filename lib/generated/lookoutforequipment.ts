import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [lookoutequipment](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutforequipment.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Lookoutequipment extends PolicyStatement {
  public servicePrefix = 'lookoutequipment';

  /**
   * Statement provider for service [lookoutequipment](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutforequipment.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a dataset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_CreateDataset.html
   */
  public toCreateDataset() {
    return this.to('CreateDataset');
  }

  /**
   * Grants permission to create an inference scheduler for a trained model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_CreateInferenceScheduler.html
   */
  public toCreateInferenceScheduler() {
    return this.to('CreateInferenceScheduler');
  }

  /**
   * Grants permission to create a label
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_CreateLabel.html
   */
  public toCreateLabel() {
    return this.to('CreateLabel');
  }

  /**
   * Grants permission to create a label group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_CreateLabelGroup.html
   */
  public toCreateLabelGroup() {
    return this.to('CreateLabelGroup');
  }

  /**
   * Grants permission to create a model that is trained on a dataset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_CreateModel.html
   */
  public toCreateModel() {
    return this.to('CreateModel');
  }

  /**
   * Grants permission to delete a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DeleteDataset.html
   */
  public toDeleteDataset() {
    return this.to('DeleteDataset');
  }

  /**
   * Grants permission to delete an inference scheduler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DeleteInferenceScheduler.html
   */
  public toDeleteInferenceScheduler() {
    return this.to('DeleteInferenceScheduler');
  }

  /**
   * Grants permission to delete a label
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DeleteLabel.html
   */
  public toDeleteLabel() {
    return this.to('DeleteLabel');
  }

  /**
   * Grants permission to delete a label group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DeleteLabelGroup.html
   */
  public toDeleteLabelGroup() {
    return this.to('DeleteLabelGroup');
  }

  /**
   * Grants permission to delete a model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DeleteModel.html
   */
  public toDeleteModel() {
    return this.to('DeleteModel');
  }

  /**
   * Grants permission to describe a data ingestion job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DescribeDataIngestionJob
   */
  public toDescribeDataIngestionJob() {
    return this.to('DescribeDataIngestionJob');
  }

  /**
   * Grants permission to describe a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    return this.to('DescribeDataset');
  }

  /**
   * Grants permission to describe an inference scheduler
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DescribeInferenceScheduler.html
   */
  public toDescribeInferenceScheduler() {
    return this.to('DescribeInferenceScheduler');
  }

  /**
   * Grants permission to describe a label group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DescribeLabelGroup.html
   */
  public toDescribeLabelGroup() {
    return this.to('DescribeLabelGroup');
  }

  /**
   * Grants permission to describe a model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DescribeModel.html
   */
  public toDescribeModel() {
    return this.to('DescribeModel');
  }

  /**
   * Grants permission to describe a label
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DescribeLabel.html
   */
  public toDescribelabel() {
    return this.to('Describelabel');
  }

  /**
   * Grants permission to list the data ingestion jobs in your account or for a particular dataset
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListDataIngestionJobs.html
   */
  public toListDataIngestionJobs() {
    return this.to('ListDataIngestionJobs');
  }

  /**
   * Grants permission to list the datasets in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListDatasets.html
   */
  public toListDatasets() {
    return this.to('ListDatasets');
  }

  /**
   * Grants permission to list the inference executions for an inference scheduler
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListInferenceExecutions.html
   */
  public toListInferenceExecutions() {
    return this.to('ListInferenceExecutions');
  }

  /**
   * Grants permission to list the inference schedulers in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListInferenceSchedulers.html
   */
  public toListInferenceSchedulers() {
    return this.to('ListInferenceSchedulers');
  }

  /**
   * Grants permission to list the label groups in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListLabelGroups.html
   */
  public toListLabelGroups() {
    return this.to('ListLabelGroups');
  }

  /**
   * Grants permission to list the labels in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListLabels.html
   */
  public toListLabels() {
    return this.to('ListLabels');
  }

  /**
   * Grants permission to list the models in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListModels.html
   */
  public toListModels() {
    return this.to('ListModels');
  }

  /**
   * Grants permission to list the sensor statistics for a particular dataset or an ingestion job
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListSensorStatistics.html
   */
  public toListSensorStatistics() {
    return this.to('ListSensorStatistics');
  }

  /**
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start a data ingestion job for a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_StartDataIngestionJob.html
   */
  public toStartDataIngestionJob() {
    return this.to('StartDataIngestionJob');
  }

  /**
   * Grants permission to start an inference scheduler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_StartInferenceScheduler.html
   */
  public toStartInferenceScheduler() {
    return this.to('StartInferenceScheduler');
  }

  /**
   * Grants permission to stop an inference scheduler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_StopInferenceScheduler.html
   */
  public toStopInferenceScheduler() {
    return this.to('StopInferenceScheduler');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an inference scheduler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_UpdateInferenceScheduler.html
   */
  public toUpdateInferenceScheduler() {
    return this.to('UpdateInferenceScheduler');
  }

  /**
   * Grants permission to update a label group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_UpdateLabelGroup.html
   */
  public toUpdateLabelGroup() {
    return this.to('UpdateLabelGroup');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateDataset',
      'CreateInferenceScheduler',
      'CreateLabel',
      'CreateLabelGroup',
      'CreateModel',
      'DeleteDataset',
      'DeleteInferenceScheduler',
      'DeleteLabel',
      'DeleteLabelGroup',
      'DeleteModel',
      'StartDataIngestionJob',
      'StartInferenceScheduler',
      'StopInferenceScheduler',
      'UpdateInferenceScheduler',
      'UpdateLabelGroup'
    ],
    Read: [
      'DescribeDataIngestionJob',
      'DescribeDataset',
      'DescribeInferenceScheduler',
      'DescribeLabelGroup',
      'DescribeModel',
      'Describelabel',
      'ListInferenceExecutions',
      'ListTagsForResource'
    ],
    List: [
      'ListDataIngestionJobs',
      'ListDatasets',
      'ListInferenceSchedulers',
      'ListLabelGroups',
      'ListLabels',
      'ListModels',
      'ListSensorStatistics'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type dataset to the statement
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/dataset.html
   *
   * @param datasetName - Identifier for the datasetName.
   * @param datasetId - Identifier for the datasetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataset(datasetName: string, datasetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lookoutequipment.defaultPartition }:lookoutequipment:${ region || '*' }:${ account || '*' }:dataset/${ datasetName }/${ datasetId }`);
  }

  /**
   * Adds a resource of type model to the statement
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/model.html
   *
   * @param modelName - Identifier for the modelName.
   * @param modelId - Identifier for the modelId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModel(modelName: string, modelId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lookoutequipment.defaultPartition }:lookoutequipment:${ region || '*' }:${ account || '*' }:model/${ modelName }/${ modelId }`);
  }

  /**
   * Adds a resource of type inference-scheduler to the statement
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/inference-scheduler.html
   *
   * @param inferenceSchedulerName - Identifier for the inferenceSchedulerName.
   * @param inferenceSchedulerId - Identifier for the inferenceSchedulerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInferenceScheduler(inferenceSchedulerName: string, inferenceSchedulerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lookoutequipment.defaultPartition }:lookoutequipment:${ region || '*' }:${ account || '*' }:inference-scheduler/${ inferenceSchedulerName }/${ inferenceSchedulerId }`);
  }

  /**
   * Adds a resource of type label-group to the statement
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/label-group.html
   *
   * @param labelGroupName - Identifier for the labelGroupName.
   * @param labelGroupId - Identifier for the labelGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLabelGroup(labelGroupName: string, labelGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lookoutequipment.defaultPartition }:lookoutequipment:${ region || '*' }:${ account || '*' }:label-group/${ labelGroupName }/${ labelGroupId }`);
  }
}
