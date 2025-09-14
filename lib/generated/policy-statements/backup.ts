import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [backup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackup.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Backup extends PolicyStatement {
  public servicePrefix = 'backup';

  /**
   * Statement provider for service [backup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackup.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate an MPA approval team with a backup vault
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifMpaApprovalTeamArn()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_AssociateBackupVaultMpaApprovalTeam.html
   */
  public toAssociateBackupVaultMpaApprovalTeam() {
    return this.to('AssociateBackupVaultMpaApprovalTeam');
  }

  /**
   * Grants permission to cancel a legal hold
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CancelLegalHold.html
   */
  public toCancelLegalHold() {
    return this.to('CancelLegalHold');
  }

  /**
   * Grants permission to copy from a backup vault
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCopyTargets()
   * - .ifCopyTargetOrgPaths()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/vaults.html.html
   */
  public toCopyFromBackupVault() {
    return this.to('CopyFromBackupVault');
  }

  /**
   * Grants permission to copy into a backup vault
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/vaults.html
   */
  public toCopyIntoBackupVault() {
    return this.to('CopyIntoBackupVault');
  }

  /**
   * Grants permission to create a new backup plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupPlan.html
   */
  public toCreateBackupPlan() {
    return this.to('CreateBackupPlan');
  }

  /**
   * Grants permission to create a new resource assignment in a backup plan
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupSelection.html
   */
  public toCreateBackupSelection() {
    return this.to('CreateBackupSelection');
  }

  /**
   * Grants permission to create a new backup vault
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupVault.html
   */
  public toCreateBackupVault() {
    return this.to('CreateBackupVault');
  }

  /**
   * Grants permission to create a new framework
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateFramework.html
   */
  public toCreateFramework() {
    return this.to('CreateFramework');
  }

  /**
   * Grants permission to create a new legal hold
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateLegalHold.html
   */
  public toCreateLegalHold() {
    return this.to('CreateLegalHold');
  }

  /**
   * Grants permission to create a new logically air-gapped backup vault, a logical container where backups are stored
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifMinRetentionDays()
   * - .ifMaxRetentionDays()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateLogicallyAirGappedBackupVault.html
   */
  public toCreateLogicallyAirGappedBackupVault() {
    return this.to('CreateLogicallyAirGappedBackupVault');
  }

  /**
   * Grants permission to create a new report plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifFrameworkArns()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateReportPlan.html
   */
  public toCreateReportPlan() {
    return this.to('CreateReportPlan');
  }

  /**
   * Grants permission to create a restore access backup vault
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateRestoreAccessBackupVault.html
   */
  public toCreateRestoreAccessBackupVault() {
    return this.to('CreateRestoreAccessBackupVault');
  }

  /**
   * Grants permission to create a new restore testing plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateRestoreTestingPlan.html
   */
  public toCreateRestoreTestingPlan() {
    return this.to('CreateRestoreTestingPlan');
  }

  /**
   * Grants permission to create a new resource assignment in a restore testing plan
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateRestoreTestingSelection.html
   */
  public toCreateRestoreTestingSelection() {
    return this.to('CreateRestoreTestingSelection');
  }

  /**
   * Grants permission to delete a backup plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupPlan.html
   */
  public toDeleteBackupPlan() {
    return this.to('DeleteBackupPlan');
  }

  /**
   * Grants permission to delete a resource assignment from a backup plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupSelection.html
   */
  public toDeleteBackupSelection() {
    return this.to('DeleteBackupSelection');
  }

  /**
   * Grants permission to delete a backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVault.html
   */
  public toDeleteBackupVault() {
    return this.to('DeleteBackupVault');
  }

  /**
   * Grants permission to delete backup vault access policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultAccessPolicy.html
   */
  public toDeleteBackupVaultAccessPolicy() {
    return this.to('DeleteBackupVaultAccessPolicy');
  }

  /**
   * Grants permission to remove the lock configuration from a backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultLockConfiguration.html
   */
  public toDeleteBackupVaultLockConfiguration() {
    return this.to('DeleteBackupVaultLockConfiguration');
  }

  /**
   * Grants permission to remove the notifications from a backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultNotifications.html
   */
  public toDeleteBackupVaultNotifications() {
    return this.to('DeleteBackupVaultNotifications');
  }

  /**
   * Grants permission to delete backup vault sharing policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/logicallyairgappedvault.html
   */
  public toDeleteBackupVaultSharingPolicy() {
    return this.to('DeleteBackupVaultSharingPolicy');
  }

  /**
   * Grants permission to delete a framework
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteFramework.html
   */
  public toDeleteFramework() {
    return this.to('DeleteFramework');
  }

  /**
   * Grants permission to delete a recovery point from a backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteRecoveryPoint.html
   */
  public toDeleteRecoveryPoint() {
    return this.to('DeleteRecoveryPoint');
  }

  /**
   * Grants permission to delete a report plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteReportPlan.html
   */
  public toDeleteReportPlan() {
    return this.to('DeleteReportPlan');
  }

  /**
   * Grants permission to delete a restore testing plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteRestoreTestingPlan.html
   */
  public toDeleteRestoreTestingPlan() {
    return this.to('DeleteRestoreTestingPlan');
  }

  /**
   * Grants permission to delete a resource assignment from a restore testing plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteRestoreTestingSelection.html
   */
  public toDeleteRestoreTestingSelection() {
    return this.to('DeleteRestoreTestingSelection');
  }

  /**
   * Grants permission to describe a backup job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeBackupJob.html
   */
  public toDescribeBackupJob() {
    return this.to('DescribeBackupJob');
  }

  /**
   * Grants permission to describe a new backup vault with the specified name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeBackupVault.html
   */
  public toDescribeBackupVault() {
    return this.to('DescribeBackupVault');
  }

  /**
   * Grants permission to describe a copy job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeCopyJob.html
   */
  public toDescribeCopyJob() {
    return this.to('DescribeCopyJob');
  }

  /**
   * Grants permission to describe a framework with the specified name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeFramework.html
   */
  public toDescribeFramework() {
    return this.to('DescribeFramework');
  }

  /**
   * Grants permission to describe global settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeGlobalSettings.html
   */
  public toDescribeGlobalSettings() {
    return this.to('DescribeGlobalSettings');
  }

  /**
   * Grants permission to describe a protected resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeProtectedResource.html
   */
  public toDescribeProtectedResource() {
    return this.to('DescribeProtectedResource');
  }

  /**
   * Grants permission to describe a recovery point
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRecoveryPoint.html
   */
  public toDescribeRecoveryPoint() {
    return this.to('DescribeRecoveryPoint');
  }

  /**
   * Grants permission to describe region settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRegionSettings.html
   */
  public toDescribeRegionSettings() {
    return this.to('DescribeRegionSettings');
  }

  /**
   * Grants permission to describe a report job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeReportJob.html
   */
  public toDescribeReportJob() {
    return this.to('DescribeReportJob');
  }

  /**
   * Grants permission to describe a report plan with the specified name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeReportPlan.html
   */
  public toDescribeReportPlan() {
    return this.to('DescribeReportPlan');
  }

  /**
   * Grants permission to describe a restore job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRestoreJob.html
   */
  public toDescribeRestoreJob() {
    return this.to('DescribeRestoreJob');
  }

  /**
   * Grants permission to disassociate an MPA approval team from a backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DisassociateBackupVaultMpaApprovalTeam.html
   */
  public toDisassociateBackupVaultMpaApprovalTeam() {
    return this.to('DisassociateBackupVaultMpaApprovalTeam');
  }

  /**
   * Grants permission to disassociate a recovery point from a backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DisassociateRecoveryPoint.html
   */
  public toDisassociateRecoveryPoint() {
    return this.to('DisassociateRecoveryPoint');
  }

  /**
   * Grants permission to disassociate a recovery point from its parent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DisassociateRecoveryPointFromParent.html
   */
  public toDisassociateRecoveryPointFromParent() {
    return this.to('DisassociateRecoveryPointFromParent');
  }

  /**
   * Grants permission to export a backup plan as a JSON
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ExportBackupPlanTemplate.html
   */
  public toExportBackupPlanTemplate() {
    return this.to('ExportBackupPlanTemplate');
  }

  /**
   * Grants permission to get a backup plan
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlan.html
   */
  public toGetBackupPlan() {
    return this.to('GetBackupPlan');
  }

  /**
   * Grants permission to transform a JSON to a backup plan
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlanFromJSON.html
   */
  public toGetBackupPlanFromJSON() {
    return this.to('GetBackupPlanFromJSON');
  }

  /**
   * Grants permission to transform a template to a backup plan
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlanFromTemplate.html
   */
  public toGetBackupPlanFromTemplate() {
    return this.to('GetBackupPlanFromTemplate');
  }

  /**
   * Grants permission to get a backup plan resource assignment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupSelection.html
   */
  public toGetBackupSelection() {
    return this.to('GetBackupSelection');
  }

  /**
   * Grants permission to get backup vault access policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupVaultAccessPolicy.html
   */
  public toGetBackupVaultAccessPolicy() {
    return this.to('GetBackupVaultAccessPolicy');
  }

  /**
   * Grants permission to get backup vault notifications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupVaultNotifications.html
   */
  public toGetBackupVaultNotifications() {
    return this.to('GetBackupVaultNotifications');
  }

  /**
   * Grants permission to get backup vault sharing policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/logicallyairgappedvault.html
   */
  public toGetBackupVaultSharingPolicy() {
    return this.to('GetBackupVaultSharingPolicy');
  }

  /**
   * Grants permission to get a legal hold
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetLegalHold.html
   */
  public toGetLegalHold() {
    return this.to('GetLegalHold');
  }

  /**
   * Grants permission to get indexing details for a recovery point
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRecoveryPointIndexDetails.html
   */
  public toGetRecoveryPointIndexDetails() {
    return this.to('GetRecoveryPointIndexDetails');
  }

  /**
   * Grants permission to get recovery point restore metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRecoveryPointRestoreMetadata.html
   */
  public toGetRecoveryPointRestoreMetadata() {
    return this.to('GetRecoveryPointRestoreMetadata');
  }

  /**
   * Grants permission to get the restore metadata associated with a restore job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRestoreJobMetadata.html
   */
  public toGetRestoreJobMetadata() {
    return this.to('GetRestoreJobMetadata');
  }

  /**
   * Grants permission to get inferred metadata generated by restore testing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRestoreTestingInferredMetadata.html
   */
  public toGetRestoreTestingInferredMetadata() {
    return this.to('GetRestoreTestingInferredMetadata');
  }

  /**
   * Grants permission to get a restore testing plan
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRestoreTestingPlan.html
   */
  public toGetRestoreTestingPlan() {
    return this.to('GetRestoreTestingPlan');
  }

  /**
   * Grants permission to get a restore testing plan resource assignment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRestoreTestingSelection.html
   */
  public toGetRestoreTestingSelection() {
    return this.to('GetRestoreTestingSelection');
  }

  /**
   * Grants permission to get supported resource types
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetSupportedResourceTypes.html
   */
  public toGetSupportedResourceTypes() {
    return this.to('GetSupportedResourceTypes');
  }

  /**
   * Grants permission to list backup job summaries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupJobSummaries.html
   */
  public toListBackupJobSummaries() {
    return this.to('ListBackupJobSummaries');
  }

  /**
   * Grants permission to list backup jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupJobs.html
   */
  public toListBackupJobs() {
    return this.to('ListBackupJobs');
  }

  /**
   * Grants permission to list backup plan templates provided by AWS Backup
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlanTemplates.html
   */
  public toListBackupPlanTemplates() {
    return this.to('ListBackupPlanTemplates');
  }

  /**
   * Grants permission to list backup plan versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlanVersions.html
   */
  public toListBackupPlanVersions() {
    return this.to('ListBackupPlanVersions');
  }

  /**
   * Grants permission to list backup plans
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlans.html
   */
  public toListBackupPlans() {
    return this.to('ListBackupPlans');
  }

  /**
   * Grants permission to list resource assignments for a specific backup plan
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupSelections.html
   */
  public toListBackupSelections() {
    return this.to('ListBackupSelections');
  }

  /**
   * Grants permission to list backup vaults
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupVaults.html
   */
  public toListBackupVaults() {
    return this.to('ListBackupVaults');
  }

  /**
   * Grants permission to list copy job summaries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListCopyJobSummaries.html
   */
  public toListCopyJobSummaries() {
    return this.to('ListCopyJobSummaries');
  }

  /**
   * Grants permission to list copy jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListCopyJobs.html
   */
  public toListCopyJobs() {
    return this.to('ListCopyJobs');
  }

  /**
   * Grants permission to list frameworks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListFrameworks.html
   */
  public toListFrameworks() {
    return this.to('ListFrameworks');
  }

  /**
   * Grants permission to get list indexed recovery points
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListIndexedRecoveryPoints.html
   */
  public toListIndexedRecoveryPoints() {
    return this.to('ListIndexedRecoveryPoints');
  }

  /**
   * Grants permission to list indexed recovery points to search
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListIndexedRecoveryPointsForSearch.html
   */
  public toListIndexedRecoveryPointsForSearch() {
    return this.to('ListIndexedRecoveryPointsForSearch');
  }

  /**
   * Grants permission to list legal holds
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListLegalHolds.html
   */
  public toListLegalHolds() {
    return this.to('ListLegalHolds');
  }

  /**
   * Grants permission to list protected resources by AWS Backup
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListProtectedResources.html
   */
  public toListProtectedResources() {
    return this.to('ListProtectedResources');
  }

  /**
   * Grants permission to list protected resources inside a backup vault
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListProtectedResourcesByBackupVault.html
   */
  public toListProtectedResourcesByBackupVault() {
    return this.to('ListProtectedResourcesByBackupVault');
  }

  /**
   * Grants permission to list recovery points inside a backup vault
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByBackupVault.html
   */
  public toListRecoveryPointsByBackupVault() {
    return this.to('ListRecoveryPointsByBackupVault');
  }

  /**
   * Grants permission to list recovery points by legal hold
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByLegalHold.html
   */
  public toListRecoveryPointsByLegalHold() {
    return this.to('ListRecoveryPointsByLegalHold');
  }

  /**
   * Grants permission to list recovery points for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByResource.html
   */
  public toListRecoveryPointsByResource() {
    return this.to('ListRecoveryPointsByResource');
  }

  /**
   * Grants permission to list report jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListReportJobs.html
   */
  public toListReportJobs() {
    return this.to('ListReportJobs');
  }

  /**
   * Grants permission to list report plans
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListReportPlans.html
   */
  public toListReportPlans() {
    return this.to('ListReportPlans');
  }

  /**
   * Grants permission to list a restore access backup vaults associated with a backup vault
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreAccessBackupVaults.html
   */
  public toListRestoreAccessBackupVaults() {
    return this.to('ListRestoreAccessBackupVaults');
  }

  /**
   * Grants permission to list restore job summaries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreJobSummaries.html
   */
  public toListRestoreJobSummaries() {
    return this.to('ListRestoreJobSummaries');
  }

  /**
   * Grants permission to list restore jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreJobs.html
   */
  public toListRestoreJobs() {
    return this.to('ListRestoreJobs');
  }

  /**
   * Grants permission to list restore jobs for a protected resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreJobsByProtectedResource.html
   */
  public toListRestoreJobsByProtectedResource() {
    return this.to('ListRestoreJobsByProtectedResource');
  }

  /**
   * Grants permission to list restore testing plans
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreTestingPlans.html
   */
  public toListRestoreTestingPlans() {
    return this.to('ListRestoreTestingPlans');
  }

  /**
   * Grants permission to list resource assignments for a specific restore testing plan
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreTestingSelections.html
   */
  public toListRestoreTestingSelections() {
    return this.to('ListRestoreTestingSelections');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Grants permission to add an access policy to the backup vault
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultAccessPolicy.html
   */
  public toPutBackupVaultAccessPolicy() {
    return this.to('PutBackupVaultAccessPolicy');
  }

  /**
   * Grants permission to add a lock configuration to the backup vault
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifChangeableForDays()
   * - .ifMinRetentionDays()
   * - .ifMaxRetentionDays()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultLockConfiguration.html
   */
  public toPutBackupVaultLockConfiguration() {
    return this.to('PutBackupVaultLockConfiguration');
  }

  /**
   * Grants permission to add an SNS topic to the backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultNotifications.html
   */
  public toPutBackupVaultNotifications() {
    return this.to('PutBackupVaultNotifications');
  }

  /**
   * Grants permission to add a sharing policy to the backup vault
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/logicallyairgappedvault.html
   */
  public toPutBackupVaultSharingPolicy() {
    return this.to('PutBackupVaultSharingPolicy');
  }

  /**
   * Grants permission to put a restore validation result
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutRestoreValidationResult.html
   */
  public toPutRestoreValidationResult() {
    return this.to('PutRestoreValidationResult');
  }

  /**
   * Grants permission to revoke a restore access backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_RevokeRestoreAccessBackupVault.html
   */
  public toRevokeRestoreAccessBackupVault() {
    return this.to('RevokeRestoreAccessBackupVault');
  }

  /**
   * Grants permission to search a recovery point
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_SearchRecoveryPoint.html
   */
  public toSearchRecoveryPoint() {
    return this.to('SearchRecoveryPoint');
  }

  /**
   * Grants permission to start a new backup job
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartBackupJob.html
   */
  public toStartBackupJob() {
    return this.to('StartBackupJob');
  }

  /**
   * Grants permission to copy a backup from a source backup vault to a destination backup vault
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartCopyJob.html
   */
  public toStartCopyJob() {
    return this.to('StartCopyJob');
  }

  /**
   * Grants permission to start a new report job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartReportJob.html
   */
  public toStartReportJob() {
    return this.to('StartReportJob');
  }

  /**
   * Grants permission to start a new restore job
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartRestoreJob.html
   */
  public toStartRestoreJob() {
    return this.to('StartRestoreJob');
  }

  /**
   * Grants permission to stop a backup job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StopBackupJob.html
   */
  public toStopBackupJob() {
    return this.to('StopBackupJob');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a backup plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateBackupPlan.html
   */
  public toUpdateBackupPlan() {
    return this.to('UpdateBackupPlan');
  }

  /**
   * Grants permission to update a framework
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateFramework.html
   */
  public toUpdateFramework() {
    return this.to('UpdateFramework');
  }

  /**
   * Grants permission to update the current global settings for the AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateGlobalSettings.html
   */
  public toUpdateGlobalSettings() {
    return this.to('UpdateGlobalSettings');
  }

  /**
   * Grants permission to update recovery point index settings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifIndex()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRecoveryPointIndexSettings.html
   */
  public toUpdateRecoveryPointIndexSettings() {
    return this.to('UpdateRecoveryPointIndexSettings');
  }

  /**
   * Grants permission to update the lifecycle of the recovery point
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRecoveryPointLifecycle.html
   */
  public toUpdateRecoveryPointLifecycle() {
    return this.to('UpdateRecoveryPointLifecycle');
  }

  /**
   * Grants permission to update the current service opt-in settings for the Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRegionSettings.html
   */
  public toUpdateRegionSettings() {
    return this.to('UpdateRegionSettings');
  }

  /**
   * Grants permission to update a report plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFrameworkArns()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateReportPlan.html
   */
  public toUpdateReportPlan() {
    return this.to('UpdateReportPlan');
  }

  /**
   * Grants permission to update a restore testing plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRestoreTestingPlan.html
   */
  public toUpdateRestoreTestingPlan() {
    return this.to('UpdateRestoreTestingPlan');
  }

  /**
   * Grants permission to update a resource assignment in a restore testing plan
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRestoreTestingSelection.html
   */
  public toUpdateRestoreTestingSelection() {
    return this.to('UpdateRestoreTestingSelection');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateBackupVaultMpaApprovalTeam',
      'CancelLegalHold',
      'CopyFromBackupVault',
      'CopyIntoBackupVault',
      'CreateBackupPlan',
      'CreateBackupSelection',
      'CreateBackupVault',
      'CreateFramework',
      'CreateLegalHold',
      'CreateLogicallyAirGappedBackupVault',
      'CreateReportPlan',
      'CreateRestoreAccessBackupVault',
      'CreateRestoreTestingPlan',
      'CreateRestoreTestingSelection',
      'DeleteBackupPlan',
      'DeleteBackupSelection',
      'DeleteBackupVault',
      'DeleteBackupVaultLockConfiguration',
      'DeleteBackupVaultNotifications',
      'DeleteFramework',
      'DeleteRecoveryPoint',
      'DeleteReportPlan',
      'DeleteRestoreTestingPlan',
      'DeleteRestoreTestingSelection',
      'DisassociateBackupVaultMpaApprovalTeam',
      'DisassociateRecoveryPoint',
      'DisassociateRecoveryPointFromParent',
      'PutBackupVaultLockConfiguration',
      'PutBackupVaultNotifications',
      'PutRestoreValidationResult',
      'RevokeRestoreAccessBackupVault',
      'StartBackupJob',
      'StartCopyJob',
      'StartReportJob',
      'StartRestoreJob',
      'StopBackupJob',
      'UpdateBackupPlan',
      'UpdateFramework',
      'UpdateGlobalSettings',
      'UpdateRecoveryPointIndexSettings',
      'UpdateRecoveryPointLifecycle',
      'UpdateRegionSettings',
      'UpdateReportPlan',
      'UpdateRestoreTestingPlan',
      'UpdateRestoreTestingSelection'
    ],
    'Permissions management': [
      'DeleteBackupVaultAccessPolicy',
      'DeleteBackupVaultSharingPolicy',
      'ListIndexedRecoveryPointsForSearch',
      'PutBackupVaultAccessPolicy',
      'PutBackupVaultSharingPolicy',
      'SearchRecoveryPoint'
    ],
    Read: [
      'DescribeBackupJob',
      'DescribeBackupVault',
      'DescribeCopyJob',
      'DescribeFramework',
      'DescribeGlobalSettings',
      'DescribeProtectedResource',
      'DescribeRecoveryPoint',
      'DescribeRegionSettings',
      'DescribeReportJob',
      'DescribeReportPlan',
      'DescribeRestoreJob',
      'ExportBackupPlanTemplate',
      'GetBackupPlan',
      'GetBackupPlanFromJSON',
      'GetBackupPlanFromTemplate',
      'GetBackupSelection',
      'GetBackupVaultAccessPolicy',
      'GetBackupVaultNotifications',
      'GetBackupVaultSharingPolicy',
      'GetLegalHold',
      'GetRecoveryPointIndexDetails',
      'GetRecoveryPointRestoreMetadata',
      'GetRestoreJobMetadata',
      'GetRestoreTestingInferredMetadata',
      'GetRestoreTestingPlan',
      'GetRestoreTestingSelection',
      'GetSupportedResourceTypes',
      'ListTags'
    ],
    List: [
      'ListBackupJobSummaries',
      'ListBackupJobs',
      'ListBackupPlanTemplates',
      'ListBackupPlanVersions',
      'ListBackupPlans',
      'ListBackupSelections',
      'ListBackupVaults',
      'ListCopyJobSummaries',
      'ListCopyJobs',
      'ListFrameworks',
      'ListIndexedRecoveryPoints',
      'ListLegalHolds',
      'ListProtectedResources',
      'ListProtectedResourcesByBackupVault',
      'ListRecoveryPointsByBackupVault',
      'ListRecoveryPointsByLegalHold',
      'ListRecoveryPointsByResource',
      'ListReportJobs',
      'ListReportPlans',
      'ListRestoreAccessBackupVaults',
      'ListRestoreJobSummaries',
      'ListRestoreJobs',
      'ListRestoreJobsByProtectedResource',
      'ListRestoreTestingPlans',
      'ListRestoreTestingSelections'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type backupVault to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/vaults.html
   *
   * @param backupVaultName - Identifier for the backupVaultName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBackupVault(backupVaultName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:backup:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:backup-vault:${ backupVaultName }`);
  }

  /**
   * Adds a resource of type backupPlan to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/about-backup-plans.html
   *
   * @param backupPlanId - Identifier for the backupPlanId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBackupPlan(backupPlanId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:backup:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:backup-plan:${ backupPlanId }`);
  }

  /**
   * Adds a resource of type recoveryPoint to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/recovery-points.html
   *
   * @param recoveryPointId - Identifier for the recoveryPointId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRecoveryPoint(recoveryPointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:backup:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:recovery-point:${ recoveryPointId }`);
  }

  /**
   * Adds a resource of type framework to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/working-with-audit-frameworks.html
   *
   * @param frameworkName - Identifier for the frameworkName.
   * @param frameworkId - Identifier for the frameworkId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFramework(frameworkName: string, frameworkId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:backup:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:framework:${ frameworkName }-${ frameworkId }`);
  }

  /**
   * Adds a resource of type reportPlan to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/create-report-plan-api.html
   *
   * @param reportPlanName - Identifier for the reportPlanName.
   * @param reportPlanId - Identifier for the reportPlanId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReportPlan(reportPlanName: string, reportPlanId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:backup:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:report-plan:${ reportPlanName }-${ reportPlanId }`);
  }

  /**
   * Adds a resource of type legalHold to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/legalhold.html
   *
   * @param legalHoldId - Identifier for the legalHoldId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLegalHold(legalHoldId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:backup:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:legal-hold:${ legalHoldId }`);
  }

  /**
   * Adds a resource of type restoreTestingPlan to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing.html
   *
   * @param restoreTestingPlanName - Identifier for the restoreTestingPlanName.
   * @param restoreTestingPlanId - Identifier for the restoreTestingPlanId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRestoreTestingPlan(restoreTestingPlanName: string, restoreTestingPlanId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:backup:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:restore-testing-plan:${ restoreTestingPlanName }-${ restoreTestingPlanId }`);
  }

  /**
   * Filters access by the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCopyIntoBackupVault()
   * - .toCreateBackupPlan()
   * - .toCreateBackupVault()
   * - .toCreateFramework()
   * - .toCreateLegalHold()
   * - .toCreateLogicallyAirGappedBackupVault()
   * - .toCreateReportPlan()
   * - .toCreateRestoreAccessBackupVault()
   * - .toCreateRestoreTestingPlan()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - backupVault
   * - backupPlan
   * - recoveryPoint
   * - framework
   * - reportPlan
   * - legalHold
   * - restoreTestingPlan
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateBackupPlan()
   * - .toCreateBackupVault()
   * - .toCreateFramework()
   * - .toCreateLegalHold()
   * - .toCreateLogicallyAirGappedBackupVault()
   * - .toCreateReportPlan()
   * - .toCreateRestoreAccessBackupVault()
   * - .toCreateRestoreTestingPlan()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the value of the ChangeableForDays parameter
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys
   *
   * Applies to actions:
   * - .toPutBackupVaultLockConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifChangeableForDays(value: number | number[], operator?: Operator | string) {
    return this.if(`ChangeableForDays`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the organization unit
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys
   *
   * Applies to actions:
   * - .toCopyFromBackupVault()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCopyTargetOrgPaths(value: string | string[], operator?: Operator | string) {
    return this.if(`CopyTargetOrgPaths`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ARN of a backup vault
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys
   *
   * Applies to actions:
   * - .toCopyFromBackupVault()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifCopyTargets(value: string | string[], operator?: Operator | string) {
    return this.if(`CopyTargets`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the Framework ARNs
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys
   *
   * Applies to actions:
   * - .toCreateReportPlan()
   * - .toUpdateReportPlan()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifFrameworkArns(value: string | string[], operator?: Operator | string) {
    return this.if(`FrameworkArns`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the value of Index parameter
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys
   *
   * Applies to actions:
   * - .toUpdateRecoveryPointIndexSettings()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIndex(value: string | string[], operator?: Operator | string) {
    return this.if(`Index`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the value of the MaxRetentionDays parameter
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys
   *
   * Applies to actions:
   * - .toCreateLogicallyAirGappedBackupVault()
   * - .toPutBackupVaultLockConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifMaxRetentionDays(value: number | number[], operator?: Operator | string) {
    return this.if(`MaxRetentionDays`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the value of the MinRetentionDays parameter
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys
   *
   * Applies to actions:
   * - .toCreateLogicallyAirGappedBackupVault()
   * - .toPutBackupVaultLockConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifMinRetentionDays(value: number | number[], operator?: Operator | string) {
    return this.if(`MinRetentionDays`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the MPA Approval Team ARN of a backup vault
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys
   *
   * Applies to actions:
   * - .toAssociateBackupVaultMpaApprovalTeam()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifMpaApprovalTeamArn(value: string | string[], operator?: Operator | string) {
    return this.if(`MpaApprovalTeamArn`, value, operator ?? 'ArnLike');
  }
}
