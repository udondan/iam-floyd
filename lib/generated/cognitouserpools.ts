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
    this.to('cognito-idp:AddCustomAttributes');
    return this;
  }

  /**
   * Adds the specified user to the specified group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminAddUserToGroup.html
   */
  public toAdminAddUserToGroup() {
    this.to('cognito-idp:AdminAddUserToGroup');
    return this;
  }

  /**
   * Confirms user registration as an admin without using a confirmation code. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminConfirmSignUp.html
   */
  public toAdminConfirmSignUp() {
    this.to('cognito-idp:AdminConfirmSignUp');
    return this;
  }

  /**
   * Creates a new user in the specified user pool and sends a welcome message via email or phone (SMS).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminCreateUser.html
   */
  public toAdminCreateUser() {
    this.to('cognito-idp:AdminCreateUser');
    return this;
  }

  /**
   * Deletes a user as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUser.html
   */
  public toAdminDeleteUser() {
    this.to('cognito-idp:AdminDeleteUser');
    return this;
  }

  /**
   * Deletes the user attributes in a user pool as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUserAttributes.html
   */
  public toAdminDeleteUserAttributes() {
    this.to('cognito-idp:AdminDeleteUserAttributes');
    return this;
  }

  /**
   * Disables the user from signing in with the specified external (SAML or social) identity provider.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableProviderForUser.html
   */
  public toAdminDisableProviderForUser() {
    this.to('cognito-idp:AdminDisableProviderForUser');
    return this;
  }

  /**
   * Disables the specified user as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableUser.html
   */
  public toAdminDisableUser() {
    this.to('cognito-idp:AdminDisableUser');
    return this;
  }

  /**
   * Enables the specified user as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminEnableUser.html
   */
  public toAdminEnableUser() {
    this.to('cognito-idp:AdminEnableUser');
    return this;
  }

  /**
   * Forgets the device, as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminForgetDevice.html
   */
  public toAdminForgetDevice() {
    this.to('cognito-idp:AdminForgetDevice');
    return this;
  }

  /**
   * Gets the device, as an administrator.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetDevice.html
   */
  public toAdminGetDevice() {
    this.to('cognito-idp:AdminGetDevice');
    return this;
  }

  /**
   * Gets the specified user by user name in a user pool as an administrator. Works on any user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetUser.html
   */
  public toAdminGetUser() {
    this.to('cognito-idp:AdminGetUser');
    return this;
  }

  /**
   * Authenticates a user in a user pool as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html
   */
  public toAdminInitiateAuth() {
    this.to('cognito-idp:AdminInitiateAuth');
    return this;
  }

  /**
   * Links an existing user account in a user pool (DestinationUser) to an identity from an external identity provider (SourceUser) based on a specified attribute name and value from the external identity provider.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html
   */
  public toAdminLinkProviderForUser() {
    this.to('cognito-idp:AdminLinkProviderForUser');
    return this;
  }

  /**
   * Lists devices, as an administrator.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListDevices.html
   */
  public toAdminListDevices() {
    this.to('cognito-idp:AdminListDevices');
    return this;
  }

  /**
   * Lists the groups that the user belongs to.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html
   */
  public toAdminListGroupsForUser() {
    this.to('cognito-idp:AdminListGroupsForUser');
    return this;
  }

  /**
   * Lists the authentication events for the user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListUserAuthEvents.html
   */
  public toAdminListUserAuthEvents() {
    this.to('cognito-idp:AdminListUserAuthEvents');
    return this;
  }

  /**
   * Removes the specified user from the specified group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRemoveUserFromGroup.html
   */
  public toAdminRemoveUserFromGroup() {
    this.to('cognito-idp:AdminRemoveUserFromGroup');
    return this;
  }

  /**
   * Resets the specified user's password in a user pool as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminResetUserPassword.html
   */
  public toAdminResetUserPassword() {
    this.to('cognito-idp:AdminResetUserPassword');
    return this;
  }

  /**
   * Responds to an authentication challenge, as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRespondToAuthChallenge.html
   */
  public toAdminRespondToAuthChallenge() {
    this.to('cognito-idp:AdminRespondToAuthChallenge');
    return this;
  }

  /**
   * Sets MFA preference for the user in the userpool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html
   */
  public toAdminSetUserMFAPreference() {
    this.to('cognito-idp:AdminSetUserMFAPreference');
    return this;
  }

  /**
   * Sets the specified user's password in a user pool as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserPassword.html
   */
  public toAdminSetUserPassword() {
    this.to('cognito-idp:AdminSetUserPassword');
    return this;
  }

  /**
   * Sets all the user settings for a specified user name. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserSettings.html
   */
  public toAdminSetUserSettings() {
    this.to('cognito-idp:AdminSetUserSettings');
    return this;
  }

  /**
   * Updates the feedback for the user authentication event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateAuthEventFeedback.html
   */
  public toAdminUpdateAuthEventFeedback() {
    this.to('cognito-idp:AdminUpdateAuthEventFeedback');
    return this;
  }

  /**
   * Updates the device status as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateDeviceStatus.html
   */
  public toAdminUpdateDeviceStatus() {
    this.to('cognito-idp:AdminUpdateDeviceStatus');
    return this;
  }

  /**
   * Updates the specified user's attributes, including developer attributes, as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html
   */
  public toAdminUpdateUserAttributes() {
    this.to('cognito-idp:AdminUpdateUserAttributes');
    return this;
  }

  /**
   * Signs out users from all devices, as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUserGlobalSignOut.html
   */
  public toAdminUserGlobalSignOut() {
    this.to('cognito-idp:AdminUserGlobalSignOut');
    return this;
  }

  /**
   * Returns a unique generated shared secret key code for the user account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AssociateSoftwareToken.html
   */
  public toAssociateSoftwareToken() {
    this.to('cognito-idp:AssociateSoftwareToken');
    return this;
  }

  /**
   * Changes the password for a specified user in a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ChangePassword.html
   */
  public toChangePassword() {
    this.to('cognito-idp:ChangePassword');
    return this;
  }

  /**
   * Confirms tracking of the device. This API call is the call that begins device tracking.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html
   */
  public toConfirmDevice() {
    this.to('cognito-idp:ConfirmDevice');
    return this;
  }

  /**
   * Allows a user to enter a confirmation code to reset a forgotten password.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html
   */
  public toConfirmForgotPassword() {
    this.to('cognito-idp:ConfirmForgotPassword');
    return this;
  }

  /**
   * Confirms registration of a user and handles the existing alias from a previous user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmSignUp.html
   */
  public toConfirmSignUp() {
    this.to('cognito-idp:ConfirmSignUp');
    return this;
  }

  /**
   * Creates a new group in the specified user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    this.to('cognito-idp:CreateGroup');
    return this;
  }

  /**
   * Creates an identity provider for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateIdentityProvider.html
   */
  public toCreateIdentityProvider() {
    this.to('cognito-idp:CreateIdentityProvider');
    return this;
  }

  /**
   * Creates a new OAuth2.0 resource server and defines custom scopes in it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateResourceServer.html
   */
  public toCreateResourceServer() {
    this.to('cognito-idp:CreateResourceServer');
    return this;
  }

  /**
   * Creates the user import job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserImportJob.html
   */
  public toCreateUserImportJob() {
    this.to('cognito-idp:CreateUserImportJob');
    return this;
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
    this.to('cognito-idp:CreateUserPool');
    return this;
  }

  /**
   * Creates the user pool client.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolClient.html
   */
  public toCreateUserPoolClient() {
    this.to('cognito-idp:CreateUserPoolClient');
    return this;
  }

  /**
   * Creates a new domain for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolDomain.html
   */
  public toCreateUserPoolDomain() {
    this.to('cognito-idp:CreateUserPoolDomain');
    return this;
  }

  /**
   * Deletes a group. Currently only groups with no members can be deleted.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    this.to('cognito-idp:DeleteGroup');
    return this;
  }

  /**
   * Deletes an identity provider for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteIdentityProvider.html
   */
  public toDeleteIdentityProvider() {
    this.to('cognito-idp:DeleteIdentityProvider');
    return this;
  }

  /**
   * Deletes a resource server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteResourceServer.html
   */
  public toDeleteResourceServer() {
    this.to('cognito-idp:DeleteResourceServer');
    return this;
  }

  /**
   * Allows a user to delete one's self.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    this.to('cognito-idp:DeleteUser');
    return this;
  }

  /**
   * Deletes the attributes for a user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserAttributes.html
   */
  public toDeleteUserAttributes() {
    this.to('cognito-idp:DeleteUserAttributes');
    return this;
  }

  /**
   * Deletes the specified Amazon Cognito user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPool.html
   */
  public toDeleteUserPool() {
    this.to('cognito-idp:DeleteUserPool');
    return this;
  }

  /**
   * Allows the developer to delete the user pool client.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPoolClient.html
   */
  public toDeleteUserPoolClient() {
    this.to('cognito-idp:DeleteUserPoolClient');
    return this;
  }

  /**
   * Deletes a domain for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPoolDomain.html
   */
  public toDeleteUserPoolDomain() {
    this.to('cognito-idp:DeleteUserPoolDomain');
    return this;
  }

  /**
   * Gets information about a specific identity provider.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeIdentityProvider.html
   */
  public toDescribeIdentityProvider() {
    this.to('cognito-idp:DescribeIdentityProvider');
    return this;
  }

  /**
   * Describes a resource server.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeResourceServer.html
   */
  public toDescribeResourceServer() {
    this.to('cognito-idp:DescribeResourceServer');
    return this;
  }

  /**
   * Describes the risk configuration setting for the userpool / userpool client
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeRiskConfiguration.html
   */
  public toDescribeRiskConfiguration() {
    this.to('cognito-idp:DescribeRiskConfiguration');
    return this;
  }

  /**
   * Describes the user import job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserImportJob.html
   */
  public toDescribeUserImportJob() {
    this.to('cognito-idp:DescribeUserImportJob');
    return this;
  }

  /**
   * Returns the configuration information and metadata of the specified user pool.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html
   */
  public toDescribeUserPool() {
    this.to('cognito-idp:DescribeUserPool');
    return this;
  }

  /**
   * Client method for returning the configuration information and metadata of the specified user pool client.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html
   */
  public toDescribeUserPoolClient() {
    this.to('cognito-idp:DescribeUserPoolClient');
    return this;
  }

  /**
   * Gets information about a domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolDomain.html
   */
  public toDescribeUserPoolDomain() {
    this.to('cognito-idp:DescribeUserPoolDomain');
    return this;
  }

  /**
   * Forgets the specified device.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgetDevice.html
   */
  public toForgetDevice() {
    this.to('cognito-idp:ForgetDevice');
    return this;
  }

  /**
   * Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html
   */
  public toForgotPassword() {
    this.to('cognito-idp:ForgotPassword');
    return this;
  }

  /**
   * Gets the header information for the .csv file to be used as input for the user import job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetCSVHeader.html
   */
  public toGetCSVHeader() {
    this.to('cognito-idp:GetCSVHeader');
    return this;
  }

  /**
   * Gets the device.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetDevice.html
   */
  public toGetDevice() {
    this.to('cognito-idp:GetDevice');
    return this;
  }

  /**
   * Gets a group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetGroup.html
   */
  public toGetGroup() {
    this.to('cognito-idp:GetGroup');
    return this;
  }

  /**
   * Gets the specified identity provider.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetIdentityProviderByIdentifier.html
   */
  public toGetIdentityProviderByIdentifier() {
    this.to('cognito-idp:GetIdentityProviderByIdentifier');
    return this;
  }

  /**
   * Returns the signing certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetSigningCertificate.html
   */
  public toGetSigningCertificate() {
    this.to('cognito-idp:GetSigningCertificate');
    return this;
  }

  /**
   * Gets the UI Customization information for a particular app client's app UI, if there is something set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUICustomization.html
   */
  public toGetUICustomization() {
    this.to('cognito-idp:GetUICustomization');
    return this;
  }

  /**
   * Gets the user attributes and metadata for a user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUser.html
   */
  public toGetUser() {
    this.to('cognito-idp:GetUser');
    return this;
  }

  /**
   * Gets the user attribute verification code for the specified attribute name.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserAttributeVerificationCode.html
   */
  public toGetUserAttributeVerificationCode() {
    this.to('cognito-idp:GetUserAttributeVerificationCode');
    return this;
  }

  /**
   * Gets the MFA configuration for the userpool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserPoolMfaConfig.html
   */
  public toGetUserPoolMfaConfig() {
    this.to('cognito-idp:GetUserPoolMfaConfig');
    return this;
  }

  /**
   * Signs out users from all devices.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GlobalSignOut.html
   */
  public toGlobalSignOut() {
    this.to('cognito-idp:GlobalSignOut');
    return this;
  }

  /**
   * Initiates the authentication flow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html
   */
  public toInitiateAuth() {
    this.to('cognito-idp:InitiateAuth');
    return this;
  }

  /**
   * Lists the devices.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListDevices.html
   */
  public toListDevices() {
    this.to('cognito-idp:ListDevices');
    return this;
  }

  /**
   * Lists the groups associated with a user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    this.to('cognito-idp:ListGroups');
    return this;
  }

  /**
   * Lists information about all identity providers for a user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListIdentityProviders.html
   */
  public toListIdentityProviders() {
    this.to('cognito-idp:ListIdentityProviders');
    return this;
  }

  /**
   * Lists the resource servers for a user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListResourceServers.html
   */
  public toListResourceServers() {
    this.to('cognito-idp:ListResourceServers');
    return this;
  }

  /**
   * Lists the tags that are assigned to an Amazon Cognito user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('cognito-idp:ListTagsForResource');
    return this;
  }

  /**
   * Lists the user import jobs..
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserImportJobs.html
   */
  public toListUserImportJobs() {
    this.to('cognito-idp:ListUserImportJobs');
    return this;
  }

  /**
   * Lists the clients that have been created for the specified user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPoolClients.html
   */
  public toListUserPoolClients() {
    this.to('cognito-idp:ListUserPoolClients');
    return this;
  }

  /**
   * Lists the user pools associated with an AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPools.html
   */
  public toListUserPools() {
    this.to('cognito-idp:ListUserPools');
    return this;
  }

  /**
   * Lists the users in the Amazon Cognito user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    this.to('cognito-idp:ListUsers');
    return this;
  }

  /**
   * Lists the users in the specified group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsersInGroup.html
   */
  public toListUsersInGroup() {
    this.to('cognito-idp:ListUsersInGroup');
    return this;
  }

  /**
   * Resends the confirmation (for confirmation of registration) to a specific user in the user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ResendConfirmationCode.html
   */
  public toResendConfirmationCode() {
    this.to('cognito-idp:ResendConfirmationCode');
    return this;
  }

  /**
   * Responds to the authentication challenge.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RespondToAuthChallenge.html
   */
  public toRespondToAuthChallenge() {
    this.to('cognito-idp:RespondToAuthChallenge');
    return this;
  }

  /**
   * sets the risk configuration setting for the userpool / userpool client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetRiskConfiguration.html
   */
  public toSetRiskConfiguration() {
    this.to('cognito-idp:SetRiskConfiguration');
    return this;
  }

  /**
   * Sets the UI customization information for a user pool's built-in app UI.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUICustomization.html
   */
  public toSetUICustomization() {
    this.to('cognito-idp:SetUICustomization');
    return this;
  }

  /**
   * Sets MFA preference for the user in the userpool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html
   */
  public toSetUserMFAPreference() {
    this.to('cognito-idp:SetUserMFAPreference');
    return this;
  }

  /**
   * Sets the MFA configuration for the userpool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserPoolMfaConfig.html
   */
  public toSetUserPoolMfaConfig() {
    this.to('cognito-idp:SetUserPoolMfaConfig');
    return this;
  }

  /**
   * Sets the user settings like multi-factor authentication (MFA).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserSettings.html
   */
  public toSetUserSettings() {
    this.to('cognito-idp:SetUserSettings');
    return this;
  }

  /**
   * Registers the user in the specified user pool and creates a user name, password, and user attributes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SignUp.html
   */
  public toSignUp() {
    this.to('cognito-idp:SignUp');
    return this;
  }

  /**
   * Starts the user import.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_StartUserImportJob.html
   */
  public toStartUserImportJob() {
    this.to('cognito-idp:StartUserImportJob');
    return this;
  }

  /**
   * Stops the user import job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_StopUserImportJob.html
   */
  public toStopUserImportJob() {
    this.to('cognito-idp:StopUserImportJob');
    return this;
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
    this.to('cognito-idp:TagResource');
    return this;
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
    this.to('cognito-idp:UntagResource');
    return this;
  }

  /**
   * Updates the feedback for the user authentication event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateAuthEventFeedback.html
   */
  public toUpdateAuthEventFeedback() {
    this.to('cognito-idp:UpdateAuthEventFeedback');
    return this;
  }

  /**
   * Updates the device status.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html
   */
  public toUpdateDeviceStatus() {
    this.to('cognito-idp:UpdateDeviceStatus');
    return this;
  }

  /**
   * Updates the specified group with the specified attributes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    this.to('cognito-idp:UpdateGroup');
    return this;
  }

  /**
   * Updates identity provider information for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateIdentityProvider.html
   */
  public toUpdateIdentityProvider() {
    this.to('cognito-idp:UpdateIdentityProvider');
    return this;
  }

  /**
   * Updates the name and scopes of resource server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateResourceServer.html
   */
  public toUpdateResourceServer() {
    this.to('cognito-idp:UpdateResourceServer');
    return this;
  }

  /**
   * Allows a user to update a specific attribute (one at a time).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserAttributes.html
   */
  public toUpdateUserAttributes() {
    this.to('cognito-idp:UpdateUserAttributes');
    return this;
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
    this.to('cognito-idp:UpdateUserPool');
    return this;
  }

  /**
   * Allows the developer to update the specified user pool client and password policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolClient.html
   */
  public toUpdateUserPoolClient() {
    this.to('cognito-idp:UpdateUserPoolClient');
    return this;
  }

  /**
   * Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolDomain.html
   */
  public toUpdateUserPoolDomain() {
    this.to('cognito-idp:UpdateUserPoolDomain');
    return this;
  }

  /**
   * Registers a user's entered TOTP code and mark the user's software token MFA status as verified if successful.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html
   */
  public toVerifySoftwareToken() {
    this.to('cognito-idp:VerifySoftwareToken');
    return this;
  }

  /**
   * Verifies a user attribute using a one time verification code.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifyUserAttribute.html
   */
  public toVerifyUserAttribute() {
    this.to('cognito-idp:VerifyUserAttribute');
    return this;
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
    var arn = 'arn:${Partition}:cognito-idp:${Region}:${Account}:userpool/${UserPoolId}';
    arn = arn.replace('${UserPoolId}', userPoolId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type CognitoIdpActionsWrite = 'AddCustomAttributes' | 'AdminAddUserToGroup' | 'AdminConfirmSignUp' | 'AdminCreateUser' | 'AdminDeleteUser' | 'AdminDeleteUserAttributes' | 'AdminDisableProviderForUser' | 'AdminDisableUser' | 'AdminEnableUser' | 'AdminForgetDevice' | 'AdminInitiateAuth' | 'AdminLinkProviderForUser' | 'AdminRemoveUserFromGroup' | 'AdminResetUserPassword' | 'AdminRespondToAuthChallenge' | 'AdminSetUserMFAPreference' | 'AdminSetUserPassword' | 'AdminSetUserSettings' | 'AdminUpdateAuthEventFeedback' | 'AdminUpdateDeviceStatus' | 'AdminUpdateUserAttributes' | 'AdminUserGlobalSignOut' | 'AssociateSoftwareToken' | 'ChangePassword' | 'ConfirmDevice' | 'ConfirmForgotPassword' | 'ConfirmSignUp' | 'CreateGroup' | 'CreateIdentityProvider' | 'CreateResourceServer' | 'CreateUserImportJob' | 'CreateUserPool' | 'CreateUserPoolClient' | 'CreateUserPoolDomain' | 'DeleteGroup' | 'DeleteIdentityProvider' | 'DeleteResourceServer' | 'DeleteUser' | 'DeleteUserAttributes' | 'DeleteUserPool' | 'DeleteUserPoolClient' | 'DeleteUserPoolDomain' | 'ForgetDevice' | 'ForgotPassword' | 'GlobalSignOut' | 'InitiateAuth' | 'ResendConfirmationCode' | 'RespondToAuthChallenge' | 'SetRiskConfiguration' | 'SetUICustomization' | 'SetUserMFAPreference' | 'SetUserPoolMfaConfig' | 'SetUserSettings' | 'SignUp' | 'StartUserImportJob' | 'StopUserImportJob' | 'UpdateAuthEventFeedback' | 'UpdateDeviceStatus' | 'UpdateGroup' | 'UpdateIdentityProvider' | 'UpdateResourceServer' | 'UpdateUserAttributes' | 'UpdateUserPool' | 'UpdateUserPoolClient' | 'UpdateUserPoolDomain' | 'VerifySoftwareToken' | 'VerifyUserAttribute';
export type CognitoIdpActionsRead = 'AdminGetDevice' | 'AdminGetUser' | 'AdminListUserAuthEvents' | 'DescribeIdentityProvider' | 'DescribeResourceServer' | 'DescribeRiskConfiguration' | 'DescribeUserImportJob' | 'DescribeUserPool' | 'DescribeUserPoolClient' | 'DescribeUserPoolDomain' | 'GetCSVHeader' | 'GetDevice' | 'GetGroup' | 'GetIdentityProviderByIdentifier' | 'GetSigningCertificate' | 'GetUICustomization' | 'GetUser' | 'GetUserAttributeVerificationCode' | 'GetUserPoolMfaConfig';
export type CognitoIdpActionsList = 'AdminListDevices' | 'AdminListGroupsForUser' | 'ListDevices' | 'ListGroups' | 'ListIdentityProviders' | 'ListResourceServers' | 'ListTagsForResource' | 'ListUserImportJobs' | 'ListUserPoolClients' | 'ListUserPools' | 'ListUsers' | 'ListUsersInGroup';
export type CognitoIdpActionsTagging = 'TagResource' | 'UntagResource';
export type CognitoIdpActions = CognitoIdpActionsWrite | CognitoIdpActionsRead | CognitoIdpActionsList | CognitoIdpActionsTagging;
