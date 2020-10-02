import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [discovery](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationdiscovery.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Discovery extends PolicyStatement {
  public servicePrefix = 'discovery';

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
    this.to('discovery:AssociateConfigurationItemsToApplication');
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
    this.to('discovery:BatchDeleteImportData');
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
    this.to('discovery:CreateApplication');
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
    this.to('discovery:CreateTags');
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
    this.to('discovery:DeleteApplications');
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
    this.to('discovery:DeleteTags');
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
    this.to('discovery:DescribeAgents');
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
    this.to('discovery:DescribeConfigurations');
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
    this.to('discovery:DescribeContinuousExports');
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
    this.to('discovery:DescribeExportConfigurations');
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
    this.to('discovery:DescribeExportTasks');
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
    this.to('discovery:DescribeImportTasks');
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
    this.to('discovery:DescribeTags');
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
    this.to('discovery:DisassociateConfigurationItemsFromApplication');
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
    this.to('discovery:ExportConfigurations');
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
    this.to('discovery:GetDiscoverySummary');
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
    this.to('discovery:ListConfigurations');
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
    this.to('discovery:ListServerNeighbors');
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
    this.to('discovery:StartContinuousExport');
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
    this.to('discovery:StartDataCollectionByAgentIds');
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
    this.to('discovery:StartExportTask');
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
    this.to('discovery:StartImportTask');
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
    this.to('discovery:StopContinuousExport');
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
    this.to('discovery:StopDataCollectionByAgentIds');
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
    this.to('discovery:UpdateApplication');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateConfigurationItemsToApplication",
      "BatchDeleteImportData",
      "CreateApplication",
      "DeleteApplications",
      "DisassociateConfigurationItemsFromApplication",
      "ExportConfigurations",
      "StartContinuousExport",
      "StartDataCollectionByAgentIds",
      "StartExportTask",
      "StartImportTask",
      "StopContinuousExport",
      "StopDataCollectionByAgentIds",
      "UpdateApplication"
    ],
    "Tagging": [
      "CreateTags",
      "DeleteTags"
    ],
    "Read": [
      "DescribeAgents",
      "DescribeConfigurations",
      "DescribeContinuousExports",
      "DescribeExportConfigurations",
      "DescribeExportTasks",
      "DescribeTags",
      "GetDiscoverySummary"
    ],
    "List": [
      "DescribeImportTasks",
      "ListConfigurations",
      "ListServerNeighbors"
    ]
  };
}
