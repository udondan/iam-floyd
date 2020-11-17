import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [freertos](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfreertos.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Freertos extends PolicyStatement {
  public servicePrefix = 'freertos';

  /**
   * Statement provider for service [freertos](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfreertos.html).
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

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateSoftwareConfiguration",
      "DeleteSoftwareConfiguration",
      "UpdateSoftwareConfiguration"
    ],
    "Read": [
      "DescribeHardwarePlatform",
      "DescribeSoftwareConfiguration",
      "GetSoftwareURL",
      "GetSoftwareURLForConfiguration"
    ],
    "List": [
      "ListFreeRTOSVersions",
      "ListHardwarePlatforms",
      "ListHardwareVendors",
      "ListSoftwareConfigurations"
    ]
  };

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
