import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service license-manager
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslicensemanager.html
 */
export class LicenseManager extends PolicyStatement {
  public servicePrefix = 'license-manager';
  public actions : Actions = {
    "CreateLicenseConfiguration": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseConfiguration.html",
      "description": "Creates a new license configuration",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteLicenseConfiguration": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicenseConfiguration.html",
      "description": "Permanently deletes a license configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "license-configuration": {
          "required": true
        }
      }
    },
    "GetLicenseConfiguration": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseConfiguration.html",
      "description": "Gets a license configuration",
      "accessLevel": "List",
      "resourceTypes": {
        "license-configuration": {
          "required": true
        }
      }
    },
    "GetServiceSettings": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetServiceSettings.html",
      "description": "Gets service settings",
      "accessLevel": "List"
    },
    "ListAssociationsForLicenseConfiguration": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListAssociationsForLicenseConfiguration.html",
      "description": "Lists associations for a selected license configuration",
      "accessLevel": "List",
      "resourceTypes": {
        "license-configuration": {
          "required": true
        }
      }
    },
    "ListLicenseConfigurations": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseConfigurations.html",
      "description": "Lists license configurations",
      "accessLevel": "List"
    },
    "ListLicenseSpecificationsForResource": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseSpecificationsForResource.html",
      "description": "Lists license specifications associated with a selected resource",
      "accessLevel": "List"
    },
    "ListResourceInventory": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListResourceInventory.html",
      "description": "Lists resource inventory",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListTagsForResource.html",
      "description": "Lists tags for a selected resource",
      "accessLevel": "List",
      "resourceTypes": {
        "license-configuration": {
          "required": true
        }
      }
    },
    "ListUsageForLicenseConfiguration": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListUsageForLicenseConfiguration.html",
      "description": "Lists usage records for selected license configuration",
      "accessLevel": "List",
      "resourceTypes": {
        "license-configuration": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_TagResource.html",
      "description": "Tags a selected resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "license-configuration": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UntagResource.html",
      "description": "Untags a selected resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "license-configuration": {
          "required": true
        }
      }
    },
    "UpdateLicenseConfiguration": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseConfiguration.html",
      "description": "Updates an existing license configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "license-configuration": {
          "required": true
        }
      }
    },
    "UpdateLicenseSpecificationsForResource": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseSpecificationsForResource.html",
      "description": "Updates license specifications for a selected resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "license-configuration": {
          "required": true
        }
      }
    },
    "UpdateServiceSettings": {
      "url": "https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateServiceSettings.html",
      "description": "Updates service settings",
      "accessLevel": "Permissions management"
    }
  };
  public resourceTypes : ResourceTypes = {
    "license-configuration": {
      "name": "license-configuration",
      "arn": "arn:${Partition}:license-manager:${Region}:${Account}:license-configuration/${LicenseConfigurationId}",
      "conditionKeys": [
        "license-manager:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Creates a new license configuration
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseConfiguration.html
   */
  public createLicenseConfiguration () {
    this.add('license-manager:CreateLicenseConfiguration');
    return this;
  }

  /**
   * Permanently deletes a license configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicenseConfiguration.html
   */
  public deleteLicenseConfiguration () {
    this.add('license-manager:DeleteLicenseConfiguration');
    return this;
  }

  /**
   * Gets a license configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseConfiguration.html
   */
  public getLicenseConfiguration () {
    this.add('license-manager:GetLicenseConfiguration');
    return this;
  }

  /**
   * Gets service settings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetServiceSettings.html
   */
  public getServiceSettings () {
    this.add('license-manager:GetServiceSettings');
    return this;
  }

  /**
   * Lists associations for a selected license configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListAssociationsForLicenseConfiguration.html
   */
  public listAssociationsForLicenseConfiguration () {
    this.add('license-manager:ListAssociationsForLicenseConfiguration');
    return this;
  }

  /**
   * Lists license configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseConfigurations.html
   */
  public listLicenseConfigurations () {
    this.add('license-manager:ListLicenseConfigurations');
    return this;
  }

  /**
   * Lists license specifications associated with a selected resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseSpecificationsForResource.html
   */
  public listLicenseSpecificationsForResource () {
    this.add('license-manager:ListLicenseSpecificationsForResource');
    return this;
  }

  /**
   * Lists resource inventory
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListResourceInventory.html
   */
  public listResourceInventory () {
    this.add('license-manager:ListResourceInventory');
    return this;
  }

  /**
   * Lists tags for a selected resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource () {
    this.add('license-manager:ListTagsForResource');
    return this;
  }

  /**
   * Lists usage records for selected license configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListUsageForLicenseConfiguration.html
   */
  public listUsageForLicenseConfiguration () {
    this.add('license-manager:ListUsageForLicenseConfiguration');
    return this;
  }

  /**
   * Tags a selected resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_TagResource.html
   */
  public tagResource () {
    this.add('license-manager:TagResource');
    return this;
  }

  /**
   * Untags a selected resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UntagResource.html
   */
  public untagResource () {
    this.add('license-manager:UntagResource');
    return this;
  }

  /**
   * Updates an existing license configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseConfiguration.html
   */
  public updateLicenseConfiguration () {
    this.add('license-manager:UpdateLicenseConfiguration');
    return this;
  }

  /**
   * Updates license specifications for a selected resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseSpecificationsForResource.html
   */
  public updateLicenseSpecificationsForResource () {
    this.add('license-manager:UpdateLicenseSpecificationsForResource');
    return this;
  }

  /**
   * Updates service settings
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateServiceSettings.html
   */
  public updateServiceSettings () {
    this.add('license-manager:UpdateServiceSettings');
    return this;
  }
}
