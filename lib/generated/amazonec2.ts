import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [ec2](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ec2 extends PolicyStatement {
  public servicePrefix = 'ec2';

  /**
   * Statement provider for service [ec2](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a Convertible Reserved Instance exchange quote
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptReservedInstancesExchangeQuote.html
   */
  public toAcceptReservedInstancesExchangeQuote() {
    this.to('ec2:AcceptReservedInstancesExchangeQuote');
    return this;
  }

  /**
   * Grants permission to accept a transit gateway peering attachment request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptTransitGatewayPeeringAttachment.html
   */
  public toAcceptTransitGatewayPeeringAttachment() {
    this.to('ec2:AcceptTransitGatewayPeeringAttachment');
    return this;
  }

  /**
   * Grants permission to accept a request to attach a VPC to a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptTransitGatewayVpcAttachment.html
   */
  public toAcceptTransitGatewayVpcAttachment() {
    this.to('ec2:AcceptTransitGatewayVpcAttachment');
    return this;
  }

  /**
   * Grants permission to accept one or more interface VPC endpoint connections to your VPC endpoint service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptVpcEndpointConnections.html
   */
  public toAcceptVpcEndpointConnections() {
    this.to('ec2:AcceptVpcEndpointConnections');
    return this;
  }

  /**
   * Grants permission to accept a VPC peering connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptVpcPeeringConnection.html
   */
  public toAcceptVpcPeeringConnection() {
    this.to('ec2:AcceptVpcPeeringConnection');
    return this;
  }

  /**
   * Grants permission to advertise an IP address range that is provisioned for use in AWS through bring your own IP addresses (BYOIP)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AdvertiseByoipCidr.html
   */
  public toAdvertiseByoipCidr() {
    this.to('ec2:AdvertiseByoipCidr');
    return this;
  }

  /**
   * Grants permission to allocate an Elastic IP address (EIP) to your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateAddress.html
   */
  public toAllocateAddress() {
    this.to('ec2:AllocateAddress');
    return this;
  }

  /**
   * Grants permission to allocate a Dedicated Host to your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateHosts.html
   */
  public toAllocateHosts() {
    this.to('ec2:AllocateHosts');
    return this;
  }

  /**
   * Grants permission to apply a security group to the association between a Client VPN endpoint and a target network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ApplySecurityGroupsToClientVpnTargetNetwork.html
   */
  public toApplySecurityGroupsToClientVpnTargetNetwork() {
    this.to('ec2:ApplySecurityGroupsToClientVpnTargetNetwork');
    return this;
  }

  /**
   * Grants permission to assign one or more IPv6 addresses to a network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssignIpv6Addresses.html
   */
  public toAssignIpv6Addresses() {
    this.to('ec2:AssignIpv6Addresses');
    return this;
  }

  /**
   * Grants permission to assign one or more secondary private IP addresses to a network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssignPrivateIpAddresses.html
   */
  public toAssignPrivateIpAddresses() {
    this.to('ec2:AssignPrivateIpAddresses');
    return this;
  }

  /**
   * Grants permission to associate an Elastic IP address (EIP) with an instance or a network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateAddress.html
   */
  public toAssociateAddress() {
    this.to('ec2:AssociateAddress');
    return this;
  }

  /**
   * Grants permission to associate a target network with a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateClientVpnTargetNetwork.html
   */
  public toAssociateClientVpnTargetNetwork() {
    this.to('ec2:AssociateClientVpnTargetNetwork');
    return this;
  }

  /**
   * Grants permission to associate or disassociate a set of DHCP options with a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateDhcpOptions.html
   */
  public toAssociateDhcpOptions() {
    this.to('ec2:AssociateDhcpOptions');
    return this;
  }

  /**
   * Grants permission to associate an IAM instance profile with a running or stopped instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html
   */
  public toAssociateIamInstanceProfile() {
    this.to('ec2:AssociateIamInstanceProfile');
    return this;
  }

  /**
   * Grants permission to associate a subnet or gateway with a route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateRouteTable.html
   */
  public toAssociateRouteTable() {
    this.to('ec2:AssociateRouteTable');
    return this;
  }

  /**
   * Grants permission to associate a CIDR block with a subnet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateSubnetCidrBlock.html
   */
  public toAssociateSubnetCidrBlock() {
    this.to('ec2:AssociateSubnetCidrBlock');
    return this;
  }

  /**
   * Grants permission to associate an attachment and list of subnets with a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateTransitGatewayMulticastDomain.html
   */
  public toAssociateTransitGatewayMulticastDomain() {
    this.to('ec2:AssociateTransitGatewayMulticastDomain');
    return this;
  }

  /**
   * Grants permission to associate an attachment with a transit gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateTransitGatewayRouteTable.html
   */
  public toAssociateTransitGatewayRouteTable() {
    this.to('ec2:AssociateTransitGatewayRouteTable');
    return this;
  }

  /**
   * Grants permission to associate a CIDR block with a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateVpcCidrBlock.html
   */
  public toAssociateVpcCidrBlock() {
    this.to('ec2:AssociateVpcCidrBlock');
    return this;
  }

  /**
   * Grants permission to link an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC's security groups
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachClassicLinkVpc.html
   */
  public toAttachClassicLinkVpc() {
    this.to('ec2:AttachClassicLinkVpc');
    return this;
  }

  /**
   * Grants permission to attach an internet gateway to a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachInternetGateway.html
   */
  public toAttachInternetGateway() {
    this.to('ec2:AttachInternetGateway');
    return this;
  }

  /**
   * Grants permission to attach a network interface to an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachNetworkInterface.html
   */
  public toAttachNetworkInterface() {
    this.to('ec2:AttachNetworkInterface');
    return this;
  }

  /**
   * Grants permission to attach an EBS volume to a running or stopped instance and expose it to the instance with the specified device name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachVolume.html
   */
  public toAttachVolume() {
    this.to('ec2:AttachVolume');
    return this;
  }

  /**
   * Grants permission to attach a virtual private gateway to a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachVpnGateway.html
   */
  public toAttachVpnGateway() {
    this.to('ec2:AttachVpnGateway');
    return this;
  }

  /**
   * Grants permission to add an inbound authorization rule to a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeClientVpnIngress.html
   */
  public toAuthorizeClientVpnIngress() {
    this.to('ec2:AuthorizeClientVpnIngress');
    return this;
  }

  /**
   * Grants permission to add one or more outbound rules to a VPC security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupEgress.html
   */
  public toAuthorizeSecurityGroupEgress() {
    this.to('ec2:AuthorizeSecurityGroupEgress');
    return this;
  }

  /**
   * Grants permission to add one or more inbound rules to a security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupIngress.html
   */
  public toAuthorizeSecurityGroupIngress() {
    this.to('ec2:AuthorizeSecurityGroupIngress');
    return this;
  }

  /**
   * Grants permission to bundle an instance store-backed Windows instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BundleInstance.html
   */
  public toBundleInstance() {
    this.to('ec2:BundleInstance');
    return this;
  }

  /**
   * Grants permission to cancel a bundling operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelBundleTask.html
   */
  public toCancelBundleTask() {
    this.to('ec2:CancelBundleTask');
    return this;
  }

  /**
   * Grants permission to cancel a Capacity Reservation and release the reserved capacity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelCapacityReservation.html
   */
  public toCancelCapacityReservation() {
    this.to('ec2:CancelCapacityReservation');
    return this;
  }

  /**
   * Grants permission to cancel an active conversion task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelConversionTask.html
   */
  public toCancelConversionTask() {
    this.to('ec2:CancelConversionTask');
    return this;
  }

  /**
   * Grants permission to cancel an active export task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelExportTask.html
   */
  public toCancelExportTask() {
    this.to('ec2:CancelExportTask');
    return this;
  }

  /**
   * Grants permission to cancel an in-process import virtual machine or import snapshot task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelImportTask.html
   */
  public toCancelImportTask() {
    this.to('ec2:CancelImportTask');
    return this;
  }

  /**
   * Grants permission to cancel a Reserved Instance listing on the Reserved Instance Marketplace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelReservedInstancesListing.html
   */
  public toCancelReservedInstancesListing() {
    this.to('ec2:CancelReservedInstancesListing');
    return this;
  }

  /**
   * Grants permission to cancel one or more Spot Fleet requests
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotFleetRequests.html
   */
  public toCancelSpotFleetRequests() {
    this.to('ec2:CancelSpotFleetRequests');
    return this;
  }

  /**
   * Grants permission to cancel one or more Spot Instance requests
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotInstanceRequests.html
   */
  public toCancelSpotInstanceRequests() {
    this.to('ec2:CancelSpotInstanceRequests');
    return this;
  }

  /**
   * Grants permission to determine whether an owned product code is associated with an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ConfirmProductInstance.html
   */
  public toConfirmProductInstance() {
    this.to('ec2:ConfirmProductInstance');
    return this;
  }

  /**
   * Grants permission to copy a source Amazon FPGA image (AFI) to the current Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopyFpgaImage.html
   */
  public toCopyFpgaImage() {
    this.to('ec2:CopyFpgaImage');
    return this;
  }

  /**
   * Grants permission to copy an Amazon Machine Image (AMI) from a source Region to the current Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopyImage.html
   */
  public toCopyImage() {
    this.to('ec2:CopyImage');
    return this;
  }

  /**
   * Grants permission to copy a point-in-time snapshot of an EBS volume and store it in Amazon S3
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopySnapshot.html
   */
  public toCopySnapshot() {
    this.to('ec2:CopySnapshot');
    return this;
  }

  /**
   * Grants permission to create a Capacity Reservation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCapacityReservation.html
   */
  public toCreateCapacityReservation() {
    this.to('ec2:CreateCapacityReservation');
    return this;
  }

  /**
   * Grants permission to create a carrier gateway and provides CSP connectivity to VPC customers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCarrierGateway.html
   */
  public toCreateCarrierGateway() {
    this.to('ec2:CreateCarrierGateway');
    return this;
  }

  /**
   * Grants permission to create a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateClientVpnEndpoint.html
   */
  public toCreateClientVpnEndpoint() {
    this.to('ec2:CreateClientVpnEndpoint');
    return this;
  }

  /**
   * Grants permission to add a network route to a Client VPN endpoint's route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateClientVpnRoute.html
   */
  public toCreateClientVpnRoute() {
    this.to('ec2:CreateClientVpnRoute');
    return this;
  }

  /**
   * Grants permission to create a customer gateway, which provides information to AWS about your customer gateway device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCustomerGateway.html
   */
  public toCreateCustomerGateway() {
    this.to('ec2:CreateCustomerGateway');
    return this;
  }

  /**
   * Grants permission to create a default subnet in a specified Availability Zone in a default VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateDefaultSubnet.html
   */
  public toCreateDefaultSubnet() {
    this.to('ec2:CreateDefaultSubnet');
    return this;
  }

  /**
   * Grants permission to create a default VPC with a default subnet in each Availability Zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateDefaultVpc.html
   */
  public toCreateDefaultVpc() {
    this.to('ec2:CreateDefaultVpc');
    return this;
  }

  /**
   * Grants permission to create a set of DHCP options for a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateDhcpOptions.html
   */
  public toCreateDhcpOptions() {
    this.to('ec2:CreateDhcpOptions');
    return this;
  }

  /**
   * Grants permission to create an egress-only internet gateway for a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateEgressOnlyInternetGateway.html
   */
  public toCreateEgressOnlyInternetGateway() {
    this.to('ec2:CreateEgressOnlyInternetGateway');
    return this;
  }

  /**
   * Grants permission to launch an EC2 Fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html
   */
  public toCreateFleet() {
    this.to('ec2:CreateFleet');
    return this;
  }

  /**
   * Grants permission to create one or more flow logs to capture IP traffic for a network interface
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFlowLogs.html
   */
  public toCreateFlowLogs() {
    this.to('ec2:CreateFlowLogs');
    return this;
  }

  /**
   * Grants permission to create an Amazon FPGA Image (AFI) from a design checkpoint (DCP)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFpgaImage.html
   */
  public toCreateFpgaImage() {
    this.to('ec2:CreateFpgaImage');
    return this;
  }

  /**
   * Grants permission to create an Amazon EBS-backed AMI from a stopped or running Amazon EBS-backed instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html
   */
  public toCreateImage() {
    this.to('ec2:CreateImage');
    return this;
  }

  /**
   * Grants permission to export a running or stopped instance to an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInstanceExportTask.html
   */
  public toCreateInstanceExportTask() {
    this.to('ec2:CreateInstanceExportTask');
    return this;
  }

  /**
   * Grants permission to create an internet gateway for a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInternetGateway.html
   */
  public toCreateInternetGateway() {
    this.to('ec2:CreateInternetGateway');
    return this;
  }

  /**
   * Grants permission to create a 2048-bit RSA key pair
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html
   */
  public toCreateKeyPair() {
    this.to('ec2:CreateKeyPair');
    return this;
  }

  /**
   * Grants permission to create a launch template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html
   */
  public toCreateLaunchTemplate() {
    this.to('ec2:CreateLaunchTemplate');
    return this;
  }

  /**
   * Grants permission to create a new version of a launch template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplateVersion.html
   */
  public toCreateLaunchTemplateVersion() {
    this.to('ec2:CreateLaunchTemplateVersion');
    return this;
  }

  /**
   * Grants permission to create a static route for a local gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLocalGatewayRoute.html
   */
  public toCreateLocalGatewayRoute() {
    this.to('ec2:CreateLocalGatewayRoute');
    return this;
  }

  /**
   * Grants permission to associate a VPC with a local gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLocalGatewayRouteTableVpcAssociation.html
   */
  public toCreateLocalGatewayRouteTableVpcAssociation() {
    this.to('ec2:CreateLocalGatewayRouteTableVpcAssociation');
    return this;
  }

  /**
   * Grants permission to create a managed prefix list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateManagedPrefixList.html
   */
  public toCreateManagedPrefixList() {
    this.to('ec2:CreateManagedPrefixList');
    return this;
  }

  /**
   * Grants permission to create a NAT gateway in a subnet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNatGateway.html
   */
  public toCreateNatGateway() {
    this.to('ec2:CreateNatGateway');
    return this;
  }

  /**
   * Grants permission to create a network ACL in a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkAcl.html
   */
  public toCreateNetworkAcl() {
    this.to('ec2:CreateNetworkAcl');
    return this;
  }

  /**
   * Grants permission to create a numbered entry (a rule) in a network ACL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkAclEntry.html
   */
  public toCreateNetworkAclEntry() {
    this.to('ec2:CreateNetworkAclEntry');
    return this;
  }

  /**
   * Grants permission to create a network interface in a subnet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html
   */
  public toCreateNetworkInterface() {
    this.to('ec2:CreateNetworkInterface');
    return this;
  }

  /**
   * Grants permission to create a permission for an AWS-authorized user to perform certain operations on a network interface
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterfacePermission.html
   */
  public toCreateNetworkInterfacePermission() {
    this.to('ec2:CreateNetworkInterfacePermission');
    return this;
  }

  /**
   * Grants permission to create a placement group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreatePlacementGroup.html
   */
  public toCreatePlacementGroup() {
    this.to('ec2:CreatePlacementGroup');
    return this;
  }

  /**
   * Grants permission to create a listing for Standard Reserved Instances to be sold in the Reserved Instance Marketplace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateReservedInstancesListing.html
   */
  public toCreateReservedInstancesListing() {
    this.to('ec2:CreateReservedInstancesListing');
    return this;
  }

  /**
   * Grants permission to create a route in a VPC route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRoute.html
   */
  public toCreateRoute() {
    this.to('ec2:CreateRoute');
    return this;
  }

  /**
   * Grants permission to create a route table for a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRouteTable.html
   */
  public toCreateRouteTable() {
    this.to('ec2:CreateRouteTable');
    return this;
  }

  /**
   * Grants permission to create a security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html
   */
  public toCreateSecurityGroup() {
    this.to('ec2:CreateSecurityGroup');
    return this;
  }

  /**
   * Grants permission to create a snapshot of an EBS volume and store it in Amazon S3
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSnapshot.html
   */
  public toCreateSnapshot() {
    this.to('ec2:CreateSnapshot');
    return this;
  }

  /**
   * Grants permission to create crash-consistent snapshots of multiple EBS volumes and store them in Amazon S3
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSnapshots.html
   */
  public toCreateSnapshots() {
    this.to('ec2:CreateSnapshots');
    return this;
  }

  /**
   * Grants permission to create a data feed for Spot Instances to view Spot Instance usage logs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSpotDatafeedSubscription.html
   */
  public toCreateSpotDatafeedSubscription() {
    this.to('ec2:CreateSpotDatafeedSubscription');
    return this;
  }

  /**
   * Grants permission to create a subnet in a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSubnet.html
   */
  public toCreateSubnet() {
    this.to('ec2:CreateSubnet');
    return this;
  }

  /**
   * Grants permission to add or overwrite one or more tags for Amazon EC2 resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifCreateAction()
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html
   */
  public toCreateTags() {
    this.to('ec2:CreateTags');
    return this;
  }

  /**
   * Grants permission to create a traffic mirror filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilter.html
   */
  public toCreateTrafficMirrorFilter() {
    this.to('ec2:CreateTrafficMirrorFilter');
    return this;
  }

  /**
   * Grants permission to create a traffic mirror filter rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilterRule.html
   */
  public toCreateTrafficMirrorFilterRule() {
    this.to('ec2:CreateTrafficMirrorFilterRule');
    return this;
  }

  /**
   * Grants permission to create a traffic mirror session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorSession.html
   */
  public toCreateTrafficMirrorSession() {
    this.to('ec2:CreateTrafficMirrorSession');
    return this;
  }

  /**
   * Grants permission to create a traffic mirror target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorTarget.html
   */
  public toCreateTrafficMirrorTarget() {
    this.to('ec2:CreateTrafficMirrorTarget');
    return this;
  }

  /**
   * Grants permission to create a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGateway.html
   */
  public toCreateTransitGateway() {
    this.to('ec2:CreateTransitGateway');
    return this;
  }

  /**
   * Grants permission to create a multicast domain for a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayMulticastDomain.html
   */
  public toCreateTransitGatewayMulticastDomain() {
    this.to('ec2:CreateTransitGatewayMulticastDomain');
    return this;
  }

  /**
   * Grants permission to request a transit gateway peering attachment between a requester and accepter transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayPeeringAttachment.html
   */
  public toCreateTransitGatewayPeeringAttachment() {
    this.to('ec2:CreateTransitGatewayPeeringAttachment');
    return this;
  }

  /**
   * Grants permission to create a transit gateway prefix list reference
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayPrefixListReference.html
   */
  public toCreateTransitGatewayPrefixListReference() {
    this.to('ec2:CreateTransitGatewayPrefixListReference');
    return this;
  }

  /**
   * Grants permission to create a static route for a transit gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayRoute.html
   */
  public toCreateTransitGatewayRoute() {
    this.to('ec2:CreateTransitGatewayRoute');
    return this;
  }

  /**
   * Grants permission to create a route table for a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayRouteTable.html
   */
  public toCreateTransitGatewayRouteTable() {
    this.to('ec2:CreateTransitGatewayRouteTable');
    return this;
  }

  /**
   * Grants permission to attach a VPC to a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayVpcAttachment.html
   */
  public toCreateTransitGatewayVpcAttachment() {
    this.to('ec2:CreateTransitGatewayVpcAttachment');
    return this;
  }

  /**
   * Grants permission to create an EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html
   */
  public toCreateVolume() {
    this.to('ec2:CreateVolume');
    return this;
  }

  /**
   * Grants permission to create a VPC with a specified CIDR block
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpc.html
   */
  public toCreateVpc() {
    this.to('ec2:CreateVpc');
    return this;
  }

  /**
   * Grants permission to create a VPC endpoint for an AWS service
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - route53:AssociateVPCWithHostedZone
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpoint.html
   */
  public toCreateVpcEndpoint() {
    this.to('ec2:CreateVpcEndpoint');
    return this;
  }

  /**
   * Grants permission to create a connection notification for a VPC endpoint or VPC endpoint service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointConnectionNotification.html
   */
  public toCreateVpcEndpointConnectionNotification() {
    this.to('ec2:CreateVpcEndpointConnectionNotification');
    return this;
  }

  /**
   * Grants permission to create a VPC endpoint service configuration to which service consumers (AWS accounts, IAM users, and IAM roles) can connect
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointServiceConfiguration.html
   */
  public toCreateVpcEndpointServiceConfiguration() {
    this.to('ec2:CreateVpcEndpointServiceConfiguration');
    return this;
  }

  /**
   * Grants permission to request a VPC peering connection between two VPCs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcPeeringConnection.html
   */
  public toCreateVpcPeeringConnection() {
    this.to('ec2:CreateVpcPeeringConnection');
    return this;
  }

  /**
   * Grants permission to create a VPN connection between a virtual private gateway or transit gateway and a customer gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnConnection.html
   */
  public toCreateVpnConnection() {
    this.to('ec2:CreateVpnConnection');
    return this;
  }

  /**
   * Grants permission to create a static route for a VPN connection between a virtual private gateway and a customer gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnConnectionRoute.html
   */
  public toCreateVpnConnectionRoute() {
    this.to('ec2:CreateVpnConnectionRoute');
    return this;
  }

  /**
   * Grants permission to create a virtual private gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnGateway.html
   */
  public toCreateVpnGateway() {
    this.to('ec2:CreateVpnGateway');
    return this;
  }

  /**
   * Grants permission to delete a carrier gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteCarrierGateway.html
   */
  public toDeleteCarrierGateway() {
    this.to('ec2:DeleteCarrierGateway');
    return this;
  }

  /**
   * Grants permission to delete a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteClientVpnEndpoint.html
   */
  public toDeleteClientVpnEndpoint() {
    this.to('ec2:DeleteClientVpnEndpoint');
    return this;
  }

  /**
   * Grants permission to delete a route from a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteClientVpnRoute.html
   */
  public toDeleteClientVpnRoute() {
    this.to('ec2:DeleteClientVpnRoute');
    return this;
  }

  /**
   * Grants permission to delete a customer gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteCustomerGateway.html
   */
  public toDeleteCustomerGateway() {
    this.to('ec2:DeleteCustomerGateway');
    return this;
  }

  /**
   * Grants permission to delete a set of DHCP options
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteDhcpOptions.html
   */
  public toDeleteDhcpOptions() {
    this.to('ec2:DeleteDhcpOptions');
    return this;
  }

  /**
   * Grants permission to delete an egress-only internet gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteEgressOnlyInternetGateway.html
   */
  public toDeleteEgressOnlyInternetGateway() {
    this.to('ec2:DeleteEgressOnlyInternetGateway');
    return this;
  }

  /**
   * Grants permission to delete one or more EC2 Fleets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteFleets.html
   */
  public toDeleteFleets() {
    this.to('ec2:DeleteFleets');
    return this;
  }

  /**
   * Grants permission to delete one or more flow logs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteFlowLogs.html
   */
  public toDeleteFlowLogs() {
    this.to('ec2:DeleteFlowLogs');
    return this;
  }

  /**
   * Grants permission to delete an Amazon FPGA Image (AFI)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteFpgaImage.html
   */
  public toDeleteFpgaImage() {
    this.to('ec2:DeleteFpgaImage');
    return this;
  }

  /**
   * Grants permission to delete an internet gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteInternetGateway.html
   */
  public toDeleteInternetGateway() {
    this.to('ec2:DeleteInternetGateway');
    return this;
  }

  /**
   * Grants permission to delete a key pair by removing the public key from Amazon EC2
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteKeyPair.html
   */
  public toDeleteKeyPair() {
    this.to('ec2:DeleteKeyPair');
    return this;
  }

  /**
   * Grants permission to delete a launch template and its associated versions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLaunchTemplate.html
   */
  public toDeleteLaunchTemplate() {
    this.to('ec2:DeleteLaunchTemplate');
    return this;
  }

  /**
   * Grants permission to delete one or more versions of a launch template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLaunchTemplateVersions.html
   */
  public toDeleteLaunchTemplateVersions() {
    this.to('ec2:DeleteLaunchTemplateVersions');
    return this;
  }

  /**
   * Grants permission to delete a route from a local gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLocalGatewayRoute.html
   */
  public toDeleteLocalGatewayRoute() {
    this.to('ec2:DeleteLocalGatewayRoute');
    return this;
  }

  /**
   * Grants permission to delete an association between a VPC and local gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLocalGatewayRouteTableVpcAssociation.html
   */
  public toDeleteLocalGatewayRouteTableVpcAssociation() {
    this.to('ec2:DeleteLocalGatewayRouteTableVpcAssociation');
    return this;
  }

  /**
   * Grants permission to delete a managed prefix list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteManagedPrefixList.html
   */
  public toDeleteManagedPrefixList() {
    this.to('ec2:DeleteManagedPrefixList');
    return this;
  }

  /**
   * Grants permission to delete a NAT gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNatGateway.html
   */
  public toDeleteNatGateway() {
    this.to('ec2:DeleteNatGateway');
    return this;
  }

  /**
   * Grants permission to delete a network ACL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkAcl.html
   */
  public toDeleteNetworkAcl() {
    this.to('ec2:DeleteNetworkAcl');
    return this;
  }

  /**
   * Grants permission to delete an inbound or outbound entry (rule) from a network ACL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkAclEntry.html
   */
  public toDeleteNetworkAclEntry() {
    this.to('ec2:DeleteNetworkAclEntry');
    return this;
  }

  /**
   * Grants permission to delete a detached network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInterface.html
   */
  public toDeleteNetworkInterface() {
    this.to('ec2:DeleteNetworkInterface');
    return this;
  }

  /**
   * Grants permission to delete a permission that is associated with a network interface
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInterfacePermission.html
   */
  public toDeleteNetworkInterfacePermission() {
    this.to('ec2:DeleteNetworkInterfacePermission');
    return this;
  }

  /**
   * Grants permission to delete a placement group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeletePlacementGroup.html
   */
  public toDeletePlacementGroup() {
    this.to('ec2:DeletePlacementGroup');
    return this;
  }

  /**
   * Grants permission to delete a route from a route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRoute.html
   */
  public toDeleteRoute() {
    this.to('ec2:DeleteRoute');
    return this;
  }

  /**
   * Grants permission to delete a route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRouteTable.html
   */
  public toDeleteRouteTable() {
    this.to('ec2:DeleteRouteTable');
    return this;
  }

  /**
   * Grants permission to delete a security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSecurityGroup.html
   */
  public toDeleteSecurityGroup() {
    this.to('ec2:DeleteSecurityGroup');
    return this;
  }

  /**
   * Grants permission to delete a snapshot of an EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html
   */
  public toDeleteSnapshot() {
    this.to('ec2:DeleteSnapshot');
    return this;
  }

  /**
   * Grants permission to delete a data feed for Spot Instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSpotDatafeedSubscription.html
   */
  public toDeleteSpotDatafeedSubscription() {
    this.to('ec2:DeleteSpotDatafeedSubscription');
    return this;
  }

  /**
   * Grants permission to delete a subnet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSubnet.html
   */
  public toDeleteSubnet() {
    this.to('ec2:DeleteSubnet');
    return this;
  }

  /**
   * Grants permission to delete one or more tags from Amazon EC2 resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTags.html
   */
  public toDeleteTags() {
    this.to('ec2:DeleteTags');
    return this;
  }

  /**
   * Grants permission to delete a traffic mirror filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorFilter.html
   */
  public toDeleteTrafficMirrorFilter() {
    this.to('ec2:DeleteTrafficMirrorFilter');
    return this;
  }

  /**
   * Grants permission to delete a traffic mirror filter rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorFilterRule.html
   */
  public toDeleteTrafficMirrorFilterRule() {
    this.to('ec2:DeleteTrafficMirrorFilterRule');
    return this;
  }

  /**
   * Grants permission to delete a traffic mirror session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorSession.html
   */
  public toDeleteTrafficMirrorSession() {
    this.to('ec2:DeleteTrafficMirrorSession');
    return this;
  }

  /**
   * Grants permission to delete a traffic mirror target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorTarget.html
   */
  public toDeleteTrafficMirrorTarget() {
    this.to('ec2:DeleteTrafficMirrorTarget');
    return this;
  }

  /**
   * Grants permission to delete a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGateway.html
   */
  public toDeleteTransitGateway() {
    this.to('ec2:DeleteTransitGateway');
    return this;
  }

  /**
   * Grants permissions to delete a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayMulticastDomain.html
   */
  public toDeleteTransitGatewayMulticastDomain() {
    this.to('ec2:DeleteTransitGatewayMulticastDomain');
    return this;
  }

  /**
   * Grants permission to delete a peering attachment from a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayPeeringAttachment.html
   */
  public toDeleteTransitGatewayPeeringAttachment() {
    this.to('ec2:DeleteTransitGatewayPeeringAttachment');
    return this;
  }

  /**
   * Grants permission to delete a transit gateway prefix list reference
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayPrefixListReference.html
   */
  public toDeleteTransitGatewayPrefixListReference() {
    this.to('ec2:DeleteTransitGatewayPrefixListReference');
    return this;
  }

  /**
   * Grants permission to delete a route from a transit gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayRoute.html
   */
  public toDeleteTransitGatewayRoute() {
    this.to('ec2:DeleteTransitGatewayRoute');
    return this;
  }

  /**
   * Grants permission to delete a transit gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayRouteTable.html
   */
  public toDeleteTransitGatewayRouteTable() {
    this.to('ec2:DeleteTransitGatewayRouteTable');
    return this;
  }

  /**
   * Grants permission to delete a VPC attachment from a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayVpcAttachment.html
   */
  public toDeleteTransitGatewayVpcAttachment() {
    this.to('ec2:DeleteTransitGatewayVpcAttachment');
    return this;
  }

  /**
   * Grants permission to delete an EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVolume.html
   */
  public toDeleteVolume() {
    this.to('ec2:DeleteVolume');
    return this;
  }

  /**
   * Grants permission to delete a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpc.html
   */
  public toDeleteVpc() {
    this.to('ec2:DeleteVpc');
    return this;
  }

  /**
   * Grants permission to delete one or more VPC endpoint connection notifications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcEndpointConnectionNotifications.html
   */
  public toDeleteVpcEndpointConnectionNotifications() {
    this.to('ec2:DeleteVpcEndpointConnectionNotifications');
    return this;
  }

  /**
   * Grants permission to delete one or more VPC endpoint service configurations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcEndpointServiceConfigurations.html
   */
  public toDeleteVpcEndpointServiceConfigurations() {
    this.to('ec2:DeleteVpcEndpointServiceConfigurations');
    return this;
  }

  /**
   * Grants permission to delete one or more VPC endpoints
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcEndpoints.html
   */
  public toDeleteVpcEndpoints() {
    this.to('ec2:DeleteVpcEndpoints');
    return this;
  }

  /**
   * Grants permission to delete a VPC peering connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcPeeringConnection.html
   */
  public toDeleteVpcPeeringConnection() {
    this.to('ec2:DeleteVpcPeeringConnection');
    return this;
  }

  /**
   * Grants permission to delete a VPN connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnConnection.html
   */
  public toDeleteVpnConnection() {
    this.to('ec2:DeleteVpnConnection');
    return this;
  }

  /**
   * Grants permission to delete a static route for a VPN connection between a virtual private gateway and a customer gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnConnectionRoute.html
   */
  public toDeleteVpnConnectionRoute() {
    this.to('ec2:DeleteVpnConnectionRoute');
    return this;
  }

  /**
   * Grants permission to delete a virtual private gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnGateway.html
   */
  public toDeleteVpnGateway() {
    this.to('ec2:DeleteVpnGateway');
    return this;
  }

  /**
   * Grants permission to release an IP address range that was provisioned through bring your own IP addresses (BYOIP), and to delete the corresponding address pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeprovisionByoipCidr.html
   */
  public toDeprovisionByoipCidr() {
    this.to('ec2:DeprovisionByoipCidr');
    return this;
  }

  /**
   * Grants permission to deregister an Amazon Machine Image (AMI)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterImage.html
   */
  public toDeregisterImage() {
    this.to('ec2:DeregisterImage');
    return this;
  }

  /**
   * Grants permission to remove tags from the set of tags to include in notifications about scheduled events for your instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterInstanceEventNotificationAttributes.html
   */
  public toDeregisterInstanceEventNotificationAttributes() {
    this.to('ec2:DeregisterInstanceEventNotificationAttributes');
    return this;
  }

  /**
   * Grants permission to deregister one or more network interface members from a group IP address in a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterTransitGatewayMulticastGroupMembers.html
   */
  public toDeregisterTransitGatewayMulticastGroupMembers() {
    this.to('ec2:DeregisterTransitGatewayMulticastGroupMembers');
    return this;
  }

  /**
   * Grants permission to deregister one or more network interface sources from a group IP address in a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterTransitGatewayMulticastGroupSources.html
   */
  public toDeregisterTransitGatewayMulticastGroupSources() {
    this.to('ec2:DeregisterTransitGatewayMulticastGroupSources');
    return this;
  }

  /**
   * Grants permission to describe the attributes of the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    this.to('ec2:DescribeAccountAttributes');
    return this;
  }

  /**
   * Grants permission to describe one or more Elastic IP addresses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAddresses.html
   */
  public toDescribeAddresses() {
    this.to('ec2:DescribeAddresses');
    return this;
  }

  /**
   * Grants permission to describe the longer ID format settings for all resource types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAggregateIdFormat.html
   */
  public toDescribeAggregateIdFormat() {
    this.to('ec2:DescribeAggregateIdFormat');
    return this;
  }

  /**
   * Grants permission to describe one or more of the Availability Zones that are available to you
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html
   */
  public toDescribeAvailabilityZones() {
    this.to('ec2:DescribeAvailabilityZones');
    return this;
  }

  /**
   * Grants permission to describe one or more bundling tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeBundleTasks.html
   */
  public toDescribeBundleTasks() {
    this.to('ec2:DescribeBundleTasks');
    return this;
  }

  /**
   * Grants permission to describe the IP address ranges that were provisioned through bring your own IP addresses (BYOIP)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeByoipCidrs.html
   */
  public toDescribeByoipCidrs() {
    this.to('ec2:DescribeByoipCidrs');
    return this;
  }

  /**
   * Grants permission to describe one or more Capacity Reservations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCapacityReservations.html
   */
  public toDescribeCapacityReservations() {
    this.to('ec2:DescribeCapacityReservations');
    return this;
  }

  /**
   * Grants permission to describe one or more Carrier Gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCarrierGateways.html
   */
  public toDescribeCarrierGateways() {
    this.to('ec2:DescribeCarrierGateways');
    return this;
  }

  /**
   * Grants permission to describe one or more linked EC2-Classic instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClassicLinkInstances.html
   */
  public toDescribeClassicLinkInstances() {
    this.to('ec2:DescribeClassicLinkInstances');
    return this;
  }

  /**
   * Grants permission to describe the authorization rules for a Client VPN endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnAuthorizationRules.html
   */
  public toDescribeClientVpnAuthorizationRules() {
    this.to('ec2:DescribeClientVpnAuthorizationRules');
    return this;
  }

  /**
   * Grants permission to describe active client connections and connections that have been terminated within the last 60 minutes for a Client VPN endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnConnections.html
   */
  public toDescribeClientVpnConnections() {
    this.to('ec2:DescribeClientVpnConnections');
    return this;
  }

  /**
   * Grants permission to describe one or more Client VPN endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnEndpoints.html
   */
  public toDescribeClientVpnEndpoints() {
    this.to('ec2:DescribeClientVpnEndpoints');
    return this;
  }

  /**
   * Grants permission to describe the routes for a Client VPN endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnRoutes.html
   */
  public toDescribeClientVpnRoutes() {
    this.to('ec2:DescribeClientVpnRoutes');
    return this;
  }

  /**
   * Grants permission to describe the target networks that are associated with a Client VPN endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnTargetNetworks.html
   */
  public toDescribeClientVpnTargetNetworks() {
    this.to('ec2:DescribeClientVpnTargetNetworks');
    return this;
  }

  /**
   * Grants permission to describe the specified customer-owned address pools or all of your customer-owned address pools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCoipPools.html
   */
  public toDescribeCoipPools() {
    this.to('ec2:DescribeCoipPools');
    return this;
  }

  /**
   * Grants permission to describe one or more conversion tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeConversionTasks.html
   */
  public toDescribeConversionTasks() {
    this.to('ec2:DescribeConversionTasks');
    return this;
  }

  /**
   * Grants permission to describe one or more customer gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCustomerGateways.html
   */
  public toDescribeCustomerGateways() {
    this.to('ec2:DescribeCustomerGateways');
    return this;
  }

  /**
   * Grants permission to describe one or more DHCP options sets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeDhcpOptions.html
   */
  public toDescribeDhcpOptions() {
    this.to('ec2:DescribeDhcpOptions');
    return this;
  }

  /**
   * Grants permission to describe one or more egress-only internet gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeEgressOnlyInternetGateways.html
   */
  public toDescribeEgressOnlyInternetGateways() {
    this.to('ec2:DescribeEgressOnlyInternetGateways');
    return this;
  }

  /**
   * Grants permission to describe an Elastic Graphics accelerator that is associated with an instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeElasticGpus.html
   */
  public toDescribeElasticGpus() {
    this.to('ec2:DescribeElasticGpus');
    return this;
  }

  /**
   * Grants permission to describe one or more export image tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeExportImageTasks.html
   */
  public toDescribeExportImageTasks() {
    this.to('ec2:DescribeExportImageTasks');
    return this;
  }

  /**
   * Grants permission to describe one or more export instance tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeExportTasks.html
   */
  public toDescribeExportTasks() {
    this.to('ec2:DescribeExportTasks');
    return this;
  }

  /**
   * Grants permission to describe the state of fast snapshot restores for snapshots
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFastSnapshotRestores.html
   */
  public toDescribeFastSnapshotRestores() {
    this.to('ec2:DescribeFastSnapshotRestores');
    return this;
  }

  /**
   * Grants permission to describe the events for an EC2 Fleet during a specified time
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFleetHistory.html
   */
  public toDescribeFleetHistory() {
    this.to('ec2:DescribeFleetHistory');
    return this;
  }

  /**
   * Grants permission to describe the running instances for an EC2 Fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFleetInstances.html
   */
  public toDescribeFleetInstances() {
    this.to('ec2:DescribeFleetInstances');
    return this;
  }

  /**
   * Grants permission to describe one or more EC2 Fleets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFleets.html
   */
  public toDescribeFleets() {
    this.to('ec2:DescribeFleets');
    return this;
  }

  /**
   * Grants permission to describe one or more flow logs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFlowLogs.html
   */
  public toDescribeFlowLogs() {
    this.to('ec2:DescribeFlowLogs');
    return this;
  }

  /**
   * Grants permission to describe the attributes of an Amazon FPGA Image (AFI)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFpgaImageAttribute.html
   */
  public toDescribeFpgaImageAttribute() {
    this.to('ec2:DescribeFpgaImageAttribute');
    return this;
  }

  /**
   * Grants permission to describe one or more Amazon FPGA Images (AFIs)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFpgaImages.html
   */
  public toDescribeFpgaImages() {
    this.to('ec2:DescribeFpgaImages');
    return this;
  }

  /**
   * Grants permission to describe the Dedicated Host Reservations that are available to purchase
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeHostReservationOfferings.html
   */
  public toDescribeHostReservationOfferings() {
    this.to('ec2:DescribeHostReservationOfferings');
    return this;
  }

  /**
   * Grants permission to describe the Dedicated Host Reservations that are associated with Dedicated Hosts in the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeHostReservations.html
   */
  public toDescribeHostReservations() {
    this.to('ec2:DescribeHostReservations');
    return this;
  }

  /**
   * Grants permission to describe one or more Dedicated Hosts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeHosts.html
   */
  public toDescribeHosts() {
    this.to('ec2:DescribeHosts');
    return this;
  }

  /**
   * Grants permission to describe the IAM instance profile associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIamInstanceProfileAssociations.html
   */
  public toDescribeIamInstanceProfileAssociations() {
    this.to('ec2:DescribeIamInstanceProfileAssociations');
    return this;
  }

  /**
   * Grants permission to describe the ID format settings for resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIdFormat.html
   */
  public toDescribeIdFormat() {
    this.to('ec2:DescribeIdFormat');
    return this;
  }

  /**
   * Grants permission to describe the ID format settings for resources for an IAM user, IAM role, or root user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIdentityIdFormat.html
   */
  public toDescribeIdentityIdFormat() {
    this.to('ec2:DescribeIdentityIdFormat');
    return this;
  }

  /**
   * Grants permission to describe an attribute of an Amazon Machine Image (AMI)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImageAttribute.html
   */
  public toDescribeImageAttribute() {
    this.to('ec2:DescribeImageAttribute');
    return this;
  }

  /**
   * Grants permission to describe one or more images (AMIs, AKIs, and ARIs)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html
   */
  public toDescribeImages() {
    this.to('ec2:DescribeImages');
    return this;
  }

  /**
   * Grants permission to describe import virtual machine or import snapshot tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImportImageTasks.html
   */
  public toDescribeImportImageTasks() {
    this.to('ec2:DescribeImportImageTasks');
    return this;
  }

  /**
   * Grants permission to describe import snapshot tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImportSnapshotTasks.html
   */
  public toDescribeImportSnapshotTasks() {
    this.to('ec2:DescribeImportSnapshotTasks');
    return this;
  }

  /**
   * Grants permission to describe the attributes of an instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceAttribute.html
   */
  public toDescribeInstanceAttribute() {
    this.to('ec2:DescribeInstanceAttribute');
    return this;
  }

  /**
   * Grants permission to describe the credit option for CPU usage of one or more burstable performance instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceCreditSpecifications.html
   */
  public toDescribeInstanceCreditSpecifications() {
    this.to('ec2:DescribeInstanceCreditSpecifications');
    return this;
  }

  /**
   * Grants permission to describe the set of tags to include in notifications about scheduled events for your instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceEventNotificationAttributes.html
   */
  public toDescribeInstanceEventNotificationAttributes() {
    this.to('ec2:DescribeInstanceEventNotificationAttributes');
    return this;
  }

  /**
   * Grants permission to describe the status of one or more instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceStatus.html
   */
  public toDescribeInstanceStatus() {
    this.to('ec2:DescribeInstanceStatus');
    return this;
  }

  /**
   * Grants permission to describe the set of instance types that are offered in a location
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTypeOfferings.html
   */
  public toDescribeInstanceTypeOfferings() {
    this.to('ec2:DescribeInstanceTypeOfferings');
    return this;
  }

  /**
   * Grants permission to describe the details of instance types that are offered in a location
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTypes.html
   */
  public toDescribeInstanceTypes() {
    this.to('ec2:DescribeInstanceTypes');
    return this;
  }

  /**
   * Grants permission to describe one or more instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html
   */
  public toDescribeInstances() {
    this.to('ec2:DescribeInstances');
    return this;
  }

  /**
   * Grants permission to describe one or more internet gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInternetGateways.html
   */
  public toDescribeInternetGateways() {
    this.to('ec2:DescribeInternetGateways');
    return this;
  }

  /**
   * Grants permission to describe one or more key pairs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeKeyPairs.html
   */
  public toDescribeKeyPairs() {
    this.to('ec2:DescribeKeyPairs');
    return this;
  }

  /**
   * Grants permission to describe one or more launch template versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplateVersions.html
   */
  public toDescribeLaunchTemplateVersions() {
    this.to('ec2:DescribeLaunchTemplateVersions');
    return this;
  }

  /**
   * Grants permission to describe one or more launch templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplates.html
   */
  public toDescribeLaunchTemplates() {
    this.to('ec2:DescribeLaunchTemplates');
    return this;
  }

  /**
   * Grants permission to describe the associations between virtual interface groups and local gateway route tables
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations.html
   */
  public toDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations() {
    this.to('ec2:DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations');
    return this;
  }

  /**
   * Grants permission to describe an association between VPCs and local gateway route tables
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayRouteTableVpcAssociations.html
   */
  public toDescribeLocalGatewayRouteTableVpcAssociations() {
    this.to('ec2:DescribeLocalGatewayRouteTableVpcAssociations');
    return this;
  }

  /**
   * Grants permission to describe one or more local gateway route tables
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayRouteTables.html
   */
  public toDescribeLocalGatewayRouteTables() {
    this.to('ec2:DescribeLocalGatewayRouteTables');
    return this;
  }

  /**
   * Grants permission to describe local gateway virtual interface groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayVirtualInterfaceGroups.html
   */
  public toDescribeLocalGatewayVirtualInterfaceGroups() {
    this.to('ec2:DescribeLocalGatewayVirtualInterfaceGroups');
    return this;
  }

  /**
   * Grants permission to describe local gateway virtual interfaces
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayVirtualInterfaces.html
   */
  public toDescribeLocalGatewayVirtualInterfaces() {
    this.to('ec2:DescribeLocalGatewayVirtualInterfaces');
    return this;
  }

  /**
   * Grants permission to describe one or more local gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGateways.html
   */
  public toDescribeLocalGateways() {
    this.to('ec2:DescribeLocalGateways');
    return this;
  }

  /**
   * Grants permission to describe your managed prefix lists and any AWS-managed prefix lists
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeManagedPrefixLists.html
   */
  public toDescribeManagedPrefixLists() {
    this.to('ec2:DescribeManagedPrefixLists');
    return this;
  }

  /**
   * Grants permission to describe Elastic IP addresses that are being moved to the EC2-VPC platform
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeMovingAddresses.html
   */
  public toDescribeMovingAddresses() {
    this.to('ec2:DescribeMovingAddresses');
    return this;
  }

  /**
   * Grants permission to describe one or more NAT gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNatGateways.html
   */
  public toDescribeNatGateways() {
    this.to('ec2:DescribeNatGateways');
    return this;
  }

  /**
   * Grants permission to describe one or more network ACLs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkAcls.html
   */
  public toDescribeNetworkAcls() {
    this.to('ec2:DescribeNetworkAcls');
    return this;
  }

  /**
   * Grants permission to describe a network interface attribute
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInterfaceAttribute.html
   */
  public toDescribeNetworkInterfaceAttribute() {
    this.to('ec2:DescribeNetworkInterfaceAttribute');
    return this;
  }

  /**
   * Grants permission to describe the permissions that are associated with a network interface
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInterfacePermissions.html
   */
  public toDescribeNetworkInterfacePermissions() {
    this.to('ec2:DescribeNetworkInterfacePermissions');
    return this;
  }

  /**
   * Grants permission to describe one or more network interfaces
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInterfaces.html
   */
  public toDescribeNetworkInterfaces() {
    this.to('ec2:DescribeNetworkInterfaces');
    return this;
  }

  /**
   * Grants permission to describe one or more placement groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePlacementGroups.html
   */
  public toDescribePlacementGroups() {
    this.to('ec2:DescribePlacementGroups');
    return this;
  }

  /**
   * Grants permission to describe available AWS services in a prefix list format
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePrefixLists.html
   */
  public toDescribePrefixLists() {
    this.to('ec2:DescribePrefixLists');
    return this;
  }

  /**
   * Grants permission to describe the ID format settings for the root user and all IAM roles and IAM users that have explicitly specified a longer ID (17-character ID) preference
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePrincipalIdFormat.html
   */
  public toDescribePrincipalIdFormat() {
    this.to('ec2:DescribePrincipalIdFormat');
    return this;
  }

  /**
   * Grants permission to describe one or more IPv4 address pools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePublicIpv4Pools.html
   */
  public toDescribePublicIpv4Pools() {
    this.to('ec2:DescribePublicIpv4Pools');
    return this;
  }

  /**
   * Grants permission to describe one or more AWS Regions that are currently available in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRegions.html
   */
  public toDescribeRegions() {
    this.to('ec2:DescribeRegions');
    return this;
  }

  /**
   * Grants permission to describe one or more purchased Reserved Instances in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstances.html
   */
  public toDescribeReservedInstances() {
    this.to('ec2:DescribeReservedInstances');
    return this;
  }

  /**
   * Grants permission to describe your account's Reserved Instance listings in the Reserved Instance Marketplace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesListings.html
   */
  public toDescribeReservedInstancesListings() {
    this.to('ec2:DescribeReservedInstancesListings');
    return this;
  }

  /**
   * Grants permission to describe the modifications made to one or more Reserved Instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesModifications.html
   */
  public toDescribeReservedInstancesModifications() {
    this.to('ec2:DescribeReservedInstancesModifications');
    return this;
  }

  /**
   * Grants permission to describe the Reserved Instance offerings that are available for purchase
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesOfferings.html
   */
  public toDescribeReservedInstancesOfferings() {
    this.to('ec2:DescribeReservedInstancesOfferings');
    return this;
  }

  /**
   * Grants permission to describe one or more route tables
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRouteTables.html
   */
  public toDescribeRouteTables() {
    this.to('ec2:DescribeRouteTables');
    return this;
  }

  /**
   * Grants permission to find available schedules for Scheduled Instances
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeScheduledInstanceAvailability.html
   */
  public toDescribeScheduledInstanceAvailability() {
    this.to('ec2:DescribeScheduledInstanceAvailability');
    return this;
  }

  /**
   * Grants permission to describe one or more Scheduled Instances in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeScheduledInstances.html
   */
  public toDescribeScheduledInstances() {
    this.to('ec2:DescribeScheduledInstances');
    return this;
  }

  /**
   * Grants permission to describe the VPCs on the other side of a VPC peering connection that are referencing specified VPC security groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroupReferences.html
   */
  public toDescribeSecurityGroupReferences() {
    this.to('ec2:DescribeSecurityGroupReferences');
    return this;
  }

  /**
   * Grants permission to describe one or more security groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroups.html
   */
  public toDescribeSecurityGroups() {
    this.to('ec2:DescribeSecurityGroups');
    return this;
  }

  /**
   * Grants permission to describe an attribute of a snapshot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshotAttribute.html
   */
  public toDescribeSnapshotAttribute() {
    this.to('ec2:DescribeSnapshotAttribute');
    return this;
  }

  /**
   * Grants permission to describe one or more EBS snapshots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html
   */
  public toDescribeSnapshots() {
    this.to('ec2:DescribeSnapshots');
    return this;
  }

  /**
   * Grants permission to describe the data feed for Spot Instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotDatafeedSubscription.html
   */
  public toDescribeSpotDatafeedSubscription() {
    this.to('ec2:DescribeSpotDatafeedSubscription');
    return this;
  }

  /**
   * Grants permission to describe the running instances for a Spot Fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetInstances.html
   */
  public toDescribeSpotFleetInstances() {
    this.to('ec2:DescribeSpotFleetInstances');
    return this;
  }

  /**
   * Grants permission to describe the events for a Spot Fleet request during a specified time
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetRequestHistory.html
   */
  public toDescribeSpotFleetRequestHistory() {
    this.to('ec2:DescribeSpotFleetRequestHistory');
    return this;
  }

  /**
   * Grants permission to describe one or more Spot Fleet requests
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetRequests.html
   */
  public toDescribeSpotFleetRequests() {
    this.to('ec2:DescribeSpotFleetRequests');
    return this;
  }

  /**
   * Grants permission to describe one or more Spot Instance requests
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotInstanceRequests.html
   */
  public toDescribeSpotInstanceRequests() {
    this.to('ec2:DescribeSpotInstanceRequests');
    return this;
  }

  /**
   * Grants permission to describe the Spot Instance price history
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotPriceHistory.html
   */
  public toDescribeSpotPriceHistory() {
    this.to('ec2:DescribeSpotPriceHistory');
    return this;
  }

  /**
   * Grants permission to describe the stale security group rules for security groups in a specified VPC
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeStaleSecurityGroups.html
   */
  public toDescribeStaleSecurityGroups() {
    this.to('ec2:DescribeStaleSecurityGroups');
    return this;
  }

  /**
   * Grants permission to describe one or more subnets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSubnets.html
   */
  public toDescribeSubnets() {
    this.to('ec2:DescribeSubnets');
    return this;
  }

  /**
   * Grants permission to describe one or more tags for an Amazon EC2 resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    this.to('ec2:DescribeTags');
    return this;
  }

  /**
   * Grants permission to describe one or more traffic mirror filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTrafficMirrorFilters.html
   */
  public toDescribeTrafficMirrorFilters() {
    this.to('ec2:DescribeTrafficMirrorFilters');
    return this;
  }

  /**
   * Grants permission to describe one or more traffic mirror sessions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTrafficMirrorSessions.html
   */
  public toDescribeTrafficMirrorSessions() {
    this.to('ec2:DescribeTrafficMirrorSessions');
    return this;
  }

  /**
   * Grants permission to describe one or more traffic mirror targets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTrafficMirrorTargets.html
   */
  public toDescribeTrafficMirrorTargets() {
    this.to('ec2:DescribeTrafficMirrorTargets');
    return this;
  }

  /**
   * Grants permission to describe one or more attachments between resources and transit gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayAttachments.html
   */
  public toDescribeTransitGatewayAttachments() {
    this.to('ec2:DescribeTransitGatewayAttachments');
    return this;
  }

  /**
   * Grants permission to describe one or more transit gateway multicast domains
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayMulticastDomains.html
   */
  public toDescribeTransitGatewayMulticastDomains() {
    this.to('ec2:DescribeTransitGatewayMulticastDomains');
    return this;
  }

  /**
   * Grants permission to describe one or more transit gateway peering attachments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayPeeringAttachments.html
   */
  public toDescribeTransitGatewayPeeringAttachments() {
    this.to('ec2:DescribeTransitGatewayPeeringAttachments');
    return this;
  }

  /**
   * Grants permission to describe one or more transit gateway route tables
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayRouteTables.html
   */
  public toDescribeTransitGatewayRouteTables() {
    this.to('ec2:DescribeTransitGatewayRouteTables');
    return this;
  }

  /**
   * Grants permission to describe one or more VPC attachments on a transit gateway
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayVpcAttachments.html
   */
  public toDescribeTransitGatewayVpcAttachments() {
    this.to('ec2:DescribeTransitGatewayVpcAttachments');
    return this;
  }

  /**
   * Grants permission to describe one or more transit gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGateways.html
   */
  public toDescribeTransitGateways() {
    this.to('ec2:DescribeTransitGateways');
    return this;
  }

  /**
   * Grants permission to describe an attribute of an EBS volume
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumeAttribute.html
   */
  public toDescribeVolumeAttribute() {
    this.to('ec2:DescribeVolumeAttribute');
    return this;
  }

  /**
   * Grants permission to describe the status of one or more EBS volumes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumeStatus.html
   */
  public toDescribeVolumeStatus() {
    this.to('ec2:DescribeVolumeStatus');
    return this;
  }

  /**
   * Grants permission to describe one or more EBS volumes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumes.html
   */
  public toDescribeVolumes() {
    this.to('ec2:DescribeVolumes');
    return this;
  }

  /**
   * Grants permission to describe the current modification status of one or more EBS volumes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumesModifications.html
   */
  public toDescribeVolumesModifications() {
    this.to('ec2:DescribeVolumesModifications');
    return this;
  }

  /**
   * Grants permission to describe an attribute of a VPC
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcAttribute.html
   */
  public toDescribeVpcAttribute() {
    this.to('ec2:DescribeVpcAttribute');
    return this;
  }

  /**
   * Grants permission to describe the ClassicLink status of one or more VPCs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcClassicLink.html
   */
  public toDescribeVpcClassicLink() {
    this.to('ec2:DescribeVpcClassicLink');
    return this;
  }

  /**
   * Grants permission to describe the ClassicLink DNS support status of one or more VPCs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcClassicLinkDnsSupport.html
   */
  public toDescribeVpcClassicLinkDnsSupport() {
    this.to('ec2:DescribeVpcClassicLinkDnsSupport');
    return this;
  }

  /**
   * Grants permission to describe the connection notifications for VPC endpoints and VPC endpoint services
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointConnectionNotifications.html
   */
  public toDescribeVpcEndpointConnectionNotifications() {
    this.to('ec2:DescribeVpcEndpointConnectionNotifications');
    return this;
  }

  /**
   * Grants permission to describe the VPC endpoint connections to your VPC endpoint services
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointConnections.html
   */
  public toDescribeVpcEndpointConnections() {
    this.to('ec2:DescribeVpcEndpointConnections');
    return this;
  }

  /**
   * Grants permission to describe VPC endpoint service configurations (your services)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointServiceConfigurations.html
   */
  public toDescribeVpcEndpointServiceConfigurations() {
    this.to('ec2:DescribeVpcEndpointServiceConfigurations');
    return this;
  }

  /**
   * Grants permission to describe the principals (service consumers) that are permitted to discover your VPC endpoint service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointServicePermissions.html
   */
  public toDescribeVpcEndpointServicePermissions() {
    this.to('ec2:DescribeVpcEndpointServicePermissions');
    return this;
  }

  /**
   * Grants permission to describe all supported AWS services that can be specified when creating a VPC endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointServices.html
   */
  public toDescribeVpcEndpointServices() {
    this.to('ec2:DescribeVpcEndpointServices');
    return this;
  }

  /**
   * Grants permission to describe one or more VPC endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpoints.html
   */
  public toDescribeVpcEndpoints() {
    this.to('ec2:DescribeVpcEndpoints');
    return this;
  }

  /**
   * Grants permission to describe one or more VPC peering connections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcPeeringConnections.html
   */
  public toDescribeVpcPeeringConnections() {
    this.to('ec2:DescribeVpcPeeringConnections');
    return this;
  }

  /**
   * Grants permission to describe one or more VPCs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcs.html
   */
  public toDescribeVpcs() {
    this.to('ec2:DescribeVpcs');
    return this;
  }

  /**
   * Grants permission to describe one or more VPN connections
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html
   */
  public toDescribeVpnConnections() {
    this.to('ec2:DescribeVpnConnections');
    return this;
  }

  /**
   * Grants permission to describe one or more virtual private gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnGateways.html
   */
  public toDescribeVpnGateways() {
    this.to('ec2:DescribeVpnGateways');
    return this;
  }

  /**
   * Grants permission to unlink (detach) a linked EC2-Classic instance from a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachClassicLinkVpc.html
   */
  public toDetachClassicLinkVpc() {
    this.to('ec2:DetachClassicLinkVpc');
    return this;
  }

  /**
   * Grants permission to detach an internet gateway from a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html
   */
  public toDetachInternetGateway() {
    this.to('ec2:DetachInternetGateway');
    return this;
  }

  /**
   * Grants permission to detach a network interface from an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachNetworkInterface.html
   */
  public toDetachNetworkInterface() {
    this.to('ec2:DetachNetworkInterface');
    return this;
  }

  /**
   * Grants permission to detach an EBS volume from an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachVolume.html
   */
  public toDetachVolume() {
    this.to('ec2:DetachVolume');
    return this;
  }

  /**
   * Grants permission to detach a virtual private gateway from a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachVpnGateway.html
   */
  public toDetachVpnGateway() {
    this.to('ec2:DetachVpnGateway');
    return this;
  }

  /**
   * Grants permission to disable EBS encryption by default for your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableEbsEncryptionByDefault.html
   */
  public toDisableEbsEncryptionByDefault() {
    this.to('ec2:DisableEbsEncryptionByDefault');
    return this;
  }

  /**
   * Grants permission to disable fast snapshot restores for one or more snapshots in specified Availability Zones
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableFastSnapshotRestores.html
   */
  public toDisableFastSnapshotRestores() {
    this.to('ec2:DisableFastSnapshotRestores');
    return this;
  }

  /**
   * Grants permission to disable a resource attachment from propagating routes to the specified propagation route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableTransitGatewayRouteTablePropagation.html
   */
  public toDisableTransitGatewayRouteTablePropagation() {
    this.to('ec2:DisableTransitGatewayRouteTablePropagation');
    return this;
  }

  /**
   * Grants permission to disable a virtual private gateway from propagating routes to a specified route table of a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVgwRoutePropagation.html
   */
  public toDisableVgwRoutePropagation() {
    this.to('ec2:DisableVgwRoutePropagation');
    return this;
  }

  /**
   * Grants permission to disable ClassicLink for a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVpcClassicLink.html
   */
  public toDisableVpcClassicLink() {
    this.to('ec2:DisableVpcClassicLink');
    return this;
  }

  /**
   * Grants permission to disable ClassicLink DNS support for a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVpcClassicLinkDnsSupport.html
   */
  public toDisableVpcClassicLinkDnsSupport() {
    this.to('ec2:DisableVpcClassicLinkDnsSupport');
    return this;
  }

  /**
   * Grants permission to disassociate an Elastic IP address from an instance or network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateAddress.html
   */
  public toDisassociateAddress() {
    this.to('ec2:DisassociateAddress');
    return this;
  }

  /**
   * Grants permission to disassociate a target network from a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateClientVpnTargetNetwork.html
   */
  public toDisassociateClientVpnTargetNetwork() {
    this.to('ec2:DisassociateClientVpnTargetNetwork');
    return this;
  }

  /**
   * Grants permission to disassociate an IAM instance profile from a running or stopped instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html
   */
  public toDisassociateIamInstanceProfile() {
    this.to('ec2:DisassociateIamInstanceProfile');
    return this;
  }

  /**
   * Grants permission to disassociate a subnet from a route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateRouteTable.html
   */
  public toDisassociateRouteTable() {
    this.to('ec2:DisassociateRouteTable');
    return this;
  }

  /**
   * Grants permission to disassociate a CIDR block from a subnet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateSubnetCidrBlock.html
   */
  public toDisassociateSubnetCidrBlock() {
    this.to('ec2:DisassociateSubnetCidrBlock');
    return this;
  }

  /**
   * Grants permission to disassociate one or more subnets from a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateTransitGatewayMulticastDomain.html
   */
  public toDisassociateTransitGatewayMulticastDomain() {
    this.to('ec2:DisassociateTransitGatewayMulticastDomain');
    return this;
  }

  /**
   * Grants permission to disassociate a resource attachment from a transit gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateTransitGatewayRouteTable.html
   */
  public toDisassociateTransitGatewayRouteTable() {
    this.to('ec2:DisassociateTransitGatewayRouteTable');
    return this;
  }

  /**
   * Grants permission to disassociate a CIDR block from a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateVpcCidrBlock.html
   */
  public toDisassociateVpcCidrBlock() {
    this.to('ec2:DisassociateVpcCidrBlock');
    return this;
  }

  /**
   * Grants permission to enable EBS encryption by default for your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableEbsEncryptionByDefault.html
   */
  public toEnableEbsEncryptionByDefault() {
    this.to('ec2:EnableEbsEncryptionByDefault');
    return this;
  }

  /**
   * Grants permission to enable fast snapshot restores for one or more snapshots in specified Availability Zones
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableFastSnapshotRestores.html
   */
  public toEnableFastSnapshotRestores() {
    this.to('ec2:EnableFastSnapshotRestores');
    return this;
  }

  /**
   * Grants permission to enable an attachment to propagate routes to a propagation route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableTransitGatewayRouteTablePropagation.html
   */
  public toEnableTransitGatewayRouteTablePropagation() {
    this.to('ec2:EnableTransitGatewayRouteTablePropagation');
    return this;
  }

  /**
   * Grants permission to enable a virtual private gateway to propagate routes to a VPC route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVgwRoutePropagation.html
   */
  public toEnableVgwRoutePropagation() {
    this.to('ec2:EnableVgwRoutePropagation');
    return this;
  }

  /**
   * Grants permission to enable I/O operations for a volume that had I/O operations disabled
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVolumeIO.html
   */
  public toEnableVolumeIO() {
    this.to('ec2:EnableVolumeIO');
    return this;
  }

  /**
   * Grants permission to enable a VPC for ClassicLink
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVpcClassicLink.html
   */
  public toEnableVpcClassicLink() {
    this.to('ec2:EnableVpcClassicLink');
    return this;
  }

  /**
   * Grants permission to enable a VPC to support DNS hostname resolution for ClassicLink
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVpcClassicLinkDnsSupport.html
   */
  public toEnableVpcClassicLinkDnsSupport() {
    this.to('ec2:EnableVpcClassicLinkDnsSupport');
    return this;
  }

  /**
   * Grants permission to download the client certificate revocation list for a Client VPN endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportClientVpnClientCertificateRevocationList.html
   */
  public toExportClientVpnClientCertificateRevocationList() {
    this.to('ec2:ExportClientVpnClientCertificateRevocationList');
    return this;
  }

  /**
   * Grants permission to download the contents of the Client VPN endpoint configuration file for a Client VPN endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportClientVpnClientConfiguration.html
   */
  public toExportClientVpnClientConfiguration() {
    this.to('ec2:ExportClientVpnClientConfiguration');
    return this;
  }

  /**
   * Grants permission to export an Amazon Machine Image (AMI) to a VM file
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportImage.html
   */
  public toExportImage() {
    this.to('ec2:ExportImage');
    return this;
  }

  /**
   * Grants permission to export routes from a transit gateway route table to an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportTransitGatewayRoutes.html
   */
  public toExportTransitGatewayRoutes() {
    this.to('ec2:ExportTransitGatewayRoutes');
    return this;
  }

  /**
   * Grants permission to get usage information about a Capacity Reservation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetCapacityReservationUsage.html
   */
  public toGetCapacityReservationUsage() {
    this.to('ec2:GetCapacityReservationUsage');
    return this;
  }

  /**
   * Grants permission to describe the allocations from the specified customer-owned address pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetCoipPoolUsage.html
   */
  public toGetCoipPoolUsage() {
    this.to('ec2:GetCoipPoolUsage');
    return this;
  }

  /**
   * Grants permission to get the console output for an instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetConsoleOutput.html
   */
  public toGetConsoleOutput() {
    this.to('ec2:GetConsoleOutput');
    return this;
  }

  /**
   * Grants permission to retrieve a JPG-format screenshot of a running instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetConsoleScreenshot.html
   */
  public toGetConsoleScreenshot() {
    this.to('ec2:GetConsoleScreenshot');
    return this;
  }

  /**
   * Grants permission to get the default credit option for CPU usage of a burstable performance instance family
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetDefaultCreditSpecification.html
   */
  public toGetDefaultCreditSpecification() {
    this.to('ec2:GetDefaultCreditSpecification');
    return this;
  }

  /**
   * Grants permission to get the ID of the default customer master key (CMK) for EBS encryption by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetEbsDefaultKmsKeyId.html
   */
  public toGetEbsDefaultKmsKeyId() {
    this.to('ec2:GetEbsDefaultKmsKeyId');
    return this;
  }

  /**
   * Grants permission to describe whether EBS encryption by default is enabled for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetEbsEncryptionByDefault.html
   */
  public toGetEbsEncryptionByDefault() {
    this.to('ec2:GetEbsEncryptionByDefault');
    return this;
  }

  /**
   * Grants permission to preview a reservation purchase with configurations that match those of a Dedicated Host
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetHostReservationPurchasePreview.html
   */
  public toGetHostReservationPurchasePreview() {
    this.to('ec2:GetHostReservationPurchasePreview');
    return this;
  }

  /**
   * Grants permission to get the configuration data of the specified instance for use with a new launch template or launch template version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetLaunchTemplateData.html
   */
  public toGetLaunchTemplateData() {
    this.to('ec2:GetLaunchTemplateData');
    return this;
  }

  /**
   * Grants permission to get information about the resources that are associated with the specified managed prefix list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetManagedPrefixListAssociations.html
   */
  public toGetManagedPrefixListAssociations() {
    this.to('ec2:GetManagedPrefixListAssociations');
    return this;
  }

  /**
   * Grants permission to get information about the entries for a specified managed prefix list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetManagedPrefixListEntries.html
   */
  public toGetManagedPrefixListEntries() {
    this.to('ec2:GetManagedPrefixListEntries');
    return this;
  }

  /**
   * Grants permission to retrieve the encrypted administrator password for a running Windows instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html
   */
  public toGetPasswordData() {
    this.to('ec2:GetPasswordData');
    return this;
  }

  /**
   * Grants permission to return a quote and exchange information for exchanging one or more Convertible Reserved Instances for a new Convertible Reserved Instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetReservedInstancesExchangeQuote.html
   */
  public toGetReservedInstancesExchangeQuote() {
    this.to('ec2:GetReservedInstancesExchangeQuote');
    return this;
  }

  /**
   * Grants permission to list the route tables to which a resource attachment propagates routes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayAttachmentPropagations.html
   */
  public toGetTransitGatewayAttachmentPropagations() {
    this.to('ec2:GetTransitGatewayAttachmentPropagations');
    return this;
  }

  /**
   * Grants permission to get information about the associations for a transit gateway multicast domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayMulticastDomainAssociations.html
   */
  public toGetTransitGatewayMulticastDomainAssociations() {
    this.to('ec2:GetTransitGatewayMulticastDomainAssociations');
    return this;
  }

  /**
   * Grants permission to get information about prefix list references for a transit gateway route table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayPrefixListReference.html
   */
  public toGetTransitGatewayPrefixListReferences() {
    this.to('ec2:GetTransitGatewayPrefixListReferences');
    return this;
  }

  /**
   * Grants permission to get information about associations for a transit gateway route table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayRouteTableAssociations.html
   */
  public toGetTransitGatewayRouteTableAssociations() {
    this.to('ec2:GetTransitGatewayRouteTableAssociations');
    return this;
  }

  /**
   * Grants permission to get information about the route table propagations for a transit gateway route table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayRouteTablePropagations.html
   */
  public toGetTransitGatewayRouteTablePropagations() {
    this.to('ec2:GetTransitGatewayRouteTablePropagations');
    return this;
  }

  /**
   * Grants permission to upload a client certificate revocation list to a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportClientVpnClientCertificateRevocationList.html
   */
  public toImportClientVpnClientCertificateRevocationList() {
    this.to('ec2:ImportClientVpnClientCertificateRevocationList');
    return this;
  }

  /**
   * Grants permission to import single or multi-volume disk images or EBS snapshots into an Amazon Machine Image (AMI)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html
   */
  public toImportImage() {
    this.to('ec2:ImportImage');
    return this;
  }

  /**
   * Grants permission to create an import instance task using metadata from a disk image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html
   */
  public toImportInstance() {
    this.to('ec2:ImportInstance');
    return this;
  }

  /**
   * Grants permission to import a public key from an RSA key pair that was created with a third-party tool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html
   */
  public toImportKeyPair() {
    this.to('ec2:ImportKeyPair');
    return this;
  }

  /**
   * Grants permission to import a disk into an EBS snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportSnapshot.html
   */
  public toImportSnapshot() {
    this.to('ec2:ImportSnapshot');
    return this;
  }

  /**
   * Grants permission to create an import volume task using metadata from a disk image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportVolume.html
   */
  public toImportVolume() {
    this.to('ec2:ImportVolume');
    return this;
  }

  /**
   * Grants permission to modify a Capacity Reservation's capacity and the conditions under which it is to be released
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyCapacityReservation.html
   */
  public toModifyCapacityReservation() {
    this.to('ec2:ModifyCapacityReservation');
    return this;
  }

  /**
   * Grants permission to modify a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyClientVpnEndpoint.html
   */
  public toModifyClientVpnEndpoint() {
    this.to('ec2:ModifyClientVpnEndpoint');
    return this;
  }

  /**
   * Grants permission to change the account level default credit option for CPU usage of burstable performance instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyDefaultCreditSpecification.html
   */
  public toModifyDefaultCreditSpecification() {
    this.to('ec2:ModifyDefaultCreditSpecification');
    return this;
  }

  /**
   * Grants permission to change the default customer master key (CMK) for EBS encryption by default for your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyEbsDefaultKmsKeyId.html
   */
  public toModifyEbsDefaultKmsKeyId() {
    this.to('ec2:ModifyEbsDefaultKmsKeyId');
    return this;
  }

  /**
   * Grants permission to modify an EC2 Fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyFleet.html
   */
  public toModifyFleet() {
    this.to('ec2:ModifyFleet');
    return this;
  }

  /**
   * Grants permission to modify an attribute of an Amazon FPGA Image (AFI)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyFpgaImageAttribute.html
   */
  public toModifyFpgaImageAttribute() {
    this.to('ec2:ModifyFpgaImageAttribute');
    return this;
  }

  /**
   * Grants permission to modify a Dedicated Host
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyHosts.html
   */
  public toModifyHosts() {
    this.to('ec2:ModifyHosts');
    return this;
  }

  /**
   * Grants permission to modify the ID format for a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIdFormat.html
   */
  public toModifyIdFormat() {
    this.to('ec2:ModifyIdFormat');
    return this;
  }

  /**
   * Grants permission to modify the ID format of a resource for a specific principal in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIdentityIdFormat.html
   */
  public toModifyIdentityIdFormat() {
    this.to('ec2:ModifyIdentityIdFormat');
    return this;
  }

  /**
   * Grants permission to modify an attribute of an Amazon Machine Image (AMI)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html
   */
  public toModifyImageAttribute() {
    this.to('ec2:ModifyImageAttribute');
    return this;
  }

  /**
   * Grants permission to modify an attribute of an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html
   */
  public toModifyInstanceAttribute() {
    this.to('ec2:ModifyInstanceAttribute');
    return this;
  }

  /**
   * Grants permission to modify the Capacity Reservation settings for a stopped instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCapacityReservationAttributes.html
   */
  public toModifyInstanceCapacityReservationAttributes() {
    this.to('ec2:ModifyInstanceCapacityReservationAttributes');
    return this;
  }

  /**
   * Grants permission to modify the credit option for CPU usage on an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCreditSpecification.html
   */
  public toModifyInstanceCreditSpecification() {
    this.to('ec2:ModifyInstanceCreditSpecification');
    return this;
  }

  /**
   * Grants permission to modify the start time for a scheduled EC2 instance event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceEventStartTime.html
   */
  public toModifyInstanceEventStartTime() {
    this.to('ec2:ModifyInstanceEventStartTime');
    return this;
  }

  /**
   * Grants permission to modify the metadata options for an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceMetadataOptions.html
   */
  public toModifyInstanceMetadataOptions() {
    this.to('ec2:ModifyInstanceMetadataOptions');
    return this;
  }

  /**
   * Grants permission to modify the placement attributes for an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstancePlacement.html
   */
  public toModifyInstancePlacement() {
    this.to('ec2:ModifyInstancePlacement');
    return this;
  }

  /**
   * Grants permission to modify a launch template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyLaunchTemplate.html
   */
  public toModifyLaunchTemplate() {
    this.to('ec2:ModifyLaunchTemplate');
    return this;
  }

  /**
   * Grants permission to modify a managed prefix list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyManagedPrefixList.html
   */
  public toModifyManagedPrefixList() {
    this.to('ec2:ModifyManagedPrefixList');
    return this;
  }

  /**
   * Grants permission to modify an attribute of a network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyNetworkInterfaceAttribute.html
   */
  public toModifyNetworkInterfaceAttribute() {
    this.to('ec2:ModifyNetworkInterfaceAttribute');
    return this;
  }

  /**
   * Grants permission to modify attributes of one or more Reserved Instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyReservedInstances.html
   */
  public toModifyReservedInstances() {
    this.to('ec2:ModifyReservedInstances');
    return this;
  }

  /**
   * Grants permission to add or remove permission settings for a snapshot
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotAttribute.html
   */
  public toModifySnapshotAttribute() {
    this.to('ec2:ModifySnapshotAttribute');
    return this;
  }

  /**
   * Grants permission to modify a Spot Fleet request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySpotFleetRequest.html
   */
  public toModifySpotFleetRequest() {
    this.to('ec2:ModifySpotFleetRequest');
    return this;
  }

  /**
   * Grants permission to modify an attribute of a subnet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySubnetAttribute.html
   */
  public toModifySubnetAttribute() {
    this.to('ec2:ModifySubnetAttribute');
    return this;
  }

  /**
   * Grants permission to allow or restrict mirroring network services
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorFilterNetworkServices.html
   */
  public toModifyTrafficMirrorFilterNetworkServices() {
    this.to('ec2:ModifyTrafficMirrorFilterNetworkServices');
    return this;
  }

  /**
   * Grants permission to modify a traffic mirror rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorFilterRule.html
   */
  public toModifyTrafficMirrorFilterRule() {
    this.to('ec2:ModifyTrafficMirrorFilterRule');
    return this;
  }

  /**
   * Grants permission to modify a traffic mirror session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorSession.html
   */
  public toModifyTrafficMirrorSession() {
    this.to('ec2:ModifyTrafficMirrorSession');
    return this;
  }

  /**
   * Grants permission to modify a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTransitGateway.html
   */
  public toModifyTransitGateway() {
    this.to('ec2:ModifyTransitGateway');
    return this;
  }

  /**
   * Grants permission to modify a transit gateway prefix list reference
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTransitGatewayPrefixListReference.html
   */
  public toModifyTransitGatewayPrefixListReference() {
    this.to('ec2:ModifyTransitGatewayPrefixListReference');
    return this;
  }

  /**
   * Grants permission to modify a VPC attachment on a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTransitGatewayVpcAttachment.html
   */
  public toModifyTransitGatewayVpcAttachment() {
    this.to('ec2:ModifyTransitGatewayVpcAttachment');
    return this;
  }

  /**
   * Grants permission to modify the parameters of an EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVolume.html
   */
  public toModifyVolume() {
    this.to('ec2:ModifyVolume');
    return this;
  }

  /**
   * Grants permission to modify an attribute of a volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVolumeAttribute.html
   */
  public toModifyVolumeAttribute() {
    this.to('ec2:ModifyVolumeAttribute');
    return this;
  }

  /**
   * Grants permission to modify an attribute of a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcAttribute.html
   */
  public toModifyVpcAttribute() {
    this.to('ec2:ModifyVpcAttribute');
    return this;
  }

  /**
   * Grants permission to modify an attribute of a VPC endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpoint.html
   */
  public toModifyVpcEndpoint() {
    this.to('ec2:ModifyVpcEndpoint');
    return this;
  }

  /**
   * Grants permission to modify a connection notification for a VPC endpoint or VPC endpoint service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpointConnectionNotification.html
   */
  public toModifyVpcEndpointConnectionNotification() {
    this.to('ec2:ModifyVpcEndpointConnectionNotification');
    return this;
  }

  /**
   * Grants permission to modify the attributes of a VPC endpoint service configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpointServiceConfiguration.html
   */
  public toModifyVpcEndpointServiceConfiguration() {
    this.to('ec2:ModifyVpcEndpointServiceConfiguration');
    return this;
  }

  /**
   * Grants permission to modify the permissions for a VPC endpoint service
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpointServicePermissions.html
   */
  public toModifyVpcEndpointServicePermissions() {
    this.to('ec2:ModifyVpcEndpointServicePermissions');
    return this;
  }

  /**
   * Grants permission to modify the VPC peering connection options on one side of a VPC peering connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcPeeringConnectionOptions.html
   */
  public toModifyVpcPeeringConnectionOptions() {
    this.to('ec2:ModifyVpcPeeringConnectionOptions');
    return this;
  }

  /**
   * Grants permission to modify the instance tenancy attribute of a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcTenancy.html
   */
  public toModifyVpcTenancy() {
    this.to('ec2:ModifyVpcTenancy');
    return this;
  }

  /**
   * Grants permission to modify the target gateway of a Site-to-Site VPN connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpnConnection.html
   */
  public toModifyVpnConnection() {
    this.to('ec2:ModifyVpnConnection');
    return this;
  }

  /**
   * Grants permission to modify the certificate for a Site-to-Site VPN connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpnTunnelCertificate
   */
  public toModifyVpnTunnelCertificate() {
    this.to('ec2:ModifyVpnTunnelCertificate');
    return this;
  }

  /**
   * Grants permission to modify the options for a Site-to-Site VPN connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpnTunnelOptions.html
   */
  public toModifyVpnTunnelOptions() {
    this.to('ec2:ModifyVpnTunnelOptions');
    return this;
  }

  /**
   * Grants permission to enable detailed monitoring for a running instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_MonitorInstances.html
   */
  public toMonitorInstances() {
    this.to('ec2:MonitorInstances');
    return this;
  }

  /**
   * Grants permission to move an Elastic IP address from the EC2-Classic platform to the EC2-VPC platform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_MoveAddressToVpc.html
   */
  public toMoveAddressToVpc() {
    this.to('ec2:MoveAddressToVpc');
    return this;
  }

  /**
   * Grants permission to provision an address range for use in AWS through bring your own IP addresses (BYOIP), and to create a corresponding address pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ProvisionByoipCidr.html
   */
  public toProvisionByoipCidr() {
    this.to('ec2:ProvisionByoipCidr');
    return this;
  }

  /**
   * Grants permission to purchase a reservation with configurations that match those of a Dedicated Host
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseHostReservation.html
   */
  public toPurchaseHostReservation() {
    this.to('ec2:PurchaseHostReservation');
    return this;
  }

  /**
   * Grants permission to purchase a Reserved Instance offering
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseReservedInstancesOffering.html
   */
  public toPurchaseReservedInstancesOffering() {
    this.to('ec2:PurchaseReservedInstancesOffering');
    return this;
  }

  /**
   * Grants permission to purchase one or more Scheduled Instances with a specified schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseScheduledInstances.html
   */
  public toPurchaseScheduledInstances() {
    this.to('ec2:PurchaseScheduledInstances');
    return this;
  }

  /**
   * Grants permission to request a reboot of one or more instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RebootInstances.html
   */
  public toRebootInstances() {
    this.to('ec2:RebootInstances');
    return this;
  }

  /**
   * Grants permission to register an Amazon Machine Image (AMI)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterImage.html
   */
  public toRegisterImage() {
    this.to('ec2:RegisterImage');
    return this;
  }

  /**
   * Grants permission to add tags to the set of tags to include in notifications about scheduled events for your instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterInstanceEventNotificationAttributes.html
   */
  public toRegisterInstanceEventNotificationAttributes() {
    this.to('ec2:RegisterInstanceEventNotificationAttributes');
    return this;
  }

  /**
   * Grants permission to register one or more network interfaces as a member of a group IP address in a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterTransitGatewayMulticastGroupMembers.html
   */
  public toRegisterTransitGatewayMulticastGroupMembers() {
    this.to('ec2:RegisterTransitGatewayMulticastGroupMembers');
    return this;
  }

  /**
   * Grants permission to register one or more network interfaces as a source of a group IP address in a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterTransitGatewayMulticastGroupSources.html
   */
  public toRegisterTransitGatewayMulticastGroupSources() {
    this.to('ec2:RegisterTransitGatewayMulticastGroupSources');
    return this;
  }

  /**
   * Grants permission to reject a transit gateway peering attachment request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectTransitGatewayPeeringAttachment.html
   */
  public toRejectTransitGatewayPeeringAttachment() {
    this.to('ec2:RejectTransitGatewayPeeringAttachment');
    return this;
  }

  /**
   * Grants permission to reject a request to attach a VPC to a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectTransitGatewayVpcAttachment.html
   */
  public toRejectTransitGatewayVpcAttachment() {
    this.to('ec2:RejectTransitGatewayVpcAttachment');
    return this;
  }

  /**
   * Grants permission to reject one or more VPC endpoint connection requests to a VPC endpoint service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectVpcEndpointConnections.html
   */
  public toRejectVpcEndpointConnections() {
    this.to('ec2:RejectVpcEndpointConnections');
    return this;
  }

  /**
   * Grants permission to reject a VPC peering connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectVpcPeeringConnection.html
   */
  public toRejectVpcPeeringConnection() {
    this.to('ec2:RejectVpcPeeringConnection');
    return this;
  }

  /**
   * Grants permission to release an Elastic IP address
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseAddress.html
   */
  public toReleaseAddress() {
    this.to('ec2:ReleaseAddress');
    return this;
  }

  /**
   * Grants permission to release one or more On-Demand Dedicated Hosts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseHosts.html
   */
  public toReleaseHosts() {
    this.to('ec2:ReleaseHosts');
    return this;
  }

  /**
   * Grants permission to replace an IAM instance profile for an instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceIamInstanceProfileAssociation.html
   */
  public toReplaceIamInstanceProfileAssociation() {
    this.to('ec2:ReplaceIamInstanceProfileAssociation');
    return this;
  }

  /**
   * Grants permission to change which network ACL a subnet is associated with
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceNetworkAclAssociation.html
   */
  public toReplaceNetworkAclAssociation() {
    this.to('ec2:ReplaceNetworkAclAssociation');
    return this;
  }

  /**
   * Grants permission to replace an entry (rule) in a network ACL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceNetworkAclEntry.html
   */
  public toReplaceNetworkAclEntry() {
    this.to('ec2:ReplaceNetworkAclEntry');
    return this;
  }

  /**
   * Grants permission to replace a route within a route table in a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceRoute.html
   */
  public toReplaceRoute() {
    this.to('ec2:ReplaceRoute');
    return this;
  }

  /**
   * Grants permission to change the route table that is associated with a subnet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceRouteTableAssociation.html
   */
  public toReplaceRouteTableAssociation() {
    this.to('ec2:ReplaceRouteTableAssociation');
    return this;
  }

  /**
   * Grants permission to replace a route in a transit gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceTransitGatewayRoute.html
   */
  public toReplaceTransitGatewayRoute() {
    this.to('ec2:ReplaceTransitGatewayRoute');
    return this;
  }

  /**
   * Grants permission to submit feedback about the status of an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReportInstanceStatus.html
   */
  public toReportInstanceStatus() {
    this.to('ec2:ReportInstanceStatus');
    return this;
  }

  /**
   * Grants permission to create a Spot Fleet request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html
   */
  public toRequestSpotFleet() {
    this.to('ec2:RequestSpotFleet');
    return this;
  }

  /**
   * Grants permission to create a Spot Instance request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html
   */
  public toRequestSpotInstances() {
    this.to('ec2:RequestSpotInstances');
    return this;
  }

  /**
   * Grants permission to reset the default customer master key (CMK) for EBS encryption for your account to use the AWS-managed CMK for EBS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetEbsDefaultKmsKeyId.html
   */
  public toResetEbsDefaultKmsKeyId() {
    this.to('ec2:ResetEbsDefaultKmsKeyId');
    return this;
  }

  /**
   * Grants permission to reset an attribute of an Amazon FPGA Image (AFI) to its default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetFpgaImageAttribute.html
   */
  public toResetFpgaImageAttribute() {
    this.to('ec2:ResetFpgaImageAttribute');
    return this;
  }

  /**
   * Grants permission to reset an attribute of an Amazon Machine Image (AMI) to its default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetImageAttribute.html
   */
  public toResetImageAttribute() {
    this.to('ec2:ResetImageAttribute');
    return this;
  }

  /**
   * Grants permission to reset an attribute of an instance to its default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetInstanceAttribute.html
   */
  public toResetInstanceAttribute() {
    this.to('ec2:ResetInstanceAttribute');
    return this;
  }

  /**
   * Grants permission to reset an attribute of a network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetNetworkInterfaceAttribute.html
   */
  public toResetNetworkInterfaceAttribute() {
    this.to('ec2:ResetNetworkInterfaceAttribute');
    return this;
  }

  /**
   * Grants permission to reset permission settings for a snapshot
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetSnapshotAttribute.html
   */
  public toResetSnapshotAttribute() {
    this.to('ec2:ResetSnapshotAttribute');
    return this;
  }

  /**
   * Grants permission to restore an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RestoreAddressToClassic.html
   */
  public toRestoreAddressToClassic() {
    this.to('ec2:RestoreAddressToClassic');
    return this;
  }

  /**
   * Grants permission to restore the entries from a previous version of a managed prefix list to a new version of the prefix list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RestoreManagedPrefixListVersion.html
   */
  public toRestoreManagedPrefixListVersion() {
    this.to('ec2:RestoreManagedPrefixListVersion');
    return this;
  }

  /**
   * Grants permission to remove an inbound authorization rule from a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeClientVpnIngress.html
   */
  public toRevokeClientVpnIngress() {
    this.to('ec2:RevokeClientVpnIngress');
    return this;
  }

  /**
   * Grants permission to remove one or more outbound rules from a VPC security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupEgress.html
   */
  public toRevokeSecurityGroupEgress() {
    this.to('ec2:RevokeSecurityGroupEgress');
    return this;
  }

  /**
   * Grants permission to remove one or more inbound rules from a security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupIngress.html
   */
  public toRevokeSecurityGroupIngress() {
    this.to('ec2:RevokeSecurityGroupIngress');
    return this;
  }

  /**
   * Grants permission to launch one or more instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html
   */
  public toRunInstances() {
    this.to('ec2:RunInstances');
    return this;
  }

  /**
   * Grants permission to launch one or more Scheduled Instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunScheduledInstances.html
   */
  public toRunScheduledInstances() {
    this.to('ec2:RunScheduledInstances');
    return this;
  }

  /**
   * Grants permission to search for routes in a local gateway route table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchLocalGatewayRoutes.html
   */
  public toSearchLocalGatewayRoutes() {
    this.to('ec2:SearchLocalGatewayRoutes');
    return this;
  }

  /**
   * Grants permission to search for groups, sources, and members in a transit gateway multicast domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html
   */
  public toSearchTransitGatewayMulticastGroups() {
    this.to('ec2:SearchTransitGatewayMulticastGroups');
    return this;
  }

  /**
   * Grants permission to search for routes in a transit gateway route table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayRoutes.html
   */
  public toSearchTransitGatewayRoutes() {
    this.to('ec2:SearchTransitGatewayRoutes');
    return this;
  }

  /**
   * Grants permission to send a diagnostic interrupt to an Amazon EC2 instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SendDiagnosticInterrupt.html
   */
  public toSendDiagnosticInterrupt() {
    this.to('ec2:SendDiagnosticInterrupt');
    return this;
  }

  /**
   * Grants permission to start a stopped instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartInstances.html
   */
  public toStartInstances() {
    this.to('ec2:StartInstances');
    return this;
  }

  /**
   * Grants permission to start the private DNS verification process for a VPC endpoint service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartVpcEndpointServicePrivateDnsVerification.html
   */
  public toStartVpcEndpointServicePrivateDnsVerification() {
    this.to('ec2:StartVpcEndpointServicePrivateDnsVerification');
    return this;
  }

  /**
   * Grants permission to stop an Amazon EBS-backed instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StopInstances.html
   */
  public toStopInstances() {
    this.to('ec2:StopInstances');
    return this;
  }

  /**
   * Grants permission to terminate active Client VPN endpoint connections
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateClientVpnConnections.html
   */
  public toTerminateClientVpnConnections() {
    this.to('ec2:TerminateClientVpnConnections');
    return this;
  }

  /**
   * Grants permission to shut down one or more instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html
   */
  public toTerminateInstances() {
    this.to('ec2:TerminateInstances');
    return this;
  }

  /**
   * Grants permission to unassign one or more IPv6 addresses from a network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnassignIpv6Addresses.html
   */
  public toUnassignIpv6Addresses() {
    this.to('ec2:UnassignIpv6Addresses');
    return this;
  }

  /**
   * Grants permission to unassign one or more secondary private IP addresses from a network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnassignPrivateIpAddresses.html
   */
  public toUnassignPrivateIpAddresses() {
    this.to('ec2:UnassignPrivateIpAddresses');
    return this;
  }

  /**
   * Grants permission to disable detailed monitoring for a running instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnmonitorInstances.html
   */
  public toUnmonitorInstances() {
    this.to('ec2:UnmonitorInstances');
    return this;
  }

  /**
   * Grants permission to update descriptions for one or more outbound rules in a VPC security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UpdateSecurityGroupRuleDescriptionsEgress.html
   */
  public toUpdateSecurityGroupRuleDescriptionsEgress() {
    this.to('ec2:UpdateSecurityGroupRuleDescriptionsEgress');
    return this;
  }

  /**
   * Grants permission to update descriptions for one or more inbound rules in a security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UpdateSecurityGroupRuleDescriptionsIngress.html
   */
  public toUpdateSecurityGroupRuleDescriptionsIngress() {
    this.to('ec2:UpdateSecurityGroupRuleDescriptionsIngress');
    return this;
  }

  /**
   * Grants permission to stop advertising an address range that was provisioned for use in AWS through bring your own IP addresses (BYOIP)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html
   */
  public toWithdrawByoipCidr() {
    this.to('ec2:WithdrawByoipCidr');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptReservedInstancesExchangeQuote",
      "AcceptTransitGatewayPeeringAttachment",
      "AcceptTransitGatewayVpcAttachment",
      "AcceptVpcEndpointConnections",
      "AcceptVpcPeeringConnection",
      "AdvertiseByoipCidr",
      "AllocateAddress",
      "AllocateHosts",
      "ApplySecurityGroupsToClientVpnTargetNetwork",
      "AssignIpv6Addresses",
      "AssignPrivateIpAddresses",
      "AssociateAddress",
      "AssociateClientVpnTargetNetwork",
      "AssociateDhcpOptions",
      "AssociateIamInstanceProfile",
      "AssociateRouteTable",
      "AssociateSubnetCidrBlock",
      "AssociateTransitGatewayMulticastDomain",
      "AssociateTransitGatewayRouteTable",
      "AssociateVpcCidrBlock",
      "AttachClassicLinkVpc",
      "AttachInternetGateway",
      "AttachNetworkInterface",
      "AttachVolume",
      "AttachVpnGateway",
      "AuthorizeClientVpnIngress",
      "AuthorizeSecurityGroupEgress",
      "AuthorizeSecurityGroupIngress",
      "BundleInstance",
      "CancelBundleTask",
      "CancelCapacityReservation",
      "CancelConversionTask",
      "CancelExportTask",
      "CancelImportTask",
      "CancelReservedInstancesListing",
      "CancelSpotFleetRequests",
      "CancelSpotInstanceRequests",
      "ConfirmProductInstance",
      "CopyFpgaImage",
      "CopyImage",
      "CopySnapshot",
      "CreateCapacityReservation",
      "CreateCarrierGateway",
      "CreateClientVpnEndpoint",
      "CreateClientVpnRoute",
      "CreateCustomerGateway",
      "CreateDefaultSubnet",
      "CreateDefaultVpc",
      "CreateDhcpOptions",
      "CreateEgressOnlyInternetGateway",
      "CreateFleet",
      "CreateFlowLogs",
      "CreateFpgaImage",
      "CreateImage",
      "CreateInstanceExportTask",
      "CreateInternetGateway",
      "CreateKeyPair",
      "CreateLaunchTemplate",
      "CreateLaunchTemplateVersion",
      "CreateLocalGatewayRoute",
      "CreateLocalGatewayRouteTableVpcAssociation",
      "CreateManagedPrefixList",
      "CreateNatGateway",
      "CreateNetworkAcl",
      "CreateNetworkAclEntry",
      "CreateNetworkInterface",
      "CreatePlacementGroup",
      "CreateReservedInstancesListing",
      "CreateRoute",
      "CreateRouteTable",
      "CreateSecurityGroup",
      "CreateSnapshot",
      "CreateSnapshots",
      "CreateSpotDatafeedSubscription",
      "CreateSubnet",
      "CreateTrafficMirrorFilter",
      "CreateTrafficMirrorFilterRule",
      "CreateTrafficMirrorSession",
      "CreateTrafficMirrorTarget",
      "CreateTransitGateway",
      "CreateTransitGatewayMulticastDomain",
      "CreateTransitGatewayPeeringAttachment",
      "CreateTransitGatewayPrefixListReference",
      "CreateTransitGatewayRoute",
      "CreateTransitGatewayRouteTable",
      "CreateTransitGatewayVpcAttachment",
      "CreateVolume",
      "CreateVpc",
      "CreateVpcEndpoint",
      "CreateVpcEndpointConnectionNotification",
      "CreateVpcEndpointServiceConfiguration",
      "CreateVpcPeeringConnection",
      "CreateVpnConnection",
      "CreateVpnConnectionRoute",
      "CreateVpnGateway",
      "DeleteCarrierGateway",
      "DeleteClientVpnEndpoint",
      "DeleteClientVpnRoute",
      "DeleteCustomerGateway",
      "DeleteDhcpOptions",
      "DeleteEgressOnlyInternetGateway",
      "DeleteFleets",
      "DeleteFlowLogs",
      "DeleteFpgaImage",
      "DeleteInternetGateway",
      "DeleteKeyPair",
      "DeleteLaunchTemplate",
      "DeleteLaunchTemplateVersions",
      "DeleteLocalGatewayRoute",
      "DeleteLocalGatewayRouteTableVpcAssociation",
      "DeleteManagedPrefixList",
      "DeleteNatGateway",
      "DeleteNetworkAcl",
      "DeleteNetworkAclEntry",
      "DeleteNetworkInterface",
      "DeletePlacementGroup",
      "DeleteRoute",
      "DeleteRouteTable",
      "DeleteSecurityGroup",
      "DeleteSnapshot",
      "DeleteSpotDatafeedSubscription",
      "DeleteSubnet",
      "DeleteTrafficMirrorFilter",
      "DeleteTrafficMirrorFilterRule",
      "DeleteTrafficMirrorSession",
      "DeleteTrafficMirrorTarget",
      "DeleteTransitGateway",
      "DeleteTransitGatewayMulticastDomain",
      "DeleteTransitGatewayPeeringAttachment",
      "DeleteTransitGatewayPrefixListReference",
      "DeleteTransitGatewayRoute",
      "DeleteTransitGatewayRouteTable",
      "DeleteTransitGatewayVpcAttachment",
      "DeleteVolume",
      "DeleteVpc",
      "DeleteVpcEndpointConnectionNotifications",
      "DeleteVpcEndpointServiceConfigurations",
      "DeleteVpcEndpoints",
      "DeleteVpcPeeringConnection",
      "DeleteVpnConnection",
      "DeleteVpnConnectionRoute",
      "DeleteVpnGateway",
      "DeprovisionByoipCidr",
      "DeregisterImage",
      "DeregisterInstanceEventNotificationAttributes",
      "DeregisterTransitGatewayMulticastGroupMembers",
      "DeregisterTransitGatewayMulticastGroupSources",
      "DetachClassicLinkVpc",
      "DetachInternetGateway",
      "DetachNetworkInterface",
      "DetachVolume",
      "DetachVpnGateway",
      "DisableEbsEncryptionByDefault",
      "DisableFastSnapshotRestores",
      "DisableTransitGatewayRouteTablePropagation",
      "DisableVgwRoutePropagation",
      "DisableVpcClassicLink",
      "DisableVpcClassicLinkDnsSupport",
      "DisassociateAddress",
      "DisassociateClientVpnTargetNetwork",
      "DisassociateIamInstanceProfile",
      "DisassociateRouteTable",
      "DisassociateSubnetCidrBlock",
      "DisassociateTransitGatewayMulticastDomain",
      "DisassociateTransitGatewayRouteTable",
      "DisassociateVpcCidrBlock",
      "EnableEbsEncryptionByDefault",
      "EnableFastSnapshotRestores",
      "EnableTransitGatewayRouteTablePropagation",
      "EnableVgwRoutePropagation",
      "EnableVolumeIO",
      "EnableVpcClassicLink",
      "EnableVpcClassicLinkDnsSupport",
      "ExportImage",
      "ExportTransitGatewayRoutes",
      "ImportClientVpnClientCertificateRevocationList",
      "ImportImage",
      "ImportInstance",
      "ImportKeyPair",
      "ImportSnapshot",
      "ImportVolume",
      "ModifyCapacityReservation",
      "ModifyClientVpnEndpoint",
      "ModifyDefaultCreditSpecification",
      "ModifyEbsDefaultKmsKeyId",
      "ModifyFleet",
      "ModifyFpgaImageAttribute",
      "ModifyHosts",
      "ModifyIdFormat",
      "ModifyIdentityIdFormat",
      "ModifyImageAttribute",
      "ModifyInstanceAttribute",
      "ModifyInstanceCapacityReservationAttributes",
      "ModifyInstanceCreditSpecification",
      "ModifyInstanceEventStartTime",
      "ModifyInstanceMetadataOptions",
      "ModifyInstancePlacement",
      "ModifyLaunchTemplate",
      "ModifyManagedPrefixList",
      "ModifyNetworkInterfaceAttribute",
      "ModifyReservedInstances",
      "ModifySpotFleetRequest",
      "ModifySubnetAttribute",
      "ModifyTrafficMirrorFilterNetworkServices",
      "ModifyTrafficMirrorFilterRule",
      "ModifyTrafficMirrorSession",
      "ModifyTransitGateway",
      "ModifyTransitGatewayPrefixListReference",
      "ModifyTransitGatewayVpcAttachment",
      "ModifyVolume",
      "ModifyVolumeAttribute",
      "ModifyVpcAttribute",
      "ModifyVpcEndpoint",
      "ModifyVpcEndpointConnectionNotification",
      "ModifyVpcEndpointServiceConfiguration",
      "ModifyVpcPeeringConnectionOptions",
      "ModifyVpcTenancy",
      "ModifyVpnConnection",
      "ModifyVpnTunnelCertificate",
      "ModifyVpnTunnelOptions",
      "MonitorInstances",
      "MoveAddressToVpc",
      "ProvisionByoipCidr",
      "PurchaseHostReservation",
      "PurchaseReservedInstancesOffering",
      "PurchaseScheduledInstances",
      "RebootInstances",
      "RegisterImage",
      "RegisterInstanceEventNotificationAttributes",
      "RegisterTransitGatewayMulticastGroupMembers",
      "RegisterTransitGatewayMulticastGroupSources",
      "RejectTransitGatewayPeeringAttachment",
      "RejectTransitGatewayVpcAttachment",
      "RejectVpcEndpointConnections",
      "RejectVpcPeeringConnection",
      "ReleaseAddress",
      "ReleaseHosts",
      "ReplaceIamInstanceProfileAssociation",
      "ReplaceNetworkAclAssociation",
      "ReplaceNetworkAclEntry",
      "ReplaceRoute",
      "ReplaceRouteTableAssociation",
      "ReplaceTransitGatewayRoute",
      "ReportInstanceStatus",
      "RequestSpotFleet",
      "RequestSpotInstances",
      "ResetEbsDefaultKmsKeyId",
      "ResetFpgaImageAttribute",
      "ResetImageAttribute",
      "ResetInstanceAttribute",
      "ResetNetworkInterfaceAttribute",
      "RestoreAddressToClassic",
      "RestoreManagedPrefixListVersion",
      "RevokeClientVpnIngress",
      "RevokeSecurityGroupEgress",
      "RevokeSecurityGroupIngress",
      "RunInstances",
      "RunScheduledInstances",
      "SendDiagnosticInterrupt",
      "StartInstances",
      "StartVpcEndpointServicePrivateDnsVerification",
      "StopInstances",
      "TerminateClientVpnConnections",
      "TerminateInstances",
      "UnassignIpv6Addresses",
      "UnassignPrivateIpAddresses",
      "UnmonitorInstances",
      "UpdateSecurityGroupRuleDescriptionsEgress",
      "UpdateSecurityGroupRuleDescriptionsIngress",
      "WithdrawByoipCidr"
    ],
    "Permissions management": [
      "CreateNetworkInterfacePermission",
      "DeleteNetworkInterfacePermission",
      "ModifySnapshotAttribute",
      "ModifyVpcEndpointServicePermissions",
      "ResetSnapshotAttribute"
    ],
    "Tagging": [
      "CreateTags",
      "DeleteTags"
    ],
    "List": [
      "DescribeAccountAttributes",
      "DescribeAddresses",
      "DescribeAggregateIdFormat",
      "DescribeAvailabilityZones",
      "DescribeBundleTasks",
      "DescribeByoipCidrs",
      "DescribeCapacityReservations",
      "DescribeCarrierGateways",
      "DescribeClassicLinkInstances",
      "DescribeClientVpnAuthorizationRules",
      "DescribeClientVpnConnections",
      "DescribeClientVpnEndpoints",
      "DescribeClientVpnRoutes",
      "DescribeClientVpnTargetNetworks",
      "DescribeCoipPools",
      "DescribeConversionTasks",
      "DescribeCustomerGateways",
      "DescribeDhcpOptions",
      "DescribeEgressOnlyInternetGateways",
      "DescribeExportImageTasks",
      "DescribeExportTasks",
      "DescribeFleetHistory",
      "DescribeFleetInstances",
      "DescribeFleets",
      "DescribeFlowLogs",
      "DescribeFpgaImageAttribute",
      "DescribeFpgaImages",
      "DescribeHostReservationOfferings",
      "DescribeHostReservations",
      "DescribeHosts",
      "DescribeIamInstanceProfileAssociations",
      "DescribeIdFormat",
      "DescribeIdentityIdFormat",
      "DescribeImageAttribute",
      "DescribeImages",
      "DescribeImportImageTasks",
      "DescribeImportSnapshotTasks",
      "DescribeInstanceAttribute",
      "DescribeInstanceCreditSpecifications",
      "DescribeInstanceEventNotificationAttributes",
      "DescribeInstanceStatus",
      "DescribeInstanceTypeOfferings",
      "DescribeInstanceTypes",
      "DescribeInstances",
      "DescribeInternetGateways",
      "DescribeKeyPairs",
      "DescribeLaunchTemplateVersions",
      "DescribeLaunchTemplates",
      "DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations",
      "DescribeLocalGatewayRouteTableVpcAssociations",
      "DescribeLocalGatewayRouteTables",
      "DescribeLocalGatewayVirtualInterfaceGroups",
      "DescribeLocalGatewayVirtualInterfaces",
      "DescribeLocalGateways",
      "DescribeManagedPrefixLists",
      "DescribeMovingAddresses",
      "DescribeNatGateways",
      "DescribeNetworkAcls",
      "DescribeNetworkInterfaceAttribute",
      "DescribeNetworkInterfacePermissions",
      "DescribeNetworkInterfaces",
      "DescribePlacementGroups",
      "DescribePrefixLists",
      "DescribePrincipalIdFormat",
      "DescribePublicIpv4Pools",
      "DescribeRegions",
      "DescribeReservedInstances",
      "DescribeReservedInstancesListings",
      "DescribeReservedInstancesModifications",
      "DescribeReservedInstancesOfferings",
      "DescribeRouteTables",
      "DescribeSecurityGroupReferences",
      "DescribeSecurityGroups",
      "DescribeSnapshotAttribute",
      "DescribeSnapshots",
      "DescribeSpotDatafeedSubscription",
      "DescribeSpotFleetInstances",
      "DescribeSpotFleetRequestHistory",
      "DescribeSpotFleetRequests",
      "DescribeSpotInstanceRequests",
      "DescribeSpotPriceHistory",
      "DescribeStaleSecurityGroups",
      "DescribeSubnets",
      "DescribeTrafficMirrorFilters",
      "DescribeTrafficMirrorSessions",
      "DescribeTrafficMirrorTargets",
      "DescribeTransitGatewayAttachments",
      "DescribeTransitGatewayMulticastDomains",
      "DescribeTransitGatewayPeeringAttachments",
      "DescribeTransitGatewayRouteTables",
      "DescribeTransitGatewayVpcAttachments",
      "DescribeTransitGateways",
      "DescribeVolumeAttribute",
      "DescribeVolumeStatus",
      "DescribeVolumes",
      "DescribeVpcAttribute",
      "DescribeVpcClassicLink",
      "DescribeVpcClassicLinkDnsSupport",
      "DescribeVpcEndpointConnectionNotifications",
      "DescribeVpcEndpointConnections",
      "DescribeVpcEndpointServiceConfigurations",
      "DescribeVpcEndpointServicePermissions",
      "DescribeVpcEndpointServices",
      "DescribeVpcEndpoints",
      "DescribeVpcPeeringConnections",
      "DescribeVpcs",
      "DescribeVpnGateways",
      "ExportClientVpnClientCertificateRevocationList",
      "ExportClientVpnClientConfiguration",
      "GetTransitGatewayAttachmentPropagations",
      "GetTransitGatewayMulticastDomainAssociations",
      "GetTransitGatewayPrefixListReferences",
      "GetTransitGatewayRouteTableAssociations",
      "GetTransitGatewayRouteTablePropagations",
      "SearchLocalGatewayRoutes",
      "SearchTransitGatewayMulticastGroups",
      "SearchTransitGatewayRoutes"
    ],
    "Read": [
      "DescribeElasticGpus",
      "DescribeFastSnapshotRestores",
      "DescribeScheduledInstanceAvailability",
      "DescribeScheduledInstances",
      "DescribeTags",
      "DescribeVolumesModifications",
      "DescribeVpnConnections",
      "GetCapacityReservationUsage",
      "GetCoipPoolUsage",
      "GetConsoleOutput",
      "GetConsoleScreenshot",
      "GetDefaultCreditSpecification",
      "GetEbsDefaultKmsKeyId",
      "GetEbsEncryptionByDefault",
      "GetHostReservationPurchasePreview",
      "GetLaunchTemplateData",
      "GetManagedPrefixListAssociations",
      "GetManagedPrefixListEntries",
      "GetPasswordData",
      "GetReservedInstancesExchangeQuote"
    ]
  };

  /**
   * Adds a resource of type capacity-reservation to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html
   *
   * @param capacityReservationId - Identifier for the capacityReservationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onCapacityReservation(capacityReservationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:capacity-reservation/${CapacityReservationId}';
    arn = arn.replace('${CapacityReservationId}', capacityReservationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type carrier-gateway to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/Carrier_Gateway.html
   *
   * @param carrierGatewayId - Identifier for the carrierGatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onCarrierGateway(carrierGatewayId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:carrier-gateway/${CarrierGatewayId}';
    arn = arn.replace('${CarrierGatewayId}', carrierGatewayId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type client-vpn-endpoint to the statement
   *
   * https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html
   *
   * @param clientVpnEndpointId - Identifier for the clientVpnEndpointId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onClientVpnEndpoint(clientVpnEndpointId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:client-vpn-endpoint/${ClientVpnEndpointId}';
    arn = arn.replace('${ClientVpnEndpointId}', clientVpnEndpointId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type customer-gateway to the statement
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html
   *
   * @param customerGatewayId - Identifier for the customerGatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onCustomerGateway(customerGatewayId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:customer-gateway/${CustomerGatewayId}';
    arn = arn.replace('${CustomerGatewayId}', customerGatewayId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dedicated-host to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html
   *
   * @param hostId - Identifier for the hostId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAutoPlacement()
   * - .ifAvailabilityZone()
   * - .ifHostRecovery()
   * - .ifInstanceType()
   * - .ifQuantity()
   * - .ifResourceTag()
   */
  public onDedicatedHost(hostId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:dedicated-host/${HostId}';
    arn = arn.replace('${HostId}', hostId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dhcp-options to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html
   *
   * @param dhcpOptionsId - Identifier for the dhcpOptionsId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onDhcpOptions(dhcpOptionsId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:dhcp-options/${DhcpOptionsId}';
    arn = arn.replace('${DhcpOptionsId}', dhcpOptionsId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type egress-only-internet-gateway to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html
   *
   * @param egressOnlyInternetGatewayId - Identifier for the egressOnlyInternetGatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onEgressOnlyInternetGateway(egressOnlyInternetGatewayId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:egress-only-internet-gateway/${EgressOnlyInternetGatewayId}';
    arn = arn.replace('${EgressOnlyInternetGatewayId}', egressOnlyInternetGatewayId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type elastic-gpu to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-gpus.html
   *
   * @param elasticGpuId - Identifier for the elasticGpuId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifElasticGpuType()
   */
  public onElasticGpu(elasticGpuId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:elastic-gpu/${ElasticGpuId}';
    arn = arn.replace('${ElasticGpuId}', elasticGpuId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type elastic-inference to the statement
   *
   * https://docs.aws.amazon.com/elastic-inference/latest/developerguide/what-is-ei.html
   *
   * @param elasticInferenceAcceleratorId - Identifier for the elasticInferenceAcceleratorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onElasticInference(elasticInferenceAcceleratorId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elastic-inference:${Region}:${Account}:elastic-inference-accelerator/${ElasticInferenceAcceleratorId}';
    arn = arn.replace('${ElasticInferenceAcceleratorId}', elasticInferenceAcceleratorId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type export-instance-task to the statement
   *
   * https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html
   *
   * @param exportTaskId - Identifier for the exportTaskId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onExportInstanceTask(exportTaskId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:export-instance-task/${ExportTaskId}';
    arn = arn.replace('${ExportTaskId}', exportTaskId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type fleet to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html
   *
   * @param fleetId - Identifier for the fleetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onFleet(fleetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:fleet/${FleetId}';
    arn = arn.replace('${FleetId}', fleetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type fpga-image to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param fpgaImageId - Identifier for the fpgaImageId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifOwner()
   * - .ifPublic()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onFpgaImage(fpgaImageId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}::fpga-image/${FpgaImageId}';
    arn = arn.replace('${FpgaImageId}', fpgaImageId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type image to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html
   *
   * @param imageId - Identifier for the imageId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifImageType()
   * - .ifOwner()
   * - .ifPublic()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifRootDeviceType()
   */
  public onImage(imageId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}::image/${ImageId}';
    arn = arn.replace('${ImageId}', imageId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type instance to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Instances.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAvailabilityZone()
   * - .ifEbsOptimized()
   * - .ifInstanceProfile()
   * - .ifInstanceType()
   * - .ifPlacementGroup()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifRootDeviceType()
   * - .ifTenancy()
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:instance/${InstanceId}';
    arn = arn.replace('${InstanceId}', instanceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type internet-gateway to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html
   *
   * @param internetGatewayId - Identifier for the internetGatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onInternetGateway(internetGatewayId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:internet-gateway/${InternetGatewayId}';
    arn = arn.replace('${InternetGatewayId}', internetGatewayId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type key-pair to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html
   *
   * @param keyPairName - Identifier for the keyPairName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onKeyPair(keyPairName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:key-pair/${KeyPairName}';
    arn = arn.replace('${KeyPairName}', keyPairName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type launch-template to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html
   *
   * @param launchTemplateId - Identifier for the launchTemplateId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onLaunchTemplate(launchTemplateId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:launch-template/${LaunchTemplateId}';
    arn = arn.replace('${LaunchTemplateId}', launchTemplateId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type local-gateway to the statement
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html
   *
   * @param localGatewayId - Identifier for the localGatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onLocalGateway(localGatewayId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:local-gateway/${LocalGatewayId}';
    arn = arn.replace('${LocalGatewayId}', localGatewayId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type local-gateway-route-table to the statement
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html
   *
   * @param localGatewayRouteTableId - Identifier for the localGatewayRouteTableId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onLocalGatewayRouteTable(localGatewayRouteTableId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:local-gateway-route-table/${LocalGatewayRouteTableId}';
    arn = arn.replace('${LocalGatewayRouteTableId}', localGatewayRouteTableId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type local-gateway-route-table-virtual-interface-group-association to the statement
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html
   *
   * @param localGatewayRouteTableVirtualInterfaceGroupAssociationId - Identifier for the localGatewayRouteTableVirtualInterfaceGroupAssociationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onLocalGatewayRouteTableVirtualInterfaceGroupAssociation(localGatewayRouteTableVirtualInterfaceGroupAssociationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:local-gateway-route-table-virtual-interface-group-association/${LocalGatewayRouteTableVirtualInterfaceGroupAssociationId}';
    arn = arn.replace('${LocalGatewayRouteTableVirtualInterfaceGroupAssociationId}', localGatewayRouteTableVirtualInterfaceGroupAssociationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type local-gateway-route-table-vpc-association to the statement
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html
   *
   * @param localGatewayRouteTableVpcAssociationId - Identifier for the localGatewayRouteTableVpcAssociationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onLocalGatewayRouteTableVpcAssociation(localGatewayRouteTableVpcAssociationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:local-gateway-route-table-vpc-association/${LocalGatewayRouteTableVpcAssociationId}';
    arn = arn.replace('${LocalGatewayRouteTableVpcAssociationId}', localGatewayRouteTableVpcAssociationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type local-gateway-virtual-interface to the statement
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html
   *
   * @param localGatewayVirtualInterfaceId - Identifier for the localGatewayVirtualInterfaceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onLocalGatewayVirtualInterface(localGatewayVirtualInterfaceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:local-gateway-virtual-interface/${LocalGatewayVirtualInterfaceId}';
    arn = arn.replace('${LocalGatewayVirtualInterfaceId}', localGatewayVirtualInterfaceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type local-gateway-virtual-interface-group to the statement
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html
   *
   * @param localGatewayVirtualInterfaceGroupId - Identifier for the localGatewayVirtualInterfaceGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onLocalGatewayVirtualInterfaceGroup(localGatewayVirtualInterfaceGroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:local-gateway-virtual-interface-group/${LocalGatewayVirtualInterfaceGroupId}';
    arn = arn.replace('${LocalGatewayVirtualInterfaceGroupId}', localGatewayVirtualInterfaceGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type natgateway to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html
   *
   * @param natGatewayId - Identifier for the natGatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onNatgateway(natGatewayId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:natgateway/${NatGatewayId}';
    arn = arn.replace('${NatGatewayId}', natGatewayId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type network-acl to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html
   *
   * @param naclId - Identifier for the naclId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifVpc()
   */
  public onNetworkAcl(naclId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:network-acl/${NaclId}';
    arn = arn.replace('${NaclId}', naclId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type network-interface to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html
   *
   * @param networkInterfaceId - Identifier for the networkInterfaceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAssociatePublicIpAddress()
   * - .ifAuthorizedService()
   * - .ifAvailabilityZone()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifSubnet()
   * - .ifVpc()
   */
  public onNetworkInterface(networkInterfaceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:network-interface/${NetworkInterfaceId}';
    arn = arn.replace('${NetworkInterfaceId}', networkInterfaceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type placement-group to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html
   *
   * @param placementGroupName - Identifier for the placementGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifPlacementGroupStrategy()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onPlacementGroup(placementGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:placement-group/${PlacementGroupName}';
    arn = arn.replace('${PlacementGroupName}', placementGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type prefix-list to the statement
   *
   * @param prefixListId - Identifier for the prefixListId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onPrefixList(prefixListId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:prefix-list/${PrefixListId}';
    arn = arn.replace('${PrefixListId}', prefixListId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type reserved-instances to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html
   *
   * @param reservationId - Identifier for the reservationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAvailabilityZone()
   * - .ifInstanceType()
   * - .ifRegion()
   * - .ifReservedInstancesOfferingType()
   * - .ifResourceTag()
   * - .ifTenancy()
   */
  public onReservedInstances(reservationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:reserved-instances/${ReservationId}';
    arn = arn.replace('${ReservationId}', reservationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type route-table to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html
   *
   * @param routeTableId - Identifier for the routeTableId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifVpc()
   */
  public onRouteTable(routeTableId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:route-table/${RouteTableId}';
    arn = arn.replace('${RouteTableId}', routeTableId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type security-group to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html
   *
   * @param securityGroupId - Identifier for the securityGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifVpc()
   */
  public onSecurityGroup(securityGroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:security-group/${SecurityGroupId}';
    arn = arn.replace('${SecurityGroupId}', securityGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type snapshot to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html
   *
   * @param snapshotId - Identifier for the snapshotId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifOwner()
   * - .ifParentVolume()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifSnapshotTime()
   * - .ifVolumeSize()
   */
  public onSnapshot(snapshotId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}::snapshot/${SnapshotId}';
    arn = arn.replace('${SnapshotId}', snapshotId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type spot-instance-request to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html
   *
   * @param spotInstanceRequestId - Identifier for the spotInstanceRequestId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onSpotInstanceRequest(spotInstanceRequestId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:spot-instances-request/${SpotInstanceRequestId}';
    arn = arn.replace('${SpotInstanceRequestId}', spotInstanceRequestId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type subnet to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html
   *
   * @param subnetId - Identifier for the subnetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAvailabilityZone()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifVpc()
   */
  public onSubnet(subnetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:subnet/${SubnetId}';
    arn = arn.replace('${SubnetId}', subnetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type traffic-mirror-session to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-session.html
   *
   * @param trafficMirrorSessionId - Identifier for the trafficMirrorSessionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onTrafficMirrorSession(trafficMirrorSessionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:traffic-mirror-session/${TrafficMirrorSessionId}';
    arn = arn.replace('${TrafficMirrorSessionId}', trafficMirrorSessionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type traffic-mirror-target to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-target.html
   *
   * @param trafficMirrorTargetId - Identifier for the trafficMirrorTargetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onTrafficMirrorTarget(trafficMirrorTargetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:traffic-mirror-target/${TrafficMirrorTargetId}';
    arn = arn.replace('${TrafficMirrorTargetId}', trafficMirrorTargetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type traffic-mirror-filter to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-filter.html
   *
   * @param trafficMirrorFilterId - Identifier for the trafficMirrorFilterId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onTrafficMirrorFilter(trafficMirrorFilterId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:traffic-mirror-filter/${TrafficMirrorFilterId}';
    arn = arn.replace('${TrafficMirrorFilterId}', trafficMirrorFilterId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type traffic-mirror-filter-rule to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-filter.html
   *
   * @param trafficMirrorFilterRuleId - Identifier for the trafficMirrorFilterRuleId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifRegion()
   */
  public onTrafficMirrorFilterRule(trafficMirrorFilterRuleId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:traffic-mirror-filter-rule/${TrafficMirrorFilterRuleId}';
    arn = arn.replace('${TrafficMirrorFilterRuleId}', trafficMirrorFilterRuleId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type transit-gateway-attachment to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html
   *
   * @param transitGatewayAttachmentId - Identifier for the transitGatewayAttachmentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onTransitGatewayAttachment(transitGatewayAttachmentId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:transit-gateway-attachment/${TransitGatewayAttachmentId}';
    arn = arn.replace('${TransitGatewayAttachmentId}', transitGatewayAttachmentId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type transit-gateway-multicast-domain to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/tgw-multicast-overview.html
   *
   * @param transitGatewayMulticastDomainId - Identifier for the transitGatewayMulticastDomainId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onTransitGatewayMulticastDomain(transitGatewayMulticastDomainId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:transit-gateway-multicast-domain/${TransitGatewayMulticastDomainId}';
    arn = arn.replace('${TransitGatewayMulticastDomainId}', transitGatewayMulticastDomainId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type transit-gateway-route-table to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html
   *
   * @param transitGatewayRouteTableId - Identifier for the transitGatewayRouteTableId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onTransitGatewayRouteTable(transitGatewayRouteTableId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:transit-gateway-route-table/${TransitGatewayRouteTableId}';
    arn = arn.replace('${TransitGatewayRouteTableId}', transitGatewayRouteTableId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type transit-gateway to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html
   *
   * @param transitGatewayId - Identifier for the transitGatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onTransitGateway(transitGatewayId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:transit-gateway/${TransitGatewayId}';
    arn = arn.replace('${TransitGatewayId}', transitGatewayId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type volume to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes.html
   *
   * @param volumeId - Identifier for the volumeId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAvailabilityZone()
   * - .ifEncrypted()
   * - .ifParentSnapshot()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifVolumeIops()
   * - .ifVolumeSize()
   * - .ifVolumeType()
   */
  public onVolume(volumeId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:volume/${VolumeId}';
    arn = arn.replace('${VolumeId}', volumeId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type vpc to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html
   *
   * @param vpcId - Identifier for the vpcId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifTenancy()
   */
  public onVpc(vpcId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:vpc/${VpcId}';
    arn = arn.replace('${VpcId}', vpcId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type vpc-endpoint to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html
   *
   * @param vpceId - Identifier for the vpceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifVpceServiceName()
   * - .ifVpceServiceOwner()
   */
  public onVpcEndpoint(vpceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:vpc-endpoint/${VpceId}';
    arn = arn.replace('${VpceId}', vpceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type vpc-endpoint-service to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html
   *
   * @param vpceServiceId - Identifier for the vpceServiceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifVpceServicePrivateDnsName()
   */
  public onVpcEndpointService(vpceServiceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:vpc-endpoint-service/${VpceServiceId}';
    arn = arn.replace('${VpceServiceId}', vpceServiceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type vpc-flow-log to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html
   *
   * @param vpcFlowLogId - Identifier for the vpcFlowLogId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onVpcFlowLog(vpcFlowLogId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:vpc-flow-log/${VpcFlowLogId}';
    arn = arn.replace('${VpcFlowLogId}', vpcFlowLogId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type vpc-peering-connection to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html
   *
   * @param vpcPeeringConnectionId - Identifier for the vpcPeeringConnectionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAccepterVpc()
   * - .ifRegion()
   * - .ifRequesterVpc()
   * - .ifResourceTag()
   */
  public onVpcPeeringConnection(vpcPeeringConnectionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:vpc-peering-connection/${VpcPeeringConnectionId}';
    arn = arn.replace('${VpcPeeringConnectionId}', vpcPeeringConnectionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type vpn-connection to the statement
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html
   *
   * @param vpnConnectionId - Identifier for the vpnConnectionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAuthenticationType()
   * - .ifDPDTimeoutSeconds()
   * - .ifGatewayType()
   * - .ifIKEVersions()
   * - .ifInsideTunnelCidr()
   * - .ifPhase1DHGroupNumbers()
   * - .ifPhase1EncryptionAlgorithms()
   * - .ifPhase1IntegrityAlgorithms()
   * - .ifPhase1LifetimeSeconds()
   * - .ifPhase2DHGroupNumbers()
   * - .ifPhase2EncryptionAlgorithms()
   * - .ifPhase2IntegrityAlgorithms()
   * - .ifPhase2LifetimeSeconds()
   * - .ifPresharedKeys()
   * - .ifRegion()
   * - .ifRekeyFuzzPercentage()
   * - .ifRekeyMarginTimeSeconds()
   * - .ifResourceTag()
   * - .ifRoutingType()
   */
  public onVpnConnection(vpnConnectionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:vpn-connection/${VpnConnectionId}';
    arn = arn.replace('${VpnConnectionId}', vpnConnectionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type vpn-gateway to the statement
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html
   *
   * @param vpnGatewayId - Identifier for the vpnGatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onVpnGateway(vpnGatewayId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:vpn-gateway/${VpnGatewayId}';
    arn = arn.replace('${VpnGatewayId}', vpnGatewayId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the ARN of an accepter VPC in a VPC peering connection
   *
   * https://docs.aws.amazon.com/vpc/latest/peering/security-iam.html
   *
   * Applies to actions:
   * - .toAcceptVpcPeeringConnection()
   * - .toCreateVpcPeeringConnection()
   * - .toDeleteVpcPeeringConnection()
   * - .toRejectVpcPeeringConnection()
   *
   * Applies to resource types:
   * - vpc-peering-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifAccepterVpc(value: string | string[], operator?: string) {
    return this.if(`ec2:AccepterVpc`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by whether the user wants to associate a public IP address with the instance
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - network-interface
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAssociatePublicIpAddress(value?: boolean) {
    return this.if(`ec2:AssociatePublicIpAddress`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the authentication type for the VPN tunnel endpoints
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthenticationType(value: string | string[], operator?: string) {
    return this.if(`ec2:AuthenticationType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the AWS service that has permission to use a resource
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateNetworkInterfacePermission()
   *
   * Applies to resource types:
   * - network-interface
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthorizedService(value: string | string[], operator?: string) {
    return this.if(`ec2:AuthorizedService`, value, operator || 'StringLike');
  }

  /**
   * Filters access by an IAM principal that has permission to use a resource
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateNetworkInterfacePermission()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthorizedUser(value: string | string[], operator?: string) {
    return this.if(`ec2:AuthorizedUser`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the Auto Placement properties of a Dedicated Host
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to resource types:
   * - dedicated-host
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAutoPlacement(value: string | string[], operator?: string) {
    return this.if(`ec2:AutoPlacement`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the name of an Availability Zone in an AWS Region
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachVolume()
   * - .toCreateFlowLogs()
   * - .toCreateNetworkInterfacePermission()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toCreateVolume()
   * - .toDeleteVolume()
   * - .toDetachClassicLinkVpc()
   * - .toDetachVolume()
   * - .toDisableFastSnapshotRestores()
   * - .toDisassociateIamInstanceProfile()
   * - .toEnableFastSnapshotRestores()
   * - .toGetConsoleScreenshot()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   *
   * Applies to resource types:
   * - dedicated-host
   * - instance
   * - network-interface
   * - reserved-instances
   * - subnet
   * - volume
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAvailabilityZone(value: string | string[], operator?: string) {
    return this.if(`ec2:AvailabilityZone`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the name of a resource-creating API action
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/supported-iam-actions-tagging.html
   *
   * Applies to actions:
   * - .toCreateTags()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCreateAction(value: string | string[], operator?: string) {
    return this.if(`ec2:CreateAction`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the duration after which DPD timeout occurs on a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifDPDTimeoutSeconds(value: number | number[], operator?: string) {
    return this.if(`ec2:DPDTimeoutSeconds`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by whether the instance is enabled for EBS optimization
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachVolume()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toDetachClassicLinkVpc()
   * - .toDetachVolume()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleScreenshot()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   *
   * Applies to resource types:
   * - instance
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEbsOptimized(value?: boolean) {
    return this.if(`ec2:EbsOptimized`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the type of Elastic Graphics accelerator
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - elastic-gpu
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifElasticGpuType(value: string | string[], operator?: string) {
    return this.if(`ec2:ElasticGpuType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether the EBS volume is encrypted
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAttachVolume()
   * - .toCreateSnapshot()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toCreateVolume()
   * - .toDeleteVolume()
   * - .toDetachVolume()
   * - .toDisableFastSnapshotRestores()
   * - .toEnableFastSnapshotRestores()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - volume
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEncrypted(value?: boolean) {
    return this.if(`ec2:Encrypted`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the gateway type for a VPN endpoint on the AWS side of a VPN connection
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGatewayType(value: string | string[], operator?: string) {
    return this.if(`ec2:GatewayType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether host recovery is enabled for a Dedicated Host
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to resource types:
   * - dedicated-host
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifHostRecovery(value: string | string[], operator?: string) {
    return this.if(`ec2:HostRecovery`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the internet key exchange (IKE) versions that are permitted for a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIKEVersions(value: string | string[], operator?: string) {
    return this.if(`ec2:IKEVersions`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the type of image (machine, aki, or ari)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - image
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifImageType(value: string | string[], operator?: string) {
    return this.if(`ec2:ImageType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the range of inside IP addresses for a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInsideTunnelCidr(value: string | string[], operator?: string) {
    return this.if(`ec2:InsideTunnelCidr`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the market or purchasing option of an instance (on-demand or spot)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstanceMarketType(value: string | string[], operator?: string) {
    return this.if(`ec2:InstanceMarketType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of an instance profile
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachVolume()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toDetachClassicLinkVpc()
   * - .toDetachVolume()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleScreenshot()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   *
   * Applies to resource types:
   * - instance
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifInstanceProfile(value: string | string[], operator?: string) {
    return this.if(`ec2:InstanceProfile`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by the type of instance
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachVolume()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toDetachClassicLinkVpc()
   * - .toDetachVolume()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleScreenshot()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   *
   * Applies to resource types:
   * - dedicated-host
   * - instance
   * - reserved-instances
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstanceType(value: string | string[], operator?: string) {
    return this.if(`ec2:InstanceType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether users are able to override resources that are specified in the launch template
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toRunInstances()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifIsLaunchTemplateResource(value?: boolean) {
    return this.if(`ec2:IsLaunchTemplateResource`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the ARN of a launch template
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toRunInstances()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifLaunchTemplate(value: string | string[], operator?: string) {
    return this.if(`ec2:LaunchTemplate`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by whether the HTTP endpoint is enabled for the instance metadata service
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toRunInstances()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMetadataHttpEndpoint(value: string | string[], operator?: string) {
    return this.if(`ec2:MetadataHttpEndpoint`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the allowed number of hops when calling the instance metadata service
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toRunInstances()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifMetadataHttpPutResponseHopLimit(value: number | number[], operator?: string) {
    return this.if(`ec2:MetadataHttpPutResponseHopLimit`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by whether tokens are required when calling the instance metadata service (optional or required)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toRunInstances()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMetadataHttpTokens(value: string | string[], operator?: string) {
    return this.if(`ec2:MetadataHttpTokens`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the owner of the resource (amazon, aws-marketplace, or an AWS account ID)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toDeleteSnapshot()
   * - .toDisableFastSnapshotRestores()
   * - .toEnableFastSnapshotRestores()
   * - .toModifySnapshotAttribute()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - fpga-image
   * - image
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOwner(value: string | string[], operator?: string) {
    return this.if(`ec2:Owner`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of the parent snapshot
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAttachVolume()
   * - .toCreateTags()
   * - .toCreateVolume()
   * - .toDeleteVolume()
   * - .toDetachVolume()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - volume
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifParentSnapshot(value: string | string[], operator?: string) {
    return this.if(`ec2:ParentSnapshot`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by the ARN of the parent volume from which the snapshot was created
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateSnapshot()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toDeleteSnapshot()
   * - .toDisableFastSnapshotRestores()
   * - .toEnableFastSnapshotRestores()
   * - .toModifySnapshotAttribute()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifParentVolume(value: string | string[], operator?: string) {
    return this.if(`ec2:ParentVolume`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by the type of permission for a resource (INSTANCE-ATTACH or EIP-ASSOCIATE)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateNetworkInterfacePermission()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPermission(value: string | string[], operator?: string) {
    return this.if(`ec2:Permission`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the Diffie-Hellman group numbers that are permitted for a VPN tunnel for the phase 1 IKE negotiations
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifPhase1DHGroupNumbers(value: number | number[], operator?: string) {
    return this.if(`ec2:Phase1DHGroupNumbers`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the encryption algorithms that are permitted for a VPN tunnel for the phase 1 IKE negotiations
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.htmls
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPhase1EncryptionAlgorithms(value: string | string[], operator?: string) {
    return this.if(`ec2:Phase1EncryptionAlgorithms`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the integrity algorithms that are permitted for a VPN tunnel for the phase 1 IKE negotiations
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPhase1IntegrityAlgorithms(value: string | string[], operator?: string) {
    return this.if(`ec2:Phase1IntegrityAlgorithms`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the lifetime in seconds for phase 1 of the IKE negotiations for a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifPhase1LifetimeSeconds(value: number | number[], operator?: string) {
    return this.if(`ec2:Phase1LifetimeSeconds`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the Diffie-Hellman group numbers that are permitted for a VPN tunnel for the phase 2 IKE negotiations
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifPhase2DHGroupNumbers(value: number | number[], operator?: string) {
    return this.if(`ec2:Phase2DHGroupNumbers`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the encryption algorithms that are permitted for a VPN tunnel for the phase 2 IKE negotiations
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPhase2EncryptionAlgorithms(value: string | string[], operator?: string) {
    return this.if(`ec2:Phase2EncryptionAlgorithms`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the integrity algorithms that are permitted for a VPN tunnel for the phase 2 IKE negotiations
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPhase2IntegrityAlgorithms(value: string | string[], operator?: string) {
    return this.if(`ec2:Phase2IntegrityAlgorithms`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the lifetime in seconds for phase 2 of the IKE negotiations for a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifPhase2LifetimeSeconds(value: number | number[], operator?: string) {
    return this.if(`ec2:Phase2LifetimeSeconds`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the ARN of the placement group
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachVolume()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toDetachClassicLinkVpc()
   * - .toDetachVolume()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleScreenshot()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   *
   * Applies to resource types:
   * - instance
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifPlacementGroup(value: string | string[], operator?: string) {
    return this.if(`ec2:PlacementGroup`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by the instance placement strategy used by the placement group (cluster, spread, or partition)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - placement-group
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPlacementGroupStrategy(value: string | string[], operator?: string) {
    return this.if(`ec2:PlacementGroupStrategy`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the pre-shared key (PSK) used to establish the initial IKE security association between a virtual private gateway and a customer gateway
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPresharedKeys(value: string | string[], operator?: string) {
    return this.if(`ec2:PresharedKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the product code that is associated with the AMI
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProductCode(value: string | string[], operator?: string) {
    return this.if(`ec2:ProductCode`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether the image has public launch permissions
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - fpga-image
   * - image
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifPublic(value?: boolean) {
    return this.if(`ec2:Public`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the number of Dedicated Hosts in a request
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to resource types:
   * - dedicated-host
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifQuantity(value: number | number[], operator?: string) {
    return this.if(`ec2:Quantity`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the name of the AWS Region
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAcceptTransitGatewayPeeringAttachment()
   * - .toAcceptTransitGatewayVpcAttachment()
   * - .toAcceptVpcEndpointConnections()
   * - .toAcceptVpcPeeringConnection()
   * - .toApplySecurityGroupsToClientVpnTargetNetwork()
   * - .toAssociateClientVpnTargetNetwork()
   * - .toAssociateIamInstanceProfile()
   * - .toAssociateTransitGatewayMulticastDomain()
   * - .toAssociateTransitGatewayRouteTable()
   * - .toAttachClassicLinkVpc()
   * - .toAttachVolume()
   * - .toAuthorizeClientVpnIngress()
   * - .toAuthorizeSecurityGroupEgress()
   * - .toAuthorizeSecurityGroupIngress()
   * - .toCancelCapacityReservation()
   * - .toCopySnapshot()
   * - .toCreateCapacityReservation()
   * - .toCreateCarrierGateway()
   * - .toCreateClientVpnEndpoint()
   * - .toCreateClientVpnRoute()
   * - .toCreateDhcpOptions()
   * - .toCreateEgressOnlyInternetGateway()
   * - .toCreateFleet()
   * - .toCreateFlowLogs()
   * - .toCreateFpgaImage()
   * - .toCreateInstanceExportTask()
   * - .toCreateInternetGateway()
   * - .toCreateKeyPair()
   * - .toCreateLaunchTemplate()
   * - .toCreateLaunchTemplateVersion()
   * - .toCreateLocalGatewayRoute()
   * - .toCreateLocalGatewayRouteTableVpcAssociation()
   * - .toCreateManagedPrefixList()
   * - .toCreateNatGateway()
   * - .toCreateNetworkAcl()
   * - .toCreateNetworkInterface()
   * - .toCreateNetworkInterfacePermission()
   * - .toCreatePlacementGroup()
   * - .toCreateRoute()
   * - .toCreateSecurityGroup()
   * - .toCreateSnapshot()
   * - .toCreateSnapshots()
   * - .toCreateSubnet()
   * - .toCreateTags()
   * - .toCreateTrafficMirrorFilter()
   * - .toCreateTrafficMirrorFilterRule()
   * - .toCreateTrafficMirrorSession()
   * - .toCreateTrafficMirrorTarget()
   * - .toCreateTransitGateway()
   * - .toCreateTransitGatewayMulticastDomain()
   * - .toCreateTransitGatewayPeeringAttachment()
   * - .toCreateTransitGatewayPrefixListReference()
   * - .toCreateTransitGatewayRoute()
   * - .toCreateTransitGatewayRouteTable()
   * - .toCreateTransitGatewayVpcAttachment()
   * - .toCreateVolume()
   * - .toCreateVpc()
   * - .toCreateVpcEndpoint()
   * - .toCreateVpcEndpointServiceConfiguration()
   * - .toCreateVpcPeeringConnection()
   * - .toCreateVpnConnection()
   * - .toDeleteCarrierGateway()
   * - .toDeleteClientVpnEndpoint()
   * - .toDeleteClientVpnRoute()
   * - .toDeleteCustomerGateway()
   * - .toDeleteDhcpOptions()
   * - .toDeleteFlowLogs()
   * - .toDeleteInternetGateway()
   * - .toDeleteLaunchTemplate()
   * - .toDeleteLaunchTemplateVersions()
   * - .toDeleteLocalGatewayRoute()
   * - .toDeleteLocalGatewayRouteTableVpcAssociation()
   * - .toDeleteManagedPrefixList()
   * - .toDeleteNetworkAcl()
   * - .toDeleteNetworkAclEntry()
   * - .toDeleteRoute()
   * - .toDeleteRouteTable()
   * - .toDeleteSecurityGroup()
   * - .toDeleteSnapshot()
   * - .toDeleteTags()
   * - .toDeleteTrafficMirrorFilter()
   * - .toDeleteTrafficMirrorFilterRule()
   * - .toDeleteTrafficMirrorSession()
   * - .toDeleteTrafficMirrorTarget()
   * - .toDeleteTransitGateway()
   * - .toDeleteTransitGatewayMulticastDomain()
   * - .toDeleteTransitGatewayPeeringAttachment()
   * - .toDeleteTransitGatewayPrefixListReference()
   * - .toDeleteTransitGatewayRoute()
   * - .toDeleteTransitGatewayRouteTable()
   * - .toDeleteTransitGatewayVpcAttachment()
   * - .toDeleteVolume()
   * - .toDeleteVpcEndpointServiceConfigurations()
   * - .toDeleteVpcEndpoints()
   * - .toDeleteVpcPeeringConnection()
   * - .toDeregisterTransitGatewayMulticastGroupMembers()
   * - .toDeregisterTransitGatewayMulticastGroupSources()
   * - .toDetachClassicLinkVpc()
   * - .toDetachVolume()
   * - .toDisableFastSnapshotRestores()
   * - .toDisableTransitGatewayRouteTablePropagation()
   * - .toDisableVpcClassicLink()
   * - .toDisassociateClientVpnTargetNetwork()
   * - .toDisassociateIamInstanceProfile()
   * - .toDisassociateTransitGatewayMulticastDomain()
   * - .toDisassociateTransitGatewayRouteTable()
   * - .toEnableFastSnapshotRestores()
   * - .toEnableTransitGatewayRouteTablePropagation()
   * - .toEnableVpcClassicLink()
   * - .toGetConsoleScreenshot()
   * - .toImportClientVpnClientCertificateRevocationList()
   * - .toModifyCapacityReservation()
   * - .toModifyClientVpnEndpoint()
   * - .toModifyInstanceEventStartTime()
   * - .toModifyLaunchTemplate()
   * - .toModifyManagedPrefixList()
   * - .toModifySnapshotAttribute()
   * - .toModifyTrafficMirrorFilterNetworkServices()
   * - .toModifyTrafficMirrorFilterRule()
   * - .toModifyTrafficMirrorSession()
   * - .toModifyTransitGateway()
   * - .toModifyTransitGatewayPrefixListReference()
   * - .toModifyTransitGatewayVpcAttachment()
   * - .toModifyVpcEndpoint()
   * - .toModifyVpcEndpointServiceConfiguration()
   * - .toModifyVpcEndpointServicePermissions()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   * - .toRebootInstances()
   * - .toRegisterTransitGatewayMulticastGroupMembers()
   * - .toRegisterTransitGatewayMulticastGroupSources()
   * - .toRejectTransitGatewayPeeringAttachment()
   * - .toRejectTransitGatewayVpcAttachment()
   * - .toRejectVpcEndpointConnections()
   * - .toRejectVpcPeeringConnection()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceRoute()
   * - .toReplaceTransitGatewayRoute()
   * - .toRestoreManagedPrefixListVersion()
   * - .toRevokeClientVpnIngress()
   * - .toRevokeSecurityGroupEgress()
   * - .toRevokeSecurityGroupIngress()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toStartInstances()
   * - .toStartVpcEndpointServicePrivateDnsVerification()
   * - .toStopInstances()
   * - .toTerminateClientVpnConnections()
   * - .toTerminateInstances()
   * - .toUpdateSecurityGroupRuleDescriptionsEgress()
   * - .toUpdateSecurityGroupRuleDescriptionsIngress()
   *
   * Applies to resource types:
   * - capacity-reservation
   * - carrier-gateway
   * - client-vpn-endpoint
   * - customer-gateway
   * - dhcp-options
   * - egress-only-internet-gateway
   * - export-instance-task
   * - fleet
   * - fpga-image
   * - image
   * - instance
   * - internet-gateway
   * - key-pair
   * - launch-template
   * - local-gateway
   * - local-gateway-route-table
   * - local-gateway-route-table-virtual-interface-group-association
   * - local-gateway-route-table-vpc-association
   * - local-gateway-virtual-interface
   * - local-gateway-virtual-interface-group
   * - natgateway
   * - network-acl
   * - network-interface
   * - placement-group
   * - prefix-list
   * - reserved-instances
   * - route-table
   * - security-group
   * - snapshot
   * - spot-instance-request
   * - subnet
   * - traffic-mirror-session
   * - traffic-mirror-target
   * - traffic-mirror-filter
   * - traffic-mirror-filter-rule
   * - transit-gateway-attachment
   * - transit-gateway-multicast-domain
   * - transit-gateway-route-table
   * - transit-gateway
   * - volume
   * - vpc
   * - vpc-endpoint
   * - vpc-endpoint-service
   * - vpc-flow-log
   * - vpc-peering-connection
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRegion(value: string | string[], operator?: string) {
    return this.if(`ec2:Region`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the percentage of increase of the rekey window (determined by the rekey margin time) within which the rekey time is randomly selected for a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifRekeyFuzzPercentage(value: number | number[], operator?: string) {
    return this.if(`ec2:RekeyFuzzPercentage`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the margin time before the phase 2 lifetime expires for a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifRekeyMarginTimeSeconds(value: number | number[], operator?: string) {
    return this.if(`ec2:RekeyMarginTimeSeconds`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the ARN of a requester VPC in a VPC peering connection
   *
   * https://docs.aws.amazon.com/vpc/latest/peering/security-iam.html
   *
   * Applies to actions:
   * - .toAcceptVpcPeeringConnection()
   * - .toCreateVpcPeeringConnection()
   * - .toDeleteVpcPeeringConnection()
   * - .toRejectVpcPeeringConnection()
   *
   * Applies to resource types:
   * - vpc-peering-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifRequesterVpc(value: string | string[], operator?: string) {
    return this.if(`ec2:RequesterVpc`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by the payment option of the Reserved Instance offering (No Upfront, Partial Upfront, or All Upfront)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html#ri-payment-options
   *
   * Applies to actions:
   * - .toCreateTags()
   *
   * Applies to resource types:
   * - reserved-instances
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReservedInstancesOfferingType(value: string | string[], operator?: string) {
    return this.if(`ec2:ReservedInstancesOfferingType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the preface string for a tag key and value pair that are attached to a resource
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/control-access-with-tags.html
   *
   * Applies to actions:
   * - .toRunInstances()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTagExists(value: string | string[], operator?: string) {
    return this.if(`ec2:ResourceTag/`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/control-access-with-tags.html
   *
   * Applies to actions:
   * - .toAcceptTransitGatewayPeeringAttachment()
   * - .toAcceptTransitGatewayVpcAttachment()
   * - .toAcceptVpcEndpointConnections()
   * - .toAcceptVpcPeeringConnection()
   * - .toApplySecurityGroupsToClientVpnTargetNetwork()
   * - .toAssociateClientVpnTargetNetwork()
   * - .toAssociateIamInstanceProfile()
   * - .toAssociateTransitGatewayMulticastDomain()
   * - .toAssociateTransitGatewayRouteTable()
   * - .toAttachClassicLinkVpc()
   * - .toAttachVolume()
   * - .toAuthorizeClientVpnIngress()
   * - .toAuthorizeSecurityGroupEgress()
   * - .toAuthorizeSecurityGroupIngress()
   * - .toCancelCapacityReservation()
   * - .toCreateClientVpnRoute()
   * - .toCreateFlowLogs()
   * - .toCreateLaunchTemplateVersion()
   * - .toCreateLocalGatewayRoute()
   * - .toCreateLocalGatewayRouteTableVpcAssociation()
   * - .toCreateNetworkInterfacePermission()
   * - .toCreateRoute()
   * - .toCreateSnapshot()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toCreateTrafficMirrorFilterRule()
   * - .toCreateTrafficMirrorSession()
   * - .toCreateTrafficMirrorTarget()
   * - .toCreateTransitGatewayMulticastDomain()
   * - .toCreateTransitGatewayPeeringAttachment()
   * - .toCreateTransitGatewayPrefixListReference()
   * - .toCreateTransitGatewayRoute()
   * - .toCreateTransitGatewayRouteTable()
   * - .toCreateTransitGatewayVpcAttachment()
   * - .toCreateVpcEndpoint()
   * - .toCreateVpcPeeringConnection()
   * - .toDeleteCarrierGateway()
   * - .toDeleteClientVpnEndpoint()
   * - .toDeleteClientVpnRoute()
   * - .toDeleteCustomerGateway()
   * - .toDeleteDhcpOptions()
   * - .toDeleteFlowLogs()
   * - .toDeleteInternetGateway()
   * - .toDeleteLaunchTemplate()
   * - .toDeleteLaunchTemplateVersions()
   * - .toDeleteLocalGatewayRoute()
   * - .toDeleteLocalGatewayRouteTableVpcAssociation()
   * - .toDeleteManagedPrefixList()
   * - .toDeleteNetworkAcl()
   * - .toDeleteNetworkAclEntry()
   * - .toDeleteRoute()
   * - .toDeleteRouteTable()
   * - .toDeleteSecurityGroup()
   * - .toDeleteSnapshot()
   * - .toDeleteTags()
   * - .toDeleteTrafficMirrorFilter()
   * - .toDeleteTrafficMirrorFilterRule()
   * - .toDeleteTrafficMirrorSession()
   * - .toDeleteTrafficMirrorTarget()
   * - .toDeleteTransitGateway()
   * - .toDeleteTransitGatewayMulticastDomain()
   * - .toDeleteTransitGatewayPeeringAttachment()
   * - .toDeleteTransitGatewayPrefixListReference()
   * - .toDeleteTransitGatewayRoute()
   * - .toDeleteTransitGatewayRouteTable()
   * - .toDeleteTransitGatewayVpcAttachment()
   * - .toDeleteVolume()
   * - .toDeleteVpcEndpointServiceConfigurations()
   * - .toDeleteVpcEndpoints()
   * - .toDeleteVpcPeeringConnection()
   * - .toDeregisterTransitGatewayMulticastGroupMembers()
   * - .toDeregisterTransitGatewayMulticastGroupSources()
   * - .toDetachClassicLinkVpc()
   * - .toDetachVolume()
   * - .toDisableFastSnapshotRestores()
   * - .toDisableTransitGatewayRouteTablePropagation()
   * - .toDisableVpcClassicLink()
   * - .toDisassociateClientVpnTargetNetwork()
   * - .toDisassociateIamInstanceProfile()
   * - .toDisassociateTransitGatewayMulticastDomain()
   * - .toDisassociateTransitGatewayRouteTable()
   * - .toEnableFastSnapshotRestores()
   * - .toEnableTransitGatewayRouteTablePropagation()
   * - .toEnableVpcClassicLink()
   * - .toGetConsoleScreenshot()
   * - .toImportClientVpnClientCertificateRevocationList()
   * - .toModifyCapacityReservation()
   * - .toModifyClientVpnEndpoint()
   * - .toModifyLaunchTemplate()
   * - .toModifyManagedPrefixList()
   * - .toModifySnapshotAttribute()
   * - .toModifyTrafficMirrorFilterNetworkServices()
   * - .toModifyTrafficMirrorFilterRule()
   * - .toModifyTrafficMirrorSession()
   * - .toModifyTransitGateway()
   * - .toModifyTransitGatewayPrefixListReference()
   * - .toModifyTransitGatewayVpcAttachment()
   * - .toModifyVpcEndpoint()
   * - .toModifyVpcEndpointServiceConfiguration()
   * - .toModifyVpcEndpointServicePermissions()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   * - .toRebootInstances()
   * - .toRegisterTransitGatewayMulticastGroupMembers()
   * - .toRegisterTransitGatewayMulticastGroupSources()
   * - .toRejectTransitGatewayPeeringAttachment()
   * - .toRejectTransitGatewayVpcAttachment()
   * - .toRejectVpcEndpointConnections()
   * - .toRejectVpcPeeringConnection()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceRoute()
   * - .toReplaceTransitGatewayRoute()
   * - .toRestoreManagedPrefixListVersion()
   * - .toRevokeClientVpnIngress()
   * - .toRevokeSecurityGroupEgress()
   * - .toRevokeSecurityGroupIngress()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toStartInstances()
   * - .toStartVpcEndpointServicePrivateDnsVerification()
   * - .toStopInstances()
   * - .toTerminateClientVpnConnections()
   * - .toTerminateInstances()
   * - .toUpdateSecurityGroupRuleDescriptionsEgress()
   * - .toUpdateSecurityGroupRuleDescriptionsIngress()
   *
   * Applies to resource types:
   * - capacity-reservation
   * - carrier-gateway
   * - client-vpn-endpoint
   * - customer-gateway
   * - dedicated-host
   * - dhcp-options
   * - egress-only-internet-gateway
   * - export-instance-task
   * - fleet
   * - fpga-image
   * - image
   * - instance
   * - internet-gateway
   * - key-pair
   * - launch-template
   * - local-gateway
   * - local-gateway-route-table
   * - local-gateway-route-table-virtual-interface-group-association
   * - local-gateway-route-table-vpc-association
   * - local-gateway-virtual-interface
   * - local-gateway-virtual-interface-group
   * - natgateway
   * - network-acl
   * - network-interface
   * - placement-group
   * - prefix-list
   * - reserved-instances
   * - route-table
   * - security-group
   * - snapshot
   * - spot-instance-request
   * - subnet
   * - traffic-mirror-session
   * - traffic-mirror-target
   * - traffic-mirror-filter
   * - transit-gateway-attachment
   * - transit-gateway-multicast-domain
   * - transit-gateway-route-table
   * - transit-gateway
   * - volume
   * - vpc
   * - vpc-endpoint
   * - vpc-endpoint-service
   * - vpc-flow-log
   * - vpc-peering-connection
   * - vpn-connection
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`ec2:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the version of the instance metadata service for retrieving IAM role credentials for EC2
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifRoleDelivery(value: number | number[], operator?: string) {
    return this.if(`ec2:RoleDelivery`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the root device type of the instance (ebs or instance-store)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachVolume()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toDetachClassicLinkVpc()
   * - .toDetachVolume()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleScreenshot()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   *
   * Applies to resource types:
   * - image
   * - instance
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRootDeviceType(value: string | string[], operator?: string) {
    return this.if(`ec2:RootDeviceType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the routing type for the VPN connection
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRoutingType(value: string | string[], operator?: string) {
    return this.if(`ec2:RoutingType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the initiation time of a snapshot
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toDeleteSnapshot()
   * - .toDisableFastSnapshotRestores()
   * - .toEnableFastSnapshotRestores()
   * - .toModifySnapshotAttribute()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [date operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date). **Default:** `DateEquals`
   */
  public ifSnapshotTime(value: Date | string | (Date | string)[], operator?: string) {
    if (typeof (value as Date).getMonth === "function") {
      value = (value as Date).toISOString();
    } else if (Array.isArray(value)) {
      value = value.map((item) => {
        if (typeof (item as Date).getMonth === "function") {
          item = (item as Date).toISOString();
        }
        return item;
      });
    }
    return this.if(`ec2:SnapshotTime`, value, operator || 'DateEquals');
  }

  /**
   * Filters access by the ARN of the instance from which the request originated
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifSourceInstanceARN(value: string | string[], operator?: string) {
    return this.if(`ec2:SourceInstanceARN`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by the ARN of the subnet
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateFlowLogs()
   * - .toCreateNetworkInterfacePermission()
   * - .toCreateTags()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - network-interface
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifSubnet(value: string | string[], operator?: string) {
    return this.if(`ec2:Subnet`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by the tenancy of the VPC or instance (default, dedicated, or host)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAcceptVpcPeeringConnection()
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachVolume()
   * - .toCreateFlowLogs()
   * - .toCreateLocalGatewayRouteTableVpcAssociation()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toCreateVpcPeeringConnection()
   * - .toDetachClassicLinkVpc()
   * - .toDetachVolume()
   * - .toDisableVpcClassicLink()
   * - .toDisassociateIamInstanceProfile()
   * - .toEnableVpcClassicLink()
   * - .toGetConsoleScreenshot()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   *
   * Applies to resource types:
   * - instance
   * - reserved-instances
   * - vpc
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTenancy(value: string | string[], operator?: string) {
    return this.if(`ec2:Tenancy`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the the number of input/output operations per second (IOPS) provisioned for the volume
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAttachVolume()
   * - .toCreateSnapshot()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toCreateVolume()
   * - .toDeleteVolume()
   * - .toDetachVolume()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - volume
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifVolumeIops(value: number | number[], operator?: string) {
    return this.if(`ec2:VolumeIops`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the size of the volume, in GiB.
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAttachVolume()
   * - .toCreateSnapshot()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toCreateVolume()
   * - .toDeleteSnapshot()
   * - .toDeleteVolume()
   * - .toDetachVolume()
   * - .toDisableFastSnapshotRestores()
   * - .toEnableFastSnapshotRestores()
   * - .toModifySnapshotAttribute()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - snapshot
   * - volume
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifVolumeSize(value: number | number[], operator?: string) {
    return this.if(`ec2:VolumeSize`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the type of volume (gp2, io1, io2, st1, sc1, or standard)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAttachVolume()
   * - .toCreateSnapshot()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toCreateVolume()
   * - .toDeleteVolume()
   * - .toDetachVolume()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - volume
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVolumeType(value: string | string[], operator?: string) {
    return this.if(`ec2:VolumeType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of the VPC
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAttachClassicLinkVpc()
   * - .toAuthorizeSecurityGroupEgress()
   * - .toAuthorizeSecurityGroupIngress()
   * - .toCreateFlowLogs()
   * - .toCreateNetworkInterfacePermission()
   * - .toCreateRoute()
   * - .toCreateTags()
   * - .toDeleteNetworkAcl()
   * - .toDeleteNetworkAclEntry()
   * - .toDeleteRoute()
   * - .toDeleteRouteTable()
   * - .toDeleteSecurityGroup()
   * - .toReplaceRoute()
   * - .toRevokeSecurityGroupEgress()
   * - .toRevokeSecurityGroupIngress()
   * - .toRunInstances()
   * - .toUpdateSecurityGroupRuleDescriptionsEgress()
   * - .toUpdateSecurityGroupRuleDescriptionsIngress()
   *
   * Applies to resource types:
   * - network-acl
   * - network-interface
   * - route-table
   * - security-group
   * - subnet
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifVpc(value: string | string[], operator?: string) {
    return this.if(`ec2:Vpc`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by the name of the VPC endpoint service
   *
   * Applies to actions:
   * - .toCreateVpcEndpoint()
   *
   * Applies to resource types:
   * - vpc-endpoint
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpceServiceName(value: string | string[], operator?: string) {
    return this.if(`ec2:VpceServiceName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the service owner of the VPC endpoint service (amazon, aws-marketplace, or an AWS account ID)
   *
   * Applies to actions:
   * - .toCreateVpcEndpoint()
   *
   * Applies to resource types:
   * - vpc-endpoint
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpceServiceOwner(value: string | string[], operator?: string) {
    return this.if(`ec2:VpceServiceOwner`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the private DNS name of the VPC endpoint service
   *
   * Applies to actions:
   * - .toCreateVpcEndpointServiceConfiguration()
   * - .toModifyVpcEndpointServiceConfiguration()
   *
   * Applies to resource types:
   * - vpc-endpoint-service
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpceServicePrivateDnsName(value: string | string[], operator?: string) {
    return this.if(`ec2:VpceServicePrivateDnsName`, value, operator || 'StringLike');
  }
}
