import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [health](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthapisandnotifications.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Health extends PolicyStatement {
  public servicePrefix = 'health';

  /**
   * Statement provider for service [health](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthapisandnotifications.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Gets a list of accounts that have been affected by the specified events in organization.
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html
   */
  public toDescribeAffectedAccountsForOrganization() {
    this.to('health:DescribeAffectedAccountsForOrganization');
    return this;
  }

  /**
   * Gets a list of entities that have been affected by the specified events.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifEventTypeCode()
   * - .ifService()
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html
   */
  public toDescribeAffectedEntities() {
    this.to('health:DescribeAffectedEntities');
    return this;
  }

  /**
   * Gets a list of entities that have been affected by the specified events and accounts in organization.
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html
   */
  public toDescribeAffectedEntitiesForOrganization() {
    this.to('health:DescribeAffectedEntitiesForOrganization');
    return this;
  }

  /**
   * Returns the number of entities that are affected by each of the specified events.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html
   */
  public toDescribeEntityAggregates() {
    this.to('health:DescribeEntityAggregates');
    return this;
  }

  /**
   * Returns the number of events of each event type (issue, scheduled change, and account notification).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html
   */
  public toDescribeEventAggregates() {
    this.to('health:DescribeEventAggregates');
    return this;
  }

  /**
   * Returns detailed information about one or more specified events.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifEventTypeCode()
   * - .ifService()
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html
   */
  public toDescribeEventDetails() {
    this.to('health:DescribeEventDetails');
    return this;
  }

  /**
   * Returns detailed information about one or more specified events for provided accounts in organization.
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html
   */
  public toDescribeEventDetailsForOrganization() {
    this.to('health:DescribeEventDetailsForOrganization');
    return this;
  }

  /**
   * Returns the event types that meet the specified filter criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html
   */
  public toDescribeEventTypes() {
    this.to('health:DescribeEventTypes');
    return this;
  }

  /**
   * Returns information about events that meet the specified filter criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    this.to('health:DescribeEvents');
    return this;
  }

  /**
   * Returns information about events that meet the specified filter criteria in organization.
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html
   */
  public toDescribeEventsForOrganization() {
    this.to('health:DescribeEventsForOrganization');
    return this;
  }

  /**
   * Returns the status of enabling or disabling the Organizational View feature
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeHealthServiceStatusForOrganization.html
   */
  public toDescribeHealthServiceStatusForOrganization() {
    this.to('health:DescribeHealthServiceStatusForOrganization');
    return this;
  }

  /**
   * Disables the Organizational View feature.
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - organizations:DisableAWSServiceAccess
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DisableHealthServiceAccessForOrganization.html
   */
  public toDisableHealthServiceAccessForOrganization() {
    this.to('health:DisableHealthServiceAccessForOrganization');
    return this;
  }

  /**
   * Enables the Organizational View feature.
   *
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - organizations:EnableAWSServiceAccess
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html
   */
  public toEnableHealthServiceAccessForOrganization() {
    this.to('health:EnableHealthServiceAccessForOrganization');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "DescribeAffectedAccountsForOrganization",
      "DescribeAffectedEntities",
      "DescribeAffectedEntitiesForOrganization",
      "DescribeEntityAggregates",
      "DescribeEventAggregates",
      "DescribeEventDetails",
      "DescribeEventDetailsForOrganization",
      "DescribeEventTypes",
      "DescribeEvents",
      "DescribeEventsForOrganization"
    ],
    "Permissions management": [
      "DescribeHealthServiceStatusForOrganization",
      "DisableHealthServiceAccessForOrganization",
      "EnableHealthServiceAccessForOrganization"
    ]
  };

  /**
   * Adds a resource of type event to the statement
   *
   * https://docs.aws.amazon.com/health/latest/ug/supported-operations.html
   *
   * @param service - Identifier for the service.
   * @param eventTypeCode - Identifier for the eventTypeCode.
   * @param eventTypePlusId - Identifier for the eventTypePlusId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEvent(service: string, eventTypeCode: string, eventTypePlusId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:health:${Region}:${Account}:event/${Service}/${EventTypeCode}/${EventTypePlusId}';
    arn = arn.replace('${Service}', service);
    arn = arn.replace('${EventTypeCode}', eventTypeCode);
    arn = arn.replace('${EventTypePlusId}', eventTypePlusId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The type of event.
   *
   * https://docs.aws.amazon.com/health/latest/ug/controlling-access.html
   *
   * Applies to actions:
   * - .toDescribeAffectedEntities()
   * - .toDescribeEventDetails()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEventTypeCode(value: string | string[], operator?: Operator | string) {
    return this.if(`health:eventTypeCode`, value, operator || 'StringLike');
  }

  /**
   * The service of the event.
   *
   * https://docs.aws.amazon.com/health/latest/ug/controlling-access.html
   *
   * Applies to actions:
   * - .toDescribeAffectedEntities()
   * - .toDescribeEventDetails()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifService(value: string | string[], operator?: Operator | string) {
    return this.if(`health:service`, value, operator || 'StringLike');
  }
}

export type HealthActionsRead = 'DescribeAffectedAccountsForOrganization' | 'DescribeAffectedEntities' | 'DescribeAffectedEntitiesForOrganization' | 'DescribeEntityAggregates' | 'DescribeEventAggregates' | 'DescribeEventDetails' | 'DescribeEventDetailsForOrganization' | 'DescribeEventTypes' | 'DescribeEvents' | 'DescribeEventsForOrganization';
export type HealthActionsPermissions management = 'DescribeHealthServiceStatusForOrganization' | 'DisableHealthServiceAccessForOrganization' | 'EnableHealthServiceAccessForOrganization';

export type HealthActions = HealthActionsRead | HealthActionsPermissions management;
