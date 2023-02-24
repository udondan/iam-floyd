import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [waf](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswaf.html).
 *
 * @param options - Options for the statement
 */
export class Waf extends PolicyStatement {
  public servicePrefix = 'waf';

  /**
   * Statement provider for service [waf](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswaf.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to create a ByteMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateByteMatchSet.html
   */
  public toCreateByteMatchSet() {
    return this.to('CreateByteMatchSet');
  }

  /**
   * Grants permission to create a GeoMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateGeoMatchSet.html
   */
  public toCreateGeoMatchSet() {
    return this.to('CreateGeoMatchSet');
  }

  /**
   * Grants permission to create an IPSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateIPSet.html
   */
  public toCreateIPSet() {
    return this.to('CreateIPSet');
  }

  /**
   * Grants permission to create a RateBasedRule for limiting the volume of requests from a single IP address
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
    return this.to('CreateRateBasedRule');
  }

  /**
   * Grants permission to create a RegexMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRegexMatchSet.html
   */
  public toCreateRegexMatchSet() {
    return this.to('CreateRegexMatchSet');
  }

  /**
   * Grants permission to create a RegexPatternSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRegexPatternSet.html
   */
  public toCreateRegexPatternSet() {
    return this.to('CreateRegexPatternSet');
  }

  /**
   * Grants permission to create a Rule for filtering web requests
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
    return this.to('CreateRule');
  }

  /**
   * Grants permission to create a RuleGroup, which is a collection of predefined rules that you can use in a WebACL
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
    return this.to('CreateRuleGroup');
  }

  /**
   * Grants permission to create a SizeConstraintSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateSizeConstraintSet.html
   */
  public toCreateSizeConstraintSet() {
    return this.to('CreateSizeConstraintSet');
  }

  /**
   * Grants permission to create an SqlInjectionMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateSqlInjectionMatchSet.html
   */
  public toCreateSqlInjectionMatchSet() {
    return this.to('CreateSqlInjectionMatchSet');
  }

  /**
   * Grants permission to create a WebACL, which contains rules for filtering web requests
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
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateWebACLMigrationStack.html
   */
  public toCreateWebACLMigrationStack() {
    return this.to('CreateWebACLMigrationStack');
  }

  /**
   * Grants permission to create an XssMatchSet, which you use to detect requests that contain cross-site scripting attacks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateXssMatchSet.html
   */
  public toCreateXssMatchSet() {
    return this.to('CreateXssMatchSet');
  }

  /**
   * Grants permission to delete a ByteMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteByteMatchSet.html
   */
  public toDeleteByteMatchSet() {
    return this.to('DeleteByteMatchSet');
  }

  /**
   * Grants permission to delete a GeoMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteGeoMatchSet.html
   */
  public toDeleteGeoMatchSet() {
    return this.to('DeleteGeoMatchSet');
  }

  /**
   * Grants permission to delete an IPSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteIPSet.html
   */
  public toDeleteIPSet() {
    return this.to('DeleteIPSet');
  }

  /**
   * Grants permission to delete the LoggingConfiguration from a web ACL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteLoggingConfiguration.html
   */
  public toDeleteLoggingConfiguration() {
    return this.to('DeleteLoggingConfiguration');
  }

  /**
   * Grants permission to delete an IAM policy from a rule group
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeletePermissionPolicy.html
   */
  public toDeletePermissionPolicy() {
    return this.to('DeletePermissionPolicy');
  }

  /**
   * Grants permission to delete a RateBasedRule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRateBasedRule.html
   */
  public toDeleteRateBasedRule() {
    return this.to('DeleteRateBasedRule');
  }

  /**
   * Grants permission to delete a RegexMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRegexMatchSet.html
   */
  public toDeleteRegexMatchSet() {
    return this.to('DeleteRegexMatchSet');
  }

  /**
   * Grants permission to delete a RegexPatternSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRegexPatternSet.html
   */
  public toDeleteRegexPatternSet() {
    return this.to('DeleteRegexPatternSet');
  }

  /**
   * Grants permission to delete a Rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRule.html
   */
  public toDeleteRule() {
    return this.to('DeleteRule');
  }

  /**
   * Grants permission to delete a RuleGroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRuleGroup.html
   */
  public toDeleteRuleGroup() {
    return this.to('DeleteRuleGroup');
  }

  /**
   * Grants permission to delete a SizeConstraintSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteSizeConstraintSet.html
   */
  public toDeleteSizeConstraintSet() {
    return this.to('DeleteSizeConstraintSet');
  }

  /**
   * Grants permission to delete an SqlInjectionMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteSqlInjectionMatchSet.html
   */
  public toDeleteSqlInjectionMatchSet() {
    return this.to('DeleteSqlInjectionMatchSet');
  }

  /**
   * Grants permission to delete a WebACL
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteWebACL.html
   */
  public toDeleteWebACL() {
    return this.to('DeleteWebACL');
  }

  /**
   * Grants permission to delete an XssMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteXssMatchSet.html
   */
  public toDeleteXssMatchSet() {
    return this.to('DeleteXssMatchSet');
  }

  /**
   * Grants permission to retrieve a ByteMatchSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetByteMatchSet.html
   */
  public toGetByteMatchSet() {
    return this.to('GetByteMatchSet');
  }

  /**
   * Grants permission to retrieve a change token to use in create, update, and delete requests
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetChangeToken.html
   */
  public toGetChangeToken() {
    return this.to('GetChangeToken');
  }

  /**
   * Grants permission to retrieve the status of a change token
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetChangeTokenStatus.html
   */
  public toGetChangeTokenStatus() {
    return this.to('GetChangeTokenStatus');
  }

  /**
   * Grants permission to retrieve a GeoMatchSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetGeoMatchSet.html
   */
  public toGetGeoMatchSet() {
    return this.to('GetGeoMatchSet');
  }

  /**
   * Grants permission to retrieve an IPSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetIPSet.html
   */
  public toGetIPSet() {
    return this.to('GetIPSet');
  }

  /**
   * Grants permission to retrieve a LoggingConfiguration for a web ACL
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetLoggingConfiguration.html
   */
  public toGetLoggingConfiguration() {
    return this.to('GetLoggingConfiguration');
  }

  /**
   * Grants permission to retrieve an IAM policy for a rule group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetPermissionPolicy.html
   */
  public toGetPermissionPolicy() {
    return this.to('GetPermissionPolicy');
  }

  /**
   * Grants permission to retrieve a RateBasedRule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRateBasedRule.html
   */
  public toGetRateBasedRule() {
    return this.to('GetRateBasedRule');
  }

  /**
   * Grants permission to retrieve the array of IP addresses that are currently being blocked by a RateBasedRule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRateBasedRuleManagedKeys.html
   */
  public toGetRateBasedRuleManagedKeys() {
    return this.to('GetRateBasedRuleManagedKeys');
  }

  /**
   * Grants permission to retrieve a RegexMatchSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRegexMatchSet.html
   */
  public toGetRegexMatchSet() {
    return this.to('GetRegexMatchSet');
  }

  /**
   * Grants permission to retrieve a RegexPatternSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRegexPatternSet.html
   */
  public toGetRegexPatternSet() {
    return this.to('GetRegexPatternSet');
  }

  /**
   * Grants permission to retrieve a Rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRule.html
   */
  public toGetRule() {
    return this.to('GetRule');
  }

  /**
   * Grants permission to retrieve a RuleGroup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRuleGroup.html
   */
  public toGetRuleGroup() {
    return this.to('GetRuleGroup');
  }

  /**
   * Grants permission to retrieve detailed information about a sample set of web requests
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSampledRequests.html
   */
  public toGetSampledRequests() {
    return this.to('GetSampledRequests');
  }

  /**
   * Grants permission to retrieve a SizeConstraintSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSizeConstraintSet.html
   */
  public toGetSizeConstraintSet() {
    return this.to('GetSizeConstraintSet');
  }

  /**
   * Grants permission to retrieve an SqlInjectionMatchSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSqlInjectionMatchSet.html
   */
  public toGetSqlInjectionMatchSet() {
    return this.to('GetSqlInjectionMatchSet');
  }

  /**
   * Grants permission to retrieve a WebACL
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetWebACL.html
   */
  public toGetWebACL() {
    return this.to('GetWebACL');
  }

  /**
   * Grants permission to retrieve an XssMatchSet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetXssMatchSet.html
   */
  public toGetXssMatchSet() {
    return this.to('GetXssMatchSet');
  }

  /**
   * Grants permission to retrieve an array of ActivatedRule objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListActivatedRulesInRuleGroup.html
   */
  public toListActivatedRulesInRuleGroup() {
    return this.to('ListActivatedRulesInRuleGroup');
  }

  /**
   * Grants permission to retrieve an array of ByteMatchSetSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListByteMatchSets.html
   */
  public toListByteMatchSets() {
    return this.to('ListByteMatchSets');
  }

  /**
   * Grants permission to retrieve an array of GeoMatchSetSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListGeoMatchSets.html
   */
  public toListGeoMatchSets() {
    return this.to('ListGeoMatchSets');
  }

  /**
   * Grants permission to retrieve an array of IPSetSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListIPSets.html
   */
  public toListIPSets() {
    return this.to('ListIPSets');
  }

  /**
   * Grants permission to retrieve an array of LoggingConfiguration objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListLoggingConfigurations.html
   */
  public toListLoggingConfigurations() {
    return this.to('ListLoggingConfigurations');
  }

  /**
   * Grants permission to retrieve an array of RuleSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRateBasedRules.html
   */
  public toListRateBasedRules() {
    return this.to('ListRateBasedRules');
  }

  /**
   * Grants permission to retrieve an array of RegexMatchSetSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRegexMatchSets.html
   */
  public toListRegexMatchSets() {
    return this.to('ListRegexMatchSets');
  }

  /**
   * Grants permission to retrieve an array of RegexPatternSetSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRegexPatternSets.html
   */
  public toListRegexPatternSets() {
    return this.to('ListRegexPatternSets');
  }

  /**
   * Grants permission to retrieve an array of RuleGroup objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRuleGroups.html
   */
  public toListRuleGroups() {
    return this.to('ListRuleGroups');
  }

  /**
   * Grants permission to retrieve an array of RuleSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRules.html
   */
  public toListRules() {
    return this.to('ListRules');
  }

  /**
   * Grants permission to retrieve an array of SizeConstraintSetSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSizeConstraintSets.html
   */
  public toListSizeConstraintSets() {
    return this.to('ListSizeConstraintSets');
  }

  /**
   * Grants permission to retrieve an array of SqlInjectionMatchSet objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSqlInjectionMatchSets.html
   */
  public toListSqlInjectionMatchSets() {
    return this.to('ListSqlInjectionMatchSets');
  }

  /**
   * Grants permission to retrieve an array of RuleGroup objects that you are subscribed to
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSubscribedRuleGroups.html
   */
  public toListSubscribedRuleGroups() {
    return this.to('ListSubscribedRuleGroups');
  }

  /**
   * Grants permission to retrieve the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve an array of WebACLSummary objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListWebACLs.html
   */
  public toListWebACLs() {
    return this.to('ListWebACLs');
  }

  /**
   * Grants permission to retrieve an array of XssMatchSet objects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListXssMatchSets.html
   */
  public toListXssMatchSets() {
    return this.to('ListXssMatchSets');
  }

  /**
   * Grants permission to associate a LoggingConfiguration with a specified web ACL
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_PutLoggingConfiguration.html
   */
  public toPutLoggingConfiguration() {
    return this.to('PutLoggingConfiguration');
  }

  /**
   * Grants permission to attach an IAM policy to a rule group, to share the rule group between accounts
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_PutPermissionPolicy.html
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
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_TagResource.html
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
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to insert or delete ByteMatchTuple objects in a ByteMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateByteMatchSet.html
   */
  public toUpdateByteMatchSet() {
    return this.to('UpdateByteMatchSet');
  }

  /**
   * Grants permission to insert or delete GeoMatchConstraint objects in a GeoMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateGeoMatchSet.html
   */
  public toUpdateGeoMatchSet() {
    return this.to('UpdateGeoMatchSet');
  }

  /**
   * Grants permission to insert or delete IPSetDescriptor objects in an IPSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateIPSet.html
   */
  public toUpdateIPSet() {
    return this.to('UpdateIPSet');
  }

  /**
   * Grants permission to modify a rate based rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRateBasedRule.html
   */
  public toUpdateRateBasedRule() {
    return this.to('UpdateRateBasedRule');
  }

  /**
   * Grants permission to insert or delete RegexMatchTuple objects in a RegexMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRegexMatchSet.html
   */
  public toUpdateRegexMatchSet() {
    return this.to('UpdateRegexMatchSet');
  }

  /**
   * Grants permission to insert or delete RegexPatternStrings in a RegexPatternSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRegexPatternSet.html
   */
  public toUpdateRegexPatternSet() {
    return this.to('UpdateRegexPatternSet');
  }

  /**
   * Grants permission to modify a Rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRule.html
   */
  public toUpdateRule() {
    return this.to('UpdateRule');
  }

  /**
   * Grants permission to insert or delete ActivatedRule objects in a RuleGroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRuleGroup.html
   */
  public toUpdateRuleGroup() {
    return this.to('UpdateRuleGroup');
  }

  /**
   * Grants permission to insert or delete SizeConstraint objects in a SizeConstraintSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateSizeConstraintSet.html
   */
  public toUpdateSizeConstraintSet() {
    return this.to('UpdateSizeConstraintSet');
  }

  /**
   * Grants permission to insert or delete SqlInjectionMatchTuple objects in an SqlInjectionMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateSqlInjectionMatchSet.html
   */
  public toUpdateSqlInjectionMatchSet() {
    return this.to('UpdateSqlInjectionMatchSet');
  }

  /**
   * Grants permission to insert or delete ActivatedRule objects in a WebACL
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateWebACL.html
   */
  public toUpdateWebACL() {
    return this.to('UpdateWebACL');
  }

  /**
   * Grants permission to insert or delete XssMatchTuple objects in an XssMatchSet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateXssMatchSet.html
   */
  public toUpdateXssMatchSet() {
    return this.to('UpdateXssMatchSet');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateByteMatchSet',
      'CreateGeoMatchSet',
      'CreateIPSet',
      'CreateRateBasedRule',
      'CreateRegexMatchSet',
      'CreateRegexPatternSet',
      'CreateRule',
      'CreateRuleGroup',
      'CreateSizeConstraintSet',
      'CreateSqlInjectionMatchSet',
      'CreateWebACLMigrationStack',
      'CreateXssMatchSet',
      'DeleteByteMatchSet',
      'DeleteGeoMatchSet',
      'DeleteIPSet',
      'DeleteLoggingConfiguration',
      'DeleteRateBasedRule',
      'DeleteRegexMatchSet',
      'DeleteRegexPatternSet',
      'DeleteRule',
      'DeleteRuleGroup',
      'DeleteSizeConstraintSet',
      'DeleteSqlInjectionMatchSet',
      'DeleteXssMatchSet',
      'PutLoggingConfiguration',
      'UpdateByteMatchSet',
      'UpdateGeoMatchSet',
      'UpdateIPSet',
      'UpdateRateBasedRule',
      'UpdateRegexMatchSet',
      'UpdateRegexPatternSet',
      'UpdateRule',
      'UpdateRuleGroup',
      'UpdateSizeConstraintSet',
      'UpdateSqlInjectionMatchSet',
      'UpdateXssMatchSet'
    ],
    'Permissions management': [
      'CreateWebACL',
      'DeletePermissionPolicy',
      'DeleteWebACL',
      'PutPermissionPolicy',
      'UpdateWebACL'
    ],
    Read: [
      'GetByteMatchSet',
      'GetChangeToken',
      'GetChangeTokenStatus',
      'GetGeoMatchSet',
      'GetIPSet',
      'GetLoggingConfiguration',
      'GetPermissionPolicy',
      'GetRateBasedRule',
      'GetRateBasedRuleManagedKeys',
      'GetRegexMatchSet',
      'GetRegexPatternSet',
      'GetRule',
      'GetRuleGroup',
      'GetSampledRequests',
      'GetSizeConstraintSet',
      'GetSqlInjectionMatchSet',
      'GetWebACL',
      'GetXssMatchSet',
      'ListTagsForResource'
    ],
    List: [
      'ListActivatedRulesInRuleGroup',
      'ListByteMatchSets',
      'ListGeoMatchSets',
      'ListIPSets',
      'ListLoggingConfigurations',
      'ListRateBasedRules',
      'ListRegexMatchSets',
      'ListRegexPatternSets',
      'ListRuleGroups',
      'ListRules',
      'ListSizeConstraintSets',
      'ListSqlInjectionMatchSets',
      'ListSubscribedRuleGroups',
      'ListWebACLs',
      'ListXssMatchSets'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type bytematchset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ByteMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBytematchset(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:waf::${ account || '*' }:bytematchset/${ id }`);
  }

  /**
   * Adds a resource of type ipset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_IPSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onIpset(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:waf::${ account || '*' }:ipset/${ id }`);
  }

  /**
   * Adds a resource of type ratebasedrule to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_RateBasedRule.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRatebasedrule(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:waf::${ account || '*' }:ratebasedrule/${ id }`);
  }

  /**
   * Adds a resource of type rule to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_Rule.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRule(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:waf::${ account || '*' }:rule/${ id }`);
  }

  /**
   * Adds a resource of type sizeconstraintset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_SizeConstraintSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSizeconstraintset(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:waf::${ account || '*' }:sizeconstraintset/${ id }`);
  }

  /**
   * Adds a resource of type sqlinjectionmatchset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_SqlInjectionMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSqlinjectionmatchset(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:waf::${ account || '*' }:sqlinjectionset/${ id }`);
  }

  /**
   * Adds a resource of type webacl to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_WebACL.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWebacl(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:waf::${ account || '*' }:webacl/${ id }`);
  }

  /**
   * Adds a resource of type xssmatchset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_XssMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onXssmatchset(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:waf::${ account || '*' }:xssmatchset/${ id }`);
  }

  /**
   * Adds a resource of type regexmatchset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_RegexMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onRegexmatchset(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:waf::${ account || '*' }:regexmatch/${ id }`);
  }

  /**
   * Adds a resource of type regexpatternset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_RegexPatternSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onRegexpatternset(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:waf::${ account || '*' }:regexpatternset/${ id }`);
  }

  /**
   * Adds a resource of type geomatchset to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GeoMatchSet.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onGeomatchset(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:waf::${ account || '*' }:geomatchset/${ id }`);
  }

  /**
   * Adds a resource of type rulegroup to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_RuleGroup.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRulegroup(id: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:waf::${ account || '*' }:rulegroup/${ id }`);
  }
}
