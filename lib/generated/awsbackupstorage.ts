import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [backup-storage](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbackupstorage.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class BackupStorage extends PolicyStatement {
  public servicePrefix = 'backup-storage';
  protected actionList: Actions = {
    "MountCapsule": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupVault.html",
      "description": "Associates a KMS key to a backup vault",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [backup-storage](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbackupstorage.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associates a KMS key to a backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupVault.html
   */
  public toMountCapsule() {
    this.add('backup-storage:MountCapsule');
    return this;
  }
}
