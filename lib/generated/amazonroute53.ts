import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service route53
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53.html
 */
export class Route53 extends PolicyStatement {
  public servicePrefix = 'route53';
  public actions: Actions = {
    "AssociateVPCWithHostedZone": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_AssociateVPCWithHostedZone.html",
      "description": "Grants permission to associate an additional Amazon VPC with a private hosted zone",
      "accessLevel": "Write",
      "resourceTypes": {
        "hostedzone": {
          "required": true
        }
      }
    },
    "ChangeResourceRecordSets": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html",
      "description": "Grants permission to create, update, or delete a record, which contains authoritative DNS information for a specified domain or subdomain name",
      "accessLevel": "Write",
      "resourceTypes": {
        "hostedzone": {
          "required": true
        }
      }
    },
    "ChangeTagsForResource": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeTagsForResource.html",
      "description": "Grants permission to add, edit, or delete tags for a health check or a hosted zone",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "healthcheck": {
          "required": true
        },
        "hostedzone": {
          "required": true
        }
      }
    },
    "CreateHealthCheck": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHealthCheck.html",
      "description": "Grants permission to create a new health check, which monitors the health and performance of your web applications, web servers, and other resources",
      "accessLevel": "Write"
    },
    "CreateHostedZone": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html",
      "description": "Grants permission to create a public hosted zone, which you use to specify how the Domain Name System (DNS) routes traffic on the Internet for a domain, such as example.com, and its subdomains",
      "accessLevel": "Write"
    },
    "CreateQueryLoggingConfig": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html",
      "description": "Grants permission to create a configuration for DNS query logging",
      "accessLevel": "Write",
      "resourceTypes": {
        "hostedzone": {
          "required": true
        }
      }
    },
    "CreateReusableDelegationSet": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html",
      "description": "Grants permission to create a delegation set (a group of four name servers) that can be reused by multiple hosted zones",
      "accessLevel": "Write"
    },
    "CreateTrafficPolicy": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html",
      "description": "Grants permission to create a traffic policy, which you use to create multiple DNS records for one domain name (such as example.com) or one subdomain name (such as www.example.com)",
      "accessLevel": "Write"
    },
    "CreateTrafficPolicyInstance": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicyInstance.html",
      "description": "Grants permission to create records in a specified hosted zone based on the settings in a specified traffic policy version",
      "accessLevel": "Write",
      "resourceTypes": {
        "hostedzone": {
          "required": true
        },
        "trafficpolicy": {
          "required": true
        }
      }
    },
    "CreateTrafficPolicyVersion": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicyVersion.html",
      "description": "Grants permission to create a new version of an existing traffic policy",
      "accessLevel": "Write",
      "resourceTypes": {
        "trafficpolicy": {
          "required": true
        }
      }
    },
    "CreateVPCAssociationAuthorization": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateVPCAssociationAuthorization.html",
      "description": "Grants permission to authorize the AWS account that created a specified VPC to submit an AssociateVPCWithHostedZone request, which associates the VPC with a specified hosted zone that was created by a different account",
      "accessLevel": "Write",
      "resourceTypes": {
        "hostedzone": {
          "required": true
        }
      }
    },
    "DeleteHealthCheck": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHealthCheck.html",
      "description": "Grants permission to delete a health check",
      "accessLevel": "Write",
      "resourceTypes": {
        "healthcheck": {
          "required": true
        }
      }
    },
    "DeleteHostedZone": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html",
      "description": "Grants permission to delete a hosted zone",
      "accessLevel": "Write",
      "resourceTypes": {
        "hostedzone": {
          "required": true
        }
      }
    },
    "DeleteQueryLoggingConfig": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteQueryLoggingConfig.html",
      "description": "Grants permission to delete a configuration for DNS query logging",
      "accessLevel": "Write",
      "resourceTypes": {
        "queryloggingconfig": {
          "required": true
        }
      }
    },
    "DeleteReusableDelegationSet": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteReusableDelegationSet.html",
      "description": "Grants permission to delete a reusable delegation set",
      "accessLevel": "Write",
      "resourceTypes": {
        "delegationset": {
          "required": true
        }
      }
    },
    "DeleteTrafficPolicy": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html",
      "description": "Grants permission to delete a traffic policy",
      "accessLevel": "Write",
      "resourceTypes": {
        "trafficpolicy": {
          "required": true
        }
      }
    },
    "DeleteTrafficPolicyInstance": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicyInstance.html",
      "description": "Grants permission to delete a traffic policy instance and all the records that Route 53 created when you created the instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "trafficpolicyinstance": {
          "required": true
        }
      }
    },
    "DeleteVPCAssociationAuthorization": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteVPCAssociationAuthorization.html",
      "description": "Grants permission to remove authorization for associating an Amazon Virtual Private Cloud with a Route 53 private hosted zone",
      "accessLevel": "Write",
      "resourceTypes": {
        "hostedzone": {
          "required": true
        }
      }
    },
    "DisassociateVPCFromHostedZone": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_DisassociateVPCFromHostedZone.html",
      "description": "Grants permission to disassociate an Amazon Virtual Private Cloud from a Route 53 private hosted zone",
      "accessLevel": "Write"
    },
    "GetAccountLimit": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html",
      "description": "Grants permission to get the specified limit for the current account, for example, the maximum number of health checks that you can create using the account",
      "accessLevel": "Read"
    },
    "GetChange": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html",
      "description": "Grants permission to get the current status of a request to create, update, or delete one or more records",
      "accessLevel": "List",
      "resourceTypes": {
        "change": {
          "required": true
        }
      }
    },
    "GetCheckerIpRanges": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetCheckerIpRanges.html",
      "description": "Grants permission to get a list of the IP ranges that are used by Route 53 health checkers to check the health of your resources",
      "accessLevel": "List"
    },
    "GetGeoLocation": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetGeoLocation.html",
      "description": "Grants permission to get information about whether a specified geographic location is supported for Route 53 geolocation records",
      "accessLevel": "List"
    },
    "GetHealthCheck": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheck.html",
      "description": "Grants permission to get information about a specified health check",
      "accessLevel": "Read",
      "resourceTypes": {
        "healthcheck": {
          "required": true
        }
      }
    },
    "GetHealthCheckCount": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckCount.html",
      "description": "Grants permission to get the number of health checks that are associated with the current AWS account",
      "accessLevel": "List"
    },
    "GetHealthCheckLastFailureReason": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckLastFailureReason.html",
      "description": "Grants permission to get the reason that a specified health check failed most recently",
      "accessLevel": "List",
      "resourceTypes": {
        "healthcheck": {
          "required": true
        }
      }
    },
    "GetHealthCheckStatus": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckStatus.html",
      "description": "Grants permission to get the status of a specified health check",
      "accessLevel": "List",
      "resourceTypes": {
        "healthcheck": {
          "required": true
        }
      }
    },
    "GetHostedZone": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZone.html",
      "description": "Grants permission to get information about a specified hosted zone including the four name servers that Route 53 assigned to the hosted zone",
      "accessLevel": "List",
      "resourceTypes": {
        "hostedzone": {
          "required": true
        }
      }
    },
    "GetHostedZoneCount": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneCount.html",
      "description": "Grants permission to get the number of hosted zones that are associated with the current AWS account",
      "accessLevel": "List"
    },
    "GetHostedZoneLimit": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneLimit.html",
      "description": "Grants permission to get the specified limit for a specified hosted zone",
      "accessLevel": "Read",
      "resourceTypes": {
        "hostedzone": {
          "required": true
        }
      }
    },
    "GetQueryLoggingConfig": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetQueryLoggingConfig.html",
      "description": "Grants permission to get information about a specified configuration for DNS query logging",
      "accessLevel": "Read",
      "resourceTypes": {
        "queryloggingconfig": {
          "required": true
        }
      }
    },
    "GetReusableDelegationSet": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html",
      "description": "Grants permission to get information about a specified reusable delegation set, including the four name servers that are assigned to the delegation set",
      "accessLevel": "List",
      "resourceTypes": {
        "delegationset": {
          "required": true
        }
      }
    },
    "GetReusableDelegationSetLimit": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSetLimit.html",
      "description": "Grants permission to get the maximum number of hosted zones that you can associate with the specified reusable delegation set",
      "accessLevel": "Read",
      "resourceTypes": {
        "delegationset": {
          "required": true
        }
      }
    },
    "GetTrafficPolicy": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html",
      "description": "Grants permission to get information about a specified traffic policy version",
      "accessLevel": "Read",
      "resourceTypes": {
        "trafficpolicy": {
          "required": true
        }
      }
    },
    "GetTrafficPolicyInstance": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicyInstance.html",
      "description": "Grants permission to get information about a specified traffic policy instance",
      "accessLevel": "Read",
      "resourceTypes": {
        "trafficpolicyinstance": {
          "required": true
        }
      }
    },
    "GetTrafficPolicyInstanceCount": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicyInstanceCount.html",
      "description": "Grants permission to get the number of traffic policy instances that are associated with the current AWS account",
      "accessLevel": "Read"
    },
    "ListGeoLocations": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListGeoLocations.html",
      "description": "Grants permission to get a list of geographic locations that Route 53 supports for geolocation",
      "accessLevel": "List"
    },
    "ListHealthChecks": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHealthChecks.html",
      "description": "Grants permission to get a list of the health checks that are associated with the current AWS account",
      "accessLevel": "List"
    },
    "ListHostedZones": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZones.html",
      "description": "Grants permission to get a list of the public and private hosted zones that are associated with the current AWS account",
      "accessLevel": "List"
    },
    "ListHostedZonesByName": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByName.html",
      "description": "Grants permission to get a list of your hosted zones in lexicographic order. Hosted zones are sorted by name with the labels reversed, for example, com.example.www.",
      "accessLevel": "List"
    },
    "ListQueryLoggingConfigs": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html",
      "description": "Grants permission to list the configurations for DNS query logging that are associated with the current AWS account or the configuration that is associated with a specified hosted zone.",
      "accessLevel": "List",
      "resourceTypes": {
        "queryloggingconfig": {
          "required": true
        }
      }
    },
    "ListResourceRecordSets": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListResourceRecordSets.html",
      "description": "Grants permission to list the records in a specified hosted zone",
      "accessLevel": "List",
      "resourceTypes": {
        "hostedzone": {
          "required": true
        }
      }
    },
    "ListReusableDelegationSets": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListReusableDelegationSets.html",
      "description": "Grants permission to list the reusable delegation sets that are associated with the current AWS account.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list tags for one health check or hosted zone",
      "accessLevel": "Read",
      "resourceTypes": {
        "healthcheck": {
          "required": false
        },
        "hostedzone": {
          "required": false
        }
      }
    },
    "ListTagsForResources": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTagsForResources.html",
      "description": "Grants permission to list tags for up to 10 health checks or hosted zones",
      "accessLevel": "Read",
      "resourceTypes": {
        "healthcheck": {
          "required": false
        },
        "hostedzone": {
          "required": false
        }
      }
    },
    "ListTrafficPolicies": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html",
      "description": "Grants permission to get information about the latest version for every traffic policy that is associated with the current AWS account. Policies are listed in the order in which they were created.",
      "accessLevel": "Read"
    },
    "ListTrafficPolicyInstances": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstances.html",
      "description": "Grants permission to get information about the traffic policy instances that you created by using the current AWS account",
      "accessLevel": "Read"
    },
    "ListTrafficPolicyInstancesByHostedZone": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstancesByHostedZone.html",
      "description": "Grants permission to get information about the traffic policy instances that you created in a specified hosted zone",
      "accessLevel": "Read",
      "resourceTypes": {
        "hostedzone": {
          "required": true
        }
      }
    },
    "ListTrafficPolicyInstancesByPolicy": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstancesByPolicy.html",
      "description": "Grants permission to get information about the traffic policy instances that you created using a specified traffic policy version",
      "accessLevel": "Read",
      "resourceTypes": {
        "trafficpolicy": {
          "required": true
        }
      }
    },
    "ListTrafficPolicyVersions": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyVersions.html",
      "description": "Grants permission to get information about all the versions for a specified traffic policy",
      "accessLevel": "Read",
      "resourceTypes": {
        "trafficpolicy": {
          "required": true
        }
      }
    },
    "ListVPCAssociationAuthorizations": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListVPCAssociationAuthorizations.html",
      "description": "Grants permission to get a list of the VPCs that were created by other accounts and that can be associated with a specified hosted zone",
      "accessLevel": "Read",
      "resourceTypes": {
        "hostedzone": {
          "required": true
        }
      }
    },
    "TestDNSAnswer": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_TestDNSAnswer.html",
      "description": "Grants permission to get the value that Route 53 returns in response to a DNS query for a specified record name and type",
      "accessLevel": "Read"
    },
    "UpdateHealthCheck": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html",
      "description": "Grants permission to update an existing health check",
      "accessLevel": "Write",
      "resourceTypes": {
        "healthcheck": {
          "required": true
        }
      }
    },
    "UpdateHostedZoneComment": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHostedZoneComment.html",
      "description": "Grants permission to update the comment for a specified hosted zone",
      "accessLevel": "Write",
      "resourceTypes": {
        "hostedzone": {
          "required": true
        }
      }
    },
    "UpdateTrafficPolicyComment": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateTrafficPolicyComment.html",
      "description": "Grants permission to update the comment for a specified traffic policy version",
      "accessLevel": "Write",
      "resourceTypes": {
        "trafficpolicy": {
          "required": true
        }
      }
    },
    "UpdateTrafficPolicyInstance": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateTrafficPolicyInstance.html",
      "description": "Grants permission to update the records in a specified hosted zone that were created based on the settings in a specified traffic policy version",
      "accessLevel": "Write",
      "resourceTypes": {
        "trafficpolicyinstance": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "change": {
      "name": "change",
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_Change.html",
      "arn": "arn:${Partition}:route53:${Region}:${Account}:change/${Id}",
      "conditionKeys": []
    },
    "delegationset": {
      "name": "delegationset",
      "url": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-reusable-delegation-set",
      "arn": "arn:${Partition}:route53:${Region}:${Account}:delegationset/${Id}",
      "conditionKeys": []
    },
    "healthcheck": {
      "name": "healthcheck",
      "url": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-health-check",
      "arn": "arn:${Partition}:route53:${Region}:${Account}:healthcheck/${Id}",
      "conditionKeys": []
    },
    "hostedzone": {
      "name": "hostedzone",
      "url": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-hosted-zone",
      "arn": "arn:${Partition}:route53:${Region}:${Account}:hostedzone/${Id}",
      "conditionKeys": []
    },
    "trafficpolicy": {
      "name": "trafficpolicy",
      "url": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-policies.html",
      "arn": "arn:${Partition}:route53:${Region}:${Account}:trafficpolicy/${Id}",
      "conditionKeys": []
    },
    "trafficpolicyinstance": {
      "name": "trafficpolicyinstance",
      "url": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-policy-records.html",
      "arn": "arn:${Partition}:route53:${Region}:${Account}:trafficpolicyinstance/${Id}",
      "conditionKeys": []
    },
    "queryloggingconfig": {
      "name": "queryloggingconfig",
      "url": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html",
      "arn": "arn:${Partition}:route53:${Region}:${Account}:queryloggingconfig/${Id}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service route53
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to associate an additional Amazon VPC with a private hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_AssociateVPCWithHostedZone.html
   */
  public associateVPCWithHostedZone() {
    this.add('route53:AssociateVPCWithHostedZone');
    return this;
  }

  /**
   * Grants permission to create, update, or delete a record, which contains authoritative DNS information for a specified domain or subdomain name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html
   */
  public changeResourceRecordSets() {
    this.add('route53:ChangeResourceRecordSets');
    return this;
  }

  /**
   * Grants permission to add, edit, or delete tags for a health check or a hosted zone
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeTagsForResource.html
   */
  public changeTagsForResource() {
    this.add('route53:ChangeTagsForResource');
    return this;
  }

  /**
   * Grants permission to create a new health check, which monitors the health and performance of your web applications, web servers, and other resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHealthCheck.html
   */
  public createHealthCheck() {
    this.add('route53:CreateHealthCheck');
    return this;
  }

  /**
   * Grants permission to create a public hosted zone, which you use to specify how the Domain Name System (DNS) routes traffic on the Internet for a domain, such as example.com, and its subdomains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html
   */
  public createHostedZone() {
    this.add('route53:CreateHostedZone');
    return this;
  }

  /**
   * Grants permission to create a configuration for DNS query logging
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html
   */
  public createQueryLoggingConfig() {
    this.add('route53:CreateQueryLoggingConfig');
    return this;
  }

  /**
   * Grants permission to create a delegation set (a group of four name servers) that can be reused by multiple hosted zones
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html
   */
  public createReusableDelegationSet() {
    this.add('route53:CreateReusableDelegationSet');
    return this;
  }

  /**
   * Grants permission to create a traffic policy, which you use to create multiple DNS records for one domain name (such as example.com) or one subdomain name (such as www.example.com)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html
   */
  public createTrafficPolicy() {
    this.add('route53:CreateTrafficPolicy');
    return this;
  }

  /**
   * Grants permission to create records in a specified hosted zone based on the settings in a specified traffic policy version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicyInstance.html
   */
  public createTrafficPolicyInstance() {
    this.add('route53:CreateTrafficPolicyInstance');
    return this;
  }

  /**
   * Grants permission to create a new version of an existing traffic policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicyVersion.html
   */
  public createTrafficPolicyVersion() {
    this.add('route53:CreateTrafficPolicyVersion');
    return this;
  }

  /**
   * Grants permission to authorize the AWS account that created a specified VPC to submit an AssociateVPCWithHostedZone request, which associates the VPC with a specified hosted zone that was created by a different account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateVPCAssociationAuthorization.html
   */
  public createVPCAssociationAuthorization() {
    this.add('route53:CreateVPCAssociationAuthorization');
    return this;
  }

  /**
   * Grants permission to delete a health check
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHealthCheck.html
   */
  public deleteHealthCheck() {
    this.add('route53:DeleteHealthCheck');
    return this;
  }

  /**
   * Grants permission to delete a hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html
   */
  public deleteHostedZone() {
    this.add('route53:DeleteHostedZone');
    return this;
  }

  /**
   * Grants permission to delete a configuration for DNS query logging
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteQueryLoggingConfig.html
   */
  public deleteQueryLoggingConfig() {
    this.add('route53:DeleteQueryLoggingConfig');
    return this;
  }

  /**
   * Grants permission to delete a reusable delegation set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteReusableDelegationSet.html
   */
  public deleteReusableDelegationSet() {
    this.add('route53:DeleteReusableDelegationSet');
    return this;
  }

  /**
   * Grants permission to delete a traffic policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html
   */
  public deleteTrafficPolicy() {
    this.add('route53:DeleteTrafficPolicy');
    return this;
  }

  /**
   * Grants permission to delete a traffic policy instance and all the records that Route 53 created when you created the instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicyInstance.html
   */
  public deleteTrafficPolicyInstance() {
    this.add('route53:DeleteTrafficPolicyInstance');
    return this;
  }

  /**
   * Grants permission to remove authorization for associating an Amazon Virtual Private Cloud with a Route 53 private hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteVPCAssociationAuthorization.html
   */
  public deleteVPCAssociationAuthorization() {
    this.add('route53:DeleteVPCAssociationAuthorization');
    return this;
  }

  /**
   * Grants permission to disassociate an Amazon Virtual Private Cloud from a Route 53 private hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DisassociateVPCFromHostedZone.html
   */
  public disassociateVPCFromHostedZone() {
    this.add('route53:DisassociateVPCFromHostedZone');
    return this;
  }

  /**
   * Grants permission to get the specified limit for the current account, for example, the maximum number of health checks that you can create using the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html
   */
  public getAccountLimit() {
    this.add('route53:GetAccountLimit');
    return this;
  }

  /**
   * Grants permission to get the current status of a request to create, update, or delete one or more records
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html
   */
  public getChange() {
    this.add('route53:GetChange');
    return this;
  }

  /**
   * Grants permission to get a list of the IP ranges that are used by Route 53 health checkers to check the health of your resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetCheckerIpRanges.html
   */
  public getCheckerIpRanges() {
    this.add('route53:GetCheckerIpRanges');
    return this;
  }

  /**
   * Grants permission to get information about whether a specified geographic location is supported for Route 53 geolocation records
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetGeoLocation.html
   */
  public getGeoLocation() {
    this.add('route53:GetGeoLocation');
    return this;
  }

  /**
   * Grants permission to get information about a specified health check
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheck.html
   */
  public getHealthCheck() {
    this.add('route53:GetHealthCheck');
    return this;
  }

  /**
   * Grants permission to get the number of health checks that are associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckCount.html
   */
  public getHealthCheckCount() {
    this.add('route53:GetHealthCheckCount');
    return this;
  }

  /**
   * Grants permission to get the reason that a specified health check failed most recently
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckLastFailureReason.html
   */
  public getHealthCheckLastFailureReason() {
    this.add('route53:GetHealthCheckLastFailureReason');
    return this;
  }

  /**
   * Grants permission to get the status of a specified health check
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckStatus.html
   */
  public getHealthCheckStatus() {
    this.add('route53:GetHealthCheckStatus');
    return this;
  }

  /**
   * Grants permission to get information about a specified hosted zone including the four name servers that Route 53 assigned to the hosted zone
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZone.html
   */
  public getHostedZone() {
    this.add('route53:GetHostedZone');
    return this;
  }

  /**
   * Grants permission to get the number of hosted zones that are associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneCount.html
   */
  public getHostedZoneCount() {
    this.add('route53:GetHostedZoneCount');
    return this;
  }

  /**
   * Grants permission to get the specified limit for a specified hosted zone
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneLimit.html
   */
  public getHostedZoneLimit() {
    this.add('route53:GetHostedZoneLimit');
    return this;
  }

  /**
   * Grants permission to get information about a specified configuration for DNS query logging
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetQueryLoggingConfig.html
   */
  public getQueryLoggingConfig() {
    this.add('route53:GetQueryLoggingConfig');
    return this;
  }

  /**
   * Grants permission to get information about a specified reusable delegation set, including the four name servers that are assigned to the delegation set
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html
   */
  public getReusableDelegationSet() {
    this.add('route53:GetReusableDelegationSet');
    return this;
  }

  /**
   * Grants permission to get the maximum number of hosted zones that you can associate with the specified reusable delegation set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSetLimit.html
   */
  public getReusableDelegationSetLimit() {
    this.add('route53:GetReusableDelegationSetLimit');
    return this;
  }

  /**
   * Grants permission to get information about a specified traffic policy version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html
   */
  public getTrafficPolicy() {
    this.add('route53:GetTrafficPolicy');
    return this;
  }

  /**
   * Grants permission to get information about a specified traffic policy instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicyInstance.html
   */
  public getTrafficPolicyInstance() {
    this.add('route53:GetTrafficPolicyInstance');
    return this;
  }

  /**
   * Grants permission to get the number of traffic policy instances that are associated with the current AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicyInstanceCount.html
   */
  public getTrafficPolicyInstanceCount() {
    this.add('route53:GetTrafficPolicyInstanceCount');
    return this;
  }

  /**
   * Grants permission to get a list of geographic locations that Route 53 supports for geolocation
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListGeoLocations.html
   */
  public listGeoLocations() {
    this.add('route53:ListGeoLocations');
    return this;
  }

  /**
   * Grants permission to get a list of the health checks that are associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHealthChecks.html
   */
  public listHealthChecks() {
    this.add('route53:ListHealthChecks');
    return this;
  }

  /**
   * Grants permission to get a list of the public and private hosted zones that are associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZones.html
   */
  public listHostedZones() {
    this.add('route53:ListHostedZones');
    return this;
  }

  /**
   * Grants permission to get a list of your hosted zones in lexicographic order. Hosted zones are sorted by name with the labels reversed, for example, com.example.www.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByName.html
   */
  public listHostedZonesByName() {
    this.add('route53:ListHostedZonesByName');
    return this;
  }

  /**
   * Grants permission to list the configurations for DNS query logging that are associated with the current AWS account or the configuration that is associated with a specified hosted zone.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html
   */
  public listQueryLoggingConfigs() {
    this.add('route53:ListQueryLoggingConfigs');
    return this;
  }

  /**
   * Grants permission to list the records in a specified hosted zone
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListResourceRecordSets.html
   */
  public listResourceRecordSets() {
    this.add('route53:ListResourceRecordSets');
    return this;
  }

  /**
   * Grants permission to list the reusable delegation sets that are associated with the current AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListReusableDelegationSets.html
   */
  public listReusableDelegationSets() {
    this.add('route53:ListReusableDelegationSets');
    return this;
  }

  /**
   * Grants permission to list tags for one health check or hosted zone
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('route53:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to list tags for up to 10 health checks or hosted zones
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTagsForResources.html
   */
  public listTagsForResources() {
    this.add('route53:ListTagsForResources');
    return this;
  }

  /**
   * Grants permission to get information about the latest version for every traffic policy that is associated with the current AWS account. Policies are listed in the order in which they were created.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html
   */
  public listTrafficPolicies() {
    this.add('route53:ListTrafficPolicies');
    return this;
  }

  /**
   * Grants permission to get information about the traffic policy instances that you created by using the current AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstances.html
   */
  public listTrafficPolicyInstances() {
    this.add('route53:ListTrafficPolicyInstances');
    return this;
  }

  /**
   * Grants permission to get information about the traffic policy instances that you created in a specified hosted zone
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstancesByHostedZone.html
   */
  public listTrafficPolicyInstancesByHostedZone() {
    this.add('route53:ListTrafficPolicyInstancesByHostedZone');
    return this;
  }

  /**
   * Grants permission to get information about the traffic policy instances that you created using a specified traffic policy version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstancesByPolicy.html
   */
  public listTrafficPolicyInstancesByPolicy() {
    this.add('route53:ListTrafficPolicyInstancesByPolicy');
    return this;
  }

  /**
   * Grants permission to get information about all the versions for a specified traffic policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyVersions.html
   */
  public listTrafficPolicyVersions() {
    this.add('route53:ListTrafficPolicyVersions');
    return this;
  }

  /**
   * Grants permission to get a list of the VPCs that were created by other accounts and that can be associated with a specified hosted zone
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListVPCAssociationAuthorizations.html
   */
  public listVPCAssociationAuthorizations() {
    this.add('route53:ListVPCAssociationAuthorizations');
    return this;
  }

  /**
   * Grants permission to get the value that Route 53 returns in response to a DNS query for a specified record name and type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_TestDNSAnswer.html
   */
  public testDNSAnswer() {
    this.add('route53:TestDNSAnswer');
    return this;
  }

  /**
   * Grants permission to update an existing health check
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html
   */
  public updateHealthCheck() {
    this.add('route53:UpdateHealthCheck');
    return this;
  }

  /**
   * Grants permission to update the comment for a specified hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHostedZoneComment.html
   */
  public updateHostedZoneComment() {
    this.add('route53:UpdateHostedZoneComment');
    return this;
  }

  /**
   * Grants permission to update the comment for a specified traffic policy version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateTrafficPolicyComment.html
   */
  public updateTrafficPolicyComment() {
    this.add('route53:UpdateTrafficPolicyComment');
    return this;
  }

  /**
   * Grants permission to update the records in a specified hosted zone that were created based on the settings in a specified traffic policy version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateTrafficPolicyInstance.html
   */
  public updateTrafficPolicyInstance() {
    this.add('route53:UpdateTrafficPolicyInstance');
    return this;
  }

  /**
   * Adds a resource of type change to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_Change.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onChange(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53:${Region}:${Account}:change/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type delegationset to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-reusable-delegation-set
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDelegationset(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53:${Region}:${Account}:delegationset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type healthcheck to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-health-check
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHealthcheck(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53:${Region}:${Account}:healthcheck/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type hostedzone to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-hosted-zone
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHostedzone(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53:${Region}:${Account}:hostedzone/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type trafficpolicy to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-policies.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTrafficpolicy(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53:${Region}:${Account}:trafficpolicy/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type trafficpolicyinstance to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-policy-records.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTrafficpolicyinstance(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53:${Region}:${Account}:trafficpolicyinstance/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type queryloggingconfig to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onQueryloggingconfig(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53:${Region}:${Account}:queryloggingconfig/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
