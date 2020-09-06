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
      "description": "Grants permission to associate a specified IP address with a Resolver endpoint. This is an IP address that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound)",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "AssociateResolverQueryLogConfig": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html",
      "description": "Grants permission to associate an Amazon VPC with a specified query logging configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-query-log-config": {
          "required": true
        }
      }
    },
    "AssociateResolverRule": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html",
      "description": "Grants permission to associate a specified Resolver rule with a specified VPC",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "CreateResolverEndpoint": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html",
      "description": "Grants permission to create a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "CreateResolverQueryLogConfig": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html",
      "description": "Grants permission to create a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-query-log-config": {
          "required": true
        }
      }
    },
    "CreateResolverRule": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html",
      "description": "For DNS queries that originate in your VPC, grants permission to define how to route the queries out of the VPC",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "DeleteResolverEndpoint": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html",
      "description": "Grants permission to delete a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "DeleteResolverQueryLogConfig": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html",
      "description": "Grants permission to delete a Resolver query logging configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-query-log-config": {
          "required": true
        }
      }
    },
    "DeleteResolverRule": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html",
      "description": "Grants permission to delete a Resolver rule",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "DisassociateResolverEndpointIpAddress": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html",
      "description": "Grants permission to remove a specified IP address from a Resolver endpoint. This is an IP address that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound)",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "DisassociateResolverQueryLogConfig": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html",
      "description": "Grants permission to remove the association between a specified Resolver query logging configuration and a specified VPC",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-query-log-config": {
          "required": true
        }
      }
    },
    "DisassociateResolverRule": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html",
      "description": "Grants permission to remove the association between a specified Resolver rule and a specified VPC",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "GetResolverEndpoint": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html",
      "description": "Grants permission to get information about a specified Resolver endpoint, such as whether it's an inbound or an outbound endpoint, and the IP addresses in your VPC that DNS queries are forwarded to on the way into or out of your VPC",
      "accessLevel": "Read",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "GetResolverQueryLogConfig": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html",
      "description": "Grants permission to get information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to",
      "accessLevel": "Read",
      "resourceTypes": {
        "resolver-query-log-config": {
          "required": true
        }
      }
    },
    "GetResolverQueryLogConfigAssociation": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html",
      "description": "Grants permission to get information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC",
      "accessLevel": "Read",
      "resourceTypes": {
        "resolver-query-log-config": {
          "required": true
        }
      }
    },
    "GetResolverQueryLogConfigPolicy": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigPolicy.html",
      "description": "Grants permission to get information about a specified Resolver query logging policy, which specifies the Resolver query logging operations and resources that you want to allow another AWS account to use",
      "accessLevel": "Read",
      "resourceTypes": {
        "resolver-query-log-config": {
          "required": true
        }
      }
    },
    "GetResolverRule": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html",
      "description": "Grants permission to get information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the IP address that queries are forwarded to.",
      "accessLevel": "Read",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "GetResolverRuleAssociation": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html",
      "description": "Grants permission to get information about an association between a specified Resolver rule and a VPC",
      "accessLevel": "Read",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "GetResolverRulePolicy": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRulePolicy.html",
      "description": "Grants permission to get information about a Resolver rule policy, which specifies the Resolver operations and resources that you want to allow another AWS account to use",
      "accessLevel": "Read",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "ListResolverEndpointIpAddresses": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpointIpAddresses.html",
      "description": "For a specified Resolver endpoint, grants permission to list the IP addresses that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound)",
      "accessLevel": "List",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "ListResolverEndpoints": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html",
      "description": "Grants permission to list all the Resolver endpoints that were created using the current AWS account",
      "accessLevel": "List"
    },
    "ListResolverQueryLogConfigAssociations": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html",
      "description": "Grants permission to list information about associations between Amazon VPCs and query logging configurations",
      "accessLevel": "List",
      "resourceTypes": {
        "resolver-query-log-config": {
          "required": true
        }
      }
    },
    "ListResolverQueryLogConfigs": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html",
      "description": "Grants permission to list information about the specified query logging configurations, which define where you want Resolver to save DNS query logs and specify the VPCs that you want to log queries for",
      "accessLevel": "List",
      "resourceTypes": {
        "resolver-query-log-config": {
          "required": true
        }
      }
    },
    "ListResolverRuleAssociations": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html",
      "description": "Grants permission to list the associations that were created between Resolver rules and VPCs using the current AWS account",
      "accessLevel": "List"
    },
    "ListResolverRules": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html",
      "description": "Grants permission to list the Resolver rules that were created using the current AWS account",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListTagsForResource.html",
      "description": "Grants permission to list the tags that you associated with the specified resource",
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
    "PutResolverQueryLogConfigPolicy": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverQueryLogConfigPolicy.html",
      "description": "Grants permission to specify an AWS account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-query-log-config": {
          "required": true
        }
      }
    },
    "PutResolverRulePolicy": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverRulePolicy.html",
      "description": "Grants permission to specify an AWS account that you want to share rules with, the Resolver rules that you want to share, and the operations that you want the account to be able to perform on those rules",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_TagResource.html",
      "description": "Grants permission to add one or more tags to a specified resource",
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
      "description": "Grants permission to remove one or more tags from a specified resource",
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
      "description": "Grants permission to update selected settings for an inbound or an outbound Resolver endpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-endpoint": {
          "required": true
        }
      }
    },
    "UpdateResolverRule": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html",
      "description": "Grants permission to update settings for a specified Resolver rule",
      "accessLevel": "Write",
      "resourceTypes": {
        "resolver-rule": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "resolver-query-log-config": {
      "name": "resolver-query-log-config",
      "url": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources",
      "arn": "arn:${Partition}:route53resolver:${Region}:${Account}:resolver-query-log-config/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
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
   * Grants permission to associate a specified IP address with a Resolver endpoint. This is an IP address that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html
   */
  public toAssociateResolverEndpointIpAddress() {
    this.add('route53resolver:AssociateResolverEndpointIpAddress');
    return this;
  }

  /**
   * Grants permission to associate an Amazon VPC with a specified query logging configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html
   */
  public toAssociateResolverQueryLogConfig() {
    this.add('route53resolver:AssociateResolverQueryLogConfig');
    return this;
  }

  /**
   * Grants permission to associate a specified Resolver rule with a specified VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html
   */
  public toAssociateResolverRule() {
    this.add('route53resolver:AssociateResolverRule');
    return this;
  }

  /**
   * Grants permission to create a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html
   */
  public toCreateResolverEndpoint() {
    this.add('route53resolver:CreateResolverEndpoint');
    return this;
  }

  /**
   * Grants permission to create a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html
   */
  public toCreateResolverQueryLogConfig() {
    this.add('route53resolver:CreateResolverQueryLogConfig');
    return this;
  }

  /**
   * For DNS queries that originate in your VPC, grants permission to define how to route the queries out of the VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html
   */
  public toCreateResolverRule() {
    this.add('route53resolver:CreateResolverRule');
    return this;
  }

  /**
   * Grants permission to delete a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html
   */
  public toDeleteResolverEndpoint() {
    this.add('route53resolver:DeleteResolverEndpoint');
    return this;
  }

  /**
   * Grants permission to delete a Resolver query logging configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html
   */
  public toDeleteResolverQueryLogConfig() {
    this.add('route53resolver:DeleteResolverQueryLogConfig');
    return this;
  }

  /**
   * Grants permission to delete a Resolver rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html
   */
  public toDeleteResolverRule() {
    this.add('route53resolver:DeleteResolverRule');
    return this;
  }

  /**
   * Grants permission to remove a specified IP address from a Resolver endpoint. This is an IP address that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html
   */
  public toDisassociateResolverEndpointIpAddress() {
    this.add('route53resolver:DisassociateResolverEndpointIpAddress');
    return this;
  }

  /**
   * Grants permission to remove the association between a specified Resolver query logging configuration and a specified VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html
   */
  public toDisassociateResolverQueryLogConfig() {
    this.add('route53resolver:DisassociateResolverQueryLogConfig');
    return this;
  }

  /**
   * Grants permission to remove the association between a specified Resolver rule and a specified VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html
   */
  public toDisassociateResolverRule() {
    this.add('route53resolver:DisassociateResolverRule');
    return this;
  }

  /**
   * Grants permission to get information about a specified Resolver endpoint, such as whether it's an inbound or an outbound endpoint, and the IP addresses in your VPC that DNS queries are forwarded to on the way into or out of your VPC
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html
   */
  public toGetResolverEndpoint() {
    this.add('route53resolver:GetResolverEndpoint');
    return this;
  }

  /**
   * Grants permission to get information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html
   */
  public toGetResolverQueryLogConfig() {
    this.add('route53resolver:GetResolverQueryLogConfig');
    return this;
  }

  /**
   * Grants permission to get information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html
   */
  public toGetResolverQueryLogConfigAssociation() {
    this.add('route53resolver:GetResolverQueryLogConfigAssociation');
    return this;
  }

  /**
   * Grants permission to get information about a specified Resolver query logging policy, which specifies the Resolver query logging operations and resources that you want to allow another AWS account to use
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigPolicy.html
   */
  public toGetResolverQueryLogConfigPolicy() {
    this.add('route53resolver:GetResolverQueryLogConfigPolicy');
    return this;
  }

  /**
   * Grants permission to get information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the IP address that queries are forwarded to.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html
   */
  public toGetResolverRule() {
    this.add('route53resolver:GetResolverRule');
    return this;
  }

  /**
   * Grants permission to get information about an association between a specified Resolver rule and a VPC
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html
   */
  public toGetResolverRuleAssociation() {
    this.add('route53resolver:GetResolverRuleAssociation');
    return this;
  }

  /**
   * Grants permission to get information about a Resolver rule policy, which specifies the Resolver operations and resources that you want to allow another AWS account to use
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRulePolicy.html
   */
  public toGetResolverRulePolicy() {
    this.add('route53resolver:GetResolverRulePolicy');
    return this;
  }

  /**
   * For a specified Resolver endpoint, grants permission to list the IP addresses that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpointIpAddresses.html
   */
  public toListResolverEndpointIpAddresses() {
    this.add('route53resolver:ListResolverEndpointIpAddresses');
    return this;
  }

  /**
   * Grants permission to list all the Resolver endpoints that were created using the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html
   */
  public toListResolverEndpoints() {
    this.add('route53resolver:ListResolverEndpoints');
    return this;
  }

  /**
   * Grants permission to list information about associations between Amazon VPCs and query logging configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html
   */
  public toListResolverQueryLogConfigAssociations() {
    this.add('route53resolver:ListResolverQueryLogConfigAssociations');
    return this;
  }

  /**
   * Grants permission to list information about the specified query logging configurations, which define where you want Resolver to save DNS query logs and specify the VPCs that you want to log queries for
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html
   */
  public toListResolverQueryLogConfigs() {
    this.add('route53resolver:ListResolverQueryLogConfigs');
    return this;
  }

  /**
   * Grants permission to list the associations that were created between Resolver rules and VPCs using the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html
   */
  public toListResolverRuleAssociations() {
    this.add('route53resolver:ListResolverRuleAssociations');
    return this;
  }

  /**
   * Grants permission to list the Resolver rules that were created using the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html
   */
  public toListResolverRules() {
    this.add('route53resolver:ListResolverRules');
    return this;
  }

  /**
   * Grants permission to list the tags that you associated with the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('route53resolver:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to specify an AWS account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverQueryLogConfigPolicy.html
   */
  public toPutResolverQueryLogConfigPolicy() {
    this.add('route53resolver:PutResolverQueryLogConfigPolicy');
    return this;
  }

  /**
   * Grants permission to specify an AWS account that you want to share rules with, the Resolver rules that you want to share, and the operations that you want the account to be able to perform on those rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverRulePolicy.html
   */
  public toPutResolverRulePolicy() {
    this.add('route53resolver:PutResolverRulePolicy');
    return this;
  }

  /**
   * Grants permission to add one or more tags to a specified resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_TagResource.html
   */
  public toTagResource() {
    this.add('route53resolver:TagResource');
    return this;
  }

  /**
   * Grants permission to remove one or more tags from a specified resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UntagResource.html
   */
  public toUntagResource() {
    this.add('route53resolver:UntagResource');
    return this;
  }

  /**
   * Grants permission to update selected settings for an inbound or an outbound Resolver endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html
   */
  public toUpdateResolverEndpoint() {
    this.add('route53resolver:UpdateResolverEndpoint');
    return this;
  }

  /**
   * Grants permission to update settings for a specified Resolver rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html
   */
  public toUpdateResolverRule() {
    this.add('route53resolver:UpdateResolverRule');
    return this;
  }

  /**
   * Adds a resource of type resolver-query-log-config to the statement
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
  public onResolverQueryLogConfig(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53resolver:${Region}:${Account}:resolver-query-log-config/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
}
