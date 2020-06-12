import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service waf-regional
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswafregional.html
 */
export class WafRegional extends PolicyStatement {
  public servicePrefix = 'waf-regional';
  public actions : Actions = {
    "AssociateWebACL": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_AssociateWebACL.html",
      "description": "Associates a WebACL with a resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer/app/": {
          "required": true
        },
        "webacl": {
          "required": true
        }
      }
    },
    "CreateByteMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateByteMatchSet.html",
      "description": "Creates a ByteMatchSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bytematchset": {
          "required": true
        }
      }
    },
    "CreateGeoMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateGeoMatchSet.html",
      "description": "Creates a GeoMatchSet, which you use to specify which web requests you want to allow or block based on the country that the requests originate rom.",
      "accessLevel": "Write",
      "resourceTypes": {
        "geomatchset": {
          "required": true
        }
      }
    },
    "CreateIPSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateIPSet.html",
      "description": "Creates an IPSet, which you use to specify which web requests you want to allow or block based on the IP addresses that the requests originate rom.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ipset": {
          "required": true
        }
      }
    },
    "CreateRateBasedRule": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRateBasedRule.html",
      "description": "Creates a RateBasedRule, which contains a RateLimit specifying the maximum number of requests that AWS WAF allows from a specified IP address n a five-minute period.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ratebasedrule": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateRegexMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRegexMatchSet.html",
      "description": "Creates a RegexMatchSet, which you use to specify which web requests you want to allow or block based on the regex patterns you specified in a egexPatternSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "regexmatchset": {
          "required": true
        }
      }
    },
    "CreateRegexPatternSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRegexPatternSet.html",
      "description": "Creates a RegexPatternSet, which you use to specify the regular expression (regex) pattern that you want AWS WAF to search for.",
      "accessLevel": "Write",
      "resourceTypes": {
        "regexpatternset": {
          "required": true
        }
      }
    },
    "CreateRule": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRule.html",
      "description": "Creates a Rule, which contains the IPSet objects, ByteMatchSet objects, and other predicates that identify the requests that you want to lock.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateRuleGroup": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRuleGroup.html",
      "description": "Creates a RuleGroup. A rule group is a collection of predefined rules that you add to a WebACL.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rulegroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateSizeConstraintSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateSizeConstraintSet.html",
      "description": "Creates a SizeConstraintSet, which you use to identify the part of a web request that you want to check for length.",
      "accessLevel": "Write",
      "resourceTypes": {
        "sizeconstraintset": {
          "required": true
        }
      }
    },
    "CreateSqlInjectionMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateSqlInjectionMatchSet.html",
      "description": "Creates a SqlInjectionMatchSet, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web equests.",
      "accessLevel": "Write",
      "resourceTypes": {
        "sqlinjectionmatchset": {
          "required": true
        }
      }
    },
    "CreateWebACL": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateWebACL.html",
      "description": "Creates a WebACL, which contains the Rules that identify the CloudFront web requests that you want to allow, block, or count.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateWebACLMigrationStack": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateWebACLMigrationStack.html",
      "description": "Create and store a CloudFormation tempalte that creates an equivalent WAF v2 WebACL from the given WAF Classic WebACL in the given S3 bucket.",
      "accessLevel": "Write",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      }
    },
    "CreateXssMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateXssMatchSet.html",
      "description": "Creates an XssMatchSet, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web equests.",
      "accessLevel": "Write",
      "resourceTypes": {
        "xssmatchset": {
          "required": true
        }
      }
    },
    "DeleteByteMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteByteMatchSet.html",
      "description": "Permanently deletes a ByteMatchSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bytematchset": {
          "required": true
        }
      }
    },
    "DeleteGeoMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteGeoMatchSet.html",
      "description": "Permanently deletes an GeoMatchSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "geomatchset": {
          "required": true
        }
      }
    },
    "DeleteIPSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteIPSet.html",
      "description": "Permanently deletes an IPSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ipset": {
          "required": true
        }
      }
    },
    "DeleteLoggingConfiguration": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteLoggingConfiguration.html",
      "description": "Permanently deletes the LoggingConfiguration from the specified web ACL.",
      "accessLevel": "Write",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      }
    },
    "DeletePermissionPolicy": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeletePermissionPolicy.html",
      "description": "Permanently deletes an IAM policy from the specified RuleGroup.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "rulegroup": {
          "required": true
        }
      }
    },
    "DeleteRateBasedRule": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRateBasedRule.html",
      "description": "Permanently deletes a RateBasedRule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ratebasedrule": {
          "required": true
        }
      }
    },
    "DeleteRegexMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRegexMatchSet.html",
      "description": "Permanently deletes an RegexMatchSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "regexmatchset": {
          "required": true
        }
      }
    },
    "DeleteRegexPatternSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRegexPatternSet.html",
      "description": "Permanently deletes an RegexPatternSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "regexpatternset": {
          "required": true
        }
      }
    },
    "DeleteRule": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRule.html",
      "description": "Permanently deletes a Rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "DeleteRuleGroup": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRuleGroup.html",
      "description": "Permanently deletes a RuleGroup.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rulegroup": {
          "required": true
        }
      }
    },
    "DeleteSizeConstraintSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteSizeConstraintSet.html",
      "description": "Permanently deletes a SizeConstraintSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "sizeconstraintset": {
          "required": true
        }
      }
    },
    "DeleteSqlInjectionMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteSqlInjectionMatchSet.html",
      "description": "Permanently deletes a SqlInjectionMatchSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "sqlinjectionmatchset": {
          "required": true
        }
      }
    },
    "DeleteWebACL": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteWebACL.html",
      "description": "Permanently deletes a WebACL.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      }
    },
    "DeleteXssMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteXssMatchSet.html",
      "description": "Permanently deletes an XssMatchSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "xssmatchset": {
          "required": true
        }
      }
    },
    "DisassociateWebACL": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DisassociateWebACL.html",
      "description": "Removes a WebACL from the specified resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer/app/": {
          "required": true
        }
      }
    },
    "GetByteMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetByteMatchSet.html",
      "description": "Returns the ByteMatchSet specified by ByteMatchSetId.",
      "accessLevel": "Read",
      "resourceTypes": {
        "bytematchset": {
          "required": true
        }
      }
    },
    "GetChangeToken": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetChangeToken.html",
      "description": "When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete equest.",
      "accessLevel": "Read"
    },
    "GetChangeTokenStatus": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetChangeTokenStatus.html",
      "description": "Returns the status of a ChangeToken that you got by calling GetChangeToken.",
      "accessLevel": "Read"
    },
    "GetGeoMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetGeoMatchSet.html",
      "description": "Returns the GeoMatchSet specified by GeoMatchSetId.",
      "accessLevel": "Read",
      "resourceTypes": {
        "geomatchset": {
          "required": true
        }
      }
    },
    "GetIPSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetIPSet.html",
      "description": "Returns the IPSet that is specified by IPSetId.",
      "accessLevel": "Read",
      "resourceTypes": {
        "ipset": {
          "required": true
        }
      }
    },
    "GetLoggingConfiguration": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetLoggingConfiguration.html",
      "description": "Returns the LoggingConfiguration for the specified web ACL.",
      "accessLevel": "Read",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      }
    },
    "GetPermissionPolicy": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetPermissionPolicy.html",
      "description": "Returns the IAM policy attached to the RuleGroup.",
      "accessLevel": "Read",
      "resourceTypes": {
        "rulegroup": {
          "required": true
        }
      }
    },
    "GetRateBasedRule": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRateBasedRule.html",
      "description": "Returns the RateBasedRule that is specified by the RuleId that you included in the GetRateBasedRule request.",
      "accessLevel": "Read",
      "resourceTypes": {
        "ratebasedrule": {
          "required": true
        }
      }
    },
    "GetRateBasedRuleManagedKeys": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRateBasedRuleManagedKeys.html",
      "description": "Returns an array of IP addresses currently being blocked by the RateBasedRule that is specified by the RuleId.",
      "accessLevel": "Read",
      "resourceTypes": {
        "ratebasedrule": {
          "required": true
        }
      }
    },
    "GetRegexMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRegexMatchSet.html",
      "description": "Returns the RegexMatchSet specified by RegexMatchSetId.",
      "accessLevel": "Read",
      "resourceTypes": {
        "regexmatchset": {
          "required": true
        }
      }
    },
    "GetRegexPatternSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRegexPatternSet.html",
      "description": "Returns the RegexPatternSet specified by RegexPatternSetId.",
      "accessLevel": "Read",
      "resourceTypes": {
        "regexpatternset": {
          "required": true
        }
      }
    },
    "GetRule": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRule.html",
      "description": "Returns the Rule that is specified by the RuleId that you included in the GetRule request.",
      "accessLevel": "Read",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "GetRuleGroup": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRuleGroup.html",
      "description": "Returns the RuleGroup that is specified by the RuleGroupId that you included in the GetRuleGroup request.",
      "accessLevel": "Read",
      "resourceTypes": {
        "rulegroup": {
          "required": true
        }
      }
    },
    "GetSampledRequests": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSampledRequests.html",
      "description": "Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests hat your AWS resource received during a time range that you choose.",
      "accessLevel": "Read",
      "resourceTypes": {
        "rule": {
          "required": false
        },
        "webacl": {
          "required": false
        }
      }
    },
    "GetSizeConstraintSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSizeConstraintSet.html",
      "description": "Returns the SizeConstraintSet specified by SizeConstraintSetId.",
      "accessLevel": "Read",
      "resourceTypes": {
        "sizeconstraintset": {
          "required": true
        }
      }
    },
    "GetSqlInjectionMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSqlInjectionMatchSet.html",
      "description": "Returns the SqlInjectionMatchSet that is specified by SqlInjectionMatchSetId.",
      "accessLevel": "Read",
      "resourceTypes": {
        "sqlinjectionmatchset": {
          "required": true
        }
      }
    },
    "GetWebACL": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetWebACL.html",
      "description": "Returns the WebACL that is specified by WebACLId.",
      "accessLevel": "Read",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      }
    },
    "GetWebACLForResource": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetWebACLForResource.html",
      "description": "Returns the WebACL for the specified resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "loadbalancer/app/": {
          "required": true
        }
      }
    },
    "GetXssMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetXssMatchSet.html",
      "description": "Returns the XssMatchSet that is specified by XssMatchSetId.",
      "accessLevel": "Read",
      "resourceTypes": {
        "xssmatchset": {
          "required": true
        }
      }
    },
    "ListActivatedRulesInRuleGroup": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListActivatedRulesInRuleGroup.html",
      "description": "Returns an array of ActivatedRule objects.",
      "accessLevel": "List"
    },
    "ListByteMatchSets": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListByteMatchSets.html",
      "description": "Returns an array of ByteMatchSetSummary objects.",
      "accessLevel": "List"
    },
    "ListGeoMatchSets": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListGeoMatchSets.html",
      "description": "Returns an array of GeoMatchSetSummary objects.",
      "accessLevel": "List"
    },
    "ListIPSets": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListIPSets.html",
      "description": "Returns an array of IPSetSummary objects in the response.",
      "accessLevel": "List"
    },
    "ListLoggingConfigurations": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListLoggingConfigurations.html",
      "description": "Returns an array of LoggingConfiguration objects.",
      "accessLevel": "List"
    },
    "ListRateBasedRules": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRateBasedRules.html",
      "description": "Returns an array of RuleSummary objects.",
      "accessLevel": "List"
    },
    "ListRegexMatchSets": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRegexMatchSets.html",
      "description": "Returns an array of RegexMatchSetSummary objects.",
      "accessLevel": "List"
    },
    "ListRegexPatternSets": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRegexPatternSets.html",
      "description": "Returns an array of RegexPatternSetSummary objects.",
      "accessLevel": "List"
    },
    "ListResourcesForWebACL": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListResourcesForWebACL.html",
      "description": "Returns an array of resources associated with the specified WebACL.",
      "accessLevel": "List",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      }
    },
    "ListRuleGroups": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRuleGroups.html",
      "description": "Returns an array of RuleGroup objects.",
      "accessLevel": "List"
    },
    "ListRules": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRules.html",
      "description": "Returns an array of RuleSummary objects.",
      "accessLevel": "List"
    },
    "ListSizeConstraintSets": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSizeConstraintSets.html",
      "description": "Returns an array of SizeConstraintSetSummary objects.",
      "accessLevel": "List"
    },
    "ListSqlInjectionMatchSets": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSqlInjectionMatchSets.html",
      "description": "Returns an array of SqlInjectionMatchSet objects.",
      "accessLevel": "List"
    },
    "ListSubscribedRuleGroups": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSubscribedRuleGroups.html",
      "description": "Returns an array of RuleGroup objects that you are subscribed to.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListTagsForResource.html",
      "description": "Lists the Tags for a given resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "ratebasedrule": {
          "required": false
        },
        "rule": {
          "required": false
        },
        "rulegroup": {
          "required": false
        },
        "webacl": {
          "required": false
        }
      }
    },
    "ListWebACLs": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListWebACLs.html",
      "description": "Returns an array of WebACLSummary objects in the response.",
      "accessLevel": "List"
    },
    "ListXssMatchSets": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListXssMatchSets.html",
      "description": "Returns an array of XssMatchSet objects.",
      "accessLevel": "List"
    },
    "PutLoggingConfiguration": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_PutLoggingConfiguration.html",
      "description": "Associates a LoggingConfiguration with a specified web ACL.",
      "accessLevel": "Write",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      }
    },
    "PutPermissionPolicy": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_PutPermissionPolicy.html",
      "description": "Attaches a IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "rulegroup": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_TagResource.html",
      "description": "Adds a Tag to a given resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "ratebasedrule": {
          "required": false
        },
        "rule": {
          "required": false
        },
        "rulegroup": {
          "required": false
        },
        "webacl": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UntagResource.html",
      "description": "Removes a Tag from a given resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "ratebasedrule": {
          "required": false
        },
        "rule": {
          "required": false
        },
        "rulegroup": {
          "required": false
        },
        "webacl": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateByteMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateByteMatchSet.html",
      "description": "Inserts or deletes ByteMatchTuple objects (filters) in a ByteMatchSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bytematchset": {
          "required": true
        }
      }
    },
    "UpdateGeoMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateGeoMatchSet.html",
      "description": "Inserts or deletes GeoMatchConstraint objects in a GeoMatchSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "geomatchset": {
          "required": true
        }
      }
    },
    "UpdateIPSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateIPSet.html",
      "description": "Inserts or deletes IPSetDescriptor objects in an IPSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ipset": {
          "required": true
        }
      }
    },
    "UpdateRateBasedRule": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRateBasedRule.html",
      "description": "Inserts or deletes Predicate objects in a rule and updates the RateLimit in the rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ratebasedrule": {
          "required": true
        }
      }
    },
    "UpdateRegexMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRegexMatchSet.html",
      "description": "Inserts or deletes RegexMatchTuple objects (filters) in a RegexMatchSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "regexmatchset": {
          "required": true
        }
      }
    },
    "UpdateRegexPatternSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRegexPatternSet.html",
      "description": "Inserts or deletes RegexPatternStrings in a RegexPatternSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "regexpatternset": {
          "required": true
        }
      }
    },
    "UpdateRule": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRule.html",
      "description": "Inserts or deletes Predicate objects in a Rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "UpdateRuleGroup": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRuleGroup.html",
      "description": "Inserts or deletes ActivatedRule objects in a RuleGroup.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rulegroup": {
          "required": true
        }
      }
    },
    "UpdateSizeConstraintSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateSizeConstraintSet.html",
      "description": "Inserts or deletes SizeConstraint objects (filters) in a SizeConstraintSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "sizeconstraintset": {
          "required": true
        }
      }
    },
    "UpdateSqlInjectionMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateSqlInjectionMatchSet.html",
      "description": "Inserts or deletes SqlInjectionMatchTuple objects (filters) in a SqlInjectionMatchSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "sqlinjectionmatchset": {
          "required": true
        }
      }
    },
    "UpdateWebACL": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateWebACL.html",
      "description": "Inserts or deletes ActivatedRule objects in a WebACL.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      }
    },
    "UpdateXssMatchSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateXssMatchSet.html",
      "description": "Inserts or deletes XssMatchTuple objects (filters) in an XssMatchSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "xssmatchset": {
          "required": true
        }
      }
    }
  };
  public resourceTypes : ResourceTypes = {
    "bytematchset": {
      "name": "bytematchset",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:bytematchset/${Id}",
      "conditionKeys": []
    },
    "ipset": {
      "name": "ipset",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:ipset/${Id}",
      "conditionKeys": []
    },
    "loadbalancer/app/": {
      "name": "loadbalancer/app/",
      "arn": "arn:${Partition}:elasticloadbalancing:${Region}:${Account}:loadbalancer/app/${LoadBalancerName}/${LoadBalancerId}",
      "conditionKeys": []
    },
    "ratebasedrule": {
      "name": "ratebasedrule",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:ratebasedrule/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "rule": {
      "name": "rule",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:rule/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "sizeconstraintset": {
      "name": "sizeconstraintset",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:sizeconstraintset/${Id}",
      "conditionKeys": []
    },
    "sqlinjectionmatchset": {
      "name": "sqlinjectionmatchset",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:sqlinjectionset/${Id}",
      "conditionKeys": []
    },
    "webacl": {
      "name": "webacl",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:webacl/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "xssmatchset": {
      "name": "xssmatchset",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:xssmatchset/${Id}",
      "conditionKeys": []
    },
    "regexmatchset": {
      "name": "regexmatchset",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:regexmatch/${Id}",
      "conditionKeys": []
    },
    "regexpatternset": {
      "name": "regexpatternset",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:regexpatternset/${Id}",
      "conditionKeys": []
    },
    "geomatchset": {
      "name": "geomatchset",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:geomatchset/${Id}",
      "conditionKeys": []
    },
    "rulegroup": {
      "name": "rulegroup",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:rulegroup/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Associates a WebACL with a resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_AssociateWebACL.html
   */
  public associateWebACL () {
    this.add('waf-regional:AssociateWebACL');
    return this;
  }

  /**
   * Creates a ByteMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateByteMatchSet.html
   */
  public createByteMatchSet () {
    this.add('waf-regional:CreateByteMatchSet');
    return this;
  }

  /**
   * Creates a GeoMatchSet, which you use to specify which web requests you want to allow or block based on the country that the requests originate rom.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateGeoMatchSet.html
   */
  public createGeoMatchSet () {
    this.add('waf-regional:CreateGeoMatchSet');
    return this;
  }

  /**
   * Creates an IPSet, which you use to specify which web requests you want to allow or block based on the IP addresses that the requests originate rom.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateIPSet.html
   */
  public createIPSet () {
    this.add('waf-regional:CreateIPSet');
    return this;
  }

  /**
   * Creates a RateBasedRule, which contains a RateLimit specifying the maximum number of requests that AWS WAF allows from a specified IP address n a five-minute period.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRateBasedRule.html
   */
  public createRateBasedRule () {
    this.add('waf-regional:CreateRateBasedRule');
    return this;
  }

  /**
   * Creates a RegexMatchSet, which you use to specify which web requests you want to allow or block based on the regex patterns you specified in a egexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRegexMatchSet.html
   */
  public createRegexMatchSet () {
    this.add('waf-regional:CreateRegexMatchSet');
    return this;
  }

  /**
   * Creates a RegexPatternSet, which you use to specify the regular expression (regex) pattern that you want AWS WAF to search for.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRegexPatternSet.html
   */
  public createRegexPatternSet () {
    this.add('waf-regional:CreateRegexPatternSet');
    return this;
  }

  /**
   * Creates a Rule, which contains the IPSet objects, ByteMatchSet objects, and other predicates that identify the requests that you want to lock.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRule.html
   */
  public createRule () {
    this.add('waf-regional:CreateRule');
    return this;
  }

  /**
   * Creates a RuleGroup. A rule group is a collection of predefined rules that you add to a WebACL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRuleGroup.html
   */
  public createRuleGroup () {
    this.add('waf-regional:CreateRuleGroup');
    return this;
  }

  /**
   * Creates a SizeConstraintSet, which you use to identify the part of a web request that you want to check for length.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateSizeConstraintSet.html
   */
  public createSizeConstraintSet () {
    this.add('waf-regional:CreateSizeConstraintSet');
    return this;
  }

  /**
   * Creates a SqlInjectionMatchSet, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web equests.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateSqlInjectionMatchSet.html
   */
  public createSqlInjectionMatchSet () {
    this.add('waf-regional:CreateSqlInjectionMatchSet');
    return this;
  }

  /**
   * Creates a WebACL, which contains the Rules that identify the CloudFront web requests that you want to allow, block, or count.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateWebACL.html
   */
  public createWebACL () {
    this.add('waf-regional:CreateWebACL');
    return this;
  }

  /**
   * Create and store a CloudFormation tempalte that creates an equivalent WAF v2 WebACL from the given WAF Classic WebACL in the given S3 bucket.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateWebACLMigrationStack.html
   */
  public createWebACLMigrationStack () {
    this.add('waf-regional:CreateWebACLMigrationStack');
    return this;
  }

  /**
   * Creates an XssMatchSet, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web equests.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateXssMatchSet.html
   */
  public createXssMatchSet () {
    this.add('waf-regional:CreateXssMatchSet');
    return this;
  }

  /**
   * Permanently deletes a ByteMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteByteMatchSet.html
   */
  public deleteByteMatchSet () {
    this.add('waf-regional:DeleteByteMatchSet');
    return this;
  }

  /**
   * Permanently deletes an GeoMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteGeoMatchSet.html
   */
  public deleteGeoMatchSet () {
    this.add('waf-regional:DeleteGeoMatchSet');
    return this;
  }

  /**
   * Permanently deletes an IPSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteIPSet.html
   */
  public deleteIPSet () {
    this.add('waf-regional:DeleteIPSet');
    return this;
  }

  /**
   * Permanently deletes the LoggingConfiguration from the specified web ACL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteLoggingConfiguration.html
   */
  public deleteLoggingConfiguration () {
    this.add('waf-regional:DeleteLoggingConfiguration');
    return this;
  }

  /**
   * Permanently deletes an IAM policy from the specified RuleGroup.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeletePermissionPolicy.html
   */
  public deletePermissionPolicy () {
    this.add('waf-regional:DeletePermissionPolicy');
    return this;
  }

  /**
   * Permanently deletes a RateBasedRule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRateBasedRule.html
   */
  public deleteRateBasedRule () {
    this.add('waf-regional:DeleteRateBasedRule');
    return this;
  }

  /**
   * Permanently deletes an RegexMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRegexMatchSet.html
   */
  public deleteRegexMatchSet () {
    this.add('waf-regional:DeleteRegexMatchSet');
    return this;
  }

  /**
   * Permanently deletes an RegexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRegexPatternSet.html
   */
  public deleteRegexPatternSet () {
    this.add('waf-regional:DeleteRegexPatternSet');
    return this;
  }

  /**
   * Permanently deletes a Rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRule.html
   */
  public deleteRule () {
    this.add('waf-regional:DeleteRule');
    return this;
  }

  /**
   * Permanently deletes a RuleGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRuleGroup.html
   */
  public deleteRuleGroup () {
    this.add('waf-regional:DeleteRuleGroup');
    return this;
  }

  /**
   * Permanently deletes a SizeConstraintSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteSizeConstraintSet.html
   */
  public deleteSizeConstraintSet () {
    this.add('waf-regional:DeleteSizeConstraintSet');
    return this;
  }

  /**
   * Permanently deletes a SqlInjectionMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteSqlInjectionMatchSet.html
   */
  public deleteSqlInjectionMatchSet () {
    this.add('waf-regional:DeleteSqlInjectionMatchSet');
    return this;
  }

  /**
   * Permanently deletes a WebACL.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteWebACL.html
   */
  public deleteWebACL () {
    this.add('waf-regional:DeleteWebACL');
    return this;
  }

  /**
   * Permanently deletes an XssMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteXssMatchSet.html
   */
  public deleteXssMatchSet () {
    this.add('waf-regional:DeleteXssMatchSet');
    return this;
  }

  /**
   * Removes a WebACL from the specified resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DisassociateWebACL.html
   */
  public disassociateWebACL () {
    this.add('waf-regional:DisassociateWebACL');
    return this;
  }

  /**
   * Returns the ByteMatchSet specified by ByteMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetByteMatchSet.html
   */
  public getByteMatchSet () {
    this.add('waf-regional:GetByteMatchSet');
    return this;
  }

  /**
   * When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete equest.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetChangeToken.html
   */
  public getChangeToken () {
    this.add('waf-regional:GetChangeToken');
    return this;
  }

  /**
   * Returns the status of a ChangeToken that you got by calling GetChangeToken.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetChangeTokenStatus.html
   */
  public getChangeTokenStatus () {
    this.add('waf-regional:GetChangeTokenStatus');
    return this;
  }

  /**
   * Returns the GeoMatchSet specified by GeoMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetGeoMatchSet.html
   */
  public getGeoMatchSet () {
    this.add('waf-regional:GetGeoMatchSet');
    return this;
  }

  /**
   * Returns the IPSet that is specified by IPSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetIPSet.html
   */
  public getIPSet () {
    this.add('waf-regional:GetIPSet');
    return this;
  }

  /**
   * Returns the LoggingConfiguration for the specified web ACL.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetLoggingConfiguration.html
   */
  public getLoggingConfiguration () {
    this.add('waf-regional:GetLoggingConfiguration');
    return this;
  }

  /**
   * Returns the IAM policy attached to the RuleGroup.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetPermissionPolicy.html
   */
  public getPermissionPolicy () {
    this.add('waf-regional:GetPermissionPolicy');
    return this;
  }

  /**
   * Returns the RateBasedRule that is specified by the RuleId that you included in the GetRateBasedRule request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRateBasedRule.html
   */
  public getRateBasedRule () {
    this.add('waf-regional:GetRateBasedRule');
    return this;
  }

  /**
   * Returns an array of IP addresses currently being blocked by the RateBasedRule that is specified by the RuleId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRateBasedRuleManagedKeys.html
   */
  public getRateBasedRuleManagedKeys () {
    this.add('waf-regional:GetRateBasedRuleManagedKeys');
    return this;
  }

  /**
   * Returns the RegexMatchSet specified by RegexMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRegexMatchSet.html
   */
  public getRegexMatchSet () {
    this.add('waf-regional:GetRegexMatchSet');
    return this;
  }

  /**
   * Returns the RegexPatternSet specified by RegexPatternSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRegexPatternSet.html
   */
  public getRegexPatternSet () {
    this.add('waf-regional:GetRegexPatternSet');
    return this;
  }

  /**
   * Returns the Rule that is specified by the RuleId that you included in the GetRule request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRule.html
   */
  public getRule () {
    this.add('waf-regional:GetRule');
    return this;
  }

  /**
   * Returns the RuleGroup that is specified by the RuleGroupId that you included in the GetRuleGroup request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRuleGroup.html
   */
  public getRuleGroup () {
    this.add('waf-regional:GetRuleGroup');
    return this;
  }

  /**
   * Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests hat your AWS resource received during a time range that you choose.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSampledRequests.html
   */
  public getSampledRequests () {
    this.add('waf-regional:GetSampledRequests');
    return this;
  }

  /**
   * Returns the SizeConstraintSet specified by SizeConstraintSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSizeConstraintSet.html
   */
  public getSizeConstraintSet () {
    this.add('waf-regional:GetSizeConstraintSet');
    return this;
  }

  /**
   * Returns the SqlInjectionMatchSet that is specified by SqlInjectionMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSqlInjectionMatchSet.html
   */
  public getSqlInjectionMatchSet () {
    this.add('waf-regional:GetSqlInjectionMatchSet');
    return this;
  }

  /**
   * Returns the WebACL that is specified by WebACLId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetWebACL.html
   */
  public getWebACL () {
    this.add('waf-regional:GetWebACL');
    return this;
  }

  /**
   * Returns the WebACL for the specified resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetWebACLForResource.html
   */
  public getWebACLForResource () {
    this.add('waf-regional:GetWebACLForResource');
    return this;
  }

  /**
   * Returns the XssMatchSet that is specified by XssMatchSetId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetXssMatchSet.html
   */
  public getXssMatchSet () {
    this.add('waf-regional:GetXssMatchSet');
    return this;
  }

  /**
   * Returns an array of ActivatedRule objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListActivatedRulesInRuleGroup.html
   */
  public listActivatedRulesInRuleGroup () {
    this.add('waf-regional:ListActivatedRulesInRuleGroup');
    return this;
  }

  /**
   * Returns an array of ByteMatchSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListByteMatchSets.html
   */
  public listByteMatchSets () {
    this.add('waf-regional:ListByteMatchSets');
    return this;
  }

  /**
   * Returns an array of GeoMatchSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListGeoMatchSets.html
   */
  public listGeoMatchSets () {
    this.add('waf-regional:ListGeoMatchSets');
    return this;
  }

  /**
   * Returns an array of IPSetSummary objects in the response.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListIPSets.html
   */
  public listIPSets () {
    this.add('waf-regional:ListIPSets');
    return this;
  }

  /**
   * Returns an array of LoggingConfiguration objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListLoggingConfigurations.html
   */
  public listLoggingConfigurations () {
    this.add('waf-regional:ListLoggingConfigurations');
    return this;
  }

  /**
   * Returns an array of RuleSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRateBasedRules.html
   */
  public listRateBasedRules () {
    this.add('waf-regional:ListRateBasedRules');
    return this;
  }

  /**
   * Returns an array of RegexMatchSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRegexMatchSets.html
   */
  public listRegexMatchSets () {
    this.add('waf-regional:ListRegexMatchSets');
    return this;
  }

  /**
   * Returns an array of RegexPatternSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRegexPatternSets.html
   */
  public listRegexPatternSets () {
    this.add('waf-regional:ListRegexPatternSets');
    return this;
  }

  /**
   * Returns an array of resources associated with the specified WebACL.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListResourcesForWebACL.html
   */
  public listResourcesForWebACL () {
    this.add('waf-regional:ListResourcesForWebACL');
    return this;
  }

  /**
   * Returns an array of RuleGroup objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRuleGroups.html
   */
  public listRuleGroups () {
    this.add('waf-regional:ListRuleGroups');
    return this;
  }

  /**
   * Returns an array of RuleSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRules.html
   */
  public listRules () {
    this.add('waf-regional:ListRules');
    return this;
  }

  /**
   * Returns an array of SizeConstraintSetSummary objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSizeConstraintSets.html
   */
  public listSizeConstraintSets () {
    this.add('waf-regional:ListSizeConstraintSets');
    return this;
  }

  /**
   * Returns an array of SqlInjectionMatchSet objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSqlInjectionMatchSets.html
   */
  public listSqlInjectionMatchSets () {
    this.add('waf-regional:ListSqlInjectionMatchSets');
    return this;
  }

  /**
   * Returns an array of RuleGroup objects that you are subscribed to.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSubscribedRuleGroups.html
   */
  public listSubscribedRuleGroups () {
    this.add('waf-regional:ListSubscribedRuleGroups');
    return this;
  }

  /**
   * Lists the Tags for a given resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListTagsForResource.html
   */
  public listTagsForResource () {
    this.add('waf-regional:ListTagsForResource');
    return this;
  }

  /**
   * Returns an array of WebACLSummary objects in the response.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListWebACLs.html
   */
  public listWebACLs () {
    this.add('waf-regional:ListWebACLs');
    return this;
  }

  /**
   * Returns an array of XssMatchSet objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListXssMatchSets.html
   */
  public listXssMatchSets () {
    this.add('waf-regional:ListXssMatchSets');
    return this;
  }

  /**
   * Associates a LoggingConfiguration with a specified web ACL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_PutLoggingConfiguration.html
   */
  public putLoggingConfiguration () {
    this.add('waf-regional:PutLoggingConfiguration');
    return this;
  }

  /**
   * Attaches a IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_PutPermissionPolicy.html
   */
  public putPermissionPolicy () {
    this.add('waf-regional:PutPermissionPolicy');
    return this;
  }

  /**
   * Adds a Tag to a given resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_TagResource.html
   */
  public tagResource () {
    this.add('waf-regional:TagResource');
    return this;
  }

  /**
   * Removes a Tag from a given resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UntagResource.html
   */
  public untagResource () {
    this.add('waf-regional:UntagResource');
    return this;
  }

  /**
   * Inserts or deletes ByteMatchTuple objects (filters) in a ByteMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateByteMatchSet.html
   */
  public updateByteMatchSet () {
    this.add('waf-regional:UpdateByteMatchSet');
    return this;
  }

  /**
   * Inserts or deletes GeoMatchConstraint objects in a GeoMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateGeoMatchSet.html
   */
  public updateGeoMatchSet () {
    this.add('waf-regional:UpdateGeoMatchSet');
    return this;
  }

  /**
   * Inserts or deletes IPSetDescriptor objects in an IPSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateIPSet.html
   */
  public updateIPSet () {
    this.add('waf-regional:UpdateIPSet');
    return this;
  }

  /**
   * Inserts or deletes Predicate objects in a rule and updates the RateLimit in the rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRateBasedRule.html
   */
  public updateRateBasedRule () {
    this.add('waf-regional:UpdateRateBasedRule');
    return this;
  }

  /**
   * Inserts or deletes RegexMatchTuple objects (filters) in a RegexMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRegexMatchSet.html
   */
  public updateRegexMatchSet () {
    this.add('waf-regional:UpdateRegexMatchSet');
    return this;
  }

  /**
   * Inserts or deletes RegexPatternStrings in a RegexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRegexPatternSet.html
   */
  public updateRegexPatternSet () {
    this.add('waf-regional:UpdateRegexPatternSet');
    return this;
  }

  /**
   * Inserts or deletes Predicate objects in a Rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRule.html
   */
  public updateRule () {
    this.add('waf-regional:UpdateRule');
    return this;
  }

  /**
   * Inserts or deletes ActivatedRule objects in a RuleGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRuleGroup.html
   */
  public updateRuleGroup () {
    this.add('waf-regional:UpdateRuleGroup');
    return this;
  }

  /**
   * Inserts or deletes SizeConstraint objects (filters) in a SizeConstraintSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateSizeConstraintSet.html
   */
  public updateSizeConstraintSet () {
    this.add('waf-regional:UpdateSizeConstraintSet');
    return this;
  }

  /**
   * Inserts or deletes SqlInjectionMatchTuple objects (filters) in a SqlInjectionMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateSqlInjectionMatchSet.html
   */
  public updateSqlInjectionMatchSet () {
    this.add('waf-regional:UpdateSqlInjectionMatchSet');
    return this;
  }

  /**
   * Inserts or deletes ActivatedRule objects in a WebACL.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateWebACL.html
   */
  public updateWebACL () {
    this.add('waf-regional:UpdateWebACL');
    return this;
  }

  /**
   * Inserts or deletes XssMatchTuple objects (filters) in an XssMatchSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateXssMatchSet.html
   */
  public updateXssMatchSet () {
    this.add('waf-regional:UpdateXssMatchSet');
    return this;
  }
}
