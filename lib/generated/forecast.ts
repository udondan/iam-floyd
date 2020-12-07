import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [forecast](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonforecast.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Forecast extends PolicyStatement {
  public servicePrefix = 'forecast';

  /**
   * Statement provider for service [forecast](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonforecast.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
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
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateDataset.html
   */
  public toCreateDataset() {
    this.to('forecast:CreateDataset');
    return this;
  }

  /**
   * Grants permission to create a dataset group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateDatasetGroup.html
   */
  public toCreateDatasetGroup() {
    this.to('forecast:CreateDatasetGroup');
    return this;
  }

  /**
   * Grants permission to create a dataset import job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateDatasetImportJob.html
   */
  public toCreateDatasetImportJob() {
    this.to('forecast:CreateDatasetImportJob');
    return this;
  }

  /**
   * Grants permission to create a forecast
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateForecast.html
   */
  public toCreateForecast() {
    this.to('forecast:CreateForecast');
    return this;
  }

  /**
   * Grants permission to create a forecast export job using a forecast resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateForecastExportJob.html
   */
  public toCreateForecastExportJob() {
    this.to('forecast:CreateForecastExportJob');
    return this;
  }

  /**
   * Grants permission to create a predictor
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreatePredictor.html
   */
  public toCreatePredictor() {
    this.to('forecast:CreatePredictor');
    return this;
  }

  /**
   * Grants permission to create a predictor backtest export job using a predictor
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreatePredictorBacktestExportJob.html
   */
  public toCreatePredictorBacktestExportJob() {
    this.to('forecast:CreatePredictorBacktestExportJob');
    return this;
  }

  /**
   * Grants permission to delete a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteDataset.html
   */
  public toDeleteDataset() {
    this.to('forecast:DeleteDataset');
    return this;
  }

  /**
   * Grants permission to delete a dataset group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteDatasetGroup.html
   */
  public toDeleteDatasetGroup() {
    this.to('forecast:DeleteDatasetGroup');
    return this;
  }

  /**
   * Grants permission to delete a dataset import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteDatasetImportJob.html
   */
  public toDeleteDatasetImportJob() {
    this.to('forecast:DeleteDatasetImportJob');
    return this;
  }

  /**
   * Grants permission to delete a forecast
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteForecast.html
   */
  public toDeleteForecast() {
    this.to('forecast:DeleteForecast');
    return this;
  }

  /**
   * Grants permission to delete a forecast export job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteForecastExportJob.html
   */
  public toDeleteForecastExportJob() {
    this.to('forecast:DeleteForecastExportJob');
    return this;
  }

  /**
   * Grants permission to delete a predictor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeletePredictor.html
   */
  public toDeletePredictor() {
    this.to('forecast:DeletePredictor');
    return this;
  }

  /**
   * Grants permission to delete a predictor backtest export job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeletePredictorBacktestExportJob.html
   */
  public toDeletePredictorBacktestExportJob() {
    this.to('forecast:DeletePredictorBacktestExportJob');
    return this;
  }

  /**
   * Grants permission to describe a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeDataset.html
   */
  public toDescribeDataset() {
    this.to('forecast:DescribeDataset');
    return this;
  }

  /**
   * Grants permission to describe a dataset group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeDatasetGroup.html
   */
  public toDescribeDatasetGroup() {
    this.to('forecast:DescribeDatasetGroup');
    return this;
  }

  /**
   * Grants permission to describe a dataset import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeDatasetImportJob.html
   */
  public toDescribeDatasetImportJob() {
    this.to('forecast:DescribeDatasetImportJob');
    return this;
  }

  /**
   * Grants permission to describe a forecast
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeForecast.html
   */
  public toDescribeForecast() {
    this.to('forecast:DescribeForecast');
    return this;
  }

  /**
   * Grants permission to describe a forecast export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeForecastExportJob.html
   */
  public toDescribeForecastExportJob() {
    this.to('forecast:DescribeForecastExportJob');
    return this;
  }

  /**
   * Grants permission to describe a predictor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribePredictor.html
   */
  public toDescribePredictor() {
    this.to('forecast:DescribePredictor');
    return this;
  }

  /**
   * Grants permission to describe a predictor backtest export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribePredictorBacktestExportJob.html
   */
  public toDescribePredictorBacktestExportJob() {
    this.to('forecast:DescribePredictorBacktestExportJob');
    return this;
  }

  /**
   * Grants permission to get the Accuracy Metrics for a predictor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_GetAccuracyMetrics.html
   */
  public toGetAccuracyMetrics() {
    this.to('forecast:GetAccuracyMetrics');
    return this;
  }

  /**
   * Grants permission to list all the dataset groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListDatasetGroups.html
   */
  public toListDatasetGroups() {
    this.to('forecast:ListDatasetGroups');
    return this;
  }

  /**
   * Grants permission to list all the dataset import jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListDatasetImportJobs.html
   */
  public toListDatasetImportJobs() {
    this.to('forecast:ListDatasetImportJobs');
    return this;
  }

  /**
   * Grants permission to list all the datasets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListDatasets.html
   */
  public toListDatasets() {
    this.to('forecast:ListDatasets');
    return this;
  }

  /**
   * Grants permission to list all the forecast export jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListForecastExportJobs.html
   */
  public toListForecastExportJobs() {
    this.to('forecast:ListForecastExportJobs');
    return this;
  }

  /**
   * Grants permission to list all the forecasts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListForecasts.html
   */
  public toListForecasts() {
    this.to('forecast:ListForecasts');
    return this;
  }

  /**
   * Grants permission to list all the predictor backtest export jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListPredictorBacktestExportJobs.html
   */
  public toListPredictorBacktestExportJobs() {
    this.to('forecast:ListPredictorBacktestExportJobs');
    return this;
  }

  /**
   * Grants permission to list all the predictors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListPredictors.html
   */
  public toListPredictors() {
    this.to('forecast:ListPredictors');
    return this;
  }

  /**
   * Grants permission to list the tags for an Amazon Forecast resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('forecast:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to retrieve a forecast for a single item
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_forecastquery_QueryForecast.html
   */
  public toQueryForecast() {
    this.to('forecast:QueryForecast');
    return this;
  }

  /**
   * Grants permission to associate the specified tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_TagResource.html
   */
  public toTagResource() {
    this.to('forecast:TagResource');
    return this;
  }

  /**
   * Grants permission to delete the specified tags for a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_UntagResource.html
   */
  public toUntagResource() {
    this.to('forecast:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a dataset group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_UpdateDatasetGroup.html
   */
  public toUpdateDatasetGroup() {
    this.to('forecast:UpdateDatasetGroup');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateDataset",
      "CreateDatasetGroup",
      "CreateDatasetImportJob",
      "CreateForecast",
      "CreateForecastExportJob",
      "CreatePredictor",
      "CreatePredictorBacktestExportJob",
      "DeleteDataset",
      "DeleteDatasetGroup",
      "DeleteDatasetImportJob",
      "DeleteForecast",
      "DeleteForecastExportJob",
      "DeletePredictor",
      "DeletePredictorBacktestExportJob",
      "UpdateDatasetGroup"
    ],
    "Read": [
      "DescribeDataset",
      "DescribeDatasetGroup",
      "DescribeDatasetImportJob",
      "DescribeForecast",
      "DescribeForecastExportJob",
      "DescribePredictor",
      "DescribePredictorBacktestExportJob",
      "GetAccuracyMetrics",
      "QueryForecast"
    ],
    "List": [
      "ListDatasetGroups",
      "ListDatasetImportJobs",
      "ListDatasets",
      "ListForecastExportJobs",
      "ListForecasts",
      "ListPredictorBacktestExportJobs",
      "ListPredictors",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type dataset to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataset(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:${Region}:${Account}:dataset/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type datasetGroup to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatasetGroup(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:${Region}:${Account}:dataset-group/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type datasetImportJob to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatasetImportJob(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:${Region}:${Account}:dataset-import-job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type algorithm to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAlgorithm(resourceId: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:::algorithm/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type predictor to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPredictor(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:${Region}:${Account}:predictor/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type predictorBacktestExportJob to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPredictorBacktestExportJob(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:${Region}:${Account}:predictor-backtest-export-job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type forecast to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onForecast(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:${Region}:${Account}:forecast/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type forecastExport to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onForecastExport(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:${Region}:${Account}:forecast-export-job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type ForecastActionsWrite = 'CreateDataset' | 'CreateDatasetGroup' | 'CreateDatasetImportJob' | 'CreateForecast' | 'CreateForecastExportJob' | 'CreatePredictor' | 'CreatePredictorBacktestExportJob' | 'DeleteDataset' | 'DeleteDatasetGroup' | 'DeleteDatasetImportJob' | 'DeleteForecast' | 'DeleteForecastExportJob' | 'DeletePredictor' | 'DeletePredictorBacktestExportJob' | 'UpdateDatasetGroup';
export type ForecastActionsRead = 'DescribeDataset' | 'DescribeDatasetGroup' | 'DescribeDatasetImportJob' | 'DescribeForecast' | 'DescribeForecastExportJob' | 'DescribePredictor' | 'DescribePredictorBacktestExportJob' | 'GetAccuracyMetrics' | 'QueryForecast';
export type ForecastActionsList = 'ListDatasetGroups' | 'ListDatasetImportJobs' | 'ListDatasets' | 'ListForecastExportJobs' | 'ListForecasts' | 'ListPredictorBacktestExportJobs' | 'ListPredictors' | 'ListTagsForResource';
export type ForecastActionsTagging = 'TagResource' | 'UntagResource';
export type ForecastActions = ForecastActionsWrite | ForecastActionsRead | ForecastActionsList | ForecastActionsTagging;
