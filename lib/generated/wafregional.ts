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
   * Associates a WebACL with a resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_AssociateWebACL.html
   */
  public toAssociateWebACL() {
    return this.to('AssociateWebACL');
  }

  /**
   * Creates a ByteMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateByteMatchSet.html
   */
  public toCreateByteMatchSet() {
    return this.to('CreateByteMatchSet');
  }

  /**
   * Creates a GeoMatchSet, which you use to specify which web requests you want to allow or block based on the country that the requests originate rom.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateGeoMatchSet.html
   */
  public toCreateGeoMatchSet() {
    return this.to('CreateGeoMatchSet');
  }

  /**
   * Creates an IPSet, which you use to specify which web requests you want to allow or block based on the IP addresses that the requests originate rom.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateIPSet.html
   */
  public toCreateIPSet() {
    return this.to('CreateIPSet');
  }

  /**
   * Creates a RateBasedRule, which contains a RateLimit specifying the maximum number of requests that AWS WAF allows from a specified IP address n a five-minute period.
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
   * Creates a RegexMatchSet, which you use to specify which web requests you want to allow or block based on the regex patterns you specified in a egexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRegexMatchSet.html
   */
  public toCreateRegexMatchSet() {
    return this.to('CreateRegexMatchSet');
  }

  /**
   * Creates a RegexPatternSet, which you use to specify the regular expression (regex) pattern that you want AWS WAF to search for.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRegexPatternSet.html
   */
  public toCreateRegexPatternSet() {
    return this.to('CreateRegexPatternSet');
  }

  /**
   * Creates a Rule, which contains the IPSet objects, ByteMatchSet objects, and other predicates that identify the requests that you want to lock.
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
   * Creates a RuleGroup. A rule group is a collection of predefined rules that you add to a WebACL.
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
   * Creates a SizeConstraintSet, which you use to identify the part of a web request that you want to check for length.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateSizeConstraintSet.html
   */
  public toCreateSizeConstraintSet() {
    return this.to('CreateSizeConstraintSet');
  }

  /**
   * Creates a SqlInjectionMatchSet, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web equests.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateSqlInjectionMatchSet.html
   */
  public toCreateSqlInjectionMatchSet() {
    return this.to('CreateSqlInjectionMatchSet');
  }

  /**
   * Creates a WebACL, which contains the Rules that identify the CloudFront web requests that you want to allow, block, or count.
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
   * Create and store a CloudFormation tempalte that creates an equivalent WAF v2 WebACL from the given WAF Classic WebACL in the given S3 bucket.
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
   * Creates an XssMatchSet, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web equests.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateXssMatchSet.html
   */
  public toCreateXssMatchSet() {
    return this.to('CreateXssMatchSet');
  }

  /**
   * Permanently deletes a ByteMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteByteMatchSet.html
   */
  public toDeleteByteMatchSet() {
    return this.to('DeleteByteMatchSet');
  }

  /**
   * Permanently deletes an GeoMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteGeoMatchSet.html
   */
  public toDeleteGeoMatchSet() {
    return this.to('DeleteGeoMatchSet');
  }

  /**
   * Permanently deletes an IPSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteIPSet.html
   */
  public toDeleteIPSet() {
    return this.to('DeleteIPSet');
  }

  /**
   * Permanently deletes the LoggingConfiguration from the specified web ACL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteLoggingConfiguration.html
   */
  public toDeleteLoggingConfiguration() {
    return this.to('DeleteLoggingConfiguration');
  }

  /**
   * Permanently deletes an IAM policy from the specified RuleGroup.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeletePermissionPolicy.html
   */
  public toDeletePermissionPolicy() {
    return this.to('DeletePermissionPolicy');
  }

  /**
   * Permanently deletes a RateBasedRule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRateBasedRule.html
   */
  public toDeleteRateBasedRule() {
    return this.to('DeleteRateBasedRule');
  }

  /**
   * Permanently deletes an RegexMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRegexMatchSet.html
   */
  public toDeleteRegexMatchSet() {
    return this.to('DeleteRegexMatchSet');
  }

  /**
   * Permanently deletes an RegexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRegexPatternSet.html
   */
  public toDeleteRegexPatternSet() {
    return this.to('DeleteRegexPatternSet');
  }

  /**
   * Permanently deletes a Rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRule.html
   */
  public toDeleteRule() {
    return this.to('DeleteRule');
  }

  /**
   * Permanently deletes a RuleGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRuleGroup.html
   */
  public toDeleteRuleGroup() {
    return this.to('DeleteRuleGroup');
  }

  /**
   * Permanently deletes a SizeConstraintSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteSizeConstraintSet.html
   */
  public toDeleteSizeConstraintSet() {
    return this.to('DeleteSizeConstraintSet');
  }

  /**
   * Permanently deletes a SqlInjectionMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteSqlInjectionMatchSet.html
   */
  public toDeleteSqlInjectionMatchSet() {
    return this.to('DeleteSqlInjectionMatchSet');
  }

  /**
   * Permanently deletes a WebACL.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteWebACL.html
   */
  public toDeleteWebACL() {
    return this.to('DeleteWebACL');
  }

  /**
   * Permanently deletes an XssMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteXssMatchSet.html
   */
  public toDeleteXssMatchSet() {
    return this.to('DeleteXssMatchSet');
  }

  /**
   * Removes a WebACL from the specified resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DisassociateWebACL.html
   */
  public toDisassociateWebACL() {
    return this.to('DisassociateWebACL');
  }

  /**
   * Returns the ByteMatchSet specified by ByteMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetByteMatchSet.html
   */
  public toGetByteMatchSet() {
    return this.to('GetByteMatchSet');
  }

  /**
   * When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete equest.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetChangeToken.html
   */
  public toGetChangeToken() {
    return this.to('GetChangeToken');
  }

  /**
   * Returns the status of a ChangeToken that you got by calling GetChangeToken.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetChangeTokenStatus.html
   */
  public toGetChangeTokenStatus() {
    return this.to('GetChangeTokenStatus');
  }

  /**
   * Returns the GeoMatchSet specified by GeoMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetGeoMatchSet.html
   */
  public toGetGeoMatchSet() {
    return this.to('GetGeoMatchSet');
  }

  /**
   * Returns the IPSet that is specified by IPSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetIPSet.html
   */
  public toGetIPSet() {
    return this.to('GetIPSet');
  }

  /**
   * Returns the LoggingConfiguration for the specified web ACL.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetLoggingConfiguration.html
   */
  public toGetLoggingConfiguration() {
    return this.to('GetLoggingConfiguration');
  }

  /**
   * Returns the IAM policy attached to the RuleGroup.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetPermissionPolicy.html
   */
  public toGetPermissionPolicy() {
    return this.to('GetPermissionPolicy');
  }

  /**
   * Returns the RateBasedRule that is specified by the RuleId that you included in the GetRateBasedRule request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRateBasedRule.html
   */
  public toGetRateBasedRule() {
    return this.to('GetRateBasedRule');
  }

  /**
   * Returns an array of IP addresses currently being blocked by the RateBasedRule that is specified by the RuleId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRateBasedRuleManagedKeys.html
   */
  public toGetRateBasedRuleManagedKeys() {
    return this.to('GetRateBasedRuleManagedKeys');
  }

  /**
   * Returns the RegexMatchSet specified by RegexMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRegexMatchSet.html
   */
  public toGetRegexMatchSet() {
    return this.to('GetRegexMatchSet');
  }

  /**
   * Returns the RegexPatternSet specified by RegexPatternSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRegexPatternSet.html
   */
  public toGetRegexPatternSet() {
    return this.to('GetRegexPatternSet');
  }

  /**
   * Returns the Rule that is specified by the RuleId that you included in the GetRule request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRule.html
   */
  public toGetRule() {
    return this.to('GetRule');
  }

  /**
   * Returns the RuleGroup that is specified by the RuleGroupId that you included in the GetRuleGroup request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRuleGroup.html
   */
  public toGetRuleGroup() {
    return this.to('GetRuleGroup');
  }

  /**
   * Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests hat your AWS resource received during a time range that you choose.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSampledRequests.html
   */
  public toGetSampledRequests() {
    return this.to('GetSampledRequests');
  }

  /**
   * Returns the SizeConstraintSet specified by SizeConstraintSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSizeConstraintSet.html
   */
  public toGetSizeConstraintSet() {
    return this.to('GetSizeConstraintSet');
  }

  /**
   * Returns the SqlInjectionMatchSet that is specified by SqlInjectionMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSqlInjectionMatchSet.html
   */
  public toGetSqlInjectionMatchSet() {
    return this.to('GetSqlInjectionMatchSet');
  }

  /**
   * Returns the WebACL that is specified by WebACLId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetWebACL.html
   */
  public toGetWebACL() {
    return this.to('GetWebACL');
  }

  /**
   * Returns the WebACL for the specified resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetWebACLForResource.html
   */
  public toGetWebACLForResource() {
    return this.to('GetWebACLForResource');
  }

  /**
   * Returns the XssMatchSet that is specified by XssMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetXssMatchSet.html
   */
  public toGetXssMatchSet() {
    return this.to('GetXssMatchSet');
  }

  /**
   * Returns an array of ActivatedRule objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListActivatedRulesInRuleGroup.html
   */
  public toListActivatedRulesInRuleGroup() {
    return this.to('ListActivatedRulesInRuleGroup');
  }

  /**
   * Returns an array of ByteMatchSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListByteMatchSets.html
   */
  public toListByteMatchSets() {
    return this.to('ListByteMatchSets');
  }

  /**
   * Returns an array of GeoMatchSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListGeoMatchSets.html
   */
  public toListGeoMatchSets() {
    return this.to('ListGeoMatchSets');
  }

  /**
   * Returns an array of IPSetSummary objects in the response.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListIPSets.html
   */
  public toListIPSets() {
    return this.to('ListIPSets');
  }

  /**
   * Returns an array of LoggingConfiguration objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListLoggingConfigurations.html
   */
  public toListLoggingConfigurations() {
    return this.to('ListLoggingConfigurations');
  }

  /**
   * Returns an array of RuleSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRateBasedRules.html
   */
  public toListRateBasedRules() {
    return this.to('ListRateBasedRules');
  }

  /**
   * Returns an array of RegexMatchSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRegexMatchSets.html
   */
  public toListRegexMatchSets() {
    return this.to('ListRegexMatchSets');
  }

  /**
   * Returns an array of RegexPatternSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRegexPatternSets.html
   */
  public toListRegexPatternSets() {
    return this.to('ListRegexPatternSets');
  }

  /**
   * Returns an array of resources associated with the specified WebACL.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListResourcesForWebACL.html
   */
  public toListResourcesForWebACL() {
    return this.to('ListResourcesForWebACL');
  }

  /**
   * Returns an array of RuleGroup objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRuleGroups.html
   */
  public toListRuleGroups() {
    return this.to('ListRuleGroups');
  }

  /**
   * Returns an array of RuleSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRules.html
   */
  public toListRules() {
    return this.to('ListRules');
  }

  /**
   * Returns an array of SizeConstraintSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSizeConstraintSets.html
   */
  public toListSizeConstraintSets() {
    return this.to('ListSizeConstraintSets');
  }

  /**
   * Returns an array of SqlInjectionMatchSet objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSqlInjectionMatchSets.html
   */
  public toListSqlInjectionMatchSets() {
    return this.to('ListSqlInjectionMatchSets');
  }

  /**
   * Returns an array of RuleGroup objects that you are subscribed to.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSubscribedRuleGroups.html
   */
  public toListSubscribedRuleGroups() {
    return this.to('ListSubscribedRuleGroups');
  }

  /**
   * Lists the Tags for a given resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Returns an array of WebACLSummary objects in the response.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListWebACLs.html
   */
  public toListWebACLs() {
    return this.to('ListWebACLs');
  }

  /**
   * Returns an array of XssMatchSet objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListXssMatchSets.html
   */
  public toListXssMatchSets() {
    return this.to('ListXssMatchSets');
  }

  /**
   * Associates a LoggingConfiguration with a specified web ACL.
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
   * Attaches a IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_PutPermissionPolicy.html
   */
  public toPutPermissionPolicy() {
    return this.to('PutPermissionPolicy');
  }

  /**
   * Adds a Tag to a given resource.
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
   * Removes a Tag from a given resource.
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
   * Inserts or deletes ByteMatchTuple objects (filters) in a ByteMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateByteMatchSet.html
   */
  public toUpdateByteMatchSet() {
    return this.to('UpdateByteMatchSet');
  }

  /**
   * Inserts or deletes GeoMatchConstraint objects in a GeoMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateGeoMatchSet.html
   */
  public toUpdateGeoMatchSet() {
    return this.to('UpdateGeoMatchSet');
  }

  /**
   * Inserts or deletes IPSetDescriptor objects in an IPSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateIPSet.html
   */
  public toUpdateIPSet() {
    return this.to('UpdateIPSet');
  }

  /**
   * Inserts or deletes Predicate objects in a rule and updates the RateLimit in the rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRateBasedRule.html
   */
  public toUpdateRateBasedRule() {
    return this.to('UpdateRateBasedRule');
  }

  /**
   * Inserts or deletes RegexMatchTuple objects (filters) in a RegexMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRegexMatchSet.html
   */
  public toUpdateRegexMatchSet() {
    return this.to('UpdateRegexMatchSet');
  }

  /**
   * Inserts or deletes RegexPatternStrings in a RegexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRegexPatternSet.html
   */
  public toUpdateRegexPatternSet() {
    return this.to('UpdateRegexPatternSet');
  }

  /**
   * Inserts or deletes Predicate objects in a Rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRule.html
   */
  public toUpdateRule() {
    return this.to('UpdateRule');
  }

  /**
   * Inserts or deletes ActivatedRule objects in a RuleGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRuleGroup.html
   */
  public toUpdateRuleGroup() {
    return this.to('UpdateRuleGroup');
  }

  /**
   * Inserts or deletes SizeConstraint objects (filters) in a SizeConstraintSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateSizeConstraintSet.html
   */
  public toUpdateSizeConstraintSet() {
    return this.to('UpdateSizeConstraintSet');
  }

  /**
   * Inserts or deletes SqlInjectionMatchTuple objects (filters) in a SqlInjectionMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateSqlInjectionMatchSet.html
   */
  public toUpdateSqlInjectionMatchSet() {
    return this.to('UpdateSqlInjectionMatchSet');
  }

  /**
   * Inserts or deletes ActivatedRule objects in a WebACL.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateWebACL.html
   */
  public toUpdateWebACL() {
    return this.to('UpdateWebACL');
  }

  /**
   * Inserts or deletes XssMatchTuple objects (filters) in an XssMatchSet.
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
    var arn = 'arn:${Partition}:waf-regional:${Region}:${Account}:bytematchset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:waf-regional:${Region}:${Account}:ipset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:elasticloadbalancing:${Region}:${Account}:loadbalancer/app/${LoadBalancerName}/${LoadBalancerId}';
    arn = arn.replace('${LoadBalancerName}', loadBalancerName);
    arn = arn.replace('${LoadBalancerId}', loadBalancerId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:waf-regional:${Region}:${Account}:ratebasedrule/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:waf-regional:${Region}:${Account}:rule/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:waf-regional:${Region}:${Account}:sizeconstraintset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:waf-regional:${Region}:${Account}:sqlinjectionset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:waf-regional:${Region}:${Account}:webacl/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:waf-regional:${Region}:${Account}:xssmatchset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:waf-regional:${Region}:${Account}:regexmatch/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:waf-regional:${Region}:${Account}:regexpatternset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:waf-regional:${Region}:${Account}:geomatchset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:waf-regional:${Region}:${Account}:rulegroup/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
