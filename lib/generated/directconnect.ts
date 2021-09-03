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
    return this.to('AcceptDirectConnectGatewayAssociationProposal');
  }

  /**
   * Creates a hosted connection on an interconnect.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateConnectionOnInterconnect.html
   */
  public toAllocateConnectionOnInterconnect() {
    return this.to('AllocateConnectionOnInterconnect');
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
    return this.to('AllocateHostedConnection');
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
    return this.to('AllocatePrivateVirtualInterface');
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
    return this.to('AllocatePublicVirtualInterface');
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
    return this.to('AllocateTransitVirtualInterface');
  }

  /**
   * Associates a connection with a LAG.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateConnectionWithLag.html
   */
  public toAssociateConnectionWithLag() {
    return this.to('AssociateConnectionWithLag');
  }

  /**
   * Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateHostedConnection.html
   */
  public toAssociateHostedConnection() {
    return this.to('AssociateHostedConnection');
  }

  /**
   * Grants permission to associate a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with an AWS Direct Connect dedicated connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateMacSecKey.html
   */
  public toAssociateMacSecKey() {
    return this.to('AssociateMacSecKey');
  }

  /**
   * Associates a virtual interface with a specified link aggregation group (LAG) or connection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateVirtualInterface.html
   */
  public toAssociateVirtualInterface() {
    return this.to('AssociateVirtualInterface');
  }

  /**
   * Confirm the creation of a hosted connection on an interconnect.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmConnection.html
   */
  public toConfirmConnection() {
    return this.to('ConfirmConnection');
  }

  /**
   * Accept ownership of a private virtual interface created by another customer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPrivateVirtualInterface.html
   */
  public toConfirmPrivateVirtualInterface() {
    return this.to('ConfirmPrivateVirtualInterface');
  }

  /**
   * Accept ownership of a public virtual interface created by another customer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPublicVirtualInterface.html
   */
  public toConfirmPublicVirtualInterface() {
    return this.to('ConfirmPublicVirtualInterface');
  }

  /**
   * Accept ownership of a transit virtual interface created by another customer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmTransitVirtualInterface.html
   */
  public toConfirmTransitVirtualInterface() {
    return this.to('ConfirmTransitVirtualInterface');
  }

  /**
   * Creates a BGP peer on the specified virtual interface.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateBGPPeer.html
   */
  public toCreateBGPPeer() {
    return this.to('CreateBGPPeer');
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
    return this.to('CreateConnection');
  }

  /**
   * Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGateway.html
   */
  public toCreateDirectConnectGateway() {
    return this.to('CreateDirectConnectGateway');
  }

  /**
   * Creates an association between a Direct Connect gateway and a virtual private gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociation.html
   */
  public toCreateDirectConnectGatewayAssociation() {
    return this.to('CreateDirectConnectGatewayAssociation');
  }

  /**
   * Creates a proposal to associate the specified virtual private gateway with the specified Direct Connect gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociationProposal.html
   */
  public toCreateDirectConnectGatewayAssociationProposal() {
    return this.to('CreateDirectConnectGatewayAssociationProposal');
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
    return this.to('CreateInterconnect');
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
    return this.to('CreateLag');
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
    return this.to('CreatePrivateVirtualInterface');
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
    return this.to('CreatePublicVirtualInterface');
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
    return this.to('CreateTransitVirtualInterface');
  }

  /**
   * Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteBGPPeer.html
   */
  public toDeleteBGPPeer() {
    return this.to('DeleteBGPPeer');
  }

  /**
   * Deletes the connection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteConnection.html
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Deletes the specified Direct Connect gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGateway.html
   */
  public toDeleteDirectConnectGateway() {
    return this.to('DeleteDirectConnectGateway');
  }

  /**
   * Deletes the association between the specified Direct Connect gateway and virtual private gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociation.html
   */
  public toDeleteDirectConnectGatewayAssociation() {
    return this.to('DeleteDirectConnectGatewayAssociation');
  }

  /**
   * Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociationProposal.html
   */
  public toDeleteDirectConnectGatewayAssociationProposal() {
    return this.to('DeleteDirectConnectGatewayAssociationProposal');
  }

  /**
   * Deletes the specified interconnect.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteInterconnect.html
   */
  public toDeleteInterconnect() {
    return this.to('DeleteInterconnect');
  }

  /**
   * Deletes the specified link aggregation group (LAG).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteLag.html
   */
  public toDeleteLag() {
    return this.to('DeleteLag');
  }

  /**
   * Deletes a virtual interface.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteVirtualInterface.html
   */
  public toDeleteVirtualInterface() {
    return this.to('DeleteVirtualInterface');
  }

  /**
   * Returns the LOA-CFA for a Connection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionLoa.html
   */
  public toDescribeConnectionLoa() {
    return this.to('DescribeConnectionLoa');
  }

  /**
   * Displays all connections in this region.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnections.html
   */
  public toDescribeConnections() {
    return this.to('DescribeConnections');
  }

  /**
   * Return a list of connections that have been provisioned on the given interconnect.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionsOnInterconnect.html
   */
  public toDescribeConnectionsOnInterconnect() {
    return this.to('DescribeConnectionsOnInterconnect');
  }

  /**
   * Describes one or more association proposals for connection between a virtual private gateway and a Direct Connect gateway.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociationProposals.html
   */
  public toDescribeDirectConnectGatewayAssociationProposals() {
    return this.to('DescribeDirectConnectGatewayAssociationProposals');
  }

  /**
   * Lists the associations between your Direct Connect gateways and virtual private gateways.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociations.html
   */
  public toDescribeDirectConnectGatewayAssociations() {
    return this.to('DescribeDirectConnectGatewayAssociations');
  }

  /**
   * Lists the attachments between your Direct Connect gateways and virtual interfaces.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAttachments.html
   */
  public toDescribeDirectConnectGatewayAttachments() {
    return this.to('DescribeDirectConnectGatewayAttachments');
  }

  /**
   * Lists all your Direct Connect gateways or only the specified Direct Connect gateway.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGateways.html
   */
  public toDescribeDirectConnectGateways() {
    return this.to('DescribeDirectConnectGateways');
  }

  /**
   * Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeHostedConnections.html
   */
  public toDescribeHostedConnections() {
    return this.to('DescribeHostedConnections');
  }

  /**
   * Returns the LOA-CFA for an Interconnect.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnectLoa.html
   */
  public toDescribeInterconnectLoa() {
    return this.to('DescribeInterconnectLoa');
  }

  /**
   * Returns a list of interconnects owned by the AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnects.html
   */
  public toDescribeInterconnects() {
    return this.to('DescribeInterconnects');
  }

  /**
   * Describes all your link aggregation groups (LAG) or the specified LAG.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLags.html
   */
  public toDescribeLags() {
    return this.to('DescribeLags');
  }

  /**
   * Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLoa.html
   */
  public toDescribeLoa() {
    return this.to('DescribeLoa');
  }

  /**
   * Returns the list of AWS Direct Connect locations in the current AWS region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html
   */
  public toDescribeLocations() {
    return this.to('DescribeLocations');
  }

  /**
   * Describes the tags associated with the specified AWS Direct Connect resources.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    return this.to('DescribeTags');
  }

  /**
   * Returns a list of virtual private gateways owned by the AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualGateways.html
   */
  public toDescribeVirtualGateways() {
    return this.to('DescribeVirtualGateways');
  }

  /**
   * Displays all virtual interfaces for an AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualInterfaces.html
   */
  public toDescribeVirtualInterfaces() {
    return this.to('DescribeVirtualInterfaces');
  }

  /**
   * Disassociates a connection from a link aggregation group (LAG).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DisassociateConnectionFromLag.html
   */
  public toDisassociateConnectionFromLag() {
    return this.to('DisassociateConnectionFromLag');
  }

  /**
   * Grants permission to remove the association between a MAC Security (MACsec) security key and an AWS Direct Connect dedicated connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DisassociateMacSecKey.html
   */
  public toDisassociateMacSecKey() {
    return this.to('DisassociateMacSecKey');
  }

  /**
   * Lists the virtual interface failover test history.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html
   */
  public toListVirtualInterfaceTestHistory() {
    return this.to('ListVirtualInterfaceTestHistory');
  }

  /**
   * Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StartBgpFailoverTest.html
   */
  public toStartBgpFailoverTest() {
    return this.to('StartBgpFailoverTest');
  }

  /**
   * Stops the virtual interface failover test.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html
   */
  public toStopBgpFailoverTest() {
    return this.to('StopBgpFailoverTest');
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
    return this.to('TagResource');
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
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the AWS Direct Connect dedicated connection configuration. You can update the following parameters for a connection: The connection name or The connection's MAC Security (MACsec) encryption mode
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateConnection.html
   */
  public toUpdateConnection() {
    return this.to('UpdateConnection');
  }

  /**
   * Updates the specified attributes of the Direct Connect gateway association.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateDirectConnectGatewayAssociation.html
   */
  public toUpdateDirectConnectGatewayAssociation() {
    return this.to('UpdateDirectConnectGatewayAssociation');
  }

  /**
   * Updates the attributes of the specified link aggregation group (LAG).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateLag.html
   */
  public toUpdateLag() {
    return this.to('UpdateLag');
  }

  /**
   * Updates the specified attributes of the specified virtual private interface.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateVirtualInterfaceAttributes.html
   */
  public toUpdateVirtualInterfaceAttributes() {
    return this.to('UpdateVirtualInterfaceAttributes');
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
      "AssociateMacSecKey",
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
      "DisassociateMacSecKey",
      "StartBgpFailoverTest",
      "StopBgpFailoverTest",
      "UpdateConnection",
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
