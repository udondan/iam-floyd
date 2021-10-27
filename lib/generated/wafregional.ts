import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [waf-regional](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswafregional.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class WafRegional extends PolicyStatement {
  public servicePrefix = 'waf-regional';

  /**
   * Statement provider for service [waf-regional](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswafregional.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a web ACL with a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_AssociateWebACL.html
   */
  public toAssociateWebACL() {
    return this.to('AssociateWebACL');
  }

  /**
   * Grants permission to create a ByteMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateByteMatchSet.html
   */
  public toCreateByteMatchSet() {
    return this.to('CreateByteMatchSet');
  }

  /**
   * Grants permission to create a GeoMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateGeoMatchSet.html
   */
  public toCreateGeoMatchSet() {
    return this.to('CreateGeoMatchSet');
  }

  /**
   * Grants permission to create an IPSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateIPSet.html
   */
  public toCreateIPSet() {
    return this.to('CreateIPSet');
  }

  /**
   * Grants permission to create a RateBasedRule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRateBasedRule.html
   */
  public toCreateRateBasedRule() {
    return this.to('CreateRateBasedRule');
  }

  /**
   * Grants permission to create a RegexMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRegexMatchSet.html
   */
  public toCreateRegexMatchSet() {
    return this.to('CreateRegexMatchSet');
  }

  /**
   * Grants permission to create a RegexPatternSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRegexPatternSet.html
   */
  public toCreateRegexPatternSet() {
    return this.to('CreateRegexPatternSet');
  }

  /**
   * Grants permission to create a Rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRule.html
   */
  public toCreateRule() {
    return this.to('CreateRule');
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
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRuleGroup.html
   */
  public toCreateRuleGroup() {
    return this.to('CreateRuleGroup');
  }

  /**
   * Grants permission to create a SizeConstraintSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateSizeConstraintSet.html
   */
  public toCreateSizeConstraintSet() {
    return this.to('CreateSizeConstraintSet');
  }

  /**
   * Grants permission to create an SqlInjectionMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateSqlInjectionMatchSet.html
   */
  public toCreateSqlInjectionMatchSet() {
    return this.to('CreateSqlInjectionMatchSet');
  }

  /**
   * Grants permission to create a WebACL
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateWebACL.html
   */
  public toCreateWebACL() {
    return this.to('CreateWebACL');
  }

  /**
   * Grants permission to create a CloudFormation web ACL template in an S3 bucket for the purposes of migrating the web ACL from AWS WAF Classic to AWS WAF v2
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateWebACLMigrationStack.html
   */
  public toCreateWebACLMigrationStack() {
    return this.to('CreateWebACLMigrationStack');
  }

  /**
   * Grants permission to create an XssMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateXssMatchSet.html
   */
  public toCreateXssMatchSet() {
    return this.to('CreateXssMatchSet');
  }

  /**
   * Grants permission to delete a ByteMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteByteMatchSet.html
   */
  public toDeleteByteMatchSet() {
    return this.to('DeleteByteMatchSet');
  }

  /**
   * Grants permission to delete a GeoMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteGeoMatchSet.html
   */
  public toDeleteGeoMatchSet() {
    return this.to('DeleteGeoMatchSet');
  }

  /**
   * Grants permission to delete an IPSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteIPSet.html
   */
  public toDeleteIPSet() {
    return this.to('DeleteIPSet');
  }

  /**
   * Grants permission to delete a LoggingConfiguration from a web ACL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteLoggingConfiguration.html
   */
  public toDeleteLoggingConfiguration() {
    return this.to('DeleteLoggingConfiguration');
  }

  /**
   * Grants permission to delete an IAM policy from a rule group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeletePermissionPolicy.html
   */
  public toDeletePermissionPolicy() {
    return this.to('DeletePermissionPolicy');
  }

  /**
   * Grants permission to delete a RateBasedRule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRateBasedRule.html
   */
  public toDeleteRateBasedRule() {
    return this.to('DeleteRateBasedRule');
  }

  /**
   * Grants permission to delete a RegexMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRegexMatchSet.html
   */
  public toDeleteRegexMatchSet() {
    return this.to('DeleteRegexMatchSet');
  }

  /**
   * Grants permission to delete a RegexPatternSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRegexPatternSet.html
   */
  public toDeleteRegexPatternSet() {
    return this.to('DeleteRegexPatternSet');
  }

  /**
   * Grants permission to delete a Rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRule.html
   */
  public toDeleteRule() {
    return this.to('DeleteRule');
  }

  /**
   * Grants permission to delete a RuleGroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRuleGroup.html
   */
  public toDeleteRuleGroup() {
    return this.to('DeleteRuleGroup');
  }

  /**
   * Grants permission to delete a SizeConstraintSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteSizeConstraintSet.html
   */
  public toDeleteSizeConstraintSet() {
    return this.to('DeleteSizeConstraintSet');
  }

  /**
   * Grants permission to delete an SqlInjectionMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteSqlInjectionMatchSet.html
   */
  public toDeleteSqlInjectionMatchSet() {
    return this.to('DeleteSqlInjectionMatchSet');
  }

  /**
   * Grants permission to delete a WebACL
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteWebACL.html
   */
  public toDeleteWebACL() {
    return this.to('DeleteWebACL');
  }

  /**
   * Grants permission to delete an XssMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteXssMatchSet.html
   */
  public toDeleteXssMatchSet() {
    return this.to('DeleteXssMatchSet');
  }

  /**
   * Grants permission to delete an association between a web ACL and a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DisassociateWebACL.html
   */
  public toDisassociateWebACL() {
    return this.to('DisassociateWebACL');
  }

  /**
   * Grants permission to retrieve a ByteMatchSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetByteMatchSet.html
   */
  public toGetByteMatchSet() {
    return this.to('GetByteMatchSet');
  }

  /**
   * Grants permission to retrieve a change token to use in create, update, and delete requests
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetChangeToken.html
   */
  public toGetChangeToken() {
    return this.to('GetChangeToken');
  }

  /**
   * Grants permission to retrieve the status of a change token
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetChangeTokenStatus.html
   */
  public toGetChangeTokenStatus() {
    return this.to('GetChangeTokenStatus');
  }

  /**
   * Grants permission to retrieve a GeoMatchSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetGeoMatchSet.html
   */
  public toGetGeoMatchSet() {
    return this.to('GetGeoMatchSet');
  }

  /**
   * Grants permission to retrieve an IPSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetIPSet.html
   */
  public toGetIPSet() {
    return this.to('GetIPSet');
  }

  /**
   * Grants permission to retrieve a LoggingConfiguration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetLoggingConfiguration.html
   */
  public toGetLoggingConfiguration() {
    return this.to('GetLoggingConfiguration');
  }

  /**
   * Grants permission to retrieve an IAM policy attached to a RuleGroup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetPermissionPolicy.html
   */
  public toGetPermissionPolicy() {
    return this.to('GetPermissionPolicy');
  }

  /**
   * Grants permission to retrieve a RateBasedRule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRateBasedRule.html
   */
  public toGetRateBasedRule() {
    return this.to('GetRateBasedRule');
  }

  /**
   * Grants permission to retrieve the array of IP addresses that are currently being blocked by a RateBasedRule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRateBasedRuleManagedKeys.html
   */
  public toGetRateBasedRuleManagedKeys() {
    return this.to('GetRateBasedRuleManagedKeys');
  }

  /**
   * Grants permission to retrieve a RegexMatchSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRegexMatchSet.html
   */
  public toGetRegexMatchSet() {
    return this.to('GetRegexMatchSet');
  }

  /**
   * Grants permission to retrieve a RegexPatternSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRegexPatternSet.html
   */
  public toGetRegexPatternSet() {
    return this.to('GetRegexPatternSet');
  }

  /**
   * Grants permission to retrieve a Rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRule.html
   */
  public toGetRule() {
    return this.to('GetRule');
  }

  /**
   * Grants permission to retrieve a RuleGroup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRuleGroup.html
   */
  public toGetRuleGroup() {
    return this.to('GetRuleGroup');
  }

  /**
   * Grants permission to retrieve detailed information for a sample set of web requests
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSampledRequests.html
   */
  public toGetSampledRequests() {
    return this.to('GetSampledRequests');
  }

  /**
   * Grants permission to retrieve a SizeConstraintSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSizeConstraintSet.html
   */
  public toGetSizeConstraintSet() {
    return this.to('GetSizeConstraintSet');
  }

  /**
   * Grants permission to retrieve an SqlInjectionMatchSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSqlInjectionMatchSet.html
   */
  public toGetSqlInjectionMatchSet() {
    return this.to('GetSqlInjectionMatchSet');
  }

  /**
   * Grants permission to retrieve a WebACL
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetWebACL.html
   */
  public toGetWebACL() {
    return this.to('GetWebACL');
  }

  /**
   * Grants permission to retrieve a WebACL that's associated with a specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetWebACLForResource.html
   */
  public toGetWebACLForResource() {
    return this.to('GetWebACLForResource');
  }

  /**
   * Grants permission to retrieve an XssMatchSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetXssMatchSet.html
   */
  public toGetXssMatchSet() {
    return this.to('GetXssMatchSet');
  }

  /**
   * Grants permission to retrieve an array of ActivatedRule objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListActivatedRulesInRuleGroup.html
   */
  public toListActivatedRulesInRuleGroup() {
    return this.to('ListActivatedRulesInRuleGroup');
  }

  /**
   * Grants permission to retrieve an array of ByteMatchSetSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListByteMatchSets.html
   */
  public toListByteMatchSets() {
    return this.to('ListByteMatchSets');
  }

  /**
   * Grants permission to retrieve an array of GeoMatchSetSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListGeoMatchSets.html
   */
  public toListGeoMatchSets() {
    return this.to('ListGeoMatchSets');
  }

  /**
   * Grants permission to retrieve an array of IPSetSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListIPSets.html
   */
  public toListIPSets() {
    return this.to('ListIPSets');
  }

  /**
   * Grants permission to retrieve an array of LoggingConfiguration objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListLoggingConfigurations.html
   */
  public toListLoggingConfigurations() {
    return this.to('ListLoggingConfigurations');
  }

  /**
   * Grants permission to retrieve an array of RuleSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRateBasedRules.html
   */
  public toListRateBasedRules() {
    return this.to('ListRateBasedRules');
  }

  /**
   * Grants permission to retrieve an array of RegexMatchSetSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRegexMatchSets.html
   */
  public toListRegexMatchSets() {
    return this.to('ListRegexMatchSets');
  }

  /**
   * Grants permission to retrieve an array of RegexPatternSetSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRegexPatternSets.html
   */
  public toListRegexPatternSets() {
    return this.to('ListRegexPatternSets');
  }

  /**
   * Grants permission to retrieve an array of resources associated with a specified WebACL
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListResourcesForWebACL.html
   */
  public toListResourcesForWebACL() {
    return this.to('ListResourcesForWebACL');
  }

  /**
   * Grants permission to retrieve an array of RuleGroup objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRuleGroups.html
   */
  public toListRuleGroups() {
    return this.to('ListRuleGroups');
  }

  /**
   * Grants permission to retrieve an array of RuleSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRules.html
   */
  public toListRules() {
    return this.to('ListRules');
  }

  /**
   * Grants permission to retrieve an array of SizeConstraintSetSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSizeConstraintSets.html
   */
  public toListSizeConstraintSets() {
    return this.to('ListSizeConstraintSets');
  }

  /**
   * Grants permission to retrieve an array of SqlInjectionMatchSet objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSqlInjectionMatchSets.html
   */
  public toListSqlInjectionMatchSets() {
    return this.to('ListSqlInjectionMatchSets');
  }

  /**
   * Grants permission to retrieve an array of RuleGroup objects that you are subscribed to
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSubscribedRuleGroups.html
   */
  public toListSubscribedRuleGroups() {
    return this.to('ListSubscribedRuleGroups');
  }

  /**
   * Grants permission to lists the Tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve an array of WebACLSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListWebACLs.html
   */
  public toListWebACLs() {
    return this.to('ListWebACLs');
  }

  /**
   * Grants permission to retrieve an array of XssMatchSet objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListXssMatchSets.html
   */
  public toListXssMatchSets() {
    return this.to('ListXssMatchSets');
  }

  /**
   * Grants permission to associates a LoggingConfiguration with a web ACL
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_PutLoggingConfiguration.html
   */
  public toPutLoggingConfiguration() {
    return this.to('PutLoggingConfiguration');
  }

  /**
   * Grants permission to attach an IAM policy to a specified rule group, to support rule group sharing between accounts
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_PutPermissionPolicy.html
   */
  public toPutPermissionPolicy() {
    return this.to('PutPermissionPolicy');
  }

  /**
   * Grants permission to add a Tag to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a Tag from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to insert or delete ByteMatchTuple objects in a ByteMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateByteMatchSet.html
   */
  public toUpdateByteMatchSet() {
    return this.to('UpdateByteMatchSet');
  }

  /**
   * Grants permission to insert or delete GeoMatchConstraint objects in a GeoMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateGeoMatchSet.html
   */
  public toUpdateGeoMatchSet() {
    return this.to('UpdateGeoMatchSet');
  }

  /**
   * Grants permission to insert or delete IPSetDescriptor objects in an IPSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateIPSet.html
   */
  public toUpdateIPSet() {
    return this.to('UpdateIPSet');
  }

  /**
   * Grants permission to insert or delete predicate objects in a rate based rule and update the RateLimit in the rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRateBasedRule.html
   */
  public toUpdateRateBasedRule() {
    return this.to('UpdateRateBasedRule');
  }

  /**
   * Grants permission to insert or delete RegexMatchTuple objects in a RegexMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRegexMatchSet.html
   */
  public toUpdateRegexMatchSet() {
    return this.to('UpdateRegexMatchSet');
  }

  /**
   * Grants permission to insert or delete RegexPatternStrings in a RegexPatternSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRegexPatternSet.html
   */
  public toUpdateRegexPatternSet() {
    return this.to('UpdateRegexPatternSet');
  }

  /**
   * Grants permission to insert or delete predicate objects in a Rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRule.html
   */
  public toUpdateRule() {
    return this.to('UpdateRule');
  }

  /**
   * Grants permission to insert or delete ActivatedRule objects in a RuleGroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRuleGroup.html
   */
  public toUpdateRuleGroup() {
    return this.to('UpdateRuleGroup');
  }

  /**
   * Grants permission to insert or delete SizeConstraint objects in a SizeConstraintSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateSizeConstraintSet.html
   */
  public toUpdateSizeConstraintSet() {
    return this.to('UpdateSizeConstraintSet');
  }

  /**
   * Grants permission to insert or delete SqlInjectionMatchTuple objects in an SqlInjectionMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateSqlInjectionMatchSet.html
   */
  public toUpdateSqlInjectionMatchSet() {
    return this.to('UpdateSqlInjectionMatchSet');
  }

  /**
   * Grants permission to insert or delete ActivatedRule objects in a WebACL
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateWebACL.html
   */
  public toUpdateWebACL() {
    return this.to('UpdateWebACL');
  }

  /**
   * Grants permission to insert or delete XssMatchTuple objects in an XssMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateXssMatchSet.html
   */
  public toUpdateXssMatchSet() {
    return this.to('UpdateXssMatchSet');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateWebACL",
      "CreateByteMatchSet",
      "CreateGeoMatchSet",
      "CreateIPSet",
      "CreateRateBasedRule",
      "CreateRegexMatchSet",
      "CreateRegexPatternSet",
      "CreateRule",
      "CreateRuleGroup",
      "CreateSizeConstraintSet",
      "CreateSqlInjectionMatchSet",
      "CreateWebACLMigrationStack",
      "CreateXssMatchSet",
      "DeleteByteMatchSet",
      "DeleteGeoMatchSet",
      "DeleteIPSet",
      "DeleteLoggingConfiguration",
      "DeleteRateBasedRule",
      "DeleteRegexMatchSet",
      "DeleteRegexPatternSet",
      "DeleteRule",
      "DeleteRuleGroup",
      "DeleteSizeConstraintSet",
      "DeleteSqlInjectionMatchSet",
      "DeleteXssMatchSet",
      "DisassociateWebACL",
      "PutLoggingConfiguration",
      "UpdateByteMatchSet",
      "UpdateGeoMatchSet",
      "UpdateIPSet",
      "UpdateRateBasedRule",
      "UpdateRegexMatchSet",
      "UpdateRegexPatternSet",
      "UpdateRule",
      "UpdateRuleGroup",
      "UpdateSizeConstraintSet",
      "UpdateSqlInjectionMatchSet",
      "UpdateXssMatchSet"
    ],
    "Permissions management": [
      "CreateWebACL",
      "DeletePermissionPolicy",
      "DeleteWebACL",
      "PutPermissionPolicy",
      "UpdateWebACL"
    ],
    "Read": [
      "GetByteMatchSet",
      "GetChangeToken",
      "GetChangeTokenStatus",
      "GetGeoMatchSet",
      "GetIPSet",
      "GetLoggingConfiguration",
      "GetPermissionPolicy",
      "GetRateBasedRule",
      "GetRateBasedRuleManagedKeys",
      "GetRegexMatchSet",
      "GetRegexPatternSet",
      "GetRule",
      "GetRuleGroup",
      "GetSampledRequests",
      "GetSizeConstraintSet",
      "GetSqlInjectionMatchSet",
      "GetWebACL",
      "GetWebACLForResource",
      "GetXssMatchSet",
      "ListTagsForResource"
    ],
    "List": [
      "ListActivatedRulesInRuleGroup",
      "ListByteMatchSets",
      "ListGeoMatchSets",
      "ListIPSets",
      "ListLoggingConfigurations",
      "ListRateBasedRules",
      "ListRegexMatchSets",
      "ListRegexPatternSets",
      "ListResourcesForWebACL",
      "ListRuleGroups",
      "ListRules",
      "ListSizeConstraintSets",
      "ListSqlInjectionMatchSets",
      "ListSubscribedRuleGroups",
      "ListWebACLs",
      "ListXssMatchSets"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type bytematchset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ByteMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBytematchset(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:waf-regional:${ region || '*' }:${ account || '*' }:bytematchset/${ id }`);
  }

  /**
   * Adds a resource of type ipset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_IPSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIpset(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:waf-regional:${ region || '*' }:${ account || '*' }:ipset/${ id }`);
  }

  /**
   * Adds a resource of type loadbalancer/app/ to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_WebACL.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLoadbalancerApp(loadBalancerName: string, loadBalancerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:elasticloadbalancing:${ region || '*' }:${ account || '*' }:loadbalancer/app/${ loadBalancerName }/${ loadBalancerId }`);
  }

  /**
   * Adds a resource of type ratebasedrule to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_RateBasedRule.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRatebasedrule(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:waf-regional:${ region || '*' }:${ account || '*' }:ratebasedrule/${ id }`);
  }

  /**
   * Adds a resource of type rule to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_Rule.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRule(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:waf-regional:${ region || '*' }:${ account || '*' }:rule/${ id }`);
  }

  /**
   * Adds a resource of type sizeconstraintset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_SizeConstraintSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSizeconstraintset(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:waf-regional:${ region || '*' }:${ account || '*' }:sizeconstraintset/${ id }`);
  }

  /**
   * Adds a resource of type sqlinjectionmatchset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_SqlInjectionMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSqlinjectionmatchset(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:waf-regional:${ region || '*' }:${ account || '*' }:sqlinjectionset/${ id }`);
  }

  /**
   * Adds a resource of type webacl to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_WebACL.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWebacl(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:waf-regional:${ region || '*' }:${ account || '*' }:webacl/${ id }`);
  }

  /**
   * Adds a resource of type xssmatchset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_XssMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onXssmatchset(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:waf-regional:${ region || '*' }:${ account || '*' }:xssmatchset/${ id }`);
  }

  /**
   * Adds a resource of type regexmatchset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_RegexMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRegexmatchset(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:waf-regional:${ region || '*' }:${ account || '*' }:regexmatch/${ id }`);
  }

  /**
   * Adds a resource of type regexpatternset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_RegexPatternSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRegexpatternset(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:waf-regional:${ region || '*' }:${ account || '*' }:regexpatternset/${ id }`);
  }

  /**
   * Adds a resource of type geomatchset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GeoMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGeomatchset(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:waf-regional:${ region || '*' }:${ account || '*' }:geomatchset/${ id }`);
  }

  /**
   * Adds a resource of type rulegroup to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_RuleGroup.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRulegroup(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:waf-regional:${ region || '*' }:${ account || '*' }:rulegroup/${ id }`);
  }
}
