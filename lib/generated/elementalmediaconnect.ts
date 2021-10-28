import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
   * Grants permission to add media streams to any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-mediastreams.html
   */
  public toAddFlowMediaStreams() {
    return this.to('AddFlowMediaStreams');
  }

  /**
   * Grants permission to add outputs to any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs.html
   */
  public toAddFlowOutputs() {
    return this.to('AddFlowOutputs');
  }

  /**
   * Grants permission to add sources to any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-source.html
   */
  public toAddFlowSources() {
    return this.to('AddFlowSources');
  }

  /**
   * Grants permission to add VPC interfaces to any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-vpcinterfaces.html
   */
  public toAddFlowVpcInterfaces() {
    return this.to('AddFlowVpcInterfaces');
  }

  /**
   * Grants permission to create flows
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows.html
   */
  public toCreateFlow() {
    return this.to('CreateFlow');
  }

  /**
   * Grants permission to delete flows
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn.html
   */
  public toDeleteFlow() {
    return this.to('DeleteFlow');
  }

  /**
   * Grants permission to display the details of a flow including the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn.html
   */
  public toDescribeFlow() {
    return this.to('DescribeFlow');
  }

  /**
   * Grants permission to display the details of an offering
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-offerings-offeringarn.html
   */
  public toDescribeOffering() {
    return this.to('DescribeOffering');
  }

  /**
   * Grants permission to display the details of a reservation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-reservations-reservationarn.html
   */
  public toDescribeReservation() {
    return this.to('DescribeReservation');
  }

  /**
   * Grants permission to grant entitlements on any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements.html
   */
  public toGrantFlowEntitlements() {
    return this.to('GrantFlowEntitlements');
  }

  /**
   * Grants permission to display a list of all entitlements that have been granted to the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-entitlements.html
   */
  public toListEntitlements() {
    return this.to('ListEntitlements');
  }

  /**
   * Grants permission to display a list of flows that are associated with this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows.html
   */
  public toListFlows() {
    return this.to('ListFlows');
  }

  /**
   * Grants permission to display a list of all offerings that are available to the account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-offerings.html
   */
  public toListOfferings() {
    return this.to('ListOfferings');
  }

  /**
   * Grants permission to display a list of all reservations that have been purchased by the account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-reservations.html
   */
  public toListReservations() {
    return this.to('ListReservations');
  }

  /**
   * Grants permission to display a list of all tags associated with a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/tags-resourcearn.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to purchase an offering
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-offerings-offeringarn.html
   */
  public toPurchaseOffering() {
    return this.to('PurchaseOffering');
  }

  /**
   * Grants permission to remove media streams from any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-mediastreams-mediastreamname.html
   */
  public toRemoveFlowMediaStream() {
    return this.to('RemoveFlowMediaStream');
  }

  /**
   * Grants permission to remove outputs from any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs-outputarn.html
   */
  public toRemoveFlowOutput() {
    return this.to('RemoveFlowOutput');
  }

  /**
   * Grants permission to remove sources from any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-source-sourcearn.html
   */
  public toRemoveFlowSource() {
    return this.to('RemoveFlowSource');
  }

  /**
   * Grants permission to remove VPC interfaces from any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-vpcinterfaces-vpcinterfacename.html
   */
  public toRemoveFlowVpcInterface() {
    return this.to('RemoveFlowVpcInterface');
  }

  /**
   * Grants permission to revoke entitlements on any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements-entitlementarn.html
   */
  public toRevokeFlowEntitlement() {
    return this.to('RevokeFlowEntitlement');
  }

  /**
   * Grants permission to start flows
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-start-flowarn.html
   */
  public toStartFlow() {
    return this.to('StartFlow');
  }

  /**
   * Grants permission to stop flows
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-stop-flowarn.html
   */
  public toStopFlow() {
    return this.to('StopFlow');
  }

  /**
   * Grants permission to associate tags with resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/tags-resourcearn.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from resources
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/tags-resourcearn.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update flows
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn.html
   */
  public toUpdateFlow() {
    return this.to('UpdateFlow');
  }

  /**
   * Grants permission to update entitlements on any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements-entitlementarn.html
   */
  public toUpdateFlowEntitlement() {
    return this.to('UpdateFlowEntitlement');
  }

  /**
   * Grants permission to update media streams on any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-mediastreams-mediastreamname.html
   */
  public toUpdateFlowMediaStream() {
    return this.to('UpdateFlowMediaStream');
  }

  /**
   * Grants permission to update outputs on any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs-outputarn.html
   */
  public toUpdateFlowOutput() {
    return this.to('UpdateFlowOutput');
  }

  /**
   * Grants permission to update the source of any flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-source-sourcearn.html
   */
  public toUpdateFlowSource() {
    return this.to('UpdateFlowSource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddFlowMediaStreams',
      'AddFlowOutputs',
      'AddFlowSources',
      'AddFlowVpcInterfaces',
      'CreateFlow',
      'DeleteFlow',
      'GrantFlowEntitlements',
      'PurchaseOffering',
      'RemoveFlowMediaStream',
      'RemoveFlowOutput',
      'RemoveFlowSource',
      'RemoveFlowVpcInterface',
      'RevokeFlowEntitlement',
      'StartFlow',
      'StopFlow',
      'UpdateFlow',
      'UpdateFlowEntitlement',
      'UpdateFlowMediaStream',
      'UpdateFlowOutput',
      'UpdateFlowSource'
    ],
    Read: [
      'DescribeFlow',
      'DescribeOffering',
      'DescribeReservation',
      'ListTagsForResource'
    ],
    List: [
      'ListEntitlements',
      'ListFlows',
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEntitlement(flowId: string, entitlementName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mediaconnect:${ region || '*' }:${ account || '*' }:entitlement:${ flowId }:${ entitlementName }`);
  }

  /**
   * Adds a resource of type Flow to the statement
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/ug/flows.html
   *
   * @param flowId - Identifier for the flowId.
   * @param flowName - Identifier for the flowName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFlow(flowId: string, flowName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mediaconnect:${ region || '*' }:${ account || '*' }:flow:${ flowId }:${ flowName }`);
  }

  /**
   * Adds a resource of type Output to the statement
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/ug/outputs.html
   *
   * @param outputId - Identifier for the outputId.
   * @param outputName - Identifier for the outputName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOutput(outputId: string, outputName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mediaconnect:${ region || '*' }:${ account || '*' }:output:${ outputId }:${ outputName }`);
  }

  /**
   * Adds a resource of type Source to the statement
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/ug/sources.html
   *
   * @param sourceId - Identifier for the sourceId.
   * @param sourceName - Identifier for the sourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSource(sourceId: string, sourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mediaconnect:${ region || '*' }:${ account || '*' }:source:${ sourceId }:${ sourceName }`);
  }
}
