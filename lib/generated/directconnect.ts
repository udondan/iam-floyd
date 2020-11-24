import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [directconnect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectconnect.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Directconnect extends PolicyStatement {
  public servicePrefix = 'directconnect';

  /**
   * Statement provider for service [directconnect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectconnect.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Accepts a proposal request to attach a virtual private gateway to a Direct Connect gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AcceptDirectConnectGatewayAssociationProposal.html
   */
  public toAcceptDirectConnectGatewayAssociationProposal() {
    this.to('directconnect:AcceptDirectConnectGatewayAssociationProposal');
    return this;
  }

  /**
   * Creates a hosted connection on an interconnect.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateConnectionOnInterconnect.html
   */
  public toAllocateConnectionOnInterconnect() {
    this.to('directconnect:AllocateConnectionOnInterconnect');
    return this;
  }

  /**
   * Creates a new hosted connection between a AWS Direct Connect partner's network and a specific AWS Direct Connect location.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateHostedConnection.html
   */
  public toAllocateHostedConnection() {
    this.to('directconnect:AllocateHostedConnection');
    return this;
  }

  /**
   * Provisions a private virtual interface to be owned by a different customer.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocatePrivateVirtualInterface.html
   */
  public toAllocatePrivateVirtualInterface() {
    this.to('directconnect:AllocatePrivateVirtualInterface');
    return this;
  }

  /**
   * Provisions a public virtual interface to be owned by a different customer.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocatePublicVirtualInterface.html
   */
  public toAllocatePublicVirtualInterface() {
    this.to('directconnect:AllocatePublicVirtualInterface');
    return this;
  }

  /**
   * Provisions a transit virtual interface to be owned by a different customer.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateTransitVirtualInterface.html
   */
  public toAllocateTransitVirtualInterface() {
    this.to('directconnect:AllocateTransitVirtualInterface');
    return this;
  }

  /**
   * Associates a connection with a LAG.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateConnectionWithLag.html
   */
  public toAssociateConnectionWithLag() {
    this.to('directconnect:AssociateConnectionWithLag');
    return this;
  }

  /**
   * Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateHostedConnection.html
   */
  public toAssociateHostedConnection() {
    this.to('directconnect:AssociateHostedConnection');
    return this;
  }

  /**
   * Associates a virtual interface with a specified link aggregation group (LAG) or connection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateVirtualInterface.html
   */
  public toAssociateVirtualInterface() {
    this.to('directconnect:AssociateVirtualInterface');
    return this;
  }

  /**
   * Confirm the creation of a hosted connection on an interconnect.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmConnection.html
   */
  public toConfirmConnection() {
    this.to('directconnect:ConfirmConnection');
    return this;
  }

  /**
   * Accept ownership of a private virtual interface created by another customer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPrivateVirtualInterface.html
   */
  public toConfirmPrivateVirtualInterface() {
    this.to('directconnect:ConfirmPrivateVirtualInterface');
    return this;
  }

  /**
   * Accept ownership of a public virtual interface created by another customer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPublicVirtualInterface.html
   */
  public toConfirmPublicVirtualInterface() {
    this.to('directconnect:ConfirmPublicVirtualInterface');
    return this;
  }

  /**
   * Accept ownership of a transit virtual interface created by another customer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmTransitVirtualInterface.html
   */
  public toConfirmTransitVirtualInterface() {
    this.to('directconnect:ConfirmTransitVirtualInterface');
    return this;
  }

  /**
   * Creates a BGP peer on the specified virtual interface.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateBGPPeer.html
   */
  public toCreateBGPPeer() {
    this.to('directconnect:CreateBGPPeer');
    return this;
  }

  /**
   * Creates a new connection between the customer network and a specific AWS Direct Connect location.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateConnection.html
   */
  public toCreateConnection() {
    this.to('directconnect:CreateConnection');
    return this;
  }

  /**
   * Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGateway.html
   */
  public toCreateDirectConnectGateway() {
    this.to('directconnect:CreateDirectConnectGateway');
    return this;
  }

  /**
   * Creates an association between a Direct Connect gateway and a virtual private gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociation.html
   */
  public toCreateDirectConnectGatewayAssociation() {
    this.to('directconnect:CreateDirectConnectGatewayAssociation');
    return this;
  }

  /**
   * Creates a proposal to associate the specified virtual private gateway with the specified Direct Connect gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociationProposal.html
   */
  public toCreateDirectConnectGatewayAssociationProposal() {
    this.to('directconnect:CreateDirectConnectGatewayAssociationProposal');
    return this;
  }

  /**
   * Creates a new interconnect between a AWS Direct Connect partner's network and a specific AWS Direct Connect location.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateInterconnect.html
   */
  public toCreateInterconnect() {
    this.to('directconnect:CreateInterconnect');
    return this;
  }

  /**
   * Creates a link aggregation group (LAG) with the specified number of bundled physical connections between the customer network and a specific AWS Direct Connect location.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateLag.html
   */
  public toCreateLag() {
    this.to('directconnect:CreateLag');
    return this;
  }

  /**
   * Creates a new private virtual interface.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreatePrivateVirtualInterface.html
   */
  public toCreatePrivateVirtualInterface() {
    this.to('directconnect:CreatePrivateVirtualInterface');
    return this;
  }

  /**
   * Creates a new public virtual interface.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreatePublicVirtualInterface.html
   */
  public toCreatePublicVirtualInterface() {
    this.to('directconnect:CreatePublicVirtualInterface');
    return this;
  }

  /**
   * Creates a new transit virtual interface.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateTransitVirtualInterface.html
   */
  public toCreateTransitVirtualInterface() {
    this.to('directconnect:CreateTransitVirtualInterface');
    return this;
  }

  /**
   * Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteBGPPeer.html
   */
  public toDeleteBGPPeer() {
    this.to('directconnect:DeleteBGPPeer');
    return this;
  }

  /**
   * Deletes the connection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteConnection.html
   */
  public toDeleteConnection() {
    this.to('directconnect:DeleteConnection');
    return this;
  }

  /**
   * Deletes the specified Direct Connect gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGateway.html
   */
  public toDeleteDirectConnectGateway() {
    this.to('directconnect:DeleteDirectConnectGateway');
    return this;
  }

  /**
   * Deletes the association between the specified Direct Connect gateway and virtual private gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociation.html
   */
  public toDeleteDirectConnectGatewayAssociation() {
    this.to('directconnect:DeleteDirectConnectGatewayAssociation');
    return this;
  }

  /**
   * Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociationProposal.html
   */
  public toDeleteDirectConnectGatewayAssociationProposal() {
    this.to('directconnect:DeleteDirectConnectGatewayAssociationProposal');
    return this;
  }

  /**
   * Deletes the specified interconnect.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteInterconnect.html
   */
  public toDeleteInterconnect() {
    this.to('directconnect:DeleteInterconnect');
    return this;
  }

  /**
   * Deletes the specified link aggregation group (LAG).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteLag.html
   */
  public toDeleteLag() {
    this.to('directconnect:DeleteLag');
    return this;
  }

  /**
   * Deletes a virtual interface.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteVirtualInterface.html
   */
  public toDeleteVirtualInterface() {
    this.to('directconnect:DeleteVirtualInterface');
    return this;
  }

  /**
   * Returns the LOA-CFA for a Connection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionLoa.html
   */
  public toDescribeConnectionLoa() {
    this.to('directconnect:DescribeConnectionLoa');
    return this;
  }

  /**
   * Displays all connections in this region.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnections.html
   */
  public toDescribeConnections() {
    this.to('directconnect:DescribeConnections');
    return this;
  }

  /**
   * Return a list of connections that have been provisioned on the given interconnect.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionsOnInterconnect.html
   */
  public toDescribeConnectionsOnInterconnect() {
    this.to('directconnect:DescribeConnectionsOnInterconnect');
    return this;
  }

  /**
   * Describes one or more association proposals for connection between a virtual private gateway and a Direct Connect gateway.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociationProposals.html
   */
  public toDescribeDirectConnectGatewayAssociationProposals() {
    this.to('directconnect:DescribeDirectConnectGatewayAssociationProposals');
    return this;
  }

  /**
   * Lists the associations between your Direct Connect gateways and virtual private gateways.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociations.html
   */
  public toDescribeDirectConnectGatewayAssociations() {
    this.to('directconnect:DescribeDirectConnectGatewayAssociations');
    return this;
  }

  /**
   * Lists the attachments between your Direct Connect gateways and virtual interfaces.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAttachments.html
   */
  public toDescribeDirectConnectGatewayAttachments() {
    this.to('directconnect:DescribeDirectConnectGatewayAttachments');
    return this;
  }

  /**
   * Lists all your Direct Connect gateways or only the specified Direct Connect gateway.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGateways.html
   */
  public toDescribeDirectConnectGateways() {
    this.to('directconnect:DescribeDirectConnectGateways');
    return this;
  }

  /**
   * Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeHostedConnections.html
   */
  public toDescribeHostedConnections() {
    this.to('directconnect:DescribeHostedConnections');
    return this;
  }

  /**
   * Returns the LOA-CFA for an Interconnect.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnectLoa.html
   */
  public toDescribeInterconnectLoa() {
    this.to('directconnect:DescribeInterconnectLoa');
    return this;
  }

  /**
   * Returns a list of interconnects owned by the AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnects.html
   */
  public toDescribeInterconnects() {
    this.to('directconnect:DescribeInterconnects');
    return this;
  }

  /**
   * Describes all your link aggregation groups (LAG) or the specified LAG.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLags.html
   */
  public toDescribeLags() {
    this.to('directconnect:DescribeLags');
    return this;
  }

  /**
   * Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLoa.html
   */
  public toDescribeLoa() {
    this.to('directconnect:DescribeLoa');
    return this;
  }

  /**
   * Returns the list of AWS Direct Connect locations in the current AWS region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html
   */
  public toDescribeLocations() {
    this.to('directconnect:DescribeLocations');
    return this;
  }

  /**
   * Describes the tags associated with the specified AWS Direct Connect resources.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    this.to('directconnect:DescribeTags');
    return this;
  }

  /**
   * Returns a list of virtual private gateways owned by the AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualGateways.html
   */
  public toDescribeVirtualGateways() {
    this.to('directconnect:DescribeVirtualGateways');
    return this;
  }

  /**
   * Displays all virtual interfaces for an AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualInterfaces.html
   */
  public toDescribeVirtualInterfaces() {
    this.to('directconnect:DescribeVirtualInterfaces');
    return this;
  }

  /**
   * Disassociates a connection from a link aggregation group (LAG).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DisassociateConnectionFromLag.html
   */
  public toDisassociateConnectionFromLag() {
    this.to('directconnect:DisassociateConnectionFromLag');
    return this;
  }

  /**
   * Lists the virtual interface failover test history.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html
   */
  public toListVirtualInterfaceTestHistory() {
    this.to('directconnect:ListVirtualInterfaceTestHistory');
    return this;
  }

  /**
   * Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StartBgpFailoverTest.html
   */
  public toStartBgpFailoverTest() {
    this.to('directconnect:StartBgpFailoverTest');
    return this;
  }

  /**
   * Stops the virtual interface failover test.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html
   */
  public toStopBgpFailoverTest() {
    this.to('directconnect:StopBgpFailoverTest');
    return this;
  }

  /**
   * Adds the specified tags to the specified AWS Direct Connect resource. Each resource can have a maximum of 50 tags.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('directconnect:TagResource');
    return this;
  }

  /**
   * Removes one or more tags from the specified AWS Direct Connect resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('directconnect:UntagResource');
    return this;
  }

  /**
   * Updates the specified attributes of the Direct Connect gateway association.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateDirectConnectGatewayAssociation.html
   */
  public toUpdateDirectConnectGatewayAssociation() {
    this.to('directconnect:UpdateDirectConnectGatewayAssociation');
    return this;
  }

  /**
   * Updates the attributes of the specified link aggregation group (LAG).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateLag.html
   */
  public toUpdateLag() {
    this.to('directconnect:UpdateLag');
    return this;
  }

  /**
   * Updates the specified attributes of the specified virtual private interface.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateVirtualInterfaceAttributes.html
   */
  public toUpdateVirtualInterfaceAttributes() {
    this.to('directconnect:UpdateVirtualInterfaceAttributes');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptDirectConnectGatewayAssociationProposal",
      "AllocateConnectionOnInterconnect",
      "AllocateHostedConnection",
      "AllocatePrivateVirtualInterface",
      "AllocatePublicVirtualInterface",
      "AllocateTransitVirtualInterface",
      "AssociateConnectionWithLag",
      "AssociateHostedConnection",
      "AssociateVirtualInterface",
      "ConfirmConnection",
      "ConfirmPrivateVirtualInterface",
      "ConfirmPublicVirtualInterface",
      "ConfirmTransitVirtualInterface",
      "CreateBGPPeer",
      "CreateConnection",
      "CreateDirectConnectGateway",
      "CreateDirectConnectGatewayAssociation",
      "CreateDirectConnectGatewayAssociationProposal",
      "CreateInterconnect",
      "CreateLag",
      "CreatePrivateVirtualInterface",
      "CreatePublicVirtualInterface",
      "CreateTransitVirtualInterface",
      "DeleteBGPPeer",
      "DeleteConnection",
      "DeleteDirectConnectGateway",
      "DeleteDirectConnectGatewayAssociation",
      "DeleteDirectConnectGatewayAssociationProposal",
      "DeleteInterconnect",
      "DeleteLag",
      "DeleteVirtualInterface",
      "DisassociateConnectionFromLag",
      "StartBgpFailoverTest",
      "StopBgpFailoverTest",
      "UpdateDirectConnectGatewayAssociation",
      "UpdateLag",
      "UpdateVirtualInterfaceAttributes"
    ],
    "Read": [
      "DescribeConnectionLoa",
      "DescribeConnections",
      "DescribeConnectionsOnInterconnect",
      "DescribeDirectConnectGatewayAssociationProposals",
      "DescribeDirectConnectGatewayAssociations",
      "DescribeDirectConnectGatewayAttachments",
      "DescribeDirectConnectGateways",
      "DescribeHostedConnections",
      "DescribeInterconnectLoa",
      "DescribeInterconnects",
      "DescribeLags",
      "DescribeLoa",
      "DescribeTags",
      "DescribeVirtualGateways",
      "DescribeVirtualInterfaces"
    ],
    "List": [
      "DescribeLocations",
      "ListVirtualInterfaceTestHistory"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type dxcon to the statement
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_Connection.html
   *
   * @param connectionId - Identifier for the connectionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDxcon(connectionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:directconnect:${Region}:${Account}:dxcon/${ConnectionId}';
    arn = arn.replace('${ConnectionId}', connectionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dxlag to the statement
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_Lag.html
   *
   * @param lagId - Identifier for the lagId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDxlag(lagId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:directconnect:${Region}:${Account}:dxlag/${LagId}';
    arn = arn.replace('${LagId}', lagId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dxvif to the statement
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_VirtualInterface.html
   *
   * @param virtualInterfaceId - Identifier for the virtualInterfaceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDxvif(virtualInterfaceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:directconnect:${Region}:${Account}:dxvif/${VirtualInterfaceId}';
    arn = arn.replace('${VirtualInterfaceId}', virtualInterfaceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dx-gateway to the statement
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DirectConnectGateway.html
   *
   * @param directConnectGatewayId - Identifier for the directConnectGatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDxGateway(directConnectGatewayId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:directconnect::${Account}:dx-gateway/${DirectConnectGatewayId}';
    arn = arn.replace('${DirectConnectGatewayId}', directConnectGatewayId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
