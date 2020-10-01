import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [freertos](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfreertos.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Freertos extends PolicyStatement {
  public servicePrefix = 'freertos';
  protected actionList: Actions = {
    "CreateSoftwareConfiguration": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html",
      "description": "Creates a software configuration.",
      "accessLevel": "Write",
      "resourceTypes": {
        "configuration": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteSoftwareConfiguration": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html",
      "description": "Deletes the software configuration.",
      "accessLevel": "Write",
      "resourceTypes": {
        "configuration": {
          "required": true
        }
      }
    },
    "DescribeHardwarePlatform": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html",
      "description": "Describes the hardware platform.",
      "accessLevel": "Read"
    },
    "DescribeSoftwareConfiguration": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html",
      "description": "Describes the software configuration.",
      "accessLevel": "Read",
      "resourceTypes": {
        "configuration": {
          "required": true
        }
      }
    },
    "GetSoftwareURL": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html",
      "description": "Get the URL for Amazon FreeRTOS software download.",
      "accessLevel": "Read"
    },
    "GetSoftwareURLForConfiguration": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html",
      "description": "Get the URL for Amazon FreeRTOS software download based on the configuration.",
      "accessLevel": "Read"
    },
    "ListFreeRTOSVersions": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html",
      "description": "Lists versions of AmazonFreeRTOS.",
      "accessLevel": "List"
    },
    "ListHardwarePlatforms": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html",
      "description": "Lists the hardware platforms.",
      "accessLevel": "List"
    },
    "ListHardwareVendors": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html",
      "description": "Lists the hardware vendors.",
      "accessLevel": "List"
    },
    "ListSoftwareConfigurations": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html",
      "description": "Lists the software configurations.",
      "accessLevel": "List"
    },
    "UpdateSoftwareConfiguration": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html",
      "description": "Updates the software configuration.",
      "accessLevel": "Write",
      "resourceTypes": {
        "configuration": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "configuration": {
      "name": "configuration",
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html",
      "arn": "arn:${Partition}:freertos:${Region}:${Account}:configuration/${ConfigurationName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [freertos](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfreertos.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a software configuration.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toCreateSoftwareConfiguration() {
    this.to('freertos:CreateSoftwareConfiguration');
    return this;
  }

  /**
   * Deletes the software configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toDeleteSoftwareConfiguration() {
    this.to('freertos:DeleteSoftwareConfiguration');
    return this;
  }

  /**
   * Describes the hardware platform.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toDescribeHardwarePlatform() {
    this.to('freertos:DescribeHardwarePlatform');
    return this;
  }

  /**
   * Describes the software configuration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toDescribeSoftwareConfiguration() {
    this.to('freertos:DescribeSoftwareConfiguration');
    return this;
  }

  /**
   * Get the URL for Amazon FreeRTOS software download.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toGetSoftwareURL() {
    this.to('freertos:GetSoftwareURL');
    return this;
  }

  /**
   * Get the URL for Amazon FreeRTOS software download based on the configuration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toGetSoftwareURLForConfiguration() {
    this.to('freertos:GetSoftwareURLForConfiguration');
    return this;
  }

  /**
   * Lists versions of AmazonFreeRTOS.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toListFreeRTOSVersions() {
    this.to('freertos:ListFreeRTOSVersions');
    return this;
  }

  /**
   * Lists the hardware platforms.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toListHardwarePlatforms() {
    this.to('freertos:ListHardwarePlatforms');
    return this;
  }

  /**
   * Lists the hardware vendors.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toListHardwareVendors() {
    this.to('freertos:ListHardwareVendors');
    return this;
  }

  /**
   * Lists the software configurations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toListSoftwareConfigurations() {
    this.to('freertos:ListSoftwareConfigurations');
    return this;
  }

  /**
   * Updates the software configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toUpdateSoftwareConfiguration() {
    this.to('freertos:UpdateSoftwareConfiguration');
    return this;
  }

  /**
   * Adds a resource of type configuration to the statement
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   *
   * @param configurationName - Identifier for the configurationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfiguration(configurationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:freertos:${Region}:${Account}:configuration/${ConfigurationName}';
    arn = arn.replace('${ConfigurationName}', configurationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
