import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [discovery](https://docs.aws.amazon.com/service-authorization/latest/reference/list_applicationdiscovery.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Discovery extends PolicyStatement {
  public servicePrefix = 'discovery';

  /**
   * Statement provider for service [discovery](https://docs.aws.amazon.com/service-authorization/latest/reference/list_applicationdiscovery.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
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
    return this.to('AssociateConfigurationItemsToApplication');
  }

  /**
   * Deletes one or more Migration Hub import tasks, each identified by their import ID. Each import task has a number of records, which can identify servers or applications.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_BatchDeleteImportData.html
   */
  public toBatchDeleteImportData() {
    return this.to('BatchDeleteImportData');
  }

  /**
   * Creates an application with the given name and description.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_CreateTags.html
   */
  public toCreateTags() {
    return this.to('CreateTags');
  }

  /**
   * Deletes a list of applications and their associations with configuration items.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DeleteApplications.html
   */
  public toDeleteApplications() {
    return this.to('DeleteApplications');
  }

  /**
   * Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DeleteTags.html
   */
  public toDeleteTags() {
    return this.to('DeleteTags');
  }

  /**
   * Lists agents or the Connector by ID or lists all agents/Connectors associated with your user account if you did not specify an ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeAgents.html
   */
  public toDescribeAgents() {
    return this.to('DescribeAgents');
  }

  /**
   * Retrieves attributes for a list of configuration item IDs. All of the supplied IDs must be for the same asset type (server, application, process, or connection). Output fields are specific to the asset type selected. For example, the output for a server configuration item includes a list of attributes about the server, such as host name, operating system, and number of network cards.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeConfigurations.html
   */
  public toDescribeConfigurations() {
    return this.to('DescribeConfigurations');
  }

  /**
   * Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call DescribeContinuousExports as is without passing any parameters.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeContinuousExports.html
   */
  public toDescribeContinuousExports() {
    return this.to('DescribeContinuousExports');
  }

  /**
   * Retrieves the status of a given export process. You can retrieve status from a maximum of 100 processes.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportConfigurations.html
   */
  public toDescribeExportConfigurations() {
    return this.to('DescribeExportConfigurations');
  }

  /**
   * Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html
   */
  public toDescribeExportTasks() {
    return this.to('DescribeExportTasks');
  }

  /**
   * Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeImportTasks.html
   */
  public toDescribeImportTasks() {
    return this.to('DescribeImportTasks');
  }

  /**
   * Retrieves a list of configuration items that are tagged with a specific tag. Or retrieves a list of all tags assigned to a specific configuration item.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    return this.to('DescribeTags');
  }

  /**
   * Disassociates one or more configuration items from an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DisassociateConfigurationItemsFromApplication.html
   */
  public toDisassociateConfigurationItemsFromApplication() {
    return this.to('DisassociateConfigurationItemsFromApplication');
  }

  /**
   * Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ExportConfigurations.html
   */
  public toExportConfigurations() {
    return this.to('ExportConfigurations');
  }

  /**
   * Retrieves a short summary of discovered assets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_GetDiscoverySummary.html
   */
  public toGetDiscoverySummary() {
    return this.to('GetDiscoverySummary');
  }

  /**
   * Retrieves a list of configuration items according to criteria you specify in a filter. The filter criteria identify relationship requirements.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ListConfigurations.html
   */
  public toListConfigurations() {
    return this.to('ListConfigurations');
  }

  /**
   * Retrieves a list of servers which are one network hop away from a specified server.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ListServerNeighbors.html
   */
  public toListServerNeighbors() {
    return this.to('ListServerNeighbors');
  }

  /**
   * Start the continuous flow of agent's discovered data into Amazon Athena.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartContinuousExport.html
   */
  public toStartContinuousExport() {
    return this.to('StartContinuousExport');
  }

  /**
   * Instructs the specified agents or Connectors to start collecting data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartDataCollectionByAgentIds.html
   */
  public toStartDataCollectionByAgentIds() {
    return this.to('StartDataCollectionByAgentIds');
  }

  /**
   * Export the configuration data about discovered configuration items and relationships to an S3 bucket in a specified format.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html
   */
  public toStartExportTask() {
    return this.to('StartExportTask');
  }

  /**
   * Starts an import task. The Migration Hub import feature allows you to import details of your on-premises environment directly into AWS without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data including the ability to group your devices as applications and track their migration status.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartImportTask.html
   */
  public toStartImportTask() {
    return this.to('StartImportTask');
  }

  /**
   * Stop the continuous flow of agent's discovered data into Amazon Athena.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StopContinuousExport.html
   */
  public toStopContinuousExport() {
    return this.to('StopContinuousExport');
  }

  /**
   * Instructs the specified agents or Connectors to stop collecting data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StopDataCollectionByAgentIds.html
   */
  public toStopDataCollectionByAgentIds() {
    return this.to('StopDataCollectionByAgentIds');
  }

  /**
   * Updates metadata about an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateConfigurationItemsToApplication',
      'BatchDeleteImportData',
      'CreateApplication',
      'DeleteApplications',
      'DisassociateConfigurationItemsFromApplication',
      'ExportConfigurations',
      'StartContinuousExport',
      'StartDataCollectionByAgentIds',
      'StartExportTask',
      'StartImportTask',
      'StopContinuousExport',
      'StopDataCollectionByAgentIds',
      'UpdateApplication'
    ],
    Tagging: [
      'CreateTags',
      'DeleteTags'
    ],
    Read: [
      'DescribeAgents',
      'DescribeConfigurations',
      'DescribeContinuousExports',
      'DescribeExportConfigurations',
      'DescribeExportTasks',
      'DescribeTags',
      'GetDiscoverySummary'
    ],
    List: [
      'DescribeImportTasks',
      'ListConfigurations',
      'ListServerNeighbors'
    ]
  };
}
