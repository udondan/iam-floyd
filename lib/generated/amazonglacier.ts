import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [glacier](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonglacier.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Glacier extends PolicyStatement {
  public servicePrefix = 'glacier';

  /**
   * Statement provider for service [glacier](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonglacier.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Aborts a multipart upload identified by the upload ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html
   */
  public toAbortMultipartUpload() {
    this.to('glacier:AbortMultipartUpload');
    return this;
  }

  /**
   * Aborts the vault locking process if the vault lock is not in the Locked state
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-AbortVaultLock.html
   */
  public toAbortVaultLock() {
    this.to('glacier:AbortVaultLock');
    return this;
  }

  /**
   * Adds the specified tags to a vault
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-AddTagsToVault.html
   */
  public toAddTagsToVault() {
    this.to('glacier:AddTagsToVault');
    return this;
  }

  /**
   * Completes a multipart upload process
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html
   */
  public toCompleteMultipartUpload() {
    this.to('glacier:CompleteMultipartUpload');
    return this;
  }

  /**
   * Completes the vault locking process
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-CompleteVaultLock.html
   */
  public toCompleteVaultLock() {
    this.to('glacier:CompleteVaultLock');
    return this;
  }

  /**
   * Creates a new vault with the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html
   */
  public toCreateVault() {
    this.to('glacier:CreateVault');
    return this;
  }

  /**
   * Deletes an archive from a vault
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifArchiveAgeInDays()
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html
   */
  public toDeleteArchive() {
    this.to('glacier:DeleteArchive');
    return this;
  }

  /**
   * Deletes a vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html
   */
  public toDeleteVault() {
    this.to('glacier:DeleteVault');
    return this;
  }

  /**
   * Deletes the access policy associated with the specified vault
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-DeleteVaultAccessPolicy.html
   */
  public toDeleteVaultAccessPolicy() {
    this.to('glacier:DeleteVaultAccessPolicy');
    return this;
  }

  /**
   * Deletes the notification configuration set for a vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-delete.html
   */
  public toDeleteVaultNotifications() {
    this.to('glacier:DeleteVaultNotifications');
    return this;
  }

  /**
   * Returns information about a job you previously initiated
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html
   */
  public toDescribeJob() {
    this.to('glacier:DescribeJob');
    return this;
  }

  /**
   * Returns information about a vault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get..html
   */
  public toDescribeVault() {
    this.to('glacier:DescribeVault');
    return this;
  }

  /**
   * Returns the current data retrieval policy for the account and region specified in the GET request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetDataRetrievalPolicy.html
   */
  public toGetDataRetrievalPolicy() {
    this.to('glacier:GetDataRetrievalPolicy');
    return this;
  }

  /**
   * Downloads the output of the job you initiated
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html
   */
  public toGetJobOutput() {
    this.to('glacier:GetJobOutput');
    return this;
  }

  /**
   * Retrieves the access-policy subresource set on the vault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetVaultAccessPolicy.html
   */
  public toGetVaultAccessPolicy() {
    this.to('glacier:GetVaultAccessPolicy');
    return this;
  }

  /**
   * Retrieves attributes from the lock-policy subresource set on the specified vault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetVaultLock.html
   */
  public toGetVaultLock() {
    this.to('glacier:GetVaultLock');
    return this;
  }

  /**
   * Retrieves the notification-configuration subresource set on the vault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html
   */
  public toGetVaultNotifications() {
    this.to('glacier:GetVaultNotifications');
    return this;
  }

  /**
   * Initiates a job of the specified type
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifArchiveAgeInDays()
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html
   */
  public toInitiateJob() {
    this.to('glacier:InitiateJob');
    return this;
  }

  /**
   * Initiates a multipart upload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html
   */
  public toInitiateMultipartUpload() {
    this.to('glacier:InitiateMultipartUpload');
    return this;
  }

  /**
   * Initiates the vault locking process
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-InitiateVaultLock.html
   */
  public toInitiateVaultLock() {
    this.to('glacier:InitiateVaultLock');
    return this;
  }

  /**
   * Lists jobs for a vault that are in-progress and jobs that have recently finished
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html
   */
  public toListJobs() {
    this.to('glacier:ListJobs');
    return this;
  }

  /**
   * Lists in-progress multipart uploads for the specified vault
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html
   */
  public toListMultipartUploads() {
    this.to('glacier:ListMultipartUploads');
    return this;
  }

  /**
   * Lists the parts of an archive that have been uploaded in a specific multipart upload
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html
   */
  public toListParts() {
    this.to('glacier:ListParts');
    return this;
  }

  /**
   * This operation lists the provisioned capacity for the specified AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-ListProvisionedCapacity.html
   */
  public toListProvisionedCapacity() {
    this.to('glacier:ListProvisionedCapacity');
    return this;
  }

  /**
   * Lists all the tags attached to a vault
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-ListTagsForVault.html
   */
  public toListTagsForVault() {
    this.to('glacier:ListTagsForVault');
    return this;
  }

  /**
   * Lists all vaults
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html
   */
  public toListVaults() {
    this.to('glacier:ListVaults');
    return this;
  }

  /**
   * This operation purchases a provisioned capacity unit for an AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-PurchaseProvisionedCapacity.html
   */
  public toPurchaseProvisionedCapacity() {
    this.to('glacier:PurchaseProvisionedCapacity');
    return this;
  }

  /**
   * Removes one or more tags from the set of tags attached to a vault
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-RemoveTagsFromVault.html
   */
  public toRemoveTagsFromVault() {
    this.to('glacier:RemoveTagsFromVault');
    return this;
  }

  /**
   * Sets and then enacts a data retrieval policy in the region specified in the PUT request
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetDataRetrievalPolicy.html
   */
  public toSetDataRetrievalPolicy() {
    this.to('glacier:SetDataRetrievalPolicy');
    return this;
  }

  /**
   * Configures an access policy for a vault and will overwrite an existing policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html
   */
  public toSetVaultAccessPolicy() {
    this.to('glacier:SetVaultAccessPolicy');
    return this;
  }

  /**
   * Configures vault notifications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html
   */
  public toSetVaultNotifications() {
    this.to('glacier:SetVaultNotifications');
    return this;
  }

  /**
   * Adds an archive to a vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html
   */
  public toUploadArchive() {
    this.to('glacier:UploadArchive');
    return this;
  }

  /**
   * Uploads a part of an archive
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html
   */
  public toUploadMultipartPart() {
    this.to('glacier:UploadMultipartPart');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AbortMultipartUpload",
      "CompleteMultipartUpload",
      "CreateVault",
      "DeleteArchive",
      "DeleteVault",
      "DeleteVaultNotifications",
      "InitiateJob",
      "InitiateMultipartUpload",
      "PurchaseProvisionedCapacity",
      "SetVaultNotifications",
      "UploadArchive",
      "UploadMultipartPart"
    ],
    "Permissions management": [
      "AbortVaultLock",
      "CompleteVaultLock",
      "DeleteVaultAccessPolicy",
      "InitiateVaultLock",
      "SetDataRetrievalPolicy",
      "SetVaultAccessPolicy"
    ],
    "Tagging": [
      "AddTagsToVault",
      "RemoveTagsFromVault"
    ],
    "Read": [
      "DescribeJob",
      "DescribeVault",
      "GetDataRetrievalPolicy",
      "GetJobOutput",
      "GetVaultAccessPolicy",
      "GetVaultLock",
      "GetVaultNotifications"
    ],
    "List": [
      "ListJobs",
      "ListMultipartUploads",
      "ListParts",
      "ListProvisionedCapacity",
      "ListTagsForVault",
      "ListVaults"
    ]
  };

  /**
   * Adds a resource of type vault to the statement
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-vaults.html
   *
   * @param vaultName - Identifier for the vaultName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onVault(vaultName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:glacier:${Region}:${Account}:vaults/${VaultName}';
    arn = arn.replace('${VaultName}', vaultName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * How long an archive has been stored in the vault, in days.
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/access-control-overview.html#specifying-conditions
   *
   * Applies to actions:
   * - .toDeleteArchive()
   * - .toInitiateJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifArchiveAgeInDays(value: string | string[], operator?: string) {
    return this.if(`glacier:ArchiveAgeInDays`, value, operator || 'StringLike');
  }

  /**
   * A customer-defined tag.
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/access-control-overview.html#specifying-conditions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTagExists(value: string | string[], operator?: string) {
    return this.if(`glacier:ResourceTag/`, value, operator || 'StringLike');
  }
}
