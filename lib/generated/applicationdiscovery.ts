import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [discovery](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationdiscovery.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Discovery extends PolicyStatement {
  public servicePrefix = 'discovery';
  protected actionList: Actions = {
    "AssociateConfigurationItemsToApplication": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_AssociateConfigurationItemsToApplication.html",
      "description": "Associates one or more configuration items with an application.",
      "accessLevel": "Write"
    },
    "BatchDeleteImportData": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_BatchDeleteImportData.html",
      "description": "Deletes one or more Migration Hub import tasks, each identified by their import ID. Each import task has a number of records, which can identify servers or applications.",
      "accessLevel": "Write"
    },
    "CreateApplication": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_CreateApplication.html",
      "description": "Creates an application with the given name and description.",
      "accessLevel": "Write"
    },
    "CreateTags": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_CreateTags.html",
      "description": "Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.",
      "accessLevel": "Tagging"
    },
    "DeleteApplications": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DeleteApplications.html",
      "description": "Deletes a list of applications and their associations with configuration items.",
      "accessLevel": "Write"
    },
    "DeleteTags": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DeleteTags.html",
      "description": "Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.",
      "accessLevel": "Tagging"
    },
    "DescribeAgents": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeAgents.html",
      "description": "Lists agents or the Connector by ID or lists all agents/Connectors associated with your user account if you did not specify an ID.",
      "accessLevel": "Read"
    },
    "DescribeConfigurations": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeConfigurations.html",
      "description": "Retrieves attributes for a list of configuration item IDs. All of the supplied IDs must be for the same asset type (server, application, process, or connection). Output fields are specific to the asset type selected. For example, the output for a server configuration item includes a list of attributes about the server, such as host name, operating system, and number of network cards.",
      "accessLevel": "Read"
    },
    "DescribeContinuousExports": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeContinuousExports.html",
      "description": "Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call DescribeContinuousExports as is without passing any parameters.",
      "accessLevel": "Read"
    },
    "DescribeExportConfigurations": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportConfigurations.html",
      "description": "Retrieves the status of a given export process. You can retrieve status from a maximum of 100 processes.",
      "accessLevel": "Read"
    },
    "DescribeExportTasks": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html",
      "description": "Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.",
      "accessLevel": "Read"
    },
    "DescribeImportTasks": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeImportTasks.html",
      "description": "Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.",
      "accessLevel": "List"
    },
    "DescribeTags": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeTags.html",
      "description": "Retrieves a list of configuration items that are tagged with a specific tag. Or retrieves a list of all tags assigned to a specific configuration item.",
      "accessLevel": "Read"
    },
    "DisassociateConfigurationItemsFromApplication": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DisassociateConfigurationItemsFromApplication.html",
      "description": "Disassociates one or more configuration items from an application.",
      "accessLevel": "Write"
    },
    "ExportConfigurations": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ExportConfigurations.html",
      "description": "Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance.",
      "accessLevel": "Write"
    },
    "GetDiscoverySummary": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_GetDiscoverySummary.html",
      "description": "Retrieves a short summary of discovered assets.",
      "accessLevel": "Read"
    },
    "ListConfigurations": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ListConfigurations.html",
      "description": "Retrieves a list of configuration items according to criteria you specify in a filter. The filter criteria identify relationship requirements.",
      "accessLevel": "List"
    },
    "ListServerNeighbors": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ListServerNeighbors.html",
      "description": "Retrieves a list of servers which are one network hop away from a specified server.",
      "accessLevel": "List"
    },
    "StartContinuousExport": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartContinuousExport.html",
      "description": "Start the continuous flow of agent's discovered data into Amazon Athena.",
      "accessLevel": "Write"
    },
    "StartDataCollectionByAgentIds": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartDataCollectionByAgentIds.html",
      "description": "Instructs the specified agents or Connectors to start collecting data.",
      "accessLevel": "Write"
    },
    "StartExportTask": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html",
      "description": "Export the configuration data about discovered configuration items and relationships to an S3 bucket in a specified format.",
      "accessLevel": "Write"
    },
    "StartImportTask": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartImportTask.html",
      "description": "Starts an import task. The Migration Hub import feature allows you to import details of your on-premises environment directly into AWS without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data including the ability to group your devices as applications and track their migration status.",
      "accessLevel": "Write"
    },
    "StopContinuousExport": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StopContinuousExport.html",
      "description": "Stop the continuous flow of agent's discovered data into Amazon Athena.",
      "accessLevel": "Write"
    },
    "StopDataCollectionByAgentIds": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StopDataCollectionByAgentIds.html",
      "description": "Instructs the specified agents or Connectors to stop collecting data.",
      "accessLevel": "Write"
    },
    "UpdateApplication": {
      "url": "https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_UpdateApplication.html",
      "description": "Updates metadata about an application.",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [discovery](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationdiscovery.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associates one or more configuration items with an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_AssociateConfigurationItemsToApplication.html
   */
  public toAssociateConfigurationItemsToApplication() {
    this.add('discovery:AssociateConfigurationItemsToApplication');
    return this;
  }

  /**
   * Deletes one or more Migration Hub import tasks, each identified by their import ID. Each import task has a number of records, which can identify servers or applications.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_BatchDeleteImportData.html
   */
  public toBatchDeleteImportData() {
    this.add('discovery:BatchDeleteImportData');
    return this;
  }

  /**
   * Creates an application with the given name and description.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_CreateApplication.html
   */
  public toCreateApplication() {
    this.add('discovery:CreateApplication');
    return this;
  }

  /**
   * Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_CreateTags.html
   */
  public toCreateTags() {
    this.add('discovery:CreateTags');
    return this;
  }

  /**
   * Deletes a list of applications and their associations with configuration items.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DeleteApplications.html
   */
  public toDeleteApplications() {
    this.add('discovery:DeleteApplications');
    return this;
  }

  /**
   * Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DeleteTags.html
   */
  public toDeleteTags() {
    this.add('discovery:DeleteTags');
    return this;
  }

  /**
   * Lists agents or the Connector by ID or lists all agents/Connectors associated with your user account if you did not specify an ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeAgents.html
   */
  public toDescribeAgents() {
    this.add('discovery:DescribeAgents');
    return this;
  }

  /**
   * Retrieves attributes for a list of configuration item IDs. All of the supplied IDs must be for the same asset type (server, application, process, or connection). Output fields are specific to the asset type selected. For example, the output for a server configuration item includes a list of attributes about the server, such as host name, operating system, and number of network cards.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeConfigurations.html
   */
  public toDescribeConfigurations() {
    this.add('discovery:DescribeConfigurations');
    return this;
  }

  /**
   * Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call DescribeContinuousExports as is without passing any parameters.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeContinuousExports.html
   */
  public toDescribeContinuousExports() {
    this.add('discovery:DescribeContinuousExports');
    return this;
  }

  /**
   * Retrieves the status of a given export process. You can retrieve status from a maximum of 100 processes.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportConfigurations.html
   */
  public toDescribeExportConfigurations() {
    this.add('discovery:DescribeExportConfigurations');
    return this;
  }

  /**
   * Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html
   */
  public toDescribeExportTasks() {
    this.add('discovery:DescribeExportTasks');
    return this;
  }

  /**
   * Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeImportTasks.html
   */
  public toDescribeImportTasks() {
    this.add('discovery:DescribeImportTasks');
    return this;
  }

  /**
   * Retrieves a list of configuration items that are tagged with a specific tag. Or retrieves a list of all tags assigned to a specific configuration item.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    this.add('discovery:DescribeTags');
    return this;
  }

  /**
   * Disassociates one or more configuration items from an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DisassociateConfigurationItemsFromApplication.html
   */
  public toDisassociateConfigurationItemsFromApplication() {
    this.add('discovery:DisassociateConfigurationItemsFromApplication');
    return this;
  }

  /**
   * Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ExportConfigurations.html
   */
  public toExportConfigurations() {
    this.add('discovery:ExportConfigurations');
    return this;
  }

  /**
   * Retrieves a short summary of discovered assets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_GetDiscoverySummary.html
   */
  public toGetDiscoverySummary() {
    this.add('discovery:GetDiscoverySummary');
    return this;
  }

  /**
   * Retrieves a list of configuration items according to criteria you specify in a filter. The filter criteria identify relationship requirements.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ListConfigurations.html
   */
  public toListConfigurations() {
    this.add('discovery:ListConfigurations');
    return this;
  }

  /**
   * Retrieves a list of servers which are one network hop away from a specified server.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ListServerNeighbors.html
   */
  public toListServerNeighbors() {
    this.add('discovery:ListServerNeighbors');
    return this;
  }

  /**
   * Start the continuous flow of agent's discovered data into Amazon Athena.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartContinuousExport.html
   */
  public toStartContinuousExport() {
    this.add('discovery:StartContinuousExport');
    return this;
  }

  /**
   * Instructs the specified agents or Connectors to start collecting data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartDataCollectionByAgentIds.html
   */
  public toStartDataCollectionByAgentIds() {
    this.add('discovery:StartDataCollectionByAgentIds');
    return this;
  }

  /**
   * Export the configuration data about discovered configuration items and relationships to an S3 bucket in a specified format.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html
   */
  public toStartExportTask() {
    this.add('discovery:StartExportTask');
    return this;
  }

  /**
   * Starts an import task. The Migration Hub import feature allows you to import details of your on-premises environment directly into AWS without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data including the ability to group your devices as applications and track their migration status.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartImportTask.html
   */
  public toStartImportTask() {
    this.add('discovery:StartImportTask');
    return this;
  }

  /**
   * Stop the continuous flow of agent's discovered data into Amazon Athena.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StopContinuousExport.html
   */
  public toStopContinuousExport() {
    this.add('discovery:StopContinuousExport');
    return this;
  }

  /**
   * Instructs the specified agents or Connectors to stop collecting data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StopDataCollectionByAgentIds.html
   */
  public toStopDataCollectionByAgentIds() {
    this.add('discovery:StopDataCollectionByAgentIds');
    return this;
  }

  /**
   * Updates metadata about an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    this.add('discovery:UpdateApplication');
    return this;
  }
}
