import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [trustedadvisor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_trustedadvisor.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Trustedadvisor extends PolicyStatement {
  public servicePrefix = 'trustedadvisor';

  /**
   * Statement provider for service [trustedadvisor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_trustedadvisor.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to update one or more exclusion status for a list of recommendation resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  public toBatchUpdateRecommendationResourceExclusion() {
    return this.to('BatchUpdateRecommendationResourceExclusion');
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
   * Grants permission to list Recommendation of a Resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor-api.html
   */
  public toListRecommendationsForResource() {
    return this.to('ListRecommendationsForResource');
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
      'BatchUpdateRecommendationResourceExclusion',
      'DeleteNotificationConfigurationForDelegatedAdmin',
      'RefreshCheck',
      'UpdateNotificationConfigurations',
      'UpdateOrganizationRecommendationLifecycle',
      'UpdateRecommendationLifecycle',
      'UpdateRiskStatus'
    ],
    Read: [
      'DescribeCheckItems',
      'DescribeCheckRefreshStatuses',
      'DescribeCheckSummaries',
      'DescribeChecks',
      'DescribeNotificationConfigurations',
      'DescribeRisk',
      'DescribeRiskResources',
      'DescribeRisks',
      'DownloadRisk',
      'GetOrganizationRecommendation',
      'GetRecommendation'
    ],
    List: [
      'ListChecks',
      'ListOrganizationRecommendationAccounts',
      'ListOrganizationRecommendationResources',
      'ListOrganizationRecommendations',
      'ListRecommendationResources',
      'ListRecommendations',
      'ListRecommendationsForResource'
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:trustedadvisor:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:checks/${ categoryCode }/${ checkId }`);
  }
}
