import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service freertos
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfreertos.html
 */
export class Freertos extends PolicyStatement {
  public servicePrefix = 'freertos';
  public actions : Actions = {
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

  /**
   * Creates a software configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public createSoftwareConfiguration () {
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
  public deleteSoftwareConfiguration () {
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
  public describeHardwarePlatform () {
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
  public describeSoftwareConfiguration () {
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
  public getSoftwareURL () {
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
  public getSoftwareURLForConfiguration () {
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
  public listFreeRTOSVersions () {
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
  public listHardwarePlatforms () {
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
  public listHardwareVendors () {
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
  public listSoftwareConfigurations () {
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
  public updateSoftwareConfiguration () {
    this.add('freertos:UpdateSoftwareConfiguration');
    return this;
  }
}
