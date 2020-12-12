import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add a virtual private cloud (VPC) subnet endpoint to a custom routing accelerator endpoint group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_AddCustomRoutingEndpoints.html
   */
  public toAddCustomRoutingEndpoints() {
    this.to('globalaccelerator:AddCustomRoutingEndpoints');
    return this;
  }

  /**
   * Grants permission to advertises an IPv4 address range that is provisioned for use with your accelerator through bring your own IP addresses (BYOIP).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_AdvertiseByoipCidr.html
   */
  public toAdvertiseByoipCidr() {
    this.to('globalaccelerator:AdvertiseByoipCidr');
    return this;
  }

  /**
   * Grants permission to allows custom routing of user traffic to a private destination IP:PORT in a specific VPC subnet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html
   */
  public toAllowCustomRoutingTraffic() {
    this.to('globalaccelerator:AllowCustomRoutingTraffic');
    return this;
  }

  /**
   * Grants permission to create a standard accelerator.
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
    this.to('globalaccelerator:CreateAccelerator');
    return this;
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
    this.to('globalaccelerator:CreateCustomRoutingAccelerator');
    return this;
  }

  /**
   * Grants permission to create an endpoint group for the specified listener for a custom routing accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateCustomRoutingEndpointGroup.html
   */
  public toCreateCustomRoutingEndpointGroup() {
    this.to('globalaccelerator:CreateCustomRoutingEndpointGroup');
    return this;
  }

  /**
   * Grants permission to create a listener to process inbound connections from clients to a custom routing accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateCustomRoutingListener.html
   */
  public toCreateCustomRoutingListener() {
    this.to('globalaccelerator:CreateCustomRoutingListener');
    return this;
  }

  /**
   * Grants permission to add an endpoint group to a standard accelerator listener.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html
   */
  public toCreateEndpointGroup() {
    this.to('globalaccelerator:CreateEndpointGroup');
    return this;
  }

  /**
   * Grants permission to add a listener to a standard accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateListener.html
   */
  public toCreateListener() {
    this.to('globalaccelerator:CreateListener');
    return this;
  }

  /**
   * Grants permission to delete a standard accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteAccelerator.html
   */
  public toDeleteAccelerator() {
    this.to('globalaccelerator:DeleteAccelerator');
    return this;
  }

  /**
   * Grants permission to delete a custom routing accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteCustomRoutingAccelerator.html
   */
  public toDeleteCustomRoutingAccelerator() {
    this.to('globalaccelerator:DeleteCustomRoutingAccelerator');
    return this;
  }

  /**
   * Grants permission to delete an endpoint group from a listener for a custom routing accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteCustomRoutingEndpointGroup.html
   */
  public toDeleteCustomRoutingEndpointGroup() {
    this.to('globalaccelerator:DeleteCustomRoutingEndpointGroup');
    return this;
  }

  /**
   * Grants permission to delete a listener for a custom routing accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteCustomRoutingListener.html
   */
  public toDeleteCustomRoutingListener() {
    this.to('globalaccelerator:DeleteCustomRoutingListener');
    return this;
  }

  /**
   * Grants permission to delete an endpoint group associated with a standard accelerator listener.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteEndpointGroup.html
   */
  public toDeleteEndpointGroup() {
    this.to('globalaccelerator:DeleteEndpointGroup');
    return this;
  }

  /**
   * Grants permission to delete a listener from a standard accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteListener.html
   */
  public toDeleteListener() {
    this.to('globalaccelerator:DeleteListener');
    return this;
  }

  /**
   * Grants permission to disallows custom routing of user traffic to a private destination IP:PORT in a specific VPC subnet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DenyCustomRoutingTraffic.html
   */
  public toDenyCustomRoutingTraffic() {
    this.to('globalaccelerator:DenyCustomRoutingTraffic');
    return this;
  }

  /**
   * Grants permission to releases the specified address range that you provisioned for use with your accelerator through bring your own IP addresses (BYOIP).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeprovisionByoipCidr.html
   */
  public toDeprovisionByoipCidr() {
    this.to('globalaccelerator:DeprovisionByoipCidr');
    return this;
  }

  /**
   * Grants permissions to describe a standard accelerator.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAccelerator.html
   */
  public toDescribeAccelerator() {
    this.to('globalaccelerator:DescribeAccelerator');
    return this;
  }

  /**
   * Grants permission to describe a standard accelerator attributes.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAcceleratorAttributes.html
   */
  public toDescribeAcceleratorAttributes() {
    this.to('globalaccelerator:DescribeAcceleratorAttributes');
    return this;
  }

  /**
   * Grants permission to describe a custom routing accelerator.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingAccelerator.html
   */
  public toDescribeCustomRoutingAccelerator() {
    this.to('globalaccelerator:DescribeCustomRoutingAccelerator');
    return this;
  }

  /**
   * Grants permission to describe the attributes of a custom routing accelerator.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingAcceleratorAttributes.html
   */
  public toDescribeCustomRoutingAcceleratorAttributes() {
    this.to('globalaccelerator:DescribeCustomRoutingAcceleratorAttributes');
    return this;
  }

  /**
   * Grants permission to describe an endpoint group for a custom routing accelerator.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingEndpointGroup.html
   */
  public toDescribeCustomRoutingEndpointGroup() {
    this.to('globalaccelerator:DescribeCustomRoutingEndpointGroup');
    return this;
  }

  /**
   * Grants permission to describe a listener for a custom routing accelerator.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingListener.html
   */
  public toDescribeCustomRoutingListener() {
    this.to('globalaccelerator:DescribeCustomRoutingListener');
    return this;
  }

  /**
   * Grants permission to describe a standard accelerator endpoint group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeEndpointGroup.html
   */
  public toDescribeEndpointGroup() {
    this.to('globalaccelerator:DescribeEndpointGroup');
    return this;
  }

  /**
   * Grants permission to describe a standard accelerator listener.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeListener.html
   */
  public toDescribeListener() {
    this.to('globalaccelerator:DescribeListener');
    return this;
  }

  /**
   * Grants permission to list all standard accelerators.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListAccelerators.html
   */
  public toListAccelerators() {
    this.to('globalaccelerator:ListAccelerators');
    return this;
  }

  /**
   * Grants permission to list the BYOIP cidrs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListByoipCidrs.html
   */
  public toListByoipCidrs() {
    this.to('globalaccelerator:ListByoipCidrs');
    return this;
  }

  /**
   * Grants permission to list the custom routing accelerators for an AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingAccelerators.html
   */
  public toListCustomRoutingAccelerators() {
    this.to('globalaccelerator:ListCustomRoutingAccelerators');
    return this;
  }

  /**
   * Grants permission to list the endpoint groups that are associated with a listener for a custom routing accelerator.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingEndpointGroups.html
   */
  public toListCustomRoutingEndpointGroups() {
    this.to('globalaccelerator:ListCustomRoutingEndpointGroups');
    return this;
  }

  /**
   * Grants permission to list the listeners for a custom routing accelerator.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingListeners.html
   */
  public toListCustomRoutingListeners() {
    this.to('globalaccelerator:ListCustomRoutingListeners');
    return this;
  }

  /**
   * Grants permission to list the port mappings for a custom routing accelerator.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingPortMappings.html
   */
  public toListCustomRoutingPortMappings() {
    this.to('globalaccelerator:ListCustomRoutingPortMappings');
    return this;
  }

  /**
   * Grants permission to list the port mappings for a specific endpoint IP address (a destination address) in a subnet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingPortMappingsByDestination.html
   */
  public toListCustomRoutingPortMappingsByDestination() {
    this.to('globalaccelerator:ListCustomRoutingPortMappingsByDestination');
    return this;
  }

  /**
   * Grants permission to list all endpoint groups associated with a standard accelerator listener.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListEndpointGroups.html
   */
  public toListEndpointGroups() {
    this.to('globalaccelerator:ListEndpointGroups');
    return this;
  }

  /**
   * Grants permission to list all listeners associated with a standard accelerator.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListListeners.html
   */
  public toListListeners() {
    this.to('globalaccelerator:ListListeners');
    return this;
  }

  /**
   * Grants permission to list tags for a globalaccelerator resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('globalaccelerator:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to provisions an address range for use with your accelerator through bring your own IP addresses (BYOIP).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_ProvisionByoipCidr.html
   */
  public toProvisionByoipCidr() {
    this.to('globalaccelerator:ProvisionByoipCidr');
    return this;
  }

  /**
   * Grants permission to remove virtual private cloud (VPC) subnet endpoints from a custom routing accelerator endpoint group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_RemoveCustomRoutingEndpoints.html
   */
  public toRemoveCustomRoutingEndpoints() {
    this.to('globalaccelerator:RemoveCustomRoutingEndpoints');
    return this;
  }

  /**
   * Grants permission to add tags to a globalaccelerator resource.
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
    this.to('globalaccelerator:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from a globalaccelerator resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('globalaccelerator:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a standard accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateAccelerator.html
   */
  public toUpdateAccelerator() {
    this.to('globalaccelerator:UpdateAccelerator');
    return this;
  }

  /**
   * Grants permission to update a standard accelerator attributes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateAcceleratorAttributes.html
   */
  public toUpdateAcceleratorAttributes() {
    this.to('globalaccelerator:UpdateAcceleratorAttributes');
    return this;
  }

  /**
   * Grants permission to update a custom routing accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateCustomRoutingAccelerator.html
   */
  public toUpdateCustomRoutingAccelerator() {
    this.to('globalaccelerator:UpdateCustomRoutingAccelerator');
    return this;
  }

  /**
   * Grants permission to update the attributes for a custom routing accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateCustomRoutingAcceleratorAttributes.html
   */
  public toUpdateCustomRoutingAcceleratorAttributes() {
    this.to('globalaccelerator:UpdateCustomRoutingAcceleratorAttributes');
    return this;
  }

  /**
   * Grants permission to update a listener for a custom routing accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateCustomRoutingListener.html
   */
  public toUpdateCustomRoutingListener() {
    this.to('globalaccelerator:UpdateCustomRoutingListener');
    return this;
  }

  /**
   * Grants permission to update an endpoint group on a standard accelerator listener.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html
   */
  public toUpdateEndpointGroup() {
    this.to('globalaccelerator:UpdateEndpointGroup');
    return this;
  }

  /**
   * Grants permission to update a listener on a standard accelerator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateListener.html
   */
  public toUpdateListener() {
    this.to('globalaccelerator:UpdateListener');
    return this;
  }

  /**
   * Grants permission to stops advertising a BYOIP IPv4 address.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/global-accelerator/latest/api/API_WithdrawByoipCidr.html
   */
  public toWithdrawByoipCidr() {
    this.to('globalaccelerator:WithdrawByoipCidr');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddCustomRoutingEndpoints",
      "AdvertiseByoipCidr",
      "AllowCustomRoutingTraffic",
      "CreateAccelerator",
      "CreateCustomRoutingAccelerator",
      "CreateCustomRoutingEndpointGroup",
      "CreateCustomRoutingListener",
      "CreateEndpointGroup",
      "CreateListener",
      "DeleteAccelerator",
      "DeleteCustomRoutingAccelerator",
      "DeleteCustomRoutingEndpointGroup",
      "DeleteCustomRoutingListener",
      "DeleteEndpointGroup",
      "DeleteListener",
      "DenyCustomRoutingTraffic",
      "DeprovisionByoipCidr",
      "ProvisionByoipCidr",
      "RemoveCustomRoutingEndpoints",
      "UpdateAccelerator",
      "UpdateAcceleratorAttributes",
      "UpdateCustomRoutingAccelerator",
      "UpdateCustomRoutingAcceleratorAttributes",
      "UpdateCustomRoutingListener",
      "UpdateEndpointGroup",
      "UpdateListener",
      "WithdrawByoipCidr"
    ],
    "Read": [
      "DescribeAccelerator",
      "DescribeAcceleratorAttributes",
      "DescribeCustomRoutingAccelerator",
      "DescribeCustomRoutingAcceleratorAttributes",
      "DescribeCustomRoutingEndpointGroup",
      "DescribeCustomRoutingListener",
      "DescribeEndpointGroup",
      "DescribeListener",
      "ListTagsForResource"
    ],
    "List": [
      "ListAccelerators",
      "ListByoipCidrs",
      "ListCustomRoutingAccelerators",
      "ListCustomRoutingEndpointGroups",
      "ListCustomRoutingListeners",
      "ListCustomRoutingPortMappings",
      "ListCustomRoutingPortMappingsByDestination",
      "ListEndpointGroups",
      "ListListeners"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
    var arn = 'arn:${Partition}:globalaccelerator::${Account}:accelerator/${AcceleratorId}';
    arn = arn.replace('${AcceleratorId}', acceleratorId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:globalaccelerator::${Account}:accelerator/${AcceleratorId}/listener/${ListenerId}';
    arn = arn.replace('${AcceleratorId}', acceleratorId);
    arn = arn.replace('${ListenerId}', listenerId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:globalaccelerator::${Account}:accelerator/${AcceleratorId}/listener/${ListenerId}/endpoint-group/${EndpointGroupId}';
    arn = arn.replace('${AcceleratorId}', acceleratorId);
    arn = arn.replace('${ListenerId}', listenerId);
    arn = arn.replace('${EndpointGroupId}', endpointGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
