import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
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
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartCopyJob.html
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
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartCopyJob.html
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
   * Grants permission to create a new report plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateReportPlan.html
   */
  public toCreateReportPlan() {
    return this.to('CreateReportPlan');
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
   * Grants permission to remove notifications from backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultNotifications.html
   */
  public toDeleteBackupVaultNotifications() {
    return this.to('DeleteBackupVaultNotifications');
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
   * Grants permission to lists restore jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreJobs.html
   */
  public toListRestoreJobs() {
    return this.to('ListRestoreJobs');
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
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateReportPlan.html
   */
  public toUpdateReportPlan() {
    return this.to('UpdateReportPlan');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CopyFromBackupVault",
      "CopyIntoBackupVault",
      "CreateBackupPlan",
      "CreateBackupSelection",
      "CreateBackupVault",
      "CreateFramework",
      "CreateReportPlan",
      "DeleteBackupPlan",
      "DeleteBackupSelection",
      "DeleteBackupVault",
      "DeleteBackupVaultNotifications",
      "DeleteFramework",
      "DeleteRecoveryPoint",
      "DeleteReportPlan",
      "DisassociateRecoveryPoint",
      "PutBackupVaultNotifications",
      "StartBackupJob",
      "StartCopyJob",
      "StartReportJob",
      "StartRestoreJob",
      "StopBackupJob",
      "UpdateBackupPlan",
      "UpdateFramework",
      "UpdateGlobalSettings",
      "UpdateRecoveryPointLifecycle",
      "UpdateRegionSettings",
      "UpdateReportPlan"
    ],
    "Permissions management": [
      "DeleteBackupVaultAccessPolicy",
      "PutBackupVaultAccessPolicy"
    ],
    "Read": [
      "DescribeBackupJob",
      "DescribeBackupVault",
      "DescribeCopyJob",
      "DescribeFramework",
      "DescribeGlobalSettings",
      "DescribeProtectedResource",
      "DescribeRecoveryPoint",
      "DescribeRegionSettings",
      "DescribeReportJob",
      "DescribeReportPlan",
      "DescribeRestoreJob",
      "ExportBackupPlanTemplate",
      "GetBackupPlan",
      "GetBackupPlanFromJSON",
      "GetBackupPlanFromTemplate",
      "GetBackupSelection",
      "GetBackupVaultAccessPolicy",
      "GetBackupVaultNotifications",
      "GetRecoveryPointRestoreMetadata",
      "GetSupportedResourceTypes",
      "ListTags"
    ],
    "List": [
      "ListBackupJobs",
      "ListBackupPlanTemplates",
      "ListBackupPlanVersions",
      "ListBackupPlans",
      "ListBackupSelections",
      "ListBackupVaults",
      "ListCopyJobs",
      "ListFrameworks",
      "ListProtectedResources",
      "ListRecoveryPointsByBackupVault",
      "ListRecoveryPointsByResource",
      "ListReportJobs",
      "ListReportPlans",
      "ListRestoreJobs"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type backupVault to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/vaults.html
   *
   * @param backupVaultName - Identifier for the backupVaultName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBackupVault(backupVaultName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:backup:${Region}:${Account}:backup-vault:${BackupVaultName}';
    arn = arn.replace('${BackupVaultName}', backupVaultName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type backupPlan to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/about-backup-plans.html
   *
   * @param backupPlanId - Identifier for the backupPlanId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBackupPlan(backupPlanId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:backup:${Region}:${Account}:backup-plan:${BackupPlanId}';
    arn = arn.replace('${BackupPlanId}', backupPlanId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type recoveryPoint to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/recovery-points.html
   *
   * @param recoveryPointId - Identifier for the recoveryPointId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRecoveryPoint(recoveryPointId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:backup:${Region}:${Account}:recovery-point:${RecoveryPointId}';
    arn = arn.replace('${RecoveryPointId}', recoveryPointId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type framework to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/frameworks.html
   *
   * @param frameworkName - Identifier for the frameworkName.
   * @param frameworkId - Identifier for the frameworkId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFramework(frameworkName: string, frameworkId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:backup:${Region}:${Account}:framework:${FrameworkName}-${FrameworkId}';
    arn = arn.replace('${FrameworkName}', frameworkName);
    arn = arn.replace('${FrameworkId}', frameworkId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type reportPlan to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/report-plans.html
   *
   * @param reportPlanName - Identifier for the reportPlanName.
   * @param reportPlanId - Identifier for the reportPlanId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReportPlan(reportPlanName: string, reportPlanId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:backup:${Region}:${Account}:report-plan:${ReportPlanName}-${ReportPlanId}';
    arn = arn.replace('${ReportPlanName}', reportPlanName);
    arn = arn.replace('${ReportPlanId}', reportPlanId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    return this.if(`CopyTargetOrgPaths`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of an backup vault
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys
   *
   * Applies to actions:
   * - .toCopyFromBackupVault()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCopyTargets(value: string | string[], operator?: Operator | string) {
    return this.if(`CopyTargets`, value, operator || 'StringLike');
  }
}
