import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [codestar-notifications](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestarnotifications.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CodestarNotifications extends PolicyStatement {
  public servicePrefix = 'codestar-notifications';

  /**
   * Statement provider for service [codestar-notifications](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestarnotifications.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a notification rule for a resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNotificationsForResource()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_CreateNotificationRule.html
   */
  public toCreateNotificationRule() {
    return this.to('CreateNotificationRule');
  }

  /**
   * Grants permission to delete a notification rule for a resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNotificationsForResource()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DeleteNotificationRule.html
   */
  public toDeleteNotificationRule() {
    return this.to('DeleteNotificationRule');
  }

  /**
   * Grants permission to delete a target for a notification rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DeleteTarget.html
   */
  public toDeleteTarget() {
    return this.to('DeleteTarget');
  }

  /**
   * Grants permission to get information about a notification rule
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNotificationsForResource()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DescribeNotificationRule.html
   */
  public toDescribeNotificationRule() {
    return this.to('DescribeNotificationRule');
  }

  /**
   * Grants permission to list notifications event types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListEventTypes.html
   */
  public toListEventTypes() {
    return this.to('ListEventTypes');
  }

  /**
   * Grants permission to list notification rules in an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListNotificationRules.html
   */
  public toListNotificationRules() {
    return this.to('ListNotificationRules');
  }

  /**
   * Grants permission to list the tags attached to a notification rule resource ARN
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the notification rule targets for an AWS account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListTargets.html
   */
  public toListTargets() {
    return this.to('ListTargets');
  }

  /**
   * Grants permission to create an association between a notification rule and an Amazon SNS topic
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNotificationsForResource()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_Subscribe.html
   */
  public toSubscribe() {
    return this.to('Subscribe');
  }

  /**
   * Grants permission to attach resource tags to a notification rule resource ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove an association between a notification rule and an Amazon SNS topic
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNotificationsForResource()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_Unsubscribe.html
   */
  public toUnsubscribe() {
    return this.to('Unsubscribe');
  }

  /**
   * Grants permission to disassociate resource tags from a notification rule resource ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to change a notification rule for a resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNotificationsForResource()
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_UpdateNotificationRule.html
   */
  public toUpdateNotificationRule() {
    return this.to('UpdateNotificationRule');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateNotificationRule',
      'DeleteNotificationRule',
      'DeleteTarget',
      'Subscribe',
      'Unsubscribe',
      'UpdateNotificationRule'
    ],
    Read: [
      'DescribeNotificationRule'
    ],
    List: [
      'ListEventTypes',
      'ListNotificationRules',
      'ListTagsForResource',
      'ListTargets'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type notificationrule to the statement
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/userguide/security_iam_service-with-iam.html
   *
   * @param notificationRuleId - Identifier for the notificationRuleId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNotificationrule(notificationRuleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:codestar-notifications:${ region || '*' }:${ account || '*' }:notificationrule/${ notificationRuleId }`);
  }

  /**
   * Filters access based on the ARN of the resource for which notifications are configured
   *
   * https://docs.aws.amazon.com/codestar-notifications/latest/userguide/security_iam_id-based-policy-examples.html
   *
   * Applies to actions:
   * - .toCreateNotificationRule()
   * - .toDeleteNotificationRule()
   * - .toDescribeNotificationRule()
   * - .toSubscribe()
   * - .toUnsubscribe()
   * - .toUpdateNotificationRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifNotificationsForResource(value: string | string[], operator?: Operator | string) {
    return this.if(`NotificationsForResource`, value, operator || 'ArnLike');
  }
}
