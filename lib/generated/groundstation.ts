import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [groundstation](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsgroundstation.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Groundstation extends PolicyStatement {
  public servicePrefix = 'groundstation';

  /**
   * Statement provider for service [groundstation](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsgroundstation.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CancelContact.html
   */
  public toCancelContact() {
    return this.to('CancelContact');
  }

  /**
   * Grants permission to create a configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateConfig.html
   */
  public toCreateConfig() {
    return this.to('CreateConfig');
  }

  /**
   * Grants permission to create a data flow endpoint group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateDataflowEndpointGroup.html
   */
  public toCreateDataflowEndpointGroup() {
    return this.to('CreateDataflowEndpointGroup');
  }

  /**
   * Grants permission to create a mission profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateMissionProfile.html
   */
  public toCreateMissionProfile() {
    return this.to('CreateMissionProfile');
  }

  /**
   * Grants permission to delete a config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteConfig.html
   */
  public toDeleteConfig() {
    return this.to('DeleteConfig');
  }

  /**
   * Grants permission to delete a data flow endpoint group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteDataflowEndpointGroup.html
   */
  public toDeleteDataflowEndpointGroup() {
    return this.to('DeleteDataflowEndpointGroup');
  }

  /**
   * Grants permission to delete a mission profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteMissionProfile.html
   */
  public toDeleteMissionProfile() {
    return this.to('DeleteMissionProfile');
  }

  /**
   * Grants permission to describe a contact
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DescribeContact.html
   */
  public toDescribeContact() {
    return this.to('DescribeContact');
  }

  /**
   * Grants permission to return a configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetConfig.html
   */
  public toGetConfig() {
    return this.to('GetConfig');
  }

  /**
   * Grants permission to return a data flow endpoint group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetDataflowEndpointGroup.html
   */
  public toGetDataflowEndpointGroup() {
    return this.to('GetDataflowEndpointGroup');
  }

  /**
   * Grants permission to return minutes usage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetMinuteUsage.html
   */
  public toGetMinuteUsage() {
    return this.to('GetMinuteUsage');
  }

  /**
   * Grants permission to retrieve a mission profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetMissionProfile.html
   */
  public toGetMissionProfile() {
    return this.to('GetMissionProfile');
  }

  /**
   * Grants permission to return information about a satellite
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetSatellite.html
   */
  public toGetSatellite() {
    return this.to('GetSatellite');
  }

  /**
   * Grants permission to return a list of past configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListConfigs.html
   */
  public toListConfigs() {
    return this.to('ListConfigs');
  }

  /**
   * Grants permission to return a list of contacts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListContacts.html
   */
  public toListContacts() {
    return this.to('ListContacts');
  }

  /**
   * Grants permission to list data flow endpoint groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListDataflowEndpointGroups.html
   */
  public toListDataflowEndpointGroups() {
    return this.to('ListDataflowEndpointGroups');
  }

  /**
   * Grants permission to list ground stations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListGroundStations.html
   */
  public toListGroundStations() {
    return this.to('ListGroundStations');
  }

  /**
   * Grants permission to return a list of mission profiles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListMissionProfiles.html
   */
  public toListMissionProfiles() {
    return this.to('ListMissionProfiles');
  }

  /**
   * Grants permission to list satellites
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListSatellites.html
   */
  public toListSatellites() {
    return this.to('ListSatellites');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to reserve a contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ReserveContact.html
   */
  public toReserveContact() {
    return this.to('ReserveContact');
  }

  /**
   * Grants permission to assign a resource tag
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to deassign a resource tag
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UpdateConfig.html
   */
  public toUpdateConfig() {
    return this.to('UpdateConfig');
  }

  /**
   * Grants permission to update a mission profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UpdateMissionProfile.html
   */
  public toUpdateMissionProfile() {
    return this.to('UpdateMissionProfile');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelContact',
      'CreateConfig',
      'CreateDataflowEndpointGroup',
      'CreateMissionProfile',
      'DeleteConfig',
      'DeleteDataflowEndpointGroup',
      'DeleteMissionProfile',
      'ReserveContact',
      'UpdateConfig',
      'UpdateMissionProfile'
    ],
    Read: [
      'DescribeContact',
      'GetConfig',
      'GetDataflowEndpointGroup',
      'GetMinuteUsage',
      'GetMissionProfile',
      'GetSatellite',
      'ListTagsForResource'
    ],
    List: [
      'ListConfigs',
      'ListContacts',
      'ListDataflowEndpointGroups',
      'ListGroundStations',
      'ListMissionProfiles',
      'ListSatellites'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Config to the statement
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ConfigListItem.html
   *
   * @param configType - Identifier for the configType.
   * @param configId - Identifier for the configId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifConfigId()
   * - .ifConfigType()
   */
  public onConfig(configType: string, configId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:groundstation:${ region || '*' }:${ account || '*' }:config/${ configType }/${ configId }`);
  }

  /**
   * Adds a resource of type Contact to the statement
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ContactData.html
   *
   * @param contactId - Identifier for the contactId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifContactId()
   */
  public onContact(contactId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:groundstation:${ region || '*' }:${ account || '*' }:contact/${ contactId }`);
  }

  /**
   * Adds a resource of type DataflowEndpointGroup to the statement
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DataflowEndpoint.html
   *
   * @param dataflowEndpointGroupId - Identifier for the dataflowEndpointGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifDataflowEndpointGroupId()
   */
  public onDataflowEndpointGroup(dataflowEndpointGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:groundstation:${ region || '*' }:${ account || '*' }:dataflow-endpoint-group/${ dataflowEndpointGroupId }`);
  }

  /**
   * Adds a resource of type GroundStationResource to the statement
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GroundStationData.html
   *
   * @param groundStationId - Identifier for the groundStationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifGroundStationId()
   */
  public onGroundStationResource(groundStationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:groundstation:${ region || '*' }:${ account || '*' }:groundstation:${ groundStationId }`);
  }

  /**
   * Adds a resource of type MissionProfile to the statement
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_MissionProfileListItem.html
   *
   * @param missionProfileId - Identifier for the missionProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifMissionProfileId()
   */
  public onMissionProfile(missionProfileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:groundstation:${ region || '*' }:${ account || '*' }:mission-profile/${ missionProfileId }`);
  }

  /**
   * Adds a resource of type Satellite to the statement
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_SatelliteListItem.html
   *
   * @param satelliteId - Identifier for the satelliteId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifSatelliteId()
   */
  public onSatellite(satelliteId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:groundstation:${ region || '*' }:${ account || '*' }:satellite/${ satelliteId }`);
  }

  /**
   * Filters access by the ID of a config
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateConfig.html#groundstation-CreateConfig-response-configId
   *
   * Applies to resource types:
   * - Config
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifConfigId(value: string | string[], operator?: Operator | string) {
    return this.if(`configId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the type of a config
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateConfig.html#groundstation-CreateConfig-response-configType
   *
   * Applies to resource types:
   * - Config
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifConfigType(value: string | string[], operator?: Operator | string) {
    return this.if(`configType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a contact
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ReserveContact.html#groundstation-ReserveContact-response-contactId
   *
   * Applies to resource types:
   * - Contact
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifContactId(value: string | string[], operator?: Operator | string) {
    return this.if(`contactId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a dataflow endpoint group
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateDataflowEndpointGroup.html#groundstation-CreateDataflowEndpointGroup-response-dataflowEndpointGroupId
   *
   * Applies to resource types:
   * - DataflowEndpointGroup
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDataflowEndpointGroupId(value: string | string[], operator?: Operator | string) {
    return this.if(`dataflowEndpointGroupId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a ground station
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GroundStationData.html#groundstation-Type-GroundStationData-groundStationId
   *
   * Applies to resource types:
   * - GroundStationResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGroundStationId(value: string | string[], operator?: Operator | string) {
    return this.if(`groundStationId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a mission profile
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateMissionProfile.html#groundstation-CreateMissionProfile-response-missionProfileId
   *
   * Applies to resource types:
   * - MissionProfile
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMissionProfileId(value: string | string[], operator?: Operator | string) {
    return this.if(`missionProfileId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a satellite
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_SatelliteListItem.html#groundstation-Type-SatelliteListItem-satelliteId
   *
   * Applies to resource types:
   * - Satellite
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSatelliteId(value: string | string[], operator?: Operator | string) {
    return this.if(`satelliteId`, value, operator || 'StringLike');
  }
}
