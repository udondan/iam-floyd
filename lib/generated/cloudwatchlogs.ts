import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associates the specified AWS Key Management Service (AWS KMS) customer master key (CMK) with the specified log group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_AssociateKmsKey.html
   */
  public toAssociateKmsKey() {
    return this.to('AssociateKmsKey');
  }

  /**
   * Cancels an export task if it is in PENDING or RUNNING state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html
   */
  public toCancelExportTask() {
    return this.to('CancelExportTask');
  }

  /**
   * Creates an ExportTask which allows you to efficiently export data from a Log Group to your Amazon S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateExportTask.html
   */
  public toCreateExportTask() {
    return this.to('CreateExportTask');
  }

  /**
   * Creates the log delivery
   *
   * Access Level: Write
   */
  public toCreateLogDelivery() {
    return this.to('CreateLogDelivery');
  }

  /**
   * Creates a new log group with the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html
   */
  public toCreateLogGroup() {
    return this.to('CreateLogGroup');
  }

  /**
   * Creates a new log stream with the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogStream.html
   */
  public toCreateLogStream() {
    return this.to('CreateLogStream');
  }

  /**
   * Deletes the destination with the specified name and eventually disables all the subscription filters that publish to it
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDestination.html
   */
  public toDeleteDestination() {
    return this.to('DeleteDestination');
  }

  /**
   * Deletes the log delivery information for specified log delivery
   *
   * Access Level: Write
   */
  public toDeleteLogDelivery() {
    return this.to('DeleteLogDelivery');
  }

  /**
   * Deletes the log group with the specified name and permanently deletes all the archived log events associated with it
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogGroup.html
   */
  public toDeleteLogGroup() {
    return this.to('DeleteLogGroup');
  }

  /**
   * Deletes a log stream and permanently deletes all the archived log events associated with it
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogStream.html
   */
  public toDeleteLogStream() {
    return this.to('DeleteLogStream');
  }

  /**
   * Deletes a metric filter associated with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteMetricFilter.html
   */
  public toDeleteMetricFilter() {
    return this.to('DeleteMetricFilter');
  }

  /**
   * Deletes a resource policy from this account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Deletes the retention policy of the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html
   */
  public toDeleteRetentionPolicy() {
    return this.to('DeleteRetentionPolicy');
  }

  /**
   * Deletes a subscription filter associated with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteSubscriptionFilter.html
   */
  public toDeleteSubscriptionFilter() {
    return this.to('DeleteSubscriptionFilter');
  }

  /**
   * Returns all the destinations that are associated with the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDestinations.html
   */
  public toDescribeDestinations() {
    return this.to('DescribeDestinations');
  }

  /**
   * Returns all the export tasks that are associated with the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html
   */
  public toDescribeExportTasks() {
    return this.to('DescribeExportTasks');
  }

  /**
   * Returns all the log groups that are associated with the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html
   */
  public toDescribeLogGroups() {
    return this.to('DescribeLogGroups');
  }

  /**
   * Returns all the log streams that are associated with the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogStreams.html
   */
  public toDescribeLogStreams() {
    return this.to('DescribeLogStreams');
  }

  /**
   * Returns all the metrics filters associated with the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeMetricFilters.html
   */
  public toDescribeMetricFilters() {
    return this.to('DescribeMetricFilters');
  }

  /**
   * Returns a list of CloudWatch Logs Insights queries that are scheduled, executing, or have been executed recently in this account. You can request all queries, or limit it to queries of a specific log group or queries with a certain status.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueries.html
   */
  public toDescribeQueries() {
    return this.to('DescribeQueries');
  }

  /**
   * Return all the resource policies in this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeResourcePolicies.html
   */
  public toDescribeResourcePolicies() {
    return this.to('DescribeResourcePolicies');
  }

  /**
   * Returns all the subscription filters associated with the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html
   */
  public toDescribeSubscriptionFilters() {
    return this.to('DescribeSubscriptionFilters');
  }

  /**
   * Disassociates the associated AWS Key Management Service (AWS KMS) customer master key (CMK) from the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DisassociateKmsKey.html
   */
  public toDisassociateKmsKey() {
    return this.to('DisassociateKmsKey');
  }

  /**
   * Retrieves log events, optionally filtered by a filter pattern from the specified log group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html
   */
  public toFilterLogEvents() {
    return this.to('FilterLogEvents');
  }

  /**
   * Gets the log delivery information for specified log delivery
   *
   * Access Level: Read
   */
  public toGetLogDelivery() {
    return this.to('GetLogDelivery');
  }

  /**
   * Retrieves log events from the specified log stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html
   */
  public toGetLogEvents() {
    return this.to('GetLogEvents');
  }

  /**
   * Returns a list of the fields that are included in log events in the specified log group, along with the percentage of log events that contain each field. The search is limited to a time period that you specify.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogGroupFields.html
   */
  public toGetLogGroupFields() {
    return this.to('GetLogGroupFields');
  }

  /**
   * Retrieves all the fields and values of a single log event. All fields are retrieved, even if the original query that produced the logRecordPointer retrieved only a subset of fields. Fields are returned as field name/field value pairs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html
   */
  public toGetLogRecord() {
    return this.to('GetLogRecord');
  }

  /**
   * Returns the results from the specified query. If the query is in progress, partial results of that current execution are returned. Only the fields requested in the query are returned.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html
   */
  public toGetQueryResults() {
    return this.to('GetQueryResults');
  }

  /**
   * Lists all the log deliveries for specified account and/or log source
   *
   * Access Level: List
   */
  public toListLogDeliveries() {
    return this.to('ListLogDeliveries');
  }

  /**
   * Lists the tags for the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html
   */
  public toListTagsLogGroup() {
    return this.to('ListTagsLogGroup');
  }

  /**
   * Creates or updates a Destination
   *
   * Access Level: Write
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
   * Creates or updates an access policy associated with an existing Destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html
   */
  public toPutDestinationPolicy() {
    return this.to('PutDestinationPolicy');
  }

  /**
   * Uploads a batch of log events to the specified log stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html
   */
  public toPutLogEvents() {
    return this.to('PutLogEvents');
  }

  /**
   * Creates or updates a metric filter and associates it with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutMetricFilter.html
   */
  public toPutMetricFilter() {
    return this.to('PutMetricFilter');
  }

  /**
   * Creates or updates a resource policy allowing other AWS services to put log events to this account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Sets the retention of the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html
   */
  public toPutRetentionPolicy() {
    return this.to('PutRetentionPolicy');
  }

  /**
   * Creates or updates a subscription filter and associates it with the specified log group
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
   * Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query, and the query string to use.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html
   */
  public toStartQuery() {
    return this.to('StartQuery');
  }

  /**
   * Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StopQuery.html
   */
  public toStopQuery() {
    return this.to('StopQuery');
  }

  /**
   * Adds or updates the specified tags for the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagLogGroup.html
   */
  public toTagLogGroup() {
    return this.to('TagLogGroup');
  }

  /**
   * Tests the filter pattern of a metric filter against a sample of log event messages
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TestMetricFilter.html
   */
  public toTestMetricFilter() {
    return this.to('TestMetricFilter');
  }

  /**
   * Removes the specified tags from the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagLogGroup.html
   */
  public toUntagLogGroup() {
    return this.to('UntagLogGroup');
  }

  /**
   * Updates the log delivery information for specified log delivery
   *
   * Access Level: Write
   */
  public toUpdateLogDelivery() {
    return this.to('UpdateLogDelivery');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateKmsKey",
      "CancelExportTask",
      "CreateExportTask",
      "CreateLogDelivery",
      "CreateLogGroup",
      "CreateLogStream",
      "DeleteDestination",
      "DeleteLogDelivery",
      "DeleteLogGroup",
      "DeleteLogStream",
      "DeleteMetricFilter",
      "DeleteResourcePolicy",
      "DeleteRetentionPolicy",
      "DeleteSubscriptionFilter",
      "DisassociateKmsKey",
      "PutDestination",
      "PutDestinationPolicy",
      "PutLogEvents",
      "PutMetricFilter",
      "PutResourcePolicy",
      "PutRetentionPolicy",
      "PutSubscriptionFilter",
      "TagLogGroup",
      "UntagLogGroup",
      "UpdateLogDelivery"
    ],
    "List": [
      "DescribeDestinations",
      "DescribeExportTasks",
      "DescribeLogGroups",
      "DescribeLogStreams",
      "DescribeMetricFilters",
      "DescribeQueries",
      "DescribeResourcePolicies",
      "DescribeSubscriptionFilters",
      "ListLogDeliveries",
      "ListTagsLogGroup"
    ],
    "Read": [
      "FilterLogEvents",
      "GetLogDelivery",
      "GetLogEvents",
      "GetLogGroupFields",
      "GetLogRecord",
      "GetQueryResults",
      "StartQuery",
      "StopQuery",
      "TestMetricFilter"
    ]
  };

  /**
   * Adds a resource of type log-group to the statement
   *
   * @param logGroupName - Identifier for the logGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLogGroup(logGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:logs:${Region}:${Account}:log-group:${LogGroupName}';
    arn = arn.replace('${LogGroupName}', logGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type log-stream to the statement
   *
   * @param logGroupName - Identifier for the logGroupName.
   * @param logStreamName - Identifier for the logStreamName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLogStream(logGroupName: string, logStreamName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:logs:${Region}:${Account}:log-group:${LogGroupName}:log-stream:${LogStreamName}';
    arn = arn.replace('${LogGroupName}', logGroupName);
    arn = arn.replace('${LogStreamName}', logStreamName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
