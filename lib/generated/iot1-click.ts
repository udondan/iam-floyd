import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [iot1click](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot1-click.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iot1click extends PolicyStatement {
  public servicePrefix = 'iot1click';

  /**
   * Statement provider for service [iot1click](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot1-click.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associate a device to a placement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_AssociateDeviceWithPlacement.html
   */
  public toAssociateDeviceWithPlacement() {
    return this.to('AssociateDeviceWithPlacement');
  }

  /**
   * Claim a batch of devices with a claim code.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/claims-claimcode.html
   */
  public toClaimDevicesByClaimCode() {
    return this.to('ClaimDevicesByClaimCode');
  }

  /**
   * Create a new placement in a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreatePlacement.html
   */
  public toCreatePlacement() {
    return this.to('CreatePlacement');
  }

  /**
   * Create a new project
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreateProject.html
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Delete a placement from a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeletePlacement.html
   */
  public toDeletePlacement() {
    return this.to('DeletePlacement');
  }

  /**
   * Delete a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Describe a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid.html
   */
  public toDescribeDevice() {
    return this.to('DescribeDevice');
  }

  /**
   * Describe a placement
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DescribePlacement.html
   */
  public toDescribePlacement() {
    return this.to('DescribePlacement');
  }

  /**
   * Describe a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DescribeProject.html
   */
  public toDescribeProject() {
    return this.to('DescribeProject');
  }

  /**
   * Disassociate a device from a placement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DissacociateDeviceFromPlacement.html
   */
  public toDisassociateDeviceFromPlacement() {
    return this.to('DisassociateDeviceFromPlacement');
  }

  /**
   * Finalize a device claim
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-finalize-claim.html
   */
  public toFinalizeDeviceClaim() {
    return this.to('FinalizeDeviceClaim');
  }

  /**
   * Get available methods of a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-methods.html
   */
  public toGetDeviceMethods() {
    return this.to('GetDeviceMethods');
  }

  /**
   * Get devices associated to a placement
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_GetDevicesInPlacement.html
   */
  public toGetDevicesInPlacement() {
    return this.to('GetDevicesInPlacement');
  }

  /**
   * Initialize a device claim
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-initiate-claim.html
   */
  public toInitiateDeviceClaim() {
    return this.to('InitiateDeviceClaim');
  }

  /**
   * Invoke a device method
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-methods.html
   */
  public toInvokeDeviceMethod() {
    return this.to('InvokeDeviceMethod');
  }

  /**
   * List past events published by a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-events.html
   */
  public toListDeviceEvents() {
    return this.to('ListDeviceEvents');
  }

  /**
   * List all devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices.html
   */
  public toListDevices() {
    return this.to('ListDevices');
  }

  /**
   * List placements in a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListPlacements.html
   */
  public toListPlacements() {
    return this.to('ListPlacements');
  }

  /**
   * List all projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListProjects.html
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Lists the tags (metadata) which you have assigned to the resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Unclaim a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-unclaim.html
   */
  public toUnclaimDevice() {
    return this.to('UnclaimDevice');
  }

  /**
   * Removes the given tags (metadata) from the resource.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Update device state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-state.html
   */
  public toUpdateDeviceState() {
    return this.to('UpdateDeviceState');
  }

  /**
   * Update a placement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UpdatePlacement.html
   */
  public toUpdatePlacement() {
    return this.to('UpdatePlacement');
  }

  /**
   * Update a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UpdateProject.html
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateDeviceWithPlacement",
      "CreatePlacement",
      "CreateProject",
      "DeletePlacement",
      "DeleteProject",
      "DisassociateDeviceFromPlacement",
      "InvokeDeviceMethod",
      "TagResource",
      "UntagResource",
      "UpdateDeviceState",
      "UpdatePlacement",
      "UpdateProject"
    ],
    "Read": [
      "ClaimDevicesByClaimCode",
      "DescribeDevice",
      "DescribePlacement",
      "DescribeProject",
      "FinalizeDeviceClaim",
      "GetDeviceMethods",
      "GetDevicesInPlacement",
      "InitiateDeviceClaim",
      "ListDeviceEvents",
      "ListPlacements",
      "UnclaimDevice"
    ],
    "List": [
      "ListDevices",
      "ListProjects",
      "ListTagsForResource"
    ]
  };

  /**
   * Adds a resource of type device to the statement
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/resources.html
   *
   * @param deviceId - Identifier for the deviceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevice(deviceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot1click:${Region}:${Account}:devices/${DeviceId}';
    arn = arn.replace('${DeviceId}', deviceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_Operations.html
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot1click:${Region}:${Account}:projects/${ProjectName}';
    arn = arn.replace('${ProjectName}', projectName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
