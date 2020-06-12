import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service networkmanager
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_networkmanager.html
 */
export class Networkmanager extends PolicyStatement {
  public servicePrefix = 'networkmanager';
  public actions : Actions = {
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
  public resourceTypes : ResourceTypes = {
    "global-network": {
      "name": "global-network",
      "arn": "arn:${Partition}:networkmanager::${Account}:global-network/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "site": {
      "name": "site",
      "arn": "arn:${Partition}:networkmanager::${Account}:site/${GlobalNetworkId}/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "link": {
      "name": "link",
      "arn": "arn:${Partition}:networkmanager::${Account}:link/${GlobalNetworkId}/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "device": {
      "name": "device",
      "arn": "arn:${Partition}:networkmanager::${Account}:device/${GlobalNetworkId}/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Grants permission to associate a customer gateway to a device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateCustomerGateway.html
   */
  public associateCustomerGateway () {
    this.add('networkmanager:AssociateCustomerGateway');
    return this;
  }

  /**
   * Grants permission to associate a link to a device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateLink.html
   */
  public associateLink () {
    this.add('networkmanager:AssociateLink');
    return this;
  }

  /**
   * Grants permission to create a new device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateDevice.html
   */
  public createDevice () {
    this.add('networkmanager:CreateDevice');
    return this;
  }

  /**
   * Grants permission to create a new global network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateGlobalNetwork.html
   */
  public createGlobalNetwork () {
    this.add('networkmanager:CreateGlobalNetwork');
    return this;
  }

  /**
   * Grants permission to create a new link
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateLink.html
   */
  public createLink () {
    this.add('networkmanager:CreateLink');
    return this;
  }

  /**
   * Grants permission to create a new site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateSite.html
   */
  public createSite () {
    this.add('networkmanager:CreateSite');
    return this;
  }

  /**
   * Grants permission to delete a device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteDevice.html
   */
  public deleteDevice () {
    this.add('networkmanager:DeleteDevice');
    return this;
  }

  /**
   * Grants permission to delete a global network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteGlobalNetwork.html
   */
  public deleteGlobalNetwork () {
    this.add('networkmanager:DeleteGlobalNetwork');
    return this;
  }

  /**
   * Grants permission to delete a link
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteLink.html
   */
  public deleteLink () {
    this.add('networkmanager:DeleteLink');
    return this;
  }

  /**
   * Grants permission to delete a site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteSite.html
   */
  public deleteSite () {
    this.add('networkmanager:DeleteSite');
    return this;
  }

  /**
   * Grants permission to deregister a transit gateway from a global network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeregisterTransitGateway.html
   */
  public deregisterTransitGateway () {
    this.add('networkmanager:DeregisterTransitGateway');
    return this;
  }

  /**
   * Grants permission to describe global networks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DescribeGlobalNetworks.html
   */
  public describeGlobalNetworks () {
    this.add('networkmanager:DescribeGlobalNetworks');
    return this;
  }

  /**
   * Grants permission to disassociate a customer gateway from a device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateCustomerGateway.html
   */
  public disassociateCustomerGateway () {
    this.add('networkmanager:DisassociateCustomerGateway');
    return this;
  }

  /**
   * Grants permission to disassociate a link from a device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateLink.html
   */
  public disassociateLink () {
    this.add('networkmanager:DisassociateLink');
    return this;
  }

  /**
   * Grants permission to describe customer gateway associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCustomerGatewayAssociations.html
   */
  public getCustomerGatewayAssociations () {
    this.add('networkmanager:GetCustomerGatewayAssociations');
    return this;
  }

  /**
   * Grants permission to describe devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetDevices.html
   */
  public getDevices () {
    this.add('networkmanager:GetDevices');
    return this;
  }

  /**
   * Grants permission to describe link associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetLinkAssociations.html
   */
  public getLinkAssociations () {
    this.add('networkmanager:GetLinkAssociations');
    return this;
  }

  /**
   * Grants permission to describe links
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetLinks.html
   */
  public getLinks () {
    this.add('networkmanager:GetLinks');
    return this;
  }

  /**
   * Grants permission to describe global networks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetSites.html
   */
  public getSites () {
    this.add('networkmanager:GetSites');
    return this;
  }

  /**
   * Grants permission to describe transit gateway registrations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayRegistrations.html
   */
  public getTransitGatewayRegistrations () {
    this.add('networkmanager:GetTransitGatewayRegistrations');
    return this;
  }

  /**
   * Grants permission to lists tag for a Network Manager resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource () {
    this.add('networkmanager:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to register a transit gateway to a global network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RegisterTransitGateway.html
   */
  public registerTransitGateway () {
    this.add('networkmanager:RegisterTransitGateway');
    return this;
  }

  /**
   * Grants permission to tag a Network Manager resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_TagResource.html
   */
  public tagResource () {
    this.add('networkmanager:TagResource');
    return this;
  }

  /**
   * Grants permission to untag a Network Manager resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UntagResource.html
   */
  public untagResource () {
    this.add('networkmanager:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateDevice.html
   */
  public updateDevice () {
    this.add('networkmanager:UpdateDevice');
    return this;
  }

  /**
   * Grants permission to update a global network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateGlobalNetwork.html
   */
  public updateGlobalNetwork () {
    this.add('networkmanager:UpdateGlobalNetwork');
    return this;
  }

  /**
   * Grants permission to update a link
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateLink.html
   */
  public updateLink () {
    this.add('networkmanager:UpdateLink');
    return this;
  }

  /**
   * Grants permission to update a site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateSite.html
   */
  public updateSite () {
    this.add('networkmanager:UpdateSite');
    return this;
  }
}
