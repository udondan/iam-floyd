import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [route53resolver](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53resolver.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Route53resolver extends PolicyStatement {
  public servicePrefix = 'route53resolver';
  protected actionList: Actions = {
    "AssociateResolverEndpointIpAddress": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html",
      "description": "Grants permission to associate a specified IP address with a resolver endpoint. This is an IP address that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound).",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "AssociateResolverRule": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html",
      "description": "Grants permission to associate a specified resolver rule with a specified VPC.",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "CreateResolverEndpoint": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html",
      "description": "Grants permission to create a resolver endpoint. There are two types of resolver endpoints, inbound and outbound.",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "CreateResolverRule": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html",
      "description": "For DNS queries that originate in your VPC, grants permission to define how to route the queries out of the VPC.",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "DeleteResolverEndpoint": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html",
      "description": "Grants permission to delete a resolver endpoint. The effect of deleting a resolver endpoint depends on whether it's an inbound or an outbound resolver endpoint.",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "DeleteResolverRule": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html",
      "description": "Grants permission to delete a resolver rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "DisassociateResolverEndpointIpAddress": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html",
      "description": "Grants permission to remove a specified IP address from a resolver endpoint. This is an IP address that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound).",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "DisassociateResolverRule": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html",
      "description": "Grants permission to remove the association between a specified resolver rule and a specified VPC.",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "GetResolverEndpoint": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html",
      "description": "Grants permission to get information about a specified resolver endpoint, such as whether it's an inbound or an outbound resolver endpoint, and the IP addresses in your VPC that DNS queries are forwarded to on the way into or out of your VPC.",
      "accessLevel": "Read",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "GetResolverRule": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html",
      "description": "Grants permission to get information about a specified resolver rule, such as the domain name that the rule forwards DNS queries for and the IP address that queries are forwarded to.",
      "accessLevel": "Read",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "GetResolverRuleAssociation": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html",
      "description": "Grants permission to get information about an association between a specified resolver rule and a VPC.",
      "accessLevel": "Read",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "GetResolverRulePolicy": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRulePolicy.html",
      "description": "Grants permission to get information about a resolver rule policy.",
      "accessLevel": "Read",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "ListResolverEndpointIpAddresses": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpointIpAddresses.html",
      "description": "For a specified resolver endpoint, grants permission to list the IP addresses that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound).",
      "accessLevel": "List",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "ListResolverEndpoints": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html",
      "description": "Grants permission to list all the resolver endpoints that were created using the current AWS account.",
      "accessLevel": "List",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "ListResolverRuleAssociations": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html",
      "description": "Grants permission to list the associations that were created between resolver rules and VPCs using the current AWS account.",
      "accessLevel": "List",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "ListResolverRules": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html",
      "description": "Grants permission to list the resolver rules that were created using the current AWS account.",
      "accessLevel": "List",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListTagsForResource.html",
      "description": "Grants permission to list the tags that you associated with the specified resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": false
        },
        "resolver-rule": {
          "required": false
        }
      }
    },
    "PutResolverRulePolicy": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverRulePolicy.html",
      "description": "Grants permission to specify the Resolver operations and resources that you want to allow another AWS account to use.",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_TagResource.html",
      "description": "Grants permission to add one or more tags to a specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": false
        },
        "resolver-rule": {
          "required": false
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UntagResource.html",
      "description": "Grants permission to remove one or more tags from a specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": false
        },
        "resolver-rule": {
          "required": false
        }
      }
    },
    "UpdateResolverEndpoint": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html",
      "description": "Grants permission to update selected settings for an inbound or an outbound resolver endpoint.",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "UpdateResolverRule": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html",
      "description": "Grants permission to update settings for a specified resolver rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "resolver-rule": {
      "name": "resolver-rule",
      "url": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources",
      "arn": "arn:${Partition}:route53resolver:${Region}:${Account}:resolver-rule/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "resolver-endpoint": {
      "name": "resolver-endpoint",
      "url": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources",
      "arn": "arn:${Partition}:route53resolver:${Region}:${Account}:resolver-endpoint/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [route53resolver](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53resolver.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a specified IP address with a resolver endpoint. This is an IP address that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html
   */
  public associateResolverEndpointIpAddress() {
    this.add('route53resolver:AssociateResolverEndpointIpAddress');
    return this;
  }

  /**
   * Grants permission to associate a specified resolver rule with a specified VPC.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html
   */
  public associateResolverRule() {
    this.add('route53resolver:AssociateResolverRule');
    return this;
  }

  /**
   * Grants permission to create a resolver endpoint. There are two types of resolver endpoints, inbound and outbound.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html
   */
  public createResolverEndpoint() {
    this.add('route53resolver:CreateResolverEndpoint');
    return this;
  }

  /**
   * For DNS queries that originate in your VPC, grants permission to define how to route the queries out of the VPC.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html
   */
  public createResolverRule() {
    this.add('route53resolver:CreateResolverRule');
    return this;
  }

  /**
   * Grants permission to delete a resolver endpoint. The effect of deleting a resolver endpoint depends on whether it's an inbound or an outbound resolver endpoint.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html
   */
  public deleteResolverEndpoint() {
    this.add('route53resolver:DeleteResolverEndpoint');
    return this;
  }

  /**
   * Grants permission to delete a resolver rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html
   */
  public deleteResolverRule() {
    this.add('route53resolver:DeleteResolverRule');
    return this;
  }

  /**
   * Grants permission to remove a specified IP address from a resolver endpoint. This is an IP address that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html
   */
  public disassociateResolverEndpointIpAddress() {
    this.add('route53resolver:DisassociateResolverEndpointIpAddress');
    return this;
  }

  /**
   * Grants permission to remove the association between a specified resolver rule and a specified VPC.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html
   */
  public disassociateResolverRule() {
    this.add('route53resolver:DisassociateResolverRule');
    return this;
  }

  /**
   * Grants permission to get information about a specified resolver endpoint, such as whether it's an inbound or an outbound resolver endpoint, and the IP addresses in your VPC that DNS queries are forwarded to on the way into or out of your VPC.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html
   */
  public getResolverEndpoint() {
    this.add('route53resolver:GetResolverEndpoint');
    return this;
  }

  /**
   * Grants permission to get information about a specified resolver rule, such as the domain name that the rule forwards DNS queries for and the IP address that queries are forwarded to.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html
   */
  public getResolverRule() {
    this.add('route53resolver:GetResolverRule');
    return this;
  }

  /**
   * Grants permission to get information about an association between a specified resolver rule and a VPC.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html
   */
  public getResolverRuleAssociation() {
    this.add('route53resolver:GetResolverRuleAssociation');
    return this;
  }

  /**
   * Grants permission to get information about a resolver rule policy.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRulePolicy.html
   */
  public getResolverRulePolicy() {
    this.add('route53resolver:GetResolverRulePolicy');
    return this;
  }

  /**
   * For a specified resolver endpoint, grants permission to list the IP addresses that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpointIpAddresses.html
   */
  public listResolverEndpointIpAddresses() {
    this.add('route53resolver:ListResolverEndpointIpAddresses');
    return this;
  }

  /**
   * Grants permission to list all the resolver endpoints that were created using the current AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html
   */
  public listResolverEndpoints() {
    this.add('route53resolver:ListResolverEndpoints');
    return this;
  }

  /**
   * Grants permission to list the associations that were created between resolver rules and VPCs using the current AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html
   */
  public listResolverRuleAssociations() {
    this.add('route53resolver:ListResolverRuleAssociations');
    return this;
  }

  /**
   * Grants permission to list the resolver rules that were created using the current AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html
   */
  public listResolverRules() {
    this.add('route53resolver:ListResolverRules');
    return this;
  }

  /**
   * Grants permission to list the tags that you associated with the specified resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('route53resolver:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to specify the Resolver operations and resources that you want to allow another AWS account to use.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverRulePolicy.html
   */
  public putResolverRulePolicy() {
    this.add('route53resolver:PutResolverRulePolicy');
    return this;
  }

  /**
   * Grants permission to add one or more tags to a specified resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_TagResource.html
   */
  public tagResource() {
    this.add('route53resolver:TagResource');
    return this;
  }

  /**
   * Grants permission to remove one or more tags from a specified resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UntagResource.html
   */
  public untagResource() {
    this.add('route53resolver:UntagResource');
    return this;
  }

  /**
   * Grants permission to update selected settings for an inbound or an outbound resolver endpoint.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html
   */
  public updateResolverEndpoint() {
    this.add('route53resolver:UpdateResolverEndpoint');
    return this;
  }

  /**
   * Grants permission to update settings for a specified resolver rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html
   */
  public updateResolverRule() {
    this.add('route53resolver:UpdateResolverRule');
    return this;
  }

  /**
   * Adds a resource of type resolver-rule to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResolverRule(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53resolver:${Region}:${Account}:resolver-rule/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type resolver-endpoint to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResolverEndpoint(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53resolver:${Region}:${Account}:resolver-endpoint/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - resolver-rule
   * - resolver-endpoint
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
