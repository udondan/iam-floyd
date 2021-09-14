import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [iotwireless](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotcoreforlorawan.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotwireless extends PolicyStatement {
  public servicePrefix = 'iotwireless';

  /**
   * Statement provider for service [iotwireless](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotcoreforlorawan.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to link partner accounts with Aws account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateAwsAccountWithPartnerAccount.html
   */
  public toAssociateAwsAccountWithPartnerAccount() {
    return this.to('AssociateAwsAccountWithPartnerAccount');
  }

  /**
   * Grants permission to associate the wireless device with AWS IoT thing for a given wirelessDeviceId
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iot:DescribeThing
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateWirelessDeviceWithThing.html
   */
  public toAssociateWirelessDeviceWithThing() {
    return this.to('AssociateWirelessDeviceWithThing');
  }

  /**
   * Grants permission to associate a WirelessGateway with the IoT Core Identity certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateWirelessGatewayWithCertificate.html
   */
  public toAssociateWirelessGatewayWithCertificate() {
    return this.to('AssociateWirelessGatewayWithCertificate');
  }

  /**
   * Grants permission to associate the wireless gateway with AWS IoT thing for a given wirelessGatewayId
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iot:DescribeThing
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateWirelessGatewayWithThing.html
   */
  public toAssociateWirelessGatewayWithThing() {
    return this.to('AssociateWirelessGatewayWithThing');
  }

  /**
   * Grants permission to create a Destination resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateDestination.html
   */
  public toCreateDestination() {
    return this.to('CreateDestination');
  }

  /**
   * Grants permission to create a DeviceProfile resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateDeviceProfile.html
   */
  public toCreateDeviceProfile() {
    return this.to('CreateDeviceProfile');
  }

  /**
   * Grants permission to create a ServiceProfile resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateServiceProfile.html
   */
  public toCreateServiceProfile() {
    return this.to('CreateServiceProfile');
  }

  /**
   * Grants permission to create a WirelessDevice resource with given Destination
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessDevice.html
   */
  public toCreateWirelessDevice() {
    return this.to('CreateWirelessDevice');
  }

  /**
   * Grants permission to create a WirelessGateway resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessGateway.html
   */
  public toCreateWirelessGateway() {
    return this.to('CreateWirelessGateway');
  }

  /**
   * Grants permission to create a task for a given WirelessGateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessGatewayTask.html
   */
  public toCreateWirelessGatewayTask() {
    return this.to('CreateWirelessGatewayTask');
  }

  /**
   * Grants permission to create a WirelessGateway task definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessGatewayTaskDefinition.html
   */
  public toCreateWirelessGatewayTaskDefinition() {
    return this.to('CreateWirelessGatewayTaskDefinition');
  }

  /**
   * Grants permission to delete a Destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteDestination.html
   */
  public toDeleteDestination() {
    return this.to('DeleteDestination');
  }

  /**
   * Grants permission to delete a DeviceProfile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteDeviceProfile.html
   */
  public toDeleteDeviceProfile() {
    return this.to('DeleteDeviceProfile');
  }

  /**
   * Grants permission to delete a ServiceProfile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteServiceProfile.html
   */
  public toDeleteServiceProfile() {
    return this.to('DeleteServiceProfile');
  }

  /**
   * Grants permission to delete a WirelessDevice
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteWirelessDevice.html
   */
  public toDeleteWirelessDevice() {
    return this.to('DeleteWirelessDevice');
  }

  /**
   * Grants permission to delete a WirelessGateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteWirelessGateway.html
   */
  public toDeleteWirelessGateway() {
    return this.to('DeleteWirelessGateway');
  }

  /**
   * Grants permission to delete task for a given WirelessGateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteWirelessGatewayTask.html
   */
  public toDeleteWirelessGatewayTask() {
    return this.to('DeleteWirelessGatewayTask');
  }

  /**
   * Grants permission to delete a WirelessGateway task definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteWirelessGatewayTaskDefinition.html
   */
  public toDeleteWirelessGatewayTaskDefinition() {
    return this.to('DeleteWirelessGatewayTaskDefinition');
  }

  /**
   * Grants permission to disassociate an AWS account from a partner account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateAwsAccountFromPartnerAccount.html
   */
  public toDisassociateAwsAccountFromPartnerAccount() {
    return this.to('DisassociateAwsAccountFromPartnerAccount');
  }

  /**
   * Grants permission to disassociate a wireless device from a AWS IoT thing
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iot:DescribeThing
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateWirelessDeviceFromThing.html
   */
  public toDisassociateWirelessDeviceFromThing() {
    return this.to('DisassociateWirelessDeviceFromThing');
  }

  /**
   * Grants permission to disassociate a WirelessGateway from a IoT Core Identity certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateWirelessGatewayFromCertificate.html
   */
  public toDisassociateWirelessGatewayFromCertificate() {
    return this.to('DisassociateWirelessGatewayFromCertificate');
  }

  /**
   * Grants permission to disassociate a WirelessGateway from a IoT Core thing
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iot:DescribeThing
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateWirelessGatewayFromThing.html
   */
  public toDisassociateWirelessGatewayFromThing() {
    return this.to('DisassociateWirelessGatewayFromThing');
  }

  /**
   * Grants permission to get the Destination
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetDestination.html
   */
  public toGetDestination() {
    return this.to('GetDestination');
  }

  /**
   * Grants permission to get the DeviceProfile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetDeviceProfile.html
   */
  public toGetDeviceProfile() {
    return this.to('GetDeviceProfile');
  }

  /**
   * Grants permission to get log levels by resource types
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetLogLevelsByResourceTypes.html
   */
  public toGetLogLevelsByResourceTypes() {
    return this.to('GetLogLevelsByResourceTypes');
  }

  /**
   * Grants permission to get the associated PartnerAccount
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetPartnerAccount.html
   */
  public toGetPartnerAccount() {
    return this.to('GetPartnerAccount');
  }

  /**
   * Grants permission to get resource log level
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourceLogLevel.html
   */
  public toGetResourceLogLevel() {
    return this.to('GetResourceLogLevel');
  }

  /**
   * Grants permission to retrieve the customer account specific endpoint for CUPS protocol connection or LoRaWAN Network Server (LNS) protocol connection, and optionally server trust certificate in PEM format
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetServiceEndpoint.html
   */
  public toGetServiceEndpoint() {
    return this.to('GetServiceEndpoint');
  }

  /**
   * Grants permission to get the ServiceProfile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetServiceProfile.html
   */
  public toGetServiceProfile() {
    return this.to('GetServiceProfile');
  }

  /**
   * Grants permission to get the WirelessDevice
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessDevice.html
   */
  public toGetWirelessDevice() {
    return this.to('GetWirelessDevice');
  }

  /**
   * Grants permission to get statistics info for a given WirelessDevice
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessDeviceStatistics.html
   */
  public toGetWirelessDeviceStatistics() {
    return this.to('GetWirelessDeviceStatistics');
  }

  /**
   * Grants permission to get the WirelessGateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGateway.html
   */
  public toGetWirelessGateway() {
    return this.to('GetWirelessGateway');
  }

  /**
   * Grants permission to get the IoT Core Identity certificate id associated with the WirelessGateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayCertificate.html
   */
  public toGetWirelessGatewayCertificate() {
    return this.to('GetWirelessGatewayCertificate');
  }

  /**
   * Grants permission to get Current firmware version and other information for the WirelessGateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayFirmwareInformation.html
   */
  public toGetWirelessGatewayFirmwareInformation() {
    return this.to('GetWirelessGatewayFirmwareInformation');
  }

  /**
   * Grants permission to get statistics info for a given WirelessGateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayStatistics.html
   */
  public toGetWirelessGatewayStatistics() {
    return this.to('GetWirelessGatewayStatistics');
  }

  /**
   * Grants permission to get the task for a given WirelessGateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayTask.html
   */
  public toGetWirelessGatewayTask() {
    return this.to('GetWirelessGatewayTask');
  }

  /**
   * Grants permission to get the given WirelessGateway task definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayTaskDefinition.html
   */
  public toGetWirelessGatewayTaskDefinition() {
    return this.to('GetWirelessGatewayTaskDefinition');
  }

  /**
   * List information of available Destinations based on the AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListDestinations.html
   */
  public toListDestinations() {
    return this.to('ListDestinations');
  }

  /**
   * Grants permission to list information of available DeviceProfiles based on the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListDeviceProfiles.html
   */
  public toListDeviceProfiles() {
    return this.to('ListDeviceProfiles');
  }

  /**
   * Grants permission to list the available partner accounts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListPartnerAccounts.html
   */
  public toListPartnerAccounts() {
    return this.to('ListPartnerAccounts');
  }

  /**
   * Grants permission to list information of available ServiceProfiles based on the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListServiceProfiles.html
   */
  public toListServiceProfiles() {
    return this.to('ListServiceProfiles');
  }

  /**
   * Grants permission to list all tags for a given resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list information of available WirelessDevices based on the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListWirelessDevices.html
   */
  public toListWirelessDevices() {
    return this.to('ListWirelessDevices');
  }

  /**
   * Grants permission to list information of available WirelessGateway task definitions based on the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListWirelessGatewayTaskDefinitions.html
   */
  public toListWirelessGatewayTaskDefinitions() {
    return this.to('ListWirelessGatewayTaskDefinitions');
  }

  /**
   * Grants permission to list information of available WirelessGateways based on the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListWirelessGateways.html
   */
  public toListWirelessGateways() {
    return this.to('ListWirelessGateways');
  }

  /**
   * Grants permission to put resource log level
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_PutResourceLogLevel.html
   */
  public toPutResourceLogLevel() {
    return this.to('PutResourceLogLevel');
  }

  /**
   * Grants permission to reset all resource log levels
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ResetAllResourceLogLevels.html
   */
  public toResetAllResourceLogLevels() {
    return this.to('ResetAllResourceLogLevels');
  }

  /**
   * Grants permission to reset resource log level
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ResetResourceLogLevel.html
   */
  public toResetResourceLogLevel() {
    return this.to('ResetResourceLogLevel');
  }

  /**
   * Grants permission to send the decrypted application data frame to the target device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_SendDataToWirelessDevice.html
   */
  public toSendDataToWirelessDevice() {
    return this.to('SendDataToWirelessDevice');
  }

  /**
   * Grants permission to tag a given resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to simulate a provisioned device to send an uplink data with payload of 'Hello'
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_TestWirelessDevice.html
   */
  public toTestWirelessDevice() {
    return this.to('TestWirelessDevice');
  }

  /**
   * Grants permission to remove the given tags from the resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a Destination resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateDestination.html
   */
  public toUpdateDestination() {
    return this.to('UpdateDestination');
  }

  /**
   * Grants permission to update log levels by resource types
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateLogLevelsByResourceTypes.html
   */
  public toUpdateLogLevelsByResourceTypes() {
    return this.to('UpdateLogLevelsByResourceTypes');
  }

  /**
   * Grants permission to update a partner account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdatePartnerAccount.html
   */
  public toUpdatePartnerAccount() {
    return this.to('UpdatePartnerAccount');
  }

  /**
   * Grants permission to update a WirelessDevice resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateWirelessDevice.html
   */
  public toUpdateWirelessDevice() {
    return this.to('UpdateWirelessDevice');
  }

  /**
   * Grants permission to update a WirelessGateway resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateWirelessGateway.html
   */
  public toUpdateWirelessGateway() {
    return this.to('UpdateWirelessGateway');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateAwsAccountWithPartnerAccount",
      "AssociateWirelessDeviceWithThing",
      "AssociateWirelessGatewayWithCertificate",
      "AssociateWirelessGatewayWithThing",
      "CreateDestination",
      "CreateDeviceProfile",
      "CreateServiceProfile",
      "CreateWirelessDevice",
      "CreateWirelessGateway",
      "CreateWirelessGatewayTask",
      "CreateWirelessGatewayTaskDefinition",
      "DeleteDestination",
      "DeleteDeviceProfile",
      "DeleteServiceProfile",
      "DeleteWirelessDevice",
      "DeleteWirelessGateway",
      "DeleteWirelessGatewayTask",
      "DeleteWirelessGatewayTaskDefinition",
      "DisassociateAwsAccountFromPartnerAccount",
      "DisassociateWirelessDeviceFromThing",
      "DisassociateWirelessGatewayFromCertificate",
      "DisassociateWirelessGatewayFromThing",
      "PutResourceLogLevel",
      "ResetAllResourceLogLevels",
      "ResetResourceLogLevel",
      "SendDataToWirelessDevice",
      "TestWirelessDevice",
      "UpdateDestination",
      "UpdateLogLevelsByResourceTypes",
      "UpdatePartnerAccount",
      "UpdateWirelessDevice",
      "UpdateWirelessGateway"
    ],
    "Read": [
      "GetDestination",
      "GetDeviceProfile",
      "GetLogLevelsByResourceTypes",
      "GetPartnerAccount",
      "GetResourceLogLevel",
      "GetServiceEndpoint",
      "GetServiceProfile",
      "GetWirelessDevice",
      "GetWirelessDeviceStatistics",
      "GetWirelessGateway",
      "GetWirelessGatewayCertificate",
      "GetWirelessGatewayFirmwareInformation",
      "GetWirelessGatewayStatistics",
      "GetWirelessGatewayTask",
      "GetWirelessGatewayTaskDefinition",
      "ListDestinations",
      "ListDeviceProfiles",
      "ListPartnerAccounts",
      "ListServiceProfiles",
      "ListTagsForResource",
      "ListWirelessDevices",
      "ListWirelessGatewayTaskDefinitions",
      "ListWirelessGateways"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type WirelessDevice to the statement
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessDevice.html
   *
   * @param wirelessDeviceId - Identifier for the wirelessDeviceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWirelessDevice(wirelessDeviceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotwireless:${Region}:${Account}:WirelessDevice/${WirelessDeviceId}';
    arn = arn.replace('${WirelessDeviceId}', wirelessDeviceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type WirelessGateway to the statement
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessGateway.html
   *
   * @param wirelessGatewayId - Identifier for the wirelessGatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWirelessGateway(wirelessGatewayId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotwireless:${Region}:${Account}:WirelessGateway/${WirelessGatewayId}';
    arn = arn.replace('${WirelessGatewayId}', wirelessGatewayId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type DeviceProfile to the statement
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateDeviceProfile.html
   *
   * @param deviceProfileId - Identifier for the deviceProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeviceProfile(deviceProfileId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotwireless:${Region}:${Account}:DeviceProfile/${DeviceProfileId}';
    arn = arn.replace('${DeviceProfileId}', deviceProfileId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ServiceProfile to the statement
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateServiceProfile.html
   *
   * @param serviceProfileId - Identifier for the serviceProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServiceProfile(serviceProfileId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotwireless:${Region}:${Account}:ServiceProfile/${ServiceProfileId}';
    arn = arn.replace('${ServiceProfileId}', serviceProfileId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Destination to the statement
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateDestination.html
   *
   * @param destinationName - Identifier for the destinationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDestination(destinationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotwireless:${Region}:${Account}:Destination/${DestinationName}';
    arn = arn.replace('${DestinationName}', destinationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type SidewalkAccount to the statement
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateAwsAccountWithPartnerAccount.html
   *
   * @param sidewalkAccountId - Identifier for the sidewalkAccountId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSidewalkAccount(sidewalkAccountId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotwireless:${Region}:${Account}:SidewalkAccount/${SidewalkAccountId}';
    arn = arn.replace('${SidewalkAccountId}', sidewalkAccountId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type WirelessGatewayTaskDefinition to the statement
   *
   * https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessGatewayTaskDefinition.html
   *
   * @param wirelessGatewayTaskDefinitionId - Identifier for the wirelessGatewayTaskDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWirelessGatewayTaskDefinition(wirelessGatewayTaskDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotwireless:${Region}:${Account}:WirelessGatewayTaskDefinition/${WirelessGatewayTaskDefinitionId}';
    arn = arn.replace('${WirelessGatewayTaskDefinitionId}', wirelessGatewayTaskDefinitionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type thing to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html
   *
   * @param thingName - Identifier for the thingName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onThing(thingName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:thing/${ThingName}';
    arn = arn.replace('${ThingName}', thingName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cert to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html
   *
   * @param certificate - Identifier for the certificate.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCert(certificate: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:cert/${Certificate}';
    arn = arn.replace('${Certificate}', certificate);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
