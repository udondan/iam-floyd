import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [lookoutmetrics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutformetrics.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Lookoutmetrics extends PolicyStatement {
  public servicePrefix = 'lookoutmetrics';

  /**
   * Statement provider for service [lookoutmetrics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutformetrics.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to activate an anomaly detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ActivateAnomalyDetector.html
   */
  public toActivateAnomalyDetector() {
    return this.to('ActivateAnomalyDetector');
  }

  /**
   * Grants permission to run a backtest with an anomaly detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_BackTestAnomalyDetector.html
   */
  public toBackTestAnomalyDetector() {
    return this.to('BackTestAnomalyDetector');
  }

  /**
   * Grants permission to create an alert for an anomaly detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_CreateAlert.html
   */
  public toCreateAlert() {
    return this.to('CreateAlert');
  }

  /**
   * Grants permission to create an anomaly detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_CreateAnomalyDetector.html
   */
  public toCreateAnomalyDetector() {
    return this.to('CreateAnomalyDetector');
  }

  /**
   * Grants permission to create a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_CreateMetricSet.html
   */
  public toCreateMetricSet() {
    return this.to('CreateMetricSet');
  }

  /**
   * Grants permission to delete an alert
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DeleteAlert.html
   */
  public toDeleteAlert() {
    return this.to('DeleteAlert');
  }

  /**
   * Grants permission to delete an anomaly detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DeleteAnomalyDetector.html
   */
  public toDeleteAnomalyDetector() {
    return this.to('DeleteAnomalyDetector');
  }

  /**
   * Grants permission to get details about an alert
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DescribeAlert.html
   */
  public toDescribeAlert() {
    return this.to('DescribeAlert');
  }

  /**
   * Grants permission to get information about an anomaly detection job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DescribeAnomalyDetectionExecutions.html
   */
  public toDescribeAnomalyDetectionExecutions() {
    return this.to('DescribeAnomalyDetectionExecutions');
  }

  /**
   * Grants permission to get details about an anomaly detector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DescribeAnomalyDetector.html
   */
  public toDescribeAnomalyDetector() {
    return this.to('DescribeAnomalyDetector');
  }

  /**
   * Grants permission to get details about a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DescribeMetricSet.html
   */
  public toDescribeMetricSet() {
    return this.to('DescribeMetricSet');
  }

  /**
   * Grants permission to get details about a group of affected metrics
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_GetAnomalyGroup.html
   */
  public toGetAnomalyGroup() {
    return this.to('GetAnomalyGroup');
  }

  /**
   * Grants permission to get data quality metrics for an anomaly detector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_GetDataQualityMetrics.html
   */
  public toGetDataQualityMetrics() {
    return this.to('GetDataQualityMetrics');
  }

  /**
   * Grants permission to get feedback on affected metrics for an anomaly group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_GetFeedback.html
   */
  public toGetFeedback() {
    return this.to('GetFeedback');
  }

  /**
   * Grants permission to get a selection of sample records from an Amazon S3 datasource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_GetSampleData.html
   */
  public toGetSampleData() {
    return this.to('GetSampleData');
  }

  /**
   * Grants permission to get a list of alerts for a detector
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAlerts.html
   */
  public toListAlerts() {
    return this.to('ListAlerts');
  }

  /**
   * Grants permission to get a list of anomaly detectors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAnomalyDetectors.html
   */
  public toListAnomalyDetectors() {
    return this.to('ListAnomalyDetectors');
  }

  /**
   * Grants permission to get a list of anomaly groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAnomalyGroupSummaries.html
   */
  public toListAnomalyGroupSummaries() {
    return this.to('ListAnomalyGroupSummaries');
  }

  /**
   * Grants permission to get a list of affected metrics for a measure in an anomaly group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAnomalyGroupTimeSeries.html
   */
  public toListAnomalyGroupTimeSeries() {
    return this.to('ListAnomalyGroupTimeSeries');
  }

  /**
   * Grants permission to get a list of datasets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListMetricSets.html
   */
  public toListMetricSets() {
    return this.to('ListMetricSets');
  }

  /**
   * Grants permission to add feedback for an affected metric in an anomaly group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_PutFeedback.html
   */
  public toPutFeedback() {
    return this.to('PutFeedback');
  }

  /**
   * Grants permission to update an anomaly detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_UpdateAnomalyDetector.html
   */
  public toUpdateAnomalyDetector() {
    return this.to('UpdateAnomalyDetector');
  }

  /**
   * Grants permission to update a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_UpdateMetricSet.html
   */
  public toUpdateMetricSet() {
    return this.to('UpdateMetricSet');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "ActivateAnomalyDetector",
      "BackTestAnomalyDetector",
      "CreateAlert",
      "CreateAnomalyDetector",
      "CreateMetricSet",
      "DeleteAlert",
      "DeleteAnomalyDetector",
      "PutFeedback",
      "UpdateAnomalyDetector",
      "UpdateMetricSet"
    ],
    "Read": [
      "DescribeAlert",
      "DescribeAnomalyDetectionExecutions",
      "DescribeAnomalyDetector",
      "DescribeMetricSet",
      "GetAnomalyGroup",
      "GetDataQualityMetrics",
      "GetFeedback",
      "GetSampleData"
    ],
    "List": [
      "ListAlerts",
      "ListAnomalyDetectors",
      "ListAnomalyGroupSummaries",
      "ListAnomalyGroupTimeSeries",
      "ListMetricSets"
    ]
  };

  /**
   * Adds a resource of type AnomalyDetector to the statement
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_AnomalyDetector.html
   *
   * @param anomalyDetectorName - Identifier for the anomalyDetectorName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAnomalyDetector(anomalyDetectorName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:lookoutmetrics::${Account}:AnomalyDetector:${AnomalyDetectorName}';
    arn = arn.replace('${AnomalyDetectorName}', anomalyDetectorName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type MetricSet to the statement
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_MetricSet.html
   *
   * @param anomalyDetectorName - Identifier for the anomalyDetectorName.
   * @param metricSetName - Identifier for the metricSetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onMetricSet(anomalyDetectorName: string, metricSetName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:lookoutmetrics::${Account}:MetricSet/${AnomalyDetectorName}/${MetricSetName}';
    arn = arn.replace('${AnomalyDetectorName}', anomalyDetectorName);
    arn = arn.replace('${MetricSetName}', metricSetName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Alert to the statement
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/dev/API_Alert.html
   *
   * @param alertName - Identifier for the alertName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAlert(alertName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:lookoutmetrics::${Account}:Alert:${AlertName}';
    arn = arn.replace('${AlertName}', alertName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
