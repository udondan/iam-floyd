import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [ec2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ec2 extends PolicyStatement {
  public servicePrefix = 'ec2';

  /**
   * Statement provider for service [ec2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2.html).
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
    this.to('AcceptReservedInstancesExchangeQuote');
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
    this.to('AcceptTransitGatewayPeeringAttachment');
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
    this.to('AcceptTransitGatewayVpcAttachment');
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
    this.to('AcceptVpcEndpointConnections');
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
    this.to('AcceptVpcPeeringConnection');
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
    this.to('AdvertiseByoipCidr');
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
    this.to('AllocateAddress');
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
    this.to('AllocateHosts');
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
    this.to('ApplySecurityGroupsToClientVpnTargetNetwork');
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
    this.to('AssignIpv6Addresses');
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
    this.to('AssignPrivateIpAddresses');
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
    this.to('AssociateAddress');
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
    this.to('AssociateClientVpnTargetNetwork');
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
    this.to('AssociateDhcpOptions');
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
    this.to('AssociateIamInstanceProfile');
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
    this.to('AssociateRouteTable');
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
    this.to('AssociateSubnetCidrBlock');
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
    this.to('AssociateTransitGatewayMulticastDomain');
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
    this.to('AssociateTransitGatewayRouteTable');
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
    this.to('AssociateVpcCidrBlock');
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
    this.to('AttachClassicLinkVpc');
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
    this.to('AttachInternetGateway');
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
    this.to('AttachNetworkInterface');
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
    this.to('AttachVolume');
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
    this.to('AttachVpnGateway');
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
    this.to('AuthorizeClientVpnIngress');
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
    this.to('AuthorizeSecurityGroupEgress');
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
    this.to('AuthorizeSecurityGroupIngress');
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
    this.to('BundleInstance');
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
    this.to('CancelBundleTask');
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
    this.to('CancelCapacityReservation');
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
    this.to('CancelConversionTask');
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
    this.to('CancelExportTask');
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
    this.to('CancelImportTask');
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
    this.to('CancelReservedInstancesListing');
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
    this.to('CancelSpotFleetRequests');
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
    this.to('CancelSpotInstanceRequests');
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
    this.to('ConfirmProductInstance');
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
    this.to('CopyFpgaImage');
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
    this.to('CopyImage');
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
    this.to('CopySnapshot');
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
    this.to('CreateCapacityReservation');
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
    this.to('CreateCarrierGateway');
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
    this.to('CreateClientVpnEndpoint');
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
    this.to('CreateClientVpnRoute');
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
    this.to('CreateCustomerGateway');
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
    this.to('CreateDefaultSubnet');
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
    this.to('CreateDefaultVpc');
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
    this.to('CreateDhcpOptions');
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
    this.to('CreateEgressOnlyInternetGateway');
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
    this.to('CreateFleet');
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
    this.to('CreateFlowLogs');
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
    this.to('CreateFpgaImage');
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
    this.to('CreateImage');
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
    this.to('CreateInstanceExportTask');
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
    this.to('CreateInternetGateway');
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
    this.to('CreateKeyPair');
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
    this.to('CreateLaunchTemplate');
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
    this.to('CreateLaunchTemplateVersion');
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
    this.to('CreateLocalGatewayRoute');
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
    this.to('CreateLocalGatewayRouteTableVpcAssociation');
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
    this.to('CreateManagedPrefixList');
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
    this.to('CreateNatGateway');
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
    this.to('CreateNetworkAcl');
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
    this.to('CreateNetworkAclEntry');
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
    this.to('CreateNetworkInterface');
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
    this.to('CreateNetworkInterfacePermission');
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
    this.to('CreatePlacementGroup');
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
    this.to('CreateReservedInstancesListing');
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
    this.to('CreateRoute');
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
    this.to('CreateRouteTable');
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
    this.to('CreateSecurityGroup');
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
    this.to('CreateSnapshot');
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
    this.to('CreateSnapshots');
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
    this.to('CreateSpotDatafeedSubscription');
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
    this.to('CreateSubnet');
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
    this.to('CreateTags');
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
    this.to('CreateTrafficMirrorFilter');
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
    this.to('CreateTrafficMirrorFilterRule');
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
    this.to('CreateTrafficMirrorSession');
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
    this.to('CreateTrafficMirrorTarget');
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
    this.to('CreateTransitGateway');
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
    this.to('CreateTransitGatewayMulticastDomain');
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
    this.to('CreateTransitGatewayPeeringAttachment');
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
    this.to('CreateTransitGatewayPrefixListReference');
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
    this.to('CreateTransitGatewayRoute');
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
    this.to('CreateTransitGatewayRouteTable');
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
    this.to('CreateTransitGatewayVpcAttachment');
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
    this.to('CreateVolume');
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
    this.to('CreateVpc');
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
    this.to('CreateVpcEndpoint');
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
    this.to('CreateVpcEndpointConnectionNotification');
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
    this.to('CreateVpcEndpointServiceConfiguration');
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
    this.to('CreateVpcPeeringConnection');
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
    this.to('CreateVpnConnection');
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
    this.to('CreateVpnConnectionRoute');
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
    this.to('CreateVpnGateway');
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
    this.to('DeleteCarrierGateway');
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
    this.to('DeleteClientVpnEndpoint');
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
    this.to('DeleteClientVpnRoute');
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
    this.to('DeleteCustomerGateway');
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
    this.to('DeleteDhcpOptions');
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
    this.to('DeleteEgressOnlyInternetGateway');
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
    this.to('DeleteFleets');
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
    this.to('DeleteFlowLogs');
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
    this.to('DeleteFpgaImage');
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
    this.to('DeleteInternetGateway');
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
    this.to('DeleteKeyPair');
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
    this.to('DeleteLaunchTemplate');
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
    this.to('DeleteLaunchTemplateVersions');
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
    this.to('DeleteLocalGatewayRoute');
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
    this.to('DeleteLocalGatewayRouteTableVpcAssociation');
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
    this.to('DeleteManagedPrefixList');
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
    this.to('DeleteNatGateway');
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
    this.to('DeleteNetworkAcl');
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
    this.to('DeleteNetworkAclEntry');
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
    this.to('DeleteNetworkInterface');
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
    this.to('DeleteNetworkInterfacePermission');
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
    this.to('DeletePlacementGroup');
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
    this.to('DeleteRoute');
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
    this.to('DeleteRouteTable');
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
    this.to('DeleteSecurityGroup');
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
    this.to('DeleteSnapshot');
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
    this.to('DeleteSpotDatafeedSubscription');
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
    this.to('DeleteSubnet');
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
    this.to('DeleteTags');
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
    this.to('DeleteTrafficMirrorFilter');
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
    this.to('DeleteTrafficMirrorFilterRule');
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
    this.to('DeleteTrafficMirrorSession');
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
    this.to('DeleteTrafficMirrorTarget');
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
    this.to('DeleteTransitGateway');
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
    this.to('DeleteTransitGatewayMulticastDomain');
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
    this.to('DeleteTransitGatewayPeeringAttachment');
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
    this.to('DeleteTransitGatewayPrefixListReference');
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
    this.to('DeleteTransitGatewayRoute');
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
    this.to('DeleteTransitGatewayRouteTable');
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
    this.to('DeleteTransitGatewayVpcAttachment');
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
    this.to('DeleteVolume');
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
    this.to('DeleteVpc');
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
    this.to('DeleteVpcEndpointConnectionNotifications');
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
    this.to('DeleteVpcEndpointServiceConfigurations');
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
    this.to('DeleteVpcEndpoints');
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
    this.to('DeleteVpcPeeringConnection');
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
    this.to('DeleteVpnConnection');
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
    this.to('DeleteVpnConnectionRoute');
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
    this.to('DeleteVpnGateway');
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
    this.to('DeprovisionByoipCidr');
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
    this.to('DeregisterImage');
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
    this.to('DeregisterInstanceEventNotificationAttributes');
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
    this.to('DeregisterTransitGatewayMulticastGroupMembers');
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
    this.to('DeregisterTransitGatewayMulticastGroupSources');
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
    this.to('DescribeAccountAttributes');
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
    this.to('DescribeAddresses');
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
    this.to('DescribeAggregateIdFormat');
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
    this.to('DescribeAvailabilityZones');
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
    this.to('DescribeBundleTasks');
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
    this.to('DescribeByoipCidrs');
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
    this.to('DescribeCapacityReservations');
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
    this.to('DescribeCarrierGateways');
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
    this.to('DescribeClassicLinkInstances');
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
    this.to('DescribeClientVpnAuthorizationRules');
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
    this.to('DescribeClientVpnConnections');
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
    this.to('DescribeClientVpnEndpoints');
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
    this.to('DescribeClientVpnRoutes');
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
    this.to('DescribeClientVpnTargetNetworks');
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
    this.to('DescribeCoipPools');
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
    this.to('DescribeConversionTasks');
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
    this.to('DescribeCustomerGateways');
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
    this.to('DescribeDhcpOptions');
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
    this.to('DescribeEgressOnlyInternetGateways');
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
    this.to('DescribeElasticGpus');
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
    this.to('DescribeExportImageTasks');
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
    this.to('DescribeExportTasks');
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
    this.to('DescribeFastSnapshotRestores');
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
    this.to('DescribeFleetHistory');
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
    this.to('DescribeFleetInstances');
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
    this.to('DescribeFleets');
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
    this.to('DescribeFlowLogs');
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
    this.to('DescribeFpgaImageAttribute');
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
    this.to('DescribeFpgaImages');
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
    this.to('DescribeHostReservationOfferings');
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
    this.to('DescribeHostReservations');
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
    this.to('DescribeHosts');
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
    this.to('DescribeIamInstanceProfileAssociations');
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
    this.to('DescribeIdFormat');
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
    this.to('DescribeIdentityIdFormat');
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
    this.to('DescribeImageAttribute');
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
    this.to('DescribeImages');
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
    this.to('DescribeImportImageTasks');
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
    this.to('DescribeImportSnapshotTasks');
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
    this.to('DescribeInstanceAttribute');
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
    this.to('DescribeInstanceCreditSpecifications');
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
    this.to('DescribeInstanceEventNotificationAttributes');
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
    this.to('DescribeInstanceStatus');
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
    this.to('DescribeInstanceTypeOfferings');
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
    this.to('DescribeInstanceTypes');
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
    this.to('DescribeInstances');
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
    this.to('DescribeInternetGateways');
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
    this.to('DescribeKeyPairs');
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
    this.to('DescribeLaunchTemplateVersions');
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
    this.to('DescribeLaunchTemplates');
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
    this.to('DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations');
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
    this.to('DescribeLocalGatewayRouteTableVpcAssociations');
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
    this.to('DescribeLocalGatewayRouteTables');
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
    this.to('DescribeLocalGatewayVirtualInterfaceGroups');
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
    this.to('DescribeLocalGatewayVirtualInterfaces');
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
    this.to('DescribeLocalGateways');
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
    this.to('DescribeManagedPrefixLists');
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
    this.to('DescribeMovingAddresses');
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
    this.to('DescribeNatGateways');
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
    this.to('DescribeNetworkAcls');
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
    this.to('DescribeNetworkInterfaceAttribute');
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
    this.to('DescribeNetworkInterfacePermissions');
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
    this.to('DescribeNetworkInterfaces');
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
    this.to('DescribePlacementGroups');
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
    this.to('DescribePrefixLists');
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
    this.to('DescribePrincipalIdFormat');
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
    this.to('DescribePublicIpv4Pools');
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
    this.to('DescribeRegions');
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
    this.to('DescribeReservedInstances');
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
    this.to('DescribeReservedInstancesListings');
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
    this.to('DescribeReservedInstancesModifications');
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
    this.to('DescribeReservedInstancesOfferings');
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
    this.to('DescribeRouteTables');
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
    this.to('DescribeScheduledInstanceAvailability');
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
    this.to('DescribeScheduledInstances');
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
    this.to('DescribeSecurityGroupReferences');
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
    this.to('DescribeSecurityGroups');
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
    this.to('DescribeSnapshotAttribute');
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
    this.to('DescribeSnapshots');
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
    this.to('DescribeSpotDatafeedSubscription');
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
    this.to('DescribeSpotFleetInstances');
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
    this.to('DescribeSpotFleetRequestHistory');
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
    this.to('DescribeSpotFleetRequests');
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
    this.to('DescribeSpotInstanceRequests');
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
    this.to('DescribeSpotPriceHistory');
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
    this.to('DescribeStaleSecurityGroups');
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
    this.to('DescribeSubnets');
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
    this.to('DescribeTags');
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
    this.to('DescribeTrafficMirrorFilters');
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
    this.to('DescribeTrafficMirrorSessions');
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
    this.to('DescribeTrafficMirrorTargets');
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
    this.to('DescribeTransitGatewayAttachments');
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
    this.to('DescribeTransitGatewayMulticastDomains');
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
    this.to('DescribeTransitGatewayPeeringAttachments');
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
    this.to('DescribeTransitGatewayRouteTables');
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
    this.to('DescribeTransitGatewayVpcAttachments');
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
    this.to('DescribeTransitGateways');
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
    this.to('DescribeVolumeAttribute');
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
    this.to('DescribeVolumeStatus');
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
    this.to('DescribeVolumes');
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
    this.to('DescribeVolumesModifications');
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
    this.to('DescribeVpcAttribute');
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
    this.to('DescribeVpcClassicLink');
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
    this.to('DescribeVpcClassicLinkDnsSupport');
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
    this.to('DescribeVpcEndpointConnectionNotifications');
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
    this.to('DescribeVpcEndpointConnections');
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
    this.to('DescribeVpcEndpointServiceConfigurations');
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
    this.to('DescribeVpcEndpointServicePermissions');
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
    this.to('DescribeVpcEndpointServices');
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
    this.to('DescribeVpcEndpoints');
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
    this.to('DescribeVpcPeeringConnections');
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
    this.to('DescribeVpcs');
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
    this.to('DescribeVpnConnections');
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
    this.to('DescribeVpnGateways');
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
    this.to('DetachClassicLinkVpc');
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
    this.to('DetachInternetGateway');
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
    this.to('DetachNetworkInterface');
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
    this.to('DetachVolume');
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
    this.to('DetachVpnGateway');
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
    this.to('DisableEbsEncryptionByDefault');
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
    this.to('DisableFastSnapshotRestores');
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
    this.to('DisableTransitGatewayRouteTablePropagation');
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
    this.to('DisableVgwRoutePropagation');
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
    this.to('DisableVpcClassicLink');
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
    this.to('DisableVpcClassicLinkDnsSupport');
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
    this.to('DisassociateAddress');
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
    this.to('DisassociateClientVpnTargetNetwork');
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
    this.to('DisassociateIamInstanceProfile');
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
    this.to('DisassociateRouteTable');
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
    this.to('DisassociateSubnetCidrBlock');
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
    this.to('DisassociateTransitGatewayMulticastDomain');
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
    this.to('DisassociateTransitGatewayRouteTable');
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
    this.to('DisassociateVpcCidrBlock');
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
    this.to('EnableEbsEncryptionByDefault');
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
    this.to('EnableFastSnapshotRestores');
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
    this.to('EnableTransitGatewayRouteTablePropagation');
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
    this.to('EnableVgwRoutePropagation');
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
    this.to('EnableVolumeIO');
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
    this.to('EnableVpcClassicLink');
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
    this.to('EnableVpcClassicLinkDnsSupport');
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
    this.to('ExportClientVpnClientCertificateRevocationList');
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
    this.to('ExportClientVpnClientConfiguration');
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
    this.to('ExportImage');
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
    this.to('ExportTransitGatewayRoutes');
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
    this.to('GetCapacityReservationUsage');
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
    this.to('GetCoipPoolUsage');
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
    this.to('GetConsoleOutput');
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
    this.to('GetConsoleScreenshot');
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
    this.to('GetDefaultCreditSpecification');
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
    this.to('GetEbsDefaultKmsKeyId');
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
    this.to('GetEbsEncryptionByDefault');
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
    this.to('GetHostReservationPurchasePreview');
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
    this.to('GetLaunchTemplateData');
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
    this.to('GetManagedPrefixListAssociations');
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
    this.to('GetManagedPrefixListEntries');
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
    this.to('GetPasswordData');
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
    this.to('GetReservedInstancesExchangeQuote');
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
    this.to('GetTransitGatewayAttachmentPropagations');
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
    this.to('GetTransitGatewayMulticastDomainAssociations');
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
    this.to('GetTransitGatewayPrefixListReferences');
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
    this.to('GetTransitGatewayRouteTableAssociations');
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
    this.to('GetTransitGatewayRouteTablePropagations');
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
    this.to('ImportClientVpnClientCertificateRevocationList');
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
    this.to('ImportImage');
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
    this.to('ImportInstance');
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
    this.to('ImportKeyPair');
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
    this.to('ImportSnapshot');
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
    this.to('ImportVolume');
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
    this.to('ModifyCapacityReservation');
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
    this.to('ModifyClientVpnEndpoint');
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
    this.to('ModifyDefaultCreditSpecification');
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
    this.to('ModifyEbsDefaultKmsKeyId');
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
    this.to('ModifyFleet');
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
    this.to('ModifyFpgaImageAttribute');
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
    this.to('ModifyHosts');
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
    this.to('ModifyIdFormat');
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
    this.to('ModifyIdentityIdFormat');
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
    this.to('ModifyImageAttribute');
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
    this.to('ModifyInstanceAttribute');
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
    this.to('ModifyInstanceCapacityReservationAttributes');
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
    this.to('ModifyInstanceCreditSpecification');
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
    this.to('ModifyInstanceEventStartTime');
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
    this.to('ModifyInstanceMetadataOptions');
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
    this.to('ModifyInstancePlacement');
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
    this.to('ModifyLaunchTemplate');
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
    this.to('ModifyManagedPrefixList');
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
    this.to('ModifyNetworkInterfaceAttribute');
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
    this.to('ModifyReservedInstances');
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
    this.to('ModifySnapshotAttribute');
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
    this.to('ModifySpotFleetRequest');
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
    this.to('ModifySubnetAttribute');
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
    this.to('ModifyTrafficMirrorFilterNetworkServices');
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
    this.to('ModifyTrafficMirrorFilterRule');
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
    this.to('ModifyTrafficMirrorSession');
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
    this.to('ModifyTransitGateway');
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
    this.to('ModifyTransitGatewayPrefixListReference');
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
    this.to('ModifyTransitGatewayVpcAttachment');
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
    this.to('ModifyVolume');
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
    this.to('ModifyVolumeAttribute');
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
    this.to('ModifyVpcAttribute');
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
    this.to('ModifyVpcEndpoint');
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
    this.to('ModifyVpcEndpointConnectionNotification');
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
    this.to('ModifyVpcEndpointServiceConfiguration');
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
    this.to('ModifyVpcEndpointServicePermissions');
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
    this.to('ModifyVpcPeeringConnectionOptions');
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
    this.to('ModifyVpcTenancy');
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
    this.to('ModifyVpnConnection');
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
    this.to('ModifyVpnTunnelCertificate');
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
    this.to('ModifyVpnTunnelOptions');
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
    this.to('MonitorInstances');
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
    this.to('MoveAddressToVpc');
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
    this.to('ProvisionByoipCidr');
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
    this.to('PurchaseHostReservation');
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
    this.to('PurchaseReservedInstancesOffering');
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
    this.to('PurchaseScheduledInstances');
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
    this.to('RebootInstances');
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
    this.to('RegisterImage');
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
    this.to('RegisterInstanceEventNotificationAttributes');
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
    this.to('RegisterTransitGatewayMulticastGroupMembers');
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
    this.to('RegisterTransitGatewayMulticastGroupSources');
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
    this.to('RejectTransitGatewayPeeringAttachment');
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
    this.to('RejectTransitGatewayVpcAttachment');
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
    this.to('RejectVpcEndpointConnections');
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
    this.to('RejectVpcPeeringConnection');
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
    this.to('ReleaseAddress');
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
    this.to('ReleaseHosts');
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
    this.to('ReplaceIamInstanceProfileAssociation');
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
    this.to('ReplaceNetworkAclAssociation');
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
    this.to('ReplaceNetworkAclEntry');
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
    this.to('ReplaceRoute');
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
    this.to('ReplaceRouteTableAssociation');
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
    this.to('ReplaceTransitGatewayRoute');
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
    this.to('ReportInstanceStatus');
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
    this.to('RequestSpotFleet');
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
    this.to('RequestSpotInstances');
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
    this.to('ResetEbsDefaultKmsKeyId');
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
    this.to('ResetFpgaImageAttribute');
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
    this.to('ResetImageAttribute');
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
    this.to('ResetInstanceAttribute');
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
    this.to('ResetNetworkInterfaceAttribute');
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
    this.to('ResetSnapshotAttribute');
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
    this.to('RestoreAddressToClassic');
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
    this.to('RestoreManagedPrefixListVersion');
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
    this.to('RevokeClientVpnIngress');
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
    this.to('RevokeSecurityGroupEgress');
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
    this.to('RevokeSecurityGroupIngress');
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
    this.to('RunInstances');
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
    this.to('RunScheduledInstances');
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
    this.to('SearchLocalGatewayRoutes');
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
    this.to('SearchTransitGatewayMulticastGroups');
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
    this.to('SearchTransitGatewayRoutes');
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
    this.to('SendDiagnosticInterrupt');
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
    this.to('StartInstances');
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
    this.to('StartVpcEndpointServicePrivateDnsVerification');
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
    this.to('StopInstances');
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
    this.to('TerminateClientVpnConnections');
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
    this.to('TerminateInstances');
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
    this.to('UnassignIpv6Addresses');
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
    this.to('UnassignPrivateIpAddresses');
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
    this.to('UnmonitorInstances');
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
    this.to('UpdateSecurityGroupRuleDescriptionsEgress');
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
    this.to('UpdateSecurityGroupRuleDescriptionsIngress');
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
    this.to('WithdrawByoipCidr');
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifAccepterVpc(value: string | string[], operator?: Operator | string) {
    return this.if(`ec2:AccepterVpc`, value, operator || 'ArnLike');
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
  public ifAuthenticationType(value: string | string[], operator?: Operator | string) {
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
  public ifAuthorizedService(value: string | string[], operator?: Operator | string) {
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
  public ifAuthorizedUser(value: string | string[], operator?: Operator | string) {
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
  public ifAutoPlacement(value: string | string[], operator?: Operator | string) {
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
  public ifAvailabilityZone(value: string | string[], operator?: Operator | string) {
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
  public ifCreateAction(value: string | string[], operator?: Operator | string) {
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
  public ifDPDTimeoutSeconds(value: number | number[], operator?: Operator | string) {
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
  public ifElasticGpuType(value: string | string[], operator?: Operator | string) {
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
  public ifGatewayType(value: string | string[], operator?: Operator | string) {
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
  public ifHostRecovery(value: string | string[], operator?: Operator | string) {
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
  public ifIKEVersions(value: string | string[], operator?: Operator | string) {
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
  public ifImageType(value: string | string[], operator?: Operator | string) {
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
  public ifInsideTunnelCidr(value: string | string[], operator?: Operator | string) {
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
  public ifInstanceMarketType(value: string | string[], operator?: Operator | string) {
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifInstanceProfile(value: string | string[], operator?: Operator | string) {
    return this.if(`ec2:InstanceProfile`, value, operator || 'ArnLike');
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
  public ifInstanceType(value: string | string[], operator?: Operator | string) {
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifLaunchTemplate(value: string | string[], operator?: Operator | string) {
    return this.if(`ec2:LaunchTemplate`, value, operator || 'ArnLike');
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
  public ifMetadataHttpEndpoint(value: string | string[], operator?: Operator | string) {
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
  public ifMetadataHttpPutResponseHopLimit(value: number | number[], operator?: Operator | string) {
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
  public ifMetadataHttpTokens(value: string | string[], operator?: Operator | string) {
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
  public ifOwner(value: string | string[], operator?: Operator | string) {
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifParentSnapshot(value: string | string[], operator?: Operator | string) {
    return this.if(`ec2:ParentSnapshot`, value, operator || 'ArnLike');
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifParentVolume(value: string | string[], operator?: Operator | string) {
    return this.if(`ec2:ParentVolume`, value, operator || 'ArnLike');
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
  public ifPermission(value: string | string[], operator?: Operator | string) {
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
  public ifPhase1DHGroupNumbers(value: number | number[], operator?: Operator | string) {
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
  public ifPhase1EncryptionAlgorithms(value: string | string[], operator?: Operator | string) {
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
  public ifPhase1IntegrityAlgorithms(value: string | string[], operator?: Operator | string) {
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
  public ifPhase1LifetimeSeconds(value: number | number[], operator?: Operator | string) {
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
  public ifPhase2DHGroupNumbers(value: number | number[], operator?: Operator | string) {
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
  public ifPhase2EncryptionAlgorithms(value: string | string[], operator?: Operator | string) {
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
  public ifPhase2IntegrityAlgorithms(value: string | string[], operator?: Operator | string) {
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
  public ifPhase2LifetimeSeconds(value: number | number[], operator?: Operator | string) {
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifPlacementGroup(value: string | string[], operator?: Operator | string) {
    return this.if(`ec2:PlacementGroup`, value, operator || 'ArnLike');
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
  public ifPlacementGroupStrategy(value: string | string[], operator?: Operator | string) {
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
  public ifPresharedKeys(value: string | string[], operator?: Operator | string) {
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
  public ifProductCode(value: string | string[], operator?: Operator | string) {
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
  public ifQuantity(value: number | number[], operator?: Operator | string) {
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
  public ifRegion(value: string | string[], operator?: Operator | string) {
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
  public ifRekeyFuzzPercentage(value: number | number[], operator?: Operator | string) {
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
  public ifRekeyMarginTimeSeconds(value: number | number[], operator?: Operator | string) {
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifRequesterVpc(value: string | string[], operator?: Operator | string) {
    return this.if(`ec2:RequesterVpc`, value, operator || 'ArnLike');
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
  public ifReservedInstancesOfferingType(value: string | string[], operator?: Operator | string) {
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
  public ifResourceTagExists(value: string | string[], operator?: Operator | string) {
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
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
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
  public ifRoleDelivery(value: number | number[], operator?: Operator | string) {
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
  public ifRootDeviceType(value: string | string[], operator?: Operator | string) {
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
  public ifRoutingType(value: string | string[], operator?: Operator | string) {
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
  public ifSnapshotTime(value: Date | string | (Date | string)[], operator?: Operator | string) {
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifSourceInstanceARN(value: string | string[], operator?: Operator | string) {
    return this.if(`ec2:SourceInstanceARN`, value, operator || 'ArnLike');
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifSubnet(value: string | string[], operator?: Operator | string) {
    return this.if(`ec2:Subnet`, value, operator || 'ArnLike');
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
  public ifTenancy(value: string | string[], operator?: Operator | string) {
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
  public ifVolumeIops(value: number | number[], operator?: Operator | string) {
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
  public ifVolumeSize(value: number | number[], operator?: Operator | string) {
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
  public ifVolumeType(value: string | string[], operator?: Operator | string) {
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
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifVpc(value: string | string[], operator?: Operator | string) {
    return this.if(`ec2:Vpc`, value, operator || 'ArnLike');
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
  public ifVpceServiceName(value: string | string[], operator?: Operator | string) {
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
  public ifVpceServiceOwner(value: string | string[], operator?: Operator | string) {
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
  public ifVpceServicePrivateDnsName(value: string | string[], operator?: Operator | string) {
    return this.if(`ec2:VpceServicePrivateDnsName`, value, operator || 'StringLike');
  }
}
