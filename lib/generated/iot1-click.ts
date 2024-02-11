import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a device to a placement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_AssociateDeviceWithPlacement.html
   */
  public toAssociateDeviceWithPlacement() {
    return this.to('AssociateDeviceWithPlacement');
  }

  /**
   * Grants permission to claim a batch of devices with a claim code
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/claims-claimcode.html
   */
  public toClaimDevicesByClaimCode() {
    return this.to('ClaimDevicesByClaimCode');
  }

  /**
   * Grants permission to create a new placement in a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreatePlacement.html
   */
  public toCreatePlacement() {
    return this.to('CreatePlacement');
  }

  /**
   * Grants permission to create a new project
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
   * Grants permission to delete a placement from a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeletePlacement.html
   */
  public toDeletePlacement() {
    return this.to('DeletePlacement');
  }

  /**
   * Grants permission to delete a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to describe a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid.html
   */
  public toDescribeDevice() {
    return this.to('DescribeDevice');
  }

  /**
   * Grants permission to describe a placement
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DescribePlacement.html
   */
  public toDescribePlacement() {
    return this.to('DescribePlacement');
  }

  /**
   * Grants permission to describe a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DescribeProject.html
   */
  public toDescribeProject() {
    return this.to('DescribeProject');
  }

  /**
   * Grants permission to disassociate a device from a placement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DisassociateDeviceFromPlacement.html
   */
  public toDisassociateDeviceFromPlacement() {
    return this.to('DisassociateDeviceFromPlacement');
  }

  /**
   * Grants permission to finalize a device claim
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
   * Grants permission to get available methods of a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-methods.html
   */
  public toGetDeviceMethods() {
    return this.to('GetDeviceMethods');
  }

  /**
   * Grants permission to get devices associated to a placement
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_GetDevicesInPlacement.html
   */
  public toGetDevicesInPlacement() {
    return this.to('GetDevicesInPlacement');
  }

  /**
   * Grants permission to initialize a device claim
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-initiate-claim.html
   */
  public toInitiateDeviceClaim() {
    return this.to('InitiateDeviceClaim');
  }

  /**
   * Grants permission to invoke a device method
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-methods.html
   */
  public toInvokeDeviceMethod() {
    return this.to('InvokeDeviceMethod');
  }

  /**
   * Grants permission to list past events published by a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-events.html
   */
  public toListDeviceEvents() {
    return this.to('ListDeviceEvents');
  }

  /**
   * Grants permission to list all devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices.html
   */
  public toListDevices() {
    return this.to('ListDevices');
  }

  /**
   * Grants permission to list placements in a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListPlacements.html
   */
  public toListPlacements() {
    return this.to('ListPlacements');
  }

  /**
   * Grants permission to list all projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListProjects.html
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grants permission to lists the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add or modify the tags of a resource
   *
   * Access Level: Tagging
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
   * Grants permission to unclaim a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-unclaim.html
   */
  public toUnclaimDevice() {
    return this.to('UnclaimDevice');
  }

  /**
   * Grants permission to remove the given tags (metadata) from a resource
   *
   * Access Level: Tagging
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
   * Grants permission to update device state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-state.html
   */
  public toUpdateDeviceState() {
    return this.to('UpdateDeviceState');
  }

  /**
   * Grants permission to update a placement
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
    Write: [
      'AssociateDeviceWithPlacement',
      'CreatePlacement',
      'CreateProject',
      'DeletePlacement',
      'DeleteProject',
      'DisassociateDeviceFromPlacement',
      'InvokeDeviceMethod',
      'UpdateDeviceState',
      'UpdatePlacement',
      'UpdateProject'
    ],
    Read: [
      'ClaimDevicesByClaimCode',
      'DescribeDevice',
      'DescribePlacement',
      'DescribeProject',
      'FinalizeDeviceClaim',
      'GetDeviceMethods',
      'GetDevicesInPlacement',
      'InitiateDeviceClaim',
      'ListDeviceEvents',
      'ListPlacements',
      'ListTagsForResource',
      'UnclaimDevice'
    ],
    List: [
      'ListDevices',
      'ListProjects'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevice(deviceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iot1click.defaultPartition }:iot1click:${ region || '*' }:${ account || '*' }:devices/${ deviceId }`);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_Operations.html
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iot1click.defaultPartition }:iot1click:${ region || '*' }:${ account || '*' }:projects/${ projectName }`);
  }

  /**
   * Filters actions based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toFinalizeDeviceClaim()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - device
   * - project
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateProject()
   * - .toFinalizeDeviceClaim()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
