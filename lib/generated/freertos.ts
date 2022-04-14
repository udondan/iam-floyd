import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Creates a software configuration
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
    return this.to('CreateSoftwareConfiguration');
  }

  /**
   * Deletes the software configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toDeleteSoftwareConfiguration() {
    return this.to('DeleteSoftwareConfiguration');
  }

  /**
   * Describes the hardware platform
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toDescribeHardwarePlatform() {
    return this.to('DescribeHardwarePlatform');
  }

  /**
   * Describes the software configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toDescribeSoftwareConfiguration() {
    return this.to('DescribeSoftwareConfiguration');
  }

  /**
   * Get the URL for Amazon FreeRTOS software download
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toGetSoftwareURL() {
    return this.to('GetSoftwareURL');
  }

  /**
   * Get the URL for Amazon FreeRTOS software download based on the configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toGetSoftwareURLForConfiguration() {
    return this.to('GetSoftwareURLForConfiguration');
  }

  /**
   * Lists versions of AmazonFreeRTOS
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toListFreeRTOSVersions() {
    return this.to('ListFreeRTOSVersions');
  }

  /**
   * Lists the hardware platforms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toListHardwarePlatforms() {
    return this.to('ListHardwarePlatforms');
  }

  /**
   * Lists the hardware vendors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toListHardwareVendors() {
    return this.to('ListHardwareVendors');
  }

  /**
   * Lists the software configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toListSoftwareConfigurations() {
    return this.to('ListSoftwareConfigurations');
  }

  /**
   * Updates the software configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toUpdateSoftwareConfiguration() {
    return this.to('UpdateSoftwareConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateSoftwareConfiguration',
      'DeleteSoftwareConfiguration',
      'UpdateSoftwareConfiguration'
    ],
    Read: [
      'DescribeHardwarePlatform',
      'DescribeSoftwareConfiguration',
      'GetSoftwareURL',
      'GetSoftwareURLForConfiguration'
    ],
    List: [
      'ListFreeRTOSVersions',
      'ListHardwarePlatforms',
      'ListHardwareVendors',
      'ListSoftwareConfigurations'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfiguration(configurationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Freertos.defaultPartition }:freertos:${ region || '*' }:${ account || '*' }:configuration/${ configurationName }`);
  }
}
