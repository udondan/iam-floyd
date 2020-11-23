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
    this.to('AcceptInvitation');
    return this;
  }

  /**
   * Grants permission to archive one or more findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-archive.html
   */
  public toArchiveFindings() {
    this.to('ArchiveFindings');
    return this;
  }

  /**
   * Grants permission to retrieve information about one or more custom data identifiers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-get.html
   */
  public toBatchGetCustomDataIdentifiers() {
    this.to('BatchGetCustomDataIdentifiers');
    return this;
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
    this.to('CreateClassificationJob');
    return this;
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
    this.to('CreateCustomDataIdentifier');
    return this;
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
    this.to('CreateFindingsFilter');
    return this;
  }

  /**
   * Grants permission to send an Amazon Macie membership invitation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations.html
   */
  public toCreateInvitations() {
    this.to('CreateInvitations');
    return this;
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
    this.to('CreateMember');
    return this;
  }

  /**
   * Grants permission to create sample findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-sample.html
   */
  public toCreateSampleFindings() {
    this.to('CreateSampleFindings');
    return this;
  }

  /**
   * Grants permission to decline Amazon Macie membership invitations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations-decline.html
   */
  public toDeclineInvitations() {
    this.to('DeclineInvitations');
    return this;
  }

  /**
   * Grants permission to delete a custom data identifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-id.html
   */
  public toDeleteCustomDataIdentifier() {
    this.to('DeleteCustomDataIdentifier');
    return this;
  }

  /**
   * Grants permission to delete a findings filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html
   */
  public toDeleteFindingsFilter() {
    this.to('DeleteFindingsFilter');
    return this;
  }

  /**
   * Grants permission to delete Amazon Macie membership invitations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations-delete.html
   */
  public toDeleteInvitations() {
    this.to('DeleteInvitations');
    return this;
  }

  /**
   * Grants permission to delete the association between an Amazon Macie master account and an account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html
   */
  public toDeleteMember() {
    this.to('DeleteMember');
    return this;
  }

  /**
   * Grants permission to retrieve statistical and other data about S3 buckets that Amazon Macie monitors and analyzes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html
   */
  public toDescribeBuckets() {
    this.to('DescribeBuckets');
    return this;
  }

  /**
   * Grants permission to retrieve information about the status and settings for a classification job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/jobs-jobid.html
   */
  public toDescribeClassificationJob() {
    this.to('DescribeClassificationJob');
    return this;
  }

  /**
   * Grants permission to retrieve information about the Amazon Macie configuration settings for an AWS organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin-configuration.html
   */
  public toDescribeOrganizationConfiguration() {
    this.to('DescribeOrganizationConfiguration');
    return this;
  }

  /**
   * Grants permission to disable an Amazon Macie account, which also deletes Macie resources for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  public toDisableMacie() {
    this.to('DisableMacie');
    return this;
  }

  /**
   * Grants permission to disable an account as a delegated administrator of Amazon Macie for an AWS organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  public toDisableOrganizationAdminAccount() {
    this.to('DisableOrganizationAdminAccount');
    return this;
  }

  /**
   * Grants an Amazon Macie member account with permission to disassociate from its master account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/master-disassociate.html
   */
  public toDisassociateFromMasterAccount() {
    this.to('DisassociateFromMasterAccount');
    return this;
  }

  /**
   * Grants an Amazon Macie master account with permission to disassociate from a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members-disassociate-id.html
   */
  public toDisassociateMember() {
    this.to('DisassociateMember');
    return this;
  }

  /**
   * Grants permission to enable and specify the configuration settings for a new Amazon Macie account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  public toEnableMacie() {
    this.to('EnableMacie');
    return this;
  }

  /**
   * Grants permission to enable an account as a delegated administrator of Amazon Macie for an AWS organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  public toEnableOrganizationAdminAccount() {
    this.to('EnableOrganizationAdminAccount');
    return this;
  }

  /**
   * Grants permission to retrieve aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3-statistics.html
   */
  public toGetBucketStatistics() {
    this.to('GetBucketStatistics');
    return this;
  }

  /**
   * Grants permission to retrieve the settings for exporting data classification results
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html
   */
  public toGetClassificationExportConfiguration() {
    this.to('GetClassificationExportConfiguration');
    return this;
  }

  /**
   * Grants permission to retrieve information about the settings for a custom data identifier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-id.html
   */
  public toGetCustomDataIdentifier() {
    this.to('GetCustomDataIdentifier');
    return this;
  }

  /**
   * Grants permission to retrieve aggregated statistical data about findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-statistics.html
   */
  public toGetFindingStatistics() {
    this.to('GetFindingStatistics');
    return this;
  }

  /**
   * Grants permission to retrieve information about one or more findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-describe.html
   */
  public toGetFindings() {
    this.to('GetFindings');
    return this;
  }

  /**
   * Grants permission to retrieve information about the settings for a findings filter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html
   */
  public toGetFindingsFilter() {
    this.to('GetFindingsFilter');
    return this;
  }

  /**
   * Grants permission to retrieve the count of Amazon Macie membership invitations that were received by an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations-count.html
   */
  public toGetInvitationsCount() {
    this.to('GetInvitationsCount');
    return this;
  }

  /**
   * Grants permission to retrieve information about the status and configuration settings for an Amazon Macie account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  public toGetMacieSession() {
    this.to('GetMacieSession');
    return this;
  }

  /**
   * Grants permission to retrieve information about the Amazon Macie master account for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/master.html
   */
  public toGetMasterAccount() {
    this.to('GetMasterAccount');
    return this;
  }

  /**
   * Grants permission to retrieve information about an account that's associated with an Amazon Macie master account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html
   */
  public toGetMember() {
    this.to('GetMember');
    return this;
  }

  /**
   * Grants permission to retrieve quotas and aggregated usage data for one or more accounts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/usage-statistics.html
   */
  public toGetUsageStatistics() {
    this.to('GetUsageStatistics');
    return this;
  }

  /**
   * Grants permission to retrieve aggregated usage data for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/usage.html
   */
  public toGetUsageTotals() {
    this.to('GetUsageTotals');
    return this;
  }

  /**
   * Grants permission to retrieve information about the status and settings for one or more classification jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/jobs-list.html
   */
  public toListClassificationJobs() {
    this.to('ListClassificationJobs');
    return this;
  }

  /**
   * Grants permission to retrieve information about all custom data identifiers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-list.html
   */
  public toListCustomDataIdentifiers() {
    this.to('ListCustomDataIdentifiers');
    return this;
  }

  /**
   * Grants permission to retrieve a subset of information about one or more findings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings.html
   */
  public toListFindings() {
    this.to('ListFindings');
    return this;
  }

  /**
   * Grants permission to retrieve information about all findings filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters.html
   */
  public toListFindingsFilters() {
    this.to('ListFindingsFilters');
    return this;
  }

  /**
   * Grants permission to retrieve information about all the Amazon Macie membership invitations that were received by an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations.html
   */
  public toListInvitations() {
    this.to('ListInvitations');
    return this;
  }

  /**
   * Grants permission to retrieve information about all the accounts that are associated with an Amazon Macie master account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members.html
   */
  public toListMembers() {
    this.to('ListMembers');
    return this;
  }

  /**
   * Grants permission to retrieve information about the delegated, Amazon Macie administrator account for an AWS organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  public toListOrganizationAdminAccounts() {
    this.to('ListOrganizationAdminAccounts');
    return this;
  }

  /**
   * Grants permission to retrieve the tags for an Amazon Macie resource or member account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html
   */
  public toListTagsForResources() {
    this.to('ListTagsForResources');
    return this;
  }

  /**
   * Grants permission to create or update the settings for exporting data classification results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html
   */
  public toPutClassificationExportConfiguration() {
    this.to('PutClassificationExportConfiguration');
    return this;
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
    this.to('TagResource');
    return this;
  }

  /**
   * Grants permission to test a custom data identifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-test.html
   */
  public toTestCustomDataIdentifier() {
    this.to('TestCustomDataIdentifier');
    return this;
  }

  /**
   * Grants permission to reactivate (unarchive) one or more findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-unarchive.html
   */
  public toUnarchiveFindings() {
    this.to('UnarchiveFindings');
    return this;
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
    this.to('UntagResource');
    return this;
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
    this.to('UpdateClassificationJob');
    return this;
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
    this.to('UpdateFindingsFilter');
    return this;
  }

  /**
   * Grants permission to suspend or re-enable an Amazon Macie account, or update the configuration settings for a Macie account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  public toUpdateMacieSession() {
    this.to('UpdateMacieSession');
    return this;
  }

  /**
   * Grants an Amazon Macie master account with permission to suspend or re-enable a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie-members-id.html
   */
  public toUpdateMemberSession() {
    this.to('UpdateMemberSession');
    return this;
  }

  /**
   * Grants permission to update Amazon Macie configuration settings for an AWS organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin-configuration.html
   */
  public toUpdateOrganizationConfiguration() {
    this.to('UpdateOrganizationConfiguration');
    return this;
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
