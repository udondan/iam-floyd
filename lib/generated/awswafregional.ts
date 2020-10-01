import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [waf-regional](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswafregional.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class WafRegional extends PolicyStatement {
  public servicePrefix = 'waf-regional';

  /**
   * Statement provider for service [waf-regional](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswafregional.html).
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
    this.to('waf-regional:AssociateWebACL');
    return this;
  }

  /**
   * Creates a ByteMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateByteMatchSet.html
   */
  public toCreateByteMatchSet() {
    this.to('waf-regional:CreateByteMatchSet');
    return this;
  }

  /**
   * Creates a GeoMatchSet, which you use to specify which web requests you want to allow or block based on the country that the requests originate rom.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateGeoMatchSet.html
   */
  public toCreateGeoMatchSet() {
    this.to('waf-regional:CreateGeoMatchSet');
    return this;
  }

  /**
   * Creates an IPSet, which you use to specify which web requests you want to allow or block based on the IP addresses that the requests originate rom.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateIPSet.html
   */
  public toCreateIPSet() {
    this.to('waf-regional:CreateIPSet');
    return this;
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
    this.to('waf-regional:CreateRateBasedRule');
    return this;
  }

  /**
   * Creates a RegexMatchSet, which you use to specify which web requests you want to allow or block based on the regex patterns you specified in a egexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRegexMatchSet.html
   */
  public toCreateRegexMatchSet() {
    this.to('waf-regional:CreateRegexMatchSet');
    return this;
  }

  /**
   * Creates a RegexPatternSet, which you use to specify the regular expression (regex) pattern that you want AWS WAF to search for.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRegexPatternSet.html
   */
  public toCreateRegexPatternSet() {
    this.to('waf-regional:CreateRegexPatternSet');
    return this;
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
    this.to('waf-regional:CreateRule');
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
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRuleGroup.html
   */
  public toCreateRuleGroup() {
    this.to('waf-regional:CreateRuleGroup');
    return this;
  }

  /**
   * Creates a SizeConstraintSet, which you use to identify the part of a web request that you want to check for length.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateSizeConstraintSet.html
   */
  public toCreateSizeConstraintSet() {
    this.to('waf-regional:CreateSizeConstraintSet');
    return this;
  }

  /**
   * Creates a SqlInjectionMatchSet, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web equests.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateSqlInjectionMatchSet.html
   */
  public toCreateSqlInjectionMatchSet() {
    this.to('waf-regional:CreateSqlInjectionMatchSet');
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
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateWebACL.html
   */
  public toCreateWebACL() {
    this.to('waf-regional:CreateWebACL');
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
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateWebACLMigrationStack.html
   */
  public toCreateWebACLMigrationStack() {
    this.to('waf-regional:CreateWebACLMigrationStack');
    return this;
  }

  /**
   * Creates an XssMatchSet, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web equests.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateXssMatchSet.html
   */
  public toCreateXssMatchSet() {
    this.to('waf-regional:CreateXssMatchSet');
    return this;
  }

  /**
   * Permanently deletes a ByteMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteByteMatchSet.html
   */
  public toDeleteByteMatchSet() {
    this.to('waf-regional:DeleteByteMatchSet');
    return this;
  }

  /**
   * Permanently deletes an GeoMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteGeoMatchSet.html
   */
  public toDeleteGeoMatchSet() {
    this.to('waf-regional:DeleteGeoMatchSet');
    return this;
  }

  /**
   * Permanently deletes an IPSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteIPSet.html
   */
  public toDeleteIPSet() {
    this.to('waf-regional:DeleteIPSet');
    return this;
  }

  /**
   * Permanently deletes the LoggingConfiguration from the specified web ACL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteLoggingConfiguration.html
   */
  public toDeleteLoggingConfiguration() {
    this.to('waf-regional:DeleteLoggingConfiguration');
    return this;
  }

  /**
   * Permanently deletes an IAM policy from the specified RuleGroup.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeletePermissionPolicy.html
   */
  public toDeletePermissionPolicy() {
    this.to('waf-regional:DeletePermissionPolicy');
    return this;
  }

  /**
   * Permanently deletes a RateBasedRule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRateBasedRule.html
   */
  public toDeleteRateBasedRule() {
    this.to('waf-regional:DeleteRateBasedRule');
    return this;
  }

  /**
   * Permanently deletes an RegexMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRegexMatchSet.html
   */
  public toDeleteRegexMatchSet() {
    this.to('waf-regional:DeleteRegexMatchSet');
    return this;
  }

  /**
   * Permanently deletes an RegexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRegexPatternSet.html
   */
  public toDeleteRegexPatternSet() {
    this.to('waf-regional:DeleteRegexPatternSet');
    return this;
  }

  /**
   * Permanently deletes a Rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRule.html
   */
  public toDeleteRule() {
    this.to('waf-regional:DeleteRule');
    return this;
  }

  /**
   * Permanently deletes a RuleGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRuleGroup.html
   */
  public toDeleteRuleGroup() {
    this.to('waf-regional:DeleteRuleGroup');
    return this;
  }

  /**
   * Permanently deletes a SizeConstraintSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteSizeConstraintSet.html
   */
  public toDeleteSizeConstraintSet() {
    this.to('waf-regional:DeleteSizeConstraintSet');
    return this;
  }

  /**
   * Permanently deletes a SqlInjectionMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteSqlInjectionMatchSet.html
   */
  public toDeleteSqlInjectionMatchSet() {
    this.to('waf-regional:DeleteSqlInjectionMatchSet');
    return this;
  }

  /**
   * Permanently deletes a WebACL.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteWebACL.html
   */
  public toDeleteWebACL() {
    this.to('waf-regional:DeleteWebACL');
    return this;
  }

  /**
   * Permanently deletes an XssMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteXssMatchSet.html
   */
  public toDeleteXssMatchSet() {
    this.to('waf-regional:DeleteXssMatchSet');
    return this;
  }

  /**
   * Removes a WebACL from the specified resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DisassociateWebACL.html
   */
  public toDisassociateWebACL() {
    this.to('waf-regional:DisassociateWebACL');
    return this;
  }

  /**
   * Returns the ByteMatchSet specified by ByteMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetByteMatchSet.html
   */
  public toGetByteMatchSet() {
    this.to('waf-regional:GetByteMatchSet');
    return this;
  }

  /**
   * When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete equest.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetChangeToken.html
   */
  public toGetChangeToken() {
    this.to('waf-regional:GetChangeToken');
    return this;
  }

  /**
   * Returns the status of a ChangeToken that you got by calling GetChangeToken.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetChangeTokenStatus.html
   */
  public toGetChangeTokenStatus() {
    this.to('waf-regional:GetChangeTokenStatus');
    return this;
  }

  /**
   * Returns the GeoMatchSet specified by GeoMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetGeoMatchSet.html
   */
  public toGetGeoMatchSet() {
    this.to('waf-regional:GetGeoMatchSet');
    return this;
  }

  /**
   * Returns the IPSet that is specified by IPSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetIPSet.html
   */
  public toGetIPSet() {
    this.to('waf-regional:GetIPSet');
    return this;
  }

  /**
   * Returns the LoggingConfiguration for the specified web ACL.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetLoggingConfiguration.html
   */
  public toGetLoggingConfiguration() {
    this.to('waf-regional:GetLoggingConfiguration');
    return this;
  }

  /**
   * Returns the IAM policy attached to the RuleGroup.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetPermissionPolicy.html
   */
  public toGetPermissionPolicy() {
    this.to('waf-regional:GetPermissionPolicy');
    return this;
  }

  /**
   * Returns the RateBasedRule that is specified by the RuleId that you included in the GetRateBasedRule request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRateBasedRule.html
   */
  public toGetRateBasedRule() {
    this.to('waf-regional:GetRateBasedRule');
    return this;
  }

  /**
   * Returns an array of IP addresses currently being blocked by the RateBasedRule that is specified by the RuleId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRateBasedRuleManagedKeys.html
   */
  public toGetRateBasedRuleManagedKeys() {
    this.to('waf-regional:GetRateBasedRuleManagedKeys');
    return this;
  }

  /**
   * Returns the RegexMatchSet specified by RegexMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRegexMatchSet.html
   */
  public toGetRegexMatchSet() {
    this.to('waf-regional:GetRegexMatchSet');
    return this;
  }

  /**
   * Returns the RegexPatternSet specified by RegexPatternSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRegexPatternSet.html
   */
  public toGetRegexPatternSet() {
    this.to('waf-regional:GetRegexPatternSet');
    return this;
  }

  /**
   * Returns the Rule that is specified by the RuleId that you included in the GetRule request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRule.html
   */
  public toGetRule() {
    this.to('waf-regional:GetRule');
    return this;
  }

  /**
   * Returns the RuleGroup that is specified by the RuleGroupId that you included in the GetRuleGroup request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRuleGroup.html
   */
  public toGetRuleGroup() {
    this.to('waf-regional:GetRuleGroup');
    return this;
  }

  /**
   * Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests hat your AWS resource received during a time range that you choose.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSampledRequests.html
   */
  public toGetSampledRequests() {
    this.to('waf-regional:GetSampledRequests');
    return this;
  }

  /**
   * Returns the SizeConstraintSet specified by SizeConstraintSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSizeConstraintSet.html
   */
  public toGetSizeConstraintSet() {
    this.to('waf-regional:GetSizeConstraintSet');
    return this;
  }

  /**
   * Returns the SqlInjectionMatchSet that is specified by SqlInjectionMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSqlInjectionMatchSet.html
   */
  public toGetSqlInjectionMatchSet() {
    this.to('waf-regional:GetSqlInjectionMatchSet');
    return this;
  }

  /**
   * Returns the WebACL that is specified by WebACLId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetWebACL.html
   */
  public toGetWebACL() {
    this.to('waf-regional:GetWebACL');
    return this;
  }

  /**
   * Returns the WebACL for the specified resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetWebACLForResource.html
   */
  public toGetWebACLForResource() {
    this.to('waf-regional:GetWebACLForResource');
    return this;
  }

  /**
   * Returns the XssMatchSet that is specified by XssMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetXssMatchSet.html
   */
  public toGetXssMatchSet() {
    this.to('waf-regional:GetXssMatchSet');
    return this;
  }

  /**
   * Returns an array of ActivatedRule objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListActivatedRulesInRuleGroup.html
   */
  public toListActivatedRulesInRuleGroup() {
    this.to('waf-regional:ListActivatedRulesInRuleGroup');
    return this;
  }

  /**
   * Returns an array of ByteMatchSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListByteMatchSets.html
   */
  public toListByteMatchSets() {
    this.to('waf-regional:ListByteMatchSets');
    return this;
  }

  /**
   * Returns an array of GeoMatchSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListGeoMatchSets.html
   */
  public toListGeoMatchSets() {
    this.to('waf-regional:ListGeoMatchSets');
    return this;
  }

  /**
   * Returns an array of IPSetSummary objects in the response.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListIPSets.html
   */
  public toListIPSets() {
    this.to('waf-regional:ListIPSets');
    return this;
  }

  /**
   * Returns an array of LoggingConfiguration objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListLoggingConfigurations.html
   */
  public toListLoggingConfigurations() {
    this.to('waf-regional:ListLoggingConfigurations');
    return this;
  }

  /**
   * Returns an array of RuleSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRateBasedRules.html
   */
  public toListRateBasedRules() {
    this.to('waf-regional:ListRateBasedRules');
    return this;
  }

  /**
   * Returns an array of RegexMatchSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRegexMatchSets.html
   */
  public toListRegexMatchSets() {
    this.to('waf-regional:ListRegexMatchSets');
    return this;
  }

  /**
   * Returns an array of RegexPatternSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRegexPatternSets.html
   */
  public toListRegexPatternSets() {
    this.to('waf-regional:ListRegexPatternSets');
    return this;
  }

  /**
   * Returns an array of resources associated with the specified WebACL.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListResourcesForWebACL.html
   */
  public toListResourcesForWebACL() {
    this.to('waf-regional:ListResourcesForWebACL');
    return this;
  }

  /**
   * Returns an array of RuleGroup objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRuleGroups.html
   */
  public toListRuleGroups() {
    this.to('waf-regional:ListRuleGroups');
    return this;
  }

  /**
   * Returns an array of RuleSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRules.html
   */
  public toListRules() {
    this.to('waf-regional:ListRules');
    return this;
  }

  /**
   * Returns an array of SizeConstraintSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSizeConstraintSets.html
   */
  public toListSizeConstraintSets() {
    this.to('waf-regional:ListSizeConstraintSets');
    return this;
  }

  /**
   * Returns an array of SqlInjectionMatchSet objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSqlInjectionMatchSets.html
   */
  public toListSqlInjectionMatchSets() {
    this.to('waf-regional:ListSqlInjectionMatchSets');
    return this;
  }

  /**
   * Returns an array of RuleGroup objects that you are subscribed to.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSubscribedRuleGroups.html
   */
  public toListSubscribedRuleGroups() {
    this.to('waf-regional:ListSubscribedRuleGroups');
    return this;
  }

  /**
   * Lists the Tags for a given resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('waf-regional:ListTagsForResource');
    return this;
  }

  /**
   * Returns an array of WebACLSummary objects in the response.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListWebACLs.html
   */
  public toListWebACLs() {
    this.to('waf-regional:ListWebACLs');
    return this;
  }

  /**
   * Returns an array of XssMatchSet objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListXssMatchSets.html
   */
  public toListXssMatchSets() {
    this.to('waf-regional:ListXssMatchSets');
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
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_PutLoggingConfiguration.html
   */
  public toPutLoggingConfiguration() {
    this.to('waf-regional:PutLoggingConfiguration');
    return this;
  }

  /**
   * Attaches a IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_PutPermissionPolicy.html
   */
  public toPutPermissionPolicy() {
    this.to('waf-regional:PutPermissionPolicy');
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
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_TagResource.html
   */
  public toTagResource() {
    this.to('waf-regional:TagResource');
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
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UntagResource.html
   */
  public toUntagResource() {
    this.to('waf-regional:UntagResource');
    return this;
  }

  /**
   * Inserts or deletes ByteMatchTuple objects (filters) in a ByteMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateByteMatchSet.html
   */
  public toUpdateByteMatchSet() {
    this.to('waf-regional:UpdateByteMatchSet');
    return this;
  }

  /**
   * Inserts or deletes GeoMatchConstraint objects in a GeoMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateGeoMatchSet.html
   */
  public toUpdateGeoMatchSet() {
    this.to('waf-regional:UpdateGeoMatchSet');
    return this;
  }

  /**
   * Inserts or deletes IPSetDescriptor objects in an IPSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateIPSet.html
   */
  public toUpdateIPSet() {
    this.to('waf-regional:UpdateIPSet');
    return this;
  }

  /**
   * Inserts or deletes Predicate objects in a rule and updates the RateLimit in the rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRateBasedRule.html
   */
  public toUpdateRateBasedRule() {
    this.to('waf-regional:UpdateRateBasedRule');
    return this;
  }

  /**
   * Inserts or deletes RegexMatchTuple objects (filters) in a RegexMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRegexMatchSet.html
   */
  public toUpdateRegexMatchSet() {
    this.to('waf-regional:UpdateRegexMatchSet');
    return this;
  }

  /**
   * Inserts or deletes RegexPatternStrings in a RegexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRegexPatternSet.html
   */
  public toUpdateRegexPatternSet() {
    this.to('waf-regional:UpdateRegexPatternSet');
    return this;
  }

  /**
   * Inserts or deletes Predicate objects in a Rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRule.html
   */
  public toUpdateRule() {
    this.to('waf-regional:UpdateRule');
    return this;
  }

  /**
   * Inserts or deletes ActivatedRule objects in a RuleGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRuleGroup.html
   */
  public toUpdateRuleGroup() {
    this.to('waf-regional:UpdateRuleGroup');
    return this;
  }

  /**
   * Inserts or deletes SizeConstraint objects (filters) in a SizeConstraintSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateSizeConstraintSet.html
   */
  public toUpdateSizeConstraintSet() {
    this.to('waf-regional:UpdateSizeConstraintSet');
    return this;
  }

  /**
   * Inserts or deletes SqlInjectionMatchTuple objects (filters) in a SqlInjectionMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateSqlInjectionMatchSet.html
   */
  public toUpdateSqlInjectionMatchSet() {
    this.to('waf-regional:UpdateSqlInjectionMatchSet');
    return this;
  }

  /**
   * Inserts or deletes ActivatedRule objects in a WebACL.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateWebACL.html
   */
  public toUpdateWebACL() {
    this.to('waf-regional:UpdateWebACL');
    return this;
  }

  /**
   * Inserts or deletes XssMatchTuple objects (filters) in an XssMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateXssMatchSet.html
   */
  public toUpdateXssMatchSet() {
    this.to('waf-regional:UpdateXssMatchSet');
    return this;
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
