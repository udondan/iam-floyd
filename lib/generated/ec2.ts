import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
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
    return this.to('AcceptReservedInstancesExchangeQuote');
  }

  /**
   * Grants permission to accept a request to associate subnets with a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptTransitGatewayMulticastDomainAssociations.html
   */
  public toAcceptTransitGatewayMulticastDomainAssociations() {
    return this.to('AcceptTransitGatewayMulticastDomainAssociations');
  }

  /**
   * Grants permission to accept a transit gateway peering attachment request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptTransitGatewayPeeringAttachment.html
   */
  public toAcceptTransitGatewayPeeringAttachment() {
    return this.to('AcceptTransitGatewayPeeringAttachment');
  }

  /**
   * Grants permission to accept a request to attach a VPC to a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptTransitGatewayVpcAttachment.html
   */
  public toAcceptTransitGatewayVpcAttachment() {
    return this.to('AcceptTransitGatewayVpcAttachment');
  }

  /**
   * Grants permission to accept one or more interface VPC endpoint connections to your VPC endpoint service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptVpcEndpointConnections.html
   */
  public toAcceptVpcEndpointConnections() {
    return this.to('AcceptVpcEndpointConnections');
  }

  /**
   * Grants permission to accept a VPC peering connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptVpcPeeringConnection.html
   */
  public toAcceptVpcPeeringConnection() {
    return this.to('AcceptVpcPeeringConnection');
  }

  /**
   * Grants permission to advertise an IP address range that is provisioned for use in AWS through bring your own IP addresses (BYOIP)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AdvertiseByoipCidr.html
   */
  public toAdvertiseByoipCidr() {
    return this.to('AdvertiseByoipCidr');
  }

  /**
   * Grants permission to allocate an Elastic IP address (EIP) to your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateAddress.html
   */
  public toAllocateAddress() {
    return this.to('AllocateAddress');
  }

  /**
   * Grants permission to allocate a Dedicated Host to your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateHosts.html
   */
  public toAllocateHosts() {
    return this.to('AllocateHosts');
  }

  /**
   * Grants permission to allocate a CIDR from an Amazon VPC IP Address Manager (IPAM) pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateIpamPoolCidr.html
   */
  public toAllocateIpamPoolCidr() {
    return this.to('AllocateIpamPoolCidr');
  }

  /**
   * Grants permission to apply a security group to the association between a Client VPN endpoint and a target network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ApplySecurityGroupsToClientVpnTargetNetwork.html
   */
  public toApplySecurityGroupsToClientVpnTargetNetwork() {
    return this.to('ApplySecurityGroupsToClientVpnTargetNetwork');
  }

  /**
   * Grants permission to assign one or more IPv6 addresses to a network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssignIpv6Addresses.html
   */
  public toAssignIpv6Addresses() {
    return this.to('AssignIpv6Addresses');
  }

  /**
   * Grants permission to assign one or more secondary private IP addresses to a network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssignPrivateIpAddresses.html
   */
  public toAssignPrivateIpAddresses() {
    return this.to('AssignPrivateIpAddresses');
  }

  /**
   * Grants permission to associate an Elastic IP address (EIP) with an instance or a network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateAddress.html
   */
  public toAssociateAddress() {
    return this.to('AssociateAddress');
  }

  /**
   * Grants permission to associate a target network with a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateClientVpnTargetNetwork.html
   */
  public toAssociateClientVpnTargetNetwork() {
    return this.to('AssociateClientVpnTargetNetwork');
  }

  /**
   * Grants permission to associate or disassociate a set of DHCP options with a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateDhcpOptions.html
   */
  public toAssociateDhcpOptions() {
    return this.to('AssociateDhcpOptions');
  }

  /**
   * Grants permission to associate an ACM certificate with an IAM role to be used in an EC2 Enclave
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateEnclaveCertificateIamRole.html
   */
  public toAssociateEnclaveCertificateIamRole() {
    return this.to('AssociateEnclaveCertificateIamRole');
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
    return this.to('AssociateIamInstanceProfile');
  }

  /**
   * Grants permission to associate one or more targets with an event window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateInstanceEventWindow.html
   */
  public toAssociateInstanceEventWindow() {
    return this.to('AssociateInstanceEventWindow');
  }

  /**
   * Grants permission to associate a subnet or gateway with a route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateRouteTable.html
   */
  public toAssociateRouteTable() {
    return this.to('AssociateRouteTable');
  }

  /**
   * Grants permission to associate a CIDR block with a subnet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateSubnetCidrBlock.html
   */
  public toAssociateSubnetCidrBlock() {
    return this.to('AssociateSubnetCidrBlock');
  }

  /**
   * Grants permission to associate an attachment and list of subnets with a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateTransitGatewayMulticastDomain.html
   */
  public toAssociateTransitGatewayMulticastDomain() {
    return this.to('AssociateTransitGatewayMulticastDomain');
  }

  /**
   * Grants permission to associate an attachment with a transit gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateTransitGatewayRouteTable.html
   */
  public toAssociateTransitGatewayRouteTable() {
    return this.to('AssociateTransitGatewayRouteTable');
  }

  /**
   * Grants permission to associate a branch network interface with a trunk network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateTrunkInterface.html
   */
  public toAssociateTrunkInterface() {
    return this.to('AssociateTrunkInterface');
  }

  /**
   * Grants permission to associate a CIDR block with a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateVpcCidrBlock.html
   */
  public toAssociateVpcCidrBlock() {
    return this.to('AssociateVpcCidrBlock');
  }

  /**
   * Grants permission to link an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC's security groups
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachClassicLinkVpc.html
   */
  public toAttachClassicLinkVpc() {
    return this.to('AttachClassicLinkVpc');
  }

  /**
   * Grants permission to attach an internet gateway to a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachInternetGateway.html
   */
  public toAttachInternetGateway() {
    return this.to('AttachInternetGateway');
  }

  /**
   * Grants permission to attach a network interface to an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachNetworkInterface.html
   */
  public toAttachNetworkInterface() {
    return this.to('AttachNetworkInterface');
  }

  /**
   * Grants permission to attach an EBS volume to a running or stopped instance and expose it to the instance with the specified device name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachVolume.html
   */
  public toAttachVolume() {
    return this.to('AttachVolume');
  }

  /**
   * Grants permission to attach a virtual private gateway to a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachVpnGateway.html
   */
  public toAttachVpnGateway() {
    return this.to('AttachVpnGateway');
  }

  /**
   * Grants permission to add an inbound authorization rule to a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeClientVpnIngress.html
   */
  public toAuthorizeClientVpnIngress() {
    return this.to('AuthorizeClientVpnIngress');
  }

  /**
   * Grants permission to add one or more outbound rules to a VPC security group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupEgress.html
   */
  public toAuthorizeSecurityGroupEgress() {
    return this.to('AuthorizeSecurityGroupEgress');
  }

  /**
   * Grants permission to add one or more inbound rules to a security group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupIngress.html
   */
  public toAuthorizeSecurityGroupIngress() {
    return this.to('AuthorizeSecurityGroupIngress');
  }

  /**
   * Grants permission to bundle an instance store-backed Windows instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BundleInstance.html
   */
  public toBundleInstance() {
    return this.to('BundleInstance');
  }

  /**
   * Grants permission to cancel a bundling operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelBundleTask.html
   */
  public toCancelBundleTask() {
    return this.to('CancelBundleTask');
  }

  /**
   * Grants permission to cancel a Capacity Reservation and release the reserved capacity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelCapacityReservation.html
   */
  public toCancelCapacityReservation() {
    return this.to('CancelCapacityReservation');
  }

  /**
   * Grants permission to cancel one or more Capacity Reservation Fleets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelCapacityReservationFleets.html
   */
  public toCancelCapacityReservationFleets() {
    return this.to('CancelCapacityReservationFleets');
  }

  /**
   * Grants permission to cancel an active conversion task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelConversionTask.html
   */
  public toCancelConversionTask() {
    return this.to('CancelConversionTask');
  }

  /**
   * Grants permission to cancel an active export task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelExportTask.html
   */
  public toCancelExportTask() {
    return this.to('CancelExportTask');
  }

  /**
   * Grants permission to cancel an in-process import virtual machine or import snapshot task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelImportTask.html
   */
  public toCancelImportTask() {
    return this.to('CancelImportTask');
  }

  /**
   * Grants permission to cancel a Reserved Instance listing on the Reserved Instance Marketplace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelReservedInstancesListing.html
   */
  public toCancelReservedInstancesListing() {
    return this.to('CancelReservedInstancesListing');
  }

  /**
   * Grants permission to cancel one or more Spot Fleet requests
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotFleetRequests.html
   */
  public toCancelSpotFleetRequests() {
    return this.to('CancelSpotFleetRequests');
  }

  /**
   * Grants permission to cancel one or more Spot Instance requests
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotInstanceRequests.html
   */
  public toCancelSpotInstanceRequests() {
    return this.to('CancelSpotInstanceRequests');
  }

  /**
   * Grants permission to determine whether an owned product code is associated with an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ConfirmProductInstance.html
   */
  public toConfirmProductInstance() {
    return this.to('ConfirmProductInstance');
  }

  /**
   * Grants permission to copy a source Amazon FPGA image (AFI) to the current Region. Resource-level permissions specified for this action apply to the new AFI only. They do not apply to the source AFI
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopyFpgaImage.html
   */
  public toCopyFpgaImage() {
    return this.to('CopyFpgaImage');
  }

  /**
   * Grants permission to copy an Amazon Machine Image (AMI) from a source Region to the current Region. Resource-level permissions specified for this action apply to the new AMI only. They do not apply to the source AMI
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopyImage.html
   */
  public toCopyImage() {
    return this.to('CopyImage');
  }

  /**
   * Grants permission to copy a point-in-time snapshot of an EBS volume and store it in Amazon S3. Resource-level permissions specified for this action apply to the new snapshot only. They do not apply to the source snapshot
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopySnapshot.html
   */
  public toCopySnapshot() {
    return this.to('CopySnapshot');
  }

  /**
   * Grants permission to create a Capacity Reservation
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCapacityReservation.html
   */
  public toCreateCapacityReservation() {
    return this.to('CreateCapacityReservation');
  }

  /**
   * Grants permission to create a Capacity Reservation Fleet
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCapacityReservationFleet.html
   */
  public toCreateCapacityReservationFleet() {
    return this.to('CreateCapacityReservationFleet');
  }

  /**
   * Grants permission to create a carrier gateway and provides CSP connectivity to VPC customers
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCarrierGateway.html
   */
  public toCreateCarrierGateway() {
    return this.to('CreateCarrierGateway');
  }

  /**
   * Grants permission to create a Client VPN endpoint
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateClientVpnEndpoint.html
   */
  public toCreateClientVpnEndpoint() {
    return this.to('CreateClientVpnEndpoint');
  }

  /**
   * Grants permission to add a network route to a Client VPN endpoint's route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateClientVpnRoute.html
   */
  public toCreateClientVpnRoute() {
    return this.to('CreateClientVpnRoute');
  }

  /**
   * Grants permission to allow a service to access a customer owned IP (CoIP) pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/identity-access-management.html
   */
  public toCreateCoipPoolPermission() {
    return this.to('CreateCoipPoolPermission');
  }

  /**
   * Grants permission to create a customer gateway, which provides information to AWS about your customer gateway device
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCustomerGateway.html
   */
  public toCreateCustomerGateway() {
    return this.to('CreateCustomerGateway');
  }

  /**
   * Grants permission to create a default subnet in a specified Availability Zone in a default VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateDefaultSubnet.html
   */
  public toCreateDefaultSubnet() {
    return this.to('CreateDefaultSubnet');
  }

  /**
   * Grants permission to create a default VPC with a default subnet in each Availability Zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateDefaultVpc.html
   */
  public toCreateDefaultVpc() {
    return this.to('CreateDefaultVpc');
  }

  /**
   * Grants permission to create a set of DHCP options for a VPC
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateDhcpOptions.html
   */
  public toCreateDhcpOptions() {
    return this.to('CreateDhcpOptions');
  }

  /**
   * Grants permission to create an egress-only internet gateway for a VPC
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateEgressOnlyInternetGateway.html
   */
  public toCreateEgressOnlyInternetGateway() {
    return this.to('CreateEgressOnlyInternetGateway');
  }

  /**
   * Grants permission to launch an EC2 Fleet
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html
   */
  public toCreateFleet() {
    return this.to('CreateFleet');
  }

  /**
   * Grants permission to create one or more flow logs to capture IP traffic for a network interface
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFlowLogs.html
   */
  public toCreateFlowLogs() {
    return this.to('CreateFlowLogs');
  }

  /**
   * Grants permission to create an Amazon FPGA Image (AFI) from a design checkpoint (DCP)
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFpgaImage.html
   */
  public toCreateFpgaImage() {
    return this.to('CreateFpgaImage');
  }

  /**
   * Grants permission to create an Amazon EBS-backed AMI from a stopped or running Amazon EBS-backed instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html
   */
  public toCreateImage() {
    return this.to('CreateImage');
  }

  /**
   * Grants permission to create an event window in which scheduled events for the associated Amazon EC2 instances can run
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInstanceEventWindow.html
   */
  public toCreateInstanceEventWindow() {
    return this.to('CreateInstanceEventWindow');
  }

  /**
   * Grants permission to export a running or stopped instance to an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInstanceExportTask.html
   */
  public toCreateInstanceExportTask() {
    return this.to('CreateInstanceExportTask');
  }

  /**
   * Grants permission to create an internet gateway for a VPC
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInternetGateway.html
   */
  public toCreateInternetGateway() {
    return this.to('CreateInternetGateway');
  }

  /**
   * Grants permission to create an Amazon VPC IP Address Manager (IPAM)
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateIpam.html
   */
  public toCreateIpam() {
    return this.to('CreateIpam');
  }

  /**
   * Grants permission to create an IP address pool for Amazon VPC IP Address Manager (IPAM), which is a collection of contiguous IP address CIDRs
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateIpamPool.html
   */
  public toCreateIpamPool() {
    return this.to('CreateIpamPool');
  }

  /**
   * Grants permission to create an Amazon VPC IP Address Manager (IPAM) scope, which is the highest-level container within IPAM
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateIpamScope.html
   */
  public toCreateIpamScope() {
    return this.to('CreateIpamScope');
  }

  /**
   * Grants permission to create a 2048-bit RSA key pair
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html
   */
  public toCreateKeyPair() {
    return this.to('CreateKeyPair');
  }

  /**
   * Grants permission to create a launch template
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html
   */
  public toCreateLaunchTemplate() {
    return this.to('CreateLaunchTemplate');
  }

  /**
   * Grants permission to create a new version of a launch template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplateVersion.html
   */
  public toCreateLaunchTemplateVersion() {
    return this.to('CreateLaunchTemplateVersion');
  }

  /**
   * Grants permission to create a static route for a local gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLocalGatewayRoute.html
   */
  public toCreateLocalGatewayRoute() {
    return this.to('CreateLocalGatewayRoute');
  }

  /**
   * Grants permission to allow a service to access a local gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/identity-access-management.html
   */
  public toCreateLocalGatewayRouteTablePermission() {
    return this.to('CreateLocalGatewayRouteTablePermission');
  }

  /**
   * Grants permission to associate a VPC with a local gateway route table
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLocalGatewayRouteTableVpcAssociation.html
   */
  public toCreateLocalGatewayRouteTableVpcAssociation() {
    return this.to('CreateLocalGatewayRouteTableVpcAssociation');
  }

  /**
   * Grants permission to create a managed prefix list
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateManagedPrefixList.html
   */
  public toCreateManagedPrefixList() {
    return this.to('CreateManagedPrefixList');
  }

  /**
   * Grants permission to create a NAT gateway in a subnet
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNatGateway.html
   */
  public toCreateNatGateway() {
    return this.to('CreateNatGateway');
  }

  /**
   * Grants permission to create a network ACL in a VPC
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkAcl.html
   */
  public toCreateNetworkAcl() {
    return this.to('CreateNetworkAcl');
  }

  /**
   * Grants permission to create a numbered entry (a rule) in a network ACL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkAclEntry.html
   */
  public toCreateNetworkAclEntry() {
    return this.to('CreateNetworkAclEntry');
  }

  /**
   * Grants permission to create a Network Access Scope
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInsightsAccessScope.html
   */
  public toCreateNetworkInsightsAccessScope() {
    return this.to('CreateNetworkInsightsAccessScope');
  }

  /**
   * Grants permission to create a path to analyze for reachability
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInsightsPath.html
   */
  public toCreateNetworkInsightsPath() {
    return this.to('CreateNetworkInsightsPath');
  }

  /**
   * Grants permission to create a network interface in a subnet
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html
   */
  public toCreateNetworkInterface() {
    return this.to('CreateNetworkInterface');
  }

  /**
   * Grants permission to create a permission for an AWS-authorized user to perform certain operations on a network interface
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterfacePermission.html
   */
  public toCreateNetworkInterfacePermission() {
    return this.to('CreateNetworkInterfacePermission');
  }

  /**
   * Grants permission to create a placement group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreatePlacementGroup.html
   */
  public toCreatePlacementGroup() {
    return this.to('CreatePlacementGroup');
  }

  /**
   * Grants permission to create a public IPv4 address pool for public IPv4 CIDRs that you own and bring to Amazon to manage with Amazon VPC IP Address Manager (IPAM)
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreatePublicIpv4Pool.html
   */
  public toCreatePublicIpv4Pool() {
    return this.to('CreatePublicIpv4Pool');
  }

  /**
   * Grants permission to create a root volume replacement task
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateReplaceRootVolumeTask.html
   */
  public toCreateReplaceRootVolumeTask() {
    return this.to('CreateReplaceRootVolumeTask');
  }

  /**
   * Grants permission to create a listing for Standard Reserved Instances to be sold in the Reserved Instance Marketplace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateReservedInstancesListing.html
   */
  public toCreateReservedInstancesListing() {
    return this.to('CreateReservedInstancesListing');
  }

  /**
   * Grants permission to start a task that restores an AMI from an S3 object previously created by using CreateStoreImageTask
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRestoreImageTask.html
   */
  public toCreateRestoreImageTask() {
    return this.to('CreateRestoreImageTask');
  }

  /**
   * Grants permission to create a route in a VPC route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRoute.html
   */
  public toCreateRoute() {
    return this.to('CreateRoute');
  }

  /**
   * Grants permission to create a route table for a VPC
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRouteTable.html
   */
  public toCreateRouteTable() {
    return this.to('CreateRouteTable');
  }

  /**
   * Grants permission to create a security group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html
   */
  public toCreateSecurityGroup() {
    return this.to('CreateSecurityGroup');
  }

  /**
   * Grants permission to create a snapshot of an EBS volume and store it in Amazon S3
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSnapshot.html
   */
  public toCreateSnapshot() {
    return this.to('CreateSnapshot');
  }

  /**
   * Grants permission to create crash-consistent snapshots of multiple EBS volumes and store them in Amazon S3
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSnapshots.html
   */
  public toCreateSnapshots() {
    return this.to('CreateSnapshots');
  }

  /**
   * Grants permission to create a data feed for Spot Instances to view Spot Instance usage logs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSpotDatafeedSubscription.html
   */
  public toCreateSpotDatafeedSubscription() {
    return this.to('CreateSpotDatafeedSubscription');
  }

  /**
   * Grants permission to store an AMI as a single object in an S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateStoreImageTask.html
   */
  public toCreateStoreImageTask() {
    return this.to('CreateStoreImageTask');
  }

  /**
   * Grants permission to create a subnet in a VPC
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSubnet.html
   */
  public toCreateSubnet() {
    return this.to('CreateSubnet');
  }

  /**
   * Grants permission to create a subnet CIDR reservation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSubnetCidrReservation.html
   */
  public toCreateSubnetCidrReservation() {
    return this.to('CreateSubnetCidrReservation');
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
    return this.to('CreateTags');
  }

  /**
   * Grants permission to create a traffic mirror filter
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilter.html
   */
  public toCreateTrafficMirrorFilter() {
    return this.to('CreateTrafficMirrorFilter');
  }

  /**
   * Grants permission to create a traffic mirror filter rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilterRule.html
   */
  public toCreateTrafficMirrorFilterRule() {
    return this.to('CreateTrafficMirrorFilterRule');
  }

  /**
   * Grants permission to create a traffic mirror session
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorSession.html
   */
  public toCreateTrafficMirrorSession() {
    return this.to('CreateTrafficMirrorSession');
  }

  /**
   * Grants permission to create a traffic mirror target
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorTarget.html
   */
  public toCreateTrafficMirrorTarget() {
    return this.to('CreateTrafficMirrorTarget');
  }

  /**
   * Grants permission to create a transit gateway
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGateway.html
   */
  public toCreateTransitGateway() {
    return this.to('CreateTransitGateway');
  }

  /**
   * Grants permission to create a Connect attachment from a specified transit gateway attachment
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayConnect.html
   */
  public toCreateTransitGatewayConnect() {
    return this.to('CreateTransitGatewayConnect');
  }

  /**
   * Grants permission to create a Connect peer between a transit gateway and an appliance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayConnectPeer.html
   */
  public toCreateTransitGatewayConnectPeer() {
    return this.to('CreateTransitGatewayConnectPeer');
  }

  /**
   * Grants permission to create a multicast domain for a transit gateway
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayMulticastDomain.html
   */
  public toCreateTransitGatewayMulticastDomain() {
    return this.to('CreateTransitGatewayMulticastDomain');
  }

  /**
   * Grants permission to request a transit gateway peering attachment between a requester and accepter transit gateway
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayPeeringAttachment.html
   */
  public toCreateTransitGatewayPeeringAttachment() {
    return this.to('CreateTransitGatewayPeeringAttachment');
  }

  /**
   * Grants permission to create a transit gateway prefix list reference
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayPrefixListReference.html
   */
  public toCreateTransitGatewayPrefixListReference() {
    return this.to('CreateTransitGatewayPrefixListReference');
  }

  /**
   * Grants permission to create a static route for a transit gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayRoute.html
   */
  public toCreateTransitGatewayRoute() {
    return this.to('CreateTransitGatewayRoute');
  }

  /**
   * Grants permission to create a route table for a transit gateway
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayRouteTable.html
   */
  public toCreateTransitGatewayRouteTable() {
    return this.to('CreateTransitGatewayRouteTable');
  }

  /**
   * Grants permission to attach a VPC to a transit gateway
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayVpcAttachment.html
   */
  public toCreateTransitGatewayVpcAttachment() {
    return this.to('CreateTransitGatewayVpcAttachment');
  }

  /**
   * Grants permission to create an EBS volume
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html
   */
  public toCreateVolume() {
    return this.to('CreateVolume');
  }

  /**
   * Grants permission to create a VPC with a specified CIDR block
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpc.html
   */
  public toCreateVpc() {
    return this.to('CreateVpc');
  }

  /**
   * Grants permission to create a VPC endpoint for an AWS service
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   * - route53:AssociateVPCWithHostedZone
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpoint.html
   */
  public toCreateVpcEndpoint() {
    return this.to('CreateVpcEndpoint');
  }

  /**
   * Grants permission to create a connection notification for a VPC endpoint or VPC endpoint service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointConnectionNotification.html
   */
  public toCreateVpcEndpointConnectionNotification() {
    return this.to('CreateVpcEndpointConnectionNotification');
  }

  /**
   * Grants permission to create a VPC endpoint service configuration to which service consumers (AWS accounts, IAM users, and IAM roles) can connect
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointServiceConfiguration.html
   */
  public toCreateVpcEndpointServiceConfiguration() {
    return this.to('CreateVpcEndpointServiceConfiguration');
  }

  /**
   * Grants permission to request a VPC peering connection between two VPCs
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcPeeringConnection.html
   */
  public toCreateVpcPeeringConnection() {
    return this.to('CreateVpcPeeringConnection');
  }

  /**
   * Grants permission to create a VPN connection between a virtual private gateway or transit gateway and a customer gateway
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnConnection.html
   */
  public toCreateVpnConnection() {
    return this.to('CreateVpnConnection');
  }

  /**
   * Grants permission to create a static route for a VPN connection between a virtual private gateway and a customer gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnConnectionRoute.html
   */
  public toCreateVpnConnectionRoute() {
    return this.to('CreateVpnConnectionRoute');
  }

  /**
   * Grants permission to create a virtual private gateway
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnGateway.html
   */
  public toCreateVpnGateway() {
    return this.to('CreateVpnGateway');
  }

  /**
   * Grants permission to delete a carrier gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteCarrierGateway.html
   */
  public toDeleteCarrierGateway() {
    return this.to('DeleteCarrierGateway');
  }

  /**
   * Grants permission to delete a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteClientVpnEndpoint.html
   */
  public toDeleteClientVpnEndpoint() {
    return this.to('DeleteClientVpnEndpoint');
  }

  /**
   * Grants permission to delete a route from a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteClientVpnRoute.html
   */
  public toDeleteClientVpnRoute() {
    return this.to('DeleteClientVpnRoute');
  }

  /**
   * Grants permission to deny a service from accessing a customer owned IP (CoIP) pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/identity-access-management.html
   */
  public toDeleteCoipPoolPermission() {
    return this.to('DeleteCoipPoolPermission');
  }

  /**
   * Grants permission to delete a customer gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteCustomerGateway.html
   */
  public toDeleteCustomerGateway() {
    return this.to('DeleteCustomerGateway');
  }

  /**
   * Grants permission to delete a set of DHCP options
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteDhcpOptions.html
   */
  public toDeleteDhcpOptions() {
    return this.to('DeleteDhcpOptions');
  }

  /**
   * Grants permission to delete an egress-only internet gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteEgressOnlyInternetGateway.html
   */
  public toDeleteEgressOnlyInternetGateway() {
    return this.to('DeleteEgressOnlyInternetGateway');
  }

  /**
   * Grants permission to delete one or more EC2 Fleets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteFleets.html
   */
  public toDeleteFleets() {
    return this.to('DeleteFleets');
  }

  /**
   * Grants permission to delete one or more flow logs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteFlowLogs.html
   */
  public toDeleteFlowLogs() {
    return this.to('DeleteFlowLogs');
  }

  /**
   * Grants permission to delete an Amazon FPGA Image (AFI)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteFpgaImage.html
   */
  public toDeleteFpgaImage() {
    return this.to('DeleteFpgaImage');
  }

  /**
   * Grants permission to delete the specified event window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteInstanceEventWindow.html
   */
  public toDeleteInstanceEventWindow() {
    return this.to('DeleteInstanceEventWindow');
  }

  /**
   * Grants permission to delete an internet gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteInternetGateway.html
   */
  public toDeleteInternetGateway() {
    return this.to('DeleteInternetGateway');
  }

  /**
   * Grants permission to delete an Amazon VPC IP Address Manager (IPAM) and remove all monitored data associated with the IPAM including the historical data for CIDRs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteIpam.html
   */
  public toDeleteIpam() {
    return this.to('DeleteIpam');
  }

  /**
   * Grants permission to delete an Amazon VPC IP Address Manager (IPAM) pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteIpamPool.html
   */
  public toDeleteIpamPool() {
    return this.to('DeleteIpamPool');
  }

  /**
   * Grants permission to delete the scope for an Amazon VPC IP Address Manager (IPAM)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteIpamScope.html
   */
  public toDeleteIpamScope() {
    return this.to('DeleteIpamScope');
  }

  /**
   * Grants permission to delete a key pair by removing the public key from Amazon EC2
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteKeyPair.html
   */
  public toDeleteKeyPair() {
    return this.to('DeleteKeyPair');
  }

  /**
   * Grants permission to delete a launch template and its associated versions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLaunchTemplate.html
   */
  public toDeleteLaunchTemplate() {
    return this.to('DeleteLaunchTemplate');
  }

  /**
   * Grants permission to delete one or more versions of a launch template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLaunchTemplateVersions.html
   */
  public toDeleteLaunchTemplateVersions() {
    return this.to('DeleteLaunchTemplateVersions');
  }

  /**
   * Grants permission to delete a route from a local gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLocalGatewayRoute.html
   */
  public toDeleteLocalGatewayRoute() {
    return this.to('DeleteLocalGatewayRoute');
  }

  /**
   * Grants permission to deny a service from accessing a local gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/identity-access-management.html
   */
  public toDeleteLocalGatewayRouteTablePermission() {
    return this.to('DeleteLocalGatewayRouteTablePermission');
  }

  /**
   * Grants permission to delete an association between a VPC and local gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLocalGatewayRouteTableVpcAssociation.html
   */
  public toDeleteLocalGatewayRouteTableVpcAssociation() {
    return this.to('DeleteLocalGatewayRouteTableVpcAssociation');
  }

  /**
   * Grants permission to delete a managed prefix list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteManagedPrefixList.html
   */
  public toDeleteManagedPrefixList() {
    return this.to('DeleteManagedPrefixList');
  }

  /**
   * Grants permission to delete a NAT gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNatGateway.html
   */
  public toDeleteNatGateway() {
    return this.to('DeleteNatGateway');
  }

  /**
   * Grants permission to delete a network ACL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkAcl.html
   */
  public toDeleteNetworkAcl() {
    return this.to('DeleteNetworkAcl');
  }

  /**
   * Grants permission to delete an inbound or outbound entry (rule) from a network ACL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkAclEntry.html
   */
  public toDeleteNetworkAclEntry() {
    return this.to('DeleteNetworkAclEntry');
  }

  /**
   * Grants permission to delete a Network Access Scope
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInsightsAccessScope.html
   */
  public toDeleteNetworkInsightsAccessScope() {
    return this.to('DeleteNetworkInsightsAccessScope');
  }

  /**
   * Grants permission to delete a Network Access Scope analysis
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInsightsAccessScopeAnalysis.html
   */
  public toDeleteNetworkInsightsAccessScopeAnalysis() {
    return this.to('DeleteNetworkInsightsAccessScopeAnalysis');
  }

  /**
   * Grants permission to delete a network insights analysis
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInsightsAnalysis.html
   */
  public toDeleteNetworkInsightsAnalysis() {
    return this.to('DeleteNetworkInsightsAnalysis');
  }

  /**
   * Grants permission to delete a network insights path
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInsightsPath.html
   */
  public toDeleteNetworkInsightsPath() {
    return this.to('DeleteNetworkInsightsPath');
  }

  /**
   * Grants permission to delete a detached network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInterface.html
   */
  public toDeleteNetworkInterface() {
    return this.to('DeleteNetworkInterface');
  }

  /**
   * Grants permission to delete a permission that is associated with a network interface
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInterfacePermission.html
   */
  public toDeleteNetworkInterfacePermission() {
    return this.to('DeleteNetworkInterfacePermission');
  }

  /**
   * Grants permission to delete a placement group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeletePlacementGroup.html
   */
  public toDeletePlacementGroup() {
    return this.to('DeletePlacementGroup');
  }

  /**
   * Grants permission to delete a public IPv4 address pool for public IPv4 CIDRs that you own and brought to Amazon to manage with Amazon VPC IP Address Manager (IPAM)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeletePublicIpv4Pool.html
   */
  public toDeletePublicIpv4Pool() {
    return this.to('DeletePublicIpv4Pool');
  }

  /**
   * Grants permission to delete the queued purchases for the specified Reserved Instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteQueuedReservedInstances.html
   */
  public toDeleteQueuedReservedInstances() {
    return this.to('DeleteQueuedReservedInstances');
  }

  /**
   * Grants permission to delete a route from a route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRoute.html
   */
  public toDeleteRoute() {
    return this.to('DeleteRoute');
  }

  /**
   * Grants permission to delete a route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRouteTable.html
   */
  public toDeleteRouteTable() {
    return this.to('DeleteRouteTable');
  }

  /**
   * Grants permission to delete a security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSecurityGroup.html
   */
  public toDeleteSecurityGroup() {
    return this.to('DeleteSecurityGroup');
  }

  /**
   * Grants permission to delete a snapshot of an EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html
   */
  public toDeleteSnapshot() {
    return this.to('DeleteSnapshot');
  }

  /**
   * Grants permission to delete a data feed for Spot Instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSpotDatafeedSubscription.html
   */
  public toDeleteSpotDatafeedSubscription() {
    return this.to('DeleteSpotDatafeedSubscription');
  }

  /**
   * Grants permission to delete a subnet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSubnet.html
   */
  public toDeleteSubnet() {
    return this.to('DeleteSubnet');
  }

  /**
   * Grants permission to delete a subnet CIDR reservation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSubnetCidrReservation.html
   */
  public toDeleteSubnetCidrReservation() {
    return this.to('DeleteSubnetCidrReservation');
  }

  /**
   * Grants permission to delete one or more tags from Amazon EC2 resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTags.html
   */
  public toDeleteTags() {
    return this.to('DeleteTags');
  }

  /**
   * Grants permission to delete a traffic mirror filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorFilter.html
   */
  public toDeleteTrafficMirrorFilter() {
    return this.to('DeleteTrafficMirrorFilter');
  }

  /**
   * Grants permission to delete a traffic mirror filter rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorFilterRule.html
   */
  public toDeleteTrafficMirrorFilterRule() {
    return this.to('DeleteTrafficMirrorFilterRule');
  }

  /**
   * Grants permission to delete a traffic mirror session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorSession.html
   */
  public toDeleteTrafficMirrorSession() {
    return this.to('DeleteTrafficMirrorSession');
  }

  /**
   * Grants permission to delete a traffic mirror target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorTarget.html
   */
  public toDeleteTrafficMirrorTarget() {
    return this.to('DeleteTrafficMirrorTarget');
  }

  /**
   * Grants permission to delete a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGateway.html
   */
  public toDeleteTransitGateway() {
    return this.to('DeleteTransitGateway');
  }

  /**
   * Grants permission to delete a transit gateway connect attachment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayConnect.html
   */
  public toDeleteTransitGatewayConnect() {
    return this.to('DeleteTransitGatewayConnect');
  }

  /**
   * Grants permission to delete a transit gateway connect peer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayConnectPeer.html
   */
  public toDeleteTransitGatewayConnectPeer() {
    return this.to('DeleteTransitGatewayConnectPeer');
  }

  /**
   * Grants permission to delete a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayMulticastDomain.html
   */
  public toDeleteTransitGatewayMulticastDomain() {
    return this.to('DeleteTransitGatewayMulticastDomain');
  }

  /**
   * Grants permission to delete a peering attachment from a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayPeeringAttachment.html
   */
  public toDeleteTransitGatewayPeeringAttachment() {
    return this.to('DeleteTransitGatewayPeeringAttachment');
  }

  /**
   * Grants permission to delete a transit gateway prefix list reference
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayPrefixListReference.html
   */
  public toDeleteTransitGatewayPrefixListReference() {
    return this.to('DeleteTransitGatewayPrefixListReference');
  }

  /**
   * Grants permission to delete a route from a transit gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayRoute.html
   */
  public toDeleteTransitGatewayRoute() {
    return this.to('DeleteTransitGatewayRoute');
  }

  /**
   * Grants permission to delete a transit gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayRouteTable.html
   */
  public toDeleteTransitGatewayRouteTable() {
    return this.to('DeleteTransitGatewayRouteTable');
  }

  /**
   * Grants permission to delete a VPC attachment from a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayVpcAttachment.html
   */
  public toDeleteTransitGatewayVpcAttachment() {
    return this.to('DeleteTransitGatewayVpcAttachment');
  }

  /**
   * Grants permission to delete an EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVolume.html
   */
  public toDeleteVolume() {
    return this.to('DeleteVolume');
  }

  /**
   * Grants permission to delete a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpc.html
   */
  public toDeleteVpc() {
    return this.to('DeleteVpc');
  }

  /**
   * Grants permission to delete one or more VPC endpoint connection notifications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcEndpointConnectionNotifications.html
   */
  public toDeleteVpcEndpointConnectionNotifications() {
    return this.to('DeleteVpcEndpointConnectionNotifications');
  }

  /**
   * Grants permission to delete one or more VPC endpoint service configurations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcEndpointServiceConfigurations.html
   */
  public toDeleteVpcEndpointServiceConfigurations() {
    return this.to('DeleteVpcEndpointServiceConfigurations');
  }

  /**
   * Grants permission to delete one or more VPC endpoints
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcEndpoints.html
   */
  public toDeleteVpcEndpoints() {
    return this.to('DeleteVpcEndpoints');
  }

  /**
   * Grants permission to delete a VPC peering connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcPeeringConnection.html
   */
  public toDeleteVpcPeeringConnection() {
    return this.to('DeleteVpcPeeringConnection');
  }

  /**
   * Grants permission to delete a VPN connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnConnection.html
   */
  public toDeleteVpnConnection() {
    return this.to('DeleteVpnConnection');
  }

  /**
   * Grants permission to delete a static route for a VPN connection between a virtual private gateway and a customer gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnConnectionRoute.html
   */
  public toDeleteVpnConnectionRoute() {
    return this.to('DeleteVpnConnectionRoute');
  }

  /**
   * Grants permission to delete a virtual private gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnGateway.html
   */
  public toDeleteVpnGateway() {
    return this.to('DeleteVpnGateway');
  }

  /**
   * Grants permission to release an IP address range that was provisioned through bring your own IP addresses (BYOIP), and to delete the corresponding address pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeprovisionByoipCidr.html
   */
  public toDeprovisionByoipCidr() {
    return this.to('DeprovisionByoipCidr');
  }

  /**
   * Grants permission to deprovision a CIDR provisioned from an Amazon VPC IP Address Manager (IPAM) pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeprovisionIpamPoolCidr.html
   */
  public toDeprovisionIpamPoolCidr() {
    return this.to('DeprovisionIpamPoolCidr');
  }

  /**
   * Grants permission to deprovision a CIDR from a public IPv4 pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeprovisionPublicIpv4PoolCidr.html
   */
  public toDeprovisionPublicIpv4PoolCidr() {
    return this.to('DeprovisionPublicIpv4PoolCidr');
  }

  /**
   * Grants permission to deregister an Amazon Machine Image (AMI)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterImage.html
   */
  public toDeregisterImage() {
    return this.to('DeregisterImage');
  }

  /**
   * Grants permission to remove tags from the set of tags to include in notifications about scheduled events for your instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterInstanceEventNotificationAttributes.html
   */
  public toDeregisterInstanceEventNotificationAttributes() {
    return this.to('DeregisterInstanceEventNotificationAttributes');
  }

  /**
   * Grants permission to deregister one or more network interface members from a group IP address in a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterTransitGatewayMulticastGroupMembers.html
   */
  public toDeregisterTransitGatewayMulticastGroupMembers() {
    return this.to('DeregisterTransitGatewayMulticastGroupMembers');
  }

  /**
   * Grants permission to deregister one or more network interface sources from a group IP address in a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterTransitGatewayMulticastGroupSources.html
   */
  public toDeregisterTransitGatewayMulticastGroupSources() {
    return this.to('DeregisterTransitGatewayMulticastGroupSources');
  }

  /**
   * Grants permission to describe the attributes of the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    return this.to('DescribeAccountAttributes');
  }

  /**
   * Grants permission to describe one or more Elastic IP addresses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAddresses.html
   */
  public toDescribeAddresses() {
    return this.to('DescribeAddresses');
  }

  /**
   * Grants permission to describe the attributes of the specified Elastic IP addresses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAddressesAttribute.html
   */
  public toDescribeAddressesAttribute() {
    return this.to('DescribeAddressesAttribute');
  }

  /**
   * Grants permission to describe the longer ID format settings for all resource types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAggregateIdFormat.html
   */
  public toDescribeAggregateIdFormat() {
    return this.to('DescribeAggregateIdFormat');
  }

  /**
   * Grants permission to describe one or more of the Availability Zones that are available to you
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html
   */
  public toDescribeAvailabilityZones() {
    return this.to('DescribeAvailabilityZones');
  }

  /**
   * Grants permission to describe one or more bundling tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeBundleTasks.html
   */
  public toDescribeBundleTasks() {
    return this.to('DescribeBundleTasks');
  }

  /**
   * Grants permission to describe the IP address ranges that were provisioned through bring your own IP addresses (BYOIP)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeByoipCidrs.html
   */
  public toDescribeByoipCidrs() {
    return this.to('DescribeByoipCidrs');
  }

  /**
   * Grants permission to describe one or more Capacity Reservation Fleets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCapacityReservationFleets.html
   */
  public toDescribeCapacityReservationFleets() {
    return this.to('DescribeCapacityReservationFleets');
  }

  /**
   * Grants permission to describe one or more Capacity Reservations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCapacityReservations.html
   */
  public toDescribeCapacityReservations() {
    return this.to('DescribeCapacityReservations');
  }

  /**
   * Grants permission to describe one or more Carrier Gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCarrierGateways.html
   */
  public toDescribeCarrierGateways() {
    return this.to('DescribeCarrierGateways');
  }

  /**
   * Grants permission to describe one or more linked EC2-Classic instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClassicLinkInstances.html
   */
  public toDescribeClassicLinkInstances() {
    return this.to('DescribeClassicLinkInstances');
  }

  /**
   * Grants permission to describe the authorization rules for a Client VPN endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnAuthorizationRules.html
   */
  public toDescribeClientVpnAuthorizationRules() {
    return this.to('DescribeClientVpnAuthorizationRules');
  }

  /**
   * Grants permission to describe active client connections and connections that have been terminated within the last 60 minutes for a Client VPN endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnConnections.html
   */
  public toDescribeClientVpnConnections() {
    return this.to('DescribeClientVpnConnections');
  }

  /**
   * Grants permission to describe one or more Client VPN endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnEndpoints.html
   */
  public toDescribeClientVpnEndpoints() {
    return this.to('DescribeClientVpnEndpoints');
  }

  /**
   * Grants permission to describe the routes for a Client VPN endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnRoutes.html
   */
  public toDescribeClientVpnRoutes() {
    return this.to('DescribeClientVpnRoutes');
  }

  /**
   * Grants permission to describe the target networks that are associated with a Client VPN endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnTargetNetworks.html
   */
  public toDescribeClientVpnTargetNetworks() {
    return this.to('DescribeClientVpnTargetNetworks');
  }

  /**
   * Grants permission to describe the specified customer-owned address pools or all of your customer-owned address pools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCoipPools.html
   */
  public toDescribeCoipPools() {
    return this.to('DescribeCoipPools');
  }

  /**
   * Grants permission to describe one or more conversion tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeConversionTasks.html
   */
  public toDescribeConversionTasks() {
    return this.to('DescribeConversionTasks');
  }

  /**
   * Grants permission to describe one or more customer gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCustomerGateways.html
   */
  public toDescribeCustomerGateways() {
    return this.to('DescribeCustomerGateways');
  }

  /**
   * Grants permission to describe one or more DHCP options sets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeDhcpOptions.html
   */
  public toDescribeDhcpOptions() {
    return this.to('DescribeDhcpOptions');
  }

  /**
   * Grants permission to describe one or more egress-only internet gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeEgressOnlyInternetGateways.html
   */
  public toDescribeEgressOnlyInternetGateways() {
    return this.to('DescribeEgressOnlyInternetGateways');
  }

  /**
   * Grants permission to describe an Elastic Graphics accelerator that is associated with an instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeElasticGpus.html
   */
  public toDescribeElasticGpus() {
    return this.to('DescribeElasticGpus');
  }

  /**
   * Grants permission to describe one or more export image tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeExportImageTasks.html
   */
  public toDescribeExportImageTasks() {
    return this.to('DescribeExportImageTasks');
  }

  /**
   * Grants permission to describe one or more export instance tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeExportTasks.html
   */
  public toDescribeExportTasks() {
    return this.to('DescribeExportTasks');
  }

  /**
   * Grants permission to describe fast-launch enabled Windows AMIs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFastLaunchImages.html
   */
  public toDescribeFastLaunchImages() {
    return this.to('DescribeFastLaunchImages');
  }

  /**
   * Grants permission to describe the state of fast snapshot restores for snapshots
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFastSnapshotRestores.html
   */
  public toDescribeFastSnapshotRestores() {
    return this.to('DescribeFastSnapshotRestores');
  }

  /**
   * Grants permission to describe the events for an EC2 Fleet during a specified time
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFleetHistory.html
   */
  public toDescribeFleetHistory() {
    return this.to('DescribeFleetHistory');
  }

  /**
   * Grants permission to describe the running instances for an EC2 Fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFleetInstances.html
   */
  public toDescribeFleetInstances() {
    return this.to('DescribeFleetInstances');
  }

  /**
   * Grants permission to describe one or more EC2 Fleets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFleets.html
   */
  public toDescribeFleets() {
    return this.to('DescribeFleets');
  }

  /**
   * Grants permission to describe one or more flow logs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFlowLogs.html
   */
  public toDescribeFlowLogs() {
    return this.to('DescribeFlowLogs');
  }

  /**
   * Grants permission to describe the attributes of an Amazon FPGA Image (AFI)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFpgaImageAttribute.html
   */
  public toDescribeFpgaImageAttribute() {
    return this.to('DescribeFpgaImageAttribute');
  }

  /**
   * Grants permission to describe one or more Amazon FPGA Images (AFIs)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFpgaImages.html
   */
  public toDescribeFpgaImages() {
    return this.to('DescribeFpgaImages');
  }

  /**
   * Grants permission to describe the Dedicated Host Reservations that are available to purchase
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeHostReservationOfferings.html
   */
  public toDescribeHostReservationOfferings() {
    return this.to('DescribeHostReservationOfferings');
  }

  /**
   * Grants permission to describe the Dedicated Host Reservations that are associated with Dedicated Hosts in the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeHostReservations.html
   */
  public toDescribeHostReservations() {
    return this.to('DescribeHostReservations');
  }

  /**
   * Grants permission to describe one or more Dedicated Hosts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeHosts.html
   */
  public toDescribeHosts() {
    return this.to('DescribeHosts');
  }

  /**
   * Grants permission to describe the IAM instance profile associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIamInstanceProfileAssociations.html
   */
  public toDescribeIamInstanceProfileAssociations() {
    return this.to('DescribeIamInstanceProfileAssociations');
  }

  /**
   * Grants permission to describe the ID format settings for resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIdFormat.html
   */
  public toDescribeIdFormat() {
    return this.to('DescribeIdFormat');
  }

  /**
   * Grants permission to describe the ID format settings for resources for an IAM user, IAM role, or root user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIdentityIdFormat.html
   */
  public toDescribeIdentityIdFormat() {
    return this.to('DescribeIdentityIdFormat');
  }

  /**
   * Grants permission to describe an attribute of an Amazon Machine Image (AMI)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImageAttribute.html
   */
  public toDescribeImageAttribute() {
    return this.to('DescribeImageAttribute');
  }

  /**
   * Grants permission to describe one or more images (AMIs, AKIs, and ARIs)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html
   */
  public toDescribeImages() {
    return this.to('DescribeImages');
  }

  /**
   * Grants permission to describe import virtual machine or import snapshot tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImportImageTasks.html
   */
  public toDescribeImportImageTasks() {
    return this.to('DescribeImportImageTasks');
  }

  /**
   * Grants permission to describe import snapshot tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImportSnapshotTasks.html
   */
  public toDescribeImportSnapshotTasks() {
    return this.to('DescribeImportSnapshotTasks');
  }

  /**
   * Grants permission to describe the attributes of an instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceAttribute.html
   */
  public toDescribeInstanceAttribute() {
    return this.to('DescribeInstanceAttribute');
  }

  /**
   * Grants permission to describe the credit option for CPU usage of one or more burstable performance instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceCreditSpecifications.html
   */
  public toDescribeInstanceCreditSpecifications() {
    return this.to('DescribeInstanceCreditSpecifications');
  }

  /**
   * Grants permission to describe the set of tags to include in notifications about scheduled events for your instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceEventNotificationAttributes.html
   */
  public toDescribeInstanceEventNotificationAttributes() {
    return this.to('DescribeInstanceEventNotificationAttributes');
  }

  /**
   * Grants permission to describe the specified event windows or all event windows
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceEventWindows.html
   */
  public toDescribeInstanceEventWindows() {
    return this.to('DescribeInstanceEventWindows');
  }

  /**
   * Grants permission to describe the status of one or more instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceStatus.html
   */
  public toDescribeInstanceStatus() {
    return this.to('DescribeInstanceStatus');
  }

  /**
   * Grants permission to describe the set of instance types that are offered in a location
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTypeOfferings.html
   */
  public toDescribeInstanceTypeOfferings() {
    return this.to('DescribeInstanceTypeOfferings');
  }

  /**
   * Grants permission to describe the details of instance types that are offered in a location
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTypes.html
   */
  public toDescribeInstanceTypes() {
    return this.to('DescribeInstanceTypes');
  }

  /**
   * Grants permission to describe one or more instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html
   */
  public toDescribeInstances() {
    return this.to('DescribeInstances');
  }

  /**
   * Grants permission to describe one or more internet gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInternetGateways.html
   */
  public toDescribeInternetGateways() {
    return this.to('DescribeInternetGateways');
  }

  /**
   * Grants permission to describe Amazon VPC IP Address Manager (IPAM) pools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIpamPools.html
   */
  public toDescribeIpamPools() {
    return this.to('DescribeIpamPools');
  }

  /**
   * Grants permission to describe Amazon VPC IP Address Manager (IPAM) scopes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIpamScopes.html
   */
  public toDescribeIpamScopes() {
    return this.to('DescribeIpamScopes');
  }

  /**
   * Grants permission to describe an Amazon VPC IP Address Manager (IPAM)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIpams.html
   */
  public toDescribeIpams() {
    return this.to('DescribeIpams');
  }

  /**
   * Grants permission to describe one or more IPv6 address pools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIpv6Pools.html
   */
  public toDescribeIpv6Pools() {
    return this.to('DescribeIpv6Pools');
  }

  /**
   * Grants permission to describe one or more key pairs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeKeyPairs.html
   */
  public toDescribeKeyPairs() {
    return this.to('DescribeKeyPairs');
  }

  /**
   * Grants permission to describe one or more launch template versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplateVersions.html
   */
  public toDescribeLaunchTemplateVersions() {
    return this.to('DescribeLaunchTemplateVersions');
  }

  /**
   * Grants permission to describe one or more launch templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplates.html
   */
  public toDescribeLaunchTemplates() {
    return this.to('DescribeLaunchTemplates');
  }

  /**
   * Grants permission to allow a service to describe a local gateway route table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/identity-access-management.html
   */
  public toDescribeLocalGatewayRouteTablePermissions() {
    return this.to('DescribeLocalGatewayRouteTablePermissions');
  }

  /**
   * Grants permission to describe the associations between virtual interface groups and local gateway route tables
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations.html
   */
  public toDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations() {
    return this.to('DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations');
  }

  /**
   * Grants permission to describe an association between VPCs and local gateway route tables
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayRouteTableVpcAssociations.html
   */
  public toDescribeLocalGatewayRouteTableVpcAssociations() {
    return this.to('DescribeLocalGatewayRouteTableVpcAssociations');
  }

  /**
   * Grants permission to describe one or more local gateway route tables
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayRouteTables.html
   */
  public toDescribeLocalGatewayRouteTables() {
    return this.to('DescribeLocalGatewayRouteTables');
  }

  /**
   * Grants permission to describe local gateway virtual interface groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayVirtualInterfaceGroups.html
   */
  public toDescribeLocalGatewayVirtualInterfaceGroups() {
    return this.to('DescribeLocalGatewayVirtualInterfaceGroups');
  }

  /**
   * Grants permission to describe local gateway virtual interfaces
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayVirtualInterfaces.html
   */
  public toDescribeLocalGatewayVirtualInterfaces() {
    return this.to('DescribeLocalGatewayVirtualInterfaces');
  }

  /**
   * Grants permission to describe one or more local gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGateways.html
   */
  public toDescribeLocalGateways() {
    return this.to('DescribeLocalGateways');
  }

  /**
   * Grants permission to describe your managed prefix lists and any AWS-managed prefix lists
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeManagedPrefixLists.html
   */
  public toDescribeManagedPrefixLists() {
    return this.to('DescribeManagedPrefixLists');
  }

  /**
   * Grants permission to describe Elastic IP addresses that are being moved to the EC2-VPC platform
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeMovingAddresses.html
   */
  public toDescribeMovingAddresses() {
    return this.to('DescribeMovingAddresses');
  }

  /**
   * Grants permission to describe one or more NAT gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNatGateways.html
   */
  public toDescribeNatGateways() {
    return this.to('DescribeNatGateways');
  }

  /**
   * Grants permission to describe one or more network ACLs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkAcls.html
   */
  public toDescribeNetworkAcls() {
    return this.to('DescribeNetworkAcls');
  }

  /**
   * Grants permission to describe one or more Network Access Scope analyses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInsightsAccessScopeAnalyses.html
   */
  public toDescribeNetworkInsightsAccessScopeAnalyses() {
    return this.to('DescribeNetworkInsightsAccessScopeAnalyses');
  }

  /**
   * Grants permission to describe the Network Access Scopes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInsightsAccessScopes.html
   */
  public toDescribeNetworkInsightsAccessScopes() {
    return this.to('DescribeNetworkInsightsAccessScopes');
  }

  /**
   * Grants permission to describe one or more network insights analyses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInsightsAnalyses.html
   */
  public toDescribeNetworkInsightsAnalyses() {
    return this.to('DescribeNetworkInsightsAnalyses');
  }

  /**
   * Grants permission to describe one or more network insights paths
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInsightsPaths.html
   */
  public toDescribeNetworkInsightsPaths() {
    return this.to('DescribeNetworkInsightsPaths');
  }

  /**
   * Grants permission to describe a network interface attribute
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInterfaceAttribute.html
   */
  public toDescribeNetworkInterfaceAttribute() {
    return this.to('DescribeNetworkInterfaceAttribute');
  }

  /**
   * Grants permission to describe the permissions that are associated with a network interface
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInterfacePermissions.html
   */
  public toDescribeNetworkInterfacePermissions() {
    return this.to('DescribeNetworkInterfacePermissions');
  }

  /**
   * Grants permission to describe one or more network interfaces
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInterfaces.html
   */
  public toDescribeNetworkInterfaces() {
    return this.to('DescribeNetworkInterfaces');
  }

  /**
   * Grants permission to describe one or more placement groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePlacementGroups.html
   */
  public toDescribePlacementGroups() {
    return this.to('DescribePlacementGroups');
  }

  /**
   * Grants permission to describe available AWS services in a prefix list format
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePrefixLists.html
   */
  public toDescribePrefixLists() {
    return this.to('DescribePrefixLists');
  }

  /**
   * Grants permission to describe the ID format settings for the root user and all IAM roles and IAM users that have explicitly specified a longer ID (17-character ID) preference
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePrincipalIdFormat.html
   */
  public toDescribePrincipalIdFormat() {
    return this.to('DescribePrincipalIdFormat');
  }

  /**
   * Grants permission to describe one or more IPv4 address pools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePublicIpv4Pools.html
   */
  public toDescribePublicIpv4Pools() {
    return this.to('DescribePublicIpv4Pools');
  }

  /**
   * Grants permission to describe one or more AWS Regions that are currently available in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRegions.html
   */
  public toDescribeRegions() {
    return this.to('DescribeRegions');
  }

  /**
   * Grants permission to describe a root volume replacement task
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReplaceRootVolumeTasks.html
   */
  public toDescribeReplaceRootVolumeTasks() {
    return this.to('DescribeReplaceRootVolumeTasks');
  }

  /**
   * Grants permission to describe one or more purchased Reserved Instances in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstances.html
   */
  public toDescribeReservedInstances() {
    return this.to('DescribeReservedInstances');
  }

  /**
   * Grants permission to describe your account's Reserved Instance listings in the Reserved Instance Marketplace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesListings.html
   */
  public toDescribeReservedInstancesListings() {
    return this.to('DescribeReservedInstancesListings');
  }

  /**
   * Grants permission to describe the modifications made to one or more Reserved Instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesModifications.html
   */
  public toDescribeReservedInstancesModifications() {
    return this.to('DescribeReservedInstancesModifications');
  }

  /**
   * Grants permission to describe the Reserved Instance offerings that are available for purchase
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesOfferings.html
   */
  public toDescribeReservedInstancesOfferings() {
    return this.to('DescribeReservedInstancesOfferings');
  }

  /**
   * Grants permission to describe one or more route tables
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRouteTables.html
   */
  public toDescribeRouteTables() {
    return this.to('DescribeRouteTables');
  }

  /**
   * Grants permission to find available schedules for Scheduled Instances
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeScheduledInstanceAvailability.html
   */
  public toDescribeScheduledInstanceAvailability() {
    return this.to('DescribeScheduledInstanceAvailability');
  }

  /**
   * Grants permission to describe one or more Scheduled Instances in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeScheduledInstances.html
   */
  public toDescribeScheduledInstances() {
    return this.to('DescribeScheduledInstances');
  }

  /**
   * Grants permission to describe the VPCs on the other side of a VPC peering connection that are referencing specified VPC security groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroupReferences.html
   */
  public toDescribeSecurityGroupReferences() {
    return this.to('DescribeSecurityGroupReferences');
  }

  /**
   * Grants permission to describe one or more of your security group rules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroupRules.html
   */
  public toDescribeSecurityGroupRules() {
    return this.to('DescribeSecurityGroupRules');
  }

  /**
   * Grants permission to describe one or more security groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroups.html
   */
  public toDescribeSecurityGroups() {
    return this.to('DescribeSecurityGroups');
  }

  /**
   * Grants permission to describe an attribute of a snapshot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshotAttribute.html
   */
  public toDescribeSnapshotAttribute() {
    return this.to('DescribeSnapshotAttribute');
  }

  /**
   * Grants permission to describe the storage tier status for Amazon EBS snapshots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshotTierStatus.html
   */
  public toDescribeSnapshotTierStatus() {
    return this.to('DescribeSnapshotTierStatus');
  }

  /**
   * Grants permission to describe one or more EBS snapshots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html
   */
  public toDescribeSnapshots() {
    return this.to('DescribeSnapshots');
  }

  /**
   * Grants permission to describe the data feed for Spot Instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotDatafeedSubscription.html
   */
  public toDescribeSpotDatafeedSubscription() {
    return this.to('DescribeSpotDatafeedSubscription');
  }

  /**
   * Grants permission to describe the running instances for a Spot Fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetInstances.html
   */
  public toDescribeSpotFleetInstances() {
    return this.to('DescribeSpotFleetInstances');
  }

  /**
   * Grants permission to describe the events for a Spot Fleet request during a specified time
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetRequestHistory.html
   */
  public toDescribeSpotFleetRequestHistory() {
    return this.to('DescribeSpotFleetRequestHistory');
  }

  /**
   * Grants permission to describe one or more Spot Fleet requests
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetRequests.html
   */
  public toDescribeSpotFleetRequests() {
    return this.to('DescribeSpotFleetRequests');
  }

  /**
   * Grants permission to describe one or more Spot Instance requests
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotInstanceRequests.html
   */
  public toDescribeSpotInstanceRequests() {
    return this.to('DescribeSpotInstanceRequests');
  }

  /**
   * Grants permission to describe the Spot Instance price history
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotPriceHistory.html
   */
  public toDescribeSpotPriceHistory() {
    return this.to('DescribeSpotPriceHistory');
  }

  /**
   * Grants permission to describe the stale security group rules for security groups in a specified VPC
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeStaleSecurityGroups.html
   */
  public toDescribeStaleSecurityGroups() {
    return this.to('DescribeStaleSecurityGroups');
  }

  /**
   * Grants permission to describe the progress of the AMI store tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeStoreImageTasks.html
   */
  public toDescribeStoreImageTasks() {
    return this.to('DescribeStoreImageTasks');
  }

  /**
   * Grants permission to describe one or more subnets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSubnets.html
   */
  public toDescribeSubnets() {
    return this.to('DescribeSubnets');
  }

  /**
   * Grants permission to describe one or more tags for an Amazon EC2 resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    return this.to('DescribeTags');
  }

  /**
   * Grants permission to describe one or more traffic mirror filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTrafficMirrorFilters.html
   */
  public toDescribeTrafficMirrorFilters() {
    return this.to('DescribeTrafficMirrorFilters');
  }

  /**
   * Grants permission to describe one or more traffic mirror sessions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTrafficMirrorSessions.html
   */
  public toDescribeTrafficMirrorSessions() {
    return this.to('DescribeTrafficMirrorSessions');
  }

  /**
   * Grants permission to describe one or more traffic mirror targets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTrafficMirrorTargets.html
   */
  public toDescribeTrafficMirrorTargets() {
    return this.to('DescribeTrafficMirrorTargets');
  }

  /**
   * Grants permission to describe one or more attachments between resources and transit gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayAttachments.html
   */
  public toDescribeTransitGatewayAttachments() {
    return this.to('DescribeTransitGatewayAttachments');
  }

  /**
   * Grants permission to describe one or more transit gateway connect peers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayConnectPeers.html
   */
  public toDescribeTransitGatewayConnectPeers() {
    return this.to('DescribeTransitGatewayConnectPeers');
  }

  /**
   * Grants permission to describe one or more transit gateway connect attachments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayConnects.html
   */
  public toDescribeTransitGatewayConnects() {
    return this.to('DescribeTransitGatewayConnects');
  }

  /**
   * Grants permission to describe one or more transit gateway multicast domains
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayMulticastDomains.html
   */
  public toDescribeTransitGatewayMulticastDomains() {
    return this.to('DescribeTransitGatewayMulticastDomains');
  }

  /**
   * Grants permission to describe one or more transit gateway peering attachments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayPeeringAttachments.html
   */
  public toDescribeTransitGatewayPeeringAttachments() {
    return this.to('DescribeTransitGatewayPeeringAttachments');
  }

  /**
   * Grants permission to describe one or more transit gateway route tables
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayRouteTables.html
   */
  public toDescribeTransitGatewayRouteTables() {
    return this.to('DescribeTransitGatewayRouteTables');
  }

  /**
   * Grants permission to describe one or more VPC attachments on a transit gateway
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayVpcAttachments.html
   */
  public toDescribeTransitGatewayVpcAttachments() {
    return this.to('DescribeTransitGatewayVpcAttachments');
  }

  /**
   * Grants permission to describe one or more transit gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGateways.html
   */
  public toDescribeTransitGateways() {
    return this.to('DescribeTransitGateways');
  }

  /**
   * Grants permission to describe one or more network interface trunk associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTrunkInterfaceAssociations.html
   */
  public toDescribeTrunkInterfaceAssociations() {
    return this.to('DescribeTrunkInterfaceAssociations');
  }

  /**
   * Grants permission to describe an attribute of an EBS volume
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumeAttribute.html
   */
  public toDescribeVolumeAttribute() {
    return this.to('DescribeVolumeAttribute');
  }

  /**
   * Grants permission to describe the status of one or more EBS volumes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumeStatus.html
   */
  public toDescribeVolumeStatus() {
    return this.to('DescribeVolumeStatus');
  }

  /**
   * Grants permission to describe one or more EBS volumes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumes.html
   */
  public toDescribeVolumes() {
    return this.to('DescribeVolumes');
  }

  /**
   * Grants permission to describe the current modification status of one or more EBS volumes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumesModifications.html
   */
  public toDescribeVolumesModifications() {
    return this.to('DescribeVolumesModifications');
  }

  /**
   * Grants permission to describe an attribute of a VPC
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcAttribute.html
   */
  public toDescribeVpcAttribute() {
    return this.to('DescribeVpcAttribute');
  }

  /**
   * Grants permission to describe the ClassicLink status of one or more VPCs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcClassicLink.html
   */
  public toDescribeVpcClassicLink() {
    return this.to('DescribeVpcClassicLink');
  }

  /**
   * Grants permission to describe the ClassicLink DNS support status of one or more VPCs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcClassicLinkDnsSupport.html
   */
  public toDescribeVpcClassicLinkDnsSupport() {
    return this.to('DescribeVpcClassicLinkDnsSupport');
  }

  /**
   * Grants permission to describe the connection notifications for VPC endpoints and VPC endpoint services
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointConnectionNotifications.html
   */
  public toDescribeVpcEndpointConnectionNotifications() {
    return this.to('DescribeVpcEndpointConnectionNotifications');
  }

  /**
   * Grants permission to describe the VPC endpoint connections to your VPC endpoint services
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointConnections.html
   */
  public toDescribeVpcEndpointConnections() {
    return this.to('DescribeVpcEndpointConnections');
  }

  /**
   * Grants permission to describe VPC endpoint service configurations (your services)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointServiceConfigurations.html
   */
  public toDescribeVpcEndpointServiceConfigurations() {
    return this.to('DescribeVpcEndpointServiceConfigurations');
  }

  /**
   * Grants permission to describe the principals (service consumers) that are permitted to discover your VPC endpoint service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointServicePermissions.html
   */
  public toDescribeVpcEndpointServicePermissions() {
    return this.to('DescribeVpcEndpointServicePermissions');
  }

  /**
   * Grants permission to describe all supported AWS services that can be specified when creating a VPC endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointServices.html
   */
  public toDescribeVpcEndpointServices() {
    return this.to('DescribeVpcEndpointServices');
  }

  /**
   * Grants permission to describe one or more VPC endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpoints.html
   */
  public toDescribeVpcEndpoints() {
    return this.to('DescribeVpcEndpoints');
  }

  /**
   * Grants permission to describe one or more VPC peering connections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcPeeringConnections.html
   */
  public toDescribeVpcPeeringConnections() {
    return this.to('DescribeVpcPeeringConnections');
  }

  /**
   * Grants permission to describe one or more VPCs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcs.html
   */
  public toDescribeVpcs() {
    return this.to('DescribeVpcs');
  }

  /**
   * Grants permission to describe one or more VPN connections
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html
   */
  public toDescribeVpnConnections() {
    return this.to('DescribeVpnConnections');
  }

  /**
   * Grants permission to describe one or more virtual private gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnGateways.html
   */
  public toDescribeVpnGateways() {
    return this.to('DescribeVpnGateways');
  }

  /**
   * Grants permission to unlink (detach) a linked EC2-Classic instance from a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachClassicLinkVpc.html
   */
  public toDetachClassicLinkVpc() {
    return this.to('DetachClassicLinkVpc');
  }

  /**
   * Grants permission to detach an internet gateway from a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html
   */
  public toDetachInternetGateway() {
    return this.to('DetachInternetGateway');
  }

  /**
   * Grants permission to detach a network interface from an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachNetworkInterface.html
   */
  public toDetachNetworkInterface() {
    return this.to('DetachNetworkInterface');
  }

  /**
   * Grants permission to detach an EBS volume from an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachVolume.html
   */
  public toDetachVolume() {
    return this.to('DetachVolume');
  }

  /**
   * Grants permission to detach a virtual private gateway from a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachVpnGateway.html
   */
  public toDetachVpnGateway() {
    return this.to('DetachVpnGateway');
  }

  /**
   * Grants permission to disable EBS encryption by default for your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableEbsEncryptionByDefault.html
   */
  public toDisableEbsEncryptionByDefault() {
    return this.to('DisableEbsEncryptionByDefault');
  }

  /**
   * Grants permission to disable faster launching for Windows AMIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableFastLaunch.html
   */
  public toDisableFastLaunch() {
    return this.to('DisableFastLaunch');
  }

  /**
   * Grants permission to disable fast snapshot restores for one or more snapshots in specified Availability Zones
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableFastSnapshotRestores.html
   */
  public toDisableFastSnapshotRestores() {
    return this.to('DisableFastSnapshotRestores');
  }

  /**
   * Grants permission to cancel the deprecation of the specified AMI
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableImageDeprecation.html
   */
  public toDisableImageDeprecation() {
    return this.to('DisableImageDeprecation');
  }

  /**
   * Grants permission to disable an AWS Organizations member account as an Amazon VPC IP Address Manager (IPAM) admin account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - organizations:DeregisterDelegatedAdministrator
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableIpamOrganizationAdminAccount.html
   */
  public toDisableIpamOrganizationAdminAccount() {
    return this.to('DisableIpamOrganizationAdminAccount');
  }

  /**
   * Grants permission to disable access to the EC2 serial console of all instances for your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableSerialConsoleAccess.html
   */
  public toDisableSerialConsoleAccess() {
    return this.to('DisableSerialConsoleAccess');
  }

  /**
   * Grants permission to disable a resource attachment from propagating routes to the specified propagation route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableTransitGatewayRouteTablePropagation.html
   */
  public toDisableTransitGatewayRouteTablePropagation() {
    return this.to('DisableTransitGatewayRouteTablePropagation');
  }

  /**
   * Grants permission to disable a virtual private gateway from propagating routes to a specified route table of a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVgwRoutePropagation.html
   */
  public toDisableVgwRoutePropagation() {
    return this.to('DisableVgwRoutePropagation');
  }

  /**
   * Grants permission to disable ClassicLink for a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVpcClassicLink.html
   */
  public toDisableVpcClassicLink() {
    return this.to('DisableVpcClassicLink');
  }

  /**
   * Grants permission to disable ClassicLink DNS support for a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVpcClassicLinkDnsSupport.html
   */
  public toDisableVpcClassicLinkDnsSupport() {
    return this.to('DisableVpcClassicLinkDnsSupport');
  }

  /**
   * Grants permission to disassociate an Elastic IP address from an instance or network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateAddress.html
   */
  public toDisassociateAddress() {
    return this.to('DisassociateAddress');
  }

  /**
   * Grants permission to disassociate a target network from a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateClientVpnTargetNetwork.html
   */
  public toDisassociateClientVpnTargetNetwork() {
    return this.to('DisassociateClientVpnTargetNetwork');
  }

  /**
   * Grants permission to disassociate an ACM certificate from a IAM role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateEnclaveCertificateIamRole.html
   */
  public toDisassociateEnclaveCertificateIamRole() {
    return this.to('DisassociateEnclaveCertificateIamRole');
  }

  /**
   * Grants permission to disassociate an IAM instance profile from a running or stopped instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html
   */
  public toDisassociateIamInstanceProfile() {
    return this.to('DisassociateIamInstanceProfile');
  }

  /**
   * Grants permission to disassociate one or more targets from an event window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateInstanceEventWindow.html
   */
  public toDisassociateInstanceEventWindow() {
    return this.to('DisassociateInstanceEventWindow');
  }

  /**
   * Grants permission to disassociate a subnet from a route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateRouteTable.html
   */
  public toDisassociateRouteTable() {
    return this.to('DisassociateRouteTable');
  }

  /**
   * Grants permission to disassociate a CIDR block from a subnet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateSubnetCidrBlock.html
   */
  public toDisassociateSubnetCidrBlock() {
    return this.to('DisassociateSubnetCidrBlock');
  }

  /**
   * Grants permission to disassociate one or more subnets from a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateTransitGatewayMulticastDomain.html
   */
  public toDisassociateTransitGatewayMulticastDomain() {
    return this.to('DisassociateTransitGatewayMulticastDomain');
  }

  /**
   * Grants permission to disassociate a resource attachment from a transit gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateTransitGatewayRouteTable.html
   */
  public toDisassociateTransitGatewayRouteTable() {
    return this.to('DisassociateTransitGatewayRouteTable');
  }

  /**
   * Grants permission to disassociate a branch network interface to a trunk network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateTrunkInterface.html
   */
  public toDisassociateTrunkInterface() {
    return this.to('DisassociateTrunkInterface');
  }

  /**
   * Grants permission to disassociate a CIDR block from a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateVpcCidrBlock.html
   */
  public toDisassociateVpcCidrBlock() {
    return this.to('DisassociateVpcCidrBlock');
  }

  /**
   * Grants permission to enable EBS encryption by default for your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableEbsEncryptionByDefault.html
   */
  public toEnableEbsEncryptionByDefault() {
    return this.to('EnableEbsEncryptionByDefault');
  }

  /**
   * Grants permission to enable faster launching for Windows AMIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableFastLaunch.html
   */
  public toEnableFastLaunch() {
    return this.to('EnableFastLaunch');
  }

  /**
   * Grants permission to enable fast snapshot restores for one or more snapshots in specified Availability Zones
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableFastSnapshotRestores.html
   */
  public toEnableFastSnapshotRestores() {
    return this.to('EnableFastSnapshotRestores');
  }

  /**
   * Grants permission to enable deprecation of the specified AMI at the specified date and time
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableImageDeprecation.html
   */
  public toEnableImageDeprecation() {
    return this.to('EnableImageDeprecation');
  }

  /**
   * Grants permission to enable an AWS Organizations member account as an Amazon VPC IP Address Manager (IPAM) admin account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - organizations:EnableAWSServiceAccess
   * - organizations:RegisterDelegatedAdministrator
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableIpamOrganizationAdminAccount.html
   */
  public toEnableIpamOrganizationAdminAccount() {
    return this.to('EnableIpamOrganizationAdminAccount');
  }

  /**
   * Grants permission to enable access to the EC2 serial console of all instances for your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableSerialConsoleAccess.html
   */
  public toEnableSerialConsoleAccess() {
    return this.to('EnableSerialConsoleAccess');
  }

  /**
   * Grants permission to enable an attachment to propagate routes to a propagation route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableTransitGatewayRouteTablePropagation.html
   */
  public toEnableTransitGatewayRouteTablePropagation() {
    return this.to('EnableTransitGatewayRouteTablePropagation');
  }

  /**
   * Grants permission to enable a virtual private gateway to propagate routes to a VPC route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVgwRoutePropagation.html
   */
  public toEnableVgwRoutePropagation() {
    return this.to('EnableVgwRoutePropagation');
  }

  /**
   * Grants permission to enable I/O operations for a volume that had I/O operations disabled
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVolumeIO.html
   */
  public toEnableVolumeIO() {
    return this.to('EnableVolumeIO');
  }

  /**
   * Grants permission to enable a VPC for ClassicLink
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVpcClassicLink.html
   */
  public toEnableVpcClassicLink() {
    return this.to('EnableVpcClassicLink');
  }

  /**
   * Grants permission to enable a VPC to support DNS hostname resolution for ClassicLink
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVpcClassicLinkDnsSupport.html
   */
  public toEnableVpcClassicLinkDnsSupport() {
    return this.to('EnableVpcClassicLinkDnsSupport');
  }

  /**
   * Grants permission to download the client certificate revocation list for a Client VPN endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportClientVpnClientCertificateRevocationList.html
   */
  public toExportClientVpnClientCertificateRevocationList() {
    return this.to('ExportClientVpnClientCertificateRevocationList');
  }

  /**
   * Grants permission to download the contents of the Client VPN endpoint configuration file for a Client VPN endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportClientVpnClientConfiguration.html
   */
  public toExportClientVpnClientConfiguration() {
    return this.to('ExportClientVpnClientConfiguration');
  }

  /**
   * Grants permission to export an Amazon Machine Image (AMI) to a VM file
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportImage.html
   */
  public toExportImage() {
    return this.to('ExportImage');
  }

  /**
   * Grants permission to export routes from a transit gateway route table to an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportTransitGatewayRoutes.html
   */
  public toExportTransitGatewayRoutes() {
    return this.to('ExportTransitGatewayRoutes');
  }

  /**
   * Grants permission to get the list of roles associated with an ACM certificate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetAssociatedEnclaveCertificateIamRoles.html
   */
  public toGetAssociatedEnclaveCertificateIamRoles() {
    return this.to('GetAssociatedEnclaveCertificateIamRoles');
  }

  /**
   * Grants permission to get information about the IPv6 CIDR block associations for a specified IPv6 address pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetAssociatedIpv6PoolCidrs.html
   */
  public toGetAssociatedIpv6PoolCidrs() {
    return this.to('GetAssociatedIpv6PoolCidrs');
  }

  /**
   * Grants permission to get usage information about a Capacity Reservation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetCapacityReservationUsage.html
   */
  public toGetCapacityReservationUsage() {
    return this.to('GetCapacityReservationUsage');
  }

  /**
   * Grants permission to describe the allocations from the specified customer-owned address pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetCoipPoolUsage.html
   */
  public toGetCoipPoolUsage() {
    return this.to('GetCoipPoolUsage');
  }

  /**
   * Grants permission to get the console output for an instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetConsoleOutput.html
   */
  public toGetConsoleOutput() {
    return this.to('GetConsoleOutput');
  }

  /**
   * Grants permission to retrieve a JPG-format screenshot of a running instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetConsoleScreenshot.html
   */
  public toGetConsoleScreenshot() {
    return this.to('GetConsoleScreenshot');
  }

  /**
   * Grants permission to get the default credit option for CPU usage of a burstable performance instance family
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetDefaultCreditSpecification.html
   */
  public toGetDefaultCreditSpecification() {
    return this.to('GetDefaultCreditSpecification');
  }

  /**
   * Grants permission to get the ID of the default customer master key (CMK) for EBS encryption by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetEbsDefaultKmsKeyId.html
   */
  public toGetEbsDefaultKmsKeyId() {
    return this.to('GetEbsDefaultKmsKeyId');
  }

  /**
   * Grants permission to describe whether EBS encryption by default is enabled for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetEbsEncryptionByDefault.html
   */
  public toGetEbsEncryptionByDefault() {
    return this.to('GetEbsEncryptionByDefault');
  }

  /**
   * Grants permission to generate a CloudFormation template to streamline the integration of VPC flow logs with Amazon Athena
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetFlowLogsIntegrationTemplate.html
   */
  public toGetFlowLogsIntegrationTemplate() {
    return this.to('GetFlowLogsIntegrationTemplate');
  }

  /**
   * Grants permission to list the resource groups to which a Capacity Reservation has been added
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetGroupsForCapacityReservation.html
   */
  public toGetGroupsForCapacityReservation() {
    return this.to('GetGroupsForCapacityReservation');
  }

  /**
   * Grants permission to preview a reservation purchase with configurations that match those of a Dedicated Host
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetHostReservationPurchasePreview.html
   */
  public toGetHostReservationPurchasePreview() {
    return this.to('GetHostReservationPurchasePreview');
  }

  /**
   * Grants permission to view a list of instance types with specified instance attributes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html
   */
  public toGetInstanceTypesFromInstanceRequirements() {
    return this.to('GetInstanceTypesFromInstanceRequirements');
  }

  /**
   * Grants permission to retrieve historical information about a CIDR within an Amazon VPC IP Address Manager (IPAM) scope
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetIpamAddressHistory.html
   */
  public toGetIpamAddressHistory() {
    return this.to('GetIpamAddressHistory');
  }

  /**
   * Grants permission to get a list of all the CIDR allocations in an Amazon VPC IP Address Manager (IPAM) pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetIpamPoolAllocations.html
   */
  public toGetIpamPoolAllocations() {
    return this.to('GetIpamPoolAllocations');
  }

  /**
   * Grants permission to get the CIDRs provisioned to an Amazon VPC IP Address Manager (IPAM) pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetIpamPoolCidrs.html
   */
  public toGetIpamPoolCidrs() {
    return this.to('GetIpamPoolCidrs');
  }

  /**
   * Grants permission to get information about the resources in an Amazon VPC IP Address Manager (IPAM) scope
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetIpamResourceCidrs.html
   */
  public toGetIpamResourceCidrs() {
    return this.to('GetIpamResourceCidrs');
  }

  /**
   * Grants permission to get the configuration data of the specified instance for use with a new launch template or launch template version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetLaunchTemplateData.html
   */
  public toGetLaunchTemplateData() {
    return this.to('GetLaunchTemplateData');
  }

  /**
   * Grants permission to get information about the resources that are associated with the specified managed prefix list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetManagedPrefixListAssociations.html
   */
  public toGetManagedPrefixListAssociations() {
    return this.to('GetManagedPrefixListAssociations');
  }

  /**
   * Grants permission to get information about the entries for a specified managed prefix list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetManagedPrefixListEntries.html
   */
  public toGetManagedPrefixListEntries() {
    return this.to('GetManagedPrefixListEntries');
  }

  /**
   * Grants permission to get the findings for one or more Network Access Scope analyses
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetNetworkInsightsAccessScopeAnalysisFindings.html
   */
  public toGetNetworkInsightsAccessScopeAnalysisFindings() {
    return this.to('GetNetworkInsightsAccessScopeAnalysisFindings');
  }

  /**
   * Grants permission to get the content for a specified Network Access Scope
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetNetworkInsightsAccessScopeContent.html
   */
  public toGetNetworkInsightsAccessScopeContent() {
    return this.to('GetNetworkInsightsAccessScopeContent');
  }

  /**
   * Grants permission to retrieve the encrypted administrator password for a running Windows instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html
   */
  public toGetPasswordData() {
    return this.to('GetPasswordData');
  }

  /**
   * Grants permission to return a quote and exchange information for exchanging one or more Convertible Reserved Instances for a new Convertible Reserved Instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetReservedInstancesExchangeQuote.html
   */
  public toGetReservedInstancesExchangeQuote() {
    return this.to('GetReservedInstancesExchangeQuote');
  }

  /**
   * Grants permission to retrieve the access status of your account to the EC2 serial console of all instances
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSerialConsoleAccessStatus.html
   */
  public toGetSerialConsoleAccessStatus() {
    return this.to('GetSerialConsoleAccessStatus');
  }

  /**
   * Grants permission to calculate the Spot placement score for a Region or Availability Zone based on the specified target capacity and compute requirements
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html
   */
  public toGetSpotPlacementScores() {
    return this.to('GetSpotPlacementScores');
  }

  /**
   * Grants permission to retrieve information about the subnet CIDR reservations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSubnetCidrReservations.html
   */
  public toGetSubnetCidrReservations() {
    return this.to('GetSubnetCidrReservations');
  }

  /**
   * Grants permission to list the route tables to which a resource attachment propagates routes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayAttachmentPropagations.html
   */
  public toGetTransitGatewayAttachmentPropagations() {
    return this.to('GetTransitGatewayAttachmentPropagations');
  }

  /**
   * Grants permission to get information about the associations for a transit gateway multicast domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayMulticastDomainAssociations.html
   */
  public toGetTransitGatewayMulticastDomainAssociations() {
    return this.to('GetTransitGatewayMulticastDomainAssociations');
  }

  /**
   * Grants permission to get information about prefix list references for a transit gateway route table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayPrefixListReference.html
   */
  public toGetTransitGatewayPrefixListReferences() {
    return this.to('GetTransitGatewayPrefixListReferences');
  }

  /**
   * Grants permission to get information about associations for a transit gateway route table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayRouteTableAssociations.html
   */
  public toGetTransitGatewayRouteTableAssociations() {
    return this.to('GetTransitGatewayRouteTableAssociations');
  }

  /**
   * Grants permission to get information about the route table propagations for a transit gateway route table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayRouteTablePropagations.html
   */
  public toGetTransitGatewayRouteTablePropagations() {
    return this.to('GetTransitGatewayRouteTablePropagations');
  }

  /**
   * Grants permission to download an AWS-provided sample configuration file to be used with the customer gateway device
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetVpnConnectionDeviceSampleConfiguration.html
   */
  public toGetVpnConnectionDeviceSampleConfiguration() {
    return this.to('GetVpnConnectionDeviceSampleConfiguration');
  }

  /**
   * Grants permission to obtain a list of customer gateway devices for which sample configuration files can be provided
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetVpnConnectionDeviceTypes.html
   */
  public toGetVpnConnectionDeviceTypes() {
    return this.to('GetVpnConnectionDeviceTypes');
  }

  /**
   * Grants permission to upload a client certificate revocation list to a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportClientVpnClientCertificateRevocationList.html
   */
  public toImportClientVpnClientCertificateRevocationList() {
    return this.to('ImportClientVpnClientCertificateRevocationList');
  }

  /**
   * Grants permission to import single or multi-volume disk images or EBS snapshots into an Amazon Machine Image (AMI)
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html
   */
  public toImportImage() {
    return this.to('ImportImage');
  }

  /**
   * Grants permission to create an import instance task using metadata from a disk image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html
   */
  public toImportInstance() {
    return this.to('ImportInstance');
  }

  /**
   * Grants permission to import a public key from an RSA key pair that was created with a third-party tool
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html
   */
  public toImportKeyPair() {
    return this.to('ImportKeyPair');
  }

  /**
   * Grants permission to import a disk into an EBS snapshot
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportSnapshot.html
   */
  public toImportSnapshot() {
    return this.to('ImportSnapshot');
  }

  /**
   * Grants permission to create an import volume task using metadata from a disk image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportVolume.html
   */
  public toImportVolume() {
    return this.to('ImportVolume');
  }

  /**
   * Grants permission to list the Amazon EBS snapshots that are currently in the Recycle Bin
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ListSnapshotsInRecycleBin.html
   */
  public toListSnapshotsInRecycleBin() {
    return this.to('ListSnapshotsInRecycleBin');
  }

  /**
   * Grants permission to modify an attribute of the specified Elastic IP address
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyAddressAttribute.html
   */
  public toModifyAddressAttribute() {
    return this.to('ModifyAddressAttribute');
  }

  /**
   * Grants permission to modify the opt-in status of the Local Zone and Wavelength Zone group for your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyAvailabilityZoneGroup.html
   */
  public toModifyAvailabilityZoneGroup() {
    return this.to('ModifyAvailabilityZoneGroup');
  }

  /**
   * Grants permission to modify a Capacity Reservation's capacity and the conditions under which it is to be released
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyCapacityReservation.html
   */
  public toModifyCapacityReservation() {
    return this.to('ModifyCapacityReservation');
  }

  /**
   * Grants permission to modify a Capacity Reservation Fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyCapacityReservationFleet.html
   */
  public toModifyCapacityReservationFleet() {
    return this.to('ModifyCapacityReservationFleet');
  }

  /**
   * Grants permission to modify a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyClientVpnEndpoint.html
   */
  public toModifyClientVpnEndpoint() {
    return this.to('ModifyClientVpnEndpoint');
  }

  /**
   * Grants permission to change the account level default credit option for CPU usage of burstable performance instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyDefaultCreditSpecification.html
   */
  public toModifyDefaultCreditSpecification() {
    return this.to('ModifyDefaultCreditSpecification');
  }

  /**
   * Grants permission to change the default customer master key (CMK) for EBS encryption by default for your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyEbsDefaultKmsKeyId.html
   */
  public toModifyEbsDefaultKmsKeyId() {
    return this.to('ModifyEbsDefaultKmsKeyId');
  }

  /**
   * Grants permission to modify an EC2 Fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyFleet.html
   */
  public toModifyFleet() {
    return this.to('ModifyFleet');
  }

  /**
   * Grants permission to modify an attribute of an Amazon FPGA Image (AFI)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyFpgaImageAttribute.html
   */
  public toModifyFpgaImageAttribute() {
    return this.to('ModifyFpgaImageAttribute');
  }

  /**
   * Grants permission to modify a Dedicated Host
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyHosts.html
   */
  public toModifyHosts() {
    return this.to('ModifyHosts');
  }

  /**
   * Grants permission to modify the ID format for a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIdFormat.html
   */
  public toModifyIdFormat() {
    return this.to('ModifyIdFormat');
  }

  /**
   * Grants permission to modify the ID format of a resource for a specific principal in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIdentityIdFormat.html
   */
  public toModifyIdentityIdFormat() {
    return this.to('ModifyIdentityIdFormat');
  }

  /**
   * Grants permission to modify an attribute of an Amazon Machine Image (AMI)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html
   */
  public toModifyImageAttribute() {
    return this.to('ModifyImageAttribute');
  }

  /**
   * Grants permission to modify an attribute of an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html
   */
  public toModifyInstanceAttribute() {
    return this.to('ModifyInstanceAttribute');
  }

  /**
   * Grants permission to modify the Capacity Reservation settings for a stopped instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCapacityReservationAttributes.html
   */
  public toModifyInstanceCapacityReservationAttributes() {
    return this.to('ModifyInstanceCapacityReservationAttributes');
  }

  /**
   * Grants permission to modify the credit option for CPU usage on an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCreditSpecification.html
   */
  public toModifyInstanceCreditSpecification() {
    return this.to('ModifyInstanceCreditSpecification');
  }

  /**
   * Grants permission to modify the start time for a scheduled EC2 instance event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceEventStartTime.html
   */
  public toModifyInstanceEventStartTime() {
    return this.to('ModifyInstanceEventStartTime');
  }

  /**
   * Grants permission to modify the specified event window
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceEventWindow.html
   */
  public toModifyInstanceEventWindow() {
    return this.to('ModifyInstanceEventWindow');
  }

  /**
   * Grants permission to modify the metadata options for an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceMetadataOptions.html
   */
  public toModifyInstanceMetadataOptions() {
    return this.to('ModifyInstanceMetadataOptions');
  }

  /**
   * Grants permission to modify the placement attributes for an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstancePlacement.html
   */
  public toModifyInstancePlacement() {
    return this.to('ModifyInstancePlacement');
  }

  /**
   * Grants permission to modify the configurations of an Amazon VPC IP Address Manager (IPAM)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIpam.html
   */
  public toModifyIpam() {
    return this.to('ModifyIpam');
  }

  /**
   * Grants permission to modify the configurations of an Amazon VPC IP Address Manager (IPAM) pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIpamPool.html
   */
  public toModifyIpamPool() {
    return this.to('ModifyIpamPool');
  }

  /**
   * Grants permission to modify the configurations of an Amazon VPC IP Address Manager (IPAM) resource CIDR
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIpamResourceCidr.html
   */
  public toModifyIpamResourceCidr() {
    return this.to('ModifyIpamResourceCidr');
  }

  /**
   * Grants permission to modify the configurations of an Amazon VPC IP Address Manager (IPAM) scope
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIpamScope.html
   */
  public toModifyIpamScope() {
    return this.to('ModifyIpamScope');
  }

  /**
   * Grants permission to modify a launch template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyLaunchTemplate.html
   */
  public toModifyLaunchTemplate() {
    return this.to('ModifyLaunchTemplate');
  }

  /**
   * Grants permission to modify a managed prefix list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyManagedPrefixList.html
   */
  public toModifyManagedPrefixList() {
    return this.to('ModifyManagedPrefixList');
  }

  /**
   * Grants permission to modify an attribute of a network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyNetworkInterfaceAttribute.html
   */
  public toModifyNetworkInterfaceAttribute() {
    return this.to('ModifyNetworkInterfaceAttribute');
  }

  /**
   * Grants permission to modify the options for instance hostnames for the specified instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyPrivateDnsNameOptions.html
   */
  public toModifyPrivateDnsNameOptions() {
    return this.to('ModifyPrivateDnsNameOptions');
  }

  /**
   * Grants permission to modify attributes of one or more Reserved Instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyReservedInstances.html
   */
  public toModifyReservedInstances() {
    return this.to('ModifyReservedInstances');
  }

  /**
   * Grants permission to modify the rules of a security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySecurityGroupRules.html
   */
  public toModifySecurityGroupRules() {
    return this.to('ModifySecurityGroupRules');
  }

  /**
   * Grants permission to add or remove permission settings for a snapshot
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotAttribute.html
   */
  public toModifySnapshotAttribute() {
    return this.to('ModifySnapshotAttribute');
  }

  /**
   * Grants permission to archive Amazon EBS snapshots
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotTier.html
   */
  public toModifySnapshotTier() {
    return this.to('ModifySnapshotTier');
  }

  /**
   * Grants permission to modify a Spot Fleet request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySpotFleetRequest.html
   */
  public toModifySpotFleetRequest() {
    return this.to('ModifySpotFleetRequest');
  }

  /**
   * Grants permission to modify an attribute of a subnet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySubnetAttribute.html
   */
  public toModifySubnetAttribute() {
    return this.to('ModifySubnetAttribute');
  }

  /**
   * Grants permission to allow or restrict mirroring network services
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorFilterNetworkServices.html
   */
  public toModifyTrafficMirrorFilterNetworkServices() {
    return this.to('ModifyTrafficMirrorFilterNetworkServices');
  }

  /**
   * Grants permission to modify a traffic mirror rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorFilterRule.html
   */
  public toModifyTrafficMirrorFilterRule() {
    return this.to('ModifyTrafficMirrorFilterRule');
  }

  /**
   * Grants permission to modify a traffic mirror session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorSession.html
   */
  public toModifyTrafficMirrorSession() {
    return this.to('ModifyTrafficMirrorSession');
  }

  /**
   * Grants permission to modify a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTransitGateway.html
   */
  public toModifyTransitGateway() {
    return this.to('ModifyTransitGateway');
  }

  /**
   * Grants permission to modify a transit gateway prefix list reference
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTransitGatewayPrefixListReference.html
   */
  public toModifyTransitGatewayPrefixListReference() {
    return this.to('ModifyTransitGatewayPrefixListReference');
  }

  /**
   * Grants permission to modify a VPC attachment on a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTransitGatewayVpcAttachment.html
   */
  public toModifyTransitGatewayVpcAttachment() {
    return this.to('ModifyTransitGatewayVpcAttachment');
  }

  /**
   * Grants permission to modify the parameters of an EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVolume.html
   */
  public toModifyVolume() {
    return this.to('ModifyVolume');
  }

  /**
   * Grants permission to modify an attribute of a volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVolumeAttribute.html
   */
  public toModifyVolumeAttribute() {
    return this.to('ModifyVolumeAttribute');
  }

  /**
   * Grants permission to modify an attribute of a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcAttribute.html
   */
  public toModifyVpcAttribute() {
    return this.to('ModifyVpcAttribute');
  }

  /**
   * Grants permission to modify an attribute of a VPC endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpoint.html
   */
  public toModifyVpcEndpoint() {
    return this.to('ModifyVpcEndpoint');
  }

  /**
   * Grants permission to modify a connection notification for a VPC endpoint or VPC endpoint service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpointConnectionNotification.html
   */
  public toModifyVpcEndpointConnectionNotification() {
    return this.to('ModifyVpcEndpointConnectionNotification');
  }

  /**
   * Grants permission to modify the attributes of a VPC endpoint service configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpointServiceConfiguration.html
   */
  public toModifyVpcEndpointServiceConfiguration() {
    return this.to('ModifyVpcEndpointServiceConfiguration');
  }

  /**
   * Grants permission to modify the payer responsibility for a VPC endpoint service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpointServicePayerResponsibility.html
   */
  public toModifyVpcEndpointServicePayerResponsibility() {
    return this.to('ModifyVpcEndpointServicePayerResponsibility');
  }

  /**
   * Grants permission to modify the permissions for a VPC endpoint service
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpointServicePermissions.html
   */
  public toModifyVpcEndpointServicePermissions() {
    return this.to('ModifyVpcEndpointServicePermissions');
  }

  /**
   * Grants permission to modify the VPC peering connection options on one side of a VPC peering connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcPeeringConnectionOptions.html
   */
  public toModifyVpcPeeringConnectionOptions() {
    return this.to('ModifyVpcPeeringConnectionOptions');
  }

  /**
   * Grants permission to modify the instance tenancy attribute of a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcTenancy.html
   */
  public toModifyVpcTenancy() {
    return this.to('ModifyVpcTenancy');
  }

  /**
   * Grants permission to modify the target gateway of a Site-to-Site VPN connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpnConnection.html
   */
  public toModifyVpnConnection() {
    return this.to('ModifyVpnConnection');
  }

  /**
   * Grants permission to modify the connection options for your Site-to-Site VPN connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpnConnectionOptions.html
   */
  public toModifyVpnConnectionOptions() {
    return this.to('ModifyVpnConnectionOptions');
  }

  /**
   * Grants permission to modify the certificate for a Site-to-Site VPN connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpnTunnelCertificate
   */
  public toModifyVpnTunnelCertificate() {
    return this.to('ModifyVpnTunnelCertificate');
  }

  /**
   * Grants permission to modify the options for a Site-to-Site VPN connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpnTunnelOptions.html
   */
  public toModifyVpnTunnelOptions() {
    return this.to('ModifyVpnTunnelOptions');
  }

  /**
   * Grants permission to enable detailed monitoring for a running instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_MonitorInstances.html
   */
  public toMonitorInstances() {
    return this.to('MonitorInstances');
  }

  /**
   * Grants permission to move an Elastic IP address from the EC2-Classic platform to the EC2-VPC platform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_MoveAddressToVpc.html
   */
  public toMoveAddressToVpc() {
    return this.to('MoveAddressToVpc');
  }

  /**
   * Grants permission to move a BYOIP IPv4 CIDR to Amazon VPC IP Address Manager (IPAM) from a public IPv4 pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_MoveByoipCidrToIpam.html
   */
  public toMoveByoipCidrToIpam() {
    return this.to('MoveByoipCidrToIpam');
  }

  /**
   * Grants permission to provision an address range for use in AWS through bring your own IP addresses (BYOIP), and to create a corresponding address pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ProvisionByoipCidr.html
   */
  public toProvisionByoipCidr() {
    return this.to('ProvisionByoipCidr');
  }

  /**
   * Grants permission to provision a CIDR to an Amazon VPC IP Address Manager (IPAM) pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ProvisionIpamPoolCidr.html
   */
  public toProvisionIpamPoolCidr() {
    return this.to('ProvisionIpamPoolCidr');
  }

  /**
   * Grants permission to provision a CIDR to a public IPv4 pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ProvisionPublicIpv4PoolCidr.html
   */
  public toProvisionPublicIpv4PoolCidr() {
    return this.to('ProvisionPublicIpv4PoolCidr');
  }

  /**
   * Grants permission to purchase a reservation with configurations that match those of a Dedicated Host
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseHostReservation.html
   */
  public toPurchaseHostReservation() {
    return this.to('PurchaseHostReservation');
  }

  /**
   * Grants permission to purchase a Reserved Instance offering
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseReservedInstancesOffering.html
   */
  public toPurchaseReservedInstancesOffering() {
    return this.to('PurchaseReservedInstancesOffering');
  }

  /**
   * Grants permission to purchase one or more Scheduled Instances with a specified schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseScheduledInstances.html
   */
  public toPurchaseScheduledInstances() {
    return this.to('PurchaseScheduledInstances');
  }

  /**
   * Grants permission to request a reboot of one or more instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RebootInstances.html
   */
  public toRebootInstances() {
    return this.to('RebootInstances');
  }

  /**
   * Grants permission to register an Amazon Machine Image (AMI)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterImage.html
   */
  public toRegisterImage() {
    return this.to('RegisterImage');
  }

  /**
   * Grants permission to add tags to the set of tags to include in notifications about scheduled events for your instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterInstanceEventNotificationAttributes.html
   */
  public toRegisterInstanceEventNotificationAttributes() {
    return this.to('RegisterInstanceEventNotificationAttributes');
  }

  /**
   * Grants permission to register one or more network interfaces as a member of a group IP address in a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterTransitGatewayMulticastGroupMembers.html
   */
  public toRegisterTransitGatewayMulticastGroupMembers() {
    return this.to('RegisterTransitGatewayMulticastGroupMembers');
  }

  /**
   * Grants permission to register one or more network interfaces as a source of a group IP address in a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterTransitGatewayMulticastGroupSources.html
   */
  public toRegisterTransitGatewayMulticastGroupSources() {
    return this.to('RegisterTransitGatewayMulticastGroupSources');
  }

  /**
   * Grants permission to reject requests to associate cross-account subnets with a transit gateway multicast domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectTransitGatewayMulticastDomainAssociations.html
   */
  public toRejectTransitGatewayMulticastDomainAssociations() {
    return this.to('RejectTransitGatewayMulticastDomainAssociations');
  }

  /**
   * Grants permission to reject a transit gateway peering attachment request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectTransitGatewayPeeringAttachment.html
   */
  public toRejectTransitGatewayPeeringAttachment() {
    return this.to('RejectTransitGatewayPeeringAttachment');
  }

  /**
   * Grants permission to reject a request to attach a VPC to a transit gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectTransitGatewayVpcAttachment.html
   */
  public toRejectTransitGatewayVpcAttachment() {
    return this.to('RejectTransitGatewayVpcAttachment');
  }

  /**
   * Grants permission to reject one or more VPC endpoint connection requests to a VPC endpoint service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectVpcEndpointConnections.html
   */
  public toRejectVpcEndpointConnections() {
    return this.to('RejectVpcEndpointConnections');
  }

  /**
   * Grants permission to reject a VPC peering connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectVpcPeeringConnection.html
   */
  public toRejectVpcPeeringConnection() {
    return this.to('RejectVpcPeeringConnection');
  }

  /**
   * Grants permission to release an Elastic IP address
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseAddress.html
   */
  public toReleaseAddress() {
    return this.to('ReleaseAddress');
  }

  /**
   * Grants permission to release one or more On-Demand Dedicated Hosts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseHosts.html
   */
  public toReleaseHosts() {
    return this.to('ReleaseHosts');
  }

  /**
   * Grants permission to release an allocation within an Amazon VPC IP Address Manager (IPAM) pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseIpamPoolAllocation.html
   */
  public toReleaseIpamPoolAllocation() {
    return this.to('ReleaseIpamPoolAllocation');
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
    return this.to('ReplaceIamInstanceProfileAssociation');
  }

  /**
   * Grants permission to change which network ACL a subnet is associated with
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceNetworkAclAssociation.html
   */
  public toReplaceNetworkAclAssociation() {
    return this.to('ReplaceNetworkAclAssociation');
  }

  /**
   * Grants permission to replace an entry (rule) in a network ACL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceNetworkAclEntry.html
   */
  public toReplaceNetworkAclEntry() {
    return this.to('ReplaceNetworkAclEntry');
  }

  /**
   * Grants permission to replace a route within a route table in a VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceRoute.html
   */
  public toReplaceRoute() {
    return this.to('ReplaceRoute');
  }

  /**
   * Grants permission to change the route table that is associated with a subnet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceRouteTableAssociation.html
   */
  public toReplaceRouteTableAssociation() {
    return this.to('ReplaceRouteTableAssociation');
  }

  /**
   * Grants permission to replace a route in a transit gateway route table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceTransitGatewayRoute.html
   */
  public toReplaceTransitGatewayRoute() {
    return this.to('ReplaceTransitGatewayRoute');
  }

  /**
   * Grants permission to submit feedback about the status of an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReportInstanceStatus.html
   */
  public toReportInstanceStatus() {
    return this.to('ReportInstanceStatus');
  }

  /**
   * Grants permission to create a Spot Fleet request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html
   */
  public toRequestSpotFleet() {
    return this.to('RequestSpotFleet');
  }

  /**
   * Grants permission to create a Spot Instance request
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html
   */
  public toRequestSpotInstances() {
    return this.to('RequestSpotInstances');
  }

  /**
   * Grants permission to reset the attribute of the specified IP address
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetAddressAttribute.html
   */
  public toResetAddressAttribute() {
    return this.to('ResetAddressAttribute');
  }

  /**
   * Grants permission to reset the default customer master key (CMK) for EBS encryption for your account to use the AWS-managed CMK for EBS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetEbsDefaultKmsKeyId.html
   */
  public toResetEbsDefaultKmsKeyId() {
    return this.to('ResetEbsDefaultKmsKeyId');
  }

  /**
   * Grants permission to reset an attribute of an Amazon FPGA Image (AFI) to its default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetFpgaImageAttribute.html
   */
  public toResetFpgaImageAttribute() {
    return this.to('ResetFpgaImageAttribute');
  }

  /**
   * Grants permission to reset an attribute of an Amazon Machine Image (AMI) to its default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetImageAttribute.html
   */
  public toResetImageAttribute() {
    return this.to('ResetImageAttribute');
  }

  /**
   * Grants permission to reset an attribute of an instance to its default value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetInstanceAttribute.html
   */
  public toResetInstanceAttribute() {
    return this.to('ResetInstanceAttribute');
  }

  /**
   * Grants permission to reset an attribute of a network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetNetworkInterfaceAttribute.html
   */
  public toResetNetworkInterfaceAttribute() {
    return this.to('ResetNetworkInterfaceAttribute');
  }

  /**
   * Grants permission to reset permission settings for a snapshot
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetSnapshotAttribute.html
   */
  public toResetSnapshotAttribute() {
    return this.to('ResetSnapshotAttribute');
  }

  /**
   * Grants permission to restore an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RestoreAddressToClassic.html
   */
  public toRestoreAddressToClassic() {
    return this.to('RestoreAddressToClassic');
  }

  /**
   * Grants permission to restore the entries from a previous version of a managed prefix list to a new version of the prefix list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RestoreManagedPrefixListVersion.html
   */
  public toRestoreManagedPrefixListVersion() {
    return this.to('RestoreManagedPrefixListVersion');
  }

  /**
   * Grants permission to restore an Amazon EBS snapshot from the Recycle Bin
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RestoreSnapshotFromRecycleBin.html
   */
  public toRestoreSnapshotFromRecycleBin() {
    return this.to('RestoreSnapshotFromRecycleBin');
  }

  /**
   * Grants permission to restore an archived Amazon EBS snapshot for use temporarily or permanently, or modify the restore period or restore type for a snapshot that was previously temporarily restored
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RestoreSnapshotTier.html
   */
  public toRestoreSnapshotTier() {
    return this.to('RestoreSnapshotTier');
  }

  /**
   * Grants permission to remove an inbound authorization rule from a Client VPN endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeClientVpnIngress.html
   */
  public toRevokeClientVpnIngress() {
    return this.to('RevokeClientVpnIngress');
  }

  /**
   * Grants permission to remove one or more outbound rules from a VPC security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupEgress.html
   */
  public toRevokeSecurityGroupEgress() {
    return this.to('RevokeSecurityGroupEgress');
  }

  /**
   * Grants permission to remove one or more inbound rules from a security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupIngress.html
   */
  public toRevokeSecurityGroupIngress() {
    return this.to('RevokeSecurityGroupIngress');
  }

  /**
   * Grants permission to launch one or more instances
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html
   */
  public toRunInstances() {
    return this.to('RunInstances');
  }

  /**
   * Grants permission to launch one or more Scheduled Instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunScheduledInstances.html
   */
  public toRunScheduledInstances() {
    return this.to('RunScheduledInstances');
  }

  /**
   * Grants permission to search for routes in a local gateway route table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchLocalGatewayRoutes.html
   */
  public toSearchLocalGatewayRoutes() {
    return this.to('SearchLocalGatewayRoutes');
  }

  /**
   * Grants permission to search for groups, sources, and members in a transit gateway multicast domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html
   */
  public toSearchTransitGatewayMulticastGroups() {
    return this.to('SearchTransitGatewayMulticastGroups');
  }

  /**
   * Grants permission to search for routes in a transit gateway route table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayRoutes.html
   */
  public toSearchTransitGatewayRoutes() {
    return this.to('SearchTransitGatewayRoutes');
  }

  /**
   * Grants permission to send a diagnostic interrupt to an Amazon EC2 instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SendDiagnosticInterrupt.html
   */
  public toSendDiagnosticInterrupt() {
    return this.to('SendDiagnosticInterrupt');
  }

  /**
   * Grants permission to interrupt a Spot Instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html#send-spot-instance-interruptions
   */
  public toSendSpotInstanceInterruptions() {
    return this.to('SendSpotInstanceInterruptions');
  }

  /**
   * Grants permission to start a stopped instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartInstances.html
   */
  public toStartInstances() {
    return this.to('StartInstances');
  }

  /**
   * Grants permission to start a Network Access Scope analysis
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartNetworkInsightsAccessScopeAnalysis.html
   */
  public toStartNetworkInsightsAccessScopeAnalysis() {
    return this.to('StartNetworkInsightsAccessScopeAnalysis');
  }

  /**
   * Grants permission to start analyzing a specified path
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartNetworkInsightsAnalysis.html
   */
  public toStartNetworkInsightsAnalysis() {
    return this.to('StartNetworkInsightsAnalysis');
  }

  /**
   * Grants permission to start the private DNS verification process for a VPC endpoint service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartVpcEndpointServicePrivateDnsVerification.html
   */
  public toStartVpcEndpointServicePrivateDnsVerification() {
    return this.to('StartVpcEndpointServicePrivateDnsVerification');
  }

  /**
   * Grants permission to stop an Amazon EBS-backed instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StopInstances.html
   */
  public toStopInstances() {
    return this.to('StopInstances');
  }

  /**
   * Grants permission to terminate active Client VPN endpoint connections
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateClientVpnConnections.html
   */
  public toTerminateClientVpnConnections() {
    return this.to('TerminateClientVpnConnections');
  }

  /**
   * Grants permission to shut down one or more instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html
   */
  public toTerminateInstances() {
    return this.to('TerminateInstances');
  }

  /**
   * Grants permission to unassign one or more IPv6 addresses from a network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnassignIpv6Addresses.html
   */
  public toUnassignIpv6Addresses() {
    return this.to('UnassignIpv6Addresses');
  }

  /**
   * Grants permission to unassign one or more secondary private IP addresses from a network interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnassignPrivateIpAddresses.html
   */
  public toUnassignPrivateIpAddresses() {
    return this.to('UnassignPrivateIpAddresses');
  }

  /**
   * Grants permission to disable detailed monitoring for a running instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnmonitorInstances.html
   */
  public toUnmonitorInstances() {
    return this.to('UnmonitorInstances');
  }

  /**
   * Grants permission to update descriptions for one or more outbound rules in a VPC security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UpdateSecurityGroupRuleDescriptionsEgress.html
   */
  public toUpdateSecurityGroupRuleDescriptionsEgress() {
    return this.to('UpdateSecurityGroupRuleDescriptionsEgress');
  }

  /**
   * Grants permission to update descriptions for one or more inbound rules in a security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UpdateSecurityGroupRuleDescriptionsIngress.html
   */
  public toUpdateSecurityGroupRuleDescriptionsIngress() {
    return this.to('UpdateSecurityGroupRuleDescriptionsIngress');
  }

  /**
   * Grants permission to stop advertising an address range that was provisioned for use in AWS through bring your own IP addresses (BYOIP)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html
   */
  public toWithdrawByoipCidr() {
    return this.to('WithdrawByoipCidr');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptReservedInstancesExchangeQuote',
      'AcceptTransitGatewayMulticastDomainAssociations',
      'AcceptTransitGatewayPeeringAttachment',
      'AcceptTransitGatewayVpcAttachment',
      'AcceptVpcEndpointConnections',
      'AcceptVpcPeeringConnection',
      'AdvertiseByoipCidr',
      'AllocateAddress',
      'AllocateHosts',
      'AllocateIpamPoolCidr',
      'ApplySecurityGroupsToClientVpnTargetNetwork',
      'AssignIpv6Addresses',
      'AssignPrivateIpAddresses',
      'AssociateAddress',
      'AssociateClientVpnTargetNetwork',
      'AssociateDhcpOptions',
      'AssociateEnclaveCertificateIamRole',
      'AssociateIamInstanceProfile',
      'AssociateInstanceEventWindow',
      'AssociateRouteTable',
      'AssociateSubnetCidrBlock',
      'AssociateTransitGatewayMulticastDomain',
      'AssociateTransitGatewayRouteTable',
      'AssociateTrunkInterface',
      'AssociateVpcCidrBlock',
      'AttachClassicLinkVpc',
      'AttachInternetGateway',
      'AttachNetworkInterface',
      'AttachVolume',
      'AttachVpnGateway',
      'AuthorizeClientVpnIngress',
      'AuthorizeSecurityGroupEgress',
      'AuthorizeSecurityGroupIngress',
      'BundleInstance',
      'CancelBundleTask',
      'CancelCapacityReservation',
      'CancelCapacityReservationFleets',
      'CancelConversionTask',
      'CancelExportTask',
      'CancelImportTask',
      'CancelReservedInstancesListing',
      'CancelSpotFleetRequests',
      'CancelSpotInstanceRequests',
      'ConfirmProductInstance',
      'CopyFpgaImage',
      'CopyImage',
      'CopySnapshot',
      'CreateCapacityReservation',
      'CreateCapacityReservationFleet',
      'CreateCarrierGateway',
      'CreateClientVpnEndpoint',
      'CreateClientVpnRoute',
      'CreateCoipPoolPermission',
      'CreateCustomerGateway',
      'CreateDefaultSubnet',
      'CreateDefaultVpc',
      'CreateDhcpOptions',
      'CreateEgressOnlyInternetGateway',
      'CreateFleet',
      'CreateFlowLogs',
      'CreateFpgaImage',
      'CreateImage',
      'CreateInstanceEventWindow',
      'CreateInstanceExportTask',
      'CreateInternetGateway',
      'CreateIpam',
      'CreateIpamPool',
      'CreateIpamScope',
      'CreateKeyPair',
      'CreateLaunchTemplate',
      'CreateLaunchTemplateVersion',
      'CreateLocalGatewayRoute',
      'CreateLocalGatewayRouteTablePermission',
      'CreateLocalGatewayRouteTableVpcAssociation',
      'CreateManagedPrefixList',
      'CreateNatGateway',
      'CreateNetworkAcl',
      'CreateNetworkAclEntry',
      'CreateNetworkInsightsAccessScope',
      'CreateNetworkInsightsPath',
      'CreateNetworkInterface',
      'CreatePlacementGroup',
      'CreatePublicIpv4Pool',
      'CreateReplaceRootVolumeTask',
      'CreateReservedInstancesListing',
      'CreateRestoreImageTask',
      'CreateRoute',
      'CreateRouteTable',
      'CreateSecurityGroup',
      'CreateSnapshot',
      'CreateSnapshots',
      'CreateSpotDatafeedSubscription',
      'CreateStoreImageTask',
      'CreateSubnet',
      'CreateSubnetCidrReservation',
      'CreateTrafficMirrorFilter',
      'CreateTrafficMirrorFilterRule',
      'CreateTrafficMirrorSession',
      'CreateTrafficMirrorTarget',
      'CreateTransitGateway',
      'CreateTransitGatewayConnect',
      'CreateTransitGatewayConnectPeer',
      'CreateTransitGatewayMulticastDomain',
      'CreateTransitGatewayPeeringAttachment',
      'CreateTransitGatewayPrefixListReference',
      'CreateTransitGatewayRoute',
      'CreateTransitGatewayRouteTable',
      'CreateTransitGatewayVpcAttachment',
      'CreateVolume',
      'CreateVpc',
      'CreateVpcEndpoint',
      'CreateVpcEndpointConnectionNotification',
      'CreateVpcEndpointServiceConfiguration',
      'CreateVpcPeeringConnection',
      'CreateVpnConnection',
      'CreateVpnConnectionRoute',
      'CreateVpnGateway',
      'DeleteCarrierGateway',
      'DeleteClientVpnEndpoint',
      'DeleteClientVpnRoute',
      'DeleteCoipPoolPermission',
      'DeleteCustomerGateway',
      'DeleteDhcpOptions',
      'DeleteEgressOnlyInternetGateway',
      'DeleteFleets',
      'DeleteFlowLogs',
      'DeleteFpgaImage',
      'DeleteInstanceEventWindow',
      'DeleteInternetGateway',
      'DeleteIpam',
      'DeleteIpamPool',
      'DeleteIpamScope',
      'DeleteKeyPair',
      'DeleteLaunchTemplate',
      'DeleteLaunchTemplateVersions',
      'DeleteLocalGatewayRoute',
      'DeleteLocalGatewayRouteTablePermission',
      'DeleteLocalGatewayRouteTableVpcAssociation',
      'DeleteManagedPrefixList',
      'DeleteNatGateway',
      'DeleteNetworkAcl',
      'DeleteNetworkAclEntry',
      'DeleteNetworkInsightsAccessScope',
      'DeleteNetworkInsightsAccessScopeAnalysis',
      'DeleteNetworkInsightsAnalysis',
      'DeleteNetworkInsightsPath',
      'DeleteNetworkInterface',
      'DeletePlacementGroup',
      'DeletePublicIpv4Pool',
      'DeleteQueuedReservedInstances',
      'DeleteRoute',
      'DeleteRouteTable',
      'DeleteSecurityGroup',
      'DeleteSnapshot',
      'DeleteSpotDatafeedSubscription',
      'DeleteSubnet',
      'DeleteSubnetCidrReservation',
      'DeleteTrafficMirrorFilter',
      'DeleteTrafficMirrorFilterRule',
      'DeleteTrafficMirrorSession',
      'DeleteTrafficMirrorTarget',
      'DeleteTransitGateway',
      'DeleteTransitGatewayConnect',
      'DeleteTransitGatewayConnectPeer',
      'DeleteTransitGatewayMulticastDomain',
      'DeleteTransitGatewayPeeringAttachment',
      'DeleteTransitGatewayPrefixListReference',
      'DeleteTransitGatewayRoute',
      'DeleteTransitGatewayRouteTable',
      'DeleteTransitGatewayVpcAttachment',
      'DeleteVolume',
      'DeleteVpc',
      'DeleteVpcEndpointConnectionNotifications',
      'DeleteVpcEndpointServiceConfigurations',
      'DeleteVpcEndpoints',
      'DeleteVpcPeeringConnection',
      'DeleteVpnConnection',
      'DeleteVpnConnectionRoute',
      'DeleteVpnGateway',
      'DeprovisionByoipCidr',
      'DeprovisionIpamPoolCidr',
      'DeprovisionPublicIpv4PoolCidr',
      'DeregisterImage',
      'DeregisterInstanceEventNotificationAttributes',
      'DeregisterTransitGatewayMulticastGroupMembers',
      'DeregisterTransitGatewayMulticastGroupSources',
      'DetachClassicLinkVpc',
      'DetachInternetGateway',
      'DetachNetworkInterface',
      'DetachVolume',
      'DetachVpnGateway',
      'DisableEbsEncryptionByDefault',
      'DisableFastLaunch',
      'DisableFastSnapshotRestores',
      'DisableImageDeprecation',
      'DisableIpamOrganizationAdminAccount',
      'DisableSerialConsoleAccess',
      'DisableTransitGatewayRouteTablePropagation',
      'DisableVgwRoutePropagation',
      'DisableVpcClassicLink',
      'DisableVpcClassicLinkDnsSupport',
      'DisassociateAddress',
      'DisassociateClientVpnTargetNetwork',
      'DisassociateEnclaveCertificateIamRole',
      'DisassociateIamInstanceProfile',
      'DisassociateInstanceEventWindow',
      'DisassociateRouteTable',
      'DisassociateSubnetCidrBlock',
      'DisassociateTransitGatewayMulticastDomain',
      'DisassociateTransitGatewayRouteTable',
      'DisassociateTrunkInterface',
      'DisassociateVpcCidrBlock',
      'EnableEbsEncryptionByDefault',
      'EnableFastLaunch',
      'EnableFastSnapshotRestores',
      'EnableImageDeprecation',
      'EnableIpamOrganizationAdminAccount',
      'EnableSerialConsoleAccess',
      'EnableTransitGatewayRouteTablePropagation',
      'EnableVgwRoutePropagation',
      'EnableVolumeIO',
      'EnableVpcClassicLink',
      'EnableVpcClassicLinkDnsSupport',
      'ExportImage',
      'ExportTransitGatewayRoutes',
      'ImportClientVpnClientCertificateRevocationList',
      'ImportImage',
      'ImportInstance',
      'ImportKeyPair',
      'ImportSnapshot',
      'ImportVolume',
      'ModifyAddressAttribute',
      'ModifyAvailabilityZoneGroup',
      'ModifyCapacityReservation',
      'ModifyCapacityReservationFleet',
      'ModifyClientVpnEndpoint',
      'ModifyDefaultCreditSpecification',
      'ModifyEbsDefaultKmsKeyId',
      'ModifyFleet',
      'ModifyFpgaImageAttribute',
      'ModifyHosts',
      'ModifyIdFormat',
      'ModifyIdentityIdFormat',
      'ModifyImageAttribute',
      'ModifyInstanceAttribute',
      'ModifyInstanceCapacityReservationAttributes',
      'ModifyInstanceCreditSpecification',
      'ModifyInstanceEventStartTime',
      'ModifyInstanceEventWindow',
      'ModifyInstanceMetadataOptions',
      'ModifyInstancePlacement',
      'ModifyIpam',
      'ModifyIpamPool',
      'ModifyIpamResourceCidr',
      'ModifyIpamScope',
      'ModifyLaunchTemplate',
      'ModifyManagedPrefixList',
      'ModifyNetworkInterfaceAttribute',
      'ModifyPrivateDnsNameOptions',
      'ModifyReservedInstances',
      'ModifySecurityGroupRules',
      'ModifySnapshotTier',
      'ModifySpotFleetRequest',
      'ModifySubnetAttribute',
      'ModifyTrafficMirrorFilterNetworkServices',
      'ModifyTrafficMirrorFilterRule',
      'ModifyTrafficMirrorSession',
      'ModifyTransitGateway',
      'ModifyTransitGatewayPrefixListReference',
      'ModifyTransitGatewayVpcAttachment',
      'ModifyVolume',
      'ModifyVolumeAttribute',
      'ModifyVpcAttribute',
      'ModifyVpcEndpoint',
      'ModifyVpcEndpointConnectionNotification',
      'ModifyVpcEndpointServiceConfiguration',
      'ModifyVpcEndpointServicePayerResponsibility',
      'ModifyVpcPeeringConnectionOptions',
      'ModifyVpcTenancy',
      'ModifyVpnConnection',
      'ModifyVpnConnectionOptions',
      'ModifyVpnTunnelCertificate',
      'ModifyVpnTunnelOptions',
      'MonitorInstances',
      'MoveAddressToVpc',
      'MoveByoipCidrToIpam',
      'ProvisionByoipCidr',
      'ProvisionIpamPoolCidr',
      'ProvisionPublicIpv4PoolCidr',
      'PurchaseHostReservation',
      'PurchaseReservedInstancesOffering',
      'PurchaseScheduledInstances',
      'RebootInstances',
      'RegisterImage',
      'RegisterInstanceEventNotificationAttributes',
      'RegisterTransitGatewayMulticastGroupMembers',
      'RegisterTransitGatewayMulticastGroupSources',
      'RejectTransitGatewayMulticastDomainAssociations',
      'RejectTransitGatewayPeeringAttachment',
      'RejectTransitGatewayVpcAttachment',
      'RejectVpcEndpointConnections',
      'RejectVpcPeeringConnection',
      'ReleaseAddress',
      'ReleaseHosts',
      'ReleaseIpamPoolAllocation',
      'ReplaceIamInstanceProfileAssociation',
      'ReplaceNetworkAclAssociation',
      'ReplaceNetworkAclEntry',
      'ReplaceRoute',
      'ReplaceRouteTableAssociation',
      'ReplaceTransitGatewayRoute',
      'ReportInstanceStatus',
      'RequestSpotFleet',
      'RequestSpotInstances',
      'ResetAddressAttribute',
      'ResetEbsDefaultKmsKeyId',
      'ResetFpgaImageAttribute',
      'ResetImageAttribute',
      'ResetInstanceAttribute',
      'ResetNetworkInterfaceAttribute',
      'RestoreAddressToClassic',
      'RestoreManagedPrefixListVersion',
      'RestoreSnapshotFromRecycleBin',
      'RestoreSnapshotTier',
      'RevokeClientVpnIngress',
      'RevokeSecurityGroupEgress',
      'RevokeSecurityGroupIngress',
      'RunInstances',
      'RunScheduledInstances',
      'SendDiagnosticInterrupt',
      'SendSpotInstanceInterruptions',
      'StartInstances',
      'StartNetworkInsightsAccessScopeAnalysis',
      'StartNetworkInsightsAnalysis',
      'StartVpcEndpointServicePrivateDnsVerification',
      'StopInstances',
      'TerminateClientVpnConnections',
      'TerminateInstances',
      'UnassignIpv6Addresses',
      'UnassignPrivateIpAddresses',
      'UnmonitorInstances',
      'UpdateSecurityGroupRuleDescriptionsEgress',
      'UpdateSecurityGroupRuleDescriptionsIngress',
      'WithdrawByoipCidr'
    ],
    'Permissions management': [
      'CreateNetworkInterfacePermission',
      'DeleteNetworkInterfacePermission',
      'ModifySnapshotAttribute',
      'ModifyVpcEndpointServicePermissions',
      'ResetSnapshotAttribute'
    ],
    Tagging: [
      'CreateTags',
      'DeleteTags'
    ],
    List: [
      'DescribeAccountAttributes',
      'DescribeAddresses',
      'DescribeAddressesAttribute',
      'DescribeAggregateIdFormat',
      'DescribeAvailabilityZones',
      'DescribeBundleTasks',
      'DescribeByoipCidrs',
      'DescribeCapacityReservationFleets',
      'DescribeCapacityReservations',
      'DescribeCarrierGateways',
      'DescribeClassicLinkInstances',
      'DescribeClientVpnAuthorizationRules',
      'DescribeClientVpnConnections',
      'DescribeClientVpnEndpoints',
      'DescribeClientVpnRoutes',
      'DescribeClientVpnTargetNetworks',
      'DescribeCoipPools',
      'DescribeConversionTasks',
      'DescribeCustomerGateways',
      'DescribeDhcpOptions',
      'DescribeEgressOnlyInternetGateways',
      'DescribeExportImageTasks',
      'DescribeExportTasks',
      'DescribeFleetHistory',
      'DescribeFleetInstances',
      'DescribeFleets',
      'DescribeFlowLogs',
      'DescribeFpgaImageAttribute',
      'DescribeFpgaImages',
      'DescribeHostReservationOfferings',
      'DescribeHostReservations',
      'DescribeHosts',
      'DescribeIamInstanceProfileAssociations',
      'DescribeIdFormat',
      'DescribeIdentityIdFormat',
      'DescribeImageAttribute',
      'DescribeImages',
      'DescribeImportImageTasks',
      'DescribeImportSnapshotTasks',
      'DescribeInstanceAttribute',
      'DescribeInstanceCreditSpecifications',
      'DescribeInstanceEventNotificationAttributes',
      'DescribeInstanceEventWindows',
      'DescribeInstanceStatus',
      'DescribeInstanceTypeOfferings',
      'DescribeInstanceTypes',
      'DescribeInstances',
      'DescribeInternetGateways',
      'DescribeIpamPools',
      'DescribeIpamScopes',
      'DescribeIpams',
      'DescribeIpv6Pools',
      'DescribeKeyPairs',
      'DescribeLaunchTemplateVersions',
      'DescribeLaunchTemplates',
      'DescribeLocalGatewayRouteTablePermissions',
      'DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations',
      'DescribeLocalGatewayRouteTableVpcAssociations',
      'DescribeLocalGatewayRouteTables',
      'DescribeLocalGatewayVirtualInterfaceGroups',
      'DescribeLocalGatewayVirtualInterfaces',
      'DescribeLocalGateways',
      'DescribeManagedPrefixLists',
      'DescribeMovingAddresses',
      'DescribeNatGateways',
      'DescribeNetworkAcls',
      'DescribeNetworkInsightsAccessScopeAnalyses',
      'DescribeNetworkInsightsAccessScopes',
      'DescribeNetworkInsightsAnalyses',
      'DescribeNetworkInsightsPaths',
      'DescribeNetworkInterfaceAttribute',
      'DescribeNetworkInterfacePermissions',
      'DescribeNetworkInterfaces',
      'DescribePlacementGroups',
      'DescribePrefixLists',
      'DescribePrincipalIdFormat',
      'DescribePublicIpv4Pools',
      'DescribeRegions',
      'DescribeReplaceRootVolumeTasks',
      'DescribeReservedInstances',
      'DescribeReservedInstancesListings',
      'DescribeReservedInstancesModifications',
      'DescribeReservedInstancesOfferings',
      'DescribeRouteTables',
      'DescribeSecurityGroupReferences',
      'DescribeSecurityGroupRules',
      'DescribeSecurityGroups',
      'DescribeSnapshotAttribute',
      'DescribeSnapshotTierStatus',
      'DescribeSnapshots',
      'DescribeSpotDatafeedSubscription',
      'DescribeSpotFleetInstances',
      'DescribeSpotFleetRequestHistory',
      'DescribeSpotFleetRequests',
      'DescribeSpotInstanceRequests',
      'DescribeSpotPriceHistory',
      'DescribeStaleSecurityGroups',
      'DescribeStoreImageTasks',
      'DescribeSubnets',
      'DescribeTrafficMirrorFilters',
      'DescribeTrafficMirrorSessions',
      'DescribeTrafficMirrorTargets',
      'DescribeTransitGatewayAttachments',
      'DescribeTransitGatewayConnectPeers',
      'DescribeTransitGatewayConnects',
      'DescribeTransitGatewayMulticastDomains',
      'DescribeTransitGatewayPeeringAttachments',
      'DescribeTransitGatewayRouteTables',
      'DescribeTransitGatewayVpcAttachments',
      'DescribeTransitGateways',
      'DescribeTrunkInterfaceAssociations',
      'DescribeVolumeAttribute',
      'DescribeVolumeStatus',
      'DescribeVolumes',
      'DescribeVpcAttribute',
      'DescribeVpcClassicLink',
      'DescribeVpcClassicLinkDnsSupport',
      'DescribeVpcEndpointConnectionNotifications',
      'DescribeVpcEndpointConnections',
      'DescribeVpcEndpointServiceConfigurations',
      'DescribeVpcEndpointServicePermissions',
      'DescribeVpcEndpointServices',
      'DescribeVpcEndpoints',
      'DescribeVpcPeeringConnections',
      'DescribeVpcs',
      'DescribeVpnGateways',
      'GetGroupsForCapacityReservation',
      'GetTransitGatewayAttachmentPropagations',
      'GetTransitGatewayMulticastDomainAssociations',
      'GetTransitGatewayPrefixListReferences',
      'GetTransitGatewayRouteTableAssociations',
      'GetTransitGatewayRouteTablePropagations',
      'GetVpnConnectionDeviceSampleConfiguration',
      'GetVpnConnectionDeviceTypes',
      'ListSnapshotsInRecycleBin',
      'SearchLocalGatewayRoutes',
      'SearchTransitGatewayMulticastGroups',
      'SearchTransitGatewayRoutes'
    ],
    Read: [
      'DescribeElasticGpus',
      'DescribeFastLaunchImages',
      'DescribeFastSnapshotRestores',
      'DescribeScheduledInstanceAvailability',
      'DescribeScheduledInstances',
      'DescribeTags',
      'DescribeVolumesModifications',
      'DescribeVpnConnections',
      'ExportClientVpnClientCertificateRevocationList',
      'ExportClientVpnClientConfiguration',
      'GetAssociatedEnclaveCertificateIamRoles',
      'GetAssociatedIpv6PoolCidrs',
      'GetCapacityReservationUsage',
      'GetCoipPoolUsage',
      'GetConsoleOutput',
      'GetConsoleScreenshot',
      'GetDefaultCreditSpecification',
      'GetEbsDefaultKmsKeyId',
      'GetEbsEncryptionByDefault',
      'GetFlowLogsIntegrationTemplate',
      'GetHostReservationPurchasePreview',
      'GetInstanceTypesFromInstanceRequirements',
      'GetIpamAddressHistory',
      'GetIpamPoolAllocations',
      'GetIpamPoolCidrs',
      'GetIpamResourceCidrs',
      'GetLaunchTemplateData',
      'GetManagedPrefixListAssociations',
      'GetManagedPrefixListEntries',
      'GetNetworkInsightsAccessScopeAnalysisFindings',
      'GetNetworkInsightsAccessScopeContent',
      'GetPasswordData',
      'GetReservedInstancesExchangeQuote',
      'GetSerialConsoleAccessStatus',
      'GetSpotPlacementScores',
      'GetSubnetCidrReservations'
    ]
  };

  /**
   * Adds a resource of type elastic-ip to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html
   *
   * @param allocationId - Identifier for the allocationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAllocationId()
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifDomain()
   * - .ifPublicIpAddress()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onElasticIp(allocationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:elastic-ip/${ allocationId }`);
  }

  /**
   * Adds a resource of type capacity-reservation-fleet to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param capacityReservationFleetId - Identifier for the capacityReservationFleetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onCapacityReservationFleet(capacityReservationFleetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:capacity-reservation-fleet/${ capacityReservationFleetId }`);
  }

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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifCapacityReservationFleet()
   * - .ifIsLaunchTemplateResource()
   * - .ifLaunchTemplate()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onCapacityReservation(capacityReservationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:capacity-reservation/${ capacityReservationId }`);
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
   * - .ifTenancy()
   * - .ifVpc()
   */
  public onCarrierGateway(carrierGatewayId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:carrier-gateway/${ carrierGatewayId }`);
  }

  /**
   * Adds a resource of type certificate to the statement
   *
   * https://docs.aws.amazon.com/acm/latest/userguide/authen-overview.html#acm-resources-operations
   *
   * @param certificateId - Identifier for the certificateId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCertificate(certificateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:acm:${ region || '*' }:${ account || '*' }:certificate/${ certificateId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifClientRootCertificateChainArn()
   * - .ifCloudwatchLogGroupArn()
   * - .ifCloudwatchLogStreamArn()
   * - .ifDirectoryArn()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifSamlProviderArn()
   * - .ifServerCertificateArn()
   */
  public onClientVpnEndpoint(clientVpnEndpointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:client-vpn-endpoint/${ clientVpnEndpointId }`);
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
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onCustomerGateway(customerGatewayId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:customer-gateway/${ customerGatewayId }`);
  }

  /**
   * Adds a resource of type dedicated-host to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html
   *
   * @param dedicatedHostId - Identifier for the dedicatedHostId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifAutoPlacement()
   * - .ifAvailabilityZone()
   * - .ifHostRecovery()
   * - .ifInstanceType()
   * - .ifIsLaunchTemplateResource()
   * - .ifLaunchTemplate()
   * - .ifQuantity()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onDedicatedHost(dedicatedHostId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:dedicated-host/${ dedicatedHostId }`);
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:dhcp-options/${ dhcpOptionsId }`);
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:egress-only-internet-gateway/${ egressOnlyInternetGatewayId }`);
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
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifElasticGpuType()
   * - .ifIsLaunchTemplateResource()
   * - .ifLaunchTemplate()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onElasticGpu(elasticGpuId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:elastic-gpu/${ elasticGpuId }`);
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
    return this.on(`arn:${ partition || 'aws' }:elastic-inference:${ region || '*' }:${ account || '*' }:elastic-inference-accelerator/${ elasticInferenceAcceleratorId }`);
  }

  /**
   * Adds a resource of type export-image-task to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vmimport-image-import.html#export-vm-image
   *
   * @param exportImageTaskId - Identifier for the exportImageTaskId.
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
  public onExportImageTask(exportImageTaskId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:export-image-task/${ exportImageTaskId }`);
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:export-instance-task/${ exportTaskId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onFleet(fleetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:fleet/${ fleetId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifOwner()
   * - .ifPublic()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onFpgaImage(fpgaImageId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }::fpga-image/${ fpgaImageId }`);
  }

  /**
   * Adds a resource of type host-reservation to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param hostReservationId - Identifier for the hostReservationId.
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
  public onHostReservation(hostReservationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:host-reservation/${ hostReservationId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifImageType()
   * - .ifIsLaunchTemplateResource()
   * - .ifLaunchTemplate()
   * - .ifOwner()
   * - .ifPublic()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifRootDeviceType()
   */
  public onImage(imageId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }::image/${ imageId }`);
  }

  /**
   * Adds a resource of type import-image-task to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vmimport-image-import.html#import-vm-image
   *
   * @param importImageTaskId - Identifier for the importImageTaskId.
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
  public onImportImageTask(importImageTaskId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:import-image-task/${ importImageTaskId }`);
  }

  /**
   * Adds a resource of type import-snapshot-task to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vmimport-import-snapshot.html
   *
   * @param importSnapshotTaskId - Identifier for the importSnapshotTaskId.
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
  public onImportSnapshotTask(importSnapshotTaskId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:import-snapshot-task/${ importSnapshotTaskId }`);
  }

  /**
   * Adds a resource of type instance-event-window to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param instanceEventWindowId - Identifier for the instanceEventWindowId.
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
  public onInstanceEventWindow(instanceEventWindowId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:instance-event-window/${ instanceEventWindowId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifAvailabilityZone()
   * - .ifEbsOptimized()
   * - .ifInstanceAutoRecovery()
   * - .ifInstanceMarketType()
   * - .ifInstanceMetadataTags()
   * - .ifInstanceProfile()
   * - .ifInstanceType()
   * - .ifIsLaunchTemplateResource()
   * - .ifLaunchTemplate()
   * - .ifMetadataHttpEndpoint()
   * - .ifMetadataHttpPutResponseHopLimit()
   * - .ifMetadataHttpTokens()
   * - .ifNewInstanceProfile()
   * - .ifPlacementGroup()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifRootDeviceType()
   * - .ifTenancy()
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:instance/${ instanceId }`);
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:internet-gateway/${ internetGatewayId }`);
  }

  /**
   * Adds a resource of type ipam to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param ipamId - Identifier for the ipamId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onIpam(ipamId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2::${ account || '*' }:ipam/${ ipamId }`);
  }

  /**
   * Adds a resource of type ipam-pool to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param ipamPoolId - Identifier for the ipamPoolId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onIpamPool(ipamPoolId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2::${ account || '*' }:ipam-pool/${ ipamPoolId }`);
  }

  /**
   * Adds a resource of type ipam-scope to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param ipamScopeId - Identifier for the ipamScopeId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onIpamScope(ipamScopeId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2::${ account || '*' }:ipam-scope/${ ipamScopeId }`);
  }

  /**
   * Adds a resource of type ipv4pool-ec2 to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#ip-addressing-eips
   *
   * @param ipv4PoolEc2Id - Identifier for the ipv4PoolEc2Id.
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
  public onIpv4poolEc2(ipv4PoolEc2Id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:ipv4pool-ec2/${ ipv4PoolEc2Id }`);
  }

  /**
   * Adds a resource of type ipv6pool-ec2 to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#ipv6-addressing
   *
   * @param ipv6PoolEc2Id - Identifier for the ipv6PoolEc2Id.
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
  public onIpv6poolEc2(ipv6PoolEc2Id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:ipv6pool-ec2/${ ipv6PoolEc2Id }`);
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
   * - .ifIsLaunchTemplateResource()
   * - .ifKeyPairName()
   * - .ifKeyPairType()
   * - .ifLaunchTemplate()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onKeyPair(keyPairName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:key-pair/${ keyPairName }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifIsLaunchTemplateResource()
   * - .ifLaunchTemplate()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onLaunchTemplate(launchTemplateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:launch-template/${ launchTemplateId }`);
  }

  /**
   * Adds a resource of type local-gateway to the statement
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html#lgw
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:local-gateway/${ localGatewayId }`);
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:local-gateway-route-table-virtual-interface-group-association/${ localGatewayRouteTableVirtualInterfaceGroupAssociationId }`);
  }

  /**
   * Adds a resource of type local-gateway-route-table-vpc-association to the statement
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html#vpc-associations
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:local-gateway-route-table-vpc-association/${ localGatewayRouteTableVpcAssociationId }`);
  }

  /**
   * Adds a resource of type local-gateway-route-table to the statement
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html#route-tables
   *
   * @param localGatewayRoutetableId - Identifier for the localGatewayRoutetableId.
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
  public onLocalGatewayRouteTable(localGatewayRoutetableId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:local-gateway-route-table/${ localGatewayRoutetableId }`);
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:local-gateway-virtual-interface-group/${ localGatewayVirtualInterfaceGroupId }`);
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:local-gateway-virtual-interface/${ localGatewayVirtualInterfaceId }`);
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:natgateway/${ natGatewayId }`);
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:network-acl/${ naclId }`);
  }

  /**
   * Adds a resource of type network-insights-access-scope-analysis to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param networkInsightsAccessScopeAnalysisId - Identifier for the networkInsightsAccessScopeAnalysisId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onNetworkInsightsAccessScopeAnalysis(networkInsightsAccessScopeAnalysisId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:network-insights-access-scope-analysis/${ networkInsightsAccessScopeAnalysisId }`);
  }

  /**
   * Adds a resource of type network-insights-access-scope to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param networkInsightsAccessScopeId - Identifier for the networkInsightsAccessScopeId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onNetworkInsightsAccessScope(networkInsightsAccessScopeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:network-insights-access-scope/${ networkInsightsAccessScopeId }`);
  }

  /**
   * Adds a resource of type network-insights-analysis to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param networkInsightsAnalysisId - Identifier for the networkInsightsAnalysisId.
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
  public onNetworkInsightsAnalysis(networkInsightsAnalysisId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:network-insights-analysis/${ networkInsightsAnalysisId }`);
  }

  /**
   * Adds a resource of type network-insights-path to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param networkInsightsPathId - Identifier for the networkInsightsPathId.
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
  public onNetworkInsightsPath(networkInsightsPathId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:network-insights-path/${ networkInsightsPathId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifAuthorizedService()
   * - .ifAuthorizedUser()
   * - .ifAvailabilityZone()
   * - .ifIsLaunchTemplateResource()
   * - .ifLaunchTemplate()
   * - .ifPermission()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifSubnet()
   * - .ifVpc()
   */
  public onNetworkInterface(networkInterfaceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:network-interface/${ networkInterfaceId }`);
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
   * - .ifIsLaunchTemplateResource()
   * - .ifLaunchTemplate()
   * - .ifPlacementGroupStrategy()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onPlacementGroup(placementGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:placement-group/${ placementGroupName }`);
  }

  /**
   * Adds a resource of type prefix-list to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onPrefixList(prefixListId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:prefix-list/${ prefixListId }`);
  }

  /**
   * Adds a resource of type replace-root-volume-task to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-replace-root-volume-task.html
   *
   * @param replaceRootVolumeTaskId - Identifier for the replaceRootVolumeTaskId.
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
  public onReplaceRootVolumeTask(replaceRootVolumeTaskId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:replace-root-volume-task/${ replaceRootVolumeTaskId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifAvailabilityZone()
   * - .ifInstanceType()
   * - .ifRegion()
   * - .ifReservedInstancesOfferingType()
   * - .ifResourceTag()
   * - .ifTenancy()
   */
  public onReservedInstances(reservationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:reserved-instances/${ reservationId }`);
  }

  /**
   * Adds a resource of type role to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
   *
   * @param roleNameWithPath - Identifier for the roleNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRole(roleNameWithPath: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iam::${ account || '*' }:role/${ roleNameWithPath }`);
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:route-table/${ routeTableId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifIsLaunchTemplateResource()
   * - .ifLaunchTemplate()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifVpc()
   */
  public onSecurityGroup(securityGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:security-group/${ securityGroupId }`);
  }

  /**
   * Adds a resource of type security-group-rule to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param securityGroupRuleId - Identifier for the securityGroupRuleId.
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
  public onSecurityGroupRule(securityGroupRuleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:security-group-rule/${ securityGroupRuleId }`);
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
   * - .ifAddGroup()
   * - .ifAddUserId()
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifAvailabilityZone()
   * - .ifEncrypted()
   * - .ifIsLaunchTemplateResource()
   * - .ifLaunchTemplate()
   * - .ifOutpostArn()
   * - .ifOwner()
   * - .ifParentVolume()
   * - .ifRegion()
   * - .ifRemoveGroup()
   * - .ifRemoveUserId()
   * - .ifResourceTag()
   * - .ifSnapshotTime()
   * - .ifSourceOutpostArn()
   * - .ifVolumeSize()
   */
  public onSnapshot(snapshotId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }::snapshot/${ snapshotId }`);
  }

  /**
   * Adds a resource of type spot-fleet-request to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param spotFleetRequestId - Identifier for the spotFleetRequestId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onSpotFleetRequest(spotFleetRequestId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:spot-fleet-request/${ spotFleetRequestId }`);
  }

  /**
   * Adds a resource of type spot-instances-request to the statement
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
  public onSpotInstancesRequest(spotInstanceRequestId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:spot-instances-request/${ spotInstanceRequestId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifAvailabilityZone()
   * - .ifIsLaunchTemplateResource()
   * - .ifLaunchTemplate()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifVpc()
   */
  public onSubnet(subnetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:subnet/${ subnetId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onTrafficMirrorFilter(trafficMirrorFilterId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:traffic-mirror-filter/${ trafficMirrorFilterId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   */
  public onTrafficMirrorFilterRule(trafficMirrorFilterRuleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:traffic-mirror-filter-rule/${ trafficMirrorFilterRuleId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onTrafficMirrorSession(trafficMirrorSessionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:traffic-mirror-session/${ trafficMirrorSessionId }`);
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:traffic-mirror-target/${ trafficMirrorTargetId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onTransitGatewayAttachment(transitGatewayAttachmentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:transit-gateway-attachment/${ transitGatewayAttachmentId }`);
  }

  /**
   * Adds a resource of type transit-gateway-connect-peer to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param transitGatewayConnectPeerId - Identifier for the transitGatewayConnectPeerId.
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
  public onTransitGatewayConnectPeer(transitGatewayConnectPeerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:transit-gateway-connect-peer/${ transitGatewayConnectPeerId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onTransitGateway(transitGatewayId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:transit-gateway/${ transitGatewayId }`);
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:transit-gateway-multicast-domain/${ transitGatewayMulticastDomainId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onTransitGatewayRouteTable(transitGatewayRouteTableId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:transit-gateway-route-table/${ transitGatewayRouteTableId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifAvailabilityZone()
   * - .ifEncrypted()
   * - .ifIsLaunchTemplateResource()
   * - .ifKmsKeyId()
   * - .ifLaunchTemplate()
   * - .ifParentSnapshot()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifVolumeIops()
   * - .ifVolumeSize()
   * - .ifVolumeThroughput()
   * - .ifVolumeType()
   */
  public onVolume(volumeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:volume/${ volumeId }`);
  }

  /**
   * Adds a resource of type vpc-endpoint to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html
   *
   * @param vpcEndpointId - Identifier for the vpcEndpointId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifVpceServiceName()
   * - .ifVpceServiceOwner()
   */
  public onVpcEndpoint(vpcEndpointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:vpc-endpoint/${ vpcEndpointId }`);
  }

  /**
   * Adds a resource of type vpc-endpoint-service to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html
   *
   * @param vpcEndpointServiceId - Identifier for the vpcEndpointServiceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifVpceServicePrivateDnsName()
   */
  public onVpcEndpointService(vpcEndpointServiceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:vpc-endpoint-service/${ vpcEndpointServiceId }`);
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
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:vpc-flow-log/${ vpcFlowLogId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifIpv4IpamPoolId()
   * - .ifIpv6IpamPoolId()
   * - .ifRegion()
   * - .ifResourceTag()
   * - .ifTenancy()
   */
  public onVpc(vpcId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:vpc/${ vpcId }`);
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
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAccepterVpc()
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifRegion()
   * - .ifRequesterVpc()
   * - .ifResourceTag()
   */
  public onVpcPeeringConnection(vpcPeeringConnectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:vpc-peering-connection/${ vpcPeeringConnectionId }`);
  }

  /**
   * Adds a resource of type vpn-connection-device-type to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/VPC_VPN.html
   *
   * @param vpnConnectionDeviceTypeId - Identifier for the vpnConnectionDeviceTypeId.
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
  public onVpnConnectionDeviceType(vpnConnectionDeviceTypeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:vpn-connection-device-type/${ vpnConnectionDeviceTypeId }`);
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
   * - .ifAttribute()
   * - .ifAttribute()
   * - .ifAuthenticationType()
   * - .ifDPDTimeoutSeconds()
   * - .ifGatewayType()
   * - .ifIKEVersions()
   * - .ifInsideTunnelCidr()
   * - .ifInsideTunnelIpv6Cidr()
   * - .ifPhase1DHGroup()
   * - .ifPhase1EncryptionAlgorithms()
   * - .ifPhase1IntegrityAlgorithms()
   * - .ifPhase1LifetimeSeconds()
   * - .ifPhase2DHGroup()
   * - .ifPhase2EncryptionAlgorithms()
   * - .ifPhase2IntegrityAlgorithms()
   * - .ifPhase2LifetimeSeconds()
   * - .ifPreSharedKeys()
   * - .ifRegion()
   * - .ifRekeyFuzzPercentage()
   * - .ifRekeyMarginTimeSeconds()
   * - .ifReplayWindowSizePackets()
   * - .ifResourceTag()
   * - .ifRoutingType()
   */
  public onVpnConnection(vpnConnectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:vpn-connection/${ vpnConnectionId }`);
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
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifRegion()
   * - .ifResourceTag()
   */
  public onVpnGateway(vpnGatewayId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ec2:${ region || '*' }:${ account || '*' }:vpn-gateway/${ vpnGatewayId }`);
  }

  /**
   * Filters access by the ARN of an accepter VPC in a VPC peering connection
   *
   * https://docs.aws.amazon.com/vpc/latest/peering/security-iam.html
   *
   * Applies to actions:
   * - .toAcceptVpcPeeringConnection()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateTags()
   * - .toCreateVpcPeeringConnection()
   * - .toDeleteVpcPeeringConnection()
   * - .toModifyVpcPeeringConnectionOptions()
   * - .toRejectVpcPeeringConnection()
   * - .toReplaceRoute()
   *
   * Applies to resource types:
   * - vpc-peering-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifAccepterVpc(value: string | string[], operator?: Operator | string) {
    return this.if(`AccepterVpc`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the group being added to a snapshot
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toModifySnapshotAttribute()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAddGroup(value: string | string[], operator?: Operator | string) {
    return this.if(`Add/group`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the account id being added to a snapshot
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toModifySnapshotAttribute()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAddUserId(value: string | string[], operator?: Operator | string) {
    return this.if(`Add/userId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the allocation ID of the Elastic IP address
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateAddress()
   * - .toCreateNatGateway()
   * - .toCreateTags()
   * - .toDescribeAddressesAttribute()
   * - .toDisassociateAddress()
   * - .toModifyAddressAttribute()
   * - .toReleaseAddress()
   * - .toResetAddressAttribute()
   *
   * Applies to resource types:
   * - elastic-ip
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAllocationId(value: string | string[], operator?: Operator | string) {
    return this.if(`AllocationId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether the user wants to associate a public IP address with the instance
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateTags()
   * - .toDeleteNetworkInterfacePermission()
   * - .toModifyFleet()
   * - .toReplaceRoute()
   * - .toRequestSpotInstances()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   *
   * Applies to resource types:
   * - network-interface
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAssociatePublicIpAddress(value?: boolean) {
    return this.if(`AssociatePublicIpAddress`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by an attribute of a resource
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toModifyAddressAttribute()
   * - .toModifyCapacityReservation()
   * - .toModifyCapacityReservationFleet()
   * - .toModifyClientVpnEndpoint()
   * - .toModifyFleet()
   * - .toModifyFpgaImageAttribute()
   * - .toModifyHosts()
   * - .toModifyImageAttribute()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyIpam()
   * - .toModifyIpamPool()
   * - .toModifyIpamResourceCidr()
   * - .toModifyIpamScope()
   * - .toModifyLaunchTemplate()
   * - .toModifyManagedPrefixList()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toModifyReservedInstances()
   * - .toModifySecurityGroupRules()
   * - .toModifySnapshotAttribute()
   * - .toModifySnapshotTier()
   * - .toModifySpotFleetRequest()
   * - .toModifySubnetAttribute()
   * - .toModifyTrafficMirrorFilterNetworkServices()
   * - .toModifyTrafficMirrorFilterRule()
   * - .toModifyTrafficMirrorSession()
   * - .toModifyTransitGateway()
   * - .toModifyTransitGatewayPrefixListReference()
   * - .toModifyTransitGatewayVpcAttachment()
   * - .toModifyVolume()
   * - .toModifyVolumeAttribute()
   * - .toModifyVpcAttribute()
   * - .toModifyVpcEndpoint()
   * - .toModifyVpcEndpointConnectionNotification()
   * - .toModifyVpcEndpointServiceConfiguration()
   * - .toModifyVpcEndpointServicePayerResponsibility()
   * - .toModifyVpcEndpointServicePermissions()
   * - .toModifyVpcPeeringConnectionOptions()
   * - .toModifyVpcTenancy()
   * - .toModifyVpnConnection()
   * - .toModifyVpnConnectionOptions()
   * - .toModifyVpnTunnelCertificate()
   * - .toModifyVpnTunnelOptions()
   * - .toResetAddressAttribute()
   * - .toResetFpgaImageAttribute()
   * - .toResetImageAttribute()
   * - .toResetSnapshotAttribute()
   *
   * Applies to resource types:
   * - elastic-ip
   * - capacity-reservation-fleet
   * - capacity-reservation
   * - client-vpn-endpoint
   * - dedicated-host
   * - fleet
   * - fpga-image
   * - image
   * - instance
   * - ipam
   * - ipam-pool
   * - ipam-scope
   * - launch-template
   * - network-interface
   * - prefix-list
   * - reserved-instances
   * - security-group
   * - snapshot
   * - spot-fleet-request
   * - subnet
   * - traffic-mirror-filter
   * - traffic-mirror-filter-rule
   * - traffic-mirror-session
   * - transit-gateway-attachment
   * - transit-gateway
   * - transit-gateway-route-table
   * - volume
   * - vpc-endpoint
   * - vpc-endpoint-service
   * - vpc
   * - vpc-peering-connection
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAttributeExists(value: string | string[], operator?: Operator | string) {
    return this.if(`Attribute`, value, operator || 'StringLike');
  }

  /**
   * Filters access by an attribute being set on a resource
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toDescribeFpgaImageAttribute()
   * - .toModifyAddressAttribute()
   * - .toModifyCapacityReservation()
   * - .toModifyCapacityReservationFleet()
   * - .toModifyClientVpnEndpoint()
   * - .toModifyFleet()
   * - .toModifyFpgaImageAttribute()
   * - .toModifyHosts()
   * - .toModifyImageAttribute()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceEventStartTime()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyIpam()
   * - .toModifyIpamPool()
   * - .toModifyIpamResourceCidr()
   * - .toModifyIpamScope()
   * - .toModifyLaunchTemplate()
   * - .toModifyManagedPrefixList()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toModifyReservedInstances()
   * - .toModifySecurityGroupRules()
   * - .toModifySnapshotAttribute()
   * - .toModifySnapshotTier()
   * - .toModifySpotFleetRequest()
   * - .toModifySubnetAttribute()
   * - .toModifyTrafficMirrorFilterNetworkServices()
   * - .toModifyTrafficMirrorFilterRule()
   * - .toModifyTrafficMirrorSession()
   * - .toModifyTransitGateway()
   * - .toModifyTransitGatewayPrefixListReference()
   * - .toModifyTransitGatewayVpcAttachment()
   * - .toModifyVolume()
   * - .toModifyVolumeAttribute()
   * - .toModifyVpcAttribute()
   * - .toModifyVpcEndpoint()
   * - .toModifyVpcEndpointConnectionNotification()
   * - .toModifyVpcEndpointServiceConfiguration()
   * - .toModifyVpcEndpointServicePayerResponsibility()
   * - .toModifyVpcEndpointServicePermissions()
   * - .toModifyVpcPeeringConnectionOptions()
   * - .toModifyVpcTenancy()
   * - .toModifyVpnConnection()
   * - .toModifyVpnConnectionOptions()
   * - .toModifyVpnTunnelCertificate()
   * - .toModifyVpnTunnelOptions()
   * - .toResetAddressAttribute()
   * - .toResetFpgaImageAttribute()
   * - .toResetImageAttribute()
   * - .toResetSnapshotAttribute()
   *
   * Applies to resource types:
   * - elastic-ip
   * - capacity-reservation-fleet
   * - capacity-reservation
   * - client-vpn-endpoint
   * - dedicated-host
   * - fleet
   * - fpga-image
   * - image
   * - instance
   * - ipam
   * - ipam-pool
   * - ipam-scope
   * - launch-template
   * - network-interface
   * - prefix-list
   * - reserved-instances
   * - security-group
   * - snapshot
   * - spot-fleet-request
   * - subnet
   * - traffic-mirror-filter
   * - traffic-mirror-filter-rule
   * - traffic-mirror-session
   * - transit-gateway-attachment
   * - transit-gateway
   * - transit-gateway-route-table
   * - volume
   * - vpc-endpoint
   * - vpc-endpoint-service
   * - vpc
   * - vpc-peering-connection
   * - vpn-connection
   *
   * @param attributeName The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAttribute(attributeName: string, value: string | string[], operator?: Operator | string) {
    return this.if(`Attribute/${ attributeName }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the authentication type for the VPN tunnel endpoints
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthenticationType(value: string | string[], operator?: Operator | string) {
    return this.if(`AuthenticationType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the AWS service that has permission to use a resource
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateNetworkInterfacePermission()
   * - .toCreateTags()
   * - .toDeleteNetworkInterfacePermission()
   * - .toModifyFleet()
   * - .toReplaceRoute()
   * - .toRequestSpotInstances()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   *
   * Applies to resource types:
   * - network-interface
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthorizedService(value: string | string[], operator?: Operator | string) {
    return this.if(`AuthorizedService`, value, operator || 'StringLike');
  }

  /**
   * Filters access by an IAM principal that has permission to use a resource
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateNetworkInterfacePermission()
   * - .toCreateTags()
   * - .toRequestSpotInstances()
   *
   * Applies to resource types:
   * - network-interface
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthorizedUser(value: string | string[], operator?: Operator | string) {
    return this.if(`AuthorizedUser`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the Auto Placement properties of a Dedicated Host
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAllocateHosts()
   * - .toCreateTags()
   *
   * Applies to resource types:
   * - dedicated-host
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAutoPlacement(value: string | string[], operator?: Operator | string) {
    return this.if(`AutoPlacement`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the name of an Availability Zone in an AWS Region
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAllocateHosts()
   * - .toAssignIpv6Addresses()
   * - .toAssignPrivateIpAddresses()
   * - .toAssociateAddress()
   * - .toAssociateIamInstanceProfile()
   * - .toAssociateRouteTable()
   * - .toAssociateSubnetCidrBlock()
   * - .toAssociateTransitGatewayMulticastDomain()
   * - .toAttachClassicLinkVpc()
   * - .toAttachNetworkInterface()
   * - .toAttachVolume()
   * - .toCreateFleet()
   * - .toCreateFlowLogs()
   * - .toCreateImage()
   * - .toCreateInstanceExportTask()
   * - .toCreateNatGateway()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateNetworkInterface()
   * - .toCreateNetworkInterfacePermission()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toCreateTransitGatewayVpcAttachment()
   * - .toCreateVolume()
   * - .toDeleteClientVpnRoute()
   * - .toDeleteNetworkInterface()
   * - .toDeleteNetworkInterfacePermission()
   * - .toDeleteSubnet()
   * - .toDeleteVolume()
   * - .toDeregisterTransitGatewayMulticastGroupMembers()
   * - .toDeregisterTransitGatewayMulticastGroupSources()
   * - .toDescribeInstanceAttribute()
   * - .toDescribeSnapshotAttribute()
   * - .toDescribeVolumeAttribute()
   * - .toDetachClassicLinkVpc()
   * - .toDetachNetworkInterface()
   * - .toDetachVolume()
   * - .toDisableFastSnapshotRestores()
   * - .toDisassociateAddress()
   * - .toDisassociateIamInstanceProfile()
   * - .toDisassociateRouteTable()
   * - .toDisassociateSubnetCidrBlock()
   * - .toDisassociateTransitGatewayMulticastDomain()
   * - .toEnableFastSnapshotRestores()
   * - .toEnableVolumeIO()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetLaunchTemplateData()
   * - .toGetPasswordData()
   * - .toImportInstance()
   * - .toImportVolume()
   * - .toListSnapshotsInRecycleBin()
   * - .toModifyFleet()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toModifyReservedInstances()
   * - .toModifySnapshotTier()
   * - .toModifySpotFleetRequest()
   * - .toModifySubnetAttribute()
   * - .toModifyVolume()
   * - .toModifyVolumeAttribute()
   * - .toMonitorInstances()
   * - .toRebootInstances()
   * - .toRegisterTransitGatewayMulticastGroupMembers()
   * - .toRegisterTransitGatewayMulticastGroupSources()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceNetworkAclAssociation()
   * - .toReplaceRoute()
   * - .toReplaceRouteTableAssociation()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   * - .toResetInstanceAttribute()
   * - .toResetNetworkInterfaceAttribute()
   * - .toRestoreSnapshotFromRecycleBin()
   * - .toRestoreSnapshotTier()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toSendSpotInstanceInterruptions()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   * - .toUnassignIpv6Addresses()
   * - .toUnassignPrivateIpAddresses()
   * - .toUnmonitorInstances()
   *
   * Applies to resource types:
   * - dedicated-host
   * - instance
   * - network-interface
   * - reserved-instances
   * - snapshot
   * - subnet
   * - volume
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAvailabilityZone(value: string | string[], operator?: Operator | string) {
    return this.if(`AvailabilityZone`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of the Capacity Reservation Fleet
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCancelCapacityReservation()
   * - .toCreateCapacityReservation()
   * - .toGetCapacityReservationUsage()
   * - .toGetGroupsForCapacityReservation()
   * - .toModifyCapacityReservation()
   *
   * Applies to resource types:
   * - capacity-reservation
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifCapacityReservationFleet(value: string | string[], operator?: Operator | string) {
    return this.if(`CapacityReservationFleet`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ARN of the client root certificate chain
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toApplySecurityGroupsToClientVpnTargetNetwork()
   * - .toAssociateClientVpnTargetNetwork()
   * - .toAuthorizeClientVpnIngress()
   * - .toCreateClientVpnEndpoint()
   * - .toCreateClientVpnRoute()
   * - .toCreateTags()
   * - .toDeleteClientVpnEndpoint()
   * - .toDeleteClientVpnRoute()
   * - .toDescribeClientVpnAuthorizationRules()
   * - .toDescribeClientVpnConnections()
   * - .toDescribeClientVpnEndpoints()
   * - .toDescribeClientVpnRoutes()
   * - .toDescribeClientVpnTargetNetworks()
   * - .toDisassociateClientVpnTargetNetwork()
   * - .toExportClientVpnClientCertificateRevocationList()
   * - .toExportClientVpnClientConfiguration()
   * - .toImportClientVpnClientCertificateRevocationList()
   * - .toModifyClientVpnEndpoint()
   * - .toRevokeClientVpnIngress()
   * - .toTerminateClientVpnConnections()
   *
   * Applies to resource types:
   * - client-vpn-endpoint
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifClientRootCertificateChainArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ClientRootCertificateChainArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ARN of the CloudWatch Logs log group
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toApplySecurityGroupsToClientVpnTargetNetwork()
   * - .toAssociateClientVpnTargetNetwork()
   * - .toAuthorizeClientVpnIngress()
   * - .toCreateClientVpnEndpoint()
   * - .toCreateClientVpnRoute()
   * - .toCreateTags()
   * - .toDeleteClientVpnEndpoint()
   * - .toDeleteClientVpnRoute()
   * - .toDescribeClientVpnAuthorizationRules()
   * - .toDescribeClientVpnConnections()
   * - .toDescribeClientVpnEndpoints()
   * - .toDescribeClientVpnRoutes()
   * - .toDescribeClientVpnTargetNetworks()
   * - .toDisassociateClientVpnTargetNetwork()
   * - .toExportClientVpnClientCertificateRevocationList()
   * - .toExportClientVpnClientConfiguration()
   * - .toImportClientVpnClientCertificateRevocationList()
   * - .toModifyClientVpnEndpoint()
   * - .toRevokeClientVpnIngress()
   * - .toTerminateClientVpnConnections()
   *
   * Applies to resource types:
   * - client-vpn-endpoint
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifCloudwatchLogGroupArn(value: string | string[], operator?: Operator | string) {
    return this.if(`CloudwatchLogGroupArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ARN of the CloudWatch Logs log stream
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toApplySecurityGroupsToClientVpnTargetNetwork()
   * - .toAssociateClientVpnTargetNetwork()
   * - .toAuthorizeClientVpnIngress()
   * - .toCreateClientVpnEndpoint()
   * - .toCreateClientVpnRoute()
   * - .toCreateTags()
   * - .toDeleteClientVpnEndpoint()
   * - .toDeleteClientVpnRoute()
   * - .toDescribeClientVpnAuthorizationRules()
   * - .toDescribeClientVpnConnections()
   * - .toDescribeClientVpnEndpoints()
   * - .toDescribeClientVpnRoutes()
   * - .toDescribeClientVpnTargetNetworks()
   * - .toDisassociateClientVpnTargetNetwork()
   * - .toExportClientVpnClientCertificateRevocationList()
   * - .toExportClientVpnClientConfiguration()
   * - .toImportClientVpnClientCertificateRevocationList()
   * - .toModifyClientVpnEndpoint()
   * - .toRevokeClientVpnIngress()
   * - .toTerminateClientVpnConnections()
   *
   * Applies to resource types:
   * - client-vpn-endpoint
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifCloudwatchLogStreamArn(value: string | string[], operator?: Operator | string) {
    return this.if(`CloudwatchLogStreamArn`, value, operator || 'ArnLike');
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
    return this.if(`CreateAction`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the duration after which DPD timeout occurs on a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifDPDTimeoutSeconds(value: number | number[], operator?: Operator | string) {
    return this.if(`DPDTimeoutSeconds`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the ARN of the directory
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toApplySecurityGroupsToClientVpnTargetNetwork()
   * - .toAssociateClientVpnTargetNetwork()
   * - .toAuthorizeClientVpnIngress()
   * - .toCreateClientVpnEndpoint()
   * - .toCreateClientVpnRoute()
   * - .toCreateTags()
   * - .toDeleteClientVpnEndpoint()
   * - .toDeleteClientVpnRoute()
   * - .toDescribeClientVpnAuthorizationRules()
   * - .toDescribeClientVpnConnections()
   * - .toDescribeClientVpnEndpoints()
   * - .toDescribeClientVpnRoutes()
   * - .toDescribeClientVpnTargetNetworks()
   * - .toDisassociateClientVpnTargetNetwork()
   * - .toExportClientVpnClientCertificateRevocationList()
   * - .toExportClientVpnClientConfiguration()
   * - .toImportClientVpnClientCertificateRevocationList()
   * - .toModifyClientVpnEndpoint()
   * - .toRevokeClientVpnIngress()
   * - .toTerminateClientVpnConnections()
   *
   * Applies to resource types:
   * - client-vpn-endpoint
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifDirectoryArn(value: string | string[], operator?: Operator | string) {
    return this.if(`DirectoryArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the domain of the Elastic IP address
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateAddress()
   * - .toCreateNatGateway()
   * - .toCreateTags()
   * - .toDescribeAddressesAttribute()
   * - .toDisassociateAddress()
   * - .toModifyAddressAttribute()
   * - .toReleaseAddress()
   * - .toResetAddressAttribute()
   *
   * Applies to resource types:
   * - elastic-ip
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDomain(value: string | string[], operator?: Operator | string) {
    return this.if(`Domain`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether the instance is enabled for EBS optimization
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateAddress()
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachNetworkInterface()
   * - .toAttachVolume()
   * - .toCreateFleet()
   * - .toCreateImage()
   * - .toCreateInstanceExportTask()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toDescribeInstanceAttribute()
   * - .toDetachClassicLinkVpc()
   * - .toDetachNetworkInterface()
   * - .toDetachVolume()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetLaunchTemplateData()
   * - .toGetPasswordData()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toMonitorInstances()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceRoute()
   * - .toResetInstanceAttribute()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toSendSpotInstanceInterruptions()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   * - .toUnmonitorInstances()
   *
   * Applies to resource types:
   * - instance
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEbsOptimized(value?: boolean) {
    return this.if(`EbsOptimized`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the type of Elastic Graphics accelerator
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - elastic-gpu
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifElasticGpuType(value: string | string[], operator?: Operator | string) {
    return this.if(`ElasticGpuType`, value, operator || 'StringLike');
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
   * - .toDescribeSnapshotAttribute()
   * - .toDescribeVolumeAttribute()
   * - .toDetachVolume()
   * - .toDisableFastSnapshotRestores()
   * - .toEnableFastSnapshotRestores()
   * - .toEnableVolumeIO()
   * - .toImportInstance()
   * - .toImportVolume()
   * - .toListSnapshotsInRecycleBin()
   * - .toModifyInstanceAttribute()
   * - .toModifySnapshotTier()
   * - .toModifyVolume()
   * - .toModifyVolumeAttribute()
   * - .toRestoreSnapshotFromRecycleBin()
   * - .toRestoreSnapshotTier()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - snapshot
   * - volume
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEncrypted(value?: boolean) {
    return this.if(`Encrypted`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the gateway type for a VPN endpoint on the AWS side of a VPN connection
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGatewayType(value: string | string[], operator?: Operator | string) {
    return this.if(`GatewayType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether host recovery is enabled for a Dedicated Host
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAllocateHosts()
   * - .toCreateTags()
   *
   * Applies to resource types:
   * - dedicated-host
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifHostRecovery(value: string | string[], operator?: Operator | string) {
    return this.if(`HostRecovery`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the internet key exchange (IKE) versions that are permitted for a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIKEVersions(value: string | string[], operator?: Operator | string) {
    return this.if(`IKEVersions`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the type of image (machine, aki, or ari)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreateStoreImageTask()
   * - .toCreateTags()
   * - .toDeregisterImage()
   * - .toDescribeFastLaunchImages()
   * - .toDescribeImageAttribute()
   * - .toDescribeStoreImageTasks()
   * - .toDisableFastLaunch()
   * - .toDisableImageDeprecation()
   * - .toEnableFastLaunch()
   * - .toEnableImageDeprecation()
   * - .toExportImage()
   * - .toImportImage()
   * - .toModifyFleet()
   * - .toModifyImageAttribute()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   * - .toResetImageAttribute()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   *
   * Applies to resource types:
   * - image
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifImageType(value: string | string[], operator?: Operator | string) {
    return this.if(`ImageType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the range of inside IP addresses for a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInsideTunnelCidr(value: string | string[], operator?: Operator | string) {
    return this.if(`InsideTunnelCidr`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a range of inside IPv6 addresses for a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInsideTunnelIpv6Cidr(value: string | string[], operator?: Operator | string) {
    return this.if(`InsideTunnelIpv6Cidr`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether the instance type supports auto recovery
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateAddress()
   * - .toAssociateIamInstanceProfile()
   * - .toAttachNetworkInterface()
   * - .toCreateImage()
   * - .toCreateInstanceExportTask()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateTags()
   * - .toDescribeInstanceAttribute()
   * - .toDetachNetworkInterface()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetLaunchTemplateData()
   * - .toGetPasswordData()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toMonitorInstances()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toSendSpotInstanceInterruptions()
   * - .toUnmonitorInstances()
   *
   * Applies to resource types:
   * - instance
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstanceAutoRecovery(value: string | string[], operator?: Operator | string) {
    return this.if(`InstanceAutoRecovery`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the market or purchasing option of an instance (on-demand or spot)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateAddress()
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachNetworkInterface()
   * - .toAttachVolume()
   * - .toCreateImage()
   * - .toCreateInstanceExportTask()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateTags()
   * - .toDescribeInstanceAttribute()
   * - .toDetachClassicLinkVpc()
   * - .toDetachNetworkInterface()
   * - .toDetachVolume()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetLaunchTemplateData()
   * - .toGetPasswordData()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toMonitorInstances()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceRoute()
   * - .toResetInstanceAttribute()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toSendSpotInstanceInterruptions()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   * - .toUnmonitorInstances()
   *
   * Applies to resource types:
   * - instance
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstanceMarketType(value: string | string[], operator?: Operator | string) {
    return this.if(`InstanceMarketType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether the instance allows access to instance tags from the instance metadata
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateAddress()
   * - .toAssociateIamInstanceProfile()
   * - .toAttachNetworkInterface()
   * - .toCreateImage()
   * - .toCreateInstanceExportTask()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateTags()
   * - .toDescribeInstanceAttribute()
   * - .toDetachNetworkInterface()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetLaunchTemplateData()
   * - .toGetPasswordData()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toMonitorInstances()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toSendSpotInstanceInterruptions()
   * - .toUnmonitorInstances()
   *
   * Applies to resource types:
   * - instance
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstanceMetadataTags(value: string | string[], operator?: Operator | string) {
    return this.if(`InstanceMetadataTags`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of an instance profile
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateAddress()
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachNetworkInterface()
   * - .toAttachVolume()
   * - .toCreateFleet()
   * - .toCreateImage()
   * - .toCreateInstanceExportTask()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toDescribeInstanceAttribute()
   * - .toDetachClassicLinkVpc()
   * - .toDetachNetworkInterface()
   * - .toDetachVolume()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetLaunchTemplateData()
   * - .toGetPasswordData()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toMonitorInstances()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceRoute()
   * - .toResetInstanceAttribute()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toSendSpotInstanceInterruptions()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   * - .toUnmonitorInstances()
   *
   * Applies to resource types:
   * - instance
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifInstanceProfile(value: string | string[], operator?: Operator | string) {
    return this.if(`InstanceProfile`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the type of instance
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAllocateHosts()
   * - .toAssociateAddress()
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachNetworkInterface()
   * - .toAttachVolume()
   * - .toCreateFleet()
   * - .toCreateImage()
   * - .toCreateInstanceExportTask()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toDescribeInstanceAttribute()
   * - .toDetachClassicLinkVpc()
   * - .toDetachNetworkInterface()
   * - .toDetachVolume()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetLaunchTemplateData()
   * - .toGetPasswordData()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toModifyReservedInstances()
   * - .toMonitorInstances()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceRoute()
   * - .toResetInstanceAttribute()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toSendSpotInstanceInterruptions()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   * - .toUnmonitorInstances()
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
    return this.if(`InstanceType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of an IPAM pool provided for IPv4 CIDR block allocation
   *
   * Applies to actions:
   * - .toAssociateVpcCidrBlock()
   * - .toCreateVpc()
   *
   * Applies to resource types:
   * - vpc
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIpv4IpamPoolId(value: string | string[], operator?: Operator | string) {
    return this.if(`Ipv4IpamPoolId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of an IPAM pool provided for IPv6 CIDR block allocation
   *
   * Applies to actions:
   * - .toAssociateVpcCidrBlock()
   * - .toCreateVpc()
   *
   * Applies to resource types:
   * - vpc
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIpv6IpamPoolId(value: string | string[], operator?: Operator | string) {
    return this.if(`Ipv6IpamPoolId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether users are able to override resources that are specified in the launch template
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - capacity-reservation
   * - dedicated-host
   * - elastic-gpu
   * - image
   * - instance
   * - key-pair
   * - launch-template
   * - network-interface
   * - placement-group
   * - security-group
   * - snapshot
   * - subnet
   * - volume
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifIsLaunchTemplateResource(value?: boolean) {
    return this.if(`IsLaunchTemplateResource`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the name of a key pair
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreateTags()
   * - .toDeleteKeyPair()
   * - .toModifyFleet()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   *
   * Applies to resource types:
   * - key-pair
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKeyPairName(value: string | string[], operator?: Operator | string) {
    return this.if(`KeyPairName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the type of a key pair
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreateKeyPair()
   * - .toCreateTags()
   * - .toDeleteKeyPair()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   *
   * Applies to resource types:
   * - key-pair
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKeyPairType(value: string | string[], operator?: Operator | string) {
    return this.if(`KeyPairType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of an AWS KMS key
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateVolume()
   * - .toDescribeVolumeAttribute()
   *
   * Applies to resource types:
   * - volume
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKmsKeyId(value: string | string[], operator?: Operator | string) {
    return this.if(`KmsKeyId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of a launch template
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - capacity-reservation
   * - dedicated-host
   * - elastic-gpu
   * - image
   * - instance
   * - key-pair
   * - launch-template
   * - network-interface
   * - placement-group
   * - security-group
   * - snapshot
   * - subnet
   * - volume
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifLaunchTemplate(value: string | string[], operator?: Operator | string) {
    return this.if(`LaunchTemplate`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by whether the HTTP endpoint is enabled for the instance metadata service
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateAddress()
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachNetworkInterface()
   * - .toAttachVolume()
   * - .toCreateImage()
   * - .toCreateInstanceExportTask()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateTags()
   * - .toDescribeInstanceAttribute()
   * - .toDetachClassicLinkVpc()
   * - .toDetachNetworkInterface()
   * - .toDetachVolume()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetLaunchTemplateData()
   * - .toGetPasswordData()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toMonitorInstances()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceRoute()
   * - .toResetInstanceAttribute()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toSendSpotInstanceInterruptions()
   * - .toTerminateInstances()
   * - .toUnmonitorInstances()
   *
   * Applies to resource types:
   * - instance
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMetadataHttpEndpoint(value: string | string[], operator?: Operator | string) {
    return this.if(`MetadataHttpEndpoint`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the allowed number of hops when calling the instance metadata service
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateAddress()
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachNetworkInterface()
   * - .toAttachVolume()
   * - .toCreateImage()
   * - .toCreateInstanceExportTask()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateTags()
   * - .toDescribeInstanceAttribute()
   * - .toDetachClassicLinkVpc()
   * - .toDetachNetworkInterface()
   * - .toDetachVolume()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetLaunchTemplateData()
   * - .toGetPasswordData()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toMonitorInstances()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceRoute()
   * - .toResetInstanceAttribute()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toSendSpotInstanceInterruptions()
   * - .toTerminateInstances()
   * - .toUnmonitorInstances()
   *
   * Applies to resource types:
   * - instance
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifMetadataHttpPutResponseHopLimit(value: number | number[], operator?: Operator | string) {
    return this.if(`MetadataHttpPutResponseHopLimit`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by whether tokens are required when calling the instance metadata service (optional or required)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateAddress()
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachNetworkInterface()
   * - .toAttachVolume()
   * - .toCreateImage()
   * - .toCreateInstanceExportTask()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateTags()
   * - .toDescribeInstanceAttribute()
   * - .toDetachClassicLinkVpc()
   * - .toDetachNetworkInterface()
   * - .toDetachVolume()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetLaunchTemplateData()
   * - .toGetPasswordData()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toMonitorInstances()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceRoute()
   * - .toResetInstanceAttribute()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toSendSpotInstanceInterruptions()
   * - .toTerminateInstances()
   * - .toUnmonitorInstances()
   *
   * Applies to resource types:
   * - instance
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMetadataHttpTokens(value: string | string[], operator?: Operator | string) {
    return this.if(`MetadataHttpTokens`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of the instance profile being attached
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateIamInstanceProfile()
   * - .toGetConsoleScreenshot()
   * - .toModifyPrivateDnsNameOptions()
   * - .toReplaceIamInstanceProfileAssociation()
   *
   * Applies to resource types:
   * - instance
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifNewInstanceProfile(value: string | string[], operator?: Operator | string) {
    return this.if(`NewInstanceProfile`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ARN of the Outpost
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCopySnapshot()
   * - .toCreateImage()
   * - .toCreateSnapshot()
   * - .toCreateSnapshots()
   * - .toDeleteSnapshot()
   * - .toDescribeSnapshotAttribute()
   * - .toRegisterImage()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifOutpostArn(value: string | string[], operator?: Operator | string) {
    return this.if(`OutpostArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the owner of the resource (amazon, aws-marketplace, or an AWS account ID)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCopyFpgaImage()
   * - .toCopyImage()
   * - .toCreateFleet()
   * - .toCreateFpgaImage()
   * - .toCreateImage()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateRestoreImageTask()
   * - .toCreateStoreImageTask()
   * - .toCreateTags()
   * - .toDeleteFpgaImage()
   * - .toDeleteSnapshot()
   * - .toDeregisterImage()
   * - .toDescribeFastLaunchImages()
   * - .toDescribeFpgaImageAttribute()
   * - .toDescribeImageAttribute()
   * - .toDescribeSnapshotAttribute()
   * - .toDescribeStoreImageTasks()
   * - .toDisableFastLaunch()
   * - .toDisableFastSnapshotRestores()
   * - .toDisableImageDeprecation()
   * - .toEnableFastLaunch()
   * - .toEnableFastSnapshotRestores()
   * - .toEnableImageDeprecation()
   * - .toExportImage()
   * - .toImportImage()
   * - .toImportSnapshot()
   * - .toListSnapshotsInRecycleBin()
   * - .toModifyFleet()
   * - .toModifyFpgaImageAttribute()
   * - .toModifyImageAttribute()
   * - .toModifySnapshotAttribute()
   * - .toModifySnapshotTier()
   * - .toRegisterImage()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   * - .toResetFpgaImageAttribute()
   * - .toResetImageAttribute()
   * - .toResetSnapshotAttribute()
   * - .toRestoreSnapshotFromRecycleBin()
   * - .toRestoreSnapshotTier()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
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
    return this.if(`Owner`, value, operator || 'StringLike');
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
   * - .toDescribeVolumeAttribute()
   * - .toDetachVolume()
   * - .toEnableVolumeIO()
   * - .toImportInstance()
   * - .toImportVolume()
   * - .toModifyInstanceAttribute()
   * - .toModifyVolume()
   * - .toModifyVolumeAttribute()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - volume
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifParentSnapshot(value: string | string[], operator?: Operator | string) {
    return this.if(`ParentSnapshot`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ARN of the parent volume from which the snapshot was created
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreateImage()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateSnapshot()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toDeleteSnapshot()
   * - .toDescribeSnapshotAttribute()
   * - .toDisableFastSnapshotRestores()
   * - .toEnableFastSnapshotRestores()
   * - .toImportImage()
   * - .toImportSnapshot()
   * - .toListSnapshotsInRecycleBin()
   * - .toModifyFleet()
   * - .toModifySnapshotAttribute()
   * - .toModifySnapshotTier()
   * - .toRegisterImage()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   * - .toResetSnapshotAttribute()
   * - .toRestoreSnapshotFromRecycleBin()
   * - .toRestoreSnapshotTier()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifParentVolume(value: string | string[], operator?: Operator | string) {
    return this.if(`ParentVolume`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the type of permission for a resource (INSTANCE-ATTACH or EIP-ASSOCIATE)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateNetworkInterfacePermission()
   * - .toCreateTags()
   * - .toRequestSpotInstances()
   *
   * Applies to resource types:
   * - network-interface
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPermission(value: string | string[], operator?: Operator | string) {
    return this.if(`Permission`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the Diffie-Hellman group numbers that are permitted for a VPN tunnel for the phase 1 IKE negotiations
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifPhase1DHGroup(value: number | number[], operator?: Operator | string) {
    return this.if(`Phase1DHGroup`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the encryption algorithms that are permitted for a VPN tunnel for the phase 1 IKE negotiations
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPhase1EncryptionAlgorithms(value: string | string[], operator?: Operator | string) {
    return this.if(`Phase1EncryptionAlgorithms`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the integrity algorithms that are permitted for a VPN tunnel for the phase 1 IKE negotiations
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPhase1IntegrityAlgorithms(value: string | string[], operator?: Operator | string) {
    return this.if(`Phase1IntegrityAlgorithms`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the lifetime in seconds for phase 1 of the IKE negotiations for a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifPhase1LifetimeSeconds(value: number | number[], operator?: Operator | string) {
    return this.if(`Phase1LifetimeSeconds`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the Diffie-Hellman group numbers that are permitted for a VPN tunnel for the phase 2 IKE negotiations
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifPhase2DHGroup(value: number | number[], operator?: Operator | string) {
    return this.if(`Phase2DHGroup`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the encryption algorithms that are permitted for a VPN tunnel for the phase 2 IKE negotiations
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPhase2EncryptionAlgorithms(value: string | string[], operator?: Operator | string) {
    return this.if(`Phase2EncryptionAlgorithms`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the integrity algorithms that are permitted for a VPN tunnel for the phase 2 IKE negotiations
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPhase2IntegrityAlgorithms(value: string | string[], operator?: Operator | string) {
    return this.if(`Phase2IntegrityAlgorithms`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the lifetime in seconds for phase 2 of the IKE negotiations for a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifPhase2LifetimeSeconds(value: number | number[], operator?: Operator | string) {
    return this.if(`Phase2LifetimeSeconds`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the ARN of the placement group
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateAddress()
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachNetworkInterface()
   * - .toAttachVolume()
   * - .toCreateFleet()
   * - .toCreateImage()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toDescribeInstanceAttribute()
   * - .toDetachClassicLinkVpc()
   * - .toDetachNetworkInterface()
   * - .toDetachVolume()
   * - .toDisassociateIamInstanceProfile()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetLaunchTemplateData()
   * - .toGetPasswordData()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toMonitorInstances()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceRoute()
   * - .toRunInstances()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   * - .toUnmonitorInstances()
   *
   * Applies to resource types:
   * - instance
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifPlacementGroup(value: string | string[], operator?: Operator | string) {
    return this.if(`PlacementGroup`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the instance placement strategy used by the placement group (cluster, spread, or partition)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreatePlacementGroup()
   * - .toCreateTags()
   * - .toDeletePlacementGroup()
   * - .toModifyInstancePlacement()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   *
   * Applies to resource types:
   * - placement-group
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPlacementGroupStrategy(value: string | string[], operator?: Operator | string) {
    return this.if(`PlacementGroupStrategy`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the pre-shared key (PSK) used to establish the initial IKE security association between a virtual private gateway and a customer gateway
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPreSharedKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`PreSharedKeys`, value, operator || 'StringLike');
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
    return this.if(`ProductCode`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether the image has public launch permissions
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreateFpgaImage()
   * - .toCreateStoreImageTask()
   * - .toCreateTags()
   * - .toDeleteFpgaImage()
   * - .toDeregisterImage()
   * - .toDescribeFastLaunchImages()
   * - .toDescribeFpgaImageAttribute()
   * - .toDescribeImageAttribute()
   * - .toDescribeStoreImageTasks()
   * - .toDisableFastLaunch()
   * - .toDisableImageDeprecation()
   * - .toEnableFastLaunch()
   * - .toEnableImageDeprecation()
   * - .toExportImage()
   * - .toImportImage()
   * - .toModifyFleet()
   * - .toModifyFpgaImageAttribute()
   * - .toModifyImageAttribute()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   * - .toResetFpgaImageAttribute()
   * - .toResetImageAttribute()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   *
   * Applies to resource types:
   * - fpga-image
   * - image
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifPublic(value?: boolean) {
    return this.if(`Public`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by a public IP address
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateAddress()
   * - .toCreateNatGateway()
   * - .toCreateTags()
   * - .toDescribeAddressesAttribute()
   * - .toDisassociateAddress()
   * - .toModifyAddressAttribute()
   * - .toReleaseAddress()
   * - .toResetAddressAttribute()
   *
   * Applies to resource types:
   * - elastic-ip
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPublicIpAddress(value: string | string[], operator?: Operator | string) {
    return this.if(`PublicIpAddress`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the number of Dedicated Hosts in a request
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAllocateHosts()
   * - .toCreateTags()
   *
   * Applies to resource types:
   * - dedicated-host
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifQuantity(value: number | number[], operator?: Operator | string) {
    return this.if(`Quantity`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the name of the AWS Region
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAcceptTransitGatewayMulticastDomainAssociations()
   * - .toAcceptTransitGatewayPeeringAttachment()
   * - .toAcceptTransitGatewayVpcAttachment()
   * - .toAcceptVpcEndpointConnections()
   * - .toAcceptVpcPeeringConnection()
   * - .toAllocateAddress()
   * - .toAllocateHosts()
   * - .toAllocateIpamPoolCidr()
   * - .toApplySecurityGroupsToClientVpnTargetNetwork()
   * - .toAssignIpv6Addresses()
   * - .toAssignPrivateIpAddresses()
   * - .toAssociateAddress()
   * - .toAssociateClientVpnTargetNetwork()
   * - .toAssociateDhcpOptions()
   * - .toAssociateIamInstanceProfile()
   * - .toAssociateInstanceEventWindow()
   * - .toAssociateRouteTable()
   * - .toAssociateSubnetCidrBlock()
   * - .toAssociateTransitGatewayMulticastDomain()
   * - .toAssociateTransitGatewayRouteTable()
   * - .toAssociateVpcCidrBlock()
   * - .toAttachClassicLinkVpc()
   * - .toAttachInternetGateway()
   * - .toAttachNetworkInterface()
   * - .toAttachVolume()
   * - .toAttachVpnGateway()
   * - .toAuthorizeClientVpnIngress()
   * - .toAuthorizeSecurityGroupEgress()
   * - .toAuthorizeSecurityGroupIngress()
   * - .toCancelCapacityReservation()
   * - .toCancelCapacityReservationFleets()
   * - .toCancelExportTask()
   * - .toCancelImportTask()
   * - .toCancelSpotFleetRequests()
   * - .toCancelSpotInstanceRequests()
   * - .toCopyFpgaImage()
   * - .toCopyImage()
   * - .toCopySnapshot()
   * - .toCreateCapacityReservation()
   * - .toCreateCapacityReservationFleet()
   * - .toCreateCarrierGateway()
   * - .toCreateClientVpnEndpoint()
   * - .toCreateClientVpnRoute()
   * - .toCreateCustomerGateway()
   * - .toCreateDhcpOptions()
   * - .toCreateEgressOnlyInternetGateway()
   * - .toCreateFleet()
   * - .toCreateFlowLogs()
   * - .toCreateFpgaImage()
   * - .toCreateImage()
   * - .toCreateInstanceEventWindow()
   * - .toCreateInstanceExportTask()
   * - .toCreateInternetGateway()
   * - .toCreateIpam()
   * - .toCreateIpamPool()
   * - .toCreateIpamScope()
   * - .toCreateKeyPair()
   * - .toCreateLaunchTemplate()
   * - .toCreateLaunchTemplateVersion()
   * - .toCreateLocalGatewayRoute()
   * - .toCreateLocalGatewayRouteTablePermission()
   * - .toCreateLocalGatewayRouteTableVpcAssociation()
   * - .toCreateManagedPrefixList()
   * - .toCreateNatGateway()
   * - .toCreateNetworkAcl()
   * - .toCreateNetworkAclEntry()
   * - .toCreateNetworkInsightsAccessScope()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateNetworkInterface()
   * - .toCreateNetworkInterfacePermission()
   * - .toCreatePlacementGroup()
   * - .toCreatePublicIpv4Pool()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateRestoreImageTask()
   * - .toCreateRoute()
   * - .toCreateRouteTable()
   * - .toCreateSecurityGroup()
   * - .toCreateSnapshot()
   * - .toCreateSnapshots()
   * - .toCreateStoreImageTask()
   * - .toCreateSubnet()
   * - .toCreateTags()
   * - .toCreateTrafficMirrorFilter()
   * - .toCreateTrafficMirrorFilterRule()
   * - .toCreateTrafficMirrorSession()
   * - .toCreateTrafficMirrorTarget()
   * - .toCreateTransitGateway()
   * - .toCreateTransitGatewayConnect()
   * - .toCreateTransitGatewayConnectPeer()
   * - .toCreateTransitGatewayMulticastDomain()
   * - .toCreateTransitGatewayPeeringAttachment()
   * - .toCreateTransitGatewayPrefixListReference()
   * - .toCreateTransitGatewayRoute()
   * - .toCreateTransitGatewayRouteTable()
   * - .toCreateTransitGatewayVpcAttachment()
   * - .toCreateVolume()
   * - .toCreateVpc()
   * - .toCreateVpcEndpoint()
   * - .toCreateVpcEndpointConnectionNotification()
   * - .toCreateVpcEndpointServiceConfiguration()
   * - .toCreateVpcPeeringConnection()
   * - .toCreateVpnConnection()
   * - .toCreateVpnConnectionRoute()
   * - .toCreateVpnGateway()
   * - .toDeleteCarrierGateway()
   * - .toDeleteClientVpnEndpoint()
   * - .toDeleteClientVpnRoute()
   * - .toDeleteCustomerGateway()
   * - .toDeleteDhcpOptions()
   * - .toDeleteEgressOnlyInternetGateway()
   * - .toDeleteFleets()
   * - .toDeleteFlowLogs()
   * - .toDeleteFpgaImage()
   * - .toDeleteInstanceEventWindow()
   * - .toDeleteInternetGateway()
   * - .toDeleteIpam()
   * - .toDeleteIpamPool()
   * - .toDeleteIpamScope()
   * - .toDeleteKeyPair()
   * - .toDeleteLaunchTemplate()
   * - .toDeleteLaunchTemplateVersions()
   * - .toDeleteLocalGatewayRoute()
   * - .toDeleteLocalGatewayRouteTablePermission()
   * - .toDeleteLocalGatewayRouteTableVpcAssociation()
   * - .toDeleteManagedPrefixList()
   * - .toDeleteNatGateway()
   * - .toDeleteNetworkAcl()
   * - .toDeleteNetworkAclEntry()
   * - .toDeleteNetworkInsightsAccessScope()
   * - .toDeleteNetworkInsightsAccessScopeAnalysis()
   * - .toDeleteNetworkInsightsAnalysis()
   * - .toDeleteNetworkInsightsPath()
   * - .toDeleteNetworkInterface()
   * - .toDeleteNetworkInterfacePermission()
   * - .toDeletePlacementGroup()
   * - .toDeletePublicIpv4Pool()
   * - .toDeleteRoute()
   * - .toDeleteRouteTable()
   * - .toDeleteSecurityGroup()
   * - .toDeleteSnapshot()
   * - .toDeleteSubnet()
   * - .toDeleteTags()
   * - .toDeleteTrafficMirrorFilter()
   * - .toDeleteTrafficMirrorFilterRule()
   * - .toDeleteTrafficMirrorSession()
   * - .toDeleteTrafficMirrorTarget()
   * - .toDeleteTransitGateway()
   * - .toDeleteTransitGatewayConnect()
   * - .toDeleteTransitGatewayConnectPeer()
   * - .toDeleteTransitGatewayMulticastDomain()
   * - .toDeleteTransitGatewayPeeringAttachment()
   * - .toDeleteTransitGatewayPrefixListReference()
   * - .toDeleteTransitGatewayRoute()
   * - .toDeleteTransitGatewayRouteTable()
   * - .toDeleteTransitGatewayVpcAttachment()
   * - .toDeleteVolume()
   * - .toDeleteVpc()
   * - .toDeleteVpcEndpointConnectionNotifications()
   * - .toDeleteVpcEndpointServiceConfigurations()
   * - .toDeleteVpcEndpoints()
   * - .toDeleteVpcPeeringConnection()
   * - .toDeleteVpnConnection()
   * - .toDeleteVpnConnectionRoute()
   * - .toDeleteVpnGateway()
   * - .toDeprovisionIpamPoolCidr()
   * - .toDeprovisionPublicIpv4PoolCidr()
   * - .toDeregisterImage()
   * - .toDeregisterTransitGatewayMulticastGroupMembers()
   * - .toDeregisterTransitGatewayMulticastGroupSources()
   * - .toDescribeAddressesAttribute()
   * - .toDescribeClientVpnAuthorizationRules()
   * - .toDescribeClientVpnConnections()
   * - .toDescribeClientVpnEndpoints()
   * - .toDescribeClientVpnRoutes()
   * - .toDescribeClientVpnTargetNetworks()
   * - .toDescribeFastLaunchImages()
   * - .toDescribeFleetHistory()
   * - .toDescribeFleetInstances()
   * - .toDescribeFleets()
   * - .toDescribeFpgaImageAttribute()
   * - .toDescribeImageAttribute()
   * - .toDescribeInstanceAttribute()
   * - .toDescribeSecurityGroupReferences()
   * - .toDescribeSnapshotAttribute()
   * - .toDescribeStaleSecurityGroups()
   * - .toDescribeStoreImageTasks()
   * - .toDescribeVolumeAttribute()
   * - .toDescribeVpcAttribute()
   * - .toDetachClassicLinkVpc()
   * - .toDetachInternetGateway()
   * - .toDetachNetworkInterface()
   * - .toDetachVolume()
   * - .toDetachVpnGateway()
   * - .toDisableFastLaunch()
   * - .toDisableFastSnapshotRestores()
   * - .toDisableImageDeprecation()
   * - .toDisableTransitGatewayRouteTablePropagation()
   * - .toDisableVgwRoutePropagation()
   * - .toDisableVpcClassicLink()
   * - .toDisableVpcClassicLinkDnsSupport()
   * - .toDisassociateAddress()
   * - .toDisassociateClientVpnTargetNetwork()
   * - .toDisassociateIamInstanceProfile()
   * - .toDisassociateInstanceEventWindow()
   * - .toDisassociateRouteTable()
   * - .toDisassociateSubnetCidrBlock()
   * - .toDisassociateTransitGatewayMulticastDomain()
   * - .toDisassociateTransitGatewayRouteTable()
   * - .toDisassociateVpcCidrBlock()
   * - .toEnableFastLaunch()
   * - .toEnableFastSnapshotRestores()
   * - .toEnableImageDeprecation()
   * - .toEnableTransitGatewayRouteTablePropagation()
   * - .toEnableVgwRoutePropagation()
   * - .toEnableVolumeIO()
   * - .toEnableVpcClassicLink()
   * - .toEnableVpcClassicLinkDnsSupport()
   * - .toExportClientVpnClientCertificateRevocationList()
   * - .toExportClientVpnClientConfiguration()
   * - .toExportImage()
   * - .toGetCapacityReservationUsage()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetFlowLogsIntegrationTemplate()
   * - .toGetGroupsForCapacityReservation()
   * - .toGetIpamAddressHistory()
   * - .toGetIpamPoolAllocations()
   * - .toGetIpamPoolCidrs()
   * - .toGetIpamResourceCidrs()
   * - .toGetLaunchTemplateData()
   * - .toGetManagedPrefixListAssociations()
   * - .toGetManagedPrefixListEntries()
   * - .toGetPasswordData()
   * - .toGetVpnConnectionDeviceSampleConfiguration()
   * - .toImportClientVpnClientCertificateRevocationList()
   * - .toImportImage()
   * - .toImportInstance()
   * - .toImportKeyPair()
   * - .toImportSnapshot()
   * - .toImportVolume()
   * - .toListSnapshotsInRecycleBin()
   * - .toModifyAddressAttribute()
   * - .toModifyCapacityReservation()
   * - .toModifyCapacityReservationFleet()
   * - .toModifyClientVpnEndpoint()
   * - .toModifyFleet()
   * - .toModifyFpgaImageAttribute()
   * - .toModifyHosts()
   * - .toModifyImageAttribute()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceEventStartTime()
   * - .toModifyInstanceEventWindow()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyIpam()
   * - .toModifyIpamPool()
   * - .toModifyIpamResourceCidr()
   * - .toModifyIpamScope()
   * - .toModifyLaunchTemplate()
   * - .toModifyManagedPrefixList()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toModifyReservedInstances()
   * - .toModifySecurityGroupRules()
   * - .toModifySnapshotAttribute()
   * - .toModifySnapshotTier()
   * - .toModifySpotFleetRequest()
   * - .toModifySubnetAttribute()
   * - .toModifyTrafficMirrorFilterNetworkServices()
   * - .toModifyTrafficMirrorFilterRule()
   * - .toModifyTrafficMirrorSession()
   * - .toModifyTransitGateway()
   * - .toModifyTransitGatewayPrefixListReference()
   * - .toModifyTransitGatewayVpcAttachment()
   * - .toModifyVolume()
   * - .toModifyVolumeAttribute()
   * - .toModifyVpcAttribute()
   * - .toModifyVpcEndpoint()
   * - .toModifyVpcEndpointConnectionNotification()
   * - .toModifyVpcEndpointServiceConfiguration()
   * - .toModifyVpcEndpointServicePayerResponsibility()
   * - .toModifyVpcEndpointServicePermissions()
   * - .toModifyVpcPeeringConnectionOptions()
   * - .toModifyVpcTenancy()
   * - .toModifyVpnConnection()
   * - .toModifyVpnConnectionOptions()
   * - .toModifyVpnTunnelCertificate()
   * - .toModifyVpnTunnelOptions()
   * - .toMonitorInstances()
   * - .toMoveByoipCidrToIpam()
   * - .toProvisionIpamPoolCidr()
   * - .toProvisionPublicIpv4PoolCidr()
   * - .toPurchaseHostReservation()
   * - .toRebootInstances()
   * - .toRegisterImage()
   * - .toRegisterTransitGatewayMulticastGroupMembers()
   * - .toRegisterTransitGatewayMulticastGroupSources()
   * - .toRejectTransitGatewayMulticastDomainAssociations()
   * - .toRejectTransitGatewayPeeringAttachment()
   * - .toRejectTransitGatewayVpcAttachment()
   * - .toRejectVpcEndpointConnections()
   * - .toRejectVpcPeeringConnection()
   * - .toReleaseAddress()
   * - .toReleaseHosts()
   * - .toReleaseIpamPoolAllocation()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceNetworkAclAssociation()
   * - .toReplaceNetworkAclEntry()
   * - .toReplaceRoute()
   * - .toReplaceRouteTableAssociation()
   * - .toReplaceTransitGatewayRoute()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   * - .toResetAddressAttribute()
   * - .toResetFpgaImageAttribute()
   * - .toResetImageAttribute()
   * - .toResetInstanceAttribute()
   * - .toResetNetworkInterfaceAttribute()
   * - .toResetSnapshotAttribute()
   * - .toRestoreManagedPrefixListVersion()
   * - .toRestoreSnapshotFromRecycleBin()
   * - .toRestoreSnapshotTier()
   * - .toRevokeClientVpnIngress()
   * - .toRevokeSecurityGroupEgress()
   * - .toRevokeSecurityGroupIngress()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   * - .toSearchTransitGatewayRoutes()
   * - .toSendDiagnosticInterrupt()
   * - .toSendSpotInstanceInterruptions()
   * - .toStartInstances()
   * - .toStartNetworkInsightsAccessScopeAnalysis()
   * - .toStartNetworkInsightsAnalysis()
   * - .toStartVpcEndpointServicePrivateDnsVerification()
   * - .toStopInstances()
   * - .toTerminateClientVpnConnections()
   * - .toTerminateInstances()
   * - .toUnassignIpv6Addresses()
   * - .toUnassignPrivateIpAddresses()
   * - .toUnmonitorInstances()
   * - .toUpdateSecurityGroupRuleDescriptionsEgress()
   * - .toUpdateSecurityGroupRuleDescriptionsIngress()
   *
   * Applies to resource types:
   * - elastic-ip
   * - capacity-reservation-fleet
   * - capacity-reservation
   * - carrier-gateway
   * - client-vpn-endpoint
   * - customer-gateway
   * - dedicated-host
   * - dhcp-options
   * - egress-only-internet-gateway
   * - elastic-gpu
   * - export-image-task
   * - export-instance-task
   * - fleet
   * - fpga-image
   * - host-reservation
   * - image
   * - import-image-task
   * - import-snapshot-task
   * - instance-event-window
   * - instance
   * - internet-gateway
   * - ipam
   * - ipam-pool
   * - ipam-scope
   * - ipv4pool-ec2
   * - ipv6pool-ec2
   * - key-pair
   * - launch-template
   * - local-gateway
   * - local-gateway-route-table-virtual-interface-group-association
   * - local-gateway-route-table-vpc-association
   * - local-gateway-route-table
   * - local-gateway-virtual-interface-group
   * - local-gateway-virtual-interface
   * - natgateway
   * - network-acl
   * - network-insights-access-scope-analysis
   * - network-insights-access-scope
   * - network-insights-analysis
   * - network-insights-path
   * - network-interface
   * - placement-group
   * - prefix-list
   * - replace-root-volume-task
   * - reserved-instances
   * - route-table
   * - security-group
   * - security-group-rule
   * - snapshot
   * - spot-fleet-request
   * - spot-instances-request
   * - subnet
   * - traffic-mirror-filter
   * - traffic-mirror-filter-rule
   * - traffic-mirror-session
   * - traffic-mirror-target
   * - transit-gateway-attachment
   * - transit-gateway-connect-peer
   * - transit-gateway
   * - transit-gateway-multicast-domain
   * - transit-gateway-route-table
   * - volume
   * - vpc-endpoint
   * - vpc-endpoint-service
   * - vpc-flow-log
   * - vpc
   * - vpc-peering-connection
   * - vpn-connection-device-type
   * - vpn-connection
   * - vpn-gateway
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRegion(value: string | string[], operator?: Operator | string) {
    return this.if(`Region`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the percentage of increase of the rekey window (determined by the rekey margin time) within which the rekey time is randomly selected for a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifRekeyFuzzPercentage(value: number | number[], operator?: Operator | string) {
    return this.if(`RekeyFuzzPercentage`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the margin time before the phase 2 lifetime expires for a VPN tunnel
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifRekeyMarginTimeSeconds(value: number | number[], operator?: Operator | string) {
    return this.if(`RekeyMarginTimeSeconds`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the group being removed from a snapshot
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toModifySnapshotAttribute()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRemoveGroup(value: string | string[], operator?: Operator | string) {
    return this.if(`Remove/group`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the account id being removed from a snapshot
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toModifySnapshotAttribute()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRemoveUserId(value: string | string[], operator?: Operator | string) {
    return this.if(`Remove/userId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the number of packets in an IKE replay window
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReplayWindowSizePackets(value: string | string[], operator?: Operator | string) {
    return this.if(`ReplayWindowSizePackets`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of a requester VPC in a VPC peering connection
   *
   * https://docs.aws.amazon.com/vpc/latest/peering/security-iam.html
   *
   * Applies to actions:
   * - .toAcceptVpcPeeringConnection()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateTags()
   * - .toCreateVpcPeeringConnection()
   * - .toDeleteVpcPeeringConnection()
   * - .toModifyVpcPeeringConnectionOptions()
   * - .toRejectVpcPeeringConnection()
   * - .toReplaceRoute()
   *
   * Applies to resource types:
   * - vpc-peering-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifRequesterVpc(value: string | string[], operator?: Operator | string) {
    return this.if(`RequesterVpc`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the payment option of the Reserved Instance offering (No Upfront, Partial Upfront, or All Upfront)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html#ri-payment-options
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toModifyReservedInstances()
   *
   * Applies to resource types:
   * - reserved-instances
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReservedInstancesOfferingType(value: string | string[], operator?: Operator | string) {
    return this.if(`ReservedInstancesOfferingType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the preface string for a tag key and value pair that are attached to a resource
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/control-access-with-tags.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTagExists(value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/control-access-with-tags.html
   *
   * Applies to actions:
   * - .toAcceptTransitGatewayMulticastDomainAssociations()
   * - .toAcceptTransitGatewayPeeringAttachment()
   * - .toAcceptTransitGatewayVpcAttachment()
   * - .toAcceptVpcEndpointConnections()
   * - .toAcceptVpcPeeringConnection()
   * - .toAllocateAddress()
   * - .toAllocateIpamPoolCidr()
   * - .toApplySecurityGroupsToClientVpnTargetNetwork()
   * - .toAssignIpv6Addresses()
   * - .toAssignPrivateIpAddresses()
   * - .toAssociateAddress()
   * - .toAssociateClientVpnTargetNetwork()
   * - .toAssociateDhcpOptions()
   * - .toAssociateIamInstanceProfile()
   * - .toAssociateInstanceEventWindow()
   * - .toAssociateRouteTable()
   * - .toAssociateSubnetCidrBlock()
   * - .toAssociateTransitGatewayMulticastDomain()
   * - .toAssociateTransitGatewayRouteTable()
   * - .toAssociateVpcCidrBlock()
   * - .toAttachClassicLinkVpc()
   * - .toAttachInternetGateway()
   * - .toAttachNetworkInterface()
   * - .toAttachVolume()
   * - .toAttachVpnGateway()
   * - .toAuthorizeClientVpnIngress()
   * - .toAuthorizeSecurityGroupEgress()
   * - .toAuthorizeSecurityGroupIngress()
   * - .toCancelCapacityReservation()
   * - .toCancelCapacityReservationFleets()
   * - .toCancelExportTask()
   * - .toCancelImportTask()
   * - .toCancelSpotFleetRequests()
   * - .toCancelSpotInstanceRequests()
   * - .toCreateCarrierGateway()
   * - .toCreateClientVpnEndpoint()
   * - .toCreateClientVpnRoute()
   * - .toCreateEgressOnlyInternetGateway()
   * - .toCreateFleet()
   * - .toCreateFlowLogs()
   * - .toCreateImage()
   * - .toCreateInstanceExportTask()
   * - .toCreateIpamPool()
   * - .toCreateIpamScope()
   * - .toCreateLaunchTemplateVersion()
   * - .toCreateLocalGatewayRoute()
   * - .toCreateLocalGatewayRouteTablePermission()
   * - .toCreateLocalGatewayRouteTableVpcAssociation()
   * - .toCreateNatGateway()
   * - .toCreateNetworkAcl()
   * - .toCreateNetworkAclEntry()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateNetworkInterface()
   * - .toCreateNetworkInterfacePermission()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateRoute()
   * - .toCreateRouteTable()
   * - .toCreateSecurityGroup()
   * - .toCreateSnapshot()
   * - .toCreateSnapshots()
   * - .toCreateStoreImageTask()
   * - .toCreateSubnet()
   * - .toCreateTags()
   * - .toCreateTrafficMirrorFilterRule()
   * - .toCreateTrafficMirrorSession()
   * - .toCreateTrafficMirrorTarget()
   * - .toCreateTransitGatewayConnectPeer()
   * - .toCreateTransitGatewayMulticastDomain()
   * - .toCreateTransitGatewayPeeringAttachment()
   * - .toCreateTransitGatewayPrefixListReference()
   * - .toCreateTransitGatewayRoute()
   * - .toCreateTransitGatewayRouteTable()
   * - .toCreateTransitGatewayVpcAttachment()
   * - .toCreateVpc()
   * - .toCreateVpcEndpoint()
   * - .toCreateVpcEndpointConnectionNotification()
   * - .toCreateVpcPeeringConnection()
   * - .toCreateVpnConnection()
   * - .toCreateVpnConnectionRoute()
   * - .toDeleteCarrierGateway()
   * - .toDeleteClientVpnEndpoint()
   * - .toDeleteClientVpnRoute()
   * - .toDeleteCustomerGateway()
   * - .toDeleteDhcpOptions()
   * - .toDeleteEgressOnlyInternetGateway()
   * - .toDeleteFleets()
   * - .toDeleteFlowLogs()
   * - .toDeleteFpgaImage()
   * - .toDeleteInstanceEventWindow()
   * - .toDeleteInternetGateway()
   * - .toDeleteIpam()
   * - .toDeleteIpamPool()
   * - .toDeleteIpamScope()
   * - .toDeleteKeyPair()
   * - .toDeleteLaunchTemplate()
   * - .toDeleteLaunchTemplateVersions()
   * - .toDeleteLocalGatewayRoute()
   * - .toDeleteLocalGatewayRouteTablePermission()
   * - .toDeleteLocalGatewayRouteTableVpcAssociation()
   * - .toDeleteManagedPrefixList()
   * - .toDeleteNatGateway()
   * - .toDeleteNetworkAcl()
   * - .toDeleteNetworkAclEntry()
   * - .toDeleteNetworkInsightsAccessScope()
   * - .toDeleteNetworkInsightsAccessScopeAnalysis()
   * - .toDeleteNetworkInsightsAnalysis()
   * - .toDeleteNetworkInsightsPath()
   * - .toDeleteNetworkInterface()
   * - .toDeleteNetworkInterfacePermission()
   * - .toDeletePlacementGroup()
   * - .toDeletePublicIpv4Pool()
   * - .toDeleteRoute()
   * - .toDeleteRouteTable()
   * - .toDeleteSecurityGroup()
   * - .toDeleteSnapshot()
   * - .toDeleteSubnet()
   * - .toDeleteTags()
   * - .toDeleteTrafficMirrorFilter()
   * - .toDeleteTrafficMirrorFilterRule()
   * - .toDeleteTrafficMirrorSession()
   * - .toDeleteTrafficMirrorTarget()
   * - .toDeleteTransitGateway()
   * - .toDeleteTransitGatewayConnect()
   * - .toDeleteTransitGatewayConnectPeer()
   * - .toDeleteTransitGatewayMulticastDomain()
   * - .toDeleteTransitGatewayPeeringAttachment()
   * - .toDeleteTransitGatewayPrefixListReference()
   * - .toDeleteTransitGatewayRoute()
   * - .toDeleteTransitGatewayRouteTable()
   * - .toDeleteTransitGatewayVpcAttachment()
   * - .toDeleteVolume()
   * - .toDeleteVpc()
   * - .toDeleteVpcEndpointConnectionNotifications()
   * - .toDeleteVpcEndpointServiceConfigurations()
   * - .toDeleteVpcEndpoints()
   * - .toDeleteVpcPeeringConnection()
   * - .toDeleteVpnConnection()
   * - .toDeleteVpnConnectionRoute()
   * - .toDeleteVpnGateway()
   * - .toDeprovisionIpamPoolCidr()
   * - .toDeprovisionPublicIpv4PoolCidr()
   * - .toDeregisterImage()
   * - .toDeregisterTransitGatewayMulticastGroupMembers()
   * - .toDeregisterTransitGatewayMulticastGroupSources()
   * - .toDescribeAddressesAttribute()
   * - .toDescribeClientVpnAuthorizationRules()
   * - .toDescribeClientVpnConnections()
   * - .toDescribeClientVpnEndpoints()
   * - .toDescribeClientVpnRoutes()
   * - .toDescribeClientVpnTargetNetworks()
   * - .toDescribeFastLaunchImages()
   * - .toDescribeFleetHistory()
   * - .toDescribeFleetInstances()
   * - .toDescribeFleets()
   * - .toDescribeFpgaImageAttribute()
   * - .toDescribeImageAttribute()
   * - .toDescribeInstanceAttribute()
   * - .toDescribeSecurityGroupReferences()
   * - .toDescribeSnapshotAttribute()
   * - .toDescribeStaleSecurityGroups()
   * - .toDescribeStoreImageTasks()
   * - .toDescribeVolumeAttribute()
   * - .toDescribeVpcAttribute()
   * - .toDetachClassicLinkVpc()
   * - .toDetachInternetGateway()
   * - .toDetachNetworkInterface()
   * - .toDetachVolume()
   * - .toDetachVpnGateway()
   * - .toDisableFastLaunch()
   * - .toDisableFastSnapshotRestores()
   * - .toDisableImageDeprecation()
   * - .toDisableTransitGatewayRouteTablePropagation()
   * - .toDisableVgwRoutePropagation()
   * - .toDisableVpcClassicLink()
   * - .toDisableVpcClassicLinkDnsSupport()
   * - .toDisassociateAddress()
   * - .toDisassociateClientVpnTargetNetwork()
   * - .toDisassociateIamInstanceProfile()
   * - .toDisassociateInstanceEventWindow()
   * - .toDisassociateRouteTable()
   * - .toDisassociateSubnetCidrBlock()
   * - .toDisassociateTransitGatewayMulticastDomain()
   * - .toDisassociateTransitGatewayRouteTable()
   * - .toDisassociateVpcCidrBlock()
   * - .toEnableFastLaunch()
   * - .toEnableFastSnapshotRestores()
   * - .toEnableImageDeprecation()
   * - .toEnableTransitGatewayRouteTablePropagation()
   * - .toEnableVgwRoutePropagation()
   * - .toEnableVolumeIO()
   * - .toEnableVpcClassicLink()
   * - .toEnableVpcClassicLinkDnsSupport()
   * - .toExportClientVpnClientCertificateRevocationList()
   * - .toExportClientVpnClientConfiguration()
   * - .toExportImage()
   * - .toGetCapacityReservationUsage()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetFlowLogsIntegrationTemplate()
   * - .toGetGroupsForCapacityReservation()
   * - .toGetIpamAddressHistory()
   * - .toGetIpamPoolAllocations()
   * - .toGetIpamPoolCidrs()
   * - .toGetIpamResourceCidrs()
   * - .toGetLaunchTemplateData()
   * - .toGetManagedPrefixListAssociations()
   * - .toGetManagedPrefixListEntries()
   * - .toGetPasswordData()
   * - .toGetVpnConnectionDeviceSampleConfiguration()
   * - .toImportClientVpnClientCertificateRevocationList()
   * - .toImportImage()
   * - .toImportInstance()
   * - .toImportVolume()
   * - .toListSnapshotsInRecycleBin()
   * - .toModifyAddressAttribute()
   * - .toModifyCapacityReservation()
   * - .toModifyCapacityReservationFleet()
   * - .toModifyClientVpnEndpoint()
   * - .toModifyFleet()
   * - .toModifyFpgaImageAttribute()
   * - .toModifyHosts()
   * - .toModifyImageAttribute()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceEventStartTime()
   * - .toModifyInstanceEventWindow()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyIpam()
   * - .toModifyIpamPool()
   * - .toModifyIpamResourceCidr()
   * - .toModifyIpamScope()
   * - .toModifyLaunchTemplate()
   * - .toModifyManagedPrefixList()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toModifyReservedInstances()
   * - .toModifySecurityGroupRules()
   * - .toModifySnapshotAttribute()
   * - .toModifySnapshotTier()
   * - .toModifySpotFleetRequest()
   * - .toModifySubnetAttribute()
   * - .toModifyTrafficMirrorFilterNetworkServices()
   * - .toModifyTrafficMirrorFilterRule()
   * - .toModifyTrafficMirrorSession()
   * - .toModifyTransitGateway()
   * - .toModifyTransitGatewayPrefixListReference()
   * - .toModifyTransitGatewayVpcAttachment()
   * - .toModifyVolume()
   * - .toModifyVolumeAttribute()
   * - .toModifyVpcAttribute()
   * - .toModifyVpcEndpoint()
   * - .toModifyVpcEndpointConnectionNotification()
   * - .toModifyVpcEndpointServiceConfiguration()
   * - .toModifyVpcEndpointServicePayerResponsibility()
   * - .toModifyVpcEndpointServicePermissions()
   * - .toModifyVpcPeeringConnectionOptions()
   * - .toModifyVpcTenancy()
   * - .toModifyVpnConnection()
   * - .toModifyVpnConnectionOptions()
   * - .toModifyVpnTunnelCertificate()
   * - .toModifyVpnTunnelOptions()
   * - .toMonitorInstances()
   * - .toMoveByoipCidrToIpam()
   * - .toProvisionIpamPoolCidr()
   * - .toProvisionPublicIpv4PoolCidr()
   * - .toPurchaseHostReservation()
   * - .toRebootInstances()
   * - .toRegisterImage()
   * - .toRegisterTransitGatewayMulticastGroupMembers()
   * - .toRegisterTransitGatewayMulticastGroupSources()
   * - .toRejectTransitGatewayMulticastDomainAssociations()
   * - .toRejectTransitGatewayPeeringAttachment()
   * - .toRejectTransitGatewayVpcAttachment()
   * - .toRejectVpcEndpointConnections()
   * - .toRejectVpcPeeringConnection()
   * - .toReleaseAddress()
   * - .toReleaseHosts()
   * - .toReleaseIpamPoolAllocation()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceNetworkAclAssociation()
   * - .toReplaceNetworkAclEntry()
   * - .toReplaceRoute()
   * - .toReplaceRouteTableAssociation()
   * - .toReplaceTransitGatewayRoute()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   * - .toResetAddressAttribute()
   * - .toResetFpgaImageAttribute()
   * - .toResetImageAttribute()
   * - .toResetInstanceAttribute()
   * - .toResetNetworkInterfaceAttribute()
   * - .toResetSnapshotAttribute()
   * - .toRestoreManagedPrefixListVersion()
   * - .toRestoreSnapshotFromRecycleBin()
   * - .toRestoreSnapshotTier()
   * - .toRevokeClientVpnIngress()
   * - .toRevokeSecurityGroupEgress()
   * - .toRevokeSecurityGroupIngress()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   * - .toSearchTransitGatewayRoutes()
   * - .toSendDiagnosticInterrupt()
   * - .toSendSpotInstanceInterruptions()
   * - .toStartInstances()
   * - .toStartNetworkInsightsAccessScopeAnalysis()
   * - .toStartNetworkInsightsAnalysis()
   * - .toStartVpcEndpointServicePrivateDnsVerification()
   * - .toStopInstances()
   * - .toTerminateClientVpnConnections()
   * - .toTerminateInstances()
   * - .toUnassignIpv6Addresses()
   * - .toUnassignPrivateIpAddresses()
   * - .toUnmonitorInstances()
   * - .toUpdateSecurityGroupRuleDescriptionsEgress()
   * - .toUpdateSecurityGroupRuleDescriptionsIngress()
   *
   * Applies to resource types:
   * - elastic-ip
   * - capacity-reservation-fleet
   * - capacity-reservation
   * - carrier-gateway
   * - client-vpn-endpoint
   * - customer-gateway
   * - dedicated-host
   * - dhcp-options
   * - egress-only-internet-gateway
   * - elastic-gpu
   * - export-image-task
   * - export-instance-task
   * - fleet
   * - fpga-image
   * - host-reservation
   * - image
   * - import-image-task
   * - import-snapshot-task
   * - instance-event-window
   * - instance
   * - internet-gateway
   * - ipam
   * - ipam-pool
   * - ipam-scope
   * - ipv4pool-ec2
   * - ipv6pool-ec2
   * - key-pair
   * - launch-template
   * - local-gateway
   * - local-gateway-route-table-virtual-interface-group-association
   * - local-gateway-route-table-vpc-association
   * - local-gateway-route-table
   * - local-gateway-virtual-interface-group
   * - local-gateway-virtual-interface
   * - natgateway
   * - network-acl
   * - network-insights-access-scope-analysis
   * - network-insights-access-scope
   * - network-insights-analysis
   * - network-insights-path
   * - network-interface
   * - placement-group
   * - prefix-list
   * - replace-root-volume-task
   * - reserved-instances
   * - route-table
   * - security-group
   * - security-group-rule
   * - snapshot
   * - spot-fleet-request
   * - spot-instances-request
   * - subnet
   * - traffic-mirror-filter
   * - traffic-mirror-session
   * - traffic-mirror-target
   * - transit-gateway-attachment
   * - transit-gateway-connect-peer
   * - transit-gateway
   * - transit-gateway-multicast-domain
   * - transit-gateway-route-table
   * - volume
   * - vpc-endpoint
   * - vpc-endpoint-service
   * - vpc-flow-log
   * - vpc
   * - vpc-peering-connection
   * - vpn-connection-device-type
   * - vpn-connection
   * - vpn-gateway
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`RoleDelivery`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the root device type of the instance (ebs or instance-store)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssociateAddress()
   * - .toAssociateIamInstanceProfile()
   * - .toAttachClassicLinkVpc()
   * - .toAttachNetworkInterface()
   * - .toAttachVolume()
   * - .toCreateFleet()
   * - .toCreateImage()
   * - .toCreateInstanceExportTask()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateSnapshots()
   * - .toCreateStoreImageTask()
   * - .toCreateTags()
   * - .toDeregisterImage()
   * - .toDescribeFastLaunchImages()
   * - .toDescribeImageAttribute()
   * - .toDescribeInstanceAttribute()
   * - .toDescribeStoreImageTasks()
   * - .toDetachClassicLinkVpc()
   * - .toDetachNetworkInterface()
   * - .toDetachVolume()
   * - .toDisableFastLaunch()
   * - .toDisableImageDeprecation()
   * - .toDisassociateIamInstanceProfile()
   * - .toEnableFastLaunch()
   * - .toEnableImageDeprecation()
   * - .toExportImage()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetLaunchTemplateData()
   * - .toGetPasswordData()
   * - .toImportImage()
   * - .toModifyFleet()
   * - .toModifyImageAttribute()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toMonitorInstances()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceRoute()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   * - .toResetImageAttribute()
   * - .toResetInstanceAttribute()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toSendSpotInstanceInterruptions()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   * - .toUnmonitorInstances()
   *
   * Applies to resource types:
   * - image
   * - instance
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRootDeviceType(value: string | string[], operator?: Operator | string) {
    return this.if(`RootDeviceType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the routing type for the VPN connection
   *
   * https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html
   *
   * Applies to actions:
   * - .toCreateTags()
   * - .toCreateVpnConnection()
   * - .toModifyVpnConnection()
   * - .toModifyVpnTunnelOptions()
   *
   * Applies to resource types:
   * - vpn-connection
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRoutingType(value: string | string[], operator?: Operator | string) {
    return this.if(`RoutingType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of the IAM SAML identity provider
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toApplySecurityGroupsToClientVpnTargetNetwork()
   * - .toAssociateClientVpnTargetNetwork()
   * - .toAuthorizeClientVpnIngress()
   * - .toCreateClientVpnEndpoint()
   * - .toCreateClientVpnRoute()
   * - .toCreateTags()
   * - .toDeleteClientVpnEndpoint()
   * - .toDeleteClientVpnRoute()
   * - .toDescribeClientVpnAuthorizationRules()
   * - .toDescribeClientVpnConnections()
   * - .toDescribeClientVpnEndpoints()
   * - .toDescribeClientVpnRoutes()
   * - .toDescribeClientVpnTargetNetworks()
   * - .toDisassociateClientVpnTargetNetwork()
   * - .toExportClientVpnClientCertificateRevocationList()
   * - .toExportClientVpnClientConfiguration()
   * - .toImportClientVpnClientCertificateRevocationList()
   * - .toModifyClientVpnEndpoint()
   * - .toRevokeClientVpnIngress()
   * - .toTerminateClientVpnConnections()
   *
   * Applies to resource types:
   * - client-vpn-endpoint
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifSamlProviderArn(value: string | string[], operator?: Operator | string) {
    return this.if(`SamlProviderArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ARN of the server certificate
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toApplySecurityGroupsToClientVpnTargetNetwork()
   * - .toAssociateClientVpnTargetNetwork()
   * - .toAuthorizeClientVpnIngress()
   * - .toCreateClientVpnEndpoint()
   * - .toCreateClientVpnRoute()
   * - .toCreateTags()
   * - .toDeleteClientVpnEndpoint()
   * - .toDeleteClientVpnRoute()
   * - .toDescribeClientVpnAuthorizationRules()
   * - .toDescribeClientVpnConnections()
   * - .toDescribeClientVpnEndpoints()
   * - .toDescribeClientVpnRoutes()
   * - .toDescribeClientVpnTargetNetworks()
   * - .toDisassociateClientVpnTargetNetwork()
   * - .toExportClientVpnClientCertificateRevocationList()
   * - .toExportClientVpnClientConfiguration()
   * - .toImportClientVpnClientCertificateRevocationList()
   * - .toModifyClientVpnEndpoint()
   * - .toRevokeClientVpnIngress()
   * - .toTerminateClientVpnConnections()
   *
   * Applies to resource types:
   * - client-vpn-endpoint
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifServerCertificateArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ServerCertificateArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the initiation time of a snapshot
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCreateFleet()
   * - .toCreateImage()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateTags()
   * - .toDeleteSnapshot()
   * - .toDescribeSnapshotAttribute()
   * - .toDisableFastSnapshotRestores()
   * - .toEnableFastSnapshotRestores()
   * - .toImportImage()
   * - .toImportSnapshot()
   * - .toListSnapshotsInRecycleBin()
   * - .toModifyFleet()
   * - .toModifySnapshotAttribute()
   * - .toModifySnapshotTier()
   * - .toRegisterImage()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   * - .toResetSnapshotAttribute()
   * - .toRestoreSnapshotFromRecycleBin()
   * - .toRestoreSnapshotTier()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
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
    return this.if(`SnapshotTime`, value, operator || 'DateEquals');
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
    return this.if(`SourceInstanceARN`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ARN of the Outpost from which the request originated
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toCopySnapshot()
   * - .toCreateImage()
   * - .toCreateSnapshot()
   * - .toCreateSnapshots()
   * - .toDeleteSnapshot()
   * - .toDescribeSnapshotAttribute()
   * - .toRegisterImage()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifSourceOutpostArn(value: string | string[], operator?: Operator | string) {
    return this.if(`SourceOutpostArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ARN of the subnet
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssignIpv6Addresses()
   * - .toAssignPrivateIpAddresses()
   * - .toAssociateAddress()
   * - .toAttachNetworkInterface()
   * - .toCreateFleet()
   * - .toCreateFlowLogs()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateNetworkInterfacePermission()
   * - .toCreateTags()
   * - .toDeleteNetworkInterface()
   * - .toDeleteNetworkInterfacePermission()
   * - .toDeregisterTransitGatewayMulticastGroupMembers()
   * - .toDeregisterTransitGatewayMulticastGroupSources()
   * - .toDetachNetworkInterface()
   * - .toDisassociateAddress()
   * - .toModifyFleet()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toRegisterTransitGatewayMulticastGroupMembers()
   * - .toRegisterTransitGatewayMulticastGroupSources()
   * - .toReplaceRoute()
   * - .toRequestSpotInstances()
   * - .toResetNetworkInterfaceAttribute()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   * - .toUnassignIpv6Addresses()
   * - .toUnassignPrivateIpAddresses()
   *
   * Applies to resource types:
   * - network-interface
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifSubnet(value: string | string[], operator?: Operator | string) {
    return this.if(`Subnet`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the tenancy of the VPC or instance (default, dedicated, or host)
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAcceptVpcPeeringConnection()
   * - .toAssociateAddress()
   * - .toAssociateDhcpOptions()
   * - .toAssociateIamInstanceProfile()
   * - .toAssociateVpcCidrBlock()
   * - .toAttachClassicLinkVpc()
   * - .toAttachInternetGateway()
   * - .toAttachNetworkInterface()
   * - .toAttachVolume()
   * - .toAttachVpnGateway()
   * - .toCreateCarrierGateway()
   * - .toCreateEgressOnlyInternetGateway()
   * - .toCreateFleet()
   * - .toCreateFlowLogs()
   * - .toCreateImage()
   * - .toCreateInstanceExportTask()
   * - .toCreateLocalGatewayRouteTableVpcAssociation()
   * - .toCreateNetworkAcl()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateRouteTable()
   * - .toCreateSecurityGroup()
   * - .toCreateSnapshots()
   * - .toCreateSubnet()
   * - .toCreateTags()
   * - .toCreateTransitGatewayVpcAttachment()
   * - .toCreateVpcPeeringConnection()
   * - .toDeleteVpc()
   * - .toDescribeInstanceAttribute()
   * - .toDescribeStaleSecurityGroups()
   * - .toDescribeVpcAttribute()
   * - .toDetachClassicLinkVpc()
   * - .toDetachInternetGateway()
   * - .toDetachNetworkInterface()
   * - .toDetachVolume()
   * - .toDetachVpnGateway()
   * - .toDisableVpcClassicLink()
   * - .toDisableVpcClassicLinkDnsSupport()
   * - .toDisassociateIamInstanceProfile()
   * - .toDisassociateVpcCidrBlock()
   * - .toEnableVpcClassicLink()
   * - .toEnableVpcClassicLinkDnsSupport()
   * - .toGetConsoleOutput()
   * - .toGetConsoleScreenshot()
   * - .toGetLaunchTemplateData()
   * - .toGetPasswordData()
   * - .toModifyInstanceAttribute()
   * - .toModifyInstanceCapacityReservationAttributes()
   * - .toModifyInstanceCreditSpecification()
   * - .toModifyInstanceMetadataOptions()
   * - .toModifyInstancePlacement()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifyPrivateDnsNameOptions()
   * - .toModifyReservedInstances()
   * - .toModifyVpcAttribute()
   * - .toModifyVpcTenancy()
   * - .toMonitorInstances()
   * - .toRebootInstances()
   * - .toReplaceIamInstanceProfileAssociation()
   * - .toReplaceRoute()
   * - .toResetInstanceAttribute()
   * - .toRunInstances()
   * - .toSendDiagnosticInterrupt()
   * - .toSendSpotInstanceInterruptions()
   * - .toStartInstances()
   * - .toStopInstances()
   * - .toTerminateInstances()
   * - .toUnmonitorInstances()
   *
   * Applies to resource types:
   * - carrier-gateway
   * - instance
   * - reserved-instances
   * - vpc
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTenancy(value: string | string[], operator?: Operator | string) {
    return this.if(`Tenancy`, value, operator || 'StringLike');
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
   * - .toDescribeVolumeAttribute()
   * - .toDetachVolume()
   * - .toEnableVolumeIO()
   * - .toImportInstance()
   * - .toImportVolume()
   * - .toModifyInstanceAttribute()
   * - .toModifyVolume()
   * - .toModifyVolumeAttribute()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - volume
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifVolumeIops(value: number | number[], operator?: Operator | string) {
    return this.if(`VolumeIops`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the size of the volume, in GiB
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAttachVolume()
   * - .toCreateFleet()
   * - .toCreateImage()
   * - .toCreateReplaceRootVolumeTask()
   * - .toCreateSnapshot()
   * - .toCreateSnapshots()
   * - .toCreateTags()
   * - .toCreateVolume()
   * - .toDeleteSnapshot()
   * - .toDeleteVolume()
   * - .toDescribeSnapshotAttribute()
   * - .toDescribeVolumeAttribute()
   * - .toDetachVolume()
   * - .toDisableFastSnapshotRestores()
   * - .toEnableFastSnapshotRestores()
   * - .toEnableVolumeIO()
   * - .toImportImage()
   * - .toImportInstance()
   * - .toImportSnapshot()
   * - .toImportVolume()
   * - .toListSnapshotsInRecycleBin()
   * - .toModifyFleet()
   * - .toModifyInstanceAttribute()
   * - .toModifySnapshotAttribute()
   * - .toModifySnapshotTier()
   * - .toModifyVolume()
   * - .toModifyVolumeAttribute()
   * - .toRegisterImage()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   * - .toResetSnapshotAttribute()
   * - .toRestoreSnapshotFromRecycleBin()
   * - .toRestoreSnapshotTier()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   *
   * Applies to resource types:
   * - snapshot
   * - volume
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifVolumeSize(value: number | number[], operator?: Operator | string) {
    return this.if(`VolumeSize`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the throughput of the volume, in MiBps
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
   * - .toDescribeVolumeAttribute()
   * - .toDetachVolume()
   * - .toEnableVolumeIO()
   * - .toImportInstance()
   * - .toImportVolume()
   * - .toModifyInstanceAttribute()
   * - .toModifyVolume()
   * - .toModifyVolumeAttribute()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - volume
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifVolumeThroughput(value: number | number[], operator?: Operator | string) {
    return this.if(`VolumeThroughput`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the type of volume (gp2, gp3, io1, io2, st1, sc1, or standard)
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
   * - .toDescribeVolumeAttribute()
   * - .toDetachVolume()
   * - .toEnableVolumeIO()
   * - .toImportInstance()
   * - .toImportVolume()
   * - .toModifyInstanceAttribute()
   * - .toModifyVolume()
   * - .toModifyVolumeAttribute()
   * - .toRunInstances()
   *
   * Applies to resource types:
   * - volume
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVolumeType(value: string | string[], operator?: Operator | string) {
    return this.if(`VolumeType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of the VPC
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#amazon-ec2-keys
   *
   * Applies to actions:
   * - .toAssignIpv6Addresses()
   * - .toAssignPrivateIpAddresses()
   * - .toAssociateAddress()
   * - .toAssociateRouteTable()
   * - .toAssociateSubnetCidrBlock()
   * - .toAssociateTransitGatewayMulticastDomain()
   * - .toAttachClassicLinkVpc()
   * - .toAttachNetworkInterface()
   * - .toAuthorizeSecurityGroupEgress()
   * - .toAuthorizeSecurityGroupIngress()
   * - .toCreateFleet()
   * - .toCreateFlowLogs()
   * - .toCreateNatGateway()
   * - .toCreateNetworkAclEntry()
   * - .toCreateNetworkInsightsPath()
   * - .toCreateNetworkInterface()
   * - .toCreateNetworkInterfacePermission()
   * - .toCreateRoute()
   * - .toCreateTags()
   * - .toCreateTransitGatewayVpcAttachment()
   * - .toDeleteClientVpnRoute()
   * - .toDeleteNetworkAcl()
   * - .toDeleteNetworkAclEntry()
   * - .toDeleteNetworkInterface()
   * - .toDeleteNetworkInterfacePermission()
   * - .toDeleteRoute()
   * - .toDeleteRouteTable()
   * - .toDeleteSecurityGroup()
   * - .toDeleteSubnet()
   * - .toDeregisterTransitGatewayMulticastGroupMembers()
   * - .toDeregisterTransitGatewayMulticastGroupSources()
   * - .toDescribeSecurityGroupReferences()
   * - .toDetachNetworkInterface()
   * - .toDisableVgwRoutePropagation()
   * - .toDisassociateAddress()
   * - .toDisassociateRouteTable()
   * - .toDisassociateSubnetCidrBlock()
   * - .toDisassociateTransitGatewayMulticastDomain()
   * - .toEnableVgwRoutePropagation()
   * - .toImportInstance()
   * - .toModifyFleet()
   * - .toModifyInstanceAttribute()
   * - .toModifyNetworkInterfaceAttribute()
   * - .toModifySecurityGroupRules()
   * - .toModifySpotFleetRequest()
   * - .toModifySubnetAttribute()
   * - .toRegisterTransitGatewayMulticastGroupMembers()
   * - .toRegisterTransitGatewayMulticastGroupSources()
   * - .toReplaceNetworkAclAssociation()
   * - .toReplaceNetworkAclEntry()
   * - .toReplaceRoute()
   * - .toReplaceRouteTableAssociation()
   * - .toRequestSpotFleet()
   * - .toRequestSpotInstances()
   * - .toResetNetworkInterfaceAttribute()
   * - .toRevokeSecurityGroupEgress()
   * - .toRevokeSecurityGroupIngress()
   * - .toRunInstances()
   * - .toRunScheduledInstances()
   * - .toUnassignIpv6Addresses()
   * - .toUnassignPrivateIpAddresses()
   * - .toUpdateSecurityGroupRuleDescriptionsEgress()
   * - .toUpdateSecurityGroupRuleDescriptionsIngress()
   *
   * Applies to resource types:
   * - carrier-gateway
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
    return this.if(`Vpc`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the name of the VPC endpoint service
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-iam.html
   *
   * Applies to actions:
   * - .toCreateVpcEndpoint()
   * - .toDeleteVpcEndpoints()
   *
   * Applies to resource types:
   * - vpc-endpoint
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpceServiceName(value: string | string[], operator?: Operator | string) {
    return this.if(`VpceServiceName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the service owner of the VPC endpoint service (amazon, aws-marketplace, or an AWS account ID)
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-iam.html
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
    return this.if(`VpceServiceOwner`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the private DNS name of the VPC endpoint service
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-iam.html
   *
   * Applies to actions:
   * - .toCreateTags()
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
    return this.if(`VpceServicePrivateDnsName`, value, operator || 'StringLike');
  }
}
