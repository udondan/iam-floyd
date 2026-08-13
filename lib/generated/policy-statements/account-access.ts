import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [account-access](https://docs.aws.amazon.com/service-authorization/latest/reference/list_account-access.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AccountAccess extends PolicyStatement {
  public servicePrefix = 'account-access';

  /**
   * Statement provider for service [account-access](https://docs.aws.amazon.com/service-authorization/latest/reference/list_account-access.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to enable an account access manager instance and create an AWS account access application in the associated IAM Identity Center instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_accountaccessmanager.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create an entitlement in an account access manager instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_accountaccessmanager.html
   */
  public toCreateEntitlement() {
    return this.to('CreateEntitlement');
  }

  /**
   * Grants permission to delete an account access manager instance and its AWS account access application in the associated IAM Identity Center instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_accountaccessmanager.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete an entitlement in an account access manager instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_accountaccessmanager.html
   */
  public toDeleteEntitlement() {
    return this.to('DeleteEntitlement');
  }

  /**
   * Grants permission to describe an account access manager instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_accountaccessmanager.html
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Grants permission to get entitlement details for an account access manager instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_accountaccessmanager.html
   */
  public toGetEntitlement() {
    return this.to('GetEntitlement');
  }

  /**
   * Grants permission to list account access manager instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_accountaccessmanager.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list entitlements for an account access manager instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_accountaccessmanager.html
   */
  public toListEntitlements() {
    return this.to('ListEntitlements');
  }

  /**
   * Grants permission to list tags for an account access manager resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_accountaccessmanager.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to tag an account access manager resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_accountaccessmanager.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from an account access manager resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_accountaccessmanager.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateApplication',
      'CreateEntitlement',
      'DeleteApplication',
      'DeleteEntitlement',
      'TagResource',
      'UntagResource'
    ],
    Read: [
      'GetApplication',
      'GetEntitlement',
      'ListTagsForResource'
    ],
    List: [
      'ListApplications',
      'ListEntitlements'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_accountaccessmanager.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:account-access:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ resourceId }`);
  }

  /**
   * Filters access by tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateApplication()
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
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateEntitlement()
   * - .toDeleteApplication()
   * - .toDeleteEntitlement()
   * - .toGetApplication()
   * - .toGetEntitlement()
   * - .toListEntitlements()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - application
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag keys
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateApplication()
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
