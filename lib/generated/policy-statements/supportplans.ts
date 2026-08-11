import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [supportplans](https://docs.aws.amazon.com/service-authorization/latest/reference/list_supportplans.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Supportplans extends PolicyStatement {
  public servicePrefix = 'supportplans';

  /**
   * Statement provider for service [supportplans](https://docs.aws.amazon.com/service-authorization/latest/reference/list_supportplans.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a support agreement for this AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html
   */
  public toAcceptSupportAgreement() {
    return this.to('AcceptSupportAgreement');
  }

  /**
   * Grants permission to cancel a support agreement for this AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html
   */
  public toCancelSupportAgreement() {
    return this.to('CancelSupportAgreement');
  }

  /**
   * Grants permission to create a support agreement for this AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html
   */
  public toCreateSupportAgreement() {
    return this.to('CreateSupportAgreement');
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
   * Grants permission to view details about a support agreement for this AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html
   */
  public toGetSupportAgreement() {
    return this.to('GetSupportAgreement');
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
   * Grants permission to list support agreement revisions for this AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html
   */
  public toListSupportAgreementRevisions() {
    return this.to('ListSupportAgreementRevisions');
  }

  /**
   * Grants permission to list support agreements for this AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html
   */
  public toListSupportAgreements() {
    return this.to('ListSupportAgreements');
  }

  /**
   * Grants permission to view a list of all support plan modifiers for this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html
   */
  public toListSupportPlanModifiers() {
    return this.to('ListSupportPlanModifiers');
  }

  /**
   * Grants permission to reject a support agreement for this AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html
   */
  public toRejectSupportAgreement() {
    return this.to('RejectSupportAgreement');
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

  /**
   * Grants permission to update a support agreement for this AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html
   */
  public toUpdateSupportAgreement() {
    return this.to('UpdateSupportAgreement');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptSupportAgreement',
      'CancelSupportAgreement',
      'CreateSupportAgreement',
      'CreateSupportPlanSchedule',
      'RejectSupportAgreement',
      'StartSupportPlanUpdate',
      'UpdateSupportAgreement'
    ],
    Read: [
      'GetSupportAgreement',
      'GetSupportPlan',
      'GetSupportPlanUpdateStatus'
    ],
    List: [
      'ListSupportAgreementRevisions',
      'ListSupportAgreements',
      'ListSupportPlanModifiers'
    ]
  };
}
