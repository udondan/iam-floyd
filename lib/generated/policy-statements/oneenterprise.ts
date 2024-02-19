import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [one](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazononeenterprise.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class One extends PolicyStatement {
  public servicePrefix = 'one';

  /**
   * Statement provider for service [one](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazononeenterprise.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a QR code for a Device Instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/configure-instance.html
   */
  public toCreateDeviceActivationQrCode() {
    return this.to('CreateDeviceActivationQrCode');
  }

  /**
   * Grants permission to create a Device Configuration Template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-config-template.html
   */
  public toCreateDeviceConfigurationTemplate() {
    return this.to('CreateDeviceConfigurationTemplate');
  }

  /**
   * Grants permission to create a Device Instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   */
  public toCreateDeviceInstance() {
    return this.to('CreateDeviceInstance');
  }

  /**
   * Grants permission to create a Device Instance Configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/configure-instance.html
   */
  public toCreateDeviceInstanceConfiguration() {
    return this.to('CreateDeviceInstanceConfiguration');
  }

  /**
   * Grants permission to create a Site
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   */
  public toCreateSite() {
    return this.to('CreateSite');
  }

  /**
   * Grants permission to disassociate Device from a Device Instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   */
  public toDeleteAssociatedDevice() {
    return this.to('DeleteAssociatedDevice');
  }

  /**
   * Grants permission to delete a Device Configuration Template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-config-template.html
   */
  public toDeleteDeviceConfigurationTemplate() {
    return this.to('DeleteDeviceConfigurationTemplate');
  }

  /**
   * Grants permission to delete a Device Instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   */
  public toDeleteDeviceInstance() {
    return this.to('DeleteDeviceInstance');
  }

  /**
   * Grants permission to delete a Site
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   */
  public toDeleteSite() {
    return this.to('DeleteSite');
  }

  /**
   * Grants permission to delete a User
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/enrollment-entry.htmll
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to view a Device Configuration Template
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-config-template.html
   */
  public toGetDeviceConfigurationTemplate() {
    return this.to('GetDeviceConfigurationTemplate');
  }

  /**
   * Grants permission to view a Device Instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   */
  public toGetDeviceInstance() {
    return this.to('GetDeviceInstance');
  }

  /**
   * Grants permission to view a Device Instance Configuration
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/configure-instance.html
   */
  public toGetDeviceInstanceConfiguration() {
    return this.to('GetDeviceInstanceConfiguration');
  }

  /**
   * Grants permission to view a Site
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   */
  public toGetSite() {
    return this.to('GetSite');
  }

  /**
   * Grants permission to view address of a Site
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   */
  public toGetSiteAddress() {
    return this.to('GetSiteAddress');
  }

  /**
   * Grants permission to retrieve list of Device Configuration Templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-config-template.html
   */
  public toListDeviceConfigurationTemplates() {
    return this.to('ListDeviceConfigurationTemplates');
  }

  /**
   * Grants permission to retrieve list of Device Instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   */
  public toListDeviceInstances() {
    return this.to('ListDeviceInstances');
  }

  /**
   * Grants permission to view list of Sites
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   */
  public toListSites() {
    return this.to('ListSites');
  }

  /**
   * Grants permission to list tags for an Amazon One Enterprise resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/actions-resources-contextkeys.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to view list of Users
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/enrollment-entry.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to reboot Device associated with a Device Instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   */
  public toRebootDevice() {
    return this.to('RebootDevice');
  }

  /**
   * Grants permission to add tags to an Amazon One Enterprise resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/actions-resources-contextkeys.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from an Amazon One Enterprise resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/actions-resources-contextkeys.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a Device Configuration Template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-config-template.html
   */
  public toUpdateDeviceConfigurationTemplate() {
    return this.to('UpdateDeviceConfigurationTemplate');
  }

  /**
   * Grants permission to update a Device Instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   */
  public toUpdateDeviceInstance() {
    return this.to('UpdateDeviceInstance');
  }

  /**
   * Grants permission to update a Site
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   */
  public toUpdateSite() {
    return this.to('UpdateSite');
  }

  /**
   * Grants permission to update address of a Site
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   */
  public toUpdateSiteAddress() {
    return this.to('UpdateSiteAddress');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateDeviceActivationQrCode',
      'CreateDeviceConfigurationTemplate',
      'CreateDeviceInstance',
      'CreateDeviceInstanceConfiguration',
      'CreateSite',
      'DeleteAssociatedDevice',
      'DeleteDeviceConfigurationTemplate',
      'DeleteDeviceInstance',
      'DeleteSite',
      'DeleteUser',
      'RebootDevice',
      'UpdateDeviceConfigurationTemplate',
      'UpdateDeviceInstance',
      'UpdateSite',
      'UpdateSiteAddress'
    ],
    Read: [
      'GetDeviceConfigurationTemplate',
      'GetDeviceInstance',
      'GetDeviceInstanceConfiguration',
      'GetSite',
      'GetSiteAddress',
      'ListTagsForResource'
    ],
    List: [
      'ListDeviceConfigurationTemplates',
      'ListDeviceInstances',
      'ListSites',
      'ListUsers'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type device-instance to the statement
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-device-instance.html
   *
   * @param deviceInstanceId - Identifier for the deviceInstanceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeviceInstance(deviceInstanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:one:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:device-instance/${ deviceInstanceId }`);
  }

  /**
   * Adds a resource of type configuration to the statement
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/configure-instance.html
   *
   * @param deviceInstanceId - Identifier for the deviceInstanceId.
   * @param version - Identifier for the version.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConfiguration(deviceInstanceId: string, version: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:one:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:device-instance/${ deviceInstanceId }/configuration/${ version }`);
  }

  /**
   * Adds a resource of type device-configuration-template to the statement
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-config-template.html
   *
   * @param templateId - Identifier for the templateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeviceConfigurationTemplate(templateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:one:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:device-configuration-template/${ templateId }`);
  }

  /**
   * Adds a resource of type site to the statement
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/create-sites.html
   *
   * @param siteId - Identifier for the siteId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSite(siteId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:one:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:site/${ siteId }`);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/one-enterprise/latest/userguide/enrollment-entry.html
   *
   * @param userId - Identifier for the userId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onUser(userId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:one:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:user/${ userId }`);
  }

  /**
   * Filters access by using tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateDeviceConfigurationTemplate()
   * - .toCreateDeviceInstance()
   * - .toCreateSite()
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
   * Filters access by using tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateDeviceActivationQrCode()
   * - .toCreateDeviceInstanceConfiguration()
   * - .toDeleteAssociatedDevice()
   * - .toDeleteDeviceConfigurationTemplate()
   * - .toDeleteDeviceInstance()
   * - .toDeleteSite()
   * - .toGetDeviceConfigurationTemplate()
   * - .toGetDeviceInstance()
   * - .toGetDeviceInstanceConfiguration()
   * - .toGetSite()
   * - .toGetSiteAddress()
   * - .toListTagsForResource()
   * - .toRebootDevice()
   * - .toUpdateDeviceConfigurationTemplate()
   * - .toUpdateDeviceInstance()
   * - .toUpdateSite()
   * - .toUpdateSiteAddress()
   *
   * Applies to resource types:
   * - device-instance
   * - device-configuration-template
   * - site
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
   * - .toCreateDeviceConfigurationTemplate()
   * - .toCreateDeviceInstance()
   * - .toCreateSite()
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
