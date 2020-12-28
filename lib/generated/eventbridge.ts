import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [events](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridge.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Events extends PolicyStatement {
  public servicePrefix = 'events';

  /**
   * Statement provider for service [events](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridge.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to activate partner event sources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html
   */
  public toActivateEventSource() {
    return this.to('ActivateEventSource');
  }

  /**
   * Grants permission to cancel a replay
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CancelReplay.html
   */
  public toCancelReplay() {
    return this.to('CancelReplay');
  }

  /**
   * Grants permission to create a new archive
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateArchive.html
   */
  public toCreateArchive() {
    return this.to('CreateArchive');
  }

  /**
   * Grants permission to create event buses
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html
   */
  public toCreateEventBus() {
    return this.to('CreateEventBus');
  }

  /**
   * Grants permission to create partner event sources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreatePartnerEventSource.html
   */
  public toCreatePartnerEventSource() {
    return this.to('CreatePartnerEventSource');
  }

  /**
   * Grants permission to deactivate event sources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeactivateEventSource.html
   */
  public toDeactivateEventSource() {
    return this.to('DeactivateEventSource');
  }

  /**
   * Grants permission to delete an archive
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteArchive.html
   */
  public toDeleteArchive() {
    return this.to('DeleteArchive');
  }

  /**
   * Grants permission to delete event buses
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeletePartnerEventSource
   */
  public toDeleteEventBus() {
    return this.to('DeleteEventBus');
  }

  /**
   * Grants permission to delete partner event sources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeletePartnerEventSource
   */
  public toDeletePartnerEventSource() {
    return this.to('DeletePartnerEventSource');
  }

  /**
   * Grants permission to delete rules
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCreatorAccount()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteRule.html
   */
  public toDeleteRule() {
    return this.to('DeleteRule');
  }

  /**
   * Grants permission to retrieve details about an archive
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeArchive.html
   */
  public toDescribeArchive() {
    return this.to('DescribeArchive');
  }

  /**
   * Grants permission to retrieve details about event buses
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html
   */
  public toDescribeEventBus() {
    return this.to('DescribeEventBus');
  }

  /**
   * Grants permission to retrieve details about event sources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html
   */
  public toDescribeEventSource() {
    return this.to('DescribeEventSource');
  }

  /**
   * Grants permission to retrieve details about partner event sources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribePartnerEventSource.html
   */
  public toDescribePartnerEventSource() {
    return this.to('DescribePartnerEventSource');
  }

  /**
   * Grants permission to retrieve the details of a replay
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeReplay.html
   */
  public toDescribeReplay() {
    return this.to('DescribeReplay');
  }

  /**
   * Grants permission to retrieve details about rules
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCreatorAccount()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeRule.html
   */
  public toDescribeRule() {
    return this.to('DescribeRule');
  }

  /**
   * Grants permission to disable rules
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCreatorAccount()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html
   */
  public toDisableRule() {
    return this.to('DisableRule');
  }

  /**
   * Grants permissions to enable rules
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCreatorAccount()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_EnableRule.html
   */
  public toEnableRule() {
    return this.to('EnableRule');
  }

  /**
   * Grants permission to retrieve a list of archives
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListArchives.html
   */
  public toListArchives() {
    return this.to('ListArchives');
  }

  /**
   * Grants permission to to retrieve a list of the event buses in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListEventBuses.html
   */
  public toListEventBuses() {
    return this.to('ListEventBuses');
  }

  /**
   * Grants permission to to retrieve a list of event sources shared with this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListEventSources.html
   */
  public toListEventSources() {
    return this.to('ListEventSources');
  }

  /**
   * Grants permission to retrieve a list of AWS account IDs associated with an event source
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListPartnerEventSourceAccounts.html
   */
  public toListPartnerEventSourceAccounts() {
    return this.to('ListPartnerEventSourceAccounts');
  }

  /**
   * Grants permission to retrieve a list partner event sources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListPartnerEventSources.html
   */
  public toListPartnerEventSources() {
    return this.to('ListPartnerEventSources');
  }

  /**
   * Grants permission to retrieve a list of replays
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListReplays.html
   */
  public toListReplays() {
    return this.to('ListReplays');
  }

  /**
   * Grants permission to retrieve a list of the names of the rules associated with a target
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListRuleNamesByTarget.html
   */
  public toListRuleNamesByTarget() {
    return this.to('ListRuleNamesByTarget');
  }

  /**
   * Grants permission to retrieve a list of the Amazon EventBridge rules in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListRules.html
   */
  public toListRules() {
    return this.to('ListRules');
  }

  /**
   * Grants permission to retrieve a list of tags associated with an Amazon EventBridge resource
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCreatorAccount()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve a list of targets defined for a rule
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCreatorAccount()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html
   */
  public toListTargetsByRule() {
    return this.to('ListTargetsByRule');
  }

  /**
   * Grants permission to send custom events to Amazon EventBridge
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDetailType()
   * - .ifSource()
   * - .ifEventBusInvocation()
   * - .ifAwsSourceArn()
   * - .ifAwsSourceAccount()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html
   */
  public toPutEvents() {
    return this.to('PutEvents');
  }

  /**
   * Grants permission to sends custom events to Amazon EventBridge
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPartnerEvents.html
   */
  public toPutPartnerEvents() {
    return this.to('PutPartnerEvents');
  }

  /**
   * Grants permission to use the PutPermission action to grants permission to another AWS account to put events to your default event bus
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html
   */
  public toPutPermission() {
    return this.to('PutPermission');
  }

  /**
   * Grants permission to create or updates rules
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifDetailUserIdentityPrincipalId()
   * - .ifDetailType()
   * - .ifSource()
   * - .ifDetailService()
   * - .ifDetailEventTypeCode()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCreatorAccount()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutRule.html
   */
  public toPutRule() {
    return this.to('PutRule');
  }

  /**
   * Grants permission to add targets to a rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTargetArn()
   * - .ifCreatorAccount()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html
   */
  public toPutTargets() {
    return this.to('PutTargets');
  }

  /**
   * Grants permission to revoke the permission of another AWS account to put events to your default event bus
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemovePermission.html
   */
  public toRemovePermission() {
    return this.to('RemovePermission');
  }

  /**
   * Grants permission to removes targets from a rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCreatorAccount()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html
   */
  public toRemoveTargets() {
    return this.to('RemoveTargets');
  }

  /**
   * Grants permission to start a replay of an archive
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_StartReplay.html
   */
  public toStartReplay() {
    return this.to('StartReplay');
  }

  /**
   * Grants permission to add a tag to an Amazon EventBridge resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifCreatorAccount()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permissions to test whether an event pattern matches the provided event
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TestEventPattern.html
   */
  public toTestEventPattern() {
    return this.to('TestEventPattern');
  }

  /**
   * Grants permission to remove a tag from an Amazon EventBridge resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifCreatorAccount()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an archive
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateArchive.html
   */
  public toUpdateArchive() {
    return this.to('UpdateArchive');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "ActivateEventSource",
      "CancelReplay",
      "CreateArchive",
      "CreateEventBus",
      "CreatePartnerEventSource",
      "DeactivateEventSource",
      "DeleteArchive",
      "DeleteEventBus",
      "DeletePartnerEventSource",
      "DeleteRule",
      "DisableRule",
      "EnableRule",
      "PutEvents",
      "PutPartnerEvents",
      "PutPermission",
      "PutTargets",
      "RemovePermission",
      "RemoveTargets",
      "StartReplay",
      "UpdateArchive"
    ],
    "Read": [
      "DescribeArchive",
      "DescribeEventBus",
      "DescribeEventSource",
      "DescribePartnerEventSource",
      "DescribeReplay",
      "DescribeRule",
      "TestEventPattern"
    ],
    "List": [
      "ListArchives",
      "ListEventBuses",
      "ListEventSources",
      "ListPartnerEventSourceAccounts",
      "ListPartnerEventSources",
      "ListReplays",
      "ListRuleNamesByTarget",
      "ListRules",
      "ListTagsForResource",
      "ListTargetsByRule"
    ],
    "Tagging": [
      "PutRule",
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type event-source to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   *
   * @param eventSourceName - Identifier for the eventSourceName.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEventSource(eventSourceName: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:events:${Region}::event-source/${EventSourceName}';
    arn = arn.replace('${EventSourceName}', eventSourceName);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type event-bus to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   *
   * @param eventBusName - Identifier for the eventBusName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventBus(eventBusName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:events:${Region}:${Account}:event-bus/${EventBusName}';
    arn = arn.replace('${EventBusName}', eventBusName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type rule to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   *
   * @param ruleName - Identifier for the ruleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRule(ruleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:events:${Region}:${Account}:rule/${RuleName}';
    arn = arn.replace('${RuleName}', ruleName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type archive to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   *
   * @param archiveName - Identifier for the archiveName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onArchive(archiveName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:events:${Region}:${Account}:archive/${ArchiveName}';
    arn = arn.replace('${ArchiveName}', archiveName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type replay to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   *
   * @param replayName - Identifier for the replayName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onReplay(replayName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:events:${Region}:${Account}:replay/${ReplayName}';
    arn = arn.replace('${ReplayName}', replayName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Used internally by AWS services. If a rule is created by an AWS service on your behalf, the value is the principal name of the service that created the rule.
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifManagedBy(value: string | string[], operator?: Operator | string) {
    return this.if(`ManagedBy`, value, operator || 'StringLike');
  }

  /**
   * The ARN of a target that can be put to a rule.
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limiting-access-to-targets
   *
   * Applies to actions:
   * - .toPutTargets()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifTargetArn(value: string | string[], operator?: Operator | string) {
    return this.if(`TargetArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters actions based on the account the rule was created in
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-creator-account
   *
   * Applies to actions:
   * - .toDeleteRule()
   * - .toDescribeRule()
   * - .toDisableRule()
   * - .toEnableRule()
   * - .toListTagsForResource()
   * - .toListTargetsByRule()
   * - .toPutRule()
   * - .toPutTargets()
   * - .toRemoveTargets()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCreatorAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`creatorAccount`, value, operator || 'StringLike');
  }

  /**
   * Matches the literal string of the detail-type filed of the event.
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-pattern-detail-type
   *
   * Applies to actions:
   * - .toPutEvents()
   * - .toPutRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDetailType(value: string | string[], operator?: Operator | string) {
    return this.if(`detail-type`, value, operator || 'StringLike');
  }

  /**
   * Matches the literal string for the detail.eventTypeCode field of the event.
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limit-rule-by-type-code
   *
   * Applies to actions:
   * - .toPutRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDetailEventTypeCode(value: string | string[], operator?: Operator | string) {
    return this.if(`detail.eventTypeCode`, value, operator || 'StringLike');
  }

  /**
   * Matches the literal string for the detail.service field of the event.
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limit-rule-by-service
   *
   * Applies to actions:
   * - .toPutRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDetailService(value: string | string[], operator?: Operator | string) {
    return this.if(`detail.service`, value, operator || 'StringLike');
  }

  /**
   * Matches the literal string for the detail.useridentity.principalid field of the event.
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#consume-specific-events
   *
   * Applies to actions:
   * - .toPutRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDetailUserIdentityPrincipalId(value: string | string[], operator?: Operator | string) {
    return this.if(`detail.userIdentity.principalId`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on whether the event was generated via API or cross-account bus invocation
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-bus-invocation
   *
   * Applies to actions:
   * - .toPutEvents()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEventBusInvocation(value: string | string[], operator?: Operator | string) {
    return this.if(`eventBusInvocation`, value, operator || 'StringLike');
  }

  /**
   * The AWS service or AWS partner event source that generated the event. Matches the literal string of the source field of the event.
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-limit-access-control
   *
   * Applies to actions:
   * - .toPutEvents()
   * - .toPutRule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSource(value: string | string[], operator?: Operator | string) {
    return this.if(`source`, value, operator || 'StringLike');
  }
}
