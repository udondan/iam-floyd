import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [elasticloadbalancing-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticloadbalancingv2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ElasticloadbalancingV2 extends PolicyStatement {
  public servicePrefix = 'elasticloadbalancing';

  /**
   * Statement provider for service [elasticloadbalancing-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticloadbalancingv2.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add the specified certificates to the specified secure listener
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
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
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   * - .ifCreateAction()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_AddTags.html
   */
  public toAddTags() {
    return this.to('AddTags');
  }

  /**
   * Grants permission to add revocations to a trust store
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_AddTrustStoreRevocations.html
   */
  public toAddTrustStoreRevocations() {
    return this.to('AddTrustStoreRevocations');
  }

  /**
   * Grants permission to create a listener for the specified Application Load Balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   * - .ifSecurityPolicy()
   * - .ifListenerProtocol()
   *
   * Dependent actions:
   * - elasticloadbalancing:AddTags
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
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   * - .ifSecurityGroup()
   * - .ifSubnet()
   * - .ifScheme()
   *
   * Dependent actions:
   * - elasticloadbalancing:AddTags
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
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * Dependent actions:
   * - elasticloadbalancing:AddTags
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
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * Dependent actions:
   * - elasticloadbalancing:AddTags
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTargetGroup.html
   */
  public toCreateTargetGroup() {
    return this.to('CreateTargetGroup');
  }

  /**
   * Grants permission to create a trust store
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * Dependent actions:
   * - elasticloadbalancing:AddTags
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTrustStore.html
   */
  public toCreateTrustStore() {
    return this.to('CreateTrustStore');
  }

  /**
   * Grants permission to delete the specified listener
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteRule.html
   */
  public toDeleteRule() {
    return this.to('DeleteRule');
  }

  /**
   * Grants permission to delete the specified shared trust store association
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteSharedTrustStoreAssociation.html
   */
  public toDeleteSharedTrustStoreAssociation() {
    return this.to('DeleteSharedTrustStoreAssociation');
  }

  /**
   * Grants permission to delete the specified target group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteTargetGroup.html
   */
  public toDeleteTargetGroup() {
    return this.to('DeleteTargetGroup');
  }

  /**
   * Grants permission to delete the specified trust store
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteTrustStore.html
   */
  public toDeleteTrustStore() {
    return this.to('DeleteTrustStore');
  }

  /**
   * Grants permission to deregister the specified targets from the specified target group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
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
   * Grants permission to describe the capacity reservation for a load balancer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeCapacityReservation.html
   */
  public toDescribeCapacityReservation() {
    return this.to('DescribeCapacityReservation');
  }

  /**
   * Grants permission to describe the attributes for the specified listener
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeListenerAttributes.html
   */
  public toDescribeListenerAttributes() {
    return this.to('DescribeListenerAttributes');
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
   * Grants permission to describe the associations with a trust store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTrustStoreAssociations.html
   */
  public toDescribeTrustStoreAssociations() {
    return this.to('DescribeTrustStoreAssociations');
  }

  /**
   * Grants permission to describe the specified trust stores revocations or all of your revocations related to a trust store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTrustStoreRevocations.html
   */
  public toDescribeTrustStoreRevocations() {
    return this.to('DescribeTrustStoreRevocations');
  }

  /**
   * Grants permission to describe the specified trust stores or all of your trust stores
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTrustStores.html
   */
  public toDescribeTrustStores() {
    return this.to('DescribeTrustStores');
  }

  /**
   * Grants permission to retrieve the resource policy associated with the resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to retrieve a trust store CA certificates bundle
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_GetTrustStoreCaCertificatesBundle.html
   */
  public toGetTrustStoreCaCertificatesBundle() {
    return this.to('GetTrustStoreCaCertificatesBundle');
  }

  /**
   * Grants permission to retrieve a trust store revocation content
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_GetTrustStoreRevocationContent.html
   */
  public toGetTrustStoreRevocationContent() {
    return this.to('GetTrustStoreRevocationContent');
  }

  /**
   * Grants permission to modify the capacity reservation for a load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyCapacityReservation.html
   */
  public toModifyCapacityReservation() {
    return this.to('ModifyCapacityReservation');
  }

  /**
   * Grants permission to modify the ip pools for a load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyIpPools.html
   */
  public toModifyIpPools() {
    return this.to('ModifyIpPools');
  }

  /**
   * Grants permission to modify the specified properties of the specified listener
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   * - .ifSecurityPolicy()
   * - .ifListenerProtocol()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyListener.html
   */
  public toModifyListener() {
    return this.to('ModifyListener');
  }

  /**
   * Grants permission to modify the attributes of the specified listener
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyListenerAttributes.html
   */
  public toModifyListenerAttributes() {
    return this.to('ModifyListenerAttributes');
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTargetGroupAttributes.html
   */
  public toModifyTargetGroupAttributes() {
    return this.to('ModifyTargetGroupAttributes');
  }

  /**
   * Grants permission to modify the specified trust store
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTrustStore.html
   */
  public toModifyTrustStore() {
    return this.to('ModifyTrustStore');
  }

  /**
   * Grants permission to register the specified targets with the specified target group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
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
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RemoveTags.html
   */
  public toRemoveTags() {
    return this.to('RemoveTags');
  }

  /**
   * Grants permission to remove revocations from a trust store
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RemoveTrustStoreRevocations.html
   */
  public toRemoveTrustStoreRevocations() {
    return this.to('RemoveTrustStoreRevocations');
  }

  /**
   * Grants permission to set the type of IP addresses used by the subnets of the specified load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   * - .ifSecurityGroup()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   * - .ifSubnet()
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
      'AddTrustStoreRevocations',
      'CreateListener',
      'CreateLoadBalancer',
      'CreateRule',
      'CreateTargetGroup',
      'CreateTrustStore',
      'DeleteListener',
      'DeleteLoadBalancer',
      'DeleteRule',
      'DeleteSharedTrustStoreAssociation',
      'DeleteTargetGroup',
      'DeleteTrustStore',
      'DeregisterTargets',
      'ModifyCapacityReservation',
      'ModifyIpPools',
      'ModifyListener',
      'ModifyListenerAttributes',
      'ModifyLoadBalancerAttributes',
      'ModifyRule',
      'ModifyTargetGroup',
      'ModifyTargetGroupAttributes',
      'ModifyTrustStore',
      'RegisterTargets',
      'RemoveListenerCertificates',
      'RemoveTrustStoreRevocations',
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
      'DescribeCapacityReservation',
      'DescribeListenerAttributes',
      'DescribeListenerCertificates',
      'DescribeListeners',
      'DescribeLoadBalancerAttributes',
      'DescribeLoadBalancers',
      'DescribeRules',
      'DescribeSSLPolicies',
      'DescribeTags',
      'DescribeTargetGroupAttributes',
      'DescribeTargetGroups',
      'DescribeTargetHealth',
      'DescribeTrustStoreAssociations',
      'DescribeTrustStoreRevocations',
      'DescribeTrustStores',
      'GetResourcePolicy',
      'GetTrustStoreCaCertificatesBundle',
      'GetTrustStoreRevocationContent'
    ]
  };

  /**
   * Adds a resource of type listener/gwy to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param listenerId - Identifier for the listenerId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onListenerGwy(loadBalancerName: string, loadBalancerId: string, listenerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticloadbalancing:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:listener/gwy/${ loadBalancerName }/${ loadBalancerId }/${ listenerId }`);
  }

  /**
   * Adds a resource of type listener/app to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param listenerId - Identifier for the listenerId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onListenerApp(loadBalancerName: string, loadBalancerId: string, listenerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticloadbalancing:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:listener/app/${ loadBalancerName }/${ loadBalancerId }/${ listenerId }`);
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onListenerRuleApp(loadBalancerName: string, loadBalancerId: string, listenerId: string, listenerRuleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticloadbalancing:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:listener-rule/app/${ loadBalancerName }/${ loadBalancerId }/${ listenerId }/${ listenerRuleId }`);
  }

  /**
   * Adds a resource of type listener/net to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param listenerId - Identifier for the listenerId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onListenerNet(loadBalancerName: string, loadBalancerId: string, listenerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticloadbalancing:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:listener/net/${ loadBalancerName }/${ loadBalancerId }/${ listenerId }`);
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onListenerRuleNet(loadBalancerName: string, loadBalancerId: string, listenerId: string, listenerRuleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticloadbalancing:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:listener-rule/net/${ loadBalancerName }/${ loadBalancerId }/${ listenerId }/${ listenerRuleId }`);
  }

  /**
   * Adds a resource of type loadbalancer/gwy/ to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onLoadbalancerGwy(loadBalancerName: string, loadBalancerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticloadbalancing:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:loadbalancer/gwy/${ loadBalancerName }/${ loadBalancerId }`);
  }

  /**
   * Adds a resource of type loadbalancer/app/ to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html#application-load-balancer-overview
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onLoadbalancerApp(loadBalancerName: string, loadBalancerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticloadbalancing:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:loadbalancer/app/${ loadBalancerName }/${ loadBalancerId }`);
  }

  /**
   * Adds a resource of type loadbalancer/net/ to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html#network-load-balancer-overview
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onLoadbalancerNet(loadBalancerName: string, loadBalancerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticloadbalancing:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:loadbalancer/net/${ loadBalancerName }/${ loadBalancerId }`);
  }

  /**
   * Adds a resource of type targetgroup to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html
   *
   * @param targetGroupName - Identifier for the targetGroupName.
   * @param targetGroupId - Identifier for the targetGroupId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTargetgroup(targetGroupName: string, targetGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticloadbalancing:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:targetgroup/${ targetGroupName }/${ targetGroupId }`);
  }

  /**
   * Adds a resource of type truststore to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/application/trust-store.html
   *
   * @param trustStoreName - Identifier for the trustStoreName.
   * @param trustStoreId - Identifier for the trustStoreId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTruststore(trustStoreName: string, trustStoreId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elasticloadbalancing:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:truststore/${ trustStoreName }/${ trustStoreId }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toCreateListener()
   * - .toCreateLoadBalancer()
   * - .toCreateRule()
   * - .toCreateTargetGroup()
   * - .toCreateTrustStore()
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
   * - .toAddListenerCertificates()
   * - .toAddTags()
   * - .toAddTrustStoreRevocations()
   * - .toCreateListener()
   * - .toCreateLoadBalancer()
   * - .toCreateRule()
   * - .toCreateTargetGroup()
   * - .toCreateTrustStore()
   * - .toDeleteListener()
   * - .toDeleteLoadBalancer()
   * - .toDeleteRule()
   * - .toDeleteSharedTrustStoreAssociation()
   * - .toDeleteTargetGroup()
   * - .toDeleteTrustStore()
   * - .toDeregisterTargets()
   * - .toGetResourcePolicy()
   * - .toGetTrustStoreCaCertificatesBundle()
   * - .toGetTrustStoreRevocationContent()
   * - .toModifyCapacityReservation()
   * - .toModifyIpPools()
   * - .toModifyListener()
   * - .toModifyListenerAttributes()
   * - .toModifyLoadBalancerAttributes()
   * - .toModifyRule()
   * - .toModifyTargetGroup()
   * - .toModifyTargetGroupAttributes()
   * - .toModifyTrustStore()
   * - .toRegisterTargets()
   * - .toRemoveListenerCertificates()
   * - .toRemoveTags()
   * - .toRemoveTrustStoreRevocations()
   * - .toSetIpAddressType()
   * - .toSetSecurityGroups()
   * - .toSetSubnets()
   *
   * Applies to resource types:
   * - listener/gwy
   * - listener/app
   * - listener-rule/app
   * - listener/net
   * - listener-rule/net
   * - loadbalancer/gwy/
   * - loadbalancer/app/
   * - loadbalancer/net/
   * - targetgroup
   * - truststore
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
   * - .toCreateListener()
   * - .toCreateLoadBalancer()
   * - .toCreateRule()
   * - .toCreateTargetGroup()
   * - .toCreateTrustStore()
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
   * Filters access by the listener protocol that is allowed in the request
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/security_iam_service-with-iam.html#listenerprotocol-condition
   *
   * Applies to actions:
   * - .toCreateListener()
   * - .toModifyListener()
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
   * Applies to actions:
   * - .toAddListenerCertificates()
   * - .toAddTags()
   * - .toAddTrustStoreRevocations()
   * - .toCreateListener()
   * - .toCreateLoadBalancer()
   * - .toCreateRule()
   * - .toCreateTargetGroup()
   * - .toCreateTrustStore()
   * - .toDeleteListener()
   * - .toDeleteLoadBalancer()
   * - .toDeleteRule()
   * - .toDeleteSharedTrustStoreAssociation()
   * - .toDeleteTargetGroup()
   * - .toDeleteTrustStore()
   * - .toDeregisterTargets()
   * - .toGetResourcePolicy()
   * - .toGetTrustStoreCaCertificatesBundle()
   * - .toGetTrustStoreRevocationContent()
   * - .toModifyCapacityReservation()
   * - .toModifyIpPools()
   * - .toModifyListener()
   * - .toModifyListenerAttributes()
   * - .toModifyLoadBalancerAttributes()
   * - .toModifyRule()
   * - .toModifyTargetGroup()
   * - .toModifyTargetGroupAttributes()
   * - .toModifyTrustStore()
   * - .toRegisterTargets()
   * - .toRemoveListenerCertificates()
   * - .toRemoveTags()
   * - .toRemoveTrustStoreRevocations()
   * - .toSetIpAddressType()
   * - .toSetSecurityGroups()
   * - .toSetSubnets()
   *
   * Applies to resource types:
   * - listener/gwy
   * - listener/app
   * - listener-rule/app
   * - listener/net
   * - listener-rule/net
   * - loadbalancer/gwy/
   * - loadbalancer/app/
   * - loadbalancer/net/
   * - targetgroup
   * - truststore
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the load balancer scheme that is allowed in the request
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
   * - .toCreateLoadBalancer()
   * - .toSetSecurityGroups()
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
   * - .toCreateListener()
   * - .toModifyListener()
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
   * - .toCreateLoadBalancer()
   * - .toSetSubnets()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubnet(value: string | string[], operator?: Operator | string) {
    return this.if(`Subnet`, value, operator ?? 'StringLike');
  }
}
