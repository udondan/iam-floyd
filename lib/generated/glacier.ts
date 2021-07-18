import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [glacier](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonglacier.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Glacier extends PolicyStatement {
  public servicePrefix = 'glacier';

  /**
   * Statement provider for service [glacier](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonglacier.html).
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
    return this.to('AbortMultipartUpload');
  }

  /**
   * Aborts the vault locking process if the vault lock is not in the Locked state
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-AbortVaultLock.html
   */
  public toAbortVaultLock() {
    return this.to('AbortVaultLock');
  }

  /**
   * Adds the specified tags to a vault
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-AddTagsToVault.html
   */
  public toAddTagsToVault() {
    return this.to('AddTagsToVault');
  }

  /**
   * Completes a multipart upload process
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html
   */
  public toCompleteMultipartUpload() {
    return this.to('CompleteMultipartUpload');
  }

  /**
   * Completes the vault locking process
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-CompleteVaultLock.html
   */
  public toCompleteVaultLock() {
    return this.to('CompleteVaultLock');
  }

  /**
   * Creates a new vault with the specified name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html
   */
  public toCreateVault() {
    return this.to('CreateVault');
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
    return this.to('DeleteArchive');
  }

  /**
   * Deletes a vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html
   */
  public toDeleteVault() {
    return this.to('DeleteVault');
  }

  /**
   * Deletes the access policy associated with the specified vault
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-DeleteVaultAccessPolicy.html
   */
  public toDeleteVaultAccessPolicy() {
    return this.to('DeleteVaultAccessPolicy');
  }

  /**
   * Deletes the notification configuration set for a vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-delete.html
   */
  public toDeleteVaultNotifications() {
    return this.to('DeleteVaultNotifications');
  }

  /**
   * Returns information about a job you previously initiated
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html
   */
  public toDescribeJob() {
    return this.to('DescribeJob');
  }

  /**
   * Returns information about a vault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get..html
   */
  public toDescribeVault() {
    return this.to('DescribeVault');
  }

  /**
   * Returns the current data retrieval policy for the account and region specified in the GET request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetDataRetrievalPolicy.html
   */
  public toGetDataRetrievalPolicy() {
    return this.to('GetDataRetrievalPolicy');
  }

  /**
   * Downloads the output of the job you initiated
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html
   */
  public toGetJobOutput() {
    return this.to('GetJobOutput');
  }

  /**
   * Retrieves the access-policy subresource set on the vault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetVaultAccessPolicy.html
   */
  public toGetVaultAccessPolicy() {
    return this.to('GetVaultAccessPolicy');
  }

  /**
   * Retrieves attributes from the lock-policy subresource set on the specified vault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetVaultLock.html
   */
  public toGetVaultLock() {
    return this.to('GetVaultLock');
  }

  /**
   * Retrieves the notification-configuration subresource set on the vault
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html
   */
  public toGetVaultNotifications() {
    return this.to('GetVaultNotifications');
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
    return this.to('InitiateJob');
  }

  /**
   * Initiates a multipart upload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html
   */
  public toInitiateMultipartUpload() {
    return this.to('InitiateMultipartUpload');
  }

  /**
   * Initiates the vault locking process
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-InitiateVaultLock.html
   */
  public toInitiateVaultLock() {
    return this.to('InitiateVaultLock');
  }

  /**
   * Lists jobs for a vault that are in-progress and jobs that have recently finished
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * Lists in-progress multipart uploads for the specified vault
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html
   */
  public toListMultipartUploads() {
    return this.to('ListMultipartUploads');
  }

  /**
   * Lists the parts of an archive that have been uploaded in a specific multipart upload
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html
   */
  public toListParts() {
    return this.to('ListParts');
  }

  /**
   * This operation lists the provisioned capacity for the specified AWSaccount.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-ListProvisionedCapacity.html
   */
  public toListProvisionedCapacity() {
    return this.to('ListProvisionedCapacity');
  }

  /**
   * Lists all the tags attached to a vault
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-ListTagsForVault.html
   */
  public toListTagsForVault() {
    return this.to('ListTagsForVault');
  }

  /**
   * Lists all vaults
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html
   */
  public toListVaults() {
    return this.to('ListVaults');
  }

  /**
   * This operation purchases a provisioned capacity unit for an AWSaccount.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-PurchaseProvisionedCapacity.html
   */
  public toPurchaseProvisionedCapacity() {
    return this.to('PurchaseProvisionedCapacity');
  }

  /**
   * Removes one or more tags from the set of tags attached to a vault
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-RemoveTagsFromVault.html
   */
  public toRemoveTagsFromVault() {
    return this.to('RemoveTagsFromVault');
  }

  /**
   * Sets and then enacts a data retrieval policy in the region specified in the PUT request
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetDataRetrievalPolicy.html
   */
  public toSetDataRetrievalPolicy() {
    return this.to('SetDataRetrievalPolicy');
  }

  /**
   * Configures an access policy for a vault and will overwrite an existing policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html
   */
  public toSetVaultAccessPolicy() {
    return this.to('SetVaultAccessPolicy');
  }

  /**
   * Configures vault notifications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html
   */
  public toSetVaultNotifications() {
    return this.to('SetVaultNotifications');
  }

  /**
   * Adds an archive to a vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html
   */
  public toUploadArchive() {
    return this.to('UploadArchive');
  }

  /**
   * Uploads a part of an archive
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html
   */
  public toUploadMultipartPart() {
    return this.to('UploadMultipartPart');
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
  public ifArchiveAgeInDays(value: string | string[], operator?: Operator | string) {
    return this.if(`ArchiveAgeInDays`, value, operator || 'StringLike');
  }

  /**
   * A customer-defined tag.
   *
   * https://docs.aws.amazon.com/amazonglacier/latest/dev/access-control-overview.html#specifying-conditions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTagExists(value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/`, value, operator || 'StringLike');
  }
}
