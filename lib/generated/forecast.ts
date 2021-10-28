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
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html
   */
  public toCreateDataset() {
    return this.to('CreateDataset');
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
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html
   */
  public toCreateDatasetGroup() {
    return this.to('CreateDatasetGroup');
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
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html
   */
  public toCreateDatasetImportJob() {
    return this.to('CreateDatasetImportJob');
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
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecast.html
   */
  public toCreateForecast() {
    return this.to('CreateForecast');
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
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecastExportJob.html
   */
  public toCreateForecastExportJob() {
    return this.to('CreateForecastExportJob');
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
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreatePredictor.html
   */
  public toCreatePredictor() {
    return this.to('CreatePredictor');
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
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreatePredictorBacktestExportJob.html
   */
  public toCreatePredictorBacktestExportJob() {
    return this.to('CreatePredictorBacktestExportJob');
  }

  /**
   * Grants permission to delete a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteDataset.html
   */
  public toDeleteDataset() {
    return this.to('DeleteDataset');
  }

  /**
   * Grants permission to delete a dataset group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteDatasetGroup.html
   */
  public toDeleteDatasetGroup() {
    return this.to('DeleteDatasetGroup');
  }

  /**
   * Grants permission to delete a dataset import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteDatasetImportJob.html
   */
  public toDeleteDatasetImportJob() {
    return this.to('DeleteDatasetImportJob');
  }

  /**
   * Grants permission to delete a forecast
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteForecast.html
   */
  public toDeleteForecast() {
    return this.to('DeleteForecast');
  }

  /**
   * Grants permission to delete a forecast export job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteForecastExportJob.html
   */
  public toDeleteForecastExportJob() {
    return this.to('DeleteForecastExportJob');
  }

  /**
   * Grants permission to delete a predictor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DeletePredictor.html
   */
  public toDeletePredictor() {
    return this.to('DeletePredictor');
  }

  /**
   * Grants permission to delete a predictor backtest export job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DeletePredictorBacktestExportJob.html
   */
  public toDeletePredictorBacktestExportJob() {
    return this.to('DeletePredictorBacktestExportJob');
  }

  /**
   * Grants permission to delete a resource and its child resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteResourceTree.html
   */
  public toDeleteResourceTree() {
    return this.to('DeleteResourceTree');
  }

  /**
   * Grants permission to describe a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    return this.to('DescribeDataset');
  }

  /**
   * Grants permission to describe a dataset group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html
   */
  public toDescribeDatasetGroup() {
    return this.to('DescribeDatasetGroup');
  }

  /**
   * Grants permission to describe a dataset import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html
   */
  public toDescribeDatasetImportJob() {
    return this.to('DescribeDatasetImportJob');
  }

  /**
   * Grants permission to describe a forecast
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeForecast.html
   */
  public toDescribeForecast() {
    return this.to('DescribeForecast');
  }

  /**
   * Grants permission to describe a forecast export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeForecastExportJob.html
   */
  public toDescribeForecastExportJob() {
    return this.to('DescribeForecastExportJob');
  }

  /**
   * Grants permission to describe a predictor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DescribePredictor.html
   */
  public toDescribePredictor() {
    return this.to('DescribePredictor');
  }

  /**
   * Grants permission to describe a predictor backtest export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DescribePredictorBacktestExportJob.html
   */
  public toDescribePredictorBacktestExportJob() {
    return this.to('DescribePredictorBacktestExportJob');
  }

  /**
   * Grants permission to get the Accuracy Metrics for a predictor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_GetAccuracyMetrics.html
   */
  public toGetAccuracyMetrics() {
    return this.to('GetAccuracyMetrics');
  }

  /**
   * Grants permission to list all the dataset groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html
   */
  public toListDatasetGroups() {
    return this.to('ListDatasetGroups');
  }

  /**
   * Grants permission to list all the dataset import jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html
   */
  public toListDatasetImportJobs() {
    return this.to('ListDatasetImportJobs');
  }

  /**
   * Grants permission to list all the datasets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html
   */
  public toListDatasets() {
    return this.to('ListDatasets');
  }

  /**
   * Grants permission to list all the forecast export jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListForecastExportJobs.html
   */
  public toListForecastExportJobs() {
    return this.to('ListForecastExportJobs');
  }

  /**
   * Grants permission to list all the forecasts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListForecasts.html
   */
  public toListForecasts() {
    return this.to('ListForecasts');
  }

  /**
   * Grants permission to list all the predictor backtest export jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListPredictorBacktestExportJobs.html
   */
  public toListPredictorBacktestExportJobs() {
    return this.to('ListPredictorBacktestExportJobs');
  }

  /**
   * Grants permission to list all the predictors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListPredictors.html
   */
  public toListPredictors() {
    return this.to('ListPredictors');
  }

  /**
   * Grants permission to list the tags for an Amazon Forecast resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve a forecast for a single item
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_forecastquery_QueryForecast.html
   */
  public toQueryForecast() {
    return this.to('QueryForecast');
  }

  /**
   * Grants permission to stop Amazon Forecast resource jobs
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_StopResource.html
   */
  public toStopResource() {
    return this.to('StopResource');
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
   * https://docs.aws.amazon.com/forecast/latest/dg/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to delete the specified tags for a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a dataset group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html
   */
  public toUpdateDatasetGroup() {
    return this.to('UpdateDatasetGroup');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateDataset',
      'CreateDatasetGroup',
      'CreateDatasetImportJob',
      'CreateForecast',
      'CreateForecastExportJob',
      'CreatePredictor',
      'CreatePredictorBacktestExportJob',
      'DeleteDataset',
      'DeleteDatasetGroup',
      'DeleteDatasetImportJob',
      'DeleteForecast',
      'DeleteForecastExportJob',
      'DeletePredictor',
      'DeletePredictorBacktestExportJob',
      'DeleteResourceTree',
      'StopResource',
      'UpdateDatasetGroup'
    ],
    Read: [
      'DescribeDataset',
      'DescribeDatasetGroup',
      'DescribeDatasetImportJob',
      'DescribeForecast',
      'DescribeForecastExportJob',
      'DescribePredictor',
      'DescribePredictorBacktestExportJob',
      'GetAccuracyMetrics',
      'ListTagsForResource',
      'QueryForecast'
    ],
    List: [
      'ListDatasetGroups',
      'ListDatasetImportJobs',
      'ListDatasets',
      'ListForecastExportJobs',
      'ListForecasts',
      'ListPredictorBacktestExportJobs',
      'ListPredictors'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type dataset to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html
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
    return this.on(`arn:${ partition || 'aws' }:forecast:${ region || '*' }:${ account || '*' }:dataset/${ resourceId }`);
  }

  /**
   * Adds a resource of type datasetGroup to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html
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
    return this.on(`arn:${ partition || 'aws' }:forecast:${ region || '*' }:${ account || '*' }:dataset-group/${ resourceId }`);
  }

  /**
   * Adds a resource of type datasetImportJob to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html
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
    return this.on(`arn:${ partition || 'aws' }:forecast:${ region || '*' }:${ account || '*' }:dataset-import-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type algorithm to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-choosing-recipes.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAlgorithm(resourceId: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:forecast:::algorithm/${ resourceId }`);
  }

  /**
   * Adds a resource of type predictor to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreatePredictor.html
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
    return this.on(`arn:${ partition || 'aws' }:forecast:${ region || '*' }:${ account || '*' }:predictor/${ resourceId }`);
  }

  /**
   * Adds a resource of type predictorBacktestExportJob to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreatePredictorBacktestExportJob.html
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
    return this.on(`arn:${ partition || 'aws' }:forecast:${ region || '*' }:${ account || '*' }:predictor-backtest-export-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type forecast to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecast.html
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
    return this.on(`arn:${ partition || 'aws' }:forecast:${ region || '*' }:${ account || '*' }:forecast/${ resourceId }`);
  }

  /**
   * Adds a resource of type forecastExport to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecastExportJob.html
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
    return this.on(`arn:${ partition || 'aws' }:forecast:${ region || '*' }:${ account || '*' }:forecast-export-job/${ resourceId }`);
  }
}
