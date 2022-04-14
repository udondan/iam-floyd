import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_AssociateOriginationIdentity.html
   */
  public toAssociateOriginationIdentity() {
    return this.to('AssociateOriginationIdentity');
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
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_CreateConfigurationSet.html
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
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_CreateEventDestination.html
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
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_CreateOptOutList.html
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
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_CreatePool.html
   */
  public toCreatePool() {
    return this.to('CreatePool');
  }

  /**
   * Grants permission to delete a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DeleteConfigurationSet.html
   */
  public toDeleteConfigurationSet() {
    return this.to('DeleteConfigurationSet');
  }

  /**
   * Grants permission to delete the default message type for a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DeleteDefaultMessageType.html
   */
  public toDeleteDefaultMessageType() {
    return this.to('DeleteDefaultMessageType');
  }

  /**
   * Grants permission to delete the default sender ID for a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DeleteDefaultSenderId.html
   */
  public toDeleteDefaultSenderId() {
    return this.to('DeleteDefaultSenderId');
  }

  /**
   * Grants permission to delete an event destination within a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DeleteEventDestination.html
   */
  public toDeleteEventDestination() {
    return this.to('DeleteEventDestination');
  }

  /**
   * Grants permission to delete a keyword for a pool or origination phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DeleteKeyword.html
   */
  public toDeleteKeyword() {
    return this.to('DeleteKeyword');
  }

  /**
   * Grants permission to delete an opt-out list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DeleteOptOutList.html
   */
  public toDeleteOptOutList() {
    return this.to('DeleteOptOutList');
  }

  /**
   * Grants permission to delete a destination phone number from an opt-out list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DeleteOptedOutNumber.html
   */
  public toDeleteOptedOutNumber() {
    return this.to('DeleteOptedOutNumber');
  }

  /**
   * Grants permission to delete a pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DeletePool.html
   */
  public toDeletePool() {
    return this.to('DeletePool');
  }

  /**
   * Grants permission to delete an override for your account's text messaging monthly spend limit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DeleteTextMessageSpendLimitOverride.html
   */
  public toDeleteTextMessageSpendLimitOverride() {
    return this.to('DeleteTextMessageSpendLimitOverride');
  }

  /**
   * Grants permission to delete an override for your account's voice messaging monthly spend limit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DeleteVoiceMessageSpendLimitOverride.html
   */
  public toDeleteVoiceMessageSpendLimitOverride() {
    return this.to('DeleteVoiceMessageSpendLimitOverride');
  }

  /**
   * Grants permission to describe the attributes of your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    return this.to('DescribeAccountAttributes');
  }

  /**
   * Grants permission to describe the service quotas for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DescribeAccountLimits.html
   */
  public toDescribeAccountLimits() {
    return this.to('DescribeAccountLimits');
  }

  /**
   * Grants permission to describe the configuration sets in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DescribeConfigurationSets.html
   */
  public toDescribeConfigurationSets() {
    return this.to('DescribeConfigurationSets');
  }

  /**
   * Grants permission to describe the keywords for a pool or origination phone number
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DescribeKeywords.html
   */
  public toDescribeKeywords() {
    return this.to('DescribeKeywords');
  }

  /**
   * Grants permission to describe the opt-out lists in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DescribeOptOutLists.html
   */
  public toDescribeOptOutLists() {
    return this.to('DescribeOptOutLists');
  }

  /**
   * Grants permission to describe the destination phone numbers in an opt-out list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DescribeOptedOutNumbers.html
   */
  public toDescribeOptedOutNumbers() {
    return this.to('DescribeOptedOutNumbers');
  }

  /**
   * Grants permission to describe the origination phone numbers in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DescribePhoneNumbers.html
   */
  public toDescribePhoneNumbers() {
    return this.to('DescribePhoneNumbers');
  }

  /**
   * Grants permission to describe the pools in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DescribePools.html
   */
  public toDescribePools() {
    return this.to('DescribePools');
  }

  /**
   * Grants permission to describe the sender IDs in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DescribeSenderIds.html
   */
  public toDescribeSenderIds() {
    return this.to('DescribeSenderIds');
  }

  /**
   * Grants permission to describe the monthly spend limits for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DescribeSpendLimits.html
   */
  public toDescribeSpendLimits() {
    return this.to('DescribeSpendLimits');
  }

  /**
   * Grants permission to disassociate an origination phone number or sender ID from a pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DisassociateOriginationIdentity.html
   */
  public toDisassociateOriginationIdentity() {
    return this.to('DisassociateOriginationIdentity');
  }

  /**
   * Grants permission to list all origination phone numbers and sender IDs associated to a pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_ListPoolOriginationIdentities.html
   */
  public toListPoolOriginationIdentities() {
    return this.to('ListPoolOriginationIdentities');
  }

  /**
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create or update a keyword for a pool or origination phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_PutKeyword.html
   */
  public toPutKeyword() {
    return this.to('PutKeyword');
  }

  /**
   * Grants permission to put a destination phone number into an opt-out list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_PutOptedOutNumber.html
   */
  public toPutOptedOutNumber() {
    return this.to('PutOptedOutNumber');
  }

  /**
   * Grants permission to release an origination phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_ReleasePhoneNumber.html
   */
  public toReleasePhoneNumber() {
    return this.to('ReleasePhoneNumber');
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
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_RequestPhoneNumber.html
   */
  public toRequestPhoneNumber() {
    return this.to('RequestPhoneNumber');
  }

  /**
   * Grants permission to send a text message to a destination phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_SendTextMessage.html
   */
  public toSendTextMessage() {
    return this.to('SendTextMessage');
  }

  /**
   * Grants permission to send a voice message to a destination phone number
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_SendVoiceMessage.html
   */
  public toSendVoiceMessage() {
    return this.to('SendVoiceMessage');
  }

  /**
   * Grants permission to set the default message type for a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_SetDefaultMessageType.html
   */
  public toSetDefaultMessageType() {
    return this.to('SetDefaultMessageType');
  }

  /**
   * Grants permission to set the default sender ID for a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_SetDefaultSenderId.html
   */
  public toSetDefaultSenderId() {
    return this.to('SetDefaultSenderId');
  }

  /**
   * Grants permission to set an override for your account's text messaging monthly spend limit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_SetTextMessageSpendLimitOverride.html
   */
  public toSetTextMessageSpendLimitOverride() {
    return this.to('SetTextMessageSpendLimitOverride');
  }

  /**
   * Grants permission to set an override for your account's voice messaging monthly spend limit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_SetVoiceMessageSpendLimitOverride.html
   */
  public toSetVoiceMessageSpendLimitOverride() {
    return this.to('SetVoiceMessageSpendLimitOverride');
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
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_TagResource.html
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
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_UntagResource.html
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
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_UpdateEventDestination.html
   */
  public toUpdateEventDestination() {
    return this.to('UpdateEventDestination');
  }

  /**
   * Grants permission to update an origination phone number's configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_UpdatePhoneNumber.html
   */
  public toUpdatePhoneNumber() {
    return this.to('UpdatePhoneNumber');
  }

  /**
   * Grants permission to update a pool's configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_UpdatePool.html
   */
  public toUpdatePool() {
    return this.to('UpdatePool');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateOriginationIdentity',
      'CreateConfigurationSet',
      'CreateEventDestination',
      'CreateOptOutList',
      'CreatePool',
      'DeleteConfigurationSet',
      'DeleteDefaultMessageType',
      'DeleteDefaultSenderId',
      'DeleteEventDestination',
      'DeleteKeyword',
      'DeleteOptOutList',
      'DeleteOptedOutNumber',
      'DeletePool',
      'DeleteTextMessageSpendLimitOverride',
      'DeleteVoiceMessageSpendLimitOverride',
      'DisassociateOriginationIdentity',
      'PutKeyword',
      'PutOptedOutNumber',
      'ReleasePhoneNumber',
      'RequestPhoneNumber',
      'SendTextMessage',
      'SendVoiceMessage',
      'SetDefaultMessageType',
      'SetDefaultSenderId',
      'SetTextMessageSpendLimitOverride',
      'SetVoiceMessageSpendLimitOverride',
      'UpdateEventDestination',
      'UpdatePhoneNumber',
      'UpdatePool'
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
      'DescribeSenderIds',
      'DescribeSpendLimits',
      'ListPoolOriginationIdentities',
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
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_CreateConfigurationSet.html
   *
   * @param configurationSetName - Identifier for the configurationSetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfigurationSet(configurationSetName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SmsVoiceV2.defaultPartition }:sms-voice:${ region || '*' }:${ account || '*' }:configuration-set/${ configurationSetName }`);
  }

  /**
   * Adds a resource of type OptOutList to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_CreateOptOutList.html
   *
   * @param optOutListName - Identifier for the optOutListName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOptOutList(optOutListName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SmsVoiceV2.defaultPartition }:sms-voice:${ region || '*' }:${ account || '*' }:opt-out-list/${ optOutListName }`);
  }

  /**
   * Adds a resource of type PhoneNumber to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_RequestPhoneNumber.html
   *
   * @param phoneNumberId - Identifier for the phoneNumberId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPhoneNumber(phoneNumberId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SmsVoiceV2.defaultPartition }:sms-voice:${ region || '*' }:${ account || '*' }:phone-number/${ phoneNumberId }`);
  }

  /**
   * Adds a resource of type Pool to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_CreatePool.html
   *
   * @param poolId - Identifier for the poolId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPool(poolId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SmsVoiceV2.defaultPartition }:sms-voice:${ region || '*' }:${ account || '*' }:pool/${ poolId }`);
  }

  /**
   * Adds a resource of type SenderId to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-sms-voice-v2/latest/apireference/API_DescribeSenderIds.html
   *
   * @param senderId - Identifier for the senderId.
   * @param isoCountryCode - Identifier for the isoCountryCode.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSenderId(senderId: string, isoCountryCode: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SmsVoiceV2.defaultPartition }:sms-voice:${ region || '*' }:${ account || '*' }:sender-id/${ senderId }/${ isoCountryCode }`);
  }
}
