import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [groundstation](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsgroundstation.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Groundstation extends PolicyStatement {
  public servicePrefix = 'groundstation';

  /**
   * Statement provider for service [groundstation](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsgroundstation.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
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
    this.to('groundstation:CancelContact');
    return this;
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
    this.to('groundstation:CreateConfig');
    return this;
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
    this.to('groundstation:CreateDataflowEndpointGroup');
    return this;
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
    this.to('groundstation:CreateMissionProfile');
    return this;
  }

  /**
   * Grants permission to delete a config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteConfig.html
   */
  public toDeleteConfig() {
    this.to('groundstation:DeleteConfig');
    return this;
  }

  /**
   * Grants permission to delete a data flow endpoint group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteDataflowEndpointGroup.html
   */
  public toDeleteDataflowEndpointGroup() {
    this.to('groundstation:DeleteDataflowEndpointGroup');
    return this;
  }

  /**
   * Grants permission to delete a mission profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteMissionProfile.html
   */
  public toDeleteMissionProfile() {
    this.to('groundstation:DeleteMissionProfile');
    return this;
  }

  /**
   * Grants permission to describe a contact
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DescribeContact.html
   */
  public toDescribeContact() {
    this.to('groundstation:DescribeContact');
    return this;
  }

  /**
   * Grants permission to return a configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetConfig.html
   */
  public toGetConfig() {
    this.to('groundstation:GetConfig');
    return this;
  }

  /**
   * Grants permission to return a data flow endpoint group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetDataflowEndpointGroup.html
   */
  public toGetDataflowEndpointGroup() {
    this.to('groundstation:GetDataflowEndpointGroup');
    return this;
  }

  /**
   * Grants permission to return minutes usage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetMinuteUsage.html
   */
  public toGetMinuteUsage() {
    this.to('groundstation:GetMinuteUsage');
    return this;
  }

  /**
   * Grants permission to retrieve a mission profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetMissionProfile.html
   */
  public toGetMissionProfile() {
    this.to('groundstation:GetMissionProfile');
    return this;
  }

  /**
   * Grants permission to return information about a satellite
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetSatellite.html
   */
  public toGetSatellite() {
    this.to('groundstation:GetSatellite');
    return this;
  }

  /**
   * Grants permisson to return a list of past configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListConfigs.html
   */
  public toListConfigs() {
    this.to('groundstation:ListConfigs');
    return this;
  }

  /**
   * Grants permission to return a list of contacts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListContacts.html
   */
  public toListContacts() {
    this.to('groundstation:ListContacts');
    return this;
  }

  /**
   * Grants permission to list data flow endpoint groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListDataflowEndpointGroups.html
   */
  public toListDataflowEndpointGroups() {
    this.to('groundstation:ListDataflowEndpointGroups');
    return this;
  }

  /**
   * Grants permission to list ground stations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListGroundStations.html
   */
  public toListGroundStations() {
    this.to('groundstation:ListGroundStations');
    return this;
  }

  /**
   * Grants permission to return a list of mission profiles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListMissionProfiles.html
   */
  public toListMissionProfiles() {
    this.to('groundstation:ListMissionProfiles');
    return this;
  }

  /**
   * Grants permission to list satellites
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListSatellites.html
   */
  public toListSatellites() {
    this.to('groundstation:ListSatellites');
    return this;
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('groundstation:ListTagsForResource');
    return this;
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
    this.to('groundstation:ReserveContact');
    return this;
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
    this.to('groundstation:TagResource');
    return this;
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
    this.to('groundstation:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UpdateConfig.html
   */
  public toUpdateConfig() {
    this.to('groundstation:UpdateConfig');
    return this;
  }

  /**
   * Grants permission to update a mission profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UpdateMissionProfile.html
   */
  public toUpdateMissionProfile() {
    this.to('groundstation:UpdateMissionProfile');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelContact",
      "CreateConfig",
      "CreateDataflowEndpointGroup",
      "CreateMissionProfile",
      "DeleteConfig",
      "DeleteDataflowEndpointGroup",
      "DeleteMissionProfile",
      "ReserveContact",
      "UpdateConfig",
      "UpdateMissionProfile"
    ],
    "Read": [
      "DescribeContact",
      "GetConfig",
      "GetDataflowEndpointGroup",
      "GetMinuteUsage",
      "GetMissionProfile",
      "GetSatellite",
      "ListTagsForResource"
    ],
    "List": [
      "ListConfigs",
      "ListContacts",
      "ListDataflowEndpointGroups",
      "ListGroundStations",
      "ListMissionProfiles",
      "ListSatellites"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
    var arn = 'arn:${Partition}:groundstation:${Region}:${Account}:config/${ConfigType}/${ConfigId}';
    arn = arn.replace('${ConfigType}', configType);
    arn = arn.replace('${ConfigId}', configId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:groundstation:${Region}:${Account}:contact/${ContactId}';
    arn = arn.replace('${ContactId}', contactId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:groundstation:${Region}:${Account}:dataflow-endpoint-group/${DataflowEndpointGroupId}';
    arn = arn.replace('${DataflowEndpointGroupId}', dataflowEndpointGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:groundstation:${Region}:${Account}:groundstation:${GroundStationId}';
    arn = arn.replace('${GroundStationId}', groundStationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:groundstation:${Region}:${Account}:mission-profile/${MissionProfileId}';
    arn = arn.replace('${MissionProfileId}', missionProfileId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:groundstation:${Region}:${Account}:satellite/${SatelliteId}';
    arn = arn.replace('${SatelliteId}', satelliteId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the ID of a config
   *
   * Applies to resource types:
   * - Config
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifConfigId(value: string | string[], operator?: string) {
    return this.if(`groundstation:configId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the type of a config
   *
   * Applies to resource types:
   * - Config
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifConfigType(value: string | string[], operator?: string) {
    return this.if(`groundstation:configType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a contact
   *
   * Applies to resource types:
   * - Contact
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifContactId(value: string | string[], operator?: string) {
    return this.if(`groundstation:contactId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a dataflow endpoint group
   *
   * Applies to resource types:
   * - DataflowEndpointGroup
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDataflowEndpointGroupId(value: string | string[], operator?: string) {
    return this.if(`groundstation:dataflowEndpointGroupId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a ground station
   *
   * Applies to resource types:
   * - GroundStationResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGroundStationId(value: string | string[], operator?: string) {
    return this.if(`groundstation:groundStationId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a mission profile
   *
   * Applies to resource types:
   * - MissionProfile
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMissionProfileId(value: string | string[], operator?: string) {
    return this.if(`groundstation:missionProfileId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a satellite
   *
   * Applies to resource types:
   * - Satellite
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSatelliteId(value: string | string[], operator?: string) {
    return this.if(`groundstation:satelliteId`, value, operator || 'StringLike');
  }
}
