import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [health](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awshealthapisandnotifications.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Health extends PolicyStatement {
  public servicePrefix = 'health';
  protected actionList: Actions = {
    "DescribeAffectedAccountsForOrganization": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html",
      "description": "Gets a list of accounts that have been affected by the specified events in organization.",
      "accessLevel": "Read",
      "dependentActions": [
        "organizations:ListAccounts"
      ]
    },
    "DescribeAffectedEntities": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html",
      "description": "Gets a list of entities that have been affected by the specified events.",
      "accessLevel": "Read",
      "resourceTypes": {
        "event": {
          "required": true
        }
      },
      "conditions": [
        "health:eventTypeCode",
        "health:service"
      ]
    },
    "DescribeAffectedEntitiesForOrganization": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html",
      "description": "Gets a list of entities that have been affected by the specified events and accounts in organization.",
      "accessLevel": "Read",
      "dependentActions": [
        "organizations:ListAccounts"
      ]
    },
    "DescribeEntityAggregates": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html",
      "description": "Returns the number of entities that are affected by each of the specified events.",
      "accessLevel": "Read"
    },
    "DescribeEventAggregates": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html",
      "description": "Returns the number of events of each event type (issue, scheduled change, and account notification).",
      "accessLevel": "Read"
    },
    "DescribeEventDetails": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html",
      "description": "Returns detailed information about one or more specified events.",
      "accessLevel": "Read",
      "resourceTypes": {
        "event": {
          "required": true
        }
      },
      "conditions": [
        "health:eventTypeCode",
        "health:service"
      ]
    },
    "DescribeEventDetailsForOrganization": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html",
      "description": "Returns detailed information about one or more specified events for provided accounts in organization.",
      "accessLevel": "Read",
      "dependentActions": [
        "organizations:ListAccounts"
      ]
    },
    "DescribeEventTypes": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html",
      "description": "Returns the event types that meet the specified filter criteria.",
      "accessLevel": "Read"
    },
    "DescribeEvents": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html",
      "description": "Returns information about events that meet the specified filter criteria.",
      "accessLevel": "Read"
    },
    "DescribeEventsForOrganization": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html",
      "description": "Returns information about events that meet the specified filter criteria in organization.",
      "accessLevel": "Read",
      "dependentActions": [
        "organizations:ListAccounts"
      ]
    },
    "DescribeHealthServiceStatusForOrganization": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeHealthServiceStatusForOrganization.html",
      "description": "Returns the status of enabling or disabling the Organizational View feature",
      "accessLevel": "Permissions management",
      "dependentActions": [
        "organizations:ListAccounts"
      ]
    },
    "DisableHealthServiceAccessForOrganization": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DisableHealthServiceAccessForOrganization.html",
      "description": "Disables the Organizational View feature.",
      "accessLevel": "Permissions management",
      "dependentActions": [
        "organizations:DisableAWSServiceAccess",
        "organizations:ListAccounts"
      ]
    },
    "EnableHealthServiceAccessForOrganization": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html",
      "description": "Enables the Organizational View feature.",
      "accessLevel": "Permissions management",
      "dependentActions": [
        "iam:CreateServiceLinkedRole",
        "organizations:EnableAWSServiceAccess",
        "organizations:ListAccounts"
      ]
    }
  };
  public resourceTypes: ResourceTypes = {
    "event": {
      "name": "event",
      "url": "https://docs.aws.amazon.com/health/latest/ug/supported-operations.html",
      "arn": "arn:${Partition}:health:${Region}:${Account}:event/${Service}/${EventTypeCode}/${EventTypePlusId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [health](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awshealthapisandnotifications.html).
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
   * Dependent Actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html
   */
  public describeAffectedAccountsForOrganization() {
    this.add('health:DescribeAffectedAccountsForOrganization');
    return this;
  }

  /**
   * Gets a list of entities that have been affected by the specified events.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html
   */
  public describeAffectedEntities() {
    this.add('health:DescribeAffectedEntities');
    return this;
  }

  /**
   * Gets a list of entities that have been affected by the specified events and accounts in organization.
   *
   * Access Level: Read
   *
   * Dependent Actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html
   */
  public describeAffectedEntitiesForOrganization() {
    this.add('health:DescribeAffectedEntitiesForOrganization');
    return this;
  }

  /**
   * Returns the number of entities that are affected by each of the specified events.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html
   */
  public describeEntityAggregates() {
    this.add('health:DescribeEntityAggregates');
    return this;
  }

  /**
   * Returns the number of events of each event type (issue, scheduled change, and account notification).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html
   */
  public describeEventAggregates() {
    this.add('health:DescribeEventAggregates');
    return this;
  }

  /**
   * Returns detailed information about one or more specified events.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html
   */
  public describeEventDetails() {
    this.add('health:DescribeEventDetails');
    return this;
  }

  /**
   * Returns detailed information about one or more specified events for provided accounts in organization.
   *
   * Access Level: Read
   *
   * Dependent Actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html
   */
  public describeEventDetailsForOrganization() {
    this.add('health:DescribeEventDetailsForOrganization');
    return this;
  }

  /**
   * Returns the event types that meet the specified filter criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html
   */
  public describeEventTypes() {
    this.add('health:DescribeEventTypes');
    return this;
  }

  /**
   * Returns information about events that meet the specified filter criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html
   */
  public describeEvents() {
    this.add('health:DescribeEvents');
    return this;
  }

  /**
   * Returns information about events that meet the specified filter criteria in organization.
   *
   * Access Level: Read
   *
   * Dependent Actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html
   */
  public describeEventsForOrganization() {
    this.add('health:DescribeEventsForOrganization');
    return this;
  }

  /**
   * Returns the status of enabling or disabling the Organizational View feature
   *
   * Access Level: Permissions management
   *
   * Dependent Actions:
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeHealthServiceStatusForOrganization.html
   */
  public describeHealthServiceStatusForOrganization() {
    this.add('health:DescribeHealthServiceStatusForOrganization');
    return this;
  }

  /**
   * Disables the Organizational View feature.
   *
   * Access Level: Permissions management
   *
   * Dependent Actions:
   * - organizations:DisableAWSServiceAccess
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DisableHealthServiceAccessForOrganization.html
   */
  public disableHealthServiceAccessForOrganization() {
    this.add('health:DisableHealthServiceAccessForOrganization');
    return this;
  }

  /**
   * Enables the Organizational View feature.
   *
   * Access Level: Permissions management
   *
   * Dependent Actions:
   * - iam:CreateServiceLinkedRole
   * - organizations:EnableAWSServiceAccess
   * - organizations:ListAccounts
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html
   */
  public enableHealthServiceAccessForOrganization() {
    this.add('health:EnableHealthServiceAccessForOrganization');
    return this;
  }

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
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEventTypeCode(value: string | string[], operator?: string) {
    return this.if(`health:eventTypeCode`, value, operator || 'StringLike');
  }

  /**
   * The service of the event.
   *
   * https://docs.aws.amazon.com/health/latest/ug/controlling-access.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifService(value: string | string[], operator?: string) {
    return this.if(`health:service`, value, operator || 'StringLike');
  }
}
