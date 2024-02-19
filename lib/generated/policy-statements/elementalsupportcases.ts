import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [elemental-support-cases](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalsupportcases.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ElementalSupportCases extends PolicyStatement {
  public servicePrefix = 'elemental-support-cases';

  /**
   * Statement provider for service [elemental-support-cases](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalsupportcases.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to verify whether the caller has the permissions to perform support case operations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toCheckCasePermission() {
    return this.to('CheckCasePermission');
  }

  /**
   * Grants permission to create a support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toCreateCase() {
    return this.to('CreateCase');
  }

  /**
   * Grants permission to describe a support case in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetCase() {
    return this.to('GetCase');
  }

  /**
   * Grants permission to list the support cases in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetCases() {
    return this.to('GetCases');
  }

  /**
   * Grants permission to update a support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toUpdateCase() {
    return this.to('UpdateCase');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CheckCasePermission',
      'CreateCase',
      'UpdateCase'
    ],
    Read: [
      'GetCase',
      'GetCases'
    ]
  };
}
