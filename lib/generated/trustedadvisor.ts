import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [trustedadvisor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstrustedadvisor.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Trustedadvisor extends PolicyStatement {
  public servicePrefix = 'trustedadvisor';

  /**
   * Statement provider for service [trustedadvisor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstrustedadvisor.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an engagement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toCreateEngagement() {
    return this.to('CreateEngagement');
  }

  /**
   * Grants permission to create an engagement attachment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toCreateEngagementAttachment() {
    return this.to('CreateEngagementAttachment');
  }

  /**
   * Grants permission to create an engagement communication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toCreateEngagementCommunication() {
    return this.to('CreateEngagementCommunication');
  }

  /**
   * Grants permission to the organization management account to delete email notification preferences from a delegated administrator account for Trusted Advisor Priority
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDeleteNotificationConfigurationForDelegatedAdmin() {
    return this.to('DeleteNotificationConfigurationForDelegatedAdmin');
  }

  /**
   * Grants permission to view the AWS Support plan and various AWS Trusted Advisor preferences
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeAccount() {
    return this.to('DescribeAccount');
  }

  /**
   * Grants permission to view if the AWS account has enabled or disabled AWS Trusted Advisor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeAccountAccess() {
    return this.to('DescribeAccountAccess');
  }

  /**
   * Grants permission to view details for the check items
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeCheckItems() {
    return this.to('DescribeCheckItems');
  }

  /**
   * Grants permission to view the refresh statuses for AWS Trusted Advisor checks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeCheckRefreshStatuses() {
    return this.to('DescribeCheckRefreshStatuses');
  }

  /**
   * Grants permission to view the results and changed statuses for checks in the last 30 days
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeCheckStatusHistoryChanges() {
    return this.to('DescribeCheckStatusHistoryChanges');
  }

  /**
   * Grants permission to view AWS Trusted Advisor check summaries
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeCheckSummaries() {
    return this.to('DescribeCheckSummaries');
  }

  /**
   * Grants permission to view details for AWS Trusted Advisor checks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeChecks() {
    return this.to('DescribeChecks');
  }

  /**
   * Grants permission to get your email notification preferences for Trusted Advisor Priority
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeNotificationConfigurations() {
    return this.to('DescribeNotificationConfigurations');
  }

  /**
   * Grants permission to view the notification preferences for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeNotificationPreferences() {
    return this.to('DescribeNotificationPreferences');
  }

  /**
   * Grants permission to view if the AWS account meets the requirements to enable the organizational view feature
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeOrganization() {
    return this.to('DescribeOrganization');
  }

  /**
   * Grants permission to view the linked AWS accounts that are in the organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeOrganizationAccounts() {
    return this.to('DescribeOrganizationAccounts');
  }

  /**
   * Grants permission to view details for organizational view reports, such as the report name, runtime, date created, status, and format
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeReports() {
    return this.to('DescribeReports');
  }

  /**
   * Grants permission to view risk details in AWS Trusted Advisor Priority
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeRisk() {
    return this.to('DescribeRisk');
  }

  /**
   * Grants permission to view affected resources for a risk in AWS Trusted Advisor Priority
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeRiskResources() {
    return this.to('DescribeRiskResources');
  }

  /**
   * Grants permission to view risks in AWS Trusted Advisor Priority
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeRisks() {
    return this.to('DescribeRisks');
  }

  /**
   * Grants permission to view information about organizational view reports, such as the AWS Regions, check categories, check names, and resource statuses
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeServiceMetadata() {
    return this.to('DescribeServiceMetadata');
  }

  /**
   * Grants permission to download a file that contains details about the risk in AWS Trusted Advisor Priority
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDownloadRisk() {
    return this.to('DownloadRisk');
  }

  /**
   * Grants permission to exclude recommendations for AWS Trusted Advisor checks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toExcludeCheckItems() {
    return this.to('ExcludeCheckItems');
  }

  /**
   * Grants permission to create a report for AWS Trusted Advisor checks in your organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toGenerateReport() {
    return this.to('GenerateReport');
  }

  /**
   * Grants permission to view an engagment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toGetEngagement() {
    return this.to('GetEngagement');
  }

  /**
   * Grants permission to view an engagment attachment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toGetEngagementAttachment() {
    return this.to('GetEngagementAttachment');
  }

  /**
   * Grants permission to view a specific engagement type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toGetEngagementType() {
    return this.to('GetEngagementType');
  }

  /**
   * Grants permission to get a specific recommendation within an AWS Organization's organization. This API supports only prioritized recommendations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  public toGetOrganizationRecommendation() {
    return this.to('GetOrganizationRecommendation');
  }

  /**
   * Grants permission to get a specific Recommendation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  public toGetRecommendation() {
    return this.to('GetRecommendation');
  }

  /**
   * Grants permission to include recommendations for AWS Trusted Advisor checks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toIncludeCheckItems() {
    return this.to('IncludeCheckItems');
  }

  /**
   * Grants permission to view, in the Trusted Advisor console, all of the accounts in an AWS organization that are contained by a root or organizational unit (OU)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toListAccountsForParent() {
    return this.to('ListAccountsForParent');
  }

  /**
   * Grants permission to list a filterable set of Checks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  public toListChecks() {
    return this.to('ListChecks');
  }

  /**
   * Grants permission to view all communications for an engagement
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toListEngagementCommunications() {
    return this.to('ListEngagementCommunications');
  }

  /**
   * Grants permission to view all engagement types
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toListEngagementTypes() {
    return this.to('ListEngagementTypes');
  }

  /**
   * Grants permission to view all engagements
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toListEngagements() {
    return this.to('ListEngagements');
  }

  /**
   * Grants permission to list the accounts that own the resources for an AWS Organization aggregate recommendation. This API only supports prioritized recommendations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  public toListOrganizationRecommendationAccounts() {
    return this.to('ListOrganizationRecommendationAccounts');
  }

  /**
   * Grants permission to list Resources of a Recommendation within an AWS Organization. This API only supports prioritized recommendations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  public toListOrganizationRecommendationResources() {
    return this.to('ListOrganizationRecommendationResources');
  }

  /**
   * Grants permission to list a filterable set of Recommendations within an AWS Organization. This API only supports prioritized recommendations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  public toListOrganizationRecommendations() {
    return this.to('ListOrganizationRecommendations');
  }

  /**
   * Grants permission to view, in the Trusted Advisor console, all of the organizational units (OUs) in a parent organizational unit or root
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toListOrganizationalUnitsForParent() {
    return this.to('ListOrganizationalUnitsForParent');
  }

  /**
   * Grants permission to list Resources of a Recommendation
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  public toListRecommendationResources() {
    return this.to('ListRecommendationResources');
  }

  /**
   * Grants permission to list a filterable set of Recommendations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  public toListRecommendations() {
    return this.to('ListRecommendations');
  }

  /**
   * Grants permission to view, in the Trusted Advisor console, all of the roots that are defined in an AWS organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toListRoots() {
    return this.to('ListRoots');
  }

  /**
   * Grants permission to refresh an AWS Trusted Advisor check
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toRefreshCheck() {
    return this.to('RefreshCheck');
  }

  /**
   * Grants permission to enable or disable AWS Trusted Advisor for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toSetAccountAccess() {
    return this.to('SetAccountAccess');
  }

  /**
   * Grants permission to enable the organizational view feature for AWS Trusted Advisor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toSetOrganizationAccess() {
    return this.to('SetOrganizationAccess');
  }

  /**
   * Grants permission to update the details of an engagement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toUpdateEngagement() {
    return this.to('UpdateEngagement');
  }

  /**
   * Grants permission to update the status of an engagement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toUpdateEngagementStatus() {
    return this.to('UpdateEngagementStatus');
  }

  /**
   * Grants permission to create or update your email notification preferences for Trusted Advisor Priority
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toUpdateNotificationConfigurations() {
    return this.to('UpdateNotificationConfigurations');
  }

  /**
   * Grants permission to update notification preferences for AWS Trusted Advisor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toUpdateNotificationPreferences() {
    return this.to('UpdateNotificationPreferences');
  }

  /**
   * Grants permission to update the lifecyle of a Recommendation within an AWS Organization. This API only supports prioritized recommendations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  public toUpdateOrganizationRecommendationLifecycle() {
    return this.to('UpdateOrganizationRecommendationLifecycle');
  }

  /**
   * Grants permission to update the lifecyle of a Recommendation. This API only supports prioritized recommendations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  public toUpdateRecommendationLifecycle() {
    return this.to('UpdateRecommendationLifecycle');
  }

  /**
   * Grants permission to update the risk status in AWS Trusted Advisor Priority
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toUpdateRiskStatus() {
    return this.to('UpdateRiskStatus');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateEngagement',
      'CreateEngagementAttachment',
      'CreateEngagementCommunication',
      'DeleteNotificationConfigurationForDelegatedAdmin',
      'ExcludeCheckItems',
      'GenerateReport',
      'IncludeCheckItems',
      'RefreshCheck',
      'SetAccountAccess',
      'SetOrganizationAccess',
      'UpdateEngagement',
      'UpdateEngagementStatus',
      'UpdateNotificationConfigurations',
      'UpdateNotificationPreferences',
      'UpdateOrganizationRecommendationLifecycle',
      'UpdateRecommendationLifecycle',
      'UpdateRiskStatus'
    ],
    Read: [
      'DescribeAccount',
      'DescribeAccountAccess',
      'DescribeCheckItems',
      'DescribeCheckRefreshStatuses',
      'DescribeCheckStatusHistoryChanges',
      'DescribeCheckSummaries',
      'DescribeChecks',
      'DescribeNotificationConfigurations',
      'DescribeNotificationPreferences',
      'DescribeOrganization',
      'DescribeOrganizationAccounts',
      'DescribeReports',
      'DescribeRisk',
      'DescribeRiskResources',
      'DescribeRisks',
      'DescribeServiceMetadata',
      'DownloadRisk',
      'GetEngagement',
      'GetEngagementAttachment',
      'GetEngagementType',
      'GetOrganizationRecommendation',
      'GetRecommendation',
      'ListAccountsForParent',
      'ListEngagementCommunications',
      'ListEngagementTypes',
      'ListEngagements',
      'ListOrganizationalUnitsForParent',
      'ListRoots'
    ],
    List: [
      'ListChecks',
      'ListOrganizationRecommendationAccounts',
      'ListOrganizationRecommendationResources',
      'ListOrganizationRecommendations',
      'ListRecommendationResources',
      'ListRecommendations'
    ]
  };

  /**
   * Adds a resource of type checks to the statement
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_TrustedAdvisorCheckDescription.html
   *
   * @param categoryCode - Identifier for the categoryCode.
   * @param checkId - Identifier for the checkId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onChecks(categoryCode: string, checkId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:trustedadvisor:${ region || this.defaultRegion }:${ account || this.defaultAccount }:checks/${ categoryCode }/${ checkId }`);
  }
}
