import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a WebACL with a resource
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - apigateway:SetWebACL
   * - apprunner:AssociateWebAcl
   * - appsync:SetWebACL
   * - cognito-idp:AssociateWebACL
   * - ec2:AssociateVerifiedAccessInstanceWebAcl
   * - elasticloadbalancing:SetWebAcl
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_AssociateWebACL.html
   */
  public toAssociateWebACL() {
    return this.to('AssociateWebACL');
  }

  /**
   * Grants permission to calculate web ACL capacity unit (WCU) requirements for a specified scope and set of rules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_CheckCapacity.html
   */
  public toCheckCapacity() {
    return this.to('CheckCapacity');
  }

  /**
   * Grants permission to create an API key for use in the integration of the CAPTCHA API in your JavaScript client applications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateAPIKey.html
   */
  public toCreateAPIKey() {
    return this.to('CreateAPIKey');
  }

  /**
   * Grants permission to create an IPSet
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
    return this.to('CreateIPSet');
  }

  /**
   * Grants permission to create a RegexPatternSet
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
    return this.to('CreateRegexPatternSet');
  }

  /**
   * Grants permission to create a RuleGroup
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
    return this.to('CreateRuleGroup');
  }

  /**
   * Grants permission to create a WebACL
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateWebACL.html
   */
  public toCreateWebACL() {
    return this.to('CreateWebACL');
  }

  /**
   * Grants permission to delete FirewallManagedRulesGroups from a WebACL if not managed by Firewall Manager anymore
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteFirewallManagerRuleGroups.html
   */
  public toDeleteFirewallManagerRuleGroups() {
    return this.to('DeleteFirewallManagerRuleGroups');
  }

  /**
   * Grants permission to delete an IPSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteIPSet.html
   */
  public toDeleteIPSet() {
    return this.to('DeleteIPSet');
  }

  /**
   * Grants permission to delete the LoggingConfiguration from a WebACL
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifLogScope()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteLoggingConfiguration.html
   */
  public toDeleteLoggingConfiguration() {
    return this.to('DeleteLoggingConfiguration');
  }

  /**
   * Grants permission to delete the PermissionPolicy on a RuleGroup
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeletePermissionPolicy.html
   */
  public toDeletePermissionPolicy() {
    return this.to('DeletePermissionPolicy');
  }

  /**
   * Grants permission to delete a RegexPatternSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteRegexPatternSet.html
   */
  public toDeleteRegexPatternSet() {
    return this.to('DeleteRegexPatternSet');
  }

  /**
   * Grants permission to delete a RuleGroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteRuleGroup.html
   */
  public toDeleteRuleGroup() {
    return this.to('DeleteRuleGroup');
  }

  /**
   * Grants permission to delete a WebACL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteWebACL.html
   */
  public toDeleteWebACL() {
    return this.to('DeleteWebACL');
  }

  /**
   * Grants permission to retrieve product information for a managed rule group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DescribeAllManagedProducts.html
   */
  public toDescribeAllManagedProducts() {
    return this.to('DescribeAllManagedProducts');
  }

  /**
   * Grants permission to retrieve product information for a managed rule group by a given vendor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DescribeManagedProductsByVendor.html
   */
  public toDescribeManagedProductsByVendor() {
    return this.to('DescribeManagedProductsByVendor');
  }

  /**
   * Grants permission to retrieve high-level information for a managed rule group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DescribeManagedRuleGroup.html
   */
  public toDescribeManagedRuleGroup() {
    return this.to('DescribeManagedRuleGroup');
  }

  /**
   * Grants permission to disassociate Firewall Manager from a WebACL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DisassociateFirewallManager.html
   */
  public toDisassociateFirewallManager() {
    return this.to('DisassociateFirewallManager');
  }

  /**
   * Grants permission to disassociate a WebACL from an application resource
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - apigateway:SetWebACL
   * - apprunner:DisassociateWebAcl
   * - appsync:SetWebACL
   * - cognito-idp:DisassociateWebACL
   * - ec2:DisassociateVerifiedAccessInstanceWebAcl
   * - elasticloadbalancing:SetWebAcl
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DisassociateWebACL.html
   */
  public toDisassociateWebACL() {
    return this.to('DisassociateWebACL');
  }

  /**
   * Grants permission to generate a presigned download URL for the specified release of the mobile SDK
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GenerateMobileSdkReleaseUrl.html
   */
  public toGenerateMobileSdkReleaseUrl() {
    return this.to('GenerateMobileSdkReleaseUrl');
  }

  /**
   * Grants permission to return your API key in decrypted form. Use this to check the token domains that you have defined for the key
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetDecryptedAPIKey.html
   */
  public toGetDecryptedAPIKey() {
    return this.to('GetDecryptedAPIKey');
  }

  /**
   * Grants permission to retrieve details about an IPSet
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetIPSet.html
   */
  public toGetIPSet() {
    return this.to('GetIPSet');
  }

  /**
   * Grants permission to retrieve LoggingConfiguration for a WebACL
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifLogScope()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetLoggingConfiguration.html
   */
  public toGetLoggingConfiguration() {
    return this.to('GetLoggingConfiguration');
  }

  /**
   * Grants permission to retrieve details about a ManagedRuleSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetManagedRuleSet.html
   */
  public toGetManagedRuleSet() {
    return this.to('GetManagedRuleSet');
  }

  /**
   * Grants permission to retrieve information for the specified mobile SDK release, including release notes and tags
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetMobileSdkRelease.html
   */
  public toGetMobileSdkRelease() {
    return this.to('GetMobileSdkRelease');
  }

  /**
   * Grants permission to retrieve a PermissionPolicy for a RuleGroup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetPermissionPolicy.html
   */
  public toGetPermissionPolicy() {
    return this.to('GetPermissionPolicy');
  }

  /**
   * Grants permission to retrieve the keys that are currently blocked by a rate-based rule
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRateBasedStatementManagedKeys.html
   */
  public toGetRateBasedStatementManagedKeys() {
    return this.to('GetRateBasedStatementManagedKeys');
  }

  /**
   * Grants permission to retrieve details about a RegexPatternSet
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRegexPatternSet.html
   */
  public toGetRegexPatternSet() {
    return this.to('GetRegexPatternSet');
  }

  /**
   * Grants permission to retrieve details about a RuleGroup
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRuleGroup.html
   */
  public toGetRuleGroup() {
    return this.to('GetRuleGroup');
  }

  /**
   * Grants permission to retrieve detailed information about a sampling of web requests
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetSampledRequests.html
   */
  public toGetSampledRequests() {
    return this.to('GetSampledRequests');
  }

  /**
   * Grants permission to retrieve details about a WebACL
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetWebACL.html
   */
  public toGetWebACL() {
    return this.to('GetWebACL');
  }

  /**
   * Grants permission to retrieve the WebACL that's associated with a resource
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - apprunner:DescribeWebAclForService
   * - cognito-idp:GetWebACLForResource
   * - ec2:GetVerifiedAccessInstanceWebAcl
   * - wafv2:GetWebACL
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetWebACLForResource.html
   */
  public toGetWebACLForResource() {
    return this.to('GetWebACLForResource');
  }

  /**
   * Grants permission to retrieve a list of the API keys that you've defined for the specified scope
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListAPIKeys.html
   */
  public toListAPIKeys() {
    return this.to('ListAPIKeys');
  }

  /**
   * Grants permission to retrieve an array of managed rule group versions that are available for you to use
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListAvailableManagedRuleGroupVersions.html
   */
  public toListAvailableManagedRuleGroupVersions() {
    return this.to('ListAvailableManagedRuleGroupVersions');
  }

  /**
   * Grants permission to retrieve an array of managed rule groups that are available for you to use
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListAvailableManagedRuleGroups.html
   */
  public toListAvailableManagedRuleGroups() {
    return this.to('ListAvailableManagedRuleGroups');
  }

  /**
   * Grants permission to retrieve an array of IPSetSummary objects for the IP sets that you manage
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListIPSets.html
   */
  public toListIPSets() {
    return this.to('ListIPSets');
  }

  /**
   * Grants permission to retrieve an array of your LoggingConfiguration objects
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifLogScope()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListLoggingConfigurations.html
   */
  public toListLoggingConfigurations() {
    return this.to('ListLoggingConfigurations');
  }

  /**
   * Grants permission to retrieve an array of your ManagedRuleSet objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListManagedRuleSets.html
   */
  public toListManagedRuleSets() {
    return this.to('ListManagedRuleSets');
  }

  /**
   * Grants permission to retrieve a list of the available releases for the mobile SDK and the specified device platform
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListMobileSdkReleases.html
   */
  public toListMobileSdkReleases() {
    return this.to('ListMobileSdkReleases');
  }

  /**
   * Grants permission to retrieve an array of RegexPatternSetSummary objects for the regex pattern sets that you manage
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListRegexPatternSets.html
   */
  public toListRegexPatternSets() {
    return this.to('ListRegexPatternSets');
  }

  /**
   * Grants permission to retrieve an array of the Amazon Resource Names (ARNs) for the resources that are associated with a web ACL
   *
   * Access Level: List
   *
   * Dependent actions:
   * - apprunner:ListAssociatedServicesForWebAcl
   * - cognito-idp:ListResourcesForWebACL
   * - ec2:DescribeVerifiedAccessInstanceWebAclAssociations
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListResourcesForWebACL.html
   */
  public toListResourcesForWebACL() {
    return this.to('ListResourcesForWebACL');
  }

  /**
   * Grants permission to retrieve an array of RuleGroupSummary objects for the rule groups that you manage
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListRuleGroups.html
   */
  public toListRuleGroups() {
    return this.to('ListRuleGroups');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve an array of WebACLSummary objects for the web ACLs that you manage
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListWebACLs.html
   */
  public toListWebACLs() {
    return this.to('ListWebACLs');
  }

  /**
   * Grants permission to create FirewallManagedRulesGroups in a WebACL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_PutFirewallManagerRuleGroups.html
   */
  public toPutFirewallManagerRuleGroups() {
    return this.to('PutFirewallManagerRuleGroups');
  }

  /**
   * Grants permission to enable a LoggingConfiguration, to start logging for a web ACL
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifLogScope()
   * - .ifLogDestinationResource()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_PutLoggingConfiguration.html
   */
  public toPutLoggingConfiguration() {
    return this.to('PutLoggingConfiguration');
  }

  /**
   * Grants permission to enable create a new or update an existing version of a ManagedRuleSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_PutManagedRuleSetVersions.html
   */
  public toPutManagedRuleSetVersions() {
    return this.to('PutManagedRuleSetVersions');
  }

  /**
   * Grants permission to attach an IAM policy to a resource, used to share rule groups between accounts
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_PutPermissionPolicy.html
   */
  public toPutPermissionPolicy() {
    return this.to('PutPermissionPolicy');
  }

  /**
   * Grants permission to associate tags with a AWS resource
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
    return this.to('TagResource');
  }

  /**
   * Grants permission to disassociate tags from an AWS resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an IPSet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateIPSet.html
   */
  public toUpdateIPSet() {
    return this.to('UpdateIPSet');
  }

  /**
   * Grants permission to update the expiry date of a version in ManagedRuleSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateManagedRuleSetVersionExpiryDate.html
   */
  public toUpdateManagedRuleSetVersionExpiryDate() {
    return this.to('UpdateManagedRuleSetVersionExpiryDate');
  }

  /**
   * Grants permission to update a RegexPatternSet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateRegexPatternSet.html
   */
  public toUpdateRegexPatternSet() {
    return this.to('UpdateRegexPatternSet');
  }

  /**
   * Grants permission to update a RuleGroup
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateRuleGroup.html
   */
  public toUpdateRuleGroup() {
    return this.to('UpdateRuleGroup');
  }

  /**
   * Grants permission to update a WebACL
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateWebACL.html
   */
  public toUpdateWebACL() {
    return this.to('UpdateWebACL');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateWebACL',
      'CreateAPIKey',
      'CreateIPSet',
      'CreateRegexPatternSet',
      'CreateRuleGroup',
      'CreateWebACL',
      'DeleteFirewallManagerRuleGroups',
      'DeleteIPSet',
      'DeleteLoggingConfiguration',
      'DeleteRegexPatternSet',
      'DeleteRuleGroup',
      'DeleteWebACL',
      'DisassociateFirewallManager',
      'DisassociateWebACL',
      'PutFirewallManagerRuleGroups',
      'PutLoggingConfiguration',
      'PutManagedRuleSetVersions',
      'UpdateIPSet',
      'UpdateManagedRuleSetVersionExpiryDate',
      'UpdateRegexPatternSet',
      'UpdateRuleGroup',
      'UpdateWebACL'
    ],
    Read: [
      'CheckCapacity',
      'DescribeAllManagedProducts',
      'DescribeManagedProductsByVendor',
      'DescribeManagedRuleGroup',
      'GenerateMobileSdkReleaseUrl',
      'GetDecryptedAPIKey',
      'GetIPSet',
      'GetLoggingConfiguration',
      'GetManagedRuleSet',
      'GetMobileSdkRelease',
      'GetPermissionPolicy',
      'GetRateBasedStatementManagedKeys',
      'GetRegexPatternSet',
      'GetRuleGroup',
      'GetSampledRequests',
      'GetWebACL',
      'GetWebACLForResource',
      'ListTagsForResource'
    ],
    'Permissions management': [
      'DeletePermissionPolicy',
      'PutPermissionPolicy'
    ],
    List: [
      'ListAPIKeys',
      'ListAvailableManagedRuleGroupVersions',
      'ListAvailableManagedRuleGroups',
      'ListIPSets',
      'ListLoggingConfigurations',
      'ListManagedRuleSets',
      'ListMobileSdkReleases',
      'ListRegexPatternSets',
      'ListResourcesForWebACL',
      'ListRuleGroups',
      'ListWebACLs'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWebacl(scope: string, name: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:wafv2:${ region || this.defaultRegion }:${ account || this.defaultAccount }:${ scope }/webacl/${ name }/${ id }`);
  }

  /**
   * Adds a resource of type ipset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_IPSet.html
   *
   * @param scope - Identifier for the scope.
   * @param name - Identifier for the name.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIpset(scope: string, name: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:wafv2:${ region || this.defaultRegion }:${ account || this.defaultAccount }:${ scope }/ipset/${ name }/${ id }`);
  }

  /**
   * Adds a resource of type managedruleset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ManagedRuleSet.html
   *
   * @param scope - Identifier for the scope.
   * @param name - Identifier for the name.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onManagedruleset(scope: string, name: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:wafv2:${ region || this.defaultRegion }:${ account || this.defaultAccount }:${ scope }/managedruleset/${ name }/${ id }`);
  }

  /**
   * Adds a resource of type rulegroup to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_RuleGroup.html
   *
   * @param scope - Identifier for the scope.
   * @param name - Identifier for the name.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRulegroup(scope: string, name: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:wafv2:${ region || this.defaultRegion }:${ account || this.defaultAccount }:${ scope }/rulegroup/${ name }/${ id }`);
  }

  /**
   * Adds a resource of type regexpatternset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_RegexPatternSet.html
   *
   * @param scope - Identifier for the scope.
   * @param name - Identifier for the name.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRegexpatternset(scope: string, name: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:wafv2:${ region || this.defaultRegion }:${ account || this.defaultAccount }:${ scope }/regexpatternset/${ name }/${ id }`);
  }

  /**
   * Adds a resource of type loadbalancer/app/ to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_WebACL.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onLoadbalancerApp(loadBalancerName: string, loadBalancerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elasticloadbalancing:${ region || this.defaultRegion }:${ account || this.defaultAccount }:loadbalancer/app/${ loadBalancerName }/${ loadBalancerId }`);
  }

  /**
   * Adds a resource of type apigateway to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_WebACL.html
   *
   * @param apiId - Identifier for the apiId.
   * @param stageName - Identifier for the stageName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onApigateway(apiId: string, stageName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:apigateway:${ region || this.defaultRegion }:${ account || this.defaultAccount }:/restapis/${ apiId }/stages/${ stageName }`);
  }

  /**
   * Adds a resource of type appsync to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_WebACL.html
   *
   * @param graphQLAPIId - Identifier for the graphQLAPIId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAppsync(graphQLAPIId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:appsync:${ region || this.defaultRegion }:${ account || this.defaultAccount }:apis/${ graphQLAPIId }`);
  }

  /**
   * Adds a resource of type userpool to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_WebACL.html
   *
   * @param userPoolId - Identifier for the userPoolId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onUserpool(userPoolId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:cognito-idp:${ region || this.defaultRegion }:${ account || this.defaultAccount }:userpool/${ userPoolId }`);
  }

  /**
   * Adds a resource of type apprunner to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_WebACL.html
   *
   * @param serviceName - Identifier for the serviceName.
   * @param serviceId - Identifier for the serviceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onApprunner(serviceName: string, serviceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:apprunner:${ region || this.defaultRegion }:${ account || this.defaultAccount }:service/${ serviceName }/${ serviceId }`);
  }

  /**
   * Adds a resource of type verified-access-instance to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_WebACL.html
   *
   * @param verifiedAccessInstanceId - Identifier for the verifiedAccessInstanceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onVerifiedAccessInstance(verifiedAccessInstanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:ec2:${ region || this.defaultRegion }:${ account || this.defaultAccount }:verified-access-instance/${ verifiedAccessInstanceId }`);
  }

  /**
   * Filters access by the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateIPSet()
   * - .toCreateRegexPatternSet()
   * - .toCreateRuleGroup()
   * - .toCreateWebACL()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by tag-value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toGetIPSet()
   * - .toGetLoggingConfiguration()
   * - .toGetRateBasedStatementManagedKeys()
   * - .toGetRegexPatternSet()
   * - .toGetRuleGroup()
   * - .toGetWebACL()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUpdateIPSet()
   * - .toUpdateRegexPatternSet()
   * - .toUpdateRuleGroup()
   * - .toUpdateWebACL()
   *
   * Applies to resource types:
   * - webacl
   * - ipset
   * - rulegroup
   * - regexpatternset
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateIPSet()
   * - .toCreateRegexPatternSet()
   * - .toCreateRuleGroup()
   * - .toCreateWebACL()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by log destination ARN for PutLoggingConfiguration API
   *
   * https://docs.aws.amazon.com/waf/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toPutLoggingConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifLogDestinationResource(value: string | string[], operator?: Operator | string) {
    return this.if(`LogDestinationResource`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by log scope for Logging Configuration API
   *
   * https://docs.aws.amazon.com/waf/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toDeleteLoggingConfiguration()
   * - .toGetLoggingConfiguration()
   * - .toListLoggingConfigurations()
   * - .toPutLoggingConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLogScope(value: string | string[], operator?: Operator | string) {
    return this.if(`LogScope`, value, operator || 'StringLike');
  }
}
