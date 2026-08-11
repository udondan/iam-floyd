import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [macie2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmacie.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Macie2 extends PolicyStatement {
  public servicePrefix = 'macie2';

  /**
   * Statement provider for service [macie2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmacie.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept an Amazon Macie membership invitation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations-accept.html
   */
  public toAcceptInvitation() {
    return this.to('AcceptInvitation');
  }

  /**
   * Grants permission to retrieve information about one or more custom data identifiers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-get.html
   */
  public toBatchGetCustomDataIdentifiers() {
    return this.to('BatchGetCustomDataIdentifiers');
  }

  /**
   * Grants permission to an Amazon Macie administrator to change the status of automated sensitive data discovery for one or more accounts in their organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/automated-discovery-accounts.html
   */
  public toBatchUpdateAutomatedDiscoveryAccounts() {
    return this.to('BatchUpdateAutomatedDiscoveryAccounts');
  }

  /**
   * Grants permission to create and define the settings for an allow list
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/allow-lists.html
   */
  public toCreateAllowList() {
    return this.to('CreateAllowList');
  }

  /**
   * Grants permission to create and define the settings for a sensitive data discovery job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/jobs.html
   */
  public toCreateClassificationJob() {
    return this.to('CreateClassificationJob');
  }

  /**
   * Grants permission to create and define the settings for a custom data identifier
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers.html
   */
  public toCreateCustomDataIdentifier() {
    return this.to('CreateCustomDataIdentifier');
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
   * https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters.html
   */
  public toCreateFindingsFilter() {
    return this.to('CreateFindingsFilter');
  }

  /**
   * Grants permission to send an Amazon Macie membership invitation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations.html
   */
  public toCreateInvitations() {
    return this.to('CreateInvitations');
  }

  /**
   * Grants permission to associate an account with an Amazon Macie administrator account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members.html
   */
  public toCreateMember() {
    return this.to('CreateMember');
  }

  /**
   * Grants permission to create sample findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-sample.html
   */
  public toCreateSampleFindings() {
    return this.to('CreateSampleFindings');
  }

  /**
   * Grants permission to decline Amazon Macie membership invitations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations-decline.html
   */
  public toDeclineInvitations() {
    return this.to('DeclineInvitations');
  }

  /**
   * Grants permission to delete an allow list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/allow-lists-id.html
   */
  public toDeleteAllowList() {
    return this.to('DeleteAllowList');
  }

  /**
   * Grants permission to delete a custom data identifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-id.html
   */
  public toDeleteCustomDataIdentifier() {
    return this.to('DeleteCustomDataIdentifier');
  }

  /**
   * Grants permission to delete a findings filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html
   */
  public toDeleteFindingsFilter() {
    return this.to('DeleteFindingsFilter');
  }

  /**
   * Grants permission to delete Amazon Macie membership invitations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations-delete.html
   */
  public toDeleteInvitations() {
    return this.to('DeleteInvitations');
  }

  /**
   * Grants permission to delete the association between an Amazon Macie administrator account and an account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html
   */
  public toDeleteMember() {
    return this.to('DeleteMember');
  }

  /**
   * Grants permission to retrieve statistical data and other information about S3 buckets that Amazon Macie monitors and analyzes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html
   */
  public toDescribeBuckets() {
    return this.to('DescribeBuckets');
  }

  /**
   * Grants permission to retrieve information about the status and settings for a sensitive data discovery job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/jobs-jobid.html
   */
  public toDescribeClassificationJob() {
    return this.to('DescribeClassificationJob');
  }

  /**
   * Grants permission to retrieve information about the Amazon Macie configuration settings for an AWS organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin-configuration.html
   */
  public toDescribeOrganizationConfiguration() {
    return this.to('DescribeOrganizationConfiguration');
  }

  /**
   * Grants permission to disable an Amazon Macie account, which also deletes Macie resources for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  public toDisableMacie() {
    return this.to('DisableMacie');
  }

  /**
   * Grants permission to disable an account as the delegated Amazon Macie administrator account for an AWS organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  public toDisableOrganizationAdminAccount() {
    return this.to('DisableOrganizationAdminAccount');
  }

  /**
   * Grants permission to an Amazon Macie member account to disassociate from its Macie administrator account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/administrator-disassociate.html
   */
  public toDisassociateFromAdministratorAccount() {
    return this.to('DisassociateFromAdministratorAccount');
  }

  /**
   * Grants permission to an Amazon Macie member account to disassociate from its Macie administrator account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/master-disassociate.html
   */
  public toDisassociateFromMasterAccount() {
    return this.to('DisassociateFromMasterAccount');
  }

  /**
   * Grants permission to an Amazon Macie administrator account to disassociate from a Macie member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members-disassociate-id.html
   */
  public toDisassociateMember() {
    return this.to('DisassociateMember');
  }

  /**
   * Grants permission to enable and specify the configuration settings for a new Amazon Macie account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  public toEnableMacie() {
    return this.to('EnableMacie');
  }

  /**
   * Grants permission to enable an account as the delegated Amazon Macie administrator account for an AWS organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  public toEnableOrganizationAdminAccount() {
    return this.to('EnableOrganizationAdminAccount');
  }

  /**
   * Grants permission to retrieve information about the Amazon Macie administrator account for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/administrator.html
   */
  public toGetAdministratorAccount() {
    return this.to('GetAdministratorAccount');
  }

  /**
   * Grants permission to retrieve the settings and status of an allow list
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/allow-lists-id.html
   */
  public toGetAllowList() {
    return this.to('GetAllowList');
  }

  /**
   * Grants permission to retrieve the configuration settings and status of automated sensitive data discovery for an Amazon Macie administrator account, organization, or standalone account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/automated-discovery-configuration.html
   */
  public toGetAutomatedDiscoveryConfiguration() {
    return this.to('GetAutomatedDiscoveryConfiguration');
  }

  /**
   * Grants permission to retrieve aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3-statistics.html
   */
  public toGetBucketStatistics() {
    return this.to('GetBucketStatistics');
  }

  /**
   * Grants permission to retrieve the settings for exporting sensitive data discovery results
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html
   */
  public toGetClassificationExportConfiguration() {
    return this.to('GetClassificationExportConfiguration');
  }

  /**
   * Grants permission to retrieve the classification scope settings for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/classification-scopes-id.html
   */
  public toGetClassificationScope() {
    return this.to('GetClassificationScope');
  }

  /**
   * Grants permission to retrieve information about the settings for a custom data identifier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-id.html
   */
  public toGetCustomDataIdentifier() {
    return this.to('GetCustomDataIdentifier');
  }

  /**
   * Grants permission to retrieve aggregated statistical data about findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-statistics.html
   */
  public toGetFindingStatistics() {
    return this.to('GetFindingStatistics');
  }

  /**
   * Grants permission to retrieve the details of one or more findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-describe.html
   */
  public toGetFindings() {
    return this.to('GetFindings');
  }

  /**
   * Grants permission to retrieve information about the settings for a findings filter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html
   */
  public toGetFindingsFilter() {
    return this.to('GetFindingsFilter');
  }

  /**
   * Grants permission to retrieve the configuration settings for publishing findings to AWS Security Hub
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-publication-configuration.html
   */
  public toGetFindingsPublicationConfiguration() {
    return this.to('GetFindingsPublicationConfiguration');
  }

  /**
   * Grants permission to retrieve the count of Amazon Macie membership invitations that were received by an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations-count.html
   */
  public toGetInvitationsCount() {
    return this.to('GetInvitationsCount');
  }

  /**
   * Grants permission to retrieve information about the status and configuration settings for an Amazon Macie account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  public toGetMacieSession() {
    return this.to('GetMacieSession');
  }

  /**
   * Grants permission to retrieve information about the Amazon Macie administrator account for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/master.html
   */
  public toGetMasterAccount() {
    return this.to('GetMasterAccount');
  }

  /**
   * Grants permission to retrieve information about an account that's associated with an Amazon Macie administrator account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html
   */
  public toGetMember() {
    return this.to('GetMember');
  }

  /**
   * Grants permission to retrieve sensitive data discovery statistics and the sensitivity score for an S3 bucket
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/resource-profiles.html
   */
  public toGetResourceProfile() {
    return this.to('GetResourceProfile');
  }

  /**
   * Grants permission to retrieve the status and configuration settings for retrieving occurrences of sensitive data reported by findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/reveal-configuration.html
   */
  public toGetRevealConfiguration() {
    return this.to('GetRevealConfiguration');
  }

  /**
   * Grants permission to retrieve occurrences of sensitive data reported by a finding
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-findingid-reveal.html
   */
  public toGetSensitiveDataOccurrences() {
    return this.to('GetSensitiveDataOccurrences');
  }

  /**
   * Grants permission to check whether occurrences of sensitive data can be retrieved for a finding
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-findingid-reveal-availability.html
   */
  public toGetSensitiveDataOccurrencesAvailability() {
    return this.to('GetSensitiveDataOccurrencesAvailability');
  }

  /**
   * Grants permission to retrieve the sensitivity inspection template settings for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/templates-sensitivity-inspections-id.html
   */
  public toGetSensitivityInspectionTemplate() {
    return this.to('GetSensitivityInspectionTemplate');
  }

  /**
   * Grants permission to retrieve quotas and aggregated usage data for one or more accounts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/usage-statistics.html
   */
  public toGetUsageStatistics() {
    return this.to('GetUsageStatistics');
  }

  /**
   * Grants permission to retrieve aggregated usage data for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/usage.html
   */
  public toGetUsageTotals() {
    return this.to('GetUsageTotals');
  }

  /**
   * Grants permission to retrieve a subset of information about all the allow lists for an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/allow-lists.html
   */
  public toListAllowLists() {
    return this.to('ListAllowLists');
  }

  /**
   * Grants permission to retrieve the status of automated sensitive data discovery for an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/automated-discovery-accounts.html
   */
  public toListAutomatedDiscoveryAccounts() {
    return this.to('ListAutomatedDiscoveryAccounts');
  }

  /**
   * Grants permission to retrieve a subset of information about the status and settings for one or more sensitive data discovery jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/jobs-list.html
   */
  public toListClassificationJobs() {
    return this.to('ListClassificationJobs');
  }

  /**
   * Grants permission to retrieve a subset of information about the classification scope for an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/classification-scopes.html
   */
  public toListClassificationScopes() {
    return this.to('ListClassificationScopes');
  }

  /**
   * Grants permission to retrieve information about all custom data identifiers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-list.html
   */
  public toListCustomDataIdentifiers() {
    return this.to('ListCustomDataIdentifiers');
  }

  /**
   * Grants permission to retrieve a subset of information about one or more findings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings.html
   */
  public toListFindings() {
    return this.to('ListFindings');
  }

  /**
   * Grants permission to retrieve information about all findings filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters.html
   */
  public toListFindingsFilters() {
    return this.to('ListFindingsFilters');
  }

  /**
   * Grants permission to retrieve information about all the Amazon Macie membership invitations that were received by an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations.html
   */
  public toListInvitations() {
    return this.to('ListInvitations');
  }

  /**
   * Grants permission to retrieve information about managed data identifiers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/managed-data-identifiers-list.html
   */
  public toListManagedDataIdentifiers() {
    return this.to('ListManagedDataIdentifiers');
  }

  /**
   * Grants permission to retrieve information about the Amazon Macie member accounts that are associated with a Macie administrator account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members.html
   */
  public toListMembers() {
    return this.to('ListMembers');
  }

  /**
   * Grants permission to retrieve information about the delegated Amazon Macie administrator account for an AWS organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  public toListOrganizationAdminAccounts() {
    return this.to('ListOrganizationAdminAccounts');
  }

  /**
   * Grants permission to retrieve information about objects that Amazon Macie selected from an S3 bucket for automated sensitive data discovery
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/resource-profiles-artifacts.html
   */
  public toListResourceProfileArtifacts() {
    return this.to('ListResourceProfileArtifacts');
  }

  /**
   * Grants permission to retrieve information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/resource-profiles-detections.html
   */
  public toListResourceProfileDetections() {
    return this.to('ListResourceProfileDetections');
  }

  /**
   * Grants permission to retrieve a subset of information about the sensitivity inspection template for an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/templates-sensitivity-inspections.html
   */
  public toListSensitivityInspectionTemplates() {
    return this.to('ListSensitivityInspectionTemplates');
  }

  /**
   * Grants permission to retrieve the tags for an Amazon Macie resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create or update the settings for storing sensitive data discovery results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html
   */
  public toPutClassificationExportConfiguration() {
    return this.to('PutClassificationExportConfiguration');
  }

  /**
   * Grants permission to update the configuration settings for publishing findings to AWS Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-publication-configuration.html
   */
  public toPutFindingsPublicationConfiguration() {
    return this.to('PutFindingsPublicationConfiguration');
  }

  /**
   * Grants permission to retrieve statistical data and other information about AWS resources that Amazon Macie monitors and analyzes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/datasources-search-resources.html
   */
  public toSearchResources() {
    return this.to('SearchResources');
  }

  /**
   * Grants permission to add or update the tags for an Amazon Macie resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to test a custom data identifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-test.html
   */
  public toTestCustomDataIdentifier() {
    return this.to('TestCustomDataIdentifier');
  }

  /**
   * Grants permission to remove tags from an Amazon Macie resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the settings for an allow list
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/allow-lists-id.html
   */
  public toUpdateAllowList() {
    return this.to('UpdateAllowList');
  }

  /**
   * Grants permission to change the status of automated sensitive data discovery for an Amazon Macie administrator account, organization, or standalone account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/automated-discovery-configuration.html
   */
  public toUpdateAutomatedDiscoveryConfiguration() {
    return this.to('UpdateAutomatedDiscoveryConfiguration');
  }

  /**
   * Grants permission to change the status of a sensitive data discovery job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/jobs-jobid.html
   */
  public toUpdateClassificationJob() {
    return this.to('UpdateClassificationJob');
  }

  /**
   * Grants permission to update the classification scope settings for an account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/classification-scopes-id.html
   */
  public toUpdateClassificationScope() {
    return this.to('UpdateClassificationScope');
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
   * https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html
   */
  public toUpdateFindingsFilter() {
    return this.to('UpdateFindingsFilter');
  }

  /**
   * Grants permission to an Amazon Macie administrator account to suspend or re-enable Macie for a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  public toUpdateMacieSession() {
    return this.to('UpdateMacieSession');
  }

  /**
   * Grants permission to an Amazon Macie administrator account to suspend or re-enable a Macie member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie-members-id.html
   */
  public toUpdateMemberSession() {
    return this.to('UpdateMemberSession');
  }

  /**
   * Grants permission to update Amazon Macie configuration settings for an AWS organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin-configuration.html
   */
  public toUpdateOrganizationConfiguration() {
    return this.to('UpdateOrganizationConfiguration');
  }

  /**
   * Grants permission to update the sensitivity score for an S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/resource-profiles.html
   */
  public toUpdateResourceProfile() {
    return this.to('UpdateResourceProfile');
  }

  /**
   * Grants permission to update the sensitivity scoring settings for an S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/resource-profiles-detections.html
   */
  public toUpdateResourceProfileDetections() {
    return this.to('UpdateResourceProfileDetections');
  }

  /**
   * Grants permission to update the status and configuration settings for retrieving occurrences of sensitive data reported by findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/reveal-configuration.html
   */
  public toUpdateRevealConfiguration() {
    return this.to('UpdateRevealConfiguration');
  }

  /**
   * Grants permission to update the sensitivity inspection template settings for an account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/templates-sensitivity-inspections-id.html
   */
  public toUpdateSensitivityInspectionTemplate() {
    return this.to('UpdateSensitivityInspectionTemplate');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptInvitation',
      'BatchUpdateAutomatedDiscoveryAccounts',
      'CreateAllowList',
      'CreateClassificationJob',
      'CreateCustomDataIdentifier',
      'CreateFindingsFilter',
      'CreateInvitations',
      'CreateMember',
      'CreateSampleFindings',
      'DeclineInvitations',
      'DeleteAllowList',
      'DeleteCustomDataIdentifier',
      'DeleteFindingsFilter',
      'DeleteInvitations',
      'DeleteMember',
      'DisableMacie',
      'DisableOrganizationAdminAccount',
      'DisassociateFromAdministratorAccount',
      'DisassociateFromMasterAccount',
      'DisassociateMember',
      'EnableMacie',
      'EnableOrganizationAdminAccount',
      'PutClassificationExportConfiguration',
      'PutFindingsPublicationConfiguration',
      'TestCustomDataIdentifier',
      'UpdateAllowList',
      'UpdateAutomatedDiscoveryConfiguration',
      'UpdateClassificationJob',
      'UpdateClassificationScope',
      'UpdateFindingsFilter',
      'UpdateMacieSession',
      'UpdateMemberSession',
      'UpdateOrganizationConfiguration',
      'UpdateResourceProfile',
      'UpdateResourceProfileDetections',
      'UpdateRevealConfiguration',
      'UpdateSensitivityInspectionTemplate'
    ],
    Read: [
      'BatchGetCustomDataIdentifiers',
      'DescribeBuckets',
      'DescribeClassificationJob',
      'DescribeOrganizationConfiguration',
      'GetAdministratorAccount',
      'GetAllowList',
      'GetAutomatedDiscoveryConfiguration',
      'GetBucketStatistics',
      'GetClassificationExportConfiguration',
      'GetClassificationScope',
      'GetCustomDataIdentifier',
      'GetFindingStatistics',
      'GetFindings',
      'GetFindingsFilter',
      'GetFindingsPublicationConfiguration',
      'GetInvitationsCount',
      'GetMacieSession',
      'GetMasterAccount',
      'GetMember',
      'GetResourceProfile',
      'GetRevealConfiguration',
      'GetSensitiveDataOccurrences',
      'GetSensitiveDataOccurrencesAvailability',
      'GetSensitivityInspectionTemplate',
      'GetUsageStatistics',
      'GetUsageTotals',
      'ListTagsForResource',
      'SearchResources'
    ],
    List: [
      'ListAllowLists',
      'ListAutomatedDiscoveryAccounts',
      'ListClassificationJobs',
      'ListClassificationScopes',
      'ListCustomDataIdentifiers',
      'ListFindings',
      'ListFindingsFilters',
      'ListInvitations',
      'ListManagedDataIdentifiers',
      'ListMembers',
      'ListOrganizationAdminAccounts',
      'ListResourceProfileArtifacts',
      'ListResourceProfileDetections',
      'ListSensitivityInspectionTemplates'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type AllowList to the statement
   *
   * https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAllowList(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:macie2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:allow-list/${ resourceId }`);
  }

  /**
   * Adds a resource of type ClassificationJob to the statement
   *
   * https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onClassificationJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:macie2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:classification-job/${ resourceId }`);
  }

  /**
   * Adds a resource of type CustomDataIdentifier to the statement
   *
   * https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCustomDataIdentifier(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:macie2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:custom-data-identifier/${ resourceId }`);
  }

  /**
   * Adds a resource of type FindingsFilter to the statement
   *
   * https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFindingsFilter(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:macie2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:findings-filter/${ resourceId }`);
  }

  /**
   * Adds a resource of type Member to the statement
   *
   * https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMember(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:macie2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:member/${ resourceId }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAllowList()
   * - .toCreateClassificationJob()
   * - .toCreateCustomDataIdentifier()
   * - .toCreateFindingsFilter()
   * - .toCreateMember()
   * - .toTagResource()
   * - .toUpdateClassificationJob()
   * - .toUpdateFindingsFilter()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - AllowList
   * - ClassificationJob
   * - CustomDataIdentifier
   * - FindingsFilter
   * - Member
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAllowList()
   * - .toCreateClassificationJob()
   * - .toCreateCustomDataIdentifier()
   * - .toCreateFindingsFilter()
   * - .toCreateMember()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateClassificationJob()
   * - .toUpdateFindingsFilter()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
