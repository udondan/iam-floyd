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
    this.to('iot1click:AssociateDeviceWithPlacement');
    return this;
  }

  /**
   * Claim a batch of devices with a claim code.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/claims-claimcode.html
   */
  public toClaimDevicesByClaimCode() {
    this.to('iot1click:ClaimDevicesByClaimCode');
    return this;
  }

  /**
   * Create a new placement in a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreatePlacement.html
   */
  public toCreatePlacement() {
    this.to('iot1click:CreatePlacement');
    return this;
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
    this.to('iot1click:CreateProject');
    return this;
  }

  /**
   * Delete a placement from a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeletePlacement.html
   */
  public toDeletePlacement() {
    this.to('iot1click:DeletePlacement');
    return this;
  }

  /**
   * Delete a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeleteProject.html
   */
  public toDeleteProject() {
    this.to('iot1click:DeleteProject');
    return this;
  }

  /**
   * Describe a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid.html
   */
  public toDescribeDevice() {
    this.to('iot1click:DescribeDevice');
    return this;
  }

  /**
   * Describe a placement
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DescribePlacement.html
   */
  public toDescribePlacement() {
    this.to('iot1click:DescribePlacement');
    return this;
  }

  /**
   * Describe a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DescribeProject.html
   */
  public toDescribeProject() {
    this.to('iot1click:DescribeProject');
    return this;
  }

  /**
   * Disassociate a device from a placement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DissacociateDeviceFromPlacement.html
   */
  public toDisassociateDeviceFromPlacement() {
    this.to('iot1click:DisassociateDeviceFromPlacement');
    return this;
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
    this.to('iot1click:FinalizeDeviceClaim');
    return this;
  }

  /**
   * Get available methods of a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-methods.html
   */
  public toGetDeviceMethods() {
    this.to('iot1click:GetDeviceMethods');
    return this;
  }

  /**
   * Get devices associated to a placement
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_GetDevicesInPlacement.html
   */
  public toGetDevicesInPlacement() {
    this.to('iot1click:GetDevicesInPlacement');
    return this;
  }

  /**
   * Initialize a device claim
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-initiate-claim.html
   */
  public toInitiateDeviceClaim() {
    this.to('iot1click:InitiateDeviceClaim');
    return this;
  }

  /**
   * Invoke a device method
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-methods.html
   */
  public toInvokeDeviceMethod() {
    this.to('iot1click:InvokeDeviceMethod');
    return this;
  }

  /**
   * List past events published by a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-events.html
   */
  public toListDeviceEvents() {
    this.to('iot1click:ListDeviceEvents');
    return this;
  }

  /**
   * List all devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices.html
   */
  public toListDevices() {
    this.to('iot1click:ListDevices');
    return this;
  }

  /**
   * List placements in a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListPlacements.html
   */
  public toListPlacements() {
    this.to('iot1click:ListPlacements');
    return this;
  }

  /**
   * List all projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListProjects.html
   */
  public toListProjects() {
    this.to('iot1click:ListProjects');
    return this;
  }

  /**
   * Lists the tags (metadata) which you have assigned to the resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('iot1click:ListTagsForResource');
    return this;
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
    this.to('iot1click:TagResource');
    return this;
  }

  /**
   * Unclaim a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-unclaim.html
   */
  public toUnclaimDevice() {
    this.to('iot1click:UnclaimDevice');
    return this;
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
    this.to('iot1click:UntagResource');
    return this;
  }

  /**
   * Update device state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-state.html
   */
  public toUpdateDeviceState() {
    this.to('iot1click:UpdateDeviceState');
    return this;
  }

  /**
   * Update a placement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UpdatePlacement.html
   */
  public toUpdatePlacement() {
    this.to('iot1click:UpdatePlacement');
    return this;
  }

  /**
   * Update a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UpdateProject.html
   */
  public toUpdateProject() {
    this.to('iot1click:UpdateProject');
    return this;
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
