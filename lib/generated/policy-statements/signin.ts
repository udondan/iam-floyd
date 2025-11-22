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
   * Grants permission to authenticate through a browser and obtain an OAuth 2.0 authorization code for credential exchange
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference/API_AuthorizeOAuth2Access.html
   */
  public toAuthorizeOAuth2Access() {
    return this.to('AuthorizeOAuth2Access');
  }

  /**
   * Grants permission to exchange an authorization code for OAuth 2.0 access token and refresh token that can be used to access AWS services from developer tools and applications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference/API_CreateOAuth2Token.html
   */
  public toCreateOAuth2Token() {
    return this.to('CreateOAuth2Token');
  }

  /**
   * Grants permission to create an Identity Center application that represents the AWS Management Console on an Identity Center organization instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso:CreateApplication
   * - sso:GetSharedSsoConfiguration
   * - sso:ListApplications
   * - sso:PutApplicationAccessScope
   * - sso:PutApplicationAssignmentConfiguration
   * - sso:PutApplicationAuthenticationMethod
   * - sso:PutApplicationGrant
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference/API_CreateTrustedIdentityPropagationApplicationForConsole.html
   */
  public toCreateTrustedIdentityPropagationApplicationForConsole() {
    return this.to('CreateTrustedIdentityPropagationApplicationForConsole');
  }

  /**
   * Grants permission to list all Identity Center applications that represent the AWS Management Console
   *
   * Access Level: List
   *
   * Dependent actions:
   * - sso:GetSharedSsoConfiguration
   * - sso:ListApplications
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference/API_ListTrustedIdentityPropagationApplicationsForConsole.html
   */
  public toListTrustedIdentityPropagationApplicationsForConsole() {
    return this.to('ListTrustedIdentityPropagationApplicationsForConsole');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'AuthorizeOAuth2Access',
      'CreateOAuth2Token'
    ],
    Write: [
      'CreateTrustedIdentityPropagationApplicationForConsole'
    ],
    List: [
      'ListTrustedIdentityPropagationApplicationsForConsole'
    ]
  };
}
