import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
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

  protected accessLevelList: AccessLevelList = {
    "List": [
      "BatchGetTraces",
      "ListTagsForResource"
    ],
    "Write": [
      "CreateGroup",
      "CreateSamplingRule",
      "DeleteGroup",
      "DeleteSamplingRule",
      "PutTelemetryRecords",
      "PutTraceSegments",
      "UpdateGroup",
      "UpdateSamplingRule"
    ],
    "Read": [
      "GetEncryptionConfig",
      "GetGroup",
      "GetGroups",
      "GetInsight",
      "GetInsightEvents",
      "GetInsightImpactGraph",
      "GetInsightSummaries",
      "GetSamplingRules",
      "GetSamplingStatisticSummaries",
      "GetSamplingTargets",
      "GetServiceGraph",
      "GetTimeSeriesServiceStatistics",
      "GetTraceGraph",
      "GetTraceSummaries"
    ],
    "Permissions management": [
      "PutEncryptionConfig"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-groups
   *
   * @param groupName - Identifier for the groupName.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGroup(groupName: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:xray:${ region || '*' }:${ account || '*' }:group/${ groupName }/${ id }`);
  }

  /**
   * Adds a resource of type sampling-rule to the statement
   *
   * https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-sampling
   *
   * @param samplingRuleName - Identifier for the samplingRuleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSamplingRule(samplingRuleName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:xray:${ region || '*' }:${ account || '*' }:sampling-rule/${ samplingRuleName }`);
  }
}
