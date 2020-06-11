import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service iot-device-tester
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotdevicetester.html
 */
export class IotDeviceTester extends PolicyStatement {
  public servicePrefix = 'iot-device-tester';
  public actions : Actions = {
    "CheckVersion": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html",
      "description": "Grants permission for IoT Device Tester to check if a given set of product, test suite and device tester version are compatible",
      "accessLevel": "Read"
    },
    "DownloadTestSuite": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html",
      "description": "Grants permission for IoT Device Tester to download compatible test suite versions",
      "accessLevel": "Read"
    },
    "LatestIdt": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html",
      "description": "Grants permission for IoT Device Tester to get information on latest version of device tester available",
      "accessLevel": "Read"
    },
    "SendMetrics": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html",
      "description": "Grants permissions for IoT Device Tester to send usage metrics on your behalf",
      "accessLevel": "Write"
    },
    "SupportedVersion": {
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html",
      "description": "Grants permission for IoT Device Tester to get list of supported products and test suite versions",
      "accessLevel": "Read"
    }
  };

  /**
   * Grants permission for IoT Device Tester to check if a given set of product, test suite and device tester version are compatible
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  public checkVersion () {
    this.add('iot-device-tester:CheckVersion');
    return this;
  }

  /**
   * Grants permission for IoT Device Tester to download compatible test suite versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  public downloadTestSuite () {
    this.add('iot-device-tester:DownloadTestSuite');
    return this;
  }

  /**
   * Grants permission for IoT Device Tester to get information on latest version of device tester available
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  public latestIdt () {
    this.add('iot-device-tester:LatestIdt');
    return this;
  }

  /**
   * Grants permissions for IoT Device Tester to send usage metrics on your behalf
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  public sendMetrics () {
    this.add('iot-device-tester:SendMetrics');
    return this;
  }

  /**
   * Grants permission for IoT Device Tester to get list of supported products and test suite versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  public supportedVersion () {
    this.add('iot-device-tester:SupportedVersion');
    return this;
  }
}
