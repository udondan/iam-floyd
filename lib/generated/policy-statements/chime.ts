import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
  constructor(sid?: string) {
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
   * Grants permission to associate a flow with a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_AssociateChannelFlow.html
   */
  public toAssociateChannelFlow() {
    return this.to('AssociateChannelFlow');
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
   * Grants permission to associate the specified Amazon Connect instance with an Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-actions-as-permissions
   */
  public toAssociateVoiceConnectorConnect() {
    return this.to('AssociateVoiceConnectorConnect');
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
   * Grants permission to add multiple users and bots to a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_BatchCreateChannelMembership.html
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
   * Grants permission to update AttendeeCapabilities except the capabilities listed in an ExcludedAttendeeIds table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_BatchUpdateAttendeeCapabilitiesExcept.html
   */
  public toBatchUpdateAttendeeCapabilitiesExcept() {
    return this.to('BatchUpdateAttendeeCapabilitiesExcept');
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
   * Grants permission to callback for a message on a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ChannelFlowCallback.html
   */
  public toChannelFlowCallback() {
    return this.to('ChannelFlowCallback');
  }

  /**
   * Grants permission to establish a web socket connection for app instance user to the messaging session endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_Connect.html
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
   * Grants permission to create an app instance in the AWS account (tag-based access controls are only supported on identity-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_CreateAppInstance.html
   */
  public toCreateAppInstance() {
    return this.to('CreateAppInstance');
  }

  /**
   * Grants permission to promote a user or bot to an AppInstanceAdmin
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_CreateAppInstanceAdmin.html
   */
  public toCreateAppInstanceAdmin() {
    return this.to('CreateAppInstanceAdmin');
  }

  /**
   * Grants permission to create a bot within an AppInstance (tag-based access controls are only supported on identity-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_CreateAppInstanceBot.html
   */
  public toCreateAppInstanceBot() {
    return this.to('CreateAppInstanceBot');
  }

  /**
   * Grants permission to create a user within an AppInstance (tag-based access controls are only supported on identity-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_CreateAppInstanceUser.html
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
   * Grants permission to create a channel for an app instance in the AWS account (tag-based access controls are only supported on messaging-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannel.html
   */
  public toCreateChannel() {
    return this.to('CreateChannel');
  }

  /**
   * Grants permission to ban a user or bot from a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelBan.html
   */
  public toCreateChannelBan() {
    return this.to('CreateChannelBan');
  }

  /**
   * Grants permission to create a channel flow for an app instance in the AWS account (tag-based access controls are only supported on messaging-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelFlow.html
   */
  public toCreateChannelFlow() {
    return this.to('CreateChannelFlow');
  }

  /**
   * Grants permission to add a user or bot to a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelMembership.html
   */
  public toCreateChannelMembership() {
    return this.to('CreateChannelMembership');
  }

  /**
   * Grants permission to create a channel moderator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelModerator.html
   */
  public toCreateChannelModerator() {
    return this.to('CreateChannelModerator');
  }

  /**
   * Grants permission to create an Amazon Connect Analytics Connector in the AWS account (tag-based access controls are only supported on voice-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - chime:CreateVoiceConnector
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateVoiceConnector.html
   */
  public toCreateConnectAnalyticsConnector() {
    return this.to('CreateConnectAnalyticsConnector');
  }

  /**
   * Grants permission to create an Amazon Connect Call Transfer Connector in the AWS account (tag-based access controls are only supported on voice-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - chime:CreateVoiceConnector
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateVoiceConnector.html
   */
  public toCreateConnectCallTransferConnector() {
    return this.to('CreateConnectCallTransferConnector');
  }

  /**
   * Grants permission to create a media capture pipeline (tag-based access controls are only supported on media-pipelines-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - s3:GetBucketPolicy
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaCapturePipeline.html
   */
  public toCreateMediaCapturePipeline() {
    return this.to('CreateMediaCapturePipeline');
  }

  /**
   * Grants permission to create a media concatenation pipeline (tag-based access controls are only supported on media-pipelines-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - s3:GetBucketPolicy
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaConcatenationPipeline.html
   */
  public toCreateMediaConcatenationPipeline() {
    return this.to('CreateMediaConcatenationPipeline');
  }

  /**
   * Grants permission to create a media insights pipeline (tag-based access controls are only supported on media-pipelines-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - chime:TagResource
   * - kinesisvideo:DescribeStream
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaInsightsPipeline.html
   */
  public toCreateMediaInsightsPipeline() {
    return this.to('CreateMediaInsightsPipeline');
  }

  /**
   * Grants permission to create a media insights pipeline configuration (tag-based access controls are only supported on media-pipelines-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - chime:TagResource
   * - iam:PassRole
   * - kinesis:DescribeStream
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaInsightsPipelineConfiguration.html
   */
  public toCreateMediaInsightsPipelineConfiguration() {
    return this.to('CreateMediaInsightsPipelineConfiguration');
  }

  /**
   * Grants permission to create a media live connector pipeline (tag-based access controls are only supported on media-pipelines-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaLiveConnectorPipeline.html
   */
  public toCreateMediaLiveConnectorPipeline() {
    return this.to('CreateMediaLiveConnectorPipeline');
  }

  /**
   * Grants permission to create kinesis video stream pool (tag-based access controls are only supported on media-pipelines-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - kinesis:DescribeStream
   * - kinesisvideo:CreateStream
   * - kinesisvideo:GetDataEndpoint
   * - kinesisvideo:ListStreams
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaPipelineKinesisVideoStreamPool.html
   */
  public toCreateMediaPipelineKinesisVideoStreamPool() {
    return this.to('CreateMediaPipelineKinesisVideoStreamPool');
  }

  /**
   * Grants permission to create a media stream pipeline (tag-based access controls are only supported on media-pipelines-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - kinesisvideo:DescribeStream
   * - kinesisvideo:GetDataEndpoint
   * - kinesisvideo:PutMedia
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaStreamPipeline.html
   */
  public toCreateMediaStreamPipeline() {
    return this.to('CreateMediaStreamPipeline');
  }

  /**
   * Grants permission to create a new meeting in the specified media Region, with no initial attendees (tag-based access controls are only supported on meetings-chime.<region>.amazonaws.com endpoints)
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
   * Grants permission to create a new meeting in the specified media Region, with a set of attendees (tag-based access controls are only supported on meetings-chime.<region>.amazonaws.com endpoints)
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
   * Grants permission to create an Amazon Chime SIP media application in the AWS account (tag-based access controls are only supported on voice-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
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
   * Grants permission to create a Voice Connector in the AWS account (tag-based access controls are only supported on voice-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - chime:CreateConnectAnalyticsConnector
   * - chime:CreateConnectCallTransferConnector
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateVoiceConnector.html
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
   * Grants permission to create a voice profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateVoiceProfile.html
   */
  public toCreateVoiceProfile() {
    return this.to('CreateVoiceProfile');
  }

  /**
   * Grants permission to create a voice profile domain (tag-based access controls are only supported on voice-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - chime:TagResource
   * - kms:CreateGrant
   * - kms:DescribeKey
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateVoiceProfileDomain.html
   */
  public toCreateVoiceProfileDomain() {
    return this.to('CreateVoiceProfileDomain');
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
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeleteAppInstance.html
   */
  public toDeleteAppInstance() {
    return this.to('DeleteAppInstance');
  }

  /**
   * Grants permission to demote an AppInstanceAdmin to a user or bot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeleteAppInstanceAdmin.html
   */
  public toDeleteAppInstanceAdmin() {
    return this.to('DeleteAppInstanceAdmin');
  }

  /**
   * Grants permission to delete an AppInstanceBot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeleteAppInstanceBot.html
   */
  public toDeleteAppInstanceBot() {
    return this.to('DeleteAppInstanceBot');
  }

  /**
   * Grants permission to disable data streaming for the app instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_DeleteAppInstanceStreamingConfigurations.html
   */
  public toDeleteAppInstanceStreamingConfigurations() {
    return this.to('DeleteAppInstanceStreamingConfigurations');
  }

  /**
   * Grants permission to delete an AppInstanceUser
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeleteAppInstanceUser.html
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
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannel.html
   */
  public toDeleteChannel() {
    return this.to('DeleteChannel');
  }

  /**
   * Grants permission to remove a user or bot from a channel's ban list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannelBan.html
   */
  public toDeleteChannelBan() {
    return this.to('DeleteChannelBan');
  }

  /**
   * Grants permission to delete a channel flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannelFlow.html
   */
  public toDeleteChannelFlow() {
    return this.to('DeleteChannelFlow');
  }

  /**
   * Grants permission to remove a member from a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannelMembership.html
   */
  public toDeleteChannelMembership() {
    return this.to('DeleteChannelMembership');
  }

  /**
   * Grants permission to delete a channel message
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannelMessage.html
   */
  public toDeleteChannelMessage() {
    return this.to('DeleteChannelMessage');
  }

  /**
   * Grants permission to delete a channel moderator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannelModerator.html
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
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_DeleteMediaCapturePipeline.html
   */
  public toDeleteMediaCapturePipeline() {
    return this.to('DeleteMediaCapturePipeline');
  }

  /**
   * Grants permission to delete a media insights pipeline configuration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - chime:ListVoiceConnectors
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_DeleteMediaInsightsPipelineConfiguration.html
   */
  public toDeleteMediaInsightsPipelineConfiguration() {
    return this.to('DeleteMediaInsightsPipelineConfiguration');
  }

  /**
   * Grants permission to delete a media pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_DeleteMediaPipeline.html
   */
  public toDeleteMediaPipeline() {
    return this.to('DeleteMediaPipeline');
  }

  /**
   * Grants permission to delete kinesis video stream pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_DeleteMediaPipelineKinesisVideoStreamPool.html
   */
  public toDeleteMediaPipelineKinesisVideoStreamPool() {
    return this.to('DeleteMediaPipelineKinesisVideoStreamPool');
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
   * Grants permission to delete the data streaming configurations of an AppInstance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteMessagingStreamingConfigurations.html
   */
  public toDeleteMessagingStreamingConfigurations() {
    return this.to('DeleteMessagingStreamingConfigurations');
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
   * Dependent actions:
   * - logs:CreateLogDelivery
   * - logs:DeleteLogDelivery
   * - logs:GetLogDelivery
   * - logs:ListLogDeliveries
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
   * Grants permission to delete the configuration of the external system that is connected with the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceConnectorExternalSystemsConfiguration.html
   */
  public toDeleteVoiceConnectorExternalSystemsConfiguration() {
    return this.to('DeleteVoiceConnectorExternalSystemsConfiguration');
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
   * Grants permission to delete a voice profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceProfile.html
   */
  public toDeleteVoiceProfile() {
    return this.to('DeleteVoiceProfile');
  }

  /**
   * Grants permission to delete a voice profile domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceProfileDomain.html
   */
  public toDeleteVoiceProfileDomain() {
    return this.to('DeleteVoiceProfileDomain');
  }

  /**
   * Grants permission to deregister an endpoint for an app instance user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeregisterAppInstanceUserEndpoint.html
   */
  public toDeregisterAppInstanceUserEndpoint() {
    return this.to('DeregisterAppInstanceUserEndpoint');
  }

  /**
   * Grants permission to get the full details of an AppInstance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DescribeAppInstance.html
   */
  public toDescribeAppInstance() {
    return this.to('DescribeAppInstance');
  }

  /**
   * Grants permission to get the full details of an AppInstanceAdmin
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DescribeAppInstanceAdmin.html
   */
  public toDescribeAppInstanceAdmin() {
    return this.to('DescribeAppInstanceAdmin');
  }

  /**
   * Grants permission to get the full details of an AppInstanceBot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DescribeAppInstanceBot.html
   */
  public toDescribeAppInstanceBot() {
    return this.to('DescribeAppInstanceBot');
  }

  /**
   * Grants permission to get the full details of an AppInstanceUser
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DescribeAppInstanceUser.html
   */
  public toDescribeAppInstanceUser() {
    return this.to('DescribeAppInstanceUser');
  }

  /**
   * Grants permission to describe an endpoint registered for an app instance user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DescribeAppInstanceUserEndpoint.html
   */
  public toDescribeAppInstanceUserEndpoint() {
    return this.to('DescribeAppInstanceUserEndpoint');
  }

  /**
   * Grants permission to get the full details of a channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannel.html
   */
  public toDescribeChannel() {
    return this.to('DescribeChannel');
  }

  /**
   * Grants permission to get the full details of a channel ban
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelBan.html
   */
  public toDescribeChannelBan() {
    return this.to('DescribeChannelBan');
  }

  /**
   * Grants permission to get the full details of a channel flow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelFlow.html
   */
  public toDescribeChannelFlow() {
    return this.to('DescribeChannelFlow');
  }

  /**
   * Grants permission to get the full details of a channel membership
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelMembership.html
   */
  public toDescribeChannelMembership() {
    return this.to('DescribeChannelMembership');
  }

  /**
   * Grants permission to get the details of a channel based on the membership of the specified user or bot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelMembershipForAppInstanceUser.html
   */
  public toDescribeChannelMembershipForAppInstanceUser() {
    return this.to('DescribeChannelMembershipForAppInstanceUser');
  }

  /**
   * Grants permission to get the full details of a channel moderated by the specified user or bot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelModeratedByAppInstanceUser.html
   */
  public toDescribeChannelModeratedByAppInstanceUser() {
    return this.to('DescribeChannelModeratedByAppInstanceUser');
  }

  /**
   * Grants permission to get the full details of a single ChannelModerator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelModerator.html
   */
  public toDescribeChannelModerator() {
    return this.to('DescribeChannelModerator');
  }

  /**
   * Grants permission to disassociate a flow from a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DisassociateChannelFlow.html
   */
  public toDisassociateChannelFlow() {
    return this.to('DisassociateChannelFlow');
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
   * Grants permission to disassociate the Amazon Connect instance from the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-actions-as-permissions
   */
  public toDisassociateVoiceConnectorConnect() {
    return this.to('DisassociateVoiceConnectorConnect');
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
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_GetAppInstanceRetentionSettings.html
   */
  public toGetAppInstanceRetentionSettings() {
    return this.to('GetAppInstanceRetentionSettings');
  }

  /**
   * Grants permission to get the streaming configurations for an app instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_GetAppInstanceStreamingConfigurations.html
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
   * Grants permission to get the preferences for a channel membership
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetChannelMembershipPreferences.html
   */
  public toGetChannelMembershipPreferences() {
    return this.to('GetChannelMembershipPreferences');
  }

  /**
   * Grants permission to get the full details of a channel message
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetChannelMessage.html
   */
  public toGetChannelMessage() {
    return this.to('GetChannelMessage');
  }

  /**
   * Grants permission to get the status of a channel message
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetChannelMessageStatus.html
   */
  public toGetChannelMessageStatus() {
    return this.to('GetChannelMessageStatus');
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
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_GetMediaCapturePipeline.html
   */
  public toGetMediaCapturePipeline() {
    return this.to('GetMediaCapturePipeline');
  }

  /**
   * Grants permission to get a media insights pipeline configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_GetMediaInsightsPipelineConfiguration.html
   */
  public toGetMediaInsightsPipelineConfiguration() {
    return this.to('GetMediaInsightsPipelineConfiguration');
  }

  /**
   * Grants permission to get an existing media pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_GetMediaPipeline.html
   */
  public toGetMediaPipeline() {
    return this.to('GetMediaPipeline');
  }

  /**
   * Grants permission to get an existing media pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_GetMediaPipelineKinesisVideoStreamPool.html
   */
  public toGetMediaPipelineKinesisVideoStreamPool() {
    return this.to('GetMediaPipelineKinesisVideoStreamPool');
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
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetMessagingSessionEndpoint.html
   */
  public toGetMessagingSessionEndpoint() {
    return this.to('GetMessagingSessionEndpoint');
  }

  /**
   * Grants permission to get the data streaming configurations of an AppInstance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetMessagingStreamingConfigurations.html
   */
  public toGetMessagingStreamingConfigurations() {
    return this.to('GetMessagingStreamingConfigurations');
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
   * Grants permission to get Alexa Skill configuration settings for Amazon Chime SIP media application under the administrator's AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetSipMediaApplicationAlexaSkillConfiguration.html
   */
  public toGetSipMediaApplicationAlexaSkillConfiguration() {
    return this.to('GetSipMediaApplicationAlexaSkillConfiguration');
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
   * Grants permission to get a speaker search task on the specified Amazon Chime resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_GetSpeakerSearchTask.html
   */
  public toGetSpeakerSearchTask() {
    return this.to('GetSpeakerSearchTask');
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
   * Grants permission to get the configuration of the external system that is connected with the specified Amazon Chime Voice Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceConnectorExternalSystemsConfiguration.html
   */
  public toGetVoiceConnectorExternalSystemsConfiguration() {
    return this.to('GetVoiceConnectorExternalSystemsConfiguration');
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
   * Grants permission to get a voice profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceProfile.html
   */
  public toGetVoiceProfile() {
    return this.to('GetVoiceProfile');
  }

  /**
   * Grants permission to get a voice profile domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceProfileDomain.html
   */
  public toGetVoiceProfileDomain() {
    return this.to('GetVoiceProfileDomain');
  }

  /**
   * Grants permission to get a voice tone analysis task on the specified Amazon Chime resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_GetVoiceToneAnalysisTask.html
   */
  public toGetVoiceToneAnalysisTask() {
    return this.to('GetVoiceToneAnalysisTask');
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
   *
   * https://docs.aws.amazon.com/chime/latest/ag/control-access.html
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
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstanceAdmins.html
   */
  public toListAppInstanceAdmins() {
    return this.to('ListAppInstanceAdmins');
  }

  /**
   * Grants permission to list all AppInstanceBots created under a single app instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstanceBots.html
   */
  public toListAppInstanceBots() {
    return this.to('ListAppInstanceBots');
  }

  /**
   * Grants permission to list the endpoints registered for an app instance user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstanceUserEndpoints.html
   */
  public toListAppInstanceUserEndpoints() {
    return this.to('ListAppInstanceUserEndpoints');
  }

  /**
   * Grants permission to list all AppInstanceUsers created under a single app instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstanceUsers.html
   */
  public toListAppInstanceUsers() {
    return this.to('ListAppInstanceUsers');
  }

  /**
   * Grants permission to list all Amazon Chime app instances created under a single AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstances.html
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
   * Grants permission to list the available AWS Regions in which you can create an Amazon Chime SDK Voice Connector
   *
   * Access Level: List
   */
  public toListAvailableVoiceConnectorRegions() {
    return this.to('ListAvailableVoiceConnectorRegions');
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
   * Grants permission to list all the users and bots banned from a particular channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelBans.html
   */
  public toListChannelBans() {
    return this.to('ListChannelBans');
  }

  /**
   * Grants permission to list all the Channel Flows created under a single Chime AppInstance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelFlows.html
   */
  public toListChannelFlows() {
    return this.to('ListChannelFlows');
  }

  /**
   * Grants permission to list all channel memberships in a channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelMemberships.html
   */
  public toListChannelMemberships() {
    return this.to('ListChannelMemberships');
  }

  /**
   * Grants permission to list all channels that a particular user or bot is a part of
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelMembershipsForAppInstanceUser.html
   */
  public toListChannelMembershipsForAppInstanceUser() {
    return this.to('ListChannelMembershipsForAppInstanceUser');
  }

  /**
   * Grants permission to list all the messages in a channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelMessages.html
   */
  public toListChannelMessages() {
    return this.to('ListChannelMessages');
  }

  /**
   * Grants permission to list all the moderators for a channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelModerators.html
   */
  public toListChannelModerators() {
    return this.to('ListChannelModerators');
  }

  /**
   * Grants permission to list all the Channels created under a single Chime AppInstance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannels.html
   */
  public toListChannels() {
    return this.to('ListChannels');
  }

  /**
   * Grants permission to list all the Channels associated with a single Chime Channel Flow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelsAssociatedWithChannelFlow.html
   */
  public toListChannelsAssociatedWithChannelFlow() {
    return this.to('ListChannelsAssociatedWithChannelFlow');
  }

  /**
   * Grants permission to list all channels moderated by a user or bot
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelsModeratedByAppInstanceUser.html
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
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_ListMediaCapturePipelines.html
   */
  public toListMediaCapturePipelines() {
    return this.to('ListMediaCapturePipelines');
  }

  /**
   * Grants permission to list all media insights pipeline configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_ListMediaInsightsPipelineConfigurations.html
   */
  public toListMediaInsightsPipelineConfigurations() {
    return this.to('ListMediaInsightsPipelineConfigurations');
  }

  /**
   * Grants permission to list media pipelines
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_ListMediaPipelineKinesisVideoStreamPools.html
   */
  public toListMediaPipelineKinesisVideoStreamPools() {
    return this.to('ListMediaPipelineKinesisVideoStreamPools');
  }

  /**
   * Grants permission to list media pipelines
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_ListMediaPipelines.html
   */
  public toListMediaPipelines() {
    return this.to('ListMediaPipelines');
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
   * Grants permission to list all the SubChannels under a single Channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListSubChannels.html
   */
  public toListSubChannels() {
    return this.to('ListSubChannels');
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
   * Access Level: Read
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
   * Grants permission to list voice profile domains
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ListVoiceProfileDomains.html
   */
  public toListVoiceProfileDomains() {
    return this.to('ListVoiceProfileDomains');
  }

  /**
   * Grants permission to list voice profiles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ListVoiceProfiles.html
   */
  public toListVoiceProfiles() {
    return this.to('ListVoiceProfiles');
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
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_PutAppInstanceRetentionSettings.html
   */
  public toPutAppInstanceRetentionSettings() {
    return this.to('PutAppInstanceRetentionSettings');
  }

  /**
   * Grants permission to configure data streaming for the app instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_PutAppInstanceStreamingConfigurations.html
   */
  public toPutAppInstanceStreamingConfigurations() {
    return this.to('PutAppInstanceStreamingConfigurations');
  }

  /**
   * Grants permission to put expiration settings for an AppInstanceUser
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_PutAppInstanceUserExpirationSettings.html
   */
  public toPutAppInstanceUserExpirationSettings() {
    return this.to('PutAppInstanceUserExpirationSettings');
  }

  /**
   * Grants permission to put expiration settings for a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_PutChannelExpirationSettings.html
   */
  public toPutChannelExpirationSettings() {
    return this.to('PutChannelExpirationSettings');
  }

  /**
   * Grants permission to put the preferences for a channel membership
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_PutChannelMembershipPreferences.html
   */
  public toPutChannelMembershipPreferences() {
    return this.to('PutChannelMembershipPreferences');
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
   * Grants permission to put the data streaming configurations of an AppInstance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_PutMessagingStreamingConfigurations.html
   */
  public toPutMessagingStreamingConfigurations() {
    return this.to('PutMessagingStreamingConfigurations');
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
   * Grants permission to update Alexa Skill configuration settings for Amazon Chime SIP media application under the administrator's AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutSipMediaApplicationAlexaSkillConfiguration.html
   */
  public toPutSipMediaApplicationAlexaSkillConfiguration() {
    return this.to('PutSipMediaApplicationAlexaSkillConfiguration');
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
   * Grants permission to update the configuration of the external system that is connected with the specified Amazon Chime Voice Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutVoiceConnectorExternalSystemsConfiguration.html
   */
  public toPutVoiceConnectorExternalSystemsConfiguration() {
    return this.to('PutVoiceConnectorExternalSystemsConfiguration');
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
   * Dependent actions:
   * - chime:GetMediaInsightsPipelineConfiguration
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
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_RedactChannelMessage.html
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
   * Grants permission to register an endpoint for an app instance user
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - mobiletargeting:GetApp
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_RegisterAppInstanceUserEndpoint.html
   */
  public toRegisterAppInstanceUserEndpoint() {
    return this.to('RegisterAppInstanceUserEndpoint');
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
   * Access Level: Read
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
   * Grants permission to search channels that an AppInstanceUser belongs to, or search channels across the AppInstance for an AppInstaceAdmin
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_SearchChannels.html
   */
  public toSearchChannels() {
    return this.to('SearchChannels');
  }

  /**
   * Grants permission to send a message to a particular channel that the member is a part of
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_SendChannelMessage.html
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
   * Grants permission to start transcription for a meeting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_StartMeetingTranscription.html
   */
  public toStartMeetingTranscription() {
    return this.to('StartMeetingTranscription');
  }

  /**
   * Grants permission to start a speaker search task on the specified Amazon Chime resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_StartSpeakerSearchTask.html
   */
  public toStartSpeakerSearchTask() {
    return this.to('StartSpeakerSearchTask');
  }

  /**
   * Grants permission to start a voice tone analysis task on the specified Amazon Chime resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_StartVoiceToneAnalysisTask.html
   */
  public toStartVoiceToneAnalysisTask() {
    return this.to('StartVoiceToneAnalysisTask');
  }

  /**
   * Grants permission to stop transcription for a meeting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_StopMeetingTranscription.html
   */
  public toStopMeetingTranscription() {
    return this.to('StopMeetingTranscription');
  }

  /**
   * Grants permission to stop a speaker search task on the specified Amazon Chime resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_StopSpeakerSearchTask.html
   */
  public toStopSpeakerSearchTask() {
    return this.to('StopSpeakerSearchTask');
  }

  /**
   * Grants permission to stop a voice tone analysis task on the specified Amazon Chime resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_StopVoiceToneAnalysisTask.html
   */
  public toStopVoiceToneAnalysisTask() {
    return this.to('StopVoiceToneAnalysisTask');
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
   * Grants permission to apply the specified tags to the specified resource (tag-based access controls are only supported on *-chime.<region>.amazonaws.com endpoints)
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
   * Grants permission to untag the specified tags from the specified resource (tag-based access controls are only supported on *-chime.<region>.amazonaws.com endpoints)
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
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
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_UpdateAppInstance.html
   */
  public toUpdateAppInstance() {
    return this.to('UpdateAppInstance');
  }

  /**
   * Grants permission to update the details for an AppInstanceBot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_UpdateAppInstanceBot.html
   */
  public toUpdateAppInstanceBot() {
    return this.to('UpdateAppInstanceBot');
  }

  /**
   * Grants permission to update the details for an AppInstanceUser
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_UpdateAppInstanceUser.html
   */
  public toUpdateAppInstanceUser() {
    return this.to('UpdateAppInstanceUser');
  }

  /**
   * Grants permission to update an endpoint registered for an app instance user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_UpdateAppInstanceUserEndpoint.html
   */
  public toUpdateAppInstanceUserEndpoint() {
    return this.to('UpdateAppInstanceUserEndpoint');
  }

  /**
   * Grants permission to the capabilties that you want to update
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_UpdateAttendeeCapabilities.html
   */
  public toUpdateAttendeeCapabilities() {
    return this.to('UpdateAttendeeCapabilities');
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
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_UpdateChannel.html
   */
  public toUpdateChannel() {
    return this.to('UpdateChannel');
  }

  /**
   * Grants permission to update a channel flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_UpdateChannelFlow.html
   */
  public toUpdateChannelFlow() {
    return this.to('UpdateChannelFlow');
  }

  /**
   * Grants permission to update the content of a message
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_UpdateChannelMessage.html
   */
  public toUpdateChannelMessage() {
    return this.to('UpdateChannelMessage');
  }

  /**
   * Grants permission to set the timestamp to the point when a user last read messages in a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_UpdateChannelReadMarker.html
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
   * Grants permission to update the status of a media insights pipeline configuration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - chime:ListVoiceConnectors
   * - iam:PassRole
   * - kinesis:DescribeStream
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_UpdateMediaInsightsPipelineConfiguration.html
   */
  public toUpdateMediaInsightsPipelineConfiguration() {
    return this.to('UpdateMediaInsightsPipelineConfiguration');
  }

  /**
   * Grants permission to update the status of a media insights pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_UpdateMediaInsightsPipelineStatus.html
   */
  public toUpdateMediaInsightsPipelineStatus() {
    return this.to('UpdateMediaInsightsPipelineStatus');
  }

  /**
   * Grants permission to update kinesis video stream pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_UpdateMediaPipelineKinesisVideoStreamPool.html
   */
  public toUpdateMediaPipelineKinesisVideoStreamPool() {
    return this.to('UpdateMediaPipelineKinesisVideoStreamPool');
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
   * Grants permission to update a voice profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_UpdateVoiceProfile.html
   */
  public toUpdateVoiceProfile() {
    return this.to('UpdateVoiceProfile');
  }

  /**
   * Grants permission to update a voice profile domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_UpdateVoiceProfileDomain.html
   */
  public toUpdateVoiceProfileDomain() {
    return this.to('UpdateVoiceProfileDomain');
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

  /**
   * Grants permission to validate an address to be used for 911 calls made with Amazon Chime Voice Connectors
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_ValidateE911Address.html
   */
  public toValidateE911Address() {
    return this.to('ValidateE911Address');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptDelegate',
      'ActivateUsers',
      'AddDomain',
      'AddOrUpdateGroups',
      'AssociateChannelFlow',
      'AssociatePhoneNumberWithUser',
      'AssociatePhoneNumbersWithVoiceConnector',
      'AssociatePhoneNumbersWithVoiceConnectorGroup',
      'AssociateSigninDelegateGroupsWithAccount',
      'AssociateVoiceConnectorConnect',
      'AuthorizeDirectory',
      'BatchCreateAttendee',
      'BatchCreateChannelMembership',
      'BatchCreateRoomMembership',
      'BatchDeletePhoneNumber',
      'BatchSuspendUser',
      'BatchUnsuspendUser',
      'BatchUpdateAttendeeCapabilitiesExcept',
      'BatchUpdatePhoneNumber',
      'BatchUpdateUser',
      'ChannelFlowCallback',
      'Connect',
      'ConnectDirectory',
      'CreateAccount',
      'CreateApiKey',
      'CreateAppInstance',
      'CreateAppInstanceAdmin',
      'CreateAppInstanceBot',
      'CreateAppInstanceUser',
      'CreateAttendee',
      'CreateBot',
      'CreateCDRBucket',
      'CreateChannel',
      'CreateChannelBan',
      'CreateChannelFlow',
      'CreateChannelMembership',
      'CreateChannelModerator',
      'CreateConnectAnalyticsConnector',
      'CreateConnectCallTransferConnector',
      'CreateMediaCapturePipeline',
      'CreateMediaConcatenationPipeline',
      'CreateMediaInsightsPipeline',
      'CreateMediaInsightsPipelineConfiguration',
      'CreateMediaLiveConnectorPipeline',
      'CreateMediaPipelineKinesisVideoStreamPool',
      'CreateMediaStreamPipeline',
      'CreateMeeting',
      'CreateMeetingDialOut',
      'CreateMeetingWithAttendees',
      'CreatePhoneNumberOrder',
      'CreateProxySession',
      'CreateRoom',
      'CreateRoomMembership',
      'CreateSipMediaApplication',
      'CreateSipMediaApplicationCall',
      'CreateSipRule',
      'CreateUser',
      'CreateVoiceConnector',
      'CreateVoiceConnectorGroup',
      'CreateVoiceProfile',
      'CreateVoiceProfileDomain',
      'DeleteAccount',
      'DeleteAccountOpenIdConfig',
      'DeleteApiKey',
      'DeleteAppInstance',
      'DeleteAppInstanceAdmin',
      'DeleteAppInstanceBot',
      'DeleteAppInstanceStreamingConfigurations',
      'DeleteAppInstanceUser',
      'DeleteAttendee',
      'DeleteCDRBucket',
      'DeleteChannel',
      'DeleteChannelBan',
      'DeleteChannelFlow',
      'DeleteChannelMembership',
      'DeleteChannelMessage',
      'DeleteChannelModerator',
      'DeleteDelegate',
      'DeleteDomain',
      'DeleteEventsConfiguration',
      'DeleteGroups',
      'DeleteMediaCapturePipeline',
      'DeleteMediaInsightsPipelineConfiguration',
      'DeleteMediaPipeline',
      'DeleteMediaPipelineKinesisVideoStreamPool',
      'DeleteMeeting',
      'DeleteMessagingStreamingConfigurations',
      'DeletePhoneNumber',
      'DeleteProxySession',
      'DeleteRoom',
      'DeleteRoomMembership',
      'DeleteSipMediaApplication',
      'DeleteSipRule',
      'DeleteVoiceConnector',
      'DeleteVoiceConnectorEmergencyCallingConfiguration',
      'DeleteVoiceConnectorExternalSystemsConfiguration',
      'DeleteVoiceConnectorGroup',
      'DeleteVoiceConnectorOrigination',
      'DeleteVoiceConnectorProxy',
      'DeleteVoiceConnectorStreamingConfiguration',
      'DeleteVoiceConnectorTermination',
      'DeleteVoiceConnectorTerminationCredentials',
      'DeleteVoiceProfile',
      'DeleteVoiceProfileDomain',
      'DeregisterAppInstanceUserEndpoint',
      'DisassociateChannelFlow',
      'DisassociatePhoneNumberFromUser',
      'DisassociatePhoneNumbersFromVoiceConnector',
      'DisassociatePhoneNumbersFromVoiceConnectorGroup',
      'DisassociateSigninDelegateGroupsFromAccount',
      'DisassociateVoiceConnectorConnect',
      'DisconnectDirectory',
      'InviteDelegate',
      'InviteUsers',
      'InviteUsersFromProvider',
      'LogoutUser',
      'PutAppInstanceRetentionSettings',
      'PutAppInstanceStreamingConfigurations',
      'PutAppInstanceUserExpirationSettings',
      'PutChannelExpirationSettings',
      'PutChannelMembershipPreferences',
      'PutEventsConfiguration',
      'PutMessagingStreamingConfigurations',
      'PutRetentionSettings',
      'PutSipMediaApplicationAlexaSkillConfiguration',
      'PutSipMediaApplicationLoggingConfiguration',
      'PutVoiceConnectorEmergencyCallingConfiguration',
      'PutVoiceConnectorExternalSystemsConfiguration',
      'PutVoiceConnectorLoggingConfiguration',
      'PutVoiceConnectorOrigination',
      'PutVoiceConnectorProxy',
      'PutVoiceConnectorStreamingConfiguration',
      'PutVoiceConnectorTermination',
      'PutVoiceConnectorTerminationCredentials',
      'RedactChannelMessage',
      'RedactConversationMessage',
      'RedactRoomMessage',
      'RegenerateSecurityToken',
      'RegisterAppInstanceUserEndpoint',
      'RenameAccount',
      'RenewDelegate',
      'ResetAccountResource',
      'ResetPersonalPIN',
      'RestorePhoneNumber',
      'SendChannelMessage',
      'StartDataExport',
      'StartMeetingTranscription',
      'StartSpeakerSearchTask',
      'StartVoiceToneAnalysisTask',
      'StopMeetingTranscription',
      'StopSpeakerSearchTask',
      'StopVoiceToneAnalysisTask',
      'SubmitSupportRequest',
      'SuspendUsers',
      'UnauthorizeDirectory',
      'UpdateAccount',
      'UpdateAccountOpenIdConfig',
      'UpdateAccountResource',
      'UpdateAccountSettings',
      'UpdateAppInstance',
      'UpdateAppInstanceBot',
      'UpdateAppInstanceUser',
      'UpdateAppInstanceUserEndpoint',
      'UpdateAttendeeCapabilities',
      'UpdateBot',
      'UpdateCDRSettings',
      'UpdateChannel',
      'UpdateChannelFlow',
      'UpdateChannelMessage',
      'UpdateChannelReadMarker',
      'UpdateGlobalSettings',
      'UpdateMediaInsightsPipelineConfiguration',
      'UpdateMediaInsightsPipelineStatus',
      'UpdateMediaPipelineKinesisVideoStreamPool',
      'UpdatePhoneNumber',
      'UpdatePhoneNumberSettings',
      'UpdateProxySession',
      'UpdateRoom',
      'UpdateRoomMembership',
      'UpdateSipMediaApplication',
      'UpdateSipMediaApplicationCall',
      'UpdateSipRule',
      'UpdateSupportedLicenses',
      'UpdateUser',
      'UpdateUserLicenses',
      'UpdateUserSettings',
      'UpdateVoiceConnector',
      'UpdateVoiceConnectorGroup',
      'UpdateVoiceProfile',
      'UpdateVoiceProfileDomain'
    ],
    Read: [
      'DescribeAppInstance',
      'DescribeAppInstanceAdmin',
      'DescribeAppInstanceBot',
      'DescribeAppInstanceUser',
      'DescribeAppInstanceUserEndpoint',
      'DescribeChannel',
      'DescribeChannelBan',
      'DescribeChannelFlow',
      'DescribeChannelMembership',
      'DescribeChannelMembershipForAppInstanceUser',
      'DescribeChannelModeratedByAppInstanceUser',
      'DescribeChannelModerator',
      'GetAccount',
      'GetAccountResource',
      'GetAccountSettings',
      'GetAccountWithOpenIdConfig',
      'GetAppInstanceRetentionSettings',
      'GetAppInstanceStreamingConfigurations',
      'GetAttendee',
      'GetBot',
      'GetCDRBucket',
      'GetChannelMembershipPreferences',
      'GetChannelMessage',
      'GetChannelMessageStatus',
      'GetDomain',
      'GetEventsConfiguration',
      'GetGlobalSettings',
      'GetMediaCapturePipeline',
      'GetMediaInsightsPipelineConfiguration',
      'GetMediaPipeline',
      'GetMediaPipelineKinesisVideoStreamPool',
      'GetMeeting',
      'GetMeetingDetail',
      'GetMessagingSessionEndpoint',
      'GetMessagingStreamingConfigurations',
      'GetPhoneNumber',
      'GetPhoneNumberOrder',
      'GetPhoneNumberSettings',
      'GetProxySession',
      'GetRetentionSettings',
      'GetRoom',
      'GetSipMediaApplication',
      'GetSipMediaApplicationAlexaSkillConfiguration',
      'GetSipMediaApplicationLoggingConfiguration',
      'GetSipRule',
      'GetSpeakerSearchTask',
      'GetTelephonyLimits',
      'GetUser',
      'GetUserActivityReportData',
      'GetUserByEmail',
      'GetUserSettings',
      'GetVoiceConnector',
      'GetVoiceConnectorEmergencyCallingConfiguration',
      'GetVoiceConnectorExternalSystemsConfiguration',
      'GetVoiceConnectorGroup',
      'GetVoiceConnectorLoggingConfiguration',
      'GetVoiceConnectorOrigination',
      'GetVoiceConnectorProxy',
      'GetVoiceConnectorStreamingConfiguration',
      'GetVoiceConnectorTermination',
      'GetVoiceConnectorTerminationHealth',
      'GetVoiceProfile',
      'GetVoiceProfileDomain',
      'GetVoiceToneAnalysisTask',
      'ListChannelMessages',
      'ListTagsForResource',
      'RetrieveDataExports',
      'SearchAvailablePhoneNumbers',
      'ValidateAccountResource',
      'ValidateE911Address'
    ],
    List: [
      'ListAccountUsageReportData',
      'ListAccounts',
      'ListApiKeys',
      'ListAppInstanceAdmins',
      'ListAppInstanceBots',
      'ListAppInstanceUserEndpoints',
      'ListAppInstanceUsers',
      'ListAppInstances',
      'ListAttendeeTags',
      'ListAttendees',
      'ListAvailableVoiceConnectorRegions',
      'ListBots',
      'ListCDRBucket',
      'ListCallingRegions',
      'ListChannelBans',
      'ListChannelFlows',
      'ListChannelMemberships',
      'ListChannelMembershipsForAppInstanceUser',
      'ListChannelModerators',
      'ListChannels',
      'ListChannelsAssociatedWithChannelFlow',
      'ListChannelsModeratedByAppInstanceUser',
      'ListDelegates',
      'ListDirectories',
      'ListDomains',
      'ListGroups',
      'ListMediaCapturePipelines',
      'ListMediaInsightsPipelineConfigurations',
      'ListMediaPipelineKinesisVideoStreamPools',
      'ListMediaPipelines',
      'ListMeetingEvents',
      'ListMeetingTags',
      'ListMeetings',
      'ListMeetingsReportData',
      'ListPhoneNumberOrders',
      'ListPhoneNumbers',
      'ListProxySessions',
      'ListRoomMemberships',
      'ListRooms',
      'ListSipMediaApplications',
      'ListSipRules',
      'ListSubChannels',
      'ListSupportedPhoneNumberCountries',
      'ListUsers',
      'ListVoiceConnectorGroups',
      'ListVoiceConnectorTerminationCredentials',
      'ListVoiceConnectors',
      'ListVoiceProfileDomains',
      'ListVoiceProfiles',
      'SearchChannels'
    ],
    Tagging: [
      'TagAttendee',
      'TagMeeting',
      'TagResource',
      'UntagAttendee',
      'UntagMeeting',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type meeting to the statement
   *
   * https://docs.aws.amazon.com/chime/latest/APIReference/API_Meeting.html
   *
   * @param meetingId - Identifier for the meetingId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMeeting(meetingId: string, accountId?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chime::${ accountId ?? this.defaultAccount }:meeting/${ meetingId }`);
  }

  /**
   * Adds a resource of type app-instance to the statement
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_AppInstance.html
   *
   * @param appInstanceId - Identifier for the appInstanceId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAppInstance(appInstanceId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chime:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:app-instance/${ appInstanceId }`);
  }

  /**
   * Adds a resource of type app-instance-user to the statement
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_AppInstanceUser.html
   *
   * @param appInstanceId - Identifier for the appInstanceId.
   * @param appInstanceUserId - Identifier for the appInstanceUserId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAppInstanceUser(appInstanceId: string, appInstanceUserId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chime:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:app-instance/${ appInstanceId }/user/${ appInstanceUserId }`);
  }

  /**
   * Adds a resource of type app-instance-bot to the statement
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_AppInstanceBot.html
   *
   * @param appInstanceId - Identifier for the appInstanceId.
   * @param appInstanceBotId - Identifier for the appInstanceBotId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAppInstanceBot(appInstanceId: string, appInstanceBotId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chime:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:app-instance/${ appInstanceId }/bot/${ appInstanceBotId }`);
  }

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_Channel.html
   *
   * @param appInstanceId - Identifier for the appInstanceId.
   * @param channelId - Identifier for the channelId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(appInstanceId: string, channelId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chime:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:app-instance/${ appInstanceId }/channel/${ channelId }`);
  }

  /**
   * Adds a resource of type channel-flow to the statement
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ChannelFlow.html
   *
   * @param appInstanceId - Identifier for the appInstanceId.
   * @param channelFlowId - Identifier for the channelFlowId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannelFlow(appInstanceId: string, channelFlowId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chime:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:app-instance/${ appInstanceId }/channel-flow/${ channelFlowId }`);
  }

  /**
   * Adds a resource of type media-pipeline to the statement
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_MediaPipeline.html
   *
   * @param mediaPipelineId - Identifier for the mediaPipelineId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMediaPipeline(mediaPipelineId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chime:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:media-pipeline/${ mediaPipelineId }`);
  }

  /**
   * Adds a resource of type media-insights-pipeline-configuration to the statement
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_MediaInsightsPipelineConfiguration.html
   *
   * @param configurationName - Identifier for the configurationName.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMediaInsightsPipelineConfiguration(configurationName: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chime:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:media-insights-pipeline-configuration/${ configurationName }`);
  }

  /**
   * Adds a resource of type media-pipeline-kinesis-video-stream-pool to the statement
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_KinesisVideoStreamPoolConfiguration.html
   *
   * @param poolName - Identifier for the poolName.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMediaPipelineKinesisVideoStreamPool(poolName: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chime:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:media-pipeline-kinesis-video-stream-pool/${ poolName }`);
  }

  /**
   * Adds a resource of type voice-profile-domain to the statement
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateVoiceProfileDomain.html
   *
   * @param voiceProfileDomainId - Identifier for the voiceProfileDomainId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVoiceProfileDomain(voiceProfileDomainId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chime:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:voice-profile-domain/${ voiceProfileDomainId }`);
  }

  /**
   * Adds a resource of type voice-profile to the statement
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateVoiceProfile.html
   *
   * @param voiceProfileId - Identifier for the voiceProfileId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onVoiceProfile(voiceProfileId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chime:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:voice-profile/${ voiceProfileId }`);
  }

  /**
   * Adds a resource of type voice-connector to the statement
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_VoiceConnector.html
   *
   * @param voiceConnectorId - Identifier for the voiceConnectorId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVoiceConnector(voiceConnectorId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chime:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:vc/${ voiceConnectorId }`);
  }

  /**
   * Adds a resource of type sip-media-application to the statement
   *
   * https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_SipMediaApplication.html
   *
   * @param sipMediaApplicationId - Identifier for the sipMediaApplicationId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSipMediaApplication(sipMediaApplicationId: string, accountId?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:chime:${ region ?? this.defaultRegion }:${ accountId ?? this.defaultAccount }:sma/${ sipMediaApplicationId }`);
  }

  /**
   * Filters access by a tag's key and value in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAppInstance()
   * - .toCreateAppInstanceBot()
   * - .toCreateAppInstanceUser()
   * - .toCreateChannel()
   * - .toCreateChannelFlow()
   * - .toCreateConnectAnalyticsConnector()
   * - .toCreateConnectCallTransferConnector()
   * - .toCreateMediaCapturePipeline()
   * - .toCreateMediaConcatenationPipeline()
   * - .toCreateMediaInsightsPipeline()
   * - .toCreateMediaInsightsPipelineConfiguration()
   * - .toCreateMediaLiveConnectorPipeline()
   * - .toCreateMediaPipelineKinesisVideoStreamPool()
   * - .toCreateMediaStreamPipeline()
   * - .toCreateMeeting()
   * - .toCreateMeetingWithAttendees()
   * - .toCreateSipMediaApplication()
   * - .toCreateVoiceConnector()
   * - .toCreateVoiceProfileDomain()
   * - .toTagMeeting()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toTagMeeting()
   * - .toTagResource()
   *
   * Applies to resource types:
   * - meeting
   * - app-instance
   * - app-instance-user
   * - app-instance-bot
   * - channel
   * - channel-flow
   * - media-pipeline
   * - media-insights-pipeline-configuration
   * - media-pipeline-kinesis-video-stream-pool
   * - voice-profile-domain
   * - voice-connector
   * - sip-media-application
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAppInstance()
   * - .toCreateAppInstanceBot()
   * - .toCreateAppInstanceUser()
   * - .toCreateChannel()
   * - .toCreateChannelFlow()
   * - .toCreateConnectAnalyticsConnector()
   * - .toCreateConnectCallTransferConnector()
   * - .toCreateMediaCapturePipeline()
   * - .toCreateMediaConcatenationPipeline()
   * - .toCreateMediaInsightsPipeline()
   * - .toCreateMediaInsightsPipelineConfiguration()
   * - .toCreateMediaLiveConnectorPipeline()
   * - .toCreateMediaPipelineKinesisVideoStreamPool()
   * - .toCreateMediaStreamPipeline()
   * - .toCreateMeeting()
   * - .toCreateMeetingWithAttendees()
   * - .toCreateSipMediaApplication()
   * - .toCreateVoiceConnector()
   * - .toCreateVoiceProfileDomain()
   * - .toTagMeeting()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
