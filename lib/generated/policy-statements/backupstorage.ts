import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [backup-storage](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupstorage.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class BackupStorage extends PolicyStatement {
  public servicePrefix = 'backup-storage';

  /**
   * Statement provider for service [backup-storage](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupstorage.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to commit backup job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html
   */
  public toCommitBackupJob() {
    return this.to('CommitBackupJob');
  }

  /**
   * Grants permission to delete objects
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html
   */
  public toDeleteObjects() {
    return this.to('DeleteObjects');
  }

  /**
   * Grants permission to describe backup job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html
   */
  public toDescribeBackupJob() {
    return this.to('DescribeBackupJob');
  }

  /**
   * Grants permission to get base backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html
   */
  public toGetBaseBackup() {
    return this.to('GetBaseBackup');
  }

  /**
   * Grants permission to get data from a recovery point for a restore job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html
   */
  public toGetChunk() {
    return this.to('GetChunk');
  }

  /**
   * Grants permission to get incremental base backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html
   */
  public toGetIncrementalBaseBackup() {
    return this.to('GetIncrementalBaseBackup');
  }

  /**
   * Grants permission to get metadata from a recovery point for a restore job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html
   */
  public toGetObjectMetadata() {
    return this.to('GetObjectMetadata');
  }

  /**
   * Grants permission to list data from a recovery point for a restore job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html
   */
  public toListChunks() {
    return this.to('ListChunks');
  }

  /**
   * Grants permission to list data from a recovery point for a restore job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html
   */
  public toListObjects() {
    return this.to('ListObjects');
  }

  /**
   * Associates a KMS key to a backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupVault.html
   */
  public toMountCapsule() {
    return this.to('MountCapsule');
  }

  /**
   * Grants permission to mark an uploaded data as completed for a backup job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html
   */
  public toNotifyObjectComplete() {
    return this.to('NotifyObjectComplete');
  }

  /**
   * Grants permission to upload data to an AWS Backup-managed recovery point for a backup job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html
   */
  public toPutChunk() {
    return this.to('PutChunk');
  }

  /**
   * Grants permission to put object
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html
   */
  public toPutObject() {
    return this.to('PutObject');
  }

  /**
   * Grants permission to upload data to an AWS Backup-managed recovery point for a backup job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html
   */
  public toStartObject() {
    return this.to('StartObject');
  }

  /**
   * Grants permission to update object complete
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-data-transfer.html
   */
  public toUpdateObjectComplete() {
    return this.to('UpdateObjectComplete');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CommitBackupJob',
      'DeleteObjects',
      'DescribeBackupJob',
      'GetBaseBackup',
      'GetChunk',
      'GetIncrementalBaseBackup',
      'GetObjectMetadata',
      'ListChunks',
      'ListObjects',
      'MountCapsule',
      'NotifyObjectComplete',
      'PutChunk',
      'PutObject',
      'StartObject',
      'UpdateObjectComplete'
    ]
  };
}
