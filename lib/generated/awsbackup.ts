import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [backup](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbackup.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Backup extends PolicyStatement {
  public servicePrefix = 'backup';

  /**
   * Statement provider for service [backup](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbackup.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Copy into a backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CopyIntoBackupVault.html
   */
  public toCopyIntoBackupVault() {
    this.to('backup:CopyIntoBackupVault');
    return this;
  }

  /**
   * Creates a new backup plan
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
    this.to('backup:CreateBackupPlan');
    return this;
  }

  /**
   * Creates a new resource assignment in a backup plan.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupSelection.html
   */
  public toCreateBackupSelection() {
    this.to('backup:CreateBackupSelection');
    return this;
  }

  /**
   * Creates a new backup vault.
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
    this.to('backup:CreateBackupVault');
    return this;
  }

  /**
   * Deletes a backup plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupPlan.html
   */
  public toDeleteBackupPlan() {
    this.to('backup:DeleteBackupPlan');
    return this;
  }

  /**
   * Deletes a resource assignment from a backup plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupSelection.html
   */
  public toDeleteBackupSelection() {
    this.to('backup:DeleteBackupSelection');
    return this;
  }

  /**
   * Deletes a backup vault.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVault.html
   */
  public toDeleteBackupVault() {
    this.to('backup:DeleteBackupVault');
    return this;
  }

  /**
   * Deletes backup vault access policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultAccessPolicy.html
   */
  public toDeleteBackupVaultAccessPolicy() {
    this.to('backup:DeleteBackupVaultAccessPolicy');
    return this;
  }

  /**
   * Remove notifications from backup vault.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultNotifications.html
   */
  public toDeleteBackupVaultNotifications() {
    this.to('backup:DeleteBackupVaultNotifications');
    return this;
  }

  /**
   * Deletes a recovery point from a backup vault.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteRecoveryPoint.html
   */
  public toDeleteRecoveryPoint() {
    this.to('backup:DeleteRecoveryPoint');
    return this;
  }

  /**
   * Describes a backup job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeBackupJob.html
   */
  public toDescribeBackupJob() {
    this.to('backup:DescribeBackupJob');
    return this;
  }

  /**
   * Creates a new backup vault with the specified name.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeBackupVault.html
   */
  public toDescribeBackupVault() {
    this.to('backup:DescribeBackupVault');
    return this;
  }

  /**
   * Describes a copy job
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeCopyJob.html
   */
  public toDescribeCopyJob() {
    this.to('backup:DescribeCopyJob');
    return this;
  }

  /**
   * Describes a protected resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeProtectedResource.html
   */
  public toDescribeProtectedResource() {
    this.to('backup:DescribeProtectedResource');
    return this;
  }

  /**
   * Describes a recovery point.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRecoveryPoint.html
   */
  public toDescribeRecoveryPoint() {
    this.to('backup:DescribeRecoveryPoint');
    return this;
  }

  /**
   * Describes region settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRegionSettings.html
   */
  public toDescribeRegionSettings() {
    this.to('backup:DescribeRegionSettings');
    return this;
  }

  /**
   * Describes a restore job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRestoreJob.html
   */
  public toDescribeRestoreJob() {
    this.to('backup:DescribeRestoreJob');
    return this;
  }

  /**
   * Exports a backup plan as a JSON.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ExportBackupPlanTemplate.html
   */
  public toExportBackupPlanTemplate() {
    this.to('backup:ExportBackupPlanTemplate');
    return this;
  }

  /**
   * Gets a backup plan.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlan.html
   */
  public toGetBackupPlan() {
    this.to('backup:GetBackupPlan');
    return this;
  }

  /**
   * Transforms a JSON to a backup plan.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlanFromJSON.html
   */
  public toGetBackupPlanFromJSON() {
    this.to('backup:GetBackupPlanFromJSON');
    return this;
  }

  /**
   * Transforms a template to a backup plan.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlanFromTemplate.html
   */
  public toGetBackupPlanFromTemplate() {
    this.to('backup:GetBackupPlanFromTemplate');
    return this;
  }

  /**
   * Gets a backup plan resource assignment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupSelection.html
   */
  public toGetBackupSelection() {
    this.to('backup:GetBackupSelection');
    return this;
  }

  /**
   * Gets backup vault access policy.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupVaultAccessPolicy.html
   */
  public toGetBackupVaultAccessPolicy() {
    this.to('backup:GetBackupVaultAccessPolicy');
    return this;
  }

  /**
   * Gets backup vault notifications.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupVaultNotifications.html
   */
  public toGetBackupVaultNotifications() {
    this.to('backup:GetBackupVaultNotifications');
    return this;
  }

  /**
   * Gets recovery point restore metadata.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRecoveryPointRestoreMetadata.html
   */
  public toGetRecoveryPointRestoreMetadata() {
    this.to('backup:GetRecoveryPointRestoreMetadata');
    return this;
  }

  /**
   * Gets supported resource types.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetSupportedResourceTypes.html
   */
  public toGetSupportedResourceTypes() {
    this.to('backup:GetSupportedResourceTypes');
    return this;
  }

  /**
   * Lists backup jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupJobs.html
   */
  public toListBackupJobs() {
    this.to('backup:ListBackupJobs');
    return this;
  }

  /**
   * Lists backup plan templates provided by AWS Backup.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlanTemplates.html
   */
  public toListBackupPlanTemplates() {
    this.to('backup:ListBackupPlanTemplates');
    return this;
  }

  /**
   * Lists backup plan versions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlanVersions.html
   */
  public toListBackupPlanVersions() {
    this.to('backup:ListBackupPlanVersions');
    return this;
  }

  /**
   * Lists backup plans.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlans.html
   */
  public toListBackupPlans() {
    this.to('backup:ListBackupPlans');
    return this;
  }

  /**
   * Lists resource assignments for a specific backup plan.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupSelections.html
   */
  public toListBackupSelections() {
    this.to('backup:ListBackupSelections');
    return this;
  }

  /**
   * Lists backup vaults.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupVaults.html
   */
  public toListBackupVaults() {
    this.to('backup:ListBackupVaults');
    return this;
  }

  /**
   * List copy jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListCopyJobs.html
   */
  public toListCopyJobs() {
    this.to('backup:ListCopyJobs');
    return this;
  }

  /**
   * Lists protected resources by AWS Backup.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListProtectedResources.html
   */
  public toListProtectedResources() {
    this.to('backup:ListProtectedResources');
    return this;
  }

  /**
   * Lists recovery points inside a backup vault.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByBackupVault.html
   */
  public toListRecoveryPointsByBackupVault() {
    this.to('backup:ListRecoveryPointsByBackupVault');
    return this;
  }

  /**
   * Lists recovery points for a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByResource.html
   */
  public toListRecoveryPointsByResource() {
    this.to('backup:ListRecoveryPointsByResource');
    return this;
  }

  /**
   * Lists restore jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreJobs.html
   */
  public toListRestoreJobs() {
    this.to('backup:ListRestoreJobs');
    return this;
  }

  /**
   * Lists tags for a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListTags.html
   */
  public toListTags() {
    this.to('backup:ListTags');
    return this;
  }

  /**
   * Adds an access policy to the backup vault.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultAccessPolicy.html
   */
  public toPutBackupVaultAccessPolicy() {
    this.to('backup:PutBackupVaultAccessPolicy');
    return this;
  }

  /**
   * Adds an SNS topic to the backup vault.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultNotifications.html
   */
  public toPutBackupVaultNotifications() {
    this.to('backup:PutBackupVaultNotifications');
    return this;
  }

  /**
   * Starts a new backup job.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartBackupJob.html
   */
  public toStartBackupJob() {
    this.to('backup:StartBackupJob');
    return this;
  }

  /**
   * Copy a backup from a source region to a destination region.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartCopyJob.html
   */
  public toStartCopyJob() {
    this.to('backup:StartCopyJob');
    return this;
  }

  /**
   * Starts a new restore job.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartRestoreJob.html
   */
  public toStartRestoreJob() {
    this.to('backup:StartRestoreJob');
    return this;
  }

  /**
   * Stops a backup job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StopBackupJob.html
   */
  public toStopBackupJob() {
    this.to('backup:StopBackupJob');
    return this;
  }

  /**
   * Tags a resource.
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
    this.to('backup:TagResource');
    return this;
  }

  /**
   * Untags a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('backup:UntagResource');
    return this;
  }

  /**
   * Updates a backup plan.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateBackupPlan.html
   */
  public toUpdateBackupPlan() {
    this.to('backup:UpdateBackupPlan');
    return this;
  }

  /**
   * Updates the lifecycle of the recovery point.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRecoveryPointLifecycle.html
   */
  public toUpdateRecoveryPointLifecycle() {
    this.to('backup:UpdateRecoveryPointLifecycle');
    return this;
  }

  /**
   * Describes region settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRegionSettings.html
   */
  public toUpdateRegionSettings() {
    this.to('backup:UpdateRegionSettings');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CopyIntoBackupVault",
      "CreateBackupPlan",
      "CreateBackupSelection",
      "CreateBackupVault",
      "DeleteBackupPlan",
      "DeleteBackupSelection",
      "DeleteBackupVault",
      "DeleteBackupVaultAccessPolicy",
      "DeleteBackupVaultNotifications",
      "DeleteRecoveryPoint",
      "PutBackupVaultAccessPolicy",
      "PutBackupVaultNotifications",
      "StartBackupJob",
      "StartCopyJob",
      "StartRestoreJob",
      "StopBackupJob",
      "UpdateBackupPlan",
      "UpdateRecoveryPointLifecycle",
      "UpdateRegionSettings"
    ],
    "Read": [
      "DescribeBackupJob",
      "DescribeBackupVault",
      "DescribeCopyJob",
      "DescribeProtectedResource",
      "DescribeRecoveryPoint",
      "DescribeRegionSettings",
      "DescribeRestoreJob",
      "ExportBackupPlanTemplate",
      "GetBackupPlan",
      "GetBackupPlanFromJSON",
      "GetBackupPlanFromTemplate",
      "GetBackupSelection",
      "GetBackupVaultAccessPolicy",
      "GetBackupVaultNotifications",
      "GetRecoveryPointRestoreMetadata",
      "GetSupportedResourceTypes"
    ],
    "List": [
      "ListBackupJobs",
      "ListBackupPlanTemplates",
      "ListBackupPlanVersions",
      "ListBackupPlans",
      "ListBackupSelections",
      "ListBackupVaults",
      "ListCopyJobs",
      "ListProtectedResources",
      "ListRecoveryPointsByBackupVault",
      "ListRecoveryPointsByResource",
      "ListRestoreJobs",
      "ListTags"
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
}
