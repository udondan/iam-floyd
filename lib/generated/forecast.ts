import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [forecast](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonforecast.html).
 *
 * @param options - Options for the statement
 */
export class Forecast extends PolicyStatement {
  public servicePrefix = 'forecast';

  /**
   * Statement provider for service [forecast](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonforecast.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to create an auto predictor
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateAutoPredictor.html
   */
  public toCreateAutoPredictor() {
    return this.to('CreateAutoPredictor');
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
   * Grants permission to create an explainability
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateExplainability.html
   */
  public toCreateExplainability() {
    return this.to('CreateExplainability');
  }

  /**
   * Grants permission to create an explainability export using an explainability resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateExplainabilityExport.html
   */
  public toCreateExplainabilityExport() {
    return this.to('CreateExplainabilityExport');
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
   * Grants permission to create an endpoint using a Predictor resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html
   */
  public toCreateForecastEndpoint() {
    return this.to('CreateForecastEndpoint');
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
   * Grants permission to create an monitor using a Predictor resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateMonitor.html
   */
  public toCreateMonitor() {
    return this.to('CreateMonitor');
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
   * Grants permission to create a what-if analysis
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateWhatIfAnalysis.html
   */
  public toCreateWhatIfAnalysis() {
    return this.to('CreateWhatIfAnalysis');
  }

  /**
   * Grants permission to create a what-if forecast
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateWhatIfForecast.html
   */
  public toCreateWhatIfForecast() {
    return this.to('CreateWhatIfForecast');
  }

  /**
   * Grants permission to create a what-if forecast export using what-if forecast resources
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateWhatIfForecastExport.html
   */
  public toCreateWhatIfForecastExport() {
    return this.to('CreateWhatIfForecastExport');
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
   * Grants permission to delete an explainability
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteExplainability.html
   */
  public toDeleteExplainability() {
    return this.to('DeleteExplainability');
  }

  /**
   * Grants permission to delete an explainability export
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteExplainabilityExport.html
   */
  public toDeleteExplainabilityExport() {
    return this.to('DeleteExplainabilityExport');
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
   * Grants permission to delete an endpoint resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html
   */
  public toDeleteForecastEndpoint() {
    return this.to('DeleteForecastEndpoint');
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
   * Grants permission to delete a monitor resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteMonitor.html
   */
  public toDeleteMonitor() {
    return this.to('DeleteMonitor');
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
   * Grants permission to delete a what-if analysis
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteWhatIfAnalysis.html
   */
  public toDeleteWhatIfAnalysis() {
    return this.to('DeleteWhatIfAnalysis');
  }

  /**
   * Grants permission to delete a what-if forecast
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteWhatIfForecast.html
   */
  public toDeleteWhatIfForecast() {
    return this.to('DeleteWhatIfForecast');
  }

  /**
   * Grants permission to delete a what-if forecast export
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteWhatIfForecastExport.html
   */
  public toDeleteWhatIfForecastExport() {
    return this.to('DeleteWhatIfForecastExport');
  }

  /**
   * Grants permission to describe an auto predictor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeAutoPredictor.html
   */
  public toDescribeAutoPredictor() {
    return this.to('DescribeAutoPredictor');
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
   * Grants permission to describe an explainability
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeExplainability.html
   */
  public toDescribeExplainability() {
    return this.to('DescribeExplainability');
  }

  /**
   * Grants permission to describe an explainability export
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeExplainabilityExport.html
   */
  public toDescribeExplainabilityExport() {
    return this.to('DescribeExplainabilityExport');
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
   * Grants permission to describe an endpoint resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html
   */
  public toDescribeForecastEndpoint() {
    return this.to('DescribeForecastEndpoint');
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
   * Grants permission to describe an monitor resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeMonitor.html
   */
  public toDescribeMonitor() {
    return this.to('DescribeMonitor');
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
   * Grants permission to describe a what-if analysis
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeWhatIfAnalysis.html
   */
  public toDescribeWhatIfAnalysis() {
    return this.to('DescribeWhatIfAnalysis');
  }

  /**
   * Grants permission to describe a what-if forecast
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeWhatIfForecast.html
   */
  public toDescribeWhatIfForecast() {
    return this.to('DescribeWhatIfForecast');
  }

  /**
   * Grants permission to describe a what-if forecast export
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeWhatIfForecastExport.html
   */
  public toDescribeWhatIfForecastExport() {
    return this.to('DescribeWhatIfForecastExport');
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
   * Grants permission to get the forecast context of a timeseries for an endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html
   */
  public toGetRecentForecastContext() {
    return this.to('GetRecentForecastContext');
  }

  /**
   * Grants permission to invoke the endpoint to get forecast for a timeseries
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html
   */
  public toInvokeForecastEndpoint() {
    return this.to('InvokeForecastEndpoint');
  }

  /**
   * Grants permission to list all the dataset groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html
   */
  public toListDatasetGroups() {
    return this.to('ListDatasetGroups');
  }

  /**
   * Grants permission to list all the dataset import jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html
   */
  public toListDatasetImportJobs() {
    return this.to('ListDatasetImportJobs');
  }

  /**
   * Grants permission to list all the datasets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html
   */
  public toListDatasets() {
    return this.to('ListDatasets');
  }

  /**
   * Grants permission to list all the explainabilities
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListExplainabilities.html
   */
  public toListExplainabilities() {
    return this.to('ListExplainabilities');
  }

  /**
   * Grants permission to list all the explainability exports
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListExplainabilityExports.html
   */
  public toListExplainabilityExports() {
    return this.to('ListExplainabilityExports');
  }

  /**
   * Grants permission to list all the forecast export jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListForecastExportJobs.html
   */
  public toListForecastExportJobs() {
    return this.to('ListForecastExportJobs');
  }

  /**
   * Grants permission to list all the forecasts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListForecasts.html
   */
  public toListForecasts() {
    return this.to('ListForecasts');
  }

  /**
   * Grants permission to list all the monitor evaluation result for a monitor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListMonitorEvaluations.html
   */
  public toListMonitorEvaluations() {
    return this.to('ListMonitorEvaluations');
  }

  /**
   * Grants permission to list all the monitor resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListMonitors.html
   */
  public toListMonitors() {
    return this.to('ListMonitors');
  }

  /**
   * Grants permission to list all the predictor backtest export jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListPredictorBacktestExportJobs.html
   */
  public toListPredictorBacktestExportJobs() {
    return this.to('ListPredictorBacktestExportJobs');
  }

  /**
   * Grants permission to list all the predictors
   *
   * Access Level: Read
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
   * Grants permission to list all the what-if analyses
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListWhatIfAnalyses.html
   */
  public toListWhatIfAnalyses() {
    return this.to('ListWhatIfAnalyses');
  }

  /**
   * Grants permission to list all the what-if forecast exports
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListWhatIfForecastExports.html
   */
  public toListWhatIfForecastExports() {
    return this.to('ListWhatIfForecastExports');
  }

  /**
   * Grants permission to list all the what-if forecasts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ListWhatIfForecasts.html
   */
  public toListWhatIfForecasts() {
    return this.to('ListWhatIfForecasts');
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
   * Grants permission to retrieve a what-if forecast for a single item
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_forecastquery_QueryWhatIfForecast.html
   */
  public toQueryWhatIfForecast() {
    return this.to('QueryWhatIfForecast');
  }

  /**
   * Grants permission to resume Amazon Forecast resource jobs
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_ResumeResource.html
   */
  public toResumeResource() {
    return this.to('ResumeResource');
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
      'CreateAutoPredictor',
      'CreateDataset',
      'CreateDatasetGroup',
      'CreateDatasetImportJob',
      'CreateExplainability',
      'CreateExplainabilityExport',
      'CreateForecast',
      'CreateForecastEndpoint',
      'CreateForecastExportJob',
      'CreateMonitor',
      'CreatePredictor',
      'CreatePredictorBacktestExportJob',
      'CreateWhatIfAnalysis',
      'CreateWhatIfForecast',
      'CreateWhatIfForecastExport',
      'DeleteDataset',
      'DeleteDatasetGroup',
      'DeleteDatasetImportJob',
      'DeleteExplainability',
      'DeleteExplainabilityExport',
      'DeleteForecast',
      'DeleteForecastEndpoint',
      'DeleteForecastExportJob',
      'DeleteMonitor',
      'DeletePredictor',
      'DeletePredictorBacktestExportJob',
      'DeleteResourceTree',
      'DeleteWhatIfAnalysis',
      'DeleteWhatIfForecast',
      'DeleteWhatIfForecastExport',
      'ResumeResource',
      'StopResource',
      'UpdateDatasetGroup'
    ],
    Read: [
      'DescribeAutoPredictor',
      'DescribeDataset',
      'DescribeDatasetGroup',
      'DescribeDatasetImportJob',
      'DescribeExplainability',
      'DescribeExplainabilityExport',
      'DescribeForecast',
      'DescribeForecastEndpoint',
      'DescribeForecastExportJob',
      'DescribeMonitor',
      'DescribePredictor',
      'DescribePredictorBacktestExportJob',
      'DescribeWhatIfAnalysis',
      'DescribeWhatIfForecast',
      'DescribeWhatIfForecastExport',
      'GetAccuracyMetrics',
      'GetRecentForecastContext',
      'InvokeForecastEndpoint',
      'ListDatasetGroups',
      'ListDatasetImportJobs',
      'ListDatasets',
      'ListExplainabilities',
      'ListExplainabilityExports',
      'ListForecastExportJobs',
      'ListForecasts',
      'ListMonitorEvaluations',
      'ListMonitors',
      'ListPredictorBacktestExportJobs',
      'ListPredictors',
      'ListTagsForResource',
      'ListWhatIfAnalyses',
      'ListWhatIfForecastExports',
      'ListWhatIfForecasts',
      'QueryForecast',
      'QueryWhatIfForecast'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataset(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:${ region || '*' }:${ account || '*' }:dataset/${ resourceId }`);
  }

  /**
   * Adds a resource of type datasetGroup to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatasetGroup(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:${ region || '*' }:${ account || '*' }:dataset-group/${ resourceId }`);
  }

  /**
   * Adds a resource of type datasetImportJob to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatasetImportJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:${ region || '*' }:${ account || '*' }:dataset-import-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type algorithm to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-choosing-recipes.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAlgorithm(resourceId: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:::algorithm/${ resourceId }`);
  }

  /**
   * Adds a resource of type predictor to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreatePredictor.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPredictor(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:${ region || '*' }:${ account || '*' }:predictor/${ resourceId }`);
  }

  /**
   * Adds a resource of type predictorBacktestExportJob to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreatePredictorBacktestExportJob.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPredictorBacktestExportJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:${ region || '*' }:${ account || '*' }:predictor-backtest-export-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type forecast to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecast.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onForecast(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:${ region || '*' }:${ account || '*' }:forecast/${ resourceId }`);
  }

  /**
   * Adds a resource of type forecastExport to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecastExportJob.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onForecastExport(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:${ region || '*' }:${ account || '*' }:forecast-export-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type explainability to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateExplainability.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onExplainability(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:${ region || '*' }:${ account || '*' }:explainability/${ resourceId }`);
  }

  /**
   * Adds a resource of type explainabilityExport to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateExplainabilityExport.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onExplainabilityExport(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:${ region || '*' }:${ account || '*' }:explainability-export/${ resourceId }`);
  }

  /**
   * Adds a resource of type monitor to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateMonitor.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMonitor(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:${ region || '*' }:${ account || '*' }:monitor/${ resourceId }`);
  }

  /**
   * Adds a resource of type whatIfAnalysis to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateWhatIfAnalysis.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWhatIfAnalysis(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:${ region || '*' }:${ account || '*' }:what-if-analysis/${ resourceId }`);
  }

  /**
   * Adds a resource of type whatIfForecast to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateWhatIfForecast.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWhatIfForecast(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:${ region || '*' }:${ account || '*' }:what-if-forecast/${ resourceId }`);
  }

  /**
   * Adds a resource of type whatIfForecastExport to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_CreateWhatIfForecastExport.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWhatIfForecastExport(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:${ region || '*' }:${ account || '*' }:what-if-forecast-export/${ resourceId }`);
  }

  /**
   * Adds a resource of type endpoint to the statement
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEndpoint(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:forecast:${ region || '*' }:${ account || '*' }:forecast-endpoint/${ resourceId }`);
  }
}
