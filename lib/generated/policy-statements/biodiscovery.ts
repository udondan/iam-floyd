import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [researchstudio](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbiodiscovery.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Researchstudio extends PolicyStatement {
  public servicePrefix = 'researchstudio';

  /**
   * Statement provider for service [researchstudio](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbiodiscovery.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to assign princiapl
   *
   * Access Level: Write
   */
  public toAssignPrincipal() {
    return this.to('AssignPrincipal');
  }

  /**
   * Grants permission to create application
   *
   * Access Level: Write
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to delete application
   *
   * Access Level: Write
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete principal
   *
   * Access Level: Write
   */
  public toDeletePrincipal() {
    return this.to('DeletePrincipal');
  }

  /**
   * Grants permission to get application
   *
   * Access Level: Read
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Grants permission to list applications
   *
   * Access Level: List
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssignPrincipal',
      'CreateApplication',
      'DeleteApplication',
      'DeletePrincipal'
    ],
    Read: [
      'GetApplication'
    ],
    List: [
      'ListApplications'
    ]
  };
}
