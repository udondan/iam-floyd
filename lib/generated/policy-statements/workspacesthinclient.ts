import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [thinclient](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacesthinclient.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Thinclient extends PolicyStatement {
  public servicePrefix = 'thinclient';

  /**
   * Statement provider for service [thinclient](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacesthinclient.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create environments
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - appstream:DescribeStacks
   * - workspaces-web:GetPortal
   * - workspaces-web:GetUserSettings
   * - workspaces:DescribeWorkspaceDirectories
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_CreateEnvironment.html
   */
  public toCreateEnvironment() {
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permission to delete devices
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_DeleteDevice.html
   */
  public toDeleteDevice() {
    return this.to('DeleteDevice');
  }

  /**
   * Grants permission to delete environments
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_DeleteEnvironment.html
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permission to deregister devices
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_DeregisterDevice.html
   */
  public toDeregisterDevice() {
    return this.to('DeregisterDevice');
  }

  /**
   * Grants permission to get devices
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_GetDevice.html
   */
  public toGetDevice() {
    return this.to('GetDevice');
  }

  /**
   * Grants permission to get details of devices
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public toGetDeviceDetails() {
    return this.to('GetDeviceDetails');
  }

  /**
   * Grants permission to get details of environments
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_GetEnvironment.html
   */
  public toGetEnvironment() {
    return this.to('GetEnvironment');
  }

  /**
   * Grants permission to get details of software sets
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_GetSoftwareSet.html
   */
  public toGetSoftwareSet() {
    return this.to('GetSoftwareSet');
  }

  /**
   * Grants permission to list device sessions
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public toListDeviceSessions() {
    return this.to('ListDeviceSessions');
  }

  /**
   * Grants permission to list devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_ListDevices.html
   */
  public toListDevices() {
    return this.to('ListDevices');
  }

  /**
   * Grants permission to list environments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_ListEnvironments.html
   */
  public toListEnvironments() {
    return this.to('ListEnvironments');
  }

  /**
   * Grants permission to list software sets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_ListSoftwareSets.html
   */
  public toListSoftwareSets() {
    return this.to('ListSoftwareSets');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add one or more tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update devices
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_UpdateDevice.html
   */
  public toUpdateDevice() {
    return this.to('UpdateDevice');
  }

  /**
   * Grants permission to update environments
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - appstream:DescribeStacks
   * - workspaces-web:GetPortal
   * - workspaces-web:GetUserSettings
   * - workspaces:DescribeWorkspaceDirectories
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_UpdateEnvironment.html
   */
  public toUpdateEnvironment() {
    return this.to('UpdateEnvironment');
  }

  /**
   * Grants permission to update software set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_UpdateSoftwareSet.html
   */
  public toUpdateSoftwareSet() {
    return this.to('UpdateSoftwareSet');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateEnvironment',
      'DeleteDevice',
      'DeleteEnvironment',
      'DeregisterDevice',
      'UpdateDevice',
      'UpdateEnvironment',
      'UpdateSoftwareSet'
    ],
    Read: [
      'GetDevice',
      'GetDeviceDetails',
      'GetEnvironment',
      'GetSoftwareSet'
    ],
    List: [
      'ListDeviceSessions',
      'ListDevices',
      'ListEnvironments',
      'ListSoftwareSets',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_Environment.html
   *
   * @param environmentId - Identifier for the environmentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironment(environmentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:thinclient:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:environment/${ environmentId }`);
  }

  /**
   * Adds a resource of type device to the statement
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_Device.html
   *
   * @param deviceId - Identifier for the deviceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevice(deviceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:thinclient:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:device/${ deviceId }`);
  }

  /**
   * Adds a resource of type softwareset to the statement
   *
   * https://docs.aws.amazon.com/workspaces-thin-client/latest/api/API_SoftwareSet.html
   *
   * @param softwareSetId - Identifier for the softwareSetId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSoftwareset(softwareSetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:thinclient:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:softwareset/${ softwareSetId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateEnvironment()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toDeleteDevice()
   * - .toDeleteEnvironment()
   * - .toDeregisterDevice()
   * - .toGetDevice()
   * - .toGetDeviceDetails()
   * - .toGetEnvironment()
   * - .toGetSoftwareSet()
   * - .toListDeviceSessions()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateDevice()
   * - .toUpdateEnvironment()
   * - .toUpdateSoftwareSet()
   *
   * Applies to resource types:
   * - environment
   * - device
   * - softwareset
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateEnvironment()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
