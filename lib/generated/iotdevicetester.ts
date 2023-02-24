import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [iot-device-tester](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotdevicetester.html).
 *
 * @param options - Options for the statement
 */
export class IotDeviceTester extends PolicyStatement {
  public servicePrefix = 'iot-device-tester';

  /**
   * Statement provider for service [iot-device-tester](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotdevicetester.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to IoT Device Tester to check if a given set of product, test suite and device tester version are compatible
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  public toCheckVersion() {
    return this.to('CheckVersion');
  }

  /**
   * Grants permission to IoT Device Tester to download compatible test suite versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  public toDownloadTestSuite() {
    return this.to('DownloadTestSuite');
  }

  /**
   * Grants permission to IoT Device Tester to get information on latest version of device tester available
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  public toLatestIdt() {
    return this.to('LatestIdt');
  }

  /**
   * Grants permission to IoT Device Tester to send usage metrics on your behalf
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  public toSendMetrics() {
    return this.to('SendMetrics');
  }

  /**
   * Grants permission to IoT Device Tester to get list of supported products and test suite versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  public toSupportedVersion() {
    return this.to('SupportedVersion');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'CheckVersion',
      'DownloadTestSuite',
      'LatestIdt',
      'SupportedVersion'
    ],
    Write: [
      'SendMetrics'
    ]
  };
}
