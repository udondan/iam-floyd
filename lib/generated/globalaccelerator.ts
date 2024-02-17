import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [globalaccelerator](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsglobalaccelerator.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Globalaccelerator extends PolicyStatement {
  public servicePrefix = 'globalaccelerator';

  /**
   * Statement provider for service [globalaccelerator](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsglobalaccelerator.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add a virtual private cloud (VPC) subnet endpoint to a custom routing accelerator endpoint group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_AddCustomRoutingEndpoints.html
   */
  public toAddCustomRoutingEndpoints() {
    return this.to('AddCustomRoutingEndpoints');
  }

  /**
   * Grants permission to add an endpoint to a standard accelerator endpoint group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - globalaccelerator:UpdateEndpointGroup
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_AddEndpoints.html
   */
  public toAddEndpoints() {
    return this.to('AddEndpoints');
  }

  /**
   * Grants permission to advertises an IPv4 address range that is provisioned for use with your accelerator through bring your own IP addresses (BYOIP)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_AdvertiseByoipCidr.html
   */
  public toAdvertiseByoipCidr() {
    return this.to('AdvertiseByoipCidr');
  }

  /**
   * Grants permission to allows custom routing of user traffic to a private destination IP:PORT in a specific VPC subnet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html
   */
  public toAllowCustomRoutingTraffic() {
    return this.to('AllowCustomRoutingTraffic');
  }

  /**
   * Grants permission to create a standard accelerator
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateAccelerator.html
   */
  public toCreateAccelerator() {
    return this.to('CreateAccelerator');
  }

  /**
   * Grants permission to create a CrossAccountAttachment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateCrossAccountAttachment.html
   */
  public toCreateCrossAccountAttachment() {
    return this.to('CreateCrossAccountAttachment');
  }

  /**
   * Grants permission to create a Custom Routing accelerator
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateCustomRoutingAccelerator.html
   */
  public toCreateCustomRoutingAccelerator() {
    return this.to('CreateCustomRoutingAccelerator');
  }

  /**
   * Grants permission to create an endpoint group for the specified listener for a custom routing accelerator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateCustomRoutingEndpointGroup.html
   */
  public toCreateCustomRoutingEndpointGroup() {
    return this.to('CreateCustomRoutingEndpointGroup');
  }

  /**
   * Grants permission to create a listener to process inbound connections from clients to a custom routing accelerator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateCustomRoutingListener.html
   */
  public toCreateCustomRoutingListener() {
    return this.to('CreateCustomRoutingListener');
  }

  /**
   * Grants permission to add an endpoint group to a standard accelerator listener
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html
   */
  public toCreateEndpointGroup() {
    return this.to('CreateEndpointGroup');
  }

  /**
   * Grants permission to add a listener to a standard accelerator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateListener.html
   */
  public toCreateListener() {
    return this.to('CreateListener');
  }

  /**
   * Grants permission to delete a standard accelerator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteAccelerator.html
   */
  public toDeleteAccelerator() {
    return this.to('DeleteAccelerator');
  }

  /**
   * Grants permission to delete a CrossAccountAttachment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteCrossAccountAttachment.html
   */
  public toDeleteCrossAccountAttachment() {
    return this.to('DeleteCrossAccountAttachment');
  }

  /**
   * Grants permission to delete a custom routing accelerator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteCustomRoutingAccelerator.html
   */
  public toDeleteCustomRoutingAccelerator() {
    return this.to('DeleteCustomRoutingAccelerator');
  }

  /**
   * Grants permission to delete an endpoint group from a listener for a custom routing accelerator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteCustomRoutingEndpointGroup.html
   */
  public toDeleteCustomRoutingEndpointGroup() {
    return this.to('DeleteCustomRoutingEndpointGroup');
  }

  /**
   * Grants permission to delete a listener for a custom routing accelerator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteCustomRoutingListener.html
   */
  public toDeleteCustomRoutingListener() {
    return this.to('DeleteCustomRoutingListener');
  }

  /**
   * Grants permission to delete an endpoint group associated with a standard accelerator listener
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteEndpointGroup.html
   */
  public toDeleteEndpointGroup() {
    return this.to('DeleteEndpointGroup');
  }

  /**
   * Grants permission to delete a listener from a standard accelerator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteListener.html
   */
  public toDeleteListener() {
    return this.to('DeleteListener');
  }

  /**
   * Grants permission to disallows custom routing of user traffic to a private destination IP:PORT in a specific VPC subnet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DenyCustomRoutingTraffic.html
   */
  public toDenyCustomRoutingTraffic() {
    return this.to('DenyCustomRoutingTraffic');
  }

  /**
   * Grants permission to releases the specified address range that you provisioned for use with your accelerator through bring your own IP addresses (BYOIP)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeprovisionByoipCidr.html
   */
  public toDeprovisionByoipCidr() {
    return this.to('DeprovisionByoipCidr');
  }

  /**
   * Grants permissions to describe a standard accelerator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAccelerator.html
   */
  public toDescribeAccelerator() {
    return this.to('DescribeAccelerator');
  }

  /**
   * Grants permission to describe a standard accelerator attributes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAcceleratorAttributes.html
   */
  public toDescribeAcceleratorAttributes() {
    return this.to('DescribeAcceleratorAttributes');
  }

  /**
   * Grants permissions to describe a CrossAccountAttachment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCrossAccountAttachment.html
   */
  public toDescribeCrossAccountAttachment() {
    return this.to('DescribeCrossAccountAttachment');
  }

  /**
   * Grants permission to describe a custom routing accelerator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingAccelerator.html
   */
  public toDescribeCustomRoutingAccelerator() {
    return this.to('DescribeCustomRoutingAccelerator');
  }

  /**
   * Grants permission to describe the attributes of a custom routing accelerator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingAcceleratorAttributes.html
   */
  public toDescribeCustomRoutingAcceleratorAttributes() {
    return this.to('DescribeCustomRoutingAcceleratorAttributes');
  }

  /**
   * Grants permission to describe an endpoint group for a custom routing accelerator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingEndpointGroup.html
   */
  public toDescribeCustomRoutingEndpointGroup() {
    return this.to('DescribeCustomRoutingEndpointGroup');
  }

  /**
   * Grants permission to describe a listener for a custom routing accelerator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingListener.html
   */
  public toDescribeCustomRoutingListener() {
    return this.to('DescribeCustomRoutingListener');
  }

  /**
   * Grants permission to describe a standard accelerator endpoint group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeEndpointGroup.html
   */
  public toDescribeEndpointGroup() {
    return this.to('DescribeEndpointGroup');
  }

  /**
   * Grants permission to describe a standard accelerator listener
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeListener.html
   */
  public toDescribeListener() {
    return this.to('DescribeListener');
  }

  /**
   * Grants permission to list all standard accelerators
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListAccelerators.html
   */
  public toListAccelerators() {
    return this.to('ListAccelerators');
  }

  /**
   * Grants permission to list the BYOIP cidrs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListByoipCidrs.html
   */
  public toListByoipCidrs() {
    return this.to('ListByoipCidrs');
  }

  /**
   * Grants permission to list all CrossAccountAttachments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCrossAccountAttachments.html
   */
  public toListCrossAccountAttachments() {
    return this.to('ListCrossAccountAttachments');
  }

  /**
   * Grants permission to list accounts with CrossAccountAttachments listing caller as a principal
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCrossAccountResourceAccounts.html
   */
  public toListCrossAccountResourceAccounts() {
    return this.to('ListCrossAccountResourceAccounts');
  }

  /**
   * Grants permission to list all CrossAccountAttachment resources usable by caller
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCrossAccountResources.html
   */
  public toListCrossAccountResources() {
    return this.to('ListCrossAccountResources');
  }

  /**
   * Grants permission to list the custom routing accelerators for an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingAccelerators.html
   */
  public toListCustomRoutingAccelerators() {
    return this.to('ListCustomRoutingAccelerators');
  }

  /**
   * Grants permission to list the endpoint groups that are associated with a listener for a custom routing accelerator
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingEndpointGroups.html
   */
  public toListCustomRoutingEndpointGroups() {
    return this.to('ListCustomRoutingEndpointGroups');
  }

  /**
   * Grants permission to list the listeners for a custom routing accelerator
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingListeners.html
   */
  public toListCustomRoutingListeners() {
    return this.to('ListCustomRoutingListeners');
  }

  /**
   * Grants permission to list the port mappings for a custom routing accelerator
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingPortMappings.html
   */
  public toListCustomRoutingPortMappings() {
    return this.to('ListCustomRoutingPortMappings');
  }

  /**
   * Grants permission to list the port mappings for a specific endpoint IP address (a destination address) in a subnet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingPortMappingsByDestination.html
   */
  public toListCustomRoutingPortMappingsByDestination() {
    return this.to('ListCustomRoutingPortMappingsByDestination');
  }

  /**
   * Grants permission to list all endpoint groups associated with a standard accelerator listener
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListEndpointGroups.html
   */
  public toListEndpointGroups() {
    return this.to('ListEndpointGroups');
  }

  /**
   * Grants permission to list all listeners associated with a standard accelerator
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListListeners.html
   */
  public toListListeners() {
    return this.to('ListListeners');
  }

  /**
   * Grants permission to list tags for a globalaccelerator resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to provisions an address range for use with your accelerator through bring your own IP addresses (BYOIP)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ProvisionByoipCidr.html
   */
  public toProvisionByoipCidr() {
    return this.to('ProvisionByoipCidr');
  }

  /**
   * Grants permission to remove virtual private cloud (VPC) subnet endpoints from a custom routing accelerator endpoint group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_RemoveCustomRoutingEndpoints.html
   */
  public toRemoveCustomRoutingEndpoints() {
    return this.to('RemoveCustomRoutingEndpoints');
  }

  /**
   * Grants permission to remove an endpoint from a standard accelerator endpoint group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - globalaccelerator:UpdateEndpointGroup
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_RemoveEndpoints.html
   */
  public toRemoveEndpoints() {
    return this.to('RemoveEndpoints');
  }

  /**
   * Grants permission to add tags to a globalaccelerator resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a globalaccelerator resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a standard accelerator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateAccelerator.html
   */
  public toUpdateAccelerator() {
    return this.to('UpdateAccelerator');
  }

  /**
   * Grants permission to update a standard accelerator attributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateAcceleratorAttributes.html
   */
  public toUpdateAcceleratorAttributes() {
    return this.to('UpdateAcceleratorAttributes');
  }

  /**
   * Grants permission to update a CrossAccountAttachment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateCrossAccountAttachment.html
   */
  public toUpdateCrossAccountAttachment() {
    return this.to('UpdateCrossAccountAttachment');
  }

  /**
   * Grants permission to update a custom routing accelerator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateCustomRoutingAccelerator.html
   */
  public toUpdateCustomRoutingAccelerator() {
    return this.to('UpdateCustomRoutingAccelerator');
  }

  /**
   * Grants permission to update the attributes for a custom routing accelerator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateCustomRoutingAcceleratorAttributes.html
   */
  public toUpdateCustomRoutingAcceleratorAttributes() {
    return this.to('UpdateCustomRoutingAcceleratorAttributes');
  }

  /**
   * Grants permission to update a listener for a custom routing accelerator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateCustomRoutingListener.html
   */
  public toUpdateCustomRoutingListener() {
    return this.to('UpdateCustomRoutingListener');
  }

  /**
   * Grants permission to update an endpoint group on a standard accelerator listener
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html
   */
  public toUpdateEndpointGroup() {
    return this.to('UpdateEndpointGroup');
  }

  /**
   * Grants permission to update a listener on a standard accelerator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateListener.html
   */
  public toUpdateListener() {
    return this.to('UpdateListener');
  }

  /**
   * Grants permission to stops advertising a BYOIP IPv4 address
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_WithdrawByoipCidr.html
   */
  public toWithdrawByoipCidr() {
    return this.to('WithdrawByoipCidr');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddCustomRoutingEndpoints',
      'AddEndpoints',
      'AdvertiseByoipCidr',
      'AllowCustomRoutingTraffic',
      'CreateAccelerator',
      'CreateCrossAccountAttachment',
      'CreateCustomRoutingAccelerator',
      'CreateCustomRoutingEndpointGroup',
      'CreateCustomRoutingListener',
      'CreateEndpointGroup',
      'CreateListener',
      'DeleteAccelerator',
      'DeleteCrossAccountAttachment',
      'DeleteCustomRoutingAccelerator',
      'DeleteCustomRoutingEndpointGroup',
      'DeleteCustomRoutingListener',
      'DeleteEndpointGroup',
      'DeleteListener',
      'DenyCustomRoutingTraffic',
      'DeprovisionByoipCidr',
      'ProvisionByoipCidr',
      'RemoveCustomRoutingEndpoints',
      'RemoveEndpoints',
      'UpdateAccelerator',
      'UpdateAcceleratorAttributes',
      'UpdateCrossAccountAttachment',
      'UpdateCustomRoutingAccelerator',
      'UpdateCustomRoutingAcceleratorAttributes',
      'UpdateCustomRoutingListener',
      'UpdateEndpointGroup',
      'UpdateListener',
      'WithdrawByoipCidr'
    ],
    Read: [
      'DescribeAccelerator',
      'DescribeAcceleratorAttributes',
      'DescribeCrossAccountAttachment',
      'DescribeCustomRoutingAccelerator',
      'DescribeCustomRoutingAcceleratorAttributes',
      'DescribeCustomRoutingEndpointGroup',
      'DescribeCustomRoutingListener',
      'DescribeEndpointGroup',
      'DescribeListener',
      'ListTagsForResource'
    ],
    List: [
      'ListAccelerators',
      'ListByoipCidrs',
      'ListCrossAccountAttachments',
      'ListCrossAccountResourceAccounts',
      'ListCrossAccountResources',
      'ListCustomRoutingAccelerators',
      'ListCustomRoutingEndpointGroups',
      'ListCustomRoutingListeners',
      'ListCustomRoutingPortMappings',
      'ListCustomRoutingPortMappingsByDestination',
      'ListEndpointGroups',
      'ListListeners'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type accelerator to the statement
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_Accelerator.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccelerator(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:globalaccelerator::${ account || this.defaultAccount }:accelerator/${ resourceId }`);
  }

  /**
   * Adds a resource of type listener to the statement
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_Listener.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param listenerId - Identifier for the listenerId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onListener(resourceId: string, listenerId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:globalaccelerator::${ account || this.defaultAccount }:accelerator/${ resourceId }/listener/${ listenerId }`);
  }

  /**
   * Adds a resource of type endpointgroup to the statement
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_EndpointGroup.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param listenerId - Identifier for the listenerId.
   * @param endpointGroupId - Identifier for the endpointGroupId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEndpointgroup(resourceId: string, listenerId: string, endpointGroupId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:globalaccelerator::${ account || this.defaultAccount }:accelerator/${ resourceId }/listener/${ listenerId }/endpoint-group/${ endpointGroupId }`);
  }

  /**
   * Adds a resource of type attachment to the statement
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CrossAccountAttachment.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAttachment(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:globalaccelerator::${ account || this.defaultAccount }:attachment/${ resourceId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAccelerator()
   * - .toCreateCrossAccountAttachment()
   * - .toCreateCustomRoutingAccelerator()
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
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - accelerator
   * - listener
   * - endpointgroup
   * - attachment
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAccelerator()
   * - .toCreateCrossAccountAttachment()
   * - .toCreateCustomRoutingAccelerator()
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
