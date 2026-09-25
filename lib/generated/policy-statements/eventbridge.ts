import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [events](https://docs.aws.amazon.com/service-authorization/latest/reference/list_eventbridge.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Events extends PolicyStatement {
  public servicePrefix = 'events';

  /**
   * Statement provider for service [events](https://docs.aws.amazon.com/service-authorization/latest/reference/list_eventbridge.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
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
   * Grants permission to create a new api destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateApiDestination.html
   */
  public toCreateApiDestination() {
    return this.to('CreateApiDestination');
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
   * Grants permission to create a new connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateConnection.html
   */
  public toCreateConnection() {
    return this.to('CreateConnection');
  }

  /**
   * Grants permission to create an endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEndpoint.html
   */
  public toCreateEndpoint() {
    return this.to('CreateEndpoint');
  }

  /**
   * Grants permission to create event buses
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html
   */
  public toCreateEventBus() {
    return this.to('CreateEventBus');
  }

  /**
   * Grants permission to create an event source that forwards events to an event bus
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventSource.html
   */
  public toCreateEventSource() {
    return this.to('CreateEventSource');
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
   * Grants permission to create a subscriber
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateSubscriber.html
   */
  public toCreateSubscriber() {
    return this.to('CreateSubscriber');
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
   * Grants permission to deauthorize a connection, deleting its stored authorization secrets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeauthorizeConnection.html
   */
  public toDeauthorizeConnection() {
    return this.to('DeauthorizeConnection');
  }

  /**
   * Grants permission to delete an api destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteApiDestination.html
   */
  public toDeleteApiDestination() {
    return this.to('DeleteApiDestination');
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
   * Grants permission to delete a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteConnection.html
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to delete an endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteEndpoint.html
   */
  public toDeleteEndpoint() {
    return this.to('DeleteEndpoint');
  }

  /**
   * Grants permission to delete event buses
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteEventBus.html
   */
  public toDeleteEventBus() {
    return this.to('DeleteEventBus');
  }

  /**
   * Grants permission to delete an event source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteEventSource.html
   */
  public toDeleteEventSource() {
    return this.to('DeleteEventSource');
  }

  /**
   * Grants permission to delete partner event sources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeletePartnerEventSource.html
   */
  public toDeletePartnerEventSource() {
    return this.to('DeletePartnerEventSource');
  }

  /**
   * Grants permission to delete a resource policy attached to an event bus
   *
   * Access Level: Permissions management, Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteRule.html
   */
  public toDeleteRule() {
    return this.to('DeleteRule');
  }

  /**
   * Grants permission to delete a subscriber
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteSubscriber.html
   */
  public toDeleteSubscriber() {
    return this.to('DeleteSubscriber');
  }

  /**
   * Grants permission to retrieve details about an api destination
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeApiDestination.html
   */
  public toDescribeApiDestination() {
    return this.to('DescribeApiDestination');
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
   * Grants permission to retrieve details about a conection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeConnection.html
   */
  public toDescribeConnection() {
    return this.to('DescribeConnection');
  }

  /**
   * Grants permission to retrieve details about an endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEndpoint.html
   */
  public toDescribeEndpoint() {
    return this.to('DescribeEndpoint');
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
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeRule.html
   */
  public toDescribeRule() {
    return this.to('DescribeRule');
  }

  /**
   * Grants permission to retrieve details about a subscriber
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeSubscriber.html
   */
  public toDescribeSubscriber() {
    return this.to('DescribeSubscriber');
  }

  /**
   * Grants permission to disable rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html
   */
  public toDisableRule() {
    return this.to('DisableRule');
  }

  /**
   * Grants permission to enable rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_EnableRule.html
   */
  public toEnableRule() {
    return this.to('EnableRule');
  }

  /**
   * Grants permission to retrieve the resource policy attached to an event bus
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to retrieve a list of api destinations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListApiDestinations.html
   */
  public toListApiDestinations() {
    return this.to('ListApiDestinations');
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
   * Grants permission to retrieve a list of connections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListConnections.html
   */
  public toListConnections() {
    return this.to('ListConnections');
  }

  /**
   * Grants permission to retrieve a list of endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListEndpoints.html
   */
  public toListEndpoints() {
    return this.to('ListEndpoints');
  }

  /**
   * Grants permission to retrieve a list of the event buses in your account
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
   * Grants permission to list the resource policies attached to an event bus
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListResourcePolicies.html
   */
  public toListResourcePolicies() {
    return this.to('ListResourcePolicies');
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
   * Grants permission to retrieve a list of subscribers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListSubscribers.html
   */
  public toListSubscribers() {
    return this.to('ListSubscribers');
  }

  /**
   * Grants permission to retrieve a list of tags associated with an Amazon EventBridge resource
   *
   * Access Level: List
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
   * Access Level: Permissions management, Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html
   */
  public toPutPermission() {
    return this.to('PutPermission');
  }

  /**
   * Grants permission to publish raw-format events with custom content types, metadata, binary payloads, and FIFO ordering to Amazon EventBridge
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutRawEvents.html
   */
  public toPutRawEvents() {
    return this.to('PutRawEvents');
  }

  /**
   * Grants permission to attach a resource policy to an event bus
   *
   * Access Level: Permissions management, Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to create or updates rules
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html
   */
  public toPutTargets() {
    return this.to('PutTargets');
  }

  /**
   * Grants permission to revoke the permission of another AWS account to put events to your default event bus
   *
   * Access Level: Permissions management, Write
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
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html
   */
  public toRemoveTargets() {
    return this.to('RemoveTargets');
  }

  /**
   * Grants permission to revoke a subscriber or an event source on an event bus
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RevokeResource.html
   */
  public toRevokeResource() {
    return this.to('RevokeResource');
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
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to test whether an event pattern matches the provided event
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
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an api destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateApiDestination.html
   */
  public toUpdateApiDestination() {
    return this.to('UpdateApiDestination');
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

  /**
   * Grants permission to update a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateConnection.html
   */
  public toUpdateConnection() {
    return this.to('UpdateConnection');
  }

  /**
   * Grants permission to update an endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateEndpoint.html
   */
  public toUpdateEndpoint() {
    return this.to('UpdateEndpoint');
  }

  /**
   * Grants permission to update event buses
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateEventBus.html
   */
  public toUpdateEventBus() {
    return this.to('UpdateEventBus');
  }

  /**
   * Grants permission to update an event source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateEventSource.html
   */
  public toUpdateEventSource() {
    return this.to('UpdateEventSource');
  }

  /**
   * Grants permission to update a subscriber
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateSubscriber.html
   */
  public toUpdateSubscriber() {
    return this.to('UpdateSubscriber');
  }

  /**
   * Grants permission to configure vended log delivery for EventBridge
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus-logs.html
   */
  public toAllowVendedLogDeliveryForResource() {
    return this.to('AllowVendedLogDeliveryForResource');
  }

  /**
   * Grants permission to invoke an api destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-identity-based-access-control-eventbridge.html
   */
  public toInvokeApiDestination() {
    return this.to('InvokeApiDestination');
  }

  /**
   * Grants permission to retrieve credentials from a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html
   */
  public toRetrieveConnectionCredentials() {
    return this.to('RetrieveConnectionCredentials');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ActivateEventSource',
      'CancelReplay',
      'CreateApiDestination',
      'CreateArchive',
      'CreateConnection',
      'CreateEndpoint',
      'CreateEventBus',
      'CreateEventSource',
      'CreatePartnerEventSource',
      'CreateSubscriber',
      'DeactivateEventSource',
      'DeauthorizeConnection',
      'DeleteApiDestination',
      'DeleteArchive',
      'DeleteConnection',
      'DeleteEndpoint',
      'DeleteEventBus',
      'DeleteEventSource',
      'DeletePartnerEventSource',
      'DeleteResourcePolicy',
      'DeleteRule',
      'DeleteSubscriber',
      'DisableRule',
      'EnableRule',
      'PutEvents',
      'PutPartnerEvents',
      'PutPermission',
      'PutRawEvents',
      'PutResourcePolicy',
      'PutRule',
      'PutTargets',
      'RemovePermission',
      'RemoveTargets',
      'RevokeResource',
      'StartReplay',
      'TagResource',
      'UntagResource',
      'UpdateApiDestination',
      'UpdateArchive',
      'UpdateConnection',
      'UpdateEndpoint',
      'UpdateEventBus',
      'UpdateEventSource',
      'UpdateSubscriber',
      'AllowVendedLogDeliveryForResource',
      'InvokeApiDestination',
      'RetrieveConnectionCredentials'
    ],
    'Permissions management': [
      'DeleteResourcePolicy',
      'PutPermission',
      'PutResourcePolicy',
      'RemovePermission'
    ],
    Read: [
      'DescribeApiDestination',
      'DescribeArchive',
      'DescribeConnection',
      'DescribeEndpoint',
      'DescribeEventBus',
      'DescribeEventSource',
      'DescribePartnerEventSource',
      'DescribeReplay',
      'DescribeRule',
      'DescribeSubscriber',
      'GetResourcePolicy',
      'TestEventPattern'
    ],
    List: [
      'ListApiDestinations',
      'ListArchives',
      'ListConnections',
      'ListEndpoints',
      'ListEventBuses',
      'ListEventSources',
      'ListPartnerEventSourceAccounts',
      'ListPartnerEventSources',
      'ListReplays',
      'ListResourcePolicies',
      'ListRuleNamesByTarget',
      'ListRules',
      'ListSubscribers',
      'ListTagsForResource',
      'ListTargetsByRule'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type alias to the statement
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html
   *
   * @param alias - Identifier for the alias.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAlias(alias: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:alias/${ alias }`);
  }

  /**
   * Adds a resource of type api-destination to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param apiDestinationName - Identifier for the apiDestinationName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onApiDestination(apiDestinationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:api-destination/${ apiDestinationName }`);
  }

  /**
   * Adds a resource of type archive to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param archiveName - Identifier for the archiveName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onArchive(archiveName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:archive/${ archiveName }`);
  }

  /**
   * Adds a resource of type connection to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param connectionName - Identifier for the connectionName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConnection(connectionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:connection/${ connectionName }`);
  }

  /**
   * Adds a resource of type create-snapshot to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCreateSnapshot(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:target/create-snapshot`);
  }

  /**
   * Adds a resource of type endpoint to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param endpointName - Identifier for the endpointName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEndpoint(endpointName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:endpoint/${ endpointName }`);
  }

  /**
   * Adds a resource of type event-bus to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param eventBusName - Identifier for the eventBusName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventBus(eventBusName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:event-bus/${ eventBusName }`);
  }

  /**
   * Adds a resource of type event-busv2 to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param eventBusName - Identifier for the eventBusName.
   * @param opaqueId - Identifier for the opaqueId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventBusv2(eventBusName: string, opaqueId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:event-busv2/${ eventBusName }/${ opaqueId }`);
  }

  /**
   * Adds a resource of type event-source to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param eventSourceName - Identifier for the eventSourceName.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEventSource(eventSourceName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }::event-source/${ eventSourceName }`);
  }

  /**
   * Adds a resource of type event-sourcev2 to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param sourceType - Identifier for the sourceType.
   * @param eventSourceName - Identifier for the eventSourceName.
   * @param opaqueId - Identifier for the opaqueId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventSourcev2(sourceType: string, eventSourceName: string, opaqueId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:event-sourcev2/${ sourceType }/${ eventSourceName }/${ opaqueId }`);
  }

  /**
   * Adds a resource of type key to the statement
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html
   *
   * @param keyId - Identifier for the keyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onKey(keyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:key/${ keyId }`);
  }

  /**
   * Adds a resource of type reboot-instance to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onRebootInstance(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:target/reboot-instance`);
  }

  /**
   * Adds a resource of type replay to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param replayName - Identifier for the replayName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onReplay(replayName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:replay/${ replayName }`);
  }

  /**
   * Adds a resource of type rule-on-custom-event-bus to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param eventBusName - Identifier for the eventBusName.
   * @param ruleName - Identifier for the ruleName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRuleOnCustomEventBus(eventBusName: string, ruleName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:rule/${ eventBusName }/${ ruleName }`);
  }

  /**
   * Adds a resource of type rule-on-default-event-bus to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param ruleName - Identifier for the ruleName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRuleOnDefaultEventBus(ruleName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:rule/${ ruleName }`);
  }

  /**
   * Adds a resource of type stop-instance to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onStopInstance(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:target/stop-instance`);
  }

  /**
   * Adds a resource of type subscriber to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param subscriberName - Identifier for the subscriberName.
   * @param opaqueId - Identifier for the opaqueId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSubscriber(subscriberName: string, opaqueId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:subscriber/${ subscriberName }/${ opaqueId }`);
  }

  /**
   * Adds a resource of type terminate-instance to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-manage-iam-access.html#eventbridge-arn-format
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTerminateInstance(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:events:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:target/terminate-instance`);
  }

  /**
   * Filters access by the allowed set of values for each of the tags to event bus and rule actions
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateEventBus()
   * - .toCreateEventSource()
   * - .toCreateSubscriber()
   * - .toPutRule()
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
   * Filters access by tag-value associated with the resource to event bus and rule actions
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateArchive()
   * - .toCreateEventBus()
   * - .toCreateEventSource()
   * - .toCreateSubscriber()
   * - .toDeleteEventBus()
   * - .toDeleteEventSource()
   * - .toDeleteResourcePolicy()
   * - .toDeleteRule()
   * - .toDeleteSubscriber()
   * - .toDescribeEventBus()
   * - .toDescribeEventSource()
   * - .toDescribeRule()
   * - .toDescribeSubscriber()
   * - .toDisableRule()
   * - .toEnableRule()
   * - .toGetResourcePolicy()
   * - .toListResourcePolicies()
   * - .toListTagsForResource()
   * - .toListTargetsByRule()
   * - .toPutEvents()
   * - .toPutRawEvents()
   * - .toPutResourcePolicy()
   * - .toPutRule()
   * - .toPutTargets()
   * - .toRemoveTargets()
   * - .toRevokeResource()
   * - .toStartReplay()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateEventBus()
   * - .toUpdateEventSource()
   * - .toUpdateSubscriber()
   * - .toAllowVendedLogDeliveryForResource()
   *
   * Applies to resource types:
   * - event-bus
   * - event-busv2
   * - event-sourcev2
   * - rule-on-custom-event-bus
   * - rule-on-default-event-bus
   * - subscriber
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags in the request to event bus and rule actions
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateEventBus()
   * - .toCreateEventSource()
   * - .toCreateSubscriber()
   * - .toPutRule()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by whether a subscriber declares a payload-scope content filter to CreateSubscriber and UpdateSubscriber actions
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html
   *
   * Applies to actions:
   * - .toCreateSubscriber()
   * - .toUpdateSubscriber()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifContentFilterPresent(value?: boolean) {
    return this.if(`ContentFilterPresent`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the ARN of the event buses that can be associated with an endpoint to CreateEndpoint and UpdateEndpoint actions
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limiting-access-to-event-buses
   *
   * Applies to actions:
   * - .toCreateEndpoint()
   * - .toUpdateEndpoint()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifEventBusArn(value: string | string[], operator?: Operator | string) {
    return this.if(`EventBusArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by AWS services. If a rule is created by an AWS service on your behalf, the value is the principal name of the service that created the rule
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html
   *
   * Applies to actions:
   * - .toDeleteRule()
   * - .toDisableRule()
   * - .toEnableRule()
   * - .toPutRule()
   * - .toPutTargets()
   * - .toRemoveTargets()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifManagedBy(value: string | string[], operator?: Operator | string) {
    return this.if(`ManagedBy`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a metadata key-value pair on the published event to PutRawEvents actions, or by the exact-match values declared for that key in a subscriber's metadata filter to CreateSubscriber and UpdateSubscriber actions
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html
   *
   * Applies to actions:
   * - .toCreateSubscriber()
   * - .toPutRawEvents()
   * - .toUpdateSubscriber()
   *
   * @param metadataKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMetadataMetadataKey(metadataKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`Metadata/${ metadataKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the match type declared for a metadata key in a subscriber's filter to CreateSubscriber and UpdateSubscriber actions
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html
   *
   * Applies to actions:
   * - .toCreateSubscriber()
   * - .toUpdateSubscriber()
   *
   * @param metadataKeyMatcher The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMetadataMetadataKeyMatcher(metadataKeyMatcher: string, value: string | string[], operator?: Operator | string) {
    return this.if(`Metadata/${ metadataKeyMatcher }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the resource policy specified in the request to resource policy actions
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html
   *
   * Applies to actions:
   * - .toDeleteResourcePolicy()
   * - .toGetResourcePolicy()
   * - .toPutResourcePolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPolicyName(value: string | string[], operator?: Operator | string) {
    return this.if(`PolicyName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the detail type recorded in the system metadata of an event forwarded onto an event bus to PutEvents and PutRawEvents actions
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html
   *
   * Applies to actions:
   * - .toPutEvents()
   * - .toPutRawEvents()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSystemMetadataAwsDetailType(value: string | string[], operator?: Operator | string) {
    return this.if(`SystemMetadata/AwsDetailType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the source recorded in the system metadata of an event forwarded onto an event bus to PutEvents and PutRawEvents actions
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html
   *
   * Applies to actions:
   * - .toPutEvents()
   * - .toPutRawEvents()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSystemMetadataAwsSource(value: string | string[], operator?: Operator | string) {
    return this.if(`SystemMetadata/AwsSource`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the content type declared on an event for PutRawEvents and for forwarded events authorized as PutEvents
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html
   *
   * Applies to actions:
   * - .toPutEvents()
   * - .toPutRawEvents()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSystemMetadataContentType(value: string | string[], operator?: Operator | string) {
    return this.if(`SystemMetadata/ContentType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ARN of a target that can be put to a rule to PutTargets actions. TargetARN doesn't include DeadLetterConfigArn
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
    return this.if(`TargetArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the account the rule was created in to rule actions
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
    return this.if(`creatorAccount`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the literal string of the detail-type of the event to PutEvents and PutRule actions
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
    return this.if(`detail-type`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the literal string for the detail.eventTypeCode field of the event to PutRule actions
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
    return this.if(`detail.eventTypeCode`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the literal string for the detail.service field of the event to PutRule actions
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
    return this.if(`detail.service`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the literal string for the detail.useridentity.principalid field of the event to PutRule actions
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
    return this.if(`detail.userIdentity.principalId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access to PutEvents and PutRawEvents by whether an event was forwarded from an event bus rather than published through a direct API call
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-bus-invocation
   *
   * Applies to actions:
   * - .toPutEvents()
   * - .toPutRawEvents()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEventBusInvocation(value: string | string[], operator?: Operator | string) {
    return this.if(`eventBusInvocation`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the AWS service or AWS partner event source that generated the event to PutEvents and PutRule actions, or by the configured source of an event source to the CreateEventSource and UpdateEventSource actions. Matches the literal string of the source field of the event
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-limit-access-control
   *
   * Applies to actions:
   * - .toCreateEventSource()
   * - .toPutEvents()
   * - .toPutRule()
   * - .toUpdateEventSource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSource(value: string | string[], operator?: Operator | string) {
    return this.if(`source`, value, operator ?? 'StringLike');
  }
}
