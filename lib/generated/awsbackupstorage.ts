import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [backup-storage](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbackupstorage.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class BackupStorage extends PolicyStatement {
  public servicePrefix = 'backup-storage';

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
    this.to('backup-storage:MountCapsule');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "MountCapsule"
    ]
  };
}
