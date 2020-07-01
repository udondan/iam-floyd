import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service elasticloadbalancing
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancing.html
 */
export class Elasticloadbalancing extends PolicyStatement {
  public servicePrefix = 'elasticloadbalancing';
  public actions: Actions = {
    "AddTags": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_AddTags.html",
      "description": "Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "ApplySecurityGroupsToLoadBalancer": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ApplySecurityGroupsToLoadBalancer.html",
      "description": "Associates one or more security groups with your load balancer in a virtual private cloud (VPC).",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "AttachLoadBalancerToSubnets": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_AttachLoadBalancerToSubnets.html",
      "description": "Adds one or more subnets to the set of configured subnets for the specified load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "ConfigureHealthCheck": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ConfigureHealthCheck.html",
      "description": "Specifies the health check settings to use when evaluating the health state of your back-end instances.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "CreateAppCookieStickinessPolicy": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateAppCookieStickinessPolicy.html",
      "description": "Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "CreateLBCookieStickinessPolicy": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLBCookieStickinessPolicy.html",
      "description": "Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "CreateLoadBalancer": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancer.html",
      "description": "Creates a load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": false
        }
      }
    },
    "CreateLoadBalancerListeners": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancerListeners.html",
      "description": "Creates one or more listeners for the specified load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "CreateLoadBalancerPolicy": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancerPolicy.html",
      "description": "Creates a policy with the specified attributes for the specified load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "DeleteLoadBalancer": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancer.html",
      "description": "Deletes the specified load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "DeleteLoadBalancerListeners": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancerListeners.html",
      "description": "Deletes the specified listeners from the specified load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "DeleteLoadBalancerPolicy": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancerPolicy.html",
      "description": "Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "DeregisterInstancesFromLoadBalancer": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeregisterInstancesFromLoadBalancer.html",
      "description": "Deregisters the specified instances from the specified load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "DescribeInstanceHealth": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeInstanceHealth.html",
      "description": "Describes the state of the specified instances with respect to the specified load balancer.",
      "accessLevel": "Read"
    },
    "DescribeLoadBalancerAttributes": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerAttributes.html",
      "description": "Describes the attributes for the specified load balancer.",
      "accessLevel": "Read"
    },
    "DescribeLoadBalancerPolicies": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerPolicies.html",
      "description": "Describes the specified policies.",
      "accessLevel": "Read"
    },
    "DescribeLoadBalancerPolicyTypes": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerPolicyTypes.html",
      "description": "Describes the specified load balancer policy types.",
      "accessLevel": "Read"
    },
    "DescribeLoadBalancers": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html",
      "description": "Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.",
      "accessLevel": "List"
    },
    "DescribeTags": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeTags.html",
      "description": "Describes the tags associated with the specified load balancers.",
      "accessLevel": "Read"
    },
    "DetachLoadBalancerFromSubnets": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DetachLoadBalancerFromSubnets.html",
      "description": "Removes the specified subnets from the set of configured subnets for the load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "DisableAvailabilityZonesForLoadBalancer": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DisableAvailabilityZonesForLoadBalancer.html",
      "description": "Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "EnableAvailabilityZonesForLoadBalancer": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_EnableAvailabilityZonesForLoadBalancer.html",
      "description": "Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "ModifyLoadBalancerAttributes": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ModifyLoadBalancerAttributes.html",
      "description": "Modifies the attributes of the specified load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "RegisterInstancesWithLoadBalancer": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_RegisterInstancesWithLoadBalancer.html",
      "description": "Adds the specified instances to the specified load balancer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "RemoveTags": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_RemoveTags.html",
      "description": "Removes one or more tags from the specified load balancer.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "SetLoadBalancerListenerSSLCertificate": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerListenerSSLCertificate.html",
      "description": "Sets the certificate that terminates the specified listener's SSL connections.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "SetLoadBalancerPoliciesForBackendServer": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerPoliciesForBackendServer.html",
      "description": "Replaces the set of policies associated with the specified port on which the back-end server is listening with a new set of policies.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    },
    "SetLoadBalancerPoliciesOfListener": {
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerPoliciesOfListener.html",
      "description": "Replaces the current set of policies for the specified load balancer port with the specified set of policies.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loadbalancer": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "listener": {
      "name": "listener",
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html",
      "arn": "arn:${Partition}:elasticloadbalancing:${Region}:${Account}:listener/${LoadBalancerName}/${LoadBalancerId}/${ListenerId}",
      "conditionKeys": []
    },
    "loadbalancer": {
      "name": "loadbalancer",
      "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
      "arn": "arn:${Partition}:elasticloadbalancing:${Region}:${Account}:loadbalancer/${LoadBalancerName}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "elasticloadbalancing:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service elasticloadbalancing
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancing.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_AddTags.html
   */
  public addTags() {
    this.add('elasticloadbalancing:AddTags');
    return this;
  }

  /**
   * Associates one or more security groups with your load balancer in a virtual private cloud (VPC).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ApplySecurityGroupsToLoadBalancer.html
   */
  public applySecurityGroupsToLoadBalancer() {
    this.add('elasticloadbalancing:ApplySecurityGroupsToLoadBalancer');
    return this;
  }

  /**
   * Adds one or more subnets to the set of configured subnets for the specified load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_AttachLoadBalancerToSubnets.html
   */
  public attachLoadBalancerToSubnets() {
    this.add('elasticloadbalancing:AttachLoadBalancerToSubnets');
    return this;
  }

  /**
   * Specifies the health check settings to use when evaluating the health state of your back-end instances.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ConfigureHealthCheck.html
   */
  public configureHealthCheck() {
    this.add('elasticloadbalancing:ConfigureHealthCheck');
    return this;
  }

  /**
   * Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateAppCookieStickinessPolicy.html
   */
  public createAppCookieStickinessPolicy() {
    this.add('elasticloadbalancing:CreateAppCookieStickinessPolicy');
    return this;
  }

  /**
   * Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLBCookieStickinessPolicy.html
   */
  public createLBCookieStickinessPolicy() {
    this.add('elasticloadbalancing:CreateLBCookieStickinessPolicy');
    return this;
  }

  /**
   * Creates a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancer.html
   */
  public createLoadBalancer() {
    this.add('elasticloadbalancing:CreateLoadBalancer');
    return this;
  }

  /**
   * Creates one or more listeners for the specified load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancerListeners.html
   */
  public createLoadBalancerListeners() {
    this.add('elasticloadbalancing:CreateLoadBalancerListeners');
    return this;
  }

  /**
   * Creates a policy with the specified attributes for the specified load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancerPolicy.html
   */
  public createLoadBalancerPolicy() {
    this.add('elasticloadbalancing:CreateLoadBalancerPolicy');
    return this;
  }

  /**
   * Deletes the specified load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancer.html
   */
  public deleteLoadBalancer() {
    this.add('elasticloadbalancing:DeleteLoadBalancer');
    return this;
  }

  /**
   * Deletes the specified listeners from the specified load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancerListeners.html
   */
  public deleteLoadBalancerListeners() {
    this.add('elasticloadbalancing:DeleteLoadBalancerListeners');
    return this;
  }

  /**
   * Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancerPolicy.html
   */
  public deleteLoadBalancerPolicy() {
    this.add('elasticloadbalancing:DeleteLoadBalancerPolicy');
    return this;
  }

  /**
   * Deregisters the specified instances from the specified load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeregisterInstancesFromLoadBalancer.html
   */
  public deregisterInstancesFromLoadBalancer() {
    this.add('elasticloadbalancing:DeregisterInstancesFromLoadBalancer');
    return this;
  }

  /**
   * Describes the state of the specified instances with respect to the specified load balancer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeInstanceHealth.html
   */
  public describeInstanceHealth() {
    this.add('elasticloadbalancing:DescribeInstanceHealth');
    return this;
  }

  /**
   * Describes the attributes for the specified load balancer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerAttributes.html
   */
  public describeLoadBalancerAttributes() {
    this.add('elasticloadbalancing:DescribeLoadBalancerAttributes');
    return this;
  }

  /**
   * Describes the specified policies.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerPolicies.html
   */
  public describeLoadBalancerPolicies() {
    this.add('elasticloadbalancing:DescribeLoadBalancerPolicies');
    return this;
  }

  /**
   * Describes the specified load balancer policy types.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerPolicyTypes.html
   */
  public describeLoadBalancerPolicyTypes() {
    this.add('elasticloadbalancing:DescribeLoadBalancerPolicyTypes');
    return this;
  }

  /**
   * Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html
   */
  public describeLoadBalancers() {
    this.add('elasticloadbalancing:DescribeLoadBalancers');
    return this;
  }

  /**
   * Describes the tags associated with the specified load balancers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeTags.html
   */
  public describeTags() {
    this.add('elasticloadbalancing:DescribeTags');
    return this;
  }

  /**
   * Removes the specified subnets from the set of configured subnets for the load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DetachLoadBalancerFromSubnets.html
   */
  public detachLoadBalancerFromSubnets() {
    this.add('elasticloadbalancing:DetachLoadBalancerFromSubnets');
    return this;
  }

  /**
   * Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DisableAvailabilityZonesForLoadBalancer.html
   */
  public disableAvailabilityZonesForLoadBalancer() {
    this.add('elasticloadbalancing:DisableAvailabilityZonesForLoadBalancer');
    return this;
  }

  /**
   * Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_EnableAvailabilityZonesForLoadBalancer.html
   */
  public enableAvailabilityZonesForLoadBalancer() {
    this.add('elasticloadbalancing:EnableAvailabilityZonesForLoadBalancer');
    return this;
  }

  /**
   * Modifies the attributes of the specified load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ModifyLoadBalancerAttributes.html
   */
  public modifyLoadBalancerAttributes() {
    this.add('elasticloadbalancing:ModifyLoadBalancerAttributes');
    return this;
  }

  /**
   * Adds the specified instances to the specified load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_RegisterInstancesWithLoadBalancer.html
   */
  public registerInstancesWithLoadBalancer() {
    this.add('elasticloadbalancing:RegisterInstancesWithLoadBalancer');
    return this;
  }

  /**
   * Removes one or more tags from the specified load balancer.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_RemoveTags.html
   */
  public removeTags() {
    this.add('elasticloadbalancing:RemoveTags');
    return this;
  }

  /**
   * Sets the certificate that terminates the specified listener's SSL connections.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerListenerSSLCertificate.html
   */
  public setLoadBalancerListenerSSLCertificate() {
    this.add('elasticloadbalancing:SetLoadBalancerListenerSSLCertificate');
    return this;
  }

  /**
   * Replaces the set of policies associated with the specified port on which the back-end server is listening with a new set of policies.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerPoliciesForBackendServer.html
   */
  public setLoadBalancerPoliciesForBackendServer() {
    this.add('elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer');
    return this;
  }

  /**
   * Replaces the current set of policies for the specified load balancer port with the specified set of policies.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerPoliciesOfListener.html
   */
  public setLoadBalancerPoliciesOfListener() {
    this.add('elasticloadbalancing:SetLoadBalancerPoliciesOfListener');
    return this;
  }

  /**
   * Adds a resource of type listener to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param loadBalancerId - Identifier for the loadBalancerId.
   * @param listenerId - Identifier for the listenerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onListener(loadBalancerName: string, loadBalancerId: string, listenerId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticloadbalancing:${Region}:${Account}:listener/${LoadBalancerName}/${LoadBalancerId}/${ListenerId}';
    arn = arn.replace('${LoadBalancerName}', loadBalancerName);
    arn = arn.replace('${LoadBalancerId}', loadBalancerId);
    arn = arn.replace('${ListenerId}', listenerId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type loadbalancer to the statement
   *
   * https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html
   *
   * @param loadBalancerName - Identifier for the loadBalancerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:RequestTag/${TagKey}
   *  - aws:TagKeys
   *  - elasticloadbalancing:ResourceTag/${TagKey}
   */
  public onLoadbalancer(loadBalancerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticloadbalancing:${Region}:${Account}:loadbalancer/${LoadBalancerName}';
    arn = arn.replace('${LoadBalancerName}', loadBalancerName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The preface string for a tag key and value pair attached to a resource.
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTagExists(value: string | string[], operator?: string) {
    return this.if(`elasticloadbalancing:ResourceTag/`, value, operator || 'StringLike');
  }

  /**
   * A tag key and value pair.
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`elasticloadbalancing:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
