import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [notifications](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsusernotifications.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Notifications extends PolicyStatement {
  public servicePrefix = 'notifications';

  /**
   * Statement provider for service [notifications](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsusernotifications.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a new Channel with a particular NotificationConfiguration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toAssociateChannel() {
    return this.to('AssociateChannel');
  }

  /**
   * Grants permission to create a new EventRule, associating it with a NotificationConfiguration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toCreateEventRule() {
    return this.to('CreateEventRule');
  }

  /**
   * Grants permission to create a NotificationConfiguration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toCreateNotificationConfiguration() {
    return this.to('CreateNotificationConfiguration');
  }

  /**
   * Grants permission to delete an EventRule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toDeleteEventRule() {
    return this.to('DeleteEventRule');
  }

  /**
   * Grants permission to delete a NotificationConfiguration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toDeleteNotificationConfiguration() {
    return this.to('DeleteNotificationConfiguration');
  }

  /**
   * Grants permission to deregister a NotificationHub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toDeregisterNotificationHub() {
    return this.to('DeregisterNotificationHub');
  }

  /**
   * Grants permission to remove a Channel from a NotificationConfiguration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toDisassociateChannel() {
    return this.to('DisassociateChannel');
  }

  /**
   * Grants permission to get an EventRule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toGetEventRule() {
    return this.to('GetEventRule');
  }

  /**
   * Grants permission to get a NotificationConfiguration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toGetNotificationConfiguration() {
    return this.to('GetNotificationConfiguration');
  }

  /**
   * Grants permission to get a NotificationEvent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toGetNotificationEvent() {
    return this.to('GetNotificationEvent');
  }

  /**
   * Grants permission to list Channels by NotificationConfiguration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toListChannels() {
    return this.to('ListChannels');
  }

  /**
   * Grants permission to list EventRules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toListEventRules() {
    return this.to('ListEventRules');
  }

  /**
   * Grants permission to list NotificationConfigurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toListNotificationConfigurations() {
    return this.to('ListNotificationConfigurations');
  }

  /**
   * Grants permission to list NotificationEvents
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toListNotificationEvents() {
    return this.to('ListNotificationEvents');
  }

  /**
   * Grants permission to list NotificationHubs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toListNotificationHubs() {
    return this.to('ListNotificationHubs');
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
   * Grants permission to register a NotificationHub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toRegisterNotificationHub() {
    return this.to('RegisterNotificationHub');
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

  /**
   * Grants permission to update an EventRule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toUpdateEventRule() {
    return this.to('UpdateEventRule');
  }

  /**
   * Grants permission to update a NotificationConfiguration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   */
  public toUpdateNotificationConfiguration() {
    return this.to('UpdateNotificationConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateChannel',
      'CreateEventRule',
      'CreateNotificationConfiguration',
      'DeleteEventRule',
      'DeleteNotificationConfiguration',
      'DeregisterNotificationHub',
      'DisassociateChannel',
      'RegisterNotificationHub',
      'UpdateEventRule',
      'UpdateNotificationConfiguration'
    ],
    Read: [
      'GetEventRule',
      'GetNotificationConfiguration',
      'GetNotificationEvent',
      'ListTagsForResource'
    ],
    List: [
      'ListChannels',
      'ListEventRules',
      'ListNotificationConfigurations',
      'ListNotificationEvents',
      'ListNotificationHubs'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type EventRule to the statement
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   *
   * @param notificationConfigurationId - Identifier for the notificationConfigurationId.
   * @param eventRuleId - Identifier for the eventRuleId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEventRule(notificationConfigurationId: string, eventRuleId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:notifications::${ account || this.defaultAccount }:configuration/${ notificationConfigurationId }/rule/${ eventRuleId }`);
  }

  /**
   * Adds a resource of type NotificationConfiguration to the statement
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   *
   * @param notificationConfigurationId - Identifier for the notificationConfigurationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNotificationConfiguration(notificationConfigurationId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:notifications::${ account || this.defaultAccount }:configuration/${ notificationConfigurationId }`);
  }

  /**
   * Adds a resource of type NotificationEvent to the statement
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   *
   * @param notificationConfigurationId - Identifier for the notificationConfigurationId.
   * @param notificationEventId - Identifier for the notificationEventId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onNotificationEvent(notificationConfigurationId: string, notificationEventId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:notifications:${ region || this.defaultRegion }:${ account || this.defaultAccount }:configuration/${ notificationConfigurationId }/event/${ notificationEventId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateNotificationConfiguration()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - NotificationConfiguration
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateNotificationConfiguration()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
