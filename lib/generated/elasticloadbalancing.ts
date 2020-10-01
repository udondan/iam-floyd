import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [elasticloadbalancing](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancing.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Elasticloadbalancing extends PolicyStatement {
  public servicePrefix = 'elasticloadbalancing';

  /**
   * Statement provider for service [elasticloadbalancing](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancing.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_AddTags.html
   */
  public toAddTags() {
    this.to('elasticloadbalancing:AddTags');
    return this;
  }

  /**
   * Associates one or more security groups with your load balancer in a virtual private cloud (VPC)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ApplySecurityGroupsToLoadBalancer.html
   */
  public toApplySecurityGroupsToLoadBalancer() {
    this.to('elasticloadbalancing:ApplySecurityGroupsToLoadBalancer');
    return this;
  }

  /**
   * Adds one or more subnets to the set of configured subnets for the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_AttachLoadBalancerToSubnets.html
   */
  public toAttachLoadBalancerToSubnets() {
    this.to('elasticloadbalancing:AttachLoadBalancerToSubnets');
    return this;
  }

  /**
   * Specifies the health check settings to use when evaluating the health state of your back-end instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ConfigureHealthCheck.html
   */
  public toConfigureHealthCheck() {
    this.to('elasticloadbalancing:ConfigureHealthCheck');
    return this;
  }

  /**
   * Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateAppCookieStickinessPolicy.html
   */
  public toCreateAppCookieStickinessPolicy() {
    this.to('elasticloadbalancing:CreateAppCookieStickinessPolicy');
    return this;
  }

  /**
   * Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLBCookieStickinessPolicy.html
   */
  public toCreateLBCookieStickinessPolicy() {
    this.to('elasticloadbalancing:CreateLBCookieStickinessPolicy');
    return this;
  }

  /**
   * Creates a load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancer.html
   */
  public toCreateLoadBalancer() {
    this.to('elasticloadbalancing:CreateLoadBalancer');
    return this;
  }

  /**
   * Creates one or more listeners for the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancerListeners.html
   */
  public toCreateLoadBalancerListeners() {
    this.to('elasticloadbalancing:CreateLoadBalancerListeners');
    return this;
  }

  /**
   * Creates a policy with the specified attributes for the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancerPolicy.html
   */
  public toCreateLoadBalancerPolicy() {
    this.to('elasticloadbalancing:CreateLoadBalancerPolicy');
    return this;
  }

  /**
   * Deletes the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancer.html
   */
  public toDeleteLoadBalancer() {
    this.to('elasticloadbalancing:DeleteLoadBalancer');
    return this;
  }

  /**
   * Deletes the specified listeners from the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancerListeners.html
   */
  public toDeleteLoadBalancerListeners() {
    this.to('elasticloadbalancing:DeleteLoadBalancerListeners');
    return this;
  }

  /**
   * Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancerPolicy.html
   */
  public toDeleteLoadBalancerPolicy() {
    this.to('elasticloadbalancing:DeleteLoadBalancerPolicy');
    return this;
  }

  /**
   * Deregisters the specified instances from the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeregisterInstancesFromLoadBalancer.html
   */
  public toDeregisterInstancesFromLoadBalancer() {
    this.to('elasticloadbalancing:DeregisterInstancesFromLoadBalancer');
    return this;
  }

  /**
   * Describes the state of the specified instances with respect to the specified load balancer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeInstanceHealth.html
   */
  public toDescribeInstanceHealth() {
    this.to('elasticloadbalancing:DescribeInstanceHealth');
    return this;
  }

  /**
   * Describes the attributes for the specified load balancer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerAttributes.html
   */
  public toDescribeLoadBalancerAttributes() {
    this.to('elasticloadbalancing:DescribeLoadBalancerAttributes');
    return this;
  }

  /**
   * Describes the specified policies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerPolicies.html
   */
  public toDescribeLoadBalancerPolicies() {
    this.to('elasticloadbalancing:DescribeLoadBalancerPolicies');
    return this;
  }

  /**
   * Describes the specified load balancer policy types
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerPolicyTypes.html
   */
  public toDescribeLoadBalancerPolicyTypes() {
    this.to('elasticloadbalancing:DescribeLoadBalancerPolicyTypes');
    return this;
  }

  /**
   * Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html
   */
  public toDescribeLoadBalancers() {
    this.to('elasticloadbalancing:DescribeLoadBalancers');
    return this;
  }

  /**
   * Describes the tags associated with the specified load balancers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    this.to('elasticloadbalancing:DescribeTags');
    return this;
  }

  /**
   * Removes the specified subnets from the set of configured subnets for the load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DetachLoadBalancerFromSubnets.html
   */
  public toDetachLoadBalancerFromSubnets() {
    this.to('elasticloadbalancing:DetachLoadBalancerFromSubnets');
    return this;
  }

  /**
   * Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DisableAvailabilityZonesForLoadBalancer.html
   */
  public toDisableAvailabilityZonesForLoadBalancer() {
    this.to('elasticloadbalancing:DisableAvailabilityZonesForLoadBalancer');
    return this;
  }

  /**
   * Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_EnableAvailabilityZonesForLoadBalancer.html
   */
  public toEnableAvailabilityZonesForLoadBalancer() {
    this.to('elasticloadbalancing:EnableAvailabilityZonesForLoadBalancer');
    return this;
  }

  /**
   * Modifies the attributes of the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ModifyLoadBalancerAttributes.html
   */
  public toModifyLoadBalancerAttributes() {
    this.to('elasticloadbalancing:ModifyLoadBalancerAttributes');
    return this;
  }

  /**
   * Adds the specified instances to the specified load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_RegisterInstancesWithLoadBalancer.html
   */
  public toRegisterInstancesWithLoadBalancer() {
    this.to('elasticloadbalancing:RegisterInstancesWithLoadBalancer');
    return this;
  }

  /**
   * Removes one or more tags from the specified load balancer
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_RemoveTags.html
   */
  public toRemoveTags() {
    this.to('elasticloadbalancing:RemoveTags');
    return this;
  }

  /**
   * Sets the certificate that terminates the specified listener's SSL connections
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerListenerSSLCertificate.html
   */
  public toSetLoadBalancerListenerSSLCertificate() {
    this.to('elasticloadbalancing:SetLoadBalancerListenerSSLCertificate');
    return this;
  }

  /**
   * Replaces the set of policies associated with the specified port on which the back-end server is listening with a new set of policies
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerPoliciesForBackendServer.html
   */
  public toSetLoadBalancerPoliciesForBackendServer() {
    this.to('elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer');
    return this;
  }

  /**
   * Replaces the current set of policies for the specified load balancer port with the specified set of policies
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerPoliciesOfListener.html
   */
  public toSetLoadBalancerPoliciesOfListener() {
    this.to('elasticloadbalancing:SetLoadBalancerPoliciesOfListener');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Tagging": [
      "AddTags",
      "RemoveTags"
    ],
    "Write": [
      "ApplySecurityGroupsToLoadBalancer",
      "AttachLoadBalancerToSubnets",
      "ConfigureHealthCheck",
      "CreateAppCookieStickinessPolicy",
      "CreateLBCookieStickinessPolicy",
      "CreateLoadBalancer",
      "CreateLoadBalancerListeners",
      "CreateLoadBalancerPolicy",
      "DeleteLoadBalancer",
      "DeleteLoadBalancerListeners",
      "DeleteLoadBalancerPolicy",
      "DeregisterInstancesFromLoadBalancer",
      "DetachLoadBalancerFromSubnets",
      "DisableAvailabilityZonesForLoadBalancer",
      "EnableAvailabilityZonesForLoadBalancer",
      "ModifyLoadBalancerAttributes",
      "RegisterInstancesWithLoadBalancer",
      "SetLoadBalancerListenerSSLCertificate",
      "SetLoadBalancerPoliciesForBackendServer",
      "SetLoadBalancerPoliciesOfListener"
    ],
    "Read": [
      "DescribeInstanceHealth",
      "DescribeLoadBalancerAttributes",
      "DescribeLoadBalancerPolicies",
      "DescribeLoadBalancerPolicyTypes",
      "DescribeTags"
    ],
    "List": [
      "DescribeLoadBalancers"
    ]
  };

  /**
   * Adds a resource of type listener to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param listenerId - Identifier for the listenerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onListener(loadBalancerName: string, loadBalancerId: string, listenerId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticloadbalancing:${Region}:${Account}:listener/${LoadBalancerName}/${LoadBalancerId}/${ListenerId}';
    arn = arn.replace('${LoadBalancerName}', loadBalancerName);
    arn = arn.replace('${LoadBalancerId}', loadBalancerId);
    arn = arn.replace('${ListenerId}', listenerId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type loadbalancer to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifResourceTag()
   */
  public onLoadbalancer(loadBalancerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticloadbalancing:${Region}:${Account}:loadbalancer/${LoadBalancerName}';
    arn = arn.replace('${LoadBalancerName}', loadBalancerName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The preface string for a tag key and value pair attached to a resource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTagExists(value: string | string[], operator?: string) {
    return this.if(`elasticloadbalancing:ResourceTag/`, value, operator || 'StringLike');
  }

  /**
   * A tag key and value pair
   *
   * Applies to resource types:
   * - loadbalancer
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`elasticloadbalancing:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
