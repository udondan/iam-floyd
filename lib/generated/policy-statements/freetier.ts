import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [freetier](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfreetier.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Freetier extends PolicyStatement {
  public servicePrefix = 'freetier';

  /**
   * Statement provider for service [freetier](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfreetier.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get a specific activity record
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_freetier_GetAccountActivity.html
   */
  public toGetAccountActivity() {
    return this.to('GetAccountActivity');
  }

  /**
   * Grants permission to get all of the information related to the state of the account plan related to Free Tier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_freetier_GetAccountPlanState.html
   */
  public toGetAccountPlanState() {
    return this.to('GetAccountPlanState');
  }

  /**
   * Grants permission to get free tier alert preference (email address)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/tracking-free-tier-usage.html
   */
  public toGetFreeTierAlertPreference() {
    return this.to('GetFreeTierAlertPreference');
  }

  /**
   * Grants permission to get free tier usage limits and MTD usage status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/tracking-free-tier-usage.html
   */
  public toGetFreeTierUsage() {
    return this.to('GetFreeTierUsage');
  }

  /**
   * Grants permission to list available activities
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_freetier_ListAccountActivities.html
   */
  public toListAccountActivities() {
    return this.to('ListAccountActivities');
  }

  /**
   * Grants permission to set free tier alert preference (email address)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/tracking-free-tier-usage.html
   */
  public toPutFreeTierAlertPreference() {
    return this.to('PutFreeTierAlertPreference');
  }

  /**
   * Grants permission to trigger an upgrade of account plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_freetier_UpgradeAccountPlan.html
   */
  public toUpgradeAccountPlan() {
    return this.to('UpgradeAccountPlan');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetAccountActivity',
      'GetAccountPlanState',
      'GetFreeTierAlertPreference',
      'GetFreeTierUsage'
    ],
    List: [
      'ListAccountActivities'
    ],
    Write: [
      'PutFreeTierAlertPreference',
      'UpgradeAccountPlan'
    ]
  };
}
