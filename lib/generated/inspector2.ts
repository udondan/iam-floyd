import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
   * Grants permission to retrieve code snippet information about one or more code vulnerability findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchGetCodeSnippet.html
   */
  public toBatchGetCodeSnippet() {
    return this.to('BatchGetCodeSnippet');
  }

  /**
   * Grants permission to let a customer get enhanced vulnerability intelligence details for findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchGetFindingDetails.html
   */
  public toBatchGetFindingDetails() {
    return this.to('BatchGetFindingDetails');
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
   * Grants permission to delegated administrator to retrieve ec2 deep inspection status of member accounts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchGetMemberEc2DeepInspectionStatus.html
   */
  public toBatchGetMemberEc2DeepInspectionStatus() {
    return this.to('BatchGetMemberEc2DeepInspectionStatus');
  }

  /**
   * Grants permission to update ec2 deep inspection status by delegated administrator for its associated member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchUpdateMemberEc2DeepInspectionStatus.html
   */
  public toBatchUpdateMemberEc2DeepInspectionStatus() {
    return this.to('BatchUpdateMemberEc2DeepInspectionStatus');
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
   * Grants permission to cancel the generation of an SBOM report
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_CancelSbomExport.html
   */
  public toCancelSbomExport() {
    return this.to('CancelSbomExport');
  }

  /**
   * Grants permission to create and define the settings for a CIS scan configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_CreateCisScanConfiguration.html
   */
  public toCreateCisScanConfiguration() {
    return this.to('CreateCisScanConfiguration');
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
   * Grants permission to request the generation of an SBOM report
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_CreateSbomExport.html
   */
  public toCreateSbomExport() {
    return this.to('CreateSbomExport');
  }

  /**
   * Grants permission to delete a CIS scan configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_DeleteCisScanConfiguration.html
   */
  public toDeleteCisScanConfiguration() {
    return this.to('DeleteCisScanConfiguration');
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
   * Grants permission to retrieve a report containing information about completed CIS scans
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetCisScanReport.html
   */
  public toGetCisScanReport() {
    return this.to('GetCisScanReport');
  }

  /**
   * Grants permission to retrieve information about all details pertaining to one CIS scan and one targeted resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetCisScanResultDetails.html
   */
  public toGetCisScanResultDetails() {
    return this.to('GetCisScanResultDetails');
  }

  /**
   * Grants permission to retrieve information about the Amazon Inspector configuration settings for an AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetConfiguration.html
   */
  public toGetConfiguration() {
    return this.to('GetConfiguration');
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
   * Grants permission to retrieve ec2 deep inspection configuration for standalone accounts, delegated administrator and member account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetEc2DeepInspectionConfiguration.html
   */
  public toGetEc2DeepInspectionConfiguration() {
    return this.to('GetEc2DeepInspectionConfiguration');
  }

  /**
   * Grants permission to retrieve information about the KMS key used to encrypt code snippets with
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetEncryptionKey.html
   */
  public toGetEncryptionKey() {
    return this.to('GetEncryptionKey');
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
   * Grants permission to retrieve a requested SBOM report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetSbomExport.html
   */
  public toGetSbomExport() {
    return this.to('GetSbomExport');
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
   * Grants permission to retrieve information about all CIS scan configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListCisScanConfigurations.html
   */
  public toListCisScanConfigurations() {
    return this.to('ListCisScanConfigurations');
  }

  /**
   * Grants permission to retrieve information about all checks pertaining to one CIS scan
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListCisScanResultsAggregatedByChecks.html
   */
  public toListCisScanResultsAggregatedByChecks() {
    return this.to('ListCisScanResultsAggregatedByChecks');
  }

  /**
   * Grants permission to retrieve information about all resources pertaining to one CIS scan
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListCisScanResultsAggregatedByTargetResource.html
   */
  public toListCisScanResultsAggregatedByTargetResource() {
    return this.to('ListCisScanResultsAggregatedByTargetResource');
  }

  /**
   * Grants permission to retrieve information about completed CIS scans
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListCisScans.html
   */
  public toListCisScans() {
    return this.to('ListCisScans');
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
   * Grants permission to let a customer reset to use an Amazon-owned KMS key to encrypt code snippets with
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ResetEncryptionKey.html
   */
  public toResetEncryptionKey() {
    return this.to('ResetEncryptionKey');
  }

  /**
   * Grants permission to list Amazon Inspector coverage details for a specific vulnerability
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_SearchVulnerabilities.html
   */
  public toSearchVulnerabilities() {
    return this.to('SearchVulnerabilities');
  }

  /**
   * Grants permission to send CIS health for a CIS scan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_SendCisSessionHealth.html
   */
  public toSendCisSessionHealth() {
    return this.to('SendCisSessionHealth');
  }

  /**
   * Grants permission to send CIS telemetry for a CIS scan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_SendCisSessionTelemetry.html
   */
  public toSendCisSessionTelemetry() {
    return this.to('SendCisSessionTelemetry');
  }

  /**
   * Grants permission to start a CIS scan session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_StartCisSession.html
   */
  public toStartCisSession() {
    return this.to('StartCisSession');
  }

  /**
   * Grants permission to stop a CIS scan session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_StopCisSession.html
   */
  public toStopCisSession() {
    return this.to('StopCisSession');
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
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the settings for a CIS scan configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateCisScanConfiguration.html
   */
  public toUpdateCisScanConfiguration() {
    return this.to('UpdateCisScanConfiguration');
  }

  /**
   * Grants permission to update information about the Amazon Inspector configuration settings for an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateConfiguration.html
   */
  public toUpdateConfiguration() {
    return this.to('UpdateConfiguration');
  }

  /**
   * Grants permission to update ec2 deep inspection configuration by delegated administrator, member and standalone account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateEc2DeepInspectionConfiguration.html
   */
  public toUpdateEc2DeepInspectionConfiguration() {
    return this.to('UpdateEc2DeepInspectionConfiguration');
  }

  /**
   * Grants permission to let a customer use a KMS key to encrypt code snippets with
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateEncryptionKey.html
   */
  public toUpdateEncryptionKey() {
    return this.to('UpdateEncryptionKey');
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
   * Grants permission to update ec2 deep inspection configuration by delegated administrator for its associated member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateOrgEc2DeepInspectionConfiguration.html
   */
  public toUpdateOrgEc2DeepInspectionConfiguration() {
    return this.to('UpdateOrgEc2DeepInspectionConfiguration');
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
      'BatchUpdateMemberEc2DeepInspectionStatus',
      'CancelFindingsReport',
      'CancelSbomExport',
      'CreateCisScanConfiguration',
      'CreateFilter',
      'CreateFindingsReport',
      'CreateSbomExport',
      'DeleteCisScanConfiguration',
      'DeleteFilter',
      'Disable',
      'DisableDelegatedAdminAccount',
      'DisassociateMember',
      'Enable',
      'EnableDelegatedAdminAccount',
      'ResetEncryptionKey',
      'SendCisSessionHealth',
      'SendCisSessionTelemetry',
      'StartCisSession',
      'StopCisSession',
      'UpdateCisScanConfiguration',
      'UpdateConfiguration',
      'UpdateEc2DeepInspectionConfiguration',
      'UpdateEncryptionKey',
      'UpdateFilter',
      'UpdateOrgEc2DeepInspectionConfiguration',
      'UpdateOrganizationConfiguration'
    ],
    Read: [
      'BatchGetAccountStatus',
      'BatchGetCodeSnippet',
      'BatchGetFindingDetails',
      'BatchGetFreeTrialInfo',
      'BatchGetMemberEc2DeepInspectionStatus',
      'DescribeOrganizationConfiguration',
      'GetCisScanReport',
      'GetConfiguration',
      'GetDelegatedAdminAccount',
      'GetEc2DeepInspectionConfiguration',
      'GetEncryptionKey',
      'GetFindingsReportStatus',
      'GetMember',
      'GetSbomExport',
      'ListTagsForResource',
      'SearchVulnerabilities'
    ],
    List: [
      'GetCisScanResultDetails',
      'ListAccountPermissions',
      'ListCisScanConfigurations',
      'ListCisScanResultsAggregatedByChecks',
      'ListCisScanResultsAggregatedByTargetResource',
      'ListCisScans',
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFilter(ownerId: string, filterId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:inspector2:${ region || this.defaultRegion }:${ account || this.defaultAccount }:owner/${ ownerId }/filter/${ filterId }`);
  }

  /**
   * Adds a resource of type Finding to the statement
   *
   * https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html
   *
   * @param findingId - Identifier for the findingId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onFinding(findingId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:inspector2:${ region || this.defaultRegion }:${ account || this.defaultAccount }:finding/${ findingId }`);
  }

  /**
   * Adds a resource of type CIS Scan Configuration to the statement
   *
   * https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html
   *
   * @param ownerId - Identifier for the ownerId.
   * @param cISScanConfigurationId - Identifier for the cISScanConfigurationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCISScanConfiguration(ownerId: string, cISScanConfigurationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:inspector2:${ region || this.defaultRegion }:${ account || this.defaultAccount }:owner/${ ownerId }/cis-configuration/${ cISScanConfigurationId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateCisScanConfiguration()
   * - .toCreateFilter()
   * - .toTagResource()
   * - .toUpdateFilter()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateCisScanConfiguration()
   * - .toDeleteCisScanConfiguration()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateCisScanConfiguration()
   *
   * Applies to resource types:
   * - Filter
   * - CIS Scan Configuration
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateCisScanConfiguration()
   * - .toCreateFilter()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateFilter()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
