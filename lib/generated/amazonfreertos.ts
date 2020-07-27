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
  public createSoftwareConfiguration() {
    this.add('freertos:CreateSoftwareConfiguration');
    return this;
  }

  /**
   * Deletes the software configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public deleteSoftwareConfiguration() {
    this.add('freertos:DeleteSoftwareConfiguration');
    return this;
  }

  /**
   * Describes the hardware platform.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public describeHardwarePlatform() {
    this.add('freertos:DescribeHardwarePlatform');
    return this;
  }

  /**
   * Describes the software configuration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public describeSoftwareConfiguration() {
    this.add('freertos:DescribeSoftwareConfiguration');
    return this;
  }

  /**
   * Get the URL for Amazon FreeRTOS software download.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public getSoftwareURL() {
    this.add('freertos:GetSoftwareURL');
    return this;
  }

  /**
   * Get the URL for Amazon FreeRTOS software download based on the configuration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public getSoftwareURLForConfiguration() {
    this.add('freertos:GetSoftwareURLForConfiguration');
    return this;
  }

  /**
   * Lists versions of AmazonFreeRTOS.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public listFreeRTOSVersions() {
    this.add('freertos:ListFreeRTOSVersions');
    return this;
  }

  /**
   * Lists the hardware platforms.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public listHardwarePlatforms() {
    this.add('freertos:ListHardwarePlatforms');
    return this;
  }

  /**
   * Lists the hardware vendors.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public listHardwareVendors() {
    this.add('freertos:ListHardwareVendors');
    return this;
  }

  /**
   * Lists the software configurations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public listSoftwareConfigurations() {
    this.add('freertos:ListSoftwareConfigurations');
    return this;
  }

  /**
   * Updates the software configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public updateSoftwareConfiguration() {
    this.add('freertos:UpdateSoftwareConfiguration');
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

  /**
   * A tag key that is present in the request that the user makes to Amazon FreeRTOS.
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/console-tagging-iam.html/
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * The tag key component of a tag attached to an Amazon FreeRTOS resource.
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/console-tagging-iam.html/
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * The list of all the tag key names associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/console-tagging-iam.html/
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
