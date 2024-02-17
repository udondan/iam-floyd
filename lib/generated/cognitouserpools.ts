import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [cognito-idp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitouserpools.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CognitoIdp extends PolicyStatement {
  public servicePrefix = 'cognito-idp';

  /**
   * Statement provider for service [cognito-idp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitouserpools.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add user attributes to the user pool schema
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AddCustomAttributes.html
   */
  public toAddCustomAttributes() {
    return this.to('AddCustomAttributes');
  }

  /**
   * Grants permission to add any user to any group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminAddUserToGroup.html
   */
  public toAdminAddUserToGroup() {
    return this.to('AdminAddUserToGroup');
  }

  /**
   * Grants permission to confirm any user's registration without a confirmation code
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminConfirmSignUp.html
   */
  public toAdminConfirmSignUp() {
    return this.to('AdminConfirmSignUp');
  }

  /**
   * Grants permission to create new users and send welcome messages via email or SMS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminCreateUser.html
   */
  public toAdminCreateUser() {
    return this.to('AdminCreateUser');
  }

  /**
   * Grants permission to delete any user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUser.html
   */
  public toAdminDeleteUser() {
    return this.to('AdminDeleteUser');
  }

  /**
   * Grants permission to delete attributes from any user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUserAttributes.html
   */
  public toAdminDeleteUserAttributes() {
    return this.to('AdminDeleteUserAttributes');
  }

  /**
   * Grants permission to unlink any user pool user from a third-party identity provider (IdP) user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableProviderForUser.html
   */
  public toAdminDisableProviderForUser() {
    return this.to('AdminDisableProviderForUser');
  }

  /**
   * Grants permission to deactivate any user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableUser.html
   */
  public toAdminDisableUser() {
    return this.to('AdminDisableUser');
  }

  /**
   * Grants permission to activate any user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminEnableUser.html
   */
  public toAdminEnableUser() {
    return this.to('AdminEnableUser');
  }

  /**
   * Grants permission to deregister any user's devices
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminForgetDevice.html
   */
  public toAdminForgetDevice() {
    return this.to('AdminForgetDevice');
  }

  /**
   * Grants permission to get information about any user's devices
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetDevice.html
   */
  public toAdminGetDevice() {
    return this.to('AdminGetDevice');
  }

  /**
   * Grants permission to look up any user by user name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetUser.html
   */
  public toAdminGetUser() {
    return this.to('AdminGetUser');
  }

  /**
   * Grants permission to authenticate any user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html
   */
  public toAdminInitiateAuth() {
    return this.to('AdminInitiateAuth');
  }

  /**
   * Grants permission to link any user pool user to a third-party IdP user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html
   */
  public toAdminLinkProviderForUser() {
    return this.to('AdminLinkProviderForUser');
  }

  /**
   * Grants permission to list any user's remembered devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListDevices.html
   */
  public toAdminListDevices() {
    return this.to('AdminListDevices');
  }

  /**
   * Grants permission to list the groups that any user belongs to
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListGroupsForUser.html
   */
  public toAdminListGroupsForUser() {
    return this.to('AdminListGroupsForUser');
  }

  /**
   * Grants permission to lists sign-in events for any user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListUserAuthEvents.html
   */
  public toAdminListUserAuthEvents() {
    return this.to('AdminListUserAuthEvents');
  }

  /**
   * Grants permission to remove any user from any group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRemoveUserFromGroup.html
   */
  public toAdminRemoveUserFromGroup() {
    return this.to('AdminRemoveUserFromGroup');
  }

  /**
   * Grants permission to reset any user's password
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminResetUserPassword.html
   */
  public toAdminResetUserPassword() {
    return this.to('AdminResetUserPassword');
  }

  /**
   * Grants permission to respond to an authentication challenge during the authentication of any user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRespondToAuthChallenge.html
   */
  public toAdminRespondToAuthChallenge() {
    return this.to('AdminRespondToAuthChallenge');
  }

  /**
   * Grants permission to set any user's preferred MFA method
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html
   */
  public toAdminSetUserMFAPreference() {
    return this.to('AdminSetUserMFAPreference');
  }

  /**
   * Grants permission to set any user's password
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserPassword.html
   */
  public toAdminSetUserPassword() {
    return this.to('AdminSetUserPassword');
  }

  /**
   * Grants permission to set user settings for any user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserSettings.html
   */
  public toAdminSetUserSettings() {
    return this.to('AdminSetUserSettings');
  }

  /**
   * Grants permission to update advanced security feedback for any user's authentication event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateAuthEventFeedback.html
   */
  public toAdminUpdateAuthEventFeedback() {
    return this.to('AdminUpdateAuthEventFeedback');
  }

  /**
   * Grants permission to update the status of any user's remembered devices
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateDeviceStatus.html
   */
  public toAdminUpdateDeviceStatus() {
    return this.to('AdminUpdateDeviceStatus');
  }

  /**
   * Grants permission to updates any user's standard or custom attributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html
   */
  public toAdminUpdateUserAttributes() {
    return this.to('AdminUpdateUserAttributes');
  }

  /**
   * Grants permission to sign out any user from all sessions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUserGlobalSignOut.html
   */
  public toAdminUserGlobalSignOut() {
    return this.to('AdminUserGlobalSignOut');
  }

  /**
   * Grants permission to return a unique generated shared secret key code for the user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AssociateSoftwareToken.html
   */
  public toAssociateSoftwareToken() {
    return this.to('AssociateSoftwareToken');
  }

  /**
   * Grants permission to associate the user pool with an AWS WAF web ACL
   *
   * Access Level: Write
   */
  public toAssociateWebACL() {
    return this.to('AssociateWebACL');
  }

  /**
   * Grants permission to change the password for a specified user in a user pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ChangePassword.html
   */
  public toChangePassword() {
    return this.to('ChangePassword');
  }

  /**
   * Grants permission to confirm tracking of the device. This API call is the call that begins device tracking
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html
   */
  public toConfirmDevice() {
    return this.to('ConfirmDevice');
  }

  /**
   * Grants permission to allow a user to enter a confirmation code to reset a forgotten password
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html
   */
  public toConfirmForgotPassword() {
    return this.to('ConfirmForgotPassword');
  }

  /**
   * Grants permission to confirm registration of a user and handles the existing alias from a previous user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmSignUp.html
   */
  public toConfirmSignUp() {
    return this.to('ConfirmSignUp');
  }

  /**
   * Grants permission to create new user pool groups
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    return this.to('CreateGroup');
  }

  /**
   * Grants permission to add identity providers to user pools
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateIdentityProvider.html
   */
  public toCreateIdentityProvider() {
    return this.to('CreateIdentityProvider');
  }

  /**
   * Grants permission to create and configure scopes for OAuth 2.0 resource servers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateResourceServer.html
   */
  public toCreateResourceServer() {
    return this.to('CreateResourceServer');
  }

  /**
   * Grants permission to create user CSV import jobs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserImportJob.html
   */
  public toCreateUserImportJob() {
    return this.to('CreateUserImportJob');
  }

  /**
   * Grants permission to create and set password policy for user pools
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPool.html
   */
  public toCreateUserPool() {
    return this.to('CreateUserPool');
  }

  /**
   * Grants permission to create user pool app clients
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolClient.html
   */
  public toCreateUserPoolClient() {
    return this.to('CreateUserPoolClient');
  }

  /**
   * Grants permission to add user pool domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolDomain.html
   */
  public toCreateUserPoolDomain() {
    return this.to('CreateUserPoolDomain');
  }

  /**
   * Grants permission to delete any empty user pool group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Grants permission to delete any identity provider from user pools
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteIdentityProvider.html
   */
  public toDeleteIdentityProvider() {
    return this.to('DeleteIdentityProvider');
  }

  /**
   * Grants permission to delete any OAuth 2.0 resource server from user pools
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteResourceServer.html
   */
  public toDeleteResourceServer() {
    return this.to('DeleteResourceServer');
  }

  /**
   * Grants permission to allow a user to delete one's self
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to delete the attributes for a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserAttributes.html
   */
  public toDeleteUserAttributes() {
    return this.to('DeleteUserAttributes');
  }

  /**
   * Grants permission to delete user pools
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPool.html
   */
  public toDeleteUserPool() {
    return this.to('DeleteUserPool');
  }

  /**
   * Grants permission to delete any user pool app client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPoolClient.html
   */
  public toDeleteUserPoolClient() {
    return this.to('DeleteUserPoolClient');
  }

  /**
   * Grants permission to delete any user pool domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPoolDomain.html
   */
  public toDeleteUserPoolDomain() {
    return this.to('DeleteUserPoolDomain');
  }

  /**
   * Grants permission to describe any user pool identity provider
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeIdentityProvider.html
   */
  public toDescribeIdentityProvider() {
    return this.to('DescribeIdentityProvider');
  }

  /**
   * Grants permission to describe any OAuth 2.0 resource server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeResourceServer.html
   */
  public toDescribeResourceServer() {
    return this.to('DescribeResourceServer');
  }

  /**
   * Grants permission to describe the risk configuration settings of user pools and app clients
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeRiskConfiguration.html
   */
  public toDescribeRiskConfiguration() {
    return this.to('DescribeRiskConfiguration');
  }

  /**
   * Grants permission to describe any user import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserImportJob.html
   */
  public toDescribeUserImportJob() {
    return this.to('DescribeUserImportJob');
  }

  /**
   * Grants permission to describe user pools
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html
   */
  public toDescribeUserPool() {
    return this.to('DescribeUserPool');
  }

  /**
   * Grants permission to describe any user pool app client
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html
   */
  public toDescribeUserPoolClient() {
    return this.to('DescribeUserPoolClient');
  }

  /**
   * Grants permission to describe any user pool domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolDomain.html
   */
  public toDescribeUserPoolDomain() {
    return this.to('DescribeUserPoolDomain');
  }

  /**
   * Grants permission to disassociate the user pool with an AWS WAF web ACL
   *
   * Access Level: Write
   */
  public toDisassociateWebACL() {
    return this.to('DisassociateWebACL');
  }

  /**
   * Grants permission to forget the specified device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgetDevice.html
   */
  public toForgetDevice() {
    return this.to('ForgetDevice');
  }

  /**
   * Grants permission to send a message to the end user with a confirmation code that is required to change the user's password
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html
   */
  public toForgotPassword() {
    return this.to('ForgotPassword');
  }

  /**
   * Grants permission to generate headers for a user import .csv file
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetCSVHeader.html
   */
  public toGetCSVHeader() {
    return this.to('GetCSVHeader');
  }

  /**
   * Grants permission to get the device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetDevice.html
   */
  public toGetDevice() {
    return this.to('GetDevice');
  }

  /**
   * Grants permission to describe a user pool group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetGroup.html
   */
  public toGetGroup() {
    return this.to('GetGroup');
  }

  /**
   * Grants permission to correlate a user pool IdP identifier to the IdP Name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetIdentityProviderByIdentifier.html
   */
  public toGetIdentityProviderByIdentifier() {
    return this.to('GetIdentityProviderByIdentifier');
  }

  /**
   * Grants permission to get the detailed activity logging configuration for a user pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetLogDeliveryConfiguration.html
   */
  public toGetLogDeliveryConfiguration() {
    return this.to('GetLogDeliveryConfiguration');
  }

  /**
   * Grants permission to look up signing certificates for user pools
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetSigningCertificate.html
   */
  public toGetSigningCertificate() {
    return this.to('GetSigningCertificate');
  }

  /**
   * Grants permission to get UI customization information for the hosted UI of any app client
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUICustomization.html
   */
  public toGetUICustomization() {
    return this.to('GetUICustomization');
  }

  /**
   * Grants permission to get the user attributes and metadata for a user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUser.html
   */
  public toGetUser() {
    return this.to('GetUser');
  }

  /**
   * Grants permission to get the user attribute verification code for the specified attribute name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserAttributeVerificationCode.html
   */
  public toGetUserAttributeVerificationCode() {
    return this.to('GetUserAttributeVerificationCode');
  }

  /**
   * Grants permission to look up the MFA configuration of user pools
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserPoolMfaConfig.html
   */
  public toGetUserPoolMfaConfig() {
    return this.to('GetUserPoolMfaConfig');
  }

  /**
   * Grants permission to get the AWS WAF web ACL that is associated with an Amazon Cognito user pool
   *
   * Access Level: Read
   */
  public toGetWebACLForResource() {
    return this.to('GetWebACLForResource');
  }

  /**
   * Grants permission to sign out users from all devices
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GlobalSignOut.html
   */
  public toGlobalSignOut() {
    return this.to('GlobalSignOut');
  }

  /**
   * Grants permission to initiate the authentication flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html
   */
  public toInitiateAuth() {
    return this.to('InitiateAuth');
  }

  /**
   * Grants permission to list the devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListDevices.html
   */
  public toListDevices() {
    return this.to('ListDevices');
  }

  /**
   * Grants permission to list all groups in user pools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Grants permission to list all identity providers in user pools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListIdentityProviders.html
   */
  public toListIdentityProviders() {
    return this.to('ListIdentityProviders');
  }

  /**
   * Grants permission to list all resource servers in user pools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListResourceServers.html
   */
  public toListResourceServers() {
    return this.to('ListResourceServers');
  }

  /**
   * Grants permission to list the user pools that are associated with an AWS WAF web ACL
   *
   * Access Level: List
   */
  public toListResourcesForWebACL() {
    return this.to('ListResourcesForWebACL');
  }

  /**
   * Grants permission to list the tags that are assigned to an Amazon Cognito user pool
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all user import jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserImportJobs.html
   */
  public toListUserImportJobs() {
    return this.to('ListUserImportJobs');
  }

  /**
   * Grants permission to list all app clients in user pools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPoolClients.html
   */
  public toListUserPoolClients() {
    return this.to('ListUserPoolClients');
  }

  /**
   * Grants permission to list all user pools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPools.html
   */
  public toListUserPools() {
    return this.to('ListUserPools');
  }

  /**
   * Grants permission to list all user pool users
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to list the users in any group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsersInGroup.html
   */
  public toListUsersInGroup() {
    return this.to('ListUsersInGroup');
  }

  /**
   * Grants permission to resend the confirmation (for confirmation of registration) to a specific user in the user pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ResendConfirmationCode.html
   */
  public toResendConfirmationCode() {
    return this.to('ResendConfirmationCode');
  }

  /**
   * Grants permission to respond to the authentication challenge
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RespondToAuthChallenge.html
   */
  public toRespondToAuthChallenge() {
    return this.to('RespondToAuthChallenge');
  }

  /**
   * Grants permission to revoke all of the access tokens generated by the specified refresh token
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html
   */
  public toRevokeToken() {
    return this.to('RevokeToken');
  }

  /**
   * Grants permission to set up or modify the detailed activity logging configuration of a user pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetLogDeliveryConfiguration.html
   */
  public toSetLogDeliveryConfiguration() {
    return this.to('SetLogDeliveryConfiguration');
  }

  /**
   * Grants permission to set risk configuration for user pools and app clients
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetRiskConfiguration.html
   */
  public toSetRiskConfiguration() {
    return this.to('SetRiskConfiguration');
  }

  /**
   * Grants permission to customize the hosted UI for any app client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUICustomization.html
   */
  public toSetUICustomization() {
    return this.to('SetUICustomization');
  }

  /**
   * Grants permission to set MFA preference for the user in the userpool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html
   */
  public toSetUserMFAPreference() {
    return this.to('SetUserMFAPreference');
  }

  /**
   * Grants permission to set user pool MFA configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserPoolMfaConfig.html
   */
  public toSetUserPoolMfaConfig() {
    return this.to('SetUserPoolMfaConfig');
  }

  /**
   * Grants permission to set the user settings like multi-factor authentication (MFA)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserSettings.html
   */
  public toSetUserSettings() {
    return this.to('SetUserSettings');
  }

  /**
   * Grants permission to register the user in the specified user pool and creates a user name, password, and user attributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SignUp.html
   */
  public toSignUp() {
    return this.to('SignUp');
  }

  /**
   * Grants permission to start any user import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_StartUserImportJob.html
   */
  public toStartUserImportJob() {
    return this.to('StartUserImportJob');
  }

  /**
   * Grants permission to stop any user import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_StopUserImportJob.html
   */
  public toStopUserImportJob() {
    return this.to('StopUserImportJob');
  }

  /**
   * Grants permission to tag a user pool
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a user pool
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the feedback for the user authentication event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateAuthEventFeedback.html
   */
  public toUpdateAuthEventFeedback() {
    return this.to('UpdateAuthEventFeedback');
  }

  /**
   * Grants permission to update the device status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html
   */
  public toUpdateDeviceStatus() {
    return this.to('UpdateDeviceStatus');
  }

  /**
   * Grants permission to update the configuration of any group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    return this.to('UpdateGroup');
  }

  /**
   * Grants permission to update the configuration of any user pool IdP
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateIdentityProvider.html
   */
  public toUpdateIdentityProvider() {
    return this.to('UpdateIdentityProvider');
  }

  /**
   * Grants permission to update the configuration of any OAuth 2.0 resource server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateResourceServer.html
   */
  public toUpdateResourceServer() {
    return this.to('UpdateResourceServer');
  }

  /**
   * Grants permission to allow a user to update a specific attribute (one at a time)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserAttributes.html
   */
  public toUpdateUserAttributes() {
    return this.to('UpdateUserAttributes');
  }

  /**
   * Grants permission to updates the configuration of user pools
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPool.html
   */
  public toUpdateUserPool() {
    return this.to('UpdateUserPool');
  }

  /**
   * Grants permission to update any user pool client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolClient.html
   */
  public toUpdateUserPoolClient() {
    return this.to('UpdateUserPoolClient');
  }

  /**
   * Grants permission to replace the certificate for any custom domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolDomain.html
   */
  public toUpdateUserPoolDomain() {
    return this.to('UpdateUserPoolDomain');
  }

  /**
   * Grants permission to register a user's entered TOTP code and mark the user's software token MFA status as verified if successful
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html
   */
  public toVerifySoftwareToken() {
    return this.to('VerifySoftwareToken');
  }

  /**
   * Grants permission to verify a user attribute using a one time verification code
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifyUserAttribute.html
   */
  public toVerifyUserAttribute() {
    return this.to('VerifyUserAttribute');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddCustomAttributes',
      'AdminAddUserToGroup',
      'AdminConfirmSignUp',
      'AdminCreateUser',
      'AdminDeleteUser',
      'AdminDeleteUserAttributes',
      'AdminDisableProviderForUser',
      'AdminDisableUser',
      'AdminEnableUser',
      'AdminForgetDevice',
      'AdminInitiateAuth',
      'AdminLinkProviderForUser',
      'AdminRemoveUserFromGroup',
      'AdminResetUserPassword',
      'AdminRespondToAuthChallenge',
      'AdminSetUserMFAPreference',
      'AdminSetUserPassword',
      'AdminSetUserSettings',
      'AdminUpdateAuthEventFeedback',
      'AdminUpdateDeviceStatus',
      'AdminUpdateUserAttributes',
      'AdminUserGlobalSignOut',
      'AssociateSoftwareToken',
      'AssociateWebACL',
      'ChangePassword',
      'ConfirmDevice',
      'ConfirmForgotPassword',
      'ConfirmSignUp',
      'CreateGroup',
      'CreateIdentityProvider',
      'CreateResourceServer',
      'CreateUserImportJob',
      'CreateUserPool',
      'CreateUserPoolClient',
      'CreateUserPoolDomain',
      'DeleteGroup',
      'DeleteIdentityProvider',
      'DeleteResourceServer',
      'DeleteUser',
      'DeleteUserAttributes',
      'DeleteUserPool',
      'DeleteUserPoolClient',
      'DeleteUserPoolDomain',
      'DisassociateWebACL',
      'ForgetDevice',
      'ForgotPassword',
      'GlobalSignOut',
      'InitiateAuth',
      'ResendConfirmationCode',
      'RespondToAuthChallenge',
      'RevokeToken',
      'SetLogDeliveryConfiguration',
      'SetRiskConfiguration',
      'SetUICustomization',
      'SetUserMFAPreference',
      'SetUserPoolMfaConfig',
      'SetUserSettings',
      'SignUp',
      'StartUserImportJob',
      'StopUserImportJob',
      'UpdateAuthEventFeedback',
      'UpdateDeviceStatus',
      'UpdateGroup',
      'UpdateIdentityProvider',
      'UpdateResourceServer',
      'UpdateUserAttributes',
      'UpdateUserPool',
      'UpdateUserPoolClient',
      'UpdateUserPoolDomain',
      'VerifySoftwareToken',
      'VerifyUserAttribute'
    ],
    Read: [
      'AdminGetDevice',
      'AdminGetUser',
      'AdminListUserAuthEvents',
      'DescribeIdentityProvider',
      'DescribeResourceServer',
      'DescribeRiskConfiguration',
      'DescribeUserImportJob',
      'DescribeUserPool',
      'DescribeUserPoolClient',
      'DescribeUserPoolDomain',
      'GetCSVHeader',
      'GetDevice',
      'GetGroup',
      'GetIdentityProviderByIdentifier',
      'GetLogDeliveryConfiguration',
      'GetSigningCertificate',
      'GetUICustomization',
      'GetUser',
      'GetUserAttributeVerificationCode',
      'GetUserPoolMfaConfig',
      'GetWebACLForResource'
    ],
    List: [
      'AdminListDevices',
      'AdminListGroupsForUser',
      'ListDevices',
      'ListGroups',
      'ListIdentityProviders',
      'ListResourceServers',
      'ListResourcesForWebACL',
      'ListTagsForResource',
      'ListUserImportJobs',
      'ListUserPoolClients',
      'ListUserPools',
      'ListUsers',
      'ListUsersInGroup'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type userpool to the statement
   *
   * https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html
   *
   * @param userPoolId - Identifier for the userPoolId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUserpool(userPoolId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:cognito-idp:${ region || this.defaultRegion }:${ account || this.defaultAccount }:userpool/${ userPoolId }`);
  }

  /**
   * Adds a resource of type webacl to the statement
   *
   * https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-waf.html
   *
   * @param scope - Identifier for the scope.
   * @param name - Identifier for the name.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onWebacl(scope: string, name: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:wafv2:${ region || this.defaultRegion }:${ account || this.defaultAccount }:${ scope }/webacl/${ name }/${ id }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateUserPool()
   * - .toTagResource()
   * - .toUpdateUserPool()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateUserPool()
   *
   * Applies to resource types:
   * - userpool
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a key that is present in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateUserPool()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateUserPool()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
