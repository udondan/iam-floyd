import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
   * Grants permission to create a retraining scheduler for a trained model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_CreateRetrainingScheduler.html
   */
  public toCreateRetrainingScheduler() {
    return this.to('CreateRetrainingScheduler');
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
   * Grants permission to delete a resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a retraining scheduler of a trained model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DeleteRetrainingScheduler.html
   */
  public toDeleteRetrainingScheduler() {
    return this.to('DeleteRetrainingScheduler');
  }

  /**
   * Grants permission to describe a data ingestion job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DescribeDataIngestionJob.html
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
   * Grants permission to describe a model version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DescribeModelVersion.html
   */
  public toDescribeModelVersion() {
    return this.to('DescribeModelVersion');
  }

  /**
   * Grants permission to describe a resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DescribeResourcePolicy.html
   */
  public toDescribeResourcePolicy() {
    return this.to('DescribeResourcePolicy');
  }

  /**
   * Grants permission to describe a retraining scheduler of a trained model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DescribeRetrainingScheduler.html
   */
  public toDescribeRetrainingScheduler() {
    return this.to('DescribeRetrainingScheduler');
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
   * Grants permission to import a dataset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ImportDataset.html
   */
  public toImportDataset() {
    return this.to('ImportDataset');
  }

  /**
   * Grants permission to import a model version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifIsImportingData()
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ImportModelVersion.html
   */
  public toImportModelVersion() {
    return this.to('ImportModelVersion');
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
   * Grants permission to list the inference events for an inference scheduler
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListInferenceEvents.html
   */
  public toListInferenceEvents() {
    return this.to('ListInferenceEvents');
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
   * Grants permission to list the model versions in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListModelVersions.html
   */
  public toListModelVersions() {
    return this.to('ListModelVersions');
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
   * Grants permission to list the retraining schedulers in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListRetrainingSchedulers.html
   */
  public toListRetrainingSchedulers() {
    return this.to('ListRetrainingSchedulers');
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
   * Grants permission to put a resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
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
   * Grants permission to start a retraining scheduler of a trained model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_StartRetrainingScheduler.html
   */
  public toStartRetrainingScheduler() {
    return this.to('StartRetrainingScheduler');
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
   * Grants permission to stop a retraining scheduler of a trained model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_StopRetrainingScheduler.html
   */
  public toStopRetrainingScheduler() {
    return this.to('StopRetrainingScheduler');
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
   * Grants permission to set the active model version for a given machine learning model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_UpdateActiveModelVersion.html
   */
  public toUpdateActiveModelVersion() {
    return this.to('UpdateActiveModelVersion');
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

  /**
   * Grants permission to update a trained model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_UpdateModel.html
   */
  public toUpdateModel() {
    return this.to('UpdateModel');
  }

  /**
   * Grants permission to update a retraining scheduler of a trained model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_UpdateRetrainingScheduler.html
   */
  public toUpdateRetrainingScheduler() {
    return this.to('UpdateRetrainingScheduler');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateDataset',
      'CreateInferenceScheduler',
      'CreateLabel',
      'CreateLabelGroup',
      'CreateModel',
      'CreateRetrainingScheduler',
      'DeleteDataset',
      'DeleteInferenceScheduler',
      'DeleteLabel',
      'DeleteLabelGroup',
      'DeleteModel',
      'DeleteResourcePolicy',
      'DeleteRetrainingScheduler',
      'ImportDataset',
      'ImportModelVersion',
      'PutResourcePolicy',
      'StartDataIngestionJob',
      'StartInferenceScheduler',
      'StartRetrainingScheduler',
      'StopInferenceScheduler',
      'StopRetrainingScheduler',
      'UpdateActiveModelVersion',
      'UpdateInferenceScheduler',
      'UpdateLabelGroup',
      'UpdateModel',
      'UpdateRetrainingScheduler'
    ],
    Read: [
      'DescribeDataIngestionJob',
      'DescribeDataset',
      'DescribeInferenceScheduler',
      'DescribeLabelGroup',
      'DescribeModel',
      'DescribeModelVersion',
      'DescribeResourcePolicy',
      'DescribeRetrainingScheduler',
      'Describelabel',
      'ListInferenceEvents',
      'ListInferenceExecutions',
      'ListTagsForResource'
    ],
    List: [
      'ListDataIngestionJobs',
      'ListDatasets',
      'ListInferenceSchedulers',
      'ListLabelGroups',
      'ListLabels',
      'ListModelVersions',
      'ListModels',
      'ListRetrainingSchedulers',
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
   * Adds a resource of type model-version to the statement
   *
   * https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/model-version.html
   *
   * @param modelName - Identifier for the modelName.
   * @param modelId - Identifier for the modelId.
   * @param modelVersionNumber - Identifier for the modelVersionNumber.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModelVersion(modelName: string, modelId: string, modelVersionNumber: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lookoutequipment.defaultPartition }:lookoutequipment:${ region || '*' }:${ account || '*' }:model/${ modelName }/${ modelId }/model-version/${ modelVersionNumber }`);
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

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateDataset()
   * - .toCreateInferenceScheduler()
   * - .toCreateLabelGroup()
   * - .toCreateModel()
   * - .toImportDataset()
   * - .toImportModelVersion()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - dataset
   * - model
   * - model-version
   * - inference-scheduler
   * - label-group
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateDataset()
   * - .toCreateInferenceScheduler()
   * - .toCreateLabelGroup()
   * - .toCreateModel()
   * - .toImportDataset()
   * - .toImportModelVersion()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the import strategy of underlying data
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-isimportingdata
   *
   * Applies to actions:
   * - .toImportModelVersion()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifIsImportingData(value?: boolean) {
    return this.if(`IsImportingData`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }
}
