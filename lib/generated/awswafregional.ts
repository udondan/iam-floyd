import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [waf-regional](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswafregional.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class WafRegional extends PolicyStatement {
  public servicePrefix = 'waf-regional';
  protected actionList: Actions = {
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
      "dependentActions": [
        "s3:PutObject"
      ],
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
      "dependentActions": [
        "iam:CreateServiceLinkedRole"
      ],
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
  protected resourceTypes: ResourceTypes = {
    "bytematchset": {
      "name": "bytematchset",
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ByteMatchSet.html",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:bytematchset/${Id}",
      "conditionKeys": []
    },
    "ipset": {
      "name": "ipset",
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_IPSet.html",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:ipset/${Id}",
      "conditionKeys": []
    },
    "loadbalancer/app/": {
      "name": "loadbalancer/app/",
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_WebACL.html",
      "arn": "arn:${Partition}:elasticloadbalancing:${Region}:${Account}:loadbalancer/app/${LoadBalancerName}/${LoadBalancerId}",
      "conditionKeys": []
    },
    "ratebasedrule": {
      "name": "ratebasedrule",
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_RateBasedRule.html",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:ratebasedrule/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "rule": {
      "name": "rule",
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_Rule.html",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:rule/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "sizeconstraintset": {
      "name": "sizeconstraintset",
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_SizeConstraintSet.html",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:sizeconstraintset/${Id}",
      "conditionKeys": []
    },
    "sqlinjectionmatchset": {
      "name": "sqlinjectionmatchset",
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_SqlInjectionMatchSet.html",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:sqlinjectionset/${Id}",
      "conditionKeys": []
    },
    "webacl": {
      "name": "webacl",
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_WebACL.html",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:webacl/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "xssmatchset": {
      "name": "xssmatchset",
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_XssMatchSet.html",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:xssmatchset/${Id}",
      "conditionKeys": []
    },
    "regexmatchset": {
      "name": "regexmatchset",
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_RegexMatchSet.html",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:regexmatch/${Id}",
      "conditionKeys": []
    },
    "regexpatternset": {
      "name": "regexpatternset",
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_RegexPatternSet.html",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:regexpatternset/${Id}",
      "conditionKeys": []
    },
    "geomatchset": {
      "name": "geomatchset",
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GeoMatchSet.html",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:geomatchset/${Id}",
      "conditionKeys": []
    },
    "rulegroup": {
      "name": "rulegroup",
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_RuleGroup.html",
      "arn": "arn:${Partition}:waf-regional:${Region}:${Account}:rulegroup/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

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
  public toCreateByteMatchSet() {
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
  public toCreateGeoMatchSet() {
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
  public toCreateIPSet() {
    this.add('waf-regional:CreateIPSet');
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
  public toCreateRegexMatchSet() {
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
  public toCreateRegexPatternSet() {
    this.add('waf-regional:CreateRegexPatternSet');
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
    this.add('waf-regional:CreateRule');
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
  public toCreateSizeConstraintSet() {
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
  public toCreateSqlInjectionMatchSet() {
    this.add('waf-regional:CreateSqlInjectionMatchSet');
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
    this.add('waf-regional:CreateWebACL');
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
  public toCreateXssMatchSet() {
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
  public toDeleteByteMatchSet() {
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
  public toDeleteGeoMatchSet() {
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
  public toDeleteIPSet() {
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
  public toDeleteLoggingConfiguration() {
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
  public toDeletePermissionPolicy() {
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
  public toDeleteRateBasedRule() {
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
  public toDeleteRegexMatchSet() {
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
  public toDeleteRegexPatternSet() {
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
  public toDeleteRule() {
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
  public toDeleteRuleGroup() {
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
  public toDeleteSizeConstraintSet() {
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
  public toDeleteSqlInjectionMatchSet() {
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
  public toDeleteWebACL() {
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
  public toDeleteXssMatchSet() {
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
  public toDisassociateWebACL() {
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
  public toGetByteMatchSet() {
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
  public toGetChangeToken() {
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
  public toGetChangeTokenStatus() {
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
  public toGetGeoMatchSet() {
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
  public toGetIPSet() {
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
  public toGetLoggingConfiguration() {
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
  public toGetPermissionPolicy() {
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
  public toGetRateBasedRule() {
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
  public toGetRateBasedRuleManagedKeys() {
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
  public toGetRegexMatchSet() {
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
  public toGetRegexPatternSet() {
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
  public toGetRule() {
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
  public toGetRuleGroup() {
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
  public toGetSampledRequests() {
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
  public toGetSizeConstraintSet() {
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
  public toGetSqlInjectionMatchSet() {
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
  public toGetWebACL() {
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
  public toGetWebACLForResource() {
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
  public toGetXssMatchSet() {
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
  public toListActivatedRulesInRuleGroup() {
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
  public toListByteMatchSets() {
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
  public toListGeoMatchSets() {
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
  public toListIPSets() {
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
  public toListLoggingConfigurations() {
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
  public toListRateBasedRules() {
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
  public toListRegexMatchSets() {
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
  public toListRegexPatternSets() {
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
  public toListResourcesForWebACL() {
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
  public toListRuleGroups() {
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
  public toListRules() {
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
  public toListSizeConstraintSets() {
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
  public toListSqlInjectionMatchSets() {
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
  public toListSubscribedRuleGroups() {
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
  public toListTagsForResource() {
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
  public toListWebACLs() {
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
  public toListXssMatchSets() {
    this.add('waf-regional:ListXssMatchSets');
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
  public toPutPermissionPolicy() {
    this.add('waf-regional:PutPermissionPolicy');
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
    this.add('waf-regional:TagResource');
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
  public toUpdateByteMatchSet() {
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
  public toUpdateGeoMatchSet() {
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
  public toUpdateIPSet() {
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
  public toUpdateRateBasedRule() {
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
  public toUpdateRegexMatchSet() {
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
  public toUpdateRegexPatternSet() {
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
  public toUpdateRule() {
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
  public toUpdateRuleGroup() {
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
  public toUpdateSizeConstraintSet() {
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
  public toUpdateSqlInjectionMatchSet() {
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
  public toUpdateWebACL() {
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
  public toUpdateXssMatchSet() {
    this.add('waf-regional:UpdateXssMatchSet');
    return this;
  }

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

  /**
   * Filters actions based on the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateRateBasedRule()
   * - .toCreateRule()
   * - .toCreateRuleGroup()
   * - .toCreateWebACL()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag-value assoicated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - ratebasedrule
   * - rule
   * - webacl
   * - rulegroup
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateRateBasedRule()
   * - .toCreateRule()
   * - .toCreateRuleGroup()
   * - .toCreateWebACL()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
