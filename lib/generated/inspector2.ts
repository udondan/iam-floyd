import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [inspector2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Inspector2 extends PolicyStatement {
  public servicePrefix = 'inspector2';

  /**
   * Statement provider for service [inspector2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector2.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate an account with an Amazon Inspector administrator account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_AssociateMember.html
   */
  public toAssociateMember() {
    return this.to('AssociateMember');
  }

  /**
   * Grants permission to retrieve information about Amazon Inspector accounts for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchGetAccountStatus.html
   */
  public toBatchGetAccountStatus() {
    return this.to('BatchGetAccountStatus');
  }

  /**
   * Grants permission to retrieve free trial period eligibility about Amazon Inspector accounts for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchGetFreeTrialInfo.html
   */
  public toBatchGetFreeTrialInfo() {
    return this.to('BatchGetFreeTrialInfo');
  }

  /**
   * Grants permission to cancel the generation of a findings report
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_CancelFindingsReport.html
   */
  public toCancelFindingsReport() {
    return this.to('CancelFindingsReport');
  }

  /**
   * Grants permission to create and define the settings for a findings filter
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_CreateFilter.html
   */
  public toCreateFilter() {
    return this.to('CreateFilter');
  }

  /**
   * Grants permission to request the generation of a findings report
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_CreateFindingsReport.html
   */
  public toCreateFindingsReport() {
    return this.to('CreateFindingsReport');
  }

  /**
   * Grants permission to delete a findings filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_DeleteFilter.html
   */
  public toDeleteFilter() {
    return this.to('DeleteFilter');
  }

  /**
   * Grants permission to retrieve information about the Amazon Inspector configuration settings for an AWS organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_DescribeOrganizationConfiguration.html
   */
  public toDescribeOrganizationConfiguration() {
    return this.to('DescribeOrganizationConfiguration');
  }

  /**
   * Grants permission to disable an Amazon Inspector account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_Disable.html
   */
  public toDisable() {
    return this.to('Disable');
  }

  /**
   * Grants permission to disable an account as the delegated Amazon Inspector administrator account for an AWS organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_DisableDelegatedAdminAccount.html
   */
  public toDisableDelegatedAdminAccount() {
    return this.to('DisableDelegatedAdminAccount');
  }

  /**
   * Grants permission to an Amazon Inspector administrator account to disassociate from an Inspector member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_DisassociateMember.html
   */
  public toDisassociateMember() {
    return this.to('DisassociateMember');
  }

  /**
   * Grants permission to enable and specify the configuration settings for a new Amazon Inspector account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_Enable.html
   */
  public toEnable() {
    return this.to('Enable');
  }

  /**
   * Grants permission to enable an account as the delegated Amazon Inspector administrator account for an AWS organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_EnableDelegatedAdminAccount.html
   */
  public toEnableDelegatedAdminAccount() {
    return this.to('EnableDelegatedAdminAccount');
  }

  /**
   * Grants permission to retrieve information about the Amazon Inspector administrator account for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetDelegatedAdminAccount.html
   */
  public toGetDelegatedAdminAccount() {
    return this.to('GetDelegatedAdminAccount');
  }

  /**
   * Grants permission to retrieve status for a requested findings report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetFindingsReportStatus.html
   */
  public toGetFindingsReportStatus() {
    return this.to('GetFindingsReportStatus');
  }

  /**
   * Grants permission to retrieve information about an account that's associated with an Amazon Inspector administrator account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetMember.html
   */
  public toGetMember() {
    return this.to('GetMember');
  }

  /**
   * Grants permission to retrieve feature configuration permissions associated with an Amazon Inspector account within an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListAccountPermissions.html
   */
  public toListAccountPermissions() {
    return this.to('ListAccountPermissions');
  }

  /**
   * Grants permission to retrieve the types of statistics Amazon Inspector can generate for resources Inspector monitors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListCoverage.html
   */
  public toListCoverage() {
    return this.to('ListCoverage');
  }

  /**
   * Grants permission to retrieve statistical data and other information about the resources Amazon Inspector monitors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListCoverageStatistics.html
   */
  public toListCoverageStatistics() {
    return this.to('ListCoverageStatistics');
  }

  /**
   * Grants permission to retrieve information about the delegated Amazon Inspector administrator account for an AWS organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListDelegatedAdminAccounts.html
   */
  public toListDelegatedAdminAccounts() {
    return this.to('ListDelegatedAdminAccounts');
  }

  /**
   * Grants permission to retrieve information about all findings filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListFilters.html
   */
  public toListFilters() {
    return this.to('ListFilters');
  }

  /**
   * Grants permission to retrieve statistical data and other information about Amazon Inspector findings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListFindingAggregations.html
   */
  public toListFindingAggregations() {
    return this.to('ListFindingAggregations');
  }

  /**
   * Grants permission to retrieve a subset of information about one or more findings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListFindings.html
   */
  public toListFindings() {
    return this.to('ListFindings');
  }

  /**
   * Grants permission to retrieve information about the Amazon Inspector member accounts that are associated with an Inspector administrator account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListMembers.html
   */
  public toListMembers() {
    return this.to('ListMembers');
  }

  /**
   * Grants permission to retrieve the tags for an Amazon Inspector resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve aggregated usage data for an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListUsageTotals.html
   */
  public toListUsageTotals() {
    return this.to('ListUsageTotals');
  }

  /**
   * Grants permission to add or update the tags for an Amazon Inspector resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from an Amazon Inspector resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the settings for a findings filter
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateFilter.html
   */
  public toUpdateFilter() {
    return this.to('UpdateFilter');
  }

  /**
   * Grants permission to update Amazon Inspector configuration settings for an AWS organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateOrganizationConfiguration.html
   */
  public toUpdateOrganizationConfiguration() {
    return this.to('UpdateOrganizationConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateMember',
      'CancelFindingsReport',
      'CreateFilter',
      'CreateFindingsReport',
      'DeleteFilter',
      'Disable',
      'DisableDelegatedAdminAccount',
      'DisassociateMember',
      'Enable',
      'EnableDelegatedAdminAccount',
      'UpdateFilter',
      'UpdateOrganizationConfiguration'
    ],
    Read: [
      'BatchGetAccountStatus',
      'BatchGetFreeTrialInfo',
      'DescribeOrganizationConfiguration',
      'GetDelegatedAdminAccount',
      'GetFindingsReportStatus',
      'GetMember',
      'ListTagsForResource'
    ],
    List: [
      'ListAccountPermissions',
      'ListCoverage',
      'ListCoverageStatistics',
      'ListDelegatedAdminAccounts',
      'ListFilters',
      'ListFindingAggregations',
      'ListFindings',
      'ListMembers',
      'ListUsageTotals'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Filter to the statement
   *
   * https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html
   *
   * @param ownerId - Identifier for the ownerId.
   * @param filterId - Identifier for the filterId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFilter(ownerId: string, filterId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Inspector2.defaultPartition }:inspector2:${ region || '*' }:${ account || '*' }:owner/${ ownerId }/filter/${ filterId }`);
  }

  /**
   * Adds a resource of type Finding to the statement
   *
   * https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html
   *
   * @param findingId - Identifier for the findingId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onFinding(findingId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Inspector2.defaultPartition }:inspector2:${ region || '*' }:${ account || '*' }:finding/${ findingId }`);
  }
}
