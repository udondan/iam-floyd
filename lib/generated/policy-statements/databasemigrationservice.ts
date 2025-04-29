import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [dms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dms extends PolicyStatement {
  public servicePrefix = 'dms';

  /**
   * Statement provider for service [dms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add metadata tags to DMS resources, including replication instances, endpoints, security groups, and migration tasks
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
    return this.to('AddTagsToResource');
  }

  /**
   * Grants permission to apply a pending maintenance action to a resource (for example, to a replication instance)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ApplyPendingMaintenanceAction.html
   */
  public toApplyPendingMaintenanceAction() {
    return this.to('ApplyPendingMaintenanceAction');
  }

  /**
   * Grants permission to associate a extension pack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartExtensionPackAssociation.html
   */
  public toAssociateExtensionPack() {
    return this.to('AssociateExtensionPack');
  }

  /**
   * Grants permission to start the analysis of up to 20 source databases to recommend target engines for each source database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_BatchStartRecommendations.html
   */
  public toBatchStartRecommendations() {
    return this.to('BatchStartRecommendations');
  }

  /**
   * Grants permission to cancel a single premigration assessment run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CancelReplicationTaskAssessmentRun.html
   */
  public toCancelReplicationTaskAssessmentRun() {
    return this.to('CancelReplicationTaskAssessmentRun');
  }

  /**
   * Grants permission to create a database migration using the provided settings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toCreateDataMigration() {
    return this.to('CreateDataMigration');
  }

  /**
   * Grants permission to create an data provider using the provided settings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateDataProvider.html
   */
  public toCreateDataProvider() {
    return this.to('CreateDataProvider');
  }

  /**
   * Grants permission to create an endpoint using the provided settings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateEndpoint.html
   */
  public toCreateEndpoint() {
    return this.to('CreateEndpoint');
  }

  /**
   * Grants permission to create an AWS DMS event notification subscription
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateEventSubscription.html
   */
  public toCreateEventSubscription() {
    return this.to('CreateEventSubscription');
  }

  /**
   * Grants permission to create a Fleet Advisor collector using the specified parameters
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateFleetAdvisorCollector.html
   */
  public toCreateFleetAdvisorCollector() {
    return this.to('CreateFleetAdvisorCollector');
  }

  /**
   * Grants permission to create an instance profile using the provided settings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateInstanceProfile.html
   */
  public toCreateInstanceProfile() {
    return this.to('CreateInstanceProfile');
  }

  /**
   * Grants permission to create an migration project using the provided settings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateMigrationProject.html
   */
  public toCreateMigrationProject() {
    return this.to('CreateMigrationProject');
  }

  /**
   * Grants permission to create a replication config using the provided settings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toCreateReplicationConfig() {
    return this.to('CreateReplicationConfig');
  }

  /**
   * Grants permission to create a replication instance using the specified parameters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html
   */
  public toCreateReplicationInstance() {
    return this.to('CreateReplicationInstance');
  }

  /**
   * Grants permission to create a replication subnet group given a list of the subnet IDs in a VPC
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationSubnetGroup.html
   */
  public toCreateReplicationSubnetGroup() {
    return this.to('CreateReplicationSubnetGroup');
  }

  /**
   * Grants permission to create a replication task using the specified parameters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifReqTag()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html
   */
  public toCreateReplicationTask() {
    return this.to('CreateReplicationTask');
  }

  /**
   * Grants permission to delete the specified certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteCertificate.html
   */
  public toDeleteCertificate() {
    return this.to('DeleteCertificate');
  }

  /**
   * Grants permission to delete the specified connection between a replication instance and an endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteConnection.html
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to delete the specified database migration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toDeleteDataMigration() {
    return this.to('DeleteDataMigration');
  }

  /**
   * Grants permission to delete the specified data provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteDataProvider.html
   */
  public toDeleteDataProvider() {
    return this.to('DeleteDataProvider');
  }

  /**
   * Grants permission to delete the specified endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteEndpoint.html
   */
  public toDeleteEndpoint() {
    return this.to('DeleteEndpoint');
  }

  /**
   * Grants permission to delete an AWS DMS event subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteEventSubscription.html
   */
  public toDeleteEventSubscription() {
    return this.to('DeleteEventSubscription');
  }

  /**
   * Grants permission to delete the specified Fleet Advisor collector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteFleetAdvisorCollector.html
   */
  public toDeleteFleetAdvisorCollector() {
    return this.to('DeleteFleetAdvisorCollector');
  }

  /**
   * Grants permission to delete the specified Fleet Advisor databases
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteFleetAdvisorDatabases.html
   */
  public toDeleteFleetAdvisorDatabases() {
    return this.to('DeleteFleetAdvisorDatabases');
  }

  /**
   * Grants permission to delete the specified instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteInstanceProfile.html
   */
  public toDeleteInstanceProfile() {
    return this.to('DeleteInstanceProfile');
  }

  /**
   * Grants permission to delete the specified migration project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteMigrationProject.html
   */
  public toDeleteMigrationProject() {
    return this.to('DeleteMigrationProject');
  }

  /**
   * Grants permission to delete the specified replication config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toDeleteReplicationConfig() {
    return this.to('DeleteReplicationConfig');
  }

  /**
   * Grants permission to delete the specified replication instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationInstance.html
   */
  public toDeleteReplicationInstance() {
    return this.to('DeleteReplicationInstance');
  }

  /**
   * Grants permission to deletes a subnet group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationSubnetGroup.html
   */
  public toDeleteReplicationSubnetGroup() {
    return this.to('DeleteReplicationSubnetGroup');
  }

  /**
   * Grants permission to delete the specified replication task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTask.html
   */
  public toDeleteReplicationTask() {
    return this.to('DeleteReplicationTask');
  }

  /**
   * Grants permission to delete the record of a single premigration assessment run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTaskAssessmentRun.html
   */
  public toDeleteReplicationTaskAssessmentRun() {
    return this.to('DeleteReplicationTaskAssessmentRun');
  }

  /**
   * Grants permission to list all of the AWS DMS attributes for a customer account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeAccountAttributes.html
   */
  public toDescribeAccountAttributes() {
    return this.to('DescribeAccountAttributes');
  }

  /**
   * Grants permission to list individual assessments that you can specify for a new premigration assessment run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeApplicableIndividualAssessments.html
   */
  public toDescribeApplicableIndividualAssessments() {
    return this.to('DescribeApplicableIndividualAssessments');
  }

  /**
   * Grants permission to provide a description of the certificate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeCertificates.html
   */
  public toDescribeCertificates() {
    return this.to('DescribeCertificates');
  }

  /**
   * Grants permission to describe the status of the connections that have been made between the replication instance and an endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeConnections.html
   */
  public toDescribeConnections() {
    return this.to('DescribeConnections');
  }

  /**
   * Grants permission to return information about DMS Schema Conversion project configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeConversionConfiguration.html
   */
  public toDescribeConversionConfiguration() {
    return this.to('DescribeConversionConfiguration');
  }

  /**
   * Grants permission to return information about database migrations for your account in the specified region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toDescribeDataMigrations() {
    return this.to('DescribeDataMigrations');
  }

  /**
   * Grants permission to return the possible endpoint settings available when you create an endpoint for a specific database engine
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpointSettings.html
   */
  public toDescribeEndpointSettings() {
    return this.to('DescribeEndpointSettings');
  }

  /**
   * Grants permission to return information about the type of endpoints available
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpointTypes.html
   */
  public toDescribeEndpointTypes() {
    return this.to('DescribeEndpointTypes');
  }

  /**
   * Grants permission to return information about the endpoints for your account in the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpoints.html
   */
  public toDescribeEndpoints() {
    return this.to('DescribeEndpoints');
  }

  /**
   * Grants permission to return information about the available versions for DMS replication instances
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEngineVersions.html
   */
  public toDescribeEngineVersions() {
    return this.to('DescribeEngineVersions');
  }

  /**
   * Grants permission to list categories for all event source types, or, if specified, for a specified source type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEventCategories.html
   */
  public toDescribeEventCategories() {
    return this.to('DescribeEventCategories');
  }

  /**
   * Grants permission to list all the event subscriptions for a customer account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEventSubscriptions.html
   */
  public toDescribeEventSubscriptions() {
    return this.to('DescribeEventSubscriptions');
  }

  /**
   * Grants permission to list events for a given source identifier and source type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEvents.html
   */
  public toDescribeEvents() {
    return this.to('DescribeEvents');
  }

  /**
   * Grants permission to return a paginated list of Fleet Advisor collectors in your account based on filter settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeFleetAdvisorCollectors.html
   */
  public toDescribeFleetAdvisorCollectors() {
    return this.to('DescribeFleetAdvisorCollectors');
  }

  /**
   * Grants permission to return a paginated list of Fleet Advisor databases in your account based on filter settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeFleetAdvisorDatabases.html
   */
  public toDescribeFleetAdvisorDatabases() {
    return this.to('DescribeFleetAdvisorDatabases');
  }

  /**
   * Grants permission to return a paginated list of descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeFleetAdvisorLsaAnalysis.html
   */
  public toDescribeFleetAdvisorLsaAnalysis() {
    return this.to('DescribeFleetAdvisorLsaAnalysis');
  }

  /**
   * Grants permission to return a paginated list of descriptions of schemas discovered by your Fleet Advisor collectors based on filter settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeFleetAdvisorSchemaObjectSummary.html
   */
  public toDescribeFleetAdvisorSchemaObjectSummary() {
    return this.to('DescribeFleetAdvisorSchemaObjectSummary');
  }

  /**
   * Grants permission to return a paginated list of schemas discovered by your Fleet Advisor collectors based on filter settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeFleetAdvisorSchemas.html
   */
  public toDescribeFleetAdvisorSchemas() {
    return this.to('DescribeFleetAdvisorSchemas');
  }

  /**
   * Grants permission to return information about start metadata model import operations for a migration project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelImports.html
   */
  public toDescribeMetadataModelImports() {
    return this.to('DescribeMetadataModelImports');
  }

  /**
   * Grants permission to return information about the replication instance types that can be created in the specified region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeOrderableReplicationInstances.html
   */
  public toDescribeOrderableReplicationInstances() {
    return this.to('DescribeOrderableReplicationInstances');
  }

  /**
   * Grants permission to return information about pending maintenance actions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribePendingMaintenanceActions.html
   */
  public toDescribePendingMaintenanceActions() {
    return this.to('DescribePendingMaintenanceActions');
  }

  /**
   * Grants permission to return a paginated list of descriptions of limitations for recommendations of target AWS engines
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeFleetAdvisorLsaAnalysis.html
   */
  public toDescribeRecommendationLimitations() {
    return this.to('DescribeRecommendationLimitations');
  }

  /**
   * Grants permission to return a paginated list of descriptions of target engine recommendations for your source databases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeRecommendations.html
   */
  public toDescribeRecommendations() {
    return this.to('DescribeRecommendations');
  }

  /**
   * Grants permission to returns the status of the RefreshSchemas operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeRefreshSchemasStatus.html
   */
  public toDescribeRefreshSchemasStatus() {
    return this.to('DescribeRefreshSchemasStatus');
  }

  /**
   * Grants permission to describe replication configs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toDescribeReplicationConfigs() {
    return this.to('DescribeReplicationConfigs');
  }

  /**
   * Grants permission to return information about the task logs for the specified task
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationInstanceTaskLogs.html
   */
  public toDescribeReplicationInstanceTaskLogs() {
    return this.to('DescribeReplicationInstanceTaskLogs');
  }

  /**
   * Grants permission to return information about replication instances for your account in the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationInstances.html
   */
  public toDescribeReplicationInstances() {
    return this.to('DescribeReplicationInstances');
  }

  /**
   * Grants permission to return information about the replication subnet groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationSubnetGroups.html
   */
  public toDescribeReplicationSubnetGroups() {
    return this.to('DescribeReplicationSubnetGroups');
  }

  /**
   * Grants permission to describe replication table statistics
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toDescribeReplicationTableStatistics() {
    return this.to('DescribeReplicationTableStatistics');
  }

  /**
   * Grants permission to return the latest task assessment results from Amazon S3
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTaskAssessmentResults.html
   */
  public toDescribeReplicationTaskAssessmentResults() {
    return this.to('DescribeReplicationTaskAssessmentResults');
  }

  /**
   * Grants permission to return a paginated list of premigration assessment runs based on filter settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTaskAssessmentRuns.html
   */
  public toDescribeReplicationTaskAssessmentRuns() {
    return this.to('DescribeReplicationTaskAssessmentRuns');
  }

  /**
   * Grants permission to return a paginated list of individual assessments based on filter settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTaskIndividualAssessments.html
   */
  public toDescribeReplicationTaskIndividualAssessments() {
    return this.to('DescribeReplicationTaskIndividualAssessments');
  }

  /**
   * Grants permission to return information about replication tasks for your account in the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTasks.html
   */
  public toDescribeReplicationTasks() {
    return this.to('DescribeReplicationTasks');
  }

  /**
   * Grants permission to describe replications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toDescribeReplications() {
    return this.to('DescribeReplications');
  }

  /**
   * Grants permission to return information about the schema for the specified endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeSchemas.html
   */
  public toDescribeSchemas() {
    return this.to('DescribeSchemas');
  }

  /**
   * Grants permission to return table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeTableStatistics.html
   */
  public toDescribeTableStatistics() {
    return this.to('DescribeTableStatistics');
  }

  /**
   * Grants permission to export the specified metadata model assessment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ExportMetadataModelAssessment.html
   */
  public toExportMetadataModelAssessment() {
    return this.to('ExportMetadataModelAssessment');
  }

  /**
   * Grants permission to upload the specified certificate
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ImportCertificate.html
   */
  public toImportCertificate() {
    return this.to('ImportCertificate');
  }

  /**
   * Grants permission to list the AWS DMS attributes for a data providers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeDataProviders.html
   */
  public toListDataProviders() {
    return this.to('ListDataProviders');
  }

  /**
   * Grants permission to list the AWS DMS attributes for a extension packs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeExtensionPackAssociations.html
   */
  public toListExtensionPacks() {
    return this.to('ListExtensionPacks');
  }

  /**
   * Grants permission to list the AWS DMS attributes for a instance profiles
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeInstanceProfiles.html
   */
  public toListInstanceProfiles() {
    return this.to('ListInstanceProfiles');
  }

  /**
   * Grants permission to list the AWS DMS attributes for a metadata model assessment action items. Note. Despite this action requires StartMetadataModelImport, the latter does not currently authorize the described Schema Conversion operation
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - dms:StartMetadataModelImport
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toListMetadataModelAssessmentActionItems() {
    return this.to('ListMetadataModelAssessmentActionItems');
  }

  /**
   * Grants permission to list the AWS DMS attributes for a metadata model assessments
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ListMetadataModelExports.html
   */
  public toListMetadataModelAssessments() {
    return this.to('ListMetadataModelAssessments');
  }

  /**
   * Grants permission to list the AWS DMS attributes for a metadata model conversions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelConversions.html
   */
  public toListMetadataModelConversions() {
    return this.to('ListMetadataModelConversions');
  }

  /**
   * Grants permission to list the AWS DMS attributes for a metadata model exports
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toListMetadataModelExports() {
    return this.to('ListMetadataModelExports');
  }

  /**
   * Grants permission to list the AWS DMS attributes for a migration projects. Note. Despite this action requires DescribeMigrationProjects and DescribeConversionConfiguration, both required actions do not currently authorize the described Schema Conversion operation
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - dms:DescribeConversionConfiguration
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toListMigrationProjects() {
    return this.to('ListMigrationProjects');
  }

  /**
   * Grants permission to list all tags for an AWS DMS resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to modify the specified database migration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toModifyDataMigration() {
    return this.to('ModifyDataMigration');
  }

  /**
   * Grants permission to modify the specified endpoint
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyEndpoint.html
   */
  public toModifyEndpoint() {
    return this.to('ModifyEndpoint');
  }

  /**
   * Grants permission to modify an existing AWS DMS event notification subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyEventSubscription.html
   */
  public toModifyEventSubscription() {
    return this.to('ModifyEventSubscription');
  }

  /**
   * Grants permission to modify the name and description of the specified Fleet Advisor collector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toModifyFleetAdvisorCollector() {
    return this.to('ModifyFleetAdvisorCollector');
  }

  /**
   * Grants permission to modify the status of the specified Fleet Advisor collector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toModifyFleetAdvisorCollectorStatuses() {
    return this.to('ModifyFleetAdvisorCollectorStatuses');
  }

  /**
   * Grants permission to modify the specified replication config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toModifyReplicationConfig() {
    return this.to('ModifyReplicationConfig');
  }

  /**
   * Grants permission to modify the replication instance to apply new settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationInstance.html
   */
  public toModifyReplicationInstance() {
    return this.to('ModifyReplicationInstance');
  }

  /**
   * Grants permission to modify the settings for the specified replication subnet group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationSubnetGroup.html
   */
  public toModifyReplicationSubnetGroup() {
    return this.to('ModifyReplicationSubnetGroup');
  }

  /**
   * Grants permission to modify the specified replication task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html
   */
  public toModifyReplicationTask() {
    return this.to('ModifyReplicationTask');
  }

  /**
   * Grants permission to move the specified replication task to a different replication instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html
   */
  public toMoveReplicationTask() {
    return this.to('MoveReplicationTask');
  }

  /**
   * Grants permission to reboot a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_RebootReplicationInstance.html
   */
  public toRebootReplicationInstance() {
    return this.to('RebootReplicationInstance');
  }

  /**
   * Grants permission to populate the schema for the specified endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_RefreshSchemas.html
   */
  public toRefreshSchemas() {
    return this.to('RefreshSchemas');
  }

  /**
   * Grants permission to reload the target database table with the source for a replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toReloadReplicationTables() {
    return this.to('ReloadReplicationTables');
  }

  /**
   * Grants permission to reload the target database table with the source data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReloadTables.html
   */
  public toReloadTables() {
    return this.to('ReloadTables');
  }

  /**
   * Grants permission to remove metadata tags from a DMS resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    return this.to('RemoveTagsFromResource');
  }

  /**
   * Grants permission to run a large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_RunFleetAdvisorLsaAnalysis.html
   */
  public toRunFleetAdvisorLsaAnalysis() {
    return this.to('RunFleetAdvisorLsaAnalysis');
  }

  /**
   * Grants permission to start the database migration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toStartDataMigration() {
    return this.to('StartDataMigration');
  }

  /**
   * Grants permission to start a new assessment of metadata model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelAssessment.html
   */
  public toStartMetadataModelAssessment() {
    return this.to('StartMetadataModelAssessment');
  }

  /**
   * Grants permission to start a new conversion of metadata model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelConversion.html
   */
  public toStartMetadataModelConversion() {
    return this.to('StartMetadataModelConversion');
  }

  /**
   * Grants permission to start a new export of metadata model as script
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelExportAsScript.html
   */
  public toStartMetadataModelExportAsScripts() {
    return this.to('StartMetadataModelExportAsScripts');
  }

  /**
   * Grants permission to start a new export of metadata model to target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelExportToTarget.html
   */
  public toStartMetadataModelExportToTarget() {
    return this.to('StartMetadataModelExportToTarget');
  }

  /**
   * Grants permission to start a new import of metadata model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelImport.html
   */
  public toStartMetadataModelImport() {
    return this.to('StartMetadataModelImport');
  }

  /**
   * Grants permission to start the analysis of your source database to provide recommendations of target engines
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartRecommendations.html
   */
  public toStartRecommendations() {
    return this.to('StartRecommendations');
  }

  /**
   * Grants permission to start a replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toStartReplication() {
    return this.to('StartReplication');
  }

  /**
   * Grants permission to start the replication task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html
   */
  public toStartReplicationTask() {
    return this.to('StartReplicationTask');
  }

  /**
   * Grants permission to start the replication task assessment for unsupported data types in the source database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessment.html
   */
  public toStartReplicationTaskAssessment() {
    return this.to('StartReplicationTaskAssessment');
  }

  /**
   * Grants permission to start a new premigration assessment run for one or more individual assessments of a migration task
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html
   */
  public toStartReplicationTaskAssessmentRun() {
    return this.to('StartReplicationTaskAssessmentRun');
  }

  /**
   * Grants permission to stop the database migration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toStopDataMigration() {
    return this.to('StopDataMigration');
  }

  /**
   * Grants permission to stop a replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toStopReplication() {
    return this.to('StopReplication');
  }

  /**
   * Grants permission to stop the replication task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_StopReplicationTask.html
   */
  public toStopReplicationTask() {
    return this.to('StopReplicationTask');
  }

  /**
   * Grants permission to test the connection between the replication instance and the endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_TestConnection.html
   */
  public toTestConnection() {
    return this.to('TestConnection');
  }

  /**
   * Grants permission to update a conversion configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyConversionConfiguration.html
   */
  public toUpdateConversionConfiguration() {
    return this.to('UpdateConversionConfiguration');
  }

  /**
   * Grants permission to update the specified data provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyDataProvider.html
   */
  public toUpdateDataProvider() {
    return this.to('UpdateDataProvider');
  }

  /**
   * Grants permission to update the specified instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyInstanceProfile.html
   */
  public toUpdateInstanceProfile() {
    return this.to('UpdateInstanceProfile');
  }

  /**
   * Grants permission to update the specified migration project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyMigrationProject.html
   */
  public toUpdateMigrationProject() {
    return this.to('UpdateMigrationProject');
  }

  /**
   * Grants permission to migrate DMS subcriptions to Eventbridge
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_UpdateSubscriptionsToEventBridge.html
   */
  public toUpdateSubscriptionsToEventBridge() {
    return this.to('UpdateSubscriptionsToEventBridge');
  }

  /**
   * Grants permission to upload files to your Amazon S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   */
  public toUploadFileMetadataList() {
    return this.to('UploadFileMetadataList');
  }

  protected accessLevelList: AccessLevelList = {
    Tagging: [
      'AddTagsToResource',
      'RemoveTagsFromResource'
    ],
    Write: [
      'ApplyPendingMaintenanceAction',
      'AssociateExtensionPack',
      'BatchStartRecommendations',
      'CancelReplicationTaskAssessmentRun',
      'CreateDataMigration',
      'CreateDataProvider',
      'CreateEndpoint',
      'CreateEventSubscription',
      'CreateFleetAdvisorCollector',
      'CreateInstanceProfile',
      'CreateMigrationProject',
      'CreateReplicationConfig',
      'CreateReplicationInstance',
      'CreateReplicationSubnetGroup',
      'CreateReplicationTask',
      'DeleteCertificate',
      'DeleteConnection',
      'DeleteDataMigration',
      'DeleteDataProvider',
      'DeleteEndpoint',
      'DeleteEventSubscription',
      'DeleteFleetAdvisorCollector',
      'DeleteFleetAdvisorDatabases',
      'DeleteInstanceProfile',
      'DeleteMigrationProject',
      'DeleteReplicationConfig',
      'DeleteReplicationInstance',
      'DeleteReplicationSubnetGroup',
      'DeleteReplicationTask',
      'DeleteReplicationTaskAssessmentRun',
      'ExportMetadataModelAssessment',
      'ImportCertificate',
      'ModifyDataMigration',
      'ModifyEndpoint',
      'ModifyEventSubscription',
      'ModifyFleetAdvisorCollector',
      'ModifyFleetAdvisorCollectorStatuses',
      'ModifyReplicationConfig',
      'ModifyReplicationInstance',
      'ModifyReplicationSubnetGroup',
      'ModifyReplicationTask',
      'MoveReplicationTask',
      'RebootReplicationInstance',
      'RefreshSchemas',
      'ReloadReplicationTables',
      'ReloadTables',
      'RunFleetAdvisorLsaAnalysis',
      'StartDataMigration',
      'StartMetadataModelAssessment',
      'StartMetadataModelConversion',
      'StartMetadataModelExportAsScripts',
      'StartMetadataModelExportToTarget',
      'StartMetadataModelImport',
      'StartRecommendations',
      'StartReplication',
      'StartReplicationTask',
      'StartReplicationTaskAssessment',
      'StartReplicationTaskAssessmentRun',
      'StopDataMigration',
      'StopReplication',
      'StopReplicationTask',
      'UpdateConversionConfiguration',
      'UpdateDataProvider',
      'UpdateInstanceProfile',
      'UpdateMigrationProject',
      'UpdateSubscriptionsToEventBridge',
      'UploadFileMetadataList'
    ],
    Read: [
      'DescribeAccountAttributes',
      'DescribeApplicableIndividualAssessments',
      'DescribeCertificates',
      'DescribeConnections',
      'DescribeConversionConfiguration',
      'DescribeDataMigrations',
      'DescribeEndpointSettings',
      'DescribeEndpointTypes',
      'DescribeEndpoints',
      'DescribeEngineVersions',
      'DescribeEventCategories',
      'DescribeEventSubscriptions',
      'DescribeEvents',
      'DescribeFleetAdvisorCollectors',
      'DescribeFleetAdvisorDatabases',
      'DescribeFleetAdvisorLsaAnalysis',
      'DescribeFleetAdvisorSchemaObjectSummary',
      'DescribeFleetAdvisorSchemas',
      'DescribeMetadataModelImports',
      'DescribeOrderableReplicationInstances',
      'DescribePendingMaintenanceActions',
      'DescribeRecommendationLimitations',
      'DescribeRecommendations',
      'DescribeRefreshSchemasStatus',
      'DescribeReplicationConfigs',
      'DescribeReplicationInstanceTaskLogs',
      'DescribeReplicationInstances',
      'DescribeReplicationSubnetGroups',
      'DescribeReplicationTableStatistics',
      'DescribeReplicationTaskAssessmentResults',
      'DescribeReplicationTaskAssessmentRuns',
      'DescribeReplicationTaskIndividualAssessments',
      'DescribeReplicationTasks',
      'DescribeReplications',
      'DescribeSchemas',
      'DescribeTableStatistics',
      'ListDataProviders',
      'ListExtensionPacks',
      'ListInstanceProfiles',
      'ListMetadataModelAssessmentActionItems',
      'ListMetadataModelAssessments',
      'ListMetadataModelConversions',
      'ListMetadataModelExports',
      'ListMigrationProjects',
      'ListTagsForResource',
      'TestConnection'
    ]
  };

  /**
   * Adds a resource of type Certificate to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_Certificate.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCertTag()
   */
  public onCertificate(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cert:${ resourceName }`);
  }

  /**
   * Adds a resource of type DataProvider to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifDataProviderTag()
   */
  public onDataProvider(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:data-provider:${ resourceName }`);
  }

  /**
   * Adds a resource of type DataMigration to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifDataMigrationTag()
   */
  public onDataMigration(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:data-migration:${ resourceName }`);
  }

  /**
   * Adds a resource of type Endpoint to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_Endpoint.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifEndpointTag()
   */
  public onEndpoint(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:endpoint:${ resourceName }`);
  }

  /**
   * Adds a resource of type EventSubscription to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_EventSubscription.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifEsTag()
   */
  public onEventSubscription(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:es:${ resourceName }`);
  }

  /**
   * Adds a resource of type InstanceProfile to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceProfileTag()
   */
  public onInstanceProfile(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance-profile:${ resourceName }`);
  }

  /**
   * Adds a resource of type MigrationProject to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifMigrationProjectTag()
   */
  public onMigrationProject(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:migration-project:${ resourceName }`);
  }

  /**
   * Adds a resource of type ReplicationConfig to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifReplicationConfigTag()
   */
  public onReplicationConfig(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:replication-config:${ resourceName }`);
  }

  /**
   * Adds a resource of type ReplicationInstance to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifRepTag()
   */
  public onReplicationInstance(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:rep:${ resourceName }`);
  }

  /**
   * Adds a resource of type ReplicationSubnetGroup to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationSubnetGroup.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifSubgrpTag()
   */
  public onReplicationSubnetGroup(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:subgrp:${ resourceName }`);
  }

  /**
   * Adds a resource of type ReplicationTask to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationTask.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifTaskTag()
   */
  public onReplicationTask(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:task:${ resourceName }`);
  }

  /**
   * Adds a resource of type ReplicationTaskAssessmentRun to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationTaskAssessmentRun.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAssessmentRunTag()
   */
  public onReplicationTaskAssessmentRun(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:assessment-run:${ resourceName }`);
  }

  /**
   * Adds a resource of type ReplicationTaskIndividualAssessment to the statement
   *
   * https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationTaskIndividualAssessment.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifIndividualAssessmentTag()
   */
  public onReplicationTaskIndividualAssessment(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:individual-assessment:${ resourceName }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAddTagsToResource()
   * - .toCreateDataMigration()
   * - .toCreateDataProvider()
   * - .toCreateEndpoint()
   * - .toCreateEventSubscription()
   * - .toCreateInstanceProfile()
   * - .toCreateMigrationProject()
   * - .toCreateReplicationConfig()
   * - .toCreateReplicationInstance()
   * - .toCreateReplicationSubnetGroup()
   * - .toCreateReplicationTask()
   * - .toImportCertificate()
   * - .toRemoveTagsFromResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAddTagsToResource()
   * - .toCreateDataMigration()
   * - .toCreateDataProvider()
   * - .toCreateEndpoint()
   * - .toCreateEventSubscription()
   * - .toCreateInstanceProfile()
   * - .toCreateMigrationProject()
   * - .toCreateReplicationConfig()
   * - .toCreateReplicationInstance()
   * - .toCreateReplicationSubnetGroup()
   * - .toCreateReplicationTask()
   * - .toDescribeReplicationInstanceTaskLogs()
   * - .toImportCertificate()
   * - .toRemoveTagsFromResource()
   *
   * Applies to resource types:
   * - Certificate
   * - DataProvider
   * - DataMigration
   * - Endpoint
   * - EventSubscription
   * - InstanceProfile
   * - MigrationProject
   * - ReplicationConfig
   * - ReplicationInstance
   * - ReplicationSubnetGroup
   * - ReplicationTask
   * - ReplicationTaskAssessmentRun
   * - ReplicationTaskIndividualAssessment
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAddTagsToResource()
   * - .toCreateDataMigration()
   * - .toCreateDataProvider()
   * - .toCreateEndpoint()
   * - .toCreateEventSubscription()
   * - .toCreateInstanceProfile()
   * - .toCreateMigrationProject()
   * - .toCreateReplicationConfig()
   * - .toCreateReplicationInstance()
   * - .toCreateReplicationSubnetGroup()
   * - .toCreateReplicationTask()
   * - .toDescribeReplicationInstanceTaskLogs()
   * - .toImportCertificate()
   * - .toRemoveTagsFromResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request for AssessmentRun
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_assessment-run-tag___TagKey_
   *
   * Applies to resource types:
   * - ReplicationTaskAssessmentRun
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAssessmentRunTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`assessment-run-tag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request for Certificate
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice--dms_cert-tag___TagKey_
   *
   * Applies to resource types:
   * - Certificate
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCertTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`cert-tag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request for DataMigration
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice--dms_data-migration-tag___TagKey_
   *
   * Applies to resource types:
   * - DataMigration
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDataMigrationTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`data-migration-tag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request for DataProvider
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice--dms_dp-tag___TagKey_
   *
   * Applies to resource types:
   * - DataProvider
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDataProviderTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`data-provider-tag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request for Endpoint
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_endpoint-tag___TagKey_
   *
   * Applies to resource types:
   * - Endpoint
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEndpointTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`endpoint-tag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request for EventSubscription
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_es-tag___TagKey_
   *
   * Applies to resource types:
   * - EventSubscription
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEsTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`es-tag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request for IndividualAssessment
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_individual-assessment-tag___TagKey_
   *
   * Applies to resource types:
   * - ReplicationTaskIndividualAssessment
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIndividualAssessmentTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`individual-assessment-tag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request for InstanceProfile
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice--dms_ip-tag___TagKey_
   *
   * Applies to resource types:
   * - InstanceProfile
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstanceProfileTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`instance-profile-tag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request for MigrationProject
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice--dms_mp-tag___TagKey_
   *
   * Applies to resource types:
   * - MigrationProject
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMigrationProjectTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`migration-project-tag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request for ReplicationInstance
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_rep-tag___TagKey_
   *
   * Applies to resource types:
   * - ReplicationInstance
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRepTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`rep-tag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request for ReplicationConfig
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_replication-config-tag___TagKey_
   *
   * Applies to resource types:
   * - ReplicationConfig
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReplicationConfigTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`replication-config-tag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the given request
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_req-tag___TagKey_
   *
   * Applies to actions:
   * - .toAddTagsToResource()
   * - .toCreateDataMigration()
   * - .toCreateDataProvider()
   * - .toCreateEndpoint()
   * - .toCreateEventSubscription()
   * - .toCreateInstanceProfile()
   * - .toCreateMigrationProject()
   * - .toCreateReplicationConfig()
   * - .toCreateReplicationInstance()
   * - .toCreateReplicationSubnetGroup()
   * - .toCreateReplicationTask()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReqTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`req-tag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request for ReplicationSubnetGroup
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_subgrp-tag___TagKey_
   *
   * Applies to resource types:
   * - ReplicationSubnetGroup
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubgrpTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`subgrp-tag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request for ReplicationTask
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_task-tag___TagKey_
   *
   * Applies to resource types:
   * - ReplicationTask
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTaskTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`task-tag/${ tagKey }`, value, operator ?? 'StringLike');
  }
}
