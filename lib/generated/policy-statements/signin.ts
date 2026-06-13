import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to authenticate to the AWS Management Console
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPrincipalArn()
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference/API_Authenticate.html
   */
  public toAuthenticate() {
    return this.to('Authenticate');
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
   * Grants permission to create an AWS account through the AWS Management Console sign-up flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/console-private-access.html
   */
  public toCreateAccount() {
    return this.to('CreateAccount');
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
   * Grants permission to disable console authorization configuration for an AWS account or organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference/API_DeleteConsoleAuthorizationConfiguration.html
   */
  public toDeleteConsoleAuthorizationConfiguration() {
    return this.to('DeleteConsoleAuthorizationConfiguration');
  }

  /**
   * Grants permission to remove a permission statement from the account's SignIn Resource Based Policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference/API_DeleteResourcePermissionStatement.html
   */
  public toDeleteResourcePermissionStatement() {
    return this.to('DeleteResourcePermissionStatement');
  }

  /**
   * Grants permission to retrieve console authorization configuration for an AWS account or organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference/API_GetConsoleAuthorizationConfiguration.html
   */
  public toGetConsoleAuthorizationConfiguration() {
    return this.to('GetConsoleAuthorizationConfiguration');
  }

  /**
   * Grants permission to retrieve SignIn Resource Based Policy document that is attached with your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to list the SignIn Resource Based Policy statements in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference/API_ListResourcePermissionStatements.html
   */
  public toListResourcePermissionStatements() {
    return this.to('ListResourcePermissionStatements');
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

  /**
   * Grants permission to enable console authorization configuration for an AWS account or organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference/API_PutConsoleAuthorizationConfiguration.html
   */
  public toPutConsoleAuthorizationConfiguration() {
    return this.to('PutConsoleAuthorizationConfiguration');
  }

  /**
   * Grants permission to create a permission statement in the account's SignIn resource-based policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference/API_PutResourcePermissionStatement.html
   */
  public toPutResourcePermissionStatement() {
    return this.to('PutResourcePermissionStatement');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'Authenticate',
      'AuthorizeOAuth2Access',
      'CreateOAuth2Token',
      'GetConsoleAuthorizationConfiguration',
      'GetResourcePolicy'
    ],
    Write: [
      'CreateAccount',
      'CreateTrustedIdentityPropagationApplicationForConsole',
      'DeleteConsoleAuthorizationConfiguration',
      'DeleteResourcePermissionStatement',
      'PutConsoleAuthorizationConfiguration',
      'PutResourcePermissionStatement'
    ],
    List: [
      'ListResourcePermissionStatements',
      'ListTrustedIdentityPropagationApplicationsForConsole'
    ]
  };

  /**
   * Adds a resource of type oauth2-public-client-localhost to the statement
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onOauth2PublicClientLocalhost(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:signin:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:oauth2/public-client/localhost`);
  }

  /**
   * Adds a resource of type oauth2-public-client-remote to the statement
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onOauth2PublicClientRemote(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:signin:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:oauth2/public-client/remote`);
  }

  /**
   * Adds a resource of type console to the statement
   *
   * https://docs.aws.amazon.com/signin/latest/APIReference
   *
   * @param consoleName - Identifier for the consoleName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConsole(consoleName: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:signin:::console/${ consoleName }`);
  }

  /**
   * Filters access by the principal ARN during pre-authentication console sign-in
   *
   * https://docs.aws.amazon.com/signin/latest/userguide/reference-signin-condition-keys.html
   *
   * Applies to actions:
   * - .toAuthenticate()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifPrincipalArn(value: string | string[], operator?: Operator | string) {
    return this.if(`PrincipalArn`, value, operator ?? 'ArnLike');
  }
}
