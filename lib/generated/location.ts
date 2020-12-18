import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an association between a geofence-collection and a tracker resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_AssociateTrackerConsumer.html
   */
  public toAssociateTrackerConsumer() {
    this.to('geo:AssociateTrackerConsumer');
    return this;
  }

  /**
   * Grants permission to delete a batch of geofences from a geofence collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_BatchDeleteGeofence.html
   */
  public toBatchDeleteGeofence() {
    this.to('geo:BatchDeleteGeofence');
    return this;
  }

  /**
   * Grants permission to evaluate device positions against the position of geofences in a given geofence collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_BatchEvaluateGeofences.html
   */
  public toBatchEvaluateGeofences() {
    this.to('geo:BatchEvaluateGeofences');
    return this;
  }

  /**
   * Grants permission to send a batch request to retrieve device positions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_BatchGetDevicePosition.html
   */
  public toBatchGetDevicePosition() {
    this.to('geo:BatchGetDevicePosition');
    return this;
  }

  /**
   * Grants permission to send a batch request for adding geofences into a given geofence collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_BatchPutGeofence.html
   */
  public toBatchPutGeofence() {
    this.to('geo:BatchPutGeofence');
    return this;
  }

  /**
   * Grants permission to upload a position update for one or more devices to a tracker resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_BatchUpdateDevicePosition.html
   */
  public toBatchUpdateDevicePosition() {
    this.to('geo:BatchUpdateDevicePosition');
    return this;
  }

  /**
   * Grants permission to create a geofence-collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_CreateGeofenceCollection.html
   */
  public toCreateGeofenceCollection() {
    this.to('geo:CreateGeofenceCollection');
    return this;
  }

  /**
   * Grants permission to create a map resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_CreateMap.html
   */
  public toCreateMap() {
    this.to('geo:CreateMap');
    return this;
  }

  /**
   * Grants permission to create a place index resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_CreatePlaceIndex.html
   */
  public toCreatePlaceIndex() {
    this.to('geo:CreatePlaceIndex');
    return this;
  }

  /**
   * Grants permission to create a tracker resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_CreateTracker.html
   */
  public toCreateTracker() {
    this.to('geo:CreateTracker');
    return this;
  }

  /**
   * Grants permission to deletes a geofence-collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_DeleteGeofenceCollection.html
   */
  public toDeleteGeofenceCollection() {
    this.to('geo:DeleteGeofenceCollection');
    return this;
  }

  /**
   * Grants permission to delete a map resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_DeleteMap.html
   */
  public toDeleteMap() {
    this.to('geo:DeleteMap');
    return this;
  }

  /**
   * Grants permission to delete a place index resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_DeletePlaceIndex.html
   */
  public toDeletePlaceIndex() {
    this.to('geo:DeletePlaceIndex');
    return this;
  }

  /**
   * Grants permission to delete a tracker resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_DeleteTracker.html
   */
  public toDeleteTracker() {
    this.to('geo:DeleteTracker');
    return this;
  }

  /**
   * Grants permission to retrieve a geofence collection details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_DescribeGeofenceCollection.html
   */
  public toDescribeGeofenceCollection() {
    this.to('geo:DescribeGeofenceCollection');
    return this;
  }

  /**
   * Grants permission to retrieve a map resource details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_DescribeMap.html
   */
  public toDescribeMap() {
    this.to('geo:DescribeMap');
    return this;
  }

  /**
   * Grants permission to retrieve a a place-index resource details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_DescribePlaceIndex.html
   */
  public toDescribePlaceIndex() {
    this.to('geo:DescribePlaceIndex');
    return this;
  }

  /**
   * Grants permission to retrieve a tracker resource details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_DescribeTracker.html
   */
  public toDescribeTracker() {
    this.to('geo:DescribeTracker');
    return this;
  }

  /**
   * Grants permission to remove the association between a tracker resource and a geofence-collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_DisassociateTrackerConsumer.html
   */
  public toDisassociateTrackerConsumer() {
    this.to('geo:DisassociateTrackerConsumer');
    return this;
  }

  /**
   * Grants permission to retrieve the latest device position
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_GetDevicePosition.html
   */
  public toGetDevicePosition() {
    this.to('geo:GetDevicePosition');
    return this;
  }

  /**
   * Grant permission to retrieve the device position history
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_GetDevicePositionHistory.html
   */
  public toGetDevicePositionHistory() {
    this.to('geo:GetDevicePositionHistory');
    return this;
  }

  /**
   * Grants permission to retrieve the geofence details from a geofence-collection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_GetGeofence.html
   */
  public toGetGeofence() {
    this.to('geo:GetGeofence');
    return this;
  }

  /**
   * Grants permission to retrieve the glyph file for a map resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_GetMapGlyphs.html
   */
  public toGetMapGlyphs() {
    this.to('geo:GetMapGlyphs');
    return this;
  }

  /**
   * Grants permission to retrieve the sprite file for a map resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_GetMapSprites.html
   */
  public toGetMapSprites() {
    this.to('geo:GetMapSprites');
    return this;
  }

  /**
   * Grants permission to retrieve the map style descriptor from a map resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_GetMapStyleDescriptor.html
   */
  public toGetMapStyleDescriptor() {
    this.to('geo:GetMapStyleDescriptor');
    return this;
  }

  /**
   * Grants permission to retrieve the map tile from the map resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_GetMapTile.html
   */
  public toGetMapTile() {
    this.to('geo:GetMapTile');
    return this;
  }

  /**
   * Grants permission to retrieves the map TileJSON details from a given map resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_GetMapTileJson.html
   */
  public toGetMapTileJson() {
    this.to('geo:GetMapTileJson');
    return this;
  }

  /**
   * Grants permission to lists geofence-collections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_ListGeofenceCollections.html
   */
  public toListGeofenceCollections() {
    this.to('geo:ListGeofenceCollections');
    return this;
  }

  /**
   * Grants permission to list geofences stored in a given geofence collection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_ListGeofences.html
   */
  public toListGeofences() {
    this.to('geo:ListGeofences');
    return this;
  }

  /**
   * Grants permission to list map resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_ListMaps.html
   */
  public toListMaps() {
    this.to('geo:ListMaps');
    return this;
  }

  /**
   * Grants permission to return a list of place index resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_ListPlaceIndexes.html
   */
  public toListPlaceIndexes() {
    this.to('geo:ListPlaceIndexes');
    return this;
  }

  /**
   * Grants permission to retrieve a list of geofence collections currently associated to the given tracker resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_ListTrackerConsumers.html
   */
  public toListTrackerConsumers() {
    this.to('geo:ListTrackerConsumers');
    return this;
  }

  /**
   * Grants permission to return a list of tracker resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_ListTrackers.html
   */
  public toListTrackers() {
    this.to('geo:ListTrackers');
    return this;
  }

  /**
   * Grants permission to add a new geofence or update an existing geofence to a given geofence-collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_PutGeofence.html
   */
  public toPutGeofence() {
    this.to('geo:PutGeofence');
    return this;
  }

  /**
   * Grants permission to reverse geocodes a given coordinate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_SearchPlaceIndexForPosition.html
   */
  public toSearchPlaceIndexForPosition() {
    this.to('geo:SearchPlaceIndexForPosition');
    return this;
  }

  /**
   * Grants permission to geocode free-form text, such as an address, name, city or region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_SearchPlaceIndexForText.html
   */
  public toSearchPlaceIndexForText() {
    this.to('geo:SearchPlaceIndexForText');
    return this;
  }

  /**
   * Grants permission to update the description of a geofence collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_UpdateGeofenceCollection.html
   */
  public toUpdateGeofenceCollection() {
    this.to('geo:UpdateGeofenceCollection');
    return this;
  }

  /**
   * Grants permission to update the description of a tracker resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/API_UpdateTracker.html
   */
  public toUpdateTracker() {
    this.to('geo:UpdateTracker');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateTrackerConsumer",
      "BatchDeleteGeofence",
      "BatchEvaluateGeofences",
      "BatchPutGeofence",
      "BatchUpdateDevicePosition",
      "CreateGeofenceCollection",
      "CreateMap",
      "CreatePlaceIndex",
      "CreateTracker",
      "DeleteGeofenceCollection",
      "DeleteMap",
      "DeletePlaceIndex",
      "DeleteTracker",
      "DisassociateTrackerConsumer",
      "PutGeofence",
      "UpdateGeofenceCollection",
      "UpdateTracker"
    ],
    "Read": [
      "BatchGetDevicePosition",
      "DescribeGeofenceCollection",
      "DescribeMap",
      "DescribePlaceIndex",
      "DescribeTracker",
      "GetDevicePosition",
      "GetDevicePositionHistory",
      "GetGeofence",
      "GetMapGlyphs",
      "GetMapSprites",
      "GetMapStyleDescriptor",
      "GetMapTile",
      "GetMapTileJson",
      "ListGeofences",
      "ListTrackerConsumers",
      "SearchPlaceIndexForPosition",
      "SearchPlaceIndexForText"
    ],
    "List": [
      "ListGeofenceCollections",
      "ListMaps",
      "ListPlaceIndexes",
      "ListTrackers"
    ]
  };

  /**
   * Adds a resource of type geofence-collection to the statement
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/overview.html#geofence-overview
   *
   * @param geofenceCollectionName - Identifier for the geofenceCollectionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGeofenceCollection(geofenceCollectionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:geo:${Region}:${Account}:geofence-collection/${GeofenceCollectionName}';
    arn = arn.replace('${GeofenceCollectionName}', geofenceCollectionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type map to the statement
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/overview.html#map-overview
   *
   * @param mapName - Identifier for the mapName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onMap(mapName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:geo:${Region}:${Account}:map/${MapName}';
    arn = arn.replace('${MapName}', mapName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type place-index to the statement
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/overview.html#places-overview
   *
   * @param indexName - Identifier for the indexName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPlaceIndex(indexName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:geo:${Region}:${Account}:place-index/${IndexName}';
    arn = arn.replace('${IndexName}', indexName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type tracker to the statement
   *
   * https://docs.aws.amazon.com/location/latest/developerguide/overview.html#tracking-overview
   *
   * @param trackerName - Identifier for the trackerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTracker(trackerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:geo:${Region}:${Account}:tracker/${TrackerName}';
    arn = arn.replace('${TrackerName}', trackerName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
