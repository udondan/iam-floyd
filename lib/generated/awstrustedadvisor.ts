import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service trustedadvisor
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstrustedadvisor.html
 */
export class Trustedadvisor extends PolicyStatement {
  public servicePrefix = 'trustedadvisor';
  public actions: Actions = {
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
  public resourceTypes: ResourceTypes = {
    "checks": {
      "name": "checks",
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_TrustedAdvisorCheckDescription.html",
      "arn": "arn:${Partition}:trustedadvisor:${Region}:${Account}:checks/${CategoryCode}/${CheckId}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service trustedadvisor
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstrustedadvisor.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * View support plan and various TA preferences.
   *
   * Access Level: Read
   */
  public describeAccount() {
    this.add('trustedadvisor:DescribeAccount');
    return this;
  }

  /**
   * Resolve whether Account has disabled Trusted Advisor
   *
   * Access Level: Read
   */
  public describeAccountAccess() {
    this.add('trustedadvisor:DescribeAccountAccess');
    return this;
  }

  /**
   * View details for the check items
   *
   * Access Level: Read
   */
  public describeCheckItems() {
    this.add('trustedadvisor:DescribeCheckItems');
    return this;
  }

  /**
   * Describe check refresh statuses
   *
   * Access Level: Read
   */
  public describeCheckRefreshStatuses() {
    this.add('trustedadvisor:DescribeCheckRefreshStatuses');
    return this;
  }

  /**
   * Describes the check's summaries
   *
   * Access Level: Read
   */
  public describeCheckSummaries() {
    this.add('trustedadvisor:DescribeCheckSummaries');
    return this;
  }

  /**
   * List valid Trusted Advisor checks and details.
   *
   * Access Level: Read
   */
  public describeChecks() {
    this.add('trustedadvisor:DescribeChecks');
    return this;
  }

  /**
   * Describes the notification preferences for the account
   *
   * Access Level: Read
   */
  public describeNotificationPreferences() {
    this.add('trustedadvisor:DescribeNotificationPreferences');
    return this;
  }

  /**
   * Exclude recommendations for checks for a given customer
   *
   * Access Level: Write
   */
  public excludeCheckItems() {
    this.add('trustedadvisor:ExcludeCheckItems');
    return this;
  }

  /**
   * Include recommendations for checks for a given customer
   *
   * Access Level: Write
   */
  public includeCheckItems() {
    this.add('trustedadvisor:IncludeCheckItems');
    return this;
  }

  /**
   * Enqueue a refresh for the specified check
   *
   * Access Level: Write
   */
  public refreshCheck() {
    this.add('trustedadvisor:RefreshCheck');
    return this;
  }

  /**
   * Toggle whether TrustedAdvisor is enabled/disabled for the account
   *
   * Access Level: Write
   */
  public setAccountAccess() {
    this.add('trustedadvisor:SetAccountAccess');
    return this;
  }

  /**
   * Update notification preferences
   *
   * Access Level: Write
   */
  public updateNotificationPreferences() {
    this.add('trustedadvisor:UpdateNotificationPreferences');
    return this;
  }

  /**
   * Adds a resource of type checks to the statement
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_TrustedAdvisorCheckDescription.html
   *
   * @param categoryCode - Identifier for the categoryCode.
   * @param checkId - Identifier for the checkId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onChecks(categoryCode: string, checkId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:trustedadvisor:${Region}:${Account}:checks/${CategoryCode}/${CheckId}';
    arn = arn.replace('${CategoryCode}', categoryCode);
    arn = arn.replace('${CheckId}', checkId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
