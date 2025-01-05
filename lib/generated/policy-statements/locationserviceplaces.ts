import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [geo-places](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlocationserviceplaces.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class GeoPlaces extends PolicyStatement {
  public servicePrefix = 'geo-places';

  /**
   * Statement provider for service [geo-places](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlocationserviceplaces.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to autocomplete text input with potential places and addresses as the user types
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_Autocomplete.html
   */
  public toAutocomplete() {
    return this.to('Autocomplete');
  }

  /**
   * Grants permission to geocode a textual address or place into geographic coordinates
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_Geocode.html
   */
  public toGeocode() {
    return this.to('Geocode');
  }

  /**
   * Grants permission to query a place by it's unqiue place ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_GetPlace.html
   */
  public toGetPlace() {
    return this.to('GetPlace');
  }

  /**
   * Grants permission to convert geographic coordinates into a human-readable address or place
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_ReverseGeocode.html
   */
  public toReverseGeocode() {
    return this.to('ReverseGeocode');
  }

  /**
   * Grants permission to retrieve places near a position which match to a set of user defined restrictions such as category or food type offered by the place
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_SearchNearby.html
   */
  public toSearchNearby() {
    return this.to('SearchNearby');
  }

  /**
   * Grants permission to query for places using a single free-form text input
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_SearchText.html
   */
  public toSearchText() {
    return this.to('SearchText');
  }

  /**
   * Grants permission to suggest potential places based on the user's input
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_Suggest.html
   */
  public toSuggest() {
    return this.to('Suggest');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'Autocomplete',
      'Geocode',
      'GetPlace',
      'ReverseGeocode',
      'SearchNearby',
      'SearchText',
      'Suggest'
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:geo-places:${ region ?? this.defaultRegion }::provider/default`);
  }
}
