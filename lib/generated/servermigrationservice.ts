import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [sms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservermigrationservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sms extends PolicyStatement {
  public servicePrefix = 'sms';

  /**
   * Statement provider for service [sms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservermigrationservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an application configuration to migrate on-premise application onto AWS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_CreateApp.html
   */
  public toCreateApp() {
    return this.to('CreateApp');
  }

  /**
   * Grants permission to create a job to migrate on-premise server onto AWS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_CreateReplicationJob.html
   */
  public toCreateReplicationJob() {
    return this.to('CreateReplicationJob');
  }

  /**
   * Grants permission to delete an existing application configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteApp.html
   */
  public toDeleteApp() {
    return this.to('DeleteApp');
  }

  /**
   * Grants permission to delete launch configuration for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppLaunchConfiguration.html
   */
  public toDeleteAppLaunchConfiguration() {
    return this.to('DeleteAppLaunchConfiguration');
  }

  /**
   * Grants permission to delete replication configuration for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppReplicationConfiguration.html
   */
  public toDeleteAppReplicationConfiguration() {
    return this.to('DeleteAppReplicationConfiguration');
  }

  /**
   * Grants permission to delete validation configuration for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppValidationConfiguration.html
   */
  public toDeleteAppValidationConfiguration() {
    return this.to('DeleteAppValidationConfiguration');
  }

  /**
   * Grants permission to delete an existing job to migrate on-premise server onto AWS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteReplicationJob.html
   */
  public toDeleteReplicationJob() {
    return this.to('DeleteReplicationJob');
  }

  /**
   * Grants permission to delete the complete list of on-premise servers gathered into AWS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteServerCatalog.html
   */
  public toDeleteServerCatalog() {
    return this.to('DeleteServerCatalog');
  }

  /**
   * Grants permission to disassociate a connector that has been associated
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DisassociateConnector.html
   */
  public toDisassociateConnector() {
    return this.to('DisassociateConnector');
  }

  /**
   * Grants permission to generate a changeSet for the CloudFormation stack of an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GenerateChangeSet.html
   */
  public toGenerateChangeSet() {
    return this.to('GenerateChangeSet');
  }

  /**
   * Grants permission to generate a CloudFormation template for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GenerateTemplate.html
   */
  public toGenerateTemplate() {
    return this.to('GenerateTemplate');
  }

  /**
   * Grants permission to get the configuration and statuses for an existing application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetApp.html
   */
  public toGetApp() {
    return this.to('GetApp');
  }

  /**
   * Grants permission to get launch configuration for an existing application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppLaunchConfiguration.html
   */
  public toGetAppLaunchConfiguration() {
    return this.to('GetAppLaunchConfiguration');
  }

  /**
   * Grants permission to get replication configuration for an existing application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppReplicationConfiguration.html
   */
  public toGetAppReplicationConfiguration() {
    return this.to('GetAppReplicationConfiguration');
  }

  /**
   * Grants permission to get validation configuration for an existing application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppValidationConfiguration.html
   */
  public toGetAppValidationConfiguration() {
    return this.to('GetAppValidationConfiguration');
  }

  /**
   * Grants permission to get notification sent from application validation script.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppValidationOutput.html
   */
  public toGetAppValidationOutput() {
    return this.to('GetAppValidationOutput');
  }

  /**
   * Grants permission to get all connectors that have been associated
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetConnectors.html
   */
  public toGetConnectors() {
    return this.to('GetConnectors');
  }

  /**
   * Grants permission to gets messages from AWS Server Migration Service to Server Migration Connector
   *
   * Access Level: Read
   */
  public toGetMessages() {
    return this.to('GetMessages');
  }

  /**
   * Grants permission to get all existing jobs to migrate on-premise servers onto AWS
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetReplicationJobs.html
   */
  public toGetReplicationJobs() {
    return this.to('GetReplicationJobs');
  }

  /**
   * Grants permission to get all runs for an existing job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetReplicationRuns.html
   */
  public toGetReplicationRuns() {
    return this.to('GetReplicationRuns');
  }

  /**
   * Grants permission to get all servers that have been imported
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetServers.html
   */
  public toGetServers() {
    return this.to('GetServers');
  }

  /**
   * Grants permission to import application catalog from AWS Application Discovery Service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ImportAppCatalog.html
   */
  public toImportAppCatalog() {
    return this.to('ImportAppCatalog');
  }

  /**
   * Grants permission to gather a complete list of on-premise servers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ImportServerCatalog.html
   */
  public toImportServerCatalog() {
    return this.to('ImportServerCatalog');
  }

  /**
   * Grants permission to create and launch a CloudFormation stack for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_LaunchApp.html
   */
  public toLaunchApp() {
    return this.to('LaunchApp');
  }

  /**
   * Grants permission to get a list of summaries for existing applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ListAppss.html
   */
  public toListApps() {
    return this.to('ListApps');
  }

  /**
   * Grants permission to send notification for application validation script
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_NotifyAppValidationOutput.html
   */
  public toNotifyAppValidationOutput() {
    return this.to('NotifyAppValidationOutput');
  }

  /**
   * Grants permission to create or update launch configuration for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppLaunchConfiguration.html
   */
  public toPutAppLaunchConfiguration() {
    return this.to('PutAppLaunchConfiguration');
  }

  /**
   * Grants permission to create or update replication configuration for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppReplicationConfiguration.html
   */
  public toPutAppReplicationConfiguration() {
    return this.to('PutAppReplicationConfiguration');
  }

  /**
   * Grants permission to put validation configuration for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppValidationConfiguration.html
   */
  public toPutAppValidationConfiguration() {
    return this.to('PutAppValidationConfiguration');
  }

  /**
   * Grants permission to send message from Server Migration Connector to AWS Server Migration Service
   *
   * Access Level: Write
   */
  public toSendMessage() {
    return this.to('SendMessage');
  }

  /**
   * Grants permission to create and start replication jobs for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartAppReplication.html
   */
  public toStartAppReplication() {
    return this.to('StartAppReplication');
  }

  /**
   * Grants permission to start a replication run for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartOnDemandAppReplication.html
   */
  public toStartOnDemandAppReplication() {
    return this.to('StartOnDemandAppReplication');
  }

  /**
   * Grants permission to start a replication run for an existing replication job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartOnDemandReplicationRun.html
   */
  public toStartOnDemandReplicationRun() {
    return this.to('StartOnDemandReplicationRun');
  }

  /**
   * Grants permission to stop and delete replication jobs for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StopAppReplication.html
   */
  public toStopAppReplication() {
    return this.to('StopAppReplication');
  }

  /**
   * Grants permission to terminate the CloudFormation stack for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_TerminateApp.html
   */
  public toTerminateApp() {
    return this.to('TerminateApp');
  }

  /**
   * Grants permission to update an existing application configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_UpdateApp.html
   */
  public toUpdateApp() {
    return this.to('UpdateApp');
  }

  /**
   * Grants permission to update an existing job to migrate on-premise server onto AWS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_UpdateReplicationJob.html
   */
  public toUpdateReplicationJob() {
    return this.to('UpdateReplicationJob');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateApp',
      'CreateReplicationJob',
      'DeleteApp',
      'DeleteAppLaunchConfiguration',
      'DeleteAppReplicationConfiguration',
      'DeleteAppValidationConfiguration',
      'DeleteReplicationJob',
      'DeleteServerCatalog',
      'DisassociateConnector',
      'GenerateChangeSet',
      'GenerateTemplate',
      'ImportAppCatalog',
      'ImportServerCatalog',
      'LaunchApp',
      'NotifyAppValidationOutput',
      'PutAppLaunchConfiguration',
      'PutAppReplicationConfiguration',
      'PutAppValidationConfiguration',
      'SendMessage',
      'StartAppReplication',
      'StartOnDemandAppReplication',
      'StartOnDemandReplicationRun',
      'StopAppReplication',
      'TerminateApp',
      'UpdateApp',
      'UpdateReplicationJob'
    ],
    Read: [
      'GetApp',
      'GetAppLaunchConfiguration',
      'GetAppReplicationConfiguration',
      'GetAppValidationConfiguration',
      'GetAppValidationOutput',
      'GetConnectors',
      'GetMessages',
      'GetReplicationJobs',
      'GetReplicationRuns',
      'GetServers'
    ],
    List: [
      'ListApps'
    ]
  };
}
