import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [social-messaging](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsendusermessagingsocial.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SocialMessaging extends PolicyStatement {
  public servicePrefix = 'social-messaging';

  /**
   * Statement provider for service [social-messaging](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsendusermessagingsocial.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a WhatsApp Business Account with your AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_AssociateWhatsAppBusinessAccount.html
   */
  public toAssociateWhatsAppBusinessAccount() {
    return this.to('AssociateWhatsAppBusinessAccount');
  }

  /**
   * Grants permission to create a WhatsApp message template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_CreateWhatsAppMessageTemplate.html
   */
  public toCreateWhatsAppMessageTemplate() {
    return this.to('CreateWhatsAppMessageTemplate');
  }

  /**
   * Grants permission to create a WhatsApp message template from Meta's template library
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_CreateWhatsAppMessageTemplateFromLibrary.html
   */
  public toCreateWhatsAppMessageTemplateFromLibrary() {
    return this.to('CreateWhatsAppMessageTemplateFromLibrary');
  }

  /**
   * Grants permission to create media for WhatsApp message templates
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_CreateWhatsAppMessageTemplateMedia.html
   */
  public toCreateWhatsAppMessageTemplateMedia() {
    return this.to('CreateWhatsAppMessageTemplateMedia');
  }

  /**
   * Grants permission to delete a media object from WhatsApp
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_DeleteWhatsAppMessageMedia.html
   */
  public toDeleteWhatsAppMessageMedia() {
    return this.to('DeleteWhatsAppMessageMedia');
  }

  /**
   * Grants permission to delete a WhatsApp message template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_DeleteWhatsAppMessageTemplate.html
   */
  public toDeleteWhatsAppMessageTemplate() {
    return this.to('DeleteWhatsAppMessageTemplate');
  }

  /**
   * Grants permission to disassociate a WhatsApp Business Account from your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_DisassociateWhatsAppBusinessAccount.html
   */
  public toDisassociateWhatsAppBusinessAccount() {
    return this.to('DisassociateWhatsAppBusinessAccount');
  }

  /**
   * Grants permission to view the details of a WhatsApp Business Account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_GetLinkedWhatsAppBusinessAccount.html
   */
  public toGetLinkedWhatsAppBusinessAccount() {
    return this.to('GetLinkedWhatsAppBusinessAccount');
  }

  /**
   * Grants permission to view the details of a phone number
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_GetLinkedWhatsAppBusinessAccountPhoneNumber.html
   */
  public toGetLinkedWhatsAppBusinessAccountPhoneNumber() {
    return this.to('GetLinkedWhatsAppBusinessAccountPhoneNumber');
  }

  /**
   * Grants permission to get a media object from WhatsApp
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_GetWhatsAppMessageMedia.html
   */
  public toGetWhatsAppMessageMedia() {
    return this.to('GetWhatsAppMessageMedia');
  }

  /**
   * Grants permission to get details of a WhatsApp message template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_GetWhatsAppMessageTemplate.html
   */
  public toGetWhatsAppMessageTemplate() {
    return this.to('GetWhatsAppMessageTemplate');
  }

  /**
   * Grants permission to view all of your WhatsApp Business Accounts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_ListLinkedWhatsAppBusinessAccounts.html
   */
  public toListLinkedWhatsAppBusinessAccounts() {
    return this.to('ListLinkedWhatsAppBusinessAccounts');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list WhatsApp message templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_ListWhatsAppMessageTemplates.html
   */
  public toListWhatsAppMessageTemplates() {
    return this.to('ListWhatsAppMessageTemplates');
  }

  /**
   * Grants permission to list available templates from Meta's template library
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_ListWhatsAppTemplateLibrary.html
   */
  public toListWhatsAppTemplateLibrary() {
    return this.to('ListWhatsAppTemplateLibrary');
  }

  /**
   * Grants permission to upload a media object to WhatsApp
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_PostWhatsAppMessageMedia.html
   */
  public toPostWhatsAppMessageMedia() {
    return this.to('PostWhatsAppMessageMedia');
  }

  /**
   * Grants permission to update a WhatsApp Business Accounts event destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_PutWhatsAppBusinessAccountEventDestinations.html
   */
  public toPutWhatsAppBusinessAccountEventDestinations() {
    return this.to('PutWhatsAppBusinessAccountEventDestinations');
  }

  /**
   * Grants permission to send a message through WhatsApp
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_SendWhatsAppMessage.html
   */
  public toSendWhatsAppMessage() {
    return this.to('SendWhatsAppMessage');
  }

  /**
   * Grants permission to add a tag to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a WhatsApp message template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_UpdateWhatsAppMessageTemplate.html
   */
  public toUpdateWhatsAppMessageTemplate() {
    return this.to('UpdateWhatsAppMessageTemplate');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateWhatsAppBusinessAccount',
      'CreateWhatsAppMessageTemplate',
      'CreateWhatsAppMessageTemplateFromLibrary',
      'CreateWhatsAppMessageTemplateMedia',
      'DeleteWhatsAppMessageMedia',
      'DeleteWhatsAppMessageTemplate',
      'DisassociateWhatsAppBusinessAccount',
      'GetWhatsAppMessageMedia',
      'PostWhatsAppMessageMedia',
      'PutWhatsAppBusinessAccountEventDestinations',
      'SendWhatsAppMessage',
      'UpdateWhatsAppMessageTemplate'
    ],
    Read: [
      'GetLinkedWhatsAppBusinessAccount',
      'GetLinkedWhatsAppBusinessAccountPhoneNumber',
      'GetWhatsAppMessageTemplate',
      'ListTagsForResource'
    ],
    List: [
      'ListLinkedWhatsAppBusinessAccounts',
      'ListWhatsAppMessageTemplates',
      'ListWhatsAppTemplateLibrary'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type phone-number-id to the statement
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_WhatsAppPhoneNumberDetail.html
   *
   * @param originationPhoneNumberId - Identifier for the originationPhoneNumberId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPhoneNumberId(originationPhoneNumberId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:social-messaging:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:phone-number-id/${ originationPhoneNumberId }`);
  }

  /**
   * Adds a resource of type waba to the statement
   *
   * https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_LinkedWhatsAppBusinessAccountSummary.html
   *
   * @param wabaId - Identifier for the wabaId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWaba(wabaId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:social-messaging:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:waba/${ wabaId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAssociateWhatsAppBusinessAccount()
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
   * Applies to actions:
   * - .toAssociateWhatsAppBusinessAccount()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - phone-number-id
   * - waba
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
   * - .toAssociateWhatsAppBusinessAccount()
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
