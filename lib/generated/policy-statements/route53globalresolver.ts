import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [route53globalresolver](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsroute53globalresolver.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Route53globalresolver extends PolicyStatement {
  public servicePrefix = 'route53globalresolver';

  /**
   * Statement provider for service [route53globalresolver](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsroute53globalresolver.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to deliver logs for a global resolver
   *
   * Access Level: Permissions management
   */
  public toAllowVendedLogDeliveryForResource() {
    return this.to('AllowVendedLogDeliveryForResource');
  }

  /**
   * Grants permission to associate a resource to a hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_AssociateHostedZone
   */
  public toAssociateHostedZone() {
    return this.to('AssociateHostedZone');
  }

  /**
   * Grants permission to create multiple firewall rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_BatchCreateFirewallRule
   */
  public toBatchCreateFirewallRule() {
    return this.to('BatchCreateFirewallRule');
  }

  /**
   * Grants permission to delete multiple firewall rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_BatchDeleteFirewallRule
   */
  public toBatchDeleteFirewallRule() {
    return this.to('BatchDeleteFirewallRule');
  }

  /**
   * Grants permission to update multiple firewall rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_BatchUpdateFirewallRule
   */
  public toBatchUpdateFirewallRule() {
    return this.to('BatchUpdateFirewallRule');
  }

  /**
   * Grants permission to create an access source
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_CreateAccessSource
   */
  public toCreateAccessSource() {
    return this.to('CreateAccessSource');
  }

  /**
   * Grants permission to create an access token
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_CreateAccessToken
   */
  public toCreateAccessToken() {
    return this.to('CreateAccessToken');
  }

  /**
   * Grants permission to create a dns view
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_CreateDNSView
   */
  public toCreateDNSView() {
    return this.to('CreateDNSView');
  }

  /**
   * Grants permission to create a firewall domain list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_CreateFirewallDomainList
   */
  public toCreateFirewallDomainList() {
    return this.to('CreateFirewallDomainList');
  }

  /**
   * Grants permission to create a firewall rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_CreateFirewallRule
   */
  public toCreateFirewallRule() {
    return this.to('CreateFirewallRule');
  }

  /**
   * Grants permission to create a global resolver
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_CreateGlobalResolver
   */
  public toCreateGlobalResolver() {
    return this.to('CreateGlobalResolver');
  }

  /**
   * Grants permission to delete an access source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_DeleteAccessSource
   */
  public toDeleteAccessSource() {
    return this.to('DeleteAccessSource');
  }

  /**
   * Grants permission to delete an access token
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_DeleteAccessToken
   */
  public toDeleteAccessToken() {
    return this.to('DeleteAccessToken');
  }

  /**
   * Grants permission to delete a dns view
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_DeleteDNSView
   */
  public toDeleteDNSView() {
    return this.to('DeleteDNSView');
  }

  /**
   * Grants permission to delete a firewall domain list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_DeleteFirewallDomainList
   */
  public toDeleteFirewallDomainList() {
    return this.to('DeleteFirewallDomainList');
  }

  /**
   * Grants permission to delete a firewall rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_DeleteFirewallRule
   */
  public toDeleteFirewallRule() {
    return this.to('DeleteFirewallRule');
  }

  /**
   * Grants permission to delete a global resolver
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_DeleteGlobalResolver
   */
  public toDeleteGlobalResolver() {
    return this.to('DeleteGlobalResolver');
  }

  /**
   * Grants permission to disable a dns view
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_DisableDNSView
   */
  public toDisableDNSView() {
    return this.to('DisableDNSView');
  }

  /**
   * Grants permission to disassociate a hosted zone from a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_DisassociateHostedZone
   */
  public toDisassociateHostedZone() {
    return this.to('DisassociateHostedZone');
  }

  /**
   * Grants permission to enable a dns view
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_EnableDNSView
   */
  public toEnableDNSView() {
    return this.to('EnableDNSView');
  }

  /**
   * Grants permission to get an access source
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_GetAccessSource
   */
  public toGetAccessSource() {
    return this.to('GetAccessSource');
  }

  /**
   * Grants permission to get an access token
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_GetAccessToken
   */
  public toGetAccessToken() {
    return this.to('GetAccessToken');
  }

  /**
   * Grants permission to get a dns view
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_GetDNSView
   */
  public toGetDNSView() {
    return this.to('GetDNSView');
  }

  /**
   * Grants permission to get a firewall domain list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_GetFirewallDomainList
   */
  public toGetFirewallDomainList() {
    return this.to('GetFirewallDomainList');
  }

  /**
   * Grants permission to get a firewall rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_GetFirewallRule
   */
  public toGetFirewallRule() {
    return this.to('GetFirewallRule');
  }

  /**
   * Grants permission to get a global resolver
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_GetGlobalResolver
   */
  public toGetGlobalResolver() {
    return this.to('GetGlobalResolver');
  }

  /**
   * Grants permission to get a hosted zone association
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_GetHostedZoneAssociation
   */
  public toGetHostedZoneAssociation() {
    return this.to('GetHostedZoneAssociation');
  }

  /**
   * Grants permission to get a managed firewall domain list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_GetManagedFirewallDomainList
   */
  public toGetManagedFirewallDomainList() {
    return this.to('GetManagedFirewallDomainList');
  }

  /**
   * Grants permission to import firewall domains from an S3 bucket
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_ImportFirewallDomains
   */
  public toImportFirewallDomains() {
    return this.to('ImportFirewallDomains');
  }

  /**
   * Grants permission to list access sources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_ListAccessSources
   */
  public toListAccessSources() {
    return this.to('ListAccessSources');
  }

  /**
   * Grants permission to list access tokens
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_ListAccessTokens
   */
  public toListAccessTokens() {
    return this.to('ListAccessTokens');
  }

  /**
   * Grants permission to list dns views
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_ListDNSViews
   */
  public toListDNSViews() {
    return this.to('ListDNSViews');
  }

  /**
   * Grants permission to list firewall domain lists
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_ListFirewallDomainLists
   */
  public toListFirewallDomainLists() {
    return this.to('ListFirewallDomainLists');
  }

  /**
   * Grants permission to list firewall domains
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_ListFirewallDomains
   */
  public toListFirewallDomains() {
    return this.to('ListFirewallDomains');
  }

  /**
   * Grants permission to list firewall rules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_ListFirewallRules
   */
  public toListFirewallRules() {
    return this.to('ListFirewallRules');
  }

  /**
   * Grants permission to list global resolvers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_ListGlobalResolvers
   */
  public toListGlobalResolvers() {
    return this.to('ListGlobalResolvers');
  }

  /**
   * Grants permission to list hosted zone associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_ListHostedZoneAssociations
   */
  public toListHostedZoneAssociations() {
    return this.to('ListHostedZoneAssociations');
  }

  /**
   * Grants permission to list managed firewall domain lists
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_ListManagedFirewallDomainLists
   */
  public toListManagedFirewallDomainLists() {
    return this.to('ListManagedFirewallDomainLists');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_ListTagsForResource
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_TagResource
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_UntagResource
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an access source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_UpdateAccessSource
   */
  public toUpdateAccessSource() {
    return this.to('UpdateAccessSource');
  }

  /**
   * Grants permission to update an access token
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_UpdateAccessToken
   */
  public toUpdateAccessToken() {
    return this.to('UpdateAccessToken');
  }

  /**
   * Grants permission to update a dns view
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_UpdateDNSView
   */
  public toUpdateDNSView() {
    return this.to('UpdateDNSView');
  }

  /**
   * Grants permission to update firewall domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_UpdateFirewallDomains
   */
  public toUpdateFirewallDomains() {
    return this.to('UpdateFirewallDomains');
  }

  /**
   * Grants permission to update an firewall rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_UpdateFirewallRule
   */
  public toUpdateFirewallRule() {
    return this.to('UpdateFirewallRule');
  }

  /**
   * Grants permission to update a global resolver
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_UpdateGlobalResolver
   */
  public toUpdateGlobalResolver() {
    return this.to('UpdateGlobalResolver');
  }

  /**
   * Grants permission to update a hosted zone association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_UpdateHostedZoneAssociation
   */
  public toUpdateHostedZoneAssociation() {
    return this.to('UpdateHostedZoneAssociation');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AllowVendedLogDeliveryForResource'
    ],
    Write: [
      'AssociateHostedZone',
      'BatchCreateFirewallRule',
      'BatchDeleteFirewallRule',
      'BatchUpdateFirewallRule',
      'CreateAccessSource',
      'CreateAccessToken',
      'CreateDNSView',
      'CreateFirewallDomainList',
      'CreateFirewallRule',
      'CreateGlobalResolver',
      'DeleteAccessSource',
      'DeleteAccessToken',
      'DeleteDNSView',
      'DeleteFirewallDomainList',
      'DeleteFirewallRule',
      'DeleteGlobalResolver',
      'DisableDNSView',
      'DisassociateHostedZone',
      'EnableDNSView',
      'ImportFirewallDomains',
      'ListTagsForResource',
      'UpdateAccessSource',
      'UpdateAccessToken',
      'UpdateDNSView',
      'UpdateFirewallDomains',
      'UpdateFirewallRule',
      'UpdateGlobalResolver',
      'UpdateHostedZoneAssociation'
    ],
    Read: [
      'GetAccessSource',
      'GetAccessToken',
      'GetDNSView',
      'GetFirewallDomainList',
      'GetFirewallRule',
      'GetGlobalResolver',
      'GetHostedZoneAssociation',
      'GetManagedFirewallDomainList',
      'ListFirewallDomains'
    ],
    List: [
      'ListAccessSources',
      'ListAccessTokens',
      'ListDNSViews',
      'ListFirewallDomainLists',
      'ListFirewallRules',
      'ListGlobalResolvers',
      'ListHostedZoneAssociations',
      'ListManagedFirewallDomainLists'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type access-source to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_AccessSource.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccessSource(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:route53globalresolver::${ account ?? this.defaultAccount }:access-source/${ id }`);
  }

  /**
   * Adds a resource of type access-token to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_AccessToken.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccessToken(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:route53globalresolver::${ account ?? this.defaultAccount }:access-token/${ id }`);
  }

  /**
   * Adds a resource of type dns-view to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_DNSView.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDnsView(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:route53globalresolver::${ account ?? this.defaultAccount }:dns-view/${ id }`);
  }

  /**
   * Adds a resource of type firewall-domain-list to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_FirewallDomainList.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFirewallDomainList(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:route53globalresolver::${ account ?? this.defaultAccount }:firewall-domain-list/${ id }`);
  }

  /**
   * Adds a resource of type global-resolver to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53globalresolver_GlobalResolver.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGlobalResolver(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:route53globalresolver::${ account ?? this.defaultAccount }:global-resolver/${ id }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAccessSource()
   * - .toCreateAccessToken()
   * - .toCreateDNSView()
   * - .toCreateFirewallDomainList()
   * - .toCreateGlobalResolver()
   * - .toTagResource()
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
   * - .toAllowVendedLogDeliveryForResource()
   *
   * Applies to resource types:
   * - access-source
   * - access-token
   * - dns-view
   * - firewall-domain-list
   * - global-resolver
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
   * - .toCreateAccessSource()
   * - .toCreateAccessToken()
   * - .toCreateDNSView()
   * - .toCreateFirewallDomainList()
   * - .toCreateGlobalResolver()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
