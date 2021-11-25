import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [backup-gateway](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupgateway.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class BackupGateway extends PolicyStatement {
  public servicePrefix = 'backup-gateway';

  /**
   * Statement provider for service [backup-gateway](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupgateway.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to AssociateGatewayToServer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_AssociateGatewayToServer.html
   */
  public toAssociateGatewayToServer() {
    return this.to('AssociateGatewayToServer');
  }

  /**
   * Grants permission to Backup
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_Backup.html
   */
  public toBackup() {
    return this.to('Backup');
  }

  /**
   * Grants permission to to CreateGateway
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateGateway.html
   */
  public toCreateGateway() {
    return this.to('CreateGateway');
  }

  /**
   * Grants permission to DeleteGateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteGateway.html
   */
  public toDeleteGateway() {
    return this.to('DeleteGateway');
  }

  /**
   * Grants permission to DeleteHypervisor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteHypervisor.html
   */
  public toDeleteHypervisor() {
    return this.to('DeleteHypervisor');
  }

  /**
   * Grants permission to DisassociateGatewayFromServer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DisassociateGatewayFromServer.html
   */
  public toDisassociateGatewayFromServer() {
    return this.to('DisassociateGatewayFromServer');
  }

  /**
   * Grants permission to ImportHypervisorConfiguration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ImportHypervisorConfiguration.html
   */
  public toImportHypervisorConfiguration() {
    return this.to('ImportHypervisorConfiguration');
  }

  /**
   * Grants permission to ListGateways
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListGateways.html
   */
  public toListGateways() {
    return this.to('ListGateways');
  }

  /**
   * Grants permission to ListHypervisors
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListHypervisors.html
   */
  public toListHypervisors() {
    return this.to('ListHypervisors');
  }

  /**
   * Grants permission to ListTagsForResource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to ListVirtualMachines
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListVirtualMachines.html
   */
  public toListVirtualMachines() {
    return this.to('ListVirtualMachines');
  }

  /**
   * Grants permission to PutMaintenanceStartTime
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutMaintenanceStartTime.html
   */
  public toPutMaintenanceStartTime() {
    return this.to('PutMaintenanceStartTime');
  }

  /**
   * Grants permission to Restore
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_Restore.html
   */
  public toRestore() {
    return this.to('Restore');
  }

  /**
   * Grants permission to TagResource
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
    return this.to('TagResource');
  }

  /**
   * Grants permission to TestHypervisorConfiguration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_TestHypervisorConfiguration.html
   */
  public toTestHypervisorConfiguration() {
    return this.to('TestHypervisorConfiguration');
  }

  /**
   * Grants permission to UntagResource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to UpdateGatewayInformation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateGatewayInformation.html
   */
  public toUpdateGatewayInformation() {
    return this.to('UpdateGatewayInformation');
  }

  /**
   * Grants permission to UpdateHypervisor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateHypervisor.html
   */
  public toUpdateHypervisor() {
    return this.to('UpdateHypervisor');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateGatewayToServer',
      'Backup',
      'CreateGateway',
      'DeleteGateway',
      'DeleteHypervisor',
      'DisassociateGatewayFromServer',
      'ImportHypervisorConfiguration',
      'PutMaintenanceStartTime',
      'Restore',
      'TestHypervisorConfiguration',
      'UpdateGatewayInformation',
      'UpdateHypervisor'
    ],
    Read: [
      'ListGateways',
      'ListHypervisors',
      'ListTagsForResource',
      'ListVirtualMachines'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type gateway to the statement
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGateway(gatewayId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:backup-gateway::${ account || '*' }:gateway/${ gatewayId }`);
  }

  /**
   * Adds a resource of type hypervisor to the statement
   *
   * @param hypervisorId - Identifier for the hypervisorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHypervisor(hypervisorId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:backup-gateway::${ account || '*' }:hypervisor/${ hypervisorId }`);
  }

  /**
   * Adds a resource of type virtualmachine to the statement
   *
   * @param virtualmachineId - Identifier for the virtualmachineId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVirtualmachine(virtualmachineId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:backup-gateway::${ account || '*' }:vm/${ virtualmachineId }`);
  }
}
