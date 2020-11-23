import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [wafv2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswafv2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Wafv2 extends PolicyStatement {
  public servicePrefix = 'wafv2';

  /**
   * Statement provider for service [wafv2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswafv2.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a WebACL with a resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_AssociateWebACL.html
   */
  public toAssociateWebACL() {
    this.to('AssociateWebACL');
    return this;
  }

  /**
   * Grants permission to calculate web ACL capacity unit (WCU) requirements for a specified scope and set of rules.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_CheckCapacity.html
   */
  public toCheckCapacity() {
    this.to('CheckCapacity');
    return this;
  }

  /**
   * Grants permission to create an IPSet.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateIPSet.html
   */
  public toCreateIPSet() {
    this.to('CreateIPSet');
    return this;
  }

  /**
   * Grants permission to create a RegexPatternSet.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateRegexPatternSet.html
   */
  public toCreateRegexPatternSet() {
    this.to('CreateRegexPatternSet');
    return this;
  }

  /**
   * Grants permission to create a RuleGroup.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateRuleGroup.html
   */
  public toCreateRuleGroup() {
    this.to('CreateRuleGroup');
    return this;
  }

  /**
   * Grants permission to create a WebACL.
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateWebACL.html
   */
  public toCreateWebACL() {
    this.to('CreateWebACL');
    return this;
  }

  /**
   * Grants permission to delete specified FirewallManagedRulesGroups from the specified WebACL if not managed by Firewall Manager anymore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteFirewallManagerRuleGroups.html
   */
  public toDeleteFirewallManagerRuleGroups() {
    this.to('DeleteFirewallManagerRuleGroups');
    return this;
  }

  /**
   * Grants permission to delete the specified IPSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteIPSet.html
   */
  public toDeleteIPSet() {
    this.to('DeleteIPSet');
    return this;
  }

  /**
   * Grants permission to delete the LoggingConfiguration from the specified WebACL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteLoggingConfiguration.html
   */
  public toDeleteLoggingConfiguration() {
    this.to('DeleteLoggingConfiguration');
    return this;
  }

  /**
   * Grants permission to delete the PermissionPolicy on the specified RuleGroup.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeletePermissionPolicy.html
   */
  public toDeletePermissionPolicy() {
    this.to('DeletePermissionPolicy');
    return this;
  }

  /**
   * Grants permission to delete the specified RegexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteRegexPatternSet.html
   */
  public toDeleteRegexPatternSet() {
    this.to('DeleteRegexPatternSet');
    return this;
  }

  /**
   * Grants permission to delete the specified RuleGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteRuleGroup.html
   */
  public toDeleteRuleGroup() {
    this.to('DeleteRuleGroup');
    return this;
  }

  /**
   * Grants permission to delete the specified WebACL.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteWebACL.html
   */
  public toDeleteWebACL() {
    this.to('DeleteWebACL');
    return this;
  }

  /**
   * Grants permission to view high-level information for a managed rule group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DescribeManagedRuleGroup.html
   */
  public toDescribeManagedRuleGroup() {
    this.to('DescribeManagedRuleGroup');
    return this;
  }

  /**
   * Grants permission to disassociate Firewall Manager from the specified WebACL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DisassociateFirewallManager.html
   */
  public toDisassociateFirewallManager() {
    this.to('DisassociateFirewallManager');
    return this;
  }

  /**
   * Grants permission disassociate a WebACL from an application resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DisassociateWebACL.html
   */
  public toDisassociateWebACL() {
    this.to('DisassociateWebACL');
    return this;
  }

  /**
   * Grants permission to view details about the specified IPSet.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetIPSet.html
   */
  public toGetIPSet() {
    this.to('GetIPSet');
    return this;
  }

  /**
   * Grants permission to view LoggingConfiguration about the specified WebACL.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetLoggingConfiguration.html
   */
  public toGetLoggingConfiguration() {
    this.to('GetLoggingConfiguration');
    return this;
  }

  /**
   * Grants permission to view PermissionPolicy on the specified RuleGroup.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetPermissionPolicy.html
   */
  public toGetPermissionPolicy() {
    this.to('GetPermissionPolicy');
    return this;
  }

  /**
   * Grants permission to view the keys that are currently blocked by a rate-based rule.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRateBasedStatementManagedKeys.html
   */
  public toGetRateBasedStatementManagedKeys() {
    this.to('GetRateBasedStatementManagedKeys');
    return this;
  }

  /**
   * Grants permission to view details about the specified RegexPatternSet.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRegexPatternSet.html
   */
  public toGetRegexPatternSet() {
    this.to('GetRegexPatternSet');
    return this;
  }

  /**
   * Grants permission to view details about the specified RuleGroup.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRuleGroup.html
   */
  public toGetRuleGroup() {
    this.to('GetRuleGroup');
    return this;
  }

  /**
   * Grants permission to view detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetSampledRequests.html
   */
  public toGetSampledRequests() {
    this.to('GetSampledRequests');
    return this;
  }

  /**
   * Grants permission to view details about the specified GetWebACL.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetWebACL.html
   */
  public toGetWebACL() {
    this.to('GetWebACL');
    return this;
  }

  /**
   * Grants permission to view the WebACL for the specified resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetWebACLForResource.html
   */
  public toGetWebACLForResource() {
    this.to('GetWebACLForResource');
    return this;
  }

  /**
   * Grants permission to view an array of managed rule groups that are available for you to use.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListAvailableManagedRuleGroups.html
   */
  public toListAvailableManagedRuleGroups() {
    this.to('ListAvailableManagedRuleGroups');
    return this;
  }

  /**
   * Grants permission to view an array of IPSetSummary objects for the IP sets that you manage.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListIPSets.html
   */
  public toListIPSets() {
    this.to('ListIPSets');
    return this;
  }

  /**
   * Grants permission to view an array of your LoggingConfiguration objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListLoggingConfigurations.html
   */
  public toListLoggingConfigurations() {
    this.to('ListLoggingConfigurations');
    return this;
  }

  /**
   * Grants permission to view an array of RegexPatternSetSummary objects for the regex pattern sets that you manage.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListRegexPatternSets.html
   */
  public toListRegexPatternSets() {
    this.to('ListRegexPatternSets');
    return this;
  }

  /**
   * Grants permission to view an array of the Amazon Resource Names (ARNs) for the resources that are associated with the specified web ACL.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListResourcesForWebACL.html
   */
  public toListResourcesForWebACL() {
    this.to('ListResourcesForWebACL');
    return this;
  }

  /**
   * Grants permission to view an array of RuleGroupSummary objects for the rule groups that you manage.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListRuleGroups.html
   */
  public toListRuleGroups() {
    this.to('ListRuleGroups');
    return this;
  }

  /**
   * Grants permission to lists tag for the specified resource.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to view an array of WebACLSummary objects for the web ACLs that you manage.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListWebACLs.html
   */
  public toListWebACLs() {
    this.to('ListWebACLs');
    return this;
  }

  /**
   * Grants permission to create FirewallManagedRulesGroups in the specified WebACL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_PutFirewallManagerRuleGroups.html
   */
  public toPutFirewallManagerRuleGroups() {
    this.to('PutFirewallManagerRuleGroups');
    return this;
  }

  /**
   * Grants permission to enables the specified LoggingConfiguration, to start logging from a web ACL.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_PutLoggingConfiguration.html
   */
  public toPutLoggingConfiguration() {
    this.to('PutLoggingConfiguration');
    return this;
  }

  /**
   * Grants permission to attach the specified IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_PutPermissionPolicy.html
   */
  public toPutPermissionPolicy() {
    this.to('PutPermissionPolicy');
    return this;
  }

  /**
   * Grants permission to associates tags with the specified AWS resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('TagResource');
    return this;
  }

  /**
   * Grants permission to disassociates tags from an AWS resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('UntagResource');
    return this;
  }

  /**
   * Grants permission to update the specified IPSet.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateIPSet.html
   */
  public toUpdateIPSet() {
    this.to('UpdateIPSet');
    return this;
  }

  /**
   * Grants permission to update the specified RegexPatternSet.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateRegexPatternSet.html
   */
  public toUpdateRegexPatternSet() {
    this.to('UpdateRegexPatternSet');
    return this;
  }

  /**
   * Grants permission to update the specified RuleGroup.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateRuleGroup.html
   */
  public toUpdateRuleGroup() {
    this.to('UpdateRuleGroup');
    return this;
  }

  /**
   * Grants permission to update the specified WebACL.
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateWebACL.html
   */
  public toUpdateWebACL() {
    this.to('UpdateWebACL');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateWebACL",
      "CreateIPSet",
      "CreateRegexPatternSet",
      "CreateRuleGroup",
      "DeleteFirewallManagerRuleGroups",
      "DeleteIPSet",
      "DeleteLoggingConfiguration",
      "DeleteRegexPatternSet",
      "DeleteRuleGroup",
      "DisassociateFirewallManager",
      "DisassociateWebACL",
      "PutFirewallManagerRuleGroups",
      "PutLoggingConfiguration",
      "UpdateIPSet",
      "UpdateRegexPatternSet",
      "UpdateRuleGroup"
    ],
    "Read": [
      "CheckCapacity",
      "GetIPSet",
      "GetLoggingConfiguration",
      "GetPermissionPolicy",
      "GetRateBasedStatementManagedKeys",
      "GetRegexPatternSet",
      "GetRuleGroup",
      "GetSampledRequests",
      "GetWebACL",
      "GetWebACLForResource",
      "ListTagsForResource"
    ],
    "Permissions management": [
      "CreateWebACL",
      "DeletePermissionPolicy",
      "DeleteWebACL",
      "PutPermissionPolicy",
      "UpdateWebACL"
    ],
    "List": [
      "DescribeManagedRuleGroup",
      "ListAvailableManagedRuleGroups",
      "ListIPSets",
      "ListLoggingConfigurations",
      "ListRegexPatternSets",
      "ListResourcesForWebACL",
      "ListRuleGroups",
      "ListWebACLs"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type webacl to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_WebACL.html
   *
   * @param scope - Identifier for the scope.
   * @param name - Identifier for the name.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWebacl(scope: string, name: string, id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:wafv2:${Region}:${Account}:${Scope}/webacl/${Name}/${Id}';
    arn = arn.replace('${Scope}', scope);
    arn = arn.replace('${Name}', name);
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ipset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_IPSet.html
   *
   * @param scope - Identifier for the scope.
   * @param name - Identifier for the name.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIpset(scope: string, name: string, id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:wafv2:${Region}:${Account}:${Scope}/ipset/${Name}/${Id}';
    arn = arn.replace('${Scope}', scope);
    arn = arn.replace('${Name}', name);
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type rulegroup to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_RuleGroup.html
   *
   * @param scope - Identifier for the scope.
   * @param name - Identifier for the name.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRulegroup(scope: string, name: string, id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:wafv2:${Region}:${Account}:${Scope}/rulegroup/${Name}/${Id}';
    arn = arn.replace('${Scope}', scope);
    arn = arn.replace('${Name}', name);
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type regexpatternset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_RegexPatternSet.html
   *
   * @param scope - Identifier for the scope.
   * @param name - Identifier for the name.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRegexpatternset(scope: string, name: string, id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:wafv2:${Region}:${Account}:${Scope}/regexpatternset/${Name}/${Id}';
    arn = arn.replace('${Scope}', scope);
    arn = arn.replace('${Name}', name);
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type loadbalancer/app/ to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_WebACL.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
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
   * Adds a resource of type apigateway to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_WebACL.html
   *
   * @param apiId - Identifier for the apiId.
   * @param stageName - Identifier for the stageName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onApigateway(apiId: string, stageName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}:${Account}:/restapis/${ApiId}/stages/${StageName}';
    arn = arn.replace('${ApiId}', apiId);
    arn = arn.replace('${StageName}', stageName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type appsync to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_WebACL.html
   *
   * @param graphQLAPIId - Identifier for the graphQLAPIId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAppsync(graphQLAPIId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appsync:${Region}:${Account}:apis/${GraphQLAPIId}';
    arn = arn.replace('${GraphQLAPIId}', graphQLAPIId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
