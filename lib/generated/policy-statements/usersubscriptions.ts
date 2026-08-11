import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [user-subscriptions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsusersubscriptions.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class UserSubscriptions extends PolicyStatement {
  public servicePrefix = 'user-subscriptions';

  /**
   * Statement provider for service [user-subscriptions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsusersubscriptions.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a User subscription Claim
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCreateForSelf()
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toCreateClaim() {
    return this.to('CreateClaim');
  }

  /**
   * Grants permission to create a User subscription Claim add-on
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toCreateClaimAddOn() {
    return this.to('CreateClaimAddOn');
  }

  /**
   * Grants permission to delete a User subscription auto-top-up rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toDeleteAutoTopUpRule() {
    return this.to('DeleteAutoTopUpRule');
  }

  /**
   * Grants permission to delete a User subscription Claim
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toDeleteClaim() {
    return this.to('DeleteClaim');
  }

  /**
   * Grants permission to get a User subscription auto-top-up rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toGetAutoTopUpRule() {
    return this.to('GetAutoTopUpRule');
  }

  /**
   * Grants permission to get a User subscription effective usage limit
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toGetEffectiveUsageLimit() {
    return this.to('GetEffectiveUsageLimit');
  }

  /**
   * Grants permission to get User subscription usage limit history
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toGetUsageLimitHistory() {
    return this.to('GetUsageLimitHistory');
  }

  /**
   * Grants permission to list all User subscription Claims for Application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toListApplicationClaims() {
    return this.to('ListApplicationClaims');
  }

  /**
   * Grants permission to list all User subscription Claim add-ons
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toListClaimAddOns() {
    return this.to('ListClaimAddOns');
  }

  /**
   * Grants permission to list all User subscription Claims
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toListClaims() {
    return this.to('ListClaims');
  }

  /**
   * Grants permission to list all User subscription entitlements
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toListEntitlements() {
    return this.to('ListEntitlements');
  }

  /**
   * Grants permission to list all User subscription usage limits
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toListUsageLimits() {
    return this.to('ListUsageLimits');
  }

  /**
   * Grants permission to list all User subscriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toListUserSubscriptions() {
    return this.to('ListUserSubscriptions');
  }

  /**
   * Grants permission to set a User subscription auto-top-up rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toSetAutoTopUpRule() {
    return this.to('SetAutoTopUpRule');
  }

  /**
   * Grants permission to set a User subscription overage configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toSetOverageConfig() {
    return this.to('SetOverageConfig');
  }

  /**
   * Grants permission to set a User subscription usage limit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toSetUsageLimit() {
    return this.to('SetUsageLimit');
  }

  /**
   * Grants permission to update a User subscription Claim
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_permissions.html
   */
  public toUpdateClaim() {
    return this.to('UpdateClaim');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateClaim',
      'CreateClaimAddOn',
      'DeleteAutoTopUpRule',
      'DeleteClaim',
      'SetAutoTopUpRule',
      'SetOverageConfig',
      'SetUsageLimit',
      'UpdateClaim'
    ],
    Read: [
      'GetAutoTopUpRule',
      'GetEffectiveUsageLimit',
      'GetUsageLimitHistory'
    ],
    List: [
      'ListApplicationClaims',
      'ListClaimAddOns',
      'ListClaims',
      'ListEntitlements',
      'ListUsageLimits',
      'ListUserSubscriptions'
    ]
  };

  /**
   * Filters access by only allowing creation of User subscription Claims for the caller
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security-iam-service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateClaim()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifCreateForSelf(value?: boolean) {
    return this.if(`CreateForSelf`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }
}
