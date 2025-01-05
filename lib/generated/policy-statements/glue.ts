import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [glue](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsglue.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Glue extends PolicyStatement {
  public servicePrefix = 'glue';

  /**
   * Statement provider for service [glue](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsglue.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to Glue to continuously validate that the target Arn can receive data replicated from the source ARN
   *
   * Access Level: Write
   */
  public toAuthorizeInboundIntegration() {
    return this.to('AuthorizeInboundIntegration');
  }

  /**
   * Grants permission to create one or more partitions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchCreatePartition
   */
  public toBatchCreatePartition() {
    return this.to('BatchCreatePartition');
  }

  /**
   * Grants permission to delete one or more connections
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-BatchDeleteConnection
   */
  public toBatchDeleteConnection() {
    return this.to('BatchDeleteConnection');
  }

  /**
   * Grants permission to delete one or more partitions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchDeletePartition
   */
  public toBatchDeletePartition() {
    return this.to('BatchDeletePartition');
  }

  /**
   * Grants permission to delete one or more tables
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-BatchDeleteTable
   */
  public toBatchDeleteTable() {
    return this.to('BatchDeleteTable');
  }

  /**
   * Grants permission to delete one or more versions of a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTableVersion
   */
  public toBatchDeleteTableVersion() {
    return this.to('BatchDeleteTableVersion');
  }

  /**
   * Grants permission to retrieve one or more blueprints
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-BatchGetBlueprints
   */
  public toBatchGetBlueprints() {
    return this.to('BatchGetBlueprints');
  }

  /**
   * Grants permission to retrieve one or more crawlers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-BatchGetCrawlers
   */
  public toBatchGetCrawlers() {
    return this.to('BatchGetCrawlers');
  }

  /**
   * Grants permission to retrieve one or more Custom Entity Types
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-sensitive-data-api.html#aws-glue-api-sensitive-data-api-BatchGetCustomEntityTypes
   */
  public toBatchGetCustomEntityTypes() {
    return this.to('BatchGetCustomEntityTypes');
  }

  /**
   * Grants permission to retrieve one or more development endpoints
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-BatchGetDevEndpoints
   */
  public toBatchGetDevEndpoints() {
    return this.to('BatchGetDevEndpoints');
  }

  /**
   * Grants permission to retrieve one or more jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-BatchGetJobs
   */
  public toBatchGetJobs() {
    return this.to('BatchGetJobs');
  }

  /**
   * Grants permission to retrieve one or more partitions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchGetPartition
   */
  public toBatchGetPartition() {
    return this.to('BatchGetPartition');
  }

  /**
   * Grants permission to batch get stage files for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toBatchGetStageFiles() {
    return this.to('BatchGetStageFiles');
  }

  /**
   * Grants permission to return the configuration for the specified table optimizers
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - glue:GetTable
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-table-optimizers.html#aws-glue-api-table-optimizers-BatchGetTableOptimizer
   */
  public toBatchGetTableOptimizer() {
    return this.to('BatchGetTableOptimizer');
  }

  /**
   * Grants permission to retrieve one or more triggers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-BatchGetTriggers
   */
  public toBatchGetTriggers() {
    return this.to('BatchGetTriggers');
  }

  /**
   * Grants permission to retrieve one or more workflows
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-BatchGetWorkflows
   */
  public toBatchGetWorkflows() {
    return this.to('BatchGetWorkflows');
  }

  /**
   * Grants permission to stop one or more job runs for a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-BatchStopStartJobRun
   */
  public toBatchStopJobRun() {
    return this.to('BatchStopJobRun');
  }

  /**
   * Grants permission to update one or more partitions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchUpdatePartition
   */
  public toBatchUpdatePartition() {
    return this.to('BatchUpdatePartition');
  }

  /**
   * Grants permission to stop a running Data Quality rule recommendation run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-CancelDataQualityRuleRecommendationRun
   */
  public toCancelDataQualityRuleRecommendationRun() {
    return this.to('CancelDataQualityRuleRecommendationRun');
  }

  /**
   * Grants permission to stop a running Data Quality ruleset evaluation run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-CancelDataQualityRulesetEvaluationRun
   */
  public toCancelDataQualityRulesetEvaluationRun() {
    return this.to('CancelDataQualityRulesetEvaluationRun');
  }

  /**
   * Grants permission to stop a running ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-CancelMLTaskRun
   */
  public toCancelMLTaskRun() {
    return this.to('CancelMLTaskRun');
  }

  /**
   * Grants permission to cancel a statement in an interactive session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-CancelStatement
   */
  public toCancelStatement() {
    return this.to('CancelStatement');
  }

  /**
   * Grants permission to retrieve a check the validity of schema version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-CheckSchemaVersionValidity
   */
  public toCheckSchemaVersionValidity() {
    return this.to('CheckSchemaVersionValidity');
  }

  /**
   * Grants permission to create a blueprint
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-CreateBlueprint
   */
  public toCreateBlueprint() {
    return this.to('CreateBlueprint');
  }

  /**
   * Grants permission to create a catalog
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog.html
   */
  public toCreateCatalog() {
    return this.to('CreateCatalog');
  }

  /**
   * Grants permission to create a classifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-CreateClassifier
   */
  public toCreateClassifier() {
    return this.to('CreateClassifier');
  }

  /**
   * Grants permission to create settings for a column statistics task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-CreateColumnStatisticsTaskSettings
   */
  public toCreateColumnStatisticsTaskSettings() {
    return this.to('CreateColumnStatisticsTaskSettings');
  }

  /**
   * Grants permission to create a connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-CreateConnection
   */
  public toCreateConnection() {
    return this.to('CreateConnection');
  }

  /**
   * Grants permission to create a crawler
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-CreateCrawler
   */
  public toCreateCrawler() {
    return this.to('CreateCrawler');
  }

  /**
   * Grants permission to create a Custom Entity Type
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-sensitive-data-api.html#aws-glue-api-sensitive-data-api-CreateCustomEntityType
   */
  public toCreateCustomEntityType() {
    return this.to('CreateCustomEntityType');
  }

  /**
   * Grants permission to create a Data Quality ruleset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-CreateDataQualityRuleset
   */
  public toCreateDataQualityRuleset() {
    return this.to('CreateDataQualityRuleset');
  }

  /**
   * Grants permission to create a database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-CreateDatabase
   */
  public toCreateDatabase() {
    return this.to('CreateDatabase');
  }

  /**
   * Grants permission to create a development endpoint
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-CreateDevEndpoint
   */
  public toCreateDevEndpoint() {
    return this.to('CreateDevEndpoint');
  }

  /**
   * Grants permission to the source principal to create an inbound integration for data to be replicated from the source into the target
   *
   * Access Level: Write
   */
  public toCreateInboundIntegration() {
    return this.to('CreateInboundIntegration');
  }

  /**
   * Grants permission to create an integration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - kms:CreateGrant
   * - kms:DescribeKey
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-integrations.html#aws-glue-api-integrations-CreateIntegration
   */
  public toCreateIntegration() {
    return this.to('CreateIntegration');
  }

  /**
   * Grants permission to create integration resource property
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-integrations.html#aws-glue-api-integrations-CreateIntegrationResourceProperty
   */
  public toCreateIntegrationResourceProperty() {
    return this.to('CreateIntegrationResourceProperty');
  }

  /**
   * Grants permission to create integration table properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-integrations.html#aws-glue-api-integrations-CreateIntegrationTableProperties
   */
  public toCreateIntegrationTableProperties() {
    return this.to('CreateIntegrationTableProperties');
  }

  /**
   * Grants permission to create a job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVpcIds()
   * - .ifSubnetIds()
   * - .ifSecurityGroupIds()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-CreateJob
   */
  public toCreateJob() {
    return this.to('CreateJob');
  }

  /**
   * Grants permission to create an ML Transform
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-CreateMLTransform
   */
  public toCreateMLTransform() {
    return this.to('CreateMLTransform');
  }

  /**
   * Grants permission to create a partition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-CreatePartition
   */
  public toCreatePartition() {
    return this.to('CreatePartition');
  }

  /**
   * Grants permission to create a specified partition index in an existing table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-CreatePartitionIndex
   */
  public toCreatePartitionIndex() {
    return this.to('CreatePartitionIndex');
  }

  /**
   * Grants permission to create a new schema registry
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-CreateRegistry
   */
  public toCreateRegistry() {
    return this.to('CreateRegistry');
  }

  /**
   * Grants permission to create a new schema container
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-CreateSchema
   */
  public toCreateSchema() {
    return this.to('CreateSchema');
  }

  /**
   * Grants permission to create a script
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-CreateScript
   */
  public toCreateScript() {
    return this.to('CreateScript');
  }

  /**
   * Grants permission to create a security configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-CreateSecurityConfiguration
   */
  public toCreateSecurityConfiguration() {
    return this.to('CreateSecurityConfiguration');
  }

  /**
   * Grants permission to create an interactive session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVpcIds()
   * - .ifSubnetIds()
   * - .ifSecurityGroupIds()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-api-interactive-sessions-CreateSession
   */
  public toCreateSession() {
    return this.to('CreateSession');
  }

  /**
   * Grants permission to create a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-CreateTable
   */
  public toCreateTable() {
    return this.to('CreateTable');
  }

  /**
   * Grants permission to create a new table optimizer for a specific function. Compaction is the only currently supported optimizer type
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - glue:GetTable
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-table-optimizers.html#aws-glue-api-table-optimizers-CreateTableOptimizer
   */
  public toCreateTableOptimizer() {
    return this.to('CreateTableOptimizer');
  }

  /**
   * Grants permission to create a trigger
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-CreateTrigger
   */
  public toCreateTrigger() {
    return this.to('CreateTrigger');
  }

  /**
   * Grants permission to create a usage profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-usage-profiles.html#aws-glue-api-usage-profiles-CreateUsageProfile
   */
  public toCreateUsageProfile() {
    return this.to('CreateUsageProfile');
  }

  /**
   * Grants permission to create a function definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-CreateUserDefinedFunction
   */
  public toCreateUserDefinedFunction() {
    return this.to('CreateUserDefinedFunction');
  }

  /**
   * Grants permission to create a workflow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-CreateWorkflow
   */
  public toCreateWorkflow() {
    return this.to('CreateWorkflow');
  }

  /**
   * Grants permission to delete a blueprint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-DeleteBlueprint
   */
  public toDeleteBlueprint() {
    return this.to('DeleteBlueprint');
  }

  /**
   * Grants permission to delete a catalog
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog.html
   */
  public toDeleteCatalog() {
    return this.to('DeleteCatalog');
  }

  /**
   * Grants permission to delete a classifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-DeleteClassifier
   */
  public toDeleteClassifier() {
    return this.to('DeleteClassifier');
  }

  /**
   * Grants permission to delete the partition column statistics of a column
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-DeleteColumnStatisticsForPartition
   */
  public toDeleteColumnStatisticsForPartition() {
    return this.to('DeleteColumnStatisticsForPartition');
  }

  /**
   * Grants permission to delete the table statistics of columns
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteColumnStatisticsForTable
   */
  public toDeleteColumnStatisticsForTable() {
    return this.to('DeleteColumnStatisticsForTable');
  }

  /**
   * Grants permission to delete settings for a column statistics task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-DeleteColumnStatisticsTaskSettings
   */
  public toDeleteColumnStatisticsTaskSettings() {
    return this.to('DeleteColumnStatisticsTaskSettings');
  }

  /**
   * Grants permission to delete a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-DeleteConnection
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to delete a crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-DeleteCrawler
   */
  public toDeleteCrawler() {
    return this.to('DeleteCrawler');
  }

  /**
   * Grants permission to delete a Custom Entity Type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-sensitive-data-api.html#aws-glue-api-sensitive-data-api-DeleteCustomEntityType
   */
  public toDeleteCustomEntityType() {
    return this.to('DeleteCustomEntityType');
  }

  /**
   * Grants permission to delete a Data Quality ruleset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-DeleteDataQualityRuleset
   */
  public toDeleteDataQualityRuleset() {
    return this.to('DeleteDataQualityRuleset');
  }

  /**
   * Grants permission to delete a database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-DeleteDatabase
   */
  public toDeleteDatabase() {
    return this.to('DeleteDatabase');
  }

  /**
   * Grants permission to delete a development endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-DeleteDevEndpoint
   */
  public toDeleteDevEndpoint() {
    return this.to('DeleteDevEndpoint');
  }

  /**
   * Grants permission to delete an integration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-integrations.html#aws-glue-api-integrations-DeleteIntegration
   */
  public toDeleteIntegration() {
    return this.to('DeleteIntegration');
  }

  /**
   * Grants permission to delete integration table properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-integrations.html#aws-glue-api-integrations-DeleteIntegrationTableProperties
   */
  public toDeleteIntegrationTableProperties() {
    return this.to('DeleteIntegrationTableProperties');
  }

  /**
   * Grants permission to delete a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-DeleteJob
   */
  public toDeleteJob() {
    return this.to('DeleteJob');
  }

  /**
   * Grants permission to delete an ML Transform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-DeleteMLTransform
   */
  public toDeleteMLTransform() {
    return this.to('DeleteMLTransform');
  }

  /**
   * Grants permission to delete a partition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-DeletePartition
   */
  public toDeletePartition() {
    return this.to('DeletePartition');
  }

  /**
   * Grants permission to delete a specified partition index from an existing table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeletePartitionIndex
   */
  public toDeletePartitionIndex() {
    return this.to('DeletePartitionIndex');
  }

  /**
   * Grants permission to delete a schema registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-DeleteRegistry
   */
  public toDeleteRegistry() {
    return this.to('DeleteRegistry');
  }

  /**
   * Grants permission to delete a resource policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-DeleteResourcePolicy
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a schema container
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-DeleteSchema
   */
  public toDeleteSchema() {
    return this.to('DeleteSchema');
  }

  /**
   * Grants permission to delete a range of schema versions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-DeleteSchemaVersions
   */
  public toDeleteSchemaVersions() {
    return this.to('DeleteSchemaVersions');
  }

  /**
   * Grants permission to delete a security configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-DeleteSecurityConfiguration
   */
  public toDeleteSecurityConfiguration() {
    return this.to('DeleteSecurityConfiguration');
  }

  /**
   * Grants permission to delete an interactive session after stopping the session if not already stopped
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-DeleteSession
   */
  public toDeleteSession() {
    return this.to('DeleteSession');
  }

  /**
   * Grants permission to delete a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTable
   */
  public toDeleteTable() {
    return this.to('DeleteTable');
  }

  /**
   * Grants permission to delete an optimizer and all associated metadata for a table. The optimization will no longer be performed on the table
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - glue:GetTable
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-table-optimizers.html#aws-glue-api-table-optimizers-DeleteTableOptimizer
   */
  public toDeleteTableOptimizer() {
    return this.to('DeleteTableOptimizer');
  }

  /**
   * Grants permission to delete a version of a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTableVersion
   */
  public toDeleteTableVersion() {
    return this.to('DeleteTableVersion');
  }

  /**
   * Grants permission to delete a trigger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-DeleteTrigger
   */
  public toDeleteTrigger() {
    return this.to('DeleteTrigger');
  }

  /**
   * Grants permission to delete a usage profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-usage-profiles.html#aws-glue-api-usage-profiles-DeleteUsageProfile
   */
  public toDeleteUsageProfile() {
    return this.to('DeleteUsageProfile');
  }

  /**
   * Grants permission to delete a function definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-DeleteUserDefinedFunction
   */
  public toDeleteUserDefinedFunction() {
    return this.to('DeleteUserDefinedFunction');
  }

  /**
   * Grants permission to delete a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-DeleteWorkflow
   */
  public toDeleteWorkflow() {
    return this.to('DeleteWorkflow');
  }

  /**
   * Grants permission to terminate Glue Studio Notebook session
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations
   */
  public toDeregisterDataPreview() {
    return this.to('DeregisterDataPreview');
  }

  /**
   * Grants permission to describe connection type in glue studio
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-connections.html#connection-type-permissions-operations
   */
  public toDescribeConnectionType() {
    return this.to('DescribeConnectionType');
  }

  /**
   * Grants permission to describe entity in glue studio
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-connections.html#connection-type-permissions-operations
   */
  public toDescribeEntity() {
    return this.to('DescribeEntity');
  }

  /**
   * Grants permission to list the inbound integrations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-integrations.html#aws-glue-api-integrations-DescribeInboundIntegrations
   */
  public toDescribeInboundIntegrations() {
    return this.to('DescribeInboundIntegrations');
  }

  /**
   * Grants permission to describe zero-ETL integrations
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-integrations.html#aws-glue-api-integrations-DescribeIntegrations
   */
  public toDescribeIntegrations() {
    return this.to('DescribeIntegrations');
  }

  /**
   * Grants permission to retrieve a blueprint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetBlueprint
   */
  public toGetBlueprint() {
    return this.to('GetBlueprint');
  }

  /**
   * Grants permission to retrieve a blueprint run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetBlueprintRun
   */
  public toGetBlueprintRun() {
    return this.to('GetBlueprintRun');
  }

  /**
   * Grants permission to retrieve all runs of a blueprint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetBlueprintRuns
   */
  public toGetBlueprintRuns() {
    return this.to('GetBlueprintRuns');
  }

  /**
   * Grants permission to retrieve a catalog
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifEnabledForRedshiftAutoDiscovery()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog.html
   */
  public toGetCatalog() {
    return this.to('GetCatalog');
  }

  /**
   * Grants permission to retrieve the catalog import status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-migration.html#aws-glue-api-catalog-migration-GetCatalogImportStatus
   */
  public toGetCatalogImportStatus() {
    return this.to('GetCatalogImportStatus');
  }

  /**
   * Grants permission to retrieve all catalogs
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifEnabledForRedshiftAutoDiscovery()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog.html
   */
  public toGetCatalogs() {
    return this.to('GetCatalogs');
  }

  /**
   * Grants permission to retrieve a classifier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-GetClassifier
   */
  public toGetClassifier() {
    return this.to('GetClassifier');
  }

  /**
   * Grants permission to list all classifiers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-GetClassifiers
   */
  public toGetClassifiers() {
    return this.to('GetClassifiers');
  }

  /**
   * Grants permission to retrieve partition statistics of columns
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetColumnStatisticsForPartition
   */
  public toGetColumnStatisticsForPartition() {
    return this.to('GetColumnStatisticsForPartition');
  }

  /**
   * Grants permission to retrieve table statistics of columns
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetColumnStatisticsForTable
   */
  public toGetColumnStatisticsForTable() {
    return this.to('GetColumnStatisticsForTable');
  }

  /**
   * Grants permission to retrieve Column Statistics run information for the table based on run-id
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-GetColumnStatisticsTaskRun
   */
  public toGetColumnStatisticsTaskRun() {
    return this.to('GetColumnStatisticsTaskRun');
  }

  /**
   * Grants permission to retrieve Column Statistics run information for the table based on run-ids
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-GetColumnStatisticsTaskRuns
   */
  public toGetColumnStatisticsTaskRuns() {
    return this.to('GetColumnStatisticsTaskRuns');
  }

  /**
   * Grants permission to retrieve settings for a column statistics task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-GetColumnStatisticsTaskSettings
   */
  public toGetColumnStatisticsTaskSettings() {
    return this.to('GetColumnStatisticsTaskSettings');
  }

  /**
   * Grants permission to get generated response for a completion request in Glue from AWS Q
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api.html#
   */
  public toGetCompletion() {
    return this.to('GetCompletion');
  }

  /**
   * Grants permission to retrieve a connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-GetConnection
   */
  public toGetConnection() {
    return this.to('GetConnection');
  }

  /**
   * Grants permission to retrieve a list of connections
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-GetConnections
   */
  public toGetConnections() {
    return this.to('GetConnections');
  }

  /**
   * Grants permission to retrieve a crawler
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawler
   */
  public toGetCrawler() {
    return this.to('GetCrawler');
  }

  /**
   * Grants permission to retrieve metrics about crawlers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawlerMetrics
   */
  public toGetCrawlerMetrics() {
    return this.to('GetCrawlerMetrics');
  }

  /**
   * Grants permission to retrieve all crawlers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawlers
   */
  public toGetCrawlers() {
    return this.to('GetCrawlers');
  }

  /**
   * Grants permission to read a Custom Entity Type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-sensitive-data-api.html#aws-glue-api-sensitive-data-api-GetCustomEntityType
   */
  public toGetCustomEntityType() {
    return this.to('GetCustomEntityType');
  }

  /**
   * Grants permission to generate presigned url for accessing spark live UI
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html
   */
  public toGetDashboardUrl() {
    return this.to('GetDashboardUrl');
  }

  /**
   * Grants permission to retrieve catalog encryption settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetDataCatalogEncryptionSettings
   */
  public toGetDataCatalogEncryptionSettings() {
    return this.to('GetDataCatalogEncryptionSettings');
  }

  /**
   * Grants permission to get Data Preview Statement
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations
   */
  public toGetDataPreviewStatement() {
    return this.to('GetDataPreviewStatement');
  }

  /**
   * Grants permission to retrieve the training status of the prediction model for a statistic
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-GetDataQualityModel
   */
  public toGetDataQualityModel() {
    return this.to('GetDataQualityModel');
  }

  /**
   * Grants permission to retrieve the predictions for a statistic from the latest model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-GetDataQualityModelResult
   */
  public toGetDataQualityModelResult() {
    return this.to('GetDataQualityModelResult');
  }

  /**
   * Grants permission to retrieve a Data Quality result
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-GetDataQualityResult
   */
  public toGetDataQualityResult() {
    return this.to('GetDataQualityResult');
  }

  /**
   * Grants permission to retrieve a Data Quality rule recommendation run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-GetDataQualityRuleRecommendationRun
   */
  public toGetDataQualityRuleRecommendationRun() {
    return this.to('GetDataQualityRuleRecommendationRun');
  }

  /**
   * Grants permission to retrieve a Data Quality ruleset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-GetDataQualityRuleset
   */
  public toGetDataQualityRuleset() {
    return this.to('GetDataQualityRuleset');
  }

  /**
   * Grants permission to retrieve a Data Quality rule recommendation run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-GetDataQualityRulesetEvaluationRun
   */
  public toGetDataQualityRulesetEvaluationRun() {
    return this.to('GetDataQualityRulesetEvaluationRun');
  }

  /**
   * Grants permission to retrieve a database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-GetDatabase
   */
  public toGetDatabase() {
    return this.to('GetDatabase');
  }

  /**
   * Grants permission to retrieve all databases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-GetDatabases
   */
  public toGetDatabases() {
    return this.to('GetDatabases');
  }

  /**
   * Grants permission to transform a script into a directed acyclic graph (DAG)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetDataflowGraph
   */
  public toGetDataflowGraph() {
    return this.to('GetDataflowGraph');
  }

  /**
   * Grants permission to retrieve a development endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-GetDevEndpoint
   */
  public toGetDevEndpoint() {
    return this.to('GetDevEndpoint');
  }

  /**
   * Grants permission to retrieve all development endpoints
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-GetDevEndpoints
   */
  public toGetDevEndpoints() {
    return this.to('GetDevEndpoints');
  }

  /**
   * Grants permission to preview entity records in glue
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-connections.html#connection-type-permissions-operations
   */
  public toGetEntityRecords() {
    return this.to('GetEntityRecords');
  }

  /**
   * Grants permission to get environment details for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toGetEnvironment() {
    return this.to('GetEnvironment');
  }

  /**
   * Grants permission to get executors for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toGetExecutors() {
    return this.to('GetExecutors');
  }

  /**
   * Grants permission to get executor threads for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toGetExecutorsThreads() {
    return this.to('GetExecutorsThreads');
  }

  /**
   * Transforms a directed acyclic graph (DAG) into code
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetGeneratedCode
   */
  public toGetGeneratedCode() {
    return this.to('GetGeneratedCode');
  }

  /**
   * Grants permission to retrieve the integration resource property
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-integrations.html#aws-glue-api-integrations-GetIntegrationResourceProperty
   */
  public toGetIntegrationResourceProperty() {
    return this.to('GetIntegrationResourceProperty');
  }

  /**
   * Grants permission to retrieve the integration table properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-integrations.html#aws-glue-api-integrations-GetIntegrationTableProperties
   */
  public toGetIntegrationTableProperties() {
    return this.to('GetIntegrationTableProperties');
  }

  /**
   * Grants permission to retrieve a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-GetJob
   */
  public toGetJob() {
    return this.to('GetJob');
  }

  /**
   * Grants permission to retrieve a job bookmark
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-job-GetJobBookmark
   */
  public toGetJobBookmark() {
    return this.to('GetJobBookmark');
  }

  /**
   * Grants permission to retrieve a job run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-GetJobRun
   */
  public toGetJobRun() {
    return this.to('GetJobRun');
  }

  /**
   * Grants permission to retrieve all job runs of a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-GetJobRuns
   */
  public toGetJobRuns() {
    return this.to('GetJobRuns');
  }

  /**
   * Grants permission to retrieve an upgrade analysis for a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-upgrade-analysis.html#aws-glue-api-upgrade-analysis-GetJobUpgradeAnalysis
   */
  public toGetJobUpgradeAnalysis() {
    return this.to('GetJobUpgradeAnalysis');
  }

  /**
   * Grants permission to retrieve all current jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-GetJobs
   */
  public toGetJobs() {
    return this.to('GetJobs');
  }

  /**
   * Grants permission to get log parsing status for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toGetLogParsingStatus() {
    return this.to('GetLogParsingStatus');
  }

  /**
   * Grants permission to retrieve an ML Task Run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTaskRun
   */
  public toGetMLTaskRun() {
    return this.to('GetMLTaskRun');
  }

  /**
   * Grants permission to retrieve all ML Task Runs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTaskRuns
   */
  public toGetMLTaskRuns() {
    return this.to('GetMLTaskRuns');
  }

  /**
   * Grants permission to retrieve an ML Transform
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTransform
   */
  public toGetMLTransform() {
    return this.to('GetMLTransform');
  }

  /**
   * Grants permission to retrieve all ML Transforms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTransforms
   */
  public toGetMLTransforms() {
    return this.to('GetMLTransforms');
  }

  /**
   * Grants permission to create a mapping
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetMapping
   */
  public toGetMapping() {
    return this.to('GetMapping');
  }

  /**
   * Grants permission to retrieve Glue Studio Notebooks session status
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations
   */
  public toGetNotebookInstanceStatus() {
    return this.to('GetNotebookInstanceStatus');
  }

  /**
   * Grants permission to retrieve a partition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetPartition
   */
  public toGetPartition() {
    return this.to('GetPartition');
  }

  /**
   * Grants permission to retrieve partition indexes for a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetPartitionIndexes
   */
  public toGetPartitionIndexes() {
    return this.to('GetPartitionIndexes');
  }

  /**
   * Grants permission to retrieve the partitions of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetPartitions
   */
  public toGetPartitions() {
    return this.to('GetPartitions');
  }

  /**
   * Grants permission to retrieve a mapping for a script
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetPlan
   */
  public toGetPlan() {
    return this.to('GetPlan');
  }

  /**
   * Grants permission to get queries for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toGetQueries() {
    return this.to('GetQueries');
  }

  /**
   * Grants permission to get a specific query for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toGetQuery() {
    return this.to('GetQuery');
  }

  /**
   * Grants permission to get the result of a Data Preparation Recipe statement
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/ug/setting-up.html#getting-started-min-privs
   */
  public toGetRecipeAction() {
    return this.to('GetRecipeAction');
  }

  /**
   * Grants permission to retrieve a schema registry
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetRegistry
   */
  public toGetRegistry() {
    return this.to('GetRegistry');
  }

  /**
   * Grants permission to retrieve resource policies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetResourcePolicies
   */
  public toGetResourcePolicies() {
    return this.to('GetResourcePolicies');
  }

  /**
   * Grants permission to retrieve a resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetResourcePolicy
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to retrieve a schema container
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchema
   */
  public toGetSchema() {
    return this.to('GetSchema');
  }

  /**
   * Grants permission to retrieve a schema version based on schema definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchemaByDefinition
   */
  public toGetSchemaByDefinition() {
    return this.to('GetSchemaByDefinition');
  }

  /**
   * Grants permission to retrieve a schema version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchemaVersion
   */
  public toGetSchemaVersion() {
    return this.to('GetSchemaVersion');
  }

  /**
   * Grants permission to compare two schema versions in schema registry
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchemaVersionsDiff
   */
  public toGetSchemaVersionsDiff() {
    return this.to('GetSchemaVersionsDiff');
  }

  /**
   * Grants permission to retrieve a security configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetSecurityConfiguration
   */
  public toGetSecurityConfiguration() {
    return this.to('GetSecurityConfiguration');
  }

  /**
   * Grants permission to retrieve one or more security configurations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetSecurityConfigurations
   */
  public toGetSecurityConfigurations() {
    return this.to('GetSecurityConfigurations');
  }

  /**
   * Grants permission to retrieve an interactive session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-GetSession
   */
  public toGetSession() {
    return this.to('GetSession');
  }

  /**
   * Grants permission to get a stage for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toGetStage() {
    return this.to('GetStage');
  }

  /**
   * Grants permission to get a stage attempt for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toGetStageAttempt() {
    return this.to('GetStageAttempt');
  }

  /**
   * Grants permission to get the task list for a stage attempt for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toGetStageAttemptTaskList() {
    return this.to('GetStageAttemptTaskList');
  }

  /**
   * Grants permission to get the task summary for a stage attempt for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toGetStageAttemptTaskSummary() {
    return this.to('GetStageAttemptTaskSummary');
  }

  /**
   * Grants permission to get stage files for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toGetStageFiles() {
    return this.to('GetStageFiles');
  }

  /**
   * Grants permission to get stages for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toGetStages() {
    return this.to('GetStages');
  }

  /**
   * Grants permission to retrieve result and information about a statement in an interactive session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-GetStatement
   */
  public toGetStatement() {
    return this.to('GetStatement');
  }

  /**
   * Grants permission to get storage details for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toGetStorage() {
    return this.to('GetStorage');
  }

  /**
   * Grants permission to get storage unit details for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toGetStorageUnit() {
    return this.to('GetStorageUnit');
  }

  /**
   * Grants permission to retrieve a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTable
   */
  public toGetTable() {
    return this.to('GetTable');
  }

  /**
   * Grants permission to return the configuration of all optimizers associated with a specified table
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - glue:GetTable
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-table-optimizers.html#aws-glue-api-table-optimizers-GetTableOptimizer
   */
  public toGetTableOptimizer() {
    return this.to('GetTableOptimizer');
  }

  /**
   * Grants permission to retrieve a version of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTableVersion
   */
  public toGetTableVersion() {
    return this.to('GetTableVersion');
  }

  /**
   * Grants permission to retrieve a list of versions of a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTableVersions
   */
  public toGetTableVersions() {
    return this.to('GetTableVersions');
  }

  /**
   * Grants permission to retrieve the tables in a database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTables
   */
  public toGetTables() {
    return this.to('GetTables');
  }

  /**
   * Grants permission to retrieve all tags associated with a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-UntagResource
   */
  public toGetTags() {
    return this.to('GetTags');
  }

  /**
   * Grants permission to retrieve a trigger
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-GetTrigger
   */
  public toGetTrigger() {
    return this.to('GetTrigger');
  }

  /**
   * Grants permission to retrieve the triggers associated with a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-GetTriggers
   */
  public toGetTriggers() {
    return this.to('GetTriggers');
  }

  /**
   * Grants permission to retrieve a usage profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-usage-profiles.html#aws-glue-api-usage-profiles-GetUsageProfile
   */
  public toGetUsageProfile() {
    return this.to('GetUsageProfile');
  }

  /**
   * Grants permission to retrieve a function definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-GetUserDefinedFunction
   */
  public toGetUserDefinedFunction() {
    return this.to('GetUserDefinedFunction');
  }

  /**
   * Grants permission to retrieve multiple function definitions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-GetUserDefinedFunctions
   */
  public toGetUserDefinedFunctions() {
    return this.to('GetUserDefinedFunctions');
  }

  /**
   * Grants permission to retrieve a workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflow
   */
  public toGetWorkflow() {
    return this.to('GetWorkflow');
  }

  /**
   * Grants permission to retrieve a workflow run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRun
   */
  public toGetWorkflowRun() {
    return this.to('GetWorkflowRun');
  }

  /**
   * Grants permission to retrieve workflow run properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRunProperties
   */
  public toGetWorkflowRunProperties() {
    return this.to('GetWorkflowRunProperties');
  }

  /**
   * Grants permission to retrieve all runs of a workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRuns
   */
  public toGetWorkflowRuns() {
    return this.to('GetWorkflowRuns');
  }

  /**
   * Grants permission to access Glue Studio Notebooks
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations
   */
  public toGlueNotebookAuthorize() {
    return this.to('GlueNotebookAuthorize');
  }

  /**
   * Grants permission to refresh Glue Studio Notebooks credentials
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations
   */
  public toGlueNotebookRefreshCredentials() {
    return this.to('GlueNotebookRefreshCredentials');
  }

  /**
   * Grants permission to import an Athena data catalog into AWS Glue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-migration.html#aws-glue-api-catalog-migration-ImportCatalogToGlue
   */
  public toImportCatalogToGlue() {
    return this.to('ImportCatalogToGlue');
  }

  /**
   * Grants permission to retrieve all blueprints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-ListBlueprints
   */
  public toListBlueprints() {
    return this.to('ListBlueprints');
  }

  /**
   * Grants permission to list all Column Statistics run-ids that have been executed for the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-ListColumnStatisticsTaskRuns
   */
  public toListColumnStatisticsTaskRuns() {
    return this.to('ListColumnStatisticsTaskRuns');
  }

  /**
   * Grants permission to list connection types in glue studio
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-connections.html#connection-type-permissions-operations
   */
  public toListConnectionTypes() {
    return this.to('ListConnectionTypes');
  }

  /**
   * Grants permission to retrieve all crawlers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-ListCrawlers
   */
  public toListCrawlers() {
    return this.to('ListCrawlers');
  }

  /**
   * Grants permission to retrieve crawl run history for a crawler
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-ListCrawls
   */
  public toListCrawls() {
    return this.to('ListCrawls');
  }

  /**
   * Grants permission to retrieve all Custom Entity Types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-sensitive-data-api.html#aws-glue-api-sensitive-data-api-ListGetCustomEntityTypes
   */
  public toListCustomEntityTypes() {
    return this.to('ListCustomEntityTypes');
  }

  /**
   * Grants permission to retrieve all Data Quality results
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-ListDataQualityResults
   */
  public toListDataQualityResults() {
    return this.to('ListDataQualityResults');
  }

  /**
   * Grants permission to retrieve all Data Quality rule recommendation runs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-ListDataQualityRuleRecommendationRuns
   */
  public toListDataQualityRuleRecommendationRuns() {
    return this.to('ListDataQualityRuleRecommendationRuns');
  }

  /**
   * Grants permission to retrieve all Data Quality rule recommendation runs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-ListDataQualityRulesetEvaluationRuns
   */
  public toListDataQualityRulesetEvaluationRuns() {
    return this.to('ListDataQualityRulesetEvaluationRuns');
  }

  /**
   * Grants permission to retrieve a list of Data Quality rulesets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-ListDataQualityRulesets
   */
  public toListDataQualityRulesets() {
    return this.to('ListDataQualityRulesets');
  }

  /**
   * Grants permission to retrieve all development endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-ListDevEndpoints
   */
  public toListDevEndpoints() {
    return this.to('ListDevEndpoints');
  }

  /**
   * Grants permission to list entities in glue studio
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-connections.html#connection-type-permissions-operations
   */
  public toListEntities() {
    return this.to('ListEntities');
  }

  /**
   * Grants permission to list upgrade analyses for a job
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-upgrade-analysis.html#aws-glue-api-upgrade-analysis-ListJobUpgradeAnalyses
   */
  public toListJobUpgradeAnalyses() {
    return this.to('ListJobUpgradeAnalyses');
  }

  /**
   * Grants permission to retrieve all current jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-ListJobs
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * Grants permission to retrieve all ML Transforms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-ListMLTransforms
   */
  public toListMLTransforms() {
    return this.to('ListMLTransforms');
  }

  /**
   * Grants permission to retrieve a list of schema registries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-ListRegistries
   */
  public toListRegistries() {
    return this.to('ListRegistries');
  }

  /**
   * Grants permission to retrieve a list of schema versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-ListSchemaVersions
   */
  public toListSchemaVersions() {
    return this.to('ListSchemaVersions');
  }

  /**
   * Grants permission to retrieve a list of schema containers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-ListSchemas
   */
  public toListSchemas() {
    return this.to('ListSchemas');
  }

  /**
   * Grants permission to retrieve a list of interactive session
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-ListSessions
   */
  public toListSessions() {
    return this.to('ListSessions');
  }

  /**
   * Grants permission to retrieve a list of statements in an interactive session
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-ListStatements
   */
  public toListStatements() {
    return this.to('ListStatements');
  }

  /**
   * Grants permission to list the history of previous optimizer runs for a specific table
   *
   * Access Level: List
   *
   * Dependent actions:
   * - glue:GetTable
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-table-optimizers.html#aws-glue-api-table-optimizers-ListTableOptimizerRuns
   */
  public toListTableOptimizerRuns() {
    return this.to('ListTableOptimizerRuns');
  }

  /**
   * Grants permission to retrieve all triggers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-ListTriggers
   */
  public toListTriggers() {
    return this.to('ListTriggers');
  }

  /**
   * Grants permission to retrieve a list of usage profiles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-usage-profiles.html#aws-glue-api-usage-profiles-ListUsageProfiles
   */
  public toListUsageProfiles() {
    return this.to('ListUsageProfiles');
  }

  /**
   * Grants permission to retrieve all workflows
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-ListWorkflows
   */
  public toListWorkflows() {
    return this.to('ListWorkflows');
  }

  /**
   * Grants permission to modify a zero-ETL integration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-integrations.html#aws-glue-api-integrations-ModifyIntegration
   */
  public toModifyIntegration() {
    return this.to('ModifyIntegration');
  }

  /**
   * Grants permission to notify an event to the event-driven workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/starting-workflow-eventbridge.html
   */
  public toNotifyEvent() {
    return this.to('NotifyEvent');
  }

  /**
   * Grants permission to pass glue connection name in input for APIs that require them
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-CreateConnection
   */
  public toPassConnection() {
    return this.to('PassConnection');
  }

  /**
   * Grants permission to publish Data Quality results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html
   */
  public toPublishDataQuality() {
    return this.to('PublishDataQuality');
  }

  /**
   * Grants permission to update catalog encryption settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-PutDataCatalogEncryptionSettings
   */
  public toPutDataCatalogEncryptionSettings() {
    return this.to('PutDataCatalogEncryptionSettings');
  }

  /**
   * Grants permission to annotate all datapoints for a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-PutDataQualityProfileAnnotation
   */
  public toPutDataQualityProfileAnnotation() {
    return this.to('PutDataQualityProfileAnnotation');
  }

  /**
   * Grants permission to annotate datapoints over time for a specific data quality statistic
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-BatchPutDataQualityStatisticAnnotation
   */
  public toPutDataQualityStatisticAnnotation() {
    return this.to('PutDataQualityStatisticAnnotation');
  }

  /**
   * Grants permission to update a resource policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-PutResourcePolicy
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to add metadata to schema version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-PutSchemaVersionMetadata
   */
  public toPutSchemaVersionMetadata() {
    return this.to('PutSchemaVersionMetadata');
  }

  /**
   * Grants permission to update workflow run properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-PutWorkflowRunProperties
   */
  public toPutWorkflowRunProperties() {
    return this.to('PutWorkflowRunProperties');
  }

  /**
   * Grants permission to fetch metadata for a schema version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-QuerySchemaVersionMetadata
   */
  public toQuerySchemaVersionMetadata() {
    return this.to('QuerySchemaVersionMetadata');
  }

  /**
   * Grants permission to refresh the oauth2 tokens for connection during job execution
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-connections.html#connection-type-permissions-operations
   */
  public toRefreshOAuth2Tokens() {
    return this.to('RefreshOAuth2Tokens');
  }

  /**
   * Grants permission to create a new schema version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-RegisterSchemaVersion
   */
  public toRegisterSchemaVersion() {
    return this.to('RegisterSchemaVersion');
  }

  /**
   * Grants permission to remove metadata from schema version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-RemoveSchemaVersionMetadata
   */
  public toRemoveSchemaVersionMetadata() {
    return this.to('RemoveSchemaVersionMetadata');
  }

  /**
   * Grants permission to request log parsing for SparkUI
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/monitor-spark-ui.html
   */
  public toRequestLogParsing() {
    return this.to('RequestLogParsing');
  }

  /**
   * Grants permission to reset a job bookmark
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-ResetJobBookmark
   */
  public toResetJobBookmark() {
    return this.to('ResetJobBookmark');
  }

  /**
   * Grants permission to resume a workflow run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-ResumeWorkflowRun
   */
  public toResumeWorkflowRun() {
    return this.to('ResumeWorkflowRun');
  }

  /**
   * Grants permission to run Data Preview Statement
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations
   */
  public toRunDataPreviewStatement() {
    return this.to('RunDataPreviewStatement');
  }

  /**
   * Grants permission to run a code or statement in an interactive session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-RunStatement
   */
  public toRunStatement() {
    return this.to('RunStatement');
  }

  /**
   * Grants permission to retrieve the tables in the catalog
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-SearchTables
   */
  public toSearchTables() {
    return this.to('SearchTables');
  }

  /**
   * Grants permission to provide feedback about a glue completion experience in AWS Q
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api.html#
   */
  public toSendFeedback() {
    return this.to('SendFeedback');
  }

  /**
   * Grants permission to execute a Data Preparation Recipe statement in data preview
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/ug/setting-up.html#getting-started-min-privs
   */
  public toSendRecipeAction() {
    return this.to('SendRecipeAction');
  }

  /**
   * Grants permission to start running a blueprint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-StartBlueprintRun
   */
  public toStartBlueprintRun() {
    return this.to('StartBlueprintRun');
  }

  /**
   * Grants permission to start a run for generating Column Statistics for the table
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - glue:GetSecurityConfiguration
   * - glue:GetTable
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-StartColumnStatisticsTaskRun
   */
  public toStartColumnStatisticsTaskRun() {
    return this.to('StartColumnStatisticsTaskRun');
  }

  /**
   * Grants permission to start a column statistics task run schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-StartColumnStatisticsTaskRunSchedule
   */
  public toStartColumnStatisticsTaskRunSchedule() {
    return this.to('StartColumnStatisticsTaskRunSchedule');
  }

  /**
   * Grants permission to create a completion request in Glue for AWS Q experience
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api.html#
   */
  public toStartCompletion() {
    return this.to('StartCompletion');
  }

  /**
   * Grants permission to start a crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-StartCrawler
   */
  public toStartCrawler() {
    return this.to('StartCrawler');
  }

  /**
   * Grants permission to change the schedule state of a crawler to SCHEDULED
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-StartCrawlerSchedule
   */
  public toStartCrawlerSchedule() {
    return this.to('StartCrawlerSchedule');
  }

  /**
   * Grants permission to start a Data Quality rule recommendation run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-StartDataQualityRuleRecommendationRun
   */
  public toStartDataQualityRuleRecommendationRun() {
    return this.to('StartDataQualityRuleRecommendationRun');
  }

  /**
   * Grants permission to start a Data Quality rule recommendation run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-StartDataQualityRulesetEvaluationRun
   */
  public toStartDataQualityRulesetEvaluationRun() {
    return this.to('StartDataQualityRulesetEvaluationRun');
  }

  /**
   * Grants permission to start an Export Labels ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartExportLabelsTaskRun
   */
  public toStartExportLabelsTaskRun() {
    return this.to('StartExportLabelsTaskRun');
  }

  /**
   * Grants permission to start an Import Labels ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartImportLabelsTaskRun
   */
  public toStartImportLabelsTaskRun() {
    return this.to('StartImportLabelsTaskRun');
  }

  /**
   * Grants permission to start running a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-StartJobRun
   */
  public toStartJobRun() {
    return this.to('StartJobRun');
  }

  /**
   * Grants permission to start running upgrade analysis for a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-upgrade-analysis.html#aws-glue-api-upgrade-analysis-StartJobUpgradeAnalysis
   */
  public toStartJobUpgradeAnalysis() {
    return this.to('StartJobUpgradeAnalysis');
  }

  /**
   * Grants permission to start an Evaluation ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartMLEvaluationTaskRun
   */
  public toStartMLEvaluationTaskRun() {
    return this.to('StartMLEvaluationTaskRun');
  }

  /**
   * Grants permission to start a Labeling Set Generation ML Task Run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartMLLabelingSetGenerationTaskRun
   */
  public toStartMLLabelingSetGenerationTaskRun() {
    return this.to('StartMLLabelingSetGenerationTaskRun');
  }

  /**
   * Grants permission to start Glue Studio Notebooks
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations
   */
  public toStartNotebook() {
    return this.to('StartNotebook');
  }

  /**
   * Grants permission to start a trigger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-StartTrigger
   */
  public toStartTrigger() {
    return this.to('StartTrigger');
  }

  /**
   * Grants permission to start running a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-StartWorkflowRun
   */
  public toStartWorkflowRun() {
    return this.to('StartWorkflowRun');
  }

  /**
   * Grants permission to stop execution for Column Statistics run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-StopColumnStatisticsTaskRun
   */
  public toStopColumnStatisticsTaskRun() {
    return this.to('StopColumnStatisticsTaskRun');
  }

  /**
   * Grants permission to stop a column statistics task run schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-StopColumnStatisticsTaskRunSchedule
   */
  public toStopColumnStatisticsTaskRunSchedule() {
    return this.to('StopColumnStatisticsTaskRunSchedule');
  }

  /**
   * Grants permission to stop a running crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-StopCrawler
   */
  public toStopCrawler() {
    return this.to('StopCrawler');
  }

  /**
   * Grants permission to set the schedule state of a crawler to NOT_SCHEDULED
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-StopCrawlerSchedule
   */
  public toStopCrawlerSchedule() {
    return this.to('StopCrawlerSchedule');
  }

  /**
   * Grants permission to stop an on-going upgrade analysis for a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-upgrade-analysis.html#aws-glue-api-upgrade-analysis-StopJobUpgradeAnalysis
   */
  public toStopJobUpgradeAnalysis() {
    return this.to('StopJobUpgradeAnalysis');
  }

  /**
   * Grants permission to stop an interactive session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-interactive-sessions.html#aws-glue-interactive-sessions-StopSession
   */
  public toStopSession() {
    return this.to('StopSession');
  }

  /**
   * Grants permission to stop a trigger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-StopTrigger
   */
  public toStopTrigger() {
    return this.to('StopTrigger');
  }

  /**
   * Grants permission to stop a workflow run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-StopWorkflowRun
   */
  public toStopWorkflowRun() {
    return this.to('StopWorkflowRun');
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-TagResource
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to terminate Glue Studio Notebooks
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/ug/notebook-getting-started.html#create-notebook-permissions-operations
   */
  public toTerminateNotebook() {
    return this.to('TerminateNotebook');
  }

  /**
   * Grants permission to test connection in Glue Studio
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/dg/console-test-connections.html
   */
  public toTestConnection() {
    return this.to('TestConnection');
  }

  /**
   * Grants permission to remove tags associated with a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-UntagResource
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a blueprint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-UpdateBlueprint
   */
  public toUpdateBlueprint() {
    return this.to('UpdateBlueprint');
  }

  /**
   * Grants permission to update a catalog
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog.html
   */
  public toUpdateCatalog() {
    return this.to('UpdateCatalog');
  }

  /**
   * Grants permission to update a classifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-UpdateClassifier
   */
  public toUpdateClassifier() {
    return this.to('UpdateClassifier');
  }

  /**
   * Grants permission to update partition statistics of columns
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-UpdateColumnStatisticsForPartition
   */
  public toUpdateColumnStatisticsForPartition() {
    return this.to('UpdateColumnStatisticsForPartition');
  }

  /**
   * Grants permission to update table statistics of columns
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-UpdateColumnStatisticsForTable
   */
  public toUpdateColumnStatisticsForTable() {
    return this.to('UpdateColumnStatisticsForTable');
  }

  /**
   * Grants permission to update settings for a column statistics task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-column-statistics.html#aws-glue-api-crawler-column-statistics-UpdateColumnStatisticsTaskSettings
   */
  public toUpdateColumnStatisticsTaskSettings() {
    return this.to('UpdateColumnStatisticsTaskSettings');
  }

  /**
   * Grants permission to update a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-UpdateConnection
   */
  public toUpdateConnection() {
    return this.to('UpdateConnection');
  }

  /**
   * Grants permission to update a crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-UpdateCrawler
   */
  public toUpdateCrawler() {
    return this.to('UpdateCrawler');
  }

  /**
   * Grants permission to update the schedule of a crawler
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-UpdateCrawlerSchedule
   */
  public toUpdateCrawlerSchedule() {
    return this.to('UpdateCrawlerSchedule');
  }

  /**
   * Grants permission to update a Data Quality ruleset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-data-quality-api.html#aws-glue-api-data-quality-api-UpdateDataQualityRuleset
   */
  public toUpdateDataQualityRuleset() {
    return this.to('UpdateDataQualityRuleset');
  }

  /**
   * Grants permission to update a database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-UpdateDatabase
   */
  public toUpdateDatabase() {
    return this.to('UpdateDatabase');
  }

  /**
   * Grants permission to update a development endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-UpdateDevEndpoint
   */
  public toUpdateDevEndpoint() {
    return this.to('UpdateDevEndpoint');
  }

  /**
   * Grants permission to update the integration resource property
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-integrations.html#aws-glue-api-integrations-UpdateIntegrationResourceProperty
   */
  public toUpdateIntegrationResourceProperty() {
    return this.to('UpdateIntegrationResourceProperty');
  }

  /**
   * Grants permission to update the integration table properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-integrations.html#aws-glue-api-integrations-UpdateIntegrationTableProperties
   */
  public toUpdateIntegrationTableProperties() {
    return this.to('UpdateIntegrationTableProperties');
  }

  /**
   * Grants permission to update a job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifVpcIds()
   * - .ifSubnetIds()
   * - .ifSecurityGroupIds()
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-UpdateJob
   */
  public toUpdateJob() {
    return this.to('UpdateJob');
  }

  /**
   * Grants permission to update a job from source control provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-UpdateJobFromSourceControl
   */
  public toUpdateJobFromSourceControl() {
    return this.to('UpdateJobFromSourceControl');
  }

  /**
   * Grants permission to update an ML Transform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-UpdateMLTransform
   */
  public toUpdateMLTransform() {
    return this.to('UpdateMLTransform');
  }

  /**
   * Grants permission to update a partition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-UpdatePartition
   */
  public toUpdatePartition() {
    return this.to('UpdatePartition');
  }

  /**
   * Grants permission to update a schema registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-UpdateRegistry
   */
  public toUpdateRegistry() {
    return this.to('UpdateRegistry');
  }

  /**
   * Grants permission to update a schema container
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-UpdateSchema
   */
  public toUpdateSchema() {
    return this.to('UpdateSchema');
  }

  /**
   * Grants permission to update source control provider from a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-UpdateSourceControlFromJob
   */
  public toUpdateSourceControlFromJob() {
    return this.to('UpdateSourceControlFromJob');
  }

  /**
   * Grants permission to update a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-UpdateTable
   */
  public toUpdateTable() {
    return this.to('UpdateTable');
  }

  /**
   * Grants permission to update the configuration for an existing table optimizer
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - glue:GetTable
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-table-optimizers.html#aws-glue-api-table-optimizers-UpdateTableOptimizer
   */
  public toUpdateTableOptimizer() {
    return this.to('UpdateTableOptimizer');
  }

  /**
   * Grants permission to update a trigger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-UpdateTrigger
   */
  public toUpdateTrigger() {
    return this.to('UpdateTrigger');
  }

  /**
   * Grants permission to update a usage profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-usage-profiles.html#aws-glue-api-usage-profiles-UpdateUsageProfile
   */
  public toUpdateUsageProfile() {
    return this.to('UpdateUsageProfile');
  }

  /**
   * Grants permission to update a function definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-UpdateUserDefinedFunction
   */
  public toUpdateUserDefinedFunction() {
    return this.to('UpdateUserDefinedFunction');
  }

  /**
   * Grants permission to update a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-UpdateWorkflow
   */
  public toUpdateWorkflow() {
    return this.to('UpdateWorkflow');
  }

  /**
   * Grants permission to upgrade a job to the latest version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-upgrade-analysis.html#aws-glue-api-upgrade-analysis-UpgradeJob
   */
  public toUpgradeJob() {
    return this.to('UpgradeJob');
  }

  /**
   * Grants permission to use Glue Studio and access its internal APIs
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/glue/latest/ug/setting-up.html#getting-started-min-privs
   */
  public toUseGlueStudio() {
    return this.to('UseGlueStudio');
  }

  /**
   * Grants permission to use an ML Transform from within a Glue ETL Script
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html
   */
  public toUseMLTransforms() {
    return this.to('UseMLTransforms');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AuthorizeInboundIntegration',
      'BatchCreatePartition',
      'BatchDeleteConnection',
      'BatchDeletePartition',
      'BatchDeleteTable',
      'BatchDeleteTableVersion',
      'BatchStopJobRun',
      'BatchUpdatePartition',
      'CancelDataQualityRuleRecommendationRun',
      'CancelDataQualityRulesetEvaluationRun',
      'CancelMLTaskRun',
      'CancelStatement',
      'CreateBlueprint',
      'CreateCatalog',
      'CreateClassifier',
      'CreateColumnStatisticsTaskSettings',
      'CreateConnection',
      'CreateCrawler',
      'CreateCustomEntityType',
      'CreateDataQualityRuleset',
      'CreateDatabase',
      'CreateDevEndpoint',
      'CreateInboundIntegration',
      'CreateIntegration',
      'CreateIntegrationResourceProperty',
      'CreateIntegrationTableProperties',
      'CreateJob',
      'CreateMLTransform',
      'CreatePartition',
      'CreatePartitionIndex',
      'CreateRegistry',
      'CreateSchema',
      'CreateScript',
      'CreateSecurityConfiguration',
      'CreateSession',
      'CreateTable',
      'CreateTableOptimizer',
      'CreateTrigger',
      'CreateUsageProfile',
      'CreateUserDefinedFunction',
      'CreateWorkflow',
      'DeleteBlueprint',
      'DeleteCatalog',
      'DeleteClassifier',
      'DeleteColumnStatisticsForPartition',
      'DeleteColumnStatisticsForTable',
      'DeleteColumnStatisticsTaskSettings',
      'DeleteConnection',
      'DeleteCrawler',
      'DeleteCustomEntityType',
      'DeleteDataQualityRuleset',
      'DeleteDatabase',
      'DeleteDevEndpoint',
      'DeleteIntegration',
      'DeleteIntegrationTableProperties',
      'DeleteJob',
      'DeleteMLTransform',
      'DeletePartition',
      'DeletePartitionIndex',
      'DeleteRegistry',
      'DeleteSchema',
      'DeleteSchemaVersions',
      'DeleteSecurityConfiguration',
      'DeleteSession',
      'DeleteTable',
      'DeleteTableOptimizer',
      'DeleteTableVersion',
      'DeleteTrigger',
      'DeleteUsageProfile',
      'DeleteUserDefinedFunction',
      'DeleteWorkflow',
      'ImportCatalogToGlue',
      'ModifyIntegration',
      'NotifyEvent',
      'PassConnection',
      'PublishDataQuality',
      'PutDataCatalogEncryptionSettings',
      'PutDataQualityProfileAnnotation',
      'PutDataQualityStatisticAnnotation',
      'PutSchemaVersionMetadata',
      'PutWorkflowRunProperties',
      'RegisterSchemaVersion',
      'RemoveSchemaVersionMetadata',
      'ResetJobBookmark',
      'ResumeWorkflowRun',
      'RunStatement',
      'SendFeedback',
      'StartBlueprintRun',
      'StartColumnStatisticsTaskRun',
      'StartColumnStatisticsTaskRunSchedule',
      'StartCompletion',
      'StartCrawler',
      'StartCrawlerSchedule',
      'StartDataQualityRuleRecommendationRun',
      'StartDataQualityRulesetEvaluationRun',
      'StartExportLabelsTaskRun',
      'StartImportLabelsTaskRun',
      'StartJobRun',
      'StartJobUpgradeAnalysis',
      'StartMLEvaluationTaskRun',
      'StartMLLabelingSetGenerationTaskRun',
      'StartTrigger',
      'StartWorkflowRun',
      'StopColumnStatisticsTaskRun',
      'StopColumnStatisticsTaskRunSchedule',
      'StopCrawler',
      'StopCrawlerSchedule',
      'StopJobUpgradeAnalysis',
      'StopSession',
      'StopTrigger',
      'StopWorkflowRun',
      'UpdateBlueprint',
      'UpdateCatalog',
      'UpdateClassifier',
      'UpdateColumnStatisticsForPartition',
      'UpdateColumnStatisticsForTable',
      'UpdateColumnStatisticsTaskSettings',
      'UpdateConnection',
      'UpdateCrawler',
      'UpdateCrawlerSchedule',
      'UpdateDataQualityRuleset',
      'UpdateDatabase',
      'UpdateDevEndpoint',
      'UpdateIntegrationResourceProperty',
      'UpdateIntegrationTableProperties',
      'UpdateJob',
      'UpdateJobFromSourceControl',
      'UpdateMLTransform',
      'UpdatePartition',
      'UpdateRegistry',
      'UpdateSchema',
      'UpdateSourceControlFromJob',
      'UpdateTable',
      'UpdateTableOptimizer',
      'UpdateTrigger',
      'UpdateUsageProfile',
      'UpdateUserDefinedFunction',
      'UpdateWorkflow',
      'UpgradeJob',
      'UseMLTransforms'
    ],
    Read: [
      'BatchGetBlueprints',
      'BatchGetCrawlers',
      'BatchGetCustomEntityTypes',
      'BatchGetDevEndpoints',
      'BatchGetJobs',
      'BatchGetPartition',
      'BatchGetTableOptimizer',
      'BatchGetTriggers',
      'BatchGetWorkflows',
      'CheckSchemaVersionValidity',
      'GetBlueprint',
      'GetBlueprintRun',
      'GetBlueprintRuns',
      'GetCatalog',
      'GetCatalogImportStatus',
      'GetCatalogs',
      'GetClassifier',
      'GetClassifiers',
      'GetColumnStatisticsForPartition',
      'GetColumnStatisticsForTable',
      'GetColumnStatisticsTaskRun',
      'GetColumnStatisticsTaskRuns',
      'GetColumnStatisticsTaskSettings',
      'GetCompletion',
      'GetConnection',
      'GetConnections',
      'GetCrawler',
      'GetCrawlerMetrics',
      'GetCrawlers',
      'GetCustomEntityType',
      'GetDashboardUrl',
      'GetDataCatalogEncryptionSettings',
      'GetDataQualityModel',
      'GetDataQualityModelResult',
      'GetDataQualityResult',
      'GetDataQualityRuleRecommendationRun',
      'GetDataQualityRuleset',
      'GetDataQualityRulesetEvaluationRun',
      'GetDatabase',
      'GetDatabases',
      'GetDataflowGraph',
      'GetDevEndpoint',
      'GetDevEndpoints',
      'GetEntityRecords',
      'GetGeneratedCode',
      'GetIntegrationResourceProperty',
      'GetIntegrationTableProperties',
      'GetJob',
      'GetJobBookmark',
      'GetJobRun',
      'GetJobRuns',
      'GetJobUpgradeAnalysis',
      'GetJobs',
      'GetMLTaskRun',
      'GetMLTransform',
      'GetMapping',
      'GetPartition',
      'GetPartitionIndexes',
      'GetPartitions',
      'GetPlan',
      'GetRegistry',
      'GetResourcePolicies',
      'GetResourcePolicy',
      'GetSchema',
      'GetSchemaByDefinition',
      'GetSchemaVersion',
      'GetSchemaVersionsDiff',
      'GetSecurityConfiguration',
      'GetSecurityConfigurations',
      'GetSession',
      'GetStatement',
      'GetTable',
      'GetTableOptimizer',
      'GetTableVersion',
      'GetTableVersions',
      'GetTables',
      'GetTags',
      'GetTrigger',
      'GetTriggers',
      'GetUsageProfile',
      'GetUserDefinedFunction',
      'GetUserDefinedFunctions',
      'GetWorkflow',
      'GetWorkflowRun',
      'GetWorkflowRunProperties',
      'GetWorkflowRuns',
      'ListColumnStatisticsTaskRuns',
      'SearchTables'
    ],
    'Permissions management': [
      'BatchGetStageFiles',
      'DeleteResourcePolicy',
      'DeregisterDataPreview',
      'DescribeConnectionType',
      'DescribeEntity',
      'GetDataPreviewStatement',
      'GetEnvironment',
      'GetExecutors',
      'GetExecutorsThreads',
      'GetLogParsingStatus',
      'GetNotebookInstanceStatus',
      'GetQueries',
      'GetQuery',
      'GetRecipeAction',
      'GetStage',
      'GetStageAttempt',
      'GetStageAttemptTaskList',
      'GetStageAttemptTaskSummary',
      'GetStageFiles',
      'GetStages',
      'GetStorage',
      'GetStorageUnit',
      'GlueNotebookAuthorize',
      'GlueNotebookRefreshCredentials',
      'ListConnectionTypes',
      'ListEntities',
      'PutResourcePolicy',
      'RefreshOAuth2Tokens',
      'RequestLogParsing',
      'RunDataPreviewStatement',
      'SendRecipeAction',
      'StartNotebook',
      'TerminateNotebook',
      'TestConnection',
      'UseGlueStudio'
    ],
    List: [
      'DescribeInboundIntegrations',
      'DescribeIntegrations',
      'GetMLTaskRuns',
      'GetMLTransforms',
      'ListBlueprints',
      'ListCrawlers',
      'ListCrawls',
      'ListCustomEntityTypes',
      'ListDataQualityResults',
      'ListDataQualityRuleRecommendationRuns',
      'ListDataQualityRulesetEvaluationRuns',
      'ListDataQualityRulesets',
      'ListDevEndpoints',
      'ListJobUpgradeAnalyses',
      'ListJobs',
      'ListMLTransforms',
      'ListRegistries',
      'ListSchemaVersions',
      'ListSchemas',
      'ListSessions',
      'ListStatements',
      'ListTableOptimizerRuns',
      'ListTriggers',
      'ListUsageProfiles',
      'ListWorkflows',
      'QuerySchemaVersionMetadata'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type rootcatalog to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onRootcatalog(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog`);
  }

  /**
   * Adds a resource of type catalog to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param catalogName - Identifier for the catalogName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCatalog(catalogName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog/${ catalogName }`);
  }

  /**
   * Adds a resource of type database to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param databaseName - Identifier for the databaseName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDatabase(databaseName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:database/${ databaseName }`);
  }

  /**
   * Adds a resource of type table to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param databaseName - Identifier for the databaseName.
   * @param tableName - Identifier for the tableName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTable(databaseName: string, tableName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:table/${ databaseName }/${ tableName }`);
  }

  /**
   * Adds a resource of type tableversion to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param databaseName - Identifier for the databaseName.
   * @param tableName - Identifier for the tableName.
   * @param tableVersionName - Identifier for the tableVersionName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTableversion(databaseName: string, tableName: string, tableVersionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:tableVersion/${ databaseName }/${ tableName }/${ tableVersionName }`);
  }

  /**
   * Adds a resource of type connection to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param connectionName - Identifier for the connectionName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnection(connectionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:connection/${ connectionName }`);
  }

  /**
   * Adds a resource of type userdefinedfunction to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param databaseName - Identifier for the databaseName.
   * @param userDefinedFunctionName - Identifier for the userDefinedFunctionName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onUserdefinedfunction(databaseName: string, userDefinedFunctionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:userDefinedFunction/${ databaseName }/${ userDefinedFunctionName }`);
  }

  /**
   * Adds a resource of type devendpoint to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param devEndpointName - Identifier for the devEndpointName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevendpoint(devEndpointName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:devEndpoint/${ devEndpointName }`);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param jobName - Identifier for the jobName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJob(jobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:job/${ jobName }`);
  }

  /**
   * Adds a resource of type trigger to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param triggerName - Identifier for the triggerName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTrigger(triggerName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:trigger/${ triggerName }`);
  }

  /**
   * Adds a resource of type crawler to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param crawlerName - Identifier for the crawlerName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCrawler(crawlerName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:crawler/${ crawlerName }`);
  }

  /**
   * Adds a resource of type workflow to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param workflowName - Identifier for the workflowName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkflow(workflowName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workflow/${ workflowName }`);
  }

  /**
   * Adds a resource of type blueprint to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param blueprintName - Identifier for the blueprintName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBlueprint(blueprintName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:blueprint/${ blueprintName }`);
  }

  /**
   * Adds a resource of type mlTransform to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param transformId - Identifier for the transformId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMlTransform(transformId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:mlTransform/${ transformId }`);
  }

  /**
   * Adds a resource of type registry to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param registryName - Identifier for the registryName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRegistry(registryName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:registry/${ registryName }`);
  }

  /**
   * Adds a resource of type schema to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param schemaName - Identifier for the schemaName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSchema(schemaName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:schema/${ schemaName }`);
  }

  /**
   * Adds a resource of type session to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param sessionId - Identifier for the sessionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSession(sessionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:session/${ sessionId }`);
  }

  /**
   * Adds a resource of type usageProfile to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param usageProfileId - Identifier for the usageProfileId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUsageProfile(usageProfileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:usageProfile/${ usageProfileId }`);
  }

  /**
   * Adds a resource of type dataQualityRuleset to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param rulesetName - Identifier for the rulesetName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataQualityRuleset(rulesetName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:dataQualityRuleset/${ rulesetName }`);
  }

  /**
   * Adds a resource of type customEntityType to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param customEntityTypeId - Identifier for the customEntityTypeId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCustomEntityType(customEntityTypeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:customEntityType/${ customEntityTypeId }`);
  }

  /**
   * Adds a resource of type completion to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param completionId - Identifier for the completionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCompletion(completionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:completion/${ completionId }`);
  }

  /**
   * Adds a resource of type integration to the statement
   *
   * https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   *
   * @param integrationId - Identifier for the integrationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegration(integrationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:glue:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:integration:${ integrationId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateBlueprint()
   * - .toCreateConnection()
   * - .toCreateCrawler()
   * - .toCreateCustomEntityType()
   * - .toCreateDataQualityRuleset()
   * - .toCreateDevEndpoint()
   * - .toCreateIntegration()
   * - .toCreateJob()
   * - .toCreateMLTransform()
   * - .toCreateRegistry()
   * - .toCreateSchema()
   * - .toCreateSession()
   * - .toCreateTrigger()
   * - .toCreateUsageProfile()
   * - .toCreateWorkflow()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toDeleteIntegration()
   * - .toDescribeIntegrations()
   * - .toModifyIntegration()
   *
   * Applies to resource types:
   * - connection
   * - devendpoint
   * - job
   * - trigger
   * - crawler
   * - workflow
   * - blueprint
   * - mlTransform
   * - registry
   * - schema
   * - session
   * - usageProfile
   * - dataQualityRuleset
   * - customEntityType
   * - integration
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
   * - .toCreateBlueprint()
   * - .toCreateConnection()
   * - .toCreateCrawler()
   * - .toCreateCustomEntityType()
   * - .toCreateDataQualityRuleset()
   * - .toCreateDevEndpoint()
   * - .toCreateIntegration()
   * - .toCreateJob()
   * - .toCreateMLTransform()
   * - .toCreateRegistry()
   * - .toCreateSchema()
   * - .toCreateSession()
   * - .toCreateTrigger()
   * - .toCreateUsageProfile()
   * - .toCreateWorkflow()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the service from which the credentials of the request is issued
   *
   * https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCredentialIssuingService(value: string | string[], operator?: Operator | string) {
    return this.if(`CredentialIssuingService`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of the key configured for role's identity-based policy
   *
   * https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys
   *
   * Applies to actions:
   * - .toGetCatalog()
   * - .toGetCatalogs()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifEnabledForRedshiftAutoDiscovery(value?: boolean) {
    return this.if(`EnabledForRedshiftAutoDiscovery`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the service from which the credentials of the request is obtained by assuming the customer role
   *
   * https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRoleAssumedBy(value: string | string[], operator?: Operator | string) {
    return this.if(`RoleAssumedBy`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of security groups configured for the Glue job
   *
   * https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys
   *
   * Applies to actions:
   * - .toCreateJob()
   * - .toCreateSession()
   * - .toUpdateJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecurityGroupIds(value: string | string[], operator?: Operator | string) {
    return this.if(`SecurityGroupIds`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of subnets configured for the Glue job
   *
   * https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys
   *
   * Applies to actions:
   * - .toCreateJob()
   * - .toCreateSession()
   * - .toUpdateJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubnetIds(value: string | string[], operator?: Operator | string) {
    return this.if(`SubnetIds`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the VPC configured for the Glue job
   *
   * https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys
   *
   * Applies to actions:
   * - .toCreateJob()
   * - .toCreateSession()
   * - .toUpdateJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcIds(value: string | string[], operator?: Operator | string) {
    return this.if(`VpcIds`, value, operator ?? 'StringLike');
  }
}
