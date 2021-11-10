import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a proposal request to attach a virtual private gateway to a Direct Connect gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AcceptDirectConnectGatewayAssociationProposal.html
   */
  public toAcceptDirectConnectGatewayAssociationProposal() {
    return this.to('AcceptDirectConnectGatewayAssociationProposal');
  }

  /**
   * Grants permission to create a hosted connection on an interconnect
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateConnectionOnInterconnect.html
   */
  public toAllocateConnectionOnInterconnect() {
    return this.to('AllocateConnectionOnInterconnect');
  }

  /**
   * Grants permission to create a new hosted connection between a AWS Direct Connect partner's network and a specific AWS Direct Connect location
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
   * Grants permission to provision a private virtual interface to be owned by a different customer
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
   * Grants permission to provision a public virtual interface to be owned by a different customer
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
   * Grants permission to provision a transit virtual interface to be owned by a different customer
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
   * Grants permission to associate a connection with a LAG
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateConnectionWithLag.html
   */
  public toAssociateConnectionWithLag() {
    return this.to('AssociateConnectionWithLag');
  }

  /**
   * Grants permission to associate a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect
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
   * Grants permission to associate a virtual interface with a specified link aggregation group (LAG) or connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateVirtualInterface.html
   */
  public toAssociateVirtualInterface() {
    return this.to('AssociateVirtualInterface');
  }

  /**
   * Grants permission to confirm the creation of a hosted connection on an interconnect
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmConnection.html
   */
  public toConfirmConnection() {
    return this.to('ConfirmConnection');
  }

  /**
   * Grants permission to confirm the the terms of agreement when creating the connection or link aggregation group (LAG)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmCustomerAgreement.html
   */
  public toConfirmCustomerAgreement() {
    return this.to('ConfirmCustomerAgreement');
  }

  /**
   * Grants permission to accept ownership of a private virtual interface created by another customer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPrivateVirtualInterface.html
   */
  public toConfirmPrivateVirtualInterface() {
    return this.to('ConfirmPrivateVirtualInterface');
  }

  /**
   * Grants permission to accept ownership of a public virtual interface created by another customer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPublicVirtualInterface.html
   */
  public toConfirmPublicVirtualInterface() {
    return this.to('ConfirmPublicVirtualInterface');
  }

  /**
   * Grants permission to accept ownership of a transit virtual interface created by another customer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmTransitVirtualInterface.html
   */
  public toConfirmTransitVirtualInterface() {
    return this.to('ConfirmTransitVirtualInterface');
  }

  /**
   * Grants permission to create a BGP peer on the specified virtual interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateBGPPeer.html
   */
  public toCreateBGPPeer() {
    return this.to('CreateBGPPeer');
  }

  /**
   * Grants permission to create a new connection between the customer network and a specific AWS Direct Connect location
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
   * Grants permission to create a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGateway.html
   */
  public toCreateDirectConnectGateway() {
    return this.to('CreateDirectConnectGateway');
  }

  /**
   * Grants permission to create an association between a Direct Connect gateway and a virtual private gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociation.html
   */
  public toCreateDirectConnectGatewayAssociation() {
    return this.to('CreateDirectConnectGatewayAssociation');
  }

  /**
   * Grants permission to create a proposal to associate the specified virtual private gateway with the specified Direct Connect gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociationProposal.html
   */
  public toCreateDirectConnectGatewayAssociationProposal() {
    return this.to('CreateDirectConnectGatewayAssociationProposal');
  }

  /**
   * Grants permission to create a new interconnect between a AWS Direct Connect partner's network and a specific AWS Direct Connect location
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
   * Grants permission to create a link aggregation group (LAG) with the specified number of bundled physical connections between the customer network and a specific AWS Direct Connect location
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
   * Grants permission to create a new private virtual interface
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
   * Grants permission to create a new public virtual interface
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
   * Grants permission to create a new transit virtual interface
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
   * Grants permission to delete the specified BGP peer on the specified virtual interface with the specified customer address and ASN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteBGPPeer.html
   */
  public toDeleteBGPPeer() {
    return this.to('DeleteBGPPeer');
  }

  /**
   * Grants permission to delete the connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteConnection.html
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to delete the specified Direct Connect gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGateway.html
   */
  public toDeleteDirectConnectGateway() {
    return this.to('DeleteDirectConnectGateway');
  }

  /**
   * Grants permission to delete the association between the specified Direct Connect gateway and virtual private gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociation.html
   */
  public toDeleteDirectConnectGatewayAssociation() {
    return this.to('DeleteDirectConnectGatewayAssociation');
  }

  /**
   * Grants permission to delete the association proposal request between the specified Direct Connect gateway and virtual private gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociationProposal.html
   */
  public toDeleteDirectConnectGatewayAssociationProposal() {
    return this.to('DeleteDirectConnectGatewayAssociationProposal');
  }

  /**
   * Grants permission to delete the specified interconnect
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteInterconnect.html
   */
  public toDeleteInterconnect() {
    return this.to('DeleteInterconnect');
  }

  /**
   * Grants permission to delete the specified link aggregation group (LAG)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteLag.html
   */
  public toDeleteLag() {
    return this.to('DeleteLag');
  }

  /**
   * Grants permission to delete a virtual interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteVirtualInterface.html
   */
  public toDeleteVirtualInterface() {
    return this.to('DeleteVirtualInterface');
  }

  /**
   * Grants permission to describe the LOA-CFA for a Connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionLoa.html
   */
  public toDescribeConnectionLoa() {
    return this.to('DescribeConnectionLoa');
  }

  /**
   * Grants permission to describe all connections in this region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnections.html
   */
  public toDescribeConnections() {
    return this.to('DescribeConnections');
  }

  /**
   * Grants permission to describe a list of connections that have been provisioned on the given interconnect
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionsOnInterconnect.html
   */
  public toDescribeConnectionsOnInterconnect() {
    return this.to('DescribeConnectionsOnInterconnect');
  }

  /**
   * Grants permission to view a list of customer agreements, along with their signed status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartner
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeCustomerMetadata.html
   */
  public toDescribeCustomerMetadata() {
    return this.to('DescribeCustomerMetadata');
  }

  /**
   * Grants permission to describe one or more association proposals for connection between a virtual private gateway and a Direct Connect gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociationProposals.html
   */
  public toDescribeDirectConnectGatewayAssociationProposals() {
    return this.to('DescribeDirectConnectGatewayAssociationProposals');
  }

  /**
   * Grants permission to describe the associations between your Direct Connect gateways and virtual private gateways
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociations.html
   */
  public toDescribeDirectConnectGatewayAssociations() {
    return this.to('DescribeDirectConnectGatewayAssociations');
  }

  /**
   * Grants permission to describe the attachments between your Direct Connect gateways and virtual interfaces
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAttachments.html
   */
  public toDescribeDirectConnectGatewayAttachments() {
    return this.to('DescribeDirectConnectGatewayAttachments');
  }

  /**
   * Grants permission to describe all your Direct Connect gateways or only the specified Direct Connect gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGateways.html
   */
  public toDescribeDirectConnectGateways() {
    return this.to('DescribeDirectConnectGateways');
  }

  /**
   * Grants permission to describe the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeHostedConnections.html
   */
  public toDescribeHostedConnections() {
    return this.to('DescribeHostedConnections');
  }

  /**
   * Grants permission to describe the LOA-CFA for an Interconnect
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnectLoa.html
   */
  public toDescribeInterconnectLoa() {
    return this.to('DescribeInterconnectLoa');
  }

  /**
   * Grants permission to describe a list of interconnects owned by the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnects.html
   */
  public toDescribeInterconnects() {
    return this.to('DescribeInterconnects');
  }

  /**
   * Grants permission to describe all your link aggregation groups (LAG) or the specified LAG
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLags.html
   */
  public toDescribeLags() {
    return this.to('DescribeLags');
  }

  /**
   * Grants permission to describe the LOA-CFA for a connection, interconnect, or link aggregation group (LAG)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLoa.html
   */
  public toDescribeLoa() {
    return this.to('DescribeLoa');
  }

  /**
   * Grants permission to describe the list of AWS Direct Connect locations in the current AWS region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html
   */
  public toDescribeLocations() {
    return this.to('DescribeLocations');
  }

  /**
   * Grants permission to describe Details about the router for a virtual interface
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeRouterConfiguration.html
   */
  public toDescribeRouterConfiguration() {
    return this.to('DescribeRouterConfiguration');
  }

  /**
   * Grants permission to describe the tags associated with the specified AWS Direct Connect resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    return this.to('DescribeTags');
  }

  /**
   * Grants permission to describe a list of virtual private gateways owned by the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualGateways.html
   */
  public toDescribeVirtualGateways() {
    return this.to('DescribeVirtualGateways');
  }

  /**
   * Grants permission to describe all virtual interfaces for an AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualInterfaces.html
   */
  public toDescribeVirtualInterfaces() {
    return this.to('DescribeVirtualInterfaces');
  }

  /**
   * Grants permission to disassociate a connection from a link aggregation group (LAG)
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
   * Grants permission to list the virtual interface failover test history
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html
   */
  public toListVirtualInterfaceTestHistory() {
    return this.to('ListVirtualInterfaceTestHistory');
  }

  /**
   * Grants permission to start the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StartBgpFailoverTest.html
   */
  public toStartBgpFailoverTest() {
    return this.to('StartBgpFailoverTest');
  }

  /**
   * Grants permission to stop the virtual interface failover test
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html
   */
  public toStopBgpFailoverTest() {
    return this.to('StopBgpFailoverTest');
  }

  /**
   * Grants permission to add the specified tags to the specified AWS Direct Connect resource. Each resource can have a maximum of 50 tags
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
   * Grants permission to remove one or more tags from the specified AWS Direct Connect resource
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
   * Grants permission to update the name of a Direct Connect gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateDirectConnectGateway.html
   */
  public toUpdateDirectConnectGateway() {
    return this.to('UpdateDirectConnectGateway');
  }

  /**
   * Grants permission to update the specified attributes of the Direct Connect gateway association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateDirectConnectGatewayAssociation.html
   */
  public toUpdateDirectConnectGatewayAssociation() {
    return this.to('UpdateDirectConnectGatewayAssociation');
  }

  /**
   * Grants permission to update the attributes of the specified link aggregation group (LAG)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateLag.html
   */
  public toUpdateLag() {
    return this.to('UpdateLag');
  }

  /**
   * Grants permission to update the specified attributes of the specified virtual private interface
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateVirtualInterfaceAttributes.html
   */
  public toUpdateVirtualInterfaceAttributes() {
    return this.to('UpdateVirtualInterfaceAttributes');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptDirectConnectGatewayAssociationProposal',
      'AllocateConnectionOnInterconnect',
      'AllocateHostedConnection',
      'AllocatePrivateVirtualInterface',
      'AllocatePublicVirtualInterface',
      'AllocateTransitVirtualInterface',
      'AssociateConnectionWithLag',
      'AssociateHostedConnection',
      'AssociateMacSecKey',
      'AssociateVirtualInterface',
      'ConfirmConnection',
      'ConfirmCustomerAgreement',
      'ConfirmPrivateVirtualInterface',
      'ConfirmPublicVirtualInterface',
      'ConfirmTransitVirtualInterface',
      'CreateBGPPeer',
      'CreateConnection',
      'CreateDirectConnectGateway',
      'CreateDirectConnectGatewayAssociation',
      'CreateDirectConnectGatewayAssociationProposal',
      'CreateInterconnect',
      'CreateLag',
      'CreatePrivateVirtualInterface',
      'CreatePublicVirtualInterface',
      'CreateTransitVirtualInterface',
      'DeleteBGPPeer',
      'DeleteConnection',
      'DeleteDirectConnectGateway',
      'DeleteDirectConnectGatewayAssociation',
      'DeleteDirectConnectGatewayAssociationProposal',
      'DeleteInterconnect',
      'DeleteLag',
      'DeleteVirtualInterface',
      'DisassociateConnectionFromLag',
      'DisassociateMacSecKey',
      'StartBgpFailoverTest',
      'StopBgpFailoverTest',
      'UpdateConnection',
      'UpdateDirectConnectGateway',
      'UpdateDirectConnectGatewayAssociation',
      'UpdateLag',
      'UpdateVirtualInterfaceAttributes'
    ],
    Read: [
      'DescribeConnectionLoa',
      'DescribeConnections',
      'DescribeConnectionsOnInterconnect',
      'DescribeCustomerMetadata',
      'DescribeDirectConnectGatewayAssociationProposals',
      'DescribeDirectConnectGatewayAssociations',
      'DescribeDirectConnectGatewayAttachments',
      'DescribeDirectConnectGateways',
      'DescribeHostedConnections',
      'DescribeInterconnectLoa',
      'DescribeInterconnects',
      'DescribeLags',
      'DescribeLoa',
      'DescribeLocations',
      'DescribeRouterConfiguration',
      'DescribeTags',
      'DescribeVirtualGateways',
      'DescribeVirtualInterfaces'
    ],
    List: [
      'ListVirtualInterfaceTestHistory'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
    return this.on(`arn:${ partition || 'aws' }:directconnect:${ region || '*' }:${ account || '*' }:dxcon/${ connectionId }`);
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
    return this.on(`arn:${ partition || 'aws' }:directconnect:${ region || '*' }:${ account || '*' }:dxlag/${ lagId }`);
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
    return this.on(`arn:${ partition || 'aws' }:directconnect:${ region || '*' }:${ account || '*' }:dxvif/${ virtualInterfaceId }`);
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
    return this.on(`arn:${ partition || 'aws' }:directconnect::${ account || '*' }:dx-gateway/${ directConnectGatewayId }`);
  }
}
