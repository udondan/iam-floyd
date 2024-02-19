import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [pi](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsperformanceinsights.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Pi extends PolicyStatement {
  public servicePrefix = 'pi';

  /**
   * Statement provider for service [pi](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsperformanceinsights.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to call CreatePerformanceAnalysisReport API to create a Performance Analysis Report for a specified DB instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_CreatePerformanceAnalysisReport.html
   */
  public toCreatePerformanceAnalysisReport() {
    return this.to('CreatePerformanceAnalysisReport');
  }

  /**
   * Grants permission to call DeletePerformanceAnalysisReport API to delete a Performance Analysis Report for a specified DB instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_DeletePerformanceAnalysisReport.html
   */
  public toDeletePerformanceAnalysisReport() {
    return this.to('DeletePerformanceAnalysisReport');
  }

  /**
   * Grants permission to call DescribeDimensionKeys API to retrieve the top N dimension keys for a metric for a specific time period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_DescribeDimensionKeys.html
   */
  public toDescribeDimensionKeys() {
    return this.to('DescribeDimensionKeys');
  }

  /**
   * Grants permission to call GetDimensionKeyDetails API to retrieve the attributes of the specified dimension group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetDimensionKeyDetails.html
   */
  public toGetDimensionKeyDetails() {
    return this.to('GetDimensionKeyDetails');
  }

  /**
   * Grants permission to call GetPerformanceAnalysisReport API to retrieve a Performance Analysis Report for a specified DB instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetPerformanceAnalysisReport.html
   */
  public toGetPerformanceAnalysisReport() {
    return this.to('GetPerformanceAnalysisReport');
  }

  /**
   * Grants permission to call GetResourceMetadata API to retrieve the metadata for different features
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetadata.html
   */
  public toGetResourceMetadata() {
    return this.to('GetResourceMetadata');
  }

  /**
   * Grants permission to call GetResourceMetrics API to retrieve PI metrics for a set of data sources, over a time period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetrics.html
   */
  public toGetResourceMetrics() {
    return this.to('GetResourceMetrics');
  }

  /**
   * Grants permission to call ListAvailableResourceDimensions API to retrieve the dimensions that can be queried for each specified metric type on a specified DB instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_ListAvailableResourceDimensions.html
   */
  public toListAvailableResourceDimensions() {
    return this.to('ListAvailableResourceDimensions');
  }

  /**
   * Grants permission to call ListAvailableResourceMetrics API to retrieve metrics of the specified types that can be queried for a specified DB instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_ListAvailableResourceMetrics.html
   */
  public toListAvailableResourceMetrics() {
    return this.to('ListAvailableResourceMetrics');
  }

  /**
   * Grants permission to call ListPerformanceAnalysisReports API to list Performance Analysis Reports for a specified DB instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_ListPerformanceAnalysisReports.html
   */
  public toListPerformanceAnalysisReports() {
    return this.to('ListPerformanceAnalysisReports');
  }

  /**
   * Grants permission to call ListTagsForResource API to list tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to call TagResource API to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to call UntagResource API to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreatePerformanceAnalysisReport',
      'DeletePerformanceAnalysisReport'
    ],
    Read: [
      'DescribeDimensionKeys',
      'GetDimensionKeyDetails',
      'GetPerformanceAnalysisReport',
      'GetResourceMetadata',
      'GetResourceMetrics',
      'ListAvailableResourceDimensions',
      'ListAvailableResourceMetrics'
    ],
    List: [
      'ListPerformanceAnalysisReports',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type metric-resource to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.access-control.html
   *
   * @param serviceType - Identifier for the serviceType.
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onMetricResource(serviceType: string, identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:pi:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:metrics/${ serviceType }/${ identifier }`);
  }

  /**
   * Adds a resource of type perf-reports-resource to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.access-control.html
   *
   * @param serviceType - Identifier for the serviceType.
   * @param identifier - Identifier for the identifier.
   * @param reportId - Identifier for the reportId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPerfReportsResource(serviceType: string, identifier: string, reportId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:pi:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:perf-reports/${ serviceType }/${ identifier }/${ reportId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * Applies to actions:
   * - .toCreatePerformanceAnalysisReport()
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
   * Applies to resource types:
   * - perf-reports-resource
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
   * Applies to actions:
   * - .toCreatePerformanceAnalysisReport()
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
