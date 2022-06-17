import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
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
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_CreateMetricSet.html
   */
  public toCreateMetricSet() {
    return this.to('CreateMetricSet');
  }

  /**
   * Grants permission to deactivate an anomaly detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DeactivateAnomalyDetector.html
   */
  public toDeactivateAnomalyDetector() {
    return this.to('DeactivateAnomalyDetector');
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
   * Grants permission to detect metric set config from data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DetectMetricSetConfig.html
   */
  public toDetectMetricSetConfig() {
    return this.to('DetectMetricSetConfig');
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
   * Grants permission to get a list of related measures in an anomaly group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAnomalyGroupRelatedMetrics.html
   */
  public toListAnomalyGroupRelatedMetrics() {
    return this.to('ListAnomalyGroupRelatedMetrics');
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
   * Grants permission to get a list of tags for a detector, dataset, or alert
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
   * Grants permission to add tags to a detector, dataset, or alert
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a detector, dataset, or alert
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an alert for an anomaly detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_UpdateAlert.html
   */
  public toUpdateAlert() {
    return this.to('UpdateAlert');
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
    Write: [
      'ActivateAnomalyDetector',
      'BackTestAnomalyDetector',
      'CreateAlert',
      'CreateAnomalyDetector',
      'CreateMetricSet',
      'DeactivateAnomalyDetector',
      'DeleteAlert',
      'DeleteAnomalyDetector',
      'DetectMetricSetConfig',
      'PutFeedback',
      'UpdateAlert',
      'UpdateAnomalyDetector',
      'UpdateMetricSet'
    ],
    Read: [
      'DescribeAlert',
      'DescribeAnomalyDetectionExecutions',
      'DescribeAnomalyDetector',
      'DescribeMetricSet',
      'GetAnomalyGroup',
      'GetDataQualityMetrics',
      'GetFeedback',
      'GetSampleData',
      'ListTagsForResource'
    ],
    List: [
      'ListAlerts',
      'ListAnomalyDetectors',
      'ListAnomalyGroupRelatedMetrics',
      'ListAnomalyGroupSummaries',
      'ListAnomalyGroupTimeSeries',
      'ListMetricSets'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type AnomalyDetector to the statement
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_AnomalyDetectorSummary.html
   *
   * @param anomalyDetectorName - Identifier for the anomalyDetectorName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAnomalyDetector(anomalyDetectorName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lookoutmetrics.defaultPartition }:lookoutmetrics:${ region || '*' }:${ account || '*' }:AnomalyDetector:${ anomalyDetectorName }`);
  }

  /**
   * Adds a resource of type MetricSet to the statement
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_MetricSetSummary.html
   *
   * @param anomalyDetectorName - Identifier for the anomalyDetectorName.
   * @param metricSetName - Identifier for the metricSetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMetricSet(anomalyDetectorName: string, metricSetName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lookoutmetrics.defaultPartition }:lookoutmetrics:${ region || '*' }:${ account || '*' }:MetricSet/${ anomalyDetectorName }/${ metricSetName }`);
  }

  /**
   * Adds a resource of type Alert to the statement
   *
   * https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_AlertSummary.html
   *
   * @param alertName - Identifier for the alertName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAlert(alertName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lookoutmetrics.defaultPartition }:lookoutmetrics:${ region || '*' }:${ account || '*' }:Alert:${ alertName }`);
  }
}
