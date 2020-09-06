import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [ec2](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ec2 extends PolicyStatement {
  public servicePrefix = 'ec2';
  protected actionList: Actions = {
    "AcceptReservedInstancesExchangeQuote": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptReservedInstancesExchangeQuote.html",
      "description": "Grants permission to accept a Convertible Reserved Instance exchange quote",
      "accessLevel": "Write"
    },
    "AcceptTransitGatewayPeeringAttachment": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptTransitGatewayPeeringAttachment.html",
      "description": "Grants permission to accept a transit gateway peering attachment request",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "AcceptTransitGatewayVpcAttachment": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptTransitGatewayVpcAttachment.html",
      "description": "Grants permission to accept a request to attach a VPC to a transit gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "AcceptVpcEndpointConnections": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptVpcEndpointConnections.html",
      "description": "Grants permission to accept one or more interface VPC endpoint connections to your VPC endpoint service",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc-endpoint-service": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "AcceptVpcPeeringConnection": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptVpcPeeringConnection.html",
      "description": "Grants permission to accept a VPC peering connection request",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Tenancy"
          ]
        },
        "vpc-peering-connection": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AccepterVpc",
            "ec2:Region",
            "ec2:RequesterVpc",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "AdvertiseByoipCidr": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AdvertiseByoipCidr.html",
      "description": "Grants permission to advertise an IP address range that is provisioned for use in AWS through bring your own IP addresses (BYOIP)",
      "accessLevel": "Write"
    },
    "AllocateAddress": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateAddress.html",
      "description": "Grants permission to allocate an Elastic IP address (EIP) to your account",
      "accessLevel": "Write"
    },
    "AllocateHosts": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateHosts.html",
      "description": "Grants permission to allocate a Dedicated Host to your account",
      "accessLevel": "Write",
      "resourceTypes": {
        "dedicated-host": {
          "required": true
        }
      }
    },
    "ApplySecurityGroupsToClientVpnTargetNetwork": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ApplySecurityGroupsToClientVpnTargetNetwork.html",
      "description": "Grants permission to apply a security group to the association between a Client VPN endpoint and a target network",
      "accessLevel": "Write",
      "resourceTypes": {
        "client-vpn-endpoint": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "security-group": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "vpc": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "AssignIpv6Addresses": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssignIpv6Addresses.html",
      "description": "Grants permission to assign one or more IPv6 addresses to a network interface",
      "accessLevel": "Write"
    },
    "AssignPrivateIpAddresses": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssignPrivateIpAddresses.html",
      "description": "Grants permission to assign one or more secondary private IP addresses to a network interface",
      "accessLevel": "Write"
    },
    "AssociateAddress": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateAddress.html",
      "description": "Grants permission to associate an Elastic IP address (EIP) with an instance or a network interface",
      "accessLevel": "Write"
    },
    "AssociateClientVpnTargetNetwork": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateClientVpnTargetNetwork.html",
      "description": "Grants permission to associate a target network with a Client VPN endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "client-vpn-endpoint": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "subnet": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "AssociateDhcpOptions": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateDhcpOptions.html",
      "description": "Grants permission to associate or disassociate a set of DHCP options with a VPC",
      "accessLevel": "Write"
    },
    "AssociateIamInstanceProfile": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html",
      "description": "Grants permission to associate an IAM instance profile with a running or stopped instance",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "AssociateRouteTable": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateRouteTable.html",
      "description": "Grants permission to associate a subnet or gateway with a route table",
      "accessLevel": "Write"
    },
    "AssociateSubnetCidrBlock": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateSubnetCidrBlock.html",
      "description": "Grants permission to associate a CIDR block with a subnet",
      "accessLevel": "Write"
    },
    "AssociateTransitGatewayMulticastDomain": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateTransitGatewayMulticastDomain.html",
      "description": "Grants permission to associate an attachment and list of subnets with a transit gateway multicast domain",
      "accessLevel": "Write",
      "resourceTypes": {
        "subnet": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-multicast-domain": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "AssociateTransitGatewayRouteTable": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateTransitGatewayRouteTable.html",
      "description": "Grants permission to associate an attachment with a transit gateway route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "AssociateVpcCidrBlock": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateVpcCidrBlock.html",
      "description": "Grants permission to associate a CIDR block with a VPC",
      "accessLevel": "Write"
    },
    "AttachClassicLinkVpc": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachClassicLinkVpc.html",
      "description": "Grants permission to link an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC's security groups",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        },
        "security-group": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        },
        "vpc": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "AttachInternetGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachInternetGateway.html",
      "description": "Grants permission to attach an internet gateway to a VPC",
      "accessLevel": "Write"
    },
    "AttachNetworkInterface": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachNetworkInterface.html",
      "description": "Grants permission to attach a network interface to an instance",
      "accessLevel": "Write"
    },
    "AttachVolume": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachVolume.html",
      "description": "Grants permission to attach an EBS volume to a running or stopped instance and expose it to the instance with the specified device name",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        },
        "volume": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:Encrypted",
            "ec2:ParentSnapshot",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:VolumeIops",
            "ec2:VolumeSize",
            "ec2:VolumeType"
          ]
        }
      }
    },
    "AttachVpnGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachVpnGateway.html",
      "description": "Grants permission to attach a virtual private gateway to a VPC",
      "accessLevel": "Write"
    },
    "AuthorizeClientVpnIngress": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeClientVpnIngress.html",
      "description": "Grants permission to add an inbound authorization rule to a Client VPN endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "client-vpn-endpoint": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "AuthorizeSecurityGroupEgress": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupEgress.html",
      "description": "Grants permission to add one or more outbound rules to a VPC security group",
      "accessLevel": "Write",
      "resourceTypes": {
        "security-group": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        }
      }
    },
    "AuthorizeSecurityGroupIngress": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupIngress.html",
      "description": "Grants permission to add one or more inbound rules to a security group",
      "accessLevel": "Write",
      "resourceTypes": {
        "security-group": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        }
      }
    },
    "BundleInstance": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BundleInstance.html",
      "description": "Grants permission to bundle an instance store-backed Windows instance",
      "accessLevel": "Write"
    },
    "CancelBundleTask": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelBundleTask.html",
      "description": "Grants permission to cancel a bundling operation",
      "accessLevel": "Write"
    },
    "CancelCapacityReservation": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelCapacityReservation.html",
      "description": "Grants permission to cancel a Capacity Reservation and release the reserved capacity",
      "accessLevel": "Write",
      "resourceTypes": {
        "capacity-reservation": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "CancelConversionTask": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelConversionTask.html",
      "description": "Grants permission to cancel an active conversion task",
      "accessLevel": "Write"
    },
    "CancelExportTask": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelExportTask.html",
      "description": "Grants permission to cancel an active export task",
      "accessLevel": "Write"
    },
    "CancelImportTask": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelImportTask.html",
      "description": "Grants permission to cancel an in-process import virtual machine or import snapshot task",
      "accessLevel": "Write"
    },
    "CancelReservedInstancesListing": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelReservedInstancesListing.html",
      "description": "Grants permission to cancel a Reserved Instance listing on the Reserved Instance Marketplace",
      "accessLevel": "Write"
    },
    "CancelSpotFleetRequests": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotFleetRequests.html",
      "description": "Grants permission to cancel one or more Spot Fleet requests",
      "accessLevel": "Write"
    },
    "CancelSpotInstanceRequests": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotInstanceRequests.html",
      "description": "Grants permission to cancel one or more Spot Instance requests",
      "accessLevel": "Write"
    },
    "ConfirmProductInstance": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ConfirmProductInstance.html",
      "description": "Grants permission to determine whether an owned product code is associated with an instance",
      "accessLevel": "Write"
    },
    "CopyFpgaImage": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopyFpgaImage.html",
      "description": "Grants permission to copy a source Amazon FPGA image (AFI) to the current Region",
      "accessLevel": "Write"
    },
    "CopyImage": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopyImage.html",
      "description": "Grants permission to copy an Amazon Machine Image (AMI) from a source Region to the current Region",
      "accessLevel": "Write"
    },
    "CopySnapshot": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopySnapshot.html",
      "description": "Grants permission to copy a point-in-time snapshot of an EBS volume and store it in Amazon S3",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true,
          "conditions": [
            "aws:TagKeys",
            "aws:RequestTag/${TagKey}",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateCapacityReservation": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCapacityReservation.html",
      "description": "Grants permission to create a Capacity Reservation",
      "accessLevel": "Write",
      "resourceTypes": {
        "capacity-reservation": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateCarrierGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCarrierGateway.html",
      "description": "Grants permission to create a carrier gateway and provides CSP connectivity to VPC customers.",
      "accessLevel": "Write",
      "resourceTypes": {
        "carrier-gateway": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateClientVpnEndpoint": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateClientVpnEndpoint.html",
      "description": "Grants permission to create a Client VPN endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "client-vpn-endpoint": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateClientVpnRoute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateClientVpnRoute.html",
      "description": "Grants permission to add a network route to a Client VPN endpoint's route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "client-vpn-endpoint": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "subnet": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "CreateCustomerGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCustomerGateway.html",
      "description": "Grants permission to create a customer gateway, which provides information to AWS about your customer gateway device",
      "accessLevel": "Write"
    },
    "CreateDefaultSubnet": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateDefaultSubnet.html",
      "description": "Grants permission to create a default subnet in a specified Availability Zone in a default VPC",
      "accessLevel": "Write"
    },
    "CreateDefaultVpc": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateDefaultVpc.html",
      "description": "Grants permission to create a default VPC with a default subnet in each Availability Zone",
      "accessLevel": "Write"
    },
    "CreateDhcpOptions": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateDhcpOptions.html",
      "description": "Grants permission to create a set of DHCP options for a VPC",
      "accessLevel": "Write",
      "resourceTypes": {
        "dhcp-options": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateEgressOnlyInternetGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateEgressOnlyInternetGateway.html",
      "description": "Grants permission to create an egress-only internet gateway for a VPC",
      "accessLevel": "Write",
      "resourceTypes": {
        "egress-only-internet-gateway": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateFleet": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html",
      "description": "Grants permission to launch an EC2 Fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateFlowLogs": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFlowLogs.html",
      "description": "Grants permission to create one or more flow logs to capture IP traffic for a network interface",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "vpc-flow-log": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        },
        "network-interface": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Subnet",
            "ec2:Vpc"
          ]
        },
        "subnet": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        },
        "vpc": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "CreateFpgaImage": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFpgaImage.html",
      "description": "Grants permission to create an Amazon FPGA Image (AFI) from a design checkpoint (DCP)",
      "accessLevel": "Write",
      "resourceTypes": {
        "fpga-image": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateImage": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html",
      "description": "Grants permission to create an Amazon EBS-backed AMI from a stopped or running Amazon EBS-backed instance",
      "accessLevel": "Write"
    },
    "CreateInstanceExportTask": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInstanceExportTask.html",
      "description": "Grants permission to export a running or stopped instance to an Amazon S3 bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "export-instance-task": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateInternetGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInternetGateway.html",
      "description": "Grants permission to create an internet gateway for a VPC",
      "accessLevel": "Write",
      "resourceTypes": {
        "internet-gateway": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateKeyPair": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html",
      "description": "Grants permission to create a 2048-bit RSA key pair",
      "accessLevel": "Write",
      "resourceTypes": {
        "key-pair": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateLaunchTemplate": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html",
      "description": "Grants permission to create a launch template",
      "accessLevel": "Write",
      "resourceTypes": {
        "launch-template": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateLaunchTemplateVersion": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplateVersion.html",
      "description": "Grants permission to create a new version of a launch template",
      "accessLevel": "Write",
      "resourceTypes": {
        "launch-template": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "CreateLocalGatewayRoute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLocalGatewayRoute.html",
      "description": "Grants permission to create a static route for a local gateway route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "local-gateway-route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "local-gateway-virtual-interface-group": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "CreateLocalGatewayRouteTableVpcAssociation": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLocalGatewayRouteTableVpcAssociation.html",
      "description": "Grants permission to associate a VPC with a local gateway route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "local-gateway-route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "local-gateway-route-table-vpc-association": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        },
        "vpc": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "CreateManagedPrefixList": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateManagedPrefixList.html",
      "description": "Grants permission to create a managed prefix list",
      "accessLevel": "Write",
      "resourceTypes": {
        "prefix-list": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateNatGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNatGateway.html",
      "description": "Grants permission to create a NAT gateway in a subnet",
      "accessLevel": "Write",
      "resourceTypes": {
        "natgateway": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateNetworkAcl": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkAcl.html",
      "description": "Grants permission to create a network ACL in a VPC",
      "accessLevel": "Write",
      "resourceTypes": {
        "network-acl": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateNetworkAclEntry": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkAclEntry.html",
      "description": "Grants permission to create a numbered entry (a rule) in a network ACL",
      "accessLevel": "Write"
    },
    "CreateNetworkInterface": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html",
      "description": "Grants permission to create a network interface in a subnet",
      "accessLevel": "Write",
      "resourceTypes": {
        "network-interface": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateNetworkInterfacePermission": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterfacePermission.html",
      "description": "Grants permission to create a permission for an AWS-authorized user to perform certain operations on a network interface",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "network-interface": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AuthorizedUser",
            "ec2:AvailabilityZone",
            "ec2:Permission",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Subnet",
            "ec2:Vpc",
            "ec2:AuthorizedService"
          ]
        }
      }
    },
    "CreatePlacementGroup": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreatePlacementGroup.html",
      "description": "Grants permission to create a placement group",
      "accessLevel": "Write",
      "resourceTypes": {
        "placement-group": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateReservedInstancesListing": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateReservedInstancesListing.html",
      "description": "Grants permission to create a listing for Standard Reserved Instances to be sold in the Reserved Instance Marketplace",
      "accessLevel": "Write"
    },
    "CreateRoute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRoute.html",
      "description": "Grants permission to create a route in a VPC route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        }
      }
    },
    "CreateRouteTable": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRouteTable.html",
      "description": "Grants permission to create a route table for a VPC",
      "accessLevel": "Write"
    },
    "CreateSecurityGroup": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html",
      "description": "Grants permission to create a security group",
      "accessLevel": "Write",
      "resourceTypes": {
        "security-group": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateSnapshot": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSnapshot.html",
      "description": "Grants permission to create a snapshot of an EBS volume and store it in Amazon S3",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true,
          "conditions": [
            "aws:TagKeys",
            "aws:RequestTag/${TagKey}",
            "ec2:ParentVolume",
            "ec2:Region"
          ]
        },
        "volume": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Encrypted",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:VolumeIops",
            "ec2:VolumeSize",
            "ec2:VolumeType"
          ]
        }
      }
    },
    "CreateSnapshots": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSnapshots.html",
      "description": "Grants permission to create crash-consistent snapshots of multiple EBS volumes and store them in Amazon S3",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        },
        "snapshot": {
          "required": true,
          "conditions": [
            "aws:TagKeys",
            "aws:RequestTag/${TagKey}",
            "ec2:ParentVolume",
            "ec2:Region"
          ]
        },
        "volume": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Encrypted",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:VolumeIops",
            "ec2:VolumeSize",
            "ec2:VolumeType"
          ]
        }
      }
    },
    "CreateSpotDatafeedSubscription": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSpotDatafeedSubscription.html",
      "description": "Grants permission to create a data feed for Spot Instances to view Spot Instance usage logs",
      "accessLevel": "Write"
    },
    "CreateSubnet": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSubnet.html",
      "description": "Grants permission to create a subnet in a VPC",
      "accessLevel": "Write",
      "resourceTypes": {
        "subnet": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateTags": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html",
      "description": "Grants permission to add or overwrite one or more tags for Amazon EC2 resources",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "capacity-reservation": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "client-vpn-endpoint": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "dedicated-host": {
          "required": false
        },
        "dhcp-options": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "egress-only-internet-gateway": {
          "required": false
        },
        "export-instance-task": {
          "required": false
        },
        "fleet": {
          "required": false
        },
        "fpga-image": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Owner",
            "ec2:Public",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "image": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:ImageType",
            "ec2:Owner",
            "ec2:Public",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType"
          ]
        },
        "instance": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        },
        "internet-gateway": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "local-gateway": {
          "required": false
        },
        "local-gateway-route-table": {
          "required": false
        },
        "local-gateway-route-table-virtual-interface-group-association": {
          "required": false
        },
        "local-gateway-route-table-vpc-association": {
          "required": false
        },
        "local-gateway-virtual-interface": {
          "required": false
        },
        "local-gateway-virtual-interface-group": {
          "required": false
        },
        "natgateway": {
          "required": false
        },
        "network-acl": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        },
        "network-interface": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:AvailabilityZone",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Subnet",
            "ec2:Vpc",
            "ec2:AssociatePublicIpAddress"
          ]
        },
        "reserved-instances": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:AvailabilityZone",
            "ec2:InstanceType",
            "ec2:Region",
            "ec2:ReservedInstancesOfferingType",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Tenancy"
          ]
        },
        "route-table": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        },
        "security-group": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        },
        "snapshot": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Owner",
            "ec2:ParentVolume",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:SnapshotTime",
            "ec2:VolumeSize"
          ]
        },
        "spot-instance-request": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "subnet": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:AvailabilityZone",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        },
        "traffic-mirror-filter": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "traffic-mirror-session": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "traffic-mirror-target": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-attachment": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-multicast-domain": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-route-table": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "volume": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:AvailabilityZone",
            "ec2:Encrypted",
            "ec2:ParentSnapshot",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:VolumeIops",
            "ec2:VolumeSize",
            "ec2:VolumeType"
          ]
        },
        "vpc": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Tenancy"
          ]
        },
        "vpc-endpoint": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "vpc-endpoint-service": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "vpc-flow-log": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "vpn-connection": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "vpn-gateway": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      },
      "conditions": [
        "ec2:CreateAction"
      ]
    },
    "CreateTrafficMirrorFilter": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilter.html",
      "description": "Grants permission to create a traffic mirror filter",
      "accessLevel": "Write",
      "resourceTypes": {
        "traffic-mirror-filter": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateTrafficMirrorFilterRule": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilterRule.html",
      "description": "Grants permission to create a traffic mirror filter rule",
      "accessLevel": "Write",
      "resourceTypes": {
        "traffic-mirror-filter": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "traffic-mirror-filter-rule": {
          "required": true,
          "conditions": [
            "ec2:Region"
          ]
        }
      }
    },
    "CreateTrafficMirrorSession": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorSession.html",
      "description": "Grants permission to create a traffic mirror session",
      "accessLevel": "Write",
      "resourceTypes": {
        "network-interface": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "traffic-mirror-filter": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "traffic-mirror-session": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        },
        "traffic-mirror-target": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "CreateTrafficMirrorTarget": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorTarget.html",
      "description": "Grants permission to create a traffic mirror target",
      "accessLevel": "Write",
      "resourceTypes": {
        "traffic-mirror-target": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        },
        "network-interface": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "CreateTransitGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGateway.html",
      "description": "Grants permission to create a transit gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateTransitGatewayMulticastDomain": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayMulticastDomain.html",
      "description": "Grants permission to create a multicast domain for a transit gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-multicast-domain": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateTransitGatewayPeeringAttachment": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayPeeringAttachment.html",
      "description": "Grants permission to request a transit gateway peering attachment between a requester and accepter transit gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateTransitGatewayRoute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayRoute.html",
      "description": "Grants permission to create a static route for a transit gateway route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-attachment": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "CreateTransitGatewayRouteTable": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayRouteTable.html",
      "description": "Grants permission to create a route table for a transit gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-route-table": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateTransitGatewayVpcAttachment": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTransitGatewayVpcAttachment.html",
      "description": "Grants permission to attach a VPC to a transit gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        },
        "vpc": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "subnet": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "CreateVolume": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html",
      "description": "Grants permission to create an EBS volume",
      "accessLevel": "Write",
      "resourceTypes": {
        "volume": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:AvailabilityZone",
            "ec2:Encrypted",
            "ec2:ParentSnapshot",
            "ec2:Region",
            "ec2:VolumeIops",
            "ec2:VolumeSize",
            "ec2:VolumeType"
          ]
        }
      }
    },
    "CreateVpc": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpc.html",
      "description": "Grants permission to create a VPC with a specified CIDR block",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region"
          ]
        }
      }
    },
    "CreateVpcEndpoint": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpoint.html",
      "description": "Grants permission to create a VPC endpoint for an AWS service",
      "accessLevel": "Write",
      "dependentActions": [
        "route53:AssociateVPCWithHostedZone"
      ],
      "resourceTypes": {
        "vpc": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "vpc-endpoint": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:VpceServiceName",
            "ec2:VpceServiceOwner"
          ]
        },
        "route-table": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "security-group": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "subnet": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "CreateVpcEndpointConnectionNotification": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointConnectionNotification.html",
      "description": "Grants permission to create a connection notification for a VPC endpoint or VPC endpoint service",
      "accessLevel": "Write"
    },
    "CreateVpcEndpointServiceConfiguration": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointServiceConfiguration.html",
      "description": "Grants permission to create a VPC endpoint service configuration to which service consumers (AWS accounts, IAM users, and IAM roles) can connect",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc-endpoint-service": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:VpceServicePrivateDnsName"
          ]
        }
      }
    },
    "CreateVpcPeeringConnection": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcPeeringConnection.html",
      "description": "Grants permission to request a VPC peering connection between two VPCs",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Tenancy"
          ]
        },
        "vpc-peering-connection": {
          "required": true,
          "conditions": [
            "ec2:AccepterVpc",
            "ec2:Region",
            "ec2:RequesterVpc"
          ]
        }
      }
    },
    "CreateVpnConnection": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnConnection.html",
      "description": "Grants permission to create a VPN connection between a virtual private gateway or transit gateway and a customer gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpn-connection": {
          "required": true,
          "conditions": [
            "ec2:Region",
            "ec2:AuthenticationType",
            "ec2:DPDTimeoutSeconds",
            "ec2:GatewayType",
            "ec2:IKEVersions",
            "ec2:InsideTunnelCidr",
            "ec2:Phase1DHGroupNumbers",
            "ec2:Phase2DHGroupNumbers",
            "ec2:Phase1EncryptionAlgorithms",
            "ec2:Phase2EncryptionAlgorithms",
            "ec2:Phase1IntegrityAlgorithms",
            "ec2:Phase2IntegrityAlgorithms",
            "ec2:Phase1LifetimeSeconds",
            "ec2:Phase2LifetimeSeconds",
            "ec2:PresharedKeys",
            "ec2:RekeyFuzzPercentage",
            "ec2:RekeyMarginTimeSeconds",
            "ec2:RoutingType"
          ]
        }
      }
    },
    "CreateVpnConnectionRoute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnConnectionRoute.html",
      "description": "Grants permission to create a static route for a VPN connection between a virtual private gateway and a customer gateway",
      "accessLevel": "Write"
    },
    "CreateVpnGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnGateway.html",
      "description": "Grants permission to create a virtual private gateway",
      "accessLevel": "Write"
    },
    "DeleteCarrierGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteCarrierGateway.html",
      "description": "Grants permission to delete a carrier gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "carrier-gateway": {
          "required": true,
          "conditions": [
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "aws:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteClientVpnEndpoint": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteClientVpnEndpoint.html",
      "description": "Grants permission to delete a Client VPN endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "client-vpn-endpoint": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteClientVpnRoute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteClientVpnRoute.html",
      "description": "Grants permission to delete a route from a Client VPN endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "client-vpn-endpoint": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "subnet": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteCustomerGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteCustomerGateway.html",
      "description": "Grants permission to delete a customer gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "customer-gateway": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteDhcpOptions": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteDhcpOptions.html",
      "description": "Grants permission to delete a set of DHCP options",
      "accessLevel": "Write",
      "resourceTypes": {
        "dhcp-options": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteEgressOnlyInternetGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteEgressOnlyInternetGateway.html",
      "description": "Grants permission to delete an egress-only internet gateway",
      "accessLevel": "Write"
    },
    "DeleteFleets": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteFleets.html",
      "description": "Grants permission to delete one or more EC2 Fleets",
      "accessLevel": "Write"
    },
    "DeleteFlowLogs": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteFlowLogs.html",
      "description": "Grants permission to delete one or more flow logs",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc-flow-log": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteFpgaImage": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteFpgaImage.html",
      "description": "Grants permission to delete an Amazon FPGA Image (AFI)",
      "accessLevel": "Write"
    },
    "DeleteInternetGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteInternetGateway.html",
      "description": "Grants permission to delete an internet gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "internet-gateway": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteKeyPair": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteKeyPair.html",
      "description": "Grants permission to delete a key pair by removing the public key from Amazon EC2",
      "accessLevel": "Write"
    },
    "DeleteLaunchTemplate": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLaunchTemplate.html",
      "description": "Grants permission to delete a launch template and its associated versions",
      "accessLevel": "Write",
      "resourceTypes": {
        "launch-template": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteLaunchTemplateVersions": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLaunchTemplateVersions.html",
      "description": "Grants permission to delete one or more versions of a launch template",
      "accessLevel": "Write",
      "resourceTypes": {
        "launch-template": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteLocalGatewayRoute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLocalGatewayRoute.html",
      "description": "Grants permission to delete a route from a local gateway route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "local-gateway-route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteLocalGatewayRouteTableVpcAssociation": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteLocalGatewayRouteTableVpcAssociation.html",
      "description": "Grants permission to delete an association between a VPC and local gateway route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "local-gateway-route-table-vpc-association": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteManagedPrefixList": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteManagedPrefixList.html",
      "description": "Grants permission to delete a managed prefix list",
      "accessLevel": "Write",
      "resourceTypes": {
        "prefix-list": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteNatGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNatGateway.html",
      "description": "Grants permission to delete a NAT gateway",
      "accessLevel": "Write"
    },
    "DeleteNetworkAcl": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkAcl.html",
      "description": "Grants permission to delete a network ACL",
      "accessLevel": "Write",
      "resourceTypes": {
        "network-acl": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        }
      }
    },
    "DeleteNetworkAclEntry": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkAclEntry.html",
      "description": "Grants permission to delete an inbound or outbound entry (rule) from a network ACL",
      "accessLevel": "Write",
      "resourceTypes": {
        "network-acl": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        }
      }
    },
    "DeleteNetworkInterface": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInterface.html",
      "description": "Grants permission to delete a detached network interface",
      "accessLevel": "Write"
    },
    "DeleteNetworkInterfacePermission": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInterfacePermission.html",
      "description": "Grants permission to delete a permission that is associated with a network interface",
      "accessLevel": "Permissions management"
    },
    "DeletePlacementGroup": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeletePlacementGroup.html",
      "description": "Grants permission to delete a placement group",
      "accessLevel": "Write"
    },
    "DeleteRoute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRoute.html",
      "description": "Grants permission to delete a route from a route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        }
      }
    },
    "DeleteRouteTable": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRouteTable.html",
      "description": "Grants permission to delete a route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        }
      }
    },
    "DeleteSecurityGroup": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSecurityGroup.html",
      "description": "Grants permission to delete a security group",
      "accessLevel": "Write",
      "resourceTypes": {
        "security-group": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        }
      }
    },
    "DeleteSnapshot": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html",
      "description": "Grants permission to delete a snapshot of an EBS volume",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Owner",
            "ec2:ParentVolume",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:SnapshotTime",
            "ec2:VolumeSize"
          ]
        }
      }
    },
    "DeleteSpotDatafeedSubscription": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSpotDatafeedSubscription.html",
      "description": "Grants permission to delete a data feed for Spot Instances",
      "accessLevel": "Write"
    },
    "DeleteSubnet": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSubnet.html",
      "description": "Grants permission to delete a subnet",
      "accessLevel": "Write"
    },
    "DeleteTags": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTags.html",
      "description": "Grants permission to delete one or more tags from Amazon EC2 resources",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "capacity-reservation": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "client-vpn-endpoint": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "dedicated-host": {
          "required": false
        },
        "dhcp-options": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "egress-only-internet-gateway": {
          "required": false
        },
        "export-instance-task": {
          "required": false
        },
        "fleet": {
          "required": false
        },
        "fpga-image": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "image": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "instance": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "internet-gateway": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "local-gateway": {
          "required": false
        },
        "local-gateway-route-table": {
          "required": false
        },
        "local-gateway-route-table-virtual-interface-group-association": {
          "required": false
        },
        "local-gateway-route-table-vpc-association": {
          "required": false
        },
        "local-gateway-virtual-interface": {
          "required": false
        },
        "local-gateway-virtual-interface-group": {
          "required": false
        },
        "natgateway": {
          "required": false
        },
        "network-acl": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "network-interface": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "reserved-instances": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "route-table": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "security-group": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "snapshot": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "spot-instance-request": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "subnet": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-attachment": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-multicast-domain": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-route-table": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "volume": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "vpc": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "vpc-endpoint": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "vpc-endpoint-service": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "vpc-flow-log": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "vpn-connection": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "vpn-gateway": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteTrafficMirrorFilter": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorFilter.html",
      "description": "Grants permission to delete a traffic mirror filter",
      "accessLevel": "Write",
      "resourceTypes": {
        "traffic-mirror-filter": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteTrafficMirrorFilterRule": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorFilterRule.html",
      "description": "Grants permission to delete a traffic mirror filter rule",
      "accessLevel": "Write",
      "resourceTypes": {
        "traffic-mirror-filter": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "traffic-mirror-filter-rule": {
          "required": true,
          "conditions": [
            "ec2:Region"
          ]
        }
      }
    },
    "DeleteTrafficMirrorSession": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorSession.html",
      "description": "Grants permission to delete a traffic mirror session",
      "accessLevel": "Write",
      "resourceTypes": {
        "traffic-mirror-session": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteTrafficMirrorTarget": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTrafficMirrorTarget.html",
      "description": "Grants permission to delete a traffic mirror target",
      "accessLevel": "Write",
      "resourceTypes": {
        "traffic-mirror-target": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteTransitGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGateway.html",
      "description": "Grants permission to delete a transit gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteTransitGatewayMulticastDomain": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayMulticastDomain.html",
      "description": "Grants permissions to delete a transit gateway multicast domain",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-multicast-domain": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteTransitGatewayPeeringAttachment": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayPeeringAttachment.html",
      "description": "Grants permission to delete a peering attachment from a transit gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteTransitGatewayRoute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayRoute.html",
      "description": "Grants permission to delete a route from a transit gateway route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteTransitGatewayRouteTable": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayRouteTable.html",
      "description": "Grants permission to delete a transit gateway route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteTransitGatewayVpcAttachment": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTransitGatewayVpcAttachment.html",
      "description": "Grants permission to delete a VPC attachment from a transit gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteVolume": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVolume.html",
      "description": "Grants permission to delete an EBS volume",
      "accessLevel": "Write",
      "resourceTypes": {
        "volume": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:Encrypted",
            "ec2:ParentSnapshot",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:VolumeIops",
            "ec2:VolumeSize",
            "ec2:VolumeType"
          ]
        }
      }
    },
    "DeleteVpc": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpc.html",
      "description": "Grants permission to delete a VPC",
      "accessLevel": "Write"
    },
    "DeleteVpcEndpointConnectionNotifications": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcEndpointConnectionNotifications.html",
      "description": "Grants permission to delete one or more VPC endpoint connection notifications",
      "accessLevel": "Write"
    },
    "DeleteVpcEndpointServiceConfigurations": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcEndpointServiceConfigurations.html",
      "description": "Grants permission to delete one or more VPC endpoint service configurations",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc-endpoint-service": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteVpcEndpoints": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcEndpoints.html",
      "description": "Grants permission to delete one or more VPC endpoints",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc-endpoint": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteVpcPeeringConnection": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcPeeringConnection.html",
      "description": "Grants permission to delete a VPC peering connection",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc-peering-connection": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AccepterVpc",
            "ec2:Region",
            "ec2:RequesterVpc",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeleteVpnConnection": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnConnection.html",
      "description": "Grants permission to delete a VPN connection",
      "accessLevel": "Write"
    },
    "DeleteVpnConnectionRoute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnConnectionRoute.html",
      "description": "Grants permission to delete a static route for a VPN connection between a virtual private gateway and a customer gateway",
      "accessLevel": "Write"
    },
    "DeleteVpnGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnGateway.html",
      "description": "Grants permission to delete a virtual private gateway",
      "accessLevel": "Write"
    },
    "DeprovisionByoipCidr": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeprovisionByoipCidr.html",
      "description": "Grants permission to release an IP address range that was provisioned through bring your own IP addresses (BYOIP), and to delete the corresponding address pool",
      "accessLevel": "Write"
    },
    "DeregisterImage": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterImage.html",
      "description": "Grants permission to deregister an Amazon Machine Image (AMI)",
      "accessLevel": "Write"
    },
    "DeregisterInstanceEventNotificationAttributes": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterInstanceEventNotificationAttributes.html",
      "description": "Grants permission to remove tags from the set of tags to include in notifications about scheduled events for your instances",
      "accessLevel": "Write"
    },
    "DeregisterTransitGatewayMulticastGroupMembers": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterTransitGatewayMulticastGroupMembers.html",
      "description": "Grants permission to deregister one or more network interface members from a group IP address in a transit gateway multicast domain",
      "accessLevel": "Write",
      "resourceTypes": {
        "network-interface": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-multicast-domain": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DeregisterTransitGatewayMulticastGroupSources": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterTransitGatewayMulticastGroupSources.html",
      "description": "Grants permission to deregister one or more network interface sources from a group IP address in a transit gateway multicast domain",
      "accessLevel": "Write",
      "resourceTypes": {
        "network-interface": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-multicast-domain": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DescribeAccountAttributes": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAccountAttributes.html",
      "description": "Grants permission to describe the attributes of the AWS account",
      "accessLevel": "List"
    },
    "DescribeAddresses": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAddresses.html",
      "description": "Grants permission to describe one or more Elastic IP addresses",
      "accessLevel": "List"
    },
    "DescribeAggregateIdFormat": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAggregateIdFormat.html",
      "description": "Grants permission to describe the longer ID format settings for all resource types",
      "accessLevel": "List"
    },
    "DescribeAvailabilityZones": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html",
      "description": "Grants permission to describe one or more of the Availability Zones that are available to you",
      "accessLevel": "List"
    },
    "DescribeBundleTasks": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeBundleTasks.html",
      "description": "Grants permission to describe one or more bundling tasks",
      "accessLevel": "List"
    },
    "DescribeByoipCidrs": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeByoipCidrs.html",
      "description": "Grants permission to describe the IP address ranges that were provisioned through bring your own IP addresses (BYOIP)",
      "accessLevel": "List"
    },
    "DescribeCapacityReservations": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCapacityReservations.html",
      "description": "Grants permission to describe one or more Capacity Reservations",
      "accessLevel": "List"
    },
    "DescribeCarrierGateways": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCarrierGateways.html",
      "description": "Grants permission to describe one or more Carrier Gateways",
      "accessLevel": "List"
    },
    "DescribeClassicLinkInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClassicLinkInstances.html",
      "description": "Grants permission to describe one or more linked EC2-Classic instances",
      "accessLevel": "List"
    },
    "DescribeClientVpnAuthorizationRules": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnAuthorizationRules.html",
      "description": "Grants permission to describe the authorization rules for a Client VPN endpoint",
      "accessLevel": "List"
    },
    "DescribeClientVpnConnections": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnConnections.html",
      "description": "Grants permission to describe active client connections and connections that have been terminated within the last 60 minutes for a Client VPN endpoint",
      "accessLevel": "List"
    },
    "DescribeClientVpnEndpoints": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnEndpoints.html",
      "description": "Grants permission to describe one or more Client VPN endpoints",
      "accessLevel": "List"
    },
    "DescribeClientVpnRoutes": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnRoutes.html",
      "description": "Grants permission to describe the routes for a Client VPN endpoint",
      "accessLevel": "List"
    },
    "DescribeClientVpnTargetNetworks": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnTargetNetworks.html",
      "description": "Grants permission to describe the target networks that are associated with a Client VPN endpoint",
      "accessLevel": "List"
    },
    "DescribeCoipPools": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCoipPools.html",
      "description": "Grants permission to describe the specified customer-owned address pools or all of your customer-owned address pools",
      "accessLevel": "List"
    },
    "DescribeConversionTasks": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeConversionTasks.html",
      "description": "Grants permission to describe one or more conversion tasks",
      "accessLevel": "List"
    },
    "DescribeCustomerGateways": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCustomerGateways.html",
      "description": "Grants permission to describe one or more customer gateways",
      "accessLevel": "List"
    },
    "DescribeDhcpOptions": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeDhcpOptions.html",
      "description": "Grants permission to describe one or more DHCP options sets",
      "accessLevel": "List"
    },
    "DescribeEgressOnlyInternetGateways": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeEgressOnlyInternetGateways.html",
      "description": "Grants permission to describe one or more egress-only internet gateways",
      "accessLevel": "List"
    },
    "DescribeElasticGpus": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeElasticGpus.html",
      "description": "Grants permission to describe an Elastic Graphics accelerator that is associated with an instance",
      "accessLevel": "Read"
    },
    "DescribeExportImageTasks": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeExportImageTasks.html",
      "description": "Grants permission to describe one or more export image tasks",
      "accessLevel": "List"
    },
    "DescribeExportTasks": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeExportTasks.html",
      "description": "Grants permission to describe one or more export instance tasks",
      "accessLevel": "List"
    },
    "DescribeFastSnapshotRestores": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFastSnapshotRestores.html",
      "description": "Grants permission to describe the state of fast snapshot restores for snapshots",
      "accessLevel": "Read"
    },
    "DescribeFleetHistory": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFleetHistory.html",
      "description": "Grants permission to describe the events for an EC2 Fleet during a specified time",
      "accessLevel": "List"
    },
    "DescribeFleetInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFleetInstances.html",
      "description": "Grants permission to describe the running instances for an EC2 Fleet",
      "accessLevel": "List"
    },
    "DescribeFleets": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFleets.html",
      "description": "Grants permission to describe one or more EC2 Fleets",
      "accessLevel": "List"
    },
    "DescribeFlowLogs": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFlowLogs.html",
      "description": "Grants permission to describe one or more flow logs",
      "accessLevel": "List"
    },
    "DescribeFpgaImageAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFpgaImageAttribute.html",
      "description": "Grants permission to describe the attributes of an Amazon FPGA Image (AFI)",
      "accessLevel": "List"
    },
    "DescribeFpgaImages": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFpgaImages.html",
      "description": "Grants permission to describe one or more Amazon FPGA Images (AFIs)",
      "accessLevel": "List"
    },
    "DescribeHostReservationOfferings": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeHostReservationOfferings.html",
      "description": "Grants permission to describe the Dedicated Host Reservations that are available to purchase",
      "accessLevel": "List"
    },
    "DescribeHostReservations": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeHostReservations.html",
      "description": "Grants permission to describe the Dedicated Host Reservations that are associated with Dedicated Hosts in the AWS account",
      "accessLevel": "List"
    },
    "DescribeHosts": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeHosts.html",
      "description": "Grants permission to describe one or more Dedicated Hosts",
      "accessLevel": "List"
    },
    "DescribeIamInstanceProfileAssociations": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIamInstanceProfileAssociations.html",
      "description": "Grants permission to describe the IAM instance profile associations",
      "accessLevel": "List"
    },
    "DescribeIdFormat": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIdFormat.html",
      "description": "Grants permission to describe the ID format settings for resources",
      "accessLevel": "List"
    },
    "DescribeIdentityIdFormat": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIdentityIdFormat.html",
      "description": "Grants permission to describe the ID format settings for resources for an IAM user, IAM role, or root user",
      "accessLevel": "List"
    },
    "DescribeImageAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImageAttribute.html",
      "description": "Grants permission to describe an attribute of an Amazon Machine Image (AMI)",
      "accessLevel": "List"
    },
    "DescribeImages": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html",
      "description": "Grants permission to describe one or more images (AMIs, AKIs, and ARIs)",
      "accessLevel": "List"
    },
    "DescribeImportImageTasks": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImportImageTasks.html",
      "description": "Grants permission to describe import virtual machine or import snapshot tasks",
      "accessLevel": "List"
    },
    "DescribeImportSnapshotTasks": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImportSnapshotTasks.html",
      "description": "Grants permission to describe import snapshot tasks",
      "accessLevel": "List"
    },
    "DescribeInstanceAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceAttribute.html",
      "description": "Grants permission to describe the attributes of an instance",
      "accessLevel": "List"
    },
    "DescribeInstanceCreditSpecifications": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceCreditSpecifications.html",
      "description": "Grants permission to describe the credit option for CPU usage of one or more burstable performance instances",
      "accessLevel": "List"
    },
    "DescribeInstanceEventNotificationAttributes": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceEventNotificationAttributes.html",
      "description": "Grants permission to describe the set of tags to include in notifications about scheduled events for your instances",
      "accessLevel": "List"
    },
    "DescribeInstanceStatus": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceStatus.html",
      "description": "Grants permission to describe the status of one or more instances",
      "accessLevel": "List"
    },
    "DescribeInstanceTypeOfferings": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTypeOfferings.html",
      "description": "Grants permission to describe the set of instance types that are offered in a location",
      "accessLevel": "List"
    },
    "DescribeInstanceTypes": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTypes.html",
      "description": "Grants permission to describe the details of instance types that are offered in a location",
      "accessLevel": "List"
    },
    "DescribeInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html",
      "description": "Grants permission to describe one or more instances",
      "accessLevel": "List"
    },
    "DescribeInternetGateways": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInternetGateways.html",
      "description": "Grants permission to describe one or more internet gateways",
      "accessLevel": "List"
    },
    "DescribeKeyPairs": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeKeyPairs.html",
      "description": "Grants permission to describe one or more key pairs",
      "accessLevel": "List"
    },
    "DescribeLaunchTemplateVersions": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplateVersions.html",
      "description": "Grants permission to describe one or more launch template versions",
      "accessLevel": "List"
    },
    "DescribeLaunchTemplates": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplates.html",
      "description": "Grants permission to describe one or more launch templates",
      "accessLevel": "List"
    },
    "DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations.html",
      "description": "Grants permission to describe the associations between virtual interface groups and local gateway route tables",
      "accessLevel": "List"
    },
    "DescribeLocalGatewayRouteTableVpcAssociations": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayRouteTableVpcAssociations.html",
      "description": "Grants permission to describe an association between VPCs and local gateway route tables",
      "accessLevel": "List"
    },
    "DescribeLocalGatewayRouteTables": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayRouteTables.html",
      "description": "Grants permission to describe one or more local gateway route tables",
      "accessLevel": "List"
    },
    "DescribeLocalGatewayVirtualInterfaceGroups": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayVirtualInterfaceGroups.html",
      "description": "Grants permission to describe local gateway virtual interface groups",
      "accessLevel": "List"
    },
    "DescribeLocalGatewayVirtualInterfaces": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayVirtualInterfaces.html",
      "description": "Grants permission to describe local gateway virtual interfaces",
      "accessLevel": "List"
    },
    "DescribeLocalGateways": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGateways.html",
      "description": "Grants permission to describe one or more local gateways",
      "accessLevel": "List"
    },
    "DescribeManagedPrefixLists": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeManagedPrefixLists.html",
      "description": "Grants permission to describe your managed prefix lists and any AWS-managed prefix lists",
      "accessLevel": "List"
    },
    "DescribeMovingAddresses": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeMovingAddresses.html",
      "description": "Grants permission to describe Elastic IP addresses that are being moved to the EC2-VPC platform",
      "accessLevel": "List"
    },
    "DescribeNatGateways": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNatGateways.html",
      "description": "Grants permission to describe one or more NAT gateways",
      "accessLevel": "List"
    },
    "DescribeNetworkAcls": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkAcls.html",
      "description": "Grants permission to describe one or more network ACLs",
      "accessLevel": "List"
    },
    "DescribeNetworkInterfaceAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInterfaceAttribute.html",
      "description": "Grants permission to describe a network interface attribute",
      "accessLevel": "List"
    },
    "DescribeNetworkInterfacePermissions": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInterfacePermissions.html",
      "description": "Grants permission to describe the permissions that are associated with a network interface",
      "accessLevel": "List"
    },
    "DescribeNetworkInterfaces": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInterfaces.html",
      "description": "Grants permission to describe one or more network interfaces",
      "accessLevel": "List"
    },
    "DescribePlacementGroups": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePlacementGroups.html",
      "description": "Grants permission to describe one or more placement groups",
      "accessLevel": "List"
    },
    "DescribePrefixLists": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePrefixLists.html",
      "description": "Grants permission to describe available AWS services in a prefix list format",
      "accessLevel": "List"
    },
    "DescribePrincipalIdFormat": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePrincipalIdFormat.html",
      "description": "Grants permission to describe the ID format settings for the root user and all IAM roles and IAM users that have explicitly specified a longer ID (17-character ID) preference",
      "accessLevel": "List"
    },
    "DescribePublicIpv4Pools": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePublicIpv4Pools.html",
      "description": "Grants permission to describe one or more IPv4 address pools",
      "accessLevel": "List"
    },
    "DescribeRegions": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRegions.html",
      "description": "Grants permission to describe one or more AWS Regions that are currently available in your account",
      "accessLevel": "List"
    },
    "DescribeReservedInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstances.html",
      "description": "Grants permission to describe one or more purchased Reserved Instances in your account",
      "accessLevel": "List"
    },
    "DescribeReservedInstancesListings": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesListings.html",
      "description": "Grants permission to describe your account's Reserved Instance listings in the Reserved Instance Marketplace",
      "accessLevel": "List"
    },
    "DescribeReservedInstancesModifications": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesModifications.html",
      "description": "Grants permission to describe the modifications made to one or more Reserved Instances",
      "accessLevel": "List"
    },
    "DescribeReservedInstancesOfferings": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesOfferings.html",
      "description": "Grants permission to describe the Reserved Instance offerings that are available for purchase",
      "accessLevel": "List"
    },
    "DescribeRouteTables": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRouteTables.html",
      "description": "Grants permission to describe one or more route tables",
      "accessLevel": "List"
    },
    "DescribeScheduledInstanceAvailability": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeScheduledInstanceAvailability.html",
      "description": "Grants permission to find available schedules for Scheduled Instances",
      "accessLevel": "Read"
    },
    "DescribeScheduledInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeScheduledInstances.html",
      "description": "Grants permission to describe one or more Scheduled Instances in your account",
      "accessLevel": "Read"
    },
    "DescribeSecurityGroupReferences": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroupReferences.html",
      "description": "Grants permission to describe the VPCs on the other side of a VPC peering connection that are referencing specified VPC security groups",
      "accessLevel": "List"
    },
    "DescribeSecurityGroups": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroups.html",
      "description": "Grants permission to describe one or more security groups",
      "accessLevel": "List"
    },
    "DescribeSnapshotAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshotAttribute.html",
      "description": "Grants permission to describe an attribute of a snapshot",
      "accessLevel": "List"
    },
    "DescribeSnapshots": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html",
      "description": "Grants permission to describe one or more EBS snapshots",
      "accessLevel": "List"
    },
    "DescribeSpotDatafeedSubscription": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotDatafeedSubscription.html",
      "description": "Grants permission to describe the data feed for Spot Instances",
      "accessLevel": "List"
    },
    "DescribeSpotFleetInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetInstances.html",
      "description": "Grants permission to describe the running instances for a Spot Fleet",
      "accessLevel": "List"
    },
    "DescribeSpotFleetRequestHistory": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetRequestHistory.html",
      "description": "Grants permission to describe the events for a Spot Fleet request during a specified time",
      "accessLevel": "List"
    },
    "DescribeSpotFleetRequests": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetRequests.html",
      "description": "Grants permission to describe one or more Spot Fleet requests",
      "accessLevel": "List"
    },
    "DescribeSpotInstanceRequests": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotInstanceRequests.html",
      "description": "Grants permission to describe one or more Spot Instance requests",
      "accessLevel": "List"
    },
    "DescribeSpotPriceHistory": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotPriceHistory.html",
      "description": "Grants permission to describe the Spot Instance price history",
      "accessLevel": "List"
    },
    "DescribeStaleSecurityGroups": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeStaleSecurityGroups.html",
      "description": "Grants permission to describe the stale security group rules for security groups in a specified VPC",
      "accessLevel": "List"
    },
    "DescribeSubnets": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSubnets.html",
      "description": "Grants permission to describe one or more subnets",
      "accessLevel": "List"
    },
    "DescribeTags": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTags.html",
      "description": "Grants permission to describe one or more tags for an Amazon EC2 resource",
      "accessLevel": "Read"
    },
    "DescribeTrafficMirrorFilters": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTrafficMirrorFilters.html",
      "description": "Grants permission to describe one or more traffic mirror filters",
      "accessLevel": "List"
    },
    "DescribeTrafficMirrorSessions": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTrafficMirrorSessions.html",
      "description": "Grants permission to describe one or more traffic mirror sessions",
      "accessLevel": "List"
    },
    "DescribeTrafficMirrorTargets": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTrafficMirrorTargets.html",
      "description": "Grants permission to describe one or more traffic mirror targets",
      "accessLevel": "List"
    },
    "DescribeTransitGatewayAttachments": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayAttachments.html",
      "description": "Grants permission to describe one or more attachments between resources and transit gateways",
      "accessLevel": "List"
    },
    "DescribeTransitGatewayMulticastDomains": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayMulticastDomains.html",
      "description": "Grants permission to describe one or more transit gateway multicast domains",
      "accessLevel": "List"
    },
    "DescribeTransitGatewayPeeringAttachments": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayPeeringAttachments.html",
      "description": "Grants permission to describe one or more transit gateway peering attachments",
      "accessLevel": "List"
    },
    "DescribeTransitGatewayRouteTables": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayRouteTables.html",
      "description": "Grants permission to describe one or more transit gateway route tables",
      "accessLevel": "List"
    },
    "DescribeTransitGatewayVpcAttachments": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayVpcAttachments.html",
      "description": "Grants permission to describe one or more VPC attachments on a transit gateway",
      "accessLevel": "List"
    },
    "DescribeTransitGateways": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGateways.html",
      "description": "Grants permission to describe one or more transit gateways",
      "accessLevel": "List"
    },
    "DescribeVolumeAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumeAttribute.html",
      "description": "Grants permission to describe an attribute of an EBS volume",
      "accessLevel": "List"
    },
    "DescribeVolumeStatus": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumeStatus.html",
      "description": "Grants permission to describe the status of one or more EBS volumes",
      "accessLevel": "List"
    },
    "DescribeVolumes": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumes.html",
      "description": "Grants permission to describe one or more EBS volumes",
      "accessLevel": "List"
    },
    "DescribeVolumesModifications": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumesModifications.html",
      "description": "Grants permission to describe the current modification status of one or more EBS volumes",
      "accessLevel": "Read"
    },
    "DescribeVpcAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcAttribute.html",
      "description": "Grants permission to describe an attribute of a VPC",
      "accessLevel": "List"
    },
    "DescribeVpcClassicLink": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcClassicLink.html",
      "description": "Grants permission to describe the ClassicLink status of one or more VPCs",
      "accessLevel": "List"
    },
    "DescribeVpcClassicLinkDnsSupport": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcClassicLinkDnsSupport.html",
      "description": "Grants permission to describe the ClassicLink DNS support status of one or more VPCs",
      "accessLevel": "List"
    },
    "DescribeVpcEndpointConnectionNotifications": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointConnectionNotifications.html",
      "description": "Grants permission to describe the connection notifications for VPC endpoints and VPC endpoint services",
      "accessLevel": "List"
    },
    "DescribeVpcEndpointConnections": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointConnections.html",
      "description": "Grants permission to describe the VPC endpoint connections to your VPC endpoint services",
      "accessLevel": "List"
    },
    "DescribeVpcEndpointServiceConfigurations": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointServiceConfigurations.html",
      "description": "Grants permission to describe VPC endpoint service configurations (your services)",
      "accessLevel": "List"
    },
    "DescribeVpcEndpointServicePermissions": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointServicePermissions.html",
      "description": "Grants permission to describe the principals (service consumers) that are permitted to discover your VPC endpoint service",
      "accessLevel": "List"
    },
    "DescribeVpcEndpointServices": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointServices.html",
      "description": "Grants permission to describe all supported AWS services that can be specified when creating a VPC endpoint",
      "accessLevel": "List"
    },
    "DescribeVpcEndpoints": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpoints.html",
      "description": "Grants permission to describe one or more VPC endpoints",
      "accessLevel": "List"
    },
    "DescribeVpcPeeringConnections": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcPeeringConnections.html",
      "description": "Grants permission to describe one or more VPC peering connections",
      "accessLevel": "List"
    },
    "DescribeVpcs": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcs.html",
      "description": "Grants permission to describe one or more VPCs",
      "accessLevel": "List"
    },
    "DescribeVpnConnections": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html",
      "description": "Grants permission to describe one or more VPN connections",
      "accessLevel": "Read"
    },
    "DescribeVpnGateways": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnGateways.html",
      "description": "Grants permission to describe one or more virtual private gateways",
      "accessLevel": "List"
    },
    "DetachClassicLinkVpc": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachClassicLinkVpc.html",
      "description": "Grants permission to unlink (detach) a linked EC2-Classic instance from a VPC",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        },
        "vpc": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "DetachInternetGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html",
      "description": "Grants permission to detach an internet gateway from a VPC",
      "accessLevel": "Write"
    },
    "DetachNetworkInterface": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachNetworkInterface.html",
      "description": "Grants permission to detach a network interface from an instance",
      "accessLevel": "Write"
    },
    "DetachVolume": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachVolume.html",
      "description": "Grants permission to detach an EBS volume from an instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        },
        "volume": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:Encrypted",
            "ec2:ParentSnapshot",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:VolumeIops",
            "ec2:VolumeSize",
            "ec2:VolumeType"
          ]
        }
      }
    },
    "DetachVpnGateway": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachVpnGateway.html",
      "description": "Grants permission to detach a virtual private gateway from a VPC",
      "accessLevel": "Write"
    },
    "DisableEbsEncryptionByDefault": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableEbsEncryptionByDefault.html",
      "description": "Grants permission to disable EBS encryption by default for your account",
      "accessLevel": "Write"
    },
    "DisableFastSnapshotRestores": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableFastSnapshotRestores.html",
      "description": "Grants permission to disable fast snapshot restores for one or more snapshots in specified Availability Zones",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Owner",
            "ec2:ParentVolume",
            "ec2:Region",
            "ec2:AvailabilityZone",
            "ec2:SnapshotTime",
            "ec2:Encrypted",
            "ec2:VolumeSize",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DisableTransitGatewayRouteTablePropagation": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableTransitGatewayRouteTablePropagation.html",
      "description": "Grants permission to disable a resource attachment from propagating routes to the specified propagation route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DisableVgwRoutePropagation": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVgwRoutePropagation.html",
      "description": "Grants permission to disable a virtual private gateway from propagating routes to a specified route table of a VPC",
      "accessLevel": "Write"
    },
    "DisableVpcClassicLink": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVpcClassicLink.html",
      "description": "Grants permission to disable ClassicLink for a VPC",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "DisableVpcClassicLinkDnsSupport": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVpcClassicLinkDnsSupport.html",
      "description": "Grants permission to disable ClassicLink DNS support for a VPC",
      "accessLevel": "Write"
    },
    "DisassociateAddress": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateAddress.html",
      "description": "Grants permission to disassociate an Elastic IP address from an instance or network interface",
      "accessLevel": "Write"
    },
    "DisassociateClientVpnTargetNetwork": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateClientVpnTargetNetwork.html",
      "description": "Grants permission to disassociate a target network from a Client VPN endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "client-vpn-endpoint": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DisassociateIamInstanceProfile": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html",
      "description": "Grants permission to disassociate an IAM instance profile from a running or stopped instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "DisassociateRouteTable": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateRouteTable.html",
      "description": "Grants permission to disassociate a subnet from a route table",
      "accessLevel": "Write"
    },
    "DisassociateSubnetCidrBlock": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateSubnetCidrBlock.html",
      "description": "Grants permission to disassociate a CIDR block from a subnet",
      "accessLevel": "Write"
    },
    "DisassociateTransitGatewayMulticastDomain": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateTransitGatewayMulticastDomain.html",
      "description": "Grants permission to disassociate one or more subnets from a transit gateway multicast domain",
      "accessLevel": "Write",
      "resourceTypes": {
        "subnet": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-multicast-domain": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DisassociateTransitGatewayRouteTable": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateTransitGatewayRouteTable.html",
      "description": "Grants permission to disassociate a resource attachment from a transit gateway route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "DisassociateVpcCidrBlock": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateVpcCidrBlock.html",
      "description": "Grants permission to disassociate a CIDR block from a VPC",
      "accessLevel": "Write"
    },
    "EnableEbsEncryptionByDefault": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableEbsEncryptionByDefault.html",
      "description": "Grants permission to enable EBS encryption by default for your account",
      "accessLevel": "Write"
    },
    "EnableFastSnapshotRestores": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableFastSnapshotRestores.html",
      "description": "Grants permission to enable fast snapshot restores for one or more snapshots in specified Availability Zones",
      "accessLevel": "Write",
      "resourceTypes": {
        "snapshot": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Owner",
            "ec2:ParentVolume",
            "ec2:Region",
            "ec2:AvailabilityZone",
            "ec2:SnapshotTime",
            "ec2:Encrypted",
            "ec2:VolumeSize",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "EnableTransitGatewayRouteTablePropagation": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableTransitGatewayRouteTablePropagation.html",
      "description": "Grants permission to enable an attachment to propagate routes to a propagation route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "EnableVgwRoutePropagation": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVgwRoutePropagation.html",
      "description": "Grants permission to enable a virtual private gateway to propagate routes to a VPC route table",
      "accessLevel": "Write"
    },
    "EnableVolumeIO": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVolumeIO.html",
      "description": "Grants permission to enable I/O operations for a volume that had I/O operations disabled",
      "accessLevel": "Write"
    },
    "EnableVpcClassicLink": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVpcClassicLink.html",
      "description": "Grants permission to enable a VPC for ClassicLink",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "EnableVpcClassicLinkDnsSupport": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVpcClassicLinkDnsSupport.html",
      "description": "Grants permission to enable a VPC to support DNS hostname resolution for ClassicLink",
      "accessLevel": "Write"
    },
    "ExportClientVpnClientCertificateRevocationList": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportClientVpnClientCertificateRevocationList.html",
      "description": "Grants permission to download the client certificate revocation list for a Client VPN endpoint",
      "accessLevel": "List"
    },
    "ExportClientVpnClientConfiguration": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportClientVpnClientConfiguration.html",
      "description": "Grants permission to download the contents of the Client VPN endpoint configuration file for a Client VPN endpoint",
      "accessLevel": "List"
    },
    "ExportImage": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportImage.html",
      "description": "Grants permission to export an Amazon Machine Image (AMI) to a VM file",
      "accessLevel": "Write"
    },
    "ExportTransitGatewayRoutes": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ExportTransitGatewayRoutes.html",
      "description": "Grants permission to export routes from a transit gateway route table to an Amazon S3 bucket",
      "accessLevel": "Write"
    },
    "GetCapacityReservationUsage": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetCapacityReservationUsage.html",
      "description": "Grants permission to get usage information about a Capacity Reservation",
      "accessLevel": "Read"
    },
    "GetCoipPoolUsage": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetCoipPoolUsage.html",
      "description": "Grants permission to describe the allocations from the specified customer-owned address pool",
      "accessLevel": "Read"
    },
    "GetConsoleOutput": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetConsoleOutput.html",
      "description": "Grants permission to get the console output for an instance",
      "accessLevel": "Read"
    },
    "GetConsoleScreenshot": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetConsoleScreenshot.html",
      "description": "Grants permission to retrieve a JPG-format screenshot of a running instance",
      "accessLevel": "Read",
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "GetDefaultCreditSpecification": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetDefaultCreditSpecification.html",
      "description": "Grants permission to get the default credit option for CPU usage of a burstable performance instance family",
      "accessLevel": "Read"
    },
    "GetEbsDefaultKmsKeyId": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetEbsDefaultKmsKeyId.html",
      "description": "Grants permission to get the ID of the default customer master key (CMK) for EBS encryption by default",
      "accessLevel": "Read"
    },
    "GetEbsEncryptionByDefault": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetEbsEncryptionByDefault.html",
      "description": "Grants permission to describe whether EBS encryption by default is enabled for your account",
      "accessLevel": "Read"
    },
    "GetHostReservationPurchasePreview": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetHostReservationPurchasePreview.html",
      "description": "Grants permission to preview a reservation purchase with configurations that match those of a Dedicated Host",
      "accessLevel": "Read"
    },
    "GetLaunchTemplateData": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetLaunchTemplateData.html",
      "description": "Grants permission to get the configuration data of the specified instance for use with a new launch template or launch template version",
      "accessLevel": "Read"
    },
    "GetManagedPrefixListAssociations": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetManagedPrefixListAssociations.html",
      "description": "Grants permission to get information about the resources that are associated with the specified managed prefix list",
      "accessLevel": "Read"
    },
    "GetManagedPrefixListEntries": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetManagedPrefixListEntries.html",
      "description": "Grants permission to get information about the entries for a specified managed prefix list",
      "accessLevel": "Read"
    },
    "GetPasswordData": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html",
      "description": "Grants permission to retrieve the encrypted administrator password for a running Windows instance",
      "accessLevel": "Read"
    },
    "GetReservedInstancesExchangeQuote": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetReservedInstancesExchangeQuote.html",
      "description": "Grants permission to return a quote and exchange information for exchanging one or more Convertible Reserved Instances for a new Convertible Reserved Instance",
      "accessLevel": "Read"
    },
    "GetTransitGatewayAttachmentPropagations": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayAttachmentPropagations.html",
      "description": "Grants permission to list the route tables to which a resource attachment propagates routes",
      "accessLevel": "List"
    },
    "GetTransitGatewayMulticastDomainAssociations": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayMulticastDomainAssociations.html",
      "description": "Grants permission to get information about the associations for a transit gateway multicast domain",
      "accessLevel": "List"
    },
    "GetTransitGatewayRouteTableAssociations": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayRouteTableAssociations.html",
      "description": "Grants permission to get information about associations for a transit gateway route table",
      "accessLevel": "List"
    },
    "GetTransitGatewayRouteTablePropagations": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetTransitGatewayRouteTablePropagations.html",
      "description": "Grants permission to get information about the route table propagations for a transit gateway route table",
      "accessLevel": "List"
    },
    "ImportClientVpnClientCertificateRevocationList": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportClientVpnClientCertificateRevocationList.html",
      "description": "Grants permission to upload a client certificate revocation list to a Client VPN endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "client-vpn-endpoint": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "ImportImage": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html",
      "description": "Grants permission to import single or multi-volume disk images or EBS snapshots into an Amazon Machine Image (AMI)",
      "accessLevel": "Write"
    },
    "ImportInstance": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html",
      "description": "Grants permission to create an import instance task using metadata from a disk image",
      "accessLevel": "Write"
    },
    "ImportKeyPair": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html",
      "description": "Grants permission to import a public key from an RSA key pair that was created with a third-party tool",
      "accessLevel": "Write"
    },
    "ImportSnapshot": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportSnapshot.html",
      "description": "Grants permission to import a disk into an EBS snapshot",
      "accessLevel": "Write"
    },
    "ImportVolume": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportVolume.html",
      "description": "Grants permission to create an import volume task using metadata from a disk image",
      "accessLevel": "Write"
    },
    "ModifyCapacityReservation": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyCapacityReservation.html",
      "description": "Grants permission to modify a Capacity Reservation's capacity and the conditions under which it is to be released",
      "accessLevel": "Write",
      "resourceTypes": {
        "capacity-reservation": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "ModifyClientVpnEndpoint": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyClientVpnEndpoint.html",
      "description": "Grants permission to modify a Client VPN endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "client-vpn-endpoint": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "ModifyDefaultCreditSpecification": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyDefaultCreditSpecification.html",
      "description": "Grants permission to change the account level default credit option for CPU usage of burstable performance instances",
      "accessLevel": "Write"
    },
    "ModifyEbsDefaultKmsKeyId": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyEbsDefaultKmsKeyId.html",
      "description": "Grants permission to change the default customer master key (CMK) for EBS encryption by default for your account",
      "accessLevel": "Write"
    },
    "ModifyFleet": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyFleet.html",
      "description": "Grants permission to modify an EC2 Fleet",
      "accessLevel": "Write"
    },
    "ModifyFpgaImageAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyFpgaImageAttribute.html",
      "description": "Grants permission to modify an attribute of an Amazon FPGA Image (AFI)",
      "accessLevel": "Write"
    },
    "ModifyHosts": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyHosts.html",
      "description": "Grants permission to modify a Dedicated Host",
      "accessLevel": "Write"
    },
    "ModifyIdFormat": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIdFormat.html",
      "description": "Grants permission to modify the ID format for a resource",
      "accessLevel": "Write"
    },
    "ModifyIdentityIdFormat": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIdentityIdFormat.html",
      "description": "Grants permission to modify the ID format of a resource for a specific principal in your account",
      "accessLevel": "Write"
    },
    "ModifyImageAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html",
      "description": "Grants permission to modify an attribute of an Amazon Machine Image (AMI)",
      "accessLevel": "Write"
    },
    "ModifyInstanceAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html",
      "description": "Grants permission to modify an attribute of an instance",
      "accessLevel": "Write"
    },
    "ModifyInstanceCapacityReservationAttributes": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCapacityReservationAttributes.html",
      "description": "Grants permission to modify the Capacity Reservation settings for a stopped instance",
      "accessLevel": "Write"
    },
    "ModifyInstanceCreditSpecification": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCreditSpecification.html",
      "description": "Grants permission to modify the credit option for CPU usage on an instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true
        }
      }
    },
    "ModifyInstanceEventStartTime": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceEventStartTime.html",
      "description": "Grants permission to modify the start time for a scheduled EC2 instance event",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "ec2:Region"
          ]
        }
      }
    },
    "ModifyInstanceMetadataOptions": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceMetadataOptions.html",
      "description": "Grants permission to modify the metadata options for an instance",
      "accessLevel": "Write"
    },
    "ModifyInstancePlacement": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstancePlacement.html",
      "description": "Grants permission to modify the placement attributes for an instance",
      "accessLevel": "Write"
    },
    "ModifyLaunchTemplate": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyLaunchTemplate.html",
      "description": "Grants permission to modify a launch template",
      "accessLevel": "Write",
      "resourceTypes": {
        "launch-template": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "ModifyManagedPrefixList": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyManagedPrefixList.html",
      "description": "Grants permission to modify a managed prefix list",
      "accessLevel": "Write",
      "resourceTypes": {
        "prefix-list": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "ModifyNetworkInterfaceAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyNetworkInterfaceAttribute.html",
      "description": "Grants permission to modify an attribute of a network interface",
      "accessLevel": "Write"
    },
    "ModifyReservedInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyReservedInstances.html",
      "description": "Grants permission to modify attributes of one or more Reserved Instances",
      "accessLevel": "Write"
    },
    "ModifySnapshotAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotAttribute.html",
      "description": "Grants permission to add or remove permission settings for a snapshot",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "snapshot": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Owner",
            "ec2:ParentVolume",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:SnapshotTime",
            "ec2:VolumeSize"
          ]
        }
      }
    },
    "ModifySpotFleetRequest": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySpotFleetRequest.html",
      "description": "Grants permission to modify a Spot Fleet request",
      "accessLevel": "Write"
    },
    "ModifySubnetAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySubnetAttribute.html",
      "description": "Grants permission to modify an attribute of a subnet",
      "accessLevel": "Write"
    },
    "ModifyTrafficMirrorFilterNetworkServices": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorFilterNetworkServices.html",
      "description": "Grants permission to allow or restrict mirroring network services",
      "accessLevel": "Write",
      "resourceTypes": {
        "traffic-mirror-filter": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "ModifyTrafficMirrorFilterRule": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorFilterRule.html",
      "description": "Grants permission to modify a traffic mirror rule",
      "accessLevel": "Write",
      "resourceTypes": {
        "traffic-mirror-filter": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "traffic-mirror-filter-rule": {
          "required": true,
          "conditions": [
            "ec2:Region"
          ]
        }
      }
    },
    "ModifyTrafficMirrorSession": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorSession.html",
      "description": "Grants permission to modify a traffic mirror session",
      "accessLevel": "Write",
      "resourceTypes": {
        "traffic-mirror-session": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "traffic-mirror-filter": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "traffic-mirror-target": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "ModifyTransitGatewayVpcAttachment": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTransitGatewayVpcAttachment.html",
      "description": "Grants permission to modify a VPC attachment on a transit gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "subnet": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "ModifyVolume": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVolume.html",
      "description": "Grants permission to modify the parameters of an EBS volume",
      "accessLevel": "Write"
    },
    "ModifyVolumeAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVolumeAttribute.html",
      "description": "Grants permission to modify an attribute of a volume",
      "accessLevel": "Write"
    },
    "ModifyVpcAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcAttribute.html",
      "description": "Grants permission to modify an attribute of a VPC",
      "accessLevel": "Write"
    },
    "ModifyVpcEndpoint": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpoint.html",
      "description": "Grants permission to modify an attribute of a VPC endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc-endpoint": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "route-table": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "security-group": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "subnet": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "ModifyVpcEndpointConnectionNotification": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpointConnectionNotification.html",
      "description": "Grants permission to modify a connection notification for a VPC endpoint or VPC endpoint service",
      "accessLevel": "Write"
    },
    "ModifyVpcEndpointServiceConfiguration": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpointServiceConfiguration.html",
      "description": "Grants permission to modify the attributes of a VPC endpoint service configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc-endpoint-service": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:VpceServicePrivateDnsName",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "ModifyVpcEndpointServicePermissions": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpointServicePermissions.html",
      "description": "Grants permission to modify the permissions for a VPC endpoint service",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "vpc-endpoint-service": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "ModifyVpcPeeringConnectionOptions": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcPeeringConnectionOptions.html",
      "description": "Grants permission to modify the VPC peering connection options on one side of a VPC peering connection",
      "accessLevel": "Write"
    },
    "ModifyVpcTenancy": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcTenancy.html",
      "description": "Grants permission to modify the instance tenancy attribute of a VPC",
      "accessLevel": "Write"
    },
    "ModifyVpnConnection": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpnConnection.html",
      "description": "Grants permission to modify the target gateway of a Site-to-Site VPN connection",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpn-connection": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:GatewayType"
          ]
        }
      }
    },
    "ModifyVpnTunnelCertificate": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpnTunnelCertificate",
      "description": "Grants permission to modify the certificate for a Site-to-Site VPN connection",
      "accessLevel": "Write"
    },
    "ModifyVpnTunnelOptions": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpnTunnelOptions.html",
      "description": "Grants permission to modify the options for a Site-to-Site VPN connection",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpn-connection": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:AuthenticationType",
            "ec2:DPDTimeoutSeconds",
            "ec2:IKEVersions",
            "ec2:InsideTunnelCidr",
            "ec2:Phase1DHGroupNumbers",
            "ec2:Phase2DHGroupNumbers",
            "ec2:Phase1EncryptionAlgorithms",
            "ec2:Phase2EncryptionAlgorithms",
            "ec2:Phase1IntegrityAlgorithms",
            "ec2:Phase2IntegrityAlgorithms",
            "ec2:Phase1LifetimeSeconds",
            "ec2:Phase2LifetimeSeconds",
            "ec2:PresharedKeys",
            "ec2:RekeyFuzzPercentage",
            "ec2:RekeyMarginTimeSeconds",
            "ec2:RoutingType"
          ]
        }
      }
    },
    "MonitorInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_MonitorInstances.html",
      "description": "Grants permission to enable detailed monitoring for a running instance",
      "accessLevel": "Write"
    },
    "MoveAddressToVpc": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_MoveAddressToVpc.html",
      "description": "Grants permission to move an Elastic IP address from the EC2-Classic platform to the EC2-VPC platform",
      "accessLevel": "Write"
    },
    "ProvisionByoipCidr": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ProvisionByoipCidr.html",
      "description": "Grants permission to provision an address range for use in AWS through bring your own IP addresses (BYOIP), and to create a corresponding address pool",
      "accessLevel": "Write"
    },
    "PurchaseHostReservation": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseHostReservation.html",
      "description": "Grants permission to purchase a reservation with configurations that match those of a Dedicated Host",
      "accessLevel": "Write"
    },
    "PurchaseReservedInstancesOffering": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseReservedInstancesOffering.html",
      "description": "Grants permission to purchase a Reserved Instance offering",
      "accessLevel": "Write"
    },
    "PurchaseScheduledInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseScheduledInstances.html",
      "description": "Grants permission to purchase one or more Scheduled Instances with a specified schedule",
      "accessLevel": "Write"
    },
    "RebootInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RebootInstances.html",
      "description": "Grants permission to request a reboot of one or more instances",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "RegisterImage": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterImage.html",
      "description": "Grants permission to register an Amazon Machine Image (AMI)",
      "accessLevel": "Write"
    },
    "RegisterInstanceEventNotificationAttributes": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterInstanceEventNotificationAttributes.html",
      "description": "Grants permission to add tags to the set of tags to include in notifications about scheduled events for your instances",
      "accessLevel": "Write"
    },
    "RegisterTransitGatewayMulticastGroupMembers": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterTransitGatewayMulticastGroupMembers.html",
      "description": "Grants permission to register one or more network interfaces as a member of a group IP address in a transit gateway multicast domain",
      "accessLevel": "Write",
      "resourceTypes": {
        "network-interface": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-multicast-domain": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "RegisterTransitGatewayMulticastGroupSources": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterTransitGatewayMulticastGroupSources.html",
      "description": "Grants permission to register one or more network interfaces as a source of a group IP address in a transit gateway multicast domain",
      "accessLevel": "Write",
      "resourceTypes": {
        "network-interface": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-multicast-domain": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "RejectTransitGatewayPeeringAttachment": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectTransitGatewayPeeringAttachment.html",
      "description": "Grants permission to reject a transit gateway peering attachment request",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "RejectTransitGatewayVpcAttachment": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectTransitGatewayVpcAttachment.html",
      "description": "Grants permission to reject a request to attach a VPC to a transit gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-attachment": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "RejectVpcEndpointConnections": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectVpcEndpointConnections.html",
      "description": "Grants permission to reject one or more VPC endpoint connection requests to a VPC endpoint service",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc-endpoint-service": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "RejectVpcPeeringConnection": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectVpcPeeringConnection.html",
      "description": "Grants permission to reject a VPC peering connection request",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc-peering-connection": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AccepterVpc",
            "ec2:Region",
            "ec2:RequesterVpc",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "ReleaseAddress": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseAddress.html",
      "description": "Grants permission to release an Elastic IP address",
      "accessLevel": "Write"
    },
    "ReleaseHosts": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseHosts.html",
      "description": "Grants permission to release one or more On-Demand Dedicated Hosts",
      "accessLevel": "Write"
    },
    "ReplaceIamInstanceProfileAssociation": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceIamInstanceProfileAssociation.html",
      "description": "Grants permission to replace an IAM instance profile for an instance",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "ReplaceNetworkAclAssociation": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceNetworkAclAssociation.html",
      "description": "Grants permission to change which network ACL a subnet is associated with",
      "accessLevel": "Write"
    },
    "ReplaceNetworkAclEntry": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceNetworkAclEntry.html",
      "description": "Grants permission to replace an entry (rule) in a network ACL",
      "accessLevel": "Write"
    },
    "ReplaceRoute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceRoute.html",
      "description": "Grants permission to replace a route within a route table in a VPC",
      "accessLevel": "Write",
      "resourceTypes": {
        "route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        }
      }
    },
    "ReplaceRouteTableAssociation": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceRouteTableAssociation.html",
      "description": "Grants permission to change the route table that is associated with a subnet",
      "accessLevel": "Write"
    },
    "ReplaceTransitGatewayRoute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceTransitGatewayRoute.html",
      "description": "Grants permission to replace a route in a transit gateway route table",
      "accessLevel": "Write",
      "resourceTypes": {
        "transit-gateway-route-table": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "transit-gateway-attachment": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "ReportInstanceStatus": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReportInstanceStatus.html",
      "description": "Grants permission to submit feedback about the status of an instance",
      "accessLevel": "Write"
    },
    "RequestSpotFleet": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html",
      "description": "Grants permission to create a Spot Fleet request",
      "accessLevel": "Write"
    },
    "RequestSpotInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html",
      "description": "Grants permission to create a Spot Instance request",
      "accessLevel": "Write"
    },
    "ResetEbsDefaultKmsKeyId": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetEbsDefaultKmsKeyId.html",
      "description": "Grants permission to reset the default customer master key (CMK) for EBS encryption for your account to use the AWS-managed CMK for EBS",
      "accessLevel": "Write"
    },
    "ResetFpgaImageAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetFpgaImageAttribute.html",
      "description": "Grants permission to reset an attribute of an Amazon FPGA Image (AFI) to its default value",
      "accessLevel": "Write"
    },
    "ResetImageAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetImageAttribute.html",
      "description": "Grants permission to reset an attribute of an Amazon Machine Image (AMI) to its default value",
      "accessLevel": "Write"
    },
    "ResetInstanceAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetInstanceAttribute.html",
      "description": "Grants permission to reset an attribute of an instance to its default value",
      "accessLevel": "Write"
    },
    "ResetNetworkInterfaceAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetNetworkInterfaceAttribute.html",
      "description": "Grants permission to reset an attribute of a network interface",
      "accessLevel": "Write"
    },
    "ResetSnapshotAttribute": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetSnapshotAttribute.html",
      "description": "Grants permission to reset permission settings for a snapshot",
      "accessLevel": "Permissions management"
    },
    "RestoreAddressToClassic": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RestoreAddressToClassic.html",
      "description": "Grants permission to restore an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform",
      "accessLevel": "Write"
    },
    "RestoreManagedPrefixListVersion": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RestoreManagedPrefixListVersion.html",
      "description": "Grants permission to restore the entries from a previous version of a managed prefix list to a new version of the prefix list",
      "accessLevel": "Write",
      "resourceTypes": {
        "prefix-list": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "RevokeClientVpnIngress": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeClientVpnIngress.html",
      "description": "Grants permission to remove an inbound authorization rule from a Client VPN endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "client-vpn-endpoint": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "RevokeSecurityGroupEgress": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupEgress.html",
      "description": "Grants permission to remove one or more outbound rules from a VPC security group",
      "accessLevel": "Write",
      "resourceTypes": {
        "security-group": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        }
      }
    },
    "RevokeSecurityGroupIngress": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupIngress.html",
      "description": "Grants permission to remove one or more inbound rules from a security group",
      "accessLevel": "Write",
      "resourceTypes": {
        "security-group": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        }
      }
    },
    "RunInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html",
      "description": "Grants permission to launch one or more instances",
      "accessLevel": "Write",
      "resourceTypes": {
        "image": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:ImageType",
            "ec2:IsLaunchTemplateResource",
            "ec2:LaunchTemplate",
            "ec2:Owner",
            "ec2:Public",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType"
          ]
        },
        "instance": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:IsLaunchTemplateResource",
            "ec2:LaunchTemplate",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:RootDeviceType",
            "ec2:Tenancy",
            "ec2:MetadataHttpEndpoint",
            "ec2:MetadataHttpTokens",
            "ec2:MetadataHttpPutResponseHopLimit"
          ]
        },
        "network-interface": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/",
            "ec2:AvailabilityZone",
            "ec2:IsLaunchTemplateResource",
            "ec2:LaunchTemplate",
            "ec2:Region",
            "ec2:ResourceTag/",
            "ec2:Subnet",
            "ec2:Vpc",
            "ec2:AssociatePublicIpAddress"
          ]
        },
        "security-group": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:IsLaunchTemplateResource",
            "ec2:LaunchTemplate",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        },
        "subnet": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:IsLaunchTemplateResource",
            "ec2:LaunchTemplate",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        },
        "volume": {
          "required": true,
          "conditions": [
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:AvailabilityZone",
            "ec2:Encrypted",
            "ec2:IsLaunchTemplateResource",
            "ec2:LaunchTemplate",
            "ec2:ParentSnapshot",
            "ec2:Region",
            "ec2:VolumeIops",
            "ec2:VolumeSize",
            "ec2:VolumeType"
          ]
        },
        "capacity-reservation": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "aws:RequestTag/${TagKey}",
            "aws:TagKeys",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        },
        "elastic-gpu": {
          "required": false,
          "conditions": [
            "ec2:ElasticGpuType"
          ]
        },
        "elastic-inference": {
          "required": false
        },
        "key-pair": {
          "required": false,
          "conditions": [
            "ec2:IsLaunchTemplateResource",
            "ec2:LaunchTemplate",
            "ec2:Region"
          ]
        },
        "launch-template": {
          "required": false,
          "conditions": [
            "ec2:IsLaunchTemplateResource",
            "ec2:LaunchTemplate",
            "ec2:Region"
          ]
        },
        "placement-group": {
          "required": false,
          "conditions": [
            "ec2:IsLaunchTemplateResource",
            "ec2:LaunchTemplate",
            "ec2:PlacementGroupStrategy",
            "ec2:Region"
          ]
        },
        "snapshot": {
          "required": false,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:IsLaunchTemplateResource",
            "ec2:LaunchTemplate",
            "ec2:Owner",
            "ec2:ParentVolume",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:SnapshotTime",
            "ec2:VolumeSize"
          ]
        }
      }
    },
    "RunScheduledInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunScheduledInstances.html",
      "description": "Grants permission to launch one or more Scheduled Instances",
      "accessLevel": "Write"
    },
    "SearchLocalGatewayRoutes": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchLocalGatewayRoutes.html",
      "description": "Grants permission to search for routes in a local gateway route table",
      "accessLevel": "List"
    },
    "SearchTransitGatewayMulticastGroups": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html",
      "description": "Grants permission to search for groups, sources, and members in a transit gateway multicast domain",
      "accessLevel": "List"
    },
    "SearchTransitGatewayRoutes": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayRoutes.html",
      "description": "Grants permission to search for routes in a transit gateway route table",
      "accessLevel": "List"
    },
    "SendDiagnosticInterrupt": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SendDiagnosticInterrupt.html",
      "description": "Grants permission to send a diagnostic interrupt to an Amazon EC2 instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "StartInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartInstances.html",
      "description": "Grants permission to start a stopped instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "StartVpcEndpointServicePrivateDnsVerification": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartVpcEndpointServicePrivateDnsVerification.html",
      "description": "Grants permission to start the private DNS verification process for a VPC endpoint service",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpc-endpoint-service": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "StopInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StopInstances.html",
      "description": "Grants permission to stop an Amazon EBS-backed instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "TerminateClientVpnConnections": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateClientVpnConnections.html",
      "description": "Grants permission to terminate active Client VPN endpoint connections",
      "accessLevel": "Write",
      "resourceTypes": {
        "client-vpn-endpoint": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}"
          ]
        }
      }
    },
    "TerminateInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html",
      "description": "Grants permission to shut down one or more instances",
      "accessLevel": "Write",
      "resourceTypes": {
        "instance": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:AvailabilityZone",
            "ec2:EbsOptimized",
            "ec2:InstanceProfile",
            "ec2:InstanceType",
            "ec2:PlacementGroup",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:RootDeviceType",
            "ec2:Tenancy"
          ]
        }
      }
    },
    "UnassignIpv6Addresses": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnassignIpv6Addresses.html",
      "description": "Grants permission to unassign one or more IPv6 addresses from a network interface",
      "accessLevel": "Write"
    },
    "UnassignPrivateIpAddresses": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnassignPrivateIpAddresses.html",
      "description": "Grants permission to unassign one or more secondary private IP addresses from a network interface",
      "accessLevel": "Write"
    },
    "UnmonitorInstances": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnmonitorInstances.html",
      "description": "Grants permission to disable detailed monitoring for a running instance",
      "accessLevel": "Write"
    },
    "UpdateSecurityGroupRuleDescriptionsEgress": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UpdateSecurityGroupRuleDescriptionsEgress.html",
      "description": "Grants permission to update descriptions for one or more outbound rules in a VPC security group",
      "accessLevel": "Write",
      "resourceTypes": {
        "security-group": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        }
      }
    },
    "UpdateSecurityGroupRuleDescriptionsIngress": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UpdateSecurityGroupRuleDescriptionsIngress.html",
      "description": "Grants permission to update descriptions for one or more inbound rules in a security group",
      "accessLevel": "Write",
      "resourceTypes": {
        "security-group": {
          "required": true,
          "conditions": [
            "aws:ResourceTag/${TagKey}",
            "ec2:Region",
            "ec2:ResourceTag/${TagKey}",
            "ec2:Vpc"
          ]
        }
      }
    },
    "WithdrawByoipCidr": {
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html",
      "description": "Grants permission to stop advertising an address range that was provisioned for use in AWS through bring your own IP addresses (BYOIP)",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "capacity-reservation": {
      "name": "capacity-reservation",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:capacity-reservation/${CapacityReservationId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "carrier-gateway": {
      "name": "carrier-gateway",
      "url": "https://docs.aws.amazon.com/vpc/latest/userguide/Carrier_Gateway.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:carrier-gateway/${CarrierGatewayId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "client-vpn-endpoint": {
      "name": "client-vpn-endpoint",
      "url": "https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:client-vpn-endpoint/${ClientVpnEndpointId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "customer-gateway": {
      "name": "customer-gateway",
      "url": "https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:customer-gateway/${CustomerGatewayId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "dedicated-host": {
      "name": "dedicated-host",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:dedicated-host/${HostId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:AutoPlacement",
        "ec2:AvailabilityZone",
        "ec2:HostRecovery",
        "ec2:InstanceType",
        "ec2:Quantity",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "dhcp-options": {
      "name": "dhcp-options",
      "url": "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:dhcp-options/${DhcpOptionsId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "egress-only-internet-gateway": {
      "name": "egress-only-internet-gateway",
      "url": "https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:egress-only-internet-gateway/${EgressOnlyInternetGatewayId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "elastic-gpu": {
      "name": "elastic-gpu",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-gpus.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:elastic-gpu/${ElasticGpuId}",
      "conditionKeys": [
        "ec2:ElasticGpuType"
      ]
    },
    "elastic-inference": {
      "name": "elastic-inference",
      "url": "https://docs.aws.amazon.com/elastic-inference/latest/developerguide/what-is-ei.html",
      "arn": "arn:${Partition}:elastic-inference:${Region}:${Account}:elastic-inference-accelerator/${ElasticInferenceAcceleratorId}",
      "conditionKeys": []
    },
    "export-instance-task": {
      "name": "export-instance-task",
      "url": "https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:export-instance-task/${ExportTaskId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "fleet": {
      "name": "fleet",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:fleet/${FleetId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "fpga-image": {
      "name": "fpga-image",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format",
      "arn": "arn:${Partition}:ec2:${Region}::fpga-image/${FpgaImageId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Owner",
        "ec2:Public",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "image": {
      "name": "image",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",
      "arn": "arn:${Partition}:ec2:${Region}::image/${ImageId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:ImageType",
        "ec2:Owner",
        "ec2:Public",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}",
        "ec2:RootDeviceType"
      ]
    },
    "instance": {
      "name": "instance",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Instances.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:instance/${InstanceId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:AvailabilityZone",
        "ec2:EbsOptimized",
        "ec2:InstanceProfile",
        "ec2:InstanceType",
        "ec2:PlacementGroup",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}",
        "ec2:RootDeviceType",
        "ec2:Tenancy"
      ]
    },
    "internet-gateway": {
      "name": "internet-gateway",
      "url": "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:internet-gateway/${InternetGatewayId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "key-pair": {
      "name": "key-pair",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:key-pair/${KeyPairName}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "launch-template": {
      "name": "launch-template",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:launch-template/${LaunchTemplateId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "local-gateway": {
      "name": "local-gateway",
      "url": "https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:local-gateway/${LocalGatewayId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "local-gateway-route-table": {
      "name": "local-gateway-route-table",
      "url": "https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:local-gateway-route-table/${LocalGatewayRouteTableId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "local-gateway-route-table-virtual-interface-group-association": {
      "name": "local-gateway-route-table-virtual-interface-group-association",
      "url": "https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:local-gateway-route-table-virtual-interface-group-association/${LocalGatewayRouteTableVirtualInterfaceGroupAssociationId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "local-gateway-route-table-vpc-association": {
      "name": "local-gateway-route-table-vpc-association",
      "url": "https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:local-gateway-route-table-vpc-association/${LocalGatewayRouteTableVpcAssociationId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "local-gateway-virtual-interface": {
      "name": "local-gateway-virtual-interface",
      "url": "https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:local-gateway-virtual-interface/${LocalGatewayVirtualInterfaceId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "local-gateway-virtual-interface-group": {
      "name": "local-gateway-virtual-interface-group",
      "url": "https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:local-gateway-virtual-interface-group/${LocalGatewayVirtualInterfaceGroupId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "natgateway": {
      "name": "natgateway",
      "url": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:natgateway/${NatGatewayId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "network-acl": {
      "name": "network-acl",
      "url": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:network-acl/${NaclId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}",
        "ec2:Vpc"
      ]
    },
    "network-interface": {
      "name": "network-interface",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:network-interface/${NetworkInterfaceId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:AssociatePublicIpAddress",
        "ec2:AuthorizedService",
        "ec2:AvailabilityZone",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}",
        "ec2:Subnet",
        "ec2:Vpc"
      ]
    },
    "placement-group": {
      "name": "placement-group",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:placement-group/${PlacementGroupName}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:PlacementGroupStrategy",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "prefix-list": {
      "name": "prefix-list",
      "url": "",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:prefix-list/${PrefixListId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "reserved-instances": {
      "name": "reserved-instances",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:reserved-instances/${ReservationId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:AvailabilityZone",
        "ec2:InstanceType",
        "ec2:Region",
        "ec2:ReservedInstancesOfferingType",
        "ec2:ResourceTag/${TagKey}",
        "ec2:Tenancy"
      ]
    },
    "route-table": {
      "name": "route-table",
      "url": "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:route-table/${RouteTableId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}",
        "ec2:Vpc"
      ]
    },
    "security-group": {
      "name": "security-group",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:security-group/${SecurityGroupId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}",
        "ec2:Vpc"
      ]
    },
    "snapshot": {
      "name": "snapshot",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html",
      "arn": "arn:${Partition}:ec2:${Region}::snapshot/${SnapshotId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Owner",
        "ec2:ParentVolume",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}",
        "ec2:SnapshotTime",
        "ec2:VolumeSize"
      ]
    },
    "spot-instance-request": {
      "name": "spot-instance-request",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:spot-instances-request/${SpotInstanceRequestId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "subnet": {
      "name": "subnet",
      "url": "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:subnet/${SubnetId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:AvailabilityZone",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}",
        "ec2:Vpc"
      ]
    },
    "traffic-mirror-session": {
      "name": "traffic-mirror-session",
      "url": "https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-session.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:traffic-mirror-session/${TrafficMirrorSessionId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "traffic-mirror-target": {
      "name": "traffic-mirror-target",
      "url": "https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-target.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:traffic-mirror-target/${TrafficMirrorTargetId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "traffic-mirror-filter": {
      "name": "traffic-mirror-filter",
      "url": "https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-filter.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:traffic-mirror-filter/${TrafficMirrorFilterId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "traffic-mirror-filter-rule": {
      "name": "traffic-mirror-filter-rule",
      "url": "https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-filter.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:traffic-mirror-filter-rule/${TrafficMirrorFilterRuleId}",
      "conditionKeys": [
        "ec2:Region"
      ]
    },
    "transit-gateway-attachment": {
      "name": "transit-gateway-attachment",
      "url": "https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:transit-gateway-attachment/${TransitGatewayAttachmentId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "transit-gateway-multicast-domain": {
      "name": "transit-gateway-multicast-domain",
      "url": "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-multicast-overview.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:transit-gateway-multicast-domain/${TransitGatewayMulticastDomainId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "transit-gateway-route-table": {
      "name": "transit-gateway-route-table",
      "url": "https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:transit-gateway-route-table/${TransitGatewayRouteTableId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "transit-gateway": {
      "name": "transit-gateway",
      "url": "https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:transit-gateway/${TransitGatewayId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "volume": {
      "name": "volume",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:volume/${VolumeId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:AvailabilityZone",
        "ec2:Encrypted",
        "ec2:ParentSnapshot",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}",
        "ec2:VolumeIops",
        "ec2:VolumeSize",
        "ec2:VolumeType"
      ]
    },
    "vpc": {
      "name": "vpc",
      "url": "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:vpc/${VpcId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}",
        "ec2:Tenancy"
      ]
    },
    "vpc-endpoint": {
      "name": "vpc-endpoint",
      "url": "https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:vpc-endpoint/${VpceId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}",
        "ec2:VpceServiceName",
        "ec2:VpceServiceOwner"
      ]
    },
    "vpc-endpoint-service": {
      "name": "vpc-endpoint-service",
      "url": "https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:vpc-endpoint-service/${VpceServiceId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}",
        "ec2:VpceServicePrivateDnsName"
      ]
    },
    "vpc-flow-log": {
      "name": "vpc-flow-log",
      "url": "https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:vpc-flow-log/${VpcFlowLogId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:Region",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "vpc-peering-connection": {
      "name": "vpc-peering-connection",
      "url": "https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:vpc-peering-connection/${VpcPeeringConnectionId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ec2:AccepterVpc",
        "ec2:Region",
        "ec2:RequesterVpc",
        "ec2:ResourceTag/${TagKey}"
      ]
    },
    "vpn-connection": {
      "name": "vpn-connection",
      "url": "https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:vpn-connection/${VpnConnectionId}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys",
        "ec2:AuthenticationType",
        "ec2:DPDTimeoutSeconds",
        "ec2:GatewayType",
        "ec2:IKEVersions",
        "ec2:InsideTunnelCidr",
        "ec2:Phase1DHGroupNumbers",
        "ec2:Phase1EncryptionAlgorithms",
        "ec2:Phase1IntegrityAlgorithms",
        "ec2:Phase1LifetimeSeconds",
        "ec2:Phase2DHGroupNumbers",
        "ec2:Phase2EncryptionAlgorithms",
        "ec2:Phase2IntegrityAlgorithms",
        "ec2:Phase2LifetimeSeconds",
        "ec2:PresharedKeys",
        "ec2:Region",
        "ec2:RekeyFuzzPercentage",
        "ec2:RekeyMarginTimeSeconds",
        "ec2:ResourceTag/${TagKey}",
        "ec2:RoutingType"
      ]
    },
    "vpn-gateway": {
      "name": "vpn-gateway",
      "url": "https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html",
      "arn": "arn:${Partition}:ec2:${Region}:${Account}:vpn-gateway/${VpnGatewayId}",
      "conditionKeys": []
    }
  };

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
    this.add('ec2:AcceptReservedInstancesExchangeQuote');
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
    this.add('ec2:AcceptTransitGatewayPeeringAttachment');
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
    this.add('ec2:AcceptTransitGatewayVpcAttachment');
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
    this.add('ec2:AcceptVpcEndpointConnections');
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
    this.add('ec2:AcceptVpcPeeringConnection');
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
    this.add('ec2:AdvertiseByoipCidr');
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
    this.add('ec2:AllocateAddress');
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
    this.add('ec2:AllocateHosts');
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
    this.add('ec2:ApplySecurityGroupsToClientVpnTargetNetwork');
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
    this.add('ec2:AssignIpv6Addresses');
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
    this.add('ec2:AssignPrivateIpAddresses');
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
    this.add('ec2:AssociateAddress');
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
    this.add('ec2:AssociateClientVpnTargetNetwork');
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
    this.add('ec2:AssociateDhcpOptions');
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
    this.add('ec2:AssociateIamInstanceProfile');
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
    this.add('ec2:AssociateRouteTable');
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
    this.add('ec2:AssociateSubnetCidrBlock');
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
    this.add('ec2:AssociateTransitGatewayMulticastDomain');
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
    this.add('ec2:AssociateTransitGatewayRouteTable');
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
    this.add('ec2:AssociateVpcCidrBlock');
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
    this.add('ec2:AttachClassicLinkVpc');
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
    this.add('ec2:AttachInternetGateway');
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
    this.add('ec2:AttachNetworkInterface');
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
    this.add('ec2:AttachVolume');
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
    this.add('ec2:AttachVpnGateway');
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
    this.add('ec2:AuthorizeClientVpnIngress');
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
    this.add('ec2:AuthorizeSecurityGroupEgress');
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
    this.add('ec2:AuthorizeSecurityGroupIngress');
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
    this.add('ec2:BundleInstance');
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
    this.add('ec2:CancelBundleTask');
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
    this.add('ec2:CancelCapacityReservation');
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
    this.add('ec2:CancelConversionTask');
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
    this.add('ec2:CancelExportTask');
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
    this.add('ec2:CancelImportTask');
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
    this.add('ec2:CancelReservedInstancesListing');
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
    this.add('ec2:CancelSpotFleetRequests');
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
    this.add('ec2:CancelSpotInstanceRequests');
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
    this.add('ec2:ConfirmProductInstance');
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
    this.add('ec2:CopyFpgaImage');
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
    this.add('ec2:CopyImage');
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
    this.add('ec2:CopySnapshot');
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
    this.add('ec2:CreateCapacityReservation');
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
    this.add('ec2:CreateCarrierGateway');
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
    this.add('ec2:CreateClientVpnEndpoint');
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
    this.add('ec2:CreateClientVpnRoute');
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
    this.add('ec2:CreateCustomerGateway');
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
    this.add('ec2:CreateDefaultSubnet');
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
    this.add('ec2:CreateDefaultVpc');
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
    this.add('ec2:CreateDhcpOptions');
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
    this.add('ec2:CreateEgressOnlyInternetGateway');
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
    this.add('ec2:CreateFleet');
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
    this.add('ec2:CreateFlowLogs');
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
    this.add('ec2:CreateFpgaImage');
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
    this.add('ec2:CreateImage');
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
    this.add('ec2:CreateInstanceExportTask');
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
    this.add('ec2:CreateInternetGateway');
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
    this.add('ec2:CreateKeyPair');
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
    this.add('ec2:CreateLaunchTemplate');
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
    this.add('ec2:CreateLaunchTemplateVersion');
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
    this.add('ec2:CreateLocalGatewayRoute');
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
    this.add('ec2:CreateLocalGatewayRouteTableVpcAssociation');
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
    this.add('ec2:CreateManagedPrefixList');
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
    this.add('ec2:CreateNatGateway');
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
    this.add('ec2:CreateNetworkAcl');
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
    this.add('ec2:CreateNetworkAclEntry');
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
    this.add('ec2:CreateNetworkInterface');
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
    this.add('ec2:CreateNetworkInterfacePermission');
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
    this.add('ec2:CreatePlacementGroup');
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
    this.add('ec2:CreateReservedInstancesListing');
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
    this.add('ec2:CreateRoute');
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
    this.add('ec2:CreateRouteTable');
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
    this.add('ec2:CreateSecurityGroup');
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
    this.add('ec2:CreateSnapshot');
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
    this.add('ec2:CreateSnapshots');
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
    this.add('ec2:CreateSpotDatafeedSubscription');
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
    this.add('ec2:CreateSubnet');
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
    this.add('ec2:CreateTags');
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
    this.add('ec2:CreateTrafficMirrorFilter');
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
    this.add('ec2:CreateTrafficMirrorFilterRule');
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
    this.add('ec2:CreateTrafficMirrorSession');
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
    this.add('ec2:CreateTrafficMirrorTarget');
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
    this.add('ec2:CreateTransitGateway');
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
    this.add('ec2:CreateTransitGatewayMulticastDomain');
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
    this.add('ec2:CreateTransitGatewayPeeringAttachment');
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
    this.add('ec2:CreateTransitGatewayRoute');
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
    this.add('ec2:CreateTransitGatewayRouteTable');
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
    this.add('ec2:CreateTransitGatewayVpcAttachment');
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
    this.add('ec2:CreateVolume');
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
    this.add('ec2:CreateVpc');
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
    this.add('ec2:CreateVpcEndpoint');
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
    this.add('ec2:CreateVpcEndpointConnectionNotification');
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
    this.add('ec2:CreateVpcEndpointServiceConfiguration');
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
    this.add('ec2:CreateVpcPeeringConnection');
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
    this.add('ec2:CreateVpnConnection');
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
    this.add('ec2:CreateVpnConnectionRoute');
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
    this.add('ec2:CreateVpnGateway');
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
    this.add('ec2:DeleteCarrierGateway');
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
    this.add('ec2:DeleteClientVpnEndpoint');
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
    this.add('ec2:DeleteClientVpnRoute');
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
    this.add('ec2:DeleteCustomerGateway');
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
    this.add('ec2:DeleteDhcpOptions');
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
    this.add('ec2:DeleteEgressOnlyInternetGateway');
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
    this.add('ec2:DeleteFleets');
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
    this.add('ec2:DeleteFlowLogs');
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
    this.add('ec2:DeleteFpgaImage');
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
    this.add('ec2:DeleteInternetGateway');
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
    this.add('ec2:DeleteKeyPair');
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
    this.add('ec2:DeleteLaunchTemplate');
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
    this.add('ec2:DeleteLaunchTemplateVersions');
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
    this.add('ec2:DeleteLocalGatewayRoute');
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
    this.add('ec2:DeleteLocalGatewayRouteTableVpcAssociation');
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
    this.add('ec2:DeleteManagedPrefixList');
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
    this.add('ec2:DeleteNatGateway');
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
    this.add('ec2:DeleteNetworkAcl');
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
    this.add('ec2:DeleteNetworkAclEntry');
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
    this.add('ec2:DeleteNetworkInterface');
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
    this.add('ec2:DeleteNetworkInterfacePermission');
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
    this.add('ec2:DeletePlacementGroup');
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
    this.add('ec2:DeleteRoute');
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
    this.add('ec2:DeleteRouteTable');
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
    this.add('ec2:DeleteSecurityGroup');
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
    this.add('ec2:DeleteSnapshot');
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
    this.add('ec2:DeleteSpotDatafeedSubscription');
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
    this.add('ec2:DeleteSubnet');
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
    this.add('ec2:DeleteTags');
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
    this.add('ec2:DeleteTrafficMirrorFilter');
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
    this.add('ec2:DeleteTrafficMirrorFilterRule');
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
    this.add('ec2:DeleteTrafficMirrorSession');
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
    this.add('ec2:DeleteTrafficMirrorTarget');
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
    this.add('ec2:DeleteTransitGateway');
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
    this.add('ec2:DeleteTransitGatewayMulticastDomain');
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
    this.add('ec2:DeleteTransitGatewayPeeringAttachment');
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
    this.add('ec2:DeleteTransitGatewayRoute');
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
    this.add('ec2:DeleteTransitGatewayRouteTable');
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
    this.add('ec2:DeleteTransitGatewayVpcAttachment');
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
    this.add('ec2:DeleteVolume');
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
    this.add('ec2:DeleteVpc');
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
    this.add('ec2:DeleteVpcEndpointConnectionNotifications');
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
    this.add('ec2:DeleteVpcEndpointServiceConfigurations');
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
    this.add('ec2:DeleteVpcEndpoints');
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
    this.add('ec2:DeleteVpcPeeringConnection');
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
    this.add('ec2:DeleteVpnConnection');
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
    this.add('ec2:DeleteVpnConnectionRoute');
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
    this.add('ec2:DeleteVpnGateway');
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
    this.add('ec2:DeprovisionByoipCidr');
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
    this.add('ec2:DeregisterImage');
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
    this.add('ec2:DeregisterInstanceEventNotificationAttributes');
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
    this.add('ec2:DeregisterTransitGatewayMulticastGroupMembers');
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
    this.add('ec2:DeregisterTransitGatewayMulticastGroupSources');
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
    this.add('ec2:DescribeAccountAttributes');
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
    this.add('ec2:DescribeAddresses');
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
    this.add('ec2:DescribeAggregateIdFormat');
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
    this.add('ec2:DescribeAvailabilityZones');
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
    this.add('ec2:DescribeBundleTasks');
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
    this.add('ec2:DescribeByoipCidrs');
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
    this.add('ec2:DescribeCapacityReservations');
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
    this.add('ec2:DescribeCarrierGateways');
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
    this.add('ec2:DescribeClassicLinkInstances');
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
    this.add('ec2:DescribeClientVpnAuthorizationRules');
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
    this.add('ec2:DescribeClientVpnConnections');
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
    this.add('ec2:DescribeClientVpnEndpoints');
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
    this.add('ec2:DescribeClientVpnRoutes');
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
    this.add('ec2:DescribeClientVpnTargetNetworks');
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
    this.add('ec2:DescribeCoipPools');
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
    this.add('ec2:DescribeConversionTasks');
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
    this.add('ec2:DescribeCustomerGateways');
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
    this.add('ec2:DescribeDhcpOptions');
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
    this.add('ec2:DescribeEgressOnlyInternetGateways');
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
    this.add('ec2:DescribeElasticGpus');
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
    this.add('ec2:DescribeExportImageTasks');
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
    this.add('ec2:DescribeExportTasks');
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
    this.add('ec2:DescribeFastSnapshotRestores');
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
    this.add('ec2:DescribeFleetHistory');
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
    this.add('ec2:DescribeFleetInstances');
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
    this.add('ec2:DescribeFleets');
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
    this.add('ec2:DescribeFlowLogs');
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
    this.add('ec2:DescribeFpgaImageAttribute');
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
    this.add('ec2:DescribeFpgaImages');
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
    this.add('ec2:DescribeHostReservationOfferings');
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
    this.add('ec2:DescribeHostReservations');
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
    this.add('ec2:DescribeHosts');
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
    this.add('ec2:DescribeIamInstanceProfileAssociations');
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
    this.add('ec2:DescribeIdFormat');
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
    this.add('ec2:DescribeIdentityIdFormat');
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
    this.add('ec2:DescribeImageAttribute');
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
    this.add('ec2:DescribeImages');
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
    this.add('ec2:DescribeImportImageTasks');
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
    this.add('ec2:DescribeImportSnapshotTasks');
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
    this.add('ec2:DescribeInstanceAttribute');
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
    this.add('ec2:DescribeInstanceCreditSpecifications');
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
    this.add('ec2:DescribeInstanceEventNotificationAttributes');
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
    this.add('ec2:DescribeInstanceStatus');
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
    this.add('ec2:DescribeInstanceTypeOfferings');
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
    this.add('ec2:DescribeInstanceTypes');
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
    this.add('ec2:DescribeInstances');
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
    this.add('ec2:DescribeInternetGateways');
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
    this.add('ec2:DescribeKeyPairs');
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
    this.add('ec2:DescribeLaunchTemplateVersions');
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
    this.add('ec2:DescribeLaunchTemplates');
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
    this.add('ec2:DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations');
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
    this.add('ec2:DescribeLocalGatewayRouteTableVpcAssociations');
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
    this.add('ec2:DescribeLocalGatewayRouteTables');
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
    this.add('ec2:DescribeLocalGatewayVirtualInterfaceGroups');
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
    this.add('ec2:DescribeLocalGatewayVirtualInterfaces');
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
    this.add('ec2:DescribeLocalGateways');
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
    this.add('ec2:DescribeManagedPrefixLists');
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
    this.add('ec2:DescribeMovingAddresses');
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
    this.add('ec2:DescribeNatGateways');
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
    this.add('ec2:DescribeNetworkAcls');
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
    this.add('ec2:DescribeNetworkInterfaceAttribute');
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
    this.add('ec2:DescribeNetworkInterfacePermissions');
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
    this.add('ec2:DescribeNetworkInterfaces');
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
    this.add('ec2:DescribePlacementGroups');
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
    this.add('ec2:DescribePrefixLists');
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
    this.add('ec2:DescribePrincipalIdFormat');
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
    this.add('ec2:DescribePublicIpv4Pools');
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
    this.add('ec2:DescribeRegions');
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
    this.add('ec2:DescribeReservedInstances');
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
    this.add('ec2:DescribeReservedInstancesListings');
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
    this.add('ec2:DescribeReservedInstancesModifications');
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
    this.add('ec2:DescribeReservedInstancesOfferings');
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
    this.add('ec2:DescribeRouteTables');
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
    this.add('ec2:DescribeScheduledInstanceAvailability');
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
    this.add('ec2:DescribeScheduledInstances');
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
    this.add('ec2:DescribeSecurityGroupReferences');
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
    this.add('ec2:DescribeSecurityGroups');
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
    this.add('ec2:DescribeSnapshotAttribute');
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
    this.add('ec2:DescribeSnapshots');
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
    this.add('ec2:DescribeSpotDatafeedSubscription');
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
    this.add('ec2:DescribeSpotFleetInstances');
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
    this.add('ec2:DescribeSpotFleetRequestHistory');
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
    this.add('ec2:DescribeSpotFleetRequests');
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
    this.add('ec2:DescribeSpotInstanceRequests');
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
    this.add('ec2:DescribeSpotPriceHistory');
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
    this.add('ec2:DescribeStaleSecurityGroups');
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
    this.add('ec2:DescribeSubnets');
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
    this.add('ec2:DescribeTags');
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
    this.add('ec2:DescribeTrafficMirrorFilters');
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
    this.add('ec2:DescribeTrafficMirrorSessions');
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
    this.add('ec2:DescribeTrafficMirrorTargets');
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
    this.add('ec2:DescribeTransitGatewayAttachments');
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
    this.add('ec2:DescribeTransitGatewayMulticastDomains');
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
    this.add('ec2:DescribeTransitGatewayPeeringAttachments');
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
    this.add('ec2:DescribeTransitGatewayRouteTables');
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
    this.add('ec2:DescribeTransitGatewayVpcAttachments');
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
    this.add('ec2:DescribeTransitGateways');
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
    this.add('ec2:DescribeVolumeAttribute');
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
    this.add('ec2:DescribeVolumeStatus');
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
    this.add('ec2:DescribeVolumes');
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
    this.add('ec2:DescribeVolumesModifications');
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
    this.add('ec2:DescribeVpcAttribute');
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
    this.add('ec2:DescribeVpcClassicLink');
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
    this.add('ec2:DescribeVpcClassicLinkDnsSupport');
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
    this.add('ec2:DescribeVpcEndpointConnectionNotifications');
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
    this.add('ec2:DescribeVpcEndpointConnections');
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
    this.add('ec2:DescribeVpcEndpointServiceConfigurations');
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
    this.add('ec2:DescribeVpcEndpointServicePermissions');
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
    this.add('ec2:DescribeVpcEndpointServices');
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
    this.add('ec2:DescribeVpcEndpoints');
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
    this.add('ec2:DescribeVpcPeeringConnections');
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
    this.add('ec2:DescribeVpcs');
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
    this.add('ec2:DescribeVpnConnections');
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
    this.add('ec2:DescribeVpnGateways');
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
    this.add('ec2:DetachClassicLinkVpc');
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
    this.add('ec2:DetachInternetGateway');
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
    this.add('ec2:DetachNetworkInterface');
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
    this.add('ec2:DetachVolume');
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
    this.add('ec2:DetachVpnGateway');
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
    this.add('ec2:DisableEbsEncryptionByDefault');
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
    this.add('ec2:DisableFastSnapshotRestores');
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
    this.add('ec2:DisableTransitGatewayRouteTablePropagation');
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
    this.add('ec2:DisableVgwRoutePropagation');
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
    this.add('ec2:DisableVpcClassicLink');
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
    this.add('ec2:DisableVpcClassicLinkDnsSupport');
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
    this.add('ec2:DisassociateAddress');
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
    this.add('ec2:DisassociateClientVpnTargetNetwork');
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
    this.add('ec2:DisassociateIamInstanceProfile');
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
    this.add('ec2:DisassociateRouteTable');
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
    this.add('ec2:DisassociateSubnetCidrBlock');
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
    this.add('ec2:DisassociateTransitGatewayMulticastDomain');
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
    this.add('ec2:DisassociateTransitGatewayRouteTable');
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
    this.add('ec2:DisassociateVpcCidrBlock');
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
    this.add('ec2:EnableEbsEncryptionByDefault');
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
    this.add('ec2:EnableFastSnapshotRestores');
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
    this.add('ec2:EnableTransitGatewayRouteTablePropagation');
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
    this.add('ec2:EnableVgwRoutePropagation');
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
    this.add('ec2:EnableVolumeIO');
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
    this.add('ec2:EnableVpcClassicLink');
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
    this.add('ec2:EnableVpcClassicLinkDnsSupport');
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
    this.add('ec2:ExportClientVpnClientCertificateRevocationList');
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
    this.add('ec2:ExportClientVpnClientConfiguration');
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
    this.add('ec2:ExportImage');
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
    this.add('ec2:ExportTransitGatewayRoutes');
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
    this.add('ec2:GetCapacityReservationUsage');
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
    this.add('ec2:GetCoipPoolUsage');
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
    this.add('ec2:GetConsoleOutput');
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
    this.add('ec2:GetConsoleScreenshot');
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
    this.add('ec2:GetDefaultCreditSpecification');
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
    this.add('ec2:GetEbsDefaultKmsKeyId');
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
    this.add('ec2:GetEbsEncryptionByDefault');
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
    this.add('ec2:GetHostReservationPurchasePreview');
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
    this.add('ec2:GetLaunchTemplateData');
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
    this.add('ec2:GetManagedPrefixListAssociations');
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
    this.add('ec2:GetManagedPrefixListEntries');
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
    this.add('ec2:GetPasswordData');
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
    this.add('ec2:GetReservedInstancesExchangeQuote');
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
    this.add('ec2:GetTransitGatewayAttachmentPropagations');
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
    this.add('ec2:GetTransitGatewayMulticastDomainAssociations');
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
    this.add('ec2:GetTransitGatewayRouteTableAssociations');
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
    this.add('ec2:GetTransitGatewayRouteTablePropagations');
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
    this.add('ec2:ImportClientVpnClientCertificateRevocationList');
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
    this.add('ec2:ImportImage');
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
    this.add('ec2:ImportInstance');
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
    this.add('ec2:ImportKeyPair');
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
    this.add('ec2:ImportSnapshot');
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
    this.add('ec2:ImportVolume');
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
    this.add('ec2:ModifyCapacityReservation');
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
    this.add('ec2:ModifyClientVpnEndpoint');
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
    this.add('ec2:ModifyDefaultCreditSpecification');
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
    this.add('ec2:ModifyEbsDefaultKmsKeyId');
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
    this.add('ec2:ModifyFleet');
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
    this.add('ec2:ModifyFpgaImageAttribute');
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
    this.add('ec2:ModifyHosts');
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
    this.add('ec2:ModifyIdFormat');
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
    this.add('ec2:ModifyIdentityIdFormat');
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
    this.add('ec2:ModifyImageAttribute');
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
    this.add('ec2:ModifyInstanceAttribute');
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
    this.add('ec2:ModifyInstanceCapacityReservationAttributes');
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
    this.add('ec2:ModifyInstanceCreditSpecification');
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
    this.add('ec2:ModifyInstanceEventStartTime');
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
    this.add('ec2:ModifyInstanceMetadataOptions');
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
    this.add('ec2:ModifyInstancePlacement');
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
    this.add('ec2:ModifyLaunchTemplate');
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
    this.add('ec2:ModifyManagedPrefixList');
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
    this.add('ec2:ModifyNetworkInterfaceAttribute');
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
    this.add('ec2:ModifyReservedInstances');
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
    this.add('ec2:ModifySnapshotAttribute');
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
    this.add('ec2:ModifySpotFleetRequest');
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
    this.add('ec2:ModifySubnetAttribute');
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
    this.add('ec2:ModifyTrafficMirrorFilterNetworkServices');
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
    this.add('ec2:ModifyTrafficMirrorFilterRule');
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
    this.add('ec2:ModifyTrafficMirrorSession');
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
    this.add('ec2:ModifyTransitGatewayVpcAttachment');
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
    this.add('ec2:ModifyVolume');
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
    this.add('ec2:ModifyVolumeAttribute');
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
    this.add('ec2:ModifyVpcAttribute');
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
    this.add('ec2:ModifyVpcEndpoint');
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
    this.add('ec2:ModifyVpcEndpointConnectionNotification');
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
    this.add('ec2:ModifyVpcEndpointServiceConfiguration');
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
    this.add('ec2:ModifyVpcEndpointServicePermissions');
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
    this.add('ec2:ModifyVpcPeeringConnectionOptions');
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
    this.add('ec2:ModifyVpcTenancy');
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
    this.add('ec2:ModifyVpnConnection');
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
    this.add('ec2:ModifyVpnTunnelCertificate');
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
    this.add('ec2:ModifyVpnTunnelOptions');
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
    this.add('ec2:MonitorInstances');
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
    this.add('ec2:MoveAddressToVpc');
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
    this.add('ec2:ProvisionByoipCidr');
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
    this.add('ec2:PurchaseHostReservation');
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
    this.add('ec2:PurchaseReservedInstancesOffering');
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
    this.add('ec2:PurchaseScheduledInstances');
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
    this.add('ec2:RebootInstances');
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
    this.add('ec2:RegisterImage');
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
    this.add('ec2:RegisterInstanceEventNotificationAttributes');
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
    this.add('ec2:RegisterTransitGatewayMulticastGroupMembers');
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
    this.add('ec2:RegisterTransitGatewayMulticastGroupSources');
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
    this.add('ec2:RejectTransitGatewayPeeringAttachment');
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
    this.add('ec2:RejectTransitGatewayVpcAttachment');
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
    this.add('ec2:RejectVpcEndpointConnections');
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
    this.add('ec2:RejectVpcPeeringConnection');
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
    this.add('ec2:ReleaseAddress');
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
    this.add('ec2:ReleaseHosts');
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
    this.add('ec2:ReplaceIamInstanceProfileAssociation');
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
    this.add('ec2:ReplaceNetworkAclAssociation');
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
    this.add('ec2:ReplaceNetworkAclEntry');
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
    this.add('ec2:ReplaceRoute');
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
    this.add('ec2:ReplaceRouteTableAssociation');
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
    this.add('ec2:ReplaceTransitGatewayRoute');
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
    this.add('ec2:ReportInstanceStatus');
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
    this.add('ec2:RequestSpotFleet');
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
    this.add('ec2:RequestSpotInstances');
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
    this.add('ec2:ResetEbsDefaultKmsKeyId');
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
    this.add('ec2:ResetFpgaImageAttribute');
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
    this.add('ec2:ResetImageAttribute');
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
    this.add('ec2:ResetInstanceAttribute');
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
    this.add('ec2:ResetNetworkInterfaceAttribute');
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
    this.add('ec2:ResetSnapshotAttribute');
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
    this.add('ec2:RestoreAddressToClassic');
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
    this.add('ec2:RestoreManagedPrefixListVersion');
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
    this.add('ec2:RevokeClientVpnIngress');
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
    this.add('ec2:RevokeSecurityGroupEgress');
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
    this.add('ec2:RevokeSecurityGroupIngress');
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
    this.add('ec2:RunInstances');
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
    this.add('ec2:RunScheduledInstances');
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
    this.add('ec2:SearchLocalGatewayRoutes');
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
    this.add('ec2:SearchTransitGatewayMulticastGroups');
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
    this.add('ec2:SearchTransitGatewayRoutes');
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
    this.add('ec2:SendDiagnosticInterrupt');
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
    this.add('ec2:StartInstances');
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
    this.add('ec2:StartVpcEndpointServicePrivateDnsVerification');
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
    this.add('ec2:StopInstances');
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
    this.add('ec2:TerminateClientVpnConnections');
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
    this.add('ec2:TerminateInstances');
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
    this.add('ec2:UnassignIpv6Addresses');
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
    this.add('ec2:UnassignPrivateIpAddresses');
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
    this.add('ec2:UnmonitorInstances');
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
    this.add('ec2:UpdateSecurityGroupRuleDescriptionsEgress');
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
    this.add('ec2:UpdateSecurityGroupRuleDescriptionsIngress');
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
    this.add('ec2:WithdrawByoipCidr');
    return this;
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
   * Filters access by the type of volume (gp2, io1, st1, sc1, or standard)
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
