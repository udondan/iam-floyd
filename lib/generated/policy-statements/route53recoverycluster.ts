import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get a routing control state
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/routing-control/latest/APIReference/API_GetRoutingControlState.html
   */
  public toGetRoutingControlState() {
    return this.to('GetRoutingControlState');
  }

  /**
   * Grants permission to list routing controls
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/routing-control/latest/APIReference/API_ListRoutingControls.html
   */
  public toListRoutingControls() {
    return this.to('ListRoutingControls');
  }

  /**
   * Grants permission to update a routing control state
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAllowSafetyRulesOverrides()
   *
   * https://docs.aws.amazon.com/routing-control/latest/APIReference/API_UpdateRoutingControlState.html
   */
  public toUpdateRoutingControlState() {
    return this.to('UpdateRoutingControlState');
  }

  /**
   * Grants permission to update a batch of routing control states
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAllowSafetyRulesOverrides()
   *
   * https://docs.aws.amazon.com/routing-control/latest/APIReference/API_UpdateRoutingControlStates.html
   */
  public toUpdateRoutingControlStates() {
    return this.to('UpdateRoutingControlStates');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetRoutingControlState',
      'ListRoutingControls'
    ],
    Write: [
      'UpdateRoutingControlState',
      'UpdateRoutingControlStates'
    ]
  };

  /**
   * Adds a resource of type routingcontrol to the statement
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol.html
   *
   * @param controlPanelId - Identifier for the controlPanelId.
   * @param routingControlId - Identifier for the routingControlId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onRoutingcontrol(controlPanelId: string, routingControlId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:route53-recovery-control::${ account ?? this.defaultAccount }:controlpanel/${ controlPanelId }/routingcontrol/${ routingControlId }`);
  }

  /**
   * Override safety rules to allow routing control state updates
   *
   * https://docs.aws.amazon.com/routing-control/latest/APIReference/API_UpdateRoutingControlState.html
   *
   * Applies to actions:
   * - .toUpdateRoutingControlState()
   * - .toUpdateRoutingControlStates()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAllowSafetyRulesOverrides(value?: boolean) {
    return this.if(`AllowSafetyRulesOverrides`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }
}
