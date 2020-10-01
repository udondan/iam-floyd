import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [license-manager](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslicensemanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class LicenseManager extends PolicyStatement {
  public servicePrefix = 'license-manager';
  protected actionList: Actions = {
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
  protected resourceTypes: ResourceTypes = {
    "license-configuration": {
      "name": "license-configuration",
      "url": "",
      "arn": "arn:${Partition}:license-manager:${Region}:${Account}:license-configuration/${LicenseConfigurationId}",
      "conditionKeys": [
        "license-manager:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [license-manager](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslicensemanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a new license configuration
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseConfiguration.html
   */
  public toCreateLicenseConfiguration() {
    this.to('license-manager:CreateLicenseConfiguration');
    return this;
  }

  /**
   * Permanently deletes a license configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicenseConfiguration.html
   */
  public toDeleteLicenseConfiguration() {
    this.to('license-manager:DeleteLicenseConfiguration');
    return this;
  }

  /**
   * Gets a license configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseConfiguration.html
   */
  public toGetLicenseConfiguration() {
    this.to('license-manager:GetLicenseConfiguration');
    return this;
  }

  /**
   * Gets service settings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetServiceSettings.html
   */
  public toGetServiceSettings() {
    this.to('license-manager:GetServiceSettings');
    return this;
  }

  /**
   * Lists associations for a selected license configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListAssociationsForLicenseConfiguration.html
   */
  public toListAssociationsForLicenseConfiguration() {
    this.to('license-manager:ListAssociationsForLicenseConfiguration');
    return this;
  }

  /**
   * Lists license configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseConfigurations.html
   */
  public toListLicenseConfigurations() {
    this.to('license-manager:ListLicenseConfigurations');
    return this;
  }

  /**
   * Lists license specifications associated with a selected resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseSpecificationsForResource.html
   */
  public toListLicenseSpecificationsForResource() {
    this.to('license-manager:ListLicenseSpecificationsForResource');
    return this;
  }

  /**
   * Lists resource inventory
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListResourceInventory.html
   */
  public toListResourceInventory() {
    this.to('license-manager:ListResourceInventory');
    return this;
  }

  /**
   * Lists tags for a selected resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('license-manager:ListTagsForResource');
    return this;
  }

  /**
   * Lists usage records for selected license configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListUsageForLicenseConfiguration.html
   */
  public toListUsageForLicenseConfiguration() {
    this.to('license-manager:ListUsageForLicenseConfiguration');
    return this;
  }

  /**
   * Tags a selected resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('license-manager:TagResource');
    return this;
  }

  /**
   * Untags a selected resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('license-manager:UntagResource');
    return this;
  }

  /**
   * Updates an existing license configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseConfiguration.html
   */
  public toUpdateLicenseConfiguration() {
    this.to('license-manager:UpdateLicenseConfiguration');
    return this;
  }

  /**
   * Updates license specifications for a selected resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseSpecificationsForResource.html
   */
  public toUpdateLicenseSpecificationsForResource() {
    this.to('license-manager:UpdateLicenseSpecificationsForResource');
    return this;
  }

  /**
   * Updates service settings
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateServiceSettings.html
   */
  public toUpdateServiceSettings() {
    this.to('license-manager:UpdateServiceSettings');
    return this;
  }

  /**
   * Adds a resource of type license-configuration to the statement
   *
   * @param licenseConfigurationId - Identifier for the licenseConfigurationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifResourceTag()
   */
  public onLicenseConfiguration(licenseConfigurationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:license-manager:${Region}:${Account}:license-configuration/${LicenseConfigurationId}';
    arn = arn.replace('${LicenseConfigurationId}', licenseConfigurationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on tag-value associated with the resource.
   *
   * Applies to resource types:
   * - license-configuration
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`license-manager:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
