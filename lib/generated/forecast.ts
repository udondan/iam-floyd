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
   * Creates a dataset
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
    this.to('CreateDataset');
    return this;
  }

  /**
   * Creates a dataset group
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
    this.to('CreateDatasetGroup');
    return this;
  }

  /**
   * Creates a dataset import job
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
    this.to('CreateDatasetImportJob');
    return this;
  }

  /**
   * Creates a forecast
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
    this.to('CreateForecast');
    return this;
  }

  /**
   * Creates a forecast export job
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
    this.to('CreateForecastExportJob');
    return this;
  }

  /**
   * Creates a predictor
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
    this.to('CreatePredictor');
    return this;
  }

  /**
   * Deletes a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteDataset.html
   */
  public toDeleteDataset() {
    this.to('DeleteDataset');
    return this;
  }

  /**
   * Deletes a dataset group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteDatasetGroup.html
   */
  public toDeleteDatasetGroup() {
    this.to('DeleteDatasetGroup');
    return this;
  }

  /**
   * Deletes a dataset import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteDatasetImportJob.html
   */
  public toDeleteDatasetImportJob() {
    this.to('DeleteDatasetImportJob');
    return this;
  }

  /**
   * Deletes a forecast
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteForecast.html
   */
  public toDeleteForecast() {
    this.to('DeleteForecast');
    return this;
  }

  /**
   * Deletes a forecast export job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteForecastExportJob.html
   */
  public toDeleteForecastExportJob() {
    this.to('DeleteForecastExportJob');
    return this;
  }

  /**
   * Deletes a predictor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeletePredictor.html
   */
  public toDeletePredictor() {
    this.to('DeletePredictor');
    return this;
  }

  /**
   * Describes a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeDataset.html
   */
  public toDescribeDataset() {
    this.to('DescribeDataset');
    return this;
  }

  /**
   * Describes a dataset group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeDatasetGroup.html
   */
  public toDescribeDatasetGroup() {
    this.to('DescribeDatasetGroup');
    return this;
  }

  /**
   * Describes a dataset import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeDatasetImportJob.html
   */
  public toDescribeDatasetImportJob() {
    this.to('DescribeDatasetImportJob');
    return this;
  }

  /**
   * Describes a forecast
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeForecast.html
   */
  public toDescribeForecast() {
    this.to('DescribeForecast');
    return this;
  }

  /**
   * Describes a forecast export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeForecastExportJob.html
   */
  public toDescribeForecastExportJob() {
    this.to('DescribeForecastExportJob');
    return this;
  }

  /**
   * Describes a predictor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribePredictor.html
   */
  public toDescribePredictor() {
    this.to('DescribePredictor');
    return this;
  }

  /**
   * Gets Accuracy Metrics for a predictor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_GetAccuracyMetrics.html
   */
  public toGetAccuracyMetrics() {
    this.to('GetAccuracyMetrics');
    return this;
  }

  /**
   * Lists dataset groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListDatasetGroups.html
   */
  public toListDatasetGroups() {
    this.to('ListDatasetGroups');
    return this;
  }

  /**
   * Lists dataset import jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListDatasetImportJobs.html
   */
  public toListDatasetImportJobs() {
    this.to('ListDatasetImportJobs');
    return this;
  }

  /**
   * Lists datasets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListDatasets.html
   */
  public toListDatasets() {
    this.to('ListDatasets');
    return this;
  }

  /**
   * Lists forecast export jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListForecastExportJobs.html
   */
  public toListForecastExportJobs() {
    this.to('ListForecastExportJobs');
    return this;
  }

  /**
   * Lists forecasts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListForecasts.html
   */
  public toListForecasts() {
    this.to('ListForecasts');
    return this;
  }

  /**
   * Lists predictors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListPredictors.html
   */
  public toListPredictors() {
    this.to('ListPredictors');
    return this;
  }

  /**
   * Lists the tags for an Amazon Forecast resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Retrieves a forecast for a single item
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_forecastquery_QueryForecast.html
   */
  public toQueryForecast() {
    this.to('QueryForecast');
    return this;
  }

  /**
   * Associates the specified tags to a resource
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
    this.to('TagResource');
    return this;
  }

  /**
   * Deletes the specified tags for a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_UntagResource.html
   */
  public toUntagResource() {
    this.to('UntagResource');
    return this;
  }

  /**
   * Updates a dataset group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_UpdateDatasetGroup.html
   */
  public toUpdateDatasetGroup() {
    this.to('UpdateDatasetGroup');
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
      "DeleteDataset",
      "DeleteDatasetGroup",
      "DeleteDatasetImportJob",
      "DeleteForecast",
      "DeleteForecastExportJob",
      "DeletePredictor",
      "UpdateDatasetGroup"
    ],
    "Read": [
      "DescribeDataset",
      "DescribeDatasetGroup",
      "DescribeDatasetImportJob",
      "DescribeForecast",
      "DescribeForecastExportJob",
      "DescribePredictor",
      "GetAccuracyMetrics",
      "QueryForecast"
    ],
    "List": [
      "ListDatasetGroups",
      "ListDatasetImportJobs",
      "ListDatasets",
      "ListForecastExportJobs",
      "ListForecasts",
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
