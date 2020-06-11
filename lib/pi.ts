import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service pi
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsperformanceinsights.html
 */
export class Pi extends PolicyStatement {
  public servicePrefix = 'pi';
  public actions : Actions = {
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

  /**
   * For a specific time period, retrieve the top N dimension keys for a metric.
   *
   * Access Level: Read
   *
   *
   */
  public describeDimensionKeys () {
    this.add('pi:DescribeDimensionKeys');
    return this;
  }

  /**
   * Retrieve PI metrics for a set of data sources, over a time period.
   *
   * Access Level: Read
   *
   *
   */
  public getResourceMetrics () {
    this.add('pi:GetResourceMetrics');
    return this;
  }
}
