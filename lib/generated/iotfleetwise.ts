import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps, Operator } from '../shared';

/**
 * Statement provider for service [iotfleetwise](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleetwise.html).
 *
 * @param options - Options for the statement
 */
export class Iotfleetwise extends PolicyStatement {
  public servicePrefix = 'iotfleetwise';

  /**
   * Statement provider for service [iotfleetwise](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleetwise.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to associate the given vehicle to a fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_AssociateVehicleFleet.html
   */
  public toAssociateVehicleFleet() {
    return this.to('AssociateVehicleFleet');
  }

  /**
   * Grants permission to create a batch of vehicles
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iot:CreateThing
   * - iot:DescribeThing
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_BatchCreateVehicle.html
   */
  public toBatchCreateVehicle() {
    return this.to('BatchCreateVehicle');
  }

  /**
   * Grants permission to update a batch of vehicles
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUpdateToModelManifestArn()
   * - .ifUpdateToDecoderManifestArn()
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_BatchUpdateVehicle.html
   */
  public toBatchUpdateVehicle() {
    return this.to('BatchUpdateVehicle');
  }

  /**
   * Grants permission to create a campaign
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateCampaign.html
   */
  public toCreateCampaign() {
    return this.to('CreateCampaign');
  }

  /**
   * Grants permission to create a decoder manifest for an existing model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateDecoderManifest.html
   */
  public toCreateDecoderManifest() {
    return this.to('CreateDecoderManifest');
  }

  /**
   * Grants permission to create a fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateFleet.html
   */
  public toCreateFleet() {
    return this.to('CreateFleet');
  }

  /**
   * Grants permission to create a model manifest definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateModelManifest.html
   */
  public toCreateModelManifest() {
    return this.to('CreateModelManifest');
  }

  /**
   * Grants permission to create a signal catalog
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateSignalCatalog.html
   */
  public toCreateSignalCatalog() {
    return this.to('CreateSignalCatalog');
  }

  /**
   * Grants permission to create a vehicle
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iot:CreateThing
   * - iot:DescribeThing
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateVehicle.html
   */
  public toCreateVehicle() {
    return this.to('CreateVehicle');
  }

  /**
   * Grants permission to delete a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteCampaign.html
   */
  public toDeleteCampaign() {
    return this.to('DeleteCampaign');
  }

  /**
   * Grants permission to delete the given decoder manifest
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteDecoderManifest.html
   */
  public toDeleteDecoderManifest() {
    return this.to('DeleteDecoderManifest');
  }

  /**
   * Grants permission to delete a fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteFleet.html
   */
  public toDeleteFleet() {
    return this.to('DeleteFleet');
  }

  /**
   * Grants permission to delete the given model manifest
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteModelManifest.html
   */
  public toDeleteModelManifest() {
    return this.to('DeleteModelManifest');
  }

  /**
   * Grants permission to delete a specific signal catalog
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteSignalCatalog.html
   */
  public toDeleteSignalCatalog() {
    return this.to('DeleteSignalCatalog');
  }

  /**
   * Grants permission to delete a vehicle
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteVehicle.html
   */
  public toDeleteVehicle() {
    return this.to('DeleteVehicle');
  }

  /**
   * Grants permission to disassociate a vehicle from an existing fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DisassociateVehicleFleet.html
   */
  public toDisassociateVehicleFleet() {
    return this.to('DisassociateVehicleFleet');
  }

  /**
   * Grants permission to get summary information for a given campaign
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetCampaign.html
   */
  public toGetCampaign() {
    return this.to('GetCampaign');
  }

  /**
   * Grants permission to get summary information for a given decoder manifest definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetDecoderManifest.html
   */
  public toGetDecoderManifest() {
    return this.to('GetDecoderManifest');
  }

  /**
   * Grants permission to get summary information for a fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetFleet.html
   */
  public toGetFleet() {
    return this.to('GetFleet');
  }

  /**
   * Grants permission to get the logging options for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetLoggingOptions.html
   */
  public toGetLoggingOptions() {
    return this.to('GetLoggingOptions');
  }

  /**
   * Grants permission to get summary information for a given model manifest definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetModelManifest.html
   */
  public toGetModelManifest() {
    return this.to('GetModelManifest');
  }

  /**
   * Grants permission to get the account registration status with IoT FleetWise
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetRegisterAccountStatus.html
   */
  public toGetRegisterAccountStatus() {
    return this.to('GetRegisterAccountStatus');
  }

  /**
   * Grants permission to get summary information for a specific signal catalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetSignalCatalog.html
   */
  public toGetSignalCatalog() {
    return this.to('GetSignalCatalog');
  }

  /**
   * Grants permission to get summary information for a vehicle
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetVehicle.html
   */
  public toGetVehicle() {
    return this.to('GetVehicle');
  }

  /**
   * Grants permission to get the status of the campaigns running on a specific vehicle
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_GetVehicleStatus.html
   */
  public toGetVehicleStatus() {
    return this.to('GetVehicleStatus');
  }

  /**
   * Grants permission to import an existing decoder manifest
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ImportDecoderManifest.html
   */
  public toImportDecoderManifest() {
    return this.to('ImportDecoderManifest');
  }

  /**
   * Grants permission to create a signal catalog by importing existing definitions
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ImportSignalCatalog.html
   */
  public toImportSignalCatalog() {
    return this.to('ImportSignalCatalog');
  }

  /**
   * Grants permission to list campaigns
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListCampaigns.html
   */
  public toListCampaigns() {
    return this.to('ListCampaigns');
  }

  /**
   * Grants permission to list network interfaces associated to the existing decoder manifest
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListDecoderManifestNetworkInterfaces.html
   */
  public toListDecoderManifestNetworkInterfaces() {
    return this.to('ListDecoderManifestNetworkInterfaces');
  }

  /**
   * Grants permission to list decoder manifest signals
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListDecoderManifestSignals.html
   */
  public toListDecoderManifestSignals() {
    return this.to('ListDecoderManifestSignals');
  }

  /**
   * Grants permission to list all decoder manifests, with an optional filter on model manifest
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListDecoderManifests.html
   */
  public toListDecoderManifests() {
    return this.to('ListDecoderManifests');
  }

  /**
   * Grants permission to list all fleets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListFleets.html
   */
  public toListFleets() {
    return this.to('ListFleets');
  }

  /**
   * Grants permission to list all the fleets that the given vehicle is associated with
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListFleetsForVehicle.html
   */
  public toListFleetsForVehicle() {
    return this.to('ListFleetsForVehicle');
  }

  /**
   * Grants permission to list all nodes for the given model manifest
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListModelManifestNodes.html
   */
  public toListModelManifestNodes() {
    return this.to('ListModelManifestNodes');
  }

  /**
   * Grants permission to list all model manifests, with an optional filter on signal catalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListModelManifests.html
   */
  public toListModelManifests() {
    return this.to('ListModelManifests');
  }

  /**
   * Grants permission to list all nodes for a given signal catalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListSignalCatalogNodes.html
   */
  public toListSignalCatalogNodes() {
    return this.to('ListSignalCatalogNodes');
  }

  /**
   * Grants permission to list all signal catalogs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListSignalCatalogs.html
   */
  public toListSignalCatalogs() {
    return this.to('ListSignalCatalogs');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all vehicles, with an optional filter on model manifest
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListVehicles.html
   */
  public toListVehicles() {
    return this.to('ListVehicles');
  }

  /**
   * Grants permission to list vehicles in the given fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListVehiclesInFleet.html
   */
  public toListVehiclesInFleet() {
    return this.to('ListVehiclesInFleet');
  }

  /**
   * Grants permission to put the logging options for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_PutLoggingOptions.html
   */
  public toPutLoggingOptions() {
    return this.to('PutLoggingOptions');
  }

  /**
   * Grants permission to register an AWS account to IoT FleetWise
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_RegisterAccount.html
   */
  public toRegisterAccount() {
    return this.to('RegisterAccount');
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the given campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UpdateCampaign.html
   */
  public toUpdateCampaign() {
    return this.to('UpdateCampaign');
  }

  /**
   * Grants permission to update a decoder manifest defnition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UpdateDecoderManifest.html
   */
  public toUpdateDecoderManifest() {
    return this.to('UpdateDecoderManifest');
  }

  /**
   * Grants permission to update the fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UpdateFleet.html
   */
  public toUpdateFleet() {
    return this.to('UpdateFleet');
  }

  /**
   * Grants permission to update the given model manifest definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UpdateModelManifest.html
   */
  public toUpdateModelManifest() {
    return this.to('UpdateModelManifest');
  }

  /**
   * Grants permission to update a specific signal catalog definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UpdateSignalCatalog.html
   */
  public toUpdateSignalCatalog() {
    return this.to('UpdateSignalCatalog');
  }

  /**
   * Grants permission to update the vehicle
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUpdateToModelManifestArn()
   * - .ifUpdateToDecoderManifestArn()
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_UpdateVehicle.html
   */
  public toUpdateVehicle() {
    return this.to('UpdateVehicle');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateVehicleFleet',
      'BatchCreateVehicle',
      'BatchUpdateVehicle',
      'CreateCampaign',
      'CreateDecoderManifest',
      'CreateFleet',
      'CreateModelManifest',
      'CreateSignalCatalog',
      'CreateVehicle',
      'DeleteCampaign',
      'DeleteDecoderManifest',
      'DeleteFleet',
      'DeleteModelManifest',
      'DeleteSignalCatalog',
      'DeleteVehicle',
      'DisassociateVehicleFleet',
      'ImportDecoderManifest',
      'ImportSignalCatalog',
      'PutLoggingOptions',
      'RegisterAccount',
      'UpdateCampaign',
      'UpdateDecoderManifest',
      'UpdateFleet',
      'UpdateModelManifest',
      'UpdateSignalCatalog',
      'UpdateVehicle'
    ],
    Read: [
      'GetCampaign',
      'GetDecoderManifest',
      'GetFleet',
      'GetLoggingOptions',
      'GetModelManifest',
      'GetRegisterAccountStatus',
      'GetSignalCatalog',
      'GetVehicle',
      'GetVehicleStatus',
      'ListCampaigns',
      'ListDecoderManifests',
      'ListFleets',
      'ListFleetsForVehicle',
      'ListModelManifests',
      'ListSignalCatalogNodes',
      'ListSignalCatalogs',
      'ListTagsForResource',
      'ListVehicles',
      'ListVehiclesInFleet'
    ],
    List: [
      'ListDecoderManifestNetworkInterfaces',
      'ListDecoderManifestSignals',
      'ListModelManifestNodes'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type campaign to the statement
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/campaigns.html
   *
   * @param campaignName - Identifier for the campaignName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCampaign(campaignName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:iotfleetwise:${ region || '*' }:${ account || '*' }:campaign/${ campaignName }`);
  }

  /**
   * Adds a resource of type decodermanifest to the statement
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/decoder-manifests.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDecodermanifest(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:iotfleetwise:${ region || '*' }:${ account || '*' }:decoder-manifest/${ name }`);
  }

  /**
   * Adds a resource of type fleet to the statement
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleets.html
   *
   * @param fleetId - Identifier for the fleetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFleet(fleetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:iotfleetwise:${ region || '*' }:${ account || '*' }:fleet/${ fleetId }`);
  }

  /**
   * Adds a resource of type modelmanifest to the statement
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/vehicle-models.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModelmanifest(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:iotfleetwise:${ region || '*' }:${ account || '*' }:model-manifest/${ name }`);
  }

  /**
   * Adds a resource of type signalcatalog to the statement
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/signal-catalogs.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSignalcatalog(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:iotfleetwise:${ region || '*' }:${ account || '*' }:signal-catalog/${ name }`);
  }

  /**
   * Adds a resource of type vehicle to the statement
   *
   * https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/vehicles.html
   *
   * @param vehicleId - Identifier for the vehicleId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVehicle(vehicleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:iotfleetwise:${ region || '*' }:${ account || '*' }:vehicle/${ vehicleId }`);
  }

  /**
   * Filters access by a list of IoT FleetWise Decoder Manifest ARNs
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleetwise.html
   *
   * Applies to actions:
   * - .toBatchUpdateVehicle()
   * - .toUpdateVehicle()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUpdateToDecoderManifestArn(value: string | string[], operator?: Operator | string) {
    return this.if(`UpdateToDecoderManifestArn`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a list of IoT FleetWise Model Manifest ARNs
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleetwise.html
   *
   * Applies to actions:
   * - .toBatchUpdateVehicle()
   * - .toUpdateVehicle()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUpdateToModelManifestArn(value: string | string[], operator?: Operator | string) {
    return this.if(`UpdateToModelManifestArn`, value, operator || 'StringLike');
  }
}
