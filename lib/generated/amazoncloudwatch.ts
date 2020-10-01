import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [cloudwatch](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloudwatch extends PolicyStatement {
  public servicePrefix = 'cloudwatch';

  /**
   * Statement provider for service [cloudwatch](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Deletes all specified alarms. In the event of an error, no alarms are deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteAlarms.html
   */
  public toDeleteAlarms() {
    this.to('cloudwatch:DeleteAlarms');
    return this;
  }

  /**
   * Deletes the specified anomaly detection model from your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteAnomalyDetector.html
   */
  public toDeleteAnomalyDetector() {
    this.to('cloudwatch:DeleteAnomalyDetector');
    return this;
  }

  /**
   * Deletes all CloudWatch dashboards that you specify
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteDashboards.html
   */
  public toDeleteDashboards() {
    this.to('cloudwatch:DeleteDashboards');
    return this;
  }

  /**
   * Grants permission to delete a collection of insight rules.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteInsightRules.html
   */
  public toDeleteInsightRules() {
    this.to('cloudwatch:DeleteInsightRules');
    return this;
  }

  /**
   * Retrieves history for the specified alarm
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html
   */
  public toDescribeAlarmHistory() {
    this.to('cloudwatch:DescribeAlarmHistory');
    return this;
  }

  /**
   * Retrieves alarms with the specified names
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html
   */
  public toDescribeAlarms() {
    this.to('cloudwatch:DescribeAlarms');
    return this;
  }

  /**
   * Retrieves all alarms for a single metric
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmsForMetric.html
   */
  public toDescribeAlarmsForMetric() {
    this.to('cloudwatch:DescribeAlarmsForMetric');
    return this;
  }

  /**
   * Lists the anomaly detection models that you have created in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAnomalyDetectors.html
   */
  public toDescribeAnomalyDetectors() {
    this.to('cloudwatch:DescribeAnomalyDetectors');
    return this;
  }

  /**
   * Grants permission to describe all insight rules, currently owned by the user's account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html
   */
  public toDescribeInsightRules() {
    this.to('cloudwatch:DescribeInsightRules');
    return this;
  }

  /**
   * Disables actions for the specified alarms
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DisableAlarmActions.html
   */
  public toDisableAlarmActions() {
    this.to('cloudwatch:DisableAlarmActions');
    return this;
  }

  /**
   * Grants permission to disable a collection of insight rules.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DisableInsightRules.html
   */
  public toDisableInsightRules() {
    this.to('cloudwatch:DisableInsightRules');
    return this;
  }

  /**
   * Enables actions for the specified alarms
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_EnableAlarmActions.html
   */
  public toEnableAlarmActions() {
    this.to('cloudwatch:EnableAlarmActions');
    return this;
  }

  /**
   * Grants permission to enable a collection of insight rules.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_EnableInsightRules.html
   */
  public toEnableInsightRules() {
    this.to('cloudwatch:EnableInsightRules');
    return this;
  }

  /**
   * Displays the details of the CloudWatch dashboard you specify
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetDashboard.html
   */
  public toGetDashboard() {
    this.to('cloudwatch:GetDashboard');
    return this;
  }

  /**
   * Grants permission to return the top-N report of unique contributors over a time range for a given insight rule.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html
   */
  public toGetInsightRuleReport() {
    this.to('cloudwatch:GetInsightRuleReport');
    return this;
  }

  /**
   * Required to retrieve batch amounts of CloudWatch metric data and perform metric math on retrieved data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html
   */
  public toGetMetricData() {
    this.to('cloudwatch:GetMetricData');
    return this;
  }

  /**
   * Gets statistics for the specified metric
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html
   */
  public toGetMetricStatistics() {
    this.to('cloudwatch:GetMetricStatistics');
    return this;
  }

  /**
   * Required to retrieve snapshots of metric widgets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricWidgetImage.html
   */
  public toGetMetricWidgetImage() {
    this.to('cloudwatch:GetMetricWidgetImage');
    return this;
  }

  /**
   * Returns a list of all CloudWatch dashboards in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListDashboards.html
   */
  public toListDashboards() {
    this.to('cloudwatch:ListDashboards');
    return this;
  }

  /**
   * Returns a list of valid metrics stored for the AWS account owner
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html
   */
  public toListMetrics() {
    this.to('cloudwatch:ListMetrics');
    return this;
  }

  /**
   * This action lists tags for an Amazon CloudWatch resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('cloudwatch:ListTagsForResource');
    return this;
  }

  /**
   * Creates or updates an anomaly detection model for a CloudWatch metric.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutAnomalyDetector.html
   */
  public toPutAnomalyDetector() {
    this.to('cloudwatch:PutAnomalyDetector');
    return this;
  }

  /**
   * Creates a CloudWatch dashboard, or updates an existing dashboard if it already exists
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutDashboard.html
   */
  public toPutDashboard() {
    this.to('cloudwatch:PutDashboard');
    return this;
  }

  /**
   * Grants permission to create a new insight rule or replace an existing insight rule.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutInsightRule.html
   */
  public toPutInsightRule() {
    this.to('cloudwatch:PutInsightRule');
    return this;
  }

  /**
   * Creates or updates an alarm and associates it with the specified Amazon CloudWatch metric
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html
   */
  public toPutMetricAlarm() {
    this.to('cloudwatch:PutMetricAlarm');
    return this;
  }

  /**
   * Publishes metric data points to Amazon CloudWatch
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNamespace()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html
   */
  public toPutMetricData() {
    this.to('cloudwatch:PutMetricData');
    return this;
  }

  /**
   * Temporarily sets the state of an alarm for testing purposes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_SetAlarmState.html
   */
  public toSetAlarmState() {
    this.to('cloudwatch:SetAlarmState');
    return this;
  }

  /**
   * This action tags an Amazon CloudWatch resource.
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
    this.to('cloudwatch:TagResource');
    return this;
  }

  /**
   * This action removes a tag from an Amazon CloudWatch resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('cloudwatch:UntagResource');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "DeleteAlarms",
      "DeleteAnomalyDetector",
      "DeleteDashboards",
      "DeleteInsightRules",
      "DisableAlarmActions",
      "DisableInsightRules",
      "EnableAlarmActions",
      "EnableInsightRules",
      "PutAnomalyDetector",
      "PutDashboard",
      "PutInsightRule",
      "PutMetricAlarm",
      "PutMetricData",
      "SetAlarmState"
    ],
    "Read": [
      "DescribeAlarmHistory",
      "DescribeAlarms",
      "DescribeAlarmsForMetric",
      "DescribeAnomalyDetectors",
      "DescribeInsightRules",
      "GetDashboard",
      "GetInsightRuleReport",
      "GetMetricData",
      "GetMetricStatistics",
      "GetMetricWidgetImage"
    ],
    "List": [
      "ListDashboards",
      "ListMetrics",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type alarm to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param alarmName - Identifier for the alarmName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAlarm(alarmName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudwatch:${Region}:${Account}:alarm:${AlarmName}';
    arn = arn.replace('${AlarmName}', alarmName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dashboard to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param dashboardName - Identifier for the dashboardName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDashboard(dashboardName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudwatch::${Account}:dashboard/${DashboardName}';
    arn = arn.replace('${DashboardName}', dashboardName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type insight-rule to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param insightRuleName - Identifier for the insightRuleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInsightRule(insightRuleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudwatch:${Region}:${Account}:insight-rule/${InsightRuleName}';
    arn = arn.replace('${InsightRuleName}', insightRuleName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
  public ifNamespace(value: string | string[], operator?: string) {
    return this.if(`cloudwatch:namespace`, value, operator || 'StringLike');
  }
}
