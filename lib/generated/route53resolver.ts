import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [route53resolver](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53resolver.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Route53resolver extends PolicyStatement {
  public servicePrefix = 'route53resolver';

  /**
   * Statement provider for service [route53resolver](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53resolver.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate an Amazon VPC with a specified firewall rule group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateFirewallRuleGroup.html
   */
  public toAssociateFirewallRuleGroup() {
    return this.to('AssociateFirewallRuleGroup');
  }

  /**
   * Grants permission to associate a specified IP address with a Resolver endpoint. This is an IP address that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html
   */
  public toAssociateResolverEndpointIpAddress() {
    return this.to('AssociateResolverEndpointIpAddress');
  }

  /**
   * Grants permission to associate an Amazon VPC with a specified query logging configuration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html
   */
  public toAssociateResolverQueryLogConfig() {
    return this.to('AssociateResolverQueryLogConfig');
  }

  /**
   * Grants permission to associate a specified Resolver rule with a specified VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html
   */
  public toAssociateResolverRule() {
    return this.to('AssociateResolverRule');
  }

  /**
   * Grants permission to create a Firewall domain list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateFirewallDomainList.html
   */
  public toCreateFirewallDomainList() {
    return this.to('CreateFirewallDomainList');
  }

  /**
   * Grants permission to create a Firewall rule within a Firewall rule group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateFirewallRule.html
   */
  public toCreateFirewallRule() {
    return this.to('CreateFirewallRule');
  }

  /**
   * Grants permission to create a Firewall rule group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateFirewallRuleGroup.html
   */
  public toCreateFirewallRuleGroup() {
    return this.to('CreateFirewallRuleGroup');
  }

  /**
   * Grants permission to create a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html
   */
  public toCreateResolverEndpoint() {
    return this.to('CreateResolverEndpoint');
  }

  /**
   * Grants permission to create a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html
   */
  public toCreateResolverQueryLogConfig() {
    return this.to('CreateResolverQueryLogConfig');
  }

  /**
   * Grants permission to define how to route queries originating from your VPC out of the VPC
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html
   */
  public toCreateResolverRule() {
    return this.to('CreateResolverRule');
  }

  /**
   * Grants permission to delete a Firewall domain list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteFirewallDomainList.html
   */
  public toDeleteFirewallDomainList() {
    return this.to('DeleteFirewallDomainList');
  }

  /**
   * Grants permission to delete a Firewall rule within a Firewall rule group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteFirewallRule.html
   */
  public toDeleteFirewallRule() {
    return this.to('DeleteFirewallRule');
  }

  /**
   * Grants permission to delete a Firewall rule group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteFirewallRuleGroup.html
   */
  public toDeleteFirewallRuleGroup() {
    return this.to('DeleteFirewallRuleGroup');
  }

  /**
   * Grants permission to delete a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html
   */
  public toDeleteResolverEndpoint() {
    return this.to('DeleteResolverEndpoint');
  }

  /**
   * Grants permission to delete a Resolver query logging configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html
   */
  public toDeleteResolverQueryLogConfig() {
    return this.to('DeleteResolverQueryLogConfig');
  }

  /**
   * Grants permission to delete a Resolver rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html
   */
  public toDeleteResolverRule() {
    return this.to('DeleteResolverRule');
  }

  /**
   * Grants permission to remove the association between a specified Firewall rule group and a specified VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateFirewallRuleGroup.html
   */
  public toDisassociateFirewallRuleGroup() {
    return this.to('DisassociateFirewallRuleGroup');
  }

  /**
   * Grants permission to remove a specified IP address from a Resolver endpoint. This is an IP address that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html
   */
  public toDisassociateResolverEndpointIpAddress() {
    return this.to('DisassociateResolverEndpointIpAddress');
  }

  /**
   * Grants permission to remove the association between a specified Resolver query logging configuration and a specified VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html
   */
  public toDisassociateResolverQueryLogConfig() {
    return this.to('DisassociateResolverQueryLogConfig');
  }

  /**
   * Grants permission to remove the association between a specified Resolver rule and a specified VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html
   */
  public toDisassociateResolverRule() {
    return this.to('DisassociateResolverRule');
  }

  /**
   * Grants permission to get information about a specified Firewall config
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallConfig.html
   */
  public toGetFirewallConfig() {
    return this.to('GetFirewallConfig');
  }

  /**
   * Grants permission to get information about a specified Firewall domain list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallDomainList.html
   */
  public toGetFirewallDomainList() {
    return this.to('GetFirewallDomainList');
  }

  /**
   * Grants permission to get information about a specified Firewall rule group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallRuleGroup.html
   */
  public toGetFirewallRuleGroup() {
    return this.to('GetFirewallRuleGroup');
  }

  /**
   * Grants permission to get information about an association between a specified Firewall rule group and a VPC
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallRuleGroupAssociation.html
   */
  public toGetFirewallRuleGroupAssociation() {
    return this.to('GetFirewallRuleGroupAssociation');
  }

  /**
   * Grants permission to get information about a specified Firewall rule group policy, which specifies the Firewall rule group operations and resources that you want to allow another AWS account to use
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallRuleGroupPolicy.html
   */
  public toGetFirewallRuleGroupPolicy() {
    return this.to('GetFirewallRuleGroupPolicy');
  }

  /**
   * Grants permission to get the Resolver Config status within the specified resource
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverConfig.html
   */
  public toGetResolverConfig() {
    return this.to('GetResolverConfig');
  }

  /**
   * Grants permission to get the DNSSEC validation support status for DNS queries within the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverDnssecConfig.html
   */
  public toGetResolverDnssecConfig() {
    return this.to('GetResolverDnssecConfig');
  }

  /**
   * Grants permission to get information about a specified Resolver endpoint, such as whether it's an inbound or an outbound endpoint, and the IP addresses in your VPC that DNS queries are forwarded to on the way into or out of your VPC
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html
   */
  public toGetResolverEndpoint() {
    return this.to('GetResolverEndpoint');
  }

  /**
   * Grants permission to get information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html
   */
  public toGetResolverQueryLogConfig() {
    return this.to('GetResolverQueryLogConfig');
  }

  /**
   * Grants permission to get information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html
   */
  public toGetResolverQueryLogConfigAssociation() {
    return this.to('GetResolverQueryLogConfigAssociation');
  }

  /**
   * Grants permission to get information about a specified Resolver query logging policy, which specifies the Resolver query logging operations and resources that you want to allow another AWS account to use
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigPolicy.html
   */
  public toGetResolverQueryLogConfigPolicy() {
    return this.to('GetResolverQueryLogConfigPolicy');
  }

  /**
   * Grants permission to get information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the IP address that queries are forwarded to
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html
   */
  public toGetResolverRule() {
    return this.to('GetResolverRule');
  }

  /**
   * Grants permission to get information about an association between a specified Resolver rule and a VPC
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html
   */
  public toGetResolverRuleAssociation() {
    return this.to('GetResolverRuleAssociation');
  }

  /**
   * Grants permission to get information about a Resolver rule policy, which specifies the Resolver operations and resources that you want to allow another AWS account to use
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRulePolicy.html
   */
  public toGetResolverRulePolicy() {
    return this.to('GetResolverRulePolicy');
  }

  /**
   * Grants permission to add, remove or replace Firewall domains in a Firewall domain list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ImportFirewallDomains.html
   */
  public toImportFirewallDomains() {
    return this.to('ImportFirewallDomains');
  }

  /**
   * Grants permission to list all the Firewall config that current AWS account is able to check
   *
   * Access Level: List
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallConfigs.html
   */
  public toListFirewallConfigs() {
    return this.to('ListFirewallConfigs');
  }

  /**
   * Grants permission to list all the Firewall domain list that current AWS account is able to use
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallDomainLists.html
   */
  public toListFirewallDomainLists() {
    return this.to('ListFirewallDomainLists');
  }

  /**
   * Grants permission to list all the Firewall domain under a speicfied Firewall domain list
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallDomains.html
   */
  public toListFirewallDomains() {
    return this.to('ListFirewallDomains');
  }

  /**
   * Grants permission to list information about associations between Amazon VPCs and Firewall rule group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallRuleGroupAssociations.html
   */
  public toListFirewallRuleGroupAssociations() {
    return this.to('ListFirewallRuleGroupAssociations');
  }

  /**
   * Grants permission to list all the Firewall rule group that current AWS account is able to use
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallRuleGroups.html
   */
  public toListFirewallRuleGroups() {
    return this.to('ListFirewallRuleGroups');
  }

  /**
   * Grants permission to list all the Firewall rule under a speicfied Firewall rule group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallRules.html
   */
  public toListFirewallRules() {
    return this.to('ListFirewallRules');
  }

  /**
   * Grants permission to list Resolver Config statuses
   *
   * Access Level: List
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverConfigs.html
   */
  public toListResolverConfigs() {
    return this.to('ListResolverConfigs');
  }

  /**
   * Grants permission to list the DNSSEC validation support status for DNS queries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverDnssecConfigs.html
   */
  public toListResolverDnssecConfigs() {
    return this.to('ListResolverDnssecConfigs');
  }

  /**
   * Grants permission to list the IP addresses that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound) for a specified Resolver endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpointIpAddresses.html
   */
  public toListResolverEndpointIpAddresses() {
    return this.to('ListResolverEndpointIpAddresses');
  }

  /**
   * Grants permission to list all the Resolver endpoints that were created using the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html
   */
  public toListResolverEndpoints() {
    return this.to('ListResolverEndpoints');
  }

  /**
   * Grants permission to list information about associations between Amazon VPCs and query logging configurations
   *
   * Access Level: List
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html
   */
  public toListResolverQueryLogConfigAssociations() {
    return this.to('ListResolverQueryLogConfigAssociations');
  }

  /**
   * Grants permission to list information about the specified query logging configurations, which define where you want Resolver to save DNS query logs and specify the VPCs that you want to log queries for
   *
   * Access Level: List
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html
   */
  public toListResolverQueryLogConfigs() {
    return this.to('ListResolverQueryLogConfigs');
  }

  /**
   * Grants permission to list the associations that were created between Resolver rules and VPCs using the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html
   */
  public toListResolverRuleAssociations() {
    return this.to('ListResolverRuleAssociations');
  }

  /**
   * Grants permission to list the Resolver rules that were created using the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html
   */
  public toListResolverRules() {
    return this.to('ListResolverRules');
  }

  /**
   * Grants permission to list the tags that you associated with the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to specify an AWS account that you want to share a Firewall rule group with, the Firewall rule group that you want to share, and the operations that you want the account to be able to perform on the configuration
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutFirewallRuleGroupPolicy.html
   */
  public toPutFirewallRuleGroupPolicy() {
    return this.to('PutFirewallRuleGroupPolicy');
  }

  /**
   * Grants permission to specify an AWS account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverQueryLogConfigPolicy.html
   */
  public toPutResolverQueryLogConfigPolicy() {
    return this.to('PutResolverQueryLogConfigPolicy');
  }

  /**
   * Grants permission to specify an AWS account that you want to share rules with, the Resolver rules that you want to share, and the operations that you want the account to be able to perform on those rules
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverRulePolicy.html
   */
  public toPutResolverRulePolicy() {
    return this.to('PutResolverRulePolicy');
  }

  /**
   * Grants permission to add one or more tags to a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags from a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update selected settings for an Firewall config
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateFirewallConfig.html
   */
  public toUpdateFirewallConfig() {
    return this.to('UpdateFirewallConfig');
  }

  /**
   * Grants permission to add, remove or replace Firewall domains in a Firewall domain list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateFirewallDomains.html
   */
  public toUpdateFirewallDomains() {
    return this.to('UpdateFirewallDomains');
  }

  /**
   * Grants permission to update selected settings for an Firewall rule in a Firewall rule group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateFirewallRule.html
   */
  public toUpdateFirewallRule() {
    return this.to('UpdateFirewallRule');
  }

  /**
   * Grants permission to update selected settings for an Firewall rule group association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateFirewallRuleGroupAssociation.html
   */
  public toUpdateFirewallRuleGroupAssociation() {
    return this.to('UpdateFirewallRuleGroupAssociation');
  }

  /**
   * Grants permission to update the Resolver Config status within the specified resource
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverConfig.html
   */
  public toUpdateResolverConfig() {
    return this.to('UpdateResolverConfig');
  }

  /**
   * Grants permission to update the DNSSEC validation support status for DNS queries within the specified resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverDnssecConfig.html
   */
  public toUpdateResolverDnssecConfig() {
    return this.to('UpdateResolverDnssecConfig');
  }

  /**
   * Grants permission to update selected settings for an inbound or an outbound Resolver endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html
   */
  public toUpdateResolverEndpoint() {
    return this.to('UpdateResolverEndpoint');
  }

  /**
   * Grants permission to update settings for a specified Resolver rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html
   */
  public toUpdateResolverRule() {
    return this.to('UpdateResolverRule');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateFirewallRuleGroup',
      'AssociateResolverEndpointIpAddress',
      'AssociateResolverQueryLogConfig',
      'AssociateResolverRule',
      'CreateFirewallDomainList',
      'CreateFirewallRule',
      'CreateFirewallRuleGroup',
      'CreateResolverEndpoint',
      'CreateResolverQueryLogConfig',
      'CreateResolverRule',
      'DeleteFirewallDomainList',
      'DeleteFirewallRule',
      'DeleteFirewallRuleGroup',
      'DeleteResolverEndpoint',
      'DeleteResolverQueryLogConfig',
      'DeleteResolverRule',
      'DisassociateFirewallRuleGroup',
      'DisassociateResolverEndpointIpAddress',
      'DisassociateResolverQueryLogConfig',
      'DisassociateResolverRule',
      'ImportFirewallDomains',
      'UpdateFirewallConfig',
      'UpdateFirewallDomains',
      'UpdateFirewallRule',
      'UpdateFirewallRuleGroupAssociation',
      'UpdateResolverConfig',
      'UpdateResolverDnssecConfig',
      'UpdateResolverEndpoint',
      'UpdateResolverRule'
    ],
    Read: [
      'GetFirewallConfig',
      'GetFirewallDomainList',
      'GetFirewallRuleGroup',
      'GetFirewallRuleGroupAssociation',
      'GetFirewallRuleGroupPolicy',
      'GetResolverConfig',
      'GetResolverDnssecConfig',
      'GetResolverEndpoint',
      'GetResolverQueryLogConfig',
      'GetResolverQueryLogConfigAssociation',
      'GetResolverQueryLogConfigPolicy',
      'GetResolverRule',
      'GetResolverRuleAssociation',
      'GetResolverRulePolicy',
      'ListTagsForResource'
    ],
    List: [
      'ListFirewallConfigs',
      'ListFirewallDomainLists',
      'ListFirewallDomains',
      'ListFirewallRuleGroupAssociations',
      'ListFirewallRuleGroups',
      'ListFirewallRules',
      'ListResolverConfigs',
      'ListResolverDnssecConfigs',
      'ListResolverEndpointIpAddresses',
      'ListResolverEndpoints',
      'ListResolverQueryLogConfigAssociations',
      'ListResolverQueryLogConfigs',
      'ListResolverRuleAssociations',
      'ListResolverRules'
    ],
    'Permissions management': [
      'PutFirewallRuleGroupPolicy',
      'PutResolverQueryLogConfigPolicy',
      'PutResolverRulePolicy'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type resolver-dnssec-config to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResolverDnssecConfig(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Route53resolver.defaultPartition }:route53resolver:${ region || '*' }:${ account || '*' }:resolver-dnssec-config/${ resourceId }`);
  }

  /**
   * Adds a resource of type resolver-query-log-config to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResolverQueryLogConfig(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Route53resolver.defaultPartition }:route53resolver:${ region || '*' }:${ account || '*' }:resolver-query-log-config/${ resourceId }`);
  }

  /**
   * Adds a resource of type resolver-rule to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResolverRule(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Route53resolver.defaultPartition }:route53resolver:${ region || '*' }:${ account || '*' }:resolver-rule/${ resourceId }`);
  }

  /**
   * Adds a resource of type resolver-endpoint to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResolverEndpoint(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Route53resolver.defaultPartition }:route53resolver:${ region || '*' }:${ account || '*' }:resolver-endpoint/${ resourceId }`);
  }

  /**
   * Adds a resource of type firewall-rule-group to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFirewallRuleGroup(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Route53resolver.defaultPartition }:route53resolver:${ region || '*' }:${ account || '*' }:firewall-rule-group/${ resourceId }`);
  }

  /**
   * Adds a resource of type firewall-rule-group-association to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFirewallRuleGroupAssociation(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Route53resolver.defaultPartition }:route53resolver:${ region || '*' }:${ account || '*' }:firewall-rule-group-association/${ resourceId }`);
  }

  /**
   * Adds a resource of type firewall-domain-list to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFirewallDomainList(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Route53resolver.defaultPartition }:route53resolver:${ region || '*' }:${ account || '*' }:firewall-domain-list/${ resourceId }`);
  }

  /**
   * Adds a resource of type firewall-config to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFirewallConfig(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Route53resolver.defaultPartition }:route53resolver:${ region || '*' }:${ account || '*' }:firewall-config/${ resourceId }`);
  }

  /**
   * Adds a resource of type resolver-config to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onResolverConfig(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Route53resolver.defaultPartition }:route53resolver:${ region || '*' }:${ account || '*' }:resolver-config/${ resourceId }`);
  }
}
