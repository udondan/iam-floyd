import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service chime
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonchime.html
 */
export class Chime extends PolicyStatement {
  public servicePrefix = 'chime';
  public actions: Actions = {
    "AcceptDelegate": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to accept the delegate invitation to share management of an Amazon Chime account with another AWS Account",
      "accessLevel": "Write"
    },
    "ActivateUsers": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/manage-access.html",
      "description": "Grants permission to activate users in an Amazon Chime Enterprise account",
      "accessLevel": "Write"
    },
    "AddDomain": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html",
      "description": "Grants permission to add a domain to your Amazon Chime account",
      "accessLevel": "Write"
    },
    "AddOrUpdateGroups": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html",
      "description": "Grants permission to add new or update existing Active Directory or Okta user groups associated with your Amazon Chime Enterprise account",
      "accessLevel": "Write"
    },
    "AssociatePhoneNumberWithUser": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumberWithUser.html",
      "description": "Grants permission to associate a phone number with an Amazon Chime user",
      "accessLevel": "Write"
    },
    "AssociatePhoneNumbersWithVoiceConnector": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumbersWithVoiceConnector.html",
      "description": "Grants permission to associate multiple phone numbers with an Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "AssociatePhoneNumbersWithVoiceConnectorGroup": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumbersWithVoiceConnectorGroup.html",
      "description": "Grants permission to associate multiple phone numbers with an Amazon Chime Voice Connector Group",
      "accessLevel": "Write"
    },
    "AssociateSigninDelegateGroupsWithAccount": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociateSigninDelegateGroupsWithAccount.html",
      "description": "Grants permission to associate the specified sign-in delegate groups with the specified Amazon Chime account.",
      "accessLevel": "Write"
    },
    "AuthorizeDirectory": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to authorize an Active Directory for your Amazon Chime Enterprise account",
      "accessLevel": "Write"
    },
    "BatchCreateAttendee": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchCreateAttendee.html",
      "description": "Grants permission to create new attendees for an active Amazon Chime SDK meeting",
      "accessLevel": "Write",
      "resourceTypes": {
        "meeting": {
          "required": true
        }
      }
    },
    "BatchCreateRoomMembership": {
      "url": "",
      "description": "Grants permission to batch add room members",
      "accessLevel": "Write"
    },
    "BatchDeletePhoneNumber": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchDeletePhoneNumber.html",
      "description": "Grants permission to move up to 50 phone numbers to the deletion queue",
      "accessLevel": "Write"
    },
    "BatchSuspendUser": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchSuspendUser.html",
      "description": "Grants permission to suspend up to 50 users from a Team or EnterpriseLWA Amazon Chime account",
      "accessLevel": "Write"
    },
    "BatchUnsuspendUser": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUnsuspendUser.html",
      "description": "Grants permission to remove the suspension from up to 50 previously suspended users for the specified Amazon Chime EnterpriseLWA account",
      "accessLevel": "Write"
    },
    "BatchUpdatePhoneNumber": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUpdatePhoneNumber.html",
      "description": "Grants permission to update phone number details within the UpdatePhoneNumberRequestItem object for up to 50 phone numbers",
      "accessLevel": "Write"
    },
    "BatchUpdateUser": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUpdateUser.html",
      "description": "Grants permission to update user details within the UpdateUserRequestItem object for up to 20 users for the specified Amazon Chime account",
      "accessLevel": "Write"
    },
    "ConnectDirectory": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/active_directory.html",
      "description": "Grants permission to connect an Active Directory to your Amazon Chime Enterprise account",
      "accessLevel": "Write"
    },
    "CreateAccount": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAccount.html",
      "description": "Grants permission to create an Amazon Chime account under the administrator's AWS account",
      "accessLevel": "Write"
    },
    "CreateApiKey": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html",
      "description": "Grants permission to create a new SCIM access key for your Amazon Chime account and Okta configuration",
      "accessLevel": "Write"
    },
    "CreateAttendee": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html",
      "description": "Grants permission to create a new attendee for an active Amazon Chime SDK meeting",
      "accessLevel": "Write",
      "resourceTypes": {
        "meeting": {
          "required": true
        }
      }
    },
    "CreateBot": {
      "url": "",
      "description": "Grants permission to create a bot for an Amazon Chime Enterprise account",
      "accessLevel": "Write"
    },
    "CreateBotMembership": {
      "url": "",
      "description": "Grants permission to add a bot to a chat room in your Amazon Chime Enterprise account",
      "accessLevel": "Write"
    },
    "CreateCDRBucket": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/manage-access.html",
      "description": "Grants permission to create a new Call Detail Record S3 bucket",
      "accessLevel": "Write"
    },
    "CreateMeeting": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateMeeting.html",
      "description": "Grants permission to create a new Amazon Chime SDK meeting in the specified media Region, with no initial attendees",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreatePhoneNumberOrder": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_CreatePhoneNumberOrder.html",
      "description": "Grants permission to create a phone number order with the Carriers",
      "accessLevel": "Write"
    },
    "CreateProxySession": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateProxySession.html",
      "description": "Grants permission to create a proxy session for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "CreateRoom": {
      "url": "",
      "description": "Grants permission to create a room",
      "accessLevel": "Write"
    },
    "CreateRoomMembership": {
      "url": "",
      "description": "Grants permission to add a room member",
      "accessLevel": "Write"
    },
    "CreateUser": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateUser.html",
      "description": "Grants permission to create a user under the specified Amazon Chime account.",
      "accessLevel": "Write"
    },
    "CreateVoiceConnector": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateVoiceConnector.html",
      "description": "Grants permission to create a Amazon Chime Voice Connector under the administrator's AWS account",
      "accessLevel": "Write"
    },
    "CreateVoiceConnectorGroup": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateVoiceConnectorGroup.html",
      "description": "Grants permission to create a Amazon Chime Voice Connector Group under the administrator's AWS account",
      "accessLevel": "Write"
    },
    "DeleteAccount": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAccount.html",
      "description": "Grants permission to delete the specified Amazon Chime account",
      "accessLevel": "Write"
    },
    "DeleteAccountOpenIdConfig": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html",
      "description": "Grants permission to delete the OpenIdConfig attributes from your Amazon Chime account",
      "accessLevel": "Write"
    },
    "DeleteApiKey": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html",
      "description": "Grants permission to delete the specified SCIM access key associated with your Amazon Chime account and Okta configuration",
      "accessLevel": "Write"
    },
    "DeleteAttendee": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAttendee.html",
      "description": "Grants permission to delete the specified attendee from an Amazon Chime SDK meeting",
      "accessLevel": "Write",
      "resourceTypes": {
        "meeting": {
          "required": true
        }
      }
    },
    "DeleteCDRBucket": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to delete a Call Detail Record S3 bucket from your Amazon Chime account",
      "accessLevel": "Write"
    },
    "DeleteDelegate": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to delete delegated AWS account management from your Amazon Chime account",
      "accessLevel": "Write"
    },
    "DeleteDomain": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html",
      "description": "Grants permission to delete a domain from your Amazon Chime account",
      "accessLevel": "Write"
    },
    "DeleteEventsConfiguration": {
      "url": "",
      "description": "Grants permission to delete an events configuration for a bot to receive outgoing events",
      "accessLevel": "Write"
    },
    "DeleteGroups": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to delete Active Directory or Okta user groups from your Amazon Chime Enterprise account",
      "accessLevel": "Write"
    },
    "DeleteMeeting": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteMeeting.html",
      "description": "Grants permission to delete the specified Amazon Chime SDK meeting",
      "accessLevel": "Write",
      "resourceTypes": {
        "meeting": {
          "required": true
        }
      }
    },
    "DeletePhoneNumber": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DeletePhoneNumber.html",
      "description": "Grants permission to move a phone number to the deletion queue",
      "accessLevel": "Write"
    },
    "DeleteProxySession": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteProxySession.html",
      "description": "Grants permission to delete a proxy session for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "DeleteRoom": {
      "url": "",
      "description": "Grants permission to delete a room",
      "accessLevel": "Write"
    },
    "DeleteRoomMembership": {
      "url": "",
      "description": "Grants permission to remove a room member",
      "accessLevel": "Write"
    },
    "DeleteVoiceConnector": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnector.html",
      "description": "Grants permission to delete the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "DeleteVoiceConnectorEmergencyCallingConfiguration": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorEmergencyCallingConfiguration.html",
      "description": "Grants permission to delete emergency calling configuration for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "DeleteVoiceConnectorGroup": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorGroup.html",
      "description": "Grants permission to delete the specified Amazon Chime Voice Connector Group",
      "accessLevel": "Write"
    },
    "DeleteVoiceConnectorOrigination": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorOrigination.html",
      "description": "Grants permission to delete the origination settings for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "DeleteVoiceConnectorProxy": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorProxy.html",
      "description": "Grants permission to delete proxy configuration for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "DeleteVoiceConnectorStreamingConfiguration": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorStreamingConfiguration.html",
      "description": "Grants permission to delete streaming configuration for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "DeleteVoiceConnectorTermination": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorTermination.html",
      "description": "Grants permission to delete the termination settings for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "DeleteVoiceConnectorTerminationCredentials": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorTerminationCredentials.html",
      "description": "Grants permission to delete SIP termination credentials for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "DisassociatePhoneNumberFromUser": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumberFromUser.html",
      "description": "Grants permission to disassociate the primary provisioned number from the specified Amazon Chime user",
      "accessLevel": "Write"
    },
    "DisassociatePhoneNumbersFromVoiceConnector": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumbersFromVoiceConnector.html",
      "description": "Grants permission to disassociate multiple phone numbers from the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "DisassociatePhoneNumbersFromVoiceConnectorGroup": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumbersFromVoiceConnectorGroup.html",
      "description": "Grants permission to disassociate multiple phone numbers from the specified Amazon Chime Voice Connector Group",
      "accessLevel": "Write"
    },
    "DisassociateSigninDelegateGroupsFromAccount": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociateSigninDelegateGroupsFromAccount.html",
      "description": "Grants permission to disassociate the specified sign-in delegate groups from the specified Amazon Chime account.",
      "accessLevel": "Write"
    },
    "DisconnectDirectory": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to disconnect the Active Directory from your Amazon Chime Enterprise account",
      "accessLevel": "Write"
    },
    "GetAccount": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAccount.html",
      "description": "Grants permission to get details for the specified Amazon Chime account",
      "accessLevel": "Read"
    },
    "GetAccountResource": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to get details for the account resource associated with your Amazon Chime account",
      "accessLevel": "Read"
    },
    "GetAccountSettings": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAccountSettings.html",
      "description": "Grants permission to get account settings for the specified Amazon Chime account ID",
      "accessLevel": "Read"
    },
    "GetAccountWithOpenIdConfig": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html",
      "description": "Grants permission to get the account details and OpenIdConfig attributes for your Amazon Chime account",
      "accessLevel": "Read"
    },
    "GetAttendee": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAttendee.html",
      "description": "Grants permission to get attendee details for a specified meeting ID and attendee ID",
      "accessLevel": "Read",
      "resourceTypes": {
        "meeting": {
          "required": true
        }
      }
    },
    "GetBot": {
      "url": "",
      "description": "Grants permission to retrieve details for the specified bot",
      "accessLevel": "Read"
    },
    "GetCDRBucket": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to get details of a Call Detail Record S3 bucket associated with your Amazon Chime account",
      "accessLevel": "Read"
    },
    "GetDomain": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html",
      "description": "Grants permission to get domain details for a domain associated with your Amazon Chime account",
      "accessLevel": "Read"
    },
    "GetEventsConfiguration": {
      "url": "",
      "description": "Grants permission to retrieve details for an events configuration for a bot to receive outgoing events",
      "accessLevel": "Read"
    },
    "GetGlobalSettings": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetGlobalSettings.html",
      "description": "Grants permission to get global settings related to Amazon Chime for the AWS account",
      "accessLevel": "Read"
    },
    "GetMeeting": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetMeeting.html",
      "description": "Grants permission to get the meeting record for a specified meeting ID",
      "accessLevel": "Read",
      "resourceTypes": {
        "meeting": {
          "required": true
        }
      }
    },
    "GetMeetingDetail": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to get attendee, connection, and other details for a meeting",
      "accessLevel": "Read"
    },
    "GetPhoneNumber": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumber.html",
      "description": "Grants permission to get details for the specified phone number",
      "accessLevel": "Read"
    },
    "GetPhoneNumberOrder": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumberOrder.html",
      "description": "Grants permission to get details for the specified phone number order",
      "accessLevel": "Read"
    },
    "GetPhoneNumberSettings": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumberSettings.html",
      "description": "Grants permission to get phone number settings related to Amazon Chime for the AWS account",
      "accessLevel": "Read"
    },
    "GetProxySession": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetProxySession.html",
      "description": "Grants permission to get details of the specified proxy session for the specified Amazon Chime Voice Connector",
      "accessLevel": "Read"
    },
    "GetRetentionSettings": {
      "url": "",
      "description": "Gets the retention settings for the specified Amazon Chime account.",
      "accessLevel": "Read"
    },
    "GetRoom": {
      "url": "",
      "description": "Grants permission to retrieve a room",
      "accessLevel": "Read"
    },
    "GetTelephonyLimits": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/phone-numbers.html",
      "description": "Grants permission to get telephony limits for the AWS account",
      "accessLevel": "Read"
    },
    "GetUser": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetUser.html",
      "description": "Grants permission to get details for the specified user ID",
      "accessLevel": "Read"
    },
    "GetUserActivityReportData": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/user-details.html",
      "description": "Grants permission to get a summary of user activity on the user details page",
      "accessLevel": "Read"
    },
    "GetUserByEmail": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/user-details.html",
      "description": "Grants permission to get user details for an Amazon Chime user based on the email address in an Amazon Chime Enterprise or Team account",
      "accessLevel": "Read"
    },
    "GetUserSettings": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetUserSettings.html",
      "description": "Grants permission to get user settings related to the specified Amazon Chime user",
      "accessLevel": "Read"
    },
    "GetVoiceConnector": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnector.html",
      "description": "Grants permission to get details for the specified Amazon Chime Voice Connector",
      "accessLevel": "Read"
    },
    "GetVoiceConnectorEmergencyCallingConfiguration": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorEmergencyCallingConfiguration.html",
      "description": "Grants permission to get details of the emergency calling configuration for the specified Amazon Chime Voice Connector",
      "accessLevel": "Read"
    },
    "GetVoiceConnectorGroup": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorGroup.html",
      "description": "Grants permission to get details for the specified Amazon Chime Voice Connector Group",
      "accessLevel": "Read"
    },
    "GetVoiceConnectorLoggingConfiguration": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorLoggingConfiguration.html",
      "description": "Grants permission to get details of the logging configuration for the specified Amazon Chime Voice Connector",
      "accessLevel": "Read"
    },
    "GetVoiceConnectorOrigination": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorOrigination.html",
      "description": "Grants permission to get details of the origination settings for the specified Amazon Chime Voice Connector",
      "accessLevel": "Read"
    },
    "GetVoiceConnectorProxy": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorProxy.html",
      "description": "Grants permission to get details of the proxy configuration for the specified Amazon Chime Voice Connector",
      "accessLevel": "Read"
    },
    "GetVoiceConnectorStreamingConfiguration": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorStreamingConfiguration.html",
      "description": "Grants permission to get details of the streaming configuration for the specified Amazon Chime Voice Connector",
      "accessLevel": "Read"
    },
    "GetVoiceConnectorTermination": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorTermination.html",
      "description": "Grants permission to get details of the termination settings for the specified Amazon Chime Voice Connector",
      "accessLevel": "Read"
    },
    "GetVoiceConnectorTerminationHealth": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorTerminationHealth.html",
      "description": "Grants permission to get details of the termination health for the specified Amazon Chime Voice Connector",
      "accessLevel": "Read"
    },
    "InviteDelegate": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to send an invitation to accept a request for AWS account delegation for an Amazon Chime account",
      "accessLevel": "Write"
    },
    "InviteUsers": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_InviteUsers.html",
      "description": "Grants permission to invite as many as 50 users to the specified Amazon Chime account",
      "accessLevel": "Write"
    },
    "InviteUsersFromProvider": {
      "url": "",
      "description": "Grants permission to invite users from a third party provider to your Amazon Chime account",
      "accessLevel": "Write"
    },
    "ListAccountUsageReportData": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/view-reports.html",
      "description": "Grants permission to list Amazon Chime account usage reporting data",
      "accessLevel": "List"
    },
    "ListAccounts": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAccounts.html",
      "description": "Grants permission to list the Amazon Chime accounts under the administrator's AWS account",
      "accessLevel": "List"
    },
    "ListApiKeys": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html",
      "description": "Grants permission to list the SCIM access keys defined for your Amazon Chime account and Okta configuration",
      "accessLevel": "List"
    },
    "ListAttendeeTags": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAttendeeTags.html",
      "description": "Grants permission to list the tags applied to an Amazon Chime SDK attendee resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "meeting": {
          "required": true
        }
      }
    },
    "ListAttendees": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAttendees.html",
      "description": "Grants permission to list up to 100 attendees for a specified Amazon Chime SDK meeting",
      "accessLevel": "Read",
      "resourceTypes": {
        "meeting": {
          "required": true
        }
      }
    },
    "ListBots": {
      "url": "",
      "description": "Grants permission to list the bots associated with the administrator's Amazon Chime Enterprise account",
      "accessLevel": "List"
    },
    "ListCDRBucket": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to list Call Detail Record S3 buckets",
      "accessLevel": "List"
    },
    "ListCallingRegions": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/phone-numbers.html",
      "description": "Grants permission to list the calling regions available for the administrator's AWS account",
      "accessLevel": "List"
    },
    "ListDelegates": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to list account delegate information associated with your Amazon Chime account",
      "accessLevel": "List"
    },
    "ListDirectories": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to list active Active Directories hosted in the Directory Service of your AWS account",
      "accessLevel": "List"
    },
    "ListDomains": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html",
      "description": "Grants permission to list domains associated with your Amazon Chime account",
      "accessLevel": "List"
    },
    "ListGroups": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to list Active Directory or Okta user groups associated with your Amazon Chime Enterprise account",
      "accessLevel": "List"
    },
    "ListMeetingEvents": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/view-reports.html",
      "description": "Grants permission to list all events that occurred for a specified meeting",
      "accessLevel": "List"
    },
    "ListMeetingTags": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_ListMeetingTags.html",
      "description": "Grants permission to list the tags applied to an Amazon Chime SDK meeting resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "meeting": {
          "required": true
        }
      }
    },
    "ListMeetings": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_ListMeetings.html",
      "description": "Grants permission to list up to 100 active Amazon Chime SDK meetings",
      "accessLevel": "Read"
    },
    "ListMeetingsReportData": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/view-reports.html",
      "description": "Grants permission to list meetings ended during the specified date range",
      "accessLevel": "List"
    },
    "ListPhoneNumberOrders": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_ListPhoneNumberOrders.html",
      "description": "Grants permission to list the phone number orders under the administrator's AWS account",
      "accessLevel": "List"
    },
    "ListPhoneNumbers": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_ListPhoneNumbers.html",
      "description": "Grants permission to list the phone numbers under the administrator's AWS account",
      "accessLevel": "List"
    },
    "ListProxySessions": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_ListProxySessions.html",
      "description": "Grants permission to list proxy sessions for the specified Amazon Chime Voice Connector",
      "accessLevel": "List"
    },
    "ListRoomMemberships": {
      "url": "",
      "description": "Grants permission to list all room members",
      "accessLevel": "Read"
    },
    "ListRooms": {
      "url": "",
      "description": "Grants permission to list rooms",
      "accessLevel": "Read"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list the tags applied to an Amazon Chime SDK meeting resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "meeting": {
          "required": false
        }
      }
    },
    "ListUsers": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_ListUsers.html",
      "description": "Grants permission to list the users that belong to the specified Amazon Chime account",
      "accessLevel": "List"
    },
    "ListVoiceConnectorGroups": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectorGroups.html",
      "description": "Grants permission to list the Amazon Chime Voice Connector Groups under the administrator's AWS account",
      "accessLevel": "List"
    },
    "ListVoiceConnectorTerminationCredentials": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectorTerminationCredentials.html",
      "description": "Grants permission to list the SIP termination credentials for the specified Amazon Chime Voice Connector",
      "accessLevel": "List"
    },
    "ListVoiceConnectors": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectors.html",
      "description": "Grants permission to list the Amazon Chime Voice Connectors under the administrator's AWS account",
      "accessLevel": "List"
    },
    "LogoutUser": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_LogoutUser.html",
      "description": "Grants permission to log out the specified user from all of the devices they are currently logged into",
      "accessLevel": "Write"
    },
    "PutEventsConfiguration": {
      "url": "",
      "description": "Grants permission to update details for an events configuration for a bot to receive outgoing events",
      "accessLevel": "Write"
    },
    "PutRetentionSettings": {
      "url": "",
      "description": "Puts retention settings for the specified Amazon Chime account",
      "accessLevel": "Write"
    },
    "PutVoiceConnectorEmergencyCallingConfiguration": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorEmergencyCallingConfiguration.html",
      "description": "Grants permission to add emergency calling configuration for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "PutVoiceConnectorLoggingConfiguration": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorLoggingConfiguration.html",
      "description": "Grants permission to add logging configuration for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "PutVoiceConnectorOrigination": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorOrigination.html",
      "description": "Grants permission to update the origination settings for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "PutVoiceConnectorProxy": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorProxy.html",
      "description": "Grants permission to add proxy configuration for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "PutVoiceConnectorStreamingConfiguration": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorStreamingConfiguration.html",
      "description": "Grants permission to add streaming configuration for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "PutVoiceConnectorTermination": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorTermination.html",
      "description": "Grants permission to update the termination settings for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "PutVoiceConnectorTerminationCredentials": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorTerminationCredentials.html",
      "description": "Grants permission to add SIP termination credentials for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "RedactConversationMessage": {
      "url": "",
      "description": "Redacts the specified Chime conversation Message",
      "accessLevel": "Write"
    },
    "RedactRoomMessage": {
      "url": "",
      "description": "Redacts the specified Chime room Message",
      "accessLevel": "Write"
    },
    "RegenerateSecurityToken": {
      "url": "",
      "description": "Grants permission to regenerate the security token for the specified bot",
      "accessLevel": "Write"
    },
    "RenameAccount": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/rename-account.html",
      "description": "Grants permission to modify the account name for your Amazon Chime Enterprise or Team account",
      "accessLevel": "Write"
    },
    "RenewDelegate": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to renew the delegation request associated with an Amazon Chime account",
      "accessLevel": "Write"
    },
    "ResetAccountResource": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to reset the account resource in your Amazon Chime account",
      "accessLevel": "Write"
    },
    "ResetPersonalPIN": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_ResetPersonalPIN.html",
      "description": "Grants permission to reset the personal meeting PIN for the specified user on an Amazon Chime account",
      "accessLevel": "Write"
    },
    "RestorePhoneNumber": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_RestorePhoneNumber.html",
      "description": "Grants permission to restore the specified phone number from the deltion queue back to the phone number inventory",
      "accessLevel": "Write"
    },
    "RetrieveDataExports": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/request-attachments.html",
      "description": "Grants permission to download the file containing links to all user attachments returned as part of the \"Request attachments\" action",
      "accessLevel": "List"
    },
    "SearchAvailablePhoneNumbers": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_SearchAvailablePhoneNumbers.html",
      "description": "Grants permission to search phone numbers that can be ordered from the carrier",
      "accessLevel": "Read"
    },
    "StartDataExport": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/request-attachments.html",
      "description": "Grants permission to submit the \"Request attachments\" request",
      "accessLevel": "Write"
    },
    "SubmitSupportRequest": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/chime-getting-admin-support.html",
      "description": "Grants permission to submit a customer service support request",
      "accessLevel": "Write"
    },
    "SuspendUsers": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/manage-access.html",
      "description": "Grants permission to suspend users from an Amazon Chime Enterprise account",
      "accessLevel": "Write"
    },
    "TagAttendee": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_TagAttendee.html",
      "description": "Grants permission to apply the specified tags to the specified Amazon Chime SDK attendee",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "meeting": {
          "required": true
        }
      }
    },
    "TagMeeting": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_TagMeeting.html",
      "description": "Grants permission to apply the specified tags to the specified Amazon Chime SDK meeting.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "meeting": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to apply the specified tags to the specified Amazon Chime SDK meeting resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "meeting": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UnauthorizeDirectory": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to unauthorize an Active Directory from your Amazon Chime Enterprise account",
      "accessLevel": "Write"
    },
    "UntagAttendee": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagAttendee.html",
      "description": "Grants permission to untag the specified tags from the specified Amazon Chime SDK attendee.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "meeting": {
          "required": true
        }
      }
    },
    "UntagMeeting": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagMeeting.html",
      "description": "Grants permission to untag the specified tags from the specified Amazon Chime SDK meeting.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "meeting": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to untag the specified tags from the specified Amazon Chime SDK meeting resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "meeting": {
          "required": false
        }
      }
    },
    "UpdateAccount": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateAccount.html",
      "description": "Grants permission to update account details for the specified Amazon Chime account",
      "accessLevel": "Write"
    },
    "UpdateAccountOpenIdConfig": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html",
      "description": "Grants permission to update the OpenIdConfig attributes for your Amazon Chime account",
      "accessLevel": "Write"
    },
    "UpdateAccountResource": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to update the account resource in your Amazon Chime account",
      "accessLevel": "Write"
    },
    "UpdateAccountSettings": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateAccountSettings.html",
      "description": "Grants permission to update the settings for the specified Amazon Chime account",
      "accessLevel": "Write"
    },
    "UpdateBot": {
      "url": "",
      "description": "Grants permission to update the status of the specified bot",
      "accessLevel": "Write"
    },
    "UpdateCDRSettings": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to update your Call Detail Record S3 bucket",
      "accessLevel": "Write"
    },
    "UpdateGlobalSettings": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateGlobalSettings.html",
      "description": "Grants permission to update the global settings related to Amazon Chime for the AWS account",
      "accessLevel": "Write"
    },
    "UpdatePhoneNumber": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdatePhoneNumber.html",
      "description": "Grants permission to update phone number details for the specified phone number",
      "accessLevel": "Write"
    },
    "UpdatePhoneNumberSettings": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdatePhoneNumberSettings.html",
      "description": "Grants permission to update phone number settings related to Amazon Chime for the AWS account",
      "accessLevel": "Write"
    },
    "UpdateProxySession": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateProxySession.html",
      "description": "Grants permission to update a proxy session for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "UpdateRoom": {
      "url": "",
      "description": "Grants permission to update a room",
      "accessLevel": "Write"
    },
    "UpdateRoomMembership": {
      "url": "",
      "description": "Grants permission to update room membership role",
      "accessLevel": "Write"
    },
    "UpdateSupportedLicenses": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/manage-access.html",
      "description": "Grants permission to update the supported license tiers available for users in your Amazon Chime account",
      "accessLevel": "Write"
    },
    "UpdateUser": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateUser.html",
      "description": "Grants permission to update user details for a specified user ID",
      "accessLevel": "Write"
    },
    "UpdateUserLicenses": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/manage-access.html",
      "description": "Grants permission to update the licenses for your Amazon Chime users",
      "accessLevel": "Write"
    },
    "UpdateUserSettings": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateUserSettings.html",
      "description": "Grants permission to update user settings related to the specified Amazon Chime user",
      "accessLevel": "Write"
    },
    "UpdateVoiceConnector": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateVoiceConnector.html",
      "description": "Grants permission to update Amazon Chime Voice Connector details for the specified Amazon Chime Voice Connector",
      "accessLevel": "Write"
    },
    "UpdateVoiceConnectorGroup": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateVoiceConnectorGroup.html",
      "description": "Grants permission to update Amazon Chime Voice Connector Group details for the specified Amazon Chime Voice Connector Group",
      "accessLevel": "Write"
    },
    "ValidateAccountResource": {
      "url": "https://docs.aws.amazon.com/chime/latest/ag/control-access.html",
      "description": "Grants permission to validate the account resource in your Amazon Chime account",
      "accessLevel": "Read"
    }
  };
  public resourceTypes: ResourceTypes = {
    "meeting": {
      "name": "meeting",
      "url": "",
      "arn": "arn:${Partition}:chime::${AccountId}:meeting/${MeetingId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service chime
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonchime.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to accept the delegate invitation to share management of an Amazon Chime account with another AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public acceptDelegate() {
    this.add('chime:AcceptDelegate');
    return this;
  }

  /**
   * Grants permission to activate users in an Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  public activateUsers() {
    this.add('chime:ActivateUsers');
    return this;
  }

  /**
   * Grants permission to add a domain to your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html
   */
  public addDomain() {
    this.add('chime:AddDomain');
    return this;
  }

  /**
   * Grants permission to add new or update existing Active Directory or Okta user groups associated with your Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html
   */
  public addOrUpdateGroups() {
    this.add('chime:AddOrUpdateGroups');
    return this;
  }

  /**
   * Grants permission to associate a phone number with an Amazon Chime user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumberWithUser.html
   */
  public associatePhoneNumberWithUser() {
    this.add('chime:AssociatePhoneNumberWithUser');
    return this;
  }

  /**
   * Grants permission to associate multiple phone numbers with an Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumbersWithVoiceConnector.html
   */
  public associatePhoneNumbersWithVoiceConnector() {
    this.add('chime:AssociatePhoneNumbersWithVoiceConnector');
    return this;
  }

  /**
   * Grants permission to associate multiple phone numbers with an Amazon Chime Voice Connector Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumbersWithVoiceConnectorGroup.html
   */
  public associatePhoneNumbersWithVoiceConnectorGroup() {
    this.add('chime:AssociatePhoneNumbersWithVoiceConnectorGroup');
    return this;
  }

  /**
   * Grants permission to associate the specified sign-in delegate groups with the specified Amazon Chime account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociateSigninDelegateGroupsWithAccount.html
   */
  public associateSigninDelegateGroupsWithAccount() {
    this.add('chime:AssociateSigninDelegateGroupsWithAccount');
    return this;
  }

  /**
   * Grants permission to authorize an Active Directory for your Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public authorizeDirectory() {
    this.add('chime:AuthorizeDirectory');
    return this;
  }

  /**
   * Grants permission to create new attendees for an active Amazon Chime SDK meeting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchCreateAttendee.html
   */
  public batchCreateAttendee() {
    this.add('chime:BatchCreateAttendee');
    return this;
  }

  /**
   * Grants permission to batch add room members
   *
   * Access Level: Write
   */
  public batchCreateRoomMembership() {
    this.add('chime:BatchCreateRoomMembership');
    return this;
  }

  /**
   * Grants permission to move up to 50 phone numbers to the deletion queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchDeletePhoneNumber.html
   */
  public batchDeletePhoneNumber() {
    this.add('chime:BatchDeletePhoneNumber');
    return this;
  }

  /**
   * Grants permission to suspend up to 50 users from a Team or EnterpriseLWA Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchSuspendUser.html
   */
  public batchSuspendUser() {
    this.add('chime:BatchSuspendUser');
    return this;
  }

  /**
   * Grants permission to remove the suspension from up to 50 previously suspended users for the specified Amazon Chime EnterpriseLWA account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUnsuspendUser.html
   */
  public batchUnsuspendUser() {
    this.add('chime:BatchUnsuspendUser');
    return this;
  }

  /**
   * Grants permission to update phone number details within the UpdatePhoneNumberRequestItem object for up to 50 phone numbers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUpdatePhoneNumber.html
   */
  public batchUpdatePhoneNumber() {
    this.add('chime:BatchUpdatePhoneNumber');
    return this;
  }

  /**
   * Grants permission to update user details within the UpdateUserRequestItem object for up to 20 users for the specified Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUpdateUser.html
   */
  public batchUpdateUser() {
    this.add('chime:BatchUpdateUser');
    return this;
  }

  /**
   * Grants permission to connect an Active Directory to your Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/active_directory.html
   */
  public connectDirectory() {
    this.add('chime:ConnectDirectory');
    return this;
  }

  /**
   * Grants permission to create an Amazon Chime account under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAccount.html
   */
  public createAccount() {
    this.add('chime:CreateAccount');
    return this;
  }

  /**
   * Grants permission to create a new SCIM access key for your Amazon Chime account and Okta configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  public createApiKey() {
    this.add('chime:CreateApiKey');
    return this;
  }

  /**
   * Grants permission to create a new attendee for an active Amazon Chime SDK meeting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html
   */
  public createAttendee() {
    this.add('chime:CreateAttendee');
    return this;
  }

  /**
   * Grants permission to create a bot for an Amazon Chime Enterprise account
   *
   * Access Level: Write
   */
  public createBot() {
    this.add('chime:CreateBot');
    return this;
  }

  /**
   * Grants permission to add a bot to a chat room in your Amazon Chime Enterprise account
   *
   * Access Level: Write
   */
  public createBotMembership() {
    this.add('chime:CreateBotMembership');
    return this;
  }

  /**
   * Grants permission to create a new Call Detail Record S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  public createCDRBucket() {
    this.add('chime:CreateCDRBucket');
    return this;
  }

  /**
   * Grants permission to create a new Amazon Chime SDK meeting in the specified media Region, with no initial attendees
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateMeeting.html
   */
  public createMeeting() {
    this.add('chime:CreateMeeting');
    return this;
  }

  /**
   * Grants permission to create a phone number order with the Carriers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreatePhoneNumberOrder.html
   */
  public createPhoneNumberOrder() {
    this.add('chime:CreatePhoneNumberOrder');
    return this;
  }

  /**
   * Grants permission to create a proxy session for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateProxySession.html
   */
  public createProxySession() {
    this.add('chime:CreateProxySession');
    return this;
  }

  /**
   * Grants permission to create a room
   *
   * Access Level: Write
   */
  public createRoom() {
    this.add('chime:CreateRoom');
    return this;
  }

  /**
   * Grants permission to add a room member
   *
   * Access Level: Write
   */
  public createRoomMembership() {
    this.add('chime:CreateRoomMembership');
    return this;
  }

  /**
   * Grants permission to create a user under the specified Amazon Chime account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateUser.html
   */
  public createUser() {
    this.add('chime:CreateUser');
    return this;
  }

  /**
   * Grants permission to create a Amazon Chime Voice Connector under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateVoiceConnector.html
   */
  public createVoiceConnector() {
    this.add('chime:CreateVoiceConnector');
    return this;
  }

  /**
   * Grants permission to create a Amazon Chime Voice Connector Group under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateVoiceConnectorGroup.html
   */
  public createVoiceConnectorGroup() {
    this.add('chime:CreateVoiceConnectorGroup');
    return this;
  }

  /**
   * Grants permission to delete the specified Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAccount.html
   */
  public deleteAccount() {
    this.add('chime:DeleteAccount');
    return this;
  }

  /**
   * Grants permission to delete the OpenIdConfig attributes from your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  public deleteAccountOpenIdConfig() {
    this.add('chime:DeleteAccountOpenIdConfig');
    return this;
  }

  /**
   * Grants permission to delete the specified SCIM access key associated with your Amazon Chime account and Okta configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  public deleteApiKey() {
    this.add('chime:DeleteApiKey');
    return this;
  }

  /**
   * Grants permission to delete the specified attendee from an Amazon Chime SDK meeting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAttendee.html
   */
  public deleteAttendee() {
    this.add('chime:DeleteAttendee');
    return this;
  }

  /**
   * Grants permission to delete a Call Detail Record S3 bucket from your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public deleteCDRBucket() {
    this.add('chime:DeleteCDRBucket');
    return this;
  }

  /**
   * Grants permission to delete delegated AWS account management from your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public deleteDelegate() {
    this.add('chime:DeleteDelegate');
    return this;
  }

  /**
   * Grants permission to delete a domain from your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html
   */
  public deleteDomain() {
    this.add('chime:DeleteDomain');
    return this;
  }

  /**
   * Grants permission to delete an events configuration for a bot to receive outgoing events
   *
   * Access Level: Write
   */
  public deleteEventsConfiguration() {
    this.add('chime:DeleteEventsConfiguration');
    return this;
  }

  /**
   * Grants permission to delete Active Directory or Okta user groups from your Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public deleteGroups() {
    this.add('chime:DeleteGroups');
    return this;
  }

  /**
   * Grants permission to delete the specified Amazon Chime SDK meeting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteMeeting.html
   */
  public deleteMeeting() {
    this.add('chime:DeleteMeeting');
    return this;
  }

  /**
   * Grants permission to move a phone number to the deletion queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeletePhoneNumber.html
   */
  public deletePhoneNumber() {
    this.add('chime:DeletePhoneNumber');
    return this;
  }

  /**
   * Grants permission to delete a proxy session for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteProxySession.html
   */
  public deleteProxySession() {
    this.add('chime:DeleteProxySession');
    return this;
  }

  /**
   * Grants permission to delete a room
   *
   * Access Level: Write
   */
  public deleteRoom() {
    this.add('chime:DeleteRoom');
    return this;
  }

  /**
   * Grants permission to remove a room member
   *
   * Access Level: Write
   */
  public deleteRoomMembership() {
    this.add('chime:DeleteRoomMembership');
    return this;
  }

  /**
   * Grants permission to delete the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnector.html
   */
  public deleteVoiceConnector() {
    this.add('chime:DeleteVoiceConnector');
    return this;
  }

  /**
   * Grants permission to delete emergency calling configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorEmergencyCallingConfiguration.html
   */
  public deleteVoiceConnectorEmergencyCallingConfiguration() {
    this.add('chime:DeleteVoiceConnectorEmergencyCallingConfiguration');
    return this;
  }

  /**
   * Grants permission to delete the specified Amazon Chime Voice Connector Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorGroup.html
   */
  public deleteVoiceConnectorGroup() {
    this.add('chime:DeleteVoiceConnectorGroup');
    return this;
  }

  /**
   * Grants permission to delete the origination settings for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorOrigination.html
   */
  public deleteVoiceConnectorOrigination() {
    this.add('chime:DeleteVoiceConnectorOrigination');
    return this;
  }

  /**
   * Grants permission to delete proxy configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorProxy.html
   */
  public deleteVoiceConnectorProxy() {
    this.add('chime:DeleteVoiceConnectorProxy');
    return this;
  }

  /**
   * Grants permission to delete streaming configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorStreamingConfiguration.html
   */
  public deleteVoiceConnectorStreamingConfiguration() {
    this.add('chime:DeleteVoiceConnectorStreamingConfiguration');
    return this;
  }

  /**
   * Grants permission to delete the termination settings for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorTermination.html
   */
  public deleteVoiceConnectorTermination() {
    this.add('chime:DeleteVoiceConnectorTermination');
    return this;
  }

  /**
   * Grants permission to delete SIP termination credentials for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorTerminationCredentials.html
   */
  public deleteVoiceConnectorTerminationCredentials() {
    this.add('chime:DeleteVoiceConnectorTerminationCredentials');
    return this;
  }

  /**
   * Grants permission to disassociate the primary provisioned number from the specified Amazon Chime user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumberFromUser.html
   */
  public disassociatePhoneNumberFromUser() {
    this.add('chime:DisassociatePhoneNumberFromUser');
    return this;
  }

  /**
   * Grants permission to disassociate multiple phone numbers from the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumbersFromVoiceConnector.html
   */
  public disassociatePhoneNumbersFromVoiceConnector() {
    this.add('chime:DisassociatePhoneNumbersFromVoiceConnector');
    return this;
  }

  /**
   * Grants permission to disassociate multiple phone numbers from the specified Amazon Chime Voice Connector Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumbersFromVoiceConnectorGroup.html
   */
  public disassociatePhoneNumbersFromVoiceConnectorGroup() {
    this.add('chime:DisassociatePhoneNumbersFromVoiceConnectorGroup');
    return this;
  }

  /**
   * Grants permission to disassociate the specified sign-in delegate groups from the specified Amazon Chime account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociateSigninDelegateGroupsFromAccount.html
   */
  public disassociateSigninDelegateGroupsFromAccount() {
    this.add('chime:DisassociateSigninDelegateGroupsFromAccount');
    return this;
  }

  /**
   * Grants permission to disconnect the Active Directory from your Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public disconnectDirectory() {
    this.add('chime:DisconnectDirectory');
    return this;
  }

  /**
   * Grants permission to get details for the specified Amazon Chime account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAccount.html
   */
  public getAccount() {
    this.add('chime:GetAccount');
    return this;
  }

  /**
   * Grants permission to get details for the account resource associated with your Amazon Chime account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public getAccountResource() {
    this.add('chime:GetAccountResource');
    return this;
  }

  /**
   * Grants permission to get account settings for the specified Amazon Chime account ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAccountSettings.html
   */
  public getAccountSettings() {
    this.add('chime:GetAccountSettings');
    return this;
  }

  /**
   * Grants permission to get the account details and OpenIdConfig attributes for your Amazon Chime account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  public getAccountWithOpenIdConfig() {
    this.add('chime:GetAccountWithOpenIdConfig');
    return this;
  }

  /**
   * Grants permission to get attendee details for a specified meeting ID and attendee ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAttendee.html
   */
  public getAttendee() {
    this.add('chime:GetAttendee');
    return this;
  }

  /**
   * Grants permission to retrieve details for the specified bot
   *
   * Access Level: Read
   */
  public getBot() {
    this.add('chime:GetBot');
    return this;
  }

  /**
   * Grants permission to get details of a Call Detail Record S3 bucket associated with your Amazon Chime account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public getCDRBucket() {
    this.add('chime:GetCDRBucket');
    return this;
  }

  /**
   * Grants permission to get domain details for a domain associated with your Amazon Chime account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html
   */
  public getDomain() {
    this.add('chime:GetDomain');
    return this;
  }

  /**
   * Grants permission to retrieve details for an events configuration for a bot to receive outgoing events
   *
   * Access Level: Read
   */
  public getEventsConfiguration() {
    this.add('chime:GetEventsConfiguration');
    return this;
  }

  /**
   * Grants permission to get global settings related to Amazon Chime for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetGlobalSettings.html
   */
  public getGlobalSettings() {
    this.add('chime:GetGlobalSettings');
    return this;
  }

  /**
   * Grants permission to get the meeting record for a specified meeting ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetMeeting.html
   */
  public getMeeting() {
    this.add('chime:GetMeeting');
    return this;
  }

  /**
   * Grants permission to get attendee, connection, and other details for a meeting
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public getMeetingDetail() {
    this.add('chime:GetMeetingDetail');
    return this;
  }

  /**
   * Grants permission to get details for the specified phone number
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumber.html
   */
  public getPhoneNumber() {
    this.add('chime:GetPhoneNumber');
    return this;
  }

  /**
   * Grants permission to get details for the specified phone number order
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumberOrder.html
   */
  public getPhoneNumberOrder() {
    this.add('chime:GetPhoneNumberOrder');
    return this;
  }

  /**
   * Grants permission to get phone number settings related to Amazon Chime for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumberSettings.html
   */
  public getPhoneNumberSettings() {
    this.add('chime:GetPhoneNumberSettings');
    return this;
  }

  /**
   * Grants permission to get details of the specified proxy session for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetProxySession.html
   */
  public getProxySession() {
    this.add('chime:GetProxySession');
    return this;
  }

  /**
   * Gets the retention settings for the specified Amazon Chime account.
   *
   * Access Level: Read
   */
  public getRetentionSettings() {
    this.add('chime:GetRetentionSettings');
    return this;
  }

  /**
   * Grants permission to retrieve a room
   *
   * Access Level: Read
   */
  public getRoom() {
    this.add('chime:GetRoom');
    return this;
  }

  /**
   * Grants permission to get telephony limits for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/phone-numbers.html
   */
  public getTelephonyLimits() {
    this.add('chime:GetTelephonyLimits');
    return this;
  }

  /**
   * Grants permission to get details for the specified user ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetUser.html
   */
  public getUser() {
    this.add('chime:GetUser');
    return this;
  }

  /**
   * Grants permission to get a summary of user activity on the user details page
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/user-details.html
   */
  public getUserActivityReportData() {
    this.add('chime:GetUserActivityReportData');
    return this;
  }

  /**
   * Grants permission to get user details for an Amazon Chime user based on the email address in an Amazon Chime Enterprise or Team account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/user-details.html
   */
  public getUserByEmail() {
    this.add('chime:GetUserByEmail');
    return this;
  }

  /**
   * Grants permission to get user settings related to the specified Amazon Chime user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetUserSettings.html
   */
  public getUserSettings() {
    this.add('chime:GetUserSettings');
    return this;
  }

  /**
   * Grants permission to get details for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnector.html
   */
  public getVoiceConnector() {
    this.add('chime:GetVoiceConnector');
    return this;
  }

  /**
   * Grants permission to get details of the emergency calling configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorEmergencyCallingConfiguration.html
   */
  public getVoiceConnectorEmergencyCallingConfiguration() {
    this.add('chime:GetVoiceConnectorEmergencyCallingConfiguration');
    return this;
  }

  /**
   * Grants permission to get details for the specified Amazon Chime Voice Connector Group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorGroup.html
   */
  public getVoiceConnectorGroup() {
    this.add('chime:GetVoiceConnectorGroup');
    return this;
  }

  /**
   * Grants permission to get details of the logging configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorLoggingConfiguration.html
   */
  public getVoiceConnectorLoggingConfiguration() {
    this.add('chime:GetVoiceConnectorLoggingConfiguration');
    return this;
  }

  /**
   * Grants permission to get details of the origination settings for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorOrigination.html
   */
  public getVoiceConnectorOrigination() {
    this.add('chime:GetVoiceConnectorOrigination');
    return this;
  }

  /**
   * Grants permission to get details of the proxy configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorProxy.html
   */
  public getVoiceConnectorProxy() {
    this.add('chime:GetVoiceConnectorProxy');
    return this;
  }

  /**
   * Grants permission to get details of the streaming configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorStreamingConfiguration.html
   */
  public getVoiceConnectorStreamingConfiguration() {
    this.add('chime:GetVoiceConnectorStreamingConfiguration');
    return this;
  }

  /**
   * Grants permission to get details of the termination settings for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorTermination.html
   */
  public getVoiceConnectorTermination() {
    this.add('chime:GetVoiceConnectorTermination');
    return this;
  }

  /**
   * Grants permission to get details of the termination health for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorTerminationHealth.html
   */
  public getVoiceConnectorTerminationHealth() {
    this.add('chime:GetVoiceConnectorTerminationHealth');
    return this;
  }

  /**
   * Grants permission to send an invitation to accept a request for AWS account delegation for an Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public inviteDelegate() {
    this.add('chime:InviteDelegate');
    return this;
  }

  /**
   * Grants permission to invite as many as 50 users to the specified Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_InviteUsers.html
   */
  public inviteUsers() {
    this.add('chime:InviteUsers');
    return this;
  }

  /**
   * Grants permission to invite users from a third party provider to your Amazon Chime account
   *
   * Access Level: Write
   */
  public inviteUsersFromProvider() {
    this.add('chime:InviteUsersFromProvider');
    return this;
  }

  /**
   * Grants permission to list Amazon Chime account usage reporting data
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/view-reports.html
   */
  public listAccountUsageReportData() {
    this.add('chime:ListAccountUsageReportData');
    return this;
  }

  /**
   * Grants permission to list the Amazon Chime accounts under the administrator's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAccounts.html
   */
  public listAccounts() {
    this.add('chime:ListAccounts');
    return this;
  }

  /**
   * Grants permission to list the SCIM access keys defined for your Amazon Chime account and Okta configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  public listApiKeys() {
    this.add('chime:ListApiKeys');
    return this;
  }

  /**
   * Grants permission to list the tags applied to an Amazon Chime SDK attendee resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAttendeeTags.html
   */
  public listAttendeeTags() {
    this.add('chime:ListAttendeeTags');
    return this;
  }

  /**
   * Grants permission to list up to 100 attendees for a specified Amazon Chime SDK meeting
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAttendees.html
   */
  public listAttendees() {
    this.add('chime:ListAttendees');
    return this;
  }

  /**
   * Grants permission to list the bots associated with the administrator's Amazon Chime Enterprise account
   *
   * Access Level: List
   */
  public listBots() {
    this.add('chime:ListBots');
    return this;
  }

  /**
   * Grants permission to list Call Detail Record S3 buckets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public listCDRBucket() {
    this.add('chime:ListCDRBucket');
    return this;
  }

  /**
   * Grants permission to list the calling regions available for the administrator's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/phone-numbers.html
   */
  public listCallingRegions() {
    this.add('chime:ListCallingRegions');
    return this;
  }

  /**
   * Grants permission to list account delegate information associated with your Amazon Chime account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public listDelegates() {
    this.add('chime:ListDelegates');
    return this;
  }

  /**
   * Grants permission to list active Active Directories hosted in the Directory Service of your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public listDirectories() {
    this.add('chime:ListDirectories');
    return this;
  }

  /**
   * Grants permission to list domains associated with your Amazon Chime account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html
   */
  public listDomains() {
    this.add('chime:ListDomains');
    return this;
  }

  /**
   * Grants permission to list Active Directory or Okta user groups associated with your Amazon Chime Enterprise account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public listGroups() {
    this.add('chime:ListGroups');
    return this;
  }

  /**
   * Grants permission to list all events that occurred for a specified meeting
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/view-reports.html
   */
  public listMeetingEvents() {
    this.add('chime:ListMeetingEvents');
    return this;
  }

  /**
   * Grants permission to list the tags applied to an Amazon Chime SDK meeting resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListMeetingTags.html
   */
  public listMeetingTags() {
    this.add('chime:ListMeetingTags');
    return this;
  }

  /**
   * Grants permission to list up to 100 active Amazon Chime SDK meetings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListMeetings.html
   */
  public listMeetings() {
    this.add('chime:ListMeetings');
    return this;
  }

  /**
   * Grants permission to list meetings ended during the specified date range
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/view-reports.html
   */
  public listMeetingsReportData() {
    this.add('chime:ListMeetingsReportData');
    return this;
  }

  /**
   * Grants permission to list the phone number orders under the administrator's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListPhoneNumberOrders.html
   */
  public listPhoneNumberOrders() {
    this.add('chime:ListPhoneNumberOrders');
    return this;
  }

  /**
   * Grants permission to list the phone numbers under the administrator's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListPhoneNumbers.html
   */
  public listPhoneNumbers() {
    this.add('chime:ListPhoneNumbers');
    return this;
  }

  /**
   * Grants permission to list proxy sessions for the specified Amazon Chime Voice Connector
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListProxySessions.html
   */
  public listProxySessions() {
    this.add('chime:ListProxySessions');
    return this;
  }

  /**
   * Grants permission to list all room members
   *
   * Access Level: Read
   */
  public listRoomMemberships() {
    this.add('chime:ListRoomMemberships');
    return this;
  }

  /**
   * Grants permission to list rooms
   *
   * Access Level: Read
   */
  public listRooms() {
    this.add('chime:ListRooms');
    return this;
  }

  /**
   * Grants permission to list the tags applied to an Amazon Chime SDK meeting resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('chime:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to list the users that belong to the specified Amazon Chime account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListUsers.html
   */
  public listUsers() {
    this.add('chime:ListUsers');
    return this;
  }

  /**
   * Grants permission to list the Amazon Chime Voice Connector Groups under the administrator's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectorGroups.html
   */
  public listVoiceConnectorGroups() {
    this.add('chime:ListVoiceConnectorGroups');
    return this;
  }

  /**
   * Grants permission to list the SIP termination credentials for the specified Amazon Chime Voice Connector
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectorTerminationCredentials.html
   */
  public listVoiceConnectorTerminationCredentials() {
    this.add('chime:ListVoiceConnectorTerminationCredentials');
    return this;
  }

  /**
   * Grants permission to list the Amazon Chime Voice Connectors under the administrator's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectors.html
   */
  public listVoiceConnectors() {
    this.add('chime:ListVoiceConnectors');
    return this;
  }

  /**
   * Grants permission to log out the specified user from all of the devices they are currently logged into
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_LogoutUser.html
   */
  public logoutUser() {
    this.add('chime:LogoutUser');
    return this;
  }

  /**
   * Grants permission to update details for an events configuration for a bot to receive outgoing events
   *
   * Access Level: Write
   */
  public putEventsConfiguration() {
    this.add('chime:PutEventsConfiguration');
    return this;
  }

  /**
   * Puts retention settings for the specified Amazon Chime account
   *
   * Access Level: Write
   */
  public putRetentionSettings() {
    this.add('chime:PutRetentionSettings');
    return this;
  }

  /**
   * Grants permission to add emergency calling configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorEmergencyCallingConfiguration.html
   */
  public putVoiceConnectorEmergencyCallingConfiguration() {
    this.add('chime:PutVoiceConnectorEmergencyCallingConfiguration');
    return this;
  }

  /**
   * Grants permission to add logging configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorLoggingConfiguration.html
   */
  public putVoiceConnectorLoggingConfiguration() {
    this.add('chime:PutVoiceConnectorLoggingConfiguration');
    return this;
  }

  /**
   * Grants permission to update the origination settings for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorOrigination.html
   */
  public putVoiceConnectorOrigination() {
    this.add('chime:PutVoiceConnectorOrigination');
    return this;
  }

  /**
   * Grants permission to add proxy configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorProxy.html
   */
  public putVoiceConnectorProxy() {
    this.add('chime:PutVoiceConnectorProxy');
    return this;
  }

  /**
   * Grants permission to add streaming configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorStreamingConfiguration.html
   */
  public putVoiceConnectorStreamingConfiguration() {
    this.add('chime:PutVoiceConnectorStreamingConfiguration');
    return this;
  }

  /**
   * Grants permission to update the termination settings for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorTermination.html
   */
  public putVoiceConnectorTermination() {
    this.add('chime:PutVoiceConnectorTermination');
    return this;
  }

  /**
   * Grants permission to add SIP termination credentials for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorTerminationCredentials.html
   */
  public putVoiceConnectorTerminationCredentials() {
    this.add('chime:PutVoiceConnectorTerminationCredentials');
    return this;
  }

  /**
   * Redacts the specified Chime conversation Message
   *
   * Access Level: Write
   */
  public redactConversationMessage() {
    this.add('chime:RedactConversationMessage');
    return this;
  }

  /**
   * Redacts the specified Chime room Message
   *
   * Access Level: Write
   */
  public redactRoomMessage() {
    this.add('chime:RedactRoomMessage');
    return this;
  }

  /**
   * Grants permission to regenerate the security token for the specified bot
   *
   * Access Level: Write
   */
  public regenerateSecurityToken() {
    this.add('chime:RegenerateSecurityToken');
    return this;
  }

  /**
   * Grants permission to modify the account name for your Amazon Chime Enterprise or Team account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/rename-account.html
   */
  public renameAccount() {
    this.add('chime:RenameAccount');
    return this;
  }

  /**
   * Grants permission to renew the delegation request associated with an Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public renewDelegate() {
    this.add('chime:RenewDelegate');
    return this;
  }

  /**
   * Grants permission to reset the account resource in your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public resetAccountResource() {
    this.add('chime:ResetAccountResource');
    return this;
  }

  /**
   * Grants permission to reset the personal meeting PIN for the specified user on an Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ResetPersonalPIN.html
   */
  public resetPersonalPIN() {
    this.add('chime:ResetPersonalPIN');
    return this;
  }

  /**
   * Grants permission to restore the specified phone number from the deltion queue back to the phone number inventory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_RestorePhoneNumber.html
   */
  public restorePhoneNumber() {
    this.add('chime:RestorePhoneNumber');
    return this;
  }

  /**
   * Grants permission to download the file containing links to all user attachments returned as part of the "Request attachments" action
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/request-attachments.html
   */
  public retrieveDataExports() {
    this.add('chime:RetrieveDataExports');
    return this;
  }

  /**
   * Grants permission to search phone numbers that can be ordered from the carrier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_SearchAvailablePhoneNumbers.html
   */
  public searchAvailablePhoneNumbers() {
    this.add('chime:SearchAvailablePhoneNumbers');
    return this;
  }

  /**
   * Grants permission to submit the "Request attachments" request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/request-attachments.html
   */
  public startDataExport() {
    this.add('chime:StartDataExport');
    return this;
  }

  /**
   * Grants permission to submit a customer service support request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/chime-getting-admin-support.html
   */
  public submitSupportRequest() {
    this.add('chime:SubmitSupportRequest');
    return this;
  }

  /**
   * Grants permission to suspend users from an Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  public suspendUsers() {
    this.add('chime:SuspendUsers');
    return this;
  }

  /**
   * Grants permission to apply the specified tags to the specified Amazon Chime SDK attendee
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_TagAttendee.html
   */
  public tagAttendee() {
    this.add('chime:TagAttendee');
    return this;
  }

  /**
   * Grants permission to apply the specified tags to the specified Amazon Chime SDK meeting.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_TagMeeting.html
   */
  public tagMeeting() {
    this.add('chime:TagMeeting');
    return this;
  }

  /**
   * Grants permission to apply the specified tags to the specified Amazon Chime SDK meeting resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('chime:TagResource');
    return this;
  }

  /**
   * Grants permission to unauthorize an Active Directory from your Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public unauthorizeDirectory() {
    this.add('chime:UnauthorizeDirectory');
    return this;
  }

  /**
   * Grants permission to untag the specified tags from the specified Amazon Chime SDK attendee.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagAttendee.html
   */
  public untagAttendee() {
    this.add('chime:UntagAttendee');
    return this;
  }

  /**
   * Grants permission to untag the specified tags from the specified Amazon Chime SDK meeting.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagMeeting.html
   */
  public untagMeeting() {
    this.add('chime:UntagMeeting');
    return this;
  }

  /**
   * Grants permission to untag the specified tags from the specified Amazon Chime SDK meeting resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('chime:UntagResource');
    return this;
  }

  /**
   * Grants permission to update account details for the specified Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateAccount.html
   */
  public updateAccount() {
    this.add('chime:UpdateAccount');
    return this;
  }

  /**
   * Grants permission to update the OpenIdConfig attributes for your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  public updateAccountOpenIdConfig() {
    this.add('chime:UpdateAccountOpenIdConfig');
    return this;
  }

  /**
   * Grants permission to update the account resource in your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public updateAccountResource() {
    this.add('chime:UpdateAccountResource');
    return this;
  }

  /**
   * Grants permission to update the settings for the specified Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateAccountSettings.html
   */
  public updateAccountSettings() {
    this.add('chime:UpdateAccountSettings');
    return this;
  }

  /**
   * Grants permission to update the status of the specified bot
   *
   * Access Level: Write
   */
  public updateBot() {
    this.add('chime:UpdateBot');
    return this;
  }

  /**
   * Grants permission to update your Call Detail Record S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public updateCDRSettings() {
    this.add('chime:UpdateCDRSettings');
    return this;
  }

  /**
   * Grants permission to update the global settings related to Amazon Chime for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateGlobalSettings.html
   */
  public updateGlobalSettings() {
    this.add('chime:UpdateGlobalSettings');
    return this;
  }

  /**
   * Grants permission to update phone number details for the specified phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdatePhoneNumber.html
   */
  public updatePhoneNumber() {
    this.add('chime:UpdatePhoneNumber');
    return this;
  }

  /**
   * Grants permission to update phone number settings related to Amazon Chime for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdatePhoneNumberSettings.html
   */
  public updatePhoneNumberSettings() {
    this.add('chime:UpdatePhoneNumberSettings');
    return this;
  }

  /**
   * Grants permission to update a proxy session for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateProxySession.html
   */
  public updateProxySession() {
    this.add('chime:UpdateProxySession');
    return this;
  }

  /**
   * Grants permission to update a room
   *
   * Access Level: Write
   */
  public updateRoom() {
    this.add('chime:UpdateRoom');
    return this;
  }

  /**
   * Grants permission to update room membership role
   *
   * Access Level: Write
   */
  public updateRoomMembership() {
    this.add('chime:UpdateRoomMembership');
    return this;
  }

  /**
   * Grants permission to update the supported license tiers available for users in your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  public updateSupportedLicenses() {
    this.add('chime:UpdateSupportedLicenses');
    return this;
  }

  /**
   * Grants permission to update user details for a specified user ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateUser.html
   */
  public updateUser() {
    this.add('chime:UpdateUser');
    return this;
  }

  /**
   * Grants permission to update the licenses for your Amazon Chime users
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  public updateUserLicenses() {
    this.add('chime:UpdateUserLicenses');
    return this;
  }

  /**
   * Grants permission to update user settings related to the specified Amazon Chime user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateUserSettings.html
   */
  public updateUserSettings() {
    this.add('chime:UpdateUserSettings');
    return this;
  }

  /**
   * Grants permission to update Amazon Chime Voice Connector details for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateVoiceConnector.html
   */
  public updateVoiceConnector() {
    this.add('chime:UpdateVoiceConnector');
    return this;
  }

  /**
   * Grants permission to update Amazon Chime Voice Connector Group details for the specified Amazon Chime Voice Connector Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateVoiceConnectorGroup.html
   */
  public updateVoiceConnectorGroup() {
    this.add('chime:UpdateVoiceConnectorGroup');
    return this;
  }

  /**
   * Grants permission to validate the account resource in your Amazon Chime account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public validateAccountResource() {
    this.add('chime:ValidateAccountResource');
    return this;
  }

  /**
   * Adds a resource of type meeting to the statement
   *
   * @param meetingId - Identifier for the meetingId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onMeeting(meetingId: string, accountId?: string, partition?: string) {
    var arn = 'arn:${Partition}:chime::${AccountId}:meeting/${MeetingId}';
    arn = arn.replace('${MeetingId}', meetingId);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
