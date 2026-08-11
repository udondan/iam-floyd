import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to create a software configuration
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
   * Grants permission to create a subscription for FreeRTOS extended maintenance plan (EMP)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html
   */
  public toCreateSubscription() {
    return this.to('CreateSubscription');
  }

  /**
   * Grants permission to delete the software configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toDeleteSoftwareConfiguration() {
    return this.to('DeleteSoftwareConfiguration');
  }

  /**
   * Grants permission to describe the hardware platform
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toDescribeHardwarePlatform() {
    return this.to('DescribeHardwarePlatform');
  }

  /**
   * Grants permission to describe the software configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toDescribeSoftwareConfiguration() {
    return this.to('DescribeSoftwareConfiguration');
  }

  /**
   * Grants permission to describes the subscription for FreeRTOS extended maintenance plan (EMP)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html
   */
  public toDescribeSubscription() {
    return this.to('DescribeSubscription');
  }

  /**
   * Grants permission to get URL for sotware patch-release, patch-diff and release notes under FreeRTOS extended maintenance plan (EMP)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html
   */
  public toGetEmpPatchUrl() {
    return this.to('GetEmpPatchUrl');
  }

  /**
   * Grants permission to get the URL for Amazon FreeRTOS software download
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toGetSoftwareURL() {
    return this.to('GetSoftwareURL');
  }

  /**
   * Grants permission to get the URL for Amazon FreeRTOS software download based on the configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toGetSoftwareURLForConfiguration() {
    return this.to('GetSoftwareURLForConfiguration');
  }

  /**
   * Grants permission to fetch the subscription billing amount for FreeRTOS extended maintenance plan (EMP)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html
   */
  public toGetSubscriptionBillingAmount() {
    return this.to('GetSubscriptionBillingAmount');
  }

  /**
   * Grants permission to lists versions of AmazonFreeRTOS
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toListFreeRTOSVersions() {
    return this.to('ListFreeRTOSVersions');
  }

  /**
   * Grants permission to list the hardware platforms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toListHardwarePlatforms() {
    return this.to('ListHardwarePlatforms');
  }

  /**
   * Grants permission to list the hardware vendors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toListHardwareVendors() {
    return this.to('ListHardwareVendors');
  }

  /**
   * Grants permission to lists the software configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toListSoftwareConfigurations() {
    return this.to('ListSoftwareConfigurations');
  }

  /**
   * Grants permission to list software patches of subscription for FreeRTOS extended maintenance plan (EMP)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html
   */
  public toListSoftwarePatches() {
    return this.to('ListSoftwarePatches');
  }

  /**
   * Grants permission to list the subscription emails for FreeRTOS extended maintenance plan (EMP)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html
   */
  public toListSubscriptionEmails() {
    return this.to('ListSubscriptionEmails');
  }

  /**
   * Grants permission to list the subscriptions for FreeRTOS extended maintenance plan (EMP)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html
   */
  public toListSubscriptions() {
    return this.to('ListSubscriptions');
  }

  /**
   * Grants permission to update list of subscription email address for FreeRTOS extended maintenance plan (EMP)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html
   */
  public toUpdateEmailRecipients() {
    return this.to('UpdateEmailRecipients');
  }

  /**
   * Grants permission to update the software configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  public toUpdateSoftwareConfiguration() {
    return this.to('UpdateSoftwareConfiguration');
  }

  /**
   * Grants permission to verify the email for FreeRTOS extended maintenance plan (EMP)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html
   */
  public toVerifyEmail() {
    return this.to('VerifyEmail');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateSoftwareConfiguration',
      'CreateSubscription',
      'DeleteSoftwareConfiguration',
      'UpdateEmailRecipients',
      'UpdateSoftwareConfiguration',
      'VerifyEmail'
    ],
    Read: [
      'DescribeHardwarePlatform',
      'DescribeSoftwareConfiguration',
      'DescribeSubscription',
      'GetEmpPatchUrl',
      'GetSoftwareURL',
      'GetSoftwareURLForConfiguration',
      'GetSubscriptionBillingAmount'
    ],
    List: [
      'ListFreeRTOSVersions',
      'ListHardwarePlatforms',
      'ListHardwareVendors',
      'ListSoftwareConfigurations',
      'ListSoftwarePatches',
      'ListSubscriptionEmails',
      'ListSubscriptions'
    ]
  };

  /**
   * Adds a resource of type configuration to the statement
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   *
   * @param configurationName - Identifier for the configurationName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfiguration(configurationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:freertos:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:configuration/${ configurationName }`);
  }

  /**
   * Adds a resource of type subscription to the statement
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-getting-started-emp.html
   *
   * @param subscriptionID - Identifier for the subscriptionID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSubscription(subscriptionID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:freertos:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:subscription/${ subscriptionID }`);
  }

  /**
   * Filters access by tag key present in the request that the user makes to Amazon FreeRTOS
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateSoftwareConfiguration()
   * - .toCreateSubscription()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key component attached to an Amazon FreeRTOS resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - configuration
   * - subscription
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the list of all the tag key names associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateSoftwareConfiguration()
   * - .toCreateSubscription()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
