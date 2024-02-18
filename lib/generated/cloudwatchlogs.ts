import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [logs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchlogs.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Logs extends PolicyStatement {
  public servicePrefix = 'logs';

  /**
   * Statement provider for service [logs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchlogs.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate the specified AWS Key Management Service (AWS KMS) customer master key (CMK) with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_AssociateKmsKey.html
   */
  public toAssociateKmsKey() {
    return this.to('AssociateKmsKey');
  }

  /**
   * Grants permission to cancel an export task if it is in PENDING or RUNNING state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html
   */
  public toCancelExportTask() {
    return this.to('CancelExportTask');
  }

  /**
   * Grants permission to create a delivery connecting a delivery source to a delivery destination
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html
   */
  public toCreateDelivery() {
    return this.to('CreateDelivery');
  }

  /**
   * Grants permission to create an ExportTask which allows you to efficiently export data from a Log Group to your Amazon S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateExportTask.html
   */
  public toCreateExportTask() {
    return this.to('CreateExportTask');
  }

  /**
   * Grants permission to create a log anomaly detector
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogAnomalyDetector.html
   */
  public toCreateLogAnomalyDetector() {
    return this.to('CreateLogAnomalyDetector');
  }

  /**
   * Grants permission to create the log delivery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  public toCreateLogDelivery() {
    return this.to('CreateLogDelivery');
  }

  /**
   * Grants permission to create a new log group with the specified name
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html
   */
  public toCreateLogGroup() {
    return this.to('CreateLogGroup');
  }

  /**
   * Grants permission to create a new log stream with the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogStream.html
   */
  public toCreateLogStream() {
    return this.to('CreateLogStream');
  }

  /**
   * Grants permission to delete a data protection policy attached to an account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDataProtectionPolicy.html
   */
  public toDeleteAccountPolicy() {
    return this.to('DeleteAccountPolicy');
  }

  /**
   * Grants permission to delete a data protection policy attached to a log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDataProtectionPolicy.html
   */
  public toDeleteDataProtectionPolicy() {
    return this.to('DeleteDataProtectionPolicy');
  }

  /**
   * Grants permission to delete a delivery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDelivery.html
   */
  public toDeleteDelivery() {
    return this.to('DeleteDelivery');
  }

  /**
   * Grants permission to delete a delivery destination after all associated deliveries are deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDeliveryDestination.html
   */
  public toDeleteDeliveryDestination() {
    return this.to('DeleteDeliveryDestination');
  }

  /**
   * Grants permission to delete a delivery destination policy associated with a delivery destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDeliveryDestinationPolicy.html
   */
  public toDeleteDeliveryDestinationPolicy() {
    return this.to('DeleteDeliveryDestinationPolicy');
  }

  /**
   * Grants permission to delete a delivery source after all associated deliveries are deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDeliverySource.html
   */
  public toDeleteDeliverySource() {
    return this.to('DeleteDeliverySource');
  }

  /**
   * Grants permission to delete the destination with the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDestination.html
   */
  public toDeleteDestination() {
    return this.to('DeleteDestination');
  }

  /**
   * Grants permission to delete a log anomaly detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogAnomalyDetector.html
   */
  public toDeleteLogAnomalyDetector() {
    return this.to('DeleteLogAnomalyDetector');
  }

  /**
   * Grants permission to delete the log delivery information for specified log delivery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  public toDeleteLogDelivery() {
    return this.to('DeleteLogDelivery');
  }

  /**
   * Grants permission to delete the log group with the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogGroup.html
   */
  public toDeleteLogGroup() {
    return this.to('DeleteLogGroup');
  }

  /**
   * Grants permission to delete a log stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogStream.html
   */
  public toDeleteLogStream() {
    return this.to('DeleteLogStream');
  }

  /**
   * Grants permission to delete a metric filter associated with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteMetricFilter.html
   */
  public toDeleteMetricFilter() {
    return this.to('DeleteMetricFilter');
  }

  /**
   * Grants permission to delete a saved CloudWatch Logs Insights query definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteQueryDefinition.html
   */
  public toDeleteQueryDefinition() {
    return this.to('DeleteQueryDefinition');
  }

  /**
   * Grants permission to delete a resource policy from this account
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete the retention policy of the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html
   */
  public toDeleteRetentionPolicy() {
    return this.to('DeleteRetentionPolicy');
  }

  /**
   * Grants permission to delete a subscription filter associated with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteSubscriptionFilter.html
   */
  public toDeleteSubscriptionFilter() {
    return this.to('DeleteSubscriptionFilter');
  }

  /**
   * Grants permission to retrieve a data protection policy attached to an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeAccountPolicies.html
   */
  public toDescribeAccountPolicies() {
    return this.to('DescribeAccountPolicies');
  }

  /**
   * Grants permission to retrieve a list of deliveries an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveries.html
   */
  public toDescribeDeliveries() {
    return this.to('DescribeDeliveries');
  }

  /**
   * Grants permission to retrieve a list of delivery destinations an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveryDestinations.html
   */
  public toDescribeDeliveryDestinations() {
    return this.to('DescribeDeliveryDestinations');
  }

  /**
   * Grants permission to retrieve a list of delivery sources in an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliverySources.html
   */
  public toDescribeDeliverySources() {
    return this.to('DescribeDeliverySources');
  }

  /**
   * Grants permission to return all the destinations that are associated with the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDestinations.html
   */
  public toDescribeDestinations() {
    return this.to('DescribeDestinations');
  }

  /**
   * Grants permission to return all the export tasks that are associated with the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html
   */
  public toDescribeExportTasks() {
    return this.to('DescribeExportTasks');
  }

  /**
   * Grants permission to return all the log groups that are associated with the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html
   */
  public toDescribeLogGroups() {
    return this.to('DescribeLogGroups');
  }

  /**
   * Grants permission to return all the log streams that are associated with the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogStreams.html
   */
  public toDescribeLogStreams() {
    return this.to('DescribeLogStreams');
  }

  /**
   * Grants permission to return all the metrics filters associated with the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeMetricFilters.html
   */
  public toDescribeMetricFilters() {
    return this.to('DescribeMetricFilters');
  }

  /**
   * Grants permission to return a list of CloudWatch Logs Insights queries that are scheduled, executing, or have been executed recently in this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueries.html
   */
  public toDescribeQueries() {
    return this.to('DescribeQueries');
  }

  /**
   * Grants permission to return a paginated list of your saved CloudWatch Logs Insights query definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html
   */
  public toDescribeQueryDefinitions() {
    return this.to('DescribeQueryDefinitions');
  }

  /**
   * Grants permission to return all the resource policies in this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeResourcePolicies.html
   */
  public toDescribeResourcePolicies() {
    return this.to('DescribeResourcePolicies');
  }

  /**
   * Grants permission to return all the subscription filters associated with the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html
   */
  public toDescribeSubscriptionFilters() {
    return this.to('DescribeSubscriptionFilters');
  }

  /**
   * Grants permission to disassociate the associated AWS Key Management Service (AWS KMS) customer master key (CMK) from the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DisassociateKmsKey.html
   */
  public toDisassociateKmsKey() {
    return this.to('DisassociateKmsKey');
  }

  /**
   * Grants permission to retrieve log events, optionally filtered by a filter pattern from the specified log group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html
   */
  public toFilterLogEvents() {
    return this.to('FilterLogEvents');
  }

  /**
   * Grants permission to retrieve a data protection policy attached to a log group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDataProtectionPolicy.html
   */
  public toGetDataProtectionPolicy() {
    return this.to('GetDataProtectionPolicy');
  }

  /**
   * Grants permission to retrieve a single delivery
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDelivery.html
   */
  public toGetDelivery() {
    return this.to('GetDelivery');
  }

  /**
   * Grants permission to retrieve a single delivery destination
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDeliveryDestination.html
   */
  public toGetDeliveryDestination() {
    return this.to('GetDeliveryDestination');
  }

  /**
   * Grants permission to retrieve a delivery destination policy attached to a delivery destination
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDeliveryDestinationPolicy.html
   */
  public toGetDeliveryDestinationPolicy() {
    return this.to('GetDeliveryDestinationPolicy');
  }

  /**
   * Grants permission to retrieve a single delivery source
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetDeliverySource.html
   */
  public toGetDeliverySource() {
    return this.to('GetDeliverySource');
  }

  /**
   * Grants permission to get a log anomaly detector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogAnomalyDetector.html
   */
  public toGetLogAnomalyDetector() {
    return this.to('GetLogAnomalyDetector');
  }

  /**
   * Grants permission to get the log delivery information for specified log delivery
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  public toGetLogDelivery() {
    return this.to('GetLogDelivery');
  }

  /**
   * Grants permission to retrieve log events from the specified log stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html
   */
  public toGetLogEvents() {
    return this.to('GetLogEvents');
  }

  /**
   * Grants permission to return a list of the fields that are included in log events in the specified log group, along with the percentage of log events that contain each field
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogGroupFields.html
   */
  public toGetLogGroupFields() {
    return this.to('GetLogGroupFields');
  }

  /**
   * Grants permission to retrieve all the fields and values of a single log event
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html
   */
  public toGetLogRecord() {
    return this.to('GetLogRecord');
  }

  /**
   * Grants permission to return the results from the specified query
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html
   */
  public toGetQueryResults() {
    return this.to('GetQueryResults');
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
   * Grants permission to list all anomalies detected in the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListAnomalies.html
   */
  public toListAnomalies() {
    return this.to('ListAnomalies');
  }

  /**
   * Grants permission to return all the anomaly detectors that are associated with the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListLogAnomalyDetectors.html
   */
  public toListLogAnomalyDetectors() {
    return this.to('ListLogAnomalyDetectors');
  }

  /**
   * Grants permission to list all the log deliveries for specified account and/or log source
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  public toListLogDeliveries() {
    return this.to('ListLogDeliveries');
  }

  /**
   * Grants permission to list the tags for the specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the tags for the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html
   */
  public toListTagsLogGroup() {
    return this.to('ListTagsLogGroup');
  }

  /**
   * Grants permission to attach a data protection policy at account level to detect and redact sensitive information from log events
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutAccountPolicy.html
   */
  public toPutAccountPolicy() {
    return this.to('PutAccountPolicy');
  }

  /**
   * Grants permission to attach a data protection policy to detect and redact sensitive information from log events
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html
   */
  public toPutDataProtectionPolicy() {
    return this.to('PutDataProtectionPolicy');
  }

  /**
   * Grants permission to create/update a delivery destination
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifDeliveryDestinationResourceArn()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html
   */
  public toPutDeliveryDestination() {
    return this.to('PutDeliveryDestination');
  }

  /**
   * Grants permission to attach a delivery destination policy to a delivery destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html
   */
  public toPutDeliveryDestinationPolicy() {
    return this.to('PutDeliveryDestinationPolicy');
  }

  /**
   * Grants permission to create/update a delivery source
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifLogGeneratingResourceArns()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html
   */
  public toPutDeliverySource() {
    return this.to('PutDeliverySource');
  }

  /**
   * Grants permission to create or update a Destination
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html
   */
  public toPutDestination() {
    return this.to('PutDestination');
  }

  /**
   * Grants permission to create or update an access policy associated with an existing Destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html
   */
  public toPutDestinationPolicy() {
    return this.to('PutDestinationPolicy');
  }

  /**
   * Grants permission to upload a batch of log events to the specified log stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html
   */
  public toPutLogEvents() {
    return this.to('PutLogEvents');
  }

  /**
   * Grants permission to create or update a metric filter and associates it with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutMetricFilter.html
   */
  public toPutMetricFilter() {
    return this.to('PutMetricFilter');
  }

  /**
   * Grants permission to create or update a query definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutQueryDefinition.html
   */
  public toPutQueryDefinition() {
    return this.to('PutQueryDefinition');
  }

  /**
   * Grants permission to create or update a resource policy allowing other AWS services to put log events to this account
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to set the retention of the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html
   */
  public toPutRetentionPolicy() {
    return this.to('PutRetentionPolicy');
  }

  /**
   * Grants permission to create or update a subscription filter and associates it with the specified log group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html
   */
  public toPutSubscriptionFilter() {
    return this.to('PutSubscriptionFilter');
  }

  /**
   * Grants permission to start a Live Tail session in CloudWatch Logs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartLiveTail.html
   */
  public toStartLiveTail() {
    return this.to('StartLiveTail');
  }

  /**
   * Grants permission to schedule a query of a log group using CloudWatch Logs Insights
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html
   */
  public toStartQuery() {
    return this.to('StartQuery');
  }

  /**
   * Grants permission to stop a Live Tail session that is in progress
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs_LiveTail.html
   */
  public toStopLiveTail() {
    return this.to('StopLiveTail');
  }

  /**
   * Grants permission to stop a CloudWatch Logs Insights query that is in progress
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StopQuery.html
   */
  public toStopQuery() {
    return this.to('StopQuery');
  }

  /**
   * Grants permission to add or update the specified tags for the specified log group
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagLogGroup.html
   */
  public toTagLogGroup() {
    return this.to('TagLogGroup');
  }

  /**
   * Grants permission to add or update the specified tags for the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to test the filter pattern of a metric filter against a sample of log event messages
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TestMetricFilter.html
   */
  public toTestMetricFilter() {
    return this.to('TestMetricFilter');
  }

  /**
   * Grants permission to fetch unmasked log events that have been redacted with a data protection policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html
   */
  public toUnmask() {
    return this.to('Unmask');
  }

  /**
   * Grants permission to remove the specified tags from the specified log group
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagLogGroup.html
   */
  public toUntagLogGroup() {
    return this.to('UntagLogGroup');
  }

  /**
   * Grants permission to remove the specified tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an anomaly reported by a log anomaly detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateAnomaly.html
   */
  public toUpdateAnomaly() {
    return this.to('UpdateAnomaly');
  }

  /**
   * Grants permission to update a log anomaly detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateLogAnomalyDetector.html
   */
  public toUpdateLogAnomalyDetector() {
    return this.to('UpdateLogAnomalyDetector');
  }

  /**
   * Grants permission to update the log delivery information for specified log delivery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  public toUpdateLogDelivery() {
    return this.to('UpdateLogDelivery');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateKmsKey',
      'CancelExportTask',
      'CreateDelivery',
      'CreateExportTask',
      'CreateLogAnomalyDetector',
      'CreateLogDelivery',
      'CreateLogGroup',
      'CreateLogStream',
      'DeleteAccountPolicy',
      'DeleteDataProtectionPolicy',
      'DeleteDelivery',
      'DeleteDeliveryDestination',
      'DeleteDeliveryDestinationPolicy',
      'DeleteDeliverySource',
      'DeleteDestination',
      'DeleteLogAnomalyDetector',
      'DeleteLogDelivery',
      'DeleteLogGroup',
      'DeleteLogStream',
      'DeleteMetricFilter',
      'DeleteQueryDefinition',
      'DeleteRetentionPolicy',
      'DeleteSubscriptionFilter',
      'DisassociateKmsKey',
      'Link',
      'PutAccountPolicy',
      'PutDataProtectionPolicy',
      'PutDeliveryDestination',
      'PutDeliveryDestinationPolicy',
      'PutDeliverySource',
      'PutDestination',
      'PutDestinationPolicy',
      'PutLogEvents',
      'PutMetricFilter',
      'PutQueryDefinition',
      'PutRetentionPolicy',
      'PutSubscriptionFilter',
      'UpdateAnomaly',
      'UpdateLogAnomalyDetector',
      'UpdateLogDelivery'
    ],
    'Permissions management': [
      'DeleteResourcePolicy',
      'PutResourcePolicy'
    ],
    List: [
      'DescribeAccountPolicies',
      'DescribeDeliveries',
      'DescribeDeliveryDestinations',
      'DescribeDeliverySources',
      'DescribeDestinations',
      'DescribeExportTasks',
      'DescribeLogGroups',
      'DescribeLogStreams',
      'DescribeMetricFilters',
      'DescribeQueries',
      'DescribeQueryDefinitions',
      'DescribeResourcePolicies',
      'DescribeSubscriptionFilters',
      'ListAnomalies',
      'ListLogAnomalyDetectors',
      'ListLogDeliveries',
      'ListTagsForResource',
      'ListTagsLogGroup'
    ],
    Read: [
      'FilterLogEvents',
      'GetDataProtectionPolicy',
      'GetDelivery',
      'GetDeliveryDestination',
      'GetDeliveryDestinationPolicy',
      'GetDeliverySource',
      'GetLogAnomalyDetector',
      'GetLogDelivery',
      'GetLogEvents',
      'GetLogGroupFields',
      'GetLogRecord',
      'GetQueryResults',
      'StartLiveTail',
      'StartQuery',
      'StopLiveTail',
      'StopQuery',
      'TestMetricFilter',
      'Unmask'
    ],
    Tagging: [
      'TagLogGroup',
      'TagResource',
      'UntagLogGroup',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type log-group to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_LogGroup.html
   *
   * @param logGroupName - Identifier for the logGroupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLogGroup(logGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:logs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:log-group:${ logGroupName }`);
  }

  /**
   * Adds a resource of type log-stream to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_LogStream.html
   *
   * @param logGroupName - Identifier for the logGroupName.
   * @param logStreamName - Identifier for the logStreamName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLogStream(logGroupName: string, logStreamName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:logs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:log-group:${ logGroupName }:log-stream:${ logStreamName }`);
  }

  /**
   * Adds a resource of type destination to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_Destination.html
   *
   * @param destinationName - Identifier for the destinationName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDestination(destinationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:logs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:destination:${ destinationName }`);
  }

  /**
   * Adds a resource of type delivery-source to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeliverySource.html
   *
   * @param deliverySourceName - Identifier for the deliverySourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeliverySource(deliverySourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:logs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:delivery-source:${ deliverySourceName }`);
  }

  /**
   * Adds a resource of type delivery to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_Delivery.html
   *
   * @param deliveryName - Identifier for the deliveryName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDelivery(deliveryName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:logs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:delivery:${ deliveryName }`);
  }

  /**
   * Adds a resource of type delivery-destination to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeliveryDestination.html
   *
   * @param deliveryDestinationName - Identifier for the deliveryDestinationName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeliveryDestination(deliveryDestinationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:logs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:delivery-destination:${ deliveryDestinationName }`);
  }

  /**
   * Adds a resource of type anomaly-detector to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_AnomalyDetector.html
   *
   * @param detectorId - Identifier for the detectorId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAnomalyDetector(detectorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:logs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:anomaly-detector:${ detectorId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateDelivery()
   * - .toCreateLogAnomalyDetector()
   * - .toCreateLogGroup()
   * - .toPutDeliveryDestination()
   * - .toPutDeliverySource()
   * - .toPutDestination()
   * - .toTagLogGroup()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - log-group
   * - log-stream
   * - destination
   * - delivery-source
   * - delivery
   * - delivery-destination
   * - anomaly-detector
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateDelivery()
   * - .toCreateLogAnomalyDetector()
   * - .toCreateLogGroup()
   * - .toPutDeliveryDestination()
   * - .toPutDeliverySource()
   * - .toPutDestination()
   * - .toTagLogGroup()
   * - .toTagResource()
   * - .toUntagLogGroup()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Log Destination ARN passed in the request
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-identity-based-access-control-cwl.html
   *
   * Applies to actions:
   * - .toPutDeliveryDestination()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifDeliveryDestinationResourceArn(value: string | string[], operator?: Operator | string) {
    return this.if(`DeliveryDestinationResourceArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the Log Generating Resource ARNs passed in the request
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-identity-based-access-control-cwl.html
   *
   * Applies to actions:
   * - .toPutDeliverySource()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifLogGeneratingResourceArns(value: string | string[], operator?: Operator | string) {
    return this.if(`LogGeneratingResourceArns`, value, operator ?? 'ArnLike');
  }
}
