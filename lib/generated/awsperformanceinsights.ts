import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [pi](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsperformanceinsights.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Pi extends PolicyStatement {
  public servicePrefix = 'pi';
  protected actionList: Actions = {
    "DescribeDimensionKeys": {
      "url": "",
      "description": "For a specific time period, retrieve the top N dimension keys for a metric.",
      "accessLevel": "Read",
      "resourceTypes": {
        "metric-resource": {
          "required": true
        }
      }
    },
    "GetResourceMetrics": {
      "url": "",
      "description": "Retrieve PI metrics for a set of data sources, over a time period.",
      "accessLevel": "Read",
      "resourceTypes": {
        "metric-resource": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "metric-resource": {
      "name": "metric-resource",
      "url": "",
      "arn": "arn:${Partition}:pi:${Region}:${Account}:metrics/${ServiceType}/${Identifier}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [pi](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsperformanceinsights.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * For a specific time period, retrieve the top N dimension keys for a metric.
   *
   * Access Level: Read
   */
  public toDescribeDimensionKeys() {
    this.add('pi:DescribeDimensionKeys');
    return this;
  }

  /**
   * Retrieve PI metrics for a set of data sources, over a time period.
   *
   * Access Level: Read
   */
  public toGetResourceMetrics() {
    this.add('pi:GetResourceMetrics');
    return this;
  }

  /**
   * Adds a resource of type metric-resource to the statement
   *
   * @param serviceType - Identifier for the serviceType.
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onMetricResource(serviceType: string, identifier: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:pi:${Region}:${Account}:metrics/${ServiceType}/${Identifier}';
    arn = arn.replace('${ServiceType}', serviceType);
    arn = arn.replace('${Identifier}', identifier);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
