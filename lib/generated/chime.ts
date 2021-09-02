import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [chime](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonchime.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Chime extends PolicyStatement {
  public servicePrefix = 'chime';

  /**
   * Statement provider for service [chime](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonchime.html).
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
    return this.to('AcceptDelegate');
  }

  /**
   * Grants permission to activate users in an Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  public toActivateUsers() {
    return this.to('ActivateUsers');
  }

  /**
   * Grants permission to add a domain to your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html
   */
  public toAddDomain() {
    return this.to('AddDomain');
  }

  /**
   * Grants permission to add new or update existing Active Directory or Okta user groups associated with your Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html
   */
  public toAddOrUpdateGroups() {
    return this.to('AddOrUpdateGroups');
  }

  /**
   * Grants permission to associate a phone number with an Amazon Chime user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumberWithUser.html
   */
  public toAssociatePhoneNumberWithUser() {
    return this.to('AssociatePhoneNumberWithUser');
  }

  /**
   * Grants permission to associate multiple phone numbers with an Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumbersWithVoiceConnector.html
   */
  public toAssociatePhoneNumbersWithVoiceConnector() {
    return this.to('AssociatePhoneNumbersWithVoiceConnector');
  }

  /**
   * Grants permission to associate multiple phone numbers with an Amazon Chime Voice Connector Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumbersWithVoiceConnectorGroup.html
   */
  public toAssociatePhoneNumbersWithVoiceConnectorGroup() {
    return this.to('AssociatePhoneNumbersWithVoiceConnectorGroup');
  }

  /**
   * Grants permission to associate the specified sign-in delegate groups with the specified Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociateSigninDelegateGroupsWithAccount.html
   */
  public toAssociateSigninDelegateGroupsWithAccount() {
    return this.to('AssociateSigninDelegateGroupsWithAccount');
  }

  /**
   * Grants permission to authorize an Active Directory for your Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toAuthorizeDirectory() {
    return this.to('AuthorizeDirectory');
  }

  /**
   * Grants permission to create new attendees for an active Amazon Chime SDK meeting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchCreateAttendee.html
   */
  public toBatchCreateAttendee() {
    return this.to('BatchCreateAttendee');
  }

  /**
   * Grants permission to add multiple users to a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchCreateChannelMembership.html
   */
  public toBatchCreateChannelMembership() {
    return this.to('BatchCreateChannelMembership');
  }

  /**
   * Grants permission to batch add room members
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchCreateRoomMembership.html
   */
  public toBatchCreateRoomMembership() {
    return this.to('BatchCreateRoomMembership');
  }

  /**
   * Grants permission to move up to 50 phone numbers to the deletion queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchDeletePhoneNumber.html
   */
  public toBatchDeletePhoneNumber() {
    return this.to('BatchDeletePhoneNumber');
  }

  /**
   * Grants permission to suspend up to 50 users from a Team or EnterpriseLWA Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchSuspendUser.html
   */
  public toBatchSuspendUser() {
    return this.to('BatchSuspendUser');
  }

  /**
   * Grants permission to remove the suspension from up to 50 previously suspended users for the specified Amazon Chime EnterpriseLWA account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUnsuspendUser.html
   */
  public toBatchUnsuspendUser() {
    return this.to('BatchUnsuspendUser');
  }

  /**
   * Grants permission to update phone number details within the UpdatePhoneNumberRequestItem object for up to 50 phone numbers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUpdatePhoneNumber.html
   */
  public toBatchUpdatePhoneNumber() {
    return this.to('BatchUpdatePhoneNumber');
  }

  /**
   * Grants permission to update user details within the UpdateUserRequestItem object for up to 20 users for the specified Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUpdateUser.html
   */
  public toBatchUpdateUser() {
    return this.to('BatchUpdateUser');
  }

  /**
   * Grants permission to establish a web socket connection for app instance user to the messaging session endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_Connect.html
   */
  public toConnect() {
    return this.to('Connect');
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
    return this.to('ConnectDirectory');
  }

  /**
   * Grants permission to create an Amazon Chime account under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAccount.html
   */
  public toCreateAccount() {
    return this.to('CreateAccount');
  }

  /**
   * Grants permission to create a new SCIM access key for your Amazon Chime account and Okta configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  public toCreateApiKey() {
    return this.to('CreateApiKey');
  }

  /**
   * Grants permission to create an app instance under the AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAppInstance.html
   */
  public toCreateAppInstance() {
    return this.to('CreateAppInstance');
  }

  /**
   * Grants permission to promote an AppInstanceUser to an AppInstanceAdmin
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAppInstanceAdmin.html
   */
  public toCreateAppInstanceAdmin() {
    return this.to('CreateAppInstanceAdmin');
  }

  /**
   * Grants permission to create a user under an Amazon Chime AppInstance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAppInstanceUser.html
   */
  public toCreateAppInstanceUser() {
    return this.to('CreateAppInstanceUser');
  }

  /**
   * Grants permission to create a new attendee for an active Amazon Chime SDK meeting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html
   */
  public toCreateAttendee() {
    return this.to('CreateAttendee');
  }

  /**
   * Grants permission to create a bot for an Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateBot.html
   */
  public toCreateBot() {
    return this.to('CreateBot');
  }

  /**
   * Grants permission to add a bot to a chat room in your Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateBotMembership.html
   */
  public toCreateBotMembership() {
    return this.to('CreateBotMembership');
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
    return this.to('CreateCDRBucket');
  }

  /**
   * Grants permission to create a channel for an app instance under the AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateChannel.html
   */
  public toCreateChannel() {
    return this.to('CreateChannel');
  }

  /**
   * Grants permission to ban a user from a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateChannelBan.html
   */
  public toCreateChannelBan() {
    return this.to('CreateChannelBan');
  }

  /**
   * Grants permission to add a user to a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateChannelMembership.html
   */
  public toCreateChannelMembership() {
    return this.to('CreateChannelMembership');
  }

  /**
   * Grants permission to create a channel moderator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateChannelModerator.html
   */
  public toCreateChannelModerator() {
    return this.to('CreateChannelModerator');
  }

  /**
   * Grants permission to create a media capture pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateMediaCapturePipeline.html
   */
  public toCreateMediaCapturePipeline() {
    return this.to('CreateMediaCapturePipeline');
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
    return this.to('CreateMeeting');
  }

  /**
   * Grants permission to call a phone number to join the specified Amazon Chime SDK meeting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateMeetingDialOut.html
   */
  public toCreateMeetingDialOut() {
    return this.to('CreateMeetingDialOut');
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
    return this.to('CreateMeetingWithAttendees');
  }

  /**
   * Grants permission to create a phone number order with the Carriers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreatePhoneNumberOrder.html
   */
  public toCreatePhoneNumberOrder() {
    return this.to('CreatePhoneNumberOrder');
  }

  /**
   * Grants permission to create a proxy session for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateProxySession.html
   */
  public toCreateProxySession() {
    return this.to('CreateProxySession');
  }

  /**
   * Grants permission to create a room
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateRoom.html
   */
  public toCreateRoom() {
    return this.to('CreateRoom');
  }

  /**
   * Grants permission to add a room member
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateRoomMembership.html
   */
  public toCreateRoomMembership() {
    return this.to('CreateRoomMembership');
  }

  /**
   * Grants permission to create an Amazon Chime SIP media application under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateSipMediaApplication.html
   */
  public toCreateSipMediaApplication() {
    return this.to('CreateSipMediaApplication');
  }

  /**
   * Grants permission to create outbound call for Amazon Chime SIP media application under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateSipMediaApplicationCall.html
   */
  public toCreateSipMediaApplicationCall() {
    return this.to('CreateSipMediaApplicationCall');
  }

  /**
   * Grants permission to create an Amazon Chime SIP rule under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateSipRule.html
   */
  public toCreateSipRule() {
    return this.to('CreateSipRule');
  }

  /**
   * Grants permission to create a user under the specified Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to create a Amazon Chime Voice Connector under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateVoiceConnector.html
   */
  public toCreateVoiceConnector() {
    return this.to('CreateVoiceConnector');
  }

  /**
   * Grants permission to create a Amazon Chime Voice Connector Group under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateVoiceConnectorGroup.html
   */
  public toCreateVoiceConnectorGroup() {
    return this.to('CreateVoiceConnectorGroup');
  }

  /**
   * Grants permission to delete the specified Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAccount.html
   */
  public toDeleteAccount() {
    return this.to('DeleteAccount');
  }

  /**
   * Grants permission to delete the OpenIdConfig attributes from your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  public toDeleteAccountOpenIdConfig() {
    return this.to('DeleteAccountOpenIdConfig');
  }

  /**
   * Grants permission to delete the specified SCIM access key associated with your Amazon Chime account and Okta configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  public toDeleteApiKey() {
    return this.to('DeleteApiKey');
  }

  /**
   * Grants permission to delete an AppInstance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAppInstance.html
   */
  public toDeleteAppInstance() {
    return this.to('DeleteAppInstance');
  }

  /**
   * Grants permission to demote an AppInstanceAdmin to an AppInstanceUser
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAppInstanceAdmin.html
   */
  public toDeleteAppInstanceAdmin() {
    return this.to('DeleteAppInstanceAdmin');
  }

  /**
   * Grants permission to disable data streaming for the app instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAppInstanceStreamingConfigurations.html
   */
  public toDeleteAppInstanceStreamingConfigurations() {
    return this.to('DeleteAppInstanceStreamingConfigurations');
  }

  /**
   * Grants permission to delete an AppInstanceUser
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAppInstanceUser.html
   */
  public toDeleteAppInstanceUser() {
    return this.to('DeleteAppInstanceUser');
  }

  /**
   * Grants permission to delete the specified attendee from an Amazon Chime SDK meeting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAttendee.html
   */
  public toDeleteAttendee() {
    return this.to('DeleteAttendee');
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
    return this.to('DeleteCDRBucket');
  }

  /**
   * Grants permission to delete a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteChannel.html
   */
  public toDeleteChannel() {
    return this.to('DeleteChannel');
  }

  /**
   * Grants permission to remove a user from a channel's ban list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteChannelBan.html
   */
  public toDeleteChannelBan() {
    return this.to('DeleteChannelBan');
  }

  /**
   * Grants permission to remove a member from a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteChannelMembership.html
   */
  public toDeleteChannelMembership() {
    return this.to('DeleteChannelMembership');
  }

  /**
   * Grants permission to delete a channel message
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteChannelMessage.html
   */
  public toDeleteChannelMessage() {
    return this.to('DeleteChannelMessage');
  }

  /**
   * Grants permission to delete a channel moderator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteChannelModerator.html
   */
  public toDeleteChannelModerator() {
    return this.to('DeleteChannelModerator');
  }

  /**
   * Grants permission to delete delegated AWS account management from your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toDeleteDelegate() {
    return this.to('DeleteDelegate');
  }

  /**
   * Grants permission to delete a domain from your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to delete an events configuration for a bot to receive outgoing events
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteEventsConfiguration.html
   */
  public toDeleteEventsConfiguration() {
    return this.to('DeleteEventsConfiguration');
  }

  /**
   * Grants permission to delete Active Directory or Okta user groups from your Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toDeleteGroups() {
    return this.to('DeleteGroups');
  }

  /**
   * Grants permission to delete a media capture pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteMediaCapturePipeline.html
   */
  public toDeleteMediaCapturePipeline() {
    return this.to('DeleteMediaCapturePipeline');
  }

  /**
   * Grants permission to delete the specified Amazon Chime SDK meeting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteMeeting.html
   */
  public toDeleteMeeting() {
    return this.to('DeleteMeeting');
  }

  /**
   * Grants permission to move a phone number to the deletion queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeletePhoneNumber.html
   */
  public toDeletePhoneNumber() {
    return this.to('DeletePhoneNumber');
  }

  /**
   * Grants permission to delete a proxy session for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteProxySession.html
   */
  public toDeleteProxySession() {
    return this.to('DeleteProxySession');
  }

  /**
   * Grants permission to delete a room
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteRoom.html
   */
  public toDeleteRoom() {
    return this.to('DeleteRoom');
  }

  /**
   * Grants permission to remove a room member
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteRoomMembership.html
   */
  public toDeleteRoomMembership() {
    return this.to('DeleteRoomMembership');
  }

  /**
   * Grants permission to delete Amazon Chime SIP media application under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteSipMediaApplication.html
   */
  public toDeleteSipMediaApplication() {
    return this.to('DeleteSipMediaApplication');
  }

  /**
   * Grants permission to delete Amazon Chime SIP rule under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteSipRule.html
   */
  public toDeleteSipRule() {
    return this.to('DeleteSipRule');
  }

  /**
   * Grants permission to delete the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnector.html
   */
  public toDeleteVoiceConnector() {
    return this.to('DeleteVoiceConnector');
  }

  /**
   * Grants permission to delete emergency calling configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorEmergencyCallingConfiguration.html
   */
  public toDeleteVoiceConnectorEmergencyCallingConfiguration() {
    return this.to('DeleteVoiceConnectorEmergencyCallingConfiguration');
  }

  /**
   * Grants permission to delete the specified Amazon Chime Voice Connector Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorGroup.html
   */
  public toDeleteVoiceConnectorGroup() {
    return this.to('DeleteVoiceConnectorGroup');
  }

  /**
   * Grants permission to delete the origination settings for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorOrigination.html
   */
  public toDeleteVoiceConnectorOrigination() {
    return this.to('DeleteVoiceConnectorOrigination');
  }

  /**
   * Grants permission to delete proxy configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorProxy.html
   */
  public toDeleteVoiceConnectorProxy() {
    return this.to('DeleteVoiceConnectorProxy');
  }

  /**
   * Grants permission to delete streaming configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorStreamingConfiguration.html
   */
  public toDeleteVoiceConnectorStreamingConfiguration() {
    return this.to('DeleteVoiceConnectorStreamingConfiguration');
  }

  /**
   * Grants permission to delete the termination settings for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorTermination.html
   */
  public toDeleteVoiceConnectorTermination() {
    return this.to('DeleteVoiceConnectorTermination');
  }

  /**
   * Grants permission to delete SIP termination credentials for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorTerminationCredentials.html
   */
  public toDeleteVoiceConnectorTerminationCredentials() {
    return this.to('DeleteVoiceConnectorTerminationCredentials');
  }

  /**
   * Grants permission to get the full details of an AppInstance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DescribeAppInstance.html
   */
  public toDescribeAppInstance() {
    return this.to('DescribeAppInstance');
  }

  /**
   * Grants permission to get the full details of an AppInstanceAdmin
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DescribeAppInstanceAdmin.html
   */
  public toDescribeAppInstanceAdmin() {
    return this.to('DescribeAppInstanceAdmin');
  }

  /**
   * Grants permission to get the full details of an AppInstanceUser
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DescribeAppInstanceUser.html
   */
  public toDescribeAppInstanceUser() {
    return this.to('DescribeAppInstanceUser');
  }

  /**
   * Grants permission to get the full details of a channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DescribeChannel.html
   */
  public toDescribeChannel() {
    return this.to('DescribeChannel');
  }

  /**
   * Grants permission to get the full details of a channel ban
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DescribeChannelBan.html
   */
  public toDescribeChannelBan() {
    return this.to('DescribeChannelBan');
  }

  /**
   * Grants permission to get the full details of a channel membership
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DescribeChannelMembership.html
   */
  public toDescribeChannelMembership() {
    return this.to('DescribeChannelMembership');
  }

  /**
   * Grants permission to get the details of a channel based on the membership of the specified AppInstanceUser
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DescribeChannelMembershipForAppInstanceUser.html
   */
  public toDescribeChannelMembershipForAppInstanceUser() {
    return this.to('DescribeChannelMembershipForAppInstanceUser');
  }

  /**
   * Grants permission to get the full details of a channel moderated by the specified AppInstanceUser
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DescribeChannelModeratedByAppInstanceUser.html
   */
  public toDescribeChannelModeratedByAppInstanceUser() {
    return this.to('DescribeChannelModeratedByAppInstanceUser');
  }

  /**
   * Grants permission to get the full details of a single ChannelModerator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DescribeChannelModerator.html
   */
  public toDescribeChannelModerator() {
    return this.to('DescribeChannelModerator');
  }

  /**
   * Grants permission to disassociate the primary provisioned number from the specified Amazon Chime user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumberFromUser.html
   */
  public toDisassociatePhoneNumberFromUser() {
    return this.to('DisassociatePhoneNumberFromUser');
  }

  /**
   * Grants permission to disassociate multiple phone numbers from the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumbersFromVoiceConnector.html
   */
  public toDisassociatePhoneNumbersFromVoiceConnector() {
    return this.to('DisassociatePhoneNumbersFromVoiceConnector');
  }

  /**
   * Grants permission to disassociate multiple phone numbers from the specified Amazon Chime Voice Connector Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumbersFromVoiceConnectorGroup.html
   */
  public toDisassociatePhoneNumbersFromVoiceConnectorGroup() {
    return this.to('DisassociatePhoneNumbersFromVoiceConnectorGroup');
  }

  /**
   * Grants permission to disassociate the specified sign-in delegate groups from the specified Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociateSigninDelegateGroupsFromAccount.html
   */
  public toDisassociateSigninDelegateGroupsFromAccount() {
    return this.to('DisassociateSigninDelegateGroupsFromAccount');
  }

  /**
   * Grants permission to disconnect the Active Directory from your Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toDisconnectDirectory() {
    return this.to('DisconnectDirectory');
  }

  /**
   * Grants permission to get details for the specified Amazon Chime account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAccount.html
   */
  public toGetAccount() {
    return this.to('GetAccount');
  }

  /**
   * Grants permission to get details for the account resource associated with your Amazon Chime account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toGetAccountResource() {
    return this.to('GetAccountResource');
  }

  /**
   * Grants permission to get account settings for the specified Amazon Chime account ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAccountSettings.html
   */
  public toGetAccountSettings() {
    return this.to('GetAccountSettings');
  }

  /**
   * Grants permission to get the account details and OpenIdConfig attributes for your Amazon Chime account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  public toGetAccountWithOpenIdConfig() {
    return this.to('GetAccountWithOpenIdConfig');
  }

  /**
   * Grants permission to get retention settings for an app instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAppInstanceRetentionSettings.html
   */
  public toGetAppInstanceRetentionSettings() {
    return this.to('GetAppInstanceRetentionSettings');
  }

  /**
   * Grants permission to get the streaming configurations for an app instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAppInstanceStreamingConfigurations.html
   */
  public toGetAppInstanceStreamingConfigurations() {
    return this.to('GetAppInstanceStreamingConfigurations');
  }

  /**
   * Grants permission to get attendee details for a specified meeting ID and attendee ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAttendee.html
   */
  public toGetAttendee() {
    return this.to('GetAttendee');
  }

  /**
   * Grants permission to retrieve details for the specified bot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetBot.html
   */
  public toGetBot() {
    return this.to('GetBot');
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
    return this.to('GetCDRBucket');
  }

  /**
   * Grants permission to get the full details of a channel message
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetChannelMessage.html
   */
  public toGetChannelMessage() {
    return this.to('GetChannelMessage');
  }

  /**
   * Grants permission to get domain details for a domain associated with your Amazon Chime account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html
   */
  public toGetDomain() {
    return this.to('GetDomain');
  }

  /**
   * Grants permission to retrieve details for an events configuration for a bot to receive outgoing events
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetEventsConfiguration.html
   */
  public toGetEventsConfiguration() {
    return this.to('GetEventsConfiguration');
  }

  /**
   * Grants permission to get global settings related to Amazon Chime for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetGlobalSettings.html
   */
  public toGetGlobalSettings() {
    return this.to('GetGlobalSettings');
  }

  /**
   * Grants permission to get an existing media capture pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetMediaCapturePipeline.html
   */
  public toGetMediaCapturePipeline() {
    return this.to('GetMediaCapturePipeline');
  }

  /**
   * Grants permission to get the meeting record for a specified meeting ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetMeeting.html
   */
  public toGetMeeting() {
    return this.to('GetMeeting');
  }

  /**
   * Grants permission to get attendee, connection, and other details for a meeting
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toGetMeetingDetail() {
    return this.to('GetMeetingDetail');
  }

  /**
   * Grants permission to get the endpoint for the messaging session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetMessagingSessionEndpoint.html
   */
  public toGetMessagingSessionEndpoint() {
    return this.to('GetMessagingSessionEndpoint');
  }

  /**
   * Grants permission to get details for the specified phone number
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumber.html
   */
  public toGetPhoneNumber() {
    return this.to('GetPhoneNumber');
  }

  /**
   * Grants permission to get details for the specified phone number order
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumberOrder.html
   */
  public toGetPhoneNumberOrder() {
    return this.to('GetPhoneNumberOrder');
  }

  /**
   * Grants permission to get phone number settings related to Amazon Chime for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumberSettings.html
   */
  public toGetPhoneNumberSettings() {
    return this.to('GetPhoneNumberSettings');
  }

  /**
   * Grants permission to get details of the specified proxy session for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetProxySession.html
   */
  public toGetProxySession() {
    return this.to('GetProxySession');
  }

  /**
   * Grants permission to retrieve the retention settings for the specified Amazon Chime account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetRetentionSettings.html
   */
  public toGetRetentionSettings() {
    return this.to('GetRetentionSettings');
  }

  /**
   * Grants permission to retrieve a room
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetRoom.html
   */
  public toGetRoom() {
    return this.to('GetRoom');
  }

  /**
   * Grants permission to get details of Amazon Chime SIP media application under the administrator's AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetSipMediaApplication.html
   */
  public toGetSipMediaApplication() {
    return this.to('GetSipMediaApplication');
  }

  /**
   * Grants permission to get logging configuration settings for Amazon Chime SIP media application under the administrator's AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetSipMediaApplicationLoggingConfiguration.html
   */
  public toGetSipMediaApplicationLoggingConfiguration() {
    return this.to('GetSipMediaApplicationLoggingConfiguration');
  }

  /**
   * Grants permission to get details of Amazon Chime SIP rule under the administrator's AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetSipRule.html
   */
  public toGetSipRule() {
    return this.to('GetSipRule');
  }

  /**
   * Grants permission to get telephony limits for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/phone-numbers.html
   */
  public toGetTelephonyLimits() {
    return this.to('GetTelephonyLimits');
  }

  /**
   * Grants permission to get details for the specified user ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetUser.html
   */
  public toGetUser() {
    return this.to('GetUser');
  }

  /**
   * Grants permission to get a summary of user activity on the user details page
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/user-details.html
   */
  public toGetUserActivityReportData() {
    return this.to('GetUserActivityReportData');
  }

  /**
   * Grants permission to get user details for an Amazon Chime user based on the email address in an Amazon Chime Enterprise or Team account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/user-details.html
   */
  public toGetUserByEmail() {
    return this.to('GetUserByEmail');
  }

  /**
   * Grants permission to get user settings related to the specified Amazon Chime user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetUserSettings.html
   */
  public toGetUserSettings() {
    return this.to('GetUserSettings');
  }

  /**
   * Grants permission to get details for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnector.html
   */
  public toGetVoiceConnector() {
    return this.to('GetVoiceConnector');
  }

  /**
   * Grants permission to get details of the emergency calling configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorEmergencyCallingConfiguration.html
   */
  public toGetVoiceConnectorEmergencyCallingConfiguration() {
    return this.to('GetVoiceConnectorEmergencyCallingConfiguration');
  }

  /**
   * Grants permission to get details for the specified Amazon Chime Voice Connector Group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorGroup.html
   */
  public toGetVoiceConnectorGroup() {
    return this.to('GetVoiceConnectorGroup');
  }

  /**
   * Grants permission to get details of the logging configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorLoggingConfiguration.html
   */
  public toGetVoiceConnectorLoggingConfiguration() {
    return this.to('GetVoiceConnectorLoggingConfiguration');
  }

  /**
   * Grants permission to get details of the origination settings for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorOrigination.html
   */
  public toGetVoiceConnectorOrigination() {
    return this.to('GetVoiceConnectorOrigination');
  }

  /**
   * Grants permission to get details of the proxy configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorProxy.html
   */
  public toGetVoiceConnectorProxy() {
    return this.to('GetVoiceConnectorProxy');
  }

  /**
   * Grants permission to get details of the streaming configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorStreamingConfiguration.html
   */
  public toGetVoiceConnectorStreamingConfiguration() {
    return this.to('GetVoiceConnectorStreamingConfiguration');
  }

  /**
   * Grants permission to get details of the termination settings for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorTermination.html
   */
  public toGetVoiceConnectorTermination() {
    return this.to('GetVoiceConnectorTermination');
  }

  /**
   * Grants permission to get details of the termination health for the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorTerminationHealth.html
   */
  public toGetVoiceConnectorTerminationHealth() {
    return this.to('GetVoiceConnectorTerminationHealth');
  }

  /**
   * Grants permission to send an invitation to accept a request for AWS account delegation for an Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toInviteDelegate() {
    return this.to('InviteDelegate');
  }

  /**
   * Grants permission to invite as many as 50 users to the specified Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_InviteUsers.html
   */
  public toInviteUsers() {
    return this.to('InviteUsers');
  }

  /**
   * Grants permission to invite users from a third party provider to your Amazon Chime account
   *
   * Access Level: Write
   */
  public toInviteUsersFromProvider() {
    return this.to('InviteUsersFromProvider');
  }

  /**
   * Grants permission to list Amazon Chime account usage reporting data
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/view-reports.html
   */
  public toListAccountUsageReportData() {
    return this.to('ListAccountUsageReportData');
  }

  /**
   * Grants permission to list the Amazon Chime accounts under the administrator's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAccounts.html
   */
  public toListAccounts() {
    return this.to('ListAccounts');
  }

  /**
   * Grants permission to list the SCIM access keys defined for your Amazon Chime account and Okta configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  public toListApiKeys() {
    return this.to('ListApiKeys');
  }

  /**
   * Grants permission to list administrators in the app instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAppInstanceAdmins.html
   */
  public toListAppInstanceAdmins() {
    return this.to('ListAppInstanceAdmins');
  }

  /**
   * Grants permission to list all AppInstanceUsers created under a single app instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAppInstanceUsers.html
   */
  public toListAppInstanceUsers() {
    return this.to('ListAppInstanceUsers');
  }

  /**
   * Grants permission to list all Amazon Chime app instances created under a single AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAppInstances.html
   */
  public toListAppInstances() {
    return this.to('ListAppInstances');
  }

  /**
   * Grants permission to list the tags applied to an Amazon Chime SDK attendee resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAttendeeTags.html
   */
  public toListAttendeeTags() {
    return this.to('ListAttendeeTags');
  }

  /**
   * Grants permission to list up to 100 attendees for a specified Amazon Chime SDK meeting
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAttendees.html
   */
  public toListAttendees() {
    return this.to('ListAttendees');
  }

  /**
   * Grants permission to list the bots associated with the administrator's Amazon Chime Enterprise account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListBots.html
   */
  public toListBots() {
    return this.to('ListBots');
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
    return this.to('ListCDRBucket');
  }

  /**
   * Grants permission to list the calling regions available for the administrator's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/phone-numbers.html
   */
  public toListCallingRegions() {
    return this.to('ListCallingRegions');
  }

  /**
   * Grants permission to list all the users banned from a particular channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListChannelBans.html
   */
  public toListChannelBans() {
    return this.to('ListChannelBans');
  }

  /**
   * Grants permission to list all channel memberships in a channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListChannelMemberships.html
   */
  public toListChannelMemberships() {
    return this.to('ListChannelMemberships');
  }

  /**
   * Grants permission to list all channels that a particular AppInstanceUser is a part of
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListChannelMembershipsForAppInstanceUser.html
   */
  public toListChannelMembershipsForAppInstanceUser() {
    return this.to('ListChannelMembershipsForAppInstanceUser');
  }

  /**
   * Grants permission to list all the messages in a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListChannelMessages.html
   */
  public toListChannelMessages() {
    return this.to('ListChannelMessages');
  }

  /**
   * Grants permission to list all the moderators for a channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListChannelModerators.html
   */
  public toListChannelModerators() {
    return this.to('ListChannelModerators');
  }

  /**
   * Grants permission to list all the Channels created under a single Chime AppInstance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListChannels.html
   */
  public toListChannels() {
    return this.to('ListChannels');
  }

  /**
   * Grants permission to list all channels moderated by an app instance user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListChannelsModeratedByAppInstanceUser.html
   */
  public toListChannelsModeratedByAppInstanceUser() {
    return this.to('ListChannelsModeratedByAppInstanceUser');
  }

  /**
   * Grants permission to list account delegate information associated with your Amazon Chime account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toListDelegates() {
    return this.to('ListDelegates');
  }

  /**
   * Grants permission to list active Active Directories hosted in the Directory Service of your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toListDirectories() {
    return this.to('ListDirectories');
  }

  /**
   * Grants permission to list domains associated with your Amazon Chime account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list Active Directory or Okta user groups associated with your Amazon Chime Enterprise account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Grants permission to list media capture pipelines
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListMediaCapturePipelines.html
   */
  public toListMediaCapturePipelines() {
    return this.to('ListMediaCapturePipelines');
  }

  /**
   * Grants permission to list all events that occurred for a specified meeting
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/view-reports.html
   */
  public toListMeetingEvents() {
    return this.to('ListMeetingEvents');
  }

  /**
   * Grants permission to list the tags applied to an Amazon Chime SDK meeting resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListMeetingTags.html
   */
  public toListMeetingTags() {
    return this.to('ListMeetingTags');
  }

  /**
   * Grants permission to list up to 100 active Amazon Chime SDK meetings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListMeetings.html
   */
  public toListMeetings() {
    return this.to('ListMeetings');
  }

  /**
   * Grants permission to list meetings ended during the specified date range
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/ag/view-reports.html
   */
  public toListMeetingsReportData() {
    return this.to('ListMeetingsReportData');
  }

  /**
   * Grants permission to list the phone number orders under the administrator's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListPhoneNumberOrders.html
   */
  public toListPhoneNumberOrders() {
    return this.to('ListPhoneNumberOrders');
  }

  /**
   * Grants permission to list the phone numbers under the administrator's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListPhoneNumbers.html
   */
  public toListPhoneNumbers() {
    return this.to('ListPhoneNumbers');
  }

  /**
   * Grants permission to list proxy sessions for the specified Amazon Chime Voice Connector
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListProxySessions.html
   */
  public toListProxySessions() {
    return this.to('ListProxySessions');
  }

  /**
   * Grants permission to list all room members
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListRoomMemberships.html
   */
  public toListRoomMemberships() {
    return this.to('ListRoomMemberships');
  }

  /**
   * Grants permission to list rooms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListRooms.html
   */
  public toListRooms() {
    return this.to('ListRooms');
  }

  /**
   * Grants permission to list all Amazon Chime SIP media applications under the administrator's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListSipMediaApplications.html
   */
  public toListSipMediaApplications() {
    return this.to('ListSipMediaApplications');
  }

  /**
   * Grants permission to list all Amazon Chime SIP rules under the administrator's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListSipRules.html
   */
  public toListSipRules() {
    return this.to('ListSipRules');
  }

  /**
   * Grants permission to list the phone number countries supported by the AWS account
   *
   * Access Level: List
   */
  public toListSupportedPhoneNumberCountries() {
    return this.to('ListSupportedPhoneNumberCountries');
  }

  /**
   * Grants permission to list the tags applied to an Amazon Chime resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the users that belong to the specified Amazon Chime account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to list the Amazon Chime Voice Connector Groups under the administrator's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectorGroups.html
   */
  public toListVoiceConnectorGroups() {
    return this.to('ListVoiceConnectorGroups');
  }

  /**
   * Grants permission to list the SIP termination credentials for the specified Amazon Chime Voice Connector
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectorTerminationCredentials.html
   */
  public toListVoiceConnectorTerminationCredentials() {
    return this.to('ListVoiceConnectorTerminationCredentials');
  }

  /**
   * Grants permission to list the Amazon Chime Voice Connectors under the administrator's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectors.html
   */
  public toListVoiceConnectors() {
    return this.to('ListVoiceConnectors');
  }

  /**
   * Grants permission to log out the specified user from all of the devices they are currently logged into
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_LogoutUser.html
   */
  public toLogoutUser() {
    return this.to('LogoutUser');
  }

  /**
   * Grants permission to enable data retention for the app instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutAppInstanceRetentionSettings.html
   */
  public toPutAppInstanceRetentionSettings() {
    return this.to('PutAppInstanceRetentionSettings');
  }

  /**
   * Grants permission to configure data streaming for the app instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutAppInstanceStreamingConfigurations.html
   */
  public toPutAppInstanceStreamingConfigurations() {
    return this.to('PutAppInstanceStreamingConfigurations');
  }

  /**
   * Grants permission to update details for an events configuration for a bot to receive outgoing events
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutEventsConfiguration.html
   */
  public toPutEventsConfiguration() {
    return this.to('PutEventsConfiguration');
  }

  /**
   * Grants permission to create or update retention settings for the specified Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutRetentionSettings.html
   */
  public toPutRetentionSettings() {
    return this.to('PutRetentionSettings');
  }

  /**
   * Grants permission to update logging configuration settings for Amazon Chime SIP media application under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutSipMediaApplicationLoggingConfiguration.html
   */
  public toPutSipMediaApplicationLoggingConfiguration() {
    return this.to('PutSipMediaApplicationLoggingConfiguration');
  }

  /**
   * Grants permission to add emergency calling configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorEmergencyCallingConfiguration.html
   */
  public toPutVoiceConnectorEmergencyCallingConfiguration() {
    return this.to('PutVoiceConnectorEmergencyCallingConfiguration');
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
    return this.to('PutVoiceConnectorLoggingConfiguration');
  }

  /**
   * Grants permission to update the origination settings for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorOrigination.html
   */
  public toPutVoiceConnectorOrigination() {
    return this.to('PutVoiceConnectorOrigination');
  }

  /**
   * Grants permission to add proxy configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorProxy.html
   */
  public toPutVoiceConnectorProxy() {
    return this.to('PutVoiceConnectorProxy');
  }

  /**
   * Grants permission to add streaming configuration for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorStreamingConfiguration.html
   */
  public toPutVoiceConnectorStreamingConfiguration() {
    return this.to('PutVoiceConnectorStreamingConfiguration');
  }

  /**
   * Grants permission to update the termination settings for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorTermination.html
   */
  public toPutVoiceConnectorTermination() {
    return this.to('PutVoiceConnectorTermination');
  }

  /**
   * Grants permission to add SIP termination credentials for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorTerminationCredentials.html
   */
  public toPutVoiceConnectorTerminationCredentials() {
    return this.to('PutVoiceConnectorTerminationCredentials');
  }

  /**
   * Grants permission to redact message content
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_RedactChannelMessage.html
   */
  public toRedactChannelMessage() {
    return this.to('RedactChannelMessage');
  }

  /**
   * Grants permission to redact the specified Chime conversation Message
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_RedactConversationMessage.html
   */
  public toRedactConversationMessage() {
    return this.to('RedactConversationMessage');
  }

  /**
   * Grants permission to redacts the specified Chime room Message
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_RedactRoomMessage.html
   */
  public toRedactRoomMessage() {
    return this.to('RedactRoomMessage');
  }

  /**
   * Grants permission to regenerate the security token for the specified bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_RegenerateSecurityToken.html
   */
  public toRegenerateSecurityToken() {
    return this.to('RegenerateSecurityToken');
  }

  /**
   * Grants permission to modify the account name for your Amazon Chime Enterprise or Team account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/rename-account.html
   */
  public toRenameAccount() {
    return this.to('RenameAccount');
  }

  /**
   * Grants permission to renew the delegation request associated with an Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toRenewDelegate() {
    return this.to('RenewDelegate');
  }

  /**
   * Grants permission to reset the account resource in your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toResetAccountResource() {
    return this.to('ResetAccountResource');
  }

  /**
   * Grants permission to reset the personal meeting PIN for the specified user on an Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ResetPersonalPIN.html
   */
  public toResetPersonalPIN() {
    return this.to('ResetPersonalPIN');
  }

  /**
   * Grants permission to restore the specified phone number from the deltion queue back to the phone number inventory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_RestorePhoneNumber.html
   */
  public toRestorePhoneNumber() {
    return this.to('RestorePhoneNumber');
  }

  /**
   * Grants permission to download the file containing links to all user attachments returned as part of the "Request attachments" action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/request-attachments.html
   */
  public toRetrieveDataExports() {
    return this.to('RetrieveDataExports');
  }

  /**
   * Grants permission to search phone numbers that can be ordered from the carrier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_SearchAvailablePhoneNumbers.html
   */
  public toSearchAvailablePhoneNumbers() {
    return this.to('SearchAvailablePhoneNumbers');
  }

  /**
   * Grants permission to send a message to a particular channel that the member is a part of
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_SendChannelMessage.html
   */
  public toSendChannelMessage() {
    return this.to('SendChannelMessage');
  }

  /**
   * Grants permission to submit the "Request attachments" request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/request-attachments.html
   */
  public toStartDataExport() {
    return this.to('StartDataExport');
  }

  /**
   * Grants permission to submit a customer service support request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/chime-getting-admin-support.html
   */
  public toSubmitSupportRequest() {
    return this.to('SubmitSupportRequest');
  }

  /**
   * Grants permission to suspend users from an Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  public toSuspendUsers() {
    return this.to('SuspendUsers');
  }

  /**
   * Grants permission to apply the specified tags to the specified Amazon Chime SDK attendee
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_TagAttendee.html
   */
  public toTagAttendee() {
    return this.to('TagAttendee');
  }

  /**
   * Grants permission to apply the specified tags to the specified Amazon Chime SDK meeting
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
    return this.to('TagMeeting');
  }

  /**
   * Grants permission to apply the specified tags to the specified Amazon Chime resource
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
    return this.to('TagResource');
  }

  /**
   * Grants permission to unauthorize an Active Directory from your Amazon Chime Enterprise account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toUnauthorizeDirectory() {
    return this.to('UnauthorizeDirectory');
  }

  /**
   * Grants permission to untag the specified tags from the specified Amazon Chime SDK attendee
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagAttendee.html
   */
  public toUntagAttendee() {
    return this.to('UntagAttendee');
  }

  /**
   * Grants permission to untag the specified tags from the specified Amazon Chime SDK meeting
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagMeeting.html
   */
  public toUntagMeeting() {
    return this.to('UntagMeeting');
  }

  /**
   * Grants permission to untag the specified tags from the specified Amazon Chime resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update account details for the specified Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateAccount.html
   */
  public toUpdateAccount() {
    return this.to('UpdateAccount');
  }

  /**
   * Grants permission to update the OpenIdConfig attributes for your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  public toUpdateAccountOpenIdConfig() {
    return this.to('UpdateAccountOpenIdConfig');
  }

  /**
   * Grants permission to update the account resource in your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toUpdateAccountResource() {
    return this.to('UpdateAccountResource');
  }

  /**
   * Grants permission to update the settings for the specified Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateAccountSettings.html
   */
  public toUpdateAccountSettings() {
    return this.to('UpdateAccountSettings');
  }

  /**
   * Grants permission to update AppInstance metadata
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateAppInstance.html
   */
  public toUpdateAppInstance() {
    return this.to('UpdateAppInstance');
  }

  /**
   * Grants permission to update the details for an AppInstanceUser
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateAppInstanceUser.html
   */
  public toUpdateAppInstanceUser() {
    return this.to('UpdateAppInstanceUser');
  }

  /**
   * Grants permission to update the status of the specified bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateBot.html
   */
  public toUpdateBot() {
    return this.to('UpdateBot');
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
    return this.to('UpdateCDRSettings');
  }

  /**
   * Grants permission to update a channel's attributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateChannel.html
   */
  public toUpdateChannel() {
    return this.to('UpdateChannel');
  }

  /**
   * Grants permission to update the content of a message
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateChannelMessage.html
   */
  public toUpdateChannelMessage() {
    return this.to('UpdateChannelMessage');
  }

  /**
   * Grants permission to set the timestamp to the point when a user last read messages in a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateChannelReadMarker.html
   */
  public toUpdateChannelReadMarker() {
    return this.to('UpdateChannelReadMarker');
  }

  /**
   * Grants permission to update the global settings related to Amazon Chime for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateGlobalSettings.html
   */
  public toUpdateGlobalSettings() {
    return this.to('UpdateGlobalSettings');
  }

  /**
   * Grants permission to update phone number details for the specified phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdatePhoneNumber.html
   */
  public toUpdatePhoneNumber() {
    return this.to('UpdatePhoneNumber');
  }

  /**
   * Grants permission to update phone number settings related to Amazon Chime for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdatePhoneNumberSettings.html
   */
  public toUpdatePhoneNumberSettings() {
    return this.to('UpdatePhoneNumberSettings');
  }

  /**
   * Grants permission to update a proxy session for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateProxySession.html
   */
  public toUpdateProxySession() {
    return this.to('UpdateProxySession');
  }

  /**
   * Grants permission to update a room
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateRoom.html
   */
  public toUpdateRoom() {
    return this.to('UpdateRoom');
  }

  /**
   * Grants permission to update room membership role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateRoomMembership.html
   */
  public toUpdateRoomMembership() {
    return this.to('UpdateRoomMembership');
  }

  /**
   * Grants permission to update properties of Amazon Chime SIP media application under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateSipMediaApplication.html
   */
  public toUpdateSipMediaApplication() {
    return this.to('UpdateSipMediaApplication');
  }

  /**
   * Grants permission to update an Amazon Chime SIP media application call under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateSipMediaApplicationCall.html
   */
  public toUpdateSipMediaApplicationCall() {
    return this.to('UpdateSipMediaApplicationCall');
  }

  /**
   * Grants permission to update properties of Amazon Chime SIP rule under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateSipRule.html
   */
  public toUpdateSipRule() {
    return this.to('UpdateSipRule');
  }

  /**
   * Grants permission to update the supported license tiers available for users in your Amazon Chime account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  public toUpdateSupportedLicenses() {
    return this.to('UpdateSupportedLicenses');
  }

  /**
   * Grants permission to update user details for a specified user ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateUser.html
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  /**
   * Grants permission to update the licenses for your Amazon Chime users
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  public toUpdateUserLicenses() {
    return this.to('UpdateUserLicenses');
  }

  /**
   * Grants permission to update user settings related to the specified Amazon Chime user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateUserSettings.html
   */
  public toUpdateUserSettings() {
    return this.to('UpdateUserSettings');
  }

  /**
   * Grants permission to update Amazon Chime Voice Connector details for the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateVoiceConnector.html
   */
  public toUpdateVoiceConnector() {
    return this.to('UpdateVoiceConnector');
  }

  /**
   * Grants permission to update Amazon Chime Voice Connector Group details for the specified Amazon Chime Voice Connector Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateVoiceConnectorGroup.html
   */
  public toUpdateVoiceConnectorGroup() {
    return this.to('UpdateVoiceConnectorGroup');
  }

  /**
   * Grants permission to validate the account resource in your Amazon Chime account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  public toValidateAccountResource() {
    return this.to('ValidateAccountResource');
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
      "BatchCreateChannelMembership",
      "BatchCreateRoomMembership",
      "BatchDeletePhoneNumber",
      "BatchSuspendUser",
      "BatchUnsuspendUser",
      "BatchUpdatePhoneNumber",
      "BatchUpdateUser",
      "Connect",
      "ConnectDirectory",
      "CreateAccount",
      "CreateApiKey",
      "CreateAppInstance",
      "CreateAppInstanceAdmin",
      "CreateAppInstanceUser",
      "CreateAttendee",
      "CreateBot",
      "CreateBotMembership",
      "CreateCDRBucket",
      "CreateChannel",
      "CreateChannelBan",
      "CreateChannelMembership",
      "CreateChannelModerator",
      "CreateMediaCapturePipeline",
      "CreateMeeting",
      "CreateMeetingDialOut",
      "CreateMeetingWithAttendees",
      "CreatePhoneNumberOrder",
      "CreateProxySession",
      "CreateRoom",
      "CreateRoomMembership",
      "CreateSipMediaApplication",
      "CreateSipMediaApplicationCall",
      "CreateSipRule",
      "CreateUser",
      "CreateVoiceConnector",
      "CreateVoiceConnectorGroup",
      "DeleteAccount",
      "DeleteAccountOpenIdConfig",
      "DeleteApiKey",
      "DeleteAppInstance",
      "DeleteAppInstanceAdmin",
      "DeleteAppInstanceStreamingConfigurations",
      "DeleteAppInstanceUser",
      "DeleteAttendee",
      "DeleteCDRBucket",
      "DeleteChannel",
      "DeleteChannelBan",
      "DeleteChannelMembership",
      "DeleteChannelMessage",
      "DeleteChannelModerator",
      "DeleteDelegate",
      "DeleteDomain",
      "DeleteEventsConfiguration",
      "DeleteGroups",
      "DeleteMediaCapturePipeline",
      "DeleteMeeting",
      "DeletePhoneNumber",
      "DeleteProxySession",
      "DeleteRoom",
      "DeleteRoomMembership",
      "DeleteSipMediaApplication",
      "DeleteSipRule",
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
      "ListChannelMessages",
      "LogoutUser",
      "PutAppInstanceRetentionSettings",
      "PutAppInstanceStreamingConfigurations",
      "PutEventsConfiguration",
      "PutRetentionSettings",
      "PutSipMediaApplicationLoggingConfiguration",
      "PutVoiceConnectorEmergencyCallingConfiguration",
      "PutVoiceConnectorLoggingConfiguration",
      "PutVoiceConnectorOrigination",
      "PutVoiceConnectorProxy",
      "PutVoiceConnectorStreamingConfiguration",
      "PutVoiceConnectorTermination",
      "PutVoiceConnectorTerminationCredentials",
      "RedactChannelMessage",
      "RedactConversationMessage",
      "RedactRoomMessage",
      "RegenerateSecurityToken",
      "RenameAccount",
      "RenewDelegate",
      "ResetAccountResource",
      "ResetPersonalPIN",
      "RestorePhoneNumber",
      "RetrieveDataExports",
      "SendChannelMessage",
      "StartDataExport",
      "SubmitSupportRequest",
      "SuspendUsers",
      "UnauthorizeDirectory",
      "UpdateAccount",
      "UpdateAccountOpenIdConfig",
      "UpdateAccountResource",
      "UpdateAccountSettings",
      "UpdateAppInstance",
      "UpdateAppInstanceUser",
      "UpdateBot",
      "UpdateCDRSettings",
      "UpdateChannel",
      "UpdateChannelMessage",
      "UpdateChannelReadMarker",
      "UpdateGlobalSettings",
      "UpdatePhoneNumber",
      "UpdatePhoneNumberSettings",
      "UpdateProxySession",
      "UpdateRoom",
      "UpdateRoomMembership",
      "UpdateSipMediaApplication",
      "UpdateSipMediaApplicationCall",
      "UpdateSipRule",
      "UpdateSupportedLicenses",
      "UpdateUser",
      "UpdateUserLicenses",
      "UpdateUserSettings",
      "UpdateVoiceConnector",
      "UpdateVoiceConnectorGroup"
    ],
    "Read": [
      "DescribeAppInstance",
      "DescribeAppInstanceAdmin",
      "DescribeAppInstanceUser",
      "DescribeChannel",
      "DescribeChannelBan",
      "DescribeChannelMembership",
      "DescribeChannelMembershipForAppInstanceUser",
      "DescribeChannelModeratedByAppInstanceUser",
      "DescribeChannelModerator",
      "GetAccount",
      "GetAccountResource",
      "GetAccountSettings",
      "GetAccountWithOpenIdConfig",
      "GetAppInstanceRetentionSettings",
      "GetAppInstanceStreamingConfigurations",
      "GetAttendee",
      "GetBot",
      "GetCDRBucket",
      "GetChannelMessage",
      "GetDomain",
      "GetEventsConfiguration",
      "GetGlobalSettings",
      "GetMediaCapturePipeline",
      "GetMeeting",
      "GetMeetingDetail",
      "GetMessagingSessionEndpoint",
      "GetPhoneNumber",
      "GetPhoneNumberOrder",
      "GetPhoneNumberSettings",
      "GetProxySession",
      "GetRetentionSettings",
      "GetRoom",
      "GetSipMediaApplication",
      "GetSipMediaApplicationLoggingConfiguration",
      "GetSipRule",
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
      "SearchAvailablePhoneNumbers",
      "ValidateAccountResource"
    ],
    "List": [
      "ListAccountUsageReportData",
      "ListAccounts",
      "ListApiKeys",
      "ListAppInstanceAdmins",
      "ListAppInstanceUsers",
      "ListAppInstances",
      "ListAttendeeTags",
      "ListAttendees",
      "ListBots",
      "ListCDRBucket",
      "ListCallingRegions",
      "ListChannelBans",
      "ListChannelMemberships",
      "ListChannelMembershipsForAppInstanceUser",
      "ListChannelModerators",
      "ListChannels",
      "ListChannelsModeratedByAppInstanceUser",
      "ListDelegates",
      "ListDirectories",
      "ListDomains",
      "ListGroups",
      "ListMediaCapturePipelines",
      "ListMeetingEvents",
      "ListMeetingTags",
      "ListMeetings",
      "ListMeetingsReportData",
      "ListPhoneNumberOrders",
      "ListPhoneNumbers",
      "ListProxySessions",
      "ListRoomMemberships",
      "ListRooms",
      "ListSipMediaApplications",
      "ListSipRules",
      "ListSupportedPhoneNumberCountries",
      "ListTagsForResource",
      "ListUsers",
      "ListVoiceConnectorGroups",
      "ListVoiceConnectorTerminationCredentials",
      "ListVoiceConnectors"
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
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_Meeting.html
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
   * Adds a resource of type app-instance to the statement
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_AppInstance.html
   *
   * @param appInstanceId - Identifier for the appInstanceId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAppInstance(appInstanceId: string, accountId?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:chime:${Region}:${AccountId}:app-instance/${AppInstanceId}';
    arn = arn.replace('${AppInstanceId}', appInstanceId);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type app-instance-user to the statement
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_AppInstanceUser.html
   *
   * @param appInstanceId - Identifier for the appInstanceId.
   * @param appInstanceUserId - Identifier for the appInstanceUserId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAppInstanceUser(appInstanceId: string, appInstanceUserId: string, accountId?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:chime:${Region}:${AccountId}:app-instance/${AppInstanceId}/user/${AppInstanceUserId}';
    arn = arn.replace('${AppInstanceId}', appInstanceId);
    arn = arn.replace('${AppInstanceUserId}', appInstanceUserId);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_Channel.html
   *
   * @param appInstanceId - Identifier for the appInstanceId.
   * @param channelId - Identifier for the channelId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(appInstanceId: string, channelId: string, accountId?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:chime:${Region}:${AccountId}:app-instance/${AppInstanceId}/channel/${ChannelId}';
    arn = arn.replace('${AppInstanceId}', appInstanceId);
    arn = arn.replace('${ChannelId}', channelId);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
