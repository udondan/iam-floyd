import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [supportplans](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupportplans.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Supportplans extends PolicyStatement {
  public servicePrefix = 'supportplans';

  /**
   * Statement provider for service [supportplans](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupportplans.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create support plan schedules for this AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html
   */
  public toCreateSupportPlanSchedule() {
    return this.to('CreateSupportPlanSchedule');
  }

  /**
   * Grants permission to view details about the current support plan for this AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html
   */
  public toGetSupportPlan() {
    return this.to('GetSupportPlan');
  }

  /**
   * Grants permission to view details about the status for a request to update a support plan
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html
   */
  public toGetSupportPlanUpdateStatus() {
    return this.to('GetSupportPlanUpdateStatus');
  }

  /**
   * Grants permission to view a list of all support plan modifiers for this AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html
   */
  public toListSupportPlanModifiers() {
    return this.to('ListSupportPlanModifiers');
  }

  /**
   * Grants permission to update the support plan for this AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html
   */
  public toStartSupportPlanUpdate() {
    return this.to('StartSupportPlanUpdate');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateSupportPlanSchedule',
      'StartSupportPlanUpdate'
    ],
    Read: [
      'GetSupportPlan',
      'GetSupportPlanUpdateStatus'
    ],
    List: [
      'ListSupportPlanModifiers'
    ]
  };
}
