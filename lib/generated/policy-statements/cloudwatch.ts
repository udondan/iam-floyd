import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [cloudwatch](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatch.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloudwatch extends PolicyStatement {
  public servicePrefix = 'cloudwatch';

  /**
   * Statement provider for service [cloudwatch](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatch.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to batch get service level indicator report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK
   */
  public toBatchGetServiceLevelIndicatorReport() {
    return this.to('BatchGetServiceLevelIndicatorReport');
  }

  /**
   * Grants permission to batch retrieve a service level objective budget report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK
   */
  public toBatchGetServiceLevelObjectiveBudgetReport() {
    return this.to('BatchGetServiceLevelObjectiveBudgetReport');
  }

  /**
   * Grants permission to create a service level objective
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK
   */
  public toCreateServiceLevelObjective() {
    return this.to('CreateServiceLevelObjective');
  }

  /**
   * Grants permission to delete a collection of alarms
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteAlarms.html
   */
  public toDeleteAlarms() {
    return this.to('DeleteAlarms');
  }

  /**
   * Grants permission to delete the specified anomaly detection model from your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteAnomalyDetector.html
   */
  public toDeleteAnomalyDetector() {
    return this.to('DeleteAnomalyDetector');
  }

  /**
   * Grants permission to delete all CloudWatch dashboards that you specify
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteDashboards.html
   */
  public toDeleteDashboards() {
    return this.to('DeleteDashboards');
  }

  /**
   * Grants permission to delete a collection of insight rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteInsightRules.html
   */
  public toDeleteInsightRules() {
    return this.to('DeleteInsightRules');
  }

  /**
   * Grants permission to delete the CloudWatch metric stream that you specify
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteMetricStream.html
   */
  public toDeleteMetricStream() {
    return this.to('DeleteMetricStream');
  }

  /**
   * Grants permission to delete a service level objective
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK
   */
  public toDeleteServiceLevelObjective() {
    return this.to('DeleteServiceLevelObjective');
  }

  /**
   * Grants permission to retrieve the history for the specified alarm
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html
   */
  public toDescribeAlarmHistory() {
    return this.to('DescribeAlarmHistory');
  }

  /**
   * Grants permission to describe all alarms, currently owned by the user's account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html
   */
  public toDescribeAlarms() {
    return this.to('DescribeAlarms');
  }

  /**
   * Grants permission to describe all alarms configured on the specified metric, currently owned by the user's account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmsForMetric.html
   */
  public toDescribeAlarmsForMetric() {
    return this.to('DescribeAlarmsForMetric');
  }

  /**
   * Grants permission to list the anomaly detection models that you have created in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAnomalyDetectors.html
   */
  public toDescribeAnomalyDetectors() {
    return this.to('DescribeAnomalyDetectors');
  }

  /**
   * Grants permission to describe all insight rules, currently owned by the user's account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html
   */
  public toDescribeInsightRules() {
    return this.to('DescribeInsightRules');
  }

  /**
   * Grants permission to disable actions for a collection of alarms
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DisableAlarmActions.html
   */
  public toDisableAlarmActions() {
    return this.to('DisableAlarmActions');
  }

  /**
   * Grants permission to disable a collection of insight rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DisableInsightRules.html
   */
  public toDisableInsightRules() {
    return this.to('DisableInsightRules');
  }

  /**
   * Grants permission to enable actions for a collection of alarms
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_EnableAlarmActions.html
   */
  public toEnableAlarmActions() {
    return this.to('EnableAlarmActions');
  }

  /**
   * Grants permission to enable a collection of insight rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_EnableInsightRules.html
   */
  public toEnableInsightRules() {
    return this.to('EnableInsightRules');
  }

  /**
   * Grants permission to enable a CloudWatch topology discovery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK
   */
  public toEnableTopologyDiscovery() {
    return this.to('EnableTopologyDiscovery');
  }

  /**
   * Grants permission to generate a Metrics Insights or Logs Insights query string from a natural language prompt
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-query-assist.html
   */
  public toGenerateQuery() {
    return this.to('GenerateQuery');
  }

  /**
   * Grants permission to display the details of the CloudWatch dashboard you specify
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetDashboard.html
   */
  public toGetDashboard() {
    return this.to('GetDashboard');
  }

  /**
   * Grants permission to return the top-N report of unique contributors over a time range for a given insight rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html
   */
  public toGetInsightRuleReport() {
    return this.to('GetInsightRuleReport');
  }

  /**
   * Grants permission to retrieve batch amounts of CloudWatch metric data and perform metric math on retrieved data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html
   */
  public toGetMetricData() {
    return this.to('GetMetricData');
  }

  /**
   * Grants permission to retrieve statistics for the specified metric
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html
   */
  public toGetMetricStatistics() {
    return this.to('GetMetricStatistics');
  }

  /**
   * Grants permission to return the details of a CloudWatch metric stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStream.html
   */
  public toGetMetricStream() {
    return this.to('GetMetricStream');
  }

  /**
   * Grants permission to retrieve snapshots of metric widgets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricWidgetImage.html
   */
  public toGetMetricWidgetImage() {
    return this.to('GetMetricWidgetImage');
  }

  /**
   * Grants permission to retrieve information about a service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK
   */
  public toGetService() {
    return this.to('GetService');
  }

  /**
   * Grants permission to retrieve service data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/permissions-reference-cw.html
   */
  public toGetServiceData() {
    return this.to('GetServiceData');
  }

  /**
   * Grants permission to retrieve information about service level objective
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK
   */
  public toGetServiceLevelObjective() {
    return this.to('GetServiceLevelObjective');
  }

  /**
   * Grants permission to retrieve a CloudWatch topology discovery status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/permissions-reference-cw.html
   */
  public toGetTopologyDiscoveryStatus() {
    return this.to('GetTopologyDiscoveryStatus');
  }

  /**
   * Grants permission to retrieve a CloudWatch topology map
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK
   */
  public toGetTopologyMap() {
    return this.to('GetTopologyMap');
  }

  /**
   * Grants permission to share CloudWatch resources with a monitoring account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account-Setup.html#CloudWatch-Unified-Cross-Account-Setup-permissions
   */
  public toLink() {
    return this.to('Link');
  }

  /**
   * Grants permission to return a list of all CloudWatch dashboards in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListDashboards.html
   */
  public toListDashboards() {
    return this.to('ListDashboards');
  }

  /**
   * Grants permission to list available managed Insight Rules for a given Resource ARN
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRequestManagedResourceARNs()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListManagedInsightRules.html
   */
  public toListManagedInsightRules() {
    return this.to('ListManagedInsightRules');
  }

  /**
   * Grants permission to return a list of all CloudWatch metric streams in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetricStreams.html
   */
  public toListMetricStreams() {
    return this.to('ListMetricStreams');
  }

  /**
   * Grants permission to retrieve a list of valid metrics stored for the AWS account owner
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html
   */
  public toListMetrics() {
    return this.to('ListMetrics');
  }

  /**
   * Grants permission to list service level objectives
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK
   */
  public toListServiceLevelObjectives() {
    return this.to('ListServiceLevelObjectives');
  }

  /**
   * Grants permission to list services
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK
   */
  public toListServices() {
    return this.to('ListServices');
  }

  /**
   * Grants permission to list tags for an Amazon CloudWatch resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create or update an anomaly detection model for a CloudWatch metric
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutAnomalyDetector.html
   */
  public toPutAnomalyDetector() {
    return this.to('PutAnomalyDetector');
  }

  /**
   * Grants permission to create or update a composite alarm
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAlarmActions()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutCompositeAlarm.html
   */
  public toPutCompositeAlarm() {
    return this.to('PutCompositeAlarm');
  }

  /**
   * Grants permission to create a CloudWatch dashboard, or update an existing dashboard if it already exists
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutDashboard.html
   */
  public toPutDashboard() {
    return this.to('PutDashboard');
  }

  /**
   * Grants permission to create a new insight rule or replace an existing insight rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRequestInsightRuleLogGroups()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutInsightRule.html
   */
  public toPutInsightRule() {
    return this.to('PutInsightRule');
  }

  /**
   * Grants permission to create managed Insight Rules
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRequestManagedResourceARNs()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutManagedInsightRules.html
   */
  public toPutManagedInsightRules() {
    return this.to('PutManagedInsightRules');
  }

  /**
   * Grants permission to create or update an alarm and associates it with the specified Amazon CloudWatch metric
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAlarmActions()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html
   */
  public toPutMetricAlarm() {
    return this.to('PutMetricAlarm');
  }

  /**
   * Grants permission to publish metric data points to Amazon CloudWatch
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNamespace()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html
   */
  public toPutMetricData() {
    return this.to('PutMetricData');
  }

  /**
   * Grants permission to create a CloudWatch metric stream, or update an existing metric stream if it already exists
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricStream.html
   */
  public toPutMetricStream() {
    return this.to('PutMetricStream');
  }

  /**
   * Grants permission to temporarily set the state of an alarm for testing purposes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_SetAlarmState.html
   */
  public toSetAlarmState() {
    return this.to('SetAlarmState');
  }

  /**
   * Grants permission to start all CloudWatch metric streams that you specify
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_StartMetricStreams.html
   */
  public toStartMetricStreams() {
    return this.to('StartMetricStreams');
  }

  /**
   * Grants permission to stop all CloudWatch metric streams that you specify
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_StopMetricStreams.html
   */
  public toStopMetricStreams() {
    return this.to('StopMetricStreams');
  }

  /**
   * Grants permission to add tags to an Amazon CloudWatch resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from an Amazon CloudWatch resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a service level objective
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html#ApplicationSignals-PreviewSDK
   */
  public toUpdateServiceLevelObjective() {
    return this.to('UpdateServiceLevelObjective');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchGetServiceLevelIndicatorReport',
      'BatchGetServiceLevelObjectiveBudgetReport',
      'DescribeAlarmHistory',
      'DescribeAlarms',
      'DescribeAlarmsForMetric',
      'DescribeAnomalyDetectors',
      'DescribeInsightRules',
      'GenerateQuery',
      'GetDashboard',
      'GetInsightRuleReport',
      'GetMetricData',
      'GetMetricStatistics',
      'GetMetricStream',
      'GetMetricWidgetImage',
      'GetService',
      'GetServiceData',
      'GetServiceLevelObjective',
      'GetTopologyDiscoveryStatus',
      'GetTopologyMap',
      'ListManagedInsightRules'
    ],
    Write: [
      'CreateServiceLevelObjective',
      'DeleteAlarms',
      'DeleteAnomalyDetector',
      'DeleteDashboards',
      'DeleteInsightRules',
      'DeleteMetricStream',
      'DeleteServiceLevelObjective',
      'DisableAlarmActions',
      'DisableInsightRules',
      'EnableAlarmActions',
      'EnableInsightRules',
      'EnableTopologyDiscovery',
      'Link',
      'PutAnomalyDetector',
      'PutCompositeAlarm',
      'PutDashboard',
      'PutInsightRule',
      'PutManagedInsightRules',
      'PutMetricAlarm',
      'PutMetricData',
      'PutMetricStream',
      'SetAlarmState',
      'StartMetricStreams',
      'StopMetricStreams',
      'UpdateServiceLevelObjective'
    ],
    List: [
      'ListDashboards',
      'ListMetricStreams',
      'ListMetrics',
      'ListServiceLevelObjectives',
      'ListServices',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type alarm to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param alarmName - Identifier for the alarmName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAlarm(alarmName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:alarm:${ alarmName }`);
  }

  /**
   * Adds a resource of type dashboard to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param dashboardName - Identifier for the dashboardName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDashboard(dashboardName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch::${ account ?? this.defaultAccount }:dashboard/${ dashboardName }`);
  }

  /**
   * Adds a resource of type insight-rule to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param insightRuleName - Identifier for the insightRuleName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInsightRule(insightRuleName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:insight-rule/${ insightRuleName }`);
  }

  /**
   * Adds a resource of type metric-stream to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param metricStreamName - Identifier for the metricStreamName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMetricStream(metricStreamName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:metric-stream/${ metricStreamName }`);
  }

  /**
   * Adds a resource of type slo to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param sloName - Identifier for the sloName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSlo(sloName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:slo/${ sloName }`);
  }

  /**
   * Adds a resource of type service to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param serviceName - Identifier for the serviceName.
   * @param uniqueAttributesHex - Identifier for the uniqueAttributesHex.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onService(serviceName: string, uniqueAttributesHex: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:service/${ serviceName }-${ uniqueAttributesHex }`);
  }

  /**
   * Filters actions based on the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateServiceLevelObjective()
   * - .toListManagedInsightRules()
   * - .toPutCompositeAlarm()
   * - .toPutInsightRule()
   * - .toPutManagedInsightRules()
   * - .toPutMetricAlarm()
   * - .toPutMetricStream()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on tag-value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - alarm
   * - insight-rule
   * - metric-stream
   * - slo
   * - service
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateServiceLevelObjective()
   * - .toListManagedInsightRules()
   * - .toPutCompositeAlarm()
   * - .toPutInsightRule()
   * - .toPutManagedInsightRules()
   * - .toPutMetricAlarm()
   * - .toPutMetricStream()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on defined alarm actions
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-alarm-actions.html
   *
   * Applies to actions:
   * - .toPutCompositeAlarm()
   * - .toPutMetricAlarm()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAlarmActions(value: string | string[], operator?: Operator | string) {
    return this.if(`AlarmActions`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on the presence of optional namespace values
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-namespace.html
   *
   * Applies to actions:
   * - .toPutMetricData()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifNamespace(value: string | string[], operator?: Operator | string) {
    return this.if(`namespace`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on the Log Groups specified in an Insight Rule
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-contributor.html
   *
   * Applies to actions:
   * - .toPutInsightRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestInsightRuleLogGroups(value: string | string[], operator?: Operator | string) {
    return this.if(`requestInsightRuleLogGroups`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Resource ARNs specified in a managed Insight Rule
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-contributor.html
   *
   * Applies to actions:
   * - .toListManagedInsightRules()
   * - .toPutManagedInsightRules()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifRequestManagedResourceARNs(value: string | string[], operator?: Operator | string) {
    return this.if(`requestManagedResourceARNs`, value, operator ?? 'ArnLike');
  }
}
