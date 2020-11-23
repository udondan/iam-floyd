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
   * Allows to copy from a backup vault
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
    this.to('CopyFromBackupVault');
    return this;
  }

  /**
   * Allows to copy into a backup vault
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartCopyJob.html
   */
  public toCopyIntoBackupVault() {
    this.to('CopyIntoBackupVault');
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
    this.to('CreateBackupPlan');
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
    this.to('CreateBackupSelection');
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
    this.to('CreateBackupVault');
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
    this.to('DeleteBackupPlan');
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
    this.to('DeleteBackupSelection');
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
    this.to('DeleteBackupVault');
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
    this.to('DeleteBackupVaultAccessPolicy');
    return this;
  }

  /**
   * Removes notifications from backup vault.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultNotifications.html
   */
  public toDeleteBackupVaultNotifications() {
    this.to('DeleteBackupVaultNotifications');
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
    this.to('DeleteRecoveryPoint');
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
    this.to('DescribeBackupJob');
    return this;
  }

  /**
   * Describes a new backup vault with the specified name.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeBackupVault.html
   */
  public toDescribeBackupVault() {
    this.to('DescribeBackupVault');
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
    this.to('DescribeCopyJob');
    return this;
  }

  /**
   * Describes global settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeGlobalSettings.html
   */
  public toDescribeGlobalSettings() {
    this.to('DescribeGlobalSettings');
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
    this.to('DescribeProtectedResource');
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
    this.to('DescribeRecoveryPoint');
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
    this.to('DescribeRegionSettings');
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
    this.to('DescribeRestoreJob');
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
    this.to('ExportBackupPlanTemplate');
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
    this.to('GetBackupPlan');
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
    this.to('GetBackupPlanFromJSON');
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
    this.to('GetBackupPlanFromTemplate');
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
    this.to('GetBackupSelection');
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
    this.to('GetBackupVaultAccessPolicy');
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
    this.to('GetBackupVaultNotifications');
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
    this.to('GetRecoveryPointRestoreMetadata');
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
    this.to('GetSupportedResourceTypes');
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
    this.to('ListBackupJobs');
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
    this.to('ListBackupPlanTemplates');
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
    this.to('ListBackupPlanVersions');
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
    this.to('ListBackupPlans');
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
    this.to('ListBackupSelections');
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
    this.to('ListBackupVaults');
    return this;
  }

  /**
   * Lists copy jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListCopyJobs.html
   */
  public toListCopyJobs() {
    this.to('ListCopyJobs');
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
    this.to('ListProtectedResources');
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
    this.to('ListRecoveryPointsByBackupVault');
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
    this.to('ListRecoveryPointsByResource');
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
    this.to('ListRestoreJobs');
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
    this.to('ListTags');
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
    this.to('PutBackupVaultAccessPolicy');
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
    this.to('PutBackupVaultNotifications');
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
    this.to('StartBackupJob');
    return this;
  }

  /**
   * Copy a backup from a source backup vault to a destination backup vault.
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
    this.to('StartCopyJob');
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
    this.to('StartRestoreJob');
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
    this.to('StopBackupJob');
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
    this.to('TagResource');
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
    this.to('UntagResource');
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
    this.to('UpdateBackupPlan');
    return this;
  }

  /**
   * Updates global settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateGlobalSettings.html
   */
  public toUpdateGlobalSettings() {
    this.to('UpdateGlobalSettings');
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
    this.to('UpdateRecoveryPointLifecycle');
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
    this.to('UpdateRegionSettings');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CopyFromBackupVault",
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
      "UpdateGlobalSettings",
      "UpdateRecoveryPointLifecycle",
      "UpdateRegionSettings"
    ],
    "Read": [
      "DescribeBackupJob",
      "DescribeBackupVault",
      "DescribeCopyJob",
      "DescribeGlobalSettings",
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

  /**
   * Filters actions based on the organization unit.
   *
   * Applies to actions:
   * - .toCopyFromBackupVault()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCopyTargetOrgPaths(value: string | string[], operator?: Operator | string) {
    return this.if(`backup:CopyTargetOrgPaths`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the ARN of an backup vault.
   *
   * Applies to actions:
   * - .toCopyFromBackupVault()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCopyTargets(value: string | string[], operator?: Operator | string) {
    return this.if(`backup:CopyTargets`, value, operator || 'StringLike');
  }
}
