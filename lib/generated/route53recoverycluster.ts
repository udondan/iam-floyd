import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [route53-recovery-cluster](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoverycluster.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Route53RecoveryCluster extends PolicyStatement {
  public servicePrefix = 'route53-recovery-cluster';

  /**
   * Statement provider for service [route53-recovery-cluster](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoverycluster.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to Get a Routing Control State
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/routing-control/latest/APIReference/API_GetRoutingControlState.html
   */
  public toGetRoutingControlState() {
    return this.to('GetRoutingControlState');
  }

  /**
   * Grants permission to Update a Routing Control State
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/routing-control/latest/APIReference/API_UpdateRoutingControlState.html
   */
  public toUpdateRoutingControlState() {
    return this.to('UpdateRoutingControlState');
  }

  /**
   * Grants permission to Update Routing Control States
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/routing-control/latest/APIReference/API_UpdateRoutingControlStates.html
   */
  public toUpdateRoutingControlStates() {
    return this.to('UpdateRoutingControlStates');
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "GetRoutingControlState"
    ],
    "Write": [
      "UpdateRoutingControlState",
      "UpdateRoutingControlStates"
    ]
  };

  /**
   * Adds a resource of type routingcontrol to the statement
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol.html
   *
   * @param controlPanelId - Identifier for the controlPanelId.
   * @param routingControlId - Identifier for the routingControlId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRoutingcontrol(controlPanelId: string, routingControlId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53-recovery-control::${Account}:controlpanel/${ControlPanelId}/routingcontrol/${RoutingControlId}';
    arn = arn.replace('${ControlPanelId}', controlPanelId);
    arn = arn.replace('${RoutingControlId}', routingControlId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}