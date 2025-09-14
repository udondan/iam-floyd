import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [mediaconnect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediaconnect.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediaconnect extends PolicyStatement {
  public servicePrefix = 'mediaconnect';

  /**
   * Statement provider for service [mediaconnect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediaconnect.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add outputs to an existing bridge
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_AddBridgeOutputs.html
   */
  public toAddBridgeOutputs() {
    return this.to('AddBridgeOutputs');
  }

  /**
   * Grants permission to add sources to an existing bridge
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_AddBridgeSources.html
   */
  public toAddBridgeSources() {
    return this.to('AddBridgeSources');
  }

  /**
   * Grants permission to add media streams to any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_AddFlowMediaStreams.html
   */
  public toAddFlowMediaStreams() {
    return this.to('AddFlowMediaStreams');
  }

  /**
   * Grants permission to add outputs to any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_AddFlowOutputs.html
   */
  public toAddFlowOutputs() {
    return this.to('AddFlowOutputs');
  }

  /**
   * Grants permission to add sources to any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_AddFlowSources.html
   */
  public toAddFlowSources() {
    return this.to('AddFlowSources');
  }

  /**
   * Grants permission to add VPC interfaces to any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_AddFlowVpcInterfaces.html
   */
  public toAddFlowVpcInterfaces() {
    return this.to('AddFlowVpcInterfaces');
  }

  /**
   * Grants permission to create bridges
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_CreateBridge.html
   */
  public toCreateBridge() {
    return this.to('CreateBridge');
  }

  /**
   * Grants permission to create flows
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_CreateFlow.html
   */
  public toCreateFlow() {
    return this.to('CreateFlow');
  }

  /**
   * Grants permission to create gateways
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_CreateGateway.html
   */
  public toCreateGateway() {
    return this.to('CreateGateway');
  }

  /**
   * Grants permission to delete bridges
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_DeleteBridge.html
   */
  public toDeleteBridge() {
    return this.to('DeleteBridge');
  }

  /**
   * Grants permission to delete flows
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_DeleteFlow.html
   */
  public toDeleteFlow() {
    return this.to('DeleteFlow');
  }

  /**
   * Grants permission to delete gateways
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_DeleteGateway.html
   */
  public toDeleteGateway() {
    return this.to('DeleteGateway');
  }

  /**
   * Grants permission to deregister gateway instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_DeregisterGatewayInstance.html
   */
  public toDeregisterGatewayInstance() {
    return this.to('DeregisterGatewayInstance');
  }

  /**
   * Grants permission to display the details of a bridge
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_DescribeBridge.html
   */
  public toDescribeBridge() {
    return this.to('DescribeBridge');
  }

  /**
   * Grants permission to display the details of a flow including the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_DescribeFlow.html
   */
  public toDescribeFlow() {
    return this.to('DescribeFlow');
  }

  /**
   * Grants permission to view information about the flow's source transport stream and programs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_DescribeFlowSourceMetadata.html
   */
  public toDescribeFlowSourceMetadata() {
    return this.to('DescribeFlowSourceMetadata');
  }

  /**
   * Grants permission to view flow's source thumbnail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_DescribeFlowSourceThumbnail.html
   */
  public toDescribeFlowSourceThumbnail() {
    return this.to('DescribeFlowSourceThumbnail');
  }

  /**
   * Grants permission to display the details of a gateway including the gateway ARN, name, and CIDR blocks, as well as details about the networks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_DescribeGateway.html
   */
  public toDescribeGateway() {
    return this.to('DescribeGateway');
  }

  /**
   * Grants permission to display the details of a gateway instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_DescribeGatewayInstance.html
   */
  public toDescribeGatewayInstance() {
    return this.to('DescribeGatewayInstance');
  }

  /**
   * Grants permission to display the details of an offering
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_DescribeOffering.html
   */
  public toDescribeOffering() {
    return this.to('DescribeOffering');
  }

  /**
   * Grants permission to display the details of a reservation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_DescribeReservation.html
   */
  public toDescribeReservation() {
    return this.to('DescribeReservation');
  }

  /**
   * Grants permission to discover gateway poll endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_DiscoverGatewayPollEndpoint.html
   */
  public toDiscoverGatewayPollEndpoint() {
    return this.to('DiscoverGatewayPollEndpoint');
  }

  /**
   * Grants permission to grant entitlements on any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_GrantFlowEntitlements.html
   */
  public toGrantFlowEntitlements() {
    return this.to('GrantFlowEntitlements');
  }

  /**
   * Grants permission to display a list of bridges that are associated with this account and an optionally specified Arn
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_ListBridges.html
   */
  public toListBridges() {
    return this.to('ListBridges');
  }

  /**
   * Grants permission to display a list of all entitlements that have been granted to the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_ListEntitlements.html
   */
  public toListEntitlements() {
    return this.to('ListEntitlements');
  }

  /**
   * Grants permission to display a list of flows that are associated with this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_ListFlows.html
   */
  public toListFlows() {
    return this.to('ListFlows');
  }

  /**
   * Grants permission to display a list of instances that are associated with this gateway
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_ListGatewayInstances.html
   */
  public toListGatewayInstances() {
    return this.to('ListGatewayInstances');
  }

  /**
   * Grants permission to display a list of gateways that are associated with this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_ListGateways.html
   */
  public toListGateways() {
    return this.to('ListGateways');
  }

  /**
   * Grants permission to display a list of all offerings that are available to the account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_ListOfferings.html
   */
  public toListOfferings() {
    return this.to('ListOfferings');
  }

  /**
   * Grants permission to display a list of all reservations that have been purchased by the account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_ListReservations.html
   */
  public toListReservations() {
    return this.to('ListReservations');
  }

  /**
   * Grants permission to display a list of all tags associated with a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to poll gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_PollGateway.html
   */
  public toPollGateway() {
    return this.to('PollGateway');
  }

  /**
   * Grants permission to purchase an offering
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_PurchaseOffering.html
   */
  public toPurchaseOffering() {
    return this.to('PurchaseOffering');
  }

  /**
   * Grants permission to remove an output of an existing bridge
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_RemoveBridgeOutput.html
   */
  public toRemoveBridgeOutput() {
    return this.to('RemoveBridgeOutput');
  }

  /**
   * Grants permission to remove a source of an existing bridge
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_RemoveBridgeSource.html
   */
  public toRemoveBridgeSource() {
    return this.to('RemoveBridgeSource');
  }

  /**
   * Grants permission to remove media streams from any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_RemoveFlowMediaStream.html
   */
  public toRemoveFlowMediaStream() {
    return this.to('RemoveFlowMediaStream');
  }

  /**
   * Grants permission to remove outputs from any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_RemoveFlowOutput.html
   */
  public toRemoveFlowOutput() {
    return this.to('RemoveFlowOutput');
  }

  /**
   * Grants permission to remove sources from any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_RemoveFlowSource.html
   */
  public toRemoveFlowSource() {
    return this.to('RemoveFlowSource');
  }

  /**
   * Grants permission to remove VPC interfaces from any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_RemoveFlowVpcInterface.html
   */
  public toRemoveFlowVpcInterface() {
    return this.to('RemoveFlowVpcInterface');
  }

  /**
   * Grants permission to revoke entitlements on any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_RevokeFlowEntitlement.html
   */
  public toRevokeFlowEntitlement() {
    return this.to('RevokeFlowEntitlement');
  }

  /**
   * Grants permission to start flows
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_StartFlow.html
   */
  public toStartFlow() {
    return this.to('StartFlow');
  }

  /**
   * Grants permission to stop flows
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_StopFlow.html
   */
  public toStopFlow() {
    return this.to('StopFlow');
  }

  /**
   * Grants permission to submit gateway state change
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_SubmitGatewayStateChange.html
   */
  public toSubmitGatewayStateChange() {
    return this.to('SubmitGatewayStateChange');
  }

  /**
   * Grants permission to associate tags with resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update bridges
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_UpdateBridge.html
   */
  public toUpdateBridge() {
    return this.to('UpdateBridge');
  }

  /**
   * Grants permission to update an output of an existing bridge
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_UpdateBridgeOutput.html
   */
  public toUpdateBridgeOutput() {
    return this.to('UpdateBridgeOutput');
  }

  /**
   * Grants permission to update a source of an existing bridge
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_UpdateBridgeSource.html
   */
  public toUpdateBridgeSource() {
    return this.to('UpdateBridgeSource');
  }

  /**
   * Grants permission to update the state of an existing bridge
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_UpdateBridgeState.html
   */
  public toUpdateBridgeState() {
    return this.to('UpdateBridgeState');
  }

  /**
   * Grants permission to update flows
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_UpdateFlow.html
   */
  public toUpdateFlow() {
    return this.to('UpdateFlow');
  }

  /**
   * Grants permission to update entitlements on any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_UpdateFlowEntitlement.html
   */
  public toUpdateFlowEntitlement() {
    return this.to('UpdateFlowEntitlement');
  }

  /**
   * Grants permission to update media streams on any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_UpdateFlowMediaStream.html
   */
  public toUpdateFlowMediaStream() {
    return this.to('UpdateFlowMediaStream');
  }

  /**
   * Grants permission to update outputs on any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_UpdateFlowOutput.html
   */
  public toUpdateFlowOutput() {
    return this.to('UpdateFlowOutput');
  }

  /**
   * Grants permission to update the source of any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_UpdateFlowSource.html
   */
  public toUpdateFlowSource() {
    return this.to('UpdateFlowSource');
  }

  /**
   * Grants permission to update the configuration of an existing Gateway Instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/API_UpdateGatewayInstance.html
   */
  public toUpdateGatewayInstance() {
    return this.to('UpdateGatewayInstance');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddBridgeOutputs',
      'AddBridgeSources',
      'AddFlowMediaStreams',
      'AddFlowOutputs',
      'AddFlowSources',
      'AddFlowVpcInterfaces',
      'CreateBridge',
      'CreateFlow',
      'CreateGateway',
      'DeleteBridge',
      'DeleteFlow',
      'DeleteGateway',
      'DeregisterGatewayInstance',
      'DiscoverGatewayPollEndpoint',
      'GrantFlowEntitlements',
      'PollGateway',
      'PurchaseOffering',
      'RemoveBridgeOutput',
      'RemoveBridgeSource',
      'RemoveFlowMediaStream',
      'RemoveFlowOutput',
      'RemoveFlowSource',
      'RemoveFlowVpcInterface',
      'RevokeFlowEntitlement',
      'StartFlow',
      'StopFlow',
      'SubmitGatewayStateChange',
      'UpdateBridge',
      'UpdateBridgeOutput',
      'UpdateBridgeSource',
      'UpdateBridgeState',
      'UpdateFlow',
      'UpdateFlowEntitlement',
      'UpdateFlowMediaStream',
      'UpdateFlowOutput',
      'UpdateFlowSource',
      'UpdateGatewayInstance'
    ],
    Read: [
      'DescribeBridge',
      'DescribeFlow',
      'DescribeFlowSourceMetadata',
      'DescribeFlowSourceThumbnail',
      'DescribeGateway',
      'DescribeGatewayInstance',
      'DescribeOffering',
      'DescribeReservation',
      'ListTagsForResource'
    ],
    List: [
      'ListBridges',
      'ListEntitlements',
      'ListFlows',
      'ListGatewayInstances',
      'ListGateways',
      'ListOfferings',
      'ListReservations'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Entitlement to the statement
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/ug/entitlements.html
   *
   * @param flowId - Identifier for the flowId.
   * @param entitlementName - Identifier for the entitlementName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEntitlement(flowId: string, entitlementName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mediaconnect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:entitlement:${ flowId }:${ entitlementName }`);
  }

  /**
   * Adds a resource of type Flow to the statement
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/ug/flows.html
   *
   * @param flowId - Identifier for the flowId.
   * @param flowName - Identifier for the flowName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onFlow(flowId: string, flowName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mediaconnect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:flow:${ flowId }:${ flowName }`);
  }

  /**
   * Adds a resource of type Output to the statement
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/ug/outputs.html
   *
   * @param outputId - Identifier for the outputId.
   * @param outputName - Identifier for the outputName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onOutput(outputId: string, outputName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mediaconnect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:output:${ outputId }:${ outputName }`);
  }

  /**
   * Adds a resource of type Source to the statement
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/ug/sources.html
   *
   * @param sourceId - Identifier for the sourceId.
   * @param sourceName - Identifier for the sourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSource(sourceId: string, sourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mediaconnect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:source:${ sourceId }:${ sourceName }`);
  }

  /**
   * Adds a resource of type Gateway to the statement
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/ug/gateway.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param gatewayName - Identifier for the gatewayName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onGateway(gatewayId: string, gatewayName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mediaconnect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:gateway:${ gatewayId }:${ gatewayName }`);
  }

  /**
   * Adds a resource of type Bridge to the statement
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/ug/gateway-components-bridges.html
   *
   * @param flowId - Identifier for the flowId.
   * @param flowName - Identifier for the flowName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBridge(flowId: string, flowName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mediaconnect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:bridge:${ flowId }:${ flowName }`);
  }

  /**
   * Adds a resource of type GatewayInstance to the statement
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/ug/gateway-components-instances.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param gatewayName - Identifier for the gatewayName.
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onGatewayInstance(gatewayId: string, gatewayName: string, instanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mediaconnect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:gateway:${ gatewayId }:${ gatewayName }:instance:${ instanceId }`);
  }
}
