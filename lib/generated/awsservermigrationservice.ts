import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [sms](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsservermigrationservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sms extends PolicyStatement {
  public servicePrefix = 'sms';
  protected actionList: Actions = {
    "CreateApp": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_CreateApp.html",
      "description": "Grants permission to create an application configuration to migrate on-premise application onto AWS",
      "accessLevel": "Write"
    },
    "CreateReplicationJob": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_CreateReplicationJob.html",
      "description": "Grants permission to create a job to migrate on-premise server onto AWS",
      "accessLevel": "Write"
    },
    "DeleteApp": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteApp.html",
      "description": "Grants permission to delete an existing application configuration",
      "accessLevel": "Write"
    },
    "DeleteAppLaunchConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppLaunchConfiguration.html",
      "description": "Grants permission to delete launch configuration for an existing application",
      "accessLevel": "Write"
    },
    "DeleteAppReplicationConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppReplicationConfiguration.html",
      "description": "Grants permission to delete replication configuration for an existing application",
      "accessLevel": "Write"
    },
    "DeleteAppValidationConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppValidationConfiguration.html",
      "description": "Grants permission to delete validation configuration for an existing application",
      "accessLevel": "Write"
    },
    "DeleteReplicationJob": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteReplicationJob.html",
      "description": "Grants permission to delete an existing job to migrate on-premise server onto AWS",
      "accessLevel": "Write"
    },
    "DeleteServerCatalog": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteServerCatalog.html",
      "description": "Grants permission to delete the complete list of on-premise servers gathered into AWS",
      "accessLevel": "Write"
    },
    "DisassociateConnector": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DisassociateConnector.html",
      "description": "Grants permission to disassociate a connector that has been associated",
      "accessLevel": "Write"
    },
    "GenerateChangeSet": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GenerateChangeSet.html",
      "description": "Grants permission to generate a changeSet for the CloudFormation stack of an application",
      "accessLevel": "Write"
    },
    "GenerateTemplate": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GenerateTemplate.html",
      "description": "Grants permission to generate a CloudFormation template for an existing application",
      "accessLevel": "Write"
    },
    "GetApp": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetApp.html",
      "description": "Grants permission to get the configuration and statuses for an existing application",
      "accessLevel": "Read"
    },
    "GetAppLaunchConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppLaunchConfiguration.html",
      "description": "Grants permission to get launch configuration for an existing application",
      "accessLevel": "Read"
    },
    "GetAppReplicationConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppReplicationConfiguration.html",
      "description": "Grants permission to get replication configuration for an existing application",
      "accessLevel": "Read"
    },
    "GetAppValidationConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppValidationConfiguration.html",
      "description": "Grants permission to get validation configuration for an existing application",
      "accessLevel": "Read"
    },
    "GetAppValidationOutput": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppValidationOutput.html",
      "description": "Grants permission to get notification sent from application validation script.",
      "accessLevel": "Read"
    },
    "GetConnectors": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetConnectors.html",
      "description": "Grants permission to get all connectors that have been associated",
      "accessLevel": "Read"
    },
    "GetMessages": {
      "url": "",
      "description": "Grants permission to gets messages from AWS Server Migration Service to Server Migration Connector",
      "accessLevel": "Read"
    },
    "GetReplicationJobs": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetReplicationJobs.html",
      "description": "Grants permission to get all existing jobs to migrate on-premise servers onto AWS",
      "accessLevel": "Read"
    },
    "GetReplicationRuns": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetReplicationRuns.html",
      "description": "Grants permission to get all runs for an existing job",
      "accessLevel": "Read"
    },
    "GetServers": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetServers.html",
      "description": "Grants permission to get all servers that have been imported",
      "accessLevel": "Read"
    },
    "ImportAppCatalog": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ImportAppCatalog.html",
      "description": "Grants permission to import application catalog from AWS Application Discovery Service",
      "accessLevel": "Write"
    },
    "ImportServerCatalog": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ImportServerCatalog.html",
      "description": "Grants permission to gather a complete list of on-premise servers",
      "accessLevel": "Write"
    },
    "LaunchApp": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_LaunchApp.html",
      "description": "Grants permission to create and launch a CloudFormation stack for an existing application",
      "accessLevel": "Write"
    },
    "ListApps": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ListAppss.html",
      "description": "Grants permission to get a list of summaries for existing applications",
      "accessLevel": "List"
    },
    "NotifyAppValidationOutput": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_NotifyAppValidationOutput.html",
      "description": "Grants permission to send notification for application validation script",
      "accessLevel": "Write"
    },
    "PutAppLaunchConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppLaunchConfiguration.html",
      "description": "Grants permission to create or update launch configuration for an existing application",
      "accessLevel": "Write"
    },
    "PutAppReplicationConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppReplicationConfiguration.html",
      "description": "Grants permission to create or update replication configuration for an existing application",
      "accessLevel": "Write"
    },
    "PutAppValidationConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppValidationConfiguration.html",
      "description": "Grants permission to put validation configuration for an existing application",
      "accessLevel": "Write"
    },
    "SendMessage": {
      "url": "",
      "description": "Grants permission to send message from Server Migration Connector to AWS Server Migration Service",
      "accessLevel": "Write"
    },
    "StartAppReplication": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartAppReplication.html",
      "description": "Grants permission to create and start replication jobs for an existing application",
      "accessLevel": "Write"
    },
    "StartOnDemandAppReplication": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartOnDemandAppReplication.html",
      "description": "Grants permission to start a replication run for an existing application",
      "accessLevel": "Write"
    },
    "StartOnDemandReplicationRun": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartOnDemandReplicationRun.html",
      "description": "Grants permission to start a replication run for an existing replication job",
      "accessLevel": "Write"
    },
    "StopAppReplication": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StopAppReplication.html",
      "description": "Grants permission to stop and delete replication jobs for an existing application",
      "accessLevel": "Write"
    },
    "TerminateApp": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_TerminateApp.html",
      "description": "Grants permission to terminate the CloudFormation stack for an existing application",
      "accessLevel": "Write"
    },
    "UpdateApp": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_UpdateApp.html",
      "description": "Grants permission to update an existing application configuration",
      "accessLevel": "Write"
    },
    "UpdateReplicationJob": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_UpdateReplicationJob.html",
      "description": "Grants permission to update an existing job to migrate on-premise server onto AWS",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [sms](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsservermigrationservice.html).
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
    this.add('sms:CreateApp');
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
    this.add('sms:CreateReplicationJob');
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
    this.add('sms:DeleteApp');
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
    this.add('sms:DeleteAppLaunchConfiguration');
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
    this.add('sms:DeleteAppReplicationConfiguration');
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
    this.add('sms:DeleteAppValidationConfiguration');
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
    this.add('sms:DeleteReplicationJob');
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
    this.add('sms:DeleteServerCatalog');
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
    this.add('sms:DisassociateConnector');
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
    this.add('sms:GenerateChangeSet');
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
    this.add('sms:GenerateTemplate');
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
    this.add('sms:GetApp');
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
    this.add('sms:GetAppLaunchConfiguration');
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
    this.add('sms:GetAppReplicationConfiguration');
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
    this.add('sms:GetAppValidationConfiguration');
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
    this.add('sms:GetAppValidationOutput');
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
    this.add('sms:GetConnectors');
    return this;
  }

  /**
   * Grants permission to gets messages from AWS Server Migration Service to Server Migration Connector
   *
   * Access Level: Read
   */
  public toGetMessages() {
    this.add('sms:GetMessages');
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
    this.add('sms:GetReplicationJobs');
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
    this.add('sms:GetReplicationRuns');
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
    this.add('sms:GetServers');
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
    this.add('sms:ImportAppCatalog');
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
    this.add('sms:ImportServerCatalog');
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
    this.add('sms:LaunchApp');
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
    this.add('sms:ListApps');
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
    this.add('sms:NotifyAppValidationOutput');
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
    this.add('sms:PutAppLaunchConfiguration');
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
    this.add('sms:PutAppReplicationConfiguration');
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
    this.add('sms:PutAppValidationConfiguration');
    return this;
  }

  /**
   * Grants permission to send message from Server Migration Connector to AWS Server Migration Service
   *
   * Access Level: Write
   */
  public toSendMessage() {
    this.add('sms:SendMessage');
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
    this.add('sms:StartAppReplication');
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
    this.add('sms:StartOnDemandAppReplication');
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
    this.add('sms:StartOnDemandReplicationRun');
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
    this.add('sms:StopAppReplication');
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
    this.add('sms:TerminateApp');
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
    this.add('sms:UpdateApp');
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
    this.add('sms:UpdateReplicationJob');
    return this;
  }
}
