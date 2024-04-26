import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [signin](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssignin.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Signin extends PolicyStatement {
  public servicePrefix = 'signin';

  /**
   * Statement provider for service [signin](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssignin.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Creates trusted identity propagation application for console
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso:CreateApplication
   * - sso:GetSharedSsoConfiguration
   * - sso:ListApplications
   * - sso:PutApplicationAssignmentConfiguration
   * - sso:PutApplicationAuthenticationMethod
   * - sso:PutApplicationGrant
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference/create-trusted-identity-propagation-application-for-console.html
   */
  public toCreateTrustedIdentityPropagationApplicationForConsole() {
    return this.to('CreateTrustedIdentityPropagationApplicationForConsole');
  }

  /**
   * Lists trusted identity propagation application for console
   *
   * Access Level: List
   *
   * Dependent actions:
   * - sso:GetSharedSsoConfiguration
   * - sso:ListApplications
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference/list-trusted-identity-propagation-application-for-console.html
   */
  public toListTrustedIdentityPropagationApplicationsForConsole() {
    return this.to('ListTrustedIdentityPropagationApplicationsForConsole');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateTrustedIdentityPropagationApplicationForConsole'
    ],
    List: [
      'ListTrustedIdentityPropagationApplicationsForConsole'
    ]
  };
}
