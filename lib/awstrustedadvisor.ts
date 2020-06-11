import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service trustedadvisor
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstrustedadvisor.html
 */
export class Trustedadvisor extends PolicyStatement {
  public servicePrefix = 'trustedadvisor';
  public actions : Actions = {
    "DescribeAccount": {
      "url": "",
      "description": "View support plan and various TA preferences.",
      "accessLevel": "Read"
    },
    "DescribeAccountAccess": {
      "url": "",
      "description": "Resolve whether Account has disabled Trusted Advisor",
      "accessLevel": "Read"
    },
    "DescribeCheckItems": {
      "url": "",
      "description": "View details for the check items",
      "accessLevel": "Read",
      "resourceTypes": {
        "checks": {
          "required": true
        }
      }
    },
    "DescribeCheckRefreshStatuses": {
      "url": "",
      "description": "Describe check refresh statuses",
      "accessLevel": "Read",
      "resourceTypes": {
        "checks": {
          "required": true
        }
      }
    },
    "DescribeCheckSummaries": {
      "url": "",
      "description": "Describes the check's summaries",
      "accessLevel": "Read",
      "resourceTypes": {
        "checks": {
          "required": true
        }
      }
    },
    "DescribeChecks": {
      "url": "",
      "description": "List valid Trusted Advisor checks and details.",
      "accessLevel": "Read"
    },
    "DescribeNotificationPreferences": {
      "url": "",
      "description": "Describes the notification preferences for the account",
      "accessLevel": "Read"
    },
    "ExcludeCheckItems": {
      "url": "",
      "description": "Exclude recommendations for checks for a given customer",
      "accessLevel": "Write",
      "resourceTypes": {
        "checks": {
          "required": true
        }
      }
    },
    "IncludeCheckItems": {
      "url": "",
      "description": "Include recommendations for checks for a given customer",
      "accessLevel": "Write",
      "resourceTypes": {
        "checks": {
          "required": true
        }
      }
    },
    "RefreshCheck": {
      "url": "",
      "description": "Enqueue a refresh for the specified check",
      "accessLevel": "Write",
      "resourceTypes": {
        "checks": {
          "required": true
        }
      }
    },
    "SetAccountAccess": {
      "url": "",
      "description": "Toggle whether TrustedAdvisor is enabled/disabled for the account",
      "accessLevel": "Write"
    },
    "UpdateNotificationPreferences": {
      "url": "",
      "description": "Update notification preferences",
      "accessLevel": "Write"
    }
  };

  /**
   * View support plan and various TA preferences.
   *
   * Access Level: Read
   *
   *
   */
  public describeAccount () {
    this.add('trustedadvisor:DescribeAccount');
    return this;
  }

  /**
   * Resolve whether Account has disabled Trusted Advisor
   *
   * Access Level: Read
   *
   *
   */
  public describeAccountAccess () {
    this.add('trustedadvisor:DescribeAccountAccess');
    return this;
  }

  /**
   * View details for the check items
   *
   * Access Level: Read
   *
   *
   */
  public describeCheckItems () {
    this.add('trustedadvisor:DescribeCheckItems');
    return this;
  }

  /**
   * Describe check refresh statuses
   *
   * Access Level: Read
   *
   *
   */
  public describeCheckRefreshStatuses () {
    this.add('trustedadvisor:DescribeCheckRefreshStatuses');
    return this;
  }

  /**
   * Describes the check's summaries
   *
   * Access Level: Read
   *
   *
   */
  public describeCheckSummaries () {
    this.add('trustedadvisor:DescribeCheckSummaries');
    return this;
  }

  /**
   * List valid Trusted Advisor checks and details.
   *
   * Access Level: Read
   *
   *
   */
  public describeChecks () {
    this.add('trustedadvisor:DescribeChecks');
    return this;
  }

  /**
   * Describes the notification preferences for the account
   *
   * Access Level: Read
   *
   *
   */
  public describeNotificationPreferences () {
    this.add('trustedadvisor:DescribeNotificationPreferences');
    return this;
  }

  /**
   * Exclude recommendations for checks for a given customer
   *
   * Access Level: Write
   *
   *
   */
  public excludeCheckItems () {
    this.add('trustedadvisor:ExcludeCheckItems');
    return this;
  }

  /**
   * Include recommendations for checks for a given customer
   *
   * Access Level: Write
   *
   *
   */
  public includeCheckItems () {
    this.add('trustedadvisor:IncludeCheckItems');
    return this;
  }

  /**
   * Enqueue a refresh for the specified check
   *
   * Access Level: Write
   *
   *
   */
  public refreshCheck () {
    this.add('trustedadvisor:RefreshCheck');
    return this;
  }

  /**
   * Toggle whether TrustedAdvisor is enabled/disabled for the account
   *
   * Access Level: Write
   *
   *
   */
  public setAccountAccess () {
    this.add('trustedadvisor:SetAccountAccess');
    return this;
  }

  /**
   * Update notification preferences
   *
   * Access Level: Write
   *
   *
   */
  public updateNotificationPreferences () {
    this.add('trustedadvisor:UpdateNotificationPreferences');
    return this;
  }
}
