import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
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
   * Grants permission to archive one or more findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-archive.html
   */
  public toArchiveFindings() {
    return this.to('ArchiveFindings');
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
   * Grants permission to create and define the settings for a classification job
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
   * Grants permission to associate an account with an Amazon Macie master account
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
   * Grants permission to delete the association between an Amazon Macie master account and an account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html
   */
  public toDeleteMember() {
    return this.to('DeleteMember');
  }

  /**
   * Grants permission to retrieve statistical and other data about S3 buckets that Amazon Macie monitors and analyzes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html
   */
  public toDescribeBuckets() {
    return this.to('DescribeBuckets');
  }

  /**
   * Grants permission to retrieve information about the status and settings for a classification job
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
   * Grants permission to disable an account as a delegated administrator of Amazon Macie for an AWS organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  public toDisableOrganizationAdminAccount() {
    return this.to('DisableOrganizationAdminAccount');
  }

  /**
   * Grants an Amazon Macie member account with permission to disassociate from its master account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/master-disassociate.html
   */
  public toDisassociateFromMasterAccount() {
    return this.to('DisassociateFromMasterAccount');
  }

  /**
   * Grants an Amazon Macie master account with permission to disassociate from a member account
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
   * Grants permission to enable an account as a delegated administrator of Amazon Macie for an AWS organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  public toEnableOrganizationAdminAccount() {
    return this.to('EnableOrganizationAdminAccount');
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
   * Grants permission to retrieve the settings for exporting data classification results
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html
   */
  public toGetClassificationExportConfiguration() {
    return this.to('GetClassificationExportConfiguration');
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
   * Grants permission to retrieve information about one or more findings
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
   * Grants permission to retrieve information about the Amazon Macie master account for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/master.html
   */
  public toGetMasterAccount() {
    return this.to('GetMasterAccount');
  }

  /**
   * Grants permission to retrieve information about an account that's associated with an Amazon Macie master account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html
   */
  public toGetMember() {
    return this.to('GetMember');
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
   * Grants permission to retrieve information about the status and settings for one or more classification jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/jobs-list.html
   */
  public toListClassificationJobs() {
    return this.to('ListClassificationJobs');
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
   * Grants permission to retrieve information about all the accounts that are associated with an Amazon Macie master account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members.html
   */
  public toListMembers() {
    return this.to('ListMembers');
  }

  /**
   * Grants permission to retrieve information about the delegated, Amazon Macie administrator account for an AWS organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  public toListOrganizationAdminAccounts() {
    return this.to('ListOrganizationAdminAccounts');
  }

  /**
   * Grants permission to retrieve the tags for an Amazon Macie resource or member account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html
   */
  public toListTagsForResources() {
    return this.to('ListTagsForResources');
  }

  /**
   * Grants permission to create or update the settings for exporting data classification results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html
   */
  public toPutClassificationExportConfiguration() {
    return this.to('PutClassificationExportConfiguration');
  }

  /**
   * Grants permission to add or update the tags for an Amazon Macie resource or member account
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
   * Grants permission to reactivate (unarchive) one or more findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-unarchive.html
   */
  public toUnarchiveFindings() {
    return this.to('UnarchiveFindings');
  }

  /**
   * Grants permission to remove tags from an Amazon Macie resource or member account
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
   * Grants permission to cancel a classification job
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
   * Grants permission to suspend or re-enable an Amazon Macie account, or update the configuration settings for a Macie account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  public toUpdateMacieSession() {
    return this.to('UpdateMacieSession');
  }

  /**
   * Grants an Amazon Macie master account with permission to suspend or re-enable a member account
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

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptInvitation",
      "ArchiveFindings",
      "CreateClassificationJob",
      "CreateCustomDataIdentifier",
      "CreateFindingsFilter",
      "CreateInvitations",
      "CreateMember",
      "CreateSampleFindings",
      "DeclineInvitations",
      "DeleteCustomDataIdentifier",
      "DeleteFindingsFilter",
      "DeleteInvitations",
      "DeleteMember",
      "DisableMacie",
      "DisableOrganizationAdminAccount",
      "DisassociateFromMasterAccount",
      "DisassociateMember",
      "EnableMacie",
      "EnableOrganizationAdminAccount",
      "PutClassificationExportConfiguration",
      "TestCustomDataIdentifier",
      "UnarchiveFindings",
      "UpdateClassificationJob",
      "UpdateFindingsFilter",
      "UpdateMacieSession",
      "UpdateMemberSession",
      "UpdateOrganizationConfiguration"
    ],
    "Read": [
      "BatchGetCustomDataIdentifiers",
      "DescribeBuckets",
      "DescribeClassificationJob",
      "DescribeOrganizationConfiguration",
      "GetBucketStatistics",
      "GetClassificationExportConfiguration",
      "GetCustomDataIdentifier",
      "GetFindingStatistics",
      "GetFindings",
      "GetFindingsFilter",
      "GetInvitationsCount",
      "GetMacieSession",
      "GetMasterAccount",
      "GetMember",
      "GetUsageStatistics",
      "GetUsageTotals"
    ],
    "List": [
      "ListClassificationJobs",
      "ListCustomDataIdentifiers",
      "ListFindings",
      "ListFindingsFilters",
      "ListInvitations",
      "ListMembers",
      "ListOrganizationAdminAccounts",
      "ListTagsForResources"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type ClassificationJob to the statement
   *
   * https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onClassificationJob(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:macie2::${Account}:classification-job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type CustomDataIdentifier to the statement
   *
   * https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCustomDataIdentifier(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:macie2::${Account}:custom-data-identifier/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Member to the statement
   *
   * https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMember(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:macie2::${Account}:member/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type FindingsFilter to the statement
   *
   * https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFindingsFilter(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:macie2::${Account}:findings-filter/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
