import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [notifications-contacts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsusernotificationscontacts.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class NotificationsContacts extends PolicyStatement {
  public servicePrefix = 'notifications-contacts';

  /**
   * Statement provider for service [notifications-contacts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsusernotificationscontacts.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to activate the email contact associated with the given ARN if the provided code is valid
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toActivateEmailContact() {
    return this.to('ActivateEmailContact');
  }

  /**
   * Grants permission to create an email contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toCreateEmailContact() {
    return this.to('CreateEmailContact');
  }

  /**
   * Grants permission to delete an email contact associated with the given ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toDeleteEmailContact() {
    return this.to('DeleteEmailContact');
  }

  /**
   * Grants permission to get an email contact associated with the given ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toGetEmailContact() {
    return this.to('GetEmailContact');
  }

  /**
   * Grants permission to list email contacts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toListEmailContacts() {
    return this.to('ListEmailContacts');
  }

  /**
   * Grants permission to get tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to send an activation link to the email associated with the given ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toSendActivationCode() {
    return this.to('SendActivationCode');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
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
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ActivateEmailContact',
      'CreateEmailContact',
      'DeleteEmailContact',
      'SendActivationCode'
    ],
    Read: [
      'GetEmailContact',
      'ListTagsForResource'
    ],
    List: [
      'ListEmailContacts'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type EmailContactResource to the statement
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   *
   * @param emailContactId - Identifier for the emailContactId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEmailContactResource(emailContactId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:notifications-contacts::${ account ?? this.defaultAccount }:emailcontact/${ emailContactId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateEmailContact()
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
   * - EmailContactResource
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
   * - .toCreateEmailContact()
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
