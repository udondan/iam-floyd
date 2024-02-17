import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [private-networks](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserviceprovidingmanagedprivatenetworks.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class PrivateNetworks extends PolicyStatement {
  public servicePrefix = 'private-networks';

  /**
   * Statement provider for service [private-networks](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserviceprovidingmanagedprivatenetworks.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to acknowledge that an order has been received
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_AcknowledgeOrderReceipt.html
   */
  public toAcknowledgeOrderReceipt() {
    return this.to('AcknowledgeOrderReceipt');
  }

  /**
   * Grants permission to activate a device identifier
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_ActivateDeviceIdentifier.html
   */
  public toActivateDeviceIdentifier() {
    return this.to('ActivateDeviceIdentifier');
  }

  /**
   * Grants permission to activate a network site
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_ActivateNetworkSite.html
   */
  public toActivateNetworkSite() {
    return this.to('ActivateNetworkSite');
  }

  /**
   * Grants permission to configure an access point
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_ConfigureAccessPoint.html
   */
  public toConfigureAccessPoint() {
    return this.to('ConfigureAccessPoint');
  }

  /**
   * Grants permission to create a network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_CreateNetwork.html
   */
  public toCreateNetwork() {
    return this.to('CreateNetwork');
  }

  /**
   * Grants permission to create a network site
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_CreateNetworkSite.html
   */
  public toCreateNetworkSite() {
    return this.to('CreateNetworkSite');
  }

  /**
   * Grants permission to deactivate a device identifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeactivateDeviceIdentifier.html
   */
  public toDeactivateDeviceIdentifier() {
    return this.to('DeactivateDeviceIdentifier');
  }

  /**
   * Grants permission to delete a network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetwork.html
   */
  public toDeleteNetwork() {
    return this.to('DeleteNetwork');
  }

  /**
   * Grants permission to delete a network site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetworkSite.html
   */
  public toDeleteNetworkSite() {
    return this.to('DeleteNetworkSite');
  }

  /**
   * Grants permission to get a device identifier
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_GetDeviceIdentifier.html
   */
  public toGetDeviceIdentifier() {
    return this.to('GetDeviceIdentifier');
  }

  /**
   * Grants permission to get a network
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_GetNetwork.html
   */
  public toGetNetwork() {
    return this.to('GetNetwork');
  }

  /**
   * Grants permission to get a network resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_GetNetworkResource.html
   */
  public toGetNetworkResource() {
    return this.to('GetNetworkResource');
  }

  /**
   * Grants permission to get a network site
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_GetNetworkSite.html
   */
  public toGetNetworkSite() {
    return this.to('GetNetworkSite');
  }

  /**
   * Grants permission to get a network order
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_GetOrder.html
   */
  public toGetOrder() {
    return this.to('GetOrder');
  }

  /**
   * Grants permission to list device identifiers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_ListDeviceIdentifiers.html
   */
  public toListDeviceIdentifiers() {
    return this.to('ListDeviceIdentifiers');
  }

  /**
   * Grants permission to list network resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_ListNetworkResources.html
   */
  public toListNetworkResources() {
    return this.to('ListNetworkResources');
  }

  /**
   * Grants permission to list network sites
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_ListNetworkSites.html
   */
  public toListNetworkSites() {
    return this.to('ListNetworkSites');
  }

  /**
   * Grants permission to list networks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_ListNetworks.html
   */
  public toListNetworks() {
    return this.to('ListNetworks');
  }

  /**
   * Grants permission to list network orders
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_ListOrders.html
   */
  public toListOrders() {
    return this.to('ListOrders');
  }

  /**
   * Grants permission to return a list of tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to check the health of the service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_Ping.html
   */
  public toPing() {
    return this.to('Ping');
  }

  /**
   * Grants permission to start an update on the specified network resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_StartNetworkResourceUpdate.html
   */
  public toStartNetworkResourceUpdate() {
    return this.to('StartNetworkResourceUpdate');
  }

  /**
   * Grants permission to adds tags to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to removes tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a network site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_UpdateNetworkSite.html
   */
  public toUpdateNetworkSite() {
    return this.to('UpdateNetworkSite');
  }

  /**
   * Grants permission to update a plan at a network site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/private-networks/latest/APIReference/API_UpdateNetworkSitePlan.html
   */
  public toUpdateNetworkSitePlan() {
    return this.to('UpdateNetworkSitePlan');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcknowledgeOrderReceipt',
      'ActivateDeviceIdentifier',
      'ActivateNetworkSite',
      'ConfigureAccessPoint',
      'CreateNetwork',
      'CreateNetworkSite',
      'DeactivateDeviceIdentifier',
      'DeleteNetwork',
      'DeleteNetworkSite',
      'StartNetworkResourceUpdate',
      'UpdateNetworkSite',
      'UpdateNetworkSitePlan'
    ],
    Read: [
      'GetDeviceIdentifier',
      'GetNetwork',
      'GetNetworkResource',
      'GetNetworkSite',
      'GetOrder',
      'Ping'
    ],
    List: [
      'ListDeviceIdentifiers',
      'ListNetworkResources',
      'ListNetworkSites',
      'ListNetworks',
      'ListOrders',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type network to the statement
   *
   * https://docs.aws.amazon.com/private-networks/latest/userguide/identity-access-management.html
   *
   * @param networkName - Identifier for the networkName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetwork(networkName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:private-networks:${ region || this.defaultRegion }:${ account || this.defaultAccount }:network/${ networkName }`);
  }

  /**
   * Adds a resource of type network-site to the statement
   *
   * https://docs.aws.amazon.com/private-networks/latest/userguide/identity-access-management.html
   *
   * @param networkName - Identifier for the networkName.
   * @param networkSiteName - Identifier for the networkSiteName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetworkSite(networkName: string, networkSiteName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:private-networks:${ region || this.defaultRegion }:${ account || this.defaultAccount }:network-site/${ networkName }/${ networkSiteName }`);
  }

  /**
   * Adds a resource of type network-resource to the statement
   *
   * https://docs.aws.amazon.com/private-networks/latest/userguide/identity-access-management.html
   *
   * @param networkName - Identifier for the networkName.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetworkResource(networkName: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:private-networks:${ region || this.defaultRegion }:${ account || this.defaultAccount }:network-resource/${ networkName }/${ resourceId }`);
  }

  /**
   * Adds a resource of type order to the statement
   *
   * https://docs.aws.amazon.com/private-networks/latest/userguide/identity-access-management.html
   *
   * @param networkName - Identifier for the networkName.
   * @param orderId - Identifier for the orderId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOrder(networkName: string, orderId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:private-networks:${ region || this.defaultRegion }:${ account || this.defaultAccount }:order/${ networkName }/${ orderId }`);
  }

  /**
   * Adds a resource of type device-identifier to the statement
   *
   * https://docs.aws.amazon.com/private-networks/latest/userguide/identity-access-management.html
   *
   * @param networkName - Identifier for the networkName.
   * @param deviceId - Identifier for the deviceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeviceIdentifier(networkName: string, deviceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:private-networks:${ region || this.defaultRegion }:${ account || this.defaultAccount }:device-identifier/${ networkName }/${ deviceId }`);
  }

  /**
   * Filters access by checking the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toActivateNetworkSite()
   * - .toCreateNetwork()
   * - .toCreateNetworkSite()
   * - .toStartNetworkResourceUpdate()
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
   * Filters access by checking tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toActivateDeviceIdentifier()
   * - .toGetDeviceIdentifier()
   * - .toGetNetwork()
   * - .toGetNetworkResource()
   * - .toGetNetworkSite()
   * - .toGetOrder()
   *
   * Applies to resource types:
   * - network
   * - network-site
   * - network-resource
   * - order
   * - device-identifier
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toActivateNetworkSite()
   * - .toCreateNetwork()
   * - .toCreateNetworkSite()
   * - .toStartNetworkResourceUpdate()
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
