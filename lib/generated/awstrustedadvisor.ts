import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [trustedadvisor](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstrustedadvisor.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Trustedadvisor extends PolicyStatement {
  public servicePrefix = 'trustedadvisor';
  protected actionList: Actions = {
    "DescribeAccount": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to view the AWS Support plan and various AWS Trusted Advisor preferences",
      "accessLevel": "Read"
    },
    "DescribeAccountAccess": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to view if the AWS account has enabled or disabled AWS Trusted Advisor",
      "accessLevel": "Read"
    },
    "DescribeCheckItems": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to view details for the check items",
      "accessLevel": "Read",
      "resourceTypes": {
        "checks": {
          "required": true
        }
      }
    },
    "DescribeCheckRefreshStatuses": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to view the refresh statuses for AWS Trusted Advisor checks",
      "accessLevel": "Read",
      "resourceTypes": {
        "checks": {
          "required": true
        }
      }
    },
    "DescribeCheckSummaries": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to view AWS Trusted Advisor check summaries",
      "accessLevel": "Read",
      "resourceTypes": {
        "checks": {
          "required": true
        }
      }
    },
    "DescribeChecks": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to view details for AWS Trusted Advisor checks",
      "accessLevel": "Read"
    },
    "DescribeNotificationPreferences": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to view the notification preferences for the AWS account",
      "accessLevel": "Read"
    },
    "DescribeOrganization": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to view if the AWS account meets the requirements to enable the organizational view feature",
      "accessLevel": "Read"
    },
    "DescribeOrganizationAccounts": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to view the linked AWS accounts that are in the organization",
      "accessLevel": "Read"
    },
    "DescribeReports": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to view details for organizational view reports, such as the report name, runtime, date created, status, and format",
      "accessLevel": "Read"
    },
    "DescribeServiceMetadata": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to view information about organizational view reports, such as the AWS Regions, check categories, check names, and resource statuses",
      "accessLevel": "Read"
    },
    "ExcludeCheckItems": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to exclude recommendations for AWS Trusted Advisor checks",
      "accessLevel": "Write",
      "resourceTypes": {
        "checks": {
          "required": true
        }
      }
    },
    "GenerateReport": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to create a report for AWS Trusted Advisor checks in your organization",
      "accessLevel": "Write"
    },
    "IncludeCheckItems": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to include recommendations for AWS Trusted Advisor checks",
      "accessLevel": "Write",
      "resourceTypes": {
        "checks": {
          "required": true
        }
      }
    },
    "RefreshCheck": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to refresh an AWS Trusted Advisor check",
      "accessLevel": "Write",
      "resourceTypes": {
        "checks": {
          "required": true
        }
      }
    },
    "SetAccountAccess": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to enable or disable AWS Trusted Advisor for the account",
      "accessLevel": "Write"
    },
    "SetOrganizationAccess": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to enable the organizational view feature for AWS Trusted Advisor",
      "accessLevel": "Write"
    },
    "UpdateNotificationPreferences": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations",
      "description": "Grants permission to update notification preferences for AWS Trusted Advisor",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "checks": {
      "name": "checks",
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_TrustedAdvisorCheckDescription.html",
      "arn": "arn:${Partition}:trustedadvisor:${Region}:${Account}:checks/${CategoryCode}/${CheckId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [trustedadvisor](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstrustedadvisor.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to view the AWS Support plan and various AWS Trusted Advisor preferences
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeAccount() {
    this.to('trustedadvisor:DescribeAccount');
    return this;
  }

  /**
   * Grants permission to view if the AWS account has enabled or disabled AWS Trusted Advisor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeAccountAccess() {
    this.to('trustedadvisor:DescribeAccountAccess');
    return this;
  }

  /**
   * Grants permission to view details for the check items
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeCheckItems() {
    this.to('trustedadvisor:DescribeCheckItems');
    return this;
  }

  /**
   * Grants permission to view the refresh statuses for AWS Trusted Advisor checks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeCheckRefreshStatuses() {
    this.to('trustedadvisor:DescribeCheckRefreshStatuses');
    return this;
  }

  /**
   * Grants permission to view AWS Trusted Advisor check summaries
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeCheckSummaries() {
    this.to('trustedadvisor:DescribeCheckSummaries');
    return this;
  }

  /**
   * Grants permission to view details for AWS Trusted Advisor checks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeChecks() {
    this.to('trustedadvisor:DescribeChecks');
    return this;
  }

  /**
   * Grants permission to view the notification preferences for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeNotificationPreferences() {
    this.to('trustedadvisor:DescribeNotificationPreferences');
    return this;
  }

  /**
   * Grants permission to view if the AWS account meets the requirements to enable the organizational view feature
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeOrganization() {
    this.to('trustedadvisor:DescribeOrganization');
    return this;
  }

  /**
   * Grants permission to view the linked AWS accounts that are in the organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeOrganizationAccounts() {
    this.to('trustedadvisor:DescribeOrganizationAccounts');
    return this;
  }

  /**
   * Grants permission to view details for organizational view reports, such as the report name, runtime, date created, status, and format
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeReports() {
    this.to('trustedadvisor:DescribeReports');
    return this;
  }

  /**
   * Grants permission to view information about organizational view reports, such as the AWS Regions, check categories, check names, and resource statuses
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeServiceMetadata() {
    this.to('trustedadvisor:DescribeServiceMetadata');
    return this;
  }

  /**
   * Grants permission to exclude recommendations for AWS Trusted Advisor checks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toExcludeCheckItems() {
    this.to('trustedadvisor:ExcludeCheckItems');
    return this;
  }

  /**
   * Grants permission to create a report for AWS Trusted Advisor checks in your organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toGenerateReport() {
    this.to('trustedadvisor:GenerateReport');
    return this;
  }

  /**
   * Grants permission to include recommendations for AWS Trusted Advisor checks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toIncludeCheckItems() {
    this.to('trustedadvisor:IncludeCheckItems');
    return this;
  }

  /**
   * Grants permission to refresh an AWS Trusted Advisor check
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toRefreshCheck() {
    this.to('trustedadvisor:RefreshCheck');
    return this;
  }

  /**
   * Grants permission to enable or disable AWS Trusted Advisor for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toSetAccountAccess() {
    this.to('trustedadvisor:SetAccountAccess');
    return this;
  }

  /**
   * Grants permission to enable the organizational view feature for AWS Trusted Advisor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toSetOrganizationAccess() {
    this.to('trustedadvisor:SetOrganizationAccess');
    return this;
  }

  /**
   * Grants permission to update notification preferences for AWS Trusted Advisor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toUpdateNotificationPreferences() {
    this.to('trustedadvisor:UpdateNotificationPreferences');
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
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
