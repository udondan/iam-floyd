import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service elasticloadbalancing-v2
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancingv2.html
 */
export class ElasticloadbalancingV2 extends PolicyStatement {
  public servicePrefix = 'elasticloadbalancing-v2';
  public actions : Actions = {
    "AddListenerCertificates": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_AddListenerCertificates.html",
      "description": "Adds the specified certificates to the specified secure listener.",
      "accessLevel": "Write",
      "resourceTypes": {
        "listener/app": {
          "required": true
        },
        "listener/net": {
          "required": true
        }
      }
    },
    "AddTags": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_AddTags.html",
      "description": "Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "loadbalancer/app/": {
          "required": false
        },
        "loadbalancer/net/": {
          "required": false
        },
        "targetgroup": {
          "required": false
        }
      }
    },
    "CreateListener": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateListener.html",
      "description": "Creates a listener for the specified Application Load Balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer/app/": {
          "required": false
        },
        "loadbalancer/net/": {
          "required": false
        }
      }
    },
    "CreateLoadBalancer": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateLoadBalancer.html",
      "description": "Creates a load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer/app/": {
          "required": false
        },
        "loadbalancer/net/": {
          "required": false
        }
      }
    },
    "CreateRule": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateRule.html",
      "description": "Creates a rule for the specified listener.",
      "accessLevel": "Write",
      "resourceTypes": {
        "listener/app": {
          "required": true
        },
        "listener/net": {
          "required": true
        }
      }
    },
    "CreateTargetGroup": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTargetGroup.html",
      "description": "Creates a target group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "targetgroup": {
          "required": true
        }
      }
    },
    "DeleteListener": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteListener.html",
      "description": "Deletes the specified listener.",
      "accessLevel": "Write",
      "resourceTypes": {
        "listener/app": {
          "required": true
        },
        "listener/net": {
          "required": true
        }
      }
    },
    "DeleteLoadBalancer": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteLoadBalancer.html",
      "description": "Deletes the specified load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer/app/": {
          "required": false
        },
        "loadbalancer/net/": {
          "required": false
        }
      }
    },
    "DeleteRule": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteRule.html",
      "description": "Deletes the specified rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "listener-rule/app": {
          "required": true
        },
        "listener-rule/net": {
          "required": true
        }
      }
    },
    "DeleteTargetGroup": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteTargetGroup.html",
      "description": "Deletes the specified target group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "targetgroup": {
          "required": true
        }
      }
    },
    "DeregisterTargets": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeregisterTargets.html",
      "description": "Deregisters the specified targets from the specified target group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "targetgroup": {
          "required": true
        }
      }
    },
    "DescribeAccountLimits": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeAccountLimits.html",
      "description": "Describes the Elastic Load Balancing resource limits for the AWS account.",
      "accessLevel": "Read"
    },
    "DescribeListenerCertificates": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeListenerCertificates.html",
      "description": "Describes the certificates for the specified secure listener.",
      "accessLevel": "Read"
    },
    "DescribeListeners": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeListeners.html",
      "description": "Describes the specified listeners or the listeners for the specified Application Load Balancer.",
      "accessLevel": "Read"
    },
    "DescribeLoadBalancerAttributes": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancerAttributes.html",
      "description": "Describes the attributes for the specified load balancer.",
      "accessLevel": "Read"
    },
    "DescribeLoadBalancers": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html",
      "description": "Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.",
      "accessLevel": "Read"
    },
    "DescribeRules": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeRules.html",
      "description": "Describes the specified rules or the rules for the specified listener.",
      "accessLevel": "Read"
    },
    "DescribeSSLPolicies": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeSSLPolicies.html",
      "description": "Describes the specified policies or all policies used for SSL negotiation.",
      "accessLevel": "Read"
    },
    "DescribeTags": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTags.html",
      "description": "Describes the tags associated with the specified load balancers.",
      "accessLevel": "Read"
    },
    "DescribeTargetGroupAttributes": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroupAttributes.html",
      "description": "Describes the attributes for the specified target group.",
      "accessLevel": "Read"
    },
    "DescribeTargetGroups": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html",
      "description": "Describes the specified target groups or all of your target groups.",
      "accessLevel": "Read"
    },
    "DescribeTargetHealth": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetHealth.html",
      "description": "Describes the health of the specified targets or all of your targets.",
      "accessLevel": "Read"
    },
    "ModifyListener": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyListener.html",
      "description": "Modifies the specified properties of the specified listener.",
      "accessLevel": "Write",
      "resourceTypes": {
        "listener/app": {
          "required": true
        },
        "listener/net": {
          "required": true
        }
      }
    },
    "ModifyLoadBalancerAttributes": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyLoadBalancerAttributes.html",
      "description": "Modifies the attributes of the specified load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer/app/": {
          "required": false
        },
        "loadbalancer/net/": {
          "required": false
        }
      }
    },
    "ModifyRule": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyRule.html",
      "description": "Modifies the specified rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "listener-rule/app": {
          "required": true
        },
        "listener-rule/net": {
          "required": true
        }
      }
    },
    "ModifyTargetGroup": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTargetGroup.html",
      "description": "Modifies the health checks used when evaluating the health state of the targets in the specified target group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "targetgroup": {
          "required": true
        }
      }
    },
    "ModifyTargetGroupAttributes": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTargetGroupAttributes.html",
      "description": "Modifies the specified attributes of the specified target group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "targetgroup": {
          "required": true
        }
      }
    },
    "RegisterTargets": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RegisterTargets.html",
      "description": "Registers the specified targets with the specified target group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "targetgroup": {
          "required": true
        }
      }
    },
    "RemoveListenerCertificates": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RemoveListenerCertificates.html",
      "description": "Removes the specified certificates of the specified secure listener.",
      "accessLevel": "Write",
      "resourceTypes": {
        "listener/app": {
          "required": true
        },
        "listener/net": {
          "required": true
        }
      }
    },
    "RemoveTags": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RemoveTags.html",
      "description": "Removes one or more tags from the specified load balancer.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "loadbalancer/app/": {
          "required": false
        },
        "loadbalancer/net/": {
          "required": false
        },
        "targetgroup": {
          "required": false
        }
      }
    },
    "SetIpAddressType": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetIpAddressType.html",
      "description": "Not found",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer/app/": {
          "required": false
        },
        "loadbalancer/net/": {
          "required": false
        }
      }
    },
    "SetRulePriorities": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetRulePriorities.html",
      "description": "Sets the priorities of the specified rules.",
      "accessLevel": "Write",
      "resourceTypes": {
        "listener-rule/app": {
          "required": true
        },
        "listener-rule/net": {
          "required": true
        }
      }
    },
    "SetSecurityGroups": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetSecurityGroups.html",
      "description": "Associates the specified security groups with the specified load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer/app/": {
          "required": false
        },
        "loadbalancer/net/": {
          "required": false
        }
      }
    },
    "SetSubnets": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetSubnets.html",
      "description": "Enables the Availability Zone for the specified subnets for the specified load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer/app/": {
          "required": false
        },
        "loadbalancer/net/": {
          "required": false
        }
      }
    },
    "SetWebAcl": {
      "url": "",
      "description": "Gives WebAcl permission to WAF",
      "accessLevel": "Write"
    }
  };

  /**
   * Adds the specified certificates to the specified secure listener.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_AddListenerCertificates.html
   */
  public addListenerCertificates () {
    this.add('elasticloadbalancing-v2:AddListenerCertificates');
    return this;
  }

  /**
   * Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_AddTags.html
   */
  public addTags () {
    this.add('elasticloadbalancing-v2:AddTags');
    return this;
  }

  /**
   * Creates a listener for the specified Application Load Balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateListener.html
   */
  public createListener () {
    this.add('elasticloadbalancing-v2:CreateListener');
    return this;
  }

  /**
   * Creates a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateLoadBalancer.html
   */
  public createLoadBalancer () {
    this.add('elasticloadbalancing-v2:CreateLoadBalancer');
    return this;
  }

  /**
   * Creates a rule for the specified listener.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateRule.html
   */
  public createRule () {
    this.add('elasticloadbalancing-v2:CreateRule');
    return this;
  }

  /**
   * Creates a target group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTargetGroup.html
   */
  public createTargetGroup () {
    this.add('elasticloadbalancing-v2:CreateTargetGroup');
    return this;
  }

  /**
   * Deletes the specified listener.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteListener.html
   */
  public deleteListener () {
    this.add('elasticloadbalancing-v2:DeleteListener');
    return this;
  }

  /**
   * Deletes the specified load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteLoadBalancer.html
   */
  public deleteLoadBalancer () {
    this.add('elasticloadbalancing-v2:DeleteLoadBalancer');
    return this;
  }

  /**
   * Deletes the specified rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteRule.html
   */
  public deleteRule () {
    this.add('elasticloadbalancing-v2:DeleteRule');
    return this;
  }

  /**
   * Deletes the specified target group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteTargetGroup.html
   */
  public deleteTargetGroup () {
    this.add('elasticloadbalancing-v2:DeleteTargetGroup');
    return this;
  }

  /**
   * Deregisters the specified targets from the specified target group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeregisterTargets.html
   */
  public deregisterTargets () {
    this.add('elasticloadbalancing-v2:DeregisterTargets');
    return this;
  }

  /**
   * Describes the Elastic Load Balancing resource limits for the AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeAccountLimits.html
   */
  public describeAccountLimits () {
    this.add('elasticloadbalancing-v2:DescribeAccountLimits');
    return this;
  }

  /**
   * Describes the certificates for the specified secure listener.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeListenerCertificates.html
   */
  public describeListenerCertificates () {
    this.add('elasticloadbalancing-v2:DescribeListenerCertificates');
    return this;
  }

  /**
   * Describes the specified listeners or the listeners for the specified Application Load Balancer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeListeners.html
   */
  public describeListeners () {
    this.add('elasticloadbalancing-v2:DescribeListeners');
    return this;
  }

  /**
   * Describes the attributes for the specified load balancer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancerAttributes.html
   */
  public describeLoadBalancerAttributes () {
    this.add('elasticloadbalancing-v2:DescribeLoadBalancerAttributes');
    return this;
  }

  /**
   * Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html
   */
  public describeLoadBalancers () {
    this.add('elasticloadbalancing-v2:DescribeLoadBalancers');
    return this;
  }

  /**
   * Describes the specified rules or the rules for the specified listener.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeRules.html
   */
  public describeRules () {
    this.add('elasticloadbalancing-v2:DescribeRules');
    return this;
  }

  /**
   * Describes the specified policies or all policies used for SSL negotiation.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeSSLPolicies.html
   */
  public describeSSLPolicies () {
    this.add('elasticloadbalancing-v2:DescribeSSLPolicies');
    return this;
  }

  /**
   * Describes the tags associated with the specified load balancers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTags.html
   */
  public describeTags () {
    this.add('elasticloadbalancing-v2:DescribeTags');
    return this;
  }

  /**
   * Describes the attributes for the specified target group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroupAttributes.html
   */
  public describeTargetGroupAttributes () {
    this.add('elasticloadbalancing-v2:DescribeTargetGroupAttributes');
    return this;
  }

  /**
   * Describes the specified target groups or all of your target groups.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html
   */
  public describeTargetGroups () {
    this.add('elasticloadbalancing-v2:DescribeTargetGroups');
    return this;
  }

  /**
   * Describes the health of the specified targets or all of your targets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetHealth.html
   */
  public describeTargetHealth () {
    this.add('elasticloadbalancing-v2:DescribeTargetHealth');
    return this;
  }

  /**
   * Modifies the specified properties of the specified listener.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyListener.html
   */
  public modifyListener () {
    this.add('elasticloadbalancing-v2:ModifyListener');
    return this;
  }

  /**
   * Modifies the attributes of the specified load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyLoadBalancerAttributes.html
   */
  public modifyLoadBalancerAttributes () {
    this.add('elasticloadbalancing-v2:ModifyLoadBalancerAttributes');
    return this;
  }

  /**
   * Modifies the specified rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyRule.html
   */
  public modifyRule () {
    this.add('elasticloadbalancing-v2:ModifyRule');
    return this;
  }

  /**
   * Modifies the health checks used when evaluating the health state of the targets in the specified target group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTargetGroup.html
   */
  public modifyTargetGroup () {
    this.add('elasticloadbalancing-v2:ModifyTargetGroup');
    return this;
  }

  /**
   * Modifies the specified attributes of the specified target group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTargetGroupAttributes.html
   */
  public modifyTargetGroupAttributes () {
    this.add('elasticloadbalancing-v2:ModifyTargetGroupAttributes');
    return this;
  }

  /**
   * Registers the specified targets with the specified target group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RegisterTargets.html
   */
  public registerTargets () {
    this.add('elasticloadbalancing-v2:RegisterTargets');
    return this;
  }

  /**
   * Removes the specified certificates of the specified secure listener.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RemoveListenerCertificates.html
   */
  public removeListenerCertificates () {
    this.add('elasticloadbalancing-v2:RemoveListenerCertificates');
    return this;
  }

  /**
   * Removes one or more tags from the specified load balancer.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RemoveTags.html
   */
  public removeTags () {
    this.add('elasticloadbalancing-v2:RemoveTags');
    return this;
  }

  /**
   * Not found
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetIpAddressType.html
   */
  public setIpAddressType () {
    this.add('elasticloadbalancing-v2:SetIpAddressType');
    return this;
  }

  /**
   * Sets the priorities of the specified rules.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetRulePriorities.html
   */
  public setRulePriorities () {
    this.add('elasticloadbalancing-v2:SetRulePriorities');
    return this;
  }

  /**
   * Associates the specified security groups with the specified load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetSecurityGroups.html
   */
  public setSecurityGroups () {
    this.add('elasticloadbalancing-v2:SetSecurityGroups');
    return this;
  }

  /**
   * Enables the Availability Zone for the specified subnets for the specified load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetSubnets.html
   */
  public setSubnets () {
    this.add('elasticloadbalancing-v2:SetSubnets');
    return this;
  }

  /**
   * Gives WebAcl permission to WAF
   *
   * Access Level: Write
   *
   *
   */
  public setWebAcl () {
    this.add('elasticloadbalancing-v2:SetWebAcl');
    return this;
  }
}
