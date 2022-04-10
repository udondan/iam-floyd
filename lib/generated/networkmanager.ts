import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [networkmanager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_networkmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Networkmanager extends PolicyStatement {
  public servicePrefix = 'networkmanager';

  /**
   * Statement provider for service [networkmanager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_networkmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept creation of an attachment between a source and destination in a core network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AcceptAttachment.html
   */
  public toAcceptAttachment() {
    return this.to('AcceptAttachment');
  }

  /**
   * Grants permission to associate a Connect Peer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateConnectPeer.html
   */
  public toAssociateConnectPeer() {
    return this.to('AssociateConnectPeer');
  }

  /**
   * Grants permission to associate a customer gateway to a device
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCgwArn()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateCustomerGateway.html
   */
  public toAssociateCustomerGateway() {
    return this.to('AssociateCustomerGateway');
  }

  /**
   * Grants permission to associate a link to a device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateLink.html
   */
  public toAssociateLink() {
    return this.to('AssociateLink');
  }

  /**
   * Grants permission to associate a transit gateway connect peer to a device
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTgwConnectPeerArn()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateTransitGatewayConnectPeer.html
   */
  public toAssociateTransitGatewayConnectPeer() {
    return this.to('AssociateTransitGatewayConnectPeer');
  }

  /**
   * Grants permission to create a Connect attachment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateConnectAttachment.html
   */
  public toCreateConnectAttachment() {
    return this.to('CreateConnectAttachment');
  }

  /**
   * Grants permission to create a Connect Peer connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateConnectPeer.html
   */
  public toCreateConnectPeer() {
    return this.to('CreateConnectPeer');
  }

  /**
   * Grants permission to create a new connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateConnection.html
   */
  public toCreateConnection() {
    return this.to('CreateConnection');
  }

  /**
   * Grants permission to create a new core network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateCoreNetwork.html
   */
  public toCreateCoreNetwork() {
    return this.to('CreateCoreNetwork');
  }

  /**
   * Grants permission to create a new device
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateDevice.html
   */
  public toCreateDevice() {
    return this.to('CreateDevice');
  }

  /**
   * Grants permission to create a new global network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateGlobalNetwork.html
   */
  public toCreateGlobalNetwork() {
    return this.to('CreateGlobalNetwork');
  }

  /**
   * Grants permission to create a new link
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateLink.html
   */
  public toCreateLink() {
    return this.to('CreateLink');
  }

  /**
   * Grants permission to create a new site
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateSite.html
   */
  public toCreateSite() {
    return this.to('CreateSite');
  }

  /**
   * Grants permission to create a site-to-site VPN attachment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVpnConnectionArn()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateSiteToSiteVpnAttachment.html
   */
  public toCreateSiteToSiteVpnAttachment() {
    return this.to('CreateSiteToSiteVpnAttachment');
  }

  /**
   * Grants permission to create a VPC attachment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVpcArn()
   * - .ifSubnetArns()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateVpcAttachment.html
   */
  public toCreateVpcAttachment() {
    return this.to('CreateVpcAttachment');
  }

  /**
   * Grants permission to delete an attachment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteAttachment.html
   */
  public toDeleteAttachment() {
    return this.to('DeleteAttachment');
  }

  /**
   * Grants permission to delete a Connect Peer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteConnectPeer.html
   */
  public toDeleteConnectPeer() {
    return this.to('DeleteConnectPeer');
  }

  /**
   * Grants permission to delete a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteConnection.html
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to delete a core network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteCoreNetwork.html
   */
  public toDeleteCoreNetwork() {
    return this.to('DeleteCoreNetwork');
  }

  /**
   * Grants permission to delete the core network policy version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteCoreNetworkPolicyVersion.html
   */
  public toDeleteCoreNetworkPolicyVersion() {
    return this.to('DeleteCoreNetworkPolicyVersion');
  }

  /**
   * Grants permission to delete a device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteDevice.html
   */
  public toDeleteDevice() {
    return this.to('DeleteDevice');
  }

  /**
   * Grants permission to delete a global network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteGlobalNetwork.html
   */
  public toDeleteGlobalNetwork() {
    return this.to('DeleteGlobalNetwork');
  }

  /**
   * Grants permission to delete a link
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteLink.html
   */
  public toDeleteLink() {
    return this.to('DeleteLink');
  }

  /**
   * Grants permission to delete a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteSite.html
   */
  public toDeleteSite() {
    return this.to('DeleteSite');
  }

  /**
   * Grants permission to deregister a transit gateway from a global network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTgwArn()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeregisterTransitGateway.html
   */
  public toDeregisterTransitGateway() {
    return this.to('DeregisterTransitGateway');
  }

  /**
   * Grants permission to describe global networks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DescribeGlobalNetworks.html
   */
  public toDescribeGlobalNetworks() {
    return this.to('DescribeGlobalNetworks');
  }

  /**
   * Grants permission to disassociate a Connect Peer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateConnectPeer.html
   */
  public toDisassociateConnectPeer() {
    return this.to('DisassociateConnectPeer');
  }

  /**
   * Grants permission to disassociate a customer gateway from a device
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCgwArn()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateCustomerGateway.html
   */
  public toDisassociateCustomerGateway() {
    return this.to('DisassociateCustomerGateway');
  }

  /**
   * Grants permission to disassociate a link from a device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateLink.html
   */
  public toDisassociateLink() {
    return this.to('DisassociateLink');
  }

  /**
   * Grants permission to disassociate a transit gateway connect peer from a device
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTgwConnectPeerArn()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateTransitGatewayConnectPeer.html
   */
  public toDisassociateTransitGatewayConnectPeer() {
    return this.to('DisassociateTransitGatewayConnectPeer');
  }

  /**
   * Grants permission to apply changes to the core network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ExecuteCoreNetworkChangeSet.html
   */
  public toExecuteCoreNetworkChangeSet() {
    return this.to('ExecuteCoreNetworkChangeSet');
  }

  /**
   * Grants permission to retrieve a Connect attachment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnectAttachment.html
   */
  public toGetConnectAttachment() {
    return this.to('GetConnectAttachment');
  }

  /**
   * Grants permission to retrieve a Connect Peer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnectPeer.html
   */
  public toGetConnectPeer() {
    return this.to('GetConnectPeer');
  }

  /**
   * Grants permission to describe Connect Peer associations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnectPeerAssociations.html
   */
  public toGetConnectPeerAssociations() {
    return this.to('GetConnectPeerAssociations');
  }

  /**
   * Grants permission to describe connections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnections.html
   */
  public toGetConnections() {
    return this.to('GetConnections');
  }

  /**
   * Grants permission to retrieve a core network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCoreNetwork.html
   */
  public toGetCoreNetwork() {
    return this.to('GetCoreNetwork');
  }

  /**
   * Grants permission to retrieve a list of core network change sets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCoreNetworkChangeSet.html
   */
  public toGetCoreNetworkChangeSet() {
    return this.to('GetCoreNetworkChangeSet');
  }

  /**
   * Grants permission to retrieve core network policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCoreNetworkPolicy.html
   */
  public toGetCoreNetworkPolicy() {
    return this.to('GetCoreNetworkPolicy');
  }

  /**
   * Grants permission to describe customer gateway associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCustomerGatewayAssociations.html
   */
  public toGetCustomerGatewayAssociations() {
    return this.to('GetCustomerGatewayAssociations');
  }

  /**
   * Grants permission to describe devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetDevices.html
   */
  public toGetDevices() {
    return this.to('GetDevices');
  }

  /**
   * Grants permission to describe link associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetLinkAssociations.html
   */
  public toGetLinkAssociations() {
    return this.to('GetLinkAssociations');
  }

  /**
   * Grants permission to describe links
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetLinks.html
   */
  public toGetLinks() {
    return this.to('GetLinks');
  }

  /**
   * Grants permission to return the number of resources for a global network grouped by type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkResourceCounts.html
   */
  public toGetNetworkResourceCounts() {
    return this.to('GetNetworkResourceCounts');
  }

  /**
   * Grants permission to retrieve related resources for a resource within the global network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkResourceRelationships.html
   */
  public toGetNetworkResourceRelationships() {
    return this.to('GetNetworkResourceRelationships');
  }

  /**
   * Grants permission to retrieve a global network resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkResources.html
   */
  public toGetNetworkResources() {
    return this.to('GetNetworkResources');
  }

  /**
   * Grants permission to retrieve routes for a route table within the global network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkRoutes.html
   */
  public toGetNetworkRoutes() {
    return this.to('GetNetworkRoutes');
  }

  /**
   * Grants permission to retrieve network telemetry objects for the global network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkTelemetry.html
   */
  public toGetNetworkTelemetry() {
    return this.to('GetNetworkTelemetry');
  }

  /**
   * Grants permission to retrieve a resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to retrieve a route analysis configuration and result
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetRouteAnalysis.html
   */
  public toGetRouteAnalysis() {
    return this.to('GetRouteAnalysis');
  }

  /**
   * Grants permission to retrieve a site-to-site VPN attachment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetSiteToSiteVpnAttachment.html
   */
  public toGetSiteToSiteVpnAttachment() {
    return this.to('GetSiteToSiteVpnAttachment');
  }

  /**
   * Grants permission to describe global networks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetSites.html
   */
  public toGetSites() {
    return this.to('GetSites');
  }

  /**
   * Grants permission to describe transit gateway connect peer associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayConnectPeerAssociations.html
   */
  public toGetTransitGatewayConnectPeerAssociations() {
    return this.to('GetTransitGatewayConnectPeerAssociations');
  }

  /**
   * Grants permission to describe transit gateway registrations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayRegistrations.html
   */
  public toGetTransitGatewayRegistrations() {
    return this.to('GetTransitGatewayRegistrations');
  }

  /**
   * Grants permission to retrieve a VPC attachment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetVpcAttachment.html
   */
  public toGetVpcAttachment() {
    return this.to('GetVpcAttachment');
  }

  /**
   * Grants permission to describe attachments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListAttachments.html
   */
  public toListAttachments() {
    return this.to('ListAttachments');
  }

  /**
   * Grants permission to describe Connect Peers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListConnectPeers.html
   */
  public toListConnectPeers() {
    return this.to('ListConnectPeers');
  }

  /**
   * Grants permission to list core network policy versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListCoreNetworkPolicyVersions.html
   */
  public toListCoreNetworkPolicyVersions() {
    return this.to('ListCoreNetworkPolicyVersions');
  }

  /**
   * Grants permission to list core networks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListCoreNetworks.html
   */
  public toListCoreNetworks() {
    return this.to('ListCoreNetworks');
  }

  /**
   * Grants permission to list tags for a Network Manager resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create a core network policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_PutCoreNetworkPolicy.html
   */
  public toPutCoreNetworkPolicy() {
    return this.to('PutCoreNetworkPolicy');
  }

  /**
   * Grants permission to create or update a resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to register a transit gateway to a global network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTgwArn()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RegisterTransitGateway.html
   */
  public toRegisterTransitGateway() {
    return this.to('RegisterTransitGateway');
  }

  /**
   * Grants permission to reject attachment request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RejectAttachment.html
   */
  public toRejectAttachment() {
    return this.to('RejectAttachment');
  }

  /**
   * Grants permission to restore the core network policy to a previous version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RestoreCoreNetworkPolicyVersion.html
   */
  public toRestoreCoreNetworkPolicyVersion() {
    return this.to('RestoreCoreNetworkPolicyVersion');
  }

  /**
   * Grants permission to start a route analysis and stores analysis configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_StartRouteAnalysis.html
   */
  public toStartRouteAnalysis() {
    return this.to('StartRouteAnalysis');
  }

  /**
   * Grants permission to tag a Network Manager resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a Network Manager resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateConnection.html
   */
  public toUpdateConnection() {
    return this.to('UpdateConnection');
  }

  /**
   * Grants permission to update a core network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateCoreNetwork.html
   */
  public toUpdateCoreNetwork() {
    return this.to('UpdateCoreNetwork');
  }

  /**
   * Grants permission to update a device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateDevice.html
   */
  public toUpdateDevice() {
    return this.to('UpdateDevice');
  }

  /**
   * Grants permission to update a global network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateGlobalNetwork.html
   */
  public toUpdateGlobalNetwork() {
    return this.to('UpdateGlobalNetwork');
  }

  /**
   * Grants permission to update a link
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateLink.html
   */
  public toUpdateLink() {
    return this.to('UpdateLink');
  }

  /**
   * Grants permission to add or update metadata key/value pairs on network resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateNetworkResourceMetadata.html
   */
  public toUpdateNetworkResourceMetadata() {
    return this.to('UpdateNetworkResourceMetadata');
  }

  /**
   * Grants permission to update a site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateSite.html
   */
  public toUpdateSite() {
    return this.to('UpdateSite');
  }

  /**
   * Grants permission to update a VPC attachment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifSubnetArns()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateVpcAttachment.html
   */
  public toUpdateVpcAttachment() {
    return this.to('UpdateVpcAttachment');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptAttachment',
      'AssociateConnectPeer',
      'AssociateCustomerGateway',
      'AssociateLink',
      'AssociateTransitGatewayConnectPeer',
      'CreateConnectAttachment',
      'CreateConnectPeer',
      'CreateConnection',
      'CreateCoreNetwork',
      'CreateDevice',
      'CreateGlobalNetwork',
      'CreateLink',
      'CreateSite',
      'CreateSiteToSiteVpnAttachment',
      'CreateVpcAttachment',
      'DeleteAttachment',
      'DeleteConnectPeer',
      'DeleteConnection',
      'DeleteCoreNetwork',
      'DeleteCoreNetworkPolicyVersion',
      'DeleteDevice',
      'DeleteGlobalNetwork',
      'DeleteLink',
      'DeleteResourcePolicy',
      'DeleteSite',
      'DeregisterTransitGateway',
      'DisassociateConnectPeer',
      'DisassociateCustomerGateway',
      'DisassociateLink',
      'DisassociateTransitGatewayConnectPeer',
      'ExecuteCoreNetworkChangeSet',
      'PutCoreNetworkPolicy',
      'PutResourcePolicy',
      'RegisterTransitGateway',
      'RejectAttachment',
      'RestoreCoreNetworkPolicyVersion',
      'StartRouteAnalysis',
      'UpdateConnection',
      'UpdateCoreNetwork',
      'UpdateDevice',
      'UpdateGlobalNetwork',
      'UpdateLink',
      'UpdateNetworkResourceMetadata',
      'UpdateSite',
      'UpdateVpcAttachment'
    ],
    List: [
      'DescribeGlobalNetworks',
      'GetConnections',
      'GetCustomerGatewayAssociations',
      'GetDevices',
      'GetLinkAssociations',
      'GetLinks',
      'GetSites',
      'GetTransitGatewayConnectPeerAssociations',
      'GetTransitGatewayRegistrations',
      'ListAttachments',
      'ListConnectPeers',
      'ListCoreNetworkPolicyVersions',
      'ListCoreNetworks'
    ],
    Read: [
      'GetConnectAttachment',
      'GetConnectPeer',
      'GetConnectPeerAssociations',
      'GetCoreNetwork',
      'GetCoreNetworkChangeSet',
      'GetCoreNetworkPolicy',
      'GetNetworkResourceCounts',
      'GetNetworkResourceRelationships',
      'GetNetworkResources',
      'GetNetworkRoutes',
      'GetNetworkTelemetry',
      'GetResourcePolicy',
      'GetRouteAnalysis',
      'GetSiteToSiteVpnAttachment',
      'GetVpcAttachment',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type global-network to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGlobalNetwork(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:networkmanager::${ account || '*' }:global-network/${ resourceId }`);
  }

  /**
   * Adds a resource of type site to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   *
   * @param globalNetworkId - Identifier for the globalNetworkId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSite(globalNetworkId: string, resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:networkmanager::${ account || '*' }:site/${ globalNetworkId }/${ resourceId }`);
  }

  /**
   * Adds a resource of type link to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   *
   * @param globalNetworkId - Identifier for the globalNetworkId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLink(globalNetworkId: string, resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:networkmanager::${ account || '*' }:link/${ globalNetworkId }/${ resourceId }`);
  }

  /**
   * Adds a resource of type device to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   *
   * @param globalNetworkId - Identifier for the globalNetworkId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevice(globalNetworkId: string, resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:networkmanager::${ account || '*' }:device/${ globalNetworkId }/${ resourceId }`);
  }

  /**
   * Adds a resource of type connection to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   *
   * @param globalNetworkId - Identifier for the globalNetworkId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnection(globalNetworkId: string, resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:networkmanager::${ account || '*' }:connection/${ globalNetworkId }/${ resourceId }`);
  }

  /**
   * Adds a resource of type core-network to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCoreNetwork(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:networkmanager::${ account || '*' }:core-network/${ resourceId }`);
  }

  /**
   * Adds a resource of type attachment to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAttachment(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:networkmanager::${ account || '*' }:attachment/${ resourceId }`);
  }

  /**
   * Adds a resource of type connect-peer to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnectPeer(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:networkmanager::${ account || '*' }:connect-peer/${ resourceId }`);
  }

  /**
   * Filters access by which customer gateways can be associated or disassociated
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html
   *
   * Applies to actions:
   * - .toAssociateCustomerGateway()
   * - .toDisassociateCustomerGateway()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCgwArn(value: string | string[], operator?: Operator | string) {
    return this.if(`cgwArn`, value, operator || 'StringLike');
  }

  /**
   * Filters access by which VPC subnets can be added or removed from a VPC attachment
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html
   *
   * Applies to actions:
   * - .toCreateVpcAttachment()
   * - .toUpdateVpcAttachment()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubnetArns(value: string | string[], operator?: Operator | string) {
    return this.if(`subnetArns`, value, operator || 'StringLike');
  }

  /**
   * Filters access by which transit gateways can be registered or deregistered
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html
   *
   * Applies to actions:
   * - .toDeregisterTransitGateway()
   * - .toRegisterTransitGateway()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTgwArn(value: string | string[], operator?: Operator | string) {
    return this.if(`tgwArn`, value, operator || 'StringLike');
  }

  /**
   * Filters access by which transit gateway connect peers can be associated or disassociated
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html
   *
   * Applies to actions:
   * - .toAssociateTransitGatewayConnectPeer()
   * - .toDisassociateTransitGatewayConnectPeer()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTgwConnectPeerArn(value: string | string[], operator?: Operator | string) {
    return this.if(`tgwConnectPeerArn`, value, operator || 'StringLike');
  }

  /**
   * Filters access by which VPC can be used to a create/update attachment
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html
   *
   * Applies to actions:
   * - .toCreateVpcAttachment()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcArn(value: string | string[], operator?: Operator | string) {
    return this.if(`vpcArn`, value, operator || 'StringLike');
  }

  /**
   * Filters access by which Site-to-Site VPN can be used to a create/update attachment
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html
   *
   * Applies to actions:
   * - .toCreateSiteToSiteVpnAttachment()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpnConnectionArn(value: string | string[], operator?: Operator | string) {
    return this.if(`vpnConnectionArn`, value, operator || 'StringLike');
  }
}
