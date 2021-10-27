import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [route53-recovery-control-config](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoverycontrols.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Route53RecoveryControlConfig extends PolicyStatement {
  public servicePrefix = 'route53-recovery-control-config';

  /**
   * Statement provider for service [route53-recovery-control-config](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoverycontrols.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Grants permission to create a control panel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel.html
   */
  public toCreateControlPanel() {
    return this.to('CreateControlPanel');
  }

  /**
   * Grants permission to create a routing control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol.html
   */
  public toCreateRoutingControl() {
    return this.to('CreateRoutingControl');
  }

  /**
   * Grants permission to create a safety rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/safetyrule.html
   */
  public toCreateSafetyRule() {
    return this.to('CreateSafetyRule');
  }

  /**
   * Grants permission to delete a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster-clusterarn.html
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * Grants permission to delete a control panel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn.html
   */
  public toDeleteControlPanel() {
    return this.to('DeleteControlPanel');
  }

  /**
   * Grants permission to delete a routing control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol-routingcontrolarn.html
   */
  public toDeleteRoutingControl() {
    return this.to('DeleteRoutingControl');
  }

  /**
   * Grants permission to delete a safety rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/safetyrule-safetyrulearn.html
   */
  public toDeleteSafetyRule() {
    return this.to('DeleteSafetyRule');
  }

  /**
   * Grants permission to describe a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster-clusterarn.html
   */
  public toDescribeCluster() {
    return this.to('DescribeCluster');
  }

  /**
   * Grants permission to describe a control panel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn.html
   */
  public toDescribeControlPanel() {
    return this.to('DescribeControlPanel');
  }

  /**
   * Grants permission to describe a routing control
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol-routingcontrolarn.html
   */
  public toDescribeRoutingControl() {
    return this.to('DescribeRoutingControl');
  }

  /**
   * Grants permission to describe a routing control
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol-routingcontrolarn.html
   */
  public toDescribeRoutingControlByName() {
    return this.to('DescribeRoutingControlByName');
  }

  /**
   * Grants permission to describe a safety rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/safetyrule-safetyrulearn.html
   */
  public toDescribeSafetyRule() {
    return this.to('DescribeSafetyRule');
  }

  /**
   * Grants permission to list associated Route 53 health checks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol-routingcontrolarn-associatedroute53healthchecks.html
   */
  public toListAssociatedRoute53HealthChecks() {
    return this.to('ListAssociatedRoute53HealthChecks');
  }

  /**
   * Grants permission to list clusters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster.html
   */
  public toListClusters() {
    return this.to('ListClusters');
  }

  /**
   * Grants permission to list control panels
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanels.html
   */
  public toListControlPanels() {
    return this.to('ListControlPanels');
  }

  /**
   * Grants permission to list routing controls
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn-routingcontrols.html
   */
  public toListRoutingControls() {
    return this.to('ListRoutingControls');
  }

  /**
   * Grants permission to list safety rules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn-safetyrules.html
   */
  public toListSafetyRules() {
    return this.to('ListSafetyRules');
  }

  /**
   * Grants permission to update a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel.html
   */
  public toUpdateControlPanel() {
    return this.to('UpdateControlPanel');
  }

  /**
   * Grants permission to update a routing control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn-routingcontrols.html
   */
  public toUpdateRoutingControl() {
    return this.to('UpdateRoutingControl');
  }

  /**
   * Grants permission to update a safety rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/safetyrule.html
   */
  public toUpdateSafetyRule() {
    return this.to('UpdateSafetyRule');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateCluster",
      "CreateControlPanel",
      "CreateRoutingControl",
      "CreateSafetyRule",
      "DeleteCluster",
      "DeleteControlPanel",
      "DeleteRoutingControl",
      "DeleteSafetyRule",
      "UpdateControlPanel",
      "UpdateRoutingControl",
      "UpdateSafetyRule"
    ],
    "Read": [
      "DescribeCluster",
      "DescribeControlPanel",
      "DescribeRoutingControl",
      "DescribeRoutingControlByName",
      "DescribeSafetyRule",
      "ListClusters",
      "ListControlPanels",
      "ListRoutingControls",
      "ListSafetyRules"
    ],
    "List": [
      "ListAssociatedRoute53HealthChecks"
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCluster(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:route53-recovery-control::${ account || '*' }:cluster/${ resourceId }`);
  }

  /**
   * Adds a resource of type controlpanel to the statement
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel.html
   *
   * @param controlPanelId - Identifier for the controlPanelId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onControlpanel(controlPanelId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:route53-recovery-control::${ account || '*' }:controlpanel/${ controlPanelId }`);
  }

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
    return this.on(`arn:${ partition || 'aws' }:route53-recovery-control::${ account || '*' }:controlpanel/${ controlPanelId }/routingcontrol/${ routingControlId }`);
  }

  /**
   * Adds a resource of type safetyrule to the statement
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/safetyrule.html
   *
   * @param controlPanelId - Identifier for the controlPanelId.
   * @param safetyRuleId - Identifier for the safetyRuleId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSafetyrule(controlPanelId: string, safetyRuleId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:route53-recovery-control::${ account || '*' }:controlpanel/${ controlPanelId }/safetyrule/${ safetyRuleId }`);
  }
}
