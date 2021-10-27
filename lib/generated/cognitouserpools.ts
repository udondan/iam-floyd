import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds additional user attributes to the user pool schema.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AddCustomAttributes.html
   */
  public toAddCustomAttributes() {
    return this.to('AddCustomAttributes');
  }

  /**
   * Adds the specified user to the specified group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminAddUserToGroup.html
   */
  public toAdminAddUserToGroup() {
    return this.to('AdminAddUserToGroup');
  }

  /**
   * Confirms user registration as an admin without using a confirmation code. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminConfirmSignUp.html
   */
  public toAdminConfirmSignUp() {
    return this.to('AdminConfirmSignUp');
  }

  /**
   * Creates a new user in the specified user pool and sends a welcome message via email or phone (SMS).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminCreateUser.html
   */
  public toAdminCreateUser() {
    return this.to('AdminCreateUser');
  }

  /**
   * Deletes a user as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUser.html
   */
  public toAdminDeleteUser() {
    return this.to('AdminDeleteUser');
  }

  /**
   * Deletes the user attributes in a user pool as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUserAttributes.html
   */
  public toAdminDeleteUserAttributes() {
    return this.to('AdminDeleteUserAttributes');
  }

  /**
   * Disables the user from signing in with the specified external (SAML or social) identity provider.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableProviderForUser.html
   */
  public toAdminDisableProviderForUser() {
    return this.to('AdminDisableProviderForUser');
  }

  /**
   * Disables the specified user as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableUser.html
   */
  public toAdminDisableUser() {
    return this.to('AdminDisableUser');
  }

  /**
   * Enables the specified user as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminEnableUser.html
   */
  public toAdminEnableUser() {
    return this.to('AdminEnableUser');
  }

  /**
   * Forgets the device, as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminForgetDevice.html
   */
  public toAdminForgetDevice() {
    return this.to('AdminForgetDevice');
  }

  /**
   * Gets the device, as an administrator.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetDevice.html
   */
  public toAdminGetDevice() {
    return this.to('AdminGetDevice');
  }

  /**
   * Gets the specified user by user name in a user pool as an administrator. Works on any user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetUser.html
   */
  public toAdminGetUser() {
    return this.to('AdminGetUser');
  }

  /**
   * Authenticates a user in a user pool as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html
   */
  public toAdminInitiateAuth() {
    return this.to('AdminInitiateAuth');
  }

  /**
   * Links an existing user account in a user pool (DestinationUser) to an identity from an external identity provider (SourceUser) based on a specified attribute name and value from the external identity provider.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html
   */
  public toAdminLinkProviderForUser() {
    return this.to('AdminLinkProviderForUser');
  }

  /**
   * Lists devices, as an administrator.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListDevices.html
   */
  public toAdminListDevices() {
    return this.to('AdminListDevices');
  }

  /**
   * Lists the groups that the user belongs to.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html
   */
  public toAdminListGroupsForUser() {
    return this.to('AdminListGroupsForUser');
  }

  /**
   * Lists the authentication events for the user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListUserAuthEvents.html
   */
  public toAdminListUserAuthEvents() {
    return this.to('AdminListUserAuthEvents');
  }

  /**
   * Removes the specified user from the specified group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRemoveUserFromGroup.html
   */
  public toAdminRemoveUserFromGroup() {
    return this.to('AdminRemoveUserFromGroup');
  }

  /**
   * Resets the specified user's password in a user pool as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminResetUserPassword.html
   */
  public toAdminResetUserPassword() {
    return this.to('AdminResetUserPassword');
  }

  /**
   * Responds to an authentication challenge, as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRespondToAuthChallenge.html
   */
  public toAdminRespondToAuthChallenge() {
    return this.to('AdminRespondToAuthChallenge');
  }

  /**
   * Sets MFA preference for the user in the userpool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html
   */
  public toAdminSetUserMFAPreference() {
    return this.to('AdminSetUserMFAPreference');
  }

  /**
   * Sets the specified user's password in a user pool as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserPassword.html
   */
  public toAdminSetUserPassword() {
    return this.to('AdminSetUserPassword');
  }

  /**
   * Sets all the user settings for a specified user name. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserSettings.html
   */
  public toAdminSetUserSettings() {
    return this.to('AdminSetUserSettings');
  }

  /**
   * Updates the feedback for the user authentication event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateAuthEventFeedback.html
   */
  public toAdminUpdateAuthEventFeedback() {
    return this.to('AdminUpdateAuthEventFeedback');
  }

  /**
   * Updates the device status as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateDeviceStatus.html
   */
  public toAdminUpdateDeviceStatus() {
    return this.to('AdminUpdateDeviceStatus');
  }

  /**
   * Updates the specified user's attributes, including developer attributes, as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html
   */
  public toAdminUpdateUserAttributes() {
    return this.to('AdminUpdateUserAttributes');
  }

  /**
   * Signs out users from all devices, as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUserGlobalSignOut.html
   */
  public toAdminUserGlobalSignOut() {
    return this.to('AdminUserGlobalSignOut');
  }

  /**
   * Returns a unique generated shared secret key code for the user account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AssociateSoftwareToken.html
   */
  public toAssociateSoftwareToken() {
    return this.to('AssociateSoftwareToken');
  }

  /**
   * Changes the password for a specified user in a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ChangePassword.html
   */
  public toChangePassword() {
    return this.to('ChangePassword');
  }

  /**
   * Confirms tracking of the device. This API call is the call that begins device tracking.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html
   */
  public toConfirmDevice() {
    return this.to('ConfirmDevice');
  }

  /**
   * Allows a user to enter a confirmation code to reset a forgotten password.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html
   */
  public toConfirmForgotPassword() {
    return this.to('ConfirmForgotPassword');
  }

  /**
   * Confirms registration of a user and handles the existing alias from a previous user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmSignUp.html
   */
  public toConfirmSignUp() {
    return this.to('ConfirmSignUp');
  }

  /**
   * Creates a new group in the specified user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    return this.to('CreateGroup');
  }

  /**
   * Creates an identity provider for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateIdentityProvider.html
   */
  public toCreateIdentityProvider() {
    return this.to('CreateIdentityProvider');
  }

  /**
   * Creates a new OAuth2.0 resource server and defines custom scopes in it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateResourceServer.html
   */
  public toCreateResourceServer() {
    return this.to('CreateResourceServer');
  }

  /**
   * Creates the user import job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserImportJob.html
   */
  public toCreateUserImportJob() {
    return this.to('CreateUserImportJob');
  }

  /**
   * Creates a new Amazon Cognito user pool and sets the password policy for the pool.
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
   * Creates the user pool client.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolClient.html
   */
  public toCreateUserPoolClient() {
    return this.to('CreateUserPoolClient');
  }

  /**
   * Creates a new domain for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolDomain.html
   */
  public toCreateUserPoolDomain() {
    return this.to('CreateUserPoolDomain');
  }

  /**
   * Deletes a group. Currently only groups with no members can be deleted.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Deletes an identity provider for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteIdentityProvider.html
   */
  public toDeleteIdentityProvider() {
    return this.to('DeleteIdentityProvider');
  }

  /**
   * Deletes a resource server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteResourceServer.html
   */
  public toDeleteResourceServer() {
    return this.to('DeleteResourceServer');
  }

  /**
   * Allows a user to delete one's self.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Deletes the attributes for a user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserAttributes.html
   */
  public toDeleteUserAttributes() {
    return this.to('DeleteUserAttributes');
  }

  /**
   * Deletes the specified Amazon Cognito user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPool.html
   */
  public toDeleteUserPool() {
    return this.to('DeleteUserPool');
  }

  /**
   * Allows the developer to delete the user pool client.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPoolClient.html
   */
  public toDeleteUserPoolClient() {
    return this.to('DeleteUserPoolClient');
  }

  /**
   * Deletes a domain for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPoolDomain.html
   */
  public toDeleteUserPoolDomain() {
    return this.to('DeleteUserPoolDomain');
  }

  /**
   * Gets information about a specific identity provider.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeIdentityProvider.html
   */
  public toDescribeIdentityProvider() {
    return this.to('DescribeIdentityProvider');
  }

  /**
   * Describes a resource server.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeResourceServer.html
   */
  public toDescribeResourceServer() {
    return this.to('DescribeResourceServer');
  }

  /**
   * Describes the risk configuration setting for the userpool / userpool client
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeRiskConfiguration.html
   */
  public toDescribeRiskConfiguration() {
    return this.to('DescribeRiskConfiguration');
  }

  /**
   * Describes the user import job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserImportJob.html
   */
  public toDescribeUserImportJob() {
    return this.to('DescribeUserImportJob');
  }

  /**
   * Returns the configuration information and metadata of the specified user pool.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html
   */
  public toDescribeUserPool() {
    return this.to('DescribeUserPool');
  }

  /**
   * Client method for returning the configuration information and metadata of the specified user pool client.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html
   */
  public toDescribeUserPoolClient() {
    return this.to('DescribeUserPoolClient');
  }

  /**
   * Gets information about a domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolDomain.html
   */
  public toDescribeUserPoolDomain() {
    return this.to('DescribeUserPoolDomain');
  }

  /**
   * Forgets the specified device.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgetDevice.html
   */
  public toForgetDevice() {
    return this.to('ForgetDevice');
  }

  /**
   * Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html
   */
  public toForgotPassword() {
    return this.to('ForgotPassword');
  }

  /**
   * Gets the header information for the .csv file to be used as input for the user import job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetCSVHeader.html
   */
  public toGetCSVHeader() {
    return this.to('GetCSVHeader');
  }

  /**
   * Gets the device.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetDevice.html
   */
  public toGetDevice() {
    return this.to('GetDevice');
  }

  /**
   * Gets a group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetGroup.html
   */
  public toGetGroup() {
    return this.to('GetGroup');
  }

  /**
   * Gets the specified identity provider.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetIdentityProviderByIdentifier.html
   */
  public toGetIdentityProviderByIdentifier() {
    return this.to('GetIdentityProviderByIdentifier');
  }

  /**
   * Returns the signing certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetSigningCertificate.html
   */
  public toGetSigningCertificate() {
    return this.to('GetSigningCertificate');
  }

  /**
   * Gets the UI Customization information for a particular app client's app UI, if there is something set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUICustomization.html
   */
  public toGetUICustomization() {
    return this.to('GetUICustomization');
  }

  /**
   * Gets the user attributes and metadata for a user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUser.html
   */
  public toGetUser() {
    return this.to('GetUser');
  }

  /**
   * Gets the user attribute verification code for the specified attribute name.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserAttributeVerificationCode.html
   */
  public toGetUserAttributeVerificationCode() {
    return this.to('GetUserAttributeVerificationCode');
  }

  /**
   * Gets the MFA configuration for the userpool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserPoolMfaConfig.html
   */
  public toGetUserPoolMfaConfig() {
    return this.to('GetUserPoolMfaConfig');
  }

  /**
   * Signs out users from all devices.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GlobalSignOut.html
   */
  public toGlobalSignOut() {
    return this.to('GlobalSignOut');
  }

  /**
   * Initiates the authentication flow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html
   */
  public toInitiateAuth() {
    return this.to('InitiateAuth');
  }

  /**
   * Lists the devices.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListDevices.html
   */
  public toListDevices() {
    return this.to('ListDevices');
  }

  /**
   * Lists the groups associated with a user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Lists information about all identity providers for a user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListIdentityProviders.html
   */
  public toListIdentityProviders() {
    return this.to('ListIdentityProviders');
  }

  /**
   * Lists the resource servers for a user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListResourceServers.html
   */
  public toListResourceServers() {
    return this.to('ListResourceServers');
  }

  /**
   * Lists the tags that are assigned to an Amazon Cognito user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Lists the user import jobs..
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserImportJobs.html
   */
  public toListUserImportJobs() {
    return this.to('ListUserImportJobs');
  }

  /**
   * Lists the clients that have been created for the specified user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPoolClients.html
   */
  public toListUserPoolClients() {
    return this.to('ListUserPoolClients');
  }

  /**
   * Lists the user pools associated with an AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPools.html
   */
  public toListUserPools() {
    return this.to('ListUserPools');
  }

  /**
   * Lists the users in the Amazon Cognito user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Lists the users in the specified group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsersInGroup.html
   */
  public toListUsersInGroup() {
    return this.to('ListUsersInGroup');
  }

  /**
   * Resends the confirmation (for confirmation of registration) to a specific user in the user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ResendConfirmationCode.html
   */
  public toResendConfirmationCode() {
    return this.to('ResendConfirmationCode');
  }

  /**
   * Responds to the authentication challenge.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RespondToAuthChallenge.html
   */
  public toRespondToAuthChallenge() {
    return this.to('RespondToAuthChallenge');
  }

  /**
   * sets the risk configuration setting for the userpool / userpool client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetRiskConfiguration.html
   */
  public toSetRiskConfiguration() {
    return this.to('SetRiskConfiguration');
  }

  /**
   * Sets the UI customization information for a user pool's built-in app UI.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUICustomization.html
   */
  public toSetUICustomization() {
    return this.to('SetUICustomization');
  }

  /**
   * Sets MFA preference for the user in the userpool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html
   */
  public toSetUserMFAPreference() {
    return this.to('SetUserMFAPreference');
  }

  /**
   * Sets the MFA configuration for the userpool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserPoolMfaConfig.html
   */
  public toSetUserPoolMfaConfig() {
    return this.to('SetUserPoolMfaConfig');
  }

  /**
   * Sets the user settings like multi-factor authentication (MFA).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserSettings.html
   */
  public toSetUserSettings() {
    return this.to('SetUserSettings');
  }

  /**
   * Registers the user in the specified user pool and creates a user name, password, and user attributes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SignUp.html
   */
  public toSignUp() {
    return this.to('SignUp');
  }

  /**
   * Starts the user import.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_StartUserImportJob.html
   */
  public toStartUserImportJob() {
    return this.to('StartUserImportJob');
  }

  /**
   * Stops the user import job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_StopUserImportJob.html
   */
  public toStopUserImportJob() {
    return this.to('StopUserImportJob');
  }

  /**
   * Assigns a set of tags to an Amazon Cognito user pool.
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
   * Removes the specified tags from an Amazon Cognito user pool.
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
   * Updates the feedback for the user authentication event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateAuthEventFeedback.html
   */
  public toUpdateAuthEventFeedback() {
    return this.to('UpdateAuthEventFeedback');
  }

  /**
   * Updates the device status.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html
   */
  public toUpdateDeviceStatus() {
    return this.to('UpdateDeviceStatus');
  }

  /**
   * Updates the specified group with the specified attributes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    return this.to('UpdateGroup');
  }

  /**
   * Updates identity provider information for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateIdentityProvider.html
   */
  public toUpdateIdentityProvider() {
    return this.to('UpdateIdentityProvider');
  }

  /**
   * Updates the name and scopes of resource server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateResourceServer.html
   */
  public toUpdateResourceServer() {
    return this.to('UpdateResourceServer');
  }

  /**
   * Allows a user to update a specific attribute (one at a time).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserAttributes.html
   */
  public toUpdateUserAttributes() {
    return this.to('UpdateUserAttributes');
  }

  /**
   * Updates the specified user pool with the specified attributes.
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
   * Allows the developer to update the specified user pool client and password policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolClient.html
   */
  public toUpdateUserPoolClient() {
    return this.to('UpdateUserPoolClient');
  }

  /**
   * Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolDomain.html
   */
  public toUpdateUserPoolDomain() {
    return this.to('UpdateUserPoolDomain');
  }

  /**
   * Registers a user's entered TOTP code and mark the user's software token MFA status as verified if successful.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html
   */
  public toVerifySoftwareToken() {
    return this.to('VerifySoftwareToken');
  }

  /**
   * Verifies a user attribute using a one time verification code.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifyUserAttribute.html
   */
  public toVerifyUserAttribute() {
    return this.to('VerifyUserAttribute');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddCustomAttributes",
      "AdminAddUserToGroup",
      "AdminConfirmSignUp",
      "AdminCreateUser",
      "AdminDeleteUser",
      "AdminDeleteUserAttributes",
      "AdminDisableProviderForUser",
      "AdminDisableUser",
      "AdminEnableUser",
      "AdminForgetDevice",
      "AdminInitiateAuth",
      "AdminLinkProviderForUser",
      "AdminRemoveUserFromGroup",
      "AdminResetUserPassword",
      "AdminRespondToAuthChallenge",
      "AdminSetUserMFAPreference",
      "AdminSetUserPassword",
      "AdminSetUserSettings",
      "AdminUpdateAuthEventFeedback",
      "AdminUpdateDeviceStatus",
      "AdminUpdateUserAttributes",
      "AdminUserGlobalSignOut",
      "AssociateSoftwareToken",
      "ChangePassword",
      "ConfirmDevice",
      "ConfirmForgotPassword",
      "ConfirmSignUp",
      "CreateGroup",
      "CreateIdentityProvider",
      "CreateResourceServer",
      "CreateUserImportJob",
      "CreateUserPool",
      "CreateUserPoolClient",
      "CreateUserPoolDomain",
      "DeleteGroup",
      "DeleteIdentityProvider",
      "DeleteResourceServer",
      "DeleteUser",
      "DeleteUserAttributes",
      "DeleteUserPool",
      "DeleteUserPoolClient",
      "DeleteUserPoolDomain",
      "ForgetDevice",
      "ForgotPassword",
      "GlobalSignOut",
      "InitiateAuth",
      "ResendConfirmationCode",
      "RespondToAuthChallenge",
      "SetRiskConfiguration",
      "SetUICustomization",
      "SetUserMFAPreference",
      "SetUserPoolMfaConfig",
      "SetUserSettings",
      "SignUp",
      "StartUserImportJob",
      "StopUserImportJob",
      "UpdateAuthEventFeedback",
      "UpdateDeviceStatus",
      "UpdateGroup",
      "UpdateIdentityProvider",
      "UpdateResourceServer",
      "UpdateUserAttributes",
      "UpdateUserPool",
      "UpdateUserPoolClient",
      "UpdateUserPoolDomain",
      "VerifySoftwareToken",
      "VerifyUserAttribute"
    ],
    "Read": [
      "AdminGetDevice",
      "AdminGetUser",
      "AdminListUserAuthEvents",
      "DescribeIdentityProvider",
      "DescribeResourceServer",
      "DescribeRiskConfiguration",
      "DescribeUserImportJob",
      "DescribeUserPool",
      "DescribeUserPoolClient",
      "DescribeUserPoolDomain",
      "GetCSVHeader",
      "GetDevice",
      "GetGroup",
      "GetIdentityProviderByIdentifier",
      "GetSigningCertificate",
      "GetUICustomization",
      "GetUser",
      "GetUserAttributeVerificationCode",
      "GetUserPoolMfaConfig"
    ],
    "List": [
      "AdminListDevices",
      "AdminListGroupsForUser",
      "ListDevices",
      "ListGroups",
      "ListIdentityProviders",
      "ListResourceServers",
      "ListTagsForResource",
      "ListUserImportJobs",
      "ListUserPoolClients",
      "ListUserPools",
      "ListUsers",
      "ListUsersInGroup"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type userpool to the statement
   *
   * https://docs.aws.amazon.com/cognito/latest/developerguide/resource-permissions.html#amazon-cognito-amazon-resource-names
   *
   * @param userPoolId - Identifier for the userPoolId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUserpool(userPoolId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:cognito-idp:${ region || '*' }:${ account || '*' }:userpool/${ userPoolId }`);
  }
}
