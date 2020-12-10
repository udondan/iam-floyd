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
  constructor (sid?: string) {
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
    this.to('iotanalytics:BatchPutMessage');
    return this;
  }

  /**
   * Cancels reprocessing for the specified pipeline.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CancelPipelineReprocessing.html
   */
  public toCancelPipelineReprocessing() {
    this.to('iotanalytics:CancelPipelineReprocessing');
    return this;
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
    this.to('iotanalytics:CreateChannel');
    return this;
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
    this.to('iotanalytics:CreateDataset');
    return this;
  }

  /**
   * Generates content of the specified dataset (by executing the dataset actions).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDatasetContent.html
   */
  public toCreateDatasetContent() {
    this.to('iotanalytics:CreateDatasetContent');
    return this;
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
    this.to('iotanalytics:CreateDatastore');
    return this;
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
    this.to('iotanalytics:CreatePipeline');
    return this;
  }

  /**
   * Deletes the specified channel.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteChannel.html
   */
  public toDeleteChannel() {
    this.to('iotanalytics:DeleteChannel');
    return this;
  }

  /**
   * Deletes the specified dataset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDataset.html
   */
  public toDeleteDataset() {
    this.to('iotanalytics:DeleteDataset');
    return this;
  }

  /**
   * Deletes the content of the specified dataset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDatasetContent.html
   */
  public toDeleteDatasetContent() {
    this.to('iotanalytics:DeleteDatasetContent');
    return this;
  }

  /**
   * Deletes the specified datastore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDatastore.html
   */
  public toDeleteDatastore() {
    this.to('iotanalytics:DeleteDatastore');
    return this;
  }

  /**
   * Deletes the specified pipeline.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeletePipeline.html
   */
  public toDeletePipeline() {
    this.to('iotanalytics:DeletePipeline');
    return this;
  }

  /**
   * Describes the specified channel.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeChannel.html
   */
  public toDescribeChannel() {
    this.to('iotanalytics:DescribeChannel');
    return this;
  }

  /**
   * Describes the specified dataset.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    this.to('iotanalytics:DescribeDataset');
    return this;
  }

  /**
   * Describes the specified datastore.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeDatastore.html
   */
  public toDescribeDatastore() {
    this.to('iotanalytics:DescribeDatastore');
    return this;
  }

  /**
   * Describes logging options for the the account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeLoggingOptions.html
   */
  public toDescribeLoggingOptions() {
    this.to('iotanalytics:DescribeLoggingOptions');
    return this;
  }

  /**
   * Describes the specified pipeline.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribePipeline.html
   */
  public toDescribePipeline() {
    this.to('iotanalytics:DescribePipeline');
    return this;
  }

  /**
   * Gets the content of the specified dataset.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_GetDatasetContent.html
   */
  public toGetDatasetContent() {
    this.to('iotanalytics:GetDatasetContent');
    return this;
  }

  /**
   * Lists the channels for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListChannels.html
   */
  public toListChannels() {
    this.to('iotanalytics:ListChannels');
    return this;
  }

  /**
   * Lists the datasets for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatasets.html
   */
  public toListDatasets() {
    this.to('iotanalytics:ListDatasets');
    return this;
  }

  /**
   * Lists the datastores for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatastores.html
   */
  public toListDatastores() {
    this.to('iotanalytics:ListDatastores');
    return this;
  }

  /**
   * Lists the pipelines for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListPipelines.html
   */
  public toListPipelines() {
    this.to('iotanalytics:ListPipelines');
    return this;
  }

  /**
   * Lists the tags (metadata) which you have assigned to the resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('iotanalytics:ListTagsForResource');
    return this;
  }

  /**
   * Puts logging options for the the account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_PutLoggingOptions.html
   */
  public toPutLoggingOptions() {
    this.to('iotanalytics:PutLoggingOptions');
    return this;
  }

  /**
   * Runs the specified pipeline activity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_RunPipelineActivity.html
   */
  public toRunPipelineActivity() {
    this.to('iotanalytics:RunPipelineActivity');
    return this;
  }

  /**
   * Samples the specified channel's data.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_SampleChannelData.html
   */
  public toSampleChannelData() {
    this.to('iotanalytics:SampleChannelData');
    return this;
  }

  /**
   * Starts reprocessing for the specified pipeline.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_StartPipelineReprocessing.html
   */
  public toStartPipelineReprocessing() {
    this.to('iotanalytics:StartPipelineReprocessing');
    return this;
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
    this.to('iotanalytics:TagResource');
    return this;
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
    this.to('iotanalytics:UntagResource');
    return this;
  }

  /**
   * Updates the specified channel.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateChannel.html
   */
  public toUpdateChannel() {
    this.to('iotanalytics:UpdateChannel');
    return this;
  }

  /**
   * Updates the specified dataset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateDataset.html
   */
  public toUpdateDataset() {
    this.to('iotanalytics:UpdateDataset');
    return this;
  }

  /**
   * Updates the specified datastore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateDatastore.html
   */
  public toUpdateDatastore() {
    this.to('iotanalytics:UpdateDatastore');
    return this;
  }

  /**
   * Updates the specified pipeline.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdatePipeline.html
   */
  public toUpdatePipeline() {
    this.to('iotanalytics:UpdatePipeline');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BatchPutMessage",
      "CancelPipelineReprocessing",
      "CreateChannel",
      "CreateDataset",
      "CreateDatasetContent",
      "CreateDatastore",
      "CreatePipeline",
      "DeleteChannel",
      "DeleteDataset",
      "DeleteDatasetContent",
      "DeleteDatastore",
      "DeletePipeline",
      "PutLoggingOptions",
      "StartPipelineReprocessing",
      "UpdateChannel",
      "UpdateDataset",
      "UpdateDatastore",
      "UpdatePipeline"
    ],
    "Read": [
      "DescribeChannel",
      "DescribeDataset",
      "DescribeDatastore",
      "DescribeLoggingOptions",
      "DescribePipeline",
      "GetDatasetContent",
      "ListTagsForResource",
      "RunPipelineActivity",
      "SampleChannelData"
    ],
    "List": [
      "ListChannels",
      "ListDatasets",
      "ListDatastores",
      "ListPipelines"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
    var arn = 'arn:${Partition}:iotanalytics:${Region}:${Account}:channel/${ChannelName}';
    arn = arn.replace('${ChannelName}', channelName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:iotanalytics:${Region}:${Account}:dataset/${DatasetName}';
    arn = arn.replace('${DatasetName}', datasetName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:iotanalytics:${Region}:${Account}:datastore/${DatastoreName}';
    arn = arn.replace('${DatastoreName}', datastoreName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:iotanalytics:${Region}:${Account}:pipeline/${PipelineName}';
    arn = arn.replace('${PipelineName}', pipelineName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    return this.if(`iotanalytics:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}

export type IotanalyticsActionsWrite = 'BatchPutMessage' | 'CancelPipelineReprocessing' | 'CreateChannel' | 'CreateDataset' | 'CreateDatasetContent' | 'CreateDatastore' | 'CreatePipeline' | 'DeleteChannel' | 'DeleteDataset' | 'DeleteDatasetContent' | 'DeleteDatastore' | 'DeletePipeline' | 'PutLoggingOptions' | 'StartPipelineReprocessing' | 'UpdateChannel' | 'UpdateDataset' | 'UpdateDatastore' | 'UpdatePipeline';
export type IotanalyticsActionsRead = 'DescribeChannel' | 'DescribeDataset' | 'DescribeDatastore' | 'DescribeLoggingOptions' | 'DescribePipeline' | 'GetDatasetContent' | 'ListTagsForResource' | 'RunPipelineActivity' | 'SampleChannelData';
export type IotanalyticsActionsList = 'ListChannels' | 'ListDatasets' | 'ListDatastores' | 'ListPipelines';
export type IotanalyticsActionsTagging = 'TagResource' | 'UntagResource';
export type IotanalyticsActions = IotanalyticsActionsWrite | IotanalyticsActionsRead | IotanalyticsActionsList | IotanalyticsActionsTagging;
