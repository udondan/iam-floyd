import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [waf](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswaf.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Waf extends PolicyStatement {
  public servicePrefix = 'waf';

  /**
   * Statement provider for service [waf](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswaf.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a ByteMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateByteMatchSet.html
   */
  public toCreateByteMatchSet() {
    this.to('CreateByteMatchSet');
    return this;
  }

  /**
   * Creates a GeoMatchSet, which you use to specify which web requests you want to allow or block based on the country that the requests originate from.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateGeoMatchSet.html
   */
  public toCreateGeoMatchSet() {
    this.to('CreateGeoMatchSet');
    return this;
  }

  /**
   * Creates an IPSet, which you use to specify which web requests you want to allow or block based on the IP addresses that the requests originate from.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateIPSet.html
   */
  public toCreateIPSet() {
    this.to('CreateIPSet');
    return this;
  }

  /**
   * Creates a RateBasedRule, which contains a RateLimit specifying the maximum number of requests that AWS WAF allows from a specified IP address in a five-minute period.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRateBasedRule.html
   */
  public toCreateRateBasedRule() {
    this.to('CreateRateBasedRule');
    return this;
  }

  /**
   * Creates a RegexMatchSet, which you use to specify which web requests you want to allow or block based on the regex patterns you specified in a RegexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRegexMatchSet.html
   */
  public toCreateRegexMatchSet() {
    this.to('CreateRegexMatchSet');
    return this;
  }

  /**
   * Creates a RegexPatternSet, which you use to specify the regular expression (regex) pattern that you want AWS WAF to search for.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRegexPatternSet.html
   */
  public toCreateRegexPatternSet() {
    this.to('CreateRegexPatternSet');
    return this;
  }

  /**
   * Creates a Rule, which contains the IPSet objects, ByteMatchSet objects, and other predicates that identify the requests that you want to block.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRule.html
   */
  public toCreateRule() {
    this.to('CreateRule');
    return this;
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
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRuleGroup.html
   */
  public toCreateRuleGroup() {
    this.to('CreateRuleGroup');
    return this;
  }

  /**
   * Creates a SizeConstraintSet, which you use to identify the part of a web request that you want to check for length.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateSizeConstraintSet.html
   */
  public toCreateSizeConstraintSet() {
    this.to('CreateSizeConstraintSet');
    return this;
  }

  /**
   * Creates a SqlInjectionMatchSet, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web requests.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateSqlInjectionMatchSet.html
   */
  public toCreateSqlInjectionMatchSet() {
    this.to('CreateSqlInjectionMatchSet');
    return this;
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
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateWebACL.html
   */
  public toCreateWebACL() {
    this.to('CreateWebACL');
    return this;
  }

  /**
   * Create and store a CloudFormation tempalte that creates an equivalent WAF v2 WebACL from the given WAF Classic WebACL in the given S3 bucket.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateWebACLMigrationStack.html
   */
  public toCreateWebACLMigrationStack() {
    this.to('CreateWebACLMigrationStack');
    return this;
  }

  /**
   * Creates an XssMatchSet, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web requests.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateXssMatchSet.html
   */
  public toCreateXssMatchSet() {
    this.to('CreateXssMatchSet');
    return this;
  }

  /**
   * Permanently deletes a ByteMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteByteMatchSet.html
   */
  public toDeleteByteMatchSet() {
    this.to('DeleteByteMatchSet');
    return this;
  }

  /**
   * Permanently deletes an GeoMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteGeoMatchSet.html
   */
  public toDeleteGeoMatchSet() {
    this.to('DeleteGeoMatchSet');
    return this;
  }

  /**
   * Permanently deletes an IPSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteIPSet.html
   */
  public toDeleteIPSet() {
    this.to('DeleteIPSet');
    return this;
  }

  /**
   * Permanently deletes the LoggingConfiguration from the specified web ACL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteLoggingConfiguration.html
   */
  public toDeleteLoggingConfiguration() {
    this.to('DeleteLoggingConfiguration');
    return this;
  }

  /**
   * Permanently deletes an IAM policy from the specified RuleGroup.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeletePermissionPolicy.html
   */
  public toDeletePermissionPolicy() {
    this.to('DeletePermissionPolicy');
    return this;
  }

  /**
   * Permanently deletes a RateBasedRule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRateBasedRule.html
   */
  public toDeleteRateBasedRule() {
    this.to('DeleteRateBasedRule');
    return this;
  }

  /**
   * Permanently deletes an RegexMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRegexMatchSet.html
   */
  public toDeleteRegexMatchSet() {
    this.to('DeleteRegexMatchSet');
    return this;
  }

  /**
   * Permanently deletes an RegexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRegexPatternSet.html
   */
  public toDeleteRegexPatternSet() {
    this.to('DeleteRegexPatternSet');
    return this;
  }

  /**
   * Permanently deletes a Rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRule.html
   */
  public toDeleteRule() {
    this.to('DeleteRule');
    return this;
  }

  /**
   * Permanently deletes a RuleGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRuleGroup.html
   */
  public toDeleteRuleGroup() {
    this.to('DeleteRuleGroup');
    return this;
  }

  /**
   * Permanently deletes a SizeConstraintSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteSizeConstraintSet.html
   */
  public toDeleteSizeConstraintSet() {
    this.to('DeleteSizeConstraintSet');
    return this;
  }

  /**
   * Permanently deletes a SqlInjectionMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteSqlInjectionMatchSet.html
   */
  public toDeleteSqlInjectionMatchSet() {
    this.to('DeleteSqlInjectionMatchSet');
    return this;
  }

  /**
   * Permanently deletes a WebACL.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteWebACL.html
   */
  public toDeleteWebACL() {
    this.to('DeleteWebACL');
    return this;
  }

  /**
   * Permanently deletes an XssMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteXssMatchSet.html
   */
  public toDeleteXssMatchSet() {
    this.to('DeleteXssMatchSet');
    return this;
  }

  /**
   * Returns the ByteMatchSet specified by ByteMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetByteMatchSet.html
   */
  public toGetByteMatchSet() {
    this.to('GetByteMatchSet');
    return this;
  }

  /**
   * When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetChangeToken.html
   */
  public toGetChangeToken() {
    this.to('GetChangeToken');
    return this;
  }

  /**
   * Returns the status of a ChangeToken that you got by calling GetChangeToken.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetChangeTokenStatus.html
   */
  public toGetChangeTokenStatus() {
    this.to('GetChangeTokenStatus');
    return this;
  }

  /**
   * Returns the GeoMatchSet specified by GeoMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetGeoMatchSet.html
   */
  public toGetGeoMatchSet() {
    this.to('GetGeoMatchSet');
    return this;
  }

  /**
   * Returns the IPSet that is specified by IPSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetIPSet.html
   */
  public toGetIPSet() {
    this.to('GetIPSet');
    return this;
  }

  /**
   * Returns the LoggingConfiguration for the specified web ACL.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetLoggingConfiguration.html
   */
  public toGetLoggingConfiguration() {
    this.to('GetLoggingConfiguration');
    return this;
  }

  /**
   * Returns the IAM policy attached to the RuleGroup.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetPermissionPolicy.html
   */
  public toGetPermissionPolicy() {
    this.to('GetPermissionPolicy');
    return this;
  }

  /**
   * Returns the RateBasedRule that is specified by the RuleId that you included in the GetRateBasedRule request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRateBasedRule.html
   */
  public toGetRateBasedRule() {
    this.to('GetRateBasedRule');
    return this;
  }

  /**
   * Returns an array of IP addresses currently being blocked by the RateBasedRule that is specified by the RuleId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRateBasedRuleManagedKeys.html
   */
  public toGetRateBasedRuleManagedKeys() {
    this.to('GetRateBasedRuleManagedKeys');
    return this;
  }

  /**
   * Returns the RegexMatchSet specified by RegexMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRegexMatchSet.html
   */
  public toGetRegexMatchSet() {
    this.to('GetRegexMatchSet');
    return this;
  }

  /**
   * Returns the RegexPatternSet specified by RegexPatternSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRegexPatternSet.html
   */
  public toGetRegexPatternSet() {
    this.to('GetRegexPatternSet');
    return this;
  }

  /**
   * Returns the Rule that is specified by the RuleId that you included in the GetRule request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRule.html
   */
  public toGetRule() {
    this.to('GetRule');
    return this;
  }

  /**
   * Returns the RuleGroup that is specified by the RuleGroupId that you included in the GetRuleGroup request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRuleGroup.html
   */
  public toGetRuleGroup() {
    this.to('GetRuleGroup');
    return this;
  }

  /**
   * Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSampledRequests.html
   */
  public toGetSampledRequests() {
    this.to('GetSampledRequests');
    return this;
  }

  /**
   * Returns the SizeConstraintSet specified by SizeConstraintSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSizeConstraintSet.html
   */
  public toGetSizeConstraintSet() {
    this.to('GetSizeConstraintSet');
    return this;
  }

  /**
   * Returns the SqlInjectionMatchSet that is specified by SqlInjectionMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSqlInjectionMatchSet.html
   */
  public toGetSqlInjectionMatchSet() {
    this.to('GetSqlInjectionMatchSet');
    return this;
  }

  /**
   * Returns the WebACL that is specified by WebACLId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetWebACL.html
   */
  public toGetWebACL() {
    this.to('GetWebACL');
    return this;
  }

  /**
   * Returns the XssMatchSet that is specified by XssMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetXssMatchSet.html
   */
  public toGetXssMatchSet() {
    this.to('GetXssMatchSet');
    return this;
  }

  /**
   * Returns an array of ActivatedRule objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListActivatedRulesInRuleGroup.html
   */
  public toListActivatedRulesInRuleGroup() {
    this.to('ListActivatedRulesInRuleGroup');
    return this;
  }

  /**
   * Returns an array of ByteMatchSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListByteMatchSets.html
   */
  public toListByteMatchSets() {
    this.to('ListByteMatchSets');
    return this;
  }

  /**
   * Returns an array of GeoMatchSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListGeoMatchSets.html
   */
  public toListGeoMatchSets() {
    this.to('ListGeoMatchSets');
    return this;
  }

  /**
   * Returns an array of IPSetSummary objects in the response.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListIPSets.html
   */
  public toListIPSets() {
    this.to('ListIPSets');
    return this;
  }

  /**
   * Returns an array of LoggingConfiguration objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListLoggingConfigurations.html
   */
  public toListLoggingConfigurations() {
    this.to('ListLoggingConfigurations');
    return this;
  }

  /**
   * Returns an array of RuleSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRateBasedRules.html
   */
  public toListRateBasedRules() {
    this.to('ListRateBasedRules');
    return this;
  }

  /**
   * Returns an array of RegexMatchSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRegexMatchSets.html
   */
  public toListRegexMatchSets() {
    this.to('ListRegexMatchSets');
    return this;
  }

  /**
   * Returns an array of RegexPatternSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRegexPatternSets.html
   */
  public toListRegexPatternSets() {
    this.to('ListRegexPatternSets');
    return this;
  }

  /**
   * Returns an array of RuleGroup objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRuleGroups.html
   */
  public toListRuleGroups() {
    this.to('ListRuleGroups');
    return this;
  }

  /**
   * Returns an array of RuleSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRules.html
   */
  public toListRules() {
    this.to('ListRules');
    return this;
  }

  /**
   * Returns an array of SizeConstraintSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSizeConstraintSets.html
   */
  public toListSizeConstraintSets() {
    this.to('ListSizeConstraintSets');
    return this;
  }

  /**
   * Returns an array of SqlInjectionMatchSet objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSqlInjectionMatchSets.html
   */
  public toListSqlInjectionMatchSets() {
    this.to('ListSqlInjectionMatchSets');
    return this;
  }

  /**
   * Returns an array of RuleGroup objects that you are subscribed to.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSubscribedRuleGroups.html
   */
  public toListSubscribedRuleGroups() {
    this.to('ListSubscribedRuleGroups');
    return this;
  }

  /**
   * Lists the Tags for a given resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Returns an array of WebACLSummary objects in the response.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListWebACLs.html
   */
  public toListWebACLs() {
    this.to('ListWebACLs');
    return this;
  }

  /**
   * Returns an array of XssMatchSet objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListXssMatchSets.html
   */
  public toListXssMatchSets() {
    this.to('ListXssMatchSets');
    return this;
  }

  /**
   * Associates a LoggingConfiguration with a specified web ACL.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_PutLoggingConfiguration.html
   */
  public toPutLoggingConfiguration() {
    this.to('PutLoggingConfiguration');
    return this;
  }

  /**
   * Attaches a IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_PutPermissionPolicy.html
   */
  public toPutPermissionPolicy() {
    this.to('PutPermissionPolicy');
    return this;
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
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_TagResource.html
   */
  public toTagResource() {
    this.to('TagResource');
    return this;
  }

  /**
   * Removes a Tag from a given resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UntagResource.html
   */
  public toUntagResource() {
    this.to('UntagResource');
    return this;
  }

  /**
   * Inserts or deletes ByteMatchTuple objects (filters) in a ByteMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateByteMatchSet.html
   */
  public toUpdateByteMatchSet() {
    this.to('UpdateByteMatchSet');
    return this;
  }

  /**
   * Inserts or deletes GeoMatchConstraint objects in a GeoMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateGeoMatchSet.html
   */
  public toUpdateGeoMatchSet() {
    this.to('UpdateGeoMatchSet');
    return this;
  }

  /**
   * Inserts or deletes IPSetDescriptor objects in an IPSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateIPSet.html
   */
  public toUpdateIPSet() {
    this.to('UpdateIPSet');
    return this;
  }

  /**
   * Inserts or deletes Predicate objects in a rule and updates the RateLimit in the rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRateBasedRule.html
   */
  public toUpdateRateBasedRule() {
    this.to('UpdateRateBasedRule');
    return this;
  }

  /**
   * Inserts or deletes RegexMatchTuple objects (filters) in a RegexMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRegexMatchSet.html
   */
  public toUpdateRegexMatchSet() {
    this.to('UpdateRegexMatchSet');
    return this;
  }

  /**
   * Inserts or deletes RegexPatternStrings in a RegexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRegexPatternSet.html
   */
  public toUpdateRegexPatternSet() {
    this.to('UpdateRegexPatternSet');
    return this;
  }

  /**
   * Inserts or deletes Predicate objects in a Rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRule.html
   */
  public toUpdateRule() {
    this.to('UpdateRule');
    return this;
  }

  /**
   * Inserts or deletes ActivatedRule objects in a RuleGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRuleGroup.html
   */
  public toUpdateRuleGroup() {
    this.to('UpdateRuleGroup');
    return this;
  }

  /**
   * Inserts or deletes SizeConstraint objects (filters) in a SizeConstraintSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateSizeConstraintSet.html
   */
  public toUpdateSizeConstraintSet() {
    this.to('UpdateSizeConstraintSet');
    return this;
  }

  /**
   * Inserts or deletes SqlInjectionMatchTuple objects (filters) in a SqlInjectionMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateSqlInjectionMatchSet.html
   */
  public toUpdateSqlInjectionMatchSet() {
    this.to('UpdateSqlInjectionMatchSet');
    return this;
  }

  /**
   * Inserts or deletes ActivatedRule objects in a WebACL.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateWebACL.html
   */
  public toUpdateWebACL() {
    this.to('UpdateWebACL');
    return this;
  }

  /**
   * Inserts or deletes XssMatchTuple objects (filters) in an XssMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateXssMatchSet.html
   */
  public toUpdateXssMatchSet() {
    this.to('UpdateXssMatchSet');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
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
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ByteMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBytematchset(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:waf::${Account}:bytematchset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ipset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_IPSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIpset(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:waf::${Account}:ipset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ratebasedrule to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_RateBasedRule.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRatebasedrule(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:waf::${Account}:ratebasedrule/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type rule to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_Rule.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRule(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:waf::${Account}:rule/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type sizeconstraintset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_SizeConstraintSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSizeconstraintset(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:waf::${Account}:sizeconstraintset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type sqlinjectionmatchset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_SqlInjectionMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSqlinjectionmatchset(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:waf::${Account}:sqlinjectionset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type webacl to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_WebACL.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWebacl(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:waf::${Account}:webacl/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type xssmatchset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_XssMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onXssmatchset(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:waf::${Account}:xssmatchset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type regexmatchset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_RegexMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRegexmatchset(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:waf::${Account}:regexmatch/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type regexpatternset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_RegexPatternSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRegexpatternset(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:waf::${Account}:regexpatternset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type geomatchset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GeoMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGeomatchset(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:waf::${Account}:geomatchset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type rulegroup to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_RuleGroup.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRulegroup(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:waf::${Account}:rulegroup/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
