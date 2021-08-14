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
   * Grants permission to Create a new Cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Grants permission to Create a new Control Panel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel.html
   */
  public toCreateControlPanel() {
    return this.to('CreateControlPanel');
  }

  /**
   * Grants permission to Create a new Routing Control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol.html
   */
  public toCreateRoutingControl() {
    return this.to('CreateRoutingControl');
  }

  /**
   * Grants permission to Create a Safety Rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/safetyrule.html
   */
  public toCreateSafetyRule() {
    return this.to('CreateSafetyRule');
  }

  /**
   * Grants permission to Delete an existing Cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster-clusterarn.html
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * Grants permission to Create a Control Panel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn.html
   */
  public toDeleteControlPanel() {
    return this.to('DeleteControlPanel');
  }

  /**
   * Grants permission to Delete a Routing Control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol-routingcontrolarn.html
   */
  public toDeleteRoutingControl() {
    return this.to('DeleteRoutingControl');
  }

  /**
   * Grants permission to Delete a Safety Rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/safetyrule-safetyrulearn.html
   */
  public toDeleteSafetyRule() {
    return this.to('DeleteSafetyRule');
  }

  /**
   * Grants permission to Describe a Cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster-clusterarn.html
   */
  public toDescribeCluster() {
    return this.to('DescribeCluster');
  }

  /**
   * Grants permission to Describe a Control Panel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn.html
   */
  public toDescribeControlPanel() {
    return this.to('DescribeControlPanel');
  }

  /**
   * Grants permission to Describe a Routing Control
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol-routingcontrolarn.html
   */
  public toDescribeRoutingControl() {
    return this.to('DescribeRoutingControl');
  }

  /**
   * Grants permission to Describe a Routing Control
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol-routingcontrolarn.html
   */
  public toDescribeRoutingControlByName() {
    return this.to('DescribeRoutingControlByName');
  }

  /**
   * Grants permission to Describe a Safety Rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/safetyrule-safetyrulearn.html
   */
  public toDescribeSafetyRule() {
    return this.to('DescribeSafetyRule');
  }

  /**
   * Grants permission to List Associated Route53 Health Checks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol-routingcontrolarn-associatedroute53healthchecks.html
   */
  public toListAssociatedRoute53HealthChecks() {
    return this.to('ListAssociatedRoute53HealthChecks');
  }

  /**
   * Grants permission to List existing Clusters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster.html
   */
  public toListClusters() {
    return this.to('ListClusters');
  }

  /**
   * Grants permission to List Control Panels
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanels.html
   */
  public toListControlPanels() {
    return this.to('ListControlPanels');
  }

  /**
   * Grants permission to List Routing Controls
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn-routingcontrols.html
   */
  public toListRoutingControls() {
    return this.to('ListRoutingControls');
  }

  /**
   * Grants permission to List Safety Rules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn-safetyrules.html
   */
  public toListSafetyRules() {
    return this.to('ListSafetyRules');
  }

  /**
   * Grants permission to Update an existing Cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel.html
   */
  public toUpdateControlPanel() {
    return this.to('UpdateControlPanel');
  }

  /**
   * Grants permission to Update a Routing Control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn-routingcontrols.html
   */
  public toUpdateRoutingControl() {
    return this.to('UpdateRoutingControl');
  }

  /**
   * Grants permission to Update an existing Safety Rule
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
    var arn = 'arn:${Partition}:route53-recovery-control::${Account}:cluster/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:route53-recovery-control::${Account}:controlpanel/${ControlPanelId}';
    arn = arn.replace('${ControlPanelId}', controlPanelId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:route53-recovery-control::${Account}:controlpanel/${ControlPanelId}/routingcontrol/${RoutingControlId}';
    arn = arn.replace('${ControlPanelId}', controlPanelId);
    arn = arn.replace('${RoutingControlId}', routingControlId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:route53-recovery-control::${Account}:controlpanel/${ControlPanelId}/safetyrule/${SafetyRuleId}';
    arn = arn.replace('${ControlPanelId}', controlPanelId);
    arn = arn.replace('${SafetyRuleId}', safetyRuleId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
