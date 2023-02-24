import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps, Operator } from '../shared';

/**
 * Statement provider for service [elasticloadbalancing-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancingv2.html).
 *
 * @param options - Options for the statement
 */
export class ElasticloadbalancingV2 extends PolicyStatement {
  public servicePrefix = 'elasticloadbalancing';

  /**
   * Statement provider for service [elasticloadbalancing-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancingv2.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to add the specified certificates to the specified secure listener
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_AddListenerCertificates.html
   */
  public toAddListenerCertificates() {
    return this.to('AddListenerCertificates');
  }

  /**
   * Grants permission to add the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags
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
    return this.to('AddTags');
  }

  /**
   * Grants permission to create a listener for the specified Application Load Balancer
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
    return this.to('CreateListener');
  }

  /**
   * Grants permission to create a load balancer
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
    return this.to('CreateLoadBalancer');
  }

  /**
   * Grants permission to create a rule for the specified listener
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
    return this.to('CreateRule');
  }

  /**
   * Grants permission to create a target group
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
    return this.to('CreateTargetGroup');
  }

  /**
   * Grants permission to delete the specified listener
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteListener.html
   */
  public toDeleteListener() {
    return this.to('DeleteListener');
  }

  /**
   * Grants permission to delete the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteLoadBalancer.html
   */
  public toDeleteLoadBalancer() {
    return this.to('DeleteLoadBalancer');
  }

  /**
   * Grants permission to delete the specified rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteRule.html
   */
  public toDeleteRule() {
    return this.to('DeleteRule');
  }

  /**
   * Grants permission to delete the specified target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteTargetGroup.html
   */
  public toDeleteTargetGroup() {
    return this.to('DeleteTargetGroup');
  }

  /**
   * Grants permission to deregister the specified targets from the specified target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeregisterTargets.html
   */
  public toDeregisterTargets() {
    return this.to('DeregisterTargets');
  }

  /**
   * Grants permission to describe the Elastic Load Balancing resource limits for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeAccountLimits.html
   */
  public toDescribeAccountLimits() {
    return this.to('DescribeAccountLimits');
  }

  /**
   * Grants permission to describe the certificates for the specified secure listener
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeListenerCertificates.html
   */
  public toDescribeListenerCertificates() {
    return this.to('DescribeListenerCertificates');
  }

  /**
   * Grants permission to describe the specified listeners or the listeners for the specified Application Load Balancer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeListeners.html
   */
  public toDescribeListeners() {
    return this.to('DescribeListeners');
  }

  /**
   * Grants permission to describe the attributes for the specified load balancer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancerAttributes.html
   */
  public toDescribeLoadBalancerAttributes() {
    return this.to('DescribeLoadBalancerAttributes');
  }

  /**
   * Grants permission to describe the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html
   */
  public toDescribeLoadBalancers() {
    return this.to('DescribeLoadBalancers');
  }

  /**
   * Grants permission to describe the specified rules or the rules for the specified listener
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeRules.html
   */
  public toDescribeRules() {
    return this.to('DescribeRules');
  }

  /**
   * Grants permission to describe the specified policies or all policies used for SSL negotiation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeSSLPolicies.html
   */
  public toDescribeSSLPolicies() {
    return this.to('DescribeSSLPolicies');
  }

  /**
   * Grants permission to describe the tags associated with the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    return this.to('DescribeTags');
  }

  /**
   * Grants permission to describe the attributes for the specified target group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroupAttributes.html
   */
  public toDescribeTargetGroupAttributes() {
    return this.to('DescribeTargetGroupAttributes');
  }

  /**
   * Grants permission to describe the specified target groups or all of your target groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html
   */
  public toDescribeTargetGroups() {
    return this.to('DescribeTargetGroups');
  }

  /**
   * Grants permission to describe the health of the specified targets or all of your targets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetHealth.html
   */
  public toDescribeTargetHealth() {
    return this.to('DescribeTargetHealth');
  }

  /**
   * Grants permission to modify the specified properties of the specified listener
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyListener.html
   */
  public toModifyListener() {
    return this.to('ModifyListener');
  }

  /**
   * Grants permission to modify the attributes of the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyLoadBalancerAttributes.html
   */
  public toModifyLoadBalancerAttributes() {
    return this.to('ModifyLoadBalancerAttributes');
  }

  /**
   * Grants permission to modify the specified rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyRule.html
   */
  public toModifyRule() {
    return this.to('ModifyRule');
  }

  /**
   * Grants permission to modify the health checks used when evaluating the health state of the targets in the specified target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTargetGroup.html
   */
  public toModifyTargetGroup() {
    return this.to('ModifyTargetGroup');
  }

  /**
   * Grants permission to modify the specified attributes of the specified target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTargetGroupAttributes.html
   */
  public toModifyTargetGroupAttributes() {
    return this.to('ModifyTargetGroupAttributes');
  }

  /**
   * Grants permission to register the specified targets with the specified target group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RegisterTargets.html
   */
  public toRegisterTargets() {
    return this.to('RegisterTargets');
  }

  /**
   * Grants permission to remove the specified certificates of the specified secure listener
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RemoveListenerCertificates.html
   */
  public toRemoveListenerCertificates() {
    return this.to('RemoveListenerCertificates');
  }

  /**
   * Grants permission to remove one or more tags from the specified load balancer
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
    return this.to('RemoveTags');
  }

  /**
   * Grants permission to set the type of IP addresses used by the subnets of the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetIpAddressType.html
   */
  public toSetIpAddressType() {
    return this.to('SetIpAddressType');
  }

  /**
   * Grants permission to set the priorities of the specified rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetRulePriorities.html
   */
  public toSetRulePriorities() {
    return this.to('SetRulePriorities');
  }

  /**
   * Grants permission to associate the specified security groups with the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetSecurityGroups.html
   */
  public toSetSecurityGroups() {
    return this.to('SetSecurityGroups');
  }

  /**
   * Grants permission to enable the Availability Zone for the specified subnets for the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetSubnets.html
   */
  public toSetSubnets() {
    return this.to('SetSubnets');
  }

  /**
   * Grants permission to give WebAcl permission to WAF
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetWebAcl.html
   */
  public toSetWebAcl() {
    return this.to('SetWebAcl');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddListenerCertificates',
      'CreateListener',
      'CreateLoadBalancer',
      'CreateRule',
      'CreateTargetGroup',
      'DeleteListener',
      'DeleteLoadBalancer',
      'DeleteRule',
      'DeleteTargetGroup',
      'DeregisterTargets',
      'ModifyListener',
      'ModifyLoadBalancerAttributes',
      'ModifyRule',
      'ModifyTargetGroup',
      'ModifyTargetGroupAttributes',
      'RegisterTargets',
      'RemoveListenerCertificates',
      'SetIpAddressType',
      'SetRulePriorities',
      'SetSecurityGroups',
      'SetSubnets',
      'SetWebAcl'
    ],
    Tagging: [
      'AddTags',
      'RemoveTags'
    ],
    Read: [
      'DescribeAccountLimits',
      'DescribeListenerCertificates',
      'DescribeListeners',
      'DescribeLoadBalancerAttributes',
      'DescribeLoadBalancers',
      'DescribeRules',
      'DescribeSSLPolicies',
      'DescribeTags',
      'DescribeTargetGroupAttributes',
      'DescribeTargetGroups',
      'DescribeTargetHealth'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onListenerApp(loadBalancerName: string, loadBalancerId: string, listenerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticloadbalancing:${ region || '*' }:${ account || '*' }:listener/app/${ loadBalancerName }/${ loadBalancerId }/${ listenerId }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onListenerRuleApp(loadBalancerName: string, loadBalancerId: string, listenerId: string, listenerRuleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticloadbalancing:${ region || '*' }:${ account || '*' }:listener-rule/app/${ loadBalancerName }/${ loadBalancerId }/${ listenerId }/${ listenerRuleId }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onListenerNet(loadBalancerName: string, loadBalancerId: string, listenerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticloadbalancing:${ region || '*' }:${ account || '*' }:listener/net/${ loadBalancerName }/${ loadBalancerId }/${ listenerId }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onListenerRuleNet(loadBalancerName: string, loadBalancerId: string, listenerId: string, listenerRuleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticloadbalancing:${ region || '*' }:${ account || '*' }:listener-rule/net/${ loadBalancerName }/${ loadBalancerId }/${ listenerId }/${ listenerRuleId }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onLoadbalancerApp(loadBalancerName: string, loadBalancerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticloadbalancing:${ region || '*' }:${ account || '*' }:loadbalancer/app/${ loadBalancerName }/${ loadBalancerId }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onLoadbalancerNet(loadBalancerName: string, loadBalancerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticloadbalancing:${ region || '*' }:${ account || '*' }:loadbalancer/net/${ loadBalancerName }/${ loadBalancerId }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTargetgroup(targetGroupName: string, targetGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticloadbalancing:${ region || '*' }:${ account || '*' }:targetgroup/${ targetGroupName }/${ targetGroupId }`);
  }

  /**
   * A tag key and value pair
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
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
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
