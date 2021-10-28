import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
   * For a specific time period, retrieve the top N dimension keys for a metric.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_DescribeDimensionKeys.html
   */
  public toDescribeDimensionKeys() {
    return this.to('DescribeDimensionKeys');
  }

  /**
   * Retrieve the attributes of the specified dimension group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetDimensionKeyDetails.html
   */
  public toGetDimensionKeyDetails() {
    return this.to('GetDimensionKeyDetails');
  }

  /**
   * Retrieve PI metrics for a set of data sources, over a time period.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetrics.html
   */
  public toGetResourceMetrics() {
    return this.to('GetResourceMetrics');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'DescribeDimensionKeys',
      'GetDimensionKeyDetails',
      'GetResourceMetrics'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onMetricResource(serviceType: string, identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:pi:${ region || '*' }:${ account || '*' }:metrics/${ serviceType }/${ identifier }`);
  }
}
