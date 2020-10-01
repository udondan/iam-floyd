import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [mediaconnect](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediaconnect.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediaconnect extends PolicyStatement {
  public servicePrefix = 'mediaconnect';
  protected actionList: Actions = {
    "AddFlowOutputs": {
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs.html",
      "description": "Grants permission to add outputs to any flow.",
      "accessLevel": "Write"
    },
    "CreateFlow": {
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows.html",
      "description": "Grants permission to create flows.",
      "accessLevel": "Write"
    },
    "DeleteFlow": {
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn.html",
      "description": "Grants permission to delete flows.",
      "accessLevel": "Write"
    },
    "DescribeFlow": {
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn.html",
      "description": "Grants permission to display the details of a flow including the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements.",
      "accessLevel": "Read"
    },
    "GrantFlowEntitlements": {
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements.html",
      "description": "Grants permission to grant entitlements on any flow.",
      "accessLevel": "Write"
    },
    "ListEntitlements": {
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/api/v1-entitlements.html",
      "description": "Grants permission to display a list of all entitlements that have been granted to the account.",
      "accessLevel": "List"
    },
    "ListFlows": {
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows.html",
      "description": "Grants permission to display a list of flows that are associated with this account.",
      "accessLevel": "List"
    },
    "RemoveFlowOutput": {
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs-outputarn.html",
      "description": "Grants permission to remove outputs from any flow.",
      "accessLevel": "Write"
    },
    "RevokeFlowEntitlement": {
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements-entitlementarn.html",
      "description": "Grants permission to revoke entitlements on any flow.",
      "accessLevel": "Write"
    },
    "StartFlow": {
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-start-flowarn.html",
      "description": "Grants permission to start flows.",
      "accessLevel": "Write"
    },
    "StopFlow": {
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-stop-flowarn.html",
      "description": "Grants permission to stop flows.",
      "accessLevel": "Write"
    },
    "UpdateFlowEntitlement": {
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements-entitlementarn.html",
      "description": "Grants permission to update entitlements on any flow.",
      "accessLevel": "Write"
    },
    "UpdateFlowOutput": {
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs-outputarn.html",
      "description": "Grants permission to update outputs on any flow.",
      "accessLevel": "Write"
    },
    "UpdateFlowSource": {
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-source-sourcearn.html",
      "description": "Grants permission to update the source of any flow.",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "Entitlement": {
      "name": "Entitlement",
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/ug/entitlements.html",
      "arn": "arn:${Partition}:mediaconnect:${Region}:${Account}:entitlement:${FlowId}:${EntitlementName}",
      "conditionKeys": []
    },
    "Flow": {
      "name": "Flow",
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/ug/flows.html",
      "arn": "arn:${Partition}:mediaconnect:${Region}:${Account}:flow:${FlowId}:${FlowName}",
      "conditionKeys": []
    },
    "Output": {
      "name": "Output",
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/ug/outputs.html",
      "arn": "arn:${Partition}:mediaconnect:${Region}:${Account}:output:${OutputId}:${OutputName}",
      "conditionKeys": []
    },
    "Source": {
      "name": "Source",
      "url": "https://docs.aws.amazon.com/mediaconnect/latest/ug/sources.html",
      "arn": "arn:${Partition}:mediaconnect:${Region}:${Account}:source:${SourceId}:${SourceName}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [mediaconnect](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediaconnect.html).
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
