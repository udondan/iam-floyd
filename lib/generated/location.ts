import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [geo](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlocation.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Geo extends PolicyStatement {
  public servicePrefix = 'geo';

  /**
   * Statement provider for service [geo](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlocation.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an association between a geofence-collection and a tracker resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_AssociateTrackerConsumer.html
   */
  public toAssociateTrackerConsumer() {
    return this.to('AssociateTrackerConsumer');
  }

  /**
   * Grants permission to delete a batch of device position histories from a tracker resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDeviceIds()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_BatchDeleteDevicePositionHistory.html
   */
  public toBatchDeleteDevicePositionHistory() {
    return this.to('BatchDeleteDevicePositionHistory');
  }

  /**
   * Grants permission to delete a batch of geofences from a geofence collection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifGeofenceIds()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_BatchDeleteGeofence.html
   */
  public toBatchDeleteGeofence() {
    return this.to('BatchDeleteGeofence');
  }

  /**
   * Grants permission to evaluate device positions against the position of geofences in a given geofence collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_BatchEvaluateGeofences.html
   */
  public toBatchEvaluateGeofences() {
    return this.to('BatchEvaluateGeofences');
  }

  /**
   * Grants permission to send a batch request to retrieve device positions
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDeviceIds()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_BatchGetDevicePosition.html
   */
  public toBatchGetDevicePosition() {
    return this.to('BatchGetDevicePosition');
  }

  /**
   * Grants permission to send a batch request for adding geofences into a given geofence collection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifGeofenceIds()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_BatchPutGeofence.html
   */
  public toBatchPutGeofence() {
    return this.to('BatchPutGeofence');
  }

  /**
   * Grants permission to upload a position update for one or more devices to a tracker resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDeviceIds()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_BatchUpdateDevicePosition.html
   */
  public toBatchUpdateDevicePosition() {
    return this.to('BatchUpdateDevicePosition');
  }

  /**
   * Grants permission to calculate routes using a given route calculator resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateRoute.html
   */
  public toCalculateRoute() {
    return this.to('CalculateRoute');
  }

  /**
   * Grants permission to calculate a route matrix using a given route calculator resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateRouteMatrix.html
   */
  public toCalculateRouteMatrix() {
    return this.to('CalculateRouteMatrix');
  }

  /**
   * Grants permission to create a geofence-collection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_CreateGeofenceCollection.html
   */
  public toCreateGeofenceCollection() {
    return this.to('CreateGeofenceCollection');
  }

  /**
   * Grants permission to create an API key resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_CreateKey.html
   */
  public toCreateKey() {
    return this.to('CreateKey');
  }

  /**
   * Grants permission to create a map resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_CreateMap.html
   */
  public toCreateMap() {
    return this.to('CreateMap');
  }

  /**
   * Grants permission to create a place index resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_CreatePlaceIndex.html
   */
  public toCreatePlaceIndex() {
    return this.to('CreatePlaceIndex');
  }

  /**
   * Grants permission to create a route calculator resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_CreateRouteCalculator.html
   */
  public toCreateRouteCalculator() {
    return this.to('CreateRouteCalculator');
  }

  /**
   * Grants permission to create a tracker resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_CreateTracker.html
   */
  public toCreateTracker() {
    return this.to('CreateTracker');
  }

  /**
   * Grants permission to delete a geofence-collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteGeofenceCollection.html
   */
  public toDeleteGeofenceCollection() {
    return this.to('DeleteGeofenceCollection');
  }

  /**
   * Grants permission to delete an API key resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteKey.html
   */
  public toDeleteKey() {
    return this.to('DeleteKey');
  }

  /**
   * Grants permission to delete a map resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteMap.html
   */
  public toDeleteMap() {
    return this.to('DeleteMap');
  }

  /**
   * Grants permission to delete a place index resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_DeletePlaceIndex.html
   */
  public toDeletePlaceIndex() {
    return this.to('DeletePlaceIndex');
  }

  /**
   * Grants permission to delete a route calculator resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteRouteCalculator.html
   */
  public toDeleteRouteCalculator() {
    return this.to('DeleteRouteCalculator');
  }

  /**
   * Grants permission to delete a tracker resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_DeleteTracker.html
   */
  public toDeleteTracker() {
    return this.to('DeleteTracker');
  }

  /**
   * Grants permission to retrieve geofence collection details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeGeofenceCollection.html
   */
  public toDescribeGeofenceCollection() {
    return this.to('DescribeGeofenceCollection');
  }

  /**
   * Grants permission to retrieve API key resource details and secret
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeKey.html
   */
  public toDescribeKey() {
    return this.to('DescribeKey');
  }

  /**
   * Grants permission to retrieve map resource details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeMap.html
   */
  public toDescribeMap() {
    return this.to('DescribeMap');
  }

  /**
   * Grants permission to retrieve place-index resource details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_DescribePlaceIndex.html
   */
  public toDescribePlaceIndex() {
    return this.to('DescribePlaceIndex');
  }

  /**
   * Grants permission to retrieve route calculator resource details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeRouteCalculator.html
   */
  public toDescribeRouteCalculator() {
    return this.to('DescribeRouteCalculator');
  }

  /**
   * Grants permission to retrieve a tracker resource details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_DescribeTracker.html
   */
  public toDescribeTracker() {
    return this.to('DescribeTracker');
  }

  /**
   * Grants permission to remove the association between a tracker resource and a geofence-collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_DisassociateTrackerConsumer.html
   */
  public toDisassociateTrackerConsumer() {
    return this.to('DisassociateTrackerConsumer');
  }

  /**
   * Grants permission to retrieve the latest device position
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDeviceIds()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_GetDevicePosition.html
   */
  public toGetDevicePosition() {
    return this.to('GetDevicePosition');
  }

  /**
   * Grants permission to retrieve the device position history
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifDeviceIds()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_GetDevicePositionHistory.html
   */
  public toGetDevicePositionHistory() {
    return this.to('GetDevicePositionHistory');
  }

  /**
   * Grants permission to retrieve the geofence details from a geofence-collection
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifGeofenceIds()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_GetGeofence.html
   */
  public toGetGeofence() {
    return this.to('GetGeofence');
  }

  /**
   * Grants permission to retrieve the glyph file for a map resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapGlyphs.html
   */
  public toGetMapGlyphs() {
    return this.to('GetMapGlyphs');
  }

  /**
   * Grants permission to retrieve the sprite file for a map resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapSprites.html
   */
  public toGetMapSprites() {
    return this.to('GetMapSprites');
  }

  /**
   * Grants permission to retrieve the map style descriptor from a map resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapStyleDescriptor.html
   */
  public toGetMapStyleDescriptor() {
    return this.to('GetMapStyleDescriptor');
  }

  /**
   * Grants permission to retrieve the map tile from the map resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapTile.html
   */
  public toGetMapTile() {
    return this.to('GetMapTile');
  }

  /**
   * Grants permission to find a place by its unique ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_GetPlace.html
   */
  public toGetPlace() {
    return this.to('GetPlace');
  }

  /**
   * Grants permission to retrieve a list of devices and their latest positions from the given tracker resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_ListDevicePositions.html
   */
  public toListDevicePositions() {
    return this.to('ListDevicePositions');
  }

  /**
   * Grants permission to lists geofence-collections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_ListGeofenceCollections.html
   */
  public toListGeofenceCollections() {
    return this.to('ListGeofenceCollections');
  }

  /**
   * Grants permission to list geofences stored in a given geofence collection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_ListGeofences.html
   */
  public toListGeofences() {
    return this.to('ListGeofences');
  }

  /**
   * Grants permission to list API key resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_ListKeys.html
   */
  public toListKeys() {
    return this.to('ListKeys');
  }

  /**
   * Grants permission to list map resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_ListMaps.html
   */
  public toListMaps() {
    return this.to('ListMaps');
  }

  /**
   * Grants permission to return a list of place index resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_ListPlaceIndexes.html
   */
  public toListPlaceIndexes() {
    return this.to('ListPlaceIndexes');
  }

  /**
   * Grants permission to return a list of route calculator resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_ListRouteCalculators.html
   */
  public toListRouteCalculators() {
    return this.to('ListRouteCalculators');
  }

  /**
   * Grants permission to list the tags (metadata) which you have assigned to the resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve a list of geofence collections currently associated to the given tracker resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_ListTrackerConsumers.html
   */
  public toListTrackerConsumers() {
    return this.to('ListTrackerConsumers');
  }

  /**
   * Grants permission to return a list of tracker resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_ListTrackers.html
   */
  public toListTrackers() {
    return this.to('ListTrackers');
  }

  /**
   * Grants permission to add a new geofence or update an existing geofence to a given geofence-collection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifGeofenceIds()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_PutGeofence.html
   */
  public toPutGeofence() {
    return this.to('PutGeofence');
  }

  /**
   * Grants permission to reverse geocodes a given coordinate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_SearchPlaceIndexForPosition.html
   */
  public toSearchPlaceIndexForPosition() {
    return this.to('SearchPlaceIndexForPosition');
  }

  /**
   * Grants permission to generate suggestions for addresses and points of interest based on partial or misspelled free-form text
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_SearchPlaceIndexForSuggestions.html
   */
  public toSearchPlaceIndexForSuggestions() {
    return this.to('SearchPlaceIndexForSuggestions');
  }

  /**
   * Grants permission to geocode free-form text, such as an address, name, city or region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_SearchPlaceIndexForText.html
   */
  public toSearchPlaceIndexForText() {
    return this.to('SearchPlaceIndexForText');
  }

  /**
   * Grants permission to adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the given tags (metadata) from the resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a geofence collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateGeofenceCollection.html
   */
  public toUpdateGeofenceCollection() {
    return this.to('UpdateGeofenceCollection');
  }

  /**
   * Grants permission to update an API key resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateKey.html
   */
  public toUpdateKey() {
    return this.to('UpdateKey');
  }

  /**
   * Grants permission to update a map resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateMap.html
   */
  public toUpdateMap() {
    return this.to('UpdateMap');
  }

  /**
   * Grants permission to update a place index resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_UpdatePlaceIndex.html
   */
  public toUpdatePlaceIndex() {
    return this.to('UpdatePlaceIndex');
  }

  /**
   * Grants permission to update a route calculator resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateRouteCalculator.html
   */
  public toUpdateRouteCalculator() {
    return this.to('UpdateRouteCalculator');
  }

  /**
   * Grants permission to update a tracker resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/APIReference/API_UpdateTracker.html
   */
  public toUpdateTracker() {
    return this.to('UpdateTracker');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateTrackerConsumer',
      'BatchDeleteDevicePositionHistory',
      'BatchDeleteGeofence',
      'BatchEvaluateGeofences',
      'BatchPutGeofence',
      'BatchUpdateDevicePosition',
      'CreateGeofenceCollection',
      'CreateKey',
      'CreateMap',
      'CreatePlaceIndex',
      'CreateRouteCalculator',
      'CreateTracker',
      'DeleteGeofenceCollection',
      'DeleteKey',
      'DeleteMap',
      'DeletePlaceIndex',
      'DeleteRouteCalculator',
      'DeleteTracker',
      'DisassociateTrackerConsumer',
      'PutGeofence',
      'UpdateGeofenceCollection',
      'UpdateKey',
      'UpdateMap',
      'UpdatePlaceIndex',
      'UpdateRouteCalculator',
      'UpdateTracker'
    ],
    Read: [
      'BatchGetDevicePosition',
      'CalculateRoute',
      'CalculateRouteMatrix',
      'DescribeGeofenceCollection',
      'DescribeKey',
      'DescribeMap',
      'DescribePlaceIndex',
      'DescribeRouteCalculator',
      'DescribeTracker',
      'GetDevicePosition',
      'GetDevicePositionHistory',
      'GetGeofence',
      'GetMapGlyphs',
      'GetMapSprites',
      'GetMapStyleDescriptor',
      'GetMapTile',
      'GetPlace',
      'ListDevicePositions',
      'ListGeofences',
      'ListTagsForResource',
      'ListTrackerConsumers',
      'SearchPlaceIndexForPosition',
      'SearchPlaceIndexForSuggestions',
      'SearchPlaceIndexForText'
    ],
    List: [
      'ListGeofenceCollections',
      'ListKeys',
      'ListMaps',
      'ListPlaceIndexes',
      'ListRouteCalculators',
      'ListTrackers'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type api-key to the statement
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html
   *
   * @param keyName - Identifier for the keyName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApiKey(keyName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:geo:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:api-key/${ keyName }`);
  }

  /**
   * Adds a resource of type geofence-collection to the statement
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/geofence-tracker-concepts.html
   *
   * @param geofenceCollectionName - Identifier for the geofenceCollectionName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifGeofenceIds()
   */
  public onGeofenceCollection(geofenceCollectionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:geo:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:geofence-collection/${ geofenceCollectionName }`);
  }

  /**
   * Adds a resource of type map to the statement
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/map-concepts.html
   *
   * @param mapName - Identifier for the mapName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMap(mapName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:geo:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:map/${ mapName }`);
  }

  /**
   * Adds a resource of type place-index to the statement
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/places-concepts.html
   *
   * @param indexName - Identifier for the indexName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPlaceIndex(indexName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:geo:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:place-index/${ indexName }`);
  }

  /**
   * Adds a resource of type route-calculator to the statement
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/route-concepts.html
   *
   * @param calculatorName - Identifier for the calculatorName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRouteCalculator(calculatorName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:geo:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:route-calculator/${ calculatorName }`);
  }

  /**
   * Adds a resource of type tracker to the statement
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/geofence-tracker-concepts.html
   *
   * @param trackerName - Identifier for the trackerName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifDeviceIds()
   */
  public onTracker(trackerName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:geo:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:tracker/${ trackerName }`);
  }

  /**
   * Filters access by a tag's key and value in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateGeofenceCollection()
   * - .toCreateKey()
   * - .toCreateMap()
   * - .toCreatePlaceIndex()
   * - .toCreateRouteCalculator()
   * - .toCreateTracker()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - api-key
   * - geofence-collection
   * - map
   * - place-index
   * - route-calculator
   * - tracker
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateGeofenceCollection()
   * - .toCreateKey()
   * - .toCreateMap()
   * - .toCreatePlaceIndex()
   * - .toCreateRouteCalculator()
   * - .toCreateTracker()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of device ids in the request
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toBatchDeleteDevicePositionHistory()
   * - .toBatchGetDevicePosition()
   * - .toBatchUpdateDevicePosition()
   * - .toGetDevicePosition()
   * - .toGetDevicePositionHistory()
   *
   * Applies to resource types:
   * - tracker
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDeviceIds(value: string | string[], operator?: Operator | string) {
    return this.if(`DeviceIds`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of geofence ids in the request
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toBatchDeleteGeofence()
   * - .toBatchPutGeofence()
   * - .toGetGeofence()
   * - .toPutGeofence()
   *
   * Applies to resource types:
   * - geofence-collection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGeofenceIds(value: string | string[], operator?: Operator | string) {
    return this.if(`GeofenceIds`, value, operator ?? 'StringLike');
  }
}
