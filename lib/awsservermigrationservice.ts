import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service sms
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsservermigrationservice.html
 */
export class Sms extends PolicyStatement {
  public servicePrefix = 'sms';
  public actions : Actions = {
    "CreateApp": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_CreateApp.html",
      "description": "Create an application configuration to migrate on-premise application onto AWS..",
      "accessLevel": "Write"
    },
    "CreateReplicationJob": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_CreateReplicationJob.html",
      "description": "Create a job to migrate on-premise server onto AWS.",
      "accessLevel": "Write"
    },
    "DeleteApp": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteApp.html",
      "description": "Delete an existing application configuration.",
      "accessLevel": "Write"
    },
    "DeleteAppLaunchConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppLaunchConfiguration.html",
      "description": "Delete launch configuration for an existing application.",
      "accessLevel": "Write"
    },
    "DeleteAppReplicationConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppReplicationConfiguration.html",
      "description": "Delete replication configuration for an existing application..",
      "accessLevel": "Write"
    },
    "DeleteReplicationJob": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteReplicationJob.html",
      "description": "Delete an existing job to migrate on-premise server onto AWS.",
      "accessLevel": "Write"
    },
    "DeleteServerCatalog": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteServerCatalog.html",
      "description": "Delete the complete list of on-premise servers gathered into AWS.",
      "accessLevel": "Write"
    },
    "DisassociateConnector": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DisassociateConnector.html",
      "description": "Disassociate a connector that has been associated.",
      "accessLevel": "Write"
    },
    "GenerateChangeSet": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GenerateChangeSet.html",
      "description": "Generate a changeSet for the CloudFormation stack of an application.",
      "accessLevel": "Write"
    },
    "GenerateTemplate": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GenerateTemplate.html",
      "description": "Generate a CloudFormation template for an existing application.",
      "accessLevel": "Write"
    },
    "GetApp": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetApp.html",
      "description": "Get the configuration and statuses for an existing application.",
      "accessLevel": "Read"
    },
    "GetAppLaunchConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppLaunchConfiguration.html",
      "description": "Get launch configuration for an existing application.",
      "accessLevel": "Read"
    },
    "GetAppReplicationConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppReplicationConfiguration.html",
      "description": "Get replication configuration for an existing application.",
      "accessLevel": "Read"
    },
    "GetConnectors": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetConnectors.html",
      "description": "Get all connectors that have been associated.",
      "accessLevel": "Read"
    },
    "GetMessages": {
      "url": "",
      "description": "Gets messages from AWS Server Migration Service to Server Migration Connector.",
      "accessLevel": "Read"
    },
    "GetReplicationJobs": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetReplicationJobs.html",
      "description": "Get all existing jobs to migrate on-premise servers onto AWS.",
      "accessLevel": "Read"
    },
    "GetReplicationRuns": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetReplicationRuns.html",
      "description": "Get all runs for an existing job.",
      "accessLevel": "Read"
    },
    "GetServers": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetServers.html",
      "description": "Get all servers that have been imported.",
      "accessLevel": "Read"
    },
    "ImportServerCatalog": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ImportServerCatalog.html",
      "description": "Gathers a complete list of on-premise servers.",
      "accessLevel": "Write"
    },
    "LaunchApp": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_LaunchApp.html",
      "description": "Create and launch a CloudFormation stack for an existing application.",
      "accessLevel": "Write"
    },
    "ListApps": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ListAppss.html",
      "description": "Get a list of summaries for existing applications.",
      "accessLevel": "List"
    },
    "PutAppLaunchConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppLaunchConfiguration.html",
      "description": "Create or update launch configuration for an existing application.",
      "accessLevel": "Write"
    },
    "PutAppReplicationConfiguration": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppReplicationConfiguration.html",
      "description": "Create or update replication configuration for an existing application.",
      "accessLevel": "Write"
    },
    "SendMessage": {
      "url": "",
      "description": "Send message from Server Migration Connector to AWS Server Migration Service.",
      "accessLevel": "Write"
    },
    "StartAppReplication": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartAppReplication.html",
      "description": "Create and start replication jobs for an existing application.",
      "accessLevel": "Write"
    },
    "StartOnDemandReplicationRun": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartOnDemandReplicationRun.html",
      "description": "Start a replication run for an existing replication job.",
      "accessLevel": "Write"
    },
    "StopAppReplication": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StopAppReplication.html",
      "description": "Stop and delete replication jobs for an existing application.",
      "accessLevel": "Write"
    },
    "TerminateApp": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_TerminateApp.html",
      "description": "Terminate the CloudFormation stack for an existing application.",
      "accessLevel": "Write"
    },
    "UpdateApp": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_UpdateApp.html",
      "description": "Update an existing application configuration",
      "accessLevel": "Write"
    },
    "UpdateReplicationJob": {
      "url": "https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_UpdateReplicationJob.html",
      "description": "Update an existing job to migrate on-premise server onto AWS.",
      "accessLevel": "Write"
    }
  };

  /**
   * Create an application configuration to migrate on-premise application onto AWS..
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_CreateApp.html
   */
  public createApp () {
    this.add('sms:CreateApp');
    return this;
  }

  /**
   * Create a job to migrate on-premise server onto AWS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_CreateReplicationJob.html
   */
  public createReplicationJob () {
    this.add('sms:CreateReplicationJob');
    return this;
  }

  /**
   * Delete an existing application configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteApp.html
   */
  public deleteApp () {
    this.add('sms:DeleteApp');
    return this;
  }

  /**
   * Delete launch configuration for an existing application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppLaunchConfiguration.html
   */
  public deleteAppLaunchConfiguration () {
    this.add('sms:DeleteAppLaunchConfiguration');
    return this;
  }

  /**
   * Delete replication configuration for an existing application..
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppReplicationConfiguration.html
   */
  public deleteAppReplicationConfiguration () {
    this.add('sms:DeleteAppReplicationConfiguration');
    return this;
  }

  /**
   * Delete an existing job to migrate on-premise server onto AWS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteReplicationJob.html
   */
  public deleteReplicationJob () {
    this.add('sms:DeleteReplicationJob');
    return this;
  }

  /**
   * Delete the complete list of on-premise servers gathered into AWS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteServerCatalog.html
   */
  public deleteServerCatalog () {
    this.add('sms:DeleteServerCatalog');
    return this;
  }

  /**
   * Disassociate a connector that has been associated.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DisassociateConnector.html
   */
  public disassociateConnector () {
    this.add('sms:DisassociateConnector');
    return this;
  }

  /**
   * Generate a changeSet for the CloudFormation stack of an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GenerateChangeSet.html
   */
  public generateChangeSet () {
    this.add('sms:GenerateChangeSet');
    return this;
  }

  /**
   * Generate a CloudFormation template for an existing application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GenerateTemplate.html
   */
  public generateTemplate () {
    this.add('sms:GenerateTemplate');
    return this;
  }

  /**
   * Get the configuration and statuses for an existing application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetApp.html
   */
  public getApp () {
    this.add('sms:GetApp');
    return this;
  }

  /**
   * Get launch configuration for an existing application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppLaunchConfiguration.html
   */
  public getAppLaunchConfiguration () {
    this.add('sms:GetAppLaunchConfiguration');
    return this;
  }

  /**
   * Get replication configuration for an existing application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppReplicationConfiguration.html
   */
  public getAppReplicationConfiguration () {
    this.add('sms:GetAppReplicationConfiguration');
    return this;
  }

  /**
   * Get all connectors that have been associated.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetConnectors.html
   */
  public getConnectors () {
    this.add('sms:GetConnectors');
    return this;
  }

  /**
   * Gets messages from AWS Server Migration Service to Server Migration Connector.
   *
   * Access Level: Read
   */
  public getMessages () {
    this.add('sms:GetMessages');
    return this;
  }

  /**
   * Get all existing jobs to migrate on-premise servers onto AWS.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetReplicationJobs.html
   */
  public getReplicationJobs () {
    this.add('sms:GetReplicationJobs');
    return this;
  }

  /**
   * Get all runs for an existing job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetReplicationRuns.html
   */
  public getReplicationRuns () {
    this.add('sms:GetReplicationRuns');
    return this;
  }

  /**
   * Get all servers that have been imported.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetServers.html
   */
  public getServers () {
    this.add('sms:GetServers');
    return this;
  }

  /**
   * Gathers a complete list of on-premise servers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ImportServerCatalog.html
   */
  public importServerCatalog () {
    this.add('sms:ImportServerCatalog');
    return this;
  }

  /**
   * Create and launch a CloudFormation stack for an existing application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_LaunchApp.html
   */
  public launchApp () {
    this.add('sms:LaunchApp');
    return this;
  }

  /**
   * Get a list of summaries for existing applications.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ListAppss.html
   */
  public listApps () {
    this.add('sms:ListApps');
    return this;
  }

  /**
   * Create or update launch configuration for an existing application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppLaunchConfiguration.html
   */
  public putAppLaunchConfiguration () {
    this.add('sms:PutAppLaunchConfiguration');
    return this;
  }

  /**
   * Create or update replication configuration for an existing application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppReplicationConfiguration.html
   */
  public putAppReplicationConfiguration () {
    this.add('sms:PutAppReplicationConfiguration');
    return this;
  }

  /**
   * Send message from Server Migration Connector to AWS Server Migration Service.
   *
   * Access Level: Write
   */
  public sendMessage () {
    this.add('sms:SendMessage');
    return this;
  }

  /**
   * Create and start replication jobs for an existing application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartAppReplication.html
   */
  public startAppReplication () {
    this.add('sms:StartAppReplication');
    return this;
  }

  /**
   * Start a replication run for an existing replication job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartOnDemandReplicationRun.html
   */
  public startOnDemandReplicationRun () {
    this.add('sms:StartOnDemandReplicationRun');
    return this;
  }

  /**
   * Stop and delete replication jobs for an existing application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StopAppReplication.html
   */
  public stopAppReplication () {
    this.add('sms:StopAppReplication');
    return this;
  }

  /**
   * Terminate the CloudFormation stack for an existing application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_TerminateApp.html
   */
  public terminateApp () {
    this.add('sms:TerminateApp');
    return this;
  }

  /**
   * Update an existing application configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_UpdateApp.html
   */
  public updateApp () {
    this.add('sms:UpdateApp');
    return this;
  }

  /**
   * Update an existing job to migrate on-premise server onto AWS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_UpdateReplicationJob.html
   */
  public updateReplicationJob () {
    this.add('sms:UpdateReplicationJob');
    return this;
  }
}
