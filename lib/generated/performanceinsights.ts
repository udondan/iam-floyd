import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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

  protected accessLevelList: AccessLevelList = {
    Read: [
      'DescribeDimensionKeys',
      'GetDimensionKeyDetails',
      'GetResourceMetadata',
      'GetResourceMetrics',
      'ListAvailableResourceDimensions',
      'ListAvailableResourceMetrics'
    ]
  };

  /**
   * Adds a resource of type metric-resource to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.access-control.html
   *
   * @param serviceType - Identifier for the serviceType.
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onMetricResource(serviceType: string, identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Pi.defaultPartition }:pi:${ region || '*' }:${ account || '*' }:metrics/${ serviceType }/${ identifier }`);
  }
}
