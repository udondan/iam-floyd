import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [license-manager-linux-subscriptions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanagerlinuxsubscriptionsmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class LicenseManagerLinuxSubscriptions extends PolicyStatement {
  public servicePrefix = 'license-manager-linux-subscriptions';

  /**
   * Statement provider for service [license-manager-linux-subscriptions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanagerlinuxsubscriptionsmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to permanently delete a subscription provider in AWS License Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager-linux-subscriptions/latest/APIReference/API_DeregisterSubscriptionProvider.html
   */
  public toDeregisterSubscriptionProvider() {
    return this.to('DeregisterSubscriptionProvider');
  }

  /**
   * Grants permission to get a subscription provider in AWS License Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager-linux-subscriptions/latest/APIReference/API_GetRegisteredSubscriptionProvider.html
   */
  public toGetRegisteredSubscriptionProvider() {
    return this.to('GetRegisteredSubscriptionProvider');
  }

  /**
   * Grants permission to get the service settings for Linux subscriptions in AWS License Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager-linux-subscriptions/latest/APIReference/API_GetServiceSettings.html
   */
  public toGetServiceSettings() {
    return this.to('GetServiceSettings');
  }

  /**
   * Grants permission to list all instances with Linux subscriptions in AWS License Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager-linux-subscriptions/latest/APIReference/API_ListLinuxSubscriptionInstances.html
   */
  public toListLinuxSubscriptionInstances() {
    return this.to('ListLinuxSubscriptionInstances');
  }

  /**
   * Grants permission to list all Linux subscriptions in AWS License Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager-linux-subscriptions/latest/APIReference/API_ListLinuxSubscriptions.html
   */
  public toListLinuxSubscriptions() {
    return this.to('ListLinuxSubscriptions');
  }

  /**
   * Grants permission to list subscription providers in AWS License Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager-linux-subscriptions/latest/APIReference/API_ListRegisteredSubscriptionProviders.html
   */
  public toListRegisteredSubscriptionProviders() {
    return this.to('ListRegisteredSubscriptionProviders');
  }

  /**
   * Grants permission to list tags for a selected resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager-linux-subscriptions/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create a new subscription provider in AWS License Manager
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/license-manager-linux-subscriptions/latest/APIReference/API_RegisterSubscriptionProvider.html
   */
  public toRegisterSubscriptionProvider() {
    return this.to('RegisterSubscriptionProvider');
  }

  /**
   * Grants permission to tag a selected resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/license-manager-linux-subscriptions/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a selected resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/license-manager-linux-subscriptions/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the service settings for Linux subscriptions in AWS License Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager-linux-subscriptions/latest/APIReference/API_UpdateServiceSettings.html
   */
  public toUpdateServiceSettings() {
    return this.to('UpdateServiceSettings');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'DeregisterSubscriptionProvider',
      'RegisterSubscriptionProvider',
      'UpdateServiceSettings'
    ],
    Read: [
      'GetRegisteredSubscriptionProvider',
      'GetServiceSettings',
      'ListLinuxSubscriptionInstances',
      'ListLinuxSubscriptions',
      'ListRegisteredSubscriptionProviders',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type subscription-provider to the statement
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/subscription-providers.html
   *
   * @param subscriptionProviderId - Identifier for the subscriptionProviderId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSubscriptionProvider(subscriptionProviderId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:license-manager-linux-subscriptions:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:subscription-provider/${ subscriptionProviderId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html
   *
   * Applies to actions:
   * - .toRegisterSubscriptionProvider()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * Applies to resource types:
   * - subscription-provider
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html
   *
   * Applies to actions:
   * - .toRegisterSubscriptionProvider()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
