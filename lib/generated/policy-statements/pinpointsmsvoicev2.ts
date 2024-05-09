import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [sms-voice-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointsmsvoicev2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SmsVoiceV2 extends PolicyStatement {
  public servicePrefix = 'sms-voice';

  /**
   * Statement provider for service [sms-voice-v2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointsmsvoicev2.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate an origination phone number or sender ID to a pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_AssociateOriginationIdentity.html
   */
  public toAssociateOriginationIdentity() {
    return this.to('AssociateOriginationIdentity');
  }

  /**
   * Grants permission to associate a protect configuration to a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_AssociateProtectConfiguration.html
   */
  public toAssociateProtectConfiguration() {
    return this.to('AssociateProtectConfiguration');
  }

  /**
   * Grants permission to create a configuration set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - sms-voice:TagResource
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateConfigurationSet.html
   */
  public toCreateConfigurationSet() {
    return this.to('CreateConfigurationSet');
  }

  /**
   * Grants permission to create an event destination within a configuration set
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateEventDestination.html
   */
  public toCreateEventDestination() {
    return this.to('CreateEventDestination');
  }

  /**
   * Grants permission to create an opt-out list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - sms-voice:TagResource
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateOptOutList.html
   */
  public toCreateOptOutList() {
    return this.to('CreateOptOutList');
  }

  /**
   * Grants permission to create a pool
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - sms-voice:TagResource
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreatePool.html
   */
  public toCreatePool() {
    return this.to('CreatePool');
  }

  /**
   * Grants permission to create a protect configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - sms-voice:TagResource
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateProtectConfiguration.html
   */
  public toCreateProtectConfiguration() {
    return this.to('CreateProtectConfiguration');
  }

  /**
   * Grants permission to create a registration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - sms-voice:TagResource
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateRegistration.html
   */
  public toCreateRegistration() {
    return this.to('CreateRegistration');
  }

  /**
   * Grants permission to associate a registration with a phone number or another registration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateRegistrationAssociation.html
   */
  public toCreateRegistrationAssociation() {
    return this.to('CreateRegistrationAssociation');
  }

  /**
   * Grants permission to create a registration attachment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - sms-voice:TagResource
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateRegistrationAttachment.html
   */
  public toCreateRegistrationAttachment() {
    return this.to('CreateRegistrationAttachment');
  }

  /**
   * Grants permission to create a registration version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateRegistrationVersion.html
   */
  public toCreateRegistrationVersion() {
    return this.to('CreateRegistrationVersion');
  }

  /**
   * Grants permission to create a verified destination number
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - sms-voice:TagResource
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateVerifiedDestinationNumber.html
   */
  public toCreateVerifiedDestinationNumber() {
    return this.to('CreateVerifiedDestinationNumber');
  }

  /**
   * Grants permission to delete the account default protect configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteAccountDefaultProtectConfiguration.html
   */
  public toDeleteAccountDefaultProtectConfiguration() {
    return this.to('DeleteAccountDefaultProtectConfiguration');
  }

  /**
   * Grants permission to delete a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteConfigurationSet.html
   */
  public toDeleteConfigurationSet() {
    return this.to('DeleteConfigurationSet');
  }

  /**
   * Grants permission to delete the default message type for a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteDefaultMessageType.html
   */
  public toDeleteDefaultMessageType() {
    return this.to('DeleteDefaultMessageType');
  }

  /**
   * Grants permission to delete the default sender ID for a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteDefaultSenderId.html
   */
  public toDeleteDefaultSenderId() {
    return this.to('DeleteDefaultSenderId');
  }

  /**
   * Grants permission to delete an event destination within a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteEventDestination.html
   */
  public toDeleteEventDestination() {
    return this.to('DeleteEventDestination');
  }

  /**
   * Grants permission to delete a keyword for a pool or origination phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteKeyword.html
   */
  public toDeleteKeyword() {
    return this.to('DeleteKeyword');
  }

  /**
   * Grants permission to delete an override for your account's media messaging monthly spend limit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteMediaMessageSpendLimitOverride.html
   */
  public toDeleteMediaMessageSpendLimitOverride() {
    return this.to('DeleteMediaMessageSpendLimitOverride');
  }

  /**
   * Grants permission to delete an opt-out list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteOptOutList.html
   */
  public toDeleteOptOutList() {
    return this.to('DeleteOptOutList');
  }

  /**
   * Grants permission to delete a destination phone number from an opt-out list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteOptedOutNumber.html
   */
  public toDeleteOptedOutNumber() {
    return this.to('DeleteOptedOutNumber');
  }

  /**
   * Grants permission to delete a pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeletePool.html
   */
  public toDeletePool() {
    return this.to('DeletePool');
  }

  /**
   * Grants permission to delete a protect configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteProtectConfiguration.html
   */
  public toDeleteProtectConfiguration() {
    return this.to('DeleteProtectConfiguration');
  }

  /**
   * Grants permission to delete a registration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteRegistration.html
   */
  public toDeleteRegistration() {
    return this.to('DeleteRegistration');
  }

  /**
   * Grants permission to delete a registration attachment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteRegistrationAttachment.html
   */
  public toDeleteRegistrationAttachment() {
    return this.to('DeleteRegistrationAttachment');
  }

  /**
   * Grants permission to delete an optional registration field value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteRegistrationFieldValue.html
   */
  public toDeleteRegistrationFieldValue() {
    return this.to('DeleteRegistrationFieldValue');
  }

  /**
   * Grants permission to delete an override for your account's text messaging monthly spend limit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteTextMessageSpendLimitOverride.html
   */
  public toDeleteTextMessageSpendLimitOverride() {
    return this.to('DeleteTextMessageSpendLimitOverride');
  }

  /**
   * Grants permission to delete a verified destination number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteVerifiedDestinationNumber.html
   */
  public toDeleteVerifiedDestinationNumber() {
    return this.to('DeleteVerifiedDestinationNumber');
  }

  /**
   * Grants permission to delete an override for your account's voice messaging monthly spend limit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteVoiceMessageSpendLimitOverride.html
   */
  public toDeleteVoiceMessageSpendLimitOverride() {
    return this.to('DeleteVoiceMessageSpendLimitOverride');
  }

  /**
   * Grants permission to describe the attributes of your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    return this.to('DescribeAccountAttributes');
  }

  /**
   * Grants permission to describe the service quotas for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeAccountLimits.html
   */
  public toDescribeAccountLimits() {
    return this.to('DescribeAccountLimits');
  }

  /**
   * Grants permission to describe the configuration sets in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeConfigurationSets.html
   */
  public toDescribeConfigurationSets() {
    return this.to('DescribeConfigurationSets');
  }

  /**
   * Grants permission to describe the keywords for a pool or origination phone number
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeKeywords.html
   */
  public toDescribeKeywords() {
    return this.to('DescribeKeywords');
  }

  /**
   * Grants permission to describe the opt-out lists in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeOptOutLists.html
   */
  public toDescribeOptOutLists() {
    return this.to('DescribeOptOutLists');
  }

  /**
   * Grants permission to describe the destination phone numbers in an opt-out list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeOptedOutNumbers.html
   */
  public toDescribeOptedOutNumbers() {
    return this.to('DescribeOptedOutNumbers');
  }

  /**
   * Grants permission to describe the origination phone numbers in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribePhoneNumbers.html
   */
  public toDescribePhoneNumbers() {
    return this.to('DescribePhoneNumbers');
  }

  /**
   * Grants permission to describe the pools in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribePools.html
   */
  public toDescribePools() {
    return this.to('DescribePools');
  }

  /**
   * Grants permission to describe the protect configurations in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeProtectConfigurations.html
   */
  public toDescribeProtectConfigurations() {
    return this.to('DescribeProtectConfigurations');
  }

  /**
   * Grants permission to describe the registration attachments in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribePools.html
   */
  public toDescribeRegistrationAttachments() {
    return this.to('DescribeRegistrationAttachments');
  }

  /**
   * Grants permission to describe the field definitions for a given registration type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeRegistrationFieldDefinitions.html
   */
  public toDescribeRegistrationFieldDefinitions() {
    return this.to('DescribeRegistrationFieldDefinitions');
  }

  /**
   * Grants permission to describe the field values for a given registration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeRegistrationFieldValues.html
   */
  public toDescribeRegistrationFieldValues() {
    return this.to('DescribeRegistrationFieldValues');
  }

  /**
   * Grants permission to describe the section definitions for a given registration type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeRegistrationSectionDefinitions.html
   */
  public toDescribeRegistrationSectionDefinitions() {
    return this.to('DescribeRegistrationSectionDefinitions');
  }

  /**
   * Grants permission to describe the registration types supported by the service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeRegistrationTypeDefinitions.html
   */
  public toDescribeRegistrationTypeDefinitions() {
    return this.to('DescribeRegistrationTypeDefinitions');
  }

  /**
   * Grants permission to describe the versions for a given registration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeRegistrationVersions.html
   */
  public toDescribeRegistrationVersions() {
    return this.to('DescribeRegistrationVersions');
  }

  /**
   * Grants permission to describe the registrations in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeRegistrations.html
   */
  public toDescribeRegistrations() {
    return this.to('DescribeRegistrations');
  }

  /**
   * Grants permission to describe the sender IDs in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeSenderIds.html
   */
  public toDescribeSenderIds() {
    return this.to('DescribeSenderIds');
  }

  /**
   * Grants permission to describe the monthly spend limits for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeSpendLimits.html
   */
  public toDescribeSpendLimits() {
    return this.to('DescribeSpendLimits');
  }

  /**
   * Grants permission to describe the verified destination numbers in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeVerifiedDestinationNumbers.html
   */
  public toDescribeVerifiedDestinationNumbers() {
    return this.to('DescribeVerifiedDestinationNumbers');
  }

  /**
   * Grants permission to disassociate an origination phone number or sender ID from a pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DisassociateOriginationIdentity.html
   */
  public toDisassociateOriginationIdentity() {
    return this.to('DisassociateOriginationIdentity');
  }

  /**
   * Grants permission to disassociate a protect configuration from a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DisassociateProtectConfiguration.html
   */
  public toDisassociateProtectConfiguration() {
    return this.to('DisassociateProtectConfiguration');
  }

  /**
   * Grants permission to discard the latest version of a given registration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DiscardRegistrationVersion.html
   */
  public toDiscardRegistrationVersion() {
    return this.to('DiscardRegistrationVersion');
  }

  /**
   * Grants permission to get the country rule set for a protect configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_GetProtectConfigurationCountryRuleSet.html
   */
  public toGetProtectConfigurationCountryRuleSet() {
    return this.to('GetProtectConfigurationCountryRuleSet');
  }

  /**
   * Grants permission to list all origination phone numbers and sender IDs associated to a pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_ListPoolOriginationIdentities.html
   */
  public toListPoolOriginationIdentities() {
    return this.to('ListPoolOriginationIdentities');
  }

  /**
   * Grants permission to list all resources associated to a registration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_ListRegistrationAssociations.html
   */
  public toListRegistrationAssociations() {
    return this.to('ListRegistrationAssociations');
  }

  /**
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create or update a keyword for a pool or origination phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_PutKeyword.html
   */
  public toPutKeyword() {
    return this.to('PutKeyword');
  }

  /**
   * Grants permission to put a destination phone number into an opt-out list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_PutOptedOutNumber.html
   */
  public toPutOptedOutNumber() {
    return this.to('PutOptedOutNumber');
  }

  /**
   * Grants permission to put a registration field value
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_PutRegistrationFieldValue.html
   */
  public toPutRegistrationFieldValue() {
    return this.to('PutRegistrationFieldValue');
  }

  /**
   * Grants permission to release an origination phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_ReleasePhoneNumber.html
   */
  public toReleasePhoneNumber() {
    return this.to('ReleasePhoneNumber');
  }

  /**
   * Grants permission to release a sender ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_ReleaseSenderId.html
   */
  public toReleaseSenderId() {
    return this.to('ReleaseSenderId');
  }

  /**
   * Grants permission to request an origination phone number
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - sms-voice:AssociateOriginationIdentity
   * - sms-voice:TagResource
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_RequestPhoneNumber.html
   */
  public toRequestPhoneNumber() {
    return this.to('RequestPhoneNumber');
  }

  /**
   * Grants permission to request an unregistered sender ID
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - sms-voice:TagResource
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_RequestSenderId.html
   */
  public toRequestSenderId() {
    return this.to('RequestSenderId');
  }

  /**
   * Grants permission to send a text or voice message containing a verification code to a destination phone number
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sms-voice:SendTextMessage
   * - sms-voice:SendVoiceMessage
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SendDestinationNumberVerificationCode.html
   */
  public toSendDestinationNumberVerificationCode() {
    return this.to('SendDestinationNumberVerificationCode');
  }

  /**
   * Grants permission to send a media message to a destination phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SendMediaMessage.html
   */
  public toSendMediaMessage() {
    return this.to('SendMediaMessage');
  }

  /**
   * Grants permission to send a text message to a destination phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SendTextMessage.html
   */
  public toSendTextMessage() {
    return this.to('SendTextMessage');
  }

  /**
   * Grants permission to send a voice message to a destination phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SendVoiceMessage.html
   */
  public toSendVoiceMessage() {
    return this.to('SendVoiceMessage');
  }

  /**
   * Grants permission to set a default protect configuration for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SetAccountDefaultProtectConfiguration.html
   */
  public toSetAccountDefaultProtectConfiguration() {
    return this.to('SetAccountDefaultProtectConfiguration');
  }

  /**
   * Grants permission to set the default message type for a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SetDefaultMessageType.html
   */
  public toSetDefaultMessageType() {
    return this.to('SetDefaultMessageType');
  }

  /**
   * Grants permission to set the default sender ID for a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SetDefaultSenderId.html
   */
  public toSetDefaultSenderId() {
    return this.to('SetDefaultSenderId');
  }

  /**
   * Grants permission to set an override for your account's media messaging monthly spend limit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SetMediaMessageSpendLimitOverride.html
   */
  public toSetMediaMessageSpendLimitOverride() {
    return this.to('SetMediaMessageSpendLimitOverride');
  }

  /**
   * Grants permission to set an override for your account's text messaging monthly spend limit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SetTextMessageSpendLimitOverride.html
   */
  public toSetTextMessageSpendLimitOverride() {
    return this.to('SetTextMessageSpendLimitOverride');
  }

  /**
   * Grants permission to set an override for your account's voice messaging monthly spend limit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SetVoiceMessageSpendLimitOverride.html
   */
  public toSetVoiceMessageSpendLimitOverride() {
    return this.to('SetVoiceMessageSpendLimitOverride');
  }

  /**
   * Grants permission to submit the latest version of a given registration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SubmitRegistrationVersion.html
   */
  public toSubmitRegistrationVersion() {
    return this.to('SubmitRegistrationVersion');
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an event destination within a configuration set
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdateEventDestination.html
   */
  public toUpdateEventDestination() {
    return this.to('UpdateEventDestination');
  }

  /**
   * Grants permission to update an origination phone number's configuration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdatePhoneNumber.html
   */
  public toUpdatePhoneNumber() {
    return this.to('UpdatePhoneNumber');
  }

  /**
   * Grants permission to update a pool's configuration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdatePool.html
   */
  public toUpdatePool() {
    return this.to('UpdatePool');
  }

  /**
   * Grants permission to update a protect configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdateProtectConfiguration.html
   */
  public toUpdateProtectConfiguration() {
    return this.to('UpdateProtectConfiguration');
  }

  /**
   * Grants permission to update a country rule set for a protect configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdateProtectConfigurationCountryRuleSet.html
   */
  public toUpdateProtectConfigurationCountryRuleSet() {
    return this.to('UpdateProtectConfigurationCountryRuleSet');
  }

  /**
   * Grants permission to update a sender ID's configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdateSenderId.html
   */
  public toUpdateSenderId() {
    return this.to('UpdateSenderId');
  }

  /**
   * Grants permission to verify a destination phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_VerifyDestinationNumber.html
   */
  public toVerifyDestinationNumber() {
    return this.to('VerifyDestinationNumber');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateOriginationIdentity',
      'AssociateProtectConfiguration',
      'CreateConfigurationSet',
      'CreateEventDestination',
      'CreateOptOutList',
      'CreatePool',
      'CreateProtectConfiguration',
      'CreateRegistration',
      'CreateRegistrationAssociation',
      'CreateRegistrationAttachment',
      'CreateRegistrationVersion',
      'CreateVerifiedDestinationNumber',
      'DeleteAccountDefaultProtectConfiguration',
      'DeleteConfigurationSet',
      'DeleteDefaultMessageType',
      'DeleteDefaultSenderId',
      'DeleteEventDestination',
      'DeleteKeyword',
      'DeleteMediaMessageSpendLimitOverride',
      'DeleteOptOutList',
      'DeleteOptedOutNumber',
      'DeletePool',
      'DeleteProtectConfiguration',
      'DeleteRegistration',
      'DeleteRegistrationAttachment',
      'DeleteRegistrationFieldValue',
      'DeleteTextMessageSpendLimitOverride',
      'DeleteVerifiedDestinationNumber',
      'DeleteVoiceMessageSpendLimitOverride',
      'DisassociateOriginationIdentity',
      'DisassociateProtectConfiguration',
      'DiscardRegistrationVersion',
      'PutKeyword',
      'PutOptedOutNumber',
      'PutRegistrationFieldValue',
      'ReleasePhoneNumber',
      'ReleaseSenderId',
      'RequestPhoneNumber',
      'RequestSenderId',
      'SendDestinationNumberVerificationCode',
      'SendMediaMessage',
      'SendTextMessage',
      'SendVoiceMessage',
      'SetAccountDefaultProtectConfiguration',
      'SetDefaultMessageType',
      'SetDefaultSenderId',
      'SetMediaMessageSpendLimitOverride',
      'SetTextMessageSpendLimitOverride',
      'SetVoiceMessageSpendLimitOverride',
      'SubmitRegistrationVersion',
      'UpdateEventDestination',
      'UpdatePhoneNumber',
      'UpdatePool',
      'UpdateProtectConfiguration',
      'UpdateProtectConfigurationCountryRuleSet',
      'UpdateSenderId',
      'VerifyDestinationNumber'
    ],
    Read: [
      'DescribeAccountAttributes',
      'DescribeAccountLimits',
      'DescribeConfigurationSets',
      'DescribeKeywords',
      'DescribeOptOutLists',
      'DescribeOptedOutNumbers',
      'DescribePhoneNumbers',
      'DescribePools',
      'DescribeProtectConfigurations',
      'DescribeRegistrationAttachments',
      'DescribeRegistrationFieldDefinitions',
      'DescribeRegistrationFieldValues',
      'DescribeRegistrationSectionDefinitions',
      'DescribeRegistrationTypeDefinitions',
      'DescribeRegistrationVersions',
      'DescribeRegistrations',
      'DescribeSenderIds',
      'DescribeSpendLimits',
      'DescribeVerifiedDestinationNumbers',
      'GetProtectConfigurationCountryRuleSet',
      'ListPoolOriginationIdentities',
      'ListRegistrationAssociations',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type ConfigurationSet to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateConfigurationSet.html
   *
   * @param configurationSetName - Identifier for the configurationSetName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfigurationSet(configurationSetName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sms-voice:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:configuration-set/${ configurationSetName }`);
  }

  /**
   * Adds a resource of type OptOutList to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateOptOutList.html
   *
   * @param optOutListName - Identifier for the optOutListName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOptOutList(optOutListName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sms-voice:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:opt-out-list/${ optOutListName }`);
  }

  /**
   * Adds a resource of type PhoneNumber to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_RequestPhoneNumber.html
   *
   * @param phoneNumberId - Identifier for the phoneNumberId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPhoneNumber(phoneNumberId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sms-voice:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:phone-number/${ phoneNumberId }`);
  }

  /**
   * Adds a resource of type Pool to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreatePool.html
   *
   * @param poolId - Identifier for the poolId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPool(poolId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sms-voice:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:pool/${ poolId }`);
  }

  /**
   * Adds a resource of type ProtectConfiguration to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateProtectConfiguration.html
   *
   * @param protectConfigurationId - Identifier for the protectConfigurationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProtectConfiguration(protectConfigurationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sms-voice:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:protect-configuration/${ protectConfigurationId }`);
  }

  /**
   * Adds a resource of type SenderId to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeSenderIds.html
   *
   * @param senderId - Identifier for the senderId.
   * @param isoCountryCode - Identifier for the isoCountryCode.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSenderId(senderId: string, isoCountryCode: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sms-voice:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:sender-id/${ senderId }/${ isoCountryCode }`);
  }

  /**
   * Adds a resource of type Registration to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeRegistrations.html
   *
   * @param registrationId - Identifier for the registrationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRegistration(registrationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sms-voice:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:registration/${ registrationId }`);
  }

  /**
   * Adds a resource of type RegistrationAttachment to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeRegistrationAttachments.html
   *
   * @param registrationAttachmentId - Identifier for the registrationAttachmentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRegistrationAttachment(registrationAttachmentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sms-voice:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:registration-attachment/${ registrationAttachmentId }`);
  }

  /**
   * Adds a resource of type VerifiedDestinationNumber to the statement
   *
   * https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeVerifiedDestinationNumbers.html
   *
   * @param verifiedDestinationNumberId - Identifier for the verifiedDestinationNumberId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVerifiedDestinationNumber(verifiedDestinationNumberId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sms-voice:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:verified-destination-number/${ verifiedDestinationNumberId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateConfigurationSet()
   * - .toCreateOptOutList()
   * - .toCreatePool()
   * - .toCreateProtectConfiguration()
   * - .toCreateRegistration()
   * - .toCreateRegistrationAttachment()
   * - .toCreateVerifiedDestinationNumber()
   * - .toRequestPhoneNumber()
   * - .toRequestSenderId()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - ConfigurationSet
   * - OptOutList
   * - PhoneNumber
   * - Pool
   * - ProtectConfiguration
   * - SenderId
   * - Registration
   * - RegistrationAttachment
   * - VerifiedDestinationNumber
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateConfigurationSet()
   * - .toCreateOptOutList()
   * - .toCreatePool()
   * - .toCreateProtectConfiguration()
   * - .toCreateRegistration()
   * - .toCreateRegistrationAttachment()
   * - .toCreateVerifiedDestinationNumber()
   * - .toRequestPhoneNumber()
   * - .toRequestSenderId()
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
