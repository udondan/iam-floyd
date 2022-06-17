import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a node to a configuration management server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_AssociateNode.html
   */
  public toAssociateNode() {
    return this.to('AssociateNode');
  }

  /**
   * Grants permission to create a backup for the specified server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateBackup.html
   */
  public toCreateBackup() {
    return this.to('CreateBackup');
  }

  /**
   * Grants permission to create a new server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateServer.html
   */
  public toCreateServer() {
    return this.to('CreateServer');
  }

  /**
   * Grants permission to delete the specified backup and possibly its S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DeleteBackup.html
   */
  public toDeleteBackup() {
    return this.to('DeleteBackup');
  }

  /**
   * Grants permission to delete the specified server with its corresponding CloudFormation stack and possibly the S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DeleteServer.html
   */
  public toDeleteServer() {
    return this.to('DeleteServer');
  }

  /**
   * Grants permission to describe the service limits for the user's account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    return this.to('DescribeAccountAttributes');
  }

  /**
   * Grants permission to describe a single backup, all backups of a specified server or all backups of the user's account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeBackups.html
   */
  public toDescribeBackups() {
    return this.to('DescribeBackups');
  }

  /**
   * Grants permission to describe all events of the specified server
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    return this.to('DescribeEvents');
  }

  /**
   * Grants permission to describe the association status for the specified node token and the specified server
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeNodeAssociationStatus.html
   */
  public toDescribeNodeAssociationStatus() {
    return this.to('DescribeNodeAssociationStatus');
  }

  /**
   * Grants permission to describe the specified server or all servers of the user's account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeServers.html
   */
  public toDescribeServers() {
    return this.to('DescribeServers');
  }

  /**
   * Grants permission to disassociate a specified node from a server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DisassociateNode.html
   */
  public toDisassociateNode() {
    return this.to('DisassociateNode');
  }

  /**
   * Grants permission to export an engine attribute from a server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_ExportServerEngineAttribute.html
   */
  public toExportServerEngineAttribute() {
    return this.to('ExportServerEngineAttribute');
  }

  /**
   * Grants permission to list the tags that are applied to the specified server or backup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to apply a backup to specified server. Possibly swaps out the ec2-instance if specified
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_RestoreServer.html
   */
  public toRestoreServer() {
    return this.to('RestoreServer');
  }

  /**
   * Grants permission to start the server maintenance immediately
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_StartMaintenance.html
   */
  public toStartMaintenance() {
    return this.to('StartMaintenance');
  }

  /**
   * Grants permission to apply tags to the specified server or backup
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from the specified server or backup
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update general server settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UpdateServer.html
   */
  public toUpdateServer() {
    return this.to('UpdateServer');
  }

  /**
   * Grants permission to update server settings specific to the configuration management type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UpdateServerEngineAttributes.html
   */
  public toUpdateServerEngineAttributes() {
    return this.to('UpdateServerEngineAttributes');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateNode',
      'CreateBackup',
      'CreateServer',
      'DeleteBackup',
      'DeleteServer',
      'DisassociateNode',
      'RestoreServer',
      'StartMaintenance',
      'UpdateServer',
      'UpdateServerEngineAttributes'
    ],
    List: [
      'DescribeAccountAttributes',
      'DescribeBackups',
      'DescribeEvents',
      'DescribeNodeAssociationStatus',
      'DescribeServers'
    ],
    Read: [
      'ExportServerEngineAttribute',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type server to the statement
   *
   * @param serverName - Identifier for the serverName.
   * @param uniqueId - Identifier for the uniqueId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onServer(serverName: string, uniqueId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || OpsworksCm.defaultPartition }:opsworks-cm::${ account || '*' }:server/${ serverName }/${ uniqueId }`);
  }

  /**
   * Adds a resource of type backup to the statement
   *
   * @param serverName - Identifier for the serverName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBackup(serverName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || OpsworksCm.defaultPartition }:opsworks-cm::${ account || '*' }:backup/${ serverName }-{Date-and-Time-Stamp-of-Backup}`);
  }
}
