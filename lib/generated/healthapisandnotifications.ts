import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to retrieve a list of accounts that have been affected by the specified events in organization
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html
   */
  public toDescribeAffectedAccountsForOrganization() {
    return this.to('DescribeAffectedAccountsForOrganization');
  }

  /**
   * Grants permission to retrieve a list of entities that have been affected by the specified events
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
    return this.to('DescribeAffectedEntities');
  }

  /**
   * Grants permission to retrieve a list of entities that have been affected by the specified events and accounts in organization
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html
   */
  public toDescribeAffectedEntitiesForOrganization() {
    return this.to('DescribeAffectedEntitiesForOrganization');
  }

  /**
   * Grants permission to retrieve the number of entities that are affected by each of the specified events
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html
   */
  public toDescribeEntityAggregates() {
    return this.to('DescribeEntityAggregates');
  }

  /**
   * Grants permission to retrieve the number of events of each event type (issue, scheduled change, and account notification)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html
   */
  public toDescribeEventAggregates() {
    return this.to('DescribeEventAggregates');
  }

  /**
   * Grants permission to retrieve detailed information about one or more specified events
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
    return this.to('DescribeEventDetails');
  }

  /**
   * Grants permission to retrieve detailed information about one or more specified events for provided accounts in organization
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html
   */
  public toDescribeEventDetailsForOrganization() {
    return this.to('DescribeEventDetailsForOrganization');
  }

  /**
   * Grants permission to retrieve the event types that meet the specified filter criteria
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html
   */
  public toDescribeEventTypes() {
    return this.to('DescribeEventTypes');
  }

  /**
   * Grants permission to retrieve information about events that meet the specified filter criteria
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    return this.to('DescribeEvents');
  }

  /**
   * Grants permission to retrieve information about events that meet the specified filter criteria in organization
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html
   */
  public toDescribeEventsForOrganization() {
    return this.to('DescribeEventsForOrganization');
  }

  /**
   * Grants permission to retrieve the status of enabling or disabling the Organizational View feature
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeHealthServiceStatusForOrganization.html
   */
  public toDescribeHealthServiceStatusForOrganization() {
    return this.to('DescribeHealthServiceStatusForOrganization');
  }

  /**
   * Grants permission to disable the Organizational View feature
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
    return this.to('DisableHealthServiceAccessForOrganization');
  }

  /**
   * Grants permission to enable the Organizational View feature
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
    return this.to('EnableHealthServiceAccessForOrganization');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'DescribeAffectedAccountsForOrganization',
      'DescribeAffectedEntities',
      'DescribeAffectedEntitiesForOrganization',
      'DescribeEntityAggregates',
      'DescribeEventAggregates',
      'DescribeEventDetails',
      'DescribeEventDetailsForOrganization',
      'DescribeEventTypes',
      'DescribeEvents',
      'DescribeEventsForOrganization',
      'DescribeHealthServiceStatusForOrganization'
    ],
    'Permissions management': [
      'DisableHealthServiceAccessForOrganization',
      'EnableHealthServiceAccessForOrganization'
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
    return this.on(`arn:${ partition || 'aws' }:health:${ region || '*' }:${ account || '*' }:event/${ service }/${ eventTypeCode }/${ eventTypePlusId }`);
  }

  /**
   * Filters access by event type
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
    return this.if(`eventTypeCode`, value, operator || 'StringLike');
  }

  /**
   * Filters access by impacted service
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
    return this.if(`service`, value, operator || 'StringLike');
  }
}
