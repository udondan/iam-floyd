import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [geo-routes](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlocationserviceroutes.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class GeoRoutes extends PolicyStatement {
  public servicePrefix = 'geo-routes';

  /**
   * Statement provider for service [geo-routes](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlocationserviceroutes.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to determine destinations or service areas reachable within a specified time
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateIsolines.html
   */
  public toCalculateIsolines() {
    return this.to('CalculateIsolines');
  }

  /**
   * Grants permission to calculate routing matrice which providing travel time and distances between sets of origins and destinations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateRouteMatrix.html
   */
  public toCalculateRouteMatrix() {
    return this.to('CalculateRouteMatrix');
  }

  /**
   * Grants permission to calculates routes between two or more locations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateRoutes.html
   */
  public toCalculateRoutes() {
    return this.to('CalculateRoutes');
  }

  /**
   * Grants permission to calculate the most efficient sequence for visiting multiple waypoints or locations along a route
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_OptimizeWaypoints.html
   */
  public toOptimizeWaypoints() {
    return this.to('OptimizeWaypoints');
  }

  /**
   * Grants permission to enhances the accuracy of geographic positioning by aligning GPS coordinates to the nearest road segments on a digital map
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_SnapToRoads.html
   */
  public toSnapToRoads() {
    return this.to('SnapToRoads');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'CalculateIsolines',
      'CalculateRouteMatrix',
      'CalculateRoutes',
      'OptimizeWaypoints',
      'SnapToRoads'
    ]
  };

  /**
   * Adds a resource of type provider to the statement
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/Welcome.html
   *
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProvider(region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:geo-routes:${ region ?? this.defaultRegion }::provider/default`);
  }
}
