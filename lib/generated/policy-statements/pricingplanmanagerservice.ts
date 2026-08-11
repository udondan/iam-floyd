import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [pricingplanmanager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspricingplanmanagerservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Pricingplanmanager extends PolicyStatement {
  public servicePrefix = 'pricingplanmanager';

  /**
   * Statement provider for service [pricingplanmanager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspricingplanmanagerservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate resources with a subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/PricingPlanManager/latest/UserGuide/security-pricing-plan.html
   */
  public toAssociateResourcesToSubscription() {
    return this.to('AssociateResourcesToSubscription');
  }

  /**
   * Grants permission to cancel a subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/PricingPlanManager/latest/UserGuide/security-pricing-plan.html
   */
  public toCancelSubscription() {
    return this.to('CancelSubscription');
  }

  /**
   * Grants permission to cancel a pending a change for a subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/PricingPlanManager/latest/UserGuide/security-pricing-plan.html
   */
  public toCancelSubscriptionChange() {
    return this.to('CancelSubscriptionChange');
  }

  /**
   * Grants permission to create a subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/PricingPlanManager/latest/UserGuide/security-pricing-plan.html
   */
  public toCreateSubscription() {
    return this.to('CreateSubscription');
  }

  /**
   * Grants permission to disassociate resources from a subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/PricingPlanManager/latest/UserGuide/security-pricing-plan.html
   */
  public toDisassociateResourcesFromSubscription() {
    return this.to('DisassociateResourcesFromSubscription');
  }

  /**
   * Grants permission to get the details for a subscription
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/PricingPlanManager/latest/UserGuide/security-pricing-plan.html
   */
  public toGetSubscription() {
    return this.to('GetSubscription');
  }

  /**
   * Grants permission to list subscriptions in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/PricingPlanManager/latest/UserGuide/security-pricing-plan.html
   */
  public toListSubscriptions() {
    return this.to('ListSubscriptions');
  }

  /**
   * Grants permission to update a subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/PricingPlanManager/latest/UserGuide/security-pricing-plan.html
   */
  public toUpdateSubscription() {
    return this.to('UpdateSubscription');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateResourcesToSubscription',
      'CancelSubscription',
      'CancelSubscriptionChange',
      'CreateSubscription',
      'DisassociateResourcesFromSubscription',
      'UpdateSubscription'
    ],
    Read: [
      'GetSubscription',
      'ListSubscriptions'
    ]
  };

  /**
   * Adds a resource of type subscription to the statement
   *
   * https://docs.aws.amazon.com/pricingplanmanager/userguide/subscription.html
   *
   * @param subscriptionId - Identifier for the subscriptionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSubscription(subscriptionId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:pricingplanmanager::${ account ?? this.defaultAccount }:subscription/${ subscriptionId }`);
  }
}
