import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [opsworks-cm](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsopsworksconfigurationmanagement.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class OpsworksCm extends PolicyStatement {
  public servicePrefix = 'opsworks-cm';

  /**
   * Statement provider for service [opsworks-cm](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsopsworksconfigurationmanagement.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associate a node to a configuration management server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_AssociateNode.html
   */
  public toAssociateNode() {
    return this.to('AssociateNode');
  }

  /**
   * Create a backup for the specified server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateBackup.html
   */
  public toCreateBackup() {
    return this.to('CreateBackup');
  }

  /**
   * Create a new server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateServer.html
   */
  public toCreateServer() {
    return this.to('CreateServer');
  }

  /**
   * Delete the specified backup and possibly its S3 bucket.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DeleteBackup.html
   */
  public toDeleteBackup() {
    return this.to('DeleteBackup');
  }

  /**
   * Deletes the specified server with his corresponding CF stack and possibly the S3 bucket.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DeleteServer.html
   */
  public toDeleteServer() {
    return this.to('DeleteServer');
  }

  /**
   * Describe the service limits for the user's account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    return this.to('DescribeAccountAttributes');
  }

  /**
   * Describe a single backup, all backups of a specified server or all backups of the user's account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeBackups.html
   */
  public toDescribeBackups() {
    return this.to('DescribeBackups');
  }

  /**
   * Describe all events of the specified server.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    return this.to('DescribeEvents');
  }

  /**
   * Describe the association status for the specified node token and the specified server.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeNodeAssociationStatus.html
   */
  public toDescribeNodeAssociationStatus() {
    return this.to('DescribeNodeAssociationStatus');
  }

  /**
   * Describes the specified server or all servers of the user's account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeServers.html
   */
  public toDescribeServers() {
    return this.to('DescribeServers');
  }

  /**
   * Disassociates a specified node from a server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DisassociateNode.html
   */
  public toDisassociateNode() {
    return this.to('DisassociateNode');
  }

  /**
   * List the tags that are applied to the specified server or backup.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Applies a backup to specified server. Possibly swaps out the ec2-instance if specified.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_RestoreServer.html
   */
  public toRestoreServer() {
    return this.to('RestoreServer');
  }

  /**
   * Start the server maintenance immediately.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_StartMaintenance.html
   */
  public toStartMaintenance() {
    return this.to('StartMaintenance');
  }

  /**
   * Applies tags to the specified server or backup.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Removes tags from the specified server or backup.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Update general server settings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UpdateServer.html
   */
  public toUpdateServer() {
    return this.to('UpdateServer');
  }

  /**
   * Update server settings specific to the configuration management type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UpdateServerEngineAttributes.html
   */
  public toUpdateServerEngineAttributes() {
    return this.to('UpdateServerEngineAttributes');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateNode",
      "CreateBackup",
      "CreateServer",
      "DeleteBackup",
      "DeleteServer",
      "DisassociateNode",
      "RestoreServer",
      "StartMaintenance",
      "UpdateServer",
      "UpdateServerEngineAttributes"
    ],
    "List": [
      "DescribeAccountAttributes",
      "DescribeBackups",
      "DescribeEvents",
      "DescribeNodeAssociationStatus",
      "DescribeServers",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };
}
