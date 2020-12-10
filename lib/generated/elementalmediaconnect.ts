import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add outputs to any flow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs.html
   */
  public toAddFlowOutputs() {
    this.to('mediaconnect:AddFlowOutputs');
    return this;
  }

  /**
   * Grants permission to create flows.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows.html
   */
  public toCreateFlow() {
    this.to('mediaconnect:CreateFlow');
    return this;
  }

  /**
   * Grants permission to delete flows.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn.html
   */
  public toDeleteFlow() {
    this.to('mediaconnect:DeleteFlow');
    return this;
  }

  /**
   * Grants permission to display the details of a flow including the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn.html
   */
  public toDescribeFlow() {
    this.to('mediaconnect:DescribeFlow');
    return this;
  }

  /**
   * Grants permission to grant entitlements on any flow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements.html
   */
  public toGrantFlowEntitlements() {
    this.to('mediaconnect:GrantFlowEntitlements');
    return this;
  }

  /**
   * Grants permission to display a list of all entitlements that have been granted to the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-entitlements.html
   */
  public toListEntitlements() {
    this.to('mediaconnect:ListEntitlements');
    return this;
  }

  /**
   * Grants permission to display a list of flows that are associated with this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows.html
   */
  public toListFlows() {
    this.to('mediaconnect:ListFlows');
    return this;
  }

  /**
   * Grants permission to remove outputs from any flow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs-outputarn.html
   */
  public toRemoveFlowOutput() {
    this.to('mediaconnect:RemoveFlowOutput');
    return this;
  }

  /**
   * Grants permission to revoke entitlements on any flow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements-entitlementarn.html
   */
  public toRevokeFlowEntitlement() {
    this.to('mediaconnect:RevokeFlowEntitlement');
    return this;
  }

  /**
   * Grants permission to start flows.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-start-flowarn.html
   */
  public toStartFlow() {
    this.to('mediaconnect:StartFlow');
    return this;
  }

  /**
   * Grants permission to stop flows.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-stop-flowarn.html
   */
  public toStopFlow() {
    this.to('mediaconnect:StopFlow');
    return this;
  }

  /**
   * Grants permission to update entitlements on any flow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements-entitlementarn.html
   */
  public toUpdateFlowEntitlement() {
    this.to('mediaconnect:UpdateFlowEntitlement');
    return this;
  }

  /**
   * Grants permission to update outputs on any flow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs-outputarn.html
   */
  public toUpdateFlowOutput() {
    this.to('mediaconnect:UpdateFlowOutput');
    return this;
  }

  /**
   * Grants permission to update the source of any flow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-source-sourcearn.html
   */
  public toUpdateFlowSource() {
    this.to('mediaconnect:UpdateFlowSource');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddFlowOutputs",
      "CreateFlow",
      "DeleteFlow",
      "GrantFlowEntitlements",
      "RemoveFlowOutput",
      "RevokeFlowEntitlement",
      "StartFlow",
      "StopFlow",
      "UpdateFlowEntitlement",
      "UpdateFlowOutput",
      "UpdateFlowSource"
    ],
    "Read": [
      "DescribeFlow"
    ],
    "List": [
      "ListEntitlements",
      "ListFlows"
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
    var arn = 'arn:${Partition}:mediaconnect:${Region}:${Account}:entitlement:${FlowId}:${EntitlementName}';
    arn = arn.replace('${FlowId}', flowId);
    arn = arn.replace('${EntitlementName}', entitlementName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:mediaconnect:${Region}:${Account}:flow:${FlowId}:${FlowName}';
    arn = arn.replace('${FlowId}', flowId);
    arn = arn.replace('${FlowName}', flowName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:mediaconnect:${Region}:${Account}:output:${OutputId}:${OutputName}';
    arn = arn.replace('${OutputId}', outputId);
    arn = arn.replace('${OutputName}', outputName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:mediaconnect:${Region}:${Account}:source:${SourceId}:${SourceName}';
    arn = arn.replace('${SourceId}', sourceId);
    arn = arn.replace('${SourceName}', sourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type MediaconnectActionsWrite = 'AddFlowOutputs' | 'CreateFlow' | 'DeleteFlow' | 'GrantFlowEntitlements' | 'RemoveFlowOutput' | 'RevokeFlowEntitlement' | 'StartFlow' | 'StopFlow' | 'UpdateFlowEntitlement' | 'UpdateFlowOutput' | 'UpdateFlowSource';
export type MediaconnectActionsRead = 'DescribeFlow';
export type MediaconnectActionsList = 'ListEntitlements' | 'ListFlows';
export type MediaconnectActions = MediaconnectActionsWrite | MediaconnectActionsRead | MediaconnectActionsList;
