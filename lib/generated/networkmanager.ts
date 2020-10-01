import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [networkmanager](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_networkmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Networkmanager extends PolicyStatement {
  public servicePrefix = 'networkmanager';
  protected actionList: Actions = {
    "AssociateCustomerGateway": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateCustomerGateway.html",
      "description": "Grants permission to associate a customer gateway to a device",
      "accessLevel": "Write",
      "resourceTypes": {
        "device": {
          "required": true
        },
        "global-network": {
          "required": true
        },
        "link": {
          "required": false
        }
      },
      "conditions": [
        "networkmanager:cgwArn"
      ]
    },
    "AssociateLink": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateLink.html",
      "description": "Grants permission to associate a link to a device",
      "accessLevel": "Write",
      "resourceTypes": {
        "device": {
          "required": true
        },
        "global-network": {
          "required": true
        },
        "link": {
          "required": true
        }
      }
    },
    "CreateDevice": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateDevice.html",
      "description": "Grants permission to create a new device",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-network": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateGlobalNetwork": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateGlobalNetwork.html",
      "description": "Grants permission to create a new global network",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:CreateServiceLinkedRole"
      ],
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateLink": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateLink.html",
      "description": "Grants permission to create a new link",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-network": {
          "required": true
        },
        "site": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateSite": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateSite.html",
      "description": "Grants permission to create a new site",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-network": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteDevice": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteDevice.html",
      "description": "Grants permission to delete a device",
      "accessLevel": "Write",
      "resourceTypes": {
        "device": {
          "required": true
        },
        "global-network": {
          "required": true
        }
      }
    },
    "DeleteGlobalNetwork": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteGlobalNetwork.html",
      "description": "Grants permission to delete a global network",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-network": {
          "required": true
        }
      }
    },
    "DeleteLink": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteLink.html",
      "description": "Grants permission to delete a link",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-network": {
          "required": true
        },
        "link": {
          "required": true
        }
      }
    },
    "DeleteSite": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteSite.html",
      "description": "Grants permission to delete a site",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-network": {
          "required": true
        },
        "site": {
          "required": true
        }
      }
    },
    "DeregisterTransitGateway": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeregisterTransitGateway.html",
      "description": "Grants permission to deregister a transit gateway from a global network",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-network": {
          "required": true
        }
      },
      "conditions": [
        "networkmanager:tgwArn"
      ]
    },
    "DescribeGlobalNetworks": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DescribeGlobalNetworks.html",
      "description": "Grants permission to describe global networks",
      "accessLevel": "List",
      "resourceTypes": {
        "global-network": {
          "required": false
        }
      }
    },
    "DisassociateCustomerGateway": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateCustomerGateway.html",
      "description": "Grants permission to disassociate a customer gateway from a device",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-network": {
          "required": true
        }
      },
      "conditions": [
        "networkmanager:cgwArn"
      ]
    },
    "DisassociateLink": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateLink.html",
      "description": "Grants permission to disassociate a link from a device",
      "accessLevel": "Write",
      "resourceTypes": {
        "device": {
          "required": true
        },
        "global-network": {
          "required": true
        },
        "link": {
          "required": true
        }
      }
    },
    "GetCustomerGatewayAssociations": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCustomerGatewayAssociations.html",
      "description": "Grants permission to describe customer gateway associations",
      "accessLevel": "List",
      "resourceTypes": {
        "global-network": {
          "required": true
        }
      }
    },
    "GetDevices": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetDevices.html",
      "description": "Grants permission to describe devices",
      "accessLevel": "List",
      "resourceTypes": {
        "global-network": {
          "required": true
        },
        "device": {
          "required": false
        }
      }
    },
    "GetLinkAssociations": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetLinkAssociations.html",
      "description": "Grants permission to describe link associations",
      "accessLevel": "List",
      "resourceTypes": {
        "global-network": {
          "required": true
        },
        "device": {
          "required": false
        },
        "link": {
          "required": false
        }
      }
    },
    "GetLinks": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetLinks.html",
      "description": "Grants permission to describe links",
      "accessLevel": "List",
      "resourceTypes": {
        "global-network": {
          "required": true
        },
        "link": {
          "required": false
        }
      }
    },
    "GetSites": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetSites.html",
      "description": "Grants permission to describe global networks",
      "accessLevel": "List",
      "resourceTypes": {
        "global-network": {
          "required": true
        },
        "site": {
          "required": false
        }
      }
    },
    "GetTransitGatewayRegistrations": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayRegistrations.html",
      "description": "Grants permission to describe transit gateway registrations",
      "accessLevel": "List",
      "resourceTypes": {
        "global-network": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to lists tag for a Network Manager resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "device": {
          "required": false
        },
        "global-network": {
          "required": false
        },
        "link": {
          "required": false
        },
        "site": {
          "required": false
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "RegisterTransitGateway": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RegisterTransitGateway.html",
      "description": "Grants permission to register a transit gateway to a global network",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-network": {
          "required": true
        }
      },
      "conditions": [
        "networkmanager:tgwArn"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to tag a Network Manager resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "device": {
          "required": false
        },
        "global-network": {
          "required": false
        },
        "link": {
          "required": false
        },
        "site": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to untag a Network Manager resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "device": {
          "required": false
        },
        "global-network": {
          "required": false
        },
        "link": {
          "required": false
        },
        "site": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateDevice": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateDevice.html",
      "description": "Grants permission to update a device",
      "accessLevel": "Write",
      "resourceTypes": {
        "device": {
          "required": true
        },
        "global-network": {
          "required": true
        }
      }
    },
    "UpdateGlobalNetwork": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateGlobalNetwork.html",
      "description": "Grants permission to update a global network",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-network": {
          "required": true
        }
      }
    },
    "UpdateLink": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateLink.html",
      "description": "Grants permission to update a link",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-network": {
          "required": true
        },
        "link": {
          "required": true
        }
      }
    },
    "UpdateSite": {
      "url": "https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateSite.html",
      "description": "Grants permission to update a site",
      "accessLevel": "Write",
      "resourceTypes": {
        "global-network": {
          "required": true
        },
        "site": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "global-network": {
      "name": "global-network",
      "url": "https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html/",
      "arn": "arn:${Partition}:networkmanager::${Account}:global-network/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "site": {
      "name": "site",
      "url": "https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html/",
      "arn": "arn:${Partition}:networkmanager::${Account}:site/${GlobalNetworkId}/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "link": {
      "name": "link",
      "url": "https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html/",
      "arn": "arn:${Partition}:networkmanager::${Account}:link/${GlobalNetworkId}/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "device": {
      "name": "device",
      "url": "https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html/",
      "arn": "arn:${Partition}:networkmanager::${Account}:device/${GlobalNetworkId}/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [networkmanager](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_networkmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a customer gateway to a device
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCgwArn()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateCustomerGateway.html
   */
  public toAssociateCustomerGateway() {
    this.to('networkmanager:AssociateCustomerGateway');
    return this;
  }

  /**
   * Grants permission to associate a link to a device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateLink.html
   */
  public toAssociateLink() {
    this.to('networkmanager:AssociateLink');
    return this;
  }

  /**
   * Grants permission to create a new device
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateDevice.html
   */
  public toCreateDevice() {
    this.to('networkmanager:CreateDevice');
    return this;
  }

  /**
   * Grants permission to create a new global network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateGlobalNetwork.html
   */
  public toCreateGlobalNetwork() {
    this.to('networkmanager:CreateGlobalNetwork');
    return this;
  }

  /**
   * Grants permission to create a new link
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateLink.html
   */
  public toCreateLink() {
    this.to('networkmanager:CreateLink');
    return this;
  }

  /**
   * Grants permission to create a new site
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateSite.html
   */
  public toCreateSite() {
    this.to('networkmanager:CreateSite');
    return this;
  }

  /**
   * Grants permission to delete a device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteDevice.html
   */
  public toDeleteDevice() {
    this.to('networkmanager:DeleteDevice');
    return this;
  }

  /**
   * Grants permission to delete a global network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteGlobalNetwork.html
   */
  public toDeleteGlobalNetwork() {
    this.to('networkmanager:DeleteGlobalNetwork');
    return this;
  }

  /**
   * Grants permission to delete a link
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteLink.html
   */
  public toDeleteLink() {
    this.to('networkmanager:DeleteLink');
    return this;
  }

  /**
   * Grants permission to delete a site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteSite.html
   */
  public toDeleteSite() {
    this.to('networkmanager:DeleteSite');
    return this;
  }

  /**
   * Grants permission to deregister a transit gateway from a global network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTgwArn()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeregisterTransitGateway.html
   */
  public toDeregisterTransitGateway() {
    this.to('networkmanager:DeregisterTransitGateway');
    return this;
  }

  /**
   * Grants permission to describe global networks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DescribeGlobalNetworks.html
   */
  public toDescribeGlobalNetworks() {
    this.to('networkmanager:DescribeGlobalNetworks');
    return this;
  }

  /**
   * Grants permission to disassociate a customer gateway from a device
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCgwArn()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateCustomerGateway.html
   */
  public toDisassociateCustomerGateway() {
    this.to('networkmanager:DisassociateCustomerGateway');
    return this;
  }

  /**
   * Grants permission to disassociate a link from a device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateLink.html
   */
  public toDisassociateLink() {
    this.to('networkmanager:DisassociateLink');
    return this;
  }

  /**
   * Grants permission to describe customer gateway associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCustomerGatewayAssociations.html
   */
  public toGetCustomerGatewayAssociations() {
    this.to('networkmanager:GetCustomerGatewayAssociations');
    return this;
  }

  /**
   * Grants permission to describe devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetDevices.html
   */
  public toGetDevices() {
    this.to('networkmanager:GetDevices');
    return this;
  }

  /**
   * Grants permission to describe link associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetLinkAssociations.html
   */
  public toGetLinkAssociations() {
    this.to('networkmanager:GetLinkAssociations');
    return this;
  }

  /**
   * Grants permission to describe links
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetLinks.html
   */
  public toGetLinks() {
    this.to('networkmanager:GetLinks');
    return this;
  }

  /**
   * Grants permission to describe global networks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetSites.html
   */
  public toGetSites() {
    this.to('networkmanager:GetSites');
    return this;
  }

  /**
   * Grants permission to describe transit gateway registrations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayRegistrations.html
   */
  public toGetTransitGatewayRegistrations() {
    this.to('networkmanager:GetTransitGatewayRegistrations');
    return this;
  }

  /**
   * Grants permission to lists tag for a Network Manager resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('networkmanager:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to register a transit gateway to a global network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTgwArn()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RegisterTransitGateway.html
   */
  public toRegisterTransitGateway() {
    this.to('networkmanager:RegisterTransitGateway');
    return this;
  }

  /**
   * Grants permission to tag a Network Manager resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('networkmanager:TagResource');
    return this;
  }

  /**
   * Grants permission to untag a Network Manager resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('networkmanager:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateDevice.html
   */
  public toUpdateDevice() {
    this.to('networkmanager:UpdateDevice');
    return this;
  }

  /**
   * Grants permission to update a global network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateGlobalNetwork.html
   */
  public toUpdateGlobalNetwork() {
    this.to('networkmanager:UpdateGlobalNetwork');
    return this;
  }

  /**
   * Grants permission to update a link
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateLink.html
   */
  public toUpdateLink() {
    this.to('networkmanager:UpdateLink');
    return this;
  }

  /**
   * Grants permission to update a site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateSite.html
   */
  public toUpdateSite() {
    this.to('networkmanager:UpdateSite');
    return this;
  }

  /**
   * Adds a resource of type global-network to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html/
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGlobalNetwork(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:networkmanager::${Account}:global-network/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type site to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html/
   *
   * @param globalNetworkId - Identifier for the globalNetworkId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSite(globalNetworkId: string, resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:networkmanager::${Account}:site/${GlobalNetworkId}/${ResourceId}';
    arn = arn.replace('${GlobalNetworkId}', globalNetworkId);
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type link to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html/
   *
   * @param globalNetworkId - Identifier for the globalNetworkId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLink(globalNetworkId: string, resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:networkmanager::${Account}:link/${GlobalNetworkId}/${ResourceId}';
    arn = arn.replace('${GlobalNetworkId}', globalNetworkId);
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type device to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html/
   *
   * @param globalNetworkId - Identifier for the globalNetworkId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevice(globalNetworkId: string, resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:networkmanager::${Account}:device/${GlobalNetworkId}/${ResourceId}';
    arn = arn.replace('${GlobalNetworkId}', globalNetworkId);
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Controls which customer gateways can be associated or disassociated
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html
   *
   * Applies to actions:
   * - .toAssociateCustomerGateway()
   * - .toDisassociateCustomerGateway()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCgwArn(value: string | string[], operator?: string) {
    return this.if(`networkmanager:cgwArn`, value, operator || 'StringLike');
  }

  /**
   * Controls which transit gateways can be registered or deregistered
   *
   * https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html
   *
   * Applies to actions:
   * - .toDeregisterTransitGateway()
   * - .toRegisterTransitGateway()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTgwArn(value: string | string[], operator?: string) {
    return this.if(`networkmanager:tgwArn`, value, operator || 'StringLike');
  }
}
