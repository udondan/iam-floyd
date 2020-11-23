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
    this.to('AssociateNode');
    return this;
  }

  /**
   * Create a backup for the specified server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateBackup.html
   */
  public toCreateBackup() {
    this.to('CreateBackup');
    return this;
  }

  /**
   * Create a new server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateServer.html
   */
  public toCreateServer() {
    this.to('CreateServer');
    return this;
  }

  /**
   * Delete the specified backup and possibly its S3 bucket.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DeleteBackup.html
   */
  public toDeleteBackup() {
    this.to('DeleteBackup');
    return this;
  }

  /**
   * Deletes the specified server with his corresponding CF stack and possibly the S3 bucket.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DeleteServer.html
   */
  public toDeleteServer() {
    this.to('DeleteServer');
    return this;
  }

  /**
   * Describe the service limits for the user's account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    this.to('DescribeAccountAttributes');
    return this;
  }

  /**
   * Describe a single backup, all backups of a specified server or all backups of the user's account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeBackups.html
   */
  public toDescribeBackups() {
    this.to('DescribeBackups');
    return this;
  }

  /**
   * Describe all events of the specified server.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    this.to('DescribeEvents');
    return this;
  }

  /**
   * Describe the association status for the specified node token and the specified server.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeNodeAssociationStatus.html
   */
  public toDescribeNodeAssociationStatus() {
    this.to('DescribeNodeAssociationStatus');
    return this;
  }

  /**
   * Describes the specified server or all servers of the user's account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeServers.html
   */
  public toDescribeServers() {
    this.to('DescribeServers');
    return this;
  }

  /**
   * Disassociates a specified node from a server.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DisassociateNode.html
   */
  public toDisassociateNode() {
    this.to('DisassociateNode');
    return this;
  }

  /**
   * List the tags that are applied to the specified server or backup.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Applies a backup to specified server. Possibly swaps out the ec2-instance if specified.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_RestoreServer.html
   */
  public toRestoreServer() {
    this.to('RestoreServer');
    return this;
  }

  /**
   * Start the server maintenance immediately.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_StartMaintenance.html
   */
  public toStartMaintenance() {
    this.to('StartMaintenance');
    return this;
  }

  /**
   * Applies tags to the specified server or backup.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('TagResource');
    return this;
  }

  /**
   * Removes tags from the specified server or backup.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('UntagResource');
    return this;
  }

  /**
   * Update general server settings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UpdateServer.html
   */
  public toUpdateServer() {
    this.to('UpdateServer');
    return this;
  }

  /**
   * Update server settings specific to the configuration management type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UpdateServerEngineAttributes.html
   */
  public toUpdateServerEngineAttributes() {
    this.to('UpdateServerEngineAttributes');
    return this;
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
