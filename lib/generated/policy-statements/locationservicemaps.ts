import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [geo-maps](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlocationservicemaps.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class GeoMaps extends PolicyStatement {
  public servicePrefix = 'geo-maps';

  /**
   * Statement provider for service [geo-maps](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlocationservicemaps.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to retrieve the static map
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_geomaps_GetStaticMap.html
   */
  public toGetStaticMap() {
    return this.to('GetStaticMap');
  }

  /**
   * Grants permission to retrieve the map tile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_geomaps_GetTile.html
   */
  public toGetTile() {
    return this.to('GetTile');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetStaticMap',
      'GetTile'
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:geo-maps:${ region ?? this.defaultRegion }::provider/default`);
  }
}
