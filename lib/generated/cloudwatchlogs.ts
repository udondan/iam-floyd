import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
   * Grants permissions to associate the specified AWS Key Management Service (AWS KMS) customer master key (CMK) with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_AssociateKmsKey.html
   */
  public toAssociateKmsKey() {
    return this.to('AssociateKmsKey');
  }

  /**
   * Grants permissions to cancel an export task if it is in PENDING or RUNNING state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html
   */
  public toCancelExportTask() {
    return this.to('CancelExportTask');
  }

  /**
   * Grants permissions to create an ExportTask which allows you to efficiently export data from a Log Group to your Amazon S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateExportTask.html
   */
  public toCreateExportTask() {
    return this.to('CreateExportTask');
  }

  /**
   * Grants permissions to create the log delivery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  public toCreateLogDelivery() {
    return this.to('CreateLogDelivery');
  }

  /**
   * Grants permissions to create a new log group with the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html
   */
  public toCreateLogGroup() {
    return this.to('CreateLogGroup');
  }

  /**
   * Grants permissions to create a new log stream with the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogStream.html
   */
  public toCreateLogStream() {
    return this.to('CreateLogStream');
  }

  /**
   * Grants permissions to delete the destination with the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDestination.html
   */
  public toDeleteDestination() {
    return this.to('DeleteDestination');
  }

  /**
   * Grants permissions to delete the log delivery information for specified log delivery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  public toDeleteLogDelivery() {
    return this.to('DeleteLogDelivery');
  }

  /**
   * Grants permissions to delete the log group with the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogGroup.html
   */
  public toDeleteLogGroup() {
    return this.to('DeleteLogGroup');
  }

  /**
   * Grants permissions to delete a log stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogStream.html
   */
  public toDeleteLogStream() {
    return this.to('DeleteLogStream');
  }

  /**
   * Grants permissions to delete a metric filter associated with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteMetricFilter.html
   */
  public toDeleteMetricFilter() {
    return this.to('DeleteMetricFilter');
  }

  /**
   * Grants permissions to delete a saved CloudWatch Logs Insights query definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteQueryDefinition.html
   */
  public toDeleteQueryDefinition() {
    return this.to('DeleteQueryDefinition');
  }

  /**
   * Grants permissions to delete a resource policy from this account
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permissions to delete the retention policy of the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html
   */
  public toDeleteRetentionPolicy() {
    return this.to('DeleteRetentionPolicy');
  }

  /**
   * Grants permissions to delete a subscription filter associated with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteSubscriptionFilter.html
   */
  public toDeleteSubscriptionFilter() {
    return this.to('DeleteSubscriptionFilter');
  }

  /**
   * Grants permissions to return all the destinations that are associated with the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDestinations.html
   */
  public toDescribeDestinations() {
    return this.to('DescribeDestinations');
  }

  /**
   * Grants permissions to return all the export tasks that are associated with the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html
   */
  public toDescribeExportTasks() {
    return this.to('DescribeExportTasks');
  }

  /**
   * Grants permissions to return all the log groups that are associated with the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html
   */
  public toDescribeLogGroups() {
    return this.to('DescribeLogGroups');
  }

  /**
   * Grants permissions to return all the log streams that are associated with the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogStreams.html
   */
  public toDescribeLogStreams() {
    return this.to('DescribeLogStreams');
  }

  /**
   * Grants permissions to return all the metrics filters associated with the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeMetricFilters.html
   */
  public toDescribeMetricFilters() {
    return this.to('DescribeMetricFilters');
  }

  /**
   * Grants permissions to return a list of CloudWatch Logs Insights queries that are scheduled, executing, or have been executed recently in this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueries.html
   */
  public toDescribeQueries() {
    return this.to('DescribeQueries');
  }

  /**
   * Grants permissions to return a paginated list of your saved CloudWatch Logs Insights query definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html
   */
  public toDescribeQueryDefinitions() {
    return this.to('DescribeQueryDefinitions');
  }

  /**
   * Grants permissions to return all the resource policies in this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeResourcePolicies.html
   */
  public toDescribeResourcePolicies() {
    return this.to('DescribeResourcePolicies');
  }

  /**
   * Grants permissions to return all the subscription filters associated with the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html
   */
  public toDescribeSubscriptionFilters() {
    return this.to('DescribeSubscriptionFilters');
  }

  /**
   * Grants permissions to disassociate the associated AWS Key Management Service (AWS KMS) customer master key (CMK) from the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DisassociateKmsKey.html
   */
  public toDisassociateKmsKey() {
    return this.to('DisassociateKmsKey');
  }

  /**
   * Grants permissions to retrieve log events, optionally filtered by a filter pattern from the specified log group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html
   */
  public toFilterLogEvents() {
    return this.to('FilterLogEvents');
  }

  /**
   * Grants permissions to get the log delivery information for specified log delivery
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  public toGetLogDelivery() {
    return this.to('GetLogDelivery');
  }

  /**
   * Grants permissions to retrieve log events from the specified log stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html
   */
  public toGetLogEvents() {
    return this.to('GetLogEvents');
  }

  /**
   * Grants permissions to return a list of the fields that are included in log events in the specified log group, along with the percentage of log events that contain each field
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogGroupFields.html
   */
  public toGetLogGroupFields() {
    return this.to('GetLogGroupFields');
  }

  /**
   * Grants permissions to retrieve all the fields and values of a single log event
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html
   */
  public toGetLogRecord() {
    return this.to('GetLogRecord');
  }

  /**
   * Grants permissions to return the results from the specified query
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html
   */
  public toGetQueryResults() {
    return this.to('GetQueryResults');
  }

  /**
   * Grants permissions to list all the log deliveries for specified account and/or log source
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  public toListLogDeliveries() {
    return this.to('ListLogDeliveries');
  }

  /**
   * Grants permissions to list the tags for the specified log group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html
   */
  public toListTagsLogGroup() {
    return this.to('ListTagsLogGroup');
  }

  /**
   * Grants permissions to create or update a Destination
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
   * Grants permissions to create or update an access policy associated with an existing Destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html
   */
  public toPutDestinationPolicy() {
    return this.to('PutDestinationPolicy');
  }

  /**
   * Grants permissions to upload a batch of log events to the specified log stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html
   */
  public toPutLogEvents() {
    return this.to('PutLogEvents');
  }

  /**
   * Grants permissions to create or update a metric filter and associates it with the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutMetricFilter.html
   */
  public toPutMetricFilter() {
    return this.to('PutMetricFilter');
  }

  /**
   * Grants permissions to create or update a query definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutQueryDefinition.html
   */
  public toPutQueryDefinition() {
    return this.to('PutQueryDefinition');
  }

  /**
   * Grants permissions to create or update a resource policy allowing other AWS services to put log events to this account
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permissions to set the retention of the specified log group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html
   */
  public toPutRetentionPolicy() {
    return this.to('PutRetentionPolicy');
  }

  /**
   * Grants permissions to create or update a subscription filter and associates it with the specified log group
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
   * Grants permissions to schedules a query of a log group using CloudWatch Logs Insights
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html
   */
  public toStartQuery() {
    return this.to('StartQuery');
  }

  /**
   * Grants permissions to stop a CloudWatch Logs Insights query that is in progress
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StopQuery.html
   */
  public toStopQuery() {
    return this.to('StopQuery');
  }

  /**
   * Grants permissions to add or update the specified tags for the specified log group
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagLogGroup.html
   */
  public toTagLogGroup() {
    return this.to('TagLogGroup');
  }

  /**
   * Grants permissions to test the filter pattern of a metric filter against a sample of log event messages
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TestMetricFilter.html
   */
  public toTestMetricFilter() {
    return this.to('TestMetricFilter');
  }

  /**
   * Grants permissions to remove the specified tags from the specified log group
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagLogGroup.html
   */
  public toUntagLogGroup() {
    return this.to('UntagLogGroup');
  }

  /**
   * Grants permissions to update the log delivery information for specified log delivery
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
      'CreateExportTask',
      'CreateLogDelivery',
      'CreateLogGroup',
      'CreateLogStream',
      'DeleteDestination',
      'DeleteLogDelivery',
      'DeleteLogGroup',
      'DeleteLogStream',
      'DeleteMetricFilter',
      'DeleteQueryDefinition',
      'DeleteRetentionPolicy',
      'DeleteSubscriptionFilter',
      'DisassociateKmsKey',
      'PutDestination',
      'PutDestinationPolicy',
      'PutLogEvents',
      'PutMetricFilter',
      'PutQueryDefinition',
      'PutRetentionPolicy',
      'PutSubscriptionFilter',
      'UpdateLogDelivery'
    ],
    'Permissions management': [
      'DeleteResourcePolicy',
      'PutResourcePolicy'
    ],
    List: [
      'DescribeDestinations',
      'DescribeExportTasks',
      'DescribeLogGroups',
      'DescribeLogStreams',
      'DescribeMetricFilters',
      'DescribeQueries',
      'DescribeQueryDefinitions',
      'DescribeResourcePolicies',
      'DescribeSubscriptionFilters',
      'ListLogDeliveries',
      'ListTagsLogGroup'
    ],
    Read: [
      'FilterLogEvents',
      'GetLogDelivery',
      'GetLogEvents',
      'GetLogGroupFields',
      'GetLogRecord',
      'GetQueryResults',
      'StartQuery',
      'StopQuery',
      'TestMetricFilter'
    ],
    Tagging: [
      'TagLogGroup',
      'UntagLogGroup'
    ]
  };

  /**
   * Adds a resource of type log-group to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_LogGroup.html
   *
   * @param logGroupName - Identifier for the logGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLogGroup(logGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:logs:${ region || '*' }:${ account || '*' }:log-group:${ logGroupName }`);
  }

  /**
   * Adds a resource of type log-stream to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_LogStream.html
   *
   * @param logGroupName - Identifier for the logGroupName.
   * @param logStreamName - Identifier for the logStreamName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLogStream(logGroupName: string, logStreamName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:logs:${ region || '*' }:${ account || '*' }:log-group:${ logGroupName }:log-stream:${ logStreamName }`);
  }

  /**
   * Adds a resource of type destination to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_Destination.html
   *
   * @param destinationName - Identifier for the destinationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDestination(destinationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:logs:${ region || '*' }:${ account || '*' }:destination:${ destinationName }`);
  }
}
