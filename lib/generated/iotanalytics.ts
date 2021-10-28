import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [iotanalytics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotanalytics.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotanalytics extends PolicyStatement {
  public servicePrefix = 'iotanalytics';

  /**
   * Statement provider for service [iotanalytics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotanalytics.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Puts a batch of messages into the specified channel.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_BatchPutMessage.html
   */
  public toBatchPutMessage() {
    return this.to('BatchPutMessage');
  }

  /**
   * Cancels reprocessing for the specified pipeline.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CancelPipelineReprocessing.html
   */
  public toCancelPipelineReprocessing() {
    return this.to('CancelPipelineReprocessing');
  }

  /**
   * Creates a channel.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateChannel.html
   */
  public toCreateChannel() {
    return this.to('CreateChannel');
  }

  /**
   * Creates a dataset.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDataset.html
   */
  public toCreateDataset() {
    return this.to('CreateDataset');
  }

  /**
   * Generates content of the specified dataset (by executing the dataset actions).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDatasetContent.html
   */
  public toCreateDatasetContent() {
    return this.to('CreateDatasetContent');
  }

  /**
   * Creates a datastore.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDatastore.html
   */
  public toCreateDatastore() {
    return this.to('CreateDatastore');
  }

  /**
   * Creates a pipeline.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreatePipeline.html
   */
  public toCreatePipeline() {
    return this.to('CreatePipeline');
  }

  /**
   * Deletes the specified channel.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteChannel.html
   */
  public toDeleteChannel() {
    return this.to('DeleteChannel');
  }

  /**
   * Deletes the specified dataset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDataset.html
   */
  public toDeleteDataset() {
    return this.to('DeleteDataset');
  }

  /**
   * Deletes the content of the specified dataset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDatasetContent.html
   */
  public toDeleteDatasetContent() {
    return this.to('DeleteDatasetContent');
  }

  /**
   * Deletes the specified datastore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDatastore.html
   */
  public toDeleteDatastore() {
    return this.to('DeleteDatastore');
  }

  /**
   * Deletes the specified pipeline.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeletePipeline.html
   */
  public toDeletePipeline() {
    return this.to('DeletePipeline');
  }

  /**
   * Describes the specified channel.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeChannel.html
   */
  public toDescribeChannel() {
    return this.to('DescribeChannel');
  }

  /**
   * Describes the specified dataset.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    return this.to('DescribeDataset');
  }

  /**
   * Describes the specified datastore.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeDatastore.html
   */
  public toDescribeDatastore() {
    return this.to('DescribeDatastore');
  }

  /**
   * Describes logging options for the the account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeLoggingOptions.html
   */
  public toDescribeLoggingOptions() {
    return this.to('DescribeLoggingOptions');
  }

  /**
   * Describes the specified pipeline.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribePipeline.html
   */
  public toDescribePipeline() {
    return this.to('DescribePipeline');
  }

  /**
   * Gets the content of the specified dataset.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_GetDatasetContent.html
   */
  public toGetDatasetContent() {
    return this.to('GetDatasetContent');
  }

  /**
   * Lists the channels for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListChannels.html
   */
  public toListChannels() {
    return this.to('ListChannels');
  }

  /**
   * Lists information about dataset contents that have been created.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatasetContents.html
   */
  public toListDatasetContents() {
    return this.to('ListDatasetContents');
  }

  /**
   * Lists the datasets for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatasets.html
   */
  public toListDatasets() {
    return this.to('ListDatasets');
  }

  /**
   * Lists the datastores for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatastores.html
   */
  public toListDatastores() {
    return this.to('ListDatastores');
  }

  /**
   * Lists the pipelines for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListPipelines.html
   */
  public toListPipelines() {
    return this.to('ListPipelines');
  }

  /**
   * Lists the tags (metadata) which you have assigned to the resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Puts logging options for the the account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_PutLoggingOptions.html
   */
  public toPutLoggingOptions() {
    return this.to('PutLoggingOptions');
  }

  /**
   * Runs the specified pipeline activity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_RunPipelineActivity.html
   */
  public toRunPipelineActivity() {
    return this.to('RunPipelineActivity');
  }

  /**
   * Samples the specified channel's data.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_SampleChannelData.html
   */
  public toSampleChannelData() {
    return this.to('SampleChannelData');
  }

  /**
   * Starts reprocessing for the specified pipeline.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_StartPipelineReprocessing.html
   */
  public toStartPipelineReprocessing() {
    return this.to('StartPipelineReprocessing');
  }

  /**
   * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Removes the given tags (metadata) from the resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Updates the specified channel.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateChannel.html
   */
  public toUpdateChannel() {
    return this.to('UpdateChannel');
  }

  /**
   * Updates the specified dataset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateDataset.html
   */
  public toUpdateDataset() {
    return this.to('UpdateDataset');
  }

  /**
   * Updates the specified datastore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateDatastore.html
   */
  public toUpdateDatastore() {
    return this.to('UpdateDatastore');
  }

  /**
   * Updates the specified pipeline.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdatePipeline.html
   */
  public toUpdatePipeline() {
    return this.to('UpdatePipeline');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchPutMessage',
      'CancelPipelineReprocessing',
      'CreateChannel',
      'CreateDataset',
      'CreateDatasetContent',
      'CreateDatastore',
      'CreatePipeline',
      'DeleteChannel',
      'DeleteDataset',
      'DeleteDatasetContent',
      'DeleteDatastore',
      'DeletePipeline',
      'PutLoggingOptions',
      'StartPipelineReprocessing',
      'UpdateChannel',
      'UpdateDataset',
      'UpdateDatastore',
      'UpdatePipeline'
    ],
    Read: [
      'DescribeChannel',
      'DescribeDataset',
      'DescribeDatastore',
      'DescribeLoggingOptions',
      'DescribePipeline',
      'GetDatasetContent',
      'ListTagsForResource',
      'RunPipelineActivity',
      'SampleChannelData'
    ],
    List: [
      'ListChannels',
      'ListDatasetContents',
      'ListDatasets',
      'ListDatastores',
      'ListPipelines'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how
   *
   * @param channelName - Identifier for the channelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifResourceTag()
   */
  public onChannel(channelName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iotanalytics:${ region || '*' }:${ account || '*' }:channel/${ channelName }`);
  }

  /**
   * Adds a resource of type dataset to the statement
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how
   *
   * @param datasetName - Identifier for the datasetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifResourceTag()
   */
  public onDataset(datasetName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iotanalytics:${ region || '*' }:${ account || '*' }:dataset/${ datasetName }`);
  }

  /**
   * Adds a resource of type datastore to the statement
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how
   *
   * @param datastoreName - Identifier for the datastoreName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifResourceTag()
   */
  public onDatastore(datastoreName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iotanalytics:${ region || '*' }:${ account || '*' }:datastore/${ datastoreName }`);
  }

  /**
   * Adds a resource of type pipeline to the statement
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how
   *
   * @param pipelineName - Identifier for the pipelineName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifResourceTag()
   */
  public onPipeline(pipelineName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iotanalytics:${ region || '*' }:${ account || '*' }:pipeline/${ pipelineName }`);
  }

  /**
   * The preface string for a tag key and value pair attached to an IoT Analytics resource.
   *
   * Applies to resource types:
   * - channel
   * - dataset
   * - datastore
   * - pipeline
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
