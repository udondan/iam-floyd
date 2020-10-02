import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [chime](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonchime.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Chime extends PolicyStatement {
  public servicePrefix = 'chime';

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
    this.to('chime:AcceptDelegate');
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
    this.to('chime:ActivateUsers');
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
    this.to('chime:AddDomain');
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
    this.to('chime:AddOrUpdateGroups');
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
    this.to('chime:AssociatePhoneNumberWithUser');
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
    this.to('chime:AssociatePhoneNumbersWithVoiceConnector');
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
    this.to('chime:AssociatePhoneNumbersWithVoiceConnectorGroup');
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
    this.to('chime:AssociateSigninDelegateGroupsWithAccount');
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
    this.to('chime:AuthorizeDirectory');
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
    this.to('chime:BatchCreateAttendee');
    return this;
  }

  /**
   * Grants permission to batch add room members
   *
   * Access Level: Write
   */
  public toBatchCreateRoomMembership() {
    this.to('chime:BatchCreateRoomMembership');
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
    this.to('chime:BatchDeletePhoneNumber');
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
    this.to('chime:BatchSuspendUser');
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
    this.to('chime:BatchUnsuspendUser');
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
    this.to('chime:BatchUpdatePhoneNumber');
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
    this.to('chime:BatchUpdateUser');
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
    this.to('chime:ConnectDirectory');
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
    this.to('chime:CreateAccount');
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
    this.to('chime:CreateApiKey');
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
    this.to('chime:CreateAttendee');
    return this;
  }

  /**
   * Grants permission to create a bot for an Amazon Chime Enterprise account
   *
   * Access Level: Write
   */
  public toCreateBot() {
    this.to('chime:CreateBot');
    return this;
  }

  /**
   * Grants permission to add a bot to a chat room in your Amazon Chime Enterprise account
   *
   * Access Level: Write
   */
  public toCreateBotMembership() {
    this.to('chime:CreateBotMembership');
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
    this.to('chime:CreateCDRBucket');
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
    this.to('chime:CreateMeeting');
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
    this.to('chime:CreateMeetingWithAttendees');
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
    this.to('chime:CreatePhoneNumberOrder');
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
    this.to('chime:CreateProxySession');
    return this;
  }

  /**
   * Grants permission to create a room
   *
   * Access Level: Write
   */
  public toCreateRoom() {
    this.to('chime:CreateRoom');
    return this;
  }

  /**
   * Grants permission to add a room member
   *
   * Access Level: Write
   */
  public toCreateRoomMembership() {
    this.to('chime:CreateRoomMembership');
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
    this.to('chime:CreateUser');
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
    this.to('chime:CreateVoiceConnector');
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
    this.to('chime:CreateVoiceConnectorGroup');
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
    this.to('chime:DeleteAccount');
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
    this.to('chime:DeleteAccountOpenIdConfig');
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
    this.to('chime:DeleteApiKey');
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
    this.to('chime:DeleteAttendee');
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
    this.to('chime:DeleteCDRBucket');
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
    this.to('chime:DeleteDelegate');
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
    this.to('chime:DeleteDomain');
    return this;
  }

  /**
   * Grants permission to delete an events configuration for a bot to receive outgoing events
   *
   * Access Level: Write
   */
  public toDeleteEventsConfiguration() {
    this.to('chime:DeleteEventsConfiguration');
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
    this.to('chime:DeleteGroups');
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
    this.to('chime:DeleteMeeting');
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
    this.to('chime:DeletePhoneNumber');
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
    this.to('chime:DeleteProxySession');
    return this;
  }

  /**
   * Grants permission to delete a room
   *
   * Access Level: Write
   */
  public toDeleteRoom() {
    this.to('chime:DeleteRoom');
    return this;
  }

  /**
   * Grants permission to remove a room member
   *
   * Access Level: Write
   */
  public toDeleteRoomMembership() {
    this.to('chime:DeleteRoomMembership');
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
    this.to('chime:DeleteVoiceConnector');
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
    this.to('chime:DeleteVoiceConnectorEmergencyCallingConfiguration');
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
    this.to('chime:DeleteVoiceConnectorGroup');
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
    this.to('chime:DeleteVoiceConnectorOrigination');
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
    this.to('chime:DeleteVoiceConnectorProxy');
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
    this.to('chime:DeleteVoiceConnectorStreamingConfiguration');
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
    this.to('chime:DeleteVoiceConnectorTermination');
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
    this.to('chime:DeleteVoiceConnectorTerminationCredentials');
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
    this.to('chime:DisassociatePhoneNumberFromUser');
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
    this.to('chime:DisassociatePhoneNumbersFromVoiceConnector');
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
    this.to('chime:DisassociatePhoneNumbersFromVoiceConnectorGroup');
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
    this.to('chime:DisassociateSigninDelegateGroupsFromAccount');
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
    this.to('chime:DisconnectDirectory');
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
    this.to('chime:GetAccount');
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
    this.to('chime:GetAccountResource');
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
    this.to('chime:GetAccountSettings');
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
    this.to('chime:GetAccountWithOpenIdConfig');
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
    this.to('chime:GetAttendee');
    return this;
  }

  /**
   * Grants permission to retrieve details for the specified bot
   *
   * Access Level: Read
   */
  public toGetBot() {
    this.to('chime:GetBot');
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
    this.to('chime:GetCDRBucket');
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
    this.to('chime:GetDomain');
    return this;
  }

  /**
   * Grants permission to retrieve details for an events configuration for a bot to receive outgoing events
   *
   * Access Level: Read
   */
  public toGetEventsConfiguration() {
    this.to('chime:GetEventsConfiguration');
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
    this.to('chime:GetGlobalSettings');
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
    this.to('chime:GetMeeting');
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
    this.to('chime:GetMeetingDetail');
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
    this.to('chime:GetPhoneNumber');
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
    this.to('chime:GetPhoneNumberOrder');
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
    this.to('chime:GetPhoneNumberSettings');
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
    this.to('chime:GetProxySession');
    return this;
  }

  /**
   * Gets the retention settings for the specified Amazon Chime account.
   *
   * Access Level: Read
   */
  public toGetRetentionSettings() {
    this.to('chime:GetRetentionSettings');
    return this;
  }

  /**
   * Grants permission to retrieve a room
   *
   * Access Level: Read
   */
  public toGetRoom() {
    this.to('chime:GetRoom');
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
    this.to('chime:GetTelephonyLimits');
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
    this.to('chime:GetUser');
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
    this.to('chime:GetUserActivityReportData');
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
    this.to('chime:GetUserByEmail');
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
    this.to('chime:GetUserSettings');
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
    this.to('chime:GetVoiceConnector');
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
    this.to('chime:GetVoiceConnectorEmergencyCallingConfiguration');
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
    this.to('chime:GetVoiceConnectorGroup');
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
    this.to('chime:GetVoiceConnectorLoggingConfiguration');
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
    this.to('chime:GetVoiceConnectorOrigination');
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
    this.to('chime:GetVoiceConnectorProxy');
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
    this.to('chime:GetVoiceConnectorStreamingConfiguration');
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
    this.to('chime:GetVoiceConnectorTermination');
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
    this.to('chime:GetVoiceConnectorTerminationHealth');
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
    this.to('chime:InviteDelegate');
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
    this.to('chime:InviteUsers');
    return this;
  }

  /**
   * Grants permission to invite users from a third party provider to your Amazon Chime account
   *
   * Access Level: Write
   */
  public toInviteUsersFromProvider() {
    this.to('chime:InviteUsersFromProvider');
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
    this.to('chime:ListAccountUsageReportData');
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
    this.to('chime:ListAccounts');
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
    this.to('chime:ListApiKeys');
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
    this.to('chime:ListAttendeeTags');
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
    this.to('chime:ListAttendees');
    return this;
  }

  /**
   * Grants permission to list the bots associated with the administrator's Amazon Chime Enterprise account
   *
   * Access Level: List
   */
  public toListBots() {
    this.to('chime:ListBots');
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
    this.to('chime:ListCDRBucket');
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
    this.to('chime:ListCallingRegions');
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
    this.to('chime:ListDelegates');
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
    this.to('chime:ListDirectories');
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
    this.to('chime:ListDomains');
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
    this.to('chime:ListGroups');
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
    this.to('chime:ListMeetingEvents');
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
    this.to('chime:ListMeetingTags');
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
    this.to('chime:ListMeetings');
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
    this.to('chime:ListMeetingsReportData');
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
    this.to('chime:ListPhoneNumberOrders');
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
    this.to('chime:ListPhoneNumbers');
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
    this.to('chime:ListProxySessions');
    return this;
  }

  /**
   * Grants permission to list all room members
   *
   * Access Level: Read
   */
  public toListRoomMemberships() {
    this.to('chime:ListRoomMemberships');
    return this;
  }

  /**
   * Grants permission to list rooms
   *
   * Access Level: Read
   */
  public toListRooms() {
    this.to('chime:ListRooms');
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
    this.to('chime:ListTagsForResource');
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
    this.to('chime:ListUsers');
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
    this.to('chime:ListVoiceConnectorGroups');
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
    this.to('chime:ListVoiceConnectorTerminationCredentials');
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
    this.to('chime:ListVoiceConnectors');
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
    this.to('chime:LogoutUser');
    return this;
  }

  /**
   * Grants permission to update details for an events configuration for a bot to receive outgoing events
   *
   * Access Level: Write
   */
  public toPutEventsConfiguration() {
    this.to('chime:PutEventsConfiguration');
    return this;
  }

  /**
   * Puts retention settings for the specified Amazon Chime account
   *
   * Access Level: Write
   */
  public toPutRetentionSettings() {
    this.to('chime:PutRetentionSettings');
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
    this.to('chime:PutVoiceConnectorEmergencyCallingConfiguration');
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
    this.to('chime:PutVoiceConnectorLoggingConfiguration');
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
    this.to('chime:PutVoiceConnectorOrigination');
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
    this.to('chime:PutVoiceConnectorProxy');
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
    this.to('chime:PutVoiceConnectorStreamingConfiguration');
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
    this.to('chime:PutVoiceConnectorTermination');
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
    this.to('chime:PutVoiceConnectorTerminationCredentials');
    return this;
  }

  /**
   * Redacts the specified Chime conversation Message
   *
   * Access Level: Write
   */
  public toRedactConversationMessage() {
    this.to('chime:RedactConversationMessage');
    return this;
  }

  /**
   * Redacts the specified Chime room Message
   *
   * Access Level: Write
   */
  public toRedactRoomMessage() {
    this.to('chime:RedactRoomMessage');
    return this;
  }

  /**
   * Grants permission to regenerate the security token for the specified bot
   *
   * Access Level: Write
   */
  public toRegenerateSecurityToken() {
    this.to('chime:RegenerateSecurityToken');
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
    this.to('chime:RenameAccount');
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
    this.to('chime:RenewDelegate');
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
    this.to('chime:ResetAccountResource');
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
    this.to('chime:ResetPersonalPIN');
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
    this.to('chime:RestorePhoneNumber');
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
    this.to('chime:RetrieveDataExports');
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
    this.to('chime:SearchAvailablePhoneNumbers');
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
    this.to('chime:StartDataExport');
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
    this.to('chime:SubmitSupportRequest');
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
    this.to('chime:SuspendUsers');
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
    this.to('chime:TagAttendee');
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
    this.to('chime:TagMeeting');
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
    this.to('chime:TagResource');
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
    this.to('chime:UnauthorizeDirectory');
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
    this.to('chime:UntagAttendee');
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
    this.to('chime:UntagMeeting');
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
    this.to('chime:UntagResource');
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
    this.to('chime:UpdateAccount');
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
    this.to('chime:UpdateAccountOpenIdConfig');
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
    this.to('chime:UpdateAccountResource');
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
    this.to('chime:UpdateAccountSettings');
    return this;
  }

  /**
   * Grants permission to update the status of the specified bot
   *
   * Access Level: Write
   */
  public toUpdateBot() {
    this.to('chime:UpdateBot');
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
    this.to('chime:UpdateCDRSettings');
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
    this.to('chime:UpdateGlobalSettings');
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
    this.to('chime:UpdatePhoneNumber');
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
    this.to('chime:UpdatePhoneNumberSettings');
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
    this.to('chime:UpdateProxySession');
    return this;
  }

  /**
   * Grants permission to update a room
   *
   * Access Level: Write
   */
  public toUpdateRoom() {
    this.to('chime:UpdateRoom');
    return this;
  }

  /**
   * Grants permission to update room membership role
   *
   * Access Level: Write
   */
  public toUpdateRoomMembership() {
    this.to('chime:UpdateRoomMembership');
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
    this.to('chime:UpdateSupportedLicenses');
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
    this.to('chime:UpdateUser');
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
    this.to('chime:UpdateUserLicenses');
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
    this.to('chime:UpdateUserSettings');
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
    this.to('chime:UpdateVoiceConnector');
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
    this.to('chime:UpdateVoiceConnectorGroup');
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
    this.to('chime:ValidateAccountResource');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptDelegate",
      "ActivateUsers",
      "AddDomain",
      "AddOrUpdateGroups",
      "AssociatePhoneNumberWithUser",
      "AssociatePhoneNumbersWithVoiceConnector",
      "AssociatePhoneNumbersWithVoiceConnectorGroup",
      "AssociateSigninDelegateGroupsWithAccount",
      "AuthorizeDirectory",
      "BatchCreateAttendee",
      "BatchCreateRoomMembership",
      "BatchDeletePhoneNumber",
      "BatchSuspendUser",
      "BatchUnsuspendUser",
      "BatchUpdatePhoneNumber",
      "BatchUpdateUser",
      "ConnectDirectory",
      "CreateAccount",
      "CreateApiKey",
      "CreateAttendee",
      "CreateBot",
      "CreateBotMembership",
      "CreateCDRBucket",
      "CreateMeeting",
      "CreateMeetingWithAttendees",
      "CreatePhoneNumberOrder",
      "CreateProxySession",
      "CreateRoom",
      "CreateRoomMembership",
      "CreateUser",
      "CreateVoiceConnector",
      "CreateVoiceConnectorGroup",
      "DeleteAccount",
      "DeleteAccountOpenIdConfig",
      "DeleteApiKey",
      "DeleteAttendee",
      "DeleteCDRBucket",
      "DeleteDelegate",
      "DeleteDomain",
      "DeleteEventsConfiguration",
      "DeleteGroups",
      "DeleteMeeting",
      "DeletePhoneNumber",
      "DeleteProxySession",
      "DeleteRoom",
      "DeleteRoomMembership",
      "DeleteVoiceConnector",
      "DeleteVoiceConnectorEmergencyCallingConfiguration",
      "DeleteVoiceConnectorGroup",
      "DeleteVoiceConnectorOrigination",
      "DeleteVoiceConnectorProxy",
      "DeleteVoiceConnectorStreamingConfiguration",
      "DeleteVoiceConnectorTermination",
      "DeleteVoiceConnectorTerminationCredentials",
      "DisassociatePhoneNumberFromUser",
      "DisassociatePhoneNumbersFromVoiceConnector",
      "DisassociatePhoneNumbersFromVoiceConnectorGroup",
      "DisassociateSigninDelegateGroupsFromAccount",
      "DisconnectDirectory",
      "InviteDelegate",
      "InviteUsers",
      "InviteUsersFromProvider",
      "LogoutUser",
      "PutEventsConfiguration",
      "PutRetentionSettings",
      "PutVoiceConnectorEmergencyCallingConfiguration",
      "PutVoiceConnectorLoggingConfiguration",
      "PutVoiceConnectorOrigination",
      "PutVoiceConnectorProxy",
      "PutVoiceConnectorStreamingConfiguration",
      "PutVoiceConnectorTermination",
      "PutVoiceConnectorTerminationCredentials",
      "RedactConversationMessage",
      "RedactRoomMessage",
      "RegenerateSecurityToken",
      "RenameAccount",
      "RenewDelegate",
      "ResetAccountResource",
      "ResetPersonalPIN",
      "RestorePhoneNumber",
      "StartDataExport",
      "SubmitSupportRequest",
      "SuspendUsers",
      "UnauthorizeDirectory",
      "UpdateAccount",
      "UpdateAccountOpenIdConfig",
      "UpdateAccountResource",
      "UpdateAccountSettings",
      "UpdateBot",
      "UpdateCDRSettings",
      "UpdateGlobalSettings",
      "UpdatePhoneNumber",
      "UpdatePhoneNumberSettings",
      "UpdateProxySession",
      "UpdateRoom",
      "UpdateRoomMembership",
      "UpdateSupportedLicenses",
      "UpdateUser",
      "UpdateUserLicenses",
      "UpdateUserSettings",
      "UpdateVoiceConnector",
      "UpdateVoiceConnectorGroup"
    ],
    "Read": [
      "GetAccount",
      "GetAccountResource",
      "GetAccountSettings",
      "GetAccountWithOpenIdConfig",
      "GetAttendee",
      "GetBot",
      "GetCDRBucket",
      "GetDomain",
      "GetEventsConfiguration",
      "GetGlobalSettings",
      "GetMeeting",
      "GetMeetingDetail",
      "GetPhoneNumber",
      "GetPhoneNumberOrder",
      "GetPhoneNumberSettings",
      "GetProxySession",
      "GetRetentionSettings",
      "GetRoom",
      "GetTelephonyLimits",
      "GetUser",
      "GetUserActivityReportData",
      "GetUserByEmail",
      "GetUserSettings",
      "GetVoiceConnector",
      "GetVoiceConnectorEmergencyCallingConfiguration",
      "GetVoiceConnectorGroup",
      "GetVoiceConnectorLoggingConfiguration",
      "GetVoiceConnectorOrigination",
      "GetVoiceConnectorProxy",
      "GetVoiceConnectorStreamingConfiguration",
      "GetVoiceConnectorTermination",
      "GetVoiceConnectorTerminationHealth",
      "ListAttendeeTags",
      "ListAttendees",
      "ListMeetingTags",
      "ListMeetings",
      "ListRoomMemberships",
      "ListRooms",
      "ListTagsForResource",
      "SearchAvailablePhoneNumbers",
      "ValidateAccountResource"
    ],
    "List": [
      "ListAccountUsageReportData",
      "ListAccounts",
      "ListApiKeys",
      "ListBots",
      "ListCDRBucket",
      "ListCallingRegions",
      "ListDelegates",
      "ListDirectories",
      "ListDomains",
      "ListGroups",
      "ListMeetingEvents",
      "ListMeetingsReportData",
      "ListPhoneNumberOrders",
      "ListPhoneNumbers",
      "ListProxySessions",
      "ListUsers",
      "ListVoiceConnectorGroups",
      "ListVoiceConnectorTerminationCredentials",
      "ListVoiceConnectors",
      "RetrieveDataExports"
    ],
    "Tagging": [
      "TagAttendee",
      "TagMeeting",
      "TagResource",
      "UntagAttendee",
      "UntagMeeting",
      "UntagResource"
    ]
  };

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
}
