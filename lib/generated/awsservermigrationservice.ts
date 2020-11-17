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
  constructor (sid?: string) {
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
    this.to('sms:CreateApp');
    return this;
  }

  /**
   * Grants permission to create a job to migrate on-premise server onto AWS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_CreateReplicationJob.html
   */
  public toCreateReplicationJob() {
    this.to('sms:CreateReplicationJob');
    return this;
  }

  /**
   * Grants permission to delete an existing application configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteApp.html
   */
  public toDeleteApp() {
    this.to('sms:DeleteApp');
    return this;
  }

  /**
   * Grants permission to delete launch configuration for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppLaunchConfiguration.html
   */
  public toDeleteAppLaunchConfiguration() {
    this.to('sms:DeleteAppLaunchConfiguration');
    return this;
  }

  /**
   * Grants permission to delete replication configuration for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppReplicationConfiguration.html
   */
  public toDeleteAppReplicationConfiguration() {
    this.to('sms:DeleteAppReplicationConfiguration');
    return this;
  }

  /**
   * Grants permission to delete validation configuration for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppValidationConfiguration.html
   */
  public toDeleteAppValidationConfiguration() {
    this.to('sms:DeleteAppValidationConfiguration');
    return this;
  }

  /**
   * Grants permission to delete an existing job to migrate on-premise server onto AWS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteReplicationJob.html
   */
  public toDeleteReplicationJob() {
    this.to('sms:DeleteReplicationJob');
    return this;
  }

  /**
   * Grants permission to delete the complete list of on-premise servers gathered into AWS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteServerCatalog.html
   */
  public toDeleteServerCatalog() {
    this.to('sms:DeleteServerCatalog');
    return this;
  }

  /**
   * Grants permission to disassociate a connector that has been associated
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DisassociateConnector.html
   */
  public toDisassociateConnector() {
    this.to('sms:DisassociateConnector');
    return this;
  }

  /**
   * Grants permission to generate a changeSet for the CloudFormation stack of an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GenerateChangeSet.html
   */
  public toGenerateChangeSet() {
    this.to('sms:GenerateChangeSet');
    return this;
  }

  /**
   * Grants permission to generate a CloudFormation template for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GenerateTemplate.html
   */
  public toGenerateTemplate() {
    this.to('sms:GenerateTemplate');
    return this;
  }

  /**
   * Grants permission to get the configuration and statuses for an existing application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetApp.html
   */
  public toGetApp() {
    this.to('sms:GetApp');
    return this;
  }

  /**
   * Grants permission to get launch configuration for an existing application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppLaunchConfiguration.html
   */
  public toGetAppLaunchConfiguration() {
    this.to('sms:GetAppLaunchConfiguration');
    return this;
  }

  /**
   * Grants permission to get replication configuration for an existing application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppReplicationConfiguration.html
   */
  public toGetAppReplicationConfiguration() {
    this.to('sms:GetAppReplicationConfiguration');
    return this;
  }

  /**
   * Grants permission to get validation configuration for an existing application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppValidationConfiguration.html
   */
  public toGetAppValidationConfiguration() {
    this.to('sms:GetAppValidationConfiguration');
    return this;
  }

  /**
   * Grants permission to get notification sent from application validation script.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppValidationOutput.html
   */
  public toGetAppValidationOutput() {
    this.to('sms:GetAppValidationOutput');
    return this;
  }

  /**
   * Grants permission to get all connectors that have been associated
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetConnectors.html
   */
  public toGetConnectors() {
    this.to('sms:GetConnectors');
    return this;
  }

  /**
   * Grants permission to gets messages from AWS Server Migration Service to Server Migration Connector
   *
   * Access Level: Read
   */
  public toGetMessages() {
    this.to('sms:GetMessages');
    return this;
  }

  /**
   * Grants permission to get all existing jobs to migrate on-premise servers onto AWS
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetReplicationJobs.html
   */
  public toGetReplicationJobs() {
    this.to('sms:GetReplicationJobs');
    return this;
  }

  /**
   * Grants permission to get all runs for an existing job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetReplicationRuns.html
   */
  public toGetReplicationRuns() {
    this.to('sms:GetReplicationRuns');
    return this;
  }

  /**
   * Grants permission to get all servers that have been imported
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetServers.html
   */
  public toGetServers() {
    this.to('sms:GetServers');
    return this;
  }

  /**
   * Grants permission to import application catalog from AWS Application Discovery Service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ImportAppCatalog.html
   */
  public toImportAppCatalog() {
    this.to('sms:ImportAppCatalog');
    return this;
  }

  /**
   * Grants permission to gather a complete list of on-premise servers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ImportServerCatalog.html
   */
  public toImportServerCatalog() {
    this.to('sms:ImportServerCatalog');
    return this;
  }

  /**
   * Grants permission to create and launch a CloudFormation stack for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_LaunchApp.html
   */
  public toLaunchApp() {
    this.to('sms:LaunchApp');
    return this;
  }

  /**
   * Grants permission to get a list of summaries for existing applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ListAppss.html
   */
  public toListApps() {
    this.to('sms:ListApps');
    return this;
  }

  /**
   * Grants permission to send notification for application validation script
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_NotifyAppValidationOutput.html
   */
  public toNotifyAppValidationOutput() {
    this.to('sms:NotifyAppValidationOutput');
    return this;
  }

  /**
   * Grants permission to create or update launch configuration for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppLaunchConfiguration.html
   */
  public toPutAppLaunchConfiguration() {
    this.to('sms:PutAppLaunchConfiguration');
    return this;
  }

  /**
   * Grants permission to create or update replication configuration for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppReplicationConfiguration.html
   */
  public toPutAppReplicationConfiguration() {
    this.to('sms:PutAppReplicationConfiguration');
    return this;
  }

  /**
   * Grants permission to put validation configuration for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppValidationConfiguration.html
   */
  public toPutAppValidationConfiguration() {
    this.to('sms:PutAppValidationConfiguration');
    return this;
  }

  /**
   * Grants permission to send message from Server Migration Connector to AWS Server Migration Service
   *
   * Access Level: Write
   */
  public toSendMessage() {
    this.to('sms:SendMessage');
    return this;
  }

  /**
   * Grants permission to create and start replication jobs for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartAppReplication.html
   */
  public toStartAppReplication() {
    this.to('sms:StartAppReplication');
    return this;
  }

  /**
   * Grants permission to start a replication run for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartOnDemandAppReplication.html
   */
  public toStartOnDemandAppReplication() {
    this.to('sms:StartOnDemandAppReplication');
    return this;
  }

  /**
   * Grants permission to start a replication run for an existing replication job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartOnDemandReplicationRun.html
   */
  public toStartOnDemandReplicationRun() {
    this.to('sms:StartOnDemandReplicationRun');
    return this;
  }

  /**
   * Grants permission to stop and delete replication jobs for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StopAppReplication.html
   */
  public toStopAppReplication() {
    this.to('sms:StopAppReplication');
    return this;
  }

  /**
   * Grants permission to terminate the CloudFormation stack for an existing application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_TerminateApp.html
   */
  public toTerminateApp() {
    this.to('sms:TerminateApp');
    return this;
  }

  /**
   * Grants permission to update an existing application configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_UpdateApp.html
   */
  public toUpdateApp() {
    this.to('sms:UpdateApp');
    return this;
  }

  /**
   * Grants permission to update an existing job to migrate on-premise server onto AWS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_UpdateReplicationJob.html
   */
  public toUpdateReplicationJob() {
    this.to('sms:UpdateReplicationJob');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateApp",
      "CreateReplicationJob",
      "DeleteApp",
      "DeleteAppLaunchConfiguration",
      "DeleteAppReplicationConfiguration",
      "DeleteAppValidationConfiguration",
      "DeleteReplicationJob",
      "DeleteServerCatalog",
      "DisassociateConnector",
      "GenerateChangeSet",
      "GenerateTemplate",
      "ImportAppCatalog",
      "ImportServerCatalog",
      "LaunchApp",
      "NotifyAppValidationOutput",
      "PutAppLaunchConfiguration",
      "PutAppReplicationConfiguration",
      "PutAppValidationConfiguration",
      "SendMessage",
      "StartAppReplication",
      "StartOnDemandAppReplication",
      "StartOnDemandReplicationRun",
      "StopAppReplication",
      "TerminateApp",
      "UpdateApp",
      "UpdateReplicationJob"
    ],
    "Read": [
      "GetApp",
      "GetAppLaunchConfiguration",
      "GetAppReplicationConfiguration",
      "GetAppValidationConfiguration",
      "GetAppValidationOutput",
      "GetConnectors",
      "GetMessages",
      "GetReplicationJobs",
      "GetReplicationRuns",
      "GetServers"
    ],
    "List": [
      "ListApps"
    ]
  };
}
