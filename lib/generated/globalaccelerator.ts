import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
      'AdvertiseByoipCidr',
      'AllowCustomRoutingTraffic',
      'CreateAccelerator',
      'CreateCustomRoutingAccelerator',
      'CreateCustomRoutingEndpointGroup',
      'CreateCustomRoutingListener',
      'CreateEndpointGroup',
      'CreateListener',
      'DeleteAccelerator',
      'DeleteCustomRoutingAccelerator',
      'DeleteCustomRoutingEndpointGroup',
      'DeleteCustomRoutingListener',
      'DeleteEndpointGroup',
      'DeleteListener',
      'DenyCustomRoutingTraffic',
      'DeprovisionByoipCidr',
      'ProvisionByoipCidr',
      'RemoveCustomRoutingEndpoints',
      'UpdateAccelerator',
      'UpdateAcceleratorAttributes',
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
   * @param acceleratorId - Identifier for the acceleratorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccelerator(acceleratorId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:globalaccelerator::${ account || '*' }:accelerator/${ acceleratorId }`);
  }

  /**
   * Adds a resource of type listener to the statement
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_Listener.html
   *
   * @param acceleratorId - Identifier for the acceleratorId.
   * @param listenerId - Identifier for the listenerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onListener(acceleratorId: string, listenerId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:globalaccelerator::${ account || '*' }:accelerator/${ acceleratorId }/listener/${ listenerId }`);
  }

  /**
   * Adds a resource of type endpointgroup to the statement
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_EndpointGroup.html
   *
   * @param acceleratorId - Identifier for the acceleratorId.
   * @param listenerId - Identifier for the listenerId.
   * @param endpointGroupId - Identifier for the endpointGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEndpointgroup(acceleratorId: string, listenerId: string, endpointGroupId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:globalaccelerator::${ account || '*' }:accelerator/${ acceleratorId }/listener/${ listenerId }/endpoint-group/${ endpointGroupId }`);
  }
}
