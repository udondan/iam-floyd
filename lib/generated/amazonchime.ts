import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [chime](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonchime.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Chime extends PolicyStatement {
  public servicePrefix = 'chime';
  protected actionList: Actions = {
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
      "accessLevel": "Write",
      "dependentActions": [
        "ds:ConnectDirectory"
      ]
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
      "accessLevel": "Write",
      "dependentActions": [
        "s3:CreateBucket",
        "s3:ListAllMyBuckets"
      ]
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
    "CreateMeetingWithAttendees": {
      "url": "https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateMeetingWithAttendees.html",
      "description": "Grants permission to create a new Amazon Chime SDK meeting in the specified media Region, with a set of attendees",
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
      "accessLevel": "Write",
      "dependentActions": [
        "s3:DeleteBucket"
      ]
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
      "accessLevel": "Read",
      "dependentActions": [
        "s3:GetBucketAcl",
        "s3:GetBucketLocation",
        "s3:GetBucketLogging",
        "s3:GetBucketVersioning",
        "s3:GetBucketWebsite"
      ]
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
      "accessLevel": "List",
      "dependentActions": [
        "s3:ListAllMyBuckets",
        "s3:ListBucket"
      ]
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
      "accessLevel": "Write",
      "dependentActions": [
        "logs:CreateLogDelivery",
        "logs:CreateLogGroup",
        "logs:DeleteLogDelivery",
        "logs:DescribeLogGroups",
        "logs:GetLogDelivery",
        "logs:ListLogDeliveries"
      ]
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
      "accessLevel": "Write",
      "dependentActions": [
        "s3:CreateBucket",
        "s3:DeleteBucket",
        "s3:ListAllMyBuckets"
      ]
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
  protected resourceTypes: ResourceTypes = {
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
   * Statement provider for service [chime](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonchime.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept the delegate invitation to share management of an Amazon Chime account with another AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toAcceptDelegate() {
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
  public toActivateUsers() {
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
  public toAddDomain() {
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
  public toAddOrUpdateGroups() {
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
  public toAssociatePhoneNumberWithUser() {
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
  public toAssociatePhoneNumbersWithVoiceConnector() {
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
  public toAssociatePhoneNumbersWithVoiceConnectorGroup() {
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
  public toAssociateSigninDelegateGroupsWithAccount() {
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
  public toAuthorizeDirectory() {
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
  public toBatchCreateAttendee() {
    this.add('chime:BatchCreateAttendee');
    return this;
  }

  /**
   * Grants permission to batch add room members
   *
   * Access Level: Write
   */
  public toBatchCreateRoomMembership() {
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
  public toBatchDeletePhoneNumber() {
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
  public toBatchSuspendUser() {
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
  public toBatchUnsuspendUser() {
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
  public toBatchUpdatePhoneNumber() {
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
  public toBatchUpdateUser() {
    this.add('chime:BatchUpdateUser');
    return this;
  }

  /**
   * Grants permission to connect an Active Directory to your Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:ConnectDirectory
   *
   * https://docs.aws.amazon.com/chime/latest/ag/active_directory.html
   */
  public toConnectDirectory() {
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
  public toCreateAccount() {
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
  public toCreateApiKey() {
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
  public toCreateAttendee() {
    this.add('chime:CreateAttendee');
    return this;
  }

  /**
   * Grants permission to create a bot for an Amazon Chime Enterprise account
   *
   * Access Level: Write
   */
  public toCreateBot() {
    this.add('chime:CreateBot');
    return this;
  }

  /**
   * Grants permission to add a bot to a chat room in your Amazon Chime Enterprise account
   *
   * Access Level: Write
   */
  public toCreateBotMembership() {
    this.add('chime:CreateBotMembership');
    return this;
  }

  /**
   * Grants permission to create a new Call Detail Record S3 bucket
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:CreateBucket
   * - s3:ListAllMyBuckets
   *
   * https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  public toCreateCDRBucket() {
    this.add('chime:CreateCDRBucket');
    return this;
  }

  /**
   * Grants permission to create a new Amazon Chime SDK meeting in the specified media Region, with no initial attendees
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateMeeting.html
   */
  public toCreateMeeting() {
    this.add('chime:CreateMeeting');
    return this;
  }

  /**
   * Grants permission to create a new Amazon Chime SDK meeting in the specified media Region, with a set of attendees
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateMeetingWithAttendees.html
   */
  public toCreateMeetingWithAttendees() {
    this.add('chime:CreateMeetingWithAttendees');
    return this;
  }

  /**
   * Grants permission to create a phone number order with the Carriers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreatePhoneNumberOrder.html
   */
  public toCreatePhoneNumberOrder() {
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
  public toCreateProxySession() {
    this.add('chime:CreateProxySession');
    return this;
  }

  /**
   * Grants permission to create a room
   *
   * Access Level: Write
   */
  public toCreateRoom() {
    this.add('chime:CreateRoom');
    return this;
  }

  /**
   * Grants permission to add a room member
   *
   * Access Level: Write
   */
  public toCreateRoomMembership() {
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
  public toCreateUser() {
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
  public toCreateVoiceConnector() {
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
  public toCreateVoiceConnectorGroup() {
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
  public toDeleteAccount() {
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
  public toDeleteAccountOpenIdConfig() {
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
  public toDeleteApiKey() {
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
  public toDeleteAttendee() {
    this.add('chime:DeleteAttendee');
    return this;
  }

  /**
   * Grants permission to delete a Call Detail Record S3 bucket from your Amazon Chime account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:DeleteBucket
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toDeleteCDRBucket() {
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
  public toDeleteDelegate() {
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
  public toDeleteDomain() {
    this.add('chime:DeleteDomain');
    return this;
  }

  /**
   * Grants permission to delete an events configuration for a bot to receive outgoing events
   *
   * Access Level: Write
   */
  public toDeleteEventsConfiguration() {
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
  public toDeleteGroups() {
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
  public toDeleteMeeting() {
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
  public toDeletePhoneNumber() {
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
  public toDeleteProxySession() {
    this.add('chime:DeleteProxySession');
    return this;
  }

  /**
   * Grants permission to delete a room
   *
   * Access Level: Write
   */
  public toDeleteRoom() {
    this.add('chime:DeleteRoom');
    return this;
  }

  /**
   * Grants permission to remove a room member
   *
   * Access Level: Write
   */
  public toDeleteRoomMembership() {
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
  public toDeleteVoiceConnector() {
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
  public toDeleteVoiceConnectorEmergencyCallingConfiguration() {
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
  public toDeleteVoiceConnectorGroup() {
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
  public toDeleteVoiceConnectorOrigination() {
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
  public toDeleteVoiceConnectorProxy() {
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
  public toDeleteVoiceConnectorStreamingConfiguration() {
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
  public toDeleteVoiceConnectorTermination() {
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
  public toDeleteVoiceConnectorTerminationCredentials() {
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
  public toDisassociatePhoneNumberFromUser() {
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
  public toDisassociatePhoneNumbersFromVoiceConnector() {
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
  public toDisassociatePhoneNumbersFromVoiceConnectorGroup() {
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
  public toDisassociateSigninDelegateGroupsFromAccount() {
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
  public toDisconnectDirectory() {
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
  public toGetAccount() {
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
  public toGetAccountResource() {
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
  public toGetAccountSettings() {
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
  public toGetAccountWithOpenIdConfig() {
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
  public toGetAttendee() {
    this.add('chime:GetAttendee');
    return this;
  }

  /**
   * Grants permission to retrieve details for the specified bot
   *
   * Access Level: Read
   */
  public toGetBot() {
    this.add('chime:GetBot');
    return this;
  }

  /**
   * Grants permission to get details of a Call Detail Record S3 bucket associated with your Amazon Chime account
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - s3:GetBucketAcl
   * - s3:GetBucketLocation
   * - s3:GetBucketLogging
   * - s3:GetBucketVersioning
   * - s3:GetBucketWebsite
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toGetCDRBucket() {
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
  public toGetDomain() {
    this.add('chime:GetDomain');
    return this;
  }

  /**
   * Grants permission to retrieve details for an events configuration for a bot to receive outgoing events
   *
   * Access Level: Read
   */
  public toGetEventsConfiguration() {
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
  public toGetGlobalSettings() {
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
  public toGetMeeting() {
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
  public toGetMeetingDetail() {
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
  public toGetPhoneNumber() {
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
  public toGetPhoneNumberOrder() {
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
  public toGetPhoneNumberSettings() {
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
  public toGetProxySession() {
    this.add('chime:GetProxySession');
    return this;
  }

  /**
   * Gets the retention settings for the specified Amazon Chime account.
   *
   * Access Level: Read
   */
  public toGetRetentionSettings() {
    this.add('chime:GetRetentionSettings');
    return this;
  }

  /**
   * Grants permission to retrieve a room
   *
   * Access Level: Read
   */
  public toGetRoom() {
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
  public toGetTelephonyLimits() {
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
  public toGetUser() {
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
  public toGetUserActivityReportData() {
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
  public toGetUserByEmail() {
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
  public toGetUserSettings() {
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
  public toGetVoiceConnector() {
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
  public toGetVoiceConnectorEmergencyCallingConfiguration() {
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
  public toGetVoiceConnectorGroup() {
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
  public toGetVoiceConnectorLoggingConfiguration() {
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
  public toGetVoiceConnectorOrigination() {
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
  public toGetVoiceConnectorProxy() {
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
  public toGetVoiceConnectorStreamingConfiguration() {
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
  public toGetVoiceConnectorTermination() {
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
  public toGetVoiceConnectorTerminationHealth() {
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
  public toInviteDelegate() {
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
  public toInviteUsers() {
    this.add('chime:InviteUsers');
    return this;
  }

  /**
   * Grants permission to invite users from a third party provider to your Amazon Chime account
   *
   * Access Level: Write
   */
  public toInviteUsersFromProvider() {
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
  public toListAccountUsageReportData() {
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
  public toListAccounts() {
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
  public toListApiKeys() {
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
  public toListAttendeeTags() {
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
  public toListAttendees() {
    this.add('chime:ListAttendees');
    return this;
  }

  /**
   * Grants permission to list the bots associated with the administrator's Amazon Chime Enterprise account
   *
   * Access Level: List
   */
  public toListBots() {
    this.add('chime:ListBots');
    return this;
  }

  /**
   * Grants permission to list Call Detail Record S3 buckets
   *
   * Access Level: List
   *
   * Dependent actions:
   * - s3:ListAllMyBuckets
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toListCDRBucket() {
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
  public toListCallingRegions() {
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
  public toListDelegates() {
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
  public toListDirectories() {
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
  public toListDomains() {
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
  public toListGroups() {
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
  public toListMeetingEvents() {
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
  public toListMeetingTags() {
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
  public toListMeetings() {
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
  public toListMeetingsReportData() {
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
  public toListPhoneNumberOrders() {
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
  public toListPhoneNumbers() {
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
  public toListProxySessions() {
    this.add('chime:ListProxySessions');
    return this;
  }

  /**
   * Grants permission to list all room members
   *
   * Access Level: Read
   */
  public toListRoomMemberships() {
    this.add('chime:ListRoomMemberships');
    return this;
  }

  /**
   * Grants permission to list rooms
   *
   * Access Level: Read
   */
  public toListRooms() {
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
  public toListTagsForResource() {
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
  public toListUsers() {
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
  public toListVoiceConnectorGroups() {
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
  public toListVoiceConnectorTerminationCredentials() {
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
  public toListVoiceConnectors() {
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
  public toLogoutUser() {
    this.add('chime:LogoutUser');
    return this;
  }

  /**
   * Grants permission to update details for an events configuration for a bot to receive outgoing events
   *
   * Access Level: Write
   */
  public toPutEventsConfiguration() {
    this.add('chime:PutEventsConfiguration');
    return this;
  }

  /**
   * Puts retention settings for the specified Amazon Chime account
   *
   * Access Level: Write
   */
  public toPutRetentionSettings() {
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
  public toPutVoiceConnectorEmergencyCallingConfiguration() {
    this.add('chime:PutVoiceConnectorEmergencyCallingConfiguration');
    return this;
  }

  /**
   * Grants permission to add logging configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - logs:CreateLogDelivery
   * - logs:CreateLogGroup
   * - logs:DeleteLogDelivery
   * - logs:DescribeLogGroups
   * - logs:GetLogDelivery
   * - logs:ListLogDeliveries
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorLoggingConfiguration.html
   */
  public toPutVoiceConnectorLoggingConfiguration() {
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
  public toPutVoiceConnectorOrigination() {
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
  public toPutVoiceConnectorProxy() {
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
  public toPutVoiceConnectorStreamingConfiguration() {
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
  public toPutVoiceConnectorTermination() {
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
  public toPutVoiceConnectorTerminationCredentials() {
    this.add('chime:PutVoiceConnectorTerminationCredentials');
    return this;
  }

  /**
   * Redacts the specified Chime conversation Message
   *
   * Access Level: Write
   */
  public toRedactConversationMessage() {
    this.add('chime:RedactConversationMessage');
    return this;
  }

  /**
   * Redacts the specified Chime room Message
   *
   * Access Level: Write
   */
  public toRedactRoomMessage() {
    this.add('chime:RedactRoomMessage');
    return this;
  }

  /**
   * Grants permission to regenerate the security token for the specified bot
   *
   * Access Level: Write
   */
  public toRegenerateSecurityToken() {
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
  public toRenameAccount() {
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
  public toRenewDelegate() {
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
  public toResetAccountResource() {
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
  public toResetPersonalPIN() {
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
  public toRestorePhoneNumber() {
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
  public toRetrieveDataExports() {
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
  public toSearchAvailablePhoneNumbers() {
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
  public toStartDataExport() {
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
  public toSubmitSupportRequest() {
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
  public toSuspendUsers() {
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
  public toTagAttendee() {
    this.add('chime:TagAttendee');
    return this;
  }

  /**
   * Grants permission to apply the specified tags to the specified Amazon Chime SDK meeting.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_TagMeeting.html
   */
  public toTagMeeting() {
    this.add('chime:TagMeeting');
    return this;
  }

  /**
   * Grants permission to apply the specified tags to the specified Amazon Chime SDK meeting resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
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
  public toUnauthorizeDirectory() {
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
  public toUntagAttendee() {
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
  public toUntagMeeting() {
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
  public toUntagResource() {
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
  public toUpdateAccount() {
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
  public toUpdateAccountOpenIdConfig() {
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
  public toUpdateAccountResource() {
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
  public toUpdateAccountSettings() {
    this.add('chime:UpdateAccountSettings');
    return this;
  }

  /**
   * Grants permission to update the status of the specified bot
   *
   * Access Level: Write
   */
  public toUpdateBot() {
    this.add('chime:UpdateBot');
    return this;
  }

  /**
   * Grants permission to update your Call Detail Record S3 bucket
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:CreateBucket
   * - s3:DeleteBucket
   * - s3:ListAllMyBuckets
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toUpdateCDRSettings() {
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
  public toUpdateGlobalSettings() {
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
  public toUpdatePhoneNumber() {
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
  public toUpdatePhoneNumberSettings() {
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
  public toUpdateProxySession() {
    this.add('chime:UpdateProxySession');
    return this;
  }

  /**
   * Grants permission to update a room
   *
   * Access Level: Write
   */
  public toUpdateRoom() {
    this.add('chime:UpdateRoom');
    return this;
  }

  /**
   * Grants permission to update room membership role
   *
   * Access Level: Write
   */
  public toUpdateRoomMembership() {
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
  public toUpdateSupportedLicenses() {
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
  public toUpdateUser() {
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
  public toUpdateUserLicenses() {
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
  public toUpdateUserSettings() {
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
  public toUpdateVoiceConnector() {
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
  public toUpdateVoiceConnectorGroup() {
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
  public toValidateAccountResource() {
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMeeting(meetingId: string, accountId?: string, partition?: string) {
    var arn = 'arn:${Partition}:chime::${AccountId}:meeting/${MeetingId}';
    arn = arn.replace('${MeetingId}', meetingId);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateMeeting()
   * - .toCreateMeetingWithAttendees()
   * - .toTagMeeting()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toTagMeeting()
   * - .toTagResource()
   *
   * Applies to resource types:
   * - meeting
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateMeeting()
   * - .toCreateMeetingWithAttendees()
   * - .toTagMeeting()
   * - .toTagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
