import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [worklink](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworklink.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Worklink extends PolicyStatement {
  public servicePrefix = 'worklink';
  protected actionList: Actions = {
    "AssociateDomain": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_AssociateDomain.html",
      "description": "Grants permission to associate a domain with an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "AssociateWebsiteAuthorizationProvider": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_AssociateWebsiteAuthorizationProvider.html",
      "description": "Grants permission to associate a website authorization provider with an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "AssociateWebsiteCertificateAuthority": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_AssociateWebsiteCertificateAuthority.html",
      "description": "Grants permission to associate a website certificate authority with an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "CreateFleet": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_CreateFleet.html",
      "description": "Grants permission to create an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteFleet": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_DeleteFleet.html",
      "description": "Grants permission to delete an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DescribeAuditStreamConfiguration": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_DescribeAuditStreamConfiguration.html",
      "description": "Grants permission to describe the audit stream configuration for an Amazon WorkLink fleet",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DescribeCompanyNetworkConfiguration": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_DescribeCompanyNetworkConfiguration.html",
      "description": "Grants permission to describe the company network configuration for an Amazon WorkLink fleet",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DescribeDevice": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDevice.html",
      "description": "Grants permission to describe details of a device associated with an Amazon WorkLink fleet",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DescribeDevicePolicyConfiguration": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDevicePolicyConfiguration.html",
      "description": "Grants permission to describe the device policy configuration for an Amazon WorkLink fleet",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DescribeDomain": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDomain.html",
      "description": "Grants permission to describe details about a domain associated with an Amazon WorkLink fleet",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DescribeFleetMetadata": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_DescribeFleetMetadata.html",
      "description": "Grants permission to describe metadata of an Amazon WorkLink fleet",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DescribeIdentityProviderConfiguration": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_DescribeIdentityProviderConfiguration.html",
      "description": "Grants permission to describe the identity provider configuration for an Amazon WorkLink fleet",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DescribeWebsiteCertificateAuthority": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_DescribeWebsiteCertificateAuthority.html",
      "description": "Grants permission to describe a website certificate authority associated with an Amazon WorkLink fleet",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DisassociateDomain": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateDomain.html",
      "description": "Grants permission to disassociate a domain from an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DisassociateWebsiteAuthorizationProvider": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateWebsiteAuthorizationProvider.html",
      "description": "Grants permission to disassociate a website authorization provider from an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "DisassociateWebsiteCertificateAuthority": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateWebsiteCertificateAuthority.html",
      "description": "Grants permission to disassociate a website certificate authority from an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "ListDevices": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_ListDevices.html",
      "description": "Grants permission to list the devices associated with an Amazon WorkLink fleet",
      "accessLevel": "List",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "ListDomains": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_ListDomains.html",
      "description": "Grants permission to list the associated domains for an Amazon WorkLink fleet",
      "accessLevel": "List",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "ListFleets": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_ListFleets.html",
      "description": "Grants permission to list the Amazon WorkLink fleets associated with the account",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_ListTagsForResource.html",
      "description": "Grants permission to list tags for a resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "ListWebsiteAuthorizationProviders": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_ListWebsiteAuthorizationProviders.html",
      "description": "Grants permission to list the website authorization providers for an Amazon WorkLink fleet",
      "accessLevel": "List",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "ListWebsiteCertificateAuthorities": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_ListWebsiteCertificateAuthorities.html",
      "description": "Grants permission to list the website certificate authorities associated with an Amazon WorkLink fleet",
      "accessLevel": "List",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "RestoreDomainAccess": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_RestoreDomainAccess.html",
      "description": "Grants permission to restore access to a domain associated with an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "RevokeDomainAccess": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_RevokeDomainAccess.html",
      "description": "Grants permission to revoke access to a domain associated with an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "SignOutUser": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_SignOutUser.html",
      "description": "Grants permission to sign out a user from an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_TagResource.html",
      "description": "Grants permission to add one or more tags to a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_UntagResource.html",
      "description": "Grants permission to remove one or more tags from a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateAuditStreamConfiguration": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_UpdateAuditStreamConfiguration.html",
      "description": "Grants permission to update the audit stream configuration for an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "UpdateCompanyNetworkConfiguration": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_UpdateCompanyNetworkConfiguration.html",
      "description": "Grants permission to update the company network configuration for an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "UpdateDevicePolicyConfiguration": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_UpdateDevicePolicyConfiguration.html",
      "description": "Grants permission to update the device policy configuration for an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "UpdateDomainMetadata": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_UpdateDomainMetadata.html",
      "description": "Grants permission to update the metadata for a domain associated with an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "UpdateFleetMetadata": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_UpdateFleetMetadata.html",
      "description": "Grants permission to update the metadata of an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    },
    "UpdateIdentityProviderConfiguration": {
      "url": "https://docs.aws.amazon.com/worklink/latest/api/API_UpdateIdentityProviderConfiguration.html",
      "description": "Grants permission to update the identity provider configuration for an Amazon WorkLink fleet",
      "accessLevel": "Write",
      "resourceTypes": {
        "fleet": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "fleet": {
      "name": "fleet",
      "url": "https://docs.aws.amazon.com/worklink/latest/api/worklink-resources.html#Fleet",
      "arn": "arn:${Partition}:worklink::${Account}:fleet/${FleetName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [worklink](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworklink.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a domain with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_AssociateDomain.html
   */
  public toAssociateDomain() {
    this.to('worklink:AssociateDomain');
    return this;
  }

  /**
   * Grants permission to associate a website authorization provider with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_AssociateWebsiteAuthorizationProvider.html
   */
  public toAssociateWebsiteAuthorizationProvider() {
    this.to('worklink:AssociateWebsiteAuthorizationProvider');
    return this;
  }

  /**
   * Grants permission to associate a website certificate authority with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_AssociateWebsiteCertificateAuthority.html
   */
  public toAssociateWebsiteCertificateAuthority() {
    this.to('worklink:AssociateWebsiteCertificateAuthority');
    return this;
  }

  /**
   * Grants permission to create an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_CreateFleet.html
   */
  public toCreateFleet() {
    this.to('worklink:CreateFleet');
    return this;
  }

  /**
   * Grants permission to delete an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DeleteFleet.html
   */
  public toDeleteFleet() {
    this.to('worklink:DeleteFleet');
    return this;
  }

  /**
   * Grants permission to describe the audit stream configuration for an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeAuditStreamConfiguration.html
   */
  public toDescribeAuditStreamConfiguration() {
    this.to('worklink:DescribeAuditStreamConfiguration');
    return this;
  }

  /**
   * Grants permission to describe the company network configuration for an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeCompanyNetworkConfiguration.html
   */
  public toDescribeCompanyNetworkConfiguration() {
    this.to('worklink:DescribeCompanyNetworkConfiguration');
    return this;
  }

  /**
   * Grants permission to describe details of a device associated with an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDevice.html
   */
  public toDescribeDevice() {
    this.to('worklink:DescribeDevice');
    return this;
  }

  /**
   * Grants permission to describe the device policy configuration for an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDevicePolicyConfiguration.html
   */
  public toDescribeDevicePolicyConfiguration() {
    this.to('worklink:DescribeDevicePolicyConfiguration');
    return this;
  }

  /**
   * Grants permission to describe details about a domain associated with an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDomain.html
   */
  public toDescribeDomain() {
    this.to('worklink:DescribeDomain');
    return this;
  }

  /**
   * Grants permission to describe metadata of an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeFleetMetadata.html
   */
  public toDescribeFleetMetadata() {
    this.to('worklink:DescribeFleetMetadata');
    return this;
  }

  /**
   * Grants permission to describe the identity provider configuration for an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeIdentityProviderConfiguration.html
   */
  public toDescribeIdentityProviderConfiguration() {
    this.to('worklink:DescribeIdentityProviderConfiguration');
    return this;
  }

  /**
   * Grants permission to describe a website certificate authority associated with an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeWebsiteCertificateAuthority.html
   */
  public toDescribeWebsiteCertificateAuthority() {
    this.to('worklink:DescribeWebsiteCertificateAuthority');
    return this;
  }

  /**
   * Grants permission to disassociate a domain from an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateDomain.html
   */
  public toDisassociateDomain() {
    this.to('worklink:DisassociateDomain');
    return this;
  }

  /**
   * Grants permission to disassociate a website authorization provider from an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateWebsiteAuthorizationProvider.html
   */
  public toDisassociateWebsiteAuthorizationProvider() {
    this.to('worklink:DisassociateWebsiteAuthorizationProvider');
    return this;
  }

  /**
   * Grants permission to disassociate a website certificate authority from an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateWebsiteCertificateAuthority.html
   */
  public toDisassociateWebsiteCertificateAuthority() {
    this.to('worklink:DisassociateWebsiteCertificateAuthority');
    return this;
  }

  /**
   * Grants permission to list the devices associated with an Amazon WorkLink fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListDevices.html
   */
  public toListDevices() {
    this.to('worklink:ListDevices');
    return this;
  }

  /**
   * Grants permission to list the associated domains for an Amazon WorkLink fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListDomains.html
   */
  public toListDomains() {
    this.to('worklink:ListDomains');
    return this;
  }

  /**
   * Grants permission to list the Amazon WorkLink fleets associated with the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListFleets.html
   */
  public toListFleets() {
    this.to('worklink:ListFleets');
    return this;
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('worklink:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to list the website authorization providers for an Amazon WorkLink fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListWebsiteAuthorizationProviders.html
   */
  public toListWebsiteAuthorizationProviders() {
    this.to('worklink:ListWebsiteAuthorizationProviders');
    return this;
  }

  /**
   * Grants permission to list the website certificate authorities associated with an Amazon WorkLink fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListWebsiteCertificateAuthorities.html
   */
  public toListWebsiteCertificateAuthorities() {
    this.to('worklink:ListWebsiteCertificateAuthorities');
    return this;
  }

  /**
   * Grants permission to restore access to a domain associated with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_RestoreDomainAccess.html
   */
  public toRestoreDomainAccess() {
    this.to('worklink:RestoreDomainAccess');
    return this;
  }

  /**
   * Grants permission to revoke access to a domain associated with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_RevokeDomainAccess.html
   */
  public toRevokeDomainAccess() {
    this.to('worklink:RevokeDomainAccess');
    return this;
  }

  /**
   * Grants permission to sign out a user from an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_SignOutUser.html
   */
  public toSignOutUser() {
    this.to('worklink:SignOutUser');
    return this;
  }

  /**
   * Grants permission to add one or more tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_TagResource.html
   */
  public toTagResource() {
    this.to('worklink:TagResource');
    return this;
  }

  /**
   * Grants permission to remove one or more tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('worklink:UntagResource');
    return this;
  }

  /**
   * Grants permission to update the audit stream configuration for an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateAuditStreamConfiguration.html
   */
  public toUpdateAuditStreamConfiguration() {
    this.to('worklink:UpdateAuditStreamConfiguration');
    return this;
  }

  /**
   * Grants permission to update the company network configuration for an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateCompanyNetworkConfiguration.html
   */
  public toUpdateCompanyNetworkConfiguration() {
    this.to('worklink:UpdateCompanyNetworkConfiguration');
    return this;
  }

  /**
   * Grants permission to update the device policy configuration for an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateDevicePolicyConfiguration.html
   */
  public toUpdateDevicePolicyConfiguration() {
    this.to('worklink:UpdateDevicePolicyConfiguration');
    return this;
  }

  /**
   * Grants permission to update the metadata for a domain associated with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateDomainMetadata.html
   */
  public toUpdateDomainMetadata() {
    this.to('worklink:UpdateDomainMetadata');
    return this;
  }

  /**
   * Grants permission to update the metadata of an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateFleetMetadata.html
   */
  public toUpdateFleetMetadata() {
    this.to('worklink:UpdateFleetMetadata');
    return this;
  }

  /**
   * Grants permission to update the identity provider configuration for an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateIdentityProviderConfiguration.html
   */
  public toUpdateIdentityProviderConfiguration() {
    this.to('worklink:UpdateIdentityProviderConfiguration');
    return this;
  }

  /**
   * Adds a resource of type fleet to the statement
   *
   * https://docs.aws.amazon.com/worklink/latest/api/worklink-resources.html#Fleet
   *
   * @param fleetName - Identifier for the fleetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFleet(fleetName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:worklink::${Account}:fleet/${FleetName}';
    arn = arn.replace('${FleetName}', fleetName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
