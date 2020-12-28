import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
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
   * Grants permission to create a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html
   */
  public toCreateResolverQueryLogConfig() {
    return this.to('CreateResolverQueryLogConfig');
  }

  /**
   * For DNS queries that originate in your VPC, grants permission to define how to route the queries out of the VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html
   */
  public toCreateResolverRule() {
    return this.to('CreateResolverRule');
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
   * Grants permission to get information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the IP address that queries are forwarded to.
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
   * For a specified Resolver endpoint, grants permission to list the IP addresses that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound)
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
   * Grants permission to specify an AWS account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverQueryLogConfigPolicy.html
   */
  public toPutResolverQueryLogConfigPolicy() {
    return this.to('PutResolverQueryLogConfigPolicy');
  }

  /**
   * Grants permission to specify an AWS account that you want to share rules with, the Resolver rules that you want to share, and the operations that you want the account to be able to perform on those rules
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
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
    "Write": [
      "AssociateResolverEndpointIpAddress",
      "AssociateResolverQueryLogConfig",
      "AssociateResolverRule",
      "CreateResolverEndpoint",
      "CreateResolverQueryLogConfig",
      "CreateResolverRule",
      "DeleteResolverEndpoint",
      "DeleteResolverQueryLogConfig",
      "DeleteResolverRule",
      "DisassociateResolverEndpointIpAddress",
      "DisassociateResolverQueryLogConfig",
      "DisassociateResolverRule",
      "PutResolverQueryLogConfigPolicy",
      "PutResolverRulePolicy",
      "UpdateResolverDnssecConfig",
      "UpdateResolverEndpoint",
      "UpdateResolverRule"
    ],
    "Read": [
      "GetResolverDnssecConfig",
      "GetResolverEndpoint",
      "GetResolverQueryLogConfig",
      "GetResolverQueryLogConfigAssociation",
      "GetResolverQueryLogConfigPolicy",
      "GetResolverRule",
      "GetResolverRuleAssociation",
      "GetResolverRulePolicy",
      "ListTagsForResource"
    ],
    "List": [
      "ListResolverDnssecConfigs",
      "ListResolverEndpointIpAddresses",
      "ListResolverEndpoints",
      "ListResolverQueryLogConfigAssociations",
      "ListResolverQueryLogConfigs",
      "ListResolverRuleAssociations",
      "ListResolverRules"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResolverDnssecConfig(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53resolver:${Region}:${Account}:resolver-dnssec-config/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type resolver-query-log-config to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResolverQueryLogConfig(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53resolver:${Region}:${Account}:resolver-query-log-config/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type resolver-rule to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResolverRule(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53resolver:${Region}:${Account}:resolver-rule/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type resolver-endpoint to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResolverEndpoint(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53resolver:${Region}:${Account}:resolver-endpoint/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
