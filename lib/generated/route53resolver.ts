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
    this.to('route53resolver:AssociateResolverEndpointIpAddress');
    return this;
  }

  /**
   * Grants permission to associate an Amazon VPC with a specified query logging configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html
   */
  public toAssociateResolverQueryLogConfig() {
    this.to('route53resolver:AssociateResolverQueryLogConfig');
    return this;
  }

  /**
   * Grants permission to associate a specified Resolver rule with a specified VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html
   */
  public toAssociateResolverRule() {
    this.to('route53resolver:AssociateResolverRule');
    return this;
  }

  /**
   * Grants permission to create a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html
   */
  public toCreateResolverEndpoint() {
    this.to('route53resolver:CreateResolverEndpoint');
    return this;
  }

  /**
   * Grants permission to create a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html
   */
  public toCreateResolverQueryLogConfig() {
    this.to('route53resolver:CreateResolverQueryLogConfig');
    return this;
  }

  /**
   * For DNS queries that originate in your VPC, grants permission to define how to route the queries out of the VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html
   */
  public toCreateResolverRule() {
    this.to('route53resolver:CreateResolverRule');
    return this;
  }

  /**
   * Grants permission to delete a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html
   */
  public toDeleteResolverEndpoint() {
    this.to('route53resolver:DeleteResolverEndpoint');
    return this;
  }

  /**
   * Grants permission to delete a Resolver query logging configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html
   */
  public toDeleteResolverQueryLogConfig() {
    this.to('route53resolver:DeleteResolverQueryLogConfig');
    return this;
  }

  /**
   * Grants permission to delete a Resolver rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html
   */
  public toDeleteResolverRule() {
    this.to('route53resolver:DeleteResolverRule');
    return this;
  }

  /**
   * Grants permission to remove a specified IP address from a Resolver endpoint. This is an IP address that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html
   */
  public toDisassociateResolverEndpointIpAddress() {
    this.to('route53resolver:DisassociateResolverEndpointIpAddress');
    return this;
  }

  /**
   * Grants permission to remove the association between a specified Resolver query logging configuration and a specified VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html
   */
  public toDisassociateResolverQueryLogConfig() {
    this.to('route53resolver:DisassociateResolverQueryLogConfig');
    return this;
  }

  /**
   * Grants permission to remove the association between a specified Resolver rule and a specified VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html
   */
  public toDisassociateResolverRule() {
    this.to('route53resolver:DisassociateResolverRule');
    return this;
  }

  /**
   * Grants permission to get information about a specified Resolver endpoint, such as whether it's an inbound or an outbound endpoint, and the IP addresses in your VPC that DNS queries are forwarded to on the way into or out of your VPC
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html
   */
  public toGetResolverEndpoint() {
    this.to('route53resolver:GetResolverEndpoint');
    return this;
  }

  /**
   * Grants permission to get information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html
   */
  public toGetResolverQueryLogConfig() {
    this.to('route53resolver:GetResolverQueryLogConfig');
    return this;
  }

  /**
   * Grants permission to get information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html
   */
  public toGetResolverQueryLogConfigAssociation() {
    this.to('route53resolver:GetResolverQueryLogConfigAssociation');
    return this;
  }

  /**
   * Grants permission to get information about a specified Resolver query logging policy, which specifies the Resolver query logging operations and resources that you want to allow another AWS account to use
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigPolicy.html
   */
  public toGetResolverQueryLogConfigPolicy() {
    this.to('route53resolver:GetResolverQueryLogConfigPolicy');
    return this;
  }

  /**
   * Grants permission to get information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the IP address that queries are forwarded to.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html
   */
  public toGetResolverRule() {
    this.to('route53resolver:GetResolverRule');
    return this;
  }

  /**
   * Grants permission to get information about an association between a specified Resolver rule and a VPC
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html
   */
  public toGetResolverRuleAssociation() {
    this.to('route53resolver:GetResolverRuleAssociation');
    return this;
  }

  /**
   * Grants permission to get information about a Resolver rule policy, which specifies the Resolver operations and resources that you want to allow another AWS account to use
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRulePolicy.html
   */
  public toGetResolverRulePolicy() {
    this.to('route53resolver:GetResolverRulePolicy');
    return this;
  }

  /**
   * For a specified Resolver endpoint, grants permission to list the IP addresses that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpointIpAddresses.html
   */
  public toListResolverEndpointIpAddresses() {
    this.to('route53resolver:ListResolverEndpointIpAddresses');
    return this;
  }

  /**
   * Grants permission to list all the Resolver endpoints that were created using the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html
   */
  public toListResolverEndpoints() {
    this.to('route53resolver:ListResolverEndpoints');
    return this;
  }

  /**
   * Grants permission to list information about associations between Amazon VPCs and query logging configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html
   */
  public toListResolverQueryLogConfigAssociations() {
    this.to('route53resolver:ListResolverQueryLogConfigAssociations');
    return this;
  }

  /**
   * Grants permission to list information about the specified query logging configurations, which define where you want Resolver to save DNS query logs and specify the VPCs that you want to log queries for
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html
   */
  public toListResolverQueryLogConfigs() {
    this.to('route53resolver:ListResolverQueryLogConfigs');
    return this;
  }

  /**
   * Grants permission to list the associations that were created between Resolver rules and VPCs using the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html
   */
  public toListResolverRuleAssociations() {
    this.to('route53resolver:ListResolverRuleAssociations');
    return this;
  }

  /**
   * Grants permission to list the Resolver rules that were created using the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html
   */
  public toListResolverRules() {
    this.to('route53resolver:ListResolverRules');
    return this;
  }

  /**
   * Grants permission to list the tags that you associated with the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('route53resolver:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to specify an AWS account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverQueryLogConfigPolicy.html
   */
  public toPutResolverQueryLogConfigPolicy() {
    this.to('route53resolver:PutResolverQueryLogConfigPolicy');
    return this;
  }

  /**
   * Grants permission to specify an AWS account that you want to share rules with, the Resolver rules that you want to share, and the operations that you want the account to be able to perform on those rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverRulePolicy.html
   */
  public toPutResolverRulePolicy() {
    this.to('route53resolver:PutResolverRulePolicy');
    return this;
  }

  /**
   * Grants permission to add one or more tags to a specified resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_TagResource.html
   */
  public toTagResource() {
    this.to('route53resolver:TagResource');
    return this;
  }

  /**
   * Grants permission to remove one or more tags from a specified resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UntagResource.html
   */
  public toUntagResource() {
    this.to('route53resolver:UntagResource');
    return this;
  }

  /**
   * Grants permission to update selected settings for an inbound or an outbound Resolver endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html
   */
  public toUpdateResolverEndpoint() {
    this.to('route53resolver:UpdateResolverEndpoint');
    return this;
  }

  /**
   * Grants permission to update settings for a specified Resolver rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html
   */
  public toUpdateResolverRule() {
    this.to('route53resolver:UpdateResolverRule');
    return this;
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
      "UpdateResolverEndpoint",
      "UpdateResolverRule"
    ],
    "Read": [
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
