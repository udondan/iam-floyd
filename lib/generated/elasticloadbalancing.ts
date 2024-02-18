import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [elasticloadbalancing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticloadbalancing.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Elasticloadbalancing extends PolicyStatement {
  public servicePrefix = 'elasticloadbalancing';

  /**
   * Statement provider for service [elasticloadbalancing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticloadbalancing.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   * - .ifCreateAction()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_AddTags.html
   */
  public toAddTags() {
    return this.to('AddTags');
  }

  /**
   * Grants permission to associate one or more security groups with your load balancer in a virtual private cloud (VPC)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   * - .ifSecurityGroup()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ApplySecurityGroupsToLoadBalancer.html
   */
  public toApplySecurityGroupsToLoadBalancer() {
    return this.to('ApplySecurityGroupsToLoadBalancer');
  }

  /**
   * Grants permission to add one or more subnets to the set of configured subnets for the specified load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   * - .ifSubnet()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_AttachLoadBalancerToSubnets.html
   */
  public toAttachLoadBalancerToSubnets() {
    return this.to('AttachLoadBalancerToSubnets');
  }

  /**
   * Grants permission to specify the health check settings to use when evaluating the health state of your back-end instances
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ConfigureHealthCheck.html
   */
  public toConfigureHealthCheck() {
    return this.to('ConfigureHealthCheck');
  }

  /**
   * Grants permission to generate a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateAppCookieStickinessPolicy.html
   */
  public toCreateAppCookieStickinessPolicy() {
    return this.to('CreateAppCookieStickinessPolicy');
  }

  /**
   * Grants permission to generate a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLBCookieStickinessPolicy.html
   */
  public toCreateLBCookieStickinessPolicy() {
    return this.to('CreateLBCookieStickinessPolicy');
  }

  /**
   * Grants permission to create a load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   * - .ifSecurityGroup()
   * - .ifSubnet()
   * - .ifScheme()
   * - .ifListenerProtocol()
   *
   * Dependent actions:
   * - elasticloadbalancing:AddTags
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancer.html
   */
  public toCreateLoadBalancer() {
    return this.to('CreateLoadBalancer');
  }

  /**
   * Grants permission to create one or more listeners for the specified load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   * - .ifListenerProtocol()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancerListeners.html
   */
  public toCreateLoadBalancerListeners() {
    return this.to('CreateLoadBalancerListeners');
  }

  /**
   * Grants permission to create a policy with the specified attributes for the specified load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   * - .ifSecurityPolicy()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancerPolicy.html
   */
  public toCreateLoadBalancerPolicy() {
    return this.to('CreateLoadBalancerPolicy');
  }

  /**
   * Grants permission to delete the specified load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancer.html
   */
  public toDeleteLoadBalancer() {
    return this.to('DeleteLoadBalancer');
  }

  /**
   * Grants permission to delete the specified listeners from the specified load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancerListeners.html
   */
  public toDeleteLoadBalancerListeners() {
    return this.to('DeleteLoadBalancerListeners');
  }

  /**
   * Grants permission to delete the specified policy from the specified load balancer. This policy must not be enabled for any listeners
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancerPolicy.html
   */
  public toDeleteLoadBalancerPolicy() {
    return this.to('DeleteLoadBalancerPolicy');
  }

  /**
   * Grants permission to deregister the specified instances from the specified load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeregisterInstancesFromLoadBalancer.html
   */
  public toDeregisterInstancesFromLoadBalancer() {
    return this.to('DeregisterInstancesFromLoadBalancer');
  }

  /**
   * Grants permission to describe the state of the specified instances with respect to the specified load balancer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeInstanceHealth.html
   */
  public toDescribeInstanceHealth() {
    return this.to('DescribeInstanceHealth');
  }

  /**
   * Grants permission to describe the attributes for the specified load balancer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerAttributes.html
   */
  public toDescribeLoadBalancerAttributes() {
    return this.to('DescribeLoadBalancerAttributes');
  }

  /**
   * Grants permission to describe the specified policies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerPolicies.html
   */
  public toDescribeLoadBalancerPolicies() {
    return this.to('DescribeLoadBalancerPolicies');
  }

  /**
   * Grants permission to describe the specified load balancer policy types
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerPolicyTypes.html
   */
  public toDescribeLoadBalancerPolicyTypes() {
    return this.to('DescribeLoadBalancerPolicyTypes');
  }

  /**
   * Grants permission to describe the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html
   */
  public toDescribeLoadBalancers() {
    return this.to('DescribeLoadBalancers');
  }

  /**
   * Grants permission to describe the tags associated with the specified load balancers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    return this.to('DescribeTags');
  }

  /**
   * Grants permission to remove the specified subnets from the set of configured subnets for the load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DetachLoadBalancerFromSubnets.html
   */
  public toDetachLoadBalancerFromSubnets() {
    return this.to('DetachLoadBalancerFromSubnets');
  }

  /**
   * Grants permission to remove the specified Availability Zones from the set of Availability Zones for the specified load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DisableAvailabilityZonesForLoadBalancer.html
   */
  public toDisableAvailabilityZonesForLoadBalancer() {
    return this.to('DisableAvailabilityZonesForLoadBalancer');
  }

  /**
   * Grants permission to add the specified Availability Zones to the set of Availability Zones for the specified load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_EnableAvailabilityZonesForLoadBalancer.html
   */
  public toEnableAvailabilityZonesForLoadBalancer() {
    return this.to('EnableAvailabilityZonesForLoadBalancer');
  }

  /**
   * Grants permission to modify the attributes of the specified load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ModifyLoadBalancerAttributes.html
   */
  public toModifyLoadBalancerAttributes() {
    return this.to('ModifyLoadBalancerAttributes');
  }

  /**
   * Grants permission to add the specified instances to the specified load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_RegisterInstancesWithLoadBalancer.html
   */
  public toRegisterInstancesWithLoadBalancer() {
    return this.to('RegisterInstancesWithLoadBalancer');
  }

  /**
   * Grants permission to remove one or more tags from the specified load balancer
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_RemoveTags.html
   */
  public toRemoveTags() {
    return this.to('RemoveTags');
  }

  /**
   * Grants permission to set the certificate that terminates the specified listener's SSL connections
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerListenerSSLCertificate.html
   */
  public toSetLoadBalancerListenerSSLCertificate() {
    return this.to('SetLoadBalancerListenerSSLCertificate');
  }

  /**
   * Grants permission to replace the set of policies associated with the specified port on which the back-end server is listening with a new set of policies
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerPoliciesForBackendServer.html
   */
  public toSetLoadBalancerPoliciesForBackendServer() {
    return this.to('SetLoadBalancerPoliciesForBackendServer');
  }

  /**
   * Grants permission to replace the current set of policies for the specified load balancer port with the specified set of policies
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   * - .ifSecurityPolicy()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerPoliciesOfListener.html
   */
  public toSetLoadBalancerPoliciesOfListener() {
    return this.to('SetLoadBalancerPoliciesOfListener');
  }

  protected accessLevelList: AccessLevelList = {
    Tagging: [
      'AddTags',
      'RemoveTags'
    ],
    Write: [
      'ApplySecurityGroupsToLoadBalancer',
      'AttachLoadBalancerToSubnets',
      'ConfigureHealthCheck',
      'CreateAppCookieStickinessPolicy',
      'CreateLBCookieStickinessPolicy',
      'CreateLoadBalancer',
      'CreateLoadBalancerListeners',
      'CreateLoadBalancerPolicy',
      'DeleteLoadBalancer',
      'DeleteLoadBalancerListeners',
      'DeleteLoadBalancerPolicy',
      'DeregisterInstancesFromLoadBalancer',
      'DetachLoadBalancerFromSubnets',
      'DisableAvailabilityZonesForLoadBalancer',
      'EnableAvailabilityZonesForLoadBalancer',
      'ModifyLoadBalancerAttributes',
      'RegisterInstancesWithLoadBalancer',
      'SetLoadBalancerListenerSSLCertificate',
      'SetLoadBalancerPoliciesForBackendServer',
      'SetLoadBalancerPoliciesOfListener'
    ],
    Read: [
      'DescribeInstanceHealth',
      'DescribeLoadBalancerAttributes',
      'DescribeLoadBalancerPolicies',
      'DescribeLoadBalancerPolicyTypes',
      'DescribeTags'
    ],
    List: [
      'DescribeLoadBalancers'
    ]
  };

  /**
   * Adds a resource of type loadbalancer to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onLoadbalancer(loadBalancerName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticloadbalancing:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:loadbalancer/${ loadBalancerName }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toCreateLoadBalancer()
   * - .toRemoveTags()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toApplySecurityGroupsToLoadBalancer()
   * - .toAttachLoadBalancerToSubnets()
   * - .toConfigureHealthCheck()
   * - .toCreateAppCookieStickinessPolicy()
   * - .toCreateLBCookieStickinessPolicy()
   * - .toCreateLoadBalancer()
   * - .toCreateLoadBalancerListeners()
   * - .toCreateLoadBalancerPolicy()
   * - .toDeleteLoadBalancer()
   * - .toDeleteLoadBalancerListeners()
   * - .toDeleteLoadBalancerPolicy()
   * - .toDeregisterInstancesFromLoadBalancer()
   * - .toDetachLoadBalancerFromSubnets()
   * - .toDisableAvailabilityZonesForLoadBalancer()
   * - .toEnableAvailabilityZonesForLoadBalancer()
   * - .toModifyLoadBalancerAttributes()
   * - .toRegisterInstancesWithLoadBalancer()
   * - .toRemoveTags()
   * - .toSetLoadBalancerListenerSSLCertificate()
   * - .toSetLoadBalancerPoliciesForBackendServer()
   * - .toSetLoadBalancerPoliciesOfListener()
   *
   * Applies to resource types:
   * - loadbalancer
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toCreateLoadBalancer()
   * - .toRemoveTags()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of a resource-creating API action
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/tagging-resources-during-creation.html
   *
   * Applies to actions:
   * - .toAddTags()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCreateAction(value: string | string[], operator?: Operator | string) {
    return this.if(`CreateAction`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the listener protocols that are allowed in the request
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/security_iam_service-with-iam.html#listenerprotocol-condition
   *
   * Applies to actions:
   * - .toCreateLoadBalancer()
   * - .toCreateLoadBalancerListeners()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifListenerProtocol(value: string | string[], operator?: Operator | string) {
    return this.if(`ListenerProtocol`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the preface string for a tag key and value pair that are attached to a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTagExists(value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the preface string for a tag key and value pair that are attached to a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toApplySecurityGroupsToLoadBalancer()
   * - .toAttachLoadBalancerToSubnets()
   * - .toConfigureHealthCheck()
   * - .toCreateAppCookieStickinessPolicy()
   * - .toCreateLBCookieStickinessPolicy()
   * - .toCreateLoadBalancer()
   * - .toCreateLoadBalancerListeners()
   * - .toCreateLoadBalancerPolicy()
   * - .toDeleteLoadBalancer()
   * - .toDeleteLoadBalancerListeners()
   * - .toDeleteLoadBalancerPolicy()
   * - .toDeregisterInstancesFromLoadBalancer()
   * - .toDetachLoadBalancerFromSubnets()
   * - .toDisableAvailabilityZonesForLoadBalancer()
   * - .toEnableAvailabilityZonesForLoadBalancer()
   * - .toModifyLoadBalancerAttributes()
   * - .toRegisterInstancesWithLoadBalancer()
   * - .toRemoveTags()
   * - .toSetLoadBalancerListenerSSLCertificate()
   * - .toSetLoadBalancerPoliciesForBackendServer()
   * - .toSetLoadBalancerPoliciesOfListener()
   *
   * Applies to resource types:
   * - loadbalancer
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the load balancer scheme that are allowed in the request
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/security_iam_service-with-iam.html#scheme-condition
   *
   * Applies to actions:
   * - .toCreateLoadBalancer()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifScheme(value: string | string[], operator?: Operator | string) {
    return this.if(`Scheme`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the security-group IDs that are allowed in the request
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/security_iam_service-with-iam.html#securitygroup-condition
   *
   * Applies to actions:
   * - .toApplySecurityGroupsToLoadBalancer()
   * - .toCreateLoadBalancer()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecurityGroup(value: string | string[], operator?: Operator | string) {
    return this.if(`SecurityGroup`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the SSL Security Policies that are allowed in the request
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/security_iam_service-with-iam.html#securitypolicy-condition
   *
   * Applies to actions:
   * - .toCreateLoadBalancerPolicy()
   * - .toSetLoadBalancerPoliciesOfListener()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecurityPolicy(value: string | string[], operator?: Operator | string) {
    return this.if(`SecurityPolicy`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the subnet IDs that are allowed in the request
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/security_iam_service-with-iam.html#subnet-condition
   *
   * Applies to actions:
   * - .toAttachLoadBalancerToSubnets()
   * - .toCreateLoadBalancer()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubnet(value: string | string[], operator?: Operator | string) {
    return this.if(`Subnet`, value, operator ?? 'StringLike');
  }
}
