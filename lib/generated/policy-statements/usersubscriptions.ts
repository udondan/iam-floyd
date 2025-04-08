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
      'DeleteClaim',
      'UpdateClaim'
    ],
    List: [
      'ListApplicationClaims',
      'ListClaims',
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
