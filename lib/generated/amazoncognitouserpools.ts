import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [cognito-idp](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitouserpools.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CognitoIdp extends PolicyStatement {
  public servicePrefix = 'cognito-idp';
  protected actionList: Actions = {
    "AddCustomAttributes": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AddCustomAttributes.html",
      "description": "Adds additional user attributes to the user pool schema.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminAddUserToGroup": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminAddUserToGroup.html",
      "description": "Adds the specified user to the specified group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminConfirmSignUp": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminConfirmSignUp.html",
      "description": "Confirms user registration as an admin without using a confirmation code. Works on any user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminCreateUser": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminCreateUser.html",
      "description": "Creates a new user in the specified user pool and sends a welcome message via email or phone (SMS).",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminDeleteUser": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUser.html",
      "description": "Deletes a user as an administrator. Works on any user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminDeleteUserAttributes": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUserAttributes.html",
      "description": "Deletes the user attributes in a user pool as an administrator. Works on any user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminDisableProviderForUser": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableProviderForUser.html",
      "description": "Disables the user from signing in with the specified external (SAML or social) identity provider.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminDisableUser": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableUser.html",
      "description": "Disables the specified user as an administrator. Works on any user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminEnableUser": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminEnableUser.html",
      "description": "Enables the specified user as an administrator. Works on any user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminForgetDevice": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminForgetDevice.html",
      "description": "Forgets the device, as an administrator.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminGetDevice": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetDevice.html",
      "description": "Gets the device, as an administrator.",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminGetUser": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetUser.html",
      "description": "Gets the specified user by user name in a user pool as an administrator. Works on any user.",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminInitiateAuth": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html",
      "description": "Authenticates a user in a user pool as an administrator. Works on any user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminLinkProviderForUser": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html",
      "description": "Links an existing user account in a user pool (DestinationUser) to an identity from an external identity provider (SourceUser) based on a specified attribute name and value from the external identity provider.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminListDevices": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListDevices.html",
      "description": "Lists devices, as an administrator.",
      "accessLevel": "List",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminListGroupsForUser": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html",
      "description": "Lists the groups that the user belongs to.",
      "accessLevel": "List",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminListUserAuthEvents": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListUserAuthEvents.html",
      "description": "Lists the authentication events for the user.",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminRemoveUserFromGroup": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRemoveUserFromGroup.html",
      "description": "Removes the specified user from the specified group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminResetUserPassword": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminResetUserPassword.html",
      "description": "Resets the specified user's password in a user pool as an administrator. Works on any user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminRespondToAuthChallenge": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRespondToAuthChallenge.html",
      "description": "Responds to an authentication challenge, as an administrator.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminSetUserMFAPreference": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html",
      "description": "Sets MFA preference for the user in the userpool",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminSetUserPassword": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserPassword.html",
      "description": "Sets the specified user's password in a user pool as an administrator. Works on any user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminSetUserSettings": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserSettings.html",
      "description": "Sets all the user settings for a specified user name. Works on any user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminUpdateAuthEventFeedback": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateAuthEventFeedback.html",
      "description": "Updates the feedback for the user authentication event",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminUpdateDeviceStatus": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateDeviceStatus.html",
      "description": "Updates the device status as an administrator.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminUpdateUserAttributes": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html",
      "description": "Updates the specified user's attributes, including developer attributes, as an administrator.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AdminUserGlobalSignOut": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUserGlobalSignOut.html",
      "description": "Signs out users from all devices, as an administrator.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "AssociateSoftwareToken": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AssociateSoftwareToken.html",
      "description": "Returns a unique generated shared secret key code for the user account.",
      "accessLevel": "Write"
    },
    "ChangePassword": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ChangePassword.html",
      "description": "Changes the password for a specified user in a user pool.",
      "accessLevel": "Write"
    },
    "ConfirmDevice": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html",
      "description": "Confirms tracking of the device. This API call is the call that begins device tracking.",
      "accessLevel": "Write"
    },
    "ConfirmForgotPassword": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html",
      "description": "Allows a user to enter a confirmation code to reset a forgotten password.",
      "accessLevel": "Write"
    },
    "ConfirmSignUp": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmSignUp.html",
      "description": "Confirms registration of a user and handles the existing alias from a previous user.",
      "accessLevel": "Write"
    },
    "CreateGroup": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateGroup.html",
      "description": "Creates a new group in the specified user pool.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "CreateIdentityProvider": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateIdentityProvider.html",
      "description": "Creates an identity provider for a user pool.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "CreateResourceServer": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateResourceServer.html",
      "description": "Creates a new OAuth2.0 resource server and defines custom scopes in it.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "CreateUserImportJob": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserImportJob.html",
      "description": "Creates the user import job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "CreateUserPool": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPool.html",
      "description": "Creates a new Amazon Cognito user pool and sets the password policy for the pool.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CreateUserPoolClient": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolClient.html",
      "description": "Creates the user pool client.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "CreateUserPoolDomain": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolDomain.html",
      "description": "Creates a new domain for a user pool.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "DeleteGroup": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteGroup.html",
      "description": "Deletes a group. Currently only groups with no members can be deleted.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "DeleteIdentityProvider": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteIdentityProvider.html",
      "description": "Deletes an identity provider for a user pool.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "DeleteResourceServer": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteResourceServer.html",
      "description": "Deletes a resource server.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "DeleteUser": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUser.html",
      "description": "Allows a user to delete one's self.",
      "accessLevel": "Write"
    },
    "DeleteUserAttributes": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserAttributes.html",
      "description": "Deletes the attributes for a user.",
      "accessLevel": "Write"
    },
    "DeleteUserPool": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPool.html",
      "description": "Deletes the specified Amazon Cognito user pool.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "DeleteUserPoolClient": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPoolClient.html",
      "description": "Allows the developer to delete the user pool client.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "DeleteUserPoolDomain": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPoolDomain.html",
      "description": "Deletes a domain for a user pool.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "DescribeIdentityProvider": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeIdentityProvider.html",
      "description": "Gets information about a specific identity provider.",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "DescribeResourceServer": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeResourceServer.html",
      "description": "Describes a resource server.",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "DescribeRiskConfiguration": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeRiskConfiguration.html",
      "description": "Describes the risk configuration setting for the userpool / userpool client",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "DescribeUserImportJob": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserImportJob.html",
      "description": "Describes the user import job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "DescribeUserPool": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html",
      "description": "Returns the configuration information and metadata of the specified user pool.",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "DescribeUserPoolClient": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html",
      "description": "Client method for returning the configuration information and metadata of the specified user pool client.",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "DescribeUserPoolDomain": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolDomain.html",
      "description": "Gets information about a domain.",
      "accessLevel": "Read"
    },
    "ForgetDevice": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgetDevice.html",
      "description": "Forgets the specified device.",
      "accessLevel": "Write"
    },
    "ForgotPassword": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html",
      "description": "Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password.",
      "accessLevel": "Write"
    },
    "GetCSVHeader": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetCSVHeader.html",
      "description": "Gets the header information for the .csv file to be used as input for the user import job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "GetDevice": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetDevice.html",
      "description": "Gets the device.",
      "accessLevel": "Read"
    },
    "GetGroup": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetGroup.html",
      "description": "Gets a group.",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "GetIdentityProviderByIdentifier": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetIdentityProviderByIdentifier.html",
      "description": "Gets the specified identity provider.",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "GetSigningCertificate": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetSigningCertificate.html",
      "description": "Returns the signing certificate.",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "GetUICustomization": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUICustomization.html",
      "description": "Gets the UI Customization information for a particular app client's app UI, if there is something set.",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "GetUser": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUser.html",
      "description": "Gets the user attributes and metadata for a user.",
      "accessLevel": "Read"
    },
    "GetUserAttributeVerificationCode": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserAttributeVerificationCode.html",
      "description": "Gets the user attribute verification code for the specified attribute name.",
      "accessLevel": "Read"
    },
    "GetUserPoolMfaConfig": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserPoolMfaConfig.html",
      "description": "Gets the MFA configuration for the userpool",
      "accessLevel": "Read",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "GlobalSignOut": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GlobalSignOut.html",
      "description": "Signs out users from all devices.",
      "accessLevel": "Write"
    },
    "InitiateAuth": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html",
      "description": "Initiates the authentication flow.",
      "accessLevel": "Write"
    },
    "ListDevices": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListDevices.html",
      "description": "Lists the devices.",
      "accessLevel": "List"
    },
    "ListGroups": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListGroups.html",
      "description": "Lists the groups associated with a user pool.",
      "accessLevel": "List",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "ListIdentityProviders": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListIdentityProviders.html",
      "description": "Lists information about all identity providers for a user pool.",
      "accessLevel": "List",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "ListResourceServers": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListResourceServers.html",
      "description": "Lists the resource servers for a user pool.",
      "accessLevel": "List",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListTagsForResource.html",
      "description": "Lists the tags that are assigned to an Amazon Cognito user pool.",
      "accessLevel": "List",
      "resourceTypes": {
        "userpool": {
          "required": false
        }
      }
    },
    "ListUserImportJobs": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserImportJobs.html",
      "description": "Lists the user import jobs..",
      "accessLevel": "List",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "ListUserPoolClients": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPoolClients.html",
      "description": "Lists the clients that have been created for the specified user pool.",
      "accessLevel": "List",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "ListUserPools": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPools.html",
      "description": "Lists the user pools associated with an AWS account.",
      "accessLevel": "List"
    },
    "ListUsers": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsers.html",
      "description": "Lists the users in the Amazon Cognito user pool.",
      "accessLevel": "List",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "ListUsersInGroup": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsersInGroup.html",
      "description": "Lists the users in the specified group.",
      "accessLevel": "List",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "ResendConfirmationCode": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ResendConfirmationCode.html",
      "description": "Resends the confirmation (for confirmation of registration) to a specific user in the user pool.",
      "accessLevel": "Write"
    },
    "RespondToAuthChallenge": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RespondToAuthChallenge.html",
      "description": "Responds to the authentication challenge.",
      "accessLevel": "Write"
    },
    "SetRiskConfiguration": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetRiskConfiguration.html",
      "description": "sets the risk configuration setting for the userpool / userpool client",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "SetUICustomization": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUICustomization.html",
      "description": "Sets the UI customization information for a user pool's built-in app UI.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "SetUserMFAPreference": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html",
      "description": "Sets MFA preference for the user in the userpool",
      "accessLevel": "Write"
    },
    "SetUserPoolMfaConfig": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserPoolMfaConfig.html",
      "description": "Sets the MFA configuration for the userpool",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "SetUserSettings": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserSettings.html",
      "description": "Sets the user settings like multi-factor authentication (MFA).",
      "accessLevel": "Write"
    },
    "SignUp": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SignUp.html",
      "description": "Registers the user in the specified user pool and creates a user name, password, and user attributes.",
      "accessLevel": "Write"
    },
    "StartUserImportJob": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_StartUserImportJob.html",
      "description": "Starts the user import.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "StopUserImportJob": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_StopUserImportJob.html",
      "description": "Stops the user import job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_TagResource.html",
      "description": "Assigns a set of tags to an Amazon Cognito user pool.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "userpool": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UntagResource.html",
      "description": "Removes the specified tags from an Amazon Cognito user pool.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "userpool": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateAuthEventFeedback": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateAuthEventFeedback.html",
      "description": "Updates the feedback for the user authentication event",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "UpdateDeviceStatus": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html",
      "description": "Updates the device status.",
      "accessLevel": "Write"
    },
    "UpdateGroup": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateGroup.html",
      "description": "Updates the specified group with the specified attributes.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "UpdateIdentityProvider": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateIdentityProvider.html",
      "description": "Updates identity provider information for a user pool.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "UpdateResourceServer": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateResourceServer.html",
      "description": "Updates the name and scopes of resource server.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "UpdateUserAttributes": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserAttributes.html",
      "description": "Allows a user to update a specific attribute (one at a time).",
      "accessLevel": "Write"
    },
    "UpdateUserPool": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPool.html",
      "description": "Updates the specified user pool with the specified attributes.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateUserPoolClient": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolClient.html",
      "description": "Allows the developer to update the specified user pool client and password policy.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "UpdateUserPoolDomain": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolDomain.html",
      "description": "Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.",
      "accessLevel": "Write",
      "resourceTypes": {
        "userpool": {
          "required": true
        }
      }
    },
    "VerifySoftwareToken": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html",
      "description": "Registers a user's entered TOTP code and mark the user's software token MFA status as verified if successful.",
      "accessLevel": "Write"
    },
    "VerifyUserAttribute": {
      "url": "https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifyUserAttribute.html",
      "description": "Verifies a user attribute using a one time verification code.",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "userpool": {
      "name": "userpool",
      "url": "https://docs.aws.amazon.com/cognito/latest/developerguide/resource-permissions.html#amazon-cognito-amazon-resource-names",
      "arn": "arn:${Partition}:cognito-idp:${Region}:${Account}:userpool/${UserPoolId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [cognito-idp](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitouserpools.html).
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
  public addCustomAttributes() {
    this.add('cognito-idp:AddCustomAttributes');
    return this;
  }

  /**
   * Adds the specified user to the specified group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminAddUserToGroup.html
   */
  public adminAddUserToGroup() {
    this.add('cognito-idp:AdminAddUserToGroup');
    return this;
  }

  /**
   * Confirms user registration as an admin without using a confirmation code. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminConfirmSignUp.html
   */
  public adminConfirmSignUp() {
    this.add('cognito-idp:AdminConfirmSignUp');
    return this;
  }

  /**
   * Creates a new user in the specified user pool and sends a welcome message via email or phone (SMS).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminCreateUser.html
   */
  public adminCreateUser() {
    this.add('cognito-idp:AdminCreateUser');
    return this;
  }

  /**
   * Deletes a user as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUser.html
   */
  public adminDeleteUser() {
    this.add('cognito-idp:AdminDeleteUser');
    return this;
  }

  /**
   * Deletes the user attributes in a user pool as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUserAttributes.html
   */
  public adminDeleteUserAttributes() {
    this.add('cognito-idp:AdminDeleteUserAttributes');
    return this;
  }

  /**
   * Disables the user from signing in with the specified external (SAML or social) identity provider.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableProviderForUser.html
   */
  public adminDisableProviderForUser() {
    this.add('cognito-idp:AdminDisableProviderForUser');
    return this;
  }

  /**
   * Disables the specified user as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableUser.html
   */
  public adminDisableUser() {
    this.add('cognito-idp:AdminDisableUser');
    return this;
  }

  /**
   * Enables the specified user as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminEnableUser.html
   */
  public adminEnableUser() {
    this.add('cognito-idp:AdminEnableUser');
    return this;
  }

  /**
   * Forgets the device, as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminForgetDevice.html
   */
  public adminForgetDevice() {
    this.add('cognito-idp:AdminForgetDevice');
    return this;
  }

  /**
   * Gets the device, as an administrator.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetDevice.html
   */
  public adminGetDevice() {
    this.add('cognito-idp:AdminGetDevice');
    return this;
  }

  /**
   * Gets the specified user by user name in a user pool as an administrator. Works on any user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetUser.html
   */
  public adminGetUser() {
    this.add('cognito-idp:AdminGetUser');
    return this;
  }

  /**
   * Authenticates a user in a user pool as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html
   */
  public adminInitiateAuth() {
    this.add('cognito-idp:AdminInitiateAuth');
    return this;
  }

  /**
   * Links an existing user account in a user pool (DestinationUser) to an identity from an external identity provider (SourceUser) based on a specified attribute name and value from the external identity provider.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html
   */
  public adminLinkProviderForUser() {
    this.add('cognito-idp:AdminLinkProviderForUser');
    return this;
  }

  /**
   * Lists devices, as an administrator.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListDevices.html
   */
  public adminListDevices() {
    this.add('cognito-idp:AdminListDevices');
    return this;
  }

  /**
   * Lists the groups that the user belongs to.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html
   */
  public adminListGroupsForUser() {
    this.add('cognito-idp:AdminListGroupsForUser');
    return this;
  }

  /**
   * Lists the authentication events for the user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListUserAuthEvents.html
   */
  public adminListUserAuthEvents() {
    this.add('cognito-idp:AdminListUserAuthEvents');
    return this;
  }

  /**
   * Removes the specified user from the specified group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRemoveUserFromGroup.html
   */
  public adminRemoveUserFromGroup() {
    this.add('cognito-idp:AdminRemoveUserFromGroup');
    return this;
  }

  /**
   * Resets the specified user's password in a user pool as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminResetUserPassword.html
   */
  public adminResetUserPassword() {
    this.add('cognito-idp:AdminResetUserPassword');
    return this;
  }

  /**
   * Responds to an authentication challenge, as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRespondToAuthChallenge.html
   */
  public adminRespondToAuthChallenge() {
    this.add('cognito-idp:AdminRespondToAuthChallenge');
    return this;
  }

  /**
   * Sets MFA preference for the user in the userpool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html
   */
  public adminSetUserMFAPreference() {
    this.add('cognito-idp:AdminSetUserMFAPreference');
    return this;
  }

  /**
   * Sets the specified user's password in a user pool as an administrator. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserPassword.html
   */
  public adminSetUserPassword() {
    this.add('cognito-idp:AdminSetUserPassword');
    return this;
  }

  /**
   * Sets all the user settings for a specified user name. Works on any user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserSettings.html
   */
  public adminSetUserSettings() {
    this.add('cognito-idp:AdminSetUserSettings');
    return this;
  }

  /**
   * Updates the feedback for the user authentication event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateAuthEventFeedback.html
   */
  public adminUpdateAuthEventFeedback() {
    this.add('cognito-idp:AdminUpdateAuthEventFeedback');
    return this;
  }

  /**
   * Updates the device status as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateDeviceStatus.html
   */
  public adminUpdateDeviceStatus() {
    this.add('cognito-idp:AdminUpdateDeviceStatus');
    return this;
  }

  /**
   * Updates the specified user's attributes, including developer attributes, as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html
   */
  public adminUpdateUserAttributes() {
    this.add('cognito-idp:AdminUpdateUserAttributes');
    return this;
  }

  /**
   * Signs out users from all devices, as an administrator.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUserGlobalSignOut.html
   */
  public adminUserGlobalSignOut() {
    this.add('cognito-idp:AdminUserGlobalSignOut');
    return this;
  }

  /**
   * Returns a unique generated shared secret key code for the user account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AssociateSoftwareToken.html
   */
  public associateSoftwareToken() {
    this.add('cognito-idp:AssociateSoftwareToken');
    return this;
  }

  /**
   * Changes the password for a specified user in a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ChangePassword.html
   */
  public changePassword() {
    this.add('cognito-idp:ChangePassword');
    return this;
  }

  /**
   * Confirms tracking of the device. This API call is the call that begins device tracking.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html
   */
  public confirmDevice() {
    this.add('cognito-idp:ConfirmDevice');
    return this;
  }

  /**
   * Allows a user to enter a confirmation code to reset a forgotten password.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html
   */
  public confirmForgotPassword() {
    this.add('cognito-idp:ConfirmForgotPassword');
    return this;
  }

  /**
   * Confirms registration of a user and handles the existing alias from a previous user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmSignUp.html
   */
  public confirmSignUp() {
    this.add('cognito-idp:ConfirmSignUp');
    return this;
  }

  /**
   * Creates a new group in the specified user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateGroup.html
   */
  public createGroup() {
    this.add('cognito-idp:CreateGroup');
    return this;
  }

  /**
   * Creates an identity provider for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateIdentityProvider.html
   */
  public createIdentityProvider() {
    this.add('cognito-idp:CreateIdentityProvider');
    return this;
  }

  /**
   * Creates a new OAuth2.0 resource server and defines custom scopes in it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateResourceServer.html
   */
  public createResourceServer() {
    this.add('cognito-idp:CreateResourceServer');
    return this;
  }

  /**
   * Creates the user import job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserImportJob.html
   */
  public createUserImportJob() {
    this.add('cognito-idp:CreateUserImportJob');
    return this;
  }

  /**
   * Creates a new Amazon Cognito user pool and sets the password policy for the pool.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPool.html
   */
  public createUserPool() {
    this.add('cognito-idp:CreateUserPool');
    return this;
  }

  /**
   * Creates the user pool client.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolClient.html
   */
  public createUserPoolClient() {
    this.add('cognito-idp:CreateUserPoolClient');
    return this;
  }

  /**
   * Creates a new domain for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolDomain.html
   */
  public createUserPoolDomain() {
    this.add('cognito-idp:CreateUserPoolDomain');
    return this;
  }

  /**
   * Deletes a group. Currently only groups with no members can be deleted.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteGroup.html
   */
  public deleteGroup() {
    this.add('cognito-idp:DeleteGroup');
    return this;
  }

  /**
   * Deletes an identity provider for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteIdentityProvider.html
   */
  public deleteIdentityProvider() {
    this.add('cognito-idp:DeleteIdentityProvider');
    return this;
  }

  /**
   * Deletes a resource server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteResourceServer.html
   */
  public deleteResourceServer() {
    this.add('cognito-idp:DeleteResourceServer');
    return this;
  }

  /**
   * Allows a user to delete one's self.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUser.html
   */
  public deleteUser() {
    this.add('cognito-idp:DeleteUser');
    return this;
  }

  /**
   * Deletes the attributes for a user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserAttributes.html
   */
  public deleteUserAttributes() {
    this.add('cognito-idp:DeleteUserAttributes');
    return this;
  }

  /**
   * Deletes the specified Amazon Cognito user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPool.html
   */
  public deleteUserPool() {
    this.add('cognito-idp:DeleteUserPool');
    return this;
  }

  /**
   * Allows the developer to delete the user pool client.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPoolClient.html
   */
  public deleteUserPoolClient() {
    this.add('cognito-idp:DeleteUserPoolClient');
    return this;
  }

  /**
   * Deletes a domain for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPoolDomain.html
   */
  public deleteUserPoolDomain() {
    this.add('cognito-idp:DeleteUserPoolDomain');
    return this;
  }

  /**
   * Gets information about a specific identity provider.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeIdentityProvider.html
   */
  public describeIdentityProvider() {
    this.add('cognito-idp:DescribeIdentityProvider');
    return this;
  }

  /**
   * Describes a resource server.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeResourceServer.html
   */
  public describeResourceServer() {
    this.add('cognito-idp:DescribeResourceServer');
    return this;
  }

  /**
   * Describes the risk configuration setting for the userpool / userpool client
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeRiskConfiguration.html
   */
  public describeRiskConfiguration() {
    this.add('cognito-idp:DescribeRiskConfiguration');
    return this;
  }

  /**
   * Describes the user import job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserImportJob.html
   */
  public describeUserImportJob() {
    this.add('cognito-idp:DescribeUserImportJob');
    return this;
  }

  /**
   * Returns the configuration information and metadata of the specified user pool.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html
   */
  public describeUserPool() {
    this.add('cognito-idp:DescribeUserPool');
    return this;
  }

  /**
   * Client method for returning the configuration information and metadata of the specified user pool client.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html
   */
  public describeUserPoolClient() {
    this.add('cognito-idp:DescribeUserPoolClient');
    return this;
  }

  /**
   * Gets information about a domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolDomain.html
   */
  public describeUserPoolDomain() {
    this.add('cognito-idp:DescribeUserPoolDomain');
    return this;
  }

  /**
   * Forgets the specified device.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgetDevice.html
   */
  public forgetDevice() {
    this.add('cognito-idp:ForgetDevice');
    return this;
  }

  /**
   * Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html
   */
  public forgotPassword() {
    this.add('cognito-idp:ForgotPassword');
    return this;
  }

  /**
   * Gets the header information for the .csv file to be used as input for the user import job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetCSVHeader.html
   */
  public getCSVHeader() {
    this.add('cognito-idp:GetCSVHeader');
    return this;
  }

  /**
   * Gets the device.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetDevice.html
   */
  public getDevice() {
    this.add('cognito-idp:GetDevice');
    return this;
  }

  /**
   * Gets a group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetGroup.html
   */
  public getGroup() {
    this.add('cognito-idp:GetGroup');
    return this;
  }

  /**
   * Gets the specified identity provider.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetIdentityProviderByIdentifier.html
   */
  public getIdentityProviderByIdentifier() {
    this.add('cognito-idp:GetIdentityProviderByIdentifier');
    return this;
  }

  /**
   * Returns the signing certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetSigningCertificate.html
   */
  public getSigningCertificate() {
    this.add('cognito-idp:GetSigningCertificate');
    return this;
  }

  /**
   * Gets the UI Customization information for a particular app client's app UI, if there is something set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUICustomization.html
   */
  public getUICustomization() {
    this.add('cognito-idp:GetUICustomization');
    return this;
  }

  /**
   * Gets the user attributes and metadata for a user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUser.html
   */
  public getUser() {
    this.add('cognito-idp:GetUser');
    return this;
  }

  /**
   * Gets the user attribute verification code for the specified attribute name.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserAttributeVerificationCode.html
   */
  public getUserAttributeVerificationCode() {
    this.add('cognito-idp:GetUserAttributeVerificationCode');
    return this;
  }

  /**
   * Gets the MFA configuration for the userpool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserPoolMfaConfig.html
   */
  public getUserPoolMfaConfig() {
    this.add('cognito-idp:GetUserPoolMfaConfig');
    return this;
  }

  /**
   * Signs out users from all devices.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GlobalSignOut.html
   */
  public globalSignOut() {
    this.add('cognito-idp:GlobalSignOut');
    return this;
  }

  /**
   * Initiates the authentication flow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html
   */
  public initiateAuth() {
    this.add('cognito-idp:InitiateAuth');
    return this;
  }

  /**
   * Lists the devices.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListDevices.html
   */
  public listDevices() {
    this.add('cognito-idp:ListDevices');
    return this;
  }

  /**
   * Lists the groups associated with a user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListGroups.html
   */
  public listGroups() {
    this.add('cognito-idp:ListGroups');
    return this;
  }

  /**
   * Lists information about all identity providers for a user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListIdentityProviders.html
   */
  public listIdentityProviders() {
    this.add('cognito-idp:ListIdentityProviders');
    return this;
  }

  /**
   * Lists the resource servers for a user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListResourceServers.html
   */
  public listResourceServers() {
    this.add('cognito-idp:ListResourceServers');
    return this;
  }

  /**
   * Lists the tags that are assigned to an Amazon Cognito user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('cognito-idp:ListTagsForResource');
    return this;
  }

  /**
   * Lists the user import jobs..
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserImportJobs.html
   */
  public listUserImportJobs() {
    this.add('cognito-idp:ListUserImportJobs');
    return this;
  }

  /**
   * Lists the clients that have been created for the specified user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPoolClients.html
   */
  public listUserPoolClients() {
    this.add('cognito-idp:ListUserPoolClients');
    return this;
  }

  /**
   * Lists the user pools associated with an AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPools.html
   */
  public listUserPools() {
    this.add('cognito-idp:ListUserPools');
    return this;
  }

  /**
   * Lists the users in the Amazon Cognito user pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsers.html
   */
  public listUsers() {
    this.add('cognito-idp:ListUsers');
    return this;
  }

  /**
   * Lists the users in the specified group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsersInGroup.html
   */
  public listUsersInGroup() {
    this.add('cognito-idp:ListUsersInGroup');
    return this;
  }

  /**
   * Resends the confirmation (for confirmation of registration) to a specific user in the user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ResendConfirmationCode.html
   */
  public resendConfirmationCode() {
    this.add('cognito-idp:ResendConfirmationCode');
    return this;
  }

  /**
   * Responds to the authentication challenge.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RespondToAuthChallenge.html
   */
  public respondToAuthChallenge() {
    this.add('cognito-idp:RespondToAuthChallenge');
    return this;
  }

  /**
   * sets the risk configuration setting for the userpool / userpool client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetRiskConfiguration.html
   */
  public setRiskConfiguration() {
    this.add('cognito-idp:SetRiskConfiguration');
    return this;
  }

  /**
   * Sets the UI customization information for a user pool's built-in app UI.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUICustomization.html
   */
  public setUICustomization() {
    this.add('cognito-idp:SetUICustomization');
    return this;
  }

  /**
   * Sets MFA preference for the user in the userpool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html
   */
  public setUserMFAPreference() {
    this.add('cognito-idp:SetUserMFAPreference');
    return this;
  }

  /**
   * Sets the MFA configuration for the userpool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserPoolMfaConfig.html
   */
  public setUserPoolMfaConfig() {
    this.add('cognito-idp:SetUserPoolMfaConfig');
    return this;
  }

  /**
   * Sets the user settings like multi-factor authentication (MFA).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserSettings.html
   */
  public setUserSettings() {
    this.add('cognito-idp:SetUserSettings');
    return this;
  }

  /**
   * Registers the user in the specified user pool and creates a user name, password, and user attributes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SignUp.html
   */
  public signUp() {
    this.add('cognito-idp:SignUp');
    return this;
  }

  /**
   * Starts the user import.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_StartUserImportJob.html
   */
  public startUserImportJob() {
    this.add('cognito-idp:StartUserImportJob');
    return this;
  }

  /**
   * Stops the user import job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_StopUserImportJob.html
   */
  public stopUserImportJob() {
    this.add('cognito-idp:StopUserImportJob');
    return this;
  }

  /**
   * Assigns a set of tags to an Amazon Cognito user pool.
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('cognito-idp:TagResource');
    return this;
  }

  /**
   * Removes the specified tags from an Amazon Cognito user pool.
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('cognito-idp:UntagResource');
    return this;
  }

  /**
   * Updates the feedback for the user authentication event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateAuthEventFeedback.html
   */
  public updateAuthEventFeedback() {
    this.add('cognito-idp:UpdateAuthEventFeedback');
    return this;
  }

  /**
   * Updates the device status.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html
   */
  public updateDeviceStatus() {
    this.add('cognito-idp:UpdateDeviceStatus');
    return this;
  }

  /**
   * Updates the specified group with the specified attributes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateGroup.html
   */
  public updateGroup() {
    this.add('cognito-idp:UpdateGroup');
    return this;
  }

  /**
   * Updates identity provider information for a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateIdentityProvider.html
   */
  public updateIdentityProvider() {
    this.add('cognito-idp:UpdateIdentityProvider');
    return this;
  }

  /**
   * Updates the name and scopes of resource server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateResourceServer.html
   */
  public updateResourceServer() {
    this.add('cognito-idp:UpdateResourceServer');
    return this;
  }

  /**
   * Allows a user to update a specific attribute (one at a time).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserAttributes.html
   */
  public updateUserAttributes() {
    this.add('cognito-idp:UpdateUserAttributes');
    return this;
  }

  /**
   * Updates the specified user pool with the specified attributes.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPool.html
   */
  public updateUserPool() {
    this.add('cognito-idp:UpdateUserPool');
    return this;
  }

  /**
   * Allows the developer to update the specified user pool client and password policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolClient.html
   */
  public updateUserPoolClient() {
    this.add('cognito-idp:UpdateUserPoolClient');
    return this;
  }

  /**
   * Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolDomain.html
   */
  public updateUserPoolDomain() {
    this.add('cognito-idp:UpdateUserPoolDomain');
    return this;
  }

  /**
   * Registers a user's entered TOTP code and mark the user's software token MFA status as verified if successful.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html
   */
  public verifySoftwareToken() {
    this.add('cognito-idp:VerifySoftwareToken');
    return this;
  }

  /**
   * Verifies a user attribute using a one time verification code.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifyUserAttribute.html
   */
  public verifyUserAttribute() {
    this.add('cognito-idp:VerifyUserAttribute');
    return this;
  }

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
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
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
