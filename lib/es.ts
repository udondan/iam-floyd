import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service es
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticsearchservice.html
 */
export class Es extends PolicyStatement {
  public servicePrefix = 'es';
  public actions : Actions = {
    "AcceptInboundCrossClusterSearchConnection": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-acceptinboundcrossclustersearchconnection",
      "description": "Allows the destination domain owner to accept an inbound cross-cluster search connection request",
      "accessLevel": "Write"
    },
    "AddTags": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-addtags",
      "description": "Grants permission to attach resource tags to an Amazon ES domain.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "CreateElasticsearchDomain": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createelasticsearchdomain",
      "description": "Grants permission to create an Amazon ES domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": false
        }
      }
    },
    "CreateElasticsearchServiceRole": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createelasticsearchservicerole",
      "description": "Grants permission to create the service-linked role required for Amazon ES domains that use VPC access.",
      "accessLevel": "Write"
    },
    "CreateOutboundCrossClusterSearchConnection": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createoutboundcrossclustersearchconnection",
      "description": "Creates a new cross-cluster search connection from a source domain to a destination domain",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DeleteElasticsearchDomain": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteelasticsearchdomain",
      "description": "Grants permission to delete an Amazon ES domain and all of its data.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DeleteElasticsearchServiceRole": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteelasticsearchservicerole",
      "description": "Grants permission to delete the service-linked role required for Amazon ES domains that use VPC access.",
      "accessLevel": "Write"
    },
    "DeleteInboundCrossClusterSearchConnection": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteinboundcrossclustersearchconnection",
      "description": "Allows the destination domain owner to delete an existing inbound cross-cluster search connection",
      "accessLevel": "Write"
    },
    "DeleteOutboundCrossClusterSearchConnection": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteoutboundcrossclustersearchconnection",
      "description": "Allows the source domain owner to delete an existing outbound cross-cluster search connection",
      "accessLevel": "Write"
    },
    "DescribeElasticsearchDomain": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeelasticsearchdomain",
      "description": "Grants permission to view a description of the domain configuration for the specified Amazon ES domain, including the domain ID, domain service endpoint, and domain ARN.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeElasticsearchDomainConfig": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeelasticsearchdomainconfig",
      "description": "Grants permission to view a description of the configuration options and status of an Amazon ES domain.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeElasticsearchDomains": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeelasticsearchdomain",
      "description": "Grants permission to view a description of the domain configuration for up to five specified Amazon ES domains.",
      "accessLevel": "List",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeElasticsearchInstanceTypeLimits": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeinstancetypelimits",
      "description": "Grants permission to view the instance count, storage, and master node limits for a given Elasticsearch version and instance type.",
      "accessLevel": "List"
    },
    "DescribeInboundCrossClusterSearchConnections": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeinboundcrossclustersearchconnections",
      "description": "Lists all the inbound cross-cluster search connections for a destination domain",
      "accessLevel": "List"
    },
    "DescribeOutboundCrossClusterSearchConnections": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeoutboundcrossclustersearchconnections",
      "description": "Lists all the outbound cross-cluster search connections for a source domain",
      "accessLevel": "List"
    },
    "DescribeReservedElasticsearchInstanceOfferings": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describereservedelasticsearchinstanceofferings",
      "description": "Grants permission to fetch reserved instance offerings for ES",
      "accessLevel": "List"
    },
    "DescribeReservedElasticsearchInstances": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describereservedelasticsearchinstances",
      "description": "Grants permission to fetch ES reserved instances already purchased by customer",
      "accessLevel": "List"
    },
    "ESCrossClusterGet": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference",
      "description": "Grants permission to send cross-cluster requests to a destination domain.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": false
        }
      }
    },
    "ESHttpDelete": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference",
      "description": "Grants permission to send HTTP DELETE requests to the Elasticsearch APIs.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": false
        }
      }
    },
    "ESHttpGet": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference",
      "description": "Grants permission to send HTTP GET requests to the Elasticsearch APIs.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": false
        }
      }
    },
    "ESHttpHead": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference",
      "description": "Grants permission to send HTTP HEAD requests to the Elasticsearch APIs.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": false
        }
      }
    },
    "ESHttpPatch": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference",
      "description": "Grants permission to send HTTP PATCH requests to the Elasticsearch APIs.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": false
        }
      }
    },
    "ESHttpPost": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference",
      "description": "Grants permission to send HTTP POST requests to the Elasticsearch APIs.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": false
        }
      }
    },
    "ESHttpPut": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference",
      "description": "Grants permission to send HTTP PUT requests to the Elasticsearch APIs.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": false
        }
      }
    },
    "GetCompatibleElasticsearchVersions": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-getcompatibleelasticsearchversions",
      "description": "Grants permission to fetch list of compatible elastic search versions to which Amazon ES domain can be upgraded",
      "accessLevel": "List",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "GetUpgradeHistory": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-getupgradehistory",
      "description": "Grants permission to fetch upgrade history for given ES domain",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "GetUpgradeStatus": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-getupgradestatus",
      "description": "Grants permission to fetch upgrade status for given ES domain",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "ListDomainNames": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listdomainnames",
      "description": "Grants permission to display the names of all Amazon ES domains that the current user owns.",
      "accessLevel": "List"
    },
    "ListElasticsearchInstanceTypeDetails": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listelasticsearchinstancetypedetails",
      "description": "Grants permission to list all instance types and available features for a given Elasticsearch version.",
      "accessLevel": "List"
    },
    "ListElasticsearchInstanceTypes": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listelasticsearchinstancetypes",
      "description": "Grants permission to list all Elasticsearch instance types that are supported for a given Elasticsearch version.",
      "accessLevel": "List"
    },
    "ListElasticsearchVersions": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listelasticsearchversions",
      "description": "Grants permission to list all supported Elasticsearch versions on Amazon ES.",
      "accessLevel": "List"
    },
    "ListTags": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listtags",
      "description": "Grants permission to display all of the tags for an Amazon ES domain.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "PurchaseReservedElasticsearchInstanceOffering": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-purchasereservedelasticsearchinstance",
      "description": "Grants permission to purchase ES reserved instances",
      "accessLevel": "Write"
    },
    "RejectInboundCrossClusterSearchConnection": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-rejectinboundcrossclustersearchconnection",
      "description": "Allows the destination domain owner to reject an inbound cross-cluster search connection request",
      "accessLevel": "Write"
    },
    "RemoveTags": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listtags",
      "description": "Grants permission to remove tags from Amazon ES domains.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "UpdateElasticsearchDomainConfig": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-updateelasticsearchdomainconfig",
      "description": "Grants permission to modify the configuration of an Amazon ES domain, such as the instance type or number of instances.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "UpgradeElasticsearchDomain": {
      "url": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-upgradeelasticsearchdomain",
      "description": "Grants permission to initiate upgrade of elastic search domain to given version",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    }
  };

  /**
   * Allows the destination domain owner to accept an inbound cross-cluster search connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-acceptinboundcrossclustersearchconnection
   */
  public acceptInboundCrossClusterSearchConnection () {
    this.add('es:AcceptInboundCrossClusterSearchConnection');
    return this;
  }

  /**
   * Grants permission to attach resource tags to an Amazon ES domain.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-addtags
   */
  public addTags () {
    this.add('es:AddTags');
    return this;
  }

  /**
   * Grants permission to create an Amazon ES domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createelasticsearchdomain
   */
  public createElasticsearchDomain () {
    this.add('es:CreateElasticsearchDomain');
    return this;
  }

  /**
   * Grants permission to create the service-linked role required for Amazon ES domains that use VPC access.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createelasticsearchservicerole
   */
  public createElasticsearchServiceRole () {
    this.add('es:CreateElasticsearchServiceRole');
    return this;
  }

  /**
   * Creates a new cross-cluster search connection from a source domain to a destination domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createoutboundcrossclustersearchconnection
   */
  public createOutboundCrossClusterSearchConnection () {
    this.add('es:CreateOutboundCrossClusterSearchConnection');
    return this;
  }

  /**
   * Grants permission to delete an Amazon ES domain and all of its data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteelasticsearchdomain
   */
  public deleteElasticsearchDomain () {
    this.add('es:DeleteElasticsearchDomain');
    return this;
  }

  /**
   * Grants permission to delete the service-linked role required for Amazon ES domains that use VPC access.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteelasticsearchservicerole
   */
  public deleteElasticsearchServiceRole () {
    this.add('es:DeleteElasticsearchServiceRole');
    return this;
  }

  /**
   * Allows the destination domain owner to delete an existing inbound cross-cluster search connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteinboundcrossclustersearchconnection
   */
  public deleteInboundCrossClusterSearchConnection () {
    this.add('es:DeleteInboundCrossClusterSearchConnection');
    return this;
  }

  /**
   * Allows the source domain owner to delete an existing outbound cross-cluster search connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteoutboundcrossclustersearchconnection
   */
  public deleteOutboundCrossClusterSearchConnection () {
    this.add('es:DeleteOutboundCrossClusterSearchConnection');
    return this;
  }

  /**
   * Grants permission to view a description of the domain configuration for the specified Amazon ES domain, including the domain ID, domain service endpoint, and domain ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeelasticsearchdomain
   */
  public describeElasticsearchDomain () {
    this.add('es:DescribeElasticsearchDomain');
    return this;
  }

  /**
   * Grants permission to view a description of the configuration options and status of an Amazon ES domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeelasticsearchdomainconfig
   */
  public describeElasticsearchDomainConfig () {
    this.add('es:DescribeElasticsearchDomainConfig');
    return this;
  }

  /**
   * Grants permission to view a description of the domain configuration for up to five specified Amazon ES domains.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeelasticsearchdomain
   */
  public describeElasticsearchDomains () {
    this.add('es:DescribeElasticsearchDomains');
    return this;
  }

  /**
   * Grants permission to view the instance count, storage, and master node limits for a given Elasticsearch version and instance type.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeinstancetypelimits
   */
  public describeElasticsearchInstanceTypeLimits () {
    this.add('es:DescribeElasticsearchInstanceTypeLimits');
    return this;
  }

  /**
   * Lists all the inbound cross-cluster search connections for a destination domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeinboundcrossclustersearchconnections
   */
  public describeInboundCrossClusterSearchConnections () {
    this.add('es:DescribeInboundCrossClusterSearchConnections');
    return this;
  }

  /**
   * Lists all the outbound cross-cluster search connections for a source domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeoutboundcrossclustersearchconnections
   */
  public describeOutboundCrossClusterSearchConnections () {
    this.add('es:DescribeOutboundCrossClusterSearchConnections');
    return this;
  }

  /**
   * Grants permission to fetch reserved instance offerings for ES
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describereservedelasticsearchinstanceofferings
   */
  public describeReservedElasticsearchInstanceOfferings () {
    this.add('es:DescribeReservedElasticsearchInstanceOfferings');
    return this;
  }

  /**
   * Grants permission to fetch ES reserved instances already purchased by customer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describereservedelasticsearchinstances
   */
  public describeReservedElasticsearchInstances () {
    this.add('es:DescribeReservedElasticsearchInstances');
    return this;
  }

  /**
   * Grants permission to send cross-cluster requests to a destination domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public eSCrossClusterGet () {
    this.add('es:ESCrossClusterGet');
    return this;
  }

  /**
   * Grants permission to send HTTP DELETE requests to the Elasticsearch APIs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public eSHttpDelete () {
    this.add('es:ESHttpDelete');
    return this;
  }

  /**
   * Grants permission to send HTTP GET requests to the Elasticsearch APIs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public eSHttpGet () {
    this.add('es:ESHttpGet');
    return this;
  }

  /**
   * Grants permission to send HTTP HEAD requests to the Elasticsearch APIs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public eSHttpHead () {
    this.add('es:ESHttpHead');
    return this;
  }

  /**
   * Grants permission to send HTTP PATCH requests to the Elasticsearch APIs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public eSHttpPatch () {
    this.add('es:ESHttpPatch');
    return this;
  }

  /**
   * Grants permission to send HTTP POST requests to the Elasticsearch APIs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public eSHttpPost () {
    this.add('es:ESHttpPost');
    return this;
  }

  /**
   * Grants permission to send HTTP PUT requests to the Elasticsearch APIs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public eSHttpPut () {
    this.add('es:ESHttpPut');
    return this;
  }

  /**
   * Grants permission to fetch list of compatible elastic search versions to which Amazon ES domain can be upgraded
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-getcompatibleelasticsearchversions
   */
  public getCompatibleElasticsearchVersions () {
    this.add('es:GetCompatibleElasticsearchVersions');
    return this;
  }

  /**
   * Grants permission to fetch upgrade history for given ES domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-getupgradehistory
   */
  public getUpgradeHistory () {
    this.add('es:GetUpgradeHistory');
    return this;
  }

  /**
   * Grants permission to fetch upgrade status for given ES domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-getupgradestatus
   */
  public getUpgradeStatus () {
    this.add('es:GetUpgradeStatus');
    return this;
  }

  /**
   * Grants permission to display the names of all Amazon ES domains that the current user owns.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listdomainnames
   */
  public listDomainNames () {
    this.add('es:ListDomainNames');
    return this;
  }

  /**
   * Grants permission to list all instance types and available features for a given Elasticsearch version.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listelasticsearchinstancetypedetails
   */
  public listElasticsearchInstanceTypeDetails () {
    this.add('es:ListElasticsearchInstanceTypeDetails');
    return this;
  }

  /**
   * Grants permission to list all Elasticsearch instance types that are supported for a given Elasticsearch version.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listelasticsearchinstancetypes
   */
  public listElasticsearchInstanceTypes () {
    this.add('es:ListElasticsearchInstanceTypes');
    return this;
  }

  /**
   * Grants permission to list all supported Elasticsearch versions on Amazon ES.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listelasticsearchversions
   */
  public listElasticsearchVersions () {
    this.add('es:ListElasticsearchVersions');
    return this;
  }

  /**
   * Grants permission to display all of the tags for an Amazon ES domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listtags
   */
  public listTags () {
    this.add('es:ListTags');
    return this;
  }

  /**
   * Grants permission to purchase ES reserved instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-purchasereservedelasticsearchinstance
   */
  public purchaseReservedElasticsearchInstanceOffering () {
    this.add('es:PurchaseReservedElasticsearchInstanceOffering');
    return this;
  }

  /**
   * Allows the destination domain owner to reject an inbound cross-cluster search connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-rejectinboundcrossclustersearchconnection
   */
  public rejectInboundCrossClusterSearchConnection () {
    this.add('es:RejectInboundCrossClusterSearchConnection');
    return this;
  }

  /**
   * Grants permission to remove tags from Amazon ES domains.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listtags
   */
  public removeTags () {
    this.add('es:RemoveTags');
    return this;
  }

  /**
   * Grants permission to modify the configuration of an Amazon ES domain, such as the instance type or number of instances.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-updateelasticsearchdomainconfig
   */
  public updateElasticsearchDomainConfig () {
    this.add('es:UpdateElasticsearchDomainConfig');
    return this;
  }

  /**
   * Grants permission to initiate upgrade of elastic search domain to given version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-upgradeelasticsearchdomain
   */
  public upgradeElasticsearchDomain () {
    this.add('es:UpgradeElasticsearchDomain');
    return this;
  }
}
