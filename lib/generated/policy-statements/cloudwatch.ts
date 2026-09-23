import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [cloudwatch](https://docs.aws.amazon.com/service-authorization/latest/reference/list_cloudwatch.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloudwatch extends PolicyStatement {
  public servicePrefix = 'cloudwatch';

  /**
   * Statement provider for service [cloudwatch](https://docs.aws.amazon.com/service-authorization/latest/reference/list_cloudwatch.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to assume an access profile
   *
   * Access Level: Permissions management, Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_AssumeAccessProfile.html
   */
  public toAssumeAccessProfile() {
    return this.to('AssumeAccessProfile');
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
   * Grants permission to create an access grant
   *
   * Access Level: Permissions management, Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_CreateAccessGrant.html
   */
  public toCreateAccessGrant() {
    return this.to('CreateAccessGrant');
  }

  /**
   * Grants permission to create an access profile
   *
   * Access Level: Permissions management, Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_CreateAccessProfile.html
   */
  public toCreateAccessProfile() {
    return this.to('CreateAccessProfile');
  }

  /**
   * Grants permission to create an alert
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_CreateAlert.html
   */
  public toCreateAlert() {
    return this.to('CreateAlert');
  }

  /**
   * Grants permission to create a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_CreateDomain.html
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Grants permission to create a domain access grant for an organization
   *
   * Access Level: Permissions management, Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_CreateDomainAccessGrantForOrganization.html
   */
  public toCreateDomainAccessGrantForOrganization() {
    return this.to('CreateDomainAccessGrantForOrganization');
  }

  /**
   * Grants permission to create a domain for an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_CreateDomainForOrganization.html
   */
  public toCreateDomainForOrganization() {
    return this.to('CreateDomainForOrganization');
  }

  /**
   * Grants permission to create an ingestion endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_CreateIngestionEndpoint.html
   */
  public toCreateIngestionEndpoint() {
    return this.to('CreateIngestionEndpoint');
  }

  /**
   * Grants permission to create an integration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_CreateIntegration.html
   */
  public toCreateIntegration() {
    return this.to('CreateIntegration');
  }

  /**
   * Grants permission to create an omni dashboard
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_CreateOmniDashboard.html
   */
  public toCreateOmniDashboard() {
    return this.to('CreateOmniDashboard');
  }

  /**
   * Grants permission to create an omni thread
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_CreateOmniThread.html
   */
  public toCreateOmniThread() {
    return this.to('CreateOmniThread');
  }

  /**
   * Grants permission to create a one-time deep link code
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_CreateOneTimeDeepLinkCode.html
   */
  public toCreateOneTimeDeepLinkCode() {
    return this.to('CreateOneTimeDeepLinkCode');
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
   * Grants permission to create a space
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_CreateSpace.html
   */
  public toCreateSpace() {
    return this.to('CreateSpace');
  }

  /**
   * Grants permission to create a view
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_CreateView.html
   */
  public toCreateView() {
    return this.to('CreateView');
  }

  /**
   * Grants permission to delete an access grant
   *
   * Access Level: Permissions management, Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_DeleteAccessGrant.html
   */
  public toDeleteAccessGrant() {
    return this.to('DeleteAccessGrant');
  }

  /**
   * Grants permission to delete an access profile
   *
   * Access Level: Permissions management, Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_DeleteAccessProfile.html
   */
  public toDeleteAccessProfile() {
    return this.to('DeleteAccessProfile');
  }

  /**
   * Grants permission to delete an alarm mute rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteAlarmMuteRule.html
   */
  public toDeleteAlarmMuteRule() {
    return this.to('DeleteAlarmMuteRule');
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
   * Grants permission to delete an alert
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_DeleteAlert.html
   */
  public toDeleteAlert() {
    return this.to('DeleteAlert');
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
   * Grants permission to delete a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to delete a domain access grant for an organization
   *
   * Access Level: Permissions management, Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_DeleteDomainAccessGrantForOrganization.html
   */
  public toDeleteDomainAccessGrantForOrganization() {
    return this.to('DeleteDomainAccessGrantForOrganization');
  }

  /**
   * Grants permission to delete a domain for an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_DeleteDomainForOrganization.html
   */
  public toDeleteDomainForOrganization() {
    return this.to('DeleteDomainForOrganization');
  }

  /**
   * Grants permission to delete an ingestion endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_DeleteIngestionEndpoint.html
   */
  public toDeleteIngestionEndpoint() {
    return this.to('DeleteIngestionEndpoint');
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
   * Grants permission to delete an integration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_DeleteIntegration.html
   */
  public toDeleteIntegration() {
    return this.to('DeleteIntegration');
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
   * Grants permission to delete an omni dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_DeleteOmniDashboard.html
   */
  public toDeleteOmniDashboard() {
    return this.to('DeleteOmniDashboard');
  }

  /**
   * Grants permission to delete an omni thread
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_DeleteOmniThread.html
   */
  public toDeleteOmniThread() {
    return this.to('DeleteOmniThread');
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
   * Grants permission to delete a space
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_DeleteSpace.html
   */
  public toDeleteSpace() {
    return this.to('DeleteSpace');
  }

  /**
   * Grants permission to delete a view
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_DeleteView.html
   */
  public toDeleteView() {
    return this.to('DeleteView');
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
   * Grants permission to generate a summary of CloudWatch LogInsights query results in natural language using generative AI
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Insights-Query-Results-Summary.html
   */
  public toGenerateQueryResultsSummary() {
    return this.to('GenerateQueryResultsSummary');
  }

  /**
   * Grants permission to get an access grant
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetAccessGrant.html
   */
  public toGetAccessGrant() {
    return this.to('GetAccessGrant');
  }

  /**
   * Grants permission to get an access profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetAccessProfile.html
   */
  public toGetAccessProfile() {
    return this.to('GetAccessProfile');
  }

  /**
   * Grants permission to get an agent graph
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetAgentGraph.html
   */
  public toGetAgentGraph() {
    return this.to('GetAgentGraph');
  }

  /**
   * Grants permission to get an alarm mute rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetAlarmMuteRule.html
   */
  public toGetAlarmMuteRule() {
    return this.to('GetAlarmMuteRule');
  }

  /**
   * Grants permission to get an alert
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetAlert.html
   */
  public toGetAlert() {
    return this.to('GetAlert');
  }

  /**
   * Grants permission to get a context graph
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetContextGraph.html
   */
  public toGetContextGraph() {
    return this.to('GetContextGraph');
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
   * Grants permission to get a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetDataset.html
   */
  public toGetDataset() {
    return this.to('GetDataset');
  }

  /**
   * Grants permission to get a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetDomain.html
   */
  public toGetDomain() {
    return this.to('GetDomain');
  }

  /**
   * Grants permission to get a domain access grant for an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetDomainAccessGrantForOrganization.html
   */
  public toGetDomainAccessGrantForOrganization() {
    return this.to('GetDomainAccessGrantForOrganization');
  }

  /**
   * Grants permission to get a domain for an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetDomainForOrganization.html
   */
  public toGetDomainForOrganization() {
    return this.to('GetDomainForOrganization');
  }

  /**
   * Grants permission to get an ingestion endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetIngestionEndpoint.html
   */
  public toGetIngestionEndpoint() {
    return this.to('GetIngestionEndpoint');
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
   * Grants permission to get an integration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetIntegration.html
   */
  public toGetIntegration() {
    return this.to('GetIntegration');
  }

  /**
   * Grants permission to get an intelligence configuration
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetIntelligenceConfiguration.html
   */
  public toGetIntelligenceConfiguration() {
    return this.to('GetIntelligenceConfiguration');
  }

  /**
   * Grants permission to retrieve batch amounts of CloudWatch classic metric data and perform metric math on retrieved data; and grants permission to retrieve OTLP metric data using PromQL
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
   * Grants permission to get an omni dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetOmniDashboard.html
   */
  public toGetOmniDashboard() {
    return this.to('GetOmniDashboard');
  }

  /**
   * Grants permission to get an omni thread
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetOmniThread.html
   */
  public toGetOmniThread() {
    return this.to('GetOmniThread');
  }

  /**
   * Grants permission to get preferences
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetPreferences.html
   */
  public toGetPreferences() {
    return this.to('GetPreferences');
  }

  /**
   * Grants permission to fetch logs, metrics, and traces
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetRecords.html
   */
  public toGetRecords() {
    return this.to('GetRecords');
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
   * Grants permission to get a space
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetSpace.html
   */
  public toGetSpace() {
    return this.to('GetSpace');
  }

  /**
   * Grants permission to get space credentials
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetSpaceCredentials.html
   */
  public toGetSpaceCredentials() {
    return this.to('GetSpaceCredentials');
  }

  /**
   * Grants permission to get space credentials for an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetSpaceCredentialsForOrganization.html
   */
  public toGetSpaceCredentialsForOrganization() {
    return this.to('GetSpaceCredentialsForOrganization');
  }

  /**
   * Grants permission to get telemetry query results
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetTelemetryQueryResults.html
   */
  public toGetTelemetryQueryResults() {
    return this.to('GetTelemetryQueryResults');
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
   * Grants permission to get a view
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_GetView.html
   */
  public toGetView() {
    return this.to('GetView');
  }

  /**
   * Grants permission to invoke an integration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_InvokeIntegration.html
   */
  public toInvokeIntegration() {
    return this.to('InvokeIntegration');
  }

  /**
   * Grants permission to list access grants
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListAccessGrants.html
   */
  public toListAccessGrants() {
    return this.to('ListAccessGrants');
  }

  /**
   * Grants permission to list access profiles
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListAccessProfiles.html
   */
  public toListAccessProfiles() {
    return this.to('ListAccessProfiles');
  }

  /**
   * Grants permission to retrieve a list of alarm mute rules owned by the user's account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListAlarmMuteRules.html
   */
  public toListAlarmMuteRules() {
    return this.to('ListAlarmMuteRules');
  }

  /**
   * Grants permission to list alert contributors
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListAlertContributors.html
   */
  public toListAlertContributors() {
    return this.to('ListAlertContributors');
  }

  /**
   * Grants permission to list alerts
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListAlerts.html
   */
  public toListAlerts() {
    return this.to('ListAlerts');
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
   * Grants permission to list domain access grants for an organization
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListDomainAccessGrantsForOrganization.html
   */
  public toListDomainAccessGrantsForOrganization() {
    return this.to('ListDomainAccessGrantsForOrganization');
  }

  /**
   * Grants permission to list domains
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list ingestion endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListIngestionEndpoints.html
   */
  public toListIngestionEndpoints() {
    return this.to('ListIngestionEndpoints');
  }

  /**
   * Grants permission to list integrations
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListIntegrations.html
   */
  public toListIntegrations() {
    return this.to('ListIntegrations');
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
   * Grants permission to list omni dashboards
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListOmniDashboards.html
   */
  public toListOmniDashboards() {
    return this.to('ListOmniDashboards');
  }

  /**
   * Grants permission to list omni threads
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListOmniThreads.html
   */
  public toListOmniThreads() {
    return this.to('ListOmniThreads');
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
   * Grants permission to list access to a space
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListSpaceAccess.html
   */
  public toListSpaceAccess() {
    return this.to('ListSpaceAccess');
  }

  /**
   * Grants permission to list spaces
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListSpaces.html
   */
  public toListSpaces() {
    return this.to('ListSpaces');
  }

  /**
   * Grants permission to list spaces for an organization
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListSpacesForOrganization.html
   */
  public toListSpacesForOrganization() {
    return this.to('ListSpacesForOrganization');
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
   * Grants permission to list telemetry fields
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListTelemetryFields.html
   */
  public toListTelemetryFields() {
    return this.to('ListTelemetryFields');
  }

  /**
   * Grants permission to list telemetry query sessions
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListTelemetryQuerySessions.html
   */
  public toListTelemetryQuerySessions() {
    return this.to('ListTelemetryQuerySessions');
  }

  /**
   * Grants permission to list views
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_ListViews.html
   */
  public toListViews() {
    return this.to('ListViews');
  }

  /**
   * Grants permission to create or update an alarm mute rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutAlarmMuteRule.html
   */
  public toPutAlarmMuteRule() {
    return this.to('PutAlarmMuteRule');
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
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutInsightRule.html
   */
  public toPutInsightRule() {
    return this.to('PutInsightRule');
  }

  /**
   * Grants permission to configure an intelligence configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_PutIntelligenceConfiguration.html
   */
  public toPutIntelligenceConfiguration() {
    return this.to('PutIntelligenceConfiguration');
  }

  /**
   * Grants permission to create or update a log-based alarm and associate it with a CloudWatch Logs Insights scheduled query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutLogAlarm.html
   */
  public toPutLogAlarm() {
    return this.to('PutLogAlarm');
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
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html
   */
  public toPutMetricAlarm() {
    return this.to('PutMetricAlarm');
  }

  /**
   * Grants permission to publish metric data points to Amazon CloudWatch using CloudWatch and OTLP formats
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricStream.html
   */
  public toPutMetricStream() {
    return this.to('PutMetricStream');
  }

  /**
   * Grants permission to query traces
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_QueryTraces.html
   */
  public toQueryTraces() {
    return this.to('QueryTraces');
  }

  /**
   * Grants permission to search principals
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_SearchPrincipals.html
   */
  public toSearchPrincipals() {
    return this.to('SearchPrincipals');
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
   * Grants permission to start an omni thread session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_StartOmniThreadSession.html
   */
  public toStartOmniThreadSession() {
    return this.to('StartOmniThreadSession');
  }

  /**
   * Grants permission to start a telemetry query
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_StartTelemetryQuery.html
   */
  public toStartTelemetryQuery() {
    return this.to('StartTelemetryQuery');
  }

  /**
   * Grants permission to start a telemetry query session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_StartTelemetryQuerySession.html
   */
  public toStartTelemetryQuerySession() {
    return this.to('StartTelemetryQuerySession');
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
   * Grants permission to stop a telemetry query
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_StopTelemetryQuery.html
   */
  public toStopTelemetryQuery() {
    return this.to('StopTelemetryQuery');
  }

  /**
   * Grants permission to stop a telemetry query session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_StopTelemetryQuerySession.html
   */
  public toStopTelemetryQuerySession() {
    return this.to('StopTelemetryQuerySession');
  }

  /**
   * Grants permission to submit feedback
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_SubmitFeedback.html
   */
  public toSubmitFeedback() {
    return this.to('SubmitFeedback');
  }

  /**
   * Grants permission to add tags to an Amazon CloudWatch resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from an Amazon CloudWatch resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an access profile
   *
   * Access Level: Permissions management, Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_UpdateAccessProfile.html
   */
  public toUpdateAccessProfile() {
    return this.to('UpdateAccessProfile');
  }

  /**
   * Grants permission to update an alert
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_UpdateAlert.html
   */
  public toUpdateAlert() {
    return this.to('UpdateAlert');
  }

  /**
   * Grants permission to update a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_UpdateDomain.html
   */
  public toUpdateDomain() {
    return this.to('UpdateDomain');
  }

  /**
   * Grants permission to update a domain for an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_UpdateDomainForOrganization.html
   */
  public toUpdateDomainForOrganization() {
    return this.to('UpdateDomainForOrganization');
  }

  /**
   * Grants permission to update an ingestion endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_UpdateIngestionEndpoint.html
   */
  public toUpdateIngestionEndpoint() {
    return this.to('UpdateIngestionEndpoint');
  }

  /**
   * Grants permission to update an integration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_UpdateIntegration.html
   */
  public toUpdateIntegration() {
    return this.to('UpdateIntegration');
  }

  /**
   * Grants permission to update an omni dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_UpdateOmniDashboard.html
   */
  public toUpdateOmniDashboard() {
    return this.to('UpdateOmniDashboard');
  }

  /**
   * Grants permission to update an omni thread
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_UpdateOmniThread.html
   */
  public toUpdateOmniThread() {
    return this.to('UpdateOmniThread');
  }

  /**
   * Grants permission to update preferences
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifHasAccessGrant()
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_UpdatePreferences.html
   */
  public toUpdatePreferences() {
    return this.to('UpdatePreferences');
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

  /**
   * Grants permission to update a space
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_UpdateSpace.html
   */
  public toUpdateSpace() {
    return this.to('UpdateSpace');
  }

  /**
   * Grants permission to update a view
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/API_UpdateView.html
   */
  public toUpdateView() {
    return this.to('UpdateView');
  }

  /**
   * Grants permission to make API calls to CloudWatch using bearer token authentication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/permissions-reference-cw.html
   */
  public toCallWithBearerToken() {
    return this.to('CallWithBearerToken');
  }

  /**
   * Grants permission to delete a pipeline rule for CloudWatch pipelines for OTel metric processing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/permissions-reference-cw.html
   */
  public toDeletePipelineRule() {
    return this.to('DeletePipelineRule');
  }

  /**
   * Grants permission to retrieve the status of OTel Enrichment of vended metrics for PromQL querying
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/permissions-reference-cw.html
   */
  public toGetOTelEnrichment() {
    return this.to('GetOTelEnrichment');
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
   * Grants permission to retrieve all the entities that are emitting a given metric
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/permissions-reference-cw.html
   */
  public toListEntitiesForMetric() {
    return this.to('ListEntitiesForMetric');
  }

  /**
   * Grants permission to create or update a pipeline rule for CloudWatch pipelines for OTel metric processing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/permissions-reference-cw.html
   */
  public toPutPipelineRule() {
    return this.to('PutPipelineRule');
  }

  /**
   * Grants permission to enable OTel Enrichment of vended metrics for PromQL querying
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/permissions-reference-cw.html
   */
  public toStartOTelEnrichment() {
    return this.to('StartOTelEnrichment');
  }

  /**
   * Grants permission to disable OTel Enrichment of vended metrics for PromQL querying
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/permissions-reference-cw.html
   */
  public toStopOTelEnrichment() {
    return this.to('StopOTelEnrichment');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AssumeAccessProfile',
      'CreateAccessGrant',
      'CreateAccessProfile',
      'CreateDomainAccessGrantForOrganization',
      'DeleteAccessGrant',
      'DeleteAccessProfile',
      'DeleteDomainAccessGrantForOrganization',
      'UpdateAccessProfile'
    ],
    Write: [
      'AssumeAccessProfile',
      'CreateAccessGrant',
      'CreateAccessProfile',
      'CreateAlert',
      'CreateDomain',
      'CreateDomainAccessGrantForOrganization',
      'CreateDomainForOrganization',
      'CreateIngestionEndpoint',
      'CreateIntegration',
      'CreateOmniDashboard',
      'CreateOmniThread',
      'CreateOneTimeDeepLinkCode',
      'CreateServiceLevelObjective',
      'CreateSpace',
      'CreateView',
      'DeleteAccessGrant',
      'DeleteAccessProfile',
      'DeleteAlarmMuteRule',
      'DeleteAlarms',
      'DeleteAlert',
      'DeleteAnomalyDetector',
      'DeleteDashboards',
      'DeleteDomain',
      'DeleteDomainAccessGrantForOrganization',
      'DeleteDomainForOrganization',
      'DeleteIngestionEndpoint',
      'DeleteInsightRules',
      'DeleteIntegration',
      'DeleteMetricStream',
      'DeleteOmniDashboard',
      'DeleteOmniThread',
      'DeleteServiceLevelObjective',
      'DeleteSpace',
      'DeleteView',
      'DisableAlarmActions',
      'DisableInsightRules',
      'EnableAlarmActions',
      'EnableInsightRules',
      'EnableTopologyDiscovery',
      'InvokeIntegration',
      'PutAlarmMuteRule',
      'PutAnomalyDetector',
      'PutCompositeAlarm',
      'PutDashboard',
      'PutInsightRule',
      'PutIntelligenceConfiguration',
      'PutLogAlarm',
      'PutManagedInsightRules',
      'PutMetricAlarm',
      'PutMetricData',
      'PutMetricStream',
      'QueryTraces',
      'SearchPrincipals',
      'SetAlarmState',
      'StartMetricStreams',
      'StartOmniThreadSession',
      'StartTelemetryQuery',
      'StartTelemetryQuerySession',
      'StopMetricStreams',
      'StopTelemetryQuery',
      'StopTelemetryQuerySession',
      'SubmitFeedback',
      'TagResource',
      'UntagResource',
      'UpdateAccessProfile',
      'UpdateAlert',
      'UpdateDomain',
      'UpdateDomainForOrganization',
      'UpdateIngestionEndpoint',
      'UpdateIntegration',
      'UpdateOmniDashboard',
      'UpdateOmniThread',
      'UpdatePreferences',
      'UpdateServiceLevelObjective',
      'UpdateSpace',
      'UpdateView',
      'CallWithBearerToken',
      'DeletePipelineRule',
      'Link',
      'PutPipelineRule',
      'StartOTelEnrichment',
      'StopOTelEnrichment'
    ],
    Read: [
      'BatchGetServiceLevelIndicatorReport',
      'BatchGetServiceLevelObjectiveBudgetReport',
      'DescribeAlarmHistory',
      'DescribeAlarms',
      'DescribeAlarmsForMetric',
      'DescribeAnomalyDetectors',
      'DescribeInsightRules',
      'GenerateQuery',
      'GenerateQueryResultsSummary',
      'GetAccessGrant',
      'GetAccessProfile',
      'GetAgentGraph',
      'GetAlarmMuteRule',
      'GetAlert',
      'GetContextGraph',
      'GetDashboard',
      'GetDataset',
      'GetDomain',
      'GetDomainAccessGrantForOrganization',
      'GetDomainForOrganization',
      'GetIngestionEndpoint',
      'GetInsightRuleReport',
      'GetIntegration',
      'GetIntelligenceConfiguration',
      'GetMetricData',
      'GetMetricStatistics',
      'GetMetricStream',
      'GetMetricWidgetImage',
      'GetOmniDashboard',
      'GetOmniThread',
      'GetPreferences',
      'GetRecords',
      'GetService',
      'GetServiceLevelObjective',
      'GetSpace',
      'GetSpaceCredentials',
      'GetSpaceCredentialsForOrganization',
      'GetTelemetryQueryResults',
      'GetTopologyMap',
      'GetView',
      'ListManagedInsightRules',
      'GetOTelEnrichment',
      'GetServiceData',
      'GetTopologyDiscoveryStatus'
    ],
    List: [
      'ListAccessGrants',
      'ListAccessProfiles',
      'ListAlarmMuteRules',
      'ListAlertContributors',
      'ListAlerts',
      'ListDashboards',
      'ListDomainAccessGrantsForOrganization',
      'ListDomains',
      'ListIngestionEndpoints',
      'ListIntegrations',
      'ListMetricStreams',
      'ListMetrics',
      'ListOmniDashboards',
      'ListOmniThreads',
      'ListServiceLevelObjectives',
      'ListServices',
      'ListSpaceAccess',
      'ListSpaces',
      'ListSpacesForOrganization',
      'ListTagsForResource',
      'ListTelemetryFields',
      'ListTelemetryQuerySessions',
      'ListViews',
      'ListEntitiesForMetric'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type access-grant to the statement
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/Welcome.html
   *
   * @param grantId - Identifier for the grantId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccessGrant(grantId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:access-grant/${ grantId }`);
  }

  /**
   * Adds a resource of type access-profile to the statement
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/Welcome.html
   *
   * @param profileId - Identifier for the profileId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccessProfile(profileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:access-profile/${ profileId }`);
  }

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
   * Adds a resource of type alarm-mute-rule to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param alarmMuteRuleName - Identifier for the alarmMuteRuleName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAlarmMuteRule(alarmMuteRuleName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:alarm-mute-rule:${ alarmMuteRuleName }`);
  }

  /**
   * Adds a resource of type alert to the statement
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/Welcome.html
   *
   * @param alertId - Identifier for the alertId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAlert(alertId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:alert/${ alertId }`);
  }

  /**
   * Adds a resource of type dashboard to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param dashboardName - Identifier for the dashboardName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDashboard(dashboardName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch::${ account ?? this.defaultAccount }:dashboard/${ dashboardName }`);
  }

  /**
   * Adds a resource of type dataset to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param datasetId - Identifier for the datasetId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataset(datasetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:dataset/${ datasetId }`);
  }

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/Welcome.html
   *
   * @param domainId - Identifier for the domainId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomain(domainId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainId }`);
  }

  /**
   * Adds a resource of type ingestion-endpoint to the statement
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/Welcome.html
   *
   * @param ingestionEndpointName - Identifier for the ingestionEndpointName.
   * @param ingestionEndpointId - Identifier for the ingestionEndpointId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIngestionEndpoint(ingestionEndpointName: string, ingestionEndpointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ingestion-endpoint/${ ingestionEndpointName }/${ ingestionEndpointId }`);
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
   * Adds a resource of type integration to the statement
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/Welcome.html
   *
   * @param integrationId - Identifier for the integrationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegration(integrationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:integration/${ integrationId }`);
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
   * Adds a resource of type omni-dashboard to the statement
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/Welcome.html
   *
   * @param dashboardId - Identifier for the dashboardId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOmniDashboard(dashboardId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:omni-dashboard/${ dashboardId }`);
  }

  /**
   * Adds a resource of type organization-access-grant to the statement
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/Welcome.html
   *
   * @param grantId - Identifier for the grantId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOrganizationAccessGrant(grantId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:organization-access-grant/${ grantId }`);
  }

  /**
   * Adds a resource of type organization-domain to the statement
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/Welcome.html
   *
   * @param domainId - Identifier for the domainId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOrganizationDomain(domainId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:organization-domain/${ domainId }`);
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
   * Adds a resource of type space to the statement
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/Welcome.html
   *
   * @param spaceId - Identifier for the spaceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSpace(spaceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:space/${ spaceId }`);
  }

  /**
   * Adds a resource of type view to the statement
   *
   * https://docs.aws.amazon.com/cloudwatch-omni/latest/APIReference/Welcome.html
   *
   * @param viewName - Identifier for the viewName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onView(viewName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudwatch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:view/${ viewName }`);
  }

  /**
   * Filters access by the presence of tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateServiceLevelObjective()
   * - .toListManagedInsightRules()
   * - .toPutAlarmMuteRule()
   * - .toPutCompositeAlarm()
   * - .toPutDashboard()
   * - .toPutInsightRule()
   * - .toPutLogAlarm()
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
   * Filters access by tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toBatchGetServiceLevelObjectiveBudgetReport()
   * - .toDeleteAccessGrant()
   * - .toDeleteAccessProfile()
   * - .toDeleteAlarmMuteRule()
   * - .toDeleteAlarms()
   * - .toDeleteAlert()
   * - .toDeleteDashboards()
   * - .toDeleteDomain()
   * - .toDeleteDomainAccessGrantForOrganization()
   * - .toDeleteDomainForOrganization()
   * - .toDeleteIngestionEndpoint()
   * - .toDeleteInsightRules()
   * - .toDeleteIntegration()
   * - .toDeleteMetricStream()
   * - .toDeleteOmniDashboard()
   * - .toDeleteServiceLevelObjective()
   * - .toDeleteSpace()
   * - .toDeleteView()
   * - .toDescribeAlarmHistory()
   * - .toDescribeAlarms()
   * - .toDisableAlarmActions()
   * - .toDisableInsightRules()
   * - .toEnableAlarmActions()
   * - .toEnableInsightRules()
   * - .toGetAccessGrant()
   * - .toGetAccessProfile()
   * - .toGetAlarmMuteRule()
   * - .toGetAlert()
   * - .toGetDashboard()
   * - .toGetDataset()
   * - .toGetDomain()
   * - .toGetDomainAccessGrantForOrganization()
   * - .toGetDomainForOrganization()
   * - .toGetIngestionEndpoint()
   * - .toGetInsightRuleReport()
   * - .toGetIntegration()
   * - .toGetMetricData()
   * - .toGetMetricStream()
   * - .toGetOmniDashboard()
   * - .toGetService()
   * - .toGetServiceLevelObjective()
   * - .toGetSpace()
   * - .toGetView()
   * - .toListAlarmMuteRules()
   * - .toListMetrics()
   * - .toListTagsForResource()
   * - .toPutAlarmMuteRule()
   * - .toPutCompositeAlarm()
   * - .toPutDashboard()
   * - .toPutInsightRule()
   * - .toPutLogAlarm()
   * - .toPutMetricAlarm()
   * - .toPutMetricData()
   * - .toPutMetricStream()
   * - .toSetAlarmState()
   * - .toStartMetricStreams()
   * - .toStopMetricStreams()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateAccessProfile()
   * - .toUpdateAlert()
   * - .toUpdateDomain()
   * - .toUpdateDomainForOrganization()
   * - .toUpdateIngestionEndpoint()
   * - .toUpdateIntegration()
   * - .toUpdateOmniDashboard()
   * - .toUpdateServiceLevelObjective()
   * - .toUpdateSpace()
   * - .toUpdateView()
   * - .toDeletePipelineRule()
   * - .toGetServiceData()
   * - .toPutPipelineRule()
   *
   * Applies to resource types:
   * - access-grant
   * - access-profile
   * - alarm
   * - alarm-mute-rule
   * - alert
   * - dashboard
   * - dataset
   * - domain
   * - ingestion-endpoint
   * - insight-rule
   * - integration
   * - metric-stream
   * - omni-dashboard
   * - organization-access-grant
   * - organization-domain
   * - service
   * - slo
   * - space
   * - view
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateServiceLevelObjective()
   * - .toListManagedInsightRules()
   * - .toPutAlarmMuteRule()
   * - .toPutCompositeAlarm()
   * - .toPutDashboard()
   * - .toPutInsightRule()
   * - .toPutLogAlarm()
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
   * Filters access by defined alarm actions
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-alarm-actions.html
   *
   * Applies to actions:
   * - .toPutCompositeAlarm()
   * - .toPutLogAlarm()
   * - .toPutMetricAlarm()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAlarmActions(value: string | string[], operator?: Operator | string) {
    return this.if(`AlarmActions`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of access grants associated with the request
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/reference_policies_condition-keys.html
   *
   * Applies to actions:
   * - .toAssumeAccessProfile()
   * - .toCreateAccessGrant()
   * - .toCreateAccessProfile()
   * - .toCreateAlert()
   * - .toCreateDomainAccessGrantForOrganization()
   * - .toCreateIntegration()
   * - .toCreateOmniDashboard()
   * - .toCreateOmniThread()
   * - .toCreateView()
   * - .toDeleteAccessGrant()
   * - .toDeleteAccessProfile()
   * - .toDeleteAlert()
   * - .toDeleteDomainAccessGrantForOrganization()
   * - .toDeleteIntegration()
   * - .toDeleteOmniDashboard()
   * - .toDeleteOmniThread()
   * - .toDeleteView()
   * - .toGetAccessGrant()
   * - .toGetAccessProfile()
   * - .toGetAlert()
   * - .toGetContextGraph()
   * - .toGetDomain()
   * - .toGetDomainAccessGrantForOrganization()
   * - .toGetIntegration()
   * - .toGetIntelligenceConfiguration()
   * - .toGetMetricData()
   * - .toGetOmniDashboard()
   * - .toGetOmniThread()
   * - .toGetPreferences()
   * - .toGetRecords()
   * - .toGetSpace()
   * - .toGetTelemetryQueryResults()
   * - .toGetView()
   * - .toInvokeIntegration()
   * - .toListAccessGrants()
   * - .toListAccessProfiles()
   * - .toListAlertContributors()
   * - .toListAlerts()
   * - .toListDomainAccessGrantsForOrganization()
   * - .toListIntegrations()
   * - .toListMetrics()
   * - .toListOmniDashboards()
   * - .toListOmniThreads()
   * - .toListSpaceAccess()
   * - .toListSpaces()
   * - .toListSpacesForOrganization()
   * - .toListTagsForResource()
   * - .toListTelemetryFields()
   * - .toListTelemetryQuerySessions()
   * - .toListViews()
   * - .toPutIntelligenceConfiguration()
   * - .toSearchPrincipals()
   * - .toStartOmniThreadSession()
   * - .toStartTelemetryQuery()
   * - .toStartTelemetryQuerySession()
   * - .toStopTelemetryQuery()
   * - .toStopTelemetryQuerySession()
   * - .toSubmitFeedback()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateAccessProfile()
   * - .toUpdateAlert()
   * - .toUpdateIntegration()
   * - .toUpdateOmniDashboard()
   * - .toUpdateOmniThread()
   * - .toUpdatePreferences()
   * - .toUpdateSpace()
   * - .toUpdateView()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifHasAccessGrant(value: string | string[], operator?: Operator | string) {
    return this.if(`HasAccessGrant`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of optional namespace values
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
   * Filters access by the Log Groups specified in an Insight Rule
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
