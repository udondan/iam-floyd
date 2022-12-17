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
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_AssociateGatewayToServer.html
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
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartBackupJob.html
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
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_CreateGateway.html
   */
  public toCreateGateway() {
    return this.to('CreateGateway');
  }

  /**
   * Grants permission to DeleteGateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_DeleteGateway.html
   */
  public toDeleteGateway() {
    return this.to('DeleteGateway');
  }

  /**
   * Grants permission to DeleteHypervisor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_DeleteHypervisor.html
   */
  public toDeleteHypervisor() {
    return this.to('DeleteHypervisor');
  }

  /**
   * Grants permission to DisassociateGatewayFromServer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_DisassociateGatewayFromServer.html
   */
  public toDisassociateGatewayFromServer() {
    return this.to('DisassociateGatewayFromServer');
  }

  /**
   * Grants permission to GetBandwidthRateLimitSchedule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_GetBandwidthRateLimitSchedule.html
   */
  public toGetBandwidthRateLimitSchedule() {
    return this.to('GetBandwidthRateLimitSchedule');
  }

  /**
   * Grants permission to GetGateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_GetGateway.html
   */
  public toGetGateway() {
    return this.to('GetGateway');
  }

  /**
   * Grants permission to GetHypervisor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_GetHypervisor.html
   */
  public toGetHypervisor() {
    return this.to('GetHypervisor');
  }

  /**
   * Grants permission to GetHypervisorPropertyMappings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_GetHypervisorPropertyMappings.html
   */
  public toGetHypervisorPropertyMappings() {
    return this.to('GetHypervisorPropertyMappings');
  }

  /**
   * Grants permission to GetVirtualMachine
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_GetVirtualMachine.html
   */
  public toGetVirtualMachine() {
    return this.to('GetVirtualMachine');
  }

  /**
   * Grants permission to ImportHypervisorConfiguration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ImportHypervisorConfiguration.html
   */
  public toImportHypervisorConfiguration() {
    return this.to('ImportHypervisorConfiguration');
  }

  /**
   * Grants permission to ListGateways
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html
   */
  public toListGateways() {
    return this.to('ListGateways');
  }

  /**
   * Grants permission to ListHypervisors
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListHypervisors.html
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
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to ListVirtualMachines
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListVirtualMachines.html
   */
  public toListVirtualMachines() {
    return this.to('ListVirtualMachines');
  }

  /**
   * Grants permission to PutBandwidthRateLimitSchedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_PutBandwidthRateLimitSchedule.html
   */
  public toPutBandwidthRateLimitSchedule() {
    return this.to('PutBandwidthRateLimitSchedule');
  }

  /**
   * Grants permission to PutHypervisorPropertyMappings
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_PutHypervisorPropertyMappings.html
   */
  public toPutHypervisorPropertyMappings() {
    return this.to('PutHypervisorPropertyMappings');
  }

  /**
   * Grants permission to PutMaintenanceStartTime
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_PutMaintenanceStartTime.html
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
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartRestoreJob.html
   */
  public toRestore() {
    return this.to('Restore');
  }

  /**
   * Grants permission to StartVirtualMachinesMetadataSync
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_StartVirtualMachinesMetadataSync.html
   */
  public toStartVirtualMachinesMetadataSync() {
    return this.to('StartVirtualMachinesMetadataSync');
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
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to TestHypervisorConfiguration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_TestHypervisorConfiguration.html
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
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to UpdateGatewayInformation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_UpdateGatewayInformation.html
   */
  public toUpdateGatewayInformation() {
    return this.to('UpdateGatewayInformation');
  }

  /**
   * Grants permission to UpdateGatewaySoftwareNow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_UpdateGatewaySoftwareNow.html
   */
  public toUpdateGatewaySoftwareNow() {
    return this.to('UpdateGatewaySoftwareNow');
  }

  /**
   * Grants permission to UpdateHypervisor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_UpdateHypervisor.html
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
      'PutBandwidthRateLimitSchedule',
      'PutHypervisorPropertyMappings',
      'PutMaintenanceStartTime',
      'Restore',
      'StartVirtualMachinesMetadataSync',
      'TestHypervisorConfiguration',
      'UpdateGatewayInformation',
      'UpdateGatewaySoftwareNow',
      'UpdateHypervisor'
    ],
    Read: [
      'GetBandwidthRateLimitSchedule',
      'GetGateway',
      'GetHypervisor',
      'GetHypervisorPropertyMappings',
      'GetVirtualMachine',
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
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_Gateway.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGateway(gatewayId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || BackupGateway.defaultPartition }:backup-gateway::${ account || '*' }:gateway/${ gatewayId }`);
  }

  /**
   * Adds a resource of type hypervisor to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_Hypervisor.html
   *
   * @param hypervisorId - Identifier for the hypervisorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHypervisor(hypervisorId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || BackupGateway.defaultPartition }:backup-gateway::${ account || '*' }:hypervisor/${ hypervisorId }`);
  }

  /**
   * Adds a resource of type virtualmachine to the statement
   *
   * https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_VirtualMachine.html
   *
   * @param virtualmachineId - Identifier for the virtualmachineId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVirtualmachine(virtualmachineId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || BackupGateway.defaultPartition }:backup-gateway::${ account || '*' }:vm/${ virtualmachineId }`);
  }
}
