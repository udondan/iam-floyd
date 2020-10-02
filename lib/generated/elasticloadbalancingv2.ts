import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [elasticloadbalancing-v2](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancingv2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ElasticloadbalancingV2 extends PolicyStatement {
  public servicePrefix = 'elasticloadbalancing-v2';

  /**
   * Statement provider for service [elasticloadbalancing-v2](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancingv2.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds the specified certificates to the specified secure listener
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_AddListenerCertificates.html
   */
  public toAddListenerCertificates() {
    this.to('elasticloadbalancing-v2:AddListenerCertificates');
    return this;
  }

  /**
   * Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_AddTags.html
   */
  public toAddTags() {
    this.to('elasticloadbalancing-v2:AddTags');
    return this;
  }

  /**
   * Creates a listener for the specified Application Load Balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateListener.html
   */
  public toCreateListener() {
    this.to('elasticloadbalancing-v2:CreateListener');
    return this;
  }

  /**
   * Creates a load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateLoadBalancer.html
   */
  public toCreateLoadBalancer() {
    this.to('elasticloadbalancing-v2:CreateLoadBalancer');
    return this;
  }

  /**
   * Creates a rule for the specified listener
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateRule.html
   */
  public toCreateRule() {
    this.to('elasticloadbalancing-v2:CreateRule');
    return this;
  }

  /**
   * Creates a target group.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTargetGroup.html
   */
  public toCreateTargetGroup() {
    this.to('elasticloadbalancing-v2:CreateTargetGroup');
    return this;
  }

  /**
   * Deletes the specified listener
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteListener.html
   */
  public toDeleteListener() {
    this.to('elasticloadbalancing-v2:DeleteListener');
    return this;
  }

  /**
   * Deletes the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteLoadBalancer.html
   */
  public toDeleteLoadBalancer() {
    this.to('elasticloadbalancing-v2:DeleteLoadBalancer');
    return this;
  }

  /**
   * Deletes the specified rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteRule.html
   */
  public toDeleteRule() {
    this.to('elasticloadbalancing-v2:DeleteRule');
    return this;
  }

  /**
   * Deletes the specified target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteTargetGroup.html
   */
  public toDeleteTargetGroup() {
    this.to('elasticloadbalancing-v2:DeleteTargetGroup');
    return this;
  }

  /**
   * Deregisters the specified targets from the specified target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeregisterTargets.html
   */
  public toDeregisterTargets() {
    this.to('elasticloadbalancing-v2:DeregisterTargets');
    return this;
  }

  /**
   * Describes the Elastic Load Balancing resource limits for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeAccountLimits.html
   */
  public toDescribeAccountLimits() {
    this.to('elasticloadbalancing-v2:DescribeAccountLimits');
    return this;
  }

  /**
   * Describes the certificates for the specified secure listener
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeListenerCertificates.html
   */
  public toDescribeListenerCertificates() {
    this.to('elasticloadbalancing-v2:DescribeListenerCertificates');
    return this;
  }

  /**
   * Describes the specified listeners or the listeners for the specified Application Load Balancer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeListeners.html
   */
  public toDescribeListeners() {
    this.to('elasticloadbalancing-v2:DescribeListeners');
    return this;
  }

  /**
   * Describes the attributes for the specified load balancer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancerAttributes.html
   */
  public toDescribeLoadBalancerAttributes() {
    this.to('elasticloadbalancing-v2:DescribeLoadBalancerAttributes');
    return this;
  }

  /**
   * Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html
   */
  public toDescribeLoadBalancers() {
    this.to('elasticloadbalancing-v2:DescribeLoadBalancers');
    return this;
  }

  /**
   * Describes the specified rules or the rules for the specified listener
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeRules.html
   */
  public toDescribeRules() {
    this.to('elasticloadbalancing-v2:DescribeRules');
    return this;
  }

  /**
   * Describes the specified policies or all policies used for SSL negotiation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeSSLPolicies.html
   */
  public toDescribeSSLPolicies() {
    this.to('elasticloadbalancing-v2:DescribeSSLPolicies');
    return this;
  }

  /**
   * Describes the tags associated with the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    this.to('elasticloadbalancing-v2:DescribeTags');
    return this;
  }

  /**
   * Describes the attributes for the specified target group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroupAttributes.html
   */
  public toDescribeTargetGroupAttributes() {
    this.to('elasticloadbalancing-v2:DescribeTargetGroupAttributes');
    return this;
  }

  /**
   * Describes the specified target groups or all of your target groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html
   */
  public toDescribeTargetGroups() {
    this.to('elasticloadbalancing-v2:DescribeTargetGroups');
    return this;
  }

  /**
   * Describes the health of the specified targets or all of your targets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetHealth.html
   */
  public toDescribeTargetHealth() {
    this.to('elasticloadbalancing-v2:DescribeTargetHealth');
    return this;
  }

  /**
   * Modifies the specified properties of the specified listener
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyListener.html
   */
  public toModifyListener() {
    this.to('elasticloadbalancing-v2:ModifyListener');
    return this;
  }

  /**
   * Modifies the attributes of the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyLoadBalancerAttributes.html
   */
  public toModifyLoadBalancerAttributes() {
    this.to('elasticloadbalancing-v2:ModifyLoadBalancerAttributes');
    return this;
  }

  /**
   * Modifies the specified rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyRule.html
   */
  public toModifyRule() {
    this.to('elasticloadbalancing-v2:ModifyRule');
    return this;
  }

  /**
   * Modifies the health checks used when evaluating the health state of the targets in the specified target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTargetGroup.html
   */
  public toModifyTargetGroup() {
    this.to('elasticloadbalancing-v2:ModifyTargetGroup');
    return this;
  }

  /**
   * Modifies the specified attributes of the specified target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTargetGroupAttributes.html
   */
  public toModifyTargetGroupAttributes() {
    this.to('elasticloadbalancing-v2:ModifyTargetGroupAttributes');
    return this;
  }

  /**
   * Registers the specified targets with the specified target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RegisterTargets.html
   */
  public toRegisterTargets() {
    this.to('elasticloadbalancing-v2:RegisterTargets');
    return this;
  }

  /**
   * Removes the specified certificates of the specified secure listener
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RemoveListenerCertificates.html
   */
  public toRemoveListenerCertificates() {
    this.to('elasticloadbalancing-v2:RemoveListenerCertificates');
    return this;
  }

  /**
   * Removes one or more tags from the specified load balancer
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RemoveTags.html
   */
  public toRemoveTags() {
    this.to('elasticloadbalancing-v2:RemoveTags');
    return this;
  }

  /**
   * Not found
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetIpAddressType.html
   */
  public toSetIpAddressType() {
    this.to('elasticloadbalancing-v2:SetIpAddressType');
    return this;
  }

  /**
   * Sets the priorities of the specified rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetRulePriorities.html
   */
  public toSetRulePriorities() {
    this.to('elasticloadbalancing-v2:SetRulePriorities');
    return this;
  }

  /**
   * Associates the specified security groups with the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetSecurityGroups.html
   */
  public toSetSecurityGroups() {
    this.to('elasticloadbalancing-v2:SetSecurityGroups');
    return this;
  }

  /**
   * Enables the Availability Zone for the specified subnets for the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetSubnets.html
   */
  public toSetSubnets() {
    this.to('elasticloadbalancing-v2:SetSubnets');
    return this;
  }

  /**
   * Gives WebAcl permission to WAF
   *
   * Access Level: Write
   */
  public toSetWebAcl() {
    this.to('elasticloadbalancing-v2:SetWebAcl');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddListenerCertificates",
      "CreateListener",
      "CreateLoadBalancer",
      "CreateRule",
      "CreateTargetGroup",
      "DeleteListener",
      "DeleteLoadBalancer",
      "DeleteRule",
      "DeleteTargetGroup",
      "DeregisterTargets",
      "ModifyListener",
      "ModifyLoadBalancerAttributes",
      "ModifyRule",
      "ModifyTargetGroup",
      "ModifyTargetGroupAttributes",
      "RegisterTargets",
      "RemoveListenerCertificates",
      "SetIpAddressType",
      "SetRulePriorities",
      "SetSecurityGroups",
      "SetSubnets",
      "SetWebAcl"
    ],
    "Tagging": [
      "AddTags",
      "RemoveTags"
    ],
    "Read": [
      "DescribeAccountLimits",
      "DescribeListenerCertificates",
      "DescribeListeners",
      "DescribeLoadBalancerAttributes",
      "DescribeLoadBalancers",
      "DescribeRules",
      "DescribeSSLPolicies",
      "DescribeTags",
      "DescribeTargetGroupAttributes",
      "DescribeTargetGroups",
      "DescribeTargetHealth"
    ]
  };

  /**
   * Adds a resource of type listener/app to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param listenerId - Identifier for the listenerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onListenerApp(loadBalancerName: string, loadBalancerId: string, listenerId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticloadbalancing:${Region}:${Account}:listener/app/${LoadBalancerName}/${LoadBalancerId}/${ListenerId}';
    arn = arn.replace('${LoadBalancerName}', loadBalancerName);
    arn = arn.replace('${LoadBalancerId}', loadBalancerId);
    arn = arn.replace('${ListenerId}', listenerId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type listener-rule/app to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-update-rules.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param listenerId - Identifier for the listenerId.
   * @param listenerRuleId - Identifier for the listenerRuleId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onListenerRuleApp(loadBalancerName: string, loadBalancerId: string, listenerId: string, listenerRuleId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticloadbalancing:${Region}:${Account}:listener-rule/app/${LoadBalancerName}/${LoadBalancerId}/${ListenerId}/${ListenerRuleId}';
    arn = arn.replace('${LoadBalancerName}', loadBalancerName);
    arn = arn.replace('${LoadBalancerId}', loadBalancerId);
    arn = arn.replace('${ListenerId}', listenerId);
    arn = arn.replace('${ListenerRuleId}', listenerRuleId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type listener/net to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param listenerId - Identifier for the listenerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onListenerNet(loadBalancerName: string, loadBalancerId: string, listenerId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticloadbalancing:${Region}:${Account}:listener/net/${LoadBalancerName}/${LoadBalancerId}/${ListenerId}';
    arn = arn.replace('${LoadBalancerName}', loadBalancerName);
    arn = arn.replace('${LoadBalancerId}', loadBalancerId);
    arn = arn.replace('${ListenerId}', listenerId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type listener-rule/net to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-update-rules.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param listenerId - Identifier for the listenerId.
   * @param listenerRuleId - Identifier for the listenerRuleId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onListenerRuleNet(loadBalancerName: string, loadBalancerId: string, listenerId: string, listenerRuleId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticloadbalancing:${Region}:${Account}:listener-rule/net/${LoadBalancerName}/${LoadBalancerId}/${ListenerId}/${ListenerRuleId}';
    arn = arn.replace('${LoadBalancerName}', loadBalancerName);
    arn = arn.replace('${LoadBalancerId}', loadBalancerId);
    arn = arn.replace('${ListenerId}', listenerId);
    arn = arn.replace('${ListenerRuleId}', listenerRuleId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type loadbalancer/app/ to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html#application-load-balancer-overview
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onLoadbalancerApp(loadBalancerName: string, loadBalancerId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticloadbalancing:${Region}:${Account}:loadbalancer/app/${LoadBalancerName}/${LoadBalancerId}';
    arn = arn.replace('${LoadBalancerName}', loadBalancerName);
    arn = arn.replace('${LoadBalancerId}', loadBalancerId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type loadbalancer/net/ to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html#network-load-balancer-overview
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onLoadbalancerNet(loadBalancerName: string, loadBalancerId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticloadbalancing:${Region}:${Account}:loadbalancer/net/${LoadBalancerName}/${LoadBalancerId}';
    arn = arn.replace('${LoadBalancerName}', loadBalancerName);
    arn = arn.replace('${LoadBalancerId}', loadBalancerId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type targetgroup to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html
   *
   * @param targetGroupName - Identifier for the targetGroupName.
   * @param targetGroupId - Identifier for the targetGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTargetgroup(targetGroupName: string, targetGroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticloadbalancing:${Region}:${Account}:targetgroup/${TargetGroupName}/${TargetGroupId}';
    arn = arn.replace('${TargetGroupName}', targetGroupName);
    arn = arn.replace('${TargetGroupId}', targetGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * A tag key and value pair
   *
   * Applies to resource types:
   * - listener/app
   * - listener-rule/app
   * - listener/net
   * - listener-rule/net
   * - loadbalancer/app/
   * - loadbalancer/net/
   * - targetgroup
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`elasticloadbalancing:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
