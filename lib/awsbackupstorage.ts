import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service backup-storage
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbackupstorage.html
 */
export class BackupStorage extends PolicyStatement {
  public servicePrefix = 'backup-storage';
  public actions: Actions = {
    "MountCapsule": {
      "url": "https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupVault.html",
      "description": "Associates a KMS key to a backup vault",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Action provider for service backup-storage
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbackupstorage.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Associates a KMS key to a backup vault
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupVault.html
   */
  public mountCapsule() {
    this.add('backup-storage:MountCapsule');
    return this;
  }
}
