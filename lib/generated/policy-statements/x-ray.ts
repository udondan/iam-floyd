import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [xray](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsx-ray.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Xray extends PolicyStatement {
  public servicePrefix = 'xray';

  /**
   * Statement provider for service [xray](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsx-ray.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to retrieve metadata for a list of traces specified by ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/devguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-console
   */
  public toBatchGetTraceSummaryById() {
    return this.to('BatchGetTraceSummaryById');
  }

  /**
   * Grants permission to retrieve a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_BatchGetTraces.html
   */
  public toBatchGetTraces() {
    return this.to('BatchGetTraces');
  }

  /**
   * Grants permission to cancel an ongoing trace retrieval job initiated by StartTraceRetrieval using the provided RetrievalToken. A successful cancellation will return an HTTP 200 response
   *
   * Access Level: Read
   */
  public toCancelTraceRetrieval() {
    return this.to('CancelTraceRetrieval');
  }

  /**
   * Grants permission to create a group resource with a name and a filter expression
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_CreateGroup.html
   */
  public toCreateGroup() {
    return this.to('CreateGroup');
  }

  /**
   * Grants permission to create a rule to control sampling behavior for instrumented applications
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_CreateSamplingRule.html
   */
  public toCreateSamplingRule() {
    return this.to('CreateSamplingRule');
  }

  /**
   * Grants permission to delete a group resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Grants permission to delete resource policies
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a sampling rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_DeleteSamplingRule.html
   */
  public toDeleteSamplingRule() {
    return this.to('DeleteSamplingRule');
  }

  /**
   * Grants permission to retrieve distinct service graphs for one or more specific trace IDs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/devguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-console
   */
  public toGetDistinctTraceGraphs() {
    return this.to('GetDistinctTraceGraphs');
  }

  /**
   * Grants permission to retrieve the current encryption configuration for X-Ray data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetEncryptionConfig.html
   */
  public toGetEncryptionConfig() {
    return this.to('GetEncryptionConfig');
  }

  /**
   * Grants permission to retrieve group resource details
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetGroup.html
   */
  public toGetGroup() {
    return this.to('GetGroup');
  }

  /**
   * Grants permission to retrieve all active group details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetGroups.html
   */
  public toGetGroups() {
    return this.to('GetGroups');
  }

  /**
   * Grants permission to retrieve all indexing rules. Indexing rules are used to determine the server-side sampling rate for spans ingested through the CloudWatchLogs destination and indexed by X-Ray
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetIndexingRules.html
   */
  public toGetIndexingRules() {
    return this.to('GetIndexingRules');
  }

  /**
   * Grants permission to retrieve the details of a specific insight
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetInsight.html
   */
  public toGetInsight() {
    return this.to('GetInsight');
  }

  /**
   * Grants permission to retrieve the events of a specific insight
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetInsightEvents.html
   */
  public toGetInsightEvents() {
    return this.to('GetInsightEvents');
  }

  /**
   * Grants permission to retrieve the part of the service graph which is impacted for a specific insight
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetInsightImpactGraph.html
   */
  public toGetInsightImpactGraph() {
    return this.to('GetInsightImpactGraph');
  }

  /**
   * Grants permission to retrieve the summary of all insights for a group and time range with optional filters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetInsightSummaries.html
   */
  public toGetInsightSummaries() {
    return this.to('GetInsightSummaries');
  }

  /**
   * Grants permission to retrieve a service graph for traces based on the specified RetrievalToken from the Transaction Search CloudWatch log group
   *
   * Access Level: Read
   */
  public toGetRetrievedTracesGraph() {
    return this.to('GetRetrievedTracesGraph');
  }

  /**
   * Grants permission to retrieve all sampling rules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html
   */
  public toGetSamplingRules() {
    return this.to('GetSamplingRules');
  }

  /**
   * Grants permission to retrieve information about recent sampling results for all sampling rules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingStatisticSummaries.html
   */
  public toGetSamplingStatisticSummaries() {
    return this.to('GetSamplingStatisticSummaries');
  }

  /**
   * Grants permission to request a sampling quota for rules that the service is using to sample requests
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html
   */
  public toGetSamplingTargets() {
    return this.to('GetSamplingTargets');
  }

  /**
   * Grants permission to retrieve a document that describes services that process incoming requests, and downstream services that they call as a result
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetServiceGraph.html
   */
  public toGetServiceGraph() {
    return this.to('GetServiceGraph');
  }

  /**
   * Grants permission to retrieve an aggregation of service statistics defined by a specific time range bucketed into time intervals
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetTimeSeriesServiceStatistics.html
   */
  public toGetTimeSeriesServiceStatistics() {
    return this.to('GetTimeSeriesServiceStatistics');
  }

  /**
   * Grants permission to retrieve a service graph for one or more specific trace IDs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetTraceGraph.html
   */
  public toGetTraceGraph() {
    return this.to('GetTraceGraph');
  }

  /**
   * Grants permission to retrieve the current destination of data sent to PutTraceSegments and OpenTelemetry API
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetTraceSegmentDestination.html
   */
  public toGetTraceSegmentDestination() {
    return this.to('GetTraceSegmentDestination');
  }

  /**
   * Grants permission to retrieve IDs and metadata for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_GetTraceSummaries.html
   */
  public toGetTraceSummaries() {
    return this.to('GetTraceSummaries');
  }

  /**
   * Grants permission to share X-Ray resources with a monitoring account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account-Setup.html#CloudWatch-Unified-Cross-Account-Setup-permissions
   */
  public toLink() {
    return this.to('Link');
  }

  /**
   * Grants permission to list resource policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_ListResourcePolicies.html
   */
  public toListResourcePolicies() {
    return this.to('ListResourcePolicies');
  }

  /**
   * Grants permission to retrieve a list of traces for a given RetrievalToken from the Transaction Search CloudWatch log group
   *
   * Access Level: List
   */
  public toListRetrievedTraces() {
    return this.to('ListRetrievedTraces');
  }

  /**
   * Grants permission to list tags for an X-Ray resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to update the encryption configuration for X-Ray data
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_PutEncryptionConfig.html
   */
  public toPutEncryptionConfig() {
    return this.to('PutEncryptionConfig');
  }

  /**
   * Grants permission to create or update resource policies
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to upload OpenTelemetry spans to AWS X-Ray
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_PutSpans.html
   */
  public toPutSpans() {
    return this.to('PutSpans');
  }

  /**
   * Grants permission to upload spans to AWS X-Ray to be indexed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/devguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-console
   */
  public toPutSpansForIndexing() {
    return this.to('PutSpansForIndexing');
  }

  /**
   * Grants permission to send AWS X-Ray daemon telemetry to the service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_PutTelemetryRecords.html
   */
  public toPutTelemetryRecords() {
    return this.to('PutTelemetryRecords');
  }

  /**
   * Grants permission to upload segment documents to AWS X-Ray. The X-Ray SDK generates segment documents and sends them to the X-Ray daemon, which uploads them in batches
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html
   */
  public toPutTraceSegments() {
    return this.to('PutTraceSegments');
  }

  /**
   * Grants permission to initiate a trace retrieval process using the specified time range and for the given trace IDs on the Transaction Search CloudWatch log group
   *
   * Access Level: Read
   */
  public toStartTraceRetrieval() {
    return this.to('StartTraceRetrieval');
  }

  /**
   * Grants permission to add tags to an X-Ray resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from an X-Ray resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a group resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    return this.to('UpdateGroup');
  }

  /**
   * Grants permission to modify an indexing rule's configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_UpdateIndexingRule.html
   */
  public toUpdateIndexingRule() {
    return this.to('UpdateIndexingRule');
  }

  /**
   * Grants permission to modify a sampling rule's configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_UpdateSamplingRule.html
   */
  public toUpdateSamplingRule() {
    return this.to('UpdateSamplingRule');
  }

  /**
   * Grants permission to modify the destination of data sent to PutTraceSegments and OpenTelemetry API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/xray/latest/api/API_UpdateTraceSegmentDestination.html
   */
  public toUpdateTraceSegmentDestination() {
    return this.to('UpdateTraceSegmentDestination');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchGetTraceSummaryById',
      'CancelTraceRetrieval',
      'GetDistinctTraceGraphs',
      'GetEncryptionConfig',
      'GetGroup',
      'GetGroups',
      'GetIndexingRules',
      'GetInsight',
      'GetInsightEvents',
      'GetInsightImpactGraph',
      'GetInsightSummaries',
      'GetRetrievedTracesGraph',
      'GetSamplingRules',
      'GetSamplingStatisticSummaries',
      'GetSamplingTargets',
      'GetServiceGraph',
      'GetTimeSeriesServiceStatistics',
      'GetTraceGraph',
      'GetTraceSegmentDestination',
      'GetTraceSummaries',
      'StartTraceRetrieval'
    ],
    List: [
      'BatchGetTraces',
      'ListResourcePolicies',
      'ListRetrievedTraces',
      'ListTagsForResource'
    ],
    Write: [
      'CreateGroup',
      'CreateSamplingRule',
      'DeleteGroup',
      'DeleteResourcePolicy',
      'DeleteSamplingRule',
      'Link',
      'PutResourcePolicy',
      'PutSpans',
      'PutSpansForIndexing',
      'PutTelemetryRecords',
      'PutTraceSegments',
      'UpdateGroup',
      'UpdateIndexingRule',
      'UpdateSamplingRule',
      'UpdateTraceSegmentDestination'
    ],
    'Permissions management': [
      'PutEncryptionConfig'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-groups
   *
   * @param groupName - Identifier for the groupName.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGroup(groupName: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:xray:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:group/${ groupName }/${ id }`);
  }

  /**
   * Adds a resource of type sampling-rule to the statement
   *
   * https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-sampling
   *
   * @param samplingRuleName - Identifier for the samplingRuleName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSamplingRule(samplingRuleName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:xray:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:sampling-rule/${ samplingRuleName }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateGroup()
   * - .toCreateSamplingRule()
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
   * Applies to actions:
   * - .toDeleteGroup()
   * - .toDeleteSamplingRule()
   * - .toGetGroup()
   * - .toUpdateGroup()
   * - .toUpdateSamplingRule()
   *
   * Applies to resource types:
   * - group
   * - sampling-rule
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
   * - .toCreateGroup()
   * - .toCreateSamplingRule()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
