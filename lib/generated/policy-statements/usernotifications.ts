import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_AssociateChannel.html
   */
  public toAssociateChannel() {
    return this.to('AssociateChannel');
  }

  /**
   * Grants permission to associate an Account contact to a particular Managed Notification Configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_AssociateManagedNotificationAccountContact.html
   */
  public toAssociateManagedNotificationAccountContact() {
    return this.to('AssociateManagedNotificationAccountContact');
  }

  /**
   * Grants permission to associate a Channel to a particular Managed Notification Configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_AssociateManagedNotificationAdditionalChannel.html
   */
  public toAssociateManagedNotificationAdditionalChannel() {
    return this.to('AssociateManagedNotificationAdditionalChannel');
  }

  /**
   * Grants permission to create a new EventRule, associating it with a NotificationConfiguration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_CreateEventRule.html
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
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_CreateNotificationConfiguration.html
   */
  public toCreateNotificationConfiguration() {
    return this.to('CreateNotificationConfiguration');
  }

  /**
   * Grants permission to delete an EventRule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_DeleteEventRule.html
   */
  public toDeleteEventRule() {
    return this.to('DeleteEventRule');
  }

  /**
   * Grants permission to delete a NotificationConfiguration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_DeleteNotificationConfiguration.html
   */
  public toDeleteNotificationConfiguration() {
    return this.to('DeleteNotificationConfiguration');
  }

  /**
   * Grants permission to deregister a NotificationHub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_DeregisterNotificationHub.html
   */
  public toDeregisterNotificationHub() {
    return this.to('DeregisterNotificationHub');
  }

  /**
   * Grants permission to disable Service Trust for AWS User Notifications
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - organizations:DisableAWSServiceAccess
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_DisableNotificationsAccessForOrganization.html
   */
  public toDisableNotificationsAccessForOrganization() {
    return this.to('DisableNotificationsAccessForOrganization');
  }

  /**
   * Grants permission to remove a Channel from a NotificationConfiguration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_DisassociateChannel.html
   */
  public toDisassociateChannel() {
    return this.to('DisassociateChannel');
  }

  /**
   * Grants permission to remove an Account contact from a Managed Notification Configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_DisassociateManagedNotificationAccountContact.html
   */
  public toDisassociateManagedNotificationAccountContact() {
    return this.to('DisassociateManagedNotificationAccountContact');
  }

  /**
   * Grants permission to remove a Channel from a Managed Notification Configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_DisassociateManagedNotificationAdditionalChannel.html
   */
  public toDisassociateManagedNotificationAdditionalChannel() {
    return this.to('DisassociateManagedNotificationAdditionalChannel');
  }

  /**
   * Grants permission to enable Service Trust for AWS User Notifications
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - organizations:EnableAWSServiceAccess
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_EnableNotificationsAccessForOrganization.html
   */
  public toEnableNotificationsAccessForOrganization() {
    return this.to('EnableNotificationsAccessForOrganization');
  }

  /**
   * Grants permission to get an EventRule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_GetEventRule.html
   */
  public toGetEventRule() {
    return this.to('GetEventRule');
  }

  /**
   * Grants permission to read the opt-in status of an AWS User Notification Service feature
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/managing-notification-features.html
   */
  public toGetFeatureOptInStatus() {
    return this.to('GetFeatureOptInStatus');
  }

  /**
   * Grants permission to get a Managed Notification Child Event
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_GetManagedNotificationChildEvent.html
   */
  public toGetManagedNotificationChildEvent() {
    return this.to('GetManagedNotificationChildEvent');
  }

  /**
   * Grants permission to get a Managed Notification Configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_GetManagedNotificationConfiguration.html
   */
  public toGetManagedNotificationConfiguration() {
    return this.to('GetManagedNotificationConfiguration');
  }

  /**
   * Grants permission to get a Managed NotificationEvent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_GetManagedNotificationEvent.html
   */
  public toGetManagedNotificationEvent() {
    return this.to('GetManagedNotificationEvent');
  }

  /**
   * Grants permission to get a NotificationConfiguration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_GetNotificationConfiguration.html
   */
  public toGetNotificationConfiguration() {
    return this.to('GetNotificationConfiguration');
  }

  /**
   * Grants permission to get a NotificationEvent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_GetNotificationEvent.html
   */
  public toGetNotificationEvent() {
    return this.to('GetNotificationEvent');
  }

  /**
   * Grants permission to read Service Trust for AWS User Notifications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_GetNotificationsAccessForOrganization.html
   */
  public toGetNotificationsAccessForOrganization() {
    return this.to('GetNotificationsAccessForOrganization');
  }

  /**
   * Grants permission to list Channels by NotificationConfiguration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListChannels.html
   */
  public toListChannels() {
    return this.to('ListChannels');
  }

  /**
   * Grants permission to list EventRules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListEventRules.html
   */
  public toListEventRules() {
    return this.to('ListEventRules');
  }

  /**
   * Grants permission to list Account contacts and Channels associated with a Managed Notification Configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListManagedNotificationChannelAssociations.html
   */
  public toListManagedNotificationChannelAssociations() {
    return this.to('ListManagedNotificationChannelAssociations');
  }

  /**
   * Grants permission to list Managed Notification Child Events
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListManagedNotificationChildEvents.html
   */
  public toListManagedNotificationChildEvents() {
    return this.to('ListManagedNotificationChildEvents');
  }

  /**
   * Grants permission to list Managed Notification Configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListManagedNotificationConfigurations.html
   */
  public toListManagedNotificationConfigurations() {
    return this.to('ListManagedNotificationConfigurations');
  }

  /**
   * Grants permission to list Managed Notification Events
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListManagedNotificationEvents.html
   */
  public toListManagedNotificationEvents() {
    return this.to('ListManagedNotificationEvents');
  }

  /**
   * Grants permission to list NotificationConfigurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListNotificationConfigurations.html
   */
  public toListNotificationConfigurations() {
    return this.to('ListNotificationConfigurations');
  }

  /**
   * Grants permission to list NotificationEvents
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListNotificationEvents.html
   */
  public toListNotificationEvents() {
    return this.to('ListNotificationEvents');
  }

  /**
   * Grants permission to list NotificationHubs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListNotificationHubs.html
   */
  public toListNotificationHubs() {
    return this.to('ListNotificationHubs');
  }

  /**
   * Grants permission to get tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to update the opt-in status of an AWS User Notification Service feature
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/managing-notification-features.html
   */
  public toPutFeatureOptInStatus() {
    return this.to('PutFeatureOptInStatus');
  }

  /**
   * Grants permission to register a NotificationHub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_RegisterNotificationHub.html
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
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_TagResource.html
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
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an EventRule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_UpdateEventRule.html
   */
  public toUpdateEventRule() {
    return this.to('UpdateEventRule');
  }

  /**
   * Grants permission to update a NotificationConfiguration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/notifications/latest/APIReference/API_UpdateNotificationConfiguration.html
   */
  public toUpdateNotificationConfiguration() {
    return this.to('UpdateNotificationConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateChannel',
      'AssociateManagedNotificationAccountContact',
      'AssociateManagedNotificationAdditionalChannel',
      'CreateEventRule',
      'CreateNotificationConfiguration',
      'DeleteEventRule',
      'DeleteNotificationConfiguration',
      'DeregisterNotificationHub',
      'DisableNotificationsAccessForOrganization',
      'DisassociateChannel',
      'DisassociateManagedNotificationAccountContact',
      'DisassociateManagedNotificationAdditionalChannel',
      'EnableNotificationsAccessForOrganization',
      'PutFeatureOptInStatus',
      'RegisterNotificationHub',
      'UpdateEventRule',
      'UpdateNotificationConfiguration'
    ],
    Read: [
      'GetEventRule',
      'GetFeatureOptInStatus',
      'GetManagedNotificationChildEvent',
      'GetManagedNotificationConfiguration',
      'GetManagedNotificationEvent',
      'GetNotificationConfiguration',
      'GetNotificationEvent',
      'GetNotificationsAccessForOrganization'
    ],
    List: [
      'ListChannels',
      'ListEventRules',
      'ListManagedNotificationChannelAssociations',
      'ListManagedNotificationChildEvents',
      'ListManagedNotificationConfigurations',
      'ListManagedNotificationEvents',
      'ListNotificationConfigurations',
      'ListNotificationEvents',
      'ListNotificationHubs',
      'ListTagsForResource'
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:notifications::${ account ?? this.defaultAccount }:configuration/${ notificationConfigurationId }/rule/${ eventRuleId }`);
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:notifications::${ account ?? this.defaultAccount }:configuration/${ notificationConfigurationId }`);
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:notifications:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:configuration/${ notificationConfigurationId }/event/${ notificationEventId }`);
  }

  /**
   * Adds a resource of type ManagedNotificationChildEvent to the statement
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   *
   * @param category - Identifier for the category.
   * @param subcategory - Identifier for the subcategory.
   * @param notificationEventId - Identifier for the notificationEventId.
   * @param notificationChildEventId - Identifier for the notificationChildEventId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onManagedNotificationChildEvent(category: string, subcategory: string, notificationEventId: string, notificationChildEventId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:notifications::${ account ?? this.defaultAccount }:managed-notification-configuration/category/${ category }/sub-category/${ subcategory }/event/${ notificationEventId }/child-event/${ notificationChildEventId }`);
  }

  /**
   * Adds a resource of type ManagedNotificationConfiguration to the statement
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   *
   * @param category - Identifier for the category.
   * @param subcategory - Identifier for the subcategory.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onManagedNotificationConfiguration(category: string, subcategory: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:notifications::${ account ?? this.defaultAccount }:managed-notification-configuration/category/${ category }/sub-category/${ subcategory }`);
  }

  /**
   * Adds a resource of type ManagedNotificationEvent to the statement
   *
   * https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html
   *
   * @param category - Identifier for the category.
   * @param subcategory - Identifier for the subcategory.
   * @param notificationEventId - Identifier for the notificationEventId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onManagedNotificationEvent(category: string, subcategory: string, notificationEventId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:notifications::${ account ?? this.defaultAccount }:managed-notification-configuration/category/${ category }/sub-category/${ subcategory }/event/${ notificationEventId }`);
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
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
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
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
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
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
